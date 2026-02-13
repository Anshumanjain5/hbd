'use client'

import { useState, useRef } from 'react'
import { Volume2, VolumeX } from 'lucide-react'
import { motion } from 'framer-motion'

export function AudioPlayer() {
  const audioRef = useRef<HTMLAudioElement>(null)
  const [isPlaying, setIsPlaying] = useState(false)

  const toggleAudio = () => {
    if (audioRef.current) {
      if (isPlaying) {
        audioRef.current.pause()
      } else {
        audioRef.current.play().catch(() => {
          // Autoplay prevented by browser
          setIsPlaying(false)
        })
      }
      setIsPlaying(!isPlaying)
    }
  }

  return (
    <div className="fixed bottom-6 right-6 z-50">
      <audio
        ref={audioRef}
        loop
        onPlay={() => setIsPlaying(true)}
        onPause={() => setIsPlaying(false)}
      >
        <source src="/audio/background-music.mp3" type="audio/mpeg" />
      </audio>

      <motion.button
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.95 }}
        onClick={toggleAudio}
        className={`p-4 rounded-full shadow-lg transition-all duration-300 ${
          isPlaying
            ? 'bg-gold text-navy-950'
            : 'bg-slate-300 text-navy-950'
        }`}
        aria-label={isPlaying ? 'Mute audio' : 'Play audio'}
      >
        {isPlaying ? (
          <Volume2 className="w-6 h-6" />
        ) : (
          <VolumeX className="w-6 h-6" />
        )}
      </motion.button>
    </div>
  )
}
