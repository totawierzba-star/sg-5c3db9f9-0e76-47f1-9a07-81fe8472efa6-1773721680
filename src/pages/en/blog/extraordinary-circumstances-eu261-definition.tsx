import { LayoutEn } from "@/components/LayoutEn";
import { SEO } from "@/components/SEO";
import Link from "next/link";
import { ArrowRight, CheckCircle, XCircle, AlertCircle, Scale } from "lucide-react";
import { Button } from "@/components/ui/button";

const SLUG = "extraordinary-circumstances-eu261-definition";

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

export default function ExtraordinaryCircumstancesEU261Definition() {
  const structuredData = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "Article",
        headline: "What Are Extraordinary Circumstances Under EU261?",
        description:
          "Extraordinary circumstances exempt airlines from paying EU261 compensation. Learn what legally qualifies — weather, ATC, technical faults — and when airlines misuse the excuse.",
        url: "https://problemlot.com/en/blog/extraordinary-circumstances-eu261-definition",
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
          "@id":
            "https://problemlot.com/en/blog/extraordinary-circumstances-eu261-definition",
        },
      },
      {
        "@type": "FAQPage",
        mainEntity: [
          {
            "@type": "Question",
            name: "What are extraordinary circumstances under EU261?",
            acceptedAnswer: {
              "@type": "Answer",
              text: "Extraordinary circumstances are events outside the airline's control that could not have been avoided even with all reasonable measures. They include severe weather, ATC strikes, political instability, and security threats. When proven, they exempt the airline from paying EU261 compensation — though care rights (meals, hotel) still apply.",
            },
          },
          {
            "@type": "Question",
            name: "Is a technical fault an extraordinary circumstance?",
            acceptedAnswer: {
              "@type": "Answer",
              text: "In most cases, no. The European Court of Justice ruled in Wallentin-Hermann v Alitalia (2008) that technical problems inherent in the normal operation of aircraft are not extraordinary circumstances. The only exception is a hidden manufacturing defect discovered for the first time, or damage caused by a third party such as sabotage.",
            },
          },
          {
            "@type": "Question",
            name: "Does bad weather always exempt the airline from paying?",
            acceptedAnswer: {
              "@type": "Answer",
              text: "No. Only severe, genuinely unforeseeable weather qualifies — hurricanes, extreme snowstorms, lightning strikes. Mild rain, moderate wind, or fog that is common for the season and airport does not qualify. The airline must also show it took all reasonable measures to avoid the delay despite the weather.",
            },
          },
          {
            "@type": "Question",
            name: "What if the previous flight (rotation) was delayed by extraordinary circumstances?",
            acceptedAnswer: {
              "@type": "Answer",
              text: "This is a grey area. Courts have ruled that if the previous leg of the aircraft's rotation was delayed by extraordinary circumstances, this can propagate to your flight — but only if the airline could not have resolved the situation by deploying a replacement aircraft. Airlines often misuse this argument, so it is worth challenging.",
            },
          },
          {
            "@type": "Question",
            name: "Who has to prove extraordinary circumstances?",
            acceptedAnswer: {
              "@type": "Answer",
              text: "The airline bears the full burden of proof. It must provide documented evidence — weather reports, ATC communications, official airport notices — showing that extraordinary circumstances occurred AND that all reasonable measures were taken. A vague claim of 'weather' or 'technical issues' is not sufficient.",
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
            name: "What Are Extraordinary Circumstances Under EU261?",
            item: "https://problemlot.com/en/blog/extraordinary-circumstances-eu261-definition",
          },
        ],
      },
    ],
  };

  return (
    <LayoutEn>
      <SEO
        title="What Are Extraordinary Circumstances Under EU261? | ProblemLot.com"
        description="Extraordinary circumstances exempt airlines from EU261 compensation. Learn what legally qualifies, what doesn't, and how to challenge a wrongful airline claim."
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
            <span className="text-gray-900 dark:text-white">Extraordinary Circumstances Under EU261</span>
          </div>
        </div>
      </nav>

      {/* Hero */}
      <section className="bg-gradient-to-br from-blue-50 to-indigo-100 dark:from-gray-800 dark:to-gray-900 py-14">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <div className="inline-flex items-center gap-2 bg-blue-100 dark:bg-blue-900/40 text-blue-700 dark:text-blue-300 px-4 py-1.5 rounded-full text-sm font-medium mb-6">
              <Scale className="h-4 w-4" />
              EU Regulation 261/2004 — Legal Definition
            </div>
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-6">
              What Are Extraordinary Circumstances Under EU261?
            </h1>
            <p className="text-xl text-gray-700 dark:text-gray-300 mb-8">
              "Extraordinary circumstances" is the only legal defence that lets airlines escape EU261 compensation. But it is frequently misused. Here is the exact legal definition — and how to tell when an airline is using it legitimately versus as an excuse to avoid paying.
            </p>
            <Button
              asChild
              size="lg"
              className="bg-blue-600 hover:bg-blue-700 text-white"
              onClick={() => trackCTA("Check if my claim is valid", "hero")}
            >
              <a
                href={`https://claimwinger.com/delayed-flight?utm_source=problemlot.com&utm_medium=article&utm_campaign=${SLUG}&utm_content=cta_hero`}
                target="_blank"
                rel="noopener noreferrer"
              >
                Check If My Claim Is Valid <ArrowRight className="ml-2 h-5 w-5" />
              </a>
            </Button>
          </div>
        </div>
      </section>

      {/* Main article */}
      <article className="py-12">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto">

            {/* Legal definition */}
            <section className="mb-10">
              <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">
                The Legal Definition: Two Conditions Must Both Be Met
              </h2>
              <p className="text-gray-700 dark:text-gray-300 mb-4">
                EU Regulation 261/2004 (Recital 14 and Article 5(3)) states that an airline is not obliged to pay compensation if it can prove that the cancellation or delay was caused by extraordinary circumstances <strong>which could not have been avoided even if all reasonable measures had been taken</strong>.
              </p>
              <p className="text-gray-700 dark:text-gray-300 mb-4">
                This is a two-part test. Both conditions must be satisfied:
              </p>
              <div className="grid md:grid-cols-2 gap-4 mb-6">
                <div className="bg-white dark:bg-gray-800 border-2 border-blue-200 dark:border-blue-800 rounded-xl p-5">
                  <div className="text-blue-600 font-bold text-lg mb-2">Condition 1</div>
                  <p className="font-semibold text-gray-900 dark:text-white mb-2">The event was extraordinary</p>
                  <p className="text-sm text-gray-600 dark:text-gray-400">
                    The event was outside the airline's normal activity and beyond its actual control — it could not be expected to form part of ordinary airline operations.
                  </p>
                </div>
                <div className="bg-white dark:bg-gray-800 border-2 border-blue-200 dark:border-blue-800 rounded-xl p-5">
                  <div className="text-blue-600 font-bold text-lg mb-2">Condition 2</div>
                  <p className="font-semibold text-gray-900 dark:text-white mb-2">The delay could not have been avoided</p>
                  <p className="text-sm text-gray-600 dark:text-gray-400">
                    Even with all reasonable measures — including re-routing, substituting aircraft, rescheduling crew — the disruption still could not have been avoided.
                  </p>
                </div>
              </div>
              <div className="bg-amber-50 dark:bg-amber-900/20 border border-amber-200 dark:border-amber-800 rounded-xl p-5">
                <div className="flex items-start gap-3">
                  <AlertCircle className="h-5 w-5 text-amber-600 mt-0.5 flex-shrink-0" />
                  <p className="text-sm text-amber-800 dark:text-amber-200">
                    <strong>The burden of proof lies entirely with the airline.</strong> It must provide documented evidence — official weather reports, ATC communications, airport authority notices — to support its claim. A generic statement that "the flight was delayed due to extraordinary circumstances" is legally insufficient.
                  </p>
                </div>
              </div>
            </section>

            {/* What qualifies */}
            <section className="mb-10">
              <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">
                What Counts as Extraordinary Circumstances — and What Does Not
              </h2>
              <p className="text-gray-700 dark:text-gray-300 mb-6">
                The regulation gives examples but does not provide an exhaustive list. European courts — particularly the Court of Justice of the EU (CJEU) — have shaped the definition through key rulings over the past 15 years.
              </p>

              <div className="grid md:grid-cols-2 gap-6 mb-6">
                {/* Does qualify */}
                <div>
                  <h3 className="font-bold text-green-700 dark:text-green-400 mb-3 flex items-center gap-2">
                    <CheckCircle className="h-5 w-5" /> Typically qualifies
                  </h3>
                  <div className="space-y-3">
                    {[
                      { label: "Severe weather", detail: "Storms, hurricanes, extreme snow/ice, lightning — genuinely severe and unforeseeable for that airport/season" },
                      { label: "Air traffic control (ATC) strikes", detail: "Industrial action by ATC staff is outside airline control. Airline strikes are NOT extraordinary." },
                      { label: "Airport security incidents", detail: "Terminal evacuations, bomb threats, runway incursions by third parties" },
                      { label: "Political instability / airspace closure", detail: "Government-ordered airspace closures, military conflicts affecting routes" },
                      { label: "Hidden manufacturing defect", detail: "A manufacturing defect discovered for the first time, not previously known to exist — very narrow exception" },
                      { label: "Collision with birds or foreign object", detail: "Bird strike damaging engine or windshield — case by case, depends on whether damage was truly unforeseeable" },
                    ].map((item, i) => (
                      <div key={i} className="flex items-start gap-2 p-3 bg-green-50 dark:bg-green-900/20 rounded-lg">
                        <CheckCircle className="h-4 w-4 text-green-600 mt-0.5 flex-shrink-0" />
                        <div>
                          <p className="text-sm font-semibold text-green-900 dark:text-green-100">{item.label}</p>
                          <p className="text-xs text-green-800 dark:text-green-200 mt-0.5">{item.detail}</p>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Does not qualify */}
                <div>
                  <h3 className="font-bold text-red-700 dark:text-red-400 mb-3 flex items-center gap-2">
                    <XCircle className="h-5 w-5" /> Does NOT qualify
                  </h3>
                  <div className="space-y-3">
                    {[
                      { label: "Technical faults (standard)", detail: "CJEU ruling in Wallentin-Hermann (2008): technical problems inherent in normal aircraft operations are not extraordinary." },
                      { label: "Airline staff strikes", detail: "Industrial action by the airline's own pilots or cabin crew is the airline's internal matter — not extraordinary." },
                      { label: "Crew scheduling failures", detail: "Running out of pilots due to planning errors, crew fatigue limits reached due to earlier delays" },
                      { label: "Mild or common weather", detail: "Light rain, standard seasonal fog, moderate winds that are typical for the airport or time of year" },
                      { label: "Previous flight late (rotation delay)", detail: "The 'late arriving aircraft' excuse is often rejected unless the original cause was truly extraordinary and no spare aircraft was available." },
                      { label: "Overbooking / commercial decisions", detail: "Any delay caused by the airline's own commercial choices is fully within its control." },
                    ].map((item, i) => (
                      <div key={i} className="flex items-start gap-2 p-3 bg-red-50 dark:bg-red-900/20 rounded-lg">
                        <XCircle className="h-4 w-4 text-red-600 mt-0.5 flex-shrink-0" />
                        <div>
                          <p className="text-sm font-semibold text-red-900 dark:text-red-100">{item.label}</p>
                          <p className="text-xs text-red-800 dark:text-red-200 mt-0.5">{item.detail}</p>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </section>

            {/* Key court rulings */}
            <section className="mb-10">
              <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">
                Key Court Rulings That Shaped the Definition
              </h2>
              <div className="space-y-4">
                {[
                  {
                    case: "Wallentin-Hermann v Alitalia (CJEU, 2008)",
                    ruling: "Technical problems discovered during pre-flight checks are NOT extraordinary circumstances — they are inherent in the normal operation of an aircraft.",
                    impact: "Airlines can no longer use routine mechanical faults as a blanket excuse. This ruling is still the leading precedent on technical issues.",
                  },
                  {
                    case: "Sturgeon v Condor / Böck v Air France (CJEU, 2009)",
                    ruling: "Passengers whose flight is delayed 3+ hours at arrival have the same right to compensation as passengers of cancelled flights.",
                    impact: "Confirmed that arrival delay (not departure delay) is the trigger for EU261 compensation.",
                  },
                  {
                    case: "Van der Lans v KLM (CJEU, 2015)",
                    ruling: "An unexpected technical problem that emerged shortly before departure does not constitute an extraordinary circumstance — it is part of normal operational risk.",
                    impact: "Narrowed the 'surprise technical fault' defence further. Airlines cannot claim extraordinary circumstances just because a fault was unexpected.",
                  },
                  {
                    case: "Pešková / Pešek v Travel Service (CJEU, 2017)",
                    ruling: "A bird strike can constitute an extraordinary circumstance — but only if the airline demonstrates it took all reasonable measures to avoid the delay once the damage was discovered.",
                    impact: "Introduced a proportionality test for rare events: even genuine extraordinary circumstances require the airline to act diligently.",
                  },
                ].map((item, i) => (
                  <div key={i} className="bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-xl p-5">
                    <p className="font-bold text-blue-700 dark:text-blue-400 text-sm mb-1">{item.case}</p>
                    <p className="text-gray-700 dark:text-gray-300 text-sm mb-2"><strong>Ruling:</strong> {item.ruling}</p>
                    <p className="text-gray-500 dark:text-gray-400 text-sm"><strong>Impact:</strong> {item.impact}</p>
                  </div>
                ))}
              </div>
            </section>

            {/* Care rights still apply */}
            <section className="mb-10">
              <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">
                Extraordinary Circumstances Don't Cancel Your Care Rights
              </h2>
              <p className="text-gray-700 dark:text-gray-300 mb-4">
                Even when extraordinary circumstances exempt the airline from paying compensation, you retain the right to <strong>care</strong> at the departure airport. These are unconditional and do not depend on the cause of the disruption:
              </p>
              <div className="grid md:grid-cols-3 gap-4">
                {[
                  { title: "Meals & refreshments", detail: "Free food and drinks proportionate to the waiting time, from 2 hours departure delay (short/medium haul) or 4 hours (long haul)." },
                  { title: "Hotel accommodation", detail: "If you must stay overnight due to the disruption — hotel plus transport to and from the hotel, at the airline's expense." },
                  { title: "Refund or re-routing", detail: "If the delay exceeds 5 hours and you decide not to travel, you are entitled to a full refund of your ticket and a return flight home if needed." },
                ].map((item, i) => (
                  <div key={i} className="bg-blue-50 dark:bg-blue-900/20 border border-blue-200 dark:border-blue-800 rounded-xl p-4">
                    <p className="font-semibold text-blue-900 dark:text-blue-100 mb-2">{item.title}</p>
                    <p className="text-sm text-blue-800 dark:text-blue-200">{item.detail}</p>
                  </div>
                ))}
              </div>
            </section>

            {/* How to challenge */}
            <section className="mb-10">
              <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">
                How to Challenge a Wrongful Extraordinary Circumstances Claim
              </h2>
              <p className="text-gray-700 dark:text-gray-300 mb-6">
                Airlines routinely over-invoke this exemption. If you receive a rejection citing extraordinary circumstances, do not accept it automatically. Here is how to push back:
              </p>
              <div className="space-y-4">
                {[
                  {
                    step: "1",
                    title: "Request documented evidence",
                    detail: "Ask the airline in writing for the specific evidence supporting its claim — weather reports, ATC communications, official airport authority statements. If it cannot produce these, the claim is weak.",
                  },
                  {
                    step: "2",
                    title: "Check the real reason via FlightAware or Flightradar24",
                    detail: "Look up your flight number on a flight tracking service. The departure and arrival data, as well as the stated reason for delay, are often publicly available. A 'weather' delay that shows no adverse conditions on the day is challengeable.",
                  },
                  {
                    step: "3",
                    title: "Submit to the national enforcement body (NEB)",
                    detail: "If the airline rejects your claim, escalate to your country's NEB: CAA (UK), ULC (PL), LBA (DE), DGAC (FR), IAA (IE). These bodies can compel the airline to pay or explain its decision.",
                  },
                  {
                    step: "4",
                    title: "Use a claim company or go to court",
                    detail: "Specialist claim companies like ClaimWinger assess claims professionally and handle legal escalation if needed. They work on a no-win no-fee basis (30% commission on success, + VAT for Polish residents). Alternatively, the European Small Claims Procedure allows you to sue in court online.",
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

            {/* CTA mid */}
            <div className="bg-blue-600 rounded-2xl p-8 text-center text-white my-10">
              <h3 className="text-2xl font-bold mb-3">Airline Claiming Extraordinary Circumstances?</h3>
              <p className="text-blue-100 mb-6">
                Don't take it at face value. ClaimWinger's legal team will assess whether the airline's claim holds up — and challenge it on your behalf if it doesn't.
              </p>
              <Button
                asChild
                size="lg"
                className="bg-white text-blue-600 hover:bg-gray-100"
                onClick={() => trackCTA("Challenge airline refusal", "mid")}
              >
                <a
                  href={`https://claimwinger.com/delayed-flight?utm_source=problemlot.com&utm_medium=article&utm_campaign=${SLUG}&utm_content=cta_mid`}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Challenge My Airline's Refusal <ArrowRight className="ml-2 h-5 w-5" />
                </a>
              </Button>
            </div>

            {/* Internal links */}
            <div className="bg-gray-50 dark:bg-gray-800 rounded-xl p-6 mb-10 border border-gray-200 dark:border-gray-700">
              <h3 className="font-bold text-gray-900 dark:text-white mb-4">Related Guides</h3>
              <div className="grid md:grid-cols-2 gap-3">
                {[
                  { href: "/en/blog/what-counts-flight-delay-eu261", label: "What counts as a flight delay under EU261?" },
                  { href: "/en/blog/how-much-compensation-delayed-flight", label: "How much compensation for a delayed flight?" },
                  { href: "/en/blog/lot-polish-airlines-rejected-compensation-claim", label: "What to do if LOT rejects your claim" },
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
                    q: "What are extraordinary circumstances under EU261?",
                    a: "Extraordinary circumstances are events outside the airline's control that could not have been avoided even with all reasonable measures — severe weather, ATC strikes, security incidents, political airspace closures. When proven, they exempt the airline from paying compensation, though care rights still apply.",
                  },
                  {
                    q: "Is a technical fault an extraordinary circumstance?",
                    a: "Almost never. The CJEU ruled in Wallentin-Hermann v Alitalia (2008) that technical problems inherent in normal aircraft operations are not extraordinary. The only narrow exception is a manufacturing defect discovered for the first time, or damage caused by a third party.",
                  },
                  {
                    q: "Does bad weather always exempt the airline from paying?",
                    a: "No. Only severe, genuinely unforeseeable weather qualifies. Common seasonal conditions — fog at certain airports, moderate rain, standard winter weather — do not. The airline must also prove it took all reasonable measures to avoid or minimise the disruption.",
                  },
                  {
                    q: "What if the previous aircraft rotation was delayed by extraordinary circumstances?",
                    a: "This is often disputed. Courts accept cascade delays only if the original cause was truly extraordinary and no replacement aircraft was available with reasonable effort. Airlines frequently misuse this argument — it is always worth challenging.",
                  },
                  {
                    q: "Who has to prove extraordinary circumstances?",
                    a: "The airline. It must provide documented evidence — weather reports, ATC communications, official notices — showing both that the circumstances were extraordinary and that all reasonable measures were taken. A vague or undocumented claim does not meet the legal standard.",
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
              <h3 className="text-2xl font-bold mb-3">Don't Let an Unfair Rejection Stand</h3>
              <p className="text-blue-100 mb-6 max-w-xl mx-auto">
                Airlines deny legitimate claims every day by citing extraordinary circumstances. ClaimWinger's legal team challenges invalid refusals — no win, no fee. 30% commission on success (+ VAT for Polish residents).
              </p>
              <Button
                asChild
                size="lg"
                className="bg-white text-blue-600 hover:bg-gray-100"
                onClick={() => trackCTA("Challenge my airline refusal", "bottom")}
              >
                <a
                  href={`https://claimwinger.com/delayed-flight?utm_source=problemlot.com&utm_medium=article&utm_campaign=${SLUG}&utm_content=cta_bottom`}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Challenge My Airline's Refusal <ArrowRight className="ml-2 h-5 w-5" />
                </a>
              </Button>
            </div>

          </div>
        </div>
      </article>
    </LayoutEn>
  );
}
