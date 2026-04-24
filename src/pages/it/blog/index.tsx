import { LayoutIt } from "@/components/LayoutIt";
import { SEO } from "@/components/SEO";
import {
  UnifiedBlogIndex,
  type UnifiedBlogArticle,
} from "@/components/UnifiedBlogIndex";
import { blogArticlesIt } from "@/lib/blogArticlesIt";

const canonicalUrl = "https://problemlot.com/it/blog";

const articles: UnifiedBlogArticle[] = blogArticlesIt.map((article) => ({
  id: article.slug,
  title: article.title,
  slug: article.slug,
  excerpt: article.excerpt,
  category: article.category,
  date: article.date,
  readTime: article.readTime,
  featured: article.featured,
}));

export default function BlogIt() {
  return (
    <LayoutIt>
      <SEO
        title={`Blog diritti dei passeggeri e risarcimenti voli - ${articles.length} guide | ProblemLot.com`}
        description={`Guide italiane su CE 261/2004, voli in ritardo o cancellati, compagnie aeree, aeroporti e risarcimento fino a 600 €. ${articles.length} articoli.`}
        url={canonicalUrl}
        canonicalUrl={canonicalUrl}
        locale="it_IT"
        language="Italian"
      />
      <UnifiedBlogIndex
        articles={articles}
        basePath="/it/blog"
        canonicalUrl={canonicalUrl}
        theme="blue"
        categoryOrder={[
          { id: "Compagnie Aeree", label: "Compagnie aeree" },
          { id: "Aeroporti", label: "Aeroporti" },
          { id: "Regolamenti", label: "Regolamenti" },
          { id: "Guide Pratiche", label: "Guide pratiche" },
        ]}
        stats={[
          { value: articles.length, label: "articoli" },
          { value: "CE 261", label: "regola chiave" },
          { value: "600 €", label: "risarcimento max" },
        ]}
        labels={{
          eyebrow: "Blog sui diritti dei passeggeri",
          title: "Guide e articoli sui risarcimenti voli",
          description:
            "Trova il contenuto giusto per compagnia, aeroporto, normativa o problema pratico. La ricerca e i filtri rendono più veloce capire se puoi chiedere un risarcimento.",
          searchPlaceholder: "Cerca: Ryanair, ITA, ritardo 3 ore, aeroporto...",
          filterLabel: "Filtra per argomento",
          allCategoryLabel: "Tutte",
          featuredTitle: "Guide in evidenza",
          allArticlesTitle: "Tutti gli articoli",
          readMoreLabel: "Leggi l'articolo",
          emptyTitle: "Nessun articolo trovato",
          emptyDescription: "Prova una ricerca più ampia oppure cancella i filtri.",
          clearFiltersLabel: "Cancella filtri",
          countLabel: (count) => (count === 1 ? "articolo" : "articoli"),
          showingLabel: (shown, total) => `Mostrati ${shown} di ${total} articoli`,
        }}
        cta={{
          title: "Hai avuto un problema con il tuo volo?",
          description:
            "Verifica gratuitamente se hai diritto a un risarcimento fino a 600 € per ritardo, cancellazione o overbooking.",
          href: "https://claimwinger.com/it?utm_source=problemlot&utm_medium=it_blog_index&utm_campaign=blog_cta",
          label: "Controlla il risarcimento",
          note: "No win, no fee. Nessun pagamento anticipato.",
        }}
      />
    </LayoutIt>
  );
}
