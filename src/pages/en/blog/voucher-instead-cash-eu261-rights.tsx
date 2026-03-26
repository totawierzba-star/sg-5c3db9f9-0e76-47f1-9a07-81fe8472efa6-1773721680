import { LayoutEn } from "@/components/LayoutEn";
import { SEO } from "@/components/SEO";
import Link from "next/link";
import { ArrowRight, CheckCircle, XCircle, AlertCircle, Shield } from "lucide-react";
import { Button } from "@/components/ui/button";

const SLUG = "voucher-instead-cash-eu261-rights";

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

export default function VoucherInsteadCashEu261() {
  const schema = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "Article",
        headline: "Do I Have to Accept a Voucher Instead of Cash? EU261 Voucher Rights Explained",
        description:
          "EU261 entitles you to cash compensation — not vouchers. Airlines cannot force vouchers as a substitute. Learn how to demand your money and what to do if the airline refuses.",
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
            name: "Do I have to accept a travel voucher instead of EU261 cash compensation?",
            acceptedAnswer: {
              "@type": "Answer",
              text: "No. EU261 grants you a legal right to monetary compensation. An airline can offer a voucher, but you are entitled to refuse and demand cash. Accepting a voucher voluntarily may waive your cash right depending on the wording, so read any documentation carefully before signing.",
            },
          },
          {
            "@type": "Question",
            name: "What if I already accepted a voucher — can I still claim cash?",
            acceptedAnswer: {
              "@type": "Answer",
              text: "It depends. If you accepted the voucher under pressure or without being informed of your cash right, you may still have a claim. If you freely and knowingly agreed, courts generally consider the right waived. Consult a claims specialist to assess your specific situation.",
            },
          },
          {
            "@type": "Question",
            name: "Can an airline offer a voucher instead of cash?",
            acceptedAnswer: {
              "@type": "Answer",
              text: "Yes — airlines can offer a voucher as an alternative, but only if you agree in writing. The passenger must give explicit, informed consent. An airline cannot unilaterally substitute a voucher for the statutory cash payment.",
            },
          },
          {
            "@type": "Question",
            name: "Is there a benefit to accepting a voucher?",
            acceptedAnswer: {
              "@type": "Answer",
              text: "Some airlines offer vouchers worth more than the statutory cash amount (e.g., €700 voucher vs €600 cash). This can be worthwhile if you fly regularly with that airline and the voucher has no expiry or restrictions. Always compare the actual cash-equivalent value before deciding.",
            },
          },
          {
            "@type": "Question",
            name: "What about flight refunds — is cash still required?",
            acceptedAnswer: {
              "@type": "Answer",
              text: "For ticket refunds (not compensation), the EU261 rule is the same: cash or equivalent financial transfer. A voucher for a refund requires your consent. If your flight was cancelled, you are entitled to a full cash refund within 7 days, regardless of how you paid.",
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
            name: "Do I Have to Accept a Voucher Instead of Cash?",
            item: `https://problemlot.com/en/blog/${SLUG}`,
          },
        ],
      },
    ],
  };

  return (
    <LayoutEn>
      <SEO
        title="Do I Have to Accept a Voucher Instead of Cash? EU261 Rights"
        description="EU261 entitles you to cash — not vouchers. Airlines cannot force vouchers as a substitute for statutory compensation. Learn how to demand what you're legally owed."
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
            <span className="text-gray-900 dark:text-gray-100 font-medium">Voucher vs Cash</span>
          </nav>
        </div>
      </div>

      {/* Hero */}
      <div className="bg-gradient-to-br from-purple-50 to-indigo-50 dark:from-purple-950 dark:to-indigo-950 border-b border-purple-100 dark:border-purple-900">
        <div className="max-w-4xl mx-auto px-4 py-12">
          <div className="flex items-center gap-2 mb-4">
            <span className="bg-purple-100 dark:bg-purple-900 text-purple-700 dark:text-purple-300 text-xs font-semibold px-3 py-1 rounded-full uppercase tracking-wide">
              Guide
            </span>
            <span className="text-gray-500 dark:text-gray-400 text-sm">11 min read</span>
          </div>
          <h1 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-gray-100 mb-4 leading-tight">
            Do I Have to Accept a Voucher Instead of Cash?
          </h1>
          <p className="text-xl text-gray-600 dark:text-gray-300 mb-6 leading-relaxed">
            Airlines routinely offer vouchers when they owe you EU261 compensation. Some passengers accept — many shouldn't. Here's exactly what the law says and how to demand cash.
          </p>
          <div className="bg-purple-600 text-white rounded-xl p-5 inline-block shadow-lg">
            <p className="text-lg font-bold">The short answer:</p>
            <p className="text-purple-100 mt-1">
              No. EU261 guarantees <strong className="text-white">cash compensation</strong>. You can refuse a voucher and demand payment. The airline cannot unilaterally substitute a voucher for your statutory right.
            </p>
          </div>
        </div>
      </div>

      <div className="max-w-4xl mx-auto px-4 py-12 space-y-12">

        {/* Section 1 — What the law says */}
        <section>
          <h2 className="text-2xl font-bold text-gray-900 dark:text-gray-100 mb-4">
            What EU261 Actually Says About Payment
          </h2>
          <p className="text-gray-700 dark:text-gray-300 mb-4">
            Regulation (EC) No 261/2004 specifies that compensation must be paid <strong>in cash</strong>, by electronic bank transfer, bank order, or bank cheque. Travel vouchers or credits are only permitted with the passenger's explicit written agreement.
          </p>
          <p className="text-gray-700 dark:text-gray-300 mb-4">
            The precise wording of Article 7(3):
          </p>
          <blockquote className="border-l-4 border-purple-500 pl-6 py-2 bg-purple-50 dark:bg-purple-950 rounded-r-lg mb-6">
            <p className="text-gray-800 dark:text-gray-200 italic">
              "The compensation referred to in paragraph 1 shall be paid in cash, by electronic bank transfer, bank orders or bank cheques or, with the signed agreement of the passenger, in travel vouchers and/or other services."
            </p>
            <p className="text-sm text-gray-500 dark:text-gray-400 mt-2">— EU Regulation 261/2004, Article 7(3)</p>
          </blockquote>
          <p className="text-gray-700 dark:text-gray-300">
            This is not ambiguous. The default is cash. Vouchers require your <em>signed agreement</em>. An airline email saying "we've issued a voucher" does not constitute your signed agreement.
          </p>
        </section>

        {/* Section 2 — Voucher vs Cash comparison */}
        <section>
          <h2 className="text-2xl font-bold text-gray-900 dark:text-gray-100 mb-6">
            Voucher vs Cash: What You're Actually Giving Up
          </h2>
          <div className="grid md:grid-cols-2 gap-6">
            <div className="border border-red-200 dark:border-red-800 rounded-xl p-6 bg-red-50 dark:bg-red-950">
              <h3 className="font-bold text-red-700 dark:text-red-400 text-lg mb-4 flex items-center gap-2">
                <XCircle className="w-5 h-5" /> Travel Voucher
              </h3>
              <ul className="space-y-2 text-gray-700 dark:text-gray-300 text-sm">
                <li className="flex items-start gap-2">
                  <XCircle className="w-4 h-4 text-red-500 mt-0.5 shrink-0" />
                  Only usable with that airline
                </li>
                <li className="flex items-start gap-2">
                  <XCircle className="w-4 h-4 text-red-500 mt-0.5 shrink-0" />
                  May have expiry date (often 12 months)
                </li>
                <li className="flex items-start gap-2">
                  <XCircle className="w-4 h-4 text-red-500 mt-0.5 shrink-0" />
                  Worthless if airline goes bankrupt
                </li>
                <li className="flex items-start gap-2">
                  <XCircle className="w-4 h-4 text-red-500 mt-0.5 shrink-0" />
                  Cannot be used for other carriers or expenses
                </li>
                <li className="flex items-start gap-2">
                  <XCircle className="w-4 h-4 text-red-500 mt-0.5 shrink-0" />
                  May have booking restrictions (blackout dates, fare classes)
                </li>
                <li className="flex items-start gap-2">
                  <XCircle className="w-4 h-4 text-red-500 mt-0.5 shrink-0" />
                  Cannot be converted to cash if you never fly again
                </li>
              </ul>
            </div>
            <div className="border border-green-200 dark:border-green-800 rounded-xl p-6 bg-green-50 dark:bg-green-950">
              <h3 className="font-bold text-green-700 dark:text-green-400 text-lg mb-4 flex items-center gap-2">
                <CheckCircle className="w-5 h-5" /> Cash Compensation
              </h3>
              <ul className="space-y-2 text-gray-700 dark:text-gray-300 text-sm">
                <li className="flex items-start gap-2">
                  <CheckCircle className="w-4 h-4 text-green-500 mt-0.5 shrink-0" />
                  Paid to your bank account or card
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle className="w-4 h-4 text-green-500 mt-0.5 shrink-0" />
                  No expiry — it's your money
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle className="w-4 h-4 text-green-500 mt-0.5 shrink-0" />
                  Secure even if airline subsequently fails
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle className="w-4 h-4 text-green-500 mt-0.5 shrink-0" />
                  Spend on anything — hotels, taxis, other airlines
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle className="w-4 h-4 text-green-500 mt-0.5 shrink-0" />
                  Your legal entitlement under EU261
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle className="w-4 h-4 text-green-500 mt-0.5 shrink-0" />
                  Enforceable through courts and regulators
                </li>
              </ul>
            </div>
          </div>
        </section>

        {/* Section 3 — When accepting a voucher might make sense */}
        <section>
          <h2 className="text-2xl font-bold text-gray-900 dark:text-gray-100 mb-4">
            When Might a Voucher Actually Be Worth It?
          </h2>
          <p className="text-gray-700 dark:text-gray-300 mb-4">
            There is one scenario where accepting a voucher can be rational: when the airline offers a <strong>higher value voucher</strong> than the statutory cash amount.
          </p>
          <div className="bg-amber-50 dark:bg-amber-950 border border-amber-200 dark:border-amber-800 rounded-xl p-6 mb-6">
            <h3 className="font-semibold text-amber-800 dark:text-amber-300 mb-3 flex items-center gap-2">
              <AlertCircle className="w-5 h-5" /> Example scenario
            </h3>
            <p className="text-gray-700 dark:text-gray-300 text-sm">
              You're entitled to €600 cash. The airline offers a €800 travel credit with no expiry and no restrictions. If you fly regularly with this carrier and the credit is genuinely flexible, the extra €200 may be worthwhile. But if there's any chance of bankruptcy, restrictions, or you don't plan to fly with them again — take the cash.
            </p>
          </div>
          <div className="bg-gray-50 dark:bg-gray-800 rounded-xl p-6">
            <h3 className="font-semibold text-gray-900 dark:text-gray-100 mb-3">Before accepting any voucher, check:</h3>
            <ul className="space-y-2 text-gray-700 dark:text-gray-300 text-sm">
              {[
                "Is the voucher value higher than your statutory cash entitlement?",
                "Does the voucher expire? If so, when?",
                "Are there blackout dates, fare class restrictions, or route limitations?",
                "Is the airline financially stable (check for debt news, credit ratings)?",
                "Can the voucher be transferred to another person if you don't use it?",
                "Does accepting the voucher waive your right to cash in the fine print?",
              ].map((item, i) => (
                <li key={i} className="flex items-start gap-2">
                  <span className="w-5 h-5 bg-amber-100 dark:bg-amber-900 text-amber-700 dark:text-amber-300 rounded-full text-xs font-bold flex items-center justify-center shrink-0 mt-0.5">
                    {i + 1}
                  </span>
                  {item}
                </li>
              ))}
            </ul>
          </div>
        </section>

        {/* Mid CTA */}
        <div className="bg-gradient-to-r from-purple-600 to-indigo-600 rounded-2xl p-8 text-white text-center shadow-lg">
          <Shield className="w-10 h-10 mx-auto mb-3 text-purple-200" />
          <h3 className="text-xl font-bold mb-2">Airline offered you a voucher?</h3>
          <p className="text-purple-100 mb-5 text-sm">
            Let ClaimWinger enforce your cash right. No win, no fee — 30% only on success.
          </p>
          <a
            href={`https://claimwinger.com/delayed-flight?utm_source=problemlot.com&utm_medium=article&utm_campaign=${SLUG}&utm_content=cta_mid`}
            target="_blank"
            rel="noopener noreferrer"
            onClick={() => trackCTA("Claim cash compensation", "mid")}
          >
            <Button className="bg-white text-purple-700 hover:bg-purple-50 font-semibold px-8 py-3">
              Claim Cash Compensation <ArrowRight className="ml-2 w-4 h-4" />
            </Button>
          </a>
        </div>

        {/* Section 4 — How to refuse a voucher */}
        <section>
          <h2 className="text-2xl font-bold text-gray-900 dark:text-gray-100 mb-4">
            How to Refuse a Voucher and Demand Cash
          </h2>
          <p className="text-gray-700 dark:text-gray-300 mb-6">
            If the airline has offered (or unilaterally issued) a voucher, here's how to reject it and claim what you're legally owed.
          </p>
          <div className="space-y-4">
            {[
              {
                step: "1",
                title: "Do not activate or use the voucher",
                desc: "Using the voucher — even partially — may be interpreted as acceptance. Don't book any flights with it while your claim is open.",
                color: "blue",
              },
              {
                step: "2",
                title: "Write to the airline in writing",
                desc: "Send a formal email or letter stating: (a) you decline the voucher, (b) you are entitled to monetary compensation under EU Regulation 261/2004, Article 7, and (c) you request payment within 14 days. Keep a copy.",
                color: "blue",
              },
              {
                step: "3",
                title: "Cite Article 7(3) explicitly",
                desc: "Airlines respond faster when you cite the exact provision. The phrase 'in accordance with Article 7(3) of EU Regulation 261/2004, I do not consent to receiving travel vouchers and require monetary payment' leaves no ambiguity.",
                color: "blue",
              },
              {
                step: "4",
                title: "Set a 14-day deadline",
                desc: "Give the airline 14 days to confirm cash payment. After this, you can escalate to a national enforcement body or use a claims management company.",
                color: "blue",
              },
              {
                step: "5",
                title: "Escalate if they ignore or refuse",
                desc: "File a complaint with the national authority (CAA in the UK, ULC in Poland, LBA in Germany, DGAC in France). Alternatively, submit to an ADR scheme (CEDR or AviationADR in the UK, SÖP in Germany). Or use a specialist like ClaimWinger — no upfront cost.",
                color: "purple",
              },
            ].map((item) => (
              <div key={item.step} className="flex gap-4 bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-xl p-5 shadow-sm">
                <div className={`w-10 h-10 rounded-full bg-${item.color}-100 dark:bg-${item.color}-900 text-${item.color}-700 dark:text-${item.color}-300 font-bold text-lg flex items-center justify-center shrink-0`}>
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

        {/* Section 5 — Airline by airline */}
        <section>
          <h2 className="text-2xl font-bold text-gray-900 dark:text-gray-100 mb-4">
            Airline Voucher Tactics: What to Watch For
          </h2>
          <p className="text-gray-700 dark:text-gray-300 mb-6">
            Different airlines use different approaches to steer passengers toward vouchers. Knowing the pattern helps you push back.
          </p>
          <div className="overflow-x-auto rounded-xl border border-gray-200 dark:border-gray-700">
            <table className="w-full text-sm">
              <thead className="bg-gray-50 dark:bg-gray-800">
                <tr>
                  <th className="px-4 py-3 text-left font-semibold text-gray-700 dark:text-gray-300">Airline</th>
                  <th className="px-4 py-3 text-left font-semibold text-gray-700 dark:text-gray-300">Common tactic</th>
                  <th className="px-4 py-3 text-left font-semibold text-gray-700 dark:text-gray-300">Counter-strategy</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-100 dark:divide-gray-700">
                {[
                  {
                    airline: "Ryanair",
                    tactic: "Offers vouchers by default in their app; cash option buried or absent",
                    counter: "Email claims@ryanair.com explicitly requesting cash; cite Art. 7(3)",
                  },
                  {
                    airline: "Wizz Air",
                    tactic: "Credits Wizz Cash (airline credit) to account without asking",
                    counter: "Do not use the credit; reject in writing within 7 days",
                  },
                  {
                    airline: "LOT Polish Airlines",
                    tactic: "May offer eVouchers for delays/cancellations; some staff uninformed on cash rights",
                    counter: "Request written confirmation of cash payment option before accepting anything",
                  },
                  {
                    airline: "EasyJet",
                    tactic: "Online portal defaults to voucher; cash option requires extra steps",
                    counter: "Navigate to 'cash' option or email customer services with Art. 7(3) citation",
                  },
                  {
                    airline: "British Airways",
                    tactic: "Avios miles offered in some scenarios; may appear similar to cash in value",
                    counter: "Avios are not cash; explicitly reject and request bank transfer",
                  },
                  {
                    airline: "Lufthansa",
                    tactic: "Generally compliant but may delay cash; sometimes offers Miles & More",
                    counter: "Set 14-day deadline in writing; escalate to LBA if missed",
                  },
                ].map((row, i) => (
                  <tr key={i} className={i % 2 === 0 ? "bg-white dark:bg-gray-900" : "bg-gray-50 dark:bg-gray-800"}>
                    <td className="px-4 py-3 font-medium text-gray-900 dark:text-gray-100">{row.airline}</td>
                    <td className="px-4 py-3 text-gray-600 dark:text-gray-400">{row.tactic}</td>
                    <td className="px-4 py-3 text-gray-700 dark:text-gray-300">{row.counter}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </section>

        {/* Section 6 — Already accepted a voucher */}
        <section>
          <h2 className="text-2xl font-bold text-gray-900 dark:text-gray-100 mb-4">
            I Already Accepted a Voucher — Can I Still Get Cash?
          </h2>
          <p className="text-gray-700 dark:text-gray-300 mb-4">
            This is a grey area, and the answer depends on how you accepted it.
          </p>
          <div className="space-y-4">
            <div className="bg-green-50 dark:bg-green-950 border border-green-200 dark:border-green-800 rounded-xl p-5">
              <h3 className="font-semibold text-green-800 dark:text-green-300 mb-2 flex items-center gap-2">
                <CheckCircle className="w-4 h-4" /> You may still have a claim if:
              </h3>
              <ul className="space-y-1 text-gray-700 dark:text-gray-300 text-sm">
                <li>• The airline sent a voucher without asking for your consent</li>
                <li>• You were not informed of your right to cash compensation</li>
                <li>• You accepted under explicit pressure or urgency ("accept now or lose compensation")</li>
                <li>• You have not yet used the voucher</li>
                <li>• The acceptance form did not explicitly state you were waiving your cash right</li>
              </ul>
            </div>
            <div className="bg-red-50 dark:bg-red-950 border border-red-200 dark:border-red-800 rounded-xl p-5">
              <h3 className="font-semibold text-red-800 dark:text-red-300 mb-2 flex items-center gap-2">
                <XCircle className="w-4 h-4" /> Your cash right is likely waived if:
              </h3>
              <ul className="space-y-1 text-gray-700 dark:text-gray-300 text-sm">
                <li>• You signed a document explicitly waiving the cash right</li>
                <li>• You've already used (or partially used) the voucher</li>
                <li>• The acceptance email clearly stated this was in lieu of EU261 cash compensation</li>
                <li>• Significant time has passed and the voucher is past its expiry</li>
              </ul>
            </div>
          </div>
          <p className="text-gray-700 dark:text-gray-300 mt-4 text-sm">
            If you're unsure, submit a free assessment through ClaimWinger — they'll review whether your cash right is still enforceable.
          </p>
        </section>

        {/* Section 7 — Refunds vs Compensation */}
        <section>
          <h2 className="text-2xl font-bold text-gray-900 dark:text-gray-100 mb-4">
            Refunds vs Compensation: Same Rules Apply
          </h2>
          <p className="text-gray-700 dark:text-gray-300 mb-4">
            EU261 governs both: the <strong>ticket refund</strong> (Article 8) when a flight is cancelled, and the <strong>compensation payment</strong> (Article 7) for delays and cancellations. Both default to cash.
          </p>
          <div className="overflow-x-auto rounded-xl border border-gray-200 dark:border-gray-700">
            <table className="w-full text-sm">
              <thead className="bg-gray-50 dark:bg-gray-800">
                <tr>
                  <th className="px-4 py-3 text-left font-semibold text-gray-700 dark:text-gray-300">Right</th>
                  <th className="px-4 py-3 text-left font-semibold text-gray-700 dark:text-gray-300">When triggered</th>
                  <th className="px-4 py-3 text-left font-semibold text-gray-700 dark:text-gray-300">Voucher allowed?</th>
                  <th className="px-4 py-3 text-left font-semibold text-gray-700 dark:text-gray-300">Timeline</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-100 dark:divide-gray-700">
                {[
                  {
                    right: "Ticket refund (Art. 8)",
                    when: "Flight cancelled, long delay, or you choose not to reroute",
                    voucher: "Only with signed consent",
                    timeline: "7 days",
                  },
                  {
                    right: "Compensation (Art. 7)",
                    when: "Arrival 3+ hours late, cancellation, denied boarding",
                    voucher: "Only with signed consent",
                    timeline: "No statutory deadline, but 14 days standard",
                  },
                  {
                    right: "Care & assistance (Art. 9)",
                    when: "Long delay or cancellation at airport",
                    voucher: "Can be provided as food/hotel vouchers — this is standard practice",
                    timeline: "Immediately at airport",
                  },
                ].map((row, i) => (
                  <tr key={i} className={i % 2 === 0 ? "bg-white dark:bg-gray-900" : "bg-gray-50 dark:bg-gray-800"}>
                    <td className="px-4 py-3 font-medium text-gray-900 dark:text-gray-100">{row.right}</td>
                    <td className="px-4 py-3 text-gray-600 dark:text-gray-400">{row.when}</td>
                    <td className="px-4 py-3">
                      {row.voucher.includes("Only with") ? (
                        <span className="text-red-600 dark:text-red-400 font-medium">{row.voucher}</span>
                      ) : (
                        <span className="text-green-600 dark:text-green-400">{row.voucher}</span>
                      )}
                    </td>
                    <td className="px-4 py-3 text-gray-700 dark:text-gray-300">{row.timeline}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <p className="text-gray-600 dark:text-gray-400 text-sm mt-3">
            Note: Airport meal and hotel vouchers (Article 9 care rights) are explicitly designed as in-kind vouchers and this is standard — don't confuse these with compensation vouchers.
          </p>
        </section>

        {/* Section 8 — UK261 */}
        <section>
          <h2 className="text-2xl font-bold text-gray-900 dark:text-gray-100 mb-4">
            UK261: Same Voucher Rules Apply Post-Brexit
          </h2>
          <p className="text-gray-700 dark:text-gray-300 mb-4">
            The UK retained EU261 as domestic law (UK261) after Brexit. The voucher provisions are identical: cash is the default, vouchers require explicit written consent. The enforcing authority is the Civil Aviation Authority (CAA).
          </p>
          <div className="bg-blue-50 dark:bg-blue-950 border border-blue-200 dark:border-blue-800 rounded-xl p-5">
            <p className="text-blue-800 dark:text-blue-300 text-sm">
              <strong>UK passengers:</strong> If an airline offers you a voucher for UK261 compensation, you have the same right to refuse. Escalate to the CAA at caa.co.uk if the airline does not comply. ADR schemes CEDR and AviationADR handle UK airline disputes.
            </p>
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
                q: "Do I have to accept a travel voucher instead of EU261 cash compensation?",
                a: "No. EU261 grants you a legal right to monetary compensation. An airline can offer a voucher, but you are entitled to refuse and demand cash. Accepting a voucher voluntarily may waive your cash right depending on the wording, so read any documentation carefully before signing.",
              },
              {
                q: "What if I already accepted a voucher — can I still claim cash?",
                a: "It depends. If you accepted under pressure or without being informed of your cash right, you may still have a claim. If you freely and knowingly agreed, courts generally consider the right waived. Consult a claims specialist to assess your specific situation.",
              },
              {
                q: "Can an airline offer a voucher instead of cash?",
                a: "Yes — airlines can offer a voucher as an alternative, but only if you agree in writing. The passenger must give explicit, informed consent. An airline cannot unilaterally substitute a voucher for the statutory cash payment.",
              },
              {
                q: "Is there a benefit to accepting a voucher?",
                a: "Some airlines offer vouchers worth more than the statutory cash amount (e.g., €700 voucher vs €600 cash). This can be worthwhile if you fly regularly with that airline and the voucher has no expiry or restrictions. Always compare the actual cash-equivalent value before deciding.",
              },
              {
                q: "What about flight refunds — is cash still required?",
                a: "Yes. For ticket refunds under Article 8, the rule is the same: cash or equivalent financial transfer. A voucher for a refund requires your consent. If your flight was cancelled, you are entitled to a full cash refund within 7 days, regardless of how you paid.",
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
        <div className="bg-gradient-to-br from-gray-900 to-purple-900 rounded-2xl p-8 text-white text-center shadow-xl">
          <h3 className="text-2xl font-bold mb-3">Airline sent a voucher? Get cash instead.</h3>
          <p className="text-gray-300 mb-2">
            ClaimWinger enforces your EU261 / UK261 cash right. No upfront payment.
          </p>
          <p className="text-gray-400 text-sm mb-6">
            30% fee on success only (+ 23% VAT for Polish residents, 0% VAT for all other passengers).
          </p>
          <div className="flex flex-col sm:flex-row gap-3 justify-center">
            <a
              href={`https://claimwinger.com/delayed-flight?utm_source=problemlot.com&utm_medium=article&utm_campaign=${SLUG}&utm_content=cta_bottom`}
              target="_blank"
              rel="noopener noreferrer"
              onClick={() => trackCTA("Claim cash compensation", "bottom")}
            >
              <Button className="bg-purple-500 hover:bg-purple-400 text-white font-semibold px-8 py-3 w-full sm:w-auto">
                Claim Cash Compensation <ArrowRight className="ml-2 w-4 h-4" />
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
                title: "How Much Compensation for a Delayed Flight?",
                slug: "how-much-compensation-delayed-flight",
                color: "blue",
              },
              {
                title: "LOT Voucher Instead of Cash — Your Rights",
                slug: "lot-polish-airlines-voucher-vs-cash",
                color: "purple",
              },
              {
                title: "What Are Extraordinary Circumstances Under EU261?",
                slug: "extraordinary-circumstances-eu261-definition",
                color: "purple",
              },
            ].map((article) => (
              <Link
                key={article.slug}
                href={`/en/blog/${article.slug}`}
                className="border border-gray-200 dark:border-gray-700 rounded-xl p-4 hover:border-purple-300 dark:hover:border-purple-600 hover:shadow-md transition-all bg-white dark:bg-gray-800"
              >
                <h3 className="font-medium text-gray-900 dark:text-gray-100 text-sm leading-snug">
                  {article.title}
                </h3>
                <span className="text-purple-600 dark:text-purple-400 text-xs mt-2 inline-block font-medium">
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
