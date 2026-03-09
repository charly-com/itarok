import { LESSONS } from '../../../data/tarok'

export async function generateStaticParams() {
  return LESSONS.map((lesson) => ({
    id: lesson.id,
  }))
}