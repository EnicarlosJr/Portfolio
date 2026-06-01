import React, { useState } from 'react'
import { Github, Linkedin, Mail, Phone } from 'lucide-react'
import SectionHeader from '../components/SectionHeader'
import { profile } from '../data/profile'

export default function Contact() {
  const [form, setForm] = useState({ name: '', email: '', message: '' })
  const [status, setStatus] = useState('')

  const handleSubmit = async (event) => {
    event.preventDefault()
    if (!form.name || !form.email || !form.message) {
      setStatus('Preencha todos os campos antes de enviar.')
      return
    }

    setStatus('Enviando...')
    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(form),
      })

      if (!response.ok) throw new Error('Falha no envio')
      setStatus('Mensagem enviada. Obrigado pelo contato.')
      setForm({ name: '', email: '', message: '' })
    } catch (error) {
      const subject = encodeURIComponent(`Contato via portfolio - ${form.name}`)
      const body = encodeURIComponent(`${form.message}\n\nContato: ${form.email}`)
      window.location.href = `mailto:${profile.email}?subject=${subject}&body=${body}`
      setStatus('A funcao serverless nao respondeu localmente. Abrindo e-mail como fallback.')
    }
  }

  return (
    <section className="space-y-8">
      <SectionHeader kicker="Contato" title="Conversa direta e verificavel">
        Para oportunidades junior/remotas, entrevistas tecnicas, projetos web e colaboracoes em Python/Django.
      </SectionHeader>

      <div className="grid gap-6 lg:grid-cols-[1fr_0.85fr]">
        <form className="panel space-y-4 p-5" onSubmit={handleSubmit}>
          <label className="block text-sm text-slate-200">
            Nome
            <input
              required
              className="focus-ring mt-2 w-full rounded-md border border-white/10 bg-slate-950 px-4 py-3 text-slate-100"
              placeholder="Seu nome"
              value={form.name}
              onChange={(event) => setForm({ ...form, name: event.target.value })}
            />
          </label>
          <label className="block text-sm text-slate-200">
            E-mail
            <input
              required
              type="email"
              className="focus-ring mt-2 w-full rounded-md border border-white/10 bg-slate-950 px-4 py-3 text-slate-100"
              placeholder="voce@empresa.com"
              value={form.email}
              onChange={(event) => setForm({ ...form, email: event.target.value })}
            />
          </label>
          <label className="block text-sm text-slate-200">
            Mensagem
            <textarea
              required
              rows="5"
              className="focus-ring mt-2 w-full rounded-md border border-white/10 bg-slate-950 px-4 py-3 text-slate-100"
              placeholder="Contexto da vaga ou projeto"
              value={form.message}
              onChange={(event) => setForm({ ...form, message: event.target.value })}
            />
          </label>
          <button className="focus-ring rounded-full bg-primary px-6 py-3 font-semibold text-slate-950 transition hover:bg-emerald-300">
            Enviar por e-mail
          </button>
          {status && <p className="text-sm text-emerald-300">{status}</p>}
        </form>

        <aside className="panel p-5">
          <h3 className="text-xl font-semibold text-white">Canais</h3>
          <div className="mt-5 space-y-4 text-sm text-slate-300">
            <a href={`mailto:${profile.email}`} className="focus-ring flex items-center gap-3 rounded hover:text-white">
              <Mail className="h-4 w-4" aria-hidden="true" /> {profile.email}
            </a>
            <a href={`tel:${profile.phone.replace(/\D/g, '')}`} className="focus-ring flex items-center gap-3 rounded hover:text-white">
              <Phone className="h-4 w-4" aria-hidden="true" /> {profile.phone}
            </a>
            <a href={profile.linkedin} target="_blank" rel="noreferrer" className="focus-ring flex items-center gap-3 rounded hover:text-white">
              <Linkedin className="h-4 w-4" aria-hidden="true" /> LinkedIn
            </a>
            <a href={profile.github} target="_blank" rel="noreferrer" className="focus-ring flex items-center gap-3 rounded hover:text-white">
              <Github className="h-4 w-4" aria-hidden="true" /> GitHub
            </a>
          </div>
          <div className="surface mt-6 p-4 text-sm leading-6 text-slate-300">
            Resposta esperada em 24-48h. Interesse principal: vagas junior, backend Python/Django, full stack web,
            suporte tecnico com desenvolvimento e produtos de saude digital.
          </div>
        </aside>
      </div>
    </section>
  )
}
