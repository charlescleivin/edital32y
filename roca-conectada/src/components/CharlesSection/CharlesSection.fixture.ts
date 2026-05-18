// @ts-nocheck
import type { CharlesSectionProps } from './CharlesSection'

export const fixture: CharlesSectionProps = {
  name: 'Charles Cleivin',
  title: 'Senior Software Engineer',
  subtitle: 'AI · LLM Fine-tuning · Agent Systems · Rust & React',
  location: 'Brasil / Canadá / EUA',
  email: 'charlescleivin@gmail.com',
  bio: 'Engenheiro de Software Sênior com mais de 10 anos de experiência construindo sistemas distribuídos, plataformas de agentes inteligentes e aplicações móveis em produção.',
  highlights: [
    { value: '10+', label: 'Anos de experiência em engenharia' },
    { value: '7B+', label: 'Parâmetros em modelos fine-tunados' },
    { value: '20M+', label: 'Inscritos alcançados via LLM deployado' },
    { value: '27%', label: 'Redução de loss no fine-tuning' },
  ],
  skills: [
    { area: 'LLM & Fine-tuning', icon: '🧠', items: ['Qwen2.5, Llama (7B+)', 'LoRA / PEFT / 4-bit NF4'] },
    { area: 'AI & Agentes', icon: '🤖', items: ['PyTorch, LangChain', 'Agentes offline'] },
  ],
  projects: [
    {
      name: 'Manual do Mundo — LLM Fine-tuning',
      description: 'Fine-tuning do Qwen2.5-7B em português para o maior canal de ciência do Brasil.',
      tags: ['Qwen2.5-7B', 'LoRA', 'Portuguese NLP'],
      relevance: 'Core técnico do AgroAssistente IA.',
    },
  ],
  softSkills: ['Comunicação assíncrona excepcional', 'Opera com alta autonomia'],
  videos: [],
  cvFile: '/charles_cleivin_cv.pdf',
}
