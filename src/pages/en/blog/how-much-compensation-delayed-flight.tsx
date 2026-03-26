import { LayoutEn } from "@/components/LayoutEn";
import { SEO } from "@/components/SEO";
import Link from "next/link";
import { ArrowRight, CheckCircle, XCircle, AlertCircle, Clock } from "lucide-react";
import { Button } from "@/components/ui/button";

const SLUG = "how-much-compensation-delayed-flight";

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

export default function HowMuchCompensationDelayedFlight() {
  const structuredData = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "Article",
        "headline": "How Much Compensation for a Delayed Flight? €250, €400 or €600",
        "description":
          "Exact EU261 compensation amounts for delayed flights: €250 (under 1,500 km), €400 (1,500–3,500 km), €600 (over 3,500 km). Learn when you qualify and how to claim.",
        "url": "https://problemlot.com/en/blog/how-much-compensation-delayed-flight",
        "datePublished": "2025-03-07",
        "dateModified": "2026-03-26",
        "author": {
          "@type": "Organization",
          "name": "problemlot.com",
          "url": "https://problemlot.com",
        },
        "publisher": {
          "@type": "Organization",
          "name": "problemlot.com",
          "url": "https://problemlot.com",
        },
        "mainEntityOfPage": {
          "@type": "WebPage",
          "@id":
            "https://problemlot.com/en/blog/how-much-compensation-delayed-flight",
        },
      },
      {
        "@type": "FAQPage",
        mainEntity: [
          {
            "@type": "Question",
            name: "How much compensation can I get for a delayed flight in Europe?",
            acceptedAnswer: {
              "@type": "Answer",
              text: "Under EU Regulation 261/2004, you can receive €250 for flights up to 1,500 km, €400 for flights between 1,500 km and 3,500 km, and €600 for flights over 3,500 km. The compensation applies when your flight arrives more than 3 hours late.",
            },
          },
          {
            "@type": "Question",
            name: "Does the price of my ticket affect the EU261 compensation amount?",
            acceptedAnswer: {
              "@type": "Answer",
              text: "No. EU261 compensation is a fixed statutory amount based entirely on flight distance. Whether you paid €50 or €500 for your ticket makes no difference to the compensation you are entitled to.",
            },
          },
          {
            "@type": "Question",
            name: "Is the compensation reduced for short delays?",
            acceptedAnswer: {
              "@type": "Answer",
              text: "Yes — but only in one specific case. For flights between 1,500 km and 3,500 km within the EU, if the airline re-routes you and you arrive within 3 hours of the original time, the compensation is reduced by 50% to €200. For all other situations, you receive the full amount.",
            },
          },
          {
            "@type": "Question",
            name: "What delay qualifies for EU261 compensation?",
            acceptedAnswer: {
              "@type": "Answer",
              text: "You need to arrive at your final destination at least 3 hours later than the scheduled arrival time. Departure delay alone is not enough — it's the arrival delay that counts.",
            },
          },
          {
            "@type": "Question",
            name: "Do I get compensation if the delay is the airline's fault vs extraordinary circumstances?",
            acceptedAnswer: {
              "@type": "Answer",
              text: "No compensation is payable if the airline proves the delay was caused by extraordinary circumstances — events outside its control, such as severe weather, air traffic control strikes, or security threats. Technical faults discovered during routine maintenance are generally NOT considered extraordinary.",
            },
          },
        ],
      },
      {
        "@type": "BreadcrumbList",
        itemListElement: [
          { "@type": "ListItem", position: 1, name: "Home", item: "https://problemlot.com/en" },
          { "@type": "ListItem", position: 2, name: "Blog", item: "https://problemlot.com/en/blog" },
          {
            "@type": "ListItem",
            position: 3,
            name: "How Much Compensation for a Delayed Flight?",
            item: "https://problemlot.com/en/blog/how-much-compensation-delayed-flight",
          },
        ],
      },
    ],
  };

  return (
    <LayoutEn>
      <SEO
        title="How Much Compensation for a Delayed Flight? €250, €400 or €600 | EU261"
        description="Exact EU261 compensation amounts: €250 for flights under 1,500 km, €400 for 1,500–3,500 km, €600 for over 3,500 km. See when you qualify and how to claim."
        url="https://problemlot.com/en/blog/how-much-compensation-delayed-flight"
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
      />

      {/* Breadcrumb */}
      <nav className="bg-gray-50 dark:bg-gray-800 border-b border-gray-200 dark:border-gray-700 py-3">
        <div className="container mx-auto px-4">
          <ol className="flex items-center gap-2 text-sm text-gray-500 dark:text-gray-400">
            <li><Link href="/en" className="hover:text-blue-600">Home</Link></li>
            <li>/</li>
            <li><Link href="/en/blog" className="hover:text-blue-600">Blog</Link></li>
            <li>/</li>
            <li className="text-gray-900 dark:text-white truncate">How Much Compensation for a Delayed Flight?</li>
          </ol>
        </div>
      </nav>

      {/* Hero */}
      <section className="bg-gradient-to-br from-blue-50 to-indigo-100 dark:from-gray-800 dark:to-gray-900 py-14">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto">
            <div className="inline-flex items-center gap-2 bg-blue-100 dark:bg-blue-900/50 text-blue-700 dark:text-blue-300 px-4 py-1.5 rounded-full text-sm font-medium mb-6">
              <Clock className="h-4 w-4" />
              EU Regulation 261/2004
            </div>
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-6 leading-tight">
              How Much Compensation for a Delayed Flight?
            </h1>
            <p className="text-xl text-gray-700 dark:text-gray-300 leading-relaxed">
              <strong>Short answer:</strong> €250, €400, or €600 per passenger — depending solely on flight distance.
              Here is the complete breakdown and the exact conditions you need to meet.
            </p>
          </div>
        </div>
      </section>

      <article className="py-12">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto">

            {/* The three amounts — prominent table */}
            <section className="mb-12">
              <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-6">
                EU261 Compensation Amounts at a Glance
              </h2>
              <div className="overflow-x-auto rounded-xl border border-gray-200 dark:border-gray-700">
                <table className="w-full text-sm">
                  <thead>
                    <tr className="bg-blue-600 text-white">
                      <th className="px-6 py-4 text-left font-semibold">Flight Distance</th>
                      <th className="px-6 py-4 text-center font-semibold">Compensation</th>
                      <th className="px-6 py-4 text-left font-semibold">Example Routes</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr className="bg-white dark:bg-gray-900 border-b border-gray-100 dark:border-gray-800">
                      <td className="px-6 py-4 font-medium text-gray-900 dark:text-white">Up to 1,500 km</td>
                      <td className="px-6 py-4 text-center">
                        <span className="text-2xl font-bold text-blue-600">€250</span>
                      </td>
                      <td className="px-6 py-4 text-gray-600 dark:text-gray-400">
                        Warsaw–Berlin, London–Paris, Amsterdam–Rome
                      </td>
                    </tr>
                    <tr className="bg-gray-50 dark:bg-gray-800 border-b border-gray-100 dark:border-gray-700">
                      <td className="px-6 py-4 font-medium text-gray-900 dark:text-white">1,500–3,500 km</td>
                      <td className="px-6 py-4 text-center">
                        <span className="text-2xl font-bold text-blue-600">€400</span>
                      </td>
                      <td className="px-6 py-4 text-gray-600 dark:text-gray-400">
                        London–Cairo, Warsaw–Tel Aviv, Frankfurt–Nairobi
                      </td>
                    </tr>
                    <tr className="bg-white dark:bg-gray-900">
                      <td className="px-6 py-4 font-medium text-gray-900 dark:text-white">Over 3,500 km</td>
                      <td className="px-6 py-4 text-center">
                        <span className="text-2xl font-bold text-blue-600">€600</span>
                      </td>
                      <td className="px-6 py-4 text-gray-600 dark:text-gray-400">
                        Warsaw–New York, London–Bangkok, Paris–Tokyo
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>
              <p className="text-sm text-gray-500 dark:text-gray-400 mt-3">
                Source: EU Regulation 261/2004, Article 7. Distance is measured as the great-circle distance
                between the departure airport and the final destination.
              </p>
            </section>

            {/* When do you qualify */}
            <section className="mb-12">
              <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-6">
                When Do You Qualify for Compensation?
              </h2>
              <p className="text-gray-700 dark:text-gray-300 mb-6 leading-relaxed">
                EU Regulation 261/2004 entitles you to compensation when <strong>all three</strong> of the
                following conditions are met:
              </p>
              <div className="space-y-4">
                <div className="flex items-start gap-4 bg-green-50 dark:bg-green-900/20 rounded-xl p-5 border border-green-200 dark:border-green-800">
                  <CheckCircle className="h-6 w-6 text-green-600 mt-0.5 flex-shrink-0" />
                  <div>
                    <p className="font-semibold text-gray-900 dark:text-white mb-1">
                      Flight departs from an EU airport, OR is operated by an EU airline arriving in the EU
                    </p>
                    <p className="text-sm text-gray-600 dark:text-gray-400">
                      Any flight departing from any EU member state airport qualifies, regardless of the
                      airline's nationality. Non-EU airlines (e.g., Emirates, United) only qualify when the
                      flight departs <em>from</em> the EU.
                    </p>
                  </div>
                </div>
                <div className="flex items-start gap-4 bg-green-50 dark:bg-green-900/20 rounded-xl p-5 border border-green-200 dark:border-green-800">
                  <CheckCircle className="h-6 w-6 text-green-600 mt-0.5 flex-shrink-0" />
                  <div>
                    <p className="font-semibold text-gray-900 dark:text-white mb-1">
                      You arrived at your final destination 3+ hours late
                    </p>
                    <p className="text-sm text-gray-600 dark:text-gray-400">
                      The delay is measured at the <strong>final destination arrival time</strong>, not at the
                      departure airport. A 5-hour departure delay that results in only a 2-hour arrival delay
                      does not qualify.
                    </p>
                  </div>
                </div>
                <div className="flex items-start gap-4 bg-green-50 dark:bg-green-900/20 rounded-xl p-5 border border-green-200 dark:border-green-800">
                  <CheckCircle className="h-6 w-6 text-green-600 mt-0.5 flex-shrink-0" />
                  <div>
                    <p className="font-semibold text-gray-900 dark:text-white mb-1">
                      The delay was not caused by extraordinary circumstances
                    </p>
                    <p className="text-sm text-gray-600 dark:text-gray-400">
                      Airlines are not required to pay if they can prove the delay was caused by events
                      they could not have avoided — such as severe weather, air traffic control strikes,
                      or political instability. The burden of proof is on the airline.
                    </p>
                  </div>
                </div>
              </div>
            </section>

            {/* CTA mid-article */}
            <div className="bg-blue-600 rounded-2xl p-8 text-white mb-12 text-center">
              <h3 className="text-2xl font-bold mb-3">Check Your Flight Now</h3>
              <p className="text-blue-100 mb-6">
                Free eligibility check. You only pay if your claim is successful — 30% commission
                (+ VAT for Polish residents; VAT 0% for other EU/non-EU passengers as export of services).
              </p>
              <Button
                asChild
                size="lg"
                className="bg-white text-blue-600 hover:bg-gray-100"
                onClick={() => trackCTA("Check Your Claim Free", "mid_article")}
              >
                <a
                  href={`https://claimwinger.com/delayed-flight?utm_source=problemlot.com&utm_medium=article&utm_campaign=${SLUG}&utm_content=cta_mid`}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Check Your Claim Free <ArrowRight className="ml-2 h-5 w-5" />
                </a>
              </Button>
            </div>

            {/* The 50% reduction rule */}
            <section className="mb-12">
              <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-6">
                The 50% Reduction Rule
              </h2>
              <p className="text-gray-700 dark:text-gray-300 mb-4 leading-relaxed">
                EU261 contains one situation where the airline can reduce your compensation by 50%:
              </p>
              <div className="bg-amber-50 dark:bg-amber-900/20 border border-amber-200 dark:border-amber-700 rounded-xl p-6 mb-6">
                <div className="flex items-start gap-3">
                  <AlertCircle className="h-6 w-6 text-amber-600 mt-0.5 flex-shrink-0" />
                  <div>
                    <p className="font-semibold text-gray-900 dark:text-white mb-2">
                      When does the 50% reduction apply?
                    </p>
                    <p className="text-gray-700 dark:text-gray-300 text-sm leading-relaxed">
                      When the airline offers you re-routing and you still arrive within:
                    </p>
                    <ul className="list-disc list-inside text-sm text-gray-700 dark:text-gray-300 mt-2 space-y-1">
                      <li>2 hours of the original arrival time for flights ≤ 1,500 km</li>
                      <li>3 hours for intra-EU flights over 1,500 km</li>
                      <li>4 hours for all other flights over 3,500 km</li>
                    </ul>
                    <p className="text-sm text-gray-600 dark:text-gray-400 mt-3">
                      In practice: if you were booked Warsaw–New York (€600 route) and the airline
                      put you on a different flight that arrived only 3 hours late, it can pay €300
                      instead of €600.
                    </p>
                  </div>
                </div>
              </div>
            </section>

            {/* What is NOT included */}
            <section className="mb-12">
              <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-6">
                What the €250/€400/€600 Does NOT Cover
              </h2>
              <p className="text-gray-700 dark:text-gray-300 mb-4 leading-relaxed">
                The EU261 lump sum is separate from other rights. You are also entitled to:
              </p>
              <div className="grid md:grid-cols-2 gap-4">
                <div className="bg-gray-50 dark:bg-gray-800 rounded-xl p-5">
                  <p className="font-semibold text-gray-900 dark:text-white mb-2">Right of Care</p>
                  <p className="text-sm text-gray-600 dark:text-gray-400">
                    For delays over 2 hours (short haul) or 3 hours (long haul): meals, refreshments,
                    and 2 free phone calls or emails — at the airport, at the airline's expense.
                  </p>
                </div>
                <div className="bg-gray-50 dark:bg-gray-800 rounded-xl p-5">
                  <p className="font-semibold text-gray-900 dark:text-white mb-2">Hotel &amp; Transfer</p>
                  <p className="text-sm text-gray-600 dark:text-gray-400">
                    If the delay forces an overnight stay, the airline must provide hotel accommodation
                    and transport between the airport and hotel.
                  </p>
                </div>
                <div className="bg-gray-50 dark:bg-gray-800 rounded-xl p-5">
                  <p className="font-semibold text-gray-900 dark:text-white mb-2">Full Refund</p>
                  <p className="text-sm text-gray-600 dark:text-gray-400">
                    If the delay exceeds 5 hours and you decide not to travel, you are entitled to a
                    full ticket refund plus a return flight to the point of departure if needed.
                  </p>
                </div>
                <div className="bg-gray-50 dark:bg-gray-800 rounded-xl p-5">
                  <p className="font-semibold text-gray-900 dark:text-white mb-2">Consequential Losses</p>
                  <p className="text-sm text-gray-600 dark:text-gray-400">
                    Additional expenses (missed hotel, car hire, connecting transport) may be claimed
                    separately under the Montreal Convention — independent of EU261.
                  </p>
                </div>
              </div>
            </section>

            {/* Extraordinary circumstances */}
            <section className="mb-12">
              <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-6">
                Extraordinary Circumstances: When Airlines Don't Have to Pay
              </h2>
              <p className="text-gray-700 dark:text-gray-300 mb-6 leading-relaxed">
                Airlines frequently claim extraordinary circumstances to avoid paying. Not all
                excuses are valid. Here is a quick reference:
              </p>
              <div className="space-y-3">
                <div className="flex items-start gap-3">
                  <XCircle className="h-5 w-5 text-red-500 mt-0.5 flex-shrink-0" />
                  <div>
                    <span className="font-medium text-gray-900 dark:text-white">Technical fault discovered during routine maintenance</span>
                    <span className="text-sm text-gray-500 dark:text-gray-400 ml-2">— NOT extraordinary; airline must pay</span>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <XCircle className="h-5 w-5 text-red-500 mt-0.5 flex-shrink-0" />
                  <div>
                    <span className="font-medium text-gray-900 dark:text-white">Staff shortage / crew not available</span>
                    <span className="text-sm text-gray-500 dark:text-gray-400 ml-2">— NOT extraordinary; airline must pay</span>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <CheckCircle className="h-5 w-5 text-green-600 mt-0.5 flex-shrink-0" />
                  <div>
                    <span className="font-medium text-gray-900 dark:text-white">Air traffic control strike or restriction</span>
                    <span className="text-sm text-gray-500 dark:text-gray-400 ml-2">— Valid extraordinary circumstance</span>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <CheckCircle className="h-5 w-5 text-green-600 mt-0.5 flex-shrink-0" />
                  <div>
                    <span className="font-medium text-gray-900 dark:text-white">Severe weather making flying unsafe</span>
                    <span className="text-sm text-gray-500 dark:text-gray-400 ml-2">— Valid extraordinary circumstance</span>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <CheckCircle className="h-5 w-5 text-green-600 mt-0.5 flex-shrink-0" />
                  <div>
                    <span className="font-medium text-gray-900 dark:text-white">Security incident or airport closure</span>
                    <span className="text-sm text-gray-500 dark:text-gray-400 ml-2">— Valid extraordinary circumstance</span>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <AlertCircle className="h-5 w-5 text-amber-500 mt-0.5 flex-shrink-0" />
                  <div>
                    <span className="font-medium text-gray-900 dark:text-white">Hidden technical fault (not found in maintenance)</span>
                    <span className="text-sm text-gray-500 dark:text-gray-400 ml-2">— Contested; courts often rule in passengers' favour</span>
                  </div>
                </div>
              </div>
              <p className="text-sm text-gray-600 dark:text-gray-400 mt-6 bg-gray-50 dark:bg-gray-800 rounded-lg p-4">
                <strong>Tip:</strong> When an airline rejects your claim citing extraordinary circumstances,
                always ask for evidence. They must prove the circumstance was both unavoidable and that
                all reasonable measures were taken. Many rejections are overturned on appeal.
              </p>
            </section>

            {/* How to claim */}
            <section className="mb-12">
              <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-6">
                How to Claim Your €250–€600
              </h2>
              <div className="space-y-4">
                {[
                  {
                    step: "1",
                    title: "Gather your documents",
                    body: "Keep your boarding pass, booking confirmation, and any evidence of the actual arrival time (airport screen photos, airline SMS updates).",
                  },
                  {
                    step: "2",
                    title: "Contact the airline directly",
                    body: "Submit a formal written claim citing EU Regulation 261/2004, Article 7. Mention the exact flight number, date, and how many hours late you arrived. Give the airline 8 weeks to respond.",
                  },
                  {
                    step: "3",
                    title: "Escalate to a National Enforcement Body",
                    body: "If the airline refuses or ignores you: in the UK use the CAA or an approved ADR scheme (CEDR, AviationADR); in Germany the LBA; in Poland the ULC; in France the DGAC; in Ireland the IAA.",
                  },
                  {
                    step: "4",
                    title: "Use a claim management company",
                    body: "Companies like ClaimWinger handle the entire process on a no-win, no-fee basis. Their fee is 30% of the recovered amount (+ 23% VAT for Polish residents; VAT 0% for other passengers — export of services).",
                  },
                ].map(({ step, title, body }) => (
                  <div key={step} className="flex gap-4">
                    <div className="flex-shrink-0 w-10 h-10 rounded-full bg-blue-600 text-white flex items-center justify-center font-bold">
                      {step}
                    </div>
                    <div>
                      <p className="font-semibold text-gray-900 dark:text-white mb-1">{title}</p>
                      <p className="text-gray-600 dark:text-gray-400 text-sm leading-relaxed">{body}</p>
                    </div>
                  </div>
                ))}
              </div>
            </section>

            {/* Internal links */}
            <section className="mb-12 bg-gray-50 dark:bg-gray-800 rounded-xl p-6">
              <h3 className="text-lg font-bold text-gray-900 dark:text-white mb-4">
                Related Articles
              </h3>
              <ul className="space-y-3">
                <li>
                  <Link
                    href="/en/blog/eu261-non-eu-airlines-does-it-apply"
                    className="text-blue-600 dark:text-blue-400 hover:underline text-sm"
                    onClick={() => {
                      if (typeof window !== "undefined" && window.dataLayer) {
                        window.dataLayer.push({ event: "internal_link_click", destination: "eu261-non-eu-airlines-does-it-apply", from: SLUG });
                      }
                    }}
                  >
                    Does EU261 Apply to Non-EU Airlines? →
                  </Link>
                </li>
                <li>
                  <Link
                    href="/en/blog/lot-polish-airlines-delay-compensation-guide"
                    className="text-blue-600 dark:text-blue-400 hover:underline text-sm"
                    onClick={() => {
                      if (typeof window !== "undefined" && window.dataLayer) {
                        window.dataLayer.push({ event: "internal_link_click", destination: "lot-polish-airlines-delay-compensation-guide", from: SLUG });
                      }
                    }}
                  >
                    LOT Polish Airlines Delay Compensation Guide →
                  </Link>
                </li>
                <li>
                  <Link
                    href="/en/blog/lot-polish-airlines-compensation-amounts"
                    className="text-blue-600 dark:text-blue-400 hover:underline text-sm"
                    onClick={() => {
                      if (typeof window !== "undefined" && window.dataLayer) {
                        window.dataLayer.push({ event: "internal_link_click", destination: "lot-polish-airlines-compensation-amounts", from: SLUG });
                      }
                    }}
                  >
                    LOT Polish Airlines Compensation Amounts: €250, €400 or €600 →
                  </Link>
                </li>
              </ul>
            </section>

            {/* FAQ */}
            <section className="mb-12">
              <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-8">
                Frequently Asked Questions
              </h2>
              <div className="space-y-6">
                {[
                  {
                    q: "How much compensation can I get for a delayed flight in Europe?",
                    a: "Under EU Regulation 261/2004, you can receive €250 for flights up to 1,500 km, €400 for flights between 1,500 km and 3,500 km, and €600 for flights over 3,500 km. The compensation applies when your flight arrives more than 3 hours late.",
                  },
                  {
                    q: "Does the price of my ticket affect the EU261 compensation amount?",
                    a: "No. EU261 compensation is a fixed statutory amount based entirely on flight distance. Whether you paid €50 or €500 for your ticket makes no difference to the compensation you are entitled to.",
                  },
                  {
                    q: "Is the compensation reduced for short delays?",
                    a: "Yes — but only in one specific case. For flights between 1,500 km and 3,500 km within the EU, if the airline re-routes you and you arrive within 3 hours of the original time, the compensation is reduced by 50% to €200. For all other situations, you receive the full amount.",
                  },
                  {
                    q: "What delay qualifies for EU261 compensation?",
                    a: "You need to arrive at your final destination at least 3 hours later than the scheduled arrival time. Departure delay alone is not enough — it's the arrival delay that counts.",
                  },
                  {
                    q: "Do I get compensation if the delay is the airline's fault vs extraordinary circumstances?",
                    a: "No compensation is payable if the airline proves the delay was caused by extraordinary circumstances — events outside its control, such as severe weather, air traffic control strikes, or security threats. Technical faults discovered during routine maintenance are generally NOT considered extraordinary.",
                  },
                ].map(({ q, a }) => (
                  <div key={q} className="border-b border-gray-200 dark:border-gray-700 pb-6 last:border-0">
                    <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-3">{q}</h3>
                    <p className="text-gray-600 dark:text-gray-400 leading-relaxed">{a}</p>
                  </div>
                ))}
              </div>
            </section>

            {/* Bottom CTA */}
            <section className="bg-gradient-to-r from-blue-600 to-indigo-600 rounded-2xl p-8 text-white text-center">
              <h2 className="text-2xl font-bold mb-3">Ready to Claim Your €250–€600?</h2>
              <p className="text-blue-100 mb-6 max-w-xl mx-auto">
                ClaimWinger handles everything — from filing to enforcement. Free eligibility check,
                no win no fee. 30% commission only on successful claims.
              </p>
              <Button
                asChild
                size="lg"
                className="bg-white text-blue-600 hover:bg-gray-100"
                onClick={() => trackCTA("Check My Claim Now", "bottom_cta")}
              >
                <a
                  href={`https://claimwinger.com/delayed-flight?utm_source=problemlot.com&utm_medium=article&utm_campaign=${SLUG}&utm_content=cta_bottom`}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Check My Claim Now →
                </a>
              </Button>
            </section>

          </div>
        </div>
      </article>
    </LayoutEn>
  );
}
