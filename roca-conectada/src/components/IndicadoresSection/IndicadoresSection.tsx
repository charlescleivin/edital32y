import SectionHero from '@/components/ui/SectionHero'
import type { S8Data } from '@/types/proposal'

export const componentMeta = { slug: 'indicadores-section', label: 'Indicadores e Metas' }

export type IndicadoresSectionProps = S8Data

export default function IndicadoresSection({ number, title, subtitle, headline, heroImage, heroCaption, heroStatement, heroObjectPosition, counters, indicators, impactNarrative }: IndicadoresSectionProps) {
  return (
    <section id="s8" className="relative overflow-hidden px-16 py-20" style={{ background: 'var(--bg-alt)' }}>
      <span aria-hidden className="pointer-events-none absolute right-8 top-4 select-none text-[180px] font-bold leading-none opacity-[0.025]"
        style={{ fontFamily: 'var(--font-playfair)', color: 'var(--txt)' }}>8</span>
      {heroImage && <SectionHero image={heroImage} caption={heroCaption} statement={heroStatement} objectPosition={heroObjectPosition} />}

      <div className="relative mb-14">
        <span className="mb-5 inline-flex items-center gap-2.5 rounded-full border px-4 py-1.5 text-[9px] font-bold uppercase tracking-[3px]"
          style={{ borderColor: 'var(--bdr)', background: 'rgba(237,229,211,0.04)', color: 'var(--txtll)' }}>
          📊 {number}
        </span>
        {headline && (
          <p className="mb-3 text-[22px] font-bold italic leading-[1.2]"
            style={{ fontFamily: 'var(--font-playfair)', color: 'var(--terra)' }}>
            {headline}
          </p>
        )}
        <h2 className="mb-3 text-[44px] font-bold leading-[1.05] tracking-[-0.3px]"
          style={{ fontFamily: 'var(--font-playfair)', color: 'var(--txt)' }}>{title}</h2>
        <p className="text-[15px] italic leading-relaxed"
          style={{ fontFamily: 'var(--font-playfair)', color: 'var(--txtl)' }}>{subtitle}</p>
      </div>

      {/* KPI counters — 44px Playfair Display */}
      <div className="mb-8 grid grid-cols-4 gap-4">
        {counters.map((c, i) => (
          <div key={i} className="rounded-2xl border p-6 text-center"
            style={{ borderColor: 'var(--bdr)', background: 'var(--bg-card)' }}>
            <span className="mb-3 block text-[30px] leading-none">{c.icon}</span>
            <span className="block text-[44px] font-bold leading-tight"
              style={{ fontFamily: 'var(--font-playfair)', color: 'var(--p)' }}>
              {c.count.toLocaleString('pt-BR')}
            </span>
            <span className="mt-2 block text-[12px]" style={{ color: 'var(--txtl)' }}>{c.label}</span>
          </div>
        ))}
      </div>

      {/* impact narrative */}
      {impactNarrative && (
        <div className="mb-8 rounded-2xl border-l-[3px] px-7 py-6"
          style={{ borderColor: 'var(--p)', background: 'rgba(111,168,118,0.05)' }}>
          <div className="mb-2 text-[9px] font-bold uppercase tracking-[2.5px]" style={{ color: 'var(--p)' }}>
            🌱 O que esses números significam no campo
          </div>
          <p className="text-[14px] leading-[1.85]" style={{ color: 'var(--txtl)' }}>
            {impactNarrative}
          </p>
        </div>
      )}

      {/* indicators table */}
      <div className="overflow-hidden rounded-2xl border" style={{ borderColor: 'var(--bdr)' }}>
        <table className="w-full text-[13px]">
          <thead style={{ background: 'var(--bg-raised)' }}>
            <tr>
              {['Indicador-chave', 'Fase 1 (mês 12)', 'Fase 2 (mês 24)', 'Fase 3 (mês 36)'].map((h) => (
                <th key={h} className="px-5 py-3.5 text-left text-[9px] font-bold uppercase tracking-[2px]"
                  style={{ color: 'var(--txtll)' }}>{h}</th>
              ))}
            </tr>
          </thead>
          <tbody>
            {indicators.map((row, i) => (
              <tr key={i} style={{ borderTop: '1px solid var(--bdr)' }}>
                <td className="px-5 py-3.5 font-medium" style={{ color: 'var(--txt)' }}>{row.indicator}</td>
                {[row.phase1, row.phase2, row.phase3].map((val, j) => (
                  <td key={j} className="px-5 py-3.5 text-center font-semibold"
                    style={{ color: val === '—' ? 'var(--txtll)' : 'var(--p)' }}>{val}</td>
                ))}
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </section>
  )
}
