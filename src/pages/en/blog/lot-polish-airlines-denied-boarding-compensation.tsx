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
  Users,
} from "lucide-react";

export default function LOTDeniedBoardingCompensation() {
  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": [
      {
        "@type": "Question",
        "name": "What is denied boarding and when does it happen?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Denied boarding occurs when an airline refuses to let you board despite having a valid ticket and arriving on time. Most common cause: overbooking (selling more tickets than available seats). Airlines deliberately overbook expecting some passengers won't show up."
        }
      },
      {
        "@type": "Question",
        "name": "How much compensation for denied boarding on LOT Polish Airlines?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "€250 for flights up to 1,500 km, €400 for EU flights 1,500-3,500 km, and €600 for flights over 3,500 km. You get compensation PLUS a full refund or alternative flight. These are separate rights."
        }
      },
      {
        "@type": "Question",
        "name": "What if LOT offers me money to voluntarily give up my seat?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "If you volunteer, you negotiate compensation directly with LOT—it can be more or less than EU261 amounts. Once you accept, you waive legal compensation rights. Don't volunteer unless the offer is better than your legal entitlement."
        }
      },
      {
        "@type": "Question",
        "name": "Can LOT deny me boarding for security or health reasons?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Yes, airlines can deny boarding for valid operational, safety or security reasons (intoxication, aggressive behavior, missing travel documents). In these cases, you do NOT get compensation—but LOT must prove the reason was legitimate."
        }
      },
      {
        "@type": "Question",
        "name": "What if LOT says my ticket was cancelled or invalid?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Airlines sometimes falsely claim tickets are invalid to avoid compensation. If you have booking confirmation and paid in full, your ticket is valid. Challenge this excuse and demand written proof of why they consider it invalid."
        }
      },
      {
        "@type": "Question",
        "name": "Does LOT have to rebook me immediately after denying boarding?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Yes. LOT must offer you: (1) alternative flight to your destination as soon as possible, or (2) alternative flight at a later date of your choice, or (3) full ticket refund. Choice is yours—AND you still get €250-€600 compensation."
        }
      },
      {
        "@type": "Question",
        "name": "What if the alternative flight LOT offers arrives much later?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "You still get full compensation regardless of alternative flight timing. If you arrive 2+ hours late, LOT must also provide meals, refreshments, hotel (if overnight), and transport. All free of charge."
        }
      },
      {
        "@type": "Question",
        "name": "Can I get compensation if I was denied boarding on a connecting flight?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Yes, if both flights were booked as a single journey. If you were denied boarding on the second leg due to overbooking, you're entitled to compensation based on the total journey distance, not just the denied segment."
        }
      },
      {
        "@type": "Question",
        "name": "What if LOT downgraded my class after denying boarding in business class?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "You get TWO compensations: (1) denied boarding compensation (€250-€600), AND (2) involuntary downgrade refund (30-75% of ticket price). LOT cannot force you to accept a lower class as 'alternative transport' without penalty."
        }
      },
      {
        "@type": "Question",
        "name": "How do I prove LOT denied me boarding?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Essential evidence: (1) boarding pass or gate assignment, (2) LOT's written confirmation of denied boarding, (3) reason given by staff, (4) alternative flight offered (if any), (5) photos/videos of the situation. LOT must issue a written statement—demand it at the gate."
        }
      }
    ]
  };

  const articleSchema = {
    "@context": "https://schema.org",
    "@type": "Article",
    "headline": "LOT Polish Airlines Denied Boarding: Claim €600 Compensation for Overbooking",
    "description": "Complete guide to claiming compensation when LOT Polish Airlines denies you boarding due to overbooking. Learn your EU261 rights, compensation amounts, and how to fight back.",
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
        title="LOT Polish Airlines Denied Boarding Compensation: Get €600 for Overbooking | EU261 2025"
        description="LOT denied you boarding? Claim up to €600 compensation under EU261. Expert guide on overbooking rights, volunteer vs involuntary denial, and how to fight back when they refuse."
        url="https://lotproblem.pl/en/blog/lot-polish-airlines-denied-boarding-compensation"
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
              <span>LOT Denied Boarding Compensation</span>
            </nav>

            {/* Article Header */}
            <header className="mb-12">
              <Badge className="mb-4">Passenger Rights</Badge>
              <h1 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-6">
                LOT Polish Airlines Denied Boarding: Claim €600 Compensation for Overbooking
              </h1>
              <div className="flex items-center gap-4 text-gray-600 dark:text-gray-400 mb-6">
                <span className="flex items-center gap-1">
                  <Calendar className="h-4 w-4" />
                  12 min read
                </span>
                <span>•</span>
                <span>Updated March 5, 2025</span>
              </div>
              <p className="text-xl text-gray-700 dark:text-gray-300 leading-relaxed">
                If LOT Polish Airlines denied you boarding due to overbooking, you're entitled to up to €600 in compensation under EU Regulation 261/2004—even if they rebooked you on another flight. This guide explains your rights when involuntarily denied boarding, how to distinguish it from voluntary bumping, and the exact steps to claim your money.
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
                  <span><strong>Involuntary denial:</strong> You get compensation + refund/rebooking</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle className="h-5 w-5 text-green-600 flex-shrink-0 mt-0.5" />
                  <span><strong>Voluntary bumping:</strong> No legal compensation—negotiate better deal</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle className="h-5 w-5 text-green-600 flex-shrink-0 mt-0.5" />
                  <span><strong>Care rights:</strong> Meals, hotel, transport (if overnight delay)</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle className="h-5 w-5 text-green-600 flex-shrink-0 mt-0.5" />
                  <span><strong>Written proof required:</strong> Demand confirmation from LOT at gate</span>
                </li>
              </ul>
            </Card>

            {/* First CTA */}
            <div className="bg-gradient-to-r from-blue-600 to-indigo-600 rounded-lg p-8 text-center text-white mb-12">
              <h3 className="text-2xl font-bold mb-4">
                Were You Denied Boarding by LOT? Check Your Rights
              </h3>
              <p className="text-lg mb-6 text-blue-100">
                Find out if you're eligible for up to €600 compensation in 2 minutes. Free check, no obligations.
              </p>
              <Button
                asChild
                size="lg"
                className="bg-white text-blue-600 hover:bg-gray-100"
              >
                <a
                  href="https://claimwinger.com?utm_source=blog&utm_medium=lot_denied_boarding&utm_campaign=first_cta"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Check Compensation Now →
                </a>
              </Button>
            </div>

            {/* Main Content */}
            <div className="prose prose-lg dark:prose-invert max-w-none">
              <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-6 flex items-center gap-3">
                <Users className="h-8 w-8 text-blue-600" />
                What Is Denied Boarding and When Does It Happen?
              </h2>

              <p className="mb-6">
                <strong>Denied boarding</strong> occurs when an airline refuses to let you board the aircraft despite you having a valid ticket, arriving on time for check-in, and meeting all travel requirements. It's fundamentally different from missing a flight due to late arrival or document issues.
              </p>

              <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">
                The #1 Reason: Overbooking
              </h3>

              <p className="mb-6">
                Airlines deliberately sell more tickets than available seats because they expect some passengers won't show up (no-shows). When everyone actually shows up, the airline must "bump" passengers—deny them boarding involuntarily.
              </p>

              <p className="mb-6">
                <strong>Why airlines overbook:</strong> It's a calculated profit strategy. Empty seats lose money. By overbooking 5-10%, airlines maximize revenue. When it backfires, <em>you</em> pay the price—unless you know your rights.
              </p>

              <Card className="p-6 bg-yellow-50 dark:bg-yellow-900/20 border-yellow-200 dark:border-yellow-800 mb-6">
                <p className="text-gray-900 dark:text-white font-semibold mb-2">
                  📌 Real Example:
                </p>
                <p className="text-gray-700 dark:text-gray-300">
                  LOT flight LO4 from Warsaw to New York has 200 seats. They sold 215 tickets expecting 15 no-shows. Only 3 passengers didn't show up. At the gate, LOT must deny boarding to 12 passengers. <strong>Result: Those 12 passengers are entitled to €600 each</strong>—a total of €7,200 in compensation for LOT's overbooking strategy.
                </p>
              </Card>

              <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">
                Other Reasons for Denied Boarding
              </h3>

              <ul className="mb-6 space-y-2">
                <li><strong>Operational reasons:</strong> Aircraft swap to a smaller plane, weight restrictions, technical issues affecting seat capacity</li>
                <li><strong>Valid reasons (no compensation):</strong> Missing travel documents, health/safety concerns, intoxication, disruptive behavior</li>
                <li><strong>Invalid excuses airlines use:</strong> "Computer error," "gate closure," "random selection"—these are NOT valid reasons to deny compensation</li>
              </ul>

              <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-6 flex items-center gap-3 mt-12">
                <Scale className="h-8 w-8 text-blue-600" />
                Involuntary vs Voluntary Denied Boarding: Critical Difference
              </h2>

              <p className="mb-6">
                Understanding this distinction is crucial because it determines whether you get legal compensation or just a negotiated deal.
              </p>

              <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">
                Voluntary Denied Boarding (Volunteering)
              </h3>

              <p className="mb-6">
                Before forcibly denying passengers boarding, airlines must ask for volunteers willing to take a later flight in exchange for compensation. This is <strong>voluntary bumping</strong>.
              </p>

              <div className="bg-blue-50 dark:bg-blue-900/20 border-l-4 border-blue-600 p-6 mb-6">
                <p className="font-semibold text-gray-900 dark:text-white mb-2">✋ If You Volunteer:</p>
                <ul className="space-y-2 text-gray-700 dark:text-gray-300">
                  <li>• You negotiate compensation directly with LOT (cash, vouchers, upgrades)</li>
                  <li>• The amount can be more OR less than EU261 legal compensation</li>
                  <li>• Once you accept, you waive your right to legal compensation</li>
                  <li>• LOT determines alternative flight timing</li>
                </ul>
              </div>

              <p className="mb-6">
                <strong>Strategy:</strong> Don't volunteer unless LOT offers MORE than your legal entitlement (€250-€600). Check the <Link href="/en/compensation-calculator" className="text-blue-600 hover:underline">compensation calculator</Link> first to know your worth.
              </p>

              <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">
                Involuntary Denied Boarding
              </h3>

              <p className="mb-6">
                If not enough passengers volunteer, LOT must <strong>involuntarily deny boarding</strong> to some passengers. This triggers your legal rights under EU261.
              </p>

              <div className="bg-green-50 dark:bg-green-900/20 border-l-4 border-green-600 p-6 mb-6">
                <p className="font-semibold text-gray-900 dark:text-white mb-2">✅ If You're Involuntarily Denied:</p>
                <ul className="space-y-2 text-gray-700 dark:text-gray-300">
                  <li>• Fixed compensation: €250-€600 based on distance</li>
                  <li>• PLUS choice of: full refund OR alternative flight (your choice)</li>
                  <li>• PLUS care: meals, refreshments, hotel if overnight</li>
                  <li>• LOT must offer earliest available alternative flight</li>
                  <li>• You don't negotiate—these are legal rights</li>
                </ul>
              </div>

              <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-6 flex items-center gap-3 mt-12">
                <Euro className="h-8 w-8 text-blue-600" />
                How Much Compensation for Denied Boarding?
              </h2>

              <p className="mb-6">
                Compensation is fixed by law and based on flight distance—NOT the ticket price or how much LOT offers volunteers.
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
                Compensation + Alternative Flight: You Get Both
              </h3>

              <p className="mb-6">
                Many passengers don't realize: <strong>compensation and rebooking are separate rights.</strong> When LOT denies you boarding involuntarily, you're entitled to:
              </p>

              <ul className="mb-6 space-y-2">
                <li><strong>Compensation:</strong> €250-€600 cash for the inconvenience (legally required)</li>
                <li><strong>PLUS Alternative Transport:</strong> LOT must offer you either:
                  <ul className="ml-6 mt-2 space-y-1">
                    <li>• Rebooking on the earliest available flight (LOT or another airline)</li>
                    <li>• Rebooking on a later date of your choice</li>
                    <li>• Full refund of the unused ticket</li>
                  </ul>
                </li>
              </ul>

              <p className="mb-6">
                <strong>Important:</strong> LOT cannot deduct the rebooking cost from your compensation. You get BOTH.
              </p>

              <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-6 flex items-center gap-3 mt-12">
                <AlertCircle className="h-8 w-8 text-blue-600" />
                What to Do If LOT Denies You Boarding
              </h2>

              <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">
                Step 1: Confirm It's Involuntary Denial
              </h3>

              <p className="mb-6">
                Don't accept verbal explanations. Ask LOT staff at the gate:
              </p>

              <ul className="mb-6 space-y-2">
                <li>• "Am I being involuntarily denied boarding?"</li>
                <li>• "What is the specific reason?" (overbooking, operational, etc.)</li>
                <li>• "Will I receive written confirmation of denied boarding?"</li>
              </ul>

              <p className="mb-6">
                <strong>Critical:</strong> LOT must provide written confirmation stating you were denied boarding involuntarily. This is your proof for the claim. Refuse to leave the gate without it.
              </p>

              <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">
                Step 2: Understand Your Rights on the Spot
              </h3>

              <p className="mb-6">
                LOT is legally required to inform you of your EU261 rights immediately. They must provide:
              </p>

              <ul className="mb-6 space-y-2">
                <li>• Written notice of compensation rights (standard EU261 form)</li>
                <li>• Alternative flight options (show you available alternatives)</li>
                <li>• Contact details for filing a compensation claim</li>
              </ul>

              <p className="mb-6">
                If LOT staff refuses or claims "it's not their job," demand to speak with a supervisor. This is a legal requirement, not a courtesy.
              </p>

              <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">
                Step 3: Choose Your Alternative Transport
              </h3>

              <p className="mb-6">
                You have three options—LOT must honor your choice:
              </p>

              <div className="space-y-4 mb-8">
                <Card className="p-4 bg-gray-50 dark:bg-gray-800">
                  <p className="font-semibold text-gray-900 dark:text-white mb-2">
                    Option 1: Earliest Available Flight
                  </p>
                  <p className="text-gray-700 dark:text-gray-300 text-sm">
                    LOT rebooks you on the next available flight to your destination—either on LOT or another airline. If no flight is available that day, LOT must provide overnight accommodation.
                  </p>
                </Card>

                <Card className="p-4 bg-gray-50 dark:bg-gray-800">
                  <p className="font-semibold text-gray-900 dark:text-white mb-2">
                    Option 2: Later Flight of Your Choice
                  </p>
                  <p className="text-gray-700 dark:text-gray-300 text-sm">
                    If immediate rebooking doesn't suit you, LOT must rebook you on a later date that you choose (subject to availability). Useful if you need to rearrange plans.
                  </p>
                </Card>

                <Card className="p-4 bg-gray-50 dark:bg-gray-800">
                  <p className="font-semibold text-gray-900 dark:text-white mb-2">
                    Option 3: Full Refund
                  </p>
                  <p className="text-gray-700 dark:text-gray-300 text-sm">
                    If you no longer want to travel, LOT must refund your ticket in full within 7 days. If it's a return journey and you've already flown one leg, you also get a free return flight to your point of origin.
                  </p>
                </Card>
              </div>

              <p className="mb-6">
                <strong>Pro tip:</strong> If LOT offers to rebook you on a much later flight (5+ hours delay), consider taking Option 3 (refund) and booking with another airline yourself—you'll still get €250-€600 compensation.
              </p>

              <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">
                Step 4: Demand Care and Assistance
              </h3>

              <p className="mb-6">
                While waiting for your alternative flight, LOT must provide:
              </p>

              <ul className="mb-6 space-y-2">
                <li><strong>Meals and refreshments:</strong> Proportional to waiting time</li>
                <li><strong>Two phone calls/emails/faxes:</strong> Free communication</li>
                <li><strong>Hotel accommodation:</strong> If the alternative flight is next day</li>
                <li><strong>Transport to/from hotel:</strong> Free shuttle or taxi</li>
              </ul>

              <p className="mb-6">
                If LOT doesn't provide these, keep receipts and claim reimbursement later. Buy reasonable meals/hotel yourself (not luxury) and LOT must pay you back.
              </p>

              <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">
                Step 5: Document Everything
              </h3>

              <p className="mb-6">
                Gather evidence immediately:
              </p>

              <ul className="mb-6 space-y-2">
                <li>✓ Boarding pass (or gate assignment if no boarding pass issued)</li>
                <li>✓ Written confirmation of denied boarding from LOT</li>
                <li>✓ EU261 rights notice (if provided)</li>
                <li>✓ Alternative flight details (new booking confirmation)</li>
                <li>✓ Photos/videos of the situation (departure board, gate, etc.)</li>
                <li>✓ Names of LOT staff you dealt with</li>
                <li>✓ Witness contact info (other passengers denied boarding)</li>
              </ul>

              <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-6 flex items-center gap-3 mt-12">
                <FileText className="h-8 w-8 text-blue-600" />
                How to Claim Compensation After Denied Boarding
              </h2>

              <div className="space-y-6 mb-8">
                <Card className="p-6">
                  <h4 className="text-xl font-bold text-gray-900 dark:text-white mb-3">
                    Step 1: File Your Claim with LOT
                  </h4>
                  <p className="text-gray-700 dark:text-gray-300 mb-3">
                    Submit your claim via:
                  </p>
                  <ul className="space-y-2 text-gray-700 dark:text-gray-300 mb-3">
                    <li>• LOT's official claim form on their website</li>
                    <li>• Email: customerrelations@lot.pl</li>
                    <li>• Registered mail (recommended for legal proof)</li>
                  </ul>
                  <p className="text-gray-700 dark:text-gray-300">
                    Include: booking reference, denied boarding confirmation, alternative flight details, IBAN for payment, and clear statement of your claim amount (€250/€400/€600).
                  </p>
                </Card>

                <Card className="p-6">
                  <h4 className="text-xl font-bold text-gray-900 dark:text-white mb-3">
                    Step 2: Wait for LOT's Response
                  </h4>
                  <p className="text-gray-700 dark:text-gray-300">
                    LOT typically responds within 2-8 weeks. If they reject or ignore your claim, don't give up—denied boarding claims have very high success rates in court.
                  </p>
                </Card>

                <Card className="p-6">
                  <h4 className="text-xl font-bold text-gray-900 dark:text-white mb-3">
                    Step 3: Escalate If Rejected
                  </h4>
                  <p className="text-gray-700 dark:text-gray-300 mb-3">
                    If LOT rejects your valid claim:
                  </p>
                  <ul className="space-y-2 text-gray-700 dark:text-gray-300">
                    <li>• Contact your national enforcement body (UOKiK in Poland, CAA in UK)</li>
                    <li>• Use a specialized claim service like <a href="https://claimwinger.com?utm_source=blog&utm_medium=lot_denied_boarding&utm_campaign=escalation_link" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline">ClaimWinger</a></li>
                    <li>• Consider small claims court (often free or low-cost)</li>
                  </ul>
                </Card>
              </div>

              <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-6 flex items-center gap-3 mt-12">
                <XCircle className="h-8 w-8 text-blue-600" />
                When You're NOT Entitled to Compensation
              </h2>

              <p className="mb-6">
                EU261 doesn't cover every denied boarding situation. You won't get compensation if:
              </p>

              <ul className="mb-6 space-y-3">
                <li><strong>You volunteered:</strong> If you accepted LOT's offer to voluntarily give up your seat, you waived legal compensation rights</li>
                <li><strong>You arrived late for check-in:</strong> Arriving after check-in deadline forfeits your boarding rights</li>
                <li><strong>Missing travel documents:</strong> Invalid passport, missing visa, etc.—this is your responsibility</li>
                <li><strong>Health/safety reasons:</strong> Intoxication, disruptive behavior, medical unfitness to fly (airline must prove)</li>
                <li><strong>Security concerns:</strong> If you're on a no-fly list or pose security risk (extremely rare)</li>
              </ul>

              <p className="mb-6">
                <strong>Important:</strong> Airlines sometimes falsely claim these exceptions to avoid paying. If LOT denies you for "safety reasons," demand detailed written explanation. You have the right to challenge this in court.
              </p>

              <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-6 flex items-center gap-3 mt-12">
                <AlertCircle className="h-8 w-8 text-blue-600" />
                Common LOT Excuses and How to Challenge Them
              </h2>

              <div className="space-y-4 mb-8">
                <Card className="p-4 bg-gray-50 dark:bg-gray-800">
                  <p className="font-semibold text-gray-900 dark:text-white mb-2">
                    "You accepted the alternative flight, so claim is settled"
                  </p>
                  <p className="text-gray-700 dark:text-gray-300 text-sm">
                    <strong>False:</strong> Accepting rebooking is your legal right—it doesn't waive compensation. You get BOTH alternative transport AND monetary compensation (if eligible).
                  </p>
                </Card>

                <Card className="p-4 bg-gray-50 dark:bg-gray-800">
                  <p className="font-semibold text-gray-900 dark:text-white mb-2">
                    "You checked in online but didn't confirm at the gate"
                  </p>
                  <p className="text-gray-700 dark:text-gray-300 text-sm">
                    <strong>Check your facts:</strong> If you arrived at the gate before boarding closed and had a valid boarding pass, you met all requirements. LOT must prove you were late.
                  </p>
                </Card>

                <Card className="p-4 bg-gray-50 dark:bg-gray-800">
                  <p className="font-semibold text-gray-900 dark:text-white mb-2">
                    "Your ticket was non-refundable, so no compensation"
                  </p>
                  <p className="text-gray-700 dark:text-gray-300 text-sm">
                    <strong>Completely false:</strong> EU261 compensation rights apply regardless of ticket type, fare class, or refundability. Budget tickets have the same rights as business class.
                  </p>
                </Card>

                <Card className="p-4 bg-gray-50 dark:bg-gray-800">
                  <p className="font-semibold text-gray-900 dark:text-white mb-2">
                    "We offered you a volunteer deal, you refused, so no compensation"
                  </p>
                  <p className="text-gray-700 dark:text-gray-300 text-sm">
                    <strong>Exactly why you get compensation:</strong> Refusing to volunteer means you were involuntarily denied. That's the definition of EU261 eligibility.
                  </p>
                </Card>
              </div>
            </div>

            {/* Second CTA - Before FAQ */}
            <div className="bg-gradient-to-r from-blue-600 to-indigo-600 rounded-lg p-8 text-center text-white my-12">
              <h3 className="text-2xl font-bold mb-4">
                LOT Denied You Boarding? Fight Back with Expert Help
              </h3>
              <p className="text-lg mb-6 text-blue-100">
                We maximize your compensation success rate. No upfront fees—we only get paid if you win.
              </p>
              <Button
                asChild
                size="lg"
                className="bg-white text-blue-600 hover:bg-gray-100"
              >
                <a
                  href="https://claimwinger.com?utm_source=blog&utm_medium=lot_denied_boarding&utm_campaign=second_cta"
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
                    What is denied boarding and when does it happen?
                  </h3>
                  <p className="text-gray-700 dark:text-gray-300">
                    Denied boarding occurs when an airline refuses to let you board despite having a valid ticket and arriving on time. Most common cause: overbooking (selling more tickets than available seats). Airlines deliberately overbook expecting some passengers won't show up.
                  </p>
                </Card>

                <Card className="p-6">
                  <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-3">
                    How much compensation for denied boarding on LOT Polish Airlines?
                  </h3>
                  <p className="text-gray-700 dark:text-gray-300">
                    €250 for flights up to 1,500 km, €400 for EU flights 1,500-3,500 km, and €600 for flights over 3,500 km. You get compensation PLUS a full refund or alternative flight. These are separate rights.
                  </p>
                </Card>

                <Card className="p-6">
                  <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-3">
                    What if LOT offers me money to voluntarily give up my seat?
                  </h3>
                  <p className="text-gray-700 dark:text-gray-300">
                    If you volunteer, you negotiate compensation directly with LOT—it can be more or less than EU261 amounts. Once you accept, you waive legal compensation rights. Don't volunteer unless the offer is better than your legal entitlement.
                  </p>
                </Card>

                <Card className="p-6">
                  <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-3">
                    Can LOT deny me boarding for security or health reasons?
                  </h3>
                  <p className="text-gray-700 dark:text-gray-300">
                    Yes, airlines can deny boarding for valid operational, safety or security reasons (intoxication, aggressive behavior, missing travel documents). In these cases, you do NOT get compensation—but LOT must prove the reason was legitimate.
                  </p>
                </Card>

                <Card className="p-6">
                  <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-3">
                    What if LOT says my ticket was cancelled or invalid?
                  </h3>
                  <p className="text-gray-700 dark:text-gray-300">
                    Airlines sometimes falsely claim tickets are invalid to avoid compensation. If you have booking confirmation and paid in full, your ticket is valid. Challenge this excuse and demand written proof of why they consider it invalid.
                  </p>
                </Card>

                <Card className="p-6">
                  <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-3">
                    Does LOT have to rebook me immediately after denying boarding?
                  </h3>
                  <p className="text-gray-700 dark:text-gray-300">
                    Yes. LOT must offer you: (1) alternative flight to your destination as soon as possible, or (2) alternative flight at a later date of your choice, or (3) full ticket refund. Choice is yours—AND you still get €250-€600 compensation.
                  </p>
                </Card>

                <Card className="p-6">
                  <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-3">
                    What if the alternative flight LOT offers arrives much later?
                  </h3>
                  <p className="text-gray-700 dark:text-gray-300">
                    You still get full compensation regardless of alternative flight timing. If you arrive 2+ hours late, LOT must also provide meals, refreshments, hotel (if overnight), and transport. All free of charge.
                  </p>
                </Card>

                <Card className="p-6">
                  <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-3">
                    Can I get compensation if I was denied boarding on a connecting flight?
                  </h3>
                  <p className="text-gray-700 dark:text-gray-300">
                    Yes, if both flights were booked as a single journey. If you were denied boarding on the second leg due to overbooking, you're entitled to compensation based on the total journey distance, not just the denied segment.
                  </p>
                </Card>

                <Card className="p-6">
                  <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-3">
                    What if LOT downgraded my class after denying boarding in business class?
                  </h3>
                  <p className="text-gray-700 dark:text-gray-300">
                    You get TWO compensations: (1) denied boarding compensation (€250-€600), AND (2) involuntary downgrade refund (30-75% of ticket price). LOT cannot force you to accept a lower class as 'alternative transport' without penalty.
                  </p>
                </Card>

                <Card className="p-6">
                  <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-3">
                    How do I prove LOT denied me boarding?
                  </h3>
                  <p className="text-gray-700 dark:text-gray-300">
                    Essential evidence: (1) boarding pass or gate assignment, (2) LOT's written confirmation of denied boarding, (3) reason given by staff, (4) alternative flight offered (if any), (5) photos/videos of the situation. LOT must issue a written statement—demand it at the gate.
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
                    <Link href="/en/blog/lot-polish-airlines-cancelled-flight-compensation" className="hover:text-blue-600">
                      LOT Cancelled Flight Compensation
                    </Link>
                  </h3>
                  <p className="text-gray-600 dark:text-gray-400 text-sm">
                    Complete guide to claiming when LOT cancels your flight with less than 14 days notice.
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