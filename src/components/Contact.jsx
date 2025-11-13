import { useState } from 'react'

const BACKEND = import.meta.env.VITE_BACKEND_URL || 'http://localhost:8000'

export default function Contact() {
  const [status, setStatus] = useState(null)
  const [loading, setLoading] = useState(false)

  const onSubmit = async (e) => {
    e.preventDefault()
    setLoading(true)
    setStatus(null)

    const form = new FormData(e.currentTarget)
    const payload = {
      name: form.get('name'),
      email: form.get('email'),
      subject: form.get('subject'),
      message: form.get('message'),
    }

    try {
      const r = await fetch(`${BACKEND}/contact`, { method: 'POST', headers: { 'Content-Type': 'application/json' }, body: JSON.stringify(payload) })
      const data = await r.json()
      if (!r.ok) throw new Error(data.detail || 'Failed to send')
      setStatus({ ok: true, msg: 'Thanks! I will get back to you soon.' })
      e.currentTarget.reset()
    } catch (err) {
      setStatus({ ok: false, msg: err.message })
    } finally {
      setLoading(false)
    }
  }

  return (
    <section id="contact" className="relative py-20 bg-gradient-to-t from-white to-gray-50">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl sm:text-4xl font-bold tracking-tight mb-6">Contact</h2>
        <form onSubmit={onSubmit} className="grid grid-cols-1 gap-6 bg-white p-6 rounded-2xl border border-gray-200 shadow-sm">
          <div className="grid sm:grid-cols-2 gap-6">
            <div>
              <label className="block text-sm font-medium text-gray-700">Name</label>
              <input required name="name" className="mt-1 w-full rounded-lg border-gray-300 focus:ring-2 focus:ring-blue-500 focus:border-blue-500" />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700">Email</label>
              <input required type="email" name="email" className="mt-1 w-full rounded-lg border-gray-300 focus:ring-2 focus:ring-blue-500 focus:border-blue-500" />
            </div>
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700">Subject</label>
            <input required name="subject" className="mt-1 w-full rounded-lg border-gray-300 focus:ring-2 focus:ring-blue-500 focus:border-blue-500" />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700">Message</label>
            <textarea required name="message" rows="5" className="mt-1 w-full rounded-lg border-gray-300 focus:ring-2 focus:ring-blue-500 focus:border-blue-500" />
          </div>
          <div className="flex items-center gap-3">
            <button disabled={loading} className="inline-flex items-center px-5 py-2.5 rounded-full bg-gray-900 text-white font-medium hover:bg-gray-800 disabled:opacity-60 disabled:cursor-not-allowed">
              {loading ? 'Sending…' : 'Send message'}
            </button>
            {status && (
              <p className={status.ok ? 'text-green-600' : 'text-red-600'}>{status.msg}</p>
            )}
          </div>
        </form>
      </div>
    </section>
  )
}
