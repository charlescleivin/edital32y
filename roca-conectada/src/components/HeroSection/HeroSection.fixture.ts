import type { HeroSectionProps } from './HeroSection'

export const fixture: HeroSectionProps = {
  eyebrow: 'MCTI / FINEP / FNDCT — Linha Temática 3',
  title: 'Roça Conectada',
  subtitle: 'A infraestrutura nacional soberana de IA para a agricultura familiar: corpus aberto, modelo fine-tuned, benchmark público e API de integração.',
  statement: 'Eles alimentam 70% do Brasil.',
  statementContrast: 'O Brasil digital ainda não os alcança.',
  stats: [
    { value: '3,9M', label: 'estabelecimentos de agricultura familiar no Brasil (IBGE Censo Agropecuário 2017)' },
    { value: '81,8%', label: 'sem acesso a qualquer assistência técnica — no Nordeste, 92,6% (IBGE 2017)' },
    { value: 'R$18,8bi', label: 'em renda rural não realizada por ano — estimativa dos autores (Rocha Junior et al., RESR 2020)' },
  ],
  layers: [
    { id: '0', badge: 'Camada 0', title: 'AgroInfra — Espinha Dorsal Nacional', description: 'AgroLinguaBR (corpus público com DOI), AgroEval (benchmark nacional) e AgroAPI (acesso aberto): infraestrutura soberana que qualifica e conecta o ecossistema brasileiro de IA agroalimentar.' },
    { id: 'a', badge: 'Camada A', title: 'AgroAssistente IA', description: 'LLM em português, via WhatsApp, arquitetura assíncrona tolerante a conectividade intermitente. Extensão rural digital 24h.' },
    { id: 'c', badge: 'Camada C', title: 'Coopera Digital', description: 'Plataforma de gestão para cooperativas e associações da agricultura familiar.' },
  ],
}
