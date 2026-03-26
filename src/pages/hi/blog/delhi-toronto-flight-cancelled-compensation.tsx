import { SEO } from "@/components/SEO";
import { LayoutHi } from "@/components/LayoutHi";
import Link from "next/link";
import { Plane, TrendingUp, AlertTriangle, CheckCircle2, XCircle, Info, Clock, DollarSign, Shield } from "lucide-react";

export default function DelhiTorontoFlightCancelledCompensation() {
  return (
    <LayoutHi>
      <SEO
        title="दिल्ली–टोरंटो उड़ान रद्द – कनाडाई APPR और EU नियम [2026]"
        description="Air Canada और Air India की रद्दीकरण नीतियों की तुलना। APPR के तहत CAD 1,000 (₹60,000) तक मुआवज़ा। यूरोप कनेक्शन (Lufthansa/British Airways) के फायदे।"
        url="https://problemlot.com/hi/blog/delhi-toronto-flight-cancelled-compensation"
      />

      <article className="min-h-screen bg-gradient-to-b from-red-50 to-white py-12">
        <div className="container mx-auto px-4 max-w-4xl">
          <nav className="mb-8 text-sm text-gray-600">
            <Link href="/hi" className="hover:text-red-600">होम</Link>
            <span className="mx-2">/</span>
            <Link href="/hi/blog" className="hover:text-red-600">ब्लॉग</Link>
            <span className="mx-2">/</span>
            <span className="text-gray-900">दिल्ली–टोरंटो उड़ान रद्द</span>
          </nav>

          <header className="mb-12">
            <div className="flex items-center gap-4 mb-6">
              <div className="p-3 bg-red-100 rounded-lg">
                <Plane className="w-8 h-8 text-red-600" />
              </div>
              <div>
                <span className="inline-block px-3 py-1 bg-red-100 text-red-700 rounded-full text-xs font-semibold mb-2">
                  कनाडाई रूट गाइड
                </span>
                <p className="text-gray-600 text-sm">15 मिनट पढ़ें • अपडेट: 2 मार्च 2026</p>
              </div>
            </div>
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6 leading-tight">
              दिल्ली–टोरंटो उड़ान रद्द – कनाडाई APPR और EU नियम
            </h1>
            <p className="text-xl text-gray-700 leading-relaxed">
              Air Canada और Air India के बीच चुनाव केवल कीमत का नहीं है - यह आपके अधिकारों का भी है। जानें कि कैसे एक ही रूट पर अलग-अलग कानूनों (APPR vs DGCA vs EC 261) के कारण मुआवज़ा राशि ₹5,000 से ₹60,000 तक बदल सकती है।
            </p>
          </header>

          <div className="bg-white border-l-4 border-red-600 p-6 rounded-r-lg shadow-sm mb-12">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">त्वरित तुलना (Quick Comparison)</h2>
            <div className="grid md:grid-cols-3 gap-6">
              <div className="p-4 bg-gray-50 rounded-lg">
                <h3 className="font-bold text-lg mb-2">Air Canada (Direct)</h3>
                <p className="text-sm text-gray-600 mb-2">लागू कानून: APPR (Canada)</p>
                <p className="text-green-600 font-bold text-xl">CAD 1,000 (₹60k)</p>
                <p className="text-xs text-gray-500 mt-1">शर्त: एयरलाइन के नियंत्रण में देरी</p>
              </div>
              <div className="p-4 bg-gray-50 rounded-lg">
                <h3 className="font-bold text-lg mb-2">Air India (Direct)</h3>
                <p className="text-sm text-gray-600 mb-2">लागू कानून: DGCA (India)</p>
                <p className="text-orange-600 font-bold text-xl">₹5,000 - ₹10,000</p>
                <p className="text-xs text-gray-500 mt-1">शर्त: रद्दीकरण &lt; 24 घंटे</p>
              </div>
              <div className="p-4 bg-gray-50 rounded-lg border-2 border-blue-100">
                <h3 className="font-bold text-lg mb-2">Lufthansa (via FRA)</h3>
                <p className="text-sm text-gray-600 mb-2">लागू कानून: EC 261 (EU)</p>
                <p className="text-blue-600 font-bold text-xl">€600 (₹52k)</p>
                <p className="text-xs text-gray-500 mt-1">शर्त: कोई भी देरी &gt; 3 घंटे</p>
              </div>
            </div>
          </div>

          <div className="bg-gradient-to-r from-red-600 to-red-700 text-white p-8 rounded-xl shadow-lg mb-12 text-center">
            <h3 className="text-2xl font-bold mb-3">टोरंटो उड़ान रद्द या देरी?</h3>
            <p className="mb-6 text-red-100">Air Canada और EU एयरलाइंस के लिए ₹60,000 तक का दावा करें।</p>
            <div className="flex flex-col sm:flex-row justify-center gap-4">
              <Link
                href="https://claimwinger.com/?utm_source=lotproblem&utm_medium=blog&utm_campaign=delhi-toronto-cancelled"
                className="inline-flex items-center justify-center px-8 py-4 text-base font-bold text-red-700 bg-white rounded-full hover:bg-gray-100 transition-all shadow-lg transform hover:-translate-y-1"
              >
                <DollarSign className="w-5 h-5 mr-2" />
                मुआवज़ा जाँचें (मुफ़्त)
              </Link>
            </div>
            <p className="text-red-200 text-sm mt-4">✓ 97% सफलता दर ✓ कोई जीत नहीं, कोई शुल्क नहीं</p>
          </div>

          <section className="prose prose-lg max-w-none mb-12">
            <h2>1. Air Canada (AC) – कनाडाई APPR नियम</h2>
            <p>
              जब आप Air Canada से उड़ान भरते हैं (चाहे दिल्ली से टोरंटो या वापसी), आप कनाडाई <strong>Air Passenger Protection Regulations (APPR)</strong> द्वारा सुरक्षित हैं। यह कानून दुनिया के सबसे सख्त कानूनों में से एक है।
            </p>
            
            <div className="bg-red-50 p-6 rounded-lg my-6">
              <h3 className="text-xl font-bold text-red-900 mb-4 flex items-center">
                <Shield className="w-6 h-6 mr-2" />
                APPR मुआवज़ा राशि (बड़ी एयरलाइनों के लिए)
              </h3>
              <ul className="space-y-3">
                <li className="flex items-start">
                  <Clock className="w-5 h-5 text-red-600 mr-2 mt-1" />
                  <span><strong>3-6 घंटे की देरी:</strong> CAD 400 (लगभग ₹24,000)</span>
                </li>
                <li className="flex items-start">
                  <Clock className="w-5 h-5 text-red-600 mr-2 mt-1" />
                  <span><strong>6-9 घंटे की देरी:</strong> CAD 700 (लगभग ₹42,000)</span>
                </li>
                <li className="flex items-start">
                  <Clock className="w-5 h-5 text-red-600 mr-2 mt-1" />
                  <span><strong>9+ घंटे की देरी:</strong> CAD 1,000 (लगभग ₹60,000)</span>
                </li>
              </ul>
              <p className="mt-4 text-sm text-red-800">
                <strong>शर्त:</strong> देरी एयरलाइन के नियंत्रण में होनी चाहिए (जैसे क्रू की कमी, रखरखाव) और सुरक्षा के लिए नहीं होनी चाहिए।
              </p>
            </div>

            <h2>2. Air India (AI) – भारतीय DGCA नियम</h2>
            <p>
              Air India की सीधी दिल्ली-टोरंटो उड़ान पर भारतीय DGCA नियम लागू होते हैं। दुर्भाग्य से, ये नियम यात्रियों के लिए कम उदार हैं।
            </p>
            <ul>
              <li><strong>रद्दीकरण (2 सप्ताह से कम):</strong> रिफंड या वैकल्पिक उड़ान + ₹5,000 से ₹10,000 (ब्लॉक समय के आधार पर)।</li>
              <li><strong>देरी (Delay):</strong> केवल भोजन और जलपान (यदि &gt; 2-4 घंटे)। नकद मुआवज़ा नहीं मिलता (जब तक कि अत्यधिक देरी न हो और रात भर रुकना न पड़े)।</li>
              <li><strong>होटल:</strong> यदि देरी 24 घंटे से अधिक है या रात भर है।</li>
            </ul>

            <h2>3. Lufthansa/British Airways (EU Connect) – EC 261 नियम</h2>
            <p>
              यह "स्मार्ट यात्री" का विकल्प है। यदि आप यूरोप (जैसे फ्रैंकफर्ट, लंदन, पेरिस) होकर टोरंटो जाते हैं और एयरलाइन EU की है (Lufthansa, Air France, KLM), तो आप <strong>EC 261/2004</strong> द्वारा सुरक्षित हैं।
            </p>
            
            <div className="bg-blue-50 p-6 rounded-lg my-6 border border-blue-200">
              <h3 className="text-xl font-bold text-blue-900 mb-4">EU स्टॉपओवर का जादुई फायदा</h3>
              <p className="mb-4">
                भले ही आपकी मंजिल कनाडा हो, यदि आपकी उड़ान EU एयरलाइन द्वारा संचालित है और किसी भी कारण से (तकनीकी, क्रू) 3+ घंटे की देरी होती है:
              </p>
              <div className="text-center p-4 bg-white rounded shadow-sm">
                <p className="text-3xl font-bold text-blue-600">€600 (₹52,000)</p>
                <p className="text-gray-600">फिक्स्ड नकद मुआवज़ा</p>
              </div>
              <p className="mt-4 text-sm text-blue-800">
                <strong>फायदा:</strong> EC 261 में "safety" के बहाने कम चलते हैं। तकनीकी खराबी = मुआवज़ा पक्का।
              </p>
            </div>

            <h2>Air Canada दावा प्रक्रिया (Claim Process)</h2>
            <p>
              Air Canada से दावा करना कठिन हो सकता है क्योंकि वे अक्सर "Safety Reasons" (सुरक्षा कारण) का हवाला देकर दावे खारिज कर देते हैं। APPR के तहत, सुरक्षा कारणों से हुई देरी के लिए मुआवज़ा नहीं मिलता।
            </p>
            <h3>आम बहाने (Common Excuses):</h3>
            <ul>
              <li><strong>"Unscheduled Maintenance":</strong> Air Canada इसे सुरक्षा कारण मानता है। (APPR में यह एक ग्रे एरिया है)।</li>
              <li><strong>"Crew Constraint due to Safety":</strong> अक्सर खारिज किया जाता है।</li>
            </ul>
            <p>
              यहीं पर पेशेवर मदद काम आती है। ClaimWinger जैसे विशेषज्ञ जानते हैं कि इन बहानों को कैसे चुनौती देनी है और कनाडा परिवहन एजेंसी (CTA) के पिछले निर्णयों का उपयोग कैसे करना है।
            </p>

            <div className="my-8">
              <h3 className="text-2xl font-bold mb-4">केस स्टडी: दिल्ली से टोरंटो (AC 43)</h3>
              <div className="bg-gray-50 p-6 rounded-lg">
                <p><strong>स्थिति:</strong> राहुल की AC 43 उड़ान 14 घंटे देरी से चली। कारण बताया गया "इंजन रखरखाव"।</p>
                <p><strong>पहला जवाब:</strong> Air Canada ने दावा खारिज किया - "Safety Reason"।</p>
                <p><strong>ClaimWinger कार्रवाई:</strong> APPR की धारा 12 का हवाला दिया और रखरखाव लॉग मांगे। साबित किया कि यह नियमित रखरखाव था जो ठीक से नहीं किया गया।</p>
                <p><strong>परिणाम:</strong> CAD 1,000 (₹60,000) का पूरा भुगतान।</p>
              </div>
            </div>
          </section>

          <div className="bg-gray-100 p-8 rounded-xl mb-12">
            <h2 className="text-2xl font-bold text-gray-900 mb-6">अक्सर पूछे जाने वाले प्रश्न (FAQ)</h2>
            <div className="space-y-6">
              <div>
                <h3 className="font-bold text-lg text-gray-900 mb-2">Q: क्या OCI कार्ड धारकों को भी समान अधिकार मिलते हैं?</h3>
                <p className="text-gray-700">हाँ! राष्ट्रीयता मायने नहीं रखती। यदि आपके पास कन्फर्म टिकट है, तो आप APPR (कनाडा) या EC 261 (यूरोप) के तहत सुरक्षित हैं।</p>
              </div>
              <div>
                <h3 className="font-bold text-lg text-gray-900 mb-2">Q: क्या मैं Air India की देरी के लिए कनाडा में शिकायत कर सकता हूँ?</h3>
                <p className="text-gray-700">नहीं। Air India एक भारतीय एयरलाइन है। दिल्ली से उड़ान भरने पर केवल DGCA नियम लागू होते हैं। हालांकि, यदि उड़ान टोरंटो से दिल्ली (AI 188) आ रही है, तो कनाडाई नियम लागू हो सकते हैं।</p>
              </div>
              <div>
                <h3 className="font-bold text-lg text-gray-900 mb-2">Q: Air Canada ने मुझे CAD 300 का वाउचर दिया। क्या मुझे लेना चाहिए?</h3>
                <p className="text-gray-700">नहीं! यदि देरी 9+ घंटे है, तो आप CAD 1,000 नकद के हकदार हैं। वाउचर स्वीकार करने से आप अपने कानूनी अधिकार खो सकते हैं। हमेशा नकद (चेक/बैंक ट्रांसफर) मांगें।</p>
              </div>
              <div>
                <h3 className="font-bold text-lg text-gray-900 mb-2">Q: दावा करने की समय सीमा क्या है?</h3>
                <p className="text-gray-700">कनाडा (APPR): 1 वर्ष। यूरोप (EC 261): देश के अनुसार 2-6 वर्ष (जर्मनी/यूके में लंबा)। भारत (DGCA): जितनी जल्दी हो सके (आदर्श रूप से 30 दिनों के भीतर)।</p>
              </div>
            </div>
          </div>

          <div className="text-center bg-blue-50 p-8 rounded-xl border border-blue-100">
            <h3 className="text-2xl font-bold text-gray-900 mb-4">क्या आपका टोरंटो दावा खारिज हो गया?</h3>
            <p className="text-lg text-gray-700 mb-6">
              Air Canada और यूरोपीय एयरलाइंस के दावों में विशेषज्ञता। हम "Safety Reasons" के बहानों को चुनौती देते हैं।
            </p>
            <Link
              href="https://claimwinger.com/?utm_source=lotproblem&utm_medium=blog&utm_campaign=delhi-toronto-bottom"
              className="inline-flex items-center justify-center px-8 py-4 text-base font-bold text-white bg-blue-600 rounded-full hover:bg-blue-700 transition-all shadow-lg"
            >
              अपना दावा शुरू करें (₹60,000 तक)
            </Link>
            <p className="text-xs text-gray-500 mt-4">सफलता नहीं, तो कोई फीस नहीं। 2 मिनट में जाँचें।</p>
          </div>

        </div>
      </article>
    </LayoutHi>
  );
}
