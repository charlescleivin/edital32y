// @ts-nocheck
import type { ProblemaSectionProps } from './ProblemaSection'

export const fixture: ProblemaSectionProps = {
  number: 'Seção 2',
  title: 'Problema e Justificativa',
  subtitle: 'Diagnóstico do cenário atual da digitalização rural brasileira',
  stats: [
    { value: '77%', label: 'dos estabelecimentos agropecuários são familiares', colorVariant: 'green' },
    { value: '70%', label: 'dos alimentos consumidos no Brasil vêm da AF', colorVariant: 'green' },
    { value: '53%', label: 'dos domicílios rurais têm internet', colorVariant: 'blue' },
    { value: '30%', label: 'ou menos de cobertura no Semiárido', colorVariant: 'red' },
  ],
  barriers: [
    { icon: '📶', title: 'Conectividade Intermitente', description: 'Soluções existentes requerem conexão estável.' },
    { icon: '💰', title: 'Custo Inacessível', description: 'Assinaturas de R$ 80–500/mês são inviáveis.' },
    { icon: '🗣️', title: 'Ausência de IA em Português Agrícola', description: 'Nenhuma plataforma oferece assistente conversacional.' },
    { icon: '🏛️', title: 'Colapso da ATER', description: '1 agente para 500–1.000 famílias.' },
  ],
  contextNote: 'Norte e Nordeste concentram o maior número de agricultores familiares com pior infraestrutura digital.',
}
