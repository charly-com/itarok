'use client'
import { useState } from 'react'
import { useRouter } from 'next/navigation'
import { QUIZ_QUESTIONS } from '../../data/tarok'

function shuffle(arr) { const a=[...arr]; for(let i=a.length-1;i>0;i--){const j=Math.floor(Math.random()*(i+1));[a[i],a[j]]=[a[j],a[i]]}; return a }

export default function Quiz() {
  const router = useRouter()
  const [questions, setQuestions] = useState([])
  const [current, setCurrent] = useState(0)
  const [selected, setSelected] = useState(null)
  const [score, setScore] = useState(0)
  const [mode, setMode] = useState('start')
  const [answers, setAnswers] = useState([])
  const [quizSize, setQuizSize] = useState(10)

  const startQuiz = (size) => {
    setQuestions(shuffle(QUIZ_QUESTIONS).slice(0, size))
    setQuizSize(size); setCurrent(0); setSelected(null)
    setScore(0); setAnswers([]); setMode('quiz')
  }

  const handleSelect = (option) => {
    if (selected !== null) return
    setSelected(option)
    const correct = option === questions[current].answer
    if (correct) setScore(s => s + 1)
    setAnswers(a => [...a, { question: questions[current].question, correct, chosen: option, right: questions[current].answer }])
    setTimeout(() => {
      if (current < questions.length - 1) { setCurrent(c => c + 1); setSelected(null) }
      else setMode('results')
    }, 1100)
  }

  if (mode === 'start') return (
    <div className="min-h-screen cheetah-bg">
      <div className="cheetah-header px-5 pt-12 pb-6">
        <button onClick={() => router.push('/')} className="text-sm mb-3" style={{color:'rgba(245,166,35,0.7)'}}>‹ Home</button>
        <h1 className="font-display text-4xl text-white" style={{letterSpacing:3}}>🧠 QUIZ</h1>
        <p className="text-sm mt-1" style={{color:'rgba(245,166,35,0.6)', fontFamily:'var(--font-body)'}}>Test your Tarok knowledge</p>
      </div>
      <div className="px-5 py-6 space-y-3">
        {[
          {size:5, label:'Quick Round', desc:'5 questions · ~2 min', icon:'⚡'},
          {size:10, label:'Standard', desc:'10 questions · ~4 min', icon:'🎯'},
          {size:20, label:'Full Challenge', desc:'20 questions · ~8 min', icon:'🏆'},
        ].map(opt => (
          <button key={opt.size} onClick={() => startQuiz(opt.size)} className="w-full text-left card-hover bg-white rounded-2xl p-5 flex items-center gap-4" style={{border:'1px solid rgba(245,166,35,0.25)'}}>
            <div className="text-3xl">{opt.icon}</div>
            <div className="flex-1">
              <p className="font-display text-xl" style={{color:'#1A1208', letterSpacing:1}}>{opt.label}</p>
              <p className="text-xs" style={{color:'#8B6914', fontFamily:'var(--font-body)'}}>{opt.desc}</p>
            </div>
            <span className="font-display text-2xl" style={{color:'#F5A623'}}>›</span>
          </button>
        ))}
        <div className="rounded-2xl p-4 mt-2" style={{background:'rgba(245,166,35,0.1)', border:'1px solid rgba(245,166,35,0.2)'}}>
          <p className="text-xs font-bold mb-2" style={{color:'#E07B00'}}>💡 Tips</p>
          <p className="text-xs" style={{color:'#8B6914', fontFamily:'var(--font-body)'}}>Complete lessons first for best results. Questions are shuffled each round.</p>
        </div>
      </div>
    </div>
  )

  if (mode === 'results') {
    const pct = Math.round((score / questions.length) * 100)
    const grade = pct>=90?{e:'🏆',t:'EXCELLENT!',c:'#F5A623'}:pct>=70?{e:'⭐',t:'GREAT JOB!',c:'#E07B00'}:pct>=50?{e:'💪',t:'KEEP GOING!',c:'#C4862A'}:{e:'📚',t:'STUDY MORE!',c:'#8B6914'}
    return (
      <div className="min-h-screen cheetah-bg pb-8">
        <div className="cheetah-header px-5 pt-12 pb-5">
          <h1 className="font-display text-3xl text-white" style={{letterSpacing:2}}>QUIZ COMPLETE!</h1>
        </div>
        <div className="px-5 py-5">
          <div className="bg-white rounded-3xl p-8 text-center mb-5" style={{border:'2px solid rgba(245,166,35,0.3)'}}>
            <div className="text-6xl mb-3">{grade.e}</div>
            <div className="font-display text-6xl" style={{color:grade.c, letterSpacing:2}}>{pct}%</div>
            <div className="font-display text-xl mt-1" style={{color:'#1A1208', letterSpacing:2}}>{grade.t}</div>
            <p className="text-sm mt-1" style={{color:'#8B6914', fontFamily:'var(--font-body)'}}>{score}/{questions.length} correct</p>
          </div>
          <div className="space-y-2 mb-5">
            <h3 className="font-display text-lg" style={{color:'#1A1208', letterSpacing:1}}>REVIEW</h3>
            {answers.map((a,i) => (
              <div key={i} className="rounded-xl p-3" style={{background:a.correct?'#FFFCE8':'#FFF0F0', border:`1px solid ${a.correct?'rgba(245,166,35,0.3)':'rgba(200,0,0,0.2)'}`}}>
                <p className="text-xs font-bold" style={{color:a.correct?'#E07B00':'#cc4444'}}>{a.correct?'✓ Correct':'✗ Wrong'}</p>
                <p className="text-xs mt-0.5" style={{color:'#1A1208', fontFamily:'var(--font-body)'}}>{a.question}</p>
                {!a.correct && <p className="text-xs mt-0.5" style={{color:'#E07B00'}}>Answer: <strong>{a.right}</strong></p>}
              </div>
            ))}
          </div>
          <button onClick={() => startQuiz(quizSize)} className="w-full py-4 rounded-2xl font-display text-xl text-white mb-3" style={{background:'linear-gradient(135deg,#E07B00,#F5A623)', letterSpacing:2}}>TRY AGAIN</button>
          <button onClick={() => setMode('start')} className="w-full py-4 rounded-2xl font-display text-xl" style={{background:'#FFF4CC', color:'#C4862A', letterSpacing:2}}>BACK</button>
        </div>
      </div>
    )
  }

  const q = questions[current]
  return (
    <div className="min-h-screen cheetah-bg flex flex-col">
      <div className="cheetah-header px-5 pt-12 pb-4">
        <div className="flex justify-between items-center mb-3">
          <span className="font-display text-xl text-white" style={{letterSpacing:1}}>{current+1}/{questions.length}</span>
          <span className="font-bold" style={{color:'#F5A623', fontFamily:'var(--font-body)'}}>Score: {score}</span>
        </div>
        <div className="h-2 rounded-full" style={{background:'rgba(245,166,35,0.2)'}}>
          <div className="h-full rounded-full progress-bar transition-all" style={{width:`${(current/questions.length)*100}%`}}></div>
        </div>
      </div>
      <div className="flex-1 px-5 py-5 flex flex-col">
        <div className="rounded-3xl p-6 mb-5 bg-white" style={{border:'2px solid rgba(245,166,35,0.25)'}}>
          <p className="font-display text-xs tracking-widest mb-3" style={{color:'#F5A623', letterSpacing:3}}>QUESTION {current+1}</p>
          <p className="font-bold text-lg leading-snug" style={{color:'#1A1208', fontFamily:'var(--font-body)'}}>{q.question}</p>
        </div>
        <div className="grid grid-cols-2 gap-3">
          {q.options.map((opt, i) => {
            let bg='white', border='rgba(245,166,35,0.2)', color='#1A1208'
            if (selected!==null) {
              if (opt===q.answer) { bg='#FFFCE8'; border='#F5A623'; color='#E07B00' }
              else if (opt===selected) { bg='#FFF0F0'; border='#ffaaaa'; color='#cc4444' }
            }
            return (
              <button key={i} onClick={() => handleSelect(opt)}
                className="p-4 rounded-2xl text-left font-bold text-sm animate-fade-up"
                style={{background:bg, border:`2px solid ${border}`, color, animationDelay:`${i*0.07}s`, fontFamily:'var(--font-body)'}}>
                <span className="inline-flex items-center justify-center w-6 h-6 rounded-full text-xs font-bold mr-2" style={{background:selected!==null&&opt===q.answer?'#F5A623':'rgba(245,166,35,0.15)', color:selected!==null&&opt===q.answer?'#1A1208':'#C4862A'}}>
                  {String.fromCharCode(65+i)}
                </span>
                {opt}
              </button>
            )
          })}
        </div>
      </div>
    </div>
  )
}
