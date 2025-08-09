"use client"

import type React from "react"

import { useRef, type ReactNode } from "react"
import { cn } from "@/lib/utils"

interface TiltCardProps {
  children: ReactNode
  className?: string
  maxTilt?: number // degrees
  scale?: number
  glare?: boolean
}

export default function TiltCard({ children, className, maxTilt = 8, scale = 1.02, glare = true }: TiltCardProps) {
  const ref = useRef<HTMLDivElement>(null)

  // Removed tilt animation handlers
  const handleMove = (e: React.MouseEvent) => {
    // Animation removed
  }

  const handleLeave = () => {
    // Animation removed
  }

  return (
    <div className="relative">
      <div
        ref={ref}
        className={cn("relative", className)}
      >
        {children}
      </div>
    </div>
  )
}
