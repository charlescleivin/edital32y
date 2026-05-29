'use client'

import { useEffect, useState } from 'react'
import { useMarkLoaderDone } from '@/context/LoaderContext'

type Phase = 'in' | 'hold' | 'out' | 'done'

interface PageLoaderProps {
  projectName?: string
  call?: string
}

const GRAIN = `url("data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.85' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)'/%3E%3C/svg%3E")`

function deriveCallBadge(call: string): string {
  const agencyMatch = call.match(/([A-Z][A-Z0-9/]+(?:\/[A-Z][A-Z0-9]+)+)/)
  const yearMatch   = call.match(/(\d{4})/)
  if (agencyMatch && yearMatch) return `${agencyMatch[1].split('/').join(' · ')} · ${yearMatch[1]}`
  return call
}

export default function PageLoader({ projectName, call }: PageLoaderProps) {
  const [phase, setPhase] = useState<Phase>('in')
  const markDone = useMarkLoaderDone()

  const name      = projectName ?? 'SABIA'
  const sep       = name.includes(', ') ? ', ' : ' — '
  const parts     = name.split(sep)
  const acronym   = parts[0]
  const expansion = parts[1] ?? ''
  const callBadge = call ? deriveCallBadge(call) : 'MCTI · FINEP · FNDCT · 2026'

  useEffect(() => {
    const t0 = setTimeout(() => setPhase('hold'), 80)
    const t1 = setTimeout(() => setPhase('out'),  3200)
    const t2 = setTimeout(() => { setPhase('done'); markDone() }, 4300)
    return () => { clearTimeout(t0); clearTimeout(t1); clearTimeout(t2) }
  }, [])

  if (phase === 'done') return null

  const leaving = phase === 'out'
  const visible = phase !== 'in'

  return (
    <div className="fixed inset-0 z-[9999]" style={{ pointerEvents: leaving ? 'none' : 'all' }}>

      {/* ── TOP PANEL ── */}
      <div className="absolute left-0 right-0 top-0 overflow-hidden" style={{
        height: '50%', background: '#0c0b09', zIndex: 2,
        transform: leaving ? 'translateY(-100%)' : 'translateY(0)',
        transition: leaving ? 'transform 0.95s cubic-bezier(0.76,0,0.24,1) 0.3s' : 'none',
      }}>
        <div className="pointer-events-none absolute inset-0" style={{
          background: 'radial-gradient(ellipse 80% 140% at 50% 100%, rgba(200,85,48,0.05) 0%, transparent 65%)',
        }} />
        <div className="pointer-events-none absolute inset-0 opacity-[0.025]" style={{
          backgroundImage: GRAIN, backgroundSize: '160px 160px',
        }} />
      </div>

      {/* ── BOTTOM PANEL ── */}
      <div className="absolute left-0 right-0 bottom-0 overflow-hidden" style={{
        height: '50%', background: '#0c0b09', zIndex: 2,
        transform: leaving ? 'translateY(100%)' : 'translateY(0)',
        transition: leaving ? 'transform 0.95s cubic-bezier(0.76,0,0.24,1) 0.3s' : 'none',
      }}>
        <div className="pointer-events-none absolute inset-0" style={{
          background: 'radial-gradient(ellipse 80% 140% at 50% 0%, rgba(200,85,48,0.05) 0%, transparent 65%)',
        }} />
        <div className="pointer-events-none absolute inset-0 opacity-[0.025]" style={{
          backgroundImage: GRAIN, backgroundSize: '160px 160px',
        }} />
      </div>

      {/* ── SEAM ── */}
      <div style={{
        position: 'absolute', top: '50%', left: 0, right: 0,
        height: '1px', zIndex: 5, transform: 'translateY(-50%)',
        background: 'linear-gradient(to right, transparent 0%, rgba(200,85,48,0.6) 20%, rgba(212,150,14,0.8) 50%, rgba(200,85,48,0.6) 80%, transparent 100%)',
        boxShadow: '0 0 14px rgba(200,85,48,0.45), 0 0 36px rgba(200,85,48,0.12)',
        opacity: 0,
        animation: leaving ? 'seam-flash 0.4s ease 0s forwards' : 'none',
      }} />

      {/* ── CONTENT ── */}
      <div
        className="absolute inset-0 flex flex-col items-center justify-center"
        style={{
          zIndex: 3, gap: 20,
          opacity: leaving ? 0 : 1,
          transform: leaving ? 'scale(0.97)' : 'scale(1)',
          transition: leaving ? 'opacity 0.18s ease, transform 0.18s ease' : 'none',
        }}
      >
        {/* Logo */}
        <img
          src="/sabia-logo.png"
          alt="Sabiá"
          style={{
            width: 'clamp(140px, 22vw, 220px)',
            height: 'auto',
            opacity: visible ? 1 : 0,
            transform: visible ? 'translateY(0) scale(1)' : 'translateY(20px) scale(0.92)',
            transition: [
              'opacity 0.95s cubic-bezier(0.16,1,0.3,1) 0.4s',
              'transform 0.95s cubic-bezier(0.16,1,0.3,1) 0.4s',
            ].join(', '),
          }}
        />

        {/* Call badge */}
        <div style={{
          overflow: 'hidden',
          opacity: visible ? 1 : 0,
          transform: visible ? 'translateY(0)' : 'translateY(8px)',
          transition: 'opacity 0.55s ease 0.25s, transform 0.55s ease 0.25s',
        }}>
          <span className="text-[9px] font-bold uppercase tracking-[4px]"
            style={{ color: 'var(--terra)' }}>
            {callBadge}
          </span>
        </div>

        {/* Name — slides up through a clip */}
        <div style={{ overflow: 'hidden', lineHeight: 1 }}>
          <h1
            className="text-[54px] sm:text-[68px] font-bold tracking-[-1px] select-none"
            style={{
              fontFamily: 'var(--font-playfair)',
              color: 'var(--txt)',
              transform: visible ? 'translateY(0)' : 'translateY(110%)',
              transition: 'transform 0.85s cubic-bezier(0.16,1,0.3,1) 0.6s',
            }}
          >
            {acronym}
          </h1>
        </div>

        {/* Acronym expansion — small, fades in last */}
        {expansion && (
          <p
            className="text-[11px] sm:text-[12px] tracking-[0.5px] text-center"
            style={{
              color: 'var(--txtll)',
              maxWidth: 320,
              lineHeight: 1.5,
              opacity: visible ? 1 : 0,
              transform: visible ? 'translateY(0)' : 'translateY(6px)',
              transition: 'opacity 0.6s ease 1s, transform 0.6s ease 1s',
            }}
          >
            {expansion}
          </p>
        )}
      </div>
    </div>
  )
}
