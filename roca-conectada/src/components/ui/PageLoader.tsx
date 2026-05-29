'use client'

import { useEffect, useState } from 'react'
import { useMarkLoaderDone } from '@/context/LoaderContext'

type Phase = 'in' | 'hold' | 'out' | 'done'

interface PageLoaderProps {
  projectName?: string
  call?: string
}

const GRAIN = `url("data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.85' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)'/%3E%3C/svg%3E")`

/* ─── Sabiá-laranjeira (Turdus rufiventris) ──────────────────────────────── */
function SabiaIllustration({ visible }: { visible: boolean }) {
  return (
    <svg
      viewBox="0 0 240 200"
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden
      style={{
        width: 220,
        height: 183,
        opacity: visible ? 1 : 0,
        transform: visible ? 'translateY(0) scale(1)' : 'translateY(18px) scale(0.94)',
        transition: 'opacity 0.85s cubic-bezier(0.16,1,0.3,1) 0.45s, transform 0.85s cubic-bezier(0.16,1,0.3,1) 0.45s',
      }}
    >
      {/* Branch */}
      <path
        d="M18 168 Q120 152 222 163"
        stroke="rgba(92,78,62,0.5)"
        strokeWidth="3.5"
        fill="none"
        strokeLinecap="round"
      />

      {/* Tail feathers — long, dark, sweeping left */}
      <path
        d="M74 120 C62 128 46 136 24 150 C36 140 54 133 68 128 C71 126 73 123 74 120 Z"
        fill="#1c1810"
      />
      <path
        d="M74 120 C66 131 52 140 30 152 C44 142 60 136 70 130 L74 120 Z"
        fill="#161410"
        opacity="0.6"
      />

      {/* Body — main dark mass */}
      <path
        d="M74 120 C60 100 64 70 94 58 C116 48 152 56 164 80 C174 102 162 126 142 133 C118 138 88 130 74 120 Z"
        fill="#262014"
      />

      {/* Wing fold — slightly darker, gives 3D depth */}
      <path
        d="M78 106 C78 80 92 62 118 57 C142 53 160 68 158 86 C142 80 112 80 78 106 Z"
        fill="#1a1610"
      />

      {/* Wing feather detail lines */}
      <path d="M88 98 C102 82 125 72 148 76" stroke="rgba(55,45,28,0.5)" strokeWidth="1" fill="none"/>
      <path d="M90 104 C106 88 130 78 152 82" stroke="rgba(55,45,28,0.4)" strokeWidth="1" fill="none"/>

      {/* Belly — terracota, the defining color of the sabiá */}
      <path
        d="M118 130 C100 124 84 132 86 152 C88 166 120 170 140 162 C158 155 158 136 144 128 C136 122 126 128 118 130 Z"
        fill="#c85530"
      />

      {/* Breast/chest gradient into belly */}
      <path
        d="M132 105 C122 100 112 108 114 120 C116 128 130 132 140 126 C148 120 148 106 140 102 C137 100 134 103 132 105 Z"
        fill="#c85530"
        opacity="0.55"
      />

      {/* Head */}
      <circle cx="158" cy="76" r="30" fill="#1e1912" />

      {/* Beak — two tones like a real thrush beak */}
      <path d="M183 72 L206 76 L183 81 Z" fill="#d4960e" />
      <path d="M183 76 L206 76 L183 81 Z" fill="#b37c08" opacity="0.5" />

      {/* Eye orbital ring — pale ring around the eye typical of thrushes */}
      <circle cx="167" cy="70" r="8" fill="#2e2518" />
      <circle cx="167" cy="70" r="6.5" fill="rgba(180,145,90,0.18)" />

      {/* Eye */}
      <circle cx="168" cy="70" r="5" fill="#0a0907" />

      {/* Eye highlight — the life of the bird */}
      <circle cx="170" cy="67.5" r="2" fill="rgba(237,229,211,0.92)" />

      {/* Toes on branch */}
      <path d="M108 162 L100 168" stroke="#5c4a30" strokeWidth="1.8" strokeLinecap="round" fill="none"/>
      <path d="M108 162 L112 169" stroke="#5c4a30" strokeWidth="1.8" strokeLinecap="round" fill="none"/>
      <path d="M108 162 L103 170" stroke="#5c4a30" strokeWidth="1.6" strokeLinecap="round" fill="none"/>
      <path d="M128 162 L124 169" stroke="#5c4a30" strokeWidth="1.8" strokeLinecap="round" fill="none"/>
      <path d="M128 162 L132 169" stroke="#5c4a30" strokeWidth="1.8" strokeLinecap="round" fill="none"/>
      <path d="M128 162 L136 167" stroke="#5c4a30" strokeWidth="1.6" strokeLinecap="round" fill="none"/>
    </svg>
  )
}

export default function PageLoader({ projectName }: PageLoaderProps) {
  const [phase, setPhase] = useState<Phase>('in')
  const markDone = useMarkLoaderDone()

  // extract the acronym — handle ', ' or ' — ' as separator
  const name = projectName ?? 'SABIA'
  const acronym = name.includes(', ')
    ? name.split(', ')[0]
    : name.includes(' — ')
    ? name.split(' — ')[0]
    : name

  useEffect(() => {
    const t0 = setTimeout(() => setPhase('hold'), 80)
    const t1 = setTimeout(() => setPhase('out'),  3200)
    const t2 = setTimeout(() => { setPhase('done'); markDone() }, 4400)
    return () => { clearTimeout(t0); clearTimeout(t1); clearTimeout(t2) }
  }, [])

  if (phase === 'done') return null

  const leaving  = phase === 'out'
  const visible  = phase !== 'in'

  return (
    <div className="fixed inset-0 z-[9999]" style={{ pointerEvents: leaving ? 'none' : 'all' }}>

      {/* ── TOP PANEL ── */}
      <div className="absolute left-0 right-0 top-0 overflow-hidden" style={{
        height: '50%',
        background: '#0c0b09',
        zIndex: 2,
        transform: leaving ? 'translateY(-100%)' : 'translateY(0)',
        transition: leaving ? 'transform 0.9s cubic-bezier(0.76,0,0.24,1) 0.35s' : 'none',
      }}>
        <div className="pointer-events-none absolute inset-0" style={{
          background: 'radial-gradient(ellipse 80% 140% at 50% 100%, rgba(200,85,48,0.055) 0%, transparent 65%)',
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
        transition: leaving ? 'transform 0.9s cubic-bezier(0.76,0,0.24,1) 0.35s' : 'none',
      }}>
        <div className="pointer-events-none absolute inset-0" style={{
          background: 'radial-gradient(ellipse 80% 140% at 50% 0%, rgba(200,85,48,0.055) 0%, transparent 65%)',
        }} />
        <div className="pointer-events-none absolute inset-0 opacity-[0.03]" style={{
          backgroundImage: GRAIN, backgroundSize: '160px 160px',
        }} />
      </div>

      {/* ── SEAM ── */}
      <div style={{
        position: 'absolute', top: '50%', left: 0, right: 0,
        height: '1px', zIndex: 5,
        transform: 'translateY(-50%)',
        background: 'linear-gradient(to right, transparent 0%, rgba(200,85,48,0.65) 20%, rgba(212,150,14,0.85) 50%, rgba(200,85,48,0.65) 80%, transparent 100%)',
        boxShadow: '0 0 14px rgba(200,85,48,0.5), 0 0 40px rgba(200,85,48,0.15)',
        opacity: 0,
        animation: leaving ? 'seam-flash 0.4s ease 0s forwards' : 'none',
      }} />

      {/* ── CONTENT ── */}
      <div
        className="absolute inset-0 flex flex-col items-center justify-center gap-5"
        style={{
          zIndex: 3,
          opacity: leaving ? 0 : 1,
          transform: leaving ? 'scale(0.97)' : 'scale(1)',
          transition: leaving ? 'opacity 0.18s ease, transform 0.18s ease' : 'none',
        }}
      >
        {/* Bird */}
        <SabiaIllustration visible={visible} />

        {/* Name */}
        <div style={{ overflow: 'hidden', lineHeight: 1 }}>
          <h1
            className="text-[58px] sm:text-[72px] font-bold tracking-[-1px] select-none"
            style={{
              fontFamily: 'var(--font-playfair)',
              color: 'var(--txt)',
              transform: visible ? 'translateY(0)' : 'translateY(110%)',
              transition: 'transform 0.8s cubic-bezier(0.16,1,0.3,1) 0.55s',
            }}
          >
            {acronym}
          </h1>
        </div>
      </div>
    </div>
  )
}
