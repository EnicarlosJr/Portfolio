import React from 'react'
import SectionHeader from '../components/SectionHeader'
import { experiences, profile, stackGroups } from '../data/profile'

export default function About() {
  return (
    <section className="space-y-8">
      <SectionHeader kicker="Sobre" title="Desenvolvedor Full Stack com foco em impacto real">
        Não sou só escritor de código. Sou alguém que entende que tecnologia é ferramenta para resolver problemas: processos manuais vira sistema, dados dispersos viram insight, fluxos confusos viram intuitividade.
      </SectionHeader>

      <div className="grid gap-6 lg:grid-cols-[1.05fr_0.95fr]">
        <div className="panel p-5">
          <h3 className="text-xl font-semibold text-white">Resumo profissional</h3>
          <p className="mt-4 text-sm leading-7 text-slate-300">
            Estudante de Sistemas de Informação (conclusão Jul/2026) com experiência prática em desenvolvimento full stack. Criei Sistema Web Farmácia Escola em Django/PostgreSQL que atende clínica real com 100+ pacientes/mês. Também tenho experiência em agência web (Dacta) entregando componentes responsivos de alta qualidade e em estágio na DECOM evoluindo portal institucional existente. Meu diferencial: experiência em problema real, entender usuário final, e codificar pensando em escalabilidade.
          </p>
        </div>
        <div className="panel p-5">
          <h3 className="text-xl font-semibold text-white">Formacao</h3>
          <p className="mt-4 text-sm leading-7 text-slate-300">
            <strong>{profile.education.course}</strong><br />
            {profile.education.institution}<br />
            Conclusão prevista em <strong>{profile.education.completion}</strong>
          </p>
          <p className="mt-4 text-sm leading-7 text-slate-300 text-emerald-300">
            ✓ Disciplinas: Engenharia de Software, Banco de Dados, Redes, APIs REST, Metodologias Ágeis
          </p>
        </div>
      </div>

      <section className="space-y-4">
        <h3 className="text-xl font-semibold text-white">Experiências</h3>
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
