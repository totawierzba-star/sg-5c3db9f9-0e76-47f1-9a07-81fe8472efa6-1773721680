import { LayoutEn } from "@/components/LayoutEn";
import { SEO } from "@/components/SEO";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import Link from "next/link";
import {
  Plane,
  Clock,
  XCircle,
  CheckCircle,
  Scale,
  Euro,
  FileText,
  Users,
} from "lucide-react";

export default function EnglishHome() {
  return (
    <LayoutEn>
      <SEO
        title="Delayed or Cancelled Flight? Check Your Compensation Up to €600"
        description="Flight delayed or cancelled? Check if you're entitled to up to €600 compensation under EU261. Free claim check and expert support."
        url="https://lotproblem.pl/en"
      />

      {/* Hero Section */}
      <section className="bg-gradient-to-br from-blue-50 to-indigo-100 dark:from-gray-800 dark:to-gray-900 py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-6">
              Flight Problem? Get Up to €600 Compensation
            </h1>
            <p className="text-xl text-gray-700 dark:text-gray-300 mb-8">
              Delayed, cancelled, or denied boarding? You may be entitled to compensation under EU Regulation 261/2004. Check your rights in 2 minutes.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button
                asChild
                size="lg"
                className="bg-blue-600 hover:bg-blue-700 text-white"
              >
                <a
                  href="https://claimwinger.com?utm_source=flightproblem&utm_medium=homepage&utm_campaign=en_hero"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Check Your Compensation
                </a>
              </Button>
              <Button asChild size="lg" variant="outline">
                <Link href="/en/compensation-calculator">
                  Calculate Amount
                </Link>
              </Button>
            </div>

            <p className="text-sm text-gray-600 dark:text-gray-400 mt-4">
              ✓ Free claim check ✓ No win, no fee ✓ Expert legal support
            </p>
          </div>
        </div>
      </section>

      {/* Problem Types */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center text-gray-900 dark:text-white mb-12">
            What's Your Flight Issue?
          </h2>

          <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            {/* Delayed Flight */}
            <Card className="p-6 hover:shadow-lg transition-shadow">
              <Clock className="h-12 w-12 text-blue-600 mb-4" />
              <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-3">
                Delayed Flight
              </h3>
              <p className="text-gray-600 dark:text-gray-400 mb-4">
                Flight delayed 3+ hours? You're entitled to compensation of €250-€600 depending on distance.
              </p>
              <Button asChild variant="outline" className="w-full">
                <Link href="/en/delayed-flight">Learn More</Link>
              </Button>
            </Card>

            {/* Cancelled Flight */}
            <Card className="p-6 hover:shadow-lg transition-shadow">
              <XCircle className="h-12 w-12 text-red-600 mb-4" />
              <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-3">
                Cancelled Flight
              </h3>
              <p className="text-gray-600 dark:text-gray-400 mb-4">
                Flight cancelled less than 14 days before departure? Claim up to €600 compensation.
              </p>
              <Button asChild variant="outline" className="w-full">
                <Link href="/en/cancelled-flight">Learn More</Link>
              </Button>
            </Card>

            {/* Denied Boarding */}
            <Card className="p-6 hover:shadow-lg transition-shadow">
              <Users className="h-12 w-12 text-orange-600 mb-4" />
              <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-3">
                Denied Boarding
              </h3>
              <p className="text-gray-600 dark:text-gray-400 mb-4">
                Overbooked and denied boarding? Get immediate compensation of €250-€600.
              </p>
              <Button asChild variant="outline" className="w-full">
                <Link href="/en/blog">Read Guide</Link>
              </Button>
            </Card>
          </div>
        </div>
      </section>

      {/* Compensation Amounts */}
      <section className="py-16 bg-gray-50 dark:bg-gray-800">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold text-center text-gray-900 dark:text-white mb-4">
              How Much Can You Claim?
            </h2>
            <p className="text-center text-gray-600 dark:text-gray-400 mb-12">
              Compensation amount depends on flight distance under EU261
            </p>

            <div className="grid md:grid-cols-3 gap-6">
              <Card className="p-6 text-center">
                <Euro className="h-10 w-10 text-blue-600 mx-auto mb-4" />
                <div className="text-4xl font-bold text-gray-900 dark:text-white mb-2">
                  €250
                </div>
                <p className="text-sm text-gray-600 dark:text-gray-400">
                  Flights up to 1,500 km
                </p>
                <p className="text-xs text-gray-500 dark:text-gray-500 mt-2">
                  e.g., London → Berlin
                </p>
              </Card>

              <Card className="p-6 text-center border-2 border-blue-600">
                <Euro className="h-10 w-10 text-blue-600 mx-auto mb-4" />
                <div className="text-4xl font-bold text-gray-900 dark:text-white mb-2">
                  €400
                </div>
                <p className="text-sm text-gray-600 dark:text-gray-400">
                  EU flights 1,500+ km
                </p>
                <p className="text-xs text-gray-500 dark:text-gray-500 mt-2">
                  e.g., London → Athens
                </p>
              </Card>

              <Card className="p-6 text-center">
                <Euro className="h-10 w-10 text-blue-600 mx-auto mb-4" />
                <div className="text-4xl font-bold text-gray-900 dark:text-white mb-2">
                  €600
                </div>
                <p className="text-sm text-gray-600 dark:text-gray-400">
                  Non-EU flights 3,500+ km
                </p>
                <p className="text-xs text-gray-500 dark:text-gray-500 mt-2">
                  e.g., London → New York
                </p>
              </Card>
            </div>

            <div className="text-center mt-8">
              <Button asChild size="lg">
                <Link href="/en/compensation-calculator">
                  Calculate Your Compensation
                </Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* How It Works */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center text-gray-900 dark:text-white mb-12">
            How to Claim Your Compensation
          </h2>

          <div className="grid md:grid-cols-4 gap-8 max-w-6xl mx-auto">
            <div className="text-center">
              <div className="w-16 h-16 bg-blue-100 dark:bg-blue-900 rounded-full flex items-center justify-center mx-auto mb-4">
                <FileText className="h-8 w-8 text-blue-600" />
              </div>
              <h3 className="font-bold text-gray-900 dark:text-white mb-2">
                1. Check Eligibility
              </h3>
              <p className="text-sm text-gray-600 dark:text-gray-400">
                Enter your flight details to see if you qualify for compensation
              </p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-blue-100 dark:bg-blue-900 rounded-full flex items-center justify-center mx-auto mb-4">
                <Scale className="h-8 w-8 text-blue-600" />
              </div>
              <h3 className="font-bold text-gray-900 dark:text-white mb-2">
                2. Submit Claim
              </h3>
              <p className="text-sm text-gray-600 dark:text-gray-400">
                Our experts prepare and submit your claim to the airline
              </p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-blue-100 dark:bg-blue-900 rounded-full flex items-center justify-center mx-auto mb-4">
                <Users className="h-8 w-8 text-blue-600" />
              </div>
              <h3 className="font-bold text-gray-900 dark:text-white mb-2">
                3. We Handle Everything
              </h3>
              <p className="text-sm text-gray-600 dark:text-gray-400">
                We negotiate with the airline and handle all legal work
              </p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-green-100 dark:bg-green-900 rounded-full flex items-center justify-center mx-auto mb-4">
                <CheckCircle className="h-8 w-8 text-green-600" />
              </div>
              <h3 className="font-bold text-gray-900 dark:text-white mb-2">
                4. Get Paid
              </h3>
              <p className="text-sm text-gray-600 dark:text-gray-400">
                Receive your compensation directly to your bank account
              </p>
            </div>
          </div>

          <div className="text-center mt-12">
            <Button asChild size="lg" className="bg-blue-600 hover:bg-blue-700">
              <a
                href="https://claimwinger.com?utm_source=flightproblem&utm_medium=homepage&utm_campaign=en_process"
                target="_blank"
                rel="noopener noreferrer"
              >
                Start Your Claim Now
              </a>
            </Button>
          </div>
        </div>
      </section>

      {/* EU261 Info */}
      <section className="py-16 bg-blue-50 dark:bg-gray-800">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <Scale className="h-16 w-16 text-blue-600 mx-auto mb-6" />
            <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-4">
              Your Rights Under EU261
            </h2>
            <p className="text-lg text-gray-700 dark:text-gray-300 mb-6">
              EU Regulation 261/2004 protects passengers on flights departing from EU airports or operated by EU airlines. If your flight is delayed 3+ hours or cancelled, you're entitled to compensation.
            </p>
            <div className="grid md:grid-cols-3 gap-6 text-left">
              <Card className="p-4">
                <CheckCircle className="h-6 w-6 text-green-600 mb-2" />
                <h3 className="font-bold text-gray-900 dark:text-white mb-1">
                  Protected Flights
                </h3>
                <p className="text-sm text-gray-600 dark:text-gray-400">
                  EU departures or EU airline arrivals
                </p>
              </Card>
              <Card className="p-4">
                <CheckCircle className="h-6 w-6 text-green-600 mb-2" />
                <h3 className="font-bold text-gray-900 dark:text-white mb-1">
                  Up to 6 Years
                </h3>
                <p className="text-sm text-gray-600 dark:text-gray-400">
                  Claim for flights up to 6 years old
                </p>
              </Card>
              <Card className="p-4">
                <CheckCircle className="h-6 w-6 text-green-600 mb-2" />
                <h3 className="font-bold text-gray-900 dark:text-white mb-1">
                  No Win, No Fee
                </h3>
                <p className="text-sm text-gray-600 dark:text-gray-400">
                  Only pay if we successfully claim
                </p>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <Card className="max-w-3xl mx-auto p-8 bg-gradient-to-r from-blue-600 to-indigo-600 text-white">
            <div className="text-center">
              <h2 className="text-3xl font-bold mb-4">
                Ready to Claim Your Compensation?
              </h2>
              <p className="text-lg mb-6 text-blue-100">
                Join thousands of passengers who have successfully claimed compensation. Free check, no obligations.
              </p>
              <Button
                asChild
                size="lg"
                className="bg-white text-blue-600 hover:bg-gray-100"
              >
                <a
                  href="https://claimwinger.com?utm_source=flightproblem&utm_medium=homepage&utm_campaign=en_cta"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Check My Flight Now →
                </a>
              </Button>
            </div>
          </Card>
        </div>
      </section>
    </LayoutEn>
  );
}