import type { HeroSectionProps } from './HeroSection'

export const fixture: HeroSectionProps = {
  eyebrow: 'FINEP AgriFam-ICT 2026 — Linha Temática 3',
  title: 'Roça Conectada',
  subtitle: 'A infraestrutura nacional soberana de IA para a agricultura familiar: corpus soberano, modelo fine-tuned, benchmark público e API de integração.',
  statement: 'Eles alimentam 70% do Brasil.',
  statementContrast: 'O Brasil digital ainda não os alcança.',
  stats: [
    { value: '3,9M', label: 'estabelecimentos de agricultura familiar no Brasil (IBGE Censo Agropecuário 2017)' },
    { value: '81,8%', label: 'sem acesso a qualquer assistência técnica — no Nordeste, 92,6% (IBGE 2017)' },
    { value: 'R$18,8bi', label: 'em renda rural não realizada por ano — estimativa dos autores (Rocha Junior et al., RESR 2020)' },
  ],
  layers: [
    { id: '0', badge: 'Camada 0', title: 'AgroInfra — Espinha Dorsal Nacional', description: 'A espinha dorsal do projeto: AgroLinguaBR (corpus de IA agrícola em pt-BR, CC BY-NC-SA 4.0), AgroEval (benchmark de avaliação, Apache 2.0) e AgroAPI (serviço de consulta regulado). Ativos públicos permanentes — propriedade da ICT executora ao mês 36.' },
    { id: 'a', badge: 'Camada A', title: 'AgroAssistente IA', description: 'Assistente de IA agrícola via WhatsApp, treinado sobre o corpus AgroLinguaBR. Arquitetura assíncrona — funciona mesmo com sinal intermitente. Extensão rural digital 24h, sem custo para o agricultor.' },
    { id: 'c', badge: 'Camada C', title: 'Coopera Digital', description: 'Plataforma de gestão para cooperativas e associações da agricultura familiar — conectada à AgroAPI para orientação técnica em fluxos de produção e acesso ao PAA/PNAE.' },
  ],
}
