'use client'
import { useState } from 'react'
import { useRouter } from 'next/navigation'
import { ALPHABET, VOWELS } from '../../data/tarok'
import AudioButton from '../../components/AudioButton'

export default function AlphabetPage() {
  const router = useRouter()
  const [active, setActive] = useState(null)
  const [tab, setTab] = useState('consonants')

  return (
    <div className="min-h-screen cheetah-bg pb-8">
      <div className="cheetah-header px-5 pt-12 pb-6">
        <button onClick={() => router.push('/')} className="text-sm mb-3" style={{color:'rgba(245,166,35,0.7)'}}>‹ Home</button>
        <h1 className="font-display text-4xl text-white" style={{letterSpacing:3}}>🔤 ALPHABET</h1>
        <p className="text-sm mt-1" style={{color:'rgba(245,166,35,0.6)', fontFamily:'var(--font-body)'}}>33 letters · IPA · Audio</p>
      </div>

      <div className="px-5 mt-4 flex gap-2 overflow-x-auto pb-1">
        {[['consonants','Consonants'],['vowels','Vowels (7)'],['tones','Tones']].map(([t,l]) => (
          <button key={t} onClick={() => setTab(t)} className="px-4 py-2 rounded-full text-sm font-bold whitespace-nowrap"
            style={{background:tab===t?'#1A1208':'#FFF4CC', color:tab===t?'#F5A623':'#C4862A', border:`2px solid ${tab===t?'#F5A623':'transparent'}`}}>
            {l}
          </button>
        ))}
      </div>

      {tab === 'consonants' && (
        <div className="px-5 mt-4">
          <p className="text-xs mb-4" style={{color:'#8B6914', fontFamily:'var(--font-body)'}}>Tap any letter for pronunciation guide + audio</p>
          <div className="grid grid-cols-3 gap-2">
            {ALPHABET.map((item, idx) => (
              <div key={idx}>
                <button onClick={() => setActive(active===idx?null:idx)}
                  className="w-full rounded-2xl p-3 text-center transition-all"
                  style={{background:active===idx?'#1A1208':'white', color:active===idx?'#F5A623':'#1A1208', border:`2px solid ${active===idx?'#F5A623':'rgba(245,166,35,0.2)'}`, boxShadow:active===idx?'0 4px 20px rgba(245,166,35,0.25)':'none'}}>
                  <div className="font-display text-2xl" style={{letterSpacing:1}}>{item.letter}</div>
                  <div className="text-xs font-mono mt-0.5 opacity-70">{item.ipa}</div>
                </button>
                {active === idx && (
                  <div className="mt-1 rounded-2xl p-3 animate-fade-up" style={{background:'#FFFCE8', border:'1px solid rgba(245,166,35,0.3)'}}>
                    <div className="flex items-center gap-2 mb-2">
                      <AudioButton text={item.example.split(' ')[0]} size="sm" />
                      <p className="text-xs font-bold" style={{color:'#E07B00'}}>Example: {item.example}</p>
                    </div>
                    <p className="text-xs" style={{color:'#2D1F00', fontFamily:'var(--font-body)'}}>{item.note}</p>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      )}

      {tab === 'vowels' && (
        <div className="px-5 mt-4 space-y-3">
          <p className="text-xs mb-2" style={{color:'#8B6914', fontFamily:'var(--font-body)'}}>Tarok has 7 phonemic vowels — tap 🔊 to hear each</p>
          {VOWELS.map((v, idx) => (
            <div key={idx} className="bg-white rounded-2xl p-4 flex items-center gap-4" style={{border:'1px solid rgba(245,166,35,0.2)'}}>
              <div className="w-14 h-14 rounded-xl flex items-center justify-center flex-shrink-0" style={{background:'linear-gradient(135deg,#FFF4CC,#FFFCE8)'}}>
                <span className="font-display text-3xl" style={{color:'#E07B00', letterSpacing:1}}>{v.symbol}</span>
              </div>
              <div className="flex-1">
                <div className="font-mono text-sm font-bold mb-0.5" style={{color:'#C4862A'}}>{v.ipa}</div>
                <div className="text-xs font-bold mb-0.5" style={{color:'#1A1208', fontFamily:'var(--font-body)'}}>{v.description}</div>
                <div className="text-xs italic" style={{color:'#8B6914', fontFamily:'var(--font-body)'}}>{v.example}</div>
              </div>
              <AudioButton text={v.example.split(' ')[0]} size="sm" />
            </div>
          ))}
        </div>
      )}

      {tab === 'tones' && (
        <div className="px-5 mt-4 space-y-4">
          <div className="rounded-2xl p-4" style={{background:'linear-gradient(135deg,#1A1208,#2D1F00)', border:'1px solid rgba(245,166,35,0.2)'}}>
            <h3 className="font-display text-xl text-white mb-2" style={{letterSpacing:2}}>TONAL LANGUAGE</h3>
            <p className="text-sm leading-relaxed" style={{color:'rgba(255,244,204,0.8)', fontFamily:'var(--font-body)'}}>
              In Tarok, pitch (tone) changes word meaning completely. The same syllables mean different things depending on whether you say them high, low, or mid.
            </p>
          </div>
          {[
            {tone:'High Tone', symbol:'´', color:'#F5A623', bg:'#FFFCE8', desc:'Voice rises up in pitch', example:'náa — Mother (respectful)', tip:'Think of a question "Really?"'},
            {tone:'Low Tone',  symbol:'`', color:'#E07B00', bg:'#FFF4CC', desc:'Voice falls down in pitch', example:'nàa — Cattle/Cow', tip:'Think of a statement "OK."'},
            {tone:'Mid Tone',  symbol:'—', color:'#C4862A', bg:'#FFF9E0', desc:'Neutral, level pitch', example:'Most everyday words', tip:'Normal speaking pitch'},
          ].map((t, i) => (
            <div key={i} className="rounded-2xl p-4" style={{background:t.bg, border:`1px solid rgba(245,166,35,0.3)`}}>
              <div className="flex items-center gap-3 mb-2">
                <span className="w-9 h-9 rounded-full flex items-center justify-center font-bold text-white text-xl" style={{background:t.color}}>{t.symbol}</span>
                <span className="font-display text-lg" style={{color:t.color, letterSpacing:1}}>{t.tone.toUpperCase()}</span>
              </div>
              <p className="text-sm mb-1" style={{color:'#1A1208', fontFamily:'var(--font-body)'}}>{t.desc}</p>
              <p className="text-xs italic mb-1" style={{color:'#C4862A'}}>e.g. {t.example}</p>
              <p className="text-xs" style={{color:'#8B6914'}}>💡 {t.tip}</p>
            </div>
          ))}
        </div>
      )}
    </div>
  )
}
