"use client"
import { useState } from 'react'
import { ArrowRight } from 'lucide-react';

export default function ContactForm() {
  const [form, setForm] = useState({ name: '', email: '', company: '', service: '', budget: '', brief: '' })
  const [sent, setSent] = useState(false)

  const handle = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) =>
    setForm(f => ({ ...f, [e.target.name]: e.target.value }))
  const submit = (e: React.FormEvent) => { e.preventDefault(); setSent(true) }
  return (

    <>
      {sent ? (
        <div className="py-20 text-center">
          <div
            className="inline-flex w-[60px] h-[60px] items-center justify-center mb-8 bg-accent"
          >
            <span className="text-2xl">✓</span>
          </div>
          <h2
            className="text-5xl font-black uppercase tracking-tighter mb-4 font-display"
          >
            Message Sent.
          </h2>
          <p
            className="text-base leading-relaxed font-sans text-muted-foreground"
          >
            We review every brief carefully. Expect a response within 48 hours.
          </p>
        </div>
      ) : (
        <form onSubmit={submit}>
          <div className="grid grid-cols-2 gap-x-10">
            <div className="mb-10">
              <label
                className="text-[9px] tracking-[0.2em] block mb-2 font-mono text-muted-foreground"
              >
                YOUR NAME *
              </label>
              <input
                name="name"
                required
                value={form.name}
                onChange={handle}
                placeholder="Alex Müller"
                className="field-input focus:border-accent! w-full bg-transparent border-0 border-b border-foreground pb-3 font-sans text-[16px] py-14 px-0 leading-normal outline-none transition-colors duration-200 radius-none placeholder:text-muted-foreground"

              />
            </div>
            <div className="mb-10">
              <label
                className="text-[9px] tracking-[0.2em] block mb-2 font-mono text-muted-foreground"
              >
                EMAIL *
              </label>
              <input
                name="email"
                type="email"
                required
                value={form.email}
                onChange={handle}
                placeholder="alex@company.com"
                className="field-input focus:border-accent! w-full bg-transparent border-0 border-b border-foreground pb-3 font-sans text-[16px] py-14 px-0 leading-normal outline-none transition-colors duration-200 radius-none placeholder:text-muted-foreground"
              />
            </div>
          </div>

          <div className="grid grid-cols-2 gap-x-10">
            <div className="mb-10">
              <label
                className="text-[9px] tracking-[0.2em] block mb-2 font-mono text-muted-foreground"
              >
                COMPANY
              </label>
              <input
                name="company"
                value={form.company}
                onChange={handle}
                placeholder="Acme Inc."
                className="field-input focus:border-accent! w-full bg-transparent border-0 border-b border-foreground pb-3 font-sans text-[16px] py-14 px-0 leading-normal outline-none transition-colors duration-200 radius-none placeholder:text-muted-foreground"
              />
            </div>
            <div className="mb-10">
              <label
                className="text-[9px] tracking-[0.2em] block mb-2 font-mono text-muted-foreground"
              >
                SERVICE
              </label>
              <select
                name="service"
                value={form.service}
                onChange={handle}
                className="field-input cursor-pointer appearance-none focus:border-accent! w-full bg-transparent border-0 border-b border-foreground pb-3 font-sans text-[16px] py-14 px-0 leading-normal outline-none transition-colors duration-200 radius-none placeholder:text-muted-foreground"
              >
                <option value="">Select a service</option>
                <option>Brand Strategy</option>
                <option>Visual Identity</option>
                <option>Digital Design</option>
                <option>Campaign</option>
                <option>Art Direction</option>
                <option>Multiple / Other</option>
              </select>
            </div>
          </div>

          <div className="mb-10">
            <label
              className="text-[9px] tracking-[0.2em] block mb-2 font-mono text-muted-foreground"
            >
              PROJECT BUDGET
            </label>
            <select
              name="budget"
              value={form.budget}
              onChange={handle}
              className="field-input cursor-pointer appearance-none focus:border-accent! w-full bg-transparent border-0 border-b border-foreground pb-3 font-sans text-[16px] py-14 px-0 leading-normal outline-none transition-colors duration-200 radius-none placeholder:text-muted-foreground"
            >
              <option value="">Select a range</option>
              <option>Under €20,000</option>
              <option>€20,000 – €50,000</option>
              <option>€50,000 – €100,000</option>
              <option>€100,000+</option>
            </select>
          </div>

          <div className="mb-12">
            <label
              className="text-[9px] tracking-[0.2em] block mb-2 font-mono text-muted-foreground"
            >
              PROJECT BRIEF *
            </label>
            <textarea
              name="brief"
              required
              value={form.brief}
              onChange={handle}
              rows={5}
              placeholder="Tell us about your project. What problem are you solving? Who is your audience? What does success look like?"
              className="field-input resize-y min-h-30 leading-relaxed focus:border-accent! w-full bg-transparent border-0 border-b border-foreground pb-3 font-sans text-[16px] py-2.5 px-0 outline-none transition-colors duration-200 radius-none placeholder:text-muted-foreground"
            />
          </div>

          <button
            type="submit"
            className="text-[13px] tracking-[0.15em] border-none px-14 py-5 cursor-pointer transition-colors duration-150 font-mono text-accent bg-foreground hover:bg-[#222] flex items-center gap-2"
          >
            SEND BRIEF <ArrowRight />
          </button>
        </form>
      )}
    </>


  )
}
