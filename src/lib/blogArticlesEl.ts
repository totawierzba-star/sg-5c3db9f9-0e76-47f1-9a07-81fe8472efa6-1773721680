export interface BlogArticleEl {
  id: string;
  title: string;
  slug: string;
  category: "foundation" | "airline" | "airport" | "longtail";
  airlineName?: string;
  airportCode?: string;
  airportName?: string;
  flag?: string;
  wordCount: number;
  readTime: number;
  excerpt: string;
  publishDate: string;
  featured: boolean;
  color: string;
  schema?: {
    faqItems?: Array<{ question: string; answer: string }>;
  };
}

export const blogArticlesEl: BlogArticleEl[] = [
  {
    id: "poses-ores-kathysterisis-chreiazontai-gia-apozimiosi",
    title: "Πόσες ώρες καθυστέρησης χρειάζονται για αποζημίωση;",
    slug: "poses-ores-kathysterisis-chreiazontai-gia-apozimiosi",
    category: "foundation",
    wordCount: 2600,
    readTime: 9,
    excerpt:
      "Πόσες ώρες πρέπει να καθυστερήσει μια πτήση για να προκύψει αποζημίωση; Εξηγούμε τον κανόνα των 3 ωρών, τη σημασία της τελικής άφιξης και πότε η καθυστέρηση δίνει μόνο δικαίωμα φροντίδας ή επιστροφής χρημάτων.",
    publishDate: "2026-04-13",
    featured: true,
    color: "sky",
    schema: {
      faqItems: [
        {
          question: "Πόσες ώρες καθυστέρησης χρειάζονται για αποζημίωση;",
          answer:
            "Συνήθως χρειάζεται καθυστέρηση 3 ωρών ή περισσότερο στην τελική άφιξη στον προορισμό σας, εφόσον η πτήση εμπίπτει στο EU261 και η αεροπορική δεν αποδείξει έκτακτες περιστάσεις.",
        },
        {
          question: "Μετράει η καθυστέρηση στην αναχώρηση ή στην άφιξη;",
          answer:
            "Για τη χρηματική αποζημίωση μετράει η καθυστέρηση στην τελική άφιξη. Μια πτήση μπορεί να φύγει αργά αλλά να ανακτήσει χρόνο στη διαδρομή, οπότε δεν προκύπτει απαραίτητα δικαίωμα αποζημίωσης.",
        },
      ],
    },
  },
  {
    id: "posa-chrimata-pairno-gia-kathysterisi-3-oron",
    title: "Πόσα χρήματα παίρνω για καθυστέρηση 3 ωρών;",
    slug: "posa-chrimata-pairno-gia-kathysterisi-3-oron",
    category: "foundation",
    wordCount: 2400,
    readTime: 8,
    excerpt:
      "Αν η πτήση σας έφτασε 3 ώρες αργότερα, η αποζημίωση δεν είναι πάντα ίδια. Δείτε πότε μιλάμε για 250 €, 400 € ή 600 €, τι μετράει στην τελική άφιξη και πότε η αεροπορική μπορεί να αρνηθεί πληρωμή.",
    publishDate: "2026-04-13",
    featured: true,
    color: "sky",
    schema: {
      faqItems: [
        {
          question: "Πόσα χρήματα παίρνω για καθυστέρηση 3 ωρών;",
          answer:
            "Συνήθως 250 €, 400 € ή 600 €, ανάλογα με την απόσταση της πτήσης και εφόσον η πτήση εμπίπτει στο EU261, η καθυστέρηση στην τελική άφιξη είναι τουλάχιστον 3 ώρες και η αεροπορική δεν αποδείξει έκτακτες περιστάσεις.",
        },
        {
          question: "Είναι πάντα 250 € όταν η καθυστέρηση είναι 3 ώρες;",
          answer:
            "Όχι. Τα 250 € είναι το πιο συχνό ποσό για μικρότερες διαδρομές έως 1.500 χλμ. Σε μεγαλύτερες αποστάσεις, το ποσό μπορεί να είναι 400 € ή 600 €.",
        },
      ],
    },
  },
];

export const getCategoryLabelEl = (category: BlogArticleEl["category"]): string => {
  const labels: Record<BlogArticleEl["category"], string> = {
    foundation: "Βασικά",
    airline: "Αεροπορικές",
    airport: "Αεροδρόμια",
    longtail: "Οδηγοί",
  };

  return labels[category];
};

export const getArticlesByCategoryEl = (
  category: BlogArticleEl["category"],
): BlogArticleEl[] => {
  return blogArticlesEl.filter((article) => article.category === category);
};

export const getFeaturedArticlesEl = (): BlogArticleEl[] => {
  return blogArticlesEl.filter((article) => article.featured);
};

export const getTotalWordCountEl = (): number => {
  return blogArticlesEl.reduce((total, article) => total + article.wordCount, 0);
};
