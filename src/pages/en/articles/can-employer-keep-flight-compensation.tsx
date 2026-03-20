import { SEO } from "@/components/SEO";
import Link from "next/link";
import { Scale, AlertTriangle, CheckCircle, XCircle, Briefcase, FileText, Users, Clock } from "lucide-react";

export default function CanEmployerKeepFlightCompensation() {
  return (
    <>
      <SEO
        title="Can Your Employer Keep Your Flight Delay Compensation? Legal Rights Explained"
        description="Can your company legally keep your €600 flight compensation? Complete guide to employee rights, employer policies, and legal frameworks across Europe and UK."
        image="/og-image.png"
        url="https://bizneslot.com/en/articles/can-employer-keep-flight-compensation"
      />

      <div className="min-h-screen bg-gradient-to-b from-slate-50 to-white dark:from-slate-950 dark:to-slate-900">
        <article className="container mx-auto px-4 py-12 max-w-4xl">
          
          {/* Breadcrumbs */}
          <nav className="mb-8 text-sm text-slate-600 dark:text-slate-400">
            <Link href="/en" className="hover:text-blue-600 dark:hover:text-blue-400">Home</Link>
            <span className="mx-2">/</span>
            <Link href="/en/articles" className="hover:text-blue-600 dark:hover:text-blue-400">Articles</Link>
            <span className="mx-2">/</span>
            <span className="text-slate-900 dark:text-slate-100">Can Employer Keep Compensation</span>
          </nav>

          {/* Article Header */}
          <header className="mb-12">
            <div className="flex items-center gap-2 text-blue-600 dark:text-blue-400 mb-4">
              <Scale className="w-5 h-5" />
              <span className="text-sm font-semibold uppercase tracking-wide">Employee Rights</span>
            </div>
            <h1 className="text-4xl md:text-5xl font-bold text-slate-900 dark:text-white mb-6 leading-tight">
              Can Your Employer Keep Your Flight Delay Compensation?
            </h1>
            <p className="text-xl text-slate-600 dark:text-slate-300 leading-relaxed">
              Your flight was delayed 5 hours. You suffered the inconvenience. But can your company legally keep the €600 compensation? Here's what the law actually says.
            </p>
            <div className="flex items-center gap-4 mt-6 text-sm text-slate-500 dark:text-slate-400">
              <time dateTime="2025-01-15">January 15, 2025</time>
              <span>•</span>
              <span>12 min read</span>
            </div>
          </header>

          {/* Schema.org structured data */}
          <script
            type="application/ld+json"
            dangerouslySetInnerHTML={{
              __html: JSON.stringify({
                "@context": "https://schema.org",
                "@type": "Article",
                "headline": "Can Your Employer Keep Your Flight Delay Compensation? Legal Rights Explained",
                "description": "Can your company legally keep your €600 flight compensation? Complete guide to employee rights, employer policies, and legal frameworks across Europe and UK.",
                "author": {
                  "@type": "Person",
                  "name": "Bizneslot Editorial Team"
                },
                "publisher": {
                  "@type": "Organization",
                  "name": "Bizneslot",
                  "logo": {
                    "@type": "ImageObject",
                    "url": "https://bizneslot.com/bizneslotlogotyp.png"
                  }
                },
                "datePublished": "2025-01-15",
                "dateModified": "2025-01-15",
                "mainEntityOfPage": {
                  "@type": "WebPage",
                  "@id": "https://bizneslot.com/en/articles/can-employer-keep-flight-compensation"
                },
                "image": "https://bizneslot.com/og-image.png"
              })
            }}
          />

          {/* Article Content */}
          <div className="prose prose-lg dark:prose-invert max-w-none">

            {/* Introduction */}
            <section className="mb-12">
              <p className="text-lg leading-relaxed text-slate-700 dark:text-slate-300">
                You're returning from a business trip. Your flight is delayed 6 hours. You arrive exhausted at 2 AM instead of 8 PM. Under <Link href="/en/articles/eu261-compensation-business-flights-guide" className="text-blue-600 hover:text-blue-700 dark:text-blue-400 dark:hover:text-blue-300 font-medium">EU261 regulations</Link>, you're entitled to €600 compensation.
              </p>
              <p className="text-lg leading-relaxed text-slate-700 dark:text-slate-300">
                But here's the question thousands of business travelers ask: <strong>Can my employer keep this money?</strong>
              </p>
              <p className="text-lg leading-relaxed text-slate-700 dark:text-slate-300">
                The answer is more nuanced than you might think — and it depends on your employment contract, company policy, and local labor law.
              </p>
            </section>

            {/* CTA 1 - After Introduction */}
            <div className="my-12 p-8 bg-gradient-to-br from-blue-50 to-indigo-50 dark:from-blue-950/30 dark:to-indigo-950/30 rounded-2xl border border-blue-100 dark:border-blue-900">
              <div className="flex items-start gap-4">
                <div className="flex-shrink-0">
                  <CheckCircle className="w-8 h-8 text-blue-600 dark:text-blue-400" />
                </div>
                <div>
                  <h3 className="text-xl font-bold text-slate-900 dark:text-white mb-3">
                    Claim Your €600 Compensation — It's Your Right
                  </h3>
                  <p className="text-slate-700 dark:text-slate-300 mb-4">
                    Don't let uncertainty stop you. File your claim with ClaimWinger and get expert guidance on who legally owns your compensation.
                  </p>
                  <Link
                    href="https://claimwinger.com/delayed-flight"
                    className="inline-flex items-center gap-2 bg-blue-600 hover:bg-blue-700 text-white font-semibold px-6 py-3 rounded-lg transition-colors"
                  >
                    Check Your Compensation
                    <span className="text-xl">→</span>
                  </Link>
                </div>
              </div>
            </div>

            {/* Quick Legal Answer */}
            <div className="my-12 p-6 bg-amber-50 dark:bg-amber-950/20 border-l-4 border-amber-500 rounded-r-lg">
              <div className="flex items-start gap-3">
                <AlertTriangle className="w-6 h-6 text-amber-600 dark:text-amber-400 flex-shrink-0 mt-1" />
                <div>
                  <h3 className="font-bold text-slate-900 dark:text-white mb-2">Quick Legal Answer</h3>
                  <p className="text-slate-700 dark:text-slate-300">
                    <strong>In most EU jurisdictions: NO, your employer cannot automatically keep your compensation.</strong> EU261 grants rights to the <em>passenger</em> — the person who suffered the delay. However, your employment contract or company travel policy may contain clauses that assign compensation to the employer. Such clauses are legally enforceable in some countries (UK, Germany, Netherlands) but may be void or limited in others (France, Italy, Poland).
                  </p>
                </div>
              </div>
            </div>

            {/* Section 1: The Legal Foundation */}
            <section className="mb-12">
              <h2 className="text-3xl font-bold text-slate-900 dark:text-white mb-6 flex items-center gap-3">
                <Scale className="w-8 h-8 text-blue-600 dark:text-blue-400" />
                The Legal Foundation: Who Does EU261 Protect?
              </h2>
              
              <p className="text-lg leading-relaxed text-slate-700 dark:text-slate-300 mb-6">
                EU Regulation 261/2004 clearly states that compensation rights belong to <strong>"passengers"</strong> — the individuals who experienced the flight disruption. The regulation makes no distinction between leisure and business travel.
              </p>

              <div className="bg-slate-50 dark:bg-slate-900 rounded-xl p-6 mb-6">
                <h3 className="font-bold text-slate-900 dark:text-white mb-4">Key Legal Principle:</h3>
                <blockquote className="border-l-4 border-blue-500 pl-4 italic text-slate-700 dark:text-slate-300">
                  "The right to compensation is a <strong>personal right</strong> of the passenger, designed to compensate for the time loss and inconvenience <em>they</em> personally suffered."
                </blockquote>
                <p className="text-sm text-slate-600 dark:text-slate-400 mt-3">
                  — European Court of Justice Case C-549/07
                </p>
              </div>

              <p className="text-lg leading-relaxed text-slate-700 dark:text-slate-300">
                This means that <strong>by default</strong>, the compensation belongs to you — the employee who was delayed — not to the company that paid for the ticket.
              </p>
            </section>

            {/* Section 2: When Can Employers Keep It? */}
            <section className="mb-12">
              <h2 className="text-3xl font-bold text-slate-900 dark:text-white mb-6 flex items-center gap-3">
                <FileText className="w-8 h-8 text-blue-600 dark:text-blue-400" />
                When Can Employers Legally Keep the Compensation?
              </h2>

              <p className="text-lg leading-relaxed text-slate-700 dark:text-slate-300 mb-6">
                While EU261 grants rights to passengers, <strong>employment law allows companies to include contractual clauses</strong> that reassign compensation rights to the employer.
              </p>

              <h3 className="text-2xl font-bold text-slate-900 dark:text-white mb-4 mt-8">Scenario 1: Explicit Contractual Assignment</h3>
              
              <div className="bg-green-50 dark:bg-green-950/20 border border-green-200 dark:border-green-900 rounded-xl p-6 mb-6">
                <div className="flex items-start gap-3">
                  <CheckCircle className="w-6 h-6 text-green-600 dark:text-green-400 flex-shrink-0 mt-1" />
                  <div>
                    <p className="font-semibold text-slate-900 dark:text-white mb-2">✅ Legally Enforceable (in most countries)</p>
                    <p className="text-slate-700 dark:text-slate-300">
                      Your employment contract or company travel policy explicitly states: <em>"Any flight delay compensation arising from business travel shall be the property of the Company."</em>
                    </p>
                    <p className="text-sm text-slate-600 dark:text-slate-400 mt-3">
                      <strong>Legal basis:</strong> Freedom of contract. You agreed to this term when you signed your employment contract.
                    </p>
                  </div>
                </div>
              </div>

              <h3 className="text-2xl font-bold text-slate-900 dark:text-white mb-4 mt-8">Scenario 2: Implied Company Ownership</h3>

              <div className="bg-red-50 dark:bg-red-950/20 border border-red-200 dark:border-red-900 rounded-xl p-6 mb-6">
                <div className="flex items-start gap-3">
                  <XCircle className="w-6 h-6 text-red-600 dark:text-red-400 flex-shrink-0 mt-1" />
                  <div>
                    <p className="font-semibold text-slate-900 dark:text-white mb-2">❌ Usually NOT Enforceable</p>
                    <p className="text-slate-700 dark:text-slate-300">
                      Your employer says: <em>"We paid for the ticket, so the compensation is ours."</em> <strong>This is not sufficient in most EU countries.</strong>
                    </p>
                    <p className="text-sm text-slate-600 dark:text-slate-400 mt-3">
                      <strong>Legal principle:</strong> Simply paying for the ticket does not automatically transfer passenger rights. An explicit contractual clause is required.
                    </p>
                  </div>
                </div>
              </div>

              <h3 className="text-2xl font-bold text-slate-900 dark:text-white mb-4 mt-8">Scenario 3: Voluntary Assignment by Employee</h3>

              <p className="text-lg leading-relaxed text-slate-700 dark:text-slate-300">
                Some companies ask employees to voluntarily assign compensation to the company <strong>after</strong> the disruption occurs. This is legal if:
              </p>
              <ul className="list-disc pl-6 space-y-2 text-slate-700 dark:text-slate-300 mb-6">
                <li>The assignment is voluntary (no coercion)</li>
                <li>The employee receives something in return (quid pro quo)</li>
                <li>It's documented in writing</li>
              </ul>
            </section>

            {/* Section 3: Country-Specific Rules */}
            <section className="mb-12">
              <h2 className="text-3xl font-bold text-slate-900 dark:text-white mb-6 flex items-center gap-3">
                <Users className="w-8 h-8 text-blue-600 dark:text-blue-400" />
                Country-Specific Labor Law Considerations
              </h2>

              <p className="text-lg leading-relaxed text-slate-700 dark:text-slate-300 mb-6">
                While EU261 is uniform across Europe, <strong>national labor laws</strong> determine whether contractual clauses assigning compensation to employers are enforceable.
              </p>

              <div className="overflow-x-auto mb-8">
                <table className="min-w-full bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 rounded-lg">
                  <thead className="bg-slate-50 dark:bg-slate-900">
                    <tr>
                      <th className="px-6 py-4 text-left text-sm font-semibold text-slate-900 dark:text-white border-b border-slate-200 dark:border-slate-700">Country</th>
                      <th className="px-6 py-4 text-left text-sm font-semibold text-slate-900 dark:text-white border-b border-slate-200 dark:border-slate-700">Can Employer Keep Compensation?</th>
                      <th className="px-6 py-4 text-left text-sm font-semibold text-slate-900 dark:text-white border-b border-slate-200 dark:border-slate-700">Legal Framework</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-slate-200 dark:divide-slate-700">
                    <tr>
                      <td className="px-6 py-4 text-slate-900 dark:text-white font-medium">United Kingdom</td>
                      <td className="px-6 py-4 text-slate-700 dark:text-slate-300">✅ Yes (if in contract)</td>
                      <td className="px-6 py-4 text-slate-700 dark:text-slate-300">Strong freedom of contract. Clauses generally enforceable.</td>
                    </tr>
                    <tr>
                      <td className="px-6 py-4 text-slate-900 dark:text-white font-medium">Germany</td>
                      <td className="px-6 py-4 text-slate-700 dark:text-slate-300">✅ Yes (if in contract)</td>
                      <td className="px-6 py-4 text-slate-700 dark:text-slate-300">Explicit assignment clauses are valid under German labor law.</td>
                    </tr>
                    <tr>
                      <td className="px-6 py-4 text-slate-900 dark:text-white font-medium">Netherlands</td>
                      <td className="px-6 py-4 text-slate-700 dark:text-slate-300">✅ Yes (if in contract)</td>
                      <td className="px-6 py-4 text-slate-700 dark:text-slate-300">Dutch employment law allows contractual assignment.</td>
                    </tr>
                    <tr>
                      <td className="px-6 py-4 text-slate-900 dark:text-white font-medium">France</td>
                      <td className="px-6 py-4 text-slate-700 dark:text-slate-300">⚠️ Limited</td>
                      <td className="px-6 py-4 text-slate-700 dark:text-slate-300">Strong employee protection. Courts may void one-sided clauses.</td>
                    </tr>
                    <tr>
                      <td className="px-6 py-4 text-slate-900 dark:text-white font-medium">Poland</td>
                      <td className="px-6 py-4 text-slate-700 dark:text-slate-300">⚠️ Unclear</td>
                      <td className="px-6 py-4 text-slate-700 dark:text-slate-300">Limited case law. Employee rights generally favored.</td>
                    </tr>
                    <tr>
                      <td className="px-6 py-4 text-slate-900 dark:text-white font-medium">Italy</td>
                      <td className="px-6 py-4 text-slate-700 dark:text-slate-300">❌ Difficult</td>
                      <td className="px-6 py-4 text-slate-700 dark:text-slate-300">Strong labor protections. Clauses often deemed unfair.</td>
                    </tr>
                  </tbody>
                </table>
              </div>

              <div className="bg-blue-50 dark:bg-blue-950/20 border border-blue-200 dark:border-blue-900 rounded-xl p-6">
                <p className="text-slate-700 dark:text-slate-300">
                  <strong>Key takeaway:</strong> In countries with strong employee protections (France, Italy, Spain), contractual clauses that strip employees of compensation rights may be challenged in court as "unfair terms."
                </p>
              </div>
            </section>

            {/* Section 4: What Your Contract Might Say */}
            <section className="mb-12">
              <h2 className="text-3xl font-bold text-slate-900 dark:text-white mb-6 flex items-center gap-3">
                <FileText className="w-8 h-8 text-blue-600 dark:text-blue-400" />
                What Your Employment Contract Might Say
              </h2>

              <p className="text-lg leading-relaxed text-slate-700 dark:text-slate-300 mb-6">
                Most companies that want to claim compensation rights include specific clauses in their employment contracts or corporate travel policies. Here are common examples:
              </p>

              <div className="space-y-6">
                <div className="bg-slate-50 dark:bg-slate-900 rounded-xl p-6 border-l-4 border-blue-500">
                  <h3 className="font-bold text-slate-900 dark:text-white mb-3">Example 1: Full Assignment Clause</h3>
                  <blockquote className="italic text-slate-700 dark:text-slate-300 mb-3">
                    "The Employee hereby assigns to the Company any and all rights to compensation arising from flight delays, cancellations, or denied boarding during business travel, including but not limited to compensation under EU Regulation 261/2004."
                  </blockquote>
                  <p className="text-sm text-slate-600 dark:text-slate-400">
                    <strong>Effect:</strong> Clear, comprehensive. Likely enforceable in most jurisdictions.
                  </p>
                </div>

                <div className="bg-slate-50 dark:bg-slate-900 rounded-xl p-6 border-l-4 border-amber-500">
                  <h3 className="font-bold text-slate-900 dark:text-white mb-3">Example 2: Partial Assignment (Company Keeps Compensation, Employee Keeps Rights to Sue)</h3>
                  <blockquote className="italic text-slate-700 dark:text-slate-300 mb-3">
                    "Any monetary compensation received for flight disruptions on company-paid travel shall be remitted to the Company. The Employee retains the right to pursue claims for additional damages or losses."
                  </blockquote>
                  <p className="text-sm text-slate-600 dark:text-slate-400">
                    <strong>Effect:</strong> Company gets EU261 cash, but employee can still sue for consequential damages (missed deals, etc.).
                  </p>
                </div>

                <div className="bg-slate-50 dark:bg-slate-900 rounded-xl p-6 border-l-4 border-red-500">
                  <h3 className="font-bold text-slate-900 dark:text-white mb-3">Example 3: Vague or Implied Clause (Often Unenforceable)</h3>
                  <blockquote className="italic text-slate-700 dark:text-slate-300 mb-3">
                    "The Company reserves the right to manage all aspects of business travel, including handling any claims or disputes arising therefrom."
                  </blockquote>
                  <p className="text-sm text-slate-600 dark:text-slate-400">
                    <strong>Effect:</strong> Too vague. Does not explicitly assign compensation rights. Likely unenforceable.
                  </p>
                </div>
              </div>
            </section>

            {/* Section 5: Practical Steps */}
            <section className="mb-12">
              <h2 className="text-3xl font-bold text-slate-900 dark:text-white mb-6 flex items-center gap-3">
                <Briefcase className="w-8 h-8 text-blue-600 dark:text-blue-400" />
                Practical Steps: What Should You Do?
              </h2>

              <div className="space-y-8">
                <div>
                  <h3 className="text-2xl font-bold text-slate-900 dark:text-white mb-4">Step 1: Check Your Employment Contract</h3>
                  <p className="text-lg leading-relaxed text-slate-700 dark:text-slate-300 mb-4">
                    Look for clauses about:
                  </p>
                  <ul className="list-disc pl-6 space-y-2 text-slate-700 dark:text-slate-300">
                    <li>"Flight delay compensation"</li>
                    <li>"Business travel rights"</li>
                    <li>"Assignment of passenger rights"</li>
                    <li>"Company property during business travel"</li>
                  </ul>
                </div>

                <div>
                  <h3 className="text-2xl font-bold text-slate-900 dark:text-white mb-4">Step 2: Review Corporate Travel Policy</h3>
                  <p className="text-lg leading-relaxed text-slate-700 dark:text-slate-300">
                    Many companies don't include compensation clauses in the main employment contract but in a separate travel policy document you may have signed or acknowledged electronically.
                  </p>
                </div>

                <div>
                  <h3 className="text-2xl font-bold text-slate-900 dark:text-white mb-4">Step 3: If There's No Clause — The Money Is Yours</h3>
                  <div className="bg-green-50 dark:bg-green-950/20 border border-green-200 dark:border-green-900 rounded-xl p-6">
                    <p className="text-slate-700 dark:text-slate-300 mb-3">
                      <strong>If your contract and travel policy are silent on this issue</strong>, the default legal position is that <strong>you — the passenger — own the compensation</strong>.
                    </p>
                    <p className="text-slate-700 dark:text-slate-300">
                      Your employer cannot retroactively claim it without your consent.
                    </p>
                  </div>
                </div>

                <div>
                  <h3 className="text-2xl font-bold text-slate-900 dark:text-white mb-4">Step 4: File Your Claim</h3>
                  <p className="text-lg leading-relaxed text-slate-700 dark:text-slate-300 mb-4">
                    Even if there's uncertainty, <strong>file your claim</strong>. You can always negotiate with your employer later if they believe they have a contractual right to the funds.
                  </p>
                  <p className="text-lg leading-relaxed text-slate-700 dark:text-slate-300">
                    <Link href="/en/delayed-business-trip" className="text-blue-600 hover:text-blue-700 dark:text-blue-400 dark:hover:text-blue-300 font-medium">Use ClaimWinger</Link> to submit your claim quickly — we'll handle the airline, and you can sort out internal matters with your employer afterward.
                  </p>
                </div>
              </div>
            </section>

            {/* Section 6: Employer Perspective */}
            <section className="mb-12">
              <h2 className="text-3xl font-bold text-slate-900 dark:text-white mb-6 flex items-center gap-3">
                <Users className="w-8 h-8 text-blue-600 dark:text-blue-400" />
                The Employer's Perspective: Why Companies Claim Compensation
              </h2>

              <p className="text-lg leading-relaxed text-slate-700 dark:text-slate-300 mb-6">
                It's not necessarily about being greedy. Companies have legitimate reasons to claim flight compensation:
              </p>

              <div className="space-y-4 mb-6">
                <div className="flex items-start gap-3">
                  <CheckCircle className="w-6 h-6 text-blue-600 dark:text-blue-400 flex-shrink-0 mt-1" />
                  <div>
                    <p className="font-semibold text-slate-900 dark:text-white">1. Cost Recovery</p>
                    <p className="text-slate-700 dark:text-slate-300">The company paid for the ticket and may have incurred additional costs due to the delay (hotel rebookings, client relationship damage, etc.)</p>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <CheckCircle className="w-6 h-6 text-blue-600 dark:text-blue-400 flex-shrink-0 mt-1" />
                  <div>
                    <p className="font-semibold text-slate-900 dark:text-white">2. Administrative Efficiency</p>
                    <p className="text-slate-700 dark:text-slate-300">Centralizing claims through the company's travel team is often faster and more systematic</p>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <CheckCircle className="w-6 h-6 text-blue-600 dark:text-blue-400 flex-shrink-0 mt-1" />
                  <div>
                    <p className="font-semibold text-slate-900 dark:text-white">3. Fairness Across Employees</p>
                    <p className="text-slate-700 dark:text-slate-300">Some companies believe it's fairer if compensation goes to a central pool rather than creating windfalls for individual employees</p>
                  </div>
                </div>
              </div>

              <div className="bg-amber-50 dark:bg-amber-950/20 border border-amber-200 dark:border-amber-900 rounded-xl p-6">
                <p className="text-slate-700 dark:text-slate-300">
                  <strong>Best practice:</strong> Companies should have <strong>clear, transparent policies</strong> and communicate them to employees upfront — not spring a "surprise" claim after the fact.
                </p>
              </div>
            </section>

            {/* CTA 2 - Before FAQ */}
            <div className="my-12 p-8 bg-gradient-to-br from-blue-600 to-indigo-600 dark:from-blue-700 dark:to-indigo-700 rounded-2xl text-white">
              <h2 className="text-3xl font-bold mb-4">Don't Leave €600 on the Table</h2>
              <p className="text-lg mb-6 text-blue-50">
                Whether you're an employee or employer, ClaimWinger helps you navigate flight compensation claims with expert legal guidance. Our no-win-no-fee service means zero risk.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Link
                  href="https://claimwinger.com/delayed-flight"
                  className="inline-flex items-center justify-center gap-2 bg-white text-blue-600 hover:bg-blue-50 font-semibold px-8 py-4 rounded-lg transition-colors"
                >
                  Claim Delayed Flight
                  <span className="text-xl">→</span>
                </Link>
                <Link
                  href="https://claimwinger.com/cancelled-flight"
                  className="inline-flex items-center justify-center gap-2 bg-blue-700 hover:bg-blue-800 text-white font-semibold px-8 py-4 rounded-lg transition-colors border-2 border-white/20"
                >
                  Claim Cancelled Flight
                  <span className="text-xl">→</span>
                </Link>
              </div>
            </div>

            {/* FAQ Section */}
            <section className="mb-12">
              <h2 className="text-3xl font-bold text-slate-900 dark:text-white mb-8">Frequently Asked Questions</h2>
              
              <div className="space-y-6">
                <div className="bg-slate-50 dark:bg-slate-900 rounded-xl p-6">
                  <h3 className="text-xl font-bold text-slate-900 dark:text-white mb-3">
                    Can my employer legally force me to give up my flight compensation?
                  </h3>
                  <p className="text-slate-700 dark:text-slate-300">
                    No. Your employer cannot force you to give up compensation retroactively without your consent. However, if your employment contract contains a clause assigning compensation to the employer (and you signed it), that clause may be legally binding depending on your jurisdiction.
                  </p>
                </div>

                <div className="bg-slate-50 dark:bg-slate-900 rounded-xl p-6">
                  <h3 className="text-xl font-bold text-slate-900 dark:text-white mb-3">
                    What if I already received the compensation and my employer now demands it?
                  </h3>
                  <p className="text-slate-700 dark:text-slate-300">
                    Check your employment contract. If there's a valid assignment clause, your employer may have a legal right to the funds. If not, you are under no obligation to hand over money that legally belongs to you. Consult an employment lawyer if your employer threatens disciplinary action.
                  </p>
                </div>

                <div className="bg-slate-50 dark:bg-slate-900 rounded-xl p-6">
                  <h3 className="text-xl font-bold text-slate-900 dark:text-white mb-3">
                    Can my employer fire me for keeping flight compensation?
                  </h3>
                  <p className="text-slate-700 dark:text-slate-300">
                    In most EU countries, firing an employee solely for exercising their legal rights would be considered unfair dismissal. However, if you violated a clear contractual clause, your employer might have grounds for disciplinary action. Always review your contract and seek legal advice if threatened.
                  </p>
                </div>

                <div className="bg-slate-50 dark:bg-slate-900 rounded-xl p-6">
                  <h3 className="text-xl font-bold text-slate-900 dark:text-white mb-3">
                    What if my company has no written policy about flight compensation?
                  </h3>
                  <p className="text-slate-700 dark:text-slate-300">
                    If there's no written clause in your employment contract or corporate travel policy, the default legal position is that you — as the passenger — own the compensation. Your employer cannot claim it without your voluntary agreement.
                  </p>
                </div>

                <div className="bg-slate-50 dark:bg-slate-900 rounded-xl p-6">
                  <h3 className="text-xl font-bold text-slate-900 dark:text-white mb-3">
                    Should I tell my employer I'm filing a claim?
                  </h3>
                  <p className="text-slate-700 dark:text-slate-300">
                    It depends on your company culture and policies. If you're uncertain about ownership, it's often wise to inform HR or your manager and clarify the policy. However, you have a legal right to file a claim as the passenger — you don't need employer permission.
                  </p>
                </div>

                <div className="bg-slate-50 dark:bg-slate-900 rounded-xl p-6">
                  <h3 className="text-xl font-bold text-slate-900 dark:text-white mb-3">
                    Can I negotiate a split with my employer?
                  </h3>
                  <p className="text-slate-700 dark:text-slate-300">
                    Absolutely. Many employees and employers reach a compromise — for example, the company reimburses its ticket cost, and the employee keeps the remainder. This is a fair solution when there's ambiguity about contractual rights.
                  </p>
                </div>

                <div className="bg-slate-50 dark:bg-slate-900 rounded-xl p-6">
                  <h3 className="text-xl font-bold text-slate-900 dark:text-white mb-3">
                    Does it matter if I flew business class vs. economy?
                  </h3>
                  <p className="text-slate-700 dark:text-slate-300">
                    No. EU261 compensation amounts are based on flight distance, not ticket class. A delayed long-haul business class flight gets the same €600 as an economy ticket on the same route. However, your company may have different internal policies about who claims compensation based on booking class.
                  </p>
                </div>

                <div className="bg-slate-50 dark:bg-slate-900 rounded-xl p-6">
                  <h3 className="text-xl font-bold text-slate-900 dark:text-white mb-3">
                    What if I'm a freelancer or contractor traveling for a client?
                  </h3>
                  <p className="text-slate-700 dark:text-slate-300">
                    As a self-employed individual, you typically retain full rights to compensation, even if your client paid for the ticket. Your B2B contract should explicitly state if compensation rights are assigned to the client — otherwise, they're yours.
                  </p>
                </div>
              </div>
            </section>

            {/* FAQ Schema */}
            <script
              type="application/ld+json"
              dangerouslySetInnerHTML={{
                __html: JSON.stringify({
                  "@context": "https://schema.org",
                  "@type": "FAQPage",
                  "mainEntity": [
                    {
                      "@type": "Question",
                      "name": "Can my employer legally force me to give up my flight compensation?",
                      "acceptedAnswer": {
                        "@type": "Answer",
                        "text": "No. Your employer cannot force you to give up compensation retroactively without your consent. However, if your employment contract contains a clause assigning compensation to the employer (and you signed it), that clause may be legally binding depending on your jurisdiction."
                      }
                    },
                    {
                      "@type": "Question",
                      "name": "What if I already received the compensation and my employer now demands it?",
                      "acceptedAnswer": {
                        "@type": "Answer",
                        "text": "Check your employment contract. If there's a valid assignment clause, your employer may have a legal right to the funds. If not, you are under no obligation to hand over money that legally belongs to you."
                      }
                    },
                    {
                      "@type": "Question",
                      "name": "Can my employer fire me for keeping flight compensation?",
                      "acceptedAnswer": {
                        "@type": "Answer",
                        "text": "In most EU countries, firing an employee solely for exercising their legal rights would be considered unfair dismissal. However, if you violated a clear contractual clause, your employer might have grounds for disciplinary action."
                      }
                    },
                    {
                      "@type": "Question",
                      "name": "What if my company has no written policy about flight compensation?",
                      "acceptedAnswer": {
                        "@type": "Answer",
                        "text": "If there's no written clause in your employment contract or corporate travel policy, the default legal position is that you — as the passenger — own the compensation."
                      }
                    },
                    {
                      "@type": "Question",
                      "name": "Should I tell my employer I'm filing a claim?",
                      "acceptedAnswer": {
                        "@type": "Answer",
                        "text": "It depends on your company culture and policies. However, you have a legal right to file a claim as the passenger — you don't need employer permission."
                      }
                    },
                    {
                      "@type": "Question",
                      "name": "Can I negotiate a split with my employer?",
                      "acceptedAnswer": {
                        "@type": "Answer",
                        "text": "Absolutely. Many employees and employers reach a compromise — for example, the company reimburses its ticket cost, and the employee keeps the remainder."
                      }
                    },
                    {
                      "@type": "Question",
                      "name": "Does it matter if I flew business class vs. economy?",
                      "acceptedAnswer": {
                        "@type": "Answer",
                        "text": "No. EU261 compensation amounts are based on flight distance, not ticket class. A delayed long-haul business class flight gets the same €600 as an economy ticket on the same route."
                      }
                    },
                    {
                      "@type": "Question",
                      "name": "What if I'm a freelancer or contractor traveling for a client?",
                      "acceptedAnswer": {
                        "@type": "Answer",
                        "text": "As a self-employed individual, you typically retain full rights to compensation, even if your client paid for the ticket. Your B2B contract should explicitly state if compensation rights are assigned to the client."
                      }
                    }
                  ]
                })
              }}
            />

            {/* Related Articles */}
            <section className="mt-16 pt-12 border-t border-slate-200 dark:border-slate-800">
              <h2 className="text-2xl font-bold text-slate-900 dark:text-white mb-6">Related Articles</h2>
              <div className="grid md:grid-cols-2 gap-6">
                <Link href="/en/articles/flight-delay-compensation-business-travel-employee-or-employer" className="block p-6 bg-slate-50 dark:bg-slate-900 rounded-xl hover:bg-slate-100 dark:hover:bg-slate-800 transition-colors">
                  <h3 className="font-bold text-slate-900 dark:text-white mb-2">
                    Flight Delay Compensation: Employee or Employer?
                  </h3>
                  <p className="text-slate-600 dark:text-slate-400 text-sm">
                    Complete legal analysis of who owns flight compensation on business trips
                  </p>
                </Link>
                <Link href="/en/articles/eu261-compensation-business-flights-guide" className="block p-6 bg-slate-50 dark:bg-slate-900 rounded-xl hover:bg-slate-100 dark:hover:bg-slate-800 transition-colors">
                  <h3 className="font-bold text-slate-900 dark:text-white mb-2">
                    EU261 Compensation: Complete Guide for Corporate Travelers
                  </h3>
                  <p className="text-slate-600 dark:text-slate-400 text-sm">
                    Everything you need to know about EU261 rights on business flights
                  </p>
                </Link>
                <Link href="/en/delayed-business-trip" className="block p-6 bg-slate-50 dark:bg-slate-900 rounded-xl hover:bg-slate-100 dark:hover:bg-slate-800 transition-colors">
                  <h3 className="font-bold text-slate-900 dark:text-white mb-2">
                    Delayed Business Trip: Your Rights
                  </h3>
                  <p className="text-slate-600 dark:text-slate-400 text-sm">
                    What to do when your business flight is delayed and how to claim compensation
                  </p>
                </Link>
                <Link href="/en/business-flight-compensation" className="block p-6 bg-slate-50 dark:bg-slate-900 rounded-xl hover:bg-slate-100 dark:hover:bg-slate-800 transition-colors">
                  <h3 className="font-bold text-slate-900 dark:text-white mb-2">
                    Business Flight Compensation Rights
                  </h3>
                  <p className="text-slate-600 dark:text-slate-400 text-sm">
                    Your comprehensive guide to claiming compensation on corporate flights
                  </p>
                </Link>
              </div>
            </section>

          </div>
        </article>
      </div>
    </>
  );
}
