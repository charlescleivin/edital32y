'use client'
import { useState, useRef, useEffect } from 'react'
import { createPortal } from 'react-dom'
import { acronymGlossary } from '@/lib/acronymGlossary'

interface AcronymProps {
  term: string
  children: React.ReactNode
}

export function Acronym({ term, children }: AcronymProps) {
  const entry = acronymGlossary[term]
  const [pos, setPos] = useState<{ x: number; y: number } | null>(null)
  const ref = useRef<HTMLSpanElement>(null)
  const [mounted, setMounted] = useState(false)

  useEffect(() => { setMounted(true) }, [])

  if (!entry) return <>{children}</>

  const handleEnter = () => {
    if (ref.current) {
      const r = ref.current.getBoundingClientRect()
      setPos({ x: r.left + r.width / 2, y: r.top })
    }
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
            left: pos.x,
            top: pos.y - 10,
            transform: 'translate(-50%, -100%)',
            zIndex: 9999,
            width: 256,
            background: 'var(--bg-card)',
            border: '1px solid rgba(212,150,14,0.35)',
            borderRadius: 12,
            padding: '10px 14px 12px',
            boxShadow: '0 8px 32px rgba(0,0,0,0.6)',
            pointerEvents: 'none',
          }}
        >
          <div style={{ fontSize: 9, fontWeight: 700, textTransform: 'uppercase', letterSpacing: '2px', color: 'var(--gold)', marginBottom: 5 }}>
            {term}
          </div>
          <div style={{ fontSize: 12, fontWeight: 700, lineHeight: 1.35, color: 'var(--txt)', marginBottom: entry.description ? 6 : 0 }}>
            {entry.full}
          </div>
          {entry.description && (
            <div style={{ fontSize: 11, lineHeight: 1.55, color: 'var(--txtl)' }}>
              {entry.description}
            </div>
          )}
          {/* Arrow */}
          <div style={{
            position: 'absolute',
            top: '100%',
            left: '50%',
            transform: 'translateX(-50%)',
            width: 0,
            height: 0,
            borderLeft: '6px solid transparent',
            borderRight: '6px solid transparent',
            borderTop: '6px solid rgba(212,150,14,0.35)',
          }} />
        </div>,
        document.body
      )}
    </>
  )
}
