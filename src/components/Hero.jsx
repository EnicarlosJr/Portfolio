import React from 'react'
import { motion } from 'framer-motion'
import { ArrowRight, Download, Github, Linkedin, ShieldCheck } from 'lucide-react'
import { Link } from 'react-router-dom'
import { profile } from '../data/profile'

export default function Hero() {
  return (
    <motion.section
      initial={{ opacity: 0, y: 18 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.55 }}
      className="grid gap-8 lg:grid-cols-[1.15fr_0.85fr] lg:items-center"
    >
      <div className="min-w-0">
        <p className="eyebrow">Portfolio tecnico para recrutadores</p>
        <h1 className="mt-4 max-w-4xl text-4xl font-semibold leading-tight text-white sm:text-6xl">
          {profile.displayName}, {profile.role} com foco em produto real.
        </h1>
        <p className="mt-5 max-w-2xl text-base leading-8 text-slate-300 sm:text-lg">
          {profile.positioning} Meu diferencial mais forte e transformar operacao manual em sistemas web claros,
          rastreaveis e prontos para evoluir.
        </p>
        <div className="mt-8 flex flex-wrap gap-3">
          <Link to="/projects" className="focus-ring inline-flex items-center gap-2 rounded-full bg-primary px-5 py-3 text-sm font-semibold text-slate-950 transition hover:bg-emerald-300">
            Ver projetos <ArrowRight className="h-4 w-4" aria-hidden="true" />
          </Link>
          <Link to="/recruiter" className="focus-ring inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/5 px-5 py-3 text-sm font-semibold text-white transition hover:bg-white/10">
            Resumo para RH
          </Link>
          <a href={`mailto:${profile.email}`} className="focus-ring inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/5 px-5 py-3 text-sm font-semibold text-white transition hover:bg-white/10">
            <Download className="h-4 w-4" aria-hidden="true" /> Solicitar CV
          </a>
        </div>
        <div className="mt-8 flex flex-wrap items-center gap-4 text-sm text-slate-300">
          <a href={profile.github} target="_blank" rel="noreferrer" className="focus-ring inline-flex items-center gap-2 rounded-full text-slate-300 hover:text-white">
            <Github className="h-4 w-4" aria-hidden="true" /> GitHub
          </a>
          <a href={profile.linkedin} target="_blank" rel="noreferrer" className="focus-ring inline-flex items-center gap-2 rounded-full text-slate-300 hover:text-white">
            <Linkedin className="h-4 w-4" aria-hidden="true" /> LinkedIn
          </a>
          <span className="inline-flex items-center gap-2">
            <ShieldCheck className="h-4 w-4 text-emerald-300" aria-hidden="true" /> {profile.location}
          </span>
        </div>
      </div>

      <div className="panel p-4">
        <div className="surface p-4">
          <div className="flex items-center justify-between border-b border-white/10 pb-3">
            <div>
              <p className="text-xs uppercase tracking-widest text-slate-400">Case principal</p>
              <p className="mt-1 font-semibold text-white">Portal DECOM</p>
            </div>
            <span className="rounded-full bg-emerald-400/15 px-3 py-1 text-xs font-semibold text-emerald-200">Django</span>
          </div>
          <div className="mt-5 grid grid-cols-3 gap-3">
            {['Convites', 'Login', 'Landing'].map((item) => (
              <div key={item} className="surface p-3">
                <div className="h-1.5 rounded-full bg-emerald-300" />
                <p className="mt-3 text-xs text-slate-300">{item}</p>
              </div>
            ))}
          </div>
          <div className="mt-5 space-y-3">
            <div className="h-2 rounded-full bg-slate-700">
              <div className="h-2 w-4/5 rounded-full bg-emerald-300" />
            </div>
            <div className="h-2 rounded-full bg-slate-700">
              <div className="h-2 w-2/3 rounded-full bg-amber-300" />
            </div>
            <div className="h-2 rounded-full bg-slate-700">
              <div className="h-2 w-3/4 rounded-full bg-cyan-300" />
            </div>
          </div>
          <div className="mt-5 grid grid-cols-2 gap-3 text-sm">
            <div className="surface p-3">
              <p className="text-slate-400">Backend</p>
              <p className="mt-1 font-semibold text-white">Python + SQL</p>
            </div>
            <div className="surface p-3">
              <p className="text-slate-400">Foco</p>
              <p className="mt-1 font-semibold text-white">Acesso institucional</p>
            </div>
          </div>
        </div>
      </div>
    </motion.section>
  )
}
