import { LayoutEn } from "@/components/LayoutEn";
import { SEO } from "@/components/SEO";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import Link from "next/link";
import {
  Clock,
  Euro,
  Plane,
  AlertCircle,
  CheckCircle,
  FileText,
  Scale,
  Calendar,
} from "lucide-react";

export default function LOTDelayCompensationGuide() {
  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": [
      {
        "@type": "Question",
        "name": "How much compensation can I get for a delayed LOT Polish Airlines flight?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "You can claim €250 for flights up to 1,500 km, €400 for EU flights between 1,500-3,500 km, and €600 for flights over 3,500 km outside the EU. The delay must be at least 3 hours upon arrival."
        }
      },
      {
        "@type": "Question",
        "name": "What is the minimum delay required to claim compensation from LOT?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Your flight must arrive at the final destination at least 3 hours late to qualify for compensation under EU Regulation 261/2004. Departure delay time does not count—only arrival time matters."
        }
      },
      {
        "@type": "Question",
        "name": "Can I claim compensation if LOT says the delay was due to extraordinary circumstances?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Airlines often cite extraordinary circumstances to avoid paying. However, most technical issues, crew scheduling problems, and operational delays are NOT extraordinary. You should still file a claim—many rejected claims succeed upon appeal."
        }
      },
      {
        "@type": "Question",
        "name": "How long do I have to claim compensation from LOT Polish Airlines?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Time limits vary by country. In Poland, you have 3 years from the flight date. In the UK, it's 6 years. Always file as soon as possible to avoid missing deadlines and to have better documentation."
        }
      },
      {
        "@type": "Question",
        "name": "Does LOT have to pay compensation for delays caused by weather?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Not always. Severe weather (storms, heavy snow, volcanic ash) is considered extraordinary. However, if other airlines operated normally, LOT may still be liable. Weather must directly affect your specific flight."
        }
      },
      {
        "@type": "Question",
        "name": "Can I claim if I booked through a travel agency or third-party website?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Yes! Your compensation rights are the same regardless of where you booked. File the claim directly with LOT Polish Airlines, not the booking agent. Keep your booking reference and ticket number."
        }
      },
      {
        "@type": "Question",
        "name": "What if LOT offered me a voucher instead of cash compensation?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "You have the legal right to choose cash compensation. Airlines prefer vouchers, but you can refuse and demand monetary payment. Never accept a voucher if you want cash—it's your choice by law."
        }
      },
      {
        "@type": "Question",
        "name": "Do I need to keep my boarding pass to claim compensation?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "While helpful, it's not mandatory. Your booking confirmation, e-ticket, and flight details are usually sufficient. However, boarding passes and delay confirmation letters strengthen your claim."
        }
      },
      {
        "@type": "Question",
        "name": "Can I claim compensation if I was traveling on a business trip?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Yes! Compensation belongs to the passenger, not the company. Even if your employer paid for the ticket, you personally receive the compensation as the inconvenienced passenger."
        }
      },
      {
        "@type": "Question",
        "name": "What happens if LOT rejects my compensation claim?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Don't give up! Airlines reject many valid claims hoping passengers won't pursue further. You can escalate to your national enforcement body (UOKiK in Poland, CAA in UK) or use a claim service like ClaimWinger to handle the legal process."
        }
      }
    ]
  };

  const articleSchema = {
    "@context": "https://schema.org",
    "@type": "Article",
    "headline": "LOT Polish Airlines Flight Delay Compensation: Complete Guide for International Passengers",
    "description": "Comprehensive guide to claiming up to €600 compensation for LOT Polish Airlines delayed flights. Learn your rights under EU261/2004 and how to file a successful claim.",
    "author": {
      "@type": "Organization",
      "name": "LOT Problem"
    },
    "publisher": {
      "@type": "Organization",
      "name": "LOT Problem",
      "logo": {
        "@type": "ImageObject",
        "url": "https://problemlot.com/og-image.png"
      }
    },
    "datePublished": "2025-03-05",
    "dateModified": "2025-03-05"
  };

  return (
    <LayoutEn>
      <SEO
        title="LOT Polish Airlines Delay Compensation: Claim Up to €600 | Complete Guide 2025"
        description="Get up to €600 for LOT Polish Airlines flight delays over 3 hours. Expert guide on EU261 rights, claim process, and how to maximize your compensation."
        url="https://problemlot.com/en/blog/lot-polish-airlines-delay-compensation-guide"
      />

      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(articleSchema) }}
      />

      <article className="py-12">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            {/* Breadcrumbs */}
            <nav className="mb-8 text-sm text-gray-600 dark:text-gray-400">
              <Link href="/en" className="hover:text-blue-600">Home</Link>
              {" > "}
              <Link href="/en/blog" className="hover:text-blue-600">Blog</Link>
              {" > "}
              <span>LOT Delay Compensation Guide</span>
            </nav>

            {/* Article Header */}
            <header className="mb-12">
              <Badge className="mb-4">Airline Guide</Badge>
              <h1 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-6">
                LOT Polish Airlines Flight Delay Compensation: Complete Guide for International Passengers
              </h1>
              <div className="flex items-center gap-4 text-gray-600 dark:text-gray-400 mb-6">
                <span className="flex items-center gap-1">
                  <Clock className="h-4 w-4" />
                  12 min read
                </span>
                <span>•</span>
                <span>Updated March 5, 2025</span>
              </div>
              <p className="text-xl text-gray-700 dark:text-gray-300 leading-relaxed">
                If your LOT Polish Airlines flight was delayed by 3 hours or more, you may be entitled to up to €600 in compensation under EU Regulation 261/2004. This comprehensive guide explains your passenger rights, how much you can claim, and the exact steps to file a successful compensation claim against LOT.
              </p>
            </header>

            {/* Quick Summary Box */}
            <Card className="p-6 bg-blue-50 dark:bg-blue-900/20 border-blue-200 dark:border-blue-800 mb-12">
              <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4 flex items-center gap-2">
                <AlertCircle className="h-6 w-6 text-blue-600" />
                Quick Summary
              </h2>
              <ul className="space-y-3 text-gray-700 dark:text-gray-300">
                <li className="flex items-start gap-2">
                  <CheckCircle className="h-5 w-5 text-green-600 flex-shrink-0 mt-0.5" />
                  <span><strong>Compensation amounts:</strong> €250-€600 depending on flight distance</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle className="h-5 w-5 text-green-600 flex-shrink-0 mt-0.5" />
                  <span><strong>Minimum delay:</strong> 3 hours arrival delay required</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle className="h-5 w-5 text-green-600 flex-shrink-0 mt-0.5" />
                  <span><strong>Applies to:</strong> Flights departing from EU or LOT flights arriving in EU</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle className="h-5 w-5 text-green-600 flex-shrink-0 mt-0.5" />
                  <span><strong>Time limit:</strong> 3 years in Poland, 6 years in UK (varies by country)</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle className="h-5 w-5 text-green-600 flex-shrink-0 mt-0.5" />
                  <span><strong>Exceptions:</strong> Extraordinary circumstances (rare, often disputed)</span>
                </li>
              </ul>
            </Card>

            {/* First CTA */}
            <div className="bg-gradient-to-r from-blue-600 to-indigo-600 rounded-lg p-8 text-center text-white mb-12">
              <h3 className="text-2xl font-bold mb-4">
                Check Your LOT Compensation Now
              </h3>
              <p className="text-lg mb-6 text-blue-100">
                Find out if you're eligible for up to €600 compensation in just 2 minutes. Free check, no obligations.
              </p>
              <Button
                asChild
                size="lg"
                className="bg-white text-blue-600 hover:bg-gray-100"
              >
                <a
                  href="https://claimwinger.com/delayed-flight?utm_source=blog&utm_medium=lot_delay_guide&utm_campaign=first_cta"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Start Free Claim Check →
                </a>
              </Button>
            </div>

            {/* Main Content */}
            <div className="prose prose-lg dark:prose-invert max-w-none">
              <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-6 flex items-center gap-3">
                <Scale className="h-8 w-8 text-blue-600" />
                Understanding Your Rights Under EU261/2004
              </h2>

              <p className="mb-6">
                EU Regulation 261/2004 is the European law that protects air passengers when flights are delayed, cancelled, or overbooked. LOT Polish Airlines, as a European carrier, must comply with this regulation for all eligible flights.
              </p>

              <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">
                When Does EU261 Apply to LOT Flights?
              </h3>

              <p className="mb-4">
                The regulation covers:
              </p>

              <ul className="mb-6 space-y-2">
                <li><strong>All flights departing from EU airports</strong> (regardless of airline) — e.g., Warsaw → New York on LOT</li>
                <li><strong>LOT flights arriving in the EU from outside</strong> — e.g., New York → Warsaw on LOT</li>
                <li><strong>Connecting flights on a single booking</strong> — if one leg causes you to miss the connection</li>
              </ul>

              <Card className="p-6 bg-red-50 dark:bg-red-900/20 border-red-200 dark:border-red-800 mb-6">
                <p className="text-gray-900 dark:text-white font-semibold mb-2">
                  ⚠️ Important Exception:
                </p>
                <p className="text-gray-700 dark:text-gray-300">
                  If you're flying from outside the EU to the EU on a non-EU airline (e.g., United Airlines Chicago → Warsaw), EU261 does NOT apply. Only EU-based airlines like LOT are covered for inbound flights.
                </p>
              </Card>

              <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-6 flex items-center gap-3 mt-12">
                <Euro className="h-8 w-8 text-blue-600" />
                How Much Compensation Can You Get from LOT?
              </h2>

              <p className="mb-6">
                Compensation amounts are fixed by law based on flight distance, not ticket price. Even if you paid €50 for a budget ticket, you can still receive €600 if eligible.
              </p>

              <div className="grid md:grid-cols-3 gap-6 mb-8">
                <Card className="p-6 text-center">
                  <div className="text-5xl font-bold text-blue-600 mb-2">€250</div>
                  <p className="font-semibold text-gray-900 dark:text-white mb-2">Short Distance</p>
                  <p className="text-sm text-gray-600 dark:text-gray-400">
                    Flights up to 1,500 km
                  </p>
                  <p className="text-xs text-gray-500 mt-3">
                    Example: Warsaw → Berlin
                  </p>
                </Card>

                <Card className="p-6 text-center border-2 border-blue-600">
                  <div className="text-5xl font-bold text-blue-600 mb-2">€400</div>
                  <p className="font-semibold text-gray-900 dark:text-white mb-2">Medium Distance</p>
                  <p className="text-sm text-gray-600 dark:text-gray-400">
                    EU flights 1,500-3,500 km
                  </p>
                  <p className="text-xs text-gray-500 mt-3">
                    Example: Warsaw → London
                  </p>
                </Card>

                <Card className="p-6 text-center">
                  <div className="text-5xl font-bold text-blue-600 mb-2">€600</div>
                  <p className="font-semibold text-gray-900 dark:text-white mb-2">Long Distance</p>
                  <p className="text-sm text-gray-600 dark:text-gray-400">
                    Flights over 3,500 km
                  </p>
                  <p className="text-xs text-gray-500 mt-3">
                    Example: Warsaw → New York
                  </p>
                </Card>
              </div>

              <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">
                Special Rule for Long-Haul Flights
              </h3>

              <p className="mb-6">
                For flights over 3,500 km outside the EU, compensation can be reduced by 50% if the delay is between 3-4 hours (€300 instead of €600). If the delay exceeds 4 hours, you still get the full €600.
              </p>

              <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-6 flex items-center gap-3 mt-12">
                <Clock className="h-8 w-8 text-blue-600" />
                Minimum Delay Requirements
              </h2>

              <p className="mb-6">
                To qualify for compensation, your LOT flight must arrive at the <strong>final destination</strong> at least <strong>3 hours late</strong>. Departure delay doesn't count—only the arrival time matters.
              </p>

              <Card className="p-6 bg-yellow-50 dark:bg-yellow-900/20 border-yellow-200 dark:border-yellow-800 mb-6">
                <p className="text-gray-900 dark:text-white font-semibold mb-2">
                  📌 Real Example:
                </p>
                <p className="text-gray-700 dark:text-gray-300">
                  Your LOT flight from Warsaw to Chicago was delayed 5 hours at departure but made up time in the air. You arrived only 2 hours 45 minutes late. <strong>Result: No compensation</strong> because arrival delay was under 3 hours.
                </p>
              </Card>

              <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">
                How Arrival Time Is Calculated
              </h3>

              <p className="mb-6">
                The official arrival time is when the aircraft doors open and passengers can disembark. Not when the plane lands or reaches the gate. This is important for borderline cases.
              </p>

              <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-6 flex items-center gap-3 mt-12">
                <Plane className="h-8 w-8 text-blue-600" />
                Common Delay Situations and Your Rights
              </h2>

              <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">
                1. Technical Problems
              </h3>

              <p className="mb-6">
                LOT often cites "technical issues" as a reason to deny compensation. However, most technical problems are NOT considered extraordinary circumstances. Airlines are responsible for maintaining their aircraft, and routine mechanical issues should not surprise them.
              </p>

              <p className="mb-6">
                <strong>You CAN claim for:</strong>
              </p>
              <ul className="mb-6 space-y-2">
                <li>Engine malfunctions</li>
                <li>Hydraulic system failures</li>
                <li>Software glitches</li>
                <li>General wear and tear issues</li>
              </ul>

              <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">
                2. Crew Scheduling Issues
              </h3>

              <p className="mb-6">
                If LOT delays your flight because crew members are missing, sick, or haven't had required rest time, this is the airline's operational responsibility. You CAN claim compensation in these cases.
              </p>

              <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">
                3. Weather-Related Delays
              </h3>

              <p className="mb-6">
                Severe weather (storms, heavy snow, volcanic ash) can be considered extraordinary. However, airlines must prove that:
              </p>

              <ul className="mb-6 space-y-2">
                <li>The weather directly affected YOUR specific flight</li>
                <li>They took all reasonable measures to minimize the delay</li>
                <li>No other airline could have operated the route safely</li>
              </ul>

              <p className="mb-6">
                If other airlines were flying normally, LOT's weather excuse may not hold up. Always check if alternative flights departed on time.
              </p>

              <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">
                4. Air Traffic Control Delays
              </h3>

              <p className="mb-6">
                ATC restrictions are often extraordinary, but not always. If the delay was due to LOT's late departure causing a missed ATC slot, the airline is responsible. Context matters.
              </p>

              <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-6 flex items-center gap-3 mt-12">
                <FileText className="h-8 w-8 text-blue-600" />
                Step-by-Step: How to Claim Compensation from LOT
              </h2>

              <div className="space-y-6 mb-8">
                <Card className="p-6">
                  <h4 className="text-xl font-bold text-gray-900 dark:text-white mb-3">
                    Step 1: Gather Your Documentation
                  </h4>
                  <p className="text-gray-700 dark:text-gray-300 mb-3">
                    Collect these essential documents:
                  </p>
                  <ul className="space-y-2 text-gray-700 dark:text-gray-300">
                    <li>✓ Booking confirmation and e-ticket</li>
                    <li>✓ Boarding pass (if available)</li>
                    <li>✓ Flight details (flight number, date, route)</li>
                    <li>✓ Proof of delay (photos of departure board, airline messages)</li>
                    <li>✓ Written explanation from LOT (if provided)</li>
                  </ul>
                </Card>

                <Card className="p-6">
                  <h4 className="text-xl font-bold text-gray-900 dark:text-white mb-3">
                    Step 2: Calculate Your Compensation Amount
                  </h4>
                  <p className="text-gray-700 dark:text-gray-300 mb-3">
                    Use an <Link href="/en/compensation-calculator" className="text-blue-600 hover:underline">online calculator</Link> or check the distance table above. Remember: it's based on flight distance, not ticket price.
                  </p>
                </Card>

                <Card className="p-6">
                  <h4 className="text-xl font-bold text-gray-900 dark:text-white mb-3">
                    Step 3: File Your Claim with LOT
                  </h4>
                  <p className="text-gray-700 dark:text-gray-300 mb-3">
                    Submit your claim to LOT Polish Airlines via:
                  </p>
                  <ul className="space-y-2 text-gray-700 dark:text-gray-300 mb-3">
                    <li>• LOT's official claim form on their website</li>
                    <li>• Email: customerrelations@lot.pl</li>
                    <li>• Registered mail (recommended for legal proof)</li>
                  </ul>
                  <p className="text-gray-700 dark:text-gray-300">
                    Include all passenger details, flight information, and your IBAN for payment.
                  </p>
                </Card>

                <Card className="p-6">
                  <h4 className="text-xl font-bold text-gray-900 dark:text-white mb-3">
                    Step 4: Wait for LOT's Response
                  </h4>
                  <p className="text-gray-700 dark:text-gray-300 mb-3">
                    LOT has no legal deadline to respond, but typically replies within 2-8 weeks. If they don't respond or reject your claim, don't give up.
                  </p>
                </Card>

                <Card className="p-6">
                  <h4 className="text-xl font-bold text-gray-900 dark:text-white mb-3">
                    Step 5: Escalate If Needed
                  </h4>
                  <p className="text-gray-700 dark:text-gray-300 mb-3">
                    If LOT rejects or ignores your claim:
                  </p>
                  <ul className="space-y-2 text-gray-700 dark:text-gray-300">
                    <li>• Contact your national enforcement body (UOKiK in Poland, CAA in UK)</li>
                    <li>• Use a claim service like <a href="https://claimwinger.com?utm_source=blog&utm_medium=lot_delay_guide&utm_campaign=escalation_link" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline">ClaimWinger</a> to handle legal proceedings</li>
                    <li>• Consider small claims court (free or low cost in many countries)</li>
                  </ul>
                </Card>
              </div>

              <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-6 flex items-center gap-3 mt-12">
                <AlertCircle className="h-8 w-8 text-blue-600" />
                Why Airlines Reject Valid Claims
              </h2>

              <p className="mb-6">
                LOT and other airlines often reject legitimate claims hoping passengers won't pursue further. Common excuses include:
              </p>

              <div className="space-y-4 mb-8">
                <Card className="p-4 bg-gray-50 dark:bg-gray-800">
                  <p className="font-semibold text-gray-900 dark:text-white mb-2">
                    "Extraordinary circumstances beyond our control"
                  </p>
                  <p className="text-gray-700 dark:text-gray-300 text-sm">
                    Airlines overuse this excuse. Most technical, crew, and operational issues are NOT extraordinary. Challenge this response.
                  </p>
                </Card>

                <Card className="p-4 bg-gray-50 dark:bg-gray-800">
                  <p className="font-semibold text-gray-900 dark:text-white mb-2">
                    "You accepted a voucher, so claim is settled"
                  </p>
                  <p className="text-gray-700 dark:text-gray-300 text-sm">
                    False. Accepting a voucher for expenses (meals, hotels) doesn't waive your compensation rights. You can still claim.
                  </p>
                </Card>

                <Card className="p-4 bg-gray-50 dark:bg-gray-800">
                  <p className="font-semibold text-gray-900 dark:text-white mb-2">
                    "Claim period has expired"
                  </p>
                  <p className="text-gray-700 dark:text-gray-300 text-sm">
                    Check your country's statute of limitations. In many EU countries, you have 3-6 years to claim. Airlines lie about this.
                  </p>
                </Card>

                <Card className="p-4 bg-gray-50 dark:bg-gray-800">
                  <p className="font-semibold text-gray-900 dark:text-white mb-2">
                    "No response at all"
                  </p>
                  <p className="text-gray-700 dark:text-gray-300 text-sm">
                    Some airlines ignore claims hoping you'll give up. Persistence pays off. Send reminders and escalate to enforcement bodies.
                  </p>
                </Card>
              </div>

              <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-6 flex items-center gap-3 mt-12">
                <Calendar className="h-8 w-8 text-blue-600" />
                Time Limits for Filing Claims
              </h2>

              <p className="mb-6">
                The statute of limitations varies by country where you file the claim:
              </p>

              <div className="overflow-x-auto mb-8">
                <table className="w-full border-collapse">
                  <thead>
                    <tr className="bg-gray-100 dark:bg-gray-800">
                      <th className="border border-gray-300 dark:border-gray-600 px-4 py-3 text-left">Country</th>
                      <th className="border border-gray-300 dark:border-gray-600 px-4 py-3 text-left">Time Limit</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td className="border border-gray-300 dark:border-gray-600 px-4 py-3">Poland</td>
                      <td className="border border-gray-300 dark:border-gray-600 px-4 py-3">3 years</td>
                    </tr>
                    <tr className="bg-gray-50 dark:bg-gray-900">
                      <td className="border border-gray-300 dark:border-gray-600 px-4 py-3">United Kingdom</td>
                      <td className="border border-gray-300 dark:border-gray-600 px-4 py-3">6 years</td>
                    </tr>
                    <tr>
                      <td className="border border-gray-300 dark:border-gray-600 px-4 py-3">Germany</td>
                      <td className="border border-gray-300 dark:border-gray-600 px-4 py-3">3 years</td>
                    </tr>
                    <tr className="bg-gray-50 dark:bg-gray-900">
                      <td className="border border-gray-300 dark:border-gray-600 px-4 py-3">Netherlands</td>
                      <td className="border border-gray-300 dark:border-gray-600 px-4 py-3">2 years</td>
                    </tr>
                    <tr>
                      <td className="border border-gray-300 dark:border-gray-600 px-4 py-3">Italy</td>
                      <td className="border border-gray-300 dark:border-gray-600 px-4 py-3">2 years</td>
                    </tr>
                  </tbody>
                </table>
              </div>

              <p className="mb-6">
                File as soon as possible to avoid missing deadlines and to have fresh documentation.
              </p>
            </div>

            {/* Second CTA - Before FAQ */}
            <div className="bg-gradient-to-r from-blue-600 to-indigo-600 rounded-lg p-8 text-center text-white my-12">
              <h3 className="text-2xl font-bold mb-4">
                Don't Let LOT Deny Your Rights
              </h3>
              <p className="text-lg mb-6 text-blue-100">
                Get expert help filing your claim. We handle rejected claims, legal escalation, and maximize your compensation.
              </p>
              <Button
                asChild
                size="lg"
                className="bg-white text-blue-600 hover:bg-gray-100"
              >
                <a
                  href="https://claimwinger.com?utm_source=blog&utm_medium=lot_delay_guide&utm_campaign=second_cta"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Start Your Claim Now →
                </a>
              </Button>
            </div>

            {/* FAQ Section */}
            <section className="mb-12">
              <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-8">
                Frequently Asked Questions
              </h2>

              <div className="space-y-4">
                <Card className="p-6">
                  <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-3">
                    How much compensation can I get for a delayed LOT Polish Airlines flight?
                  </h3>
                  <p className="text-gray-700 dark:text-gray-300">
                    You can claim €250 for flights up to 1,500 km, €400 for EU flights between 1,500-3,500 km, and €600 for flights over 3,500 km outside the EU. The delay must be at least 3 hours upon arrival.
                  </p>
                </Card>

                <Card className="p-6">
                  <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-3">
                    What is the minimum delay required to claim compensation from LOT?
                  </h3>
                  <p className="text-gray-700 dark:text-gray-300">
                    Your flight must arrive at the final destination at least 3 hours late to qualify for compensation under EU Regulation 261/2004. Departure delay time does not count—only arrival time matters.
                  </p>
                </Card>

                <Card className="p-6">
                  <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-3">
                    Can I claim compensation if LOT says the delay was due to extraordinary circumstances?
                  </h3>
                  <p className="text-gray-700 dark:text-gray-300">
                    Airlines often cite extraordinary circumstances to avoid paying. However, most technical issues, crew scheduling problems, and operational delays are NOT extraordinary. You should still file a claim—many rejected claims succeed upon appeal.
                  </p>
                </Card>

                <Card className="p-6">
                  <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-3">
                    How long do I have to claim compensation from LOT Polish Airlines?
                  </h3>
                  <p className="text-gray-700 dark:text-gray-300">
                    Time limits vary by country. In Poland, you have 3 years from the flight date. In the UK, it's 6 years. Always file as soon as possible to avoid missing deadlines and to have better documentation.
                  </p>
                </Card>

                <Card className="p-6">
                  <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-3">
                    Does LOT have to pay compensation for delays caused by weather?
                  </h3>
                  <p className="text-gray-700 dark:text-gray-300">
                    Not always. Severe weather (storms, heavy snow, volcanic ash) is considered extraordinary. However, if other airlines operated normally, LOT may still be liable. Weather must directly affect your specific flight.
                  </p>
                </Card>

                <Card className="p-6">
                  <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-3">
                    Can I claim if I booked through a travel agency or third-party website?
                  </h3>
                  <p className="text-gray-700 dark:text-gray-300">
                    Yes! Your compensation rights are the same regardless of where you booked. File the claim directly with LOT Polish Airlines, not the booking agent. Keep your booking reference and ticket number.
                  </p>
                </Card>

                <Card className="p-6">
                  <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-3">
                    What if LOT offered me a voucher instead of cash compensation?
                  </h3>
                  <p className="text-gray-700 dark:text-gray-300">
                    You have the legal right to choose cash compensation. Airlines prefer vouchers, but you can refuse and demand monetary payment. Never accept a voucher if you want cash—it's your choice by law.
                  </p>
                </Card>

                <Card className="p-6">
                  <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-3">
                    Do I need to keep my boarding pass to claim compensation?
                  </h3>
                  <p className="text-gray-700 dark:text-gray-300">
                    While helpful, it's not mandatory. Your booking confirmation, e-ticket, and flight details are usually sufficient. However, boarding passes and delay confirmation letters strengthen your claim.
                  </p>
                </Card>

                <Card className="p-6">
                  <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-3">
                    Can I claim compensation if I was traveling on a business trip?
                  </h3>
                  <p className="text-gray-700 dark:text-gray-300">
                    Yes! Compensation belongs to the passenger, not the company. Even if your employer paid for the ticket, you personally receive the compensation as the inconvenienced passenger.
                  </p>
                </Card>

                <Card className="p-6">
                  <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-3">
                    What happens if LOT rejects my compensation claim?
                  </h3>
                  <p className="text-gray-700 dark:text-gray-300">
                    Don't give up! Airlines reject many valid claims hoping passengers won't pursue further. You can escalate to your national enforcement body (UOKiK in Poland, CAA in UK) or use a claim service like ClaimWinger to handle the legal process.
                  </p>
                </Card>
              </div>
            </section>

            {/* Related Articles */}
            <section className="border-t border-gray-200 dark:border-gray-700 pt-12">
              <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-6">
                Related Articles
              </h2>
              <div className="grid md:grid-cols-2 gap-6">
                <Card className="p-6 hover:shadow-lg transition-shadow">
                  <h3 className="text-lg font-bold text-gray-900 dark:text-white mb-2">
                    <Link href="/en/blog/lot-polish-airlines-cancelled-flight-compensation" className="hover:text-blue-600">
                      LOT Polish Airlines Cancelled Flight Compensation
                    </Link>
                  </h3>
                  <p className="text-gray-600 dark:text-gray-400 text-sm">
                    Learn how to claim up to €600 when LOT cancels your flight with less than 14 days notice.
                  </p>
                </Card>

                <Card className="p-6 hover:shadow-lg transition-shadow">
                  <h3 className="text-lg font-bold text-gray-900 dark:text-white mb-2">
                    <Link href="/en/blog/lot-polish-airlines-compensation-amounts" className="hover:text-blue-600">
                      How Much Compensation from LOT Polish Airlines?
                    </Link>
                  </h3>
                  <p className="text-gray-600 dark:text-gray-400 text-sm">
                    Complete breakdown of €250, €400, and €600 compensation amounts based on flight distance.
                  </p>
                </Card>
              </div>
            </section>
          </div>
        </div>
      </article>
    </LayoutEn>
  );
}
