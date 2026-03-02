import { SEO } from "@/components/SEO";
import { LayoutHi } from "@/components/LayoutHi";
import Link from "next/link";
import { Plane, MapPin, AlertTriangle, CheckCircle2, XCircle, Euro, Clock, Users, TrendingUp, Scale, Building2 } from "lucide-react";

export default function DelhiDubaiFlightCancelledCompensation() {
  return (
    <LayoutHi>
      <SEO
        title="दिल्ली–दुबई उड़ान रद्द – UAE और भारत में मुआवज़े के नियम [2026]"
        description="दिल्ली-दुबई रूट पर रद्दीकरण के लिए मुआवज़ा। Emirates, Air India Express, और IndiGo के लिए विशिष्ट नीतियां। UAE GCAA बनाम भारतीय DGCA नियम। वास्तविक केस स्टडीज़।"
        url="https://lotproblem.pl/hi/blog/delhi-dubai-flight-cancelled-compensation"
      />

      <article className="min-h-screen bg-gradient-to-b from-orange-50 to-white py-12">
        <div className="container mx-auto px-4 max-w-4xl">
          <nav className="mb-8 text-sm text-gray-600">
            <Link href="/hi" className="hover:text-blue-600">होम</Link>
            <span className="mx-2">›</span>
            <Link href="/hi/blog" className="hover:text-blue-600">ब्लॉग</Link>
            <span className="mx-2">›</span>
            <span className="text-gray-900">दिल्ली-दुबई मुआवज़ा</span>
          </nav>

          <header className="mb-12">
            <div className="flex items-start gap-4 mb-6">
              <div className="p-3 bg-orange-100 rounded-lg">
                <Plane className="w-8 h-8 text-orange-600" />
              </div>
              <div>
                <span className="inline-block px-3 py-1 bg-orange-100 text-orange-700 rounded-full text-sm font-semibold mb-2">
                  Airport Guide
                </span>
                <p className="text-gray-600 text-sm">13 मिनट पढ़ें • अपडेट: 2 मार्च 2026</p>
              </div>
            </div>
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6 leading-tight">
              दिल्ली–दुबई उड़ान रद्द – UAE और भारत में मुआवज़े के नियम
            </h1>
            <p className="text-xl text-gray-700 leading-relaxed">
              दिल्ली (DEL) और दुबई (DXB) के बीच उड़ानें दुनिया में सबसे व्यस्त मार्गों में से एक हैं। रद्दीकरण या देरी की स्थिति में, आपके अधिकार इस बात पर निर्भर करते हैं कि आप किस दिशा में उड़ान भर रहे हैं और किस एयरलाइन के साथ। DGCA (भारत) बनाम GCAA (UAE) नियमों का विस्तृत विश्लेषण।
            </p>
          </header>

          <div className="bg-gradient-to-r from-orange-50 to-red-50 border-l-4 border-orange-600 p-6 rounded-r-lg mb-12 shadow-sm">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">💰 त्वरित स्थिति जाँच</h2>
            <div className="space-y-3">
              <p className="text-gray-800">
                <strong>दिल्ली से दुबई (DEL → DXB):</strong><br/>
                🇮🇳 <span className="text-orange-600 font-bold">DGCA नियम लागू</span><br/>
                💰 मुआवज़ा: ₹5,000 - ₹10,000 (या टिकट रिफंड) + भोजन/होटल
              </p>
              <p className="text-gray-800">
                <strong>दुबई से दिल्ली (DXB → DEL):</strong><br/>
                🇦🇪 <span className="text-green-600 font-bold">UAE GCAA नियम लागू</span> (Emirates/FlyDubai के लिए)<br/>
                💰 मुआवज़ा: AED 1,000 - 3,000 (सीमित प्रवर्तन)
              </p>
              <p className="text-gray-800">
                <strong>कनेक्टिंग उड़ान (उदा. DEL → DXB → LHR):</strong><br/>
                🇪🇺 <span className="text-blue-600 font-bold">EC 261 लागू नहीं</span> (जब तक कि EU carrier न हो)<br/>
                ⚠️ केवल आंशिक सुरक्षा
              </p>
            </div>
          </div>

          <div className="bg-gradient-to-r from-blue-600 to-orange-600 text-white p-8 rounded-xl shadow-lg mb-12 text-center">
            <h3 className="text-2xl font-bold mb-3">दुबई उड़ान में समस्या?</h3>
            <p className="text-lg mb-6 text-blue-100">
              अपनी स्थिति की जाँच करें - क्या आप मुआवजे के पात्र हैं?
            </p>
            <Link
              href="https://claimwinger.com/hi?utm_source=lotproblem&utm_medium=blog&utm_campaign=delhi-dubai"
              className="inline-flex items-center justify-center gap-2 bg-white text-orange-600 px-8 py-4 rounded-lg font-bold hover:bg-orange-50 transition-colors shadow-lg"
              target="_blank"
              rel="noopener noreferrer"
            >
              <CheckCircle2 className="w-5 h-5" />
              मुआवज़ा जाँचें (निःशुल्क)
            </Link>
          </div>

          <section className="prose prose-lg max-w-none mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-6 flex items-center gap-3">
              <Building2 className="w-8 h-8 text-orange-600" />
              इस रूट पर प्रमुख एयरलाइंस
            </h2>

            <div className="grid md:grid-cols-2 gap-6 mb-8">
              <div className="bg-white border p-6 rounded-lg shadow-sm">
                <h3 className="text-xl font-bold text-gray-900 mb-2">Emirates (EK)</h3>
                <p className="text-gray-600 mb-2">सबसे लोकप्रिय, प्रीमियम सेवा।</p>
                <ul className="text-sm space-y-1 text-gray-700">
                  <li>• DEL → DXB: 4x daily</li>
                  <li>• नियम: UAE GCAA + Montreal Convention</li>
                  <li>• मुआवज़ा: औसत भुगतान दर</li>
                </ul>
              </div>
              <div className="bg-white border p-6 rounded-lg shadow-sm">
                <h3 className="text-xl font-bold text-gray-900 mb-2">Air India (AI) / AI Express</h3>
                <p className="text-gray-600 mb-2">टाटा समूह के तहत सुधार।</p>
                <ul className="text-sm space-y-1 text-gray-700">
                  <li>• Frequency: 3-4x daily</li>
                  <li>• नियम: DGCA CAR Section 3</li>
                  <li>• मुआवज़ा: धीमी प्रक्रिया</li>
                </ul>
              </div>
              <div className="bg-white border p-6 rounded-lg shadow-sm">
                <h3 className="text-xl font-bold text-gray-900 mb-2">IndiGo (6E)</h3>
                <p className="text-gray-600 mb-2">बजट विकल्प, उच्च आवृत्ति।</p>
                <ul className="text-sm space-y-1 text-gray-700">
                  <li>• Frequency: 5x daily</li>
                  <li>• नियम: DGCA (Strictly followed)</li>
                  <li>• मुआवज़ा: केवल रिफंड/रीबुकिंग पर जोर</li>
                </ul>
              </div>
              <div className="bg-white border p-6 rounded-lg shadow-sm">
                <h3 className="text-xl font-bold text-gray-900 mb-2">SpiceJet (SG)</h3>
                <p className="text-gray-600 mb-2">बजट, लेकिन रद्दीकरण का उच्च जोखिम।</p>
                <ul className="text-sm space-y-1 text-gray-700">
                  <li>• Frequency: 2x daily</li>
                  <li>• नियम: DGCA</li>
                  <li>• मुआवज़ा: बहुत मुश्किल (वित्तीय समस्याएं)</li>
                </ul>
              </div>
            </div>

            <h2 className="text-3xl font-bold text-gray-900 mb-6 mt-12 flex items-center gap-3">
              <Scale className="w-8 h-8 text-blue-600" />
              नियम 1: दिल्ली से प्रस्थान (DEL → DXB)
            </h2>
            <p className="text-gray-700 mb-4">
              जब आप भारत से उड़ान भरते हैं, तो <strong>DGCA (Directorate General of Civil Aviation)</strong> के नियम लागू होते हैं (CAR Section 3, Series M, Part IV)। यह सभी एयरलाइनों (भारतीय और विदेशी) पर लागू होता है।
            </p>

            <div className="bg-orange-50 p-6 rounded-lg mb-6">
              <h3 className="text-xl font-bold text-gray-900 mb-3">रद्दीकरण (Cancellation) अधिकार:</h3>
              <ul className="space-y-2 text-gray-700">
                <li>
                  <strong>&lt; 24 घंटे नोटिस:</strong><br/>
                  वैकल्पिक उड़ान OR रिफंड + <span className="font-bold text-orange-600">₹10,000 तक मुआवज़ा</span>
                </li>
                <li>
                  <strong>&lt; 2 सप्ताह नोटिस:</strong><br/>
                  वैकल्पिक उड़ान OR रिफंड (कोई अतिरिक्त मुआवज़ा नहीं)
                </li>
                <li>
                  <strong>उड़ान के दौरान भोजन/नाश्ता:</strong><br/>
                  यदि हवाई अड्डे पर प्रतीक्षा &gt; 2-3 घंटे है।
                </li>
              </ul>
            </div>

            <h2 className="text-3xl font-bold text-gray-900 mb-6 mt-12 flex items-center gap-3">
              <Scale className="w-8 h-8 text-green-600" />
              नियम 2: दुबई से प्रस्थान (DXB → DEL)
            </h2>
            <p className="text-gray-700 mb-4">
              जब आप दुबई से उड़ान भरते हैं, तो नियम एयरलाइन की राष्ट्रीयता पर निर्भर करते हैं।
            </p>

            <div className="overflow-x-auto mb-8">
              <table className="w-full border-collapse bg-white shadow-sm rounded-lg overflow-hidden">
                <thead className="bg-gray-100">
                  <tr>
                    <th className="border px-4 py-2">एयरलाइन</th>
                    <th className="border px-4 py-2">लागू कानून</th>
                    <th className="border px-4 py-2">संभावित मुआवज़ा</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td className="border px-4 py-2 font-semibold">Emirates / FlyDubai</td>
                    <td className="border px-4 py-2">UAE Civil Aviation Law</td>
                    <td className="border px-4 py-2 text-green-600 font-bold">हाँ (सीमित)</td>
                  </tr>
                  <tr>
                    <td className="border px-4 py-2 font-semibold">Air India / IndiGo</td>
                    <td className="border px-4 py-2">DGCA (भारत)</td>
                    <td className="border px-4 py-2 text-orange-600 font-bold">हाँ (DGCA नियमों के अनुसार)</td>
                  </tr>
                </tbody>
              </table>
            </div>

            <div className="bg-green-50 p-6 rounded-lg mb-6">
              <h3 className="text-xl font-bold text-gray-900 mb-3">UAE कानून के तहत अधिकार:</h3>
              <ul className="space-y-2 text-gray-700">
                <li>• देरी {'>'}  4 घंटे: सहायता (भोजन, संचार)</li>
                <li>• रद्दीकरण: रिफंड या री-रूटिंग</li>
                <li>• &quot;Lost Chance&quot; या &quot;Moral Damage&quot; के लिए कोर्ट में दावा संभव (जटिल)</li>
              </ul>
            </div>

            <h2 className="text-3xl font-bold text-gray-900 mb-6 mt-12">💡 5 विशेषज्ञ टिप्स - दुबई रूट</h2>

            <div className="space-y-4">
              <div className="bg-gray-50 p-4 rounded-lg">
                <h4 className="font-bold text-gray-900">1. Connecting to Europe/USA?</h4>
                <p className="text-sm text-gray-700">
                  यदि आपकी अंतिम मंजिल यूरोप है (उदा. DEL-DXB-LHR) और आप Emirates से उड़ान भर रहे हैं, तो <span className="text-red-600">EC 261 लागू नहीं होता</span>। केवल वापसी उड़ान (LHR-DXB-DEL) पर €600 का कवर है।
                </p>
              </div>
              <div className="bg-gray-50 p-4 rounded-lg">
                <h4 className="font-bold text-gray-900">2. IndiGo/SpiceJet पर "No-Show" से बचें</h4>
                <p className="text-sm text-gray-700">
                  बजट एयरलाइंस रिफंड देने में सख्त होती हैं। यदि उड़ान रद्द होती है, तो तुरंत हवाई अड्डे पर 'Flight Interruption Certificate' मांगें।
                </p>
              </div>
              <div className="bg-gray-50 p-4 rounded-lg">
                <h4 className="font-bold text-gray-900">3. दस्तावेज़ ही सब कुछ है</h4>
                <p className="text-sm text-gray-700">
                  बोर्डिंग पास, ई-टिकट, और देरी/रद्दीकरण का SMS/Email सुरक्षित रखें। DGCA और UAE दोनों में सबूत जरूरी है।
                </p>
              </div>
              <div className="bg-gray-50 p-4 rounded-lg">
                <h4 className="font-bold text-gray-900">4. वाउचर स्वीकार न करें</h4>
                <p className="text-sm text-gray-700">
                  एयरलाइन अक्सर नकद के बजाय वाउचर देती है। जब तक कि यह नकद रिफंड से अधिक न हो और प्रतिबंध कम हों, नकद रिफंड पर जोर दें।
                </p>
              </div>
              <div className="bg-gray-50 p-4 rounded-lg">
                <h4 className="font-bold text-gray-900">5. दावा कैसे करें?</h4>
                <p className="text-sm text-gray-700">
                  एयरलाइन वेबसाइट > Customer Service > File a Complaint. यदि 30 दिनों में उत्तर न मिले, तो <Link href="https://claimwinger.com/hi" className="text-blue-600 hover:underline">ClaimWinger</Link> जैसी सेवा का उपयोग करें।
                </p>
              </div>
            </div>

            <h2 className="text-3xl font-bold text-gray-900 mb-6 mt-12">❓ FAQ</h2>
            <div className="space-y-6">
              <div className="bg-white border-l-4 border-blue-600 p-6 rounded-r-lg">
                <h3 className="text-lg font-bold text-gray-900 mb-2">Q: मेरी दिल्ली-दुबई उड़ान 6 घंटे लेट थी। क्या मुझे पैसा मिलेगा?</h3>
                <p className="text-gray-700">
                  <strong>A:</strong> DGCA नियमों के तहत, केवल भोजन और जलपान अनिवार्य है। नकद मुआवज़ा केवल रद्दीकरण या बोर्डिंग से इनकार (overbooking) के लिए है, साधारण देरी के लिए नहीं (जब तक कि यह बहुत लंबी न हो और एयरलाइन की गलती हो)।
                </p>
              </div>
              <div className="bg-white border-l-4 border-blue-600 p-6 rounded-r-lg">
                <h3 className="text-lg font-bold text-gray-900 mb-2">Q: Emirates ने मेरी उड़ान रद्द कर दी। क्या मैं €600 का दावा कर सकता हूँ?</h3>
                <p className="text-gray-700">
                  <strong>A:</strong> नहीं, भारत-दुबई रूट पर €600 (EC 261) लागू नहीं होता। यह केवल EU एयरपोर्ट से प्रस्थान या EU एयरलाइन के लिए है। आपको UAE या DGCA नियमों के तहत दावा करना होगा।
                </p>
              </div>
              <div className="bg-white border-l-4 border-blue-600 p-6 rounded-r-lg">
                <h3 className="text-lg font-bold text-gray-900 mb-2">Q: क्याClaimWinger भारत-दुबई दावों में मदद कर सकता है?</h3>
                <p className="text-gray-700">
                  <strong>A:</strong> हाँ, विशेष रूप से यदि कनेक्शन शामिल है या मामला जटिल है। वे एयरलाइन पर दबाव डालने में मदद कर सकते हैं।
                </p>
              </div>
            </div>

          </section>

          <div className="bg-gradient-to-r from-orange-600 to-red-600 text-white p-8 rounded-xl shadow-lg text-center">
            <h3 className="text-2xl font-bold mb-3">अपनी उड़ान की जाँच करें</h3>
            <p className="text-lg mb-6 text-orange-100">
              DGCA और अंतर्राष्ट्रीय कानूनों के तहत अपने अधिकारों को जानें।
            </p>
            <Link
              href="https://claimwinger.com/hi?utm_source=lotproblem&utm_medium=blog&utm_campaign=delhi-dubai-footer"
              className="inline-flex items-center justify-center gap-2 bg-white text-red-600 px-8 py-4 rounded-lg font-bold hover:bg-red-50 transition-colors shadow-lg"
              target="_blank"
              rel="noopener noreferrer"
            >
              <CheckCircle2 className="w-5 h-5" />
              दावा शुरू करें
            </Link>
          </div>

        </div>
      </article>
    </LayoutHi>
  );
}