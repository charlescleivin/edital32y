'use client'

import { useState, useRef } from 'react'
import { ACRONYMS } from '@/lib/acronyms'

interface TooltipProps {
  acronym: string
  className?: string
}

export function AcronymTooltip({ acronym, className }: TooltipProps) {
  const [visible, setVisible] = useState(false)
  const [pos, setPos] = useState<{ top: number; left: number; below: boolean }>({ top: 0, left: 0, below: true })
  const ref = useRef<HTMLSpanElement>(null)
  const tooltipRef = useRef<HTMLDivElement>(null)
  const entry = ACRONYMS[acronym]
  if (!entry) return <span className={className}>{acronym}</span>

  function showTooltip() {
    if (!ref.current) return
    const rect = ref.current.getBoundingClientRect()
    const below = rect.bottom + 200 < window.innerHeight
    setPos({
      top: below ? rect.bottom + window.scrollY + 6 : rect.top + window.scrollY - 6,
      left: Math.min(rect.left + window.scrollX, window.innerWidth - 320),
      below,
    })
    setVisible(true)
  }

  return (
    <>
      <span
        ref={ref}
        className={`cursor-help border-b border-dotted ${className ?? ''}`}
        style={{ borderColor: 'var(--gold)', color: 'inherit' }}
        onMouseEnter={showTooltip}
        onMouseLeave={() => setVisible(false)}
        onFocus={showTooltip}
        onBlur={() => setVisible(false)}
        tabIndex={0}
        aria-describedby={`tooltip-${acronym}`}
      >
        {acronym}
      </span>
      {visible && (
        <div
          ref={tooltipRef}
          id={`tooltip-${acronym}`}
          role="tooltip"
          style={{
            position: 'absolute',
            top: pos.below ? pos.top : undefined,
            bottom: pos.below ? undefined : `calc(100vh - ${pos.top}px)`,
            left: pos.left,
            zIndex: 9999,
            width: 300,
            background: 'var(--bg-card)',
            border: '1px solid var(--bdr)',
            borderRadius: 10,
            padding: '12px 14px',
            boxShadow: '0 8px 32px rgba(0,0,0,0.45)',
            pointerEvents: 'none',
          }}
        >
          <div style={{ fontSize: 11, fontWeight: 700, color: 'var(--gold)', letterSpacing: '0.08em', marginBottom: 4 }}>
            {entry.short} — {entry.full}
          </div>
          <div style={{ fontSize: 12, lineHeight: 1.6, color: 'var(--txtl)' }}>
            {entry.context}
          </div>
        </div>
      )}
    </>
  )
}
