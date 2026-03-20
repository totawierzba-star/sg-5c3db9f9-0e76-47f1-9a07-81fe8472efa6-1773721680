import { LayoutEn } from "@/components/LayoutEn";
import { SEO } from "@/components/SEO";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { blogArticlesEn } from "@/lib/blogArticlesEn";
import Link from "next/link";
import { Clock, BookOpen, ArrowRight } from "lucide-react";
import { useState } from "react";

export default function BlogIndexEn() {
  const [selectedCategory, setSelectedCategory] = useState<string>("all");

  const categories = [
    { id: "all", label: "All Articles" },
    { id: "airline", label: "Airlines" },
    { id: "airport", label: "Airports" },
    { id: "regulation", label: "Regulations" },
    { id: "guide", label: "Guides" },
    { id: "situation", label: "Situations" },
  ];

  const filteredArticles =
    selectedCategory === "all"
      ? blogArticlesEn
      : blogArticlesEn.filter((article) => article.category === selectedCategory);

  const featuredArticles = blogArticlesEn.filter((article) => article.featured);

  return (
    <LayoutEn>
      <SEO
        title="Flight Compensation Blog: Expert Guides & Passenger Rights | LOT Problem"
        description="Expert guides on flight delay compensation, passenger rights under EU261, and how to claim up to €600 from airlines. Learn from real cases and practical advice."
        url="https://lotproblem.pl/en/blog"
      />

      {/* Hero Section */}
      <section className="bg-gradient-to-br from-blue-50 to-indigo-100 dark:from-gray-800 dark:to-gray-900 py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <BookOpen className="h-16 w-16 text-blue-600 mx-auto mb-6" />
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-6">
              Flight Compensation Expert Blog
            </h1>
            <p className="text-xl text-gray-700 dark:text-gray-300 mb-8">
              Passenger rights guides, airline compensation tips, and real-world claim strategies from experts.
            </p>
          </div>
        </div>
      </section>

      {/* Featured Articles */}
      {featuredArticles.length > 0 && (
        <section className="py-12 bg-white dark:bg-gray-900">
          <div className="container mx-auto px-4">
            <div className="max-w-6xl mx-auto">
              <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-8">
                Featured Articles
              </h2>
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                {featuredArticles.slice(0, 3).map((article) => (
                  <Card
                    key={article.id}
                    className="overflow-hidden hover:shadow-xl transition-shadow"
                  >
                    <div className={`h-2 bg-${article.color || "blue"}-600`} />
                    <div className="p-6">
                      <Badge className="mb-3">{article.category}</Badge>
                      <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-3 line-clamp-2">
                        {article.title}
                      </h3>
                      <p className="text-gray-600 dark:text-gray-400 mb-4 line-clamp-3">
                        {article.excerpt}
                      </p>
                      <div className="flex items-center justify-between text-sm text-gray-500 dark:text-gray-400 mb-4">
                        <span className="flex items-center gap-1">
                          <Clock className="h-4 w-4" />
                          {article.readTime}
                        </span>
                        <span>{article.wordCount} words</span>
                      </div>
                      <Button asChild variant="outline" className="w-full">
                        <Link href={`/en/blog/${article.slug}`}>
                          Read Article <ArrowRight className="ml-2 h-4 w-4" />
                        </Link>
                      </Button>
                    </div>
                  </Card>
                ))}
              </div>
            </div>
          </div>
        </section>
      )}

      {/* Category Filter */}
      <section className="py-8 bg-gray-50 dark:bg-gray-800 sticky top-16 z-40 border-b border-gray-200 dark:border-gray-700">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="flex flex-wrap gap-3 justify-center">
              {categories.map((category) => (
                <Button
                  key={category.id}
                  variant={selectedCategory === category.id ? "default" : "outline"}
                  onClick={() => setSelectedCategory(category.id)}
                  className="capitalize"
                >
                  {category.label}
                </Button>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* All Articles */}
      <section className="py-12">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-8">
              {selectedCategory === "all" ? "All Articles" : `${categories.find(c => c.id === selectedCategory)?.label} Articles`}
            </h2>
            <div className="grid md:grid-cols-2 gap-6">
              {filteredArticles.map((article) => (
                <Card
                  key={article.id}
                  className="overflow-hidden hover:shadow-lg transition-shadow"
                >
                  <div className={`h-1 bg-${article.color || "blue"}-600`} />
                  <div className="p-6">
                    <Badge className="mb-3">{article.category}</Badge>
                    <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-3">
                      <Link
                        href={`/en/blog/${article.slug}`}
                        className="hover:text-blue-600 dark:hover:text-blue-400"
                      >
                        {article.title}
                      </Link>
                    </h3>
                    <p className="text-gray-600 dark:text-gray-400 mb-4 line-clamp-2">
                      {article.excerpt}
                    </p>
                    <div className="flex items-center justify-between text-sm text-gray-500 dark:text-gray-400">
                      <span className="flex items-center gap-1">
                        <Clock className="h-4 w-4" />
                        {article.readTime}
                      </span>
                      <span>{article.wordCount} words</span>
                    </div>
                  </div>
                </Card>
              ))}
            </div>

            {filteredArticles.length === 0 && (
              <div className="text-center py-12">
                <p className="text-gray-600 dark:text-gray-400 text-lg">
                  No articles found in this category.
                </p>
              </div>
            )}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-gradient-to-r from-blue-600 to-indigo-600">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center text-white">
            <h2 className="text-3xl font-bold mb-4">Ready to Claim Your Compensation?</h2>
            <p className="text-lg mb-8 text-blue-100">
              Don't wait — check if you're eligible for up to €600 compensation in just 2 minutes.
            </p>
            <Button
              asChild
              size="lg"
              className="bg-white text-blue-600 hover:bg-gray-100"
            >
              <a
                href="https://claimwinger.com?utm_source=blog&utm_medium=en_blog_index&utm_campaign=cta_footer"
                target="_blank"
                rel="noopener noreferrer"
              >
                Check Your Claim Now →
              </a>
            </Button>
          </div>
        </div>
      </section>
    </LayoutEn>
  );
}
