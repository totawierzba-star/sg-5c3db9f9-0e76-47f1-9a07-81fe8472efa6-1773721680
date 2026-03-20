import { SEO } from "@/components/SEO";
import Link from "next/link";
import { Plane, AlertTriangle, Clock, Euro, FileText, CheckCircle2, XCircle, Crown, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert";
import { Card, CardContent } from "@/components/ui/card";

export default function BritishAirwaysCompensation() {
  return (
    <>
      <SEO
        title="British Airways Flight Delay Compensation for Business Travelers | BA Claims Guide"
        description="Complete guide to claiming €250-€600 compensation for BA delays on business trips. Learn about Executive Club, connecting flights, and UK/EU regulations post-Brexit."
        image="/images/ba-compensation-business.jpg"
      />

      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Article",
            "headline": "British Airways Flight Delay Compensation for Business Travelers",
            "description": "Complete guide to claiming €250-€600 compensation for BA delays on business trips",
            "author": {
              "@type": "Person",
              "name": "Mateusz Wdowiak",
              "url": "https://bizneslot.info/en/about"
            },
            "publisher": {
              "@type": "Organization",
              "name": "bizneslot.info",
              "logo": {
                "@type": "ImageObject",
                "url": "https://bizneslot.info/bizneslotlogotyp.png"
              }
            },
            "datePublished": "2025-02-26",
            "dateModified": "2025-02-26",
            "mainEntityOfPage": {
              "@type": "WebPage",
              "@id": "https://bizneslot.info/en/articles/british-airways-flight-delay-compensation-business"
            }
          })
        }}
      />

      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "FAQPage",
            "mainEntity": [
              {
                "@type": "Question",
                "name": "Does BA compensation apply to flights after Brexit?",
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": "Yes. UK flights departing from EU airports are still covered by EU261. Flights departing from UK airports to the EU are covered by UK261 (identical rules). Only UK domestic flights or UK to non-EU destinations follow UK261 exclusively."
                }
              },
              {
                "@type": "Question",
                "name": "Can I claim if my company booked through Amex GBT or CWT?",
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": "Yes. The compensation right belongs to the passenger whose name is on the ticket, not the corporate travel agency. You can claim directly with BA or through a claim service."
                }
              },
              {
                "@type": "Question",
                "name": "What if I missed a connecting flight due to BA delay?",
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": "If booked on a single BA ticket (or codeshare with oneworld partner), compensation is based on your final destination arrival delay. If separate tickets, BA is only liable for the first delayed flight."
                }
              },
              {
                "@type": "Question",
                "name": "Does my Executive Club status affect compensation amounts?",
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": "No. EU261/UK261 compensation is the same for all passengers regardless of fare class or loyalty status. Gold Guest List members, Silver, Bronze - everyone gets the same €250-€600 based on distance and delay duration."
                }
              },
              {
                "@type": "Question",
                "name": "Are BA strikes eligible for compensation?",
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": "It depends. Strikes by BA staff (pilots, cabin crew, ground staff) are within the airline's control and are eligible for compensation (EU Court ruling 2018). External strikes (ATC, airport security) are considered extraordinary circumstances and are not eligible."
                }
              },
              {
                "@type": "Question",
                "name": "Can BA offer vouchers instead of cash?",
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": "They may offer Avios or travel vouchers initially, but you have the legal right to demand cash payment (bank transfer). Never accept vouchers unless you genuinely prefer them - you cannot change your mind later."
                }
              }
            ]
          })
        }}
      />

      <div className="min-h-screen bg-slate-50 dark:bg-slate-900 font-sans">
        {/* Hero Section */}
        <div className="bg-gradient-to-br from-[#075AAA] via-[#2C5F9A] to-[#1A3E6E] text-white py-16">
          <div className="container mx-auto px-4 max-w-4xl">
            <div className="flex items-center gap-2 text-blue-200 font-semibold mb-4">
              <Crown className="h-5 w-5" />
              <span>Premium Carrier Guide</span>
            </div>
            <h1 className="text-4xl md:text-5xl font-bold mb-6 leading-tight">
              British Airways Flight Delay Compensation for Business Travelers
            </h1>
            <p className="text-xl text-blue-100 mb-8 leading-relaxed max-w-2xl">
              Flying Club World or First? Your compensation rights are the same as Economy. If your BA business trip was delayed 3+ hours, you're entitled to €250-€600—regardless of Executive Club status or ticket price.
            </p>
            
            <div className="flex flex-wrap gap-4">
              <Button asChild size="lg" className="bg-white text-[#075AAA] hover:bg-blue-50 font-bold border-none">
                <Link href="https://claimwinger.com/en/check-flight?utm_source=bizneslot&utm_medium=article&utm_campaign=ba">
                  Check BA Flight &rarr;
                </Link>
              </Button>
              <Button asChild variant="outline" size="lg" className="bg-transparent border-white text-white hover:bg-white/10">
                <Link href="#step-by-step">
                  How to Claim
                </Link>
              </Button>
            </div>
          </div>
        </div>

        <article className="container mx-auto px-4 max-w-4xl py-12">
          {/* Key Takeaways Alert */}
          <Alert className="mb-12 bg-white dark:bg-slate-800 border-l-4 border-l-[#075AAA] shadow-sm">
            <AlertTriangle className="h-5 w-5 text-[#075AAA]" />
            <AlertTitle className="text-lg font-bold text-[#075AAA] mb-2">Key Rights for BA Business Travelers</AlertTitle>
            <AlertDescription className="text-slate-600 dark:text-slate-300">
              <ul className="list-disc pl-5 space-y-1">
                <li>Compensation applies to delays of <strong>3+ hours</strong> on arrival at final destination.</li>
                <li><strong>Post-Brexit:</strong> UK flights to/from EU still covered by EU261 or UK261 (identical rules).</li>
                <li>Compensation ranges from <strong>€250 to €600</strong> based on distance, not fare class.</li>
                <li><strong>Executive Club status does not affect</strong> compensation amounts or eligibility.</li>
                <li>BA staff strikes ARE claimable; external strikes (ATC, airport) usually are not.</li>
              </ul>
            </AlertDescription>
          </Alert>

          <div className="grid grid-cols-1 md:grid-cols-[1fr_300px] gap-12">
            
            {/* Main Content */}
            <div className="prose prose-lg dark:prose-invert max-w-none">
              
              <h2>British Airways and EU261/UK261: Post-Brexit Clarification</h2>
              <p>
                One of the most common questions from business travelers: <em>"Does EU261 still apply to British Airways after Brexit?"</em>
              </p>
              <p>
                The answer is <strong>yes, with nuances</strong>. The UK adopted its own version called <strong>UK261</strong>, which mirrors EU261 almost identically. Here's how it works:
              </p>

              <div className="not-prose my-8">
                <div className="overflow-x-auto">
                  <table className="w-full border-collapse bg-white dark:bg-slate-800 shadow-sm rounded-lg overflow-hidden">
                    <thead className="bg-slate-100 dark:bg-slate-700">
                      <tr>
                        <th className="p-4 text-left font-semibold">Flight Route</th>
                        <th className="p-4 text-left font-semibold">Applicable Regulation</th>
                        <th className="p-4 text-left font-semibold">Example</th>
                      </tr>
                    </thead>
                    <tbody className="divide-y divide-slate-200 dark:divide-slate-700">
                      <tr>
                        <td className="p-4">EU → UK</td>
                        <td className="p-4 text-[#075AAA] font-semibold">EU261</td>
                        <td className="p-4 text-slate-600 dark:text-slate-400">Paris CDG → London LHR</td>
                      </tr>
                      <tr>
                        <td className="p-4">UK → EU</td>
                        <td className="p-4 text-[#075AAA] font-semibold">UK261</td>
                        <td className="p-4 text-slate-600 dark:text-slate-400">London LHR → Frankfurt FRA</td>
                      </tr>
                      <tr>
                        <td className="p-4">UK → UK</td>
                        <td className="p-4 text-[#075AAA] font-semibold">UK261</td>
                        <td className="p-4 text-slate-600 dark:text-slate-400">London LHR → Edinburgh EDI</td>
                      </tr>
                      <tr>
                        <td className="p-4">UK → Non-EU</td>
                        <td className="p-4 text-[#075AAA] font-semibold">UK261</td>
                        <td className="p-4 text-slate-600 dark:text-slate-400">London LHR → New York JFK</td>
                      </tr>
                    </tbody>
                  </table>
                </div>
                <p className="text-sm text-slate-500 mt-2 text-center italic">
                  *Compensation amounts and conditions are identical under EU261 and UK261.
                </p>
              </div>

              <h2 id="compensation-amounts">Compensation Amounts for BA Flights</h2>
              <p>
                British Airways operates short-haul, medium-haul, and long-haul routes. Compensation depends on flight distance and delay duration at final destination.
              </p>
              
              <div className="not-prose my-8">
                <div className="overflow-x-auto">
                  <table className="w-full border-collapse bg-white dark:bg-slate-800 shadow-sm rounded-lg overflow-hidden">
                    <thead className="bg-slate-100 dark:bg-slate-700">
                      <tr>
                        <th className="p-4 text-left font-semibold">Flight Distance</th>
                        <th className="p-4 text-left font-semibold">Example Route</th>
                        <th className="p-4 text-left font-semibold">Compensation</th>
                      </tr>
                    </thead>
                    <tbody className="divide-y divide-slate-200 dark:divide-slate-700">
                      <tr>
                        <td className="p-4">Up to 1,500 km</td>
                        <td className="p-4 text-slate-600 dark:text-slate-400">London ↔ Edinburgh<br/>London ↔ Dublin</td>
                        <td className="p-4 font-bold text-[#075AAA]">€250</td>
                      </tr>
                      <tr>
                        <td className="p-4">1,500 km - 3,500 km</td>
                        <td className="p-4 text-slate-600 dark:text-slate-400">London ↔ Athens<br/>London ↔ Marrakech</td>
                        <td className="p-4 font-bold text-[#075AAA]">€400</td>
                      </tr>
                      <tr>
                        <td className="p-4">Over 3,500 km</td>
                        <td className="p-4 text-slate-600 dark:text-slate-400">London ↔ New York<br/>London ↔ Dubai</td>
                        <td className="p-4 font-bold text-[#075AAA]">€600</td>
                      </tr>
                    </tbody>
                  </table>
                </div>
                <p className="text-sm text-slate-500 mt-2 text-center italic">
                  *Delay must be at least 3 hours upon arrival at final destination. For flights &gt;3,500 km with delays between 3-4 hours, compensation is reduced to €300.
                </p>
              </div>

              <h2>Business Travel Specifics: Who Gets the Money?</h2>
              <p>
                British Airways is a popular choice for corporate travel in the UK and Europe. Many companies book through agencies like American Express Global Business Travel (Amex GBT), Corporate Traveller, or CWT.
              </p>
              <div className="bg-blue-50 dark:bg-blue-900/20 p-6 rounded-lg border border-blue-100 dark:border-blue-800 my-6">
                <h3 className="text-lg font-semibold text-blue-800 dark:text-blue-300 mt-0 mb-2">The General Rule</h3>
                <p className="mb-0 text-blue-700 dark:text-blue-200">
                  Compensation belongs to the <strong>passenger</strong> whose name is on the boarding pass, regardless of who paid for the ticket or which agency booked it. Your employer can only claim it if your employment contract explicitly states that you must transfer such compensation to them.
                </p>
              </div>
              <p>
                Read more about this in our detailed guide: <Link href="/en/articles/flight-delay-compensation-business-travel-employee-or-employer" className="text-blue-600 hover:underline">Employee vs Employer Rights</Link>.
              </p>

              <h2>Executive Club, Avios, and Compensation</h2>
              <p>
                Many business travelers hold BA Executive Club status (Blue, Bronze, Silver, Gold, or Gold Guest List). A common misconception is that higher tier members receive higher compensation or faster processing.
              </p>
              <div className="bg-amber-50 dark:bg-amber-900/20 p-6 rounded-lg border border-amber-200 dark:border-amber-800 my-6">
                <h3 className="text-lg font-semibold text-amber-800 dark:text-amber-300 mt-0 mb-2">⚠️ Important Clarification</h3>
                <p className="mb-0 text-amber-700 dark:text-amber-200">
                  <strong>Your Executive Club status does NOT affect EU261/UK261 compensation amounts.</strong> A Gold Guest List member flying Club World and a Blue member flying Economy on the same delayed flight receive the same €400 for a medium-haul delay. Compensation is distance-based, not fare-class or loyalty-tier based.
                </p>
              </div>
              <p>
                However, BA may offer <strong>Avios points or travel vouchers</strong> as goodwill gestures separately from your legal compensation. These are voluntary offers and should not be confused with your statutory rights. Always insist on cash (bank transfer) for EU261/UK261 claims.
              </p>

              <h2 id="step-by-step">How to Claim from British Airways: Step-by-Step</h2>
              <p>
                British Airways has a dedicated compensation team, but the process can be slow. Here's how to navigate it efficiently.
              </p>

              <div className="space-y-6 not-prose my-8">
                <div className="flex gap-4">
                  <div className="flex-shrink-0 w-8 h-8 rounded-full bg-[#075AAA] text-white flex items-center justify-center font-bold">1</div>
                  <div>
                    <h3 className="text-xl font-bold mb-2">Gather Your Documents</h3>
                    <p className="text-slate-600 dark:text-slate-300">
                      You need your booking reference (6-character PNR), boarding pass, and ideally any delay notification emails from BA.
                    </p>
                  </div>
                </div>

                <div className="flex gap-4">
                  <div className="flex-shrink-0 w-8 h-8 rounded-full bg-[#075AAA] text-white flex items-center justify-center font-bold">2</div>
                  <div>
                    <h3 className="text-xl font-bold mb-2">Verify the Reason</h3>
                    <p className="text-slate-600 dark:text-slate-300">
                      BA often cites "extraordinary circumstances". Check if other airlines were flying the same route. Staff strikes (pilots, cabin crew) ARE claimable. ATC strikes, severe weather usually are not.
                    </p>
                  </div>
                </div>

                <div className="flex gap-4">
                  <div className="flex-shrink-0 w-8 h-8 rounded-full bg-[#075AAA] text-white flex items-center justify-center font-bold">3</div>
                  <div>
                    <h3 className="text-xl font-bold mb-2">Submit the Claim</h3>
                    <p className="text-slate-600 dark:text-slate-300">
                      Use BA's online customer relations form or email their compensation team. Reference EU261 or UK261 explicitly. Include your IBAN for bank transfer.
                    </p>
                  </div>
                </div>

                <div className="flex gap-4">
                  <div className="flex-shrink-0 w-8 h-8 rounded-full bg-[#075AAA] text-white flex items-center justify-center font-bold">4</div>
                  <div>
                    <h3 className="text-xl font-bold mb-2">Wait for Response (Up to 8 Weeks)</h3>
                    <p className="text-slate-600 dark:text-slate-300">
                      BA typically responds within 4-8 weeks. If they reject your claim or don't respond within 8 weeks, you can escalate to the UK Civil Aviation Authority (CAA) Alternative Dispute Resolution (ADR) scheme.
                    </p>
                  </div>
                </div>

                <div className="flex gap-4">
                  <div className="flex-shrink-0 w-8 h-8 rounded-full bg-[#075AAA] text-white flex items-center justify-center font-bold">5</div>
                  <div>
                    <h3 className="text-xl font-bold mb-2">Escalate if Necessary</h3>
                    <p className="text-slate-600 dark:text-slate-300">
                      If BA rejects your claim unfairly, you can use the free CAA ADR service (for UK departures) or the appropriate national enforcement body for EU departures. Alternatively, use a no-win-no-fee claim service like ClaimWinger.
                    </p>
                  </div>
                </div>
              </div>

              <h3>Common Hurdles with BA Claims</h3>
              <ul>
                <li><strong>"Avios Instead of Cash":</strong> BA may offer Avios or vouchers first. You have the right to refuse and demand bank transfer. Once you accept vouchers, you cannot claim cash later.</li>
                <li><strong>Connecting Flights:</strong> If you booked London-Paris-Dubai on one BA ticket and the Paris delay made you miss Dubai, compensation is based on your London-Dubai delay, not individual segments.</li>
                <li><strong>Codeshare Confusion:</strong> BA operates codeshares with American Airlines, Iberia, and other oneworld partners. If your ticket number starts with "BA", British Airways is responsible regardless of the operating airline.</li>
                <li><strong>Slow Response Times:</strong> BA's customer relations team can take 6-8 weeks to respond, especially during peak disruption periods (summer, strikes). Be patient but persistent.</li>
              </ul>

              <div className="my-12 p-8 bg-slate-100 dark:bg-slate-800 rounded-xl text-center">
                <h3 className="text-2xl font-bold mb-4">Don't want to chase BA for months?</h3>
                <p className="mb-6 text-slate-600 dark:text-slate-300">
                  ClaimWinger handles the entire process for you. We know BA's systems and escalation paths. No win, no fee.
                </p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <Button asChild size="lg" className="bg-[#075AAA] text-white hover:bg-blue-800">
                    <Link href="https://claimwinger.com/en/check-flight?utm_source=bizneslot&utm_medium=article&utm_campaign=ba_bottom">
                      Start BA Claim &rarr;
                    </Link>
                  </Button>
                </div>
              </div>

              <h2>FAQ: British Airways Business Travel Compensation</h2>
              <Accordion type="single" collapsible className="w-full not-prose">
                
                <AccordionItem value="item-1">
                  <AccordionTrigger>Does BA compensation apply to flights after Brexit?</AccordionTrigger>
                  <AccordionContent>
                    Yes. UK flights departing from EU airports are still covered by EU261. Flights departing from UK airports to the EU are covered by UK261 (identical rules). Only UK domestic flights or UK to non-EU destinations follow UK261 exclusively.
                  </AccordionContent>
                </AccordionItem>

                <AccordionItem value="item-2">
                  <AccordionTrigger>Can I claim if my company booked through Amex GBT or CWT?</AccordionTrigger>
                  <AccordionContent>
                    Yes. The compensation right belongs to the passenger whose name is on the ticket, not the corporate travel agency. You can claim directly with BA or through a claim service.
                  </AccordionContent>
                </AccordionItem>

                <AccordionItem value="item-3">
                  <AccordionTrigger>What if I missed a connecting flight due to BA delay?</AccordionTrigger>
                  <AccordionContent>
                    If booked on a single BA ticket (or codeshare with oneworld partner), compensation is based on your final destination arrival delay. If separate tickets, BA is only liable for the first delayed flight.
                  </AccordionContent>
                </AccordionItem>

                <AccordionItem value="item-4">
                  <AccordionTrigger>Does my Executive Club status affect compensation amounts?</AccordionTrigger>
                  <AccordionContent>
                    No. EU261/UK261 compensation is the same for all passengers regardless of fare class or loyalty status. Gold Guest List members, Silver, Bronze - everyone gets the same €250-€600 based on distance and delay duration.
                  </AccordionContent>
                </AccordionItem>

                <AccordionItem value="item-5">
                  <AccordionTrigger>Are BA strikes eligible for compensation?</AccordionTrigger>
                  <AccordionContent>
                    It depends. Strikes by BA staff (pilots, cabin crew, ground staff) are within the airline's control and are eligible for compensation (EU Court ruling 2018). External strikes (ATC, airport security) are considered extraordinary circumstances and are not eligible.
                  </AccordionContent>
                </AccordionItem>

                <AccordionItem value="item-6">
                  <AccordionTrigger>Can BA offer vouchers instead of cash?</AccordionTrigger>
                  <AccordionContent>
                    They may offer Avios or travel vouchers initially, but you have the legal right to demand cash payment (bank transfer). Never accept vouchers unless you genuinely prefer them - you cannot change your mind later.
                  </AccordionContent>
                </AccordionItem>

              </Accordion>

            </div>

            {/* Sidebar */}
            <div className="space-y-8">
              <div className="bg-white dark:bg-slate-800 p-6 rounded-xl shadow-sm border border-slate-200 dark:border-slate-700 sticky top-24">
                <h3 className="text-xl font-bold mb-4">Quick Summary</h3>
                <ul className="space-y-3 text-sm">
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="h-4 w-4 text-green-500 mt-1" />
                    <span>EU261/UK261 applies to BA post-Brexit</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="h-4 w-4 text-green-500 mt-1" />
                    <span>Delay &gt;3h = €250 - €600</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="h-4 w-4 text-green-500 mt-1" />
                    <span>Executive Club status doesn't affect amounts</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="h-4 w-4 text-green-500 mt-1" />
                    <span>Staff strikes are claimable</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <XCircle className="h-4 w-4 text-red-500 mt-1" />
                    <span>Response time: 4-8 weeks</span>
                  </li>
                </ul>
                
                <div className="mt-6 pt-6 border-t border-slate-200 dark:border-slate-700">
                  <h4 className="font-semibold mb-2">Helpful Links</h4>
                  <ul className="space-y-2 text-sm text-blue-600 dark:text-blue-400">
                    <li><Link href="/en/articles/eu261-compensation-business-flights-guide" className="hover:underline">EU261 Guide</Link></li>
                    <li><Link href="/en/delayed-business-trip" className="hover:underline">Delayed Trip Info</Link></li>
                    <li><Link href="/en/articles/can-employer-keep-flight-compensation" className="hover:underline">Employer Rights</Link></li>
                  </ul>
                </div>
              </div>
            </div>

          </div>
        </article>
      </div>
    </>
  );
}
