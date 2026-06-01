import React from 'react'
import { Link } from 'react-router-dom'
import { Mail, Phone } from 'lucide-react'
import SectionHeader from '../components/SectionHeader'
import { experiences, profile, projects, recruiterSignals } from '../data/profile'

export default function RecruiterMode() {
  return (
    <section className="space-y-8">
      <SectionHeader kicker="Modo Recrutador" title="Full Stack Junior pronto para primeiro cargo">
        Python/Django no backend, React/JavaScript no frontend. Experiência real em saúde digital (Farmácia Escola com 100+ pacientes/mês). Estágio em progresso na DECOM. Busca vagas de developer ou backend especialista.
      </SectionHeader>

      <div className="grid gap-4 lg:grid-cols-[1fr_0.8fr]">
        <div className="panel p-5">
          <h3 className="text-xl font-semibold text-white">Por que chamar para entrevista</h3>
          <ul className="mt-4 space-y-3">
            {recruiterSignals.map((item) => (
              <li key={item} className="text-sm leading-6 text-slate-300">{item}</li>
            ))}
          </ul>
        </div>
        <div className="panel p-5">
          <h3 className="text-xl font-semibold text-white">Contato direto</h3>
          <div className="mt-4 space-y-3 text-sm text-slate-300">
            <a href={`mailto:${profile.email}`} className="focus-ring flex items-center gap-2 rounded text-slate-300 hover:text-white">
              <Mail className="h-4 w-4" aria-hidden="true" /> {profile.email}
            </a>
            <a href={`tel:${profile.phone.replace(/\D/g, '')}`} className="focus-ring flex items-center gap-2 rounded text-slate-300 hover:text-white">
              <Phone className="h-4 w-4" aria-hidden="true" /> {profile.phone}
            </a>
            <p>{profile.location}</p>
            <p>{profile.availability}</p>
          </div>
        </div>
      </div>

      <div className="grid gap-4 md:grid-cols-2">
        {experiences.map((experience) => (
          <article key={experience.company} className="panel p-5">
            <p className="eyebrow">{experience.period}</p>
            <h3 className="mt-2 font-semibold text-white">{experience.role}</h3>
            <p className="mt-3 text-sm leading-6 text-slate-300">{experience.impact}</p>
          </article>
        ))}
      </div>

      <section className="panel p-5">
        <h3 className="text-xl font-semibold text-white">Projeto principal para avaliar</h3>
        <p className="mt-3 text-sm leading-6 text-slate-300">{projects.find((project) => project.id === 'farmacia')?.summary || projects[0].summary}</p>
        <Link to="/projects/farmacia" className="focus-ring mt-5 inline-flex rounded-full bg-primary px-5 py-3 text-sm font-semibold text-slate-950 transition hover:bg-emerald-300">
          Abrir case completo
        </Link>
      </section>
    </section>
  )
}
