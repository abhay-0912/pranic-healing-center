'use client'

import { useState } from 'react'
import { motion } from 'framer-motion'
import { 
  BarChart3,
  Users,
  Calendar,
  MessageSquare,
  Star,
  Plus,
  Edit,
  Trash2,
  Eye,
  Settings,
  Bell,
  TrendingUp
} from 'lucide-react'
import { useForm } from 'react-hook-form'
import toast from 'react-hot-toast'

type AnnouncementForm = {
  title: string
  content: string
  priority: 'low' | 'medium' | 'high'
  published: boolean
}

type SessionForm = {
  title: string
  instructor: string
  date: string
  time: string
  duration: number
  capacity: number
  price: number
  description: string
}

const tabs = [
  { id: 'overview', name: 'Overview', icon: BarChart3 },
  { id: 'announcements', name: 'Announcements', icon: Bell },
  { id: 'sessions', name: 'Sessions', icon: Calendar },
  { id: 'instructors', name: 'Instructors', icon: Users },
  { id: 'testimonials', name: 'Testimonials', icon: MessageSquare },
  { id: 'stories', name: 'Success Stories', icon: Star },
]

const mockStats = {
  totalSessions: 156,
  activeClients: 89,
  revenue: 12450,
  satisfaction: 98
}

const mockAnnouncements = [
  {
    id: 1,
    title: 'New Twin Hearts Meditation Schedule',
    content: 'We are excited to announce new evening meditation sessions every Tuesday and Thursday at 7 PM.',
    priority: 'high' as const,
    published: true,
    createdAt: '2024-01-15'
  },
  {
    id: 2,
    title: 'Holiday Schedule Changes',
    content: 'Please note our modified hours during the holiday season. Check our website for updated schedules.',
    priority: 'medium' as const,
    published: true,
    createdAt: '2024-01-14'
  }
]

const mockSessions = [
  {
    id: 1,
    title: 'Basic Pranic Healing',
    instructor: 'Dr. Sarah Chen',
    date: '2024-01-20',
    time: '10:00',
    duration: 60,
    capacity: 8,
    enrolled: 5,
    price: 80,
    status: 'active'
  },
  {
    id: 2,
    title: 'Twin Hearts Meditation',
    instructor: 'Michael Rodriguez',
    date: '2024-01-21',
    time: '19:00',
    duration: 45,
    capacity: 20,
    enrolled: 12,
    price: 25,
    status: 'active'
  }
]

export default function AdminDashboard() {
  const [activeTab, setActiveTab] = useState('overview')
  const [showAnnouncementForm, setShowAnnouncementForm] = useState(false)
  const [showSessionForm, setShowSessionForm] = useState(false)

  const { register: registerAnnouncement, handleSubmit: handleAnnouncementSubmit, reset: resetAnnouncement } = useForm<AnnouncementForm>()
  const { register: registerSession, handleSubmit: handleSessionSubmit, reset: resetSession } = useForm<SessionForm>()

  const onAnnouncementSubmit = (data: AnnouncementForm) => {
    toast.success('Announcement created successfully!')
    resetAnnouncement()
    setShowAnnouncementForm(false)
  }

  const onSessionSubmit = (data: SessionForm) => {
    toast.success('Session created successfully!')
    resetSession()
    setShowSessionForm(false)
  }

  const renderOverview = () => (
    <div className="space-y-8">
      {/* Welcome */}
      <div>
        <h2 className="text-3xl font-bold text-gray-900 mb-2">Welcome back, Admin!</h2>
        <p className="text-gray-600">Here&apos;s what&apos;s happening at your healing center today.</p>
      </div>

      {/* Stats Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        <div className="bg-white rounded-xl p-6 shadow-lg">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-gray-500 text-sm">Total Sessions</p>
              <p className="text-3xl font-bold text-gray-900">{mockStats.totalSessions}</p>
            </div>
            <Calendar className="h-8 w-8 text-purple-600" />
          </div>
        </div>
        
        <div className="bg-white rounded-xl p-6 shadow-lg">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-gray-500 text-sm">Active Clients</p>
              <p className="text-3xl font-bold text-gray-900">{mockStats.activeClients}</p>
            </div>
            <Users className="h-8 w-8 text-blue-600" />
          </div>
        </div>
        
        <div className="bg-white rounded-xl p-6 shadow-lg">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-gray-500 text-sm">Monthly Revenue</p>
              <p className="text-3xl font-bold text-gray-900">${mockStats.revenue.toLocaleString()}</p>
            </div>
            <TrendingUp className="h-8 w-8 text-green-600" />
          </div>
        </div>
        
        <div className="bg-white rounded-xl p-6 shadow-lg">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-gray-500 text-sm">Satisfaction</p>
              <p className="text-3xl font-bold text-gray-900">{mockStats.satisfaction}%</p>
            </div>
            <Star className="h-8 w-8 text-yellow-600" />
          </div>
        </div>
      </div>

      {/* Recent Activity */}
      <div className="bg-white rounded-xl p-6 shadow-lg">
        <h3 className="text-xl font-bold text-gray-900 mb-4">Recent Activity</h3>
        <div className="space-y-3">
          <div className="flex items-center space-x-3 p-3 bg-gray-50 rounded-lg">
            <div className="w-2 h-2 bg-green-500 rounded-full"></div>
            <span className="text-gray-700">New booking: Sarah M. scheduled Advanced Healing session</span>
            <span className="text-gray-400 text-sm ml-auto">2 min ago</span>
          </div>
          <div className="flex items-center space-x-3 p-3 bg-gray-50 rounded-lg">
            <div className="w-2 h-2 bg-blue-500 rounded-full"></div>
            <span className="text-gray-700">Twin Hearts session completed with 15 participants</span>
            <span className="text-gray-400 text-sm ml-auto">1 hour ago</span>
          </div>
          <div className="flex items-center space-x-3 p-3 bg-gray-50 rounded-lg">
            <div className="w-2 h-2 bg-purple-500 rounded-full"></div>
            <span className="text-gray-700">New testimonial received from Michael R.</span>
            <span className="text-gray-400 text-sm ml-auto">3 hours ago</span>
          </div>
        </div>
      </div>
    </div>
  )

  const renderAnnouncements = () => (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <h2 className="text-2xl font-bold text-gray-900">Announcements</h2>
        <button
          onClick={() => setShowAnnouncementForm(true)}
          className="bg-purple-600 text-white px-4 py-2 rounded-lg flex items-center space-x-2 hover:bg-purple-700 transition-colors"
        >
          <Plus className="h-4 w-4" />
          <span>New Announcement</span>
        </button>
      </div>

      {/* Announcement Form Modal */}
      {showAnnouncementForm && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
          <div className="bg-white rounded-xl p-8 max-w-2xl w-full mx-4">
            <h3 className="text-xl font-bold text-gray-900 mb-6">Create New Announcement</h3>
            <form onSubmit={handleAnnouncementSubmit(onAnnouncementSubmit)} className="space-y-4">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Title</label>
                <input
                  {...registerAnnouncement('title', { required: true })}
                  type="text"
                  className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-500"
                  placeholder="Announcement title"
                />
              </div>
              
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Content</label>
                <textarea
                  {...registerAnnouncement('content', { required: true })}
                  rows={4}
                  className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-500"
                  placeholder="Announcement content"
                />
              </div>
              
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Priority</label>
                <select
                  {...registerAnnouncement('priority')}
                  className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-500"
                >
                  <option value="low">Low</option>
                  <option value="medium">Medium</option>
                  <option value="high">High</option>
                </select>
              </div>
              
              <div className="flex items-center">
                <input
                  {...registerAnnouncement('published')}
                  type="checkbox"
                  className="w-4 h-4 text-purple-600 border-gray-300 rounded focus:ring-purple-500"
                />
                <label className="ml-2 text-sm text-gray-700">Publish immediately</label>
              </div>
              
              <div className="flex space-x-4 pt-4">
                <button
                  type="submit"
                  className="bg-purple-600 text-white px-6 py-2 rounded-lg hover:bg-purple-700 transition-colors"
                >
                  Create
                </button>
                <button
                  type="button"
                  onClick={() => setShowAnnouncementForm(false)}
                  className="bg-gray-300 text-gray-700 px-6 py-2 rounded-lg hover:bg-gray-400 transition-colors"
                >
                  Cancel
                </button>
              </div>
            </form>
          </div>
        </div>
      )}

      {/* Announcements List */}
      <div className="space-y-4">
        {mockAnnouncements.map((announcement) => (
          <div key={announcement.id} className="bg-white rounded-xl p-6 shadow-lg">
            <div className="flex items-start justify-between">
              <div className="flex-1">
                <div className="flex items-center space-x-3 mb-2">
                  <h3 className="text-lg font-semibold text-gray-900">{announcement.title}</h3>
                  <span className={`px-2 py-1 rounded-full text-xs font-medium ${
                    announcement.priority === 'high' ? 'bg-red-100 text-red-800' :
                    announcement.priority === 'medium' ? 'bg-yellow-100 text-yellow-800' :
                    'bg-green-100 text-green-800'
                  }`}>
                    {announcement.priority}
                  </span>
                  <span className={`px-2 py-1 rounded-full text-xs font-medium ${
                    announcement.published ? 'bg-green-100 text-green-800' : 'bg-gray-100 text-gray-800'
                  }`}>
                    {announcement.published ? 'Published' : 'Draft'}
                  </span>
                </div>
                <p className="text-gray-600 mb-3">{announcement.content}</p>
                <p className="text-gray-400 text-sm">Created: {announcement.createdAt}</p>
              </div>
              <div className="flex space-x-2">
                <button className="p-2 text-gray-400 hover:text-blue-600 transition-colors">
                  <Eye className="h-4 w-4" />
                </button>
                <button className="p-2 text-gray-400 hover:text-green-600 transition-colors">
                  <Edit className="h-4 w-4" />
                </button>
                <button className="p-2 text-gray-400 hover:text-red-600 transition-colors">
                  <Trash2 className="h-4 w-4" />
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  )

  const renderSessions = () => (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <h2 className="text-2xl font-bold text-gray-900">Sessions</h2>
        <button
          onClick={() => setShowSessionForm(true)}
          className="bg-purple-600 text-white px-4 py-2 rounded-lg flex items-center space-x-2 hover:bg-purple-700 transition-colors"
        >
          <Plus className="h-4 w-4" />
          <span>New Session</span>
        </button>
      </div>

      {/* Session Form Modal */}
      {showSessionForm && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
          <div className="bg-white rounded-xl p-8 max-w-2xl w-full mx-4 max-h-[90vh] overflow-y-auto">
            <h3 className="text-xl font-bold text-gray-900 mb-6">Create New Session</h3>
            <form onSubmit={handleSessionSubmit(onSessionSubmit)} className="space-y-4">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Session Title</label>
                  <input
                    {...registerSession('title', { required: true })}
                    type="text"
                    className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-500"
                    placeholder="Session title"
                  />
                </div>
                
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Instructor</label>
                  <select
                    {...registerSession('instructor', { required: true })}
                    className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-500"
                  >
                    <option value="">Select instructor</option>
                    <option value="Dr. Sarah Chen">Dr. Sarah Chen</option>
                    <option value="Michael Rodriguez">Michael Rodriguez</option>
                    <option value="Elena Vasquez">Elena Vasquez</option>
                  </select>
                </div>
                
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Date</label>
                  <input
                    {...registerSession('date', { required: true })}
                    type="date"
                    className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-500"
                  />
                </div>
                
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Time</label>
                  <input
                    {...registerSession('time', { required: true })}
                    type="time"
                    className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-500"
                  />
                </div>
                
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Duration (minutes)</label>
                  <input
                    {...registerSession('duration', { required: true })}
                    type="number"
                    className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-500"
                    placeholder="60"
                  />
                </div>
                
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Capacity</label>
                  <input
                    {...registerSession('capacity', { required: true })}
                    type="number"
                    className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-500"
                    placeholder="8"
                  />
                </div>
                
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Price ($)</label>
                  <input
                    {...registerSession('price', { required: true })}
                    type="number"
                    className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-500"
                    placeholder="80"
                  />
                </div>
              </div>
              
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Description</label>
                <textarea
                  {...registerSession('description')}
                  rows={3}
                  className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-500"
                  placeholder="Session description"
                />
              </div>
              
              <div className="flex space-x-4 pt-4">
                <button
                  type="submit"
                  className="bg-purple-600 text-white px-6 py-2 rounded-lg hover:bg-purple-700 transition-colors"
                >
                  Create Session
                </button>
                <button
                  type="button"
                  onClick={() => setShowSessionForm(false)}
                  className="bg-gray-300 text-gray-700 px-6 py-2 rounded-lg hover:bg-gray-400 transition-colors"
                >
                  Cancel
                </button>
              </div>
            </form>
          </div>
        </div>
      )}

      {/* Sessions List */}
      <div className="space-y-4">
        {mockSessions.map((session) => (
          <div key={session.id} className="bg-white rounded-xl p-6 shadow-lg">
            <div className="flex items-start justify-between">
              <div className="flex-1">
                <div className="flex items-center space-x-3 mb-2">
                  <h3 className="text-lg font-semibold text-gray-900">{session.title}</h3>
                  <span className="px-2 py-1 bg-green-100 text-green-800 rounded-full text-xs font-medium">
                    {session.status}
                  </span>
                </div>
                <div className="grid grid-cols-2 md:grid-cols-4 gap-4 text-sm text-gray-600">
                  <div>
                    <span className="font-medium">Instructor:</span> {session.instructor}
                  </div>
                  <div>
                    <span className="font-medium">Date:</span> {session.date}
                  </div>
                  <div>
                    <span className="font-medium">Time:</span> {session.time}
                  </div>
                  <div>
                    <span className="font-medium">Duration:</span> {session.duration} min
                  </div>
                  <div>
                    <span className="font-medium">Enrolled:</span> {session.enrolled}/{session.capacity}
                  </div>
                  <div>
                    <span className="font-medium">Price:</span> ${session.price}
                  </div>
                </div>
              </div>
              <div className="flex space-x-2">
                <button className="p-2 text-gray-400 hover:text-blue-600 transition-colors">
                  <Eye className="h-4 w-4" />
                </button>
                <button className="p-2 text-gray-400 hover:text-green-600 transition-colors">
                  <Edit className="h-4 w-4" />
                </button>
                <button className="p-2 text-gray-400 hover:text-red-600 transition-colors">
                  <Trash2 className="h-4 w-4" />
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  )

  const renderContent = () => {
    switch (activeTab) {
      case 'overview':
        return renderOverview()
      case 'announcements':
        return renderAnnouncements()
      case 'sessions':
        return renderSessions()
      case 'instructors':
        return <div className="text-center py-20 text-gray-500">Instructors management coming soon...</div>
      case 'testimonials':
        return <div className="text-center py-20 text-gray-500">Testimonials management coming soon...</div>
      case 'stories':
        return <div className="text-center py-20 text-gray-500">Success stories management coming soon...</div>
      default:
        return renderOverview()
    }
  }

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="flex">
        {/* Sidebar */}
        <div className="w-64 bg-white shadow-lg">
          <div className="p-6">
            <h1 className="text-xl font-bold text-gray-900">Admin Dashboard</h1>
          </div>
          <nav className="mt-6">
            {tabs.map((tab) => (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id)}
                className={`w-full flex items-center space-x-3 px-6 py-3 text-left hover:bg-gray-50 transition-colors ${
                  activeTab === tab.id ? 'bg-purple-50 text-purple-600 border-r-2 border-purple-600' : 'text-gray-700'
                }`}
              >
                <tab.icon className="h-5 w-5" />
                <span>{tab.name}</span>
              </button>
            ))}
          </nav>
        </div>

        {/* Main Content */}
        <div className="flex-1 p-8">
          <motion.div
            key={activeTab}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.3 }}
          >
            {renderContent()}
          </motion.div>
        </div>
      </div>
    </div>
  )
}