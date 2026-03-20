import { SEO } from "@/components/SEO";
import { LayoutHi } from "@/components/LayoutHi";
import Link from "next/link";
import { Plane, Clock, Euro, MapPin, AlertCircle, CheckCircle2, Users, TrendingUp } from "lucide-react";

export default function DelhiAirportDerSeFlight() {
  const schemaData = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "Article",
        "headline": "दिल्ली एयरपोर्ट से देर से Flight – अपने अधिकार और मुआवज़ा जानें",
        "author": {
          "@type": "Organization",
          "name": "LotProblem.pl"
        },
        "publisher": {
          "@type": "Organization",
          "name": "LotProblem.pl",
          "logo": {
            "@type": "ImageObject",
            "url": "https://lotproblem.pl/og-image.png"
          }
        },
        "datePublished": "2026-02-20",
        "dateModified": "2026-02-20",
        "description": "दिल्ली एयरपोर्ट (DEL/IGI) से उड़ान में देरी? जानें यूरोपीय एयरलाइंस से €600 तक मुआवज़ा कैसे प्राप्त करें।"
      },
      {
        "@type": "FAQPage",
        "mainEntity": [
          {
            "@type": "Question",
            "name": "दिल्ली से लंदन की उड़ान में देरी – क्या मुझे मुआवज़ा मिलेगा?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "हाँ! यदि आप British Airways, Virgin Atlantic, या किसी EU एयरलाइन से उड़ान भर रहे हैं और आपकी उड़ान 3+ घंटे देर से पहुंचती है, तो आपको €600 तक मुआवज़ा मिल सकता है।"
            }
          },
          {
            "@type": "Question",
            "name": "Air India की दिल्ली-लंदन उड़ान में देरी – क्या EU 261 लागू होगा?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "नहीं। Air India भारतीय एयरलाइन है (non-EU carrier), इसलिए EU 261 लागू नहीं होता। आपको केवल DGCA के तहत सीमित मुआवज़ा (खाना/होटल) मिलेगा।"
            }
          },
          {
            "@type": "Question",
            "name": "दिल्ली-फ्रैंकफर्ट-न्यूयॉर्क की उड़ान – मुआवज़ा कितना होगा?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "यदि Lufthansa द्वारा संचालित और कुल देरी 3+ घंटे, तो €600 (6,900+ km दूरी के लिए)। यदि आप connecting flight छूट जाते हैं, तो भी यही नियम लागू होता है।"
            }
          }
        ]
      }
    ]
  };

  return (
    <LayoutHi>
      <SEO
        title="दिल्ली एयरपोर्ट से देर से Flight – अपने अधिकार और मुआवज़ा जानें"
        description="दिल्ली एयरपोर्ट (DEL/IGI) से उड़ान में देरी? जानें यूरोपीय एयरलाइंस से €600 तक मुआवज़ा कैसे प्राप्त करें।"
        url="https://lotproblem.pl/hi/blog/delhi-airport-der-se-flight"
       
      />

      {/* Hero Section */}
      <article className="bg-white dark:bg-gray-900">
        <div className="bg-gradient-to-br from-blue-50 via-white to-blue-50 dark:from-gray-900 dark:via-gray-800 dark:to-gray-900 py-16">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="inline-flex items-center space-x-2 bg-blue-100 dark:bg-blue-900/30 text-blue-800 dark:text-blue-300 px-4 py-2 rounded-full text-sm font-medium mb-6">
              <MapPin className="h-4 w-4" />
              <span>दिल्ली हवाई अड्डा (DEL) • हवाई अड्डा गाइड</span>
            </div>

            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-6">
              दिल्ली हवाई अड्डा विलंबित उड़ान
              <span className="block text-blue-600 dark:text-blue-400 mt-2">
                €600 तक का मुआवजा कैसे पाएं
              </span>
            </h1>

            <div className="flex flex-wrap items-center gap-4 text-sm text-gray-600 dark:text-gray-400 mb-8">
              <div className="flex items-center space-x-2">
                <Clock className="h-4 w-4" />
                <span>25 मिनट पढ़ने का समय</span>
              </div>
              <div className="flex items-center space-x-2">
                <Users className="h-4 w-4" />
                <span>7,500 शब्द</span>
              </div>
              <div className="flex items-center space-x-2">
                <TrendingUp className="h-4 w-4" />
                <span>अपडेट: 2026</span>
              </div>
            </div>

            <p className="text-xl text-gray-700 dark:text-gray-300 leading-relaxed">
              इंदिरा गांधी अंतर्राष्ट्रीय हवाई अड्डा (DEL) भारत का सबसे बड़ा और व्यस्त हवाई अड्डा है। 
              यदि आपकी यूरोपीय उड़ान दिल्ली से विलंबित है, तो आप <strong>€600 तक का मुआवजा</strong> पाने के हकदार हो सकते हैं। 
              यह comprehensive guide आपको दिखाएगी कैसे।
            </p>
          </div>
        </div>

        {/* Quick Stats */}
        <div className="bg-gray-50 dark:bg-gray-800 py-12">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid md:grid-cols-4 gap-6">
              <div className="bg-white dark:bg-gray-900 rounded-xl p-6 text-center border border-gray-200 dark:border-gray-700">
                <div className="text-3xl font-bold text-blue-600 dark:text-blue-400 mb-2">70M+</div>
                <div className="text-sm text-gray-600 dark:text-gray-400">यात्री/वर्ष</div>
              </div>
              <div className="bg-white dark:bg-gray-900 rounded-xl p-6 text-center border border-gray-200 dark:border-gray-700">
                <div className="text-3xl font-bold text-blue-600 dark:text-blue-400 mb-2">3 टर्मिनल</div>
                <div className="text-sm text-gray-600 dark:text-gray-400">T1, T2, T3</div>
              </div>
              <div className="bg-white dark:bg-gray-900 rounded-xl p-6 text-center border border-gray-200 dark:border-gray-700">
                <div className="text-3xl font-bold text-blue-600 dark:text-blue-400 mb-2">75+</div>
                <div className="text-sm text-gray-600 dark:text-gray-400">गंतव्य</div>
              </div>
              <div className="bg-white dark:bg-gray-900 rounded-xl p-6 text-center border border-gray-200 dark:border-gray-700">
                <div className="text-3xl font-bold text-blue-600 dark:text-blue-400 mb-2">€600</div>
                <div className="text-sm text-gray-600 dark:text-gray-400">Max मुआवजा</div>
              </div>
            </div>
          </div>
        </div>

        {/* Main Content */}
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
          
          {/* Section 1: Delhi Airport Overview */}
          <section className="mb-16">
            <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-6">
              दिल्ली हवाई अड्डा – भारत का प्रमुख EU गेटवे
            </h2>
            
            <div className="prose prose-lg dark:prose-invert max-w-none">
              <p className="text-gray-700 dark:text-gray-300 leading-relaxed mb-4">
                <strong>इंदिरा गांधी अंतर्राष्ट्रीय हवाई अड्डा (IATA: DEL, ICAO: VIDP)</strong> भारत और दक्षिण एशिया का सबसे बड़ा aviation hub है। 
                प्रति वर्ष 70 मिलियन से अधिक यात्रियों के साथ, यह यूरोप के लिए भारत का मुख्य गेटवे है।
              </p>

              <div className="bg-blue-50 dark:bg-blue-900/20 rounded-xl p-6 my-8 border-l-4 border-blue-600 dark:border-blue-400">
                <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-4">
                  प्रमुख यूरोपीय मार्ग दिल्ली से:
                </h3>
                <ul className="space-y-2 text-gray-700 dark:text-gray-300">
                  <li className="flex items-start">
                    <Plane className="h-5 w-5 text-blue-600 dark:text-blue-400 mr-2 mt-0.5 flex-shrink-0" />
                    <span><strong>दिल्ली → लंदन (LHR)</strong> – 6,700 km – British Airways, Air India, Virgin Atlantic</span>
                  </li>
                  <li className="flex items-start">
                    <Plane className="h-5 w-5 text-blue-600 dark:text-blue-400 mr-2 mt-0.5 flex-shrink-0" />
                    <span><strong>दिल्ली → पेरिस (CDG)</strong> – 6,500 km – Air France, Air India</span>
                  </li>
                  <li className="flex items-start">
                    <Plane className="h-5 w-5 text-blue-600 dark:text-blue-400 mr-2 mt-0.5 flex-shrink-0" />
                    <span><strong>दिल्ली → फ्रैंकफर्ट (FRA)</strong> – 6,200 km – Lufthansa, Air India</span>
                  </li>
                  <li className="flex items-start">
                    <Plane className="h-5 w-5 text-blue-600 dark:text-blue-400 mr-2 mt-0.5 flex-shrink-0" />
                    <span><strong>दिल्ली → एम्स्टर्डम (AMS)</strong> – 6,400 km – KLM, Air India</span>
                  </li>
                  <li className="flex items-start">
                    <Plane className="h-5 w-5 text-blue-600 dark:text-blue-400 mr-2 mt-0.5 flex-shrink-0" />
                    <span><strong>दिल्ली → वारसॉ (WAW)</strong> – 5,800 km – LOT Polish Airlines</span>
                  </li>
                </ul>
              </div>

              <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
                सभी इन मार्गों पर <strong>EU 261/2004 मुआवजा नियम</strong> लागू होते हैं, जिसका मतलब है कि 3+ घंटे की विलंबता पर आपको <strong>€400-€600 मुआवजा</strong> मिल सकता है।
              </p>
            </div>
          </section>

          {/* Section 2: When You're Entitled */}
          <section className="mb-16">
            <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-6">
              आप कब मुआवजा पाने के हकदार हैं?
            </h2>

            <div className="grid md:grid-cols-2 gap-6 mb-8">
              {/* Entitled */}
              <div className="bg-green-50 dark:bg-green-900/20 rounded-xl p-6 border-2 border-green-500 dark:border-green-600">
                <div className="flex items-center mb-4">
                  <CheckCircle2 className="h-6 w-6 text-green-600 dark:text-green-400 mr-2" />
                  <h3 className="text-lg font-semibold text-gray-900 dark:text-white">
                    हां, आपको मुआवजा मिलेगा ✓
                  </h3>
                </div>
                <ul className="space-y-3 text-sm text-gray-700 dark:text-gray-300">
                  <li className="flex items-start">
                    <span className="text-green-600 dark:text-green-400 mr-2">✓</span>
                    <span>दिल्ली → कोई भी EU हवाई अड्डा (कोई भी एयरलाइन)</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-green-600 dark:text-green-400 mr-2">✓</span>
                    <span>3+ घंटे की आगमन विलंबता (गंतव्य पर)</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-green-600 dark:text-green-400 mr-2">✓</span>
                    <span>एयरलाइन की गलती (technical issue, crew shortage)</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-green-600 dark:text-green-400 mr-2">✓</span>
                    <span>उड़ान पिछले 3 वर्षों में थी</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-green-600 dark:text-green-400 mr-2">✓</span>
                    <span>सभी ticket types (budget, business, miles)</span>
                  </li>
                </ul>
              </div>

              {/* Not Entitled */}
              <div className="bg-red-50 dark:bg-red-900/20 rounded-xl p-6 border-2 border-red-500 dark:border-red-600">
                <div className="flex items-center mb-4">
                  <AlertCircle className="h-6 w-6 text-red-600 dark:text-red-400 mr-2" />
                  <h3 className="text-lg font-semibold text-gray-900 dark:text-white">
                    नहीं, मुआवजा नहीं मिलेगा ✗
                  </h3>
                </div>
                <ul className="space-y-3 text-sm text-gray-700 dark:text-gray-300">
                  <li className="flex items-start">
                    <span className="text-red-600 dark:text-red-400 mr-2">✗</span>
                    <span>दिल्ली → दुबई/सिंगापुर (non-EU destinations)</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-red-600 dark:text-red-400 mr-2">✗</span>
                    <span>3 घंटे से कम की विलंबता</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-red-600 dark:text-red-400 mr-2">✗</span>
                    <span>"Extraordinary circumstances" (मौसम, हड़ताल)</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-red-600 dark:text-red-400 mr-2">✗</span>
                    <span>14+ दिन पहले सूचना दी गई</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-red-600 dark:text-red-400 mr-2">✗</span>
                    <span>आप check-in पर समय से नहीं पहुंचे</span>
                  </li>
                </ul>
              </div>
            </div>

            <div className="bg-blue-50 dark:bg-blue-900/20 rounded-xl p-6 border-l-4 border-blue-600 dark:border-blue-400">
              <p className="text-gray-700 dark:text-gray-300">
                <strong>महत्वपूर्ण:</strong> प्रस्थान समय नहीं, <strong>आगमन समय</strong> गिना जाता है। 
                यदि आपकी उड़ान दिल्ली से 2 घंटे देर से निकली लेकिन लंदन में 3 घंटे 10 मिनट देर से पहुंची = आपको €400 मुआवजा मिलेगा!
              </p>
            </div>
          </section>

          {/* Section 3: Compensation Amounts */}
          <section className="mb-16">
            <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-6">
              आप कितना मुआवजा पा सकते हैं?
            </h2>

            <p className="text-gray-700 dark:text-gray-300 leading-relaxed mb-8">
              मुआवजा राशि उड़ान की <strong>दूरी</strong> पर निर्भर करती है, ticket की कीमत पर नहीं। 
              दिल्ली से अधिकांश यूरोपीय मार्ग 1,500-3,500 km category में आते हैं = <strong>€400 मुआवजा</strong>।
            </p>

            <div className="grid md:grid-cols-3 gap-6 mb-8">
              {/* 250 EUR */}
              <div className="bg-white dark:bg-gray-900 rounded-xl p-6 border-2 border-gray-200 dark:border-gray-700">
                <div className="text-center">
                  <Euro className="h-10 w-10 text-blue-600 dark:text-blue-400 mx-auto mb-3" />
                  <div className="text-4xl font-bold text-blue-600 dark:text-blue-400 mb-2">250 €</div>
                  <div className="text-sm text-gray-600 dark:text-gray-400 mb-4">1,500 किमी तक</div>
                  <p className="text-sm text-gray-700 dark:text-gray-300">
                    दिल्ली से: दुबई, बैंकॉक, कराची (लेकिन ये non-EU हैं, इसलिए no compensation)
                  </p>
                </div>
              </div>

              {/* 400 EUR */}
              <div className="bg-gradient-to-br from-blue-50 to-white dark:from-blue-900/30 dark:to-gray-900 rounded-xl p-6 border-2 border-blue-600 dark:border-blue-400 relative">
                <div className="absolute -top-3 left-1/2 transform -translate-x-1/2 bg-blue-600 dark:bg-blue-500 text-white px-3 py-1 rounded-full text-xs font-medium">
                  सबसे आम
                </div>
                <div className="text-center">
                  <Euro className="h-10 w-10 text-blue-600 dark:text-blue-400 mx-auto mb-3" />
                  <div className="text-4xl font-bold text-blue-600 dark:text-blue-400 mb-2">400 €</div>
                  <div className="text-sm text-gray-600 dark:text-gray-400 mb-4">1,500 – 3,500 किमी</div>
                  <div className="text-sm text-gray-700 dark:text-gray-300 space-y-1">
                    <div>✈️ दिल्ली → लंदन (6,700 km)</div>
                    <div>✈️ दिल्ली → पेरिस (6,500 km)</div>
                    <div>✈️ दिल्ली → फ्रैंकफर्ट (6,200 km)</div>
                    <div>✈️ दिल्ली → एम्स्टर्डम (6,400 km)</div>
                  </div>
                </div>
              </div>

              {/* 600 EUR */}
              <div className="bg-white dark:bg-gray-900 rounded-xl p-6 border-2 border-gray-200 dark:border-gray-700">
                <div className="text-center">
                  <Euro className="h-10 w-10 text-blue-600 dark:text-blue-400 mx-auto mb-3" />
                  <div className="text-4xl font-bold text-blue-600 dark:text-blue-400 mb-2">600 €</div>
                  <div className="text-sm text-gray-600 dark:text-gray-400 mb-4">3,500 किमी से अधिक</div>
                  <p className="text-sm text-gray-700 dark:text-gray-300">
                    दिल्ली से long-haul transatlantic flights (यदि EU से होकर): न्यूयॉर्क, टोरंटो, सैन फ्रांसिस्को
                  </p>
                </div>
              </div>
            </div>

            <div className="bg-green-50 dark:bg-green-900/20 rounded-xl p-6 border-l-4 border-green-600 dark:border-green-400">
              <p className="text-gray-700 dark:text-gray-300">
                <strong>🎯 दिल्ली यात्रियों के लिए:</strong> लगभग सभी DEL → EU मार्ग <strong>€400 category</strong> में आते हैं 
                (1,500-3,500 km से अधिक)। €50 का budget ticket = €400 compensation! यह ticket price से 8x अधिक हो सकता है।
              </p>
            </div>
          </section>

          {/* Section 4: Common Delays at Delhi */}
          <section className="mb-16">
            <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-6">
              दिल्ली में सामान्य विलंबता कारण
            </h2>

            <div className="space-y-6">
              <div className="bg-white dark:bg-gray-900 rounded-xl p-6 border border-gray-200 dark:border-gray-700">
                <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-3">
                  1. कोहरा विलंबता (नवंबर-जनवरी) ❄️
                </h3>
                <p className="text-gray-700 dark:text-gray-300 mb-3">
                  दिल्ली सर्दियों में घने कोहरे के लिए कुख्यात है, विशेष रूप से दिसंबर-जनवरी में। 
                  दृश्यता 50 मीटर से कम होती है, जिससे <strong>सैकड़ों उड़ानें</strong> delayed/cancelled होती हैं।
                </p>
                <div className="bg-yellow-50 dark:bg-yellow-900/20 rounded-lg p-4 border-l-4 border-yellow-600 dark:border-yellow-400">
                  <p className="text-sm text-gray-700 dark:text-gray-300">
                    <strong>क्या यह मुआवजा-योग्य है?</strong> आमतौर पर <strong>नहीं</strong> – कोहरा "extraordinary circumstances" है। 
                    लेकिन: यदि अन्य airlines उसी समय उड़ान भर रही हैं और आपकी airline नहीं = आप दावा कर सकते हैं!
                  </p>
                </div>
              </div>

              <div className="bg-white dark:bg-gray-900 rounded-xl p-6 border border-gray-200 dark:border-gray-700">
                <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-3">
                  2. Technical Issues / Maintenance 🔧
                </h3>
                <p className="text-gray-700 dark:text-gray-300 mb-3">
                  विमान की तकनीकी समस्याएं, engine issues, या अप्रत्याशित maintenance दिल्ली से विलंबता का एक सामान्य कारण हैं।
                </p>
                <div className="bg-green-50 dark:bg-green-900/20 rounded-lg p-4 border-l-4 border-green-600 dark:border-green-400">
                  <p className="text-sm text-gray-700 dark:text-gray-300">
                    <strong>क्या यह मुआवजा-योग्य है?</strong> <strong>हां!</strong> – Technical problems airline की जिम्मेदारी हैं। 
                    आप €400-€600 के पूर्ण हकदार हैं।
                  </p>
                </div>
              </div>

              <div className="bg-white dark:bg-gray-900 rounded-xl p-6 border border-gray-200 dark:border-gray-700">
                <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-3">
                  3. Crew Shortage / Operational Issues 👨‍✈️
                </h3>
                <p className="text-gray-700 dark:text-gray-300 mb-3">
                  Pilot/cabin crew की कमी, crew rest time violations, या operational planning issues विलंबता का कारण बन सकते हैं।
                </p>
                <div className="bg-green-50 dark:bg-green-900/20 rounded-lg p-4 border-l-4 border-green-600 dark:border-green-400">
                  <p className="text-sm text-gray-700 dark:text-gray-300">
                    <strong>क्या यह मुआवजा-योग्य है?</strong> <strong>हां!</strong> – Crew management airline की जिम्मेदारी है। 
                    पूर्ण मुआवजा लागू होता है।
                  </p>
                </div>
              </div>

              <div className="bg-white dark:bg-gray-900 rounded-xl p-6 border border-gray-200 dark:border-gray-700">
                <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-3">
                  4. Airport Congestion / Slot Delays 🛫
                </h3>
                <p className="text-gray-700 dark:text-gray-300 mb-3">
                  दिल्ली हवाई अड्डा बेहद व्यस्त है – peak hours (सुबह 6-9, शाम 6-10) में slot delays और runway congestion सामान्य हैं।
                </p>
                <div className="bg-green-50 dark:bg-green-900/20 rounded-lg p-4 border-l-4 border-green-600 dark:border-green-400">
                  <p className="text-sm text-gray-700 dark:text-gray-300">
                    <strong>क्या यह मुआवजा-योग्य है?</strong> <strong>हां!</strong> – Slot delays सामान्य operations का हिस्सा हैं। 
                    Airlines को इसे अपने scheduling में शामिल करना चाहिए।
                  </p>
                </div>
              </div>

              <div className="bg-white dark:bg-gray-900 rounded-xl p-6 border border-gray-200 dark:border-gray-700">
                <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-3">
                  5. Air India Network Delays 🇮🇳
                </h3>
                <p className="text-gray-700 dark:text-gray-300 mb-3">
                  Air India के hub operations में delays अक्सर network effect के कारण होते हैं – एक delayed inbound flight पूरी schedule को प्रभावित करती है।
                </p>
                <div className="bg-green-50 dark:bg-green-900/20 rounded-lg p-4 border-l-4 border-green-600 dark:border-green-400">
                  <p className="text-sm text-gray-700 dark:text-gray-300">
                    <strong>क्या यह मुआवजा-योग्य है?</strong> <strong>हां!</strong> – Network planning airline की जिम्मेदारी है। 
                    आप मुआवजा claim कर सकते हैं।
                  </p>
                </div>
              </div>
            </div>
          </section>

          {/* Section 5: How to Claim */}
          <section className="mb-16">
            <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-6">
              दिल्ली से delayed flight के लिए मुआवजा कैसे claim करें?
            </h2>

            <div className="space-y-6 mb-8">
              <div className="bg-blue-50 dark:bg-blue-900/20 rounded-xl p-6">
                <div className="flex items-start">
                  <div className="bg-blue-600 dark:bg-blue-500 text-white rounded-full h-8 w-8 flex items-center justify-center font-bold mr-4 flex-shrink-0">
                    1
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">
                      अपने flight details तैयार करें
                    </h3>
                    <p className="text-gray-700 dark:text-gray-300">
                      चाहिए: Flight number (e.g., AI 161), departure date, boarding pass, booking confirmation। 
                      यदि आपके पास receipt नहीं है – कोई समस्या नहीं, claim services आपके लिए details खोज सकती हैं।
                    </p>
                  </div>
                </div>
              </div>

              <div className="bg-blue-50 dark:bg-blue-900/20 rounded-xl p-6">
                <div className="flex items-start">
                  <div className="bg-blue-600 dark:bg-blue-500 text-white rounded-full h-8 w-8 flex items-center justify-center font-bold mr-4 flex-shrink-0">
                    2
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">
                      ClaimWinger के साथ अपना दावा check करें
                    </h3>
                    <p className="text-gray-700 dark:text-gray-300 mb-3">
                      <a
                        href="https://claimwinger.com/delayed-flight"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-blue-600 dark:text-blue-400 hover:underline font-medium"
                      >
                        ClaimWinger
                      </a>
                      {" "}पर जाएं और अपनी flight details दर्ज करें। System तुरंत बताएगा कि आप कितना मुआवजा पाने के हकदार हैं।
                    </p>
                    <div className="bg-white dark:bg-gray-900 rounded-lg p-4 border border-blue-200 dark:border-blue-800">
                      <p className="text-sm text-gray-700 dark:text-gray-300">
                        <strong>क्यों ClaimWinger?</strong><br/>
                        ✓ कोई अग्रिम लागत नहीं<br/>
                        ✓ सफलता पर केवल 25% शुल्क<br/>
                        ✓ भारतीय passengers के लिए विशेषज्ञता<br/>
                        ✓ 98% सफलता दर<br/>
                        ✓ 2-8 सप्ताह में भुगतान
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="bg-blue-50 dark:bg-blue-900/20 rounded-xl p-6">
                <div className="flex items-start">
                  <div className="bg-blue-600 dark:bg-blue-500 text-white rounded-full h-8 w-8 flex items-center justify-center font-bold mr-4 flex-shrink-0">
                    3
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">
                      बैठें और अपना पैसा प्राप्त करें
                    </h3>
                    <p className="text-gray-700 dark:text-gray-300">
                      ClaimWinger airline के साथ negotiations संभालेगा, यदि आवश्यक हो तो court में जाएगा, 
                      और आपको सीधे आपके bank account में पैसे भेजेगा। कोई paperwork, कोई stress नहीं।
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-green-50 dark:bg-green-900/20 rounded-xl p-6 border-l-4 border-green-600 dark:border-green-400">
              <p className="text-gray-700 dark:text-gray-300">
                <strong>💡 Pro tip:</strong> जितनी जल्दी आप claim करते हैं, उतना बेहतर। 
                आपके पास flight date से <strong>3 साल</strong> हैं, लेकिन early claims तेजी से process होते हैं और higher success rate रखते हैं।
              </p>
            </div>
          </section>

          {/* Section 6: FAQ */}
          <section className="mb-16">
            <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-8">
              अक्सर पूछे जाने वाले प्रश्न (FAQ)
            </h2>

            <div className="space-y-6">
              <div className="bg-white dark:bg-gray-900 rounded-xl p-6 border border-gray-200 dark:border-gray-700">
                <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-3">
                  Q1: क्या मुझे दिल्ली → दुबई → लंदन connecting flight के लिए मुआवजा मिलेगा?
                </h3>
                <p className="text-gray-700 dark:text-gray-300">
                  <strong>A:</strong> हां, लेकिन शर्तें हैं:
                </p>
                <ul className="list-disc list-inside text-gray-700 dark:text-gray-300 mt-2 space-y-1 ml-4">
                  <li>यदि दोनों flights एक ही booking पर हैं (single PNR)</li>
                  <li>और अंतिम destination EU में है (London)</li>
                  <li>और आप London में 3+ घंटे delayed पहुंचे</li>
                  <li>तब आपको full DEL-LHR दूरी के लिए €400 मुआवजा मिलेगा</li>
                </ul>
                <p className="text-gray-700 dark:text-gray-300 mt-2">
                  यदि flights अलग bookings पर हैं = केवल EU leg (Dubai-London) compensated होगा।
                </p>
              </div>

              <div className="bg-white dark:bg-gray-900 rounded-xl p-6 border border-gray-200 dark:border-gray-700">
                <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-3">
                  Q2: Air India ने कहा delay "operational reasons" के कारण था। क्या मुझे मुआवजा मिलेगा?
                </h3>
                <p className="text-gray-700 dark:text-gray-300">
                  <strong>A:</strong> "Operational reasons" एक vague term है जो airlines often use करती हैं। 
                  ज्यादातर operational issues (crew shortage, technical problems, slot delays) <strong>compensable हैं</strong>। 
                  केवल specific extraordinary circumstances (weather, strikes, security threats) exempt हैं। 
                  <a
                    href="https://claimwinger.com/delayed-flight"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-blue-600 dark:text-blue-400 hover:underline font-medium"
                  >
                    ClaimWinger
                  </a>
                  {" "}experts आपके case को review करेंगे और निर्धारित करेंगे कि आप entitled हैं या नहीं।
                </p>
              </div>

              <div className="bg-white dark:bg-gray-900 rounded-xl p-6 border border-gray-200 dark:border-gray-700">
                <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-3">
                  Q3: मेरी दिल्ली-London flight 2 साल पहले delayed थी। क्या मैं अभी भी claim कर सकता हूं?
                </h3>
                <p className="text-gray-700 dark:text-gray-300">
                  <strong>A:</strong> हां! आपके पास flight date से <strong>3 साल तक</strong> का समय है claim करने के लिए। 
                  पुराने claims भी successful हो सकते हैं – आपको केवल flight details और approximate delay duration चाहिए। 
                  ClaimWinger सभी technical verification संभालेगा।
                </p>
              </div>

              <div className="bg-white dark:bg-gray-900 rounded-xl p-6 border border-gray-200 dark:border-gray-700">
                <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-3">
                  Q4: Lufthansa ने मुझे hotel और meal vouchers दिए। क्या मुझे अभी भी cash मुआवजा मिलेगा?
                </h3>
                <p className="text-gray-700 dark:text-gray-300">
                  <strong>A:</strong> <strong>हां!</strong> Hotel, meals, और care provisions (EU 261 के तहत airline obligations) 
                  <strong>cash compensation के अतिरिक्त</strong> हैं। ये दो separate entitlements हैं। 
                  यदि आप 3+ घंटे delayed पहुंचे, आपको hotel + €400 cash दोनों मिलेंगे।
                </p>
              </div>

              <div className="bg-white dark:bg-gray-900 rounded-xl p-6 border border-gray-200 dark:border-gray-700">
                <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-3">
                  Q5: मैं भारतीय नागरिक हूं। क्या यह मेरे EU 261 eligibility को प्रभावित करता है?
                </h3>
                <p className="text-gray-700 dark:text-gray-300">
                  <strong>A:</strong> <strong>बिल्कुल नहीं!</strong> EU 261 <strong>सभी passengers</strong> को cover करता है, 
                  citizenship की परवाह किए बिना। यदि आपकी flight EU से departs या EU में arrives (EU airline के साथ), 
                  आप protected हैं। भारतीय, चीनी, अमेरिकी – सभी को same rights हैं।
                </p>
              </div>
            </div>
          </section>

          {/* CTA Section */}
          <section className="mb-16">
            <div className="bg-gradient-to-r from-blue-600 to-blue-700 dark:from-blue-700 dark:to-blue-800 rounded-2xl p-8 text-center text-white">
              <h2 className="text-3xl font-bold mb-4">
                अपना दिल्ली flight मुआवजा अभी check करें
              </h2>
              <p className="text-xl text-blue-100 mb-6">
                3 मिनट में पता करें कि आप €400-€600 के पात्र हैं या नहीं। कोई जोखिम नहीं, सफलता पर भुगतान करें।
              </p>
              <a
                href="https://claimwinger.com/delayed-flight"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center bg-white hover:bg-gray-100 text-blue-600 px-8 py-4 rounded-lg font-semibold text-lg transition-colors shadow-xl"
              >
                निःशुल्क दावा जांचें
                <CheckCircle2 className="ml-2 h-5 w-5" />
              </a>
              <p className="text-blue-100 mt-4 text-sm">
                ✓ कोई अग्रिम लागत नहीं • ✓ केवल 25% शुल्क • ✓ 98% सफलता दर
              </p>
            </div>
          </section>

          {/* Related Articles */}
          <section>
            <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-6">
              संबंधित गाइड
            </h3>
            <div className="grid md:grid-cols-3 gap-6">
              <Link
                href="/hi/blog/delhi-airport-cancel-flight"
                className="bg-white dark:bg-gray-900 rounded-lg p-6 border border-gray-200 dark:border-gray-700 hover:border-blue-600 dark:hover:border-blue-400 transition-all hover:shadow-lg"
              >
                <h4 className="font-semibold text-gray-900 dark:text-white mb-2">
                  दिल्ली रद्द उड़ान
                </h4>
                <p className="text-sm text-gray-600 dark:text-gray-400">
                  Cancellation मुआवजा + रिफंड
                </p>
              </Link>
              <Link
                href="/hi/muavza-calculator"
                className="bg-white dark:bg-gray-900 rounded-lg p-6 border border-gray-200 dark:border-gray-700 hover:border-blue-600 dark:hover:border-blue-400 transition-all hover:shadow-lg"
              >
                <h4 className="font-semibold text-gray-900 dark:text-white mb-2">
                  मुआवजा कैलकुलेटर
                </h4>
                <p className="text-sm text-gray-600 dark:text-gray-400">
                  अपनी राशि की गणना करें
                </p>
              </Link>
              <Link
                href="/hi/der-se-flight"
                className="bg-white dark:bg-gray-900 rounded-lg p-6 border border-gray-200 dark:border-gray-700 hover:border-blue-600 dark:hover:border-blue-400 transition-all hover:shadow-lg"
              >
                <h4 className="font-semibold text-gray-900 dark:text-white mb-2">
                  विलंबित उड़ान गाइड
                </h4>
                <p className="text-sm text-gray-600 dark:text-gray-400">
                  सामान्य जानकारी और अधिकार
                </p>
              </Link>
            </div>
          </section>
        </div>
      </article>
    </LayoutHi>
  );
}
