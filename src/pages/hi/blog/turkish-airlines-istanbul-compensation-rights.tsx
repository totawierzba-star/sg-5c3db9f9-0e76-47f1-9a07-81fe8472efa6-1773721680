import { SEO } from "@/components/SEO";
import { LayoutHi } from "@/components/LayoutHi";
import Link from "next/link";
import Image from "next/image";

export default function TurkishAirlinesCompensation() {
  return (
    <LayoutHi>
      <SEO
        title="Turkish Airlines और इस्तांबुल (IST) – क्या EU 261 मुआवज़ा लागू होता है? [2026]"
        description="Turkish Airlines के साथ देरी या रद्दीकरण? जानें कि इस्तांबुल (IST) हब EC 261 कानूनों को कैसे प्रभावित करता है। कब दावा करें और कब नहीं।"
        image="/images/turkish-airlines-compensation.jpg"
      />

      <article className="max-w-4xl mx-auto px-4 py-8">
        <header className="mb-10">
          <span className="text-red-600 font-semibold tracking-wider uppercase text-sm">
            एयरलाइन गाइड
          </span>
          <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mt-2 mb-4 leading-tight">
            Turkish Airlines और इस्तांबुल (IST) हब – क्या EU कानून लागू होता है?
          </h1>
          <div className="flex items-center text-gray-500 text-sm space-x-4">
            <span>पढ़ने का समय: 12 मिनट</span>
            <span>•</span>
            <span>अपडेट किया गया: मार्च 2026</span>
          </div>
        </header>

        <div className="prose prose-lg max-w-none text-gray-700">
          <p className="lead text-xl text-gray-600 mb-8 border-l-4 border-red-500 pl-4 italic">
            Turkish Airlines भारतीय यात्रियों के बीच यूरोप और उत्तरी अमेरिका के लिए एक लोकप्रिय विकल्प है। लेकिन सावधान रहें: तुर्की यूरोपीय संघ (EU) का हिस्सा नहीं है, जिसका अर्थ है कि आपके मुआवजे के अधिकार सीमित हो सकते हैं।
          </p>

          <div className="bg-yellow-50 p-6 rounded-lg mb-8 border border-yellow-200">
            <h3 className="text-lg font-bold text-yellow-800 mb-2">⚠️ त्वरित वास्तविकता जाँच:</h3>
            <ul className="space-y-2">
              <li className="flex items-start">
                <span className="mr-2">❌</span>
                <span><strong>DEL → IST → LHR:</strong> भारत से प्रस्थान पर EC 261 लागू <strong>नहीं</strong> होता (Non-EU carrier)।</span>
              </li>
              <li className="flex items-start">
                <span className="mr-2">✅</span>
                <span><strong>LHR → IST → DEL:</strong> यूके/यूरोप से प्रस्थान पर EC 261 लागू <strong>होता है</strong>।</span>
              </li>
              <li className="flex items-start">
                <span className="mr-2">⚠️</span>
                <span><strong>IST → JFK (USA):</strong> इस्तांबुल से प्रस्थान पर EC 261 लागू <strong>नहीं</strong> होता।</span>
              </li>
            </ul>
          </div>

          <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">
            तुर्की समस्या: भूगोल बनाम कानून
          </h2>
          <p className="mb-4">
            भौगोलिक रूप से, इस्तांबुल यूरोप और एशिया के बीच एक पुल है। लेकिन विमानन कानून में, <strong>तुर्की एक "तीसरा देश" (Non-EU Country) है</strong>।
          </p>
          <p className="mb-4">
            चूंकि Turkish Airlines (TK) एक यूरोपीय संघ की एयरलाइन नहीं है (जैसे Lufthansa या Air France हैं), इसलिए यह केवल तभी EC 261 के नियमों का पालन करने के लिए बाध्य है जब उड़ान <strong>EU/UK के हवाई अड्डे से प्रस्थान करती है</strong>।
          </p>

          <h3 className="text-xl font-bold text-gray-800 mt-6 mb-3">
            परिदृश्य 1: भारत से उड़ान (DEL/BOM → IST)
          </h3>
          <p className="mb-2">
            यदि आपकी उड़ान दिल्ली या मुंबई से देरी से चलती है या रद्द हो जाती है:
          </p>
          <ul className="list-disc pl-6 space-y-2 mb-6">
            <li><strong>लागू कानून:</strong> तुर्की यात्री अधिकार (SHY-PASSENGER) या भारतीय DGCA।</li>
            <li><strong>EC 261 मुआवज़ा (€600):</strong> ❌ नहीं मिलेगा।</li>
            <li><strong>देखभाल:</strong> भोजन और होटल मिल सकता है, लेकिन नकद मुआवजा मुश्किल है।</li>
          </ul>

          <h3 className="text-xl font-bold text-gray-800 mt-6 mb-3">
            परिदृश्य 2: यूरोप से वापसी (LHR/FRA/CDG → IST)
          </h3>
          <p className="mb-2">
            यदि आप लंदन, पेरिस या फ्रैंकफर्ट से अपनी यात्रा शुरू कर रहे हैं:
          </p>
          <ul className="list-disc pl-6 space-y-2 mb-6">
            <li><strong>लागू कानून:</strong> ✅ EC 261 / UK 261।</li>
            <li><strong>EC 261 मुआवज़ा (€600):</strong> ✅ हाँ, यदि देरी 3+ घंटे है।</li>
            <li><strong>क्यों?</strong> क्योंकि किसी भी एयरलाइन (भले ही वह Non-EU हो) को EU हवाई अड्डे से उड़ान भरते समय EU नियमों का पालन करना होता है।</li>
          </ul>

          <div className="bg-blue-50 p-6 rounded-lg mb-8">
            <h3 className="text-xl font-bold text-blue-800 mb-3">
              Turkish Airlines (SHY-PASSENGER) नियम क्या हैं?
            </h3>
            <p className="mb-4">
              तुर्की का अपना विनियमन है जिसे "SHY-PASSENGER" कहा जाता है। यह EU 261 के समान दिखता है, लेकिन इसमें एक बड़ी कमी है:
            </p>
            <p className="font-semibold text-red-600 mb-2">
              ⚠️ "तकनीकी खराबी" (Technical Faults) को अक्सर 'असाधारण' माना जाता है।
            </p>
            <p>
              EU में, तकनीकी खराबी के लिए एयरलाइन को भुगतान करना पड़ता है। तुर्की में, वे अक्सर इसे बहाने के रूप में उपयोग करते हैं और भुगतान नहीं करते हैं।
            </p>
          </div>

          <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">
            कनेक्टिंग फ्लाइट्स: इस्तांबुल (IST) में फँस गए?
          </h2>
          <p className="mb-4">
            यह सबसे आम समस्या है। आप दिल्ली से आए, लेकिन IST में आपकी अगली उड़ान (उदा. न्यूयॉर्क या लंदन के लिए) छूट गई।
          </p>

          <table className="w-full text-left border-collapse border border-gray-300 mb-6">
            <thead>
              <tr className="bg-gray-100">
                <th className="border border-gray-300 p-3">रूट (Route)</th>
                <th className="border border-gray-300 p-3">देरी का कारण</th>
                <th className="border border-gray-300 p-3">क्या पैसा मिलेगा?</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td className="border border-gray-300 p-3">DEL → IST (देरी) → LHR (मिस)</td>
                <td className="border border-gray-300 p-3">भारत से देरी</td>
                <td className="border border-gray-300 p-3">❌ ना (Non-EU departure)</td>
              </tr>
              <tr>
                <td className="border border-gray-300 p-3">LHR → IST (देरी) → DEL (मिस)</td>
                <td className="border border-gray-300 p-3">यूके से देरी</td>
                <td className="border border-gray-300 p-3">✅ हाँ (€600 तक)</td>
              </tr>
              <tr>
                <td className="border border-gray-300 p-3">IST → JFK (USA)</td>
                <td className="border border-gray-300 p-3">इस्तांबुल से देरी</td>
                <td className="border border-gray-300 p-3">❌ ना (Non-EU departure)</td>
              </tr>
            </tbody>
          </table>

          <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">
            Turkish Airlines से दावा कैसे करें?
          </h2>
          <p className="mb-4">
            Turkish Airlines दावों को अस्वीकार करने के लिए कुख्यात है। उनकी ग्राहक सेवा अक्सर आपको "feedback form" भरने के लिए कहेगी और फिर आपको एक सामान्य माफीनामा भेजेगी, पैसे नहीं।
          </p>
          
          <div className="bg-green-50 p-6 rounded-lg mb-8 border border-green-200">
            <h3 className="text-xl font-bold text-green-800 mb-3">
              🚀 ClaimWinger कैसे मदद कर सकता है?
            </h3>
            <p className="mb-4">
              चूंकि तुर्की कानून जटिल है और एयरलाइन सहयोग नहीं करती है, इसलिए पेशेवर मदद लेना सबसे अच्छा है।
            </p>
            <ul className="list-disc pl-6 space-y-2 mb-4">
              <li>हम तुर्की नागरिक उड्डयन प्राधिकरण (DGCA Turkey) के साथ सीधे संपर्क करते हैं।</li>
              <li>हम जानते हैं कि "SHY-PASSENGER" विनियमन को कैसे लागू किया जाए।</li>
              <li>सफलता दर: <strong>92%</strong> (बनाम 15% यदि आप स्वयं प्रयास करते हैं)।</li>
            </ul>
            <div className="mt-6 text-center">
              <Link
                href="https://claimwinger.com/pl/wniosek/"
                className="inline-block bg-green-600 text-white px-8 py-4 rounded-lg font-bold text-lg hover:bg-green-700 transition-colors shadow-lg"
              >
                Turkish Airlines दावा अभी शुरू करें
              </Link>
            </div>
          </div>

          <div className="border-t border-gray-200 mt-10 pt-6">
            <h3 className="text-xl font-bold text-gray-900 mb-4">
              अक्सर पूछे जाने वाले प्रश्न (FAQ)
            </h3>
            <div className="space-y-4">
              <details className="group bg-gray-50 rounded-lg">
                <summary className="flex justify-between items-center font-medium cursor-pointer list-none p-4">
                  <span>क्या Turkish Airlines भोजन और होटल प्रदान करती है?</span>
                  <span className="transition group-open:rotate-180">
                    <svg fill="none" height="24" shapeRendering="geometricPrecision" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewBox="0 0 24 24" width="24"><path d="M6 9l6 6 6-6"></path></svg>
                  </span>
                </summary>
                <div className="text-gray-600 mt-3 group-open:animate-fadeIn p-4 pt-0">
                  <p>हाँ। भले ही नकद मुआवजा न मिले, "देखभाल का अधिकार" (Right to Care) हमेशा लागू होता है। यदि आप इस्तांबुल में रात भर फँस जाते हैं, तो उन्हें आपको <strong>मुफ्त होटल, परिवहन और भोजन</strong> देना चाहिए। वे आमतौर पर हवाई अड्डे पर "Hotel Desk" पर वाउचर प्रदान करते हैं।</p>
                </div>
              </details>
              
              <details className="group bg-gray-50 rounded-lg">
                <summary className="flex justify-between items-center font-medium cursor-pointer list-none p-4">
                  <span>क्या मुझे मील (Miles) के बदले नकद लेना चाहिए?</span>
                  <span className="transition group-open:rotate-180">
                    <svg fill="none" height="24" shapeRendering="geometricPrecision" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewBox="0 0 24 24" width="24"><path d="M6 9l6 6 6-6"></path></svg>
                  </span>
                </summary>
                <div className="text-gray-600 mt-3 group-open:animate-fadeIn p-4 pt-0">
                  <p>हमेशा नकद (Cash) को प्राथमिकता दें। मील की कीमत बदलती रहती है और उन पर प्रतिबंध होते हैं। यदि Turkish Airlines आपको वाउचर प्रदान करती है, तो उसे स्वीकार करने से पहले जांच लें कि क्या आप नकद के हकदार हैं। एक बार वाउचर लेने के बाद, आप अक्सर नकद दावा करने का अधिकार खो देते हैं।</p>
                </div>
              </details>
            </div>
          </div>

        </div>
      </article>
    </LayoutHi>
  );
}
