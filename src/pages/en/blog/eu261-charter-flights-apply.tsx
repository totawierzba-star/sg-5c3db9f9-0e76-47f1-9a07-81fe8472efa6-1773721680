import { LayoutEn } from "@/components/LayoutEn";
import { SEO } from "@/components/SEO";
import Link from "next/link";
import { ArrowRight, CheckCircle, XCircle, AlertCircle, Plane } from "lucide-react";
import { Button } from "@/components/ui/button";

const SLUG = "eu261-charter-flights-apply";

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

export default function Eu261CharterFlightsApply() {
  const schema = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "Article",
        headline: "Does EU261 Apply to Charter Flights? Your Rights on Package Holiday Flights",
        description:
          "EU261 applies to charter flights — no exceptions. Whether booked as part of a package holiday or a standalone charter, you are entitled to up to €600 compensation for delays and cancellations.",
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
            name: "Does EU261 apply to charter flights?",
            acceptedAnswer: {
              "@type": "Answer",
              text: "Yes. EU Regulation 261/2004 applies to all commercial passenger flights departing from an EU airport, or arriving into the EU on an EU-based carrier. Charter flights are not excluded. If your charter flight was delayed by 3+ hours, cancelled, or you were denied boarding, you are entitled to EU261 compensation.",
            },
          },
          {
            "@type": "Question",
            name: "Who do I claim compensation from — the tour operator or the airline?",
            acceptedAnswer: {
              "@type": "Answer",
              text: "EU261 compensation is always claimed from the operating airline — not the tour operator. Even if you booked as part of a package holiday through a travel agent or tour operator, the airline that operated the flight is legally responsible for EU261 payments.",
            },
          },
          {
            "@type": "Question",
            name: "Does EU261 apply to TUI, Jet2, or Condor charter flights?",
            acceptedAnswer: {
              "@type": "Answer",
              text: "Yes. TUI Airways, Jet2, and Condor are all commercial airlines subject to EU261 (or UK261 for TUI and Jet2 on UK departures). Their charter operations are covered identically to scheduled service flights.",
            },
          },
          {
            "@type": "Question",
            name: "Can I claim EU261 and a package holiday refund at the same time?",
            acceptedAnswer: {
              "@type": "Answer",
              text: "Yes — these are separate rights. EU261 compensation (from the airline) compensates for the delay or cancellation itself. Package holiday rights under the Package Travel Directive may entitle you to a price reduction or refund from the tour operator for a ruined holiday. Both claims can proceed simultaneously.",
            },
          },
          {
            "@type": "Question",
            name: "What if bad weather cancelled my charter flight?",
            acceptedAnswer: {
              "@type": "Answer",
              text: "Genuine severe weather can qualify as an extraordinary circumstance, exempting the airline from EU261 compensation. However, the airline must prove the specific weather event caused the specific delay — a general 'bad weather' statement is not sufficient. Care rights (meals, hotel) still apply regardless.",
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
            name: "Does EU261 Apply to Charter Flights?",
            item: `https://problemlot.com/en/blog/${SLUG}`,
          },
        ],
      },
    ],
  };

  return (
    <LayoutEn>
      <SEO
        title="Does EU261 Apply to Charter Flights? Rights on Package Holidays"
        description="EU261 applies to charter flights — no exceptions. Delayed or cancelled charter? You're entitled to up to €600 compensation. Full guide including TUI, Jet2, Condor, and package holidays."
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
            <span className="text-gray-900 dark:text-gray-100 font-medium">EU261 & Charter Flights</span>
          </nav>
        </div>
      </div>

      {/* Hero */}
      <div className="bg-gradient-to-br from-orange-50 to-amber-50 dark:from-orange-950 dark:to-amber-950 border-b border-orange-100 dark:border-orange-900">
        <div className="max-w-4xl mx-auto px-4 py-12">
          <div className="flex items-center gap-2 mb-4">
            <span className="bg-orange-100 dark:bg-orange-900 text-orange-700 dark:text-orange-300 text-xs font-semibold px-3 py-1 rounded-full uppercase tracking-wide">
              Regulation
            </span>
            <span className="text-gray-500 dark:text-gray-400 text-sm">10 min read</span>
          </div>
          <h1 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-gray-100 mb-4 leading-tight">
            Does EU261 Apply to Charter Flights?
          </h1>
          <p className="text-xl text-gray-600 dark:text-gray-300 mb-6 leading-relaxed">
            Millions of passengers fly charter every summer — to Turkey, Egypt, Mallorca, the Canaries. Most assume package holiday flights have weaker rights. They're wrong.
          </p>
          <div className="bg-orange-600 text-white rounded-xl p-5 inline-block shadow-lg">
            <p className="text-lg font-bold">Yes — EU261 fully applies to charter flights.</p>
            <p className="text-orange-100 mt-1">
              There is no exception for charter, package holiday, or wet-lease operations. If your charter departed from an EU airport (or was operated by an EU carrier), you are entitled to up to <strong className="text-white">€600</strong> for delays, cancellations, and denied boarding.
            </p>
          </div>
        </div>
      </div>

      <div className="max-w-4xl mx-auto px-4 py-12 space-y-12">

        {/* Section 1 — The legal basis */}
        <section>
          <h2 className="text-2xl font-bold text-gray-900 dark:text-gray-100 mb-4">
            Why the "Charter Exception" Myth Persists
          </h2>
          <p className="text-gray-700 dark:text-gray-300 mb-4">
            EU Regulation 261/2004 applies to <em>all</em> passengers on <em>all</em> commercial flights departing an EU airport — regardless of whether the flight is scheduled, charter, or ad hoc. The regulation does not distinguish between flight types.
          </p>
          <p className="text-gray-700 dark:text-gray-300 mb-4">
            The confusion arises because:
          </p>
          <ul className="space-y-2 text-gray-700 dark:text-gray-300 mb-6">
            <li className="flex items-start gap-2">
              <AlertCircle className="w-4 h-4 text-amber-500 mt-0.5 shrink-0" />
              Tour operators tell passengers to "contact us" rather than the airline — redirecting the claim to a slower, less enforceable process
            </li>
            <li className="flex items-start gap-2">
              <AlertCircle className="w-4 h-4 text-amber-500 mt-0.5 shrink-0" />
              Charter airlines sometimes claim different rules apply — they don't
            </li>
            <li className="flex items-start gap-2">
              <AlertCircle className="w-4 h-4 text-amber-500 mt-0.5 shrink-0" />
              Package holiday contracts often describe delay assistance without mentioning separate EU261 cash compensation
            </li>
            <li className="flex items-start gap-2">
              <AlertCircle className="w-4 h-4 text-amber-500 mt-0.5 shrink-0" />
              Historically some charter operators resisted claims and passengers gave up
            </li>
          </ul>
          <div className="bg-green-50 dark:bg-green-950 border border-green-200 dark:border-green-800 rounded-xl p-5">
            <p className="text-green-800 dark:text-green-300 font-semibold text-sm">
              The legal position is clear: a charter flight is a commercial passenger flight. EU261 applies. Courts and national enforcement bodies have consistently upheld this.
            </p>
          </div>
        </section>

        {/* Section 2 — Coverage table */}
        <section>
          <h2 className="text-2xl font-bold text-gray-900 dark:text-gray-100 mb-6">
            Charter Flight Scenarios: What's Covered
          </h2>
          <div className="overflow-x-auto rounded-xl border border-gray-200 dark:border-gray-700">
            <table className="w-full text-sm">
              <thead className="bg-gray-50 dark:bg-gray-800">
                <tr>
                  <th className="px-4 py-3 text-left font-semibold text-gray-700 dark:text-gray-300">Scenario</th>
                  <th className="px-4 py-3 text-left font-semibold text-gray-700 dark:text-gray-300">Covered?</th>
                  <th className="px-4 py-3 text-left font-semibold text-gray-700 dark:text-gray-300">Notes</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-100 dark:divide-gray-700">
                {[
                  {
                    scenario: "Charter from EU airport (e.g., London Gatwick → Antalya)",
                    covered: true,
                    note: "Fully covered regardless of carrier nationality",
                  },
                  {
                    scenario: "Charter from EU airport booked as package holiday",
                    covered: true,
                    note: "Package holiday status doesn't remove EU261 rights",
                  },
                  {
                    scenario: "EU carrier charter arriving into EU from outside EU (e.g., TUI flight Cancun → UK)",
                    covered: true,
                    note: "EU/UK carrier on inbound route = covered",
                  },
                  {
                    scenario: "Non-EU carrier charter arriving into EU (e.g., Turkish charter LHR → IST → LHR)",
                    covered: false,
                    note: "Non-EU carrier on EU-inbound leg only — outbound from EU is covered",
                  },
                  {
                    scenario: "Wet-lease charter (airline leases aircraft + crew to tour operator)",
                    covered: true,
                    note: "EU261 claims against the operating airline, not the lessor",
                  },
                  {
                    scenario: "Private charter (non-commercial, no ticket sold to public)",
                    covered: false,
                    note: "EU261 only covers commercial passenger flights with ticketed passengers",
                  },
                  {
                    scenario: "Charter with technical stop mid-route",
                    covered: true,
                    note: "Arrival delay measured at final destination",
                  },
                ].map((row, i) => (
                  <tr key={i} className={i % 2 === 0 ? "bg-white dark:bg-gray-900" : "bg-gray-50 dark:bg-gray-800"}>
                    <td className="px-4 py-3 text-gray-700 dark:text-gray-300">{row.scenario}</td>
                    <td className="px-4 py-3">
                      {row.covered ? (
                        <span className="flex items-center gap-1 text-green-600 dark:text-green-400 font-semibold">
                          <CheckCircle className="w-4 h-4" /> Yes
                        </span>
                      ) : (
                        <span className="flex items-center gap-1 text-red-600 dark:text-red-400 font-semibold">
                          <XCircle className="w-4 h-4" /> No
                        </span>
                      )}
                    </td>
                    <td className="px-4 py-3 text-gray-600 dark:text-gray-400 text-xs">{row.note}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </section>

        {/* Section 3 — Compensation amounts */}
        <section>
          <h2 className="text-2xl font-bold text-gray-900 dark:text-gray-100 mb-4">
            Compensation Amounts for Charter Delays
          </h2>
          <p className="text-gray-700 dark:text-gray-300 mb-6">
            The same distance-based compensation thresholds apply to charter flights as to scheduled flights:
          </p>
          <div className="grid md:grid-cols-3 gap-4 mb-6">
            {[
              {
                amount: "€250",
                distance: "Flights up to 1,500 km",
                examples: "London → Mallorca, Warsaw → Djerba",
                threshold: "3+ hours late",
                color: "blue",
              },
              {
                amount: "€400",
                distance: "1,500–3,500 km",
                examples: "London → Egypt, Warsaw → Turkey",
                threshold: "3+ hours late",
                color: "green",
              },
              {
                amount: "€600",
                distance: "Over 3,500 km",
                examples: "London → Cancun, Paris → Cape Verde",
                threshold: "4+ hours late",
                color: "purple",
              },
            ].map((tier) => (
              <div
                key={tier.amount}
                className={`border border-${tier.color}-200 dark:border-${tier.color}-800 rounded-xl p-5 bg-${tier.color}-50 dark:bg-${tier.color}-950 text-center`}
              >
                <div className={`text-3xl font-bold text-${tier.color}-700 dark:text-${tier.color}-300 mb-1`}>
                  {tier.amount}
                </div>
                <div className="text-sm font-semibold text-gray-700 dark:text-gray-300 mb-2">{tier.distance}</div>
                <div className="text-xs text-gray-500 dark:text-gray-400 mb-2">{tier.examples}</div>
                <div className={`text-xs bg-${tier.color}-100 dark:bg-${tier.color}-900 text-${tier.color}-700 dark:text-${tier.color}-300 px-2 py-1 rounded-full inline-block font-medium`}>
                  {tier.threshold}
                </div>
              </div>
            ))}
          </div>
          <div className="bg-amber-50 dark:bg-amber-950 border border-amber-200 dark:border-amber-800 rounded-xl p-4 text-sm text-amber-800 dark:text-amber-300">
            <strong>Reduction rule:</strong> For non-cancelled flights where the airline offers re-routing, compensation may be reduced by 50% if the arrival delay is under 2 hours (short haul), 3 hours (medium haul), or 4 hours (long haul) of the original scheduled arrival.
          </div>
        </section>

        {/* Mid CTA */}
        <div className="bg-gradient-to-r from-orange-600 to-amber-600 rounded-2xl p-8 text-white text-center shadow-lg">
          <Plane className="w-10 h-10 mx-auto mb-3 text-orange-200" />
          <h3 className="text-xl font-bold mb-2">Charter flight delayed or cancelled?</h3>
          <p className="text-orange-100 mb-5 text-sm">
            ClaimWinger handles charter claims. No win, no fee — 30% only on success.
          </p>
          <a
            href={`https://claimwinger.com/delayed-flight?utm_source=problemlot.com&utm_medium=article&utm_campaign=${SLUG}&utm_content=cta_mid`}
            target="_blank"
            rel="noopener noreferrer"
            onClick={() => trackCTA("Check my charter claim", "mid")}
          >
            <Button className="bg-white text-orange-700 hover:bg-orange-50 font-semibold px-8 py-3">
              Check My Charter Claim <ArrowRight className="ml-2 w-4 h-4" />
            </Button>
          </a>
        </div>

        {/* Section 4 — Who to claim from */}
        <section>
          <h2 className="text-2xl font-bold text-gray-900 dark:text-gray-100 mb-4">
            Who Do You Claim From — Airline or Tour Operator?
          </h2>
          <p className="text-gray-700 dark:text-gray-300 mb-4">
            This is one of the most common sources of confusion for package holiday passengers. The answer is unambiguous:
          </p>
          <div className="bg-blue-50 dark:bg-blue-950 border border-blue-200 dark:border-blue-800 rounded-xl p-6 mb-6">
            <p className="text-blue-900 dark:text-blue-200 font-bold text-lg mb-2">
              EU261 compensation: claim from the <u>operating airline</u>.
            </p>
            <p className="text-blue-800 dark:text-blue-300 text-sm">
              EU Regulation 261/2004, Article 2(b) defines "operating air carrier" as the carrier that performs the flight. This is who bears the legal obligation — not the travel agent, not the tour operator, not the booking platform.
            </p>
          </div>
          <div className="space-y-4">
            <div className="border border-gray-200 dark:border-gray-700 rounded-xl p-5 bg-white dark:bg-gray-800">
              <h3 className="font-semibold text-gray-900 dark:text-gray-100 mb-2">Example 1 — TUI package holiday</h3>
              <p className="text-gray-600 dark:text-gray-400 text-sm">
                You book a TUI package holiday (flights + hotel). The outbound TUI Airways flight is delayed 4 hours. <strong>Claim from TUI Airways</strong> (the operating airline), not from TUI Group or the hotel booking. TUI Airways is an EU261-regulated carrier.
              </p>
            </div>
            <div className="border border-gray-200 dark:border-gray-700 rounded-xl p-5 bg-white dark:bg-gray-800">
              <h3 className="font-semibold text-gray-900 dark:text-gray-100 mb-2">Example 2 — Third-party charter</h3>
              <p className="text-gray-600 dark:text-gray-400 text-sm">
                You book a package with Thomas Cook (before its collapse). The flight was operated by Condor. <strong>Claim from Condor</strong>, not Thomas Cook. Even though Condor was "hired" by the tour operator, Condor operated the flight and is the respondent under EU261.
              </p>
            </div>
            <div className="border border-gray-200 dark:border-gray-700 rounded-xl p-5 bg-white dark:bg-gray-800">
              <h3 className="font-semibold text-gray-900 dark:text-gray-100 mb-2">Example 3 — Wet-lease operation</h3>
              <p className="text-gray-600 dark:text-gray-400 text-sm">
                A tour operator charters a Titan Airways aircraft with crew. The flight carries the tour operator's branding and booking reference. <strong>Claim from Titan Airways</strong> (the actual operating carrier), who is named on the aircraft registration and bears operational responsibility.
              </p>
            </div>
          </div>
        </section>

        {/* Section 5 — Major charter airlines */}
        <section>
          <h2 className="text-2xl font-bold text-gray-900 dark:text-gray-100 mb-6">
            Major Charter Airlines: EU261 Coverage at a Glance
          </h2>
          <div className="overflow-x-auto rounded-xl border border-gray-200 dark:border-gray-700">
            <table className="w-full text-sm">
              <thead className="bg-gray-50 dark:bg-gray-800">
                <tr>
                  <th className="px-4 py-3 text-left font-semibold text-gray-700 dark:text-gray-300">Airline</th>
                  <th className="px-4 py-3 text-left font-semibold text-gray-700 dark:text-gray-300">Country</th>
                  <th className="px-4 py-3 text-left font-semibold text-gray-700 dark:text-gray-300">Regulation</th>
                  <th className="px-4 py-3 text-left font-semibold text-gray-700 dark:text-gray-300">Enforcement body</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-100 dark:divide-gray-700">
                {[
                  { airline: "TUI Airways", country: "UK", reg: "UK261", body: "CAA (UK)" },
                  { airline: "TUIfly (Germany)", country: "Germany", reg: "EU261", body: "LBA (Germany)" },
                  { airline: "Jet2", country: "UK", reg: "UK261", body: "CAA (UK)" },
                  { airline: "Condor", country: "Germany", reg: "EU261", body: "LBA (Germany)" },
                  { airline: "Corendon Airlines", country: "Netherlands", reg: "EU261", body: "ILT (Netherlands)" },
                  { airline: "Sunclass Airlines (Albastar)", country: "Denmark/Spain", reg: "EU261", body: "Trafikstyrelsen / AESA" },
                  { airline: "Enter Air", country: "Poland", reg: "EU261", body: "ULC (Poland)" },
                  { airline: "Privilege Style", country: "Spain", reg: "EU261", body: "AESA (Spain)" },
                  { airline: "Titan Airways", country: "UK", reg: "UK261", body: "CAA (UK)" },
                  { airline: "Small Planet Airlines", country: "Lithuania", reg: "EU261", body: "CAA Lithuania" },
                ].map((row, i) => (
                  <tr key={i} className={i % 2 === 0 ? "bg-white dark:bg-gray-900" : "bg-gray-50 dark:bg-gray-800"}>
                    <td className="px-4 py-3 font-medium text-gray-900 dark:text-gray-100">{row.airline}</td>
                    <td className="px-4 py-3 text-gray-600 dark:text-gray-400">{row.country}</td>
                    <td className="px-4 py-3">
                      <span className="bg-blue-100 dark:bg-blue-900 text-blue-700 dark:text-blue-300 px-2 py-0.5 rounded text-xs font-semibold">
                        {row.reg}
                      </span>
                    </td>
                    <td className="px-4 py-3 text-gray-600 dark:text-gray-400 text-xs">{row.body}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </section>

        {/* Section 6 — Package Travel Directive */}
        <section>
          <h2 className="text-2xl font-bold text-gray-900 dark:text-gray-100 mb-4">
            EU261 and Package Holiday Rights: Two Separate Claims
          </h2>
          <p className="text-gray-700 dark:text-gray-300 mb-4">
            If you booked a package holiday, you have <strong>two sets of rights</strong> that operate independently:
          </p>
          <div className="grid md:grid-cols-2 gap-6">
            <div className="border border-blue-200 dark:border-blue-800 rounded-xl p-5 bg-blue-50 dark:bg-blue-950">
              <h3 className="font-bold text-blue-800 dark:text-blue-300 mb-3">EU261 (from the airline)</h3>
              <ul className="space-y-1 text-gray-700 dark:text-gray-300 text-sm">
                <li>✅ Up to €600 cash compensation</li>
                <li>✅ Care rights: meals, hotel, communications</li>
                <li>✅ Right to refund or re-routing</li>
                <li>✅ Applies for delays of 3+ hours at arrival</li>
              </ul>
            </div>
            <div className="border border-green-200 dark:border-green-800 rounded-xl p-5 bg-green-50 dark:bg-green-950">
              <h3 className="font-bold text-green-800 dark:text-green-300 mb-3">Package Travel Directive (from tour operator)</h3>
              <ul className="space-y-1 text-gray-700 dark:text-gray-300 text-sm">
                <li>✅ Price reduction for non-conforming package</li>
                <li>✅ Full refund if significant proportion cancelled</li>
                <li>✅ Damages for ruined holiday (e.g. 2 days lost)</li>
                <li>✅ ATOL/ABTA protection on insolvency (UK)</li>
              </ul>
            </div>
          </div>
          <p className="text-gray-700 dark:text-gray-300 mt-4 text-sm">
            You can pursue both simultaneously. Getting €600 from the airline does not reduce what you can claim from the tour operator for a ruined holiday, and vice versa.
          </p>
        </section>

        {/* Section 7 — Extraordinary circumstances for charters */}
        <section>
          <h2 className="text-2xl font-bold text-gray-900 dark:text-gray-100 mb-4">
            Extraordinary Circumstances on Charter Flights
          </h2>
          <p className="text-gray-700 dark:text-gray-300 mb-4">
            The extraordinary circumstances defence works the same way for charter flights as for scheduled flights. The airline must prove:
          </p>
          <ol className="space-y-2 text-gray-700 dark:text-gray-300 mb-6 ml-4">
            <li className="flex items-start gap-2">
              <span className="font-bold text-orange-600 dark:text-orange-400 shrink-0">1.</span>
              The event genuinely could not have been avoided even if all reasonable measures had been taken
            </li>
            <li className="flex items-start gap-2">
              <span className="font-bold text-orange-600 dark:text-orange-400 shrink-0">2.</span>
              The event directly caused <em>this specific</em> delay or cancellation
            </li>
          </ol>
          <p className="text-gray-700 dark:text-gray-300 mb-4">
            Charter airlines sometimes lean on vague weather or "operational reasons" arguments. Courts have consistently required specific evidence. If the airline can't demonstrate the causal link, the defence fails.
          </p>
          <div className="grid md:grid-cols-2 gap-4">
            <div className="bg-green-50 dark:bg-green-950 border border-green-200 dark:border-green-800 rounded-xl p-4">
              <h3 className="font-semibold text-green-800 dark:text-green-300 mb-2 text-sm">Valid extraordinary circumstances</h3>
              <ul className="space-y-1 text-xs text-gray-700 dark:text-gray-300">
                <li className="flex items-center gap-1"><CheckCircle className="w-3 h-3 text-green-500" /> Airport closure due to volcanic ash</li>
                <li className="flex items-center gap-1"><CheckCircle className="w-3 h-3 text-green-500" /> Severe storm closing destination airport</li>
                <li className="flex items-center gap-1"><CheckCircle className="w-3 h-3 text-green-500" /> Bird strike causing genuine airworthiness issue</li>
                <li className="flex items-center gap-1"><CheckCircle className="w-3 h-3 text-green-500" /> Air traffic control strike (not airline staff)</li>
                <li className="flex items-center gap-1"><CheckCircle className="w-3 h-3 text-green-500" /> Security threat closing terminal</li>
              </ul>
            </div>
            <div className="bg-red-50 dark:bg-red-950 border border-red-200 dark:border-red-800 rounded-xl p-4">
              <h3 className="font-semibold text-red-800 dark:text-red-300 mb-2 text-sm">Not extraordinary circumstances</h3>
              <ul className="space-y-1 text-xs text-gray-700 dark:text-gray-300">
                <li className="flex items-center gap-1"><XCircle className="w-3 h-3 text-red-500" /> Technical fault (Wallentin-Hermann ruling)</li>
                <li className="flex items-center gap-1"><XCircle className="w-3 h-3 text-red-500" /> Staff illness or shortage</li>
                <li className="flex items-center gap-1"><XCircle className="w-3 h-3 text-red-500" /> Aircraft not positioned in time</li>
                <li className="flex items-center gap-1"><XCircle className="w-3 h-3 text-red-500" /> "Operational reasons" without specifics</li>
                <li className="flex items-center gap-1"><XCircle className="w-3 h-3 text-red-500" /> Overbooking or load management</li>
              </ul>
            </div>
          </div>
        </section>

        {/* Section 8 — How to claim */}
        <section>
          <h2 className="text-2xl font-bold text-gray-900 dark:text-gray-100 mb-4">
            How to Claim EU261 for a Charter Flight
          </h2>
          <div className="space-y-4">
            {[
              {
                step: "1",
                title: "Identify the operating airline",
                desc: "Check your boarding pass, the aircraft livery, or the airline's IATA code on your booking confirmation. This is who you file the claim against — not the tour operator.",
              },
              {
                step: "2",
                title: "Document everything at the airport",
                desc: "Note the actual departure and arrival times. Get written confirmation of delay from ground staff. Keep meal or hotel receipts provided under Article 9 care rights.",
              },
              {
                step: "3",
                title: "Calculate your entitlement",
                desc: "Use the distance-based table: €250 / €400 / €600 based on route distance and arrival delay (3+ hours, or cancellation without 14 days' notice).",
              },
              {
                step: "4",
                title: "Submit a written claim to the airline",
                desc: "Email the airline's claims department citing EU Regulation 261/2004. Include flight number, date, booking reference, delay duration, and your bank details for transfer.",
              },
              {
                step: "5",
                title: "Escalate if the airline refuses or ignores",
                desc: "File with the national enforcement body (CAA, LBA, ULC, DGAC). Alternatively, use an ADR scheme or a claims specialist like ClaimWinger — no upfront cost, 30% on success.",
              },
            ].map((item) => (
              <div
                key={item.step}
                className="flex gap-4 bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-xl p-5 shadow-sm"
              >
                <div className="w-10 h-10 rounded-full bg-orange-100 dark:bg-orange-900 text-orange-700 dark:text-orange-300 font-bold text-lg flex items-center justify-center shrink-0">
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

        {/* FAQ */}
        <section>
          <h2 className="text-2xl font-bold text-gray-900 dark:text-gray-100 mb-6">
            Frequently Asked Questions
          </h2>
          <div className="space-y-4">
            {[
              {
                q: "Does EU261 apply to charter flights?",
                a: "Yes. EU Regulation 261/2004 applies to all commercial passenger flights departing from an EU airport, or arriving into the EU on an EU-based carrier. Charter flights are not excluded. If your charter was delayed by 3+ hours, cancelled, or you were denied boarding, you are entitled to EU261 compensation.",
              },
              {
                q: "Who do I claim compensation from — the tour operator or the airline?",
                a: "EU261 compensation is always claimed from the operating airline — not the tour operator. Even if you booked as part of a package holiday, the airline that operated the flight is legally responsible for EU261 payments.",
              },
              {
                q: "Does EU261 apply to TUI, Jet2, or Condor charter flights?",
                a: "Yes. TUI Airways, Jet2, and Condor are commercial airlines subject to EU261 (or UK261 for TUI and Jet2 on UK departures). Their charter operations are covered identically to scheduled service flights.",
              },
              {
                q: "Can I claim EU261 and a package holiday refund at the same time?",
                a: "Yes — these are separate rights. EU261 compensation (from the airline) covers the delay itself. Package holiday rights under the Package Travel Directive may entitle you to a price reduction or refund from the tour operator for a ruined holiday. Both claims can proceed simultaneously.",
              },
              {
                q: "What if bad weather cancelled my charter flight?",
                a: "Genuine severe weather can qualify as an extraordinary circumstance, exempting the airline from EU261 compensation. However, the airline must prove the specific weather event caused the specific delay. Care rights (meals, hotel) still apply regardless.",
              },
            ].map((item, i) => (
              <details
                key={i}
                className="border border-gray-200 dark:border-gray-700 rounded-xl overflow-hidden group"
              >
                <summary className="flex items-center justify-between px-6 py-4 cursor-pointer bg-white dark:bg-gray-800 hover:bg-gray-50 dark:hover:bg-gray-750 font-medium text-gray-900 dark:text-gray-100">
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
        <div className="bg-gradient-to-br from-gray-900 to-orange-900 rounded-2xl p-8 text-white text-center shadow-xl">
          <h3 className="text-2xl font-bold mb-3">Charter flight delayed? Claim up to €600.</h3>
          <p className="text-gray-300 mb-2">
            ClaimWinger handles EU261 and UK261 claims against all charter carriers. No upfront payment.
          </p>
          <p className="text-gray-400 text-sm mb-6">
            30% fee on success only (+ 23% VAT for Polish residents, 0% VAT for all other passengers).
          </p>
          <div className="flex flex-col sm:flex-row gap-3 justify-center">
            <a
              href={`https://claimwinger.com/delayed-flight?utm_source=problemlot.com&utm_medium=article&utm_campaign=${SLUG}&utm_content=cta_bottom`}
              target="_blank"
              rel="noopener noreferrer"
              onClick={() => trackCTA("Check my charter claim", "bottom")}
            >
              <Button className="bg-orange-500 hover:bg-orange-400 text-white font-semibold px-8 py-3 w-full sm:w-auto">
                Check My Charter Claim <ArrowRight className="ml-2 w-4 h-4" />
              </Button>
            </a>
            <Link href="/en/blog">
              <Button
                variant="outline"
                className="border-gray-600 text-gray-300 hover:bg-gray-800 px-8 py-3 w-full sm:w-auto"
              >
                More EU261 Guides
              </Button>
            </Link>
          </div>
        </div>

        {/* Related articles */}
        <section>
          <h2 className="text-xl font-bold text-gray-900 dark:text-gray-100 mb-4">Related Guides</h2>
          <div className="grid md:grid-cols-3 gap-4">
            {[
              {
                title: "Does EU261 Apply to Non-EU Airlines?",
                slug: "eu261-non-eu-airlines-does-it-apply",
                color: "purple",
              },
              {
                title: "What Are Extraordinary Circumstances Under EU261?",
                slug: "extraordinary-circumstances-eu261-definition",
                color: "purple",
              },
              {
                title: "How Much Compensation for a Delayed Flight?",
                slug: "how-much-compensation-delayed-flight",
                color: "blue",
              },
            ].map((article) => (
              <Link
                key={article.slug}
                href={`/en/blog/${article.slug}`}
                className="border border-gray-200 dark:border-gray-700 rounded-xl p-4 hover:border-orange-300 dark:hover:border-orange-600 hover:shadow-md transition-all bg-white dark:bg-gray-800"
              >
                <h3 className="font-medium text-gray-900 dark:text-gray-100 text-sm leading-snug">
                  {article.title}
                </h3>
                <span className="text-orange-600 dark:text-orange-400 text-xs mt-2 inline-block font-medium">
                  Read guide →
                </span>
              </Link>
            ))}
          </div>
        </section>

      </div>
    </LayoutEn>
  );
}
