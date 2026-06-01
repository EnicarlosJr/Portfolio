import React from 'react'
import SectionHeader from '../components/SectionHeader'
import { experiences, profile, stackGroups } from '../data/profile'

export default function About() {
  return (
    <section className="space-y-8">
      <SectionHeader kicker="Sobre" title="Perfil tecnico e posicionamento">
        {profile.positioning} A narrativa mais forte e: desenvolvedor junior com experiencia pratica em sistema real,
        boa base web e capacidade de conversar com produto, operacao e dados.
      </SectionHeader>

      <div className="grid gap-6 lg:grid-cols-[1.05fr_0.95fr]">
        <div className="panel p-5">
          <h3 className="text-xl font-semibold text-white">Resumo profissional</h3>
          <p className="mt-4 text-sm leading-7 text-slate-300">
             Formado em Sistemas de Informação, com experiência em desenvolvimento web, criação de 
            interfaces responsivas e desenvolvimento de soluções voltadas à área da saúde e educação digital. Conhecimentos em 
            back-end com Python/Django e desenvolvimento front-end com React, JavaScript e tecnologias web modernas. Atuação em 
            projetos acadêmicos e corporativos utilizando metodologias ágeis, integração de sistemas e construção de dashboards 
            interativos.
          </p>
        </div>
        <div className="panel p-5">
          <h3 className="text-xl font-semibold text-white">Formacao</h3>
          <p className="mt-4 text-sm leading-7 text-slate-300">
            {profile.education.course}, {profile.education.institution}. Conclusao prevista em {profile.education.completion}.
          </p>
        </div>
      </div>

      <section className="space-y-4">
        <h3 className="text-xl font-semibold text-white">Linha do tempo</h3>
        <div className="grid gap-4">
          {experiences.map((experience) => (
            <article key={`${experience.company}-${experience.period}`} className="panel p-5">
              <p className="eyebrow">{experience.period}</p>
              <h4 className="mt-2 text-lg font-semibold text-white">{experience.role}</h4>
              <p className="mt-1 text-sm text-emerald-200">{experience.company} - {experience.type}</p>
              <p className="mt-3 text-sm leading-6 text-slate-300">{experience.impact}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="grid gap-4 md:grid-cols-2">
        {stackGroups.map((group) => (
          <div key={group.title} className="panel p-5">
            <h3 className="font-semibold text-white">{group.title}</h3>
            <div className="mt-4 flex flex-wrap gap-2">
              {group.skills.map((skill) => (
                <span key={skill} className="tag">{skill}</span>
              ))}
            </div>
          </div>
        ))}
      </section>
    </section>
  )
}
