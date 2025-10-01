'use client'

import { useState } from 'react'
import { motion } from 'framer-motion'
import { 
  Calendar as CalendarIcon, 
  Clock, 
  User, 
  MapPin, 
  Star,
  ChevronLeft,
  ChevronRight
} from 'lucide-react'
import { useForm } from 'react-hook-form'
import toast from 'react-hot-toast'

type BookingForm = {
  name: string
  email: string
  phone: string
  service: string
  notes?: string
}

const services = [
  'Basic Pranic Healing - $80',
  'Advanced Pranic Healing - $120',
  'Pranic Psychotherapy - $100',
  'Twin Hearts Meditation - $25',
  'Crystal Healing - $110'
]

const timeSlots = [
  '9:00 AM', '10:00 AM', '11:00 AM', '12:00 PM',
  '1:00 PM', '2:00 PM', '3:00 PM', '4:00 PM', '5:00 PM'
]

const instructors = [
  { name: 'Dr. Sarah Chen', specialty: 'Advanced Pranic Healing', rating: 4.9 },
  { name: 'Michael Rodriguez', specialty: 'Twin Hearts Meditation', rating: 4.8 },
  { name: 'Elena Vasquez', specialty: 'Pranic Psychotherapy', rating: 5.0 }
]

// Mock events data
const events = [
  {
    date: '2024-01-15',
    title: 'Basic Healing Session',
    instructor: 'Dr. Sarah Chen',
    time: '10:00 AM',
    type: 'healing',
    available: true
  },
  {
    date: '2024-01-15',
    title: 'Twin Hearts Meditation',
    instructor: 'Michael Rodriguez',
    time: '7:00 PM',
    type: 'meditation',
    available: true
  },
  {
    date: '2024-01-16',
    title: 'Advanced Healing Workshop',
    instructor: 'Elena Vasquez',
    time: '2:00 PM',
    type: 'workshop',
    available: false
  }
]

export default function Schedule() {
  const [selectedDate, setSelectedDate] = useState<string>('')
  const [selectedTime, setSelectedTime] = useState<string>('')
  const [selectedInstructor, setSelectedInstructor] = useState<string>('')
  const [currentMonth, setCurrentMonth] = useState(new Date())
  
  const { register, handleSubmit, formState: { errors }, reset } = useForm<BookingForm>()

  const onSubmit = (data: BookingForm) => {
    if (!selectedDate || !selectedTime || !selectedInstructor) {
      toast.error('Please select date, time, and instructor')
      return
    }

    // Mock booking submission
    toast.success('Booking request submitted! We will confirm shortly.')
    reset()
    setSelectedDate('')
    setSelectedTime('')
    setSelectedInstructor('')
  }

  // Generate calendar days
  const generateCalendarDays = () => {
    const year = currentMonth.getFullYear()
    const month = currentMonth.getMonth()
    const firstDay = new Date(year, month, 1)
    const lastDay = new Date(year, month + 1, 0)
    const startDate = new Date(firstDay)
    startDate.setDate(startDate.getDate() - firstDay.getDay())
    
    const days = []
    const today = new Date()
    
    for (let i = 0; i < 42; i++) {
      const date = new Date(startDate)
      date.setDate(startDate.getDate() + i)
      
      const isCurrentMonth = date.getMonth() === month
      const isToday = date.toDateString() === today.toDateString()
      const isSelected = selectedDate === date.toISOString().split('T')[0]
      const isPast = date < today
      
      days.push({
        date,
        isCurrentMonth,
        isToday,
        isSelected,
        isPast,
        dateString: date.toISOString().split('T')[0]
      })
    }
    
    return days
  }

  const days = generateCalendarDays()
  const monthNames = ["January", "February", "March", "April", "May", "June",
    "July", "August", "September", "October", "November", "December"]

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-purple-600 via-blue-600 to-teal-600 py-16">
        <div className="max-w-7xl mx-auto px-6 lg:px-8 text-center">
          <motion.h1
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-4xl sm:text-5xl font-bold text-white mb-4"
          >
            Book Your{' '}
            <span className="bg-gradient-to-r from-yellow-300 to-pink-300 bg-clip-text text-transparent">
              Healing Session
            </span>
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-xl text-gray-200 max-w-3xl mx-auto"
          >
            Choose your preferred date, time, and instructor for a personalized healing experience
          </motion.p>
        </div>
      </section>

      <div className="max-w-7xl mx-auto px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Calendar Section */}
          <div className="lg:col-span-2">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              className="bg-white rounded-2xl shadow-lg p-6"
            >
              <div className="flex items-center justify-between mb-6">
                <h2 className="text-2xl font-bold text-gray-900">Select Date</h2>
                <div className="flex items-center space-x-4">
                  <button
                    onClick={() => setCurrentMonth(new Date(currentMonth.getFullYear(), currentMonth.getMonth() - 1))}
                    className="p-2 hover:bg-gray-100 rounded-lg transition-colors"
                  >
                    <ChevronLeft className="h-5 w-5" />
                  </button>
                  <span className="text-lg font-semibold min-w-[200px] text-center">
                    {monthNames[currentMonth.getMonth()]} {currentMonth.getFullYear()}
                  </span>
                  <button
                    onClick={() => setCurrentMonth(new Date(currentMonth.getFullYear(), currentMonth.getMonth() + 1))}
                    className="p-2 hover:bg-gray-100 rounded-lg transition-colors"
                  >
                    <ChevronRight className="h-5 w-5" />
                  </button>
                </div>
              </div>

              {/* Calendar Grid */}
              <div className="grid grid-cols-7 gap-1 mb-4">
                {['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'].map(day => (
                  <div key={day} className="p-3 text-center text-sm font-semibold text-gray-500">
                    {day}
                  </div>
                ))}
              </div>

              <div className="grid grid-cols-7 gap-1">
                {days.map((day, index) => (
                  <button
                    key={index}
                    onClick={() => !day.isPast && day.isCurrentMonth && setSelectedDate(day.dateString)}
                    disabled={day.isPast || !day.isCurrentMonth}
                    className={`
                      p-3 text-sm rounded-lg transition-all duration-200
                      ${day.isCurrentMonth ? 'hover:bg-purple-50' : 'text-gray-300'}
                      ${day.isSelected ? 'bg-purple-600 text-white' : ''}
                      ${day.isToday ? 'bg-blue-100 text-blue-800 font-semibold' : ''}
                      ${day.isPast || !day.isCurrentMonth ? 'cursor-not-allowed opacity-50' : 'cursor-pointer'}
                    `}
                  >
                    {day.date.getDate()}
                  </button>
                ))}
              </div>

              {/* Time Slots */}
              {selectedDate && (
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="mt-8"
                >
                  <h3 className="text-xl font-bold text-gray-900 mb-4">Available Times</h3>
                  <div className="grid grid-cols-3 sm:grid-cols-4 gap-3">
                    {timeSlots.map((time) => (
                      <button
                        key={time}
                        onClick={() => setSelectedTime(time)}
                        className={`
                          p-3 rounded-lg border text-sm font-medium transition-all duration-200
                          ${selectedTime === time 
                            ? 'bg-purple-600 text-white border-purple-600' 
                            : 'bg-white text-gray-700 border-gray-200 hover:border-purple-300 hover:bg-purple-50'
                          }
                        `}
                      >
                        {time}
                      </button>
                    ))}
                  </div>
                </motion.div>
              )}

              {/* Instructor Selection */}
              {selectedTime && (
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="mt-8"
                >
                  <h3 className="text-xl font-bold text-gray-900 mb-4">Choose Instructor</h3>
                  <div className="space-y-3">
                    {instructors.map((instructor) => (
                      <button
                        key={instructor.name}
                        onClick={() => setSelectedInstructor(instructor.name)}
                        className={`
                          w-full p-4 rounded-lg border text-left transition-all duration-200
                          ${selectedInstructor === instructor.name
                            ? 'bg-purple-600 text-white border-purple-600'
                            : 'bg-white text-gray-700 border-gray-200 hover:border-purple-300 hover:bg-purple-50'
                          }
                        `}
                      >
                        <div className="flex items-center justify-between">
                          <div>
                            <div className="font-semibold">{instructor.name}</div>
                            <div className="text-sm opacity-75">{instructor.specialty}</div>
                          </div>
                          <div className="flex items-center space-x-1">
                            <Star className="h-4 w-4 fill-current text-yellow-400" />
                            <span className="text-sm">{instructor.rating}</span>
                          </div>
                        </div>
                      </button>
                    ))}
                  </div>
                </motion.div>
              )}
            </motion.div>
          </div>

          {/* Booking Form */}
          <div className="lg:col-span-1">
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              className="bg-white rounded-2xl shadow-lg p-6 sticky top-24"
            >
              <h2 className="text-2xl font-bold text-gray-900 mb-6">Book Your Session</h2>
              
              {/* Selection Summary */}
              {(selectedDate || selectedTime || selectedInstructor) && (
                <div className="mb-6 p-4 bg-purple-50 rounded-lg">
                  <h3 className="font-semibold text-purple-900 mb-2">Your Selection:</h3>
                  {selectedDate && (
                    <div className="flex items-center space-x-2 text-sm text-purple-700 mb-1">
                      <CalendarIcon className="h-4 w-4" />
                      <span>{new Date(selectedDate).toLocaleDateString()}</span>
                    </div>
                  )}
                  {selectedTime && (
                    <div className="flex items-center space-x-2 text-sm text-purple-700 mb-1">
                      <Clock className="h-4 w-4" />
                      <span>{selectedTime}</span>
                    </div>
                  )}
                  {selectedInstructor && (
                    <div className="flex items-center space-x-2 text-sm text-purple-700">
                      <User className="h-4 w-4" />
                      <span>{selectedInstructor}</span>
                    </div>
                  )}
                </div>
              )}

              <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Name *</label>
                  <input
                    {...register('name', { required: 'Name is required' })}
                    type="text"
                    className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-purple-500"
                    placeholder="Your full name"
                  />
                  {errors.name && <p className="text-red-500 text-sm mt-1">{errors.name.message}</p>}
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Email *</label>
                  <input
                    {...register('email', { 
                      required: 'Email is required',
                      pattern: {
                        value: /^\S+@\S+$/i,
                        message: 'Invalid email address'
                      }
                    })}
                    type="email"
                    className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-purple-500"
                    placeholder="your@email.com"
                  />
                  {errors.email && <p className="text-red-500 text-sm mt-1">{errors.email.message}</p>}
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Phone *</label>
                  <input
                    {...register('phone', { required: 'Phone is required' })}
                    type="tel"
                    className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-purple-500"
                    placeholder="(555) 123-4567"
                  />
                  {errors.phone && <p className="text-red-500 text-sm mt-1">{errors.phone.message}</p>}
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Service *</label>
                  <select
                    {...register('service', { required: 'Please select a service' })}
                    className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-purple-500"
                  >
                    <option value="">Select a service</option>
                    {services.map((service) => (
                      <option key={service} value={service}>{service}</option>
                    ))}
                  </select>
                  {errors.service && <p className="text-red-500 text-sm mt-1">{errors.service.message}</p>}
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Special Notes</label>
                  <textarea
                    {...register('notes')}
                    rows={3}
                    className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-purple-500"
                    placeholder="Any specific needs or questions..."
                  />
                </div>

                <button
                  type="submit"
                  className="w-full bg-gradient-to-r from-purple-600 to-teal-600 text-white py-3 rounded-lg font-semibold hover:shadow-lg transition-all duration-300 disabled:opacity-50"
                  disabled={!selectedDate || !selectedTime || !selectedInstructor}
                >
                  Book Session
                </button>
              </form>

              <div className="mt-6 p-4 bg-gray-50 rounded-lg">
                <div className="flex items-start space-x-2">
                  <MapPin className="h-5 w-5 text-gray-400 mt-0.5" />
                  <div>
                    <div className="font-semibold text-gray-900">Location</div>
                    <div className="text-sm text-gray-600">
                      123 Healing Lane<br />
                      Wellness City, WC 12345
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </div>
  )
}