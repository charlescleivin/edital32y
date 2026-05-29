import type { S14Data } from '@/types/proposal'

export const fixture: S14Data = {
  number: 'Soberania Digital',
  title: 'Licenciamento Estratégico e Acesso Controlado',
  subtitle: 'O AgroAssistente é construído com recursos públicos brasileiros — sua arquitetura de licenciamento e acesso reflete esse compromisso.',
  headline: 'Dados Brasileiros Para o Brasil.',

  sovereigntyStatement:
    'O Brasil é o 2º maior mercado de desenvolvedores da API da OpenAI no mundo — o país do Sul Global mais exposto a plataformas que não controla (OpenAI, 2024). 88% da infraestrutura de nuvem brasileira está sob controle estrangeiro (MCTI, maio 2026). A China lançou o Sinong em janeiro de 2026 — LLM agrícola open-source, 8B e 32B parâmetros — e está em expansão ativa para mercados do Sul Global. Entregar o corpus AgroLinguaBR sob licença MIT seria subsidiar, com dinheiro público do FINEP, a entrada de concorrentes estrangeiros exatamente no campo que este projeto está abrindo.',

  sovereigntyRationale:
    'O risco não é hipotético — é documentado, tem nome e data. Em dezembro de 2025, os Emirados Árabes Unidos lançaram o AgriLLM (CGIAR + Gates Foundation, US$ 200 milhões) treinado em 120.000 pares Q&A de agricultores em 39 países. O Brasil não está na lista — ainda. Na COP30 em Belém, a Fundação Gates anunciou US$ 1,4 bilhão (2026–2029) para IA agrícola no Sul Global. Esse dinheiro vai financiar expansão para o Brasil independentemente do que o Brasil construa — a questão é se o Brasil terá sua própria infraestrutura quando isso acontecer, ou se dependerá de plataformas que não controlamos. A China, com o Sinong já em produção e código aberto, precisa de uma coisa para entrar no mercado de extensão rural brasileiro: dados agrícolas em português regional. O corpus AgroLinguaBR, sob licença MIT, seria exatamente isso — entregue de graça, financiado pelo FINEP. O que protege o AgroLinguaBR não é sigilo: é a cláusula NC. Pesquisadores, EMBRAPA, EMATER e cooperativas usam livremente. A Sinong Technologies precisa negociar. Soberania digital não é controlar quem acessa — é controlar quem se apropria.',

  licenseExplained: {
    mitTitle: 'Permissão Total — Sem Restrição de Uso Comercial',
    mitSummary:
      'A licença MIT é a mais permissiva existente: qualquer pessoa, empresa ou governo pode baixar o corpus, modificar, incorporar em produto próprio e cobrar por ele — sem pedir autorização, sem pagar royalties, sem nenhuma obrigação além de manter uma linha de atribuição no código. É a licença do Linux, do React, do Node.js. Para código de infraestrutura genérico, faz todo sentido. Para um corpus de dados agrícolas construído com trabalho de campo financiado pelo Estado brasileiro, é uma cessão de ativo público sem contrapartida.',
    mitRisk:
      'A China lançou o Sinong em janeiro de 2026: LLM agrícola open-source, 8B e 32B parâmetros, procurando dados para expansão internacional. Com licença MIT, os desenvolvedores do Sinong baixariam o AgroLinguaBR esta semana, adicionariam suporte a português regional ao modelo já em produção, e lançariam extensão rural em pt-BR com infraestrutura de bilhões de dólares do Estado chinês. Os EAU já têm o AgriLLM em 39 países (US$ 200M, dez/2025) — o Brasil é o próximo passo natural. A Gates Foundation anunciou US$ 1,4 bilhão para IA agrícola no Sul Global na COP30 em Belém. Nenhum desses atores pediria licença. Com MIT, não precisariam.',

    ncSaTitle: 'Aberto Para a Ciência, Protegido do Mercado Privado',
    ncSaTerms: [
      {
        term: 'CC',
        plain: 'Creative Commons — família de licenças abertas criada para equilibrar acesso público e proteção de direitos. Usada por Wikipedia, OpenStreetMap, MIT OpenCourseWare e milhões de obras científicas.',
      },
      {
        term: 'BY',
        plain: 'Attribution (Atribuição) — quem usar o material deve creditar a fonte: "AgroLinguaBR, produzido no projeto SABIA com financiamento FINEP AgriFam-ICT 2026". O Brasil fica visível no ecossistema global de IA agrícola.',
      },
      {
        term: 'NC',
        plain: 'Non-Commercial (Não-Comercial) — o ativo não pode ser usado para gerar lucro direto por empresas privadas sem negociação. Pesquisadores, universidades, cooperativas, EMATER, ONGs e órgãos públicos: acesso irrestrito e gratuito. Empresa privada que quer incorporar em produto comercial: precisa de acordo.',
      },
      {
        term: 'SA',
        plain: 'Share-Alike (Compartilha-Igual) — se alguém construir sobre o AgroLinguaBR para fins não-comerciais e publicar um corpus derivado, esse derivado deve ter a mesma licença. As melhorias feitas pela comunidade científica ficam acessíveis à comunidade científica — não se tornam proprietárias.',
      },
    ],
    ncSaSummary:
      'Em resumo: todo o ecossistema público de extensão rural (EMATER, EMBRAPA, universidades, cooperativas, a própria FINEP) usa livremente. O que é bloqueado é a apropriação comercial privada por atores sem relação com a missão pública do projeto.',

    scenarios: [
      { who: 'Pesquisador da EMBRAPA', action: 'Baixa o corpus, treina novo modelo, publica artigo científico', allowed: 'yes' },
      { who: 'EMATER-CE', action: 'Integra AgroAPI no sistema de atendimento dos técnicos estaduais', allowed: 'yes' },
      { who: 'Universidade Federal', action: 'Usa AgroLinguaBR em dissertação de mestrado sobre NLP agrícola', allowed: 'yes' },
      { who: 'Cooperativa de agricultores', action: 'Usa o AgroAssistente para orientar seus associados', allowed: 'yes' },
      { who: 'Startup brasileira de agtech', action: 'Quer incorporar o corpus em produto SaaS comercial com assinatura paga', allowed: 'negotiate' },
      { who: 'Big Tech estrangeira (Google, OpenAI, Alibaba)', action: 'Incorpora AgroLinguaBR no treinamento de LLM proprietário e comercializa globalmente', allowed: 'no' },
      { who: 'Multinacional do agronegócio', action: 'Usa o modelo fine-tuned em plataforma de venda de insumos com lucro direto', allowed: 'no' },
    ],

    keyInsight:
      'Observe o precedente: a China lançou o Sinong como open-source — mas o corpus agrícola chinês permanece em bancos de dados governamentais, inacessível. A Índia abriu o Kisan e-Mitra para os agricultores — mas os dados de treinamento ficam em servidores do Ministério da Agricultura indiano. Nenhum país que construiu infraestrutura soberana de IA agrícola entregou os dados de treinamento ao mundo. Só o Brasil estava considerando fazer isso. A CC BY-NC-SA 4.0 é, paradoxalmente, MAIS generosa para o ecossistema público brasileiro do que a MIT — porque garante que EMBRAPA, EMATER e cooperativas usem livremente, enquanto impede que o ativo seja privatizado por quem tem mais infraestrutura do que responsabilidade com o campo brasileiro.',
  },

  licenseTitle: 'Arquitetura de Licenciamento por Ativo',

  licenseItems: [
    {
      asset: 'AgroLinguaBR — Corpus (25.000 pares Q&A)',
      license: 'CC BY-NC-SA 4.0',
      who: 'ICTs públicas, pesquisadores, cooperativas, EMATER, OSCs — acesso irrestrito',
      restriction: 'Uso comercial por empresas privadas requer acordo de licenciamento negociado. Derivados mantêm a mesma licença.',
      colorVariant: 'nc',
    },
    {
      asset: 'Modelo LLM Fine-tuned (modelo base + fine-tuning agrícola)',
      license: 'CC BY-NC-SA 4.0',
      who: 'ICTs públicas, pesquisadores, instituições sem fins lucrativos — pesos liberados para pesquisa',
      restriction: 'Incorporação em produto comercial requer negociação — protege o ativo estratégico nacional contra apropriação por incumbentes estrangeiros.',
      colorVariant: 'nc',
    },
    {
      asset: 'AgroEval — Benchmark de Avaliação',
      license: 'Apache 2.0',
      who: 'Qualquer pesquisador ou desenvolvedor — sem restrição de uso',
      restriction: 'Sem restrição comercial. Ferramenta de avaliação científica pública — quanto mais adotada, maior o valor para o ecossistema.',
      colorVariant: 'open',
    },
    {
      asset: 'Código-fonte (AgroAssistente, Coopera Digital, AgroAPI)',
      license: 'Apache 2.0',
      who: 'Qualquer entidade — código de infraestrutura reutilizável livremente',
      restriction: 'Sem restrição. O valor está no serviço operado, não no código — compartilhar fortalece o ecossistema de IA soberana.',
      colorVariant: 'open',
    },
    {
      asset: 'AgroAPI — Serviço de Consulta',
      license: 'Acesso Gratuito Regulado',
      who: 'Agricultores familiares, cooperativas, EMATER, ICTs — acesso gratuito permanente mediante credencial',
      restriction: 'Rate-limiting por capacidade de infraestrutura. Acesso expandido gradualmente conforme investimento em servidores. Não disponível para uso em produtos comerciais sem acordo específico.',
      colorVariant: 'open',
    },
  ],

  accessTitle: 'Capacidade de Servidor — Escala Responsável',

  accessStatement:
    'O servidor de inferência dedicado previsto nesta proposta (R$ 600.000 em capital de equipamentos) é dimensionado para os pilotos com qualidade de serviço garantida. Prometer cobertura nacional com esse orçamento seria desonesto com os avaliadores e, pior, com os agricultores que entrariam em um sistema subdimensionado. O acesso será controlado e seletivo na primeira escala — não como falha de ambição, mas como compromisso com a experiência real de quem usa.',

  serverNote:
    'Um servidor de inferência de R$ 600k suporta operação contínua de aproximadamente 800 a 2.500 usuários ativos com latência aceitável (< 5 segundos por consulta). Ampliar para cobertura nacional (~10 milhões de agricultores familiares) requer investimento adicional de ordem de magnitude — previsto para fases subsequentes mediante captação via BNDES, MCTI ou nova rodada FINEP.',

  accessPhases: [
    {
      id: 'phase-pilot',
      period: 'Meses 13–24 · Fase 2',
      label: 'Piloto Controlado',
      scope: 'Crateús-CE, Sousa-PB, Vitória da Conquista-BA',
      count: '800 agricultores',
      criteria:
        'Acesso via convite emitido pela cooperativa ou EMATER local parceira. Critério de seleção documentado no diagnóstico participativo da Fase 1: smartphone + WhatsApp ativo + sinal 3G verificado em ponto de referência.',
    },
    {
      id: 'phase-expand',
      period: 'Meses 25–36 · Fase 3',
      label: 'Expansão Piloto',
      scope: 'Mesmas 3 regiões + municípios adjacentes via rede EMATER multiplicadora',
      count: '2.500 agricultores / 18 cooperativas',
      criteria:
        'Expansão conduzida pelos 120 multiplicadores EMATER treinados na Fase 2 — não via cadastro aberto. Prioridade a agricultores das cooperativas parceiras com carta de anuência assinada.',
    },
    {
      id: 'phase-regional',
      period: 'Pós-projeto · Anos 4–5',
      label: 'Expansão Regional',
      scope: 'Nordeste e demais regiões com déficit severo de ATER documentado',
      count: 'A definir',
      criteria:
        'Condicionado a novo ciclo de financiamento público (BNDES Fundo Clima, MCTI Conecta Agro, parceria com secretarias estaduais de agricultura). A infraestrutura desta proposta é o ativo habilitador — não paga por essa fase.',
      condition: 'Sujeito a captação',
    },
    {
      id: 'phase-national',
      period: 'Visão de Longo Prazo',
      label: 'Cobertura Nacional',
      scope: 'Todo o território nacional integrado com EMATERs estaduais e cooperativas regionais',
      count: '~10M agricultores',
      criteria:
        'Visão de escala máxima — requer múltiplas rodadas de investimento público e consolidação do modelo de sustentabilidade operacional via receita de licenciamento comercial e contratos institucionais.',
      condition: 'Visão de futuro',
    },
  ],

  expansionVision:
    'O que esta proposta constrói não é o produto final — é o ativo permanente e o modelo comprovado que tornam a escala nacional possível. Cada agricultor que usa o AgroAssistente nos pilotos gera dados que melhoram o corpus. Cada cooperativa que adota o Coopera Digital prova o modelo de sustentabilidade. Cada técnico EMATER multiplicador expande a cobertura sem expandir o orçamento. A escala nacional não depende de um único edital — depende de uma infraestrutura soberana que permanece no Brasil independente de qual empresa, governo ou plataforma estrangeira mude suas condições de uso.',
}
