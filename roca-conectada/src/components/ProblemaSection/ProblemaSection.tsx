import SectionHero from '@/components/ui/SectionHero'
import type { S2Data } from '@/types/proposal'

export const componentMeta = { slug: 'problema-section', label: 'Problema e Justificativa' }

export type ProblemaSectionProps = S2Data

const statAccent: Record<string, string> = {
  green: 'var(--p)',
  blue:  'var(--sage)',
  red:   'var(--terra)',
}

export default function ProblemaSection({ number, title, subtitle, headline, heroImage, heroCaption, heroStatement, heroObjectPosition, stats, barriers, contextNote, openingScenario, competitiveContext, bibliography, genderEquity }: ProblemaSectionProps) {
  return (
    <section id="s2" className="relative overflow-hidden px-16 py-20" style={{ background: 'var(--bg-alt)' }}>
      <span aria-hidden className="pointer-events-none absolute right-8 top-4 select-none text-[180px] font-bold leading-none opacity-[0.025]"
        style={{ fontFamily: 'var(--font-playfair)', color: 'var(--txt)' }}>2</span>
      {heroImage && <SectionHero image={heroImage} caption={heroCaption} statement={heroStatement} objectPosition={heroObjectPosition} />}

      <div className="relative mb-14">
        <span className="mb-5 inline-flex items-center gap-2.5 rounded-full border px-4 py-1.5 text-[9px] font-bold uppercase tracking-[3px]"
          style={{ borderColor: 'var(--bdr)', background: 'rgba(237,229,211,0.04)', color: 'var(--txtll)' }}>
          🌵 {number}
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

      {/* opening scenario — persona vignette */}
      {openingScenario && (
        <div className="mb-10 rounded-2xl border-l-[3px] px-7 py-6"
          style={{ borderColor: 'var(--terra)', background: 'var(--bg-card)' }}>
          <div className="mb-2 text-[9px] font-bold uppercase tracking-[2.5px]" style={{ color: 'var(--terra)' }}>
            👩‍🌾 Cenário Real — Quem Estamos Servindo
          </div>
          <p className="text-[14px] leading-[1.85] italic" style={{ color: 'var(--txtl)' }}>
            {openingScenario}
          </p>
        </div>
      )}

      {/* stats — large Playfair numbers */}
      <div className="mb-10 grid grid-cols-4 gap-4">
        {stats.map((s, i) => (
          <div key={i} className="rounded-2xl border p-5 text-center"
            style={{ borderColor: 'var(--bdr)', background: 'var(--bg-card)' }}>
            <div className="text-[42px] font-bold leading-tight"
              style={{ fontFamily: 'var(--font-playfair)', color: statAccent[s.colorVariant] ?? statAccent.green }}>
              {s.value}
            </div>
            <div className="mt-2 text-[12px] leading-snug" style={{ color: 'var(--txtl)' }}>{s.label}</div>
          </div>
        ))}
      </div>

      {/* barriers */}
      <div className="mb-2 text-[10px] font-bold uppercase tracking-[2.5px]" style={{ color: 'var(--txtll)' }}>
        As 4 Barreiras Estruturais
      </div>
      <div className="mb-8 grid grid-cols-2 gap-4">
        {barriers.map((b, i) => (
          <div key={i} className="rounded-2xl border p-6"
            style={{ borderColor: 'var(--bdr)', background: 'var(--bg-card)' }}>
            <div className="mb-3 text-[30px] leading-none">{b.icon}</div>
            {/* card heading — 15px Inter 700 */}
            <div className="mb-2 text-[15px] font-bold" style={{ color: 'var(--txt)' }}>{b.title}</div>
            {/* body — 13.5px Inter 400 */}
            <div className="text-[13.5px] leading-[1.75]" style={{ color: 'var(--txtl)' }}>{b.description}</div>
          </div>
        ))}
      </div>

      {/* context note — blockquote style */}
      <div className="rounded-2xl border-l-[3px] p-7"
        style={{ borderColor: 'var(--terra)', background: 'var(--bg-card)' }}>
        <div className="mb-2 text-[10px] font-bold uppercase tracking-[2px]" style={{ color: 'var(--terra)' }}>
          Contexto Regional
        </div>
        <p className="text-[14px] leading-[1.8]" style={{ color: 'var(--txtl)' }}>
          {contextNote.replace(/\*\*([^*]+)\*\*/g, '$1')}
        </p>
      </div>

      {/* gender equity */}
      {genderEquity && (
        <div className="mt-5 rounded-2xl border p-7"
          style={{ borderColor: 'rgba(212,150,14,0.25)', background: 'rgba(212,150,14,0.05)' }}>
          <div className="mb-2 text-[9px] font-bold uppercase tracking-[2.5px]" style={{ color: 'var(--gold)' }}>
            ♀ Equidade de Gênero — Princípio Transversal
          </div>
          <p className="text-[14px] leading-[1.85]" style={{ color: 'var(--txtl)' }}>{genderEquity}</p>
        </div>
      )}

      {/* competitive context */}
      {competitiveContext && (
        <div className="mt-5 rounded-2xl border p-7"
          style={{ borderColor: 'rgba(111,168,118,0.25)', background: 'rgba(111,168,118,0.05)' }}>
          <div className="mb-2 text-[9px] font-bold uppercase tracking-[2.5px]" style={{ color: 'var(--sage)' }}>
            🇧🇷 Diferencial Competitivo — Por que este projeto é único no Brasil
          </div>
          <p className="text-[14px] leading-[1.85]" style={{ color: 'var(--txtl)' }}>
            {competitiveContext}
          </p>
        </div>
      )}
      {/* bibliography */}
      {bibliography && bibliography.length > 0 && (
        <div className="mt-5 rounded-2xl border p-6"
          style={{ borderColor: 'var(--bdr)', background: 'var(--bg-card)' }}>
          <div className="mb-4 text-[9px] font-bold uppercase tracking-[2.5px]" style={{ color: 'var(--txtll)' }}>
            📚 Referências Bibliográficas Principais
          </div>
          <div className="flex flex-col gap-2.5">
            {bibliography.map((b, i) => (
              <div key={i} className="flex items-start gap-3 text-[12.5px] leading-[1.7]">
                <span className="shrink-0 rounded-lg px-2 py-0.5 text-[10px] font-bold"
                  style={{ background: 'var(--pale)', color: 'var(--p)' }}>{b.ref}</span>
                <span style={{ color: 'var(--txtl)' }}>{b.text}</span>
              </div>
            ))}
          </div>
        </div>
      )}
    </section>
  )
}
