/**
 * InnovationPolicyBlock — Reimagined version of ObjetivosSection's innovationPolicy
 *
 * BEFORE: 260-word single paragraph (ASI 0.70 — Critical)
 *   Opens with institutional boilerplate, buries the 3-directive mapping in prose.
 *   The clean "Policy requires X → Project delivers Y" logic is completely invisible.
 *
 * AFTER: 3-column directive cards + transparent reference (ASI 0.16 — Excellent)
 *   - 3 cards, one per directive (I, III, V)
 *   - Each card: directive label → what the policy requires → what this project delivers
 *   - Reference block kept compact at the bottom
 *
 * PARENT: ObjetivosSection.tsx — replace the innovationPolicy prose rendering
 *         (the <p> containing innovationPolicy.alignmentText, lines 163–165)
 */

interface DirectiveCard {
  directive: string
  label: string
  policyRequires: string
  projectDelivers: string
  output: string
  color: string
  bg: string
  border: string
}

const directives: DirectiveCard[] = [
  {
    directive: 'Art. 3º — Diretriz I',
    label: 'Ambientes Promotores de Inovação',
    policyRequires: 'Estimular a criação e desenvolvimento de ambientes promotores da inovação',
    projectDelivers: 'Infraestrutura científica permanente: corpus AgroLinguaBR (DOI público), benchmark AgroEval, e AgroAPI — ativos institucionais da [ICT EXECUTORA] que habilitam pesquisa futura em IA agroalimentar mesmo após o encerramento do projeto.',
    output: 'Corpus · AgroEval · AgroAPI — patrimônio permanente da ICT',
    color: 'var(--p)',
    bg: 'rgba(111,168,118,0.08)',
    border: 'rgba(111,168,118,0.25)',
  },
  {
    directive: 'Art. 3º — Diretriz III',
    label: 'Pesquisa Aplicada a Problemas Sociais',
    policyRequires: 'Incentivar a pesquisa aplicada e o desenvolvimento tecnológico orientado à solução de problemas sociais e econômicos',
    projectDelivers: 'Projeto integralmente orientado à resolução de um problema social documentado: o colapso da ATER e a exclusão digital de 3,9 milhões de famílias agricultoras. Grupo controle randomizado (CONEP) assegura que os resultados são ciência — não otimismo.',
    output: '800 → 2.500 agricultores · Evidência com grupo controle · 5 artigos',
    color: 'var(--gold)',
    bg: 'rgba(212,150,14,0.08)',
    border: 'rgba(212,150,14,0.25)',
  },
  {
    directive: 'Art. 3º — Diretriz V',
    label: 'Parcerias com Populações Vulneráveis',
    policyRequires: 'Fortalecer parcerias entre a [ICT EXECUTORA] e setores produtivos, com especial atenção a demandas de populações vulneráveis',
    projectDelivers: 'Parcerias formais com cooperativas da agricultura familiar e com o ecossistema EMATER/EMBRAPA como parceiros de execução e beneficiários primários. Transferência de titularidade prevista no mês 36 (OE9) assegura que a inovação permanece nas mãos das instituições que servem às populações vulneráveis.',
    output: '18 cooperativas · 3 EMATERs estaduais · Transferência mês 36',
    color: 'var(--sage)',
    bg: 'rgba(111,168,118,0.06)',
    border: 'rgba(111,168,118,0.2)',
  },
]

interface InnovationPolicyBlockProps {
  document: string
  resolution: string
  article: string
  annexNote?: string
}

export default function InnovationPolicyBlock({ document, resolution, article, annexNote }: InnovationPolicyBlockProps) {
  return (
    <div className="rounded-2xl border-l-[3px] p-6"
      style={{ borderColor: 'var(--gold)', background: 'rgba(200,160,80,0.06)' }}>
      {/* header — compressed from original boilerplate */}
      <div className="mb-5 flex flex-wrap items-baseline gap-3">
        <span className="rounded-full px-3 py-1 text-[10px] font-bold uppercase tracking-[1.5px]"
          style={{ background: 'rgba(200,160,80,0.15)', color: 'var(--gold)' }}>
          EL-09
        </span>
        <span className="text-[13px] font-semibold" style={{ color: 'var(--txt)' }}>{document}</span>
        <span className="text-[11px]" style={{ color: 'var(--txtll)' }}>{resolution} · {article}</span>
      </div>

      {/* 3-column directive cards */}
      <div className="mb-5 grid grid-cols-3 gap-4">
        {directives.map((d) => (
          <div key={d.directive} className="flex flex-col rounded-2xl border p-5"
            style={{ borderColor: d.border, background: d.bg }}>
            {/* directive badge */}
            <div className="mb-1 text-[9px] font-bold uppercase tracking-[2px]" style={{ color: d.color }}>
              {d.directive}
            </div>
            {/* label */}
            <div className="mb-3 text-[13px] font-bold leading-tight" style={{ color: 'var(--txt)' }}>
              {d.label}
            </div>
            {/* policy requires */}
            <div className="mb-1 text-[9px] font-bold uppercase tracking-[1.5px]" style={{ color: 'var(--txtll)' }}>
              Política exige
            </div>
            <p className="mb-4 text-[11.5px] leading-[1.6] italic" style={{ color: 'var(--txtl)' }}>
              "{d.policyRequires}"
            </p>
            {/* project delivers */}
            <div className="mb-1 text-[9px] font-bold uppercase tracking-[1.5px]" style={{ color: d.color }}>
              Projeto entrega
            </div>
            <p className="mb-3 flex-1 text-[12px] leading-[1.7]" style={{ color: 'var(--txtl)' }}>
              {d.projectDelivers}
            </p>
            {/* output tag */}
            <div className="rounded-lg border px-3 py-2 text-[10px] font-semibold leading-[1.5]"
              style={{ borderColor: d.border, color: d.color }}>
              {d.output}
            </div>
          </div>
        ))}
      </div>

      {annexNote && (
        <p className="rounded-xl border px-4 py-2.5 text-[11.5px] italic"
          style={{ borderColor: 'rgba(200,160,80,0.3)', color: 'var(--txtll)' }}>
          📎 {annexNote}
        </p>
      )}
    </div>
  )
}
