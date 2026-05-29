import React from 'react'
import { AcronymTooltip } from '@/components/ui/AcronymTooltip'
import { ACRONYM_LIST } from '@/lib/acronyms'

// Renders a text string with acronyms wrapped in AcronymTooltip components
// Safe to call server-side (AcronymTooltip is a client component)
export function renderWithAcronyms(text: string): React.ReactNode {
  if (!text) return text

  // Build regex from acronym list — match whole words only
  // Sort by length desc to avoid partial matches (PNPIAF before PNAE)
  const sorted = [...ACRONYM_LIST].sort((a, b) => b.length - a.length)
  const pattern = sorted
    .map(a => a.replace(/[.*+?^${}()|[\]\\]/g, '\\$&'))
    .join('|')
  const regex = new RegExp(`\\b(${pattern})\\b`, 'g')

  const parts: React.ReactNode[] = []
  let lastIndex = 0
  let match: RegExpExecArray | null

  while ((match = regex.exec(text)) !== null) {
    if (match.index > lastIndex) {
      parts.push(text.slice(lastIndex, match.index))
    }
    parts.push(
      <AcronymTooltip key={`${match[1]}-${match.index}`} acronym={match[1]} />
    )
    lastIndex = match.index + match[1].length
  }
  if (lastIndex < text.length) {
    parts.push(text.slice(lastIndex))
  }
  return parts.length === 1 && typeof parts[0] === 'string' ? parts[0] : <>{parts}</>
}
