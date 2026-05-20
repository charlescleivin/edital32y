'use client'

import { useVersion } from '@/context/VersionContext'

export default function VersionToggle() {
  const { diff, panelOpen, openPanel, closePanel, versions, fromId, toId } = useVersion()

  const changedCount = diff
    ? Object.values(diff).filter((s) => s.hasChanges).length
    : null

  const fromLabel = versions.find((v) => v.id === fromId)?.label ?? fromId
  const toLabel = versions.find((v) => v.id === toId)?.label ?? toId

  return (
    <button
      onClick={() => (panelOpen ? closePanel() : openPanel())}
      className="fixed bottom-6 right-6 z-30 flex items-center gap-2.5 rounded-full px-4 py-3 shadow-lg transition-all duration-200 hover:scale-105"
      style={{
        background: panelOpen
          ? 'rgba(200, 85, 48, 0.9)'
          : 'rgba(13, 17, 9, 0.92)',
        border: `1px solid ${panelOpen ? 'transparent' : 'rgba(237,229,211,0.12)'}`,
        backdropFilter: 'blur(12px)',
        color: panelOpen ? '#fff' : 'var(--txt)',
        boxShadow: '0 8px 32px rgba(0,0,0,0.4)',
      }}
    >
      {/* diff icon */}
      <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
        <rect x="1" y="3" width="14" height="2" rx="1" fill="currentColor" opacity="0.4" />
        <rect x="1" y="7" width="8" height="2" rx="1" fill={panelOpen ? 'currentColor' : '#4ade80'} />
        <rect x="1" y="11" width="11" height="2" rx="1" fill={panelOpen ? 'currentColor' : '#f87171'} opacity="0.7" />
        <rect x="10" y="11" width="5" height="2" rx="1" fill={panelOpen ? 'currentColor' : '#f87171'} />
      </svg>

      <span className="text-[12px] font-semibold">
        {panelOpen ? 'Fechar diff' : 'Ver alterações'}
      </span>

      {!panelOpen && changedCount !== null && changedCount > 0 && (
        <span
          className="flex h-5 min-w-[20px] items-center justify-center rounded-full px-1.5 text-[10px] font-bold"
          style={{ background: '#c85530', color: '#fff' }}
        >
          {changedCount}
        </span>
      )}

      {panelOpen && (
        <span className="text-[11px] opacity-70">
          {fromLabel} → {toLabel}
        </span>
      )}
    </button>
  )
}
