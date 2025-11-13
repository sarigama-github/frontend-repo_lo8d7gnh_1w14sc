import Spline from '@splinetool/react-spline'
import { motion } from 'framer-motion'

export default function Hero({ profile }) {
  return (
    <section id="top" className="relative min-h-[92vh] flex items-center overflow-hidden">
      <div className="absolute inset-0">
        <Spline scene="https://prod.spline.design/VJLoxp84lCdVfdZu/scene.splinecode" style={{ width: '100%', height: '100%' }} />
      </div>

      <div className="absolute inset-0 bg-gradient-to-b from-white/70 via-white/40 to-white/80 pointer-events-none" />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24 w-full">
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-4xl sm:text-6xl font-extrabold tracking-tight text-gray-900"
        >
          {profile?.name || 'Gautham'} builds playful, modern, human-tech experiences.
        </motion.h1>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.15, duration: 0.6 }}
          className="mt-6 max-w-2xl text-lg text-gray-700"
        >
          Engineer. Designer. Builder. I turn ideas into delightful, interactive products. Scroll to explore.
        </motion.p>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3, duration: 0.6 }}
          className="mt-10 flex flex-wrap gap-3"
        >
          <a href="#projects" className="inline-flex items-center px-5 py-2.5 rounded-full bg-gray-900 text-white font-medium hover:bg-gray-800 transition">
            View Projects
          </a>
          <a href="#contact" className="inline-flex items-center px-5 py-2.5 rounded-full bg-white border border-gray-300 text-gray-900 font-medium hover:bg-gray-50 transition">
            Get in touch
          </a>
        </motion.div>
      </div>
    </section>
  )
}
