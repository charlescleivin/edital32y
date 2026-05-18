import type { OrcamentoSectionProps } from './OrcamentoSection'

export const fixture: OrcamentoSectionProps = {
  number: 'Seção 6',
  title: 'Orçamento Detalhado',
  subtitle: 'R$ 7.000.000,00 · 36 meses · Todos os limites do edital respeitados',
  total: 'R$ 7M',
  donutSlices: [],
  lines: [
    { id: 'cap', icon: '🖥️', label: 'Capital — Equipamentos', amount: 2450000, limit: '35,0% · limite 70% ✅', color: '#1a5c38' },
    { id: 'pj', icon: '🏢', label: 'THATPIX — Serviços PJ', amount: 1680000, limit: '24,0% · sem limite ✅', color: '#0891b2' },
    { id: 'bolsas', icon: '🎓', label: 'Bolsas (12 bolsistas)', amount: 1174000, limit: '16,8% · limite 30% ✅', color: '#e8970a' },
  ],
  complianceTable: [
    { rubric: 'Bolsas', limit: 'máx. 30%', proposed: 'R$ 1.174.000', percent: '16,8%', status: 'Dentro do limite' },
    { rubric: 'Diárias', limit: 'máx. 5%', proposed: 'R$ 345.000', percent: '4,9%', status: 'Dentro do limite' },
  ],
}
