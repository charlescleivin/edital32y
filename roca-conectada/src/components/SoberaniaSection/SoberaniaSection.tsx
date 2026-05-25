import type { S14Data, SoberaniaLicenseRow, SoberaniaAccessPhase, LicenseExplained } from '@/types/proposal'

export const componentMeta = { slug: 'soberania-section', label: 'Soberania Digital' }

export type SoberaniaSectionProps = S14Data

const licenseColor: Record<SoberaniaLicenseRow['colorVariant'], { border: string; bg: string; text: string; badge: string }> = {
  open:   { border: 'rgba(111,168,118,0.35)', bg: 'rgba(111,168,118,0.07)', text: 'var(--sage)',  badge: 'rgba(111,168,118,0.15)' },
  nc:     { border: 'rgba(212,150,14,0.35)',  bg: 'rgba(212,150,14,0.07)',  text: 'var(--gold)',  badge: 'rgba(212,150,14,0.15)'  },
  closed: { border: 'rgba(200,85,48,0.35)',   bg: 'rgba(200,85,48,0.07)',   text: 'var(--terra)', badge: 'rgba(200,85,48,0.15)'   },
}

const phaseColors = [
  { border: 'rgba(8,145,178,0.3)',   bg: 'rgba(8,145,178,0.06)',   num: 'rgba(8,145,178,0.15)',   text: 'var(--p)'     },
  { border: 'rgba(111,168,118,0.3)', bg: 'rgba(111,168,118,0.06)', num: 'rgba(111,168,118,0.15)', text: 'var(--sage)'  },
  { border: 'rgba(212,150,14,0.3)',  bg: 'rgba(212,150,14,0.06)',  num: 'rgba(212,150,14,0.15)',  text: 'var(--gold)'  },
  { border: 'rgba(200,85,48,0.3)',   bg: 'rgba(200,85,48,0.06)',   num: 'rgba(200,85,48,0.15)',   text: 'var(--terra)' },
]

const scenarioIcon: Record<string, string> = { yes: '✅', no: '🚫', negotiate: '🤝' }
const scenarioColor: Record<string, { text: string; bg: string; border: string }> = {
  yes:       { text: 'var(--sage)',  bg: 'rgba(111,168,118,0.07)', border: 'rgba(111,168,118,0.25)' },
  no:        { text: 'var(--terra)', bg: 'rgba(200,85,48,0.07)',   border: 'rgba(200,85,48,0.25)'   },
  negotiate: { text: 'var(--gold)',  bg: 'rgba(212,150,14,0.07)',  border: 'rgba(212,150,14,0.25)'  },
}

function LicenseExplainedBlock({ data }: { data: LicenseExplained }) {
  return (
    <div className="mb-14 flex flex-col gap-6">
      {/* MIT vs CC comparison */}
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
        {/* MIT column */}
        <div className="flex flex-col rounded-2xl border overflow-hidden"
          style={{ borderColor: 'rgba(200,85,48,0.3)', background: 'var(--bg-card)' }}>
          <div className="px-6 py-4" style={{ background: 'rgba(200,85,48,0.08)', borderBottom: '1px solid rgba(200,85,48,0.2)' }}>
            <div className="mb-1 text-[9px] font-bold uppercase tracking-[2.5px]" style={{ color: 'var(--terra)' }}>
              O que seria com Licença MIT
            </div>
            <div className="text-[16px] font-bold" style={{ fontFamily: 'var(--font-playfair)', color: 'var(--txt)' }}>
              {data.mitTitle}
            </div>
          </div>
          <div className="flex flex-col gap-3 p-6">
            <p className="text-[12.5px] leading-[1.8]" style={{ color: 'var(--txtl)' }}>
              {data.mitSummary}
            </p>
            <div className="flex items-start gap-3 rounded-xl border p-4"
              style={{ borderColor: 'rgba(200,85,48,0.2)', background: 'rgba(200,85,48,0.06)' }}>
              <span className="shrink-0 text-[18px]">⚠️</span>
              <p className="text-[12px] font-semibold leading-[1.75]" style={{ color: 'var(--terra)' }}>
                {data.mitRisk}
              </p>
            </div>
          </div>
        </div>

        {/* CC BY-NC-SA column */}
        <div className="flex flex-col rounded-2xl border overflow-hidden"
          style={{ borderColor: 'rgba(212,150,14,0.3)', background: 'var(--bg-card)' }}>
          <div className="px-6 py-4" style={{ background: 'rgba(212,150,14,0.08)', borderBottom: '1px solid rgba(212,150,14,0.2)' }}>
            <div className="mb-1 text-[9px] font-bold uppercase tracking-[2.5px]" style={{ color: 'var(--gold)' }}>
              A opção escolhida — CC BY-NC-SA 4.0
            </div>
            <div className="text-[16px] font-bold" style={{ fontFamily: 'var(--font-playfair)', color: 'var(--txt)' }}>
              {data.ncSaTitle}
            </div>
          </div>
          <div className="flex flex-col gap-3 p-6">
            {/* Term-by-term translation */}
            <div className="flex flex-col gap-2">
              {data.ncSaTerms.map((t, i) => (
                <div key={i} className="flex items-start gap-3 rounded-lg border px-4 py-2.5"
                  style={{ borderColor: 'rgba(212,150,14,0.2)', background: 'rgba(212,150,14,0.05)' }}>
                  <span className="mt-px shrink-0 rounded bg-[rgba(212,150,14,0.2)] px-1.5 py-0.5 text-[9px] font-bold tracking-wider"
                    style={{ color: 'var(--gold)' }}>
                    {t.term}
                  </span>
                  <span className="text-[12px] leading-[1.65]" style={{ color: 'var(--txtl)' }}>
                    {t.plain}
                  </span>
                </div>
              ))}
            </div>
            <p className="text-[12px] italic leading-[1.75]" style={{ color: 'var(--txtll)' }}>
              {data.ncSaSummary}
            </p>
          </div>
        </div>
      </div>

      {/* Scenario table */}
      <div className="rounded-2xl border overflow-hidden" style={{ borderColor: 'var(--bdr-strong)' }}>
        <div className="px-6 py-3 text-[9px] font-bold uppercase tracking-[2.5px]"
          style={{ background: 'var(--bg-raised)', color: 'var(--txtll)', borderBottom: '1px solid var(--bdr)' }}>
          Quem Pode Usar — Cenários Concretos
        </div>
        <div className="divide-y" style={{ borderColor: 'var(--bdr)' }}>
          {data.scenarios.map((s, i) => {
            const sc = scenarioColor[s.allowed]
            return (
              <div key={i} className="grid items-center gap-4 px-6 py-4"
                style={{ gridTemplateColumns: '1fr 1.5fr auto' }}>
                <div className="text-[12px] font-semibold" style={{ color: 'var(--txt)' }}>
                  {s.who}
                </div>
                <div className="text-[11.5px] leading-[1.6]" style={{ color: 'var(--txtl)' }}>
                  {s.action}
                </div>
                <span className="flex items-center gap-1.5 rounded-full border px-3 py-1 text-[10px] font-bold whitespace-nowrap"
                  style={{ borderColor: sc.border, background: sc.bg, color: sc.text }}>
                  {scenarioIcon[s.allowed]}
                  {s.allowed === 'yes' ? 'Livre' : s.allowed === 'no' ? 'Não permitido' : 'Negociação'}
                </span>
              </div>
            )
          })}
        </div>
      </div>

      {/* Key insight */}
      <div className="flex items-start gap-4 rounded-2xl border p-5"
        style={{ borderColor: 'rgba(111,168,118,0.35)', background: 'rgba(111,168,118,0.07)' }}>
        <span className="shrink-0 text-[22px]">💡</span>
        <p className="text-[13px] font-semibold leading-[1.8]" style={{ color: 'var(--txt)' }}>
          {data.keyInsight}
        </p>
      </div>
    </div>
  )
}

function LicenseRow({ row }: { row: SoberaniaLicenseRow }) {
  const col = licenseColor[row.colorVariant]
  return (
    <div className="grid items-start gap-4 rounded-2xl border p-5"
      style={{ gridTemplateColumns: '1fr auto', borderColor: col.border, background: col.bg }}>
      <div className="flex flex-col gap-1.5">
        <div className="text-[13px] font-bold leading-snug" style={{ color: 'var(--txt)' }}>
          {row.asset}
        </div>
        <div className="text-[11.5px] leading-[1.65]" style={{ color: 'var(--txtl)' }}>
          <span className="font-semibold" style={{ color: col.text }}>Acesso: </span>{row.who}
        </div>
        <div className="text-[11px] italic leading-[1.6]" style={{ color: 'var(--txtll)' }}>
          {row.restriction}
        </div>
      </div>
      <span className="shrink-0 whitespace-nowrap rounded-full border px-3 py-1 text-[9px] font-bold uppercase tracking-[2.5px]"
        style={{ borderColor: col.border, color: col.text, background: col.badge }}>
        {row.license}
      </span>
    </div>
  )
}

function PhaseCard({ phase, index }: { phase: SoberaniaAccessPhase; index: number }) {
  const col = phaseColors[index % phaseColors.length]
  return (
    <div className="flex flex-col rounded-2xl border overflow-hidden"
      style={{ borderColor: col.border, background: 'var(--bg-card)' }}>
      <div className="px-6 pt-5 pb-4" style={{ borderBottom: `1px solid ${col.border}`, background: col.bg }}>
        <div className="mb-2 flex items-center justify-between gap-2">
          <span className="text-[9px] font-bold uppercase tracking-[2.5px]" style={{ color: col.text }}>
            {phase.period}
          </span>
          {phase.condition && (
            <span className="rounded-full border px-2.5 py-0.5 text-[8.5px] font-bold uppercase tracking-[2px]"
              style={{ borderColor: col.border, color: col.text, background: col.num }}>
              {phase.condition}
            </span>
          )}
        </div>
        <div className="text-[15px] font-bold leading-snug" style={{ fontFamily: 'var(--font-playfair)', color: 'var(--txt)' }}>
          {phase.label}
        </div>
      </div>
      <div className="flex flex-1 flex-col gap-3 p-5">
        <div>
          <div className="mb-0.5 text-[9px] font-bold uppercase tracking-[2px]" style={{ color: 'var(--txtll)' }}>
            Abrangência
          </div>
          <div className="text-[12px] leading-[1.6]" style={{ color: 'var(--txtl)' }}>
            {phase.scope}
          </div>
        </div>
        <div className="flex items-center gap-2 rounded-xl border px-4 py-2.5"
          style={{ borderColor: col.border, background: col.num }}>
          <span className="text-[22px] font-bold leading-none" style={{ fontFamily: 'var(--font-playfair)', color: col.text }}>
            {phase.count}
          </span>
        </div>
        <div className="text-[11px] leading-[1.65]" style={{ color: 'var(--txtll)' }}>
          {phase.criteria}
        </div>
      </div>
    </div>
  )
}

export default function SoberaniaSection({
  number, title, subtitle, headline,
  sovereigntyStatement, sovereigntyRationale,
  licenseExplained,
  licenseTitle, licenseItems,
  accessTitle, accessStatement, serverNote,
  accessPhases, expansionVision,
}: SoberaniaSectionProps) {
  return (
    <section id="s14" className="relative overflow-hidden px-4 py-10 sm:px-8 sm:py-14 lg:px-16 lg:py-20"
      style={{ background: 'var(--bg)' }}>
      <span aria-hidden
        className="pointer-events-none absolute right-6 top-4 select-none hidden sm:block text-[160px] font-bold leading-none opacity-[0.022]"
        style={{ fontFamily: 'var(--font-playfair)', color: 'var(--txt)' }}>
        IP
      </span>

      {/* Header */}
      <div className="relative mb-14">
        <span className="mb-5 inline-flex items-center gap-2.5 rounded-full border px-4 py-1.5 text-[9px] font-bold uppercase tracking-[3px]"
          style={{ borderColor: 'var(--bdr)', background: 'rgba(237,229,211,0.04)', color: 'var(--txtll)' }}>
          🔐 {number}
        </span>
        {headline && (
          <p className="mb-3 text-[16px] sm:text-[19px] lg:text-[22px] font-bold italic leading-[1.2]"
            style={{ fontFamily: 'var(--font-playfair)', color: 'var(--gold)' }}>
            {headline}
          </p>
        )}
        <h2 className="mb-3 text-[26px] sm:text-[34px] lg:text-[44px] font-bold leading-[1.05] tracking-[-0.3px]"
          style={{ fontFamily: 'var(--font-playfair)', color: 'var(--txt)' }}>
          {title}
        </h2>
        <p className="lg:max-w-[680px] text-[15px] italic leading-relaxed"
          style={{ fontFamily: 'var(--font-playfair)', color: 'var(--txtl)' }}>
          {subtitle}
        </p>
      </div>

      {/* Sovereignty statement */}
      <div className="mb-10 rounded-2xl border p-7"
        style={{ borderColor: 'rgba(212,150,14,0.4)', background: 'rgba(212,150,14,0.05)' }}>
        <div className="mb-3 flex items-center gap-3">
          <span className="text-[22px]">🇧🇷</span>
          <div className="text-[10px] font-bold uppercase tracking-[2.5px]" style={{ color: 'var(--gold)' }}>
            Soberania Digital — Princípio Fundante
          </div>
        </div>
        <p className="mb-3 text-[14.5px] font-bold leading-[1.6]" style={{ color: 'var(--txt)' }}>
          {sovereigntyStatement}
        </p>
        <p className="text-[13px] leading-[1.85]" style={{ color: 'var(--txtl)' }}>
          {sovereigntyRationale}
        </p>
      </div>

      {/* License explained — MIT vs CC BY-NC-SA with scenarios */}
      <div className="mb-6 flex items-center gap-3">
        <div className="h-px flex-1" style={{ background: 'var(--bdr)' }} />
        <span className="text-[10px] font-bold uppercase tracking-[2.5px]" style={{ color: 'var(--txtll)' }}>
          Comparativo de Licenças — O Que Cada Uma Significa na Prática
        </span>
        <div className="h-px flex-1" style={{ background: 'var(--bdr)' }} />
      </div>
      <LicenseExplainedBlock data={licenseExplained} />

      {/* License table per asset */}
      <div className="mb-14">
        <div className="mb-6 flex items-center gap-3">
          <div className="h-px flex-1" style={{ background: 'var(--bdr)' }} />
          <span className="text-[10px] font-bold uppercase tracking-[2.5px]" style={{ color: 'var(--txtll)' }}>
            {licenseTitle}
          </span>
          <div className="h-px flex-1" style={{ background: 'var(--bdr)' }} />
        </div>

        <div className="mb-4 flex items-center gap-6 text-[10px]" style={{ color: 'var(--txtll)' }}>
          <span className="flex items-center gap-2">
            <span className="inline-block h-2 w-2 rounded-full" style={{ background: 'var(--sage)' }} />
            Aberto irrestrito (Apache 2.0)
          </span>
          <span className="flex items-center gap-2">
            <span className="inline-block h-2 w-2 rounded-full" style={{ background: 'var(--gold)' }} />
            Aberto não-comercial (CC BY-NC-SA 4.0)
          </span>
        </div>

        <div className="flex flex-col gap-3">
          {licenseItems.map((row, i) => (
            <LicenseRow key={i} row={row} />
          ))}
        </div>
      </div>

      {/* Access control */}
      <div className="mb-10 rounded-3xl border p-8"
        style={{ borderColor: 'rgba(8,145,178,0.25)', background: 'rgba(8,145,178,0.04)' }}>
        <div className="mb-2 flex items-center gap-2">
          <span aria-hidden className="text-[14px]">🖥️</span>
          <div className="text-[10px] font-bold uppercase tracking-[2.5px]" style={{ color: 'var(--p)' }}>
            {accessTitle}
          </div>
        </div>
        <p className="mb-4 text-[14px] font-bold leading-[1.6]" style={{ color: 'var(--txt)' }}>
          {accessStatement}
        </p>
        <div className="flex items-start gap-3 rounded-xl border p-4"
          style={{ borderColor: 'rgba(8,145,178,0.2)', background: 'rgba(8,145,178,0.06)' }}>
          <span className="shrink-0 text-[18px]">⚙️</span>
          <p className="text-[12px] italic leading-[1.8]" style={{ color: 'var(--txtl)' }}>
            {serverNote}
          </p>
        </div>
      </div>

      {/* Access phases */}
      <div className="mb-12">
        <div className="mb-6 text-[10px] font-bold uppercase tracking-[2.5px]" style={{ color: 'var(--txtll)' }}>
          📈 Roadmap de Acesso — Expansão Gradual
        </div>
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-5">
          {accessPhases.map((phase, i) => (
            <PhaseCard key={phase.id} phase={phase} index={i} />
          ))}
        </div>
      </div>

      {/* Expansion vision */}
      <div className="rounded-3xl border p-8"
        style={{ borderColor: 'rgba(200,85,48,0.25)', background: 'rgba(200,85,48,0.04)' }}>
        <div className="mb-2 text-[10px] font-bold uppercase tracking-[2.5px]" style={{ color: 'var(--terra)' }}>
          🌱 O Ativo Permanente
        </div>
        <p className="text-[14px] leading-[1.9]" style={{ color: 'var(--txtl)' }}>
          {expansionVision}
        </p>
      </div>
    </section>
  )
}
