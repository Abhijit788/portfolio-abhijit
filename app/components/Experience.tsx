"use client"

import AnimateOnScroll from "./AnimateOnScroll"
import TypewriterText from "./TypewriterText"
import { Briefcase, MapPin, Calendar, Code, Database } from "lucide-react"

export default function Experience() {
  const experiences = [
    {
      company: "Accenture (Forage)",
      position: "Virtual Internship",
      date: "2023",
      location: "Remote",
      responsibilities: [
        "Analyzed project goals and processed datasets for insights.",
        "Created interactive dashboards and presented findings to support decision-making.",
      ],
      tech: "Python, Pandas, Data Visualization",
      type: "internship",
      duration: "3 months",
    },
    {
      company: "Loire Voda",
      position: "Front-End Intern",
      date: "2022",
      location: "Pune, Maharashtra",
      responsibilities: [
        "Developed UI components for responsive web applications.",
        "Collaborated with the design team to enhance UX and reduce page load time.",
      ],
      tech: "HTML, CSS, JavaScript, React",
      type: "internship",
      duration: "6 months",
    },
  ]

  return (
    <section id="experience" className="py-32 bg-gray-800 relative overflow-hidden code-grid">
      <div className="container mx-auto px-4 max-w-6xl relative z-10">
        {/* Experience Header */}
        <AnimateOnScroll>
          <div className="ide-window max-w-4xl mx-auto mb-16">
            <div className="ide-titlebar">
              <div className="ide-controls">
                <div className="ide-control close"></div>
                <div className="ide-control minimize"></div>
                <div className="ide-control maximize"></div>
              </div>
              <div className="flex-1 flex">
                <div className="ide-tab active">work_history.json</div>
                <div className="ide-tab">career_timeline.log</div>
              </div>
            </div>

            <div className="p-8">
              <div className="flex items-center space-x-4 mb-6">
                <Briefcase className="h-6 w-6 syntax-keyword" />
                <h2 className="text-3xl font-bold syntax-function">
                  <TypewriterText text="Professional Experience" speed={80} />
                </h2>
              </div>

              <div className="code-block" data-language="json">
                <div className="line-numbers">
                  {Array.from({ length: 8 }, (_, i) => (
                    <div key={i}>{i + 1}</div>
                  ))}
                </div>
                <div className="code-content">
                  <div>
                    <span className="syntax-operator">{"{"}</span>
                  </div>
                  <div className="ml-4">
                    <span className="syntax-string">"career_status"</span>
                    <span className="syntax-operator">:</span> <span className="syntax-string">"actively_seeking"</span>
                    <span className="syntax-operator">,</span>
                  </div>
                  <div className="ml-4">
                    <span className="syntax-string">"total_experience"</span>
                    <span className="syntax-operator">:</span> <span className="syntax-string">"2+ years"</span>
                    <span className="syntax-operator">,</span>
                  </div>
                  <div className="ml-4">
                    <span className="syntax-string">"specialization"</span>
                    <span className="syntax-operator">:</span>{" "}
                    <span className="syntax-string">["Full-Stack", "Data Analysis", "AI/ML"]</span>
                    <span className="syntax-operator">,</span>
                  </div>
                  <div className="ml-4">
                    <span className="syntax-string">"work_history"</span>
                    <span className="syntax-operator">:</span> <span className="syntax-operator">[</span>
                  </div>
                  <div className="ml-8 syntax-comment">// See detailed records below...</div>
                  <div className="ml-4">
                    <span className="syntax-operator">]</span>
                  </div>
                  <div>
                    <span className="syntax-operator">{"}"}</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </AnimateOnScroll>

        {/* Experience Timeline */}
        <div className="space-y-8">
          {experiences.map((exp, index) => (
            <AnimateOnScroll key={index} animation="slideUp">
              <div className="ide-window hover-highlight">
                <div className="ide-titlebar">
                  <div className="ide-controls">
                    <div className="ide-control close"></div>
                    <div className="ide-control minimize"></div>
                    <div className="ide-control maximize"></div>
                  </div>
                  <div className="flex-1 flex items-center justify-center space-x-2">
                    <Code className="h-4 w-4" />
                    <span className="text-sm">{exp.company.toLowerCase().replace(/\s+/g, "_")}.experience</span>
                  </div>
                  <div className="status-indicator">
                    <div className="status-dot busy"></div>
                    <span className="text-xs">{exp.type}</span>
                  </div>
                </div>

                <div className="p-8">
                  <div className="grid lg:grid-cols-3 gap-8">
                    {/* Company Info */}
                    <div className="lg:col-span-1 space-y-4">
                      <div className="space-y-3">
                        <h3 className="text-2xl font-bold syntax-function">{exp.company}</h3>
                        <p className="text-lg syntax-keyword">{exp.position}</p>

                        <div className="space-y-2 text-sm">
                          <div className="flex items-center space-x-2 syntax-comment">
                            <Calendar className="h-4 w-4" />
                            <span>{exp.date}</span>
                          </div>
                          <div className="flex items-center space-x-2 syntax-comment">
                            <MapPin className="h-4 w-4" />
                            <span>{exp.location}</span>
                          </div>
                          <div className="flex items-center space-x-2 syntax-comment">
                            <Database className="h-4 w-4" />
                            <span>{exp.duration}</span>
                          </div>
                        </div>
                      </div>

                      {/* Tech Stack */}
                      <div className="debug-panel">
                        <div className="debug-header">Tech Stack</div>
                        <div className="debug-content">
                          <div className="debug-line">
                            <span className="debug-level info">[TOOLS]</span>
                            <span className="syntax-string">{exp.tech}</span>
                          </div>
                        </div>
                      </div>
                    </div>

                    {/* Experience Details */}
                    <div className="lg:col-span-2 space-y-6">
                      {/* Responsibilities */}
                      <div className="space-y-4">
                        <h4 className="text-lg font-semibold syntax-variable">Key Responsibilities</h4>
                        <div className="console-window">
                          <div className="console-header">Task Execution Log</div>
                          <div className="console-content space-y-3">
                            {exp.responsibilities.map((resp, idx) => (
                              <div key={idx} className="debug-line">
                                <span className="debug-timestamp">[{String(idx + 1).padStart(2, "0")}]</span>
                                <span className="debug-level info">[COMPLETED]</span>
                                <span className="syntax-operator">{resp}</span>
                              </div>
                            ))}
                          </div>
                        </div>
                      </div>

                      {/* Performance Metrics */}
                      <div className="code-block" data-language="javascript">
                        <div className="line-numbers">
                          <div>1</div>
                          <div>2</div>
                          <div>3</div>
                          <div>4</div>
                        </div>
                        <div className="code-content">
                          <div className="syntax-comment">// Performance evaluation</div>
                          <div>
                            <span className="syntax-keyword">const</span>{" "}
                            <span className="syntax-variable">performance</span>{" "}
                            <span className="syntax-operator">=</span> <span className="syntax-operator">{"{"}</span>
                          </div>
                          <div className="ml-4">
                            <span className="syntax-variable">completion_rate</span>
                            <span className="syntax-operator">:</span> <span className="syntax-string">"100%"</span>
                            <span className="syntax-operator">,</span> <span className="syntax-variable">impact</span>
                            <span className="syntax-operator">:</span> <span className="syntax-string">"high"</span>
                          </div>
                          <div>
                            <span className="syntax-operator">{"}"}</span>
                            <span className="syntax-operator">;</span>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </AnimateOnScroll>
          ))}
        </div>

        {/* Career Summary */}
        <AnimateOnScroll>
          <div className="console-window mt-16 max-w-4xl mx-auto">
            <div className="console-header">Career Analytics Dashboard</div>
            <div className="console-content">
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                <div className="space-y-2">
                  <div className="syntax-comment">$ calculate_experience_years()</div>
                  <div className="syntax-number">2+ years professional experience</div>
                </div>
                <div className="space-y-2">
                  <div className="syntax-comment">$ count_technologies_mastered()</div>
                  <div className="syntax-number">15+ technologies learned</div>
                </div>
                <div className="space-y-2">
                  <div className="syntax-comment">$ assess_career_trajectory()</div>
                  <div className="syntax-comment">Upward growth trajectory</div>
                </div>
              </div>
            </div>
          </div>
        </AnimateOnScroll>
      </div>
    </section>
  )
}
