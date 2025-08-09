"use client"

import type React from "react"

import { useState } from "react"
import AnimateOnScroll from "./AnimateOnScroll"
import TypewriterText from "./TypewriterText"
import { Mail, Phone, MapPin, Terminal } from "lucide-react"

export default function Contact() {
  const [terminalInput, setTerminalInput] = useState("")
  const [terminalHistory, setTerminalHistory] = useState([
    "Welcome to Abhijit's Contact Terminal v2.0.24",
    "Type 'help' for available commands",
    "",
  ])

  const handleTerminalSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    const command = terminalInput.trim().toLowerCase()
    const newHistory = [...terminalHistory, `$ ${terminalInput}`]

    switch (command) {
      case "help":
        newHistory.push("Available commands:")
        newHistory.push("  email    - Show email address")
        newHistory.push("  phone    - Show phone number")
        newHistory.push("  location - Show current location")
        newHistory.push("  social   - Show social media links")
        newHistory.push("  clear    - Clear terminal")
        break
      case "email":
        newHistory.push("📧 abhijitarote540@gmail.com")
        break
      case "phone":
        newHistory.push("📞 +91-7058385046")
        break
      case "location":
        newHistory.push("📍 Pune, Maharashtra, India")
        break
      case "social":
        newHistory.push("🔗 GitHub: https://github.com/Abhijit788")
        newHistory.push("🔗 LinkedIn: https://linkedin.com/in/abhijit-arote-aa9060246")
        newHistory.push("🔗 Instagram: https://instagram.com/artistic_sneek")
        break
      case "clear":
        setTerminalHistory(["Terminal cleared.", ""])
        setTerminalInput("")
        return
      default:
        newHistory.push(`Command not found: ${command}`)
        newHistory.push("Type 'help' for available commands")
    }

    newHistory.push("")
    setTerminalHistory(newHistory)
    setTerminalInput("")
  }

  return (
    <section id="contact" className="py-16 md:py-24 lg:py-32 bg-gray-900 relative overflow-hidden code-grid">
      <div className="container mx-auto px-4 md:px-6 max-w-6xl relative z-10">
        {/* Contact Header - Mobile optimized */}
        <div className="ide-window max-w-4xl mx-auto mb-12 md:mb-16">
          <div className="ide-titlebar">
            <div className="ide-controls">
              <div className="ide-control close"></div>
              <div className="ide-control minimize"></div>
              <div className="ide-control maximize"></div>
            </div>
            <div className="flex-1 flex overflow-x-auto">
              <div className="ide-tab active">contact_info.js</div>
              <div className="ide-tab hidden sm:block">message_handler.py</div>
            </div>
          </div>

          <div className="p-4 md:p-6 lg:p-8">
            <div className="flex flex-col sm:flex-row items-start sm:items-center space-y-4 sm:space-y-0 sm:space-x-4 mb-4 md:mb-6">
              <Terminal className="h-5 w-5 md:h-6 md:w-6 syntax-keyword flex-shrink-0" />
              <h2 className="text-2xl md:text-3xl font-bold syntax-function">
                <TypewriterText text="Get In Touch" speed={80} />
              </h2>
            </div>

            <div className="code-block" data-language="javascript">
              <div className="line-numbers">
                {Array.from({ length: 8 }, (_, i) => (
                  <div key={i}>{i + 1}</div>
                ))}
              </div>
              <div className="code-content text-xs md:text-sm">
                <div className="syntax-comment">// Contact configuration</div>
                <div>
                  <span className="syntax-keyword">const</span> <span className="syntax-variable">contactInfo</span>{" "}
                  <span className="syntax-operator">=</span> <span className="syntax-operator">{"{"}</span>
                </div>
                <div className="ml-4">
                  <span className="syntax-variable">availability</span>
                  <span className="syntax-operator">:</span>{" "}
                  <span className="syntax-string">"open_to_opportunities"</span>
                  <span className="syntax-operator">,</span>
                </div>
                <div className="ml-4">
                  <span className="syntax-variable">response_time</span>
                  <span className="syntax-operator">:</span> <span className="syntax-string">"within_24_hours"</span>
                  <span className="syntax-operator">,</span>
                </div>
                <div className="ml-4">
                  <span className="syntax-variable">preferred_topics</span>
                  <span className="syntax-operator">:</span>{" "}
                  <span className="syntax-string">["collaboration", "opportunities", "tech_discussions"]</span>
                </div>
                <div>
                  <span className="syntax-operator">{"}"}</span>
                  <span className="syntax-operator">;</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="grid lg:grid-cols-2 gap-8 lg:gap-12">
          {/* Contact Information - Mobile optimized */}
          <AnimateOnScroll animation="slideUp">
            <div className="space-y-6 md:space-y-8">
              {/* Contact Methods */}
              <div className="ide-window">
                <div className="ide-titlebar">
                  <div className="ide-controls">
                    <div className="ide-control close"></div>
                    <div className="ide-control minimize"></div>
                    <div className="ide-control maximize"></div>
                  </div>
                  <div className="flex-1 text-center">
                    <span className="text-xs md:text-sm">contact_methods.json</span>
                  </div>
                </div>

                <div className="p-4 md:p-6 space-y-4 md:space-y-6">
                  {[
                    {
                      icon: Mail,
                      label: "Email",
                      value: "abhijitarote540@gmail.com",
                      href: "mailto:abhijitarote540@gmail.com",
                      color: "syntax-keyword",
                    },
                    {
                      icon: Phone,
                      label: "Phone",
                      value: "+91-7058385046",
                      href: "tel:+917058385046",
                      color: "syntax-string",
                    },
                    {
                      icon: MapPin,
                      label: "Location",
                      value: "Pune, Maharashtra, India",
                      href: null,
                      color: "syntax-comment",
                    },
                  ].map(({ icon: Icon, label, value, href, color }) => (
                    <div
                      key={label}
                      className="flex items-center space-x-3 md:space-x-4 p-3 md:p-4 ide-window hover-highlight"
                    >
                      <div className={`p-2 md:p-3 ide-window ${color} flex-shrink-0`}>
                        <Icon className="h-4 w-4 md:h-5 md:w-5" />
                      </div>
                      <div className="flex-1 min-w-0">
                        <p className="text-xs md:text-sm syntax-comment">{label}</p>
                        {href ? (
                          <a
                            href={href}
                            className={`${color} hover:syntax-function transition-colors text-sm md:text-base break-all`}
                          >
                            {value}
                          </a>
                        ) : (
                          <p className={`${color} text-sm md:text-base break-words`}>{value}</p>
                        )}
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Status Panel - Mobile layout */}
              <div className="debug-panel">
                <div className="debug-header">Current Status</div>
                <div className="debug-content space-y-2 md:space-y-3">
                  <div className="debug-line flex-wrap">
                    <span className="debug-timestamp text-xs">STATUS:</span>
                    <span className="debug-level info text-xs">[AVAILABLE]</span>
                    <span className="syntax-comment text-xs">Open to new opportunities</span>
                  </div>
                  <div className="debug-line flex-wrap">
                    <span className="debug-timestamp text-xs">TIMEZONE:</span>
                    <span className="debug-level info text-xs">[IST]</span>
                    <span className="syntax-comment text-xs">UTC+5:30</span>
                  </div>
                  <div className="debug-line flex-wrap">
                    <span className="debug-timestamp text-xs">RESPONSE:</span>
                    <span className="debug-level info text-xs">[FAST]</span>
                    <span className="syntax-comment text-xs">Usually within 24 hours</span>
                  </div>
                </div>
              </div>
            </div>
          </AnimateOnScroll>

          {/* Interactive Terminal - Mobile optimized */}
          <AnimateOnScroll animation="fadeIn">
            <div className="console-window h-full">
              <div className="console-header flex items-center justify-between">
                <div className="flex items-center space-x-2 min-w-0">
                  <Terminal className="h-3 w-3 md:h-4 md:w-4 flex-shrink-0" />
                  <span className="text-xs md:text-sm truncate">Interactive Contact Terminal</span>
                </div>
                <div className="status-indicator flex-shrink-0">
                  <div className="status-dot online"></div>
                  <span className="text-xs">Online</span>
                </div>
              </div>

              <div className="console-content h-64 md:h-80 lg:h-96 flex flex-col">
                {/* Terminal Output - Mobile scrollable */}
                <div className="flex-1 overflow-y-auto space-y-1 mb-4 text-xs md:text-sm">
                  {terminalHistory.map((line, index) => (
                    <div key={index} className="break-words">
                      {line.startsWith("$") ? (
                        <span className="syntax-comment">{line}</span>
                      ) : line.startsWith("📧") ||
                        line.startsWith("📞") ||
                        line.startsWith("📍") ||
                        line.startsWith("🔗") ? (
                        <span className="syntax-keyword break-all">{line}</span>
                      ) : line.includes("Available commands") || line.includes("Command not found") ? (
                        <span className="syntax-string">{line}</span>
                      ) : (
                        <span className="syntax-operator">{line}</span>
                      )}
                    </div>
                  ))}
                </div>

                {/* Terminal Input - Mobile optimized */}
                <form onSubmit={handleTerminalSubmit} className="flex items-center space-x-2">
                  <span className="syntax-comment text-xs md:text-sm flex-shrink-0">user@contact:~$</span>
                  <input
                    type="text"
                    value={terminalInput}
                    onChange={(e) => setTerminalInput(e.target.value)}
                    className="flex-1 bg-transparent border-none outline-none syntax-keyword font-mono text-xs md:text-sm min-w-0"
                    placeholder="Type a command..."
                    autoComplete="off"
                  />
                </form>
              </div>
            </div>
          </AnimateOnScroll>
        </div>
      </div>
    </section>
  )
}
