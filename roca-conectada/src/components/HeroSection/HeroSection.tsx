import type { HeroData } from '@/types/proposal'
import HeroCanvas from './HeroCanvas'
import HeroStripes from './HeroStripes'

export const componentMeta = { slug: 'hero-section', label: 'Hero Section' }

export type HeroSectionProps = HeroData

const layerAccent: Record<string, { color: string; alpha: string }> = {
  '0': { color: 'var(--gold)',  alpha: 'rgba(212,150,14,' },
  'a': { color: 'var(--sage)',  alpha: 'rgba(74,148,86,'  },
  'c': { color: 'var(--terra)', alpha: 'rgba(200,85,48,'  },
}

const statColors = ['var(--terra)', 'var(--txt)', 'var(--gold)']

export default function HeroSection({
  eyebrow, title, subtitle, statement, statementContrast, stats, layers,
}: HeroSectionProps) {
  return (
    <section
      className="relative flex min-h-screen flex-col overflow-hidden"
      style={{ background: '#080706' }}
    >
      {/* Layer 1: image strips — gacha page-flip reveal */}
      <HeroStripes />

      {/* Layer 2: canvas particle network — families connecting */}
      <HeroCanvas />

      {/* Layer 3: atmospheric gradients + text protection */}
      <div className="pointer-events-none absolute inset-0" aria-hidden style={{ zIndex: 2 }}>
        {/* Warm bottom-left glow */}
        <div className="absolute" style={{
          bottom: '-15%', left: '-8%', width: '65%', height: '70%',
          background: 'radial-gradient(ellipse, rgba(200,85,48,0.08) 0%, transparent 60%)',
        }} />
        {/* Cool top-right glow */}
        <div className="absolute" style={{
          top: '-10%', right: '-5%', width: '50%', height: '55%',
          background: 'radial-gradient(ellipse, rgba(74,148,86,0.05) 0%, transparent 58%)',
        }} />
        {/* Left-side text protection — keeps text readable over the animation */}
        <div className="absolute inset-0" style={{
          background: 'linear-gradient(90deg, rgba(8,7,6,0.94) 0%, rgba(8,7,6,0.82) 25%, rgba(8,7,6,0.50) 50%, rgba(8,7,6,0.12) 72%, transparent 88%)',
        }} />
        {/* Faint agricultural row-lines */}
        <svg className="absolute inset-0 h-full w-full opacity-[0.018]"
          xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="none">
          {Array.from({ length: 22 }, (_, i) => (
            <line key={i}
              x1="0" y1={`${((i + 0.5) / 22) * 100}%`}
              x2="100%" y2={`${((i + 0.5) / 22) * 100}%`}
              stroke="#ede5d3" strokeWidth="1" />
          ))}
        </svg>
      </div>

      {/* TOP: eyebrow */}
      <div className="relative z-10 px-16 pt-10">
        <div className="inline-flex items-center gap-2.5 rounded-full border px-4 py-2"
          style={{ borderColor: 'var(--bdr)', background: 'rgba(237,229,211,0.04)' }}>
          <span className="text-sm leading-none">🌾</span>
          <span className="text-[9px] font-bold uppercase tracking-[3px]"
            style={{ color: 'var(--txtll)' }}>{eyebrow}</span>
        </div>
      </div>

      {/* CENTER: crisis statement + project identity */}
      <div className="relative z-10 flex flex-1 flex-col justify-center px-16 py-12">

        {/* Hook — the problem in two lines */}
        {(statement || statementContrast) && (
          <div className="mb-10 max-w-[700px]">
            {statement && (
              <p className="text-[48px] font-bold italic leading-[1.1] tracking-[-0.5px]"
                style={{ fontFamily: 'var(--font-playfair)', color: 'var(--txt)' }}>
                {statement}
              </p>
            )}
            {statementContrast && (
              <p className="text-[48px] font-bold italic leading-[1.1] tracking-[-0.5px]"
                style={{ fontFamily: 'var(--font-playfair)', color: 'var(--terra)' }}>
                {statementContrast}
              </p>
            )}
          </div>
        )}

        {/* Terracotta separator */}
        <div className="mb-7 h-px w-12" style={{ background: 'var(--terra)' }} />

        {/* Resolution — the project */}
        <div>
          <div className="mb-3 text-[9px] font-bold uppercase tracking-[4px]"
            style={{ color: 'var(--terra)' }}>
            A resposta
          </div>
          <h1 className="mb-4 text-[48px] font-bold leading-none tracking-[-1.5px]"
            style={{ fontFamily: 'var(--font-playfair)', color: 'var(--txt)' }}>
            {title}
          </h1>
          <p className="max-w-[500px] text-[15px] italic leading-[1.75]"
            style={{ fontFamily: 'var(--font-playfair)', color: 'var(--txtl)' }}>
            {subtitle}
          </p>
        </div>
      </div>

      {/* BOTTOM: impact numbers + layer strip */}
      <div className="relative z-10 px-16 pb-14">

        {/* Raw typography numbers — no cards */}
        <div className="mb-10 flex items-start gap-14 border-t border-b py-8"
          style={{ borderColor: 'var(--bdr)' }}>
          {stats.map((stat, i) => (
            <div key={i} className="flex flex-col">
              <span className="block text-[50px] font-bold leading-none"
                style={{ fontFamily: 'var(--font-playfair)', color: statColors[i] ?? 'var(--txt)' }}>
                {stat.value}
              </span>
              <span className="mt-2 block max-w-[230px] text-[11px] leading-[1.5]"
                style={{ color: 'var(--txtll)' }}>
                {stat.label}
              </span>
            </div>
          ))}
        </div>

        {/* Layer strip */}
        <div className="flex gap-3">
          {layers.map((layer) => {
            const accent = layerAccent[layer.id] ?? layerAccent['c']
            return (
              <div key={layer.id}
                className="flex flex-1 items-start gap-3.5 rounded-xl border p-4"
                style={{
                  borderColor: `${accent.alpha}0.18)`,
                  background: `${accent.alpha}0.05)`,
                }}>
                <span className="mt-0.5 shrink-0 whitespace-nowrap rounded-full px-2.5 py-1 text-[8px] font-bold uppercase tracking-[1.5px]"
                  style={{ background: `${accent.alpha}0.15)`, color: accent.color }}>
                  {layer.badge}
                </span>
                <div>
                  <div className="mb-1 text-[13px] font-bold" style={{ color: 'var(--txt)' }}>{layer.title}</div>
                  <div className="text-[12px] leading-[1.65]" style={{ color: 'var(--txtl)' }}>{layer.description}</div>
                </div>
              </div>
            )
          })}
        </div>

        {/* Scroll indicator */}
        <div className="mt-10 flex items-center gap-3 opacity-30">
          <div className="h-px flex-1" style={{ background: 'var(--bdr)' }} />
          <span className="text-[9px] font-bold uppercase tracking-[2px]"
            style={{ color: 'var(--txtll)' }}>
            ↓ Seção 1 — Sumário Executivo
          </span>
          <div className="h-px flex-1" style={{ background: 'var(--bdr)' }} />
        </div>
      </div>

    </section>
  )
}
