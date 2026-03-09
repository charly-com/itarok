'use client'
import { useState } from 'react'

export default function AudioButton({ text, size = 'md' }) {
  const [playing, setPlaying] = useState(false)

  const speak = (e) => {
    e.stopPropagation()
    if ('speechSynthesis' in window) {
      window.speechSynthesis.cancel()
      const utt = new SpeechSynthesisUtterance(text)
      // Try Nigerian English or closest available
      const voices = window.speechSynthesis.getVoices()
      const preferred = voices.find(v => v.lang === 'en-NG')
        || voices.find(v => v.lang.startsWith('en-'))
        || voices[0]
      if (preferred) utt.voice = preferred
      utt.rate  = 0.72
      utt.pitch = 1.0
      utt.lang  = 'en-NG'
      utt.onstart = () => setPlaying(true)
      utt.onend   = () => setPlaying(false)
      utt.onerror = () => setPlaying(false)
      window.speechSynthesis.speak(utt)
    }
  }

  const sz = size === 'sm' ? { btn: 28, icon: 12 } : { btn: 36, icon: 14 }

  return (
    <button
      onClick={speak}
      aria-label={`Pronounce: ${text}`}
      style={{
        width: sz.btn, height: sz.btn,
        borderRadius: '50%',
        border: `2px solid ${playing ? '#F5A623' : 'rgba(245,166,35,0.4)'}`,
        background: playing ? '#F5A623' : 'rgba(245,166,35,0.1)',
        display: 'flex', alignItems: 'center', justifyContent: 'center',
        cursor: 'pointer', flexShrink: 0,
        transition: 'all 0.2s ease',
        padding: 0,
      }}
    >
      {playing ? (
        <span style={{ display:'flex', gap:2, alignItems:'center', height: sz.icon }}>
          {[1,2,3,4,5].map(i => (
            <span key={i} className="sound-bar" style={{ height: sz.icon }} />
          ))}
        </span>
      ) : (
        <svg width={sz.icon} height={sz.icon} viewBox="0 0 24 24" fill="none">
          <path d="M11 5L6 9H2v6h4l5 4V5z" fill={playing ? 'white' : '#F5A623'} />
          <path d="M15.54 8.46a5 5 0 010 7.07M19.07 4.93a10 10 0 010 14.14" stroke={playing ? 'white' : '#F5A623'} strokeWidth="2" strokeLinecap="round"/>
        </svg>
      )}
    </button>
  )
}
