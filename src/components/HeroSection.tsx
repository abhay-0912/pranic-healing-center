'use client'

import { motion } from 'framer-motion'
import { CheckCircle } from 'lucide-react'
import Link from 'next/link'

const floatingOrbs = [
  { id: 1, size: 'w-32 h-32', color: 'bg-[#c982d8]', delay: 0 },
  { id: 2, size: 'w-24 h-24', color: 'bg-[#6fa3d6]', delay: 1 },
  { id: 3, size: 'w-20 h-20', color: 'bg-[#5a8f6f]', delay: 2 },
  { id: 4, size: 'w-16 h-16', color: 'bg-[#f0dd99]', delay: 0.5 },
  { id: 5, size: 'w-28 h-28', color: 'bg-[#7ebce6]', delay: 1.5 },
]

const trustIndicators = [
  '1000+ Lives Transformed',
  'Certified Instructors',
  '10+ Years Experience'
]

export default function HeroSection() {
  return (
    <div className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Calming background video */}
      <video
        className="absolute inset-0 w-full h-full object-cover"
        src="/videos/water.mp4"
        autoPlay
        muted
        loop
        playsInline
        aria-label="Calming background video of flowing water"
      />
      {/* Soft gradient overlay for readability */}
      <div className="absolute inset-0 bg-gradient-to-b from-[#0e1a14]/60 via-[#0e1a14]/40 to-transparent" />

      {/* Floating animated orbs (circular energy motifs) */}
      {floatingOrbs.map((orb) => (
        <motion.div
          key={orb.id}
          className={`absolute ${orb.size} ${orb.color} rounded-full opacity-25 blur-2xl`}
          animate={{
            x: [0, 80, -40, 0],
            y: [0, -80, 40, 0],
            scale: [1, 1.15, 0.9, 1],
          }}
          transition={{
            duration: 24,
            delay: orb.delay,
            repeat: Infinity,
            ease: "linear"
          }}
          style={{
            left: `${Math.random() * 80}%`,
            top: `${Math.random() * 80}%`,
          }}
        />
      ))}

      {/* Hero content */}
      <div className="relative z-10 text-center px-6 sm:px-12 max-w-5xl mx-auto">
        <motion.h1
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-4xl sm:text-6xl lg:text-7xl font-bold text-white mb-6"
        >
          Find Calm. Heal Deeply.
          <span className="block text-transparent bg-clip-text bg-gradient-to-r from-[#c982d8] via-[#6fa3d6] to-[#f0dd99]">
            Pranic Energy in Motion
          </span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="text-xl sm:text-2xl text-white/90 mb-10 leading-relaxed"
        >
          Guided meditations, effortless booking, and a personalized dashboard to track your healing journey. Designed with accessibility and serenity.
        </motion.p>

        {/* CTA Buttons */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="flex flex-col sm:flex-row gap-4 justify-center mb-14"
        >
          <Link
            href="/schedule"
            aria-label="Book a healing session"
            className="px-8 py-4 rounded-full text-lg font-semibold text-white shadow-lg hover:shadow-xl hover:scale-105 transition-all bg-gradient-to-r from-[#5a8f6f] to-[#6fa3d6]"
          >
            Book a Session
          </Link>
          <Link
            href="/benefits"
            aria-label="Start a guided meditation"
            className="px-8 py-4 rounded-full text-lg font-semibold text-[#0e1a14] bg-white/90 hover:bg-white transition-all"
          >
            Start Guided Meditation
          </Link>
        </motion.div>

        {/* Trust indicators in circular rings */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="flex flex-wrap items-center justify-center gap-6"
        >
          {trustIndicators.map((indicator, index) => (
            <div key={index} className="flex items-center gap-3">
              <div className="relative w-10 h-10">
                <div className="absolute inset-0 rounded-full bg-gradient-to-tr from-[#c982d8] via-[#6fa3d6] to-[#f0dd99] opacity-60" />
                <div className="absolute inset-[3px] rounded-full bg-white/90 flex items-center justify-center">
                  <CheckCircle className="h-5 w-5 text-[#5a8f6f]" />
                </div>
              </div>
              <span className="text-sm font-medium text-white/90">{indicator}</span>
            </div>
          ))}
        </motion.div>
      </div>
    </div>
  )
}