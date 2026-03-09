'use client'
import { useState, useEffect } from 'react'
import Link from 'next/link'
import { LESSONS } from '../data/tarok'
import CheetahAvatar from '../components/CheetahAvatar'

export default function Home() {
  const [progress, setProgress] = useState({})
  const [totalWords, setTotalWords] = useState(0)

  useEffect(() => {
    try {
      const saved = JSON.parse(sessionStorage.getItem('tarok_progress') || '{}')
      setProgress(saved)
      setTotalWords(Object.values(saved).reduce((a, b) => a + b, 0))
    } catch(e) {}
  }, [])

  const completedLessons = LESSONS.filter(l => (progress[l.id] || 0) >= l.words.length).length
  const totalAvailable = LESSONS.reduce((a, l) => a + l.words.length, 0)

  return (
    <div className="min-h-screen cheetah-bg pb-8">
      {/* HERO */}
      <div className="cheetah-header px-5 pt-14 pb-8 relative">
        <div className="flex items-start justify-between mb-4">
          <div className="flex-1">
            {/* <div className="flex items-center gap-2 mb-1">
              <span className="text-xs font-bold tracking-widest uppercase" style={{color:'#F5A623', fontFamily:'var(--font-body)'}}>🌍 Plateau State, Nigeria</span>
            </div> */}
            <h1 className="font-display text-6xl text-white" style={{letterSpacing:4, lineHeight:1}}>iTÁRÓK</h1>
            <p className="text-sm mt-1" style={{color:'rgba(245,166,35,0.7)', fontFamily:'var(--font-body)'}}>Learn the Tarok Language</p>
          </div>
          <CheetahAvatar size={90} mood="happy" />
        </div>

        {/* Stats */}
        <div className="flex gap-2 mt-4">
          {[
            { v: totalWords, label: 'Words', icon: '📖' },
            { v: `${completedLessons}/${LESSONS.length}`, label: 'Done', icon: '✅' },
            { v: totalAvailable, label: 'Total', icon: '🎯' },
          ].map(s => (
            <div key={s.label} className="flex-1 rounded-2xl py-3 text-center" style={{background:'rgba(245,166,35,0.12)', border:'1px solid rgba(245,166,35,0.2)'}}>
              <div className="text-base mb-0.5">{s.icon}</div>
              <div className="font-display text-2xl text-white" style={{letterSpacing:1}}>{s.v}</div>
              <div className="text-xs" style={{color:'rgba(255,255,255,0.45)', fontFamily:'var(--font-body)'}}>{s.label}</div>
            </div>
          ))}
        </div>
      </div>

      {/* QUICK ACTIONS */}
      <div className="px-5 mt-5 grid grid-cols-2 gap-3">
        {[
          { href:'/flashcards', icon:'🃏', label:'Flashcards',   sub:'Flip & practice',   bg:'linear-gradient(135deg,#E07B00,#F5A623)' },
          { href:'/quiz',       icon:'🧠', label:'Quiz',          sub:'Test your skills',  bg:'linear-gradient(135deg,#1A1208,#2D1F00)' },
          { href:'/tutor',      icon:'🐆', label:'AI Tutor',      sub:'Chat with Zaki',    bg:'linear-gradient(135deg,#C4862A,#E07B00)', span:false },
          { href:'/folktales',  icon:'📺', label:'Folktales',     sub:'Stories & videos',  bg:'linear-gradient(135deg,#2D1F00,#1A1208)' },
          { href:'/alphabet',   icon:'🔤', label:'Alphabet',      sub:'33 letters + IPA',  bg:'linear-gradient(135deg,#3D2A00,#C4862A)', span:true },
        ].map(a => (
          <Link key={a.href} href={a.href} className={`block no-underline card-hover rounded-2xl p-4${a.span?' col-span-2':''}`} style={{background:a.bg}}>
            <div className={`flex ${a.span?'items-center gap-4':'flex-col'}`}>
              <div className="text-3xl mb-1">{a.icon}</div>
              <div>
                <div className="font-display text-xl text-white" style={{letterSpacing:2}}>{a.label}</div>
                <div className="text-xs" style={{color:'rgba(255,255,255,0.65)', fontFamily:'var(--font-body)'}}>{a.sub}</div>
              </div>
            </div>
          </Link>
        ))}
      </div>

      {/* LESSONS */}
      <div className="px-5 mt-6">
        <div className="flex items-center justify-between mb-3">
          <h2 className="font-display text-3xl" style={{color:'#1A1208', letterSpacing:2}}>LESSONS</h2>
          <span className="text-xs px-3 py-1 rounded-full font-bold" style={{background:'#F5A623', color:'#1A1208'}}>{LESSONS.length} sets</span>
        </div>
        <div className="space-y-3">
          {LESSONS.map((lesson, idx) => {
            const done = progress[lesson.id] || 0
            const pct = Math.round((done / lesson.words.length) * 100)
            return (
              <Link key={lesson.id} href={`/lessons/${lesson.id}`} className="block no-underline">
                <div className="card-hover bg-white rounded-2xl p-4" style={{border:`1px solid rgba(196,134,42,0.2)`, animationDelay:`${idx*0.05}s`}}>
                  <div className="flex items-center gap-3">
                    <div className="w-13 h-13 rounded-xl flex items-center justify-center text-2xl flex-shrink-0" style={{background:'linear-gradient(135deg,#FFF4CC,#FFFCE8)', width:52, height:52}}>
                      {lesson.icon}
                    </div>
                    <div className="flex-1 min-w-0">
                      <div className="flex items-center gap-2 mb-0.5">
                        <span className="font-display text-lg" style={{color:'#1A1208', letterSpacing:1}}>{lesson.title.toUpperCase()}</span>
                        <span className="text-xs px-2 py-0.5 rounded-full font-bold" style={{
                          background: lesson.level === 'Beginner' ? '#FFF4CC' : '#FFF0E0',
                          color: lesson.level === 'Beginner' ? '#C4862A' : '#E07B00'
                        }}>{lesson.level}</span>
                      </div>
                      <p className="text-xs italic mb-2" style={{color:'#C4862A', fontFamily:'var(--font-body)'}}>{lesson.titleTarok}</p>
                      <div className="h-1.5 rounded-full" style={{background:'#FFF4CC'}}>
                        <div className="h-full rounded-full progress-bar" style={{width:`${pct}%`}}></div>
                      </div>
                      <div className="flex justify-between mt-1">
                        <span className="text-xs" style={{color:'#8B6914', fontFamily:'var(--font-body)'}}>{lesson.words.length} words</span>
                        <span className="text-xs font-bold" style={{color: pct > 0 ? '#E07B00' : '#8B6914'}}>{pct}%</span>
                      </div>
                    </div>
                    <span style={{color:'#F5A623', fontSize:'1.3rem', flexShrink:0}}>›</span>
                  </div>
                </div>
              </Link>
            )
          })}
        </div>
      </div>

      {/* About */}
      <div className="mx-5 mt-6 rounded-2xl p-4" style={{background:'linear-gradient(135deg,#1A1208,#2D1F00)', border:'1px solid rgba(245,166,35,0.2)'}}>
        <div className="flex items-center gap-2 mb-2">
          <span className="text-xl">🌍</span>
          <span className="font-display text-lg text-white" style={{letterSpacing:2}}>ABOUT ITÁRÓK</span>
        </div>
        <p className="text-sm leading-relaxed" style={{color:'rgba(255,244,204,0.8)', fontFamily:'var(--font-body)'}}>
          Tarok (iTárók), also known as <strong style={{color:'#F5A623'}}>Yergam</strong>, is spoken by ~520,000 people in southeast Plateau State, Nigeria. A tonal Benue-Congo language with 7 vowels and 29 consonants.
        </p>
        <div className="flex flex-wrap gap-2 mt-3">
          {['7 vowels','29 consonants','Tonal','ISO: yer','Benue-Congo'].map(t => (
            <span key={t} className="text-xs px-2 py-1 rounded-full font-bold" style={{background:'rgba(245,166,35,0.15)', color:'#F5A623'}}>{t}</span>
          ))}
        </div>
      </div>
    </div>
  )
}
