"use client"

import { AnimatePresence } from "framer-motion"
import CodeBackground from "./components/CodeBackground"
import EnhancedHeader from "./components/EnhancedHeader"
import EnhancedAbout from "./components/EnhancedAbout"
import Skills from "./components/Skills"
import Projects from "./components/Projects"
import Experience from "./components/Experience"
import Education from "./components/Education"
import Blog from "./components/Blog"
import Contact from "./components/Contact"

export default function Home() {
  return (
    <AnimatePresence>
      <main className="min-h-screen bg-gray-900 text-gray-100 relative overflow-hidden">
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
    </AnimatePresence>
  )
}
