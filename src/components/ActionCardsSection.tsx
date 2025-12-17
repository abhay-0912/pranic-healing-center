'use client'

import { motion } from 'framer-motion'
import { Calendar, MessageCircle, Star } from 'lucide-react'
import Link from 'next/link'

const actionCards = [
  {
    title: 'Book a Session',
    description: 'Schedule your personal healing session with our certified Pranic Healing instructors',
    icon: Calendar,
    gradient: 'from-[#A8D5BA] to-[#CDE8D6]',
    buttonText: 'Book Now',
    href: '/schedule',
    delay: 0
  },
  {
    title: 'Free Consultation',
    description: 'Get personalized guidance and learn which healing approach is right for you',
    icon: MessageCircle,
    gradient: 'from-[#F6C1B5] to-[#F6C1B5]/70',
    buttonText: 'Schedule Call',
    href: '/contact',
    delay: 0.2
  },
  {
    title: 'Join Workshop',
    description: 'Participate in group healing sessions and learn self-healing techniques',
    icon: Star,
    gradient: 'from-[#B7E4F7] to-[#A3DCEF]',
    buttonText: 'View Schedule',
    href: '/schedule',
    delay: 0.4
  }
]

export default function ActionCardsSection() {
  return (
    <section className="py-12 sm:py-16 lg:py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-12 sm:mb-16"
        >
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 mb-4">
            Ready to Begin Your{' '}
            <span className="bg-gradient-to-r from-purple-600 to-teal-600 bg-clip-text text-transparent">
              Healing Journey?
            </span>
          </h2>
          <p className="text-base sm:text-lg lg:text-xl text-gray-600 max-w-3xl mx-auto px-4">
            Choose the path that resonates with you and take the first step towards transformation
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {actionCards.map((card, index) => (
            <motion.div
              key={card.title}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: card.delay }}
              whileHover={{ 
                y: -10,
                transition: { duration: 0.3 }
              }}
              className="group relative"
            >
              <div className="relative h-full bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 overflow-hidden">
                {/* Gradient background */}
                <div className={`absolute inset-0 bg-gradient-to-br ${card.gradient} opacity-30`} />
                
                {/* Content */}
                <div className="relative z-10 p-8 h-full flex flex-col">
                  {/* Icon */}
                  <div className="w-16 h-16 bg-[#2A3A32]/10 rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                    <card.icon className="h-8 w-8 text-[#2A3A32]" />
                  </div>

                  {/* Title and description */}
                  <h3 className="text-2xl font-bold mb-4 text-[#1A2A22]">
                    {card.title}
                  </h3>
                  <p className="text-[#2A3A32] leading-relaxed mb-8 flex-grow font-medium">
                    {card.description}
                  </p>

                  {/* CTA Button */}
                  <Link
                    href={card.href}
                    className="inline-flex items-center justify-center bg-white text-[#2A3A32] px-6 py-3 rounded-lg font-bold hover:bg-white hover:shadow-lg transition-all duration-300 group-hover:scale-105 transform"
                  >
                    {card.buttonText}
                  </Link>
                </div>

                {/* Decorative elements */}
                <div className="absolute top-4 right-4 w-24 h-24 bg-white/10 rounded-full -translate-y-8 translate-x-8" />
                <div className="absolute bottom-4 left-4 w-16 h-16 bg-white/10 rounded-full translate-y-4 -translate-x-4" />
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}