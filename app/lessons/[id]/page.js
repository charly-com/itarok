import { LESSONS } from '../../../data/tarok'
import LessonClient from './LessonClient'

export async function generateStaticParams() {
  return LESSONS.map((lesson) => ({
    id: lesson.id,
  }))
}

export default function LessonPage({ params }) {
  const lesson = LESSONS.find(l => l.id === params.id)

  if (!lesson) {
    return (
      <div className="min-h-screen flex items-center justify-center cheetah-bg">
        <p style={{color:'#8B6914'}}>Lesson not found</p>
      </div>
    )
  }

  return <LessonClient lesson={lesson} />
}
