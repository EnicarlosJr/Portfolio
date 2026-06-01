import React from 'react'
import { ArrowUpRight } from 'lucide-react'
import { Link } from 'react-router-dom'

export default function ProjectCard({ project }) {
  return (
    <Link to={`/projects/${project.id}`} className="panel group block p-5 transition hover:-translate-y-1 hover:border-emerald-300/50">
      <div className="flex items-start justify-between gap-4">
        <div>
          <p className="eyebrow">{project.category}</p>
          <h3 className="mt-3 text-xl font-semibold text-white">{project.title}</h3>
        </div>
        <ArrowUpRight className="h-5 w-5 text-slate-400 transition group-hover:text-emerald-300" aria-hidden="true" />
      </div>
      <p className="mt-4 text-sm leading-6 text-slate-300">{project.summary}</p>
      <div className="mt-5 flex flex-wrap gap-2">
        {project.stack.slice(0, 5).map((tech) => (
          <span key={tech} className="tag">{tech}</span>
        ))}
      </div>
    </Link>
  )
}
