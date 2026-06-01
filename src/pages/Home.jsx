import React from 'react'
import { Link } from 'react-router-dom'
import Hero from '../components/Hero'
import MetricGrid from '../components/MetricGrid'
import ProjectCard from '../components/ProjectCard'
import SectionHeader from '../components/SectionHeader'
import TechGraph from '../components/TechGraph'
import { improvementBacklog, projects, recruiterSignals, stackGroups } from '../data/profile'
import { CheckCircle2, ArrowRight } from 'lucide-react'

export default function Home() {
  const farmaciProject = projects.find(p => p.id === 'farmacia')
  const otherProjects = projects.filter(p => p.id !== 'farmacia')

  return (
    <section className="space-y-12">
      <Hero />
      <MetricGrid />

      {/* Case Principal: Farmacia Escola */}
      <section className="space-y-5">
        <SectionHeader kicker="Case principal" title="Sistema Web Farmacia Escola">
          Projeto real de saude digital com Django, PostgreSQL e indicadores operacionais. Experiencia de problema real em ambiente academico.
        </SectionHeader>
        
        <div className="grid gap-6 lg:grid-cols-[1.2fr_0.8fr]">
          <div className="space-y-5">
            <div className="panel p-6 space-y-4">
              <div>
                <p className="eyebrow">Problema</p>
                <p className="mt-2 text-sm leading-6 text-slate-300">{farmaciProject.problem}</p>
              </div>
              <div className="border-t border-white/10 pt-4">
                <p className="eyebrow">Solucao</p>
                <p className="mt-2 text-sm leading-6 text-slate-300">{farmaciProject.solution}</p>
              </div>
              <div className="border-t border-white/10 pt-4">
                <p className="eyebrow">Impacto</p>
                <ul className="mt-3 space-y-2">
                  {farmaciProject.impact.map(item => (
                    <li key={item} className="flex gap-3 text-sm text-slate-300">
                      <CheckCircle2 className="h-4 w-4 flex-shrink-0 text-emerald-500 mt-0.5" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
            
            <Link
              to="/projects/farmacia"
              className="focus-ring inline-flex items-center gap-2 rounded-full bg-indigo-600 px-5 py-3 font-semibold text-white transition hover:bg-indigo-700"
            >
              Ver arquitetura e detalhes <ArrowRight className="h-4 w-4" />
            </Link>
          </div>

          <div className="space-y-5">
            <div className="panel p-5">
              <p className="eyebrow">Stack utilizado</p>
              <div className="mt-4 flex flex-wrap gap-2">
                {farmaciProject.stack.map((tech) => (
                  <span key={tech} className="tag">{tech}</span>
                ))}
              </div>
            </div>

            <div className="panel p-5">
              <p className="eyebrow">Arquitetura</p>
              <ul className="mt-3 space-y-3">
                {farmaciProject.architecture.map((item, i) => (
                  <li key={i} className="text-xs leading-5 text-slate-300 border-l-2 border-indigo-500/50 pl-3">{item}</li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Outros projetos como complemento */}
      <section className="space-y-5">
        <SectionHeader kicker="Outros projetos" title="Explorando diferentes contextos">
          Projetos complementares que reforçam stack e autonomia em diferentes tipos de aplicacoes.
        </SectionHeader>
        <div className="grid gap-4 md:grid-cols-2">
          {otherProjects.map((project) => (
            <ProjectCard key={project.id} project={project} />
          ))}
        </div>
      </section>

      {/* Recruiter signals e contexto rapido */}
      <section className="grid gap-6 lg:grid-cols-[0.95fr_1.05fr]">
        <SectionHeader kicker="Leitura em 30 segundos" title="O que o recrutador deve entender rapido">
          Perfil junior com experiencia aplicada, boa aderencia a Python/Django e um projeto principal com problema real.
          O portfolio agora mostra evidencia, contexto e proximos passos tecnicos.
        </SectionHeader>
        <div className="grid gap-3">
          {recruiterSignals.map((signal) => (
            <div key={signal} className="panel p-4 text-sm leading-6 text-slate-300">{signal}</div>
          ))}
        </div>
      </section>

      {/* Stack e backlog */}
      <section className="grid gap-6 lg:grid-cols-[1fr_0.9fr]">
        <div className="space-y-5">
          <SectionHeader kicker="Stack alvo" title="Competencias posicionadas para 2026">
            Menos lista solta de tecnologias, mais agrupamento por valor para empresas: backend, produto, dados e entrega.
          </SectionHeader>
          <div className="grid gap-3 sm:grid-cols-2">
            {stackGroups.map((group) => (
              <div key={group.title} className="panel p-4">
                <h3 className="font-semibold text-white">{group.title}</h3>
                <div className="mt-4 flex flex-wrap gap-2">
                  {group.skills.map((skill) => (
                    <span key={skill} className="tag">{skill}</span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
        <div className="space-y-5">
          <SectionHeader kicker="Backlog publico" title="Melhorias que aumentam empregabilidade" />
          <div className="grid gap-3">
            {improvementBacklog.map((item) => (
              <div key={item.item} className="panel p-4">
                <div className="flex items-center justify-between gap-3">
                  <p className="text-sm font-semibold text-white">{item.horizon}</p>
                  <span className="tag">Impacto {item.impact}</span>
                </div>
                <p className="mt-3 text-sm leading-6 text-slate-300">{item.item}</p>
                <p className="mt-2 text-xs uppercase tracking-widest text-slate-500">Dificuldade: {item.effort}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <TechGraph />
    </section>
  )
}

