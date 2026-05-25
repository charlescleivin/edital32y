import SectionHero from '@/components/ui/SectionHero'
import type { S8Data, InvestmentLeverage } from '@/types/proposal'

export const componentMeta = { slug: 'indicadores-section', label: 'Indicadores e Metas' }

export type IndicadoresSectionProps = S8Data

const roiColors: Record<string, { bar: string; text: string; bg: string; border: string }> = {
  warm:   { bar: 'var(--terra)', text: 'var(--terra)', bg: 'rgba(200,85,48,0.08)',   border: 'rgba(200,85,48,0.25)'   },
  gold:   { bar: 'var(--gold)',  text: 'var(--gold)',  bg: 'rgba(212,150,14,0.08)',  border: 'rgba(212,150,14,0.25)'  },
  sage:   { bar: 'var(--sage)',  text: 'var(--sage)',  bg: 'rgba(111,168,118,0.08)', border: 'rgba(111,168,118,0.25)' },
  bright: { bar: 'var(--p)',     text: 'var(--p)',     bg: 'rgba(74,148,86,0.08)',   border: 'rgba(74,148,86,0.3)'    },
}

function LeverageBlock({ data }: { data: InvestmentLeverage }) {
  return (
    <div className="mb-10 overflow-hidden rounded-2xl border" style={{ borderColor: 'rgba(212,150,14,0.2)', background: 'var(--bg-card)' }}>
      {/* header */}
      <div className="border-b px-8 py-7" style={{ borderColor: 'rgba(212,150,14,0.15)', background: 'rgba(212,150,14,0.04)' }}>
        <div className="mb-1 text-[9px] font-bold uppercase tracking-[3px]" style={{ color: 'var(--gold)' }}>
          💡 Retorno sobre Investimento Público
        </div>
        <h3 className="mb-1 text-[22px] font-bold leading-snug" style={{ fontFamily: 'var(--font-playfair)', color: 'var(--txt)' }}>
          {data.title}
        </h3>
        <p className="text-[13px] italic" style={{ color: 'var(--txtl)' }}>{data.subtitle}</p>
      </div>

      {/* two-panel body */}
      <div className="grid grid-cols-1 sm:grid-cols-[280px_1fr] divide-y sm:divide-y-0 sm:divide-x" style={{ borderColor: 'rgba(237,229,211,0.07)' }}>
        {/* left — investment box */}
        <div className="flex flex-col gap-5 p-7" style={{ borderColor: 'rgba(237,229,211,0.07)' }}>
          <div>
            <div className="mb-1 text-[9px] font-bold uppercase tracking-[2.5px]" style={{ color: 'var(--txtll)' }}>
              Investimento total
            </div>
            <div className="text-[38px] font-bold leading-none" style={{ fontFamily: 'var(--font-playfair)', color: 'var(--terra)' }}>
              {data.investment}
            </div>
            <div className="mt-1 text-[11px]" style={{ color: 'var(--txtll)' }}>{data.investmentLabel}</div>
          </div>

          <div className="h-px" style={{ background: 'var(--bdr)' }} />

          <div>
            <div className="mb-1 text-[9px] font-bold uppercase tracking-[2.5px]" style={{ color: 'var(--txtll)' }}>
              Custo por família beneficiada
            </div>
            <div className="text-[28px] font-bold leading-none" style={{ fontFamily: 'var(--font-playfair)', color: 'var(--gold)' }}>
              {data.costPerFamily}
            </div>
            <div className="mt-0.5 text-[11px]" style={{ color: 'var(--txtll)' }}>por família · pagos uma única vez</div>
          </div>

          <div className="h-px" style={{ background: 'var(--bdr)' }} />

          {/* permanent assets */}
          <div>
            <div className="mb-3 text-[9px] font-bold uppercase tracking-[2.5px]" style={{ color: 'var(--txtll)' }}>
              Ativos públicos permanentes
            </div>
            <div className="space-y-2.5">
              {data.permanentAssets.map((asset, i) => (
                <div key={i} className="flex items-start gap-2.5">
                  <span className="mt-0.5 text-[16px] leading-none shrink-0">{asset.icon}</span>
                  <div>
                    <div className="text-[12px] font-semibold leading-snug" style={{ color: 'var(--txt)' }}>{asset.name}</div>
                    <div className="text-[10px] leading-snug" style={{ color: 'var(--txtll)' }}>{asset.license}</div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* right — ROI bar chart */}
        <div className="flex flex-col p-7">
          <div className="mb-1 text-[9px] font-bold uppercase tracking-[2.5px]" style={{ color: 'var(--txtll)' }}>
            Retorno acumulado estimado · pós-entrega do projeto
          </div>
          <div className="mb-6 text-[11px] italic" style={{ color: 'var(--txtll)' }}>
            (investimento encerrado no mês 36 — barras mostram retorno social acumulado)
          </div>

          <div className="flex flex-1 flex-col justify-between gap-4">
            {data.years.map((year, i) => {
              const c = roiColors[year.roiVariant] ?? roiColors.warm
              return (
                <div key={i} className="group">
                  {/* label row */}
                  <div className="mb-1.5 flex items-baseline justify-between">
                    <div className="flex items-baseline gap-1.5">
                      <span className="text-[13px] font-bold" style={{ color: 'var(--txt)' }}>{year.label}</span>
                      {year.sublabel && <span className="text-[10px]" style={{ color: 'var(--txtll)' }}>{year.sublabel}</span>}
                    </div>
                    <div className="flex items-baseline gap-2">
                      <span className="text-[13px] font-bold" style={{ fontFamily: 'var(--font-playfair)', color: c.text }}>
                        {year.cumulative}
                      </span>
                      <span className="rounded-full px-2 py-0.5 text-[10px] font-bold"
                        style={{ background: c.bg, color: c.text, border: `1px solid ${c.border}` }}>
                        {year.roi}
                      </span>
                    </div>
                  </div>
                  {/* bar */}
                  <div className="h-2.5 overflow-hidden rounded-full" style={{ background: 'rgba(237,229,211,0.06)' }}>
                    <div
                      className="h-full rounded-full transition-all"
                      style={{ width: `${year.barPercent}%`, background: c.bar, opacity: 0.85 }}
                    />
                  </div>
                </div>
              )
            })}
          </div>

          {/* annual return callout */}
          <div className="mt-6 flex items-center gap-4 rounded-xl border px-5 py-4"
            style={{ borderColor: 'rgba(111,168,118,0.25)', background: 'rgba(111,168,118,0.06)' }}>
            <div>
              <div className="text-[9px] font-bold uppercase tracking-[2px] mb-0.5" style={{ color: 'var(--sage)' }}>
                Renda recorrente gerada / ano
              </div>
              <div className="text-[26px] font-bold leading-none" style={{ fontFamily: 'var(--font-playfair)', color: 'var(--p)' }}>
                {data.annualReturn}
              </div>
            </div>
            <div className="h-10 w-px" style={{ background: 'rgba(111,168,118,0.2)' }} />
            <div>
              <div className="text-[9px] font-bold uppercase tracking-[2px] mb-0.5" style={{ color: 'var(--txtll)' }}>
                Famílias alcançadas
              </div>
              <div className="text-[20px] font-bold leading-none" style={{ fontFamily: 'var(--font-playfair)', color: 'var(--txt)' }}>
                {data.familyCount}
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* footer callout */}
      <div className="border-t px-8 py-4 text-center" style={{ borderColor: 'rgba(212,150,14,0.15)', background: 'rgba(212,150,14,0.03)' }}>
        <span className="text-[13px] font-bold italic" style={{ color: 'var(--gold)' }}>{data.callout}</span>
        <span className="ml-4 text-[11px]" style={{ color: 'var(--txtll)' }}>{data.note}</span>
      </div>
    </div>
  )
}

export default function IndicadoresSection({ number, title, subtitle, headline, heroImage, heroCaption, heroStatement, heroObjectPosition, counters, indicators, impactNarrative, leverage }: IndicadoresSectionProps) {
  return (
    <section id="s8" className="relative overflow-hidden px-4 py-10 sm:px-8 sm:py-14 lg:px-16 lg:py-20" style={{ background: 'var(--bg-alt)' }}>
      <span aria-hidden className="pointer-events-none absolute right-8 top-4 select-none hidden sm:block text-[180px] font-bold leading-none opacity-[0.025]"
        style={{ fontFamily: 'var(--font-playfair)', color: 'var(--txt)' }}>8</span>
      {heroImage && <SectionHero image={heroImage} caption={heroCaption} statement={heroStatement} objectPosition={heroObjectPosition} />}

      <div className="relative mb-14">
        <span className="mb-5 inline-flex items-center gap-2.5 rounded-full border px-4 py-1.5 text-[9px] font-bold uppercase tracking-[3px]"
          style={{ borderColor: 'var(--bdr)', background: 'rgba(237,229,211,0.04)', color: 'var(--txtll)' }}>
          📊 {number}
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

      {/* KPI counters — 44px Playfair Display */}
      <div className="mb-8 grid grid-cols-2 sm:grid-cols-4 gap-4">
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

      {leverage && <LeverageBlock data={leverage} />}

      {/* impact funnel — corpus → model → users → income */}
      <div className="mb-8 rounded-2xl border p-6" style={{ borderColor: 'var(--bdr)', background: 'var(--bg-card)' }}>
        <div className="mb-5 text-[9px] font-bold uppercase tracking-[2.5px]" style={{ color: 'var(--txtll)' }}>
          🔗 Cadeia de Impacto — Como o Investimento Vira Renda Rural
        </div>
        <div className="flex items-center gap-2 overflow-x-auto">
          {[
            { icon: '📚', value: '25.000',  unit: 'pares Q&A',       label: 'Corpus AgroLinguaBR',          color: 'var(--sage)',  bg: 'rgba(111,168,118,0.1)' },
            { icon: '🤖', value: '1',        unit: 'modelo soberano', label: 'AgroAssistente fine-tuned',    color: 'var(--gold)',  bg: 'rgba(212,150,14,0.1)'  },
            { icon: '📱', value: '25.000',  unit: 'famílias rurais', label: 'Acesso via WhatsApp',           color: 'var(--p)',     bg: 'rgba(74,148,86,0.1)'   },
            { icon: '👨‍👩‍👧', value: '62.500', unit: 'pessoas',         label: 'Impacto indireto (x2,5)',      color: 'var(--terra)', bg: 'rgba(200,85,48,0.1)'   },
            { icon: '💰', value: '+R$108M', unit: 'renda/ano',       label: 'Impacto econômico estimado',   color: 'var(--terra)', bg: 'rgba(200,85,48,0.07)'  },
          ].map((stage, i, arr) => (
            <div key={i} className="flex items-center gap-2 shrink-0">
              <div className="flex flex-col items-center rounded-2xl border px-5 py-5 text-center"
                style={{ borderColor: stage.color, background: stage.bg, minWidth: 140 }}>
                <span className="mb-1 text-[28px] leading-none">{stage.icon}</span>
                <span className="text-[24px] font-bold leading-tight"
                  style={{ fontFamily: 'var(--font-playfair)', color: stage.color }}>
                  {stage.value}
                </span>
                <span className="text-[11px] font-semibold" style={{ color: stage.color }}>{stage.unit}</span>
                <span className="mt-1 text-[10.5px] leading-snug text-center" style={{ color: 'var(--txtl)' }}>
                  {stage.label}
                </span>
              </div>
              {i < arr.length - 1 && (
                <span className="shrink-0 text-[20px]" style={{ color: 'var(--txtll)' }}>→</span>
              )}
            </div>
          ))}
        </div>
        <div className="mt-4 flex gap-5 border-t pt-4" style={{ borderColor: 'var(--bdr)' }}>
          <div className="flex-1 rounded-xl border px-4 py-3 text-center"
            style={{ borderColor: 'rgba(200,85,48,0.3)', background: 'rgba(200,85,48,0.05)' }}>
            <div className="text-[11px] uppercase tracking-wider font-bold mb-1" style={{ color: 'var(--terra)' }}>Antes</div>
            <div className="text-[28px] font-bold" style={{ fontFamily: 'var(--font-playfair)', color: 'var(--terra)' }}>1:500</div>
            <div className="text-[11px]" style={{ color: 'var(--txtl)' }}>agente ATER por família rural</div>
          </div>
          <div className="flex items-center text-[20px]" style={{ color: 'var(--txtll)' }}>→</div>
          <div className="flex-1 rounded-xl border px-4 py-3 text-center"
            style={{ borderColor: 'rgba(111,168,118,0.3)', background: 'rgba(111,168,118,0.05)' }}>
            <div className="text-[11px] uppercase tracking-wider font-bold mb-1" style={{ color: 'var(--p)' }}>Depois</div>
            <div className="text-[28px] font-bold" style={{ fontFamily: 'var(--font-playfair)', color: 'var(--p)' }}>1:6</div>
            <div className="text-[11px]" style={{ color: 'var(--txtl)' }}>ratio efetivo via plataforma</div>
          </div>
        </div>
      </div>

      {/* indicators table */}
      <div className="overflow-x-auto overflow-hidden rounded-2xl border" style={{ borderColor: 'var(--bdr)' }}>
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
