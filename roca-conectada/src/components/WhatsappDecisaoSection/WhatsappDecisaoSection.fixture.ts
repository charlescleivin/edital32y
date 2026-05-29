import type { S17Data } from '@/types/proposal'

export const fixture: S17Data = {
  number: 'A Decisão WhatsApp',
  title: 'Por Que o SABIA Usa o WhatsApp — Uma Resposta Honesta',
  subtitle:
    'Um projeto de soberania digital que usa uma plataforma americana. A contradição aparente exige uma resposta fundamentada em dados, não uma deflexão.',
  headline: 'A Soberania Está na Camada de IA — Não no Canal de Mensagens.',

  confrontationStatement:
    'O SABIA é um projeto de soberania digital. Por que usa o WhatsApp — uma plataforma de uma empresa americana?',

  dataPoints: [
    {
      value: '82%',
      label:
        'dos usuários rurais de internet no Brasil acessam a web exclusivamente pelo celular — margem de 25 pontos percentuais acima do índice urbano',
      source: 'CGI.br / CETIC.br · Pesquisa TIC Domicílios 2023 · nov. 2023',
      color: 'terra',
    },
    {
      value: '73,7%',
      label:
        'dos residentes rurais com 10 anos ou mais possuem celular próprio (2023, ante 55% em 2016) — crescimento de 18,7 pp em 7 anos',
      source: 'IBGE PNAD Contínua TIC 2023',
      color: 'gold',
    },
    {
      value: '96%',
      label:
        'dos agricultores rurais brasileiros com celular se comunicam via WhatsApp — penetração que não é preferência, é realidade estrutural',
      source: 'Embrapa · "ATER digital e seus benefícios" · 2023',
      color: 'sage',
    },
    {
      value: '147M',
      label:
        'usuários ativos mensais do WhatsApp no Brasil · 93,4% de todos os usuários de internet · app #1 mais usado no país',
      source: 'Statista / DataReportal Digital 2024 Brazil',
      color: 'green',
    },
  ],

  buildCostNote:
    'Esses valores cobrem apenas a engenharia. Compram zero usuários. O valor do WhatsApp no Brasil rural é função de 147 milhões de brasileiros já na mesma plataforma. Efeitos de rede não se compram em nenhum orçamento — e os agricultores que o SABIA quer alcançar já estão lá.',

  precedents: [
    {
      flag: '🌍',
      name: 'Farmer.Chat',
      org: 'Microsoft Research India',
      year: '2024',
      farmers: '15.000+ agricultores · 300.000+ consultas',
      channel: 'WhatsApp + Telegram',
      source:
        'Singh et al. "Farmer.Chat: Scaling AI-Powered Agricultural Services for Smallholder Farmers." arXiv:2409.08916, set. 2024. Citação direta (Sec. 3.1): "Deployed on popular messaging apps like WhatsApp and Telegram, Farmer.Chat reduces barriers to entry by leveraging familiar communication tools. This minimizes onboarding friction and fosters widespread adoption."',
      sourceUrl: 'https://arxiv.org/abs/2409.08916',
    },
    {
      flag: '🇬🇭',
      name: 'Darli AI (Farmerline)',
      org: 'Farmerline · TIME Best Inventions 2024',
      year: '2024',
      farmers: '110.000 agricultores · 27 idiomas',
      channel: 'WhatsApp',
      source:
        'Farmerline / TIME. "Darli AI: TIME 200 Best Inventions 2024." Outubro 2024. Reconhecido como uma das 200 melhores invenções do ano pela revista TIME — entregue via WhatsApp.',
      sourceUrl: 'https://farmerline.co/farmerlines-darli-ai-recognized-on-times-list-of-the-best-inventions-of-2024/',
    },
    {
      flag: '🇧🇷',
      name: 'RAImundo (EMBRAPA + MAPA + MDA)',
      org: 'EMBRAPA · Ministério da Agricultura · AZap.AI',
      year: '2025',
      farmers: 'Meta: 100.000 usuários no 1º ano',
      channel: 'WhatsApp',
      source:
        'AZap.AI + EMBRAPA + MAPA + MDA. Lançamento RAImundo, maio 2025. A própria EMBRAPA — a instituição federal brasileira de pesquisa agropecuária — lançou seu assistente de IA para agricultores familiares via WhatsApp.',
      sourceUrl:
        'https://sucessonocampo.com.br/embrapa-mapa-mda-e-azap-ai-lancam-assistente-virtual-para-produtores-rurais/',
    },
  ],

  sovereigntyArgument:
    'A soberania do projeto SABIA reside na camada de IA — não no canal de distribuição. O AgroLinguaBR (corpus) está sob CC BY-NC-SA 4.0, depositado com DOI em repositório institucional brasileiro, propriedade da ICT executora. O modelo LLM fine-tuned está sob CC BY-NC-SA 4.0, com pesos armazenados em infraestrutura brasileira. O AgroEval (benchmark) é Apache 2.0, público. A AgroAPI é hospedada em servidores brasileiros, propriedade da ICT executora. O Coopera Digital armazena todos os dados no Brasil em formato exportável aberto (JSON/CSV). A integração WhatsApp é uma configuração, não uma arquitetura. O backend é projetado como agnóstico de canal desde o primeiro dia: o mesmo motor de inferência que alimenta o WhatsApp hoje pode alimentar qualquer outro canal — Telegram, plataforma governamental de mensagens, interface de voz — por reconfiguração, não reescrita.',

  risks: [
    {
      risk:
        'A Meta pode alterar ou encerrar a API WhatsApp Business — risco de dependência de plataforma de terceiro',
      mitigation:
        'Backend agnóstico de canal já projetado na arquitetura. Canais alternativos mapeados (app nativo iOS/Android + interface web). Os ativos soberanos de IA (corpus, modelo, API) permanecem intactos independentemente de decisões da Meta.',
      severity: 'medium',
    },
    {
      risk:
        'Mudanças de política de privacidade da Meta podem afetar o tratamento de dados de agricultores',
      mitigation:
        'Nenhum dado de conteúdo agrícola é armazenado na infraestrutura Meta. O WhatsApp é usado exclusivamente como canal de entrega de mensagens. Todos os dados de consulta e resposta são armazenados nos servidores brasileiros da AgroAPI.',
      severity: 'low',
    },
    {
      risk:
        'Custos de API WhatsApp Business podem aumentar, tornando o modelo econômico inviável em escala',
      mitigation:
        'Precificação monitorada nos planos de sustentabilidade. A migração para canal alternativo (app nativo) já está prevista na visão de escala pós-piloto — o mesmo backend, canal diferente.',
      severity: 'low',
    },
    {
      risk:
        'Restrições regulatórias futuras sobre uso de plataformas estrangeiras em serviços públicos',
      mitigation:
        'Arquitetura channel-agnostic protege contra esse cenário. O projeto documenta explicitamente os canais alternativos e o cronograma de transição. A soberania dos ativos de IA permanece independente do canal.',
      severity: 'low',
    },
  ],

  citations: [
    {
      authors: 'CGI.br / CETIC.br',
      title: 'Pesquisa TIC Domicílios 2023',
      venue: 'Centro Regional de Estudos para o Desenvolvimento da Sociedade da Informação',
      year: '2023',
      url: 'https://cetic.br/pt/arquivos/domicilios/2023/domicilios/',
      keyFinding:
        '82% dos usuários rurais de internet no Brasil acessam a web exclusivamente pelo celular — 25 pontos percentuais acima do índice urbano (57%).',
    },
    {
      authors: 'IBGE',
      title: 'PNAD Contínua TIC 2023 — Acesso à Internet e à Televisão e Posse de Telefone Móvel Celular para Uso Pessoal',
      venue: 'Instituto Brasileiro de Geografia e Estatística',
      year: '2024',
      url: 'https://agenciadenoticias.ibge.gov.br/agencia-noticias/2012-agencia-de-noticias/noticias/41024',
      keyFinding:
        '73,7% dos residentes rurais com 10 anos ou mais possuem celular próprio em 2023, ante 55% em 2016.',
    },
    {
      authors: 'Embrapa',
      title: 'ATER digital e seus benefícios',
      venue: 'Empresa Brasileira de Pesquisa Agropecuária',
      year: '2023',
      url: 'https://www.embrapa.br/en/busca-de-noticias/-/noticia/85620345/ater-digital-e-seus-beneficios',
      keyFinding:
        '96% dos agricultores rurais brasileiros com celular utilizam o WhatsApp como canal de comunicação principal.',
    },
    {
      authors: 'DataReportal / Statista',
      title: 'Digital 2024 Brazil',
      venue: 'DataReportal Global Digital Reports',
      year: '2024',
      url: 'https://datareportal.com/reports/digital-2024-brazil',
      keyFinding:
        '147–148 milhões de usuários ativos mensais do WhatsApp no Brasil. 93,4% dos usuários de internet acessam o WhatsApp mensalmente. App #1 mais usado no Brasil.',
    },
    {
      authors: 'Singh, A. et al.',
      title: 'Farmer.Chat: Scaling AI-Powered Agricultural Advisory Services for Smallholder Farmers',
      venue: 'arXiv preprint',
      year: '2024',
      doi: 'arXiv:2409.08916',
      url: 'https://arxiv.org/abs/2409.08916',
      keyFinding:
        '15.000+ agricultores e 300.000+ consultas em Quênia, Índia, Etiópia e Nigéria. Seção 3.1: "Deployed on popular messaging apps like WhatsApp and Telegram, Farmer.Chat reduces barriers to entry by leveraging familiar communication tools. This minimizes onboarding friction and fosters widespread adoption." (Microsoft Research India.)',
    },
    {
      authors: 'Farmerline / TIME',
      title: 'Darli AI: TIME 200 Best Inventions 2024',
      venue: 'TIME Magazine',
      year: '2024',
      url: 'https://farmerline.co/farmerlines-darli-ai-recognized-on-times-list-of-the-best-inventions-of-2024/',
      keyFinding:
        '110.000 agricultores, 27 idiomas, entrega via WhatsApp. Reconhecido como uma das 200 melhores invenções do ano pela TIME.',
    },
    {
      authors: 'AZap.AI / EMBRAPA / MAPA / MDA',
      title: 'RAImundo — Assistente Virtual para Produtores Rurais',
      venue: 'Sucesso no Campo / Lançamento oficial',
      year: '2025',
      url: 'https://sucessonocampo.com.br/embrapa-mapa-mda-e-azap-ai-lancam-assistente-virtual-para-produtores-rurais/',
      keyFinding:
        'A própria EMBRAPA lançou em maio de 2025 um assistente de IA para agricultores familiares via WhatsApp, em parceria com os Ministérios da Agricultura e do Desenvolvimento Agrário. Meta: 100.000 usuários no primeiro ano.',
    },
    {
      authors: 'Yeo, B. & Keske, C.',
      title: 'From profitability to trust: factors shaping digital agriculture adoption',
      venue: 'Frontiers in Sustainable Food Systems',
      year: '2024',
      doi: '10.3389/fsufs.2024.1456991',
      keyFinding:
        'Principais barreiras à adoção de tecnologia digital na agricultura: (1) economia/escala, (2) expectativas de desempenho, (3) exigências de esforço e mudança de fluxo de trabalho. Citação direta: "Farmers comfortable with spreadsheets and manual processes showed reluctance toward systems requiring workflow changes."',
    },
    {
      authors: 'Cleveroad',
      title: 'How to Build a Chat App Like WhatsApp in 2026',
      venue: 'Cleveroad Blog',
      year: '2025',
      url: 'https://www.cleveroad.com/blog/how-much-does-it-cost-to-create-an-app-like-whatsapp/',
      keyFinding:
        'Custo de engenharia para app equivalente ao WhatsApp: $500.000–$1.000.000. Prazo de desenvolvimento: 6–9 meses.',
    },
    {
      authors: 'SpaceO Technologies',
      title: 'How Much Does it Cost to Make an App like WhatsApp',
      venue: 'SpaceO Technologies Blog',
      year: '2025',
      url: 'https://www.spaceotechnologies.com/blog/cost-to-develop-an-app-like-whatsapp/',
      keyFinding:
        'App de mensagens complexo: $80.000–$300.000+. Prazo: 8–12 meses. Esses valores cobrem apenas a engenharia — não incluem aquisição de usuários nem efeitos de rede.',
    },
  ],
}
