'use client'

import { useEffect, useState } from 'react'
import { motion } from 'framer-motion'
import { CheckCircle, Bookmark } from 'lucide-react'

type Progress = {
  discovery: number
  practice: number
  transformation: number
}

export default function Dashboard() {
  const [saved, setSaved] = useState<string[]>([])
  const [progress, setProgress] = useState<Progress>({ discovery: 20, practice: 40, transformation: 10 })

  useEffect(() => {
    const s = JSON.parse(localStorage.getItem('saved-meditations') || '[]')
    if (Array.isArray(s)) setSaved(s)
  }, [])

  const saveMeditation = (title: string) => {
    const next = Array.from(new Set([title, ...saved]))
    setSaved(next)
    localStorage.setItem('saved-meditations', JSON.stringify(next))
  }

  return (
    <div className="min-h-screen bg-[#faf7f2]">
      <div className="max-w-7xl mx-auto px-6 lg:px-8 py-12">
        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-4xl font-bold text-[#3d5c4c] mb-6"
        >
          Your Healing Dashboard
        </motion.h1>

        {/* Progress */}
        <section className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-10" aria-label="Progress overview">
          {Object.entries(progress).map(([key, val]) => (
            <div key={key} className="rounded-2xl bg-white border border-[#e0d4cc] p-6">
              <p className="text-[#3d5c4c] font-semibold capitalize mb-2">{key}</p>
              <div className="h-3 rounded-full bg-[#f0ead2]">
                <div className="h-full rounded-full bg-gradient-to-r from-[#c982d8] via-[#6fa3d6] to-[#5a8f6f]" style={{ width: `${val}%` }} />
              </div>
              <p className="mt-2 text-xs text-[#5a8f6f]">{val}%</p>
            </div>
          ))}
        </section>

        {/* Saved meditations */}
        <section className="rounded-2xl bg-white border border-[#e0d4cc] p-6" aria-label="Saved meditations">
          <div className="flex items-center gap-2 mb-4">
            <Bookmark className="h-5 w-5 text-[#c982d8]" />
            <h2 className="text-xl font-bold text-[#3d5c4c]">Saved Meditations</h2>
          </div>
          {saved.length === 0 ? (
            <p className="text-[#5a8f6f]">No saved meditations yet. Save one from the meditation player.</p>
          ) : (
            <ul className="list-disc pl-5 text-[#3d5c4c] space-y-1">
              {saved.map((t) => (
                <li key={t}>{t}</li>
              ))}
            </ul>
          )}

          <div className="mt-6 flex gap-3">
            {["Guided Calm – Water Breath", "Loving-Kindness – Heart Center"].map(title => (
              <button key={title} onClick={() => saveMeditation(title)} className="px-4 py-3 rounded-lg bg-gradient-to-r from-[#5a8f6f] to-[#6fa3d6] text-white font-semibold">
                Save “{title}”
              </button>
            ))}
          </div>
        </section>

        {/* Accessibility note */}
        <p className="mt-8 text-sm text-[#5a8f6f]">Tip: Use the High Contrast toggle in the header for increased visibility.</p>
      </div>
    </div>
  )
}