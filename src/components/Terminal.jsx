import React, { useState } from 'react'
import { profile } from '../data/profile'

const outputFor = (cmd) => {
  const normalized = cmd.toLowerCase()
  const map = {
    help: 'Comandos: about, stack, projects, contact, gaps',
    about: `${profile.displayName} - Full Stack Junior focado em Python/Django, React, sistemas web e saude digital.`,
    stack: 'Backend: Python, Django, DRF, PostgreSQL\nFrontend: React, JavaScript, Tailwind\nEntrega: Git, Scrum, acessibilidade, dados',
    projects: 'decom: portal institucional em Django com convites e autenticacao\nfarmacia: sistema clinico com Django/PostgreSQL\ncms: gerenciador de artigos e conteudo',
    contact: `${profile.email}\n${profile.linkedin}\n${profile.github}`,
    gaps: 'Prioridades tecnicas: testes automatizados, Docker, CI/CD, deploy publico e READMEs com evidencias.',
  }
  return map[normalized] || `${cmd}: comando nao encontrado. Digite help.`
}

export default function Terminal({ embedded = false }) {
  const [history, setHistory] = useState(['Bem-vindo. Digite help para explorar o perfil.'])
  const [input, setInput] = useState('')

  const run = (event) => {
    event.preventDefault()
    const cmd = input.trim()
    if (!cmd) return
    setHistory((items) => [...items, `> ${cmd}`, outputFor(cmd)])
    setInput('')
  }

  return (
    <div className={`${embedded ? '' : 'panel'} font-mono text-sm ${embedded ? '' : 'p-4'}`}>
      <div className="h-56 overflow-auto rounded-md bg-black/40 p-4 text-slate-200" aria-live="polite">
        {history.map((line, index) => (
          <div key={`${line}-${index}`} className="whitespace-pre-wrap leading-6">{line}</div>
        ))}
      </div>
      <form onSubmit={run} className="mt-3 flex flex-col gap-2 sm:flex-row">
        <input
          className="focus-ring min-w-0 flex-1 rounded-md border border-white/10 bg-slate-950 px-3 py-2 text-slate-100"
          value={input}
          onChange={(event) => setInput(event.target.value)}
          placeholder="comando"
          aria-label="Comando do terminal"
        />
        <button className="focus-ring rounded-md bg-primary px-4 py-2 font-semibold text-slate-950 transition hover:bg-emerald-300">
          Executar
        </button>
      </form>
    </div>
  )
}
