import type {
  S17Data,
  WhatsappDataPoint,
  WhatsappPrecedent,
  WhatsappRisk,
  WhatsappDecisaoCitation,
} from '@/types/proposal'

export const componentMeta = { slug: 'whatsapp-decisao-section', label: 'A Decisão WhatsApp' }

export type WhatsappDecisaoSectionProps = S17Data

// ─── colour maps ───────────────────────────────────────────────────────────────

const dataPointColors: Record<WhatsappDataPoint['color'], { border: string; bg: string; text: string; num: string }> = {
  terra: { border: 'rgba(200,85,48,0.35)',   bg: 'rgba(200,85,48,0.07)',   text: 'var(--terra)', num: 'rgba(200,85,48,0.15)'   },
  gold:  { border: 'rgba(212,150,14,0.35)',  bg: 'rgba(212,150,14,0.07)',  text: 'var(--gold)',  num: 'rgba(212,150,14,0.15)'  },
  sage:  { border: 'rgba(111,168,118,0.35)', bg: 'rgba(111,168,118,0.07)', text: 'var(--sage)',  num: 'rgba(111,168,118,0.15)' },
  green: { border: 'rgba(74,148,86,0.35)',   bg: 'rgba(74,148,86,0.07)',   text: 'var(--p)',     num: 'rgba(74,148,86,0.15)'   },
}

const riskColors: Record<WhatsappRisk['severity'], { border: string; bg: string; text: string; badge: string }> = {
  high:   { border: 'rgba(200,85,48,0.35)',   bg: 'rgba(200,85,48,0.06)',   text: 'var(--terra)', badge: 'rgba(200,85,48,0.15)'   },
  medium: { border: 'rgba(212,150,14,0.35)',  bg: 'rgba(212,150,14,0.06)',  text: 'var(--gold)',  badge: 'rgba(212,150,14,0.15)'  },
  low:    { border: 'rgba(111,168,118,0.35)', bg: 'rgba(111,168,118,0.06)', text: 'var(--sage)',  badge: 'rgba(111,168,118,0.15)' },
}

const riskLabel: Record<WhatsappRisk['severity'], string> = {
  high:   'Alto',
  medium: 'Médio',
  low:    'Baixo',
}

const precedentAccents = [
  { border: 'rgba(212,150,14,0.3)',   bg: 'rgba(212,150,14,0.06)',   text: 'var(--gold)',  hdr: 'rgba(212,150,14,0.08)',  hdrBdr: 'rgba(212,150,14,0.18)'  },
  { border: 'rgba(111,168,118,0.3)',  bg: 'rgba(111,168,118,0.06)',  text: 'var(--sage)',  hdr: 'rgba(111,168,118,0.08)', hdrBdr: 'rgba(111,168,118,0.18)' },
  { border: 'rgba(8,145,178,0.3)',    bg: 'rgba(8,145,178,0.06)',    text: 'var(--p)',     hdr: 'rgba(8,145,178,0.08)',   hdrBdr: 'rgba(8,145,178,0.18)'   },
]

// ─── sub-components ────────────────────────────────────────────────────────────

function DataPointCard({ dp }: { dp: WhatsappDataPoint }) {
  const col = dataPointColors[dp.color]
  return (
    <div
      className="flex flex-col rounded-2xl border p-6"
      style={{ borderColor: col.border, background: col.bg }}
    >
      <div
        className="mb-3 text-[38px] sm:text-[46px] font-bold leading-none tracking-tight"
        style={{ fontFamily: 'var(--font-playfair)', color: col.text }}
      >
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
    <div
      className="flex flex-col rounded-2xl border overflow-hidden"
      style={{ borderColor: acc.border, background: 'var(--bg-card)' }}
    >
      <div
        className="flex items-center gap-3 px-5 py-4"
        style={{ background: acc.hdr, borderBottom: `1px solid ${acc.hdrBdr}` }}
      >
        <span className="text-[22px] leading-none">{p.flag}</span>
        <div className="flex-1 min-w-0">
          <div className="text-[13px] font-bold leading-snug" style={{ color: 'var(--txt)' }}>
            {p.name}
          </div>
          <div className="text-[10px] mt-0.5" style={{ color: 'var(--txtll)' }}>
            {p.org} · {p.year}
          </div>
        </div>
        <span
          className="shrink-0 rounded-full border px-2.5 py-0.5 text-[9px] font-bold uppercase tracking-[2px]"
          style={{ borderColor: acc.border, color: acc.text, background: 'rgba(0,0,0,0.2)' }}
        >
          {p.channel}
        </span>
      </div>
      <div className="flex flex-1 flex-col gap-3 p-5">
        <div
          className="rounded-xl border px-4 py-3 text-[22px] font-bold leading-none"
          style={{ borderColor: acc.border, background: acc.bg, fontFamily: 'var(--font-playfair)', color: acc.text }}
        >
          {p.farmers}
        </div>
        <div className="text-[11px] leading-[1.7]" style={{ color: 'var(--txtl)' }}>
          <span className="font-semibold" style={{ color: 'var(--txtll)' }}>Fonte: </span>
          {p.source}
        </div>
        {p.sourceUrl && (
          <div className="text-[9.5px] font-mono break-all" style={{ color: 'var(--txtll)' }}>
            {p.sourceUrl}
          </div>
        )}
      </div>
    </div>
  )
}

function RiskRow({ risk }: { risk: WhatsappRisk }) {
  const col = riskColors[risk.severity]
  return (
    <div
      className="grid items-start gap-4 rounded-2xl border p-5"
      style={{ gridTemplateColumns: '1fr 1.5fr auto', borderColor: col.border, background: col.bg }}
    >
      <div className="text-[12.5px] font-semibold leading-[1.55]" style={{ color: 'var(--txt)' }}>
        {risk.risk}
      </div>
      <div className="text-[12px] leading-[1.65]" style={{ color: 'var(--txtl)' }}>
        {risk.mitigation}
      </div>
      <span
        className="shrink-0 whitespace-nowrap self-start rounded-full border px-3 py-1 text-[9px] font-bold uppercase tracking-[2.5px]"
        style={{ borderColor: col.border, color: col.text, background: col.badge }}
      >
        {riskLabel[risk.severity]}
      </span>
    </div>
  )
}

function CitationEntry({ cit, index }: { cit: WhatsappDecisaoCitation; index: number }) {
  return (
    <div className="flex gap-4 py-4" style={{ borderBottom: '1px solid var(--bdr)' }}>
      <span
        className="mt-0.5 shrink-0 flex h-6 w-6 items-center justify-center rounded-full text-[9px] font-bold"
        style={{ background: 'var(--bg-raised)', color: 'var(--txtll)', border: '1px solid var(--bdr-strong)' }}
      >
        {index + 1}
      </span>
      <div className="flex flex-col gap-1.5 min-w-0">
        <p className="text-[12px] font-semibold leading-[1.55]" style={{ color: 'var(--txt)' }}>
          {cit.title}
        </p>
        <p className="text-[11px]" style={{ color: 'var(--txtll)' }}>
          {cit.authors}
          {cit.venue ? ` · ${cit.venue}` : ''}
          {cit.year ? ` · ${cit.year}` : ''}
          {cit.doi ? ` · ${cit.doi}` : ''}
        </p>
        <div
          className="rounded-lg border px-3 py-2 text-[11px] font-semibold leading-[1.6]"
          style={{ borderColor: 'var(--bdr-strong)', background: 'var(--bg-raised)', color: 'var(--txtl)' }}
        >
          <span
            className="mr-2 text-[9px] font-bold uppercase tracking-[2px]"
            style={{ color: 'var(--gold)' }}
          >
            Achado-chave
          </span>
          {cit.keyFinding}
        </div>
        {cit.url && (
          <p className="text-[9.5px] font-mono break-all" style={{ color: 'var(--txtll)' }}>
            {cit.url}
          </p>
        )}
      </div>
    </div>
  )
}

// ─── Divider helper ────────────────────────────────────────────────────────────

function Divider({ label }: { label: string }) {
  return (
    <div className="mb-6 flex items-center gap-3">
      <div className="h-px flex-1" style={{ background: 'var(--bdr)' }} />
      <span className="text-[10px] font-bold uppercase tracking-[2.5px]" style={{ color: 'var(--txtll)' }}>
        {label}
      </span>
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
  confrontationStatement,
  dataPoints,
  buildCostNote,
  precedents,
  sovereigntyArgument,
  risks,
  citations,
}: WhatsappDecisaoSectionProps) {
  return (
    <section
      id="s17"
      className="relative overflow-hidden px-4 py-10 sm:px-8 sm:py-14 lg:px-16 lg:py-20"
      style={{ background: 'var(--bg-alt)' }}
    >
      {/* decorative watermark */}
      <span
        aria-hidden
        className="pointer-events-none absolute right-4 top-2 hidden select-none text-[160px] font-bold leading-none opacity-[0.022] sm:block"
        style={{ fontFamily: 'var(--font-playfair)', color: 'var(--txt)' }}
      >
        WA
      </span>

      {/* ── Header ── */}
      <div className="relative mb-14">
        <span
          className="mb-5 inline-flex items-center gap-2.5 rounded-full border px-4 py-1.5 text-[9px] font-bold uppercase tracking-[3px]"
          style={{ borderColor: 'var(--bdr)', background: 'rgba(237,229,211,0.04)', color: 'var(--txtll)' }}
        >
          💬 {number}
        </span>
        {headline && (
          <p
            className="mb-3 text-[16px] sm:text-[19px] lg:text-[22px] font-bold italic leading-[1.2]"
            style={{ fontFamily: 'var(--font-playfair)', color: 'var(--gold)' }}
          >
            {headline}
          </p>
        )}
        <h2
          className="mb-3 text-[26px] sm:text-[34px] lg:text-[44px] font-bold leading-[1.05] tracking-[-0.3px]"
          style={{ fontFamily: 'var(--font-playfair)', color: 'var(--txt)' }}
        >
          {title}
        </h2>
        <p
          className="lg:max-w-[680px] text-[15px] italic leading-relaxed"
          style={{ fontFamily: 'var(--font-playfair)', color: 'var(--txtl)' }}
        >
          {subtitle}
        </p>
      </div>

      {/* ── 1. Opening confrontation ── */}
      <div
        className="mb-14 rounded-3xl border p-7 sm:p-9"
        style={{ borderColor: 'rgba(200,85,48,0.35)', background: 'rgba(200,85,48,0.05)' }}
      >
        <div className="mb-4 flex items-center gap-3">
          <span className="text-[22px]">🤔</span>
          <div className="text-[10px] font-bold uppercase tracking-[2.5px]" style={{ color: 'var(--terra)' }}>
            A Contradição Aparente — Respondida Diretamente
          </div>
        </div>
        <p
          className="mb-5 text-[15px] sm:text-[17px] font-bold italic leading-[1.5]"
          style={{ fontFamily: 'var(--font-playfair)', color: 'var(--txt)' }}
        >
          &ldquo;{confrontationStatement}&rdquo;
        </p>
        <p className="text-[13px] leading-[1.9]" style={{ color: 'var(--txtl)' }}>
          Esta pergunta merece uma resposta honesta, não um desvio. Nas seções abaixo está essa resposta — com dados, precedentes e uma análise de onde a soberania digital realmente reside.
        </p>
      </div>

      {/* ── 2. Brazil data block ── */}
      <div className="mb-14">
        <Divider label="Brasil Rural — Realidade de Canal (não preferência)" />
        <div className="grid grid-cols-2 gap-4 sm:grid-cols-4 mb-6">
          {dataPoints.map((dp, i) => (
            <DataPointCard key={i} dp={dp} />
          ))}
        </div>
        <div
          className="rounded-2xl border px-6 py-5"
          style={{ borderColor: 'rgba(212,150,14,0.25)', background: 'rgba(212,150,14,0.05)' }}
        >
          <p className="text-[13px] leading-[1.9]" style={{ color: 'var(--txtl)' }}>
            <span className="font-bold" style={{ color: 'var(--gold)' }}>O argumento: </span>
            O WhatsApp não é uma escolha entre "conveniente" e "soberano". É a infraestrutura de comunicação do Brasil rural. 96% de penetração entre usuários rurais de celular não é preferência — é realidade estrutural. O canal alternativo ainda não existe, em escala, para substituí-lo.
          </p>
        </div>
      </div>

      {/* ── 3. Cost of building an alternative ── */}
      <div className="mb-14">
        <Divider label="O Custo de Construir uma Alternativa" />
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-5 mb-6">
          <div
            className="rounded-2xl border p-6"
            style={{ borderColor: 'rgba(200,85,48,0.3)', background: 'rgba(200,85,48,0.06)' }}
          >
            <div className="mb-2 text-[9px] font-bold uppercase tracking-[2.5px]" style={{ color: 'var(--terra)' }}>
              Cleveroad · 2025
            </div>
            <div
              className="mb-2 text-[32px] font-bold leading-none"
              style={{ fontFamily: 'var(--font-playfair)', color: 'var(--terra)' }}
            >
              $500k–$1M
            </div>
            <p className="text-[12px] leading-[1.7]" style={{ color: 'var(--txtl)' }}>
              Custo de engenharia para um app equivalente ao WhatsApp. Prazo: 6–9 meses.
            </p>
          </div>
          <div
            className="rounded-2xl border p-6"
            style={{ borderColor: 'rgba(212,150,14,0.3)', background: 'rgba(212,150,14,0.06)' }}
          >
            <div className="mb-2 text-[9px] font-bold uppercase tracking-[2.5px]" style={{ color: 'var(--gold)' }}>
              SpaceO Technologies · 2025
            </div>
            <div
              className="mb-2 text-[32px] font-bold leading-none"
              style={{ fontFamily: 'var(--font-playfair)', color: 'var(--gold)' }}
            >
              $80k–$300k+
            </div>
            <p className="text-[12px] leading-[1.7]" style={{ color: 'var(--txtl)' }}>
              App de mensagens complexo. Prazo: 8–12 meses.
            </p>
          </div>
        </div>
        <div
          className="flex items-start gap-4 rounded-2xl border p-5"
          style={{ borderColor: 'rgba(111,168,118,0.3)', background: 'rgba(111,168,118,0.06)' }}
        >
          <span className="shrink-0 text-[20px]">💡</span>
          <p className="text-[13px] font-semibold leading-[1.85]" style={{ color: 'var(--txt)' }}>
            {buildCostNote}
          </p>
        </div>
      </div>

      {/* ── 4. Adoption science ── */}
      <div className="mb-14">
        <Divider label="Ciência da Adoção — Por Que o Canal Importa" />
        <div
          className="rounded-2xl border p-6"
          style={{ borderColor: 'rgba(8,145,178,0.3)', background: 'rgba(8,145,178,0.05)' }}
        >
          <div className="mb-3 text-[10px] font-bold uppercase tracking-[2.5px]" style={{ color: 'var(--p)' }}>
            Yeo &amp; Keske · Frontiers in Sustainable Food Systems · 2024
          </div>
          <p className="mb-4 text-[13px] leading-[1.9]" style={{ color: 'var(--txtl)' }}>
            Principais barreiras à adoção de tecnologia digital na agricultura: (1) economia/escala, (2) expectativas de desempenho, (3) <span className="font-bold" style={{ color: 'var(--txt)' }}>exigências de esforço e mudança de fluxo de trabalho</span>. Cita diretamente: <em>"Farmers comfortable with spreadsheets and manual processes showed reluctance toward systems requiring workflow changes."</em>
          </p>
          <div
            className="rounded-xl border px-5 py-4"
            style={{ borderColor: 'rgba(8,145,178,0.2)', background: 'rgba(8,145,178,0.08)' }}
          >
            <p className="text-[12.5px] font-bold leading-[1.65]" style={{ color: 'var(--txt)' }}>
              A implicação: agricultores já fluentes no WhatsApp (96% de penetração rural, Embrapa) não enfrentam nenhuma barreira de mudança de fluxo. Um app novo exige aprender, baixar, criar conta, formar hábito — cada passo é um ponto de abandono.
            </p>
          </div>
        </div>
      </div>

      {/* ── 5. Global precedents ── */}
      <div className="mb-14">
        <Divider label="Precedente Global — Todo Sistema Comparável Usa Plataformas de Mensagens" />
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-5 mb-6">
          {precedents.map((p, i) => (
            <PrecedentCard key={i} p={p} index={i} />
          ))}
        </div>
        <div
          className="flex items-start gap-4 rounded-2xl border p-5"
          style={{ borderColor: 'rgba(200,85,48,0.3)', background: 'rgba(200,85,48,0.05)' }}
        >
          <span className="shrink-0 text-[20px]">🎯</span>
          <p className="text-[13px] font-semibold leading-[1.85]" style={{ color: 'var(--txt)' }}>
            A escolha não é &ldquo;WhatsApp ou soberania&rdquo;. É &ldquo;WhatsApp ou zero adoção&rdquo;. Todo sistema de IA agrícola de sucesso — incluindo o da própria EMBRAPA — escolheu o WhatsApp.
          </p>
        </div>
      </div>

      {/* ── 6. Architecture / sovereignty argument ── */}
      <div className="mb-14">
        <Divider label="Onde a Soberania Realmente Reside — Argumento de Arquitetura" />

        {/* Layer diagram */}
        <div className="mb-6 flex flex-col gap-2">
          {[
            { label: 'AgroLinguaBR Corpus', sub: 'CC BY-NC-SA 4.0 · DOI · repositório institucional brasileiro', color: 'var(--terra)',  border: 'rgba(200,85,48,0.35)',  bg: 'rgba(200,85,48,0.07)' },
            { label: 'Modelo LLM Fine-tuned', sub: 'CC BY-NC-SA 4.0 · pesos em infraestrutura brasileira',       color: 'var(--gold)',   border: 'rgba(212,150,14,0.35)', bg: 'rgba(212,150,14,0.07)' },
            { label: 'AgroAPI',              sub: 'Servidores brasileiros · propriedade da ICT executora',         color: 'var(--sage)',   border: 'rgba(111,168,118,0.35)',bg: 'rgba(111,168,118,0.07)'},
            { label: 'Coopera Digital',      sub: 'Dados armazenados no Brasil · exportáveis JSON/CSV',            color: 'var(--p)',      border: 'rgba(74,148,86,0.35)',  bg: 'rgba(74,148,86,0.07)'  },
            { label: 'WhatsApp (canal)',     sub: 'Configuração — não arquitetura. Substituível por reconfigu­ração, não reescrita.', color: 'var(--txtll)', border: 'var(--bdr-strong)', bg: 'var(--bg-raised)' },
          ].map((layer, i) => (
            <div
              key={i}
              className="flex items-center gap-4 rounded-xl border px-5 py-3.5"
              style={{ borderColor: layer.border, background: layer.bg }}
            >
              <div
                className="shrink-0 flex h-7 w-7 items-center justify-center rounded-full text-[11px] font-bold"
                style={{ background: layer.border, color: layer.color }}
              >
                {i + 1}
              </div>
              <div className="flex-1 min-w-0">
                <div className="text-[12.5px] font-bold leading-snug" style={{ color: i < 4 ? 'var(--txt)' : 'var(--txtl)' }}>
                  {layer.label}
                </div>
                <div className="text-[10.5px] leading-[1.5]" style={{ color: 'var(--txtll)' }}>
                  {layer.sub}
                </div>
              </div>
              {i < 4 && (
                <span
                  className="shrink-0 rounded-full border px-2.5 py-0.5 text-[9px] font-bold uppercase tracking-[2px]"
                  style={{ borderColor: layer.border, color: layer.color, background: 'rgba(0,0,0,0.2)' }}
                >
                  Soberano
                </span>
              )}
            </div>
          ))}
        </div>

        <div
          className="rounded-2xl border p-6"
          style={{ borderColor: 'rgba(212,150,14,0.3)', background: 'rgba(212,150,14,0.05)' }}
        >
          <p className="text-[13px] leading-[1.9]" style={{ color: 'var(--txtl)' }}>
            {sovereigntyArgument}
          </p>
        </div>

        {/* The analogy */}
        <div
          className="mt-5 flex items-start gap-4 rounded-2xl border p-5"
          style={{ borderColor: 'rgba(111,168,118,0.3)', background: 'rgba(111,168,118,0.06)' }}
        >
          <span className="shrink-0 text-[20px]">⚡</span>
          <p className="text-[13px] leading-[1.85]" style={{ color: 'var(--txt)' }}>
            <span className="font-bold" style={{ color: 'var(--sage)' }}>Analogia: </span>
            A rede elétrica brasileira usa cabos fabricados no exterior. A soberania do sistema energético está em quem controla as usinas — não em quem fabricou os cabos.
          </p>
        </div>
      </div>

      {/* ── 7. What would actually compromise sovereignty ── */}
      <div className="mb-14">
        <Divider label="O Que Comprometeria a Soberania — e O Que Não Compromete" />
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
          <div
            className="rounded-2xl border p-6"
            style={{ borderColor: 'rgba(200,85,48,0.35)', background: 'rgba(200,85,48,0.06)' }}
          >
            <div className="mb-3 text-[10px] font-bold uppercase tracking-[2.5px]" style={{ color: 'var(--terra)' }}>
              ❌ Comprometeria Soberania
            </div>
            <ul className="flex flex-col gap-2.5">
              {[
                'Usar API da OpenAI para inferência — cada consulta de agricultor dependeria de empresa estrangeira',
                'Corpus AgroLinguaBR sob licença MIT — permitiria uso comercial irrestrito por Sinong, AgriLLM, etc.',
                'Armazenar dados do Coopera Digital em SaaS estrangeiro — dados de cooperativas brasileiras em servidores externos',
              ].map((item, i) => (
                <li key={i} className="flex items-start gap-2.5">
                  <span className="mt-0.5 shrink-0 text-[12px]">⛔</span>
                  <span className="text-[12px] leading-[1.65]" style={{ color: 'var(--txtl)' }}>{item}</span>
                </li>
              ))}
            </ul>
          </div>
          <div
            className="rounded-2xl border p-6"
            style={{ borderColor: 'rgba(111,168,118,0.35)', background: 'rgba(111,168,118,0.06)' }}
          >
            <div className="mb-3 text-[10px] font-bold uppercase tracking-[2.5px]" style={{ color: 'var(--sage)' }}>
              ✅ Não Compromete Soberania
            </div>
            <ul className="flex flex-col gap-2.5">
              {[
                'Usar WhatsApp como canal de mensagens — assim como EMBRAPA, Farmer.Chat e Darli AI',
                'Backend agnóstico de canal — o mesmo motor de inferência pode migrar para qualquer outro canal por reconfiguração',
                'Toda inteligência, todos os dados e todos os modelos permanecem em infraestrutura brasileira',
              ].map((item, i) => (
                <li key={i} className="flex items-start gap-2.5">
                  <span className="mt-0.5 shrink-0 text-[12px]">✅</span>
                  <span className="text-[12px] leading-[1.65]" style={{ color: 'var(--txtl)' }}>{item}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>

      {/* ── 8. Honest risk table ── */}
      <div className="mb-14">
        <Divider label="Reconhecimento Honesto de Risco — e Mitigações" />
        <div className="flex flex-col gap-3">
          {/* table header */}
          <div
            className="hidden sm:grid items-center gap-4 rounded-xl px-5 py-2.5 text-[9px] font-bold uppercase tracking-[2.5px]"
            style={{ gridTemplateColumns: '1fr 1.5fr auto', background: 'var(--bg-raised)', color: 'var(--txtll)', border: '1px solid var(--bdr)' }}
          >
            <span>Risco</span>
            <span>Mitigação</span>
            <span>Severidade</span>
          </div>
          {risks.map((r, i) => (
            <RiskRow key={i} risk={r} />
          ))}
        </div>
      </div>

      {/* ── 9. Bibliography ── */}
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
