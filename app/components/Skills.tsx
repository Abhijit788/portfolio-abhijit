"use client"

import { Code2, Database, Palette, Wrench, Play, Pause, RotateCcw } from "lucide-react"

const skills = [
  {
    name: "HTML",
    logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg",
    category: "Frontend",
    level: 95,
    version: "5.0",
  },
  {
    name: "CSS",
    logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg",
    category: "Frontend",
    level: 90,
    version: "3.0",
  },
  {
    name: "JavaScript",
    logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg",
    category: "Frontend",
    level: 88,
    version: "ES2023",
  },
  {
    name: "TypeScript",
    logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/typescript/typescript-original.svg",
    category: "Frontend",
    level: 85,
    version: "5.3",
  },
  {
    name: "React",
    logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg",
    category: "Frontend",
    level: 85,
    version: "18.2",
  },
  {
    name: "Figma",
    logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/figma/figma-original.svg",
    category: "Frontend",
    level: 80,
    version: "2024",
  },
  {
    name: "Node.js",
    logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg",
    category: "Backend",
    level: 82,
    version: "20.x",
  },
  {
    name: "Express",
    logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/express/express-original.svg",
    category: "Backend",
    level: 78,
    version: "4.18",
  },
  {
    name: "Spring Boot",
    logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/spring/spring-original.svg",
    category: "Backend",
    level: 75,
    version: "3.2",
  },
  {
    name: "Git",
    logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original.svg",
    category: "Tools",
    level: 90,
    version: "2.43",
  },
  {
    name: "GitHub",
    logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/github/github-original.svg",
    category: "Tools",
    level: 88,
    version: "2024",
  },
  {
    name: "Vercel",
    logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/vercel/vercel-original.svg",
    category: "Tools",
    level: 85,
    version: "latest",
  },
  {
    name: "Python",
    logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg",
    category: "Data & ML",
    level: 87,
    version: "3.12",
  },
  {
    name: "Pandas",
    logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/pandas/pandas-original.svg",
    category: "Data & ML",
    level: 83,
    version: "2.1",
  },
  {
    name: "MySQL",
    logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mysql/mysql-original.svg",
    category: "Database",
    level: 80,
    version: "8.0",
  },
]

const categoryIcons = {
  Frontend: Palette,
  Backend: Code2,
  Tools: Wrench,
  "Data & ML": Database,
  Database: Database,
}

export default function Skills() {
  const duplicatedSkills = [...skills, ...skills]

  return (
    <section id="skills" className="py-16 md:py-24 lg:py-32 bg-gray-900 relative overflow-hidden code-grid">
      <div className="container mx-auto px-4 md:px-6 max-w-7xl relative z-10">
        {/* Package Manager Interface - Mobile optimized */}
        <div className="ide-window max-w-4xl mx-auto mb-12 md:mb-16">
          <div className="ide-titlebar">
            <div className="ide-controls">
              <div className="ide-control close"></div>
              <div className="ide-control minimize"></div>
              <div className="ide-control maximize"></div>
            </div>
            <div className="flex-1 flex overflow-x-auto">
              <div className="ide-tab active">package.json</div>
              <div className="ide-tab hidden sm:block">dependencies.lock</div>
            </div>
          </div>

          <div className="p-4 md:p-6 lg:p-8">
            <div className="code-block" data-language="json">
              <div className="line-numbers">
                {Array.from({ length: 12 }, (_, i) => (
                  <div key={i}>{i + 1}</div>
                ))}
              </div>
              <div className="code-content text-xs md:text-sm">
                <div>
                  <span className="syntax-operator">{"{"}</span>
                </div>
                <div className="ml-4">
                  <span className="syntax-string">"name"</span>
                  <span className="syntax-operator">:</span> <span className="syntax-string">"abhijit-skills"</span>
                  <span className="syntax-operator">,</span>
                </div>
                <div className="ml-4">
                  <span className="syntax-string">"version"</span>
                  <span className="syntax-operator">:</span> <span className="syntax-string">"2.0.24"</span>
                  <span className="syntax-operator">,</span>
                </div>
                <div className="ml-4">
                  <span className="syntax-string">"description"</span>
                  <span className="syntax-operator">:</span>{" "}
                  <span className="syntax-string">"Comprehensive technical skill set"</span>
                  <span className="syntax-operator">,</span>
                </div>
                <div className="ml-4">
                  <span className="syntax-string">"author"</span>
                  <span className="syntax-operator">:</span> <span className="syntax-string">"Abhijit Arote"</span>
                  <span className="syntax-operator">,</span>
                </div>
                <div className="ml-4">
                  <span className="syntax-string">"dependencies"</span>
                  <span className="syntax-operator">:</span> <span className="syntax-operator">{"{"}</span>
                </div>
                <div className="ml-8 syntax-comment">// See modules below...</div>
                <div className="ml-4">
                  <span className="syntax-operator">{"}"}</span>
                  <span className="syntax-operator">,</span>
                </div>
                <div className="ml-4">
                  <span className="syntax-string">"status"</span>
                  <span className="syntax-operator">:</span> <span className="syntax-string">"production-ready"</span>
                </div>
                <div>
                  <span className="syntax-operator">{"}"}</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Skills Categories - Responsive grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6 lg:gap-8 mb-12 md:mb-16">
          {Object.entries(categoryIcons).map(([category, Icon]) => {
            const categorySkills = skills.filter((skill) => skill.category === category)
            const avgLevel = Math.round(
              categorySkills.reduce((acc, skill) => acc + skill.level, 0) / categorySkills.length,
            )

            return (
              <div key={category} className="ide-window hover-highlight">
                <div className="ide-titlebar">
                  <div className="ide-controls">
                    <div className="ide-control close"></div>
                    <div className="ide-control minimize"></div>
                    <div className="ide-control maximize"></div>
                  </div>
                  <div className="flex-1 flex items-center justify-center">
                    <Icon className="h-3 w-3 md:h-4 md:w-4 mr-1 md:mr-2" />
                    <span className="text-xs md:text-sm truncate">{category.toLowerCase()}.module</span>
                  </div>
                </div>

                <div className="p-4 md:p-6 text-center">
                  <div className="w-12 h-12 md:w-16 md:h-16 mx-auto mb-3 md:mb-4 ide-window flex items-center justify-center">
                    <Icon className="w-6 h-6 md:w-8 md:h-8 syntax-keyword" />
                  </div>
                  <h3 className="font-bold text-sm md:text-lg mb-2 syntax-function">{category.toUpperCase()}</h3>
                  <div className="space-y-2 md:space-y-3">
                    <p className="text-xs md:text-sm syntax-comment">{categorySkills.length} modules installed</p>
                    <div className="progress-container">
                      <div className="progress-bar" style={{ width: `${avgLevel}%` }}></div>
                    </div>
                    <p className="text-xs syntax-number">{avgLevel}% coverage</p>
                  </div>
                </div>
              </div>
            )
          })}
        </div>

        {/* Skills Carousel - Mobile optimized */}
        <div className="ide-window">
          <div className="ide-titlebar">
            <div className="ide-controls">
              <div className="ide-control close"></div>
              <div className="ide-control minimize"></div>
              <div className="ide-control maximize"></div>
            </div>
            <div className="flex-1 flex items-center justify-center">
              <span className="text-xs md:text-sm">npm list --depth=0</span>
            </div>
            <div className="flex items-center space-x-2 mr-2 md:mr-4">
              <button className="text-xs hover:text-white">
                <Play className="h-3 w-3" />
              </button>
              <button className="text-xs hover:text-white hidden sm:block">
                <Pause className="h-3 w-3" />
              </button>
              <button className="text-xs hover:text-white hidden sm:block">
                <RotateCcw className="h-3 w-3" />
              </button>
            </div>
          </div>

          <div className="p-4 md:p-6 lg:p-8 overflow-hidden">
            <div className="skills-carousel">
              {duplicatedSkills.map((skill, index) => (
                <div key={index} className="skill-item">
                  <div className="ide-window h-full hover-highlight">
                    <div className="ide-titlebar">
                      <div className="ide-controls">
                        <div className="ide-control close"></div>
                        <div className="ide-control minimize"></div>
                        <div className="ide-control maximize"></div>
                      </div>
                      <div className="flex-1 text-center">
                        <span className="text-xs truncate">{skill.name.toLowerCase()}.pkg</span>
                      </div>
                    </div>

                    <div className="p-3 md:p-4 lg:p-6 flex flex-col items-center space-y-3 md:space-y-4 h-full">
                      <div className="relative">
                        <div className="w-12 h-12 md:w-14 md:h-14 lg:w-16 lg:h-16 ide-window flex items-center justify-center">
                          <img
                            src={skill.logo || "/placeholder.svg"}
                            alt={`${skill.name} logo`}
                            className="w-8 h-8 md:w-9 md:h-9 lg:w-10 lg:h-10"
                          />
                        </div>
                        <div className="status-indicator absolute -top-1 -right-1 md:-top-2 md:-right-2">
                          <div className="status-dot online"></div>
                        </div>
                      </div>

                      <div className="text-center flex-1">
                        <h4 className="font-bold text-sm md:text-base lg:text-lg syntax-function mb-1 truncate">
                          {skill.name}
                        </h4>
                        <p className="text-xs md:text-sm syntax-comment mb-1 md:mb-2">v{skill.version}</p>
                        <p className="text-xs syntax-string mb-2 md:mb-3 truncate">{skill.category}</p>

                        <div className="space-y-1 md:space-y-2">
                          <div className="progress-container">
                            <div className="progress-bar" style={{ width: `${skill.level}%` }}></div>
                          </div>
                          <p className="text-xs syntax-number">{skill.level}% proficiency</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
