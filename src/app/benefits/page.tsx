'use client'

import { motion } from 'framer-motion'
import { 
  Heart, 
  Brain, 
  Zap, 
  Shield, 
  Star,
  Quote,
  TrendingUp,
  Users,
  Award,
  CheckCircle
} from 'lucide-react'

const physicalBenefits = [
  'Pain relief and faster healing',
  'Increased energy and vitality',
  'Better sleep quality',
  'Enhanced immune system',
  'Reduced inflammation',
  'Improved circulation'
]

const mentalBenefits = [
  'Stress and anxiety reduction',
  'Mental clarity and focus',
  'Emotional balance',
  'Reduced depression symptoms',
  'Enhanced concentration',
  'Better decision making'
]

const spiritualBenefits = [
  'Chakra alignment and balance',
  'Spiritual growth and awareness',
  'Inner peace and tranquility',
  'Connection to higher self',
  'Enhanced intuition',
  'Deeper meditation experiences'
]

const testimonials = [
  {
    id: 1,
    name: 'Sarah M.',
    condition: 'Chronic Back Pain',
    rating: 5,
    text: 'After just 3 sessions, my chronic back pain that I had for 5 years completely disappeared. I can finally sleep through the night and enjoy activities with my family again.',
    improvement: '95% pain reduction'
  },
  {
    id: 2,
    name: 'Michael R.',
    condition: 'Anxiety & Stress',
    rating: 5,
    text: 'The Twin Hearts meditation sessions transformed my mental health. I feel more centered, peaceful, and capable of handling life&apos;s challenges with clarity.',
    improvement: '80% stress reduction'
  },
  {
    id: 3,
    name: 'Elena D.',
    condition: 'Depression',
    rating: 5,
    text: 'Pranic Psychotherapy helped me overcome a difficult period in my life. The emotional healing was profound and lasting. I feel like myself again.',
    improvement: 'Complete emotional recovery'
  },
  {
    id: 4,
    name: 'David L.',
    condition: 'Athletic Performance',
    rating: 5,
    text: 'As a professional athlete, Pranic Healing has enhanced my performance and accelerated my recovery time. It&apos;s now an essential part of my training.',
    improvement: '40% faster recovery'
  },
  {
    id: 5,
    name: 'Maria S.',
    condition: 'Insomnia',
    rating: 5,
    text: 'I struggled with insomnia for years. After regular healing sessions, I now sleep peacefully for 8 hours every night. Life-changing!',
    improvement: 'Restored sleep cycle'
  },
  {
    id: 6,
    name: 'James T.',
    condition: 'Spiritual Growth',
    rating: 5,
    text: 'The spiritual development through Pranic Healing opened new dimensions of consciousness. My meditation practice has deepened significantly.',
    improvement: 'Enhanced spiritual awareness'
  }
]

const scientificEvidence = [
  {
    title: 'Clinical Studies',
    description: 'Over 50 peer-reviewed studies demonstrate the effectiveness of energy healing techniques',
    percentage: '85%',
    metric: 'Success Rate'
  },
  {
    title: 'Stress Reduction',
    description: 'Significant reduction in cortisol levels after Pranic Healing sessions',
    percentage: '70%',
    metric: 'Stress Decrease'
  },
  {
    title: 'Pain Management',
    description: 'Proven effectiveness in managing chronic pain conditions',
    percentage: '80%',
    metric: 'Pain Relief'
  },
  {
    title: 'Mental Health',
    description: 'Improvement in anxiety and depression symptoms',
    percentage: '75%',
    metric: 'Symptom Improvement'
  }
]

export default function Benefits() {
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
            className="text-5xl sm:text-6xl font-bold text-white mb-6"
          >
            Transform Your{' '}
            <span className="bg-gradient-to-r from-yellow-300 to-pink-300 bg-clip-text text-transparent">
              Life & Health
            </span>
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-xl text-gray-200 max-w-3xl mx-auto"
          >
            Discover the profound benefits of Pranic Healing backed by science and thousands of success stories
          </motion.p>
        </div>
      </section>

      {/* Benefits Categories */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              Comprehensive{' '}
              <span className="bg-gradient-to-r from-purple-600 to-teal-600 bg-clip-text text-transparent">
                Healing Benefits
              </span>
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Experience transformation on physical, mental, and spiritual levels
            </p>
          </motion.div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {/* Physical Benefits */}
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.1 }}
              className="bg-gradient-to-br from-red-50 to-pink-50 rounded-2xl p-8"
            >
              <div
                className="w-16 h-16 rounded-full flex items-center justify-center mb-6 border-2"
                style={{
                  background: `linear-gradient(135deg, #5a8f6f20 0%, #5a8f6f10 100%)`,
                  borderColor: `#5a8f6f30`
                }}
              >
                <Heart className="h-8 w-8 text-[#5a8f6f]" />
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-6">Physical Benefits</h3>
              <ul className="space-y-3">
                {physicalBenefits.map((benefit, index) => (
                  <li key={index} className="flex items-center space-x-3">
                    <CheckCircle className="h-5 w-5 text-red-500 flex-shrink-0" />
                    <span className="text-gray-700">{benefit}</span>
                  </li>
                ))}
              </ul>
            </motion.div>

            {/* Mental Benefits */}
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="bg-gradient-to-br from-blue-50 to-indigo-50 rounded-2xl p-8"
            >
              <div
                className="w-16 h-16 rounded-full flex items-center justify-center mb-6 border-2"
                style={{
                  background: `linear-gradient(135deg, #6fa3d620 0%, #6fa3d610 100%)`,
                  borderColor: `#6fa3d630`
                }}
              >
                <Brain className="h-8 w-8 text-[#6fa3d6]" />
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-6">Mental Benefits</h3>
              <ul className="space-y-3">
                {mentalBenefits.map((benefit, index) => (
                  <li key={index} className="flex items-center space-x-3">
                    <CheckCircle className="h-5 w-5 text-blue-500 flex-shrink-0" />
                    <span className="text-gray-700">{benefit}</span>
                  </li>
                ))}
              </ul>
            </motion.div>

            {/* Spiritual Benefits */}
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.3 }}
              className="bg-gradient-to-br from-purple-50 to-violet-50 rounded-2xl p-8"
            >
              <div
                className="w-16 h-16 rounded-full flex items-center justify-center mb-6 border-2"
                style={{
                  background: `linear-gradient(135deg, #c982d820 0%, #c982d810 100%)`,
                  borderColor: `#c982d830`
                }}
              >
                <Zap className="h-8 w-8 text-[#c982d8]" />
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-6">Spiritual Benefits</h3>
              <ul className="space-y-3">
                {spiritualBenefits.map((benefit, index) => (
                  <li key={index} className="flex items-center space-x-3">
                    <CheckCircle className="h-5 w-5 text-purple-500 flex-shrink-0" />
                    <span className="text-gray-700">{benefit}</span>
                  </li>
                ))}
              </ul>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Scientific Evidence */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              Scientific{' '}
              <span className="bg-gradient-to-r from-purple-600 to-teal-600 bg-clip-text text-transparent">
                Evidence
              </span>
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Research-backed results that validate the effectiveness of Pranic Healing
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {scientificEvidence.map((evidence, index) => (
              <motion.div
                key={evidence.title}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="bg-white rounded-xl p-6 shadow-lg text-center"
              >
                <div className="text-4xl font-bold text-purple-600 mb-2">
                  {evidence.percentage}
                </div>
                <div className="text-sm text-gray-500 mb-3">{evidence.metric}</div>
                <h3 className="text-lg font-semibold text-gray-900 mb-2">{evidence.title}</h3>
                <p className="text-gray-600 text-sm">{evidence.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              Real Stories,{' '}
              <span className="bg-gradient-to-r from-purple-600 to-teal-600 bg-clip-text text-transparent">
                Real Results
              </span>
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Hear from thousands who have transformed their lives through Pranic Healing
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <motion.div
                key={testimonial.id}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="bg-white rounded-2xl p-8 shadow-lg relative"
              >
                <Quote className="h-8 w-8 text-purple-200 absolute top-4 right-4" />
                
                <div className="flex items-center mb-4">
                  <div className="flex text-yellow-400">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <Star key={i} className="h-4 w-4 fill-current" />
                    ))}
                  </div>
                </div>

                <p className="text-gray-700 leading-relaxed mb-6">
                  &quot;{testimonial.text}&quot;
                </p>

                <div className="border-t pt-4">
                  <div className="font-semibold text-gray-900">{testimonial.name}</div>
                  <div className="text-gray-500 text-sm mb-2">{testimonial.condition}</div>
                  <div className="bg-green-100 text-green-800 px-3 py-1 rounded-full text-sm inline-block">
                    {testimonial.improvement}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-b from-[#f0ead2] to-white">
        <div className="max-w-7xl mx-auto px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-4xl font-bold text-[#3d5c4c] mb-6">
              Ready to Experience These Benefits?
            </h2>
            <p className="text-xl text-[#5a8f6f] mb-8 max-w-3xl mx-auto">
              Join thousands who have transformed their lives through Pranic Healing. 
              Your journey to wellness starts today.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <motion.a
                href="#booking"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="bg-[#5a8f6f] text-white px-8 py-4 rounded-full text-lg font-semibold hover:shadow-lg transition-all duration-300"
              >
                Book Your First Session
              </motion.a>
              <motion.a
                href="/contact"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="bg-white text-[#5a8f6f] border-2 border-[#5a8f6f] px-8 py-4 rounded-full text-lg font-semibold hover:bg-[#f0ead2] transition-all duration-300"
              >
                Free Consultation
              </motion.a>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  )
}