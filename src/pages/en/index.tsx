import Link from "next/link";
import { Plane, Shield, Clock, Award, CheckCircle, ArrowRight } from "lucide-react";

import { LayoutEn } from "@/components/LayoutEn";
import { SEO } from "@/components/SEO";
import { Button } from "@/components/ui/button";

export default function HomeEN() {
  return (
    <LayoutEn>
      <SEO
        title="problemlot.com - EU261 Flight Compensation Guide"
        description="Expert guides on EU261 flight compensation. Learn your rights for delayed and cancelled flights and claim up to EUR600."
        url="https://problemlot.com/en"
      />

      <div className="min-h-screen">
        <section className="relative overflow-hidden bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 py-20 text-white">
          <div className="absolute inset-0 opacity-30 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxnIGZpbGw9IiNmZmYiIGZpbGwtb3BhY2l0eT0iMC4wNSI+PHBhdGggZD0iTTM2IDE2djZoLTZ2LTZoNnptLTEyIDBoNnY2aC02di02em0yNCAxMnY2aC02di02aDZ6bS0xMiAwaDZ2NmgtNnYtNnptLTEyIDBoNnY2aC02di02em0yNCAxMnY2aC02di02aDZ6bS0xMiAwaDZ2NmgtNnYtNnptLTEyIDBoNnY2aC02di02eiIvPjwvZz48L2c+PC9zdmc+')]"></div>

          <div className="container relative z-10 mx-auto px-4">
            <div className="mx-auto max-w-4xl text-center">
              <div className="mb-8 inline-flex items-center gap-2 rounded-full border border-[#FF6B35]/20 bg-[#FF6B35]/10 px-6 py-2">
                <Award className="h-5 w-5 text-[#FF6B35]" />
                <span className="text-sm font-medium">EU261 and UK261 Passenger Rights Expert</span>
              </div>

              <h1 className="mb-6 text-4xl font-bold leading-tight md:text-6xl">
                Flight Compensation
                <br />
                <span className="text-[#FF6B35]">Rights and Compensation</span>
              </h1>

              <p className="mx-auto mb-10 max-w-3xl text-xl leading-relaxed text-slate-300">
                Clear English guides on delayed flights, cancelled flights, compensation amounts and the
                routes most likely to qualify under EU261 and UK261.
              </p>

              <div className="flex flex-col justify-center gap-4 sm:flex-row">
                <Button
                  asChild
                  size="lg"
                  className="rounded-xl bg-[#FF6B35] px-8 py-6 text-lg text-white shadow-lg transition-all duration-300 hover:bg-[#FF6B35]/90 hover:shadow-xl"
                >
                  <Link href="/en/compensation-calculator">
                    Check Your Rights
                    <ArrowRight className="ml-2 h-5 w-5" />
                  </Link>
                </Button>

                <Button
                  asChild
                  size="lg"
                  variant="outline"
                  className="rounded-xl border-2 border-white/30 bg-white/5 px-8 py-6 text-lg text-white backdrop-blur-sm transition-all duration-300 hover:bg-white/10"
                >
                  <Link href="/en/blog">Expert Articles</Link>
                </Button>
              </div>
            </div>
          </div>

          <div className="absolute bottom-0 left-0 right-0 h-24 bg-gradient-to-t from-white to-transparent"></div>
        </section>

        <section className="bg-white py-20">
          <div className="container mx-auto px-4">
            <div className="mb-16 text-center">
              <h2 className="mb-4 text-3xl font-bold text-slate-900 md:text-4xl">Key Topics</h2>
              <p className="mx-auto max-w-2xl text-lg text-slate-600">
                Practical guides on passenger rights, compensation eligibility and the steps to take after disruption.
              </p>
            </div>

            <div className="mx-auto grid max-w-7xl gap-8 md:grid-cols-2 lg:grid-cols-3">
              <Link href="/en/cancelled-flight" className="group">
                <div className="h-full rounded-2xl border-2 border-slate-200 bg-gradient-to-br from-slate-50 to-white p-8 transition-all duration-300 hover:border-[#FF6B35]/50 hover:shadow-xl">
                  <div className="mb-6 flex h-14 w-14 items-center justify-center rounded-xl bg-[#FF6B35]/10 transition-colors group-hover:bg-[#FF6B35]/20">
                    <Plane className="h-7 w-7 text-[#FF6B35]" />
                  </div>
                  <h3 className="mb-3 text-2xl font-bold text-slate-900 transition-colors group-hover:text-[#FF6B35]">
                    Cancelled Flight
                  </h3>
                  <p className="mb-4 leading-relaxed text-slate-600">
                    Learn what happens after cancellation, when compensation is due and when the airline must
                    reroute or refund you.
                  </p>
                  <div className="flex items-center font-medium text-[#FF6B35] transition-all group-hover:gap-2">
                    Read more <ArrowRight className="ml-1 h-4 w-4" />
                  </div>
                </div>
              </Link>

              <Link href="/en/blog/eu261-complete-guide-passenger-rights" className="group">
                <div className="h-full rounded-2xl border-2 border-slate-200 bg-gradient-to-br from-slate-50 to-white p-8 transition-all duration-300 hover:border-[#FF6B35]/50 hover:shadow-xl">
                  <div className="mb-6 flex h-14 w-14 items-center justify-center rounded-xl bg-[#FF6B35]/10 transition-colors group-hover:bg-[#FF6B35]/20">
                    <Shield className="h-7 w-7 text-[#FF6B35]" />
                  </div>
                  <h3 className="mb-3 text-2xl font-bold text-slate-900 transition-colors group-hover:text-[#FF6B35]">
                    EU261 Complete Guide
                  </h3>
                  <p className="mb-4 leading-relaxed text-slate-600">
                    Start with the main English pillar on eligibility, extraordinary circumstances, payout amounts
                    and how EU261 differs from UK261.
                  </p>
                  <div className="flex items-center font-medium text-[#FF6B35] transition-all group-hover:gap-2">
                    Read more <ArrowRight className="ml-1 h-4 w-4" />
                  </div>
                </div>
              </Link>

              <Link href="/en/delayed-flight" className="group">
                <div className="h-full rounded-2xl border-2 border-slate-200 bg-gradient-to-br from-slate-50 to-white p-8 transition-all duration-300 hover:border-[#FF6B35]/50 hover:shadow-xl">
                  <div className="mb-6 flex h-14 w-14 items-center justify-center rounded-xl bg-[#FF6B35]/10 transition-colors group-hover:bg-[#FF6B35]/20">
                    <Clock className="h-7 w-7 text-[#FF6B35]" />
                  </div>
                  <h3 className="mb-3 text-2xl font-bold text-slate-900 transition-colors group-hover:text-[#FF6B35]">
                    Delayed Flight
                  </h3>
                  <p className="mb-4 leading-relaxed text-slate-600">
                    Understand the 3-hour rule, what counts as arrival delay and when you can demand EUR250, EUR400 or EUR600.
                  </p>
                  <div className="flex items-center font-medium text-[#FF6B35] transition-all group-hover:gap-2">
                    Read more <ArrowRight className="ml-1 h-4 w-4" />
                  </div>
                </div>
              </Link>
            </div>
          </div>
        </section>

        <section className="bg-gradient-to-br from-slate-50 to-white py-20">
          <div className="container mx-auto px-4">
            <div className="mx-auto max-w-5xl">
              <div className="mb-16 text-center">
                <h2 className="mb-4 text-3xl font-bold text-slate-900 md:text-4xl">
                  Why problemlot.com?
                </h2>
                <p className="text-lg text-slate-600">
                  Focused, practical and legally useful content for passengers flying to, from or within Europe.
                </p>
              </div>

              <div className="grid gap-8 md:grid-cols-2">
                {[
                  {
                    title: "Expert Knowledge",
                    text: "Practical interpretation of EU261 and UK261 based on the scenarios passengers face most often.",
                  },
                  {
                    title: "Current Regulations",
                    text: "Updated content on delays, cancellations, eligibility rules and compensation amounts.",
                  },
                  {
                    title: "Practical Guides",
                    text: "Actionable, step-by-step guidance on what to keep, what to request and how to escalate.",
                  },
                  {
                    title: "Route and Airline Focus",
                    text: "Clear answers for real routes, specific carriers and the questions passengers actually search for.",
                  },
                ].map((item) => (
                  <div key={item.title} className="flex gap-4">
                    <div className="flex-shrink-0">
                      <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-[#FF6B35]/10">
                        <CheckCircle className="h-6 w-6 text-[#FF6B35]" />
                      </div>
                    </div>
                    <div>
                      <h3 className="mb-2 text-xl font-bold text-slate-900">{item.title}</h3>
                      <p className="leading-relaxed text-slate-600">{item.text}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        <section className="bg-gradient-to-r from-slate-800 to-slate-700 py-20 text-white">
          <div className="container mx-auto px-4">
            <div className="mx-auto max-w-4xl text-center">
              <h2 className="mb-6 text-3xl font-bold md:text-4xl">Check Your Rights</h2>
              <p className="mb-10 text-xl leading-relaxed text-slate-300">
                Start with the calculator or go straight to the main EU261 guide if you want the legal framework first.
              </p>
              <div className="flex flex-col justify-center gap-4 sm:flex-row">
                <Button
                  asChild
                  size="lg"
                  className="rounded-xl bg-[#FF6B35] px-8 py-6 text-lg text-white shadow-lg transition-all duration-300 hover:bg-[#FF6B35]/90 hover:shadow-xl"
                >
                  <Link href="/en/blog/eu261-complete-guide-passenger-rights">
                    Learn More
                    <ArrowRight className="ml-2 h-5 w-5" />
                  </Link>
                </Button>

                <Button
                  asChild
                  size="lg"
                  variant="outline"
                  className="rounded-xl border-2 border-white/30 bg-white/5 px-8 py-6 text-lg text-white backdrop-blur-sm transition-all duration-300 hover:bg-white/10"
                >
                  <Link href="/en/about">About the Author</Link>
                </Button>
              </div>
            </div>
          </div>
        </section>
      </div>
    </LayoutEn>
  );
}
