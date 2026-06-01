import React from 'react'
import { Routes, Route, Link } from 'react-router-dom'
import { Briefcase } from 'lucide-react'
import Navbar from './components/Navbar'
import Home from './pages/Home'
import About from './pages/About'
import Experience from './pages/Experience'
import Projects from './pages/Projects'
import ProjectDetail from './pages/ProjectDetail'
import SecurityLab from './pages/SecurityLab'
import RecruiterMode from './pages/RecruiterMode'
import Contact from './pages/Contact'
import FloatingTerminal from './components/FloatingTerminal'
import SEO from './components/SEO'

export default function App() {
  return (
    <div className="min-h-screen text-slate-100">
      <SEO />
      <Navbar />
      <main className="mx-auto max-w-6xl px-4 py-8 sm:px-6 lg:py-12">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/experience" element={<Experience />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="/projects/:id" element={<ProjectDetail />} />
          <Route path="/security" element={<SecurityLab />} />
          <Route path="/recruiter" element={<RecruiterMode />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </main>
      <div className="fixed bottom-4 right-4 z-50 sm:bottom-6 sm:right-6">
        <Link
          to="/recruiter"
          className="focus-ring inline-flex items-center gap-2 rounded-full bg-primary px-4 py-3 text-sm font-semibold text-slate-950 shadow-2xl shadow-emerald-950/40 transition hover:bg-emerald-300"
        >
          <Briefcase className="h-4 w-4" aria-hidden="true" />
          Modo Recrutador
        </Link>
      </div>
      <FloatingTerminal />
    </div>
  )
}
