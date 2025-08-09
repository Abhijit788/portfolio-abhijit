"use client"

import { useEffect, useState } from "react"
import AnimateOnScroll from "./AnimateOnScroll"
import TypewriterText from "./TypewriterText"
import { Github, Instagram, Linkedin, MessageCircle, Download, Play, Square, RotateCcw } from "lucide-react"

export default function About() {
  const [consoleLines, setConsoleLines] = useState<string[]>([])
  const [isRunning, setIsRunning] = useState(false)

  const bioText =
    "Innovative and impact-driven software developer with a solid foundation in full-stack web development, machine learning, and data analysis. Proven ability to build AI-powered tools and predictive models, such as Instagram growth optimization engines and rainfall forecasting systems. Adept at delivering high-performance solutions that improve user engagement and operational efficiency. Excels in cross-functional collaboration, user-focused design, and building scalable systems using modern technologies."

  useEffect(() => {
    const initConsole = () => {
      const lines = [
        "$ whoami",
        "abhijit-arote",
        "",
        "$ cat /etc/profile",
        "Name: Abhijit Arote",
        "Role: Software Engineer | Web Dev | Data Analysis",
        "Status: Available for opportunities",
        "Location: Pune, Maharashtra, India",
        "",
        "$ ls -la skills/",
        "drwxr-xr-x  2 abhijit dev  4096 Dec 28 2024 frontend/",
        "drwxr-xr-x  2 abhijit dev  4096 Dec 28 2024 backend/",
        "drwxr-xr-x  2 abhijit dev  4096 Dec 28 2024 data-science/",
        "drwxr-xr-x  2 abhijit dev  4096 Dec 28 2024 tools/",
        "",
        "$ echo 'Ready to collaborate and build amazing things!'",
        "Ready to collaborate and build amazing things!",
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
      }, 300)

      return () => clearInterval(timer)
    }

    setIsRunning(true)
    const cleanup = initConsole()
    return cleanup
  }, [])

  const socialLinks = [
    { icon: Github, href: "https://github.com/Abhijit788", label: "GitHub", color: "syntax-variable" },
    {
      icon: Linkedin,
      href: "https://www.linkedin.com/in/abhijit-arote-aa9060246",
      label: "LinkedIn",
      color: "syntax-keyword",
    },
    { icon: Instagram, href: "https://www.instagram.com/artistic_sneek/", label: "Instagram", color: "syntax-string" },
    { icon: MessageCircle, href: "https://discord.com/users/abhijitarote", label: "Discord", color: "syntax-function" },
  ]

  return (
    <section id="about" className="relative min-h-screen flex items-center justify-center code-grid py-20">
      <div className="container mx-auto px-4 max-w-7xl relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Code Editor Panel */}
          <AnimateOnScroll animation="slideUp" className="order-2 lg:order-1">
            <div className="ide-window">
              <div className="ide-titlebar">
                <div className="ide-controls">
                  <div className="ide-control close"></div>
                  <div className="ide-control minimize"></div>
                  <div className="ide-control maximize"></div>
                </div>
                <div className="flex-1 flex">
                  <div className="ide-tab active">about.tsx</div>
                  <div className="ide-tab">profile.json</div>
                </div>
              </div>

              <div className="p-6 space-y-6">
                {/* Code Block */}
                <div className="code-block" data-language="typescript">
                  <div className="line-numbers">
                    {Array.from({ length: 15 }, (_, i) => (
                      <div key={i}>{i + 1}</div>
                    ))}
                  </div>
                  <div className="code-content">
                    <div>
                      <span className="syntax-keyword">interface</span>{" "}
                      <span className="syntax-function">Developer</span> {"{"}
                    </div>
                    <div className="ml-4">
                      <span className="syntax-variable">name</span>
                      <span className="syntax-operator">:</span> <span className="syntax-string">"Abhijit Arote"</span>
                      <span className="syntax-operator">;</span>
                    </div>
                    <div className="ml-4">
                      <span className="syntax-variable">roles</span>
                      <span className="syntax-operator">:</span>{" "}
                      <span className="syntax-string">["Software Engineer", "Web Dev", "Data Analysis"]</span>
                      <span className="syntax-operator">;</span>
                    </div>
                    <div className="ml-4">
                      <span className="syntax-variable">location</span>
                      <span className="syntax-operator">:</span>{" "}
                      <span className="syntax-string">"Pune, Maharashtra"</span>
                      <span className="syntax-operator">;</span>
                    </div>
                    <div className="ml-4">
                      <span className="syntax-variable">experience</span>
                      <span className="syntax-operator">:</span> <span className="syntax-number">3</span>
                      <span className="syntax-operator">;</span> <span className="syntax-comment">// years</span>
                    </div>
                    <div className="ml-4">
                      <span className="syntax-variable">passion</span>
                      <span className="syntax-operator">:</span>{" "}
                      <span className="syntax-string">"Building innovative solutions"</span>
                      <span className="syntax-operator">;</span>
                    </div>
                    <div className="ml-4">
                      <span className="syntax-variable">currentStatus</span>
                      <span className="syntax-operator">:</span> <span className="syntax-string">"Available"</span>
                      <span className="syntax-operator">;</span>
                    </div>
                    <div>{"}"}</div>
                    <div className="mt-4">
                      <span className="syntax-comment">// Bio description</span>
                    </div>
                    <div>
                      <span className="syntax-keyword">const</span> <span className="syntax-variable">bio</span>{" "}
                      <span className="syntax-operator">=</span> <span className="syntax-string">`</span>
                    </div>
                    <div className="ml-4 text-sm leading-relaxed">
                      <TypewriterText text={bioText} speed={30} className="syntax-string" />
                    </div>
                    <div>
                      <span className="syntax-string">`</span>
                      <span className="syntax-operator">;</span>
                    </div>
                  </div>
                </div>

                {/* Social Links */}
                <div className="space-y-3">
                  <h3 className="text-sm font-semibold syntax-comment">// Social connections</h3>
                  <div className="grid grid-cols-2 gap-3">
                    {socialLinks.map(({ icon: Icon, href, label, color }) => (
                      <a
                        key={label}
                        href={href}
                        target="_blank"
                        rel="noopener noreferrer"
                        className={`code-button flex items-center space-x-2 ${color} hover-highlight`}
                      >
                        <Icon className="h-4 w-4" />
                        <span className="text-sm">{label}</span>
                      </a>
                    ))}
                  </div>
                </div>

                {/* Download Resume */}
                <div className="pt-4">
                  <button className="code-button w-full flex items-center justify-center space-x-2 syntax-function">
                    <Download className="h-4 w-4" />
                    <span>downloadResume()</span>
                  </button>
                </div>
              </div>
            </div>
          </AnimateOnScroll>

          {/* Terminal/Console Panel */}
          <AnimateOnScroll animation="fadeIn" className="order-1 lg:order-2">
            <div className="console-window">
              <div className="console-header flex items-center justify-between">
                <div className="flex items-center space-x-2">
                  <span>Terminal</span>
                  <div className="status-indicator">
                    <div className={`status-dot ${isRunning ? "busy" : "online"}`}></div>
                    <span>{isRunning ? "Running" : "Ready"}</span>
                  </div>
                </div>
                <div className="flex items-center space-x-2">
                  <button className="text-xs hover:text-white">
                    <RotateCcw className="h-3 w-3" />
                  </button>
                  <button className="text-xs hover:text-white">
                    {isRunning ? <Square className="h-3 w-3" /> : <Play className="h-3 w-3" />}
                  </button>
                </div>
              </div>
              <div className="console-content">
                {consoleLines.map((line, index) => (
                  <div key={index} className="console-line">
                    {line.startsWith("$") ? (
                      <span className="console-prompt">
                        <span className="syntax-comment">user@portfolio:~</span>{" "}
                        <span className="console-command">{line}</span>
                      </span>
                    ) : line.startsWith("drwx") ? (
                      <span className="syntax-keyword">{line}</span>
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

            {/* Debug Panel */}
            <div className="debug-panel mt-6">
              <div className="debug-header">Debug Console</div>
              <div className="debug-content">
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
                  <span className="debug-level info">[INFO]</span>
                  <span>System status: All services operational</span>
                </div>
              </div>
            </div>
          </AnimateOnScroll>
        </div>
      </div>
    </section>
  )
}
