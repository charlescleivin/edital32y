import type { ProblemaSectionProps } from './ProblemaSection'

export const fixture: ProblemaSectionProps = {
  number: 'Seção 2',
  title: 'Problema e Justificativa',
  subtitle: 'Diagnóstico do cenário atual da digitalização rural brasileira',
  stats: [
    { value: '77%', label: 'dos estabelecimentos agropecuários são familiares (IBGE Censo Agro 2017)', colorVariant: 'green' },
    { value: '70%', label: 'dos alimentos consumidos no Brasil vêm da agricultura familiar', colorVariant: 'green' },
    { value: '53%', label: 'dos domicílios rurais têm acesso à internet (PNAD Contínua 2022)', colorVariant: 'blue' },
    { value: '1:500', label: 'relação agente ATER / família rural no Brasil — ANATER 2023', colorVariant: 'red' },
  ],
  barriers: [
    {
      icon: '📶',
      title: 'Conectividade Intermitente — e a Resposta Tecnológica',
      description: 'Soluções digitais existentes requerem conexão estável e contínua — inviabilizando uso em áreas rurais onde a cobertura 4G chega a menos de 30% no Semiárido (Anatel, 2023). O Roça Conectada responde a essa barreira com arquitetura assíncrona tolerante a conectividade intermitente: o AgroAssistente opera via WhatsApp, que enfileira mensagens localmente e as entrega automaticamente ao restaurar o sinal — sem perda de sessão, sem necessidade de conexão estável.',
      keyFact: { value: '≤30%', label: 'cobertura 4G no Semiárido (Anatel 2023)' },
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
  ],
  aiEvidenceSection: {
    title: 'A IA Já Provou no Campo — a Corrida Global Começou Sem o Brasil',
    body: 'A pergunta que qualquer avaliador rigoroso deve fazer antes de aprovar este projeto não é se o problema de ATER existe — os dados do IBGE, RESR e ANATER já responderam isso com precisão. A pergunta correta é: **a IA resolve?** Não como aposta — mas como hipótese verificada com dados publicados.\n\nA resposta é sim. Com condicionantes que este projeto antecipou.\n\n**O que o campo internacional já documentou**\n\nEm Khammam, estado de Telangana (Índia), o piloto Saagu Baagu acompanhou 7.000 agricultores familiares de pimenta ao longo de 18 meses e três ciclos de safra. Resultados publicados em 2024: +21% produtividade, −9% defensivos, −5% fertilizantes, +US$ 800/hectare/ciclo de renda líquida [b21]. No Gana e países vizinhos, a Farmerline lançou em março de 2024 a Darli AI — assistente agrícola por WhatsApp em 27 línguas — com 110.000 agricultores em 8 meses e casos documentados de salvamento de 50%+ de safras via diagnóstico por foto (TIME Best Inventions 2024) [b22]. Estudo PLOS ONE (2021) com 1.100 domicílios na Índia documentou +18% de produtividade e +18–29% de renda agrícola em adotantes de extensão digital vs. grupos equivalentes sem acesso [b23].\n\n**A corrida das nações: quem treina hoje vence amanhã**\n\nA China publicou em outubro de 2024 seu Plano Nacional de Ação para Agricultura Inteligente 2024–2028, lançou em janeiro de 2026 o Sinong — primeiro LLM agrícola open-source, 4B+ tokens, versões 8B e 32B — exclusivamente em mandarim [b26]. A Índia tem o Kisan e-Mitra com 9,5M+ consultas respondidas em 11 línguas regionais [b28]. Em dezembro de 2025, os EAU lançaram o AgriLLM (CGIAR + Gates, US$ 200M) treinado em 120.000 pares Q&A de agricultores — sem corpus confirmado em português regional brasileiro [b27]. A Fundação Gates anunciou na COP30 em Belém US$ 1,4 bilhão (2026–2029) para IA agrícola no Sul Global [b29].\n\n**O vácuo que não será preenchido por acidente**\n\nNão existe, hoje, nenhum corpus de treinamento público que combine português regional brasileiro, terminologia do pequeno produtor da Caatinga e do Cerrado, e volume suficiente para fine-tuning eficaz. A lacuna foi confirmada por busca sistemática em ArXiv, Zenodo, Hugging Face e SciELO (maio 2026). O corpus AgroLinguaBR — 25.000 pares curados, DOI público, licença MIT — não é apenas insumo para o AgroAssistente: é o ativo estratégico que passa a existir no domínio público ao mês 18. O modelo treinado em 2026 sobre dados reais do campo brasileiro carrega uma vantagem que o modelo treinado em 2028 não pode recuperar: os dados de 2025–2026 não existirão mais como dado novo. A corrida pelo corpus não tem segunda chance.',
  },
  contextNote: 'Norte e Nordeste concentram o maior número de agricultores familiares com pior infraestrutura digital. O Semiárido baiano (região-piloto BA) tem cobertura 4G inferior a 30% — condição de teste que valida a arquitetura assíncrona do projeto.',
  competitiveContext: '**Por que agora — e por que nenhuma solução existente resolve:**\n\nOs modelos de linguagem de grande escala (LLMs) atingiram em 2023–2024 o ponto de viabilidade técnica para aplicações de nicho em língua portuguesa — custo de inferência caiu 95% em 2 anos (OpenAI, 2024). Ao mesmo tempo, o WhatsApp atingiu 99% de adoção entre adultos rurais com smartphone no Brasil (Meta Business Insights, 2023), eliminando a barreira de adoção de app novo. A janela de oportunidade para construir a infraestrutura soberana de IA agroalimentar — antes que plataformas estrangeiras ocupem o espaço — é exatamente a vigência deste edital.',
}
