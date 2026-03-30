import Link from "next/link";
import {
  Plane,
  Award,
  Users,
  TrendingUp,
  CheckCircle,
  ArrowRight,
  Briefcase,
  Globe,
} from "lucide-react";

import { LayoutEn } from "@/components/LayoutEn";
import { SEO } from "@/components/SEO";
import { Button } from "@/components/ui/button";

export default function AboutEN() {
  return (
    <LayoutEn>
      <SEO
        title="About the Author - problemlot.com Expert"
        description="Learn about the problemlot.com author - an expert in passenger rights and airline compensation with years of experience analyzing flight disruption cases."
        url="https://problemlot.com/en/about"
      />

      <div className="min-h-screen bg-gradient-to-b from-slate-50 to-white">
        <section className="relative overflow-hidden bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 py-20 text-white">
          <div className="absolute inset-0 opacity-30 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxnIGZpbGw9IiNmZmYiIGZpbGwtb3BhY2l0eT0iMC4wNSI+PHBhdGggZD0iTTM2IDE2djZoLTZ2LTZoNnptLTEyIDBoNnY2aC02di02em0yNCAxMnY2aC02di02aDZ6bS0xMiAwaDZ2NmgtNnYtNnptLTEyIDBoNnY2aC02di02em0yNCAxMnY2aC02di02aDZ6bS0xMiAwaDZ2NmgtNnYtNnptLTEyIDBoNnY2aC02di02eiIvPjwvZz48L2c+PC9zdmc+')]"></div>

          <div className="container relative z-10 mx-auto px-4">
            <div className="mx-auto max-w-4xl text-center">
              <div className="mb-8 inline-flex items-center gap-2 rounded-full border border-[#FF6B35]/20 bg-[#FF6B35]/10 px-6 py-2">
                <Award className="h-5 w-5 text-[#FF6B35]" />
                <span className="text-sm font-medium">Passenger Rights Expert</span>
              </div>

              <h1 className="mb-6 text-4xl font-bold leading-tight md:text-6xl">
                About the Author
              </h1>

              <p className="mx-auto max-w-3xl text-xl leading-relaxed text-slate-300">
                Expert in passenger rights, flight disruption cases and airline compensation. Creator of
                problemlot.com and ClaimWinger.com.
              </p>
            </div>
          </div>

          <div className="absolute bottom-0 left-0 right-0 h-24 bg-gradient-to-t from-white to-transparent"></div>
        </section>

        <section className="px-4 py-20">
          <div className="container mx-auto max-w-4xl">
            <div className="prose prose-lg max-w-none">
              <h2 className="mb-6 text-3xl font-bold text-slate-900">Who Am I?</h2>

              <p className="mb-6 text-lg leading-relaxed text-slate-700">
                I work on passenger rights, airline compensation and disruption analysis. Over the years,
                I have reviewed a large number of delayed-flight and cancelled-flight scenarios, following
                both the practical side of claims and the legal framework behind them.
              </p>

              <p className="mb-6 text-lg leading-relaxed text-slate-700">
                My focus is on turning complex EU261 and UK261 rules into clear guidance that passengers can
                actually use. That includes eligibility, extraordinary circumstances, compensation amounts,
                evidence collection and the steps to take when an airline refuses to pay.
              </p>

              <div className="my-12 rounded-2xl border-l-4 border-[#FF6B35] bg-gradient-to-br from-blue-50 to-slate-50 p-8">
                <h3 className="mb-4 flex items-center gap-3 text-2xl font-bold text-slate-900">
                  <Briefcase className="h-7 w-7 text-[#FF6B35]" />
                  My Mission
                </h3>
                <p className="text-lg leading-relaxed text-slate-700">
                  The goal of problemlot.com is simple: make passenger-rights content clear, practical and
                  immediately useful. Most travelers do not need jargon. They need a direct answer to whether
                  their flight qualifies, what they can claim and what to do next.
                </p>
              </div>

              <h2 className="mb-6 mt-12 text-3xl font-bold text-slate-900">Why problemlot.com?</h2>

              <p className="mb-6 text-lg leading-relaxed text-slate-700">
                I created <strong>problemlot.com</strong> to build a focused resource on passenger rights that
                combines legal clarity with real-world flight scenarios. Instead of generic travel advice, the
                site is built around disruption cases passengers actually search for.
              </p>

              <ul className="mb-8 space-y-4">
                <li className="flex gap-3">
                  <CheckCircle className="mt-1 h-6 w-6 flex-shrink-0 text-[#FF6B35]" />
                  <span className="text-lg text-slate-700">Direct answers on delays, cancellations and missed connections</span>
                </li>
                <li className="flex gap-3">
                  <CheckCircle className="mt-1 h-6 w-6 flex-shrink-0 text-[#FF6B35]" />
                  <span className="text-lg text-slate-700">Practical guides for evidence, timing and escalation</span>
                </li>
                <li className="flex gap-3">
                  <CheckCircle className="mt-1 h-6 w-6 flex-shrink-0 text-[#FF6B35]" />
                  <span className="text-lg text-slate-700">Airline-specific and route-specific content where standard advice is not enough</span>
                </li>
                <li className="flex gap-3">
                  <CheckCircle className="mt-1 h-6 w-6 flex-shrink-0 text-[#FF6B35]" />
                  <span className="text-lg text-slate-700">Content designed to be readable first and legally useful second</span>
                </li>
              </ul>

              <div className="my-12 rounded-2xl border border-slate-200 bg-gradient-to-br from-slate-50 to-white p-8">
                <h3 className="mb-4 flex items-center gap-3 text-2xl font-bold text-slate-900">
                  <Globe className="h-7 w-7 text-[#FF6B35]" />
                  ClaimWinger.com
                </h3>
                <p className="mb-6 text-lg leading-relaxed text-slate-700">
                  I am also behind <strong>ClaimWinger.com</strong>, a platform that helps passengers assess
                  and pursue flight-disruption claims. The goal there is operational: make it easier to move
                  from eligibility questions to an actual compensation process.
                </p>
                <Button asChild size="lg" className="bg-[#FF6B35] hover:bg-[#FF6B35]/90">
                  <a href="https://claimwinger.com/en" target="_blank" rel="noopener noreferrer">
                    Visit ClaimWinger.com
                    <ArrowRight className="ml-2 h-5 w-5" />
                  </a>
                </Button>
              </div>

              <h2 className="mb-6 mt-12 text-3xl font-bold text-slate-900">My Expertise</h2>

              <div className="my-8 grid gap-6 md:grid-cols-2">
                <div className="rounded-xl border border-slate-200 bg-white p-6 shadow-md">
                  <Plane className="mb-4 h-10 w-10 text-[#FF6B35]" />
                  <h3 className="mb-3 text-xl font-bold text-slate-900">Passenger Rights Law</h3>
                  <p className="text-slate-700">
                    Deep familiarity with EU261, UK261 and the practical questions passengers face after disruption.
                  </p>
                </div>

                <div className="rounded-xl border border-slate-200 bg-white p-6 shadow-md">
                  <Users className="mb-4 h-10 w-10 text-[#FF6B35]" />
                  <h3 className="mb-3 text-xl font-bold text-slate-900">Claims Strategy</h3>
                  <p className="text-slate-700">
                    Focus on what actually helps passengers win: timing, documentation and the quality of the claim.
                  </p>
                </div>

                <div className="rounded-xl border border-slate-200 bg-white p-6 shadow-md">
                  <TrendingUp className="mb-4 h-10 w-10 text-[#FF6B35]" />
                  <h3 className="mb-3 text-xl font-bold text-slate-900">Airline Patterns</h3>
                  <p className="text-slate-700">
                    Ongoing analysis of common refusal patterns, airline-specific behaviors and route-specific edge cases.
                  </p>
                </div>

                <div className="rounded-xl border border-slate-200 bg-white p-6 shadow-md">
                  <Award className="mb-4 h-10 w-10 text-[#FF6B35]" />
                  <h3 className="mb-3 text-xl font-bold text-slate-900">Practical Education</h3>
                  <p className="text-slate-700">
                    Turning difficult legal rules into content that is direct, readable and useful under stress.
                  </p>
                </div>
              </div>

              <div className="my-12 rounded-2xl bg-gradient-to-r from-slate-800 to-slate-700 p-8 text-white">
                <h3 className="mb-4 text-2xl font-bold">Want to Learn More?</h3>
                <p className="mb-6 text-lg text-slate-200">
                  Start with the English homepage, the calculator or the main EU261 guide and move from there
                  into airline-specific or route-specific articles.
                </p>
                <div className="flex flex-col gap-4 sm:flex-row">
                  <Button asChild size="lg" className="bg-[#FF6B35] hover:bg-[#FF6B35]/90">
                    <Link href="/en">
                      Homepage
                      <ArrowRight className="ml-2 h-5 w-5" />
                    </Link>
                  </Button>
                  <Button
                    asChild
                    size="lg"
                    variant="outline"
                    className="border-white/30 bg-white/5 text-white hover:bg-white/10"
                  >
                    <Link href="/en/compensation-calculator">Check Your Rights</Link>
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
    </LayoutEn>
  );
}
