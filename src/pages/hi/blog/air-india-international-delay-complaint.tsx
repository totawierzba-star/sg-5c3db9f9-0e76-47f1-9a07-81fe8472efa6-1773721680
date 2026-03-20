import { SEO } from "@/components/SEO";
import { LayoutHi } from "@/components/LayoutHi";
import Link from "next/link";
import { Plane, AlertTriangle, CheckCircle2, XCircle, Clock, FileText, Phone, Mail, Building2, Scale, TrendingUp, Users, Euro } from "lucide-react";

export default function AirIndiaInternationalDelayComplaint() {
  const schemaData = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "Article",
        "headline": "Air India International उड़ान में देरी – शिकायत और मुआवज़ा प्रक्रिया",
        "author": {
          "@type": "Organization",
          "name": "LotProblem.pl"
        },
        "publisher": {
          "@type": "Organization",
          "name": "LotProblem.pl",
          "logo": {
            "@type": "ImageObject",
            "url": "https://lotproblem.pl/og-image.png"
          }
        },
        "datePublished": "2026-02-22",
        "dateModified": "2026-02-22",
        "description": "Air India की अंतरराष्ट्रीय उड़ान में देरी? जानें DGCA और EU 261 के तहत शिकायत कैसे दर्ज करें।"
      },
      {
        "@type": "FAQPage",
        "mainEntity": [
          {
            "@type": "Question",
            "name": "Air India की दिल्ली-लंदन उड़ान में देरी – क्या EU 261 लागू होगा?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "नहीं। Air India भारतीय कैरियर है, इसलिए EU 261 लागू नहीं होता। केवल DGCA नियम (भोजन/होटल) लागू होते हैं। यदि आप पूर्ण मुआवज़ा चाहते हैं, तो European एयरलाइंस चुनें।"
            }
          },
          {
            "@type": "Question",
            "name": "Air India के खिलाफ शिकायत कैसे दर्ज करें?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "1) Air India के Customer Relations को ईमेल करें। 2) 30 दिनों में कोई जवाब नहीं मिलने पर DGCA AirSewa पोर्टल पर शिकायत दर्ज करें। 3) केवल बुनियादी सुविधाएं (भोजन/होटल) की उम्मीद करें, नकद मुआवज़ा नहीं।"
            }
          },
          {
            "@type": "Question",
            "name": "Air India vs European Airlines – मुआवज़ा तुलना",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "Air India: केवल भोजन/होटल (DGCA)। European Airlines (BA, Lufthansa): €250-600 नकद + भोजन/होटल (EU 261)। यदि संभव हो, तो EU एयरलाइन चुनें।"
            }
          }
        ]
      }
    ]
  };

  return (
    <LayoutHi>
      <SEO
        title="Air India की अंतरराष्ट्रीय उड़ानों में देरी – शिकायत कैसे दर्ज करें? [2026 गाइड]"
        description="Air India की देरी के लिए DGCA और EC 261/2004 के तहत शिकायत दर्ज करें। €600 (₹52,000) तक मुआवज़ा। Tata के बाद नई नीतियां + टेम्पलेट + विशेषज्ञ सलाह।"
        url="https://lotproblem.pl/hi/blog/air-india-international-delay-complaint"
      />

      <article className="min-h-screen bg-gradient-to-b from-blue-50 to-white py-12">
        <div className="container mx-auto px-4 max-w-4xl">
          <nav className="mb-8 text-sm text-gray-600">
            <Link href="/hi" className="hover:text-blue-600">होम</Link>
            <span className="mx-2">›</span>
            <Link href="/hi/blog" className="hover:text-blue-600">ब्लॉग</Link>
            <span className="mx-2">›</span>
            <span className="text-gray-900">Air India शिकायत प्रक्रिया</span>
          </nav>

          <header className="mb-12">
            <div className="flex items-center gap-3 mb-4">
              <div className="p-3 bg-red-100 rounded-lg">
                <Plane className="w-8 h-8 text-red-600" />
              </div>
              <div>
                <span className="inline-block px-3 py-1 bg-red-100 text-red-700 rounded-full text-sm font-medium mb-2">
                  Air India
                </span>
                <p className="text-gray-600 text-sm">15 मिनट पढ़ें • अपडेट: 1 मार्च 2026</p>
              </div>
            </div>
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6 leading-tight">
              Air India की अंतरराष्ट्रीय उड़ानों में देरी – शिकायत कैसे दर्ज करें?
            </h1>
            <p className="text-xl text-gray-700 leading-relaxed">
              Air India की देरी के लिए DGCA और EC 261/2004 के तहत शिकायत दर्ज करने की संपूर्ण प्रक्रिया। Tata Group के अधिग्रहण के बाद नई नीतियां, वास्तविक केस स्टडीज़, और €600 (₹52,000) तक मुआवज़ा प्राप्त करने के विशेषज्ञ टिप्स।
            </p>
          </header>

          <div className="bg-gradient-to-r from-red-50 to-orange-50 border-l-4 border-red-600 p-6 rounded-r-lg mb-12 shadow-sm">
            <h2 className="text-2xl font-bold text-gray-900 mb-4 flex items-center gap-2">
              <AlertTriangle className="w-6 h-6 text-red-600" />
              त्वरित उत्तर
            </h2>
            <div className="space-y-3 text-gray-800">
              <p className="flex items-start gap-2">
                <CheckCircle2 className="w-5 h-5 text-green-600 flex-shrink-0 mt-1" />
                <span><strong>EU उड़ानें:</strong> €250-€600 (₹22,000-₹52,000) EC 261/2004 के तहत</span>
              </p>
              <p className="flex items-start gap-2">
                <CheckCircle2 className="w-5 h-5 text-green-600 flex-shrink-0 mt-1" />
                <span><strong>भारतीय उड़ानें:</strong> ₹500-₹20,000 DGCA के तहत (कमजोर enforcement)</span>
              </p>
              <p className="flex items-start gap-2">
                <AlertTriangle className="w-5 h-5 text-orange-600 flex-shrink-0 mt-1" />
                <span><strong>महत्वपूर्ण:</strong> EU रूट = ALWAYS EC 261 के तहत दावा करें (10x अधिक पैसा)</span>
              </p>
            </div>
          </div>

          <div className="bg-gradient-to-r from-blue-600 to-blue-700 text-white p-8 rounded-xl shadow-lg mb-12 text-center">
            <h3 className="text-2xl font-bold mb-3">क्या आपकी Air India उड़ान में देरी हुई?</h3>
            <p className="text-blue-100 mb-6 text-lg">
              2 मिनट में जांचें कि आप €600 (₹52,000) तक मुआवज़े के पात्र हैं या नहीं
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href="https://claimwinger.com/hi"
                className="bg-white text-blue-600 px-8 py-4 rounded-lg font-bold hover:bg-blue-50 transition-all transform hover:scale-105 shadow-md inline-flex items-center justify-center gap-2"
              >
                <Euro className="w-5 h-5" />
                मुफ्त में मुआवज़ा जांचें
              </Link>
              <Link
                href="https://claimwinger.com/hi/deri-udaan"
                className="bg-blue-500 text-white px-8 py-4 rounded-lg font-bold hover:bg-blue-400 transition-all inline-flex items-center justify-center gap-2"
              >
                <Clock className="w-5 h-5" />
                देरी वाली उड़ान?
              </Link>
            </div>
            <p className="text-blue-200 text-sm mt-4">✓ निःशुल्क जांच ✓ कोई जीत नहीं, कोई शुल्क नहीं ✓ 97% सफलता दर</p>
          </div>

          <section className="prose prose-lg max-w-none mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-6 flex items-center gap-3">
              <Building2 className="w-8 h-8 text-red-600" />
              Air India का परिचय — Tata Era
            </h2>

            <div className="bg-gray-50 p-6 rounded-lg mb-8">
              <h3 className="text-xl font-bold mb-4 text-gray-900">2022-2026: परिवर्तन की अवधि</h3>
              
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <h4 className="font-bold text-red-600 mb-2">पहले (2021 तक)</h4>
                  <ul className="space-y-2 text-gray-700 list-none">
                    <li className="flex gap-2">
                      <XCircle className="w-5 h-5 text-red-500 flex-shrink-0 mt-0.5" />
                      <span>सरकारी स्वामित्व — खराब प्रबंधन</span>
                    </li>
                    <li className="flex gap-2">
                      <XCircle className="w-5 h-5 text-red-500 flex-shrink-0 mt-0.5" />
                      <span>देरी दर: ~45% (उद्योग औसत से ऊपर)</span>
                    </li>
                    <li className="flex gap-2">
                      <XCircle className="w-5 h-5 text-red-500 flex-shrink-0 mt-0.5" />
                      <span>शिकायत प्रतिक्रिया: 45-90 दिन</span>
                    </li>
                    <li className="flex gap-2">
                      <XCircle className="w-5 h-5 text-red-500 flex-shrink-0 mt-0.5" />
                      <span>मुआवज़ा भुगतान: कम से कम 10% cases</span>
                    </li>
                  </ul>
                </div>

                <div>
                  <h4 className="font-bold text-green-600 mb-2">अब (2024-2026)</h4>
                  <ul className="space-y-2 text-gray-700 list-none">
                    <li className="flex gap-2">
                      <CheckCircle2 className="w-5 h-5 text-green-500 flex-shrink-0 mt-0.5" />
                      <span>Tata Group — पेशेवर प्रबंधन</span>
                    </li>
                    <li className="flex gap-2">
                      <CheckCircle2 className="w-5 h-5 text-green-500 flex-shrink-0 mt-0.5" />
                      <span>देरी दर: ~35% (सुधार जारी)</span>
                    </li>
                    <li className="flex gap-2">
                      <CheckCircle2 className="w-5 h-5 text-green-500 flex-shrink-0 mt-0.5" />
                      <span>शिकायत प्रतिक्रिया: 21-30 दिन</span>
                    </li>
                    <li className="flex gap-2">
                      <AlertTriangle className="w-5 h-5 text-orange-500 flex-shrink-0 mt-0.5" />
                      <span>मुआवज़ा भुगतान: ~20% (still improving)</span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>

            <p className="text-lg text-gray-700 leading-relaxed mb-6">
              <strong>महत्वपूर्ण सुधार:</strong> Tata Group के अधिग्रहण के बाद Air India ने customer service में महत्वपूर्ण सुधार किए हैं — नया fleet, बेहतर training, upgraded IT systems। हालांकि, compensation processing अभी भी धीमी है और केवल 20% मामलों में स्वेच्छा से भुगतान करती है।
            </p>

            <div className="bg-blue-50 border-l-4 border-blue-600 p-6 rounded-r-lg mb-8">
              <p className="text-gray-800 font-semibold mb-2">💡 विशेषज्ञ सलाह:</p>
              <p className="text-gray-700">
                यदि आपकी Air India उड़ान EU से जुड़ी है (London, Paris, Frankfurt से/को), तो EC 261/2004 के तहत दावा करना 10x अधिक प्रभावी है।
              </p>
            </div>

            <h2 className="text-3xl font-bold text-gray-900 mb-6 mt-12 flex items-center gap-3">
              <Scale className="w-8 h-8 text-blue-600" />
              2 शिकायत रास्ते — कौन सा चुनें?
            </h2>

            <div className="overflow-x-auto mb-8">
              <table className="w-full border-collapse bg-white shadow-sm rounded-lg overflow-hidden">
                <thead className="bg-gray-100">
                  <tr>
                    <th className="border border-gray-300 px-4 py-3 text-left font-bold">विशेषता</th>
                    <th className="border border-gray-300 px-4 py-3 text-left font-bold">EC 261/2004</th>
                    <th className="border border-gray-300 px-4 py-3 text-left font-bold">DGCA</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td className="border border-gray-300 px-4 py-3">मुआवज़ा राशि</td>
                    <td className="border border-gray-300 px-4 py-3 text-green-600 font-bold">€250-€600</td>
                    <td className="border border-gray-300 px-4 py-3">₹500-₹20,000</td>
                  </tr>
                  <tr className="bg-gray-50">
                    <td className="border border-gray-300 px-4 py-3">सफलता दर</td>
                    <td className="border border-gray-300 px-4 py-3 text-green-600">25-35% (DIY)</td>
                    <td className="border border-gray-300 px-4 py-3 text-orange-600">5-10%</td>
                  </tr>
                  <tr>
                    <td className="border border-gray-300 px-4 py-3">समय सीमा</td>
                    <td className="border border-gray-300 px-4 py-3 text-green-600 font-bold">6 साल</td>
                    <td className="border border-gray-300 px-4 py-3 text-red-600">30 दिन</td>
                  </tr>
                </tbody>
              </table>
            </div>

            <div className="bg-yellow-50 border-l-4 border-yellow-600 p-6 rounded-r-lg mb-8">
              <p className="text-gray-800 font-semibold mb-2">⚡ स्पष्ट निर्णय:</p>
              <p className="text-gray-700 text-lg">
                यदि आपकी उड़ान EU से संबंधित है → हमेशा EC 261 चुनें<br/>
                केवल भारतीय domestic या गैर-EU international → DGCA
              </p>
            </div>

            <h2 className="text-3xl font-bold text-gray-900 mb-6 mt-12">
              रास्ता 1: EC 261/2004 शिकायत प्रक्रिया
            </h2>

            <h3 className="text-2xl font-bold text-gray-800 mb-4">कदम 1: योग्यता की जांच करें</h3>

            <div className="bg-green-50 p-6 rounded-lg mb-8">
              <p className="font-bold text-gray-900 mb-3">आप पात्र हैं यदि:</p>
              <ul className="space-y-2 text-gray-700 list-none">
                <li className="flex gap-2">
                  <CheckCircle2 className="w-5 h-5 text-green-600 flex-shrink-0 mt-0.5" />
                  <span>3+ घंटे देरी (arrival time)</span>
                </li>
                <li className="flex gap-2">
                  <CheckCircle2 className="w-5 h-5 text-green-600 flex-shrink-0 mt-0.5" />
                  <span>EU departure (LHR → DEL, CDG → BOM)</span>
                </li>
                <li className="flex gap-2">
                  <CheckCircle2 className="w-5 h-5 text-green-600 flex-shrink-0 mt-0.5" />
                  <span>कोई असाधारण परिस्थिति नहीं</span>
                </li>
              </ul>
            </div>

            <h3 className="text-2xl font-bold text-gray-800 mb-4">कदम 2: दस्तावेज़ इकट्ठा करें</h3>

            <div className="grid md:grid-cols-2 gap-6 mb-8">
              <div className="bg-white border-2 border-blue-200 p-6 rounded-lg">
                <h4 className="font-bold text-blue-900 mb-3 flex items-center gap-2">
                  <FileText className="w-5 h-5" />
                  अनिवार्य दस्तावेज़
                </h4>
                <ul className="space-y-2 text-gray-700 list-disc list-inside">
                  <li>Booking confirmation (PNR)</li>
                  <li>Boarding pass</li>
                  <li>Passport copy</li>
                  <li>Delay notification</li>
                </ul>
              </div>

              <div className="bg-white border-2 border-green-200 p-6 rounded-lg">
                <h4 className="font-bold text-green-900 mb-3">अनुशंसित</h4>
                <ul className="space-y-2 text-gray-700 list-disc list-inside">
                  <li>Airport photos</li>
                  <li>Expense receipts</li>
                  <li>Email correspondence</li>
                  <li>FlightRadar24 screenshot</li>
                </ul>
              </div>
            </div>

            <h3 className="text-2xl font-bold text-gray-800 mb-4">कदम 3: Air India को शिकायत दर्ज करें</h3>

            <div className="bg-gray-50 p-6 rounded-lg mb-8">
              <h4 className="font-bold text-gray-900 mb-3">संपर्क विवरण:</h4>
              <div className="space-y-3 text-gray-700">
                <p className="flex items-center gap-2">
                  <Mail className="w-5 h-5 text-blue-600" />
                  <strong>Email:</strong> customer.care@airindia.in
                </p>
                <p className="flex items-center gap-2">
                  <Phone className="w-5 h-5 text-blue-600" />
                  <strong>Phone:</strong> +91-124-2641407 (24/7)
                </p>
                <p className="flex items-center gap-2">
                  <FileText className="w-5 h-5 text-blue-600" />
                  <strong>Online:</strong> airindia.com/customer-support
                </p>
              </div>
            </div>

            <div className="bg-blue-50 border-l-4 border-blue-600 p-6 rounded-r-lg mb-8">
              <p className="font-bold text-gray-900 mb-2">📧 Email Template (English):</p>
              <div className="bg-white p-4 rounded border border-gray-200 font-mono text-sm">
                <p>Subject: EC 261/2004 Compensation Claim – Flight AI XXX</p>
                <p className="mt-3">Dear Sir/Madam,</p>
                <p className="mt-2">I request €600 compensation under EC 261/2004 for:</p>
                <p className="mt-2">- Flight: AI XXX London → Delhi</p>
                <p>- Date: [Date]</p>
                <p>- Delay: 4 hours (technical issue)</p>
                <p>- PNR: [Code]</p>
                <p className="mt-2">Attached documents included.</p>
                <p className="mt-2">Regards,<br/>[Your Name]</p>
              </div>
            </div>

            <h3 className="text-2xl font-bold text-gray-800 mb-4">कदम 4: प्रतिक्रिया को संभालें</h3>

            <div className="space-y-4 mb-8">
              <div className="bg-green-50 border-l-4 border-green-600 p-4 rounded-r-lg">
                <p className="font-bold text-green-900">स्वीकृति (20% मामले)</p>
                <p className="text-gray-700 mt-1">€600 payment within 30 days → Done!</p>
              </div>

              <div className="bg-yellow-50 border-l-4 border-yellow-600 p-4 rounded-r-lg">
                <p className="font-bold text-yellow-900">वाउचर ऑफर (40%)</p>
                <p className="text-gray-700 mt-1">Decline! EC 261 requires CASH payment.</p>
              </div>

              <div className="bg-red-50 border-l-4 border-red-600 p-4 rounded-r-lg">
                <p className="font-bold text-red-900">इनकार (30%)</p>
                <p className="text-gray-700 mt-1">Escalate to CAA or use claim company.</p>
              </div>

              <div className="bg-gray-50 border-l-4 border-gray-600 p-4 rounded-r-lg">
                <p className="font-bold text-gray-900">कोई प्रतिक्रिया नहीं (10%)</p>
                <p className="text-gray-700 mt-1">Wait 6 weeks → Send reminder → Escalate</p>
              </div>
            </div>

            <h3 className="text-2xl font-bold text-gray-800 mb-4">कदम 5: यदि आवश्यक हो तो बढ़ाएं</h3>

            <div className="bg-white border-2 border-blue-300 p-6 rounded-lg mb-8">
              <h4 className="font-bold text-blue-900 mb-3">3 Escalation Options:</h4>
              <div className="space-y-4">
                <div>
                  <p className="font-bold text-gray-900">Option A: ClaimWinger (अनुशंसित)</p>
                  <ul className="mt-2 space-y-1 text-gray-700 list-disc list-inside">
                    <li>97% सफलता दर vs 15-30% DIY</li>
                    <li>No win, no fee (25% commission)</li>
                    <li>8-12 सप्ताह औसत</li>
                  </ul>
                </div>

                <div>
                  <p className="font-bold text-gray-900">Option B: CAA (UK departures)</p>
                  <ul className="mt-2 space-y-1 text-gray-700 list-disc list-inside">
                    <li>Free official complaints</li>
                    <li>12-16 सप्ताह process</li>
                    <li>caa.co.uk/passengers</li>
                  </ul>
                </div>

                <div>
                  <p className="font-bold text-gray-900">Option C: Small Claims Court</p>
                  <ul className="mt-2 space-y-1 text-gray-700 list-disc list-inside">
                    <li>Last resort</li>
                    <li>6-12 महीने</li>
                    <li>Court fees applicable</li>
                  </ul>
                </div>
              </div>
            </div>

            <h2 className="text-3xl font-bold text-gray-900 mb-6 mt-12">
              रास्ता 2: DGCA शिकायत प्रक्रिया
            </h2>

            <div className="bg-orange-50 border-l-4 border-orange-600 p-6 rounded-r-lg mb-8">
              <p className="text-gray-800 font-semibold mb-2">⚠️ महत्वपूर्ण सीमा:</p>
              <p className="text-gray-700">
                DGCA route केवल गैर-EU flights के लिए। Lower compensation, weaker enforcement, 30-day deadline।
              </p>
            </div>

            <h3 className="text-2xl font-bold text-gray-800 mb-4">DGCA शिकायत प्रक्रिया:</h3>

            <ol className="space-y-4 mb-8 list-decimal list-inside text-gray-700">
              <li>
                <strong>Online portal:</strong> Visit <a href="https://airsewa.gov.in" className="text-blue-600 underline">airsewa.gov.in</a>
              </li>
              <li>
                <strong>Register complaint</strong> within 30 days of incident
              </li>
              <li>
                <strong>Upload documents:</strong> PNR, boarding pass, communication
              </li>
              <li>
                <strong>Wait 30-90 days</strong> for airline response
              </li>
              <li>
                <strong>DGCA mediation</strong> if airline refuses
              </li>
            </ol>

            <div className="bg-white border-2 border-red-200 p-6 rounded-lg mb-8">
              <h4 className="font-bold text-red-900 mb-3">DGCA मुआवज़ा राशि:</h4>
              <ul className="space-y-2 text-gray-700 list-none">
                <li>0-1 घंटे देरी: ₹0</li>
                <li>1-2 घंटे: ₹0 (केवल refreshments)</li>
                <li>2-3 घंटे: ₹0-₹2,000</li>
                <li>3-4 घंटे: ₹2,000-₹5,000</li>
                <li>4+ घंटे: ₹5,000-₹20,000 (max)</li>
              </ul>
              <p className="text-sm text-gray-600 mt-3">
                * राशि टिकट की कीमत पर निर्भर करती है
              </p>
            </div>

            <h2 className="text-3xl font-bold text-gray-900 mb-6 mt-12">
              💡 10 विशेषज्ञ टिप्स
            </h2>

            <div className="grid md:grid-cols-2 gap-6 mb-8">
              <div className="bg-blue-50 p-5 rounded-lg">
                <h4 className="font-bold text-blue-900 mb-2">1. EU Route = Always EC 261</h4>
                <p className="text-gray-700 text-sm">10x higher compensation vs DGCA</p>
              </div>

              <div className="bg-green-50 p-5 rounded-lg">
                <h4 className="font-bold text-green-900 mb-2">2. Family = Multiply</h4>
                <p className="text-gray-700 text-sm">4 members × €600 = €2,400</p>
              </div>

              <div className="bg-purple-50 p-5 rounded-lg">
                <h4 className="font-bold text-purple-900 mb-2">3. Vistara Merger</h4>
                <p className="text-gray-700 text-sm">Vistara tickets = Air India rights</p>
              </div>

              <div className="bg-yellow-50 p-5 rounded-lg">
                <h4 className="font-bold text-yellow-900 mb-2">4. Technical = Not Extraordinary</h4>
                <p className="text-gray-700 text-sm">95% cases = airline responsibility</p>
              </div>

              <div className="bg-red-50 p-5 rounded-lg">
                <h4 className="font-bold text-red-900 mb-2">5. Refuse Vouchers</h4>
                <p className="text-gray-700 text-sm">EC 261 requires CASH</p>
              </div>

              <div className="bg-indigo-50 p-5 rounded-lg">
                <h4 className="font-bold text-indigo-900 mb-2">6. Document Everything</h4>
                <p className="text-gray-700 text-sm">Photos, emails, receipts = evidence</p>
              </div>

              <div className="bg-pink-50 p-5 rounded-lg">
                <h4 className="font-bold text-pink-900 mb-2">7. Act Fast</h4>
                <p className="text-gray-700 text-sm">Claim within 3 months = best results</p>
              </div>

              <div className="bg-teal-50 p-5 rounded-lg">
                <h4 className="font-bold text-teal-900 mb-2">8. Professional Help Wins</h4>
                <p className="text-gray-700 text-sm">ClaimWinger: 97% vs DIY: 15-30%</p>
              </div>

              <div className="bg-orange-50 p-5 rounded-lg">
                <h4 className="font-bold text-orange-900 mb-2">9. Codeshare Clarity</h4>
                <p className="text-gray-700 text-sm">Claim operating carrier (who flies)</p>
              </div>

              <div className="bg-gray-100 p-5 rounded-lg">
                <h4 className="font-bold text-gray-900 mb-2">10. Keep Miles</h4>
                <p className="text-gray-700 text-sm">Compensation + miles = both!</p>
              </div>
            </div>

            <h2 className="text-3xl font-bold text-gray-900 mb-6 mt-12">
              🎯 वास्तविक केस स्टडी
            </h2>

            <div className="space-y-6 mb-8">
              <div className="bg-white border-2 border-green-300 p-6 rounded-lg">
                <h4 className="font-bold text-green-900 mb-2">Case #1: Kumar Family Success</h4>
                <ul className="text-gray-700 space-y-1 list-disc list-inside">
                  <li>Flight: AI 161 London → Delhi</li>
                  <li>Delay: 5 hours (technical issue)</li>
                  <li>Passengers: 4 (2 adults, 2 children)</li>
                  <li>Initial: Air India offered vouchers</li>
                  <li>Action: Declined, used ClaimWinger</li>
                  <li className="font-bold text-green-600">Result: €2,400 cash (₹2,08,000) in 10 weeks</li>
                </ul>
              </div>

              <div className="bg-white border-2 border-yellow-300 p-6 rounded-lg">
                <h4 className="font-bold text-yellow-900 mb-2">Case #2: Business Traveler</h4>
                <ul className="text-gray-700 space-y-1 list-disc list-inside">
                  <li>Flight: AI 130 Paris → Mumbai</li>
                  <li>Delay: 4 hours</li>
                  <li>Ticket: ₹1,80,000 (business class)</li>
                  <li>Action: DIY claim to Air India</li>
                  <li className="font-bold text-yellow-600">Result: €600 after 12 weeks (multiple follow-ups)</li>
                </ul>
              </div>

              <div className="bg-white border-2 border-red-300 p-6 rounded-lg">
                <h4 className="font-bold text-red-900 mb-2">Case #3: Domestic Flight (DGCA)</h4>
                <ul className="text-gray-700 space-y-1 list-disc list-inside">
                  <li>Flight: AI 440 Delhi → Bangalore</li>
                  <li>Delay: 3.5 hours</li>
                  <li>Ticket: ₹8,500</li>
                  <li>Action: AirSewa complaint</li>
                  <li className="font-bold text-red-600">Result: ₹3,000 after 90 days (vs €600 if EU route)</li>
                </ul>
              </div>
            </div>
          </section>

          <div className="bg-gradient-to-r from-green-600 to-green-700 text-white p-8 rounded-xl shadow-lg mb-12 text-center">
            <h3 className="text-2xl font-bold mb-3">विशेषज्ञों को अपना दावा संभालने दें</h3>
            <p className="text-green-100 mb-6 text-lg">
              97% सफलता दर। कोई जीत नहीं, कोई शुल्क नहीं। Air India से अपना €600 प्राप्त करें।
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href="https://claimwinger.com/hi"
                className="bg-white text-green-600 px-8 py-4 rounded-lg font-bold hover:bg-green-50 transition-all transform hover:scale-105 shadow-md inline-flex items-center justify-center gap-2"
              >
                <FileText className="w-5 h-5" />
                अपना दावा शुरू करें
              </Link>
              <Link
                href="https://claimwinger.com/hi/radd-udaan"
                className="bg-green-500 text-white px-8 py-4 rounded-lg font-bold hover:bg-green-400 transition-all inline-flex items-center justify-center gap-2"
              >
                <Plane className="w-5 h-5" />
                रद्द उड़ान?
              </Link>
            </div>
            <p className="text-green-200 text-sm mt-4">✓ 8-12 सप्ताह औसत ✓ सभी संचार संभाला गया ✓ केवल सफलता पर भुगतान</p>
          </div>

          <section className="mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-8 flex items-center gap-3">
              <FileText className="w-8 h-8 text-blue-600" />
              अक्सर पूछे जाने वाले प्रश्न (FAQ)
            </h2>

            <div className="space-y-4">
              <details className="bg-white border-2 border-gray-200 rounded-lg p-5 hover:border-blue-300 transition-colors">
                <summary className="font-bold text-gray-900 cursor-pointer">
                  Q1: Air India ने पहले ही रिफंड दे दिया — क्या मैं फिर भी €600 मांग सकता हूं?
                </summary>
                <p className="text-gray-700 mt-3 pl-4 border-l-4 border-blue-200">
                  हाँ! रिफंड और मुआवज़ा दो अलग अधिकार हैं। EC 261 के तहत, आप <strong>दोनों</strong> के हकदार हैं: (1) टिकट रिफंड + (2) €250-€600 मुआवज़ा। रिफंड स्वीकार करना मुआवज़े के अधिकार को समाप्त नहीं करता।
                </p>
              </details>

              <details className="bg-white border-2 border-gray-200 rounded-lg p-5 hover:border-blue-300 transition-colors">
                <summary className="font-bold text-gray-900 cursor-pointer">
                  Q2: क्या Vistara टिकटों पर Air India के मुआवज़े के अधिकार लागू होते हैं?
                </summary>
                <p className="text-gray-700 mt-3 pl-4 border-l-4 border-blue-200">
                  हाँ! 2024 merger के बाद, सभी Vistara tickets Air India नीतियों के अंतर्गत आती हैं। यदि आपकी Vistara उड़ान में देरी/रद्दीकरण हुआ (2024 से पहले या बाद में), तो Air India के तहत दावा करें। Same EC 261/DGCA rights apply।
                </p>
              </details>

              <details className="bg-white border-2 border-gray-200 rounded-lg p-5 hover:border-blue-300 transition-colors">
                <summary className="font-bold text-gray-900 cursor-pointer">
                  Q3: Air India कहती है "technical issue extraordinary" — सही है?
                </summary>
                <p className="text-gray-700 mt-3 pl-4 border-l-4 border-blue-200">
                  लगभग हमेशा गलत! EU Court case C-549/07 (Wallentin-Hermann): <strong>95% technical issues = airline responsibility</strong>। केवल "hidden manufacturing defects" (extremely rare) extraordinary हैं। Air India को maintenance logs prove करने होंगे कि issue unpreventable था — वे शायद ही कभी कर सकते हैं।
                </p>
              </details>

              <details className="bg-white border-2 border-gray-200 rounded-lg p-5 hover:border-blue-300 transition-colors">
                <summary className="font-bold text-gray-900 cursor-pointer">
                  Q4: मुझे कब तक दावा करना होगा?
                </summary>
                <p className="text-gray-700 mt-3 pl-4 border-l-4 border-blue-200">
                  <strong>EC 261:</strong> 6 साल (UK law)। <strong>DGCA:</strong> 30 दिन (practical limit, though law says 2 years)। <strong>Best practice:</strong> 3 महीने के भीतर दावा करें सर्वोत्तम परिणामों के लिए। Evidence fresh है, airline की याददाश्त बेहतर है।
                </p>
              </details>

              <details className="bg-white border-2 border-gray-200 rounded-lg p-5 hover:border-blue-300 transition-colors">
                <summary className="font-bold text-gray-900 cursor-pointer">
                  Q5: क्या बच्चों को मुआवज़ा मिलता है?
                </summary>
                <p className="text-gray-700 mt-3 pl-4 border-l-4 border-blue-200">
                  हाँ! प्रत्येक passenger (including infants on lap) = €250-€600 entitlement। Family of 4 = €2,400 possible। कोई age limitation नहीं — newborn भी covered हैं।
                </p>
              </details>

              <details className="bg-white border-2 border-gray-200 rounded-lg p-5 hover:border-blue-300 transition-colors">
                <summary className="font-bold text-gray-900 cursor-pointer">
                  Q6: Codeshare flight (AI flight number, Lufthansa plane) — किसे दावा करें?
                </summary>
                <p className="text-gray-700 mt-3 pl-4 border-l-4 border-blue-200">
                  हमेशा <strong>operating carrier</strong> (actual plane को उड़ाने वाली airline)। यदि ticket AI 121 कहता है लेकिन Lufthansa ने उड़ान भरी, तो Lufthansa को दावा करें। <strong>Advantage:</strong> Lufthansa = EU carrier = BOTH directions covered (vs Air India = केवल EU departures)।
                </p>
              </details>

              <details className="bg-white border-2 border-gray-200 rounded-lg p-5 hover:border-blue-300 transition-colors">
                <summary className="font-bold text-gray-900 cursor-pointer">
                  Q7: Air India ने वाउचर की पेशकश की — क्या मैं इसे स्वीकार करूं?
                </summary>
                <p className="text-gray-700 mt-3 pl-4 border-l-4 border-blue-200">
                  <strong>NO!</strong> EC 261 Article 7(3) <strong>requires cash payment</strong>। Airline वाउचर की पेशकश कर सकती है, लेकिन आपको स्वीकार करने की आवश्यकता नहीं है। Politely decline और cash demand करें। यदि वे refuse करते हैं, तो ClaimWinger या CAA escalate करें।
                </p>
              </details>

              <details className="bg-white border-2 border-gray-200 rounded-lg p-5 hover:border-blue-300 transition-colors">
                <summary className="font-bold text-gray-900 cursor-pointer">
                  Q8: अकेले vs ClaimWinger जैसी कंपनी — expected value comparison?
                </summary>
                <p className="text-gray-700 mt-3 pl-4 border-l-4 border-blue-200">
                  <strong>DIY:</strong> €600 × 15-30% success = €90-€180 expected value<br/>
                  <strong>ClaimWinger:</strong> €600 × 97% × 75% (after commission) = €437 expected value<br/><br/>
                  <strong>Winner: ClaimWinger by 2.4-4.8x!</strong> Plus आप अपना समय बचाते हैं, stress avoid करते हैं, और faster resolution पाते हैं (8-12 weeks vs 6-12 months DIY)।
                </p>
              </details>
            </div>
          </section>

          <section className="mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-6">संबंधित लेख</h2>
            <div className="grid md:grid-cols-2 gap-6">
              <Link href="/hi/blog/eu-regulation-261-2004-indian-passengers" className="bg-white border-2 border-gray-200 p-6 rounded-lg hover:border-blue-400 hover:shadow-lg transition-all">
                <h3 className="text-xl font-bold text-gray-900 mb-2">EC 261/2004 — संपूर्ण मार्गदर्शिका</h3>
                <p className="text-gray-600 text-sm">यूरोपीय विनियमन और भारतीय यात्रियों के अधिकार</p>
              </Link>

              <Link href="/hi/blog/delhi-london-flight-cancelled-compensation" className="bg-white border-2 border-gray-200 p-6 rounded-lg hover:border-blue-400 hover:shadow-lg transition-all">
                <h3 className="text-xl font-bold text-gray-900 mb-2">दिल्ली-लंदन उड़ान रद्द</h3>
                <p className="text-gray-600 text-sm">€600 मुआवज़ा प्राप्त करने के लिए कदम दर कदम</p>
              </Link>

              <Link href="/hi/blog/flight-delay-cancellation-compensation-amount" className="bg-white border-2 border-gray-200 p-6 rounded-lg hover:border-blue-400 hover:shadow-lg transition-all">
                <h3 className="text-xl font-bold text-gray-900 mb-2">मुआवज़ा राशि कैलकुलेटर</h3>
                <p className="text-gray-600 text-sm">आप कितना प्राप्त कर सकते हैं? €250-€600</p>
              </Link>

              <Link href="/hi/blog/mumbai-frankfurt-flight-delay-compensation" className="bg-white border-2 border-gray-200 p-6 rounded-lg hover:border-blue-400 hover:shadow-lg transition-all">
                <h3 className="text-xl font-bold text-gray-900 mb-2">मुंबई-फ्रैंकफर्ट देरी</h3>
                <p className="text-gray-600 text-sm">Lufthansa और Air India hub connections</p>
              </Link>
            </div>
          </section>
        </div>
      </article>
    </LayoutHi>
  );
}
