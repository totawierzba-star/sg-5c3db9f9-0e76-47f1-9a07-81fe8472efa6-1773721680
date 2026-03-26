import { LayoutEn } from "@/components/LayoutEn";
import { SEO } from "@/components/SEO";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import Link from "next/link";
import {
  Euro,
  Plane,
  AlertCircle,
  CheckCircle,
  Calculator,
  Scale,
  FileText,
  Clock,
} from "lucide-react";

export default function LOTCompensationAmounts() {
  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": [
      {
        "@type": "Question",
        "name": "How much compensation can I get from LOT Polish Airlines?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "€250 for flights up to 1,500 km, €400 for EU internal flights 1,500-3,500 km, and €600 for flights over 3,500 km or non-EU flights over 1,500 km. Amount depends on flight distance, not ticket price."
        }
      },
      {
        "@type": "Question",
        "name": "Does ticket price affect LOT compensation amount?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "No. EU261 compensation is fixed by flight distance only. A €50 budget ticket and a €1,000 business class ticket on the same route get identical compensation—it's based on your rights, not the fare you paid."
        }
      },
      {
        "@type": "Question",
        "name": "Can I get more than €600 from LOT Polish Airlines?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "€600 is the maximum EU261 cash compensation, but you can claim additional expenses: hotel costs, meals, alternative transport, lost vacation days (in some jurisdictions), and missed business opportunities. Total claim can exceed €600."
        }
      },
      {
        "@type": "Question",
        "name": "What if LOT offers me a voucher instead of cash?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "You have the right to refuse vouchers and demand cash compensation. LOT cannot force you to accept travel vouchers—it's your legal choice. Vouchers often have restrictions and expiration dates."
        }
      },
      {
        "@type": "Question",
        "name": "Does LOT reduce compensation if I arrive late but less than 3 hours?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Yes, there's a 50% reduction rule: if your alternative flight arrives less than 2, 3, or 4 hours late (depending on distance), LOT can reduce compensation by half. But if you arrive 3+ hours late, you always get full compensation."
        }
      },
      {
        "@type": "Question",
        "name": "How is flight distance calculated for LOT compensation?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Distance is measured as a straight line (great circle distance) from departure airport to final destination airport. For connecting flights, it's the total distance of the entire journey, not individual segments."
        }
      },
      {
        "@type": "Question",
        "name": "What if my LOT connecting flight causes me to arrive 3+ hours late?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "You calculate compensation based on the TOTAL journey distance (origin to final destination), not the delayed segment. If the first leg was delayed causing you to miss connection, you're entitled to compensation for the entire journey distance."
        }
      },
      {
        "@type": "Question",
        "name": "Can I get compensation for each passenger separately?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Yes. Every passenger with a valid ticket is entitled to individual compensation. A family of 4 on a €600-eligible flight gets €2,400 total (4 × €600). Children and infants count as separate passengers."
        }
      },
      {
        "@type": "Question",
        "name": "Does LOT pay more compensation for business or first class?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "No. EU261 compensation amounts are the same for all fare classes. However, if you're involuntarily downgraded from business to economy, you get an ADDITIONAL refund: 30-75% of your ticket price, on top of any delay/cancellation compensation."
        }
      },
      {
        "@type": "Question",
        "name": "What if LOT says the compensation amount is wrong?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Airlines sometimes miscalculate to pay less. Verify the flight distance yourself using aviation distance calculators. LOT cannot arbitrarily reduce the amount—EU261 rates are legally fixed. Challenge incorrect calculations with evidence."
        }
      }
    ]
  };

  const articleSchema = {
    "@context": "https://schema.org",
    "@type": "Article",
    "headline": "How Much Compensation Can You Claim from LOT Polish Airlines? €250, €400, or €600 Explained",
    "description": "Complete breakdown of LOT Polish Airlines compensation amounts under EU261. Learn exactly how much you can claim for delays, cancellations, and denied boarding—€250, €400, or €600.",
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
        title="LOT Polish Airlines Compensation: How Much Can You Claim? €250, €400, €600 | EU261 Guide 2025"
        description="Complete breakdown of LOT compensation amounts: €250 for short flights, €400 for medium, €600 for long-haul. Learn exactly how much you can claim under EU261 for delays and cancellations."
        url="https://problemlot.com/en/blog/lot-polish-airlines-compensation-amounts"
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
              <span>LOT Compensation Amounts</span>
            </nav>

            {/* Article Header */}
            <header className="mb-12">
              <Badge className="mb-4">Compensation Guide</Badge>
              <h1 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-6">
                How Much Compensation Can You Claim from LOT Polish Airlines? €250, €400, or €600 Explained
              </h1>
              <div className="flex items-center gap-4 text-gray-600 dark:text-gray-400 mb-6">
                <span className="flex items-center gap-1">
                  <Clock className="h-4 w-4" />
                  14 min read
                </span>
                <span>•</span>
                <span>Updated March 5, 2025</span>
              </div>
              <p className="text-xl text-gray-700 dark:text-gray-300 leading-relaxed">
                When LOT Polish Airlines delays or cancels your flight, the compensation amount is fixed by law under EU Regulation 261/2004—not by LOT's discretion or your ticket price. This comprehensive guide breaks down exactly how much you can claim: €250, €400, or €600, depending on your flight distance. Learn how compensation is calculated, what affects the amount, and how to maximize your claim.
              </p>
            </header>

            {/* Quick Summary */}
            <Card className="p-6 bg-blue-50 dark:bg-blue-900/20 border-blue-200 dark:border-blue-800 mb-12">
              <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4 flex items-center gap-2">
                <AlertCircle className="h-6 w-6 text-blue-600" />
                Quick Compensation Calculator
              </h2>
              <div className="grid md:grid-cols-3 gap-4">
                <div className="text-center">
                  <div className="text-4xl font-bold text-blue-600 mb-2">€250</div>
                  <p className="text-sm text-gray-700 dark:text-gray-300">Flights up to 1,500 km</p>
                  <p className="text-xs text-gray-500 mt-1">Warsaw → Berlin</p>
                </div>
                <div className="text-center">
                  <div className="text-4xl font-bold text-blue-600 mb-2">€400</div>
                  <p className="text-sm text-gray-700 dark:text-gray-300">EU flights 1,500-3,500 km</p>
                  <p className="text-xs text-gray-500 mt-1">Warsaw → London</p>
                </div>
                <div className="text-center">
                  <div className="text-4xl font-bold text-blue-600 mb-2">€600</div>
                  <p className="text-sm text-gray-700 dark:text-gray-300">Flights over 3,500 km</p>
                  <p className="text-xs text-gray-500 mt-1">Warsaw → New York</p>
                </div>
              </div>
            </Card>

            {/* First CTA */}
            <div className="bg-gradient-to-r from-blue-600 to-indigo-600 rounded-lg p-8 text-center text-white mb-12">
              <h3 className="text-2xl font-bold mb-4">
                Calculate Your Exact LOT Compensation Amount
              </h3>
              <p className="text-lg mb-6 text-blue-100">
                Enter your flight details and get an instant calculation in 2 minutes. Free check, no obligations.
              </p>
              <Button
                asChild
                size="lg"
                className="bg-white text-blue-600 hover:bg-gray-100"
              >
                <a
                  href="https://claimwinger.com?utm_source=blog&utm_medium=lot_compensation_amounts&utm_campaign=first_cta"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Check Your Compensation →
                </a>
              </Button>
            </div>

            {/* Main Content */}
            <div className="prose prose-lg dark:prose-invert max-w-none">
              <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-6 flex items-center gap-3">
                <Euro className="h-8 w-8 text-blue-600" />
                EU261 Compensation: The Three Fixed Amounts
              </h2>

              <p className="mb-6">
                Under EU Regulation 261/2004, compensation for flight delays, cancellations, and denied boarding is <strong>fixed by law</strong> and based on flight distance—not on how much you paid for your ticket or how LOT feels about compensating you.
              </p>

              <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">
                The Three Compensation Tiers
              </h3>

              <Card className="p-6 mb-6 bg-gray-50 dark:bg-gray-800">
                <h4 className="text-xl font-bold text-gray-900 dark:text-white mb-3">
                  €250 — Short-Distance Flights (up to 1,500 km)
                </h4>
                <ul className="space-y-2 text-gray-700 dark:text-gray-300">
                  <li>• All flights within the EU up to 1,500 km</li>
                  <li>• Examples: Warsaw → Berlin (520 km), Warsaw → Vienna (553 km), Warsaw → Amsterdam (1,095 km)</li>
                  <li>• <strong>When you qualify:</strong> 3+ hours delay at arrival, cancellation less than 14 days notice, or denied boarding</li>
                </ul>
              </Card>

              <Card className="p-6 mb-6 bg-gray-50 dark:bg-gray-800">
                <h4 className="text-xl font-bold text-gray-900 dark:text-white mb-3">
                  €400 — Medium-Distance Flights (1,500-3,500 km within EU)
                </h4>
                <ul className="space-y-2 text-gray-700 dark:text-gray-300">
                  <li>• EU internal flights between 1,500-3,500 km</li>
                  <li>• Examples: Warsaw → London (1,445 km), Warsaw → Paris (1,362 km), Warsaw → Madrid (2,300 km)</li>
                  <li>• <strong>Important:</strong> Non-EU flights over 1,500 km also get €400 (see next tier for exceptions)</li>
                </ul>
              </Card>

              <Card className="p-6 mb-6 bg-gray-50 dark:bg-gray-800">
                <h4 className="text-xl font-bold text-gray-900 dark:text-white mb-3">
                  €600 — Long-Distance Flights (over 3,500 km)
                </h4>
                <ul className="space-y-2 text-gray-700 dark:text-gray-300">
                  <li>• All flights over 3,500 km (EU and non-EU)</li>
                  <li>• Examples: Warsaw → New York (6,860 km), Warsaw → Chicago (7,060 km), Warsaw → Tokyo (8,385 km)</li>
                  <li>• <strong>Maximum compensation:</strong> This is the highest amount under EU261</li>
                </ul>
              </Card>

              <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">
                How Distance Is Calculated
              </h3>

              <p className="mb-6">
                Flight distance is measured using the <strong>great circle distance</strong> (direct straight line) between the departure and arrival airports, not the actual flight path the aircraft takes.
              </p>

              <p className="mb-6">
                <strong>For connecting flights:</strong> The distance is calculated from your <em>original departure airport</em> to your <em>final destination airport</em>, not the distance of individual segments. This is crucial for compensation calculations.
              </p>

              <div className="bg-blue-50 dark:bg-blue-900/20 border-l-4 border-blue-600 p-6 mb-6">
                <p className="font-semibold text-gray-900 dark:text-white mb-2">📌 Real Example:</p>
                <p className="text-gray-700 dark:text-gray-300">
                  <strong>Scenario:</strong> You book Warsaw → Amsterdam → New York on LOT (total distance: 6,565 km).<br/>
                  The Warsaw → Amsterdam leg is delayed, causing you to miss the Amsterdam → New York connection. You arrive in New York 4 hours late.
                </p>
                <p className="text-gray-700 dark:text-gray-300 mt-3">
                  <strong>Compensation:</strong> €600 (based on total journey distance of 6,565 km, not the 1,095 km Warsaw-Amsterdam segment that was delayed).
                </p>
              </div>

              <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-6 flex items-center gap-3 mt-12">
                <Calculator className="h-8 w-8 text-blue-600" />
                What Affects Your Compensation Amount?
              </h2>

              <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">
                Factor #1: Flight Distance (Primary)
              </h3>

              <p className="mb-6">
                Distance is the ONLY factor that determines your base compensation amount under EU261. Everything else (ticket price, fare class, airline, reason for disruption) is irrelevant to the calculation.
              </p>

              <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">
                Factor #2: Arrival Delay (50% Reduction Rule)
              </h3>

              <p className="mb-6">
                There's one exception where LOT can pay 50% less: if they rebook you on an alternative flight that arrives at your destination <strong>less than a certain threshold late</strong>.
              </p>

              <Card className="p-6 mb-6 bg-yellow-50 dark:bg-yellow-900/20 border-yellow-200 dark:border-yellow-800">
                <h4 className="text-xl font-bold text-gray-900 dark:text-white mb-3">
                  50% Reduction Thresholds
                </h4>
                <ul className="space-y-2 text-gray-700 dark:text-gray-300">
                  <li>• <strong>Flights ≤1,500 km:</strong> If alternative flight arrives less than 2 hours late → €125 (half of €250)</li>
                  <li>• <strong>Flights 1,500-3,500 km:</strong> If arrives less than 3 hours late → €200 (half of €400)</li>
                  <li>• <strong>Flights &gt;3,500 km:</strong> If arrives less than 4 hours late → €300 (half of €600)</li>
                </ul>
                <p className="text-gray-700 dark:text-gray-300 mt-4">
                  <strong>Important:</strong> If you arrive 3+ hours late (or 4+ for long-haul), you ALWAYS get full compensation—no reductions.
                </p>
              </Card>

              <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">
                Factor #3: Type of Disruption (Same Amounts)
              </h3>

              <p className="mb-6">
                The compensation amount is the same regardless of whether your flight was:
              </p>

              <ul className="mb-6 space-y-2">
                <li>• <strong>Delayed:</strong> 3+ hours arrival delay → €250/€400/€600</li>
                <li>• <strong>Cancelled:</strong> Less than 14 days notice → €250/€400/€600</li>
                <li>• <strong>Denied boarding:</strong> Involuntarily bumped → €250/€400/€600</li>
              </ul>

              <p className="mb-6">
                The distance-based amounts apply equally to all three disruption types.
              </p>

              <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-6 flex items-center gap-3 mt-12">
                <Scale className="h-8 w-8 text-blue-600" />
                What Does NOT Affect Compensation Amount
              </h2>

              <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">
                Ticket Price: Completely Irrelevant
              </h3>

              <p className="mb-6">
                This is the most common misconception. Many passengers assume expensive tickets get more compensation—<strong>this is false.</strong>
              </p>

              <div className="bg-green-50 dark:bg-green-900/20 border-l-4 border-green-600 p-6 mb-6">
                <p className="font-semibold text-gray-900 dark:text-white mb-2">✅ Example:</p>
                <p className="text-gray-700 dark:text-gray-300">
                  <strong>Passenger A:</strong> Bought a €50 Ryanair ticket from Warsaw to London (1,445 km). Flight delayed 4 hours. <strong>Compensation: €400</strong>
                </p>
                <p className="text-gray-700 dark:text-gray-300 mt-3">
                  <strong>Passenger B:</strong> Bought a €800 LOT business class ticket for the same route. Same delay. <strong>Compensation: €400</strong>
                </p>
                <p className="text-gray-700 dark:text-gray-300 mt-3 font-semibold">
                  Both passengers get identical €400 compensation—ticket price doesn't matter.
                </p>
              </div>

              <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">
                Fare Class: Economy, Business, First Class—Same Compensation
              </h3>

              <p className="mb-6">
                EU261 compensation is not tied to your booking class. A first-class passenger and an economy passenger on the same disrupted flight get the same amount based on distance.
              </p>

              <p className="mb-6">
                <strong>Exception:</strong> If you're involuntarily <em>downgraded</em> (e.g., business to economy), you get an ADDITIONAL refund of 30-75% of your ticket price, on top of any delay/cancellation compensation.
              </p>

              <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">
                Reason for Disruption: Compensation Amount Stays the Same
              </h3>

              <p className="mb-6">
                Whether LOT's delay was caused by technical issues, crew shortage, or weather, the compensation amount doesn't change—only your <em>eligibility</em> changes.
              </p>

              <ul className="mb-6 space-y-2">
                <li>• <strong>Ordinary circumstances</strong> (technical faults, crew issues, operational delays): You get full €250/€400/€600</li>
                <li>• <strong>Extraordinary circumstances</strong> (severe weather, air traffic control strikes, security threats): No compensation, but LOT must still provide care</li>
              </ul>

              <p className="mb-6">
                If you're eligible for compensation, the amount is always based on distance—regardless of what caused the disruption.
              </p>

              <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-6 flex items-center gap-3 mt-12">
                <Plane className="h-8 w-8 text-blue-600" />
                Special Cases: When You Can Get More Than €600
              </h2>

              <p className="mb-6">
                While €600 is the maximum EU261 <em>statutory compensation</em>, you can claim additional costs and damages beyond this amount in certain situations.
              </p>

              <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">
                Additional Expenses You Can Claim
              </h3>

              <div className="space-y-4 mb-8">
                <Card className="p-4 bg-gray-50 dark:bg-gray-800">
                  <p className="font-semibold text-gray-900 dark:text-white mb-2">
                    1. Care Costs (Meals, Hotel, Transport)
                  </p>
                  <p className="text-gray-700 dark:text-gray-300 text-sm">
                    If LOT doesn't provide free meals, accommodation, or transport during a long delay, you can buy these yourself (within reason) and claim reimbursement on top of your €250-€600 compensation.
                  </p>
                </Card>

                <Card className="p-4 bg-gray-50 dark:bg-gray-800">
                  <p className="font-semibold text-gray-900 dark:text-white mb-2">
                    2. Alternative Flight Costs
                  </p>
                  <p className="text-gray-700 dark:text-gray-300 text-sm">
                    If LOT cancels your flight and you book a replacement with another airline yourself (instead of waiting for LOT's rebooking), you can claim the difference in cost plus the €250-€600 compensation.
                  </p>
                </Card>

                <Card className="p-4 bg-gray-50 dark:bg-gray-800">
                  <p className="font-semibold text-gray-900 dark:text-white mb-2">
                    3. Lost Vacation Days (Jurisdiction-Dependent)
                  </p>
                  <p className="text-gray-700 dark:text-gray-300 text-sm">
                    Some European courts (Germany, Austria) have ruled that passengers can claim damages for ruined vacations if a significant portion of the trip was lost due to the airline's fault. This is separate from EU261 compensation.
                  </p>
                </Card>

                <Card className="p-4 bg-gray-50 dark:bg-gray-800">
                  <p className="font-semibold text-gray-900 dark:text-white mb-2">
                    4. Missed Business Opportunities
                  </p>
                  <p className="text-gray-700 dark:text-gray-300 text-sm">
                    If LOT's delay caused you to miss an important business meeting or event resulting in financial loss, you may be able to claim damages under national law (requires proof of direct financial harm).
                  </p>
                </Card>

                <Card className="p-4 bg-gray-50 dark:bg-gray-800">
                  <p className="font-semibold text-gray-900 dark:text-white mb-2">
                    5. Baggage Loss/Delay
                  </p>
                  <p className="text-gray-700 dark:text-gray-300 text-sm">
                    If LOT loses or delays your baggage, you can claim up to ~€1,400 under the Montreal Convention—this is separate from EU261 flight compensation.
                  </p>
                </Card>
              </div>

              <p className="mb-6">
                <strong>Total potential claim example:</strong> €600 (EU261) + €300 (hotel/meals not provided) + €200 (alternative flight cost difference) = €1,100 total compensation.
              </p>

              <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-6 flex items-center gap-3 mt-12">
                <FileText className="h-8 w-8 text-blue-600" />
                How LOT Tries to Reduce Your Compensation
              </h2>

              <p className="mb-6">
                Airlines have strategies to minimize payouts. Here's what LOT might try—and how to counter it.
              </p>

              <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">
                Common LOT Tactics
              </h3>

              <div className="space-y-4 mb-8">
                <Card className="p-4 bg-gray-50 dark:bg-gray-800">
                  <p className="font-semibold text-gray-900 dark:text-white mb-2">
                    "Your ticket was non-refundable, so no compensation"
                  </p>
                  <p className="text-gray-700 dark:text-gray-300 text-sm">
                    <strong>False:</strong> EU261 compensation is a passenger right, not a ticket benefit. It applies regardless of fare type, refundability, or booking class. Budget tickets have the same rights as business class.
                  </p>
                </Card>

                <Card className="p-4 bg-gray-50 dark:bg-gray-800">
                  <p className="font-semibold text-gray-900 dark:text-white mb-2">
                    "You accepted rebooking, so claim is settled"
                  </p>
                  <p className="text-gray-700 dark:text-gray-300 text-sm">
                    <strong>False:</strong> Accepting an alternative flight is your legal right—it doesn't waive your right to cash compensation. You get BOTH rebooking AND monetary compensation (if eligible).
                  </p>
                </Card>

                <Card className="p-4 bg-gray-50 dark:bg-gray-800">
                  <p className="font-semibold text-gray-900 dark:text-white mb-2">
                    "We'll give you a voucher worth more than cash"
                  </p>
                  <p className="text-gray-700 dark:text-gray-300 text-sm">
                    <strong>Your choice:</strong> LOT may offer a €400 voucher for a €250 claim. Sounds good—but vouchers have restrictions, expiration dates, and force you to fly LOT again. You have the right to demand cash instead.
                  </p>
                </Card>

                <Card className="p-4 bg-gray-50 dark:bg-gray-800">
                  <p className="font-semibold text-gray-900 dark:text-white mb-2">
                    "Distance is calculated differently, so lower amount"
                  </p>
                  <p className="text-gray-700 dark:text-gray-300 text-sm">
                    <strong>Verify yourself:</strong> Use aviation distance calculators (e.g., Great Circle Mapper) to confirm the distance. LOT cannot arbitrarily reduce distance to pay less—it's a fixed calculation.
                  </p>
                </Card>
              </div>

              <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-6 flex items-center gap-3 mt-12">
                <CheckCircle className="h-8 w-8 text-blue-600" />
                Maximizing Your Compensation: Practical Tips
              </h2>

              <div className="space-y-4 mb-8">
                <Card className="p-4 bg-blue-50 dark:bg-blue-900/20 border-blue-200 dark:border-blue-800">
                  <p className="font-semibold text-gray-900 dark:text-white mb-2">
                    ✓ Always claim the maximum distance
                  </p>
                  <p className="text-gray-700 dark:text-gray-300 text-sm">
                    For connecting flights, ensure you're claiming based on the total journey distance (origin to final destination), not individual segments. This often results in higher compensation tier.
                  </p>
                </Card>

                <Card className="p-4 bg-blue-50 dark:bg-blue-900/20 border-blue-200 dark:border-blue-800">
                  <p className="font-semibold text-gray-900 dark:text-white mb-2">
                    ✓ Refuse vouchers unless they're significantly better
                  </p>
                  <p className="text-gray-700 dark:text-gray-300 text-sm">
                    Only accept a voucher if it's worth at least 50% more than your cash entitlement AND you plan to fly LOT again soon. Otherwise, demand cash—it's your legal right.
                  </p>
                </Card>

                <Card className="p-4 bg-blue-50 dark:bg-blue-900/20 border-blue-200 dark:border-blue-800">
                  <p className="font-semibold text-gray-900 dark:text-white mb-2">
                    ✓ Claim for every passenger separately
                  </p>
                  <p className="text-gray-700 dark:text-gray-300 text-sm">
                    Don't forget: each passenger (including children) is entitled to individual compensation. A family trip can result in multiple €600 claims totaling thousands of euros.
                  </p>
                </Card>

                <Card className="p-4 bg-blue-50 dark:bg-blue-900/20 border-blue-200 dark:border-blue-800">
                  <p className="font-semibold text-gray-900 dark:text-white mb-2">
                    ✓ Keep all receipts for additional expenses
                  </p>
                  <p className="text-gray-700 dark:text-gray-300 text-sm">
                    If you incur extra costs (hotel, meals, alternative transport) that LOT didn't cover, save all receipts. You can claim these ON TOP of your EU261 compensation.
                  </p>
                </Card>

                <Card className="p-4 bg-blue-50 dark:bg-blue-900/20 border-blue-200 dark:border-blue-800">
                  <p className="font-semibold text-gray-900 dark:text-white mb-2">
                    ✓ Use exact arrival time at destination gate
                  </p>
                  <p className="text-gray-700 dark:text-gray-300 text-sm">
                    Compensation is based on when the aircraft door opens at the gate, not when it lands on the runway. If LOT claims you arrived "only 2h 50min late" but door opened at 3h 05min—you qualify for full compensation.
                  </p>
                </Card>
              </div>
            </div>

            {/* Second CTA - Before FAQ */}
            <div className="bg-gradient-to-r from-blue-600 to-indigo-600 rounded-lg p-8 text-center text-white my-12">
              <h3 className="text-2xl font-bold mb-4">
                Calculate Your Exact LOT Compensation—Free in 2 Minutes
              </h3>
              <p className="text-lg mb-6 text-blue-100">
                Enter your flight details and we'll tell you exactly how much LOT owes you. No hidden fees—we only get paid if you win.
              </p>
              <Button
                asChild
                size="lg"
                className="bg-white text-blue-600 hover:bg-gray-100"
              >
                <a
                  href="https://claimwinger.com?utm_source=blog&utm_medium=lot_compensation_amounts&utm_campaign=second_cta"
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
                    How much compensation can I get from LOT Polish Airlines?
                  </h3>
                  <p className="text-gray-700 dark:text-gray-300">
                    €250 for flights up to 1,500 km, €400 for EU internal flights 1,500-3,500 km, and €600 for flights over 3,500 km or non-EU flights over 1,500 km. Amount depends on flight distance, not ticket price.
                  </p>
                </Card>

                <Card className="p-6">
                  <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-3">
                    Does ticket price affect LOT compensation amount?
                  </h3>
                  <p className="text-gray-700 dark:text-gray-300">
                    No. EU261 compensation is fixed by flight distance only. A €50 budget ticket and a €1,000 business class ticket on the same route get identical compensation—it's based on your rights, not the fare you paid.
                  </p>
                </Card>

                <Card className="p-6">
                  <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-3">
                    Can I get more than €600 from LOT Polish Airlines?
                  </h3>
                  <p className="text-gray-700 dark:text-gray-300">
                    €600 is the maximum EU261 cash compensation, but you can claim additional expenses: hotel costs, meals, alternative transport, lost vacation days (in some jurisdictions), and missed business opportunities. Total claim can exceed €600.
                  </p>
                </Card>

                <Card className="p-6">
                  <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-3">
                    What if LOT offers me a voucher instead of cash?
                  </h3>
                  <p className="text-gray-700 dark:text-gray-300">
                    You have the right to refuse vouchers and demand cash compensation. LOT cannot force you to accept travel vouchers—it's your legal choice. Vouchers often have restrictions and expiration dates.
                  </p>
                </Card>

                <Card className="p-6">
                  <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-3">
                    Does LOT reduce compensation if I arrive late but less than 3 hours?
                  </h3>
                  <p className="text-gray-700 dark:text-gray-300">
                    Yes, there's a 50% reduction rule: if your alternative flight arrives less than 2, 3, or 4 hours late (depending on distance), LOT can reduce compensation by half. But if you arrive 3+ hours late, you always get full compensation.
                  </p>
                </Card>

                <Card className="p-6">
                  <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-3">
                    How is flight distance calculated for LOT compensation?
                  </h3>
                  <p className="text-gray-700 dark:text-gray-300">
                    Distance is measured as a straight line (great circle distance) from departure airport to final destination airport. For connecting flights, it's the total distance of the entire journey, not individual segments.
                  </p>
                </Card>

                <Card className="p-6">
                  <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-3">
                    What if my LOT connecting flight causes me to arrive 3+ hours late?
                  </h3>
                  <p className="text-gray-700 dark:text-gray-300">
                    You calculate compensation based on the TOTAL journey distance (origin to final destination), not the delayed segment. If the first leg was delayed causing you to miss connection, you're entitled to compensation for the entire journey distance.
                  </p>
                </Card>

                <Card className="p-6">
                  <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-3">
                    Can I get compensation for each passenger separately?
                  </h3>
                  <p className="text-gray-700 dark:text-gray-300">
                    Yes. Every passenger with a valid ticket is entitled to individual compensation. A family of 4 on a €600-eligible flight gets €2,400 total (4 × €600). Children and infants count as separate passengers.
                  </p>
                </Card>

                <Card className="p-6">
                  <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-3">
                    Does LOT pay more compensation for business or first class?
                  </h3>
                  <p className="text-gray-700 dark:text-gray-300">
                    No. EU261 compensation amounts are the same for all fare classes. However, if you're involuntarily downgraded from business to economy, you get an ADDITIONAL refund: 30-75% of your ticket price, on top of any delay/cancellation compensation.
                  </p>
                </Card>

                <Card className="p-6">
                  <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-3">
                    What if LOT says the compensation amount is wrong?
                  </h3>
                  <p className="text-gray-700 dark:text-gray-300">
                    Airlines sometimes miscalculate to pay less. Verify the flight distance yourself using aviation distance calculators. LOT cannot arbitrarily reduce the amount—EU261 rates are legally fixed. Challenge incorrect calculations with evidence.
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
                    Complete guide to claiming compensation when your LOT flight is delayed.
                  </p>
                </Card>

                <Card className="p-6 hover:shadow-lg transition-shadow">
                  <h3 className="text-lg font-bold text-gray-900 dark:text-white mb-2">
                    <Link href="/en/blog/lot-polish-airlines-cancelled-flight-compensation" className="hover:text-blue-600">
                      LOT Cancelled Flight Compensation
                    </Link>
                  </h3>
                  <p className="text-gray-600 dark:text-gray-400 text-sm">
                    Learn your rights when LOT cancels your flight with less than 14 days notice.
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
