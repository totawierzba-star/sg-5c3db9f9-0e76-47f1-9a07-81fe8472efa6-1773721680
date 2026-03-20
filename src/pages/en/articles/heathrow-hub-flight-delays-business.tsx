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

export default function HeathrowHubDelays() {
  return (
    <>
      <SEO
        title="Heathrow Hub Flight Delays & Business Travel Compensation | LHR Guide"
        description="Flying through London Heathrow (LHR) for business? Learn about compensation rights for delays, missed connections, and how the hub's complexity affects your EU261 claims."
        image="/og-image.png"
      />

      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Article",
            "headline": "Heathrow Hub Flight Delays & Business Travel Compensation",
            "description": "Complete guide to EU261 compensation when flying through London Heathrow for business travel",
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
                "name": "Does Heathrow congestion exempt airlines from EU261?",
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": "No. While Heathrow is a busy airport, general congestion or hub complexity are NOT extraordinary circumstances. Airlines must plan for typical operational challenges. Only specific, unforeseeable events (like sudden runway closures) qualify as extraordinary."
                }
              },
              {
                "@type": "Question",
                "name": "What if I miss my connection at Heathrow due to a delay?",
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": "If you booked both flights on a single ticket (one booking reference), the airline is responsible for the entire journey. You're entitled to compensation if you arrive at your final destination 3+ hours late, regardless of where the delay occurred."
                }
              },
              {
                "@type": "Question",
                "name": "Are Terminal 5 delays covered differently?",
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": "No. Terminal 5 is British Airways' main hub, but the same EU261/UK261 rules apply regardless of terminal. Terminal-specific issues (like baggage system failures) are within the airline's control and are eligible for compensation."
                }
              },
              {
                "@type": "Question",
                "name": "What about Brexit and UK261?",
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": "Post-Brexit, flights departing from UK airports (including Heathrow) are covered by UK261, which mirrors EU261. Flights arriving in the UK from EU airports are only covered if the airline is UK/EU-based. Compensation amounts and rules remain the same."
                }
              },
              {
                "@type": "Question",
                "name": "Can I claim for Heathrow slot delays?",
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": "Yes, if the delay is caused by the airline's operational issues (crew scheduling, aircraft positioning). However, if it's due to Air Traffic Control restrictions (slot allocation by NATS), this is considered extraordinary. Airlines must prove the specific cause."
                }
              }
            ]
          })
        }}
      />

      <div className="min-h-screen bg-slate-50 dark:bg-slate-900 font-sans">
        <div className="bg-gradient-to-br from-blue-900 via-blue-800 to-blue-900 text-white py-16">
          <div className="container mx-auto px-4 max-w-4xl">
            <div className="flex items-center gap-2 text-blue-200 font-semibold mb-4">
              <Building2 className="h-5 w-5" />
              <span>Hub Analysis</span>
            </div>
            <h1 className="text-4xl md:text-5xl font-bold mb-6 leading-tight">
              Heathrow Hub Flight Delays: Business Travel Compensation Guide
            </h1>
            <p className="text-xl text-blue-100 mb-8 leading-relaxed max-w-3xl">
              London Heathrow (LHR) is Europe&apos;s busiest two-runway airport and a major hub for business travel. Delays here are common, but that doesn&apos;t mean you lose your EU261/UK261 compensation rights.
            </p>
            
            <div className="flex flex-wrap gap-4">
              <Button asChild size="lg" className="bg-white text-blue-900 hover:bg-blue-50 font-bold">
                <Link href="https://claimwinger.com/en/check-flight?utm_source=bizneslot&utm_medium=article&utm_campaign=heathrow">
                  Check Heathrow Flight →
                </Link>
              </Button>
              <Button asChild variant="outline" size="lg" className="bg-transparent border-white text-white hover:bg-white/10">
                <Link href="#compensation">
                  Compensation Rules
                </Link>
              </Button>
            </div>
          </div>
        </div>

        <article className="container mx-auto px-4 max-w-4xl py-12">
          <Alert className="mb-12 bg-white dark:bg-slate-800 border-l-4 border-l-blue-600 shadow-sm">
            <AlertTriangle className="h-5 w-5 text-blue-600" />
            <AlertTitle className="text-lg font-bold text-blue-900 dark:text-blue-300 mb-2">
              Heathrow Business Travel: Key Rights
            </AlertTitle>
            <AlertDescription className="text-slate-600 dark:text-slate-300">
              <ul className="list-disc pl-5 space-y-1">
                <li>Hub congestion is <strong>NOT</strong> an extraordinary circumstance</li>
                <li>Missed connections on single tickets = full journey coverage</li>
                <li>Terminal 5 issues are airline responsibility (BA hub)</li>
                <li>Post-Brexit: UK261 mirrors EU261 compensation amounts</li>
              </ul>
            </AlertDescription>
          </Alert>

          <div className="grid grid-cols-1 md:grid-cols-[1fr_300px] gap-12">
            
            <div className="prose prose-lg dark:prose-invert max-w-none">
              
              <h2>Why Heathrow Delays Are So Common</h2>
              <p>
                Heathrow operates at <strong>98% capacity</strong> on just two runways, handling over 80 million passengers annually. Unlike Frankfurt (4 runways) or Amsterdam (6 runways), LHR has no buffer for disruptions. A single technical issue, weather event, or ATC restriction creates a domino effect affecting hundreds of flights.
              </p>
              
              <div className="bg-amber-50 dark:bg-amber-900/20 p-6 rounded-lg border border-amber-200 dark:border-amber-800 my-6">
                <h3 className="text-lg font-semibold text-amber-900 dark:text-amber-300 mt-0 mb-2">
                  Common Business Traveler Misconception
                </h3>
                <p className="mb-0 text-amber-800 dark:text-amber-200">
                  &quot;Heathrow is always congested, so delays are expected and not compensable.&quot; <strong>FALSE.</strong> Airlines must plan for normal operational challenges. Only unforeseeable, external events (like sudden runway closures or severe weather) are extraordinary. Routine congestion does not exempt them from EU261/UK261.
                </p>
              </div>

              <h2 id="compensation">Heathrow Compensation Amounts</h2>
              <p>
                Whether your flight departs from or arrives at Heathrow, the compensation structure follows standard EU261/UK261 rules:
              </p>

              <div className="not-prose my-8">
                <div className="overflow-x-auto">
                  <table className="w-full border-collapse bg-white dark:bg-slate-800 shadow-sm rounded-lg overflow-hidden">
                    <thead className="bg-slate-100 dark:bg-slate-700">
                      <tr>
                        <th className="p-4 text-left font-semibold">Flight Distance</th>
                        <th className="p-4 text-left font-semibold">Example Route (from LHR)</th>
                        <th className="p-4 text-left font-semibold">Compensation</th>
                      </tr>
                    </thead>
                    <tbody className="divide-y divide-slate-200 dark:divide-slate-700">
                      <tr>
                        <td className="p-4">Up to 1,500 km</td>
                        <td className="p-4 text-slate-600 dark:text-slate-400">London ↔ Frankfurt<br/>London ↔ Amsterdam</td>
                        <td className="p-4 font-bold text-blue-600">€250 / £220</td>
                      </tr>
                      <tr>
                        <td className="p-4">1,500 km - 3,500 km</td>
                        <td className="p-4 text-slate-600 dark:text-slate-400">London ↔ Dubai<br/>London ↔ Tel Aviv</td>
                        <td className="p-4 font-bold text-blue-600">€400 / £350</td>
                      </tr>
                      <tr>
                        <td className="p-4">Over 3,500 km</td>
                        <td className="p-4 text-slate-600 dark:text-slate-400">London ↔ New York<br/>London ↔ Singapore</td>
                        <td className="p-4 font-bold text-blue-600">€600 / £520</td>
                      </tr>
                    </tbody>
                  </table>
                </div>
                <p className="text-sm text-slate-500 mt-2 text-center italic">
                  *Delay must be 3+ hours upon arrival at final destination. UK261 uses GBP equivalents.
                </p>
              </div>

              <h2>Business Travel Scenarios at Heathrow</h2>
              
              <h3>Scenario 1: Direct Flight Delayed at LHR</h3>
              <p>
                You&apos;re flying London → Frankfurt for a morning meeting. The flight is delayed 4 hours due to &quot;air traffic restrictions at Heathrow.&quot;
              </p>
              <div className="bg-green-50 dark:bg-green-900/20 p-4 rounded-lg border border-green-200 dark:border-green-800 my-4">
                <p className="mb-0 text-green-800 dark:text-green-200">
                  <strong>✓ Eligible:</strong> If the restriction was specific to your flight (crew issues, technical problems), you can claim €250. If it was a general ATC slot delay affecting multiple airlines, it&apos;s extraordinary. Airlines must provide evidence.
                </p>
              </div>

              <h3>Scenario 2: Missed Connection at LHR</h3>
              <p>
                You&apos;re flying New York → London → Munich (both flights on one British Airways booking). The transatlantic leg arrives 90 minutes late, causing you to miss your connection. You arrive in Munich 5 hours late.
              </p>
              <div className="bg-green-50 dark:bg-green-900/20 p-4 rounded-lg border border-green-200 dark:border-green-800 my-4">
                <p className="mb-0 text-green-800 dark:text-green-200">
                  <strong>✓ Eligible:</strong> BA is responsible for the entire journey. You&apos;re entitled to €400 (distance: ~900 km from LHR to Munich) because your final arrival was 5 hours late, even though the delay originated on the first leg.
                </p>
              </div>

              <h3>Scenario 3: Terminal 5 Baggage System Failure</h3>
              <p>
                Your BA flight from Terminal 5 is delayed 4 hours because the automated baggage system failed. British Airways claims this is &quot;outside their control.&quot;
              </p>
              <div className="bg-green-50 dark:bg-green-900/20 p-4 rounded-lg border border-green-200 dark:border-green-800 my-4">
                <p className="mb-0 text-green-800 dark:text-green-200">
                  <strong>✓ Eligible:</strong> Terminal 5 is BA&apos;s dedicated hub. They are responsible for operational systems within their terminal. This is NOT an extraordinary circumstance.
                </p>
              </div>

              <h2>Post-Brexit: UK261 vs EU261</h2>
              <p>
                Since Brexit, UK flights are covered by <strong>UK261</strong> (a mirror of EU261). The rules are identical, but compensation is paid in GBP instead of EUR:
              </p>

              <ul>
                <li><strong>Flights departing UK:</strong> Always covered by UK261 (any airline)</li>
                <li><strong>Flights arriving in UK from EU:</strong> Only covered if airline is UK/EU-based</li>
                <li><strong>Non-EU airlines:</strong> Not covered for UK arrivals (e.g., Emirates London → Dubai is covered, but Dubai → London is not)</li>
              </ul>

              <div className="my-12 p-8 bg-slate-100 dark:bg-slate-800 rounded-xl text-center">
                <h3 className="text-2xl font-bold mb-4">Heathrow Delay? Check Your Rights</h3>
                <p className="mb-6 text-slate-600 dark:text-slate-300">
                  ClaimWinger handles UK261 and EU261 claims for all Heathrow routes.
                </p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <Button asChild size="lg" className="bg-blue-600 text-white hover:bg-blue-700">
                    <Link href="https://claimwinger.com/en/check-flight?utm_source=bizneslot&utm_medium=article&utm_campaign=heathrow_bottom">
                      Start Heathrow Claim →
                    </Link>
                  </Button>
                </div>
              </div>

              <h2>FAQ: Heathrow Business Travel Compensation</h2>
              <Accordion type="single" collapsible className="w-full not-prose">
                
                <AccordionItem value="item-1">
                  <AccordionTrigger>Does Heathrow congestion exempt airlines from EU261?</AccordionTrigger>
                  <AccordionContent>
                    No. While Heathrow is a busy airport, general congestion or hub complexity are NOT extraordinary circumstances. Airlines must plan for typical operational challenges. Only specific, unforeseeable events (like sudden runway closures) qualify as extraordinary.
                  </AccordionContent>
                </AccordionItem>

                <AccordionItem value="item-2">
                  <AccordionTrigger>What if I miss my connection at Heathrow due to a delay?</AccordionTrigger>
                  <AccordionContent>
                    If you booked both flights on a single ticket (one booking reference), the airline is responsible for the entire journey. You&apos;re entitled to compensation if you arrive at your final destination 3+ hours late, regardless of where the delay occurred.
                  </AccordionContent>
                </AccordionItem>

                <AccordionItem value="item-3">
                  <AccordionTrigger>Are Terminal 5 delays covered differently?</AccordionTrigger>
                  <AccordionContent>
                    No. Terminal 5 is British Airways&apos; main hub, but the same EU261/UK261 rules apply regardless of terminal. Terminal-specific issues (like baggage system failures) are within the airline&apos;s control and are eligible for compensation.
                  </AccordionContent>
                </AccordionItem>

                <AccordionItem value="item-4">
                  <AccordionTrigger>What about Brexit and UK261?</AccordionTrigger>
                  <AccordionContent>
                    Post-Brexit, flights departing from UK airports (including Heathrow) are covered by UK261, which mirrors EU261. Flights arriving in the UK from EU airports are only covered if the airline is UK/EU-based. Compensation amounts and rules remain the same.
                  </AccordionContent>
                </AccordionItem>

                <AccordionItem value="item-5">
                  <AccordionTrigger>Can I claim for Heathrow slot delays?</AccordionTrigger>
                  <AccordionContent>
                    Yes, if the delay is caused by the airline&apos;s operational issues (crew scheduling, aircraft positioning). However, if it&apos;s due to Air Traffic Control restrictions (slot allocation by NATS), this is considered extraordinary. Airlines must prove the specific cause.
                  </AccordionContent>
                </AccordionItem>

              </Accordion>

            </div>

            <div className="space-y-8">
              <div className="bg-white dark:bg-slate-800 p-6 rounded-xl shadow-sm border border-slate-200 dark:border-slate-700 sticky top-24">
                <h3 className="text-xl font-bold mb-4">Quick Summary</h3>
                <ul className="space-y-3 text-sm">
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="h-4 w-4 text-green-500 mt-1 flex-shrink-0" />
                    <span>98% capacity = frequent delays</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="h-4 w-4 text-green-500 mt-1 flex-shrink-0" />
                    <span>UK261 mirrors EU261 amounts</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="h-4 w-4 text-green-500 mt-1 flex-shrink-0" />
                    <span>Terminal 5 = BA responsibility</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <XCircle className="h-4 w-4 text-red-500 mt-1 flex-shrink-0" />
                    <span>General congestion NOT exempt</span>
                  </li>
                </ul>
                
                <div className="mt-6 pt-6 border-t border-slate-200 dark:border-slate-700">
                  <h4 className="font-semibold mb-2">Helpful Links</h4>
                  <ul className="space-y-2 text-sm text-blue-600 dark:text-blue-400">
                     <li><Link href="/en/articles/british-airways-flight-delay-compensation-business" className="hover:underline">BA Compensation Guide</Link></li>
                     <li><Link href="/en/articles/eu261-compensation-business-flights-guide" className="hover:underline">EU261 Overview</Link></li>
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
