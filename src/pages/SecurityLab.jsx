import React from 'react'
import SectionHeader from '../components/SectionHeader'

const topics = [
  {
    title: 'OWASP e APIs',
    description: 'Validacao de entrada, controle de acesso, erros seguros e reducao de superficies comuns de ataque.',
  },
  {
    title: 'Autenticacao',
    description: 'JWT, sessoes, expiracao, renovacao de tokens e protecao contra fluxos de login frageis.',
  },
  {
    title: 'Django seguro',
    description: 'CSRF, configuracao de CORS, permissoes, secrets fora do codigo e hardening para deploy.',
  },
  {
    title: 'Observabilidade',
    description: 'Logs de auditoria, rastreabilidade de acoes e alertas basicos para sistemas administrativos.',
  },
]

const checklist = [
  'Forcar HTTPS e cookies seguros em producao.',
  'Validar payloads no backend e no frontend.',
  'Separar perfis de acesso por papel de usuario.',
  'Documentar variaveis de ambiente e politicas de segredo.',
  'Criar testes para permissoes, formularios e endpoints criticos.',
]

export default function SecurityLab() {
  return (
    <section className="space-y-8">
      <SectionHeader kicker="Security Lab" title="Seguranca aplicada a sistemas web">
        A melhor estrategia para junior nao e prometer profundidade de especialista, e mostrar fundamentos praticos
        usados em sistemas reais.
      </SectionHeader>

      <div className="grid gap-4 md:grid-cols-2">
        {topics.map((item) => (
          <article key={item.title} className="panel p-5">
            <h3 className="font-semibold text-white">{item.title}</h3>
            <p className="mt-3 text-sm leading-6 text-slate-300">{item.description}</p>
          </article>
        ))}
      </div>

      <section className="panel p-5">
        <h3 className="text-xl font-semibold text-white">Checklist para o projeto Farmacia Escola</h3>
        <ul className="mt-5 grid gap-3 md:grid-cols-2">
          {checklist.map((item) => (
            <li key={item} className="surface p-3 text-sm leading-6 text-slate-300">{item}</li>
          ))}
        </ul>
      </section>
    </section>
  )
}
