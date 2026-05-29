/**
 * ⚠️  DEPRECATED — DO NOT RUN
 *
 * This script was written when fixture files were the source of truth.
 * The architecture has since been inverted: data/proposal.json is now
 * the single source of truth, and fixture files mirror it (not the other way around).
 *
 * Running this script WILL OVERWRITE live proposal.json content with stale data.
 *
 * If you need to sync fixtures FROM proposal.json, write a new script that reads
 * proposal.json and writes to fixture files — not the reverse.
 */

// Sync fixture content into proposal.json for the live app
const fs = require('fs')
const path = require('path')

const filePath = path.join(__dirname, '..', 'data', 'proposal.json')
const data = JSON.parse(fs.readFileSync(filePath, 'utf8'))

// ── s3: generalObjective + axes (fixture rewrite) ────────────────────
data.s3.generalObjective =
  'Construir a infraestrutura nacional soberana de IA para a agricultura familiar — corpus aberto, modelo soberano, benchmark de avaliação e API pública — e sobre ela desenvolver, validar e implantar o ecossistema Roça Conectada, digitalizando as cadeias socioprodutivas da agricultura familiar e habilitando o ecossistema nacional de IA agroalimentar.'

data.s3.axes = [
  {
    id: 'e1',
    label: 'Eixo I — Pesquisa e Infraestrutura de IA',
    objectives: [
      { id: 'oe1', code: 'OE1.', text: 'Realizar diagnóstico participativo das necessidades digitais em 3 regiões-piloto (Pesquisa-Ação Participativa).' },
      { id: 'oe2', code: 'OE2.', text: 'Construir e publicar o corpus AgroLinguaBR: 25.000 pares Q&A em português agrícola regional, licença MIT/Apache 2.0, DOI público via Zenodo.' },
      { id: 'oe3', code: 'OE3.', text: 'Desenvolver o AgroEval: benchmark nacional para avaliação de alucinação e precisão de IAs agrícolas em português — contribuição científica original replicável por qualquer grupo de pesquisa.' },
    ],
  },
  {
    id: 'e2',
    label: 'Eixo II — Validação e Implantação',
    objectives: [
      { id: 'oe4', code: 'OE4.', text: 'Realizar fine-tuning e validação científica do AgroAssistente IA com protocolo de grupo controle (n=50, Fase 2).' },
      { id: 'oe5', code: 'OE5.', text: 'Implantar o AgroAssistente IA com 800 agricultores (Fase 2) e expandir para 2.500 (Fase 3) via rede de multiplicadores EMATER.' },
      { id: 'oe6', code: 'OE6.', text: 'Implantar o Coopera Digital em 6 cooperativas âncora (Fase 2) e 18 cooperativas (Fase 3).' },
    ],
  },
  {
    id: 'e3',
    label: 'Eixo III — Ecossistema Nacional e Soberania',
    objectives: [
      { id: 'oe7', code: 'OE7.', text: 'Publicar e operar a AgroAPI como serviço público aberto, habilitando integração por EMATERs estaduais, universidades, startups e outras ICTs.' },
      { id: 'oe8', code: 'OE8.', text: 'Capacitar 350 multiplicadores (técnicos ATER e gestores de cooperativas) como agentes de expansão e sustentabilidade do ecossistema.' },
      { id: 'oe9', code: 'OE9.', text: 'Transferir a titularidade do modelo, corpus e benchmarks para a ICT executora (UFSC), assegurando soberania e permanência nacional da infraestrutura.' },
    ],
  },
]

// ── s3: policyAlignment (W-02) ────────────────────────────────────────
data.s3.policyAlignment = [
  {
    sigla: 'NIB',
    fullName: 'Nova Indústria Brasil',
    decree: 'Decreto 11.738/2023',
    axes: 'Missão 1 — Cadeias Agroindustriais Sustentáveis · Missão 4 — Transformação Digital',
    body: 'O Roça Conectada contribui para a Missão 1 da NIB ao digitalizar os processos produtivos de 2.500 agricultores familiares, rastreando práticas e conectando a cadeia a montante e a jusante. Para a Missão 4, constrói infraestrutura digital nacional soberana: o AgroLinguaBR e a AgroAPI são ativos estratégicos de dados e serviços em português, permanentes e de propriedade pública (UFSC), que habilitam todo o ecossistema nacional de IA agroalimentar.',
  },
  {
    sigla: 'PLANAPO',
    fullName: 'Plano Nacional de Agroecologia e Produção Orgânica',
    decree: '3ª edição 2023–2027',
    axes: 'Eixo 3 — Conhecimento em Agroecologia · Eixo 4 — Comunicação e Informação',
    body: 'O PLANAPO 2023-2027 orienta a expansão do acesso ao conhecimento agroecológico (Eixo 3) e a democratização da informação técnica para agricultores familiares (Eixo 4). O corpus AgroLinguaBR incluirá módulo específico de práticas agroecológicas e orgânicas em português regional; o AgroAssistente IA, treinado sobre este corpus, torna-se o primeiro canal de extensão rural digital contextualizado em agroecologia, operando 24h via WhatsApp sem custo de deslocamento.',
  },
  {
    sigla: 'PNPIAF',
    fullName: 'Política Nacional de Proteção e Integração da Agricultura Familiar',
    decree: 'Decreto 12.287/2024',
    axes: 'Eixo IV — Inclusão Digital em Áreas Rurais',
    body: 'A PNPIAF, em seu Eixo IV, estabelece a inclusão digital em áreas rurais como política de Estado. O edital FINEP AgriFam-ICT 2026 é mecanismo direto de execução desse eixo. O Roça Conectada é a resposta técnica completa: corpus linguístico nacional, modelo de linguagem soberano em português e aplicação via WhatsApp com arquitetura assíncrona tolerante a conectividade intermitente — solução concebida desde o início para a realidade das pequenas propriedades rurais brasileiras.',
  },
  {
    sigla: 'ENECI / PBIA',
    fullName: 'Estratégia Nacional de CT&I 2024–2034 · Plano Brasileiro de Inteligência Artificial 2024–2028',
    decree: 'ENCTI / MCTI 2024 · PBIA / MCTI 2024',
    axes: 'Eixo 3 — Soberania Tecnológica Nacional · Eixo 4 — Transformação Digital Inclusiva · PBIA: modelos nacionais de linguagem em português',
    body: 'A ENCTI 2024-2034 prioriza soberania tecnológica nacional (Eixo 3) e transformação digital com inclusão (Eixo 4). O PBIA 2024–2028 comprometeu R$ 23 bilhões e 54 ações concretas — incluindo o desenvolvimento de modelos nacionais de linguagem em português. O Roça Conectada entrega aderência ao PBIA de forma concreta: o AgroLinguaBR e o LLM fine-tuned são os ativos específicos que o PBIA identifica como necessários (corpus nacional, modelo soberano em português) mas não construiu para a agricultura familiar. Ao mês 36, com transferência de titularidade à UFSC, esses ativos tornam-se patrimônio público irremovível do sistema nacional de CT&I — disponíveis para a próxima iteração do PBIA ou qualquer política pública nacional sem dependência de plataformas estrangeiras. O SoberanIA (R$ 40M, lançado maio 2026) confirmou que o governo está financiando exatamente este tipo de ativo para o setor público. O Roça Conectada é o instrumento equivalente para a agricultura familiar.',
  },
  {
    sigla: 'Bioinsumos',
    fullName: 'Programa Nacional de Bioinsumos',
    decree: 'Decreto 10.375/2020',
    axes: 'Disseminação de conhecimento sobre bioinsumos na agricultura familiar',
    body: 'O Programa Nacional de Bioinsumos visa ampliar a adoção de bioinsumos na agricultura familiar como substituto de agroquímicos. O AgroLinguaBR incluirá módulo dedicado com 3.000+ pares Q&A sobre bioinsumos em português regional — denominações locais, modo de uso, dosagem e interações com culturas —, tornando o AgroAssistente o primeiro canal de extensão rural digital com suporte especializado ao uso de bioinsumos no campo, em linguagem acessível ao agricultor familiar.',
  },
]

// ── s3: innovationPolicy (W-09) ───────────────────────────────────────
data.s3.innovationPolicy = {
  document: 'Política de Inovação da Universidade Federal de Santa Catarina (UFSC)',
  resolution: 'Resolução Normativa nº 26/CUn/2016 (atualizada pela RN nº 43/CUn/2018)',
  article: 'Art. 3º, incisos I, III e V — Diretrizes institucionais de inovação',
  alignmentText:
    'A Política de Inovação da UFSC (Resolução Normativa nº 26/CUn/2016, atualizada pela RN nº 43/CUn/2018) estabelece, em seu Art. 3º, como diretrizes institucionais: (I) o estímulo à criação e ao desenvolvimento de ambientes promotores da inovação; (III) o incentivo à pesquisa aplicada e ao desenvolvimento tecnológico orientado à solução de problemas sociais e econômicos; e (V) o fortalecimento de parcerias entre a UFSC e setores produtivos, com especial atenção a demandas de populações vulneráveis. O Roça Conectada materializa as três diretrizes de forma concreta: (I) constrói infraestrutura científica permanente — corpus AgroLinguaBR, benchmark AgroEval e AgroAPI — como ativos institucionais da UFSC, gerando ambiente habilitante para pesquisa futura em IA agroalimentar; (III) orienta o projeto integralmente à resolução de um problema social documentado — o colapso da ATER e a exclusão digital de 3,9 milhões de famílias agricultoras; (V) estabelece parcerias formais com cooperativas da agricultura familiar e com o ecossistema EMATER/EMBRAPA como parceiros de execução e beneficiários primários da inovação, com transferência de titularidade prevista no mês 36 (OE9).',
  annexNote:
    'O documento completo da Política de Inovação da UFSC está incluído nos Anexos Gerais da proposta, conforme Item EL-09 do Edital FINEP AgriFam-ICT 2026.',
}

// ── s4: add GPU / AgroEval / Env callouts (W-03, W-04, W-11) ─────────
const existingCalloutIds = new Set(data.s4.sovereigntyCallouts.map((c) => c.id))

const newCallouts = [
  {
    id: 'sc-gpu',
    badge: 'Infraestrutura Computacional',
    title: 'GPU UFSC + Cloud — Fine-tuning Soberano',
    content:
      'O fine-tuning do LLM base (Qwen2.5-7B) será executado em cluster GPU do LABELO/UFSC (A100 80GB × 4, disponível via convênio de pesquisa) com capacidade de burst em cloud (AWS ou GCP via créditos de pesquisa). A técnica LoRA/PEFT com quantização 4-bit NF4 reduz o custo computacional em ~80% sem perda mensurável de qualidade: um ciclo completo de fine-tuning custa aproximadamente R$ 800 em GPU-hora de cloud — viabilizando múltiplos ciclos de iteração dentro do orçamento. O modelo resultante roda em inferência em hardware de R$ 8.000 (RTX 4090), removendo dependência de APIs proprietárias na operação.',
  },
  {
    id: 'sc-agroeval',
    badge: 'Protocolo de Validação Científica',
    title: 'AgroEval — Benchmark de Avaliação com Grupo Controle',
    content:
      'O AgroEval avalia 3 dimensões: (1) precisão factual — respostas verificadas contra base técnica da EMBRAPA; (2) taxa de alucinação — detecção de informações agrícolas fabricadas, com consequência potencial de dano (ex: dosagem incorreta de defensivo); (3) relevância contextual — adequação ao bioma e cultura da região do agricultor. A validação científica (Fase 2) utilizará grupo controle randomizado: n=50 agricultores recebem ATER convencional, n=800 recebem AgroAssistente — resultados medidos em adoção de boas práticas, redução de custo de insumos e tempo de resolução de dúvidas técnicas. Protocolo registrado no CONEP antes do piloto.',
  },
  {
    id: 'sc-env',
    badge: 'Sustentabilidade Ambiental',
    title: 'Impacto Ambiental Positivo — Menos Deslocamento, Mais Precisão',
    content:
      'O AgroAssistente reduz em média 4 visitas presenciais de técnico ATER por agricultor por ano — dado da literatura de extensão rural digital (Embrapa, 2023) — gerando diminuição mensurável de emissões de CO₂ por deslocamento. O corpus AgroLinguaBR incluirá módulo de manejo sustentável de solos e água (RE-07), alinhado ao PLANAPO. A orientação técnica personalizada via IA viabiliza adoção de práticas de agricultura de precisão que reduzem uso de defensivos e fertilizantes sintéticos, contribuindo para a transição agroecológica da agricultura familiar.',
  },
]

for (const c of newCallouts) {
  if (!existingCalloutIds.has(c.id)) {
    data.s4.sovereigntyCallouts.push(c)
  }
}

// ── s7: disseminationRoutes (W-06) ────────────────────────────────────
data.s7.disseminationRoutes = [
  {
    audience: 'Agricultores familiares participantes (2.500)',
    mechanism:
      'AgroAssistente IA via WhatsApp — acesso permanente pós-projeto sem custo; treinamento de uso por multiplicadores EMATER',
    when: 'Fase 2 (mês 13) → permanente',
  },
  {
    audience: 'Cooperativas e associações (18)',
    mechanism:
      'Plataforma Coopera Digital — licença gratuita permanente; capacitação de gestores pelo projeto (16h/cooperativa)',
    when: 'Fase 2 (mês 13) → permanente',
  },
  {
    audience: 'Multiplicadores EMATER (350)',
    mechanism:
      'Programa de capacitação presencial/remoto (40h/multiplicador); manual técnico de operação e repertório de perguntas frequentes regionalizadas',
    when: 'Fases 2 e 3 (meses 13–36)',
  },
  {
    audience: 'Comunidade científica nacional e internacional',
    mechanism:
      'AgroLinguaBR publicado com DOI Zenodo (licença MIT/Apache 2.0); AgroEval publicado com código-fonte (GitHub UFSC); 5 artigos em periódicos indexados',
    when: 'Fase 2 (mês 24) e Fase 3 (mês 36)',
  },
  {
    audience: 'ICTs, startups e organizações do ecossistema',
    mechanism:
      'AgroAPI pública com documentação completa (OpenAPI/Swagger), sandbox gratuito para testes e registro aberto de uso',
    when: 'Fase 3 (mês 30) → permanente',
  },
  {
    audience: 'Políticas públicas e governo federal',
    mechanism:
      'Relatório final entregue ao MCTI, MDA e FINEP; apresentação em audiências públicas e seminários do Programa AgriFam; dados de impacto disponibilizados ao IBGE para integração ao Censo Agropecuário',
    when: 'Fase 3 (mês 36)',
  },
]

// ── s8: add RE-04 KPI row (W-13) ──────────────────────────────────────
const re04Already = data.s8.indicators.some((r) =>
  r.indicator.includes('orgânico') || r.indicator.includes('RE-04')
)
if (!re04Already) {
  data.s8.indicators.push({
    indicator: 'Consultas sobre manejo orgânico/agroecológico (% das interações — RE-04)',
    phase1: '—',
    phase2: 'baseline',
    phase3: '≥ 20%',
  })
}

fs.writeFileSync(filePath, JSON.stringify(data, null, 2), 'utf8')

console.log('proposal.json updated:')
console.log('  s3.generalObjective: updated')
console.log('  s3.axes:', data.s3.axes.length, 'axes,', data.s3.axes.reduce((n, a) => n + a.objectives.length, 0), 'objectives')
console.log('  s3.policyAlignment:', data.s3.policyAlignment.length, 'policies')
console.log('  s3.innovationPolicy:', !!data.s3.innovationPolicy)
console.log('  s4.sovereigntyCallouts:', data.s4.sovereigntyCallouts.length, 'callouts')
console.log('  s7.disseminationRoutes:', data.s7.disseminationRoutes.length, 'routes')
console.log('  s8.indicators:', data.s8.indicators.length, 'rows')
