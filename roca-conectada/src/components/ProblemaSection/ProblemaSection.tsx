import SectionHero from '@/components/ui/SectionHero'
import type { S2Data } from '@/types/proposal'

export const componentMeta = { slug: 'problema-section', label: 'Problema e Justificativa' }

export type ProblemaSectionProps = S2Data

const statAccent: Record<string, string> = {
  green: 'var(--p)',
  blue:  'var(--sage)',
  red:   'var(--terra)',
}

const barrierAccent = [
  { color: 'var(--terra)', border: 'rgba(200,85,48,0.3)',   bg: 'rgba(200,85,48,0.13)'   },
  { color: 'var(--gold)',  border: 'rgba(212,150,14,0.3)',  bg: 'rgba(212,150,14,0.13)'  },
  { color: 'var(--sage)',  border: 'rgba(111,168,118,0.3)', bg: 'rgba(111,168,118,0.13)' },
  { color: 'var(--sage)',  border: 'rgba(111,168,118,0.3)', bg: 'rgba(111,168,118,0.13)' },
  { color: 'var(--gold)',  border: 'rgba(212,150,14,0.3)',  bg: 'rgba(212,150,14,0.13)'  },
]

function renderBlocks(text: string, headingColor = 'var(--txt)') {
  return text.split(/\n\n+/).map((block, idx) => {
    const m = block.match(/^\*\*([^*]+)\*\*:?\s*([\s\S]*)$/)
    if (m) {
      return (
        <div key={idx} className={idx > 0 ? 'mt-6 border-t pt-5' : ''} style={{ borderColor: 'var(--bdr)' }}>
          <div className="mb-2 text-[13px] font-bold leading-[1.3]" style={{ color: headingColor }}>
            {m[1].trim()}
          </div>
          {m[2].trim() && (
            <p className="text-[13.5px] leading-[1.8]" style={{ color: 'var(--txtl)' }}>{m[2].trim()}</p>
          )}
        </div>
      )
    }
    return (
      <p key={idx} className={`text-[14px] leading-[1.8] ${idx > 0 ? 'mt-3' : ''}`} style={{ color: 'var(--txtl)' }}>
        {block}
      </p>
    )
  })
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

      {/* opening scenario */}
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

      {/* stats */}
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

      {/* barriers — magazine alternating layout */}
      <div className="mb-3 text-[10px] font-bold uppercase tracking-[2.5px]" style={{ color: 'var(--txtll)' }}>
        As {barriers.length} Barreiras Estruturais
      </div>
      <div className="mb-8 flex flex-col gap-4">
        {barriers.map((b, i) => {
          const acc = barrierAccent[i] ?? barrierAccent[0]
          const textOnLeft = i % 2 === 0

          const textBlock = (
            <div className="flex flex-[3] flex-col justify-center px-10 py-10"
              style={{ order: textOnLeft ? 1 : 3 }}>
              <div className="mb-1.5 text-[9px] font-bold uppercase tracking-[2.5px]" style={{ color: acc.color }}>
                Barreira {i + 1} de {barriers.length}
              </div>
              <div className="mb-5 mt-1 text-[17px] font-bold leading-[1.3]" style={{ color: 'var(--txt)' }}>
                {b.title}
              </div>
              <div className="text-[13.5px] leading-[1.8]" style={{ color: 'var(--txtl)' }}>
                {b.description}
              </div>
            </div>
          )

          const visualPanel = b.image ? (
            <div className="relative flex-[2] overflow-hidden" style={{ order: textOnLeft ? 3 : 1 }}>
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img src={b.image} alt="" className="h-full w-full object-cover" />
            </div>
          ) : (
            <div className="flex flex-[2] flex-col items-center justify-center gap-5 px-10 py-12"
              style={{
                order: textOnLeft ? 3 : 1,
                backgroundColor: acc.bg,
                backgroundImage: 'radial-gradient(circle at 1px 1px, rgba(255,255,255,0.05) 1px, transparent 0)',
                backgroundSize: '24px 24px',
              }}>
              <span className="text-[90px] leading-none" style={{ opacity: 0.85 }}>{b.icon}</span>
              {b.keyFact && (
                <>
                  <div className="text-center">
                    <div className="text-[52px] font-bold leading-none"
                      style={{ fontFamily: 'var(--font-playfair)', color: acc.color }}>
                      {b.keyFact.value}
                    </div>
                    <div className="mt-3 text-[12px] leading-snug" style={{ color: 'var(--txtl)', maxWidth: 200 }}>
                      {b.keyFact.label}
                    </div>
                  </div>
                </>
              )}
            </div>
          )

          return (
            <div key={i} className="flex overflow-hidden rounded-2xl border" style={{ borderColor: acc.border }}>
              {textBlock}
              <div className="w-px shrink-0" style={{ order: 2, background: acc.border }} />
              {visualPanel}
            </div>
          )
        })}
      </div>

      {/* context note */}
      <div className="rounded-2xl border-l-[3px] p-7"
        style={{ borderColor: 'var(--terra)', background: 'var(--bg-card)' }}>
        <div className="mb-5 text-[10px] font-bold uppercase tracking-[2px]" style={{ color: 'var(--terra)' }}>
          🧱 Contexto e Posicionamento Estratégico
        </div>
        {renderBlocks(contextNote, 'var(--terra)')}
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
          <div className="mb-5 text-[9px] font-bold uppercase tracking-[2.5px]" style={{ color: 'var(--sage)' }}>
            🇧🇷 Diferencial Competitivo — Por que este projeto é único no Brasil
          </div>
          {competitiveContext.split(/\n\n+/).map((block, idx) => {
            const m = block.match(/^\*\*([^*]+)\*\*:?\s*([\s\S]*)$/)
            if (m) {
              return (
                <div key={idx} className="mb-5 border-l-[2px] pl-4 last:mb-0"
                  style={{ borderColor: 'rgba(111,168,118,0.4)' }}>
                  <div className="mb-1.5 text-[12px] font-bold" style={{ color: 'var(--sage)' }}>
                    {m[1].trim()}
                  </div>
                  <p className="text-[13px] leading-[1.8]" style={{ color: 'var(--txtl)' }}>{m[2].trim()}</p>
                </div>
              )
            }
            return (
              <p key={idx} className="mb-5 text-[14px] leading-[1.8]" style={{ color: 'var(--txtl)' }}>{block}</p>
            )
          })}
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
