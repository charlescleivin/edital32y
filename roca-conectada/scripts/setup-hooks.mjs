#!/usr/bin/env node
/**
 * Points git's hooks directory at scripts/hooks/ for this repo.
 * Runs automatically after `npm install` via the postinstall script.
 */
import { execSync } from 'child_process'
import { dirname, join } from 'path'
import { fileURLToPath } from 'url'

const PROJECT_DIR = join(dirname(fileURLToPath(import.meta.url)), '..')

// CI and deployment environments (Vercel, GitHub Actions, etc.) don't commit
// code, so git hooks are useless and git config writes may fail. Skip entirely.
if (process.env.CI || process.env.VERCEL) {
  console.log('[setup-hooks] CI/Vercel environment detected — skipping hook setup')
  process.exit(0)
}

function git(cmd) {
  return execSync(cmd, { cwd: PROJECT_DIR, encoding: 'utf-8' }).trim()
}

// core.hooksPath must be relative to the git root, not the project directory
const gitPrefix = git('git rev-parse --show-prefix') // "roca-conectada/"
const hooksPath = `${gitPrefix}scripts/hooks`

git(`git config core.hooksPath "${hooksPath}"`)

// Mark the hook file as executable in git's index so it works on Unix/Mac too
try {
  git('git update-index --add --chmod=+x scripts/hooks/post-commit')
} catch {
  // Already tracked or on a system where this isn't needed
}

console.log(`[setup-hooks] core.hooksPath → ${hooksPath}`)
