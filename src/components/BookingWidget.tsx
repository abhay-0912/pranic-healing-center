'use client'

import { useState } from 'react'
import { motion } from 'framer-motion'
import { CalendarDays, Clock, User, CheckCircle } from 'lucide-react'

type Step = 1 | 2 | 3

const services = [
  { id: 'basic', name: 'Basic Pranic Healing' },
  { id: 'intermediate', name: 'Intermediate Healing' },
  { id: 'twin', name: 'Twin Hearts Meditation' },
  { id: 'arhatic', name: 'Arhatic Yoga' },
]

export default function BookingWidget() {
  const [step, setStep] = useState<Step>(1)
  const [service, setService] = useState('')
  const [date, setDate] = useState('')
  const [time, setTime] = useState('')
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')

  const progress = (step / 3) * 100

  const canNext = () => {
    if (step === 1) return !!service
    if (step === 2) return !!date && !!time
    return !!name && !!email
  }

  const onSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // Simulate submission
    alert('Booking submitted! We\'ll reach out shortly.')
  }

  return (
    <section aria-labelledby="booking-title" className="bg-white rounded-2xl shadow-md border border-[#e0d4cc] overflow-hidden">
      {/* Progress bar */}
      <div className="h-2 bg-[#f0ead2]">
        <div
          className="h-full bg-gradient-to-r from-[#5a8f6f] via-[#6fa3d6] to-[#c982d8]"
          style={{ width: `${progress}%` }}
          aria-hidden="true"
        />
      </div>

      <div className="p-6 sm:p-8">
        <h2 id="booking-title" className="text-2xl font-bold text-[#3d5c4c] mb-2">Effortless Booking</h2>
        <p className="text-[#5a8f6f] mb-6">Three simple steps to schedule your session.</p>

        <form onSubmit={onSubmit} className="space-y-6" aria-label="Booking form">
          {step === 1 && (
            <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}>
              <label className="block text-sm font-semibold text-[#3d5c4c] mb-2">Choose a Program</label>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                {services.map(s => (
                  <button
                    key={s.id}
                    type="button"
                    onClick={() => setService(s.id)}
                    aria-pressed={service === s.id}
                    className={`flex items-center gap-2 rounded-xl border px-4 py-3 text-left transition-all ${
                      service === s.id
                        ? 'border-[#5a8f6f] bg-[#5a8f6f]/10'
                        : 'border-[#e0d4cc] bg-white hover:bg-[#f0ead2]/40'
                    }`}
                  >
                    <CheckCircle className={`h-5 w-5 ${service === s.id ? 'text-[#5a8f6f]' : 'text-[#c982d8]'}`} />
                    <span className="text-[#3d5c4c]">{s.name}</span>
                  </button>
                ))}
              </div>
            </motion.div>
          )}

          {step === 2 && (
            <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} className="grid grid-cols-1 sm:grid-cols-3 gap-4">
              <div className="sm:col-span-2">
                <label className="block text-sm font-semibold text-[#3d5c4c] mb-2">Date</label>
                <div className="flex items-center gap-2">
                  <CalendarDays className="h-5 w-5 text-[#6fa3d6]" aria-hidden="true" />
                  <input
                    type="date"
                    value={date}
                    onChange={(e) => setDate(e.target.value)}
                    className="w-full rounded-lg border border-[#e0d4cc] px-3 py-2 focus:ring-2 focus:ring-[#6fa3d6] focus:border-[#6fa3d6]"
                    aria-label="Select date"
                    required
                  />
                </div>
              </div>
              <div>
                <label className="block text-sm font-semibold text-[#3d5c4c] mb-2">Time</label>
                <div className="flex items-center gap-2">
                  <Clock className="h-5 w-5 text-[#c982d8]" aria-hidden="true" />
                  <input
                    type="time"
                    value={time}
                    onChange={(e) => setTime(e.target.value)}
                    className="w-full rounded-lg border border-[#e0d4cc] px-3 py-2 focus:ring-2 focus:ring-[#c982d8] focus:border-[#c982d8]"
                    aria-label="Select time"
                    required
                  />
                </div>
              </div>
            </motion.div>
          )}

          {step === 3 && (
            <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div>
                <label className="block text-sm font-semibold text-[#3d5c4c] mb-2">Full Name</label>
                <div className="flex items-center gap-2">
                  <User className="h-5 w-5 text-[#5a8f6f]" aria-hidden="true" />
                  <input
                    type="text"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    className="w-full rounded-lg border border-[#e0d4cc] px-3 py-2 focus:ring-2 focus:ring-[#5a8f6f] focus:border-[#5a8f6f]"
                    aria-label="Full name"
                    required
                  />
                </div>
              </div>
              <div>
                <label className="block text-sm font-semibold text-[#3d5c4c] mb-2">Email</label>
                <input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="w-full rounded-lg border border-[#e0d4cc] px-3 py-2 focus:ring-2 focus:ring-[#5a8f6f] focus:border-[#5a8f6f]"
                  aria-label="Email address"
                  required
                />
              </div>
            </motion.div>
          )}

          {/* Navigation */}
          <div className="flex items-center justify-between pt-2">
            <button
              type="button"
              onClick={() => setStep((s) => (s > 1 ? ((s - 1) as Step) : s))}
              className="px-5 py-3 rounded-full font-semibold text-[#3d5c4c] bg-[#f0ead2] hover:bg-[#e7e0c6]"
              aria-label="Back"
            >
              Back
            </button>
            {step < 3 ? (
              <button
                type="button"
                onClick={() => canNext() && setStep((s) => ((s + 1) as Step))}
                className="px-6 py-3 rounded-full font-semibold text-white bg-gradient-to-r from-[#6fa3d6] to-[#c982d8] disabled:opacity-50"
                aria-disabled={!canNext()}
              >
                Next
              </button>
            ) : (
              <button
                type="submit"
                className="px-6 py-3 rounded-full font-semibold text-white bg-gradient-to-r from-[#5a8f6f] to-[#6fa3d6]"
              >
                Confirm Booking
              </button>
            )}
          </div>

          {/* Healing journey milestones */}
          <div className="mt-6">
            <p className="text-sm text-[#5a8f6f] mb-2">Healing Journey</p>
            <div className="grid grid-cols-3 gap-3">
              {["Discovery", "Practice", "Transformation"].map((label, i) => (
                <div key={label} className="rounded-xl bg-[#f0ead2] p-3">
                  <div className="h-2 rounded-full bg-gradient-to-r from-[#c982d8] via-[#6fa3d6] to-[#5a8f6f]" style={{ width: `${(i+1)/3*100}%` }} />
                  <p className="mt-2 text-xs font-medium text-[#3d5c4c]">{label}</p>
                </div>
              ))}
            </div>
          </div>
        </form>
      </div>
    </section>
  )
}