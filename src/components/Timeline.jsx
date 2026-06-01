import React from 'react'
import { timeline } from '../data/profile'

export default function Timeline() {
  return (
    <div className="relative">
      <div className="absolute left-4 top-0 hidden h-full w-px bg-gradient-to-b from-emerald-300 via-white/20 to-transparent sm:block" />
      <div className="space-y-4">
        {timeline.map((item, index) => (
          <article key={`${item.title}-${item.year}`} className="relative grid gap-4 sm:grid-cols-[2.5rem_1fr]">
            <div className="hidden sm:flex">
              <span className="relative z-10 mt-5 flex h-8 w-8 items-center justify-center rounded-full border border-emerald-300/50 bg-slate-950 text-xs font-bold text-emerald-200">
                {index + 1}
              </span>
            </div>
            <div className="panel p-5">
              <div className="flex flex-col gap-2 sm:flex-row sm:items-start sm:justify-between">
                <div>
                  <p className="eyebrow">{item.year}</p>
                  <h3 className="mt-2 text-lg font-semibold text-white">{item.title}</h3>
                  <p className="mt-1 text-sm text-emerald-200">{item.subtitle}</p>
                </div>
              </div>
              <p className="mt-3 text-sm leading-6 text-slate-300">{item.description}</p>
            </div>
          </article>
        ))}
      </div>
    </div>
  )
}
