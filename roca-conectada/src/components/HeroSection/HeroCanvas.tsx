'use client'

import { useEffect, useRef, useState } from 'react'

// ~175 dots = 5 regional clusters of agricultural families
// Norte, Nordeste, Sudeste, Sul, Centro-Oeste
const N = 175
const CYCLE_MS = 14000   // full narrative cycle
const LINK_PX = 68       // max connection distance
const BUCKETS = 5        // alpha buckets for batched line rendering

interface Dot {
  x: number; y: number         // current position
  vx: number; vy: number       // velocity
  bx: number; by: number       // base position (spring target)
  distFromOrigin: number       // precomputed — stable metric for wave activation
  r: number                    // radius
  ph: number                   // breathing phase offset
}

interface Pulse { x0: number; y0: number; x1: number; y1: number; t: number }

export default function HeroCanvas() {
  const ref = useRef<HTMLCanvasElement>(null)
  const [isMobile, setIsMobile] = useState(false)

  useEffect(() => {
    const check = () => setIsMobile(window.innerWidth < 768)
    check()
    window.addEventListener('resize', check)
    return () => window.removeEventListener('resize', check)
  }, [])

  useEffect(() => {
    if (isMobile) return
    const canvas = ref.current
    if (!canvas) return
    const ctx = canvas.getContext('2d', { alpha: true })!
    let raf = 0
    const t0 = performance.now()
    const dots: Dot[] = []
    const pulses: Pulse[] = []

    // Pre-allocated segment arrays per alpha bucket
    const segs: Array<number[]> = Array.from({ length: BUCKETS }, () => [])

    const setSize = () => {
      const dpr = Math.min(window.devicePixelRatio, 2)
      canvas.width = canvas.clientWidth * dpr
      canvas.height = canvas.clientHeight * dpr
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0)
    }
    setSize()
    const ro = new ResizeObserver(setSize)
    ro.observe(canvas)

    const init = () => {
      dots.length = 0
      const w = canvas.clientWidth, h = canvas.clientHeight
      if (w === 0 || h === 0) return

      // Origin: bottom-left corner — where the project "launches" from
      const ox = w * 0.02, oy = h * 0.98

      const clusters = [
        // cx, cy relative to canvas, spread, count
        { cx: w * 0.30, cy: h * 0.27, s: w * 0.11, n: Math.round(N * 0.17) }, // Norte
        { cx: w * 0.64, cy: h * 0.19, s: w * 0.12, n: Math.round(N * 0.27) }, // Nordeste (largest)
        { cx: w * 0.84, cy: h * 0.51, s: w * 0.09, n: Math.round(N * 0.20) }, // Sudeste
        { cx: w * 0.76, cy: h * 0.77, s: w * 0.08, n: Math.round(N * 0.16) }, // Sul
        { cx: w * 0.50, cy: h * 0.64, s: w * 0.09, n: Math.round(N * 0.20) }, // Centro-Oeste
      ]

      for (const c of clusters) {
        for (let i = 0; i < c.n; i++) {
          const angle = Math.random() * Math.PI * 2
          const dist = Math.sqrt(Math.random()) * c.s  // uniform disk
          const x = c.cx + Math.cos(angle) * dist
          const y = c.cy + Math.sin(angle) * dist
          dots.push({
            x, y, bx: x, by: y,
            vx: (Math.random() - 0.5) * 0.22,
            vy: (Math.random() - 0.5) * 0.22,
            distFromOrigin: Math.hypot(x - ox, y - oy),
            r: 0.8 + Math.random() * 1.3,
            ph: Math.random() * Math.PI * 2,
          })
        }
      }
    }
    init()

    const frame = (now: number) => {
      const w = canvas.clientWidth, h = canvas.clientHeight
      if (w === 0 || h === 0) { raf = requestAnimationFrame(frame); return }

      // Cycle position 0→1
      const t = (now - t0) / CYCLE_MS % 1
      const sec = (now - t0) / 1000

      // Wave front radius — expands from origin, covers full diagonal, then retracts
      // Timeline: 0.00-0.12 = isolated pause
      //           0.12-0.42 = wave expands (network forms)
      //           0.42-0.68 = fully connected (data flows)
      //           0.68-0.87 = wave retracts (network dissolves)
      //           0.87-1.00 = isolated pause
      const maxDist = Math.hypot(w, h) * 1.15
      let waveFront: number
      if (t < 0.12)       waveFront = 0
      else if (t < 0.42)  waveFront = ((t - 0.12) / 0.30) * maxDist
      else if (t < 0.68)  waveFront = maxDist
      else if (t < 0.87)  waveFront = (1 - (t - 0.68) / 0.19) * maxDist
      else                waveFront = 0

      // Smooth envelope 0→1 for global effects (line alpha, pulse rate)
      let env: number
      if (t < 0.12)       env = 0
      else if (t < 0.42)  env = (t - 0.12) / 0.30
      else if (t < 0.68)  env = 1
      else if (t < 0.87)  env = 1 - (t - 0.68) / 0.19
      else                env = 0
      env = env * env * (3 - 2 * env)  // smoothstep

      const link = LINK_PX * Math.min(1, env * 2)  // connections snap in faster than full env
      const link2 = link * link

      ctx.clearRect(0, 0, w, h)

      // Physics — gentle spring drift
      for (const d of dots) {
        d.vx += (d.bx - d.x) * 0.0005
        d.vy += (d.by - d.y) * 0.0005
        d.vx *= 0.993; d.vy *= 0.993
        d.x += d.vx; d.y += d.vy
      }

      // Signal ring — single expanding ring from origin (bottom-left)
      if (waveFront > 0 && env > 0.05) {
        const ringAlpha = Math.sin((t - 0.12) / 0.30 * Math.PI) * 0.09
        if (ringAlpha > 0.005) {
          ctx.beginPath()
          ctx.arc(w * 0.02, h * 0.98, waveFront * 0.82, 0, Math.PI * 2)
          ctx.strokeStyle = `rgba(200,85,48,${ringAlpha.toFixed(3)})`
          ctx.lineWidth = 1.5
          ctx.stroke()
        }
      }

      // Connections — batched by alpha bucket
      for (const s of segs) s.length = 0
      if (link > 4) {
        for (let i = 0; i < dots.length - 1; i++) {
          const a = dots[i]
          if (a.distFromOrigin > waveFront + LINK_PX) continue  // outside wave, skip
          for (let j = i + 1; j < dots.length; j++) {
            const b = dots[j]
            if (b.distFromOrigin > waveFront + LINK_PX) continue
            const dx = b.x - a.x, dy = b.y - a.y
            const d2 = dx * dx + dy * dy
            if (d2 < link2) {
              const near = 1 - Math.sqrt(d2) / link  // 0-1: closer = higher bucket
              const bi = Math.min(BUCKETS - 1, Math.floor(near * BUCKETS))
              segs[bi].push(a.x, a.y, b.x, b.y)
            }
          }
        }
        ctx.lineWidth = 0.55
        for (let bi = 0; bi < BUCKETS; bi++) {
          const s = segs[bi]
          if (!s.length) continue
          const alpha = ((bi + 1) / BUCKETS) * 0.22 * env
          ctx.strokeStyle = `rgba(200,85,48,${alpha.toFixed(3)})`
          ctx.beginPath()
          for (let k = 0; k < s.length; k += 4) {
            ctx.moveTo(s[k], s[k + 1])
            ctx.lineTo(s[k + 2], s[k + 3])
          }
          ctx.stroke()
        }
      }

      // Gold data pulses — travel along connections during peak phase
      if (env > 0.45 && Math.random() < 0.13) {
        const ai = (Math.random() * dots.length) | 0
        const a = dots[ai]
        if (a.distFromOrigin < waveFront) {
          let best: Dot | null = null, bestD2 = Infinity
          for (let i = 0; i < dots.length; i++) {
            if (i === ai) continue
            const b = dots[i]
            if (b.distFromOrigin > waveFront) continue
            const d2 = (b.x - a.x) ** 2 + (b.y - a.y) ** 2
            if (d2 < link2 && d2 < bestD2 && Math.random() < 0.28) {
              best = b; bestD2 = d2
            }
          }
          if (best) pulses.push({ x0: a.x, y0: a.y, x1: best.x, y1: best.y, t: 0 })
        }
      }
      for (let i = pulses.length - 1; i >= 0; i--) {
        const p = pulses[i]
        p.t += 0.018
        if (p.t > 1) { pulses.splice(i, 1); continue }
        const ease = Math.sin(p.t * Math.PI)
        const px = p.x0 + (p.x1 - p.x0) * p.t
        const py = p.y0 + (p.y1 - p.y0) * p.t
        // Head
        ctx.beginPath()
        ctx.arc(px, py, 2.2, 0, Math.PI * 2)
        ctx.fillStyle = `rgba(212,150,14,${(ease * 0.85 * env).toFixed(3)})`
        ctx.fill()
        // Tail
        const t2 = Math.max(0, p.t - 0.07)
        ctx.beginPath()
        ctx.moveTo(p.x0 + (p.x1 - p.x0) * t2, p.y0 + (p.y1 - p.y0) * t2)
        ctx.lineTo(px, py)
        ctx.strokeStyle = `rgba(212,150,14,${(ease * 0.32 * env).toFixed(3)})`
        ctx.lineWidth = 1
        ctx.stroke()
      }

      // Dots — color and brightness shift based on wave activation
      ctx.save()
      if (env > 0.2) {
        ctx.shadowColor = 'rgba(200,85,48,0.55)'
        ctx.shadowBlur = 4 + env * 7
      }
      for (const d of dots) {
        const activated = d.distFromOrigin < waveFront
        const breathe = (Math.sin(sec * 1.4 + d.ph) + 1) * 0.5  // 0-1
        const r = d.r * (1 + breathe * 0.38)
        let alpha: number, color: string
        if (activated) {
          alpha = 0.38 + breathe * 0.52
          color = `rgba(200,85,48,${alpha.toFixed(3)})`
        } else {
          alpha = 0.07 + breathe * 0.07
          color = `rgba(237,229,211,${alpha.toFixed(3)})`
        }
        ctx.beginPath()
        ctx.arc(d.x, d.y, r, 0, Math.PI * 2)
        ctx.fillStyle = color
        ctx.fill()
      }
      ctx.restore()

      raf = requestAnimationFrame(frame)
    }

    raf = requestAnimationFrame(frame)
    return () => { cancelAnimationFrame(raf); ro.disconnect() }
  }, [])

  return (
    <canvas
      ref={ref}
      className="absolute inset-0 h-full w-full"
      style={{ zIndex: 1, opacity: 0.46 }}
    />
  )
}
