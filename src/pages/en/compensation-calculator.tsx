import { LayoutEn } from "@/components/LayoutEn";
import { SEO } from "@/components/SEO";
import { ClaimWingerHeroEmbed } from "@/components/ClaimWingerHeroEmbed";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import Link from "next/link";
import {
  Calculator,
  Euro,
  Plane,
  Clock,
  MapPin,
  CheckCircle,
} from "lucide-react";

export default function CompensationCalculatorEn() {
  return (
    <LayoutEn>
      <SEO
        title="Flight Compensation Calculator: Check Your €250-€600 Claim | Free Tool"
        description="Calculate your flight compensation amount instantly. Find out if you can claim €250, €400, or €600 for delayed or cancelled flights under EU261."
        url="https://problemlot.com/en/compensation-calculator"
      />

      {/* Hero Section */}
      <section className="bg-gradient-to-br from-blue-50 to-indigo-100 dark:from-gray-800 dark:to-gray-900 py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <Calculator className="h-16 w-16 text-blue-600 mx-auto mb-6" />
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-6">
              Flight Compensation Calculator
            </h1>
            <p className="text-xl text-gray-700 dark:text-gray-300 mb-8">
              Find out how much compensation you can claim for your delayed or cancelled flight. Calculate your amount in 60 seconds.
            </p>
            <Button
              asChild
              size="lg"
              className="bg-blue-600 hover:bg-blue-700 text-white"
            >
              <a
                href="https://claimwinger.com?utm_source=flightproblem&utm_medium=en_calculator&utm_campaign=hero_cta"
                target="_blank"
                rel="noopener noreferrer"
              >
                Calculate My Compensation →
              </a>
            </Button>
            <ClaimWingerHeroEmbed
              className="mt-8"
              lang="en"
              title="ClaimWinger compensation form"
              loadingLabel="Loading form..."
              loadingDescription="In a moment you will see the ClaimWinger form to calculate and check your claim."
            />
          </div>
        </div>
      </section>

      {/* How Much Can You Get */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-5xl mx-auto">
            <h2 className="text-3xl font-bold text-center text-gray-900 dark:text-white mb-4">
              How Much Compensation Can You Get?
            </h2>
            <p className="text-center text-gray-600 dark:text-gray-400 mb-12">
              Amount depends on your flight distance under EU Regulation 261/2004
            </p>

            <div className="grid md:grid-cols-3 gap-6 mb-12">
              <Card className="p-6 text-center hover:shadow-xl transition-shadow">
                <Euro className="h-12 w-12 text-blue-600 mx-auto mb-4" />
                <div className="text-5xl font-bold text-gray-900 dark:text-white mb-2">
                  €250
                </div>
                <div className="text-sm font-semibold text-gray-900 dark:text-white mb-3">
                  Short Distance Flights
                </div>
                <p className="text-sm text-gray-600 dark:text-gray-400 mb-2">
                  Up to 1,500 km
                </p>
                <div className="text-xs text-gray-500 dark:text-gray-500 space-y-1">
                  <p>✈️ London → Berlin</p>
                  <p>✈️ Paris → Rome</p>
                  <p>✈️ Warsaw → Vienna</p>
                </div>
              </Card>

              <Card className="p-6 text-center border-2 border-blue-600 hover:shadow-xl transition-shadow">
                <Euro className="h-12 w-12 text-blue-600 mx-auto mb-4" />
                <div className="text-5xl font-bold text-gray-900 dark:text-white mb-2">
                  €400
                </div>
                <div className="text-sm font-semibold text-gray-900 dark:text-white mb-3">
                  Medium Distance Flights
                </div>
                <p className="text-sm text-gray-600 dark:text-gray-400 mb-2">
                  1,500 - 3,500 km within EU
                </p>
                <div className="text-xs text-gray-500 dark:text-gray-500 space-y-1">
                  <p>✈️ London → Athens</p>
                  <p>✈️ Berlin → Lisbon</p>
                  <p>✈️ Warsaw → Madrid</p>
                </div>
              </Card>

              <Card className="p-6 text-center hover:shadow-xl transition-shadow">
                <Euro className="h-12 w-12 text-blue-600 mx-auto mb-4" />
                <div className="text-5xl font-bold text-gray-900 dark:text-white mb-2">
                  €600
                </div>
                <div className="text-sm font-semibold text-gray-900 dark:text-white mb-3">
                  Long Distance Flights
                </div>
                <p className="text-sm text-gray-600 dark:text-gray-400 mb-2">
                  Over 3,500 km outside EU
                </p>
                <div className="text-xs text-gray-500 dark:text-gray-500 space-y-1">
                  <p>✈️ London → New York</p>
                  <p>✈️ Paris → Dubai</p>
                  <p>✈️ Warsaw → Bangkok</p>
                </div>
              </Card>
            </div>

            <div className="text-center">
              <Button asChild size="lg">
                <a
                  href="https://claimwinger.com?utm_source=flightproblem&utm_medium=en_calculator&utm_campaign=amounts_cta"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Check My Exact Amount →
                </a>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Distance Calculator Table */}
      <section className="py-16 bg-gray-50 dark:bg-gray-800">
        <div className="container mx-auto px-4">
          <div className="max-w-5xl mx-auto">
            <h2 className="text-3xl font-bold text-center text-gray-900 dark:text-white mb-12">
              Compensation by Flight Distance
            </h2>

            <Card className="overflow-x-auto">
              <table className="w-full">
                <thead className="bg-gray-100 dark:bg-gray-900">
                  <tr>
                    <th className="text-left p-4">Distance</th>
                    <th className="text-left p-4">Example Routes</th>
                    <th className="text-left p-4">Delay 3h+</th>
                    <th className="text-left p-4">Cancelled Flight</th>
                  </tr>
                </thead>
                <tbody>
                  <tr className="border-b dark:border-gray-700">
                    <td className="p-4">
                      <strong>Up to 1,500 km</strong>
                    </td>
                    <td className="p-4 text-sm text-gray-600 dark:text-gray-400">
                      London-Berlin, Paris-Rome, Warsaw-Vienna
                    </td>
                    <td className="p-4 font-bold text-green-600">€250</td>
                    <td className="p-4 font-bold text-green-600">€250</td>
                  </tr>
                  <tr className="border-b dark:border-gray-700">
                    <td className="p-4">
                      <strong>1,500 - 3,500 km</strong>
                      <br />
                      <span className="text-sm text-gray-500">(within EU)</span>
                    </td>
                    <td className="p-4 text-sm text-gray-600 dark:text-gray-400">
                      London-Athens, Berlin-Lisbon, Warsaw-Madrid
                    </td>
                    <td className="p-4 font-bold text-green-600">€400</td>
                    <td className="p-4 font-bold text-green-600">€400</td>
                  </tr>
                  <tr className="border-b dark:border-gray-700">
                    <td className="p-4">
                      <strong>Over 3,500 km</strong>
                      <br />
                      <span className="text-sm text-gray-500">(outside EU)</span>
                    </td>
                    <td className="p-4 text-sm text-gray-600 dark:text-gray-400">
                      London-NYC, Paris-Dubai, Warsaw-Bangkok
                    </td>
                    <td className="p-4 font-bold text-green-600">
                      €300-€600*
                    </td>
                    <td className="p-4 font-bold text-green-600">€600</td>
                  </tr>
                </tbody>
              </table>
            </Card>

            <p className="text-sm text-gray-600 dark:text-gray-400 mt-4 text-center">
              * Long-haul delays: €300 if 3-4h delay, €600 if 4h+ delay
            </p>
          </div>
        </div>
      </section>

      {/* Factors That Affect Amount */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold text-center text-gray-900 dark:text-white mb-12">
              What Affects Your Compensation Amount?
            </h2>

            <div className="space-y-6">
              <Card className="p-6">
                <div className="flex items-start gap-4">
                  <Plane className="h-8 w-8 text-blue-600 flex-shrink-0 mt-1" />
                  <div>
                    <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-2">
                      1. Flight Distance
                    </h3>
                    <p className="text-gray-600 dark:text-gray-400">
                      The primary factor. Measured in kilometers from departure to arrival airport using great circle distance. Not the route actually flown.
                    </p>
                  </div>
                </div>
              </Card>

              <Card className="p-6">
                <div className="flex items-start gap-4">
                  <Clock className="h-8 w-8 text-blue-600 flex-shrink-0 mt-1" />
                  <div>
                    <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-2">
                      2. Length of Delay
                    </h3>
                    <p className="text-gray-600 dark:text-gray-400 mb-2">
                      For long-haul flights (3,500+ km), compensation amount depends on delay length:
                    </p>
                    <ul className="space-y-1 text-gray-600 dark:text-gray-400">
                      <li>• 3-4 hours delay: €300</li>
                      <li>• Over 4 hours delay: €600</li>
                    </ul>
                  </div>
                </div>
              </Card>

              <Card className="p-6">
                <div className="flex items-start gap-4">
                  <MapPin className="h-8 w-8 text-blue-600 flex-shrink-0 mt-1" />
                  <div>
                    <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-2">
                      3. Flight Route (EU Coverage)
                    </h3>
                    <p className="text-gray-600 dark:text-gray-400 mb-2">
                      EU261 applies to:
                    </p>
                    <ul className="space-y-1 text-gray-600 dark:text-gray-400">
                      <li>✓ All flights departing from EU airports (any airline)</li>
                      <li>✓ Flights arriving at EU airports on EU airlines</li>
                      <li>✗ Non-EU airline arriving at EU from outside EU (not covered)</li>
                    </ul>
                  </div>
                </div>
              </Card>

              <Card className="p-6">
                <div className="flex items-start gap-4">
                  <CheckCircle className="h-8 w-8 text-blue-600 flex-shrink-0 mt-1" />
                  <div>
                    <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-2">
                      4. Type of Disruption
                    </h3>
                    <p className="text-gray-600 dark:text-gray-400 mb-2">
                      Same amounts for different disruption types:
                    </p>
                    <ul className="space-y-1 text-gray-600 dark:text-gray-400">
                      <li>• Flight delay 3+ hours: €250-€600</li>
                      <li>• Flight cancellation: €250-€600</li>
                      <li>• Denied boarding: €250-€600</li>
                      <li>• Missed connection (airline's fault): €250-€600</li>
                    </ul>
                  </div>
                </div>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Common Questions */}
      <section className="py-16 bg-gray-50 dark:bg-gray-800">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold text-center text-gray-900 dark:text-white mb-12">
              Common Questions About Compensation Amounts
            </h2>

            <div className="space-y-4">
              <Card className="p-6">
                <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-2">
                  Is compensation based on ticket price?
                </h3>
                <p className="text-gray-600 dark:text-gray-400">
                  No! Compensation is fixed by EU law based on flight distance, not ticket price. You can get €600 compensation even if your ticket cost €50.
                </p>
              </Card>

              <Card className="p-6">
                <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-2">
                  Can I get more than €600?
                </h3>
                <p className="text-gray-600 dark:text-gray-400">
                  €600 is the maximum EU261 compensation. However, you can also claim additional costs (hotels, meals, alternative transport) and refunds separately.
                </p>
              </Card>

              <Card className="p-6">
                <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-2">
                  Do I get compensation per person or per booking?
                </h3>
                <p className="text-gray-600 dark:text-gray-400">
                  Per person! If you traveled with family, each passenger gets their own compensation. A family of 4 can claim up to €2,400 total.
                </p>
              </Card>

              <Card className="p-6">
                <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-2">
                  Does compensation cover return flights?
                </h3>
                <p className="text-gray-600 dark:text-gray-400">
                  Each flight leg is compensated separately. If both outbound and return flights were delayed/cancelled, you can claim for both.
                </p>
              </Card>

              <Card className="p-6">
                <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-2">
                  What if I had a connecting flight?
                </h3>
                <p className="text-gray-600 dark:text-gray-400">
                  Total journey distance determines compensation. London → Warsaw → Tokyo = long-haul compensation (€600), even if delay occurred on short European leg.
                </p>
              </Card>

              <Card className="p-6">
                <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-2">
                  Can airlines reduce the compensation amount?
                </h3>
                <p className="text-gray-600 dark:text-gray-400">
                  Only in limited cases: if airline offered alternative flight and arrival delay was under 2h (short), 3h (medium), or 4h (long) compared to original. Otherwise, full compensation applies.
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
            <Calculator className="h-16 w-16 mx-auto mb-6" />
            <h2 className="text-3xl font-bold mb-4">
              Calculate Your Exact Compensation Now
            </h2>
            <p className="text-lg mb-8 text-blue-100">
              Get your personalized compensation amount in 60 seconds. Free check, no obligations.
            </p>
            <Button
              asChild
              size="lg"
              className="bg-white text-blue-600 hover:bg-gray-100"
            >
              <a
                href="https://claimwinger.com?utm_source=flightproblem&utm_medium=en_calculator&utm_campaign=footer_cta"
                target="_blank"
                rel="noopener noreferrer"
              >
                Start Free Calculation →
              </a>
            </Button>
          </div>
        </div>
      </section>
    </LayoutEn>
  );
}
