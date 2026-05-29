import { acronymGlossary } from '@/lib/acronymGlossary'
import { Acronym } from './Acronym'

const TERMS = Object.keys(acronymGlossary).sort((a, b) => b.length - a.length)

function buildPattern() {
  const escaped = TERMS.map(t => t.replace(/[.*+?^${}()|[\]\\]/g, '\\$&'))
  return new RegExp(`(?<![A-Za-z])(${escaped.join('|')})(?![A-Za-z])`, 'g')
}

interface AcronymTextProps {
  text: string
}

export function AcronymText({ text }: AcronymTextProps) {
  if (!text) return null

  const pattern = buildPattern()
  const parts: React.ReactNode[] = []
  let lastIndex = 0
  let match: RegExpExecArray | null
  let key = 0

  while ((match = pattern.exec(text)) !== null) {
    if (match.index > lastIndex) {
      parts.push(text.slice(lastIndex, match.index))
    }
    const term = match[1]
    parts.push(<Acronym key={key++} term={term}>{term}</Acronym>)
    lastIndex = match.index + match[0].length
  }

  if (lastIndex < text.length) {
    parts.push(text.slice(lastIndex))
  }

  return <>{parts}</>
}
