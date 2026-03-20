import { SEO } from "@/components/SEO";
import Link from "next/link";
import { Plane, AlertTriangle, Clock, Euro, FileText, CheckCircle2, XCircle, Building2, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert";

export default function SchipholHubDelays() {
  return (
    <>
      <SEO
        title="Amsterdam Schiphol Hub Flight Delays & Business Compensation | AMS Guide"
        description="Flying through Amsterdam Schiphol (AMS) for business? Learn about EU261 compensation for KLM delays, missed connections, and hub operational challenges."
        image="/og-image.png"
      />

      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Article",
            "headline": "Amsterdam Schiphol Hub Flight Delays & Business Travel Compensation",
            "description": "Complete guide to EU261 compensation when flying through Amsterdam Schiphol for business travel",
            "author": {
              "@type": "Person",
              "name": "Paweł Jastrzębski"
            },
            "datePublished": "2025-02-27",
            "dateModified": "2025-02-27"
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
                "name": "Are Schiphol's 2023-2024 staffing issues considered extraordinary circumstances?",
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": "No. While Schiphol experienced significant security and baggage handling staffing shortages, these are operational issues within the airport/airline's control. Airlines are expected to plan for known challenges. Only sudden, unforeseeable events qualify as extraordinary circumstances under EU261."
                }
              },
              {
                "@type": "Question",
                "name": "What if my KLM flight is delayed due to 'air traffic congestion at Schiphol'?",
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": "If the delay is due to general hub congestion (aircraft positioning, gate availability), you're eligible for compensation. If it's caused by Air Traffic Control (LVNL) decisions, the airline may claim extraordinary circumstances. Airlines must provide specific evidence from LVNL."
                }
              },
              {
                "@type": "Question",
                "name": "Does the Schiphol flight cap affect my compensation rights?",
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": "No. Schiphol's government-imposed flight cap (reduced from 500,000 to 460,000 annual movements) is an operational constraint airlines must plan around. If your flight is delayed or cancelled due to the cap, this is NOT an extraordinary circumstance."
                }
              },
              {
                "@type": "Question",
                "name": "What about missed connections at Schiphol on separate tickets?",
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": "If you booked flights on separate tickets (two booking references), the airline is NOT responsible for missed connections. You must claim only for the flight that was actually delayed. Always book connecting flights on a single ticket for business travel protection."
                }
              },
              {
                "@type": "Question",
                "name": "Can I claim if my flight is delayed at Schiphol but I'm flying with a non-EU airline?",
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": "Yes, if the flight DEPARTS from Schiphol (EU airport). EU261 covers all flights departing EU airports, regardless of airline nationality. For flights arriving at Schiphol from outside the EU, only EU/EEA/UK/Swiss airlines are covered."
                }
              }
            ]
          })
        }}
      />

      <div className="min-h-screen bg-slate-50 dark:bg-slate-900 font-sans">
        {/* Hero Section */}
        <div className="bg-gradient-to-br from-orange-900 via-orange-800 to-orange-700 text-white py-20">
          <div className="container mx-auto px-4 max-w-4xl">
            <div className="flex items-center gap-3 mb-6 text-orange-200">
              <Building2 className="h-5 w-5" />
              <span>Hub Analysis</span>
            </div>
            <h1 className="text-4xl md:text-5xl font-bold mb-6 leading-tight">
              Amsterdam Schiphol Hub Flight Delays: Business Travel Compensation
            </h1>
            <p className="text-xl text-orange-100 mb-8 leading-relaxed max-w-3xl">
              Amsterdam Schiphol (AMS) is KLM's primary hub and a major European transfer point. Recent operational challenges (staffing shortages, flight caps) have increased delays, but your EU261 compensation rights remain intact.
            </p>
            
            <div className="flex flex-wrap gap-4">
              <Button asChild size="lg" className="bg-white text-orange-900 hover:bg-orange-50 font-bold">
                <Link href="#compensation">
                  <Euro className="mr-2 h-5 w-5" />
                  Compensation Rules
                </Link>
              </Button>
            </div>
          </div>
        </div>

        <article className="container mx-auto px-4 max-w-4xl py-12">
          {/* Key Takeaways */}
          <Alert className="mb-12 bg-white dark:bg-slate-800 border-l-4 border-l-orange-600 shadow-sm">
            <AlertTriangle className="h-5 w-5 text-orange-600" />
            <AlertTitle className="text-lg font-bold mb-3 text-slate-900 dark:text-white">Key Takeaways for Business Travelers</AlertTitle>
            <AlertDescription className="text-slate-700 dark:text-slate-300">
              <ul className="space-y-2 list-disc list-inside">
                <li><strong>Schiphol staffing issues ≠ extraordinary circumstances</strong> - Airlines must plan for known operational challenges</li>
                <li><strong>Flight cap delays are compensable</strong> - Government restrictions don't exempt airlines from EU261</li>
                <li><strong>KLM hub complexity is NOT a valid excuse</strong> - Routine congestion is within airline control</li>
                <li><strong>Single-ticket connections are protected</strong> - Entire journey covered if booked together</li>
                <li><strong>Compensation: €250-€600 depending on distance</strong> - Same EU261 structure applies</li>
              </ul>
            </AlertDescription>
          </Alert>

          <div className="grid grid-cols-1 md:grid-cols-[1fr_300px] gap-12">
            
            {/* Main Content */}
            <div className="prose prose-lg dark:prose-invert max-w-none">
              
              <h2>Why Schiphol Flight Delays Matter for Business Travelers</h2>
              <p>
                Amsterdam Schiphol (AMS) is the third-busiest airport in Europe and serves as KLM's primary hub. For business travelers, Schiphol is a critical transfer point for routes to/from North America, Asia, and across Europe.
              </p>
              <p>
                Since 2023, Schiphol has faced significant operational challenges:
              </p>
              <ul>
                <li><strong>Staffing Shortages:</strong> Security and baggage handling delays (average wait times exceeded 2 hours in summer 2023)</li>
                <li><strong>Flight Cap:</strong> Government-imposed reduction from 500,000 to 460,000 annual movements</li>
                <li><strong>Infrastructure Strain:</strong> Runway maintenance and gate congestion</li>
              </ul>
              <p>
                Despite these challenges, <strong>airlines cannot use "Schiphol operational issues" as a blanket excuse</strong> to avoid EU261 compensation. Let's examine when you're entitled to claim.
              </p>

              <h2 id="compensation">Schiphol Compensation Amounts</h2>
              <p>
                EU261 compensation for flights through Schiphol follows standard distance-based rules:
              </p>

              <div className="not-prose my-8">
                <div className="overflow-x-auto">
                  <table className="w-full border-collapse border border-slate-300 dark:border-slate-700">
                    <thead>
                      <tr className="bg-slate-100 dark:bg-slate-800">
                        <th className="border border-slate-300 dark:border-slate-700 px-4 py-3 text-left">Flight Distance</th>
                        <th className="border border-slate-300 dark:border-slate-700 px-4 py-3 text-left">Example Routes from AMS</th>
                        <th className="border border-slate-300 dark:border-slate-700 px-4 py-3 text-left">Compensation (3h+ delay)</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr>
                        <td className="border border-slate-300 dark:border-slate-700 px-4 py-3">&lt;1,500 km</td>
                        <td className="border border-slate-300 dark:border-slate-700 px-4 py-3">London, Paris, Frankfurt, Copenhagen</td>
                        <td className="border border-slate-300 dark:border-slate-700 px-4 py-3 font-bold text-green-600">€250</td>
                      </tr>
                      <tr className="bg-slate-50 dark:bg-slate-800/50">
                        <td className="border border-slate-300 dark:border-slate-700 px-4 py-3">1,500-3,500 km</td>
                        <td className="border border-slate-300 dark:border-slate-700 px-4 py-3">Madrid, Athens, Istanbul, Dubai</td>
                        <td className="border border-slate-300 dark:border-slate-700 px-4 py-3 font-bold text-green-600">€400</td>
                      </tr>
                      <tr>
                        <td className="border border-slate-300 dark:border-slate-700 px-4 py-3">&gt;3,500 km</td>
                        <td className="border border-slate-300 dark:border-slate-700 px-4 py-3">New York, Singapore, Tokyo, São Paulo</td>
                        <td className="border border-slate-300 dark:border-slate-700 px-4 py-3 font-bold text-green-600">€600</td>
                      </tr>
                    </tbody>
                  </table>
                </div>
                <p className="text-sm text-slate-500 mt-2 text-center italic">
                  *Delay measured upon arrival at final destination. For flights &gt;3,500 km with 3-4h delay, compensation may be reduced to €300.
                </p>
              </div>

              <h2>Business Travel Scenarios at Schiphol</h2>
              
              <h3>Scenario 1: KLM Flight Delayed Due to Schiphol Congestion</h3>
              <p>
                You're flying Amsterdam → Warsaw for a client presentation. KLM delays the flight 4 hours, citing "operational congestion at Schiphol due to flight cap restrictions."
              </p>
              <div className="bg-green-50 dark:bg-green-900/20 p-4 rounded-lg border border-green-200 dark:border-green-800 my-4">
                <p className="mb-0 text-green-800 dark:text-green-200">
                  <strong>✓ Eligible:</strong> You're entitled to €250 (AMS-WAW ~1,100 km). The flight cap is a known operational constraint that KLM must plan around. This is NOT an extraordinary circumstance.
                </p>
              </div>

              <h3>Scenario 2: Missed Connection at AMS (Single Ticket)</h3>
              <p>
                You're flying San Francisco → Amsterdam → Stockholm (both flights on one KLM booking). The SFO-AMS flight arrives 90 minutes late, causing you to miss your AMS-ARN connection. You arrive in Stockholm 5 hours late.
              </p>
              <div className="bg-green-50 dark:bg-green-900/20 p-4 rounded-lg border border-green-200 dark:border-green-800 my-4">
                <p className="mb-0 text-green-800 dark:text-green-200">
                  <strong>✓ Eligible:</strong> You're entitled to €600 (SFO-ARN ~8,900 km). KLM is responsible for the entire journey when booked on a single ticket. The final arrival delay (5 hours) qualifies for full compensation.
                </p>
              </div>

              <h3>Scenario 3: Security Queue Delay (Passenger Responsibility)</h3>
              <p>
                You arrive at Schiphol 2 hours before your flight, but the security queue takes 2.5 hours. You miss your flight to Berlin.
              </p>
              <div className="bg-red-50 dark:bg-red-900/20 p-4 rounded-lg border border-red-200 dark:border-red-800 my-4">
                <p className="mb-0 text-red-800 dark:text-red-200">
                  <strong>✗ Not Eligible:</strong> You missed the flight due to late arrival at the gate, which is passenger responsibility. EU261 only covers delays/cancellations caused by the airline. (Tip: Arrive 3+ hours early at Schiphol during peak times.)
                </p>
              </div>

              <h2>Schiphol-Specific Challenges & Your Rights</h2>
              
              <h3>1. Staffing Shortages (2023-2024)</h3>
              <p>
                Schiphol's security and baggage handling staff shortages led to widespread delays. Airlines often cite these as "airport operational issues beyond our control."
              </p>
              <div className="bg-blue-50 dark:bg-blue-900/20 p-4 rounded-lg border border-blue-200 dark:border-blue-800 my-4">
                <p className="mb-2 font-bold text-blue-900 dark:text-blue-100">Your Rights:</p>
                <ul className="mb-0 space-y-1 text-blue-800 dark:text-blue-200">
                  <li>✓ Ground handling is within airline control (airlines contract these services)</li>
                  <li>✓ Known staffing issues are NOT extraordinary circumstances</li>
                  <li>✓ Airlines must plan for operational challenges at their hubs</li>
                </ul>
              </div>

              <h3>2. Flight Cap Restrictions</h3>
              <p>
                The Dutch government reduced Schiphol's annual flight cap from 500,000 to 460,000 movements in 2023 (though later suspended pending court challenges). Airlines may cite this as force majeure.
              </p>
              <div className="bg-blue-50 dark:bg-blue-900/20 p-4 rounded-lg border border-blue-200 dark:border-blue-800 my-4">
                <p className="mb-2 font-bold text-blue-900 dark:text-blue-100">Your Rights:</p>
                <ul className="mb-0 space-y-1 text-blue-800 dark:text-blue-200">
                  <li>✓ Flight cap is a regulatory constraint, not an extraordinary circumstance</li>
                  <li>✓ Airlines had advance notice and must adjust schedules accordingly</li>
                  <li>✓ If your flight is delayed/cancelled due to cap, you're eligible for compensation</li>
                </ul>
              </div>

              <h3>3. KLM Hub Complexity</h3>
              <p>
                KLM operates a "hub-and-spoke" model at Schiphol with tight connection times (typically 45-60 minutes). Airlines sometimes claim delays are due to "hub operational complexity."
              </p>
              <div className="bg-blue-50 dark:bg-blue-900/20 p-4 rounded-lg border border-blue-200 dark:border-blue-800 my-4">
                <p className="mb-2 font-bold text-blue-900 dark:text-blue-100">Your Rights:</p>
                <ul className="mb-0 space-y-1 text-blue-800 dark:text-blue-200">
                  <li>✓ Hub complexity is a normal operational factor, not extraordinary</li>
                  <li>✓ Airlines design their own hub schedules and connection times</li>
                  <li>✓ Aircraft positioning, crew scheduling, and gate management are within airline control</li>
                </ul>
              </div>

              <h2>How to Claim for Schiphol Delays</h2>
              
              <div className="not-prose my-8 space-y-4">
                <div className="flex gap-4">
                  <div className="flex-shrink-0 w-10 h-10 bg-orange-600 text-white rounded-full flex items-center justify-center font-bold">1</div>
                  <div>
                    <h4 className="text-lg font-bold mb-2 text-slate-900 dark:text-white">Document the Delay</h4>
                    <p className="text-slate-700 dark:text-slate-300">Save your boarding passes, booking confirmation, and any airline communications. Take photos of departure boards showing delay reasons.</p>
                  </div>
                </div>

                <div className="flex gap-4">
                  <div className="flex-shrink-0 w-10 h-10 bg-orange-600 text-white rounded-full flex items-center justify-center font-bold">2</div>
                  <div>
                    <h4 className="text-lg font-bold mb-2 text-slate-900 dark:text-white">File Directly with Airline</h4>
                    <p className="text-slate-700 dark:text-slate-300">Submit claim via KLM's online form (<a href="https://www.klm.com" target="_blank" rel="noopener noreferrer" className="text-orange-600 hover:underline">www.klm.com</a>) or the airline you flew with. Include all documentation.</p>
                  </div>
                </div>

                <div className="flex gap-4">
                  <div className="flex-shrink-0 w-10 h-10 bg-orange-600 text-white rounded-full flex items-center justify-center font-bold">3</div>
                  <div>
                    <h4 className="text-lg font-bold mb-2 text-slate-900 dark:text-white">Wait for Response (6-8 weeks)</h4>
                    <p className="text-slate-700 dark:text-slate-300">Airlines have legal obligation to respond. If they deny citing "Schiphol operational issues," challenge this with evidence that it's NOT extraordinary.</p>
                  </div>
                </div>

                <div className="flex gap-4">
                  <div className="flex-shrink-0 w-10 h-10 bg-orange-600 text-white rounded-full flex items-center justify-center font-bold">4</div>
                  <div>
                    <h4 className="text-lg font-bold mb-2 text-slate-900 dark:text-white">Escalate if Denied</h4>
                    <p className="text-slate-700 dark:text-slate-300">Contact Dutch Aviation Authority (ILT) or use Alternative Dispute Resolution (ADR). For business travelers, consider using a claim service (typically 25-35% commission).</p>
                  </div>
                </div>

                <div className="flex gap-4">
                  <div className="flex-shrink-0 w-10 h-10 bg-orange-600 text-white rounded-full flex items-center justify-center font-bold">5</div>
                  <div>
                    <h4 className="text-lg font-bold mb-2 text-slate-900 dark:text-white">Know Your Employer Rights</h4>
                    <p className="text-slate-700 dark:text-slate-300">Check if your employment contract addresses flight compensation ownership. In most EU countries, employee keeps compensation unless contract states otherwise.</p>
                  </div>
                </div>
              </div>

              <h2>Common Schiphol Delay Excuses (& Why They Don't Work)</h2>
              
              <Accordion type="single" collapsible className="w-full not-prose my-8">
                <AccordionItem value="item-1">
                  <AccordionTrigger className="text-left font-semibold">
                    "Security queue delays are beyond our control"
                  </AccordionTrigger>
                  <AccordionContent>
                    <p className="mb-2"><strong>Why this doesn't work:</strong></p>
                    <p>Security operations are managed by Schiphol (not the airline), but if the airline knew about staffing issues and didn't adjust schedules, it's within their control. If YOU missed the flight due to late arrival, that's passenger responsibility. If the AIRLINE delayed/cancelled the flight due to security backlogs, you're eligible.</p>
                  </AccordionContent>
                </AccordionItem>

                <AccordionItem value="item-2">
                  <AccordionTrigger className="text-left font-semibold">
                    "Flight cap forced us to cancel your flight"
                  </AccordionTrigger>
                  <AccordionContent>
                    <p className="mb-2"><strong>Why this doesn't work:</strong></p>
                    <p>The flight cap was announced in advance, giving airlines time to adjust schedules. This is a regulatory constraint, not an extraordinary circumstance. Airlines must compensate passengers for cancellations/delays resulting from schedule changes they should have anticipated.</p>
                  </AccordionContent>
                </AccordionItem>

                <AccordionItem value="item-3">
                  <AccordionTrigger className="text-left font-semibold">
                    "Baggage handling delays caused the departure delay"
                  </AccordionTrigger>
                  <AccordionContent>
                    <p className="mb-2"><strong>Why this doesn't work:</strong></p>
                    <p>Ground handling (including baggage) is contracted by the airline and is within their operational control. Even if handled by Schiphol or a third party, the airline is responsible for ensuring timely service. Baggage delays are NOT extraordinary circumstances.</p>
                  </AccordionContent>
                </AccordionItem>

                <AccordionItem value="item-4">
                  <AccordionTrigger className="text-left font-semibold">
                    "Air traffic control restrictions at Schiphol"
                  </AccordionTrigger>
                  <AccordionContent>
                    <p className="mb-2"><strong>Why this sometimes works (but rarely):</strong></p>
                    <p>If the delay was caused by LVNL (Dutch ATC) due to weather, airspace restrictions, or sudden capacity issues, this CAN be extraordinary. However, the airline must provide specific evidence (LVNL report, slot allocation data). General "ATC delays" without proof are not sufficient.</p>
                  </AccordionContent>
                </AccordionItem>

                <AccordionItem value="item-5">
                  <AccordionTrigger className="text-left font-semibold">
                    "Hub congestion is beyond our control"
                  </AccordionTrigger>
                  <AccordionContent>
                    <p className="mb-2"><strong>Why this doesn't work:</strong></p>
                    <p>Schiphol is KLM's primary hub, and they design their own wave structure (flight schedules). Gate congestion, aircraft positioning, and crew scheduling are operational factors within the airline's control. Routine hub complexity is NOT extraordinary.</p>
                  </AccordionContent>
                </AccordionItem>
              </Accordion>

              <h2>FAQ: Schiphol Flight Delays & Compensation</h2>
              
              <Accordion type="single" collapsible className="w-full not-prose my-8">
                <AccordionItem value="faq-1">
                  <AccordionTrigger className="text-left font-semibold">
                    Are Schiphol's 2023-2024 staffing issues considered extraordinary circumstances?
                  </AccordionTrigger>
                  <AccordionContent>
                    <p>No. While Schiphol experienced significant security and baggage handling staffing shortages, these are operational issues within the airport/airline's control. Airlines are expected to plan for known challenges. Only sudden, unforeseeable events qualify as extraordinary circumstances under EU261.</p>
                  </AccordionContent>
                </AccordionItem>

                <AccordionItem value="faq-2">
                  <AccordionTrigger className="text-left font-semibold">
                    What if my KLM flight is delayed due to "air traffic congestion at Schiphol"?
                  </AccordionTrigger>
                  <AccordionContent>
                    <p>If the delay is due to general hub congestion (aircraft positioning, gate availability), you're eligible for compensation. If it's caused by Air Traffic Control (LVNL) decisions, the airline may claim extraordinary circumstances. Airlines must provide specific evidence from LVNL.</p>
                  </AccordionContent>
                </AccordionItem>

                <AccordionItem value="faq-3">
                  <AccordionTrigger className="text-left font-semibold">
                    Does the Schiphol flight cap affect my compensation rights?
                  </AccordionTrigger>
                  <AccordionContent>
                    <p>No. Schiphol's government-imposed flight cap (reduced from 500,000 to 460,000 annual movements) is an operational constraint airlines must plan around. If your flight is delayed or cancelled due to the cap, this is NOT an extraordinary circumstance.</p>
                  </AccordionContent>
                </AccordionItem>

                <AccordionItem value="faq-4">
                  <AccordionTrigger className="text-left font-semibold">
                    What about missed connections at Schiphol on separate tickets?
                  </AccordionTrigger>
                  <AccordionContent>
                    <p>If you booked flights on separate tickets (two booking references), the airline is NOT responsible for missed connections. You must claim only for the flight that was actually delayed. Always book connecting flights on a single ticket for business travel protection.</p>
                  </AccordionContent>
                </AccordionItem>

                <AccordionItem value="faq-5">
                  <AccordionTrigger className="text-left font-semibold">
                    Can I claim if my flight is delayed at Schiphol but I'm flying with a non-EU airline?
                  </AccordionTrigger>
                  <AccordionContent>
                    <p>Yes, if the flight DEPARTS from Schiphol (EU airport). EU261 covers all flights departing EU airports, regardless of airline nationality. For flights arriving at Schiphol from outside the EU, only EU/EEA/UK/Swiss airlines are covered.</p>
                  </AccordionContent>
                </AccordionItem>
              </Accordion>

              <div className="bg-slate-100 dark:bg-slate-800 p-8 rounded-lg my-12">
                <h3 className="text-2xl font-bold mb-4 text-slate-900 dark:text-white">Key Takeaway for Business Travelers</h3>
                <p className="text-lg text-slate-700 dark:text-slate-300 mb-4">
                  Amsterdam Schiphol's operational challenges (staffing, flight cap, congestion) do NOT exempt airlines from EU261 compensation obligations. If your flight is delayed 3+ hours due to airline-controlled factors, you're entitled to €250-€600.
                </p>
                <p className="text-lg text-slate-700 dark:text-slate-300 mb-6">
                  Always book connecting flights on a single ticket, arrive early during peak times, and document any delays. Don't accept "Schiphol operational issues" as a blanket excuse without specific evidence of extraordinary circumstances.
                </p>
                <Button asChild className="bg-orange-600 hover:bg-orange-700 text-white font-bold">
                  <Link href="/en/business-flight-compensation">
                    <ArrowRight className="mr-2 h-5 w-5" />
                    Learn About EU261 Rights
                  </Link>
                </Button>
              </div>

            </div>

            {/* Sidebar */}
            <div className="space-y-6">
              
              {/* Quick Links */}
              <div className="bg-white dark:bg-slate-800 p-6 rounded-lg shadow-sm border border-slate-200 dark:border-slate-700">
                <h3 className="text-lg font-bold mb-4 text-slate-900 dark:text-white flex items-center gap-2">
                  <FileText className="h-5 w-5 text-orange-600" />
                  Related Articles
                </h3>
                <ul className="space-y-3">
                  <li>
                    <Link href="/en/articles/frankfurt-hub-flight-delays-business" className="text-orange-600 hover:text-orange-700 hover:underline">
                      Frankfurt Hub Flight Delays
                    </Link>
                  </li>
                  <li>
                    <Link href="/en/articles/heathrow-hub-flight-delays-business" className="text-orange-600 hover:text-orange-700 hover:underline">
                      Heathrow Hub Flight Delays
                    </Link>
                  </li>
                  <li>
                    <Link href="/en/articles/lufthansa-flight-delay-compensation-business" className="text-orange-600 hover:text-orange-700 hover:underline">
                      Lufthansa Compensation Guide
                    </Link>
                  </li>
                  <li>
                    <Link href="/en/articles/how-to-claim-flight-compensation-business-travel" className="text-orange-600 hover:text-orange-700 hover:underline">
                      How to Claim Compensation
                    </Link>
                  </li>
                </ul>
              </div>

              {/* KLM Routes Quick Reference */}
              <div className="bg-orange-50 dark:bg-orange-900/20 p-6 rounded-lg border border-orange-200 dark:border-orange-800">
                <h3 className="text-lg font-bold mb-4 text-slate-900 dark:text-white">Popular KLM Business Routes</h3>
                <div className="space-y-3 text-sm">
                  <div>
                    <div className="font-semibold text-slate-900 dark:text-white">Short-haul (&lt;1,500 km)</div>
                    <div className="text-slate-600 dark:text-slate-400">London, Paris, Frankfurt → €250</div>
                  </div>
                  <div>
                    <div className="font-semibold text-slate-900 dark:text-white">Medium-haul (1,500-3,500 km)</div>
                    <div className="text-slate-600 dark:text-slate-400">Dubai, Istanbul, Athens → €400</div>
                  </div>
                  <div>
                    <div className="font-semibold text-slate-900 dark:text-white">Long-haul (&gt;3,500 km)</div>
                    <div className="text-slate-600 dark:text-slate-400">New York, Singapore, Tokyo → €600</div>
                  </div>
                </div>
              </div>

              {/* Schiphol Statistics */}
              <div className="bg-white dark:bg-slate-800 p-6 rounded-lg shadow-sm border border-slate-200 dark:border-slate-700">
                <h3 className="text-lg font-bold mb-4 text-slate-900 dark:text-white">Schiphol Hub Facts</h3>
                <ul className="space-y-2 text-sm text-slate-700 dark:text-slate-300">
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="h-4 w-4 text-green-600 mt-0.5 flex-shrink-0" />
                    <span>3rd busiest EU airport (71M passengers, 2019)</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="h-4 w-4 text-green-600 mt-0.5 flex-shrink-0" />
                    <span>KLM's primary hub (50%+ of traffic)</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="h-4 w-4 text-green-600 mt-0.5 flex-shrink-0" />
                    <span>320+ destinations, 100+ airlines</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <XCircle className="h-4 w-4 text-red-600 mt-0.5 flex-shrink-0" />
                    <span>Flight cap: 460,000 annual movements (2023)</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <XCircle className="h-4 w-4 text-red-600 mt-0.5 flex-shrink-0" />
                    <span>Avg delay: 20-30 min (peak hours)</span>
                  </li>
                </ul>
              </div>

            </div>

          </div>
        </article>
      </div>
    </>
  );
}
