import React from 'react'
import SectionHeader from '../components/SectionHeader'
import Timeline from '../components/Timeline'
import { experiences } from '../data/profile'

export default function Experience() {
  return (
    <section className="space-y-8">
      <SectionHeader kicker="Experiencia" title="Entrega profissional e academica aplicada">
        O ponto central e demonstrar que voce ja trabalhou com fluxo, prazo, produto e usuarios reais.
      </SectionHeader>
      <Timeline />
      <div className="space-y-5">
        {experiences.map((experience) => (
          <article key={`${experience.company}-${experience.period}`} className="panel p-5">
            <div className="flex flex-col gap-2 sm:flex-row sm:items-start sm:justify-between">
              <div>
                <p className="eyebrow">{experience.company}</p>
                <h3 className="mt-2 text-xl font-semibold text-white">{experience.role}</h3>
              </div>
              <span className="tag">{experience.period}</span>
            </div>
            <p className="mt-4 text-sm leading-6 text-slate-300">{experience.impact}</p>
            <ul className="mt-5 grid gap-3 md:grid-cols-2">
              {experience.bullets.map((bullet) => (
                <li key={bullet} className="surface p-3 text-sm leading-6 text-slate-300">{bullet}</li>
              ))}
            </ul>
          </article>
        ))}
      </div>
    </section>
  )
}
