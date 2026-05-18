import type { HeroData } from '@/types/proposal'

export const componentMeta = { slug: 'hero-section', label: 'Hero Section' }

export type HeroSectionProps = HeroData

export default function HeroSection({ eyebrow, title, subtitle, stats, layers }: HeroSectionProps) {
  const words = title.split(' ')
  const titleStart = words.slice(0, -1).join(' ')
  const titleEnd = words[words.length - 1]

  return (
    <section id="s0" className="relative overflow-hidden px-16 py-24"
      style={{ background: 'linear-gradient(160deg, #080706 0%, #0f0c08 40%, #0d1209 75%, #080a06 100%)' }}>

      {/* terracotta warmth overlay */}
      <div className="pointer-events-none absolute inset-0"
        style={{ background: 'radial-gradient(ellipse at 60% 30%, rgba(200,85,48,0.07) 0%, transparent 50%), radial-gradient(ellipse at 15% 75%, rgba(74,148,86,0.05) 0%, transparent 45%)' }} />

      <div className="relative max-w-3xl">

        {/* eyebrow — 9px Inter 700 uppercase */}
        <div className="mb-6 inline-flex items-center gap-2.5 rounded-full border px-4 py-2"
          style={{ borderColor: 'var(--bdr)', background: 'rgba(237,229,211,0.04)' }}>
          <span className="text-base leading-none">🌾</span>
          <span className="text-[9px] font-bold uppercase tracking-[3px]"
            style={{ color: 'var(--terra)' }}>{eyebrow}</span>
        </div>

        {/* title — 64px Playfair Display 800 */}
        <h1 className="mb-5 text-[64px] font-bold leading-[1.02] tracking-[-1px]"
          style={{ fontFamily: 'var(--font-playfair)', color: 'var(--txt)' }}>
          {titleStart}{' '}
          <em className="not-italic" style={{ color: 'var(--terra)' }}>{titleEnd}</em>
        </h1>

        {/* subtitle — 16px Playfair 400 italic */}
        <p className="mb-14 max-w-[520px] text-[16px] italic leading-[1.75]"
          style={{ fontFamily: 'var(--font-playfair)', color: 'var(--txtl)' }}>
          {subtitle}
        </p>

        {/* stats — Playfair Display 700 numbers */}
        <div className="mb-10 grid grid-cols-4 gap-3">
          {stats.map((stat, i) => (
            <div key={i} className="rounded-2xl border p-5"
              style={{ borderColor: 'var(--bdr)', background: 'rgba(237,229,211,0.04)' }}>
              <span className="block text-[30px] font-bold leading-tight"
                style={{ fontFamily: 'var(--font-playfair)', color: 'var(--terra)' }}>{stat.value}</span>
              <span className="mt-1.5 block text-[10px] font-semibold uppercase tracking-[1.8px]"
                style={{ color: 'var(--txtll)' }}>{stat.label}</span>
            </div>
          ))}
        </div>

        {/* layer cards */}
        <div className="grid grid-cols-2 gap-4 max-w-[680px]">
          {layers.map((layer) => (
            <div key={layer.id} className="rounded-2xl border p-5"
              style={{
                borderColor: layer.id === 'a' ? 'rgba(111,168,118,0.18)' : 'rgba(200,85,48,0.18)',
                background: layer.id === 'a' ? 'rgba(74,148,86,0.06)' : 'rgba(200,85,48,0.06)',
              }}>
              <span className="mb-3 inline-block rounded-full px-3 py-1 text-[9px] font-bold uppercase tracking-[2px]"
                style={{
                  background: layer.id === 'a' ? 'rgba(74,148,86,0.15)' : 'rgba(200,85,48,0.15)',
                  color: layer.id === 'a' ? 'var(--sage)' : 'var(--terra)',
                }}>
                {layer.badge}
              </span>
              {/* card heading — 15px Inter 700 */}
              <div className="mb-1.5 text-[15px] font-bold" style={{ color: 'var(--txt)' }}>{layer.title}</div>
              {/* body — 13px Inter 400 */}
              <div className="text-[13px] leading-[1.7]" style={{ color: 'var(--txtl)' }}>{layer.description}</div>
            </div>
          ))}
        </div>

      </div>
    </section>
  )
}
