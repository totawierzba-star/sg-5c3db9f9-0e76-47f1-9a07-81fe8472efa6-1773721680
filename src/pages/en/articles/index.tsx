import { SEO } from "@/components/SEO";
import Link from "next/link";
import { BookOpen, Clock, ArrowRight } from "lucide-react";
import { Card, CardHeader, CardTitle, CardDescription, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

export default function EnglishArticlesPage() {
  const articles = [
    {
      title: "Flight Delay Compensation for Business Travel: Who Gets the Money?",
      slug: "flight-delay-compensation-business-travel-employee-or-employer",
      description: "The definitive guide to understanding who owns flight compensation on business trips — the traveling employee or the company that paid for the ticket.",
      category: "Core Rights & Ownership",
      readTime: "8 min read",
      date: "2025-02-26"
    },
    {
      title: "EU261 Compensation on Business Flights: Complete Guide for Corporate Travelers",
      slug: "eu261-compensation-business-flights-guide",
      description: "Everything corporate travelers need to know about EU261 regulation: compensation amounts from €250 to €600, who files the claim, and how to recover money from business flight delays.",
      category: "Core Rights & Ownership",
      readTime: "10 min read",
      date: "2025-02-26"
    },
    {
      title: "Can Your Employer Keep Your Flight Delay Compensation?",
      slug: "can-employer-keep-flight-compensation",
      description: "Can your company legally keep your €600 flight compensation? Complete guide to employee rights, employer policies, and legal frameworks across Europe and UK.",
      category: "Core Rights & Ownership",
      readTime: "12 min read",
      date: "2025-02-26"
    },
    {
      title: "How to Claim Flight Compensation When Traveling for Work",
      slug: "how-to-claim-flight-compensation-business-travel",
      description: "Step-by-step guide to claiming €250-€600 flight compensation on business trips. Learn the process, required documents, and how to maximize your claim success rate.",
      category: "Core Rights & Ownership",
      readTime: "15 min read",
      date: "2025-02-26"
    },
    {
      title: "Lufthansa Flight Delay Compensation for Business Travelers",
      slug: "lufthansa-flight-delay-compensation-business",
      description: "Complete guide to claiming €250-€600 compensation for Lufthansa delays on business trips. Learn corporate traveler rights, claim processes, and success strategies.",
      category: "Airline-Specific Claims",
      readTime: "12 min read",
      date: "2025-02-26"
    },
    {
      title: "Ryanair Flight Delay Compensation for Business Travelers | Guide",
      excerpt: "Traveling for business on Ryanair? Learn how to claim up to €400 for delays. Watch out for the 'voucher trap' and understand your rights.",
      slug: "ryanair-flight-delay-compensation-business",
      category: "Airline-Specific Claims",
      readTime: "10 min read",
      date: "2025-02-26"
    },
    {
      title: "Frankfurt Hub Flight Delays for Business Travelers | FRA Guide",
      slug: "frankfurt-hub-flight-delays-business",
      excerpt: "Flying through Frankfurt (FRA)? Learn about EU261 compensation for missed connections, hub delays, and Lufthansa's responsibilities.",
      category: "Routes & Hubs",
      readTime: "11 min read",
      date: "2025-02-27"
    },
    {
      title: "Heathrow Hub Flight Delays & Business Travel Compensation | LHR Guide",
      slug: "heathrow-hub-flight-delays-business",
      excerpt: "London Heathrow delays and your EU261/UK261 rights. Terminal 5 issues, missed connections, and post-Brexit compensation explained.",
      category: "Routes & Hubs",
      readTime: "10 min read",
      date: "2025-02-27"
    },
    {
      title: "Can Your Employer Require You to Use a Claim Service? | EU261",
      slug: "can-employer-require-claim-service",
      excerpt: "Legal analysis of employer requirements for flight compensation services. Know your rights under EU261 and employment law.",
      category: "Financial & Tax",
      readTime: "18 min read",
      date: "2025-02-27"
    }
  ];

  return (
    <>
      <SEO
        title="Business Travel Articles | Flight Compensation Guides"
        description="Expert guides on flight delay compensation for business travelers. Learn about EU261 rights, corporate claims, and how to recover €250-€600 from delayed or cancelled business flights."
        url="https://bizneslot.pl/en/articles"
      />

      <div className="min-h-screen bg-gradient-to-b from-slate-50 to-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-16">
          
          {/* Header */}
          <div className="text-center mb-12">
            <div className="flex items-center justify-center gap-2 mb-4">
              <BookOpen className="h-8 w-8 text-blue-600" />
              <h1 className="text-4xl sm:text-5xl font-bold text-slate-900">
                Business Travel Articles
              </h1>
            </div>
            <p className="text-xl text-slate-600 max-w-3xl mx-auto">
              Expert guides on flight compensation rights for corporate travelers. Learn how to claim €250-€600 for delayed or cancelled business flights.
            </p>
          </div>

          {/* Categories Filter */}
          <div className="flex flex-wrap gap-2 justify-center mb-12">
            <Badge variant="default" className="cursor-pointer">All Articles</Badge>
            <Badge variant="outline" className="cursor-pointer">Core Rights & Ownership</Badge>
            <Badge variant="outline" className="cursor-pointer">Airline-Specific Claims</Badge>
            <Badge variant="outline" className="cursor-pointer">Routes & Hubs</Badge>
            <Badge variant="outline" className="cursor-pointer">Corporate Process</Badge>
            <Badge variant="outline" className="cursor-pointer">Legal & Tax Framework</Badge>
          </div>

          {/* Articles Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
            {articles.map((article) => (
              <Link 
                key={article.slug} 
                href={`/en/articles/${article.slug}`}
                className="group"
              >
                <Card className="h-full hover:shadow-lg transition-all duration-300 hover:-translate-y-1">
                  <CardHeader>
                    <div className="flex items-center justify-between mb-2">
                      <Badge variant="secondary" className="text-xs">
                        {article.category}
                      </Badge>
                      <div className="flex items-center gap-1 text-slate-500 text-sm">
                        <Clock className="h-3 w-3" />
                        <span>{article.readTime}</span>
                      </div>
                    </div>
                    <CardTitle className="text-xl group-hover:text-blue-600 transition-colors">
                      {article.title}
                    </CardTitle>
                    <CardDescription className="text-sm text-slate-600">
                      {article.description}
                    </CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="flex items-center justify-between">
                      <span className="text-sm text-slate-500">{article.date}</span>
                      <ArrowRight className="h-5 w-5 text-blue-600 group-hover:translate-x-1 transition-transform" />
                    </div>
                  </CardContent>
                </Card>
              </Link>
            ))}
            {
              [
                {
                  title: "Air France Flight Delay Compensation",
                  excerpt: "Guide to claiming up to €600 for Air France delays. Understanding French strikes and the 5-year time limit for claims.",
                  date: "2026-02-27",
                  href: "/en/articles/air-france-flight-delay-compensation-business",
                  readTime: "5 min read"
                }
              ].map((article, index) => (
                <Link 
                  key={index} 
                  href={article.href}
                  className="group"
                >
                  <Card className="h-full hover:shadow-lg transition-all duration-300 hover:-translate-y-1">
                    <CardHeader>
                      <div className="flex items-center justify-between mb-2">
                        <Badge variant="secondary" className="text-xs">
                          Airline-Specific Claims
                        </Badge>
                        <div className="flex items-center gap-1 text-slate-500 text-sm">
                          <Clock className="h-3 w-3" />
                          <span>{article.readTime}</span>
                        </div>
                      </div>
                      <CardTitle className="text-xl group-hover:text-blue-600 transition-colors">
                        {article.title}
                      </CardTitle>
                      <CardDescription className="text-sm text-slate-600">
                        {article.excerpt}
                      </CardDescription>
                    </CardHeader>
                    <CardContent>
                      <div className="flex items-center justify-between">
                        <span className="text-sm text-slate-500">{article.date}</span>
                        <ArrowRight className="h-5 w-5 text-blue-600 group-hover:translate-x-1 transition-transform" />
                      </div>
                    </CardContent>
                  </Card>
                </Link>
              ))
            }
          </div>

          {/* CTA Section */}
          <div className="bg-gradient-to-r from-blue-600 to-blue-700 rounded-2xl p-8 sm:p-12 text-center text-white shadow-xl">
            <h2 className="text-3xl sm:text-4xl font-bold mb-4">
              Delayed on a Business Trip?
            </h2>
            <p className="text-xl mb-8 text-blue-50 max-w-2xl mx-auto">
              You may be entitled to €250-€600 in compensation. Check your eligibility in under 2 minutes.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href="https://claimwinger.com/delayed-flight"
                className="inline-flex items-center justify-center px-8 py-4 bg-white text-blue-600 rounded-lg font-semibold hover:bg-blue-50 transition-all duration-300 shadow-lg hover:shadow-xl transform hover:-translate-y-0.5"
              >
                Check Delayed Flight Claim
                <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
              <Link
                href="https://claimwinger.com/cancelled-flight"
                className="inline-flex items-center justify-center px-8 py-4 bg-blue-800 text-white rounded-lg font-semibold hover:bg-blue-900 transition-all duration-300 shadow-lg hover:shadow-xl transform hover:-translate-y-0.5"
              >
                Check Cancelled Flight Claim
                <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
            </div>
          </div>

          {/* Coming Soon Section */}
          <div className="mt-16 text-center">
            <h3 className="text-2xl font-bold text-slate-900 mb-4">
              More Articles Coming Soon
            </h3>
            <p className="text-slate-600 max-w-2xl mx-auto">
              We're continuously adding new expert guides covering airline-specific claims, corporate travel policies, legal frameworks, and more. Check back soon for updates.
            </p>
          </div>

        </div>
      </div>
    </>
  );
}
