import { LayoutEn } from "@/components/LayoutEn";
import { SEO } from "@/components/SEO";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import Link from "next/link";
import {
  XCircle,
  Euro,
  CheckCircle,
  AlertCircle,
  Calendar,
  Scale,
} from "lucide-react";

export default function CancelledFlightEn() {
  return (
    <LayoutEn>
      <SEO
        title="Flight Cancelled? Claim Up to €600 Compensation + Full Refund | EU261"
        description="Your flight was cancelled? Get up to €600 compensation PLUS full ticket refund under EU261. Check your rights and file a claim in 2 minutes."
        url="https://lotproblem.pl/en/cancelled-flight"
      />

      {/* Hero Section */}
      <section className="bg-gradient-to-br from-red-50 to-orange-100 dark:from-gray-800 dark:to-gray-900 py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="flex items-center gap-3 mb-6">
              <XCircle className="h-12 w-12 text-red-600" />
              <h1 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white">
                Flight Cancelled?
              </h1>
            </div>
            <p className="text-xl text-gray-700 dark:text-gray-300 mb-8">
              If your flight was cancelled less than 14 days before departure, you're entitled to up to €600 compensation PLUS full ticket refund under EU Regulation 261/2004.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Button
                asChild
                size="lg"
                className="bg-red-600 hover:bg-red-700 text-white"
              >
                <a
                  href="https://claimwinger.com/cancelled-flight?utm_source=flightproblem&utm_medium=en_cancelled&utm_campaign=hero_cta"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Check My Compensation
                </a>
              </Button>
              <Button asChild size="lg" variant="outline">
                <Link href="/en/compensation-calculator">
                  Calculate Amount
                </Link>
              </Button>
            </div>
            <p className="text-sm text-gray-600 dark:text-gray-400 mt-4">
              ✓ Free claim check ✓ No win, no fee ✓ Compensation + Refund
            </p>
          </div>
        </div>
      </section>

      {/* Key Differences */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold text-center text-gray-900 dark:text-white mb-4">
              Cancelled Flight: What You Can Claim
            </h2>
            <p className="text-center text-gray-600 dark:text-gray-400 mb-12">
              You get BOTH compensation AND refund
            </p>

            <div className="grid md:grid-cols-2 gap-8">
              <Card className="p-6 border-2 border-green-500">
                <Euro className="h-12 w-12 text-green-600 mb-4" />
                <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-3">
                  Cash Compensation
                </h3>
                <p className="text-gray-600 dark:text-gray-400 mb-4">
                  €250 - €600 depending on flight distance
                </p>
                <ul className="space-y-2 text-gray-600 dark:text-gray-400">
                  <li>✓ Up to 1,500 km: €250</li>
                  <li>✓ 1,500-3,500 km: €400</li>
                  <li>✓ 3,500+ km: €600</li>
                </ul>
              </Card>

              <Card className="p-6 border-2 border-blue-500">
                <Calendar className="h-12 w-12 text-blue-600 mb-4" />
                <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-3">
                  Full Ticket Refund
                </h3>
                <p className="text-gray-600 dark:text-gray-400 mb-4">
                  100% of ticket price returned
                </p>
                <ul className="space-y-2 text-gray-600 dark:text-gray-400">
                  <li>✓ Original ticket cost</li>
                  <li>✓ All taxes and fees</li>
                  <li>✓ Return flight if needed</li>
                </ul>
              </Card>
            </div>

            <Card className="mt-8 p-6 bg-blue-50 dark:bg-blue-900/20">
              <p className="text-center text-lg font-semibold text-gray-900 dark:text-white">
                ⚡ Important: You can claim BOTH compensation AND refund simultaneously!
              </p>
            </Card>
          </div>
        </div>
      </section>

      {/* When You Can Claim */}
      <section className="py-16 bg-gray-50 dark:bg-gray-800">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold text-center text-gray-900 dark:text-white mb-12">
              When Can You Claim for Cancelled Flight?
            </h2>

            <div className="space-y-6">
              <Card className="p-6">
                <div className="flex items-start gap-4">
                  <CheckCircle className="h-8 w-8 text-green-600 flex-shrink-0 mt-1" />
                  <div>
                    <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-2">
                      Cancelled Less Than 14 Days Before Departure
                    </h3>
                    <p className="text-gray-600 dark:text-gray-400 mb-2">
                      Maximum compensation if airline cancelled your flight with short notice.
                    </p>
                    <ul className="space-y-1 text-gray-600 dark:text-gray-400">
                      <li>• 7-14 days before: €250-€600 (depends on alternative flight)</li>
                      <li>• Less than 7 days: €250-€600 (full compensation)</li>
                    </ul>
                  </div>
                </div>
              </Card>

              <Card className="p-6">
                <div className="flex items-start gap-4">
                  <CheckCircle className="h-8 w-8 text-green-600 flex-shrink-0 mt-1" />
                  <div>
                    <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-2">
                      Flight Departed from EU or EU Airline to EU
                    </h3>
                    <p className="text-gray-600 dark:text-gray-400">
                      Your flight must be covered by EU261 regulation: departing from EU airport OR arriving at EU airport on EU airline.
                    </p>
                  </div>
                </div>
              </Card>

              <Card className="p-6">
                <div className="flex items-start gap-4">
                  <AlertCircle className="h-8 w-8 text-orange-600 flex-shrink-0 mt-1" />
                  <div>
                    <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-2">
                      NOT Due to Extraordinary Circumstances
                    </h3>
                    <p className="text-gray-600 dark:text-gray-400 mb-2">
                      Airline cannot claim extraordinary circumstances if cancellation was due to:
                    </p>
                    <ul className="space-y-1 text-gray-600 dark:text-gray-400">
                      <li>• Technical faults (even if severe)</li>
                      <li>• Crew shortages or illness</li>
                      <li>• Airline staff strikes</li>
                      <li>• Maintenance issues</li>
                      <li>• Operational problems</li>
                    </ul>
                  </div>
                </div>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Timeline */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold text-center text-gray-900 dark:text-white mb-12">
              Compensation Based on Cancellation Notice
            </h2>

            <div className="space-y-4">
              <Card className="p-6 border-l-4 border-red-600">
                <div className="flex justify-between items-center">
                  <div>
                    <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-2">
                      Less than 7 days before departure
                    </h3>
                    <p className="text-gray-600 dark:text-gray-400">
                      Full compensation €250-€600 + refund
                    </p>
                  </div>
                  <div className="text-3xl font-bold text-red-600">
                    100%
                  </div>
                </div>
              </Card>

              <Card className="p-6 border-l-4 border-orange-600">
                <div className="flex justify-between items-center">
                  <div>
                    <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-2">
                      7-14 days before departure
                    </h3>
                    <p className="text-gray-600 dark:text-gray-400">
                      Compensation if alternative flight not suitable + refund
                    </p>
                  </div>
                  <div className="text-3xl font-bold text-orange-600">
                    50-100%
                  </div>
                </div>
              </Card>

              <Card className="p-6 border-l-4 border-yellow-600">
                <div className="flex justify-between items-center">
                  <div>
                    <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-2">
                      More than 14 days before departure
                    </h3>
                    <p className="text-gray-600 dark:text-gray-400">
                      No compensation, but full refund available
                    </p>
                  </div>
                  <div className="text-3xl font-bold text-yellow-600">
                    Refund
                  </div>
                </div>
              </Card>
            </div>

            <div className="mt-8 text-center">
              <Button asChild size="lg" className="bg-red-600 hover:bg-red-700">
                <a
                  href="https://claimwinger.com/cancelled-flight?utm_source=flightproblem&utm_medium=en_cancelled&utm_campaign=timeline_cta"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Check My Cancellation →
                </a>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* What to Do */}
      <section className="py-16 bg-gray-50 dark:bg-gray-800">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold text-center text-gray-900 dark:text-white mb-12">
              What to Do When Flight Is Cancelled
            </h2>

            <div className="space-y-6">
              <Card className="p-6">
                <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-4">
                  1. Immediately at the Airport or Upon Notification
                </h3>
                <ul className="space-y-2 text-gray-600 dark:text-gray-400">
                  <li>• Get written confirmation of cancellation from airline</li>
                  <li>• Ask for official reason for cancellation</li>
                  <li>• Request alternative flight options</li>
                  <li>• Save all communication (emails, SMS notifications)</li>
                  <li>• Take photos of airport screens showing cancellation</li>
                </ul>
              </Card>

              <Card className="p-6">
                <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-4">
                  2. Know Your Options
                </h3>
                <div className="space-y-4">
                  <div>
                    <p className="font-semibold text-gray-900 dark:text-white mb-2">
                      Option A: Alternative Flight (Rerouting)
                    </p>
                    <ul className="space-y-1 text-gray-600 dark:text-gray-400">
                      <li>• Earliest available flight to your destination</li>
                      <li>• At airline's expense (including other airlines)</li>
                      <li>• In comparable travel class</li>
                      <li>• You can still claim compensation if cancelled &lt;14 days</li>
                    </ul>
                  </div>
                  <div>
                    <p className="font-semibold text-gray-900 dark:text-white mb-2">
                      Option B: Full Refund
                    </p>
                    <ul className="space-y-1 text-gray-600 dark:text-gray-400">
                      <li>• 100% ticket refund within 7 days</li>
                      <li>• All taxes and fees included</li>
                      <li>• Return flight if needed</li>
                      <li>• Plus compensation if cancelled &lt;14 days</li>
                    </ul>
                  </div>
                </div>
              </Card>

              <Card className="p-6">
                <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-4">
                  3. Additional Rights During Cancellation
                </h3>
                <ul className="space-y-2 text-gray-600 dark:text-gray-400">
                  <li>• <strong>Immediate:</strong> Meals and refreshments</li>
                  <li>• <strong>2 free communications:</strong> Phone calls or emails</li>
                  <li>• <strong>If overnight:</strong> Hotel accommodation + transport</li>
                  <li>• <strong>If waiting for alternative flight:</strong> Care and assistance</li>
                </ul>
              </Card>

              <Card className="p-6">
                <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-4">
                  4. File Your Claim (Within 6 Years)
                </h3>
                <ul className="space-y-2 text-gray-600 dark:text-gray-400">
                  <li>• Gather all documentation (booking confirmation, boarding passes, cancellation notice)</li>
                  <li>• Submit claim to airline (they often reject or delay)</li>
                  <li>• Use expert claim service for faster resolution</li>
                  <li>• Track your claim and follow up regularly</li>
                </ul>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold text-center text-gray-900 dark:text-white mb-12">
              Frequently Asked Questions
            </h2>

            <div className="space-y-4">
              <Card className="p-6">
                <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-2">
                  Can I get both compensation and refund?
                </h3>
                <p className="text-gray-600 dark:text-gray-400">
                  Yes! If your flight was cancelled less than 14 days before departure, you're entitled to BOTH €250-€600 compensation AND full ticket refund. These are separate entitlements under EU261.
                </p>
              </Card>

              <Card className="p-6">
                <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-2">
                  What if airline offers voucher instead of refund?
                </h3>
                <p className="text-gray-600 dark:text-gray-400">
                  You have the legal right to choose cash refund. Airlines often offer vouchers first, but you can refuse and demand cash. Vouchers should only be accepted if you want to use them – never feel pressured.
                </p>
              </Card>

              <Card className="p-6">
                <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-2">
                  How long does airline have to refund my ticket?
                </h3>
                <p className="text-gray-600 dark:text-gray-400">
                  Airlines must process refunds within 7 days under EU261. If they delay beyond this, you can escalate to national aviation authority or use claim services to speed up the process.
                </p>
              </Card>

              <Card className="p-6">
                <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-2">
                  What are valid extraordinary circumstances?
                </h3>
                <p className="text-gray-600 dark:text-gray-400">
                  Only events completely beyond airline's control: severe weather making flight impossible, political instability, security threats, air traffic control strikes. Technical issues, crew problems, and airline strikes are NOT extraordinary circumstances.
                </p>
              </Card>

              <Card className="p-6">
                <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-2">
                  Can I claim if I booked a package holiday?
                </h3>
                <p className="text-gray-600 dark:text-gray-400">
                  Yes! Your flight rights under EU261 remain the same regardless of how you booked. You can claim compensation from the airline and also seek refund/compensation from tour operator under Package Travel Regulations.
                </p>
              </Card>

              <Card className="p-6">
                <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-2">
                  What if airline rebooked me on another flight?
                </h3>
                <p className="text-gray-600 dark:text-gray-400">
                  If you were rebooked and the alternative flight arrived significantly later than original (2+ hours for short flights, 3-4+ hours for long flights), you can still claim compensation even if you accepted the rebooking.
                </p>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-gradient-to-r from-red-600 to-orange-600">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center text-white">
            <Scale className="h-16 w-16 mx-auto mb-6" />
            <h2 className="text-3xl font-bold mb-4">
              Get Your Compensation + Refund Now
            </h2>
            <p className="text-lg mb-8 text-red-100">
              Don't let airlines delay your money. File your claim today and get what you're legally entitled to.
            </p>
            <Button
              asChild
              size="lg"
              className="bg-white text-red-600 hover:bg-gray-100"
            >
              <a
                href="https://claimwinger.com/cancelled-flight?utm_source=flightproblem&utm_medium=en_cancelled&utm_campaign=footer_cta"
                target="_blank"
                rel="noopener noreferrer"
              >
                File My Claim Now →
              </a>
            </Button>
          </div>
        </div>
      </section>
    </LayoutEn>
  );
}