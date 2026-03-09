'use client'
import { useRouter } from 'next/navigation'
import Link from 'next/link'
import { LESSONS } from '../../data/tarok'

export default function LessonsPage() {
  const router = useRouter()
  return (
    <div className="min-h-screen cheetah-bg pb-8">
      <div className="cheetah-header px-5 pt-12 pb-6">
        <button onClick={() => router.push('/')} className="text-sm mb-3" style={{color:'rgba(245,166,35,0.7)'}}>‹ Home</button>
        <h1 className="font-display text-4xl text-white" style={{letterSpacing:3}}>📚 LESSONS</h1>
        <p className="text-sm mt-1" style={{color:'rgba(245,166,35,0.6)', fontFamily:'var(--font-body)'}}>{LESSONS.length} lesson categories</p>
      </div>
      <div className="px-5 mt-5 space-y-3">
        {LESSONS.map(lesson => (
          <Link key={lesson.id} href={`/lessons/${lesson.id}`} className="block no-underline">
            <div className="card-hover bg-white rounded-2xl p-4" style={{border:'1px solid rgba(245,166,35,0.2)'}}>
              <div className="flex items-center gap-4">
                <div className="w-14 h-14 rounded-xl flex items-center justify-center text-2xl flex-shrink-0" style={{background:'#FFF4CC'}}>{lesson.icon}</div>
                <div className="flex-1">
                  <p className="font-display text-lg" style={{color:'#1A1208', letterSpacing:1}}>{lesson.title.toUpperCase()}</p>
                  <p className="text-xs italic mb-1" style={{color:'#C4862A', fontFamily:'var(--font-body)'}}>{lesson.titleTarok}</p>
                  <p className="text-xs" style={{color:'#8B6914', fontFamily:'var(--font-body)'}}>{lesson.description}</p>
                  <div className="flex items-center gap-2 mt-2">
                    <span className="text-xs px-2 py-0.5 rounded-full font-bold" style={{background:'rgba(245,166,35,0.15)', color:'#E07B00'}}>{lesson.level}</span>
                    <span className="text-xs" style={{color:'#8B6914', fontFamily:'var(--font-body)'}}>{lesson.words.length} words</span>
                  </div>
                </div>
              </div>
            </div>
          </Link>
        ))}
      </div>
    </div>
  )
}
