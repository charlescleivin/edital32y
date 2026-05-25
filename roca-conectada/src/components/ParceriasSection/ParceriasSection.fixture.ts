import type { ParceriasSectionProps } from './ParceriasSection'

export const fixture: ParceriasSectionProps = {
  number: 'Seção 7',
  title: 'Parcerias Previstas',
  subtitle: 'Critério CM-05 peso 2 — sem cartas de anuência, pontuação zero; com elas, potencial 5/5',
  alertMessage: 'O contato com cooperativas âncora deve começar imediatamente. Sem as cartas de anuência até 20/06, o critério CM-05 vale zero — impacto de −0,52 pontos na média ponderada final.',
  partners: [
    {
      id: 'coop1',
      priority: 'critical',
      priorityLabel: 'Prioridade Crítica',
      name: '3 Cooperativas Âncora (SC · BA · PA)',
      role: 'Parceiros operacionais do piloto Fase 2. Papel: recrutamento de agricultores participantes, cessão de infraestrutura local (sala de reuniões, técnico de campo), validação das funcionalidades do Coopera Digital no contexto real da cooperativa. Recebem: acesso permanente à plataforma Coopera Digital pós-projeto e capacitação de gestores pelo projeto.',
      deadline: 'Contatar esta semana · Carta de anuência até 30/05',
    },
    {
      id: 'emater',
      priority: 'critical',
      priorityLabel: 'Prioridade Crítica',
      name: 'EMATER-SC, EMATER-BA, EMATER-PA',
      role: 'Canal primário de distribuição do AgroAssistente e rede de multiplicadores. Papel: identificação e treinamento de 30 técnicos multiplicadores por estado, divulgação do AgroAssistente à base de agricultores atendidos. Recebem: acesso à AgroAPI sem custo, corpus AgroLinguaBR e modelo base para uso em seus próprios projetos de extensão digital.',
      deadline: 'Contatar esta semana · Carta até 05/06',
    },
    {
      id: 'fetraf',
      priority: 'high',
      priorityLabel: 'Alta Prioridade',
      name: 'FETRAF-Brasil ou CONTAG',
      role: 'Carta de apoio institucional nacional — valida o alcance e a relevância do projeto junto ao movimento da agricultura familiar. Papel: divulgação para base associada nacional, articulação com cooperativas nas regiões-piloto. Recebem: relatórios de impacto e acesso antecipado ao AgroAssistente para uso pela base.',
      deadline: 'Contatar até 20/05 · Carta até 10/06',
    },
    {
      id: 'embrapa',
      priority: 'high',
      priorityLabel: 'Alta Prioridade',
      name: 'EMBRAPA Agricultura Digital',
      role: 'Parceria técnica e científica para sustentabilidade pós-projeto. Papel: revisão técnica do corpus AgroLinguaBR, co-curadoria da base de conhecimento agrícola, eventual incorporação do AgroEval à grade de avaliação de soluções de IA da EMBRAPA. MoU formalizado na Fase 3 para garantir continuidade após o encerramento do financiamento FINEP.',
      deadline: 'Contato técnico até 15/06 · MoU na Fase 3',
    },
  ],
  disseminationRoutes: [
    {
      audience: 'Agricultores familiares participantes (2.500)',
      mechanism: 'AgroAssistente IA via WhatsApp — acesso permanente pós-projeto sem custo; treinamento de uso por multiplicadores EMATER',
      when: 'Fase 2 (mês 13) → permanente',
    },
    {
      audience: 'Cooperativas e associações (18)',
      mechanism: 'Plataforma Coopera Digital — licença gratuita permanente; capacitação de gestores pelo projeto (16h/cooperativa)',
      when: 'Fase 2 (mês 13) → permanente',
    },
    {
      audience: 'Multiplicadores EMATER (350)',
      mechanism: 'Programa de capacitação presencial/remoto (40h/multiplicador); manual técnico de operação e repertório de perguntas frequentes regionalizadas',
      when: 'Fases 2 e 3 (meses 13–36)',
    },
    {
      audience: 'Comunidade científica nacional e internacional',
      mechanism: 'AgroLinguaBR publicado com DOI Zenodo (licença CC BY-NC-SA 4.0 — acesso irrestrito para pesquisa, uso comercial negociado); AgroEval publicado com código-fonte Apache 2.0 (GitHub da [ICT EXECUTORA]); 5 artigos em periódicos indexados',
      when: 'Fase 2 (mês 24) e Fase 3 (mês 36)',
    },
    {
      audience: 'ICTs, startups e organizações do ecossistema',
      mechanism: 'AgroAPI pública com documentação completa (OpenAPI/Swagger), sandbox gratuito para testes e registro aberto de uso',
      when: 'Fase 3 (mês 30) → permanente',
    },
    {
      audience: 'Políticas públicas e governo federal',
      mechanism: 'Relatório final entregue ao MCTI, MDA e FINEP; apresentação em audiências públicas e seminários do Programa AgriFam; dados de impacto disponibilizados ao IBGE para integração ao Censo Agropecuário',
      when: 'Fase 3 (mês 36)',
    },
  ],
  actionTimeline: [
    { label: 'Semana 1 (19-23/05)', description: 'Contato inicial com cooperativas âncora nos 3 estados e com EMATER-SC, EMATER-BA, EMATER-PA. Envio de carta de apresentação do projeto.' },
    { label: 'Semana 2 (26-30/05)', description: 'Reunião virtual com cooperativas âncora. Envio dos documentos para assinatura das cartas de anuência. Prazo interno: cartas recebidas até 30/05.', isCritical: true },
    { label: 'Semana 3 (02-06/06)', description: 'Contato com FETRAF-Brasil/CONTAG para carta de apoio nacional. Carta de anuência das EMATERs estaduais recebida até 05/06.', isCritical: true },
    { label: 'Semana 4-5 (09-20/06)', description: 'Consolidação de todas as cartas de anuência. Cadastro na Plataforma FAP (prazo: 19/06). Revisão final da proposta e documentação de rubricas.' },
    { label: 'Semana 6 (23-26/06)', description: 'Submissão final na plataforma FAP com assinatura de todos os representantes legais. Prazo final: 26/06/2026.', isCritical: true },
  ],
}
