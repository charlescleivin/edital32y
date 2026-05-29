export interface AcronymEntry {
  short: string
  full: string
  context: string  // 1-2 sentence mini-context paragraph
}

export const ACRONYMS: Record<string, AcronymEntry> = {
  'MAU': {
    short: 'MAU',
    full: 'Monthly Active Users / Usuários Ativos Mensais',
    context: 'Métrica padrão da indústria de software que conta o número de usuários únicos que interagiram com uma plataforma ao menos uma vez no mês. No contexto deste projeto, MAU mede agricultores e cooperativas efetivamente usando o AgroAssistente ou o Coopera Digital mensalmente — é o indicador de adoção real, não apenas cadastro.'
  },
  'ATER': {
    short: 'ATER',
    full: 'Assistência Técnica e Extensão Rural',
    context: 'Serviço público gratuito que leva orientação técnica agronômica aos agricultores — como plantar, tratar doenças, acessar mercados. No Brasil, 81,8% dos agricultores familiares nunca receberam ATER (IBGE 2017). No Nordeste, esse percentual sobe para 92,6%.'
  },
  'PAA': {
    short: 'PAA',
    full: 'Programa de Aquisição de Alimentos',
    context: 'Política pública federal que compra alimentos diretamente de agricultores familiares, sem licitação, para distribuição a populações vulneráveis. É uma das principais vias de renda institucional para a agricultura familiar brasileira.'
  },
  'PNAE': {
    short: 'PNAE',
    full: 'Programa Nacional de Alimentação Escolar',
    context: 'Programa federal que garante alimentação a estudantes da rede pública. A Lei 11.947/2009 exige que 30% dos recursos do PNAE sejam usados na compra direta de agricultores familiares locais — criando um mercado institucional significativo e estável.'
  },
  'ICT': {
    short: 'ICT',
    full: 'Instituição Científica e Tecnológica',
    context: 'Universidades, institutos de pesquisa e centros tecnológicos públicos ou privados sem fins lucrativos que realizam pesquisa e desenvolvimento. Na Lei 10.973/2004 (Lei de Inovação), ICTs são entidades habilitadas a receber financiamento FINEP e ser titulares de ativos de inovação.'
  },
  'EMATER': {
    short: 'EMATER',
    full: 'Empresa de Assistência Técnica e Extensão Rural',
    context: 'Rede de empresas estaduais responsáveis pela extensão rural pública no Brasil. Cada estado tem sua EMATER (EMATER-CE, EMATER-PB, EMATER-BA etc.). São os agentes que chegam fisicamente às propriedades rurais — mas com recursos insuficientes: no Sertão cearense, há 1 técnico para cada 600+ famílias.'
  },
  'EMBRAPA': {
    short: 'EMBRAPA',
    full: 'Empresa Brasileira de Pesquisa Agropecuária',
    context: 'Principal instituição de pesquisa agrícola do Brasil, vinculada ao Ministério da Agricultura. Responsável por parte significativa das inovações agronômicas que tornaram o Brasil líder agrícola global. Seus acervos técnicos são a principal base de conhecimento para o corpus AgroLinguaBR.'
  },
  'NIB': {
    short: 'NIB',
    full: 'Nova Indústria Brasil',
    context: 'Política industrial do governo federal (Decreto 11.738/2023) com 6 missões de reindustrialização. A Missão 1 cobre cadeias agroindustriais sustentáveis e a Missão 4 trata de transformação digital — ambas diretamente relevantes ao SABIA.'
  },
  'PLANAPO': {
    short: 'PLANAPO',
    full: 'Plano Nacional de Agroecologia e Produção Orgânica',
    context: 'Política pública federal que orienta a transição para práticas agrícolas sustentáveis. Na 3ª edição (2023–2027), o Eixo 3 prioriza acesso ao conhecimento agroecológico e o Eixo 4 a democratização da informação técnica — alinhados diretamente ao corpus AgroLinguaBR.'
  },
  'PNPIAF': {
    short: 'PNPIAF',
    full: 'Política Nacional de Proteção e Integração da Agricultura Familiar',
    context: 'Decreto 12.287/2024 que estabelece a inclusão digital em áreas rurais como política de Estado. O Edital FINEP AgriFam-ICT 2026 é o mecanismo direto de execução desse decreto.'
  },
  'PBIA': {
    short: 'PBIA',
    full: 'Plano Brasileiro de Inteligência Artificial 2024–2028',
    context: 'Estratégia nacional do MCTI com R$ 23 bilhões comprometidos e 54 ações para soberania tecnológica em IA. Inclui desenvolvimento de modelos de linguagem em português — exatamente o que o corpus AgroLinguaBR e o LLM fine-tuned do SABIA entregam para a agricultura familiar.'
  },
  'ENECI': {
    short: 'ENECI',
    full: 'Estratégia Nacional de Educação para Ciência e Inovação',
    context: 'Política do MCTI para desenvolver capacidades nacionais em ciência e inovação, com foco em soberania tecnológica e inclusão digital.'
  },
  'ENCTI': {
    short: 'ENCTI',
    full: 'Estratégia Nacional de Ciência, Tecnologia e Inovação 2024–2034',
    context: 'Documento estratégico do MCTI que orienta investimentos federais em CT&I. O Eixo 3 prioriza soberania tecnológica nacional e o Eixo 4 trata de transformação digital com inclusão — ambos fundamentam o SABIA.'
  },
  'FINEP': {
    short: 'FINEP',
    full: 'Financiadora de Estudos e Projetos',
    context: 'Agência federal vinculada ao MCTI que financia inovação no Brasil. O edital AgriFam-ICT 2026 é uma chamada pública da FINEP para soluções digitais na agricultura familiar, com R$ 7 milhões disponíveis por projeto selecionado.'
  },
  'FNDCT': {
    short: 'FNDCT',
    full: 'Fundo Nacional de Desenvolvimento Científico e Tecnológico',
    context: 'Principal fundo federal de financiamento de CT&I no Brasil, gerido pela FINEP. Os recursos desta chamada pública FINEP AgriFam-ICT 2026 provêm do FNDCT.'
  },
  'MCTI': {
    short: 'MCTI',
    full: 'Ministério da Ciência, Tecnologia e Inovações',
    context: 'Ministério federal responsável pela política de CT&I do Brasil. Supervisiona a FINEP e a EMBRAPA, e é o proponente do PBIA 2024–2028 e do programa SoberanIA.'
  },
  'MAPA': {
    short: 'MAPA',
    full: 'Ministério da Agricultura, Pecuária e Abastecimento',
    context: 'Ministério federal responsável pela política agropecuária brasileira. Normatiza práticas agrícolas, insumos e rastreabilidade — cujos dados técnicos são fontes primárias para o corpus AgroLinguaBR.'
  },
  'CONEP': {
    short: 'CONEP',
    full: 'Conselho Nacional de Ética em Pesquisa',
    context: 'Órgão federal que aprova e monitora protocolos de pesquisa com seres humanos. O piloto da Fase 2 (n=800 agricultores + grupo controle n=50) requer protocolo registrado no CONEP antes do início, garantindo conformidade ética.'
  },
  'IBGE': {
    short: 'IBGE',
    full: 'Instituto Brasileiro de Geografia e Estatística',
    context: 'Principal fonte de dados estatísticos do Brasil. O Censo Agropecuário 2017 (mais recente disponível; próximo previsto para 2027/2028) é a fonte primária para os dados de cobertura de ATER e perfil da agricultura familiar usados nesta proposta.'
  },
  'LGPD': {
    short: 'LGPD',
    full: 'Lei Geral de Proteção de Dados Pessoais',
    context: 'Lei 13.709/2018 que regula o tratamento de dados pessoais no Brasil. A Resolução ANPD 19/2024 tornou ilegais transferências internacionais de dados sem conformidade com a LGPD — reforçando a necessidade de infraestrutura soberana de IA no Brasil.'
  },
  'ANPD': {
    short: 'ANPD',
    full: 'Autoridade Nacional de Proteção de Dados',
    context: 'Agência federal que regulamenta e fiscaliza a LGPD. A Resolução ANPD 19/2024 estabeleceu requisitos para transferência internacional de dados pessoais, com impacto direto no uso de plataformas de IA estrangeiras no contexto agrícola.'
  },
  'LLM': {
    short: 'LLM',
    full: 'Large Language Model / Modelo de Linguagem de Grande Escala',
    context: 'Modelo de inteligência artificial treinado em grandes volumes de texto para entender e gerar linguagem natural. GPT-4, LLaMA e Gemini são exemplos. O SABIA realiza fine-tuning de um LLM base em português com corpus agrícola especializado para criar o AgroAssistente.'
  },
  'NLP': {
    short: 'NLP',
    full: 'Natural Language Processing / Processamento de Linguagem Natural',
    context: 'Campo da IA que trata da interação entre computadores e linguagem humana. Inclui compreensão de texto, geração de respostas e tradução automática. O corpus AgroLinguaBR é um recurso de NLP especializado em português agrícola regional brasileiro.'
  },
  'LoRA': {
    short: 'LoRA',
    full: 'Low-Rank Adaptation',
    context: 'Técnica eficiente de fine-tuning de LLMs que treina apenas um pequeno conjunto de parâmetros adicionais, reduzindo custo computacional em ~80% sem perda significativa de qualidade. Permite que um ciclo completo de fine-tuning custe ~R$ 800 em GPU-hora ao invés de milhões.'
  },
  'PEFT': {
    short: 'PEFT',
    full: 'Parameter-Efficient Fine-Tuning',
    context: 'Família de técnicas (inclui LoRA, Adapters, Prefix Tuning) que permitem especializar LLMs grandes com muito menos recursos computacionais. O SABIA usa LoRA/PEFT para tornar o fine-tuning do AgroAssistente viável dentro do orçamento do projeto.'
  },
  'MoU': {
    short: 'MoU',
    full: 'Memorandum of Understanding / Memorando de Entendimento',
    context: 'Documento formal de intenção de cooperação entre instituições. Não é contrato vinculante, mas demonstra comprometimento institucional para avaliadores. O SABIA prevê MoUs com EMBRAPA Agricultura Digital e 3 EMATERs estaduais para garantir continuidade pós-projeto.'
  },
  'PAP': {
    short: 'PAP',
    full: 'Pesquisa-Ação Participativa',
    context: 'Metodologia científica que envolve os próprios beneficiários na construção do conhecimento. No SABIA, os agricultores participam ativamente do diagnóstico de necessidades, garantindo que o corpus AgroLinguaBR reflita problemas reais documentados — não suposições da equipe técnica.'
  },
  'BNDES': {
    short: 'BNDES',
    full: 'Banco Nacional de Desenvolvimento Econômico e Social',
    context: 'Principal banco de desenvolvimento do Brasil, financiador de projetos de infraestrutura, inovação e sustentabilidade. O BNDES Fundo Clima é um dos caminhos de financiamento para expansão do SABIA após o período FINEP.'
  },
  'CC': {
    short: 'CC',
    full: 'Creative Commons',
    context: 'Organização sem fins lucrativos que criou família de licenças padronizadas para compartilhamento de obras criativas e dados. Usada por Wikipedia, OpenStreetMap, MIT OpenCourseWare e milhares de datasets científicos. A licença CC BY-NC-SA 4.0 do AgroLinguaBR permite uso livre para pesquisa.'
  },
  'DOI': {
    short: 'DOI',
    full: 'Digital Object Identifier / Identificador Digital de Objeto',
    context: 'Código único e permanente que identifica um documento digital (artigo, dataset, software). É como um ISBN para publicações digitais — apenas garante que o recurso seja localizável e citável de forma estável. Não implica licença aberta; a licença é definida separadamente (no caso do AgroLinguaBR: CC BY-NC-SA 4.0).'
  },
  'RESR': {
    short: 'RESR',
    full: 'Revista de Economia e Sociologia Rural',
    context: 'Periódico científico brasileiro especializado em economia e sociologia agrária. Indexado na SciELO e referência em estudos sobre agricultura familiar no Brasil.'
  },
  'FETRAF': {
    short: 'FETRAF',
    full: 'Federação dos Trabalhadores na Agricultura Familiar',
    context: 'Organização sindical nacional que representa agricultores familiares no Brasil. Parceira estratégica do SABIA para mobilização e validação com agricultores nos territórios-piloto.'
  },
  'PSM': {
    short: 'PSM',
    full: 'Propensity Score Matching',
    context: 'Método estatístico de avaliação de impacto que compara grupos tratados e controle com características semelhantes, reduzindo viés de seleção. Usado por Rocha Junior et al. (RESR 2020) para estimar o impacto da ATER na renda agrícola.'
  },
}

// Utility: get all acronyms as array of strings for regex
export const ACRONYM_LIST = Object.keys(ACRONYMS)
