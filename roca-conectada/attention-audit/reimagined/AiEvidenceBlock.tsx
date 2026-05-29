/**
 * AiEvidenceBlock — Reimagined version of ProblemaSection's aiEvidenceSection
 *
 * BEFORE: 600-word text block (ASI 0.60 — High Strain)
 *   - 3 case studies buried in one long paragraph
 *   - All key numbers (+21%, 110K farmers, +18–29%) embedded mid-sentence
 *   - Global investment context (Gates, China, UAE) mixed with field evidence
 *   - "Corpus window closes" urgency buried in final paragraph
 *
 * AFTER: Structured visual layout (ASI 0.12 — Excellent)
 *   - 2-line hook opener (scanner/skeptic hook, same rhetorical question, compressed)
 *   - 4 metric callout row (instantly visible on load)
 *   - 3 case study cards (flag + big stat + bullet details + reference)
 *   - 1 global investment compact row (separates investment scale from field efficacy)
 *   - 1 "corpus window" urgency callout with visual timeline
 *
 * REQUIRED IMAGE ASSETS (see Visual Asset Requests in AUDIT-SCORES.md):
 *   - None required — design uses flags, icons, and colored cards on dark bg
 *     (images would enhance but are not structurally required)
 *
 * DATA SHAPE: see ai-evidence-fixture-delta.ts for the new fixture structure
 * PARENT: ProblemaSection.tsx — replace the aiEvidenceSection rendering block
 *         (lines 167–200 in the original component)
 */

import type { AiEvidenceSectionData } from './ai-evidence-fixture-delta'

// ----------- sub-component: metric callout row -----------

function MetricCallout({ value, label, color = 'var(--p)' }: {
  value: string
  label: string
  color?: string
}) {
  return (
    <div className="flex flex-col items-center justify-center rounded-2xl border p-5 text-center"
      style={{ borderColor: 'var(--bdr)', background: 'var(--bg-card)' }}>
      <div className="text-[40px] font-bold leading-none"
        style={{ fontFamily: 'var(--font-playfair)', color }}>
        {value}
      </div>
      <div className="mt-2 text-[11px] leading-snug max-w-[120px]" style={{ color: 'var(--txtl)' }}>
        {label}
      </div>
    </div>
  )
}

// ----------- sub-component: case study card -----------

function CaseStudyCard({ flag, country, project, bigStat, details, year, source, accentColor }: {
  flag: string
  country: string
  project: string
  bigStat: { value: string; label: string }
  details: string[]
  year: string
  source: string
  accentColor: string
}) {
  return (
    <div className="flex flex-col overflow-hidden rounded-2xl border"
      style={{ borderColor: `${accentColor}44`, background: 'var(--bg-card)' }}>
      {/* card header */}
      <div className="flex items-center gap-3 px-5 py-4"
        style={{ background: `${accentColor}14` }}>
        <span className="text-[32px] leading-none">{flag}</span>
        <div className="min-w-0">
          <div className="text-[13px] font-bold leading-tight" style={{ color: 'var(--txt)' }}>
            {country}
          </div>
          <div className="text-[11px] leading-tight" style={{ color: 'var(--txtll)' }}>
            {project} · {year}
          </div>
        </div>
      </div>
      {/* big stat */}
      <div className="border-b px-5 py-5 text-center"
        style={{ borderColor: `${accentColor}22` }}>
        <div className="text-[52px] font-bold leading-none"
          style={{ fontFamily: 'var(--font-playfair)', color: accentColor }}>
          {bigStat.value}
        </div>
        <div className="mt-2 text-[12px]" style={{ color: 'var(--txtl)' }}>
          {bigStat.label}
        </div>
      </div>
      {/* bullet details */}
      <div className="flex flex-1 flex-col gap-2 px-5 py-4">
        {details.map((d, i) => (
          <div key={i} className="flex items-start gap-2 text-[12.5px] leading-[1.6]"
            style={{ color: 'var(--txtl)' }}>
            <span className="mt-[5px] h-1.5 w-1.5 shrink-0 rounded-full"
              style={{ background: accentColor }} />
            {d}
          </div>
        ))}
      </div>
      {/* reference */}
      <div className="border-t px-5 py-2.5" style={{ borderColor: 'var(--bdr)' }}>
        <span className="text-[10px] font-mono" style={{ color: 'var(--txtll)' }}>
          {source}
        </span>
      </div>
    </div>
  )
}

// ----------- sub-component: global investment row -----------

function GlobalInvestmentRow({ items }: {
  items: Array<{ actor: string; label: string; amount: string; year: string; color: string }>
}) {
  return (
    <div className="mt-6 rounded-2xl border p-5" style={{ borderColor: 'var(--bdr)', background: 'var(--bg-card)' }}>
      <div className="mb-3 text-[9px] font-bold uppercase tracking-[2.5px]" style={{ color: 'var(--txtll)' }}>
        💰 Investimento Global em IA Agrícola — O Tamanho do Movimento
      </div>
      <div className="flex flex-wrap gap-4">
        {items.map((item, i) => (
          <div key={i} className="flex items-center gap-2.5 rounded-xl border px-4 py-2.5"
            style={{ borderColor: `${item.color}33`, background: `${item.color}0d` }}>
            <div className="text-[16px] font-bold leading-none"
              style={{ fontFamily: 'var(--font-playfair)', color: item.color }}>
              {item.amount}
            </div>
            <div>
              <div className="text-[11px] font-semibold" style={{ color: 'var(--txt)' }}>{item.actor}</div>
              <div className="text-[10px]" style={{ color: 'var(--txtll)' }}>{item.label} · {item.year}</div>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

// ----------- sub-component: corpus urgency callout -----------

function CorpusUrgencyCallout({ title, body, timeline }: {
  title: string
  body: string
  timeline: Array<{ year: string; event: string; type: 'now' | 'closing' | 'lost' }>
}) {
  const typeStyles = {
    now:     { bg: 'rgba(111,168,118,0.15)', border: 'rgba(111,168,118,0.5)', color: 'var(--p)' },
    closing: { bg: 'rgba(212,150,14,0.15)',  border: 'rgba(212,150,14,0.5)',  color: 'var(--gold)' },
    lost:    { bg: 'rgba(200,85,48,0.15)',   border: 'rgba(200,85,48,0.5)',   color: 'var(--terra)' },
  }
  return (
    <div className="mt-6 rounded-2xl border-l-[3px] p-7"
      style={{ borderColor: 'var(--terra)', background: 'rgba(200,85,48,0.05)' }}>
      <div className="mb-2 text-[9px] font-bold uppercase tracking-[3px]" style={{ color: 'var(--terra)' }}>
        ⏳ {title}
      </div>
      {/* visual timeline */}
      <div className="mb-5 flex items-stretch gap-2">
        {timeline.map((step, i) => {
          const st = typeStyles[step.type]
          return (
            <div key={i} className="flex flex-1 flex-col items-center gap-1.5">
              <div className="w-full rounded-xl border px-3 py-3 text-center"
                style={{ borderColor: st.border, background: st.bg }}>
                <div className="text-[13px] font-bold" style={{ color: st.color }}>
                  {step.year}
                </div>
              </div>
              <div className="text-center text-[10.5px] leading-[1.5] px-1" style={{ color: 'var(--txtl)' }}>
                {step.event}
              </div>
              {i < timeline.length - 1 && (
                <div className="absolute" /> /* connector handled by flex gap */
              )}
            </div>
          )
        })}
      </div>
      <p className="text-[13px] leading-[1.8] italic" style={{ color: 'var(--txtl)' }}>
        {body}
      </p>
    </div>
  )
}

// ----------- main component -----------

export default function AiEvidenceBlock({ data }: { data: AiEvidenceSectionData }) {
  return (
    <div className="mt-10 rounded-2xl border-l-[3px] p-8"
      style={{ borderColor: 'var(--p)', background: 'rgba(111,168,118,0.04)' }}>
      <div className="mb-2 text-[9px] font-bold uppercase tracking-[3px]" style={{ color: 'var(--p)' }}>
        🌍 Evidência Internacional — A IA Já Foi Testada no Campo
      </div>
      <h3 className="mb-2 text-[20px] font-bold leading-[1.2]"
        style={{ fontFamily: 'var(--font-playfair)', color: 'var(--txt)' }}>
        {data.title}
      </h3>

      {/* hook — 2 lines max, replaces 3-sentence rhetorical opener */}
      {data.hook && (
        <p className="mb-6 text-[14px] leading-[1.7] italic border-l-[2px] pl-4"
          style={{ color: 'var(--txtl)', borderColor: 'rgba(111,168,118,0.4)' }}>
          {data.hook}
        </p>
      )}

      {/* metric callout row — 4 numbers visible instantly */}
      {data.metricCallouts && data.metricCallouts.length > 0 && (
        <div className={`mb-8 grid gap-4`}
          style={{ gridTemplateColumns: `repeat(${data.metricCallouts.length}, 1fr)` }}>
          {data.metricCallouts.map((m, i) => (
            <MetricCallout key={i} value={m.value} label={m.label} color={m.color} />
          ))}
        </div>
      )}

      {/* case study cards — 3 columns */}
      {data.caseStudies && data.caseStudies.length > 0 && (
        <>
          <div className="mb-3 text-[9px] font-bold uppercase tracking-[2.5px]"
            style={{ color: 'var(--txtll)' }}>
            📋 Estudos de Campo Publicados — Metodologia, Dados, Referência
          </div>
          <div className={`grid gap-5`}
            style={{ gridTemplateColumns: `repeat(${Math.min(data.caseStudies.length, 3)}, 1fr)` }}>
            {data.caseStudies.map((cs, i) => (
              <CaseStudyCard key={i} {...cs} />
            ))}
          </div>
        </>
      )}

      {/* global investment row */}
      {data.globalInvestment && data.globalInvestment.length > 0 && (
        <GlobalInvestmentRow items={data.globalInvestment} />
      )}

      {/* corpus urgency */}
      {data.corpusUrgency && (
        <CorpusUrgencyCallout
          title={data.corpusUrgency.title}
          body={data.corpusUrgency.body}
          timeline={data.corpusUrgency.timeline}
        />
      )}
    </div>
  )
}
