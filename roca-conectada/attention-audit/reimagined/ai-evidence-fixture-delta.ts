/**
 * New data shape for the reimagined AI Evidence block.
 *
 * REPLACES: aiEvidenceSection.body (string) in ProblemaSection.fixture.ts
 * USED BY:  AiEvidenceBlock.tsx
 *
 * All data comes directly from the original body text — nothing is invented.
 * This is a structural transformation, not a content change.
 */

export interface AiEvidenceSectionData {
  title: string
  hook?: string
  metricCallouts?: Array<{
    value: string
    label: string
    color?: string
  }>
  caseStudies?: Array<{
    flag: string
    country: string
    project: string
    bigStat: { value: string; label: string }
    details: string[]
    year: string
    source: string
    accentColor: string
  }>
  globalInvestment?: Array<{
    actor: string
    label: string
    amount: string
    year: string
    color: string
  }>
  corpusUrgency?: {
    title: string
    body: string
    timeline: Array<{
      year: string
      event: string
      type: 'now' | 'closing' | 'lost'
    }>
  }
}

export const aiEvidenceSectionData: AiEvidenceSectionData = {
  title: 'A IA Já Provou no Campo — a Corrida Global Começou Sem o Brasil',

  hook: 'A pergunta não é se a IA resolve — os dados do campo já responderam isso. A pergunta é: quando o Brasil entra nessa corrida?',

  // 4 key numbers visible immediately on load — extracted from buried prose
  metricCallouts: [
    {
      value: '+21%',
      label: 'produtividade documentada · Índia · 18 meses · dados publicados [b21]',
      color: 'var(--p)',
    },
    {
      value: '110K',
      label: 'agricultores · Darli AI · Ghana · 8 meses · WhatsApp · 27 línguas [b22]',
      color: 'var(--sage)',
    },
    {
      value: '+18–29%',
      label: 'renda agrícola · meta-análise PLOS ONE · 1.100 domicílios · grupo controle [b23]',
      color: 'var(--gold)',
    },
    {
      value: '4',
      label: 'países com LLM agrícola soberano — antes do Brasil entrar',
      color: 'var(--terra)',
    },
  ],

  // 3 case study cards — each case study as a standalone scannable unit
  caseStudies: [
    {
      flag: '🇮🇳',
      country: 'Índia — Telangana',
      project: 'Saagu Baagu',
      bigStat: { value: '+21%', label: 'produtividade documentada' },
      details: [
        '7.000 agricultores familiares de pimenta',
        '18 meses acompanhados · 3 ciclos de safra completos',
        '−9% uso de defensivos · −5% fertilizantes',
        '+US$ 800/acre por ciclo (≈ US$ 1.975/hectare/ciclo) de renda líquida',
      ],
      year: '2024',
      source: '[b21] Estudo publicado 2024 — Khammam, Telangana',
      accentColor: 'var(--p)',
    },
    {
      flag: '🇬🇭',
      country: 'Gana / África Ocidental',
      project: 'Darli AI — Farmerline',
      bigStat: { value: '27', label: 'línguas regionais suportadas' },
      details: [
        '110.000 agricultores ativos em 8 meses de operação',
        'Assistente agrícola via WhatsApp — sem app adicional',
        'Casos documentados: salvamento de 50%+ de safras via diagnóstico por foto',
        'TIME Best Inventions 2024',
      ],
      year: 'mar/2024',
      source: '[b22] Farmerline — lançado março 2024',
      accentColor: 'var(--sage)',
    },
    {
      flag: '📊',
      country: 'Índia — meta-análise nacional',
      project: 'PLOS ONE — RCT com grupo controle',
      bigStat: { value: '+18–29%', label: 'renda agrícola (adotantes vs. controle)' },
      details: [
        '1.100 domicílios rurais acompanhados',
        'Metodologia: adotantes de extensão digital vs. grupos equivalentes sem acesso',
        '+18% produtividade na comparação controlada',
        'Causalidade estabelecida — não apenas correlação',
      ],
      year: '2021',
      source: '[b23] PLOS ONE 2021 — 1.100 domicílios, Índia',
      accentColor: 'var(--gold)',
    },
  ],

  // global investment — separated from field evidence (different argument: scale, not efficacy)
  globalInvestment: [
    {
      actor: 'Gates Foundation',
      label: 'IA agrícola Sul Global · COP30 Belém',
      amount: 'US$ 1,4B',
      year: '2026–2029',
      color: 'var(--p)',
    },
    {
      actor: 'China — Sinong LLM',
      label: '4B+ tokens · 8B/32B params · open-source',
      amount: 'Plano Nacional',
      year: 'jan/2026',
      color: 'var(--sage)',
    },
    {
      actor: 'EAU — AgriLLM (CGIAR)',
      label: '120K pares Q&A · 39 países',
      amount: 'US$ 200M',
      year: 'dez/2025',
      color: 'var(--gold)',
    },
    {
      actor: 'Índia — Kisan e-Mitra',
      label: '9,5M+ consultas · 11 línguas regionais',
      amount: 'Nacional',
      year: '2024',
      color: 'var(--terra)',
    },
  ],

  // corpus urgency — the "window closes" argument, previously buried in final paragraph
  corpusUrgency: {
    title: 'A Janela que Fecha — A Corrida pelo Corpus Não Tem Segunda Chance',
    body: 'Não existe hoje nenhum corpus de treinamento público que combine português regional brasileiro, terminologia do pequeno produtor da Caatinga e do Cerrado, e volume suficiente para fine-tuning eficaz (confirmado por busca sistemática em ArXiv, Zenodo, Hugging Face e SciELO, maio 2026). O AgroLinguaBR — 25.000 pares curados, DOI público, licença MIT — é o ativo estratégico que passa a existir no domínio público ao mês 18. O modelo treinado em 2026 sobre dados reais do campo brasileiro carrega uma vantagem que o modelo treinado em 2028 não pode recuperar: os dados de 2025–2026 não existirão mais como dado novo.',
    timeline: [
      {
        year: '2025–2026',
        event: 'Dados reais do campo brasileiro sendo gerados — janela aberta',
        type: 'now',
      },
      {
        year: 'Mês 18',
        event: 'AgroLinguaBR publicado com DOI — 25K pares em domínio público',
        type: 'closing',
      },
      {
        year: '2028+',
        event: 'Dados de 2025–26 não existem mais como dado novo — vantagem irrecuperável',
        type: 'lost',
      },
    ],
  },
}
