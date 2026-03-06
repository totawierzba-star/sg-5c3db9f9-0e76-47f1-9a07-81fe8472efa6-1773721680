import { LayoutEn } from "@/components/LayoutEn";
import { SEO } from "@/components/SEO";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import {
  Clock,
  CheckCircle2,
  AlertTriangle,
  Banknote,
  Calendar,
  ArrowRight,
  ShieldAlert,
  HelpCircle,
} from "lucide-react";
import Image from "next/image";

export default function LotPaymentTimeline() {
  return (
    <LayoutEn>
      <SEO
        title="How Long Does LOT Polish Airlines Take to Pay Compensation? (2025 Guide)"
        description="Waiting for LOT Polish Airlines compensation? Check current payment timelines, why delays happen, and what to do if they ignore your claim."
        image="/images/lot-payment-timeline-og.jpg"
      />

      <article className="min-h-screen bg-gray-50 dark:bg-gray-900 pb-20">
        {/* Hero Section */}
        <div className="bg-blue-900 text-white py-20 px-4">
          <div className="container mx-auto max-w-4xl text-center">
            <div className="inline-flex items-center gap-2 bg-blue-800/50 px-4 py-2 rounded-full mb-6 text-blue-200 text-sm backdrop-blur-sm border border-blue-700">
              <Clock className="w-4 h-4" />
              <span>Updated for 2025</span>
            </div>
            <h1 className="text-4xl md:text-5xl font-bold mb-6 leading-tight">
              How Long Does LOT Polish Airlines Take to Pay Compensation?
            </h1>
            <p className="text-xl text-blue-100 max-w-2xl mx-auto leading-relaxed">
              If your claim was approved, when will the money arrive? If it's still pending, how long is "too long"? Here is the realistic timeline for 2025.
            </p>
          </div>
        </div>

        <div className="container mx-auto px-4 -mt-10">
          <div className="max-w-4xl mx-auto">
            {/* Quick Answer Box */}
            <div className="bg-white dark:bg-gray-800 rounded-2xl shadow-xl p-8 mb-12 border-l-8 border-green-500">
              <div className="flex flex-col md:flex-row gap-6 items-start md:items-center justify-between">
                <div>
                  <h2 className="text-xl font-bold text-gray-900 dark:text-white mb-2 flex items-center gap-2">
                    <CheckCircle2 className="w-6 h-6 text-green-500" />
                    The Short Answer
                  </h2>
                  <p className="text-gray-600 dark:text-gray-300">
                    <strong>Average wait time:</strong> 30 to 90 days.
                    <br />
                    LOT Polish Airlines typically responds to initial claims within 30 days. If approved, payment usually follows within 14-30 days. However, if they reject the claim or ignore it, the process can take 6+ months.
                  </p>
                </div>
                <Button size="lg" className="whitespace-nowrap bg-green-600 hover:bg-green-700 text-white shadow-lg shadow-green-600/20" asChild>
                  <a href="https://claimwinger.com" target="_blank" rel="noopener noreferrer">
                    Check Your Status
                  </a>
                </Button>
              </div>
            </div>

            {/* Main Content */}
            <div className="grid md:grid-cols-[1fr_300px] gap-8">
              <div className="space-y-12">
                {/* Section 1: Realistic Timelines */}
                <section>
                  <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-6 flex items-center gap-3">
                    <Calendar className="w-8 h-8 text-blue-600" />
                    Realistic Timeline Breakdown (2025)
                  </h2>
                  <div className="prose prose-lg dark:prose-invert max-w-none text-gray-600 dark:text-gray-300">
                    <p>
                      The speed of your payout depends entirely on how LOT Polish Airlines categorizes your claim. Here is what we are seeing in 2025:
                    </p>
                    
                    <div className="space-y-6 mt-6">
                      <div className="bg-green-50 dark:bg-green-900/20 border border-green-100 dark:border-green-800 p-6 rounded-xl">
                        <h3 className="font-bold text-green-800 dark:text-green-300 text-lg mb-2">🚀 Best Case: 3-6 Weeks</h3>
                        <p className="text-sm">
                          <strong>Scenario:</strong> Clear technical fault, no extraordinary circumstances, claim filed correctly with all documents.
                          <br />
                          LOT accepts liability quickly and processes the transfer.
                        </p>
                      </div>

                      <div className="bg-yellow-50 dark:bg-yellow-900/20 border border-yellow-100 dark:border-yellow-800 p-6 rounded-xl">
                        <h3 className="font-bold text-yellow-800 dark:text-yellow-300 text-lg mb-2">⚠️ Average Case: 2-4 Months</h3>
                        <p className="text-sm">
                          <strong>Scenario:</strong> Operational reasons, waiting for flight reports, or administrative backlog.
                          <br />
                          LOT might ask for additional documents or take the full 30 days to respond to each email.
                        </p>
                      </div>

                      <div className="bg-red-50 dark:bg-red-900/20 border border-red-100 dark:border-red-800 p-6 rounded-xl">
                        <h3 className="font-bold text-red-800 dark:text-red-300 text-lg mb-2">🛑 Worst Case: 6+ Months</h3>
                        <p className="text-sm">
                          <strong>Scenario:</strong> LOT wrongly claims "extraordinary circumstances" (weather/strikes) to deny payment.
                          <br />
                          Requires escalation to Civil Aviation Authority (ULC in Poland) or legal action.
                        </p>
                      </div>
                    </div>
                  </div>
                </section>

                {/* Section 2: Why the Delay? */}
                <section>
                  <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-6 flex items-center gap-3">
                    <HelpCircle className="w-8 h-8 text-blue-600" />
                    Why Is My LOT Claim Taking So Long?
                  </h2>
                  <div className="bg-white dark:bg-gray-800 p-8 rounded-xl shadow-sm border border-gray-100 dark:border-gray-700">
                    <p className="text-gray-600 dark:text-gray-300 mb-6">
                      If more than 30 days have passed without a response, it is usually due to one of these reasons:
                    </p>
                    <ul className="space-y-4">
                      <li className="flex gap-4">
                        <div className="w-8 h-8 rounded-full bg-blue-100 dark:bg-blue-900 flex items-center justify-center shrink-0">
                          <span className="font-bold text-blue-600">1</span>
                        </div>
                        <div>
                          <h4 className="font-bold text-gray-900 dark:text-white">Backlog during peak season</h4>
                          <p className="text-sm text-gray-600 dark:text-gray-400">Summer (June-August) and December are chaotic. Response times often double.</p>
                        </div>
                      </li>
                      <li className="flex gap-4">
                        <div className="w-8 h-8 rounded-full bg-blue-100 dark:bg-blue-900 flex items-center justify-center shrink-0">
                          <span className="font-bold text-blue-600">2</span>
                        </div>
                        <div>
                          <h4 className="font-bold text-gray-900 dark:text-white">Intentional stalling</h4>
                          <p className="text-sm text-gray-600 dark:text-gray-400">Some airlines use silence as a tactic, hoping passengers will give up.</p>
                        </div>
                      </li>
                      <li className="flex gap-4">
                        <div className="w-8 h-8 rounded-full bg-blue-100 dark:bg-blue-900 flex items-center justify-center shrink-0">
                          <span className="font-bold text-blue-600">3</span>
                        </div>
                        <div>
                          <h4 className="font-bold text-gray-900 dark:text-white">Missing Bank Details (BIC/SWIFT)</h4>
                          <p className="text-sm text-gray-600 dark:text-gray-400">Double-check your IBAN and SWIFT code. LOT cannot pay without these international codes.</p>
                        </div>
                      </li>
                    </ul>
                  </div>
                </section>

                {/* Mid-article CTA */}
                <div className="bg-gradient-to-r from-blue-600 to-indigo-700 rounded-2xl p-8 text-white text-center shadow-xl">
                  <h3 className="text-2xl font-bold mb-4">LOT ignoring your emails?</h3>
                  <p className="text-blue-100 mb-8 max-w-xl mx-auto">
                    Stop waiting. ClaimWinger can fast-track your claim legally. We handle the paperwork, negotiations, and legal threats.
                  </p>
                  <Button size="lg" variant="secondary" className="bg-white text-blue-700 hover:bg-gray-100 font-bold px-8" asChild>
                    <a href="https://claimwinger.com" target="_blank" rel="noopener noreferrer">
                      Speed Up My Claim
                    </a>
                  </Button>
                </div>

                {/* Section 3: Legal Deadlines */}
                <section>
                  <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-6 flex items-center gap-3">
                    <ScaleIcon className="w-8 h-8 text-blue-600" />
                    Does LOT Have a Legal Deadline to Pay?
                  </h2>
                  <div className="prose prose-lg dark:prose-invert max-w-none text-gray-600 dark:text-gray-300">
                    <p>
                      Surprisingly, <strong>Regulation EC 261/2004 does not set a strict deadline</strong> for airlines to pay compensation.
                    </p>
                    <p>
                      However, national consumer laws and Aviation Authority guidelines suggest a reasonable timeframe is <strong>30 days</strong>. If LOT does not respond within this window, you have the right to escalate the complaint to the Civil Aviation Authority (ULC in Poland) or take legal action.
                    </p>
                    
                    <div className="bg-blue-50 dark:bg-blue-900/20 p-6 rounded-xl border-l-4 border-blue-600 my-6">
                      <h4 className="font-bold text-blue-900 dark:text-blue-100 mb-2">The 3-Year Time Limit</h4>
                      <p className="text-sm text-blue-800 dark:text-blue-200">
                        In Poland, the statute of limitations for flight claims is <strong>1 year</strong> (Regulation 205/2004 of the Polish Supreme Court). However, if you are claiming under EU law in other jurisdictions, it can be up to 3-6 years. Don't wait too long!
                      </p>
                    </div>
                  </div>
                </section>

                {/* FAQ */}
                <section className="bg-white dark:bg-gray-800 rounded-xl shadow-sm p-8">
                  <h2 className="text-2xl font-bold mb-6 text-gray-900 dark:text-white">Frequently Asked Questions</h2>
                  <Accordion type="single" collapsible className="w-full">
                    <AccordionItem value="item-1">
                      <AccordionTrigger>How will LOT pay the compensation?</AccordionTrigger>
                      <AccordionContent>
                        LOT pays compensation via bank transfer (wire transfer). They will ask for your IBAN and BIC/SWIFT code. They rarely send cheques or cash.
                      </AccordionContent>
                    </AccordionItem>
                    <AccordionItem value="item-2">
                      <AccordionTrigger>Can I ask for interest on the delayed payment?</AccordionTrigger>
                      <AccordionContent>
                        Yes, if the case goes to court, you are entitled to statutory interest calculated from the date the payment was due (usually 30 days after the claim submission).
                      </AccordionContent>
                    </AccordionItem>
                    <AccordionItem value="item-3">
                      <AccordionTrigger>LOT offered me a voucher immediately. Should I take it?</AccordionTrigger>
                      <AccordionContent>
                        Generally, no. Cash is safer. Vouchers have expiration dates and cannot be used if the airline goes bankrupt. You have a legal right to cash.
                      </AccordionContent>
                    </AccordionItem>
                    <AccordionItem value="item-4">
                      <AccordionTrigger>What if LOT says "payment is processing" for weeks?</AccordionTrigger>
                      <AccordionContent>
                        This is a common stalling tactic. Demand a "Proof of Payment" (bank confirmation PDF). If they cannot provide it, they haven't sent the money.
                      </AccordionContent>
                    </AccordionItem>
                  </Accordion>
                </section>
              </div>

              {/* Sidebar */}
              <aside className="space-y-8">
                <div className="sticky top-24">
                  <div className="bg-white dark:bg-gray-800 rounded-xl shadow-lg p-6 border border-gray-100 dark:border-gray-700">
                    <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-4">
                      Check Your Flight
                    </h3>
                    <p className="text-gray-600 dark:text-gray-400 mb-6 text-sm">
                      Check if your flight qualifies for €600 compensation. It takes 2 minutes.
                    </p>
                    <Button className="w-full bg-blue-600 hover:bg-blue-700 text-white font-bold" size="lg" asChild>
                      <a href="https://claimwinger.com" target="_blank" rel="noopener noreferrer">
                        Check Compensation
                        <ArrowRight className="ml-2 w-4 h-4" />
                      </a>
                    </Button>
                  </div>

                  <div className="mt-8 bg-gray-50 dark:bg-gray-900 rounded-xl p-6">
                    <h3 className="font-bold text-gray-900 dark:text-white mb-4">Related Guides</h3>
                    <ul className="space-y-3">
                      <li>
                        <Link href="/en/blog/lot-polish-airlines-delay-compensation-guide" className="text-blue-600 hover:underline text-sm block">
                          LOT Flight Delay Guide
                        </Link>
                      </li>
                      <li>
                        <Link href="/en/blog/lot-polish-airlines-cancelled-flight-compensation" className="text-blue-600 hover:underline text-sm block">
                          LOT Cancellation Guide
                        </Link>
                      </li>
                      <li>
                        <Link href="/en/blog/lot-polish-airlines-compensation-amounts" className="text-blue-600 hover:underline text-sm block">
                          How Much Can I Get?
                        </Link>
                      </li>
                    </ul>
                  </div>
                </div>
              </aside>
            </div>
          </div>
        </div>
      </article>
    </LayoutEn>
  );
}

function ScaleIcon({ className }: { className?: string }) {
  return (
    <svg 
      xmlns="http://www.w3.org/2000/svg" 
      width="24" 
      height="24" 
      viewBox="0 0 24 24" 
      fill="none" 
      stroke="currentColor" 
      strokeWidth="2" 
      strokeLinecap="round" 
      strokeLinejoin="round" 
      className={className}
    >
      <path d="m16 16 3-8 3 8c-.87.65-1.92 1-3 1s-2.13-.35-3-1Z" />
      <path d="m2 16 3-8 3 8c-.87.65-1.92 1-3 1s-2.13-.35-3-1Z" />
      <path d="M7 21h10" />
      <path d="M12 3v18" />
      <path d="M3 7h2c2 0 5-1 7-2 2 1 5 2 7 2h2" />
    </svg>
  );
}