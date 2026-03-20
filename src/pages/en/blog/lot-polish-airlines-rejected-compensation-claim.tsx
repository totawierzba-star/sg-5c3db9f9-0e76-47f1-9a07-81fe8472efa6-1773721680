import { LayoutEn } from "@/components/LayoutEn";
import { SEO } from "@/components/SEO";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import Link from "next/link";
import {
  XCircle,
  AlertTriangle,
  CheckCircle,
  FileText,
  Scale,
  ShieldAlert,
  HelpCircle,
} from "lucide-react";

export default function LOTRejectedClaim() {
  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": [
      {
        "@type": "Question",
        "name": "Why did LOT Polish Airlines reject my compensation claim?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Common reasons include 'extraordinary circumstances' (weather, strikes), technical issues (often invalid), or claiming you arrived less than 3 hours late. Many rejections are automated or baseless—always double-check the reason."
        }
      },
      {
        "@type": "Question",
        "name": "Is LOT's decision final?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "No. An airline's rejection is just their initial position. You can appeal, escalate to National Enforcement Bodies (NEB), use Alternative Dispute Resolution (ADR), or take legal action. Many rejected claims are later won."
        }
      },
      {
        "@type": "Question",
        "name": "LOT claims 'technical defect' is extraordinary. Is this true?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Usually false. The European Court of Justice has ruled that technical problems inherent to aircraft operation are NOT extraordinary circumstances, even if unexpected. LOT must pay unless it was a manufacturing defect or sabotage."
        }
      },
      {
        "@type": "Question",
        "name": "What if LOT blames the weather?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Verify it. Check if other flights departed from the same airport at the same time. If other planes were flying, weather likely wasn't the real cause or was manageable. Demand proof."
        }
      },
      {
        "@type": "Question",
        "name": "How do I escalate a complaint against LOT Polish Airlines?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "If LOT rejects your appeal, file a complaint with the Civil Aviation Authority (CAA) in the country where the flight departed (e.g., UOKiK in Poland). They can investigate but cannot always enforce payment."
        }
      },
      {
        "@type": "Question",
        "name": "Should I use a claim agency if LOT rejects me?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Yes, especially after a rejection. Agencies like ClaimWinger have legal teams that know how to challenge airline excuses and can take the case to court if necessary. They work on a 'no win, no fee' basis."
        }
      },
      {
        "@type": "Question",
        "name": "Can I claim for expenses if LOT rejected compensation?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Yes! Even if 'extraordinary circumstances' excuse the compensation payout, LOT MUST still reimburse you for care (meals, hotels, transport) during the delay. This right applies regardless of the cause."
        }
      },
      {
        "@type": "Question",
        "name": "How long do I have to appeal LOT's decision?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "It depends on the statute of limitations in your jurisdiction (e.g., 3 years in Poland, 6 years in UK). Don't delay—appeal as soon as possible."
        }
      }
    ]
  };

  const articleSchema = {
    "@context": "https://schema.org",
    "@type": "Article",
    "headline": "LOT Polish Airlines Rejected My Compensation Claim: What to Do Next",
    "description": "Don't accept 'No' for an answer. Learn why LOT rejects valid claims, how to spot fake excuses, and the exact steps to appeal and win your compensation.",
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
        title="LOT Polish Airlines Rejected My Claim: What to Do Next? | Appeal Guide 2025"
        description="LOT rejected your compensation claim? Don't give up. Learn how to challenge fake 'extraordinary circumstances,' appeal the decision, and get your money."
        url="https://lotproblem.pl/en/blog/lot-polish-airlines-rejected-compensation-claim"
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
              <span>LOT Rejected Claim</span>
            </nav>

            {/* Article Header */}
            <header className="mb-12">
              <Badge className="mb-4">Claim Advice</Badge>
              <h1 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-6">
                LOT Polish Airlines Rejected My Compensation Claim: What to Do Next
              </h1>
              <div className="flex items-center gap-4 text-gray-600 dark:text-gray-400 mb-6">
                <span className="flex items-center gap-1">
                  <ShieldAlert className="h-4 w-4" />
                  10 min read
                </span>
                <span>•</span>
                <span>Updated March 5, 2025</span>
              </div>
              <p className="text-xl text-gray-700 dark:text-gray-300 leading-relaxed">
                Receiving a rejection email from LOT Polish Airlines is frustrating, but it's rarely the end of the road. Airlines routinely reject valid claims using automated templates or questionable excuses. This guide reveals how to challenge LOT's decision, spot invalid rejections, and force them to pay what you're owed.
              </p>
            </header>

            {/* Quick Summary */}
            <Card className="p-6 bg-red-50 dark:bg-red-900/20 border-red-200 dark:border-red-800 mb-12">
              <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4 flex items-center gap-2">
                <AlertTriangle className="h-6 w-6 text-red-600" />
                Why You Should Not Give Up
              </h2>
              <ul className="space-y-3 text-gray-700 dark:text-gray-300">
                <li className="flex items-start gap-2">
                  <CheckCircle className="h-5 w-5 text-green-600 flex-shrink-0 mt-0.5" />
                  <span><strong>~60% of initial rejections are overturned</strong> when challenged properly</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle className="h-5 w-5 text-green-600 flex-shrink-0 mt-0.5" />
                  <span><strong>"Technical faults"</strong> are usually NOT extraordinary circumstances</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle className="h-5 w-5 text-green-600 flex-shrink-0 mt-0.5" />
                  <span><strong>Weather excuses</strong> are often used even when other planes were flying</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle className="h-5 w-5 text-green-600 flex-shrink-0 mt-0.5" />
                  <span><strong>Escalation works:</strong> LOT knows professional agencies will take them to court</span>
                </li>
              </ul>
            </Card>

            {/* First CTA */}
            <div className="bg-gradient-to-r from-red-600 to-orange-600 rounded-lg p-8 text-center text-white mb-12">
              <h3 className="text-2xl font-bold mb-4">
                Did LOT Reject Your Claim? Let Us Fight for You
              </h3>
              <p className="text-lg mb-6 text-red-100">
                Our legal team challenges invalid rejections daily. If we don't win, you don't pay anything.
              </p>
              <Button
                asChild
                size="lg"
                className="bg-white text-red-600 hover:bg-gray-100"
              >
                <a
                  href="https://claimwinger.com?utm_source=blog&utm_medium=lot_rejected_claim&utm_campaign=first_cta"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Start Free Appeal Check →
                </a>
              </Button>
            </div>

            {/* Main Content */}
            <div className="prose prose-lg dark:prose-invert max-w-none">
              <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-6 flex items-center gap-3">
                <XCircle className="h-8 w-8 text-red-600" />
                Top 3 Fake Excuses LOT Uses to Reject Claims
              </h2>

              <p className="mb-6">
                Airlines use specific keywords to make rejections sound legally binding. Here's how to decode them.
              </p>

              <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">
                Excuse #1: "Operational Reasons" or "Technical Defect"
              </h3>

              <Card className="p-6 mb-6 bg-gray-50 dark:bg-gray-800">
                <p className="font-semibold text-gray-900 dark:text-white mb-2">What they say:</p>
                <p className="italic text-gray-600 dark:text-gray-400 mb-4">
                  "Your flight was delayed due to unexpected technical difficulties, which constitute extraordinary circumstances."
                </p>
                <p className="font-semibold text-gray-900 dark:text-white mb-2">The Truth:</p>
                <p className="text-gray-700 dark:text-gray-300">
                  <strong>FALSE.</strong> The European Court of Justice has ruled that technical problems inherent to the normal activity of an airline (like part failures, engine issues, maintenance delays) are NOT extraordinary. LOT must compensate you. Only manufacturing defects (like a recall of all Boeing 737 MAX planes) or sabotage count as extraordinary.
                </p>
              </Card>

              <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">
                Excuse #2: "Bad Weather" (When It Wasn't That Bad)
              </h3>

              <Card className="p-6 mb-6 bg-gray-50 dark:bg-gray-800">
                <p className="font-semibold text-gray-900 dark:text-white mb-2">What they say:</p>
                <p className="italic text-gray-600 dark:text-gray-400 mb-4">
                  "Adverse weather conditions prevented the safe operation of the flight."
                </p>
                <p className="font-semibold text-gray-900 dark:text-white mb-2">The Truth:</p>
                <p className="text-gray-700 dark:text-gray-300">
                  <strong>OFTEN FALSE.</strong> Check if other flights departed from the same airport at roughly the same time. If Lufthansa, Ryanair, and Wizz Air were flying while LOT stayed grounded, weather likely wasn't the real reason. Or the weather was "bad" at a previous destination, causing a knock-on delay—which is LOT's operational problem, not yours.
                </p>
              </Card>

              <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">
                Excuse #3: "Air Traffic Control (ATC) Restrictions"
              </h3>

              <Card className="p-6 mb-6 bg-gray-50 dark:bg-gray-800">
                <p className="font-semibold text-gray-900 dark:text-white mb-2">What they say:</p>
                <p className="italic text-gray-600 dark:text-gray-400 mb-4">
                  "Delay was caused by ATC slot restrictions beyond our control."
                </p>
                <p className="font-semibold text-gray-900 dark:text-white mb-2">The Truth:</p>
                <p className="text-gray-700 dark:text-gray-300">
                  <strong>MISLEADING.</strong> While ATC delays <em>can</em> be extraordinary, airlines often blame ATC for delays caused by their own lateness. If the flight missed its slot because the crew was late or boarding was slow, that's LOT's fault, not ATC's. You can demand proof of the specific regulation slot.
                </p>
              </Card>

              <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-6 flex items-center gap-3 mt-12">
                <Scale className="h-8 w-8 text-blue-600" />
                Step-by-Step: How to Appeal a Rejection
              </h2>

              <p className="mb-6">
                If you receive a rejection, do NOT just accept it. Follow this escalation path.
              </p>

              <div className="space-y-6 mb-8">
                <Card className="p-6">
                  <h4 className="text-xl font-bold text-gray-900 dark:text-white mb-3">
                    Step 1: Reply Demanding Proof
                  </h4>
                  <p className="text-gray-700 dark:text-gray-300 mb-3">
                    Send a formal reply to the rejection email. Use this template:
                  </p>
                  <div className="bg-gray-100 dark:bg-gray-900 p-4 rounded text-sm font-mono text-gray-700 dark:text-gray-300 border border-gray-300 dark:border-gray-700">
                    "Dear LOT Polish Airlines,<br/><br/>
                    I reject your decision to deny compensation for flight [Flight Number].<br/><br/>
                    You cited [Reason given], but under EU Regulation 261/2004 and relevant ECJ case law, this does not constitute an extraordinary circumstance unless you can prove all reasonable measures were taken.<br/><br/>
                    Please provide:<br/>
                    1. The specific technical flight log or weather report justifying the delay.<br/>
                    2. Proof that other airlines were similarly affected.<br/><br/>
                    If I do not receive a positive response within 14 days, I will escalate this matter to the Civil Aviation Authority and seek legal representation."
                  </div>
                </Card>

                <Card className="p-6">
                  <h4 className="text-xl font-bold text-gray-900 dark:text-white mb-3">
                    Step 2: Complain to the National Enforcement Body (NEB)
                  </h4>
                  <p className="text-gray-700 dark:text-gray-300 mb-3">
                    If LOT ignores your appeal or maintains the rejection:
                  </p>
                  <ul className="space-y-2 text-gray-700 dark:text-gray-300">
                    <li>• Identify the correct body: It's the agency in the country of departure.</li>
                    <li>• For flights from Poland: <strong>Urząd Lotnictwa Cywilnego (ULC)</strong> via Passenger Rights Ombudsman (Rzecznik Praw Pasażera).</li>
                    <li>• For flights from UK: Civil Aviation Authority (CAA).</li>
                    <li>• Submit their official complaint form with LOT's rejection attached.</li>
                  </ul>
                  <p className="text-sm text-gray-500 mt-2">Note: NEBs can take months and their decisions are sometimes not legally binding on airlines.</p>
                </Card>

                <Card className="p-6 border-blue-200 dark:border-blue-800 bg-blue-50 dark:bg-blue-900/10">
                  <h4 className="text-xl font-bold text-gray-900 dark:text-white mb-3">
                    Step 3: Use a Flight Compensation Company (Recommended)
                  </h4>
                  <p className="text-gray-700 dark:text-gray-300 mb-3">
                    This is often the fastest way to get paid after a rejection. Companies like ClaimWinger:
                  </p>
                  <ul className="space-y-2 text-gray-700 dark:text-gray-300 mb-3">
                    <li>✓ Have access to flight databases to disprove weather/ATC excuses</li>
                    <li>✓ Have lawyers who threaten legal action</li>
                    <li>✓ Take the risk: No win, no fee (usually 25-30% success fee)</li>
                  </ul>
                  <Button asChild variant="outline" className="mt-2">
                    <a href="https://claimwinger.com?utm_source=blog&utm_medium=lot_rejected_claim&utm_campaign=step3_link" target="_blank" rel="noopener noreferrer">
                      Check Your Claim Validity Free →
                    </a>
                  </Button>
                </Card>
              </div>

              <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-6 flex items-center gap-3 mt-12">
                <FileText className="h-8 w-8 text-blue-600" />
                Can I Still Get Expense Reimbursement?
              </h2>

              <p className="mb-6">
                <strong>YES!</strong> This is a critical point most passengers miss.
              </p>

              <p className="mb-6">
                Even if LOT is correct and the delay <em>was</em> due to extraordinary circumstances (like a volcano eruption or massive storm) and they don't have to pay the €250-€600 compensation:
              </p>

              <div className="bg-green-50 dark:bg-green-900/20 border-l-4 border-green-600 p-6 mb-6">
                <p className="font-semibold text-gray-900 dark:text-white mb-2">They MUST still pay for:</p>
                <ul className="space-y-2 text-gray-700 dark:text-gray-300">
                  <li>• Meals and refreshments during the wait</li>
                  <li>• Hotel accommodation (if stuck overnight)</li>
                  <li>• Transport between airport and hotel</li>
                  <li>• Two communications (calls/emails)</li>
                </ul>
              </div>

              <p className="mb-6">
                This "Right to Care" has <strong>no exceptions</strong> for extraordinary circumstances. If LOT rejected your expense claim too, they are breaking the law.
              </p>

              <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-6 flex items-center gap-3 mt-12">
                <HelpCircle className="h-8 w-8 text-blue-600" />
                When Should You Accept the Rejection?
              </h2>

              <p className="mb-6">
                Sometimes LOT is right. You likely won't win compensation if:
              </p>

              <ul className="space-y-2 mb-6">
                <li>• You arrived at your final destination with less than 3 hours delay (e.g., 2h 55m).</li>
                <li>• The delay was caused by strict security threats (e.g., bomb scare at airport).</li>
                <li>• Medical emergency on board requiring diversion.</li>
                <li>• Severe weather that grounded ALL flights at the airport (not just yours).</li>
                <li>• Air Traffic Control strikes that directly reduced capacity.</li>
              </ul>

              <p className="mb-6">
                However, unless you are 100% sure, it's always worth getting a second opinion from a professional claim service.
              </p>
            </div>

            {/* Second CTA - Before FAQ */}
            <div className="bg-gradient-to-r from-blue-600 to-indigo-600 rounded-lg p-8 text-center text-white my-12">
              <h3 className="text-2xl font-bold mb-4">
                Get a Second Opinion on Your Rejection
              </h3>
              <p className="text-lg mb-6 text-blue-100">
                LOT rejected your claim? We'll review it for free. If they're wrong, we'll fight them in court for you.
              </p>
              <Button
                asChild
                size="lg"
                className="bg-white text-blue-600 hover:bg-gray-100"
              >
                <a
                  href="https://claimwinger.com?utm_source=blog&utm_medium=lot_rejected_claim&utm_campaign=second_cta"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Verify My Rejection →
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
                    Why did LOT Polish Airlines reject my compensation claim?
                  </h3>
                  <p className="text-gray-700 dark:text-gray-300">
                    Common reasons include 'extraordinary circumstances' (weather, strikes), technical issues (often invalid), or claiming you arrived less than 3 hours late. Many rejections are automated or baseless—always double-check the reason.
                  </p>
                </Card>

                <Card className="p-6">
                  <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-3">
                    Is LOT's decision final?
                  </h3>
                  <p className="text-gray-700 dark:text-gray-300">
                    No. An airline's rejection is just their initial position. You can appeal, escalate to National Enforcement Bodies (NEB), use Alternative Dispute Resolution (ADR), or take legal action. Many rejected claims are later won.
                  </p>
                </Card>

                <Card className="p-6">
                  <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-3">
                    LOT claims 'technical defect' is extraordinary. Is this true?
                  </h3>
                  <p className="text-gray-700 dark:text-gray-300">
                    Usually false. The European Court of Justice has ruled that technical problems inherent to aircraft operation are NOT extraordinary circumstances, even if unexpected. LOT must pay unless it was a manufacturing defect or sabotage.
                  </p>
                </Card>

                <Card className="p-6">
                  <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-3">
                    What if LOT blames the weather?
                  </h3>
                  <p className="text-gray-700 dark:text-gray-300">
                    Verify it. Check if other flights departed from the same airport at the same time. If other planes were flying, weather likely wasn't the real cause or was manageable. Demand proof.
                  </p>
                </Card>

                <Card className="p-6">
                  <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-3">
                    How do I escalate a complaint against LOT Polish Airlines?
                  </h3>
                  <p className="text-gray-700 dark:text-gray-300">
                    If LOT rejects your appeal, file a complaint with the Civil Aviation Authority (CAA) in the country where the flight departed (e.g., UOKiK in Poland). They can investigate but cannot always enforce payment.
                  </p>
                </Card>

                <Card className="p-6">
                  <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-3">
                    Should I use a claim agency if LOT rejects me?
                  </h3>
                  <p className="text-gray-700 dark:text-gray-300">
                    Yes, especially after a rejection. Agencies like ClaimWinger have legal teams that know how to challenge airline excuses and can take the case to court if necessary. They work on a 'no win, no fee' basis.
                  </p>
                </Card>

                <Card className="p-6">
                  <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-3">
                    Can I claim for expenses if LOT rejected compensation?
                  </h3>
                  <p className="text-gray-700 dark:text-gray-300">
                    Yes! Even if 'extraordinary circumstances' excuse the compensation payout, LOT MUST still reimburse you for care (meals, hotels, transport) during the delay. This right applies regardless of the cause.
                  </p>
                </Card>

                <Card className="p-6">
                  <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-3">
                    How long do I have to appeal LOT's decision?
                  </h3>
                  <p className="text-gray-700 dark:text-gray-300">
                    It depends on the statute of limitations in your jurisdiction (e.g., 3 years in Poland, 6 years in UK). Don't delay—appeal as soon as possible.
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
                    <Link href="/en/blog/lot-polish-airlines-compensation-amounts" className="hover:text-blue-600">
                      LOT Compensation Amounts Explained
                    </Link>
                  </h3>
                  <p className="text-gray-600 dark:text-gray-400 text-sm">
                    Know exactly how much you are fighting for: €250, €400, or €600.
                  </p>
                </Card>

                <Card className="p-6 hover:shadow-lg transition-shadow">
                  <h3 className="text-lg font-bold text-gray-900 dark:text-white mb-2">
                    <Link href="/en/blog/lot-polish-airlines-delay-compensation-guide" className="hover:text-blue-600">
                      LOT Delay Compensation Guide
                    </Link>
                  </h3>
                  <p className="text-gray-600 dark:text-gray-400 text-sm">
                    Complete guide to your rights when your flight is delayed.
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
