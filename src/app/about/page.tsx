'use client'

import { motion } from 'framer-motion'
import { Award, Users, Globe, Heart } from 'lucide-react'

const values = [
  {
    icon: Heart,
    title: 'Healing',
    description: 'Dedicated to physical, emotional, and spiritual healing'
  },
  {
    icon: Users,
    title: 'Community',
    description: 'Building a supportive community of healing practitioners'
  },
  {
    icon: Globe,
    title: 'Global Network',
    description: 'Part of World Pranic Healing Foundation\'s international network'
  },
  {
    icon: Award,
    title: 'Excellence',
    description: 'Certified instructors trained in Master Choa Kok Sui\'s methods'
  }
]

export default function About() {
  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <div className="bg-gradient-to-b from-[#5a8f6f] to-[#3d5c4c] text-white py-16 sm:py-20 lg:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center"
          >
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold mb-6">
              About Us
            </h1>
            <p className="text-lg sm:text-xl text-[#c5dff0] max-w-3xl mx-auto">
              Bringing ancient wisdom and modern healing techniques to Lucknow
            </p>
          </motion.div>
        </div>
      </div>

      {/* About Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-16 lg:py-20">
        {/* Main About */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="mb-16"
        >
          <h2 className="text-3xl sm:text-4xl font-bold text-[#3d5c4c] mb-6">
            Pranic Healing Center Lucknow
          </h2>
          <p className="text-lg text-[#3d5c4c] leading-8 mb-4">
            We are part of the <strong>MCKS Yoga Vidya Pranic Healing Trust of UP Lucknow</strong>, 
            an affiliated organization of the World Pranic Healing Foundation. Our mission is to bring 
            the transformative teachings of Master Choa Kok Sui to the people of Lucknow and surrounding areas.
          </p>
          <p className="text-lg text-[#3d5c4c] leading-8">
            Since our establishment, we have been dedicated to teaching Pranic Healing - an ancient 
            system of energy healing that uses prana (life energy) to heal physical, emotional, and 
            spiritual ailments. Our certified instructors provide comprehensive training in self-healing 
            techniques and energy manipulation methods.
          </p>
        </motion.div>

        {/* Our Mission */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.1 }}
          className="mb-16 bg-white rounded-2xl p-8 shadow-md border border-[#e0d4cc]"
        >
          <h2 className="text-3xl font-bold text-[#3d5c4c] mb-4">
            Our Mission
          </h2>
          <p className="text-lg text-[#3d5c4c] leading-8">
            To empower individuals through Pranic Healing, enabling them to take charge of their own 
            health and spiritual development. We believe that every person has the innate ability to 
            heal themselves and others through proper knowledge and practice of energy healing techniques.
          </p>
        </motion.div>

        {/* Core Values */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="mb-16"
        >
          <h2 className="text-3xl sm:text-4xl font-bold text-[#3d5c4c] mb-12 text-center">
            Our Core Values
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, index) => (
              <motion.div
                key={value.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="text-center"
              >
                <div className="flex justify-center mb-4">
                  <div
                    className="w-16 h-16 rounded-full flex items-center justify-center border-2"
                    style={{
                      background: `linear-gradient(135deg, ${'#5a8f6f'}20 0%, ${'#5a8f6f'}10 100%)`,
                      borderColor: `${'#5a8f6f'}30`
                    }}
                  >
                    <value.icon className="h-8 w-8 text-[#5a8f6f]" />
                  </div>
                </div>
                <h3 className="text-xl font-bold text-[#3d5c4c] mb-2">
                  {value.title}
                </h3>
                <p className="text-[#3d5c4c]">
                  {value.description}
                </p>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Why Choose Us */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          className="bg-gradient-to-br from-[#f0ead2] via-white to-[#e5c4f0]/40 rounded-3xl p-8 sm:p-12 border border-[#e0d4cc]"
        >
          <h2 className="text-3xl sm:text-4xl font-bold text-[#3d5c4c] mb-8">
            Why Choose Our Center?
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <h3 className="text-xl font-bold text-[#3d5c4c] mb-3 flex items-center">
                <span className="w-8 h-8 bg-[#5a8f6f] rounded-full flex items-center justify-center text-white text-sm mr-3 font-bold">✓</span>
                Certified Instructors
              </h3>
              <p className="text-[#3d5c4c]">
                Our instructors are trained and certified by the official World Pranic Healing Foundation
              </p>
            </div>
            <div>
              <h3 className="text-xl font-bold text-[#3d5c4c] mb-3 flex items-center">
                <span className="w-8 h-8 bg-[#5a8f6f] rounded-full flex items-center justify-center text-white text-sm mr-3 font-bold">✓</span>
                Proven Methods
              </h3>
              <p className="text-[#3d5c4c]">
                We teach the authentic methods of Master Choa Kok Sui
              </p>
            </div>
            <div>
              <h3 className="text-xl font-bold text-[#3d5c4c] mb-3 flex items-center">
                <span className="w-8 h-8 bg-[#5a8f6f] rounded-full flex items-center justify-center text-white text-sm mr-3 font-bold">✓</span>
                Personal Support
              </h3>
              <p className="text-[#3d5c4c]">
                One-on-one guidance and personalized healing sessions available
              </p>
            </div>
            <div>
              <h3 className="text-xl font-bold text-[#3d5c4c] mb-3 flex items-center">
                <span className="w-8 h-8 bg-[#5a8f6f] rounded-full flex items-center justify-center text-white text-sm mr-3 font-bold">✓</span>
                Global Community
              </h3>
              <p className="text-[#3d5c4c]">
                Connect with the worldwide Pranic Healing community
              </p>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  )
}