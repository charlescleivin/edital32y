'use client'

import { useEffect, useLayoutEffect, useRef, useState } from 'react'
import { useLoaderDone } from '@/context/LoaderContext'

const IMAGES_DESKTOP = [
  { src: '/bg1.jpg', pos: 'center 42%'  },  // Caatinga — mandacaru centered
  { src: '/bg3.jpg', pos: '35% 55%'     },  // Milho seco — stalks left of center
  { src: '/bg2.jpg', pos: '55% 45%'     },  // Caprinocultura — animals right-center
  { src: '/bg4.jpg', pos: '65% 30%'     },  // Mulheres agricultoras — chapéu de palha right-of-center
  { src: '/bg5.jpg', pos: 'center 50%'  },  // Smartphone no roçado — hand centered
  { src: '/bg6.jpg', pos: '30% 40%'     },  // Feira livre — stalls left-focus
]

// 3-strip mobile set: land → people → technology — each panel ~33% wide
const IMAGES_MOBILE = [
  { src: '/bg1.jpg', pos: 'center 42%'  },  // Caatinga — the land
  { src: '/bg4.jpg', pos: '60% 30%'     },  // Mulheres agricultoras — the people
  { src: '/bg5.jpg', pos: 'center 50%'  },  // Smartphone no roçado — the technology
]

const STEP_MS_DESKTOP = 620
const STEP_MS_MOBILE  = 780   // slightly slower — each strip occupies more screen

export default function HeroStripes() {
  const [visible, setVisible] = useState(1)
  const [isMobile, setIsMobile] = useState(false)
  const loaderDone = useLoaderDone()
  const prevVisible = useRef(1)

  useEffect(() => {
    const check = () => setIsMobile(window.innerWidth < 768)
    check()
    window.addEventListener('resize', check)
    return () => window.removeEventListener('resize', check)
  }, [])

  useLayoutEffect(() => {
    prevVisible.current = visible
  }, [visible])

  useEffect(() => {
    if (!loaderDone) return

    const IMAGES = isMobile ? IMAGES_MOBILE : IMAGES_DESKTOP
    const STEP_MS = isMobile ? STEP_MS_MOBILE : STEP_MS_DESKTOP

    setVisible(1)

    const timers: ReturnType<typeof setTimeout>[] = []
    const add = (fn: () => void, ms: number) => {
      const id = setTimeout(fn, ms)
      timers.push(id)
    }

    let idx = 1

    const addNext = () => {
      if (idx >= IMAGES.length) return

      add(() => {
        idx++
        setVisible(idx)
        addNext()
      }, STEP_MS)
    }

    add(addNext, 300)
    return () => timers.forEach(clearTimeout)
  }, [loaderDone, isMobile])

  const IMAGES = isMobile ? IMAGES_MOBILE : IMAGES_DESKTOP

  return (
    <div
      className="absolute inset-0 overflow-hidden"
      style={{
        zIndex: 0,
        opacity: 0.55,
      }}
    >
      {IMAGES.slice(0, visible).map(({ src, pos }, i) => {
        // Only play entrance animation on genuine additions (not on reset to 1)
        const isNew = i === visible - 1 && visible > prevVisible.current

        return (
          <div
            key={i}
            className="absolute top-0 bottom-0"
            style={{
              left:  `${(i / visible) * 100}%`,
              width: `${100 / visible}%`,
              overflow: 'hidden',
              transition: 'left 0.42s cubic-bezier(0.22,1,0.36,1), width 0.42s cubic-bezier(0.22,1,0.36,1)',
              // Thin dark line between strips — the "gacha card" separator
              boxShadow: i < visible - 1 ? 'inset -1.5px 0 0 rgba(8,7,6,0.28)' : 'none',
            }}
          >
            {/* Flip-in wrapper for newly added strip */}
            <div
              style={{
                width: '100%', height: '100%',
                animation: isNew ? 'hero-stripe-in 0.42s cubic-bezier(0.22,1,0.36,1) both' : 'none',
              }}
            >
              {/* Per-strip edge vignette to reinforce the "card" separation */}
              <div
                aria-hidden
                className="pointer-events-none absolute inset-0"
                style={{
                  zIndex: 1,
                  background: 'linear-gradient(90deg, rgba(8,7,6,0.30) 0%, transparent 16%, transparent 84%, rgba(8,7,6,0.30) 100%)',
                }}
              />
              <img
                src={src}
                alt=""
                draggable={false}
                style={{
                  width: '100%', height: '100%',
                  objectFit: 'cover',
                  objectPosition: pos,
                  display: 'block',
                  userSelect: 'none',
                  pointerEvents: 'none',
                }}
              />
            </div>
          </div>
        )
      })}
    </div>
  )
}
