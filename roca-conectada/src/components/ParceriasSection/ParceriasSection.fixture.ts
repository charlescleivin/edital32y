// @ts-nocheck
import type { ParceriasSectionProps } from './ParceriasSection'

export const fixture: ParceriasSectionProps = {
  number: 'Seção 7',
  title: 'Parcerias Previstas',
  subtitle: 'Critério peso 2 — sem cartas de anuência, pontuação zero neste critério',
  alertMessage: 'O contato com cooperativas âncora deve começar imediatamente.',
  partners: [
    { id: 'coop1', priority: 'critical', priorityLabel: 'Prioridade Crítica', name: '3 Cooperativas Âncora', role: 'Parceiros âncora dos pilotos Fase 2.', deadline: 'Contatar esta semana · Carta até 30/05' },
    { id: 'emater', priority: 'critical', priorityLabel: 'Prioridade Crítica', name: 'EMATER Estadual', role: 'Canal de distribuição e amplificação.', deadline: 'Contatar esta semana · Carta até 05/06' },
    { id: 'fetraf', priority: 'high', priorityLabel: 'Alta Prioridade', name: 'FETRAF-Brasil ou CONTAG', role: 'Carta de apoio institucional nacional.', deadline: 'Contatar até 20/05' },
  ],
  actionTimeline: [
    { label: 'Semana 1 — 13 a 17/05', description: 'Contato inicial com cooperativas âncora e EMATER.' },
    { label: 'Semana 7 — 24 a 26/06', description: 'Submissão final na plataforma.', isCritical: true },
  ],
}
