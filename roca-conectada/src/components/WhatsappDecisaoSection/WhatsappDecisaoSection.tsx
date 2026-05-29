import type {
  S17Data,
  WhatsappDataPoint,
  WhatsappPrecedent,
  WhatsappRisk,
  WhatsappMigrationStep,
  WhatsappDecisaoCitation,
} from '@/types/proposal'

export const componentMeta = { slug: 'whatsapp-decisao-section', label: 'A Decisão WhatsApp' }

export type WhatsappDecisaoSectionProps = S17Data

// ─── colour maps ───────────────────────────────────────────────────────────────

const dataPointColors: Record<WhatsappDataPoint['color'], { border: string; bg: string; text: string }> = {
  terra: { border: 'rgba(200,85,48,0.35)',   bg: 'rgba(200,85,48,0.07)',   text: 'var(--terra)' },
  gold:  { border: 'rgba(212,150,14,0.35)',  bg: 'rgba(212,150,14,0.07)',  text: 'var(--gold)'  },
  sage:  { border: 'rgba(111,168,118,0.35)', bg: 'rgba(111,168,118,0.07)', text: 'var(--sage)'  },
  green: { border: 'rgba(74,148,86,0.35)',   bg: 'rgba(74,148,86,0.07)',   text: 'var(--p)'     },
}

const riskColors: Record<WhatsappRisk['severity'], { border: string; bg: string; text: string; badge: string }> = {
  high:   { border: 'rgba(200,85,48,0.35)',   bg: 'rgba(200,85,48,0.06)',   text: 'var(--terra)', badge: 'rgba(200,85,48,0.15)'   },
  medium: { border: 'rgba(212,150,14,0.35)',  bg: 'rgba(212,150,14,0.06)',  text: 'var(--gold)',  badge: 'rgba(212,150,14,0.15)'  },
  low:    { border: 'rgba(111,168,118,0.35)', bg: 'rgba(111,168,118,0.06)', text: 'var(--sage)',  badge: 'rgba(111,168,118,0.15)' },
}

const riskLabel: Record<WhatsappRisk['severity'], string> = {
  high: 'Alto', medium: 'Médio', low: 'Baixo',
}

const precedentAccents = [
  { border: 'rgba(212,150,14,0.3)',  bg: 'rgba(212,150,14,0.06)',  text: 'var(--gold)', hdr: 'rgba(212,150,14,0.08)',  hdrBdr: 'rgba(212,150,14,0.18)'  },
  { border: 'rgba(111,168,118,0.3)', bg: 'rgba(111,168,118,0.06)', text: 'var(--sage)', hdr: 'rgba(111,168,118,0.08)', hdrBdr: 'rgba(111,168,118,0.18)' },
  { border: 'rgba(8,145,178,0.3)',   bg: 'rgba(8,145,178,0.06)',   text: 'var(--p)',    hdr: 'rgba(8,145,178,0.08)',   hdrBdr: 'rgba(8,145,178,0.18)'   },
]

const migrationAccents = [
  { border: 'rgba(74,148,86,0.3)',    bg: 'rgba(74,148,86,0.06)',    text: 'var(--p)'    },
  { border: 'rgba(212,150,14,0.3)',   bg: 'rgba(212,150,14,0.06)',   text: 'var(--gold)' },
  { border: 'rgba(111,168,118,0.3)',  bg: 'rgba(111,168,118,0.06)',  text: 'var(--sage)' },
  { border: 'rgba(200,85,48,0.3)',    bg: 'rgba(200,85,48,0.06)',    text: 'var(--terra)'},
]

// ─── sub-components ────────────────────────────────────────────────────────────

function DataPointCard({ dp }: { dp: WhatsappDataPoint }) {
  const col = dataPointColors[dp.color]
  return (
    <div className="flex flex-col rounded-2xl border p-6" style={{ borderColor: col.border, background: col.bg }}>
      <div className="mb-3 text-[38px] sm:text-[46px] font-bold leading-none tracking-tight"
        style={{ fontFamily: 'var(--font-playfair)', color: col.text }}>
        {dp.value}
      </div>
      <div className="mb-2 text-[12.5px] font-semibold leading-[1.55]" style={{ color: 'var(--txt)' }}>
        {dp.label}
      </div>
      <div className="mt-auto text-[10px] italic" style={{ color: 'var(--txtll)' }}>
        {dp.source}
      </div>
    </div>
  )
}

function PrecedentCard({ p, index }: { p: WhatsappPrecedent; index: number }) {
  const acc = precedentAccents[index % precedentAccents.length]
  return (
    <div className="flex flex-col rounded-2xl border overflow-hidden" style={{ borderColor: acc.border, background: 'var(--bg-card)' }}>
      <div className="flex items-center gap-3 px-5 py-4"
        style={{ background: acc.hdr, borderBottom: `1px solid ${acc.hdrBdr}` }}>
        <span className="text-[22px] leading-none">{p.flag}</span>
        <div className="flex-1 min-w-0">
          <div className="text-[13px] font-bold leading-snug" style={{ color: 'var(--txt)' }}>{p.name}</div>
          <div className="text-[10px] mt-0.5" style={{ color: 'var(--txtll)' }}>{p.org} · {p.year}</div>
        </div>
        <span className="shrink-0 rounded-full border px-2.5 py-0.5 text-[9px] font-bold uppercase tracking-[2px]"
          style={{ borderColor: acc.border, color: acc.text, background: 'rgba(0,0,0,0.2)' }}>
          {p.channel}
        </span>
      </div>
      <div className="flex flex-1 flex-col gap-3 p-5">
        <div className="rounded-xl border px-4 py-3 text-[22px] font-bold leading-none"
          style={{ borderColor: acc.border, background: acc.bg, fontFamily: 'var(--font-playfair)', color: acc.text }}>
          {p.farmers}
        </div>
        <div className="text-[11px] leading-[1.7]" style={{ color: 'var(--txtl)' }}>
          <span className="font-semibold" style={{ color: 'var(--txtll)' }}>Fonte: </span>
          {p.source}
        </div>
      </div>
    </div>
  )
}

function MigrationStep({ step, index, total }: { step: WhatsappMigrationStep; index: number; total: number }) {
  const acc = migrationAccents[index % migrationAccents.length]
  const isLast = index === total - 1
  return (
    <div className="flex gap-4">
      <div className="flex flex-col items-center" style={{ minWidth: 40 }}>
        <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full border-2 text-[11px] font-black"
          style={{ borderColor: acc.text, background: acc.bg, color: acc.text }}>
          {index + 1}
        </div>
        {!isLast && <div className="mt-1 w-[2px] flex-1" style={{ background: 'var(--bdr)', minHeight: 24 }} />}
      </div>
      <div className="flex-1 pb-6">
        <div className="flex flex-wrap items-center gap-2 mb-1">
          <span className="rounded border px-2 py-0.5 text-[9px] font-bold uppercase tracking-wider"
            style={{ borderColor: acc.border, color: acc.text, background: acc.bg }}>
            {step.phase}
          </span>
          <span className="text-[12.5px] font-bold" style={{ color: 'var(--txt)' }}>{step.label}</span>
        </div>
        <p className="text-[12.5px] leading-[1.75]" style={{ color: 'var(--txtl)' }}>{step.description}</p>
      </div>
    </div>
  )
}

function RiskRow({ risk }: { risk: WhatsappRisk }) {
  const col = riskColors[risk.severity]
  return (
    <div className="grid items-start gap-4 rounded-2xl border p-5"
      style={{ gridTemplateColumns: '1fr 1.5fr auto', borderColor: col.border, background: col.bg }}>
      <div className="text-[12.5px] font-semibold leading-[1.55]" style={{ color: 'var(--txt)' }}>{risk.risk}</div>
      <div className="text-[12px] leading-[1.65]" style={{ color: 'var(--txtl)' }}>{risk.mitigation}</div>
      <span className="shrink-0 whitespace-nowrap self-start rounded-full border px-3 py-1 text-[9px] font-bold uppercase tracking-[2.5px]"
        style={{ borderColor: col.border, color: col.text, background: col.badge }}>
        {riskLabel[risk.severity]}
      </span>
    </div>
  )
}

function CitationEntry({ cit, index }: { cit: WhatsappDecisaoCitation; index: number }) {
  return (
    <div className="flex gap-4 py-4" style={{ borderBottom: '1px solid var(--bdr)' }}>
      <span className="mt-0.5 shrink-0 flex h-6 w-6 items-center justify-center rounded-full text-[9px] font-bold"
        style={{ background: 'var(--bg-raised)', color: 'var(--txtll)', border: '1px solid var(--bdr-strong)' }}>
        {index + 1}
      </span>
      <div className="flex flex-col gap-1.5 min-w-0">
        <p className="text-[12px] font-semibold leading-[1.55]" style={{ color: 'var(--txt)' }}>{cit.title}</p>
        <p className="text-[11px]" style={{ color: 'var(--txtll)' }}>
          {cit.authors}{cit.venue ? ` · ${cit.venue}` : ''}{cit.year ? ` · ${cit.year}` : ''}{cit.doi ? ` · ${cit.doi}` : ''}
        </p>
        <div className="rounded-lg border px-3 py-2 text-[11px] font-semibold leading-[1.6]"
          style={{ borderColor: 'var(--bdr-strong)', background: 'var(--bg-raised)', color: 'var(--txtl)' }}>
          <span className="mr-2 text-[9px] font-bold uppercase tracking-[2px]" style={{ color: 'var(--gold)' }}>Achado-chave</span>
          {cit.keyFinding}
        </div>
        {cit.url && <p className="text-[9.5px] font-mono break-all" style={{ color: 'var(--txtll)' }}>{cit.url}</p>}
      </div>
    </div>
  )
}

function Divider({ label }: { label: string }) {
  return (
    <div className="mb-6 flex items-center gap-3">
      <div className="h-px flex-1" style={{ background: 'var(--bdr)' }} />
      <span className="text-[10px] font-bold uppercase tracking-[2.5px]" style={{ color: 'var(--txtll)' }}>{label}</span>
      <div className="h-px flex-1" style={{ background: 'var(--bdr)' }} />
    </div>
  )
}

// ─── Main export ───────────────────────────────────────────────────────────────

export default function WhatsappDecisaoSection({
  number,
  title,
  subtitle,
  headline,
  openingRationale,
  dataPoints,
  precedents,
  sovereigntyArgument,
  migrationRoadmap,
  risks,
  citations,
}: WhatsappDecisaoSectionProps) {
  return (
    <section
      id="s4-whatsapp"
      className="relative overflow-hidden px-4 py-10 sm:px-8 sm:py-14 lg:px-16 lg:py-20"
      style={{ background: 'var(--bg-alt)' }}
    >
      <span aria-hidden className="pointer-events-none absolute right-4 top-2 hidden select-none text-[160px] font-bold leading-none opacity-[0.022] sm:block"
        style={{ fontFamily: 'var(--font-playfair)', color: 'var(--txt)' }}>
        WA
      </span>

      {/* ── Header ── */}
      <div className="relative mb-14">
        <span className="mb-5 inline-flex items-center gap-2.5 rounded-full border px-4 py-1.5 text-[9px] font-bold uppercase tracking-[3px]"
          style={{ borderColor: 'var(--bdr)', background: 'rgba(237,229,211,0.04)', color: 'var(--txtll)' }}>
          {number}
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

      {/* ── 1. Opening technical rationale ── */}
      <div className="mb-14 rounded-3xl border p-7 sm:p-9"
        style={{ borderColor: 'rgba(212,150,14,0.35)', background: 'rgba(212,150,14,0.05)' }}>
        <div className="mb-4 text-[10px] font-bold uppercase tracking-[2.5px]" style={{ color: 'var(--gold)' }}>
          Decisão Técnica de Canal
        </div>
        <p className="text-[14px] sm:text-[15px] leading-[1.9]" style={{ color: 'var(--txtl)' }}>
          {openingRationale}
        </p>
      </div>

      {/* ── 2. Brazil rural data ── */}
      <div className="mb-14">
        <Divider label="Brasil Rural — A Infraestrutura que Existe" />
        <div className="grid grid-cols-2 gap-4 sm:grid-cols-4">
          {dataPoints.map((dp, i) => (
            <DataPointCard key={i} dp={dp} />
          ))}
        </div>
      </div>

      {/* ── 3. Precedents ── */}
      <div className="mb-14">
        <Divider label="Precedente Global — Os Melhores Sistemas Chegaram à Mesma Conclusão" />
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-5">
          {precedents.map((p, i) => (
            <PrecedentCard key={i} p={p} index={i} />
          ))}
        </div>
      </div>

      {/* ── 4. Architecture / sovereignty layers ── */}
      <div className="mb-14">
        <Divider label="Onde Reside a Soberania — Camadas da Arquitetura" />
        <div className="mb-6 flex flex-col gap-2">
          {[
            { label: 'AgroLinguaBR Corpus',  sub: 'CC BY-NC-SA 4.0 · DOI · repositório institucional brasileiro',           color: 'var(--terra)', border: 'rgba(200,85,48,0.35)',   bg: 'rgba(200,85,48,0.07)'   },
            { label: 'Modelo LLM Fine-tuned', sub: 'CC BY-NC-SA 4.0 · pesos em infraestrutura brasileira',                  color: 'var(--gold)',  border: 'rgba(212,150,14,0.35)',  bg: 'rgba(212,150,14,0.07)'  },
            { label: 'AgroAPI',               sub: 'Servidores brasileiros · propriedade da ICT executora',                  color: 'var(--sage)',  border: 'rgba(111,168,118,0.35)', bg: 'rgba(111,168,118,0.07)' },
            { label: 'Coopera Digital',        sub: 'Dados armazenados no Brasil · exportáveis JSON/CSV',                   color: 'var(--p)',     border: 'rgba(74,148,86,0.35)',   bg: 'rgba(74,148,86,0.07)'   },
            { label: 'WhatsApp (canal)',        sub: 'Camada de entrega — configuração, não arquitetura. Substituível por reconfiguração.', color: 'var(--txtll)', border: 'var(--bdr-strong)', bg: 'var(--bg-raised)' },
          ].map((layer, i) => (
            <div key={i} className="flex items-center gap-4 rounded-xl border px-5 py-3.5"
              style={{ borderColor: layer.border, background: layer.bg }}>
              <div className="shrink-0 flex h-7 w-7 items-center justify-center rounded-full text-[11px] font-bold"
                style={{ background: layer.border, color: layer.color }}>
                {i + 1}
              </div>
              <div className="flex-1 min-w-0">
                <div className="text-[12.5px] font-bold leading-snug" style={{ color: i < 4 ? 'var(--txt)' : 'var(--txtl)' }}>
                  {layer.label}
                </div>
                <div className="text-[10.5px] leading-[1.5]" style={{ color: 'var(--txtll)' }}>{layer.sub}</div>
              </div>
              {i < 4 && (
                <span className="shrink-0 rounded-full border px-2.5 py-0.5 text-[9px] font-bold uppercase tracking-[2px]"
                  style={{ borderColor: layer.border, color: layer.color, background: 'rgba(0,0,0,0.2)' }}>
                  Soberano
                </span>
              )}
            </div>
          ))}
        </div>
        <div className="mt-5 rounded-2xl border p-6" style={{ borderColor: 'rgba(212,150,14,0.3)', background: 'rgba(212,150,14,0.05)' }}>
          <p className="text-[13px] leading-[1.9]" style={{ color: 'var(--txtl)' }}>{sovereigntyArgument}</p>
        </div>
      </div>

      {/* ── 5. Migration roadmap ── */}
      <div className="mb-14">
        <Divider label={migrationRoadmap.title} />
        <p className="mb-8 text-[13.5px] italic leading-[1.8]" style={{ color: 'var(--txtl)' }}>
          {migrationRoadmap.subtitle}
        </p>
        <div className="mb-8">
          {migrationRoadmap.steps.map((step, i) => (
            <MigrationStep key={i} step={step} index={i} total={migrationRoadmap.steps.length} />
          ))}
        </div>
        <div className="rounded-3xl border p-7"
          style={{ borderColor: 'rgba(74,148,86,0.35)', background: 'rgba(74,148,86,0.05)' }}>
          <div className="mb-3 text-[10px] font-bold uppercase tracking-[2.5px]" style={{ color: 'var(--p)' }}>
            Intenção Declarada
          </div>
          <p className="text-[13.5px] font-semibold leading-[1.85]" style={{ color: 'var(--txt)' }}>
            {migrationRoadmap.closingStatement}
          </p>
        </div>
      </div>

      {/* ── 6. Limitations and mitigations ── */}
      <div className="mb-14">
        <Divider label="Limitações Conhecidas e Mitigações" />
        <div className="flex flex-col gap-3">
          <div className="hidden sm:grid items-center gap-4 rounded-xl px-5 py-2.5 text-[9px] font-bold uppercase tracking-[2.5px]"
            style={{ gridTemplateColumns: '1fr 1.5fr auto', background: 'var(--bg-raised)', color: 'var(--txtll)', border: '1px solid var(--bdr)' }}>
            <span>Limitação</span>
            <span>Mitigação</span>
            <span>Nível</span>
          </div>
          {risks.map((r, i) => (
            <RiskRow key={i} risk={r} />
          ))}
        </div>
      </div>

      {/* ── 7. Bibliography ── */}
      <div>
        <Divider label="Referências Bibliográficas" />
        <div className="divide-y" style={{ borderColor: 'var(--bdr)' }}>
          {citations.map((cit, i) => (
            <CitationEntry key={i} cit={cit} index={i} />
          ))}
        </div>
      </div>
    </section>
  )
}
