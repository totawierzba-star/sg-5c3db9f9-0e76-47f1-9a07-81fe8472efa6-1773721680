import { LayoutEn } from "@/components/LayoutEn";
import { SEO } from "@/components/SEO";
import Link from "next/link";
import { ArrowRight, CheckCircle, XCircle, AlertCircle, Shield, Clock, Plane } from "lucide-react";
import { Button } from "@/components/ui/button";

const SLUG = "eu261-complete-guide-passenger-rights";

function trackCTA(label: string, position: string) {
  if (typeof window !== "undefined" && (window as any).dataLayer) {
    (window as any).dataLayer.push({
      event: "outbound_cta_click",
      cta_text: label,
      destination: "claimwinger.com",
      position,
      page_slug: SLUG,
    });
  }
}

export default function Eu261CompleteGuide() {
  const schema = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "Article",
        headline: "EU261 Complete Guide 2026 — Your Rights for Every Flight Scenario",
        description:
          "The definitive guide to EU Regulation 261/2004. Covers compensation amounts, eligibility rules, extraordinary circumstances, care rights, and how to claim for delays, cancellations, and denied boarding.",
        url: `https://problemlot.com/en/blog/${SLUG}`,
        datePublished: "2026-03-26",
        dateModified: "2026-03-26",
        author: { "@type": "Organization", name: "ProblemLot.com" },
        publisher: {
          "@type": "Organization",
          name: "ProblemLot.com",
          url: "https://problemlot.com",
        },
      },
      {
        "@type": "FAQPage",
        mainEntity: [
          {
            "@type": "Question",
            name: "What is EU Regulation 261/2004?",
            acceptedAnswer: {
              "@type": "Answer",
              text: "EU Regulation 261/2004 (commonly called EU261) is a European law that entitles air passengers to compensation of up to €600, care rights, and refunds when flights are significantly delayed, cancelled, or when passengers are denied boarding. It applies to all flights departing EU airports and to EU-carrier flights arriving into the EU.",
            },
          },
          {
            "@type": "Question",
            name: "How much compensation can I get under EU261?",
            acceptedAnswer: {
              "@type": "Answer",
              text: "EU261 compensation is €250 for flights up to 1,500 km, €400 for flights between 1,500 and 3,500 km, and €600 for flights over 3,500 km. For non-EU flights over 3,500 km within Europe, the amount is €400. These amounts may be halved if the airline offers re-routing with a short additional delay.",
            },
          },
          {
            "@type": "Question",
            name: "Does EU261 apply to my flight?",
            acceptedAnswer: {
              "@type": "Answer",
              text: "EU261 applies if: (1) your flight departed from an EU airport (any airline), or (2) your flight arrived into an EU airport on an EU-based carrier. It does not apply to non-EU carriers on flights arriving into the EU from outside the EU. UK flights are covered by UK261, which has identical rules.",
            },
          },
          {
            "@type": "Question",
            name: "What is the difference between compensation and a refund under EU261?",
            acceptedAnswer: {
              "@type": "Answer",
              text: "A refund under Article 8 returns the cost of your unused ticket when a flight is cancelled or severely delayed and you choose not to travel. Compensation under Article 7 is an additional cash payment (€250–€600) for the inconvenience of the delay or cancellation. Both can be claimed simultaneously for a cancelled flight.",
            },
          },
          {
            "@type": "Question",
            name: "How long do I have to claim EU261 compensation?",
            acceptedAnswer: {
              "@type": "Answer",
              text: "There is no single EU-wide limitation period. Each country sets its own: Poland 1 year, Germany 3 years, France 5 years, UK 6 years, Ireland 6 years. The limitation period of the country where the airline is based, or the country of departure, generally applies. Always check before your deadline passes.",
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
            name: "EU261 Complete Guide 2026",
            item: `https://problemlot.com/en/blog/${SLUG}`,
          },
        ],
      },
    ],
  };

  return (
    <LayoutEn>
      <SEO
        title="EU261 Complete Guide 2026 — Your Rights for Every Flight Scenario"
        description="The definitive EU261 guide: compensation amounts, eligibility, care rights, extraordinary circumstances, how to claim, and country-by-country deadlines. Updated 2026."
        canonicalUrl={`https://problemlot.com/en/blog/${SLUG}`}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
      />

      {/* Breadcrumb */}
      <div className="bg-gray-50 dark:bg-gray-900 border-b border-gray-200 dark:border-gray-700">
        <div className="max-w-4xl mx-auto px-4 py-3">
          <nav className="flex items-center gap-2 text-sm text-gray-500 dark:text-gray-400">
            <Link href="/en" className="hover:text-blue-600 dark:hover:text-blue-400">Home</Link>
            <span>/</span>
            <Link href="/en/blog" className="hover:text-blue-600 dark:hover:text-blue-400">Blog</Link>
            <span>/</span>
            <span className="text-gray-900 dark:text-gray-100 font-medium">EU261 Complete Guide</span>
          </nav>
        </div>
      </div>

      {/* Hero */}
      <div className="bg-gradient-to-br from-blue-50 to-indigo-50 dark:from-blue-950 dark:to-indigo-950 border-b border-blue-100 dark:border-blue-900">
        <div className="max-w-4xl mx-auto px-4 py-12">
          <div className="flex items-center gap-2 mb-4">
            <span className="bg-blue-100 dark:bg-blue-900 text-blue-700 dark:text-blue-300 text-xs font-semibold px-3 py-1 rounded-full uppercase tracking-wide">
              Regulation
            </span>
            <span className="text-gray-500 dark:text-gray-400 text-sm">Updated 2026 · 18 min read</span>
          </div>
          <h1 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-gray-100 mb-4 leading-tight">
            EU261 Complete Guide 2026 — Your Rights for Every Flight Scenario
          </h1>
          <p className="text-xl text-gray-600 dark:text-gray-300 mb-6 leading-relaxed">
            EU Regulation 261/2004 entitles you to up to €600 compensation when flights go wrong. This guide covers every scenario — delays, cancellations, denied boarding, missed connections — with the exact rules, amounts, and claim process.
          </p>
          {/* Quick-reference boxes */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
            {[
              { label: "Max compensation", value: "€600", color: "blue" },
              { label: "Delay threshold", value: "3 hours", color: "green" },
              { label: "Flights covered", value: "EU departures + EU carriers", color: "purple" },
              { label: "Vouchers required?", value: "No — cash is default", color: "orange" },
            ].map((box) => (
              <div key={box.label} className={`bg-white dark:bg-gray-800 border border-${box.color}-200 dark:border-${box.color}-800 rounded-xl p-3 text-center shadow-sm`}>
                <div className={`text-lg font-bold text-${box.color}-700 dark:text-${box.color}-300`}>{box.value}</div>
                <div className="text-xs text-gray-500 dark:text-gray-400 mt-0.5">{box.label}</div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Table of Contents */}
      <div className="bg-white dark:bg-gray-800 border-b border-gray-200 dark:border-gray-700">
        <div className="max-w-4xl mx-auto px-4 py-6">
          <h2 className="text-sm font-semibold text-gray-500 dark:text-gray-400 uppercase tracking-wide mb-3">Contents</h2>
          <div className="grid md:grid-cols-2 gap-1 text-sm">
            {[
              ["1", "What is EU261?"],
              ["2", "Which flights are covered?"],
              ["3", "Compensation amounts"],
              ["4", "Flight delays"],
              ["5", "Cancellations"],
              ["6", "Denied boarding"],
              ["7", "Missed connections"],
              ["8", "Care rights (meals, hotel)"],
              ["9", "Extraordinary circumstances"],
              ["10", "How to claim"],
              ["11", "Limitation periods"],
              ["12", "UK261 after Brexit"],
            ].map(([num, title]) => (
              <div key={num} className="flex items-center gap-2 text-blue-600 dark:text-blue-400 hover:underline py-0.5">
                <span className="text-gray-400 dark:text-gray-600 font-mono text-xs w-4">{num}.</span>
                <span>{title}</span>
              </div>
            ))}
          </div>
        </div>
      </div>

      <div className="max-w-4xl mx-auto px-4 py-12 space-y-14">

        {/* Section 1 — What is EU261 */}
        <section id="what-is-eu261">
          <h2 className="text-2xl font-bold text-gray-900 dark:text-gray-100 mb-4">
            1. What Is EU Regulation 261/2004?
          </h2>
          <p className="text-gray-700 dark:text-gray-300 mb-4">
            EU Regulation 261/2004, in force since February 2005, is the primary European law governing passenger rights when flights are disrupted. It creates standardised, statutory entitlements that airlines cannot contractually override — no matter what the small print says.
          </p>
          <p className="text-gray-700 dark:text-gray-300 mb-4">
            The regulation covers three core disruption types:
          </p>
          <div className="grid md:grid-cols-3 gap-4 mb-4">
            {[
              { icon: <Clock className="w-6 h-6" />, title: "Long delays", desc: "3+ hours at arrival trigger cash compensation", color: "blue" },
              { icon: <XCircle className="w-6 h-6" />, title: "Cancellations", desc: "Less than 14 days' notice triggers full rights", color: "red" },
              { icon: <AlertCircle className="w-6 h-6" />, title: "Denied boarding", desc: "Overbooking or other involuntary bumping", color: "orange" },
            ].map((item) => (
              <div key={item.title} className={`bg-${item.color}-50 dark:bg-${item.color}-950 border border-${item.color}-200 dark:border-${item.color}-800 rounded-xl p-4 text-center`}>
                <div className={`text-${item.color}-600 dark:text-${item.color}-400 flex justify-center mb-2`}>{item.icon}</div>
                <h3 className="font-semibold text-gray-900 dark:text-gray-100 mb-1">{item.title}</h3>
                <p className="text-xs text-gray-600 dark:text-gray-400">{item.desc}</p>
              </div>
            ))}
          </div>
          <p className="text-gray-700 dark:text-gray-300">
            The regulation also provides <strong>care rights</strong> — meals, accommodation, and communication — during long waits at the airport, regardless of whether compensation is payable.
          </p>
        </section>

        {/* Section 2 — Coverage */}
        <section id="coverage">
          <h2 className="text-2xl font-bold text-gray-900 dark:text-gray-100 mb-4">
            2. Which Flights Are Covered by EU261?
          </h2>
          <p className="text-gray-700 dark:text-gray-300 mb-6">
            EU261 uses two rules to determine coverage. A flight is covered if either rule applies:
          </p>
          <div className="space-y-4 mb-6">
            <div className="bg-green-50 dark:bg-green-950 border border-green-200 dark:border-green-800 rounded-xl p-5">
              <h3 className="font-bold text-green-800 dark:text-green-300 mb-2 flex items-center gap-2">
                <CheckCircle className="w-5 h-5" /> Rule 1 — Departure from an EU airport
              </h3>
              <p className="text-gray-700 dark:text-gray-300 text-sm">
                Any flight departing from an EU/EEA airport is covered — <strong>regardless of which airline operates it</strong>. This means Emirates, Turkish Airlines, United, and all other non-EU carriers are bound by EU261 when their flights depart from, say, Amsterdam, Warsaw, or Madrid.
              </p>
            </div>
            <div className="bg-blue-50 dark:bg-blue-950 border border-blue-200 dark:border-blue-800 rounded-xl p-5">
              <h3 className="font-bold text-blue-800 dark:text-blue-300 mb-2 flex items-center gap-2">
                <CheckCircle className="w-5 h-5" /> Rule 2 — EU carrier arriving into the EU
              </h3>
              <p className="text-gray-700 dark:text-gray-300 text-sm">
                A flight operated by an EU-based carrier arriving at an EU airport from outside the EU is also covered. Lufthansa JFK → Frankfurt: covered. Emirates JFK → Amsterdam: not covered (non-EU carrier on inbound leg).
              </p>
            </div>
          </div>
          <div className="overflow-x-auto rounded-xl border border-gray-200 dark:border-gray-700">
            <table className="w-full text-sm">
              <thead className="bg-gray-50 dark:bg-gray-800">
                <tr>
                  <th className="px-4 py-3 text-left font-semibold text-gray-700 dark:text-gray-300">Route type</th>
                  <th className="px-4 py-3 text-left font-semibold text-gray-700 dark:text-gray-300">EU carrier</th>
                  <th className="px-4 py-3 text-left font-semibold text-gray-700 dark:text-gray-300">Non-EU carrier</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-100 dark:divide-gray-700">
                {[
                  { route: "EU → EU", eu: true, nonEu: true },
                  { route: "EU → Non-EU (e.g. Warsaw → New York)", eu: true, nonEu: true },
                  { route: "Non-EU → EU (e.g. New York → Warsaw)", eu: true, nonEu: false },
                  { route: "Non-EU → Non-EU", eu: false, nonEu: false },
                ].map((row, i) => (
                  <tr key={i} className={i % 2 === 0 ? "bg-white dark:bg-gray-900" : "bg-gray-50 dark:bg-gray-800"}>
                    <td className="px-4 py-3 font-medium text-gray-900 dark:text-gray-100">{row.route}</td>
                    <td className="px-4 py-3">
                      {row.eu ? <span className="text-green-600 dark:text-green-400 flex items-center gap-1"><CheckCircle className="w-4 h-4" /> Covered</span>
                        : <span className="text-red-500 dark:text-red-400 flex items-center gap-1"><XCircle className="w-4 h-4" /> Not covered</span>}
                    </td>
                    <td className="px-4 py-3">
                      {row.nonEu ? <span className="text-green-600 dark:text-green-400 flex items-center gap-1"><CheckCircle className="w-4 h-4" /> Covered</span>
                        : <span className="text-red-500 dark:text-red-400 flex items-center gap-1"><XCircle className="w-4 h-4" /> Not covered</span>}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </section>

        {/* Section 3 — Amounts */}
        <section id="amounts">
          <h2 className="text-2xl font-bold text-gray-900 dark:text-gray-100 mb-4">
            3. Compensation Amounts Under EU261
          </h2>
          <p className="text-gray-700 dark:text-gray-300 mb-6">
            Compensation is fixed by the regulation — courts cannot increase or decrease it based on personal inconvenience. The amount depends solely on <strong>distance</strong> and (in one case) arrival delay:
          </p>
          <div className="grid md:grid-cols-3 gap-4 mb-6">
            {[
              { amount: "€250", label: "Short-haul", distance: "Up to 1,500 km", examples: "London–Amsterdam, Warsaw–Rome, Paris–Lisbon", delay: "3+ hours late" },
              { amount: "€400", label: "Medium-haul", distance: "1,500–3,500 km", examples: "London–Cairo, Warsaw–Dubai, Paris–Dakar", delay: "3+ hours late" },
              { amount: "€600", label: "Long-haul", distance: "Over 3,500 km", examples: "London–New York, Warsaw–Chicago, Paris–Bangkok", delay: "4+ hours late" },
            ].map((tier) => (
              <div key={tier.amount} className="bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-xl p-5 shadow-sm text-center">
                <div className="text-4xl font-bold text-blue-700 dark:text-blue-300 mb-1">{tier.amount}</div>
                <div className="font-semibold text-gray-900 dark:text-gray-100 mb-1">{tier.label}</div>
                <div className="text-xs text-gray-500 dark:text-gray-400 mb-2">{tier.distance}</div>
                <div className="text-xs text-gray-600 dark:text-gray-400 mb-3 min-h-[2.5rem]">{tier.examples}</div>
                <div className="bg-blue-50 dark:bg-blue-900 text-blue-700 dark:text-blue-300 text-xs font-medium px-3 py-1 rounded-full inline-block">
                  Threshold: {tier.delay}
                </div>
              </div>
            ))}
          </div>
          <div className="bg-amber-50 dark:bg-amber-950 border border-amber-200 dark:border-amber-800 rounded-xl p-4 text-sm text-amber-800 dark:text-amber-300">
            <strong>50% reduction rule:</strong> If the airline re-routes you and you arrive within 2 hours (short-haul), 3 hours (medium), or 4 hours (long-haul) of the original scheduled arrival, the airline can halve the compensation. This reduction does not apply to cancellations where you receive a full refund.
          </div>
        </section>

        {/* Section 4 — Delays */}
        <section id="delays">
          <h2 className="text-2xl font-bold text-gray-900 dark:text-gray-100 mb-4">
            4. Flight Delays
          </h2>
          <p className="text-gray-700 dark:text-gray-300 mb-4">
            For delays, EU261 compensation triggers based on <strong>arrival delay</strong> — not departure delay. The clock stops when the aircraft doors open at your destination. A flight delayed 4 hours at departure but landing only 2 hours late does not trigger compensation.
          </p>
          <div className="space-y-3 mb-6">
            {[
              { threshold: "2+ hours delayed at departure", right: "Care rights begin: meals, refreshments, 2 free phone calls/emails (short-haul)", comp: false },
              { threshold: "3+ hours arrival delay (short/medium haul)", right: "Full EU261 compensation: €250 or €400", comp: true },
              { threshold: "4+ hours arrival delay (long-haul 3,500+ km)", right: "Full EU261 compensation: €600", comp: true },
              { threshold: "5+ hours delayed at departure", right: "Right to full ticket refund + return flight if needed, in addition to care rights", comp: false },
            ].map((row, i) => (
              <div key={i} className={`flex gap-4 rounded-xl p-4 border ${row.comp ? "border-green-200 dark:border-green-800 bg-green-50 dark:bg-green-950" : "border-gray-200 dark:border-gray-700 bg-white dark:bg-gray-800"}`}>
                <div className="shrink-0">
                  {row.comp
                    ? <CheckCircle className="w-5 h-5 text-green-500 mt-0.5" />
                    : <Clock className="w-5 h-5 text-blue-500 mt-0.5" />}
                </div>
                <div>
                  <p className="font-semibold text-gray-900 dark:text-gray-100 text-sm">{row.threshold}</p>
                  <p className="text-gray-600 dark:text-gray-400 text-sm">{row.right}</p>
                </div>
              </div>
            ))}
          </div>
          <p className="text-gray-600 dark:text-gray-400 text-sm">
            Key case: <em>Sturgeon v Condor</em> (CJEU, 2009) — established that a 3-hour arrival delay triggers the same compensation rights as a cancellation.{" "}
            <Link href="/en/blog/what-counts-flight-delay-eu261" className="text-blue-600 dark:text-blue-400 underline">Full delay guide →</Link>
          </p>
        </section>

        {/* Section 5 — Cancellations */}
        <section id="cancellations">
          <h2 className="text-2xl font-bold text-gray-900 dark:text-gray-100 mb-4">
            5. Flight Cancellations
          </h2>
          <p className="text-gray-700 dark:text-gray-300 mb-4">
            When a flight is cancelled, your rights depend on how much notice the airline gave you:
          </p>
          <div className="overflow-x-auto rounded-xl border border-gray-200 dark:border-gray-700 mb-6">
            <table className="w-full text-sm">
              <thead className="bg-gray-50 dark:bg-gray-800">
                <tr>
                  <th className="px-4 py-3 text-left font-semibold text-gray-700 dark:text-gray-300">Notice given</th>
                  <th className="px-4 py-3 text-left font-semibold text-gray-700 dark:text-gray-300">Compensation?</th>
                  <th className="px-4 py-3 text-left font-semibold text-gray-700 dark:text-gray-300">Refund?</th>
                  <th className="px-4 py-3 text-left font-semibold text-gray-700 dark:text-gray-300">Care rights?</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-100 dark:divide-gray-700">
                {[
                  { notice: "14+ days before departure", comp: "No", refund: "Yes", care: "No" },
                  { notice: "7–13 days, re-route arrives max 4h late", comp: "No", refund: "Yes", care: "Yes" },
                  { notice: "7–13 days, re-route arrives 4h+ late", comp: "50% reduction applies", refund: "Yes", care: "Yes" },
                  { notice: "Under 7 days, re-route arrives max 2h late", comp: "No", refund: "Yes", care: "Yes" },
                  { notice: "Under 7 days, re-route arrives 2h+ late", comp: "50% reduction applies", refund: "Yes", care: "Yes" },
                  { notice: "At airport / day of travel", comp: "Full compensation", refund: "Yes", care: "Yes" },
                ].map((row, i) => (
                  <tr key={i} className={i % 2 === 0 ? "bg-white dark:bg-gray-900" : "bg-gray-50 dark:bg-gray-800"}>
                    <td className="px-4 py-3 text-gray-700 dark:text-gray-300">{row.notice}</td>
                    <td className="px-4 py-3">
                      {row.comp === "No"
                        ? <span className="text-red-500 dark:text-red-400">✗ No</span>
                        : <span className="text-green-600 dark:text-green-400 font-medium">✓ {row.comp}</span>}
                    </td>
                    <td className="px-4 py-3 text-green-600 dark:text-green-400">✓ Yes</td>
                    <td className="px-4 py-3">
                      {row.care === "Yes"
                        ? <span className="text-green-600 dark:text-green-400">✓ Yes</span>
                        : <span className="text-red-500 dark:text-red-400">✗ No</span>}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <p className="text-gray-700 dark:text-gray-300 text-sm">
            You are always entitled to choose between: (a) full ticket refund, (b) re-routing at earliest opportunity, or (c) re-routing on a later date of your choice. The refund must be paid within 7 days.
          </p>
        </section>

        {/* Section 6 — Denied boarding */}
        <section id="denied-boarding">
          <h2 className="text-2xl font-bold text-gray-900 dark:text-gray-100 mb-4">
            6. Denied Boarding
          </h2>
          <p className="text-gray-700 dark:text-gray-300 mb-4">
            Denied boarding means the airline refuses to carry you despite having a confirmed booking and arriving at the gate on time. The most common cause is overbooking — airlines regularly sell more tickets than available seats.
          </p>
          <div className="bg-blue-50 dark:bg-blue-950 border border-blue-200 dark:border-blue-800 rounded-xl p-5 mb-4">
            <h3 className="font-semibold text-blue-800 dark:text-blue-300 mb-2">Voluntary vs involuntary bumping</h3>
            <p className="text-gray-700 dark:text-gray-300 text-sm">
              Airlines must first ask for volunteers willing to give up their seat in exchange for benefits. Only if there are insufficient volunteers can the airline involuntarily deny boarding — triggering full EU261 compensation. Accepting a voluntary arrangement is negotiable; get the best deal you can. Involuntary denial entitles you to the statutory amounts with no negotiation needed.
            </p>
          </div>
          <p className="text-gray-700 dark:text-gray-300 text-sm">
            Denied boarding rights are identical to cancellation rights: compensation €250/€400/€600 + refund or re-routing + care rights + written notice of rights.
          </p>
        </section>

        {/* Section 7 — Missed connections */}
        <section id="missed-connections">
          <h2 className="text-2xl font-bold text-gray-900 dark:text-gray-100 mb-4">
            7. Missed Connections
          </h2>
          <p className="text-gray-700 dark:text-gray-300 mb-4">
            Missed connection compensation under EU261 is determined by <strong>how you booked</strong> and your <strong>final arrival time</strong>:
          </p>
          <div className="space-y-4 mb-4">
            <div className="bg-green-50 dark:bg-green-950 border border-green-200 dark:border-green-800 rounded-xl p-4">
              <h3 className="font-semibold text-green-800 dark:text-green-300 text-sm mb-1 flex items-center gap-2">
                <CheckCircle className="w-4 h-4" /> Single booking (same PNR)
              </h3>
              <p className="text-gray-700 dark:text-gray-300 text-sm">
                If both legs were on a single booking reference and you miss the connection due to the first flight being late, you are entitled to EU261 compensation based on your <em>final destination</em> arrival delay. Distance is calculated for the entire journey.
              </p>
            </div>
            <div className="bg-red-50 dark:bg-red-950 border border-red-200 dark:border-red-800 rounded-xl p-4">
              <h3 className="font-semibold text-red-800 dark:text-red-300 text-sm mb-1 flex items-center gap-2">
                <XCircle className="w-4 h-4" /> Separate bookings (different PNRs)
              </h3>
              <p className="text-gray-700 dark:text-gray-300 text-sm">
                If you booked two separate tickets independently and miss the connection, the second airline has no obligation to accommodate you. EU261 compensation applies only to the first delayed flight independently — not the connection miss.
              </p>
            </div>
          </div>
        </section>

        {/* Section 8 — Care rights */}
        <section id="care-rights">
          <h2 className="text-2xl font-bold text-gray-900 dark:text-gray-100 mb-4">
            8. Care Rights — Meals, Hotel, and Communications
          </h2>
          <p className="text-gray-700 dark:text-gray-300 mb-4">
            Article 9 of EU261 requires airlines to provide care regardless of whether compensation is payable — even when extraordinary circumstances apply. These rights activate based on expected delay length:
          </p>
          <div className="overflow-x-auto rounded-xl border border-gray-200 dark:border-gray-700 mb-4">
            <table className="w-full text-sm">
              <thead className="bg-gray-50 dark:bg-gray-800">
                <tr>
                  <th className="px-4 py-3 text-left font-semibold text-gray-700 dark:text-gray-300">Flight distance</th>
                  <th className="px-4 py-3 text-left font-semibold text-gray-700 dark:text-gray-300">Care activates after</th>
                  <th className="px-4 py-3 text-left font-semibold text-gray-700 dark:text-gray-300">Hotel included?</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-100 dark:divide-gray-700">
                <tr className="bg-white dark:bg-gray-900">
                  <td className="px-4 py-3 text-gray-700 dark:text-gray-300">Up to 1,500 km</td>
                  <td className="px-4 py-3 text-gray-700 dark:text-gray-300">2-hour delay</td>
                  <td className="px-4 py-3 text-gray-600 dark:text-gray-400">Only if overnight stay required</td>
                </tr>
                <tr className="bg-gray-50 dark:bg-gray-800">
                  <td className="px-4 py-3 text-gray-700 dark:text-gray-300">1,500–3,500 km</td>
                  <td className="px-4 py-3 text-gray-700 dark:text-gray-300">3-hour delay</td>
                  <td className="px-4 py-3 text-gray-600 dark:text-gray-400">Only if overnight stay required</td>
                </tr>
                <tr className="bg-white dark:bg-gray-900">
                  <td className="px-4 py-3 text-gray-700 dark:text-gray-300">Over 3,500 km</td>
                  <td className="px-4 py-3 text-gray-700 dark:text-gray-300">4-hour delay</td>
                  <td className="px-4 py-3 text-gray-600 dark:text-gray-400">Only if overnight stay required</td>
                </tr>
              </tbody>
            </table>
          </div>
          <p className="text-gray-700 dark:text-gray-300 text-sm mb-2">
            Care includes: meals and refreshments proportionate to waiting time, 2 telephone calls or emails, hotel accommodation (if overnight stay necessary), and transport between airport and hotel.
          </p>
          <p className="text-gray-700 dark:text-gray-300 text-sm">
            If the airline fails to provide care, keep all receipts for reasonable expenses — you can claim these back. "Reasonable" means economy meals, not restaurant dining at the airline's expense. Courts typically reject luxury claims.
          </p>
        </section>

        {/* Mid CTA */}
        <div className="bg-gradient-to-r from-blue-600 to-indigo-600 rounded-2xl p-8 text-white text-center shadow-lg">
          <Shield className="w-10 h-10 mx-auto mb-3 text-blue-200" />
          <h3 className="text-xl font-bold mb-2">Flight disrupted? Check your claim now.</h3>
          <p className="text-blue-100 mb-5 text-sm">
            ClaimWinger handles EU261 and UK261 claims. No win, no fee — 30% only on success.
          </p>
          <a
            href={`https://claimwinger.com/delayed-flight?utm_source=problemlot.com&utm_medium=article&utm_campaign=${SLUG}&utm_content=cta_mid`}
            target="_blank"
            rel="noopener noreferrer"
            onClick={() => trackCTA("Check my EU261 claim", "mid")}
          >
            <Button className="bg-white text-blue-700 hover:bg-blue-50 font-semibold px-8 py-3">
              Check My EU261 Claim <ArrowRight className="ml-2 w-4 h-4" />
            </Button>
          </a>
        </div>

        {/* Section 9 — Extraordinary circumstances */}
        <section id="extraordinary-circumstances">
          <h2 className="text-2xl font-bold text-gray-900 dark:text-gray-100 mb-4">
            9. Extraordinary Circumstances
          </h2>
          <p className="text-gray-700 dark:text-gray-300 mb-4">
            An airline is exempt from paying compensation if a disruption was caused by "extraordinary circumstances which could not have been avoided even if all reasonable measures had been taken" (Article 5(3)). This is a legal defence — the airline must prove it.
          </p>
          <div className="grid md:grid-cols-2 gap-4 mb-4">
            <div className="bg-green-50 dark:bg-green-950 border border-green-200 dark:border-green-800 rounded-xl p-4">
              <h3 className="font-semibold text-green-800 dark:text-green-300 mb-2 text-sm">Accepted extraordinary circumstances</h3>
              <ul className="space-y-1 text-xs text-gray-700 dark:text-gray-300">
                {["Volcanic ash clouds (Eyjafjallajökull 2010)", "Severe storm closing airport", "ATC strikes (not airline staff)", "Political instability/security incidents", "Bird strike causing genuine airworthiness issue"].map(e => (
                  <li key={e} className="flex items-center gap-1"><CheckCircle className="w-3 h-3 text-green-500 shrink-0" />{e}</li>
                ))}
              </ul>
            </div>
            <div className="bg-red-50 dark:bg-red-950 border border-red-200 dark:border-red-800 rounded-xl p-4">
              <h3 className="font-semibold text-red-800 dark:text-red-300 mb-2 text-sm">Not extraordinary circumstances</h3>
              <ul className="space-y-1 text-xs text-gray-700 dark:text-gray-300">
                {["Technical fault (CJEU: Wallentin-Hermann 2008)", "Airline staff strikes", "Aircraft unavailability / late positioning", "Overbooking or scheduling error", "Vague 'operational reasons'"].map(e => (
                  <li key={e} className="flex items-center gap-1"><XCircle className="w-3 h-3 text-red-500 shrink-0" />{e}</li>
                ))}
              </ul>
            </div>
          </div>
          <p className="text-gray-600 dark:text-gray-400 text-sm">
            Extraordinary circumstances only remove the compensation obligation — care rights (meals, hotel) remain in force regardless.{" "}
            <Link href="/en/blog/extraordinary-circumstances-eu261-definition" className="text-blue-600 dark:text-blue-400 underline">Full extraordinary circumstances guide →</Link>
          </p>
        </section>

        {/* Section 10 — How to claim */}
        <section id="how-to-claim">
          <h2 className="text-2xl font-bold text-gray-900 dark:text-gray-100 mb-4">
            10. How to Claim EU261 Compensation
          </h2>
          <div className="space-y-4">
            {[
              {
                step: "1",
                title: "Confirm eligibility",
                desc: "Check the route (EU departure or EU carrier inbound), the delay at arrival (3+ hours), and whether extraordinary circumstances were claimed.",
              },
              {
                step: "2",
                title: "Gather your documents",
                desc: "Boarding pass, booking confirmation, screenshots of departure/arrival times, and any receipts for care expenses (meals, hotel) paid out of pocket.",
              },
              {
                step: "3",
                title: "Submit a formal claim to the airline",
                desc: "Write to the airline's customer service citing EU Regulation 261/2004, Article 7. Include: flight number, date, origin and destination, actual arrival time, and your IBAN/account details. Request payment within 14 days.",
              },
              {
                step: "4",
                title: "If rejected or ignored — escalate",
                desc: "File a complaint with the national enforcement body (CAA in the UK, ULC in Poland, LBA in Germany, DGAC in France, IAA in Ireland). Free process but can take months. Alternatively, use ADR (CEDR, AviationADR in the UK; SÖP in Germany).",
              },
              {
                step: "5",
                title: "Use a claims specialist",
                desc: "ClaimWinger handles the entire process on no-win-no-fee terms. 30% fee on success only (+ 23% VAT for Polish residents, 0% VAT for all other passengers). Suitable when airlines ignore direct claims or the 14-day deadline has passed.",
              },
            ].map((item) => (
              <div key={item.step} className="flex gap-4 bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-xl p-5 shadow-sm">
                <div className="w-10 h-10 rounded-full bg-blue-100 dark:bg-blue-900 text-blue-700 dark:text-blue-300 font-bold text-lg flex items-center justify-center shrink-0">
                  {item.step}
                </div>
                <div>
                  <h3 className="font-semibold text-gray-900 dark:text-gray-100 mb-1">{item.title}</h3>
                  <p className="text-gray-600 dark:text-gray-400 text-sm">{item.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Section 11 — Limitation periods */}
        <section id="limitation-periods">
          <h2 className="text-2xl font-bold text-gray-900 dark:text-gray-100 mb-4">
            11. Limitation Periods — How Long Do You Have?
          </h2>
          <p className="text-gray-700 dark:text-gray-300 mb-4">
            EU261 has no single limitation period. Each EU member state applies its own national law. The relevant period is usually that of the country where the airline is based or from which the flight departed.
          </p>
          <div className="overflow-x-auto rounded-xl border border-gray-200 dark:border-gray-700 mb-4">
            <table className="w-full text-sm">
              <thead className="bg-gray-50 dark:bg-gray-800">
                <tr>
                  <th className="px-4 py-3 text-left font-semibold text-gray-700 dark:text-gray-300">Country</th>
                  <th className="px-4 py-3 text-left font-semibold text-gray-700 dark:text-gray-300">Limitation period</th>
                  <th className="px-4 py-3 text-left font-semibold text-gray-700 dark:text-gray-300">Note</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-100 dark:divide-gray-700">
                {[
                  { country: "Poland", period: "1 year", note: "Shortest in Europe — act fast for LOT claims", highlight: true },
                  { country: "Germany", period: "3 years", note: "Standard limitation for Lufthansa, Ryanair DE departures", highlight: false },
                  { country: "France", period: "5 years", note: "Air France claims", highlight: false },
                  { country: "Netherlands", period: "2 years", note: "KLM claims", highlight: false },
                  { country: "Belgium", period: "1 year", note: "Brussels Airlines", highlight: true },
                  { country: "Ireland", period: "6 years", note: "Ryanair (Irish carrier)", highlight: false },
                  { country: "United Kingdom", period: "6 years", note: "UK261 post-Brexit", highlight: false },
                  { country: "Spain", period: "5 years", note: "Iberia, Vueling, Volotea", highlight: false },
                  { country: "Italy", period: "2 years", note: "ITA Airways, Neos", highlight: false },
                  { country: "Sweden", period: "3 years", note: "SAS (also Norwegian SE claims)", highlight: false },
                ].map((row, i) => (
                  <tr key={i} className={row.highlight ? "bg-amber-50 dark:bg-amber-950" : i % 2 === 0 ? "bg-white dark:bg-gray-900" : "bg-gray-50 dark:bg-gray-800"}>
                    <td className="px-4 py-3 font-medium text-gray-900 dark:text-gray-100">{row.country}</td>
                    <td className="px-4 py-3">
                      <span className={`font-bold ${row.highlight ? "text-amber-700 dark:text-amber-400" : "text-gray-900 dark:text-gray-100"}`}>
                        {row.period}
                      </span>
                    </td>
                    <td className="px-4 py-3 text-gray-600 dark:text-gray-400 text-xs">{row.note}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <p className="text-gray-600 dark:text-gray-400 text-sm">
            <Link href="/en/blog/eu261-claim-flight-3-years-ago" className="text-blue-600 dark:text-blue-400 underline">Full guide on limitation periods →</Link>
          </p>
        </section>

        {/* Section 12 — UK261 */}
        <section id="uk261">
          <h2 className="text-2xl font-bold text-gray-900 dark:text-gray-100 mb-4">
            12. UK261 — The Same Rules After Brexit
          </h2>
          <p className="text-gray-700 dark:text-gray-300 mb-4">
            The United Kingdom retained EU261 as domestic law when it left the EU. The retained regulation — informally called UK261 — is substantively identical: same compensation amounts (in £ at the pre-Brexit rate, equivalent to the € amounts), same eligibility rules, same extraordinary circumstances defence.
          </p>
          <div className="bg-blue-50 dark:bg-blue-950 border border-blue-200 dark:border-blue-800 rounded-xl p-5">
            <h3 className="font-semibold text-blue-800 dark:text-blue-300 mb-3">Key differences: EU261 vs UK261</h3>
            <ul className="space-y-2 text-gray-700 dark:text-gray-300 text-sm">
              <li className="flex items-start gap-2"><AlertCircle className="w-4 h-4 text-blue-500 mt-0.5 shrink-0" /><span>UK261 is enforced by the Civil Aviation Authority (CAA), not EU national bodies</span></li>
              <li className="flex items-start gap-2"><AlertCircle className="w-4 h-4 text-blue-500 mt-0.5 shrink-0" /><span>UK261 covers flights departing UK airports and UK carrier flights arriving into UK airports</span></li>
              <li className="flex items-start gap-2"><AlertCircle className="w-4 h-4 text-blue-500 mt-0.5 shrink-0" /><span>A flight from Heathrow → Amsterdam may trigger both EU261 (EU arrival) and UK261 (UK departure) — practically both regulations apply identically</span></li>
              <li className="flex items-start gap-2"><AlertCircle className="w-4 h-4 text-blue-500 mt-0.5 shrink-0" /><span>ADR schemes in the UK: CEDR and AviationADR (used by most UK airlines)</span></li>
              <li className="flex items-start gap-2"><AlertCircle className="w-4 h-4 text-blue-500 mt-0.5 shrink-0" /><span>Limitation period: 6 years in England and Wales</span></li>
            </ul>
          </div>
        </section>

        {/* FAQ */}
        <section>
          <h2 className="text-2xl font-bold text-gray-900 dark:text-gray-100 mb-6">
            Frequently Asked Questions
          </h2>
          <div className="space-y-4">
            {[
              {
                q: "What is EU Regulation 261/2004?",
                a: "EU Regulation 261/2004 (EU261) is a European law entitling air passengers to compensation of up to €600, care rights, and refunds when flights are significantly delayed, cancelled, or when passengers are denied boarding. It applies to all flights departing EU airports and to EU-carrier flights arriving into the EU.",
              },
              {
                q: "How much compensation can I get under EU261?",
                a: "EU261 compensation is €250 for flights up to 1,500 km, €400 for 1,500–3,500 km, and €600 for flights over 3,500 km. These amounts may be halved if the airline re-routes you with only a short additional delay.",
              },
              {
                q: "Does EU261 apply to my flight?",
                a: "EU261 applies if: (1) your flight departed from an EU airport (any airline), or (2) your flight arrived into an EU airport on an EU-based carrier. Non-EU carriers on inbound-only routes are not covered. UK flights are governed by UK261, which has identical rules.",
              },
              {
                q: "What is the difference between compensation and a refund under EU261?",
                a: "A refund (Article 8) returns your ticket cost when you choose not to travel following a cancellation or severe delay. Compensation (Article 7) is an additional cash payment of €250–€600 for the inconvenience. Both can be claimed simultaneously for a cancelled flight.",
              },
              {
                q: "How long do I have to claim EU261 compensation?",
                a: "There is no single EU deadline. Poland gives 1 year, Germany 3 years, France 5 years, UK 6 years. The limitation period of the airline's home country or departure country generally applies. Check before your deadline passes.",
              },
            ].map((item, i) => (
              <details key={i} className="border border-gray-200 dark:border-gray-700 rounded-xl overflow-hidden group">
                <summary className="flex items-center justify-between px-6 py-4 cursor-pointer bg-white dark:bg-gray-800 hover:bg-gray-50 font-medium text-gray-900 dark:text-gray-100">
                  {item.q}
                  <span className="ml-4 text-gray-400 group-open:rotate-180 transition-transform shrink-0">▼</span>
                </summary>
                <div className="px-6 py-4 bg-gray-50 dark:bg-gray-850 text-gray-700 dark:text-gray-300 text-sm leading-relaxed border-t border-gray-100 dark:border-gray-700">
                  {item.a}
                </div>
              </details>
            ))}
          </div>
        </section>

        {/* Bottom CTA */}
        <div className="bg-gradient-to-br from-gray-900 to-blue-900 rounded-2xl p-8 text-white text-center shadow-xl">
          <Plane className="w-10 h-10 mx-auto mb-3 text-blue-300" />
          <h3 className="text-2xl font-bold mb-3">Ready to claim? Start in 2 minutes.</h3>
          <p className="text-gray-300 mb-2">
            ClaimWinger handles EU261 and UK261 claims against all airlines. No upfront payment.
          </p>
          <p className="text-gray-400 text-sm mb-6">
            30% fee on success only (+ 23% VAT for Polish residents, 0% VAT for all other passengers).
          </p>
          <div className="flex flex-col sm:flex-row gap-3 justify-center">
            <a
              href={`https://claimwinger.com/delayed-flight?utm_source=problemlot.com&utm_medium=article&utm_campaign=${SLUG}&utm_content=cta_bottom`}
              target="_blank"
              rel="noopener noreferrer"
              onClick={() => trackCTA("Check my EU261 claim", "bottom")}
            >
              <Button className="bg-blue-500 hover:bg-blue-400 text-white font-semibold px-8 py-3 w-full sm:w-auto">
                Check My EU261 Claim <ArrowRight className="ml-2 w-4 h-4" />
              </Button>
            </a>
            <Link href="/en/blog">
              <Button variant="outline" className="border-gray-600 text-gray-300 hover:bg-gray-800 px-8 py-3 w-full sm:w-auto">
                More EU261 Guides
              </Button>
            </Link>
          </div>
        </div>

        {/* Related */}
        <section>
          <h2 className="text-xl font-bold text-gray-900 dark:text-gray-100 mb-4">Deep-Dive Guides</h2>
          <div className="grid md:grid-cols-3 gap-4">
            {[
              { title: "What Counts as a Flight Delay Under EU261?", slug: "what-counts-flight-delay-eu261" },
              { title: "What Are Extraordinary Circumstances Under EU261?", slug: "extraordinary-circumstances-eu261-definition" },
              { title: "Does EU261 Apply to Flights Outside the EU?", slug: "eu261-flights-outside-eu-apply" },
              { title: "How Much Compensation for a Delayed Flight?", slug: "how-much-compensation-delayed-flight" },
              { title: "Can I Claim EU261 for a Flight 3 Years Ago?", slug: "eu261-claim-flight-3-years-ago" },
              { title: "Do I Have to Accept a Voucher Instead of Cash?", slug: "voucher-instead-cash-eu261-rights" },
            ].map((article) => (
              <Link
                key={article.slug}
                href={`/en/blog/${article.slug}`}
                className="border border-gray-200 dark:border-gray-700 rounded-xl p-4 hover:border-blue-300 dark:hover:border-blue-600 hover:shadow-md transition-all bg-white dark:bg-gray-800"
              >
                <h3 className="font-medium text-gray-900 dark:text-gray-100 text-sm leading-snug">{article.title}</h3>
                <span className="text-blue-600 dark:text-blue-400 text-xs mt-2 inline-block font-medium">Read guide →</span>
              </Link>
            ))}
          </div>
        </section>

      </div>
    </LayoutEn>
  );
}
