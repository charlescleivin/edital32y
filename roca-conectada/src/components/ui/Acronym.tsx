'use client'
import { useState, useRef, useEffect } from 'react'
import { createPortal } from 'react-dom'
import { acronymGlossary } from '@/lib/acronymGlossary'

interface AcronymProps {
  term: string
  children: React.ReactNode
}

interface TooltipPos {
  boxLeft: number   // clamped left edge of tooltip box
  arrowLeft: number // arrow position within the box, pointing at the word
  y: number         // top of the anchor element (for above) or bottom (for below)
  above: boolean    // show above the word?
}

const TIP_W   = 260
const MARGIN  = 10
const TIP_H_EST = 130 // conservative estimate for show-above check

export function Acronym({ term, children }: AcronymProps) {
  const entry = acronymGlossary[term]
  const [pos, setPos] = useState<TooltipPos | null>(null)
  const ref = useRef<HTMLSpanElement>(null)
  const [mounted, setMounted] = useState(false)

  useEffect(() => { setMounted(true) }, [])

  if (!entry) return <>{children}</>

  const handleEnter = () => {
    if (!ref.current) return
    const r  = ref.current.getBoundingClientRect()
    const vw = window.innerWidth

    // Word centre X in viewport coords
    const wordCx = r.left + r.width / 2

    // Ideal: centre tooltip on the word
    const idealLeft = wordCx - TIP_W / 2

    // Clamp so the box never goes past either viewport edge
    const boxLeft = Math.max(MARGIN, Math.min(idealLeft, vw - TIP_W - MARGIN))

    // Arrow points back at the word centre, relative to the box
    const arrowLeft = Math.max(12, Math.min(wordCx - boxLeft, TIP_W - 12))

    // Show above unless too close to top
    const above = r.top > TIP_H_EST + 16

    setPos({ boxLeft, arrowLeft, y: above ? r.top : r.bottom, above })
  }

  return (
    <>
      <span
        ref={ref}
        style={{ borderBottom: '1px dotted var(--gold)', color: 'inherit', cursor: 'help' }}
        onMouseEnter={handleEnter}
        onMouseLeave={() => setPos(null)}
      >
        {children}
      </span>

      {mounted && pos && createPortal(
        <div
          style={{
            position: 'fixed',
            left: pos.boxLeft,
            top: pos.above ? pos.y - 10 : pos.y + 10,
            transform: pos.above ? 'translateY(-100%)' : 'translateY(0)',
            zIndex: 9999,
            width: TIP_W,
            background: 'var(--bg-card)',
            border: '1px solid rgba(212,150,14,0.35)',
            borderRadius: 12,
            padding: '10px 14px 12px',
            boxShadow: '0 8px 32px rgba(0,0,0,0.65)',
            pointerEvents: 'none',
          }}
        >
          {/* Label */}
          <div style={{ fontSize: 9, fontWeight: 700, textTransform: 'uppercase', letterSpacing: '2px', color: 'var(--gold)', marginBottom: 5 }}>
            {term}
          </div>
          {/* Full name */}
          <div style={{ fontSize: 12, fontWeight: 700, lineHeight: 1.35, color: 'var(--txt)', marginBottom: entry.description ? 6 : 0 }}>
            {entry.full}
          </div>
          {/* Description */}
          {entry.description && (
            <div style={{ fontSize: 11, lineHeight: 1.55, color: 'var(--txtl)' }}>
              {entry.description}
            </div>
          )}

          {/* Arrow — points at the word, on the side facing it */}
          <div style={{
            position: 'absolute',
            ...(pos.above
              ? { top: '100%' }
              : { bottom: '100%' }),
            left: pos.arrowLeft,
            transform: 'translateX(-50%)',
            width: 0,
            height: 0,
            borderLeft: '6px solid transparent',
            borderRight: '6px solid transparent',
            ...(pos.above
              ? { borderTop: '6px solid rgba(212,150,14,0.35)' }
              : { borderBottom: '6px solid rgba(212,150,14,0.35)' }),
          }} />
        </div>,
        document.body
      )}
    </>
  )
}
