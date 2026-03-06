import { LayoutEn } from "@/components/LayoutEn";
import { SEO } from "@/components/SEO";
import Link from "next/link";
import { Clock, AlertCircle, CheckCircle, ArrowRight, FileText, Plane } from "lucide-react";
import { Button } from "@/components/ui/button";

export default function WizzAirCompensationGuide() {
  return (
    <LayoutEn>
      <SEO
        title="Wizz Air Compensation Guide 2025: How to Claim €250-€600"
        description="Complete guide to claiming Wizz Air compensation for delays, cancellations, and denied boarding. Learn the process and avoid common rejection tactics."
        url="https://lotproblem.pl/en/blog/wizz-air-compensation-guide"
      />

      <article className="max-w-4xl mx-auto px-4 py-12">
        <div className="mb-8">
          <Link href="/en/blog" className="text-blue-600 hover:text-blue-700 dark:text-blue-400 dark:hover:text-blue-300 flex items-center gap-2 mb-4">
            <ArrowRight className="h-4 w-4 rotate-180" />
            Back to Blog
          </Link>
          
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-4">
            Wizz Air Compensation Guide 2025: Get What You Deserve
          </h1>
          
          <div className="flex items-center gap-4 text-gray-600 dark:text-gray-400 mb-6">
            <time dateTime="2025-03-06">March 6, 2025</time>
            <span>•</span>
            <span>14 min read</span>
          </div>

          <p className="text-xl text-gray-700 dark:text-gray-300 leading-relaxed">
            Wizz Air is one of Europe's fastest-growing ultra-low-cost carriers, but passengers frequently report challenges when claiming compensation. This guide will help you navigate the process successfully.
          </p>
        </div>

        <div className="prose prose-lg dark:prose-invert max-w-none">
          <div className="bg-purple-50 dark:bg-purple-900/20 border-l-4 border-purple-600 p-6 mb-8">
            <div className="flex items-start gap-3">
              <AlertCircle className="h-6 w-6 text-purple-600 flex-shrink-0 mt-1" />
              <div>
                <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">Important Note</h3>
                <p className="text-gray-700 dark:text-gray-300 mb-0">
                  Wizz Air has one of the highest claim rejection rates in Europe (74% of initial claims), often citing "extraordinary circumstances" without proper evidence. Don't give up - most rejections can be successfully challenged.
                </p>
              </div>
            </div>
          </div>

          <section className="mb-12">
            <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-6">Your Rights with Wizz Air</h2>
            
            <p className="text-gray-700 dark:text-gray-300 mb-6">
              Wizz Air is registered in Hungary (EU) and must comply with <strong>EU Regulation 261/2004</strong> for:
            </p>

            <ul className="space-y-3 text-gray-700 dark:text-gray-300 mb-6">
              <li className="flex items-start gap-3">
                <CheckCircle className="h-5 w-5 text-green-600 flex-shrink-0 mt-1" />
                <span>All flights departing from EU airports</span>
              </li>
              <li className="flex items-start gap-3">
                <CheckCircle className="h-5 w-5 text-green-600 flex-shrink-0 mt-1" />
                <span>Flights arriving in the EU from non-EU countries (on Wizz Air aircraft)</span>
              </li>
              <li className="flex items-start gap-3">
                <CheckCircle className="h-5 w-5 text-green-600 flex-shrink-0 mt-1" />
                <span>Flights operated by Wizz Air (not codeshare partners)</span>
              </li>
            </ul>

            <div className="bg-gray-50 dark:bg-gray-800 rounded-lg p-6 mb-6">
              <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-4">Wizz Air Compensation Table</h3>
              <table className="w-full">
                <thead>
                  <tr className="border-b border-gray-200 dark:border-gray-700">
                    <th className="text-left py-3 text-gray-900 dark:text-white">Distance</th>
                    <th className="text-left py-3 text-gray-900 dark:text-white">3+ Hour Delay</th>
                    <th className="text-left py-3 text-gray-900 dark:text-white">Cancellation</th>
                    <th className="text-left py-3 text-gray-900 dark:text-white">Denied Boarding</th>
                  </tr>
                </thead>
                <tbody className="text-gray-700 dark:text-gray-300">
                  <tr className="border-b border-gray-200 dark:border-gray-700">
                    <td className="py-3">Up to 1,500 km</td>
                    <td className="py-3 font-semibold text-green-600">€250</td>
                    <td className="py-3 font-semibold text-green-600">€250</td>
                    <td className="py-3 font-semibold text-green-600">€250</td>
                  </tr>
                  <tr className="border-b border-gray-200 dark:border-gray-700">
                    <td className="py-3">1,500-3,500 km</td>
                    <td className="py-3 font-semibold text-green-600">€400</td>
                    <td className="py-3 font-semibold text-green-600">€400</td>
                    <td className="py-3 font-semibold text-green-600">€400</td>
                  </tr>
                  <tr>
                    <td className="py-3">Over 3,500 km</td>
                    <td className="py-3 font-semibold text-green-600">€600</td>
                    <td className="py-3 font-semibold text-green-600">€600</td>
                    <td className="py-3 font-semibold text-green-600">€600</td>
                  </tr>
                </tbody>
              </table>
              <p className="text-sm text-gray-600 dark:text-gray-400 mt-4">
                * Most Wizz Air routes are under 1,500 km, so €250 is the typical compensation amount
              </p>
            </div>
          </section>

          <section className="mb-12">
            <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-6">Common Wizz Air Disruption Scenarios</h2>

            <div className="space-y-6">
              <div className="bg-white dark:bg-gray-800 border-l-4 border-blue-600 p-6 rounded-r-lg">
                <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-3">Flight Delays</h3>
                <p className="text-gray-700 dark:text-gray-300 mb-3">
                  You're entitled to compensation if your Wizz Air flight arrives 3+ hours late at the final destination, unless caused by extraordinary circumstances.
                </p>
                <p className="text-sm text-gray-600 dark:text-gray-400">
                  <strong>Example:</strong> Budapest to London delayed 4 hours due to crew shortage = €250 compensation
                </p>
              </div>

              <div className="bg-white dark:bg-gray-800 border-l-4 border-orange-600 p-6 rounded-r-lg">
                <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-3">Flight Cancellations</h3>
                <p className="text-gray-700 dark:text-gray-300 mb-3">
                  If Wizz Air cancels your flight less than 14 days before departure without offering adequate alternative transport, you're entitled to compensation.
                </p>
                <p className="text-sm text-gray-600 dark:text-gray-400">
                  <strong>Example:</strong> Warsaw to Milan cancelled 5 days before due to "operational reasons" = €250 compensation
                </p>
              </div>

              <div className="bg-white dark:bg-gray-800 border-l-4 border-red-600 p-6 rounded-r-lg">
                <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-3">Denied Boarding (Overbooking)</h3>
                <p className="text-gray-700 dark:text-gray-300 mb-3">
                  If you're denied boarding against your will (usually due to overbooking), you're entitled to immediate compensation plus rebooking or refund.
                </p>
                <p className="text-sm text-gray-600 dark:text-gray-400">
                  <strong>Example:</strong> Bucharest to Vienna - denied boarding due to overbooked flight = €250 compensation + next available flight
                </p>
              </div>

              <div className="bg-white dark:bg-gray-800 border-l-4 border-purple-600 p-6 rounded-r-lg">
                <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-3">Missed Connections</h3>
                <p className="text-gray-700 dark:text-gray-300 mb-3">
                  If both flights were booked as a single journey and the delay causes you to miss your connection, resulting in 3+ hours delay at final destination.
                </p>
                <p className="text-sm text-gray-600 dark:text-gray-400">
                  <strong>Example:</strong> Sofia to Vienna to London - miss connection, arrive 5 hours late = €400 compensation (total distance)
                </p>
              </div>
            </div>
          </section>

          <section className="mb-12">
            <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-6">Wizz Air's Common Rejection Tactics</h2>

            <p className="text-gray-700 dark:text-gray-300 mb-6">
              Wizz Air is known for being particularly difficult when it comes to compensation claims. Here are their most frequent tactics:
            </p>

            <div className="space-y-4 mb-6">
              <div className="bg-red-50 dark:bg-red-900/20 border border-red-200 dark:border-red-800 rounded-lg p-6">
                <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">1. Blanket "Extraordinary Circumstances" Claims</h3>
                <p className="text-gray-700 dark:text-gray-300 mb-3">
                  Wizz Air frequently claims technical issues, crew problems, or scheduling conflicts were "extraordinary" without providing any evidence.
                </p>
                <p className="text-sm text-green-600 dark:text-green-400">
                  <strong>Counter Strategy:</strong> Demand specific documentation under GDPR (Article 15). Technical issues are only extraordinary if caused by hidden manufacturing defects or sabotage.
                </p>
              </div>

              <div className="bg-red-50 dark:bg-red-900/20 border border-red-200 dark:border-red-800 rounded-lg p-6">
                <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">2. Extreme Delays in Processing</h3>
                <p className="text-gray-700 dark:text-gray-300 mb-3">
                  Claims often take 8-16 months with no updates, hoping passengers will give up.
                </p>
                <p className="text-sm text-green-600 dark:text-green-400">
                  <strong>Counter Strategy:</strong> Set calendar reminders every 3 weeks. Escalate to national aviation authority after 6 months. Consider using ClaimWinger to handle the entire process.
                </p>
              </div>

              <div className="bg-red-50 dark:bg-red-900/20 border border-red-200 dark:border-red-800 rounded-lg p-6">
                <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">3. Confusing Online Claim System</h3>
                <p className="text-gray-700 dark:text-gray-300 mb-3">
                  The Wizz Air website's claim form is deliberately complex and frequently has technical errors that prevent submission.
                </p>
                <p className="text-sm text-green-600 dark:text-green-400">
                  <strong>Counter Strategy:</strong> Submit via email with read receipts. Screenshot every step. Keep copies of all correspondence.
                </p>
              </div>

              <div className="bg-red-50 dark:bg-red-900/20 border border-red-200 dark:border-red-800 rounded-lg p-6">
                <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">4. Pushing Travel Vouchers Over Cash</h3>
                <p className="text-gray-700 dark:text-gray-300 mb-3">
                  Wizz Air aggressively promotes vouchers (WIZZ credit) instead of cash compensation, which can only be used for future Wizz bookings.
                </p>
                <p className="text-sm text-green-600 dark:text-green-400">
                  <strong>Counter Strategy:</strong> Explicitly request cash compensation. Vouchers are optional - you have a legal right to cash under EU261.
                </p>
              </div>
            </div>
          </section>

          <section className="mb-12">
            <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-6">How to File a Wizz Air Claim</h2>

            <div className="bg-gradient-to-r from-purple-50 to-pink-50 dark:from-purple-900/20 dark:to-pink-900/20 rounded-lg p-8 mb-8">
              <h3 className="text-2xl font-semibold text-gray-900 dark:text-white mb-6">Complete Claim Process:</h3>
              
              <div className="space-y-6">
                <div className="flex gap-4">
                  <div className="flex-shrink-0 w-8 h-8 bg-purple-600 text-white rounded-full flex items-center justify-center font-bold">1</div>
                  <div>
                    <h4 className="font-semibold text-gray-900 dark:text-white mb-2">Collect Evidence</h4>
                    <ul className="text-gray-700 dark:text-gray-300 space-y-1 text-sm">
                      <li>• Booking confirmation (6-character reference)</li>
                      <li>• Boarding passes (digital screenshots or printouts)</li>
                      <li>• Flight details (date, flight number, route)</li>
                      <li>• Proof of delay (photos of departure boards, emails from Wizz Air)</li>
                      <li>• Any expense receipts (meals, hotel if applicable)</li>
                    </ul>
                  </div>
                </div>

                <div className="flex gap-4">
                  <div className="flex-shrink-0 w-8 h-8 bg-purple-600 text-white rounded-full flex items-center justify-center font-bold">2</div>
                  <div>
                    <h4 className="font-semibold text-gray-900 dark:text-white mb-2">Submit Your Claim</h4>
                    <p className="text-gray-700 dark:text-gray-300 text-sm mb-2">
                      <strong>Primary Method:</strong> Online form at <em>wizzair.com → My Bookings → Disrupted Flight</em>
                    </p>
                    <p className="text-gray-700 dark:text-gray-300 text-sm mb-2">
                      <strong>Alternative (Recommended):</strong> Email to <strong>customerrelations@wizzair.com</strong> with delivery confirmation
                    </p>
                    <p className="text-xs text-gray-600 dark:text-gray-400">
                      Include: Booking reference, flight number, description of disruption, compensation amount requested
                    </p>
                  </div>
                </div>

                <div className="flex gap-4">
                  <div className="flex-shrink-0 w-8 h-8 bg-purple-600 text-white rounded-full flex items-center justify-center font-bold">3</div>
                  <div>
                    <h4 className="font-semibold text-gray-900 dark:text-white mb-2">Follow Up Persistently</h4>
                    <p className="text-gray-700 dark:text-gray-300 text-sm">
                      Chase every 2-3 weeks if no response. Keep detailed logs of all communication. After 6 months with no resolution, escalate to your national aviation authority.
                    </p>
                  </div>
                </div>

                <div className="flex gap-4">
                  <div className="flex-shrink-0 w-8 h-8 bg-purple-600 text-white rounded-full flex items-center justify-center font-bold">4</div>
                  <div>
                    <h4 className="font-semibold text-gray-900 dark:text-white mb-2">Challenge Rejections</h4>
                    <p className="text-gray-700 dark:text-gray-300 text-sm mb-2">
                      If rejected, request specific evidence of "extraordinary circumstances." Challenge generic responses with counter-arguments referencing EU261 case law.
                    </p>
                    <p className="text-xs text-gray-600 dark:text-gray-400">
                      Useful: Request all data Wizz Air holds about you under GDPR Article 15 - includes internal notes about your disruption
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-green-50 dark:bg-green-900/20 border-l-4 border-green-600 p-6">
              <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-3">💡 Save Time & Stress: Use ClaimWinger</h3>
              <p className="text-gray-700 dark:text-gray-300 mb-4">
                With Wizz Air's 74% rejection rate and 8-16 month processing times, most passengers find it easier to use a professional claims service. ClaimWinger has a 97% success rate with Wizz Air claims and handles everything for you.
              </p>
              <div className="flex flex-wrap gap-4">
                <Button asChild className="bg-green-600 hover:bg-green-700">
                  <a href="https://claimwinger.com?utm_source=lotproblem&utm_medium=blog&utm_campaign=wizzair-guide" target="_blank" rel="noopener noreferrer">
                    Check Your Claim <ArrowRight className="ml-2 h-4 w-4" />
                  </a>
                </Button>
              </div>
            </div>
          </section>

          <section className="mb-12">
            <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-6">Real Wizz Air Compensation Cases</h2>

            <div className="space-y-6">
              <div className="bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-lg p-6">
                <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-3">Case 1: Katowice to London Luton - 6 Hour Delay</h3>
                <p className="text-gray-700 dark:text-gray-300 mb-3">
                  Delayed due to "late incoming aircraft." Wizz Air claimed extraordinary circumstances. Passenger proved the issue was caused by poor schedule planning, not an isolated event.
                </p>
                <p className="text-sm text-green-600 dark:text-green-400 font-semibold">
                  ✓ Result: €250 compensation after 9 months (with aviation authority intervention)
                </p>
              </div>

              <div className="bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-lg p-6">
                <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-3">Case 2: Budapest to Barcelona - Cancelled Day Before</h3>
                <p className="text-gray-700 dark:text-gray-300 mb-3">
                  Flight cancelled with 20 hours notice, alternative offered 18 hours later. Wizz Air initially offered only WIZZ credit. Passenger insisted on cash and cited EU261.
                </p>
                <p className="text-sm text-green-600 dark:text-green-400 font-semibold">
                  ✓ Result: €250 cash compensation after 4 months
                </p>
              </div>

              <div className="bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-lg p-6">
                <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-3">Case 3: Sofia to Vienna - Denied Boarding</h3>
                <p className="text-gray-700 dark:text-gray-300 mb-3">
                  Overbooked flight, passenger denied boarding despite checking in on time. Initially offered €150 voucher. Passenger rejected and demanded full €250 cash.
                </p>
                <p className="text-sm text-green-600 dark:text-green-400 font-semibold">
                  ✓ Result: €250 cash + next available flight + €40 meal vouchers (same day resolution)
                </p>
              </div>
            </div>
          </section>

          <section className="mb-12">
            <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-6">Frequently Asked Questions</h2>
            
            <div className="space-y-6">
              <div className="border-b border-gray-200 dark:border-gray-700 pb-6">
                <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-3">How long does Wizz Air take to pay compensation?</h3>
                <p className="text-gray-700 dark:text-gray-300">
                  Official processing time is "within 30 days," but in reality it takes 3-6 months for straightforward cases and up to 12+ months for disputed claims. Using a claims service typically speeds this up to 2-4 months.
                </p>
              </div>

              <div className="border-b border-gray-200 dark:border-gray-700 pb-6">
                <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-3">Should I accept WIZZ credit instead of cash?</h3>
                <p className="text-gray-700 dark:text-gray-300">
                  Only if the voucher value is significantly higher (e.g., €300 credit vs €250 cash) AND you plan to fly Wizz Air again soon. Otherwise, insist on cash - it's your legal right under EU261.
                </p>
              </div>

              <div className="border-b border-gray-200 dark:border-gray-700 pb-6">
                <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-3">Can I claim for flights I booked through a third party?</h3>
                <p className="text-gray-700 dark:text-gray-300">
                  Yes! EU261 rights apply regardless of where you booked. However, you must claim directly from Wizz Air (the operating airline), not the booking platform.
                </p>
              </div>

              <div className="border-b border-gray-200 dark:border-gray-700 pb-6">
                <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-3">What counts as "extraordinary circumstances" for Wizz Air?</h3>
                <p className="text-gray-700 dark:text-gray-300">
                  Legitimate examples: severe weather, airport closures, security threats, air traffic control strikes. NOT valid: technical issues (unless hidden manufacturing defect), crew scheduling problems, or Wizz Air staff strikes.
                </p>
              </div>

              <div className="border-b border-gray-200 dark:border-gray-700 pb-6">
                <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-3">Can I claim for old Wizz Air flights?</h3>
                <p className="text-gray-700 dark:text-gray-300">
                  Yes, but time limits vary by country. UK: 6 years, Hungary: 5 years, Poland: 3 years, Romania: 3 years. Check your departure country's limitation period.
                </p>
              </div>

              <div className="border-b border-gray-200 dark:border-gray-700 pb-6">
                <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-3">What if Wizz Air ignores my claim completely?</h3>
                <p className="text-gray-700 dark:text-gray-300">
                  After 6 weeks of silence, send a follow-up with a deadline (14 days). If still ignored, escalate to your national aviation authority (e.g., CAA in UK, Hungarian Aviation Authority). Consider using ClaimWinger to handle escalation professionally.
                </p>
              </div>

              <div className="border-b border-gray-200 dark:border-gray-700 pb-6">
                <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-3">Do I need a lawyer to claim against Wizz Air?</h3>
                <p className="text-gray-700 dark:text-gray-300">
                  No, but given Wizz Air's high rejection rate and complex process, many passengers use specialized claims companies (no-win-no-fee) rather than handling it themselves. Success rates jump from 26% (DIY) to 97% (professional service).
                </p>
              </div>

              <div className="pb-6">
                <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-3">What if my connecting flight was delayed, not the Wizz Air flight?</h3>
                <p className="text-gray-700 dark:text-gray-300">
                  If both flights were booked as one journey and you arrived 3+ hours late at your final destination, you can claim from the first airline (Wizz Air). If booked separately, you can only claim from the airline responsible for the delay.
                </p>
              </div>
            </div>
          </section>

          <section className="mb-12">
            <div className="bg-gradient-to-br from-purple-600 to-pink-600 text-white rounded-xl p-8 md:p-12">
              <h2 className="text-3xl font-bold mb-4">Stop Fighting Wizz Air Alone</h2>
              <p className="text-xl mb-6 opacity-90">
                With a 74% rejection rate and 8-16 month delays, claiming from Wizz Air directly is frustrating. Let experts handle it for you.
              </p>
              
              <div className="grid md:grid-cols-3 gap-6 mb-8">
                <div className="flex items-start gap-3">
                  <CheckCircle className="h-6 w-6 flex-shrink-0 mt-1" />
                  <div>
                    <h3 className="font-semibold mb-1">97% Success Rate</h3>
                    <p className="text-sm opacity-90">vs 26% for DIY claims</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <CheckCircle className="h-6 w-6 flex-shrink-0 mt-1" />
                  <div>
                    <h3 className="font-semibold mb-1">No Win, No Fee</h3>
                    <p className="text-sm opacity-90">Zero upfront costs</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <CheckCircle className="h-6 w-6 flex-shrink-0 mt-1" />
                  <div>
                    <h3 className="font-semibold mb-1">Fast Processing</h3>
                    <p className="text-sm opacity-90">2-4 months average</p>
                  </div>
                </div>
              </div>

              <Button size="lg" className="bg-white text-purple-600 hover:bg-gray-100">
                <a href="https://claimwinger.com?utm_source=lotproblem&utm_medium=blog&utm_campaign=wizzair-guide-cta" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2">
                  Get Your €250-€600 Now <ArrowRight className="h-5 w-5" />
                </a>
              </Button>
            </div>
          </section>

          <section>
            <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-6">Related Guides</h2>
            <div className="grid md:grid-cols-2 gap-6">
              <Link href="/en/blog/ryanair-compensation-guide" className="border border-gray-200 dark:border-gray-700 rounded-lg p-6 hover:border-purple-600 dark:hover:border-purple-400 transition-colors">
                <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">Ryanair Compensation Guide</h3>
                <p className="text-gray-600 dark:text-gray-400 text-sm">How to claim from Europe's largest low-cost carrier</p>
              </Link>
              <Link href="/en/blog/lot-polish-airlines-delay-compensation-guide" className="border border-gray-200 dark:border-gray-700 rounded-lg p-6 hover:border-purple-600 dark:hover:border-purple-400 transition-colors">
                <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">LOT Polish Airlines Guide</h3>
                <p className="text-gray-600 dark:text-gray-400 text-sm">Complete compensation guide for LOT delays</p>
              </Link>
            </div>
          </section>
        </div>
      </article>
    </LayoutEn>
  );
}