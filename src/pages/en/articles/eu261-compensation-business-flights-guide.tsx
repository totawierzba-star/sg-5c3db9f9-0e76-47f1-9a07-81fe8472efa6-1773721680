import { SEO } from "@/components/SEO";
import Link from "next/link";
import { Scale, PlaneTakeoff, CheckCircle2, AlertCircle, Users, Building2, Calculator, FileText } from "lucide-react";
import { Alert, AlertDescription } from "@/components/ui/alert";

export default function EU261BusinessFlightsGuide() {
  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": [
      {
        "@type": "Question",
        "name": "Does EU261 apply to business flights?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Yes, EU261 applies to all flights departing from EU airports or arriving in the EU on EU carriers, regardless of whether the ticket was purchased by an individual or a company. Business travelers have the same rights as leisure passengers."
        }
      },
      {
        "@type": "Question",
        "name": "How much compensation can I claim for a delayed business flight?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Compensation ranges from €250 to €600 depending on flight distance: €250 for flights under 1,500km, €400 for EU flights over 1,500km and non-EU flights 1,500-3,500km, and €600 for non-EU flights over 3,500km. The compensation amount is the same regardless of ticket class."
        }
      },
      {
        "@type": "Question",
        "name": "Who receives the compensation on a business trip — employee or employer?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Under EU261, the passenger who experienced the disruption is entitled to compensation. In most jurisdictions, this is the employee, even if the company paid for the ticket. However, employment contracts or company policies may specify different arrangements."
        }
      },
      {
        "@type": "Question",
        "name": "Can my company claim EU261 compensation on my behalf?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Yes, companies can file claims on behalf of employees if they have proper authorization. Many corporate travel departments handle bulk claims to streamline the process and ensure no compensation is left unclaimed."
        }
      },
      {
        "@type": "Question",
        "name": "Does business class get higher compensation than economy?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "No, EU261 compensation amounts are based solely on flight distance, not ticket class or price. A business class passenger receives the same €600 for a delayed transatlantic flight as an economy passenger."
        }
      },
      {
        "@type": "Question",
        "name": "What counts as extraordinary circumstances under EU261?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Extraordinary circumstances that exempt airlines from paying compensation include severe weather, political instability, security risks, air traffic control strikes, and medical emergencies. However, technical faults, crew scheduling issues, and airline strikes typically do not qualify."
        }
      },
      {
        "@type": "Question",
        "name": "How long do I have to claim EU261 compensation after a business trip?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "The time limit varies by country, ranging from 2-6 years. UK: 6 years, Germany: 3 years, France: 5 years, Poland: 6 years. Most EU countries allow 2-3 years minimum, so it's worth claiming even for older business trips."
        }
      },
      {
        "@type": "Question",
        "name": "Can I claim compensation if the company goes bankrupt after my business trip?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Yes, if you (the employee) are the entitled party, you can still claim compensation even if your employer goes bankrupt. The claim is against the airline, not your employer, so company insolvency doesn't affect your rights."
        }
      }
    ]
  };

  const articleSchema = {
    "@context": "https://schema.org",
    "@type": "Article",
    "headline": "EU261 Compensation on Business Flights: Complete Guide for Corporate Travelers",
    "description": "Comprehensive guide to EU261 regulation for business flights: compensation amounts, eligibility criteria, claim process, and who gets the money — employee or employer.",
    "author": {
      "@type": "Person",
      "name": "ClaimWinger Legal Team"
    },
    "publisher": {
      "@type": "Organization",
      "name": "Bizneslot",
      "logo": {
        "@type": "ImageObject",
        "url": "https://bizneslot.pl/bizneslotlogotyp.png"
      }
    },
    "datePublished": "2026-02-26",
    "dateModified": "2026-02-26",
    "image": "https://bizneslot.pl/og-image.png",
    "mainEntityOfPage": {
      "@type": "WebPage",
      "@id": "https://bizneslot.pl/en/articles/eu261-compensation-business-flights-guide"
    }
  };

  return (
    <>
      <SEO
        title="EU261 Compensation on Business Flights: Complete Guide for Corporate Travelers"
        description="Everything you need to know about EU261 for business travel: compensation amounts (€250-€600), eligibility, claim process, and who gets the money. Expert guide for corporate travelers."
        url="https://bizneslot.pl/en/articles/eu261-compensation-business-flights-guide"
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(articleSchema) }}
      />

      <div className="min-h-screen bg-gradient-to-b from-slate-50 to-white">
        <article className="max-w-4xl mx-auto px-4 py-12 sm:px-6 lg:px-8">
          <div className="space-y-8">
            
            {/* Hero Section */}
            <header className="space-y-6">
              <div className="flex items-center gap-3 text-blue-600">
                <Scale className="h-6 w-6" />
                <span className="text-sm font-semibold uppercase tracking-wide">Legal Guide</span>
              </div>
              
              <h1 className="text-4xl sm:text-5xl font-bold text-slate-900 leading-tight">
                EU261 Compensation on Business Flights: Complete Guide for Corporate Travelers
              </h1>
              
              <p className="text-xl text-slate-600 leading-relaxed">
                EU261 is the most powerful passenger protection regulation in the world, guaranteeing up to €600 in compensation for delayed or cancelled flights. This comprehensive guide explains exactly how EU261 applies to business travel, who gets the money, and how corporate travelers can maximize their rights.
              </p>

              <div className="flex flex-wrap gap-4 text-sm text-slate-500">
                <time dateTime="2026-02-26">February 26, 2026</time>
                <span>•</span>
                <span>15 min read</span>
                <span>•</span>
                <span>Legal & Rights</span>
              </div>
            </header>

            {/* CTA #1 - After Introduction */}
            <Alert className="bg-blue-50 border-blue-200">
              <PlaneTakeoff className="h-5 w-5 text-blue-600" />
              <AlertDescription className="text-slate-700">
                <strong className="text-blue-900">Was your business flight delayed or cancelled?</strong>
                <br />
                Check your eligibility and claim up to €600 in compensation in under 3 minutes.
                <br />
                <Link 
                  href="https://claimwinger.com/delayed-flight" 
                  className="inline-flex items-center gap-2 mt-3 text-blue-600 hover:text-blue-700 font-semibold"
                >
                  Start Your Free Claim →
                </Link>
              </AlertDescription>
            </Alert>

            {/* Quick Legal Answer */}
            <Alert className="bg-green-50 border-green-200">
              <CheckCircle2 className="h-5 w-5 text-green-600" />
              <AlertDescription className="text-slate-700">
                <strong className="text-green-900">Quick Answer:</strong> Yes, EU261 applies fully to business flights. Corporate travelers have exactly the same rights as leisure passengers, regardless of who paid for the ticket. Compensation ranges from €250 to €600 depending on flight distance, and in most cases, the employee (not the employer) is legally entitled to receive it.
              </AlertDescription>
            </Alert>

            {/* Main Content */}
            <section className="prose prose-slate max-w-none">
              <h2 className="text-3xl font-bold text-slate-900 mt-12 mb-6 flex items-center gap-3">
                <Scale className="h-8 w-8 text-blue-600" />
                What Is EU261 and How Does It Apply to Business Travel?
              </h2>
              
              <p className="text-lg text-slate-700 leading-relaxed mb-6">
                <strong>EU Regulation 261/2004 (EU261)</strong> is a European Union law that protects all air passengers traveling to, from, or within the EU. It applies universally — whether you're on vacation, visiting family, or traveling for business.
              </p>

              <div className="bg-slate-50 border-l-4 border-blue-600 p-6 my-8">
                <h3 className="text-xl font-bold text-slate-900 mb-4">Key EU261 Coverage Rules</h3>
                <ul className="space-y-3 text-slate-700">
                  <li className="flex items-start gap-3">
                    <CheckCircle2 className="h-5 w-5 text-green-600 mt-1 flex-shrink-0" />
                    <span><strong>Departing from the EU:</strong> Any airline, any destination (e.g., London to New York on United Airlines)</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle2 className="h-5 w-5 text-green-600 mt-1 flex-shrink-0" />
                    <span><strong>Arriving in the EU:</strong> Only EU carriers (e.g., New York to London on British Airways, not on Delta)</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle2 className="h-5 w-5 text-green-600 mt-1 flex-shrink-0" />
                    <span><strong>Applies to:</strong> Delays (3+ hours), cancellations (less than 14 days notice), and denied boarding</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle2 className="h-5 w-5 text-green-600 mt-1 flex-shrink-0" />
                    <span><strong>Ticket type:</strong> Individual tickets, corporate bookings, and group bookings are all covered</span>
                  </li>
                </ul>
              </div>

              <p className="text-lg text-slate-700 leading-relaxed mb-6">
                For business travelers, this means your <Link href="/en/delayed-business-trip" className="text-blue-600 hover:text-blue-700 font-semibold">delayed business trip</Link> or <Link href="/en/cancelled-business-trip" className="text-blue-600 hover:text-blue-700 font-semibold">cancelled corporate flight</Link> is protected the same way as a family vacation. The regulation makes no distinction between ticket purpose or purchaser.
              </p>

              <h2 className="text-3xl font-bold text-slate-900 mt-12 mb-6 flex items-center gap-3">
                <Calculator className="h-8 w-8 text-blue-600" />
                EU261 Compensation Amounts for Business Flights
              </h2>

              <p className="text-lg text-slate-700 leading-relaxed mb-6">
                Compensation under EU261 is <strong>distance-based, not ticket-price-based</strong>. This means a €5,000 business class ticket receives the same compensation as a €50 economy ticket on the same route.
              </p>

              <div className="overflow-x-auto my-8">
                <table className="w-full border-collapse bg-white shadow-sm">
                  <thead>
                    <tr className="bg-slate-100">
                      <th className="border border-slate-300 px-6 py-3 text-left font-bold text-slate-900">Flight Distance</th>
                      <th className="border border-slate-300 px-6 py-3 text-left font-bold text-slate-900">Compensation Amount</th>
                      <th className="border border-slate-300 px-6 py-3 text-left font-bold text-slate-900">Example Routes</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td className="border border-slate-300 px-6 py-4 text-slate-700">Under 1,500 km</td>
                      <td className="border border-slate-300 px-6 py-4 text-slate-900 font-bold">€250</td>
                      <td className="border border-slate-300 px-6 py-4 text-slate-700">London-Paris, Frankfurt-Milan</td>
                    </tr>
                    <tr className="bg-slate-50">
                      <td className="border border-slate-300 px-6 py-4 text-slate-700">1,500-3,500 km (within EU)</td>
                      <td className="border border-slate-300 px-6 py-4 text-slate-900 font-bold">€400</td>
                      <td className="border border-slate-300 px-6 py-4 text-slate-700">London-Athens, Berlin-Lisbon</td>
                    </tr>
                    <tr>
                      <td className="border border-slate-300 px-6 py-4 text-slate-700">1,500-3,500 km (non-EU)</td>
                      <td className="border border-slate-300 px-6 py-4 text-slate-900 font-bold">€400</td>
                      <td className="border border-slate-300 px-6 py-4 text-slate-700">London-Istanbul, Paris-Moscow</td>
                    </tr>
                    <tr className="bg-slate-50">
                      <td className="border border-slate-300 px-6 py-4 text-slate-700">Over 3,500 km (non-EU)</td>
                      <td className="border border-slate-300 px-6 py-4 text-slate-900 font-bold">€600</td>
                      <td className="border border-slate-300 px-6 py-4 text-slate-700">London-New York, Frankfurt-Dubai</td>
                    </tr>
                  </tbody>
                </table>
              </div>

              <Alert className="bg-amber-50 border-amber-200 my-8">
                <AlertCircle className="h-5 w-5 text-amber-600" />
                <AlertDescription className="text-slate-700">
                  <strong className="text-amber-900">Important:</strong> The delay must be at least 3 hours at final destination for full compensation. Delays of 2-3 hours may qualify for reduced compensation on longer flights. Cancellations receive full compensation unless cancelled 14+ days before departure.
                </AlertDescription>
              </Alert>

              <h2 className="text-3xl font-bold text-slate-900 mt-12 mb-6 flex items-center gap-3">
                <Users className="h-8 w-8 text-blue-600" />
                Who Gets the Compensation: Employee or Employer?
              </h2>

              <p className="text-lg text-slate-700 leading-relaxed mb-6">
                This is the most common question in <Link href="/en/business-flight-compensation" className="text-blue-600 hover:text-blue-700 font-semibold">business flight compensation cases</Link>. The legal answer is clear in most EU countries:
              </p>

              <div className="bg-blue-50 border-l-4 border-blue-600 p-6 my-8">
                <h3 className="text-xl font-bold text-slate-900 mb-4">Legal Ownership Rule</h3>
                <p className="text-slate-700 mb-4">
                  <strong>The passenger who experienced the disruption</strong> (i.e., the employee) is the legal beneficiary under EU261, regardless of who paid for the ticket. This is because EU261 protects <em>passengers</em>, not <em>ticket purchasers</em>.
                </p>
                <p className="text-slate-700">
                  However, employment contracts or company travel policies may include clauses that assign compensation to the employer. Such clauses are legally binding in most EU jurisdictions if signed voluntarily by the employee.
                </p>
              </div>

              <h3 className="text-2xl font-bold text-slate-900 mt-10 mb-4">Practical Corporate Scenarios</h3>

              <div className="space-y-6 my-8">
                <div className="bg-white border border-slate-200 rounded-lg p-6">
                  <h4 className="text-lg font-bold text-slate-900 mb-3 flex items-center gap-2">
                    <CheckCircle2 className="h-5 w-5 text-green-600" />
                    Scenario 1: No Contract Clause
                  </h4>
                  <p className="text-slate-700">
                    If your employment contract is silent on flight compensation, you (the employee) are the legal owner. Your employer cannot force you to surrender it, even if they paid for the ticket.
                  </p>
                </div>

                <div className="bg-white border border-slate-200 rounded-lg p-6">
                  <h4 className="text-lg font-bold text-slate-900 mb-3 flex items-center gap-2">
                    <CheckCircle2 className="h-5 w-5 text-green-600" />
                    Scenario 2: Company Policy Assignment
                  </h4>
                  <p className="text-slate-700">
                    Many companies include a clause stating "all flight compensation belongs to the company." If you signed this voluntarily, it's legally enforceable, and you must transfer the compensation if claimed.
                  </p>
                </div>

                <div className="bg-white border border-slate-200 rounded-lg p-6">
                  <h4 className="text-lg font-bold text-slate-900 mb-3 flex items-center gap-2">
                    <CheckCircle2 className="h-5 w-5 text-green-600" />
                    Scenario 3: B2B Contractor
                  </h4>
                  <p className="text-slate-700">
                    Freelancers and contractors operating on B2B contracts typically retain full ownership of compensation since they book tickets in their own name and are not employees.
                  </p>
                </div>
              </div>

              <h2 className="text-3xl font-bold text-slate-900 mt-12 mb-6 flex items-center gap-3">
                <Building2 className="h-8 w-8 text-blue-600" />
                How Companies Can Claim Compensation on Behalf of Employees
              </h2>

              <p className="text-lg text-slate-700 leading-relaxed mb-6">
                Even if the employee is the legal beneficiary, companies can handle the claim administratively to ensure nothing falls through the cracks. This requires:
              </p>

              <ul className="space-y-3 text-slate-700 mb-8 list-disc list-inside">
                <li><strong>Written authorization:</strong> The employee must sign a document authorizing the company to claim on their behalf</li>
                <li><strong>Passenger details:</strong> Full name, flight details, and disruption documentation</li>
                <li><strong>Payment routing:</strong> Clear agreement on whether compensation goes to employee or company</li>
              </ul>

              <p className="text-lg text-slate-700 leading-relaxed mb-6">
                Many corporate travel departments use bulk claim services to file hundreds of claims simultaneously, recovering significant amounts annually. This is particularly valuable for companies with frequent business travelers.
              </p>

              <h2 className="text-3xl font-bold text-slate-900 mt-12 mb-6 flex items-center gap-3">
                <AlertCircle className="h-8 w-8 text-blue-600" />
                When EU261 Does NOT Apply: Extraordinary Circumstances
              </h2>

              <p className="text-lg text-slate-700 leading-relaxed mb-6">
                Airlines are exempt from paying compensation if the disruption was caused by <strong>extraordinary circumstances</strong> beyond their control:
              </p>

              <div className="grid md:grid-cols-2 gap-6 my-8">
                <div className="bg-red-50 border border-red-200 rounded-lg p-6">
                  <h4 className="text-lg font-bold text-red-900 mb-3">NOT Covered</h4>
                  <ul className="space-y-2 text-slate-700">
                    <li>✗ Severe weather (storms, volcanic ash)</li>
                    <li>✗ Political unrest or security threats</li>
                    <li>✗ Air traffic control strikes</li>
                    <li>✗ Medical emergencies</li>
                    <li>✗ Bird strikes (if unforeseeable)</li>
                  </ul>
                </div>

                <div className="bg-green-50 border border-green-200 rounded-lg p-6">
                  <h4 className="text-lg font-bold text-green-900 mb-3">Still Covered</h4>
                  <ul className="space-y-2 text-slate-700">
                    <li>✓ Technical faults (most cases)</li>
                    <li>✓ Crew scheduling problems</li>
                    <li>✓ Airline staff strikes</li>
                    <li>✓ Late aircraft arrival (knock-on delays)</li>
                    <li>✓ Overbooking</li>
                  </ul>
                </div>
              </div>

              <Alert className="bg-amber-50 border-amber-200 my-8">
                <AlertCircle className="h-5 w-5 text-amber-600" />
                <AlertDescription className="text-slate-700">
                  <strong className="text-amber-900">Airlines often claim extraordinary circumstances incorrectly.</strong> If your business flight was delayed due to a "technical issue," don't accept the airline's refusal without verification. Most technical faults are considered within the airline's control.
                </AlertDescription>
              </Alert>

              <h2 className="text-3xl font-bold text-slate-900 mt-12 mb-6 flex items-center gap-3">
                <FileText className="h-8 w-8 text-blue-600" />
                How to Claim EU261 Compensation for Business Flights
              </h2>

              <p className="text-lg text-slate-700 leading-relaxed mb-6">
                The claim process is straightforward, whether you're filing individually or your company is handling it in bulk:
              </p>

              <div className="bg-slate-50 border-l-4 border-blue-600 p-6 my-8">
                <h3 className="text-xl font-bold text-slate-900 mb-4">Step-by-Step Claim Process</h3>
                <ol className="space-y-4 text-slate-700">
                  <li className="flex items-start gap-3">
                    <span className="flex-shrink-0 w-8 h-8 bg-blue-600 text-white rounded-full flex items-center justify-center font-bold">1</span>
                    <div>
                      <strong>Gather documentation:</strong> Boarding passes, booking confirmations, delay/cancellation proof
                    </div>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="flex-shrink-0 w-8 h-8 bg-blue-600 text-white rounded-full flex items-center justify-center font-bold">2</span>
                    <div>
                      <strong>Check eligibility:</strong> Verify your flight meets EU261 criteria (EU departure or EU arrival on EU carrier)
                    </div>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="flex-shrink-0 w-8 h-8 bg-blue-600 text-white rounded-full flex items-center justify-center font-bold">3</span>
                    <div>
                      <strong>File the claim:</strong> Submit directly to the airline or use a compensation service (faster and higher success rate)
                    </div>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="flex-shrink-0 w-8 h-8 bg-blue-600 text-white rounded-full flex items-center justify-center font-bold">4</span>
                    <div>
                      <strong>Wait for response:</strong> Airlines have 2-3 months to respond; if they refuse incorrectly, escalate to ADR or court
                    </div>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="flex-shrink-0 w-8 h-8 bg-blue-600 text-white rounded-full flex items-center justify-center font-bold">5</span>
                    <div>
                      <strong>Receive payment:</strong> Compensation is typically paid via bank transfer within 14-60 days of approval
                    </div>
                  </li>
                </ol>
              </div>

              <h3 className="text-2xl font-bold text-slate-900 mt-10 mb-4">Time Limits by Country</h3>

              <div className="overflow-x-auto my-8">
                <table className="w-full border-collapse bg-white shadow-sm">
                  <thead>
                    <tr className="bg-slate-100">
                      <th className="border border-slate-300 px-6 py-3 text-left font-bold text-slate-900">Country</th>
                      <th className="border border-slate-300 px-6 py-3 text-left font-bold text-slate-900">Statute of Limitations</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td className="border border-slate-300 px-6 py-4 text-slate-700">United Kingdom</td>
                      <td className="border border-slate-300 px-6 py-4 text-slate-900 font-bold">6 years</td>
                    </tr>
                    <tr className="bg-slate-50">
                      <td className="border border-slate-300 px-6 py-4 text-slate-700">Germany</td>
                      <td className="border border-slate-300 px-6 py-4 text-slate-900 font-bold">3 years</td>
                    </tr>
                    <tr>
                      <td className="border border-slate-300 px-6 py-4 text-slate-700">France</td>
                      <td className="border border-slate-300 px-6 py-4 text-slate-900 font-bold">5 years</td>
                    </tr>
                    <tr className="bg-slate-50">
                      <td className="border border-slate-300 px-6 py-4 text-slate-700">Poland</td>
                      <td className="border border-slate-300 px-6 py-4 text-slate-900 font-bold">6 years</td>
                    </tr>
                    <tr>
                      <td className="border border-slate-300 px-6 py-4 text-slate-700">Spain</td>
                      <td className="border border-slate-300 px-6 py-4 text-slate-900 font-bold">5 years</td>
                    </tr>
                    <tr className="bg-slate-50">
                      <td className="border border-slate-300 px-6 py-4 text-slate-700">Italy</td>
                      <td className="border border-slate-300 px-6 py-4 text-slate-900 font-bold">2 years</td>
                    </tr>
                  </tbody>
                </table>
              </div>

              <p className="text-lg text-slate-700 leading-relaxed mb-6">
                This means you can claim compensation for business trips from years ago, as long as you're within your country's limitation period.
              </p>

              <h2 className="text-3xl font-bold text-slate-900 mt-12 mb-6">Key Takeaways for Corporate Travelers</h2>

              <div className="bg-gradient-to-r from-blue-50 to-indigo-50 border border-blue-200 rounded-lg p-8 my-8">
                <ul className="space-y-4 text-slate-700">
                  <li className="flex items-start gap-3">
                    <CheckCircle2 className="h-6 w-6 text-blue-600 mt-1 flex-shrink-0" />
                    <span><strong>EU261 fully protects business travelers</strong> — same rights as leisure passengers, regardless of ticket price or class</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle2 className="h-6 w-6 text-blue-600 mt-1 flex-shrink-0" />
                    <span><strong>Compensation is €250-€600</strong> based on flight distance, not ticket price</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle2 className="h-6 w-6 text-blue-600 mt-1 flex-shrink-0" />
                    <span><strong>The employee usually owns the compensation</strong> unless the employment contract states otherwise</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle2 className="h-6 w-6 text-blue-600 mt-1 flex-shrink-0" />
                    <span><strong>Companies can file claims on behalf of employees</strong> with proper authorization</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle2 className="h-6 w-6 text-blue-600 mt-1 flex-shrink-0" />
                    <span><strong>You have 2-6 years to claim</strong> depending on your country's limitation period</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle2 className="h-6 w-6 text-blue-600 mt-1 flex-shrink-0" />
                    <span><strong>Technical faults are covered</strong> — don't accept airline refusals without verification</span>
                  </li>
                </ul>
              </div>
            </section>

            {/* CTA #2 - Before FAQ */}
            <section className="bg-gradient-to-r from-blue-600 to-indigo-600 rounded-2xl p-8 sm:p-12 text-white my-12">
              <div className="max-w-3xl mx-auto text-center space-y-6">
                <h2 className="text-3xl sm:text-4xl font-bold">
                  Claim Your Business Flight Compensation in 3 Minutes
                </h2>
                <p className="text-xl text-blue-100">
                  No upfront fees. No bureaucracy. Just fill out our simple form and let our legal team handle the rest. You only pay when we win.
                </p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center items-center pt-4">
                  <Link
                    href="https://claimwinger.com/delayed-flight"
                    className="inline-flex items-center justify-center px-8 py-4 bg-white text-blue-600 rounded-lg font-bold text-lg hover:bg-blue-50 transition-colors shadow-lg"
                  >
                    Check Your Delayed Flight →
                  </Link>
                  <Link
                    href="https://claimwinger.com/cancelled-flight"
                    className="inline-flex items-center justify-center px-8 py-4 bg-blue-700 text-white rounded-lg font-bold text-lg hover:bg-blue-800 transition-colors border-2 border-white/30"
                  >
                    Check Your Cancelled Flight →
                  </Link>
                </div>
                <p className="text-sm text-blue-200 pt-4">
                  ✓ Free eligibility check • ✓ 98% success rate • ✓ Average payout: €520
                </p>
              </div>
            </section>

            {/* FAQ Section */}
            <section className="bg-slate-50 rounded-2xl p-8 sm:p-12 my-12">
              <h2 className="text-3xl font-bold text-slate-900 mb-8 text-center">
                Frequently Asked Questions
              </h2>
              
              <div className="space-y-6 max-w-3xl mx-auto">
                <details className="bg-white rounded-lg p-6 shadow-sm">
                  <summary className="font-bold text-slate-900 cursor-pointer text-lg">
                    Does EU261 apply to business flights?
                  </summary>
                  <p className="text-slate-700 mt-4 leading-relaxed">
                    Yes, EU261 applies to all flights departing from EU airports or arriving in the EU on EU carriers, regardless of whether the ticket was purchased by an individual or a company. Business travelers have the same rights as leisure passengers.
                  </p>
                </details>

                <details className="bg-white rounded-lg p-6 shadow-sm">
                  <summary className="font-bold text-slate-900 cursor-pointer text-lg">
                    How much compensation can I claim for a delayed business flight?
                  </summary>
                  <p className="text-slate-700 mt-4 leading-relaxed">
                    Compensation ranges from €250 to €600 depending on flight distance: €250 for flights under 1,500km, €400 for EU flights over 1,500km and non-EU flights 1,500-3,500km, and €600 for non-EU flights over 3,500km. The compensation amount is the same regardless of ticket class.
                  </p>
                </details>

                <details className="bg-white rounded-lg p-6 shadow-sm">
                  <summary className="font-bold text-slate-900 cursor-pointer text-lg">
                    Who receives the compensation on a business trip — employee or employer?
                  </summary>
                  <p className="text-slate-700 mt-4 leading-relaxed">
                    Under EU261, the passenger who experienced the disruption is entitled to compensation. In most jurisdictions, this is the employee, even if the company paid for the ticket. However, employment contracts or company policies may specify different arrangements.
                  </p>
                </details>

                <details className="bg-white rounded-lg p-6 shadow-sm">
                  <summary className="font-bold text-slate-900 cursor-pointer text-lg">
                    Can my company claim EU261 compensation on my behalf?
                  </summary>
                  <p className="text-slate-700 mt-4 leading-relaxed">
                    Yes, companies can file claims on behalf of employees if they have proper authorization. Many corporate travel departments handle bulk claims to streamline the process and ensure no compensation is left unclaimed.
                  </p>
                </details>

                <details className="bg-white rounded-lg p-6 shadow-sm">
                  <summary className="font-bold text-slate-900 cursor-pointer text-lg">
                    Does business class get higher compensation than economy?
                  </summary>
                  <p className="text-slate-700 mt-4 leading-relaxed">
                    No, EU261 compensation amounts are based solely on flight distance, not ticket class or price. A business class passenger receives the same €600 for a delayed transatlantic flight as an economy passenger.
                  </p>
                </details>

                <details className="bg-white rounded-lg p-6 shadow-sm">
                  <summary className="font-bold text-slate-900 cursor-pointer text-lg">
                    What counts as extraordinary circumstances under EU261?
                  </summary>
                  <p className="text-slate-700 mt-4 leading-relaxed">
                    Extraordinary circumstances that exempt airlines from paying compensation include severe weather, political instability, security risks, air traffic control strikes, and medical emergencies. However, technical faults, crew scheduling issues, and airline strikes typically do not qualify.
                  </p>
                </details>

                <details className="bg-white rounded-lg p-6 shadow-sm">
                  <summary className="font-bold text-slate-900 cursor-pointer text-lg">
                    How long do I have to claim EU261 compensation after a business trip?
                  </summary>
                  <p className="text-slate-700 mt-4 leading-relaxed">
                    The time limit varies by country, ranging from 2-6 years. UK: 6 years, Germany: 3 years, France: 5 years, Poland: 6 years. Most EU countries allow 2-3 years minimum, so it's worth claiming even for older business trips.
                  </p>
                </details>

                <details className="bg-white rounded-lg p-6 shadow-sm">
                  <summary className="font-bold text-slate-900 cursor-pointer text-lg">
                    Can I claim compensation if the company goes bankrupt after my business trip?
                  </summary>
                  <p className="text-slate-700 mt-4 leading-relaxed">
                    Yes, if you (the employee) are the entitled party, you can still claim compensation even if your employer goes bankrupt. The claim is against the airline, not your employer, so company insolvency doesn't affect your rights.
                  </p>
                </details>
              </div>
            </section>

            {/* Related Articles */}
            <section className="border-t border-slate-200 pt-12">
              <h2 className="text-2xl font-bold text-slate-900 mb-6">Related Articles</h2>
              <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
                <Link 
                  href="/en/delayed-business-trip"
                  className="block p-6 bg-white border border-slate-200 rounded-lg hover:shadow-lg transition-shadow"
                >
                  <h3 className="font-bold text-slate-900 mb-2">Delayed Business Trip Guide</h3>
                  <p className="text-slate-600 text-sm">Complete guide to claiming compensation when your business flight is delayed</p>
                </Link>
                
                <Link 
                  href="/en/cancelled-business-trip"
                  className="block p-6 bg-white border border-slate-200 rounded-lg hover:shadow-lg transition-shadow"
                >
                  <h3 className="font-bold text-slate-900 mb-2">Cancelled Business Flight Rights</h3>
                  <p className="text-slate-600 text-sm">What to do when your corporate flight is cancelled</p>
                </Link>
                
                <Link 
                  href="/en/business-flight-compensation"
                  className="block p-6 bg-white border border-slate-200 rounded-lg hover:shadow-lg transition-shadow"
                >
                  <h3 className="font-bold text-slate-900 mb-2">Business Flight Compensation Overview</h3>
                  <p className="text-slate-600 text-sm">Understanding compensation rights for corporate travelers</p>
                </Link>
              </div>
            </section>

          </div>
        </article>
      </div>
    </>
  );
}
