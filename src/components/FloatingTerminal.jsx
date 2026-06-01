import React, { useState } from 'react'
import { Terminal as TerminalIcon, X } from 'lucide-react'
import Terminal from './Terminal'

export default function FloatingTerminal() {
  const [open, setOpen] = useState(false)

  return (
    <div className="fixed bottom-4 left-4 z-50 sm:bottom-6 sm:left-6">
      {open && (
        <div className="mb-3 w-[calc(100vw-2rem)] max-w-xl overflow-hidden rounded-lg border border-white/15 bg-slate-950/95 shadow-2xl shadow-black/40 backdrop-blur">
          <div className="flex items-center justify-between border-b border-white/10 px-4 py-3">
            <div className="flex items-center gap-2 text-sm font-semibold text-white">
              <TerminalIcon className="h-4 w-4 text-emerald-300" aria-hidden="true" />
              Terminal do portfolio
            </div>
            <button
              type="button"
              onClick={() => setOpen(false)}
              className="focus-ring rounded-full p-1 text-slate-300 hover:bg-white/10 hover:text-white"
              aria-label="Fechar terminal"
            >
              <X className="h-4 w-4" aria-hidden="true" />
            </button>
          </div>
          <div className="p-3">
            <Terminal embedded />
          </div>
        </div>
      )}
      <button
        type="button"
        onClick={() => setOpen((value) => !value)}
        className="focus-ring inline-flex items-center gap-2 rounded-full bg-slate-100 px-4 py-3 text-sm font-semibold text-slate-950 shadow-2xl shadow-black/30 transition hover:bg-white"
        aria-expanded={open}
      >
        <TerminalIcon className="h-4 w-4" aria-hidden="true" />
        Terminal
      </button>
    </div>
  )
}
