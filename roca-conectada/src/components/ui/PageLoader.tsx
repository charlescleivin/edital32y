'use client'

import { useEffect, useState } from 'react'
import { useMarkLoaderDone } from '@/context/LoaderContext'

type Phase = 'in' | 'hold' | 'out' | 'done'

const GRAIN = `url("data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.85' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)'/%3E%3C/svg%3E")`

function BrazilFlag({ muted }: { muted?: boolean }) {
  return (
    <svg viewBox="0 0 60 42" width="88" height="62"
      style={{ display: 'block', opacity: muted ? 0.15 : 1 }}>
      <rect width="60" height="42" fill="#009C3B" rx="2" />
      <polygon points="30,3.5 50,21 30,38.5 10,21" fill="#FFDF00" />
      <circle cx="30" cy="21" r="10.5" fill="#002776" />
      <rect x="19.5" y="19" width="21" height="4" fill="white" rx="2" />
      {/* Southern Cross — simplified */}
      <circle cx="26"   cy="22.5" r="1"   fill="white" />
      <circle cx="26.5" cy="17.5" r="0.7" fill="white" />
      <circle cx="23.5" cy="20.5" r="0.8" fill="white" />
      <circle cx="29"   cy="20.5" r="0.8" fill="white" />
      <circle cx="27.5" cy="24.5" r="0.5" fill="white" />
      <circle cx="35"   cy="19"   r="0.5" fill="white" opacity="0.7" />
      <circle cx="33.5" cy="23"   r="0.4" fill="white" opacity="0.6" />
    </svg>
  )
}

export default function PageLoader() {
  const [phase, setPhase] = useState<Phase>('in')
  const markDone = useMarkLoaderDone()

  useEffect(() => {
    const t0 = setTimeout(() => setPhase('hold'), 80)
    const t1 = setTimeout(() => setPhase('out'),  3400)
    const t2 = setTimeout(() => { setPhase('done'); markDone() }, 4600)
    return () => { clearTimeout(t0); clearTimeout(t1); clearTimeout(t2) }
  }, [])

  if (phase === 'done') return null

  const leaving = phase === 'out'

  return (
    <div className="fixed inset-0 z-[9999]" style={{ pointerEvents: leaving ? 'none' : 'all' }}>

      {/* ── TOP PANEL ── */}
      <div className="absolute left-0 right-0 top-0 overflow-hidden" style={{
        height: '50%',
        background: '#0c0b09',
        zIndex: 2,
        transform: leaving ? 'translateY(-100%)' : 'translateY(0)',
        transition: leaving ? 'transform 0.9s cubic-bezier(0.76,0,0.24,1) 0.4s' : 'none',
      }}>
        <div className="pointer-events-none absolute inset-0" style={{
          background: 'radial-gradient(ellipse 70% 130% at 50% 100%, rgba(200,85,48,0.065) 0%, transparent 68%)',
        }} />
        <div className="pointer-events-none absolute inset-0 opacity-[0.03]" style={{
          backgroundImage: GRAIN, backgroundSize: '160px 160px',
        }} />
      </div>

      {/* ── BOTTOM PANEL ── */}
      <div className="absolute left-0 right-0 bottom-0 overflow-hidden" style={{
        height: '50%',
        background: '#0c0b09',
        zIndex: 2,
        transform: leaving ? 'translateY(100%)' : 'translateY(0)',
        transition: leaving ? 'transform 0.9s cubic-bezier(0.76,0,0.24,1) 0.4s' : 'none',
      }}>
        <div className="pointer-events-none absolute inset-0" style={{
          background: 'radial-gradient(ellipse 70% 130% at 50% 0%, rgba(200,85,48,0.065) 0%, transparent 68%)',
        }} />
        <div className="pointer-events-none absolute inset-0 opacity-[0.03]" style={{
          backgroundImage: GRAIN, backgroundSize: '160px 160px',
        }} />
      </div>

      {/* ── SEAM — glowing split line that ignites on exit ── */}
      <div style={{
        position: 'absolute',
        top: '50%',
        left: 0,
        right: 0,
        height: '1px',
        zIndex: 5,
        transform: 'translateY(-50%)',
        background: 'linear-gradient(to right, transparent 0%, rgba(200,85,48,0.7) 20%, rgba(212,150,14,0.9) 50%, rgba(200,85,48,0.7) 80%, transparent 100%)',
        boxShadow: '0 0 16px rgba(200,85,48,0.55), 0 0 48px rgba(200,85,48,0.18)',
        opacity: 0,
        animation: leaving ? 'seam-flash 0.4s ease 0s forwards' : 'none',
      }} />

      {/* ── CONTENT ── */}
      <div
        className="absolute inset-0 flex flex-col items-center justify-center"
        style={{
          zIndex: 3,
          opacity: leaving ? 0 : 1,
          transform: leaving ? 'scale(0.96)' : 'scale(1)',
          transition: leaving ? 'opacity 0.2s ease, transform 0.2s ease' : 'none',
        }}
      >
        <span
          className="mb-10 text-[9px] font-bold uppercase tracking-[4.5px]"
          style={{
            color: 'var(--terra)',
            opacity: phase === 'in' ? 0 : 1,
            transform: phase === 'in' ? 'translateY(10px)' : 'translateY(0)',
            transition: 'opacity 0.55s ease 0.25s, transform 0.55s ease 0.25s',
          }}
        >
          MCTI · FINEP · FNDCT · 2026
        </span>

        <div style={{ overflow: 'hidden', lineHeight: 1 }}>
          <h1
            className="text-[76px] font-bold tracking-[-2px] select-none"
            style={{
              fontFamily: 'var(--font-playfair)',
              color: 'var(--txt)',
              transform: phase === 'in' ? 'translateY(108%)' : 'translateY(0)',
              transition: 'transform 0.85s cubic-bezier(0.16,1,0.3,1) 0.38s',
            }}
          >
            Roça{' '}
            <em style={{ color: 'var(--terra)', fontStyle: 'italic' }}>Conectada</em>
          </h1>
        </div>

        <div className="mt-9" style={{ height: '1px', width: '260px', overflow: 'hidden' }}>
          <div style={{
            height: '1px',
            background: 'linear-gradient(to right, transparent, var(--terra) 40%, var(--gold) 60%, transparent)',
            width: phase === 'in' ? '0%' : '100%',
            transition: 'width 0.9s cubic-bezier(0.16,1,0.3,1) 0.85s',
          }} />
        </div>

        {/* ── BRAZIL FLAG — fills bottom-to-top as loader runs ── */}
        <div
          className="mt-8"
          style={{
            position: 'relative',
            width: 88,
            height: 62,
            opacity: phase === 'in' ? 0 : 1,
            transition: 'opacity 0.5s ease 0.4s',
          }}
        >
          {/* ghost/muted flag always present — shows "empty" state */}
          <BrazilFlag muted />
          {/* colored flag clips in from bottom to top over 2.9s */}
          <div style={{
            position: 'absolute',
            inset: 0,
            clipPath: phase === 'in' ? 'inset(100% 0% 0% 0%)' : 'inset(0% 0% 0% 0%)',
            transition: 'clip-path 2.9s cubic-bezier(0.4,0,0.2,1) 0.3s',
          }}>
            <BrazilFlag />
          </div>
        </div>

      </div>
    </div>
  )
}
