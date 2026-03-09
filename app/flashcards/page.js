'use client'
import { useState } from 'react'
import { useRouter } from 'next/navigation'
import { LESSONS } from '../../data/tarok'
import AudioButton from '../../components/AudioButton'

export default function Flashcards() {
  const router = useRouter()
  const [selectedLesson, setSelectedLesson] = useState(0)
  const [cardIndex, setCardIndex] = useState(0)
  const [flipped, setFlipped] = useState(false)
  const [mode, setMode] = useState('select')
  const [known, setKnown] = useState(new Set())
  const [unknown, setUnknown] = useState(new Set())

  const lesson = LESSONS[selectedLesson]
  const words = lesson?.words || []
  const word = words[cardIndex]

  const startPractice = (idx) => {
    setSelectedLesson(idx); setCardIndex(0); setFlipped(false)
    setKnown(new Set()); setUnknown(new Set()); setMode('practice')
  }

  const next = (knew) => {
    setKnown(knew ? new Set([...known, cardIndex]) : known)
    setUnknown(!knew ? new Set([...unknown, cardIndex]) : unknown)
    setFlipped(false)
    setTimeout(() => {
      if (cardIndex < words.length - 1) setCardIndex(c => c + 1)
      else setMode('results')
    }, 150)
  }

  if (mode === 'results') return (
    <div className="min-h-screen cheetah-bg flex flex-col">
      <div className="cheetah-header px-5 pt-12 pb-5">
        <button onClick={() => setMode('select')} className="text-sm mb-3" style={{color:'rgba(245,166,35,0.7)'}}>‹ back</button>
        <h1 className="font-display text-3xl text-white" style={{letterSpacing:3}}>RESULTS</h1>
      </div>
      <div className="flex-1 px-5 py-6">
        <div className="rounded-3xl p-8 text-center mb-5 bg-white" style={{border:'2px solid rgba(245,166,35,0.3)'}}>
          <div className="text-6xl mb-3">{known.size === words.length ? '🏆' : known.size > words.length/2 ? '⭐' : '💪'}</div>
          <div className="font-display text-6xl" style={{color:'#E07B00', letterSpacing:2}}>{known.size}/{words.length}</div>
          <p className="text-sm mt-1" style={{color:'#8B6914', fontFamily:'var(--font-body)'}}>words you knew</p>
        </div>
        <div className="grid grid-cols-2 gap-3 mb-5">
          <div className="rounded-2xl p-4 text-center" style={{background:'#FFFCE8', border:'1px solid #F5A623'}}>
            <div className="font-display text-3xl" style={{color:'#E07B00'}}>{known.size}</div>
            <div className="text-xs font-bold" style={{color:'#C4862A'}}>GOT IT ✓</div>
          </div>
          <div className="rounded-2xl p-4 text-center" style={{background:'#FFF5F5', border:'1px solid #ffcccc'}}>
            <div className="font-display text-3xl" style={{color:'#cc4444'}}>{unknown.size}</div>
            <div className="text-xs font-bold" style={{color:'#cc4444'}}>LEARNING ✗</div>
          </div>
        </div>
        <button onClick={() => startPractice(selectedLesson)} className="w-full py-4 rounded-2xl font-display text-xl text-white mb-3" style={{background:'linear-gradient(135deg,#E07B00,#F5A623)', letterSpacing:2}}>PRACTICE AGAIN</button>
        <button onClick={() => setMode('select')} className="w-full py-4 rounded-2xl font-display text-xl" style={{background:'#FFF4CC', color:'#C4862A', letterSpacing:2}}>CHOOSE ANOTHER</button>
      </div>
    </div>
  )

  if (mode === 'practice' && word) return (
    <div className="min-h-screen cheetah-bg flex flex-col">
      <div className="cheetah-header px-5 pt-12 pb-4">
        <button onClick={() => setMode('select')} className="text-sm mb-2" style={{color:'rgba(245,166,35,0.7)'}}>‹ back</button>
        <div className="flex justify-between items-center">
          <h1 className="font-display text-xl text-white" style={{letterSpacing:2}}>{lesson.title.toUpperCase()}</h1>
          <span className="font-bold" style={{color:'rgba(245,166,35,0.7)', fontFamily:'var(--font-body)'}}>{cardIndex+1}/{words.length}</span>
        </div>
        <div className="h-2 rounded-full mt-2" style={{background:'rgba(245,166,35,0.2)'}}>
          <div className="h-full rounded-full progress-bar" style={{width:`${(cardIndex/words.length)*100}%`}}></div>
        </div>
      </div>

      <div className="flex-1 px-5 py-6 flex flex-col">
        {/* Flip Card */}
        <div className="flip-card mb-6 cursor-pointer" style={{height:280}} onClick={() => setFlipped(f => !f)}>
          <div className={`flip-card-inner ${flipped?'flipped':''}`} style={{height:'100%'}}>
            {/* Front */}
            <div className="flip-card-front flex flex-col items-center justify-center p-8 bg-white" style={{border:'3px solid #F5A623', boxShadow:'0 8px 30px rgba(245,166,35,0.2)'}}>
              <p className="font-display text-sm tracking-widest mb-4" style={{color:'#C4862A', letterSpacing:3}}>TAROK</p>
              <p className="font-display text-center text-white" style={{fontSize:'3.5rem', letterSpacing:2, color:'#1A1208', lineHeight:1.1}}>{word.tarok}</p>
              <p className="text-sm font-mono mt-3" style={{color:'#8B6914'}}>{word.ipa}</p>
              <div className="mt-4" onClick={e => e.stopPropagation()}>
                <AudioButton text={word.tarok} size="md" />
              </div>
              <p className="text-xs mt-4" style={{color:'#C4862A', fontFamily:'var(--font-body)'}}>Tap card to reveal →</p>
            </div>
            {/* Back */}
            <div className="flip-card-back flex flex-col items-center justify-center p-8" style={{background:'linear-gradient(135deg,#1A1208,#2D1F00)', border:'3px solid #F5A623'}}>
              <p className="font-display text-sm tracking-widest mb-4 text-white opacity-60" style={{letterSpacing:3}}>ENGLISH</p>
              <p className="font-display text-4xl text-center" style={{color:'#F5A623', letterSpacing:2}}>{word.english}</p>
              {word.notes && <p className="text-xs text-center mt-3" style={{color:'rgba(245,166,35,0.6)', fontFamily:'var(--font-body)'}}>{word.notes}</p>}
            </div>
          </div>
        </div>

        {flipped ? (
          <div className="grid grid-cols-2 gap-3 animate-fade-up">
            <button onClick={() => next(false)} className="py-4 rounded-2xl font-display text-lg" style={{background:'#FFF0F0', color:'#cc4444', letterSpacing:2}}>✗ LEARNING</button>
            <button onClick={() => next(true)} className="py-4 rounded-2xl font-display text-lg text-white" style={{background:'linear-gradient(135deg,#E07B00,#F5A623)', letterSpacing:2}}>✓ GOT IT!</button>
          </div>
        ) : (
          <p className="text-center text-sm" style={{color:'#8B6914', fontFamily:'var(--font-body)'}}>👆 Tap the card to see the answer</p>
        )}
      </div>
    </div>
  )

  return (
    <div className="min-h-screen cheetah-bg pb-8">
      <div className="cheetah-header px-5 pt-12 pb-6">
        <button onClick={() => router.push('/')} className="text-sm mb-3" style={{color:'rgba(245,166,35,0.7)'}}>‹ Home</button>
        <h1 className="font-display text-4xl text-white" style={{letterSpacing:3}}>🃏 FLASHCARDS</h1>
        <p className="text-sm mt-1" style={{color:'rgba(245,166,35,0.6)', fontFamily:'var(--font-body)'}}>Choose a lesson to practice</p>
      </div>
      <div className="px-5 mt-5 space-y-3">
        {LESSONS.map((l, idx) => (
          <button key={l.id} onClick={() => startPractice(idx)} className="w-full text-left card-hover bg-white rounded-2xl p-4 flex items-center gap-4" style={{border:'1px solid rgba(245,166,35,0.2)'}}>
            <div className="w-12 h-12 rounded-xl flex items-center justify-center text-2xl flex-shrink-0" style={{background:'#FFF4CC'}}>{l.icon}</div>
            <div className="flex-1">
              <p className="font-display text-lg" style={{color:'#1A1208', letterSpacing:1}}>{l.title.toUpperCase()}</p>
              <p className="text-xs" style={{color:'#8B6914', fontFamily:'var(--font-body)'}}>{l.words.length} cards</p>
            </div>
            <span className="font-display text-2xl" style={{color:'#F5A623'}}>›</span>
          </button>
        ))}
      </div>
    </div>
  )
}
