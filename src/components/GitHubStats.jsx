import React, { useEffect, useState } from 'react'
import axios from 'axios'

export default function GitHubStats({ username = 'enicarlosjr' }) {
  const [state, setState] = useState({ loading: true, repos: [] })

  useEffect(() => {
    let active = true
    axios
      .get(`https://api.github.com/users/${username}/repos`)
      .then((response) => {
        if (active) setState({ loading: false, repos: response.data })
      })
      .catch(() => {
        if (active) setState({ loading: false, repos: [] })
      })
    return () => {
      active = false
    }
  }, [username])

  return (
    <div className="panel p-4">
      <h3 className="font-semibold text-white">GitHub</h3>
      <p className="mt-2 text-sm text-slate-300">
        {state.loading ? 'Consultando repositorios publicos...' : `Repositorios publicos: ${state.repos.length}`}
      </p>
    </div>
  )
}
