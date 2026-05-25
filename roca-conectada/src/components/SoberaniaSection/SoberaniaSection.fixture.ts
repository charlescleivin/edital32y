import type { S14Data } from '@/types/proposal'

export const fixture: S14Data = {
  number: 'Soberania Digital',
  title: 'Licenciamento Estratégico e Acesso Controlado',
  subtitle: 'O AgroAssistente é construído com recursos públicos brasileiros — sua arquitetura de licenciamento e acesso reflete esse compromisso.',
  headline: 'Dados Brasileiros Para o Brasil.',

  sovereigntyStatement:
    'O AgroLinguaBR, o modelo fine-tuned e o benchmark AgroEval são ativos construídos com financiamento público (FINEP) e trabalho de campo em comunidades rurais brasileiras. A escolha da licença não é detalhe técnico — é uma declaração de soberania digital.',

  sovereigntyRationale:
    'Uma licença MIT/Apache 2.0 irrestrita concederia a qualquer empresa — incluindo conglomerados estrangeiros com infraestrutura de bilhões de dólares — o direito de incorporar esses ativos em produtos comerciais sem contrapartida ao Brasil. O corpus AgroLinguaBR é irreplicável sem anos de trabalho de campo em comunidades rurais brasileiras: dialetos regionais, terminologia técnica de biomas específicos, contexto cultural e econômico da agricultura familiar. A opção CC BY-NC-SA 4.0 garante acesso irrestrito a pesquisadores, ICTs públicas, cooperativas e entidades do terceiro setor, enquanto exige negociação para uso comercial privado. Recursos construídos com financiamento público brasileiro servem prioritariamente ao interesse público brasileiro.',

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
      asset: 'Modelo LLM Fine-tuned (Qwen2.5-7B adaptado)',
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
