import { useState } from 'react'
import { ArrowRight, CheckCircle2, Loader2 } from 'lucide-react'
import { supabase } from '../lib/supabase'

export default function Demo() {
  const [form, setForm] = useState({ name: '', email: '', company: '', role: '', message: '' })
  const [status, setStatus] = useState('idle') // idle | loading | success | error
  const [error, setError] = useState('')

  const handleChange = (e) => setForm((f) => ({ ...f, [e.target.name]: e.target.value }))

  const handleSubmit = async (e) => {
    e.preventDefault()
    setStatus('loading')
    setError('')

    const { error: supaErr } = await supabase.from('demo_requests').insert([
      {
        name: form.name,
        email: form.email,
        company: form.company,
        role: form.role,
        message: form.message,
      },
    ])

    if (supaErr) {
      setStatus('error')
      setError('Something went wrong. Please try again or email us directly.')
    } else {
      setStatus('success')
    }
  }

  return (
    <section id="demo" className="py-28 px-6 relative overflow-hidden">
      <div className="absolute inset-0 hero-glow pointer-events-none opacity-60" />

      <div className="max-w-3xl mx-auto relative z-10">
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-5 tracking-tight">
            See MetisIQ in action
          </h2>
          <p className="text-white/50 text-lg">
            Request a personalised demo. We'll walk you through the platform
            using data from a laundry similar to yours.
          </p>
        </div>

        {status === 'success' ? (
          <div className="p-10 rounded-2xl border border-cyan-400/20 bg-cyan-400/5 text-center">
            <CheckCircle2 size={40} className="text-cyan-400 mx-auto mb-4" />
            <h3 className="text-white font-semibold text-xl mb-2">Request received!</h3>
            <p className="text-white/50">
              We'll be in touch within one business day to schedule your demo.
            </p>
          </div>
        ) : (
          <form
            onSubmit={handleSubmit}
            className="p-8 rounded-2xl border border-white/8 bg-[#0a1628]/60 backdrop-blur-sm space-y-5"
          >
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div>
                <label className="block text-xs text-white/50 mb-1.5 font-medium">Full name *</label>
                <input
                  name="name"
                  required
                  value={form.name}
                  onChange={handleChange}
                  placeholder="Jan de Vries"
                  className="w-full px-4 py-2.5 rounded-xl bg-white/5 border border-white/8 text-white text-sm placeholder-white/20 focus:outline-none focus:border-cyan-400/40 focus:bg-white/8 transition-all"
                />
              </div>
              <div>
                <label className="block text-xs text-white/50 mb-1.5 font-medium">Work email *</label>
                <input
                  type="email"
                  name="email"
                  required
                  value={form.email}
                  onChange={handleChange}
                  placeholder="jan@wasserij.nl"
                  className="w-full px-4 py-2.5 rounded-xl bg-white/5 border border-white/8 text-white text-sm placeholder-white/20 focus:outline-none focus:border-cyan-400/40 focus:bg-white/8 transition-all"
                />
              </div>
              <div>
                <label className="block text-xs text-white/50 mb-1.5 font-medium">Company *</label>
                <input
                  name="company"
                  required
                  value={form.company}
                  onChange={handleChange}
                  placeholder="Wasserij BV"
                  className="w-full px-4 py-2.5 rounded-xl bg-white/5 border border-white/8 text-white text-sm placeholder-white/20 focus:outline-none focus:border-cyan-400/40 focus:bg-white/8 transition-all"
                />
              </div>
              <div>
                <label className="block text-xs text-white/50 mb-1.5 font-medium">Your role</label>
                <select
                  name="role"
                  value={form.role}
                  onChange={handleChange}
                  className="w-full px-4 py-2.5 rounded-xl bg-[#0a1628] border border-white/8 text-white text-sm focus:outline-none focus:border-cyan-400/40 transition-all"
                >
                  <option value="">Select role…</option>
                  <option>CEO / Director</option>
                  <option>CFO / Finance</option>
                  <option>Operations Manager</option>
                  <option>Sustainability Lead</option>
                  <option>Other</option>
                </select>
              </div>
            </div>
            <div>
              <label className="block text-xs text-white/50 mb-1.5 font-medium">What's your biggest challenge? (optional)</label>
              <textarea
                name="message"
                value={form.message}
                onChange={handleChange}
                rows={3}
                placeholder="e.g. energy costs, no real-time insight, CO₂ reporting…"
                className="w-full px-4 py-2.5 rounded-xl bg-white/5 border border-white/8 text-white text-sm placeholder-white/20 focus:outline-none focus:border-cyan-400/40 focus:bg-white/8 transition-all resize-none"
              />
            </div>

            {error && <p className="text-red-400 text-sm">{error}</p>}

            <button
              type="submit"
              disabled={status === 'loading'}
              className="group w-full flex items-center justify-center gap-2 px-6 py-3 rounded-xl bg-cyan-400 text-[#050d1e] font-semibold text-sm hover:bg-cyan-300 disabled:opacity-70 disabled:cursor-not-allowed transition-all"
            >
              {status === 'loading' ? (
                <>
                  <Loader2 size={16} className="animate-spin" />
                  Sending…
                </>
              ) : (
                <>
                  Request my demo
                  <ArrowRight size={16} className="group-hover:translate-x-0.5 transition-transform" />
                </>
              )}
            </button>

            <p className="text-center text-xs text-white/25">
              No commitment. We typically respond within one business day.
            </p>
          </form>
        )}
      </div>
    </section>
  )
}
