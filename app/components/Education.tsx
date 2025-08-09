"use client"

import AnimateOnScroll from "./AnimateOnScroll"
import TypewriterText from "./TypewriterText"
import { GraduationCap, Calendar, MapPin, BookOpen } from "lucide-react"

export default function Education() {
  const education = [
    {
      institution: "PCET's Pimpri Chinchwad College Of Engineering & Research",
      degree: "Bachelor's Degree in Information Technology",
      date: "2023 - 2026",
      location: "Ravet, Pune, Maharashtra",
      status: "in_progress",
      level: "undergraduate",
      gpa: "8.5/10",
    },
    {
      institution: "PCET's Pimpri Chinchwad Polytechnic",
      degree: "Diploma in Computer Science",
      date: "2020 - 2023",
      location: "Pune, Maharashtra, India",
      status: "completed",
      level: "diploma",
      gpa: "9.43/10",
    },
  ]

  const statusColors = {
    in_progress: "syntax-keyword",
    completed: "syntax-comment",
  }

  return (
    <section id="education" className="py-32 bg-gray-900 relative overflow-hidden code-grid">
      <div className="container mx-auto px-4 max-w-6xl relative z-10">
        {/* Education Header */}
        <AnimateOnScroll>
          <div className="ide-window max-w-4xl mx-auto mb-16">
            <div className="ide-titlebar">
              <div className="ide-controls">
                <div className="ide-control close"></div>
                <div className="ide-control minimize"></div>
                <div className="ide-control maximize"></div>
              </div>
              <div className="flex-1 flex">
                <div className="ide-tab active">academic_records.sql</div>
                <div className="ide-tab">transcripts.json</div>
              </div>
            </div>

            <div className="p-8">
              <div className="flex items-center space-x-4 mb-6">
                <GraduationCap className="h-6 w-6 syntax-keyword" />
                <h2 className="text-3xl font-bold syntax-function">
                  <TypewriterText text="Academic Background" speed={80} />
                </h2>
              </div>

              <div className="code-block" data-language="sql">
                <div className="line-numbers">
                  {Array.from({ length: 6 }, (_, i) => (
                    <div key={i}>{i + 1}</div>
                  ))}
                </div>
                <div className="code-content">
                  <div>
                    <span className="syntax-keyword">SELECT</span> <span className="syntax-operator">*</span>
                  </div>
                  <div>
                    <span className="syntax-keyword">FROM</span>{" "}
                    <span className="syntax-variable">academic_records</span>
                  </div>
                  <div>
                    <span className="syntax-keyword">WHERE</span> <span className="syntax-variable">student_id</span>{" "}
                    <span className="syntax-operator">=</span> <span className="syntax-string">'abhijit_arote'</span>
                  </div>
                  <div>
                    <span className="syntax-keyword">ORDER BY</span>{" "}
                    <span className="syntax-variable">graduation_date</span>{" "}
                    <span className="syntax-keyword">DESC</span>
                    <span className="syntax-operator">;</span>
                  </div>
                  <div className="mt-2 syntax-comment">-- 2 records found</div>
                </div>
              </div>
            </div>
          </div>
        </AnimateOnScroll>

        {/* Education Records */}
        <div className="space-y-8">
          {education.map((edu, index) => {
            const statusColor = statusColors[edu.status as keyof typeof statusColors]

            return (
              <AnimateOnScroll key={index} animation="slideUp">
                <div className="ide-window hover-highlight">
                  <div className="ide-titlebar">
                    <div className="ide-controls">
                      <div className="ide-control close"></div>
                      <div className="ide-control minimize"></div>
                      <div className="ide-control maximize"></div>
                    </div>
                    <div className="flex-1 flex items-center justify-center space-x-2">
                      <BookOpen className="h-4 w-4" />
                      <span className="text-sm">{edu.level}_record.edu</span>
                    </div>
                    <div className={`status-indicator ${statusColor}`}>
                      <div className={`status-dot ${edu.status === "in_progress" ? "busy" : "online"}`}></div>
                      <span className="text-xs">{edu.status.replace("_", " ")}</span>
                    </div>
                  </div>

                  <div className="p-8">
                    <div className="grid lg:grid-cols-3 gap-8">
                      {/* Institution Info */}
                      <div className="lg:col-span-2 space-y-4">
                        <div className="space-y-3">
                          <h3 className="text-2xl font-bold syntax-function leading-tight">{edu.institution}</h3>
                          <p className="text-lg syntax-keyword">{edu.degree}</p>

                          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-sm">
                            <div className="flex items-center space-x-2 syntax-comment">
                              <Calendar className="h-4 w-4" />
                              <span>{edu.date}</span>
                            </div>
                            <div className="flex items-center space-x-2 syntax-comment">
                              <MapPin className="h-4 w-4" />
                              <span>{edu.location}</span>
                            </div>
                          </div>
                        </div>

                        {/* Academic Performance */}
                        <div className="code-block" data-language="javascript">
                          <div className="line-numbers">
                            <div>1</div>
                            <div>2</div>
                            <div>3</div>
                            <div>4</div>
                            <div>5</div>
                          </div>
                          <div className="code-content">
                            <div className="syntax-comment">// Academic performance metrics</div>
                            <div>
                              <span className="syntax-keyword">const</span>{" "}
                              <span className="syntax-variable">academicRecord</span>{" "}
                              <span className="syntax-operator">=</span> <span className="syntax-operator">{"{"}</span>
                            </div>
                            <div className="ml-4">
                              <span className="syntax-variable">gpa</span>
                              <span className="syntax-operator">:</span>{" "}
                              <span className="syntax-string">"{edu.gpa}"</span>
                              <span className="syntax-operator">,</span>
                            </div>
                            <div className="ml-4">
                              <span className="syntax-variable">status</span>
                              <span className="syntax-operator">:</span>{" "}
                              <span className="syntax-string">"{edu.status}"</span>
                            </div>
                            <div>
                              <span className="syntax-operator">{"}"}</span>
                              <span className="syntax-operator">;</span>
                            </div>
                          </div>
                        </div>
                      </div>

                      {/* Academic Stats */}
                      <div className="lg:col-span-1 space-y-4">
                        <div className="debug-panel">
                          <div className="debug-header">Academic Metrics</div>
                          <div className="debug-content space-y-3">
                            <div className="debug-line">
                              <span className="debug-level info">[GPA]</span>
                              <span className="syntax-number">{edu.gpa}</span>
                            </div>
                            <div className="debug-line">
                              <span className="debug-level info">[LEVEL]</span>
                              <span className="syntax-string">{edu.level}</span>
                            </div>
                            <div className="debug-line">
                              <span className="debug-level info">[STATUS]</span>
                              <span className={statusColor}>{edu.status.replace("_", " ")}</span>
                            </div>
                          </div>
                        </div>

                        {/* Progress Bar for Current Education */}
                        {edu.status === "in_progress" && (
                          <div className="space-y-2">
                            <div className="flex justify-between text-xs syntax-comment">
                              <span>Progress</span>
                              <span>60%</span>
                            </div>
                            <div className="progress-container">
                              <div className="progress-bar" style={{ width: "60%" }}></div>
                            </div>
                          </div>
                        )}
                      </div>
                    </div>
                  </div>
                </div>
              </AnimateOnScroll>
            )
          })}
        </div>

        {/* Academic Summary */}
        <AnimateOnScroll>
          <div className="console-window mt-16 max-w-4xl mx-auto">
            <div className="console-header">Academic Analytics</div>
            <div className="console-content">
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                <div className="space-y-2">
                  <div className="syntax-comment">$ calculate_total_study_years()</div>
                  <div className="syntax-number">6+ years of technical education</div>
                </div>
                <div className="space-y-2">
                  <div className="syntax-comment">$ get_average_gpa()</div>
                  <div className="syntax-number">8.85/10 cumulative GPA</div>
                </div>
                <div className="space-y-2">
                  <div className="syntax-comment">$ check_graduation_status()</div>
                  <div className="syntax-keyword">Currently pursuing Bachelor's</div>
                </div>
              </div>
            </div>
          </div>
        </AnimateOnScroll>
      </div>
    </section>
  )
}
