import type { AiEvidenceStructured, AiEvidenceCaseStudy } from '@/types/proposal'

function MetricCallout({ value, label, color = 'var(--p)' }: { value: string; label: string; color?: string }) {
  return (
    <div className="flex flex-col items-center justify-center rounded-2xl border p-5 text-center"
      style={{ borderColor: 'var(--bdr)', background: 'var(--bg-card)' }}>
      <div className="text-[42px] font-bold leading-none"
        style={{ fontFamily: 'var(--font-playfair)', color }}>
        {value}
      </div>
      <div className="mt-2 text-[11px] leading-snug" style={{ color: 'var(--txtl)', maxWidth: 140 }}>
        {label}
      </div>
    </div>
  )
}

function CaseStudyCard({ flag, country, project, bigStat, details, year, source, accentColor }: AiEvidenceCaseStudy) {
  return (
    <div className="flex flex-col overflow-hidden rounded-2xl border"
      style={{ borderColor: 'var(--bdr)', background: 'var(--bg-card)' }}>
      <div className="flex items-center gap-3 px-5 py-4" style={{ background: 'rgba(255,255,255,0.03)' }}>
        <span className="text-[30px] leading-none">{flag}</span>
        <div className="min-w-0">
          <div className="text-[13px] font-bold leading-tight" style={{ color: 'var(--txt)' }}>{country}</div>
          <div className="text-[11px] leading-tight" style={{ color: 'var(--txtll)' }}>{project} · {year}</div>
        </div>
      </div>
      <div className="border-b px-5 py-5 text-center" style={{ borderColor: 'var(--bdr)' }}>
        <div className="text-[50px] font-bold leading-none"
          style={{ fontFamily: 'var(--font-playfair)', color: accentColor }}>
          {bigStat.value}
        </div>
        <div className="mt-2 text-[11.5px]" style={{ color: 'var(--txtl)' }}>{bigStat.label}</div>
      </div>
      <div className="flex flex-1 flex-col gap-2 px-5 py-4">
        {details.map((d, i) => (
          <div key={i} className="flex items-start gap-2 text-[12px] leading-[1.6]" style={{ color: 'var(--txtl)' }}>
            <span className="mt-[5px] h-1.5 w-1.5 shrink-0 rounded-full" style={{ background: accentColor }} />
            {d}
          </div>
        ))}
      </div>
      <div className="border-t px-5 py-2.5" style={{ borderColor: 'var(--bdr)' }}>
        <span className="text-[10px] font-mono" style={{ color: 'var(--txtll)' }}>{source}</span>
      </div>
    </div>
  )
}

export default function AiEvidenceBlock({ data }: { data: AiEvidenceStructured }) {
  const typeStyles = {
    now:     { bg: 'rgba(111,168,118,0.15)', border: 'rgba(111,168,118,0.5)', color: 'var(--p)' },
    closing: { bg: 'rgba(212,150,14,0.15)',  border: 'rgba(212,150,14,0.5)',  color: 'var(--gold)' },
    lost:    { bg: 'rgba(200,85,48,0.15)',   border: 'rgba(200,85,48,0.5)',   color: 'var(--terra)' },
  }

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

      {data.hook && (
        <p className="mb-7 border-l-[2px] pl-4 text-[14px] italic leading-[1.7]"
          style={{ color: 'var(--txtl)', borderColor: 'rgba(111,168,118,0.4)' }}>
          {data.hook}
        </p>
      )}

      {data.metricCallouts && data.metricCallouts.length > 0 && (
        <div className="mb-8 grid grid-cols-4 gap-4">
          {data.metricCallouts.map((m, i) => (
            <MetricCallout key={i} value={m.value} label={m.label} color={m.color} />
          ))}
        </div>
      )}

      {data.caseStudies && data.caseStudies.length > 0 && (
        <>
          <div className="mb-3 text-[9px] font-bold uppercase tracking-[2.5px]" style={{ color: 'var(--txtll)' }}>
            📋 Estudos de Campo Publicados — Metodologia, Dados, Referência
          </div>
          <div className="grid grid-cols-3 gap-5">
            {data.caseStudies.map((cs, i) => <CaseStudyCard key={i} {...cs} />)}
          </div>
        </>
      )}

      {data.globalInvestment && data.globalInvestment.length > 0 && (
        <div className="mt-6 rounded-2xl border p-6" style={{ borderColor: 'var(--bdr)', background: 'var(--bg-card)' }}>
          <div className="mb-1 text-[9px] font-bold uppercase tracking-[2.5px]" style={{ color: 'var(--txtll)' }}>
            💰 O Mundo Já Apostou — Investimento Global em IA Agrícola
          </div>

          <div className="mb-5 flex items-end gap-4 border-b pb-5" style={{ borderColor: 'var(--bdr)' }}>
            <div className="text-[48px] font-bold leading-none"
              style={{ fontFamily: 'var(--font-playfair)', color: 'var(--gold)' }}>
              {data.globalInvestmentTotal ?? 'US$ 1,6B+'}
            </div>
            <div className="mb-1.5 text-[13px] leading-[1.4]" style={{ color: 'var(--txtl)', maxWidth: 300 }}>
              {data.globalInvestmentTotalLabel ?? 'comprometidos globalmente em IA agrícola · 2024–2026'}
            </div>
          </div>

          <div className="grid grid-cols-2 gap-4">
            {data.globalInvestment.map((item, i) => (
              <div key={i} className="flex flex-col rounded-xl border p-4"
                style={{ borderColor: 'var(--bdr)', background: 'rgba(255,255,255,0.03)' }}>
                <div className="mb-2 flex items-baseline justify-between">
                  <div className="text-[22px] font-bold leading-none"
                    style={{ fontFamily: 'var(--font-playfair)', color: item.color }}>
                    {item.amount}
                  </div>
                  <div className="text-[10px] font-mono" style={{ color: 'var(--txtll)' }}>{item.year}</div>
                </div>
                <div className="mb-1 text-[12px] font-semibold" style={{ color: 'var(--txt)' }}>{item.actor}</div>
                <div className="text-[11px] leading-[1.6]" style={{ color: 'var(--txtl)' }}>{item.label}</div>
              </div>
            ))}
          </div>

          {data.globalInvestmentBrazilContrast && (
            <div className="mt-4 flex items-start gap-3 rounded-xl border-l-[3px] px-4 py-3.5"
              style={{ borderColor: 'var(--terra)', background: 'rgba(200,85,48,0.08)' }}>
              <span className="mt-0.5 text-[20px] leading-none">🇧🇷</span>
              <div>
                <div className="mb-0.5 text-[11px] font-bold uppercase tracking-[1.5px]" style={{ color: 'var(--terra)' }}>
                  Brasil — A Janela de Entrada
                </div>
                <div className="text-[12px] leading-[1.6]" style={{ color: 'var(--txtl)' }}>
                  {data.globalInvestmentBrazilContrast}
                </div>
              </div>
            </div>
          )}
        </div>
      )}

      {data.corpusUrgency && (
        <div className="mt-6 rounded-2xl border-l-[3px] p-7"
          style={{ borderColor: 'var(--terra)', background: 'rgba(200,85,48,0.05)' }}>
          <div className="mb-2 text-[9px] font-bold uppercase tracking-[3px]" style={{ color: 'var(--terra)' }}>
            ⏳ {data.corpusUrgency.title}
          </div>
          <div className="mb-5 flex gap-2">
            {data.corpusUrgency.timeline.map((step, i) => {
              const st = typeStyles[step.type]
              return (
                <div key={i} className="flex flex-1 flex-col items-center gap-1.5">
                  <div className="w-full rounded-xl border px-3 py-3 text-center"
                    style={{ borderColor: st.border, background: st.bg }}>
                    <div className="text-[13px] font-bold" style={{ color: st.color }}>{step.year}</div>
                  </div>
                  <div className="px-1 text-center text-[10.5px] leading-[1.5]" style={{ color: 'var(--txtl)' }}>
                    {step.event}
                  </div>
                </div>
              )
            })}
          </div>
          <p className="text-[13px] italic leading-[1.8]" style={{ color: 'var(--txtl)' }}>
            {data.corpusUrgency.body}
          </p>
        </div>
      )}
    </div>
  )
}
