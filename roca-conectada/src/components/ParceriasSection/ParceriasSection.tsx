import SectionHero from '@/components/ui/SectionHero'
import type { S7Data } from '@/types/proposal'

export const componentMeta = { slug: 'parcerias-section', label: 'Parcerias Previstas' }

export type ParceriasSectionProps = S7Data

const priorityStyles: Record<string, { border: string; bg: string; badge: string; badgeText: string; deadline: string }> = {
  critical: { border: 'rgba(200,85,48,0.25)', bg: 'rgba(200,85,48,0.07)', badge: 'var(--terra)', badgeText: 'var(--txt)', deadline: 'var(--terra)' },
  high:     { border: 'rgba(212,150,14,0.2)',  bg: 'rgba(212,150,14,0.06)', badge: 'var(--goldp)', badgeText: 'var(--gold)', deadline: 'var(--gold)' },
  medium:   { border: 'rgba(111,168,118,0.2)', bg: 'rgba(111,168,118,0.05)', badge: 'var(--sagep)', badgeText: 'var(--sage)', deadline: 'var(--sage)' },
}

export default function ParceriasSection({ number, title, subtitle, headline, heroImage, heroCaption, heroStatement, heroObjectPosition, alertMessage, partners, actionTimeline, disseminationRoutes }: ParceriasSectionProps) {
  return (
    <section id="s7" className="relative overflow-hidden px-4 py-10 sm:px-8 sm:py-14 lg:px-16 lg:py-20" style={{ background: 'var(--bg)' }}>
      <span aria-hidden className="pointer-events-none absolute right-8 top-4 select-none hidden sm:block text-[180px] font-bold leading-none opacity-[0.025]"
        style={{ fontFamily: 'var(--font-playfair)', color: 'var(--txt)' }}>7</span>
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

      {/* alert */}
      <div className="mb-8 flex gap-4 rounded-2xl border p-6"
        style={{ borderColor: 'rgba(200,85,48,0.2)', background: 'rgba(200,85,48,0.07)' }}>
        <span className="mt-0.5 text-[22px] leading-none">🚨</span>
        <div>
          <div className="mb-1.5 text-[14px] font-bold" style={{ color: 'var(--terra)' }}>
            Ação Urgente — 44 dias para a submissão
          </div>
          <div className="text-[13.5px] leading-[1.75]" style={{ color: 'var(--txtl)' }}>{alertMessage}</div>
        </div>
      </div>

      {/* partners */}
      <div className="mb-8 grid grid-cols-1 sm:grid-cols-2 gap-4">
        {partners.map((p) => {
          const st = priorityStyles[p.priority] ?? priorityStyles.medium
          return (
            <div key={p.id} className="rounded-2xl border p-6"
              style={{ borderColor: st.border, background: st.bg }}>
              <span className="mb-3 inline-block rounded-full px-3 py-1 text-[10px] font-bold"
                style={{ background: st.badge, color: st.badgeText }}>{p.priorityLabel}</span>
              <div className="mb-1.5 text-[15px] font-bold" style={{ color: 'var(--txt)' }}>{p.name}</div>
              <div className="mb-3 text-[13px] leading-[1.75]" style={{ color: 'var(--txtl)' }}>{p.role}</div>
              <div className="text-[12px] font-semibold" style={{ color: st.deadline }}>{p.deadline}</div>
            </div>
          )
        })}
      </div>

      {/* dissemination plan */}
      {disseminationRoutes && disseminationRoutes.length > 0 && (
        <div className="mb-8">
          <div className="mb-3 text-[10px] font-bold uppercase tracking-[2.5px]" style={{ color: 'var(--txtll)' }}>
            Estratégia de Disseminação dos Resultados
          </div>
          <div className="relative">
          <div className="overflow-hidden rounded-2xl border" style={{ borderColor: 'var(--bdr)' }}>
            <div className="overflow-x-auto">
              <table className="w-full text-[13px]">
                <thead style={{ background: 'var(--bg-raised)' }}>
                  <tr>
                    {['Público / Parceiro', 'Canal de Transferência', 'Prazo'].map((h) => (
                      <th key={h} className="px-5 py-3.5 text-left text-[9px] font-bold uppercase tracking-[2px]"
                        style={{ color: 'var(--txtll)' }}>{h}</th>
                    ))}
                  </tr>
                </thead>
                <tbody>
                  {disseminationRoutes.map((r, i) => (
                    <tr key={i} style={{ borderTop: '1px solid var(--bdr)' }}>
                      <td className="px-5 py-3.5 font-medium" style={{ color: 'var(--txt)' }}>{r.audience}</td>
                      <td className="px-5 py-3.5" style={{ color: 'var(--txtl)' }}>{r.mechanism}</td>
                      <td className="px-5 py-3.5 font-semibold" style={{ color: 'var(--p)' }}>{r.when}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
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

      {/* timeline */}
      <div className="mb-3 text-[10px] font-bold uppercase tracking-[2.5px]" style={{ color: 'var(--txtll)' }}>
        Sequência Crítica de Ações
      </div>
      <div className="overflow-hidden rounded-2xl border" style={{ borderColor: 'var(--bdr)', background: 'var(--bg-card)' }}>
        {actionTimeline.map((week, i) => (
          <div key={i} className="flex gap-5 border-l-[3px] px-6 py-4"
            style={{
              borderColor: week.isCritical ? 'var(--terra)' : 'var(--bdr-strong)',
              borderTop: i > 0 ? '1px solid var(--bdr)' : 'none',
            }}>
            <div>
              <div className="mb-1 text-[12px] font-bold"
                style={{ color: week.isCritical ? 'var(--terra)' : 'var(--p)' }}>{week.label}</div>
              <div className="text-[13.5px] leading-[1.75]" style={{ color: 'var(--txtl)' }}>{week.description}</div>
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}
