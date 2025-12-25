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
      {/* Solid background */}
      <div className="absolute inset-0 bg-[#5a8f6f]">
        <div className="absolute inset-0 bg-gradient-to-t from-[#3d5c4c]/10 to-transparent" />
      </div>

      {/* Floating animated orbs */}
      {floatingOrbs.map((orb) => (
        <motion.div
          key={orb.id}
          className={`absolute ${orb.size} ${orb.color} rounded-full opacity-20 blur-xl`}
          animate={{
            x: [0, 100, -50, 0],
            y: [0, -100, 50, 0],
            scale: [1, 1.2, 0.8, 1],
          }}
          transition={{
            duration: 20,
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
      <div className="relative z-10 text-center px-6 sm:px-12 max-w-4xl mx-auto">
        <motion.h1
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-4xl sm:text-6xl lg:text-7xl font-bold text-white mb-6"
        >
          Transform Your Life with{' '}
          <span className="text-[#f0dd99]">
            Pranic Energy
          </span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="text-xl sm:text-2xl text-gray-200 mb-8 leading-relaxed"
        >
          Discover the ancient wisdom of energy healing combined with modern techniques. 
          Experience profound transformation through certified Pranic Healing sessions.
        </motion.p>

        {/* CTA Buttons */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="flex flex-col sm:flex-row gap-4 justify-center mb-12"
        >
          <Link
            href="/schedule"
            className="bg-[#c982d8] hover:bg-[#b86cc8] text-white px-8 py-4 rounded-lg text-lg font-semibold transition-all duration-300 shadow-lg hover:shadow-xl hover:scale-105"
          >
            Start Your Healing Journey
          </Link>
          <Link
            href="/benefits"
            className="bg-white/25 hover:bg-white/35 text-white border-2 border-white/40 px-8 py-4 rounded-lg text-lg font-semibold transition-all duration-300 backdrop-blur-sm hover:scale-105"
          >
            Join Free Meditation
          </Link>
        </motion.div>

        {/* Trust indicators */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="flex flex-col sm:flex-row items-center justify-center gap-6 text-white"
        >
          {trustIndicators.map((indicator, index) => (
            <div key={index} className="flex items-center space-x-2">
              <CheckCircle className="h-5 w-5 text-green-400" />
              <span className="text-sm font-medium">{indicator}</span>
            </div>
          ))}
        </motion.div>
      </div>

      {/* Scroll indicator removed */}
    </div>
  )
}