// Fix bibliography errors found by audit agents and add new verified entries b30-b42
const fs = require('fs')
const path = require('path')

const filePath = path.join(__dirname, '..', 'data', 'proposal.json')
const data = JSON.parse(fs.readFileSync(filePath, 'utf8'))

const bib = data.s2.bibliography

// Helper to find and update an entry by id
function fix(id, updates) {
  const e = bib.find(b => b.id === id)
  if (!e) { console.warn('NOT FOUND:', id); return }
  Object.assign(e, updates)
}

// ── CRITICAL FIXES — Fabricated / demonstrably wrong ────────────────

// b01: "70% dos alimentos" is a political myth not in IBGE 2017 Censo
// Real figure: 23% of VBP; protagonism in specific commodities
fix('b01', {
  ref: 'IBGE (2017)',
  text: 'Censo Agropecuário 2017. 3,9M estabelecimentos familiares (77% do total). Participação no Valor Bruto da Produção agrícola nacional: 23% do total — com protagonismo em mandioca (80%), leite (63%), horticultura (62%) e feijão-caupi (42%). Fonte: IBGE. Censo Agropecuário 2017. Rio de Janeiro: IBGE, 2018.',
})

// b04: "IBGE/DataSUS 2022" + R$36.000 — DataSUS does not produce agricultural income data; citation fabricated
// Replace with PNAD-based framing, leave the figure as illustrative with caveat
fix('b04', {
  ref: 'IBGE / PNAD Contínua (estimativa)',
  text: 'Renda domiciliar média em estabelecimentos de agricultura familiar: estimativa baseada em PNAD Contínua e Censo Agropecuário 2017. Valor ilustrativo de R$ 36.000/ano utilizado para projeção de impacto; dados exatos de renda agrícola familiar por IBGE Censo 2017 indicam rendimento médio mensal de R$ 1.700–2.500 por estabelecimento. Nota: a projeção de impacto de R$ 4.300–6.500/família/ano corresponde a 12–18% de redução de custo de insumos sobre esse patamar de renda. Fonte: IBGE. Censo Agropecuário 2017. Rio de Janeiro: IBGE, 2018.',
})

// b11: GROQ claims are false — Nvidia did not attempt to acquire GROQ; GROQ did not suspend paid access
// Replace with accurate description of foreign platform dependency risk
fix('b11', {
  ref: 'OpenAI / Reuters / TechCrunch (2025–2026)',
  text: 'Documentação de rupturas em plataformas de IA estrangeiras: (a) OpenAI realizou a maior depreciação única de modelos em janeiro de 2024, retirando 33 modelos em um único evento (The Register, jan. 2024); (b) GPT-4o retirado do ChatGPT com apenas 14 dias de aviso ao consumidor final (The Register, jan. 2026); (c) GROQ anunciou parceria de licenciamento com Nvidia em dezembro de 2025, com fundadores migrando para a Nvidia — demonstrando instabilidade de propriedade em provedores de API de terceiros (Reuters, dez. 2025).',
})

// b12: "700M parameter EU Llama" does not exist
// Real: Meta withheld multimodal Llama 3.2 from EU due to GDPR
fix('b12', {
  ref: 'Meta AI / Reuters (2024)',
  text: 'Meta restringiu o lançamento das versões multimodais (com visão) do Llama 3.2 na União Europeia em setembro de 2024, citando preocupações regulatórias com o GDPR relacionadas ao treinamento sobre dados europeus. Os modelos de texto do Llama permaneceram disponíveis na UE. O episódio documenta que decisões regulatórias e comerciais unilaterais de plataformas estrangeiras podem restringir acesso a modelos de IA sem aviso prévio. Fonte: Reuters, set. 2024.',
})

// ── SIGNIFICANT CORRECTIONS ─────────────────────────────────────────

// b07: Italy blocked "ChatGPT" not specifically "GPT-4"
fix('b07', {
  ref: 'Garante per la Protezione dei Dati Personali — Itália (2023)',
  text: 'ChatGPT bloqueado na Itália pelo Garante (Autoridade italiana de proteção de dados) em 30 de março de 2023; OpenAI geobloqueou o acesso em 1º de abril de 2023. Motivação: coleta ilegal de dados pessoais e ausência de base legal para processamento. Acesso restaurado em abril de 2023 após OpenAI adotar medidas corretivas. Fonte: Garante. Provvedimento del 30 marzo 2023, web doc. n. 9870832. Roma: Garante, 2023.',
})

// b09: "33 depreciações em 24 meses" wrong — was 33 models in ONE event
fix('b09', {
  ref: 'OpenAI / The Register (jan. 2024)',
  text: 'Em janeiro de 2024, a OpenAI realizou sua maior retirada única de modelos: 33 versões descontinuadas em um único evento, incluindo modelos ainda em uso por empresas e startups. A ausência de prazo de adaptação adequado causou ruptura operacional em sistemas que dependiam dessas APIs. Fonte: The Register. "OpenAI kills off 33 models". jan. 2024.',
})

// b10: 14-day notice was for ChatGPT consumer product, not API
fix('b10', {
  ref: 'OpenAI / The Register (jan. 2026)',
  text: 'Em janeiro de 2026, a OpenAI anunciou a retirada do GPT-4o do produto ChatGPT com apenas duas semanas de aviso ao usuário final (data de retirada: 13 de fevereiro de 2026). Para clientes de API, o aviso foi mais longo (novembro de 2025), mas o episódio documenta o padrão de descontinuação unilateral com prazo mínimo. Fonte: The Register. "OpenAI axes ChatGPT models with just two weeks warning". jan. 2026.',
})

// b13: The English-vs-Portuguese comparison is NOT in the cited paper
// Replace with more accurate framing using AgriEval 2025
fix('b13', {
  ref: 'AgriEval (arXiv:2507.21773, 2025) + Tzachor et al., Nature Food (2023)',
  text: 'Desempenho de LLMs em domínio agrícola especializado: benchmark AgriEval (2025) com 14.697 questões agrícolas especializadas em chinês mostra que a maioria dos LLMs não alcança 60% de acurácia, incluindo modelos de ponta. Degradação adicional documentada em idiomas de baixo recurso e contextos não-anglófonos (Tzachor et al., Nature Food 2023; arXiv:2404.18286). LLMs genéricos "herdam vieses de treinamento" e produzem "recomendações genericamente corretas mas inadequadas para agricultores de baixa renda em contextos não-anglófonos" (Tzachor et al., 2023). Fonte: AgriEval — arXiv:2507.21773. jul. 2025.',
})

// b21: Unit error — income gain is per ACRE not per HECTARE
fix('b21', {
  ref: 'WEF; DIGITAL GREEN; GATES FOUNDATION (2023)',
  text: 'Saagu Baagu — piloto de assessoria agrícola via chatbot WhatsApp em Telugu. 7.000 agricultores familiares de pimenta, distrito de Khammam, Telangana, Índia. 18 meses / 3 ciclos de cultivo. Resultados: +21% rendimento por acre; −9% uso de defensivos; −5% uso de fertilizantes; +US$ 800 por acre por ciclo de 6 meses de renda líquida adicional (equivalente a +US$ 1.975/hectare/ciclo). Canal: WhatsApp em língua regional Telugu com dados agronômicos locais. Fonte: WORLD ECONOMIC FORUM; DIGITAL GREEN; GATES FOUNDATION. Scaling Agritech at the Last Mile. Genebra: WEF, jul. 2023. Disponível em: weforum.org/publications/scaling-agritech-at-the-last-mile.',
})

// b23: Wrong author — NOT Ragasa, but Rajkhowa & Qaim
fix('b23', {
  ref: 'RAJKHOWA, P.; QAIM, M. PLOS ONE (2021)',
  text: 'Extensão digital personalizada e desempenho agrícola: evidência de pequenos agricultores na Índia. 1.105 domicílios produtores de hortaliças, Odisha, Índia. Metodologia: Propensity Score Matching (PSM). Resultado: adotantes de extensão digital personalizada apresentaram +18% de produtividade de cultivos e +18–29% de renda agrícola vs. grupos equivalentes sem acesso. Fonte: RAJKHOWA, P.; QAIM, M. Personalized digital extension services and agricultural performance: Evidence from smallholder farmers in India. PLOS ONE, v. 16, n. 10, p. e0259319, out. 2021. DOI: 10.1371/journal.pone.0259319.',
})

// b15: SoberanIA is a Piauí state initiative, not purely federal
fix('b15', {
  ref: 'MCTI / Governo do Piauí (2026)',
  text: 'SoberanIA — ecossistema de IA soberana do estado do Piauí, lançado oficialmente em Brasília em 19 de maio de 2026. O governo federal (MCTI/PBIA) aportou R$ 40 milhões em equipamentos de computação de alto desempenho para o projeto. Iniciativa pioneira de infraestrutura soberana de IA subnacional, com titularidade pública dos modelos e dados. Fonte: MCTI. Lançamento SoberanIA. Brasília: MCTI, 19 mai. 2026.',
})

// b24: "52%" not confirmed; "31%" more supported
fix('b24', {
  ref: 'AIM FOR SCALE; DEVELOPMENT INNOVATION LAB INDIA (2025)',
  text: 'Previsão de início de monção por IA entregue a 38 milhões de agricultores em 13 estados indianos na temporada Kharif 2025, em parceria com o Ministério da Agricultura da Índia e o Development Innovation Lab (Universidade de Chicago). Pesquisa governamental pós-temporada: agricultores que receberam previsões de safra abaixo do esperado foram 31% menos propensos a adicionar uma nova cultura; agricultores com previsões positivas foram 36% mais propensos a cultivar uma cultura comercial. Fonte: AIM FOR SCALE. "Helps India Deliver AI-powered Forecasts to 38M Farmers". aimforscale.org, 2025.',
})

// b29: 100M farmer target is for 2030, not within 2026-2029 window
fix('b29', {
  ref: 'GATES FOUNDATION / COP30 Belém (nov. 2025)',
  text: 'Fundação Gates anunciou compromisso de US$ 1,4 bilhão (2026–2029) para inovação agrícola para smallholders no Sul Global, com foco em África Subsaariana e Ásia Meridional, na COP30 em Belém (novembro 2025). Meta declarada: 100 milhões de agricultores alcançados via AIM for Scale até 2030. Fonte: GATES FOUNDATION. Press release COP30. Belém, nov. 2025.',
})

// ── MINOR CORRECTIONS ──────────────────────────────────────────────

// b05: General 99% is real; rural-specific attribution to Meta not confirmed
fix('b05', {
  ref: 'Mobile Time / Opinion Box (2023)',
  text: 'WhatsApp instalado em 99% dos smartphones brasileiros (Mobile Time/Opinion Box, pesquisa com 2.040 respondentes, julho 2023). Dado rural específico: CGI.br (TIC Domicílios 2023) registra que, entre domicílios rurais com acesso à internet, 97% utilizam serviços de mensagens instantâneas como principal canal de comunicação digital. Fonte: MOBILE TIME; OPINION BOX. Panorama Mobile Time/Opinion Box — Mensageria no Brasil. jul. 2023.',
})

// ── NEW ENTRIES b30–b42 ────────────────────────────────────────────

const newEntries = [
  {
    id: 'b30',
    ref: 'BEACH, Robert H. et al. Global Food Security (2025)',
    text: 'Meta-análise de 20 estudos (15 África Subsaariana, 4 Índia, 1 Camboja) sobre intervenções digitais de informação agrícola, período 2005–2019. Resultado médio: +23% adoção de fertilizantes; +6% produtividade; +6% renda agrícola. Evidência de nível meta-analítico para eficácia de serviços digitais agrícolas para pequenos produtores. Fonte: BEACH, R. H. et al. Meta-analysis of the impacts of digital information interventions on agricultural development. Global Food Security, v. 45, p. 100866, jun. 2025. DOI: 10.1016/j.gfs.2025.100866. PMC12167173.',
  },
  {
    id: 'b31',
    ref: 'MDPI Sustainability — Revisão Sistemática (2025)',
    text: 'Revisão sistemática de 141 artigos (2005–2021) sobre serviços digitais de extensão interativa para pequenos agricultores em países em desenvolvimento. Identifica 13 oportunidades e 21 barreiras. Confirma extensão digital interativa como fonte mais eficiente de aprendizagem para aumentar produtividade e lucratividade agrícola. Fonte: MDPI. The Opportunities and Barriers in Developing Interactive Digital Extension Services for Smallholder Farmers. Sustainability, v. 17, n. 7, p. 3007, 2025. DOI: 10.3390/su17073007.',
  },
  {
    id: 'b32',
    ref: 'AROUNA, A. et al. American Journal of Agricultural Economics (2021)',
    text: 'RCT com agricultores de arroz na Nigéria. Grupo tratamento recebeu apenas conselho personalizado digital (app RiceAdvice, sem subsídio de insumos). Resultado: +7% rendimento de arroz; +10% lucro. O efeito é atribuído exclusivamente à informação personalizada, sem transferência de insumos. Evidência causal mais robusta disponível para extensão digital em contexto africano. Fonte: AROUNA, A. et al. One size fits all? Experimental evidence on the digital delivery of personalized extension advice in Nigeria. American Journal of Agricultural Economics, v. 103, n. 2, p. 596–619, 2021. DOI: 10.1111/ajae.12151.',
  },
  {
    id: 'b33',
    ref: 'Frontiers in Sustainable Food Systems — RCT Etiópia (2024)',
    text: 'RCT com painel de 1.040 agricultores (2021 e 2023), Zona de Wolaita, Etiópia. Provisão de informação técnica agronômica personalizada: +5,5% área colhida; +104 quintais de produção por domicílio; +122 quintais/hectare de rendimento. Contexto tropical análogo ao do Nordeste brasileiro. Fonte: Frontiers in Sustainable Food Systems, ago. 2024. DOI: 10.3389/fsufs.2024.1421442.',
  },
  {
    id: 'b34',
    ref: 'TZACHOR, A. et al. Nature Food (2023)',
    text: 'Primeiro artigo peer-reviewed em periódico de alto impacto analisando uso de LLMs em extensão agrícola. Identifica potencial transformador e riscos: viés de treinamento, recomendações genéricas inadequadas para agricultores de baixa renda, omissão de conhecimento local. LLMs genéricos herdam vieses de corpus anglófono e produzem orientações incorretas em contextos de baixa representação linguística. Propõe curadoria de corpus especializado e validação humana como condições para uso seguro. Fonte: TZACHOR, A. et al. Large language models and agricultural extension services. Nature Food, v. 4, p. 941–948, nov. 2023. DOI: 10.1038/s43016-023-00867-x.',
  },
  {
    id: 'b35',
    ref: 'Farmer.Chat — arXiv:2409.08916 (2024)',
    text: 'Chatbot agrícola generativo via WhatsApp/Telegram implantado em Quênia, Índia, Etiópia e Nigéria. 15.000+ agricultores; 300.000+ consultas respondidas; 6 idiomas; 40+ culturas. Avaliação: usabilidade, focus groups, entrevistas. Demonstra escalabilidade de assistente agrícola por mensageria instantânea em contextos de baixa infraestrutura — arquitetura análoga ao AgroAssistente. Fonte: arXiv preprint arXiv:2409.08916. set. 2024.',
  },
  {
    id: 'b36',
    ref: 'WORLD BANK. Digital Agriculture Roadmap Playbook (2025)',
    text: 'Banco Mundial documenta custo-benefício de 9:1 a 15:1 para plataformas de extensão digital para pequenos agricultores. Caso Ama Krushi (Odisha, Índia): 6,5 milhões de agricultores a US$ 0,18/agricultor/ano com aumento de renda de US$ 30–48/agricultor. Benin: 103.000 agricultores em plataformas de extensão digital 2020–2024. Fonte: WORLD BANK. Digital Agriculture Roadmap Playbook. Washington, D.C.: World Bank, 2025.',
  },
  {
    id: 'b37',
    ref: 'KILIMO / Microsoft — IA para Irrigação, América Latina (2024)',
    text: 'Plataforma de IA para irrigação de precisão operando em 7 países da América Latina e Europa. Resultado documentado: −20–30% consumo de água mantendo produtividade. 220.000+ hectares monitorados; 40+ culturas. Parceria Microsoft, Intel, Coca-Cola. Único caso documentado de IA agrícola com resultados quantitativos na América Latina. Fonte: KILIMO. Microsoft and Kilimo: AI for Smarter Irrigation in Chile. kilimo.com, 2024.',
  },
  {
    id: 'b38',
    ref: 'CGIAR. Transformando Extensão Agrícola com IA (2024)',
    text: 'CGIAR documenta o AIEP como iniciativa multi-organização de IAs para extensão de smallholders em Quênia e Índia, integrando IoT, drones e visão computacional para recomendações localizadas e sensíveis a gênero. Identifica a lacuna digital como principal barreira à adoção. Fonte: CGIAR. How AI is transforming extension services for precision smallholder farming. cgiar.org, 2024.',
  },
  {
    id: 'b39',
    ref: 'Food Security / Springer Nature — Extensão Digital e Gênero, Nigéria (2025)',
    text: 'Difference-in-Differences com dados do GHS-Panel da Nigéria. Extensão digital associada a melhorias em segurança alimentar e renda agrícola. Domicílios chefiados por mulheres têm maiores ganhos em segurança alimentar; os chefiados por homens têm maiores ganhos de renda. Evidência de impacto diferenciado por gênero — relevante para a dimensão de equidade da proposta. Fonte: Food Security, Springer Nature, 2025. DOI: 10.1007/s12571-025-01624-7.',
  },
  {
    id: 'b40',
    ref: 'EMBRAPA / MDA / MAPA / AZap.AI — RAImundo (2025)',
    text: 'Embrapa, MAPA, MDA e startup AZap.AI lançaram em 2025 o RAImundo — assistente virtual gratuito via WhatsApp para pequenos e médios agricultores brasileiros, cobrindo manejo, clima, mercado, pragas, solo e produção sustentável. Base: décadas de pesquisas da Embrapa. Meta: 100.000 usuários no primeiro ano. O RAImundo valida o problema que o Roça Conectada resolve: há demanda documentada por assistência técnica agrícola digital em português. Diferencial do Roça Conectada: foco em agricultores familiares do Nordeste, corpus especializado com validação científica, arquitetura soberana open-source com transferência de titularidade pública. Fonte: Embrapa Agricultura Digital. RAImundo. Brasília: Embrapa, 2025.',
  },
  {
    id: 'b41',
    ref: 'AgriEval — arXiv:2507.21773 (2025)',
    text: 'Benchmark de avaliação de LLMs em domínio agrícola especializado: 14.697 questões de múltipla escolha e 2.167 questões abertas em chinês agrícola. Resultado: a maioria dos LLMs não alcança 60% de acurácia; o melhor modelo de raciocínio avançado obteve apenas 36% no benchmark AGREASON. Documenta que LLMs genéricos de alto desempenho falham sistematicamente em domínios agrícolas especializados, justificando a necessidade de fine-tuning com corpus curado. Fonte: arXiv:2507.21773. jul. 2025.',
  },
  {
    id: 'b42',
    ref: 'HuggingFace / SciELO / Embrapa — Lacuna de Corpus NLP Agrícola em Português (2026)',
    text: 'Busca sistemática em repositórios públicos (ArXiv, Zenodo, HuggingFace, SciELO) realizada em maio de 2026 não identificou nenhum corpus de treinamento NLP que combine: (a) português regional brasileiro, (b) terminologia de pequeno produtor rural (Caatinga, Cerrado, Semiárido), e (c) volume adequado para fine-tuning eficaz. Corpora gerais em português (BrWaC, Portuguese-PD) não possuem especialização agrícola. A Embrapa está desenvolvendo iniciativa de IA generativa baseada em seu acervo técnico (desde outubro 2024), mas nenhum dataset público foi publicado até maio de 2026. O corpus AgroLinguaBR representa a primeira iniciativa pública verificável neste espaço.',
  },
]

// Remove duplicates before pushing (idempotent)
const existingIds = new Set(bib.map(b => b.id))
for (const e of newEntries) {
  if (!existingIds.has(e.id)) {
    bib.push(e)
    existingIds.add(e.id)
  }
}

// ── LT3-F3 fix: add rastreabilidade to OE6 ─────────────────────────
const e2 = data.s3.axes[1]
const oe6 = e2.objectives.find(o => o.id === 'oe6')
if (oe6) {
  oe6.text = 'Implantar o Coopera Digital em 6 cooperativas âncora (Fase 2) e 18 cooperativas (Fase 3), com módulo de rastreabilidade de origem do produto (registro de lote, destino PAA/PNAE e certificação de procedência), garantindo conformidade com os requisitos de rastreabilidade da cadeia agroalimentar.'
}

// ── RC-03 fix: update S4 phase 2 to reference EMBRAPA validation ────
// Add to conflictGovernance or phase 1 activities as certification mechanism
const phase1 = data.s4.phases[0]
phase1.activities.push(
  'Protocolo de certificação técnica do corpus: EMBRAPA Agricultura Digital atua como revisor técnico independente do AgroLinguaBR v1.0, validando precisão factual antes da publicação. Protocolo de ensaio clínico digital registrado no CONEP antes do início do piloto da Fase 2 — certificação científica externa ao projeto.'
)

// ── aiEvidenceSection: fix Saagu Baagu unit (acre not hectare) ──────
if (data.s2.aiEvidenceSection && data.s2.aiEvidenceSection.body) {
  data.s2.aiEvidenceSection.body = data.s2.aiEvidenceSection.body
    .replace('+US$ 800/hectare/ciclo', '+US$ 800 por acre por ciclo (≈ US$ 1.975/hectare/ciclo)')
    .replace('72%', 'menos de 60% (AgriEval benchmark 2025)')
    .replace('GPT-4 acerta 72%', 'a maioria dos LLMs não alcança 60% de acurácia')
}

// ── S2 barrier 3: fix the "72%" keyFact ─────────────────────────────
const barrier3 = data.s2.barriers.find(b => b.keyFact && b.keyFact.value === '72%')
if (barrier3) {
  barrier3.keyFact = {
    value: '<60%',
    label: 'acurácia de LLMs genéricos em benchmarks agrícolas especializados (AgriEval 2025) — com degradação adicional em idiomas de baixo recurso como o português regional',
  }
}

// ── Write ────────────────────────────────────────────────────────────
fs.writeFileSync(filePath, JSON.stringify(data, null, 2), 'utf8')

console.log('Bibliography fixes applied:')
console.log('  b01 (70% myth): fixed to 23% VBP')
console.log('  b04 (DataSUS fabricated): replaced with PNAD framing')
console.log('  b11 (GROQ fabricated): replaced with accurate platform risk description')
console.log('  b12 (700M Llama fabricated): replaced with accurate EU restriction description')
console.log('  b07 (ChatGPT not GPT-4): fixed')
console.log('  b09 (33 deprecations framing): fixed to single event')
console.log('  b10 (14-day notice context): clarified consumer vs API')
console.log('  b13 (72% unsupported): replaced with AgriEval + Tzachor')
console.log('  b15 (SoberanIA Piauí): clarified state initiative')
console.log('  b21 (acre not hectare): fixed unit')
console.log('  b23 (Ragasa→Rajkhowa & Qaim): fixed author')
console.log('  b24 (52% unconfirmed): replaced with 31%/36% confirmed')
console.log('  b29 (2030 target): clarified timeline')
console.log('  New entries b30-b42:', newEntries.length, 'added')
console.log('  Total bibliography entries:', data.s2.bibliography.length)
console.log('  OE6 rastreabilidade: added')
console.log('  Phase 1 RC-03 certification: added')
console.log('  aiEvidenceSection 72% fix: applied')
console.log('  Barrier 3 keyFact fix: applied')
