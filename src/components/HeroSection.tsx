'use client'

import { motion } from 'framer-motion'
import { CheckCircle } from 'lucide-react'
import Link from 'next/link'

const floatingOrbs = [
  { id: 1, size: 'w-32 h-32', color: 'bg-[#A8D5BA]', delay: 0 },
  { id: 2, size: 'w-24 h-24', color: 'bg-[#A3DCEF]', delay: 1 },
  { id: 3, size: 'w-20 h-20', color: 'bg-[#E6D9F2]', delay: 2 },
  { id: 4, size: 'w-16 h-16', color: 'bg-[#F6C1B5]', delay: 0.5 },
  { id: 5, size: 'w-28 h-28', color: 'bg-[#D8C7E8]', delay: 1.5 },
]

const trustIndicators = [
  '1000+ Lives Transformed',
  'Certified Instructors',
  '10+ Years Experience'
]

export default function HeroSection() {
  return (
    <div className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Animated gradient background */}
      <div className="absolute inset-0 bg-gradient-to-br from-[#CDE8D6] via-[#B7E4F7] to-[#E6D9F2]">
        <div className="absolute inset-0 bg-gradient-to-t from-white/30 to-transparent" />
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
          className="text-4xl sm:text-6xl lg:text-7xl font-bold text-[#2A3A32] mb-6"
        >
          Transform Your Life with{' '}
          <span className="bg-gradient-to-r from-[#5A8A6A] via-[#4A9AC7] to-[#8B7BA8] bg-clip-text text-transparent">
            Pranic Energy
          </span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="text-xl sm:text-2xl text-[#2A3A32]/90 mb-8 leading-relaxed"
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
            className="bg-gradient-to-r from-[#B7E4F7] to-[#A3DCEF] hover:shadow-xl text-[#1A2A22] px-8 py-4 rounded-lg text-lg font-bold transition-all duration-300 shadow-lg hover:scale-105"
          >
            Start Your Healing Journey
          </Link>
          <Link
            href="/benefits"
            className="bg-[#F6C1B5] hover:bg-[#F6C1B5] text-[#2A3A32] border-2 border-[#2A3A32]/30 px-8 py-4 rounded-lg text-lg font-bold transition-all duration-300 backdrop-blur-sm hover:scale-105"
          >
            Join Free Meditation
          </Link>
        </motion.div>

        {/* Trust indicators */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="flex flex-col sm:flex-row items-center justify-center gap-6 text-[#2A3A32]"
        >
          {trustIndicators.map((indicator, index) => (
            <div key={index} className="flex items-center space-x-2">
              <CheckCircle className="h-5 w-5 text-[#5A8A6A]" fill="#5A8A6A" />
              <span className="text-sm font-semibold">{indicator}</span>
            </div>
          ))}
        </motion.div>
      </div>

      {/* Scroll indicator removed */}
    </div>
  )
}