'use client'

import { useEffect, useState } from 'react'
import { useMarkLoaderDone } from '@/context/LoaderContext'

type Phase = 'in' | 'hold' | 'out' | 'done'

interface PageLoaderProps {
  projectName?: string
  call?: string
}

const GRAIN = `url("data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.85' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)'/%3E%3C/svg%3E")`

/* ─────────────────────────────────────────────────────────────────────────────
   Sabiá-laranjeira (Turdus rufiventris) — in ascending flight, singing
   Facing right. Wings spread in a proud open V.
   Orange belly (#c85530), gold beak (#d4960e), dark body (#22201a).
   ───────────────────────────────────────────────────────────────────────────── */
function SabiaIllustration({ visible }: { visible: boolean }) {
  return (
    <svg
      viewBox="0 0 320 220"
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden
      style={{
        width: 260,
        height: 179,
        opacity: visible ? 1 : 0,
        transform: visible ? 'translateY(0) scale(1)' : 'translateY(22px) scale(0.91)',
        transition: [
          'opacity 0.95s cubic-bezier(0.16,1,0.3,1) 0.4s',
          'transform 0.95s cubic-bezier(0.16,1,0.3,1) 0.4s',
        ].join(', '),
      }}
    >
      {/* ── LEFT WING ─────────────────────────────────────────────────── */}
      {/* main wing shape — leading edge sweeps up-left, trailing curves back */}
      <path
        d="
          M 134 110
          C 114 96 88 78 55 66
          C 62 79 82 94 122 108
          Z
        "
        fill="#22201a"
      />
      {/* inner wing (coverts) — slightly lighter, gives depth */}
      <path
        d="
          M 134 110
          C 116 100 96 88 76 82
          C 82 90 96 99 126 108
          Z
        "
        fill="#2e2a1e"
      />
      {/* primary feather tips — individual lines at the wingtip */}
      <path d="M 55 66 C 50 72 47 79 50 84"  stroke="#3a3425" strokeWidth="2.5" fill="none" strokeLinecap="round"/>
      <path d="M 60 70 C 54 76 51 82 54 87"  stroke="#3a3425" strokeWidth="2.5" fill="none" strokeLinecap="round"/>
      <path d="M 66 73 C 60 80 58 86 62 90"  stroke="#3a3425" strokeWidth="2"   fill="none" strokeLinecap="round"/>

      {/* ── RIGHT WING ────────────────────────────────────────────────── */}
      <path
        d="
          M 178 108
          C 198 93 224 74 262 60
          C 254 74 232 91 190 107
          Z
        "
        fill="#22201a"
      />
      {/* inner wing coverts */}
      <path
        d="
          M 178 108
          C 196 98 218 86 244 80
          C 236 88 218 99 186 108
          Z
        "
        fill="#2e2a1e"
      />
      {/* right primary tips */}
      <path d="M 262 60 C 268 66 270 73 266 78"  stroke="#3a3425" strokeWidth="2.5" fill="none" strokeLinecap="round"/>
      <path d="M 256 63 C 263 69 265 76 261 81"  stroke="#3a3425" strokeWidth="2.5" fill="none" strokeLinecap="round"/>
      <path d="M 250 66 C 257 72 258 79 254 83"  stroke="#3a3425" strokeWidth="2"   fill="none" strokeLinecap="round"/>

      {/* ── TAIL FEATHERS ─────────────────────────────────────────────── */}
      {/* five spread feathers, fanning left-downward */}
      <path d="M 128 122 C 106 134 88 144 70 158" stroke="#22201a" strokeWidth="7"   fill="none" strokeLinecap="round"/>
      <path d="M 132 127 C 110 141 94 152 78 166" stroke="#201e18" strokeWidth="6"   fill="none" strokeLinecap="round"/>
      <path d="M 122 118 C 102 128 86 137 72 148" stroke="#2a2820" strokeWidth="6"   fill="none" strokeLinecap="round"/>
      <path d="M 117 114 C 98  122 83 130 70 140" stroke="#282620" strokeWidth="5"   fill="none" strokeLinecap="round"/>
      <path d="M 136 130 C 116 144 100 156 86 168" stroke="#1c1a14" strokeWidth="5" fill="none" strokeLinecap="round"/>

      {/* ── BODY ──────────────────────────────────────────────────────── */}
      <ellipse
        cx="152" cy="116"
        rx="33" ry="19"
        fill="#22201a"
        transform="rotate(-12 152 116)"
      />

      {/* ── BELLY — deep terracota, the soul of the sabiá ─────────────── */}
      <ellipse
        cx="154" cy="127"
        rx="25" ry="16"
        fill="#c85530"
      />

      {/* ── CHEST — orange blush connecting belly to throat ────────────── */}
      <ellipse
        cx="175" cy="111"
        rx="16" ry="11"
        fill="#c85530"
        opacity="0.48"
        transform="rotate(-22 175 111)"
      />

      {/* ── HEAD ──────────────────────────────────────────────────────── */}
      <circle cx="188" cy="88" r="26" fill="#1e1c16" />

      {/* subtle head sheen */}
      <path
        d="M 172 78 C 177 70 187 70 190 76"
        stroke="rgba(237,229,211,0.06)"
        strokeWidth="4"
        fill="none"
        strokeLinecap="round"
      />

      {/* ── OPEN BEAK — singing ────────────────────────────────────────── */}
      {/* upper mandible */}
      <path d="M 208 82 L 238 76 L 210 88 Z" fill="#d4960e" />
      {/* lower mandible, slightly open */}
      <path d="M 209 92 L 234 95 L 211 98 Z" fill="#b87d08" />
      {/* mouth interior — warm red, gives life */}
      <path
        d="M 210 88 L 234 84 L 234 95 L 210 92 Z"
        fill="#9b3a12"
        opacity="0.65"
      />
      {/* tongue hint */}
      <path
        d="M 213 91 C 220 90 226 91 230 92"
        stroke="#c04818"
        strokeWidth="1.5"
        fill="none"
        strokeLinecap="round"
        opacity="0.7"
      />

      {/* ── EYE — the heart of the illustration ───────────────────────── */}
      {/* orbital ring — pale cream ring common in thrushes */}
      <circle cx="197" cy="83" r="10"  fill="rgba(180,150,100,0.14)" />
      {/* eye socket */}
      <circle cx="197" cy="83" r="8.5" fill="#181510" />
      {/* iris */}
      <circle cx="198" cy="83" r="6.5" fill="#080706" />
      {/* main sparkle — top-right, the classic life dot */}
      <circle cx="201"  cy="79"  r="3"   fill="rgba(237,229,211,0.95)" />
      {/* secondary soft sparkle */}
      <circle cx="204"  cy="84"  r="1.4" fill="rgba(237,229,211,0.38)" />

      {/* ── SUBTLE MOTION LINES — sense of speed/air ──────────────────── */}
      <path d="M 42  90 C 34  92 26  91 18  93" stroke="rgba(200,85,48,0.18)"  strokeWidth="1.5" fill="none" strokeLinecap="round"/>
      <path d="M 40  98 C 32 101 24 100 16 102" stroke="rgba(200,85,48,0.12)"  strokeWidth="1.2" fill="none" strokeLinecap="round"/>
      <path d="M 45 104 C 36 107 28 106 20 108" stroke="rgba(200,85,48,0.08)"  strokeWidth="1"   fill="none" strokeLinecap="round"/>
    </svg>
  )
}

export default function PageLoader({ projectName }: PageLoaderProps) {
  const [phase, setPhase] = useState<Phase>('in')
  const markDone = useMarkLoaderDone()

  const name    = projectName ?? 'SABIA'
  const acronym = name.includes(', ')
    ? name.split(', ')[0]
    : name.includes(' — ')
    ? name.split(' — ')[0]
    : name

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
        <SabiaIllustration visible={visible} />

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
      </div>
    </div>
  )
}
