/**
 * Schema.org JSON-LD Generator for FAQ Pages
 * Generates structured data for better Google Search visibility
 * https://developers.google.com/search/docs/appearance/structured-data/faqpage
 */

export interface FAQItem {
  question: string;
  answer: string;
}

/**
 * Generates FAQPage JSON-LD schema
 * @param faqs - Array of FAQ items with question and answer
 * @returns JSON-LD schema object
 */
export function generateFAQSchema(faqs: FAQItem[]) {
  return {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": faqs.map(faq => ({
      "@type": "Question",
      "name": faq.question,
      "acceptedAnswer": {
        "@type": "Answer",
        "text": faq.answer
      }
    }))
  };
}

/**
 * Generates Article JSON-LD schema
 * @param title - Article title
 * @param description - Article description
 * @param url - Article URL
 * @param publishDate - Publication date (ISO format)
 * @param modifiedDate - Last modified date (ISO format)
 * @param author - Author name
 * @param imageUrl - Featured image URL
 * @returns JSON-LD schema object
 */
export function generateArticleSchema({
  title,
  description,
  url,
  publishDate,
  modifiedDate,
  author = "ProblemLot.pl",
  imageUrl = "https://problemlot.pl/og-image.png"
}: {
  title: string;
  description: string;
  url: string;
  publishDate: string;
  modifiedDate?: string;
  author?: string;
  imageUrl?: string;
}) {
  return {
    "@context": "https://schema.org",
    "@type": "Article",
    "headline": title,
    "description": description,
    "url": url,
    "datePublished": publishDate,
    "dateModified": modifiedDate || publishDate,
    "author": {
      "@type": "Organization",
      "name": author,
      "url": "https://problemlot.pl"
    },
    "publisher": {
      "@type": "Organization",
      "name": "ProblemLot.pl",
      "logo": {
        "@type": "ImageObject",
        "url": imageUrl
      }
    },
    "image": imageUrl,
    "mainEntityOfPage": {
      "@type": "WebPage",
      "@id": url
    }
  };
}

/**
 * Generates BreadcrumbList JSON-LD schema
 * @param breadcrumbs - Array of breadcrumb items with name and url
 * @returns JSON-LD schema object
 */
export function generateBreadcrumbSchema(breadcrumbs: { name: string; url: string }[]) {
  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    "itemListElement": breadcrumbs.map((item, index) => ({
      "@type": "ListItem",
      "position": index + 1,
      "name": item.name,
      "item": item.url
    }))
  };
}

/**
 * Combines multiple schemas into a single JSON-LD array
 * @param schemas - Array of schema objects
 * @returns Combined JSON-LD array
 */
export function combineSchemas(...schemas: Record<string, unknown>[]) {
  return schemas;
}