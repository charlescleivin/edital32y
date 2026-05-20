#!/usr/bin/env node
/**
 * Called by scripts/hooks/post-commit whenever data/proposal.json changes.
 * Extracts a snapshot of the committed JSON into public/versions/vN.json
 * and updates public/versions/changelog.json, then auto-commits those files.
 */
import { execSync } from 'child_process'
import { readFileSync, writeFileSync, mkdirSync } from 'fs'
import { join, dirname } from 'path'
import { fileURLToPath } from 'url'

const PROJECT_DIR = join(dirname(fileURLToPath(import.meta.url)), '..')

function git(cmd) {
  return execSync(cmd, { cwd: PROJECT_DIR, encoding: 'utf-8' }).trim()
}

// Skip if this is already an auto-version commit (prevents re-entry)
const lastMsg = git('git log -1 --format=%s')
if (lastMsg.startsWith('[auto]') || lastMsg.includes('[skip-version]')) process.exit(0)

// Resolve the path of proposal.json relative to the git root
const gitPrefix = git('git rev-parse --show-prefix') // e.g. "roca-conectada/"
const proposalGitPath = `${gitPrefix}data/proposal.json`

// Check if proposal.json was part of this commit
let changedFiles
try {
  changedFiles = git('git diff HEAD~1 HEAD --name-only')
} catch {
  // Initial commit has no parent
  changedFiles = git('git diff-tree --no-commit-id -r --name-only HEAD')
}
if (!changedFiles.includes(proposalGitPath)) process.exit(0)

// Gather commit metadata
const hash = git('git rev-parse HEAD')
const shortHash = hash.slice(0, 7)
const date = git('git log -1 --format=%ai').slice(0, 10)
const commitMsg = git('git log -1 --format=%s')

// Load existing changelog
const changelogPath = join(PROJECT_DIR, 'public/versions/changelog.json')
let changelog = []
try {
  changelog = JSON.parse(readFileSync(changelogPath, 'utf-8'))
} catch { /* first run, start fresh */ }

// Idempotency: bail if this commit was already extracted
if (changelog.some((v) => v.commit === shortHash)) process.exit(0)

// Determine the next version ID
const nextId = `v${changelog.length + 1}`

// Extract proposal.json content from the commit (not from working tree)
const content = git(`git show ${hash}:${proposalGitPath}`)

// Write the version snapshot
const versionsDir = join(PROJECT_DIR, 'public/versions')
mkdirSync(versionsDir, { recursive: true })
writeFileSync(join(versionsDir, `${nextId}.json`), content, 'utf-8')

// Append to changelog
changelog.push({
  id: nextId,
  commit: shortHash,
  date,
  label: commitMsg.slice(0, 50),
  description: commitMsg,
})
writeFileSync(changelogPath, JSON.stringify(changelog, null, 2) + '\n', 'utf-8')

// Stage and commit — --no-verify prevents the hook from running on this commit
git(`git add public/versions/${nextId}.json public/versions/changelog.json`)
git(`git commit --no-verify -m "[auto] version snapshot ${nextId} — ${shortHash}"`)

console.log(`[version] extracted ${nextId} (${shortHash}): ${commitMsg.slice(0, 60)}`)
