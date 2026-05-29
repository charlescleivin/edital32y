import SectionHero from '@/components/ui/SectionHero'
import type { S4Data } from '@/types/proposal'
import JustificativasSection from '@/components/JustificativasSection/JustificativasSection'
import CooperaProducaoSection from '@/components/CooperaProducaoSection/CooperaProducaoSection'
import WhatsappDecisaoSection from '@/components/WhatsappDecisaoSection/WhatsappDecisaoSection'

export const componentMeta = { slug: 'metodologia-section', label: 'Metodologia e Plano de Trabalho' }

export type MetodologiaSectionProps = S4Data

const phaseAccent = [
  { border: 'var(--p)',     header: 'rgba(74,148,86,0.12)',  dot: 'var(--p)',    text: 'var(--sage)'  },
  { border: 'var(--gold)',  header: 'rgba(212,150,14,0.12)', dot: 'var(--gold)', text: 'var(--gold)'  },
  { border: 'var(--terra)', header: 'rgba(200,85,48,0.12)',  dot: 'var(--terra)',text: 'var(--terra)' },
]

export default function MetodologiaSection({ number, title, subtitle, headline, heroImage, heroCaption, heroStatement, heroObjectPosition, phases, scopeDistinction, sovereigntyCallouts, pilotRegions, conflictGovernance, subsections }: MetodologiaSectionProps) {
  const { researcher, company } = scopeDistinction
  return (
    <section id="s4" className="relative overflow-hidden px-4 py-10 sm:px-8 sm:py-14 lg:px-16 lg:py-20" style={{ background: 'var(--bg-alt)' }}>
      <span aria-hidden className="pointer-events-none absolute right-8 top-4 select-none hidden sm:block text-[180px] font-bold leading-none opacity-[0.025]"
        style={{ fontFamily: 'var(--font-playfair)', color: 'var(--txt)' }}>4</span>
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

      <div className="mb-10 grid grid-cols-1 sm:grid-cols-3 gap-5">
        {phases.map((phase, i) => {
          const acc = phaseAccent[i] ?? phaseAccent[0]
          return (
            <div key={phase.id} className="overflow-hidden rounded-2xl border"
              style={{ borderColor: acc.border, borderWidth: '1.5px', background: 'var(--bg-card)' }}>
              {/* phase header */}
              <div className="px-6 py-5" style={{ background: acc.header }}>
                <div className="text-[26px] leading-none">{phase.icon}</div>
                <div className="mt-2 text-[9px] font-bold uppercase tracking-[2px]" style={{ color: acc.text }}>{phase.label}</div>
                <div className="mt-1 text-[16px] font-bold" style={{ color: 'var(--txt)' }}>{phase.name}</div>
                <div className="mt-0.5 text-[12px]" style={{ color: 'var(--txtl)' }}>{phase.period}</div>
              </div>
              {/* activities */}
              <div className="p-5">
                {phase.activities.map((act, j) => (
                  <div key={j} className="mb-2.5 flex items-start gap-2.5 text-[13px] leading-[1.6]"
                    style={{ color: 'var(--txtl)' }}>
                    <span className="mt-2 h-1 w-1 shrink-0 rounded-full" style={{ background: acc.dot }} />
                    {act}
                  </div>
                ))}
              </div>
            </div>
          )
        })}
      </div>

      {/* phase timeline / gantt */}
      <div className="relative mb-10">
      <div className="rounded-2xl border p-4 sm:p-6 overflow-x-auto" style={{ borderColor: 'var(--bdr)', background: 'var(--bg-card)' }}>
        <div className="mb-4 text-[9px] font-bold uppercase tracking-[2.5px]" style={{ color: 'var(--txtll)' }}>
          Cronograma — 36 Meses de Execução
        </div>

        {/* Mobile-only vertical card layout */}
        <div className="block sm:hidden">
          <div className="flex flex-col gap-3">
            {phases.map((phase, i) => {
              const acc = phaseAccent[i] ?? phaseAccent[0]
              const barWidths = ['33%', '33%', '34%']
              const barOffsets = ['0%', '33%', '66%']
              return (
                <div key={phase.id} className="rounded-xl border overflow-hidden"
                  style={{ borderColor: acc.border, borderWidth: '1.5px', background: 'var(--bg-card)' }}>
                  <div className="px-4 py-3" style={{ background: acc.header }}>
                    <div className="flex items-center justify-between">
                      <div>
                        <div className="text-[10px] font-bold uppercase tracking-[2px]" style={{ color: acc.text }}>
                          {phase.label}
                        </div>
                        <div className="text-[13px] font-bold mt-0.5" style={{ color: 'var(--txt)' }}>{phase.name}</div>
                        <div className="text-[11px] mt-0.5" style={{ color: 'var(--txtl)' }}>{phase.period}</div>
                      </div>
                      <div className="text-[22px]">{phase.icon}</div>
                    </div>
                  </div>
                  <div className="px-4 py-3">
                    <div className="mb-1.5 text-[9px] font-bold uppercase tracking-[1.5px]" style={{ color: 'var(--txtll)' }}>
                      Posição no cronograma
                    </div>
                    <div className="relative h-4 w-full rounded-full overflow-hidden" style={{ background: 'var(--pale)' }}>
                      <div
                        className="absolute h-full rounded-full"
                        style={{
                          width: barWidths[i],
                          left: barOffsets[i],
                          background: acc.text,
                          opacity: 0.75,
                        }}
                      />
                    </div>
                    <div className="mt-1 flex justify-between text-[9px]" style={{ color: 'var(--txtll)' }}>
                      <span>Mês 1</span>
                      <span>Mês 12</span>
                      <span>Mês 24</span>
                      <span>Mês 36</span>
                    </div>
                  </div>
                </div>
              )
            })}
          </div>
          <p className="mt-4 text-center text-[11px] italic" style={{ color: 'var(--txtll)' }}>
            Versão completa disponível em telas maiores
          </p>
        </div>

        {/* Desktop Gantt — hidden on mobile */}
        <div className="hidden sm:block" style={{ minWidth: '560px' }}>
        {/* month ruler */}
        <div className="mb-2 flex text-[9px]" style={{ color: 'var(--txtll)' }}>
          {['M1','','','M4','','','M7','','','M10','','M12','M13','','','M16','','','M19','','','M22','','M24','M25','','','M28','','','M31','','','M34','','M36'].map((m, i) => (
            <div key={i} className="flex-1 text-center">{m}</div>
          ))}
        </div>
        {/* phase bars */}
        {phases.map((phase, i) => {
          const acc = phaseAccent[i] ?? phaseAccent[0]
          return (
            <div key={phase.id} className="mb-2 flex items-center gap-3">
              <div className="w-28 shrink-0 text-right text-[11px] font-semibold" style={{ color: acc.text }}>
                {phase.label}
              </div>
              <div className="flex flex-1 overflow-hidden rounded-full" style={{ height: 22 }}>
                <div
                  className="flex items-center justify-end pr-3 text-[10px] font-bold text-white rounded-full"
                  style={{ width: `${(i + 1) * 33.33}%`, minWidth: '33%', maxWidth: `${(i + 1) * 33.33}%`, background: acc.text, opacity: 0.85, marginLeft: `${i * 33.33}%` }}>
                  {phase.period}
                </div>
              </div>
            </div>
          )
        })}
        {/* milestones */}
        <div className="mt-4 grid grid-cols-2 sm:grid-cols-3 gap-3 border-t pt-4" style={{ borderColor: 'var(--bdr)' }}>
          {[
            { month: 'Mês 6',  color: 'var(--p)',    label: 'Corpus v0.1 — 10k pares validados' },
            { month: 'Mês 12', color: 'var(--p)',    label: 'AgroAssistente v1.0 + AgroEval publicado' },
            { month: 'Mês 15', color: 'var(--gold)', label: 'Protocolo CONEP aprovado' },
            { month: 'Mês 18', color: 'var(--gold)', label: 'Piloto lançado + AgroLinguaBR DOI' },
            { month: 'Mês 30', color: 'var(--terra)', label: 'MoU EMATER/EMBRAPA assinado' },
            { month: 'Mês 36', color: 'var(--terra)', label: 'Transferência tecnológica — código Apache 2.0, corpus CC BY-NC-SA' },
          ].map((ms, i) => (
            <div key={i} className="flex items-start gap-2 text-[12px]">
              <span className="mt-0.5 shrink-0 font-bold text-[10px]" style={{ color: ms.color }}>◆ {ms.month}</span>
              <span style={{ color: 'var(--txtl)' }}>{ms.label}</span>
            </div>
          ))}
        </div>
        </div>{/* end hidden sm:block desktop gantt */}
      </div>
      {/* Scroll hint */}
      <div className="pointer-events-none absolute inset-y-0 right-0 w-16 rounded-r-2xl sm:hidden"
        style={{ background: 'linear-gradient(to right, transparent, rgba(12,11,9,0.85))' }} />
      <div className="mt-1 flex justify-end sm:hidden">
        <span className="text-[9px] font-bold uppercase tracking-[1.5px]" style={{ color: 'var(--txtll)' }}>deslize →</span>
      </div>
      </div>{/* end relative wrapper */}

      {/* deliverables per phase */}
      {phases.some(p => p.deliverables?.length) && (
        <div className="mb-10 overflow-hidden rounded-2xl border" style={{ borderColor: 'var(--bdr)', background: 'var(--bg-card)' }}>
          <div className="border-b px-6 py-4" style={{ borderColor: 'var(--bdr)', background: 'rgba(237,229,211,0.03)' }}>
            <div className="text-[9px] font-bold uppercase tracking-[2.5px]" style={{ color: 'var(--txtll)' }}>
              Marcos de Entrega — Artefatos Verificáveis por Fase (FINEP)
            </div>
            <p className="mt-1 text-[12px]" style={{ color: 'var(--txtll)' }}>
              Cada parcela exige prestação de contas com evidência técnica verificável independentemente. Estes são os artefatos que documentam a entrega da THATPIX em cada marco anual.
            </p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-3 divide-y sm:divide-y-0 sm:divide-x" style={{ borderColor: 'var(--bdr)' }}>
            {phases.map((phase, i) => {
              const acc = phaseAccent[i] ?? phaseAccent[0]
              return (
                <div key={phase.id} className="p-5">
                  <div className="mb-3 flex items-center gap-2">
                    <span className="text-[15px]">{phase.icon}</span>
                    <div>
                      <div className="text-[10px] font-bold uppercase tracking-[1.5px]" style={{ color: acc.text }}>{phase.label}</div>
                      <div className="text-[11px] font-semibold" style={{ color: 'var(--txt)' }}>{phase.period}</div>
                    </div>
                  </div>
                  <div className="flex flex-col gap-2">
                    {phase.deliverables?.map((d, j) => {
                      const [title, ...rest] = d.split(' — ')
                      return (
                        <div key={j} className="flex items-start gap-2">
                          <span className="mt-[3px] shrink-0 text-[10px]" style={{ color: acc.text }}>✓</span>
                          <p className="text-[11.5px] leading-[1.65]" style={{ color: 'var(--txtl)' }}>
                            <span className="font-semibold" style={{ color: 'var(--txt)' }}>{title}</span>
                            {rest.length > 0 && <span> — {rest.join(' — ')}</span>}
                          </p>
                        </div>
                      )
                    })}
                  </div>
                </div>
              )
            })}
          </div>
        </div>
      )}

      {/* scope distinction */}
      <div className="mb-3 text-[10px] font-bold uppercase tracking-[2.5px]" style={{ color: 'var(--txtll)' }}>
        Distinção de Escopos — Regra Fundamental
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
        <div className="rounded-2xl border p-6"
          style={{ borderColor: 'rgba(111,168,118,0.2)', background: 'rgba(111,168,118,0.05)' }}>
          <div className="mb-1 text-[15px] font-bold" style={{ color: 'var(--sage)' }}>{researcher.title}</div>
          <div className="mb-4 text-[13px] italic" style={{ color: 'var(--txtl)' }}>{researcher.subtitle}</div>
          <ul className="flex flex-col gap-2 text-[13.5px] leading-[1.7]" style={{ color: 'var(--txtl)' }}>
            {researcher.responsibilities.map((r, i) => (
              <li key={i} className="flex items-start gap-2">
                <span style={{ color: 'var(--sage)' }}>•</span>{r}
              </li>
            ))}
          </ul>
          {researcher.badge && (
            <div className="mt-4 text-[11px] font-bold" style={{ color: 'var(--sage)' }}>{researcher.badge}</div>
          )}
        </div>
        <div className="rounded-2xl border p-6"
          style={{ borderColor: 'rgba(212,150,14,0.2)', background: 'rgba(212,150,14,0.05)' }}>
          <div className="mb-1 text-[15px] font-bold" style={{ color: 'var(--gold)' }}>{company.title}</div>
          <div className="mb-4 text-[13px] italic" style={{ color: 'var(--txtl)' }}>{company.subtitle}</div>
          <ul className="flex flex-col gap-2 text-[13.5px] leading-[1.7]" style={{ color: 'var(--txtl)' }}>
            {company.responsibilities.map((r, i) => (
              <li key={i} className="flex items-start gap-2">
                <span style={{ color: 'var(--gold)' }}>•</span>{r}
              </li>
            ))}
          </ul>
          {company.noteItems && (
            <div className="mt-4 rounded-xl border p-4"
              style={{ borderColor: 'rgba(200,85,48,0.2)', background: 'rgba(200,85,48,0.08)' }}>
              <div className="mb-2 text-[10px] font-bold uppercase tracking-[1.5px]" style={{ color: 'var(--terra)' }}>
                {company.note}
              </div>
              {company.noteItems.map((n, i) => (
                <div key={i} className="text-[12px]" style={{ color: 'var(--terra)' }}>✕ {n}</div>
              ))}
            </div>
          )}
        </div>
      </div>

      {/* pilot regions */}
      {pilotRegions && pilotRegions.length > 0 && (
        <div className="mb-8">
          <div className="mb-4 text-[10px] font-bold uppercase tracking-[2.5px]" style={{ color: 'var(--txtll)' }}>
            Regiões-Piloto — Municípios Selecionados
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {pilotRegions.map((r) => (
              <div key={r.id} className="rounded-2xl border p-5"
                style={{ borderColor: 'var(--bdr)', background: 'var(--bg-card)' }}>
                <div className="mb-1 text-[14px] font-bold" style={{ color: 'var(--txt)' }}>{r.municipality}</div>
                <div className="mb-3 text-[12px]" style={{ color: 'var(--txtl)' }}>{r.profile}</div>
                <div className="rounded-xl border-l-[2px] pl-3 text-[12px] leading-[1.65]"
                  style={{ borderColor: 'var(--p)', color: 'var(--txtl)' }}>
                  {r.rationale}
                </div>
              </div>
            ))}
          </div>
        </div>
      )}

      {/* sovereignty callouts */}
      {sovereigntyCallouts && sovereigntyCallouts.length > 0 && (
        <div className="mt-8">
          <div className="mb-4 text-[10px] font-bold uppercase tracking-[2.5px]" style={{ color: 'var(--txtll)' }}>
            Soberania Tecnológica — Escolhas Deliberadas
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {sovereigntyCallouts.map((sc) => (
              <div key={sc.id} className="rounded-2xl border p-5"
                style={{ borderColor: 'rgba(212,150,14,0.2)', background: 'rgba(212,150,14,0.04)' }}>
                <div className="mb-2 text-[9px] font-bold uppercase tracking-[2px]" style={{ color: 'var(--gold)' }}>
                  {sc.badge}
                </div>
                <div className="mb-3 text-[14px] font-bold" style={{ color: 'var(--txt)' }}>{sc.title}</div>
                <p className="text-[13px] leading-[1.75]" style={{ color: 'var(--txtl)' }}>{sc.content}</p>
              </div>
            ))}
          </div>
        </div>
      )}

      {/* conflict governance */}
      {conflictGovernance && (
        <div className="mt-5 rounded-2xl border p-6"
          style={{ borderColor: 'rgba(212,150,14,0.2)', background: 'rgba(212,150,14,0.04)' }}>
          <div className="mb-2 text-[9px] font-bold uppercase tracking-[2.5px]" style={{ color: 'var(--gold)' }}>
            {conflictGovernance.title}
          </div>
          <p className="text-[13px] leading-[1.8]" style={{ color: 'var(--txtl)' }}>{conflictGovernance.body}</p>
        </div>
      )}

      {company.disclosure && (
        <div className="mt-4 rounded-xl border-l-[3px] px-5 py-4"
          style={{ borderColor: 'rgba(237,229,211,0.15)', background: 'rgba(237,229,211,0.03)' }}>
          <span className="mr-2 text-[9px] font-bold uppercase tracking-[2px]" style={{ color: 'var(--txtll)' }}>
            Declaração de Relacionamento
          </span>
          <span className="text-[12.5px] leading-[1.75]" style={{ color: 'var(--txtl)' }}>
            {company.disclosure}
          </span>
        </div>
      )}

      {/* ── Methodology subsections ── */}
      {subsections && (subsections.justificativas || subsections.cooperaProducao || subsections.whatsappDecisao) && (
        <div className="mt-16 -mx-4 sm:-mx-8 lg:-mx-16">
          <div className="mx-4 sm:mx-8 lg:mx-16 mb-10 flex items-center gap-5">
            <div className="h-px flex-1" style={{ background: 'linear-gradient(to right, var(--bdr-strong), transparent)' }} />
            <span className="text-[9px] font-bold uppercase tracking-[3px]" style={{ color: 'var(--txtll)' }}>
              Aprofundamentos Metodológicos
            </span>
            <div className="h-px flex-1" style={{ background: 'linear-gradient(to left, var(--bdr-strong), transparent)' }} />
          </div>
          {subsections.justificativas && (
            <div id="s4-justificativas" className="border-t scroll-mt-4" style={{ borderColor: 'var(--bdr)' }}>
              <JustificativasSection {...subsections.justificativas} />
            </div>
          )}
          {subsections.cooperaProducao && (
            <div id="s4-coopera" className="border-t scroll-mt-4" style={{ borderColor: 'var(--bdr)' }}>
              <CooperaProducaoSection {...subsections.cooperaProducao} />
            </div>
          )}
          {subsections.whatsappDecisao && (
            <div id="s4-whatsapp" className="border-t scroll-mt-4" style={{ borderColor: 'var(--bdr)' }}>
              <WhatsappDecisaoSection {...subsections.whatsappDecisao} />
            </div>
          )}
        </div>
      )}
    </section>
  )
}
