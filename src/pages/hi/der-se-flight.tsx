import { SEO } from "@/components/SEO";
import { LayoutHi } from "@/components/LayoutHi";
import Link from "next/link";
import { Plane, Clock, Euro, CheckCircle2, XCircle, AlertCircle, ArrowRight, Calculator } from "lucide-react";

export default function HindiDelayedFlight() {
  return (
    <LayoutHi>
      <SEO
        title="विलंबित उड़ान – €600 तक का मुआवजा | EU 261/2004 अधिकार"
        description="क्या आपकी उड़ान 3+ घंटे विलंबित हुई? EU 261/2004 के तहत €600 तक का मुआवजा पाने के अपने अधिकार के बारे में जानें।"
        url="https://problemlot.com/hi/der-se-flight"
      />

      {/* Hero Section */}
      <section className="bg-gradient-to-br from-orange-50 via-white to-orange-50 dark:from-gray-900 dark:via-gray-800 dark:to-gray-900 py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <div className="inline-flex items-center space-x-2 bg-orange-100 dark:bg-orange-900/30 text-orange-800 dark:text-orange-300 px-4 py-2 rounded-full text-sm font-medium mb-6">
              <Clock className="h-4 w-4" />
              <span>विलंबित उड़ान • EU 261/2004</span>
            </div>
            
            <h1 className="text-4xl md:text-6xl font-bold text-gray-900 dark:text-white mb-6">
              विलंबित उड़ान?
              <span className="block text-orange-600 dark:text-orange-400 mt-2">
                €600 तक का मुआवजा पाएं
              </span>
            </h1>

            <p className="text-xl text-gray-600 dark:text-gray-400 mb-8 max-w-3xl mx-auto">
              यदि आपकी यूरोपीय संघ की उड़ान गंतव्य पर 3+ घंटे विलंबित होकर पहुंची, तो आपको मुआवजे का अधिकार हो सकता है।
              अपना दावा आज ही जांचें – कोई जोखिम नहीं।
            </p>

            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <a
                href="https://claimwinger.com/delayed-flight"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center bg-orange-600 hover:bg-orange-700 text-white px-8 py-4 rounded-lg font-semibold text-lg transition-colors shadow-lg hover:shadow-xl"
              >
                विलंबित उड़ान दावा करें
                <ArrowRight className="ml-2 h-5 w-5" />
              </a>
              <Link
                href="/hi/muavza-calculator"
                className="inline-flex items-center justify-center bg-white dark:bg-gray-800 hover:bg-gray-50 dark:hover:bg-gray-700 text-gray-900 dark:text-white px-8 py-4 rounded-lg font-semibold text-lg transition-colors border-2 border-gray-200 dark:border-gray-700"
              >
                <Calculator className="mr-2 h-5 w-5" />
                मुआवजा कैलकुलेटर
              </Link>
            </div>

            <p className="text-sm text-gray-500 dark:text-gray-500 mt-4">
              ✓ कोई अग्रिम लागत नहीं • ✓ सफलता पर 25% शुल्क • ✓ €250-€600 मुआवजा
            </p>
          </div>
        </div>
      </section>

      {/* When You're Entitled */}
      <section className="py-16 bg-white dark:bg-gray-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-4">
              आपको कब मुआवजा मिलता है?
            </h2>
            <p className="text-lg text-gray-600 dark:text-gray-400">
              EU 261/2004 के तहत आपके अधिकारों को समझें
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8 mb-12">
            {/* YES - Entitled */}
            <div className="bg-gradient-to-br from-green-50 to-white dark:from-green-900/20 dark:to-gray-900 rounded-xl p-8 border-2 border-green-500 dark:border-green-600">
              <div className="flex items-center mb-4">
                <CheckCircle2 className="h-8 w-8 text-green-600 dark:text-green-400 mr-3" />
                <h3 className="text-xl font-semibold text-gray-900 dark:text-white">
                  ✅ आपको मुआवजा मिलेगा यदि:
                </h3>
              </div>
              <ul className="space-y-3 text-gray-700 dark:text-gray-300">
                <li className="flex items-start">
                  <CheckCircle2 className="h-5 w-5 text-green-500 mr-2 flex-shrink-0 mt-0.5" />
                  <span>गंतव्य पर <strong>3+ घंटे</strong> विलंबित आगमन</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle2 className="h-5 w-5 text-green-500 mr-2 flex-shrink-0 mt-0.5" />
                  <span>EU से प्रस्थान या EU में आगमन (EU एयरलाइन)</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle2 className="h-5 w-5 text-green-500 mr-2 flex-shrink-0 mt-0.5" />
                  <span>एयरलाइन की गलती (तकनीकी, चालक दल की कमी)</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle2 className="h-5 w-5 text-green-500 mr-2 flex-shrink-0 mt-0.5" />
                  <span>पिछले <strong>3 वर्षों</strong> में उड़ान</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle2 className="h-5 w-5 text-green-500 mr-2 flex-shrink-0 mt-0.5" />
                  <span>कम किराया/छूट टिकट भी मान्य</span>
                </li>
              </ul>
            </div>

            {/* NO - Not Entitled */}
            <div className="bg-gradient-to-br from-red-50 to-white dark:from-red-900/20 dark:to-gray-900 rounded-xl p-8 border-2 border-red-500 dark:border-red-600">
              <div className="flex items-center mb-4">
                <XCircle className="h-8 w-8 text-red-600 dark:text-red-400 mr-3" />
                <h3 className="text-xl font-semibold text-gray-900 dark:text-white">
                  ❌ मुआवजा नहीं मिलेगा यदि:
                </h3>
              </div>
              <ul className="space-y-3 text-gray-700 dark:text-gray-300">
                <li className="flex items-start">
                  <XCircle className="h-5 w-5 text-red-500 mr-2 flex-shrink-0 mt-0.5" />
                  <span>3 घंटे से कम विलंब</span>
                </li>
                <li className="flex items-start">
                  <XCircle className="h-5 w-5 text-red-500 mr-2 flex-shrink-0 mt-0.5" />
                  <span>असाधारण परिस्थितियां (खराब मौसम, सुरक्षा खतरा)</span>
                </li>
                <li className="flex items-start">
                  <XCircle className="h-5 w-5 text-red-500 mr-2 flex-shrink-0 mt-0.5" />
                  <span>आप समय पर चेक-इन नहीं हुए</span>
                </li>
                <li className="flex items-start">
                  <XCircle className="h-5 w-5 text-red-500 mr-2 flex-shrink-0 mt-0.5" />
                  <span>3 वर्ष से पुरानी उड़ान</span>
                </li>
                <li className="flex items-start">
                  <XCircle className="h-5 w-5 text-red-500 mr-2 flex-shrink-0 mt-0.5" />
                  <span>EU के बाहर की उड़ान (गैर-EU एयरलाइन)</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Critical Rule: Arrival Time */}
      <section className="py-16 bg-gradient-to-r from-orange-50 to-yellow-50 dark:from-gray-800 dark:to-gray-900">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-white dark:bg-gray-900 rounded-xl p-8 shadow-lg border-2 border-orange-500">
            <div className="flex items-start mb-4">
              <AlertCircle className="h-8 w-8 text-orange-600 dark:text-orange-400 mr-4 flex-shrink-0" />
              <div>
                <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-3">
                  ⚠️ महत्वपूर्ण नियम: आगमन समय गिना जाता है
                </h3>
                <p className="text-gray-700 dark:text-gray-300 mb-4">
                  यह प्रस्थान विलंब के बारे में नहीं है – यह <strong>गंतव्य पर आगमन विलंब</strong> के बारे में है।
                </p>
                <div className="bg-orange-50 dark:bg-orange-900/20 rounded-lg p-4 space-y-2">
                  <p className="text-gray-800 dark:text-gray-200">
                    <strong>उदाहरण:</strong> आपकी उड़ान 4 घंटे विलंबित हो गई, लेकिन पायलट ने समय बचाया और आप 2.5 घंटे विलंब से पहुंचे।
                  </p>
                  <p className="text-red-600 dark:text-red-400 font-semibold">
                    → मुआवजा नहीं मिलेगा (3 घंटे से कम आगमन विलंब)
                  </p>
                </div>
                <div className="bg-green-50 dark:bg-green-900/20 rounded-lg p-4 space-y-2 mt-4">
                  <p className="text-gray-800 dark:text-gray-200">
                    <strong>उदाहरण:</strong> 2 घंटे विलंब से प्रस्थान, लेकिन और समस्याओं के कारण 3.5 घंटे विलंब से पहुंचे।
                  </p>
                  <p className="text-green-600 dark:text-green-400 font-semibold">
                    → €250-€600 मुआवजा मिलेगा! ✓
                  </p>
                </div>
              </div>
            </div>
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
              दूरी के आधार पर मुआवजा राशि
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {/* 250 EUR */}
            <div className="bg-gradient-to-br from-blue-50 to-white dark:from-gray-800 dark:to-gray-900 rounded-xl p-8 border-2 border-blue-100 dark:border-gray-700 hover:border-orange-600 dark:hover:border-orange-400 transition-all hover:shadow-xl">
              <div className="text-center">
                <Euro className="h-12 w-12 text-orange-600 dark:text-orange-400 mx-auto mb-4" />
                <div className="text-5xl font-bold text-orange-600 dark:text-orange-400 mb-2">250 €</div>
                <div className="text-sm text-gray-600 dark:text-gray-400 mb-4">1,500 किमी तक</div>
                <div className="space-y-1 text-sm text-gray-700 dark:text-gray-300">
                  <div>दिल्ली → दुबई</div>
                  <div>मुंबई → बैंकॉक</div>
                  <div>दिल्ली → कराची</div>
                </div>
              </div>
            </div>

            {/* 400 EUR */}
            <div className="bg-gradient-to-br from-orange-50 to-white dark:from-orange-900/30 dark:to-gray-900 rounded-xl p-8 border-2 border-orange-600 dark:border-orange-400 hover:shadow-2xl transition-all relative">
              <div className="absolute -top-4 left-1/2 transform -translate-x-1/2 bg-orange-600 dark:bg-orange-500 text-white px-4 py-1 rounded-full text-sm font-medium">
                सबसे आम
              </div>
              <div className="text-center">
                <Euro className="h-12 w-12 text-orange-600 dark:text-orange-400 mx-auto mb-4" />
                <div className="text-5xl font-bold text-orange-600 dark:text-orange-400 mb-2">400 €</div>
                <div className="text-sm text-gray-600 dark:text-gray-400 mb-4">1,500 – 3,500 किमी</div>
                <div className="space-y-1 text-sm text-gray-700 dark:text-gray-300">
                  <div>दिल्ली → पेरिस</div>
                  <div>मुंबई → लंदन</div>
                  <div>दिल्ली → फ्रैंकफर्ट</div>
                </div>
              </div>
            </div>

            {/* 600 EUR */}
            <div className="bg-gradient-to-br from-blue-50 to-white dark:from-gray-800 dark:to-gray-900 rounded-xl p-8 border-2 border-blue-100 dark:border-gray-700 hover:border-orange-600 dark:hover:border-orange-400 transition-all hover:shadow-xl">
              <div className="text-center">
                <Euro className="h-12 w-12 text-orange-600 dark:text-orange-400 mx-auto mb-4" />
                <div className="text-5xl font-bold text-orange-600 dark:text-orange-400 mb-2">600 €</div>
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

      {/* How to Claim */}
      <section className="py-16 bg-gray-50 dark:bg-gray-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-4">
              दावा कैसे करें?
            </h2>
            <p className="text-lg text-gray-600 dark:text-gray-400">
              3 आसान चरणों में अपना मुआवजा प्राप्त करें
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-white dark:bg-gray-900 rounded-xl p-8 text-center">
              <div className="bg-orange-100 dark:bg-orange-900/30 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl font-bold text-orange-600 dark:text-orange-400">1</span>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-3">
                अपना दावा जांचें
              </h3>
              <p className="text-gray-600 dark:text-gray-400">
                अपनी उड़ान का विवरण दर्ज करें और तुरंत पता लगाएं कि आपको मुआवजे का अधिकार है या नहीं
              </p>
            </div>

            <div className="bg-white dark:bg-gray-900 rounded-xl p-8 text-center">
              <div className="bg-orange-100 dark:bg-orange-900/30 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl font-bold text-orange-600 dark:text-orange-400">2</span>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-3">
                हम आपके लिए दावा करते हैं
              </h3>
              <p className="text-gray-600 dark:text-gray-400">
                हमारी टीम एयरलाइन के साथ सभी संचार और कानूनी कार्रवाई संभालती है
              </p>
            </div>

            <div className="bg-white dark:bg-gray-900 rounded-xl p-8 text-center">
              <div className="bg-orange-100 dark:bg-orange-900/30 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl font-bold text-orange-600 dark:text-orange-400">3</span>
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

      {/* FAQ Section */}
      <section className="py-16 bg-white dark:bg-gray-900">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-8 text-center">
            अक्सर पूछे जाने वाले प्रश्न
          </h2>
          
          <div className="space-y-6">
            <div className="bg-gray-50 dark:bg-gray-800 rounded-lg p-6">
              <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-3">
                प्रस्थान विलंब और आगमन विलंब में क्या अंतर है?
              </h3>
              <p className="text-gray-700 dark:text-gray-300">
                EU 261/2004 केवल <strong>गंतव्य पर आगमन विलंब</strong> पर विचार करता है। भले ही आपकी उड़ान 5 घंटे विलंब से प्रस्थान करे, यदि पायलट समय बचाता है और आप 2.5 घंटे विलंब से पहुंचते हैं, तो मुआवजा नहीं मिलेगा। 3+ घंटे का आगमन विलंब आवश्यक है।
              </p>
            </div>

            <div className="bg-gray-50 dark:bg-gray-800 rounded-lg p-6">
              <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-3">
                क्या मुझे पहले एयरलाइन से संपर्क करना होगा?
              </h3>
              <p className="text-gray-700 dark:text-gray-300">
                नहीं। आप सीधे <a href="https://claimwinger.com/delayed-flight" target="_blank" rel="noopener noreferrer" className="text-orange-600 dark:text-orange-400 hover:underline font-medium">हमारे माध्यम से दावा</a> कर सकते हैं। हम एयरलाइन के साथ सभी संचार संभालते हैं, आवश्यक होने पर कानूनी कार्रवाई सहित। आपको बस हमें अपनी उड़ान का विवरण देना है।
              </p>
            </div>

            <div className="bg-gray-50 dark:bg-gray-800 rounded-lg p-6">
              <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-3">
                क्या कम किराया/छूट टिकट भी मान्य हैं?
              </h3>
              <p className="text-gray-700 dark:text-gray-300">
                हां! आपके टिकट की कीमत कोई मायने नहीं रखती। €50 का बजट टिकट या €500 का बिजनेस क्लास – मुआवजा राशि केवल दूरी पर निर्भर करती है। यहां तक कि मुफ्त माइल्स रिडेम्पशन टिकट भी योग्य हो सकते हैं।
              </p>
            </div>

            <div className="bg-gray-50 dark:bg-gray-800 rounded-lg p-6">
              <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-3">
                दावा संसाधित होने में कितना समय लगता है?
              </h3>
              <p className="text-gray-700 dark:text-gray-300">
                आमतौर पर 8-12 सप्ताह। अधिकांश एयरलाइन्स स्वेच्छा से भुगतान करती हैं, लेकिन कुछ मामलों में कानूनी प्रक्रिया की आवश्यकता हो सकती है (3-6 महीने)। हमारे पास 98% सफलता दर है और हम आपके मुआवजे के लिए लड़ते रहते हैं।
              </p>
            </div>

            <div className="bg-gray-50 dark:bg-gray-800 rounded-lg p-6">
              <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-3">
                "असाधारण परिस्थितियां" का क्या मतलब है?
              </h3>
              <p className="text-gray-700 dark:text-gray-300">
                ऐसी स्थितियां जो एयरलाइन के नियंत्रण से बाहर हैं: गंभीर मौसम, सुरक्षा खतरे, राजनीतिक अस्थिरता, हड़ताल (एयरलाइन कर्मचारियों द्वारा नहीं)। <strong>तकनीकी समस्याएं, चालक दल की कमी, या ओवरबुकिंग असाधारण परिस्थितियां नहीं हैं</strong> – ये मुआवजे के योग्य हैं।
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-gradient-to-r from-orange-600 to-orange-700 dark:from-orange-700 dark:to-orange-800">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold text-white mb-4">
            अपना विलंबित उड़ान दावा अभी शुरू करें
          </h2>
          <p className="text-xl text-orange-100 mb-8">
            3 मिनट में पता करें कि आप €250-€600 मुआवजे के पात्र हैं या नहीं। कोई जोखिम नहीं, सफलता पर भुगतान करें।
          </p>
          <a
            href="https://claimwinger.com/delayed-flight"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center bg-white hover:bg-gray-100 text-orange-600 px-8 py-4 rounded-lg font-semibold text-lg transition-colors shadow-xl"
          >
            निःशुल्क दावा जांचें
            <ArrowRight className="ml-2 h-5 w-5" />
          </a>
          <p className="text-orange-100 mt-4 text-sm">
            ✓ कोई अग्रिम लागत नहीं • ✓ कोई छिपा शुल्क नहीं • ✓ सफलता पर 25% प्रोविजन
          </p>
        </div>
      </section>

      {/* Related Pages */}
      <section className="py-12 bg-gray-50 dark:bg-gray-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-6 text-center">
            संबंधित जानकारी
          </h3>
          <div className="grid md:grid-cols-3 gap-6">
            <Link
              href="/hi/cancel-flight"
              className="bg-white dark:bg-gray-900 rounded-lg p-6 border border-gray-200 dark:border-gray-700 hover:border-orange-600 dark:hover:border-orange-400 transition-all hover:shadow-lg"
            >
              <h4 className="font-semibold text-gray-900 dark:text-white mb-2">
                रद्द की गई उड़ान
              </h4>
              <p className="text-sm text-gray-600 dark:text-gray-400">
                रद्द की गई उड़ान के लिए मुआवजा + पूर्ण रिफंड
              </p>
            </Link>
            <Link
              href="/hi/muavza-calculator"
              className="bg-white dark:bg-gray-900 rounded-lg p-6 border border-gray-200 dark:border-gray-700 hover:border-orange-600 dark:hover:border-orange-400 transition-all hover:shadow-lg"
            >
              <h4 className="font-semibold text-gray-900 dark:text-white mb-2">
                मुआवजा कैलकुलेटर
              </h4>
              <p className="text-sm text-gray-600 dark:text-gray-400">
                अपनी दूरी के आधार पर राशि की गणना करें
              </p>
            </Link>
            <Link
              href="/hi/blog"
              className="bg-white dark:bg-gray-900 rounded-lg p-6 border border-gray-200 dark:border-gray-700 hover:border-orange-600 dark:hover:border-orange-400 transition-all hover:shadow-lg"
            >
              <h4 className="font-semibold text-gray-900 dark:text-white mb-2">
                Blog और गाइड
              </h4>
              <p className="text-sm text-gray-600 dark:text-gray-400">
                EU 261/2004 और हवाई अड्डा गाइड
              </p>
            </Link>
          </div>
        </div>
      </section>
    </LayoutHi>
  );
}
