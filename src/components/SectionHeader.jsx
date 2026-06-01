import React from 'react'

export default function SectionHeader({ kicker, title, children }) {
  return (
    <div className="max-w-3xl">
      {kicker && <p className="eyebrow">{kicker}</p>}
      <h2 className="mt-2 text-2xl font-semibold text-white sm:text-3xl">{title}</h2>
      {children && <p className="mt-3 text-sm leading-7 text-slate-300 sm:text-base">{children}</p>}
    </div>
  )
}
