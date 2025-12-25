'use client'

import { motion } from 'framer-motion'
import { Calendar, MessageCircle, Star } from 'lucide-react'
import Link from 'next/link'

const actionCards = [
  {
    title: 'Book a Session',
    description: 'Schedule your personal healing session with our certified Pranic Healing instructors',
    icon: Calendar,
    color: '#5a8f6f',
    buttonText: 'Book Now',
    href: '/schedule',
    delay: 0
  },
  {
    title: 'Free Consultation',
    description: 'Get personalized guidance and learn which healing approach is right for you',
    icon: MessageCircle,
    color: '#ddc743',
    buttonText: 'Schedule Call',
    href: '/contact',
    delay: 0.2
  },
  {
    title: 'Join Workshop',
    description: 'Participate in group healing sessions and learn self-healing techniques',
    icon: Star,
    color: '#6fa3d6',
    buttonText: 'View Schedule',
    href: '/schedule',
    delay: 0.4
  }
]

export default function ActionCardsSection() {
  return (
    <section className="py-16 sm:py-20 lg:py-24 bg-gradient-to-b from-white to-[#faf7f2]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-14 sm:mb-16"
        >
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-[#3d5c4c] mb-4">
            Begin Your Journey
          </h2>
          <p className="text-base sm:text-lg text-[#5a8f6f] max-w-3xl mx-auto">
            Choose the path that resonates with you and take your first step.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {actionCards.map((card) => (
            <motion.div
              key={card.title}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: card.delay }}
              className="group"
            >
              <div className="relative h-full bg-white border border-[#e0d4cc] rounded-2xl shadow-md hover:shadow-lg transition-all duration-300 overflow-hidden p-8 flex flex-col">
                {/* Circular icon container */}
                <div className="relative w-20 h-20 rounded-full flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300" style={{ background: `linear-gradient(135deg, ${card.color}20 0%, ${card.color}10 100%)` }}>
                  <div className="absolute inset-[3px] rounded-full flex items-center justify-center border-2" style={{ borderColor: `${card.color}30` }}>
                    <card.icon className="h-8 w-8" style={{ color: card.color }} />
                  </div>
                </div>

                {/* Title and description */}
                <h3 className="text-2xl font-bold text-[#3d5c4c] mb-3">
                  {card.title}
                </h3>
                <p className="text-[#5a8f6f] leading-relaxed mb-6 flex-grow">
                  {card.description}
                </p>

                {/* CTA Button */}
                <Link
                  href={card.href}
                  aria-label={card.buttonText}
                  className="inline-block px-6 py-3 rounded-full font-semibold text-white bg-gradient-to-r transition-all duration-300 hover:scale-105"
                  style={{ backgroundImage: `linear-gradient(to right, ${card.color}, ${card.color}dd)` }}
                >
                  {card.buttonText}
                </Link>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}