import React, { useMemo, useState } from 'react'
import { techMap } from '../data/profile'

const colors = {
  Backend: '#34d399',
  Frontend: '#38bdf8',
  Dados: '#fbbf24',
  Produto: '#f472b6',
  Qualidade: '#a78bfa',
  Entrega: '#f97316',
}

export default function TechGraph() {
  const [activeId, setActiveId] = useState('django')
  const active = techMap.nodes.find((node) => node.id === activeId)
  const linked = useMemo(() => {
    return new Set(
      techMap.links
        .filter(([source, target]) => source === activeId || target === activeId)
        .flat()
    )
  }, [activeId])

  return (
    <div className="panel p-5">
      <div className="flex flex-col gap-3 sm:flex-row sm:items-start sm:justify-between">
        <div>
          <p className="eyebrow">Mapa interativo</p>
          <h3 className="mt-2 text-xl font-semibold text-white">Conexao entre stack, produto e entrega</h3>
        </div>
        {active && <span className="tag">{active.group}</span>}
      </div>

      <div className="mt-5 grid gap-5 lg:grid-cols-[1fr_0.42fr]">
        <svg viewBox="0 0 100 100" role="img" aria-label="Mapa interativo de tecnologias" className="min-h-80 w-full rounded-lg border border-white/10 bg-slate-950/60">
          {techMap.links.map(([sourceId, targetId]) => {
            const source = techMap.nodes.find((node) => node.id === sourceId)
            const target = techMap.nodes.find((node) => node.id === targetId)
            const highlighted = linked.has(sourceId) && linked.has(targetId)
            return (
              <line
                key={`${sourceId}-${targetId}`}
                x1={source.x}
                y1={source.y}
                x2={target.x}
                y2={target.y}
                stroke={highlighted ? '#6ee7b7' : 'rgba(148,163,184,0.28)'}
                strokeWidth={highlighted ? 0.8 : 0.35}
              />
            )
          })}
          {techMap.nodes.map((node) => {
            const activeNode = node.id === activeId
            const related = linked.has(node.id)
            return (
              <g key={node.id} className="cursor-pointer" onClick={() => setActiveId(node.id)} onMouseEnter={() => setActiveId(node.id)}>
                <circle
                  cx={node.x}
                  cy={node.y}
                  r={activeNode ? 5.8 : 4.8}
                  fill={colors[node.group] || '#cbd5e1'}
                  opacity={activeNode || related ? 1 : 0.55}
                />
                <text
                  x={node.x}
                  y={node.y + 9}
                  textAnchor="middle"
                  fill={activeNode || related ? '#f8fafc' : '#94a3b8'}
                  fontSize="3"
                >
                  {node.label}
                </text>
              </g>
            )
          })}
        </svg>

        <div className="space-y-3">
          <div className="surface p-4">
            <p className="text-sm font-semibold text-white">{active?.label}</p>
            <p className="mt-2 text-sm leading-6 text-slate-300">
              Clique ou passe o mouse nos nos para ver como as tecnologias se conectam na entrega de sistemas web.
            </p>
          </div>
          <div className="grid gap-2">
            {techMap.nodes.map((node) => (
              <button
                key={node.id}
                type="button"
                onClick={() => setActiveId(node.id)}
                className={`focus-ring rounded-md border px-3 py-2 text-left text-sm transition ${
                  node.id === activeId ? 'border-emerald-300 bg-emerald-300/10 text-white' : 'border-white/10 bg-white/5 text-slate-300 hover:bg-white/10'
                }`}
              >
                {node.label}
              </button>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}
