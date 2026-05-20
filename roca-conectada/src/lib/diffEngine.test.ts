import { computeDiffs } from './diffEngine'

const base = {
  s1: { title: 'Sumário', summary: 'Resumo inicial do projeto.' },
  s2: {
    title: 'Justificativa',
    openingScenario: 'Cenário original de abertura.',
    barriers: [{ id: 'b1', icon: '🌾', title: 'Barreira', description: 'Descrição da barreira.' }],
  },
  s3: { title: 'Objetivos', generalObjective: 'Objetivo inalterado.' },
}

describe('computeDiffs', () => {
  it('returns no changes when both versions are identical', () => {
    const diff = computeDiffs(base as never, base as never)
    for (const section of Object.values(diff)) {
      expect(section.hasChanges).toBe(false)
      expect(section.fields).toHaveLength(0)
    }
  })

  it('detects a changed text field in s2', () => {
    const updated = {
      ...base,
      s2: { ...base.s2, openingScenario: 'Cenário completamente novo de abertura.' },
    }
    const diff = computeDiffs(base as never, updated as never)
    expect(diff.s2.hasChanges).toBe(true)
    const field = diff.s2.fields.find((f) => f.path === 'openingScenario')
    expect(field).toBeDefined()
    expect(field!.from).toBe('Cenário original de abertura.')
    expect(field!.to).toBe('Cenário completamente novo de abertura.')
  })

  it('does not mark unchanged sections as changed', () => {
    const updated = {
      ...base,
      s2: { ...base.s2, openingScenario: 'Novo cenário.' },
    }
    const diff = computeDiffs(base as never, updated as never)
    expect(diff.s1.hasChanges).toBe(false)
    expect(diff.s3.hasChanges).toBe(false)
  })

  it('produces word-level diff parts with added/removed markers', () => {
    const updated = {
      ...base,
      s1: { ...base.s1, summary: 'Resumo atualizado do projeto.' },
    }
    const diff = computeDiffs(base as never, updated as never)
    const field = diff.s1.fields.find((f) => f.path === 'summary')!
    const removed = field.parts.filter((p) => p.removed).map((p) => p.value.trim())
    const added = field.parts.filter((p) => p.added).map((p) => p.value.trim())
    expect(removed.some((w) => w.includes('inicial'))).toBe(true)
    expect(added.some((w) => w.includes('atualizado'))).toBe(true)
  })

  it('skips icon and id fields', () => {
    const updated = {
      ...base,
      s2: {
        ...base.s2,
        barriers: [{ id: 'b2', icon: '🏡', title: 'Barreira', description: 'Descrição da barreira.' }],
      },
    }
    const diff = computeDiffs(base as never, updated as never)
    const paths = diff.s2.fields.map((f) => f.path)
    expect(paths.every((p) => !p.endsWith('.id') && !p.endsWith('.icon'))).toBe(true)
  })

  it('detects a field added in the new version', () => {
    const updated = {
      ...base,
      s2: { ...base.s2, competitiveContext: 'Novo campo adicionado na versão 2.' },
    }
    const diff = computeDiffs(base as never, updated as never)
    expect(diff.s2.hasChanges).toBe(true)
    const field = diff.s2.fields.find((f) => f.path === 'competitiveContext')
    expect(field).toBeDefined()
    expect(field!.from).toBe('')
    expect(field!.to).toBe('Novo campo adicionado na versão 2.')
  })
})
