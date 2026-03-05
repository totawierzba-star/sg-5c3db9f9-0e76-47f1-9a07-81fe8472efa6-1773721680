import { SEO } from "@/components/SEO";
import { LayoutIt } from "@/components/LayoutIt";
import { blogArticlesIt } from "@/lib/blogArticlesIt";
import Link from "next/link";
import { Calendar, Clock, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";

export default function BlogIt() {
  const featuredArticles = blogArticlesIt.filter(article => article.featured);
  const categories = ["Tutte", "Compagnie Aeree", "Aeroporti", "Regolamenti", "Guide Pratiche"];

  const getColorClass = (color?: string) => {
    switch (color) {
      case "blue": return "border-l-blue-500";
      case "green": return "border-l-green-500";
      case "orange": return "border-l-orange-500";
      case "purple": return "border-l-purple-500";
      default: return "border-l-gray-500";
    }
  };

  return (
    <LayoutIt>
      <SEO 
        title="Blog — Guide su risarcimenti voli e diritti passeggeri"
        description="Guide complete sui diritti dei passeggeri aerei, Regolamento CE 261/2004 e come ottenere risarcimenti per voli in ritardo o cancellati."
        canonical="https://lotproblem.pl/it/blog"
      />

      {/* Hero Section */}
      <section className="bg-gradient-to-b from-blue-50 to-white py-16">
        <div className="container mx-auto px-4 max-w-4xl text-center">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Guide e risorse sui diritti dei passeggeri aerei
          </h1>
          <p className="text-xl text-gray-600 mb-8">
            Tutto quello che devi sapere su risarcimenti, diritti passeggeri e Regolamento CE 261/2004
          </p>
        </div>
      </section>

      {/* Featured Articles */}
      {featuredArticles.length > 0 && (
        <section className="py-16">
          <div className="container mx-auto px-4 max-w-6xl">
            <h2 className="text-3xl font-bold text-gray-900 mb-8">Articoli in evidenza</h2>
            <div className="grid md:grid-cols-2 gap-8">
              {featuredArticles.map((article) => (
                <Card key={article.slug} className={`border-l-4 ${getColorClass(article.color)} hover:shadow-lg transition-shadow`}>
                  <CardHeader>
                    <div className="flex items-center gap-2 text-sm text-gray-500 mb-2">
                      <span className="bg-blue-100 text-blue-700 px-2 py-1 rounded text-xs font-medium">
                        {article.category}
                      </span>
                      <span className="flex items-center gap-1">
                        <Calendar className="h-4 w-4" />
                        {new Date(article.date).toLocaleDateString('it-IT', { year: 'numeric', month: 'long', day: 'numeric' })}
                      </span>
                      <span className="flex items-center gap-1">
                        <Clock className="h-4 w-4" />
                        {article.readTime}
                      </span>
                    </div>
                    <CardTitle className="text-xl mb-2">
                      <Link href={`/it/blog/${article.slug}`} className="hover:text-blue-600 transition-colors">
                        {article.title}
                      </Link>
                    </CardTitle>
                    <CardDescription className="text-gray-600">
                      {article.excerpt}
                    </CardDescription>
                  </CardHeader>
                  <CardContent>
                    <Link href={`/it/blog/${article.slug}`}>
                      <Button variant="outline" className="w-full group">
                        Leggi l'articolo
                        <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
                      </Button>
                    </Link>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* Categories */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4 max-w-6xl">
          <h2 className="text-3xl font-bold text-gray-900 mb-8">Categorie</h2>
          <div className="grid md:grid-cols-3 gap-6">
            {categories.map((category) => {
              const categoryArticles = blogArticlesIt.filter(article => article.category === category);
              return (
                <Card key={category} className="hover:shadow-md transition-shadow">
                  <CardHeader>
                    <CardTitle className="text-lg">{category}</CardTitle>
                    <CardDescription>{categoryArticles.length} {categoryArticles.length === 1 ? 'articolo' : 'articoli'}</CardDescription>
                  </CardHeader>
                </Card>
              );
            })}
          </div>
        </div>
      </section>

      {/* All Articles */}
      <section className="py-16">
        <div className="container mx-auto px-4 max-w-6xl">
          <h2 className="text-3xl font-bold text-gray-900 mb-8">Tutti gli articoli</h2>
          <div className="space-y-6">
            {blogArticlesIt.map((article) => (
              <Card key={article.slug} className="hover:shadow-md transition-shadow">
                <CardHeader>
                  <div className="flex flex-wrap items-center gap-2 text-sm text-gray-500 mb-2">
                    <span className="bg-blue-100 text-blue-700 px-2 py-1 rounded text-xs font-medium">
                      {article.category}
                    </span>
                    <span className="flex items-center gap-1">
                      <Calendar className="h-4 w-4" />
                      {new Date(article.date).toLocaleDateString('it-IT', { year: 'numeric', month: 'long', day: 'numeric' })}
                    </span>
                    <span className="flex items-center gap-1">
                      <Clock className="h-4 w-4" />
                      {article.readTime}
                    </span>
                  </div>
                  <CardTitle className="text-xl mb-2">
                    <Link href={`/it/blog/${article.slug}`} className="hover:text-blue-600 transition-colors">
                      {article.title}
                    </Link>
                  </CardTitle>
                  <CardDescription className="text-gray-600">
                    {article.excerpt}
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <Link href={`/it/blog/${article.slug}`}>
                    <Button variant="ghost" className="group">
                      Leggi di più
                      <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
                    </Button>
                  </Link>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-blue-600 text-white">
        <div className="container mx-auto px-4 max-w-4xl text-center">
          <h2 className="text-3xl font-bold mb-4">Hai subito un disagio aereo?</h2>
          <p className="text-xl mb-8 text-blue-100">
            Verifica gratuitamente se hai diritto al risarcimento. Nessun costo se non vinciamo.
          </p>
          <Button size="lg" variant="secondary" asChild>
            <a href="https://claimwinger.com/it" className="inline-flex items-center">
              Verifica il tuo volo ora
              <ArrowRight className="ml-2 h-5 w-5" />
            </a>
          </Button>
        </div>
      </section>
    </LayoutIt>
  );
}