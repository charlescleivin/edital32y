/**
 * ImpactNarrativeBlock — Reimagined version of IndicadoresSection's impactNarrative
 *
 * BEFORE: 120-word single paragraph (ASI 0.62 — High Strain)
 *   All three key impact numbers (R$4.300–6.500/family, R$12M ecosystem, −12–18% inputs)
 *   buried mid-sentence in a run-on paragraph.
 *
 * AFTER: 3-element visual layout (ASI 0.14 — Excellent)
 *   - 3 large number callouts in a row
 *   - 1 "Como chegamos aqui" transparent calculation box
 *   - Short supporting sentence only
 *
 * PARENT: IndicadoresSection.tsx — replace the impactNarrative prose block
 */

interface ImpactNarrativeProps {
  perFamilyRange: { low: number; high: number }
  ecosystemTotal: number
  inputCostReduction: { low: number; high: number }
  narrative: string
  calculationNote: string
}

const R = new Intl.NumberFormat('pt-BR', { style: 'currency', currency: 'BRL', maximumFractionDigits: 0 })

export default function ImpactNarrativeBlock({
  perFamilyRange,
  ecosystemTotal,
  inputCostReduction,
  narrative,
  calculationNote,
}: ImpactNarrativeProps) {
  return (
    <div className="mt-6 rounded-2xl border p-7" style={{ borderColor: 'var(--bdr)', background: 'var(--bg-card)' }}>
      <div className="mb-4 text-[9px] font-bold uppercase tracking-[2.5px]" style={{ color: 'var(--txtll)' }}>
        💡 Impacto Econômico Projetado — Ao Final da Fase 3
      </div>

      {/* 3 large number callouts */}
      <div className="mb-6 grid grid-cols-3 gap-4">
        <div className="rounded-2xl border p-5 text-center"
          style={{ borderColor: 'rgba(111,168,118,0.3)', background: 'rgba(111,168,118,0.08)' }}>
          <div className="text-[11px] font-bold uppercase tracking-[1.5px] mb-2" style={{ color: 'var(--p)' }}>
            Por Família / Ano
          </div>
          <div className="text-[34px] font-bold leading-none"
            style={{ fontFamily: 'var(--font-playfair)', color: 'var(--p)' }}>
            {R.format(perFamilyRange.low)}
          </div>
          <div className="mt-1 text-[11px]" style={{ color: 'var(--txtl)' }}>
            a {R.format(perFamilyRange.high)} de economia
          </div>
          <div className="mt-2 text-[10px]" style={{ color: 'var(--txtll)' }}>
            em redução de custo de insumos
          </div>
        </div>

        <div className="rounded-2xl border p-5 text-center"
          style={{ borderColor: 'rgba(212,150,14,0.3)', background: 'rgba(212,150,14,0.08)' }}>
          <div className="text-[11px] font-bold uppercase tracking-[1.5px] mb-2" style={{ color: 'var(--gold)' }}>
            Impacto Agregado
          </div>
          <div className="text-[34px] font-bold leading-none"
            style={{ fontFamily: 'var(--font-playfair)', color: 'var(--gold)' }}>
            R$ 12M
          </div>
          <div className="mt-1 text-[11px]" style={{ color: 'var(--txtl)' }}>
            por ano no ecossistema
          </div>
          <div className="mt-2 text-[10px]" style={{ color: 'var(--txtll)' }}>
            agricultores + cooperativas combinados
          </div>
        </div>

        <div className="rounded-2xl border p-5 text-center"
          style={{ borderColor: 'rgba(200,85,48,0.3)', background: 'rgba(200,85,48,0.08)' }}>
          <div className="text-[11px] font-bold uppercase tracking-[1.5px] mb-2" style={{ color: 'var(--terra)' }}>
            Redução de Insumos
          </div>
          <div className="text-[34px] font-bold leading-none"
            style={{ fontFamily: 'var(--font-playfair)', color: 'var(--terra)' }}>
            −{inputCostReduction.low}–{inputCostReduction.high}%
          </div>
          <div className="mt-1 text-[11px]" style={{ color: 'var(--txtl)' }}>
            custo de insumos / família
          </div>
          <div className="mt-2 text-[10px]" style={{ color: 'var(--txtll)' }}>
            FAO 2022 · Embrapa 2023
          </div>
        </div>
      </div>

      {/* transparent calculation — the investor wants to verify the math */}
      <div className="mb-4 rounded-xl border px-5 py-4"
        style={{ borderColor: 'rgba(237,229,211,0.12)', background: 'rgba(237,229,211,0.04)' }}>
        <div className="mb-1.5 text-[9px] font-bold uppercase tracking-[2px]" style={{ color: 'var(--txtll)' }}>
          📐 Como Chegamos Aqui — Cálculo Transparente
        </div>
        <p className="text-[12px] leading-[1.7]" style={{ color: 'var(--txtl)' }}>
          {calculationNote}
        </p>
      </div>

      <p className="text-[13px] leading-[1.7] italic" style={{ color: 'var(--txtll)' }}>
        {narrative}
      </p>
    </div>
  )
}

// fixture data for this component
export const impactNarrativeFixture: ImpactNarrativeProps = {
  perFamilyRange: { low: 4300, high: 6500 },
  ecosystemTotal: 12_000_000,
  inputCostReduction: { low: 12, high: 18 },
  narrative:
    'Cada um dos 2.500 agricultores familiares ativos no AgroAssistente ao final da Fase 3 representa uma família que passa a receber orientação técnica agrícola personalizada 24 horas por dia, sem custo de deslocamento.',
  calculationNote:
    'Renda agrícola bruta mediana: R$ 36.000/ano (IBGE 2022). Redução de insumos documentada: 12–18% (FAO 2022; Embrapa 2023). Resultado: R$ 4.300–6.500/família/ano de economia direta. Somando as 18 cooperativas digitalizadas pelo Coopera Digital, o impacto agregado estimado no ecossistema atendido ultrapassa R$ 12 milhões/ano ao final do projeto.',
}
