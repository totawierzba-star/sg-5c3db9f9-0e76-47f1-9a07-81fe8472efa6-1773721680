import { SEO } from "@/components/SEO";
import { LayoutHi } from "@/components/LayoutHi";
import Link from "next/link";
import { Plane, Euro, Clock, XCircle, CheckCircle2, ArrowRight } from "lucide-react";

export default function HomeHi() {
  const schemaData = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "Organization",
        "name": "LotProblem India",
        "url": "https://problemlot.com/hi",
        "logo": "https://problemlot.com/images/logo.png",
        "sameAs": ["https://claimwinger.com"]
      },
      {
        "@type": "WebSite",
        "name": "LotProblem India - Flight Compensation Guide",
        "url": "https://problemlot.com/hi",
        "potentialAction": {
          "@type": "SearchAction",
          "target": "https://problemlot.com/hi/search?q={search_term_string}",
          "query-input": "required name=search_term_string"
        }
      }
    ]
  };

  return (
    <LayoutHi>
      <SEO
        title="फ्लाइट में देरी या रद्दीकरण? ₹52,000 तक का मुआवजा (EU 261)"
        description="क्या आपकी फ्लाइट लेट या कैंसिल हुई थी? जानें कि एयर इंडिया, लुफ्थांसा और अन्य से €600 (₹52,000) तक का रिफंड और मुआवजा कैसे प्राप्त करें।"
       
      />

      {/* Hero Section */}
      <section className="bg-gradient-to-br from-blue-50 via-white to-blue-50 dark:from-gray-900 dark:via-gray-800 dark:to-gray-900 py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <div className="inline-flex items-center space-x-2 bg-blue-100 dark:bg-blue-900/30 text-blue-800 dark:text-blue-300 px-4 py-2 rounded-full text-sm font-medium mb-6">
              <Plane className="h-4 w-4" />
              <span>EU 261/2004 • यात्री अधिकार</span>
            </div>
            
            <h1 className="text-4xl md:text-6xl font-bold text-gray-900 dark:text-white mb-6">
              विलंबित या रद्द की गई उड़ान?
              <span className="block text-blue-600 dark:text-blue-400 mt-2">
                €600 तक का मुआवजा पाएं
              </span>
            </h1>

            <p className="text-xl text-gray-600 dark:text-gray-400 mb-8 max-w-3xl mx-auto">
              यदि आपकी यूरोपीय संघ की उड़ान 3+ घंटे विलंबित हुई या रद्द की गई, तो आपको मुआवजे का अधिकार हो सकता है। 
              अपना दावा आज ही जांचें – कोई जोखिम नहीं, सफलता पर भुगतान करें।
            </p>

            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <a
                href="https://claimwinger.com"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center bg-blue-600 hover:bg-blue-700 text-white px-8 py-4 rounded-lg font-semibold text-lg transition-colors shadow-lg hover:shadow-xl"
              >
                अपना दावा जांचें
                <ArrowRight className="ml-2 h-5 w-5" />
              </a>
              <Link
                href="/hi/muavza-calculator"
                className="inline-flex items-center justify-center bg-white dark:bg-gray-800 hover:bg-gray-50 dark:hover:bg-gray-700 text-gray-900 dark:text-white px-8 py-4 rounded-lg font-semibold text-lg transition-colors border-2 border-gray-200 dark:border-gray-700"
              >
                मुआवजा कैलकुलेटर
              </Link>
            </div>

            <p className="text-sm text-gray-500 dark:text-gray-500 mt-4">
              ✓ कोई अग्रिम लागत नहीं • ✓ सफलता पर 25% शुल्क • ✓ €250-€600 मुआवजा
            </p>
          </div>
        </div>
      </section>

      {/* Compensation Amounts */}
      <section className="py-16 bg-white dark:bg-gray-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-4">
              आप कितना पा सकते हैं?
            </h2>
            <p className="text-lg text-gray-600 dark:text-gray-400">
              दूरी के आधार पर मुआवजा राशि (EU 261/2004)
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {/* Short Distance */}
            <div className="bg-gradient-to-br from-blue-50 to-white dark:from-gray-800 dark:to-gray-900 rounded-xl p-8 border-2 border-blue-100 dark:border-gray-700 hover:border-blue-600 dark:hover:border-blue-400 transition-all hover:shadow-xl">
              <div className="text-center">
                <Euro className="h-12 w-12 text-blue-600 dark:text-blue-400 mx-auto mb-4" />
                <div className="text-5xl font-bold text-blue-600 dark:text-blue-400 mb-2">250 €</div>
                <div className="text-sm text-gray-600 dark:text-gray-400 mb-4">1,500 किमी तक</div>
                <div className="space-y-1 text-sm text-gray-700 dark:text-gray-300">
                  <div>दिल्ली → दुबई</div>
                  <div>मुंबई → बैंकॉक</div>
                  <div>दिल्ली → कराची</div>
                </div>
              </div>
            </div>

            {/* Medium Distance */}
            <div className="bg-gradient-to-br from-blue-50 to-white dark:from-blue-900/30 dark:to-gray-900 rounded-xl p-8 border-2 border-blue-600 dark:border-blue-400 hover:shadow-2xl transition-all relative">
              <div className="absolute -top-4 left-1/2 transform -translate-x-1/2 bg-blue-600 dark:bg-blue-500 text-white px-4 py-1 rounded-full text-sm font-medium">
                सबसे आम
              </div>
              <div className="text-center">
                <Euro className="h-12 w-12 text-blue-600 dark:text-blue-400 mx-auto mb-4" />
                <div className="text-5xl font-bold text-blue-600 dark:text-blue-400 mb-2">400 €</div>
                <div className="text-sm text-gray-600 dark:text-gray-400 mb-4">1,500 – 3,500 किमी</div>
                <div className="space-y-1 text-sm text-gray-700 dark:text-gray-300">
                  <div>दिल्ली → पेरिस</div>
                  <div>मुंबई → लंदन</div>
                  <div>दिल्ली → फ्रैंकफर्ट</div>
                </div>
              </div>
            </div>

            {/* Long Distance */}
            <div className="bg-gradient-to-br from-blue-50 to-white dark:from-gray-800 dark:to-gray-900 rounded-xl p-8 border-2 border-blue-100 dark:border-gray-700 hover:border-blue-600 dark:hover:border-blue-400 transition-all hover:shadow-xl">
              <div className="text-center">
                <Euro className="h-12 w-12 text-blue-600 dark:text-blue-400 mx-auto mb-4" />
                <div className="text-5xl font-bold text-blue-600 dark:text-blue-400 mb-2">600 €</div>
                <div className="text-sm text-gray-600 dark:text-gray-400 mb-4">3,500 किमी से अधिक</div>
                <div className="space-y-1 text-sm text-gray-700 dark:text-gray-300">
                  <div>दिल्ली → न्यूयॉर्क</div>
                  <div>मुंबई → सैन फ्रांसिस्को</div>
                  <div>दिल्ली → टोक्यो</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* When You're Entitled */}
      <section className="py-16 bg-gray-50 dark:bg-gray-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-4">
              आपको कब मुआवजा मिल सकता है?
            </h2>
            <p className="text-lg text-gray-600 dark:text-gray-400">
              EU 261/2004 यात्री अधिकारों के तहत आपके अधिकार
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {/* Delayed Flight */}
            <div className="bg-white dark:bg-gray-900 rounded-xl p-8 shadow-sm">
              <div className="flex items-center mb-4">
                <Clock className="h-8 w-8 text-orange-500 mr-3" />
                <h3 className="text-xl font-semibold text-gray-900 dark:text-white">
                  विलंबित उड़ान
                </h3>
              </div>
              <ul className="space-y-3 text-gray-700 dark:text-gray-300">
                <li className="flex items-start">
                  <CheckCircle2 className="h-5 w-5 text-green-500 mr-2 flex-shrink-0 mt-0.5" />
                  <span>आगमन पर <strong>3+ घंटे</strong> की देरी</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle2 className="h-5 w-5 text-green-500 mr-2 flex-shrink-0 mt-0.5" />
                  <span>EU से प्रस्थान या EU में आगमन (EU एयरलाइन)</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle2 className="h-5 w-5 text-green-500 mr-2 flex-shrink-0 mt-0.5" />
                  <span>एयरलाइन की गलती (तकनीकी समस्या, चालक दल की कमी)</span>
                </li>
              </ul>
              <Link
                href="/hi/der-se-flight"
                className="inline-flex items-center text-blue-600 dark:text-blue-400 hover:underline mt-4 font-medium"
              >
                और जानें
                <ArrowRight className="ml-1 h-4 w-4" />
              </Link>
            </div>

            {/* Cancelled Flight */}
            <div className="bg-white dark:bg-gray-900 rounded-xl p-8 shadow-sm">
              <div className="flex items-center mb-4">
                <XCircle className="h-8 w-8 text-red-500 mr-3" />
                <h3 className="text-xl font-semibold text-gray-900 dark:text-white">
                  रद्द की गई उड़ान
                </h3>
              </div>
              <ul className="space-y-3 text-gray-700 dark:text-gray-300">
                <li className="flex items-start">
                  <CheckCircle2 className="h-5 w-5 text-green-500 mr-2 flex-shrink-0 mt-0.5" />
                  <span>एयरलाइन ने उड़ान रद्द की</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle2 className="h-5 w-5 text-green-500 mr-2 flex-shrink-0 mt-0.5" />
                  <span><strong>14 दिन से कम</strong> पहले सूचित किया गया</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle2 className="h-5 w-5 text-green-500 mr-2 flex-shrink-0 mt-0.5" />
                  <span>मुआवजा <strong>+ टिकट रिफंड</strong> दोनों मिलता है</span>
                </li>
              </ul>
              <Link
                href="/hi/cancel-flight"
                className="inline-flex items-center text-blue-600 dark:text-blue-400 hover:underline mt-4 font-medium"
              >
                और जानें
                <ArrowRight className="ml-1 h-4 w-4" />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* How It Works */}
      <section className="py-16 bg-white dark:bg-gray-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-4">
              यह कैसे काम करता है?
            </h2>
            <p className="text-lg text-gray-600 dark:text-gray-400">
              3 आसान चरणों में अपना मुआवजा प्राप्त करें
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="bg-blue-100 dark:bg-blue-900/30 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl font-bold text-blue-600 dark:text-blue-400">1</span>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-3">
                अपना दावा जांचें
              </h3>
              <p className="text-gray-600 dark:text-gray-400">
                अपनी उड़ान का विवरण दर्ज करें और तुरंत पता लगाएं कि आपको मुआवजे का अधिकार है या नहीं
              </p>
            </div>

            <div className="text-center">
              <div className="bg-blue-100 dark:bg-blue-900/30 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl font-bold text-blue-600 dark:text-blue-400">2</span>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-3">
                हम आपके लिए दावा करते हैं
              </h3>
              <p className="text-gray-600 dark:text-gray-400">
                हमारी टीम एयरलाइन के साथ सभी संचार और कानूनी कार्रवाई संभालती है
              </p>
            </div>

            <div className="text-center">
              <div className="bg-blue-100 dark:bg-blue-900/30 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl font-bold text-blue-600 dark:text-blue-400">3</span>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-3">
                अपना पैसा पाएं
              </h3>
              <p className="text-gray-600 dark:text-gray-400">
                आप €250-€600 मुआवजा प्राप्त करते हैं। सफलता पर ही भुगतान – कोई जोखिम नहीं
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-16 bg-gradient-to-r from-blue-600 to-blue-700 dark:from-blue-700 dark:to-blue-800">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold text-white mb-4">
            अपना पैसा वापस पाने के अपने अधिकार का उपयोग करें
          </h2>
          <p className="text-xl text-blue-100 mb-8">
            हमारी टीम बिना किसी जोखिम के आपके पैसे वापस दिलाएगी। सफलता पर ही भुगतान करें।
          </p>
          <a
            href="https://claimwinger.com"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center bg-white hover:bg-gray-100 text-blue-600 px-8 py-4 rounded-lg font-semibold text-lg transition-colors shadow-xl"
          >
            निःशुल्क दावा जांचें
            <ArrowRight className="ml-2 h-5 w-5" />
          </a>
          <p className="text-blue-100 mt-4 text-sm">
            ✓ कोई जोखिम नहीं • ✓ कोई छिपा शुल्क नहीं • ✓ सफलता पर केवल 25% शुल्क
          </p>
        </div>
      </section>
    </LayoutHi>
  );
}
