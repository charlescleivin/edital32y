// @ts-nocheck
import type { MetodologiaSectionProps } from './MetodologiaSection'

export const fixture: MetodologiaSectionProps = {
  number: 'Seção 4',
  title: 'Metodologia e Plano de Trabalho',
  subtitle: 'Três fases de 12 meses — desenvolvimento ágil orientado a evidências',
  phases: [
    { id: 'f1', icon: '🔬', label: 'Fase 1', name: 'Fundação', period: 'Meses 1–12', activities: ['Diagnóstico participativo', 'Corpus AgroLinguaBR'] },
    { id: 'f2', icon: '🚀', label: 'Fase 2', name: 'Validação e Piloto', period: 'Meses 13–24', activities: ['Piloto AgroAssistente — 800 agricultores'] },
    { id: 'f3', icon: '🌍', label: 'Fase 3', name: 'Escala e Transferência', period: 'Meses 25–36', activities: ['Expansão — 2.500 agricultores'] },
  ],
  scopeDistinction: {
    researcher: {
      title: 'Charles Cleivin — Co-pesquisador',
      subtitle: 'Participação Intelectual e Científica',
      responsibilities: ['Define arquitetura científica', 'Analisa resultados'],
      badge: 'SEM bolsa · SEM remuneração pessoal',
    },
    company: {
      title: 'THATPIX LTDA — Empresa PJ Contratada',
      subtitle: 'Engenharia e Implementação Tecnológica',
      responsibilities: ['Executa o pipeline de fine-tuning', 'Desenvolve backend e frontend'],
      note: 'Restrições',
      noteItems: ['NÃO co-autora publicações', 'NÃO toma decisões científicas'],
    },
  },
}
