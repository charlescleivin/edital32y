// @ts-nocheck
import type { HeroSectionProps } from './HeroSection'

export const fixture: HeroSectionProps = {
  eyebrow: 'MCTI / FINEP / FNDCT — Linha Temática 3',
  title: 'Roça Conectada',
  subtitle: 'Ecossistema de Inteligência Artificial Conversacional e Gestão Digital Cooperativa para a Digitalização da Agricultura Familiar Brasileira.',
  stats: [
    { value: 'R$ 7M', label: 'Valor Solicitado' },
    { value: '36 meses', label: 'Prazo de Execução' },
    { value: 'Linha 3', label: 'Soluções Digitais Rural' },
    { value: 'Cenário 4', label: 'ICT + PJ Especializado' },
  ],
  layers: [
    { id: 'a', badge: 'Camada A', title: 'AgroAssistente IA', description: 'LLM em português, via WhatsApp, modo offline-first. Extensão rural digital 24h.' },
    { id: 'c', badge: 'Camada C', title: 'Coopera Digital', description: 'Plataforma de gestão para cooperativas e associações da agricultura familiar.' },
  ],
}
