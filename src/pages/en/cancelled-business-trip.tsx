import { SEO } from "@/components/SEO";
import Link from "next/link";
import { AlertTriangle, Shield, CheckCircle, Clock, Phone, FileText, ArrowRight, Plane, Scale } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert";

export default function CancelledBusinessTripEN() {
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "Article",
    "headline": "Cancelled Business Flight - Complete Guide for Business Travelers",
    "description": "What to do when your business flight is cancelled? Learn about your rights, compensation claims, and practical steps to take. Expert guide for corporate travelers.",
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
        title="Cancelled Business Flight - Complete Guide | BiznesLot"
        description="What to do when your business flight is cancelled? Learn about your rights, compensation claims, and practical steps to take. Expert guide for corporate travelers."
        url="https://bizneslot.pl/en/cancelled-business-trip"
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
              <div className="inline-flex items-center gap-2 bg-red-500/10 border border-red-500/20 rounded-full px-6 py-2 mb-8">
                <AlertTriangle className="w-5 h-5 text-red-400" />
                <span className="text-sm font-medium">Flight Cancellation</span>
              </div>
              
              <h1 className="text-4xl md:text-6xl font-bold mb-6 leading-tight">
                Cancelled Business Flight<br />
                <span className="text-[#FF6B35]">What to Do?</span>
              </h1>
              
              <p className="text-xl text-slate-300 mb-10 leading-relaxed max-w-3xl mx-auto">
                Complete guide for business travelers: your rights, compensation claims, and practical steps when your corporate flight is cancelled.
              </p>
            </div>
          </div>

          <div className="absolute bottom-0 left-0 right-0 h-24 bg-gradient-to-t from-white to-transparent"></div>
        </section>

        {/* Main Content */}
        <article className="py-20 px-4">
          <div className="container mx-auto max-w-4xl">
            
            {/* Emergency Checklist */}
            <Alert className="mb-12 border-[#FF6B35] bg-orange-50">
              <AlertTriangle className="h-5 w-5 text-[#FF6B35]" />
              <AlertTitle className="text-lg font-bold text-slate-900">
                First Steps After Cancellation
              </AlertTitle>
              <AlertDescription className="text-slate-700 text-base mt-2">
                <ol className="list-decimal ml-4 space-y-1 mt-2">
                  <li>Contact your employer/supervisor immediately</li>
                  <li>Go to the airline counter for rebooking options</li>
                  <li>Document everything (photos, emails, notifications)</li>
                  <li>Keep all receipts for additional expenses</li>
                  <li>Request written confirmation of cancellation from airline</li>
                </ol>
              </AlertDescription>
            </Alert>

            {/* Your Rights */}
            <section className="mb-12">
              <h2 className="text-3xl font-bold text-slate-900 mb-6 flex items-center gap-3">
                <Shield className="h-8 w-8 text-[#FF6B35]" />
                Your Rights as a Business Traveler
              </h2>
              <div className="prose prose-lg max-w-none">
                <p className="text-lg text-slate-700 leading-relaxed mb-4">
                  When your business flight is cancelled, you have the <strong>same rights</strong> as leisure travelers. 
                  The fact that your employer paid for the ticket doesn't change your passenger rights under EU Regulation 261/2004.
                </p>
                <p className="text-lg text-slate-700 leading-relaxed">
                  According to EU law, the airline must offer you:
                </p>
              </div>

              <div className="grid md:grid-cols-2 gap-6 my-8">
                <Card className="border-slate-200">
                  <CardHeader>
                    <CardTitle className="flex items-center gap-2">
                      <CheckCircle className="h-6 w-6 text-green-600" />
                      Immediate Assistance
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <ul className="space-y-2 text-slate-700">
                      <li>• Meals and refreshments</li>
                      <li>• Hotel accommodation (if needed)</li>
                      <li>• Transport to/from hotel</li>
                      <li>• Two phone calls or emails</li>
                    </ul>
                  </CardContent>
                </Card>

                <Card className="border-slate-200">
                  <CardHeader>
                    <CardTitle className="flex items-center gap-2">
                      <Plane className="h-6 w-6 text-blue-600" />
                      Travel Options
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <ul className="space-y-2 text-slate-700">
                      <li>• Rebooking to earliest available flight</li>
                      <li>• Rebooking at later convenient date</li>
                      <li>• Full refund of ticket price</li>
                      <li>• Return flight to departure point (if applicable)</li>
                    </ul>
                  </CardContent>
                </Card>
              </div>
            </section>

            {/* Compensation */}
            <section className="mb-12">
              <h2 className="text-3xl font-bold text-slate-900 mb-6">
                When Are You Entitled to Compensation?
              </h2>
              <div className="prose prose-lg max-w-none mb-6">
                <p className="text-lg text-slate-700 leading-relaxed mb-4">
                  In addition to assistance and rebooking, you may be entitled to <strong>financial compensation</strong> 
                  from €250 to €600, depending on:
                </p>
              </div>

              <div className="bg-white rounded-2xl border-2 border-slate-200 p-8 mb-8">
                <h3 className="text-2xl font-bold text-slate-900 mb-4">Compensation Conditions</h3>
                <div className="space-y-4">
                  <div className="flex gap-3">
                    <CheckCircle className="w-6 h-6 text-[#FF6B35] flex-shrink-0 mt-1" />
                    <div>
                      <p className="text-slate-900 font-semibold mb-1">Less than 14 days notice</p>
                      <p className="text-slate-700">Airline informed you of cancellation less than 14 days before departure</p>
                    </div>
                  </div>
                  <div className="flex gap-3">
                    <CheckCircle className="w-6 h-6 text-[#FF6B35] flex-shrink-0 mt-1" />
                    <div>
                      <p className="text-slate-900 font-semibold mb-1">Not extraordinary circumstances</p>
                      <p className="text-slate-700">Cancellation wasn't caused by events beyond airline's control (e.g., severe weather, security threats)</p>
                    </div>
                  </div>
                  <div className="flex gap-3">
                    <CheckCircle className="w-6 h-6 text-[#FF6B35] flex-shrink-0 mt-1" />
                    <div>
                      <p className="text-slate-900 font-semibold mb-1">EU flight</p>
                      <p className="text-slate-700">Flight departing from EU airport OR arriving in EU on EU carrier</p>
                    </div>
                  </div>
                </div>
              </div>

              <h3 className="text-2xl font-bold text-slate-900 mb-4">Compensation Amounts</h3>
              <div className="grid md:grid-cols-3 gap-6">
                <Card className="border-slate-200 text-center">
                  <CardHeader>
                    <CardTitle className="text-3xl font-bold text-[#FF6B35]">€250</CardTitle>
                    <CardDescription>Flights up to 1,500 km</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <p className="text-sm text-slate-600">
                      E.g., Warsaw–London, Berlin–Paris
                    </p>
                  </CardContent>
                </Card>

                <Card className="border-slate-200 text-center">
                  <CardHeader>
                    <CardTitle className="text-3xl font-bold text-[#FF6B35]">€400</CardTitle>
                    <CardDescription>Flights 1,500–3,500 km</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <p className="text-sm text-slate-600">
                      E.g., Warsaw–Lisbon, Berlin–Istanbul
                    </p>
                  </CardContent>
                </Card>

                <Card className="border-slate-200 text-center">
                  <CardHeader>
                    <CardTitle className="text-3xl font-bold text-[#FF6B35]">€600</CardTitle>
                    <CardDescription>Flights over 3,500 km</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <p className="text-sm text-slate-600">
                      E.g., Warsaw–New York, Paris–Dubai
                    </p>
                  </CardContent>
                </Card>
              </div>
            </section>

            {/* Business Trip Specifics */}
            <section className="mb-12">
              <h2 className="text-3xl font-bold text-slate-900 mb-6">
                Business Trip Specifics
              </h2>
              
              <div className="space-y-6">
                <Card className="border-slate-200">
                  <CardHeader>
                    <CardTitle className="text-xl">
                      Informing Your Employer
                    </CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-3">
                    <p className="text-slate-700">
                      <strong>Contact your supervisor immediately</strong> when you learn about the cancellation. Explain:
                    </p>
                    <ul className="space-y-2 text-slate-700 ml-6">
                      <li>• Flight has been cancelled</li>
                      <li>• Available rebooking options (times, dates)</li>
                      <li>• Whether overnight stay will be necessary</li>
                      <li>• New estimated arrival time</li>
                      <li>• Impact on planned meetings/events</li>
                    </ul>
                  </CardContent>
                </Card>

                <Card className="border-slate-200">
                  <CardHeader>
                    <CardTitle className="text-xl">
                      Additional Costs
                    </CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-3">
                    <p className="text-slate-700">
                      Cancellation may generate additional expenses that should be covered by your employer:
                    </p>
                    <ul className="space-y-2 text-slate-700 ml-6">
                      <li>• <strong>Hotel accommodation</strong> – if overnight stay becomes necessary</li>
                      <li>• <strong>Meals</strong> – extended stay at destination or during wait</li>
                      <li>• <strong>Local transport</strong> – additional taxi/rental car costs</li>
                      <li>• <strong>Communication</strong> – phone calls coordinating situation</li>
                      <li>• <strong>Rescheduled meetings</strong> – potential costs of changing reservations</li>
                    </ul>
                    <Alert className="mt-4 border-blue-200 bg-blue-50">
                      <FileText className="h-5 w-5 text-blue-700" />
                      <AlertDescription className="text-blue-900">
                        <strong>Important:</strong> Keep all receipts and invoices. These are business trip costs, 
                        separate from passenger compensation rights.
                      </AlertDescription>
                    </Alert>
                  </CardContent>
                </Card>

                <Card className="border-slate-200">
                  <CardHeader>
                    <CardTitle className="text-xl">
                      Who Gets the Compensation?
                    </CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-3">
                    <p className="text-slate-700">
                      <strong>Compensation belongs to the passenger</strong> – meaning you, the employee who was supposed to fly. 
                      The fact that your employer paid for the ticket doesn't change this.
                    </p>
                    <p className="text-slate-700">
                      However, some companies have internal policies requiring compensation to be transferred to the company. 
                      Check your employment contract and company travel policy.
                    </p>
                    <p className="text-slate-700">
                      <Link href="/en/business-flight-compensation" className="text-[#FF6B35] underline hover:text-[#FF6B35]/80">
                        Read more about business flight compensation →
                      </Link>
                    </p>
                  </CardContent>
                </Card>
              </div>
            </section>

            {/* Step by Step */}
            <section className="mb-12">
              <h2 className="text-3xl font-bold text-slate-900 mb-6">
                Step-by-Step Action Plan
              </h2>
              
              <div className="space-y-4">
                <Card className="border-l-4 border-l-[#FF6B35]">
                  <CardHeader>
                    <CardTitle className="text-lg">Step 1: React Immediately at the Airport</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <ul className="space-y-2 text-slate-700">
                      <li>• Go to airline counter as soon as possible</li>
                      <li>• Ask about rebooking options (earliest available flight)</li>
                      <li>• Request written confirmation of cancellation</li>
                      <li>• Ask about reason for cancellation</li>
                      <li>• Take photos of information boards showing cancellation</li>
                    </ul>
                  </CardContent>
                </Card>

                <Card className="border-l-4 border-l-[#FF6B35]">
                  <CardHeader>
                    <CardTitle className="text-lg">Step 2: Contact Your Employer</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <ul className="space-y-2 text-slate-700">
                      <li>• Call supervisor/manager</li>
                      <li>• Inform about cancellation and new travel plans</li>
                      <li>• Discuss impact on planned meetings/events</li>
                      <li>• Agree on additional cost coverage procedure</li>
                      <li>• Confirm changes via email</li>
                    </ul>
                  </CardContent>
                </Card>

                <Card className="border-l-4 border-l-[#FF6B35]">
                  <CardHeader>
                    <CardTitle className="text-lg">Step 3: Secure Your Rights</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <ul className="space-y-2 text-slate-700">
                      <li>• Keep boarding pass and booking confirmation</li>
                      <li>• Collect all documents from airline (rebooking confirmations, etc.)</li>
                      <li>• Save all receipts (meals, accommodation, transport)</li>
                      <li>• Take photos/screenshots of communications with airline</li>
                      <li>• Note names of airline staff you spoke with</li>
                    </ul>
                  </CardContent>
                </Card>

                <Card className="border-l-4 border-l-[#FF6B35]">
                  <CardHeader>
                    <CardTitle className="text-lg">Step 4: Return and Settlement</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <ul className="space-y-2 text-slate-700">
                      <li>• Prepare detailed report for employer</li>
                      <li>• Submit expense report with receipts</li>
                      <li>• File compensation claim with airline</li>
                      <li>• Consider professional help if airline denies claim</li>
                    </ul>
                  </CardContent>
                </Card>
              </div>
            </section>

            {/* FAQ */}
            <section className="mb-12">
              <h2 className="text-3xl font-bold text-slate-900 mb-6">
                Frequently Asked Questions
              </h2>
              
              <div className="space-y-6">
                <Card className="border-slate-200">
                  <CardHeader>
                    <CardTitle className="text-lg">
                      What if I can't reach my supervisor?
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-slate-700">
                      Contact HR department or other available manager. Send email with situation details. 
                      In urgent situations, make reasonable decisions yourself (e.g., accept rebooking) 
                      and inform employer as soon as possible.
                    </p>
                  </CardContent>
                </Card>

                <Card className="border-slate-200">
                  <CardHeader>
                    <CardTitle className="text-lg">
                      Can I choose alternative transport (e.g., train)?
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-slate-700">
                      Yes, but it's best to agree with employer first. Airline may offer flight ticket refund, 
                      and you can use that amount for alternative transport. Keep all receipts to 
                      settle with employer.
                    </p>
                  </CardContent>
                </Card>

                <Card className="border-slate-200">
                  <CardHeader>
                    <CardTitle className="text-lg">
                      What if the airline offers only a flight in 2 days?
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-slate-700">
                      You have the right to care (hotel, meals) for the entire wait period. Contact your employer 
                      to decide if it's worth waiting or if you should seek alternative solutions 
                      (different airline, other transport).
                    </p>
                  </CardContent>
                </Card>

                <Card className="border-slate-200">
                  <CardHeader>
                    <CardTitle className="text-lg">
                      How long do I have to file compensation claim?
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-slate-700">
                      In most EU countries, you have 3 years from flight date. However, the sooner you file, 
                      the easier it is to prove circumstances and gather evidence.
                    </p>
                  </CardContent>
                </Card>
              </div>
            </section>

            {/* CTA */}
            <section className="mb-12">
              <Card className="bg-gradient-to-r from-slate-800 to-slate-700 text-white border-0">
                <CardHeader>
                  <CardTitle className="text-2xl md:text-3xl">
                    Need Help with Your Compensation Claim?
                  </CardTitle>
                  <CardDescription className="text-slate-300 text-lg">
                    If the airline denies your claim or doesn't respond, professional services can help you 
                    recover what you're entitled to.
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="flex flex-col sm:flex-row gap-4">
                    <Button asChild size="lg" className="bg-[#FF6B35] hover:bg-[#FF6B35]/90">
                      <a href="https://claimwinger.com/en" target="_blank" rel="noopener noreferrer">
                        Check Your Compensation
                        <ArrowRight className="ml-2 h-5 w-5" />
                      </a>
                    </Button>
                    <Button asChild size="lg" variant="outline" className="border-white/30 bg-white/5 hover:bg-white/10 text-white">
                      <Link href="/en">
                        Back to Homepage
                      </Link>
                    </Button>
                  </div>
                </CardContent>
              </Card>
            </section>

            {/* Related Articles */}
            <section>
              <h2 className="text-2xl font-bold text-slate-900 mb-6">Related Topics</h2>
              <div className="grid md:grid-cols-2 gap-6">
                <Link href="/en/business-flight-compensation" className="group">
                  <Card className="border-slate-200 hover:border-[#FF6B35]/50 hover:shadow-xl transition-all h-full">
                    <CardHeader>
                      <CardTitle className="group-hover:text-[#FF6B35] transition-colors flex items-start justify-between">
                        Business Flight Compensation
                        <ArrowRight className="h-5 w-5 text-slate-400 group-hover:text-[#FF6B35] group-hover:translate-x-1 transition-all flex-shrink-0" />
                      </CardTitle>
                      <CardDescription>
                        Who is entitled to compensation for business flights and how to claim it?
                      </CardDescription>
                    </CardHeader>
                  </Card>
                </Link>

                <Link href="/en/about" className="group">
                  <Card className="border-slate-200 hover:border-[#FF6B35]/50 hover:shadow-xl transition-all h-full">
                    <CardHeader>
                      <CardTitle className="group-hover:text-[#FF6B35] transition-colors flex items-start justify-between">
                        About the Author
                        <ArrowRight className="h-5 w-5 text-slate-400 group-hover:text-[#FF6B35] group-hover:translate-x-1 transition-all flex-shrink-0" />
                      </CardTitle>
                      <CardDescription>
                        Learn about the expert behind BiznesLot.info and ClaimWinger.com.
                      </CardDescription>
                    </CardHeader>
                  </Card>
                </Link>
              </div>
            </section>

          </div>
        </article>
      </div>
    </>
  );
}
