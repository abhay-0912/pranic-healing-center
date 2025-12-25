'use client'

import { motion } from 'framer-motion'

const testimonials = [
  {
    name: 'Aarav',
    text: 'The guided meditations helped me find balance and calm. Booking was effortless and the instructors are kind.',
    city: 'Lucknow'
  },
  {
    name: 'Meera',
    text: 'Pranic Healing sessions reduced my stress significantly. The simple routine keeps me motivated every week.',
    city: 'Lucknow'
  },
  {
    name: 'Rohan',
    text: 'Twin Hearts Meditation with the community is beautiful. I feel supported and energized.',
    city: 'Lucknow'
  }
]

export default function CommunitySection() {
  return (
    <section className="bg-white rounded-2xl shadow-md border border-[#e0d4cc] overflow-hidden">
      <div className="p-6 sm:p-8">
        <h2 className="text-2xl font-bold text-[#3d5c4c] mb-2">Community Stories</h2>
        <p className="text-[#5a8f6f] mb-6">Testimonials and mindfulness tips from our Lucknow community.</p>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {testimonials.map((t, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: idx * 0.05 }}
              className="rounded-2xl p-6 bg-gradient-to-br from-[#f0ead2] via-white to-[#e5c4f0]/40"
            >
              <div className="flex items-center gap-3 mb-3">
                <div className="w-12 h-12 rounded-full bg-gradient-to-tr from-[#c982d8] via-[#6fa3d6] to-[#5a8f6f] opacity-70" />
                <div>
                  <p className="text-[#3d5c4c] font-semibold">{t.name}</p>
                  <p className="text-[#5a8f6f] text-xs">{t.city}</p>
                </div>
              </div>
              <p className="text-[#3d5c4c] leading-relaxed">{t.text}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}