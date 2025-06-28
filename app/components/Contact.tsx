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
    <section id="contact" className="py-32 bg-gray-900 relative overflow-hidden code-grid">
      <div className="container mx-auto px-4 max-w-6xl relative z-10">
        {/* Contact Header */}
        <AnimateOnScroll>
          <div className="ide-window max-w-4xl mx-auto mb-16">
            <div className="ide-titlebar">
              <div className="ide-controls">
                <div className="ide-control close"></div>
                <div className="ide-control minimize"></div>
                <div className="ide-control maximize"></div>
              </div>
              <div className="flex-1 flex">
                <div className="ide-tab active">contact_info.js</div>
                <div className="ide-tab">message_handler.py</div>
              </div>
            </div>

            <div className="p-8">
              <div className="flex items-center space-x-4 mb-6">
                <Terminal className="h-6 w-6 syntax-keyword" />
                <h2 className="text-3xl font-bold syntax-function">
                  <TypewriterText text="Get In Touch" speed={80} />
                </h2>
              </div>

              <div className="code-block" data-language="javascript">
                <div className="line-numbers">
                  {Array.from({ length: 8 }, (_, i) => (
                    <div key={i}>{i + 1}</div>
                  ))}
                </div>
                <div className="code-content">
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
        </AnimateOnScroll>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Contact Information */}
          <AnimateOnScroll animation="slideUp">
            <div className="space-y-8">
              {/* Contact Methods */}
              <div className="ide-window">
                <div className="ide-titlebar">
                  <div className="ide-controls">
                    <div className="ide-control close"></div>
                    <div className="ide-control minimize"></div>
                    <div className="ide-control maximize"></div>
                  </div>
                  <div className="flex-1 text-center">
                    <span className="text-sm">contact_methods.json</span>
                  </div>
                </div>

                <div className="p-6 space-y-6">
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
                    <div key={label} className="flex items-center space-x-4 p-4 ide-window hover-highlight">
                      <div className={`p-3 ide-window ${color}`}>
                        <Icon className="h-5 w-5" />
                      </div>
                      <div className="flex-1">
                        <p className="text-sm syntax-comment">{label}</p>
                        {href ? (
                          <a href={href} className={`${color} hover:syntax-function transition-colors`}>
                            {value}
                          </a>
                        ) : (
                          <p className={color}>{value}</p>
                        )}
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Status Panel */}
              <div className="debug-panel">
                <div className="debug-header">Current Status</div>
                <div className="debug-content space-y-3">
                  <div className="debug-line">
                    <span className="debug-timestamp">STATUS:</span>
                    <span className="debug-level info">[AVAILABLE]</span>
                    <span className="syntax-comment">Open to new opportunities</span>
                  </div>
                  <div className="debug-line">
                    <span className="debug-timestamp">TIMEZONE:</span>
                    <span className="debug-level info">[IST]</span>
                    <span className="syntax-comment">UTC+5:30</span>
                  </div>
                  <div className="debug-line">
                    <span className="debug-timestamp">RESPONSE:</span>
                    <span className="debug-level info">[FAST]</span>
                    <span className="syntax-comment">Usually within 24 hours</span>
                  </div>
                </div>
              </div>
            </div>
          </AnimateOnScroll>

          {/* Interactive Terminal */}
          <AnimateOnScroll animation="fadeIn">
            <div className="console-window h-full">
              <div className="console-header flex items-center justify-between">
                <div className="flex items-center space-x-2">
                  <Terminal className="h-4 w-4" />
                  <span>Interactive Contact Terminal</span>
                </div>
                <div className="status-indicator">
                  <div className="status-dot online"></div>
                  <span>Online</span>
                </div>
              </div>

              <div className="console-content h-96 flex flex-col">
                {/* Terminal Output */}
                <div className="flex-1 overflow-y-auto space-y-1 mb-4">
                  {terminalHistory.map((line, index) => (
                    <div key={index} className="text-sm">
                      {line.startsWith("$") ? (
                        <span className="syntax-comment">{line}</span>
                      ) : line.startsWith("📧") ||
                        line.startsWith("📞") ||
                        line.startsWith("📍") ||
                        line.startsWith("🔗") ? (
                        <span className="syntax-keyword">{line}</span>
                      ) : line.includes("Available commands") || line.includes("Command not found") ? (
                        <span className="syntax-string">{line}</span>
                      ) : (
                        <span className="syntax-operator">{line}</span>
                      )}
                    </div>
                  ))}
                </div>

                {/* Terminal Input */}
                <form onSubmit={handleTerminalSubmit} className="flex items-center space-x-2">
                  <span className="syntax-comment">user@contact:~$</span>
                  <input
                    type="text"
                    value={terminalInput}
                    onChange={(e) => setTerminalInput(e.target.value)}
                    className="flex-1 bg-transparent border-none outline-none syntax-keyword font-mono"
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
