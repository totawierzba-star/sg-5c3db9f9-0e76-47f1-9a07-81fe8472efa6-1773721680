import { SEO } from "@/components/SEO";
import Link from "next/link";
import { Briefcase, Building2, ArrowRight, CheckCircle2, AlertCircle, FileText, Scale, Users, Shield } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert";

export default function EmployerCompensation() {
  const structuredData = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "Article",
        "headline": "Employer & Flight Compensation – Can Your Company Claim Your Money?",
        "description": "Can your employer demand that you return flight compensation from a business trip? Legal analysis of employee-employer relationship under EU Regulation 261/2004.",
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
          "@id": "https://bizneslot.info/en/employer-compensation"
        }
      },
      {
        "@type": "FAQPage",
        "mainEntity": [
          {
            "@type": "Question",
            "name": "Can my employer demand I return flight compensation?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "No. EU Regulation 261/2004 has direct effect and takes precedence over company internal regulations and employment contracts. Your employer cannot effectively revoke rights granted to you under European law. Compensation belongs to the passenger, not the company."
            }
          },
          {
            "@type": "Question",
            "name": "What if my company deducted compensation from my salary?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "This is an unlawful deduction. You can demand immediate reimbursement. If the company refuses, consult with a lawyer and consider reporting to labor authorities and employment tribunal."
            }
          },
          {
            "@type": "Question",
            "name": "Is a company policy requiring compensation return valid?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "No. Such a clause contradicts superior EU law and is therefore void. Even if you signed a policy with this clause, you are not legally obligated to comply."
            }
          },
          {
            "@type": "Question",
            "name": "Must I inform my company about filing a claim?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "Legally no. This is a personal matter between you and the airline. In practice, transparency may prevent future misunderstandings. You can inform HR about the claim without providing specific details."
            }
          },
          {
            "@type": "Question",
            "name": "What can and cannot my employer do regarding compensation?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "Employer CAN: request information about the claim, ask about delay circumstances, settle additional business trip costs. Employer CANNOT: demand compensation return, prohibit filing claims, deduct amounts from salary, apply disciplinary sanctions for not returning money."
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
            "name": "Employer & Compensation",
            "item": "https://bizneslot.info/en/employer-compensation"
          }
        ]
      }
    ]
  };

  return (
    <>
      <SEO 
        title="Employer & Flight Compensation – Your Rights as Employee | BusinessFlight"
        description="Can your employer demand that you return flight compensation from a business trip? Legal analysis of employee-employer relationship under EU Regulation 261/2004."
        url="https://bizneslot.info/en/employer-compensation"
      />
      
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
      />
      
      <div className="min-h-screen bg-white py-20 overflow-hidden">
        {/* Hero Section */}
        <section className="py-16 px-4 bg-slate-900 text-white -mt-20">
          <div className="container mx-auto max-w-4xl pt-20">
            <div className="flex items-center gap-2 text-slate-300 text-sm mb-4">
              <Link href="/en" className="hover:text-white transition-colors">BusinessFlight.info</Link>
              <span>/</span>
              <span>Employer & Compensation</span>
            </div>
            <h1 className="text-4xl md:text-5xl font-bold mb-6 leading-tight">
              Employer & Flight Compensation – Your Rights as Employee
            </h1>
            <p className="text-xl text-slate-300 leading-relaxed">
              Must you return compensation to your company? What does employment law and European law say? 
              Detailed legal analysis for employees traveling on business.
            </p>
          </div>
        </section>

        {/* Main Content */}
        <article className="py-16 px-4 bg-white">
          <div className="container mx-auto max-w-4xl">
            
            {/* Key Takeaway */}
            <Alert className="mb-12 border-slate-700 bg-slate-50">
              <Scale className="h-5 w-5 text-slate-700" />
              <AlertTitle className="text-lg font-bold text-slate-900">
                Fundamental Legal Principle
              </AlertTitle>
              <AlertDescription className="text-slate-700 text-base mt-2">
                EU Regulation 261/2004 has <strong>direct effect</strong> and takes precedence over 
                company internal regulations and employment contracts. Your employer <strong>cannot 
                effectively revoke</strong> rights granted to you under European law.
              </AlertDescription>
            </Alert>

            {/* Section 1 */}
            <section className="mb-12">
              <h2 className="text-3xl font-bold text-slate-900 mb-6">
                Hierarchy of Legal Sources – Why EU Law Beats Company Policy
              </h2>
              
              <div className="prose prose-slate max-w-none mb-6">
                <p className="text-lg text-slate-700 leading-relaxed">
                  Understanding the hierarchy of legal acts is crucial to comprehending why no company 
                  can effectively block an employee's right to compensation.
                </p>
              </div>

              <Card className="border-slate-200 mb-6">
                <CardHeader>
                  <CardTitle className="text-xl">Legal Sources Pyramid</CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="border-l-4 border-l-blue-600 pl-4 bg-blue-50 py-3">
                    <h4 className="font-bold text-blue-900 mb-1">1. National Constitution</h4>
                    <p className="text-sm text-blue-800">Supreme law of the land</p>
                  </div>
                  
                  <div className="border-l-4 border-l-blue-500 pl-4 bg-blue-50 py-3">
                    <h4 className="font-bold text-blue-900 mb-1">2. European Union Law</h4>
                    <p className="text-sm text-blue-800">
                      <strong>EU Regulation 261/2004</strong> – direct effect, 
                      takes precedence over national law
                    </p>
                  </div>
                  
                  <div className="border-l-4 border-l-slate-400 pl-4 bg-slate-50 py-3">
                    <h4 className="font-bold text-slate-700 mb-1">3. National Statutes</h4>
                    <p className="text-sm text-slate-600">Employment law, aviation law</p>
                  </div>
                  
                  <div className="border-l-4 border-l-slate-300 pl-4 bg-slate-50 py-3">
                    <h4 className="font-bold text-slate-700 mb-1">4. Implementing Regulations</h4>
                    <p className="text-sm text-slate-600">Secondary legislation</p>
                  </div>
                  
                  <div className="border-l-4 border-l-slate-200 pl-4 bg-slate-50 py-3">
                    <h4 className="font-bold text-slate-700 mb-1">5. Employment Contract</h4>
                    <p className="text-sm text-slate-600">Individual employment terms</p>
                  </div>
                  
                  <div className="border-l-4 border-l-slate-100 pl-4 bg-slate-50 py-3">
                    <h4 className="font-bold text-slate-700 mb-1">6. Company Policy/Handbook</h4>
                    <p className="text-sm text-slate-600">Internal company rules</p>
                  </div>
                </CardContent>
              </Card>

              <Alert className="border-blue-200 bg-blue-50">
                <CheckCircle2 className="h-5 w-5 text-blue-700" />
                <AlertDescription className="text-blue-900">
                  <strong>Key conclusion:</strong> EU Regulation 261/2004 ranks higher in the hierarchy 
                  than employment contracts and company policies. Company provisions contradicting 
                  EU law are <strong>void and unenforceable</strong>.
                </AlertDescription>
              </Alert>
            </section>

            {/* Section 2 */}
            <section className="mb-12">
              <h2 className="text-3xl font-bold text-slate-900 mb-6">
                What Does "Direct Effect" of EU Regulation Mean?
              </h2>
              
              <Card className="border-slate-200 mb-6">
                <CardHeader>
                  <CardTitle className="text-xl">Specifics of EU Regulations</CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <p className="text-slate-700">
                    EU Regulations (unlike Directives) have so-called <strong>direct effect</strong> 
                    (also called <em>direct applicability</em>). This means:
                  </p>
                  <ul className="space-y-2 ml-6 text-slate-700">
                    <li className="flex items-start gap-2">
                      <CheckCircle2 className="h-5 w-5 text-slate-600 flex-shrink-0 mt-0.5" />
                      <span>Apply automatically in all EU member states</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle2 className="h-5 w-5 text-slate-600 flex-shrink-0 mt-0.5" />
                      <span>Do not require implementation into national law</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle2 className="h-5 w-5 text-slate-600 flex-shrink-0 mt-0.5" />
                      <span>Take precedence over conflicting national provisions</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle2 className="h-5 w-5 text-slate-600 flex-shrink-0 mt-0.5" />
                      <span>Any citizen can invoke them directly</span>
                    </li>
                  </ul>
                  <div className="bg-slate-50 border border-slate-200 rounded-lg p-4 mt-4">
                    <h4 className="font-semibold text-slate-900 mb-2">In practice this means:</h4>
                    <p className="text-slate-700">
                      As an employee on a business flight, you can invoke provisions of EU Regulation 
                      261/2004 directly against the airline <strong>and against your employer</strong>. 
                      You don't need to find basis in national statute or employment contract.
                    </p>
                  </div>
                </CardContent>
              </Card>
            </section>

            {/* Section 3 */}
            <section className="mb-12">
              <h2 className="text-3xl font-bold text-slate-900 mb-6">
                Company Policy Requiring Compensation Return – Is It Valid?
              </h2>
              
              <Card className="border-red-200 bg-red-50 mb-6">
                <CardHeader>
                  <CardTitle className="text-xl text-red-900">Typical Policy Clause</CardTitle>
                </CardHeader>
                <CardContent className="space-y-3">
                  <div className="bg-white border border-red-200 rounded-lg p-4">
                    <p className="text-slate-900 italic">
                      "Employee agrees to transfer to the Employer all amounts received from the carrier 
                      as compensation for a flight paid for by the Employer."
                    </p>
                  </div>
                  <Alert className="border-red-300 bg-red-100">
                    <AlertCircle className="h-5 w-5 text-red-700" />
                    <AlertDescription className="text-red-900">
                      <strong>Legal assessment:</strong> Such a clause contradicts superior EU law 
                      and therefore <strong>has no legal effect</strong>. It is void by operation of law.
                    </AlertDescription>
                  </Alert>
                </CardContent>
              </Card>

              <Card className="border-slate-200">
                <CardHeader>
                  <CardTitle className="text-xl">Why Is Such a Clause Void?</CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="space-y-3">
                    <div className="border-l-4 border-l-slate-700 pl-4">
                      <h4 className="font-semibold text-slate-900 mb-2">1. Contradicts EU Law</h4>
                      <p className="text-slate-700">
                        Regulation 261/2004 grants the right to compensation to the <strong>passenger</strong>. 
                        An attempt to revoke this right through company policy is inadmissible.
                      </p>
                    </div>

                    <div className="border-l-4 border-l-slate-700 pl-4">
                      <h4 className="font-semibold text-slate-900 mb-2">2. Purpose of Compensation</h4>
                      <p className="text-slate-700">
                        Compensation has a personal character – it compensates for <strong>loss of time 
                        and inconvenience</strong> suffered by the traveling person. The employer did not 
                        suffer this inconvenience.
                      </p>
                    </div>

                    <div className="border-l-4 border-l-slate-700 pl-4">
                      <h4 className="font-semibold text-slate-900 mb-2">3. Principle of EU Law Supremacy</h4>
                      <p className="text-slate-700">
                        According to ECJ case law, national provisions (much less internal policies) 
                        cannot limit the effectiveness of EU law.
                      </p>
                    </div>
                  </div>

                  <Alert className="border-slate-700 bg-slate-50 mt-4">
                    <Shield className="h-5 w-5 text-slate-700" />
                    <AlertDescription className="text-slate-700">
                      <strong>For employees:</strong> Even if you signed a policy with such a clause, 
                      you are not legally obligated to return compensation. The clause is void and unenforceable.
                    </AlertDescription>
                  </Alert>
                </CardContent>
              </Card>
            </section>

            {/* Section 4 */}
            <section className="mb-12">
              <h2 className="text-3xl font-bold text-slate-900 mb-6">
                What Can and Cannot Your Employer Do?
              </h2>
              
              <div className="grid md:grid-cols-2 gap-6 mb-6">
                <Card className="border-green-200 bg-green-50">
                  <CardHeader>
                    <CardTitle className="text-lg text-green-900 flex items-center gap-2">
                      <CheckCircle2 className="h-5 w-5" />
                      What Employer CAN Do
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <ul className="space-y-3 text-green-900">
                      <li className="flex items-start gap-2">
                        <CheckCircle2 className="h-5 w-5 flex-shrink-0 mt-0.5" />
                        <span>Request information about claim (for internal documentation)</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <CheckCircle2 className="h-5 w-5 flex-shrink-0 mt-0.5" />
                        <span>Ask about delay/cancellation circumstances (for process improvement)</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <CheckCircle2 className="h-5 w-5 flex-shrink-0 mt-0.5" />
                        <span>Settle additional business trip costs resulting from disruption</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <CheckCircle2 className="h-5 w-5 flex-shrink-0 mt-0.5" />
                        <span>File own claim for ticket refund (if airline failed to transport)</span>
                      </li>
                    </ul>
                  </CardContent>
                </Card>

                <Card className="border-red-200 bg-red-50">
                  <CardHeader>
                    <CardTitle className="text-lg text-red-900 flex items-center gap-2">
                      <AlertCircle className="h-5 w-5" />
                      What Employer CANNOT Do
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <ul className="space-y-3 text-red-900">
                      <li className="flex items-start gap-2">
                        <AlertCircle className="h-5 w-5 flex-shrink-0 mt-0.5" />
                        <span>Demand return of compensation received by employee</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <AlertCircle className="h-5 w-5 flex-shrink-0 mt-0.5" />
                        <span>Prohibit employee from filing claim</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <AlertCircle className="h-5 w-5 flex-shrink-0 mt-0.5" />
                        <span>Require transfer of power of attorney for claim</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <AlertCircle className="h-5 w-5 flex-shrink-0 mt-0.5" />
                        <span>Deduct compensation amount from salary</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <AlertCircle className="h-5 w-5 flex-shrink-0 mt-0.5" />
                        <span>Apply disciplinary sanctions for not returning money</span>
                      </li>
                    </ul>
                  </CardContent>
                </Card>
              </div>

              <Alert className="border-blue-200 bg-blue-50">
                <FileText className="h-5 w-5 text-blue-700" />
                <AlertDescription className="text-blue-900">
                  <strong>Legal warning:</strong> An attempt by employer to force return (e.g., through 
                  threats, salary deductions, negative consequences) may constitute violation of employee 
                  rights and be grounds for complaint to labor authorities.
                </AlertDescription>
              </Alert>
            </section>

            {/* Section 5 */}
            <section className="mb-12">
              <h2 className="text-3xl font-bold text-slate-900 mb-6">
                Practical Scenarios – How to Respond?
              </h2>
              
              <div className="space-y-6">
                <Card className="border-slate-200">
                  <CardHeader>
                    <CardTitle className="text-lg">Scenario 1: HR Requests Compensation Return</CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-3">
                    <p className="text-slate-700">
                      <strong>Situation:</strong> You received €250 compensation for delayed business flight. 
                      HR sends email requesting transfer to company account.
                    </p>
                    <div className="bg-green-50 border border-green-200 rounded-lg p-4">
                      <h4 className="font-semibold text-green-900 mb-2">Recommended response:</h4>
                      <p className="text-green-800 mb-3">
                        Politely but firmly decline, invoking European law:
                      </p>
                      <div className="bg-white border border-green-300 rounded p-3 text-sm text-slate-700 italic">
                        "Thank you for your message. Compensation from the airline belongs to me as the 
                        passenger under EU Regulation 261/2004. These provisions have direct effect and 
                        take precedence over internal regulations. For this reason, I cannot transfer 
                        the received amount."
                      </div>
                    </div>
                    <p className="text-slate-700 text-sm">
                      You can attach a link to this article as educational material for HR.
                    </p>
                  </CardContent>
                </Card>

                <Card className="border-slate-200">
                  <CardHeader>
                    <CardTitle className="text-lg">Scenario 2: Policy Requires Signing Statement</CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-3">
                    <p className="text-slate-700">
                      <strong>Situation:</strong> Before business trip, you must sign statement committing 
                      to return any compensation to the company.
                    </p>
                    <div className="bg-blue-50 border border-blue-200 rounded-lg p-4">
                      <h4 className="font-semibold text-blue-900 mb-2">Recommended action:</h4>
                      <ul className="space-y-2 text-blue-800">
                        <li className="flex items-start gap-2">
                          <span className="font-bold">1.</span>
                          <span>You can sign – such statement is legally void (contradicts EU law)</span>
                        </li>
                        <li className="flex items-start gap-2">
                          <span className="font-bold">2.</span>
                          <span>You can refuse – invoking contradiction with European law</span>
                        </li>
                        <li className="flex items-start gap-2">
                          <span className="font-bold">3.</span>
                          <span>You can sign with reservation: "Signed subject to compliance with EU 261/2004"</span>
                        </li>
                      </ul>
                    </div>
                    <p className="text-slate-700 font-medium">
                      <strong>Conclusion:</strong> Regardless of signature, such statement has no legal force. 
                      You are not bound by it.
                    </p>
                  </CardContent>
                </Card>

                <Card className="border-slate-200">
                  <CardHeader>
                    <CardTitle className="text-lg">Scenario 3: Company Threatens Consequences</CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-3">
                    <p className="text-slate-700">
                      <strong>Situation:</strong> Manager suggests that failure to return compensation 
                      may affect performance review or future business trips.
                    </p>
                    <Alert className="border-red-300 bg-red-50">
                      <AlertCircle className="h-5 w-5 text-red-700" />
                      <AlertDescription className="text-red-900">
                        <strong>This is serious violation of employee rights!</strong> Such situation 
                        requires decisive response.
                      </AlertDescription>
                    </Alert>
                    <div className="bg-slate-50 border border-slate-200 rounded-lg p-4 mt-3">
                      <h4 className="font-semibold text-slate-900 mb-2">Recommended steps:</h4>
                      <ol className="space-y-2 text-slate-700 ml-4">
                        <li>1. Document the situation (save/preserve correspondence)</li>
                        <li>2. Report to compliance/ethics department (if exists)</li>
                        <li>3. Consult with employment lawyer</li>
                        <li>4. Consider reporting to labor authorities</li>
                      </ol>
                    </div>
                  </CardContent>
                </Card>

                <Card className="border-slate-200">
                  <CardHeader>
                    <CardTitle className="text-lg">Scenario 4: Company Proposes 50/50 "Compromise"</CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-3">
                    <p className="text-slate-700">
                      <strong>Situation:</strong> HR proposes splitting compensation: you keep half, 
                      transfer half to company.
                    </p>
                    <div className="bg-slate-50 border border-slate-200 rounded-lg p-4">
                      <p className="text-slate-700 mb-2">
                        <strong>Legal assessment:</strong> You have full right to entire amount. Accepting 
                        compromise is your free decision, but does not arise from any legal obligation.
                      </p>
                      <p className="text-slate-700">
                        <strong>If accepting compromise:</strong> Do so consciously, understanding 
                        this is voluntary gesture, not obligation. Don't create precedent for future cases.
                      </p>
                    </div>
                  </CardContent>
                </Card>
              </div>
            </section>

            {/* Section 6 */}
            <section className="mb-12">
              <h2 className="text-3xl font-bold text-slate-900 mb-6">
                Case Law and Legal Interpretations
              </h2>
              
              <Card className="border-slate-200 mb-6">
                <CardHeader>
                  <CardTitle className="text-xl">European Court of Justice Position</CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <p className="text-slate-700">
                    The ECJ has repeatedly emphasized that:
                  </p>
                  <ul className="space-y-2 ml-6 text-slate-700">
                    <li className="flex items-start gap-2">
                      <CheckCircle2 className="h-5 w-5 text-slate-600 flex-shrink-0 mt-0.5" />
                      <span>
                        The purpose of Regulation 261/2004 is <strong>protection of passengers</strong> as 
                        the weaker party in relation to carrier
                      </span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle2 className="h-5 w-5 text-slate-600 flex-shrink-0 mt-0.5" />
                      <span>
                        The right to compensation has a <strong>personal and inalienable</strong> character
                      </span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle2 className="h-5 w-5 text-slate-600 flex-shrink-0 mt-0.5" />
                      <span>
                        Member states and private entities <strong>cannot limit</strong> the effectiveness 
                        of the regulation's provisions
                      </span>
                    </li>
                  </ul>
                  <Alert className="border-blue-200 bg-blue-50 mt-4">
                    <FileText className="h-5 w-5 text-blue-700" />
                    <AlertDescription className="text-blue-900">
                      <strong>Key ruling:</strong> In case C-344/04, the Court held that a passenger 
                      cannot waive their rights under the regulation. This means even voluntary waiver 
                      (e.g., in company policy) is void.
                    </AlertDescription>
                  </Alert>
                </CardContent>
              </Card>

              <Card className="border-slate-200">
                <CardHeader>
                  <CardTitle className="text-xl">Position of National Courts</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-slate-700 mb-3">
                    Employment tribunals consistently recognize that:
                  </p>
                  <ul className="space-y-2 ml-6 text-slate-700">
                    <li>• EU law takes precedence over national employment law</li>
                    <li>• Internal policies cannot limit rights under EU law</li>
                    <li>• Employee is the party entitled to flight compensation</li>
                    <li>• Deduction of compensation from salary is unlawful</li>
                  </ul>
                </CardContent>
              </Card>
            </section>

            {/* Section 7 */}
            <section className="mb-12">
              <h2 className="text-3xl font-bold text-slate-900 mb-6">
                Employee FAQs
              </h2>
              
              <div className="space-y-6">
                <Card className="border-slate-200">
                  <CardHeader>
                    <CardTitle className="text-lg">
                      Must I inform my company about filing a claim?
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-slate-700">
                      Legally no. This is a personal matter between you and the airline. 
                      In practice, transparency may prevent future misunderstandings. 
                      You can inform HR about the claim without providing specific details.
                    </p>
                  </CardContent>
                </Card>

                <Card className="border-slate-200">
                  <CardHeader>
                    <CardTitle className="text-lg">
                      What if my company already deducted compensation from my salary?
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-slate-700">
                      This is unlawful deduction. You can demand immediate reimbursement. 
                      If company refuses, consult with lawyer and consider reporting to 
                      labor authorities and employment tribunal.
                    </p>
                  </CardContent>
                </Card>

                <Card className="border-slate-200">
                  <CardHeader>
                    <CardTitle className="text-lg">
                      Can my company change policy going forward?
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-slate-700">
                      Company can change policy, but cannot effectively revoke rights 
                      under EU law. New policy with compensation return clause 
                      will be equally void as previous one.
                    </p>
                  </CardContent>
                </Card>

                <Card className="border-slate-200">
                  <CardHeader>
                    <CardTitle className="text-lg">
                      What if I want to voluntarily give compensation to company?
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-slate-700">
                      This is your decision. You can voluntarily transfer money to employer. 
                      Remember however this is gesture of goodwill, not legal obligation. Don't create 
                      precedent for other employees or future cases.
                    </p>
                  </CardContent>
                </Card>

                <Card className="border-slate-200">
                  <CardHeader>
                    <CardTitle className="text-lg">
                      Where can I check if I'm entitled to compensation?
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-slate-700">
                      If your business flight was delayed or cancelled, you can 
                      <a href="https://claimwinger.com/delayed-flight" className="text-slate-900 underline hover:text-slate-700 mx-1" target="_blank" rel="noopener noreferrer">
                        check your rights online
                      </a>
                      in a few minutes. Regardless of outcome, remember: any compensation 
                      belongs to you, not the company.
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
                    Regardless of employer's position, you have right to compensation as passenger. 
                    Check if you're entitled to €250-€600 compensation.
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
              <h2 className="text-2xl font-bold text-slate-900 mb-6">Related Topics</h2>
              <div className="grid md:grid-cols-2 gap-6">
                <Link href="/en/business-ticket-rights" className="group">
                  <Card className="border-slate-200 hover:border-slate-400 transition-all h-full">
                    <CardHeader>
                      <CardTitle className="group-hover:text-slate-700 transition-colors flex items-start justify-between">
                        Corporate Ticket Rights
                        <ArrowRight className="h-5 w-5 text-slate-400 group-hover:text-slate-700 group-hover:translate-x-1 transition-all flex-shrink-0" />
                      </CardTitle>
                      <CardDescription>
                        Does the fact that company buys ticket change your rights as passenger?
                      </CardDescription>
                    </CardHeader>
                  </Card>
                </Link>

                <Link href="/en/business-flight-compensation" className="group">
                  <Card className="border-slate-200 hover:border-slate-400 transition-all h-full">
                    <CardHeader>
                      <CardTitle className="group-hover:text-slate-700 transition-colors flex items-start justify-between">
                        Business Flight Compensation
                        <ArrowRight className="h-5 w-5 text-slate-400 group-hover:text-slate-700 group-hover:translate-x-1 transition-all flex-shrink-0" />
                      </CardTitle>
                      <CardDescription>
                        Legal basis: who is entitled to compensation and what amounts?
                      </CardDescription>
                    </CardHeader>
                  </Card>
                </Link>
              </div>
            </section>

          </div>
        </article>

        {/* Footer */}
        <footer className="bg-slate-900 text-white py-12">
          <div className="container mx-auto px-4">
            <div className="grid md:grid-cols-4 gap-8 mb-8">
              <div>
                <h3 className="font-bold text-lg mb-4 flex items-center gap-2">
                  <img src="/bizneslotlogotyp.png" alt="BusinessFlight.info" className="h-6 w-auto" />
                  BusinessFlight.info
                </h3>
                <p className="text-sm text-slate-400">
                  Educational portal about passenger rights in business travel.
                </p>
              </div>
              
              <div>
                <h3 className="font-semibold text-white mb-4">Topics</h3>
                <ul className="space-y-2">
                  <li>
                    <Link href="/en/business-flight-compensation" className="text-sm text-slate-400 hover:text-white">
                      Business Flight Compensation
                    </Link>
                  </li>
                  <li>
                    <Link href="/en/cancelled-business-trip" className="text-sm text-slate-400 hover:text-white">
                      Cancelled Flight
                    </Link>
                  </li>
                  <li>
                    <Link href="/en/delayed-business-trip" className="text-sm text-slate-400 hover:text-white">
                      Delayed Flight
                    </Link>
                  </li>
                </ul>
              </div>
              
              <div>
                <h3 className="font-semibold text-white mb-4">More</h3>
                <ul className="space-y-2">
                  <li>
                    <Link href="/en/business-ticket-rights" className="text-sm text-slate-400 hover:text-white">
                      Corporate Ticket
                    </Link>
                  </li>
                  <li>
                    <Link href="/en/employer-compensation" className="hover:text-white transition-colors">
                      Employer & Compensation
                    </Link>
                  </li>
                  <li>
                    <Link href="/en/articles" className="hover:text-white transition-colors">
                      Articles
                    </Link>
                  </li>
                  <li>
                    <Link href="/en/about" className="hover:text-white transition-colors">
                      About
                    </Link>
                  </li>
                </ul>
              </div>
              
              <div>
                <h3 className="font-semibold text-white mb-4">Check Compensation</h3>
                <p className="text-sm text-slate-400 mb-3">
                  We use ClaimWinger services to verify entitlements.
                </p>
                <Button asChild variant="outline" size="sm">
                  <a href="https://claimwinger.com" target="_blank" rel="noopener noreferrer">
                    ClaimWinger.com
                  </a>
                </Button>
              </div>
            </div>
            
            <div className="border-t border-slate-800 mt-8 pt-8 text-center text-sm text-slate-400">
              <p>© 2026 BusinessFlight.info. Educational portal about passenger rights in business travel.</p>
            </div>
          </div>
        </footer>
      </div>
    </>
  );
}
