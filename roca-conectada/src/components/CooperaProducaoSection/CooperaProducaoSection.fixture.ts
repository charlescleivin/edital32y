import type { CooperaProducaoSectionProps } from './CooperaProducaoSection'

export const fixture: CooperaProducaoSectionProps = {
  number: 'Seção 16',
  title: 'Coopera Digital em Produção',
  subtitle:
    'Como a AgroAPI conecta inteligência agronômica às cooperativas — e como isso chega às famílias agricultoras com impacto econômico documentado',
  headline:
    'A renda existe em lei. A burocracia impede. Coopera Digital remove a barreira.',

  /* ── lead stats ─────────────────────────────────────────────────────────── */
  leadStats: [
    {
      value: '+23% a +106%',
      label:
        'Aumento de renda via PNAE para agricultores familiares — efeitos maiores para os de menor renda',
      source: 'Elias et al. IPEA Texto para Discussão n. 3072, dezembro 2024. DOI: 10.38116/td3072-port',
      colorVariant: 'terra',
    },
    {
      value: '1,3%',
      label:
        'Agricultores familiares do Nordeste em cooperativas — a menor taxa de qualquer região. Cooperados recebem ATER em taxa tripla',
      source:
        'Silva & Nunes. RESR vol. 61, n. 2, 2023. DOI: 10.1590/1806-9479.2021.252661',
      colorVariant: 'gold',
    },
    {
      value: '9:1 a 15:1',
      label:
        'Retorno sobre custo de assessoria digital agrícola — razão benefício-custo documentada',
      source:
        'World Bank. Digital Agriculture Roadmap Playbook. 2025. P508004',
      colorVariant: 'sage',
    },
  ],

  /* ── gap statement ──────────────────────────────────────────────────────── */
  gapStatement:
    'Municípios do Nordeste executam entre 0% e 23,5% da cota obrigatória de 30% do PNAE. A barreira não é falta de oferta — é complexidade documental e administrativa. A lei garante o mercado. A burocracia bloqueia o acesso.',

  /* ── API endpoints ──────────────────────────────────────────────────────── */
  apiEndpoints: [
    {
      id: 'EP-01',
      icon: '🌱',
      title: 'Recomendação Sazonal de Cultivo por Bioma',
      description:
        'Recomendações personalizadas por bioma (Caatinga, Cerrado, Mata Atlântica) para o plano de plantio do próximo ciclo. Considera janela climática, variedades tolerantes à seca e histórico de preços PAA/PNAE da região.',
    },
    {
      id: 'EP-02',
      icon: '💰',
      title: 'Inteligência de Preços PAA/PNAE',
      description:
        'Tabela de referência CONAB cruzada com o calendário de entregas da cooperativa. Permite ao gestor planejar o mix de culturas com maior margem antes do ciclo de plantio — não após a colheita.',
    },
    {
      id: 'EP-03',
      icon: '🔬',
      title: 'Diagnóstico Fitossanitário e Zootécnico',
      description:
        'O gestor descreve sintomas em linguagem natural (texto ou voz) e recebe diagnóstico diferencial com protocolo de intervenção. Referencia normas MAPA vigentes (ex.: IN 6/2018) para registro obrigatório de tratamentos veterinários.',
    },
    {
      id: 'EP-04',
      icon: '📋',
      title: 'Verificação de Conformidade Regulatória',
      description:
        'Checagem automática de DAA, declarações de aptidão ao PRONAF e certidões exigidas pelo PNAE antes de submeter um lote. Toda chamada gera trilha de auditoria com timestamp e ID do agricultor — apresentável a auditores MAPA/CONAB.',
    },
  ],

  /* ── timeline ───────────────────────────────────────────────────────────── */
  timelineTitle: 'Maria das Dores — Uma semana com o ecossistema',
  timelineSubtitle:
    'Maria das Dores, 47 anos, cultiva feijão-caupi em 6 ha em Crateús-CE. Seu técnico ATER cobre 620 famílias — uma visita a cada 3–4 meses. Esta é a semana que muda a conta bancária dela.',

  timeline: [
    {
      time: 'Segunda, manhã',
      actor: 'farmer',
      event: 'Diagnóstico veterinário em 40 segundos via WhatsApp',
      detail:
        'Sua cabra apresenta secreção nasal e prostração. Maria envia mensagem ao AgroAssistente: "minha cabra tá com catarro, tossindo e sem comer desde ontem". Mesmo com 3G intermitente, recebe diagnóstico diferencial em português nordestino em 40 segundos, com protocolo de triagem e referência à IN 6/2018 MAPA para registro do tratamento. Sem esperar o técnico EMATER.',
    },
    {
      time: 'Mesma semana',
      actor: 'manager',
      event: 'DAA gerada automaticamente — sem viagem ao escritório',
      detail:
        'O gestor da cooperativa abre o Coopera Digital e visualiza o lote de feijão-caupi de Maria agendado para entrega PNAE no dia 15. O sistema auto-gera a DAA pré-preenchida e o certificado de rastreabilidade. Maria não precisa ir ao escritório da cooperativa — validação digital do registro de plantio ao certificado de entrega.',
    },
    {
      time: 'Dia 20',
      actor: 'system',
      event: 'Pagamento recebido — 35 dias após entrega',
      detail:
        'Antes do Coopera Digital: prazo médio de 110+ dias (30–120 dias de contratação CONAB + 30–60 dias de liquidação). Com a documentação automatizada e o fluxo de conformidade digital, o pagamento cai em 35 dias. Para uma cooperativa com R$800k/ano no PAA/PNAE, isso libera R$50–80k/ano em capital de giro.',
    },
    {
      time: 'Fim do mês',
      actor: 'manager',
      event: 'Planejamento de dezembro com inteligência da AgroAPI',
      detail:
        'O gestor planeja o ciclo de coleta de dezembro. O Coopera Digital consulta a AgroAPI (EP-01) e retorna recomendações de variedades tolerantes à seca para a Caatinga — considerando a janela climática prevista pelo INMET. Maria recebe as recomendações pelo mesmo WhatsApp que usa para o AgroAssistente. Nenhum app novo, nenhum portal governamental.',
    },
  ],

  /* ── conclusion ─────────────────────────────────────────────────────────── */
  conclusionStatement:
    'O AgroAssistente responde perguntas individuais — mas não vê o padrão coletivo de produção. Não sabe que 47 dos 80 associados de uma cooperativa plantam feijão-caupi na mesma janela de 15 dias, que um surto de fungo avança no bioma vizinho, ou que o contrato PNAE vence em 6 semanas com o volume 30% abaixo do comprometido. O Coopera Digital é a camada de agregação que transforma consultas individuais em inteligência coletiva: quando a AgroAPI detecta risco de mosca-branca no Vale do Piancó, o sistema dispara notificação proativa para todos os associados com culturas suscetíveis — sem esperar que cada um pergunte. Isso transforma a IA de reativa em preventiva. Sem Coopera Digital, o AgroAssistente é apenas um chatbot. Sem AgroAssistente, o Coopera Digital tem gestão mas não tem inteligência. O ecossistema vale a combinação — e é essa combinação que o Brasil ainda não tem.',

  /* ── citations ──────────────────────────────────────────────────────────── */
  citations: [
    {
      authors: 'Elias, V.F. et al.',
      title:
        'Efeitos das compras públicas na renda de agricultores familiares no Brasil',
      venue: 'IPEA Texto para Discussão n. 3072',
      year: '2024',
      doi: '10.38116/td3072-port',
      keyFinding:
        'Participação no PAA eleva renda familiar em +19% a +39%. Participação no PNAE eleva renda em +23% a +106%. Efeitos maiores para os agricultores de menor renda.',
    },
    {
      authors: 'Silva, J.G.; Nunes, E.M.',
      title: 'Agricultura familiar e cooperativismo no Brasil',
      venue: 'RESR vol. 61, n. 2',
      year: '2023',
      doi: '10.1590/1806-9479.2021.252661',
      keyFinding:
        'Apenas 10,6% dos agricultores familiares estão em cooperativas. No Nordeste: 1,3% — a menor taxa de qualquer região. Cooperados recebem assistência técnica em taxa tripla (58,2% vs 21% dos não-membros).',
    },
    {
      authors: 'IPEA / Vieira Filho, J.E.R.; Ramos, P.',
      title: 'Cooperativismo pode aumentar eficiência da agricultura familiar',
      venue: 'IPEA — Repositório Institucional',
      year: '2021',
      doi: 'repositorio.ipea.gov.br/f09ed925-9f72-45c6-be38-dd99ab05928d',
      keyFinding:
        'Associação a cooperativas triplica o acesso à ATER. O Nordeste concentra 60% da pobreza agrícola extrema do Brasil e apenas 5,9% das propriedades familiares afiliadas a cooperativas.',
    },
    {
      authors: 'Cunha, M.A.; Freitas, A.F.; Salgado, R.J.',
      title:
        'Efeitos dos Programas Governamentais de Aquisição de Alimentos para a Agricultura Familiar em Espera Feliz, MG',
      venue: 'RESR vol. 55, n. 3',
      year: '2017',
      doi: '10.1590/1234-56781806-94790550301',
      keyFinding:
        'Agricultores ingressam em cooperativas explicitamente para escapar de "toda a papelada e burocracia". Prazo de pagamento pós-entrega: 30–60 dias — antes da etapa de contratação.',
    },
    {
      authors: 'CONAB',
      title: 'Carta de Serviços — Apoio à Formação de Estoques pela Agricultura Familiar',
      venue: 'CONAB — Portal Institucional',
      year: '2024',
      doi: 'conab.gov.br/acoes-e-programas/carta-de-servicos',
      keyFinding:
        'Processo de contratação pré-entrega: 30–120 dias adicionais. Hiato total de fluxo de caixa: 60–180+ dias desde a submissão do projeto até o recebimento do pagamento.',
    },
    {
      authors: 'Gênero e Número',
      title:
        'Nordeste, agricultura familiar e PNAE: municípios não cumprem quota obrigatória de 30%',
      venue: 'Gênero e Número — Investigação',
      year: '2022',
      doi: 'generonumero.media/reportagens/nordeste-agricultura-familiar-pnae/',
      keyFinding:
        'Municípios do Nordeste executam entre 0% e 23,5% da cota obrigatória de 30% do PNAE. São José do Egito (PE): 0% de execução com R$412.000 transferidos. A barreira primária é documental e administrativa — não é falta de oferta.',
    },
    {
      authors: 'Rajkhowa, P.; Qaim, M.',
      title:
        'Personalized digital extension services and agricultural performance',
      venue: 'PLoS ONE',
      year: '2021',
      doi: '10.1371/journal.pone.0259319',
      keyFinding:
        'Adotantes de extensão digital: +25–29% na renda de lavoura (PSM controlado), +18% na produtividade. Amostra: 1.028 agricultores. Modelo de entrega: 1 gestor de cooperativa digitalmente equipado servindo ~1.000 associados — análogo direto ao Coopera Digital.',
    },
    {
      authors: 'World Bank',
      title: 'Digital Agriculture Roadmap Playbook',
      venue: 'World Bank Group',
      year: '2025',
      doi: 'documents1.worldbank.org/curated/en/099053025063021993',
      keyFinding:
        'Razão benefício-custo de assessoria digital agrícola: 9:1 a 15:1. Mensagens digitais em períodos de alta precipitação elevaram renda em USD 30–48 por agricultor.',
    },
  ],
}
