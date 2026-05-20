'use client'

import { useEffect, useRef } from 'react'
import { useVersion } from '@/context/VersionContext'
import type { FieldDiff } from '@/lib/diffEngine'

const SECTION_NAMES: Record<string, string> = {
  hero: 'Capa',
  charles: 'Charles',
  s1: 'Sumário',
  s2: 'Justificativa',
  s3: 'Objetivos',
  s4: 'Metodologia',
  s5: 'Equipe',
  s6: 'Orçamento',
  s7: 'Parcerias',
  s8: 'Indicadores',
  s9: 'Riscos',
  s10: 'Checklist',
  s11: 'Referências',
}

const SECTION_ORDER = ['hero', 'charles', 's1', 's2', 's3', 's4', 's5', 's6', 's7', 's8', 's9', 's10', 's11']

function WordDiff({ field }: { field: FieldDiff }) {
  return (
    <div className="mb-4 rounded-xl p-4" style={{ background: 'rgba(255,255,255,0.03)', border: '1px solid rgba(237,229,211,0.06)' }}>
      <div className="mb-2 text-[10px] font-bold uppercase tracking-[2px]" style={{ color: 'var(--txtll)' }}>
        {field.label}
      </div>
      <p className="text-[12.5px] leading-relaxed" style={{ color: 'var(--txtl)' }}>
        {field.parts.map((part, i) => {
          if (part.removed) {
            return (
              <span
                key={i}
                className="rounded px-0.5 line-through"
                style={{ background: 'rgba(239,68,68,0.15)', color: '#f87171' }}
              >
                {part.value}
              </span>
            )
          }
          if (part.added) {
            return (
              <span
                key={i}
                className="rounded px-0.5"
                style={{ background: 'rgba(34,197,94,0.15)', color: '#4ade80' }}
              >
                {part.value}
              </span>
            )
          }
          return <span key={i}>{part.value}</span>
        })}
      </p>
    </div>
  )
}

export default function DiffDrawer() {
  const {
    versions,
    fromId,
    toId,
    panelOpen,
    activeSectionId,
    diff,
    loading,
    setFromId,
    setToId,
    closePanel,
    setActiveSectionId,
  } = useVersion()

  const sectionRefs = useRef<Record<string, HTMLDivElement | null>>({})

  useEffect(() => {
    if (activeSectionId && panelOpen) {
      const el = sectionRefs.current[activeSectionId]
      el?.scrollIntoView({ behavior: 'smooth', block: 'start' })
    }
  }, [activeSectionId, panelOpen, diff])

  const changedSections = SECTION_ORDER.filter((k) => diff?.[k]?.hasChanges)
  const totalFields = changedSections.reduce((sum, k) => sum + (diff?.[k]?.fields.length ?? 0), 0)

  return (
    <>
      {/* backdrop */}
      {panelOpen && (
        <div
          className="fixed inset-0 z-40"
          style={{ background: 'rgba(0,0,0,0.4)' }}
          onClick={closePanel}
        />
      )}

      {/* drawer */}
      <aside
        className="fixed right-0 top-0 z-50 flex h-screen flex-col overflow-hidden transition-transform duration-300"
        style={{
          width: '420px',
          background: '#0d1109',
          borderLeft: '1px solid rgba(237,229,211,0.08)',
          transform: panelOpen ? 'translateX(0)' : 'translateX(100%)',
        }}
      >
        {/* header */}
        <div
          className="flex shrink-0 items-center justify-between px-6 py-5"
          style={{ borderBottom: '1px solid rgba(237,229,211,0.06)' }}
        >
          <div>
            <div
              className="text-[15px] font-bold"
              style={{ fontFamily: 'var(--font-playfair)', color: 'var(--txt)' }}
            >
              Histórico de Alterações
            </div>
            <div className="mt-0.5 text-[11px]" style={{ color: 'var(--txtll)' }}>
              {loading
                ? 'Carregando…'
                : `${totalFields} campo${totalFields !== 1 ? 's' : ''} em ${changedSections.length} seção${changedSections.length !== 1 ? 'ões' : ''}`}
            </div>
          </div>
          <button
            onClick={closePanel}
            className="flex h-8 w-8 items-center justify-center rounded-lg text-[18px] transition-colors hover:bg-white/5"
            style={{ color: 'var(--txtl)' }}
          >
            ×
          </button>
        </div>

        {/* version picker */}
        <div
          className="flex shrink-0 items-center gap-3 px-6 py-4"
          style={{ borderBottom: '1px solid rgba(237,229,211,0.06)', background: 'rgba(255,255,255,0.02)' }}
        >
          <div className="flex min-w-0 flex-1 flex-col gap-1">
            <label className="text-[9px] font-bold uppercase tracking-[2px]" style={{ color: 'var(--txtll)' }}>De</label>
            <select
              value={fromId}
              onChange={(e) => setFromId(e.target.value)}
              className="w-full rounded-lg px-3 py-2 text-[12px] font-medium outline-none"
              style={{
                background: 'rgba(237,229,211,0.05)',
                border: '1px solid rgba(237,229,211,0.1)',
                color: 'var(--txt)',
              }}
            >
              {versions.map((v) => (
                <option key={v.id} value={v.id} style={{ background: '#0d1109' }}>
                  {v.label} — {v.date}
                </option>
              ))}
            </select>
          </div>
          <div className="mt-5 text-[18px]" style={{ color: 'var(--txtll)' }}>→</div>
          <div className="flex min-w-0 flex-1 flex-col gap-1">
            <label className="text-[9px] font-bold uppercase tracking-[2px]" style={{ color: 'var(--txtll)' }}>Para</label>
            <select
              value={toId}
              onChange={(e) => setToId(e.target.value)}
              className="w-full rounded-lg px-3 py-2 text-[12px] font-medium outline-none"
              style={{
                background: 'rgba(237,229,211,0.05)',
                border: '1px solid rgba(237,229,211,0.1)',
                color: 'var(--txt)',
              }}
            >
              {versions.map((v) => (
                <option key={v.id} value={v.id} style={{ background: '#0d1109' }}>
                  {v.label} — {v.date}
                </option>
              ))}
            </select>
          </div>
        </div>

        {/* section nav pills */}
        {changedSections.length > 0 && (
          <div
            className="flex shrink-0 gap-2 overflow-x-auto px-6 py-3"
            style={{ borderBottom: '1px solid rgba(237,229,211,0.06)' }}
          >
            {changedSections.map((k) => (
              <button
                key={k}
                onClick={() => setActiveSectionId(k)}
                className="shrink-0 rounded-full px-3 py-1 text-[11px] font-semibold transition-all"
                style={{
                  background: activeSectionId === k ? 'rgba(200,85,48,0.2)' : 'rgba(237,229,211,0.05)',
                  border: `1px solid ${activeSectionId === k ? 'rgba(200,85,48,0.4)' : 'rgba(237,229,211,0.08)'}`,
                  color: activeSectionId === k ? '#c85530' : 'var(--txtl)',
                }}
              >
                {SECTION_NAMES[k] ?? k}
              </button>
            ))}
          </div>
        )}

        {/* content */}
        <div className="flex-1 overflow-y-auto px-6 py-5">
          {loading && (
            <div className="flex h-full items-center justify-center text-[13px]" style={{ color: 'var(--txtll)' }}>
              Computando diff…
            </div>
          )}

          {!loading && changedSections.length === 0 && (
            <div className="flex h-full flex-col items-center justify-center gap-2 text-center">
              <div className="text-[32px]">✓</div>
              <div className="text-[13px] font-medium" style={{ color: 'var(--txtl)' }}>
                Nenhuma alteração entre as versões selecionadas
              </div>
            </div>
          )}

          {!loading &&
            SECTION_ORDER.filter((k) => diff?.[k]?.hasChanges).map((k) => (
              <div
                key={k}
                ref={(el) => { sectionRefs.current[k] = el }}
                className="mb-8 scroll-mt-4"
              >
                <div
                  className="mb-3 flex items-center gap-2"
                  style={{ borderBottom: '1px solid rgba(237,229,211,0.06)', paddingBottom: '8px' }}
                >
                  <span
                    className="flex h-5 w-5 items-center justify-center rounded-md text-[9px] font-bold"
                    style={{ background: 'rgba(200,85,48,0.15)', color: '#c85530' }}
                  >
                    {k.replace('s', '')}
                  </span>
                  <span className="text-[13px] font-semibold" style={{ color: 'var(--txt)' }}>
                    {SECTION_NAMES[k] ?? k}
                  </span>
                  <span className="ml-auto text-[10px]" style={{ color: 'var(--txtll)' }}>
                    {diff![k].fields.length} campo{diff![k].fields.length !== 1 ? 's' : ''}
                  </span>
                </div>
                {diff![k].fields.map((field, i) => (
                  <WordDiff key={i} field={field} />
                ))}
              </div>
            ))}
        </div>
      </aside>
    </>
  )
}
