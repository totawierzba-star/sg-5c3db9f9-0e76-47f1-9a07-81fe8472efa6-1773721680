import type { BlogArticleHi, BlogArticleHiCtaPath } from "@/lib/blogArticlesHi";
import { getCategoryLabelHi } from "@/lib/blogArticlesHi";

export type HiArticleSection = {
  title: string;
  paragraphs: string[];
  bullets?: string[];
};

export type HiArticleFaq = {
  question: string;
  answer: string;
};

export type HiArticleContent = {
  title: string;
  seoTitle: string;
  description: string;
  intro: string[];
  quickAnswer: string[];
  sections: HiArticleSection[];
  faqs: HiArticleFaq[];
  ctaPath: BlogArticleHiCtaPath;
  ctaAnchor: string;
  needsCarrierRuleTable: boolean;
};

export const hiOfficialSources = [
  {
    label: "European Commission - air passenger rights",
    href: "https://europa.eu/youreurope/citizens/travel/passenger-rights/air/index_en.htm",
  },
  {
    label: "UK Civil Aviation Authority - compensation rights",
    href: "https://www.caa.co.uk/air-passengers/travel-problems-and-rights/travel-complaints/making-a-claim/am-i-entitled-to-compensation/",
  },
  {
    label: "DGCA India - passenger rights framework",
    href: "https://www.dgca.gov.in/",
  },
];

export function getClaimWingerHiUrl(
  path: BlogArticleHiCtaPath,
  slug: string,
  medium: "context_link" | "embedded_cta" | "article_cta",
  content: string,
) {
  const params = new URLSearchParams({
    utm_source: "problemlot-hi",
    utm_medium: medium,
    utm_campaign: slug,
    utm_content: content,
  });

  return `https://claimwinger.com${path}?${params.toString()}`;
}

function includesAny(value: string, words: string[]) {
  const normalized = value.toLowerCase();
  return words.some((word) => normalized.includes(word.toLowerCase()));
}

function needsCarrierRuleTable(article: BlogArticleHi) {
  return includesAny(`${article.title} ${article.slug} ${article.airlineName || ""}`, [
    "Air India",
    "IndiGo",
    "Virgin Atlantic",
    "British Airways",
  ]);
}

function topicLabel(article: BlogArticleHi) {
  return article.routeName || article.airlineName || article.airportName || article.title;
}

function buildSeoTitle(article: BlogArticleHi) {
  const base = article.title.replace(/\s+—\s+/g, " - ");
  if (base.length >= 54) {
    return `${base} | ₹52,000 तक दावा`;
  }

  return `${base}: EU261 मुआवज़ा गाइड | ₹52,000`;
}

function buildDescription(article: BlogArticleHi) {
  const topic = topicLabel(article);
  if (article.ctaPath === "/hi/radd-udaan") {
    return `${topic} पर उड़ान रद्द हुई? EU261/UK261 के तहत €600 यानी लगभग ₹52,000 तक मुआवज़ा, रिफंड, रीबुकिंग और ClaimWinger no-win-no-fee प्रक्रिया समझें।`;
  }

  return `${topic} पर उड़ान में देरी हुई? भारतीय यात्रियों के लिए EU261/UK261 गाइड: €250, €400 या €600 यानी लगभग ₹21,000-₹52,000 तक मुआवज़ा कब मिलता है।`;
}

function buildIntro(article: BlogArticleHi) {
  const topic = topicLabel(article);
  const category = getCategoryLabelHi(article.category);

  return [
    `${article.title} भारतीय यात्रियों के लिए सिर्फ सामान्य जानकारी नहीं, बल्कि वास्तविक पैसे से जुड़ा प्रश्न है। यूरोप, यूनाइटेड किंगडम या किसी यूरोपीय एयरलाइन से यात्रा करते समय देरी, रद्दीकरण, overbooking या missed connection के कारण आपको EU261 या UK261 के तहत €250, €400 या €600 तक मुआवज़ा मिल सकता है। लंबी भारत-यूरोप उड़ानों में €600 लगभग ₹52,000 के बराबर माना जा सकता है, इसलिए सही नियम पहचानना बहुत महत्वपूर्ण है।`,
    `इस गाइड में ClaimWinger विधि सलाहकार के दृष्टिकोण से ${topic} को सरल भाषा में समझाया गया है। हम देखेंगे कि नियम कब लागू होता है, कब DGCA जैसे भारतीय नियम अलग रहते हैं, कौन से दस्तावेज़ काम आते हैं, और एयरलाइन अगर “असाधारण परिस्थिति” कहकर मना करे तो अगला कदम क्या होना चाहिए। टिकट MakeMyTrip, Cleartrip, EaseMyTrip, Booking या एयरलाइन वेबसाइट से खरीदा गया हो, पात्रता का मुख्य आधार उड़ान का रूट, ऑपरेटिंग कैरियर और अंतिम गंतव्य पर वास्तविक देरी है।`,
    `${category} से जुड़े मामलों में जल्दबाज़ी में वाउचर स्वीकार करने या अधूरी शिकायत भेजने से दावा कमजोर हो सकता है। इसलिए पहले अपनी पात्रता जांचें, फिर दस्तावेज़ व्यवस्थित करें और no-win-no-fee मॉडल में ClaimWinger के माध्यम से आगे बढ़ने पर विचार करें।`,
  ];
}

function buildQuickAnswer(article: BlogArticleHi) {
  const topic = topicLabel(article);
  const rules = needsCarrierRuleTable(article)
    ? "Air India, IndiGo या Virgin Atlantic जैसे non-EU/UK कैरियर में प्रस्थान airport सबसे निर्णायक होता है।"
    : "दावा टिकट कीमत से नहीं, बल्कि रूट, एयरलाइन, देरी के कारण और अंतिम आगमन समय से तय होता है।";

  return [
    `${topic} में €600 यानी लगभग ₹52,000 तक दावा तब मजबूत होता है जब अंतिम गंतव्य पर कम से कम 3 घंटे की देरी एयरलाइन की जिम्मेदारी से हुई हो।`,
    "यूरोपीय हवाई अड्डे से प्रस्थान करने वाली उड़ान पर सामान्यतः EU261 लागू होता है, चाहे एयरलाइन भारतीय, खाड़ी या यूरोपीय हो।",
    rules,
  ];
}

function buildApplicabilitySection(article: BlogArticleHi): HiArticleSection {
  const topic = topicLabel(article);

  if (article.category === "route") {
    return {
      title: `${topic} रूट पर EU261 कब लागू होगा?`,
      paragraphs: [
        `${topic} जैसे लंबी दूरी के रूट में सबसे पहले यह देखें कि उड़ान कहां से शुरू हुई और टिकट एक ही बुकिंग में था या नहीं। यूरोप से भारत वापसी उड़ान में एयरलाइन कोई भी हो, EU261 अक्सर लागू हो सकता है क्योंकि प्रस्थान यूरोपीय हवाई अड्डे से हुआ। भारत से यूरोप जाते समय non-EU एयरलाइन पर नियम सीमित हो सकता है, जबकि Lufthansa, Air France, KLM, Finnair या LOT जैसे EU कैरियर पर संरक्षण मजबूत रहता है।`,
        "मिस्ड कनेक्शन में सिर्फ पहले सेक्टर की देरी नहीं, बल्कि अंतिम गंतव्य पर पहुंचने का समय महत्वपूर्ण है। यदि पूरी यात्रा एक ही PNR पर थी और अंतिम देरी 3 घंटे या अधिक हुई, तो दावा मजबूत हो सकता है। अलग-अलग टिकट पर जोखिम बढ़ता है क्योंकि एयरलाइन पूरी यात्रा श्रृंखला की जिम्मेदारी से बच सकती है।",
      ],
      bullets: [
        "एक ही बुकिंग/Pnr को सुरक्षित रखें।",
        "अंतिम गंतव्य पर वास्तविक आगमन समय लिखें।",
        "एयरलाइन द्वारा बताए गए कारण का स्क्रीनशॉट रखें।",
      ],
    };
  }

  if (article.category === "airport") {
    return {
      title: `${topic} हवाई अड्डे पर देरी या कनेक्शन में क्या देखें?`,
      paragraphs: [
        `${topic} से यात्रा करते समय एयरपोर्ट की भीड़, security, late inbound aircraft या slot restriction जैसे कारण सुनने को मिल सकते हैं। पर हर कारण “असाधारण परिस्थिति” नहीं होता। EU261 में एयरलाइन को यह दिखाना पड़ता है कि देरी उसके नियंत्रण से बाहर थी और उसने सभी उचित कदम उठाए।`,
        "भारतीय यात्रियों के लिए खासकर transit hubs जैसे Frankfurt, Heathrow, Paris CDG और Amsterdam Schiphol में अंतिम arrival delay को नोट करना जरूरी है। यदि एयरलाइन ने rerouting दी, होटल दिया या meal voucher दिया, फिर भी नकद मुआवज़े का अधिकार अलग से मौजूद हो सकता है।",
      ],
      bullets: [
        "departure board और delay notification की फोटो लें।",
        "hotel, taxi और भोजन की रसीदें संभालकर रखें।",
        "एयरलाइन से लिखित कारण मांगें।",
      ],
    };
  }

  if (article.category === "airline") {
    return {
      title: `${topic} में एयरलाइन की जिम्मेदारी कैसे तय होती है?`,
      paragraphs: [
        `${topic} से जुड़े मामलों में operating carrier यानी वास्तविक उड़ान चलाने वाली एयरलाइन महत्वपूर्ण होती है। Codeshare टिकट पर मार्केटिंग एयरलाइन अलग हो सकती है, लेकिन दावा आमतौर पर उस एयरलाइन से जुड़ता है जिसने उड़ान संचालित की।`,
        "EU carrier भारत से उड़ान भरते हुए भी EU261 के तहत आ सकता है। इसके उलट Air India या IndiGo जैसे भारतीय कैरियर पर भारत से यूरोप जाते समय EU261 सामान्यतः लागू नहीं होता, लेकिन यूरोप से भारत लौटते समय प्रस्थान यूरोप से होने के कारण दावा बन सकता है।",
      ],
      bullets: [
        "टिकट पर operating carrier देखें।",
        "भारत से प्रस्थान और यूरोप से प्रस्थान में फर्क समझें।",
        "एयरलाइन के refusal email को सुरक्षित रखें।",
      ],
    };
  }

  return {
    title: "इस मामले में पात्रता का मूल नियम",
    paragraphs: [
      "EU261 का केंद्रीय नियम सरल है: यदि covered flight अंतिम गंतव्य पर 3 घंटे या अधिक देरी से पहुंचती है और कारण एयरलाइन की जिम्मेदारी में है, तो दूरी के आधार पर €250, €400 या €600 मुआवज़ा मिल सकता है। Cancellation और denied boarding में अलग नोटिस अवधि और re-routing नियम भी देखे जाते हैं।",
      "DGCA भारतीय घरेलू और भारत-आधारित यात्राओं में देखभाल, refund और सीमित compensation framework देता है, लेकिन EU261 जैसा fixed €600 cash compensation हर भारतीय उड़ान पर अपने आप लागू नहीं होता। इसलिए भारतीय यात्रियों के लिए सबसे जरूरी सवाल है: उड़ान कहां से निकली, एयरलाइन कौन थी और final delay कितना था।",
    ],
    bullets: [
      "तीन घंटे की अंतिम देरी को प्राथमिक threshold मानें।",
      "खराब मौसम, ATC strike या सुरक्षा जोखिम जैसे extraordinary circumstances अलग हो सकते हैं।",
      "तकनीकी खराबी हर बार extraordinary circumstance नहीं मानी जाती।",
    ],
  };
}

function buildProcedureSection(article: BlogArticleHi): HiArticleSection {
  const topic = topicLabel(article);

  return {
    title: "दावा करने की प्रक्रिया: भारतीय यात्री क्या करें?",
    paragraphs: [
      `${topic} में दावा शुरू करने से पहले flight number, तारीख, booking reference, boarding pass, airline email/SMS, delay reason और final arrival time को एक जगह रखें। OTA से खरीदी टिकट होने पर भी EU261 दावा airline से संबंधित रहता है; MakeMyTrip, Cleartrip या EaseMyTrip की invoice उपयोगी हो सकती है, लेकिन जिम्मेदारी operating carrier पर देखी जाती है।`,
      "पहला कदम पात्रता जांचना है। यदि मामला covered दिखता है, तो एयरलाइन को structured claim भेजें। यदि airline जवाब नहीं देती, voucher थोपती है या असाधारण परिस्थिति का सामान्य जवाब देती है, तो ClaimWinger जैसे no-win-no-fee partner के जरिए दावा आगे बढ़ाना कम जोखिम वाला विकल्प हो सकता है।",
    ],
    bullets: [
      "PNR, ticket number और boarding pass रखें।",
      "देरी की timeline लिखें: scheduled departure, actual departure, final arrival।",
      "एयरलाइन से written reason मांगें, सिर्फ मौखिक जवाब पर भरोसा न करें।",
      "ClaimWinger में claim submit करते समय वही spelling और तारीखें इस्तेमाल करें जो टिकट पर हैं।",
    ],
  };
}

function buildMoneySection(): HiArticleSection {
  return {
    title: "€600 को भारतीय रुपये में क्यों देखें?",
    paragraphs: [
      "भारत-यूरोप लंबी दूरी की उड़ानों में सबसे आम eligible band €600 है, जो लगभग ₹52,000 के आसपास माना जा सकता है। यह राशि टिकट की कीमत से स्वतंत्र होती है; बहुत सस्ती economy ticket या mileage ticket पर भी fixed compensation मिल सकता है, यदि बाकी legal conditions पूरी हों।",
      "€250 लगभग ₹21,000 और €400 लगभग ₹33,000 के बराबर समझना व्यावहारिक है। वास्तविक INR राशि exchange rate, payment method और conversion fees से बदल सकती है, इसलिए ClaimWinger पात्रता जांच में राशि euro में ही आधार मानी जाती है और रुपये सिर्फ intent समझाने के लिए दिए जाते हैं।",
    ],
  };
}

function buildSourceSection(): HiArticleSection {
  return {
    title: "आधिकारिक नियम: EU261, UK261 और DGCA को साथ में पढ़ें",
    paragraphs: [
      "EU261 यूरोपीय हवाई अड्डों से प्रस्थान और EU carriers की कुछ incoming flights को कवर करता है। UK261 ब्रेक्ज़िट के बाद UK routes के लिए समान शैली का framework देता है। DGCA भारत के domestic और India-origin passenger rights के लिए अलग framework है, इसलिए इन तीनों को मिलाकर route-specific निष्कर्ष निकालना चाहिए।",
      "ClaimWinger विधि सलाहकार का व्यावहारिक तरीका है: पहले jurisdiction पहचानें, फिर operating carrier देखें, फिर final delay और cause की जांच करें। यही क्रम पाठक और खोज परिणाम, दोनों के लिए सबसे साफ उत्तर देता है।",
    ],
  };
}

function buildFaqs(article: BlogArticleHi): HiArticleFaq[] {
  const topic = topicLabel(article);
  const ctaLabel = article.ctaPath === "/hi/radd-udaan" ? "रद्द उड़ान" : "देरी वाली उड़ान";

  return [
    {
      question: `${topic} पर कितनी देरी से मुआवज़ा मिल सकता है?`,
      answer:
        "आम तौर पर EU261/UK261 में अंतिम गंतव्य पर 3 घंटे या अधिक की देरी मुख्य threshold है। सिर्फ departure delay काफी नहीं; final arrival delay और कारण दोनों देखने पड़ते हैं।",
    },
    {
      question: "क्या €600 यानी लगभग ₹52,000 हर मामले में मिलता है?",
      answer:
        "नहीं। €600 लंबी दूरी यानी 3,500 km से अधिक covered flights के लिए हो सकता है। छोटी दूरी पर €250 और मध्यम दूरी पर €400 लागू हो सकता है।",
    },
    {
      question: "अगर टिकट MakeMyTrip, Cleartrip या EaseMyTrip से खरीदा था तो क्या दावा कमजोर होगा?",
      answer:
        "नहीं, OTA से टिकट खरीदने से EU261 दावा अपने आप कमजोर नहीं होता। Claim generally operating airline से जुड़ता है; OTA invoice और booking confirmation दस्तावेज़ के रूप में उपयोगी होते हैं।",
    },
    {
      question: "Airline ने voucher दिया है, क्या मैं नकद मांग सकता हूं?",
      answer:
        "यदि आप EU261/UK261 के तहत cash compensation के पात्र हैं, तो voucher अंतिम विकल्प नहीं होना चाहिए। किसी voucher को स्वीकार करने से पहले शर्तें पढ़ें और claim value की तुलना करें।",
    },
    {
      question: `ClaimWinger से ${ctaLabel} का दावा कैसे शुरू करें?`,
      answer:
        "फॉर्म में उड़ान नंबर, तारीख, route और देरी या cancellation की जानकारी भरें। ClaimWinger no-win-no-fee मॉडल में पहले पात्रता देखता है और मजबूत मामलों को airline के सामने संरचित तरीके से आगे बढ़ाता है।",
    },
  ];
}

export function buildHiArticleContent(article: BlogArticleHi): HiArticleContent {
  const needsTable = needsCarrierRuleTable(article);
  const ctaAnchor =
    article.ctaPath === "/hi/radd-udaan"
      ? "रद्द उड़ान मुआवज़ा जांच"
      : "देरी वाली उड़ान मुआवज़ा जांच";

  const sections = [
    buildApplicabilitySection(article),
    buildMoneySection(),
    buildProcedureSection(article),
    buildSourceSection(),
  ];

  if (needsTable) {
    sections.splice(1, 0, {
      title: "Non-EU carrier पर EU261/UK261 स्थिति",
      paragraphs: [
        "Air India, IndiGo और Virgin Atlantic जैसे कैरियर में nationality से अधिक महत्वपूर्ण प्रस्थान airport और लागू jurisdiction है। नीचे की तालिका भारतीय यात्रियों के लिए सबसे उपयोगी shortcut देती है।",
      ],
    });
  }

  return {
    title: article.title,
    seoTitle: buildSeoTitle(article),
    description: buildDescription(article),
    intro: buildIntro(article),
    quickAnswer: buildQuickAnswer(article),
    sections,
    faqs: buildFaqs(article),
    ctaPath: article.ctaPath,
    ctaAnchor,
    needsCarrierRuleTable: needsTable,
  };
}
