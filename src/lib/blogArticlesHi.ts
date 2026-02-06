export interface BlogArticleHi {
  id: string;
  title: string;
  slug: string;
  category: "airport" | "airline" | "foundation";
  airportCode?: string;
  airportName?: string;
  airlineName?: string;
  flag?: string;
  wordCount: number;
  readTime: number;
  excerpt: string;
  publishDate: string;
  featured: boolean;
  color: string;
}

export const blogArticlesHi: BlogArticleHi[] = [
  {
    id: "delhi-airport-der-se-flight",
    title: "दिल्ली हवाई अड्डा विलंबित उड़ान – मुआवजा गाइड 2026",
    slug: "delhi-airport-der-se-flight",
    category: "airport",
    airportCode: "DEL",
    airportName: "इंदिरा गांधी अंतर्राष्ट्रीय हवाई अड्डा",
    flag: "🇮🇳",
    wordCount: 7500,
    readTime: 25,
    excerpt: "दिल्ली हवाई अड्डे से विलंबित उड़ान के लिए €600 तक का मुआवजा कैसे प्राप्त करें। EU 261/2004 अधिकार, दावा प्रक्रिया और भारतीय यात्रियों के लिए टिप्स।",
    publishDate: "2026-02-06",
    featured: true,
    color: "blue"
  },
  {
    id: "delhi-airport-cancel-flight",
    title: "दिल्ली हवाई अड्डा रद्द उड़ान – मुआवजा और रिफंड गाइड",
    slug: "delhi-airport-cancel-flight",
    category: "airport",
    airportCode: "DEL",
    airportName: "इंदिरा गांधी अंतर्राष्ट्रीय हवाई अड्डा",
    flag: "🇮🇳",
    wordCount: 7200,
    readTime: 24,
    excerpt: "दिल्ली से रद्द की गई उड़ान के लिए मुआवजा + पूर्ण रिफंड प्राप्त करें। आपके अधिकार, प्रक्रिया और सफल दावे के लिए टिप्स।",
    publishDate: "2026-02-06",
    featured: true,
    color: "red"
  }
];

export const getCategoryLabelHi = (category: BlogArticleHi["category"]): string => {
  const labels = {
    airport: "हवाई अड्डा",
    airline: "एयरलाइन",
    foundation: "बुनियादी जानकारी"
  };
  return labels[category];
};

export const getArticlesByCategoryHi = (category: BlogArticleHi["category"]): BlogArticleHi[] => {
  return blogArticlesHi.filter(article => article.category === category);
};

export const getFeaturedArticlesHi = (): BlogArticleHi[] => {
  return blogArticlesHi.filter(article => article.featured);
};

export const getTotalWordCountHi = (): number => {
  return blogArticlesHi.reduce((total, article) => total + article.wordCount, 0);
};