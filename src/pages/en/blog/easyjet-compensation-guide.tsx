import { LayoutEn } from "@/components/LayoutEn";
import { SEO } from "@/components/SEO";
import Link from "next/link";
import { Clock, AlertCircle, CheckCircle, ArrowRight, Plane, Mail, Phone } from "lucide-react";
import { Button } from "@/components/ui/button";

export default function EasyJetCompensationGuide() {
  return (
    <LayoutEn>
      <SEO
        title="EasyJet Compensation Guide 2025: Flight Delays & Cancellations"
        description="Complete guide to claiming EasyJet compensation for delays and cancellations. Learn the process, timelines, and how to maximize your claim success."
        url="https://lotproblem.pl/en/blog/easyjet-compensation-guide"
      />

      <article className="max-w-4xl mx-auto px-4 py-12">
        <div className="mb-8">
          <Link href="/en/blog" className="text-blue-600 hover:text-blue-700 dark:text-blue-400 dark:hover:text-blue-300 flex items-center gap-2 mb-4">
            <ArrowRight className="h-4 w-4 rotate-180" />
            Back to Blog
          </Link>
          
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-4">
            EasyJet Compensation Guide 2025: Your Complete Rights Manual
          </h1>
          
          <div className="flex items-center gap-4 text-gray-600 dark:text-gray-400 mb-6">
            <time dateTime="2025-03-06">March 6, 2025</time>
            <span>•</span>
            <span>15 min read</span>
          </div>

          <p className="text-xl text-gray-700 dark:text-gray-300 leading-relaxed">
            EasyJet is Europe's second-largest low-cost carrier after Ryanair. While they have a better reputation for customer service, the compensation claim process still has its challenges. This guide will help you navigate it successfully.
          </p>
        </div>

        <div className="prose prose-lg dark:prose-invert max-w-none">
          <div className="bg-yellow-50 dark:bg-yellow-900/20 border-l-4 border-yellow-600 p-6 mb-8">
            <div className="flex items-start gap-3">
              <AlertCircle className="h-6 w-6 text-yellow-600 flex-shrink-0 mt-1" />
              <div>
                <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">Important: EasyJet operates across Europe</h3>
                <p className="text-gray-700 dark:text-gray-300 mb-0">
                  EasyJet is registered in the UK but must comply with <strong>EU Regulation 261/2004</strong> for all EU flights and <strong>UK261</strong> for UK flights post-Brexit. Your rights are essentially the same under both regulations.
                </p>
              </div>
            </div>
          </div>

          <section className="mb-12">
            <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-6">Your Rights with EasyJet</h2>
            
            <p className="text-gray-700 dark:text-gray-300 mb-6">
              EasyJet must compensate you under EU261/UK261 for:
            </p>

            <ul className="space-y-3 text-gray-700 dark:text-gray-300 mb-6">
              <li className="flex items-start gap-3">
                <CheckCircle className="h-5 w-5 text-green-600 flex-shrink-0 mt-1" />
                <span>All flights departing from EU/UK airports (any destination)</span>
              </li>
              <li className="flex items-start gap-3">
                <CheckCircle className="h-5 w-5 text-green-600 flex-shrink-0 mt-1" />
                <span>Flights arriving in EU/UK from non-EU/UK countries (on EasyJet aircraft)</span>
              </li>
              <li className="flex items-start gap-3">
                <CheckCircle className="h-5 w-5 text-green-600 flex-shrink-0 mt-1" />
                <span>Delays over 3 hours at final destination</span>
              </li>
              <li className="flex items-start gap-3">
                <CheckCircle className="h-5 w-5 text-green-600 flex-shrink-0 mt-1" />
                <span>Flight cancellations (less than 14 days notice)</span>
              </li>
              <li className="flex items-start gap-3">
                <CheckCircle className="h-5 w-5 text-green-600 flex-shrink-0 mt-1" />
                <span>Denied boarding (overbooking)</span>
              </li>
            </ul>

            <div className="bg-gray-50 dark:bg-gray-800 rounded-lg p-6 mb-6">
              <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-4">EasyJet Compensation Amounts</h3>
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
                    <td className="py-3 font-semibold text-green-600">€250 / £220</td>
                    <td className="py-3 font-semibold text-green-600">€250 / £220</td>
                  </tr>
                  <tr className="border-b border-gray-200 dark:border-gray-700">
                    <td className="py-3">1,500-3,500 km</td>
                    <td className="py-3 font-semibold text-green-600">€400 / £350</td>
                    <td className="py-3 font-semibold text-green-600">€400 / £350</td>
                  </tr>
                  <tr>
                    <td className="py-3">Over 3,500 km</td>
                    <td className="py-3 font-semibold text-green-600">€600 / £520</td>
                    <td className="py-3 font-semibold text-green-600">€600 / £520</td>
                  </tr>
                </tbody>
              </table>
              <p className="text-sm text-gray-600 dark:text-gray-400 mt-4">
                * Long-haul delays 3-4 hours may receive 50% reduced compensation
              </p>
            </div>
          </section>

          <section className="mb-12">
            <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-6">When EasyJet Must Pay Compensation</h2>

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
                  <li>• EasyJet staff strikes</li>
                  <li>• Late aircraft arrival from previous flight</li>
                </ul>
              </div>

              <div className="border-l-4 border-red-600 pl-6">
                <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-3">✗ Extraordinary Circumstances (No Compensation):</h3>
                <ul className="space-y-2 text-gray-700 dark:text-gray-300">
                  <li>• Severe weather conditions (storms, heavy snow, fog)</li>
                  <li>• Air traffic control strikes or restrictions</li>
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
            <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-6">EasyJet's Claim Process: The Reality</h2>

            <div className="grid md:grid-cols-2 gap-6 mb-8">
              <div className="bg-green-50 dark:bg-green-900/20 border border-green-200 dark:border-green-800 rounded-lg p-6">
                <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-3 flex items-center gap-2">
                  <CheckCircle className="h-5 w-5 text-green-600" />
                  The Good
                </h3>
                <ul className="space-y-2 text-sm text-gray-700 dark:text-gray-300">
                  <li>• Better than Ryanair for customer service</li>
                  <li>• Clear online claims portal</li>
                  <li>• Generally honors valid claims</li>
                  <li>• Faster processing than ultra-low-cost carriers</li>
                  <li>• Transparent communication</li>
                </ul>
              </div>

              <div className="bg-red-50 dark:bg-red-900/20 border border-red-200 dark:border-red-800 rounded-lg p-6">
                <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-3 flex items-center gap-2">
                  <AlertCircle className="h-5 w-5 text-red-600" />
                  The Challenges
                </h3>
                <ul className="space-y-2 text-sm text-gray-700 dark:text-gray-300">
                  <li>• Still rejects 48% of initial claims</li>
                  <li>• Strict documentation requirements</li>
                  <li>• May offer vouchers first (you can refuse)</li>
                  <li>• 3-6 month processing times</li>
                  <li>• Appeals can take additional 3-4 months</li>
                </ul>
              </div>
            </div>

            <div className="bg-blue-50 dark:bg-blue-900/20 border-l-4 border-blue-600 p-6">
              <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-3">💡 Success Rate Statistics</h3>
              <p className="text-gray-700 dark:text-gray-300 mb-2">
                According to AirHelp's 2024 airline rankings:
              </p>
              <ul className="text-sm text-gray-700 dark:text-gray-300 space-y-1">
                <li>• <strong>EasyJet:</strong> 52% of claims paid without dispute</li>
                <li>• <strong>Average processing time:</strong> 3-5 months</li>
                <li>• <strong>Appeal success rate:</strong> 31% (lower than legacy carriers)</li>
                <li>• <strong>Voucher offer rate:</strong> 64% (high pressure to accept vouchers)</li>
              </ul>
            </div>
          </section>

          <section className="mb-12">
            <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-6">How to File an EasyJet Compensation Claim</h2>

            <div className="bg-gradient-to-r from-blue-50 to-indigo-50 dark:from-blue-900/20 dark:to-indigo-900/20 rounded-lg p-8 mb-8">
              <h3 className="text-2xl font-semibold text-gray-900 dark:text-white mb-6">Step-by-Step Process:</h3>
              
              <div className="space-y-6">
                <div className="flex gap-4">
                  <div className="flex-shrink-0 w-8 h-8 bg-blue-600 text-white rounded-full flex items-center justify-center font-bold">1</div>
                  <div>
                    <h4 className="font-semibold text-gray-900 dark:text-white mb-2">Gather Required Documentation</h4>
                    <ul className="text-gray-700 dark:text-gray-300 space-y-1 text-sm">
                      <li>• <strong>Booking reference</strong> (6-digit code)</li>
                      <li>• <strong>Boarding passes</strong> (digital or paper)</li>
                      <li>• <strong>Flight details</strong> (date, flight number, route)</li>
                      <li>• <strong>Delay/cancellation proof</strong> (emails, SMS from EasyJet, airport photos)</li>
                      <li>• <strong>Expense receipts</strong> (meals, hotels if relevant)</li>
                      <li>• <strong>Bank details</strong> (IBAN or UK account details)</li>
                    </ul>
                  </div>
                </div>

                <div className="flex gap-4">
                  <div className="flex-shrink-0 w-8 h-8 bg-blue-600 text-white rounded-full flex items-center justify-center font-bold">2</div>
                  <div>
                    <h4 className="font-semibold text-gray-900 dark:text-white mb-2">Submit Your Claim</h4>
                    <p className="text-gray-700 dark:text-gray-300 text-sm mb-2">
                      <strong>Online Portal (Recommended):</strong> <em>easyjet.com → Help → Flight disruption → Compensation claim</em>
                    </p>
                    <p className="text-gray-700 dark:text-gray-300 text-sm mb-2">
                      <strong>Email:</strong> correspondance@easyjet.com
                    </p>
                    <p className="text-gray-700 dark:text-gray-300 text-sm">
                      <strong>Postal Address:</strong><br />
                      EasyJet Airline Company Limited<br />
                      Hangar 89, London Luton Airport<br />
                      Luton, Bedfordshire LU2 9PF, UK
                    </p>
                  </div>
                </div>

                <div className="flex gap-4">
                  <div className="flex-shrink-0 w-8 h-8 bg-blue-600 text-white rounded-full flex items-center justify-center font-bold">3</div>
                  <div>
                    <h4 className="font-semibold text-gray-900 dark:text-white mb-2">Track Your Claim</h4>
                    <p className="text-gray-700 dark:text-gray-300 text-sm">
                      EasyJet provides a claim reference number. You can track status online at easyjet.com. Typical response time: 6-8 weeks for initial decision, 3-5 months for payment if approved.
                    </p>
                  </div>
                </div>

                <div className="flex gap-4">
                  <div className="flex-shrink-0 w-8 h-8 bg-blue-600 text-white rounded-full flex items-center justify-center font-bold">4</div>
                  <div>
                    <h4 className="font-semibold text-gray-900 dark:text-white mb-2">If Rejected: Appeal</h4>
                    <p className="text-gray-700 dark:text-gray-300 text-sm mb-2">
                      Request detailed explanation of rejection. If you disagree, submit appeal with counter-evidence within 30 days. Consider using your national enforcement body (CAA in UK, national aviation authority in EU).
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-green-50 dark:bg-green-900/20 border-l-4 border-green-600 p-6">
              <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-3">💡 Pro Tip: Let Experts Handle It</h3>
              <p className="text-gray-700 dark:text-gray-300 mb-4">
                EasyJet rejects 48% of initial claims and often pressures passengers to accept vouchers. ClaimWinger specializes in low-cost carrier claims and has a 91% success rate with EasyJet, handling all documentation and appeals for you.
              </p>
              <Button asChild className="bg-green-600 hover:bg-green-700">
                <a href="https://claimwinger.com?utm_source=lotproblem&utm_medium=blog&utm_campaign=easyjet-guide" target="_blank" rel="noopener noreferrer">
                  Check Your Claim <ArrowRight className="ml-2 h-4 w-4" />
                </a>
              </Button>
            </div>
          </section>

          <section className="mb-12">
            <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-6">Common EasyJet Disruption Scenarios</h2>

            <div className="space-y-6">
              <div className="bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-lg p-6">
                <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-3">Scenario 1: London Gatwick to Barcelona - 5 Hour Delay</h3>
                <p className="text-gray-700 dark:text-gray-300 mb-3">
                  <strong>Situation:</strong> Technical issue with aircraft. EasyJet provided meals and £10 voucher. Flight departed 5 hours late.
                </p>
                <p className="text-sm text-gray-600 dark:text-gray-400 mb-2">
                  <strong>Your Rights:</strong>
                </p>
                <ul className="text-sm text-gray-700 dark:text-gray-300 space-y-1 mb-3">
                  <li>• €400 / £350 compensation (1,500-3,500km distance)</li>
                  <li>• Meals and refreshments during wait (already provided)</li>
                  <li>• Right to full refund if delay exceeded 5 hours (optional)</li>
                </ul>
                <p className="text-sm text-green-600 dark:text-green-400 font-semibold">
                  ✓ Technical issues are NOT extraordinary - compensation applies
                </p>
              </div>

              <div className="bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-lg p-6">
                <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-3">Scenario 2: Manchester to Alicante - Cancelled 2 Days Before</h3>
                <p className="text-gray-700 dark:text-gray-300 mb-3">
                  <strong>Situation:</strong> Flight cancelled with 48 hours notice due to "operational reasons." Alternative offered next day, 18 hours later.
                </p>
                <p className="text-sm text-gray-600 dark:text-gray-400 mb-2">
                  <strong>Your Rights:</strong>
                </p>
                <ul className="text-sm text-gray-700 dark:text-gray-300 space-y-1 mb-3">
                  <li>• €400 / £350 compensation (1,500-3,500km, cancelled within 14 days)</li>
                  <li>• Choice: full refund OR rebooking at no cost</li>
                  <li>• Hotel if overnight wait (EasyJet should provide)</li>
                </ul>
                <p className="text-sm text-green-600 dark:text-green-400 font-semibold">
                  ✓ "Operational reasons" is NOT extraordinary - full compensation applies
                </p>
              </div>

              <div className="bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-lg p-6">
                <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-3">Scenario 3: Amsterdam to Edinburgh - Denied Boarding</h3>
                <p className="text-gray-700 dark:text-gray-300 mb-3">
                  <strong>Situation:</strong> Overbooked flight. Passenger checked in on time. EasyJet offered €200 voucher + next flight in 4 hours.
                </p>
                <p className="text-sm text-gray-600 dark:text-gray-400 mb-2">
                  <strong>Your Rights:</strong>
                </p>
                <ul className="text-sm text-gray-700 dark:text-gray-300 space-y-1 mb-3">
                  <li>• €250 / £220 CASH compensation (under 1,500km) - can refuse voucher</li>
                  <li>• Free rebooking on next available flight</li>
                  <li>• Meals during wait</li>
                  <li>• Right to full refund instead of rebooking</li>
                </ul>
                <p className="text-sm text-yellow-600 dark:text-yellow-400 font-semibold">
                  ⚠️ You can REFUSE the voucher and demand cash payment
                </p>
              </div>
            </div>
          </section>

          <section className="mb-12">
            <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-6">Real EasyJet Compensation Cases</h2>

            <div className="space-y-6">
              <div className="bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-lg p-6">
                <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-3">Case 1: Berlin to London - 6 Hour Crew Shortage Delay</h3>
                <p className="text-gray-700 dark:text-gray-300 mb-3">
                  <strong>Issue:</strong> Crew shortage. EasyJet initially claimed "unforeseen circumstances." Passenger challenged with evidence of industry-wide crew planning issues.
                </p>
                <p className="text-sm text-green-600 dark:text-green-400 font-semibold">
                  ✓ Result: £350 compensation after 4-month appeal process
                </p>
              </div>

              <div className="bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-lg p-6">
                <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-3">Case 2: Paris to Nice - Cancelled Morning Before</h3>
                <p className="text-gray-700 dark:text-gray-300 mb-3">
                  <strong>Issue:</strong> Flight cancelled with 10 hours notice. Alternative offered 8 hours later. EasyJet offered €180 voucher. Passenger requested cash.
                </p>
                <p className="text-sm text-green-600 dark:text-green-400 font-semibold">
                  ✓ Result: €250 cash paid within 8 weeks after rejecting voucher
                </p>
              </div>

              <div className="bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-lg p-6">
                <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-3">Case 3: Lisbon to Geneva - Missed Connection Due to Delay</h3>
                <p className="text-gray-700 dark:text-gray-300 mb-3">
                  <strong>Issue:</strong> First EasyJet flight delayed 2 hours, causing missed connection. Total delay at final destination: 5 hours. Both flights booked together.
                </p>
                <p className="text-sm text-green-600 dark:text-green-400 font-semibold">
                  ✓ Result: €400 compensation + hotel for overnight wait + rebooking on next morning flight
                </p>
              </div>
            </div>
          </section>

          <section className="mb-12">
            <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-6">Frequently Asked Questions</h2>
            
            <div className="space-y-6">
              <div className="border-b border-gray-200 dark:border-gray-700 pb-6">
                <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-3">How long does EasyJet take to process compensation claims?</h3>
                <p className="text-gray-700 dark:text-gray-300">
                  Initial decision: 6-8 weeks. Payment if approved: additional 4-8 weeks. Total typical timeline: 3-5 months for straightforward cases. Appeals can extend this to 6-9 months.
                </p>
              </div>

              <div className="border-b border-gray-200 dark:border-gray-700 pb-6">
                <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-3">Does EasyJet pay in cash or vouchers?</h3>
                <p className="text-gray-700 dark:text-gray-300">
                  You have the legal right to cash. EasyJet frequently offers vouchers first (64% of cases), but you can refuse and request bank transfer. Always specify your preference for cash payment clearly in your claim.
                </p>
              </div>

              <div className="border-b border-gray-200 dark:border-gray-700 pb-6">
                <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-3">What if I booked through a third party (Expedia, Booking.com)?</h3>
                <p className="text-gray-700 dark:text-gray-300">
                  Your EU261/UK261 rights still apply. Claim directly from EasyJet (the operating carrier), not the booking site. Provide your booking reference and EasyJet ticket number.
                </p>
              </div>

              <div className="border-b border-gray-200 dark:border-gray-700 pb-6">
                <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-3">Can I claim for old EasyJet flights?</h3>
                <p className="text-gray-700 dark:text-gray-300">
                  Yes. UK (EasyJet's registration): 6 years. Most EU countries: 2-3 years. Check your country's limitation period. Older claims may require more documentation.
                </p>
              </div>

              <div className="border-b border-gray-200 dark:border-gray-700 pb-6">
                <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-3">What counts as "extraordinary circumstances" for EasyJet?</h3>
                <p className="text-gray-700 dark:text-gray-300">
                  Severe weather, ATC strikes, airport closures, security threats, and proven hidden manufacturing defects. NOT valid: crew shortages, routine maintenance, commercial decisions, or EasyJet staff strikes.
                </p>
              </div>

              <div className="border-b border-gray-200 dark:border-gray-700 pb-6">
                <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-3">What if I lost my boarding pass?</h3>
                <p className="text-gray-700 dark:text-gray-300">
                  Contact EasyJet to request boarding confirmation from their system. Alternatively, provide passport stamps, hotel receipts, or credit card statements from destination as supporting evidence.
                </p>
              </div>

              <div className="border-b border-gray-200 dark:border-gray-700 pb-6">
                <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-3">Does compensation apply if I had a connecting flight with another airline?</h3>
                <p className="text-gray-700 dark:text-gray-300">
                  Only if both flights were booked as a single ticket. If you booked separately, you're not protected for the missed connection.
                </p>
              </div>

              <div className="pb-6">
                <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-3">Should I use a claims company for EasyJet?</h3>
                <p className="text-gray-700 dark:text-gray-300">
                  EasyJet rejects 48% of initial claims and pressures passengers to accept vouchers. Using ClaimWinger (no-win-no-fee, 91% success rate) removes the hassle and increases your chances significantly.
                </p>
              </div>
            </div>
          </section>

          <section className="mb-12">
            <div className="bg-gradient-to-br from-blue-600 to-indigo-600 text-white rounded-xl p-8 md:p-12">
              <h2 className="text-3xl font-bold mb-4">Get Your EasyJet Compensation Without the Hassle</h2>
              <p className="text-xl mb-6 opacity-90">
                Don't let EasyJet pressure you into accepting vouchers. ClaimWinger fights for your cash compensation with a 91% success rate.
              </p>
              
              <div className="grid md:grid-cols-3 gap-6 mb-8">
                <div className="flex items-start gap-3">
                  <CheckCircle className="h-6 w-6 flex-shrink-0 mt-1" />
                  <div>
                    <h3 className="font-semibold mb-1">91% Success Rate</h3>
                    <p className="text-sm opacity-90">Specialized in low-cost carriers</p>
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
                    <h3 className="font-semibold mb-1">Cash, Not Vouchers</h3>
                    <p className="text-sm opacity-90">We insist on money</p>
                  </div>
                </div>
              </div>

              <Button size="lg" className="bg-white text-blue-600 hover:bg-gray-100">
                <a href="https://claimwinger.com?utm_source=lotproblem&utm_medium=blog&utm_campaign=easyjet-guide-cta" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2">
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