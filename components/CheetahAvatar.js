'use client'
import { useState } from 'react'

export default function CheetahAvatar({ size = 80, mood = 'idle', onClick }) {
  const [hover, setHover] = useState(false)

  return (
    <div
      onClick={onClick}
      onMouseEnter={() => setHover(true)}
      onMouseLeave={() => setHover(false)}
      style={{
        width: size, height: size, cursor: onClick ? 'pointer' : 'default',
        filter: hover ? 'drop-shadow(0 0 12px rgba(245,166,35,0.7))' : 'drop-shadow(0 4px 8px rgba(0,0,0,0.3))',
        transition: 'filter 0.3s ease',
        flexShrink: 0,
      }}
    >
      <svg viewBox="0 0 120 120" xmlns="http://www.w3.org/2000/svg" width={size} height={size}>
        {/* Body */}
        <ellipse cx="60" cy="78" rx="26" ry="22" fill="#E8A020"/>
        {/* Tail */}
        <g className="cheetah-tail" style={{transformOrigin:'60px 88px'}}>
          <path d="M78 88 Q95 75 100 60 Q105 48 95 42" stroke="#C4862A" strokeWidth="6" fill="none" strokeLinecap="round"/>
          <circle cx="93" cy="40" r="5" fill="#C4862A"/>
        </g>
        {/* Head */}
        <ellipse cx="60" cy="52" rx="24" ry="22" fill="#F5A623"/>
        {/* Ear left */}
        <path d="M38 38 L30 20 L46 32 Z" fill="#F5A623"/>
        <path d="M39 36 L33 22 L44 32 Z" fill="#E07B00"/>
        {/* Ear right */}
        <path d="M82 38 L90 20 L74 32 Z" fill="#F5A623"/>
        <path d="M81 36 L87 22 L76 32 Z" fill="#E07B00"/>
        {/* Face white patch */}
        <ellipse cx="60" cy="58" rx="14" ry="12" fill="#FFF4CC"/>
        {/* Eyes */}
        <g className="cheetah-eye">
          <ellipse cx="51" cy="48" rx="5" ry="5.5" fill="#2D1F00"/>
          <ellipse cx="69" cy="48" rx="5" ry="5.5" fill="#2D1F00"/>
          <circle cx="52.5" cy="47" r="1.8" fill="white"/>
          <circle cx="70.5" cy="47" r="1.8" fill="white"/>
          {/* Amber iris */}
          <ellipse cx="51" cy="48.5" rx="2.5" ry="3" fill="#F5A623"/>
          <ellipse cx="69" cy="48.5" rx="2.5" ry="3" fill="#F5A623"/>
          <circle cx="51" cy="48.5" r="1.2" fill="#0D0A03"/>
          <circle cx="69" cy="48.5" r="1.2" fill="#0D0A03"/>
        </g>
        {/* Cheetah tear marks */}
        <path d="M47 53 Q43 60 42 65" stroke="#2D1F00" strokeWidth="1.5" fill="none" strokeLinecap="round"/>
        <path d="M73 53 Q77 60 78 65" stroke="#2D1F00" strokeWidth="1.5" fill="none" strokeLinecap="round"/>
        {/* Nose */}
        <path d="M56 61 Q60 64 64 61 Q62 66 60 67 Q58 66 56 61 Z" fill="#C4862A"/>
        {/* Mouth */}
        {mood === 'speaking' ? (
          <ellipse cx="60" cy="70" rx="6" ry="4" fill="#2D1F00"/>
        ) : mood === 'happy' ? (
          <path d="M54 68 Q60 74 66 68" stroke="#2D1F00" strokeWidth="2" fill="none" strokeLinecap="round"/>
        ) : (
          <path d="M56 68 Q60 71 64 68" stroke="#2D1F00" strokeWidth="1.8" fill="none" strokeLinecap="round"/>
        )}
        {/* Spots on body */}
        <ellipse cx="48" cy="75" rx="4" ry="3" fill="rgba(45,31,0,0.25)"/>
        <ellipse cx="72" cy="73" rx="3.5" ry="2.5" fill="rgba(45,31,0,0.25)"/>
        <ellipse cx="60" cy="85" rx="4" ry="3" fill="rgba(45,31,0,0.25)"/>
        <ellipse cx="50" cy="86" rx="3" ry="2" fill="rgba(45,31,0,0.2)"/>
        <ellipse cx="70" cy="84" rx="3" ry="2.2" fill="rgba(45,31,0,0.2)"/>
        {/* Spots on head */}
        <ellipse cx="44" cy="44" rx="2.5" ry="2" fill="rgba(45,31,0,0.2)"/>
        <ellipse cx="76" cy="44" rx="2.5" ry="2" fill="rgba(45,31,0,0.2)"/>
        <ellipse cx="56" cy="40" rx="2" ry="1.5" fill="rgba(45,31,0,0.15)"/>
        <ellipse cx="64" cy="40" rx="2" ry="1.5" fill="rgba(45,31,0,0.15)"/>
        {/* Paws */}
        <ellipse cx="46" cy="96" rx="8" ry="5" fill="#E8A020"/>
        <ellipse cx="74" cy="96" rx="8" ry="5" fill="#E8A020"/>
        {/* Paw toes */}
        <ellipse cx="40" cy="98" rx="3" ry="2" fill="#C4862A"/>
        <ellipse cx="46" cy="100" rx="3" ry="2" fill="#C4862A"/>
        <ellipse cx="52" cy="98" rx="3" ry="2" fill="#C4862A"/>
        <ellipse cx="68" cy="98" rx="3" ry="2" fill="#C4862A"/>
        <ellipse cx="74" cy="100" rx="3" ry="2" fill="#C4862A"/>
        <ellipse cx="80" cy="98" rx="3" ry="2" fill="#C4862A"/>
        {/* Name tag */}
        <rect x="38" y="104" width="44" height="14" rx="7" fill="#2D1F00"/>
        <text x="60" y="115" textAnchor="middle" fill="#F5A623" fontSize="7" fontFamily="'Bebas Neue', serif" letterSpacing="1">ZAKI</text>
      </svg>
    </div>
  )
}
