import { useEffect } from 'react'
import { useLocation } from 'react-router-dom'
import { profile } from '../data/profile'

const pages = {
  '/': {
    title: 'Enicarlos Junior | Desenvolvedor Full Stack Junior',
    description: 'Portfolio de Enicarlos Junior: Python, Django, React, sistemas web, saude digital e projetos reais.',
  },
  '/about': {
    title: 'Sobre | Enicarlos Junior',
    description: 'Perfil profissional, formacao e posicionamento tecnico de Enicarlos Junior.',
  },
  '/experience': {
    title: 'Experiencia | Enicarlos Junior',
    description: 'Timeline profissional com DECOM, UFVJM, Dacta e experiencia aplicada em desenvolvimento web.',
  },
  '/projects': {
    title: 'Projetos | Enicarlos Junior',
    description: 'Estudos de caso de projetos com Django, PostgreSQL, React e sistemas web.',
  },
  '/security': {
    title: 'Security Lab | Enicarlos Junior',
    description: 'Fundamentos de seguranca web aplicados a Django, APIs, autenticacao e sistemas administrativos.',
  },
  '/recruiter': {
    title: 'Modo Recrutador | Enicarlos Junior',
    description: 'Resumo objetivo para recrutadores avaliarem stack, experiencia, projetos e contato.',
  },
  '/contact': {
    title: 'Contato | Enicarlos Junior',
    description: 'Contato profissional de Enicarlos Junior para oportunidades e entrevistas.',
  },
}

function setMeta(name, content, attr = 'name') {
  let element = document.querySelector(`meta[${attr}="${name}"]`)
  if (!element) {
    element = document.createElement('meta')
    element.setAttribute(attr, name)
    document.head.appendChild(element)
  }
  element.setAttribute('content', content)
}

export default function SEO() {
  const location = useLocation()

  useEffect(() => {
    const pathname = location.pathname.startsWith('/projects/') ? '/projects' : location.pathname
    const page = pages[pathname] || pages['/']
    document.title = page.title
    setMeta('description', page.description)
    setMeta('og:title', page.title, 'property')
    setMeta('og:description', page.description, 'property')
    setMeta('og:type', 'website', 'property')

    const ldJson = {
      '@context': 'https://schema.org',
      '@type': 'Person',
      name: profile.name,
      jobTitle: profile.role,
      email: profile.email,
      url: profile.portfolio,
      sameAs: [profile.github, profile.linkedin],
      address: {
        '@type': 'PostalAddress',
        addressLocality: 'Belo Horizonte',
        addressRegion: 'MG',
        addressCountry: 'BR',
      },
    }

    let script = document.querySelector('#person-jsonld')
    if (!script) {
      script = document.createElement('script')
      script.id = 'person-jsonld'
      script.type = 'application/ld+json'
      document.head.appendChild(script)
    }
    script.textContent = JSON.stringify(ldJson)
  }, [location.pathname])

  return null
}
