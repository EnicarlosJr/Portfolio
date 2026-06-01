import React from 'react'
import { Link, NavLink } from 'react-router-dom'
import { Github, Linkedin } from 'lucide-react'
import { profile } from '../data/profile'

const NavItem = ({ to, children }) => (
  <NavLink
    to={to}
    className={({ isActive }) =>
      `focus-ring rounded-md px-3 py-2 text-sm transition ${
        isActive ? 'bg-white/10 text-white' : 'text-slate-300 hover:bg-white/10 hover:text-white'
      }`
    }
  >
    {children}
  </NavLink>
)

export default function Navbar() {
  return (
    <header className="sticky top-0 z-40 border-b border-white/10 bg-slate-950/80 backdrop-blur-xl">
      <div className="mx-auto flex max-w-6xl flex-wrap items-center justify-between gap-3 px-4 py-4 sm:px-6">
        <Link to="/" className="focus-ring rounded text-lg font-bold tracking-wide text-white">
          {profile.displayName}
        </Link>
        <nav className="flex flex-wrap items-center gap-1">
          <NavItem to="/">Home</NavItem>
          <NavItem to="/about">Sobre</NavItem>
          <NavItem to="/experience">Experiencia</NavItem>
          <NavItem to="/projects">Projetos</NavItem>
          <NavItem to="/security">Security Lab</NavItem>
          <NavItem to="/contact">Contato</NavItem>
        </nav>
        <div className="flex items-center gap-2">
          <a href={profile.github} target="_blank" rel="noreferrer" aria-label="GitHub" className="focus-ring rounded-full bg-white/5 p-2 text-slate-300 hover:bg-white/10">
            <Github size={18} />
          </a>
          <a href={profile.linkedin} target="_blank" rel="noreferrer" aria-label="LinkedIn" className="focus-ring rounded-full bg-white/5 p-2 text-slate-300 hover:bg-white/10">
            <Linkedin size={18} />
          </a>
        </div>
      </div>
    </header>
  )
}
