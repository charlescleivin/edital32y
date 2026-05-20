import { diffWords } from 'diff'

export interface DiffPart {
  value: string
  added?: boolean
  removed?: boolean
}

export interface FieldDiff {
  path: string
  label: string
  from: string
  to: string
  parts: DiffPart[]
}

export interface SectionDiff {
  sectionId: string
  hasChanges: boolean
  fields: FieldDiff[]
}

export type SectionDiffMap = Record<string, SectionDiff>

function humanLabel(path: string): string {
  const last = path.split('.').pop() ?? path
  return last
    .replace(/([A-Z])/g, ' $1')
    .replace(/^./, (c) => c.toUpperCase())
    .trim()
}

function collectStringPaths(
  obj: unknown,
  prefix = '',
  out: Array<{ path: string; value: string }> = [],
): Array<{ path: string; value: string }> {
  if (typeof obj === 'string' && obj.length > 0) {
    out.push({ path: prefix, value: obj })
  } else if (Array.isArray(obj)) {
    obj.forEach((item, i) => collectStringPaths(item, `${prefix}[${i}]`, out))
  } else if (obj && typeof obj === 'object') {
    for (const [k, v] of Object.entries(obj as Record<string, unknown>)) {
      collectStringPaths(v, prefix ? `${prefix}.${k}` : k, out)
    }
  }
  return out
}

function valueAtPath(obj: unknown, path: string): string | undefined {
  const parts = path.split(/\.|\[(\d+)\]/).filter(Boolean)
  let cur: unknown = obj
  for (const part of parts) {
    if (cur == null || typeof cur !== 'object') return undefined
    cur = (cur as Record<string, unknown>)[part]
  }
  return typeof cur === 'string' ? cur : undefined
}

const SECTION_KEYS = [
  's1', 's2', 's3', 's4', 's5', 's6', 's7', 's8', 's9', 's10', 's11',
  'hero', 'charles', 'meta',
] as const

type TopKey = typeof SECTION_KEYS[number]

export function computeDiffs(
  fromData: Record<string, unknown>,
  toData: Record<string, unknown>,
): SectionDiffMap {
  const result: SectionDiffMap = {}

  for (const key of SECTION_KEYS) {
    const fromSection = fromData[key]
    const toSection = toData[key]

    const fromPaths = collectStringPaths(fromSection, '')
    const toPaths = collectStringPaths(toSection, '')

    const allPaths = new Set([...fromPaths.map((p) => p.path), ...toPaths.map((p) => p.path)])

    const fields: FieldDiff[] = []

    for (const path of allPaths) {
      const fromVal = valueAtPath(fromSection, path) ?? ''
      const toVal = valueAtPath(toSection, path) ?? ''
      if (fromVal === toVal) continue
      // Skip trivial single-word icon/code fields
      if (path.endsWith('.icon') || path.endsWith('.id') || path.endsWith('.ref')) continue

      const parts = diffWords(fromVal, toVal)
      const hasRealChange = parts.some((p) => p.added || p.removed)
      if (!hasRealChange) continue

      fields.push({ path, label: humanLabel(path), from: fromVal, to: toVal, parts })
    }

    result[key] = { sectionId: key, hasChanges: fields.length > 0, fields }
  }

  return result
}
