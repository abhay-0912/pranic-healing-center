'use client'

import { useEffect, useRef, useState } from 'react'
import { motion } from 'framer-motion'
import { Play, Pause, Volume2, VolumeX, Music } from 'lucide-react'

const tracks = [
  { id: 'guided-1', title: 'Guided Calm – Water Breath', src: '/audio/guided-1.mp3', duration: '10:00' },
  { id: 'guided-2', title: 'Loving-Kindness – Heart Center', src: '/audio/guided-2.mp3', duration: '12:30' },
]

export default function MeditationPlayer() {
  const audioRef = useRef<HTMLAudioElement | null>(null)
  const [current, setCurrent] = useState(tracks[0])
  const [playing, setPlaying] = useState(false)
  const [muted, setMuted] = useState(false)

  useEffect(() => {
    if (!audioRef.current) return
    audioRef.current.pause()
    audioRef.current.src = current.src
    if (playing) audioRef.current.play().catch(() => setPlaying(false))
  }, [current])

  const togglePlay = () => {
    if (!audioRef.current) return
    if (playing) {
      audioRef.current.pause()
      setPlaying(false)
    } else {
      audioRef.current.play().then(() => setPlaying(true)).catch(() => setPlaying(false))
    }
  }

  const toggleMute = () => {
    if (!audioRef.current) return
    audioRef.current.muted = !audioRef.current.muted
    setMuted(audioRef.current.muted)
  }

  return (
    <section aria-labelledby="meditation-title" className="bg-white rounded-2xl shadow-md border border-[#e0d4cc] overflow-hidden">
      <div className="p-6 sm:p-8">
        <h2 id="meditation-title" className="text-2xl font-bold text-[#3d5c4c] mb-2">Guided Meditation</h2>
        <p className="text-[#5a8f6f] mb-6">Soft, soothing player with minimal controls.</p>

        <div className="flex flex-col md:flex-row gap-6">
          {/* Player Card */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            className="flex-1 rounded-2xl p-6 bg-gradient-to-br from-[#f0ead2] via-white to-[#e5c4f0]/40"
          >
            <div className="flex items-center gap-3 mb-4">
              <Music className="h-6 w-6 text-[#c982d8]" aria-hidden="true" />
              <div>
                <p className="text-[#3d5c4c] font-semibold">{current.title}</p>
                <p className="text-[#5a8f6f] text-sm">{current.duration}</p>
              </div>
            </div>

            <div className="flex items-center gap-4">
              <button
                onClick={togglePlay}
                aria-label={playing ? 'Pause meditation' : 'Play meditation'}
                className="p-3 rounded-full text-white bg-gradient-to-r from-[#5a8f6f] to-[#6fa3d6]"
              >
                {playing ? <Pause className="h-5 w-5" /> : <Play className="h-5 w-5" />}
              </button>
              <button
                onClick={toggleMute}
                aria-label={muted ? 'Unmute' : 'Mute'}
                className="p-3 rounded-full text-white bg-gradient-to-r from-[#c982d8] to-[#6fa3d6]"
              >
                {muted ? <VolumeX className="h-5 w-5" /> : <Volume2 className="h-5 w-5" />}
              </button>
            </div>

            <audio ref={audioRef} src={current.src} aria-hidden="true" />
          </motion.div>

          {/* Track List */}
          <div className="w-full md:w-64">
            <ul className="space-y-3" aria-label="Meditation tracks">
              {tracks.map(t => (
                <li key={t.id}>
                  <button
                    onClick={() => setCurrent(t)}
                    aria-current={current.id === t.id ? 'true' : 'false'}
                    className={`w-full text-left rounded-xl border px-4 py-3 transition-all ${
                      current.id === t.id ? 'border-[#5a8f6f] bg-[#5a8f6f]/10' : 'border-[#e0d4cc] bg-white hover:bg-[#f0ead2]/40'
                    }`}
                  >
                    <p className="text-[#3d5c4c] font-medium">{t.title}</p>
                    <p className="text-[#5a8f6f] text-xs">{t.duration}</p>
                  </button>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  )
}