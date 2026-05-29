import { AcronymText } from '@/components/ui/AcronymText'
import type { S15Data, JustificativaBlock, JustificativaCitation } from '@/types/proposal'

export const componentMeta = { slug: 'justificativas-section', label: 'Justificativas de Dimensionamento' }

export type JustificativasSectionProps = S15Data

const blockColors = [
  { border: 'rgba(212,150,14,0.35)',  bg: 'rgba(212,150,14,0.06)',  num: 'rgba(212,150,14,0.15)',  text: 'var(--gold)',  citBorder: 'rgba(212,150,14,0.2)',  citBg: 'rgba(212,150,14,0.04)'  },
  { border: 'rgba(8,145,178,0.3)',    bg: 'rgba(8,145,178,0.06)',   num: 'rgba(8,145,178,0.15)',   text: 'var(--p)',     citBorder: 'rgba(8,145,178,0.2)',    citBg: 'rgba(8,145,178,0.04)'    },
  { border: 'rgba(111,168,118,0.35)', bg: 'rgba(111,168,118,0.06)', num: 'rgba(111,168,118,0.15)', text: 'var(--sage)',  citBorder: 'rgba(111,168,118,0.2)',  citBg: 'rgba(111,168,118,0.04)'  },
  { border: 'rgba(200,85,48,0.35)',   bg: 'rgba(200,85,48,0.06)',   num: 'rgba(200,85,48,0.15)',   text: 'var(--terra)', citBorder: 'rgba(200,85,48,0.2)',    citBg: 'rgba(200,85,48,0.04)'    },
]

function CitationCard({ cit, citBorder, citBg, accentText }: {
  cit: JustificativaCitation
  citBorder: string
  citBg: string
  accentText: string
}) {
  return (
    <div
      className="flex flex-col gap-2 rounded-xl border p-4"
      style={{ borderColor: citBorder, background: citBg }}
    >
      <div className="flex items-start justify-between gap-3">
        <div className="flex-1 min-w-0">
          <p className="text-[11px] font-semibold leading-[1.5] line-clamp-2" style={{ color: 'var(--txt)' }}>
            <AcronymText text={cit.title} />
          </p>
          <p className="mt-0.5 text-[10px] leading-[1.4]" style={{ color: 'var(--txtll)' }}>
            <AcronymText text={cit.authors} />
          </p>
        </div>
        <span
          className="shrink-0 rounded border px-2 py-0.5 text-[9px] font-bold tracking-wider whitespace-nowrap"
          style={{ borderColor: citBorder, color: accentText, background: 'rgba(0,0,0,0.2)' }}
        >
          {cit.year}
        </span>
      </div>

      <div
        className="rounded-lg border px-3 py-2"
        style={{ borderColor: citBorder, background: 'rgba(0,0,0,0.15)' }}
      >
        <span className="text-[10px] font-bold uppercase tracking-[2px] mr-2" style={{ color: accentText }}>
          Achado-chave
        </span>
        <span className="text-[11px] leading-[1.6] font-semibold" style={{ color: 'var(--txtl)' }}>
          <AcronymText text={cit.keyFinding} />
        </span>
      </div>

      <div className="flex items-center gap-2 flex-wrap">
        <span className="text-[9.5px] italic" style={{ color: 'var(--txtll)' }}>
          <AcronymText text={cit.venue} />
        </span>
        {cit.doi && (
          <span className="text-[9px] font-mono" style={{ color: 'var(--txtll)' }}>
            · {cit.doi}
          </span>
        )}
      </div>
    </div>
  )
}

function JustBlock({ block, index }: { block: JustificativaBlock; index: number }) {
  const col = blockColors[index % blockColors.length]
  return (
    <div
      className="flex flex-col rounded-2xl border overflow-hidden"
      style={{ borderColor: col.border, background: 'var(--bg-card)' }}
    >
      {/* Block header */}
      <div
        className="px-6 py-5"
        style={{ borderBottom: `1px solid ${col.border}`, background: col.bg }}
      >
        <div className="flex items-center gap-3 mb-3">
          <span
            className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full text-[13px] font-bold"
            style={{ background: col.num, color: col.text }}
          >
            {index + 1}
          </span>
          <span className="text-[9px] font-bold uppercase tracking-[2.5px]" style={{ color: col.text }}>
            Justificativa de Dimensionamento
          </span>
        </div>
        <h3
          className="text-[17px] sm:text-[20px] font-bold leading-[1.15]"
          style={{ fontFamily: 'var(--font-playfair)', color: 'var(--txt)' }}
        >
          <AcronymText text={block.question} />
        </h3>
      </div>

      {/* Argument */}
      <div className="flex flex-col gap-6 p-6">
        <p className="text-[13px] leading-[1.9]" style={{ color: 'var(--txtl)' }}>
          <AcronymText text={block.argument} />
        </p>

        {/* Citation cards grid */}
        <div>
          <div
            className="mb-3 text-[9px] font-bold uppercase tracking-[2.5px]"
            style={{ color: 'var(--txtll)' }}
          >
            Referências bibliográficas
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
            {block.citations.map((cit, i) => (
              <CitationCard
                key={i}
                cit={cit}
                citBorder={col.citBorder}
                citBg={col.citBg}
                accentText={col.text}
              />
            ))}
          </div>
        </div>

        {/* Conclusion callout */}
        <div
          className="flex items-start gap-4 rounded-2xl border p-5"
          style={{ borderColor: col.border, background: col.bg }}
        >
          <span
            className="shrink-0 mt-0.5 flex h-6 w-6 items-center justify-center rounded-full text-[11px] font-black"
            style={{ background: col.num, color: col.text }}
          >
            ✓
          </span>
          <div>
            <div className="mb-1 text-[9px] font-bold uppercase tracking-[2.5px]" style={{ color: col.text }}>
              Conclusão
            </div>
            <p className="text-[13px] font-semibold leading-[1.8]" style={{ color: 'var(--txt)' }}>
              <AcronymText text={block.conclusion} />
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default function JustificativasSection({
  number, title, subtitle, headline,
  blocks, thatpixNote,
}: JustificativasSectionProps) {
  return (
    <section
      id="s15"
      className="relative overflow-hidden px-4 py-10 sm:px-8 sm:py-14 lg:px-16 lg:py-20"
      style={{ background: 'var(--bg-alt)' }}
    >
      {/* Decorative background numeral */}
      <span
        aria-hidden
        className="pointer-events-none absolute right-6 top-4 select-none hidden sm:block text-[180px] font-bold leading-none opacity-[0.018]"
        style={{ fontFamily: 'var(--font-playfair)', color: 'var(--txt)' }}
      >
        n
      </span>

      {/* Section header */}
      <div className="relative mb-14">
        <span
          className="mb-5 inline-flex items-center gap-2.5 rounded-full border px-4 py-1.5 text-[9px] font-bold uppercase tracking-[3px]"
          style={{ borderColor: 'var(--bdr)', background: 'rgba(237,229,211,0.04)', color: 'var(--txtll)' }}
        >
          {number}
        </span>
        {headline && (
          <p
            className="mb-3 text-[16px] sm:text-[19px] lg:text-[22px] font-bold italic leading-[1.2]"
            style={{ fontFamily: 'var(--font-playfair)', color: 'var(--gold)' }}
          >
            <AcronymText text={headline} />
          </p>
        )}
        <h2
          className="mb-3 text-[26px] sm:text-[34px] lg:text-[44px] font-bold leading-[1.05] tracking-[-0.3px]"
          style={{ fontFamily: 'var(--font-playfair)', color: 'var(--txt)' }}
        >
          <AcronymText text={title} />
        </h2>
        <p
          className="lg:max-w-[680px] text-[15px] italic leading-relaxed"
          style={{ fontFamily: 'var(--font-playfair)', color: 'var(--txtl)' }}
        >
          <AcronymText text={subtitle} />
        </p>
      </div>

      {/* Divider */}
      <div className="mb-10 flex items-center gap-3">
        <div className="h-px flex-1" style={{ background: 'var(--bdr)' }} />
        <span className="text-[9px] font-bold uppercase tracking-[2.5px]" style={{ color: 'var(--txtll)' }}>
          Justificativa Baseada em Literatura
        </span>
        <div className="h-px flex-1" style={{ background: 'var(--bdr)' }} />
      </div>

      {/* Blocks */}
      <div className="flex flex-col gap-8 mb-12">
        {blocks.map((block, i) => (
          <JustBlock key={block.id} block={block} index={i} />
        ))}
      </div>

      {/* ThatPix differentiators note */}
      <div
        className="rounded-3xl border p-8"
        style={{ borderColor: 'rgba(212,150,14,0.35)', background: 'rgba(212,150,14,0.05)' }}
      >
        <div className="mb-3 flex items-center gap-2">
          <span aria-hidden className="text-[16px]">⚙️</span>
          <div className="text-[10px] font-bold uppercase tracking-[2.5px]" style={{ color: 'var(--gold)' }}>
            Diferencial ThatPix — Metodologia de Treinamento
          </div>
        </div>
        <p className="text-[13.5px] leading-[1.9]" style={{ color: 'var(--txtl)' }}>
          <AcronymText text={thatpixNote} />
        </p>
      </div>
    </section>
  )
}
