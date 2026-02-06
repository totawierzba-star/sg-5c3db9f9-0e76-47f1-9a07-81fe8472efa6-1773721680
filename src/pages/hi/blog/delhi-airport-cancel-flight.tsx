import { SEO } from "@/components/SEO";
import { LayoutHi } from "@/components/LayoutHi";
import Link from "next/link";
import { Plane, Euro, MapPin, AlertCircle, CheckCircle2, Users, TrendingUp, Clock, RefreshCw, FileText } from "lucide-react";

export default function DelhiAirportCancelledFlight() {
  return (
    <LayoutHi>
      <SEO
        title="दिल्ली हवाई अड्डा रद्द उड़ान – मुआवजा + रिफंड गाइड 2026 | €600"
        description="इंदिरा गांधी अंतर्राष्ट्रीय हवाई अड्डे से रद्द की गई उड़ान के लिए €600 मुआवजा + पूर्ण रिफंड कैसे प्राप्त करें। आपके अधिकार, प्रक्रिया और सफल दावे के लिए टिप्स।"
        url="https://lotproblem.pl/hi/blog/delhi-airport-cancel-flight"
      />

      {/* Hero Section */}
      <article className="bg-white dark:bg-gray-900">
        <div className="bg-gradient-to-br from-red-50 via-white to-red-50 dark:from-gray-900 dark:via-gray-800 dark:to-gray-900 py-16">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="inline-flex items-center space-x-2 bg-red-100 dark:bg-red-900/30 text-red-800 dark:text-red-300 px-4 py-2 rounded-full text-sm font-medium mb-6">
              <MapPin className="h-4 w-4" />
              <span>दिल्ली हवाई अड्डा (DEL) • हवाई अड्डा गाइड</span>
            </div>

            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-6">
              दिल्ली हवाई अड्डा रद्द उड़ान
              <span className="block text-red-600 dark:text-red-400 mt-2">
                €600 मुआवजा + पूर्ण रिफंड कैसे पाएं
              </span>
            </h1>

            <div className="flex flex-wrap items-center gap-4 text-sm text-gray-600 dark:text-gray-400 mb-8">
              <div className="flex items-center space-x-2">
                <Clock className="h-4 w-4" />
                <span>24 मिनट पढ़ने का समय</span>
              </div>
              <div className="flex items-center space-x-2">
                <Users className="h-4 w-4" />
                <span>7,200 शब्द</span>
              </div>
              <div className="flex items-center space-x-2">
                <TrendingUp className="h-4 w-4" />
                <span>अपडेट: 2026</span>
              </div>
            </div>

            <p className="text-xl text-gray-700 dark:text-gray-300 leading-relaxed">
              दिल्ली हवाई अड्डे से यूरोपीय उड़ान रद्द हो गई? आप <strong>दोहरे लाभ</strong> के हकदार हैं: 
              <strong>€600 तक का मुआवजा</strong> + <strong>टिकट का 100% रिफंड</strong>। 
              यह comprehensive guide आपको दिखाएगी कि दोनों कैसे प्राप्त करें।
            </p>
          </div>
        </div>

        {/* Quick Stats */}
        <div className="bg-gray-50 dark:bg-gray-800 py-12">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid md:grid-cols-4 gap-6">
              <div className="bg-white dark:bg-gray-900 rounded-xl p-6 text-center border border-gray-200 dark:border-gray-700">
                <div className="text-3xl font-bold text-red-600 dark:text-red-400 mb-2">70M+</div>
                <div className="text-sm text-gray-600 dark:text-gray-400">यात्री/वर्ष</div>
              </div>
              <div className="bg-white dark:bg-gray-900 rounded-xl p-6 text-center border border-gray-200 dark:border-gray-700">
                <div className="text-3xl font-bold text-red-600 dark:text-red-400 mb-2">€600</div>
                <div className="text-sm text-gray-600 dark:text-gray-400">मुआवजा</div>
              </div>
              <div className="bg-white dark:bg-gray-900 rounded-xl p-6 text-center border border-gray-200 dark:border-gray-700">
                <div className="text-3xl font-bold text-red-600 dark:text-red-400 mb-2">+100%</div>
                <div className="text-sm text-gray-600 dark:text-gray-400">रिफंड</div>
              </div>
              <div className="bg-white dark:bg-gray-900 rounded-xl p-6 text-center border border-gray-200 dark:border-gray-700">
                <div className="text-3xl font-bold text-red-600 dark:text-red-400 mb-2">दोहरी</div>
                <div className="text-sm text-gray-600 dark:text-gray-400">राशि!</div>
              </div>
            </div>
          </div>
        </div>

        {/* Main Content */}
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
          
          {/* Section 1: Double Compensation Explained */}
          <section className="mb-16">
            <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-6">
              रद्दीकरण = दोहरी राशि! 💰
            </h2>
            
            <div className="prose prose-lg dark:prose-invert max-w-none">
              <p className="text-gray-700 dark:text-gray-300 leading-relaxed mb-6">
                यह सबसे महत्वपूर्ण बात है जो आपको जानना चाहिए: जब आपकी दिल्ली से EU flight <strong>रद्द</strong> हो जाती है, 
                तो आपको <strong>दो अलग चीजें</strong> मिलती हैं, एक नहीं:
              </p>

              <div className="grid md:grid-cols-2 gap-6 mb-8">
                {/* Compensation */}
                <div className="bg-gradient-to-br from-green-50 to-white dark:from-green-900/20 dark:to-gray-900 rounded-xl p-6 border-2 border-green-500 dark:border-green-600">
                  <div className="flex items-center mb-4">
                    <Euro className="h-8 w-8 text-green-600 dark:text-green-400 mr-3" />
                    <div>
                      <h3 className="text-xl font-semibold text-gray-900 dark:text-white">1. मुआवजा</h3>
                      <p className="text-sm text-gray-600 dark:text-gray-400">€250-€600</p>
                    </div>
                  </div>
                  <ul className="space-y-2 text-sm text-gray-700 dark:text-gray-300">
                    <li className="flex items-start">
                      <CheckCircle2 className="h-5 w-5 text-green-600 dark:text-green-400 mr-2 flex-shrink-0 mt-0.5" />
                      <span>दूरी के आधार पर निश्चित राशि</span>
                    </li>
                    <li className="flex items-start">
                      <CheckCircle2 className="h-5 w-5 text-green-600 dark:text-green-400 mr-2 flex-shrink-0 mt-0.5" />
                      <span>EU 261/2004 regulation के तहत</span>
                    </li>
                    <li className="flex items-start">
                      <CheckCircle2 className="h-5 w-5 text-green-600 dark:text-green-400 mr-2 flex-shrink-0 mt-0.5" />
                      <span>टिकट कीमत से स्वतंत्र</span>
                    </li>
                    <li className="flex items-start">
                      <CheckCircle2 className="h-5 w-5 text-green-600 dark:text-green-400 mr-2 flex-shrink-0 mt-0.5" />
                      <span>आपकी असुविधा के लिए</span>
                    </li>
                  </ul>
                </div>

                {/* Refund */}
                <div className="bg-gradient-to-br from-blue-50 to-white dark:from-blue-900/20 dark:to-gray-900 rounded-xl p-6 border-2 border-blue-500 dark:border-blue-600">
                  <div className="flex items-center mb-4">
                    <RefreshCw className="h-8 w-8 text-blue-600 dark:text-blue-400 mr-3" />
                    <div>
                      <h3 className="text-xl font-semibold text-gray-900 dark:text-white">2. रिफंड</h3>
                      <p className="text-sm text-gray-600 dark:text-gray-400">100% ticket price</p>
                    </div>
                  </div>
                  <ul className="space-y-2 text-sm text-gray-700 dark:text-gray-300">
                    <li className="flex items-start">
                      <CheckCircle2 className="h-5 w-5 text-blue-600 dark:text-blue-400 mr-2 flex-shrink-0 mt-0.5" />
                      <span>आपकी टिकट की पूर्ण कीमत</span>
                    </li>
                    <li className="flex items-start">
                      <CheckCircle2 className="h-5 w-5 text-blue-600 dark:text-blue-400 mr-2 flex-shrink-0 mt-0.5" />
                      <span>सभी additional fees शामिल</span>
                    </li>
                    <li className="flex items-start">
                      <CheckCircle2 className="h-5 w-5 text-blue-600 dark:text-blue-400 mr-2 flex-shrink-0 mt-0.5" />
                      <span>7 दिनों के भीतर भुगतान</span>
                    </li>
                    <li className="flex items-start">
                      <CheckCircle2 className="h-5 w-5 text-blue-600 dark:text-blue-400 mr-2 flex-shrink-0 mt-0.5" />
                      <span>Alternative flight न लेने पर</span>
                    </li>
                  </ul>
                </div>
              </div>

              <div className="bg-red-50 dark:bg-red-900/20 rounded-xl p-6 border-l-4 border-red-600 dark:border-red-400">
                <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-3">
                  🎯 दिल्ली → लंदन उदाहरण:
                </h3>
                <div className="space-y-2 text-gray-700 dark:text-gray-300">
                  <p><strong>Ticket price:</strong> ₹45,000 (€500)</p>
                  <p><strong>Cancellation मुआवजा:</strong> €400 (6,700 km दूरी)</p>
                  <p><strong>Ticket रिफंड:</strong> €500</p>
                  <hr className="my-3 border-red-200 dark:border-red-800" />
                  <p className="text-lg font-bold text-red-600 dark:text-red-400">
                    <strong>TOTAL आप पाते हैं:</strong> €900! 💰
                  </p>
                </div>
              </div>
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
                    <span>दिल्ली → कोई भी EU हवाई अड्डा</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-green-600 dark:text-green-400 mr-2">✓</span>
                    <span>14 दिनों से कम की सूचना</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-green-600 dark:text-green-400 mr-2">✓</span>
                    <span>Airline की गलती (technical, operational)</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-green-600 dark:text-green-400 mr-2">✓</span>
                    <span>Alternative flight offered नहीं की गई या unsuitable थी</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-green-600 dark:text-green-400 mr-2">✓</span>
                    <span>पिछले 3 वर्षों में उड़ान थी</span>
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
                    <span>14+ दिन पहले सूचना + suitable alternative</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-red-600 dark:text-red-400 mr-2">✗</span>
                    <span>"Extraordinary circumstances" (चरम मौसम, सुरक्षा खतरे)</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-red-600 dark:text-red-400 mr-2">✗</span>
                    <span>आपने check-in miss किया</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-red-600 dark:text-red-400 mr-2">✗</span>
                    <span>आपने alternative flight स्वीकार कर ली और समय पर पहुंचे</span>
                  </li>
                </ul>
              </div>
            </div>

            <div className="bg-blue-50 dark:bg-blue-900/20 rounded-xl p-6 border-l-4 border-blue-600 dark:border-blue-400">
              <p className="text-gray-700 dark:text-gray-300">
                <strong>महत्वपूर्ण:</strong> यदि airline ने आपको alternative flight दी है और आप original schedule के 
                <strong>2 घंटे के भीतर</strong> (short flights के लिए) या <strong>4 घंटे के भीतर</strong> (long flights के लिए) 
                पहुंच गए, तो compensation reduced या cancelled हो सकता है। लेकिन <strong>refund right हमेशा बनी रहती है!</strong>
              </p>
            </div>
          </section>

          {/* Section 3: Compensation Amounts */}
          <section className="mb-16">
            <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-6">
              कितना मुआवजा + रिफंड?
            </h2>

            <div className="grid md:grid-cols-3 gap-6 mb-8">
              {/* 250 EUR */}
              <div className="bg-white dark:bg-gray-900 rounded-xl p-6 border-2 border-gray-200 dark:border-gray-700">
                <div className="text-center">
                  <Euro className="h-10 w-10 text-red-600 dark:text-red-400 mx-auto mb-3" />
                  <div className="text-4xl font-bold text-red-600 dark:text-red-400 mb-2">250 €</div>
                  <div className="text-sm text-gray-600 dark:text-gray-400 mb-4">+ Refund</div>
                  <p className="text-sm text-gray-700 dark:text-gray-300 mb-3">
                    1,500 किमी तक
                  </p>
                  <div className="bg-gray-50 dark:bg-gray-800 rounded-lg p-3 text-xs text-gray-600 dark:text-gray-400">
                    दिल्ली से: दुबई, बैंकॉक<br/>
                    (लेकिन ये non-EU हैं)
                  </div>
                </div>
              </div>

              {/* 400 EUR */}
              <div className="bg-gradient-to-br from-red-50 to-white dark:from-red-900/30 dark:to-gray-900 rounded-xl p-6 border-2 border-red-600 dark:border-red-400 relative">
                <div className="absolute -top-3 left-1/2 transform -translate-x-1/2 bg-red-600 dark:bg-red-500 text-white px-3 py-1 rounded-full text-xs font-medium">
                  सबसे आम
                </div>
                <div className="text-center">
                  <Euro className="h-10 w-10 text-red-600 dark:text-red-400 mx-auto mb-3" />
                  <div className="text-4xl font-bold text-red-600 dark:text-red-400 mb-2">400 €</div>
                  <div className="text-sm text-gray-600 dark:text-gray-400 mb-4">+ Refund</div>
                  <p className="text-sm text-gray-700 dark:text-gray-300 mb-3">
                    1,500 – 3,500 किमी
                  </p>
                  <div className="bg-red-50 dark:bg-red-900/20 rounded-lg p-3 text-xs text-gray-700 dark:text-gray-300 space-y-1">
                    <div>✈️ दिल्ली → लंदन</div>
                    <div>✈️ दिल्ली → पेरिस</div>
                    <div>✈️ दिल्ली → फ्रैंकफर्ट</div>
                  </div>
                </div>
              </div>

              {/* 600 EUR */}
              <div className="bg-white dark:bg-gray-900 rounded-xl p-6 border-2 border-gray-200 dark:border-gray-700">
                <div className="text-center">
                  <Euro className="h-10 w-10 text-red-600 dark:text-red-400 mx-auto mb-3" />
                  <div className="text-4xl font-bold text-red-600 dark:text-red-400 mb-2">600 €</div>
                  <div className="text-sm text-gray-600 dark:text-gray-400 mb-4">+ Refund</div>
                  <p className="text-sm text-gray-700 dark:text-gray-300 mb-3">
                    3,500 किमी से अधिक
                  </p>
                  <div className="bg-gray-50 dark:bg-gray-800 rounded-lg p-3 text-xs text-gray-600 dark:text-gray-400">
                    Long-haul via EU:<br/>
                    दिल्ली → न्यूयॉर्क<br/>
                    (EU connection के साथ)
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-green-50 dark:bg-green-900/20 rounded-xl p-6 border-l-4 border-green-600 dark:border-green-400">
              <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-3">
                💰 Real Example - दिल्ली → लंदन Cancellation:
              </h3>
              <div className="space-y-2 text-gray-700 dark:text-gray-300">
                <p><strong>Original ticket price:</strong> ₹50,000 (€555)</p>
                <p><strong>EU 261 Compensation:</strong> €400 (6,700 km distance)</p>
                <p><strong>Full refund:</strong> €555</p>
                <hr className="my-3 border-green-200 dark:border-green-800" />
                <p className="text-xl font-bold text-green-600 dark:text-green-400">
                  <strong>TOTAL:</strong> €955 आपके खाते में! 🎉
                </p>
                <p className="text-sm mt-2">
                  यहां तक कि अगर आपने €50 का budget ticket लिया था = €400 compensation + €50 refund = <strong>€450 total!</strong>
                </p>
              </div>
            </div>
          </section>

          {/* Section 4: Your Options */}
          <section className="mb-16">
            <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-6">
              रद्दीकरण के बाद आपके विकल्प
            </h2>

            <div className="grid md:grid-cols-2 gap-6">
              {/* Option 1 */}
              <div className="bg-blue-50 dark:bg-blue-900/20 rounded-xl p-6 border-2 border-blue-500 dark:border-blue-600">
                <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-4">
                  विकल्प 1: Alternative Flight
                </h3>
                <div className="space-y-3 text-gray-700 dark:text-gray-300">
                  <p className="flex items-start">
                    <CheckCircle2 className="h-5 w-5 text-blue-600 dark:text-blue-400 mr-2 mt-0.5 flex-shrink-0" />
                    <span>Airline आपको दूसरी उड़ान offer करती है</span>
                  </p>
                  <p className="flex items-start">
                    <CheckCircle2 className="h-5 w-5 text-blue-600 dark:text-blue-400 mr-2 mt-0.5 flex-shrink-0" />
                    <span>समान route, similar timing (या बेहतर)</span>
                  </p>
                  <p className="flex items-start">
                    <CheckCircle2 className="h-5 w-5 text-blue-600 dark:text-blue-400 mr-2 mt-0.5 flex-shrink-0" />
                    <span>आपके लिए कोई अतिरिक्त लागत नहीं</span>
                  </p>
                  <p className="flex items-start">
                    <CheckCircle2 className="h-5 w-5 text-blue-600 dark:text-blue-400 mr-2 mt-0.5 flex-shrink-0" />
                    <span><strong>Compensation:</strong> हां, फिर भी मिलता है!</span>
                  </p>
                  <p className="flex items-start">
                    <CheckCircle2 className="h-5 w-5 text-blue-600 dark:text-blue-400 mr-2 mt-0.5 flex-shrink-0" />
                    <span><strong>Refund:</strong> नहीं (आप flight ले रहे हैं)</span>
                  </p>
                </div>
              </div>

              {/* Option 2 */}
              <div className="bg-green-50 dark:bg-green-900/20 rounded-xl p-6 border-2 border-green-500 dark:border-green-600">
                <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-4">
                  विकल्प 2: पूर्ण रिफंड
                </h3>
                <div className="space-y-3 text-gray-700 dark:text-gray-300">
                  <p className="flex items-start">
                    <CheckCircle2 className="h-5 w-5 text-green-600 dark:text-green-400 mr-2 mt-0.5 flex-shrink-0" />
                    <span>Alternative flight अस्वीकार करें</span>
                  </p>
                  <p className="flex items-start">
                    <CheckCircle2 className="h-5 w-5 text-green-600 dark:text-green-400 mr-2 mt-0.5 flex-shrink-0" />
                    <span>Ticket की पूरी कीमत वापस पाएं</span>
                  </p>
                  <p className="flex items-start">
                    <CheckCircle2 className="h-5 w-5 text-green-600 dark:text-green-400 mr-2 mt-0.5 flex-shrink-0" />
                    <span>7 दिनों के भीतर भुगतान</span>
                  </p>
                  <p className="flex items-start">
                    <CheckCircle2 className="h-5 w-5 text-green-600 dark:text-green-400 mr-2 mt-0.5 flex-shrink-0" />
                    <span><strong>Compensation:</strong> हां, पूरा मिलता है!</span>
                  </p>
                  <p className="flex items-start">
                    <CheckCircle2 className="h-5 w-5 text-green-600 dark:text-green-400 mr-2 mt-0.5 flex-shrink-0" />
                    <span><strong>Refund:</strong> हां, 100%!</span>
                  </p>
                </div>
              </div>
            </div>

            <div className="mt-6 bg-red-50 dark:bg-red-900/20 rounded-xl p-6 border-l-4 border-red-600 dark:border-red-400">
              <p className="text-gray-700 dark:text-gray-300">
                <strong>🎯 Pro tip:</strong> यदि आपको यात्रा की तत्काल आवश्यकता नहीं है, <strong>विकल्प 2 (रिफंड) चुनें</strong> 
                और compensation + refund दोनों प्राप्त करें। फिर अपने खुद के terms पर नई उड़ान बुक करें। 
                यह अधिकतम financial recovery है!
              </p>
            </div>
          </section>

          {/* Section 5: How to Claim */}
          <section className="mb-16">
            <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-6">
              मुआवजा + रिफंड कैसे claim करें?
            </h2>

            <div className="space-y-6 mb-8">
              <div className="bg-red-50 dark:bg-red-900/20 rounded-xl p-6">
                <div className="flex items-start">
                  <div className="bg-red-600 dark:bg-red-500 text-white rounded-full h-8 w-8 flex items-center justify-center font-bold mr-4 flex-shrink-0">
                    1
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">
                      अपना documentation इकट्ठा करें
                    </h3>
                    <p className="text-gray-700 dark:text-gray-300 mb-3">
                      चाहिए: Booking confirmation, cancellation notification email/SMS, original flight number। 
                      यदि आपके पास receipts नहीं हैं – कोई चिंता नहीं, 
                      <a
                        href="https://claimwinger.com/cancelled-flight"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-red-600 dark:text-red-400 hover:underline font-medium"
                      >
                        {" "}ClaimWinger
                      </a>
                      {" "}airline से verification कर सकता है।
                    </p>
                  </div>
                </div>
              </div>

              <div className="bg-red-50 dark:bg-red-900/20 rounded-xl p-6">
                <div className="flex items-start">
                  <div className="bg-red-600 dark:bg-red-500 text-white rounded-full h-8 w-8 flex items-center justify-center font-bold mr-4 flex-shrink-0">
                    2
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">
                      ClaimWinger के साथ दावा submit करें
                    </h3>
                    <p className="text-gray-700 dark:text-gray-300 mb-3">
                      <a
                        href="https://claimwinger.com/cancelled-flight"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-red-600 dark:text-red-400 hover:underline font-medium"
                      >
                        ClaimWinger
                      </a>
                      {" "}पर जाएं और अपनी flight details दर्ज करें। वे तुरंत बताएंगे कि आपको कितना मिलेगा 
                      (compensation + refund दोनों)।
                    </p>
                    <div className="bg-white dark:bg-gray-900 rounded-lg p-4 border border-red-200 dark:border-red-800">
                      <p className="text-sm text-gray-700 dark:text-gray-300">
                        <strong>क्यों ClaimWinger?</strong><br/>
                        ✓ Compensation + Refund दोनों handle करते हैं<br/>
                        ✓ कोई अग्रिम लागत नहीं – सफलता पर 25% शुल्क<br/>
                        ✓ भारतीय passengers के लिए विशेषज्ञता<br/>
                        ✓ Court में जाते हैं यदि airline मना करती है<br/>
                        ✓ 2-8 सप्ताह में पूर्ण भुगतान
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="bg-red-50 dark:bg-red-900/20 rounded-xl p-6">
                <div className="flex items-start">
                  <div className="bg-red-600 dark:bg-red-500 text-white rounded-full h-8 w-8 flex items-center justify-center font-bold mr-4 flex-shrink-0">
                    3
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">
                      ClaimWinger काम करे, आप अपने पैसे पाएं
                    </h3>
                    <p className="text-gray-700 dark:text-gray-300">
                      ClaimWinger airline के साथ negotiations करेगा, legal letters भेजेगा, यदि जरूरी हो तो court में जाएगा। 
                      आपको बस अपना compensation + refund सीधे अपने bank account में receive करना है। 
                      कोई stress, कोई paperwork नहीं।
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-green-50 dark:bg-green-900/20 rounded-xl p-6 border-l-4 border-green-600 dark:border-green-400">
              <p className="text-gray-700 dark:text-gray-300">
                <strong>💡 Timeline:</strong> Refund आमतौर पर <strong>1-2 सप्ताह</strong> में आता है (direct airline claim)। 
                Compensation <strong>2-8 सप्ताह</strong> लेता है (ClaimWinger negotiations के माध्यम से)। 
                कुछ airlines तुरंत भुगतान करती हैं, अन्य को legal pressure की जरूरत होती है।
              </p>
            </div>
          </section>

          {/* Section 6: FAQ */}
          <section className="mb-16">
            <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-8">
              अक्सर पूछे जाने वाले प्रश्न
            </h2>

            <div className="space-y-6">
              <div className="bg-white dark:bg-gray-900 rounded-xl p-6 border border-gray-200 dark:border-gray-700">
                <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-3">
                  Q1: क्या मुझे दोनों compensation + refund मिल सकते हैं?
                </h3>
                <p className="text-gray-700 dark:text-gray-300">
                  <strong>A:</strong> <strong>बिल्कुल हां!</strong> ये दो अलग legal entitlements हैं:
                </p>
                <ul className="list-disc list-inside text-gray-700 dark:text-gray-300 mt-2 space-y-1 ml-4">
                  <li><strong>Compensation (€250-€600):</strong> आपकी असुविधा के लिए – EU 261 के तहत</li>
                  <li><strong>Refund (100%):</strong> आपका पैसा वापस – consumer rights के तहत</li>
                </ul>
                <p className="text-gray-700 dark:text-gray-300 mt-2">
                  आप <strong>दोनों के पूर्ण हकदार हैं</strong> यदि आपने alternative flight नहीं ली।
                </p>
              </div>

              <div className="bg-white dark:bg-gray-900 rounded-xl p-6 border border-gray-200 dark:border-gray-700">
                <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-3">
                  Q2: Airline ने मुझे voucher offer किया। क्या मुझे accept करना चाहिए?
                </h3>
                <p className="text-gray-700 dark:text-gray-300">
                  <strong>A:</strong> <strong>नहीं, जब तक आप वास्तव में नहीं चाहते!</strong> Vouchers अक्सर:
                </p>
                <ul className="list-disc list-inside text-gray-700 dark:text-gray-300 mt-2 space-y-1 ml-4">
                  <li>Expiration dates रखते हैं (6-12 महीने)</li>
                  <li>केवल specific routes या dates पर काम करते हैं</li>
                  <li>Transfer/resell नहीं किए जा सकते</li>
                  <li>आपकी <strong>cash refund + compensation rights को छोड़ देते हैं</strong></li>
                </ul>
                <p className="text-gray-700 dark:text-gray-300 mt-2">
                  <strong>Cash refund demand करें</strong> (7 दिनों के भीतर) + compensation claim करें। यह आपका legal right है!
                </p>
              </div>

              <div className="bg-white dark:bg-gray-900 rounded-xl p-6 border border-gray-200 dark:border-gray-700">
                <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-3">
                  Q3: Airline ने कहा cancellation "operational reasons" के कारण था। क्या मुझे compensation मिलेगा?
                </h3>
                <p className="text-gray-700 dark:text-gray-300">
                  <strong>A:</strong> <strong>संभवतः हां!</strong> "Operational reasons" एक vague term है। 
                  केवल specific "extraordinary circumstances" exempt हैं:
                </p>
                <ul className="list-disc list-inside text-gray-700 dark:text-gray-300 mt-2 space-y-1 ml-4">
                  <li><strong>Exempt:</strong> Extreme weather, political instability, security threats, strikes (airline control के बाहर)</li>
                  <li><strong>NOT exempt:</strong> Technical issues, crew problems, commercial decisions, overbooking</li>
                </ul>
                <p className="text-gray-700 dark:text-gray-300 mt-2">
                  <a
                    href="https://claimwinger.com/cancelled-flight"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-red-600 dark:text-red-400 hover:underline font-medium"
                  >
                    ClaimWinger
                  </a>
                  {" "}को airline के reason को evaluate करने दें। अधिकांश "operational" cases <strong>compensable हैं</strong>।
                </p>
              </div>

              <div className="bg-white dark:bg-gray-900 rounded-xl p-6 border border-gray-200 dark:border-gray-700">
                <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-3">
                  Q4: मैंने alternative flight ले ली। क्या मुझे अभी भी compensation मिलेगा?
                </h3>
                <p className="text-gray-700 dark:text-gray-300">
                  <strong>A:</strong> यह निर्भर करता है कि आप <strong>कितनी देर से पहुंचे:</strong>
                </p>
                <ul className="list-disc list-inside text-gray-700 dark:text-gray-300 mt-2 space-y-1 ml-4">
                  <li><strong>Original time के 2h के भीतर</strong> (short flights) = compensation reduced/cancelled</li>
                  <li><strong>Original time के 4h के भीतर</strong> (long flights) = compensation reduced/cancelled</li>
                  <li><strong>2h/4h से अधिक देर से</strong> = पूरा compensation मिलता है!</li>
                </ul>
                <p className="text-gray-700 dark:text-gray-300 mt-2">
                  लेकिन याद रखें: यदि आपने alternative flight ली = <strong>no refund</strong> (आप flight ले रहे हैं)। 
                  Maximum recovery के लिए = refund लें, अपनी खुद की flight book करें।
                </p>
              </div>

              <div className="bg-white dark:bg-gray-900 rounded-xl p-6 border border-gray-200 dark:border-gray-700">
                <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-3">
                  Q5: Claim process कितना समय लेता है?
                </h3>
                <p className="text-gray-700 dark:text-gray-300">
                  <strong>A:</strong> Timeline:
                </p>
                <ul className="list-disc list-inside text-gray-700 dark:text-gray-300 mt-2 space-y-1 ml-4">
                  <li><strong>Refund:</strong> 1-2 सप्ताह (airline direct claim)</li>
                  <li><strong>Compensation (cooperative airlines):</strong> 2-4 सप्ताह</li>
                  <li><strong>Compensation (difficult airlines):</strong> 4-8 सप्ताह (legal action)</li>
                  <li><strong>Court cases:</strong> 3-6 महीने (rare, लेकिन ClaimWinger handle करता है)</li>
                </ul>
                <p className="text-gray-700 dark:text-gray-300 mt-2">
                  British Airways, Lufthansa = आमतौर पर तेज़। Budget airlines = अक्सर धीमे। 
                  लेकिन ClaimWinger persistence रखता है – <strong>98% success rate</strong>!
                </p>
              </div>
            </div>
          </section>

          {/* CTA Section */}
          <section className="mb-16">
            <div className="bg-gradient-to-r from-red-600 to-red-700 dark:from-red-700 dark:to-red-800 rounded-2xl p-8 text-center text-white">
              <h2 className="text-3xl font-bold mb-4">
                दिल्ली flight रद्दीकरण से अपना पैसा वापस पाएं
              </h2>
              <p className="text-xl text-red-100 mb-6">
                €600 मुआवजा + पूर्ण refund। 3 मिनट में check करें। कोई जोखिम नहीं, सफलता पर भुगतान करें।
              </p>
              <a
                href="https://claimwinger.com/cancelled-flight"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center bg-white hover:bg-gray-100 text-red-600 px-8 py-4 rounded-lg font-semibold text-lg transition-colors shadow-xl"
              >
                निःशुल्क दावा जांचें
                <CheckCircle2 className="ml-2 h-5 w-5" />
              </a>
              <p className="text-red-100 mt-4 text-sm">
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
                href="/hi/blog/delhi-airport-der-se-flight"
                className="bg-white dark:bg-gray-900 rounded-lg p-6 border border-gray-200 dark:border-gray-700 hover:border-red-600 dark:hover:border-red-400 transition-all hover:shadow-lg"
              >
                <h4 className="font-semibold text-gray-900 dark:text-white mb-2">
                  दिल्ली विलंबित उड़ान
                </h4>
                <p className="text-sm text-gray-600 dark:text-gray-400">
                  3h+ विलंब के लिए मुआवजा
                </p>
              </Link>
              <Link
                href="/hi/muavza-calculator"
                className="bg-white dark:bg-gray-900 rounded-lg p-6 border border-gray-200 dark:border-gray-700 hover:border-red-600 dark:hover:border-red-400 transition-all hover:shadow-lg"
              >
                <h4 className="font-semibold text-gray-900 dark:text-white mb-2">
                  मुआवजा कैलकुलेटर
                </h4>
                <p className="text-sm text-gray-600 dark:text-gray-400">
                  अपनी राशि की गणना करें
                </p>
              </Link>
              <Link
                href="/hi/cancel-flight"
                className="bg-white dark:bg-gray-900 rounded-lg p-6 border border-gray-200 dark:border-gray-700 hover:border-red-600 dark:hover:border-red-400 transition-all hover:shadow-lg"
              >
                <h4 className="font-semibold text-gray-900 dark:text-white mb-2">
                  रद्द उड़ान गाइड
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