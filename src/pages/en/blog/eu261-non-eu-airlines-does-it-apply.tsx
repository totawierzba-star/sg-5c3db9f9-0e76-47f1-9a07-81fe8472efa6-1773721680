import { LayoutEn } from "@/components/LayoutEn";
import { SEO } from "@/components/SEO";
import Link from "next/link";
import { ArrowRight, CheckCircle, XCircle, AlertCircle } from "lucide-react";
import { Button } from "@/components/ui/button";

const SLUG = "eu261-non-eu-airlines-does-it-apply";

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

const airlines = [
  { name: "Ryanair", flag: "🇮🇪", country: "Ireland (EU)", depEU: true, arrEU: true, note: "EU airline — always covered" },
  { name: "Wizz Air", flag: "🇭🇺", country: "Hungary (EU)", depEU: true, arrEU: true, note: "EU airline — always covered" },
  { name: "Lufthansa", flag: "🇩🇪", country: "Germany (EU)", depEU: true, arrEU: true, note: "EU airline — always covered" },
  { name: "LOT Polish Airlines", flag: "🇵🇱", country: "Poland (EU)", depEU: true, arrEU: true, note: "EU airline — always covered" },
  { name: "Turkish Airlines", flag: "🇹🇷", country: "Türkiye (non-EU)", depEU: true, arrEU: false, note: "Covered only when departing FROM EU" },
  { name: "Emirates", flag: "🇦🇪", country: "UAE (non-EU)", depEU: true, arrEU: false, note: "Covered only when departing FROM EU" },
  { name: "Qatar Airways", flag: "🇶🇦", country: "Qatar (non-EU)", depEU: true, arrEU: false, note: "Covered only when departing FROM EU" },
  { name: "United Airlines", flag: "🇺🇸", country: "USA (non-EU)", depEU: true, arrEU: false, note: "Covered only when departing FROM EU" },
  { name: "American Airlines", flag: "🇺🇸", country: "USA (non-EU)", depEU: true, arrEU: false, note: "Covered only when departing FROM EU" },
  { name: "Air Canada", flag: "🇨🇦", country: "Canada (non-EU)", depEU: true, arrEU: false, note: "Covered only when departing FROM EU" },
];

export default function Eu261NonEuAirlinesDoesItApply() {
  const structuredData = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "Article",
        headline: "Does EU261 Apply to Non-EU Airlines?",
        description:
          "EU Regulation 261/2004 applies to ALL airlines when flying from an EU airport. Non-EU airlines (Emirates, Turkish, United) are covered only on departures from EU territory.",
        url: "https://problemlot.com/en/blog/eu261-non-eu-airlines-does-it-apply",
        datePublished: "2025-03-07",
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
          "@id": "https://problemlot.com/en/blog/eu261-non-eu-airlines-does-it-apply",
        },
      },
      {
        "@type": "FAQPage",
        mainEntity: [
          {
            "@type": "Question",
            name: "Does EU261 apply to non-EU airlines like Emirates or Turkish Airlines?",
            acceptedAnswer: {
              "@type": "Answer",
              text: "Yes — but only for flights departing from an EU airport. If your Emirates or Turkish Airlines flight departs from, say, Frankfurt or Warsaw, EU261 applies. If it departs from Dubai or Istanbul, EU261 does not apply (unless the operating airline is an EU carrier).",
            },
          },
          {
            "@type": "Question",
            name: "Does EU261 apply to flights from the UK after Brexit?",
            acceptedAnswer: {
              "@type": "Answer",
              text: "The UK has retained equivalent rules under UK Regulation 261/2004 (UK261). Flights departing UK airports are covered by UK261. UK-based carriers (British Airways, easyJet UK) are covered on flights into the UK. The compensation amounts are identical: £220, £350, and £520.",
            },
          },
          {
            "@type": "Question",
            name: "I flew with a non-EU airline from outside the EU — what are my rights?",
            acceptedAnswer: {
              "@type": "Answer",
              text: "EU261 does not apply. You may have rights under the Montreal Convention (for delays causing financial loss), the airline's own conditions of carriage, or the consumer protection rules of the country where the flight departed.",
            },
          },
          {
            "@type": "Question",
            name: "What if I booked with an EU airline but the actual flight was operated by a non-EU carrier?",
            acceptedAnswer: {
              "@type": "Answer",
              text: "EU261 places responsibility on the 'operating carrier' — the airline that actually flies the plane. If you booked with a codeshare partner that is an EU airline but the operating carrier is non-EU, it depends on where the flight departs from. If it departs from the EU, EU261 still applies.",
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
            name: "Does EU261 Apply to Non-EU Airlines?",
            item: "https://problemlot.com/en/blog/eu261-non-eu-airlines-does-it-apply",
          },
        ],
      },
    ],
  };

  return (
    <LayoutEn>
      <SEO
        title="Does EU261 Apply to Non-EU Airlines? Emirates, Turkish, United | problemlot.com"
        description="EU261 applies to ALL airlines departing from EU airports — including Emirates, Turkish Airlines, and United. Non-EU airlines are NOT covered on flights into the EU."
        url="https://problemlot.com/en/blog/eu261-non-eu-airlines-does-it-apply"
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
            <li className="text-gray-900 dark:text-white truncate">Does EU261 Apply to Non-EU Airlines?</li>
          </ol>
        </div>
      </nav>

      {/* Hero */}
      <section className="bg-gradient-to-br from-blue-50 to-indigo-100 dark:from-gray-800 dark:to-gray-900 py-14">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto">
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-6 leading-tight">
              Does EU261 Apply to Non-EU Airlines?
            </h1>
            <p className="text-xl text-gray-700 dark:text-gray-300 leading-relaxed">
              <strong>Short answer:</strong> Yes — but only for flights <em>departing from</em> an EU airport.
              Emirates flying Frankfurt–Dubai: covered. Emirates flying Dubai–Frankfurt: not covered.
              Here is the full breakdown.
            </p>
          </div>
        </div>
      </section>

      <article className="py-12">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto">

            {/* The core rule */}
            <section className="mb-12">
              <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-6">
                The Core Rule: Two Tests, Both Must Pass
              </h2>
              <p className="text-gray-700 dark:text-gray-300 mb-6 leading-relaxed">
                EU Regulation 261/2004 applies to a flight if <strong>at least one</strong> of the following is true:
              </p>
              <div className="space-y-4 mb-6">
                <div className="flex items-start gap-4 bg-green-50 dark:bg-green-900/20 rounded-xl p-5 border border-green-200 dark:border-green-800">
                  <CheckCircle className="h-6 w-6 text-green-600 mt-0.5 flex-shrink-0" />
                  <div>
                    <p className="font-semibold text-gray-900 dark:text-white mb-1">
                      Test 1: The flight departs from an EU member state airport
                    </p>
                    <p className="text-sm text-gray-600 dark:text-gray-400">
                      This applies to <strong>any airline</strong> — EU or non-EU. If your flight takes off from
                      Paris CDG, Amsterdam AMS, Warsaw WAW, Barcelona BCN, etc., EU261 applies regardless
                      of who operates the flight.
                    </p>
                  </div>
                </div>
                <div className="flex items-start gap-4 bg-blue-50 dark:bg-blue-900/20 rounded-xl p-5 border border-blue-200 dark:border-blue-800">
                  <CheckCircle className="h-6 w-6 text-blue-600 mt-0.5 flex-shrink-0" />
                  <div>
                    <p className="font-semibold text-gray-900 dark:text-white mb-1">
                      Test 2: The flight arrives in the EU and is operated by an EU-licensed carrier
                    </p>
                    <p className="text-sm text-gray-600 dark:text-gray-400">
                      This only covers EU airlines (Ryanair, Wizz Air, Lufthansa, LOT, etc.) on inbound
                      flights from outside the EU. A Ryanair flight from New York to London Stansted:
                      covered. An Emirates flight from Dubai to Paris: not covered by EU261.
                    </p>
                  </div>
                </div>
              </div>
              <div className="bg-amber-50 dark:bg-amber-900/20 border border-amber-200 dark:border-amber-700 rounded-xl p-5">
                <div className="flex items-start gap-3">
                  <AlertCircle className="h-5 w-5 text-amber-600 mt-0.5 flex-shrink-0" />
                  <p className="text-sm text-gray-700 dark:text-gray-300">
                    <strong>UK after Brexit:</strong> Flights departing UK airports are covered by the UK's
                    equivalent regulation, UK261, with identical compensation amounts (£220 / £350 / £520).
                    Non-EU, non-UK airlines are covered on UK departures only.
                  </p>
                </div>
              </div>
            </section>

            {/* Airline eligibility table */}
            <section className="mb-12">
              <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-6">
                Which Airlines Are Covered — Quick Reference
              </h2>
              <div className="overflow-x-auto rounded-xl border border-gray-200 dark:border-gray-700">
                <table className="w-full text-sm">
                  <thead>
                    <tr className="bg-gray-100 dark:bg-gray-800">
                      <th className="px-4 py-3 text-left font-semibold text-gray-700 dark:text-gray-300">Airline</th>
                      <th className="px-4 py-3 text-left font-semibold text-gray-700 dark:text-gray-300">Registration</th>
                      <th className="px-4 py-3 text-center font-semibold text-gray-700 dark:text-gray-300">Flight FROM EU</th>
                      <th className="px-4 py-3 text-center font-semibold text-gray-700 dark:text-gray-300">Flight TO EU only</th>
                    </tr>
                  </thead>
                  <tbody>
                    {airlines.map((a, i) => (
                      <tr
                        key={a.name}
                        className={`border-b border-gray-100 dark:border-gray-800 ${i % 2 === 0 ? "bg-white dark:bg-gray-900" : "bg-gray-50 dark:bg-gray-800/50"}`}
                      >
                        <td className="px-4 py-3 font-medium text-gray-900 dark:text-white">
                          {a.flag} {a.name}
                        </td>
                        <td className="px-4 py-3 text-gray-600 dark:text-gray-400">{a.country}</td>
                        <td className="px-4 py-3 text-center">
                          <CheckCircle className="h-5 w-5 text-green-600 mx-auto" />
                        </td>
                        <td className="px-4 py-3 text-center">
                          {a.arrEU ? (
                            <CheckCircle className="h-5 w-5 text-green-600 mx-auto" />
                          ) : (
                            <XCircle className="h-5 w-5 text-red-500 mx-auto" />
                          )}
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
              <p className="text-xs text-gray-500 dark:text-gray-400 mt-3">
                ✓ = EU261 applies. ✗ = EU261 does NOT apply (flight arriving in EU on non-EU airline). UK flights: UK261 applies on the same terms.
              </p>
            </section>

            {/* CTA mid */}
            <div className="bg-blue-600 rounded-2xl p-8 text-white mb-12 text-center">
              <h3 className="text-2xl font-bold mb-3">Not Sure If Your Flight Is Covered?</h3>
              <p className="text-blue-100 mb-6">
                ClaimWinger checks eligibility for free. You only pay if your claim succeeds —
                30% commission (+ VAT for Polish residents; VAT 0% for other EU/non-EU passengers).
              </p>
              <Button
                asChild
                size="lg"
                className="bg-white text-blue-600 hover:bg-gray-100"
                onClick={() => trackCTA("Check Eligibility Free", "mid_article")}
              >
                <a
                  href={`https://claimwinger.com/delayed-flight?utm_source=problemlot.com&utm_medium=article&utm_campaign=${SLUG}&utm_content=cta_mid`}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Check Eligibility Free <ArrowRight className="ml-2 h-5 w-5" />
                </a>
              </Button>
            </div>

            {/* Specific airline deep dives */}
            <section className="mb-12">
              <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-8">
                Common Non-EU Airlines: Exactly When EU261 Applies
              </h2>

              {[
                {
                  name: "Turkish Airlines",
                  flag: "🇹🇷",
                  covered: "Istanbul–Frankfurt (THY) ❌ | Frankfurt–Istanbul (THY) ✅",
                  detail:
                    "Turkish Airlines is registered in Türkiye, a non-EU country. EU261 applies only when the flight departs from the EU. Millions of passengers fly Turkish Airlines routes from EU airports to Istanbul (IST) and beyond — those outbound legs are fully covered. The return leg, IST–EU, is not.",
                },
                {
                  name: "Emirates",
                  flag: "🇦🇪",
                  covered: "Dubai–Amsterdam (EK) ❌ | Amsterdam–Dubai (EK) ✅",
                  detail:
                    "Emirates flights departing any EU airport — Frankfurt, Amsterdam, Paris, Rome, Madrid — are covered by EU261. Emirates flights arriving in the EU from Dubai are not, because Emirates is a UAE-registered carrier and the flight departs outside the EU.",
                },
                {
                  name: "Qatar Airways",
                  flag: "🇶🇦",
                  covered: "Doha–Warsaw (QR) ❌ | Warsaw–Doha (QR) ✅",
                  detail:
                    "Same logic as Emirates. Qatar Airways flights departing EU airports are subject to EU261. Their flights from Doha Hamad (DOH) arriving in the EU are not — despite Doha being a major hub used by many EU passengers.",
                },
                {
                  name: "United / American / Delta",
                  flag: "🇺🇸",
                  covered: "New York–London (UA) ❌ | Paris–New York (UA) ✅",
                  detail:
                    "US carriers are covered when the flight departs from an EU airport. A United Airlines flight from Paris CDG to JFK is subject to EU261. The same airline's return flight from JFK to Paris is not (unless LOT or another EU carrier is the operating carrier on that leg).",
                },
              ].map(({ name, flag, covered, detail }) => (
                <div key={name} className="mb-8 border border-gray-200 dark:border-gray-700 rounded-xl overflow-hidden">
                  <div className="bg-gray-50 dark:bg-gray-800 px-6 py-4 flex items-center gap-3">
                    <span className="text-2xl">{flag}</span>
                    <h3 className="text-xl font-bold text-gray-900 dark:text-white">{name}</h3>
                  </div>
                  <div className="px-6 py-5">
                    <p className="font-mono text-sm bg-gray-100 dark:bg-gray-900 rounded-lg px-4 py-3 mb-4 text-gray-700 dark:text-gray-300">
                      {covered}
                    </p>
                    <p className="text-gray-600 dark:text-gray-400 text-sm leading-relaxed">{detail}</p>
                  </div>
                </div>
              ))}
            </section>

            {/* Codeshare note */}
            <section className="mb-12">
              <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-6">
                Codeshare and Interline Flights
              </h2>
              <p className="text-gray-700 dark:text-gray-300 mb-4 leading-relaxed">
                Codeshare flights add a layer of complexity. EU261 places responsibility on the
                <strong> operating carrier</strong> — the airline that physically operates the flight —
                not the airline that sold you the ticket.
              </p>
              <div className="bg-gray-50 dark:bg-gray-800 rounded-xl p-6">
                <p className="font-semibold text-gray-900 dark:text-white mb-3">Example:</p>
                <p className="text-sm text-gray-600 dark:text-gray-400 leading-relaxed">
                  You book a LOT Polish Airlines (EU carrier) ticket Warsaw–New York. The ticket
                  shows a LOT flight number, but the aircraft is actually operated by United Airlines.
                  The flight departs Warsaw (EU airport). Because it departs from the EU, EU261 applies
                  regardless of which airline physically operates it. Your claim goes to the operating
                  carrier (United), but LOT as the contracting carrier may also bear responsibility —
                  courts have ruled both ways.
                </p>
              </div>
              <p className="text-sm text-gray-500 dark:text-gray-400 mt-4">
                See also:{" "}
                <Link
                  href="/en/blog/lot-polish-airlines-delay-compensation-guide"
                  className="text-blue-600 dark:text-blue-400 hover:underline"
                  onClick={() => {
                    if (typeof window !== "undefined" && window.dataLayer) {
                      window.dataLayer.push({ event: "internal_link_click", destination: "lot-polish-airlines-delay-compensation-guide", from: SLUG });
                    }
                  }}
                >
                  LOT Polish Airlines Delay Compensation Guide
                </Link>
              </p>
            </section>

            {/* What if not covered */}
            <section className="mb-12">
              <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-6">
                What If EU261 Does Not Apply to Your Flight?
              </h2>
              <p className="text-gray-700 dark:text-gray-300 mb-4 leading-relaxed">
                If your flight is not covered by EU261 (e.g., a non-EU airline flying into the EU from
                outside), you may still have options:
              </p>
              <div className="space-y-4">
                <div className="flex items-start gap-4 bg-gray-50 dark:bg-gray-800 rounded-xl p-5">
                  <div className="flex-shrink-0 w-8 h-8 rounded-full bg-blue-100 dark:bg-blue-900 flex items-center justify-center text-blue-600 font-bold text-sm">1</div>
                  <div>
                    <p className="font-semibold text-gray-900 dark:text-white mb-1">Montreal Convention</p>
                    <p className="text-sm text-gray-600 dark:text-gray-400">
                      Covers financial losses caused by flight delays (missed events, accommodation, transport)
                      for all international flights. The claim amount is capped but flexible.
                    </p>
                  </div>
                </div>
                <div className="flex items-start gap-4 bg-gray-50 dark:bg-gray-800 rounded-xl p-5">
                  <div className="flex-shrink-0 w-8 h-8 rounded-full bg-blue-100 dark:bg-blue-900 flex items-center justify-center text-blue-600 font-bold text-sm">2</div>
                  <div>
                    <p className="font-semibold text-gray-900 dark:text-white mb-1">Airline's own policy</p>
                    <p className="text-sm text-gray-600 dark:text-gray-400">
                      Many non-EU airlines have their own compensation policies that may be equal to or
                      more generous than EU261. Check the airline's conditions of carriage.
                    </p>
                  </div>
                </div>
                <div className="flex items-start gap-4 bg-gray-50 dark:bg-gray-800 rounded-xl p-5">
                  <div className="flex-shrink-0 w-8 h-8 rounded-full bg-blue-100 dark:bg-blue-900 flex items-center justify-center text-blue-600 font-bold text-sm">3</div>
                  <div>
                    <p className="font-semibold text-gray-900 dark:text-white mb-1">Local consumer protection laws</p>
                    <p className="text-sm text-gray-600 dark:text-gray-400">
                      Some destination countries have their own passenger rights regulations. The USA has DOT
                      rules for domestic flights; Canada has APPR; Brazil has ANAC rules.
                    </p>
                  </div>
                </div>
              </div>
            </section>

            {/* Internal links */}
            <section className="mb-12 bg-gray-50 dark:bg-gray-800 rounded-xl p-6">
              <h3 className="text-lg font-bold text-gray-900 dark:text-white mb-4">Related Articles</h3>
              <ul className="space-y-3">
                <li>
                  <Link
                    href="/en/blog/how-much-compensation-delayed-flight"
                    className="text-blue-600 dark:text-blue-400 hover:underline text-sm"
                    onClick={() => {
                      if (typeof window !== "undefined" && window.dataLayer) {
                        window.dataLayer.push({ event: "internal_link_click", destination: "how-much-compensation-delayed-flight", from: SLUG });
                      }
                    }}
                  >
                    How Much Compensation for a Delayed Flight? €250, €400 or €600 →
                  </Link>
                </li>
                <li>
                  <Link
                    href="/en/blog/turkish-airlines-compensation-eu261-europe"
                    className="text-blue-600 dark:text-blue-400 hover:underline text-sm"
                  >
                    Turkish Airlines Compensation — When Does EU261 Apply? →
                  </Link>
                </li>
                <li>
                  <Link
                    href="/en/blog/emirates-compensation-eu261-eu-airports"
                    className="text-blue-600 dark:text-blue-400 hover:underline text-sm"
                  >
                    Emirates Compensation — EU261 from EU Airports Only →
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
                    q: "Does EU261 apply to non-EU airlines like Emirates or Turkish Airlines?",
                    a: "Yes — but only for flights departing from an EU airport. If your Emirates or Turkish Airlines flight departs from Frankfurt or Warsaw, EU261 applies. If it departs from Dubai or Istanbul, EU261 does not apply.",
                  },
                  {
                    q: "Does EU261 apply to flights from the UK after Brexit?",
                    a: "The UK has retained equivalent rules under UK Regulation 261/2004 (UK261). Flights departing UK airports are covered by UK261. UK-based carriers (British Airways, easyJet UK) are covered on flights into the UK. The compensation amounts are identical: £220, £350, and £520.",
                  },
                  {
                    q: "I flew with a non-EU airline from outside the EU — what are my rights?",
                    a: "EU261 does not apply. You may have rights under the Montreal Convention (for delays causing financial loss), the airline's own conditions of carriage, or consumer protection rules of the departure country.",
                  },
                  {
                    q: "What if I booked with an EU airline but the flight was operated by a non-EU carrier?",
                    a: "EU261 places responsibility on the operating carrier. If the flight departs from the EU, EU261 still applies regardless of whether the operator is EU or non-EU. Your claim goes to the operating carrier.",
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
              <h2 className="text-2xl font-bold mb-3">Check If Your Flight Is Covered</h2>
              <p className="text-blue-100 mb-6 max-w-xl mx-auto">
                ClaimWinger verifies EU261 and UK261 eligibility across all airlines and routes.
                Free check, no win no fee — 30% commission on successful claims only.
              </p>
              <Button
                asChild
                size="lg"
                className="bg-white text-blue-600 hover:bg-gray-100"
                onClick={() => trackCTA("Check My Flight Now", "bottom_cta")}
              >
                <a
                  href={`https://claimwinger.com/delayed-flight?utm_source=problemlot.com&utm_medium=article&utm_campaign=${SLUG}&utm_content=cta_bottom`}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Check My Flight Now →
                </a>
              </Button>
            </section>

          </div>
        </div>
      </article>
    </LayoutEn>
  );
}
