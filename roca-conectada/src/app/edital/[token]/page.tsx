import type { Metadata } from 'next'
import { notFound } from 'next/navigation'
import ProposalView from '@/components/ProposalView/ProposalView'
import { getEditalByToken, getEditalDescriptorByToken, editalTokens } from '@/lib/editais'

// AgriFam anexos live in data/ and are served by /api/edital/[file].
const AGRIFAM_DOCS = [
  { label: 'Edital Principal', file: '25_03_2026_AgriFam-ICT_2026_Edital (2).pdf', tag: 'Edital' },
  { label: 'Anexo 1', file: '25_03_2026_AgriFam-ICT_2026_Anexo_1.pdf', tag: 'Anx' },
  { label: 'Anexo 2', file: '25_03_2026_AgriFam-ICT_2026_Anexo_2.pdf', tag: 'Anx' },
  { label: 'Anexo 2 + demais', file: '25_03_2026_AgriFam-ICT_2026_Anexo2_e_demais.pdf', tag: 'Anx' },
  { label: 'Anexo 3', file: '25_03_2026_AgriFam-ICT_2026_Anexo_3.pdf', tag: 'Anx' },
  { label: 'Anexo 4', file: '25_03_2026_AgriFam-ICT_2026_Anexo_4.pdf', tag: 'Anx' },
  { label: 'Anexo 5', file: '25_03_2026_AgriFam-ICT_2026_Anexo_5.pdf', tag: 'Anx' },
  { label: 'Anexo 6', file: '25_03_2026_AgriFam-ICT_2026_Anexo_6.pdf', tag: 'Anx' },
  { label: 'Telas FAP', file: '09_04_2026_Telas_FAP_e_Numero_de_Caracteres.pdf', tag: 'FAP' },
]

const DOCS_BY_SLUG: Record<string, typeof AGRIFAM_DOCS> = {
  'agrifam-ict': AGRIFAM_DOCS,
  'mais-inovacao': [],
}

export function generateStaticParams() {
  return editalTokens().map((token) => ({ token }))
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ token: string }>
}): Promise<Metadata> {
  const { token } = await params
  const proposal = getEditalByToken(token)
  const descriptor = getEditalDescriptorByToken(token)
  // Private routes: keep out of search indexes even if a token leaks.
  const robots = { index: false, follow: false }
  if (!proposal || !descriptor) return { title: 'Não encontrado', robots }
  return {
    title: `${proposal.meta.projectName} | ${descriptor.shortLabel}`,
    description: descriptor.label,
    robots,
  }
}

export default async function EditalPage({
  params,
  searchParams,
}: {
  params: Promise<{ token: string }>
  searchParams: Promise<Record<string, string | string[] | undefined>>
}) {
  const { token } = await params
  const proposal = getEditalByToken(token)
  const descriptor = getEditalDescriptorByToken(token)
  if (!proposal || !descriptor) notFound()

  const sp = await searchParams
  const para = typeof sp.para === 'string' ? sp.para.trim() || undefined : undefined

  return (
    <ProposalView
      proposal={proposal}
      para={para}
      backHref="/"
      docs={DOCS_BY_SLUG[descriptor.slug] ?? []}
    />
  )
}
