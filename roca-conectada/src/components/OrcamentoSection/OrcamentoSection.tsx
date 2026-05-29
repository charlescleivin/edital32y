import SectionHero from '@/components/ui/SectionHero'
import type { BudgetDonutSlice, BudgetLine, S6Data } from '@/types/proposal'

const brl = (n: number) =>
  n.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL', maximumFractionDigits: 0 })

function lineAmount(lines: BudgetLine[], id: string) {
  return lines.find(l => l.id === id)?.amount ?? 0
}

function sliceAmount(lines: BudgetLine[], lineIds: string[]) {
  return lineIds.reduce((s, id) => s + lineAmount(lines, id), 0)
}

export const componentMeta = { slug: 'orcamento-section', label: 'Orçamento Detalhado' }

export type OrcamentoSectionProps = S6Data

// SVG donut chart using stroke-dasharray technique
// Each slice is a circle with r=80, cx=110, cy=110, stroke-width=40
// circumference = 2 * π * 80 ≈ 502.655
const RADIUS = 80
const CX = 110
const CY = 110
const STROKE_WIDTH = 40
const CIRCUMFERENCE = 2 * Math.PI * RADIUS

function DonutChart({ slices, lines, centerLabel }: { slices: BudgetDonutSlice[]; lines: BudgetLine[]; centerLabel: string }) {
  const total = lines.reduce((s, l) => s + l.amount, 0)
  const slicePercents = slices.map(s => sliceAmount(lines, s.lineIds) / total * 100)
  let cumulativePercent = 0

  return (
    <div
      className="rounded-2xl border p-7"
      style={{ borderColor: 'var(--bdr)', background: 'var(--bg-card)' }}
    >
      <div className="mb-5 text-[10px] font-bold uppercase tracking-[2.5px]" style={{ color: 'var(--txtll)' }}>
        Distribuição do Orçamento
      </div>

      <div className="flex flex-col items-start gap-8 sm:flex-row sm:items-center">
        {/* SVG Donut */}
        <div className="shrink-0">
          <svg
            width="220"
            height="220"
            viewBox="0 0 220 220"
            role="img"
            aria-label="Gráfico de distribuição do orçamento"
          >
            {/* Background track */}
            <circle
              cx={CX}
              cy={CY}
              r={RADIUS}
              fill="none"
              stroke="rgba(237,229,211,0.06)"
              strokeWidth={STROKE_WIDTH}
            />

            {/* Slices — rotate -90deg so first slice starts at top */}
            <g style={{ transformOrigin: `${CX}px ${CY}px`, transform: 'rotate(-90deg)' }}>
              {slices.map((slice, i) => {
                const pct = slicePercents[i]
                const dashArray = `${(pct / 100) * CIRCUMFERENCE} ${CIRCUMFERENCE}`
                const dashOffset = CIRCUMFERENCE * (1 - cumulativePercent / 100)
                cumulativePercent += pct
                return (
                  <circle
                    key={i}
                    cx={CX}
                    cy={CY}
                    r={RADIUS}
                    fill="none"
                    stroke={slice.color}
                    strokeWidth={STROKE_WIDTH}
                    strokeDasharray={dashArray}
                    strokeDashoffset={dashOffset}
                    strokeLinecap="butt"
                  />
                )
              })}
            </g>

            {/* Center label */}
            <text
              x={CX}
              y={CY - 8}
              textAnchor="middle"
              dominantBaseline="middle"
              fontSize="26"
              fontWeight="bold"
              fontFamily="var(--font-playfair), serif"
              fill="var(--txt)"
            >
              {centerLabel}
            </text>
            <text
              x={CX}
              y={CY + 18}
              textAnchor="middle"
              dominantBaseline="middle"
              fontSize="10"
              fontFamily="Inter, sans-serif"
              fill="var(--txtll)"
              letterSpacing="1.5"
            >
              TOTAL
            </text>
          </svg>
        </div>

        {/* Legend */}
        <div className="flex flex-col gap-3">
          {slices.map((slice, i) => {
            const amt = sliceAmount(lines, slice.lineIds)
            const pct = slicePercents[i]
            return (
              <div key={i} className="flex items-center gap-3">
                <span className="inline-block shrink-0 rounded-full"
                  style={{ width: 10, height: 10, background: slice.color }} aria-hidden />
                <div>
                  <div className="text-[13px] font-medium" style={{ color: 'var(--txt)' }}>{slice.label}</div>
                  <div className="text-[12px]" style={{ color: 'var(--txtl)' }}>
                    {brl(amt)}{' '}
                    <span style={{ color: 'var(--txtll)' }}>({pct.toFixed(1)}%)</span>
                  </div>
                </div>
              </div>
            )
          })}
        </div>
      </div>
    </div>
  )
}

export default function OrcamentoSection({ number, title, subtitle, headline, heroImage, heroCaption, heroStatement, heroObjectPosition, total, donutSlices, lines, complianceTable, equipmentItems }: OrcamentoSectionProps) {
  const linesTotal = lines.reduce((s, l) => s + l.amount, 0)
  const pct = (amount: number) => (amount / linesTotal * 100).toFixed(1)
  return (
    <section id="s6" className="relative overflow-hidden px-4 py-10 sm:px-8 sm:py-14 lg:px-16 lg:py-20" style={{ background: 'var(--bg-alt)' }}>
      <span aria-hidden className="pointer-events-none absolute right-8 top-4 select-none hidden sm:block text-[180px] font-bold leading-none opacity-[0.025]"
        style={{ fontFamily: 'var(--font-playfair)', color: 'var(--txt)' }}>6</span>
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

      {/* donut chart */}
      <div className="mb-8">
        <DonutChart slices={donutSlices} lines={lines} centerLabel={total} />
      </div>

      {/* budget lines */}
      <div className="mb-8 rounded-2xl border p-7"
        style={{ borderColor: 'var(--bdr)', background: 'var(--bg-card)' }}>
        <div className="mb-5 text-[10px] font-bold uppercase tracking-[2.5px]" style={{ color: 'var(--txtll)' }}>
          Detalhamento por Rubrica
        </div>
        <div className="flex flex-col gap-6">
          {lines.map((line, i) => (
            <div key={i}>
              <div className="mb-2 flex items-center justify-between">
                {/* line label — 14px Inter 600 */}
                <span className="flex items-center gap-2.5 text-[14px] font-semibold" style={{ color: 'var(--txt)' }}>
                  <span className="text-[18px] leading-none">{line.icon}</span>
                  <span>{line.label}</span>
                </span>
                {/* value — 16px Playfair 700 */}
                <span className="text-[16px] font-bold" style={{ fontFamily: 'var(--font-playfair)', color: 'var(--txt)' }}>
                  {brl(line.amount)}
                </span>
              </div>
              <div className="h-2 overflow-hidden rounded-full" style={{ background: 'rgba(237,229,211,0.06)' }}>
                <div className="h-full rounded-full transition-all"
                  style={{ width: `${pct(line.amount)}%`, background: line.color }} />
              </div>
              <div className="mt-1 text-[11px]" style={{ color: 'var(--txtll)' }}>{line.limit}</div>
            </div>
          ))}
        </div>
      </div>

      {/* equipment itemization */}
      {equipmentItems && equipmentItems.length > 0 && (
        <div className="mb-8">
          <div className="mb-4 text-[10px] font-bold uppercase tracking-[2.5px]" style={{ color: 'var(--txtll)' }}>
            Detalhamento — Capital / Equipamentos (R$ 1.450.000)
          </div>
          <div className="relative">
          <div className="overflow-x-auto overflow-hidden rounded-2xl border" style={{ borderColor: 'var(--bdr)' }}>
            <table className="w-full text-[12.5px]">
              <thead style={{ background: 'var(--bg-raised)' }}>
                <tr>
                  {['Item', 'Especificação', 'Qtd', 'Unit.', 'Total'].map((h) => (
                    <th key={h} className="px-4 py-3 text-left text-[9px] font-bold uppercase tracking-[2px]"
                      style={{ color: 'var(--txtll)' }}>{h}</th>
                  ))}
                </tr>
              </thead>
              <tbody>
                {equipmentItems.map((e, i) => (
                  <tr key={i} style={{ borderTop: '1px solid var(--bdr)' }}>
                    <td className="px-4 py-3 font-semibold" style={{ color: 'var(--txt)' }}>{e.item}</td>
                    <td className="px-4 py-3 text-[11.5px]" style={{ color: 'var(--txtl)' }}>{e.spec}</td>
                    <td className="px-4 py-3 text-center" style={{ color: 'var(--txtl)' }}>{e.qty}</td>
                    <td className="px-4 py-3" style={{ color: 'var(--txtl)' }}>{e.unitValue}</td>
                    <td className="px-4 py-3 font-semibold" style={{ color: 'var(--p)' }}>{e.total}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          {/* Scroll hint */}
          <div className="pointer-events-none absolute inset-y-0 right-0 w-16 rounded-r-2xl sm:hidden"
            style={{ background: 'linear-gradient(to right, transparent, rgba(12,11,9,0.85))' }} />
          <div className="mt-1 flex justify-end sm:hidden">
            <span className="text-[9px] font-bold uppercase tracking-[1.5px]" style={{ color: 'var(--txtll)' }}>deslize →</span>
          </div>
          </div>{/* end relative wrapper */}
        </div>
      )}

      {/* compliance table */}
      <div className="mb-4 text-[10px] font-bold uppercase tracking-[2.5px]" style={{ color: 'var(--txtll)' }}>
        Conformidade com Limites do Edital
      </div>
      <div className="relative">
      <div className="overflow-x-auto overflow-hidden rounded-2xl border" style={{ borderColor: 'var(--bdr)' }}>
        <table className="w-full text-[13px]">
          <thead style={{ background: 'var(--bg-raised)' }}>
            <tr>
              {['Rubrica', 'Limite', 'Proposto', '%', 'Status'].map((h) => (
                <th key={h} className="px-5 py-3.5 text-left text-[9px] font-bold uppercase tracking-[2px]"
                  style={{ color: 'var(--txtll)' }}>{h}</th>
              ))}
            </tr>
          </thead>
          <tbody>
            {complianceTable.map((row, i) => {
              const computedAmt = row.lineIds
                ? row.lineIds.reduce((s, id) => s + lineAmount(lines, id), 0)
                : null
              const proposed = computedAmt !== null ? brl(computedAmt) : (row.proposed ?? 'R$ 0')
              const percent  = computedAmt !== null ? `${pct(computedAmt)}%` : (row.percent ?? '0%')
              return (
                <tr key={i} style={{ borderTop: '1px solid var(--bdr)' }}>
                  <td className="px-5 py-3.5 font-medium" style={{ color: 'var(--txt)' }}>{row.rubric}</td>
                  <td className="px-5 py-3.5" style={{ color: 'var(--txtl)' }}>{row.limit}</td>
                  <td className="px-5 py-3.5 font-semibold" style={{ color: 'var(--txt)' }}>{proposed}</td>
                  <td className="px-5 py-3.5" style={{ color: 'var(--txtl)' }}>{percent}</td>
                  <td className="px-5 py-3.5 font-semibold" style={{ color: 'var(--p)' }}>✓ {row.status}</td>
                </tr>
              )
            })}
          </tbody>
        </table>
      </div>
      {/* Scroll hint */}
      <div className="pointer-events-none absolute inset-y-0 right-0 w-16 rounded-r-2xl sm:hidden"
        style={{ background: 'linear-gradient(to right, transparent, rgba(12,11,9,0.85))' }} />
      <div className="mt-1 flex justify-end sm:hidden">
        <span className="text-[9px] font-bold uppercase tracking-[1.5px]" style={{ color: 'var(--txtll)' }}>deslize →</span>
      </div>
      </div>{/* end relative wrapper */}
    </section>
  )
}
