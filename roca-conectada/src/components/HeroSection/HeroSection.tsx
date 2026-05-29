import type { HeroData } from '@/types/proposal'
import HeroCanvas from './HeroCanvas'
import HeroStripes from './HeroStripes'
import { AcronymText } from '@/components/ui/AcronymText'

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
      <HeroStripes />
      <HeroCanvas />

      {/* atmospheric gradients + text protection */}
      <div className="pointer-events-none absolute inset-0" aria-hidden style={{ zIndex: 2 }}>
        <div className="absolute" style={{
          bottom: '-15%', left: '-8%', width: '65%', height: '70%',
          background: 'radial-gradient(ellipse, rgba(200,85,48,0.08) 0%, transparent 60%)',
        }} />
        <div className="absolute" style={{
          top: '-10%', right: '-5%', width: '50%', height: '55%',
          background: 'radial-gradient(ellipse, rgba(74,148,86,0.05) 0%, transparent 58%)',
        }} />
        <div className="absolute inset-0" style={{
          background: 'linear-gradient(90deg, rgba(8,7,6,0.94) 0%, rgba(8,7,6,0.82) 25%, rgba(8,7,6,0.50) 50%, rgba(8,7,6,0.12) 72%, transparent 88%)',
        }} />
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

      {/* TOP: eyebrow — offset on mobile for hamburger button */}
      <div className="relative z-10 px-4 pt-6 sm:px-10 sm:pt-10 md:px-16">
        <div className="ml-12 inline-flex items-center gap-2.5 rounded-full border px-4 py-2 md:ml-0"
          style={{ borderColor: 'var(--bdr)', background: 'rgba(237,229,211,0.04)' }}>
          <img src="/sabia-logo.png" alt="" aria-hidden style={{ width: 20, height: 20, objectFit: 'contain' }} />
          <span className="text-[9px] font-bold uppercase tracking-[3px]"
            style={{ color: 'var(--txtll)' }}><AcronymText text={eyebrow} /></span>
        </div>
      </div>

      {/* CENTER: crisis statement + project identity */}
      <div className="relative z-10 flex flex-1 flex-col justify-center px-4 py-8 sm:px-10 sm:py-12 md:px-16">

        {(statement || statementContrast) && (
          <div className="mb-8 lg:max-w-[700px]">
            {statement && (
              <p className="text-[30px] font-bold italic leading-[1.1] tracking-[-0.5px] sm:text-[38px] lg:text-[48px]"
                style={{ fontFamily: 'var(--font-playfair)', color: 'var(--txt)' }}>
                <AcronymText text={statement} />
              </p>
            )}
            {statementContrast && (
              <p className="text-[30px] font-bold italic leading-[1.1] tracking-[-0.5px] sm:text-[38px] lg:text-[48px]"
                style={{ fontFamily: 'var(--font-playfair)', color: 'var(--terra)' }}>
                <AcronymText text={statementContrast} />
              </p>
            )}
          </div>
        )}

        <div className="mb-6 h-px w-12" style={{ background: 'var(--terra)' }} />

        <div>
          <div className="mb-3 text-[9px] font-bold uppercase tracking-[4px]"
            style={{ color: 'var(--terra)' }}>
            A resposta
          </div>
          <h1 className="mb-4 text-[34px] font-bold leading-none tracking-[-1px] sm:text-[42px] lg:text-[48px] lg:tracking-[-1.5px]"
            style={{ fontFamily: 'var(--font-playfair)', color: 'var(--txt)' }}>
            <AcronymText text={title} />
          </h1>
          <p className="text-[14px] italic leading-[1.75] sm:text-[15px] lg:max-w-[500px]"
            style={{ fontFamily: 'var(--font-playfair)', color: 'var(--txtl)' }}>
            <AcronymText text={subtitle} />
          </p>
        </div>
      </div>

      {/* BOTTOM: impact numbers + layer strip */}
      <div className="relative z-10 px-4 pb-10 sm:px-10 sm:pb-12 md:px-16 md:pb-14">

        {/* Stats — stack on mobile, row on sm+ */}
        <div className="mb-8 flex flex-col gap-5 border-t border-b py-6 sm:flex-row sm:items-start sm:gap-10 sm:py-8 lg:gap-14"
          style={{ borderColor: 'var(--bdr)' }}>
          {stats.map((stat, i) => (
            <div key={i} className="flex flex-col">
              <span className="block text-[40px] font-bold leading-none sm:text-[46px] lg:text-[50px]"
                style={{ fontFamily: 'var(--font-playfair)', color: statColors[i] ?? 'var(--txt)' }}>
                {stat.value}
              </span>
              <span className="mt-2 block text-[11px] leading-[1.5] sm:max-w-[230px]"
                style={{ color: 'var(--txtll)' }}>
                <AcronymText text={stat.label} />
              </span>
            </div>
          ))}
        </div>

        {/* Layer strip — stack on mobile, row on md+ */}
        <div className="flex flex-col gap-3 md:flex-row">
          {layers.map((layer) => {
            const accent = layerAccent[layer.id] ?? layerAccent['c']
            return (
              <div key={layer.id}
                className="flex items-start gap-3.5 rounded-xl border p-4 md:flex-1"
                style={{
                  borderColor: `${accent.alpha}0.18)`,
                  background: `${accent.alpha}0.05)`,
                }}>
                <span className="mt-0.5 shrink-0 whitespace-nowrap rounded-full px-2.5 py-1 text-[8px] font-bold uppercase tracking-[1.5px]"
                  style={{ background: `${accent.alpha}0.15)`, color: accent.color }}>
                  {layer.badge}
                </span>
                <div>
                  <div className="mb-1 text-[13px] font-bold" style={{ color: 'var(--txt)' }}><AcronymText text={layer.title} /></div>
                  <div className="text-[12px] leading-[1.65]" style={{ color: 'var(--txtl)' }}><AcronymText text={layer.description} /></div>
                </div>
              </div>
            )
          })}
        </div>

        <div className="mt-8 flex items-center gap-3 opacity-30">
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
