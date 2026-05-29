'use client'

import { useState } from 'react'
import SectionHero from '@/components/ui/SectionHero'
import { AcronymText } from '@/components/ui/AcronymText'
import type { S10Data, ChecklistItem } from '@/types/proposal'

export const componentMeta = { slug: 'checklist-section', label: 'Checklist de Submissão' }

export type ChecklistSectionProps = S10Data

const statusStyles: Record<string, { bg: string; color: string }> = {
  todo:       { bg: 'var(--goldp)',  color: 'var(--gold)'  },
  critical:   { bg: 'var(--terrap)', color: 'var(--terra)' },
  available:  { bg: 'var(--pale)',   color: 'var(--p)'     },
  inprogress: { bg: 'var(--sagep)',  color: 'var(--sage)'  },
}

function CheckItem({ item }: { item: ChecklistItem }) {
  const [done, setDone] = useState(false)
  const st = statusStyles[item.statusVariant] ?? statusStyles.todo
  return (
    <div
      onClick={() => setDone((d) => !d)}
      className="flex cursor-pointer items-start gap-3.5 rounded-xl p-3.5 transition-all"
      style={{
        opacity: done ? 0.38 : 1,
        background: 'transparent',
      }}
      onMouseEnter={(e) => { (e.currentTarget as HTMLDivElement).style.background = 'rgba(237,229,211,0.04)' }}
      onMouseLeave={(e) => { (e.currentTarget as HTMLDivElement).style.background = 'transparent' }}
    >
      {/* checkbox */}
      <div className="mt-0.5 flex h-5 w-5 shrink-0 items-center justify-center rounded-md border-[1.5px] text-[11px] font-bold transition-all"
        style={{
          borderColor: done ? 'var(--p)' : 'var(--bdr-strong)',
          background: done ? 'var(--p)' : 'transparent',
          color: 'var(--txt)',
        }}>
        {done ? '✓' : ''}
      </div>

      <div className="flex-1">
        {/* label — 13.5px Inter 500 */}
        <div className="text-[13.5px] font-medium"
          style={{ color: done ? 'var(--txtll)' : 'var(--txt)', textDecoration: done ? 'line-through' : 'none' }}>
          <AcronymText text={item.label} />
        </div>
        {/* detail — 12px Inter 400 */}
        <div className="mt-0.5 text-[12px]" style={{ color: 'var(--txtll)' }}><AcronymText text={item.detail} /></div>
      </div>

      {/* status badge */}
      <span className="shrink-0 rounded-full px-2.5 py-0.5 text-[10px] font-bold"
        style={{ background: st.bg, color: st.color }}>{item.status}</span>
    </div>
  )
}

export default function ChecklistSection({ number, title, subtitle, headline, heroImage, heroCaption, heroStatement, heroObjectPosition, alertMessage, groups }: ChecklistSectionProps) {
  return (
    <section id="s10" className="relative overflow-hidden px-4 py-10 sm:px-8 sm:py-14 lg:px-16 lg:py-20" style={{ background: 'var(--bg-alt)' }}>
      <span aria-hidden className="pointer-events-none absolute right-8 top-4 select-none hidden sm:block text-[180px] font-bold leading-none opacity-[0.025]"
        style={{ fontFamily: 'var(--font-playfair)', color: 'var(--txt)' }}>10</span>
      {heroImage && <SectionHero image={heroImage} caption={heroCaption} statement={heroStatement} objectPosition={heroObjectPosition} />}

      <div className="relative mb-14">
        <span className="mb-5 inline-flex items-center gap-2.5 rounded-full border px-4 py-1.5 text-[9px] font-bold uppercase tracking-[3px]"
          style={{ borderColor: 'var(--bdr)', background: 'rgba(237,229,211,0.04)', color: 'var(--txtll)' }}>
          {number}
        </span>
        {headline && (
          <p className="mb-3 text-[16px] sm:text-[19px] lg:text-[22px] font-bold italic leading-[1.2]"
            style={{ fontFamily: 'var(--font-playfair)', color: 'var(--terra)' }}>
            <AcronymText text={headline} />
          </p>
        )}
        <h2 className="mb-3 text-[26px] sm:text-[34px] lg:text-[44px] font-bold leading-[1.05] tracking-[-0.3px]"
          style={{ fontFamily: 'var(--font-playfair)', color: 'var(--txt)' }}><AcronymText text={title} /></h2>
        <p className="text-[15px] italic leading-relaxed"
          style={{ fontFamily: 'var(--font-playfair)', color: 'var(--txtl)' }}><AcronymText text={subtitle} /></p>
      </div>

      {/* alert */}
      <div className="mb-8 flex gap-4 rounded-2xl border p-6"
        style={{ borderColor: 'rgba(212,150,14,0.2)', background: 'rgba(212,150,14,0.06)' }}>
        <span className="mt-0.5 text-[20px] leading-none">⏰</span>
        <div className="text-[13.5px] leading-[1.75]" style={{ color: 'var(--txtl)' }}><AcronymText text={alertMessage} /></div>
      </div>

      {/* groups */}
      <div className="flex flex-col gap-5">
        {groups.map((group) => (
          <div key={group.id} className="overflow-hidden rounded-2xl border"
            style={{ borderColor: 'var(--bdr)', background: 'var(--bg-card)' }}>
            {/* group header — 10px Inter 700 uppercase */}
            <div className="border-b px-6 py-3.5"
              style={{ borderColor: 'var(--bdr)', background: 'var(--bg-raised)' }}>
              <span className="text-[10px] font-bold uppercase tracking-[2.5px]"
                style={{ color: 'var(--p)' }}>{group.title}</span>
            </div>
            <div className="divide-y px-2 py-2" style={{ borderColor: 'var(--bdr)' }}>
              {group.items.map((item) => <CheckItem key={item.id} item={item} />)}
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}
