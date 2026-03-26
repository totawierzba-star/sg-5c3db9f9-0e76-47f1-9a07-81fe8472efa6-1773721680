import { SEO } from "@/components/SEO";
import Link from "next/link";
import { Plane, Shield, Clock, Award, CheckCircle, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";

export default function HomeEN() {
  return (
    <>
      <SEO
        title="problemlot.com — EU261 Flight Compensation Guide"
        description="Expert guides on EU261 flight compensation. Learn your rights for delayed and cancelled flights — claim up to €600."
        url="https://problemlot.com/en"
      />

      <div className="min-h-screen">
        {/* Hero Section */}
        <section className="relative bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 text-white py-20 overflow-hidden">
          <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxnIGZpbGw9IiNmZmYiIGZpbGwtb3BhY2l0eT0iMC4wNSI+PHBhdGggZD0iTTM2IDE2djZoLTZ2LTZoNnptLTEyIDBoNnY2aC02di02em0yNCAxMnY2aC02di02aDZ6bS0xMiAwaDZ2NmgtNnYtNnptLTEyIDBoNnY2aC02di02em0yNCAxMnY2aC02di02aDZ6bS0xMiAwaDZ2NmgtNnYtNnptLTEyIDBoNnY2aC02di02eiIvPjwvZz48L2c+PC9zdmc+')] opacity-30"></div>
          
          <div className="container mx-auto px-4 relative z-10">
            <div className="max-w-4xl mx-auto text-center">
              <div className="inline-flex items-center gap-2 bg-[#FF6B35]/10 border border-[#FF6B35]/20 rounded-full px-6 py-2 mb-8">
                <Award className="w-5 h-5 text-[#FF6B35]" />
                <span className="text-sm font-medium">EU261 & UK261 Passenger Rights Expert</span>
              </div>
              
              <h1 className="text-4xl md:text-6xl font-bold mb-6 leading-tight">
                Flight Compensation<br />
                <span className="text-[#FF6B35]">Rights & Compensation</span>
              </h1>
              
              <p className="text-xl text-slate-300 mb-10 leading-relaxed max-w-3xl mx-auto">
                Specialized knowledge on passenger rights for business trips. Learn when you're entitled to compensation and how to claim it effectively.
              </p>
              
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button
                  asChild
                  size="lg"
                  className="bg-[#FF6B35] hover:bg-[#FF6B35]/90 text-white text-lg px-8 py-6 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300"
                >
                  <Link href="/en/business-flight-compensation">
                    Check Your Rights
                    <ArrowRight className="ml-2 w-5 h-5" />
                  </Link>
                </Button>
                
                <Button
                  asChild
                  size="lg"
                  variant="outline"
                  className="border-2 border-white/30 bg-white/5 hover:bg-white/10 text-white text-lg px-8 py-6 rounded-xl backdrop-blur-sm transition-all duration-300"
                >
                  <Link href="/en/articles">
                    Expert Articles
                  </Link>
                </Button>
              </div>
            </div>
          </div>

          <div className="absolute bottom-0 left-0 right-0 h-24 bg-gradient-to-t from-white to-transparent"></div>
        </section>

        {/* Key Topics Section */}
        <section className="py-20 bg-white">
          <div className="container mx-auto px-4">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">
                Key Topics
              </h2>
              <p className="text-lg text-slate-600 max-w-2xl mx-auto">
                Comprehensive EU261 guides on passenger rights and flight compensation
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
              {/* Card 1 */}
              <Link href="/en/cancelled-business-trip" className="group">
                <div className="bg-gradient-to-br from-slate-50 to-white border-2 border-slate-200 rounded-2xl p-8 hover:shadow-xl hover:border-[#FF6B35]/50 transition-all duration-300 h-full">
                  <div className="w-14 h-14 bg-[#FF6B35]/10 rounded-xl flex items-center justify-center mb-6 group-hover:bg-[#FF6B35]/20 transition-colors">
                    <Plane className="w-7 h-7 text-[#FF6B35]" />
                  </div>
                  <h3 className="text-2xl font-bold text-slate-900 mb-3 group-hover:text-[#FF6B35] transition-colors">
                    Cancelled Business Trip
                  </h3>
                  <p className="text-slate-600 leading-relaxed mb-4">
                    What rights do you have when your business flight is cancelled? Learn about compensation, rebooking, and employer obligations.
                  </p>
                  <div className="flex items-center text-[#FF6B35] font-medium group-hover:gap-2 transition-all">
                    Read more <ArrowRight className="ml-1 w-4 h-4" />
                  </div>
                </div>
              </Link>

              {/* Card 2 */}
              <Link href="/en/business-flight-compensation" className="group">
                <div className="bg-gradient-to-br from-slate-50 to-white border-2 border-slate-200 rounded-2xl p-8 hover:shadow-xl hover:border-[#FF6B35]/50 transition-all duration-300 h-full">
                  <div className="w-14 h-14 bg-[#FF6B35]/10 rounded-xl flex items-center justify-center mb-6 group-hover:bg-[#FF6B35]/20 transition-colors">
                    <Shield className="w-7 h-7 text-[#FF6B35]" />
                  </div>
                  <h3 className="text-2xl font-bold text-slate-900 mb-3 group-hover:text-[#FF6B35] transition-colors">
                    EU261 Flight Compensation
                  </h3>
                  <p className="text-slate-600 leading-relaxed mb-4">
                    Comprehensive guide on compensation for business flights. Who is entitled and how to effectively claim it?
                  </p>
                  <div className="flex items-center text-[#FF6B35] font-medium group-hover:gap-2 transition-all">
                    Read more <ArrowRight className="ml-1 w-4 h-4" />
                  </div>
                </div>
              </Link>

              {/* Card 3 */}
              <Link href="/en/articles" className="group">
                <div className="bg-gradient-to-br from-slate-50 to-white border-2 border-slate-200 rounded-2xl p-8 hover:shadow-xl hover:border-[#FF6B35]/50 transition-all duration-300 h-full">
                  <div className="w-14 h-14 bg-[#FF6B35]/10 rounded-xl flex items-center justify-center mb-6 group-hover:bg-[#FF6B35]/20 transition-colors">
                    <Clock className="w-7 h-7 text-[#FF6B35]" />
                  </div>
                  <h3 className="text-2xl font-bold text-slate-900 mb-3 group-hover:text-[#FF6B35] transition-colors">
                    Delayed Business Trip
                  </h3>
                  <p className="text-slate-600 leading-relaxed mb-4">
                    Flight delay during a business trip? Check when you're entitled to compensation and what documentation you need.
                  </p>
                  <div className="flex items-center text-[#FF6B35] font-medium group-hover:gap-2 transition-all">
                    Read more <ArrowRight className="ml-1 w-4 h-4" />
                  </div>
                </div>
              </Link>
            </div>
          </div>
        </section>

        {/* Why problemlot.com Section */}
        <section className="py-20 bg-gradient-to-br from-slate-50 to-white">
          <div className="container mx-auto px-4">
            <div className="max-w-5xl mx-auto">
              <div className="text-center mb-16">
                <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">
                  Why problemlot.com?
                </h2>
                <p className="text-lg text-slate-600">
                  Specialized knowledge on business flight rights
                </p>
              </div>

              <div className="grid md:grid-cols-2 gap-8">
                <div className="flex gap-4">
                  <div className="flex-shrink-0">
                    <div className="w-12 h-12 bg-[#FF6B35]/10 rounded-xl flex items-center justify-center">
                      <CheckCircle className="w-6 h-6 text-[#FF6B35]" />
                    </div>
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-slate-900 mb-2">
                      Expert Knowledge
                    </h3>
                    <p className="text-slate-600 leading-relaxed">
                      Years of experience in business travel law. Practical knowledge based on real cases.
                    </p>
                  </div>
                </div>

                <div className="flex gap-4">
                  <div className="flex-shrink-0">
                    <div className="w-12 h-12 bg-[#FF6B35]/10 rounded-xl flex items-center justify-center">
                      <CheckCircle className="w-6 h-6 text-[#FF6B35]" />
                    </div>
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-slate-900 mb-2">
                      Current Regulations
                    </h3>
                    <p className="text-slate-600 leading-relaxed">
                      Up-to-date information on passenger rights and EU regulations (EU 261/2004).
                    </p>
                  </div>
                </div>

                <div className="flex gap-4">
                  <div className="flex-shrink-0">
                    <div className="w-12 h-12 bg-[#FF6B35]/10 rounded-xl flex items-center justify-center">
                      <CheckCircle className="w-6 h-6 text-[#FF6B35]" />
                    </div>
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-slate-900 mb-2">
                      Practical Guides
                    </h3>
                    <p className="text-slate-600 leading-relaxed">
                      Step-by-step instructions on how to claim compensation and protect your rights.
                    </p>
                  </div>
                </div>

                <div className="flex gap-4">
                  <div className="flex-shrink-0">
                    <div className="w-12 h-12 bg-[#FF6B35]/10 rounded-xl flex items-center justify-center">
                      <CheckCircle className="w-6 h-6 text-[#FF6B35]" />
                    </div>
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-slate-900 mb-2">
                      Corporate Focus
                    </h3>
                    <p className="text-slate-600 leading-relaxed">
                      Specialized knowledge on business flights, corporate policies, and employer-employee relationships.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 bg-gradient-to-r from-slate-800 to-slate-700 text-white">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto text-center">
              <h2 className="text-3xl md:text-4xl font-bold mb-6">
                Check Your Rights
              </h2>
              <p className="text-xl text-slate-300 mb-10 leading-relaxed">
                Learn what compensation you're entitled to and how to effectively claim it
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button
                  asChild
                  size="lg"
                  className="bg-[#FF6B35] hover:bg-[#FF6B35]/90 text-white text-lg px-8 py-6 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300"
                >
                  <Link href="/en/business-flight-compensation">
                    Learn More
                    <ArrowRight className="ml-2 w-5 h-5" />
                  </Link>
                </Button>
                
                <Button
                  asChild
                  size="lg"
                  variant="outline"
                  className="border-2 border-white/30 bg-white/5 hover:bg-white/10 text-white text-lg px-8 py-6 rounded-xl backdrop-blur-sm transition-all duration-300"
                >
                  <Link href="/en/about">
                    About the Author
                  </Link>
                </Button>
              </div>
            </div>
          </div>
        </section>
      </div>
    </>
  );
}
