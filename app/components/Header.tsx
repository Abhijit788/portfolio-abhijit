"use client"

import { useEffect, useState } from "react"
import Link from "next/link"
import { Menu, X, Folder, FileText, Settings, Terminal } from "lucide-react"
import ThemeToggle from "./ThemeToggle"

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50)
    }

    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  useEffect(() => {
    const smoothScroll = (e: Event) => {
      e.preventDefault()
      const target = e.target as HTMLAnchorElement
      const id = target.getAttribute("href")?.slice(1)
      if (id) {
        const element = document.getElementById(id)
        if (element) {
          element.scrollIntoView({
            behavior: "smooth",
          })
        }
      }
      setIsMenuOpen(false)
    }

    const links = document.querySelectorAll('nav a[href^="#"]')
    links.forEach((link) => {
      link.addEventListener("click", smoothScroll)
    })

    return () => {
      links.forEach((link) => {
        link.removeEventListener("click", smoothScroll)
      })
    }
  }, [])

  const navItems = [
    { name: "About", icon: FileText, path: "about" },
    { name: "Projects", icon: Folder, path: "projects" },
    { name: "Experience", icon: Terminal, path: "experience" },
    { name: "Education", icon: FileText, path: "education" },
    { name: "Blog", icon: FileText, path: "blog" },
    { name: "Contact", icon: Settings, path: "contact" },
  ]

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled ? "ide-window shadow-lg" : "bg-transparent"
      }`}
    >
      <nav className="container mx-auto px-4">
        {scrolled && (
          <div className="ide-titlebar">
            <div className="ide-controls">
              <div className="ide-control close"></div>
              <div className="ide-control minimize"></div>
              <div className="ide-control maximize"></div>
            </div>
            <div className="flex-1 flex items-center justify-center">
              <span className="text-sm">portfolio.tsx - Visual Studio Code</span>
            </div>
          </div>
        )}

        <div className="flex justify-between items-center py-4">
          {/* Logo/Brand */}
          <div className="flex items-center space-x-3">
            <div className="ide-window p-2">
              <Terminal className="h-6 w-6 text-blue-400" />
            </div>
            <div className="flex flex-col">
              <span className="text-lg font-semibold syntax-function">abhijit.dev</span>
              <span className="text-xs syntax-comment">// Software Engineer</span>
            </div>
          </div>

          {/* Mobile menu button */}
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="md:hidden code-button p-2"
            aria-label="Toggle menu"
          >
            {isMenuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </button>

          {/* Desktop navigation */}
          <div className="hidden md:flex items-center space-x-1">
            {navItems.map((item, index) => (
              <Link
                key={item.name}
                href={`#${item.path}`}
                className="ide-tab flex items-center space-x-2 hover:bg-gray-700 transition-colors"
              >
                <item.icon className="h-4 w-4" />
                <span className="text-sm">{item.name}</span>
              </Link>
            ))}
          </div>

          <div className="flex items-center space-x-3">
            <div className="status-indicator">
              <div className="status-dot online"></div>
              <span>Online</span>
            </div>
            <ThemeToggle />
          </div>
        </div>

        {/* Mobile navigation */}
        {isMenuOpen && (
          <div className="md:hidden mb-4">
            <div className="file-explorer">
              {navItems.map((item) => (
                <Link key={item.name} href={`#${item.path}`} className="file-item">
                  <div className="file-icon">
                    <item.icon className="h-4 w-4" />
                  </div>
                  <span>{item.name}.tsx</span>
                </Link>
              ))}
            </div>
          </div>
        )}
      </nav>
    </header>
  )
}
