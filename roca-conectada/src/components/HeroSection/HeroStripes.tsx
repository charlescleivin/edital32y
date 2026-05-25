'use client'

import { useEffect, useLayoutEffect, useRef, useState } from 'react'
import { useLoaderDone } from '@/context/LoaderContext'

const IMAGES = [
  { src: '/bg1.jpg', pos: 'center 42%'  },  // Caatinga — mandacaru centered
  { src: '/bg3.jpg', pos: '35% 55%'     },  // Milho seco — stalks left of center
  { src: '/bg2.jpg', pos: '55% 45%'     },  // Caprinocultura — animals right-center
  { src: '/bg4.jpg', pos: '65% 30%'     },  // Mulheres agricultoras — chapéu de palha right-of-center
  { src: '/bg5.jpg', pos: 'center 50%'  },  // Smartphone no roçado — hand centered
  { src: '/bg6.jpg', pos: '30% 40%'     },  // Feira livre — stalls left-focus
]

// ms between each new strip — linear, equal spacing
const STEP_MS = 620

export default function HeroStripes() {
  const [visible, setVisible] = useState(1)
  const loaderDone = useLoaderDone()
  // Track previous count so we can detect genuine additions vs resets
  const prevVisible = useRef(1)

  useLayoutEffect(() => {
    prevVisible.current = visible
  }, [visible])

  useEffect(() => {
    if (!loaderDone) return  // hold until the loader curtain lifts

    const timers: ReturnType<typeof setTimeout>[] = []
    const add = (fn: () => void, ms: number) => {
      const id = setTimeout(fn, ms)
      timers.push(id)
    }

    // idx = how many images are currently shown (mirrors `visible` state)
    let idx = 1

    const addNext = () => {
      if (idx >= IMAGES.length) return  // all strips revealed — stay

      add(() => {
        idx++
        setVisible(idx)
        addNext()
      }, STEP_MS)
    }

    // Small initial pause so the first image settles before the sequence begins
    add(addNext, 300)
    return () => timers.forEach(clearTimeout)
  }, [loaderDone])  // starts when loader signals done, never re-runs after that

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
