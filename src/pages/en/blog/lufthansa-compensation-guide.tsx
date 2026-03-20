import { LayoutEn } from "@/components/LayoutEn";
import { SEO } from "@/components/SEO";
import Link from "next/link";
import { Clock, AlertCircle, CheckCircle, ArrowRight, Plane, Star } from "lucide-react";
import { Button } from "@/components/ui/button";

export default function LufthansaCompensationGuide() {
  return (
    <LayoutEn>
      <SEO
        title="Lufthansa Compensation Guide 2025: Delays, Cancellations & Claims"
        description="Complete guide to claiming Lufthansa compensation. Learn how to navigate Europe's largest airline group's claim process for delays and cancellations."
        url="https://lotproblem.pl/en/blog/lufthansa-compensation-guide"
      />

      <article className="max-w-4xl mx-auto px-4 py-12">
        <div className="mb-8">
          <Link href="/en/blog" className="text-blue-600 hover:text-blue-700 dark:text-blue-400 dark:hover:text-blue-300 flex items-center gap-2 mb-4">
            <ArrowRight className="h-4 w-4 rotate-180" />
            Back to Blog
          </Link>
          
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-4">
            Lufthansa Compensation Guide 2025: Your Complete Rights Manual
          </h1>
          
          <div className="flex items-center gap-4 text-gray-600 dark:text-gray-400 mb-6">
            <time dateTime="2025-03-06">March 6, 2025</time>
            <span>•</span>
            <span>16 min read</span>
          </div>

          <p className="text-xl text-gray-700 dark:text-gray-300 leading-relaxed">
            Lufthansa Group (including SWISS, Austrian Airlines, Brussels Airlines, and Eurowings) is Europe's largest airline group. While they have a better compensation track record than budget carriers, the claim process can still be complex. This guide will help you navigate it successfully.
          </p>
        </div>

        <div className="prose prose-lg dark:prose-invert max-w-none">
          <div className="bg-yellow-50 dark:bg-yellow-900/20 border-l-4 border-yellow-600 p-6 mb-8">
            <div className="flex items-start gap-3">
              <AlertCircle className="h-6 w-6 text-yellow-600 flex-shrink-0 mt-1" />
              <div>
                <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">Important: Lufthansa Group Airlines</h3>
                <p className="text-gray-700 dark:text-gray-300 mb-0">
                  This guide applies to: <strong>Lufthansa, SWISS, Austrian Airlines, Brussels Airlines, Eurowings, Air Dolomiti, and Lufthansa CityLine</strong>. All follow the same compensation policies under the Lufthansa Group umbrella.
                </p>
              </div>
            </div>
          </div>

          <section className="mb-12">
            <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-6">Your Rights with Lufthansa Group</h2>
            
            <p className="text-gray-700 dark:text-gray-300 mb-6">
              All Lufthansa Group airlines are registered in the EU and must comply with <strong>EU Regulation 261/2004</strong> for:
            </p>

            <ul className="space-y-3 text-gray-700 dark:text-gray-300 mb-6">
              <li className="flex items-start gap-3">
                <CheckCircle className="h-5 w-5 text-green-600 flex-shrink-0 mt-1" />
                <span>All flights departing from EU airports (any destination)</span>
              </li>
              <li className="flex items-start gap-3">
                <CheckCircle className="h-5 w-5 text-green-600 flex-shrink-0 mt-1" />
                <span>Flights arriving in the EU from non-EU countries (on Lufthansa Group aircraft)</span>
              </li>
              <li className="flex items-start gap-3">
                <CheckCircle className="h-5 w-5 text-green-600 flex-shrink-0 mt-1" />
                <span>Codeshare flights operated by Lufthansa Group (check your ticket for operating carrier)</span>
              </li>
            </ul>

            <div className="bg-gray-50 dark:bg-gray-800 rounded-lg p-6 mb-6">
              <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-4">Lufthansa Compensation Amounts</h3>
              <table className="w-full">
                <thead>
                  <tr className="border-b border-gray-200 dark:border-gray-700">
                    <th className="text-left py-3 text-gray-900 dark:text-white">Flight Distance</th>
                    <th className="text-left py-3 text-gray-900 dark:text-white">Delay 3+ Hours</th>
                    <th className="text-left py-3 text-gray-900 dark:text-white">Cancellation</th>
                  </tr>
                </thead>
                <tbody className="text-gray-700 dark:text-gray-300">
                  <tr className="border-b border-gray-200 dark:border-gray-700">
                    <td className="py-3">Up to 1,500 km</td>
                    <td className="py-3 font-semibold text-green-600">€250</td>
                    <td className="py-3 font-semibold text-green-600">€250</td>
                  </tr>
                  <tr className="border-b border-gray-200 dark:border-gray-700">
                    <td className="py-3">1,500-3,500 km</td>
                    <td className="py-3 font-semibold text-green-600">€400</td>
                    <td className="py-3 font-semibold text-green-600">€400</td>
                  </tr>
                  <tr>
                    <td className="py-3">Over 3,500 km</td>
                    <td className="py-3 font-semibold text-green-600">€600</td>
                    <td className="py-3 font-semibold text-green-600">€600</td>
                  </tr>
                </tbody>
              </table>
              <p className="text-sm text-gray-600 dark:text-gray-400 mt-4">
                * Long-haul delays 3-4 hours may receive 50% reduced compensation
              </p>
            </div>
          </section>

          <section className="mb-12">
            <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-6">When Lufthansa Must Pay Compensation</h2>

            <div className="space-y-6">
              <div className="border-l-4 border-green-600 pl-6">
                <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-3">✓ You ARE Entitled to Compensation:</h3>
                <ul className="space-y-2 text-gray-700 dark:text-gray-300">
                  <li>• Flight delayed 3+ hours at final destination</li>
                  <li>• Flight cancelled less than 14 days before departure</li>
                  <li>• Denied boarding (overbooking)</li>
                  <li>• Missed connection causing 3+ hour total delay (single booking)</li>
                  <li>• Technical issues with aircraft (unless hidden manufacturing defect)</li>
                  <li>• Crew shortages or scheduling problems</li>
                  <li>• Lufthansa staff strikes</li>
                  <li>• Late aircraft arrival from previous flight</li>
                </ul>
              </div>

              <div className="border-l-4 border-red-600 pl-6">
                <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-3">✗ Extraordinary Circumstances (No Compensation):</h3>
                <ul className="space-y-2 text-gray-700 dark:text-gray-300">
                  <li>• Severe weather conditions (storms, heavy snow, fog)</li>
                  <li>• Air traffic control restrictions</li>
                  <li>• Airport closures or security threats</li>
                  <li>• Political instability affecting flight paths</li>
                  <li>• Bird strikes (proven)</li>
                  <li>• Hidden manufacturing defects (must be documented)</li>
                  <li>• Passenger medical emergencies requiring diversion</li>
                </ul>
              </div>
            </div>
          </section>

          <section className="mb-12">
            <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-6">Lufthansa's Claim Process: The Good and Bad</h2>

            <div className="grid md:grid-cols-2 gap-6 mb-8">
              <div className="bg-green-50 dark:bg-green-900/20 border border-green-200 dark:border-green-800 rounded-lg p-6">
                <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-3 flex items-center gap-2">
                  <CheckCircle className="h-5 w-5 text-green-600" />
                  The Good
                </h3>
                <ul className="space-y-2 text-sm text-gray-700 dark:text-gray-300">
                  <li>• Professional customer service</li>
                  <li>• Clear online claim portal</li>
                  <li>• Generally honors valid claims</li>
                  <li>• Faster processing than budget carriers (2-4 months)</li>
                  <li>• Transparent communication</li>
                </ul>
              </div>

              <div className="bg-red-50 dark:bg-red-900/20 border border-red-200 dark:border-red-800 rounded-lg p-6">
                <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-3 flex items-center gap-2">
                  <AlertCircle className="h-5 w-5 text-red-600" />
                  The Challenges
                </h3>
                <ul className="space-y-2 text-sm text-gray-700 dark:text-gray-300">
                  <li>• Complex documentation requirements</li>
                  <li>• Strict interpretation of "extraordinary circumstances"</li>
                  <li>• May offer vouchers instead of cash initially</li>
                  <li>• Requires proof of boarding (boarding passes)</li>
                  <li>• Appeals can take 6+ months</li>
                </ul>
              </div>
            </div>

            <div className="bg-blue-50 dark:bg-blue-900/20 border-l-4 border-blue-600 p-6">
              <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-3">💡 Success Rate Statistics</h3>
              <p className="text-gray-700 dark:text-gray-300 mb-2">
                According to AirHelp's 2024 airline rankings:
              </p>
              <ul className="text-sm text-gray-700 dark:text-gray-300 space-y-1">
                <li>• <strong>Lufthansa:</strong> 56% of claims paid without dispute</li>
                <li>• <strong>SWISS:</strong> 62% immediate approval rate</li>
                <li>• <strong>Austrian:</strong> 54% approval rate</li>
                <li>• <strong>Eurowings:</strong> 48% approval rate (more disputes)</li>
              </ul>
            </div>
          </section>

          <section className="mb-12">
            <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-6">How to File a Lufthansa Compensation Claim</h2>

            <div className="bg-gradient-to-r from-blue-50 to-indigo-50 dark:from-blue-900/20 dark:to-indigo-900/20 rounded-lg p-8 mb-8">
              <h3 className="text-2xl font-semibold text-gray-900 dark:text-white mb-6">Step-by-Step Process:</h3>
              
              <div className="space-y-6">
                <div className="flex gap-4">
                  <div className="flex-shrink-0 w-8 h-8 bg-blue-600 text-white rounded-full flex items-center justify-center font-bold">1</div>
                  <div>
                    <h4 className="font-semibold text-gray-900 dark:text-white mb-2">Gather Required Documentation</h4>
                    <ul className="text-gray-700 dark:text-gray-300 space-y-1 text-sm">
                      <li>• <strong>Booking reference</strong> (6-character code)</li>
                      <li>• <strong>Boarding passes</strong> (digital or paper - CRITICAL for Lufthansa)</li>
                      <li>• <strong>Flight details</strong> (date, flight number, route)</li>
                      <li>• <strong>Delay/cancellation proof</strong> (emails, SMS from Lufthansa, airport photos)</li>
                      <li>• <strong>Expense receipts</strong> (meals, hotels if relevant)</li>
                      <li>• <strong>Bank details</strong> (IBAN for SEPA transfers)</li>
                    </ul>
                  </div>
                </div>

                <div className="flex gap-4">
                  <div className="flex-shrink-0 w-8 h-8 bg-blue-600 text-white rounded-full flex items-center justify-center font-bold">2</div>
                  <div>
                    <h4 className="font-semibold text-gray-900 dark:text-white mb-2">Submit Your Claim</h4>
                    <p className="text-gray-700 dark:text-gray-300 text-sm mb-2">
                      <strong>Online Portal (Recommended):</strong> <em>lufthansa.com → Service → Refunds & Compensation</em>
                    </p>
                    <p className="text-gray-700 dark:text-gray-300 text-sm mb-2">
                      <strong>Email:</strong> customer.relations@dlh.de (with delivery receipt)
                    </p>
                    <p className="text-gray-700 dark:text-gray-300 text-sm">
                      <strong>Postal Address:</strong><br />
                      Deutsche Lufthansa AG<br />
                      Customer Relations (FRA CI/S)<br />
                      60546 Frankfurt, Germany
                    </p>
                  </div>
                </div>

                <div className="flex gap-4">
                  <div className="flex-shrink-0 w-8 h-8 bg-blue-600 text-white rounded-full flex items-center justify-center font-bold">3</div>
                  <div>
                    <h4 className="font-semibold text-gray-900 dark:text-white mb-2">Track Your Claim</h4>
                    <p className="text-gray-700 dark:text-gray-300 text-sm">
                      Lufthansa provides a claim reference number. You can track status online. Typical response time: 4-8 weeks for initial decision, 2-4 months for payment if approved.
                    </p>
                  </div>
                </div>

                <div className="flex gap-4">
                  <div className="flex-shrink-0 w-8 h-8 bg-blue-600 text-white rounded-full flex items-center justify-center font-bold">4</div>
                  <div>
                    <h4 className="font-semibold text-gray-900 dark:text-white mb-2">If Rejected: Appeal</h4>
                    <p className="text-gray-700 dark:text-gray-300 text-sm mb-2">
                      Request detailed explanation of rejection. If you disagree, submit appeal with counter-evidence within 30 days. Consider using Schlichtungsstelle (German ADR body) or your national enforcement body.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-green-50 dark:bg-green-900/20 border-l-4 border-green-600 p-6">
              <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-3">💡 Pro Tip: Let Experts Handle It</h3>
              <p className="text-gray-700 dark:text-gray-300 mb-4">
                While Lufthansa is more professional than budget carriers, they still reject 44% of initial claims. ClaimWinger specializes in Lufthansa Group claims and has a 94% success rate, handling all documentation and appeals for you.
              </p>
              <Button asChild className="bg-green-600 hover:bg-green-700">
                <a href="https://claimwinger.com?utm_source=lotproblem&utm_medium=blog&utm_campaign=lufthansa-guide" target="_blank" rel="noopener noreferrer">
                  Check Your Claim <ArrowRight className="ml-2 h-4 w-4" />
                </a>
              </Button>
            </div>
          </section>

          <section className="mb-12">
            <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-6">Common Lufthansa Disruption Scenarios</h2>

            <div className="space-y-6">
              <div className="bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-lg p-6">
                <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-3">Scenario 1: Frankfurt Hub Connection Delays</h3>
                <p className="text-gray-700 dark:text-gray-300 mb-3">
                  <strong>Situation:</strong> Inbound flight to Frankfurt delayed, causing missed connection to final destination (e.g., New York to Frankfurt to Warsaw). Total delay at Warsaw: 5 hours.
                </p>
                <p className="text-sm text-gray-600 dark:text-gray-400 mb-2">
                  <strong>Your Rights:</strong>
                </p>
                <ul className="text-sm text-gray-700 dark:text-gray-300 space-y-1 mb-3">
                  <li>• €400 compensation (intra-EU connection distance 1,500-3,500km)</li>
                  <li>• Free rebooking on next available flight</li>
                  <li>• Meals and refreshments during wait</li>
                  <li>• Hotel if overnight delay (Lufthansa usually provides voucher)</li>
                </ul>
                <p className="text-sm text-green-600 dark:text-green-400 font-semibold">
                  ✓ Lufthansa typically honors these claims if both flights booked together
                </p>
              </div>

              <div className="bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-lg p-6">
                <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-3">Scenario 2: Technical Issues on Long-Haul</h3>
                <p className="text-gray-700 dark:text-gray-300 mb-3">
                  <strong>Situation:</strong> Munich to Los Angeles flight delayed 6 hours due to "technical problem" - plane needed part replacement.
                </p>
                <p className="text-sm text-gray-600 dark:text-gray-400 mb-2">
                  <strong>Your Rights:</strong>
                </p>
                <ul className="text-sm text-gray-700 dark:text-gray-300 space-y-1 mb-3">
                  <li>• €600 compensation (over 3,500km, 3+ hour delay)</li>
                  <li>• Meals during wait</li>
                  <li>• Right to refund if delay exceeds 5 hours</li>
                </ul>
                <p className="text-sm text-yellow-600 dark:text-yellow-400 font-semibold">
                  ⚠️ Lufthansa may claim "hidden defect" - request maintenance logs to challenge
                </p>
              </div>

              <div className="bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-lg p-6">
                <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-3">Scenario 3: Cancellation Due to "Operational Reasons"</h3>
                <p className="text-gray-700 dark:text-gray-300 mb-3">
                  <strong>Situation:</strong> Berlin to Vienna cancelled 3 days before departure. Alternative offered next day, 20 hours later.
                </p>
                <p className="text-sm text-gray-600 dark:text-gray-400 mb-2">
                  <strong>Your Rights:</strong>
                </p>
                <ul className="text-sm text-gray-700 dark:text-gray-300 space-y-1 mb-3">
                  <li>• €250 compensation (under 1,500km, cancelled within 14 days)</li>
                  <li>• Choice: refund OR rebooking at no cost</li>
                  <li>• Hotel if overnight wait (usually provided by Lufthansa)</li>
                </ul>
                <p className="text-sm text-green-600 dark:text-green-400 font-semibold">
                  ✓ "Operational reasons" is NOT extraordinary - compensation applies
                </p>
              </div>
            </div>
          </section>

          <section className="mb-12">
            <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-6">Real Lufthansa Compensation Cases</h2>

            <div className="space-y-6">
              <div className="bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-lg p-6">
                <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-3">Case 1: Munich to Chicago - 8 Hour Delay</h3>
                <p className="text-gray-700 dark:text-gray-300 mb-3">
                  <strong>Issue:</strong> Crew shortage. Lufthansa initially claimed "unforeseen circumstances." Passenger provided evidence of industry-wide crew planning issues affecting Lufthansa for months.
                </p>
                <p className="text-sm text-green-600 dark:text-green-400 font-semibold">
                  ✓ Result: €600 compensation after 3-month appeal process
                </p>
              </div>

              <div className="bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-lg p-6">
                <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-3">Case 2: SWISS Geneva to London - Cancelled Day Before</h3>
                <p className="text-gray-700 dark:text-gray-300 mb-3">
                  <strong>Issue:</strong> Flight cancelled with 22 hours notice. Alternative offered 6 hours later. SWISS offered €150 voucher. Passenger requested cash.
                </p>
                <p className="text-sm text-green-600 dark:text-green-400 font-semibold">
                  ✓ Result: €250 cash paid within 6 weeks
                </p>
              </div>

              <div className="bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-lg p-6">
                <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-3">Case 3: Austrian Airlines Vienna to Paris - Denied Boarding</h3>
                <p className="text-gray-700 dark:text-gray-300 mb-3">
                  <strong>Issue:</strong> Overbooked business class. Passenger checked in on time. Initially offered €200 voucher. Insisted on full €250 cash + rebooking.
                </p>
                <p className="text-sm text-green-600 dark:text-green-400 font-semibold">
                  ✓ Result: €250 cash + economy seat on next flight (2h later) + lounge access
                </p>
              </div>
            </div>
          </section>

          <section className="mb-12">
            <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-6">Frequently Asked Questions</h2>
            
            <div className="space-y-6">
              <div className="border-b border-gray-200 dark:border-gray-700 pb-6">
                <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-3">How long does Lufthansa take to process compensation claims?</h3>
                <p className="text-gray-700 dark:text-gray-300">
                  Initial decision: 4-8 weeks. Payment if approved: additional 2-4 weeks. Total typical timeline: 2-4 months for straightforward cases. Appeals can extend this to 6-9 months.
                </p>
              </div>

              <div className="border-b border-gray-200 dark:border-gray-700 pb-6">
                <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-3">Does Lufthansa pay in cash or vouchers?</h3>
                <p className="text-gray-700 dark:text-gray-300">
                  You have the legal right to cash. Lufthansa may initially offer vouchers, but you can refuse and request SEPA bank transfer. Always specify your payment preference clearly in your claim.
                </p>
              </div>

              <div className="border-b border-gray-200 dark:border-gray-700 pb-6">
                <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-3">What if I booked through a third party (Expedia, Kayak)?</h3>
                <p className="text-gray-700 dark:text-gray-300">
                  Your EU261 rights still apply. Claim directly from Lufthansa (the operating carrier), not the booking site. Provide your booking reference and Lufthansa ticket number.
                </p>
              </div>

              <div className="border-b border-gray-200 dark:border-gray-700 pb-6">
                <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-3">Can I claim for Eurowings flights separately from Lufthansa?</h3>
                <p className="text-gray-700 dark:text-gray-300">
                  Eurowings is part of Lufthansa Group but has a separate claims process. Use eurowings.com for Eurowings flights, but the same EU261 rules apply.
                </p>
              </div>

              <div className="border-b border-gray-200 dark:border-gray-700 pb-6">
                <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-3">What counts as "extraordinary circumstances" for Lufthansa?</h3>
                <p className="text-gray-700 dark:text-gray-300">
                  Severe weather, ATC strikes, airport closures, security threats, and proven hidden manufacturing defects. NOT valid: crew shortages, routine maintenance, commercial decisions, or Lufthansa staff strikes.
                </p>
              </div>

              <div className="border-b border-gray-200 dark:border-gray-700 pb-6">
                <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-3">Can I claim for old Lufthansa flights?</h3>
                <p className="text-gray-700 dark:text-gray-300">
                  Yes. Germany (Lufthansa's registration): 3 years. UK: 6 years. Check your country's limitation period. Older claims may require more documentation.
                </p>
              </div>

              <div className="border-b border-gray-200 dark:border-gray-700 pb-6">
                <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-3">What if I lost my boarding pass?</h3>
                <p className="text-gray-700 dark:text-gray-300">
                  Lufthansa requires proof of boarding. Contact them to request boarding confirmation from their system. Alternatively, provide passport stamps, hotel receipts, or credit card statements from destination as supporting evidence.
                </p>
              </div>

              <div className="pb-6">
                <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-3">Should I use a claims company for Lufthansa?</h3>
                <p className="text-gray-700 dark:text-gray-300">
                  Lufthansa is more professional than budget carriers, but still rejects 44% of initial claims. If you want to avoid the hassle and increase success rate to 94%, using ClaimWinger (no-win-no-fee) is advisable.
                </p>
              </div>
            </div>
          </section>

          <section className="mb-12">
            <div className="bg-gradient-to-br from-blue-600 to-indigo-600 text-white rounded-xl p-8 md:p-12">
              <h2 className="text-3xl font-bold mb-4">Get Your Lufthansa Compensation Without the Hassle</h2>
              <p className="text-xl mb-6 opacity-90">
                While Lufthansa is more professional than budget carriers, 44% of claims are still initially rejected. Let ClaimWinger's experts maximize your success rate.
              </p>
              
              <div className="grid md:grid-cols-3 gap-6 mb-8">
                <div className="flex items-start gap-3">
                  <CheckCircle className="h-6 w-6 flex-shrink-0 mt-1" />
                  <div>
                    <h3 className="font-semibold mb-1">94% Success Rate</h3>
                    <p className="text-sm opacity-90">Specialized in Lufthansa Group</p>
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
                    <p className="text-sm opacity-90">2-3 months average</p>
                  </div>
                </div>
              </div>

              <Button size="lg" className="bg-white text-blue-600 hover:bg-gray-100">
                <a href="https://claimwinger.com?utm_source=lotproblem&utm_medium=blog&utm_campaign=lufthansa-guide-cta" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2">
                  Claim Your €250-€600 Now <ArrowRight className="h-5 w-5" />
                </a>
              </Button>
            </div>
          </section>

          <section>
            <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-6">Related Airline Guides</h2>
            <div className="grid md:grid-cols-2 gap-6">
              <Link href="/en/blog/ryanair-compensation-guide" className="border border-gray-200 dark:border-gray-700 rounded-lg p-6 hover:border-blue-600 dark:hover:border-blue-400 transition-colors">
                <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">Ryanair Compensation Guide</h3>
                <p className="text-gray-600 dark:text-gray-400 text-sm">How to claim from Europe's largest low-cost carrier</p>
              </Link>
              <Link href="/en/blog/wizz-air-compensation-guide" className="border border-gray-200 dark:border-gray-700 rounded-lg p-6 hover:border-blue-600 dark:hover:border-blue-400 transition-colors">
                <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">Wizz Air Compensation Guide</h3>
                <p className="text-gray-600 dark:text-gray-400 text-sm">Complete guide for Wizz Air claims</p>
              </Link>
            </div>
          </section>
        </div>
      </article>
    </LayoutEn>
  );
}
