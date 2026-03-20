import { SEO } from "@/components/SEO";
import Link from "next/link";
import { Briefcase, FileText, ArrowRight, CheckCircle2, AlertCircle, Scale, Shield } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert";

export default function BusinessTicketRights() {
  const structuredData = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "Article",
        "headline": "Corporate Ticket vs Passenger Rights – Complete Guide",
        "description": "Does a company-paid ticket change your rights as a passenger? Comprehensive guide to employee rights in business travel.",
        "author": {
          "@type": "Organization",
          "name": "BusinessFlight.info"
        },
        "publisher": {
          "@type": "Organization",
          "name": "BusinessFlight.info",
          "logo": {
            "@type": "ImageObject",
            "url": "https://bizneslot.info/og-image.png"
          }
        },
        "datePublished": "2026-02-28",
        "dateModified": "2026-02-28",
        "mainEntityOfPage": {
          "@type": "WebPage",
          "@id": "https://bizneslot.info/en/business-ticket-rights"
        }
      },
      {
        "@type": "FAQPage",
        "mainEntity": [
          {
            "@type": "Question",
            "name": "Does the company have rights to compensation for a business ticket?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "No. Compensation is due to the passenger – the person who actually traveled and suffered the inconvenience. EU Regulation 261/2004 does not distinguish between private and business tickets. The method of ticket financing has no legal significance."
            }
          },
          {
            "@type": "Question",
            "name": "Does an employee need company approval to file a claim?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "No. Filing a claim is a personal right of the employee arising from the contract of carriage. As a passenger, you have an autonomous right to file a claim with the airline without consent from your employer, HR, or accounting."
            }
          },
          {
            "@type": "Question",
            "name": "Can an employment contract clause remove the right to compensation?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "No. EU Regulation has overriding authority over national regulations and private contracts. An employer cannot remove an employee's rights arising from European law through internal regulations or employment contracts."
            }
          },
          {
            "@type": "Question",
            "name": "Are corporate tickets subject to different rules than private tickets?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "No. Aviation law does not distinguish tickets by travel purpose. For airlines and European law, it doesn't matter whether you're flying on vacation or to a business conference. You are a passenger with the same rights."
            }
          }
        ]
      },
      {
        "@type": "BreadcrumbList",
        "itemListElement": [
          {
            "@type": "ListItem",
            "position": 1,
            "name": "BusinessFlight.info",
            "item": "https://bizneslot.info/en"
          },
          {
            "@type": "ListItem",
            "position": 2,
            "name": "Corporate Ticket vs Passenger Rights",
            "item": "https://bizneslot.info/en/business-ticket-rights"
          }
        ]
      }
    ]
  };

  return (
    <>
      <SEO 
        title="Corporate Ticket vs Passenger Rights | BusinessFlight.info"
        description="Does a company-paid ticket change your rights? Learn who is a passenger under the law and who is entitled to compensation for business flights."
        url="https://bizneslot.info/en/business-ticket-rights"
      />
      
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
      />
      
      <div className="min-h-screen bg-gradient-to-b from-slate-50 to-white dark:from-slate-950 dark:to-slate-900">
        {/* Hero Section */}
        <section className="relative bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 text-white py-20 overflow-hidden">
          <div className="container mx-auto max-w-4xl px-4">
            <div className="flex items-center gap-2 text-slate-300 text-sm mb-4">
              <Link href="/en" className="hover:text-white transition-colors">BusinessFlight.info</Link>
              <span>/</span>
              <span>Corporate Ticket Rights</span>
            </div>
            <h1 className="text-4xl md:text-5xl font-bold mb-6 leading-tight">
              Corporate Ticket vs Passenger Rights – What Changes?
            </h1>
            <p className="text-xl text-slate-300 leading-relaxed">
              Does the fact that your company paid for the ticket affect your rights as a passenger? 
              Who is entitled to compensation under European law? 
              We debunk the most popular myths about business travel.
            </p>
          </div>
        </section>

        {/* Main Content */}
        <article className="py-16 px-4">
          <div className="container mx-auto max-w-4xl">
            
            {/* Key Takeaway */}
            <Alert className="mb-12 border-slate-700 bg-slate-50 dark:bg-slate-800/50">
              <Shield className="h-5 w-5 text-slate-700 dark:text-slate-300" />
              <AlertTitle className="text-lg font-bold text-slate-900 dark:text-slate-100">
                Fundamental Legal Principle
              </AlertTitle>
              <AlertDescription className="text-slate-700 dark:text-slate-300 text-base mt-2">
                European law (EU Regulation 261/2004) <strong>does not distinguish between private and business tickets</strong>. 
                The entitled party for compensation is the <strong>passenger</strong> – the person who actually traveled. 
                The method of ticket financing has no legal significance.
              </AlertDescription>
            </Alert>

            {/* Section 1 */}
            <section className="mb-12">
              <h2 className="text-3xl font-bold text-slate-900 dark:text-slate-100 mb-6">
                Who is a "Passenger" Under the Law?
              </h2>
              
              <Card className="border-slate-200 dark:border-slate-700 mb-6">
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <Scale className="h-6 w-6 text-slate-700 dark:text-slate-300" />
                    Legal Definition of Passenger
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <p className="text-slate-700 dark:text-slate-300">
                    Regulation (EC) No 261/2004 defines a passenger as:
                  </p>
                  <div className="bg-slate-50 dark:bg-slate-800/50 border border-slate-200 dark:border-slate-700 rounded-lg p-4">
                    <p className="text-slate-900 dark:text-slate-100 font-medium italic">
                      "any person holding a valid travel ticket who has been accepted 
                      for check-in [...] or whose reservation has been confirmed"
                    </p>
                  </div>
                  <p className="text-slate-700 dark:text-slate-300">
                    This definition makes <strong>no reference to:</strong>
                  </p>
                  <ul className="space-y-2 ml-6 text-slate-700 dark:text-slate-300">
                    <li className="flex items-start gap-2">
                      <AlertCircle className="h-5 w-5 text-slate-600 dark:text-slate-400 flex-shrink-0 mt-0.5" />
                      <span>Method of ticket financing</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <AlertCircle className="h-5 w-5 text-slate-600 dark:text-slate-400 flex-shrink-0 mt-0.5" />
                      <span>Purpose of travel (private vs business)</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <AlertCircle className="h-5 w-5 text-slate-600 dark:text-slate-400 flex-shrink-0 mt-0.5" />
                      <span>Entity that paid for the reservation</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <AlertCircle className="h-5 w-5 text-slate-600 dark:text-slate-400 flex-shrink-0 mt-0.5" />
                      <span>Employee-employer relationship</span>
                    </li>
                  </ul>
                  <p className="text-slate-700 dark:text-slate-300 font-medium mt-4">
                    <strong>Conclusion:</strong> The passenger is the person physically flying on the aircraft. 
                    They have the right to compensation.
                  </p>
                </CardContent>
              </Card>

              <div className="prose prose-slate dark:prose-invert max-w-none">
                <p className="text-lg text-slate-700 dark:text-slate-300 leading-relaxed">
                  This distinction is crucial in the context of business travel. A company may be the 
                  <strong> payer</strong> for the ticket, but is not the <strong>passenger</strong>. 
                  European law protects the traveling person, not the financing entity.
                </p>
              </div>
            </section>

            {/* Section 2 */}
            <section className="mb-12">
              <h2 className="text-3xl font-bold text-slate-900 dark:text-slate-100 mb-6">
                Corporate Ticket – Who Has the Right to Compensation?
              </h2>
              
              <div className="grid md:grid-cols-2 gap-6 mb-6">
                <Card className="border-green-200 dark:border-green-800 bg-green-50 dark:bg-green-900/20">
                  <CardHeader>
                    <CardTitle className="text-lg text-green-900 dark:text-green-100 flex items-center gap-2">
                      <CheckCircle2 className="h-5 w-5" />
                      Employee (Passenger)
                    </CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-3">
                    <p className="text-green-900 dark:text-green-100 font-semibold">
                      Has full right to compensation
                    </p>
                    <ul className="space-y-2 text-green-800 dark:text-green-200">
                      <li>• Actually traveled</li>
                      <li>• Suffered inconvenience (delay, cancellation)</li>
                      <li>• Is party in relationship with airline</li>
                      <li>• Can file claim in their own name</li>
                    </ul>
                  </CardContent>
                </Card>

                <Card className="border-red-200 dark:border-red-800 bg-red-50 dark:bg-red-900/20">
                  <CardHeader>
                    <CardTitle className="text-lg text-red-900 dark:text-red-100 flex items-center gap-2">
                      <AlertCircle className="h-5 w-5" />
                      Employer (Payer)
                    </CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-3">
                    <p className="text-red-900 dark:text-red-100 font-semibold">
                      Does NOT have right to compensation
                    </p>
                    <ul className="space-y-2 text-red-800 dark:text-red-200">
                      <li>• Did not physically travel</li>
                      <li>• Did not suffer personal inconvenience</li>
                      <li>• Is not a passenger under the law</li>
                      <li>• Cannot file claim in their own name</li>
                    </ul>
                  </CardContent>
                </Card>
              </div>

              <Alert className="border-blue-200 dark:border-blue-800 bg-blue-50 dark:bg-blue-900/20">
                <FileText className="h-5 w-5 text-blue-700 dark:text-blue-400" />
                <AlertDescription className="text-blue-900 dark:text-blue-100">
                  <strong>Practical example:</strong> John flies to Berlin for a conference. The ticket is purchased by 
                  the procurement department of XYZ company. The flight is delayed by 4 hours. <strong>John</strong> has the right 
                  to €250 compensation, not XYZ company. John was the passenger, suffered the inconvenience, 
                  and lost time.
                </AlertDescription>
              </Alert>
            </section>

            {/* Section 3 */}
            <section className="mb-12">
              <h2 className="text-3xl font-bold text-slate-900 dark:text-slate-100 mb-6">
                Common Myths and Misconceptions
              </h2>
              
              <div className="space-y-6">
                <Card className="border-slate-200 dark:border-slate-700">
                  <CardHeader>
                    <CardTitle className="text-lg flex items-center gap-2">
                      <AlertCircle className="h-5 w-5 text-red-600 dark:text-red-400" />
                      Myth 1: "The company bought the ticket, so they get the compensation"
                    </CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-3">
                    <p className="text-slate-700 dark:text-slate-300 font-medium">
                      <strong>Fact:</strong> This is false. Compensation is due to the passenger, 
                      not the ticket payer.
                    </p>
                    <p className="text-slate-700 dark:text-slate-300">
                      EU Regulation 261/2004 clearly states that compensation is for the traveling person. 
                      The company may be party to the ticket purchase transaction, but is not the party 
                      entitled to compensation in case of disruptions.
                    </p>
                  </CardContent>
                </Card>

                <Card className="border-slate-200 dark:border-slate-700">
                  <CardHeader>
                    <CardTitle className="text-lg flex items-center gap-2">
                      <AlertCircle className="h-5 w-5 text-red-600 dark:text-red-400" />
                      Myth 2: "Employment contract includes clause about returning compensation"
                    </CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-3">
                    <p className="text-slate-700 dark:text-slate-300 font-medium">
                      <strong>Fact:</strong> Such a clause may be incompatible with European law.
                    </p>
                    <p className="text-slate-700 dark:text-slate-300">
                      EU Regulation has overriding authority over national regulations and private contracts. 
                      An employer cannot remove an employee's rights arising from European law through internal 
                      regulations or employment contracts. More: <Link href="/en/employer-compensation" className="text-slate-900 dark:text-slate-100 underline hover:text-slate-700 dark:hover:text-slate-300">Employer & Compensation</Link>.
                    </p>
                  </CardContent>
                </Card>

                <Card className="border-slate-200 dark:border-slate-700">
                  <CardHeader>
                    <CardTitle className="text-lg flex items-center gap-2">
                      <AlertCircle className="h-5 w-5 text-red-600 dark:text-red-400" />
                      Myth 3: "Corporate tickets have different rules than private tickets"
                    </CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-3">
                    <p className="text-slate-700 dark:text-slate-300 font-medium">
                      <strong>Fact:</strong> Aviation law does not distinguish tickets by travel purpose.
                    </p>
                    <p className="text-slate-700 dark:text-slate-300">
                      For airlines and European law, it doesn't matter whether you're flying on vacation, 
                      to family, or to a business conference. You are a passenger with the same rights 
                      regardless of travel context.
                    </p>
                  </CardContent>
                </Card>

                <Card className="border-slate-200 dark:border-slate-700">
                  <CardHeader>
                    <CardTitle className="text-lg flex items-center gap-2">
                      <AlertCircle className="h-5 w-5 text-red-600 dark:text-red-400" />
                      Myth 4: "Employee needs company approval to file a claim"
                    </CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-3">
                    <p className="text-slate-700 dark:text-slate-300 font-medium">
                      <strong>Fact:</strong> No. Filing a claim is the employee's personal right.
                    </p>
                    <p className="text-slate-700 dark:text-slate-300">
                      As a passenger, you have an autonomous right to file a claim with the airline. 
                      You don't need to ask permission from your employer, HR, or accounting. This is your personal 
                      entitlement arising from the contract of carriage (which you entered by flying).
                    </p>
                  </CardContent>
                </Card>
              </div>
            </section>

            {/* Section 4 */}
            <section className="mb-12">
              <h2 className="text-3xl font-bold text-slate-900 dark:text-slate-100 mb-6">
                Business Ticket vs Corporate Booking – Legal Differences
              </h2>
              
              <Card className="border-slate-200 dark:border-slate-700 mb-6">
                <CardHeader>
                  <CardTitle className="text-xl">Three Models of Ticket Purchase in Companies</CardTitle>
                </CardHeader>
                <CardContent className="space-y-6">
                  <div className="border-l-4 border-l-slate-700 dark:border-l-slate-300 pl-4">
                    <h4 className="font-semibold text-slate-900 dark:text-slate-100 mb-2">Model 1: Company buys ticket in employee's name</h4>
                    <p className="text-slate-700 dark:text-slate-300 mb-2">
                      Most common model. Travel/procurement department books ticket, providing employee data. 
                      Employee receives booking confirmation.
                    </p>
                    <p className="text-slate-700 dark:text-slate-300 font-medium">
                      <strong>Right to compensation:</strong> Employee (passenger)
                    </p>
                  </div>

                  <div className="border-l-4 border-l-slate-700 dark:border-l-slate-300 pl-4">
                    <h4 className="font-semibold text-slate-900 dark:text-slate-100 mb-2">Model 2: Employee buys, company reimburses</h4>
                    <p className="text-slate-700 dark:text-slate-300 mb-2">
                      Employee books ticket with their own card, then settles with employer 
                      (refund or accounting note).
                    </p>
                    <p className="text-slate-700 dark:text-slate-300 font-medium">
                      <strong>Right to compensation:</strong> Employee (passenger)
                    </p>
                  </div>

                  <div className="border-l-4 border-l-slate-700 dark:border-l-slate-300 pl-4">
                    <h4 className="font-semibold text-slate-900 dark:text-slate-100 mb-2">Model 3: Company has corporate account with airline</h4>
                    <p className="text-slate-700 dark:text-slate-300 mb-2">
                      Large companies have corporate agreements with airlines. Bookings are assigned 
                      to corporate account, but in specific employees' names.
                    </p>
                    <p className="text-slate-700 dark:text-slate-300 font-medium">
                      <strong>Right to compensation:</strong> Employee (passenger) – financing model doesn't change rights
                    </p>
                  </div>
                </CardContent>
              </Card>

              <Alert className="border-slate-700 dark:border-slate-300 bg-slate-50 dark:bg-slate-800/50">
                <CheckCircle2 className="h-5 w-5 text-slate-700 dark:text-slate-300" />
                <AlertDescription className="text-slate-700 dark:text-slate-300">
                  <strong>Conclusion:</strong> Regardless of financing model, the passenger is always 
                  the flying person, and they have the right to compensation. No organizational model changes 
                  this fundamental right.
                </AlertDescription>
              </Alert>
            </section>

            {/* Section 5 */}
            <section className="mb-12">
              <h2 className="text-3xl font-bold text-slate-900 dark:text-slate-100 mb-6">
                Practical Implications for Employees
              </h2>
              
              <div className="space-y-6">
                <Card className="border-slate-200 dark:border-slate-700">
                  <CardHeader>
                    <CardTitle className="text-lg">What can you do as an employee?</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <ul className="space-y-3 text-slate-700 dark:text-slate-300">
                      <li className="flex items-start gap-2">
                        <CheckCircle2 className="h-5 w-5 text-green-600 dark:text-green-400 flex-shrink-0 mt-0.5" />
                        <div>
                          <strong>File a claim in your own name:</strong> You don't need company approval. 
                          You can <a href="https://claimwinger.com/delayed-flight" className="text-slate-900 dark:text-slate-100 underline hover:text-slate-700 dark:hover:text-slate-300" target="_blank" rel="noopener noreferrer">check your rights</a> and start the process.
                        </div>
                      </li>
                      <li className="flex items-start gap-2">
                        <CheckCircle2 className="h-5 w-5 text-green-600 dark:text-green-400 flex-shrink-0 mt-0.5" />
                        <div>
                          <strong>Receive money to your account:</strong> Compensation from the airline 
                          is yours. This is not a business expense reimbursement.
                        </div>
                      </li>
                      <li className="flex items-start gap-2">
                        <CheckCircle2 className="h-5 w-5 text-green-600 dark:text-green-400 flex-shrink-0 mt-0.5" />
                        <div>
                          <strong>Not inform employer:</strong> Legally, you don't have to. In practice, 
                          being transparent may prevent misunderstandings.
                        </div>
                      </li>
                      <li className="flex items-start gap-2">
                        <CheckCircle2 className="h-5 w-5 text-green-600 dark:text-green-400 flex-shrink-0 mt-0.5" />
                        <div>
                          <strong>Keep the compensation:</strong> The money is owed to you for inconvenience 
                          suffered. This is not a ticket cost refund, but compensation for lost time.
                        </div>
                      </li>
                    </ul>
                  </CardContent>
                </Card>

                <Card className="border-slate-200 dark:border-slate-700">
                  <CardHeader>
                    <CardTitle className="text-lg">What can't an employer do?</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <ul className="space-y-3 text-slate-700 dark:text-slate-300">
                      <li className="flex items-start gap-2">
                        <AlertCircle className="h-5 w-5 text-red-600 dark:text-red-400 flex-shrink-0 mt-0.5" />
                        <div>
                          <strong>Demand return of compensation:</strong> Company may have internal 
                          regulations, but cannot force return of rights due under European law.
                        </div>
                      </li>
                      <li className="flex items-start gap-2">
                        <AlertCircle className="h-5 w-5 text-red-600 dark:text-red-400 flex-shrink-0 mt-0.5" />
                        <div>
                          <strong>File claim on behalf of employee:</strong> Only the passenger can 
                          be party to claim proceedings.
                        </div>
                      </li>
                      <li className="flex items-start gap-2">
                        <AlertCircle className="h-5 w-5 text-red-600 dark:text-red-400 flex-shrink-0 mt-0.5" />
                        <div>
                          <strong>Prohibit employee from filing claim:</strong> This is interference 
                          with employee's personal rights protected by EU law.
                        </div>
                      </li>
                      <li className="flex items-start gap-2">
                        <AlertCircle className="h-5 w-5 text-red-600 dark:text-red-400 flex-shrink-0 mt-0.5" />
                        <div>
                          <strong>Reserve compensation in employment contract:</strong> Contract cannot 
                          remove rights arising from higher-order legal acts (EU).
                        </div>
                      </li>
                    </ul>
                  </CardContent>
                </Card>
              </div>
            </section>

            {/* Section 6 */}
            <section className="mb-12">
              <h2 className="text-3xl font-bold text-slate-900 dark:text-slate-100 mb-6">
                Special Cases and Concerns
              </h2>
              
              <div className="space-y-6">
                <Card className="border-slate-200 dark:border-slate-700">
                  <CardHeader>
                    <CardTitle className="text-lg">
                      What if the flight was paid with company loyalty points?
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-slate-700 dark:text-slate-300">
                      Irrelevant. Right to compensation doesn't depend on payment method. 
                      Whether the ticket was paid with cash, card, points, or voucher – passenger 
                      has the same rights in case of disruptions.
                    </p>
                  </CardContent>
                </Card>

                <Card className="border-slate-200 dark:border-slate-700">
                  <CardHeader>
                    <CardTitle className="text-lg">
                      Does ticket class (economy, business) matter?
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-slate-700 dark:text-slate-300">
                      Not for compensation amount. Compensation amount depends only on flight distance. 
                      A passenger in economy and a passenger in business class on the same flight will receive 
                      the same compensation amount.
                    </p>
                  </CardContent>
                </Card>

                <Card className="border-slate-200 dark:border-slate-700">
                  <CardHeader>
                    <CardTitle className="text-lg">
                      What if employee changed flight to private by extending business trip?
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-slate-700 dark:text-slate-300">
                      If after a business trip you decided to stay privately (vacation, weekend), 
                      changed the return flight, and the return flight was disrupted – you still have the right to 
                      compensation. You are a passenger on that flight.
                    </p>
                  </CardContent>
                </Card>

                <Card className="border-slate-200 dark:border-slate-700">
                  <CardHeader>
                    <CardTitle className="text-lg">
                      Can HR demand documentation of the claim?
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-slate-700 dark:text-slate-300">
                      HR can ask for information for internal documentation purposes (e.g., in case 
                      of questions about extended business trip). But they cannot require return of money or 
                      block your right to file a claim.
                    </p>
                  </CardContent>
                </Card>
              </div>
            </section>

            {/* CTA Section */}
            <section className="mb-12">
              <Card className="bg-slate-900 text-white border-0">
                <CardHeader>
                  <CardTitle className="text-2xl md:text-3xl">
                    Was Your Business Flight Disrupted?
                  </CardTitle>
                  <CardDescription className="text-slate-300 text-lg">
                    Regardless of who bought the ticket, you have the right to compensation as a passenger. 
                    Check if you're entitled to compensation from €250 to €600.
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <Button asChild size="lg" variant="secondary">
                    <a href="https://claimwinger.com/delayed-flight" target="_blank" rel="noopener noreferrer">
                      Check Your Rights
                      <ArrowRight className="ml-2 h-5 w-5" />
                    </a>
                  </Button>
                </CardContent>
              </Card>
            </section>

            {/* Related Articles */}
            <section>
              <h2 className="text-2xl font-bold text-slate-900 dark:text-slate-100 mb-6">Related Topics</h2>
              <div className="grid md:grid-cols-2 gap-6">
                <Link href="/en/business-flight-compensation" className="group">
                  <Card className="border-slate-200 dark:border-slate-700 hover:border-slate-400 dark:hover:border-slate-500 transition-all h-full">
                    <CardHeader>
                      <CardTitle className="group-hover:text-slate-700 dark:group-hover:text-slate-300 transition-colors flex items-start justify-between">
                        Business Flight Compensation
                        <ArrowRight className="h-5 w-5 text-slate-400 group-hover:text-slate-700 dark:group-hover:text-slate-300 group-hover:translate-x-1 transition-all flex-shrink-0" />
                      </CardTitle>
                      <CardDescription>
                        Legal basics: who is entitled to compensation and what amounts?
                      </CardDescription>
                    </CardHeader>
                  </Card>
                </Link>

                <Link href="/en/articles" className="group">
                  <Card className="border-slate-200 dark:border-slate-700 hover:border-slate-400 dark:hover:border-slate-500 transition-all h-full">
                    <CardHeader>
                      <CardTitle className="group-hover:text-slate-700 dark:group-hover:text-slate-300 transition-colors flex items-start justify-between">
                        All Articles
                        <ArrowRight className="h-5 w-5 text-slate-400 group-hover:text-slate-700 dark:group-hover:text-slate-300 group-hover:translate-x-1 transition-all flex-shrink-0" />
                      </CardTitle>
                      <CardDescription>
                        Browse our complete guide to business travel rights
                      </CardDescription>
                    </CardHeader>
                  </Card>
                </Link>
              </div>
            </section>

          </div>
        </article>
      </div>
    </>
  );
}
