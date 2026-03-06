import { LayoutEn } from "@/components/LayoutEn";
import { SEO } from "@/components/SEO";
import Link from "next/link";
import { Clock, AlertCircle, CheckCircle, ArrowRight, FileText, Mail } from "lucide-react";
import { Button } from "@/components/ui/button";

export default function RyanairCompensationGuide() {
  return (
    <LayoutEn>
      <SEO
        title="Ryanair Compensation Guide 2025: Delays, Cancellations & Claims"
        description="Complete guide to claiming Ryanair compensation. Learn how to handle delays, cancellations, and denied boarding with Europe's largest low-cost carrier."
        url="https://lotproblem.pl/en/blog/ryanair-compensation-guide"
      />

      <article className="max-w-4xl mx-auto px-4 py-12">
        <div className="mb-8">
          <Link href="/en/blog" className="text-blue-600 hover:text-blue-700 dark:text-blue-400 dark:hover:text-blue-300 flex items-center gap-2 mb-4">
            <ArrowRight className="h-4 w-4 rotate-180" />
            Back to Blog
          </Link>
          
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-4">
            Ryanair Compensation Guide 2025: Everything You Need to Know
          </h1>
          
          <div className="flex items-center gap-4 text-gray-600 dark:text-gray-400 mb-6">
            <time dateTime="2025-03-06">March 6, 2025</time>
            <span>•</span>
            <span>15 min read</span>
          </div>

          <p className="text-xl text-gray-700 dark:text-gray-300 leading-relaxed">
            Ryanair is Europe's largest airline by passenger numbers, but it's also known for being challenging when it comes to compensation claims. This comprehensive guide will help you navigate the process and get what you're entitled to.
          </p>
        </div>

        <div className="prose prose-lg dark:prose-invert max-w-none">
          <div className="bg-blue-50 dark:bg-blue-900/20 border-l-4 border-blue-600 p-6 mb-8">
            <div className="flex items-start gap-3">
              <AlertCircle className="h-6 w-6 text-blue-600 flex-shrink-0 mt-1" />
              <div>
                <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">Key Takeaway</h3>
                <p className="text-gray-700 dark:text-gray-300 mb-0">
                  Despite Ryanair's reputation for rejecting claims, you have strong legal rights under EU261. On average, 68% of valid Ryanair claims are initially rejected, but professional services like ClaimWinger have a 98% success rate in overturning these rejections.
                </p>
              </div>
            </div>
          </div>

          <section className="mb-12">
            <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-6">Understanding Ryanair Compensation Rights</h2>
            
            <p className="text-gray-700 dark:text-gray-300 mb-6">
              As an EU-registered airline (Ireland), Ryanair must comply with <strong>EU Regulation 261/2004</strong> for all flights:
            </p>

            <ul className="space-y-3 text-gray-700 dark:text-gray-300 mb-6">
              <li className="flex items-start gap-3">
                <CheckCircle className="h-5 w-5 text-green-600 flex-shrink-0 mt-1" />
                <span>Departing from any EU airport (regardless of destination)</span>
              </li>
              <li className="flex items-start gap-3">
                <CheckCircle className="h-5 w-5 text-green-600 flex-shrink-0 mt-1" />
                <span>Arriving at an EU airport from a non-EU country on an EU airline</span>
              </li>
              <li className="flex items-start gap-3">
                <CheckCircle className="h-5 w-5 text-green-600 flex-shrink-0 mt-1" />
                <span>Operated by Ryanair (not codeshare partners)</span>
              </li>
            </ul>

            <div className="bg-gray-50 dark:bg-gray-800 rounded-lg p-6 mb-6">
              <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-4">Ryanair Compensation Amounts</h3>
              <table className="w-full">
                <thead>
                  <tr className="border-b border-gray-200 dark:border-gray-700">
                    <th className="text-left py-3 text-gray-900 dark:text-white">Flight Distance</th>
                    <th className="text-left py-3 text-gray-900 dark:text-white">Delay/Cancellation</th>
                    <th className="text-left py-3 text-gray-900 dark:text-white">Denied Boarding</th>
                  </tr>
                </thead>
                <tbody className="text-gray-700 dark:text-gray-300">
                  <tr className="border-b border-gray-200 dark:border-gray-700">
                    <td className="py-3">Up to 1,500 km</td>
                    <td className="py-3 font-semibold">€250</td>
                    <td className="py-3 font-semibold">€250</td>
                  </tr>
                  <tr className="border-b border-gray-200 dark:border-gray-700">
                    <td className="py-3">1,500-3,500 km</td>
                    <td className="py-3 font-semibold">€400</td>
                    <td className="py-3 font-semibold">€400</td>
                  </tr>
                  <tr>
                    <td className="py-3">Over 3,500 km</td>
                    <td className="py-3 font-semibold">€600</td>
                    <td className="py-3 font-semibold">€600</td>
                  </tr>
                </tbody>
              </table>
              <p className="text-sm text-gray-600 dark:text-gray-400 mt-4">
                * Compensation amounts may be reduced by 50% for delays under 4 hours on long-haul flights
              </p>
            </div>
          </section>

          <section className="mb-12">
            <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-6">When Does Ryanair Owe You Compensation?</h2>

            <div className="space-y-6">
              <div className="border-l-4 border-green-600 pl-6">
                <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-3">✓ You ARE Entitled to Compensation When:</h3>
                <ul className="space-y-2 text-gray-700 dark:text-gray-300">
                  <li>• Flight delayed by 3+ hours at final destination</li>
                  <li>• Flight cancelled less than 14 days before departure</li>
                  <li>• Denied boarding due to overbooking</li>
                  <li>• Missed connection causing 3+ hour delay (both flights booked together)</li>
                  <li>• Technical issues with the aircraft</li>
                  <li>• Crew shortages or scheduling problems</li>
                  <li>• Strikes by Ryanair staff</li>
                </ul>
              </div>

              <div className="border-l-4 border-red-600 pl-6">
                <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-3">✗ You Are NOT Entitled When:</h3>
                <ul className="space-y-2 text-gray-700 dark:text-gray-300">
                  <li>• Extraordinary circumstances (severe weather, airport strikes, security threats)</li>
                  <li>• You arrived at check-in too late</li>
                  <li>• You were denied boarding for security/health reasons</li>
                  <li>• Flight cancelled 14+ days in advance with alternative offered</li>
                  <li>• Air traffic control strikes (not Ryanair staff)</li>
                </ul>
              </div>
            </div>
          </section>

          <section className="mb-12">
            <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-6">Common Ryanair Rejection Tactics</h2>

            <p className="text-gray-700 dark:text-gray-300 mb-6">
              Ryanair has developed a reputation for making the claims process difficult. Here are their most common rejection strategies:
            </p>

            <div className="space-y-4 mb-6">
              <div className="bg-yellow-50 dark:bg-yellow-900/20 border border-yellow-200 dark:border-yellow-800 rounded-lg p-6">
                <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">1. "Extraordinary Circumstances" Claims</h3>
                <p className="text-gray-700 dark:text-gray-300 mb-3">
                  Ryanair frequently claims technical issues were caused by "extraordinary circumstances" without providing proof.
                </p>
                <p className="text-sm text-gray-600 dark:text-gray-400">
                  <strong>Your Response:</strong> Request detailed documentation under GDPR. Technical issues are only extraordinary if caused by manufacturing defects or sabotage.
                </p>
              </div>

              <div className="bg-yellow-50 dark:bg-yellow-900/20 border border-yellow-200 dark:border-yellow-800 rounded-lg p-6">
                <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">2. Missing Forms and Unclear Procedures</h3>
                <p className="text-gray-700 dark:text-gray-300 mb-3">
                  Their online claim form is difficult to find and often has technical issues during submission.
                </p>
                <p className="text-sm text-gray-600 dark:text-gray-400">
                  <strong>Your Response:</strong> Submit via email with delivery confirmation. Keep screenshots of all correspondence.
                </p>
              </div>

              <div className="bg-yellow-50 dark:bg-yellow-900/20 border border-yellow-200 dark:border-yellow-800 rounded-lg p-6">
                <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">3. Generic Rejection Letters</h3>
                <p className="text-gray-700 dark:text-gray-300 mb-3">
                  Ryanair sends template rejections without addressing your specific case details.
                </p>
                <p className="text-sm text-gray-600 dark:text-gray-400">
                  <strong>Your Response:</strong> Request case-specific information. Challenge generic responses with specific counter-arguments.
                </p>
              </div>

              <div className="bg-yellow-50 dark:bg-yellow-900/20 border border-yellow-200 dark:border-yellow-800 rounded-lg p-6">
                <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">4. Extremely Long Response Times</h3>
                <p className="text-gray-700 dark:text-gray-300 mb-3">
                  Claims can take 6-12 months to process, hoping you'll give up.
                </p>
                <p className="text-sm text-gray-600 dark:text-gray-400">
                  <strong>Your Response:</strong> Set calendar reminders for follow-ups. Consider using a claims service to handle the process.
                </p>
              </div>
            </div>
          </section>

          <section className="mb-12">
            <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-6">How to File a Ryanair Compensation Claim</h2>

            <div className="bg-gradient-to-r from-blue-50 to-indigo-50 dark:from-blue-900/20 dark:to-indigo-900/20 rounded-lg p-8 mb-8">
              <h3 className="text-2xl font-semibold text-gray-900 dark:text-white mb-6">Step-by-Step Process:</h3>
              
              <div className="space-y-6">
                <div className="flex gap-4">
                  <div className="flex-shrink-0 w-8 h-8 bg-blue-600 text-white rounded-full flex items-center justify-center font-bold">1</div>
                  <div>
                    <h4 className="font-semibold text-gray-900 dark:text-white mb-2">Gather Your Documentation</h4>
                    <ul className="text-gray-700 dark:text-gray-300 space-y-1 text-sm">
                      <li>• Booking reference</li>
                      <li>• Flight details (date, route, flight number)</li>
                      <li>• Boarding passes (digital or paper)</li>
                      <li>• Proof of delay/cancellation (emails, SMS, photos of departure boards)</li>
                      <li>• Receipts for additional expenses (food, accommodation)</li>
                    </ul>
                  </div>
                </div>

                <div className="flex gap-4">
                  <div className="flex-shrink-0 w-8 h-8 bg-blue-600 text-white rounded-full flex items-center justify-center font-bold">2</div>
                  <div>
                    <h4 className="font-semibold text-gray-900 dark:text-white mb-2">Submit Your Claim</h4>
                    <p className="text-gray-700 dark:text-gray-300 text-sm mb-2">
                      Email: <strong>customerservice@ryanair.com</strong>
                    </p>
                    <p className="text-gray-700 dark:text-gray-300 text-sm">
                      Or use their online form (if available): <em>Account → My Bookings → Claims</em>
                    </p>
                  </div>
                </div>

                <div className="flex gap-4">
                  <div className="flex-shrink-0 w-8 h-8 bg-blue-600 text-white rounded-full flex items-center justify-center font-bold">3</div>
                  <div>
                    <h4 className="font-semibold text-gray-900 dark:text-white mb-2">Follow Up Regularly</h4>
                    <p className="text-gray-700 dark:text-gray-300 text-sm">
                      Chase every 2-3 weeks if no response. Keep detailed records of all communications.
                    </p>
                  </div>
                </div>

                <div className="flex gap-4">
                  <div className="flex-shrink-0 w-8 h-8 bg-blue-600 text-white rounded-full flex items-center justify-center font-bold">4</div>
                  <div>
                    <h4 className="font-semibold text-gray-900 dark:text-white mb-2">Escalate if Rejected</h4>
                    <p className="text-gray-700 dark:text-gray-300 text-sm">
                      Contact your national aviation authority or consider legal action through small claims court.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-green-50 dark:bg-green-900/20 border-l-4 border-green-600 p-6">
              <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-3">💡 Pro Tip: Use a Claims Service</h3>
              <p className="text-gray-700 dark:text-gray-300 mb-4">
                Given Ryanair's difficult claims process, many passengers choose to use professional services like ClaimWinger. They handle all communication, legal challenges, and have a 98% success rate with Ryanair claims.
              </p>
              <Button asChild className="bg-green-600 hover:bg-green-700">
                <a href="https://claimwinger.com?utm_source=lotproblem&utm_medium=blog&utm_campaign=ryanair-guide" target="_blank" rel="noopener noreferrer">
                  Get Your Compensation <ArrowRight className="ml-2 h-4 w-4" />
                </a>
              </Button>
            </div>
          </section>

          <section className="mb-12">
            <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-6">Real Cases: Ryanair Compensation Successes</h2>

            <div className="space-y-6">
              <div className="bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-lg p-6">
                <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-3">Case 1: Manchester to Málaga - 5 Hour Delay</h3>
                <p className="text-gray-700 dark:text-gray-300 mb-3">
                  Flight delayed due to "technical issue." Ryanair initially claimed extraordinary circumstances. Passenger requested maintenance logs under GDPR, proving it was routine maintenance.
                </p>
                <p className="text-sm text-green-600 dark:text-green-400 font-semibold">
                  Result: €250 compensation awarded after 4 months
                </p>
              </div>

              <div className="bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-lg p-6">
                <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-3">Case 2: Dublin to Warsaw - Cancelled 10 Days Before</h3>
                <p className="text-gray-700 dark:text-gray-300 mb-3">
                  Flight cancelled due to "operational reasons." Alternative offered departed 8 hours later. Passenger rejected initial claim denial and escalated to Irish Aviation Authority.
                </p>
                <p className="text-sm text-green-600 dark:text-green-400 font-semibold">
                  Result: €250 compensation + €180 in meal vouchers after 6 months
                </p>
              </div>

              <div className="bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-lg p-6">
                <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-3">Case 3: London Stansted to Barcelona - Denied Boarding</h3>
                <p className="text-gray-700 dark:text-gray-300 mb-3">
                  Overbooked flight. Passenger initially accepted €200 voucher, later learned about cash compensation rights. Contacted Ryanair within 2 weeks to change to cash.
                </p>
                <p className="text-sm text-green-600 dark:text-green-400 font-semibold">
                  Result: €250 cash compensation (voucher cancelled) after 2 months
                </p>
              </div>
            </div>
          </section>

          <section className="mb-12">
            <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-6">Frequently Asked Questions</h2>
            
            <div className="space-y-6">
              <div className="border-b border-gray-200 dark:border-gray-700 pb-6">
                <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-3">How long does Ryanair take to process claims?</h3>
                <p className="text-gray-700 dark:text-gray-300">
                  Ryanair typically responds within 2-3 months, but complex cases can take 6-12 months. They're legally required to respond within reasonable time, but there's no strict deadline.
                </p>
              </div>

              <div className="border-b border-gray-200 dark:border-gray-700 pb-6">
                <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-3">Can I claim if I booked through a third party?</h3>
                <p className="text-gray-700 dark:text-gray-300">
                  Yes! Your rights under EU261 apply regardless of where you booked. However, you must claim directly from Ryanair, not the booking agent.
                </p>
              </div>

              <div className="border-b border-gray-200 dark:border-gray-700 pb-6">
                <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-3">What if Ryanair offers a voucher instead of cash?</h3>
                <p className="text-gray-700 dark:text-gray-300">
                  You have the legal right to cash compensation under EU261. Vouchers are optional and should only be accepted if they offer MORE value than the cash amount (e.g., €300 voucher vs €250 cash).
                </p>
              </div>

              <div className="border-b border-gray-200 dark:border-gray-700 pb-6">
                <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-3">Can I claim for old flights?</h3>
                <p className="text-gray-700 dark:text-gray-300">
                  Yes, but time limits vary by country. In the UK it's 6 years, Ireland 6 years, most EU countries 3 years. Check your national limitation period.
                </p>
              </div>

              <div className="border-b border-gray-200 dark:border-gray-700 pb-6">
                <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-3">Does travel insurance cover the same compensation?</h3>
                <p className="text-gray-700 dark:text-gray-300">
                  No. EU261 compensation is separate from insurance. You can claim both - insurance for expenses (hotels, meals) AND EU261 for the inconvenience.
                </p>
              </div>

              <div className="border-b border-gray-200 dark:border-gray-700 pb-6">
                <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-3">What if my connecting flight was with another airline?</h3>
                <p className="text-gray-700 dark:text-gray-300">
                  If booked as a single journey, Ryanair is responsible for the entire trip. If booked separately, each airline is only liable for their own flight segment.
                </p>
              </div>

              <div className="border-b border-gray-200 dark:border-gray-700 pb-6">
                <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-3">Can I claim if I accepted rebooking?</h3>
                <p className="text-gray-700 dark:text-gray-300">
                  Yes! Accepting an alternative flight doesn't waive your right to compensation if the original flight was cancelled or delayed.
                </p>
              </div>

              <div className="pb-6">
                <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-3">Is it worth using a claims company for Ryanair?</h3>
                <p className="text-gray-700 dark:text-gray-300">
                  Given Ryanair's 68% initial rejection rate and lengthy process, many passengers find it worthwhile. Claims companies typically charge 25-35% but handle all the hassle and have much higher success rates.
                </p>
              </div>
            </div>
          </section>

          <section className="mb-12">
            <div className="bg-gradient-to-br from-blue-600 to-indigo-600 text-white rounded-xl p-8 md:p-12">
              <h2 className="text-3xl font-bold mb-4">Don't Let Ryanair Delay Your Compensation</h2>
              <p className="text-xl mb-6 opacity-90">
                Stop wasting time with rejected claims and endless emails. ClaimWinger handles everything for you.
              </p>
              
              <div className="grid md:grid-cols-3 gap-6 mb-8">
                <div className="flex items-start gap-3">
                  <CheckCircle className="h-6 w-6 flex-shrink-0 mt-1" />
                  <div>
                    <h3 className="font-semibold mb-1">98% Success Rate</h3>
                    <p className="text-sm opacity-90">Even with difficult airlines</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <CheckCircle className="h-6 w-6 flex-shrink-0 mt-1" />
                  <div>
                    <h3 className="font-semibold mb-1">No Win, No Fee</h3>
                    <p className="text-sm opacity-90">You only pay if successful</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <CheckCircle className="h-6 w-6 flex-shrink-0 mt-1" />
                  <div>
                    <h3 className="font-semibold mb-1">24-48h Processing</h3>
                    <p className="text-sm opacity-90">We start immediately</p>
                  </div>
                </div>
              </div>

              <Button size="lg" className="bg-white text-blue-600 hover:bg-gray-100">
                <a href="https://claimwinger.com?utm_source=lotproblem&utm_medium=blog&utm_campaign=ryanair-guide-cta" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2">
                  Start Your Claim Now <ArrowRight className="h-5 w-5" />
                </a>
              </Button>
            </div>
          </section>

          <section>
            <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-6">Related Articles</h2>
            <div className="grid md:grid-cols-2 gap-6">
              <Link href="/en/blog/lot-polish-airlines-delay-compensation-guide" className="border border-gray-200 dark:border-gray-700 rounded-lg p-6 hover:border-blue-600 dark:hover:border-blue-400 transition-colors">
                <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">LOT Polish Airlines Delay Guide</h3>
                <p className="text-gray-600 dark:text-gray-400 text-sm">Complete compensation guide for LOT delays</p>
              </Link>
              <Link href="/en/blog/lot-polish-airlines-compensation-amounts" className="border border-gray-200 dark:border-gray-700 rounded-lg p-6 hover:border-blue-600 dark:hover:border-blue-400 transition-colors">
                <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">Compensation Amounts Explained</h3>
                <p className="text-gray-600 dark:text-gray-400 text-sm">€250, €400, or €600 - Which applies to you?</p>
              </Link>
            </div>
          </section>
        </div>
      </article>
    </LayoutEn>
  );
}