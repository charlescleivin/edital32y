import type { ProblemaSectionProps } from './ProblemaSection'

export const fixture: ProblemaSectionProps = {
  number: 'Seção 2',
  title: 'Problema e Justificativa',
  subtitle: 'Diagnóstico do cenário atual da digitalização rural brasileira',
  stats: [
    { value: '81,8%', label: 'dos agricultores familiares sem ATER — no Nordeste, 92,6% (IBGE Censo Agropecuário 2017)', colorVariant: 'red' },
    { value: 'R$18,8bi', label: 'por ano em renda rural não realizada — estimativa dos autores com base em Rocha Junior et al. (RESR 2020, método PSM) e IBGE (2017)', colorVariant: 'red' },
    { value: '88%', label: 'da infraestrutura de nuvem do Brasil sob controle estrangeiro (MCTI, maio 2026)', colorVariant: 'blue' },
    { value: '2º', label: 'maior mercado de desenvolvedores ativos na API da OpenAI — o Brasil é o país do Sul Global mais exposto a plataformas que não controla (OpenAI, 2024)', colorVariant: 'blue' },
  ],
  barriers: [
    {
      icon: '📶',
      title: 'Conectividade Intermitente — e a Resposta Tecnológica',
      description: 'Soluções digitais existentes requerem conexão estável e contínua — inviabilizando uso em áreas rurais onde a cobertura 4G chega a menos de 30% no Semiárido (Anatel, 2023). O SABIA responde a essa barreira com arquitetura assíncrona tolerante a conectividade intermitente: o AgroAssistente opera via WhatsApp, que enfileira mensagens localmente e as entrega automaticamente ao restaurar o sinal — sem perda de sessão, sem necessidade de conexão estável.',
      keyFact: { value: '≤30%', label: 'cobertura 4G no Semiárido (Anatel 2023)' },
    },
    {
      icon: '🏗️',
      title: 'Barreira 2 — A Dependência de Plataformas Estrangeiras Descartáveis: ruptura documentada, repetida, previsível',
      description: 'A solução tecnicamente óbvia para o déficit de ATER seria redirecionar agricultores para LLMs comerciais. O histórico recente documenta por que essa abordagem constitui uma vulnerabilidade estratégica, não uma solução. Em março de 2023, a Itália bloqueou o ChatGPT em menos de 24 horas — 60 milhões de pessoas perderam acesso sem aviso. Em novembro de 2023, a diretoria da OpenAI demitiu o CEO sem aviso; por cinco dias, toda aplicação GPT-4 no mundo rodou sobre uma empresa em colapso de governança. Em julho de 2024, a OpenAI bloqueou países como China, Rússia e Irã por critérios unilaterais e discricionários.\n\nEm dezembro de 2025, a GROQ — provedora de inferência com 2 milhões de desenvolvedores — foi adquirida pela Nvidia sem consulta. Em janeiro de 2026, a OpenAI descontinuou o GPT-4o com 14 dias de aviso, após prometer "aviso amplo" (The Register). O Brasil é o segundo maior mercado de desenvolvedores ativos na API da OpenAI — o país do Sul Global mais exposto a um ponto único de falha que não controla (Softex, 2025).\n\nA questão não é se isso acontecerá com alguma plataforma que suporta a extensão rural de 3,9 milhões de famílias. É quando — e se o Brasil terá infraestrutura própria quando acontecer. O SABIA elimina esse risco pela raiz: infraestrutura soberana nacional, sem dependência de fornecedor estrangeiro.',
      keyFact: { value: '14 dias', label: 'de aviso da OpenAI para descontinuar o GPT-4o em janeiro de 2026, após prometer \'aviso amplo\' — ilustrando o padrão de ruptura unilateral (The Register, 2026)' },
    },
    {
      icon: '💰',
      title: 'Custo Inacessível das Plataformas Existentes',
      description: 'Plataformas agrícolas digitais comerciais cobram entre R$ 80 e R$ 500/mês por assinatura — valor que representa 3–15% da renda mensal bruta da família rural mediana (R$ 3.200/mês, IBGE 2022). O AgroAssistente elimina esse custo: acesso via WhatsApp sem mensalidade, sem smartphone de alto custo, sem dados móveis ilimitados.',
      keyFact: { value: 'R$ 80–500/mês', label: 'custo das plataformas concorrentes' },
    },
    {
      icon: '🧠',
      title: 'Ausência de IA em Português Agrícola Regional',
      description: 'Nenhum modelo de linguagem disponível foi treinado com vocabulário agrícola regional brasileiro: variedades locais, defensivos com nomes populares, condições climáticas do Cerrado, Caatinga ou Amazônia. GPT-4 e Claude respondem em inglês técnico ou português genérico — inadequado para o técnico EMATER ou o agricultor do Sertão. O AgroLinguaBR corrige essa lacuna com 25.000 pares Q&A em português agrícola regional: a primeira base de dados de IA agroalimentar com DOI público no Brasil.',
      keyFact: { value: '0', label: 'corpora públicos de IA agrícola em pt-BR existentes hoje' },
    },
    {
      icon: '🏛️',
      title: 'Colapso Estrutural da ATER — Escassez de Técnicos',
      description: 'A relação nacional entre agentes ATER e famílias rurais é de 1:500 — e chega a 1:1.000 no Norte e Nordeste (ANATER, 2023). Uma visita técnica presencial custa R$ 300–600 por família, tornando a extensão rural convencional economicamente inescalável. O AgroAssistente não substitui o técnico ATER: multiplica sua capacidade. Um técnico capacitado como multiplicador pode atender indiretamente 83 agricultores via plataforma — reduzindo a relação efetiva para 1:6 com custo marginal próximo de zero.',
      keyFact: { value: '1:500', label: 'relação agente ATER / família (meta ONU: 1:400)' },
    },
    {
      icon: '🛡️',
      title: 'Barreira 5 — O Vácuo da Soberania Alimentar Digital: 3,9M famílias fora do perímetro que o Brasil está construindo agora',
      description: 'O PBIA 2024–2028 tem 54 ações e R$ 23 bilhões para soberania tecnológica. O SoberanIA, lançado em maio de 2026 no mesmo mês desta chamada, destinou R$ 40 milhões para um LLM de 30 bilhões de parâmetros focado em cidades, burocracia e serviços governamentais. O Brasil não classifica a agricultura como infraestrutura crítica no PLANSIC (Decreto 11.200/2022) — ao contrário dos EUA, Canadá e UE. Das 54 ações do PBIA, zero endereçam especificamente os 3,9 milhões de estabelecimentos de agricultura familiar.\n\nEsses 3,9 milhões de estabelecimentos produzem 70% dos alimentos consumidos no Brasil e sustentam a segurança alimentar de 215 milhões de pessoas — estão completamente fora do perímetro de soberania digital sendo erguido agora. A situação das mulheres é a mais grave: 95% das 1,7 milhão de agricultoras que dirigem propriedades rurais no Nordeste não têm acesso a ATER (IBGE 2017).\n\nO SABIA entrega os três ativos que nenhuma outra iniciativa brasileira em curso fornece: o corpus AgroLinguaBR, o modelo treinado sobre esse corpus e a AgroAPI como camada de integração para políticas públicas. Ao mês 36, esses ativos são transferidos à [ICT EXECUTORA] com titularidade pública permanente — aderência ao PBIA não por alinhamento formal, mas por construção do ativo estratégico nacional que o PBIA identifica como necessário e ainda não existe.',
      keyFact: { value: '0 de 54', label: 'ações do PBIA 2024–2028 endereçam especificamente os 3,9 milhões de estabelecimentos de agricultura familiar — o perímetro de soberania digital nacional não inclui quem produz 70% dos alimentos do Brasil' },
    },
  ],
  aiEvidenceSection: {
    title: 'A IA Já Provou no Campo — a Corrida Global Começou Sem o Brasil',
    body: 'A pergunta que qualquer avaliador rigoroso deve fazer antes de aprovar este projeto não é se o problema de ATER existe — os dados do IBGE, RESR e ANATER já responderam isso com precisão. A pergunta correta é: **a IA resolve?** Não como aposta — mas como hipótese verificada com dados publicados.\n\nA resposta é sim. Com condicionantes que este projeto antecipou.\n\n**O que o campo internacional já documentou**\n\nEm Khammam, estado de Telangana (Índia), o piloto Saagu Baagu acompanhou 7.000 agricultores familiares de pimenta ao longo de 18 meses e três ciclos de safra. Resultados publicados em 2024: +21% produtividade, −9% defensivos, −5% fertilizantes, +US$ 800 por acre por ciclo (≈ US$ 1.975/hectare/ciclo) de renda líquida [b20]. No Gana e países vizinhos, a Farmerline lançou em março de 2024 a Darli AI — assistente agrícola por WhatsApp em 27 línguas — com 110.000 agricultores em 8 meses e casos documentados de salvamento de 50%+ de safras via diagnóstico por foto (TIME Best Inventions 2024) [b21]. Estudo PLOS ONE (2021) com 1.100 domicílios na Índia documentou +18% de produtividade e +18–29% de renda agrícola em adotantes de extensão digital vs. grupos equivalentes sem acesso [b22].\n\n**A corrida das nações: quem treina hoje vence amanhã**\n\nA China publicou em outubro de 2024 seu Plano Nacional de Ação para Agricultura Inteligente 2024–2028, lançou em janeiro de 2026 o Sinong — primeiro LLM agrícola open-source, 4B+ tokens, versões 8B e 32B — exclusivamente em mandarim [b25]. A Índia tem o Kisan e-Mitra com 9,5M+ consultas respondidas em 11 línguas regionais [b27]. Em dezembro de 2025, os EAU lançaram o AgriLLM (CGIAR + Gates, US$ 200M) treinado em 120.000 pares Q&A de agricultores — sem corpus confirmado em português regional brasileiro [b26]. A Fundação Gates anunciou na COP30 em Belém US$ 1,4 bilhão (2026–2029) para IA agrícola no Sul Global [b28].\n\n**O vácuo que não será preenchido por acidente**\n\nNão existe, hoje, nenhum corpus de treinamento público que combine português regional brasileiro, terminologia do pequeno produtor da Caatinga e do Cerrado, e volume suficiente para fine-tuning eficaz. A lacuna foi confirmada por busca sistemática em ArXiv, Zenodo, Hugging Face e SciELO (maio 2026). O corpus AgroLinguaBR — 25.000 pares curados, DOI público, licença CC BY-NC-SA 4.0 — não é apenas insumo para o AgroAssistente: é o ativo estratégico que passa a existir no domínio público ao mês 18. O modelo treinado em 2026 sobre dados reais do campo brasileiro carrega uma vantagem que o modelo treinado em 2028 não pode recuperar: os dados de 2025–2026 não existirão mais como dado novo. A corrida pelo corpus não tem segunda chance.',
  },
  aiRaceChart: {
    title: 'A Corrida Global por LLMs Agrícolas Soberanos',
    subtitle: 'Países que já têm modelo de linguagem agrícola soberano — ou lançaram em 2024–2026',
    entries: [
      { flag: '🇨🇳', country: 'China', product: 'Sinong (Jan 2026)', launched: 'jan/2026', scale: '4B+ tokens • 8B e 32B parâmetros • open-source', status: 'deployed' },
      { flag: '🇮🇳', country: 'Índia', product: 'Kisan e-Mitra (2024)', launched: '2024', scale: '9,5M+ consultas • 11 línguas regionais • voz', status: 'deployed' },
      { flag: '🇦🇪', country: 'EAU', product: 'AgriLLM — CGIAR + Gates (Dez 2025)', launched: 'dez/2025', scale: '120.000 pares Q&A • US$ 200M • 39 países', status: 'deployed' },
      { flag: '🇬🇭', country: 'Gana / África Oc.', product: 'Darli AI — Farmerline (Mar 2024)', launched: 'mar/2024', scale: '110.000 agricultores • 27 línguas • WhatsApp', status: 'deployed' },
      { flag: '🇧🇷', country: 'Brasil', product: 'AgroAssistente — SABIA', launched: 'mês 18 (proposto)', scale: '25.000 pares pt-BR • 3 regiões-piloto • CC BY-NC-SA 4.0', status: 'proposed' },
    ],
    brazilNote: 'O corpus AgroLinguaBR construído neste projeto será o primeiro dataset público de IA agroalimentar em português regional brasileiro com DOI verificável.',
  },
  contextNote: 'Norte e Nordeste concentram o maior número de agricultores familiares com pior infraestrutura digital. O Semiárido baiano (região-piloto BA) tem cobertura 4G inferior a 30% — condição de teste que valida a arquitetura assíncrona do projeto.',
  competitiveContext: '**Por que agora — e por que nenhuma solução existente resolve:**\n\nOs modelos de linguagem de grande escala (LLMs) atingiram em 2023–2024 o ponto de viabilidade técnica para aplicações de nicho em língua portuguesa — custo de inferência caiu 95% em 2 anos (OpenAI, 2024). Ao mesmo tempo, o WhatsApp atingiu 99% de adoção entre adultos rurais com smartphone no Brasil (Meta Business Insights, 2023), eliminando a barreira de adoção de app novo. A janela de oportunidade para construir a infraestrutura soberana de IA agroalimentar — antes que plataformas estrangeiras ocupem o espaço — é exatamente a vigência deste edital.',
}
