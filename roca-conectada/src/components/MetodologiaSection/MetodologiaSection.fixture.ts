import type { MetodologiaSectionProps } from './MetodologiaSection'

export const fixture: MetodologiaSectionProps = {
  number: 'Seção 4',
  title: 'Metodologia e Plano de Trabalho',
  subtitle: 'Pesquisa-Ação Participativa em 3 regiões Nordeste — cada fase constrói uma camada da infraestrutura soberana e prova que ela funciona nas condições reais de quem depende dela',
  phases: [
    {
      id: 'f1',
      icon: '🔬',
      label: 'Fase 1',
      name: 'Fundação — Corpus e Infraestrutura Soberana',
      period: 'Meses 1–12',
      activities: [
        'Diagnóstico participativo (PAP): 3 regiões documentam necessidades reais — feijão e seca no Ceará, ovinos e PAA na Paraíba, café e conectividade na Bahia. O corpus é construído sobre problemas reais documentados, não sobre suposições da equipe técnica.',
        'Corpus AgroLinguaBR: 25.000 pares Q&A em português agrícola regional, construídos sobre os problemas documentados no diagnóstico + acervo técnico EMBRAPA/MAPA. Publicado com DOI via Zenodo, licença MIT — ativo público permanente antes do projeto terminar.',
        'Fine-tuning do LLM base (Qwen2.5-7B) com LoRA/PEFT: cluster GPU laboratório da [ICT EXECUTORA] (A100 80GB × 4) + burst cloud. O modelo resultante não depende de API estrangeira para inferência — roda em RTX 4090 de R$ 8.000.',
        'MVP completo do ecossistema (AgroAssistente + Coopera Digital + AgroAPI beta) pronto e testado antes de qualquer piloto com agricultores reais.',
        '1 artigo científico submetido: metodologia PAP + arquitetura AgroEval. Contribuição pública antes da Fase 2.',
      ],
    },
    {
      id: 'f2',
      icon: '🚀',
      label: 'Fase 2',
      name: 'Validação — A Prova que Não é Otimismo',
      period: 'Meses 13–24',
      activities: [
        'Seleção dos 800 agricultores (critério documentado no diagnóstico Fase 1): smartphone + WhatsApp + sinal 3G verificado em ponto de referência. Zero aquisição de dispositivo — a solução funciona com o que os agricultores já têm.',
        'Piloto AgroAssistente (800 agricultores) com grupo controle randomizado (n=50 recebem ATER convencional): protocolo registrado no CONEP antes do início. Esta é a diferença entre evidência científica e otimismo.',
        'Piloto Coopera Digital: 6 cooperativas âncora — medição de tempo administrativo, acesso ao PAA/PNAE e receita dos associados antes e depois.',
        'AgroAPI beta: integração com 2 EMATERs estaduais parceiras. Primeiro teste de interoperabilidade institucional.',
        'Capacitação de 120 multiplicadores EMATER: eles usam o produto em condições reais antes de ensiná-lo.',
        '2 artigos científicos submetidos com dados do grupo controle. Resultados públicos antes do término do projeto.',
      ],
    },
    {
      id: 'f3',
      icon: '🌍',
      label: 'Fase 3',
      name: 'Transferência — O Momento em que os Ativos Passam ao Brasil',
      period: 'Meses 25–36',
      activities: [
        'Expansão: 2.500 agricultores / 18 cooperativas — via 30 multiplicadores EMATER treinados. Não via equipe do projeto.',
        'AgroLinguaBR v2.0 + LLM fine-tuned v2.0 + AgroEval v2.0 → transferência formal de titularidade à [ICT EXECUTORA] (OE9). O que existia como código de projeto vira patrimônio científico nacional registrado.',
        'AgroAPI pública: qualquer ICT, EMATER estadual, universidade ou startup integra sem dependência da [ICT EXECUTORA] ou da THATPIX.',
        'MoU com EMBRAPA Agricultura Digital + 3 EMATERs estaduais: compromisso institucional de continuidade assinado antes do término do financiamento FINEP.',
        'Artigo de síntese (impact study) + Relatório Final FINEP: documentação completa do que o Brasil ganhou.',
      ],
    },
  ],
  scopeDistinction: {
    researcher: {
      title: 'Charles Cleivin — Co-pesquisador',
      subtitle: 'Participação Intelectual e Científica',
      responsibilities: [
        'Define arquitetura científica e protocolo de validação',
        'Coordena metodologia do AgroEval e análise de resultados',
        'Co-autoria em publicações científicas',
      ],
      badge: 'SEM bolsa · SEM remuneração pessoal',
    },
    company: {
      title: 'THATPIX LTDA — Empresa PJ Contratada',
      subtitle: 'Engenharia e Implementação Tecnológica',
      responsibilities: [
        'Executa pipeline de fine-tuning (LoRA/PEFT, 4-bit NF4)',
        'Desenvolve AgroAssistente (backend WhatsApp + integrações)',
        'Desenvolve Coopera Digital (frontend + backend)',
        'Engenharia da AgroAPI (REST, autenticação, rate-limiting, documentação)',
      ],
      note: 'Restrições',
      noteItems: ['NÃO co-autora publicações', 'NÃO toma decisões científicas'],
    },
  },
  sovereigntyCallouts: [
    {
      id: 'sc-gpu',
      badge: 'Infraestrutura Computacional',
      title: 'GPU [ICT EXECUTORA] + Cloud — Fine-tuning Soberano',
      content: 'O fine-tuning do LLM base (Qwen2.5-7B) será executado em cluster GPU do laboratório da [ICT EXECUTORA] (A100 80GB × 4, disponível via convênio de pesquisa) com capacidade de burst em cloud (AWS ou GCP via créditos de pesquisa). A técnica LoRA/PEFT com quantização 4-bit NF4 reduz o custo computacional em ~80% sem perda mensurável de qualidade: um ciclo completo de fine-tuning custa aproximadamente R$ 800 em GPU-hora de cloud — viabilizando múltiplos ciclos de iteração dentro do orçamento. O modelo resultante roda em inferência em hardware de R$ 8.000 (RTX 4090), removendo dependência de APIs proprietárias na operação.',
    },
    {
      id: 'sc-agroeval',
      badge: 'Protocolo de Validação Científica',
      title: 'AgroEval — Benchmark de Avaliação com Grupo Controle',
      content: 'O AgroEval avalia 3 dimensões: (1) precisão factual — respostas verificadas contra base técnica da EMBRAPA; (2) taxa de alucinação — detecção de informações agrícolas fabricadas, com consequência potencial de dano (ex: dosagem incorreta de defensivo); (3) relevância contextual — adequação ao bioma e cultura da região do agricultor. A validação científica (Fase 2) utilizará grupo controle randomizado: n=50 agricultores recebem ATER convencional, n=800 recebem AgroAssistente — resultados medidos em adoção de boas práticas, redução de custo de insumos e tempo de resolução de dúvidas técnicas. Protocolo registrado no CONEP antes do piloto.',
    },
    {
      id: 'sc-env',
      badge: 'Sustentabilidade Ambiental',
      title: 'Impacto Ambiental Positivo — Menos Deslocamento, Mais Precisão',
      content: 'O AgroAssistente reduz em média 4 visitas presenciais de técnico ATER por agricultor por ano — dado da literatura de extensão rural digital (Embrapa, 2023) — gerando diminuição mensurável de emissões de CO₂ por deslocamento. O corpus AgroLinguaBR incluirá módulo de manejo sustentável de solos e água (RE-07), alinhado ao PLANAPO. A orientação técnica personalizada via IA viabiliza adoção de práticas de agricultura de precisão que reduzem uso de defensivos e fertilizantes sintéticos, contribuindo para a transição agroecológica da agricultura familiar.',
    },
  ],
  pilotRegions: [
    {
      id: 'pr-ce',
      municipality: 'Crateús-CE / Sertão Cearense',
      profile: 'Feijão + milho + caprinocultura, ~5.200 agricultores, cobertura 3G intermitente, EMATER-CE parceira',
      rationale: 'Epicentro da crise de ATER no Nordeste: 1 técnico para cada 600+ famílias no Sertão cearense. Conectividade 3G intermitente valida a arquitetura assíncrona em condições extremas reais. Bioma Caatinga sub-representado em todo corpus NLP existente — garante diversidade linguística regional ao AgroLinguaBR.',
    },
    {
      id: 'pr-pb',
      municipality: 'Sousa-PB / Vale do Piancó',
      profile: 'Ovinocaprinocultura + horticultura + PAA/PNAE consolidados, ~3.800 agricultores, EMATER-PB parceira',
      rationale: 'Referência nacional em comercialização institucional da agricultura familiar — 73% dos agricultores já fornecem ao PAA/PNAE. A experiência cooperativa madura reduz a barreira de adoção do Coopera Digital e garante baseline robusto para medir impacto de renda. Paraíba tem o maior índice per capita de cooperativas de AF do Nordeste.',
    },
    {
      id: 'pr-ba',
      municipality: 'Vitória da Conquista-BA / Planalto Baiano',
      profile: 'Café + bovinocultura + fruticultura, ~7.100 agricultores, conectividade 4G moderada, EMATER-BA parceira',
      rationale: 'Contraste de perfil tecnológico deliberado: conectividade superior permite isolar o efeito da solução sobre produtividade vs. apenas conectividade. Maior pool de agricultores entre os três pilotos — fortalece a amostra da Fase 2 e valida a escalabilidade do AgroAssistente em contextos com infraestrutura acima da média do Nordeste.',
    },
  ],
}
