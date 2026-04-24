import { useState } from 'react'
import { ArrowRight, CheckCircle2, Loader2 } from 'lucide-react'
import { supabase } from '../lib/supabase'
import AnimateIn from './AnimateIn'

export default function Demo() {
  const [form, setForm] = useState({ name: '', email: '', company: '', role: '', message: '' })
  const [status, setStatus] = useState('idle')
  const [error, setError] = useState('')

  const handleChange = (e) => setForm((f) => ({ ...f, [e.target.name]: e.target.value }))

  const handleSubmit = async (e) => {
    e.preventDefault()
    setStatus('loading')
    setError('')
    const { error: err } = await supabase.from('demo_requests').insert([form])
    if (err) {
      setStatus('error')
      setError('Something went wrong. Please try again or email us directly.')
    } else {
      setStatus('success')
    }
  }

  return (
    <section id="demo" className="py-24 px-6 bg-white">
      <div className="max-w-3xl mx-auto">
        <AnimateIn className="text-center mb-10">
          <p className="text-xs font-semibold text-slate-400 uppercase tracking-widest mb-4">Get started</p>
          <h2 className="text-4xl md:text-5xl font-bold text-slate-900 mb-5 tracking-tight">
            See MetisIQ in action
          </h2>
          <p className="text-slate-500 text-lg max-w-md mx-auto leading-relaxed">
            Request a personalised demo. We'll walk you through the platform
            using data from a laundry similar to yours.
          </p>
        </AnimateIn>

        {status === 'success' ? (
          <AnimateIn from="scale">
            <div className="p-10 rounded-2xl border border-emerald-200 bg-emerald-50 text-center">
              <div className="w-12 h-12 rounded-full bg-emerald-100 flex items-center justify-center mx-auto mb-4">
                <CheckCircle2 size={24} className="text-emerald-600" />
              </div>
              <h3 className="text-slate-900 font-semibold text-xl mb-2">Request received!</h3>
              <p className="text-slate-500 text-sm">We'll be in touch within one business day to schedule your demo.</p>
            </div>
          </AnimateIn>
        ) : (
          <AnimateIn delay={100}>
            <form onSubmit={handleSubmit} className="card p-8 shadow-lg shadow-slate-100">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-4">
                {[
                  { name: 'name',    label: 'Full name',   type: 'text',  required: true,  placeholder: 'Jan de Vries' },
                  { name: 'email',   label: 'Work email',  type: 'email', required: true,  placeholder: 'jan@wasserij.nl' },
                  { name: 'company', label: 'Company',     type: 'text',  required: true,  placeholder: 'Wasserij BV' },
                ].map((field) => (
                  <div key={field.name} className={field.name === 'company' ? '' : ''}>
                    <label className="block text-xs font-semibold text-slate-600 mb-1.5">
                      {field.label} {field.required && '*'}
                    </label>
                    <input
                      type={field.type}
                      name={field.name}
                      required={field.required}
                      value={form[field.name]}
                      onChange={handleChange}
                      placeholder={field.placeholder}
                      className="w-full px-4 py-2.5 rounded-xl bg-white border border-slate-200 text-slate-900 text-sm placeholder-slate-300 focus:outline-none focus:border-sky-400 focus:ring-2 focus:ring-sky-50 transition-all"
                    />
                  </div>
                ))}
                <div>
                  <label className="block text-xs font-semibold text-slate-600 mb-1.5">Your role</label>
                  <select
                    name="role"
                    value={form.role}
                    onChange={handleChange}
                    className="w-full px-4 py-2.5 rounded-xl bg-white border border-slate-200 text-slate-900 text-sm focus:outline-none focus:border-sky-400 focus:ring-2 focus:ring-sky-50 transition-all"
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

              <div className="mb-5">
                <label className="block text-xs font-semibold text-slate-600 mb-1.5">
                  What's your biggest challenge?{' '}
                  <span className="text-slate-400 font-normal">(optional)</span>
                </label>
                <textarea
                  name="message"
                  value={form.message}
                  onChange={handleChange}
                  rows={3}
                  placeholder="e.g. energy costs, no real-time insight, CO₂ reporting…"
                  className="w-full px-4 py-2.5 rounded-xl bg-white border border-slate-200 text-slate-900 text-sm placeholder-slate-300 focus:outline-none focus:border-sky-400 focus:ring-2 focus:ring-sky-50 transition-all resize-none"
                />
              </div>

              {error && <p className="text-red-500 text-sm mb-4">{error}</p>}

              <button
                type="submit"
                disabled={status === 'loading'}
                className="group w-full flex items-center justify-center gap-2 btn-primary py-3 disabled:opacity-60 disabled:cursor-not-allowed shadow-sm"
              >
                {status === 'loading' ? (
                  <><Loader2 size={16} className="animate-spin" /> Sending…</>
                ) : (
                  <>
                    Request my demo
                    <ArrowRight size={15} className="group-hover:translate-x-0.5 transition-transform" />
                  </>
                )}
              </button>

              <p className="text-center text-xs text-slate-400 mt-4">
                No commitment. We typically respond within one business day.
              </p>
            </form>
          </AnimateIn>
        )}
      </div>
    </section>
  )
}
