'use client'

import { useVersion } from '@/context/VersionContext'

interface DiffSectionProps {
  sectionKey: string
  children: React.ReactNode
}

const SECTION_NAMES: Record<string, string> = {
  hero: 'Capa',
  'charles': 'Charles',
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

export default function DiffSection({ sectionKey, children }: DiffSectionProps) {
  const { diff, panelOpen, openPanel } = useVersion()
  const sectionDiff = diff?.[sectionKey]
  const hasChanges = sectionDiff?.hasChanges

  return (
    <div className="relative">
      {hasChanges && panelOpen && (
        <div
          className="pointer-events-none absolute inset-0 z-10"
          style={{ boxShadow: 'inset 4px 0 0 0 #c85530' }}
          aria-hidden
        />
      )}
      {hasChanges && panelOpen && (
        <button
          onClick={() => openPanel(sectionKey)}
          className="absolute right-4 top-4 z-20 flex items-center gap-1.5 rounded-full px-3 py-1 text-[11px] font-semibold transition-all hover:opacity-90"
          style={{
            background: 'rgba(200, 85, 48, 0.15)',
            border: '1px solid rgba(200, 85, 48, 0.4)',
            color: '#c85530',
          }}
        >
          <span
            className="flex h-[6px] w-[6px] rounded-full"
            style={{ background: '#c85530' }}
          />
          {sectionDiff.fields.length} alteração{sectionDiff.fields.length !== 1 ? 'ões' : ''}
          {' · '}
          {SECTION_NAMES[sectionKey] ?? sectionKey}
        </button>
      )}
      {children}
    </div>
  )
}
