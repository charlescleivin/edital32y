import type { OrcamentoSectionProps } from './OrcamentoSection'

export const fixture: OrcamentoSectionProps = {
  number: 'Seção 6',
  title: 'Orçamento Detalhado',
  subtitle: 'R$ 7.000.000,00 · 36 meses · Todos os limites do edital respeitados',
  total: 'R$ 7M',
  donutSlices: [],
  lines: [
    { id: 'capital',      icon: '🖥️', label: 'Capital, Servidor de Inferência',                              amount: 600000,  limit: '8,6% · limite 70% ✅',  color: '#1a5c38' },
    { id: 'thatpix',      icon: '🏢', label: 'THATPIX, Serviços PJ',                                          amount: 2965000, limit: '42,4% · sem limite ✅',  color: '#0891b2' },
    { id: 'tombo',        icon: '📽', label: 'TOMBÔ, Documentação de Campo e Registro de Impacto',            amount: 600000,  limit: '8,6% · sem limite ✅',  color: '#c55530' },
    { id: 'other-pj',     icon: '🔧', label: 'Outros Serviços PJ',                                            amount: 285000,  limit: '4,1% · sem limite ✅',  color: '#0d9488' },
    { id: 'scholarships', icon: '🎓', label: 'Bolsas (13 bolsistas)',                                         amount: 1359000, limit: '19,4% · limite 30% ✅', color: '#e8970a' },
    { id: 'materials',    icon: '📦', label: 'Material de Consumo',                                           amount: 235000,  limit: '3,4% · sem limite ✅',  color: '#4caf7a' },
    { id: 'per-diems',    icon: '✈️', label: 'Diárias',                                                       amount: 345000,  limit: '4,9% · limite 5% ✅',   color: '#64748b' },
    { id: 'flights',      icon: '🚌', label: 'Passagens',                                                     amount: 261000,  limit: '3,7% · limite 5% ✅',   color: '#7c3aed' },
    { id: 'operational',  icon: '🏛️', label: 'Desp. Operacionais Proponente',                                 amount: 350000,  limit: '5,0% · fixo 5% ✅',     color: '#9333ea' },
  ],
  complianceTable: [
    { rubric: 'Despesas de Capital (equipamentos)', limit: 'máx. 70%',  proposed: 'R$ 600.000',    percent: '8,6%',  status: 'Dentro do limite' },
    { rubric: 'Bolsas',                             limit: 'máx. 30%',  proposed: 'R$ 1.359.000',  percent: '19,4%', status: 'Dentro do limite' },
    { rubric: 'Diárias',                            limit: 'máx. 5%',   proposed: 'R$ 345.000',    percent: '4,9%',  status: 'Dentro do limite' },
    { rubric: 'Passagens',                          limit: 'máx. 5%',   proposed: 'R$ 261.000',    percent: '3,7%',  status: 'Dentro do limite' },
    { rubric: 'Desp. Operacionais Proponente',      limit: '5% fixo',   proposed: 'R$ 350.000',    percent: '5,0%',  status: 'Exato' },
    { rubric: 'Serviços PJ (item 6.2.2.1)',         limit: 'Sem limite', proposed: 'R$ 3.850.000', percent: '55,0%', status: 'Sem restrição' },
    { rubric: 'Obras e Instalações',                limit: 'máx. 10%',  proposed: 'R$ 0',          percent: '0%',    status: 'Não aplicável' },
    { rubric: 'Pagamento de Pessoal',               limit: 'máx. 30%',  proposed: 'R$ 0',          percent: '0%',    status: 'ICT federal' },
  ],
}
