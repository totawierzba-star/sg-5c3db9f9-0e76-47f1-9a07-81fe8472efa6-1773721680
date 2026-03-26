import { LayoutEn } from "@/components/LayoutEn";
import { SEO } from "@/components/SEO";
import Link from "next/link";
import { ArrowRight, CheckCircle, XCircle, AlertCircle, Globe } from "lucide-react";
import { Button } from "@/components/ui/button";

const SLUG = "eu261-flights-outside-eu-apply";

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

export default function EU261FlightsOutsideEUApply() {
  const structuredData = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "Article",
        headline: "Does EU261 Apply to Flights Outside the EU?",
        description:
          "EU261 applies to all flights departing from the EU and to flights arriving in the EU on EU-based carriers. Non-EU airlines flying into the EU are not covered. Full eligibility guide with examples.",
        url: "https://problemlot.com/en/blog/eu261-flights-outside-eu-apply",
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
          "@id": "https://problemlot.com/en/blog/eu261-flights-outside-eu-apply",
        },
      },
      {
        "@type": "FAQPage",
        mainEntity: [
          {
            "@type": "Question",
            name: "Does EU261 apply to flights outside the EU?",
            acceptedAnswer: {
              "@type": "Answer",
              text: "It depends on the direction and the airline. EU261 applies to ALL flights departing from an EU airport (any airline) and to flights arriving in the EU operated by an EU-based carrier. If you fly from outside the EU on a non-EU airline arriving in the EU, EU261 does not apply — even though you land in Europe.",
            },
          },
          {
            "@type": "Question",
            name: "Does EU261 apply to my return flight from a non-EU destination?",
            acceptedAnswer: {
              "@type": "Answer",
              text: "Only if your return flight is operated by an EU-based carrier (such as Ryanair, LOT Polish Airlines, Lufthansa, Air France, KLM). If you fly back on a non-EU airline — Emirates from Dubai, Turkish Airlines from Istanbul, or United from New York — EU261 does not cover your return flight.",
            },
          },
          {
            "@type": "Question",
            name: "Does EU261 apply to Emirates flights?",
            acceptedAnswer: {
              "@type": "Answer",
              text: "Partially. EU261 applies to Emirates flights departing from EU airports — for example, Emirates flight from Amsterdam to Dubai is covered. However, Emirates flight from Dubai to Amsterdam is NOT covered by EU261 because Emirates is a non-EU carrier operating from a non-EU airport.",
            },
          },
          {
            "@type": "Question",
            name: "What regulation applies instead of EU261 for non-EU flights?",
            acceptedAnswer: {
              "@type": "Answer",
              text: "The Montreal Convention (1999) applies to most international flights not covered by EU261. It allows claims for proven financial losses caused by delays but does not provide fixed compensation amounts. Some countries have their own passenger protection rules in addition.",
            },
          },
          {
            "@type": "Question",
            name: "Does EU261 apply to transatlantic flights?",
            acceptedAnswer: {
              "@type": "Answer",
              text: "For transatlantic flights, EU261 covers: (1) any flight departing from a European airport to the USA/Canada, regardless of airline, and (2) flights from the USA/Canada to Europe operated by EU-based carriers. A Lufthansa flight New York–Frankfurt is covered; a Delta flight New York–Amsterdam is not.",
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
            name: "Does EU261 Apply to Flights Outside the EU?",
            item: "https://problemlot.com/en/blog/eu261-flights-outside-eu-apply",
          },
        ],
      },
    ],
  };

  return (
    <LayoutEn>
      <SEO
        title="Does EU261 Apply to Flights Outside the EU? | Full Eligibility Guide"
        description="EU261 covers all departures from EU airports and EU-carrier arrivals into the EU. Non-EU airlines flying into Europe are not covered. See exact rules with examples for every route type."
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
            <span className="text-gray-900 dark:text-white">EU261 for Flights Outside the EU</span>
          </div>
        </div>
      </nav>

      {/* Hero */}
      <section className="bg-gradient-to-br from-blue-50 to-indigo-100 dark:from-gray-800 dark:to-gray-900 py-14">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <div className="inline-flex items-center gap-2 bg-blue-100 dark:bg-blue-900/40 text-blue-700 dark:text-blue-300 px-4 py-1.5 rounded-full text-sm font-medium mb-6">
              <Globe className="h-4 w-4" />
              EU Regulation 261/2004 — Global Scope
            </div>
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-6">
              Does EU261 Apply to Flights Outside the EU?
            </h1>
            <p className="text-xl text-gray-700 dark:text-gray-300 mb-8">
              EU261 has a global reach — but with a clear limit. It applies to <strong>all departures from EU airports</strong> and to <strong>arrivals in the EU on EU-based carriers</strong>. If you fly into Europe on Emirates, Turkish Airlines or American Airlines, the regulation does not protect you on that inbound leg. Here is exactly where the line falls.
            </p>
            <Button
              asChild
              size="lg"
              className="bg-blue-600 hover:bg-blue-700 text-white"
              onClick={() => trackCTA("Check if my flight is covered", "hero")}
            >
              <a
                href={`https://claimwinger.com/delayed-flight?utm_source=problemlot.com&utm_medium=article&utm_campaign=${SLUG}&utm_content=cta_hero`}
                target="_blank"
                rel="noopener noreferrer"
              >
                Check If My Flight Is Covered <ArrowRight className="ml-2 h-5 w-5" />
              </a>
            </Button>
          </div>
        </div>
      </section>

      {/* Main article */}
      <article className="py-12">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto">

            {/* The two rules */}
            <section className="mb-10">
              <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">
                The Two Rules That Determine Coverage
              </h2>
              <p className="text-gray-700 dark:text-gray-300 mb-6">
                Article 3 of EU Regulation 261/2004 sets out its geographic scope in two simple rules:
              </p>
              <div className="grid md:grid-cols-2 gap-4 mb-6">
                <div className="bg-green-50 dark:bg-green-900/20 border-2 border-green-400 dark:border-green-700 rounded-xl p-5">
                  <div className="flex items-center gap-2 mb-3">
                    <CheckCircle className="h-6 w-6 text-green-600" />
                    <span className="font-bold text-green-900 dark:text-green-100 text-lg">Rule 1 — Departures</span>
                  </div>
                  <p className="text-green-800 dark:text-green-200 text-sm">
                    <strong>Any flight departing from an EU airport</strong> is covered — regardless of the airline's nationality, destination country, or where the ticket was purchased.
                  </p>
                  <p className="text-xs text-green-700 dark:text-green-300 mt-2">
                    Emirates Warsaw → Dubai ✅ | LOT Warsaw → New York ✅ | Ryanair Dublin → London ✅
                  </p>
                </div>
                <div className="bg-green-50 dark:bg-green-900/20 border-2 border-green-400 dark:border-green-700 rounded-xl p-5">
                  <div className="flex items-center gap-2 mb-3">
                    <CheckCircle className="h-6 w-6 text-green-600" />
                    <span className="font-bold text-green-900 dark:text-green-100 text-lg">Rule 2 — Arrivals (EU carrier only)</span>
                  </div>
                  <p className="text-green-800 dark:text-green-200 text-sm">
                    <strong>A flight arriving in the EU operated by an EU-based carrier</strong> is covered — even if it departs from outside the EU.
                  </p>
                  <p className="text-xs text-green-700 dark:text-green-300 mt-2">
                    LOT New York → Warsaw ✅ | Ryanair London → Warsaw ✅ | Lufthansa Chicago → Frankfurt ✅
                  </p>
                </div>
              </div>
              <div className="bg-red-50 dark:bg-red-900/20 border-2 border-red-400 dark:border-red-700 rounded-xl p-5">
                <div className="flex items-center gap-2 mb-3">
                  <XCircle className="h-6 w-6 text-red-600" />
                  <span className="font-bold text-red-900 dark:text-red-100 text-lg">Not covered — the gap</span>
                </div>
                <p className="text-red-800 dark:text-red-200 text-sm">
                  A flight <strong>arriving in the EU on a non-EU carrier</strong> departing from outside the EU is NOT covered by EU261.
                </p>
                <p className="text-xs text-red-700 dark:text-red-300 mt-2">
                  Emirates Dubai → Amsterdam ❌ | Turkish Airlines Istanbul → Warsaw ❌ | American Airlines New York → London ❌
                </p>
              </div>
            </section>

            {/* Route-by-route table */}
            <section className="mb-10">
              <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">
                EU261 Coverage by Route Type — Quick Reference
              </h2>
              <div className="overflow-x-auto">
                <table className="w-full border-collapse rounded-xl overflow-hidden text-sm">
                  <thead>
                    <tr className="bg-blue-600 text-white">
                      <th className="px-4 py-3 text-left">Route</th>
                      <th className="px-4 py-3 text-left">Airline type</th>
                      <th className="px-4 py-3 text-center">EU261?</th>
                    </tr>
                  </thead>
                  <tbody>
                    {[
                      { route: "EU → anywhere", airline: "Any airline", covered: true },
                      { route: "Non-EU → EU", airline: "EU-based carrier (Ryanair, LOT, Lufthansa…)", covered: true },
                      { route: "Non-EU → EU", airline: "Non-EU carrier (Emirates, Turkish, United…)", covered: false },
                      { route: "Non-EU → Non-EU (connection via EU)", airline: "Any airline", covered: false, note: "The EU stopover alone does not trigger EU261" },
                      { route: "UK → anywhere", airline: "Any airline", covered: false, note: "UK261 applies instead (same rules, enforced by CAA)" },
                      { route: "Non-EU → UK", airline: "UK-based carrier", covered: false, note: "UK261 applies (Jet2, easyJet UK, British Airways)" },
                    ].map((row, i) => (
                      <tr key={i} className={i % 2 === 0 ? "bg-white dark:bg-gray-800" : "bg-gray-50 dark:bg-gray-700"}>
                        <td className="px-4 py-3 font-medium">{row.route}</td>
                        <td className="px-4 py-3 text-gray-600 dark:text-gray-400">
                          {row.airline}
                          {row.note && <span className="block text-xs text-gray-400 dark:text-gray-500 mt-0.5">{row.note}</span>}
                        </td>
                        <td className="px-4 py-3 text-center">
                          {row.covered
                            ? <span className="inline-flex items-center gap-1 text-green-700 dark:text-green-400 font-semibold"><CheckCircle className="h-4 w-4" /> Yes</span>
                            : <span className="inline-flex items-center gap-1 text-red-700 dark:text-red-400 font-semibold"><XCircle className="h-4 w-4" /> No</span>
                          }
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </section>

            {/* Specific airline examples */}
            <section className="mb-10">
              <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">
                Coverage by Airline and Direction — Real Examples
              </h2>
              <div className="space-y-4">
                {[
                  {
                    airline: "Emirates",
                    hub: "Dubai (non-EU)",
                    outbound: { route: "Amsterdam → Dubai", covered: true, why: "Departing from EU airport — any airline is covered" },
                    inbound: { route: "Dubai → Amsterdam", covered: false, why: "Non-EU carrier departing from non-EU airport" },
                  },
                  {
                    airline: "Turkish Airlines",
                    hub: "Istanbul (non-EU)",
                    outbound: { route: "Warsaw → Istanbul", covered: true, why: "Departing from EU airport" },
                    inbound: { route: "Istanbul → Warsaw", covered: false, why: "Non-EU carrier departing from non-EU airport" },
                  },
                  {
                    airline: "LOT Polish Airlines",
                    hub: "Warsaw (EU)",
                    outbound: { route: "Warsaw → New York", covered: true, why: "Departing from EU airport" },
                    inbound: { route: "New York → Warsaw", covered: true, why: "EU-based carrier arriving in EU from non-EU airport" },
                  },
                  {
                    airline: "Ryanair",
                    hub: "Dublin / various EU (EU)",
                    outbound: { route: "Dublin → Marrakech", covered: true, why: "Departing from EU airport" },
                    inbound: { route: "Marrakech → Dublin", covered: true, why: "EU-based carrier arriving in EU" },
                  },
                  {
                    airline: "American Airlines / Delta / United",
                    hub: "USA (non-EU)",
                    outbound: { route: "London/Amsterdam/Frankfurt → New York", covered: true, why: "Departing from EU airport" },
                    inbound: { route: "New York → Amsterdam/Frankfurt", covered: false, why: "Non-EU carrier departing from non-EU airport" },
                  },
                ].map((item, i) => (
                  <div key={i} className="bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-xl overflow-hidden">
                    <div className="bg-gray-100 dark:bg-gray-700 px-5 py-3">
                      <span className="font-bold text-gray-900 dark:text-white">{item.airline}</span>
                      <span className="text-sm text-gray-500 dark:text-gray-400 ml-2">Hub: {item.hub}</span>
                    </div>
                    <div className="grid md:grid-cols-2 divide-y md:divide-y-0 md:divide-x divide-gray-200 dark:divide-gray-700">
                      <div className="p-4">
                        <div className="flex items-center gap-2 mb-1">
                          <CheckCircle className="h-4 w-4 text-green-600 flex-shrink-0" />
                          <span className="font-semibold text-sm text-gray-900 dark:text-white">{item.outbound.route}</span>
                        </div>
                        <p className="text-xs text-gray-500 dark:text-gray-400">{item.outbound.why}</p>
                      </div>
                      <div className="p-4">
                        <div className="flex items-center gap-2 mb-1">
                          {item.inbound.covered
                            ? <CheckCircle className="h-4 w-4 text-green-600 flex-shrink-0" />
                            : <XCircle className="h-4 w-4 text-red-600 flex-shrink-0" />}
                          <span className="font-semibold text-sm text-gray-900 dark:text-white">{item.inbound.route}</span>
                        </div>
                        <p className="text-xs text-gray-500 dark:text-gray-400">{item.inbound.why}</p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </section>

            {/* CTA mid */}
            <div className="bg-blue-600 rounded-2xl p-8 text-center text-white my-10">
              <h3 className="text-2xl font-bold mb-3">Not Sure If Your Flight Is Covered?</h3>
              <p className="text-blue-100 mb-6">
                ClaimWinger assesses your eligibility in 2 minutes — and if you qualify, handles everything from claim submission to legal escalation.
              </p>
              <Button
                asChild
                size="lg"
                className="bg-white text-blue-600 hover:bg-gray-100"
                onClick={() => trackCTA("Check my flight coverage", "mid")}
              >
                <a
                  href={`https://claimwinger.com/delayed-flight?utm_source=problemlot.com&utm_medium=article&utm_campaign=${SLUG}&utm_content=cta_mid`}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Check My Flight Coverage <ArrowRight className="ml-2 h-5 w-5" />
                </a>
              </Button>
            </div>

            {/* What about UK261 */}
            <section className="mb-10">
              <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">
                What About Flights to or from the UK?
              </h2>
              <p className="text-gray-700 dark:text-gray-300 mb-4">
                Since Brexit, UK airports are no longer covered by EU261. The UK has its own equivalent — <strong>UK261</strong> (The Air Passenger Rights and Air Travel Organisers' Licensing (Amendment) (EU Exit) Regulations 2019) — which mirrors EU261 almost exactly.
              </p>
              <div className="grid md:grid-cols-2 gap-4 mb-4">
                <div className="bg-blue-50 dark:bg-blue-900/20 border border-blue-200 dark:border-blue-800 rounded-xl p-4">
                  <h3 className="font-semibold text-blue-900 dark:text-blue-100 mb-2">UK261 applies to:</h3>
                  <ul className="text-sm text-blue-800 dark:text-blue-200 space-y-1">
                    <li className="flex items-start gap-2"><CheckCircle className="h-4 w-4 text-blue-600 mt-0.5 flex-shrink-0" />All flights departing from UK airports (any airline)</li>
                    <li className="flex items-start gap-2"><CheckCircle className="h-4 w-4 text-blue-600 mt-0.5 flex-shrink-0" />Flights arriving in UK on UK-licensed carriers</li>
                  </ul>
                </div>
                <div className="bg-blue-50 dark:bg-blue-900/20 border border-blue-200 dark:border-blue-800 rounded-xl p-4">
                  <h3 className="font-semibold text-blue-900 dark:text-blue-100 mb-2">Key difference:</h3>
                  <p className="text-sm text-blue-800 dark:text-blue-200">
                    Compensation amounts are fixed in sterling: £220, £350, £520. Enforced by the <strong>Civil Aviation Authority (CAA)</strong> rather than an EU national body.
                  </p>
                </div>
              </div>
              <div className="bg-amber-50 dark:bg-amber-900/20 border border-amber-200 dark:border-amber-800 rounded-xl p-4">
                <div className="flex items-start gap-3">
                  <AlertCircle className="h-5 w-5 text-amber-600 mt-0.5 flex-shrink-0" />
                  <p className="text-sm text-amber-800 dark:text-amber-200">
                    <strong>Double coverage scenario:</strong> A flight from Warsaw (EU) to London (UK) is covered by EU261. A flight from London to Warsaw is covered by UK261. Passengers are covered under one or the other — not both simultaneously.
                  </p>
                </div>
              </div>
            </section>

            {/* What if EU261 doesn't apply */}
            <section className="mb-10">
              <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">
                If EU261 Doesn't Apply — What Else Can You Claim?
              </h2>
              <p className="text-gray-700 dark:text-gray-300 mb-4">
                If your flight falls outside EU261's scope, you are not necessarily without options:
              </p>
              <div className="space-y-3">
                <div className="bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-xl p-4">
                  <h3 className="font-semibold text-gray-900 dark:text-white mb-1">Montreal Convention (1999)</h3>
                  <p className="text-sm text-gray-600 dark:text-gray-400">
                    Applies to virtually all international flights. Unlike EU261, it does not provide fixed compensation — but it allows you to claim for <em>proven financial losses</em> caused by delays (missed hotels, business meetings, onward transport). The maximum liability per passenger is approximately 4,694 Special Drawing Rights (~€5,400 at current rates).
                  </p>
                </div>
                <div className="bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-xl p-4">
                  <h3 className="font-semibold text-gray-900 dark:text-white mb-1">Airline's own compensation policy</h3>
                  <p className="text-sm text-gray-600 dark:text-gray-400">
                    Some non-EU airlines — Emirates, Qatar Airways, Etihad — have their own passenger compensation schemes that may provide vouchers, miles, or cash in certain delay situations. These are discretionary, not legally required.
                  </p>
                </div>
                <div className="bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-xl p-4">
                  <h3 className="font-semibold text-gray-900 dark:text-white mb-1">Travel insurance</h3>
                  <p className="text-sm text-gray-600 dark:text-gray-400">
                    If your travel insurance covers flight delays, this may apply regardless of which regulation governs your flight. Check your policy terms for minimum delay thresholds (typically 4–6 hours) and covered expenses.
                  </p>
                </div>
              </div>
            </section>

            {/* Internal links */}
            <div className="bg-gray-50 dark:bg-gray-800 rounded-xl p-6 mb-10 border border-gray-200 dark:border-gray-700">
              <h3 className="font-bold text-gray-900 dark:text-white mb-4">Related Guides</h3>
              <div className="grid md:grid-cols-2 gap-3">
                {[
                  { href: "/en/blog/eu261-non-eu-airlines-does-it-apply", label: "Does EU261 apply to non-EU airlines?" },
                  { href: "/en/blog/how-much-compensation-delayed-flight", label: "How much compensation for a delayed flight?" },
                  { href: "/en/blog/what-counts-flight-delay-eu261", label: "What counts as a flight delay under EU261?" },
                  { href: "/en/blog/extraordinary-circumstances-eu261-definition", label: "What are extraordinary circumstances under EU261?" },
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
                    q: "Does EU261 apply to flights outside the EU?",
                    a: "It depends on direction and airline. EU261 covers all flights departing from EU airports (any airline) and flights arriving in the EU on EU-based carriers. If you fly into Europe on a non-EU airline from a non-EU airport — e.g. Emirates from Dubai or Turkish Airlines from Istanbul — EU261 does not apply to that inbound leg.",
                  },
                  {
                    q: "Does EU261 apply to my return flight from a non-EU destination?",
                    a: "Only if your return flight is operated by an EU-based carrier such as Ryanair, LOT, Lufthansa, Air France, or KLM. If you return on a non-EU airline (Emirates, Turkish Airlines, American Airlines), EU261 does not cover the inbound leg.",
                  },
                  {
                    q: "Does EU261 apply to Emirates flights?",
                    a: "Partially. EU261 covers Emirates flights departing from EU airports — e.g. Amsterdam or Warsaw to Dubai. But Emirates flights arriving in the EU from Dubai are not covered, because Emirates is a non-EU carrier operating from a non-EU airport.",
                  },
                  {
                    q: "What regulation applies instead of EU261 for non-EU flights?",
                    a: "The Montreal Convention (1999) applies to most international flights not covered by EU261. It allows claims for proven financial losses from delays but has no fixed compensation amounts. Some airlines also have their own voluntary compensation schemes.",
                  },
                  {
                    q: "Does EU261 apply to transatlantic flights?",
                    a: "EU261 covers any flight departing from a European airport to the USA or Canada, regardless of airline. It also covers transatlantic flights to Europe operated by EU-based carriers (e.g. Lufthansa New York–Frankfurt). Flights to Europe operated by US carriers (Delta, American, United) are not covered on the inbound leg.",
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
              <h3 className="text-2xl font-bold mb-3">Ready to Check Your Flight?</h3>
              <p className="text-blue-100 mb-6 max-w-xl mx-auto">
                Whether your flight departed from Europe or you flew back on an EU carrier, you may be owed up to €600. ClaimWinger checks instantly — no win, no fee. 30% commission only on success (+ VAT for Polish residents).
              </p>
              <Button
                asChild
                size="lg"
                className="bg-white text-blue-600 hover:bg-gray-100"
                onClick={() => trackCTA("Check my EU261 eligibility", "bottom")}
              >
                <a
                  href={`https://claimwinger.com/delayed-flight?utm_source=problemlot.com&utm_medium=article&utm_campaign=${SLUG}&utm_content=cta_bottom`}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Check My EU261 Eligibility <ArrowRight className="ml-2 h-5 w-5" />
                </a>
              </Button>
            </div>

          </div>
        </div>
      </article>
    </LayoutEn>
  );
}
