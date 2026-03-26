import { LayoutEn } from "@/components/LayoutEn";
import { SEO } from "@/components/SEO";
import Link from "next/link";
import { ArrowRight, CheckCircle, XCircle, AlertCircle, Shield } from "lucide-react";
import { Button } from "@/components/ui/button";

const SLUG = "airline-bankrupt-eu261-compensation";

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

export default function AirlineBankruptEU261Compensation() {
  const structuredData = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "Article",
        headline: "What Happens If the Airline Goes Bankrupt?",
        description:
          "If your airline goes bankrupt before or during your flight, your EU261 compensation claim is unlikely to succeed — but you may recover your ticket cost through ATOL, travel insurance, or a credit card chargeback.",
        url: "https://problemlot.com/en/blog/airline-bankrupt-eu261-compensation",
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
          "@id": "https://problemlot.com/en/blog/airline-bankrupt-eu261-compensation",
        },
      },
      {
        "@type": "FAQPage",
        mainEntity: [
          {
            "@type": "Question",
            name: "Can I claim EU261 compensation if the airline goes bankrupt?",
            acceptedAnswer: {
              "@type": "Answer",
              text: "EU261 compensation is effectively uncollectable from a bankrupt airline. As an unsecured creditor, you join the back of the queue in insolvency proceedings — behind secured creditors, employees, and tax authorities. In practice, unsecured creditors typically recover little or nothing. Your best recovery options are ATOL protection (UK), travel insurance, or credit card chargeback.",
            },
          },
          {
            "@type": "Question",
            name: "What happens to my ticket if my airline goes bankrupt?",
            acceptedAnswer: {
              "@type": "Answer",
              text: "If the airline ceases operations, your ticket is worthless as a travel document. You will not be automatically rebooked. In the UK, ATOL protection covers package holidays. For standalone flights, credit card chargeback (Section 75 in UK, chargeback for Visa/Mastercard) or travel insurance are your best routes to recover the ticket cost.",
            },
          },
          {
            "@type": "Question",
            name: "Does ATOL protect me if my airline goes bust?",
            acceptedAnswer: {
              "@type": "Answer",
              text: "ATOL (Air Travel Organiser's Licence) protects UK-based package holiday bookings — flights plus accommodation sold as a package. If you bought a package holiday through an ATOL-licensed travel agent and the airline collapses, you are entitled to either repatriation (if abroad) or a full refund. ATOL does not cover standalone flight-only bookings.",
            },
          },
          {
            "@type": "Question",
            name: "Can I get a chargeback if my airline goes bankrupt?",
            acceptedAnswer: {
              "@type": "Answer",
              text: "Yes — credit and debit card chargebacks are one of the most reliable recovery routes when an airline ceases trading. For credit cards (Section 75 in the UK covers purchases over £100), you can claim from your card issuer. For debit cards and lower-value credit card purchases, Visa/Mastercard chargeback rules still apply. Act quickly — chargebacks typically have a 120-day window from the charge date.",
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
            name: "What Happens If the Airline Goes Bankrupt?",
            item: "https://problemlot.com/en/blog/airline-bankrupt-eu261-compensation",
          },
        ],
      },
    ],
  };

  return (
    <LayoutEn>
      <SEO
        title="What Happens If the Airline Goes Bankrupt? | EU261 & Recovery Options"
        description="Airline bankruptcy makes EU261 claims uncollectable in practice. Your real recovery routes: ATOL (UK), credit card chargeback, and travel insurance. Full guide."
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
            <span className="text-gray-900 dark:text-white">Airline Bankruptcy & EU261</span>
          </div>
        </div>
      </nav>

      {/* Hero */}
      <section className="bg-gradient-to-br from-blue-50 to-indigo-100 dark:from-gray-800 dark:to-gray-900 py-14">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <div className="inline-flex items-center gap-2 bg-blue-100 dark:bg-blue-900/40 text-blue-700 dark:text-blue-300 px-4 py-1.5 rounded-full text-sm font-medium mb-6">
              <Shield className="h-4 w-4" />
              Airline Insolvency — Passenger Rights
            </div>
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-6">
              What Happens If the Airline Goes Bankrupt?
            </h1>
            <p className="text-xl text-gray-700 dark:text-gray-300 mb-8">
              Airline insolvency is EU261's blind spot. The regulation gives you rights — but there is no one to enforce them against when the airline no longer exists. Here is the honest picture: what EU261 can and cannot do, and which routes actually get your money back.
            </p>
          </div>
        </div>
      </section>

      {/* Main article */}
      <article className="py-12">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto">

            {/* The hard truth about EU261 and bankruptcy */}
            <section className="mb-10">
              <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">
                EU261 and Airline Bankruptcy: The Hard Truth
              </h2>
              <p className="text-gray-700 dark:text-gray-300 mb-4">
                EU Regulation 261/2004 creates legal rights against the <em>operating carrier</em>. When that carrier ceases trading and enters insolvency proceedings, it does not extinguish your legal claim — but it makes it practically uncollectable.
              </p>
              <p className="text-gray-700 dark:text-gray-300 mb-4">
                As a passenger with an EU261 compensation claim, you become an <strong>unsecured creditor</strong> in the airline's insolvency. In the creditor hierarchy, you sit below:
              </p>
              <div className="bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-xl overflow-hidden mb-6">
                <div className="divide-y divide-gray-200 dark:divide-gray-700">
                  {[
                    { rank: "1", label: "Secured creditors (banks, leaseholders)", color: "red" },
                    { rank: "2", label: "Insolvency administrator costs", color: "red" },
                    { rank: "3", label: "Employee wages and redundancy", color: "orange" },
                    { rank: "4", label: "Tax authorities (VAT, PAYE)", color: "orange" },
                    { rank: "5", label: "Unsecured creditors — including passengers", color: "gray" },
                  ].map((item) => (
                    <div key={item.rank} className={`flex items-center gap-4 px-5 py-3 ${item.color === "gray" ? "bg-gray-100 dark:bg-gray-700" : ""}`}>
                      <span className={`w-7 h-7 rounded-full flex items-center justify-center text-xs font-bold flex-shrink-0 ${
                        item.color === "red" ? "bg-red-600 text-white" :
                        item.color === "orange" ? "bg-orange-500 text-white" :
                        "bg-gray-400 text-white"
                      }`}>{item.rank}</span>
                      <span className={`text-sm font-medium ${item.color === "gray" ? "text-gray-700 dark:text-gray-200" : "text-gray-900 dark:text-white"}`}>
                        {item.label}
                        {item.color === "gray" && <span className="ml-2 text-xs text-gray-500 dark:text-gray-400 font-normal">(← you are here)</span>}
                      </span>
                    </div>
                  ))}
                </div>
              </div>
              <div className="bg-red-50 dark:bg-red-900/20 border border-red-200 dark:border-red-800 rounded-xl p-5">
                <div className="flex items-start gap-3">
                  <AlertCircle className="h-5 w-5 text-red-600 mt-0.5 flex-shrink-0" />
                  <p className="text-sm text-red-800 dark:text-red-200">
                    <strong>In practice:</strong> Major airline failures — Monarch (2017), Thomas Cook (2019), FlyBe (2020) — left unsecured creditors, including passengers, recovering <strong>0–5 pence in the pound</strong> at best. EU261 claims are technically valid but financially worthless in these situations.
                  </p>
                </div>
              </div>
            </section>

            {/* What actually happens step by step */}
            <section className="mb-10">
              <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">
                What Actually Happens When an Airline Collapses
              </h2>
              <div className="space-y-4">
                {[
                  {
                    scenario: "Airline ceases operations before your flight",
                    what: "Your flight is cancelled with immediate effect. You will not be automatically rebooked. The airline's website and customer service will likely go dark. Ticket is immediately worthless.",
                    action: "Check ATOL status (if UK package), initiate credit card chargeback, and claim on travel insurance immediately.",
                  },
                  {
                    scenario: "Airline collapses while you are abroad",
                    what: "You are stranded. If covered by ATOL (UK package holiday), the CAA will arrange repatriation. Otherwise, you must book a return flight at your own expense and claim the cost back from your card issuer or insurer.",
                    action: "If ATOL covered: call the ATOL hotline. If not: book alternative transport and keep all receipts. Claim from card or insurer immediately on return.",
                  },
                  {
                    scenario: "Airline enters administration but keeps flying (temporary)",
                    what: "Some airlines enter administration while attempting a rescue deal and continue limited operations (e.g. Flybe 2020 first administration, WOW Air before final collapse). Flights may operate or be cancelled unpredictably.",
                    action: "Do not wait. Initiate chargeback and insurance claims now — before the situation deteriorates further.",
                  },
                ].map((item, i) => (
                  <div key={i} className="bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-xl p-5">
                    <h3 className="font-bold text-gray-900 dark:text-white mb-2">{item.scenario}</h3>
                    <p className="text-sm text-gray-600 dark:text-gray-400 mb-3">{item.what}</p>
                    <div className="flex items-start gap-2 p-3 bg-blue-50 dark:bg-blue-900/20 rounded-lg">
                      <ArrowRight className="h-4 w-4 text-blue-600 mt-0.5 flex-shrink-0" />
                      <p className="text-sm text-blue-800 dark:text-blue-200"><strong>Action:</strong> {item.action}</p>
                    </div>
                  </div>
                ))}
              </div>
            </section>

            {/* Recovery options */}
            <section className="mb-10">
              <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">
                Your Real Recovery Options When an Airline Goes Bust
              </h2>
              <p className="text-gray-700 dark:text-gray-300 mb-6">
                Forget EU261 as your primary route in this scenario. These are the mechanisms that actually pay out:
              </p>

              <div className="space-y-5">
                {/* ATOL */}
                <div className="bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-xl p-5">
                  <div className="flex items-start gap-3 mb-3">
                    <CheckCircle className="h-5 w-5 text-green-600 flex-shrink-0 mt-0.5" />
                    <div>
                      <h3 className="font-bold text-gray-900 dark:text-white">ATOL Protection (UK only)</h3>
                      <span className="text-xs bg-green-100 dark:bg-green-900/40 text-green-700 dark:text-green-300 px-2 py-0.5 rounded">Most reliable for UK package holidays</span>
                    </div>
                  </div>
                  <p className="text-sm text-gray-600 dark:text-gray-400 mb-2">
                    ATOL (Air Travel Organiser's Licence) is a UK government-backed scheme that protects package holidays — flights bundled with accommodation or car hire, sold by an ATOL-licensed operator.
                  </p>
                  <ul className="text-sm text-gray-600 dark:text-gray-400 space-y-1 mb-3">
                    <li className="flex items-start gap-2"><CheckCircle className="h-3.5 w-3.5 text-green-500 mt-0.5 flex-shrink-0" />Full refund if not yet departed</li>
                    <li className="flex items-start gap-2"><CheckCircle className="h-3.5 w-3.5 text-green-500 mt-0.5 flex-shrink-0" />Repatriation flights if stranded abroad</li>
                    <li className="flex items-start gap-2"><XCircle className="h-3.5 w-3.5 text-red-500 mt-0.5 flex-shrink-0" />Does NOT cover flight-only bookings (even if sold by a travel agent without accommodation)</li>
                  </ul>
                  <p className="text-xs text-gray-500 dark:text-gray-400">Check your ATOL certificate — it should be provided at booking. Alternatively, check atol.org.</p>
                </div>

                {/* Credit card */}
                <div className="bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-xl p-5">
                  <div className="flex items-start gap-3 mb-3">
                    <CheckCircle className="h-5 w-5 text-green-600 flex-shrink-0 mt-0.5" />
                    <div>
                      <h3 className="font-bold text-gray-900 dark:text-white">Credit Card Chargeback / Section 75 (UK)</h3>
                      <span className="text-xs bg-green-100 dark:bg-green-900/40 text-green-700 dark:text-green-300 px-2 py-0.5 rounded">Best option for most flight-only bookings</span>
                    </div>
                  </div>
                  <p className="text-sm text-gray-600 dark:text-gray-400 mb-3">
                    If you paid by card and the service was not provided, you can recover the money:
                  </p>
                  <div className="grid md:grid-cols-2 gap-3 mb-3">
                    <div className="p-3 bg-blue-50 dark:bg-blue-900/20 rounded-lg text-sm">
                      <p className="font-semibold text-blue-900 dark:text-blue-100 mb-1">UK Section 75 (credit card)</p>
                      <p className="text-blue-800 dark:text-blue-200 text-xs">Purchases £100–£30,000 on a credit card. Joint liability with the card issuer. File directly with your bank.</p>
                    </div>
                    <div className="p-3 bg-blue-50 dark:bg-blue-900/20 rounded-lg text-sm">
                      <p className="font-semibold text-blue-900 dark:text-blue-100 mb-1">Chargeback (all cards — Visa, Mastercard)</p>
                      <p className="text-blue-800 dark:text-blue-200 text-xs">Works for debit cards and credit card purchases under £100. File within 120 days of the transaction. Less powerful than Section 75 but still effective.</p>
                    </div>
                  </div>
                  <p className="text-xs text-gray-500 dark:text-gray-400">For EU-based cardholders, equivalent consumer protection rules apply under national law (e.g. the Polish consumer credit directive) — contact your bank directly.</p>
                </div>

                {/* Travel insurance */}
                <div className="bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-xl p-5">
                  <div className="flex items-start gap-3 mb-3">
                    <CheckCircle className="h-5 w-5 text-green-600 flex-shrink-0 mt-0.5" />
                    <div>
                      <h3 className="font-bold text-gray-900 dark:text-white">Travel Insurance — Airline Failure Cover</h3>
                      <span className="text-xs bg-amber-100 dark:bg-amber-900/40 text-amber-700 dark:text-amber-300 px-2 py-0.5 rounded">Check your policy carefully</span>
                    </div>
                  </div>
                  <p className="text-sm text-gray-600 dark:text-gray-400 mb-2">
                    Some travel insurance policies include "scheduled airline failure" (SAF) or "airline insolvency" cover. This is not standard — you must check whether your specific policy includes it.
                  </p>
                  <ul className="text-sm text-gray-600 dark:text-gray-400 space-y-1">
                    <li className="flex items-start gap-2"><CheckCircle className="h-3.5 w-3.5 text-green-500 mt-0.5 flex-shrink-0" />May cover ticket refund and additional transport costs</li>
                    <li className="flex items-start gap-2"><CheckCircle className="h-3.5 w-3.5 text-green-500 mt-0.5 flex-shrink-0" />May cover accommodation if stranded abroad</li>
                    <li className="flex items-start gap-2"><XCircle className="h-3.5 w-3.5 text-red-500 mt-0.5 flex-shrink-0" />Most basic policies do NOT include airline failure cover — check explicitly</li>
                    <li className="flex items-start gap-2"><AlertCircle className="h-3.5 w-3.5 text-amber-500 mt-0.5 flex-shrink-0" />Usually only covers airlines that were financially solvent when the policy was taken out</li>
                  </ul>
                </div>

                {/* Insolvency claim */}
                <div className="bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-xl p-5">
                  <div className="flex items-start gap-3 mb-3">
                    <AlertCircle className="h-5 w-5 text-amber-600 flex-shrink-0 mt-0.5" />
                    <div>
                      <h3 className="font-bold text-gray-900 dark:text-white">Filing as a Creditor in Insolvency Proceedings</h3>
                      <span className="text-xs bg-gray-100 dark:bg-gray-700 text-gray-600 dark:text-gray-300 px-2 py-0.5 rounded">Last resort — very low recovery rate</span>
                    </div>
                  </div>
                  <p className="text-sm text-gray-600 dark:text-gray-400">
                    You can formally register as an unsecured creditor with the airline's administrator. This preserves your legal claim but recovery is typically negligible — historical airline collapses returned 0–5% to unsecured creditors. This should be pursued only after exhausting ATOL, card chargeback, and insurance options, and mainly to preserve your claim in the unlikely event of a meaningful distribution.
                  </p>
                </div>
              </div>
            </section>

            {/* CTA mid */}
            <div className="bg-blue-600 rounded-2xl p-8 text-center text-white my-10">
              <h3 className="text-2xl font-bold mb-3">Is Your Airline Still Operating?</h3>
              <p className="text-blue-100 mb-6">
                If your airline is still flying and your flight was delayed or cancelled 3+ hours, you may be owed up to €600 under EU261. Check your eligibility now before it becomes a bigger problem.
              </p>
              <Button
                asChild
                size="lg"
                className="bg-white text-blue-600 hover:bg-gray-100"
                onClick={() => trackCTA("Check my EU261 claim", "mid")}
              >
                <a
                  href={`https://claimwinger.com/delayed-flight?utm_source=problemlot.com&utm_medium=article&utm_campaign=${SLUG}&utm_content=cta_mid`}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Check My EU261 Claim <ArrowRight className="ml-2 h-5 w-5" />
                </a>
              </Button>
            </div>

            {/* Prevention */}
            <section className="mb-10">
              <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">
                How to Protect Yourself Before an Airline Fails
              </h2>
              <p className="text-gray-700 dark:text-gray-300 mb-6">
                The best protection against airline insolvency is taken before you book:
              </p>
              <div className="grid md:grid-cols-2 gap-4">
                {[
                  {
                    title: "Always pay by credit card",
                    detail: "Section 75 (UK) or card chargeback rights give you a recovery mechanism that does not depend on the airline's solvency.",
                  },
                  {
                    title: "Book ATOL-protected packages where possible",
                    detail: "If combining flight and accommodation, booking as a package through an ATOL-licensed operator gives you government-backed protection.",
                  },
                  {
                    title: "Buy travel insurance with airline failure cover",
                    detail: "Check the policy wording explicitly for 'scheduled airline failure' cover before buying. It is not included in most cheap policies.",
                  },
                  {
                    title: "Monitor airline financial news for warning signs",
                    detail: "Profit warnings, sudden route cuts, sale-and-leaseback of aircraft, or missed bond payments are early warning signs of financial distress.",
                  },
                ].map((item, i) => (
                  <div key={i} className="bg-blue-50 dark:bg-blue-900/20 border border-blue-200 dark:border-blue-800 rounded-xl p-4">
                    <h3 className="font-semibold text-blue-900 dark:text-blue-100 mb-2 flex items-center gap-2">
                      <CheckCircle className="h-4 w-4 text-blue-600 flex-shrink-0" />
                      {item.title}
                    </h3>
                    <p className="text-sm text-blue-800 dark:text-blue-200">{item.detail}</p>
                  </div>
                ))}
              </div>
            </section>

            {/* Notable cases */}
            <section className="mb-10">
              <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">
                Notable Airline Failures — What Passengers Recovered
              </h2>
              <div className="overflow-x-auto">
                <table className="w-full border-collapse rounded-xl overflow-hidden text-sm">
                  <thead>
                    <tr className="bg-gray-800 text-white">
                      <th className="px-4 py-3 text-left">Airline</th>
                      <th className="px-4 py-3 text-left">Year</th>
                      <th className="px-4 py-3 text-left">Passengers affected</th>
                      <th className="px-4 py-3 text-left">Recovery routes</th>
                    </tr>
                  </thead>
                  <tbody>
                    {[
                      { airline: "Monarch Airlines", year: "2017", passengers: "110,000 abroad; 750,000 future bookings", recovery: "ATOL repatriation for those abroad; refunds via ATOL for UK package buyers; chargeback for flight-only" },
                      { airline: "Thomas Cook", year: "2019", passengers: "150,000 abroad; 600,000 future bookings", recovery: "ATOL for packages; EU261 claims filed but largely uncollectable; some chargeback success" },
                      { airline: "Flybe", year: "2020", passengers: "~2.4m annual passengers", recovery: "No ATOL (no packages); chargeback and travel insurance were primary recovery routes; EU261 unenforceable" },
                      { airline: "WOW Air", year: "2019", passengers: "~25,000 passengers stranded", recovery: "No EU protection (Iceland-based); some US credit card chargebacks; EU261 applied for EU-departing flights but unenforceable" },
                    ].map((row, i) => (
                      <tr key={i} className={i % 2 === 0 ? "bg-white dark:bg-gray-800" : "bg-gray-50 dark:bg-gray-700"}>
                        <td className="px-4 py-3 font-semibold text-gray-900 dark:text-white">{row.airline}</td>
                        <td className="px-4 py-3 text-gray-600 dark:text-gray-400">{row.year}</td>
                        <td className="px-4 py-3 text-gray-600 dark:text-gray-400">{row.passengers}</td>
                        <td className="px-4 py-3 text-gray-600 dark:text-gray-400 text-xs">{row.recovery}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </section>

            {/* Internal links */}
            <div className="bg-gray-50 dark:bg-gray-800 rounded-xl p-6 mb-10 border border-gray-200 dark:border-gray-700">
              <h3 className="font-bold text-gray-900 dark:text-white mb-4">Related Guides</h3>
              <div className="grid md:grid-cols-2 gap-3">
                {[
                  { href: "/en/blog/lot-polish-airlines-cancelled-flight-compensation", label: "What to do when your flight is cancelled" },
                  { href: "/en/blog/how-much-compensation-delayed-flight", label: "How much compensation for a delayed flight?" },
                  { href: "/en/blog/eu261-claim-flight-3-years-ago", label: "Can I claim EU261 for a flight 3 years ago?" },
                  { href: "/en/blog/voucher-instead-cash-eu261-rights", label: "Do I have to accept a voucher instead of cash?" },
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
                    q: "Can I claim EU261 compensation if the airline goes bankrupt?",
                    a: "EU261 gives you a legal right, but it is effectively uncollectable from a bankrupt airline. As an unsecured creditor in insolvency proceedings, you join the queue behind secured lenders, the administrator, employees, and tax authorities. Historical airline failures returned almost nothing to unsecured creditors. Use ATOL, credit card chargeback, or travel insurance instead.",
                  },
                  {
                    q: "What happens to my ticket if my airline goes bankrupt?",
                    a: "Your ticket becomes worthless as a travel document — there is no obligation to rebook you. In the UK, ATOL protection applies if you booked a package holiday. For standalone flights, a credit card chargeback or travel insurance with airline failure cover are your best recovery routes.",
                  },
                  {
                    q: "Does ATOL protect me if my airline goes bust?",
                    a: "ATOL protects UK-based package holiday bookings — a flight bundled with accommodation or car hire sold by an ATOL-licensed operator. It provides repatriation if you are stranded abroad and full refunds if you have not yet departed. It does not cover flight-only bookings, even those sold through a travel agent.",
                  },
                  {
                    q: "Can I get a chargeback if my airline goes bankrupt?",
                    a: "Yes — this is one of the most reliable routes. UK credit card purchases over £100 are covered by Section 75 (joint liability with your card issuer). For debit cards and lower-value purchases, Visa/Mastercard chargeback applies. Act quickly — chargebacks typically have a 120-day window from the transaction date.",
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
              <h3 className="text-2xl font-bold mb-3">Still Flying? Check Your EU261 Rights</h3>
              <p className="text-blue-100 mb-6 max-w-xl mx-auto">
                If your airline is still operating and your flight was disrupted, EU261 gives you real, enforceable rights to up to €600. ClaimWinger handles the entire claim — no win, no fee. 30% commission only on success (+ VAT for Polish residents).
              </p>
              <Button
                asChild
                size="lg"
                className="bg-white text-blue-600 hover:bg-gray-100"
                onClick={() => trackCTA("Check my flight disruption claim", "bottom")}
              >
                <a
                  href={`https://claimwinger.com/delayed-flight?utm_source=problemlot.com&utm_medium=article&utm_campaign=${SLUG}&utm_content=cta_bottom`}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Check My Flight Disruption Claim <ArrowRight className="ml-2 h-5 w-5" />
                </a>
              </Button>
            </div>

          </div>
        </div>
      </article>
    </LayoutEn>
  );
}
