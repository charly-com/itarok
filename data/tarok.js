/**
 * iTárók VOCABULARY DATABASE
 * ============================================================
 * CONFIDENCE LEVELS:
 *   "confirmed"    - Appears in Longtau (2008), Blench & Longtau publications,
 *                    or the official Tarok orthography/alphabet chart (Tarok 
 *                    Language Committee, 1977/1980).
 *   "traceable"    - Word appears in published book titles, example sentences,
 *                    or academic footnotes that cite Tarok sources.
 *   "unverified"   - Word was estimated from Benue-Congo language patterns.
 *                    MUST be reviewed by a native speaker / in-house expert
 *                    before being used in production.
 *   "placeholder"  - Slot kept for a real word; do NOT display to learners yet.
 *
 * HOW TO CONTRIBUTE CORRECTIONS:
 *   1. Change confidence to "confirmed" and add a sourceNote.
 *   2. Correct the tarok spelling and ipa fields.
 *   3. Run: git commit -m "fix(vocab): correct [word] - verified by [name]"
 *
 * PRIMARY SOURCES TO USE:
 *   - Longtau, S.R. (2008). The Tarok Language: Its Basic Principles and Grammar.
 *     Kay Williamson Educational Foundation. [THE definitive reference]
 *   - Lar, M.N., Longtau, S.R. & Bendor-Samuel, P. (1994). 
 *     A Trilingual Tarok Dictionary. Nigeria Bible Translation Trust, Jos.
 *   - Onah & Israel (2022). A Phonological Description of Tarok. JECA.
 *   - Tarok Language Committee (1977). Tarok Alphabet Chart.
 * ============================================================
 */

export const LANGUAGE_INFO = {
  name: "Tarok",
  nativeName: "iTárók",            // confirmed - Longtau 2008
  selfName_people: "oTárók",       // confirmed - Longtau 2008
  selfName_land: "ìTàrók",        // confirmed - Longtau 2008
  alsoKnown: ["Yergam", "Yergum", "Yergem", "Appa"],  // confirmed
  speakers: "~520,000",
  region: "Plateau State, Nigeria (Langtang-North, Langtang-South, Wase, Mikang, Kanke LGAs)",
  family: "Atlantic-Congo → Benue-Congo → Plateau",
  isoCode: "yer",
  mainTown: "Langtang (~186 km southeast of Jos)",
};

/**
 * CONFIRMED: The official Tarok orthography from the Tarok Language Committee.
 * Source: Longtau (2000); Tarok Alphabet Chart (1977).
 * These letters are correct. The EXAMPLE WORDS and NOTES need native-speaker review.
 */
export const ALPHABET = [
  { letter: "a",  ipa: "/a/",   confidence: "confirmed", source: "Tarok Language Committee 1977",
    example: "—", note: "Low central vowel, like 'a' in 'father'" },
  { letter: "a̲",  ipa: "/ɨ/",   confidence: "confirmed", source: "Longtau 2008",
    example: "—", note: "High central vowel; unique to Tarok among Plateau languages" },
  { letter: "b",  ipa: "/b/",   confidence: "confirmed", source: "Tarok Language Committee 1977",
    example: "—", note: "Plain bilabial stop" },
  { letter: "ɓ",  ipa: "/ɓ/",   confidence: "confirmed", source: "Longtau 2008",
    example: "—", note: "Implosive bilabial — air is drawn inward" },
  { letter: "c",  ipa: "/tʃ/",  confidence: "confirmed", source: "Tarok Language Committee 1977",
    example: "—", note: "Like 'ch' in church" },
  { letter: "d",  ipa: "/d/",   confidence: "confirmed", source: "Tarok Language Committee 1977",
    example: "—", note: "Plain alveolar stop" },
  { letter: "ɗ",  ipa: "/ɗ/",   confidence: "confirmed", source: "Longtau 2008",
    example: "—", note: "Implosive alveolar — air is drawn inward" },
  { letter: "e",  ipa: "/ɛ/",   confidence: "confirmed", source: "Tarok Language Committee 1977",
    example: "—", note: "Mid front vowel, like 'e' in 'bed'" },
  { letter: "ǝ",  ipa: "/ə/",   confidence: "confirmed", source: "Longtau 2008",
    example: "—", note: "Mid central vowel (schwa)" },
  { letter: "f",  ipa: "/f/",   confidence: "confirmed", source: "Tarok Language Committee 1977",
    example: "—", note: "Labiodental fricative" },
  { letter: "gb", ipa: "/g͡b/",  confidence: "confirmed", source: "Longtau 2008",
    example: "—", note: "Voiced labiovelar stop — lips and back of throat together" },
  { letter: "gh", ipa: "/ɣ/",   confidence: "confirmed", source: "Longtau 2008",
    example: "—", note: "Velar fricative — like a soft gargling sound" },
  { letter: "i",  ipa: "/i/",   confidence: "confirmed", source: "Tarok Language Committee 1977",
    example: "iTárók", note: "High front vowel, like 'ee' in see" },
  { letter: "j",  ipa: "/dʒ/",  confidence: "confirmed", source: "Tarok Language Committee 1977",
    example: "—", note: "Like 'j' in jump" },
  { letter: "k",  ipa: "/k/",   confidence: "confirmed", source: "Tarok Language Committee 1977",
    example: "—", note: "Velar stop" },
  { letter: "kp", ipa: "/k͡p/",  confidence: "confirmed", source: "Longtau 2008",
    example: "—", note: "Voiceless labiovelar stop — like gb but unvoiced" },
  { letter: "l",  ipa: "/l/",   confidence: "confirmed", source: "Tarok Language Committee 1977",
    example: "—", note: "Lateral approximant" },
  { letter: "m",  ipa: "/m/",   confidence: "confirmed", source: "Tarok Language Committee 1977",
    example: "—", note: "Bilabial nasal" },
  { letter: "n",  ipa: "/n/",   confidence: "confirmed", source: "Tarok Language Committee 1977",
    example: "—", note: "Alveolar nasal" },
  { letter: "ny", ipa: "/ɲ/",   confidence: "confirmed", source: "Longtau 2008",
    example: "—", note: "Palatal nasal, like 'ny' in canyon" },
  { letter: "ŋ",  ipa: "/ŋ/",   confidence: "confirmed", source: "Longtau 2008",
    example: "nŋàpàk", note: "Velar nasal, like 'ng' in sing. Also: labiovelar allophone [ŋ͡m] before /k͡p/ and /g͡b/" },
  { letter: "o",  ipa: "/ɔ/",   confidence: "confirmed", source: "Tarok Language Committee 1977",
    example: "oTárók", note: "Mid back vowel, like 'o' in off" },
  { letter: "p",  ipa: "/p/",   confidence: "confirmed", source: "Tarok Language Committee 1977",
    example: "—", note: "Bilabial stop" },
  { letter: "r",  ipa: "/r/",   confidence: "confirmed", source: "Tarok Language Committee 1977",
    example: "—", note: "Trill or tap" },
  { letter: "s",  ipa: "/s/",   confidence: "confirmed", source: "Tarok Language Committee 1977",
    example: "—", note: "Alveolar fricative" },
  { letter: "sh", ipa: "/ʃ/",   confidence: "confirmed", source: "Longtau 2008",
    example: "—", note: "Post-alveolar fricative, like 'sh' in shoe" },
  { letter: "t",  ipa: "/t/",   confidence: "confirmed", source: "Tarok Language Committee 1977",
    example: "—", note: "Alveolar stop" },
  { letter: "u",  ipa: "/u/",   confidence: "confirmed", source: "Tarok Language Committee 1977",
    example: "—", note: "High back vowel, like 'oo' in moon" },
  { letter: "v",  ipa: "/v/",   confidence: "confirmed", source: "Tarok Language Committee 1977",
    example: "—", note: "Labiodental fricative" },
  { letter: "w",  ipa: "/w/",   confidence: "confirmed", source: "Tarok Language Committee 1977",
    example: "—", note: "Labio-velar approximant" },
  { letter: "y",  ipa: "/j/",   confidence: "confirmed", source: "Tarok Language Committee 1977",
    example: "—", note: "Palatal approximant, like 'y' in yes" },
  { letter: "z",  ipa: "/z/",   confidence: "confirmed", source: "Tarok Language Committee 1977",
    example: "—", note: "Alveolar fricative (voiced)" },
  { letter: "zh", ipa: "/ʒ/",   confidence: "confirmed", source: "Longtau 2008",
    example: "—", note: "Post-alveolar fricative (voiced), like 's' in measure" },
];

export const VOWELS = [
  { symbol: "i",  ipa: "/i/",  description: "High front",    confidence: "confirmed", source: "Wikipedia/Longtau 2008" },
  { symbol: "a̲",  ipa: "/ɨ/",  description: "High central",  confidence: "confirmed", source: "Longtau 2008" },
  { symbol: "u",  ipa: "/u/",  description: "High back",     confidence: "confirmed", source: "Wikipedia/Longtau 2008" },
  { symbol: "e",  ipa: "/ɛ/",  description: "Mid front",     confidence: "confirmed", source: "Wikipedia/Longtau 2008" },
  { symbol: "ǝ",  ipa: "/ə/",  description: "Mid central (schwa)", confidence: "confirmed", source: "Longtau 2008" },
  { symbol: "o",  ipa: "/ɔ/",  description: "Mid back",      confidence: "confirmed", source: "Wikipedia/Longtau 2008" },
  { symbol: "a",  ipa: "/a/",  description: "Low central",   confidence: "confirmed", source: "Wikipedia/Longtau 2008" },
];

/**
 * LESSONS
 * Each word carries a confidence level. The UI should show a ⚠️ badge
 * on unverified words so learners know these are pending expert review.
 *
 * WORDS THAT MUST BE VERIFIED FIRST BY YOUR IN-HOUSE SPEAKER:
 *   All entries marked "unverified". Replace with correct forms + IPA + source.
 */
export const LESSONS = [
  {
    id: "greetings",
    title: "Greetings & Farewells",
    titleTarok: "— (needs expert input)",
    icon: "👋",
    color: "#E07B00",
    bgColor: "#FFF4CC",
    level: "Beginner",
    description: "Everyday greetings in iTárók. ⚠️ Several entries need native-speaker verification.",
    words: [
      {
        tarok: "Re i nyi iTarok",
        english: "Let's Learn Tarok",
        ipa: "—",
        confidence: "traceable",
        sourceNote: "Appears as book title in Tarok Language Committee (1980) publication cited in Longtau 2008",
        notes: "Re = let/come, nyi = learn — confirmed from book title context",
      },
      {
        tarok: "oTárók",
        english: "The Tarok people",
        ipa: "/ò.tá.rók/",
        confidence: "confirmed",
        sourceNote: "Longtau 2008; Wikipedia Tarok language",
        notes: "What the Tarok people call themselves",
      },
      {
        tarok: "iTárók",
        english: "The Tarok language",
        ipa: "/ì.tá.rók/",
        confidence: "confirmed",
        sourceNote: "Longtau 2008",
        notes: "Name of the language itself",
      },
      {
        tarok: "ìTàrók",
        english: "The Tarok land / homeland",
        ipa: "/ì.tà.rók/",
        confidence: "confirmed",
        sourceNote: "Longtau 2008",
        notes: "Note the different tones from iTárók (language)",
      },
      {
        tarok: "⚠️ NEEDS EXPERT INPUT",
        english: "Hello / Welcome",
        ipa: "—",
        confidence: "placeholder",
        sourceNote: "Previous entry 'Aagun' could not be verified in any published Tarok source",
        notes: "Please provide the correct Tarok greeting from your in-house speaker",
      },
      {
        tarok: "⚠️ NEEDS EXPERT INPUT",
        english: "Good morning",
        ipa: "—",
        confidence: "placeholder",
        sourceNote: "Previous entry 'Injin' could not be verified",
        notes: "Needs native speaker verification",
      },
      {
        tarok: "⚠️ NEEDS EXPERT INPUT",
        english: "Thank you",
        ipa: "—",
        confidence: "placeholder",
        sourceNote: "Previous entry 'Yaago' could not be verified in published sources",
        notes: "Needs native speaker verification",
      },
      {
        tarok: "⚠️ NEEDS EXPERT INPUT",
        english: "Yes",
        ipa: "—",
        confidence: "placeholder",
        sourceNote: "Previous entry 'Em' could not be verified",
        notes: "Needs native speaker verification",
      },
      {
        tarok: "⚠️ NEEDS EXPERT INPUT",
        english: "No",
        ipa: "—",
        confidence: "placeholder",
        sourceNote: "Previous entry 'Ayi' could not be verified",
        notes: "Needs native speaker verification",
      },
    ],
  },

  {
    id: "numbers",
    title: "Numbers",
    titleTarok: "— (needs expert input)",
    icon: "🔢",
    color: "#C4862A",
    bgColor: "#FFF9E0",
    level: "Beginner",
    description: "Counting in iTárók. ⚠️ All number entries are unverified — none could be confirmed from accessible published sources.",
    words: [
      {
        tarok: "⚠️ NEEDS EXPERT INPUT",
        english: "One (1)",
        ipa: "—",
        confidence: "placeholder",
        sourceNote: "Previous entry 'Ciin' unverified",
        notes: "",
      },
      {
        tarok: "⚠️ NEEDS EXPERT INPUT",
        english: "Two (2)",
        ipa: "—",
        confidence: "placeholder",
        sourceNote: "Previous entry 'Taan' unverified",
        notes: "",
      },
      {
        tarok: "⚠️ NEEDS EXPERT INPUT",
        english: "Three (3)",
        ipa: "—",
        confidence: "placeholder",
        sourceNote: "Previous entry 'Taar' unverified",
        notes: "",
      },
      {
        tarok: "⚠️ NEEDS EXPERT INPUT",
        english: "Four (4)",
        ipa: "—",
        confidence: "placeholder",
        sourceNote: "Previous entry 'Naas' unverified",
        notes: "",
      },
      {
        tarok: "⚠️ NEEDS EXPERT INPUT",
        english: "Five (5)",
        ipa: "—",
        confidence: "placeholder",
        sourceNote: "Previous entry 'Tuun' unverified",
        notes: "",
      },
      {
        tarok: "⚠️ NEEDS EXPERT INPUT",
        english: "Six (6)",
        ipa: "—",
        confidence: "placeholder",
        notes: "",
      },
      {
        tarok: "⚠️ NEEDS EXPERT INPUT",
        english: "Seven (7)",
        ipa: "—",
        confidence: "placeholder",
        notes: "",
      },
      {
        tarok: "⚠️ NEEDS EXPERT INPUT",
        english: "Eight (8)",
        ipa: "—",
        confidence: "placeholder",
        notes: "",
      },
      {
        tarok: "⚠️ NEEDS EXPERT INPUT",
        english: "Nine (9)",
        ipa: "—",
        confidence: "placeholder",
        notes: "",
      },
      {
        tarok: "⚠️ NEEDS EXPERT INPUT",
        english: "Ten (10)",
        ipa: "—",
        confidence: "placeholder",
        notes: "",
      },
    ],
  },

  {
    id: "family",
    title: "Family & People",
    titleTarok: "— (needs expert input)",
    icon: "👨‍👩‍👧‍👦",
    color: "#b53118",
    bgColor: "#fff5f2",
    level: "Beginner",
    description: "Family terms in iTárók. Some entries traceable from academic texts.",
    words: [
      {
        tarok: "orim",
        english: "Ancestors / ancestral spirits",
        ipa: "/ò.rìm/",
        confidence: "traceable",
        sourceNote: "Mentioned in Wikipedia Tarok people article citing Longtau; ancestral cult term",
        notes: "Important cultural term — ancestral cult (orim) is central to Tarok society",
      },
      {
        tarok: "Funyallang",
        english: "One of the founding Tarok clans",
        ipa: "—",
        confidence: "traceable",
        sourceNote: "Wikipedia Tarok people, citing Lamle 2001 and Longtau 2008",
        notes: "Proper noun — original Tarok clan",
      },
      {
        tarok: "Timwat",
        english: "One of the founding Tarok clans",
        ipa: "—",
        confidence: "traceable",
        sourceNote: "Wikipedia Tarok people, citing Longtau 2008",
        notes: "Proper noun — original Tarok clan",
      },
      {
        tarok: "⚠️ NEEDS EXPERT INPUT",
        english: "Mother",
        ipa: "—",
        confidence: "placeholder",
        sourceNote: "Previous entry 'Ina' could not be verified in accessible sources",
        notes: "",
      },
      {
        tarok: "⚠️ NEEDS EXPERT INPUT",
        english: "Father",
        ipa: "—",
        confidence: "placeholder",
        sourceNote: "Previous entry 'Aba' could not be verified",
        notes: "",
      },
      {
        tarok: "⚠️ NEEDS EXPERT INPUT",
        english: "Child / Son",
        ipa: "—",
        confidence: "placeholder",
        sourceNote: "Previous entry 'Zaa' could not be verified",
        notes: "",
      },
      {
        tarok: "⚠️ NEEDS EXPERT INPUT",
        english: "Woman / Wife",
        ipa: "—",
        confidence: "placeholder",
        notes: "Note: Tarok has a documented women's register (Blench & Longtau 2012)",
      },
      {
        tarok: "⚠️ NEEDS EXPERT INPUT",
        english: "Man / Person",
        ipa: "—",
        confidence: "placeholder",
        notes: "",
      },
    ],
  },

  {
    id: "culture",
    title: "Culture & Traditions",
    titleTarok: "— (needs expert input)",
    icon: "🏺",
    color: "#84603b",
    bgColor: "#f6f3ee",
    level: "Intermediate",
    description: "Tarok cultural vocabulary with traceable sources.",
    words: [
      {
        tarok: "nŋàpàk",
        english: "Traditional Tarok whistle / communication instrument",
        ipa: "/nŋà.pàk/",
        confidence: "traceable",
        sourceNote: "Longtau & Cirman (2016): 'The communicative roles of some Tarok traditional musical instruments'",
        notes: "The nŋàpàk carries messages across the land; used in ceremonies",
      },
      {
        tarok: "Nggapak",
        english: "Tarok academic journal name",
        ipa: "—",
        confidence: "traceable",
        sourceNote: "Multiple Longtau publications 2007; University of Jos journal on Tarok culture",
        notes: "Named after the traditional whistle; published in Langtang",
      },
      {
        tarok: "yar i ga",
        english: "Take/carry and let's go",
        ipa: "—",
        confidence: "traceable",
        sourceNote: "Longtau 2008 — etymology of the name 'Yergam'",
        notes: "'Yergam' is believed to be a Hausa/Fulani corruption of this phrase as heard by traders",
      },
      {
        tarok: "⚠️ NEEDS EXPERT INPUT",
        english: "Harvest festival (Ntim)",
        ipa: "—",
        confidence: "placeholder",
        notes: "The Ntim harvest festival is a real Tarok celebration but proper spelling/IPA needs verification",
      },
      {
        tarok: "Mɓəɓan",
        english: "Genesis (book of the Bible in Tarok)",
        ipa: "—",
        confidence: "traceable",
        sourceNote: "Longtau 2008 bibliography: 'Mɓəɓan, Genesis in Tarok. Nigeria Bible Translation Trust, Jos, 1997'",
        notes: "From the Tarok New Testament translation; shows ɓ and ə in real usage",
      },
      {
        tarok: "Nsar Nnap-nla Inan Mpipye",
        english: "The Tarok New Testament",
        ipa: "—",
        confidence: "traceable",
        sourceNote: "Longtau 2008 bibliography: IBS & NBTT, 1988",
        notes: "The full title of the Tarok New Testament",
      },
    ],
  },
];

/**
 * QUIZ QUESTIONS
 * Only questions about CONFIRMED or TRACEABLE words are safe to use.
 * Placeholder/unverified vocabulary has been removed from the quiz.
 */
export const QUIZ_QUESTIONS = [
  {
    question: "What do the Tarok people call their own language?",
    options: ["Yergam", "iTárók", "Appa", "oTárók"],
    answer: "iTárók",
    confidence: "confirmed",
  },
  {
    question: "What do the Tarok people call themselves?",
    options: ["Yergam", "iTárók", "Appa", "oTárók"],
    answer: "oTárók",
    confidence: "confirmed",
  },
  {
    question: "What do the Tarok people call their homeland?",
    options: ["oTárók", "iTárók", "ìTàrók", "Langtang"],
    answer: "ìTàrók",
    confidence: "confirmed",
  },
  {
    question: "What does 'nŋàpàk' refer to?",
    options: ["A type of food", "A traditional whistle instrument", "A Tarok clan name", "A greeting"],
    answer: "A traditional whistle instrument",
    confidence: "traceable",
  },
  {
    question: "What is 'orim' in Tarok culture?",
    options: ["A greeting", "A type of food", "The ancestors / ancestral spirits", "A number"],
    answer: "The ancestors / ancestral spirits",
    confidence: "traceable",
  },
  {
    question: "What is Tarok also known as in the literature?",
    options: ["Hausa", "Yergam", "Jukun", "Boghom"],
    answer: "Yergam",
    confidence: "confirmed",
  },
  {
    question: "How many phonemic vowels does Tarok have?",
    options: ["5", "6", "7", "8"],
    answer: "7",
    confidence: "confirmed",
  },
  {
    question: "How many phonemic consonants does Tarok have?",
    options: ["21", "25", "29", "33"],
    answer: "29",
    confidence: "confirmed",
  },
  {
    question: "'Re i nyi iTarok' means what in English?",
    options: ["Tarok is alive", "Let's Learn Tarok", "The Tarok land", "Tarok grammar"],
    answer: "Let's Learn Tarok",
    confidence: "traceable",
  },
  {
    question: "What language family does Tarok belong to?",
    options: ["Afroasiatic / Chadic", "Benue-Congo / Plateau", "Kwa", "Bantu"],
    answer: "Benue-Congo / Plateau",
    confidence: "confirmed",
  },
  {
    question: "What is a special feature of Tarok phonology?",
    options: ["No nasal consonants", "Implosive consonants (ɓ, ɗ) and labiovelar stops (gb, kp)", "Click sounds", "No tones"],
    answer: "Implosive consonants (ɓ, ɗ) and labiovelar stops (gb, kp)",
    confidence: "confirmed",
  },
  {
    question: "Where is the main Tarok town located?",
    options: ["Pankshin", "Jos", "Langtang", "Shendam"],
    answer: "Langtang",
    confidence: "confirmed",
  },
  {
    question: "What does the 'ŋ' letter sound like in Tarok?",
    options: ["Like 'n' in name", "Like 'ng' in sing", "Like 'ny' in canyon", "Like 'm' in man"],
    answer: "Like 'ng' in sing",
    confidence: "confirmed",
  },
  {
    question: "What is 'Mɓəɓan' in Tarok?",
    options: ["A greeting", "The book of Genesis in Tarok", "A traditional food", "A clan name"],
    answer: "The book of Genesis in Tarok",
    confidence: "traceable",
  },
  {
    question: "The name 'Yergam' is believed to be a corruption of which Tarok phrase?",
    options: ["oTárók kat", "yar i ga", "Re i nyi", "nŋàpàk"],
    answer: "yar i ga",
    confidence: "traceable",
  },
];