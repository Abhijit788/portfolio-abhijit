"use client"

import CodeBackground from "./components/CodeBackground"
import EnhancedHeader from "./components/EnhancedHeader"
import EnhancedAbout from "./components/EnhancedAbout"
import Skills from "./components/Skills"
import Projects from "./components/Projects"
import Experience from "./components/Experience"
import Education from "./components/Education"
import Blog from "./components/Blog"
import Contact from "./components/Contact"
import ScrollProgress from "./components/scroll-progress"
import SpotlightCursor from "./components/spotlight-cursor"

export default function Home() {
  return (
    <main className="min-h-screen bg-gray-900 text-gray-100 relative overflow-hidden">
      <SpotlightCursor />
      <ScrollProgress />
      <CodeBackground />
      <EnhancedHeader />
      <EnhancedAbout />
      <Skills />
      <Projects />
      <Experience />
      <Education />
      <Blog />
      <Contact />
    </main>
  )
}
