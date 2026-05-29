/**
 * cleanup-tasks.mjs
 * Performs three cleanup tasks:
 *   TASK 1: Remove Cleveroad/SpaceO citations from s4.subsections.whatsappDecisao.citations
 *   TASK 2: Replace em-dashes (` — `) with `, ` across ALL string values in proposal.json
 *   TASK 3: Remove emojis from specific string fields in proposal.json
 *
 * After each task the JSON is written back and re-parsed to verify validity.
 */

import { readFileSync, writeFileSync } from 'fs'
import { resolve, dirname } from 'path'
import { fileURLToPath } from 'url'

const __dirname = dirname(fileURLToPath(import.meta.url))
const PROPOSAL_PATH = resolve(__dirname, '../data/proposal.json')

// ─────────────────────────────────────────────────────────────────────────────
// Helpers
// ─────────────────────────────────────────────────────────────────────────────

function readProposal() {
  const raw = readFileSync(PROPOSAL_PATH, 'utf8')
  return JSON.parse(raw)
}

function writeProposal(data) {
  const str = JSON.stringify(data, null, 2)
  // Verify it round-trips cleanly
  JSON.parse(str)
  writeFileSync(PROPOSAL_PATH, str, 'utf8')
}

// ─────────────────────────────────────────────────────────────────────────────
// TASK 1: Remove Cleveroad / SpaceO citations
// ─────────────────────────────────────────────────────────────────────────────

function task1(data) {
  console.log('\n── TASK 1: Remove Cleveroad/SpaceO citations ──')
  const citations = data?.s4?.subsections?.whatsappDecisao?.citations
  if (!Array.isArray(citations)) {
    console.log('  WARNING: citations array not found at expected path')
    return data
  }
  const before = citations.length
  const filtered = citations.filter(c => {
    const authors = typeof c.authors === 'string' ? c.authors : ''
    const remove = /Cleveroad|SpaceO/i.test(authors)
    if (remove) console.log(`  Removing citation: "${c.title}" (authors: ${c.authors})`)
    return !remove
  })
  data.s4.subsections.whatsappDecisao.citations = filtered
  console.log(`  Before: ${before} citations → After: ${filtered.length} citations (removed ${before - filtered.length})`)
  return data
}

// ─────────────────────────────────────────────────────────────────────────────
// TASK 2: Replace em-dashes in ALL string values
// ─────────────────────────────────────────────────────────────────────────────

function replaceEmDashes(str) {
  // ' — ' → ', '  (space–emdash–space)
  let out = str.replace(/ — /g, ', ')
  // '— ' at start of string → ''
  out = out.replace(/^— /, '')
  // ' —' at end of string → ''
  out = out.replace(/ —$/, '')
  return out
}

let task2Count = 0

function traverseEmDash(value) {
  if (typeof value === 'string') {
    const replaced = replaceEmDashes(value)
    if (replaced !== value) task2Count++
    return replaced
  }
  if (Array.isArray(value)) return value.map(traverseEmDash)
  if (value !== null && typeof value === 'object') {
    const out = {}
    for (const [k, v] of Object.entries(value)) out[k] = traverseEmDash(v)
    return out
  }
  return value
}

function task2(data) {
  console.log('\n── TASK 2: Replace em-dashes in all string values ──')
  task2Count = 0
  const result = traverseEmDash(data)
  console.log(`  Replaced em-dashes in ${task2Count} string values`)
  return result
}

// ─────────────────────────────────────────────────────────────────────────────
// TASK 3: Remove emojis from specific JSON fields
// ─────────────────────────────────────────────────────────────────────────────

// Fields to clean (exact key names)
const FIELDS_TO_CLEAN = new Set([
  'number', 'title', 'subtitle', 'headline', 'badge', 'label', 'content',
  'body', 'description', 'name', 'role', 'argument', 'conclusion',
])

// Fields to PRESERVE (never strip)
const FIELDS_TO_PRESERVE = new Set([
  'icon', 'avatar', 'flag', 'emoji',
])

// Emoji regex — matches all emoji codepoints including ZWJ sequences, skin tones, flags, etc.
// Using Unicode property escape \p{Emoji} with modifiers for a thorough match.
const EMOJI_RE = /[\u{1F000}-\u{1FFFF}]|[\u{2600}-\u{27BF}]|[\u{1F300}-\u{1F9FF}]|[\u{FE00}-\u{FEFF}]|‍|[\u{1F1E0}-\u{1F1FF}]{2}|️/gu

// More comprehensive emoji regex
const EMOJI_FULL_RE = /(?:\p{Emoji_Presentation}|\p{Extended_Pictographic})(?:️|︎)?(?:⃣)?(?:‍(?:\p{Emoji_Presentation}|\p{Extended_Pictographic})(?:️|︎)?(?:⃣)?)*|\p{Regional_Indicator}\p{Regional_Indicator}/gu

function removeEmojis(str) {
  // Remove emoji sequences including variation selectors, ZWJ, etc.
  let out = str.replace(EMOJI_FULL_RE, '')
  // Clean up any orphaned variation selectors / ZWJ
  out = out.replace(/[️︎‍⃣]/g, '')
  // Collapse double spaces that might result
  out = out.replace(/  +/g, ' ').trim()
  return out
}

let task3Count = 0

function traverseEmoji(value, parentKey) {
  if (typeof value === 'string') {
    if (parentKey !== undefined && FIELDS_TO_PRESERVE.has(parentKey)) return value
    if (parentKey !== undefined && !FIELDS_TO_CLEAN.has(parentKey)) return value
    const cleaned = removeEmojis(value)
    if (cleaned !== value) {
      task3Count++
      // show a shortened diff
      const preview = value.substring(0, 60).replace(/\n/g, '\\n')
      console.log(`  Cleaned [${parentKey}]: "${preview}"`)
    }
    return cleaned
  }
  if (Array.isArray(value)) return value.map(item => traverseEmoji(item, parentKey))
  if (value !== null && typeof value === 'object') {
    const out = {}
    for (const [k, v] of Object.entries(value)) {
      out[k] = traverseEmoji(v, FIELDS_TO_PRESERVE.has(k) ? k : (FIELDS_TO_CLEAN.has(k) ? k : k))
    }
    return out
  }
  return value
}

// We need to pass the actual key name down when entering object properties
function traverseEmojiObj(obj) {
  if (Array.isArray(obj)) return obj.map(item => traverseEmojiObj(item))
  if (obj !== null && typeof obj === 'object') {
    const out = {}
    for (const [k, v] of Object.entries(obj)) {
      if (typeof v === 'string') {
        if (FIELDS_TO_PRESERVE.has(k)) {
          out[k] = v // keep as-is
        } else if (FIELDS_TO_CLEAN.has(k)) {
          const cleaned = removeEmojis(v)
          if (cleaned !== v) {
            task3Count++
            console.log(`  Cleaned [${k}]: "${v.substring(0, 60)}"`)
          }
          out[k] = cleaned
        } else {
          out[k] = v // don't touch other string fields
        }
      } else {
        out[k] = traverseEmojiObj(v)
      }
    }
    return out
  }
  return obj
}

function task3(data) {
  console.log('\n── TASK 3: Remove emojis from specific JSON fields ──')
  task3Count = 0
  const result = traverseEmojiObj(data)
  console.log(`  Cleaned emojis from ${task3Count} field values`)
  return result
}

// ─────────────────────────────────────────────────────────────────────────────
// Main
// ─────────────────────────────────────────────────────────────────────────────

let data = readProposal()

data = task1(data)
writeProposal(data)
data = readProposal() // re-read to verify
console.log('  ✓ Task 1 written and verified (JSON.parse OK)')

data = task2(data)
writeProposal(data)
data = readProposal()
console.log('  ✓ Task 2 written and verified (JSON.parse OK)')

data = task3(data)
writeProposal(data)
data = readProposal()
console.log('  ✓ Task 3 written and verified (JSON.parse OK)')

console.log('\n✅ All three tasks complete. proposal.json is valid JSON.')
