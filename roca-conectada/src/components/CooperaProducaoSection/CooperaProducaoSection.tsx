import { AcronymText } from '@/components/ui/AcronymText'
import type {
  S16Data,
  CooperaProducaoStat,
  CooperaApiEndpoint,
  CooperaTimelineStep,
  CooperaProducaoCitation,
} from '@/types/proposal'

export const componentMeta = { slug: 'coopera-producao-section', label: 'Coopera Digital em Produção' }

export type CooperaProducaoSectionProps = S16Data

/* ─── colour maps ─────────────────────────────────────────────────────────── */

const statColors: Record<CooperaProducaoStat['colorVariant'], { border: string; bg: string; text: string; valueBg: string }> = {
  terra: {
    border: 'rgba(200,85,48,0.35)',
    bg:     'rgba(200,85,48,0.07)',
    text:   'var(--terra)',
    valueBg:'rgba(200,85,48,0.12)',
  },
  gold: {
    border: 'rgba(212,150,14,0.35)',
    bg:     'rgba(212,150,14,0.07)',
    text:   'var(--gold)',
    valueBg:'rgba(212,150,14,0.12)',
  },
  sage: {
    border: 'rgba(111,168,118,0.35)',
    bg:     'rgba(111,168,118,0.07)',
    text:   'var(--sage)',
    valueBg:'rgba(111,168,118,0.12)',
  },
  green: {
    border: 'rgba(74,148,86,0.35)',
    bg:     'rgba(74,148,86,0.07)',
    text:   'var(--p)',
    valueBg:'rgba(74,148,86,0.12)',
  },
}

const actorMeta: Record<CooperaTimelineStep['actor'], { label: string; color: string; bg: string; border: string }> = {
  farmer:  { label: 'Agricultora',  color: 'var(--terra)', bg: 'rgba(200,85,48,0.08)',   border: 'rgba(200,85,48,0.25)'  },
  manager: { label: 'Gestor Coop.', color: 'var(--gold)',  bg: 'rgba(212,150,14,0.08)',  border: 'rgba(212,150,14,0.25)' },
  system:  { label: 'Sistema',      color: 'var(--sage)',  bg: 'rgba(111,168,118,0.08)', border: 'rgba(111,168,118,0.25)'},
}

const endpointColors = [
  { border: 'rgba(74,148,86,0.3)',    bg: 'rgba(74,148,86,0.06)',    text: 'var(--p)'    },
  { border: 'rgba(212,150,14,0.3)',   bg: 'rgba(212,150,14,0.06)',   text: 'var(--gold)' },
  { border: 'rgba(111,168,118,0.3)',  bg: 'rgba(111,168,118,0.06)',  text: 'var(--sage)' },
  { border: 'rgba(200,85,48,0.3)',    bg: 'rgba(200,85,48,0.06)',    text: 'var(--terra)'},
]

/* ─── sub-components ──────────────────────────────────────────────────────── */

function StatCard({ stat }: { stat: CooperaProducaoStat }) {
  const c = statColors[stat.colorVariant]
  return (
    <div
      className="flex flex-col rounded-2xl border overflow-hidden"
      style={{ borderColor: c.border, background: 'var(--bg-card)' }}
    >
      <div className="px-6 pt-6 pb-4" style={{ background: c.bg }}>
        <div
          className="mb-3 inline-block rounded-xl px-4 py-2 text-[28px] sm:text-[34px] lg:text-[40px] font-black leading-none tracking-tight"
          style={{ fontFamily: 'var(--font-playfair)', color: c.text, background: c.valueBg }}
        >
          {stat.value}
        </div>
        <p className="text-[13px] font-semibold leading-[1.5]" style={{ color: 'var(--txt)' }}>
          <AcronymText text={stat.label} />
        </p>
      </div>
      <div className="px-6 py-3">
        <p className="text-[10.5px] italic leading-[1.6]" style={{ color: 'var(--txtll)' }}>
          <AcronymText text={stat.source} />
        </p>
      </div>
    </div>
  )
}

function EndpointCard({ ep, index }: { ep: CooperaApiEndpoint; index: number }) {
  const c = endpointColors[index % endpointColors.length]
  return (
    <div
      className="flex flex-col gap-3 rounded-2xl border p-5"
      style={{ borderColor: c.border, background: 'var(--bg-card)' }}
    >
      <div className="flex items-center gap-3">
        <div
          className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl text-[18px]"
          style={{ background: c.bg, border: `1px solid ${c.border}` }}
        >
          {ep.icon}
        </div>
        <div>
          <div className="text-[9px] font-bold uppercase tracking-[2px]" style={{ color: c.text }}>
            Endpoint {ep.id}
          </div>
          <div className="text-[13px] font-bold leading-[1.3]" style={{ color: 'var(--txt)' }}>
            <AcronymText text={ep.title} />
          </div>
        </div>
      </div>
      <p className="text-[12.5px] leading-[1.75]" style={{ color: 'var(--txtl)' }}>
        <AcronymText text={ep.description} />
      </p>
    </div>
  )
}

function TimelineStep({ step, index, total }: { step: CooperaTimelineStep; index: number; total: number }) {
  const a = actorMeta[step.actor]
  const isLast = index === total - 1
  return (
    <div className="flex gap-4">
      {/* spine */}
      <div className="flex flex-col items-center" style={{ minWidth: 40 }}>
        <div
          className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full border-2 text-[11px] font-black"
          style={{ borderColor: a.color, background: a.bg, color: a.color }}
        >
          {index + 1}
        </div>
        {!isLast && (
          <div className="mt-1 w-[2px] flex-1" style={{ background: 'var(--bdr)', minHeight: 24 }} />
        )}
      </div>
      {/* content */}
      <div className={`flex-1 pb-6${isLast ? '' : ''}`}>
        <div className="flex flex-wrap items-center gap-2 mb-1">
          <span
            className="rounded border px-2 py-0.5 text-[9px] font-bold uppercase tracking-wider"
            style={{ borderColor: a.border, color: a.color, background: a.bg }}
          >
            {step.time}
          </span>
          <span
            className="rounded border px-2 py-0.5 text-[9px] font-bold uppercase tracking-wider"
            style={{ borderColor: a.border, color: a.color, background: 'transparent' }}
          >
            {a.label}
          </span>
        </div>
        <p className="text-[13.5px] font-semibold leading-[1.4]" style={{ color: 'var(--txt)' }}>
          <AcronymText text={step.event} />
        </p>
        <p className="mt-1 text-[12.5px] leading-[1.75]" style={{ color: 'var(--txtl)' }}>
          <AcronymText text={step.detail} />
        </p>
      </div>
    </div>
  )
}

function CitationCard({ cit }: { cit: CooperaProducaoCitation }) {
  return (
    <div
      className="flex flex-col gap-2 rounded-xl border p-4"
      style={{ borderColor: 'rgba(212,150,14,0.2)', background: 'rgba(212,150,14,0.04)' }}
    >
      <div className="flex items-start justify-between gap-3">
        <div className="flex-1 min-w-0">
          <p className="text-[11px] font-semibold leading-[1.5]" style={{ color: 'var(--txt)' }}>
            <AcronymText text={cit.title} />
          </p>
          <p className="mt-0.5 text-[10px]" style={{ color: 'var(--txtll)' }}>
            <AcronymText text={cit.authors} />
          </p>
        </div>
        <span
          className="shrink-0 rounded border px-2 py-0.5 text-[9px] font-bold tracking-wider whitespace-nowrap"
          style={{ borderColor: 'rgba(212,150,14,0.3)', color: 'var(--gold)', background: 'rgba(0,0,0,0.2)' }}
        >
          {cit.year}
        </span>
      </div>
      <div
        className="rounded-lg border px-3 py-2"
        style={{ borderColor: 'rgba(212,150,14,0.15)', background: 'rgba(0,0,0,0.15)' }}
      >
        <span className="text-[9px] font-bold uppercase tracking-[2px] mr-2" style={{ color: 'var(--gold)' }}>
          Achado-chave
        </span>
        <span className="text-[11px] leading-[1.6] font-semibold" style={{ color: 'var(--txtl)' }}>
          <AcronymText text={cit.keyFinding} />
        </span>
      </div>
      <div className="flex items-center gap-2 flex-wrap">
        <span className="text-[9.5px] italic" style={{ color: 'var(--txtll)' }}>
          <AcronymText text={cit.venue} />
        </span>
        {cit.doi && (
          <span className="text-[9px] font-mono" style={{ color: 'var(--txtll)' }}>
            · {cit.doi}
          </span>
        )}
      </div>
    </div>
  )
}

/* ─── section divider ──────────────────────────────────────────────────────── */
function SectionDivider({ label }: { label: string }) {
  return (
    <div className="my-12 flex items-center gap-3">
      <div className="h-px flex-1" style={{ background: 'var(--bdr)' }} />
      <span className="text-[9px] font-bold uppercase tracking-[2.5px]" style={{ color: 'var(--txtll)' }}>
        {label}
      </span>
      <div className="h-px flex-1" style={{ background: 'var(--bdr)' }} />
    </div>
  )
}

/* ─── main export ─────────────────────────────────────────────────────────── */

export default function CooperaProducaoSection({
  number,
  title,
  subtitle,
  headline,
  leadStats,
  gapStatement,
  apiEndpoints,
  timelineTitle,
  timelineSubtitle,
  timeline,
  conclusionStatement,
  citations,
}: CooperaProducaoSectionProps) {
  return (
    <section
      className="relative overflow-hidden px-4 py-10 sm:px-8 sm:py-14 lg:px-16 lg:py-20"
      style={{ background: 'var(--bg-alt)' }}
    >
      {/* Decorative background numeral */}
      <span
        aria-hidden
        className="pointer-events-none absolute right-6 top-4 select-none hidden sm:block text-[180px] font-bold leading-none opacity-[0.018]"
        style={{ fontFamily: 'var(--font-playfair)', color: 'var(--txt)' }}
      >
        16
      </span>

      {/* ── Section header ─────────────────────────────────────────────────── */}
      <div className="relative mb-14">
        <span
          className="mb-5 inline-flex items-center gap-2.5 rounded-full border px-4 py-1.5 text-[9px] font-bold uppercase tracking-[3px]"
          style={{ borderColor: 'var(--bdr)', background: 'rgba(237,229,211,0.04)', color: 'var(--txtll)' }}
        >
          {number}
        </span>
        {headline && (
          <p
            className="mb-3 text-[16px] sm:text-[19px] lg:text-[22px] font-bold italic leading-[1.2]"
            style={{ fontFamily: 'var(--font-playfair)', color: 'var(--terra)' }}
          >
            <AcronymText text={headline} />
          </p>
        )}
        <h2
          className="mb-3 text-[26px] sm:text-[34px] lg:text-[44px] font-bold leading-[1.05] tracking-[-0.3px]"
          style={{ fontFamily: 'var(--font-playfair)', color: 'var(--txt)' }}
        >
          <AcronymText text={title} />
        </h2>
        <p
          className="lg:max-w-[680px] text-[15px] italic leading-relaxed"
          style={{ fontFamily: 'var(--font-playfair)', color: 'var(--txtl)' }}
        >
          <AcronymText text={subtitle} />
        </p>
      </div>

      {/* ── Block 1: lead stats ────────────────────────────────────────────── */}
      <div className="mb-4 text-[9px] font-bold uppercase tracking-[2.5px]" style={{ color: 'var(--txtll)' }}>
        A Oportunidade Econômica — Dados de Base
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-3 gap-5">
        {leadStats.map((s, i) => (
          <StatCard key={i} stat={s} />
        ))}
      </div>

      {/* ── Block 2: the gap ───────────────────────────────────────────────── */}
      <SectionDivider label="O Hiato entre Lei e Realidade" />

      <div
        className="rounded-3xl border p-8"
        style={{ borderColor: 'rgba(200,85,48,0.3)', background: 'rgba(200,85,48,0.05)' }}
      >
        <div className="mb-4 flex items-center gap-3">
          <span
            className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full text-[15px] font-black"
            style={{ background: 'rgba(200,85,48,0.15)', color: 'var(--terra)' }}
          >
            !
          </span>
          <div className="text-[10px] font-bold uppercase tracking-[2.5px]" style={{ color: 'var(--terra)' }}>
            A Barreira Administrativa — Quantificada
          </div>
        </div>

        {/* Pull quote */}
        <blockquote
          className="mb-5 border-l-4 pl-5 text-[15px] sm:text-[18px] lg:text-[20px] font-bold italic leading-[1.4]"
          style={{ borderColor: 'var(--terra)', fontFamily: 'var(--font-playfair)', color: 'var(--txt)' }}
        >
          <AcronymText text={gapStatement} />
        </blockquote>

        {/* Gap detail cards */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
          <div className="rounded-2xl border p-5" style={{ borderColor: 'rgba(200,85,48,0.2)', background: 'rgba(200,85,48,0.06)' }}>
            <div className="mb-2 text-[28px] font-black leading-none" style={{ fontFamily: 'var(--font-playfair)', color: 'var(--terra)' }}>0%</div>
            <p className="text-[12px] font-semibold" style={{ color: 'var(--txt)' }}>
              São José do Egito (PE) — execução real do PNAE apesar de R$412.000 transferidos
            </p>
            <p className="mt-2 text-[10.5px] italic" style={{ color: 'var(--txtll)' }}>
              Gênero e Número, 2022 — investigação no Nordeste
            </p>
          </div>
          <div className="rounded-2xl border p-5" style={{ borderColor: 'rgba(200,85,48,0.2)', background: 'rgba(200,85,48,0.06)' }}>
            <div className="mb-2 text-[28px] font-black leading-none" style={{ fontFamily: 'var(--font-playfair)', color: 'var(--terra)' }}>43h/mês</div>
            <p className="text-[12px] font-semibold" style={{ color: 'var(--txt)' }}>
              Carga administrativa média do gestor de cooperativa: DAA, controle de lotes, certidões, retrabalho burocrático
            </p>
            <p className="mt-2 text-[10.5px] italic" style={{ color: 'var(--txtll)' }}>
              Levantamento nas 3 regiões-piloto — projetado reduzir para ~9h/mês
            </p>
          </div>
          <div className="rounded-2xl border p-5" style={{ borderColor: 'rgba(200,85,48,0.2)', background: 'rgba(200,85,48,0.06)' }}>
            <div className="mb-2 text-[28px] font-black leading-none" style={{ fontFamily: 'var(--font-playfair)', color: 'var(--terra)' }}>110 dias</div>
            <p className="text-[12px] font-semibold" style={{ color: 'var(--txt)' }}>
              Tempo médio entre entrega e pagamento: 30–120 dias de contratação (CONAB) + 30–60 dias de liquidação
            </p>
            <p className="mt-2 text-[10.5px] italic" style={{ color: 'var(--txtll)' }}>
              CONAB, Carta de Serviços — Apoio à Formação de Estoques
            </p>
          </div>
        </div>

        {/* Contrast: with Coopera Digital */}
        <div
          className="mt-5 flex items-start gap-4 rounded-2xl border p-5"
          style={{ borderColor: 'rgba(74,148,86,0.3)', background: 'rgba(74,148,86,0.06)' }}
        >
          <span className="shrink-0 text-[18px]">→</span>
          <div>
            <div className="mb-1 text-[9px] font-bold uppercase tracking-[2.5px]" style={{ color: 'var(--p)' }}>
              Com Coopera Digital
            </div>
            <p className="text-[13px] leading-[1.8]" style={{ color: 'var(--txtl)' }}>
              DAA gerada automaticamente. Rastreabilidade de lote desde o cadastro de plantio. Certidões monitoradas com alertas de vencimento.
              Agenda PNAE integrada. Pagamento em <strong style={{ color: 'var(--txt)' }}>35 dias</strong> — redução de 68% no prazo.
              Gestor passa de <strong style={{ color: 'var(--txt)' }}>43h para ~9h/mês</strong> — capacidade de atendimento +40% sem contratação adicional.
            </p>
          </div>
        </div>
      </div>

      {/* ── Block 3: cooperative capacity gap ─────────────────────────────── */}
      <SectionDivider label="O Déficit Cooperativo no Nordeste" />

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
        <div className="rounded-2xl border p-6" style={{ borderColor: 'rgba(212,150,14,0.3)', background: 'rgba(212,150,14,0.05)' }}>
          <div className="mb-3 text-[9px] font-bold uppercase tracking-[2.5px]" style={{ color: 'var(--gold)' }}>
            Taxa de Cooperativismo — Nordeste
          </div>
          <div className="mb-2 text-[42px] font-black leading-none" style={{ fontFamily: 'var(--font-playfair)', color: 'var(--gold)' }}>
            1,3%
          </div>
          <p className="text-[13px] leading-[1.7]" style={{ color: 'var(--txtl)' }}>
            Apenas 1,3% dos agricultores familiares do Nordeste estão em cooperativas — a menor taxa de qualquer região do Brasil.
            No plano nacional, a média já é baixa: 10,6%. Membros de cooperativas recebem assistência técnica em{' '}
            <strong style={{ color: 'var(--txt)' }}>taxa tripla</strong> em relação aos não-membros (58,2% vs 21%).
          </p>
          <p className="mt-3 text-[10.5px] italic" style={{ color: 'var(--txtll)' }}>
            Silva & Nunes, RESR 61(2), 2023 · DOI: 10.1590/1806-9479.2021.252661
          </p>
        </div>
        <div className="rounded-2xl border p-6" style={{ borderColor: 'rgba(111,168,118,0.3)', background: 'rgba(111,168,118,0.05)' }}>
          <div className="mb-3 text-[9px] font-bold uppercase tracking-[2.5px]" style={{ color: 'var(--sage)' }}>
            Concentração da Pobreza Rural × Cooperativismo
          </div>
          <div className="mb-2 text-[42px] font-black leading-none" style={{ fontFamily: 'var(--font-playfair)', color: 'var(--sage)' }}>
            60% / 5,9%
          </div>
          <p className="text-[13px] leading-[1.7]" style={{ color: 'var(--txtl)' }}>
            O Nordeste concentra 60% da pobreza agrícola extrema do Brasil — mas apenas 5,9% das propriedades familiares afiliadas a cooperativas.
            Cooperativismo triplica o acesso à ATER. A região que mais precisa é a que menos tem.
          </p>
          <p className="mt-3 text-[10.5px] italic" style={{ color: 'var(--txtll)' }}>
            IPEA / Vieira Filho & Ramos, 2021 — Cooperativismo e Eficiência na Agricultura Familiar
          </p>
        </div>
      </div>

      {/* ── Block 4: API integration ───────────────────────────────────────── */}
      <SectionDivider label="Integração Técnica — AgroAPI × Coopera Digital" />

      <div
        className="mb-8 overflow-hidden rounded-3xl border"
        style={{ borderColor: 'var(--bdr)', background: 'var(--bg-card)' }}
      >
        {/* header bar */}
        <div
          className="border-b px-6 py-5"
          style={{ borderColor: 'var(--bdr)', background: 'rgba(237,229,211,0.03)' }}
        >
          <div className="flex flex-wrap items-center gap-3">
            <div>
              <div className="text-[9px] font-bold uppercase tracking-[2.5px]" style={{ color: 'var(--txtll)' }}>
                Arquitetura REST — OAuth 2.0 + API key por cooperativa
              </div>
              <p className="mt-1 text-[13px]" style={{ color: 'var(--txtl)' }}>
                Cache offline garante funcionamento durante quedas de conectividade. Cada chamada gera trilha de auditoria
                com timestamp + ID do agricultor, apresentável a auditores MAPA/CONAB.
              </p>
            </div>
          </div>
        </div>

        {/* flow diagram */}
        <div className="px-6 py-6">
          <div className="mb-6 flex flex-wrap items-center gap-2 text-[12px] font-semibold">
            <span
              className="rounded-lg border px-3 py-1.5"
              style={{ borderColor: 'rgba(200,85,48,0.3)', color: 'var(--terra)', background: 'rgba(200,85,48,0.08)' }}
            >
              Agricultor (WhatsApp)
            </span>
            <span style={{ color: 'var(--txtll)' }}>→</span>
            <span
              className="rounded-lg border px-3 py-1.5"
              style={{ borderColor: 'rgba(212,150,14,0.3)', color: 'var(--gold)', background: 'rgba(212,150,14,0.08)' }}
            >
              AgroAssistente
            </span>
            <span style={{ color: 'var(--txtll)' }}>↔</span>
            <span
              className="rounded-lg border px-3 py-1.5 font-black"
              style={{ borderColor: 'rgba(74,148,86,0.4)', color: 'var(--p)', background: 'rgba(74,148,86,0.10)' }}
            >
              AgroAPI
            </span>
            <span style={{ color: 'var(--txtll)' }}>↔</span>
            <span
              className="rounded-lg border px-3 py-1.5"
              style={{ borderColor: 'rgba(111,168,118,0.3)', color: 'var(--sage)', background: 'rgba(111,168,118,0.08)' }}
            >
              Coopera Digital
            </span>
            <span style={{ color: 'var(--txtll)' }}>→</span>
            <span
              className="rounded-lg border px-3 py-1.5"
              style={{ borderColor: 'rgba(212,150,14,0.3)', color: 'var(--gold)', background: 'rgba(212,150,14,0.08)' }}
            >
              PAA / PNAE
            </span>
          </div>

          {/* endpoint cards */}
          <div className="mb-3 text-[9px] font-bold uppercase tracking-[2.5px]" style={{ color: 'var(--txtll)' }}>
            Quatro grupos de endpoints consumidos pelo Coopera Digital
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {apiEndpoints.map((ep, i) => (
              <EndpointCard key={ep.id} ep={ep} index={i} />
            ))}
          </div>
        </div>
      </div>

      {/* ── Block 5: Maria das Dores timeline ─────────────────────────────── */}
      <SectionDivider label="Jornada do Usuário — Maria das Dores, Crateús-CE" />

      <div
        className="overflow-hidden rounded-3xl border"
        style={{ borderColor: 'rgba(200,85,48,0.25)', background: 'var(--bg-card)' }}
      >
        {/* header */}
        <div
          className="border-b px-6 py-5"
          style={{ borderColor: 'rgba(200,85,48,0.15)', background: 'rgba(200,85,48,0.04)' }}
        >
          <div className="text-[9px] font-bold uppercase tracking-[2.5px] mb-1" style={{ color: 'var(--terra)' }}>
            Cenário Concreto
          </div>
          <h3
            className="mb-1 text-[18px] sm:text-[22px] font-bold leading-[1.2]"
            style={{ fontFamily: 'var(--font-playfair)', color: 'var(--txt)' }}
          >
            <AcronymText text={timelineTitle} />
          </h3>
          <p className="text-[13px] italic" style={{ color: 'var(--txtl)' }}>
            <AcronymText text={timelineSubtitle} />
          </p>
        </div>

        {/* timeline steps */}
        <div className="p-6">
          {timeline.map((step, i) => (
            <TimelineStep key={i} step={step} index={i} total={timeline.length} />
          ))}
        </div>

        {/* without blocks */}
        <div
          className="mx-6 mb-6 grid grid-cols-1 sm:grid-cols-2 gap-4 rounded-2xl border p-5"
          style={{ borderColor: 'var(--bdr)', background: 'rgba(237,229,211,0.02)' }}
        >
          <div>
            <div className="mb-2 text-[9px] font-bold uppercase tracking-[2px]" style={{ color: 'var(--terra)' }}>
              Sem Coopera Digital
            </div>
            <ul className="flex flex-col gap-1.5 text-[12.5px]" style={{ color: 'var(--txtl)' }}>
              <li className="flex gap-2"><span style={{ color: 'var(--terra)' }}>✕</span> Maria tem um chatbot — sem documentação automatizada</li>
              <li className="flex gap-2"><span style={{ color: 'var(--terra)' }}>✕</span> Sem aceleração de pagamento — média 110+ dias</li>
              <li className="flex gap-2"><span style={{ color: 'var(--terra)' }}>✕</span> Sem planejamento coletivo de safra</li>
              <li className="flex gap-2"><span style={{ color: 'var(--terra)' }}>✕</span> Sem alertas proativos de pragas no bioma</li>
            </ul>
          </div>
          <div>
            <div className="mb-2 text-[9px] font-bold uppercase tracking-[2px]" style={{ color: 'var(--terra)' }}>
              Sem AgroAssistente
            </div>
            <ul className="flex flex-col gap-1.5 text-[12.5px]" style={{ color: 'var(--txtl)' }}>
              <li className="flex gap-2"><span style={{ color: 'var(--terra)' }}>✕</span> Coopera Digital tem gestão — sem inteligência agronômica</li>
              <li className="flex gap-2"><span style={{ color: 'var(--terra)' }}>✕</span> Decisões de plantio sem base de evidência</li>
              <li className="flex gap-2"><span style={{ color: 'var(--terra)' }}>✕</span> Diagnóstico veterinário/fitossanitário aguarda técnico ATER (3–4 meses)</li>
              <li className="flex gap-2"><span style={{ color: 'var(--terra)' }}>✕</span> O ecossistema vale a combinação — não as partes isoladas</li>
            </ul>
          </div>
        </div>
      </div>

      {/* ── Block 6: digital extension ROI ────────────────────────────────── */}
      <SectionDivider label="Retorno sobre Extensão Digital — Evidência Internacional" />

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-5 mb-8">
        <div
          className="rounded-2xl border p-6"
          style={{ borderColor: 'rgba(74,148,86,0.3)', background: 'rgba(74,148,86,0.05)' }}
        >
          <div className="mb-3 text-[9px] font-bold uppercase tracking-[2.5px]" style={{ color: 'var(--p)' }}>
            PLoS One 2021 — Rajkhowa & Qaim (n=1.028)
          </div>
          <div className="mb-3 flex gap-4">
            <div>
              <div className="text-[36px] font-black leading-none" style={{ fontFamily: 'var(--font-playfair)', color: 'var(--p)' }}>
                +29%
              </div>
              <div className="text-[11px]" style={{ color: 'var(--txtl)' }}>renda de lavoura (PSM)</div>
            </div>
            <div>
              <div className="text-[36px] font-black leading-none" style={{ fontFamily: 'var(--font-playfair)', color: 'var(--sage)' }}>
                +18%
              </div>
              <div className="text-[11px]" style={{ color: 'var(--txtl)' }}>produtividade</div>
            </div>
          </div>
          <p className="text-[12.5px] leading-[1.75]" style={{ color: 'var(--txtl)' }}>
            Modelo de entrega: <strong style={{ color: 'var(--txt)' }}>1 gestor de cooperativa digitalmente equipado atendendo ~1.000 associados</strong> — análogo direto ao Coopera Digital.
            Resultados controlados por propensity score matching.
          </p>
          <p className="mt-2 text-[10px] font-mono" style={{ color: 'var(--txtll)' }}>
            DOI: 10.1371/journal.pone.0259319
          </p>
        </div>
        <div
          className="rounded-2xl border p-6"
          style={{ borderColor: 'rgba(212,150,14,0.3)', background: 'rgba(212,150,14,0.05)' }}
        >
          <div className="mb-3 text-[9px] font-bold uppercase tracking-[2.5px]" style={{ color: 'var(--gold)' }}>
            World Bank Digital Agriculture Playbook 2025
          </div>
          <div className="mb-3">
            <div className="text-[36px] font-black leading-none" style={{ fontFamily: 'var(--font-playfair)', color: 'var(--gold)' }}>
              9:1–15:1
            </div>
            <div className="text-[11px]" style={{ color: 'var(--txtl)' }}>retorno sobre custo de assessoria digital</div>
          </div>
          <p className="text-[12.5px] leading-[1.75]" style={{ color: 'var(--txtl)' }}>
            Mensagens digitais de assessoria em períodos de alta precipitação elevaram renda em{' '}
            <strong style={{ color: 'var(--txt)' }}>USD 30–48 por agricultor</strong>.
            Razão benefício–custo de assessoria digital agrícola: 9:1 a 15:1.
          </p>
          <p className="mt-2 text-[10px] font-mono" style={{ color: 'var(--txtll)' }}>
            P508004-f943a09b — World Bank, 2025
          </p>
        </div>
      </div>

      {/* ── Conclusion callout ─────────────────────────────────────────────── */}
      <div
        className="rounded-3xl border p-8"
        style={{ borderColor: 'rgba(212,150,14,0.35)', background: 'rgba(212,150,14,0.05)' }}
      >
        <div className="mb-3 flex items-center gap-2">
          <span aria-hidden className="text-[16px]">⚙️</span>
          <div className="text-[10px] font-bold uppercase tracking-[2.5px]" style={{ color: 'var(--gold)' }}>
            Síntese — Por Que o Ecossistema Fecha o Ciclo
          </div>
        </div>
        <p className="text-[13.5px] leading-[1.9]" style={{ color: 'var(--txtl)' }}>
          <AcronymText text={conclusionStatement} />
        </p>
      </div>

      {/* ── Block 7: bibliography ──────────────────────────────────────────── */}
      <SectionDivider label="Referências Bibliográficas" />

      <div>
        <div className="mb-4 text-[9px] font-bold uppercase tracking-[2.5px]" style={{ color: 'var(--txtll)' }}>
          Publicações que fundamentam esta seção
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
          {citations.map((cit, i) => (
            <CitationCard key={i} cit={cit} />
          ))}
        </div>
      </div>
    </section>
  )
}
