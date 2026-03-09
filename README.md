# iTárók — Tarok Language Learning App 🐆
### Cheetah Edition

A Next.js Progressive Web App (PWA) for learning the Tarok language (iTárók).

## New Features in This Version
- 🐆 **Cheetah color theme** — golden amber + dark spots aesthetic throughout
- 🐆 **Zaki the AI Tutor** — Animated cheetah avatar powered by Claude AI for interactive Tarok lessons
- 📺 **Folktales with Videos** — 6 embedded story videos with Tarok vocabulary highlighted
- 🔊 **Audio Pronunciation** — Every word has a speaker button (Web Speech API)

## Pages
- `/` — Home with progress dashboard
- `/lessons/[id]` — 7 lesson categories with audio on every word  
- `/flashcards` — Flip cards with audio, Know/Still Learning tracking
- `/quiz` — 5/10/20 question quiz modes
- `/alphabet` — 33 letters with IPA + audio examples
- `/tutor` — AI chat with Zaki the cheetah (Claude-powered)
- `/folktales` — 6 story videos with Tarok vocabulary

## Getting Started

```bash
npm install
npm run dev
```

## Build & TWA APK

```bash
npm run build
# Generates /out folder (static export)

# Host /out on HTTPS (Vercel/Netlify)
# Then use https://www.pwabuilder.com to generate the APK
```

## Audio Note
Pronunciation uses the browser's Web Speech API with en-NG (Nigerian English) voice.
For production, consider adding Eleven Labs or Google TTS for actual Tarok pronunciation.

## Tutor Note  
The AI tutor uses the Anthropic Claude API. Make sure your deployment environment supports the `/v1/messages` endpoint call from the client. For production, proxy through a server-side API route.

## Language Info
- **Name**: Tarok (iTárók) | Also: Yergam, Appa
- **Speakers**: ~520,000 | **Region**: Plateau State, Nigeria
- **Family**: Atlantic-Congo → Benue-Congo → Plateau | **ISO**: yer
