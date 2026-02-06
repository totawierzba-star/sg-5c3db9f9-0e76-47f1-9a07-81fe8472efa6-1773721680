import { SEO } from "@/components/SEO";
import { LayoutHi } from "@/components/LayoutHi";
import Link from "next/link";
import { Calculator, Euro, Plane, CheckCircle2, ArrowRight, MapPin } from "lucide-react";

export default function HindiCompensationCalculator() {
  return (
    <LayoutHi>
      <SEO
        title="मुआवजा कैलकुलेटर – कितना पैसा मिलेगा? | EU 261/2004"
        description="अपनी विलंबित या रद्द की गई उड़ान के लिए €250-€600 मुआवजा की गणना करें। दूरी के आधार पर तुरंत पता लगाएं।"
        url="https://lotproblem.pl/hi/muavza-calculator"
      />

      {/* Hero Section */}
      <section className="bg-gradient-to-br from-green-50 via-white to-green-50 dark:from-gray-900 dark:via-gray-800 dark:to-gray-900 py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <div className="inline-flex items-center space-x-2 bg-green-100 dark:bg-green-900/30 text-green-800 dark:text-green-300 px-4 py-2 rounded-full text-sm font-medium mb-6">
              <Calculator className="h-4 w-4" />
              <span>मुआवजा कैलकुलेटर • EU 261/2004</span>
            </div>
            
            <h1 className="text-4xl md:text-6xl font-bold text-gray-900 dark:text-white mb-6">
              आप कितना मुआवजा
              <span className="block text-green-600 dark:text-green-400 mt-2">
                पा सकते हैं?
              </span>
            </h1>

            <p className="text-xl text-gray-600 dark:text-gray-400 mb-8 max-w-3xl mx-auto">
              अपनी उड़ान की दूरी के आधार पर €250-€600 मुआवजा की गणना करें। 
              EU 261/2004 के तहत आपके अधिकार जानें।
            </p>

            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <a
                href="https://claimwinger.com"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center bg-green-600 hover:bg-green-700 text-white px-8 py-4 rounded-lg font-semibold text-lg transition-colors shadow-lg hover:shadow-xl"
              >
                अभी दावा जांचें
                <ArrowRight className="ml-2 h-5 w-5" />
              </a>
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
              दूरी के आधार पर मुआवजा राशि
            </h2>
            <p className="text-lg text-gray-600 dark:text-gray-400">
              EU 261/2004 - सभी विलंबित (3h+) और रद्द उड़ानों के लिए
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {/* 250 EUR */}
            <div className="bg-gradient-to-br from-blue-50 to-white dark:from-gray-800 dark:to-gray-900 rounded-xl p-8 border-2 border-blue-100 dark:border-gray-700 hover:border-green-600 dark:hover:border-green-400 transition-all hover:shadow-xl">
              <div className="text-center">
                <Euro className="h-12 w-12 text-green-600 dark:text-green-400 mx-auto mb-4" />
                <div className="text-5xl font-bold text-green-600 dark:text-green-400 mb-2">250 €</div>
                <div className="text-sm text-gray-600 dark:text-gray-400 mb-4">1,500 किमी तक</div>
                <div className="space-y-2 text-sm text-gray-700 dark:text-gray-300">
                  <div className="flex items-center justify-center space-x-2">
                    <MapPin className="h-4 w-4 text-green-600 dark:text-green-400" />
                    <span>दिल्ली → दुबई</span>
                  </div>
                  <div className="flex items-center justify-center space-x-2">
                    <MapPin className="h-4 w-4 text-green-600 dark:text-green-400" />
                    <span>मुंबई → बैंकॉक</span>
                  </div>
                  <div className="flex items-center justify-center space-x-2">
                    <MapPin className="h-4 w-4 text-green-600 dark:text-green-400" />
                    <span>दिल्ली → कराची</span>
                  </div>
                  <div className="flex items-center justify-center space-x-2">
                    <MapPin className="h-4 w-4 text-green-600 dark:text-green-400" />
                    <span>बैंगलोर → कोलंबो</span>
                  </div>
                </div>
              </div>
            </div>

            {/* 400 EUR */}
            <div className="bg-gradient-to-br from-green-50 to-white dark:from-green-900/30 dark:to-gray-900 rounded-xl p-8 border-2 border-green-600 dark:border-green-400 hover:shadow-2xl transition-all relative">
              <div className="absolute -top-4 left-1/2 transform -translate-x-1/2 bg-green-600 dark:bg-green-500 text-white px-4 py-1 rounded-full text-sm font-medium">
                सबसे आम
              </div>
              <div className="text-center">
                <Euro className="h-12 w-12 text-green-600 dark:text-green-400 mx-auto mb-4" />
                <div className="text-5xl font-bold text-green-600 dark:text-green-400 mb-2">400 €</div>
                <div className="text-sm text-gray-600 dark:text-gray-400 mb-4">1,500 – 3,500 किमी</div>
                <div className="space-y-2 text-sm text-gray-700 dark:text-gray-300">
                  <div className="flex items-center justify-center space-x-2">
                    <MapPin className="h-4 w-4 text-green-600 dark:text-green-400" />
                    <span>दिल्ली → पेरिस</span>
                  </div>
                  <div className="flex items-center justify-center space-x-2">
                    <MapPin className="h-4 w-4 text-green-600 dark:text-green-400" />
                    <span>मुंबई → लंदन</span>
                  </div>
                  <div className="flex items-center justify-center space-x-2">
                    <MapPin className="h-4 w-4 text-green-600 dark:text-green-400" />
                    <span>दिल्ली → फ्रैंकफर्ट</span>
                  </div>
                  <div className="flex items-center justify-center space-x-2">
                    <MapPin className="h-4 w-4 text-green-600 dark:text-green-400" />
                    <span>बैंगलोर → एम्स्टर्डम</span>
                  </div>
                </div>
              </div>
            </div>

            {/* 600 EUR */}
            <div className="bg-gradient-to-br from-blue-50 to-white dark:from-gray-800 dark:to-gray-900 rounded-xl p-8 border-2 border-blue-100 dark:border-gray-700 hover:border-green-600 dark:hover:border-green-400 transition-all hover:shadow-xl">
              <div className="text-center">
                <Euro className="h-12 w-12 text-green-600 dark:text-green-400 mx-auto mb-4" />
                <div className="text-5xl font-bold text-green-600 dark:text-green-400 mb-2">600 €</div>
                <div className="text-sm text-gray-600 dark:text-gray-400 mb-4">3,500 किमी से अधिक</div>
                <div className="space-y-2 text-sm text-gray-700 dark:text-gray-300">
                  <div className="flex items-center justify-center space-x-2">
                    <MapPin className="h-4 w-4 text-green-600 dark:text-green-400" />
                    <span>दिल्ली → न्यूयॉर्क</span>
                  </div>
                  <div className="flex items-center justify-center space-x-2">
                    <MapPin className="h-4 w-4 text-green-600 dark:text-green-400" />
                    <span>मुंबई → सैन फ्रांसिस्को</span>
                  </div>
                  <div className="flex items-center justify-center space-x-2">
                    <MapPin className="h-4 w-4 text-green-600 dark:text-green-400" />
                    <span>दिल्ली → टोक्यो</span>
                  </div>
                  <div className="flex items-center justify-center space-x-2">
                    <MapPin className="h-4 w-4 text-green-600 dark:text-green-400" />
                    <span>बैंगलोर → मेलबर्न</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Popular Routes from India */}
      <section className="py-16 bg-gray-50 dark:bg-gray-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-4">
              भारत से लोकप्रिय मार्ग
            </h2>
            <p className="text-lg text-gray-600 dark:text-gray-400">
              भारतीय यात्रियों के लिए सामान्य EU उड़ानें
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-6">
            {/* Delhi Routes */}
            <div className="bg-white dark:bg-gray-900 rounded-xl p-6 border border-gray-200 dark:border-gray-700">
              <div className="flex items-center mb-4">
                <Plane className="h-6 w-6 text-green-600 dark:text-green-400 mr-2" />
                <h3 className="text-xl font-semibold text-gray-900 dark:text-white">
                  दिल्ली (DEL) मार्ग
                </h3>
              </div>
              <div className="space-y-3">
                <div className="flex items-center justify-between py-2 border-b border-gray-100 dark:border-gray-800">
                  <span className="text-gray-700 dark:text-gray-300">दिल्ली → लंदन</span>
                  <span className="font-semibold text-green-600 dark:text-green-400">400 €</span>
                </div>
                <div className="flex items-center justify-between py-2 border-b border-gray-100 dark:border-gray-800">
                  <span className="text-gray-700 dark:text-gray-300">दिल्ली → पेरिस</span>
                  <span className="font-semibold text-green-600 dark:text-green-400">400 €</span>
                </div>
                <div className="flex items-center justify-between py-2 border-b border-gray-100 dark:border-gray-800">
                  <span className="text-gray-700 dark:text-gray-300">दिल्ली → फ्रैंकफर्ट</span>
                  <span className="font-semibold text-green-600 dark:text-green-400">400 €</span>
                </div>
                <div className="flex items-center justify-between py-2 border-b border-gray-100 dark:border-gray-800">
                  <span className="text-gray-700 dark:text-gray-300">दिल्ली → एम्स्टर्डम</span>
                  <span className="font-semibold text-green-600 dark:text-green-400">400 €</span>
                </div>
                <div className="flex items-center justify-between py-2">
                  <span className="text-gray-700 dark:text-gray-300">दिल्ली → न्यूयॉर्क</span>
                  <span className="font-semibold text-green-600 dark:text-green-400">600 €</span>
                </div>
              </div>
            </div>

            {/* Mumbai Routes */}
            <div className="bg-white dark:bg-gray-900 rounded-xl p-6 border border-gray-200 dark:border-gray-700">
              <div className="flex items-center mb-4">
                <Plane className="h-6 w-6 text-green-600 dark:text-green-400 mr-2" />
                <h3 className="text-xl font-semibold text-gray-900 dark:text-white">
                  मुंबई (BOM) मार्ग
                </h3>
              </div>
              <div className="space-y-3">
                <div className="flex items-center justify-between py-2 border-b border-gray-100 dark:border-gray-800">
                  <span className="text-gray-700 dark:text-gray-300">मुंबई → लंदन</span>
                  <span className="font-semibold text-green-600 dark:text-green-400">400 €</span>
                </div>
                <div className="flex items-center justify-between py-2 border-b border-gray-100 dark:border-gray-800">
                  <span className="text-gray-700 dark:text-gray-300">मुंबई → पेरिस</span>
                  <span className="font-semibold text-green-600 dark:text-green-400">400 €</span>
                </div>
                <div className="flex items-center justify-between py-2 border-b border-gray-100 dark:border-gray-800">
                  <span className="text-gray-700 dark:text-gray-300">मुंबई → फ्रैंकफर्ट</span>
                  <span className="font-semibold text-green-600 dark:text-green-400">400 €</span>
                </div>
                <div className="flex items-center justify-between py-2 border-b border-gray-100 dark:border-gray-800">
                  <span className="text-gray-700 dark:text-gray-300">मुंबई → रोम</span>
                  <span className="font-semibold text-green-600 dark:text-green-400">400 €</span>
                </div>
                <div className="flex items-center justify-between py-2">
                  <span className="text-gray-700 dark:text-gray-300">मुंबई → न्यूयॉर्क</span>
                  <span className="font-semibold text-green-600 dark:text-green-400">600 €</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Important Rules */}
      <section className="py-16 bg-white dark:bg-gray-900">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-4">
              महत्वपूर्ण नियम
            </h2>
            <p className="text-lg text-gray-600 dark:text-gray-400">
              मुआवजा प्राप्त करने के लिए क्या जानना आवश्यक है
            </p>
          </div>

          <div className="space-y-6">
            <div className="bg-green-50 dark:bg-green-900/20 rounded-xl p-6 border-2 border-green-500 dark:border-green-600">
              <div className="flex items-start">
                <CheckCircle2 className="h-6 w-6 text-green-600 dark:text-green-400 mr-3 flex-shrink-0 mt-1" />
                <div>
                  <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">
                    1. दूरी गणना
                  </h3>
                  <p className="text-gray-700 dark:text-gray-300">
                    मुआवजा राशि प्रस्थान और गंतव्य हवाई अड्डों के बीच की <strong>सीधी दूरी</strong> पर आधारित है। 
                    कनेक्टिंग उड़ान के साथ, संपूर्ण यात्रा की दूरी गिनी जाती है।
                  </p>
                </div>
              </div>
            </div>

            <div className="bg-green-50 dark:bg-green-900/20 rounded-xl p-6 border-2 border-green-500 dark:border-green-600">
              <div className="flex items-start">
                <CheckCircle2 className="h-6 w-6 text-green-600 dark:text-green-400 mr-3 flex-shrink-0 mt-1" />
                <div>
                  <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">
                    2. EU संबंध आवश्यक
                  </h3>
                  <p className="text-gray-700 dark:text-gray-300">
                    मुआवजा केवल तभी लागू होता है जब: (a) EU से प्रस्थान (कोई भी एयरलाइन), या 
                    (b) EU में आगमन (EU एयरलाइन के साथ)। दिल्ली → दुबई = कोई मुआवजा नहीं। दिल्ली → लंदन = मुआवजा।
                  </p>
                </div>
              </div>
            </div>

            <div className="bg-green-50 dark:bg-green-900/20 rounded-xl p-6 border-2 border-green-500 dark:border-green-600">
              <div className="flex items-start">
                <CheckCircle2 className="h-6 w-6 text-green-600 dark:text-green-400 mr-3 flex-shrink-0 mt-1" />
                <div>
                  <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">
                    3. विलंब = आगमन विलंब
                  </h3>
                  <p className="text-gray-700 dark:text-gray-300">
                    विलंबित उड़ान के लिए, <strong>गंतव्य पर आगमन समय</strong> गिना जाता है। 
                    यदि आप 3+ घंटे विलंब से पहुंचते हैं = मुआवजा। प्रस्थान विलंब कोई मायने नहीं रखता।
                  </p>
                </div>
              </div>
            </div>

            <div className="bg-green-50 dark:bg-green-900/20 rounded-xl p-6 border-2 border-green-500 dark:border-green-600">
              <div className="flex items-start">
                <CheckCircle2 className="h-6 w-6 text-green-600 dark:text-green-400 mr-3 flex-shrink-0 mt-1" />
                <div>
                  <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">
                    4. रद्दीकरण = मुआवजा + रिफंड
                  </h3>
                  <p className="text-gray-700 dark:text-gray-300">
                    रद्द की गई उड़ान के साथ, आपको <strong>दोनों</strong> मिलते हैं: €250-€600 मुआवजा + 
                    टिकट मूल्य का 100% रिफंड। दोहरी राशि!
                  </p>
                </div>
              </div>
            </div>

            <div className="bg-green-50 dark:bg-green-900/20 rounded-xl p-6 border-2 border-green-500 dark:border-green-600">
              <div className="flex items-start">
                <CheckCircle2 className="h-6 w-6 text-green-600 dark:text-green-400 mr-3 flex-shrink-0 mt-1" />
                <div>
                  <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">
                    5. सभी टिकट प्रकार मान्य
                  </h3>
                  <p className="text-gray-700 dark:text-gray-300">
                    €50 का बजट टिकट = €400 का बिजनेस क्लास टिकट। मुआवजा राशि टिकट की कीमत पर निर्भर नहीं करती, 
                    केवल दूरी पर। यहां तक कि मुफ्त माइल्स टिकट भी मान्य हैं।
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-gradient-to-r from-green-600 to-green-700 dark:from-green-700 dark:to-green-800">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold text-white mb-4">
            अपना मुआवजा अभी प्राप्त करें
          </h2>
          <p className="text-xl text-green-100 mb-8">
            3 मिनट में पता करें कि आप €250-€600 के पात्र हैं या नहीं। कोई जोखिम नहीं, सफलता पर भुगतान करें।
          </p>
          <a
            href="https://claimwinger.com"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center bg-white hover:bg-gray-100 text-green-600 px-8 py-4 rounded-lg font-semibold text-lg transition-colors shadow-xl"
          >
            निःशुल्क दावा जांचें
            <ArrowRight className="ml-2 h-5 w-5" />
          </a>
          <p className="text-green-100 mt-4 text-sm">
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
              href="/hi/der-se-flight"
              className="bg-white dark:bg-gray-900 rounded-lg p-6 border border-gray-200 dark:border-gray-700 hover:border-green-600 dark:hover:border-green-400 transition-all hover:shadow-lg"
            >
              <h4 className="font-semibold text-gray-900 dark:text-white mb-2">
                विलंबित उड़ान
              </h4>
              <p className="text-sm text-gray-600 dark:text-gray-400">
                3+ घंटे विलंब के लिए मुआवजा
              </p>
            </Link>
            <Link
              href="/hi/cancel-flight"
              className="bg-white dark:bg-gray-900 rounded-lg p-6 border border-gray-200 dark:border-gray-700 hover:border-green-600 dark:hover:border-green-400 transition-all hover:shadow-lg"
            >
              <h4 className="font-semibold text-gray-900 dark:text-white mb-2">
                रद्द की गई उड़ान
              </h4>
              <p className="text-sm text-gray-600 dark:text-gray-400">
                मुआवजा + पूर्ण रिफंड
              </p>
            </Link>
            <Link
              href="/hi/blog"
              className="bg-white dark:bg-gray-900 rounded-lg p-6 border border-gray-200 dark:border-gray-700 hover:border-green-600 dark:hover:border-green-400 transition-all hover:shadow-lg"
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