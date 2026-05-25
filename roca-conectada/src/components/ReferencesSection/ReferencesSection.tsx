import SectionHero from '@/components/ui/SectionHero'
import type { Reference, S11Data } from '@/types/proposal'

export const componentMeta = { slug: 'references-section', label: 'Referências Bibliográficas' }

export type ReferencesSectionProps = S11Data

const areaLabel: Record<string, string> = {
  agricultura: '🌾 Agricultura & Extensão Rural',
  metodologia: '🔬 Metodologia & Pesquisa',
  nlp: '🤖 NLP & Inteligência Artificial',
  politica: '⚖️ Política Pública & Regulação',
  lgpd: '🔒 Proteção de Dados & LGPD',
}

const areaColor: Record<string, { border: string; bg: string; label: string }> = {
  agricultura: { border: 'rgba(111,168,118,0.25)', bg: 'rgba(111,168,118,0.06)', label: 'var(--sage)' },
  metodologia: { border: 'rgba(74,148,86,0.25)',   bg: 'rgba(74,148,86,0.06)',   label: 'var(--p)' },
  nlp:         { border: 'rgba(212,150,14,0.25)',  bg: 'rgba(212,150,14,0.06)',  label: 'var(--gold)' },
  politica:    { border: 'rgba(200,85,48,0.25)',   bg: 'rgba(200,85,48,0.06)',   label: 'var(--terra)' },
  lgpd:        { border: 'rgba(237,229,211,0.15)', bg: 'rgba(237,229,211,0.04)', label: 'var(--txtl)' },
}

function groupByArea(references: Reference[]): Map<string, Reference[]> {
  const order = ['agricultura', 'metodologia', 'nlp', 'politica', 'lgpd']
  const map = new Map<string, Reference[]>()
  for (const area of order) map.set(area, [])
  for (const ref of references) {
    if (!map.has(ref.area)) map.set(ref.area, [])
    map.get(ref.area)!.push(ref)
  }
  for (const [key, val] of map) if (val.length === 0) map.delete(key)
  return map
}

export default function ReferencesSection({ number, title, subtitle, headline, heroImage, heroCaption, heroStatement, heroObjectPosition, references }: ReferencesSectionProps) {
  const grouped = groupByArea(references)

  return (
    <section id="s11" className="relative overflow-hidden px-4 py-10 sm:px-8 sm:py-14 lg:px-16 lg:py-20" style={{ background: 'var(--bg)' }}>
      <span aria-hidden className="pointer-events-none absolute right-8 top-4 select-none hidden sm:block text-[180px] font-bold leading-none opacity-[0.025]"
        style={{ fontFamily: 'var(--font-playfair)', color: 'var(--txt)' }}>11</span>
      {heroImage && <SectionHero image={heroImage} caption={heroCaption} statement={heroStatement} objectPosition={heroObjectPosition} />}

      <div className="relative mb-14">
        <span className="mb-5 inline-flex items-center gap-2.5 rounded-full border px-4 py-1.5 text-[9px] font-bold uppercase tracking-[3px]"
          style={{ borderColor: 'var(--bdr)', background: 'rgba(237,229,211,0.04)', color: 'var(--txtll)' }}>
          📚 {number}
        </span>
        {headline && (
          <p className="mb-3 text-[16px] sm:text-[19px] lg:text-[22px] font-bold italic leading-[1.2]"
            style={{ fontFamily: 'var(--font-playfair)', color: 'var(--terra)' }}>
            {headline}
          </p>
        )}
        <h2 className="mb-3 text-[26px] sm:text-[34px] lg:text-[44px] font-bold leading-[1.05] tracking-[-0.3px]"
          style={{ fontFamily: 'var(--font-playfair)', color: 'var(--txt)' }}>{title}</h2>
        <p className="text-[15px] italic leading-relaxed"
          style={{ fontFamily: 'var(--font-playfair)', color: 'var(--txtl)' }}>{subtitle}</p>
      </div>

      {/* summary pill */}
      <div className="mb-10 inline-flex items-center gap-2 rounded-full border px-4 py-2"
        style={{ borderColor: 'var(--bdr)', background: 'var(--bg-card)' }}>
        <span className="text-[13px] font-semibold" style={{ color: 'var(--txt)' }}>{references.length} referências</span>
        <span className="text-[12px]" style={{ color: 'var(--txtll)' }}>· {grouped.size} áreas temáticas · ABNT NBR 6023:2018</span>
      </div>

      <div className="flex flex-col gap-8">
        {Array.from(grouped.entries()).map(([area, refs]) => {
          const accent = areaColor[area] ?? areaColor.lgpd
          return (
            <div key={area}>
              <div className="mb-4 flex items-center gap-3">
                <div className="h-px flex-1" style={{ background: 'var(--bdr)' }} />
                <span className="text-[10px] font-bold uppercase tracking-[2.5px]"
                  style={{ color: accent.label }}>
                  {areaLabel[area] ?? area}
                </span>
                <div className="h-px flex-1" style={{ background: 'var(--bdr)' }} />
              </div>

              <div className="overflow-hidden rounded-2xl border" style={{ borderColor: accent.border, background: accent.bg }}>
                {refs.map((ref, i) => (
                  <div key={ref.id}
                    className="flex gap-4 px-6 py-4 text-[13px] leading-[1.8]"
                    style={{
                      borderTop: i === 0 ? undefined : '1px solid var(--bdr)',
                      color: 'var(--txtl)',
                    }}>
                    <span className="shrink-0 rounded-lg px-2 py-0.5 text-[10px] font-bold self-start mt-0.5"
                      style={{ background: 'var(--pale)', color: accent.label }}>
                      {ref.id.toUpperCase()}
                    </span>
                    <p className="min-w-0">{ref.abnt}</p>
                  </div>
                ))}
              </div>
            </div>
          )
        })}
      </div>

      {/* ABNT note */}
      <div className="mt-10 rounded-xl border-l-[3px] px-5 py-4"
        style={{ borderColor: 'rgba(237,229,211,0.15)', background: 'rgba(237,229,211,0.03)' }}>
        <span className="text-[11px] leading-[1.7]" style={{ color: 'var(--txtll)' }}>
          Referências formatadas conforme ABNT NBR 6023:2018. Acesso verificado em janeiro de 2026.
        </span>
      </div>
    </section>
  )
}
