'use client'
import { useState } from 'react'
import Image from 'next/image'

export default function CheetahAvatar({ size = 80, mood = 'idle', onClick }) {
  const [hover, setHover] = useState(false)

  // Mood-based ring color
  const ringColor = {
    idle:     'rgba(245,166,35,0.0)',
    happy:    'rgba(245,166,35,0.8)',
    speaking: 'rgba(99,200,255,0.8)',
    thinking: 'rgba(180,130,255,0.8)',
  }[mood] ?? 'rgba(245,166,35,0.0)'

  // Pulse animation only while speaking
  const pulse = mood === 'speaking' ? 'zaki-pulse 1.2s ease-in-out infinite' : 'none'

  return (
    <>
      <style>{`
        @keyframes zaki-pulse {
          0%, 100% { box-shadow: 0 0 0 0 ${ringColor}, 0 4px 16px rgba(0,0,0,0.4); }
          50%       { box-shadow: 0 0 0 6px ${ringColor}, 0 4px 16px rgba(0,0,0,0.4); }
        }
      `}</style>

      <div
        onClick={onClick}
        style={{
          width: size,
          height: size,
          borderRadius: '50%',
          overflow: 'hidden',
          cursor: onClick ? 'pointer' : 'default',
          flexShrink: 0,
          position: 'relative',
          border: `3px solid ${hover ? '#F5A623' : 'rgba(245,166,35,0.4)'}`,
          boxShadow: hover
            ? `0 0 0 4px rgba(245,166,35,0.5), 0 4px 16px rgba(0,0,0,0.4)`
            : `0 4px 16px rgba(0,0,0,0.4)`,
          animation: pulse,
          transition: 'box-shadow 0.3s ease, border-color 0.3s ease',
        }}
        onMouseEnter={e => { e.currentTarget.style.borderColor = '#F5A623'; }}
        onMouseLeave={e => { e.currentTarget.style.borderColor = 'rgba(245,166,35,0.4)'; }}
      >
        <Image
          src="/cheetah.jpg"
          alt="Zaki the Cheetah"
          fill
          style={{ objectFit: 'cover', objectPosition: 'center top' }}
          priority
        />

        {/* ZAKI name tag overlay at bottom */}
        <div style={{
          position: 'absolute',
          bottom: 0,
          left: 0,
          right: 0,
          background: 'linear-gradient(transparent, rgba(45,31,0,0.85))',
          paddingBottom: 4,
          paddingTop: 8,
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'flex-end',
        }}>
          <span style={{
            fontFamily: "'Bebas Neue', serif",
            fontSize: Math.max(size * 0.12, 8),
            color: '#F5A623',
            letterSpacing: '0.12em',
            lineHeight: 1,
          }}>
            ZAKI
          </span>
        </div>

        {/* Speaking indicator — animated dots */}
        {mood === 'speaking' && (
          <div style={{
            position: 'absolute',
            top: 4,
            right: 4,
            display: 'flex',
            gap: 3,
            alignItems: 'center',
          }}>
            {[0, 0.2, 0.4].map((delay, i) => (
              <div key={i} style={{
                width: Math.max(size * 0.07, 4),
                height: Math.max(size * 0.07, 4),
                borderRadius: '50%',
                background: '#63C8FF',
                animation: `zaki-pulse 0.8s ease-in-out ${delay}s infinite`,
              }}/>
            ))}
          </div>
        )}
      </div>
    </>
  )
}
