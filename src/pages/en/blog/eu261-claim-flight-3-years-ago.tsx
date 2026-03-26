import { LayoutEn } from "@/components/LayoutEn";
import { SEO } from "@/components/SEO";
import Link from "next/link";
import { ArrowRight, CheckCircle, XCircle, AlertCircle, Clock } from "lucide-react";
import { Button } from "@/components/ui/button";

const SLUG = "eu261-claim-flight-3-years-ago";

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

export default function EU261ClaimFlight3YearsAgo() {
  const structuredData = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "Article",
        headline: "Can I Claim EU261 for a Flight 3 Years Ago?",
        description:
          "EU261 has no uniform limitation period — each country sets its own. Poland: 1 year. UK: 6 years. Germany: 3 years. France: 5 years. Check your country's deadline before it's too late.",
        url: "https://problemlot.com/en/blog/eu261-claim-flight-3-years-ago",
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
          "@id": "https://problemlot.com/en/blog/eu261-claim-flight-3-years-ago",
        },
      },
      {
        "@type": "FAQPage",
        mainEntity: [
          {
            "@type": "Question",
            name: "Can I claim EU261 compensation for a flight from 3 years ago?",
            acceptedAnswer: {
              "@type": "Answer",
              text: "It depends on which country's courts have jurisdiction. EU261 has no uniform limitation period across the EU. Germany allows 3 years, France 5 years, the UK 6 years, but Poland only 1 year. If the flight departed from Poland or was operated by LOT, the 1-year Polish limitation period likely applies.",
            },
          },
          {
            "@type": "Question",
            name: "How long do I have to claim EU261 compensation?",
            acceptedAnswer: {
              "@type": "Answer",
              text: "The time limit depends on which country's law governs your claim. Key limits: Poland — 1 year from the flight date; UK — 6 years (England/Wales), 5 years (Scotland); Germany — 3 years; France — 5 years; Ireland — 6 years. The clock typically starts from the date of the disrupted flight.",
            },
          },
          {
            "@type": "Question",
            name: "Which country's limitation period applies to my EU261 claim?",
            acceptedAnswer: {
              "@type": "Answer",
              text: "Generally, the limitation period of the country where the claim is brought in court applies. For flights departing from a specific EU country, that country's courts usually have jurisdiction — and apply their own limitation period. For departures from Poland, Poland's 1-year limit almost always applies.",
            },
          },
          {
            "@type": "Question",
            name: "Does submitting a complaint to the airline stop the clock?",
            acceptedAnswer: {
              "@type": "Answer",
              text: "In most EU countries, submitting a formal complaint to the airline does NOT stop the limitation clock. Only filing a legal claim with a court or alternative dispute resolution body typically suspends or interrupts the limitation period. Check the rules for your specific country.",
            },
          },
          {
            "@type": "Question",
            name: "What documents do I need to claim for an old flight?",
            acceptedAnswer: {
              "@type": "Answer",
              text: "You need your booking confirmation, boarding pass (or proof you checked in), and evidence of the delay or cancellation — such as a screenshot from a flight tracking site, a delay notification from the airline, or an email confirming a cancelled flight. The older the flight, the harder documents are to retrieve, so act quickly.",
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
            name: "Can I Claim EU261 for a Flight 3 Years Ago?",
            item: "https://problemlot.com/en/blog/eu261-claim-flight-3-years-ago",
          },
        ],
      },
    ],
  };

  return (
    <LayoutEn>
      <SEO
        title="Can I Claim EU261 for a Flight 3 Years Ago? | Limitation Periods Explained"
        description="EU261 limitation periods vary by country: Poland 1 year, Germany 3 years, France 5 years, UK 6 years. Check your deadline — and how to find documents for an old claim."
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
            <span className="text-gray-900 dark:text-white">Claiming for an Old Flight</span>
          </div>
        </div>
      </nav>

      {/* Hero */}
      <section className="bg-gradient-to-br from-blue-50 to-indigo-100 dark:from-gray-800 dark:to-gray-900 py-14">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <div className="inline-flex items-center gap-2 bg-blue-100 dark:bg-blue-900/40 text-blue-700 dark:text-blue-300 px-4 py-1.5 rounded-full text-sm font-medium mb-6">
              <Clock className="h-4 w-4" />
              EU261 Limitation Periods
            </div>
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-6">
              Can I Claim EU261 for a Flight 3 Years Ago?
            </h1>
            <p className="text-xl text-gray-700 dark:text-gray-300 mb-8">
              Maybe — but it depends entirely on <strong>which country's law governs your claim</strong>. EU261 sets no uniform time limit across the EU. Germany gives you 3 years. France gives you 5. The UK gives you 6. But Poland gives you just <strong>1 year</strong>. Miss the deadline and your claim is gone — regardless of how strong it is.
            </p>
            <Button
              asChild
              size="lg"
              className="bg-blue-600 hover:bg-blue-700 text-white"
              onClick={() => trackCTA("Check if my claim is still valid", "hero")}
            >
              <a
                href={`https://claimwinger.com/delayed-flight?utm_source=problemlot.com&utm_medium=article&utm_campaign=${SLUG}&utm_content=cta_hero`}
                target="_blank"
                rel="noopener noreferrer"
              >
                Check If My Claim Is Still Valid <ArrowRight className="ml-2 h-5 w-5" />
              </a>
            </Button>
          </div>
        </div>
      </section>

      {/* Main article */}
      <article className="py-12">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto">

            {/* Why no uniform period */}
            <section className="mb-10">
              <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">
                Why EU261 Has No Single Time Limit
              </h2>
              <p className="text-gray-700 dark:text-gray-300 mb-4">
                EU Regulation 261/2004 is silent on limitation periods. The European legislature deliberately left this to member states — meaning the time you have to bring a claim is governed by the national law of whichever country's courts hear the case.
              </p>
              <p className="text-gray-700 dark:text-gray-300 mb-4">
                The European Court of Justice confirmed in <em>Sousa Rodríguez v Air France</em> (2011) and subsequent rulings that national procedural rules — including limitation periods — apply to EU261 claims, as long as they do not make it practically impossible or excessively difficult to exercise EU rights.
              </p>
              <div className="bg-amber-50 dark:bg-amber-900/20 border border-amber-200 dark:border-amber-800 rounded-xl p-5">
                <div className="flex items-start gap-3">
                  <AlertCircle className="h-5 w-5 text-amber-600 mt-0.5 flex-shrink-0" />
                  <p className="text-sm text-amber-800 dark:text-amber-200">
                    <strong>Practical consequence:</strong> If you flew from Warsaw to London and want to claim in Poland, you have 1 year. If you choose to claim in a UK court instead (for the same flight), you may have 6 years. Jurisdiction strategy matters for older claims.
                  </p>
                </div>
              </div>
            </section>

            {/* Limitation periods by country */}
            <section className="mb-10">
              <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">
                Limitation Periods by Country — Key Markets
              </h2>
              <div className="overflow-x-auto mb-4">
                <table className="w-full border-collapse rounded-xl overflow-hidden text-sm">
                  <thead>
                    <tr className="bg-blue-600 text-white">
                      <th className="px-4 py-3 text-left">Country</th>
                      <th className="px-4 py-3 text-center">Limitation period</th>
                      <th className="px-4 py-3 text-left">Clock starts</th>
                      <th className="px-4 py-3 text-left">Enforcement body</th>
                    </tr>
                  </thead>
                  <tbody>
                    {[
                      { country: "🇵🇱 Poland", period: "1 year", start: "Date of the flight", body: "ULC (Urząd Lotnictwa Cywilnego)", highlight: true },
                      { country: "🇬🇧 UK (England & Wales)", period: "6 years", start: "Date of the flight", body: "CAA (Civil Aviation Authority)", highlight: false },
                      { country: "🇬🇧 UK (Scotland)", period: "5 years", start: "Date of the flight", body: "CAA", highlight: false },
                      { country: "🇩🇪 Germany", period: "3 years", start: "End of calendar year of the flight", body: "LBA (Luftfahrt-Bundesamt)", highlight: false },
                      { country: "🇫🇷 France", period: "5 years", start: "Date of the flight", body: "DGAC (Direction générale de l'Aviation civile)", highlight: false },
                      { country: "🇮🇪 Ireland", period: "6 years", start: "Date of the flight", body: "IAA (Irish Aviation Authority)", highlight: false },
                      { country: "🇳🇱 Netherlands", period: "2 years", start: "Date of the flight", body: "ILT (Inspectie Leefomgeving en Transport)", highlight: false },
                      { country: "🇪🇸 Spain", period: "5 years", start: "Date of the flight", body: "AESA (Agencia Estatal de Seguridad Aérea)", highlight: false },
                      { country: "🇮🇹 Italy", period: "2 years", start: "Date of the flight", body: "ENAC (Ente Nazionale per l'Aviazione Civile)", highlight: false },
                      { country: "🇦🇹 Austria", period: "3 years", start: "Date of the flight", body: "Austro Control", highlight: false },
                    ].map((row, i) => (
                      <tr key={i} className={`${i % 2 === 0 ? "bg-white dark:bg-gray-800" : "bg-gray-50 dark:bg-gray-700"} ${row.highlight ? "ring-2 ring-inset ring-red-300 dark:ring-red-700" : ""}`}>
                        <td className="px-4 py-3 font-medium">
                          {row.country}
                          {row.highlight && <span className="ml-2 text-xs bg-red-100 dark:bg-red-900/40 text-red-700 dark:text-red-300 px-1.5 py-0.5 rounded">Shortest</span>}
                        </td>
                        <td className={`px-4 py-3 text-center font-bold ${row.highlight ? "text-red-600 dark:text-red-400" : "text-blue-600 dark:text-blue-400"}`}>
                          {row.period}
                        </td>
                        <td className="px-4 py-3 text-gray-600 dark:text-gray-400">{row.start}</td>
                        <td className="px-4 py-3 text-gray-600 dark:text-gray-400 text-xs">{row.body}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
              <p className="text-xs text-gray-500 dark:text-gray-400">
                Limitation periods are based on current national law and court practice. Always verify with a legal professional for your specific situation.
              </p>
            </section>

            {/* Which country applies */}
            <section className="mb-10">
              <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">
                Which Country's Limitation Period Applies to Your Claim?
              </h2>
              <p className="text-gray-700 dark:text-gray-300 mb-4">
                Jurisdiction for EU261 claims is generally determined by:
              </p>
              <div className="space-y-3 mb-6">
                <div className="flex items-start gap-3 p-4 bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-xl">
                  <div className="w-6 h-6 rounded-full bg-blue-600 text-white flex items-center justify-center text-xs font-bold flex-shrink-0 mt-0.5">1</div>
                  <div>
                    <p className="font-semibold text-gray-900 dark:text-white">Country of departure</p>
                    <p className="text-sm text-gray-600 dark:text-gray-400">For flights departing from Poland, Polish courts have jurisdiction — and Poland's 1-year limit applies. For departures from Germany, German courts and German law apply.</p>
                  </div>
                </div>
                <div className="flex items-start gap-3 p-4 bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-xl">
                  <div className="w-6 h-6 rounded-full bg-blue-600 text-white flex items-center justify-center text-xs font-bold flex-shrink-0 mt-0.5">2</div>
                  <div>
                    <p className="font-semibold text-gray-900 dark:text-white">Country of arrival (for inbound EU-carrier flights)</p>
                    <p className="text-sm text-gray-600 dark:text-gray-400">For flights arriving in the EU on an EU carrier, you may be able to bring a claim in the destination country — applying that country's limitation period.</p>
                  </div>
                </div>
                <div className="flex items-start gap-3 p-4 bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-xl">
                  <div className="w-6 h-6 rounded-full bg-blue-600 text-white flex items-center justify-center text-xs font-bold flex-shrink-0 mt-0.5">3</div>
                  <div>
                    <p className="font-semibold text-gray-900 dark:text-white">Country where the airline is registered</p>
                    <p className="text-sm text-gray-600 dark:text-gray-400">In some cases, you may bring a claim in the country where the airline has its principal place of business — potentially giving access to a more favourable limitation period.</p>
                  </div>
                </div>
              </div>
              <div className="bg-red-50 dark:bg-red-900/20 border border-red-200 dark:border-red-800 rounded-xl p-5">
                <div className="flex items-start gap-3">
                  <AlertCircle className="h-5 w-5 text-red-600 mt-0.5 flex-shrink-0" />
                  <div>
                    <p className="font-semibold text-red-900 dark:text-red-100 mb-1">Poland's 1-year limit is the harshest in Europe</p>
                    <p className="text-sm text-red-800 dark:text-red-200">
                      If your flight departed from Warsaw Chopin (WAW) or Kraków (KRK), you almost certainly have only 1 year from the flight date to file a legal claim. Sending a complaint to the airline does NOT stop this clock. Act immediately if you are approaching this limit.
                    </p>
                  </div>
                </div>
              </div>
            </section>

            {/* Does complaining stop the clock */}
            <section className="mb-10">
              <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">
                Does Filing a Complaint With the Airline Stop the Clock?
              </h2>
              <p className="text-gray-700 dark:text-gray-300 mb-4">
                In most EU countries — <strong>no</strong>. Sending an email or formal complaint to the airline is not the same as filing a legal claim. The limitation clock keeps running while you wait for the airline to respond.
              </p>
              <div className="grid md:grid-cols-2 gap-4">
                <div className="bg-red-50 dark:bg-red-900/20 border border-red-200 dark:border-red-800 rounded-xl p-4">
                  <h3 className="font-semibold text-red-900 dark:text-red-100 mb-2 flex items-center gap-2">
                    <XCircle className="h-4 w-4 text-red-600" /> Does NOT stop the clock
                  </h3>
                  <ul className="text-sm text-red-800 dark:text-red-200 space-y-1">
                    <li>• Emailing the airline's customer service</li>
                    <li>• Submitting a complaint form on the airline's website</li>
                    <li>• Waiting for the airline's response</li>
                    <li>• Writing to the national enforcement body (in most countries)</li>
                  </ul>
                </div>
                <div className="bg-green-50 dark:bg-green-900/20 border border-green-200 dark:border-green-800 rounded-xl p-4">
                  <h3 className="font-semibold text-green-900 dark:text-green-100 mb-2 flex items-center gap-2">
                    <CheckCircle className="h-4 w-4 text-green-600" /> May stop or suspend the clock
                  </h3>
                  <ul className="text-sm text-green-800 dark:text-green-200 space-y-1">
                    <li>• Filing a claim with a court</li>
                    <li>• Submitting to an approved ADR/ombudsman scheme (in some countries)</li>
                    <li>• Formal legal notice served by a lawyer (in some jurisdictions)</li>
                  </ul>
                </div>
              </div>
            </section>

            {/* CTA mid */}
            <div className="bg-blue-600 rounded-2xl p-8 text-center text-white my-10">
              <h3 className="text-2xl font-bold mb-3">Old Flight? Don't Wait Any Longer</h3>
              <p className="text-blue-100 mb-6">
                Every day you wait reduces your options. ClaimWinger checks your eligibility instantly — and if the clock is still running, submits your claim before the deadline.
              </p>
              <Button
                asChild
                size="lg"
                className="bg-white text-blue-600 hover:bg-gray-100"
                onClick={() => trackCTA("Check my old flight claim", "mid")}
              >
                <a
                  href={`https://claimwinger.com/delayed-flight?utm_source=problemlot.com&utm_medium=article&utm_campaign=${SLUG}&utm_content=cta_mid`}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Check My Old Flight Claim <ArrowRight className="ml-2 h-5 w-5" />
                </a>
              </Button>
            </div>

            {/* Documents for old claim */}
            <section className="mb-10">
              <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">
                What Documents Do You Need for an Old Claim?
              </h2>
              <p className="text-gray-700 dark:text-gray-300 mb-6">
                The older the flight, the harder it is to gather evidence. Here is what you need and where to find it:
              </p>
              <div className="space-y-4">
                {[
                  {
                    doc: "Booking confirmation",
                    where: "Check your email inbox — search for the airline name, flight number, or 'booking confirmation'. Travel agencies (Booking.com, Expedia, eSky) also keep records accessible via your account.",
                    required: true,
                  },
                  {
                    doc: "Boarding pass",
                    where: "Paper boarding passes fade quickly but digital ones may still be in your email, Apple Wallet, or Google Pay. Some airlines allow retrieval from your account booking history.",
                    required: true,
                  },
                  {
                    doc: "Proof of delay or cancellation",
                    where: "FlightAware and Flightradar24 keep historical delay data for several years. Search by flight number and date. Alternatively, look for delay notification emails or SMS from the airline.",
                    required: true,
                  },
                  {
                    doc: "Proof you were on the flight",
                    where: "Your booking confirmation linked to your name is usually sufficient. Frequent flyer account history can also confirm your travel.",
                    required: false,
                  },
                  {
                    doc: "Bank or card statement",
                    where: "Shows proof of ticket purchase if the booking confirmation is lost. Useful as supplementary evidence.",
                    required: false,
                  },
                ].map((item, i) => (
                  <div key={i} className="flex gap-4 items-start bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-xl p-4">
                    <div className={`w-6 h-6 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5 ${item.required ? "bg-blue-600 text-white" : "bg-gray-300 dark:bg-gray-600 text-gray-700 dark:text-gray-300"}`}>
                      {item.required ? <CheckCircle className="h-4 w-4" /> : <span className="text-xs">+</span>}
                    </div>
                    <div>
                      <p className="font-semibold text-gray-900 dark:text-white text-sm">
                        {item.doc}
                        {item.required && <span className="ml-2 text-xs bg-blue-100 dark:bg-blue-900/40 text-blue-700 dark:text-blue-300 px-1.5 py-0.5 rounded">Required</span>}
                      </p>
                      <p className="text-sm text-gray-600 dark:text-gray-400 mt-1">{item.where}</p>
                    </div>
                  </div>
                ))}
              </div>
            </section>

            {/* Step by step */}
            <section className="mb-10">
              <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">
                How to File a Claim for an Old Flight — Step by Step
              </h2>
              <div className="space-y-4">
                {[
                  {
                    step: "1",
                    title: "Confirm the limitation period hasn't expired",
                    detail: "Check the table above for your country. Count from the date of the actual flight — not when you first thought about claiming.",
                  },
                  {
                    step: "2",
                    title: "Gather your documents",
                    detail: "Booking confirmation, boarding pass or proof of travel, and flight delay evidence (FlightAware, FlightRadar24, delay notification email).",
                  },
                  {
                    step: "3",
                    title: "Send a formal claim to the airline",
                    detail: "Write to the airline's customer relations department citing EU Regulation 261/2004, your flight details, and the exact delay. Request a response within 14 days.",
                  },
                  {
                    step: "4",
                    title: "If rejected or ignored — escalate immediately",
                    detail: "File with your national enforcement body (ULC for Poland, CAA for UK, LBA for Germany) or submit to an ADR scheme. For legal action, use the European Small Claims Procedure if the airline is in another EU country.",
                  },
                  {
                    step: "5",
                    title: "Consider a claim company",
                    detail: "Specialist claim companies like ClaimWinger handle everything — from submission to court action if needed. They work on a no-win no-fee basis: 30% commission only on success (+ VAT for Polish residents).",
                  },
                ].map((item) => (
                  <div key={item.step} className="flex gap-4 items-start">
                    <div className="w-8 h-8 rounded-full bg-blue-600 text-white flex items-center justify-center font-bold text-sm flex-shrink-0">
                      {item.step}
                    </div>
                    <div>
                      <p className="font-semibold text-gray-900 dark:text-white mb-1">{item.title}</p>
                      <p className="text-sm text-gray-600 dark:text-gray-400">{item.detail}</p>
                    </div>
                  </div>
                ))}
              </div>
            </section>

            {/* Internal links */}
            <div className="bg-gray-50 dark:bg-gray-800 rounded-xl p-6 mb-10 border border-gray-200 dark:border-gray-700">
              <h3 className="font-bold text-gray-900 dark:text-white mb-4">Related Guides</h3>
              <div className="grid md:grid-cols-2 gap-3">
                {[
                  { href: "/en/blog/what-counts-flight-delay-eu261", label: "What counts as a flight delay under EU261?" },
                  { href: "/en/blog/how-much-compensation-delayed-flight", label: "How much compensation for a delayed flight?" },
                  { href: "/en/blog/lot-polish-airlines-rejected-compensation-claim", label: "What to do if the airline rejects your claim" },
                  { href: "/en/blog/eu261-flights-outside-eu-apply", label: "Does EU261 apply to flights outside the EU?" },
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
                    q: "Can I claim EU261 compensation for a flight from 3 years ago?",
                    a: "It depends on which country's courts have jurisdiction. Germany allows 3 years, France 5 years, the UK 6 years — so for flights departing from those countries, a 3-year-old claim may still be valid. However, Poland allows only 1 year, so a claim for a flight from Warsaw 3 years ago would be time-barred.",
                  },
                  {
                    q: "How long do I have to claim EU261 compensation?",
                    a: "The time limit depends on the country: Poland — 1 year; Netherlands and Italy — 2 years; Germany and Austria — 3 years; France, Spain and Scotland — 5 years; England, Wales and Ireland — 6 years. The clock typically starts from the date of the disrupted flight.",
                  },
                  {
                    q: "Which country's limitation period applies to my EU261 claim?",
                    a: "Generally, the country of departure determines jurisdiction. If your flight departed from Warsaw, Polish law applies (1 year). If it departed from Frankfurt, German law applies (3 years). In some cases you may bring the claim in multiple jurisdictions — a legal professional can advise on the best option.",
                  },
                  {
                    q: "Does submitting a complaint to the airline stop the clock?",
                    a: "No, in most EU countries. Emailing the airline is not the same as filing a legal claim. Only court filings or ADR submissions typically suspend the limitation period. Don't wait for the airline to respond — if the deadline is approaching, file formally.",
                  },
                  {
                    q: "What documents do I need to claim for an old flight?",
                    a: "You need your booking confirmation, a boarding pass or proof you checked in, and evidence of the delay or cancellation — such as data from FlightAware, a delay notification email, or a cancellation message from the airline. Retrieve these quickly as older records are harder to find.",
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
              <h3 className="text-2xl font-bold mb-3">Don't Let the Deadline Pass</h3>
              <p className="text-blue-100 mb-6 max-w-xl mx-auto">
                If your flight was delayed or cancelled and the limitation period hasn't expired, you may still be owed up to €600. ClaimWinger checks instantly and files before the clock runs out — no win, no fee. 30% commission only on success (+ VAT for Polish residents).
              </p>
              <Button
                asChild
                size="lg"
                className="bg-white text-blue-600 hover:bg-gray-100"
                onClick={() => trackCTA("Check my old flight claim now", "bottom")}
              >
                <a
                  href={`https://claimwinger.com/delayed-flight?utm_source=problemlot.com&utm_medium=article&utm_campaign=${SLUG}&utm_content=cta_bottom`}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Check My Old Flight Claim Now <ArrowRight className="ml-2 h-5 w-5" />
                </a>
              </Button>
            </div>

          </div>
        </div>
      </article>
    </LayoutEn>
  );
}
