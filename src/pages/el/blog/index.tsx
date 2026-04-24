import { LayoutEl } from "@/components/LayoutEl";
import { SEO } from "@/components/SEO";
import {
  UnifiedBlogIndex,
  type UnifiedBlogArticle,
} from "@/components/UnifiedBlogIndex";
import { blogArticlesEl, getCategoryLabelEl } from "@/lib/blogArticlesEl";

const canonicalUrl = "https://problemlot.com/el/blog";

const articles: UnifiedBlogArticle[] = blogArticlesEl.map((article) => ({
  id: article.id,
  title: article.title,
  slug: article.slug,
  excerpt: article.excerpt,
  category: article.category,
  categoryLabel: getCategoryLabelEl(article.category),
  date: article.publishDate,
  readTime: `${article.readTime} λεπτά`,
  wordCount: article.wordCount,
  featured: article.featured,
  eyebrow: article.airlineName || article.airportCode || article.flag,
}));

export default function BlogIndexEl() {
  return (
    <LayoutEl>
      <SEO
        title={`Ελληνικό blog για αποζημιώσεις πτήσεων - ${articles.length} οδηγοί | ProblemLot.com`}
        description={`Οδηγοί στα ελληνικά για καθυστερημένες και ακυρωμένες πτήσεις, EU261, δικαιώματα επιβατών και αποζημίωση έως 600 €. ${articles.length} άρθρα.`}
        url={canonicalUrl}
        canonicalUrl={canonicalUrl}
        locale="el_GR"
        language="Greek"
      />
      <UnifiedBlogIndex
        articles={articles}
        basePath="/el/blog"
        canonicalUrl={canonicalUrl}
        theme="sky"
        categoryOrder={[
          { id: "foundation", label: "Βασικά" },
          { id: "airline", label: "Αεροπορικές" },
          { id: "airport", label: "Αεροδρόμια" },
          { id: "longtail", label: "Ειδικές περιπτώσεις" },
        ]}
        stats={[
          { value: articles.length, label: "άρθρα" },
          { value: "EU261", label: "κύριος οδηγός" },
          { value: "600 €", label: "μέγιστη αποζημίωση" },
        ]}
        labels={{
          eyebrow: "Ελληνική βάση γνώσης EU261",
          title: "Οδηγοί για καθυστερήσεις και ακυρώσεις πτήσεων",
          description:
            "Βρείτε γρήγορα το σωστό άρθρο ανά αεροπορική, αεροδρόμιο, διαδρομή ή πρόβλημα. Το blog είναι οργανωμένο για σύντομες απαντήσεις και πρακτικά επόμενα βήματα.",
          searchPlaceholder: "Αναζήτηση: Aegean, καθυστέρηση, ακύρωση, EU261...",
          filterLabel: "Φίλτρο ανά θέμα",
          allCategoryLabel: "Όλα",
          featuredTitle: "Προτεινόμενοι οδηγοί",
          allArticlesTitle: "Όλα τα άρθρα",
          readMoreLabel: "Διαβάστε τον οδηγό",
          emptyTitle: "Δεν βρέθηκαν άρθρα",
          emptyDescription: "Δοκιμάστε πιο γενικό όρο αναζήτησης ή καθαρίστε τα φίλτρα.",
          clearFiltersLabel: "Καθαρισμός φίλτρων",
          countLabel: (count) => (count === 1 ? "άρθρο" : "άρθρα"),
          showingLabel: (shown, total) => `Εμφάνιση ${shown} από ${total} άρθρα`,
        }}
        cta={{
          title: "Η πτήση σας είχε πρόβλημα;",
          description:
            "Ελέγξτε αν δικαιούστε αποζημίωση έως 600 € για καθυστέρηση, ακύρωση ή χαμένη ανταπόκριση.",
          href: "https://claimwinger.com?utm_source=problemlot&utm_medium=el_blog_index&utm_campaign=blog_cta",
          label: "Έλεγχος πτήσης",
          note: "No win, no fee. Χωρίς προκαταβολή.",
        }}
      />
    </LayoutEl>
  );
}
