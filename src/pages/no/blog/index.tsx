import { LayoutNo } from "@/components/LayoutNo";
import { SEO } from "@/components/SEO";
import Link from "next/link";
import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { ArrowRight, BookOpen, Clock, Calendar } from "lucide-react";
import { blogArticlesNo, getTotalWordCountNo } from "@/lib/blogArticlesNo";

export default function BlogIndexNo() {
  const totalArticles = blogArticlesNo.length;
  const totalWords = getTotalWordCountNo();

  return (
    <LayoutNo>
      <SEO 
        title="Blogg om passasjerrettigheter | FlyProblem.no"
        description="Les våre guider og artikler om flyforsinkelser, innstillinger og passasjerrettigheter i Norge og EU."
        url="https://problemlot.com/no/blog"
      />
      
      <div className="bg-blue-50 dark:bg-blue-900/20 py-16">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-6">
            Kunnskapsbase og guider
          </h1>
          <p className="text-xl text-gray-600 dark:text-gray-300 max-w-2xl mx-auto mb-8">
            Alt du trenger å vite om dine rettigheter som flypassasjer. 
            Lær hvordan du sikrer erstatning når reisen ikke går som planlagt.
          </p>
          
          <div className="flex justify-center gap-6 text-sm font-medium text-gray-500 dark:text-gray-400">
            <div className="flex items-center bg-white dark:bg-gray-800 px-4 py-2 rounded-full shadow-sm">
              <BookOpen className="w-4 h-4 mr-2 text-blue-500" />
              {totalArticles} Artikkel{totalArticles !== 1 ? 'er' : ''}
            </div>
            <div className="flex items-center bg-white dark:bg-gray-800 px-4 py-2 rounded-full shadow-sm">
              <Clock className="w-4 h-4 mr-2 text-blue-500" />
              ~{Math.round(totalWords / 250)} min lesetid totalt
            </div>
          </div>
        </div>
      </div>

      <div className="container mx-auto px-4 py-16 max-w-6xl">
        {blogArticlesNo.length === 0 ? (
          <div className="text-center py-20">
            <BookOpen className="w-16 h-16 text-gray-300 mx-auto mb-4" />
            <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-2">
              Nye artikler kommer snart!
            </h2>
            <p className="text-gray-600 dark:text-gray-400">
              Vi jobber med å skrive verdifulle guider for norske passasjerer.
            </p>
          </div>
        ) : (
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {blogArticlesNo.map((article) => (
              <Link key={article.id} href={`/no/blog/${article.slug}`}>
                <Card className="h-full hover:shadow-lg transition-all duration-200 border-gray-200 dark:border-gray-800 dark:bg-gray-900 group">
                  <CardHeader>
                    <div className="flex justify-between items-center mb-3">
                      {article.category && (
                        <span className="text-xs font-semibold text-blue-600 dark:text-blue-400 bg-blue-50 dark:bg-blue-900/30 px-3 py-1 rounded-full">
                          {article.category}
                        </span>
                      )}
                      {article.readTime && (
                        <span className="text-xs text-gray-500 dark:text-gray-400 flex items-center">
                          <Clock className="w-3 h-3 mr-1" />
                          {article.readTime}
                        </span>
                      )}
                    </div>
                    <h3 className="text-xl font-bold text-gray-900 dark:text-white group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors line-clamp-2">
                      {article.title}
                    </h3>
                  </CardHeader>
                  <CardContent>
                    <p className="text-gray-600 dark:text-gray-400 mb-6 line-clamp-3">
                      {article.excerpt}
                    </p>
                    <div className="flex items-center text-blue-600 dark:text-blue-400 font-medium">
                      Les mer <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
                    </div>
                  </CardContent>
                </Card>
              </Link>
            ))}
          </div>
        )}
      </div>
    </LayoutNo>
  );
}