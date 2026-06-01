import React from 'react'
import { metrics } from '../data/profile'

export default function MetricGrid() {
  return (
    <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-4">
      {metrics.map((metric) => (
        <div key={metric.label} className="panel p-4">
          <p className="text-xs uppercase tracking-widest text-slate-400">{metric.label}</p>
          <p className="mt-3 text-3xl font-semibold text-white">{metric.value}</p>
          <p className="mt-1 text-sm text-slate-300">{metric.detail}</p>
        </div>
      ))}
    </div>
  )
}
