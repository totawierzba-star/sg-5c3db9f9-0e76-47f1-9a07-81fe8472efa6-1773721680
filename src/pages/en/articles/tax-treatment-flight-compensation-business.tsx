import { SEO } from "@/components/SEO";
import Link from "next/link";
import { Plane, AlertTriangle, Clock, Euro, FileText, CheckCircle2, XCircle, Calculator, ArrowRight, Building2 } from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert";

export default function TaxTreatmentCompensation() {
  return (
    <>
      <SEO
        title="Tax Treatment of Flight Compensation for Business Travelers | EU261 Tax Guide"
        description="Is EU261 flight compensation taxable for business travelers? Learn about tax implications in Poland, Germany, UK, and across EU. Employee vs employer taxation explained."
        image="/og-image.png"
      />

      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Article",
            "headline": "Tax Treatment of Flight Compensation for Business Travelers",
            "description": "Comprehensive guide to tax implications of EU261 compensation for business travel across European countries",
            "author": {
              "@type": "Person",
              "name": "Paweł Jastrzębski"
            },
            "datePublished": "2025-02-27",
            "dateModified": "2025-02-27"
          })
        }}
      />

      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "FAQPage",
            "mainEntity": [
              {
                "@type": "Question",
                "name": "Is EU261 flight compensation taxable for employees?",
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": "It depends on your country and who receives the compensation. In most EU countries (Poland, Germany, France, Netherlands), compensation received by the EMPLOYEE is generally NOT taxable as it's considered damages for inconvenience, not income. However, if the EMPLOYER receives it and passes it to the employee as a bonus, it may be taxable income."
                }
              },
              {
                "@type": "Question",
                "name": "What if my employer receives the compensation?",
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": "If the employer receives EU261 compensation (because they own the ticket or contract says so), it's typically treated as non-taxable income for the company (classified as damages/reimbursement, not revenue). The employer does NOT pay corporate tax on it. If they redistribute it to the employee, that payment may be taxable as employee income."
                }
              },
              {
                "@type": "Question",
                "name": "Do I need to report EU261 compensation on my tax return?",
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": "In most EU countries, if you (the employee) receive €250-€600 EU261 compensation directly from the airline, you generally DO NOT need to report it as income. It's classified as non-taxable damages. However, always verify with a local tax advisor, as rules vary by jurisdiction."
                }
              },
              {
                "@type": "Question",
                "name": "What about UK tax treatment post-Brexit?",
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": "In the UK, HMRC treats EU261/UK261 compensation as non-taxable if it's compensation for inconvenience (delay/cancellation). If received by the employee, it's not income tax or NI liable. If received by the employer and redistributed, it may be taxable as employment income depending on how it's paid."
                }
              },
              {
                "@type": "Question",
                "name": "Can my employer deduct flight compensation from my salary?",
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": "No. EU261 compensation is a statutory passenger right. Even if your employer owns the ticket or receives the compensation, they cannot deduct it from your salary without explicit consent in your employment contract. This would likely violate labor laws in most EU countries."
                }
              },
              {
                "@type": "Question",
                "name": "What if I use a claim service (e.g., 30% commission)?",
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": "The commission paid to the claim service is NOT tax-deductible for employees (it's a personal expense). The NET compensation you receive (e.g., €175 after 30% commission on €250) is still generally non-taxable. Claim services typically handle gross amounts, and you receive the net."
                }
              }
            ]
          })
        }}
      />

      <div className="min-h-screen bg-slate-50 dark:bg-slate-900 font-sans">
        {/* Hero Section */}
        <div className="bg-gradient-to-br from-emerald-900 via-emerald-800 to-emerald-700 text-white py-20">
          <div className="container mx-auto px-4 max-w-4xl">
            <div className="flex items-center gap-3 mb-6 text-emerald-200">
              <Calculator className="h-5 w-5" />
              <span>Tax & Financial Guide</span>
            </div>
            <h1 className="text-4xl md:text-5xl font-bold mb-6 leading-tight">
              Tax Treatment of Flight Compensation for Business Travelers
            </h1>
            <p className="text-xl text-emerald-100 mb-8 leading-relaxed max-w-3xl">
              Is EU261 flight compensation taxable? Who pays tax if the employer receives it? This comprehensive guide covers tax implications across EU countries for business travelers.
            </p>
            
            <div className="flex flex-wrap gap-4">
              <Button asChild size="lg" className="bg-white text-emerald-900 hover:bg-emerald-50 font-bold">
                <Link href="#tax-rules">
                  <Calculator className="mr-2 h-5 w-5" />
                  Tax Rules by Country
                </Link>
              </Button>
            </div>
          </div>
        </div>

        <article className="container mx-auto px-4 max-w-4xl py-12">
          {/* Key Takeaways */}
          <Alert className="mb-12 bg-white dark:bg-slate-800 border-l-4 border-l-emerald-600 shadow-sm">
            <AlertTriangle className="h-5 w-5 text-emerald-600" />
            <AlertTitle className="text-lg font-bold mb-3 text-slate-900 dark:text-white">Key Takeaways</AlertTitle>
            <AlertDescription className="text-slate-700 dark:text-slate-300">
              <ul className="space-y-2 list-disc list-inside">
                <li><strong>Employee receives = generally non-taxable</strong> across most EU countries (damages, not income)</li>
                <li><strong>Employer receives = non-taxable for company</strong> (damages/reimbursement, not revenue)</li>
                <li><strong>Employer redistributes to employee = may be taxable</strong> depending on how it's structured</li>
                <li><strong>Claim service commissions are NOT tax-deductible</strong> for employees (personal expense)</li>
                <li><strong>Always verify with local tax advisor</strong> - rules vary by jurisdiction</li>
              </ul>
            </AlertDescription>
          </Alert>

          <div className="grid grid-cols-1 md:grid-cols-[1fr_300px] gap-12">
            
            {/* Main Content */}
            <div className="prose prose-lg dark:prose-invert max-w-none">
              
              <h2>Why Tax Treatment Matters for Business Travelers</h2>
              <p>
                EU261 compensation (€250-€600) can be a significant amount, especially for frequent business travelers. Understanding the tax implications is critical for both employees and employers:
              </p>
              <ul>
                <li><strong>Employees:</strong> Need to know if compensation is taxable income (affects net take-home)</li>
                <li><strong>Employers:</strong> Must understand corporate tax treatment and redistribution rules</li>
                <li><strong>HR/Finance Teams:</strong> Need to structure policies that comply with tax law</li>
              </ul>
              <p>
                The key question: <strong>Is EU261 compensation considered "income" or "damages"?</strong> This determines tax liability across EU jurisdictions.
              </p>

              <h2 id="tax-rules">Tax Treatment by Country (Employee Receives Compensation)</h2>
              <p>
                When the <strong>employee</strong> receives EU261 compensation directly from the airline, here's how it's treated in major EU countries:
              </p>

              <div className="not-prose my-8">
                <div className="overflow-x-auto">
                  <table className="w-full border-collapse border border-slate-300 dark:border-slate-700">
                    <thead>
                      <tr className="bg-slate-100 dark:bg-slate-800">
                        <th className="border border-slate-300 dark:border-slate-700 px-4 py-3 text-left">Country</th>
                        <th className="border border-slate-300 dark:border-slate-700 px-4 py-3 text-left">Tax Treatment (Employee)</th>
                        <th className="border border-slate-300 dark:border-slate-700 px-4 py-3 text-left">Reporting Required?</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr>
                        <td className="border border-slate-300 dark:border-slate-700 px-4 py-3 font-semibold">🇵🇱 Poland</td>
                        <td className="border border-slate-300 dark:border-slate-700 px-4 py-3">
                          <span className="text-green-600 font-bold">Non-taxable</span> (classified as damages under Art. 21 of Polish Tax Act)
                        </td>
                        <td className="border border-slate-300 dark:border-slate-700 px-4 py-3">No</td>
                      </tr>
                      <tr className="bg-slate-50 dark:bg-slate-800/50">
                        <td className="border border-slate-300 dark:border-slate-700 px-4 py-3 font-semibold">🇩🇪 Germany</td>
                        <td className="border border-slate-300 dark:border-slate-700 px-4 py-3">
                          <span className="text-green-600 font-bold">Non-taxable</span> (Schadensersatz - compensation for inconvenience)
                        </td>
                        <td className="border border-slate-300 dark:border-slate-700 px-4 py-3">No</td>
                      </tr>
                      <tr>
                        <td className="border border-slate-300 dark:border-slate-700 px-4 py-3 font-semibold">🇬🇧 UK</td>
                        <td className="border border-slate-300 dark:border-slate-700 px-4 py-3">
                          <span className="text-green-600 font-bold">Non-taxable</span> (HMRC: compensation for inconvenience, not employment income)
                        </td>
                        <td className="border border-slate-300 dark:border-slate-700 px-4 py-3">No</td>
                      </tr>
                      <tr className="bg-slate-50 dark:bg-slate-800/50">
                        <td className="border border-slate-300 dark:border-slate-700 px-4 py-3 font-semibold">🇫🇷 France</td>
                        <td className="border border-slate-300 dark:border-slate-700 px-4 py-3">
                          <span className="text-green-600 font-bold">Non-taxable</span> (indemnité forfaitaire - damages, not revenue)
                        </td>
                        <td className="border border-slate-300 dark:border-slate-700 px-4 py-3">No</td>
                      </tr>
                      <tr>
                        <td className="border border-slate-300 dark:border-slate-700 px-4 py-3 font-semibold">🇳🇱 Netherlands</td>
                        <td className="border border-slate-300 dark:border-slate-700 px-4 py-3">
                          <span className="text-green-600 font-bold">Non-taxable</span> (schadevergoeding - compensation for harm)
                        </td>
                        <td className="border border-slate-300 dark:border-slate-700 px-4 py-3">No</td>
                      </tr>
                      <tr className="bg-slate-50 dark:bg-slate-800/50">
                        <td className="border border-slate-300 dark:border-slate-700 px-4 py-3 font-semibold">🇪🇸 Spain</td>
                        <td className="border border-slate-300 dark:border-slate-700 px-4 py-3">
                          <span className="text-green-600 font-bold">Non-taxable</span> (indemnización - damages, not income)
                        </td>
                        <td className="border border-slate-300 dark:border-slate-700 px-4 py-3">No</td>
                      </tr>
                    </tbody>
                  </table>
                </div>
                <p className="text-sm text-slate-500 mt-2 text-center italic">
                  *General guidance - always verify with a qualified tax advisor in your jurisdiction
                </p>
              </div>

              <h2>Tax Treatment When Employer Receives Compensation</h2>
              <p>
                If the <strong>employer</strong> receives EU261 compensation (because they own the ticket or contract transfers rights), the tax treatment changes:
              </p>

              <h3>For the Company (Employer)</h3>
              <div className="bg-blue-50 dark:bg-blue-900/20 p-4 rounded-lg border border-blue-200 dark:border-blue-800 my-4">
                <p className="mb-2 font-bold text-blue-900 dark:text-blue-100">Corporate Tax Treatment:</p>
                <ul className="mb-0 space-y-2 text-blue-800 dark:text-blue-200">
                  <li>✓ <strong>Generally non-taxable</strong> - Classified as reimbursement/damages, not business revenue</li>
                  <li>✓ <strong>Does NOT count as taxable income</strong> for corporate tax purposes in most EU countries</li>
                  <li>✓ <strong>No VAT implications</strong> - EU261 compensation is not a taxable supply</li>
                </ul>
              </div>

              <h3>Redistribution to Employee</h3>
              <p>
                If the employer receives compensation and redistributes it to the employee, tax treatment depends on HOW it's structured:
              </p>

              <div className="not-prose my-8 space-y-4">
                <div className="bg-green-50 dark:bg-green-900/20 p-6 rounded-lg border border-green-200 dark:border-green-800">
                  <h4 className="font-bold text-lg mb-2 text-green-900 dark:text-green-100">Scenario 1: Direct Pass-Through (Non-Taxable)</h4>
                  <p className="text-green-800 dark:text-green-200 mb-2">
                    Company receives €400 from airline → Immediately transfers €400 to employee as "reimbursement of EU261 compensation"
                  </p>
                  <p className="text-green-800 dark:text-green-200">
                    <strong>Tax Result:</strong> Generally NON-TAXABLE for employee (treated as damages pass-through, not income). Document properly to avoid payroll tax.
                  </p>
                </div>

                <div className="bg-yellow-50 dark:bg-yellow-900/20 p-6 rounded-lg border border-yellow-200 dark:border-yellow-800">
                  <h4 className="font-bold text-lg mb-2 text-yellow-900 dark:text-yellow-100">Scenario 2: Bonus Payment (Potentially Taxable)</h4>
                  <p className="text-yellow-800 dark:text-yellow-200 mb-2">
                    Company receives €400 from airline → Adds it to employee's next paycheck as "flight delay bonus"
                  </p>
                  <p className="text-yellow-800 dark:text-yellow-200">
                    <strong>Tax Result:</strong> May be TAXABLE as employment income (subject to income tax + social contributions). Depends on how it's classified in payroll.
                  </p>
                </div>

                <div className="bg-red-50 dark:bg-red-900/20 p-6 rounded-lg border border-red-200 dark:border-red-800">
                  <h4 className="font-bold text-lg mb-2 text-red-900 dark:text-red-100">Scenario 3: Company Keeps It (Employee Gets Nothing)</h4>
                  <p className="text-red-800 dark:text-red-200 mb-2">
                    Company receives €400 from airline → Keeps it as operational reimbursement, employee gets nothing
                  </p>
                  <p className="text-red-800 dark:text-red-200">
                    <strong>Tax Result:</strong> No tax for employee (no income received). Company: non-taxable income (damages/reimbursement).
                  </p>
                </div>
              </div>

              <h2>Claim Service Commissions & Tax Deductions</h2>
              <p>
                Many business travelers use claim services (e.g., AirHelp, ClaimCompass) that charge 25-35% commission. Are these fees tax-deductible?
              </p>

              <h3>For Employees</h3>
              <div className="bg-red-50 dark:bg-red-900/20 p-4 rounded-lg border border-red-200 dark:border-red-800 my-4">
                <p className="mb-2 font-bold text-red-900 dark:text-red-100">NOT Tax-Deductible:</p>
                <ul className="mb-0 space-y-1 text-red-800 dark:text-red-200">
                  <li>✗ Commission is a personal expense (not business-related for employee)</li>
                  <li>✗ Cannot deduct from income tax in most EU countries</li>
                  <li>✗ NET compensation received (e.g., €175 after 30% commission on €250) is still non-taxable</li>
                </ul>
              </div>

              <h3>For Employers</h3>
              <div className="bg-yellow-50 dark:bg-yellow-900/20 p-4 rounded-lg border border-yellow-200 dark:border-yellow-800 my-4">
                <p className="mb-2 font-bold text-yellow-900 dark:text-yellow-100">Potentially Deductible as Business Expense:</p>
                <ul className="mb-0 space-y-1 text-yellow-800 dark:text-yellow-200">
                  <li>✓ If employer uses claim service as part of travel policy, commission may be deductible business expense</li>
                  <li>✓ Must be properly documented as operational cost (travel management)</li>
                  <li>⚠️ Verify with tax advisor - rules vary by country and how service is contracted</li>
                </ul>
              </div>

              <h2>Country-Specific Tax Examples</h2>
              
              <h3>Poland 🇵🇱</h3>
              <p>
                <strong>Legal Basis:</strong> Art. 21 ust. 1 pkt 3 ustawy o PIT (Polish Income Tax Act)
              </p>
              <ul>
                <li><strong>Employee receives:</strong> Non-taxable (odszkodowanie - damages for inconvenience)</li>
                <li><strong>Employer receives:</strong> Non-taxable for company (not business revenue)</li>
                <li><strong>Redistribution:</strong> If passed as "bonus," may be subject to PIT (18-32%) + ZUS contributions</li>
                <li><strong>Reporting:</strong> No need to report on PIT-11 if properly classified as damages pass-through</li>
              </ul>

              <h3>Germany 🇩🇪</h3>
              <p>
                <strong>Legal Basis:</strong> § 3 Nr. 1 Einkommensteuergesetz (EStG)
              </p>
              <ul>
                <li><strong>Employee receives:</strong> Non-taxable (Schadensersatz - compensation under civil law)</li>
                <li><strong>Employer receives:</strong> Non-taxable for company (nicht steuerpflichtig)</li>
                <li><strong>Redistribution:</strong> If added to payroll as "Sonderzahlung," subject to Lohnsteuer + Sozialversicherung</li>
                <li><strong>Reporting:</strong> Not included in Lohnsteuerbescheinigung if classified as damages</li>
              </ul>

              <h3>United Kingdom 🇬🇧</h3>
              <p>
                <strong>Legal Basis:</strong> HMRC guidance on compensation payments
              </p>
              <ul>
                <li><strong>Employee receives:</strong> Non-taxable (compensation for inconvenience, not employment income)</li>
                <li><strong>Employer receives:</strong> Non-taxable for company (not trading income)</li>
                <li><strong>Redistribution:</strong> If paid via payroll, may be subject to Income Tax + NI (unless clearly documented as pass-through)</li>
                <li><strong>Reporting:</strong> Not reported on P11D if genuine compensation pass-through</li>
              </ul>

              <h2>Best Practices for Employers</h2>
              <div className="not-prose my-8 space-y-4">
                <div className="flex gap-4">
                  <div className="flex-shrink-0 w-10 h-10 bg-emerald-600 text-white rounded-full flex items-center justify-center font-bold">1</div>
                  <div>
                    <h4 className="text-lg font-bold mb-2 text-slate-900 dark:text-white">Clarify Policy in Employment Contracts</h4>
                    <p className="text-slate-700 dark:text-slate-300">Specify whether employee or employer receives EU261 compensation. If employer receives, state how it will be handled (redistribution, retention, etc.).</p>
                  </div>
                </div>

                <div className="flex gap-4">
                  <div className="flex-shrink-0 w-10 h-10 bg-emerald-600 text-white rounded-full flex items-center justify-center font-bold">2</div>
                  <div>
                    <h4 className="text-lg font-bold mb-2 text-slate-900 dark:text-white">Document Redistribution Properly</h4>
                    <p className="text-slate-700 dark:text-slate-300">If passing compensation to employee, classify it as "EU261 reimbursement" or "damages pass-through" - NOT as "bonus" or "incentive" to avoid payroll tax.</p>
                  </div>
                </div>

                <div className="flex gap-4">
                  <div className="flex-shrink-0 w-10 h-10 bg-emerald-600 text-white rounded-full flex items-center justify-center font-bold">3</div>
                  <div>
                    <h4 className="text-lg font-bold mb-2 text-slate-900 dark:text-white">Consult Tax Advisor</h4>
                    <p className="text-slate-700 dark:text-slate-300">Tax treatment varies by country. Work with local tax professionals to structure policy correctly and avoid payroll tax liabilities.</p>
                  </div>
                </div>

                <div className="flex gap-4">
                  <div className="flex-shrink-0 w-10 h-10 bg-emerald-600 text-white rounded-full flex items-center justify-center font-bold">4</div>
                  <div>
                    <h4 className="text-lg font-bold mb-2 text-slate-900 dark:text-white">Keep Records</h4>
                    <p className="text-slate-700 dark:text-slate-300">Maintain documentation showing compensation origin (airline), amount, and how it was handled. This protects both employer and employee in tax audits.</p>
                  </div>
                </div>

                <div className="flex gap-4">
                  <div className="flex-shrink-0 w-10 h-10 bg-emerald-600 text-white rounded-full flex items-center justify-center font-bold">5</div>
                  <div>
                    <h4 className="text-lg font-bold mb-2 text-slate-900 dark:text-white">Be Transparent with Employees</h4>
                    <p className="text-slate-700 dark:text-slate-300">Communicate clearly how EU261 compensation is handled. Employees should understand tax implications and whether they need to report anything.</p>
                  </div>
                </div>
              </div>

              <h2>FAQ: Tax Treatment of Flight Compensation</h2>
              
              <Accordion type="single" collapsible className="w-full not-prose my-8">
                <AccordionItem value="faq-1">
                  <AccordionTrigger className="text-left font-semibold">
                    Is EU261 flight compensation taxable for employees?
                  </AccordionTrigger>
                  <AccordionContent>
                    <p>It depends on your country and who receives the compensation. In most EU countries (Poland, Germany, France, Netherlands), compensation received by the EMPLOYEE is generally NOT taxable as it's considered damages for inconvenience, not income. However, if the EMPLOYER receives it and passes it to the employee as a bonus, it may be taxable income.</p>
                  </AccordionContent>
                </AccordionItem>

                <AccordionItem value="faq-2">
                  <AccordionTrigger className="text-left font-semibold">
                    What if my employer receives the compensation?
                  </AccordionTrigger>
                  <AccordionContent>
                    <p>If the employer receives EU261 compensation (because they own the ticket or contract says so), it's typically treated as non-taxable income for the company (classified as damages/reimbursement, not revenue). The employer does NOT pay corporate tax on it. If they redistribute it to the employee, that payment may be taxable as employee income.</p>
                  </AccordionContent>
                </AccordionItem>

                <AccordionItem value="faq-3">
                  <AccordionTrigger className="text-left font-semibold">
                    Do I need to report EU261 compensation on my tax return?
                  </AccordionTrigger>
                  <AccordionContent>
                    <p>In most EU countries, if you (the employee) receive €250-€600 EU261 compensation directly from the airline, you generally DO NOT need to report it as income. It's classified as non-taxable damages. However, always verify with a local tax advisor, as rules vary by jurisdiction.</p>
                  </AccordionContent>
                </AccordionItem>

                <AccordionItem value="faq-4">
                  <AccordionTrigger className="text-left font-semibold">
                    What about UK tax treatment post-Brexit?
                  </AccordionTrigger>
                  <AccordionContent>
                    <p>In the UK, HMRC treats EU261/UK261 compensation as non-taxable if it's compensation for inconvenience (delay/cancellation). If received by the employee, it's not income tax or NI liable. If received by the employer and redistributed, it may be taxable as employment income depending on how it's paid.</p>
                  </AccordionContent>
                </AccordionItem>

                <AccordionItem value="faq-5">
                  <AccordionTrigger className="text-left font-semibold">
                    Can my employer deduct flight compensation from my salary?
                  </AccordionTrigger>
                  <AccordionContent>
                    <p>No. EU261 compensation is a statutory passenger right. Even if your employer owns the ticket or receives the compensation, they cannot deduct it from your salary without explicit consent in your employment contract. This would likely violate labor laws in most EU countries.</p>
                  </AccordionContent>
                </AccordionItem>

                <AccordionItem value="faq-6">
                  <AccordionTrigger className="text-left font-semibold">
                    What if I use a claim service (e.g., 30% commission)?
                  </AccordionTrigger>
                  <AccordionContent>
                    <p>The commission paid to the claim service is NOT tax-deductible for employees (it's a personal expense). The NET compensation you receive (e.g., €175 after 30% commission on €250) is still generally non-taxable. Claim services typically handle gross amounts, and you receive the net.</p>
                  </AccordionContent>
                </AccordionItem>
              </Accordion>

              <div className="bg-slate-100 dark:bg-slate-800 p-8 rounded-lg my-12">
                <h3 className="text-2xl font-bold mb-4 text-slate-900 dark:text-white">Critical Reminder</h3>
                <p className="text-lg text-slate-700 dark:text-slate-300 mb-4">
                  Tax laws are complex and vary significantly by country. This guide provides general information based on common EU tax principles, but it is NOT legal or tax advice.
                </p>
                <p className="text-lg text-slate-700 dark:text-slate-300 mb-6">
                  <strong>Always consult a qualified tax advisor</strong> in your jurisdiction before making decisions about flight compensation tax treatment. What's non-taxable in Poland may be different in Sweden, and redistribution structures that work in Germany may not apply in Spain.
                </p>
                <Button asChild className="bg-emerald-600 hover:bg-emerald-700 text-white font-bold">
                  <Link href="/en/articles/can-employer-keep-flight-compensation">
                    <ArrowRight className="mr-2 h-5 w-5" />
                    Can Employer Keep Compensation?
                  </Link>
                </Button>
              </div>

            </div>

            {/* Sidebar */}
            <div className="space-y-6">
              
              {/* Quick Tax Reference */}
              <div className="bg-white dark:bg-slate-800 p-6 rounded-lg shadow-sm border border-slate-200 dark:border-slate-700">
                <h3 className="text-lg font-bold mb-4 text-slate-900 dark:text-white flex items-center gap-2">
                  <Calculator className="h-5 w-5 text-emerald-600" />
                  Quick Tax Guide
                </h3>
                <div className="space-y-3 text-sm">
                  <div>
                    <div className="font-semibold text-slate-900 dark:text-white">Employee Receives</div>
                    <div className="text-green-600 dark:text-green-400">✓ Non-taxable (most EU countries)</div>
                  </div>
                  <div>
                    <div className="font-semibold text-slate-900 dark:text-white">Employer Receives</div>
                    <div className="text-green-600 dark:text-green-400">✓ Non-taxable for company</div>
                  </div>
                  <div>
                    <div className="font-semibold text-slate-900 dark:text-white">Redistribution</div>
                    <div className="text-yellow-600 dark:text-yellow-400">⚠️ May be taxable (depends on structure)</div>
                  </div>
                  <div>
                    <div className="font-semibold text-slate-900 dark:text-white">Claim Commission</div>
                    <div className="text-red-600 dark:text-red-400">✗ Not deductible (employees)</div>
                  </div>
                </div>
              </div>

              {/* Related Articles */}
              <div className="bg-white dark:bg-slate-800 p-6 rounded-lg shadow-sm border border-slate-200 dark:border-slate-700">
                <h3 className="text-lg font-bold mb-4 text-slate-900 dark:text-white flex items-center gap-2">
                  <FileText className="h-5 w-5 text-emerald-600" />
                  Related Articles
                </h3>
                <ul className="space-y-3">
                  <li>
                    <Link href="/en/articles/can-employer-keep-flight-compensation" className="text-emerald-600 hover:text-emerald-700 hover:underline">
                      Can Employer Keep Compensation?
                    </Link>
                  </li>
                  <li>
                    <Link href="/en/articles/can-employer-require-claim-service" className="text-emerald-600 hover:text-emerald-700 hover:underline">
                      Can Employer Require Claim Service?
                    </Link>
                  </li>
                  <li>
                    <Link href="/en/articles/how-to-claim-flight-compensation-business-travel" className="text-emerald-600 hover:text-emerald-700 hover:underline">
                      How to Claim Compensation
                    </Link>
                  </li>
                  <li>
                    <Link href="/en/business-flight-compensation" className="text-emerald-600 hover:text-emerald-700 hover:underline">
                      EU261 Rights Overview
                    </Link>
                  </li>
                </ul>
              </div>

              {/* Tax Disclaimer */}
              <div className="bg-yellow-50 dark:bg-yellow-900/20 p-6 rounded-lg border border-yellow-200 dark:border-yellow-800">
                <h3 className="text-lg font-bold mb-3 text-slate-900 dark:text-white flex items-center gap-2">
                  <AlertTriangle className="h-5 w-5 text-yellow-600" />
                  Important Disclaimer
                </h3>
                <p className="text-sm text-slate-700 dark:text-slate-300">
                  This guide provides general information only. Tax laws change frequently and vary by jurisdiction. Always consult a qualified tax advisor before making decisions about flight compensation tax treatment.
                </p>
              </div>

            </div>

          </div>
        </article>
      </div>
    </>
  );
}
