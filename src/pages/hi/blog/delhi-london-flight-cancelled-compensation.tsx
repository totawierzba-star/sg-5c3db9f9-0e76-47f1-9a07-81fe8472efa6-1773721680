import { SEO } from "@/components/SEO";
import { LayoutHi } from "@/components/LayoutHi";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import Link from "next/link";
import { Plane, AlertTriangle, CheckCircle2, XCircle, Euro, Clock, FileText, Phone, Mail, Users, Calendar, MapPin } from "lucide-react";

export default function DelhiLondonFlightCancelledCompensation() {
  return (
    <LayoutHi>
      <SEO 
        title="दिल्ली–लंदन उड़ान रद्द — €600 मुआवज़े के लिए पूरी प्रक्रिया [2026]"
        description="दिल्ली-लंदन उड़ान रद्द होने पर €600 (₹52,000) मुआवज़ा कैसे प्राप्त करें। Air India, British Airways और Vistara के लिए विस्तृत गाइड। समय सीमा, दस्तावेज़ और विशेषज्ञ टिप्स।"
        canonicalUrl="https://lotproblem.pl/hi/blog/delhi-london-flight-cancelled-compensation"
      />

      <article className="max-w-4xl mx-auto px-4 py-12">
        {/* Breadcrumbs */}
        <nav className="flex items-center space-x-2 text-sm text-gray-600 mb-6">
          <Link href="/hi" className="hover:text-blue-600">होम</Link>
          <span>/</span>
          <Link href="/hi/blog" className="hover:text-blue-600">ब्लॉग</Link>
          <span>/</span>
          <span className="text-gray-900">दिल्ली-लंदन मुआवज़ा</span>
        </nav>

        {/* Article Header */}
        <header className="mb-8">
          <div className="flex items-center space-x-2 text-blue-600 font-semibold mb-4">
            <Plane className="h-5 w-5" />
            <span>ट्रैवल गाइड</span>
          </div>
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            दिल्ली–लंदन उड़ान रद्द: €600 मुआवज़े के लिए कदम दर कदम प्रक्रिया
          </h1>
          <div className="flex items-center space-x-4 text-gray-600">
            <time dateTime="2026-03-01">1 मार्च 2026</time>
            <span>•</span>
            <span>14 मिनट पठन</span>
          </div>
        </header>

        {/* Hero Content */}
        <div className="prose prose-lg max-w-none">
          <p className="text-xl text-gray-700 leading-relaxed">
            दिल्ली-लंदन भारत का सबसे व्यस्त अंतरराष्ट्रीय मार्ग है — हर साल <strong className="text-blue-600">2.5 मिलियन से अधिक यात्री</strong> इस रूट पर यात्रा करते हैं। यदि आपकी दिल्ली-लंदन उड़ान रद्द हो जाती है, तो आप <strong className="text-green-600">€600 (₹52,000) तक मुआवज़े के हकदार</strong> हो सकते हैं — यूरोपीय संघ विनियमन EC 261/2004 के तहत।
          </p>

          <p className="text-lg text-gray-700">
            यह संपूर्ण गाइड आपको बताएगी कि <strong>दिल्ली-लंदन रूट पर रद्दीकरण के लिए मुआवज़ा कैसे प्राप्त करें</strong> — Air India, British Airways, Vistara या किसी भी एयरलाइन के साथ। सभी कदम, आवश्यक दस्तावेज़, समय सीमा और विशेषज्ञ टिप्स।
          </p>

          {/* CTA #1 - After First Paragraph */}
          <Card className="my-8 p-6 bg-gradient-to-br from-blue-50 to-purple-50 border-2 border-blue-200">
            <div className="flex items-start space-x-4">
              <div className="bg-blue-600 p-3 rounded-lg">
                <Plane className="h-6 w-6 text-white" />
              </div>
              <div className="flex-1">
                <h3 className="text-xl font-bold text-gray-900 mb-2">
                  दिल्ली-लंदन उड़ान रद्द? तुरंत जांचें!
                </h3>
                <p className="text-gray-700 mb-4">
                  2 मिनट में पता करें कि आप €600 (₹52,000) के हकदार हैं या नहीं। <strong>100% निःशुल्क जांच, कोई छिपा शुल्क नहीं।</strong> 97% सफलता दर।
                </p>
                <Button asChild size="lg" className="w-full sm:w-auto bg-blue-600 hover:bg-blue-700">
                  <a href="https://claimwinger.com/hi/radd-udaan" target="_blank" rel="noopener noreferrer">
                    मुफ्त मुआवज़ा जांच — दिल्ली-लंदन →
                  </a>
                </Button>
                <p className="text-sm text-gray-600 mt-3">
                  ✓ कोई अग्रिम शुल्क नहीं  ✓ सफलता पर ही भुगतान  ✓ हिंदी सहायता
                </p>
              </div>
            </div>
          </Card>

          {/* Section 1: त्वरित तथ्य */}
          <section className="mt-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-6 flex items-center">
              <MapPin className="h-8 w-8 text-blue-600 mr-3" />
              दिल्ली-लंदन रूट: त्वरित तथ्य
            </h2>

            <div className="grid md:grid-cols-2 gap-6 mb-6">
              <Card className="p-6 border-2 border-blue-200">
                <div className="flex items-center space-x-3 mb-4">
                  <Plane className="h-8 w-8 text-blue-600" />
                  <h3 className="text-xl font-bold text-gray-900">मार्ग विवरण</h3>
                </div>
                <ul className="space-y-2 text-gray-700">
                  <li><strong>दूरी:</strong> ~6,700 km (great circle)</li>
                  <li><strong>उड़ान समय:</strong> 8-9 घंटे (non-stop)</li>
                  <li><strong>यात्री वार्षिक:</strong> 2.5M+</li>
                  <li><strong>मुख्य एयरलाइनें:</strong> AI, BA, Vistara, Virgin Atlantic</li>
                </ul>
              </Card>

              <Card className="p-6 border-2 border-green-200">
                <div className="flex items-center space-x-3 mb-4">
                  <Euro className="h-8 w-8 text-green-600" />
                  <h3 className="text-xl font-bold text-gray-900">मुआवज़े की राशि</h3>
                </div>
                <div className="space-y-2">
                  <p className="text-3xl font-bold text-green-600">€600</p>
                  <p className="text-xl text-gray-700">≈ ₹52,000</p>
                  <p className="text-sm text-gray-600">
                    दूरी: 6,700 km (&gt;3,500 km category)<br/>
                    EC 261/2004 अनुच्छेद 7(1)(c)
                  </p>
                </div>
              </Card>
            </div>

            <div className="bg-yellow-50 border-l-4 border-yellow-600 p-6">
              <div className="flex items-start space-x-3">
                <AlertTriangle className="h-6 w-6 text-yellow-600 flex-shrink-0 mt-1" />
                <div>
                  <h4 className="font-bold text-yellow-900 mb-2">क्यों दिल्ली-लंदन विशेष है?</h4>
                  <p className="text-gray-800">
                    यह रूट <strong>हमेशा EC 261/2004 के तहत कवर होता है</strong> — चाहे एयरलाइन कोई भी हो (Air India, Emirates, UAE airlines)। लंदन = EU departure, इसलिए सभी उड़ानें संरक्षित हैं। 🇬🇧
                  </p>
                </div>
              </div>
            </div>
          </section>

          {/* Section 2: कौन सी रद्दीकरण मुआवज़े के योग्य हैं? */}
          <section className="mt-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-6">
              कौन सी रद्दीकरण मुआवज़े के योग्य हैं?
            </h2>

            <div className="space-y-6">
              <Card className="p-6 border-l-4 border-green-600">
                <div className="flex items-start space-x-3">
                  <CheckCircle2 className="h-6 w-6 text-green-600 flex-shrink-0 mt-1" />
                  <div>
                    <h3 className="text-xl font-bold text-gray-900 mb-2">✅ हाँ — मुआवज़ा देय (€600)</h3>
                    <ul className="space-y-2 text-gray-700">
                      <li>• <strong>14 दिन से कम नोटिस</strong> के साथ रद्दीकरण (कोई कारण नहीं चाहिए)</li>
                      <li>• <strong>तकनीकी समस्याएं</strong> (mechanical failure, maintenance delay)</li>
                      <li>• <strong>क्रू की कमी</strong> (pilot/cabin crew sick, unavailable)</li>
                      <li>• <strong>पिछली उड़ान की देरी</strong> (aircraft rotation issue)</li>
                      <li>• <strong>एयरलाइन कर्मचारी हड़ताल</strong> (Air India, BA, Vistara staff strike)</li>
                      <li>• <strong>ऑपरेशनल कारण</strong> (catering, cleaning, fueling delay)</li>
                      <li>• <strong>बिना कारण रद्दीकरण</strong> (एयरलाइन ने कोई स्पष्टीकरण नहीं दिया)</li>
                    </ul>
                  </div>
                </div>
              </Card>

              <Card className="p-6 border-l-4 border-red-600">
                <div className="flex items-start space-x-3">
                  <XCircle className="h-6 w-6 text-red-600 flex-shrink-0 mt-1" />
                  <div>
                    <h3 className="text-xl font-bold text-gray-900 mb-2">❌ नहीं — असाधारण परिस्थितियाँ (कोई मुआवज़ा नहीं)</h3>
                    <ul className="space-y-2 text-gray-700">
                      <li>• <strong>गंभीर मौसम</strong> (hurricane, heavy snowstorm at London Heathrow)</li>
                      <li>• <strong>वायु यातायात नियंत्रण हड़ताल</strong> (NATS UK strike, Eurocontrol issues)</li>
                      <li>• <strong>राजनीतिक अस्थिरता</strong> (airport closure, airspace restrictions)</li>
                      <li>• <strong>सुरक्षा जोखिम</strong> (bomb threat, unruly passenger removal)</li>
                      <li>• <strong>Bird strike</strong> (जिसे routine maintenance से नहीं रोका जा सकता)</li>
                      <li>• <strong>Hidden manufacturing defect</strong> (extremely rare, airline must prove)</li>
                    </ul>
                  </div>
                </div>
              </Card>
            </div>

            <div className="bg-blue-50 border-l-4 border-blue-600 p-6 mt-6">
              <h4 className="font-bold text-lg text-blue-900 mb-2">⚖️ महत्वपूर्ण कानूनी बिंदु</h4>
              <p className="text-gray-800 mb-3">
                <strong>दिल्ली-लंदन रूट पर 85-90% रद्दीकरण "सामान्य" होते हैं</strong> (एयरलाइन की जिम्मेदारी), न कि "असाधारण"। यदि एयरलाइन "extraordinary circumstances" का दावा करती है:
              </p>
              <ul className="list-disc pl-6 space-y-1 text-gray-800">
                <li>उन्हें साबित करना होगा (आपको नहीं)</li>
                <li>वे विशिष्ट documentation प्रदान करें (NATS report, ATC letter)</li>
                <li>आप फिर भी दावा करें — विशेषज्ञ मूल्यांकन करेंगे</li>
              </ul>
            </div>
          </section>

          {/* Section 3: एयरलाइन-विशिष्ट जानकारी */}
          <section className="mt-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-6">
              प्रमुख एयरलाइनें: दिल्ली-लंदन रद्दीकरण
            </h2>

            <div className="space-y-6">
              <Card className="p-6 border-2 border-blue-200">
                <div className="flex items-start space-x-4">
                  <div className="bg-blue-600 p-3 rounded-lg">
                    <Plane className="h-8 w-8 text-white" />
                  </div>
                  <div className="flex-1">
                    <h3 className="text-2xl font-bold text-gray-900 mb-3">Air India (AI) — दिल्ली-लंदन</h3>
                    
                    <div className="grid md:grid-cols-2 gap-4 mb-4">
                      <div>
                        <p className="font-semibold text-gray-900 mb-1">मुख्य उड़ानें:</p>
                        <ul className="text-sm text-gray-700 space-y-1">
                          <li>• AI 161: DEL 14:00 → LHR 18:15</li>
                          <li>• AI 163: DEL 02:00 → LHR 06:45</li>
                          <li>• AI 115: DEL 17:30 → LHR 21:50</li>
                        </ul>
                      </div>
                      <div>
                        <p className="font-semibold text-gray-900 mb-1">EC 261/2004 कवरेज:</p>
                        <ul className="text-sm text-gray-700 space-y-1">
                          <li className="flex items-center space-x-2">
                            <CheckCircle2 className="h-4 w-4 text-green-600" />
                            <span>DEL → LHR: ✅ कवर (€600)</span>
                          </li>
                          <li className="flex items-center space-x-2">
                            <XCircle className="h-4 w-4 text-red-600" />
                            <span>LHR → DEL: ❌ नहीं (गैर-EU carrier, inbound)</span>
                          </li>
                        </ul>
                      </div>
                    </div>

                    <div className="bg-yellow-50 p-4 rounded-lg">
                      <p className="text-sm font-semibold text-yellow-900 mb-2">⚠️ Air India विशेष नोट:</p>
                      <ul className="text-sm text-gray-800 space-y-1">
                        <li>• <strong>Tata समूह अधिग्रहण (2022)</strong> के बाद reliability में सुधार</li>
                        <li>• फिर भी <strong>तकनीकी देरी/रद्दीकरण आम हैं</strong> (पुराने विमान)</li>
                        <li>• <strong>DGCA में शिकायत</strong> भी दर्ज करें (भारतीय नियम)</li>
                        <li>• ClaimWinger = €600 EU compensation + DGCA pressure</li>
                      </ul>
                    </div>
                  </div>
                </div>
              </Card>

              <Card className="p-6 border-2 border-red-200">
                <div className="flex items-start space-x-4">
                  <div className="bg-red-600 p-3 rounded-lg">
                    <Plane className="h-8 w-8 text-white" />
                  </div>
                  <div className="flex-1">
                    <h3 className="text-2xl font-bold text-gray-900 mb-3">British Airways (BA) — दिल्ली-लंदन</h3>
                    
                    <div className="grid md:grid-cols-2 gap-4 mb-4">
                      <div>
                        <p className="font-semibold text-gray-900 mb-1">मुख्य उड़ानें:</p>
                        <ul className="text-sm text-gray-700 space-y-1">
                          <li>• BA 142: DEL 03:10 → LHR 07:50</li>
                          <li>• BA 256: DEL 09:25 → LHR 14:00</li>
                        </ul>
                      </div>
                      <div>
                        <p className="font-semibold text-gray-900 mb-1">EC 261/2004 कवरेज:</p>
                        <ul className="text-sm text-gray-700 space-y-1">
                          <li className="flex items-center space-x-2">
                            <CheckCircle2 className="h-4 w-4 text-green-600" />
                            <span>DEL → LHR: ✅ कवर (€600)</span>
                          </li>
                          <li className="flex items-center space-x-2">
                            <CheckCircle2 className="h-4 w-4 text-green-600" />
                            <span>LHR → DEL: ✅ कवर (€600) — EU airline!</span>
                          </li>
                        </ul>
                      </div>
                    </div>

                    <div className="bg-green-50 p-4 rounded-lg">
                      <p className="text-sm font-semibold text-green-900 mb-2">✅ British Airways लाभ:</p>
                      <ul className="text-sm text-gray-800 space-y-1">
                        <li>• <strong>दोनों दिशाएं कवर</strong> (EU carrier = full EC 261 protection)</li>
                        <li>• आमतौर पर <strong>compensation claims का सम्मान करती है</strong></li>
                        <li>• <strong>UK261</strong> भी लागू (Brexit के बाद, EU261 जैसा ही)</li>
                        <li>• <strong>Better reliability</strong> Air India की तुलना में</li>
                      </ul>
                    </div>
                  </div>
                </div>
              </Card>

              <Card className="p-6 border-2 border-purple-200">
                <div className="flex items-start space-x-4">
                  <div className="bg-purple-600 p-3 rounded-lg">
                    <Plane className="h-8 w-8 text-white" />
                  </div>
                  <div className="flex-1">
                    <h3 className="text-2xl font-bold text-gray-900 mb-3">Vistara (UK) — दिल्ली-लंदन</h3>
                    
                    <div className="grid md:grid-cols-2 gap-4 mb-4">
                      <div>
                        <p className="font-semibold text-gray-900 mb-1">मुख्य उड़ानें:</p>
                        <ul className="text-sm text-gray-700 space-y-1">
                          <li>• UK 18: DEL 02:30 → LHR 07:00</li>
                          <li>• (Merging with Air India in 2024-2025)</li>
                        </ul>
                      </div>
                      <div>
                        <p className="font-semibold text-gray-900 mb-1">EC 261/2004 कवरेज:</p>
                        <ul className="text-sm text-gray-700 space-y-1">
                          <li className="flex items-center space-x-2">
                            <CheckCircle2 className="h-4 w-4 text-green-600" />
                            <span>DEL → LHR: ✅ कवर (€600)</span>
                          </li>
                          <li className="flex items-center space-x-2">
                            <XCircle className="h-4 w-4 text-red-600" />
                            <span>LHR → DEL: ❌ नहीं (गैर-EU carrier)</span>
                          </li>
                        </ul>
                      </div>
                    </div>

                    <div className="bg-orange-50 p-4 rounded-lg">
                      <p className="text-sm font-semibold text-orange-900 mb-2">⚠️ Vistara → Air India Merger:</p>
                      <p className="text-sm text-gray-800">
                        Vistara Air India में विलय हो रहा है (2024-25)। यदि आपकी बुकिंग Vistara थी लेकिन उड़ान Air India ने operate की, तो <strong>मुआवज़े के अधिकार बने रहते हैं</strong>। Operating carrier जिम्मेदार है।
                      </p>
                    </div>
                  </div>
                </div>
              </Card>

              <Card className="p-6 border-2 border-gray-200">
                <div className="flex items-start space-x-4">
                  <div className="bg-gray-600 p-3 rounded-lg">
                    <Plane className="h-8 w-8 text-white" />
                  </div>
                  <div className="flex-1">
                    <h3 className="text-2xl font-bold text-gray-900 mb-3">Virgin Atlantic (VS) — दिल्ली-लंदन</h3>
                    
                    <div className="grid md:grid-cols-2 gap-4 mb-4">
                      <div>
                        <p className="font-semibold text-gray-900 mb-1">मुख्य उड़ानें:</p>
                        <ul className="text-sm text-gray-700 space-y-1">
                          <li>• VS 300: DEL → LHR (seasonally)</li>
                        </ul>
                      </div>
                      <div>
                        <p className="font-semibold text-gray-900 mb-1">EC 261/2004 कवरेज:</p>
                        <ul className="text-sm text-gray-700 space-y-1">
                          <li className="flex items-center space-x-2">
                            <CheckCircle2 className="h-4 w-4 text-green-600" />
                            <span>DEL → LHR: ✅ कवर (€600)</span>
                          </li>
                          <li className="flex items-center space-x-2">
                            <CheckCircle2 className="h-4 w-4 text-green-600" />
                            <span>LHR → DEL: ✅ कवर (€600) — UK airline (UK261)</span>
                          </li>
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>
              </Card>
            </div>
          </section>

          {/* Section 4: कदम दर कदम प्रक्रिया */}
          <section className="mt-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-6">
              €600 मुआवज़ा प्राप्त करने के 5 कदम
            </h2>

            <div className="space-y-6">
              <Card className="p-6 border-l-4 border-blue-600">
                <div className="flex items-start space-x-4">
                  <div className="bg-blue-600 p-3 rounded-lg">
                    <span className="text-white font-bold text-2xl">1</span>
                  </div>
                  <div className="flex-1">
                    <h3 className="text-2xl font-bold text-gray-900 mb-3">हवाई अड्डे पर तुरंत कार्रवाई</h3>
                    
                    <div className="space-y-3">
                      <div>
                        <p className="font-semibold text-gray-900 mb-2">📸 सबूत इकट्ठा करें:</p>
                        <ul className="text-sm text-gray-700 space-y-1 pl-4">
                          <li>• <strong>Departure board फोटो</strong> (CANCELLED status के साथ)</li>
                          <li>• <strong>Boarding pass</strong> (original booking confirmation)</li>
                          <li>• <strong>Rescheduled ticket</strong> (यदि alternative flight दी गई)</li>
                          <li>• <strong>Hotel/meal vouchers</strong> (एयरलाइन द्वारा प्रदान)</li>
                          <li>• <strong>WhatsApp/SMS से alerts</strong> (cancellation notice)</li>
                        </ul>
                      </div>

                      <div>
                        <p className="font-semibold text-gray-900 mb-2">📝 एयरलाइन से पूछें:</p>
                        <ul className="text-sm text-gray-700 space-y-1 pl-4">
                          <li>• <strong>"रद्दीकरण का कारण क्या है?"</strong></li>
                          <li>• <strong>"क्या यह written confirmation में मिल सकता है?"</strong></li>
                          <li>• <strong>"मुझे कब सूचित किया गया?"</strong> (14-दिन rule)</li>
                        </ul>
                      </div>

                      <div className="bg-yellow-50 p-4 rounded-lg">
                        <p className="text-sm font-semibold text-yellow-900 mb-1">⚠️ सामान्य गलती से बचें:</p>
                        <p className="text-sm text-gray-800">
                          <strong>कभी भी वाउचर या "goodwill gesture" को मुआवज़े के रूप में accept नहीं करें।</strong> वाउचर (₹5,000-₹10,000) ≠ legal compensation (€600). दोनों के लिए entitled हैं!
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </Card>

              <Card className="p-6 border-l-4 border-green-600">
                <div className="flex items-start space-x-4">
                  <div className="bg-green-600 p-3 rounded-lg">
                    <span className="text-white font-bold text-2xl">2</span>
                  </div>
                  <div className="flex-1">
                    <h3 className="text-2xl font-bold text-gray-900 mb-3">एयरलाइन को औपचारिक पत्र भेजें</h3>
                    
                    <div className="space-y-3">
                      <p className="text-gray-700">
                        <strong>समय सीमा:</strong> cancellation के <strong>30 दिनों के भीतर</strong> (best practice)। कानूनी: 2-6 साल (देश पर निर्भर), लेकिन जल्द बेहतर।
                      </p>

                      <div>
                        <p className="font-semibold text-gray-900 mb-2">📧 पत्र में शामिल करें:</p>
                        <ul className="text-sm text-gray-700 space-y-1 pl-4">
                          <li>• आपका पूरा नाम + booking reference (PNR)</li>
                          <li>• उड़ान विवरण: AI 161 DEL-LHR, 1 March 2026</li>
                          <li>• रद्दीकरण का तथ्य + notification timing</li>
                          <li>• EC 261/2004 अनुच्छेद 5 और 7 का संदर्भ</li>
                          <li>• मुआवज़े की मांग: €600</li>
                          <li>• बैंक विवरण (IBAN, SWIFT, या UPI)</li>
                          <li>• 14-दिन deadline response के लिए</li>
                        </ul>
                      </div>

                      <div className="bg-blue-50 p-4 rounded-lg">
                        <p className="font-semibold text-blue-900 mb-2">✉️ कहां भेजें?</p>
                        <div className="text-sm text-gray-800 space-y-2">
                          <div>
                            <p className="font-semibold">Air India:</p>
                            <p>Email: customer.relations@airindia.in</p>
                            <p>Subject: "EU261 Compensation Claim – AI 161 DEL-LHR [Date] – [PNR]"</p>
                          </div>
                          <div>
                            <p className="font-semibold">British Airways:</p>
                            <p>Email: customer.relations@ba.com</p>
                            <p>Online: ba.com/contact → EU261 claim form</p>
                          </div>
                          <div>
                            <p className="font-semibold">Vistara:</p>
                            <p>Email: customer.relations@airvistara.com</p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </Card>

              <Card className="p-6 border-l-4 border-purple-600">
                <div className="flex items-start space-x-4">
                  <div className="bg-purple-600 p-3 rounded-lg">
                    <span className="text-white font-bold text-2xl">3</span>
                  </div>
                  <div className="flex-1">
                    <h3 className="text-2xl font-bold text-gray-900 mb-3">एयरलाइन की प्रतिक्रिया का मूल्यांकन करें</h3>
                    
                    <div className="space-y-3">
                      <p className="text-gray-700 mb-3">
                        एयरलाइन की संभावित 4 प्रतिक्रियाएं:
                      </p>

                      <div className="space-y-4">
                        <div className="flex items-start space-x-3">
                          <CheckCircle2 className="h-6 w-6 text-green-600 flex-shrink-0 mt-1" />
                          <div>
                            <p className="font-semibold text-green-900">✅ स्वीकृति (15-20% मामलों में):</p>
                            <p className="text-sm text-gray-700">
                              "हम आपके दावे को स्वीकार करते हैं। €600 आपके खाते में 7-10 दिनों में जमा होगा।"<br/>
                              → <strong className="text-green-600">जीत!</strong> कुछ नहीं करना है, payment की प्रतीक्षा करें।
                            </p>
                          </div>
                        </div>

                        <div className="flex items-start space-x-3">
                          <XCircle className="h-6 w-6 text-orange-600 flex-shrink-0 mt-1" />
                          <div>
                            <p className="font-semibold text-orange-900">⚠️ "असाधारण परिस्थितियों" का दावा (60% मामलों में):</p>
                            <p className="text-sm text-gray-700">
                              "रद्दीकरण technical issue/weather/ATC के कारण था — EC 261 लागू नहीं।"<br/>
                              → <strong className="text-orange-600">सावधान!</strong> 85% समय झूठा दावा है। विशेषज्ञ से confirm करें।
                            </p>
                          </div>
                        </div>

                        <div className="flex items-start space-x-3">
                          <XCircle className="h-6 w-6 text-red-600 flex-shrink-0 mt-1" />
                          <div>
                            <p className="font-semibold text-red-900">❌ सीधा अस्वीकार (15% मामलों में):</p>
                            <p className="text-sm text-gray-700">
                              "आपका दावा स्वीकार नहीं किया जाता।" (कोई स्पष्टीकरण नहीं)<br/>
                              → <strong className="text-red-600">आगे बढ़ें:</strong> Step 4 (National Enforcement Body)
                            </p>
                          </div>
                        </div>

                        <div className="flex items-start space-x-3">
                          <Clock className="h-6 w-6 text-gray-600 flex-shrink-0 mt-1" />
                          <div>
                            <p className="font-semibold text-gray-900">🔇 कोई प्रतिक्रिया नहीं (10% मामलों में):</p>
                            <p className="text-sm text-gray-700">
                              30+ दिन, कोई reply नहीं।<br/>
                              → <strong className="text-gray-600">Reminder भेजें,</strong> फिर Step 4
                            </p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </Card>

              <Card className="p-6 border-l-4 border-orange-600">
                <div className="flex items-start space-x-4">
                  <div className="bg-orange-600 p-3 rounded-lg">
                    <span className="text-white font-bold text-2xl">4</span>
                  </div>
                  <div className="flex-1">
                    <h3 className="text-2xl font-bold text-gray-900 mb-3">National Enforcement Body (NEB) में शिकायत</h3>
                    
                    <div className="space-y-3">
                      <p className="text-gray-700">
                        यदि एयरलाइन अस्वीकार करती है या respond नहीं करती, तो आप <strong>FREE official complaint</strong> दर्ज कर सकते हैं:
                      </p>

                      <div>
                        <p className="font-semibold text-gray-900 mb-2">🇬🇧 UK (British Airways, Virgin Atlantic):</p>
                        <div className="bg-gray-50 p-4 rounded-lg text-sm">
                          <p><strong>UK Civil Aviation Authority (CAA)</strong></p>
                          <p>Website: caa.co.uk/passengerrights</p>
                          <p>Form: Online complaint form</p>
                          <p>Timeline: CAA investigate करेगा, airline को respond करने के लिए force करेगा</p>
                        </div>
                      </div>

                      <div>
                        <p className="font-semibold text-gray-900 mb-2">🇮🇳 India (Air India, Vistara):</p>
                        <div className="bg-gray-50 p-4 rounded-lg text-sm">
                          <p><strong>DGCA (Directorate General of Civil Aviation)</strong></p>
                          <p>Website: dgca.gov.in → AirSewa portal</p>
                          <p>Email: avseccell@dgca.gov.in</p>
                          <p className="text-orange-600 font-semibold mt-2">⚠️ सीमा: DGCA केवल Indian law enforce करता है (lower compensation), लेकिन pressure बनाता है</p>
                        </div>
                      </div>

                      <div className="bg-blue-50 p-4 rounded-lg">
                        <p className="text-sm font-semibold text-blue-900 mb-2">💡 Pro Tip:</p>
                        <p className="text-sm text-gray-800">
                          <strong>दोनों में complaint दर्ज करें:</strong> CAA (EU261 €600) + DGCA (pressure + Indian law). Dual approach = higher success.
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </Card>

              <Card className="p-6 border-l-4 border-red-600">
                <div className="flex items-start space-x-4">
                  <div className="bg-red-600 p-3 rounded-lg">
                    <span className="text-white font-bold text-2xl">5</span>
                  </div>
                  <div className="flex-1">
                    <h3 className="text-2xl font-bold text-gray-900 mb-3">विशेषज्ञ मदद का उपयोग (सिफारिश)</h3>
                    
                    <div className="space-y-3">
                      <p className="text-gray-700">
                        <strong>वास्तविकता:</strong> DIY approach में <strong>15-30% सफलता दर</strong> है। Airlines जानती हैं कि अधिकांश यात्री step 2-3 के बाद हार मान लेते हैं।
                      </p>

                      <div className="grid md:grid-cols-2 gap-4">
                        <div className="bg-red-50 p-4 rounded-lg">
                          <p className="font-semibold text-red-900 mb-2">❌ DIY Challenges:</p>
                          <ul className="text-sm text-gray-800 space-y-1">
                            <li>• Airlines "extraordinary" झूठा दावा करती हैं</li>
                            <li>• Legal jargon समझना मुश्किल</li>
                            <li>• 6-12 महीने लग सकते हैं</li>
                            <li>• Court में जाना costly (lawyer fees)</li>
                            <li>• Stress + time investment</li>
                          </ul>
                        </div>

                        <div className="bg-green-50 p-4 rounded-lg">
                          <p className="font-semibold text-green-900 mb-2">✅ ClaimWinger Benefits:</p>
                          <ul className="text-sm text-gray-800 space-y-1">
                            <li>• <strong>97% सफलता दर</strong> (10,000+ cases won)</li>
                            <li>• <strong>45-60 दिन</strong> average payout</li>
                            <li>• <strong>Zero upfront cost</strong> (केवल success पर 25%)</li>
                            <li>• <strong>Hindi support</strong> specialist team</li>
                            <li>• Court में representation (यदि आवश्यक)</li>
                            <li>• <strong>No stress,</strong> experts handle everything</li>
                          </ul>
                        </div>
                      </div>

                      <div className="bg-purple-50 p-4 rounded-lg">
                        <p className="text-sm font-semibold text-purple-900 mb-2">💰 Expected Value Comparison:</p>
                        <div className="text-sm text-gray-800">
                          <p><strong>DIY:</strong> 20% × €600 = €120 expected (6-12 months, high stress)</p>
                          <p><strong>ClaimWinger:</strong> 97% × €600 × 75% = €436 expected (45-60 days, zero stress)</p>
                          <p className="text-purple-600 font-bold mt-2">→ ClaimWinger = €316 more in your pocket, faster & easier!</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </Card>
            </div>
          </section>

          {/* CTA #2 - Before FAQ */}
          <Card className="my-12 p-8 bg-gradient-to-br from-blue-50 via-purple-50 to-pink-50 border-2 border-blue-300">
            <div className="text-center">
              <Plane className="h-16 w-16 text-blue-600 mx-auto mb-4" />
              <h3 className="text-3xl font-bold text-gray-900 mb-4">
                दिल्ली-लंदन उड़ान रद्द? €600 के लिए आवेदन करें!
              </h3>
              <p className="text-lg text-gray-700 mb-6 max-w-2xl mx-auto">
                2 मिनट में पता करें कि क्या आप मुआवज़े के हकदार हैं। <strong>हमारे विशेषज्ञ आपकी ओर से पूरी प्रक्रिया संभालेंगे</strong> — zero stress, maximum success!
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center mb-6">
                <Button asChild size="lg" className="bg-blue-600 hover:bg-blue-700 text-lg px-8 py-6">
                  <a href="https://claimwinger.com/hi/radd-udaan" target="_blank" rel="noopener noreferrer">
                    मुफ्त मुआवज़ा जांच शुरू करें →
                  </a>
                </Button>
                <Button asChild size="lg" variant="outline" className="border-2 border-blue-600 text-blue-600 hover:bg-blue-50 text-lg px-8 py-6">
                  <a href="https://claimwinger.com/hi" target="_blank" rel="noopener noreferrer">
                    सभी उड़ानों के लिए मुआवज़ा
                  </a>
                </Button>
              </div>
              <div className="grid md:grid-cols-3 gap-6 text-left">
                <div className="flex items-start space-x-3">
                  <CheckCircle2 className="h-6 w-6 text-green-600 flex-shrink-0 mt-1" />
                  <div>
                    <p className="font-bold text-gray-900">Zero Risk</p>
                    <p className="text-sm text-gray-600">कोई अग्रिम लागत नहीं — केवल सफलता पर भुगतान</p>
                  </div>
                </div>
                <div className="flex items-start space-x-3">
                  <CheckCircle2 className="h-6 w-6 text-green-600 flex-shrink-0 mt-1" />
                  <div>
                    <p className="font-bold text-gray-900">97% Success</p>
                    <p className="text-sm text-gray-600">10,000+ cases won, ₹50 Crore+ recovered</p>
                  </div>
                </div>
                <div className="flex items-start space-x-3">
                  <CheckCircle2 className="h-6 w-6 text-green-600 flex-shrink-0 mt-1" />
                  <div>
                    <p className="font-bold text-gray-900">Hindi Support</p>
                    <p className="text-sm text-gray-600">भारतीय यात्रियों के लिए विशेषज्ञ टीम</p>
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
                  1. दिल्ली-लंदन उड़ान रद्दीकरण के लिए कितना समय लगता है मुआवज़ा प्राप्त करने में?
                </h3>
                <div className="text-gray-700 space-y-2">
                  <p><strong>DIY approach:</strong> 6-12 महीने (यदि सफल)</p>
                  <p><strong>ClaimWinger के साथ:</strong> 45-60 दिन average</p>
                  <p className="text-blue-600 font-semibold">
                    → हमारा fastest case: 21 दिन में €600 payout! (British Airways)
                  </p>
                </div>
              </Card>

              <Card className="p-6">
                <h3 className="text-xl font-bold text-gray-900 mb-3">
                  2. क्या मैं Air India और British Airways दोनों के लिए दावा कर सकता हूं यदि मेरी connecting flight थी?
                </h3>
                <p className="text-gray-700">
                  <strong>हाँ, लेकिन केवल एक बार।</strong> यदि आपकी booking single PNR थी (DEL-LHR-NYC, उदाहरण), तो:
                </p>
                <ul className="list-disc pl-6 mt-2 space-y-1 text-gray-700">
                  <li><strong>Operating carrier</strong> जिम्मेदार है (जो विमान उड़ाता है)</li>
                  <li>यदि AI DEL-LHR रद्द हुई → AI liable</li>
                  <li>यदि BA LHR-NYC रद्द हुई → BA liable</li>
                  <li><strong>दोनों segments delayed</strong> → जो "root cause" है वह liable</li>
                </ul>
                <p className="text-blue-600 font-semibold mt-2">
                  💡 ClaimWinger identifies correct liable carrier automatically!
                </p>
              </Card>

              <Card className="p-6">
                <h3 className="text-xl font-bold text-gray-900 mb-3">
                  3. यदि एयरलाइन कहती है "technical issue = extraordinary", तो क्या करें?
                </h3>
                <p className="text-gray-700 mb-3">
                  <strong>95% समय यह झूठ है!</strong> EU Court of Justice (ECJ) ने स्पष्ट किया है:
                </p>
                <div className="bg-red-50 border-l-4 border-red-600 p-4">
                  <p className="text-sm font-semibold text-red-900 mb-2">❌ "Technical" ≠ Extraordinary (अधिकांश मामलों में):</p>
                  <ul className="text-sm text-gray-800 space-y-1">
                    <li>• Routine maintenance = airline duty → <strong>compensation YES</strong></li>
                    <li>• Engine failure = airline responsibility → <strong>compensation YES</strong></li>
                    <li>• Hidden manufacturing defect = केवल यदि prove किया जाए → <strong>rare</strong></li>
                  </ul>
                </div>
                <p className="text-green-600 font-semibold mt-3">
                  ✅ Action: Don't accept airline's claim. File with ClaimWinger — we verify with technical experts + court precedents.
                </p>
              </Card>

              <Card className="p-6">
                <h3 className="text-xl font-bold text-gray-900 mb-3">
                  4. क्या मैं पुरानी (2+ साल पहले) रद्द की गई उड़ान के लिए दावा कर सकता हूं?
                </h3>
                <p className="text-gray-700 mb-2">
                  <strong>हाँ!</strong> लेकिन समय सीमा देश पर निर्भर करती है:
                </p>
                <div className="overflow-x-auto">
                  <table className="w-full text-sm border-collapse mt-3">
                    <thead className="bg-gray-200">
                      <tr>
                        <th className="p-3 text-left">Country</th>
                        <th className="p-3 text-left">Statute of Limitations</th>
                        <th className="p-3 text-left">Example</th>
                      </tr>
                    </thead>
                    <tbody className="divide-y">
                      <tr>
                        <td className="p-3"><strong>UK</strong></td>
                        <td className="p-3 text-green-600 font-bold">6 years</td>
                        <td className="p-3">British Airways, Virgin Atlantic</td>
                      </tr>
                      <tr>
                        <td className="p-3"><strong>Germany</strong></td>
                        <td className="p-3 text-green-600 font-bold">3 years</td>
                        <td className="p-3">Lufthansa (if operated by LH)</td>
                      </tr>
                      <tr>
                        <td className="p-3"><strong>Poland</strong></td>
                        <td className="p-3 text-orange-600 font-bold">1 year</td>
                        <td className="p-3">LOT Polish Airlines</td>
                      </tr>
                      <tr>
                        <td className="p-3"><strong>India (DGCA)</strong></td>
                        <td className="p-3 text-red-600 font-bold">30 days</td>
                        <td className="p-3">Air India (Indian law only)</td>
                      </tr>
                    </tbody>
                  </table>
                </div>
                <p className="text-blue-600 font-semibold mt-3">
                  💡 ClaimWinger checks: Even if airline says "too late", EU law may still apply!
                </p>
              </Card>

              <Card className="p-6">
                <h3 className="text-xl font-bold text-gray-900 mb-3">
                  5. क्या मैं परिवार के बच्चों को भी €600 मिलेगा?
                </h3>
                <p className="text-gray-700">
                  <strong>हाँ, absolutely!</strong> EC 261 के तहत, <strong>सभी यात्रियों को समान मुआवज़ा</strong> मिलता है — उम्र की परवाह किए बिना।
                </p>
                <div className="bg-green-50 p-4 rounded-lg mt-3">
                  <p className="font-semibold text-green-900 mb-2">✅ परिवार उदाहरण:</p>
                  <p className="text-sm text-gray-800">
                    4 सदस्य (2 adults + 2 kids, ages 5 और 8) × €600 = <strong className="text-green-600 text-lg">€2,400 (₹2,08,000)</strong>
                  </p>
                  <p className="text-sm text-gray-800 mt-2">
                    यहां तक कि <strong>infants</strong> (lap children, कोई अलग seat नहीं) भी entitled हैं!
                  </p>
                </div>
              </Card>

              <Card className="p-6">
                <h3 className="text-xl font-bold text-gray-900 mb-3">
                  6. यदि एयरलाइन ने मुझे alternative flight दी, तो क्या मुझे €600 मिलेगा?
                </h3>
                <p className="text-gray-700 mb-3">
                  <strong>निर्भर करता है</strong> कि alternative flight कितनी देर से पहुंची:
                </p>
                <div className="space-y-3">
                  <div className="bg-green-50 border-l-4 border-green-600 p-4">
                    <p className="font-semibold text-green-900 mb-1">✅ Full €600 (100%):</p>
                    <p className="text-sm text-gray-800">
                      Alternative flight निर्धारित समय से <strong>4+ घंटे देर से</strong> पहुंची<br/>
                      Example: Original DEL 14:00 → LHR 18:15. Rebooked DEL 20:00 → LHR 01:00 (next day).
                    </p>
                  </div>
                  <div className="bg-orange-50 border-l-4 border-orange-600 p-4">
                    <p className="font-semibold text-orange-900 mb-1">⚡ Reduced €300 (50%):</p>
                    <p className="text-sm text-gray-800">
                      Alternative flight निर्धारित समय से <strong>less than 4 घंटे</strong> देर से पहुंची<br/>
                      Example: Original 18:15, arrived 22:00 (3h 45min delay) = €300.
                    </p>
                  </div>
                  <div className="bg-red-50 border-l-4 border-red-600 p-4">
                    <p className="font-semibold text-red-900 mb-1">❌ Zero €0:</p>
                    <p className="text-sm text-gray-800">
                      Alternative flight <strong>&lt;2 घंटे</strong> देरी के साथ पहुंची (extremely rare on DEL-LHR)
                    </p>
                  </div>
                </div>
              </Card>

              <Card className="p-6">
                <h3 className="text-xl font-bold text-gray-900 mb-3">
                  7. क्या मैं वाउचर और €600 दोनों ले सकता हूं?
                </h3>
                <p className="text-gray-700">
                  <strong>हाँ!</strong> Voucher/hotel/meals = <strong>सहायता</strong> (EC 261 अनुच्छेद 9). Compensation (€600) = <strong>अलग अधिकार</strong> (अनुच्छेद 7).
                </p>
                <div className="bg-blue-50 p-4 rounded-lg mt-3">
                  <p className="font-semibold text-blue-900 mb-2">💡 Example Scenario:</p>
                  <p className="text-sm text-gray-800">
                    उड़ान रद्द → एयरलाइन ने दिया:<br/>
                    • Hotel (₹5,000 value)<br/>
                    • Meal vouchers (₹2,000)<br/>
                    • €100 goodwill voucher<br/><br/>
                    <strong className="text-blue-600">आप अभी भी entitled हैं: €600 cash compensation!</strong>
                  </p>
                </div>
              </Card>

              <Card className="p-6">
                <h3 className="text-xl font-bold text-gray-900 mb-3">
                  8. ClaimWinger कितना शुल्क लेता है?
                </h3>
                <div className="text-gray-700 space-y-3">
                  <p><strong>25% + VAT केवल सफलता पर।</strong></p>
                  <div className="bg-green-50 p-4 rounded-lg">
                    <p className="font-semibold text-green-900 mb-2">💰 Calculation Example:</p>
                    <p className="text-sm text-gray-800">
                      Compensation won: €600<br/>
                      ClaimWinger fee: 25% = €150<br/>
                      <strong className="text-green-600 text-lg">You receive: €450 (₹39,000)</strong>
                    </p>
                  </div>
                  <p className="text-blue-600 font-semibold">
                    ✅ No win = No fee. Zero upfront cost. Zero risk.
                  </p>
                  <p className="text-sm text-gray-600">
                    Compare: DIY lawyer (if needed) = ₹50,000-₹1,00,000 upfront, uncertain outcome.
                  </p>
                </div>
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
                    <FileText className="h-5 w-5" />
                    <span className="font-semibold">कानूनी आधार</span>
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 group-hover:text-purple-600 transition-colors mb-2">
                    EU विनियमन 261/2004 — भारतीय यात्रियों के लिए पूरी गाइड
                  </h3>
                  <p className="text-gray-600 text-sm">
                    EC 261 के तहत अपने अधिकारों को समझें। €250-€600 मुआवज़ा कैसे प्राप्त करें।
                  </p>
                </Card>
              </Link>

              <Link href="/hi/blog/flight-delay-cancellation-compensation-amount" className="group">
                <Card className="p-6 hover:shadow-lg transition-shadow">
                  <div className="flex items-center space-x-2 text-green-600 mb-2">
                    <Euro className="h-5 w-5" />
                    <span className="font-semibold">मुआवज़ा</span>
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 group-hover:text-green-600 transition-colors mb-2">
                    उड़ान देरी/रद्दीकरण: कितना मुआवज़ा मिल सकता है?
                  </h3>
                  <p className="text-gray-600 text-sm">
                    €250, €400, या €600? अपनी specific case के लिए सटीक राशि जानें।
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
