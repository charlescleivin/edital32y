import type { HeroSectionProps } from './HeroSection'

export const fixture: HeroSectionProps = {
  eyebrow: 'MCTI / FINEP / FNDCT — Linha Temática 3',
  title: 'Roça Conectada',
  subtitle: 'A infraestrutura nacional soberana de IA para a agricultura familiar: corpus aberto, modelo soberano, benchmark público e API de integração — a espinha dorsal sobre a qual o Brasil construirá sua inteligência agroalimentar.',
  stats: [
    { value: 'R$ 7M', label: 'Valor Solicitado' },
    { value: '36 meses', label: 'Prazo de Execução' },
    { value: 'Linha 3', label: 'Soluções Digitais Rural' },
    { value: 'Cenário 4', label: 'ICT + PJ Especializado' },
  ],
  layers: [
    { id: '0', badge: 'Camada 0', title: 'AgroInfra — Espinha Dorsal Nacional', description: 'AgroLinguaBR (corpus público com DOI), AgroEval (benchmark nacional para avaliação de IA agrícola) e AgroAPI (acesso aberto): infraestrutura soberana que qualifica, direciona e conecta o ecossistema brasileiro de IA agroalimentar.' },
    { id: 'a', badge: 'Camada A', title: 'AgroAssistente IA', description: 'LLM em português, via WhatsApp, arquitetura assíncrona tolerante a conectividade intermitente. Extensão rural digital 24h — primeira aplicação construída sobre a Camada 0.' },
    { id: 'c', badge: 'Camada C', title: 'Coopera Digital', description: 'Plataforma de gestão para cooperativas e associações da agricultura familiar — segunda aplicação construída sobre a Camada 0.' },
  ],
}
