import { SEO } from "@/components/SEO";
import Link from "next/link";
import { Shield, Scale, CheckCircle, AlertCircle, ArrowRight, Award, Users, FileText, Clock, Plane } from "lucide-react";
import { Button } from "@/components/ui/button";

export default function BusinessFlightCompensationEN() {
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "Article",
    "headline": "Business Flight Compensation - Complete Guide",
    "description": "Comprehensive guide on compensation for business flights. Who is entitled and how to effectively claim it? Learn your rights as a business traveler.",
    "author": {
      "@type": "Person",
      "name": "Piotr Wierzba"
    },
    "publisher": {
      "@type": "Organization",
      "name": "BiznesLot.info",
      "logo": {
        "@type": "ImageObject",
        "url": "https://bizneslot.pl/og-image.png"
      }
    },
    "datePublished": "2026-02-26",
    "dateModified": "2026-02-26"
  };

  return (
    <>
      <SEO
        title="Business Flight Compensation - Complete Guide | BiznesLot"
        description="Comprehensive guide on compensation for business flights. Who is entitled and how to effectively claim it? Learn your rights as a business traveler."
        url="https://bizneslot.pl/en/business-flight-compensation"
      />
      
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
      />

      <div className="min-h-screen bg-gradient-to-b from-slate-50 to-white">
        {/* Hero Section */}
        <section className="relative bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 text-white py-20 overflow-hidden">
          <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxnIGZpbGw9IiNmZmYiIGZpbGwtb3BhY2l0eT0iMC4wNSI+PHBhdGggZD0iTTM2IDE2djZoLTZ2LTZoNnptLTEyIDBoNnY2aC02di02em0yNCAxMnY2aC02di02aDZ6bS0xMiAwaDZ2NmgtNnYtNnptLTEyIDBoNnY2aC02di02em0yNCAxMnY2aC02di02aDZ6bS0xMiAwaDZ2NmgtNnYtNnptLTEyIDBoNnY2aC02di02eiIvPjwvZz48L2c+PC9zdmc+')] opacity-30"></div>
          
          <div className="container mx-auto px-4 relative z-10">
            <div className="max-w-4xl mx-auto text-center">
              <div className="inline-flex items-center gap-2 bg-[#FF6B35]/10 border border-[#FF6B35]/20 rounded-full px-6 py-2 mb-8">
                <Shield className="w-5 h-5 text-[#FF6B35]" />
                <span className="text-sm font-medium">Passenger Rights</span>
              </div>
              
              <h1 className="text-4xl md:text-6xl font-bold mb-6 leading-tight">
                Business Flight<br />
                <span className="text-[#FF6B35]">Compensation</span>
              </h1>
              
              <p className="text-xl text-slate-300 mb-10 leading-relaxed max-w-3xl mx-auto">
                Complete guide on compensation for business flights. Learn who is entitled to compensation when the company pays for the ticket and how to effectively claim it.
              </p>
            </div>
          </div>

          <div className="absolute bottom-0 left-0 right-0 h-24 bg-gradient-to-t from-white to-transparent"></div>
        </section>

        {/* Main Content */}
        <section className="py-20 px-4">
          <div className="container mx-auto max-w-4xl">
            {/* Key Question */}
            <div className="bg-gradient-to-br from-[#FF6B35]/10 to-orange-50 border-l-4 border-[#FF6B35] rounded-r-2xl p-8 mb-12">
              <h2 className="text-2xl font-bold text-slate-900 mb-4 flex items-center gap-3">
                <AlertCircle className="w-7 h-7 text-[#FF6B35]" />
                Key Question
              </h2>
              <p className="text-lg text-slate-700 leading-relaxed">
                Does an employee have the right to compensation for a business flight if the employer purchased the ticket? This is one of the most common questions we receive. The answer might surprise you.
              </p>
            </div>

            {/* The Rule is Clear */}
            <div className="prose prose-lg max-w-none">
              <h2 className="text-3xl font-bold text-slate-900 mb-6">The Rule is Clear: Compensation Belongs to the Passenger</h2>
              
              <p className="text-lg text-slate-700 leading-relaxed mb-6">
                According to <strong>EU Regulation 261/2004</strong>, compensation for flight delays or cancellations belongs to the <strong>passenger</strong> – meaning the person who actually traveled, not the entity that purchased the ticket.
              </p>

              <div className="bg-white rounded-2xl border-2 border-slate-200 p-8 my-8 shadow-sm">
                <h3 className="text-2xl font-bold text-slate-900 mb-4 flex items-center gap-3">
                  <Scale className="w-7 h-7 text-[#FF6B35]" />
                  Legal Foundation
                </h3>
                <p className="text-lg text-slate-700 leading-relaxed mb-4">
                  EU Regulation 261/2004 clearly defines that the entitled party is the <strong>passenger</strong> – the person who was supposed to fly or actually flew on the delayed or cancelled flight.
                </p>
                <p className="text-lg text-slate-700 leading-relaxed">
                  The fact that your employer paid for the ticket <strong>does not change your rights</strong> as a passenger. You are the person who experienced the inconvenience – delayed arrival at destination, missed meetings, disrupted schedule.
                </p>
              </div>

              <h2 className="text-3xl font-bold text-slate-900 mb-6 mt-12">Who is the Passenger?</h2>
              
              <p className="text-lg text-slate-700 leading-relaxed mb-6">
                In the context of business flights, the situation is straightforward:
              </p>

              <div className="grid md:grid-cols-2 gap-6 my-8">
                <div className="bg-gradient-to-br from-green-50 to-white border-2 border-green-200 rounded-xl p-6">
                  <div className="flex items-center gap-3 mb-4">
                    <div className="w-12 h-12 bg-green-100 rounded-xl flex items-center justify-center">
                      <CheckCircle className="w-6 h-6 text-green-600" />
                    </div>
                    <h3 className="text-xl font-bold text-slate-900">Passenger = Employee</h3>
                  </div>
                  <p className="text-slate-700">
                    You are the person who physically traveled (or was supposed to travel) on the flight. You experienced the delay or cancellation.
                  </p>
                </div>

                <div className="bg-gradient-to-br from-blue-50 to-white border-2 border-blue-200 rounded-xl p-6">
                  <div className="flex items-center gap-3 mb-4">
                    <div className="w-12 h-12 bg-blue-100 rounded-xl flex items-center justify-center">
                      <Users className="w-6 h-6 text-blue-600" />
                    </div>
                    <h3 className="text-xl font-bold text-slate-900">Ticket Purchaser = Employer</h3>
                  </div>
                  <p className="text-slate-700">
                    The company paid for the ticket, but this doesn't make them the passenger. They are the purchaser, not the person who traveled.
                  </p>
                </div>
              </div>

              <h2 className="text-3xl font-bold text-slate-900 mb-6 mt-12">When Are You Entitled to Compensation?</h2>
              
              <p className="text-lg text-slate-700 leading-relaxed mb-6">
                As a business traveler, you're entitled to compensation in the same situations as leisure passengers:
              </p>

              <div className="space-y-6 my-8">
                <div className="flex gap-4 items-start">
                  <div className="flex-shrink-0 w-12 h-12 bg-[#FF6B35]/10 rounded-xl flex items-center justify-center">
                    <Clock className="w-6 h-6 text-[#FF6B35]" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-slate-900 mb-2">Flight Delay</h3>
                    <p className="text-slate-700 leading-relaxed">
                      Arrival at destination delayed by <strong>3 hours or more</strong> – compensation from €250 to €600 depending on flight distance.
                    </p>
                  </div>
                </div>

                <div className="flex gap-4 items-start">
                  <div className="flex-shrink-0 w-12 h-12 bg-[#FF6B35]/10 rounded-xl flex items-center justify-center">
                    <Plane className="w-6 h-6 text-[#FF6B35]" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-slate-900 mb-2">Flight Cancellation</h3>
                    <p className="text-slate-700 leading-relaxed">
                      Flight cancelled without at least <strong>14 days notice</strong> – you're entitled to compensation plus rebooking or refund.
                    </p>
                  </div>
                </div>

                <div className="flex gap-4 items-start">
                  <div className="flex-shrink-0 w-12 h-12 bg-[#FF6B35]/10 rounded-xl flex items-center justify-center">
                    <AlertCircle className="w-6 h-6 text-[#FF6B35]" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-slate-900 mb-2">Denied Boarding</h3>
                    <p className="text-slate-700 leading-relaxed">
                      Denied boarding due to <strong>overbooking</strong> – you're entitled to compensation plus alternative flight.
                    </p>
                  </div>
                </div>
              </div>

              <div className="bg-amber-50 border-l-4 border-amber-500 rounded-r-2xl p-8 my-8">
                <h3 className="text-xl font-bold text-slate-900 mb-3 flex items-center gap-2">
                  <AlertCircle className="w-6 h-6 text-amber-600" />
                  Important Exceptions
                </h3>
                <p className="text-slate-700 leading-relaxed">
                  Compensation is <strong>not</strong> due if the disruption was caused by extraordinary circumstances beyond the airline's control (severe weather, security threats, air traffic control strikes, etc.).
                </p>
              </div>

              <h2 className="text-3xl font-bold text-slate-900 mb-6 mt-12">Compensation Amounts</h2>
              
              <p className="text-lg text-slate-700 leading-relaxed mb-6">
                Compensation amounts under EU 261/2004 depend on flight distance:
              </p>

              <div className="grid md:grid-cols-3 gap-6 my-8">
                <div className="bg-white rounded-xl border-2 border-slate-200 p-6 text-center">
                  <div className="text-3xl font-bold text-[#FF6B35] mb-2">€250</div>
                  <p className="text-slate-700 font-medium mb-2">Short Distance</p>
                  <p className="text-sm text-slate-600">Flights up to 1,500 km</p>
                </div>

                <div className="bg-white rounded-xl border-2 border-slate-200 p-6 text-center">
                  <div className="text-3xl font-bold text-[#FF6B35] mb-2">€400</div>
                  <p className="text-slate-700 font-medium mb-2">Medium Distance</p>
                  <p className="text-sm text-slate-600">EU flights over 1,500 km and other flights 1,500-3,500 km</p>
                </div>

                <div className="bg-white rounded-xl border-2 border-slate-200 p-6 text-center">
                  <div className="text-3xl font-bold text-[#FF6B35] mb-2">€600</div>
                  <p className="text-slate-700 font-medium mb-2">Long Distance</p>
                  <p className="text-sm text-slate-600">Flights over 3,500 km</p>
                </div>
              </div>

              <h2 className="text-3xl font-bold text-slate-900 mb-6 mt-12">Can Your Employer Demand the Compensation?</h2>
              
              <p className="text-lg text-slate-700 leading-relaxed mb-6">
                This is a common concern for business travelers. The short answer is:
              </p>

              <div className="bg-gradient-to-br from-slate-900 to-slate-700 text-white rounded-2xl p-8 my-8">
                <h3 className="text-2xl font-bold mb-4">Legal Perspective</h3>
                <p className="text-slate-200 text-lg leading-relaxed mb-4">
                  From a purely legal standpoint, <strong>compensation belongs to you</strong> – the passenger. The employer has no legal claim to it under EU 261/2004.
                </p>
                <p className="text-slate-200 text-lg leading-relaxed">
                  However, your <strong>employment contract or company travel policy</strong> may contain provisions requiring you to transfer compensation to the company. These internal regulations are separate from passenger rights law.
                </p>
              </div>

              <div className="bg-blue-50 border-l-4 border-blue-500 rounded-r-2xl p-8 my-8">
                <h3 className="text-xl font-bold text-slate-900 mb-3">Company Travel Policy</h3>
                <p className="text-slate-700 leading-relaxed mb-4">
                  Many companies have internal policies stating that compensation for business flights should be transferred to the company. While this doesn't change your legal rights, it may be a contractual obligation.
                </p>
                <p className="text-slate-700 leading-relaxed">
                  <strong>Recommendation:</strong> Review your employment contract and company travel policy to understand your obligations.
                </p>
              </div>

              <h2 className="text-3xl font-bold text-slate-900 mb-6 mt-12">How to Claim Compensation</h2>
              
              <p className="text-lg text-slate-700 leading-relaxed mb-6">
                The process for claiming compensation for a business flight is identical to leisure flights:
              </p>

              <div className="space-y-6 my-8">
                <div className="flex gap-4">
                  <div className="flex-shrink-0 w-10 h-10 bg-[#FF6B35] text-white rounded-full flex items-center justify-center font-bold">
                    1
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-slate-900 mb-2">Gather Documentation</h3>
                    <p className="text-slate-700 leading-relaxed">
                      Collect boarding passes, booking confirmations, delay/cancellation notifications, and any communication with the airline.
                    </p>
                  </div>
                </div>

                <div className="flex gap-4">
                  <div className="flex-shrink-0 w-10 h-10 bg-[#FF6B35] text-white rounded-full flex items-center justify-center font-bold">
                    2
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-slate-900 mb-2">Submit Claim to Airline</h3>
                    <p className="text-slate-700 leading-relaxed">
                      File a claim directly with the airline, referencing EU Regulation 261/2004 and providing all documentation.
                    </p>
                  </div>
                </div>

                <div className="flex gap-4">
                  <div className="flex-shrink-0 w-10 h-10 bg-[#FF6B35] text-white rounded-full flex items-center justify-center font-bold">
                    3
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-slate-900 mb-2">Follow Up</h3>
                    <p className="text-slate-700 leading-relaxed">
                      Airlines have up to 6 weeks to respond. If they reject your claim or don't respond, you can escalate to national enforcement bodies or use a claims service.
                    </p>
                  </div>
                </div>

                <div className="flex gap-4">
                  <div className="flex-shrink-0 w-10 h-10 bg-[#FF6B35] text-white rounded-full flex items-center justify-center font-bold">
                    4
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-slate-900 mb-2">Consider Professional Help</h3>
                    <p className="text-slate-700 leading-relaxed">
                      If the airline rejects your claim, services like ClaimWinger can handle the process, including legal action if necessary.
                    </p>
                  </div>
                </div>
              </div>

              <h2 className="text-3xl font-bold text-slate-900 mb-6 mt-12">Additional Reimbursable Costs</h2>
              
              <p className="text-lg text-slate-700 leading-relaxed mb-6">
                Beyond compensation, you may be entitled to reimbursement for additional expenses incurred due to the disruption:
              </p>

              <ul className="space-y-4 my-8">
                <li className="flex gap-3">
                  <CheckCircle className="w-6 h-6 text-[#FF6B35] flex-shrink-0 mt-1" />
                  <span className="text-lg text-slate-700"><strong>Meals and refreshments</strong> – during delays at the airport</span>
                </li>
                <li className="flex gap-3">
                  <CheckCircle className="w-6 h-6 text-[#FF6B35] flex-shrink-0 mt-1" />
                  <span className="text-lg text-slate-700"><strong>Hotel accommodation</strong> – if an overnight stay becomes necessary</span>
                </li>
                <li className="flex gap-3">
                  <CheckCircle className="w-6 h-6 text-[#FF6B35] flex-shrink-0 mt-1" />
                  <span className="text-lg text-slate-700"><strong>Transport to/from hotel</strong> – if provided by airline or if you had to arrange yourself</span>
                </li>
                <li className="flex gap-3">
                  <CheckCircle className="w-6 h-6 text-[#FF6B35] flex-shrink-0 mt-1" />
                  <span className="text-lg text-slate-700"><strong>Communication costs</strong> – two phone calls, emails, or messages</span>
                </li>
              </ul>

              <div className="bg-slate-50 border-2 border-slate-200 rounded-2xl p-8 my-8">
                <h3 className="text-xl font-bold text-slate-900 mb-3 flex items-center gap-2">
                  <FileText className="w-6 h-6 text-[#FF6B35]" />
                  Keep All Receipts
                </h3>
                <p className="text-slate-700 leading-relaxed">
                  Save all receipts and documentation for expenses incurred during the disruption. These can be claimed separately from the standard compensation and are reimbursed based on "reasonable costs."
                </p>
              </div>

              <h2 className="text-3xl font-bold text-slate-900 mb-6 mt-12">Summary</h2>
              
              <div className="bg-gradient-to-br from-[#FF6B35]/10 to-orange-50 rounded-2xl p-8 my-8">
                <ul className="space-y-4">
                  <li className="flex gap-3">
                    <CheckCircle className="w-6 h-6 text-[#FF6B35] flex-shrink-0 mt-1" />
                    <span className="text-lg text-slate-700"><strong>Compensation belongs to the passenger</strong> – even if employer paid for ticket</span>
                  </li>
                  <li className="flex gap-3">
                    <CheckCircle className="w-6 h-6 text-[#FF6B35] flex-shrink-0 mt-1" />
                    <span className="text-lg text-slate-700"><strong>EU Regulation 261/2004</strong> is clear on passenger rights</span>
                  </li>
                  <li className="flex gap-3">
                    <CheckCircle className="w-6 h-6 text-[#FF6B35] flex-shrink-0 mt-1" />
                    <span className="text-lg text-slate-700"><strong>Company policies</strong> may require you to transfer compensation to employer</span>
                  </li>
                  <li className="flex gap-3">
                    <CheckCircle className="w-6 h-6 text-[#FF6B35] flex-shrink-0 mt-1" />
                    <span className="text-lg text-slate-700"><strong>Amounts: €250-€600</strong> depending on flight distance</span>
                  </li>
                  <li className="flex gap-3">
                    <CheckCircle className="w-6 h-6 text-[#FF6B35] flex-shrink-0 mt-1" />
                    <span className="text-lg text-slate-700"><strong>Additional costs</strong> (meals, accommodation) can be separately reimbursed</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 bg-gradient-to-r from-slate-800 to-slate-700 text-white">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto text-center">
              <h2 className="text-3xl md:text-4xl font-bold mb-6">
                Need Help with Your Claim?
              </h2>
              <p className="text-xl text-slate-300 mb-10 leading-relaxed">
                Professional claims services can handle the entire process for you, from documentation to legal action if necessary.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button
                  asChild
                  size="lg"
                  className="bg-[#FF6B35] hover:bg-[#FF6B35]/90 text-white text-lg px-8 py-6 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300"
                >
                  <a href="https://claimwinger.com/en" target="_blank" rel="noopener noreferrer">
                    Check Your Compensation
                    <ArrowRight className="ml-2 w-5 h-5" />
                  </a>
                </Button>
                
                <Button
                  asChild
                  size="lg"
                  variant="outline"
                  className="border-2 border-white/30 bg-white/5 hover:bg-white/10 text-white text-lg px-8 py-6 rounded-xl backdrop-blur-sm transition-all duration-300"
                >
                  <Link href="/en">
                    Back to Homepage
                  </Link>
                </Button>
              </div>
            </div>
          </div>
        </section>

        {/* Related Articles */}
        <section className="py-20 bg-slate-50">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-bold text-slate-900 mb-8 text-center">
              Related Topics
            </h2>
            
            <div className="grid md:grid-cols-3 gap-6 max-w-5xl mx-auto">
              <Link href="/en/cancelled-business-trip" className="group">
                <div className="bg-white rounded-xl border-2 border-slate-200 p-6 hover:border-[#FF6B35]/50 hover:shadow-xl transition-all h-full">
                  <Plane className="w-10 h-10 text-[#FF6B35] mb-4" />
                  <h3 className="text-xl font-bold text-slate-900 mb-2 group-hover:text-[#FF6B35] transition-colors">
                    Cancelled Business Trip
                  </h3>
                  <p className="text-slate-600">
                    What to do when your business flight is cancelled? Rights and procedures.
                  </p>
                </div>
              </Link>

              <Link href="/en/about" className="group">
                <div className="bg-white rounded-xl border-2 border-slate-200 p-6 hover:border-[#FF6B35]/50 hover:shadow-xl transition-all h-full">
                  <Award className="w-10 h-10 text-[#FF6B35] mb-4" />
                  <h3 className="text-xl font-bold text-slate-900 mb-2 group-hover:text-[#FF6B35] transition-colors">
                    About the Author
                  </h3>
                  <p className="text-slate-600">
                    Learn about the expert behind BiznesLot.info and ClaimWinger.com.
                  </p>
                </div>
              </Link>

              <Link href="/en" className="group">
                <div className="bg-white rounded-xl border-2 border-slate-200 p-6 hover:border-[#FF6B35]/50 hover:shadow-xl transition-all h-full">
                  <FileText className="w-10 h-10 text-[#FF6B35] mb-4" />
                  <h3 className="text-xl font-bold text-slate-900 mb-2 group-hover:text-[#FF6B35] transition-colors">
                    All Topics
                  </h3>
                  <p className="text-slate-600">
                    Explore all articles about business travel rights and compensation.
                  </p>
                </div>
              </Link>
            </div>
          </div>
        </section>
      </div>
    </>
  );
}
