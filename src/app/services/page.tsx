'use client'

import { motion } from 'framer-motion'
import { 
  Heart, 
  Zap, 
  Brain, 
  Users, 
  Gem, 
  Building,
  Trophy,
  Clock,
  CheckCircle
} from 'lucide-react'
import Link from 'next/link'

const services = [
  {
    id: 1,
    title: 'Basic Pranic Healing',
    description: 'Foundational energy healing techniques for physical ailments and general wellness',
    icon: Heart,
    duration: '60 minutes',
    price: '$80',
    features: [
      'Full body energy scan',
      'Chakra cleansing and energizing',
      'Basic healing techniques',
      'Self-healing guidance'
    ],
    gradient: 'from-[#A8D5BA] to-[#CDE8D6]',
    popular: false
  },
  {
    id: 2,
    title: 'Advanced Pranic Healing',
    description: 'Advanced techniques using color pranas for accelerated healing and transformation',
    icon: Zap,
    duration: '90 minutes',
    price: '$120',
    features: [
      'Advanced color healing',
      'Specialized techniques',
      'Deep energy work',
      'Comprehensive treatment plan'
    ],
    gradient: 'from-[#B7E4F7] to-[#A3DCEF]',
    popular: true
  },
  {
    id: 3,
    title: 'Pranic Psychotherapy',
    description: 'Heal emotional traumas, phobias, addictions, and mental health challenges',
    icon: Brain,
    duration: '75 minutes',
    price: '$100',
    features: [
      'Emotional healing',
      'Trauma release',
      'Mental clarity enhancement',
      'Stress management'
    ],
    gradient: 'from-[#E6D9F2] to-[#D8C7E8]',
    popular: false
  },
  {
    id: 4,
    title: 'Twin Hearts Meditation',
    description: 'Group meditation for global healing and personal spiritual development',
    icon: Users,
    duration: '45 minutes',
    price: '$25',
    features: [
      'Group energy field',
      'Blessing meditation',
      'Stress relief',
      'Spiritual development'
    ],
    gradient: 'from-[#A8D5BA] to-[#5A8A6A]',
    popular: false
  },
  {
    id: 5,
    title: 'Crystal Healing',
    description: 'Enhanced healing using the power of crystals and gemstones',
    icon: Gem,
    duration: '75 minutes',
    price: '$110',
    features: [
      'Crystal energy amplification',
      'Gemstone selection',
      'Enhanced healing power',
      'Crystal meditation'
    ],
    gradient: 'from-[#A3DCEF] to-[#B7E4F7]',
    popular: false
  },
  {
    id: 6,
    title: 'Corporate Wellness',
    description: 'Workplace healing programs for stress reduction and team harmony',
    icon: Building,
    duration: 'Customized',
    price: 'Contact',
    features: [
      'On-site sessions',
      'Group workshops',
      'Stress management',
      'Team building'
    ],
    gradient: 'from-orange-400 to-red-600',
    popular: false
  }
]

const specialPrograms = [
  {
    title: 'Medical Pranic Healing',
    description: 'Specialized healing for serious medical conditions in collaboration with healthcare professionals',
    icon: Heart
  },
  {
    title: 'Sports Pranic Healing',
    description: 'Performance enhancement and injury recovery for athletes and sports enthusiasts',
    icon: Trophy
  },
  {
    title: 'Distance Healing',
    description: 'Remote healing sessions for clients who cannot attend in person',
    icon: Zap
  }
]

export default function Services() {
  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-purple-600 via-blue-600 to-teal-600 py-20">
        <div className="absolute inset-0 bg-black/20" />
        <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-8 text-center">
          <motion.h1
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-5xl sm:text-6xl font-bold text-[#1A2A22] mb-6"
          >
            Our{' '}
            <span className="bg-gradient-to-r from-[#5A8A6A] via-[#4A9AC7] to-[#8B7BA8] bg-clip-text text-transparent">
              Healing Services
            </span>
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-xl text-[#2A3A32]/90 max-w-3xl mx-auto">
            Comprehensive energy healing solutions tailored to your unique needs and healing journey
          </motion.p>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold text-[#2A3A32] mb-4">
              Choose Your{' '}
              <span className="bg-gradient-to-r from-[#5A8A6A] via-[#4A9AC7] to-[#8B7BA8] bg-clip-text text-transparent">
                Healing Path
              </span>
            </h2>
            <p className="text-xl text-[#2A3A32]/80 max-w-3xl mx-auto">
              From foundational healing to advanced techniques, find the perfect service for your wellness journey
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <motion.div
                key={service.id}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="relative group"
              >
                {/* Popular badge */}
                {service.popular && (
                  <div className="absolute -top-3 -right-3 z-20">
                    <div className="bg-[#F6C1B5] text-[#1A2A22] px-3 py-1 rounded-full text-sm font-bold shadow-lg">
                      Most Popular
                    </div>
                  </div>
                )}

                <div className="relative h-full bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 overflow-hidden group-hover:scale-105">
                  {/* Background gradient */}
                  <div className={`absolute inset-0 bg-gradient-to-br ${service.gradient} opacity-5 group-hover:opacity-10 transition-opacity`} />
                  
                  <div className="relative z-10 p-8">
                    {/* Icon */}
                    <div className={`w-16 h-16 bg-gradient-to-br ${service.gradient} rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300`}>
                      <service.icon className="h-8 w-8 text-white" />
                    </div>

                    {/* Header */}
                    <h3 className="text-2xl font-bold text-[#2A3A32] mb-3">{service.title}</h3>
                    <p className="text-[#2A3A32]/80 mb-6 leading-relaxed">{service.description}</p>

                    {/* Duration and Price */}
                    <div className="flex items-center justify-between mb-6">
                      <div className="flex items-center space-x-2 text-[#2A3A32]/70">
                        <Clock className="h-4 w-4" />
                        <span className="text-sm">{service.duration}</span>
                      </div>
                      <div className="text-2xl font-bold text-[#2A3A32]">{service.price}</div>
                    </div>

                    {/* Features */}
                    <ul className="space-y-3 mb-8">
                      {service.features.map((feature, featureIndex) => (
                        <li key={featureIndex} className="flex items-center space-x-3">
                          <CheckCircle className="h-4 w-4 text-[#5A8A6A] flex-shrink-0" />
                          <span className="text-[#2A3A32]/80 text-sm">{feature}</span>
                        </li>
                      ))}
                    </ul>

                    {/* CTA Button */}
                    <Link
                      href="/schedule"
                      className={`block w-full bg-gradient-to-r ${service.gradient} text-[#1A2A22] text-center py-3 rounded-lg font-bold hover:shadow-lg transition-all duration-300 group-hover:scale-105`}
                    >
                      Book Session
                    </Link>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Special Programs */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              Specialized{' '}
              <span className="bg-gradient-to-r from-purple-600 to-teal-600 bg-clip-text text-transparent">
                Programs
              </span>
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Advanced healing modalities for specific needs and conditions
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {specialPrograms.map((program, index) => (
              <motion.div
                key={program.title}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.2 }}
                className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all duration-300 text-center group hover:scale-105"
              >
                <div className="w-16 h-16 bg-gradient-to-br from-purple-500 to-teal-500 rounded-xl flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300">
                  <program.icon className="h-8 w-8 text-white" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-4">{program.title}</h3>
                <p className="text-gray-600 leading-relaxed mb-6">{program.description}</p>
                <Link
                  href="/contact"
                  className="inline-flex items-center justify-center bg-gradient-to-r from-purple-600 to-teal-600 text-white px-6 py-3 rounded-lg font-semibold hover:shadow-lg transition-all duration-300"
                >
                  Learn More
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-purple-600 to-teal-600">
        <div className="max-w-7xl mx-auto px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-4xl font-bold text-white mb-6">
              Ready to Begin Your Healing Journey?
            </h2>
            <p className="text-xl text-gray-200 mb-8 max-w-3xl mx-auto">
              Take the first step towards transformation and wellness. Book your session today.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href="/schedule"
                className="bg-white text-purple-600 px-8 py-4 rounded-lg text-lg font-semibold hover:bg-gray-100 transition-colors duration-300"
              >
                Book a Session
              </Link>
              <Link
                href="/contact"
                className="bg-white/20 text-white border-2 border-white/30 px-8 py-4 rounded-lg text-lg font-semibold hover:bg-white/30 transition-colors duration-300"
              >
                Free Consultation
              </Link>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  )
}