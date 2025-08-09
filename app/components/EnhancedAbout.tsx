"use client"

import { useEffect, useState } from "react"
import AnimateOnScroll from "./AnimateOnScroll"
import TypewriterText from "./TypewriterText"
import {
  Github,
  Instagram,
  Linkedin,
  MessageCircle,
  Download,
  Play,
  Square,
  RotateCcw,
  Code,
  Database,
  Zap,
  Monitor,
  Terminal,
} from "lucide-react"

export default function EnhancedAbout() {
  const [consoleLines, setConsoleLines] = useState<string[]>([])
  const [isRunning, setIsRunning] = useState(false)
  const [activeTab, setActiveTab] = useState("profile")
  const [systemStats, setSystemStats] = useState({
    uptime: "0d 0h 0m",
    processes: 42,
    memory: "8.2GB / 16GB",
    network: "Connected",
  })

  const bioText =
    "Innovative and impact-driven software developer with a solid foundation in full-stack web development, machine learning, and data analysis. Proven ability to build AI-powered tools and predictive models, such as Instagram growth optimization engines and rainfall forecasting systems. Adept at delivering high-performance solutions that improve user engagement and operational efficiency. Excels in cross-functional collaboration, user-focused design, and building scalable systems using modern technologies."

  useEffect(() => {
    const initConsole = () => {
      const lines = [
        "$ system_boot --user=abhijit_arote",
        "Initializing developer profile...",
        "Loading skill modules... ████████████ 100%",
        "Connecting to GitHub repositories... ✓",
        "Syncing project database... ✓",
        "",
        "$ whoami",
        "abhijit-arote",
        "Role: Full-Stack Developer | Data Analyst | AI Enthusiast",
        "Location: Pune, Maharashtra, India",
        "Status: Available for opportunities",
        "",
        "$ ls -la ~/skills/",
        "drwxr-xr-x  frontend/     [React, Next.js, TypeScript]",
        "drwxr-xr-x  backend/      [Node.js, Python, Java]",
        "drwxr-xr-x  data-science/ [Pandas, NumPy, ML Models]",
        "drwxr-xr-x  tools/        [Git, Docker, AWS]",
        "",
        "$ echo 'Ready to build the future, one line at a time!'",
        "Ready to build the future, one line at a time!",
        "",
        "$ _",
      ]

      let index = 0
      const timer = setInterval(() => {
        if (index < lines.length) {
          setConsoleLines((prev) => [...prev, lines[index]])
          index++
        } else {
          clearInterval(timer)
          setIsRunning(false)
        }
      }, 200)

      return () => clearInterval(timer)
    }

    setIsRunning(true)
    const cleanup = initConsole()

    // Update system stats
    const statsInterval = setInterval(() => {
      const now = new Date()
      const uptime = Math.floor(now.getTime() / 1000 / 60) // minutes
      setSystemStats({
        uptime: `${Math.floor(uptime / 1440)}d ${Math.floor((uptime % 1440) / 60)}h ${uptime % 60}m`,
        processes: 40 + Math.floor(Math.random() * 10),
        memory: `${(7.5 + Math.random() * 1.5).toFixed(1)}GB / 16GB`,
        network: "Connected",
      })
    }, 5000)

    return () => {
      cleanup()
      clearInterval(statsInterval)
    }
  }, [])

  const socialLinks = [
    {
      icon: Github,
      href: "https://github.com/Abhijit788",
      label: "GitHub",
      color: "syntax-variable",
      description: "Source code & projects",
    },
    {
      icon: Linkedin,
      href: "https://www.linkedin.com/in/abhijit-arote-aa9060246",
      label: "LinkedIn",
      color: "syntax-keyword",
      description: "Professional network",
    },
    {
      icon: Instagram,
      href: "https://www.instagram.com/artistic_sneek/",
      label: "Instagram",
      color: "syntax-string",
      description: "Creative portfolio",
    },
    {
      icon: MessageCircle,
      href: "https://discord.com/users/abhijitarote",
      label: "Discord",
      color: "syntax-function",
      description: "Real-time chat",
    },
  ]

  const tabs = [
    { id: "profile", label: "Profile.js", icon: Code },
    { id: "stats", label: "Stats.json", icon: Database },
    { id: "social", label: "Social.tsx", icon: Zap },
  ]

  return (
    <section id="about" className="relative min-h-screen flex flex-col justify-center py-20 overflow-hidden">
      {/* Enhanced Background Grid */}
      <div className="absolute inset-0 code-grid opacity-30"></div>
      <div className="absolute inset-0">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-blue-500/5 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-purple-500/5 rounded-full blur-3xl animate-pulse delay-1000"></div>
      </div>

      {/* Hero Branding Section */}
      <div className="container mx-auto px-4 max-w-4xl relative z-10 text-center mb-12 md:mb-20">
        <AnimateOnScroll animation="fadeIn">
          <div className="space-y-6 md:space-y-8">
            {/* Main Brand Identity */}
            <div className="space-y-4 md:space-y-6">
              <div className="flex flex-col sm:flex-row items-center justify-center">
                <div className="ide-window p-3 md:p-4 relative overflow-hidden mb-4 sm:mb-0 sm:mr-6">
                  <Terminal className="h-8 w-8 md:h-10 md:w-10 text-blue-400 relative z-10" />
                  <div className="absolute inset-0 bg-gradient-to-r from-blue-500/20 to-purple-500/20 animate-pulse"></div>
                </div>
                <div className="text-center sm:text-left">
                  <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-7xl font-bold syntax-function mb-2">
                    <TypewriterText text="abhijit.dev" speed={120} />
                  </h1>
                  <div className="text-sm sm:text-lg md:text-xl lg:text-2xl syntax-comment">
                    <TypewriterText
                      text="// Full-Stack Developer | Data Analyst | AI Enthusiast"
                      speed={60}
                      delay={2000}
                    />
                  </div>
                </div>
              </div>

              {/* Status and Availability */}
              <div className="flex flex-col sm:flex-row items-center justify-center gap-4 md:gap-6">
                <div className="status-indicator">
                  <div className="status-dot online animate-pulse"></div>
                  <span className="text-sm md:text-lg">Available for opportunities</span>
                </div>
                <div className="text-sm md:text-lg syntax-comment">
                  <TypewriterText text="Ready to build the future" speed={80} delay={4000} />
                </div>
              </div>
            </div>

            {/* Quick Navigation Buttons */}
            <div className="grid grid-cols-2 sm:flex sm:flex-wrap items-center justify-center gap-3 md:gap-4 pt-6 md:pt-8">
              {[
                { name: "About Me", path: "about", color: "syntax-keyword", onClick: undefined },
                { name: "Projects", path: "projects", color: "syntax-function", onClick: undefined },
                { name: "Blog Posts", path: "blog", color: "syntax-string", onClick: undefined },
                { name: "Social", path: "about", onClick: () => setActiveTab("social"), color: "syntax-variable" },
              ].map((item) => (
                <a
                  key={item.name}
                  href={`#${item.path}`}
                  onClick={(e) => {
                    if (item.onClick) {
                      e.preventDefault();
                      item.onClick();
                    }
                  }}
                  className={`code-button px-4 py-3 md:px-8 md:py-4 text-sm md:text-lg ${item.color} hover-highlight group relative overflow-hidden transition-all duration-300 hover:scale-105 w-full sm:w-auto text-center`}
                >
                  <div className="absolute inset-0 bg-gradient-to-r from-transparent via-current/10 to-transparent translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-700"></div>
                  <span className="relative z-10">{item.name}</span>
                </a>
              ))}
            </div>
          </div>
        </AnimateOnScroll>
      </div>

      {/* Main Content Grid - Enhanced for mobile */}
      <div className="container mx-auto px-4 max-w-7xl relative z-10">
        <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-start">
          {/* Enhanced IDE Panel */}
          <AnimateOnScroll animation="slideUp" className="order-2 lg:order-1">
            <div className="ide-window">
              <div className="ide-titlebar">
                <div className="ide-controls">
                  <div className="ide-control close"></div>
                  <div className="ide-control minimize"></div>
                  <div className="ide-control maximize"></div>
                </div>
                <div className="flex-1 flex overflow-x-auto">
                  {tabs.map((tab) => (
                    <button
                      key={tab.id}
                      onClick={() => setActiveTab(tab.id)}
                      className={`ide-tab flex items-center space-x-1 md:space-x-2 flex-shrink-0 ${activeTab === tab.id ? "active" : ""}`}
                    >
                      <tab.icon className="h-3 w-3" />
                      <span className="text-xs hidden sm:inline">{tab.label}</span>
                    </button>
                  ))}
                </div>
              </div>

              <div className="p-4 md:p-6 space-y-4 md:space-y-6">
                {/* Profile Tab - Mobile optimized */}
                {activeTab === "profile" && (
                  <div className="space-y-4 md:space-y-6 animate-in fade-in duration-500">
                    <div className="code-block" data-language="javascript">
                      <div className="line-numbers">
                        {Array.from({ length: 18 }, (_, i) => (
                          <div key={i}>{i + 1}</div>
                        ))}
                      </div>
                      <div className="code-content text-xs md:text-sm">
                        <div className="syntax-comment">// Developer Profile Configuration</div>
                        <div>
                          <span className="syntax-keyword">const</span>{" "}
                          <span className="syntax-variable">developer</span> <span className="syntax-operator">=</span>{" "}
                          <span className="syntax-operator">{"{"}</span>
                        </div>
                        <div className="ml-4">
                          <span className="syntax-variable">name</span>
                          <span className="syntax-operator">:</span>{" "}
                          <span className="syntax-string">"Abhijit Arote"</span>
                          <span className="syntax-operator">,</span>
                        </div>
                        <div className="ml-4">
                          <span className="syntax-variable">title</span>
                          <span className="syntax-operator">:</span>{" "}
                          <span className="syntax-string">"Full-Stack Developer"</span>
                          <span className="syntax-operator">,</span>
                        </div>
                        <div className="ml-4">
                          <span className="syntax-variable">specialties</span>
                          <span className="syntax-operator">:</span> <span className="syntax-operator">[</span>
                        </div>
                        <div className="ml-8">
                          <span className="syntax-string">"Web Development"</span>
                          <span className="syntax-operator">,</span>
                        </div>
                        <div className="ml-8">
                          <span className="syntax-string">"Data Analysis"</span>
                          <span className="syntax-operator">,</span>
                        </div>
                        <div className="ml-8">
                          <span className="syntax-string">"AI/ML Engineering"</span>
                        </div>
                        <div className="ml-4">
                          <span className="syntax-operator">],</span>
                        </div>
                        <div className="ml-4">
                          <span className="syntax-variable">location</span>
                          <span className="syntax-operator">:</span>{" "}
                          <span className="syntax-string">"Pune, Maharashtra"</span>
                          <span className="syntax-operator">,</span>
                        </div>
                        <div className="ml-4">
                          <span className="syntax-variable">experience</span>
                          <span className="syntax-operator">:</span> <span className="syntax-number">3</span>
                          <span className="syntax-operator">,</span> <span className="syntax-comment">// years</span>
                        </div>
                        <div className="ml-4">
                          <span className="syntax-variable">passion</span>
                          <span className="syntax-operator">:</span>{" "}
                          <span className="syntax-string">"Building innovative solutions"</span>
                          <span className="syntax-operator">,</span>
                        </div>
                        <div className="ml-4">
                          <span className="syntax-variable">availability</span>
                          <span className="syntax-operator">:</span> <span className="syntax-keyword">true</span>
                        </div>
                        <div>
                          <span className="syntax-operator">{"}"}</span>
                          <span className="syntax-operator">;</span>
                        </div>
                      </div>
                    </div>

                    <div className="space-y-3">
                      <h3 className="text-sm font-semibold syntax-comment">// Bio description</h3>
                      <div className="p-3 md:p-4 bg-black/30 rounded border border-gray-700">
                        <TypewriterText
                          text={bioText}
                          speed={20}
                          className="text-xs md:text-sm syntax-string leading-relaxed"
                        />
                      </div>
                    </div>
                  </div>
                )}

                {/* Stats Tab */}
                {activeTab === "stats" && (
                  <div className="space-y-6 animate-in fade-in duration-500">
                    <div className="code-block" data-language="json">
                      <div className="line-numbers">
                        {Array.from({ length: 12 }, (_, i) => (
                          <div key={i}>{i + 1}</div>
                        ))}
                      </div>
                      <div className="code-content">
                        <div>
                          <span className="syntax-operator">{"{"}</span>
                        </div>
                        <div className="ml-4">
                          <span className="syntax-string">"system_uptime"</span>
                          <span className="syntax-operator">:</span>{" "}
                          <span className="syntax-string">"{systemStats.uptime}"</span>
                          <span className="syntax-operator">,</span>
                        </div>
                        <div className="ml-4">
                          <span className="syntax-string">"active_processes"</span>
                          <span className="syntax-operator">:</span>{" "}
                          <span className="syntax-number">{systemStats.processes}</span>
                          <span className="syntax-operator">,</span>
                        </div>
                        <div className="ml-4">
                          <span className="syntax-string">"memory_usage"</span>
                          <span className="syntax-operator">:</span>{" "}
                          <span className="syntax-string">"{systemStats.memory}"</span>
                          <span className="syntax-operator">,</span>
                        </div>
                        <div className="ml-4">
                          <span className="syntax-string">"network_status"</span>
                          <span className="syntax-operator">:</span>{" "}
                          <span className="syntax-string">"{systemStats.network}"</span>
                          <span className="syntax-operator">,</span>
                        </div>
                        <div className="ml-4">
                          <span className="syntax-string">"projects_completed"</span>
                          <span className="syntax-operator">:</span> <span className="syntax-number">15</span>
                          <span className="syntax-operator">,</span>
                        </div>
                        <div className="ml-4">
                          <span className="syntax-string">"technologies_mastered"</span>
                          <span className="syntax-operator">:</span> <span className="syntax-number">20</span>
                          <span className="syntax-operator">,</span>
                        </div>
                        <div className="ml-4">
                          <span className="syntax-string">"coffee_consumed"</span>
                          <span className="syntax-operator">:</span> <span className="syntax-string">"∞"</span>
                        </div>
                        <div>
                          <span className="syntax-operator">{"}"}</span>
                        </div>
                      </div>
                    </div>
                  </div>
                )}

                {/* Social Tab - Mobile grid layout */}
                {activeTab === "social" && (
                  <div className="space-y-4 md:space-y-6 animate-in fade-in duration-500">
                    <div className="grid grid-cols-1 gap-3 md:gap-4">
                      {socialLinks.map(({ icon: Icon, href, label, color, description }) => (
                        <a
                          key={label}
                          href={href}
                          target="_blank"
                          rel="noopener noreferrer"
                          className={`code-button flex items-center space-x-3 ${color} hover-highlight group relative overflow-hidden`}
                        >
                          <div className="absolute inset-0 bg-gradient-to-r from-transparent via-current/10 to-transparent translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-700"></div>
                          <Icon className="h-4 w-4 md:h-5 md:w-5 relative z-10 flex-shrink-0" />
                          <div className="flex-1 text-left relative z-10 min-w-0">
                            <div className="font-semibold text-sm md:text-base truncate">{label}</div>
                            <div className="text-xs opacity-70 truncate">{description}</div>
                          </div>
                          <span className="text-xs opacity-50 relative z-10 flex-shrink-0">→</span>
                        </a>
                      ))}
                    </div>
                  </div>
                )}

                {/* Download Resume - Full width on mobile */}
                <div className="pt-4 border-t border-gray-700">
                  <a
                    href="https://drive.google.com/uc?export=download&id=1aECwDrMUt7eoFd6qFOqIgo3k5pLvymlB"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="code-button w-full flex items-center justify-center space-x-2 syntax-function group relative overflow-hidden"
                  >
                    <div className="absolute inset-0 bg-gradient-to-r from-transparent via-current/10 to-transparent translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-700"></div>
                    <Download className="h-4 w-4 relative z-10" />
                    <span className="relative z-10 text-sm md:text-base">downloadResume()</span>
                  </a>
                </div>
              </div>
            </div>
          </AnimateOnScroll>

          {/* Enhanced Terminal Panel - Mobile optimized */}
          <AnimateOnScroll animation="fadeIn" className="order-1 lg:order-2">
            <div className="space-y-4 md:space-y-6">
              {/* Main Terminal */}
              <div className="console-window">
                <div className="console-header flex items-center justify-between">
                  <div className="flex items-center space-x-2 min-w-0">
                    <Terminal className="h-3 w-3 md:h-4 md:w-4 flex-shrink-0" />
                    <span className="text-xs md:text-sm truncate">Developer Terminal</span>
                    <div className="status-indicator hidden sm:flex">
                      <div className={`status-dot ${isRunning ? "busy" : "online"}`}></div>
                      <span className="text-xs">{isRunning ? "Running" : "Ready"}</span>
                    </div>
                  </div>
                  <div className="flex items-center space-x-2 flex-shrink-0">
                    <button className="text-xs hover:text-white transition-colors">
                      <RotateCcw className="h-3 w-3" />
                    </button>
                    <button className="text-xs hover:text-white transition-colors">
                      {isRunning ? <Square className="h-3 w-3" /> : <Play className="h-3 w-3" />}
                    </button>
                  </div>
                </div>
                <div className="console-content min-h-[300px] md:min-h-[400px]">
                  {consoleLines.map((line, index) => (
                    <div key={index} className="console-line animate-in fade-in duration-200 text-xs md:text-sm">
                      {line && line.startsWith("$") ? (
                        <span className="console-prompt">
                          <span className="syntax-comment">user@portfolio:~</span>{" "}
                          <span className="console-command">{line}</span>
                        </span>
                      ) : line && line.includes("✓") ? (
                        <span className="console-success">{line}</span>
                      ) : line && line.includes("████") ? (
                        <span className="syntax-keyword">{line}</span>
                      ) : line && line.startsWith("drwx") ? (
                        <span className="syntax-variable">{line}</span>
                      ) : line === "" ? (
                        <br />
                      ) : (
                        <span className="console-output">{line}</span>
                      )}
                    </div>
                  ))}
                  {isRunning && (
                    <div className="console-line">
                      <span className="console-prompt">
                        <span className="syntax-comment">user@portfolio:~</span>{" "}
                        <span className="typewriter-cursor"></span>
                      </span>
                    </div>
                  )}
                </div>
              </div>

              {/* System Monitor - Responsive grid */}
              <div className="debug-panel">
                <div className="debug-header flex items-center space-x-2">
                  <Monitor className="h-3 w-3 md:h-4 md:w-4" />
                  <span className="text-xs md:text-sm">System Monitor</span>
                </div>
                <div className="debug-content">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 md:gap-4">
                    <div className="debug-line">
                      <span className="debug-level info text-xs">[UPTIME]</span>
                      <span className="text-xs md:text-sm">{systemStats.uptime}</span>
                    </div>
                    <div className="debug-line">
                      <span className="debug-level info text-xs">[PROC]</span>
                      <span className="text-xs md:text-sm">{systemStats.processes}</span>
                    </div>
                    <div className="debug-line">
                      <span className="debug-level info text-xs">[MEM]</span>
                      <span className="text-xs md:text-sm">{systemStats.memory}</span>
                    </div>
                    <div className="debug-line">
                      <span className="debug-level info text-xs">[NET]</span>
                      <span className="text-xs md:text-sm">{systemStats.network}</span>
                    </div>
                  </div>
                </div>
              </div>

              {/* Performance Metrics */}
              <div className="debug-panel">
                <div className="debug-header">Performance Metrics</div>
                <div className="debug-content space-y-3">
                  <div className="debug-line">
                    <span className="debug-timestamp">12:34:56</span>
                    <span className="debug-level info">[INFO]</span>
                    <span>Profile loaded successfully</span>
                  </div>
                  <div className="debug-line">
                    <span className="debug-timestamp">12:34:57</span>
                    <span className="debug-level info">[INFO]</span>
                    <span>Social links initialized</span>
                  </div>
                  <div className="debug-line">
                    <span className="debug-timestamp">12:34:58</span>
                    <span className="debug-level info">[INFO]</span>
                    <span>Resume download ready</span>
                  </div>
                  <div className="debug-line">
                    <span className="debug-timestamp">12:34:59</span>
                    <span className="debug-level info">[SUCCESS]</span>
                    <span>All systems operational</span>
                  </div>
                </div>
              </div>
            </div>
          </AnimateOnScroll>
        </div>
      </div>
    </section>
  )
}
