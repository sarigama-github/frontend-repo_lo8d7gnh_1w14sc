import { useEffect, useState } from 'react'
import { Menu, Github, Linkedin } from 'lucide-react'

const links = [
  { href: '#about', label: 'About' },
  { href: '#projects', label: 'Projects' },
  { href: '#contact', label: 'Contact' },
]

export default function Navbar({ profile }) {
  const [open, setOpen] = useState(false)

  useEffect(() => {
    const close = () => setOpen(false)
    window.addEventListener('hashchange', close)
    return () => window.removeEventListener('hashchange', close)
  }, [])

  return (
    <header className="fixed top-0 inset-x-0 z-50 backdrop-blur supports-[backdrop-filter]:bg-white/60 bg-white/70 border-b border-white/30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">
        <a href="#top" className="font-bold text-lg tracking-tight">
          {profile?.name ? profile.name.split(' ')[0] : 'Gautham'}
          <span className="text-blue-600">.</span>
        </a>

        <nav className="hidden md:flex items-center gap-8">
          {links.map((l) => (
            <a key={l.href} href={l.href} className="text-sm font-medium text-gray-700 hover:text-gray-900 transition-colors">
              {l.label}
            </a>
          ))}
          <div className="h-6 w-px bg-gray-300" />
          <a href={profile?.html_url || 'https://github.com/heyitsgautham'} target="_blank" rel="noreferrer" aria-label="GitHub" className="text-gray-700 hover:text-gray-900">
            <Github size={20} />
          </a>
          <a href={`https://www.linkedin.com/in/heyitsgautham`} target="_blank" rel="noreferrer" aria-label="LinkedIn" className="text-gray-700 hover:text-gray-900">
            <Linkedin size={20} />
          </a>
        </nav>

        <button onClick={() => setOpen(!open)} className="md:hidden inline-flex items-center justify-center p-2 rounded-md text-gray-700 hover:bg-gray-100">
          <Menu />
        </button>
      </div>

      {open && (
        <div className="md:hidden border-t border-white/30 bg-white/80 backdrop-blur">
          <div className="px-4 py-3 space-y-2">
            {links.map((l) => (
              <a key={l.href} href={l.href} className="block text-sm font-medium text-gray-700 hover:text-gray-900">
                {l.label}
              </a>
            ))}
          </div>
        </div>
      )}
    </header>
  )
}
