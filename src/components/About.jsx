import { useEffect, useState } from 'react'

const BACKEND = import.meta.env.VITE_BACKEND_URL || 'http://localhost:8000'

export default function About() {
  const [profile, setProfile] = useState(null)

  useEffect(() => {
    fetch(`${BACKEND}/profile?username=heyitsgautham`).then((r) => r.json()).then(setProfile)
  }, [])

  return (
    <section id="about" className="relative py-20">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl sm:text-4xl font-bold tracking-tight mb-6">About</h2>
        <div className="grid md:grid-cols-3 gap-8 items-start">
          <img src={profile?.avatar_url} alt={profile?.name} className="w-40 h-40 rounded-2xl object-cover shadow-lg md:col-span-1" />
          <div className="md:col-span-2">
            <p className="text-gray-700 leading-relaxed">
              I'm {profile?.name || 'Gautham'}. I craft engaging interfaces and robust systems end‑to‑end. You’ll often find me shipping, iterating, and obsessing over the last 1% polish.
            </p>
            <div className="mt-6 text-sm text-gray-600 space-y-1">
              <p><span className="font-medium text-gray-800">Location:</span> {profile?.location || '—'}</p>
              <p><span className="font-medium text-gray-800">Company:</span> {profile?.company || '—'}</p>
              <p>
                <span className="font-medium text-gray-800">Links:</span>
                {' '}
                <a className="text-blue-600 hover:underline" href={`https://github.com/heyitsgautham`} target="_blank">GitHub</a>
                {' · '}
                <a className="text-blue-600 hover:underline" href={`https://www.linkedin.com/in/heyitsgautham`} target="_blank">LinkedIn</a>
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
