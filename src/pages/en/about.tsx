import { SEO } from "@/components/SEO";
import Link from "next/link";
import { Plane, Award, Users, TrendingUp, CheckCircle, ArrowRight, Briefcase, Globe } from "lucide-react";
import { Button } from "@/components/ui/button";

export default function AboutEN() {
  return (
    <>
      <SEO
        title="About the Author - problemlot.com Expert"
        description="Learn about the problemlot.com author - an expert in business travel, passenger rights, and airline compensation with years of experience in the aviation industry."
        url="https://bizneslot.pl/en/about"
      />

      <div className="min-h-screen bg-gradient-to-b from-slate-50 to-white">
        {/* Hero Section */}
        <section className="relative bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 text-white py-20 overflow-hidden">
          <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxnIGZpbGw9IiNmZmYiIGZpbGwtb3BhY2l0eT0iMC4wNSI+PHBhdGggZD0iTTM2IDE2djZoLTZ2LTZoNnptLTEyIDBoNnY2aC02di02em0yNCAxMnY2aC02di02aDZ6bS0xMiAwaDZ2NmgtNnYtNnptLTEyIDBoNnY2aC02di02em0yNCAxMnY2aC02di02aDZ6bS0xMiAwaDZ2NmgtNnYtNnptLTEyIDBoNnY2aC02di02eiIvPjwvZz48L2c+PC9zdmc+')] opacity-30"></div>
          
          <div className="container mx-auto px-4 relative z-10">
            <div className="max-w-4xl mx-auto text-center">
              <div className="inline-flex items-center gap-2 bg-[#FF6B35]/10 border border-[#FF6B35]/20 rounded-full px-6 py-2 mb-8">
                <Award className="w-5 h-5 text-[#FF6B35]" />
                <span className="text-sm font-medium">Business Travel Expert</span>
              </div>
              
              <h1 className="text-4xl md:text-6xl font-bold mb-6 leading-tight">
                About the Author
              </h1>
              
              <p className="text-xl text-slate-300 mb-8 leading-relaxed max-w-3xl mx-auto">
                Expert in business travel, passenger rights, and airline compensation. Creator of problemlot.com and ClaimWinger.com.
              </p>
            </div>
          </div>

          <div className="absolute bottom-0 left-0 right-0 h-24 bg-gradient-to-t from-white to-transparent"></div>
        </section>

        {/* Main Content */}
        <section className="py-20 px-4">
          <div className="container mx-auto max-w-4xl">
            <div className="prose prose-lg max-w-none">
              <h2 className="text-3xl font-bold text-slate-900 mb-6">Who Am I?</h2>
              
              <p className="text-lg text-slate-700 leading-relaxed mb-6">
                I'm an expert specializing in <strong>passenger rights</strong> and <strong>airline compensation</strong>, 
                with particular focus on <strong>business travel</strong>. For years, I've been helping travelers understand 
                their rights and effectively claim compensation for flight disruptions.
              </p>

              <p className="text-lg text-slate-700 leading-relaxed mb-6">
                My experience stems from years of work in the aviation industry, analyzing thousands of compensation cases, 
                and closely following changes in EU regulations (particularly EU 261/2004). I've witnessed how many business 
                travelers are unaware of their rights during corporate trips.
              </p>

              <div className="bg-gradient-to-br from-blue-50 to-slate-50 rounded-2xl p-8 my-12 border-l-4 border-[#FF6B35]">
                <h3 className="text-2xl font-bold text-slate-900 mb-4 flex items-center gap-3">
                  <Briefcase className="w-7 h-7 text-[#FF6B35]" />
                  My Mission
                </h3>
                <p className="text-lg text-slate-700 leading-relaxed">
                  My goal is to educate business travelers about their rights and show them that compensation for 
                  delayed or cancelled flights belongs to the passenger - not the employer who purchased the ticket. 
                  Many employees mistakenly believe they're not entitled to compensation because the company paid for 
                  their flight.
                </p>
              </div>

              <h2 className="text-3xl font-bold text-slate-900 mb-6 mt-12">Why problemlot.com?</h2>
              
              <p className="text-lg text-slate-700 leading-relaxed mb-6">
                I created <strong>problemlot.com</strong> because I noticed a significant gap in information about passenger 
                rights specifically in the context of business travel. Most portals focus on leisure travelers, while business 
                trips have their own unique aspects:
              </p>

              <ul className="space-y-4 mb-8">
                <li className="flex gap-3">
                  <CheckCircle className="w-6 h-6 text-[#FF6B35] flex-shrink-0 mt-1" />
                  <span className="text-lg text-slate-700">Relationship between employee, employer, and airline</span>
                </li>
                <li className="flex gap-3">
                  <CheckCircle className="w-6 h-6 text-[#FF6B35] flex-shrink-0 mt-1" />
                  <span className="text-lg text-slate-700">Company travel policies and internal regulations</span>
                </li>
                <li className="flex gap-3">
                  <CheckCircle className="w-6 h-6 text-[#FF6B35] flex-shrink-0 mt-1" />
                  <span className="text-lg text-slate-700">Proper expense documentation in HR and accounting</span>
                </li>
                <li className="flex gap-3">
                  <CheckCircle className="w-6 h-6 text-[#FF6B35] flex-shrink-0 mt-1" />
                  <span className="text-lg text-slate-700">Rights to reimbursement of additional costs incurred during disruptions</span>
                </li>
              </ul>

              <div className="bg-gradient-to-br from-slate-50 to-white rounded-2xl p-8 my-12 border border-slate-200">
                <h3 className="text-2xl font-bold text-slate-900 mb-4 flex items-center gap-3">
                  <Globe className="w-7 h-7 text-[#FF6B35]" />
                  ClaimWinger.com
                </h3>
                <p className="text-lg text-slate-700 leading-relaxed mb-6">
                  I'm also the creator of <strong>ClaimWinger.com</strong> - a platform helping passengers effectively 
                  claim compensation for flight disruptions. ClaimWinger handles the entire claims process, from documentation 
                  review to negotiations with airlines and court proceedings if necessary.
                </p>
                <Button asChild size="lg" className="bg-[#FF6B35] hover:bg-[#FF6B35]/90">
                  <a href="https://claimwinger.com/en" target="_blank" rel="noopener noreferrer">
                    Visit ClaimWinger.com
                    <ArrowRight className="ml-2 w-5 h-5" />
                  </a>
                </Button>
              </div>

              <h2 className="text-3xl font-bold text-slate-900 mb-6 mt-12">My Expertise</h2>
              
              <div className="grid md:grid-cols-2 gap-6 my-8">
                <div className="bg-white rounded-xl p-6 shadow-md border border-slate-200">
                  <Plane className="w-10 h-10 text-[#FF6B35] mb-4" />
                  <h3 className="text-xl font-bold text-slate-900 mb-3">Aviation Law</h3>
                  <p className="text-slate-700">
                    Deep knowledge of EU 261/2004 regulation and passenger rights in various flight disruption scenarios.
                  </p>
                </div>

                <div className="bg-white rounded-xl p-6 shadow-md border border-slate-200">
                  <Users className="w-10 h-10 text-[#FF6B35] mb-4" />
                  <h3 className="text-xl font-bold text-slate-900 mb-3">Business Travel</h3>
                  <p className="text-slate-700">
                    Specialization in corporate travel - employee-employer relationships, company policies, expense accounting.
                  </p>
                </div>

                <div className="bg-white rounded-xl p-6 shadow-md border border-slate-200">
                  <TrendingUp className="w-10 h-10 text-[#FF6B35] mb-4" />
                  <h3 className="text-xl font-bold text-slate-900 mb-3">Airline Industry</h3>
                  <p className="text-slate-700">
                    Years of experience analyzing airline operations, disruption causes, and effective claims strategies.
                  </p>
                </div>

                <div className="bg-white rounded-xl p-6 shadow-md border border-slate-200">
                  <Award className="w-10 h-10 text-[#FF6B35] mb-4" />
                  <h3 className="text-xl font-bold text-slate-900 mb-3">Practical Education</h3>
                  <p className="text-slate-700">
                    Ability to translate complex legal regulations into practical, easy-to-understand advice for travelers.
                  </p>
                </div>
              </div>

              <h2 className="text-3xl font-bold text-slate-900 mb-6 mt-12">What Sets problemlot.com Apart?</h2>
              
              <p className="text-lg text-slate-700 leading-relaxed mb-6">
                problemlot.com is <strong>the first Polish portal</strong> entirely dedicated to passenger rights in the 
                business travel context. Here you'll find:
              </p>

              <ul className="space-y-4 mb-8">
                <li className="flex gap-3">
                  <CheckCircle className="w-6 h-6 text-[#FF6B35] flex-shrink-0 mt-1" />
                  <span className="text-lg text-slate-700">
                    <strong>Specialized knowledge</strong> - focus on business flights and corporate policies
                  </span>
                </li>
                <li className="flex gap-3">
                  <CheckCircle className="w-6 h-6 text-[#FF6B35] flex-shrink-0 mt-1" />
                  <span className="text-lg text-slate-700">
                    <strong>Current information</strong> - regularly updated based on legal changes and case law
                  </span>
                </li>
                <li className="flex gap-3">
                  <CheckCircle className="w-6 h-6 text-[#FF6B35] flex-shrink-0 mt-1" />
                  <span className="text-lg text-slate-700">
                    <strong>Practical guides</strong> - step-by-step instructions for specific situations
                  </span>
                </li>
                <li className="flex gap-3">
                  <CheckCircle className="w-6 h-6 text-[#FF6B35] flex-shrink-0 mt-1" />
                  <span className="text-lg text-slate-700">
                    <strong>Real examples</strong> - based on thousands of analyzed compensation cases
                  </span>
                </li>
              </ul>

              <div className="bg-gradient-to-r from-slate-800 to-slate-700 text-white rounded-2xl p-8 my-12">
                <h3 className="text-2xl font-bold mb-4">Want to Learn More?</h3>
                <p className="text-slate-200 mb-6 text-lg">
                  Explore articles on problemlot.com and discover what rights you have as a business traveler. 
                  Knowledge is power - especially when claiming what's rightfully yours.
                </p>
                <div className="flex flex-col sm:flex-row gap-4">
                  <Button asChild size="lg" className="bg-[#FF6B35] hover:bg-[#FF6B35]/90">
                    <Link href="/en">
                      Homepage
                      <ArrowRight className="ml-2 w-5 h-5" />
                    </Link>
                  </Button>
                  <Button asChild size="lg" variant="outline" className="border-white/30 bg-white/5 hover:bg-white/10 text-white">
                    <Link href="/en/business-flight-compensation">
                      Check Your Rights
                    </Link>
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
    </>
  );
}
