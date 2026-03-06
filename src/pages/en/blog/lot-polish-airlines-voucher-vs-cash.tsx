import { LayoutEn } from "@/components/LayoutEn";
import { SEO } from "@/components/SEO";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import Link from "next/link";
import {
  Banknote,
  Ticket,
  AlertCircle,
  CheckCircle,
  XCircle,
  Scale,
  Calendar,
} from "lucide-react";

export default function LOTVoucherVsCash() {
  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": [
      {
        "@type": "Question",
        "name": "Can I refuse a LOT voucher and demand cash?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Yes! Under EU Regulation 261/2004, compensation must be paid in cash, bank transfer, or cheque. Vouchers can only be used with your signed agreement. You have the absolute legal right to refuse a voucher and insist on money."
        }
      },
      {
        "@type": "Question",
        "name": "Why does LOT offer vouchers instead of cash?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Vouchers keep the money within the airline. If you accept a voucher, you must fly LOT again, and if you don't use it before it expires, they keep the money. Cash payments are a direct loss for them."
        }
      },
      {
        "@type": "Question",
        "name": "I already accepted a voucher. Can I change my mind?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "It's difficult. If you signed a waiver or clicked 'Accept' on a digital offer that clearly stated you're waiving your right to cash, it's binding. However, if LOT misled you or didn't inform you of your right to cash, you might be able to challenge it."
        }
      },
      {
        "@type": "Question",
        "name": "Are LOT vouchers refundable?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Generally, no. Most vouchers are non-refundable and non-transferable. If you don't use them by the expiration date (usually 12 months), you lose the value."
        }
      },
      {
        "@type": "Question",
        "name": "When is a voucher better than cash compensation?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Only if LOT offers a voucher value significantly higher than the cash entitlement (e.g., €800 voucher vs €600 cash) AND you plan to fly LOT soon anyway. Otherwise, cash is always safer and more flexible."
        }
      },
      {
        "@type": "Question",
        "name": "Does the voucher cover the full ticket refund?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "For cancelled flights, LOT must offer a full ticket refund in cash within 7 days. They often push vouchers instead. Just like with compensation, you can refuse the refund voucher and demand money back to your bank account."
        }
      },
      {
        "@type": "Question",
        "name": "Can I sell or give my LOT voucher to someone else?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Usually no. Most compensation vouchers are issued to the specific passenger's name and are non-transferable. Check the fine print, but don't count on being able to sell it."
        }
      },
      {
        "@type": "Question",
        "name": "How do I request cash instead of a voucher?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Reply to the voucher offer email stating: 'I do not accept the voucher. In accordance with Article 7.3 of Regulation (EC) No 261/2004, I request compensation to be paid via bank transfer.' Include your IBAN."
        }
      }
    ]
  };

  const articleSchema = {
    "@context": "https://schema.org",
    "@type": "Article",
    "headline": "LOT Polish Airlines Voucher Instead of Cash: Do You Have to Accept It?",
    "description": "LOT offered you a voucher for your delayed or cancelled flight? STOP! You have the legal right to demand cash. Learn when to accept vouchers and how to get real money instead.",
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
        title="LOT Voucher vs Cash Compensation: Do I Have to Accept It? | EU261 Guide"
        description="LOT offered a travel voucher instead of cash? You can refuse! Learn why cash is better, how to reject the voucher, and get your full compensation via bank transfer."
        url="https://lotproblem.pl/en/blog/lot-polish-airlines-voucher-vs-cash"
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
              <span>Voucher vs Cash</span>
            </nav>

            {/* Article Header */}
            <header className="mb-12">
              <Badge className="mb-4">Claim Advice</Badge>
              <h1 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-6">
                LOT Polish Airlines Voucher Instead of Cash: Do You Have to Accept It?
              </h1>
              <div className="flex items-center gap-4 text-gray-600 dark:text-gray-400 mb-6">
                <span className="flex items-center gap-1">
                  <Banknote className="h-4 w-4" />
                  8 min read
                </span>
                <span>•</span>
                <span>Updated March 5, 2025</span>
              </div>
              <p className="text-xl text-gray-700 dark:text-gray-300 leading-relaxed">
                When a flight is delayed or cancelled, LOT Polish Airlines often sends an email offering a "travel voucher" or "discount code" for future flights. Before you click "Accept," stop. You almost certainly have the legal right to demand cash instead—and accepting the voucher might mean waiving your rights forever.
              </p>
            </header>

            {/* Quick Summary */}
            <Card className="p-6 bg-green-50 dark:bg-green-900/20 border-green-200 dark:border-green-800 mb-12">
              <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4 flex items-center gap-2">
                <CheckCircle className="h-6 w-6 text-green-600" />
                The Bottom Line
              </h2>
              <ul className="space-y-3 text-gray-700 dark:text-gray-300">
                <li className="flex items-start gap-2">
                  <CheckCircle className="h-5 w-5 text-green-600 flex-shrink-0 mt-0.5" />
                  <span><strong>You have the right to refuse:</strong> LOT cannot force you to take a voucher.</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle className="h-5 w-5 text-green-600 flex-shrink-0 mt-0.5" />
                  <span><strong>Cash is safer:</strong> Vouchers expire and restrict you to one airline.</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle className="h-5 w-5 text-green-600 flex-shrink-0 mt-0.5" />
                  <span><strong>Compensation must be liquid:</strong> EU law says payment must be cash/transfer unless you agree otherwise.</span>
                </li>
                <li className="flex items-start gap-2">
                  <AlertCircle className="h-5 w-5 text-red-600 flex-shrink-0 mt-0.5" />
                  <span><strong>Warning:</strong> Once you accept and sign for a voucher, you usually can't change your mind.</span>
                </li>
              </ul>
            </Card>

            {/* First CTA */}
            <div className="bg-gradient-to-r from-blue-600 to-indigo-600 rounded-lg p-8 text-center text-white mb-12">
              <h3 className="text-2xl font-bold mb-4">
                Want Cash Instead of a Voucher?
              </h3>
              <p className="text-lg mb-6 text-blue-100">
                We can help you convert your claim into real money in your bank account.
              </p>
              <Button
                asChild
                size="lg"
                className="bg-white text-blue-600 hover:bg-gray-100"
              >
                <a
                  href="https://claimwinger.com?utm_source=blog&utm_medium=lot_voucher_vs_cash&utm_campaign=first_cta"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Get Cash Compensation →
                </a>
              </Button>
            </div>

            {/* Main Content */}
            <div className="prose prose-lg dark:prose-invert max-w-none">
              <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-6 flex items-center gap-3">
                <Scale className="h-8 w-8 text-blue-600" />
                What Does the Law Say?
              </h2>

              <p className="mb-6">
                EU Regulation 261/2004, Article 7.3 is very clear on this matter:
              </p>

              <blockquote className="border-l-4 border-blue-600 pl-4 italic text-gray-700 dark:text-gray-300 mb-6">
                "The compensation referred to in paragraph 1 shall be paid in cash, by electronic bank transfer, bank orders or bank cheques or, <strong>with the signed agreement of the passenger</strong>, in travel vouchers and/or other services."
              </blockquote>

              <p className="mb-6">
                This means:
              </p>
              <ul className="space-y-2 mb-6">
                <li>1. The <strong>default</strong> method of payment is money.</li>
                <li>2. Vouchers are only allowed if YOU explicitly agree to them.</li>
                <li>3. Silence or lack of objection does not equal agreement.</li>
              </ul>

              <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-6 flex items-center gap-3 mt-12">
                <Ticket className="h-8 w-8 text-blue-600" />
                Why LOT Wants You to Take the Voucher
              </h2>

              <p className="mb-6">
                Airlines love vouchers for simple business reasons:
              </p>

              <div className="grid md:grid-cols-2 gap-6 mb-8">
                <Card className="p-6">
                  <h4 className="font-bold text-gray-900 dark:text-white mb-2">1. Cash Retention</h4>
                  <p className="text-sm text-gray-700 dark:text-gray-300">
                    The money stays in LOT's bank account. They don't lose any liquid cash, which is crucial for their financial reports.
                  </p>
                </Card>
                <Card className="p-6">
                  <h4 className="font-bold text-gray-900 dark:text-white mb-2">2. Forced Loyalty</h4>
                  <p className="text-sm text-gray-700 dark:text-gray-300">
                    You are forced to fly LOT again. You can't use the voucher on Lufthansa, Ryanair, or any competitor.
                  </p>
                </Card>
                <Card className="p-6">
                  <h4 className="font-bold text-gray-900 dark:text-white mb-2">3. Breakage (Unused Vouchers)</h4>
                  <p className="text-sm text-gray-700 dark:text-gray-300">
                    Industry statistics show that 20-30% of vouchers expire without being used. That's free money for the airline.
                  </p>
                </Card>
                <Card className="p-6">
                  <h4 className="font-bold text-gray-900 dark:text-white mb-2">4. Restrictions</h4>
                  <p className="text-sm text-gray-700 dark:text-gray-300">
                    Vouchers often have blackout dates, can't be combined with promos, or don't cover taxes/fees. Cash has no such limits.
                  </p>
                </Card>
              </div>

              <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-6 flex items-center gap-3 mt-12">
                <Banknote className="h-8 w-8 text-blue-600" />
                Voucher vs Cash: A Comparison
              </h2>

              <div className="overflow-x-auto mb-8">
                <table className="w-full border-collapse">
                  <thead>
                    <tr className="bg-gray-100 dark:bg-gray-800">
                      <th className="border border-gray-300 dark:border-gray-600 px-4 py-3 text-left">Feature</th>
                      <th className="border border-gray-300 dark:border-gray-600 px-4 py-3 text-left text-green-600">Cash Compensation</th>
                      <th className="border border-gray-300 dark:border-gray-600 px-4 py-3 text-left text-red-600">Travel Voucher</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td className="border border-gray-300 dark:border-gray-600 px-4 py-3 font-semibold">Flexibility</td>
                      <td className="border border-gray-300 dark:border-gray-600 px-4 py-3">Spend on anything (rent, food, other airlines)</td>
                      <td className="border border-gray-300 dark:border-gray-600 px-4 py-3">Only for LOT flights</td>
                    </tr>
                    <tr className="bg-gray-50 dark:bg-gray-900">
                      <td className="border border-gray-300 dark:border-gray-600 px-4 py-3 font-semibold">Expiration</td>
                      <td className="border border-gray-300 dark:border-gray-600 px-4 py-3">Never expires</td>
                      <td className="border border-gray-300 dark:border-gray-600 px-4 py-3">Usually 12 months</td>
                    </tr>
                    <tr>
                      <td className="border border-gray-300 dark:border-gray-600 px-4 py-3 font-semibold">Transferable</td>
                      <td className="border border-gray-300 dark:border-gray-600 px-4 py-3">Yes, it's money</td>
                      <td className="border border-gray-300 dark:border-gray-600 px-4 py-3">Usually No (Name-locked)</td>
                    </tr>
                    <tr className="bg-gray-50 dark:bg-gray-900">
                      <td className="border border-gray-300 dark:border-gray-600 px-4 py-3 font-semibold">Value</td>
                      <td className="border border-gray-300 dark:border-gray-600 px-4 py-3">Fixed (€250/€400/€600)</td>
                      <td className="border border-gray-300 dark:border-gray-600 px-4 py-3">Fixed (sometimes higher as incentive)</td>
                    </tr>
                  </tbody>
                </table>
              </div>

              <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-6 flex items-center gap-3 mt-12">
                <AlertCircle className="h-8 w-8 text-blue-600" />
                When Does It Make Sense to Accept a Voucher?
              </h2>

              <p className="mb-6">
                There is only <strong>ONE</strong> scenario where you should consider accepting a voucher:
              </p>

              <Card className="p-6 bg-yellow-50 dark:bg-yellow-900/20 border-yellow-200 dark:border-yellow-800 mb-6">
                <p className="font-bold text-gray-900 dark:text-white mb-2">The "Sweetener" Offer</p>
                <p className="text-gray-700 dark:text-gray-300">
                  If LOT offers a voucher that is worth <strong>significantly more</strong> than your cash entitlement (e.g., an €800 voucher for a €600 claim) AND you are 100% sure you will fly LOT again within the year.
                </p>
              </Card>

              <p className="mb-6">
                If the voucher amount is the same as the cash amount (e.g., €600 voucher for €600 claim), <strong>NEVER accept it</strong>. You gain nothing and lose all flexibility.
              </p>

              <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-6 flex items-center gap-3 mt-12">
                <XCircle className="h-8 w-8 text-blue-600" />
                How to Reject the Voucher and Demand Cash
              </h2>

              <p className="mb-6">
                If LOT emails you a voucher code or links you to a page to "claim your voucher," don't click accept. Instead, reply or file a new claim using this language:
              </p>

              <div className="bg-gray-100 dark:bg-gray-900 p-6 rounded-lg border border-gray-300 dark:border-gray-700 font-mono text-sm text-gray-800 dark:text-gray-200 mb-8">
                "Dear LOT Polish Airlines,<br/><br/>
                Reference: [Flight Number / Booking Reference]<br/><br/>
                I acknowledge your offer of a travel voucher for the disruption of my flight. <strong>I explicitly refuse this voucher.</strong><br/><br/>
                Under Article 7.3 of Regulation (EC) No 261/2004, compensation must be paid in cash or by bank transfer unless the passenger signs an agreement to accept a voucher. I do not agree to a voucher.<br/><br/>
                Please transfer the statutory compensation of €[250/400/600] to the following bank account:<br/>
                IBAN: [Your IBAN]<br/>
                SWIFT/BIC: [Your SWIFT]<br/><br/>
                I expect payment within 14 days."
              </div>

              <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">
                What If I Already Accepted the Voucher?
              </h3>

              <p className="mb-6">
                If you clicked "Accept" on a website or signed a document at the airport, it is usually binding. However, you might still have a chance if:
              </p>

              <ul className="space-y-2 mb-6">
                <li>• LOT didn't inform you of your right to choose cash (misleading practice).</li>
                <li>• You accepted the voucher for <em>care</em> (food/hotel) but not for <em>compensation</em>.</li>
                <li>• The voucher text didn't explicitly say it replaces your EU261 claim.</li>
              </ul>

              <p className="mb-6">
                In these cases, contact a professional claim agency to review your case.
              </p>
            </div>

            {/* Second CTA - Before FAQ */}
            <div className="bg-gradient-to-r from-blue-600 to-indigo-600 rounded-lg p-8 text-center text-white my-12">
              <h3 className="text-2xl font-bold mb-4">
                Don't Get Stuck with a Voucher You Won't Use
              </h3>
              <p className="text-lg mb-6 text-blue-100">
                Turn your LOT claim into cash money. We handle the negotiations and legal work.
              </p>
              <Button
                asChild
                size="lg"
                className="bg-white text-blue-600 hover:bg-gray-100"
              >
                <a
                  href="https://claimwinger.com?utm_source=blog&utm_medium=lot_voucher_vs_cash&utm_campaign=second_cta"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Start Cash Claim Now →
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
                    Can I refuse a LOT voucher and demand cash?
                  </h3>
                  <p className="text-gray-700 dark:text-gray-300">
                    Yes! Under EU Regulation 261/2004, compensation must be paid in cash, bank transfer, or cheque. Vouchers can only be used with your signed agreement. You have the absolute legal right to refuse a voucher and insist on money.
                  </p>
                </Card>

                <Card className="p-6">
                  <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-3">
                    Why does LOT offer vouchers instead of cash?
                  </h3>
                  <p className="text-gray-700 dark:text-gray-300">
                    Vouchers keep the money within the airline. If you accept a voucher, you must fly LOT again, and if you don't use it before it expires, they keep the money. Cash payments are a direct loss for them.
                  </p>
                </Card>

                <Card className="p-6">
                  <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-3">
                    I already accepted a voucher. Can I change my mind?
                  </h3>
                  <p className="text-gray-700 dark:text-gray-300">
                    It's difficult. If you signed a waiver or clicked 'Accept' on a digital offer that clearly stated you're waiving your right to cash, it's binding. However, if LOT misled you or didn't inform you of your right to cash, you might be able to challenge it.
                  </p>
                </Card>

                <Card className="p-6">
                  <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-3">
                    Are LOT vouchers refundable?
                  </h3>
                  <p className="text-gray-700 dark:text-gray-300">
                    Generally, no. Most vouchers are non-refundable and non-transferable. If you don't use them by the expiration date (usually 12 months), you lose the value.
                  </p>
                </Card>

                <Card className="p-6">
                  <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-3">
                    When is a voucher better than cash compensation?
                  </h3>
                  <p className="text-gray-700 dark:text-gray-300">
                    Only if LOT offers a voucher value significantly higher than the cash entitlement (e.g., €800 voucher vs €600 cash) AND you plan to fly LOT soon anyway. Otherwise, cash is always safer and more flexible.
                  </p>
                </Card>

                <Card className="p-6">
                  <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-3">
                    Does the voucher cover the full ticket refund?
                  </h3>
                  <p className="text-gray-700 dark:text-gray-300">
                    For cancelled flights, LOT must offer a full ticket refund in cash within 7 days. They often push vouchers instead. Just like with compensation, you can refuse the refund voucher and demand money back to your bank account.
                  </p>
                </Card>

                <Card className="p-6">
                  <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-3">
                    Can I sell or give my LOT voucher to someone else?
                  </h3>
                  <p className="text-gray-700 dark:text-gray-300">
                    Usually no. Most compensation vouchers are issued to the specific passenger's name and are non-transferable. Check the fine print, but don't count on being able to sell it.
                  </p>
                </Card>

                <Card className="p-6">
                  <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-3">
                    How do I request cash instead of a voucher?
                  </h3>
                  <p className="text-gray-700 dark:text-gray-300">
                    Reply to the voucher offer email stating: 'I do not accept the voucher. In accordance with Article 7.3 of Regulation (EC) No 261/2004, I request compensation to be paid via bank transfer.' Include your IBAN.
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
                      How Much Compensation Can I Get?
                    </Link>
                  </h3>
                  <p className="text-gray-600 dark:text-gray-400 text-sm">
                    €250, €400, or €600 - calculate your exact entitlement.
                  </p>
                </Card>

                <Card className="p-6 hover:shadow-lg transition-shadow">
                  <h3 className="text-lg font-bold text-gray-900 dark:text-white mb-2">
                    <Link href="/en/blog/lot-polish-airlines-cancelled-flight-compensation" className="hover:text-blue-600">
                      LOT Cancelled Flight Guide
                    </Link>
                  </h3>
                  <p className="text-gray-600 dark:text-gray-400 text-sm">
                    Rights for cancelled flights and refunds explained.
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