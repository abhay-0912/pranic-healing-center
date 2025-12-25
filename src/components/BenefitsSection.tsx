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
    <section className="py-16 sm:py-20 lg:py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-14 sm:mb-16"
        >
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-[#3d5c4c] mb-4">
            Healing Benefits
          </h2>
          <p className="text-base sm:text-lg text-[#5a8f6f] max-w-3xl mx-auto">
            Discover what energy healing can bring to your body, mind, and spirit.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {benefits.map((benefit, index) => (
            <motion.div
              key={benefit.title}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.08 }}
              className="group relative"
            >
              <div className="relative bg-gradient-to-br from-white to-[#f0ead2]/30 border border-[#e0d4cc] rounded-2xl p-8 shadow-md hover:shadow-lg transition-all duration-300">
                {/* Circular icon container */}
                <div className="relative w-20 h-20 rounded-full flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300" style={{ background: `linear-gradient(135deg, ${benefit.color}20 0%, ${benefit.color}10 100%)` }}>
                  <div className="absolute inset-[3px] rounded-full flex items-center justify-center border-2" style={{ borderColor: `${benefit.color}30` }}>
                    <benefit.icon className="h-8 w-8" style={{ color: benefit.color }} />
                  </div>
                </div>

                {/* Content */}
                <h3 className="text-xl font-bold text-[#3d5c4c] mb-2">
                  {benefit.title}
                </h3>
                <p className="text-[#5a8f6f] leading-relaxed text-sm">
                  {benefit.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}