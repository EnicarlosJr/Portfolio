import React from 'react'
import { Link, useParams } from 'react-router-dom'
import { ArrowLeft, CheckCircle2, Github } from 'lucide-react'
import SectionHeader from '../components/SectionHeader'
import { projects } from '../data/profile'

export default function ProjectDetail() {
  const { id } = useParams()
  const project = projects.find((item) => item.id === id) || projects[0]

  return (
    <section className="space-y-8">
      <Link to="/projects" className="focus-ring inline-flex items-center gap-2 rounded-full text-sm text-slate-300 hover:text-white">
        <ArrowLeft className="h-4 w-4" aria-hidden="true" /> Voltar para projetos
      </Link>

      <SectionHeader kicker={project.category} title={project.title}>
        {project.summary}
      </SectionHeader>

      {project.repository && (
        <a
          href={project.repository}
          target="_blank"
          rel="noreferrer"
          className="focus-ring inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/5 px-4 py-2 text-sm font-semibold text-slate-200 transition hover:bg-white/10"
        >
          <Github className="h-4 w-4" aria-hidden="true" />
          Ver repositorio
        </a>
      )}

      {project.tcc && (
        <div className="panel p-5 border-l-4 border-blue-500">
          <p className="eyebrow text-blue-300">Trabalho de Conclusão de Curso</p>
          <h4 className="mt-2 text-base font-semibold text-white">{project.tcc.title}</h4>
          <p className="mt-1 text-sm text-slate-400">{project.tcc.description}</p>
          <p className="mt-2 text-sm font-medium text-slate-300">Status: <span className="text-emerald-400">{project.tcc.status}</span></p>
          <div className="mt-3 flex flex-wrap gap-2">
            {project.tcc.keywords.map((keyword) => (
              <span key={keyword} className="text-xs bg-blue-500/20 text-blue-300 px-2 py-1 rounded">{keyword}</span>
            ))}
          </div>
        </div>
      )}

      <div className="grid gap-4 lg:grid-cols-3">
        <div className="panel p-5">
          <p className="eyebrow">Problema</p>
          <p className="mt-3 text-sm leading-6 text-slate-300">{project.problem}</p>
        </div>
        <div className="panel p-5">
          <p className="eyebrow">Solucao</p>
          <p className="mt-3 text-sm leading-6 text-slate-300">{project.solution}</p>
        </div>
        <div className="panel p-5">
          <p className="eyebrow">Stack</p>
          <div className="mt-3 flex flex-wrap gap-2">
            {project.stack.map((tech) => (
              <span key={tech} className="tag">{tech}</span>
            ))}
          </div>
        </div>
      </div>

      <div className="grid gap-6 lg:grid-cols-[1.05fr_0.95fr]">
        <div className="space-y-4">
          <h3 className="text-xl font-semibold text-white">Arquitetura e decisoes</h3>
          <div className="grid gap-3">
            {project.architecture.map((item) => (
              <div key={item} className="surface p-4 text-sm leading-6 text-slate-300">{item}</div>
            ))}
          </div>
        </div>
        <div className="space-y-4">
          <h3 className="text-xl font-semibold text-white">Impacto demonstravel</h3>
          <div className="grid gap-3">
            {project.impact.map((item) => (
              <div key={item} className="flex gap-3 rounded-lg border border-white/10 bg-white/5 p-4 text-sm leading-6 text-slate-300">
                <CheckCircle2 className="mt-0.5 h-4 w-4 shrink-0 text-emerald-300" aria-hidden="true" />
                <span>{item}</span>
              </div>
            ))}
          </div>
        </div>
      </div>

      <section className="panel p-5">
        <p className="eyebrow">Roadmap tecnico do projeto</p>
        <div className="mt-4 grid gap-3 sm:grid-cols-2 lg:grid-cols-4">
          {project.nextSteps.map((step) => (
            <div key={step} className="surface p-3 text-sm text-slate-300">{step}</div>
          ))}
        </div>
      </section>
    </section>
  )
}
