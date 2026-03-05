import { SEO } from "@/components/SEO";
import { LayoutHi } from "@/components/LayoutHi";
import Link from "next/link";
import { Shield, DollarSign, Clock, AlertTriangle, FileText, CheckCircle2, HelpCircle } from "lucide-react";

export default function CanadaAPPRIndianPassengers() {
  return (
    <LayoutHi>
      <SEO
        title="Canada के Air Passenger Protection Regulations (APPR) – भारतीय यात्रियों के लिए [2026]"
        description="कनाडा के हवाई यात्री सुरक्षा नियमों (APPR) का विस्तृत विवरण। देरी और रद्दीकरण के लिए CAD 1,000 (₹60,000) तक का मुआवज़ा। भारतीय छात्रों और प्रवासियों के लिए गाइड।"
        url="https://lotproblem.pl/hi/blog/canada-appr-indian-passengers"
      />

      <article className="min-h-screen bg-gradient-to-b from-red-50 to-white py-12">
        <div className="container mx-auto px-4 max-w-4xl">
          <nav className="mb-8 text-sm text-gray-600">
            <Link href="/hi" className="hover:text-red-600">होम</Link>
            <span className="mx-2">/</span>
            <Link href="/hi/blog" className="hover:text-red-600">ब्लॉग</Link>
            <span className="mx-2">/</span>
            <span className="text-gray-900">कनाडाई APPR गाइड</span>
          </nav>

          <header className="mb-12">
            <div className="flex items-center gap-4 mb-6">
              <div className="p-3 bg-red-100 rounded-lg">
                <Shield className="w-8 h-8 text-red-600" />
              </div>
              <div>
                <span className="inline-block px-3 py-1 bg-red-100 text-red-700 rounded-full text-xs font-semibold mb-2">
                  कनाडाई कानून (APPR)
                </span>
                <p className="text-gray-600 text-sm">12 मिनट पढ़ें • अपडेट: 2 मार्च 2026</p>
              </div>
            </div>
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6 leading-tight">
              Canada के Air Passenger Protection Regulations (APPR) – भारतीय यात्रियों के लिए
            </h1>
            <p className="text-xl text-gray-700 leading-relaxed">
              क्या आप जानते हैं कि कनाडा के कानून के तहत देरी या रद्दीकरण के लिए आपको CAD 1,000 (लगभग ₹60,000) तक मिल सकते हैं? यह गाइड भारतीय छात्रों, परिवारों और प्रवासियों के लिए है।
            </p>
          </header>

          <div className="bg-white border-l-4 border-red-600 p-6 rounded-r-lg shadow-sm mb-12">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">APPR क्या है? (What is APPR?)</h2>
            <p className="text-gray-700 mb-4">
              <strong>Air Passenger Protection Regulations (APPR)</strong> कनाडा का कानून है जो हवाई यात्रियों के अधिकारों की रक्षा करता है। यह 2019 में लागू हुआ और यह यूरोपीय संघ के EC 261 जैसा ही है, लेकिन कुछ अंतरों के साथ।
            </p>
            <div className="grid md:grid-cols-2 gap-4 mt-6">
              <div className="bg-red-50 p-4 rounded-lg">
                <h3 className="font-bold text-red-900 mb-2">यह कब लागू होता है?</h3>
                <ul className="list-disc list-inside text-sm text-gray-700 space-y-1">
                  <li>कनाडा से आने वाली सभी उड़ानें</li>
                  <li>कनाडा जाने वाली सभी उड़ानें (यदि कनाडाई एयरलाइन है)</li>
                  <li>कनाडा के भीतर घरेलू उड़ानें</li>
                </ul>
              </div>
              <div className="bg-red-50 p-4 rounded-lg">
                <h3 className="font-bold text-red-900 mb-2">यह कब लागू नहीं होता?</h3>
                <ul className="list-disc list-inside text-sm text-gray-700 space-y-1">
                  <li>सुरक्षा कारणों से देरी (Safety Reasons)</li>
                  <li>मौसम या ATC समस्याएं</li>
                  <li>गैर-कनाडाई एयरलाइन द्वारा कनाडा के लिए उड़ान (जैसे Air India DEL-YYZ)</li>
                </ul>
              </div>
            </div>
          </div>

          <div className="bg-gradient-to-r from-red-600 to-red-700 text-white p-8 rounded-xl shadow-lg mb-12 text-center">
            <h3 className="text-2xl font-bold mb-3">कनाडा की उड़ान में देरी?</h3>
            <p className="mb-6 text-red-100">Air Canada या WestJet से ₹60,000 तक का दावा करें।</p>
            <div className="flex flex-col sm:flex-row justify-center gap-4">
              <Link
                href="https://claimwinger.com/?utm_source=lotproblem&utm_medium=blog&utm_campaign=canada-appr"
                className="inline-flex items-center justify-center px-8 py-4 text-base font-bold text-red-700 bg-white rounded-full hover:bg-gray-100 transition-all shadow-lg transform hover:-translate-y-1"
              >
                <DollarSign className="w-5 h-5 mr-2" />
                मुआवज़ा जाँचें (Check Compensation)
              </Link>
            </div>
          </div>

          <section className="prose prose-lg max-w-none mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-6">मुआवज़ा राशि (Compensation Amounts)</h2>
            <p>
              मुआवज़ा इस बात पर निर्भर करता है कि आप अपनी मंजिल पर कितनी देरी से पहुंचे और एयरलाइन कितनी बड़ी है।
            </p>

            <div className="overflow-x-auto mb-8">
              <table className="w-full border-collapse bg-white shadow-sm rounded-lg overflow-hidden">
                <thead className="bg-gray-100">
                  <tr>
                    <th className="border p-3 text-left">देरी का समय</th>
                    <th className="border p-3 text-left">बड़ी एयरलाइन (Air Canada, WestJet)</th>
                    <th className="border p-3 text-left">छोटी एयरलाइन (Sunwing, Flair)</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td className="border p-3 font-bold">3 - 6 घंटे</td>
                    <td className="border p-3 text-green-600 font-bold">CAD 400 (₹24,000)</td>
                    <td className="border p-3">CAD 125 (₹7,500)</td>
                  </tr>
                  <tr className="bg-gray-50">
                    <td className="border p-3 font-bold">6 - 9 घंटे</td>
                    <td className="border p-3 text-green-600 font-bold">CAD 700 (₹42,000)</td>
                    <td className="border p-3">CAD 250 (₹15,000)</td>
                  </tr>
                  <tr>
                    <td className="border p-3 font-bold">9+ घंटे</td>
                    <td className="border p-3 text-green-600 font-bold">CAD 1,000 (₹60,000)</td>
                    <td className="border p-3">CAD 500 (₹30,000)</td>
                  </tr>
                </tbody>
              </table>
            </div>

            <h3 className="text-2xl font-bold text-gray-900 mt-8 mb-4">रिफंड के अधिकार (Refund Rights)</h3>
            <p>
              यदि उड़ान रद्द हो जाती है या 3 घंटे से अधिक की देरी होती है और आप यात्रा नहीं करना चाहते हैं, तो APPR के तहत आपको <strong>पूरा रिफंड</strong> पाने का अधिकार है। यह रिफंड उसी रूप में होना चाहिए जिस रूप में भुगतान किया गया था (जैसे क्रेडिट कार्ड, नकद)। <strong>वाउचर स्वीकार करने के लिए बाध्य न हों!</strong>
            </p>

            <h3 className="text-2xl font-bold text-gray-900 mt-8 mb-4">भोजन और होटल (Standards of Treatment)</h3>
            <p>
              भले ही देरी "सुरक्षा" या "मौसम" के कारण हो, एयरलाइन को आपको सहायता देनी ही होगी:
            </p>
            <ul className="space-y-2">
              <li className="flex items-start">
                <CheckCircle2 className="w-5 h-5 text-green-500 mr-2 mt-1" />
                <span><strong>भोजन और पेय:</strong> उचित मात्रा में, इंतज़ार के समय के अनुसार।</span>
              </li>
              <li className="flex items-start">
                <CheckCircle2 className="w-5 h-5 text-green-500 mr-2 mt-1" />
                <span><strong>होटल:</strong> यदि देरी रात भर की है (साथ में परिवहन भी)।</span>
              </li>
              <li className="flex items-start">
                <CheckCircle2 className="w-5 h-5 text-green-500 mr-2 mt-1" />
                <span><strong>संचार:</strong> वाई-फाई या कॉल की सुविधा।</span>
              </li>
            </ul>

            <div className="bg-yellow-50 border-l-4 border-yellow-500 p-6 my-8">
              <h3 className="font-bold text-yellow-800 flex items-center mb-2">
                <AlertTriangle className="w-5 h-5 mr-2" />
                सबसे बड़ी चुनौती: "Safety Reasons"
              </h3>
              <p className="text-yellow-900">
                कनाडाई एयरलाइंस अक्सर मुआवज़े से बचने के लिए देरी को "Safety Reasons" (सुरक्षा कारण) बता देती हैं। APPR में सुरक्षा कारणों के लिए नकद मुआवज़ा नहीं है।
              </p>
              <p className="text-yellow-900 mt-2 font-bold">
                समाधान: हमेशा सबूत मांगें। ClaimWinger जैसे विशेषज्ञ यह पता लगा सकते हैं कि क्या "सुरक्षा" कारण वास्तविक था या सिर्फ एक बहाना।
              </p>
            </div>
          </section>

          <div className="bg-gray-100 p-8 rounded-xl mb-12">
            <h2 className="text-2xl font-bold text-gray-900 mb-6">अक्सर पूछे जाने वाले प्रश्न (FAQ)</h2>
            <div className="space-y-6">
              <div>
                <h3 className="font-bold text-lg text-gray-900 mb-2">Q: क्या भारतीय नागरिकों पर APPR लागू होता है?</h3>
                <p className="text-gray-700">हाँ, बिल्कुल। APPR राष्ट्रीयता पर आधारित नहीं है। यदि आप कनाडा से/को उड़ान भर रहे हैं (योग्य उड़ान पर), तो आप सुरक्षित हैं।</p>
              </div>
              <div>
                <h3 className="font-bold text-lg text-gray-900 mb-2">Q: दावा करने की समय सीमा क्या है?</h3>
                <p className="text-gray-700">आपके पास दावा करने के लिए उड़ान की तारीख से <strong>1 वर्ष</strong> का समय है।</p>
              </div>
              <div>
                <h3 className="font-bold text-lg text-gray-900 mb-2">Q: Air Canada ने मुझे कूपन दिया। क्या मुझे लेना चाहिए?</h3>
                <p className="text-gray-700">सावधान रहें! यदि आप कूपन स्वीकार करते हैं, तो आप नकद मुआवज़े का अधिकार खो सकते हैं। हमेशा नकद (check/transfer) मांगें, जब तक कि कूपन का मूल्य नकद से बहुत अधिक न हो।</p>
              </div>
              <div>
                <h3 className="font-bold text-lg text-gray-900 mb-2">Q: क्या बच्चों को भी पूरा मुआवज़ा मिलता है?</h3>
                <p className="text-gray-700">हाँ, यदि उनके पास अपनी सीट (टिकट) है। शिशु जो गोद में यात्रा करते हैं (बिना सीट), वे आमतौर पर पात्र नहीं होते।</p>
              </div>
            </div>
          </div>

          <div className="text-center bg-red-50 p-8 rounded-xl border border-red-100">
            <h3 className="text-2xl font-bold text-gray-900 mb-4">कनाडा की उड़ान में समस्या?</h3>
            <p className="text-lg text-gray-700 mb-6">
              APPR दावे जटिल हो सकते हैं। हमारे विशेषज्ञ "सुरक्षा" के बहानों को चुनौती देना जानते हैं।
            </p>
            <Link
              href="https://claimwinger.com/?utm_source=lotproblem&utm_medium=blog&utm_campaign=canada-appr-bottom"
              className="inline-flex items-center justify-center px-8 py-4 text-base font-bold text-white bg-red-600 rounded-full hover:bg-red-700 transition-all shadow-lg"
            >
              अपना दावा शुरू करें (₹60,000 तक)
            </Link>
            <p className="text-xs text-gray-500 mt-4">97% सफलता दर। कोई जीत नहीं, कोई शुल्क नहीं।</p>
          </div>

        </div>
      </article>
    </LayoutHi>
  );
}