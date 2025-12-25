'use client'

import { motion } from 'framer-motion'
import { BookOpen, Zap, Heart, Brain } from 'lucide-react'
import Link from 'next/link'

const courses = [
  {
    title: 'Basic Pranic Healing',
    description: 'Learn the fundamentals of energy healing and self-healing techniques',
    duration: '2 Days',
    level: 'Beginner',
    icon: BookOpen,
    color: '#5a8f6f',
    features: ['Energy Anatomy', 'Basic Healing Techniques', 'Self-Healing', 'Certificate']
  },
  {
    title: 'Intermediate Pranic Healing',
    description: 'Advanced healing techniques for specific health conditions',
    duration: '2 Days',
    level: 'Intermediate',
    icon: Zap,
    color: '#6fa3d6',
    features: ['Advanced Protocols', 'Chakra Healing', 'Disease Treatment', 'Case Studies']
  },
  {
    title: 'Twin Hearts Meditation',
    description: 'Powerful meditation for spiritual development and world healing',
    duration: '1 Day',
    level: 'All Levels',
    icon: Heart,
    color: '#c982d8',
    features: ['Meditative Techniques', 'Spiritual Growth', 'Stress Relief', 'World Service']
  },
  {
    title: 'Arhatic Yoga',
    description: 'Spiritual development through yoga, meditation, and ethical disciplines',
    duration: 'Ongoing',
    level: 'Advanced',
    icon: Brain,
    color: '#ddc743',
    features: ['Spiritual Path', 'Character Development', 'Energy Control', 'Inner Transformation']
  }
]

export default function Services() {
  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <div className="bg-[#5a8f6f] text-white py-16 sm:py-20 lg:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center"
          >
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold mb-6">
              Our Courses & Programs
            </h1>
            <p className="text-lg sm:text-xl text-white/90 max-w-3xl mx-auto">
              Discover our comprehensive range of Pranic Healing courses designed for all levels
            </p>
          </motion.div>
        </div>
      </div>

      {/* Courses */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-16 lg:py-20">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {courses.map((course, index) => (
            <motion.div
              key={course.title}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="group relative"
            >
              <div className="relative h-full bg-white rounded-2xl shadow-md hover:shadow-lg border border-[#e0d4cc] transition-all duration-300 p-8">
                {/* Circular icon */}
                <div className="relative w-20 h-20 rounded-full flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300" style={{ background: `linear-gradient(135deg, ${course.color}20 0%, ${course.color}10 100%)` }}>
                  <div className="absolute inset-[3px] rounded-full flex items-center justify-center border-2" style={{ borderColor: `${course.color}30` }}>
                    <course.icon className="h-8 w-8" style={{ color: course.color }} />
                  </div>
                </div>

                {/* Content */}
                <h3 className="text-2xl font-bold text-[#3d5c4c] mb-2">
                  {course.title}
                </h3>

                {/* Meta info */}
                <div className="flex gap-4 mb-4">
                  <span className="text-sm font-semibold px-3 py-1 rounded-full bg-[#f0f5fb]" style={{ color: course.color }}>
                    {course.level}
                  </span>
                  <span className="text-sm font-semibold px-3 py-1 rounded-full bg-[#f0ead2]" style={{ color: '#6b5f3a' }}>
                    {course.duration}
                  </span>
                </div>

                {/* Description */}
                <p className="text-[#3d5c4c] leading-relaxed mb-6">
                  {course.description}
                </p>

                {/* Features */}
                <ul className="space-y-2 mb-6">
                  {course.features.map((feature) => (
                    <li key={feature} className="flex items-center text-sm text-[#3d5c4c]">
                      <span className="w-2 h-2 rounded-full mr-3" style={{ backgroundColor: course.color }}></span>
                      {feature}
                    </li>
                  ))}
                </ul>

                {/* CTA */}
                <Link
                  href="/contact"
                  className="inline-block px-6 py-2 rounded-full font-semibold text-white transition-all hover:scale-105"
                  style={{ backgroundColor: course.color }}
                >
                  Enroll Now
                </Link>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Call to action */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="mt-16 text-center"
        >
          <p className="text-lg text-[#3d5c4c] mb-6">
            Ready to begin your healing path in Lucknow?
          </p>
          <Link
            href="/contact"
            className="inline-block px-8 py-3 rounded-full font-semibold text-white transition-all hover:scale-105 shadow-md"
            style={{ backgroundColor: '#5a8f6f' }}
          >
            Contact Us for Dates & Registration
          </Link>
        </motion.div>
      </div>
    </div>
  )
}