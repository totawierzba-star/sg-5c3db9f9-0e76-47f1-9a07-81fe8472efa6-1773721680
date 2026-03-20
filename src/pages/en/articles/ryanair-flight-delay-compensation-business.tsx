import { SEO } from "@/components/SEO";
import Link from "next/link";
import { Plane, AlertTriangle, Clock, Euro, FileText, CheckCircle2, XCircle, HelpCircle, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert";
import { Card, CardContent } from "@/components/ui/card";

export default function RyanairCompensation() {
  return (
    <>
      <SEO
        title="Ryanair Flight Delay Compensation for Business Travelers | Guide"
        description="Traveling for business on Ryanair? Learn how to claim up to €400 for delays and cancellations. Step-by-step guide for employees and employers."
        image="/images/ryanair-compensation-business.jpg"
      />

      <div className="min-h-screen bg-slate-50 dark:bg-slate-900 font-sans">
        {/* Hero Section */}
        <div className="bg-[#073590] text-white py-16">
          <div className="container mx-auto px-4 max-w-4xl">
            <div className="flex items-center gap-2 text-yellow-400 font-semibold mb-4">
              <Plane className="h-5 w-5" />
              <span>Airline Specific Guide</span>
            </div>
            <h1 className="text-4xl md:text-5xl font-bold mb-6 leading-tight">
              Ryanair Flight Delay Compensation for Business Travelers
            </h1>
            <p className="text-xl text-blue-100 mb-8 leading-relaxed max-w-2xl">
              Low-cost doesn't mean low rights. If your business trip on Ryanair was delayed by 3+ hours, you are entitled to compensation—even if your company paid for the ticket.
            </p>
            
            <div className="flex flex-wrap gap-4">
              <Button asChild size="lg" className="bg-yellow-400 text-[#073590] hover:bg-yellow-500 font-bold border-none">
                <Link href="https://claimwinger.com/en/check-flight?utm_source=bizneslot&utm_medium=article&utm_campaign=ryanair">
                  Check Ryanair Flight &rarr;
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
          <Alert className="mb-12 bg-white dark:bg-slate-800 border-l-4 border-l-[#073590] shadow-sm">
            <AlertTriangle className="h-5 w-5 text-[#073590]" />
            <AlertTitle className="text-lg font-bold text-[#073590] mb-2">Key Rights for Ryanair Passengers</AlertTitle>
            <AlertDescription className="text-slate-600 dark:text-slate-300">
              <ul className="list-disc pl-5 space-y-1">
                <li>Compensation applies to delays of <strong>3+ hours</strong> on arrival.</li>
                <li>Budget airlines are fully covered by EU261 regulations.</li>
                <li>Compensation ranges from <strong>€250 to €400</strong> (rarely €600 due to short/medium haul focus).</li>
                <li><strong>Strikes by Ryanair staff</strong> are claimable; ATC strikes usually are not.</li>
              </ul>
            </AlertDescription>
          </Alert>

          <div className="grid grid-cols-1 md:grid-cols-[1fr_300px] gap-12">
            
            {/* Main Content */}
            <div className="prose prose-lg dark:prose-invert max-w-none">
              
              <h2>Does EU261 Apply to Low-Cost Airlines?</h2>
              <p>
                Yes. A common misconception among business travelers is that "budget" tickets come with fewer rights. Under European Regulation EC 261/2004, the price of your ticket is irrelevant. Whether you paid €19 or €300 for a Ryanair seat, your compensation rights for delays and cancellations are exactly the same as on legacy carriers like Lufthansa or British Airways.
              </p>

              <h2 id="compensation-amounts">Compensation Amounts for Ryanair Flights</h2>
              <p>
                Since Ryanair operates primarily within Europe and short-haul destinations, most claims fall into the €250 or €400 categories.
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
                        <td className="p-4 text-slate-600 dark:text-slate-400">London ↔ Dublin<br/>Berlin ↔ Milan</td>
                        <td className="p-4 font-bold text-[#073590]">€250</td>
                      </tr>
                      <tr>
                        <td className="p-4">1,500 km - 3,500 km</td>
                        <td className="p-4 text-slate-600 dark:text-slate-400">London ↔ Malaga<br/>Warsaw ↔ Madrid</td>
                        <td className="p-4 font-bold text-[#073590]">€400</td>
                      </tr>
                      <tr>
                        <td className="p-4">Over 3,500 km</td>
                        <td className="p-4 text-slate-600 dark:text-slate-400">Very rare for Ryanair</td>
                        <td className="p-4 font-bold text-[#073590]">€600</td>
                      </tr>
                    </tbody>
                  </table>
                </div>
                <p className="text-sm text-slate-500 mt-2 text-center italic">
                  *Delay must be at least 3 hours upon arrival at final destination.
                </p>
              </div>

              <h2>Business Travel Specifics: Who Gets the Money?</h2>
              <p>
                When flying Ryanair for business, the ticket is often booked by the company or a travel agency. However, EU261 is a consumer protection law focused on the <strong>passenger</strong> who suffered the inconvenience.
              </p>
              <div className="bg-blue-50 dark:bg-blue-900/20 p-6 rounded-lg border border-blue-100 dark:border-blue-800 my-6">
                <h3 className="text-lg font-semibold text-blue-800 dark:text-blue-300 mt-0 mb-2">The General Rule</h3>
                <p className="mb-0 text-blue-700 dark:text-blue-200">
                  Compensation belongs to the <strong>passenger</strong> whose name is on the boarding pass, regardless of who paid for the ticket. Your employer can only claim it if your employment contract explicitly states that you must transfer such compensation to them.
                </p>
              </div>
              <p>
                Read more about this in our detailed guide: <Link href="/en/articles/flight-delay-compensation-business-travel-employee-or-employer" className="text-blue-600 hover:underline">Employee vs Employer Rights</Link>.
              </p>

              <h2 id="step-by-step">How to Claim from Ryanair: Step-by-Step</h2>
              <p>
                Ryanair encourages passengers to claim directly, but the process can be tricky if you don't have all the details.
              </p>

              <div className="space-y-6 not-prose my-8">
                <div className="flex gap-4">
                  <div className="flex-shrink-0 w-8 h-8 rounded-full bg-[#073590] text-white flex items-center justify-center font-bold">1</div>
                  <div>
                    <h3 className="text-xl font-bold mb-2">Gather Your Documents</h3>
                    <p className="text-slate-600 dark:text-slate-300">
                      You need your boarding pass (digital or printed) and the booking reference (PNR - usually 6 alphanumeric characters).
                    </p>
                  </div>
                </div>

                <div className="flex gap-4">
                  <div className="flex-shrink-0 w-8 h-8 rounded-full bg-[#073590] text-white flex items-center justify-center font-bold">2</div>
                  <div>
                    <h3 className="text-xl font-bold mb-2">Check the Reason</h3>
                    <p className="text-slate-600 dark:text-slate-300">
                      Ryanair often cites "extraordinary circumstances". Verify if other flights were flying. Staff strikes ARE claimable. Bad weather or ATC strikes usually are not.
                    </p>
                  </div>
                </div>

                <div className="flex gap-4">
                  <div className="flex-shrink-0 w-8 h-8 rounded-full bg-[#073590] text-white flex items-center justify-center font-bold">3</div>
                  <div>
                    <h3 className="text-xl font-bold mb-2">Submit the Claim</h3>
                    <p className="text-slate-600 dark:text-slate-300">
                      You can use Ryanair's online "EU261 Compensation Form". Be careful: they may offer vouchers instead of cash. <strong>Always insist on cash transfer.</strong>
                    </p>
                  </div>
                </div>

                 <div className="flex gap-4">
                  <div className="flex-shrink-0 w-8 h-8 rounded-full bg-[#073590] text-white flex items-center justify-center font-bold">4</div>
                  <div>
                    <h3 className="text-xl font-bold mb-2">Wait for Response</h3>
                    <p className="text-slate-600 dark:text-slate-300">
                      Ryanair typically responds within 10-20 days, which is faster than many legacy airlines. If they reject it or don't reply, you can escalate.
                    </p>
                  </div>
                </div>
              </div>

              <h3>Common Hurdles with Ryanair Claims</h3>
              <ul>
                <li><strong>"Voucher Trap":</strong> They might email you offering a voucher for future travel. If you accept this, you waive your right to cash compensation.</li>
                <li><strong>Separate Bookings:</strong> Ryanair is a point-to-point airline. If you booked London-Dublin and Dublin-New York as two separate tickets and the first delay made you miss the second, they are only liable for the first flight.</li>
                <li><strong>IBAN Requirements:</strong> Ensure you provide a personal bank account (IBAN/SWIFT) that accepts Euros/GBP.</li>
              </ul>

              <div className="my-12 p-8 bg-slate-100 dark:bg-slate-800 rounded-xl text-center">
                <h3 className="text-2xl font-bold mb-4">Don't want to deal with Ryanair forms?</h3>
                <p className="mb-6 text-slate-600 dark:text-slate-300">
                  ClaimWinger handles the entire process for you. No win, no fee.
                </p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <Button asChild size="lg" className="bg-[#073590] text-white hover:bg-blue-800">
                    <Link href="https://claimwinger.com/en/check-flight?utm_source=bizneslot&utm_medium=article&utm_campaign=ryanair_bottom">
                      Start Ryanair Claim &rarr;
                    </Link>
                  </Button>
                </div>
              </div>

              <h2>FAQ: Ryanair Business Travel Compensation</h2>
              <Accordion type="single" collapsible className="w-full not-prose">
                
                <AccordionItem value="item-1">
                  <AccordionTrigger>Can I claim if my company booked the flight?</AccordionTrigger>
                  <AccordionContent>
                    Yes. The compensation is for the passenger's inconvenience. Unless your employment contract says otherwise, the money goes to your personal bank account.
                  </AccordionContent>
                </AccordionItem>

                <AccordionItem value="item-2">
                  <AccordionTrigger>Does Ryanair pay cash or vouchers?</AccordionTrigger>
                  <AccordionContent>
                    By law (EU261), they must pay cash (bank transfer). They often offer vouchers first because it's cheaper for them. You have the right to refuse the voucher and demand a bank transfer.
                  </AccordionContent>
                </AccordionItem>

                <AccordionItem value="item-3">
                  <AccordionTrigger>What if I missed a connecting flight?</AccordionTrigger>
                  <AccordionContent>
                    Ryanair operates point-to-point. They generally do not sell connecting flights. If you booked two separate Ryanair flights yourself and missed the second one due to the first one's delay, they are only liable for the first flight's delay compensation (if &gt;3h), not for the missed connection or the second ticket cost.
                  </AccordionContent>
                </AccordionItem>

                <AccordionItem value="item-4">
                  <AccordionTrigger>Are Ryanair strikes considered "extraordinary"?</AccordionTrigger>
                  <AccordionContent>
                    It depends. Strikes by <strong>Ryanair staff</strong> (pilots, cabin crew) are within the airline's control and are <strong>eligible</strong> for compensation (EU court ruling 2018). Strikes by airport staff, baggage handlers, or Air Traffic Control are usually considered "extraordinary" and are not eligible.
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
                    <span>EU261 applies fully to Ryanair</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="h-4 w-4 text-green-500 mt-1" />
                    <span>Delay &gt;3h = €250 - €400</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="h-4 w-4 text-green-500 mt-1" />
                    <span>Staff strikes are claimable</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <XCircle className="h-4 w-4 text-red-500 mt-1" />
                    <span>Missed self-connections rarely covered</span>
                  </li>
                </ul>
                
                <div className="mt-6 pt-6 border-t border-slate-200 dark:border-slate-700">
                  <h4 className="font-semibold mb-2">Helpful Links</h4>
                  <ul className="space-y-2 text-sm text-blue-600 dark:text-blue-400">
                     <li><Link href="/en/articles/eu261-compensation-business-flights-guide" className="hover:underline">EU261 Guide</Link></li>
                     <li><Link href="/en/delayed-business-trip" className="hover:underline">Delayed Trip Info</Link></li>
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
