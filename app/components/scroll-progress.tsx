"use client"

import { motion, useScroll, useSpring } from "framer-motion"

export default function ScrollProgress({
  className = "",
}: {
  className?: string
}) {
  const { scrollYProgress } = useScroll()
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 180,
    damping: 14,
    mass: 0.18,
  })

  return (
    <motion.div
      aria-hidden="true"
      style={{ scaleX }}
      className={`fixed top-0 left-0 right-0 h-1 origin-left z-[60] bg-gradient-to-r from-purple-500 via-fuchsia-400 to-emerald-400 ${className}`}
      suppressHydrationWarning
    />
  )
}
