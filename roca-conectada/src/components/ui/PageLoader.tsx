'use client'

import { useEffect, useState } from 'react'
import { useMarkLoaderDone } from '@/context/LoaderContext'

type Phase = 'in' | 'hold' | 'out' | 'done'

interface PageLoaderProps {
  projectName?: string
  call?: string
}

function deriveCallBadge(call: string): string {
  const agencyMatch = call.match(/([A-Z][A-Z0-9/]+(?:\/[A-Z][A-Z0-9]+)+)/)
  const yearMatch   = call.match(/(\d{4})/)
  if (agencyMatch && yearMatch) {
    return `${agencyMatch[1].split('/').join(' · ')} · ${yearMatch[1]}`
  }
  return call
}

interface WordEntry {
  letter: string
  rest: string
  isAcronym: boolean
}

function parseProjectName(projectName: string): { acronym: string; words: WordEntry[] } {
  // handle both ', ' (post-cleanup) and ' — ' separators
  const sep = projectName.includes(', ') ? ', ' : ' — '
  const idx = projectName.indexOf(sep)
  if (idx === -1) return { acronym: projectName, words: [] }

  const acronym   = projectName.slice(0, idx).trim()
  const expansion = projectName.slice(idx + sep.length).trim()
  const rawWords  = expansion.split(' ')

  let ai = 0
  const words: WordEntry[] = rawWords.map(word => {
    const targetLetter = acronym[ai]?.toUpperCase()
    if (targetLetter && word[0]?.toUpperCase() === targetLetter) {
      ai++
      return { letter: word[0], rest: word.slice(1), isAcronym: true }
    }
    return { letter: '', rest: word, isAcronym: false }
  })

  return { acronym, words }
}

const GRAIN = `url("data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.85' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)'/%3E%3C/svg%3E")`

function BrazilFlag({ muted }: { muted?: boolean }) {
  return (
    <svg viewBox="0 0 60 42" width="72" height="50"
      style={{ display: 'block', opacity: muted ? 0.15 : 1 }}>
      <rect width="60" height="42" fill="#009C3B" rx="2" />
      <polygon points="30,3.5 50,21 30,38.5 10,21" fill="#FFDF00" />
      <circle cx="30" cy="21" r="10.5" fill="#002776" />
      <rect x="19.5" y="19" width="21" height="4" fill="white" rx="2" />
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

export default function PageLoader({ projectName, call }: PageLoaderProps) {
  const [phase, setPhase] = useState<Phase>('in')
  const markDone = useMarkLoaderDone()

  const { acronym, words } = parseProjectName(projectName ?? 'SABIA')
  const callBadge = call ? deriveCallBadge(call) : 'MCTI · FINEP · FNDCT · 2026'

  useEffect(() => {
    const t0 = setTimeout(() => setPhase('hold'), 80)
    const t1 = setTimeout(() => setPhase('out'),  3400)
    const t2 = setTimeout(() => { setPhase('done'); markDone() }, 4600)
    return () => { clearTimeout(t0); clearTimeout(t1); clearTimeout(t2) }
  }, [])

  if (phase === 'done') return null

  const leaving = phase === 'out'
  const visible = phase !== 'in'

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

      {/* ── SEAM ── */}
      <div style={{
        position: 'absolute', top: '50%', left: 0, right: 0, height: '1px', zIndex: 5,
        transform: 'translateY(-50%)',
        background: 'linear-gradient(to right, transparent 0%, rgba(200,85,48,0.7) 20%, rgba(212,150,14,0.9) 50%, rgba(200,85,48,0.7) 80%, transparent 100%)',
        boxShadow: '0 0 16px rgba(200,85,48,0.55), 0 0 48px rgba(200,85,48,0.18)',
        opacity: 0,
        animation: leaving ? 'seam-flash 0.4s ease 0s forwards' : 'none',
      }} />

      {/* ── CONTENT ── */}
      <div
        className="absolute inset-0 flex flex-col items-center justify-center px-6"
        style={{
          zIndex: 3,
          opacity: leaving ? 0 : 1,
          transform: leaving ? 'scale(0.96)' : 'scale(1)',
          transition: leaving ? 'opacity 0.2s ease, transform 0.2s ease' : 'none',
        }}
      >
        {/* Call badge */}
        <span
          className="mb-8 text-[9px] font-bold uppercase tracking-[4px]"
          style={{
            color: 'var(--terra)',
            opacity: visible ? 1 : 0,
            transform: visible ? 'translateY(0)' : 'translateY(10px)',
            transition: 'opacity 0.55s ease 0.25s, transform 0.55s ease 0.25s',
          }}
        >
          {callBadge}
        </span>

        {/* Acronym — slides up from below */}
        <div style={{ overflow: 'hidden', lineHeight: 1 }}>
          <h1
            className="text-[60px] sm:text-[76px] font-bold tracking-[-1.5px] select-none"
            style={{
              fontFamily: 'var(--font-playfair)',
              color: 'var(--txt)',
              transform: visible ? 'translateY(0)' : 'translateY(108%)',
              transition: 'transform 0.85s cubic-bezier(0.16,1,0.3,1) 0.38s',
            }}
          >
            {acronym}
          </h1>
        </div>

        {/* Thin separator */}
        <div className="my-5" style={{ height: '1px', width: '220px', overflow: 'hidden' }}>
          <div style={{
            height: '1px',
            background: 'linear-gradient(to right, transparent, var(--terra) 40%, var(--gold) 60%, transparent)',
            width: visible ? '100%' : '0%',
            transition: 'width 0.9s cubic-bezier(0.16,1,0.3,1) 0.85s',
          }} />
        </div>

        {/* Acronym expansion — stacked words */}
        {words.length > 0 && (
          <div
            className="flex flex-col gap-[3px]"
            style={{
              opacity: visible ? 1 : 0,
              transform: visible ? 'translateY(0)' : 'translateY(8px)',
              transition: 'opacity 0.6s ease 0.9s, transform 0.6s ease 0.9s',
            }}
          >
            {words.map((w, i) => (
              <div key={i} className="flex items-baseline gap-[6px]" style={{ lineHeight: 1.4 }}>
                {/* Fixed-width letter column */}
                <span
                  className="text-[15px] sm:text-[17px] font-bold"
                  style={{
                    width: '14px',
                    textAlign: 'right',
                    fontFamily: 'var(--font-playfair)',
                    color: w.isAcronym ? 'var(--gold)' : 'transparent',
                    flexShrink: 0,
                  }}
                >
                  {w.isAcronym ? w.letter : '·'}
                </span>
                {/* Word body */}
                <span
                  className="text-[12px] sm:text-[13px]"
                  style={{
                    color: w.isAcronym ? 'var(--txtl)' : 'var(--txtll)',
                    fontStyle: w.isAcronym ? 'normal' : 'italic',
                    letterSpacing: '0.01em',
                  }}
                >
                  {w.isAcronym ? (
                    <>
                      <span style={{ color: 'var(--gold)', fontWeight: 600 }}>{w.letter}</span>
                      <span>{w.rest}</span>
                    </>
                  ) : w.rest}
                </span>
              </div>
            ))}
          </div>
        )}

        {/* Brazil flag */}
        <div
          className="mt-8"
          style={{
            position: 'relative',
            width: 72,
            height: 50,
            opacity: visible ? 1 : 0,
            transition: 'opacity 0.5s ease 0.4s',
          }}
        >
          <BrazilFlag muted />
          <div style={{
            position: 'absolute', inset: 0,
            clipPath: visible ? 'inset(0% 0% 0% 0%)' : 'inset(100% 0% 0% 0%)',
            transition: 'clip-path 2.9s cubic-bezier(0.4,0,0.2,1) 0.3s',
          }}>
            <BrazilFlag />
          </div>
        </div>
      </div>
    </div>
  )
}
