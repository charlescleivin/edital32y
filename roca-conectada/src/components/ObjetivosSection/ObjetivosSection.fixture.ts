// @ts-nocheck
import type { ObjetivosSectionProps } from './ObjetivosSection'

export const fixture: ObjetivosSectionProps = {
  number: 'Seção 3',
  title: 'Objetivos',
  subtitle: 'Geral e específicos, alinhados à Linha Temática 3',
  generalObjective: 'Desenvolver, validar e implantar o ecossistema Roça Conectada como solução integrada para a digitalização das cadeias socioprodutivas da agricultura familiar.',
  axes: [
    {
      id: 'e1',
      label: 'Eixo I — Pesquisa e Desenvolvimento',
      objectives: [
        { id: 'oe1', code: 'OE1.', text: 'Diagnóstico participativo das necessidades digitais.' },
        { id: 'oe2', code: 'OE2.', text: 'Construção do corpus AgroLinguaBR.' },
      ],
    },
    {
      id: 'e2',
      label: 'Eixo II — Validação e Implantação',
      objectives: [
        { id: 'oe5', code: 'OE5.', text: 'Implantação do AgroAssistente IA com 800 agricultores.' },
      ],
    },
  ],
}
