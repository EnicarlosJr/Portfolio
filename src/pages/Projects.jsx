import React from 'react'
import ProjectCard from '../components/ProjectCard'
import SectionHeader from '../components/SectionHeader'
import { projects } from '../data/profile'

export default function Projects() {
  return (
    <section className="space-y-8">
      <SectionHeader kicker="Portfolio" title="Projetos priorizados por empregabilidade">
        Para vagas junior, o valor esta em demonstrar problema real, decisao tecnica, trade-offs e evolucao planejada.
      </SectionHeader>
      <div className="grid gap-4 md:grid-cols-2">
        {projects.map((project) => (
          <ProjectCard key={project.id} project={project} />
        ))}
      </div>
    </section>
  )
}
