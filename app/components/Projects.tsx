"use client"

import Link from "next/link"
import AnimateOnScroll from "./AnimateOnScroll"
import TypewriterText from "./TypewriterText"
import { ExternalLink, GitBranch, Star, Code, Database, Zap, Cpu, Play } from "lucide-react"
import TiltCard from "./tilt-card"

export default function Projects() {
  const projects = [
    {
      title: "Instagram Profile Analytics & Optimization Engine",
      description:
        "Built an AI-powered Instagram growth tool using Mistral-7B and Gemini for personalized recommendations. Developed a Gradio-based UI for real-time analysis and suggestions. Enhanced Instagram user engagement by 35% through optimized growth strategies.",
      date: "2024 - Present",
      location: "Pune",
      link: "https://colab.research.google.com/drive/1pEM7XocPf5WSMFWtJusHONSOiPg-rQ_i?usp=sharing",
      tools: ["Python", "Gradio", "Mistral-7B", "Gemini"],
      achievement: "Enhanced Instagram user engagement by 35%",
      category: "AI/ML",
      leakyCode: "const aiModel = new MistralEngine({ optimization: 'instagram_growth' });",
      status: "production",
      commits: 127,
    },
    {
      title: "Speech Fluency App",
      description:
        "Developed a web application to improve spoken English fluency through progressive difficulty levels and real-time speech analysis. Integrated AssemblyAI for accurate speech-to-text, scoring fluency, pronunciation, and sentence accuracy. Implemented strict mode for precision-based scoring and responsive UI for multi-device use. Performed production build and deployment on Vercel using v0 for optimized performance.",
      date: "2025",
      location: "Pune",
      link: "https://speechfluencyapp.vercel.app/",
      tools: ["Next.js", "Tailwind CSS", "AssemblyAI API", "Vercel"],
      achievement: "Launched production-ready speech analysis app with live deployment",
      category: "Full-Stack / AI",
      leakyCode: "const speechApp = new FluencyEngine({ api: 'AssemblyAI', mode: 'strict' });",
      status: "production",
      commits: 96,
    },
    {
      title: "DeepFake Detect (UI/UX)",
      description:
        "Designed a responsive interface to detect and present deepfake results intuitively. Worked with a team to align UI design with functional goals. Designed 15% quicker user interface for deepfake detection tool.",
      date: "2024",
      location: "Remote",
      link: "https://www.figma.com/design/d7YY2BvrK0DzRqT1LwI0In/DeepFake-Detect?node-id=0-1&t=VVm1UnMj24GuRtUq-1",
      tools: ["Figma", "UI/UX Principles"],
      achievement: "Designed 15% quicker user interface",
      category: "Design",
      leakyCode: "// UI optimization: reduced detection_time by 15%",
      status: "completed",
      commits: 89,
    },
    {
      title: "Rainfall-Prediction",
      description:
        "Compared Prophet and ARIMA models for forecasting rainfall with seasonal accuracy. Highlighted Prophet's superiority in seasonal pattern capture. Achieved 20% higher accuracy than ARIMA in rainfall prediction using Prophet model.",
      date: "2022",
      location: "Pune",
      link: "https://github.com/Abhijit788/Rainfall-Prediction",
      tools: ["Python", "Prophet", "ARIMA", "Pandas"],
      achievement: "Achieved 20% higher accuracy than ARIMA",
      category: "Data Science",
      leakyCode: "prophet_model.fit(seasonal_data).predict(future_periods=365)",
      status: "archived",
      commits: 45,
    },
    {
      title: "Auction System",
      description:
        "Developed an end-to-end auction platform with user authentication, bidding, and item tracking. Implemented backend logic for bid placement and time-bound auction closure. Users can view details of each auction, including current highest bid and remaining time. Reduced auction page load time by 40%, improving user experience.",
      date: "2021 - 2022",
      location: "Pune",
      link: "https://github.com/Abhijit788/Auction-System",
      tools: ["PHP", "MySQL", "HTML", "CSS", "JavaScript"],
      achievement: "Reduced auction page load time by 40%",
      category: "Full Stack",
      leakyCode: "SELECT * FROM bids WHERE auction_id = ? ORDER BY amount DESC LIMIT 1;",
      status: "archived",
      commits: 156,
    },
  ]

  const categoryIcons = {
    "AI/ML": Database,
    Design: Zap,
    "Data Science": Code,
    "Full Stack": Cpu,
    "Full-Stack / AI": Cpu,
  }

  const statusColors = {
    production: "syntax-comment",
    completed: "syntax-keyword",
    archived: "syntax-string",
  }

  return (
    <section id="projects" className="py-16 md:py-24 lg:py-32 bg-gray-900 relative overflow-hidden code-grid">
      <div className="container mx-auto px-4 md:px-6 max-w-7xl relative z-10">
        {/* Repository Header - Mobile optimized */}
        <div className="ide-window max-w-4xl mx-auto mb-12 md:mb-16">
          <div className="ide-titlebar">
            <div className="ide-controls">
              <div className="ide-control close"></div>
              <div className="ide-control minimize"></div>
              <div className="ide-control maximize"></div>
            </div>
            <div className="flex-1 flex overflow-x-auto">
              <div className="ide-tab active">repositories.tsx</div>
              <div className="ide-tab hidden sm:block">README.md</div>
              <div className="ide-tab hidden md:block">package.json</div>
            </div>
          </div>

          <div className="p-4 md:p-6 lg:p-8">
            <div className="flex flex-col sm:flex-row items-start sm:items-center space-y-4 sm:space-y-0 sm:space-x-4 mb-4 md:mb-6">
              <GitBranch className="h-5 w-5 md:h-6 md:w-6 syntax-keyword flex-shrink-0" />
              <h2 className="text-2xl md:text-3xl font-bold syntax-function">
                <TypewriterText text="Featured Repositories" speed={80} />
              </h2>
              <div className="status-indicator">
                <div className="status-dot online"></div>
                <span className="text-sm md:text-base">{projects.length} active projects</span>
              </div>
            </div>

            <div className="code-block" data-language="bash">
              <div className="line-numbers">
                <div>1</div>
                <div>2</div>
                <div>3</div>
              </div>
              <div className="code-content text-xs md:text-sm">
                <div>
                  <span className="syntax-comment"># Clone and explore my latest work</span>
                </div>
                <div>
                  <span className="syntax-keyword">git</span> <span className="syntax-string">clone</span>{" "}
                  <span className="syntax-variable">https://github.com/Abhijit788/portfolio.git</span>
                </div>
                <div>
                  <span className="syntax-keyword">cd</span> <span className="syntax-string">portfolio</span>{" "}
                  <span className="syntax-operator">&&</span> <span className="syntax-keyword">npm</span>{" "}
                  <span className="syntax-string">start</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Projects Grid - Responsive layout */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 md:gap-8">
          {projects.map((project, index) => {
            const CategoryIcon = categoryIcons[project.category as keyof typeof categoryIcons]
            const statusColor = statusColors[project.status as keyof typeof statusColors]

            return (
              <AnimateOnScroll key={index} animation="slideUp">
                <TiltCard className="h-full">
                  <div className="ide-window hover-highlight h-full flex flex-col">
                    <div className="ide-titlebar">
                      <div className="ide-controls">
                        <div className="ide-control close"></div>
                        <div className="ide-control minimize"></div>
                        <div className="ide-control maximize"></div>
                      </div>
                      <div className="flex-1 flex items-center justify-center space-x-2 min-w-0">
                        {CategoryIcon ? (
                          <CategoryIcon className="h-3 w-3 md:h-4 md:w-4 flex-shrink-0" />
                        ) : (
                          <Code className="h-3 w-3 md:h-4 md:w-4 flex-shrink-0" />
                        )}
                        <span className="text-xs md:text-sm truncate">
                          {project.title.toLowerCase().replace(/\s+/g, "-")}.repo
                        </span>
                      </div>
                      <div className="flex items-center space-x-2 flex-shrink-0">
                        <Star className="h-3 w-3 text-yellow-400" />
                        <span className="text-xs">{project.commits}</span>
                      </div>
                    </div>

                    <div className="p-4 md:p-6 space-y-4 md:space-y-6 flex-1 flex flex-col">
                      {/* Project Header */}
                      <div className="space-y-3">
                        <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-3">
                          <h3 className="text-lg md:text-xl font-bold syntax-function leading-tight">
                            {project.title}
                          </h3>
                          <div className={`status-indicator ${statusColor} flex-shrink-0`}>
                            <div className={`status-dot ${project.status === "production" ? "online" : "busy"}`}></div>
                            <span className="text-xs">{project.status}</span>
                          </div>
                        </div>

                        <div className="flex flex-wrap gap-2 md:gap-4 text-xs md:text-sm syntax-comment">
                          <span>📅 {project.date}</span>
                          <span>📍 {project.location}</span>
                          <span>🔧 {project.category}</span>
                        </div>
                      </div>

                      {/* Project Description - Flex grow to fill space */}
                      <div className="flex-1 space-y-4">
                        <p className="text-sm md:text-base leading-relaxed syntax-operator">{project.description}</p>

                        {/* Leaky Code Element - Mobile optimized */}
                        <div className="code-block bg-black/30" data-language="code">
                          <div className="code-content">
                            <div className="syntax-comment text-xs">// Core implementation</div>
                            <div className="text-xs md:text-sm">
                              <span className="syntax-string break-all">{project.leakyCode}</span>
                            </div>
                          </div>
                        </div>

                        {/* Tech Stack - Mobile grid */}
                        <div className="space-y-2">
                          <p className="text-xs font-semibold syntax-comment">// Dependencies</p>
                          <div className="flex flex-wrap gap-2">
                            {project.tools.map((tool, idx) => (
                              <span
                                key={idx}
                                className="px-2 py-1 ide-window text-xs syntax-variable hover:syntax-keyword transition-colors"
                              >
                                {tool}
                              </span>
                            ))}
                          </div>
                        </div>

                        {/* Achievement */}
                        <div className="debug-panel">
                          <div className="debug-header flex items-center space-x-2">
                            <Zap className="h-3 w-3" />
                            <span className="text-xs md:text-sm">Performance Metrics</span>
                          </div>
                          <div className="debug-content">
                            <div className="debug-line">
                              <span className="debug-timestamp text-xs">RESULT:</span>
                              <span className="debug-level info text-xs">[SUCCESS]</span>
                              <span className="syntax-comment text-xs break-words">{project.achievement}</span>
                            </div>
                          </div>
                        </div>
                      </div>

                      {/* Project Actions - Fixed at bottom, fully visible */}
                      <div className="mt-auto pt-4 border-t border-gray-700">
                        <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-3">
                          <div className="flex items-center space-x-3">
                            <div className="status-indicator">
                              <GitBranch className="h-3 w-3" />
                              <span className="text-xs">{project.commits} commits</span>
                            </div>
                          </div>

                          {project.link && (
                            <Link
                              href={project.link}
                              target="_blank"
                              rel="noopener noreferrer"
                              className="code-button flex items-center justify-center space-x-2 text-xs w-full sm:w-auto px-4 py-2"
                            >
                              <ExternalLink className="h-3 w-3" />
                              <span>view_repo()</span>
                            </Link>
                          )}
                        </div>
                      </div>
                    </div>
                  </div>
                </TiltCard>
              </AnimateOnScroll>
            )
          })}
        </div>

        {/* Repository Stats - Mobile optimized */}
        <AnimateOnScroll>
          <div className="console-window mt-12 md:mt-16 max-w-4xl mx-auto">
            <div className="console-header flex items-center justify-between">
              <span className="text-sm md:text-base">Git Statistics</span>
              <div className="flex items-center space-x-2">
                <Play className="h-3 w-3 text-green-400" />
                <span className="text-xs">Active</span>
              </div>
            </div>
            <div className="console-content">
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-6 text-sm">
                <div className="space-y-2">
                  <div className="syntax-comment text-xs md:text-sm">$ git log --oneline | wc -l</div>
                  <div className="syntax-number text-sm md:text-base">417 total commits</div>
                </div>
                <div className="space-y-2">
                  <div className="syntax-comment text-xs md:text-sm">$ find . -name "*.js" -o -name "*.py" | wc -l</div>
                  <div className="syntax-number text-sm md:text-base">89 source files</div>
                </div>
                <div className="space-y-2">
                  <div className="syntax-comment text-xs md:text-sm">$ git branch -r | wc -l</div>
                  <div className="syntax-number text-sm md:text-base">12 active branches</div>
                </div>
              </div>
            </div>
          </div>
        </AnimateOnScroll>
      </div>
    </section>
  )
}
