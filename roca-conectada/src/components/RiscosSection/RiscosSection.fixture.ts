// @ts-nocheck
import type { RiscosSectionProps } from './RiscosSection'

export const fixture: RiscosSectionProps = {
  number: 'Seção 9',
  title: 'Riscos e Mitigações',
  subtitle: 'Matriz de riscos técnicos, institucionais e de campo',
  risks: [
    { id: 'R01', title: 'Desempenho insuficiente do LLM agrícola', mitigation: 'Fallback RAG disponível; 2 ciclos de re-treinamento previstos.', probability: 'Média', level: 'high' },
    { id: 'R02', title: 'Baixa adoção do AgroAssistente', mitigation: 'Design co-criado com agricultores; onboarding via multiplicadores.', probability: 'Média', level: 'high' },
    { id: 'R05', title: 'Dependência de pessoas-chave', mitigation: 'Código documentado progressivamente.', probability: 'Baixa', level: 'medium' },
    { id: 'R10', title: 'Descontinuidade de políticas públicas', mitigation: 'Módulo de comercialização atende mercados privados também.', probability: 'Baixa', level: 'low' },
  ],
}
