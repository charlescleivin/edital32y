import coreJson from '../../data/proposal.json'
import type { ProposalData } from '@/types/proposal'
import maisInovacao from '../../data/editais/mais-inovacao.json'
import agrifamIct from '../../data/editais/agrifam-ict.json'

/**
 * Multi-edital data model.
 *
 * The "grosso" (shared narrative — problem, technical scope, methodology,
 * references) lives once in `data/proposal.json` (the core). Each edital in
 * `data/editais/<slug>.json` supplies only the section-level overrides that
 * genuinely change for that call plus a descriptor. `getEdital(slug)` merges
 * core + overrides at the section-key granularity and substitutes any
 * remaining `[ICT EXECUTORA]` tokens with the edital's executor name.
 *
 * To edit shared content, edit the core once — every edital inherits it.
 */

export type EditalStatus = 'active' | 'closed' | 'draft'

export interface EditalDescriptor {
  slug: string
  /** Opaque, non-guessable URL segment. Editais are private — never linked
   *  from the public site; reachable only by someone who holds this token. */
  token: string
  status: EditalStatus
  label: string
  shortLabel: string
  agency: string
  deadline: string
  value: string
  duration: string
  proponent: string
  modality: string
  tokens: Record<string, string>
}

interface EditalFile {
  descriptor: EditalDescriptor
  overrides: Partial<ProposalData>
}

const core = coreJson as unknown as ProposalData

const editalFiles: Record<string, EditalFile> = {
  'mais-inovacao': maisInovacao as unknown as EditalFile,
  'agrifam-ict': agrifamIct as unknown as EditalFile,
}

/** Recursively replace token strings (e.g. `[ICT EXECUTORA]`) inside any value. */
function applyTokens<T>(value: T, tokens: Record<string, string>): T {
  const entries = Object.entries(tokens)
  if (entries.length === 0) return value
  const walk = (v: unknown): unknown => {
    if (typeof v === 'string') {
      let out = v
      for (const [from, to] of entries) out = out.split(from).join(to)
      return out
    }
    if (Array.isArray(v)) return v.map(walk)
    if (v && typeof v === 'object') {
      const o: Record<string, unknown> = {}
      for (const [k, val] of Object.entries(v)) o[k] = walk(val)
      return o
    }
    return v
  }
  return walk(value) as T
}

/**
 * List every edital descriptor. Intentionally NOT used by any public page —
 * the landing must never enumerate or link editais. Kept for internal/admin
 * tooling only. Active ones first, then by soonest deadline.
 */
export function listEditais(): EditalDescriptor[] {
  return Object.values(editalFiles)
    .map((f) => f.descriptor)
    .sort((a, b) => {
      if (a.status !== b.status) return a.status === 'active' ? -1 : 1
      return a.deadline.localeCompare(b.deadline)
    })
}

/** Resolve an edital file by its opaque URL token (constant-time-ish lookup). */
function fileByToken(token: string): EditalFile | undefined {
  return Object.values(editalFiles).find((f) => f.descriptor.token === token)
}

export function getEditalDescriptorByToken(token: string): EditalDescriptor | undefined {
  return fileByToken(token)?.descriptor
}

/** Every opaque token, for prerendering the private routes. Not exposed publicly. */
export function editalTokens(): string[] {
  return Object.values(editalFiles).map((f) => f.descriptor.token)
}

/** Full, merged proposal for a given edital token (core + overrides + tokens). */
export function getEditalByToken(token: string): ProposalData | undefined {
  const file = fileByToken(token)
  if (!file) return undefined
  const merged = { ...core, ...file.overrides } as ProposalData
  return applyTokens(merged, file.descriptor.tokens)
}

/** The neutral core, with edital-specific tokens replaced by neutral phrasing. */
export function getCore(): ProposalData {
  return applyTokens(core, {
    '[ICT EXECUTORA]': 'a instituição executora',
    'ICT EXECUTORA': 'instituição executora',
  })
}
