'use client'

import { motion } from 'framer-motion'
import { 
  Shield, 
  Zap, 
  Heart, 
  Users, 
  Hand,
  Award
} from 'lucide-react'

const benefits = [
  {
    title: 'Stress Relief',
    description: 'Release tension and find deep relaxation',
    icon: Shield,
    color: '#5a8f6f',
    bgColor: 'bg-[#f0f9f6]',
    iconColor: 'text-[#3d5c4c]'
  },
  {
    title: 'Boost Energy',
    description: 'Increase vitality and life force energy',
    icon: Zap,
    color: '#6fa3d6',
    bgColor: 'bg-[#f0f5fb]',
    iconColor: 'text-[#3d5c7f]'
  },
  {
    title: 'Inner Peace',
    description: 'Achieve emotional balance and harmony',
    icon: Heart,
    color: '#c982d8',
    bgColor: 'bg-[#faf2fd]',
    iconColor: 'text-[#8a4a9d]'
  },
  {
    title: 'Community Support',
    description: 'Connect with like-minded healing souls',
    icon: Users,
    color: '#ddc743',
    bgColor: 'bg-[#fefbf0]',
    iconColor: 'text-[#b8921b]'
  },
  {
    title: 'Self-Healing',
    description: 'Learn techniques for personal wellness',
    icon: Hand,
    color: '#c982d8',
    bgColor: 'bg-[#faf2fd]',
    iconColor: 'text-[#8a4a9d]'
  },
  {
    title: 'Proven Results',
    description: 'Experience scientifically-backed healing',
    icon: Award,
    color: '#6fa3d6',
    bgColor: 'bg-[#f0f5fb]',
    iconColor: 'text-[#3d5c7f]'
  }
]

export default function BenefitsSection() {
  return (
    <section className="py-12 sm:py-16 lg:py-20 bg-[#faf7f2]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-12 sm:mb-16"
        >
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-[#3d5c4c] mb-4">
            Transform Your Life with{' '}
            <span className="text-[#5a8f6f]">
              Pranic Healing
            </span>
          </h2>
          <p className="text-base sm:text-lg lg:text-xl text-[#3d5c4c] max-w-3xl mx-auto px-4">
            Experience the profound benefits of energy healing and unlock your body&apos;s natural ability to heal itself
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {benefits.map((benefit, index) => (
            <motion.div
              key={benefit.title}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              whileHover={{ 
                scale: 1.05,
                transition: { duration: 0.2 }
              }}
              className="group relative"
            >
              {/* Glassmorphism card */}
              <div className="relative bg-white/70 backdrop-blur-lg border border-white/20 rounded-2xl p-8 shadow-xl hover:shadow-2xl transition-all duration-300">
                {/* Background gradient on hover */}
                <div className={`absolute inset-0 opacity-0 group-hover:opacity-5 rounded-2xl transition-opacity duration-300`} style={{ backgroundColor: benefit.color }} />
                
                {/* Icon container */}
                <div className={`relative w-16 h-16 ${benefit.bgColor} rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300`}>
                  <benefit.icon className={`h-8 w-8 ${benefit.iconColor}`} />
                </div>

                {/* Content */}
                <h3 className="text-2xl font-bold text-[#3d5c4c] mb-3 group-hover:text-[#2d2d2d] transition-colors">
                  {benefit.title}
                </h3>
                <p className="text-[#3d5c4c] leading-relaxed">
                  {benefit.description}
                </p>

                {/* Hover effect border */}
                <div className={`absolute inset-0 opacity-0 group-hover:opacity-10 rounded-2xl transition-opacity duration-300 -z-10 blur-xl`} style={{ backgroundColor: benefit.color }} />
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}