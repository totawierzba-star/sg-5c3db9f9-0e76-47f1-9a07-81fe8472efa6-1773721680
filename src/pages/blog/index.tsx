import { Layout } from "@/components/Layout";
import { SEO } from "@/components/SEO";
import {
  UnifiedBlogIndex,
  type UnifiedBlogArticle,
} from "@/components/UnifiedBlogIndex";
import { blogArticles } from "@/lib/blogArticles";

const canonicalUrl = "https://problemlot.com/blog";

const businessTravelArtifactSlugs = new Set([
  "lot-b2b-odszkodowanie-lot-sluzbowy",
  "overbooking-lot-sluzbowy-pracy",
  "odwolany-lot-sluzbowy-koszty-hotel-przesiadki",
  "ec-261-2004-loty-sluzbowe-rozporzadzenie",
  "lot-sluzbowy-opozniony-3-godziny-kroki",
  "zgubiony-bagaz-podroz-sluzbowa-odszkodowanie-procedura",
  "opoznienie-lotu-spotkanie-biznesowe-koszty-konsekwencje",
  "lot-sluzbowy-odwolany-ostatnia-chwila-co-zrobic",
  "bilet-sluzbowy-firma-reklamacja-kto-sklada",
  "jak-napisac-polityke-podrozy-sluzbowych-firmy",
  "travel-policy-regulamin-firmowy-elementy",
  "limity-klasy-biletow-podroz-sluzbowa-jak-ustalic",
  "self-booking-tool-vs-agencja-travel-porownanie-firmy",
  "zarzadzanie-wydatkami-loty-sluzbowe-narzedzia-systemy",
  "duty-of-care-obowiazek-pracodawcy-podrozujacy-pracownik",
  "polityka-zrownowazonych-podrozy-sluzbowych-jak-wdrozyc",
  "podroze-sluzbowe-work-life-balance-polityka-przedluzania-wyjazdow",
  "kpi-podrozy-sluzbowe-jak-mierzyc-efektywnosc-travel-policy",
]);

const articles: UnifiedBlogArticle[] = blogArticles
  .filter((article) => !businessTravelArtifactSlugs.has(article.slug))
  .map((article) => ({
    id: article.id || article.slug,
    title: article.title,
    slug: article.slug,
    excerpt: article.excerpt,
    category: article.category,
    date: article.publishDate || article.date,
    readTime: article.readTime,
    featured: article.featured,
  }));

const countLabel = (count: number) => {
  if (count === 1) return "artykuł";
  if (count % 10 >= 2 && count % 10 <= 4 && (count % 100 < 10 || count % 100 >= 20)) {
    return "artykuły";
  }
  return "artykułów";
};

export default function BlogIndex() {
  return (
    <Layout>
      <SEO
        title={`Blog o odszkodowaniach lotniczych - ${articles.length} poradników | ProblemLot.com`}
        description={`Praktyczne poradniki o opóźnionych i odwołanych lotach, EU261, reklamacjach i odszkodowaniu do 600 EUR. ${articles.length} artykułów eksperckich.`}
        url={canonicalUrl}
        canonicalUrl={canonicalUrl}
      />
      <UnifiedBlogIndex
        articles={articles}
        basePath="/blog"
        canonicalUrl={canonicalUrl}
        theme="blue"
        categoryOrder={[
          { id: "LOT Polish Airlines", label: "LOT Polish Airlines" },
          { id: "Ryanair", label: "Ryanair" },
          { id: "Wizz Air", label: "Wizz Air" },
          { id: "Linie lotnicze", label: "Linie lotnicze" },
          { id: "Prawo lotnicze", label: "Prawo lotnicze" },
          { id: "Aplikacja i narzędzia", label: "Aplikacja i narzędzia" },
          { id: "Lotniska", label: "Lotniska" },
          { id: "Porównania", label: "Porównania" },
        ]}
        stats={[
          { value: articles.length, label: "artykułów" },
          { value: "EU261", label: "główny temat" },
          { value: "600 EUR", label: "maks. odszkodowania" },
        ]}
        labels={{
          eyebrow: "Centrum wiedzy ProblemLot.com",
          title: "Blog o prawach pasażerów lotniczych",
          description:
            "Praktyczne poradniki o opóźnieniach, odwołaniach, reklamacjach i odszkodowaniu za lot. Szybko znajdziesz artykuły według linii, lotniska, problemu albo konkretnej trasy.",
          searchPlaceholder: "Szukaj: Ryanair, LOT, opóźnienie 3 godziny, EU261...",
          filterLabel: "Filtruj po kategorii",
          allCategoryLabel: "Wszystkie",
          featuredTitle: "Najważniejsze poradniki",
          allArticlesTitle: "Wszystkie artykuły",
          readMoreLabel: "Czytaj artykuł",
          emptyTitle: "Nie znaleziono artykułów",
          emptyDescription:
            "Spróbuj krótszego zapytania albo wróć do wszystkich kategorii.",
          clearFiltersLabel: "Wyczyść filtry",
          countLabel,
          showingLabel: (shown, total) => `Pokazuję ${shown} z ${total} ${countLabel(total)}`,
        }}
        cta={{
          title: "Masz problem z lotem?",
          description:
            "Sprawdź w kalkulatorze szacunkową kwotę odszkodowania albo od razu rozpocznij bezpłatną weryfikację sprawy.",
          href: "https://claimwinger.com/pl?utm_source=problemlot&utm_medium=blog_index&utm_campaign=pl_blog_cta",
          label: "Sprawdź sprawę",
          secondaryHref: "/ile-mozesz-dostac",
          secondaryLabel: "Kalkulator odszkodowań",
          note: "No win, no fee. Płacisz tylko po skutecznym odzyskaniu pieniędzy.",
        }}
      />
    </Layout>
  );
}
