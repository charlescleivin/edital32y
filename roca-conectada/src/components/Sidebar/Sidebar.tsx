'use client'

import { useEffect, useState } from 'react'
import Link from 'next/link'

export const componentMeta = { slug: 'sidebar', label: 'Sidebar Navigation' }

export interface SidebarSection {
  id: string
  label: string
  num: string
}

export interface SidebarProps {
  projectName: string
  call: string
  deadline: string
  sections: SidebarSection[]
}

function useCountdown(deadline: string) {
  const [days, setDays] = useState<number | null>(null)
  useEffect(() => {
    const calc = () => setDays(Math.ceil((new Date(deadline).getTime() - Date.now()) / 86400000))
    calc()
    const id = setInterval(calc, 60000)
    return () => clearInterval(id)
  }, [deadline])
  return days
}

function useActiveSection(ids: string[]) {
  const [active, setActive] = useState(ids[0] ?? '')
  const key = ids.join(',')
  useEffect(() => {
    const handler = () => {
      let cur = ids[0] ?? ''
      for (const id of ids) {
        const el = document.getElementById(id)
        if (el && el.getBoundingClientRect().top <= 200) cur = id
      }
      setActive(cur)
    }
    handler()
    window.addEventListener('scroll', handler, { passive: true })
    return () => window.removeEventListener('scroll', handler)
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [key])
  return active
}

export default function Sidebar({ projectName, call, deadline, sections }: SidebarProps) {
  const days = useCountdown(deadline)
  const active = useActiveSection(sections.map((s) => s.id))

  return (
    <aside
      className="fixed left-0 top-0 z-50 flex h-screen w-[270px] flex-col overflow-y-auto"
      style={{
        background: 'linear-gradient(180deg, #09080606 0%, #0b0e09 40%, #090c07 100%)',
        borderRight: '1px solid rgba(237,229,211,0.05)',
      }}
    >
      {/* project identity */}
      <div className="px-7 pb-6 pt-8" style={{ borderBottom: '1px solid rgba(237,229,211,0.06)' }}>
        <span className="mb-3 block text-[28px] leading-none">🌾</span>
        {/* project name — 21px Playfair Display 700 */}
        <div className="text-[21px] font-bold leading-[1.2] tracking-[-0.3px]"
          style={{ fontFamily: 'var(--font-playfair)', color: 'var(--txt)' }}>
          {projectName}
        </div>
        {/* call label — 9px Inter 600 uppercase */}
        <div className="mt-2.5 text-[9px] font-semibold uppercase leading-relaxed tracking-[2px]"
          style={{ color: 'var(--txtll)' }}>{call}</div>
      </div>

      {/* navigation */}
      <nav className="flex-1 py-5">
        <span className="block px-7 pb-2.5 text-[8px] font-bold uppercase tracking-[3px]"
          style={{ color: 'var(--txtll)' }}>Seções</span>

        {sections.map((s) => (
          <Link
            key={s.id}
            href={`#${s.id}`}
            className={`flex items-center gap-3 border-l-2 px-6 py-2.5 text-[12.5px] font-medium transition-all duration-150 ${
              active === s.id ? 'border-[#c85530]' : 'border-transparent'
            }`}
            style={{
              background: active === s.id ? 'rgba(200,85,48,0.08)' : 'transparent',
              color: active === s.id ? 'var(--txt)' : 'var(--txtl)',
            }}
          >
            <span className="flex h-[20px] w-[20px] shrink-0 items-center justify-center rounded-md text-[9px] font-bold"
              style={{
                background: active === s.id ? 'var(--terra)' : 'rgba(237,229,211,0.06)',
                color: active === s.id ? 'var(--txt)' : 'var(--txtll)',
              }}>
              {s.num}
            </span>
            <span className="truncate">{s.label}</span>
          </Link>
        ))}
      </nav>

      {/* deadline */}
      <div className="mx-5 mb-6 rounded-2xl p-4 text-center"
        style={{ background: 'var(--goldp)', border: '1px solid rgba(212,150,14,0.18)' }}>
        {/* label — 8px Inter 700 uppercase */}
        <div className="mb-1 text-[8px] font-bold uppercase tracking-[2.5px]"
          style={{ color: 'var(--txtll)' }}>Prazo de submissão</div>
        {/* date — 19px Playfair Display 700 */}
        <span className="my-1.5 block text-[19px] font-bold"
          style={{ fontFamily: 'var(--font-playfair)', color: 'var(--gold)' }}>26/06/2026</span>
        {/* countdown — 11px Inter 400 */}
        <div className="text-[11px]" style={{ color: 'var(--txtl)' }}>
          {days !== null
            ? <><span className="font-bold" style={{ color: 'var(--gold)' }}>{days}</span> dias restantes</>
            : '…'}
        </div>
      </div>
    </aside>
  )
}
