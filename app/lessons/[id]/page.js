'use client'
import { useState, useEffect } from 'react'
import { useParams, useRouter } from 'next/navigation'
import { LESSONS } from '../../../data/tarok'
import AudioButton from '../../../components/AudioButton'

export default function LessonPage() {
  const params = useParams()
  const router = useRouter()
  const lesson = LESSONS.find(l => l.id === params.id)
  const [activeWord, setActiveWord] = useState(null)
  const [learned, setLearned] = useState(new Set())

  useEffect(() => {
    try {
      const saved = JSON.parse(sessionStorage.getItem('tarok_learned_' + params.id) || '[]')
      setLearned(new Set(saved))
    } catch(e) {}
  }, [params.id])

  const markLearned = (idx) => {
    const next = new Set(learned)
    next.has(idx) ? next.delete(idx) : next.add(idx)
    setLearned(next)
    try {
      sessionStorage.setItem('tarok_learned_' + params.id, JSON.stringify([...next]))
      const prog = JSON.parse(sessionStorage.getItem('tarok_progress') || '{}')
      prog[params.id] = next.size
      sessionStorage.setItem('tarok_progress', JSON.stringify(prog))
    } catch(e) {}
  }

  if (!lesson) return <div className="min-h-screen flex items-center justify-center cheetah-bg"><p style={{color:'#8B6914'}}>Lesson not found</p></div>

  const pct = Math.round((learned.size / lesson.words.length) * 100)

  return (
    <div className="min-h-screen cheetah-bg pb-8">
      {/* HEADER */}
      <div className="sticky top-0 z-10 cheetah-header px-5 pt-12 pb-4">
        <button onClick={() => router.back()} className="flex items-center gap-1 text-sm mb-3" style={{color:'rgba(245,166,35,0.7)'}}>
          ‹ Back
        </button>
        <div className="flex items-center gap-3 mb-3">
          <div className="w-12 h-12 rounded-xl flex items-center justify-center text-2xl" style={{background:'rgba(245,166,35,0.15)'}}>
            {lesson.icon}
          </div>
          <div>
            <h1 className="font-display text-2xl text-white" style={{letterSpacing:2}}>{lesson.title.toUpperCase()}</h1>
            <p className="text-xs italic" style={{color:'rgba(245,166,35,0.6)', fontFamily:'var(--font-body)'}}>{lesson.titleTarok}</p>
          </div>
        </div>
        <div>
          <div className="flex justify-between text-xs mb-1" style={{color:'rgba(245,166,35,0.6)'}}>
            <span>{learned.size}/{lesson.words.length} learned</span>
            <span>{pct}%</span>
          </div>
          <div className="h-2 rounded-full" style={{background:'rgba(245,166,35,0.2)'}}>
            <div className="h-full rounded-full progress-bar transition-all duration-500" style={{width:`${pct}%`}}></div>
          </div>
        </div>
      </div>

      <div className="px-5 py-3">
        <p className="text-sm" style={{color:'#8B6914', fontFamily:'var(--font-body)'}}>{lesson.description}</p>
      </div>

      {/* WORD CARDS */}
      <div className="px-5 space-y-3">
        {lesson.words.map((word, idx) => (
          <div key={idx} className="animate-fade-up" style={{animationDelay:`${idx*0.04}s`}}>
            <div
              className="bg-white rounded-2xl overflow-hidden cursor-pointer"
              style={{border:`2px solid ${learned.has(idx) ? '#F5A623' : 'rgba(196,134,42,0.15)'}`, boxShadow: learned.has(idx) ? '0 0 0 1px rgba(245,166,35,0.2)' : 'none'}}
              onClick={() => setActiveWord(activeWord === idx ? null : idx)}
            >
              <div className="p-4 flex items-center gap-3">
                {/* Audio */}
                <AudioButton text={word.tarok} size="md" />

                <div className="flex-1 min-w-0">
                  <div className="font-display text-2xl" style={{color:'#1A1208', letterSpacing:1}}>{word.tarok}</div>
                  <div className="text-sm font-bold mt-0.5" style={{color:'#E07B00', fontFamily:'var(--font-body)'}}>{word.english}</div>
                  <div className="text-xs mt-0.5 font-mono" style={{color:'#8B6914'}}>{word.ipa}</div>
                </div>

                <div className="flex items-center gap-2">
                  <button
                    onClick={e => { e.stopPropagation(); markLearned(idx) }}
                    className="w-8 h-8 rounded-full flex items-center justify-center font-bold text-sm transition-all"
                    style={{background: learned.has(idx) ? '#F5A623' : '#FFF4CC', color: learned.has(idx) ? '#1A1208' : '#C4862A'}}
                  >
                    {learned.has(idx) ? '✓' : '○'}
                  </button>
                  <span style={{color:'#C4862A'}}>{activeWord === idx ? '▲' : '▼'}</span>
                </div>
              </div>

              {activeWord === idx && (
                <div className="px-4 pb-4 animate-fade-up" style={{borderTop:'1px solid rgba(245,166,35,0.15)'}}>
                  {word.notes && (
                    <div className="mt-3 flex gap-2">
                      <span className="text-lg">💡</span>
                      <div>
                        <p className="text-xs font-bold mb-0.5" style={{color:'#C4862A'}}>Note</p>
                        <p className="text-sm" style={{color:'#2D1F00', fontFamily:'var(--font-body)'}}>{word.notes}</p>
                      </div>
                    </div>
                  )}
                  <div className="mt-3 p-3 rounded-xl flex items-center gap-3" style={{background:'#FFFCE8'}}>
                    <AudioButton text={word.tarok} size="sm" />
                    <div>
                      <p className="text-xs font-bold" style={{color:'#C4862A'}}>Pronunciation</p>
                      <p className="text-sm font-mono" style={{color:'#1A1208'}}>{word.ipa}</p>
                      <p className="text-xs" style={{color:'#8B6914'}}>Tap 🔊 to hear it · repeat 3×!</p>
                    </div>
                  </div>
                </div>
              )}
            </div>
          </div>
        ))}
      </div>

      {pct === 100 && (
        <div className="mx-5 mt-6 rounded-2xl p-5 text-center animate-pop cheetah-header">
          <div className="text-4xl mb-2">🏆</div>
          <h3 className="font-display text-2xl text-white" style={{letterSpacing:2}}>LESSON COMPLETE!</h3>
          <p className="text-sm mt-1" style={{color:'rgba(245,166,35,0.8)', fontFamily:'var(--font-body)'}}>You mastered all {lesson.words.length} words</p>
          <button onClick={() => router.push('/quiz')} className="mt-3 px-6 py-2 rounded-full font-bold text-sm" style={{background:'#F5A623', color:'#1A1208'}}>
            Take the Quiz →
          </button>
        </div>
      )}
    </div>
  )
}
