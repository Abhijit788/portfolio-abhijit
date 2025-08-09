"use client"

import { useEffect, useState } from "react"
import { Menu, X, Folder, FileText, Settings, Terminal, Cpu, Wifi, Battery } from "lucide-react"
import TypewriterText from "./TypewriterText"

export default function EnhancedHeader() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)
  const [currentTime, setCurrentTime] = useState("")
  const [cpuUsage, setCpuUsage] = useState(0)

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50)
    }

    const updateTime = () => {
      const now = new Date()
      setCurrentTime(now.toLocaleTimeString("en-US", { hour12: false }))
    }

    const updateCpuUsage = () => {
      setCpuUsage(Math.floor(Math.random() * 30) + 10)
    }

    window.addEventListener("scroll", handleScroll)
    updateTime()
    updateCpuUsage()

    const timeInterval = setInterval(updateTime, 1000)
    const cpuInterval = setInterval(updateCpuUsage, 3000)

    return () => {
      window.removeEventListener("scroll", handleScroll)
      clearInterval(timeInterval)
      clearInterval(cpuInterval)
    }
  }, [])

  const handleNavClick = (path: string) => {
    const element = document.getElementById(path)
    if (element) {
      element.scrollIntoView({
        behavior: "smooth",
      })
    }
    setIsMenuOpen(false)
  }

  const navItems = [
    { name: "About", icon: FileText, path: "about", color: "syntax-keyword" },
    { name: "Projects", icon: Folder, path: "projects", color: "syntax-function" },
    { name: "Experience", icon: Terminal, path: "experience", color: "syntax-string" },
    { name: "Education", icon: FileText, path: "education", color: "syntax-variable" },
    { name: "Blog", icon: FileText, path: "blog", color: "syntax-comment" },
    { name: "Contact", icon: Settings, path: "contact", color: "syntax-operator" },
  ]

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
          scrolled ? "ide-window shadow-2xl backdrop-blur-md" : "bg-transparent"
        }`}
      >
        {/* System Status Bar */}
        {scrolled && (
          <div className="bg-gray-900 border-b border-gray-700 px-4 py-1" suppressHydrationWarning>
            <div className="flex items-center justify-between text-xs" suppressHydrationWarning>
              <div className="flex items-center space-x-4" suppressHydrationWarning>
                <div className="flex items-center space-x-1" suppressHydrationWarning>
                  <Cpu className="h-3 w-3 syntax-keyword" />
                  <span className="syntax-comment">CPU: {cpuUsage}%</span>
                </div>
                <div className="flex items-center space-x-1" suppressHydrationWarning>
                  <Wifi className="h-3 w-3 syntax-function" />
                  <span className="syntax-comment">Connected</span>
                </div>
              </div>
              <div className="flex items-center space-x-4" suppressHydrationWarning>
                <span className="syntax-variable">{currentTime}</span>
                <div className="flex items-center space-x-1" suppressHydrationWarning>
                  <Battery className="h-3 w-3 syntax-string" />
                  <span className="syntax-comment">100%</span>
                </div>
              </div>
            </div>
          </div>
        )}

        <nav className="container mx-auto px-4">
          {scrolled && (
            <div className="ide-titlebar">
              <div className="ide-controls">
                <div className="ide-control close"></div>
                <div className="ide-control minimize"></div>
                <div className="ide-control maximize"></div>
              </div>
              <div className="flex-1 flex items-center justify-center">
                <TypewriterText text="portfolio.dev - Visual Studio Code" speed={50} className="text-sm" />
              </div>
            </div>
          )}

          <div className="flex items-center justify-between py-3 md:py-4 relative" suppressHydrationWarning>
            {/* Mobile menu button - positioned on the left */}
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="md:hidden code-button p-2 relative overflow-hidden z-10 flex-shrink-0"
              aria-label="Toggle menu"
            >
              <div className="absolute inset-0 bg-gradient-to-r from-transparent via-blue-500/20 to-transparent translate-x-[-100%] hover:translate-x-[100%] transition-transform duration-700" suppressHydrationWarning></div>
              {isMenuOpen ? <X className="h-4 w-4 relative z-10" /> : <Menu className="h-4 w-4 relative z-10" />}
            </button>

            {/* Desktop navigation - centered */}
            <div className="hidden md:flex items-center justify-center flex-1" suppressHydrationWarning>
              <div className="flex items-center space-x-1 overflow-x-auto" suppressHydrationWarning>
                {navItems.map((item, index) => (
                  <button
                    key={item.name}
                    onClick={() => handleNavClick(item.path)}
                    className={`ide-tab flex items-center space-x-2 px-2 lg:px-3 py-2 hover:bg-gray-700 transition-all duration-300 group relative overflow-hidden ${item.color} whitespace-nowrap cursor-pointer flex-shrink-0`}
                  >
                    <div className="absolute inset-0 bg-gradient-to-r from-transparent via-current/10 to-transparent translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-500" suppressHydrationWarning></div>
                    <item.icon className="h-3 w-3 lg:h-4 lg:w-4 relative z-10 flex-shrink-0" />
                    <span className="text-xs lg:text-sm relative z-10 hidden sm:inline">{item.name}</span>
                    <span className="text-xs opacity-50 relative z-10 hidden lg:inline">.tsx</span>
                  </button>
                ))}
              </div>
            </div>

            {/* Mobile spacer to center the navigation visually */}
            <div className="md:hidden w-10 flex-shrink-0" suppressHydrationWarning></div>
          </div>

          {/* Enhanced Mobile navigation */}
          {isMenuOpen && (
            <div className="md:hidden mb-4 animate-in slide-in-from-top duration-300">
              <div className="file-explorer">
                <div className="p-3 border-b border-gray-700">
                  <TypewriterText text="Navigation Menu" speed={80} className="text-sm syntax-function" />
                </div>
                <div className="max-h-64 overflow-y-auto">
                  {navItems.map((item, index) => (
                    <button
                      key={item.name}
                      onClick={() => handleNavClick(item.path)}
                      className={`file-item group relative overflow-hidden ${item.color} w-full text-left`}
                      style={{ animationDelay: `${index * 100}ms` }}
                    >
                      <div className="absolute inset-0 bg-gradient-to-r from-transparent via-current/10 to-transparent translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-500" suppressHydrationWarning></div>
                      <div className="file-icon relative z-10">
                        <item.icon className="h-4 w-4" />
                      </div>
                      <span className="relative z-10">{item.name}.tsx</span>
                      <span className="text-xs opacity-50 ml-auto relative z-10">
                        {index < 10 ? `0${index + 1}` : index + 1}
                      </span>
                    </button>
                  ))}
                </div>
              </div>
            </div>
          )}
        </nav>
      </header>

      {/* Spacer for fixed header */}
      <div className={`transition-all duration-500 ${scrolled ? "h-24" : "h-16"}`}></div>
    </>
  )
}
