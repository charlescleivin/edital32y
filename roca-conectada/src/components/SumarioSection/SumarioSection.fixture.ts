import type { SumarioSectionProps } from './SumarioSection'

export const fixture: SumarioSectionProps = {
  number: 'Seção 1',
  title: 'Sumário Executivo',
  subtitle: 'Visão geral do projeto, público-alvo e impacto esperado',
  stats: [
    { icon: '🌾', value: '3,9M', label: 'famílias agricultoras completamente fora do perímetro de soberania digital que o Brasil está construindo agora (IBGE 2017)' },
    { icon: '📉', value: 'R$18,8bi', label: 'em renda rural não realizada por ano, estimativa com base em Rocha Junior et al. (RESR 2020) e IBGE (2017)' },
    { icon: '⚠️', value: '81,8%', label: 'dos agricultores familiares sem acesso a ATER; no Nordeste, essa ausência chega a 92,6% (IBGE Censo Agropecuário 2017)' },
  ],
  problemStatement: 'A agricultura familiar produz 70% dos alimentos consumidos no Brasil — mas o agente ATER atende em média 500 famílias sozinho, sem assistente digital, sem corpus de IA em português regional, sem infraestrutura soberana de dados. Ferramentas estrangeiras generalistas não respondem sobre mandioca do Sertão, defensivos com nome popular ou condições do Cerrado. O Brasil carece de um ativo nacional: um corpus agrícola público, um modelo soberano e uma API aberta para o ecossistema.',
  summary: 'O SABIA — Sistema Agronômico Brasileiro de Inteligência Artificial — propõe a construção da infraestrutura nacional soberana de IA para a agricultura familiar — produzindo o corpus, o modelo, o benchmark e a API aberta que o Brasil ainda não tem — e, sobre ela, o desenvolvimento e implantação do AgroAssistente IA e do Coopera Digital como primeiras aplicações sobre esta espinha dorsal.',
  editalResults: [
    'Digitalização das cadeias socioprodutivas da AF (RE-08 — primário)',
    'Novos conhecimentos: AgroLinguaBR e AgroEval como bens científicos públicos (RE-05)',
    'Novo serviço nacional: AgroAPI para o ecossistema de IA agrícola (RE-06)',
    'Aumento da independência e qualidade de vida das famílias rurais (RE-01)',
    'Fortalecimento de cooperativas via Coopera Digital (RE-02)',
  ],
  institutionalStructure: [
    { badge: 'Proponente', badgeVariant: 'primary', label: '[FUNDAÇÃO DE APOIO]' },
    { badge: 'Executora', badgeVariant: 'primary', label: '[ICT EXECUTORA] / [NOME DO LAB]' },
    { badge: 'Empresa PJ', badgeVariant: 'amber', label: 'THATPIX LTDA — Engenharia e Implementação Tecnológica (item 6.2.2.1) · Responsável Técnico: Charles Cleivin, Sócio-fundador' },
  ],
}
