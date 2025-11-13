import { useEffect, useState } from 'react'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import About from './components/About'
import Projects from './components/Projects'
import Contact from './components/Contact'

const BACKEND = import.meta.env.VITE_BACKEND_URL || 'http://localhost:8000'

function App() {
  const [profile, setProfile] = useState(null)

  useEffect(() => {
    fetch(`${BACKEND}/profile?username=heyitsgautham`).then((r) => r.json()).then(setProfile)
  }, [])

  return (
    <div className="min-h-screen bg-white">
      <Navbar profile={profile} />
      <main>
        <Hero profile={profile} />
        <About />
        <Projects />
        <Contact />
      </main>
      <footer className="py-10 text-center text-sm text-gray-500">
        © {new Date().getFullYear()} {profile?.name || 'Gautham'} — Built with love and a splash of 3D.
      </footer>
    </div>
  )
}

export default App
