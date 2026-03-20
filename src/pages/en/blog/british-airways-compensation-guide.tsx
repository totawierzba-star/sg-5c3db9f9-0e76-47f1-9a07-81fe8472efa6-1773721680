import { LayoutEn } from "@/components/LayoutEn";
import { SEO } from "@/components/SEO";
import Link from "next/link";
import { Clock, AlertCircle, CheckCircle, ArrowRight, Plane, Crown } from "lucide-react";
import { Button } from "@/components/ui/button";

export default function BritishAirwaysCompensationGuide() {
  return (
    <LayoutEn>
      <SEO
        title="British Airways Compensation Guide 2025: Delays & Cancellations"
        description="Complete guide to claiming British Airways compensation. Navigate BA's claim process for flight delays and cancellations with expert tips."
        url="https://lotproblem.pl/en/blog/british-airways-compensation-guide"
      />

      <article className="max-w-4xl mx-auto px-4 py-12">
        <div className="mb-8">
          <Link href="/en/blog" className="text-blue-600 hover:text-blue-700 dark:text-blue-400 dark:hover:text-blue-300 flex items-center gap-2 mb-4">
            <ArrowRight className="h-4 w-4 rotate-180" />
            Back to Blog
          </Link>
          
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-4">
            British Airways Compensation Guide 2025
          </h1>
          
          <div className="flex items-center gap-4 text-gray-600 dark:text-gray-400 mb-6">
            <time dateTime="2025-03-06">March 6, 2025</time>
            <span>•</span>
            <span>16 min read</span>
          </div>

          <p className="text-xl text-gray-700 dark:text-gray-300 leading-relaxed">
            British Airways compensation claims require persistence. This guide shows you how to successfully claim what you're owed from the UK's flag carrier.
          </p>
        </div>

        <div className="prose prose-lg dark:prose-invert max-w-none">
          <section className="mb-12">
            <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-6">Your BA Compensation Rights</h2>
            <p className="text-gray-700 dark:text-gray-300">
              British Airways must pay under UK261/EU261 for delays over 3 hours, cancellations, and denied boarding on protected routes.
            </p>
          </section>

          <section className="mb-12">
            <div className="bg-gradient-to-br from-blue-600 to-indigo-600 text-white rounded-xl p-8">
              <h2 className="text-3xl font-bold mb-4">Get Your BA Compensation</h2>
              <p className="text-xl mb-6">
                BA rejects 42% of claims. ClaimWinger has a 93% success rate with British Airways.
              </p>
              <Button size="lg" className="bg-white text-blue-600 hover:bg-gray-100">
                <a href="https://claimwinger.com?utm_source=lotproblem&utm_medium=blog&utm_campaign=ba-guide" target="_blank" rel="noopener noreferrer">
                  Check Your Claim <ArrowRight className="ml-2 h-4 w-4" />
                </a>
              </Button>
            </div>
          </section>
        </div>
      </article>
    </LayoutEn>
  );
}
