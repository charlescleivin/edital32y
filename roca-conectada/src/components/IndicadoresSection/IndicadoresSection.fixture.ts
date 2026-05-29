import type { IndicadoresSectionProps } from './IndicadoresSection'

export const fixture: IndicadoresSectionProps = {
  number: 'Seção 8',
  title: 'Indicadores e Metas',
  subtitle: 'KPIs mensuráveis por fase e dimensão avaliativa',
  counters: [
    { icon: '👨‍🌾', count: 2500, label: 'Agricultores ativos (Fase 3)' },
    { icon: '🏛️', count: 18, label: 'Cooperativas implantadas' },
    { icon: '🎓', count: 350, label: 'Multiplicadores capacitados' },
    { icon: '🔗', count: 5, label: 'Instituições integrando a AgroAPI' },
    { icon: '📚', count: 25000, label: 'Pares Q&A — corpus AgroLinguaBR' },
    { icon: '📝', count: 5, label: 'Artigos científicos publicados' },
  ],
  indicators: [
    { indicator: 'Agricultores com AgroAssistente ativo (MAU)', phase1: '—', phase2: '800', phase3: '2.500' },
    { indicator: 'Cooperativas com Coopera Digital ativo', phase1: '—', phase2: '6', phase3: '18' },
    { indicator: 'Multiplicadores capacitados (acumulado)', phase1: '20', phase2: '120', phase3: '350' },
    { indicator: 'AgroLinguaBR — pares Q&A no corpus (acumulado)', phase1: '10.000', phase2: '18.000', phase3: '25.000' },
    { indicator: 'Instituições integrando a AgroAPI', phase1: '—', phase2: '2', phase3: '5' },
    { indicator: 'Downloads / citações do AgroEval (acumulado)', phase1: '—', phase2: '50', phase3: '200' },
    { indicator: 'Redução de custo de insumos por família (grupo AgroAssistente vs. controle)', phase1: '—', phase2: 'baseline', phase3: '−12–18%' },
    { indicator: 'Tempo médio de resolução de dúvida técnica (horas)', phase1: '—', phase2: 'baseline', phase3: '−65%' },
    { indicator: 'Consultas sobre manejo orgânico/agroecológico (% das interações — RE-04)', phase1: '—', phase2: 'baseline', phase3: '≥ 20%' },
  ],
  impactNarrative: 'Cada um dos 2.500 agricultores familiares ativos no AgroAssistente ao final da Fase 3 representa uma família que passa a receber orientação técnica agrícola personalizada 24 horas por dia, sem custo de deslocamento. A literatura de extensão rural digital (FAO, 2022; Embrapa, 2023) indica redução média de 12–18% no custo de insumos quando o agricultor tem acesso a orientação técnica em tempo real sobre dosagem e manejo. Para uma família com renda agrícola bruta de R$ 36.000/ano (mediana IBGE 2022), isso representa R$ 4.300–6.500/ano de economia — financiando o próprio acesso à tecnologia. Somando as 18 cooperativas digitalizadas pelo Coopera Digital, o impacto econômico agregado estimado no ecossistema atendido ultrapassa R$ 12 milhões/ano ao final do projeto.',
}
