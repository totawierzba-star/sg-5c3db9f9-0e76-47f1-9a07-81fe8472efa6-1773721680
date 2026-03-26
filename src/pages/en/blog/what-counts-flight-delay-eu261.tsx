import { LayoutEn } from "@/components/LayoutEn";
import { SEO } from "@/components/SEO";
import Link from "next/link";
import { ArrowRight, CheckCircle, XCircle, AlertCircle, Clock } from "lucide-react";
import { Button } from "@/components/ui/button";

const SLUG = "what-counts-flight-delay-eu261";

function trackCTA(label: string, position: string) {
  if (typeof window !== "undefined" && window.dataLayer) {
    window.dataLayer.push({
      event: "outbound_cta_click",
      cta_text: label,
      destination: "claimwinger.com",
      position,
      page_slug: SLUG,
    });
  }
}

export default function WhatCountsFlightDelayEU261() {
  const structuredData = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "Article",
        headline: "What Counts as a Flight Delay Under EU261?",
        description:
          "EU261 compensation triggers when you arrive at your destination 3+ hours late. Learn exactly how delay is measured, what the clock starts from, and which scenarios qualify.",
        url: "https://problemlot.com/en/blog/what-counts-flight-delay-eu261",
        datePublished: "2026-03-26",
        dateModified: "2026-03-26",
        author: {
          "@type": "Organization",
          name: "problemlot.com",
          url: "https://problemlot.com",
        },
        publisher: {
          "@type": "Organization",
          name: "problemlot.com",
          url: "https://problemlot.com",
        },
        mainEntityOfPage: {
          "@type": "WebPage",
          "@id": "https://problemlot.com/en/blog/what-counts-flight-delay-eu261",
        },
      },
      {
        "@type": "FAQPage",
        mainEntity: [
          {
            "@type": "Question",
            name: "What counts as a delay under EU261?",
            acceptedAnswer: {
              "@type": "Answer",
              text: "Under EU Regulation 261/2004, a qualifying delay is measured by your actual arrival time at the destination — specifically, when the aircraft doors open. If you arrive 3 hours or more after the scheduled arrival time, you are entitled to compensation.",
            },
          },
          {
            "@type": "Question",
            name: "Is a 2-hour delay covered by EU261?",
            acceptedAnswer: {
              "@type": "Answer",
              text: "Not for compensation. A 2-hour delay does entitle you to care rights (meals, refreshments, communication) if the delay occurs at the departure airport. However, the €250–€600 compensation only kicks in at 3+ hours arrival delay.",
            },
          },
          {
            "@type": "Question",
            name: "Does the departure delay or arrival delay matter?",
            acceptedAnswer: {
              "@type": "Answer",
              text: "Arrival delay is what counts for EU261 compensation. The European Court of Justice confirmed this in the Sturgeon v Condor case (2009). Your flight could depart 5 hours late, but if it arrives less than 3 hours late, you get no compensation.",
            },
          },
          {
            "@type": "Question",
            name: "Does EU261 apply to delays on connecting flights?",
            acceptedAnswer: {
              "@type": "Answer",
              text: "Yes — what matters is your arrival at the final destination. If a delay on your first leg causes you to miss a connection and you arrive at your final destination 3+ hours late, compensation is calculated based on that total delay and the distance of the entire journey.",
            },
          },
          {
            "@type": "Question",
            name: "Can an airline avoid paying if the delay was due to weather?",
            acceptedAnswer: {
              "@type": "Answer",
              text: "Extraordinary circumstances — including genuine severe weather — can exempt the airline from paying compensation. However, the airline must prove the circumstances were unavoidable even with all reasonable measures. Minor weather disruptions or weather at an earlier airport in a rotation chain rarely qualify.",
            },
          },
        ],
      },
      {
        "@type": "BreadcrumbList",
        itemListElement: [
          {
            "@type": "ListItem",
            position: 1,
            name: "Home",
            item: "https://problemlot.com/en",
          },
          {
            "@type": "ListItem",
            position: 2,
            name: "Blog",
            item: "https://problemlot.com/en/blog",
          },
          {
            "@type": "ListItem",
            position: 3,
            name: "What Counts as a Flight Delay Under EU261?",
            item: "https://problemlot.com/en/blog/what-counts-flight-delay-eu261",
          },
        ],
      },
    ],
  };

  return (
    <LayoutEn>
      <SEO
        title="What Counts as a Flight Delay Under EU261? | ProblemLot.com"
        description="EU261 compensation triggers at 3+ hours arrival delay — not departure delay. Learn exactly how the delay clock works, what scenarios qualify, and how to claim."
        canonicalUrl={`https://problemlot.com/en/blog/${SLUG}`}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
      />

      {/* Breadcrumb */}
      <nav className="bg-gray-50 dark:bg-gray-800 border-b border-gray-200 dark:border-gray-700 py-3">
        <div className="container mx-auto px-4">
          <div className="flex items-center gap-2 text-sm text-gray-600 dark:text-gray-400">
            <Link href="/en" className="hover:text-blue-600 dark:hover:text-blue-400">Home</Link>
            <span>/</span>
            <Link href="/en/blog" className="hover:text-blue-600 dark:hover:text-blue-400">Blog</Link>
            <span>/</span>
            <span className="text-gray-900 dark:text-white">What Counts as a Flight Delay?</span>
          </div>
        </div>
      </nav>

      {/* Hero */}
      <section className="bg-gradient-to-br from-blue-50 to-indigo-100 dark:from-gray-800 dark:to-gray-900 py-14">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <div className="inline-flex items-center gap-2 bg-blue-100 dark:bg-blue-900/40 text-blue-700 dark:text-blue-300 px-4 py-1.5 rounded-full text-sm font-medium mb-6">
              <Clock className="h-4 w-4" />
              EU Regulation 261/2004
            </div>
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-6">
              What Counts as a Flight Delay Under EU261?
            </h1>
            <p className="text-xl text-gray-700 dark:text-gray-300 mb-8">
              EU261 compensation is triggered by <strong>arrival delay</strong> — not departure delay. The threshold is exactly 3 hours. Here is precisely how it is measured, what scenarios qualify, and where the grey areas are.
            </p>
            <Button
              asChild
              size="lg"
              className="bg-blue-600 hover:bg-blue-700 text-white"
              onClick={() => trackCTA("Check if my delay qualifies", "hero")}
            >
              <a
                href={`https://claimwinger.com/delayed-flight?utm_source=problemlot.com&utm_medium=article&utm_campaign=${SLUG}&utm_content=cta_hero`}
                target="_blank"
                rel="noopener noreferrer"
              >
                Check if My Delay Qualifies <ArrowRight className="ml-2 h-5 w-5" />
              </a>
            </Button>
          </div>
        </div>
      </section>

      {/* Main article */}
      <article className="py-12">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto">

            {/* The fundamental rule */}
            <section className="mb-10">
              <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">
                The Core Rule: Arrival Delay of 3 Hours or More
              </h2>
              <p className="text-gray-700 dark:text-gray-300 mb-4">
                EU Regulation 261/2004 does not define a "delay" by when your plane leaves — it cares about when you <strong>arrive</strong>. The European Court of Justice settled this in the landmark <em>Sturgeon v Condor</em> judgment (2009): passengers whose flight arrives at least 3 hours late at the final destination are entitled to the same fixed compensation as cancelled flights.
              </p>
              <p className="text-gray-700 dark:text-gray-300 mb-4">
                "Arrival" means the moment the aircraft doors are opened and passengers are free to disembark. This is not the time the wheels touch the runway (touchdown), but when you can actually leave the plane. In practice, this is typically 5–15 minutes after touchdown.
              </p>
              <div className="bg-blue-50 dark:bg-blue-900/30 border border-blue-200 dark:border-blue-800 rounded-xl p-6 mb-4">
                <p className="font-semibold text-blue-900 dark:text-blue-100">
                  Simple rule: if the doors open 3 hours or more after your scheduled arrival time — you have a claim.
                </p>
              </div>
              <p className="text-gray-700 dark:text-gray-300">
                The departure time is irrelevant. A plane can push back 6 hours late, make up time in the air, and land less than 3 hours after schedule — no compensation is owed. Conversely, a plane that departs on time but gets stuck on the tarmac at arrival for 3+ hours is a qualifying delay.
              </p>
            </section>

            {/* Compensation amounts */}
            <section className="mb-10">
              <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">
                Compensation Amounts by Distance
              </h2>
              <p className="text-gray-700 dark:text-gray-300 mb-6">
                Once the 3-hour arrival threshold is met, compensation is fixed by flight distance — not ticket price, not delay length (beyond the 3-hour minimum).
              </p>
              <div className="overflow-x-auto mb-4">
                <table className="w-full border-collapse rounded-xl overflow-hidden text-sm">
                  <thead>
                    <tr className="bg-blue-600 text-white">
                      <th className="px-4 py-3 text-left">Flight Distance</th>
                      <th className="px-4 py-3 text-center">Compensation</th>
                      <th className="px-4 py-3 text-left">Typical Routes</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr className="bg-white dark:bg-gray-800 border-b border-gray-200 dark:border-gray-700">
                      <td className="px-4 py-3 font-medium">Up to 1,500 km</td>
                      <td className="px-4 py-3 text-center font-bold text-green-600">€250</td>
                      <td className="px-4 py-3 text-gray-600 dark:text-gray-400">Warsaw–London, Paris–Madrid</td>
                    </tr>
                    <tr className="bg-gray-50 dark:bg-gray-700 border-b border-gray-200 dark:border-gray-700">
                      <td className="px-4 py-3 font-medium">1,500–3,500 km</td>
                      <td className="px-4 py-3 text-center font-bold text-blue-600">€400</td>
                      <td className="px-4 py-3 text-gray-600 dark:text-gray-400">Warsaw–Tel Aviv, London–Cairo</td>
                    </tr>
                    <tr className="bg-white dark:bg-gray-800">
                      <td className="px-4 py-3 font-medium">Over 3,500 km</td>
                      <td className="px-4 py-3 text-center font-bold text-purple-600">€600</td>
                      <td className="px-4 py-3 text-gray-600 dark:text-gray-400">Warsaw–New York, London–Bangkok</td>
                    </tr>
                  </tbody>
                </table>
              </div>
              <p className="text-sm text-gray-500 dark:text-gray-400">
                Note: For intra-EU flights over 1,500 km where the airline re-routes you and you arrive within 3 hours of the original schedule, the €400 can be reduced by 50% to €200.
              </p>
            </section>

            {/* What flight scenarios qualify */}
            <section className="mb-10">
              <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">
                Which Delay Scenarios Qualify — and Which Don't
              </h2>
              <div className="space-y-3 mb-6">
                <div className="flex items-start gap-3 p-4 bg-green-50 dark:bg-green-900/20 rounded-lg border border-green-200 dark:border-green-800">
                  <CheckCircle className="h-5 w-5 text-green-600 mt-0.5 flex-shrink-0" />
                  <div>
                    <p className="font-semibold text-green-900 dark:text-green-100">Delayed departure + delayed arrival (3h+)</p>
                    <p className="text-sm text-green-800 dark:text-green-200">The most common scenario — flight takes off late and also lands late. Qualifies if arrival is 3+ hours delayed.</p>
                  </div>
                </div>
                <div className="flex items-start gap-3 p-4 bg-green-50 dark:bg-green-900/20 rounded-lg border border-green-200 dark:border-green-800">
                  <CheckCircle className="h-5 w-5 text-green-600 mt-0.5 flex-shrink-0" />
                  <div>
                    <p className="font-semibold text-green-900 dark:text-green-100">On-time departure but late arrival</p>
                    <p className="text-sm text-green-800 dark:text-green-200">Holding patterns, congestion at destination, slow disembarkation — if doors open 3h+ late, compensation is owed.</p>
                  </div>
                </div>
                <div className="flex items-start gap-3 p-4 bg-green-50 dark:bg-green-900/20 rounded-lg border border-green-200 dark:border-green-800">
                  <CheckCircle className="h-5 w-5 text-green-600 mt-0.5 flex-shrink-0" />
                  <div>
                    <p className="font-semibold text-green-900 dark:text-green-100">Missed connection causing 3h+ delay at final destination</p>
                    <p className="text-sm text-green-800 dark:text-green-200">When a delay on leg 1 causes you to miss a booked connection, what matters is your arrival at the final destination. Compensation is based on the total journey distance.</p>
                  </div>
                </div>
                <div className="flex items-start gap-3 p-4 bg-green-50 dark:bg-green-900/20 rounded-lg border border-green-200 dark:border-green-800">
                  <CheckCircle className="h-5 w-5 text-green-600 mt-0.5 flex-shrink-0" />
                  <div>
                    <p className="font-semibold text-green-900 dark:text-green-100">Cancelled flight rebooked to a flight arriving 3h+ late</p>
                    <p className="text-sm text-green-800 dark:text-green-200">If your cancelled flight is replaced by a rerouting that gets you to your destination 3+ hours after the original scheduled arrival, EU261 compensation applies.</p>
                  </div>
                </div>
                <div className="flex items-start gap-3 p-4 bg-red-50 dark:bg-red-900/20 rounded-lg border border-red-200 dark:border-red-800">
                  <XCircle className="h-5 w-5 text-red-600 mt-0.5 flex-shrink-0" />
                  <div>
                    <p className="font-semibold text-red-900 dark:text-red-100">Departure delayed, arrival less than 3 hours late</p>
                    <p className="text-sm text-red-800 dark:text-red-200">No compensation. But you are entitled to care rights (meals, etc.) if the departure delay is 2h+.</p>
                  </div>
                </div>
                <div className="flex items-start gap-3 p-4 bg-red-50 dark:bg-red-900/20 rounded-lg border border-red-200 dark:border-red-800">
                  <XCircle className="h-5 w-5 text-red-600 mt-0.5 flex-shrink-0" />
                  <div>
                    <p className="font-semibold text-red-900 dark:text-red-100">Delay caused by extraordinary circumstances</p>
                    <p className="text-sm text-red-800 dark:text-red-200">No compensation if the airline proves the delay was caused by unavoidable extraordinary circumstances (e.g. severe weather, security threats, ATC strikes). However, care rights still apply.</p>
                  </div>
                </div>
              </div>
            </section>

            {/* When does the clock start */}
            <section className="mb-10">
              <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">
                How Delay Is Measured: The Clock Rules
              </h2>
              <p className="text-gray-700 dark:text-gray-300 mb-4">
                The delay is calculated by comparing your <strong>scheduled arrival time</strong> (as printed on your booking confirmation) against the <strong>actual arrival time</strong> (doors open at destination).
              </p>

              <div className="grid md:grid-cols-2 gap-4 mb-6">
                <div className="bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-xl p-5">
                  <h3 className="font-bold text-gray-900 dark:text-white mb-3">Scheduled arrival time</h3>
                  <p className="text-sm text-gray-600 dark:text-gray-400">
                    The time shown on your original booking confirmation for that specific flight. If the airline later changes the schedule (even weeks in advance), the <em>original</em> scheduled time is usually used as the reference point for EU261 purposes.
                  </p>
                </div>
                <div className="bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-xl p-5">
                  <h3 className="font-bold text-gray-900 dark:text-white mb-3">Actual arrival time</h3>
                  <p className="text-sm text-gray-600 dark:text-gray-400">
                    The moment the aircraft doors are opened at the destination airport — not wheels-on-ground (touchdown), not gate arrival, not when you reach baggage claim. Door-open time is the legal standard confirmed by EU courts.
                  </p>
                </div>
              </div>

              <div className="bg-amber-50 dark:bg-amber-900/20 border border-amber-200 dark:border-amber-800 rounded-xl p-5 mb-4">
                <div className="flex items-start gap-3">
                  <AlertCircle className="h-5 w-5 text-amber-600 mt-0.5 flex-shrink-0" />
                  <div>
                    <p className="font-semibold text-amber-900 dark:text-amber-100 mb-1">Important: Schedule changes are not delays</p>
                    <p className="text-sm text-amber-800 dark:text-amber-200">
                      If an airline notifies you of a schedule change more than 14 days before departure, this is not a covered delay — it is treated as a cancellation with a different set of rules. For changes within 14 days, EU261 cancellation rules apply.
                    </p>
                  </div>
                </div>
              </div>
            </section>

            {/* Care rights during delay */}
            <section className="mb-10">
              <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">
                Your Rights While Waiting: Care During the Delay
              </h2>
              <p className="text-gray-700 dark:text-gray-300 mb-4">
                EU261 grants you care rights <em>at the departure airport</em> even for delays that don't reach the 3-hour compensation threshold. These kick in based on departure delay and flight distance:
              </p>
              <div className="overflow-x-auto mb-4">
                <table className="w-full border-collapse rounded-xl overflow-hidden text-sm">
                  <thead>
                    <tr className="bg-gray-800 text-white">
                      <th className="px-4 py-3 text-left">Wait at departure (short/medium haul)</th>
                      <th className="px-4 py-3 text-left">Wait at departure (long haul 3,500km+)</th>
                      <th className="px-4 py-3 text-left">You are owed</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr className="bg-white dark:bg-gray-800 border-b border-gray-200 dark:border-gray-700">
                      <td className="px-4 py-3">2 hours+</td>
                      <td className="px-4 py-3">4 hours+</td>
                      <td className="px-4 py-3">Meals & refreshments, 2 phone calls/emails</td>
                    </tr>
                    <tr className="bg-gray-50 dark:bg-gray-700 border-b border-gray-200 dark:border-gray-700">
                      <td className="px-4 py-3">5 hours+</td>
                      <td className="px-4 py-3">5 hours+</td>
                      <td className="px-4 py-3">Full refund + return flight if you choose not to travel</td>
                    </tr>
                    <tr className="bg-white dark:bg-gray-800">
                      <td className="px-4 py-3">Overnight delay</td>
                      <td className="px-4 py-3">Overnight delay</td>
                      <td className="px-4 py-3">Hotel accommodation + transport to/from hotel</td>
                    </tr>
                  </tbody>
                </table>
              </div>
              <p className="text-sm text-gray-500 dark:text-gray-400">
                Keep all receipts. If the airline fails to provide these services, you can claim the costs back — even if no financial compensation is due for the delay itself.
              </p>
            </section>

            {/* CTA mid */}
            <div className="bg-blue-600 rounded-2xl p-8 text-center text-white my-10">
              <h3 className="text-2xl font-bold mb-3">Was Your Flight Delayed 3+ Hours?</h3>
              <p className="text-blue-100 mb-6">
                Check your eligibility in 2 minutes. ClaimWinger handles the entire claim process — no upfront costs, 30% commission only on success.
              </p>
              <Button
                asChild
                size="lg"
                className="bg-white text-blue-600 hover:bg-gray-100"
                onClick={() => trackCTA("Check my flight delay claim", "mid")}
              >
                <a
                  href={`https://claimwinger.com/delayed-flight?utm_source=problemlot.com&utm_medium=article&utm_campaign=${SLUG}&utm_content=cta_mid`}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Check My Flight Delay Claim <ArrowRight className="ml-2 h-5 w-5" />
                </a>
              </Button>
            </div>

            {/* Extraordinary circumstances */}
            <section className="mb-10">
              <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">
                Extraordinary Circumstances: When a Qualifying Delay Pays No Compensation
              </h2>
              <p className="text-gray-700 dark:text-gray-300 mb-4">
                Even if your arrival is 3+ hours late, the airline is exempt from compensation if it can prove the delay was caused by "extraordinary circumstances" that could not have been avoided even with all reasonable measures. The burden of proof lies entirely with the airline.
              </p>
              <div className="grid md:grid-cols-2 gap-4 mb-4">
                <div>
                  <h3 className="font-semibold text-gray-900 dark:text-white mb-3 flex items-center gap-2">
                    <XCircle className="h-4 w-4 text-red-500" /> Typically exempt (extraordinary)
                  </h3>
                  <ul className="space-y-2 text-sm text-gray-600 dark:text-gray-400">
                    <li className="flex items-start gap-2"><span className="text-red-500 mt-0.5">•</span>Severe weather (storm, hurricane, heavy snow)</li>
                    <li className="flex items-start gap-2"><span className="text-red-500 mt-0.5">•</span>Air traffic control (ATC) restrictions</li>
                    <li className="flex items-start gap-2"><span className="text-red-500 mt-0.5">•</span>Airport security incidents</li>
                    <li className="flex items-start gap-2"><span className="text-red-500 mt-0.5">•</span>Political instability / airspace closure</li>
                    <li className="flex items-start gap-2"><span className="text-red-500 mt-0.5">•</span>Bird strikes (rarely — case by case)</li>
                  </ul>
                </div>
                <div>
                  <h3 className="font-semibold text-gray-900 dark:text-white mb-3 flex items-center gap-2">
                    <CheckCircle className="h-4 w-4 text-green-500" /> Not extraordinary — compensation owed
                  </h3>
                  <ul className="space-y-2 text-sm text-gray-600 dark:text-gray-400">
                    <li className="flex items-start gap-2"><span className="text-green-500 mt-0.5">•</span>Technical faults (most aircraft defects)</li>
                    <li className="flex items-start gap-2"><span className="text-green-500 mt-0.5">•</span>Crew shortage / crew scheduling problems</li>
                    <li className="flex items-start gap-2"><span className="text-green-500 mt-0.5">•</span>Previous late arrival of the same aircraft</li>
                    <li className="flex items-start gap-2"><span className="text-green-500 mt-0.5">•</span>Airline strikes (but not ATC or airport strikes)</li>
                    <li className="flex items-start gap-2"><span className="text-green-500 mt-0.5">•</span>Light rain or minor wind conditions</li>
                  </ul>
                </div>
              </div>
              <p className="text-sm text-gray-500 dark:text-gray-400">
                Airlines frequently over-invoke extraordinary circumstances. If your airline claims weather or technical issues, it is worth challenging the claim — particularly for technical faults, which courts consistently rule as the airline's operational responsibility.
              </p>
            </section>

            {/* Which flights are covered */}
            <section className="mb-10">
              <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">
                Which Flights Does EU261 Cover?
              </h2>
              <p className="text-gray-700 dark:text-gray-300 mb-4">
                The delay rules only apply to flights within EU261's scope. Even a 6-hour delay gives you nothing if the regulation doesn't apply:
              </p>
              <div className="space-y-3">
                <div className="flex items-start gap-3 p-4 bg-green-50 dark:bg-green-900/20 rounded-lg border border-green-200 dark:border-green-800">
                  <CheckCircle className="h-5 w-5 text-green-600 mt-0.5 flex-shrink-0" />
                  <p className="text-sm text-green-800 dark:text-green-200">
                    <strong>Any flight departing from an EU airport</strong> — regardless of which airline (Ryanair, Emirates, Turkish Airlines — all covered outbound)
                  </p>
                </div>
                <div className="flex items-start gap-3 p-4 bg-green-50 dark:bg-green-900/20 rounded-lg border border-green-200 dark:border-green-800">
                  <CheckCircle className="h-5 w-5 text-green-600 mt-0.5 flex-shrink-0" />
                  <p className="text-sm text-green-800 dark:text-green-200">
                    <strong>Flights arriving in the EU operated by an EU-based carrier</strong> — e.g. Ryanair flying London→Warsaw is covered; Emirates flying Dubai→Amsterdam is not
                  </p>
                </div>
                <div className="flex items-start gap-3 p-4 bg-green-50 dark:bg-green-900/20 rounded-lg border border-green-200 dark:border-green-800">
                  <CheckCircle className="h-5 w-5 text-green-600 mt-0.5 flex-shrink-0" />
                  <p className="text-sm text-green-800 dark:text-green-200">
                    <strong>UK261</strong> covers the same scenarios for flights to/from UK airports (post-Brexit equivalent regulation — same compensation amounts)
                  </p>
                </div>
                <div className="flex items-start gap-3 p-4 bg-red-50 dark:bg-red-900/20 rounded-lg border border-red-200 dark:border-red-800">
                  <XCircle className="h-5 w-5 text-red-600 mt-0.5 flex-shrink-0" />
                  <p className="text-sm text-red-800 dark:text-red-200">
                    <strong>Flight departing from a non-EU airport on a non-EU airline</strong> — e.g. Emirates flying Dubai→Amsterdam: not covered by EU261
                  </p>
                </div>
              </div>
            </section>

            {/* Internal links */}
            <div className="bg-gray-50 dark:bg-gray-800 rounded-xl p-6 mb-10 border border-gray-200 dark:border-gray-700">
              <h3 className="font-bold text-gray-900 dark:text-white mb-4">Related Guides</h3>
              <div className="grid md:grid-cols-2 gap-3">
                {[
                  { href: "/en/blog/how-much-compensation-delayed-flight", label: "How much compensation can I get? €250, €400 or €600" },
                  { href: "/en/blog/eu261-non-eu-airlines-does-it-apply", label: "Does EU261 apply to non-EU airlines?" },
                  { href: "/en/blog/extraordinary-circumstances-eu261-definition", label: "What counts as extraordinary circumstances?" },
                  { href: "/en/blog/compensation-2-hour-delay-eu261", label: "Do I get compensation for a 2-hour delay?" },
                ].map((link) => (
                  <Link
                    key={link.href}
                    href={link.href}
                    className="flex items-center gap-2 text-blue-600 dark:text-blue-400 hover:underline text-sm"
                    onClick={() => {
                      if (typeof window !== "undefined" && window.dataLayer) {
                        window.dataLayer.push({ event: "internal_link_click", destination: link.href, page_slug: SLUG });
                      }
                    }}
                  >
                    <ArrowRight className="h-3.5 w-3.5 flex-shrink-0" />
                    {link.label}
                  </Link>
                ))}
              </div>
            </div>

            {/* FAQ */}
            <section className="mb-10">
              <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-6">
                Frequently Asked Questions
              </h2>
              <div className="space-y-5">
                {[
                  {
                    q: "What counts as a delay under EU261?",
                    a: "Under EU Regulation 261/2004, a qualifying delay is measured at the destination by when the aircraft doors open. If you arrive 3 hours or more after the scheduled arrival time, you are entitled to compensation of €250, €400, or €600 depending on flight distance.",
                  },
                  {
                    q: "Is a 2-hour delay covered by EU261?",
                    a: "Not for the financial compensation. A 2-hour departure delay does entitle you to care rights — free meals, refreshments, and communication at the airport. The €250–€600 cash compensation only applies when your arrival at the final destination is 3+ hours late.",
                  },
                  {
                    q: "Does the departure delay or arrival delay matter for EU261?",
                    a: "Arrival delay is what counts for compensation. This was confirmed by the European Court of Justice in Sturgeon v Condor (2009). A flight can depart 5 hours late but if it arrives less than 3 hours late, no compensation is due.",
                  },
                  {
                    q: "Does EU261 apply to delays on connecting flights?",
                    a: "Yes — what matters is your total arrival at the final destination. If a delay on leg one causes a missed connection, and you arrive at your final destination 3+ hours late, compensation is based on the full journey distance and the overall delay.",
                  },
                  {
                    q: "Can an airline avoid paying if the delay was due to weather?",
                    a: "Severe, unavoidable weather can exempt the airline. However, the airline must prove it took all reasonable measures to avoid the delay. Mild or predictable weather conditions, or weather affecting an earlier rotation, rarely exempt the airline from compensation.",
                  },
                ].map((item, i) => (
                  <div key={i} className="border-b border-gray-200 dark:border-gray-700 pb-5">
                    <h3 className="font-semibold text-gray-900 dark:text-white mb-2">{item.q}</h3>
                    <p className="text-gray-600 dark:text-gray-400 text-sm">{item.a}</p>
                  </div>
                ))}
              </div>
            </section>

            {/* Bottom CTA */}
            <div className="bg-gradient-to-r from-blue-600 to-indigo-600 rounded-2xl p-8 text-center text-white">
              <h3 className="text-2xl font-bold mb-3">Ready to Claim Your Compensation?</h3>
              <p className="text-blue-100 mb-6 max-w-xl mx-auto">
                If your flight arrived 3+ hours late, you may be owed up to €600. ClaimWinger's legal team handles the entire process — no win, no fee. 30% commission only on success (+ VAT for Polish residents).
              </p>
              <Button
                asChild
                size="lg"
                className="bg-white text-blue-600 hover:bg-gray-100"
                onClick={() => trackCTA("Start my EU261 claim", "bottom")}
              >
                <a
                  href={`https://claimwinger.com/delayed-flight?utm_source=problemlot.com&utm_medium=article&utm_campaign=${SLUG}&utm_content=cta_bottom`}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Start My EU261 Claim <ArrowRight className="ml-2 h-5 w-5" />
                </a>
              </Button>
            </div>

          </div>
        </div>
      </article>
    </LayoutEn>
  );
}
