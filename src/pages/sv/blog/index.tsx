import React from "react";
import Link from "next/link";
import { LayoutSv } from "@/components/LayoutSv";
import { SEO } from "@/components/SEO";
import { blogArticlesSv } from "@/lib/blogArticlesSv";
import { Card, CardContent, CardHeader, CardTitle, CardDescription, CardFooter } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Calendar, Clock, ArrowRight, FileText } from "lucide-react";

export default function SvBlogIndex() {
  const totalArticles = blogArticlesSv.length;
  const featuredArticle = blogArticlesSv.find(a => a.featured) || blogArticlesSv[0];
  const regularArticles = blogArticlesSv.filter(a => a.id !== featuredArticle?.id);

  return (
    <LayoutSv>
      <SEO
        title="Flygrättigheter Blogg & Guider | LotProblem.pl"
        description="Läs våra expertguider om ersättning för försenade och inställda flyg. Tips, råd och nyheter för svenska resenärer."
        url="https://lotproblem.pl/sv/blog"
      />

      <div className="container mx-auto px-4 py-12">
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-bold mb-4 text-gray-900 dark:text-white">
            Blogg & Guider
          </h1>
          <p className="text-xl text-gray-600 dark:text-gray-300 max-w-2xl mx-auto mb-6">
            Allt du behöver veta om dina rättigheter som flygpassagerare. Experttips för att få ersättning från SAS, Ryanair, Norwegian och andra.
          </p>
          
          <div className="inline-flex items-center bg-blue-50 dark:bg-blue-900/20 px-4 py-2 rounded-full text-blue-700 dark:text-blue-300 font-medium border border-blue-100 dark:border-blue-800">
            <FileText className="w-5 h-5 mr-2" />
            <span>{totalArticles} artiklar i databasen</span>
          </div>
        </div>

        {featuredArticle && (
          <section className="mb-16">
            <h2 className="text-2xl font-bold mb-6 text-gray-900 dark:text-white">Utvalt</h2>
            <Link href={`/sv/blog/${featuredArticle.slug}`} className="group">
              <Card className="border-blue-200 dark:border-blue-800 bg-blue-50/50 dark:bg-blue-900/10 hover:shadow-md transition-all">
                <CardHeader>
                  <div className="flex items-center gap-2 mb-2">
                    <Badge className="bg-blue-600 hover:bg-blue-700">Utvald</Badge>
                    <span className="text-sm text-gray-500 flex items-center">
                      <Calendar className="w-3 h-3 mr-1" /> {featuredArticle.publishDate}
                    </span>
                  </div>
                  <CardTitle className="text-3xl md:text-4xl font-bold group-hover:text-blue-700 transition-colors">
                    {featuredArticle.title}
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-lg md:text-xl text-gray-700 dark:text-gray-300 max-w-3xl">
                    {featuredArticle.excerpt}
                  </p>
                </CardContent>
                <CardFooter>
                  <div className="flex items-center text-blue-600 font-semibold group-hover:translate-x-2 transition-transform text-lg">
                    Läs artikeln <ArrowRight className="ml-2 h-5 w-5" />
                  </div>
                </CardFooter>
              </Card>
            </Link>
          </section>
        )}

        <section>
          <div className="flex items-center justify-between mb-6">
            <h2 className="text-2xl font-bold text-gray-900 dark:text-white">Senaste artiklarna</h2>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {regularArticles.map((article) => (
              <Link key={article.id} href={`/sv/blog/${article.slug}`} className="group h-full">
                <Card className="h-full hover:shadow-lg transition-all border-gray-200 dark:border-gray-700 flex flex-col hover:border-blue-300 dark:hover:border-blue-700 bg-white dark:bg-gray-800/50">
                  <CardHeader className="pb-3">
                    <div className="flex items-center justify-between mb-3">
                      <Badge variant="outline" className="text-xs font-normal text-gray-600 dark:text-gray-400 border-gray-300 dark:border-gray-600">
                        {article.category}
                      </Badge>
                      <span className="text-xs text-gray-400 flex items-center">
                        <Clock className="w-3 h-3 mr-1" /> {article.readTime}
                      </span>
                    </div>
                    <CardTitle className="text-xl leading-snug group-hover:text-blue-600 transition-colors line-clamp-2">
                      {article.title}
                    </CardTitle>
                  </CardHeader>
                  <CardContent className="flex-grow pb-4">
                    <CardDescription className="text-sm line-clamp-3 text-gray-600 dark:text-gray-400">
                      {article.excerpt}
                    </CardDescription>
                  </CardContent>
                  <CardFooter className="pt-0 mt-auto">
                    <span className="text-sm font-medium text-blue-600 flex items-center group-hover:translate-x-1 transition-transform">
                      Läs mer <ArrowRight className="w-3 h-3 ml-1" />
                    </span>
                  </CardFooter>
                </Card>
              </Link>
            ))}
            
            {blogArticlesSv.length === 0 && (
               <div className="col-span-full text-center py-12 text-gray-500">
                 Fler artiklar kommer snart...
               </div>
            )}
          </div>
        </section>
      </div>
    </LayoutSv>
  );
}
