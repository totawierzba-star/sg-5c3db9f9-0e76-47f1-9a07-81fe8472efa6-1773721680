import { SEO } from "@/components/SEO";
import Link from "next/link";
import { Clock, Shield, CheckCircle, AlertTriangle, Phone, FileText, ArrowRight, Plane, Euro } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert";

export default function DelayedBusinessTripEN() {
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "Article",
    "headline": "Delayed Business Flight - Your Rights and Compensation Guide",
    "description": "Complete guide for business travelers: what to do when your corporate flight is delayed, compensation claims, and expense settlement with employer.",
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
        title="Delayed Business Flight - Rights & Compensation | BiznesLot"
        description="What to do when your business flight is delayed? Learn about your rights, compensation amounts, and how to settle additional costs with your employer."
        url="https://bizneslot.pl/en/delayed-business-trip"
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
              <div className="inline-flex items-center gap-2 bg-orange-500/10 border border-orange-500/20 rounded-full px-6 py-2 mb-8">
                <Clock className="w-5 h-5 text-orange-400" />
                <span className="text-sm font-medium">Flight Delay</span>
              </div>
              
              <h1 className="text-4xl md:text-6xl font-bold mb-6 leading-tight">
                Delayed Business Flight<br />
                <span className="text-[#FF6B35]">Your Rights & Actions</span>
              </h1>
              
              <p className="text-xl text-slate-300 mb-10 leading-relaxed max-w-3xl mx-auto">
                Complete guide for business travelers: when you're entitled to compensation, how to document delays, and settling extended trip costs with your employer.
              </p>
            </div>
          </div>

          <div className="absolute bottom-0 left-0 right-0 h-24 bg-gradient-to-t from-white to-transparent"></div>
        </section>

        {/* Main Content */}
        <article className="py-20 px-4">
          <div className="container mx-auto max-w-4xl">
            
            {/* Quick Reference */}
            <Alert className="mb-12 border-[#FF6B35] bg-orange-50">
              <AlertTriangle className="h-5 w-5 text-[#FF6B35]" />
              <AlertTitle className="text-lg font-bold text-slate-900">
                Quick Guide: When Are You Entitled to Compensation?
              </AlertTitle>
              <AlertDescription className="text-slate-700 text-base mt-2">
                <ul className="list-disc ml-4 space-y-1 mt-2">
                  <li><strong>3+ hours delay</strong> on arrival at final destination</li>
                  <li><strong>EU flight</strong> (departure from EU or arrival in EU with EU carrier)</li>
                  <li><strong>Not extraordinary circumstances</strong> (technical issues = compensation, severe weather = no compensation)</li>
                  <li><strong>€250-€600</strong> depending on flight distance</li>
                </ul>
              </AlertDescription>
            </Alert>

            {/* Understanding Delays */}
            <section className="mb-12">
              <h2 className="text-3xl font-bold text-slate-900 mb-6 flex items-center gap-3">
                <Clock className="h-8 w-8 text-[#FF6B35]" />
                Understanding Flight Delays
              </h2>
              
              <div className="prose prose-lg max-w-none mb-6">
                <p className="text-lg text-slate-700 leading-relaxed">
                  A flight delay in a business trip context is more than just inconvenience - it can mean:
                </p>
              </div>

              <div className="grid md:grid-cols-2 gap-6 mb-8">
                <Card className="border-slate-200">
                  <CardHeader>
                    <CardTitle className="flex items-center gap-2">
                      <Plane className="h-6 w-6 text-blue-600" />
                      Professional Impact
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <ul className="space-y-2 text-slate-700">
                      <li>• Missed business meetings</li>
                      <li>• Conference presentations delayed</li>
                      <li>• Lost client opportunities</li>
                      <li>• Project timeline disruptions</li>
                    </ul>
                  </CardContent>
                </Card>

                <Card className="border-slate-200">
                  <CardHeader>
                    <CardTitle className="flex items-center gap-2">
                      <Euro className="h-6 w-6 text-green-600" />
                      Financial Impact
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <ul className="space-y-2 text-slate-700">
                      <li>• Extended hotel stay costs</li>
                      <li>• Additional meal expenses</li>
                      <li>• Extra local transportation</li>
                      <li>• Rescheduled meeting fees</li>
                    </ul>
                  </CardContent>
                </Card>
              </div>

              <Alert className="border-blue-200 bg-blue-50">
                <Shield className="h-5 w-5 text-blue-700" />
                <AlertDescription className="text-blue-900">
                  <strong>Important:</strong> EU Regulation 261/2004 protects you regardless of who paid for the ticket. 
                  Your rights as a passenger remain the same whether it's a personal or business flight.
                </AlertDescription>
              </Alert>
            </section>

            {/* Compensation Rules */}
            <section className="mb-12">
              <h2 className="text-3xl font-bold text-slate-900 mb-6">
                Compensation: How Much and When?
              </h2>
              
              <div className="prose prose-lg max-w-none mb-6">
                <p className="text-lg text-slate-700 leading-relaxed">
                  You're entitled to financial compensation when your flight arrives at the <strong>final destination</strong> 
                  with a delay of 3 hours or more, and the delay wasn't caused by extraordinary circumstances.
                </p>
              </div>

              <h3 className="text-2xl font-bold text-slate-900 mb-4">Compensation Amounts by Distance</h3>
              <div className="grid md:grid-cols-3 gap-6 mb-8">
                <Card className="border-slate-200 text-center">
                  <CardHeader>
                    <CardTitle className="text-3xl font-bold text-[#FF6B35]">€250</CardTitle>
                    <CardDescription>Flights up to 1,500 km</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <p className="text-sm text-slate-600">
                      Examples: Warsaw–London, Berlin–Paris, Amsterdam–Barcelona
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
                      Examples: Warsaw–Lisbon, Berlin–Istanbul, London–Tel Aviv
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
                      Examples: Warsaw–New York, Paris–Dubai, London–Singapore
                    </p>
                  </CardContent>
                </Card>
              </div>

              <Card className="border-slate-200 bg-slate-50">
                <CardHeader>
                  <CardTitle className="text-xl">Important: Arrival Time Counts</CardTitle>
                </CardHeader>
                <CardContent className="space-y-3">
                  <p className="text-slate-700">
                    Compensation is calculated based on <strong>arrival time at final destination</strong>, not departure delay:
                  </p>
                  <ul className="space-y-2 ml-6 text-slate-700">
                    <li>• <strong>Example 1:</strong> 4-hour departure delay, but arrived only 2.5 hours late → No compensation</li>
                    <li>• <strong>Example 2:</strong> 2-hour departure delay, arrived 3.5 hours late → Compensation applies</li>
                    <li>• <strong>Example 3:</strong> Connecting flights - total delay from first departure to final arrival counts</li>
                  </ul>
                </CardContent>
              </Card>
            </section>

            {/* Immediate Actions */}
            <section className="mb-12">
              <h2 className="text-3xl font-bold text-slate-900 mb-6">
                What to Do When Your Flight Is Delayed
              </h2>
              
              <div className="space-y-6">
                <Card className="border-l-4 border-l-orange-500">
                  <CardHeader>
                    <CardTitle className="text-xl flex items-center gap-2">
                      <span className="bg-orange-500 text-white rounded-full w-8 h-8 flex items-center justify-center text-sm font-bold">1</span>
                      Document Everything Immediately
                    </CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-3">
                    <ul className="space-y-2 ml-6 text-slate-700">
                      <li>• Take photos of departure boards showing delay status</li>
                      <li>• Note the original and new departure times</li>
                      <li>• Save all airline notifications (SMS, email, app)</li>
                      <li>• Keep your boarding pass</li>
                      <li>• Ask airline staff for written confirmation of delay reason</li>
                    </ul>
                  </CardContent>
                </Card>

                <Card className="border-l-4 border-l-blue-500">
                  <CardHeader>
                    <CardTitle className="text-xl flex items-center gap-2">
                      <span className="bg-blue-500 text-white rounded-full w-8 h-8 flex items-center justify-center text-sm font-bold">2</span>
                      Contact Your Employer
                    </CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-3">
                    <p className="text-slate-700">
                      Inform your supervisor or travel coordinator immediately:
                    </p>
                    <ul className="space-y-2 ml-6 text-slate-700">
                      <li>• Email + phone call (use both channels)</li>
                      <li>• Provide current delay estimate</li>
                      <li>• Discuss impact on meetings/schedule</li>
                      <li>• Clarify approval for additional expenses</li>
                      <li>• Request guidance on next steps</li>
                    </ul>
                  </CardContent>
                </Card>

                <Card className="border-l-4 border-l-green-500">
                  <CardHeader>
                    <CardTitle className="text-xl flex items-center gap-2">
                      <span className="bg-green-500 text-white rounded-full w-8 h-8 flex items-center justify-center text-sm font-bold">3</span>
                      Claim Your Care Rights
                    </CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-3">
                    <p className="text-slate-700">
                      The airline must provide assistance based on delay length:
                    </p>
                    <ul className="space-y-2 ml-6 text-slate-700">
                      <li>• <strong>2+ hours:</strong> Meals, refreshments, 2 phone calls/emails</li>
                      <li>• <strong>3+ hours:</strong> Plus potential compensation (if applies)</li>
                      <li>• <strong>5+ hours:</strong> Right to refund and return flight</li>
                      <li>• <strong>Overnight delay:</strong> Hotel accommodation + transfers</li>
                    </ul>
                    <Alert className="mt-4 border-slate-200 bg-slate-50">
                      <AlertDescription className="text-slate-700 text-sm">
                        <strong>Tip:</strong> Always request assistance at airline counter. If they refuse, 
                        keep receipts for reasonable expenses - you can claim reimbursement later.
                      </AlertDescription>
                    </Alert>
                  </CardContent>
                </Card>
              </div>
            </section>

            {/* Business Trip Specifics */}
            <section className="mb-12">
              <h2 className="text-3xl font-bold text-slate-900 mb-6">
                Business Trip: Additional Considerations
              </h2>
              
              <div className="space-y-6">
                <Card className="border-slate-200">
                  <CardHeader>
                    <CardTitle className="text-xl">
                      Extended Trip Costs
                    </CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-3">
                    <p className="text-slate-700">
                      Delays often mean extended stay at destination. Who pays what?
                    </p>
                    <div className="grid md:grid-cols-2 gap-4 mt-4">
                      <div className="bg-blue-50 rounded-lg p-4">
                        <h4 className="font-semibold text-slate-900 mb-2">Airline Covers:</h4>
                        <ul className="space-y-1 text-sm text-slate-700">
                          <li>• Meals during wait at airport</li>
                          <li>• Hotel if overnight delay</li>
                          <li>• Transport to/from hotel</li>
                          <li>• Basic communication needs</li>
                        </ul>
                      </div>
                      <div className="bg-green-50 rounded-lg p-4">
                        <h4 className="font-semibold text-slate-900 mb-2">Employer Covers:</h4>
                        <ul className="space-y-1 text-sm text-slate-700">
                          <li>• Extended business trip allowances</li>
                          <li>• Additional work-related expenses</li>
                          <li>• Local business transport</li>
                          <li>• Rescheduled meeting costs</li>
                        </ul>
                      </div>
                    </div>
                  </CardContent>
                </Card>

                <Card className="border-slate-200">
                  <CardHeader>
                    <CardTitle className="text-xl">
                      Missed Meetings & Appointments
                    </CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-3">
                    <p className="text-slate-700">
                      If delay causes you to miss critical business commitments:
                    </p>
                    <ul className="space-y-2 ml-6 text-slate-700">
                      <li>• Document all missed appointments with timestamps</li>
                      <li>• Keep email correspondence about rescheduling</li>
                      <li>• Note any penalties or lost opportunities</li>
                      <li>• Coordinate with employer on damage mitigation</li>
                    </ul>
                    <p className="text-slate-700 mt-4">
                      While airline compensation doesn't cover business losses directly, proper documentation 
                      helps with internal company settlements and potential exceptional claims.
                    </p>
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
                      <strong>Important clarification:</strong> EU compensation belongs to the <strong>passenger</strong> 
                      (you, the employee), not the company that paid for the ticket.
                    </p>
                    <p className="text-slate-700">
                      However, check your:
                    </p>
                    <ul className="space-y-2 ml-6 text-slate-700">
                      <li>• Employment contract</li>
                      <li>• Company travel policy</li>
                      <li>• Internal regulations</li>
                    </ul>
                    <p className="text-slate-700 mt-4">
                      Some companies have policies requiring employees to transfer compensation to the company. 
                      This is legal if stated in your contract or travel policy.
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

            {/* Expense Settlement */}
            <section className="mb-12">
              <h2 className="text-3xl font-bold text-slate-900 mb-6">
                Settling Expenses with Your Employer
              </h2>
              
              <div className="space-y-6">
                <Card className="border-slate-200">
                  <CardHeader>
                    <CardTitle className="text-xl">Step 1: Organize Documentation</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-slate-700 mb-3">
                      Create a comprehensive expense file with clear categories:
                    </p>
                    <div className="space-y-3">
                      <div>
                        <h4 className="font-semibold text-slate-900 mb-2">Flight Documentation:</h4>
                        <ul className="space-y-1 ml-6 text-slate-700 text-sm">
                          <li>• Original boarding pass</li>
                          <li>• Delay confirmation from airline</li>
                          <li>• All airline communications</li>
                          <li>• Photos of departure boards</li>
                        </ul>
                      </div>
                      <div>
                        <h4 className="font-semibold text-slate-900 mb-2">Expense Receipts:</h4>
                        <ul className="space-y-1 ml-6 text-slate-700 text-sm">
                          <li>• Hotel invoices (if airline didn't provide)</li>
                          <li>• Meal receipts</li>
                          <li>• Transportation costs (taxis, public transport)</li>
                          <li>• Phone/internet charges</li>
                        </ul>
                      </div>
                    </div>
                  </CardContent>
                </Card>

                <Card className="border-slate-200">
                  <CardHeader>
                    <CardTitle className="text-xl">Step 2: Complete Expense Report</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-slate-700 mb-3">
                      In your standard business trip expense form:
                    </p>
                    <ul className="space-y-2 ml-6 text-slate-700">
                      <li>• Mark extended days due to delay</li>
                      <li>• Attach separate explanatory note</li>
                      <li>• Clearly indicate what airline covered vs. what you paid</li>
                      <li>• Highlight delay-related vs. regular business expenses</li>
                      <li>• Reference correspondence with supervisor</li>
                    </ul>
                  </CardContent>
                </Card>

                <Card className="border-slate-200">
                  <CardHeader>
                    <CardTitle className="text-xl">Step 3: Communicate Proactively</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-slate-700 mb-3">
                      Don't wait until month-end to submit unusual expenses:
                    </p>
                    <ul className="space-y-2 ml-6 text-slate-700">
                      <li>• Inform HR/Accounting early about the situation</li>
                      <li>• Ask about specific procedures for delay-related costs</li>
                      <li>• Explain why certain expenses are higher than usual</li>
                      <li>• Maintain professional tone - delays aren't your fault</li>
                      <li>• Follow up on reimbursement timeline</li>
                    </ul>
                  </CardContent>
                </Card>
              </div>
            </section>

            {/* Extraordinary Circumstances */}
            <section className="mb-12">
              <h2 className="text-3xl font-bold text-slate-900 mb-6">
                Understanding "Extraordinary Circumstances"
              </h2>
              
              <div className="prose prose-lg max-w-none mb-6">
                <p className="text-lg text-slate-700 leading-relaxed">
                  Airlines are exempt from paying compensation if delays are caused by extraordinary circumstances 
                  beyond their control. Understanding these is crucial for realistic expectations.
                </p>
              </div>

              <div className="grid md:grid-cols-2 gap-6">
                <Card className="border-red-200 bg-red-50">
                  <CardHeader>
                    <CardTitle className="text-lg text-red-900">
                      NO Compensation (Extraordinary)
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <ul className="space-y-2 text-red-800">
                      <li className="flex items-start gap-2">
                        <span className="text-red-600 font-bold mt-0.5">✗</span>
                        <span>Severe weather (storms, heavy snow, volcanic ash)</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="text-red-600 font-bold mt-0.5">✗</span>
                        <span>Political instability, security risks</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="text-red-600 font-bold mt-0.5">✗</span>
                        <span>Air traffic control strikes</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="text-red-600 font-bold mt-0.5">✗</span>
                        <span>Bird strikes, runway debris</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="text-red-600 font-bold mt-0.5">✗</span>
                        <span>Medical emergency on previous flight</span>
                      </li>
                    </ul>
                  </CardContent>
                </Card>

                <Card className="border-green-200 bg-green-50">
                  <CardHeader>
                    <CardTitle className="text-lg text-green-900">
                      YES Compensation (Airline's Responsibility)
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <ul className="space-y-2 text-green-800">
                      <li className="flex items-start gap-2">
                        <CheckCircle className="h-5 w-5 text-green-600 flex-shrink-0 mt-0.5" />
                        <span>Technical/mechanical problems</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <CheckCircle className="h-5 w-5 text-green-600 flex-shrink-0 mt-0.5" />
                        <span>Crew shortages, scheduling issues</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <CheckCircle className="h-5 w-5 text-green-600 flex-shrink-0 mt-0.5" />
                        <span>Airline staff strikes</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <CheckCircle className="h-5 w-5 text-green-600 flex-shrink-0 mt-0.5" />
                        <span>Overbooking situations</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <CheckCircle className="h-5 w-5 text-green-600 flex-shrink-0 mt-0.5" />
                        <span>Previous flight delays (domino effect)</span>
                      </li>
                    </ul>
                  </CardContent>
                </Card>
              </div>

              <Alert className="mt-6 border-slate-200 bg-slate-50">
                <AlertDescription className="text-slate-700">
                  <strong>Important:</strong> Airlines often claim "extraordinary circumstances" to avoid compensation. 
                  If in doubt, file your claim anyway - let them prove it. Vague explanations like "operational reasons" 
                  are typically NOT extraordinary circumstances.
                </AlertDescription>
              </Alert>
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
                      How long do I have to file a compensation claim?
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-slate-700">
                      In most EU countries, you have up to <strong>3 years</strong> from the flight date. 
                      However, filing sooner is better - evidence is fresher, and airlines respond faster. 
                      Some countries have shorter limitation periods (2 years), so don't delay unnecessarily.
                    </p>
                  </CardContent>
                </Card>

                <Card className="border-slate-200">
                  <CardHeader>
                    <CardTitle className="text-lg">
                      What if I took a connecting flight and the first was delayed?
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-slate-700">
                      If you booked both flights as a single reservation and missed your connection due to the first 
                      flight's delay, you're covered. The <strong>total arrival delay</strong> at your final destination 
                      counts. If you booked flights separately, each is treated independently.
                    </p>
                  </CardContent>
                </Card>

                <Card className="border-slate-200">
                  <CardHeader>
                    <CardTitle className="text-lg">
                      Can I claim compensation if I chose a later flight voluntarily?
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-slate-700">
                      Generally no. If the airline offered you a reasonably timed alternative and you chose a later 
                      flight for personal convenience, compensation may not apply. However, if no reasonable alternatives 
                      were offered and you had to accept a significantly delayed flight, you should still be eligible.
                    </p>
                  </CardContent>
                </Card>

                <Card className="border-slate-200">
                  <CardHeader>
                    <CardTitle className="text-lg">
                      What if the airline says they'll email me but never do?
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-slate-700">
                      Airlines are legally required to respond to compensation claims. If they ignore you or keep 
                      stalling, you have several options: (1) File a complaint with national aviation authority, 
                      (2) Use a claim service like ClaimWinger that handles airline resistance, (3) Consider small 
                      claims court if the amount justifies it.
                    </p>
                  </CardContent>
                </Card>

                <Card className="border-slate-200">
                  <CardHeader>
                    <CardTitle className="text-lg">
                      Does compensation affect my employer's relationship with the airline?
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-slate-700">
                      No. Passenger compensation is a legal right under EU law, separate from corporate contracts. 
                      Airlines cannot penalize your company for employee compensation claims. Your employer's corporate 
                      rates, discounts, and partnerships are unaffected by individual passenger claims.
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
                    Check Your Compensation Eligibility
                  </CardTitle>
                  <CardDescription className="text-slate-300 text-lg">
                    If your business flight was delayed 3+ hours, you may be entitled to €250-€600 compensation. 
                    Quick check takes less than 2 minutes.
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="flex flex-col sm:flex-row gap-4">
                    <Button asChild size="lg" className="bg-[#FF6B35] hover:bg-[#FF6B35]/90">
                      <a href="https://claimwinger.com/en" target="_blank" rel="noopener noreferrer">
                        Check Your Claim
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
                <Link href="/en/cancelled-business-trip" className="group">
                  <Card className="border-slate-200 hover:border-[#FF6B35]/50 hover:shadow-xl transition-all h-full">
                    <CardHeader>
                      <CardTitle className="group-hover:text-[#FF6B35] transition-colors flex items-start justify-between">
                        Cancelled Business Flight
                        <ArrowRight className="h-5 w-5 text-slate-400 group-hover:text-[#FF6B35] group-hover:translate-x-1 transition-all flex-shrink-0" />
                      </CardTitle>
                      <CardDescription>
                        What to do when your business flight is cancelled? Rights and procedures.
                      </CardDescription>
                    </CardHeader>
                  </Card>
                </Link>

                <Link href="/en/business-flight-compensation" className="group">
                  <Card className="border-slate-200 hover:border-[#FF6B35]/50 hover:shadow-xl transition-all h-full">
                    <CardHeader>
                      <CardTitle className="group-hover:text-[#FF6B35] transition-colors flex items-start justify-between">
                        Business Flight Compensation
                        <ArrowRight className="h-5 w-5 text-slate-400 group-hover:text-[#FF6B35] group-hover:translate-x-1 transition-all flex-shrink-0" />
                      </CardTitle>
                      <CardDescription>
                        Who gets compensation for business flights? Employee or employer?
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
