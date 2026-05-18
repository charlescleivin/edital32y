// @ts-nocheck
import type { SumarioSectionProps } from './SumarioSection'

export const fixture: SumarioSectionProps = {
  number: 'Seção 1',
  title: 'Sumário Executivo',
  subtitle: 'Visão geral do projeto, público-alvo e impacto esperado',
  stats: [
    { icon: '🌾', value: '3,9M', label: 'Estabelecimentos familiares no Brasil (IBGE 2017)' },
    { icon: '📱', value: '53%', label: 'Domicílios rurais com internet (PNAD 2022)' },
    { icon: '👨‍🌾', value: '1:500', label: 'Relação agente ATER / família rural no Brasil' },
  ],
  summary: 'O projeto Roça Conectada propõe o desenvolvimento, validação e implantação de um ecossistema tecnológico integrado.',
  editalResults: [
    'Digitalização das cadeias socioprodutivas',
    'Aumento da independência e qualidade de vida',
    'Eficiência em sistemas orgânicos/agroecológicos',
  ],
  institutionalStructure: [
    { badge: 'Proponente', badgeVariant: 'primary', label: 'FAPEU ou FEESC' },
    { badge: 'Co-pesquisador', badgeVariant: 'blue', label: 'Charles Cleivin (sem bolsa)' },
    { badge: 'Empresa PJ', badgeVariant: 'amber', label: 'THATPIX LTDA — R$ 1,68M' },
  ],
}
