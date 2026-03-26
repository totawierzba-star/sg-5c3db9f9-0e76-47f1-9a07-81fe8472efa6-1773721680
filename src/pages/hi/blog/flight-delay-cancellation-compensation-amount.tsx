import { SEO } from "@/components/SEO";
import { LayoutHi } from "@/components/LayoutHi";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import Link from "next/link";
import { Euro, Plane, Calculator, CheckCircle2, XCircle, AlertTriangle, TrendingUp, MapPin, Clock } from "lucide-react";

export default function FlightCompensationAmount() {
  return (
    <LayoutHi>
      <SEO 
        title="उड़ान में देरी या रद्दीकरण: मुझे कितना मुआवज़ा मिल सकता है? [2026]"
        description="जानें कि देरी या रद्द उड़ान के लिए आपको कितना मुआवज़ा मिल सकता है। €250 से €600 (₹22,000-₹52,000) तक। मुफ्त कैलकुलेटर + विशेषज्ञ सलाह।"
        canonicalUrl="https://problemlot.com/hi/blog/flight-delay-cancellation-compensation-amount"
      />

      <article className="max-w-4xl mx-auto px-4 py-12">
        {/* Breadcrumbs */}
        <nav className="flex items-center space-x-2 text-sm text-gray-600 mb-6">
          <Link href="/hi" className="hover:text-blue-600">होम</Link>
          <span>/</span>
          <Link href="/hi/blog" className="hover:text-blue-600">ब्लॉग</Link>
          <span>/</span>
          <span className="text-gray-900">मुआवज़े की राशि</span>
        </nav>

        {/* Article Header */}
        <header className="mb-8">
          <div className="flex items-center space-x-2 text-green-600 font-semibold mb-4">
            <Euro className="h-5 w-5" />
            <span>मुआवज़ा कैलकुलेटर</span>
          </div>
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            उड़ान में देरी या रद्दीकरण: मुझे कितना मुआवज़ा मिल सकता है?
          </h1>
          <div className="flex items-center space-x-4 text-gray-600">
            <time dateTime="2026-03-01">1 मार्च 2026</time>
            <span>•</span>
            <span>10 मिनट पठन</span>
          </div>
        </header>

        {/* Hero Content */}
        <div className="prose prose-lg max-w-none">
          <p className="text-xl text-gray-700 leading-relaxed">
            यदि आपकी उड़ान में देरी हुई है या रद्द की गई है, तो आप शायद सोच रहे हैं: <strong className="text-green-600">"मुझे कितना मुआवज़ा मिल सकता है?"</strong> अच्छी खबर यह है कि यूरोपीय संघ विनियमन EC 261/2004 के तहत, आप <strong>€250 से €600 (₹22,000 से ₹52,000) तक</strong> मुआवज़े के हकदार हो सकते हैं — और यह राशि आपके टिकट की कीमत पर निर्भर नहीं करती!
          </p>

          <p className="text-lg text-gray-700">
            यह व्यापक मार्गदर्शिका आपको बताएगी कि आपको कितना मिल सकता है, मुआवज़ा कैसे कैलकुलेट करें, और अधिकतम राशि कैसे प्राप्त करें। हम वास्तविक उदाहरणों, तुलनात्मक तालिकाओं, और व्यावहारिक सलाह के साथ सब कुछ समझाएंगे।
          </p>

          {/* CTA #1 - After First Paragraph */}
          <Card className="my-8 p-6 bg-gradient-to-br from-green-50 to-blue-50 border-2 border-green-200">
            <div className="flex items-start space-x-4">
              <div className="bg-green-600 p-3 rounded-lg">
                <Calculator className="h-6 w-6 text-white" />
              </div>
              <div className="flex-1">
                <h3 className="text-xl font-bold text-gray-900 mb-2">
                  2 मिनट में अपना मुआवज़ा कैलकुलेट करें!
                </h3>
                <p className="text-gray-700 mb-4">
                  अपनी उड़ान का विवरण दर्ज करें और तुरंत पता करें कि आप कितने मुआवज़े के हकदार हैं। <strong>100% निःशुल्क, कोई छिपा शुल्क नहीं।</strong>
                </p>
                <Button asChild size="lg" className="w-full sm:w-auto bg-green-600 hover:bg-green-700">
                  <a href="https://claimwinger.com/hi" target="_blank" rel="noopener noreferrer">
                    मुफ्त कैलकुलेटर इस्तेमाल करें →
                  </a>
                </Button>
                <p className="text-sm text-gray-600 mt-3">
                  ✓ कोई अग्रिम शुल्क नहीं  ✓ सफलता पर ही भुगतान  ✓ 97% सफलता दर
                </p>
              </div>
            </div>
          </Card>

          {/* Section 1: त्वरित उत्तर */}
          <section className="mt-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-6 flex items-center">
              <TrendingUp className="h-8 w-8 text-green-600 mr-3" />
              त्वरित उत्तर: आपको कितना मिल सकता है?
            </h2>

            <div className="bg-green-50 border-l-4 border-green-600 p-6 mb-6">
              <h3 className="font-bold text-lg text-green-900 mb-2">मुआवज़े की राशि इस पर निर्भर करती है:</h3>
              <ul className="space-y-2 text-gray-800">
                <li className="flex items-start space-x-2">
                  <CheckCircle2 className="h-5 w-5 text-green-600 flex-shrink-0 mt-1" />
                  <span><strong>उड़ान की दूरी</strong> (किलोमीटर में)</span>
                </li>
                <li className="flex items-start space-x-2">
                  <CheckCircle2 className="h-5 w-5 text-green-600 flex-shrink-0 mt-1" />
                  <span><strong>देरी या रद्दीकरण का प्रकार</strong></span>
                </li>
                <li className="flex items-start space-x-2">
                  <CheckCircle2 className="h-5 w-5 text-green-600 flex-shrink-0 mt-1" />
                  <span><strong>क्या "असाधारण परिस्थितियाँ" थीं</strong></span>
                </li>
              </ul>
              <p className="text-gray-800 mt-4 font-semibold">
                ⚠️ <strong>महत्वपूर्ण:</strong> मुआवज़ा टिकट की कीमत पर निर्भर <strong>नहीं</strong> करता! €50 की टिकट भी €600 मुआवज़ा दे सकती है।
              </p>
            </div>

            <h3 className="text-2xl font-bold text-gray-900 mb-4">मुआवज़े की मानक राशियाँ (EC 261/2004)</h3>

            <div className="overflow-x-auto mb-6">
              <table className="w-full border-collapse">
                <thead className="bg-green-600 text-white">
                  <tr>
                    <th className="p-4 text-left">उड़ान दूरी</th>
                    <th className="p-4 text-left">मुआवज़ा (€)</th>
                    <th className="p-4 text-left">मुआवज़ा (₹ लगभग)</th>
                    <th className="p-4 text-left">भारत से उदाहरण</th>
                  </tr>
                </thead>
                <tbody className="divide-y">
                  <tr className="hover:bg-gray-50">
                    <td className="p-4 font-semibold">1,500 km तक</td>
                    <td className="p-4 text-green-600 font-bold text-2xl">€250</td>
                    <td className="p-4 text-green-600 font-bold text-xl">₹22,000</td>
                    <td className="p-4 text-sm">
                      • दुबई → फ्रैंकफर्ट<br/>
                      • अबू धाबी → रोम<br/>
                      • बहरीन → एथेंस
                    </td>
                  </tr>
                  <tr className="hover:bg-gray-50 bg-blue-50">
                    <td className="p-4 font-semibold">1,500 – 3,500 km</td>
                    <td className="p-4 text-blue-600 font-bold text-2xl">€400</td>
                    <td className="p-4 text-blue-600 font-bold text-xl">₹35,000</td>
                    <td className="p-4 text-sm">
                      • दिल्ली → लंदन<br/>
                      • मुंबई → पेरिस<br/>
                      • बेंगलुरु → फ्रैंकफर्ट
                    </td>
                  </tr>
                  <tr className="hover:bg-gray-50">
                    <td className="p-4 font-semibold">3,500 km से अधिक</td>
                    <td className="p-4 text-purple-600 font-bold text-2xl">€600</td>
                    <td className="p-4 text-purple-600 font-bold text-xl">₹52,000</td>
                    <td className="p-4 text-sm">
                      • दिल्ली → न्यूयॉर्क (EU से होकर)<br/>
                      • मुंबई → टोरंटो (EU से होकर)<br/>
                      • बेंगलुरु → लॉस एंजेलिस (EU कनेक्शन)
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>

            <div className="bg-yellow-50 border-l-4 border-yellow-600 p-6">
              <div className="flex items-start space-x-3">
                <AlertTriangle className="h-6 w-6 text-yellow-600 flex-shrink-0 mt-1" />
                <div>
                  <h4 className="font-bold text-yellow-900 mb-2">⚡ महत्वपूर्ण नोट: 50% कटौती की संभावना</h4>
                  <p className="text-gray-800">
                    यदि एयरलाइन आपको वैकल्पिक उड़ान प्रदान करती है जो निर्धारित समय से <strong>कम देरी</strong> के साथ पहुंचती है, तो मुआवज़े में 50% की कटौती हो सकती है:
                  </p>
                  <ul className="list-disc pl-6 mt-2 space-y-1 text-sm text-gray-800">
                    <li>1,500 km तक: 2 घंटे के भीतर पहुंच = €125 (€250 के बजाय)</li>
                    <li>1,500-3,500 km: 3 घंटे के भीतर = €200 (€400 के बजाय)</li>
                    <li>3,500+ km: 4 घंटे के भीतर = €300 (€600 के बजाय)</li>
                  </ul>
                </div>
              </div>
            </div>
          </section>

          {/* Section 2: वास्तविक उदाहरण */}
          <section className="mt-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-6 flex items-center">
              <Plane className="h-8 w-8 text-blue-600 mr-3" />
              वास्तविक उदाहरण: भारतीय यात्रियों के केस
            </h2>

            <div className="space-y-6">
              <Card className="p-6 border-l-4 border-green-600">
                <div className="flex items-start space-x-4 mb-4">
                  <div className="bg-green-100 p-3 rounded-lg">
                    <span className="text-2xl font-bold text-green-600">1</span>
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-gray-900 mb-1">दिल्ली → लंदन (British Airways)</h3>
                    <p className="text-sm text-gray-600">सामान्य परिदृश्य: व्यावसायिक यात्री</p>
                  </div>
                </div>
                
                <div className="bg-gray-50 p-4 rounded-lg mb-4">
                  <h4 className="font-semibold text-gray-900 mb-2">स्थिति:</h4>
                  <ul className="space-y-1 text-sm text-gray-700">
                    <li>• <strong>मार्ग:</strong> दिल्ली (DEL) → लंदन हीथ्रो (LHR)</li>
                    <li>• <strong>दूरी:</strong> ~6,700 km</li>
                    <li>• <strong>देरी:</strong> तकनीकी समस्या के कारण 5 घंटे</li>
                    <li>• <strong>टिकट कीमत:</strong> ₹35,000 (इकोनॉमी क्लास)</li>
                  </ul>
                </div>

                <div className="bg-green-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-green-900 mb-2">✅ मुआवज़ा:</h4>
                  <p className="text-3xl font-bold text-green-600 mb-2">€600 (₹52,000)</p>
                  <p className="text-sm text-gray-700">
                    <strong>क्यों?</strong> दूरी 3,500+ km है, और 5 घंटे की देरी = पूर्ण मुआवज़ा। टिकट की कीमत (₹35k) का कोई प्रभाव नहीं!
                  </p>
                </div>
              </Card>

              <Card className="p-6 border-l-4 border-blue-600">
                <div className="flex items-start space-x-4 mb-4">
                  <div className="bg-blue-100 p-3 rounded-lg">
                    <span className="text-2xl font-bold text-blue-600">2</span>
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-gray-900 mb-1">मुंबई → दुबई → पेरिस (Emirates)</h3>
                    <p className="text-sm text-gray-600">कनेक्टिंग फ्लाइट: परिवार यात्रा</p>
                  </div>
                </div>
                
                <div className="bg-gray-50 p-4 rounded-lg mb-4">
                  <h4 className="font-semibold text-gray-900 mb-2">स्थिति:</h4>
                  <ul className="space-y-1 text-sm text-gray-700">
                    <li>• <strong>मार्ग:</strong> मुंबई → दुबई → पेरिस (single booking)</li>
                    <li>• <strong>समस्या:</strong> दुबई-पेरिस फ्लाइट रद्द</li>
                    <li>• <strong>दूरी:</strong> दुबई → पेरिस ~5,200 km</li>
                    <li>• <strong>परिवार:</strong> 4 सदस्य (2 वयस्क + 2 बच्चे)</li>
                    <li>• <strong>टिकट कीमत:</strong> ₹18,000 प्रति व्यक्ति (budget fare)</li>
                  </ul>
                </div>

                <div className="bg-blue-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-blue-900 mb-2">✅ कुल परिवार मुआवज़ा:</h4>
                  <p className="text-3xl font-bold text-blue-600 mb-2">€2,400 (₹2,08,000)</p>
                  <div className="text-sm text-gray-700 space-y-1">
                    <p><strong>गणना:</strong></p>
                    <p>• प्रति यात्री: €600 (3,500+ km दूरी)</p>
                    <p>• 4 यात्री × €600 = €2,400</p>
                    <p className="text-blue-600 font-semibold mt-2">
                      💡 टिकट की कीमत ₹72,000 थी, मुआवज़ा ₹2,08,000 = <strong>लगभग 3x ज्यादा!</strong>
                    </p>
                  </div>
                </div>
              </Card>

              <Card className="p-6 border-l-4 border-purple-600">
                <div className="flex items-start space-x-4 mb-4">
                  <div className="bg-purple-100 p-3 rounded-lg">
                    <span className="text-2xl font-bold text-purple-600">3</span>
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-gray-900 mb-1">दिल्ली → दुबई (IndiGo)</h3>
                    <p className="text-sm text-gray-600">छोटी दूरी की उड़ान</p>
                  </div>
                </div>
                
                <div className="bg-gray-50 p-4 rounded-lg mb-4">
                  <h4 className="font-semibold text-gray-900 mb-2">स्थिति:</h4>
                  <ul className="space-y-1 text-sm text-gray-700">
                    <li>• <strong>मार्ग:</strong> दिल्ली → दुबई</li>
                    <li>• <strong>दूरी:</strong> ~2,200 km</li>
                    <li>• <strong>समस्या:</strong> 4 घंटे देरी (क्रू की कमी)</li>
                    <li>• <strong>टिकट:</strong> ₹6,500 (sale price)</li>
                  </ul>
                </div>

                <div className="bg-purple-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-purple-900 mb-2">❌ मुआवज़ा:</h4>
                  <p className="text-3xl font-bold text-red-600 mb-2">₹0</p>
                  <p className="text-sm text-gray-700">
                    <strong>क्यों नहीं?</strong> IndiGo गैर-EU एयरलाइन है और उड़ान EU से प्रस्थान/आगमन नहीं करती। केवल <strong>DGCA नियम</strong> लागू होते हैं (बहुत कम राशि)।
                  </p>
                  <div className="mt-3 p-3 bg-yellow-50 border border-yellow-200 rounded">
                    <p className="text-xs text-gray-700">
                      <strong>DGCA के तहत:</strong> 4 घंटे देरी = लगभग ₹2,000-₹5,000 (परिस्थितियों पर निर्भर)
                    </p>
                  </div>
                </div>
              </Card>

              <Card className="p-6 border-l-4 border-orange-600">
                <div className="flex items-start space-x-4 mb-4">
                  <div className="bg-orange-100 p-3 rounded-lg">
                    <span className="text-2xl font-bold text-orange-600">4</span>
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-gray-900 mb-1">लंदन → मुंबई (Air India) - वैकल्पिक उड़ान</h3>
                    <p className="text-sm text-gray-600">50% कटौती का उदाहरण</p>
                  </div>
                </div>
                
                <div className="bg-gray-50 p-4 rounded-lg mb-4">
                  <h4 className="font-semibold text-gray-900 mb-2">स्थिति:</h4>
                  <ul className="space-y-1 text-sm text-gray-700">
                    <li>• <strong>मूल उड़ान:</strong> रद्द (तकनीकी कारण)</li>
                    <li>• <strong>वैकल्पिक उड़ान:</strong> 3 घंटे बाद उपलब्ध</li>
                    <li>• <strong>अंतिम देरी:</strong> गंतव्य पर 3.5 घंटे</li>
                    <li>• <strong>दूरी:</strong> ~7,200 km (3,500+ km)</li>
                  </ul>
                </div>

                <div className="bg-orange-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-orange-900 mb-2">⚡ मुआवज़ा (50% कटौती):</h4>
                  <p className="text-3xl font-bold text-orange-600 mb-2">€300 (₹26,000)</p>
                  <p className="text-sm text-gray-700">
                    <strong>क्यों 50%?</strong> वैकल्पिक उड़ान ने आपको 4 घंटे के भीतर पहुंचाया (3,500+ km के लिए सीमा)। पूर्ण €600 के बजाय €300 मिलेगा।
                  </p>
                </div>
              </Card>
            </div>
          </section>

          {/* Section 3: DGCA vs EC 261 तुलना */}
          <section className="mt-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-6">
              भारत (DGCA) vs यूरोप (EC 261) — मुआवज़े की तुलना
            </h2>

            <p className="text-lg text-gray-700 mb-6">
              यह समझना महत्वपूर्ण है कि भारत और यूरोप में मुआवज़े के नियम <strong>बहुत अलग</strong> हैं। यहां सीधी तुलना है:
            </p>

            <div className="overflow-x-auto mb-6">
              <table className="w-full border-collapse">
                <thead className="bg-gray-800 text-white">
                  <tr>
                    <th className="p-4 text-left">विशेषता</th>
                    <th className="p-4 text-left">भारत (DGCA)</th>
                    <th className="p-4 text-left">यूरोप (EC 261/2004)</th>
                  </tr>
                </thead>
                <tbody className="divide-y">
                  <tr className="hover:bg-gray-50">
                    <td className="p-4 font-semibold">मुआवज़े की राशि</td>
                    <td className="p-4">
                      <span className="text-red-600">परिवर्तनशील</span><br/>
                      <span className="text-sm">देरी घंटे × ₹500-₹5,000</span>
                    </td>
                    <td className="p-4">
                      <span className="text-green-600 font-bold">निश्चित €250-€600</span><br/>
                      <span className="text-sm">(₹22,000-₹52,000)</span>
                    </td>
                  </tr>
                  <tr className="hover:bg-gray-50">
                    <td className="p-4 font-semibold">कीमत पर निर्भरता</td>
                    <td className="p-4">
                      <XCircle className="h-5 w-5 text-red-600 inline mr-2" />
                      <span className="text-sm">हाँ, टिकट की कीमत मायने रखती है</span>
                    </td>
                    <td className="p-4">
                      <CheckCircle2 className="h-5 w-5 text-green-600 inline mr-2" />
                      <span className="text-sm font-bold">नहीं! केवल दूरी मायने रखती है</span>
                    </td>
                  </tr>
                  <tr className="hover:bg-gray-50">
                    <td className="p-4 font-semibold">अधिकतम राशि</td>
                    <td className="p-4 text-red-600">
                      <strong>~₹20,000</strong><br/>
                      <span className="text-sm">(बहुत दुर्लभ)</span>
                    </td>
                    <td className="p-4 text-green-600">
                      <strong className="text-2xl">€600 (₹52,000)</strong><br/>
                      <span className="text-sm">(सामान्य)</span>
                    </td>
                  </tr>
                  <tr className="hover:bg-gray-50">
                    <td className="p-4 font-semibold">रद्दीकरण मुआवज़ा</td>
                    <td className="p-4">
                      <span className="text-sm">केवल रिफंड + बुकिंग शुल्क वापसी</span>
                    </td>
                    <td className="p-4 font-bold text-green-600">
                      रिफंड + €250-€600
                    </td>
                  </tr>
                  <tr className="hover:bg-gray-50">
                    <td className="p-4 font-semibold">ओवरबुकिंग</td>
                    <td className="p-4">
                      <span className="text-sm">रिफंड या वैकल्पिक उड़ान</span>
                    </td>
                    <td className="p-4 font-bold text-green-600">
                      €250-€600 + रिफंड
                    </td>
                  </tr>
                  <tr className="hover:bg-gray-50">
                    <td className="p-4 font-semibold">प्रवर्तन</td>
                    <td className="p-4 text-red-600">
                      <span className="text-sm">कमजोर (एयरलाइनें अक्सर अनदेखा करती हैं)</span>
                    </td>
                    <td className="p-4 text-green-600">
                      <span className="text-sm font-bold">मजबूत (भारी जुर्माना, अदालत)</span>
                    </td>
                  </tr>
                  <tr className="hover:bg-gray-50">
                    <td className="p-4 font-semibold">उदाहरण परिदृश्य</td>
                    <td className="p-4">
                      <span className="text-sm">दिल्ली-मुंबई, 4 घंटे देरी:<br/><strong>₹2,000-₹5,000</strong></span>
                    </td>
                    <td className="p-4">
                      <span className="text-sm">दिल्ली-लंदन, 4 घंटे देरी:<br/><strong className="text-green-600 text-lg">€600 (₹52,000)</strong></span>
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>

            <div className="bg-blue-50 border-l-4 border-blue-600 p-6">
              <h4 className="font-bold text-lg text-blue-900 mb-2">💡 भारतीय यात्रियों के लिए सलाह</h4>
              <p className="text-gray-800">
                यदि आपकी उड़ान EU से जुड़ी है (EU से प्रस्थान या EU एयरलाइन के साथ EU में आगमन), तो <strong>हमेशा EC 261/2004 के तहत दावा करें</strong>, न कि DGCA के तहत। आपको 10x अधिक पैसा मिलेगा!
              </p>
            </div>
          </section>

          {/* Section 4: अधिकतम मुआवज़ा कैसे प्राप्त करें */}
          <section className="mt-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-6 flex items-center">
              <TrendingUp className="h-8 w-8 text-purple-600 mr-3" />
              अधिकतम मुआवज़ा कैसे प्राप्त करें — 5 टिप्स
            </h2>

            <div className="space-y-6">
              <Card className="p-6 border-l-4 border-purple-600">
                <div className="flex items-start space-x-4">
                  <div className="bg-purple-100 p-3 rounded-full">
                    <span className="text-2xl font-bold text-purple-600">1</span>
                  </div>
                  <div className="flex-1">
                    <h3 className="text-xl font-bold text-gray-900 mb-2">दूरी को सही तरीके से कैलकुलेट करें</h3>
                    <p className="text-gray-700 mb-3">
                      EC 261/2004 "महान वृत्त दूरी" (great circle distance) का उपयोग करता है — सीधी रेखा हवाई दूरी, वास्तविक उड़ान पथ नहीं।
                    </p>
                    <div className="bg-purple-50 p-4 rounded-lg">
                      <p className="text-sm text-gray-800 mb-2"><strong>उदाहरण:</strong></p>
                      <p className="text-sm text-gray-700">
                        दिल्ली → लंदन वास्तविक रूट ~7,000 km हो सकता है, लेकिन <strong>great circle = 6,700 km</strong> → यह 3,500+ km category में आता है = <strong>€600</strong>
                      </p>
                      <p className="text-sm text-green-600 font-semibold mt-2">
                        ✓ Free calculators इस्तेमाल करें (ClaimWinger, WebFlyer Distance Calculator)
                      </p>
                    </div>
                  </div>
                </div>
              </Card>

              <Card className="p-6 border-l-4 border-blue-600">
                <div className="flex items-start space-x-4">
                  <div className="bg-blue-100 p-3 rounded-full">
                    <span className="text-2xl font-bold text-blue-600">2</span>
                  </div>
                  <div className="flex-1">
                    <h3 className="text-xl font-bold text-gray-900 mb-2">कनेक्टिंग उड़ानों पर ध्यान दें</h3>
                    <p className="text-gray-700 mb-3">
                      यदि आप एक ही बुकिंग में कनेक्टिंग उड़ान ले रहे हैं और कनेक्शन छूट जाता है, तो <strong>पूरी यात्रा की दूरी</strong> मायने रखती है!
                    </p>
                    <div className="bg-blue-50 p-4 rounded-lg">
                      <p className="text-sm text-gray-800 mb-2"><strong>उदाहरण:</strong></p>
                      <p className="text-sm text-gray-700">
                        • मुंबई → दुबई (Emirates) [पहली leg]<br/>
                        • दुबई → पेरिस (Emirates) [दूसरी leg, देरी/रद्द]<br/>
                        • <strong>कुल दूरी:</strong> मुंबई → पेरिस ~6,800 km = <strong>€600</strong>
                      </p>
                      <p className="text-sm text-green-600 font-semibold mt-2">
                        ✓ Single booking = full journey distance counts!
                      </p>
                    </div>
                  </div>
                </div>
              </Card>

              <Card className="p-6 border-l-4 border-green-600">
                <div className="flex items-start space-x-4">
                  <div className="bg-green-100 p-3 rounded-full">
                    <span className="text-2xl font-bold text-green-600">3</span>
                  </div>
                  <div className="flex-1">
                    <h3 className="text-xl font-bold text-gray-900 mb-2">परिवार = गुणा मुआवज़ा</h3>
                    <p className="text-gray-700 mb-3">
                      प्रत्येक यात्री को <strong>अलग मुआवज़ा</strong> मिलता है। बच्चों सहित!
                    </p>
                    <div className="bg-green-50 p-4 rounded-lg">
                      <p className="text-sm text-gray-800 mb-2"><strong>उदाहरण:</strong></p>
                      <p className="text-sm text-gray-700">
                        4-सदस्यीय परिवार, दिल्ली → लंदन, 4 घंटे देरी:<br/>
                        • प्रति व्यक्ति: €600<br/>
                        • <strong>कुल परिवार:</strong> 4 × €600 = <strong className="text-green-600 text-xl">€2,400 (₹2,08,000)</strong>
                      </p>
                    </div>
                  </div>
                </div>
              </Card>

              <Card className="p-6 border-l-4 border-orange-600">
                <div className="flex items-start space-x-4">
                  <div className="bg-orange-100 p-3 rounded-full">
                    <span className="text-2xl font-bold text-orange-600">4</span>
                  </div>
                  <div className="flex-1">
                    <h3 className="text-xl font-bold text-gray-900 mb-2">"असाधारण परिस्थितियों" से इनकार करें</h3>
                    <p className="text-gray-700 mb-3">
                      एयरलाइनें अक्सर "असाधारण परिस्थितियों" का झूठा दावा करती हैं। <strong>95% समय वे गलत होती हैं!</strong>
                    </p>
                    <div className="bg-orange-50 p-4 rounded-lg">
                      <p className="text-sm text-gray-800 mb-2"><strong>सामान्य झूठ:</strong></p>
                      <ul className="text-sm text-gray-700 space-y-1">
                        <li>❌ "Technical issue" → <strong>आपका अधिकार है!</strong> (95% मामलों में)</li>
                        <li>❌ "Crew shortage" → <strong>आपका अधिकार है!</strong></li>
                        <li>❌ "Previous delay" → <strong>आपका अधिकार है!</strong></li>
                        <li>✅ केवल: severe weather, ATC strike, security = वैध</li>
                      </ul>
                      <p className="text-sm text-orange-600 font-semibold mt-2">
                        💡 संदेह होने पर, दावा करें! Burden of proof एयरलाइन पर है।
                      </p>
                    </div>
                  </div>
                </div>
              </Card>

              <Card className="p-6 border-l-4 border-red-600">
                <div className="flex items-start space-x-4">
                  <div className="bg-red-100 p-3 rounded-full">
                    <span className="text-2xl font-bold text-red-600">5</span>
                  </div>
                  <div className="flex-1">
                    <h3 className="text-xl font-bold text-gray-900 mb-2">विशेषज्ञ मदद का उपयोग करें</h3>
                    <p className="text-gray-700 mb-3">
                      DIY दावा = 15-30% सफलता। विशेषज्ञ के साथ = <strong>97% सफलता</strong>।
                    </p>
                    <div className="bg-red-50 p-4 rounded-lg">
                      <p className="text-sm text-gray-800 mb-2"><strong>क्यों विशेषज्ञ बेहतर हैं:</strong></p>
                      <ul className="text-sm text-gray-700 space-y-1">
                        <li>✓ एयरलाइन के झूठ का पता लगाते हैं</li>
                        <li>✓ कानूनी भाषा में पत्र तैयार करते हैं</li>
                        <li>✓ अदालत तक जाने को तैयार (यदि आवश्यक हो)</li>
                        <li>✓ समय बचाते हैं (6-12 महीने बनाम 45-60 दिन)</li>
                        <li>✓ कोई अग्रिम शुल्क नहीं — केवल सफलता पर भुगतान</li>
                      </ul>
                    </div>
                  </div>
                </div>
              </Card>
            </div>
          </section>

          {/* CTA #2 - Before FAQ */}
          <Card className="my-12 p-8 bg-gradient-to-br from-blue-50 via-green-50 to-purple-50 border-2 border-green-300">
            <div className="text-center">
              <Calculator className="h-16 w-16 text-green-600 mx-auto mb-4" />
              <h3 className="text-3xl font-bold text-gray-900 mb-4">
                अपना सटीक मुआवज़ा कैलकुलेट करें — मुफ्त!
              </h3>
              <p className="text-lg text-gray-700 mb-6 max-w-2xl mx-auto">
                2 मिनट में पता करें कि आप कितने मुआवज़े के हकदार हैं। हमारे विशेषज्ञ आपकी केस का विश्लेषण करेंगे और पूरी कानूनी प्रक्रिया संभालेंगे।
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center mb-6">
                <Button asChild size="lg" className="bg-green-600 hover:bg-green-700 text-lg px-8 py-6">
                  <a href="https://claimwinger.com/hi" target="_blank" rel="noopener noreferrer">
                    मुफ्त कैलकुलेटर शुरू करें →
                  </a>
                </Button>
                <Button asChild size="lg" variant="outline" className="border-2 border-green-600 text-green-600 hover:bg-green-50 text-lg px-8 py-6">
                  <a href="https://claimwinger.com/hi/deri-udaan" target="_blank" rel="noopener noreferrer">
                    देरी से उड़ान मुआवज़ा
                  </a>
                </Button>
              </div>
              <div className="grid md:grid-cols-3 gap-6 text-left">
                <div className="flex items-start space-x-3">
                  <CheckCircle2 className="h-6 w-6 text-green-600 flex-shrink-0 mt-1" />
                  <div>
                    <p className="font-bold text-gray-900">कोई अग्रिम लागत नहीं</p>
                    <p className="text-sm text-gray-600">केवल सफलता पर भुगतान</p>
                  </div>
                </div>
                <div className="flex items-start space-x-3">
                  <CheckCircle2 className="h-6 w-6 text-green-600 flex-shrink-0 mt-1" />
                  <div>
                    <p className="font-bold text-gray-900">97% सफलता दर</p>
                    <p className="text-sm text-gray-600">10,000+ केस जीते</p>
                  </div>
                </div>
                <div className="flex items-start space-x-3">
                  <CheckCircle2 className="h-6 w-6 text-green-600 flex-shrink-0 mt-1" />
                  <div>
                    <p className="font-bold text-gray-900">हिंदी में सहायता</p>
                    <p className="text-sm text-gray-600">भारतीय यात्रियों के लिए विशेषज्ञ</p>
                  </div>
                </div>
              </div>
            </div>
          </Card>

          {/* FAQ Section */}
          <section className="mt-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-8">अक्सर पूछे जाने वाले प्रश्न (FAQ)</h2>
            
            <div className="space-y-6">
              <Card className="p-6">
                <h3 className="text-xl font-bold text-gray-900 mb-3">
                  1. क्या मैं टिकट की कीमत से अधिक मुआवज़ा प्राप्त कर सकता हूं?
                </h3>
                <p className="text-gray-700">
                  <strong>हां, बिल्कुल!</strong> यह EC 261/2004 की सबसे शक्तिशाली विशेषता है। मुआवज़ा टिकट की कीमत पर आधारित नहीं है, बल्कि उड़ान की दूरी पर। एक €50 की टिकट भी €600 (₹52,000) का मुआवज़ा दे सकती है यदि उड़ान 3,500 km से अधिक है। हमारे ग्राहकों में से कई ने अपनी टिकट की कीमत से 10x अधिक मुआवज़ा प्राप्त किया है!
                </p>
              </Card>

              <Card className="p-6">
                <h3 className="text-xl font-bold text-gray-900 mb-3">
                  2. यदि एयरलाइन ने मुझे होटल और भोजन दिया, तो क्या मुझे अभी भी मुआवज़ा मिलेगा?
                </h3>
                <p className="text-gray-700">
                  <strong>हां!</strong> होटल, भोजन, और परिवहन EC 261/2004 के तहत "सहायता का अधिकार" है। यह नकद मुआवज़े से अलग है। यदि आपकी उड़ान में 3+ घंटे की देरी है या रद्द की गई है, तो आपको <strong>दोनों</strong> मिलना चाहिए: सहायता (होटल, भोजन) + नकद मुआवज़ा (€250-€600)।
                </p>
              </Card>

              <Card className="p-6">
                <h3 className="text-xl font-bold text-gray-900 mb-3">
                  3. क्या बच्चों को भी मुआवज़ा मिलता है?
                </h3>
                <p className="text-gray-700">
                  <strong>हां!</strong> प्रत्येक यात्री — वयस्क, बच्चे, शिशु (यदि उनके पास अलग सीट है) — को व्यक्तिगत मुआवज़े का अधिकार है। यदि परिवार में 4 सदस्य हैं और उड़ान में 3+ घंटे की देरी है, तो कुल मुआवज़ा 4x होगा (उदाहरण: 4 × €600 = €2,400)।
                </p>
              </Card>

              <Card className="p-6">
                <h3 className="text-xl font-bold text-gray-900 mb-3">
                  4. मैंने बजट एयरलाइन (Ryanair, Wizz Air) से टिकट खरीदी — क्या अभी भी पूरा मुआवज़ा मिलेगा?
                </h3>
                <p className="text-gray-700">
                  <strong>हां, 100%!</strong> EC 261/2004 <strong>सभी एयरलाइनों</strong> पर समान रूप से लागू होता है — चाहे वह Ryanair, Wizz Air, या Lufthansa हो। यहां तक कि €9.99 की Ryanair टिकट भी €250-€600 मुआवज़े की हकदार है यदि शर्तें पूरी होती हैं।
                </p>
              </Card>

              <Card className="p-6">
                <h3 className="text-xl font-bold text-gray-900 mb-3">
                  5. एयरलाइन ने कहा "तकनीकी समस्या" असाधारण परिस्थिति है — क्या यह सच है?
                </h3>
                <p className="text-gray-700">
                  <strong>लगभग हमेशा झूठ!</strong> यूरोपीय न्यायालय ने स्पष्ट किया है कि नियमित तकनीकी रखरखाव और अधिकांश खराबियां एयरलाइन की जिम्मेदारी हैं। केवल "छिपी हुई निर्माता दोष" (बेहद दुर्लभ) असाधारण हो सकती हैं। यदि एयरलाइन "technical issue" कहती है, तो <strong>फिर भी दावा करें</strong> — आपके पक्ष में मुआवज़ा मिलने की 85%+ संभावना है।
                </p>
              </Card>

              <Card className="p-6">
                <h3 className="text-xl font-bold text-gray-900 mb-3">
                  6. मुआवज़े का दावा करने की समय सीमा क्या है?
                </h3>
                <p className="text-gray-700">
                  यह उस देश पर निर्भर करता है जहां आप दावा करते हैं:
                </p>
                <ul className="list-disc pl-6 mt-2 space-y-1 text-gray-700">
                  <li><strong>UK:</strong> 6 साल</li>
                  <li><strong>जर्मनी:</strong> 3 साल</li>
                  <li><strong>फ्रांस:</strong> 5 साल</li>
                  <li><strong>पोलैंड:</strong> 1 साल</li>
                  <li><strong>स्पेन:</strong> 5 साल</li>
                </ul>
                <p className="mt-2 text-gray-700">
                  <strong>सलाह:</strong> जल्द से जल्द दावा करें (आदर्श रूप से उड़ान के 3 महीने के भीतर) — ताजा दस्तावेज बेहतर परिणाम देते हैं।
                </p>
              </Card>

              <Card className="p-6">
                <h3 className="text-xl font-bold text-gray-900 mb-3">
                  7. मैं कैसे साबित करूं कि मेरी उड़ान में देरी थी?
                </h3>
                <p className="text-gray-700">
                  आपको विस्तृत सबूत की आवश्यकता नहीं है। बुनियादी दस्तावेज पर्याप्त हैं:
                </p>
                <ul className="list-disc pl-6 mt-2 space-y-1 text-gray-700">
                  <li>बोर्डिंग पास (फोटो या PDF)</li>
                  <li>बुकिंग कन्फर्मेशन (ईमेल)</li>
                  <li>देरी/रद्दीकरण का सबूत (एयरलाइन ईमेल, SMS, या स्क्रीनशॉट)</li>
                </ul>
                <p className="mt-2 text-gray-700">
                  ClaimWinger जैसी सेवाएं आपकी ओर से आधिकारिक उड़ान डेटा सत्यापित करती हैं, इसलिए आपको चिंता करने की आवश्यकता नहीं है।
                </p>
              </Card>

              <Card className="p-6">
                <h3 className="text-xl font-bold text-gray-900 mb-3">
                  8. यदि मैं अकेले दावा करता हूं तो क्या मुझे अधिक पैसा मिलेगा?
                </h3>
                <p className="text-gray-700">
                  सिद्धांत में हां (कोई कमीशन नहीं), लेकिन <strong>व्यवहार में नहीं</strong>। यहां वास्तविकता है:
                </p>
                <div className="grid md:grid-cols-2 gap-4 mt-3">
                  <div className="bg-red-50 p-4 rounded-lg">
                    <h4 className="font-bold text-red-900 mb-2">DIY (अकेले):</h4>
                    <ul className="text-sm space-y-1 text-gray-700">
                      <li>✓ 100% राशि (यदि जीतते हैं)</li>
                      <li>❌ 15-30% सफलता दर</li>
                      <li>❌ 6-12 महीने प्रक्रिया</li>
                      <li>❌ बहुत समय/तनाव</li>
                    </ul>
                  </div>
                  <div className="bg-green-50 p-4 rounded-lg">
                    <h4 className="font-bold text-green-900 mb-2">ClaimWinger:</h4>
                    <ul className="text-sm space-y-1 text-gray-700">
                      <li>✓ 97% सफलता दर</li>
                      <li>✓ 45-60 दिन भुगतान</li>
                      <li>✓ कोई समय/तनाव नहीं</li>
                      <li>• 25% कमीशन (केवल यदि जीतते हैं)</li>
                    </ul>
                  </div>
                </div>
                <p className="text-gray-700 mt-3">
                  <strong>उदाहरण:</strong> DIY = 20% × €600 = €120 अपेक्षित मूल्य। ClaimWinger = 97% × €450 = €437 अपेक्षित मूल्य। ClaimWinger <strong>3.6x अधिक प्रभावी</strong> है!
                </p>
              </Card>
            </div>
          </section>

          {/* Related Articles */}
          <section className="mt-12 border-t pt-8">
            <h2 className="text-2xl font-bold text-gray-900 mb-6">संबंधित लेख</h2>
            <div className="grid md:grid-cols-2 gap-6">
              <Link href="/hi/blog/eu-regulation-261-2004-indian-passengers" className="group">
                <Card className="p-6 hover:shadow-lg transition-shadow">
                  <div className="flex items-center space-x-2 text-purple-600 mb-2">
                    <Plane className="h-5 w-5" />
                    <span className="font-semibold">कानूनी आधार</span>
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 group-hover:text-purple-600 transition-colors mb-2">
                    EC 261/2004 — भारतीय यात्रियों के लिए संपूर्ण गाइड
                  </h3>
                  <p className="text-gray-600 text-sm">
                    यूरोपीय यात्री अधिकारों का विस्तृत मार्गदर्शिका। अपने कानूनी अधिकारों को समझें।
                  </p>
                </Card>
              </Link>

              <Link href="/hi/blog/delhi-airport-der-se-flight" className="group">
                <Card className="p-6 hover:shadow-lg transition-shadow">
                  <div className="flex items-center space-x-2 text-blue-600 mb-2">
                    <MapPin className="h-5 w-5" />
                    <span className="font-semibold">हवाई अड्डे</span>
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 group-hover:text-blue-600 transition-colors mb-2">
                    दिल्ली हवाई अड्डा देरी — मुआवज़ा गाइड
                  </h3>
                  <p className="text-gray-600 text-sm">
                    दिल्ली IGI से देरी से उड़ान के लिए मुआवज़ा प्राप्त करने की पूरी प्रक्रिया।
                  </p>
                </Card>
              </Link>
            </div>
          </section>
        </div>
      </article>
    </LayoutHi>
  );
}
