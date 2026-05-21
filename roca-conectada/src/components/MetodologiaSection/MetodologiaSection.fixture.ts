import type { MetodologiaSectionProps } from './MetodologiaSection'

export const fixture: MetodologiaSectionProps = {
  number: 'Seção 4',
  title: 'Metodologia e Plano de Trabalho',
  subtitle: 'Três fases de 12 meses — Pesquisa-Ação Participativa com validação científica por grupo de controle',
  phases: [
    {
      id: 'f1',
      icon: '🔬',
      label: 'Fase 1',
      name: 'Fundação e Infraestrutura',
      period: 'Meses 1–12',
      activities: [
        'Diagnóstico participativo (PAP) em 3 regiões-piloto',
        'Construção do corpus AgroLinguaBR v1.0 (25.000 pares Q&A)',
        'Desenvolvimento do framework AgroEval (métricas de alucinação e precisão)',
        'Fine-tuning LLM base (LoRA/PEFT) em infraestrutura GPU da UFSC/cloud',
      ],
    },
    {
      id: 'f2',
      icon: '🚀',
      label: 'Fase 2',
      name: 'Validação e Piloto',
      period: 'Meses 13–24',
      activities: [
        'Piloto AgroAssistente — 800 agricultores com grupo controle (n=50)',
        'Piloto Coopera Digital — 6 cooperativas âncora',
        'Publicação AgroLinguaBR v1.0 (DOI Zenodo) e AgroEval v1.0',
        'AgroAPI beta: integração com 2 EMATERs estaduais parceiras',
      ],
    },
    {
      id: 'f3',
      icon: '🌍',
      label: 'Fase 3',
      name: 'Escala, API Pública e Transferência',
      period: 'Meses 25–36',
      activities: [
        'Expansão AgroAssistente — 2.500 agricultores via 30 multiplicadores EMATER',
        'Expansão Coopera Digital — 18 cooperativas',
        'Lançamento público da AgroAPI: abertura para ICTs, startups e organizações',
        'MoU com EMBRAPA Agricultura Digital para sustentabilidade pós-projeto',
        'Transferência do modelo, corpus e benchmarks para titularidade UFSC',
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
      title: 'GPU UFSC + Cloud — Fine-tuning Soberano',
      content: 'O fine-tuning do LLM base (Qwen2.5-7B) será executado em cluster GPU do LABELO/UFSC (A100 80GB × 4, disponível via convênio de pesquisa) com capacidade de burst em cloud (AWS ou GCP via créditos de pesquisa). A técnica LoRA/PEFT com quantização 4-bit NF4 reduz o custo computacional em ~80% sem perda mensurável de qualidade: um ciclo completo de fine-tuning custa aproximadamente R$ 800 em GPU-hora de cloud — viabilizando múltiplos ciclos de iteração dentro do orçamento. O modelo resultante roda em inferência em hardware de R$ 8.000 (RTX 4090), removendo dependência de APIs proprietárias na operação.',
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
