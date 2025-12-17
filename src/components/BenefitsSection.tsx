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
    color: 'from-[#A8D5BA] to-[#CDE8D6]',
    bgColor: 'bg-[#CDE8D6]/30',
    iconColor: 'text-[#A8D5BA]'
  },
  {
    title: 'Boost Energy',
    description: 'Increase vitality and life force energy',
    icon: Zap,
    color: 'from-[#B7E4F7] to-[#A3DCEF]',
    bgColor: 'bg-[#B7E4F7]/30',
    iconColor: 'text-[#A3DCEF]'
  },
  {
    title: 'Inner Peace',
    description: 'Achieve emotional balance and harmony',
    icon: Heart,
    color: 'from-[#E6D9F2] to-[#D8C7E8]',
    bgColor: 'bg-[#E6D9F2]/30',
    iconColor: 'text-[#D8C7E8]'
  },
  {
    title: 'Community Support',
    description: 'Connect with like-minded healing souls',
    icon: Users,
    color: 'from-[#F6C1B5] to-[#F6C1B5]/70',
    bgColor: 'bg-[#F6C1B5]/30',
    iconColor: 'text-[#F6C1B5]'
  },
  {
    title: 'Self-Healing',
    description: 'Learn techniques for personal wellness',
    icon: Hand,
    color: 'from-[#A8D5BA] to-[#B7E4F7]',
    bgColor: 'bg-[#A8D5BA]/20',
    iconColor: 'text-[#A8D5BA]'
  },
  {
    title: 'Proven Results',
    description: 'Experience scientifically-backed healing',
    icon: Award,
    color: 'from-[#D8C7E8] to-[#E6D9F2]',
    bgColor: 'bg-[#D8C7E8]/30',
    iconColor: 'text-[#D8C7E8]'
  }
]

export default function BenefitsSection() {
  return (
    <section className="py-12 sm:py-16 lg:py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-12 sm:mb-16"
        >
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 mb-4">
            Transform Your Life with{' '}
            <span className="bg-gradient-to-r from-purple-600 to-teal-600 bg-clip-text text-transparent">
              Pranic Healing
            </span>
          </h2>
          <p className="text-base sm:text-lg lg:text-xl text-gray-600 max-w-3xl mx-auto px-4">
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
              <div className="relative bg-white/80 backdrop-blur-lg border border-[#A8D5BA]/20 rounded-2xl p-8 shadow-xl hover:shadow-2xl transition-all duration-300">
                {/* Background gradient on hover */}
                <div className={`absolute inset-0 bg-gradient-to-br ${benefit.color} opacity-0 group-hover:opacity-10 rounded-2xl transition-opacity duration-300`} />
                
                {/* Icon container */}
                <div className={`relative w-16 h-16 ${benefit.bgColor} rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300`}>
                  <benefit.icon className={`h-8 w-8 ${benefit.iconColor}`} />
                </div>

                {/* Content */}
                <h3 className="text-2xl font-bold text-[#2A3A32] mb-3 transition-colors">
                  {benefit.title}
                </h3>
                <p className="text-[#2A3A32]/80 leading-relaxed">
                  {benefit.description}
                </p>

                {/* Hover effect border */}
                <div className={`absolute inset-0 bg-gradient-to-br ${benefit.color} opacity-0 group-hover:opacity-20 rounded-2xl transition-opacity duration-300 -z-10 blur-xl`} />
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}