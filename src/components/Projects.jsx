import { useEffect, useState } from 'react'
import { Star, ExternalLink, Github } from 'lucide-react'

const BACKEND = import.meta.env.VITE_BACKEND_URL || 'http://localhost:8000'

export default function Projects({ username = 'heyitsgautham' }) {
  const [repos, setRepos] = useState([])
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    fetch(`${BACKEND}/repos?username=${username}&limit=8`)
      .then((r) => r.json())
      .then((data) => {
        setRepos(data.repos || [])
      })
      .finally(() => setLoading(false))
  }, [username])

  return (
    <section id="projects" className="relative py-20 bg-gradient-to-b from-white to-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-end justify-between mb-10">
          <h2 className="text-3xl sm:text-4xl font-bold tracking-tight">Highlighted Projects</h2>
          <a href={`https://github.com/${username}`} target="_blank" className="inline-flex items-center gap-2 text-sm text-gray-600 hover:text-gray-900">
            <Github size={18} /> View GitHub
          </a>
        </div>

        {loading ? (
          <p className="text-gray-600">Loading repositories...</p>
        ) : (
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {repos.map((r) => (
              <a key={r.url} href={r.homepage || r.url} target="_blank" rel="noreferrer" className="group rounded-2xl border border-gray-200 bg-white p-5 hover:shadow-xl transition">
                <div className="flex items-start justify-between gap-4">
                  <div>
                    <h3 className="text-lg font-semibold group-hover:text-blue-600 transition">{r.name}</h3>
                    <p className="mt-2 text-sm text-gray-600 line-clamp-3">{r.description || 'No description provided.'}</p>
                    <div className="mt-4 flex items-center gap-3 text-xs text-gray-500">
                      {r.language && <span>{r.language}</span>}
                      <span className="inline-flex items-center gap-1"><Star size={14} className="text-amber-500" /> {r.stars}</span>
                      {Array.isArray(r.topics) && r.topics.slice(0,3).map((t) => (
                        <span key={t} className="px-2 py-0.5 rounded-full bg-gray-100 text-gray-700">{t}</span>
                      ))}
                    </div>
                  </div>
                  <ExternalLink className="opacity-0 group-hover:opacity-100 transition" size={18} />
                </div>
              </a>
            ))}
          </div>
        )}
      </div>
    </section>
  )
}
