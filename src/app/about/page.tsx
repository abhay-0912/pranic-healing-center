'use client'

import { motion } from 'framer-motion'
import { Star, Award, Users, Heart } from 'lucide-react'
import Image from 'next/image'

const instructors = [
  {
    id: 1,
    name: 'Dr. Sarah Chen',
    specialty: 'Advanced Pranic Healing',
    experience: '12+ years',
    certifications: ['Master Pranic Healer', 'Pranic Psychotherapy', 'Arhatic Yoga'],
    bio: 'Dr. Chen has dedicated her life to the practice and teaching of Pranic Healing. She studied directly under Master Choa Kok Sui and has helped thousands transform their lives.',
    image: '/api/placeholder/300/400',
    rating: 4.9,
    sessions: 1200
  },
  {
    id: 2,
    name: 'Michael Rodriguez',
    specialty: 'Twin Hearts Meditation',
    experience: '8+ years',
    certifications: ['Senior Pranic Healer', 'Crystal Healing', 'Medical Pranic Healing'],
    bio: 'Michael specializes in group meditation and has led over 500 Twin Hearts sessions. His compassionate approach helps students find inner peace.',
    image: '/api/placeholder/300/400',
    rating: 4.8,
    sessions: 800
  },
  {
    id: 3,
    name: 'Elena Vasquez',
    specialty: 'Pranic Psychotherapy',
    experience: '10+ years',
    certifications: ['Master Pranic Healer', 'Pranic Psychotherapy', 'Sports Pranic Healing'],
    bio: 'Elena combines traditional psychology with Pranic Healing to address emotional and mental health challenges with remarkable success.',
    image: '/api/placeholder/300/400',
    rating: 5.0,
    sessions: 950
  }
]

const stats = [
  { icon: Users, label: 'Lives Transformed', value: '1000+' },
  { icon: Award, label: 'Years of Experience', value: '10+' },
  { icon: Heart, label: 'Healing Sessions', value: '5000+' },
  { icon: Star, label: 'Client Satisfaction', value: '98%' }
]

export default function About() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-[#FAF9F6] to-[#F4F1EC]">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-[#CDE8D6] via-[#B7E4F7] to-[#E6D9F2] py-20">
        <div className="absolute inset-0 bg-white/10" />
        <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-8 text-center">
          <motion.h1
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-5xl sm:text-6xl font-bold text-[#1A2A22] mb-6"
          >
            About{' '}
            <span className="bg-gradient-to-r from-[#5A8A6A] via-[#4A9AC7] to-[#8B7BA8] bg-clip-text text-transparent">
              Pranic Healing
            </span>
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-xl text-[#2A3A32]/90 max-w-3xl mx-auto">
            Discover the ancient art of energy healing that has transformed millions of lives worldwide
          </motion.p>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 bg-gradient-to-b from-[#FAF9F6] to-[#CDE8D6]/20">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="text-center"
              >
                <div className="w-16 h-16 bg-[#A8D5BA]/20 rounded-xl flex items-center justify-center mx-auto mb-4">
                  <stat.icon className="h-8 w-8 text-[#5A8A6A]" />
                </div>
                <div className="text-3xl font-bold text-[#2A3A32] mb-2">{stat.value}</div>
                <div className="text-[#2A3A32]/70">{stat.label}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Philosophy Section */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
            >
              <h2 className="text-4xl font-bold text-gray-900 mb-6">
                The Science of{' '}
                <span className="bg-gradient-to-r from-purple-600 to-teal-600 bg-clip-text text-transparent">
                  Energy Healing
                </span>
              </h2>
              <div className="space-y-6 text-gray-600 leading-relaxed">
                <p>
                  Pranic Healing is based on the fundamental principle that the body is a self-repairing living entity 
                  that possesses the innate ability to heal itself. The healing process is accelerated by increasing 
                  the life force or vital energy on the affected part of the physical body.
                </p>
                <p>
                  Developed by Grand Master Choa Kok Sui, this ancient science and art of healing utilizes prana or 
                  ki or life energy to heal the whole physical body. It also involves the manipulation of ki and 
                  bioplasmic matter of the patient&apos;s body.
                </p>
                <p>
                  Our certified instructors have trained extensively in these time-tested techniques, combining 
                  traditional wisdom with modern understanding to provide comprehensive healing experiences.
                </p>
              </div>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              className="relative"
            >
              <div className="relative h-96 bg-gradient-to-br from-purple-100 to-teal-100 rounded-2xl flex items-center justify-center">
                <div className="text-center p-8">
                  <div className="w-24 h-24 bg-gradient-to-br from-purple-500 to-teal-500 rounded-full flex items-center justify-center mx-auto mb-6">
                    <Heart className="h-12 w-12 text-white" />
                  </div>
                  <h3 className="text-2xl font-bold text-gray-900 mb-4">Healing Energy</h3>
                  <p className="text-gray-600">
                    &quot;The body has the innate ability to heal itself. 
                    Pranic Healing simply accelerates this natural process.&quot;
                  </p>
                  <p className="text-purple-600 font-semibold mt-4">- Master Choa Kok Sui</p>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Instructors Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              Meet Our{' '}
              <span className="bg-gradient-to-r from-purple-600 to-teal-600 bg-clip-text text-transparent">
                Certified Instructors
              </span>
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Learn from experienced healers who have dedicated their lives to the practice and teaching of Pranic Healing
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {instructors.map((instructor, index) => (
              <motion.div
                key={instructor.id}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.2 }}
                className="bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 overflow-hidden group"
              >
                {/* Image placeholder */}
                <div className="relative h-64 bg-gradient-to-br from-purple-100 to-teal-100 flex items-center justify-center">
                  <Users className="h-16 w-16 text-purple-400" />
                  <div className="absolute inset-0 bg-black/10 group-hover:bg-black/20 transition-colors" />
                </div>

                <div className="p-6">
                  <h3 className="text-2xl font-bold text-gray-900 mb-2">{instructor.name}</h3>
                  <p className="text-purple-600 font-semibold mb-4">{instructor.specialty}</p>
                  
                  {/* Rating and sessions */}
                  <div className="flex items-center justify-between mb-4">
                    <div className="flex items-center space-x-1">
                      <Star className="h-4 w-4 text-yellow-400 fill-current" />
                      <span className="text-sm font-medium">{instructor.rating}</span>
                    </div>
                    <span className="text-sm text-gray-500">{instructor.sessions} sessions</span>
                  </div>

                  <p className="text-gray-600 mb-4 text-sm leading-relaxed">{instructor.bio}</p>

                  {/* Experience */}
                  <div className="mb-4">
                    <span className="text-sm font-semibold text-gray-900">Experience: </span>
                    <span className="text-sm text-gray-600">{instructor.experience}</span>
                  </div>

                  {/* Certifications */}
                  <div>
                    <span className="text-sm font-semibold text-gray-900 block mb-2">Certifications:</span>
                    <div className="flex flex-wrap gap-1">
                      {instructor.certifications.map((cert, certIndex) => (
                        <span
                          key={certIndex}
                          className="px-2 py-1 bg-purple-100 text-purple-700 text-xs rounded-full"
                        >
                          {cert}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Mission Section */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-4xl font-bold text-gray-900 mb-6">
              Our{' '}
              <span className="bg-gradient-to-r from-purple-600 to-teal-600 bg-clip-text text-transparent">
                Mission
              </span>
            </h2>
            <p className="text-xl text-gray-600 max-w-4xl mx-auto leading-relaxed">
              To make Pranic Healing accessible to everyone, spreading the knowledge of energy healing 
              and empowering individuals to take charge of their own health and spiritual development. 
              We believe that everyone has the potential to heal and be healed.
            </p>
          </motion.div>
        </div>
      </section>
    </div>
  )
}