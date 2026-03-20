import { LayoutEn } from "@/components/LayoutEn";
import { SEO } from "@/components/SEO";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import Link from "next/link";
import {
  Clock,
  Euro,
  CheckCircle,
  AlertCircle,
  FileText,
  Scale,
} from "lucide-react";

export default function DelayedFlightEn() {
  return (
    <LayoutEn>
      <SEO
        title="Flight Delayed 3+ Hours? Claim Up to €600 Compensation | EU261 Rights"
        description="Your flight is delayed? Check if you're entitled to €250-€600 compensation under EU Regulation 261/2004. Free claim check and expert support."
        url="https://lotproblem.pl/en/delayed-flight"
      />

      {/* Hero Section */}
      <section className="bg-gradient-to-br from-blue-50 to-indigo-100 dark:from-gray-800 dark:to-gray-900 py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="flex items-center gap-3 mb-6">
              <Clock className="h-12 w-12 text-blue-600" />
              <h1 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white">
                Flight Delayed?
              </h1>
            </div>
            <p className="text-xl text-gray-700 dark:text-gray-300 mb-8">
              If your flight is delayed 3+ hours, you may be entitled to up to €600 compensation under EU Regulation 261/2004. Check your rights now.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Button
                asChild
                size="lg"
                className="bg-blue-600 hover:bg-blue-700 text-white"
              >
                <a
                  href="https://claimwinger.com/delayed-flight?utm_source=flightproblem&utm_medium=en_delayed&utm_campaign=hero_cta"
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
              ✓ Free claim check ✓ No win, no fee ✓ Up to 6 years back
            </p>
          </div>
        </div>
      </section>

      {/* When You Can Claim */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold text-center text-gray-900 dark:text-white mb-4">
              When Can You Claim for Flight Delay?
            </h2>
            <p className="text-center text-gray-600 dark:text-gray-400 mb-12">
              Your rights under EU Regulation 261/2004
            </p>

            <div className="grid md:grid-cols-2 gap-8">
              <Card className="p-6">
                <CheckCircle className="h-12 w-12 text-green-600 mb-4" />
                <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-3">
                  You CAN Claim If:
                </h3>
                <ul className="space-y-2 text-gray-600 dark:text-gray-400">
                  <li>✓ Flight delayed 3+ hours at final destination</li>
                  <li>✓ Flight departed from EU airport</li>
                  <li>✓ OR Flight arrived at EU airport on EU airline</li>
                  <li>✓ Delay was NOT due to extraordinary circumstances</li>
                  <li>✓ Flight was within last 6 years (UK: 6 years)</li>
                  <li>✓ You checked in on time</li>
                </ul>
              </Card>

              <Card className="p-6">
                <AlertCircle className="h-12 w-12 text-red-600 mb-4" />
                <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-3">
                  You CANNOT Claim If:
                </h3>
                <ul className="space-y-2 text-gray-600 dark:text-gray-400">
                  <li>✗ Delay was under 3 hours</li>
                  <li>✗ Extraordinary circumstances (severe weather, strikes)</li>
                  <li>✗ Flight was more than 6 years ago</li>
                  <li>✗ You missed check-in deadline</li>
                  <li>✗ You already received compensation</li>
                  <li>✗ Flight was not covered by EU261</li>
                </ul>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Compensation Amounts */}
      <section className="py-16 bg-gray-50 dark:bg-gray-800">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold text-center text-gray-900 dark:text-white mb-4">
              How Much Compensation Can You Get?
            </h2>
            <p className="text-center text-gray-600 dark:text-gray-400 mb-12">
              Amount depends on flight distance
            </p>

            <div className="grid md:grid-cols-3 gap-6">
              <Card className="p-6 text-center">
                <Euro className="h-10 w-10 text-blue-600 mx-auto mb-4" />
                <div className="text-4xl font-bold text-gray-900 dark:text-white mb-2">
                  €250
                </div>
                <p className="text-sm text-gray-600 dark:text-gray-400 mb-2">
                  Short distance
                </p>
                <p className="text-xs text-gray-500 dark:text-gray-500">
                  Flights up to 1,500 km
                </p>
                <p className="text-xs text-gray-500 dark:text-gray-500 mt-2">
                  e.g., London → Berlin
                </p>
              </Card>

              <Card className="p-6 text-center border-2 border-blue-600">
                <Euro className="h-10 w-10 text-blue-600 mx-auto mb-4" />
                <div className="text-4xl font-bold text-gray-900 dark:text-white mb-2">
                  €400
                </div>
                <p className="text-sm text-gray-600 dark:text-gray-400 mb-2">
                  Medium distance
                </p>
                <p className="text-xs text-gray-500 dark:text-gray-500">
                  EU flights 1,500-3,500 km
                </p>
                <p className="text-xs text-gray-500 dark:text-gray-500 mt-2">
                  e.g., London → Athens
                </p>
              </Card>

              <Card className="p-6 text-center">
                <Euro className="h-10 w-10 text-blue-600 mx-auto mb-4" />
                <div className="text-4xl font-bold text-gray-900 dark:text-white mb-2">
                  €600
                </div>
                <p className="text-sm text-gray-600 dark:text-gray-400 mb-2">
                  Long distance
                </p>
                <p className="text-xs text-gray-500 dark:text-gray-500">
                  Non-EU flights 3,500+ km
                </p>
                <p className="text-xs text-gray-500 dark:text-gray-500 mt-2">
                  e.g., London → New York
                </p>
              </Card>
            </div>

            <div className="text-center mt-8">
              <Button asChild size="lg">
                <Link href="/en/compensation-calculator">
                  Calculate Your Compensation
                </Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* What to Do */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold text-center text-gray-900 dark:text-white mb-12">
              What to Do When Your Flight Is Delayed
            </h2>

            <div className="space-y-6">
              <Card className="p-6">
                <div className="flex items-start gap-4">
                  <div className="flex-shrink-0 w-8 h-8 bg-blue-600 text-white rounded-full flex items-center justify-center font-bold">
                    1
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-2">
                      At the Airport: Get Documentation
                    </h3>
                    <ul className="space-y-2 text-gray-600 dark:text-gray-400">
                      <li>• Ask airline staff for written confirmation of delay and reason</li>
                      <li>• Take photos of departure board showing delay</li>
                      <li>• Keep boarding passes and baggage tags</li>
                      <li>• Request meal vouchers if delay is 2+ hours</li>
                      <li>• Get hotel voucher if overnight delay</li>
                    </ul>
                  </div>
                </div>
              </Card>

              <Card className="p-6">
                <div className="flex items-start gap-4">
                  <div className="flex-shrink-0 w-8 h-8 bg-blue-600 text-white rounded-full flex items-center justify-center font-bold">
                    2
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-2">
                      Your Rights During Delay
                    </h3>
                    <ul className="space-y-2 text-gray-600 dark:text-gray-400">
                      <li>• <strong>2+ hours:</strong> Meals and refreshments</li>
                      <li>• <strong>3+ hours:</strong> €250-€600 compensation (if not extraordinary circumstances)</li>
                      <li>• <strong>5+ hours:</strong> Right to full refund and return flight</li>
                      <li>• <strong>Overnight:</strong> Hotel accommodation and transport</li>
                      <li>• <strong>Always:</strong> 2 free phone calls or emails</li>
                    </ul>
                  </div>
                </div>
              </Card>

              <Card className="p-6">
                <div className="flex items-start gap-4">
                  <div className="flex-shrink-0 w-8 h-8 bg-blue-600 text-white rounded-full flex items-center justify-center font-bold">
                    3
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-2">
                      After Landing: File Your Claim
                    </h3>
                    <ul className="space-y-2 text-gray-600 dark:text-gray-400">
                      <li>• File claim within 6 years (don't wait!)</li>
                      <li>• Submit to airline first (they often reject)</li>
                      <li>• Use expert service if rejected or delayed</li>
                      <li>• Keep all documentation safe</li>
                      <li>• Track your claim status</li>
                    </ul>
                    <div className="mt-4">
                      <Button asChild className="bg-blue-600 hover:bg-blue-700">
                        <a
                          href="https://claimwinger.com/delayed-flight?utm_source=flightproblem&utm_medium=en_delayed&utm_campaign=steps_cta"
                          target="_blank"
                          rel="noopener noreferrer"
                        >
                          File My Claim Now →
                        </a>
                      </Button>
                    </div>
                  </div>
                </div>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Common Airlines */}
      <section className="py-16 bg-gray-50 dark:bg-gray-800">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold text-center text-gray-900 dark:text-white mb-12">
              Claim from Any Airline
            </h2>

            <div className="grid md:grid-cols-3 gap-4">
              {[
                "Ryanair",
                "EasyJet",
                "British Airways",
                "Lufthansa",
                "LOT Polish Airlines",
                "Wizz Air",
                "Air France",
                "KLM",
                "Turkish Airlines",
              ].map((airline) => (
                <Card key={airline} className="p-4 text-center hover:shadow-lg transition-shadow">
                  <p className="font-semibold text-gray-900 dark:text-white">
                    {airline}
                  </p>
                </Card>
              ))}
            </div>

            <p className="text-center text-gray-600 dark:text-gray-400 mt-8">
              And many more airlines covered by EU261 regulation
            </p>
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
                  How long must a flight be delayed to get compensation?
                </h3>
                <p className="text-gray-600 dark:text-gray-400">
                  Your flight must arrive at the final destination at least 3 hours later than originally scheduled. The delay is measured at arrival, not departure time.
                </p>
              </Card>

              <Card className="p-6">
                <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-2">
                  Can I claim for a 2-hour delay?
                </h3>
                <p className="text-gray-600 dark:text-gray-400">
                  No cash compensation for 2-hour delays, but you are entitled to meals, refreshments, and 2 free communication methods (phone/email). Compensation starts at 3 hours.
                </p>
              </Card>

              <Card className="p-6">
                <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-2">
                  What are "extraordinary circumstances"?
                </h3>
                <p className="text-gray-600 dark:text-gray-400">
                  Events beyond airline's control: severe weather, political instability, security risks, air traffic control strikes. However, technical faults, crew shortages, and airline strikes are NOT extraordinary circumstances.
                </p>
              </Card>

              <Card className="p-6">
                <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-2">
                  How far back can I claim?
                </h3>
                <p className="text-gray-600 dark:text-gray-400">
                  You can claim for flights up to 6 years old in most EU countries (including UK). Don't wait – file your claim as soon as possible for faster processing.
                </p>
              </Card>

              <Card className="p-6">
                <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-2">
                  Do I need to pay upfront for claim services?
                </h3>
                <p className="text-gray-600 dark:text-gray-400">
                  No! Reputable services like ClaimWinger work on a "no win, no fee" basis. You only pay if your claim is successful. Free claim check is always available.
                </p>
              </Card>

              <Card className="p-6">
                <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-2">
                  Can I claim if I booked through a travel agent?
                </h3>
                <p className="text-gray-600 dark:text-gray-400">
                  Yes! Your booking method doesn't affect your rights. Whether you booked directly, through an agent, or online platform, you can still claim compensation from the airline.
                </p>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-gradient-to-r from-blue-600 to-indigo-600">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center text-white">
            <Scale className="h-16 w-16 mx-auto mb-6" />
            <h2 className="text-3xl font-bold mb-4">
              Ready to Claim Your Compensation?
            </h2>
            <p className="text-lg mb-8 text-blue-100">
              Join thousands of passengers who have successfully claimed up to €600. Free check, expert support, no win no fee.
            </p>
            <Button
              asChild
              size="lg"
              className="bg-white text-blue-600 hover:bg-gray-100"
            >
              <a
                href="https://claimwinger.com/delayed-flight?utm_source=flightproblem&utm_medium=en_delayed&utm_campaign=footer_cta"
                target="_blank"
                rel="noopener noreferrer"
              >
                Check My Flight Now →
              </a>
            </Button>
          </div>
        </div>
      </section>
    </LayoutEn>
  );
}
