import { LayoutEn } from "@/components/LayoutEn";
import { SEO } from "@/components/SEO";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import Link from "next/link";
import {
  XCircle,
  Euro,
  Plane,
  AlertCircle,
  CheckCircle,
  FileText,
  Scale,
  Calendar,
} from "lucide-react";

export default function LOTCancelledFlightCompensation() {
  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": [
      {
        "@type": "Question",
        "name": "How much compensation for a cancelled LOT Polish Airlines flight?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "€250 for flights up to 1,500 km, €400 for EU flights 1,500-3,500 km, and €600 for flights over 3,500 km outside the EU. You must be notified less than 14 days before departure."
        }
      },
      {
        "@type": "Question",
        "name": "What if LOT cancelled my flight less than 14 days before departure?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "You're entitled to full compensation unless LOT can prove extraordinary circumstances. Cancellations under 14 days almost always qualify for payment."
        }
      },
      {
        "@type": "Question",
        "name": "Can I get compensation if LOT offered me an alternative flight?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Yes! Even if LOT rebooked you, you can still claim compensation if the alternative flight doesn't meet specific timing criteria or if you were notified less than 14 days in advance."
        }
      },
      {
        "@type": "Question",
        "name": "Does LOT have to pay if they cancel due to technical problems?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Yes. Technical problems are the airline's responsibility. LOT must maintain their aircraft properly, so mechanical issues are NOT extraordinary circumstances."
        }
      },
      {
        "@type": "Question",
        "name": "What if LOT says the cancellation was due to weather?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Airlines often falsely claim weather as an excuse. Unless severe weather affected all airlines at that time, LOT must pay. Check if other flights departed normally."
        }
      },
      {
        "@type": "Question",
        "name": "Can I claim if I booked through Booking.com or Expedia?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Yes! Your compensation rights are the same regardless of booking platform. File directly with LOT Polish Airlines, not the travel agency."
        }
      },
      {
        "@type": "Question",
        "name": "What if LOT cancelled my return flight only?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "You can claim for the cancelled segment. Each flight leg is evaluated separately under EU261. If your return was cancelled with less than 14 days notice, you're entitled to compensation."
        }
      },
      {
        "@type": "Question",
        "name": "How long do I have to claim for a cancelled LOT flight?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Time limits vary: 3 years in Poland, 6 years in UK, 3 years in Germany. Check your country's statute of limitations. File as soon as possible for best results."
        }
      },
      {
        "@type": "Question",
        "name": "What if LOT offered me a voucher instead of rebooking?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "You can refuse the voucher and demand cash compensation. Airlines prefer vouchers, but you have the legal right to choose monetary payment."
        }
      },
      {
        "@type": "Question",
        "name": "Can I claim if I accepted LOT's refund for the cancelled flight?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Yes! A ticket refund is separate from compensation. You're entitled to BOTH: a refund for the unused ticket AND compensation for the inconvenience (up to €600)."
        }
      }
    ]
  };

  const articleSchema = {
    "@context": "https://schema.org",
    "@type": "Article",
    "headline": "LOT Polish Airlines Cancelled Flight: How to Claim Up to €600 Compensation",
    "description": "Complete guide to claiming compensation when LOT Polish Airlines cancels your flight. Learn your EU261 rights, compensation amounts, and step-by-step claim process.",
    "author": {
      "@type": "Organization",
      "name": "LOT Problem"
    },
    "publisher": {
      "@type": "Organization",
      "name": "LOT Problem",
      "logo": {
        "@type": "ImageObject",
        "url": "https://lotproblem.pl/og-image.png"
      }
    },
    "datePublished": "2025-03-05",
    "dateModified": "2025-03-05"
  };

  return (
    <LayoutEn>
      <SEO
        title="LOT Polish Airlines Cancelled Flight Compensation: Claim Up to €600 | EU261 Guide 2025"
        description="LOT cancelled your flight? Get up to €600 compensation under EU261. Expert guide on eligibility, amounts, claim process, and what to do when they refuse to pay."
        url="https://lotproblem.pl/en/blog/lot-polish-airlines-cancelled-flight-compensation"
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
              <span>LOT Cancelled Flight Compensation</span>
            </nav>

            {/* Article Header */}
            <header className="mb-12">
              <Badge className="mb-4">Passenger Rights</Badge>
              <h1 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-6">
                LOT Polish Airlines Cancelled Flight: How to Claim Up to €600 Compensation
              </h1>
              <div className="flex items-center gap-4 text-gray-600 dark:text-gray-400 mb-6">
                <span className="flex items-center gap-1">
                  <Calendar className="h-4 w-4" />
                  14 min read
                </span>
                <span>•</span>
                <span>Updated March 5, 2025</span>
              </div>
              <p className="text-xl text-gray-700 dark:text-gray-300 leading-relaxed">
                If LOT Polish Airlines cancelled your flight with less than 14 days notice, you're entitled to up to €600 in compensation under EU Regulation 261/2004. This comprehensive guide explains your rights, how much you can claim, and the exact steps to get paid—even when LOT refuses.
              </p>
            </header>

            {/* Quick Summary */}
            <Card className="p-6 bg-blue-50 dark:bg-blue-900/20 border-blue-200 dark:border-blue-800 mb-12">
              <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4 flex items-center gap-2">
                <AlertCircle className="h-6 w-6 text-blue-600" />
                Key Facts
              </h2>
              <ul className="space-y-3 text-gray-700 dark:text-gray-300">
                <li className="flex items-start gap-2">
                  <CheckCircle className="h-5 w-5 text-green-600 flex-shrink-0 mt-0.5" />
                  <span><strong>Compensation:</strong> €250-€600 based on flight distance</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle className="h-5 w-5 text-green-600 flex-shrink-0 mt-0.5" />
                  <span><strong>Notification rule:</strong> Less than 14 days before departure</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle className="h-5 w-5 text-green-600 flex-shrink-0 mt-0.5" />
                  <span><strong>Alternative flights:</strong> You can still claim even if rebooked</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle className="h-5 w-5 text-green-600 flex-shrink-0 mt-0.5" />
                  <span><strong>Refund + Compensation:</strong> You get BOTH—they're separate rights</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle className="h-5 w-5 text-green-600 flex-shrink-0 mt-0.5" />
                  <span><strong>Time limit:</strong> 3-6 years depending on country</span>
                </li>
              </ul>
            </Card>

            {/* First CTA */}
            <div className="bg-gradient-to-r from-blue-600 to-indigo-600 rounded-lg p-8 text-center text-white mb-12">
              <h3 className="text-2xl font-bold mb-4">
                Check Your Cancelled Flight Compensation Now
              </h3>
              <p className="text-lg mb-6 text-blue-100">
                Find out if you're eligible for up to €600 in 2 minutes. Free check, no obligations.
              </p>
              <Button
                asChild
                size="lg"
                className="bg-white text-blue-600 hover:bg-gray-100"
              >
                <a
                  href="https://claimwinger.com/cancelled-flight?utm_source=blog&utm_medium=lot_cancelled_guide&utm_campaign=first_cta"
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
                When Are You Entitled to Compensation for a Cancelled LOT Flight?
              </h2>

              <p className="mb-6">
                Under EU Regulation 261/2004, LOT Polish Airlines must compensate you when they cancel your flight, unless they can prove extraordinary circumstances beyond their control. The key factor is the notification timeline.
              </p>

              <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">
                The 14-Day Rule: Your Right to Compensation
              </h3>

              <p className="mb-6">
                You're entitled to compensation if LOT cancelled your flight with <strong>less than 14 days notice</strong> before the scheduled departure date. This applies regardless of the reason LOT gives—unless they can prove genuine extraordinary circumstances (which is rare).
              </p>

              <Card className="p-6 bg-yellow-50 dark:bg-yellow-900/20 border-yellow-200 dark:border-yellow-800 mb-6">
                <p className="text-gray-900 dark:text-white font-semibold mb-2">
                  📌 Real Example:
                </p>
                <p className="text-gray-700 dark:text-gray-300">
                  Your LOT flight from Warsaw to Chicago was scheduled for June 15th. On June 3rd (12 days before departure), LOT sends an email saying the flight is cancelled due to "operational reasons." <strong>Result: You're entitled to €600 compensation</strong> because notification was under 14 days.
                </p>
              </Card>

              <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">
                What If LOT Offered an Alternative Flight?
              </h3>

              <p className="mb-6">
                Even if LOT rebooked you on another flight, you can still claim compensation if:
              </p>

              <ul className="mb-6 space-y-2">
                <li>The alternative flight departed <strong>more than 1 hour earlier</strong> than your original departure time</li>
                <li>The alternative flight arrived <strong>more than 2 hours later</strong> than your original arrival time</li>
                <li>The alternative flight required you to accept significantly worse conditions (extra connections, downgraded class, etc.)</li>
              </ul>

              <p className="mb-6">
                <strong>Important:</strong> If the alternative flight met all timing criteria above, LOT may avoid paying compensation—but you still get a full refund for the original ticket.
              </p>

              <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-6 flex items-center gap-3 mt-12">
                <Euro className="h-8 w-8 text-blue-600" />
                How Much Compensation Can You Claim from LOT?
              </h2>

              <p className="mb-6">
                Compensation amounts are fixed by law and based on flight distance—not the ticket price you paid. Even a €30 budget ticket can entitle you to €600 if eligible.
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
                Compensation + Refund: You Get Both
              </h3>

              <p className="mb-6">
                Many passengers don't realize this: <strong>ticket refund and compensation are separate rights.</strong> When LOT cancels your flight, you're entitled to:
              </p>

              <ul className="mb-6 space-y-2">
                <li><strong>Ticket Refund:</strong> Full refund of the unused ticket (or rebooking at no extra cost)</li>
                <li><strong>Compensation:</strong> €250-€600 for the inconvenience caused by the cancellation</li>
              </ul>

              <p className="mb-6">
                LOT cannot deduct the refund from your compensation—they are legally required to provide both.
              </p>

              <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-6 flex items-center gap-3 mt-12">
                <XCircle className="h-8 w-8 text-blue-600" />
                Common Cancellation Scenarios and Your Rights
              </h2>

              <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">
                1. LOT Cancelled Due to "Operational Reasons"
              </h3>

              <p className="mb-6">
                This vague term usually means crew shortages, aircraft rotation issues, or technical problems. <strong>None of these are extraordinary circumstances.</strong> LOT is responsible for operational planning, so you CAN claim compensation.
              </p>

              <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">
                2. Technical Problems / Aircraft Maintenance
              </h3>

              <p className="mb-6">
                Airlines must maintain their aircraft properly. Routine technical issues, mechanical failures, and maintenance delays are NOT extraordinary. <strong>You're entitled to full compensation.</strong>
              </p>

              <p className="mb-6">
                Only unforeseen, unavoidable technical defects (like a bird strike or hidden manufacturing defect discovered during flight) might qualify as extraordinary—and LOT must prove it.
              </p>

              <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">
                3. Weather-Related Cancellations
              </h3>

              <p className="mb-6">
                Weather can be extraordinary, but airlines abuse this excuse. To deny your claim, LOT must prove:
              </p>

              <ul className="mb-6 space-y-2">
                <li>Severe weather directly affected YOUR specific flight</li>
                <li>No reasonable measures could have prevented the cancellation</li>
                <li>Other airlines also cancelled flights at the same time/route</li>
              </ul>

              <p className="mb-6">
                <strong>Pro tip:</strong> Check FlightRadar24 or similar services. If other airlines were flying normally during LOT's "weather cancellation," the excuse is invalid.
              </p>

              <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">
                4. Strike-Related Cancellations
              </h3>

              <p className="mb-6">
                <strong>LOT employee strike:</strong> NOT extraordinary. LOT is responsible for labor relations with their own staff. You CAN claim.
              </p>

              <p className="mb-6">
                <strong>Air traffic control strike or airport strike:</strong> Usually considered extraordinary, but context matters. If LOT had advance notice and could have rerouted passengers, they may still be liable.
              </p>

              <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">
                5. COVID-19 Travel Restrictions
              </h3>

              <p className="mb-6">
                Government-imposed travel bans were generally considered extraordinary during 2020-2021. However, by 2022-2023, airlines had time to adjust operations. If LOT cancelled due to "COVID" after restrictions were lifted, challenge the excuse.
              </p>

              <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-6 flex items-center gap-3 mt-12">
                <FileText className="h-8 w-8 text-blue-600" />
                Step-by-Step: How to Claim Compensation from LOT
              </h2>

              <div className="space-y-6 mb-8">
                <Card className="p-6">
                  <h4 className="text-xl font-bold text-gray-900 dark:text-white mb-3">
                    Step 1: Gather Your Evidence
                  </h4>
                  <p className="text-gray-700 dark:text-gray-300 mb-3">
                    Collect these documents:
                  </p>
                  <ul className="space-y-2 text-gray-700 dark:text-gray-300">
                    <li>✓ Booking confirmation and e-ticket</li>
                    <li>✓ Cancellation notification from LOT (email, SMS, app notification)</li>
                    <li>✓ Boarding pass (if you had one before cancellation)</li>
                    <li>✓ Alternative flight details (if LOT rebooked you)</li>
                    <li>✓ Written explanation from LOT (if provided)</li>
                    <li>✓ Photos of departure boards showing cancellation</li>
                  </ul>
                </Card>

                <Card className="p-6">
                  <h4 className="text-xl font-bold text-gray-900 dark:text-white mb-3">
                    Step 2: Calculate Your Compensation
                  </h4>
                  <p className="text-gray-700 dark:text-gray-300 mb-3">
                    Use our <Link href="/en/compensation-calculator" className="text-blue-600 hover:underline">compensation calculator</Link> or check the distance table above. Remember: it's based on flight distance, not ticket price.
                  </p>
                </Card>

                <Card className="p-6">
                  <h4 className="text-xl font-bold text-gray-900 dark:text-white mb-3">
                    Step 3: Submit Your Claim to LOT
                  </h4>
                  <p className="text-gray-700 dark:text-gray-300 mb-3">
                    File your claim via:
                  </p>
                  <ul className="space-y-2 text-gray-700 dark:text-gray-300 mb-3">
                    <li>• LOT's official claim form on their website</li>
                    <li>• Email: customerrelations@lot.pl</li>
                    <li>• Registered mail (recommended for legal proof)</li>
                  </ul>
                  <p className="text-gray-700 dark:text-gray-300">
                    Include: passenger names, flight details, booking reference, IBAN for payment, and clear statement of your claim.
                  </p>
                </Card>

                <Card className="p-6">
                  <h4 className="text-xl font-bold text-gray-900 dark:text-white mb-3">
                    Step 4: Wait for LOT's Response
                  </h4>
                  <p className="text-gray-700 dark:text-gray-300">
                    LOT typically responds within 2-8 weeks, but there's no legal deadline. If they reject or ignore your claim, don't give up—most rejections are unjustified.
                  </p>
                </Card>

                <Card className="p-6">
                  <h4 className="text-xl font-bold text-gray-900 dark:text-white mb-3">
                    Step 5: Escalate If Rejected
                  </h4>
                  <p className="text-gray-700 dark:text-gray-300 mb-3">
                    If LOT rejects your claim:
                  </p>
                  <ul className="space-y-2 text-gray-700 dark:text-gray-300">
                    <li>• Contact your national enforcement body (UOKiK in Poland, CAA in UK)</li>
                    <li>• Use a specialized claim service like <a href="https://claimwinger.com?utm_source=blog&utm_medium=lot_cancelled_guide&utm_campaign=escalation_link" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline">ClaimWinger</a></li>
                    <li>• Consider small claims court (often free or low-cost)</li>
                  </ul>
                </Card>
              </div>

              <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-6 flex items-center gap-3 mt-12">
                <AlertCircle className="h-8 w-8 text-blue-600" />
                Why LOT Rejects Valid Claims (And What to Do)
              </h2>

              <p className="mb-6">
                Airlines reject legitimate claims hoping passengers won't pursue further. Here are LOT's most common excuses—and how to challenge them:
              </p>

              <div className="space-y-4 mb-8">
                <Card className="p-4 bg-gray-50 dark:bg-gray-800">
                  <p className="font-semibold text-gray-900 dark:text-white mb-2">
                    "Extraordinary circumstances beyond our control"
                  </p>
                  <p className="text-gray-700 dark:text-gray-300 text-sm">
                    <strong>Challenge this:</strong> Ask LOT to provide specific evidence. Most operational issues, technical problems, and crew shortages are NOT extraordinary. Demand detailed documentation proving unavoidability.
                  </p>
                </Card>

                <Card className="p-4 bg-gray-50 dark:bg-gray-800">
                  <p className="font-semibold text-gray-900 dark:text-white mb-2">
                    "You accepted an alternative flight, so claim is settled"
                  </p>
                  <p className="text-gray-700 dark:text-gray-300 text-sm">
                    <strong>False:</strong> Accepting rebooking doesn't waive your right to compensation. You get BOTH: alternative transport AND monetary compensation (if eligible).
                  </p>
                </Card>

                <Card className="p-4 bg-gray-50 dark:bg-gray-800">
                  <p className="font-semibold text-gray-900 dark:text-white mb-2">
                    "Claim period has expired"
                  </p>
                  <p className="text-gray-700 dark:text-gray-300 text-sm">
                    <strong>Verify:</strong> Check your country's statute of limitations. Most EU countries allow 3-6 years. Airlines lie about this to discourage claims.
                  </p>
                </Card>

                <Card className="p-4 bg-gray-50 dark:bg-gray-800">
                  <p className="font-semibold text-gray-900 dark:text-white mb-2">
                    "No response at all"
                  </p>
                  <p className="text-gray-700 dark:text-gray-300 text-sm">
                    <strong>Persistence wins:</strong> Send follow-up reminders every 2-3 weeks. If still ignored, escalate to national enforcement body or use a claim service to apply legal pressure.
                  </p>
                </Card>
              </div>

              <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-6 flex items-center gap-3 mt-12">
                <Calendar className="h-8 w-8 text-blue-600" />
                Time Limits for Filing Claims
              </h2>

              <p className="mb-6">
                Statute of limitations varies by country where you file:
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
                <strong>Pro tip:</strong> File as soon as possible. Fresh documentation strengthens your claim, and you avoid missing deadlines.
              </p>
            </div>

            {/* Second CTA - Before FAQ */}
            <div className="bg-gradient-to-r from-blue-600 to-indigo-600 rounded-lg p-8 text-center text-white my-12">
              <h3 className="text-2xl font-bold mb-4">
                Don't Let LOT Deny Your Rights
              </h3>
              <p className="text-lg mb-6 text-blue-100">
                Get expert help with rejected claims and legal escalation. We maximize your compensation success rate.
              </p>
              <Button
                asChild
                size="lg"
                className="bg-white text-blue-600 hover:bg-gray-100"
              >
                <a
                  href="https://claimwinger.com/cancelled-flight?utm_source=blog&utm_medium=lot_cancelled_guide&utm_campaign=second_cta"
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
                    How much compensation for a cancelled LOT Polish Airlines flight?
                  </h3>
                  <p className="text-gray-700 dark:text-gray-300">
                    €250 for flights up to 1,500 km, €400 for EU flights 1,500-3,500 km, and €600 for flights over 3,500 km outside the EU. You must be notified less than 14 days before departure.
                  </p>
                </Card>

                <Card className="p-6">
                  <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-3">
                    What if LOT cancelled my flight less than 14 days before departure?
                  </h3>
                  <p className="text-gray-700 dark:text-gray-300">
                    You're entitled to full compensation unless LOT can prove extraordinary circumstances. Cancellations under 14 days almost always qualify for payment.
                  </p>
                </Card>

                <Card className="p-6">
                  <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-3">
                    Can I get compensation if LOT offered me an alternative flight?
                  </h3>
                  <p className="text-gray-700 dark:text-gray-300">
                    Yes! Even if LOT rebooked you, you can still claim compensation if the alternative flight doesn't meet specific timing criteria or if you were notified less than 14 days in advance.
                  </p>
                </Card>

                <Card className="p-6">
                  <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-3">
                    Does LOT have to pay if they cancel due to technical problems?
                  </h3>
                  <p className="text-gray-700 dark:text-gray-300">
                    Yes. Technical problems are the airline's responsibility. LOT must maintain their aircraft properly, so mechanical issues are NOT extraordinary circumstances.
                  </p>
                </Card>

                <Card className="p-6">
                  <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-3">
                    What if LOT says the cancellation was due to weather?
                  </h3>
                  <p className="text-gray-700 dark:text-gray-300">
                    Airlines often falsely claim weather as an excuse. Unless severe weather affected all airlines at that time, LOT must pay. Check if other flights departed normally.
                  </p>
                </Card>

                <Card className="p-6">
                  <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-3">
                    Can I claim if I booked through Booking.com or Expedia?
                  </h3>
                  <p className="text-gray-700 dark:text-gray-300">
                    Yes! Your compensation rights are the same regardless of booking platform. File directly with LOT Polish Airlines, not the travel agency.
                  </p>
                </Card>

                <Card className="p-6">
                  <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-3">
                    What if LOT cancelled my return flight only?
                  </h3>
                  <p className="text-gray-700 dark:text-gray-300">
                    You can claim for the cancelled segment. Each flight leg is evaluated separately under EU261. If your return was cancelled with less than 14 days notice, you're entitled to compensation.
                  </p>
                </Card>

                <Card className="p-6">
                  <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-3">
                    How long do I have to claim for a cancelled LOT flight?
                  </h3>
                  <p className="text-gray-700 dark:text-gray-300">
                    Time limits vary: 3 years in Poland, 6 years in UK, 3 years in Germany. Check your country's statute of limitations. File as soon as possible for best results.
                  </p>
                </Card>

                <Card className="p-6">
                  <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-3">
                    What if LOT offered me a voucher instead of rebooking?
                  </h3>
                  <p className="text-gray-700 dark:text-gray-300">
                    You can refuse the voucher and demand cash compensation. Airlines prefer vouchers, but you have the legal right to choose monetary payment.
                  </p>
                </Card>

                <Card className="p-6">
                  <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-3">
                    Can I claim if I accepted LOT's refund for the cancelled flight?
                  </h3>
                  <p className="text-gray-700 dark:text-gray-300">
                    Yes! A ticket refund is separate from compensation. You're entitled to BOTH: a refund for the unused ticket AND compensation for the inconvenience (up to €600).
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
                    <Link href="/en/blog/lot-polish-airlines-delay-compensation-guide" className="hover:text-blue-600">
                      LOT Polish Airlines Delay Compensation Guide
                    </Link>
                  </h3>
                  <p className="text-gray-600 dark:text-gray-400 text-sm">
                    Learn how to claim up to €600 when your LOT flight is delayed by 3+ hours.
                  </p>
                </Card>

                <Card className="p-6 hover:shadow-lg transition-shadow">
                  <h3 className="text-lg font-bold text-gray-900 dark:text-white mb-2">
                    <Link href="/en/blog/lot-polish-airlines-compensation-amounts" className="hover:text-blue-600">
                      How Much Compensation from LOT?
                    </Link>
                  </h3>
                  <p className="text-gray-600 dark:text-gray-400 text-sm">
                    Complete breakdown of €250, €400, and €600 compensation amounts.
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
