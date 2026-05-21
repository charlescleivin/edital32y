// @ts-nocheck
import type { ChecklistSectionProps } from './ChecklistSection'

export const fixture: ChecklistSectionProps = {
  number: 'Seção 10',
  title: 'Checklist de Submissão',
  subtitle: 'Lista completa de documentos · Clique para marcar como concluído',
  alertMessage: 'Recomenda-se ter todos os documentos prontos até 24/06 para margem de segurança.',
  groups: [
    {
      id: 'proposta',
      title: 'Documentos da Proposta',
      items: [
        { id: 'p1', label: 'Formulário de proposta preenchido na plataforma', detail: 'Coordenador [ICT EXECUTORA] + [FUNDAÇÃO DE APOIO]', status: 'A fazer', statusVariant: 'todo' },
        { id: 'p2', label: 'Plano de Trabalho detalhado no formato FINEP', detail: 'Em elaboração', status: 'Em elaboração', statusVariant: 'inprogress' },
      ],
    },
    {
      id: 'thatpix',
      title: 'Documentos da THATPIX',
      items: [
        { id: 't1', label: 'Cartão CNPJ — THATPIX LTDA', detail: 'Receita Federal', status: 'Disponível', statusVariant: 'available' },
        { id: 't4', label: 'Pesquisa de mercado — engenheiro sênior IA/ML', detail: 'OBRIGATÓRIO item 11.2', status: 'Crítico — compilar', statusVariant: 'critical' },
      ],
    },
  ],
}
