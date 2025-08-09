"use client"

import { useEffect, useRef } from "react"

export default function SpotlightCursor() {
  const ref = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const el = ref.current
    if (!el) return
    const onMove = (e: MouseEvent) => {
      const x = e.clientX
      const y = e.clientY
      el.style.setProperty("--x", `${x}px`)
      el.style.setProperty("--y", `${y}px`)
    }
    window.addEventListener("mousemove", onMove, { passive: true })
    return () => window.removeEventListener("mousemove", onMove)
  }, [])

  return (
    <div
      ref={ref}
      aria-hidden="true"
      className="pointer-events-none fixed inset-0 z-10"
      style={{
        background: "radial-gradient(400px circle at var(--x) var(--y), rgba(88,166,255,0.10), transparent 60%)",
        mixBlendMode: "screen",
      }}
      suppressHydrationWarning
    />
  )
}
