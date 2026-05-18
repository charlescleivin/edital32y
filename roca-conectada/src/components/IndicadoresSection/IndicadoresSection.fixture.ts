// @ts-nocheck
import type { IndicadoresSectionProps } from './IndicadoresSection'

export const fixture: IndicadoresSectionProps = {
  number: 'Seção 8',
  title: 'Indicadores e Metas',
  subtitle: 'KPIs mensuráveis por fase e dimensão avaliativa',
  counters: [
    { icon: '👨‍🌾', count: 2500, label: 'Agricultores ativos (Fase 3)' },
    { icon: '🏛️', count: 18, label: 'Cooperativas implantadas' },
    { icon: '🎓', count: 350, label: 'Multiplicadores capacitados' },
    { icon: '📝', count: 5, label: 'Artigos científicos' },
  ],
  indicators: [
    { indicator: 'Agricultores com AgroAssistente ativo (MAU)', phase1: '—', phase2: '800', phase3: '2.500' },
    { indicator: 'Cooperativas com Coopera Digital ativo', phase1: '—', phase2: '6', phase3: '18' },
    { indicator: 'Multiplicadores capacitados (acumulado)', phase1: '20', phase2: '120', phase3: '350' },
  ],
}
