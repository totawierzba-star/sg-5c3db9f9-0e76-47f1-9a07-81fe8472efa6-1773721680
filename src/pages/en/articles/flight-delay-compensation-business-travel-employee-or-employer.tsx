import { SEO } from "@/components/SEO";
import Link from "next/link";
import { Scale, Building2, User, CheckCircle, AlertTriangle, Euro, FileText, ArrowRight, Briefcase, Plane } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert";

export default function FlightDelayCompensationBusinessTravelEN() {
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "Article",
    "headline": "Flight Delay Compensation for Business Travel: Who Is Entitled — Employee or Employer?",
    "description": "Complete legal guide: who gets EU261 compensation on business flights - the employee who traveled or the company that paid? Analysis by jurisdiction, contract type, and tax implications.",
    "author": {
      "@type": "Person",
      "name": "Piotr Wierzba"
    },
    "publisher": {
      "@type": "Organization",
      "name": "BiznesLot.info",
      "logo": {
        "@type": "ImageObject",
        "url": "https://bizneslot.pl/og-image.png"
      }
    },
    "datePublished": "2026-02-26",
    "dateModified": "2026-02-26",
    "mainEntityOfPage": {
      "@type": "WebPage",
      "@id": "https://bizneslot.pl/en/articles/flight-delay-compensation-business-travel-employee-or-employer"
    }
  };

  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": [
      {
        "@type": "Question",
        "name": "Who legally gets flight delay compensation on a business trip - employee or employer?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Under EU261, the passenger (employee) is the legal beneficiary of compensation. However, employment contracts or corporate travel policies may require employees to transfer compensation to the employer. The default legal position is that compensation belongs to the employee, but contractual obligations can override this."
        }
      },
      {
        "@type": "Question",
        "name": "Can my employer force me to give them my flight delay compensation?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Only if it's explicitly stated in your employment contract, travel policy, or company regulations that you agreed to. Without such provisions, the compensation legally belongs to you as the passenger. Check your contract and travel policy documents."
        }
      },
      {
        "@type": "Question",
        "name": "Does it matter if the company paid for the ticket?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "No. EU261 compensation is based on passenger rights, not who purchased the ticket. The person who suffered the delay (the traveler) is entitled to compensation under EU law, regardless of payment source. However, internal company policies may still require reimbursement."
        }
      },
      {
        "@type": "Question",
        "name": "What if I'm a freelancer or B2B contractor on a business trip?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "As a freelancer or B2B contractor, you're typically entitled to keep the compensation unless your contract explicitly states otherwise. B2B contracts have more flexibility than employment contracts, so review your specific agreement with the client."
        }
      },
      {
        "@type": "Question",
        "name": "Is flight delay compensation taxable for employees?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Tax treatment varies by country. In most EU jurisdictions, compensation received by employees for personal inconvenience is not taxable. However, if the company receives it as business income, it becomes part of taxable revenue. Consult a tax advisor for your specific situation."
        }
      },
      {
        "@type": "Question",
        "name": "How should companies handle flight compensation in accounting?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "If compensation is transferred to the company, it should be recorded as other income. If employees keep it, no accounting entry is needed. Companies should have clear policies documented in travel guidelines and expense reimbursement procedures."
        }
      },
      {
        "@type": "Question",
        "name": "What's the best practice for companies regarding flight compensation?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Best practice is clear communication: document in travel policy whether employees keep compensation or transfer it to the company. Consider letting employees keep smaller amounts (under €250) and requiring transfer for larger claims (€400-€600) as a balanced approach."
        }
      },
      {
        "@type": "Question",
        "name": "Can I use ClaimWinger to file a claim for my business flight?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Yes. ClaimWinger handles both personal and business travel claims. You file as the passenger, and if your company requires the compensation, you transfer it after receipt. ClaimWinger only charges a fee if your claim succeeds."
        }
      }
    ]
  };

  return (
    <>
      <SEO
        title="Who Gets Flight Delay Compensation on Business Trips? Employee vs Employer Rights"
        description="Who is entitled to EU261 compensation on business flights - the employee or the company? Complete legal guide with jurisdiction analysis, contract implications, and tax treatment."
        url="https://bizneslot.pl/en/articles/flight-delay-compensation-business-travel-employee-or-employer"
      />
      
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
      />
      
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />

      <div className="min-h-screen bg-gradient-to-b from-slate-50 to-white">
        {/* Hero Section */}
        <section className="relative bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 text-white py-20 overflow-hidden">
          <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxnIGZpbGw9IiNmZmYiIGZpbGwtb3BhY2l0eT0iMC4wNSI+PHBhdGggZD0iTTM2IDE2djZoLTZ2LTZoNnptLTEyIDBoNnY2aC02di02em0yNCAxMnY2aC02di02aDZ6bS0xMiAwaDZ2NmgtNnYtNnptLTEyIDBoNnY2aC02di02em0yNCAxMnY2aC02di02aDZ6bS0xMiAwaDZ2NmgtNnYtNnptLTEyIDBoNnY2aC02di02eiIvPjwvZz48L2c+PC9zdmc+')] opacity-30"></div>
          
          <div className="container mx-auto px-4 relative z-10">
            <div className="max-w-4xl mx-auto text-center">
              <div className="inline-flex items-center gap-2 bg-blue-500/10 border border-blue-500/20 rounded-full px-6 py-2 mb-8">
                <Scale className="w-5 h-5 text-blue-400" />
                <span className="text-sm font-medium">Legal Guide</span>
              </div>
              
              <h1 className="text-4xl md:text-6xl font-bold mb-6 leading-tight">
                Flight Delay Compensation on Business Trips:<br />
                <span className="text-[#FF6B35]">Employee or Employer?</span>
              </h1>
              
              <p className="text-xl text-slate-300 mb-10 leading-relaxed max-w-3xl mx-auto">
                The definitive answer to who gets EU261 compensation when your company pays for the ticket: legal analysis, contractual implications, and practical solutions for both employees and employers.
              </p>
            </div>
          </div>

          <div className="absolute bottom-0 left-0 right-0 h-24 bg-gradient-to-t from-white to-transparent"></div>
        </section>

        {/* Main Content */}
        <article className="py-20 px-4">
          <div className="container mx-auto max-w-4xl">
            
            {/* Introduction */}
            <div className="prose prose-lg max-w-none mb-8">
              <p className="text-xl text-slate-700 leading-relaxed">
                When your <Link href="/en/delayed-business-trip" className="text-[#FF6B35] hover:underline">business flight is delayed</Link>, 
                you're entitled to up to €600 in compensation under EU261 regulations. But here's the €600 question that puzzles 
                thousands of business travelers and HR departments every year: <strong>who actually gets the money — the employee 
                who suffered the delay, or the company that paid for the ticket?</strong>
              </p>
              
              <p className="text-xl text-slate-700 leading-relaxed">
                The answer isn't as straightforward as you might think. It depends on your employment contract, company travel 
                policy, jurisdiction, and even the type of business relationship you have with your employer. This comprehensive 
                guide breaks down the legal framework, practical implications, and best practices for both employees and companies.
              </p>
            </div>

            {/* CTA 1 - After Introduction */}
            <Card className="bg-gradient-to-r from-blue-50 to-slate-50 border-blue-200 mb-12">
              <CardHeader>
                <CardTitle className="text-2xl">Check Your Compensation Eligibility Now</CardTitle>
                <CardDescription className="text-base text-slate-700">
                  Was your business flight delayed 3+ hours? Find out if you're entitled to €250-€600 compensation. 
                  Free check takes less than 2 minutes — no registration required.
                </CardDescription>
              </CardHeader>
              <CardContent>
                <Button asChild size="lg" className="bg-[#FF6B35] hover:bg-[#FF6B35]/90">
                  <a href="https://claimwinger.com/delayed-flight" target="_blank" rel="noopener noreferrer">
                    Check Delayed Flight Claim
                    <ArrowRight className="ml-2 h-5 w-5" />
                  </a>
                </Button>
              </CardContent>
            </Card>

            {/* Quick Answer */}
            <Alert className="mb-12 border-[#FF6B35] bg-orange-50">
              <Scale className="h-5 w-5 text-[#FF6B35]" />
              <AlertTitle className="text-lg font-bold text-slate-900">
                The Quick Legal Answer
              </AlertTitle>
              <AlertDescription className="text-slate-700 text-base mt-2">
                <p className="mb-2">
                  <strong>Default position:</strong> Under EU261, compensation belongs to the <strong>passenger</strong> (employee), 
                  not the ticket purchaser (company).
                </p>
                <p>
                  <strong>However:</strong> Employment contracts or corporate travel policies can require employees to transfer 
                  compensation to the employer. Without such provisions, the employee legally keeps it.
                </p>
              </AlertDescription>
            </Alert>

            {/* Legal Framework */}
            <section className="mb-12">
              <h2 className="text-3xl font-bold text-slate-900 mb-6 flex items-center gap-3">
                <FileText className="h-8 w-8 text-[#FF6B35]" />
                The Legal Framework: What EU261 Actually Says
              </h2>
              
              <div className="prose prose-lg max-w-none mb-6">
                <p className="text-lg text-slate-700 leading-relaxed">
                  EU Regulation 261/2004 is crystal clear on one point: compensation is a <strong>passenger right</strong>, 
                  not a purchaser right. The regulation states that "passengers" are entitled to compensation when their flights 
                  are delayed, cancelled, or they're denied boarding.
                </p>
              </div>

              <Card className="border-slate-200 mb-6">
                <CardHeader>
                  <CardTitle>Key Legal Principles</CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="flex items-start gap-3">
                    <CheckCircle className="h-6 w-6 text-green-600 flex-shrink-0 mt-0.5" />
                    <div>
                      <p className="font-semibold text-slate-900">Passenger Right, Not Payment Right</p>
                      <p className="text-slate-700">
                        EU261 compensates the person who experienced the inconvenience (delay, cancellation), 
                        not who paid for the ticket. This is fundamental consumer protection.
                      </p>
                    </div>
                  </div>
                  
                  <div className="flex items-start gap-3">
                    <CheckCircle className="h-6 w-6 text-green-600 flex-shrink-0 mt-0.5" />
                    <div>
                      <p className="font-semibold text-slate-900">Direct Claim Entitlement</p>
                      <p className="text-slate-700">
                        The passenger has the direct legal standing to claim compensation from the airline. 
                        The company that purchased the ticket does not have automatic claim rights.
                      </p>
                    </div>
                  </div>
                  
                  <div className="flex items-start gap-3">
                    <CheckCircle className="h-6 w-6 text-green-600 flex-shrink-0 mt-0.5" />
                    <div>
                      <p className="font-semibold text-slate-900">Contractual Override Possible</p>
                      <p className="text-slate-700">
                        While EU261 grants compensation to passengers, private contracts (employment agreements, 
                        travel policies) can stipulate that employees transfer compensation to employers.
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Alert className="border-blue-200 bg-blue-50">
                <AlertTriangle className="h-5 w-5 text-blue-700" />
                <AlertDescription className="text-blue-900">
                  <strong>Important distinction:</strong> EU261 determines <em>who can claim</em> from the airline (passenger). 
                  Your employment contract determines <em>who ultimately keeps</em> the money (employee or company).
                </AlertDescription>
              </Alert>
            </section>

            {/* Employee vs Employer */}
            <section className="mb-12">
              <h2 className="text-3xl font-bold text-slate-900 mb-6">
                Employee vs Employer: Three Legal Scenarios
              </h2>
              
              <div className="space-y-6">
                <Card className="border-l-4 border-l-green-500">
                  <CardHeader>
                    <CardTitle className="text-xl flex items-center gap-2">
                      <User className="h-6 w-6 text-green-600" />
                      Scenario 1: Employee Keeps Compensation
                    </CardTitle>
                    <CardDescription>
                      No contractual obligation to transfer compensation to employer
                    </CardDescription>
                  </CardHeader>
                  <CardContent className="space-y-3">
                    <p className="text-slate-700">
                      <strong>When this applies:</strong>
                    </p>
                    <ul className="space-y-2 ml-6 text-slate-700">
                      <li>• No mention of flight compensation in employment contract</li>
                      <li>• Company travel policy doesn't address compensation ownership</li>
                      <li>• No company regulations requiring compensation transfer</li>
                      <li>• No signed acknowledgment of compensation transfer policy</li>
                    </ul>
                    <p className="text-slate-700 mt-4">
                      <strong>Legal basis:</strong> Default EU261 position. The employee, as the passenger, retains the 
                      compensation. This is the most common scenario in smaller companies or when policies haven't been updated.
                    </p>
                  </CardContent>
                </Card>

                <Card className="border-l-4 border-l-orange-500">
                  <CardHeader>
                    <CardTitle className="text-xl flex items-center gap-2">
                      <Building2 className="h-6 w-6 text-orange-600" />
                      Scenario 2: Company Gets Compensation
                    </CardTitle>
                    <CardDescription>
                      Contractual obligation requiring transfer to employer
                    </CardDescription>
                  </CardHeader>
                  <CardContent className="space-y-3">
                    <p className="text-slate-700">
                      <strong>When this applies:</strong>
                    </p>
                    <ul className="space-y-2 ml-6 text-slate-700">
                      <li>• Employment contract explicitly states compensation belongs to company</li>
                      <li>• Corporate travel policy requires compensation transfer</li>
                      <li>• Internal regulations binding employees to transfer compensation</li>
                      <li>• Signed travel policy acknowledgment including compensation clause</li>
                    </ul>
                    <p className="text-slate-700 mt-4">
                      <strong>Legal basis:</strong> Freedom of contract. Employers can require compensation transfer as a 
                      contractual term, provided it's clearly communicated and agreed upon. This is increasingly common in 
                      large corporations with mature travel programs.
                    </p>
                  </CardContent>
                </Card>

                <Card className="border-l-4 border-l-blue-500">
                  <CardHeader>
                    <CardTitle className="text-xl flex items-center gap-2">
                      <Scale className="h-6 w-6 text-blue-600" />
                      Scenario 3: Shared or Negotiated Split
                    </CardTitle>
                    <CardDescription>
                      Hybrid approach with employee and employer sharing compensation
                    </CardDescription>
                  </CardHeader>
                  <CardContent className="space-y-3">
                    <p className="text-slate-700">
                      <strong>When this applies:</strong>
                    </p>
                    <ul className="space-y-2 ml-6 text-slate-700">
                      <li>• Company allows employees to keep smaller amounts (e.g., under €250)</li>
                      <li>• Larger compensations (€400-€600) go to the company</li>
                      <li>• Compensation split 50/50 or other agreed ratio</li>
                      <li>• Negotiated case-by-case depending on trip circumstances</li>
                    </ul>
                    <p className="text-slate-700 mt-4">
                      <strong>Legal basis:</strong> Contractual flexibility. Companies can structure compensation policies 
                      creatively to balance employee satisfaction with cost recovery. This approach is gaining popularity 
                      as a middle ground.
                    </p>
                  </CardContent>
                </Card>
              </div>
            </section>

            {/* Contract Types */}
            <section className="mb-12">
              <h2 className="text-3xl font-bold text-slate-900 mb-6">
                How Contract Type Affects Compensation Ownership
              </h2>
              
              <div className="grid md:grid-cols-2 gap-6 mb-8">
                <Card className="border-slate-200">
                  <CardHeader>
                    <CardTitle className="flex items-center gap-2">
                      <Briefcase className="h-6 w-6 text-blue-600" />
                      Regular Employment
                    </CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-3">
                    <p className="text-slate-700">
                      <strong>Employment Contract (W-2/PAYE equivalent)</strong>
                    </p>
                    <p className="text-slate-700 text-sm">
                      Employers have broad authority to set travel policies as part of employment terms. 
                      Most companies include compensation transfer clauses in travel policies or contracts.
                    </p>
                    <Alert className="border-slate-200 bg-slate-50 mt-4">
                      <AlertDescription className="text-slate-700 text-sm">
                        <strong>Employee action:</strong> Check your employment contract, employee handbook, 
                        and corporate travel policy. If unclear, ask HR directly.
                      </AlertDescription>
                    </Alert>
                  </CardContent>
                </Card>

                <Card className="border-slate-200">
                  <CardHeader>
                    <CardTitle className="flex items-center gap-2">
                      <FileText className="h-6 w-6 text-purple-600" />
                      B2B / Freelancer
                    </CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-3">
                    <p className="text-slate-700">
                      <strong>Business-to-Business Contract</strong>
                    </p>
                    <p className="text-slate-700 text-sm">
                      As an independent contractor or freelancer, you typically keep compensation unless 
                      your service agreement explicitly states otherwise. B2B contracts have fewer standardized 
                      clauses about incidental benefits.
                    </p>
                    <Alert className="border-slate-200 bg-slate-50 mt-4">
                      <AlertDescription className="text-slate-700 text-sm">
                        <strong>Contractor action:</strong> Review your B2B agreement. If silent on compensation, 
                        you likely keep it. Consider negotiating this upfront for future contracts.
                      </AlertDescription>
                    </Alert>
                  </CardContent>
                </Card>
              </div>

              <Card className="border-slate-200 bg-slate-50">
                <CardHeader>
                  <CardTitle className="text-xl">Real-World Example: The €600 Question</CardTitle>
                </CardHeader>
                <CardContent className="space-y-3">
                  <p className="text-slate-700">
                    <strong>Situation:</strong> Sarah is a marketing manager employed by TechCorp. The company books 
                    her a business class ticket from London to New York for a client presentation. Due to a technical 
                    fault, the flight is delayed 5 hours, and Sarah arrives exhausted, missing important pre-meeting prep time.
                  </p>
                  <p className="text-slate-700">
                    <strong>The claim:</strong> As a transatlantic flight over 3,500 km delayed 3+ hours, Sarah is 
                    entitled to €600 compensation under EU261.
                  </p>
                  <p className="text-slate-700">
                    <strong>Who gets the €600?</strong>
                  </p>
                  <ul className="space-y-2 ml-6 text-slate-700">
                    <li>• If TechCorp's travel policy states "all compensation belongs to the company" → Company gets €600</li>
                    <li>• If Sarah's contract and policy are silent → Sarah keeps €600 (default EU261 position)</li>
                    <li>• If TechCorp allows "employees keep up to €250" → Sarah keeps €250, company gets €350</li>
                  </ul>
                </CardContent>
              </Card>
            </section>

            {/* Jurisdiction Differences */}
            <section className="mb-12">
              <h2 className="text-3xl font-bold text-slate-900 mb-6">
                Jurisdiction Variations: EU, UK, and Beyond
              </h2>
              
              <div className="prose prose-lg max-w-none mb-6">
                <p className="text-lg text-slate-700 leading-relaxed">
                  While EU261 is harmonized across the European Union, employment law and contract law vary by country, 
                  affecting how compensation disputes are handled.
                </p>
              </div>

              <div className="space-y-6">
                <Card className="border-slate-200">
                  <CardHeader>
                    <CardTitle className="text-lg">European Union Countries</CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-3">
                    <p className="text-slate-700">
                      <strong>General principle:</strong> Employment contracts can require compensation transfer, 
                      but must be explicitly stated. Courts generally uphold clear contractual terms.
                    </p>
                    <div className="grid md:grid-cols-2 gap-4 mt-4">
                      <div>
                        <p className="font-semibold text-slate-900 mb-2">Germany</p>
                        <p className="text-sm text-slate-700">
                          Strong contractual freedom. If Arbeitsvertrag (employment contract) or Reiserichtlinie 
                          (travel policy) states compensation goes to employer, it's enforceable.
                        </p>
                      </div>
                      <div>
                        <p className="font-semibold text-slate-900 mb-2">France</p>
                        <p className="text-sm text-slate-700">
                          Similar approach. Convention collective (collective bargaining agreement) may override 
                          individual contracts in some sectors.
                        </p>
                      </div>
                      <div>
                        <p className="font-semibold text-slate-900 mb-2">Poland</p>
                        <p className="text-sm text-slate-700">
                          Umowa o pracę (employment contract) or regulamin pracy (work regulations) must explicitly 
                          address compensation transfer.
                        </p>
                      </div>
                      <div>
                        <p className="font-semibold text-slate-900 mb-2">Netherlands</p>
                        <p className="text-sm text-slate-700">
                          Arbeidsovereenkomst (employment contract) provisions are enforceable. Dutch labor law 
                          generally respects contractual freedom on such matters.
                        </p>
                      </div>
                    </div>
                  </CardContent>
                </Card>

                <Card className="border-slate-200">
                  <CardHeader>
                    <CardTitle className="text-lg">United Kingdom (UK261)</CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-3">
                    <p className="text-slate-700">
                      Post-Brexit, the UK operates under UK261, which mirrors EU261 almost identically. The legal 
                      framework for compensation ownership remains the same: passenger entitlement, with contractual 
                      override possible.
                    </p>
                    <p className="text-slate-700">
                      <strong>Key consideration:</strong> Employment contracts governed by English law strongly 
                      enforce clear contractual terms. If your contract states the company keeps compensation, 
                      UK courts will uphold it.
                    </p>
                  </CardContent>
                </Card>

                <Card className="border-slate-200">
                  <CardHeader>
                    <CardTitle className="text-lg">Non-EU Passengers on EU Flights</CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-3">
                    <p className="text-slate-700">
                      If you're a US, Canadian, Australian, or other non-EU citizen working for a non-EU company but 
                      traveling on an EU-covered flight, EU261 still applies to you as a passenger.
                    </p>
                    <p className="text-slate-700">
                      However, your employment contract is governed by your home country's labor laws. For example:
                    </p>
                    <ul className="space-y-2 ml-6 text-slate-700">
                      <li>• <strong>US employees:</strong> At-will employment and contract terms generally enforceable</li>
                      <li>• <strong>Canadian employees:</strong> Provincial labor laws may affect enforceability</li>
                      <li>• <strong>Australian employees:</strong> Fair Work Act considerations for benefit entitlements</li>
                    </ul>
                  </CardContent>
                </Card>
              </div>
            </section>

            {/* Tax Implications */}
            <section className="mb-12">
              <h2 className="text-3xl font-bold text-slate-900 mb-6">
                Tax Implications: Who Pays Tax on Compensation?
              </h2>
              
              <div className="prose prose-lg max-w-none mb-6">
                <p className="text-lg text-slate-700 leading-relaxed">
                  Whether compensation is taxable depends on who receives it and how it's classified under tax law.
                </p>
              </div>

              <div className="grid md:grid-cols-2 gap-6">
                <Card className="border-slate-200">
                  <CardHeader>
                    <CardTitle>Employee Keeps Compensation</CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-3">
                    <p className="text-slate-700">
                      <strong>Tax treatment in most EU countries:</strong>
                    </p>
                    <ul className="space-y-2 ml-6 text-slate-700 text-sm">
                      <li>• Generally <strong>not taxable</strong> as it's compensation for personal inconvenience, not income</li>
                      <li>• Not reported as employment benefit-in-kind</li>
                      <li>• Similar to personal injury compensation (non-taxable damages)</li>
                      <li>• No reporting obligation in most jurisdictions</li>
                    </ul>
                    <Alert className="border-slate-200 bg-slate-50 mt-4">
                      <AlertDescription className="text-slate-700 text-xs">
                        <strong>Exception:</strong> Some countries may treat large amounts (€600+) differently. 
                        Consult a tax advisor if in doubt.
                      </AlertDescription>
                    </Alert>
                  </CardContent>
                </Card>

                <Card className="border-slate-200">
                  <CardHeader>
                    <CardTitle>Company Keeps Compensation</CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-3">
                    <p className="text-slate-700">
                      <strong>Tax treatment for companies:</strong>
                    </p>
                    <ul className="space-y-2 ml-6 text-slate-700 text-sm">
                      <li>• Recorded as <strong>other income</strong> or <strong>travel expense reimbursement</strong></li>
                      <li>• Becomes part of taxable business revenue</li>
                      <li>• Must be reported in financial statements</li>
                      <li>• May reduce net travel expenses for accounting purposes</li>
                    </ul>
                    <Alert className="border-slate-200 bg-slate-50 mt-4">
                      <AlertDescription className="text-slate-700 text-xs">
                        <strong>Accounting tip:</strong> Set up a separate account code for flight compensation 
                        received to track it as a travel cost offset.
                      </AlertDescription>
                    </Alert>
                  </CardContent>
                </Card>
              </div>
            </section>

            {/* Best Practices */}
            <section className="mb-12">
              <h2 className="text-3xl font-bold text-slate-900 mb-6">
                Best Practices for Employers: Creating Fair Compensation Policies
              </h2>
              
              <div className="space-y-6">
                <Card className="border-l-4 border-l-blue-500">
                  <CardHeader>
                    <CardTitle className="text-xl">1. Document Your Policy Clearly</CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-3">
                    <p className="text-slate-700">
                      Include flight compensation ownership in:
                    </p>
                    <ul className="space-y-2 ml-6 text-slate-700">
                      <li>• <strong>Corporate travel policy</strong> (primary location)</li>
                      <li>• <strong>Employment contracts</strong> (brief reference)</li>
                      <li>• <strong>Employee handbook</strong> (detailed explanation)</li>
                      <li>• <strong>Expense reimbursement guidelines</strong> (process instructions)</li>
                    </ul>
                    <p className="text-slate-700 mt-4">
                      <strong>Sample policy language:</strong>
                    </p>
                    <div className="bg-slate-50 rounded p-4 text-sm text-slate-700 border border-slate-200">
                      "In the event of flight delays, cancellations, or denied boarding on company-booked travel, 
                      any compensation received under EU261, UK261, or equivalent regulations shall be transferred 
                      to the Company. Employees are required to file compensation claims and remit funds to the 
                      Company within 30 days of receipt."
                    </div>
                  </CardContent>
                </Card>

                <Card className="border-l-4 border-l-green-500">
                  <CardHeader>
                    <CardTitle className="text-xl">2. Consider Employee Goodwill Options</CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-3">
                    <p className="text-slate-700">
                      Compensation policies that balance cost recovery with employee satisfaction:
                    </p>
                    <ul className="space-y-2 ml-6 text-slate-700">
                      <li>• <strong>Tiered approach:</strong> Employees keep €250 or less, company gets €400-€600</li>
                      <li>• <strong>Effort-based:</strong> Employee files claim, keeps 25% as incentive, company gets 75%</li>
                      <li>• <strong>Severity-based:</strong> If delay causes personal loss (vacation days used), employee keeps it</li>
                      <li>• <strong>Frequency-based:</strong> Frequent business travelers keep compensation as perk</li>
                    </ul>
                  </CardContent>
                </Card>

                <Card className="border-l-4 border-l-orange-500">
                  <CardHeader>
                    <CardTitle className="text-xl">3. Make the Process Easy</CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-3">
                    <p className="text-slate-700">
                      If you want employees to transfer compensation, make it administratively simple:
                    </p>
                    <ul className="space-y-2 ml-6 text-slate-700">
                      <li>• Provide clear instructions on how to file claims</li>
                      <li>• Use a centralized service like <a href="https://claimwinger.com" target="_blank" rel="noopener noreferrer" className="text-[#FF6B35] hover:underline">ClaimWinger</a> for corporate claims</li>
                      <li>• Don't burden employees with complex paperwork</li>
                      <li>• Set up direct remittance processes (e.g., payroll deduction)</li>
                    </ul>
                  </CardContent>
                </Card>

                <Card className="border-l-4 border-l-purple-500">
                  <CardHeader>
                    <CardTitle className="text-xl">4. Communicate Proactively</CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-3">
                    <p className="text-slate-700">
                      Don't wait until a delay occurs to explain your policy:
                    </p>
                    <ul className="space-y-2 ml-6 text-slate-700">
                      <li>• Include in onboarding for roles with travel</li>
                      <li>• Send annual reminders to frequent travelers</li>
                      <li>• Explain the reasoning behind the policy (cost recovery, fairness, etc.)</li>
                      <li>• Designate a point person (travel manager, HR) for questions</li>
                    </ul>
                  </CardContent>
                </Card>
              </div>
            </section>

            {/* Employee Action Steps */}
            <section className="mb-12">
              <h2 className="text-3xl font-bold text-slate-900 mb-6">
                What Employees Should Do: Protecting Your Rights
              </h2>
              
              <div className="space-y-6">
                <Card className="border-slate-200">
                  <CardHeader>
                    <CardTitle>Step 1: Know Your Contractual Obligations</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-slate-700 mb-3">
                      Before filing a compensation claim, check:
                    </p>
                    <ul className="space-y-2 ml-6 text-slate-700">
                      <li>• Your employment contract (search for "compensation", "travel", "EU261")</li>
                      <li>• Corporate travel policy (usually in HR portal or intranet)</li>
                      <li>• Employee handbook or internal regulations</li>
                      <li>• Any signed acknowledgments of travel policies</li>
                    </ul>
                    <Alert className="mt-4 border-blue-200 bg-blue-50">
                      <AlertDescription className="text-blue-900 text-sm">
                        <strong>Pro tip:</strong> If documents are unclear, email HR asking explicitly: 
                        "If I receive flight delay compensation on a business trip, am I required to transfer it 
                        to the company?" Get a written response.
                      </AlertDescription>
                    </Alert>
                  </CardContent>
                </Card>

                <Card className="border-slate-200">
                  <CardHeader>
                    <CardTitle>Step 2: File Your Claim Properly</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-slate-700 mb-3">
                      Regardless of who ultimately keeps the money, <strong>you (the passenger) must file the claim:</strong>
                    </p>
                    <ul className="space-y-2 ml-6 text-slate-700">
                      <li>• Airlines will only accept claims from the passenger, not the company</li>
                      <li>• You'll need your booking reference, flight details, and boarding pass</li>
                      <li>• Consider using <a href="https://claimwinger.com" target="_blank" rel="noopener noreferrer" className="text-[#FF6B35] hover:underline">ClaimWinger</a> to handle airline resistance and maximize success rate</li>
                      <li>• Keep all documentation: boarding passes, delay confirmations, communications</li>
                    </ul>
                  </CardContent>
                </Card>

                <Card className="border-slate-200">
                  <CardHeader>
                    <CardTitle>Step 3: Handle Payment Correctly</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-slate-700 mb-3">
                      Once you receive compensation:
                    </p>
                    <div className="space-y-3">
                      <div>
                        <p className="font-semibold text-slate-900 mb-1">If you must transfer to company:</p>
                        <ul className="space-y-1 ml-6 text-slate-700 text-sm">
                          <li>• Follow company procedures (expense report, direct transfer, etc.)</li>
                          <li>• Document the transfer for your records</li>
                          <li>• Don't delay — most policies specify 30-60 day transfer window</li>
                        </ul>
                      </div>
                      <div>
                        <p className="font-semibold text-slate-900 mb-1">If you keep it:</p>
                        <ul className="space-y-1 ml-6 text-slate-700 text-sm">
                          <li>• No obligation to report to employer unless asked</li>
                          <li>• Generally not taxable in most EU countries</li>
                          <li>• Keep documentation in case of future audit or question</li>
                        </ul>
                      </div>
                    </div>
                  </CardContent>
                </Card>

                <Card className="border-slate-200">
                  <CardHeader>
                    <CardTitle>Step 4: What If There's a Dispute?</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-slate-700 mb-3">
                      If your company demands compensation but you believe you're entitled to keep it:
                    </p>
                    <ul className="space-y-2 ml-6 text-slate-700">
                      <li>• <strong>First step:</strong> Review all contracts and policies thoroughly</li>
                      <li>• <strong>Second step:</strong> Request clarification from HR in writing</li>
                      <li>• <strong>Third step:</strong> If no clear policy exists, politely state your position based on EU261 default</li>
                      <li>• <strong>Last resort:</strong> Seek legal advice or labor law consultation</li>
                    </ul>
                    <p className="text-slate-700 mt-4">
                      <strong>Practical reality:</strong> Most disputes are resolved through HR communication. Companies 
                      without clear policies often defer to employee retention over €250-€600 amounts.
                    </p>
                  </CardContent>
                </Card>
              </div>
            </section>

            {/* CTA 2 - Before FAQ */}
            <section className="mb-12">
              <Card className="bg-gradient-to-r from-slate-800 to-slate-700 text-white border-0">
                <CardHeader>
                  <CardTitle className="text-2xl md:text-3xl">
                    File Your Business Flight Compensation Claim
                  </CardTitle>
                  <CardDescription className="text-slate-300 text-lg">
                    Whether you're keeping the compensation or transferring it to your employer, you need to file the 
                    claim first. ClaimWinger handles the airline paperwork and ensures you get the maximum amount. 
                    No win, no fee — we only charge if your claim succeeds.
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="flex flex-col sm:flex-row gap-4">
                    <Button asChild size="lg" className="bg-[#FF6B35] hover:bg-[#FF6B35]/90">
                      <a href="https://claimwinger.com/delayed-flight" target="_blank" rel="noopener noreferrer">
                        Start Your Claim Now
                        <ArrowRight className="ml-2 h-5 w-5" />
                      </a>
                    </Button>
                    <Button asChild size="lg" variant="outline" className="border-white/30 bg-white/5 hover:bg-white/10 text-white">
                      <Link href="/en">
                        Back to Homepage
                      </Link>
                    </Button>
                  </div>
                </CardContent>
              </Card>
            </section>

            {/* FAQ Section */}
            <section className="mb-12">
              <h2 className="text-3xl font-bold text-slate-900 mb-6">
                Frequently Asked Questions
              </h2>
              
              <div className="space-y-6">
                <Card className="border-slate-200">
                  <CardHeader>
                    <CardTitle className="text-lg">
                      Who legally gets flight delay compensation on a business trip - employee or employer?
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-slate-700">
                      Under EU261, the passenger (employee) is the legal beneficiary of compensation. However, employment 
                      contracts or corporate travel policies may require employees to transfer compensation to the employer. 
                      The default legal position is that compensation belongs to the employee, but contractual obligations 
                      can override this.
                    </p>
                  </CardContent>
                </Card>

                <Card className="border-slate-200">
                  <CardHeader>
                    <CardTitle className="text-lg">
                      Can my employer force me to give them my flight delay compensation?
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-slate-700">
                      Only if it's explicitly stated in your employment contract, travel policy, or company regulations 
                      that you agreed to. Without such provisions, the compensation legally belongs to you as the passenger. 
                      Check your contract and travel policy documents.
                    </p>
                  </CardContent>
                </Card>

                <Card className="border-slate-200">
                  <CardHeader>
                    <CardTitle className="text-lg">
                      Does it matter if the company paid for the ticket?
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-slate-700">
                      No. EU261 compensation is based on passenger rights, not who purchased the ticket. The person who 
                      suffered the delay (the traveler) is entitled to compensation under EU law, regardless of payment 
                      source. However, internal company policies may still require reimbursement.
                    </p>
                  </CardContent>
                </Card>

                <Card className="border-slate-200">
                  <CardHeader>
                    <CardTitle className="text-lg">
                      What if I'm a freelancer or B2B contractor on a business trip?
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-slate-700">
                      As a freelancer or B2B contractor, you're typically entitled to keep the compensation unless your 
                      contract explicitly states otherwise. B2B contracts have more flexibility than employment contracts, 
                      so review your specific agreement with the client.
                    </p>
                  </CardContent>
                </Card>

                <Card className="border-slate-200">
                  <CardHeader>
                    <CardTitle className="text-lg">
                      Is flight delay compensation taxable for employees?
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-slate-700">
                      Tax treatment varies by country. In most EU jurisdictions, compensation received by employees for 
                      personal inconvenience is not taxable. However, if the company receives it as business income, 
                      it becomes part of taxable revenue. Consult a tax advisor for your specific situation.
                    </p>
                  </CardContent>
                </Card>

                <Card className="border-slate-200">
                  <CardHeader>
                    <CardTitle className="text-lg">
                      How should companies handle flight compensation in accounting?
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-slate-700">
                      If compensation is transferred to the company, it should be recorded as other income or an offset 
                      to travel expenses. If employees keep it, no accounting entry is needed. Companies should have 
                      clear policies documented in travel guidelines and expense reimbursement procedures.
                    </p>
                  </CardContent>
                </Card>

                <Card className="border-slate-200">
                  <CardHeader>
                    <CardTitle className="text-lg">
                      What's the best practice for companies regarding flight compensation?
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-slate-700">
                      Best practice is clear communication: document in travel policy whether employees keep compensation 
                      or transfer it to the company. Consider letting employees keep smaller amounts (under €250) and 
                      requiring transfer for larger claims (€400-€600) as a balanced approach that maintains employee 
                      goodwill while recovering significant costs.
                    </p>
                  </CardContent>
                </Card>

                <Card className="border-slate-200">
                  <CardHeader>
                    <CardTitle className="text-lg">
                      Can I use ClaimWinger to file a claim for my business flight?
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-slate-700">
                      Yes. ClaimWinger handles both personal and business travel claims. You file as the passenger, and 
                      if your company requires the compensation, you transfer it after receipt. ClaimWinger only charges 
                      a fee if your claim succeeds, making it risk-free to maximize your compensation amount.
                    </p>
                  </CardContent>
                </Card>
              </div>
            </section>

            {/* Related Articles */}
            <section>
              <h2 className="text-2xl font-bold text-slate-900 mb-6">Related Topics</h2>
              <div className="grid md:grid-cols-2 gap-6">
                <Link href="/en/delayed-business-trip" className="group">
                  <Card className="border-slate-200 hover:border-[#FF6B35]/50 hover:shadow-xl transition-all h-full">
                    <CardHeader>
                      <CardTitle className="group-hover:text-[#FF6B35] transition-colors flex items-start justify-between">
                        Delayed Business Flight Guide
                        <ArrowRight className="h-5 w-5 text-slate-400 group-hover:text-[#FF6B35] group-hover:translate-x-1 transition-all flex-shrink-0" />
                      </CardTitle>
                      <CardDescription>
                        Complete guide to handling business flight delays: rights, actions, and compensation claims.
                      </CardDescription>
                    </CardHeader>
                  </Card>
                </Link>

                <Link href="/en/cancelled-business-trip" className="group">
                  <Card className="border-slate-200 hover:border-[#FF6B35]/50 hover:shadow-xl transition-all h-full">
                    <CardHeader>
                      <CardTitle className="group-hover:text-[#FF6B35] transition-colors flex items-start justify-between">
                        Cancelled Business Flight
                        <ArrowRight className="h-5 w-5 text-slate-400 group-hover:text-[#FF6B35] group-hover:translate-x-1 transition-all flex-shrink-0" />
                      </CardTitle>
                      <CardDescription>
                        What to do when your business flight is cancelled: immediate steps and compensation rights.
                      </CardDescription>
                    </CardHeader>
                  </Card>
                </Link>

                <Link href="/en/business-flight-compensation" className="group">
                  <Card className="border-slate-200 hover:border-[#FF6B35]/50 hover:shadow-xl transition-all h-full">
                    <CardHeader>
                      <CardTitle className="group-hover:text-[#FF6B35] transition-colors flex items-start justify-between">
                        Business Flight Compensation Overview
                        <ArrowRight className="h-5 w-5 text-slate-400 group-hover:text-[#FF6B35] group-hover:translate-x-1 transition-all flex-shrink-0" />
                      </CardTitle>
                      <CardDescription>
                        Overview of flight compensation rights for corporate travelers and business trips.
                      </CardDescription>
                    </CardHeader>
                  </Card>
                </Link>

                <Link href="/en/articles" className="group">
                  <Card className="border-slate-200 hover:border-[#FF6B35]/50 hover:shadow-xl transition-all h-full">
                    <CardHeader>
                      <CardTitle className="group-hover:text-[#FF6B35] transition-colors flex items-start justify-between">
                        All Articles
                        <ArrowRight className="h-5 w-5 text-slate-400 group-hover:text-[#FF6B35] group-hover:translate-x-1 transition-all flex-shrink-0" />
                      </CardTitle>
                      <CardDescription>
                        Browse all business travel articles, guides, and resources.
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
