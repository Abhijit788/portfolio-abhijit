"use client"

import { useState, useEffect } from "react"
import { Sun, Moon } from "lucide-react"
import { useTheme } from "next-themes"

export default function ThemeToggle() {
  const [mounted, setMounted] = useState(false)
  const { theme, setTheme } = useTheme()

  useEffect(() => setMounted(true), [])

  if (!mounted) return null

  const isDark = theme === "dark"

  return (
    <button
      onClick={() => setTheme(isDark ? "light" : "dark")}
      className="w-8 h-8 rounded-full bg-gray-700 hover:bg-gray-600 border border-gray-600 flex items-center justify-center transition-all duration-300 hover:scale-110 relative overflow-hidden group"
      aria-label="Toggle theme"
    >
      <div className="absolute inset-0 bg-gradient-to-r from-transparent via-blue-500/20 to-transparent translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-700 rounded-full"></div>
      {isDark ? (
        <Sun className="h-4 w-4 text-yellow-400 relative z-10" />
      ) : (
        <Moon className="h-4 w-4 text-blue-400 relative z-10" />
      )}
    </button>
  )
}
