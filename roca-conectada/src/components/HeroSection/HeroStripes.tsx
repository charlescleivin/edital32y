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

// 3-image mobile crossfade: land → people → technology
const IMAGES_MOBILE = [
  { src: '/bg1.jpg', pos: 'center 42%'  },  // Caatinga — the land
  { src: '/bg4.jpg', pos: '60% 30%'     },  // Mulheres agricultoras — the people
  { src: '/bg5.jpg', pos: 'center 50%'  },  // Smartphone no roçado — the technology
]

// Crossfade cycle: 12s total, 3 images staggered by 4s
// delay[0]=0s, delay[1]=-8s, delay[2]=-4s → one image always visible
const MOBILE_FADE_DELAYS = ['0s', '-8s', '-4s']

const STEP_MS_DESKTOP = 620

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
    if (!loaderDone || isMobile) return

    setVisible(1)

    const timers: ReturnType<typeof setTimeout>[] = []
    const add = (fn: () => void, ms: number) => {
      const id = setTimeout(fn, ms)
      timers.push(id)
    }

    let idx = 1

    const addNext = () => {
      if (idx >= IMAGES_DESKTOP.length) return
      add(() => {
        idx++
        setVisible(idx)
        addNext()
      }, STEP_MS_DESKTOP)
    }

    add(addNext, 300)
    return () => timers.forEach(clearTimeout)
  }, [loaderDone, isMobile])

  // Mobile: pure-CSS crossfade — 3 stacked full-bleed images
  if (isMobile) {
    return (
      <div className="absolute inset-0 overflow-hidden" style={{ zIndex: 0, opacity: 0.55 }}>
        {IMAGES_MOBILE.map(({ src, pos }, i) => (
          <div
            key={i}
            aria-hidden
            style={{
              position: 'absolute', inset: 0,
              backgroundImage: `url(${src})`,
              backgroundSize: 'cover',
              backgroundPosition: pos,
              userSelect: 'none',
              pointerEvents: 'none',
              animationName: 'hero-mobile-fade',
              animationDuration: '12s',
              animationTimingFunction: 'ease-in-out',
              animationIterationCount: 'infinite',
              animationFillMode: 'both',
              animationDelay: MOBILE_FADE_DELAYS[i],
            }}
          />
        ))}
      </div>
    )
  }

  // Desktop: sequential stripe reveal
  return (
    <div
      className="absolute inset-0 overflow-hidden"
      style={{ zIndex: 0, opacity: 0.55 }}
    >
      {IMAGES_DESKTOP.slice(0, visible).map(({ src, pos }, i) => {
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
              boxShadow: i < visible - 1 ? 'inset -1.5px 0 0 rgba(8,7,6,0.28)' : 'none',
            }}
          >
            <div
              style={{
                width: '100%', height: '100%',
                animation: isNew ? 'hero-stripe-in 0.42s cubic-bezier(0.22,1,0.36,1) both' : 'none',
              }}
            >
              <div
                aria-hidden
                className="pointer-events-none absolute inset-0"
                style={{
                  zIndex: 1,
                  background: 'linear-gradient(90deg, rgba(8,7,6,0.30) 0%, transparent 16%, transparent 84%, rgba(8,7,6,0.30) 100%)',
                }}
              />
              <div
                aria-hidden
                style={{
                  position: 'absolute', inset: 0,
                  backgroundImage: `url(${src})`,
                  backgroundSize: 'cover',
                  backgroundPosition: pos,
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
