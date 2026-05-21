import type { ProblemaSectionProps } from './ProblemaSection'

export const fixture: ProblemaSectionProps = {
  number: 'Seção 2',
  title: 'Problema e Justificativa',
  subtitle: 'Diagnóstico do cenário atual da digitalização rural brasileira',
  stats: [
    { value: '77%', label: 'dos estabelecimentos agropecuários são familiares (IBGE Censo Agro 2017)', colorVariant: 'green' },
    { value: '70%', label: 'dos alimentos consumidos no Brasil vêm da agricultura familiar', colorVariant: 'green' },
    { value: '53%', label: 'dos domicílios rurais têm acesso à internet (PNAD Contínua 2022)', colorVariant: 'blue' },
    { value: '1:500', label: 'relação agente ATER / família rural no Brasil — ANATER 2023', colorVariant: 'red' },
  ],
  barriers: [
    {
      icon: '📶',
      title: 'Conectividade Intermitente — e a Resposta Tecnológica',
      description: 'Soluções digitais existentes requerem conexão estável e contínua — inviabilizando uso em áreas rurais onde a cobertura 4G chega a menos de 30% no Semiárido (Anatel, 2023). O Roça Conectada responde a essa barreira com arquitetura assíncrona tolerante a conectividade intermitente: o AgroAssistente opera via WhatsApp, que enfileira mensagens localmente e as entrega automaticamente ao restaurar o sinal — sem perda de sessão, sem necessidade de conexão estável.',
      keyFact: { value: '≤30%', label: 'cobertura 4G no Semiárido (Anatel 2023)' },
    },
    {
      icon: '💰',
      title: 'Custo Inacessível das Plataformas Existentes',
      description: 'Plataformas agrícolas digitais comerciais cobram entre R$ 80 e R$ 500/mês por assinatura — valor que representa 3–15% da renda mensal bruta da família rural mediana (R$ 3.200/mês, IBGE 2022). O AgroAssistente elimina esse custo: acesso via WhatsApp sem mensalidade, sem smartphone de alto custo, sem dados móveis ilimitados.',
      keyFact: { value: 'R$ 80–500/mês', label: 'custo das plataformas concorrentes' },
    },
    {
      icon: '🧠',
      title: 'Ausência de IA em Português Agrícola Regional',
      description: 'Nenhum modelo de linguagem disponível foi treinado com vocabulário agrícola regional brasileiro: variedades locais, defensivos com nomes populares, condições climáticas do Cerrado, Caatinga ou Amazônia. GPT-4 e Claude respondem em inglês técnico ou português genérico — inadequado para o técnico EMATER ou o agricultor do Sertão. O AgroLinguaBR corrige essa lacuna com 25.000 pares Q&A em português agrícola regional: a primeira base de dados de IA agroalimentar com DOI público no Brasil.',
      keyFact: { value: '0', label: 'corpora públicos de IA agrícola em pt-BR existentes hoje' },
    },
    {
      icon: '🏛️',
      title: 'Colapso Estrutural da ATER — Escassez de Técnicos',
      description: 'A relação nacional entre agentes ATER e famílias rurais é de 1:500 — e chega a 1:1.000 no Norte e Nordeste (ANATER, 2023). Uma visita técnica presencial custa R$ 300–600 por família, tornando a extensão rural convencional economicamente inescalável. O AgroAssistente não substitui o técnico ATER: multiplica sua capacidade. Um técnico capacitado como multiplicador pode atender indiretamente 83 agricultores via plataforma — reduzindo a relação efetiva para 1:6 com custo marginal próximo de zero.',
      keyFact: { value: '1:500', label: 'relação agente ATER / família (meta ONU: 1:400)' },
    },
  ],
  contextNote: 'Norte e Nordeste concentram o maior número de agricultores familiares com pior infraestrutura digital. O Semiárido baiano (região-piloto BA) tem cobertura 4G inferior a 30% — condição de teste que valida a arquitetura assíncrona do projeto.',
  competitiveContext: '**Por que agora — e por que nenhuma solução existente resolve:**\n\nOs modelos de linguagem de grande escala (LLMs) atingiram em 2023–2024 o ponto de viabilidade técnica para aplicações de nicho em língua portuguesa — custo de inferência caiu 95% em 2 anos (OpenAI, 2024). Ao mesmo tempo, o WhatsApp atingiu 99% de adoção entre adultos rurais com smartphone no Brasil (Meta Business Insights, 2023), eliminando a barreira de adoção de app novo. A janela de oportunidade para construir a infraestrutura soberana de IA agroalimentar — antes que plataformas estrangeiras ocupem o espaço — é exatamente a vigência deste edital.',
}
