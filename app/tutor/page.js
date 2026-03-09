'use client'
import { useState, useRef, useEffect } from 'react'
import { useRouter } from 'next/navigation'
import CheetahAvatar from '../../components/CheetahAvatar'

const SYSTEM_PROMPT = `You are Zaki, a friendly cheetah who is an expert teacher of the Tarok language (iTárók), spoken by ~520,000 people in Plateau State, Nigeria. Tarok belongs to the Atlantic-Congo/Benue-Congo/Plateau language family. 

Your personality:
- Warm, encouraging, and playful like a cheetah cub
- You use the occasional cheetah sound like "Prrr!" or "Roar!" when excited
- You celebrate learner wins with enthusiasm
- You break down pronunciation patiently

What you know about Tarok:
- Greetings: Aagun (hello/welcome), Injin (good morning), Indoo (good afternoon), Ingho (good evening), Aanshak (goodbye), Yaago (thank you), Em (yes), Ayi (no)
- Family: Ina (mother), Aba (father), Zaa (child/son), Niin (brother), Shiing (wife/woman), Kuu (husband)
- Numbers: Ciin (1), Taan (2), Taar (3), Naas (4), Tuun (5), Wur (6), Gba (10)
- Food: Nyam (food/meat), Bii (water), Ɗii (eat), Tuwo (staple food), Miyan (soup)
- Body: Kpaan (head), Liin (eyes), Tuun (ears), Nuun (nose), Zuur (mouth)
- Nature: Zhii (fire), Raa (road/path), Boo (farm), Wuur (tree), Vur (rain), Kan (house)
- Tarok has 7 vowels: i, ɨ, u, ɛ, ə, ɔ, a
- Tarok has 29 consonants including special ones: ɓ (implosive b), ɗ (implosive d), gb (labiovelar), kp (labiovelar), gh (fricative)
- It is a tonal language — tone changes meaning
- Saan = good/well; Ka shi? = How are you?; M shi nzhi = I am fine

Teaching style:
- Give short, focused lessons (2-4 sentences)
- Always show Tarok words in bold or with their pronunciation
- Include example sentences when teaching vocabulary
- Offer to quiz the learner after each topic
- If asked to quiz, give one question at a time
- Be extremely encouraging even when the learner makes mistakes
- End most responses with a question or encouragement to continue

Always respond in under 120 words unless explaining something complex. Be conversational and fun!`

export default function TutorPage() {
  const router = useRouter()
  const [messages, setMessages] = useState([
    {
      role: 'assistant',
      content: "Prrr! Aagun! 🐆 I'm Zaki, your Tarok language guide! I'm here to help you learn iTárók — the language of the proud Tarok people of Plateau State, Nigeria.\n\nYou can ask me to teach you greetings, numbers, family words, food vocabulary, pronunciation tips, or just quiz you on what you've learned!\n\nWhat would you like to learn first? 😄"
    }
  ])
  const [input, setInput] = useState('')
  const [loading, setLoading] = useState(false)
  const [mood, setMood] = useState('happy')
  const bottomRef = useRef(null)

  useEffect(() => {
    bottomRef.current?.scrollIntoView({ behavior: 'smooth' })
  }, [messages])

  const send = async () => {
    const text = input.trim()
    if (!text || loading) return
    setInput('')
    setMood('speaking')
    const newMessages = [...messages, { role: 'user', content: text }]
    setMessages(newMessages)
    setLoading(true)

    try {
      const res = await fetch('https://api.anthropic.com/v1/messages', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          model: 'claude-sonnet-4-20250514',
          max_tokens: 400,
          system: SYSTEM_PROMPT,
          messages: newMessages.map(m => ({ role: m.role, content: m.content })),
        })
      })
      const data = await res.json()
      const reply = data.content?.[0]?.text || "Prrr... I'm having trouble connecting. Try again!"
      setMessages(prev => [...prev, { role: 'assistant', content: reply }])
      setMood('happy')
    } catch (e) {
      setMessages(prev => [...prev, { role: 'assistant', content: "Roar! Connection error. Please try again!" }])
      setMood('idle')
    } finally {
      setLoading(false)
    }
  }

  const quickPrompts = [
    "Teach me greetings 👋",
    "Teach me numbers 🔢",
    "Quiz me on words I know 🎯",
    "How do tones work? 🎵",
    "Teach me family words 👨‍👩‍👧",
    "How do I say 'I love Tarok'? ❤️",
  ]

  return (
    <div className="min-h-screen cheetah-bg flex flex-col" style={{maxHeight:'100vh'}}>
      {/* HEADER */}
      <div className="cheetah-header px-5 pt-12 pb-4 flex-shrink-0">
        <button onClick={() => router.push('/')} className="text-sm mb-3" style={{color:'rgba(245,166,35,0.7)'}}>‹ Home</button>
        <div className="flex items-center gap-3">
          <CheetahAvatar size={60} mood={mood} />
          <div>
            <h1 className="font-display text-2xl text-white" style={{letterSpacing:2}}>ZAKI THE TUTOR</h1>
            <div className="flex items-center gap-2">
              <div className="w-2 h-2 rounded-full animate-pulse-s" style={{background:'#4ade80'}}></div>
              <span className="text-xs" style={{color:'rgba(245,166,35,0.7)', fontFamily:'var(--font-body)'}}>
                {loading ? 'Thinking...' : 'Online · AI Tarok Expert'}
              </span>
            </div>
          </div>
        </div>
      </div>

      {/* CHAT MESSAGES */}
      <div className="flex-1 overflow-y-auto px-4 py-4" style={{paddingBottom:80}}>
        {messages.map((msg, i) => (
          <div key={i} className={`mb-4 flex ${msg.role==='user'?'justify-end':'justify-start'} animate-fade-up`} style={{animationDelay:`${i*0.05}s`}}>
            {msg.role === 'assistant' && (
              <div className="mr-2 flex-shrink-0 mt-1">
                <CheetahAvatar size={36} mood={i===messages.length-1?mood:'idle'} />
              </div>
            )}
            <div
              className={`max-w-xs rounded-2xl px-4 py-3 text-sm relative ${msg.role==='user'?'bubble-user':'bubble-tutor'}`}
              style={{
                background: msg.role==='user' ? 'linear-gradient(135deg,#F5A623,#E07B00)' : '#1A1208',
                color: msg.role==='user' ? '#1A1208' : '#FFF4CC',
                fontFamily: 'var(--font-body)',
                lineHeight: 1.55,
                boxShadow: msg.role==='user' ? '0 4px 15px rgba(245,166,35,0.3)' : '0 4px 15px rgba(0,0,0,0.3)',
              }}
            >
              {msg.content.split('\n').map((line, j) => (
                <span key={j}>{line}{j < msg.content.split('\n').length-1 && <br/>}</span>
              ))}
            </div>
          </div>
        ))}

        {loading && (
          <div className="flex justify-start mb-4">
            <div className="mr-2 flex-shrink-0 mt-1">
              <CheetahAvatar size={36} mood="speaking" />
            </div>
            <div className="rounded-2xl px-5 py-4" style={{background:'#1A1208'}}>
              <div className="flex gap-1.5 items-center">
                {[1,2,3].map(d => (
                  <div key={d} className="w-2 h-2 rounded-full animate-bounce-s" style={{background:'#F5A623', animationDelay:`${d*0.15}s`}}></div>
                ))}
              </div>
            </div>
          </div>
        )}
        <div ref={bottomRef} />
      </div>

      {/* QUICK PROMPTS */}
      {messages.length <= 2 && (
        <div className="px-4 pb-2 flex-shrink-0">
          <div className="flex gap-2 overflow-x-auto pb-1">
            {quickPrompts.map((p, i) => (
              <button key={i} onClick={() => { setInput(p); }}
                className="whitespace-nowrap text-xs px-3 py-2 rounded-full font-bold flex-shrink-0"
                style={{background:'#FFF4CC', color:'#C4862A', border:'1px solid rgba(245,166,35,0.3)'}}>
                {p}
              </button>
            ))}
          </div>
        </div>
      )}

      {/* INPUT */}
      <div className="px-4 pb-6 flex-shrink-0" style={{background:'rgba(255,252,232,0.95)', backdropFilter:'blur(10px)', borderTop:'1px solid rgba(245,166,35,0.2)'}}>
        <div className="flex gap-2 pt-3">
          <input
            value={input}
            onChange={e => setInput(e.target.value)}
            onKeyDown={e => e.key==='Enter' && send()}
            placeholder="Ask Zaki anything about Tarok..."
            className="flex-1 rounded-2xl px-4 py-3 text-sm outline-none"
            style={{background:'white', border:'2px solid rgba(245,166,35,0.3)', color:'#1A1208', fontFamily:'var(--font-body)'}}
          />
          <button onClick={send} disabled={loading || !input.trim()}
            className="w-12 h-12 rounded-2xl flex items-center justify-center font-bold text-lg transition-all flex-shrink-0"
            style={{background:input.trim()?'linear-gradient(135deg,#E07B00,#F5A623)':'rgba(245,166,35,0.2)', color:input.trim()?'#1A1208':'#C4862A'}}>
            →
          </button>
        </div>
      </div>
    </div>
  )
}
