import { existsSync, readFileSync } from 'fs'
import { join } from 'path'

const ROOT = join(__dirname, '../../')
const VERSIONS_DIR = join(ROOT, 'public/versions')

const changelog: Array<{ id: string; commit: string; date: string; label: string; description: string }> =
  JSON.parse(readFileSync(join(VERSIONS_DIR, 'changelog.json'), 'utf-8'))

describe('version snapshots', () => {
  it('changelog.json has at least one entry', () => {
    expect(changelog.length).toBeGreaterThan(0)
  })

  it('every changelog entry has required fields', () => {
    for (const v of changelog) {
      expect(v.id).toMatch(/^v\d+$/)
      expect(v.commit).toMatch(/^[0-9a-f]{7}$/)
      expect(v.date).toMatch(/^\d{4}-\d{2}-\d{2}$/)
      expect(typeof v.label).toBe('string')
      expect(typeof v.description).toBe('string')
    }
  })

  it('version IDs are sequential with no gaps', () => {
    const ids = changelog.map((v) => parseInt(v.id.replace('v', ''), 10))
    ids.forEach((id, i) => expect(id).toBe(i + 1))
  })

  it('every changelog entry has a matching JSON file', () => {
    for (const v of changelog) {
      const file = join(VERSIONS_DIR, `${v.id}.json`)
      expect(existsSync(file)).toBe(true)
    }
  })

  it('every version file is valid proposal JSON with required sections', () => {
    for (const v of changelog) {
      const file = join(VERSIONS_DIR, `${v.id}.json`)
      const data = JSON.parse(readFileSync(file, 'utf-8'))
      expect(data).toHaveProperty('s2')
      expect(data).toHaveProperty('meta')
    }
  })

  it('no orphaned version files without a changelog entry', () => {
    const { readdirSync } = require('fs')
    const files = readdirSync(VERSIONS_DIR)
      .filter((f: string) => f.match(/^v\d+\.json$/))
      .map((f: string) => f.replace('.json', ''))
    const inChangelog = new Set(changelog.map((v) => v.id))
    for (const f of files) {
      expect(inChangelog.has(f)).toBe(true)
    }
  })
})
