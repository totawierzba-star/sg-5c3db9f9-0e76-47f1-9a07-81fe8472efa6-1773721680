import { LayoutEn } from "@/components/LayoutEn";
import { SEO } from "@/components/SEO";
import Link from "next/link";
import { ArrowRight, CheckCircle, XCircle, AlertCircle, Clock } from "lucide-react";
import { Button } from "@/components/ui/button";

const SLUG = "compensation-2-hour-delay-eu261";

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

export default function Compensation2HourDelayEU261() {
  const structuredData = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "Article",
        headline: "Do I Get Compensation for a 2-Hour Delay?",
        description:
          "A 2-hour flight delay does not trigger EU261 cash compensation — the threshold is 3 hours at arrival. But you are still entitled to free meals and refreshments. Full guide.",
        url: "https://problemlot.com/en/blog/compensation-2-hour-delay-eu261",
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
          "@id": "https://problemlot.com/en/blog/compensation-2-hour-delay-eu261",
        },
      },
      {
        "@type": "FAQPage",
        mainEntity: [
          {
            "@type": "Question",
            name: "Do I get compensation for a 2-hour flight delay?",
            acceptedAnswer: {
              "@type": "Answer",
              text: "No financial compensation (€250–€600) is owed for a 2-hour delay under EU261. The compensation threshold is 3 hours of arrival delay. However, a 2-hour departure delay does entitle you to free meals and refreshments at the airport, and 2 free phone calls or emails.",
            },
          },
          {
            "@type": "Question",
            name: "What rights do I have for a delay of less than 3 hours?",
            acceptedAnswer: {
              "@type": "Answer",
              text: "For short and medium-haul flights (up to 3,500 km), a 2-hour departure delay entitles you to meals, refreshments, and 2 free phone calls or emails. For flights over 3,500 km, this care kicks in at 4 hours. No financial compensation is owed unless your arrival delay reaches 3 hours.",
            },
          },
          {
            "@type": "Question",
            name: "What if my 2-hour departure delay turns into a 3-hour arrival delay?",
            acceptedAnswer: {
              "@type": "Answer",
              text: "Then you are entitled to full EU261 compensation. What matters for the €250–€600 is your arrival delay — specifically, when the aircraft doors open at your destination. If the plane departs 2 hours late but makes up time in the air, and you arrive less than 3 hours late, no compensation is owed.",
            },
          },
          {
            "@type": "Question",
            name: "My flight was delayed 2 hours and I missed a connection — do I get compensation?",
            acceptedAnswer: {
              "@type": "Answer",
              text: "Possibly yes. If a 2-hour delay on your first leg caused you to miss a booked connection, and you arrived at your final destination 3 or more hours late, EU261 compensation applies. The relevant delay is your total arrival at the final destination, not the delay on each individual segment.",
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
            name: "Do I Get Compensation for a 2-Hour Delay?",
            item: "https://problemlot.com/en/blog/compensation-2-hour-delay-eu261",
          },
        ],
      },
    ],
  };

  return (
    <LayoutEn>
      <SEO
        title="Do I Get Compensation for a 2-Hour Delay? | EU261 Explained"
        description="No cash compensation for a 2-hour delay — the EU261 threshold is 3 hours arrival delay. But you do have rights. Find out exactly what you're owed and when."
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
            <span className="text-gray-900 dark:text-white">Compensation for a 2-Hour Delay</span>
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
              Do I Get Compensation for a 2-Hour Delay?
            </h1>
            <p className="text-xl text-gray-700 dark:text-gray-300 mb-8">
              Short answer: <strong>no financial compensation</strong> — the EU261 threshold is a 3-hour arrival delay. But a 2-hour delay is not without rights. You are entitled to care at the airport, and if that delay snowballs into a missed connection, you may still have a full claim.
            </p>
          </div>
        </div>
      </section>

      {/* Main article */}
      <article className="py-12">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto">

            {/* Direct answer */}
            <section className="mb-10">
              <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">
                The Direct Answer: 2 Hours Is Below the Compensation Threshold
              </h2>
              <p className="text-gray-700 dark:text-gray-300 mb-4">
                EU Regulation 261/2004 does not pay out for every delay. The financial compensation of €250, €400 or €600 only triggers when your <strong>arrival</strong> at the final destination is <strong>3 hours or more</strong> behind schedule.
              </p>
              <p className="text-gray-700 dark:text-gray-300 mb-6">
                This was definitively confirmed by the European Court of Justice in <em>Sturgeon v Condor</em> (2009), which aligned the rights of delayed passengers with those of passengers on cancelled flights — but only from the 3-hour mark.
              </p>

              <div className="grid md:grid-cols-3 gap-4 mb-6">
                <div className="bg-red-50 dark:bg-red-900/20 border border-red-200 dark:border-red-800 rounded-xl p-5 text-center">
                  <XCircle className="h-8 w-8 text-red-500 mx-auto mb-2" />
                  <p className="font-bold text-red-900 dark:text-red-100 text-lg">Under 3h arrival delay</p>
                  <p className="text-sm text-red-800 dark:text-red-200 mt-1">No financial compensation (€250/€400/€600)</p>
                </div>
                <div className="bg-amber-50 dark:bg-amber-900/20 border border-amber-200 dark:border-amber-800 rounded-xl p-5 text-center">
                  <AlertCircle className="h-8 w-8 text-amber-500 mx-auto mb-2" />
                  <p className="font-bold text-amber-900 dark:text-amber-100 text-lg">2h+ departure delay</p>
                  <p className="text-sm text-amber-800 dark:text-amber-200 mt-1">Care rights apply: meals, drinks, communication</p>
                </div>
                <div className="bg-green-50 dark:bg-green-900/20 border border-green-200 dark:border-green-800 rounded-xl p-5 text-center">
                  <CheckCircle className="h-8 w-8 text-green-500 mx-auto mb-2" />
                  <p className="font-bold text-green-900 dark:text-green-100 text-lg">3h+ arrival delay</p>
                  <p className="text-sm text-green-800 dark:text-green-200 mt-1">Full compensation: €250, €400 or €600</p>
                </div>
              </div>

              <div className="bg-amber-50 dark:bg-amber-900/20 border border-amber-200 dark:border-amber-800 rounded-xl p-5">
                <div className="flex items-start gap-3">
                  <AlertCircle className="h-5 w-5 text-amber-600 mt-0.5 flex-shrink-0" />
                  <p className="text-sm text-amber-800 dark:text-amber-200">
                    <strong>Key distinction:</strong> EU261 uses <em>arrival</em> delay — not departure delay — as the compensation trigger. A flight can push back 2 hours late but make up time in the air and land less than 3 hours behind schedule. In that case, no compensation is owed.
                  </p>
                </div>
              </div>
            </section>

            {/* What you are owed for a 2h delay */}
            <section className="mb-10">
              <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">
                What You Are Still Owed During a 2-Hour Delay
              </h2>
              <p className="text-gray-700 dark:text-gray-300 mb-6">
                Even without financial compensation, a 2-hour departure delay triggers <strong>care rights</strong> under Article 9 of EU261. These are unconditional — the airline must provide them regardless of the cause of the delay.
              </p>
              <div className="overflow-x-auto mb-4">
                <table className="w-full border-collapse rounded-xl overflow-hidden text-sm">
                  <thead>
                    <tr className="bg-blue-600 text-white">
                      <th className="px-4 py-3 text-left">Departure delay</th>
                      <th className="px-4 py-3 text-left">Flight distance</th>
                      <th className="px-4 py-3 text-left">You are owed</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr className="bg-white dark:bg-gray-800 border-b border-gray-200 dark:border-gray-700">
                      <td className="px-4 py-3 font-medium">2 hours+</td>
                      <td className="px-4 py-3">Up to 1,500 km</td>
                      <td className="px-4 py-3">Meals & refreshments, 2 phone calls / emails</td>
                    </tr>
                    <tr className="bg-gray-50 dark:bg-gray-700 border-b border-gray-200 dark:border-gray-700">
                      <td className="px-4 py-3 font-medium">2 hours+</td>
                      <td className="px-4 py-3">1,500–3,500 km</td>
                      <td className="px-4 py-3">Meals & refreshments, 2 phone calls / emails</td>
                    </tr>
                    <tr className="bg-white dark:bg-gray-800 border-b border-gray-200 dark:border-gray-700">
                      <td className="px-4 py-3 font-medium">4 hours+</td>
                      <td className="px-4 py-3">Over 3,500 km</td>
                      <td className="px-4 py-3">Meals & refreshments, 2 phone calls / emails</td>
                    </tr>
                    <tr className="bg-gray-50 dark:bg-gray-700 border-b border-gray-200 dark:border-gray-700">
                      <td className="px-4 py-3 font-medium">5 hours+</td>
                      <td className="px-4 py-3">Any distance</td>
                      <td className="px-4 py-3">Full ticket refund + return flight (if you choose not to travel)</td>
                    </tr>
                    <tr className="bg-white dark:bg-gray-800">
                      <td className="px-4 py-3 font-medium">Overnight</td>
                      <td className="px-4 py-3">Any distance</td>
                      <td className="px-4 py-3">Hotel accommodation + transport to/from hotel</td>
                    </tr>
                  </tbody>
                </table>
              </div>
              <p className="text-sm text-gray-500 dark:text-gray-400">
                <strong>Tip:</strong> Keep all receipts for meals, drinks, and calls. If the airline fails to provide these and you pay out of pocket, you can claim the reasonable costs back — even when no financial compensation is due.
              </p>
            </section>

            {/* When 2h can become a claim */}
            <section className="mb-10">
              <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">
                When a 2-Hour Delay Can Still Give You a Full Claim
              </h2>
              <p className="text-gray-700 dark:text-gray-300 mb-6">
                A 2-hour delay on a single flight does not trigger compensation. But there are two scenarios where it can still lead to a valid EU261 claim:
              </p>
              <div className="space-y-4">
                <div className="bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-xl p-5">
                  <h3 className="font-bold text-gray-900 dark:text-white mb-2 flex items-center gap-2">
                    <CheckCircle className="h-5 w-5 text-green-500 flex-shrink-0" />
                    Scenario 1: The 2-hour departure delay becomes a 3-hour arrival delay
                  </h3>
                  <p className="text-sm text-gray-600 dark:text-gray-400">
                    If your plane pushes back 2 hours late but encounters further delays (holding pattern, taxiing, slow disembarkation) and you arrive at the destination 3 or more hours after the scheduled arrival time, you qualify for full compensation. The departure delay is irrelevant — arrival is what counts.
                  </p>
                </div>
                <div className="bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-xl p-5">
                  <h3 className="font-bold text-gray-900 dark:text-white mb-2 flex items-center gap-2">
                    <CheckCircle className="h-5 w-5 text-green-500 flex-shrink-0" />
                    Scenario 2: The 2-hour delay causes a missed connection
                  </h3>
                  <p className="text-sm text-gray-600 dark:text-gray-400">
                    If your first flight is delayed 2 hours and you miss a connecting flight booked on the same reservation, what matters is your arrival at the <strong>final destination</strong>. If you arrive there 3+ hours late, EU261 compensation applies — calculated on the total journey distance, not just the first leg.
                  </p>
                  <div className="mt-3 p-3 bg-blue-50 dark:bg-blue-900/20 rounded-lg text-xs text-blue-800 dark:text-blue-200">
                    <strong>Important:</strong> This only applies when both flights are on a single booking. A missed connection on a separately-purchased ticket is not covered under EU261's missed connection rules.
                  </div>
                </div>
              </div>
            </section>

            {/* Compensation amounts */}
            <section className="mb-10">
              <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">
                Compensation Amounts When the 3-Hour Threshold Is Reached
              </h2>
              <p className="text-gray-700 dark:text-gray-300 mb-6">
                If your delay does reach 3+ hours at arrival, the following fixed compensation amounts apply regardless of ticket price:
              </p>
              <div className="overflow-x-auto">
                <table className="w-full border-collapse rounded-xl overflow-hidden text-sm">
                  <thead>
                    <tr className="bg-blue-600 text-white">
                      <th className="px-4 py-3 text-left">Flight Distance</th>
                      <th className="px-4 py-3 text-center">Compensation</th>
                      <th className="px-4 py-3 text-left">Example Routes</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr className="bg-white dark:bg-gray-800 border-b border-gray-200 dark:border-gray-700">
                      <td className="px-4 py-3 font-medium">Up to 1,500 km</td>
                      <td className="px-4 py-3 text-center font-bold text-green-600 dark:text-green-400">€250</td>
                      <td className="px-4 py-3 text-gray-600 dark:text-gray-400">Warsaw–London, Paris–Madrid</td>
                    </tr>
                    <tr className="bg-gray-50 dark:bg-gray-700 border-b border-gray-200 dark:border-gray-700">
                      <td className="px-4 py-3 font-medium">1,500–3,500 km</td>
                      <td className="px-4 py-3 text-center font-bold text-blue-600 dark:text-blue-400">€400</td>
                      <td className="px-4 py-3 text-gray-600 dark:text-gray-400">Warsaw–Tel Aviv, London–Cairo</td>
                    </tr>
                    <tr className="bg-white dark:bg-gray-800">
                      <td className="px-4 py-3 font-medium">Over 3,500 km</td>
                      <td className="px-4 py-3 text-center font-bold text-purple-600 dark:text-purple-400">€600</td>
                      <td className="px-4 py-3 text-gray-600 dark:text-gray-400">Warsaw–New York, London–Bangkok</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </section>

            {/* CTA mid */}
            <div className="bg-blue-600 rounded-2xl p-8 text-center text-white my-10">
              <h3 className="text-2xl font-bold mb-3">Not Sure If Your Delay Qualifies?</h3>
              <p className="text-blue-100 mb-6">
                Check your flight in 2 minutes. ClaimWinger will tell you instantly whether your delay crosses the 3-hour threshold — and handle the entire claim if it does.
              </p>
              <Button
                asChild
                size="lg"
                className="bg-white text-blue-600 hover:bg-gray-100"
                onClick={() => trackCTA("Check my delay threshold", "mid")}
              >
                <a
                  href={`https://claimwinger.com/delayed-flight?utm_source=problemlot.com&utm_medium=article&utm_campaign=${SLUG}&utm_content=cta_mid`}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Check My Delay Now <ArrowRight className="ml-2 h-5 w-5" />
                </a>
              </Button>
            </div>

            {/* Delay timeline visual */}
            <section className="mb-10">
              <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">
                EU261 Rights at a Glance: The Delay Timeline
              </h2>
              <div className="relative">
                <div className="space-y-0">
                  {[
                    {
                      time: "0–2h delay",
                      color: "gray",
                      rights: "No specific EU261 rights triggered (beyond standard consumer protections)",
                      compensation: null,
                    },
                    {
                      time: "2h+ departure delay (short/medium haul)",
                      color: "amber",
                      rights: "✓ Free meals & refreshments at airport\n✓ 2 free phone calls or emails",
                      compensation: null,
                    },
                    {
                      time: "4h+ departure delay (long haul 3,500km+)",
                      color: "amber",
                      rights: "✓ Free meals & refreshments\n✓ 2 free phone calls or emails",
                      compensation: null,
                    },
                    {
                      time: "3h+ ARRIVAL delay at destination",
                      color: "green",
                      rights: "✓ All care rights above\n✓ Financial compensation",
                      compensation: "€250 / €400 / €600",
                    },
                    {
                      time: "5h+ departure delay",
                      color: "blue",
                      rights: "✓ Full ticket refund\n✓ Return flight if you choose not to travel",
                      compensation: null,
                    },
                    {
                      time: "Overnight delay",
                      color: "blue",
                      rights: "✓ Hotel accommodation\n✓ Transport to/from hotel",
                      compensation: null,
                    },
                  ].map((item, i) => (
                    <div key={i} className={`p-4 border-l-4 mb-3 rounded-r-lg ${
                      item.color === "green"
                        ? "border-green-500 bg-green-50 dark:bg-green-900/20"
                        : item.color === "amber"
                        ? "border-amber-500 bg-amber-50 dark:bg-amber-900/20"
                        : item.color === "blue"
                        ? "border-blue-500 bg-blue-50 dark:bg-blue-900/20"
                        : "border-gray-300 bg-gray-50 dark:bg-gray-800"
                    }`}>
                      <div className="flex items-start justify-between gap-4">
                        <div>
                          <p className="font-bold text-gray-900 dark:text-white text-sm">{item.time}</p>
                          <p className="text-xs text-gray-600 dark:text-gray-400 mt-1 whitespace-pre-line">{item.rights}</p>
                        </div>
                        {item.compensation && (
                          <span className="bg-green-600 text-white px-3 py-1 rounded-full text-xs font-bold whitespace-nowrap flex-shrink-0">
                            {item.compensation}
                          </span>
                        )}
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </section>

            {/* UK261 note */}
            <section className="mb-10">
              <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">
                What About Flights to or from the UK?
              </h2>
              <p className="text-gray-700 dark:text-gray-300 mb-4">
                The UK has its own equivalent regulation — UK261 — which came into force after Brexit. The rules are virtually identical to EU261: the compensation threshold is the same 3-hour arrival delay, and the amounts are the same (£220, £350, £520 — converted from euros at the time of Brexit).
              </p>
              <p className="text-gray-700 dark:text-gray-300">
                So if you were on a flight to or from London, Manchester, Edinburgh or any other UK airport: the same rules apply, enforced by the Civil Aviation Authority (CAA) rather than an EU national enforcement body.
              </p>
            </section>

            {/* Internal links */}
            <div className="bg-gray-50 dark:bg-gray-800 rounded-xl p-6 mb-10 border border-gray-200 dark:border-gray-700">
              <h3 className="font-bold text-gray-900 dark:text-white mb-4">Related Guides</h3>
              <div className="grid md:grid-cols-2 gap-3">
                {[
                  { href: "/en/blog/what-counts-flight-delay-eu261", label: "What exactly counts as a flight delay under EU261?" },
                  { href: "/en/blog/how-much-compensation-delayed-flight", label: "How much compensation for a delayed flight?" },
                  { href: "/en/blog/extraordinary-circumstances-eu261-definition", label: "What are extraordinary circumstances?" },
                  { href: "/en/blog/eu261-non-eu-airlines-does-it-apply", label: "Does EU261 apply to non-EU airlines?" },
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
                    q: "Do I get compensation for a 2-hour flight delay?",
                    a: "No financial compensation (€250–€600) is owed for a 2-hour delay under EU261. The compensation threshold is 3 hours of arrival delay at the final destination. However, a 2-hour departure delay on short and medium-haul flights does entitle you to free meals, refreshments, and 2 phone calls or emails at the airport.",
                  },
                  {
                    q: "What rights do I have for a delay of less than 3 hours?",
                    a: "For flights up to 3,500 km, a 2-hour departure delay triggers care rights: free food and drinks proportionate to the wait, plus 2 free phone calls or emails. For flights over 3,500 km, this care starts at 4 hours departure delay. Keep your receipts — if the airline doesn't provide these services, you can claim the costs back.",
                  },
                  {
                    q: "What if my 2-hour departure delay turns into a 3-hour arrival delay?",
                    a: "Then you qualify for full EU261 compensation. EU261 measures arrival delay — when the aircraft doors open at the destination — not departure delay. If you arrive 3 or more hours after your scheduled arrival time, you are entitled to €250, €400 or €600 depending on flight distance.",
                  },
                  {
                    q: "My flight was delayed 2 hours and I missed a connection — do I get compensation?",
                    a: "Possibly yes. If the 2-hour delay caused you to miss a connecting flight on the same booking and you arrived at your final destination 3+ hours late, EU261 compensation applies. The total journey distance is used to calculate the amount. This only applies when both flights are on a single itinerary — not separately purchased tickets.",
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
              <h3 className="text-2xl font-bold mb-3">Was Your Delay 3 Hours or More?</h3>
              <p className="text-blue-100 mb-6 max-w-xl mx-auto">
                If your flight arrived 3+ hours late at the final destination, you may be owed up to €600. ClaimWinger checks your eligibility instantly and handles everything — no win, no fee. 30% commission only on success (+ VAT for Polish residents).
              </p>
              <Button
                asChild
                size="lg"
                className="bg-white text-blue-600 hover:bg-gray-100"
                onClick={() => trackCTA("Check my delay compensation", "bottom")}
              >
                <a
                  href={`https://claimwinger.com/delayed-flight?utm_source=problemlot.com&utm_medium=article&utm_campaign=${SLUG}&utm_content=cta_bottom`}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Check My Delay Compensation <ArrowRight className="ml-2 h-5 w-5" />
                </a>
              </Button>
            </div>

          </div>
        </div>
      </article>
    </LayoutEn>
  );
}
