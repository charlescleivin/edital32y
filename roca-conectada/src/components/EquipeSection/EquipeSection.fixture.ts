// @ts-nocheck
import type { EquipeSectionProps } from './EquipeSection'

export const fixture: EquipeSectionProps = {
  number: 'Seção 5',
  title: 'Equipe do Projeto',
  subtitle: 'Critério de peso 5 — composição detalhada e complementar',
  members: [
    { id: 'coord', avatar: '👨‍🔬', name: '[Coordenador UFSC]', role: 'Coordenador Geral', tags: ['Gestão do projeto'], dedication: '[X]% dedicação' },
    { id: 'charles', avatar: '🤖', name: 'Charles Cleivin', role: 'Co-pesquisador Externo', tags: ['LLM fine-tuning', 'WhatsApp API'], dedication: 'Stack: Python · PyTorch · Next.js', highlight: true, badge: 'Sem bolsa', badgeVariant: 'blue' },
    { id: 'thatpix', avatar: '🏢', name: 'THATPIX LTDA', role: 'Prestadora de Serviços Especializados', tags: ['Engenharia de software'], dedication: 'R$ 46.666/mês × 36 meses', isPJ: true, badge: 'Contrato PJ · R$ 1.680.000,00', badgeVariant: 'amber' },
  ],
}
