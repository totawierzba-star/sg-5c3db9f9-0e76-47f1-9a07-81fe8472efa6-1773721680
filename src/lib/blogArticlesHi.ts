export interface BlogArticleHi {
  id: string;
  title: string;
  slug: string;
  category: "airport" | "airline" | "foundation";
  airportCode?: string;
  airportName?: string;
  airlineName?: string;
  flag?: string;
  wordCount: number;
  readTime: number;
  excerpt: string;
  publishDate: string;
  featured: boolean;
  color: string;
}

export const blogArticlesHi: BlogArticleHi[] = [
  {
    id: "delhi-airport-der-se-flight",
    title: "दिल्ली हवाई अड्डा देर से उड़ान — मुआवज़ा और अधिकार",
    slug: "delhi-airport-der-se-flight",
    category: "airport",
    airportCode: "DEL",
    airportName: "इंदिरा गांधी अंतर्राष्ट्रीय हवाई अड्डा",
    flag: "🇮🇳",
    wordCount: 7500,
    readTime: 25,
    excerpt: "दिल्ली हवाई अड्डे से देर से उड़ान के लिए मुआवज़ा कैसे प्राप्त करें। इंदिरा गांधी अंतर्राष्ट्रीय हवाई अड्डे के लिए विस्तृत गाइड।",
    publishDate: "2026-03-01",
    featured: true,
    color: "blue"
  },
  {
    id: "delhi-airport-cancel-flight",
    title: "दिल्ली हवाई अड्डा रद्द उड़ान — मुआवज़ा के लिए चरण-दर-चरण गाइड",
    slug: "delhi-airport-cancel-flight",
    category: "airport",
    airportCode: "DEL",
    airportName: "इंदिरा गांधी अंतर्राष्ट्रीय हवाई अड्डा",
    flag: "🇮🇳",
    wordCount: 7200,
    readTime: 24,
    excerpt: "दिल्ली से रद्द की गई उड़ान के लिए मुआवज़े के लिए दावा करने का तरीका जानें। भारतीय यात्रियों के लिए व्यावहारिक सलाह।",
    publishDate: "2026-02-28",
    featured: false,
    color: "red"
  },
  {
    id: "eu-regulation-261-2004-indian-passengers",
    title: "यूरोपीय संघ विनियमन EC 261/2004 — भारतीय यात्रियों के लिए संपूर्ण मार्गदर्शिका",
    slug: "eu-regulation-261-2004-indian-passengers",
    category: "foundation",
    flag: "🇮🇳",
    wordCount: 8000,
    readTime: 30,
    excerpt: "EU की उड़ानों पर भारतीय यात्रियों के अधिकारों का विस्तृत मार्गदर्शिका। EC 261/2004 के तहत मुआवज़ा कैसे प्राप्त करें।",
    publishDate: "2026-03-01",
    featured: true,
    color: "purple"
  },
  {
    id: "flight-delay-cancellation-compensation-amount",
    title: "उड़ान में देरी या रद्दीकरण: मुझे कितना मुआवज़ा मिल सकता है?",
    slug: "flight-delay-cancellation-compensation-amount",
    category: "foundation",
    flag: "🇮🇳",
    wordCount: 5000,
    readTime: 20,
    excerpt: "देरी या रद्द उड़ान के लिए मुआवज़े की राशि की गणना करें। ₹20,000 से ₹50,000 तक — जानें आपको कितना मिल सकता है।",
    publishDate: "2026-03-01",
    featured: true,
    color: "green"
  },
  {
    id: "delhi-london-flight-cancelled-compensation",
    title: "दिल्ली–लंदन उड़ान रद्द – मुआवजे के लिए कदम दर कदम प्रक्रिया",
    slug: "delhi-london-flight-cancelled-compensation",
    category: "airline",
    flag: "🇮🇳",
    wordCount: 10000,
    readTime: 14,
    excerpt: "दिल्ली-लंदन उड़ान रद्द होने पर €600 (₹52,000) मुआवज़ा कैसे प्राप्त करें। Air India, British Airways और Vistara के लिए विस्तृत गाइड। समय सीमा, दस्तावेज़ और विशेषज्ञ टिप्स।",
    publishDate: "2026-03-01",
    featured: true,
    color: "blue"
  },
  {
    id: "mumbai-frankfurt-flight-delay-compensation",
    title: "मुंबई–फ्रैंकफर्ट उड़ान में देरी – यूरोपीय कानून के तहत आपके अधिकार",
    slug: "mumbai-frankfurt-flight-delay-compensation",
    category: "airport",
    flag: "🇮🇳",
    wordCount: 10000,
    readTime: 12,
    excerpt: "मुंबई-फ्रैंकफर्ट रूट पर देरी के लिए €600 मुआवज़ा। Lufthansa, Air India और Emirates के लिए विशेष सलाह। कनेक्शन छूटने पर दोगुना मुआवज़ा।",
    publishDate: "2026-03-01",
    featured: false,
    color: "purple"
  },
  {
    id: "emirates-qatar-etihad-europe-via-gulf-hubs",
    slug: "emirates-qatar-etihad-europe-via-gulf-hubs",
    title: "Emirates, Qatar Airways और Etihad के माध्यम से यूरोप – खाड़ी हब पर अधिकार",
    excerpt: "दुबई, दोहा या अबू धाबी में कनेक्टिंग उड़ान छूट गई? या देरी हुई? जानें कि EU विनियमन 261/2004 कब लागू होता है और कब नहीं।",
    publishDate: "2026-03-01",
    readTime: 14,
    wordCount: 2800,
    category: "airline",
    featured: true,
    color: "purple"
  },
  {
    id: "delhi-dubai-flight-cancelled-compensation",
    slug: "delhi-dubai-flight-cancelled-compensation",
    title: "दिल्ली–दुबई उड़ान रद्द – UAE और भारत में मुआवज़े के नियम",
    excerpt: "दिल्ली-दुबई रूट (Emirates, Air India, IndiGo) पर रद्दीकरण के लिए आपके अधिकार। DGCA बनाम UAE GCAA नियमों की तुलना।",
    publishDate: "2026-03-02",
    readTime: 13,
    wordCount: 2500,
    category: "airport",
    featured: false,
    color: "orange"
  },
  {
    id: "delhi-toronto-flight-cancelled-compensation",
    slug: "delhi-toronto-flight-cancelled-compensation",
    title: "दिल्ली–टोरंटो उड़ान रद्द – कनाडाई APPR और EU नियम",
    excerpt: "Air Canada और Air India की तुलना। क्या आप जानते हैं कि यूरोप होकर जाने पर आपको €600 मिल सकते हैं? टोरंटो रूट के लिए गाइड।",
    publishDate: "2026-03-02",
    readTime: 15,
    wordCount: 3000,
    category: "airline",
    featured: true,
    color: "red"
  },
  {
    id: "canada-appr-indian-passengers",
    slug: "canada-appr-indian-passengers",
    title: "Canada के Air Passenger Protection Regulations (APPR) – भारतीय यात्रियों के लिए",
    excerpt: "कनाडाई हवाई यात्री सुरक्षा नियम (APPR) का विस्तृत विवरण। देरी और रद्दीकरण के लिए CAD 1,000 (₹60,000) तक का मुआवज़ा।",
    publishDate: "2026-03-02",
    readTime: 12,
    wordCount: 2800,
    category: "foundation",
    featured: false,
    color: "red"
  },
  {
    id: "extraordinary-circumstances-compensation",
    slug: "extraordinary-circumstances-compensation",
    title: "असाधारण परिस्थितियाँ – कब एयरलाइन पैसे देने से मना कर सकती है?",
    excerpt: "क्या 'तकनीकी खराबी' या 'खराब मौसम' वास्तव में असाधारण है? जानें कि एयरलाइंस कब बहाने बनाती हैं।",
    publishDate: "2026-03-05",
    readTime: 11,
    wordCount: 2200,
    category: "foundation",
    featured: false,
    color: "gray"
  },
  {
    id: "turkish-airlines-istanbul-compensation-rights",
    slug: "turkish-airlines-istanbul-compensation-rights",
    title: "Turkish Airlines और इस्तांबुल (IST) हब – क्या EU कानून लागू होता है?",
    excerpt: "तुर्की यूरोपीय संघ में नहीं है। जानें कि Turkish Airlines के साथ उड़ान भरने पर आपको कब EC 261 सुरक्षा मिलती है और कब नहीं।",
    publishDate: "2026-03-02",
    readTime: 12,
    wordCount: 2400,
    category: "airline",
    featured: false,
    color: "red"
  },
  {
    id: "klm-air-france-amsterdam-paris-compensation",
    slug: "klm-air-france-amsterdam-paris-compensation",
    title: "KLM और Air France – एम्स्टर्डम और पेरिस के माध्यम से यात्रा (सुरक्षित विकल्प)",
    excerpt: "KLM और Air France, EU एयरलाइंस होने के नाते, भारत से प्रस्थान करने पर भी पूर्ण सुरक्षा प्रदान करते हैं। अमेरिका/कनाडा कनेक्शन के लिए सबसे अच्छा विकल्प।",
    publishDate: "2026-03-02",
    readTime: 14,
    wordCount: 2600,
    category: "airline",
    featured: true,
    color: "blue"
  }
];

export const getCategoryLabelHi = (category: BlogArticleHi["category"]): string => {
  const labels = {
    airport: "हवाई अड्डा",
    airline: "एयरलाइन",
    foundation: "बुनियादी जानकारी"
  };
  return labels[category];
};

export const getArticlesByCategoryHi = (category: BlogArticleHi["category"]): BlogArticleHi[] => {
  return blogArticlesHi.filter(article => article.category === category);
};

export const getFeaturedArticlesHi = (): BlogArticleHi[] => {
  return blogArticlesHi.filter(article => article.featured);
};

export const getTotalWordCountHi = (): number => {
  return blogArticlesHi.reduce((total, article) => total + article.wordCount, 0);
};