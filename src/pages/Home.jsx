import React from 'react'
import Hero from '../components/Hero'
import MetricGrid from '../components/MetricGrid'
import ProjectCard from '../components/ProjectCard'
import SectionHeader from '../components/SectionHeader'
import TechGraph from '../components/TechGraph'
import { improvementBacklog, projects, recruiterSignals, stackGroups } from '../data/profile'

export default function Home() {
  return (
    <section className="space-y-12">
      <Hero />
      <MetricGrid />

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

      <section className="space-y-5">
        <SectionHeader kicker="Case studies" title="Projetos com narrativa de produto">
          A ordem prioriza impacto e verificabilidade: problema, solucao, arquitetura e lacunas assumidas.
        </SectionHeader>
        <div className="grid gap-4 md:grid-cols-2">
          {projects.map((project) => (
            <ProjectCard key={project.id} project={project} />
          ))}
        </div>
      </section>

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
