import SectionHero from '@/components/ui/SectionHero'
import type { S9Data } from '@/types/proposal'

export const componentMeta = { slug: 'riscos-section', label: 'Riscos e Mitigações' }

export type RiscosSectionProps = S9Data

const levelStyles = {
  high:   { border: 'var(--terra)', id: { bg: 'var(--terra)',   color: 'var(--txt)' }, badge: { bg: 'var(--terrap)', color: 'var(--terra)' }, label: 'Alto'  },
  medium: { border: 'var(--gold)',  id: { bg: 'var(--gold)',    color: 'var(--txt)' }, badge: { bg: 'var(--goldp)',  color: 'var(--gold)'  }, label: 'Médio' },
  low:    { border: 'var(--p)',     id: { bg: 'var(--p)',       color: 'var(--txt)' }, badge: { bg: 'var(--pale)',   color: 'var(--p)'     }, label: 'Baixo' },
}

export default function RiscosSection({ number, title, subtitle, headline, heroImage, heroCaption, heroStatement, heroObjectPosition, risks, sustainabilityScenarios }: RiscosSectionProps) {
  return (
    <section id="s9" className="relative overflow-hidden px-4 py-10 sm:px-8 sm:py-14 lg:px-16 lg:py-20" style={{ background: 'var(--bg)' }}>
      <span aria-hidden className="pointer-events-none absolute right-8 top-4 select-none hidden sm:block text-[180px] font-bold leading-none opacity-[0.025]"
        style={{ fontFamily: 'var(--font-playfair)', color: 'var(--txt)' }}>9</span>
      {heroImage && <SectionHero image={heroImage} caption={heroCaption} statement={heroStatement} objectPosition={heroObjectPosition} />}

      <div className="relative mb-14">
        <span className="mb-5 inline-flex items-center gap-2.5 rounded-full border px-4 py-1.5 text-[9px] font-bold uppercase tracking-[3px]"
          style={{ borderColor: 'var(--bdr)', background: 'rgba(237,229,211,0.04)', color: 'var(--txtll)' }}>
          {number}
        </span>
        {headline && (
          <p className="mb-3 text-[16px] sm:text-[19px] lg:text-[22px] font-bold italic leading-[1.2]"
            style={{ fontFamily: 'var(--font-playfair)', color: 'var(--terra)' }}>
            {headline}
          </p>
        )}
        <h2 className="mb-3 text-[26px] sm:text-[34px] lg:text-[44px] font-bold leading-[1.05] tracking-[-0.3px]"
          style={{ fontFamily: 'var(--font-playfair)', color: 'var(--txt)' }}>{title}</h2>
        <p className="text-[15px] italic leading-relaxed"
          style={{ fontFamily: 'var(--font-playfair)', color: 'var(--txtl)' }}>{subtitle}</p>
      </div>

      <div className="flex flex-col gap-3">
        {risks.map((risk) => {
          const st = levelStyles[risk.level]
          return (
            <div key={risk.id}
              className="grid grid-cols-[44px_1fr_88px_76px] items-start gap-4 rounded-2xl border border-l-[3px] p-5"
              style={{ borderColor: 'var(--bdr)', borderLeftColor: st.border, background: 'var(--bg-card)' }}>

              {/* risk ID — 11px Inter 700 */}
              <span className="flex h-9 w-9 items-center justify-center rounded-xl text-[10px] font-extrabold"
                style={{ background: st.id.bg, color: st.id.color }}>{risk.id}</span>

              <div>
                {/* title — 14px Inter 700 */}
                <div className="mb-1.5 text-[14px] font-bold" style={{ color: 'var(--txt)' }}>{risk.title}</div>
                {/* mitigation — 13px Inter 400 */}
                <div className="text-[13px] leading-[1.7]" style={{ color: 'var(--txtl)' }}>{risk.mitigation}</div>
              </div>

              {/* probability — 12.5px Inter 400 centered */}
              <div className="pt-0.5 text-center text-[12.5px]" style={{ color: 'var(--txtl)' }}>{risk.probability}</div>

              {/* level badge */}
              <span className="rounded-xl px-3 py-1.5 text-center text-[11px] font-bold"
                style={{ background: st.badge.bg, color: st.badge.color }}>{st.label}</span>
            </div>
          )
        })}
      </div>
      {/* sustainability scenarios */}
      {sustainabilityScenarios && sustainabilityScenarios.length > 0 && (
        <div className="mt-8">
          <div className="mb-4 text-[10px] font-bold uppercase tracking-[2.5px]" style={{ color: 'var(--txtll)' }}>
            Sustentabilidade Pós-Projeto — Cenários de Continuidade
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
            {sustainabilityScenarios.map((s) => (
              <div key={s.id} className="rounded-2xl border p-6"
                style={{ borderColor: 'rgba(111,168,118,0.25)', background: 'rgba(111,168,118,0.05)' }}>
                <div className="mb-2 text-[14px] font-bold" style={{ color: 'var(--sage)' }}>{s.scenario}</div>
                <p className="mb-4 text-[13px] leading-[1.8]" style={{ color: 'var(--txtl)' }}>{s.description}</p>
                <div className="flex items-center justify-between text-[11.5px]">
                  <span style={{ color: 'var(--txtll)' }}>Responsável: <span style={{ color: 'var(--txtl)' }}>{s.responsible}</span></span>
                  <span className="rounded-full px-3 py-1 text-[10px] font-bold"
                    style={{ background: 'var(--pale)', color: 'var(--p)' }}>{s.probability}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      )}
    </section>
  )
}
