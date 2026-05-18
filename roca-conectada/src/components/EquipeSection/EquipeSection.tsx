import SectionHero from '@/components/ui/SectionHero'
import type { S5Data, MarketContext, MarketContextRecommendation, AnnexTable, S5AnnexSection } from '@/types/proposal'

export const componentMeta = { slug: 'equipe-section', label: 'Equipe do Projeto' }

export type EquipeSectionProps = S5Data

function MarketContextBlock({ ctx }: { ctx: MarketContext }) {
  return (
    <div className="mb-14 rounded-2xl border p-10" style={{ borderColor: 'var(--bdr-strong)', background: 'var(--bg-raised)' }}>
      {ctx.badge && (
        <div className="mb-7 flex items-center gap-4">
          <div className="h-px flex-1" style={{ background: 'linear-gradient(to right, rgba(200,85,48,0.5), transparent)' }} />
          <span className="rounded-full border px-4 py-1.5 text-[9px] font-bold uppercase tracking-[3px]"
            style={{ borderColor: 'rgba(200,85,48,0.3)', color: 'var(--terra)', background: 'rgba(200,85,48,0.06)' }}>
            {ctx.badge}
          </span>
          <div className="h-px flex-1" style={{ background: 'linear-gradient(to left, rgba(200,85,48,0.5), transparent)' }} />
        </div>
      )}

      <h3 className="mb-8 text-[24px] font-bold leading-snug"
        style={{ fontFamily: 'var(--font-playfair)', color: 'var(--txt)' }}>
        {ctx.title}
      </h3>

      <div className="mb-9 space-y-5">
        {ctx.paragraphs.map((p, i) => (
          <p key={i} className="text-[14px] leading-[1.85]" style={{ color: 'var(--txtl)' }}>{p}</p>
        ))}
      </div>

      {ctx.callouts && (
        <div className="grid grid-cols-3 gap-4">
          {ctx.callouts.map((c, i) => (
            <div key={i} className="rounded-xl border p-5"
              style={{ borderColor: 'rgba(200,85,48,0.18)', background: 'rgba(200,85,48,0.05)' }}>
              <div className="mb-1.5 text-[28px] font-bold leading-none"
                style={{ fontFamily: 'var(--font-playfair)', color: 'var(--terra)' }}>{c.value}</div>
              <div className="mb-1 text-[12px] leading-snug font-medium" style={{ color: 'var(--txt)' }}>{c.label}</div>
              {c.note && <div className="text-[10px] leading-snug" style={{ color: 'var(--txtll)' }}>{c.note}</div>}
            </div>
          ))}
        </div>
      )}

      {ctx.recommendations && (
        <div className="mt-8">
          <div className="mb-4 text-[9px] font-bold uppercase tracking-[3px]"
            style={{ color: 'var(--txtll)' }}>
            Recomendações de Governança
          </div>
          <div className="grid grid-cols-3 gap-3">
            {ctx.recommendations.map((r: MarketContextRecommendation, i: number) => (
              <div key={i} className="rounded-xl border p-4"
                style={{ borderColor: 'var(--bdr)', background: 'var(--bg-card)' }}>
                <span className="mb-2 block text-[20px]">{r.icon}</span>
                <div className="mb-1.5 text-[12px] font-bold leading-snug"
                  style={{ color: 'var(--txt)' }}>{r.title}</div>
                <div className="text-[11px] leading-[1.7]"
                  style={{ color: 'var(--txtll)' }}>{r.body}</div>
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
  )
}

function AnnexTableBlock({ table }: { table: AnnexTable }) {
  const variantColor = (v?: string) =>
    v === 'critical' ? '#e05a5a' : v === 'warning' ? 'var(--gold)' : v === 'success' ? 'var(--sage)' : 'var(--txtl)'

  return (
    <div>
      <div className="mb-4">
        <span className="text-[9px] font-bold uppercase tracking-[2.5px]" style={{ color: 'var(--terra)' }}>
          {table.number}
        </span>
        <h4 className="mt-1 text-[17px] font-bold leading-snug"
          style={{ fontFamily: 'var(--font-playfair)', color: 'var(--txt)' }}>
          {table.title}
        </h4>
      </div>

      <div className="overflow-hidden rounded-xl border" style={{ borderColor: 'var(--bdr)' }}>
        <table className="w-full border-collapse text-left">
          <thead>
            <tr style={{ background: 'var(--bg-raised)', borderBottom: '1px solid var(--bdr-strong)' }}>
              {table.headers.map((h, i) => (
                <th key={i} className="px-4 py-3 text-[9px] font-bold uppercase tracking-[2px]"
                  style={{ color: 'var(--terra)' }}>{h}</th>
              ))}
            </tr>
          </thead>
          <tbody>
            {table.rows.map((row, ri) => (
              <tr key={ri} style={{
                background: row.highlight
                  ? 'rgba(111,168,118,0.07)'
                  : ri % 2 === 0 ? 'var(--bg-card)' : 'transparent',
                borderBottom: ri < table.rows.length - 1 ? '1px solid var(--bdr)' : undefined,
              }}>
                {row.cells.map((cell, ci) => {
                  const isFirst = ci === 0
                  const isLast = ci === row.cells.length - 1
                  const color = isFirst && row.highlight
                    ? 'var(--sage)'
                    : isLast && row.variant
                    ? variantColor(row.variant)
                    : 'var(--txtl)'
                  return (
                    <td key={ci} className="px-4 py-3 text-[12px] leading-[1.6]"
                      style={{ color, fontWeight: (isFirst && row.highlight) || (isLast && row.variant) ? 600 : 400 }}>
                      {cell}
                    </td>
                  )
                })}
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {(table.note || table.source) && (
        <div className="mt-2.5 space-y-0.5">
          {table.note && <p className="text-[10px] leading-relaxed" style={{ color: 'var(--txtll)' }}>{table.note}</p>}
          {table.source && <p className="text-[10px]" style={{ color: 'var(--txtll)' }}>Fonte: {table.source}</p>}
        </div>
      )}
    </div>
  )
}

function AnnexSection({ annex }: { annex: S5AnnexSection }) {
  return (
    <div className="mt-16">
      <div className="mb-10 flex items-center gap-5">
        <div className="h-px flex-1" style={{ background: 'linear-gradient(to right, var(--bdr-strong), transparent)' }} />
        <span className="text-[9px] font-bold uppercase tracking-[3px]" style={{ color: 'var(--txtll)' }}>
          {annex.heading}
        </span>
        <div className="h-px flex-1" style={{ background: 'linear-gradient(to left, var(--bdr-strong), transparent)' }} />
      </div>
      <div className="space-y-12">
        {annex.tables.map((table, i) => (
          <AnnexTableBlock key={i} table={table} />
        ))}
      </div>
    </div>
  )
}

export default function EquipeSection({ number, title, subtitle, headline, heroImage, heroCaption, heroStatement, heroObjectPosition, members, marketContext, annex }: EquipeSectionProps) {
  return (
    <section id="s5" className="relative overflow-hidden px-16 py-20" style={{ background: 'var(--bg)' }}>
      <span aria-hidden className="pointer-events-none absolute right-8 top-4 select-none text-[180px] font-bold leading-none opacity-[0.025]"
        style={{ fontFamily: 'var(--font-playfair)', color: 'var(--txt)' }}>5</span>
      {heroImage && <SectionHero image={heroImage} caption={heroCaption} statement={heroStatement} objectPosition={heroObjectPosition} />}

      <div className="relative mb-14">
        <span className="mb-5 inline-flex items-center gap-2.5 rounded-full border px-4 py-1.5 text-[9px] font-bold uppercase tracking-[3px]"
          style={{ borderColor: 'var(--bdr)', background: 'rgba(237,229,211,0.04)', color: 'var(--txtll)' }}>
          👥 {number}
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

      {marketContext && <MarketContextBlock ctx={marketContext} />}

      <div className="grid grid-cols-3 gap-4">
        {members.map((m) => {
          const accentBorder = m.highlight
            ? 'rgba(111,168,118,0.2)'
            : m.isPJ
            ? 'rgba(212,150,14,0.2)'
            : 'var(--bdr)'
          const accentBg = m.highlight
            ? 'rgba(111,168,118,0.05)'
            : m.isPJ
            ? 'rgba(212,150,14,0.05)'
            : 'var(--bg-card)'
          const avatarBg = m.highlight
            ? 'rgba(111,168,118,0.12)'
            : m.isPJ
            ? 'rgba(212,150,14,0.12)'
            : 'var(--pale)'

          return (
            <div key={m.id} className="rounded-2xl border p-6"
              style={{ borderColor: accentBorder, background: accentBg }}>
              <div className="mb-4 flex h-11 w-11 items-center justify-center rounded-xl text-[24px]"
                style={{ background: avatarBg }}>{m.avatar}</div>

              {/* name — 15px Inter 700 */}
              <div className="mb-0.5 text-[15px] font-bold" style={{ color: 'var(--txt)' }}>{m.name}</div>
              {/* role — 13px Inter 400 */}
              <div className="mb-3 text-[13px] leading-snug" style={{ color: 'var(--txtl)' }}>{m.role}</div>

              {/* tags */}
              <div className="mb-3 flex flex-wrap gap-1.5">
                {m.tags.map((t, i) => (
                  <span key={i} className="rounded-full px-2.5 py-0.5 text-[10px] font-medium"
                    style={{ background: 'var(--pale)', color: 'var(--p)' }}>{t}</span>
                ))}
              </div>

              {(m.badge || m.budgetRef) && (
                <span className="mb-2 inline-block rounded-full px-3 py-0.5 text-[11px] font-bold"
                  style={{
                    background: m.badgeVariant === 'amber' || m.budgetRef ? 'var(--goldp)' : 'var(--sagep)',
                    color: m.badgeVariant === 'amber' || m.budgetRef ? 'var(--gold)' : 'var(--sage)',
                  }}>
                  {m.budgetRef
                    ? `Contrato PJ · ${new Intl.NumberFormat('pt-BR', { style: 'currency', currency: 'BRL', maximumFractionDigits: 0 }).format(m.budgetRef.team.reduce((s,t) => s + t.rate, 0) * (1 + m.budgetRef.overheadPercent / 100) * m.budgetRef.months)}`
                    : m.badge}
                </span>
              )}

              {/* metadata — computed from budgetRef if PJ, else static dedication */}
              {m.budgetRef ? (
                <div className="text-[11px] font-medium leading-[1.7]" style={{ color: 'var(--txtll)' }}>
                  <div style={{ color: 'var(--gold)' }}>
                    {new Intl.NumberFormat('pt-BR', { style: 'currency', currency: 'BRL', maximumFractionDigits: 0 })
                      .format(Math.round(m.budgetRef.team.reduce((s,t) => s + t.rate, 0) * (1 + m.budgetRef.overheadPercent / 100)))}/mês · {m.budgetRef.months} meses
                  </div>
                  {m.budgetRef.team.map((t, i) => (
                    <div key={i}>{t.role}: {new Intl.NumberFormat('pt-BR', { style: 'currency', currency: 'BRL', maximumFractionDigits: 0 }).format(t.rate)}/mês</div>
                  ))}
                </div>
              ) : (
                <div className="text-[11px] font-medium" style={{ color: 'var(--txtll)' }}>{m.dedication}</div>
              )}
            </div>
          )
        })}
      </div>

      {annex && <AnnexSection annex={annex} />}
    </section>
  )
}
