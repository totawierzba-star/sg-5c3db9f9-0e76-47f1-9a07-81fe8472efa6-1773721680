import { SEO } from "@/components/SEO";
import { LayoutHi } from "@/components/LayoutHi";
import Link from "next/link";
import { Plane, XCircle, Euro, CheckCircle2, AlertCircle, ArrowRight, Calculator } from "lucide-react";

export default function HindiCancelledFlight() {
  return (
    <LayoutHi>
      <SEO
        title="रद्द की गई उड़ान – €600 + पूर्ण रिफंड | EU 261/2004 अधिकार"
        description="क्या आपकी उड़ान रद्द कर दी गई? EU 261/2004 के तहत मुआवजा + पूर्ण टिकट रिफंड दोनों पाएं।"
        url="https://lotproblem.pl/hi/cancel-flight"
      />

      {/* Hero Section */}
      <section className="bg-gradient-to-br from-red-50 via-white to-red-50 dark:from-gray-900 dark:via-gray-800 dark:to-gray-900 py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <div className="inline-flex items-center space-x-2 bg-red-100 dark:bg-red-900/30 text-red-800 dark:text-red-300 px-4 py-2 rounded-full text-sm font-medium mb-6">
              <XCircle className="h-4 w-4" />
              <span>रद्द की गई उड़ान • EU 261/2004</span>
            </div>
            
            <h1 className="text-4xl md:text-6xl font-bold text-gray-900 dark:text-white mb-6">
              रद्द की गई उड़ान?
              <span className="block text-red-600 dark:text-red-400 mt-2">
                €600 + पूर्ण रिफंड पाएं
              </span>
            </h1>

            <p className="text-xl text-gray-600 dark:text-gray-400 mb-8 max-w-3xl mx-auto">
              यदि एयरलाइन ने आपकी यूरोपीय संघ की उड़ान रद्द की, तो आपको मुआवजा + पूर्ण टिकट रिफंड दोनों का अधिकार है।
              अपना दावा आज ही जांचें।
            </p>

            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <a
                href="https://claimwinger.com/cancelled-flight"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center bg-red-600 hover:bg-red-700 text-white px-8 py-4 rounded-lg font-semibold text-lg transition-colors shadow-lg hover:shadow-xl"
              >
                रद्द उड़ान दावा करें
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
              ✓ कोई अग्रिम लागत नहीं • ✓ सफलता पर 25% शुल्क • ✓ मुआवजा + रिफंड दोनों
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
              रद्द की गई उड़ान के लिए EU 261/2004 अधिकार
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
                  <span>एयरलाइन ने उड़ान रद्द की</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle2 className="h-5 w-5 text-green-500 mr-2 flex-shrink-0 mt-0.5" />
                  <span><strong>14 दिन से कम</strong> पहले सूचित किया गया</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle2 className="h-5 w-5 text-green-500 mr-2 flex-shrink-0 mt-0.5" />
                  <span>EU से प्रस्थान या EU में आगमन (EU एयरलाइन)</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle2 className="h-5 w-5 text-green-500 mr-2 flex-shrink-0 mt-0.5" />
                  <span>पिछले <strong>3 वर्षों</strong> में उड़ान</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle2 className="h-5 w-5 text-green-500 mr-2 flex-shrink-0 mt-0.5" />
                  <span>मुआवजा <strong>+ पूर्ण टिकट रिफंड</strong> दोनों</span>
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
                  <span>14+ दिन पहले सूचित किया गया</span>
                </li>
                <li className="flex items-start">
                  <XCircle className="h-5 w-5 text-red-500 mr-2 flex-shrink-0 mt-0.5" />
                  <span>असाधारण परिस्थितियां (खराब मौसम, सुरक्षा)</span>
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

      {/* Double Compensation */}
      <section className="py-16 bg-gradient-to-r from-red-50 to-orange-50 dark:from-gray-800 dark:to-gray-900">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-white dark:bg-gray-900 rounded-xl p-8 shadow-lg border-2 border-red-500">
            <div className="flex items-start mb-4">
              <AlertCircle className="h-8 w-8 text-red-600 dark:text-red-400 mr-4 flex-shrink-0" />
              <div>
                <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-3">
                  🎁 दोहरा मुआवजा: मुआवजा + रिफंड
                </h3>
                <p className="text-gray-700 dark:text-gray-300 mb-4">
                  रद्द की गई उड़ान के साथ, आपको <strong>दो अलग चीजें</strong> मिलती हैं:
                </p>
                <div className="space-y-4">
                  <div className="bg-green-50 dark:bg-green-900/20 rounded-lg p-4">
                    <div className="flex items-center mb-2">
                      <Euro className="h-6 w-6 text-green-600 dark:text-green-400 mr-2" />
                      <span className="font-semibold text-gray-900 dark:text-white">
                        1. मुआवजा (€250-€600)
                      </span>
                    </div>
                    <p className="text-sm text-gray-700 dark:text-gray-300">
                      असुविधा के लिए - दूरी के आधार पर राशि
                    </p>
                  </div>
                  <div className="bg-blue-50 dark:bg-blue-900/20 rounded-lg p-4">
                    <div className="flex items-center mb-2">
                      <CheckCircle2 className="h-6 w-6 text-blue-600 dark:text-blue-400 mr-2" />
                      <span className="font-semibold text-gray-900 dark:text-white">
                        2. पूर्ण टिकट रिफंड
                      </span>
                    </div>
                    <p className="text-sm text-gray-700 dark:text-gray-300">
                      आपके द्वारा भुगतान की गई पूरी राशि वापस
                    </p>
                  </div>
                </div>
                <div className="mt-4 pt-4 border-t border-gray-200 dark:border-gray-700">
                  <p className="text-lg font-semibold text-gray-900 dark:text-white">
                    उदाहरण: €500 का टिकट + €400 मुआवजा = <span className="text-green-600 dark:text-green-400">€900 कुल</span>
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
              आप कितना मुआवजा पा सकते हैं?
            </h2>
            <p className="text-lg text-gray-600 dark:text-gray-400">
              दूरी के आधार पर मुआवजा राशि (+ पूर्ण रिफंड)
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {/* 250 EUR */}
            <div className="bg-gradient-to-br from-blue-50 to-white dark:from-gray-800 dark:to-gray-900 rounded-xl p-8 border-2 border-blue-100 dark:border-gray-700 hover:border-red-600 dark:hover:border-red-400 transition-all hover:shadow-xl">
              <div className="text-center">
                <Euro className="h-12 w-12 text-red-600 dark:text-red-400 mx-auto mb-4" />
                <div className="text-5xl font-bold text-red-600 dark:text-red-400 mb-2">250 €</div>
                <div className="text-sm text-gray-600 dark:text-gray-400 mb-4">1,500 किमी तक</div>
                <div className="space-y-1 text-sm text-gray-700 dark:text-gray-300">
                  <div>दिल्ली → दुबई</div>
                  <div>मुंबई → बैंकॉक</div>
                  <div>दिल्ली → कराची</div>
                </div>
              </div>
            </div>

            {/* 400 EUR */}
            <div className="bg-gradient-to-br from-red-50 to-white dark:from-red-900/30 dark:to-gray-900 rounded-xl p-8 border-2 border-red-600 dark:border-red-400 hover:shadow-2xl transition-all relative">
              <div className="absolute -top-4 left-1/2 transform -translate-x-1/2 bg-red-600 dark:bg-red-500 text-white px-4 py-1 rounded-full text-sm font-medium">
                सबसे आम
              </div>
              <div className="text-center">
                <Euro className="h-12 w-12 text-red-600 dark:text-red-400 mx-auto mb-4" />
                <div className="text-5xl font-bold text-red-600 dark:text-red-400 mb-2">400 €</div>
                <div className="text-sm text-gray-600 dark:text-gray-400 mb-4">1,500 – 3,500 किमी</div>
                <div className="space-y-1 text-sm text-gray-700 dark:text-gray-300">
                  <div>दिल्ली → पेरिस</div>
                  <div>मुंबई → लंदन</div>
                  <div>दिल्ली → फ्रैंकफर्ट</div>
                </div>
              </div>
            </div>

            {/* 600 EUR */}
            <div className="bg-gradient-to-br from-blue-50 to-white dark:from-gray-800 dark:to-gray-900 rounded-xl p-8 border-2 border-blue-100 dark:border-gray-700 hover:border-red-600 dark:hover:border-red-400 transition-all hover:shadow-xl">
              <div className="text-center">
                <Euro className="h-12 w-12 text-red-600 dark:text-red-400 mx-auto mb-4" />
                <div className="text-5xl font-bold text-red-600 dark:text-red-400 mb-2">600 €</div>
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

      {/* Your Options */}
      <section className="py-16 bg-gray-50 dark:bg-gray-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-4">
              आपके विकल्प
            </h2>
            <p className="text-lg text-gray-600 dark:text-gray-400">
              रद्द की गई उड़ान के बाद आप क्या चुन सकते हैं
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {/* Alternative Flight */}
            <div className="bg-white dark:bg-gray-900 rounded-xl p-8 border-2 border-gray-200 dark:border-gray-700">
              <div className="flex items-center mb-4">
                <Plane className="h-8 w-8 text-blue-600 dark:text-blue-400 mr-3" />
                <h3 className="text-xl font-semibold text-gray-900 dark:text-white">
                  विकल्प 1: वैकल्पिक उड़ान
                </h3>
              </div>
              <ul className="space-y-3 text-gray-700 dark:text-gray-300 mb-4">
                <li className="flex items-start">
                  <CheckCircle2 className="h-5 w-5 text-green-500 mr-2 flex-shrink-0 mt-0.5" />
                  <span>एयरलाइन को मुफ्त में वैकल्पिक उड़ान प्रदान करनी होगी</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle2 className="h-5 w-5 text-green-500 mr-2 flex-shrink-0 mt-0.5" />
                  <span>आपको अभी भी €250-€600 मुआवजा मिलेगा</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle2 className="h-5 w-5 text-green-500 mr-2 flex-shrink-0 mt-0.5" />
                  <span>कोई अतिरिक्त लागत नहीं</span>
                </li>
              </ul>
              <p className="text-sm text-gray-600 dark:text-gray-400">
                सबसे अच्छा यदि आपको अभी भी गंतव्य तक पहुंचने की आवश्यकता है
              </p>
            </div>

            {/* Full Refund */}
            <div className="bg-white dark:bg-gray-900 rounded-xl p-8 border-2 border-blue-600 dark:border-blue-400">
              <div className="flex items-center mb-4">
                <Euro className="h-8 w-8 text-blue-600 dark:text-blue-400 mr-3" />
                <h3 className="text-xl font-semibold text-gray-900 dark:text-white">
                  विकल्प 2: पूर्ण रिफंड
                </h3>
              </div>
              <ul className="space-y-3 text-gray-700 dark:text-gray-300 mb-4">
                <li className="flex items-start">
                  <CheckCircle2 className="h-5 w-5 text-green-500 mr-2 flex-shrink-0 mt-0.5" />
                  <span>टिकट मूल्य का 100% रिफंड</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle2 className="h-5 w-5 text-green-500 mr-2 flex-shrink-0 mt-0.5" />
                  <span>आपको अभी भी €250-€600 मुआवजा मिलेगा</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle2 className="h-5 w-5 text-green-500 mr-2 flex-shrink-0 mt-0.5" />
                  <span>7-14 दिनों में भुगतान</span>
                </li>
              </ul>
              <p className="text-sm text-gray-600 dark:text-gray-400">
                सबसे अच्छा यदि आप अब यात्रा नहीं करना चाहते
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* How to Claim */}
      <section className="py-16 bg-white dark:bg-gray-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-4">
              दावा कैसे करें?
            </h2>
            <p className="text-lg text-gray-600 dark:text-gray-400">
              3 आसान चरणों में अपना मुआवजा + रिफंड प्राप्त करें
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="bg-red-100 dark:bg-red-900/30 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl font-bold text-red-600 dark:text-red-400">1</span>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-3">
                अपना दावा जांचें
              </h3>
              <p className="text-gray-600 dark:text-gray-400">
                अपनी उड़ान का विवरण दर्ज करें और तुरंत पता लगाएं कि आपको मुआवजे का अधिकार है या नहीं
              </p>
            </div>

            <div className="text-center">
              <div className="bg-red-100 dark:bg-red-900/30 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl font-bold text-red-600 dark:text-red-400">2</span>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-3">
                हम आपके लिए दावा करते हैं
              </h3>
              <p className="text-gray-600 dark:text-gray-400">
                हमारी टीम एयरलाइन के साथ सभी संचार और कानूनी कार्रवाई संभालती है
              </p>
            </div>

            <div className="text-center">
              <div className="bg-red-100 dark:bg-red-900/30 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl font-bold text-red-600 dark:text-red-400">3</span>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-3">
                अपना पैसा पाएं
              </h3>
              <p className="text-gray-600 dark:text-gray-400">
                आप मुआवजा + रिफंड प्राप्त करते हैं। सफलता पर ही भुगतान – कोई जोखिम नहीं
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-16 bg-gray-50 dark:bg-gray-800">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-8 text-center">
            अक्सर पूछे जाने वाले प्रश्न
          </h2>
          
          <div className="space-y-6">
            <div className="bg-white dark:bg-gray-900 rounded-lg p-6">
              <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-3">
                क्या एयरलाइन मुझे वाउचर देने की कोशिश कर सकती है?
              </h3>
              <p className="text-gray-700 dark:text-gray-300">
                हां, लेकिन आपको स्वीकार करने की आवश्यकता नहीं है। EU 261/2004 के तहत आपको <strong>नकद मुआवजा + नकद रिफंड</strong> का अधिकार है। वाउचर केवल तभी स्वीकार करें जब आप चाहें। एयरलाइन आपको वाउचर स्वीकार करने के लिए दबाव नहीं डाल सकती।
              </p>
            </div>

            <div className="bg-white dark:bg-gray-900 rounded-lg p-6">
              <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-3">
                क्या एयरलाइन को वैकल्पिक उड़ान देनी होगी?
              </h3>
              <p className="text-gray-700 dark:text-gray-300">
                हां, यदि आप चाहते हैं। यदि आप अभी भी यात्रा करना चाहते हैं, तो एयरलाइन को आपको <strong>मुफ्त में</strong> अगली उपलब्ध उड़ान पर बुक करना होगा। यह अन्य एयरलाइन के साथ भी हो सकती है। आपको अभी भी €250-€600 मुआवजा मिलेगा।
              </p>
            </div>

            <div className="bg-white dark:bg-gray-900 rounded-lg p-6">
              <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-3">
                मैं कैसे सत्यापित करूं कि रद्दीकरण का कारण वैध है?
              </h3>
              <p className="text-gray-700 dark:text-gray-300">
                एयरलाइनें अक्सर "तकनीकी समस्याएं" या "परिचालन कारण" बताती हैं। <strong>ये असाधारण परिस्थितियां नहीं हैं</strong> – वे मुआवजे के योग्य हैं। केवल वास्तविक असाधारण कारण: गंभीर मौसम, सुरक्षा खतरे, हवाई यातायात नियंत्रण हड़ताल। हम आपके लिए सत्यापित करते हैं।
              </p>
            </div>

            <div className="bg-white dark:bg-gray-900 rounded-lg p-6">
              <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-3">
                क्या अतिरिक्त लागत (होटल, भोजन) को कवर किया जाता है?
              </h3>
              <p className="text-gray-700 dark:text-gray-300">
                हां! यदि रद्दीकरण के कारण आपको रात भर प्रतीक्षा करनी पड़ती है, तो एयरलाइन को <strong>होटल, भोजन और परिवहन</strong> प्रदान करना होगा। रसीदें रखें और प्रतिपूर्ति का दावा करें। यह €250-€600 मुआवजे के अतिरिक्त है।
              </p>
            </div>

            <div className="bg-white dark:bg-gray-900 rounded-lg p-6">
              <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-3">
                कनेक्टिंग उड़ानों के बारे में क्या?
              </h3>
              <p className="text-gray-700 dark:text-gray-300">
                यदि यह <strong>एक बुकिंग</strong> थी और पहली उड़ान रद्द होने के कारण आप दूसरी उड़ान से चूक गए, तो आप पूरी यात्रा के लिए मुआवजे के पात्र हैं। अलग टिकट? अलग दावे। हमेशा एक ही बुकिंग संदर्भ संख्या के साथ उड़ानें बुक करें।
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-gradient-to-r from-red-600 to-red-700 dark:from-red-700 dark:to-red-800">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold text-white mb-4">
            अपना रद्द उड़ान दावा अभी शुरू करें
          </h2>
          <p className="text-xl text-red-100 mb-8">
            3 मिनट में पता करें कि आप मुआवजा + रिफंड के पात्र हैं या नहीं। कोई जोखिम नहीं, सफलता पर भुगतान करें।
          </p>
          <a
            href="https://claimwinger.com/cancelled-flight"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center bg-white hover:bg-gray-100 text-red-600 px-8 py-4 rounded-lg font-semibold text-lg transition-colors shadow-xl"
          >
            निःशुल्क दावा जांचें
            <ArrowRight className="ml-2 h-5 w-5" />
          </a>
          <p className="text-red-100 mt-4 text-sm">
            ✓ कोई अग्रिम लागत नहीं • ✓ कोई छिपा शुल्क नहीं • ✓ सफलता पर 25% प्रोविजन
          </p>
        </div>
      </section>

      {/* Related Pages */}
      <section className="py-12 bg-white dark:bg-gray-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-6 text-center">
            संबंधित जानकारी
          </h3>
          <div className="grid md:grid-cols-3 gap-6">
            <Link
              href="/hi/der-se-flight"
              className="bg-gray-50 dark:bg-gray-800 rounded-lg p-6 border border-gray-200 dark:border-gray-700 hover:border-red-600 dark:hover:border-red-400 transition-all hover:shadow-lg"
            >
              <h4 className="font-semibold text-gray-900 dark:text-white mb-2">
                विलंबित उड़ान
              </h4>
              <p className="text-sm text-gray-600 dark:text-gray-400">
                3+ घंटे विलंब के लिए मुआवजा
              </p>
            </Link>
            <Link
              href="/hi/muavza-calculator"
              className="bg-gray-50 dark:bg-gray-800 rounded-lg p-6 border border-gray-200 dark:border-gray-700 hover:border-red-600 dark:hover:border-red-400 transition-all hover:shadow-lg"
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
              className="bg-gray-50 dark:bg-gray-800 rounded-lg p-6 border border-gray-200 dark:border-gray-700 hover:border-red-600 dark:hover:border-red-400 transition-all hover:shadow-lg"
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
