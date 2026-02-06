export interface BlogArticle {
  id: string;
  title: string;
  slug: string;
  category: "airline" | "airport" | "foundation";
  airlineCode?: string;
  airlineName?: string;
  airlineFlag?: string;
  wordCount: number;
  readTime: number;
  excerpt: string;
  publishDate: string;
  featured: boolean;
  color: string;
}

export const blogArticles: BlogArticle[] = [
  {
    id: "lufthansa-delay-cancellation-compensation",
    title: "汉莎航空延误/取消赔偿完整指南 2026",
    slug: "/zh/blog/lufthansa-delay-cancellation-compensation",
    category: "airline",
    airlineCode: "LH",
    airlineName: "汉莎航空",
    airlineFlag: "🇩🇪",
    wordCount: 8500,
    readTime: 30,
    excerpt: "法兰克福/慕尼黑转机延误？汉莎航空取消航班？了解您的 EU261 赔偿权利。",
    publishDate: "2026-01-28",
    featured: true,
    color: "bg-yellow-50 dark:bg-yellow-950"
  },
  {
    id: "british-airways-compensation-guide",
    title: "英国航空延误/取消赔偿指南 2026",
    slug: "/zh/blog/british-airways-compensation-guide",
    category: "airline",
    airlineCode: "BA",
    airlineName: "英国航空",
    airlineFlag: "🇬🇧",
    wordCount: 9200,
    readTime: 32,
    excerpt: "伦敦希思罗转机问题？英航航班取消？UK261 赔偿完整攻略。",
    publishDate: "2026-01-29",
    featured: true,
    color: "bg-slate-50 dark:bg-slate-950"
  },
  {
    id: "air-france-compensation-guide",
    title: "法国航空延误/取消赔偿指南 2026",
    slug: "/zh/blog/air-france-compensation-guide",
    category: "airline",
    airlineCode: "AF",
    airlineName: "法国航空",
    airlineFlag: "🇫🇷",
    wordCount: 8900,
    readTime: 31,
    excerpt: "戴高乐机场转机延误？法航航班取消？详解 EU261 赔偿权利。",
    publishDate: "2026-01-30",
    featured: true,
    color: "bg-blue-50 dark:bg-blue-950"
  },
  {
    id: "klm-compensation-guide",
    title: "荷兰皇家航空延误/取消赔偿指南 2026",
    slug: "/zh/blog/klm-compensation-guide",
    category: "airline",
    airlineCode: "KL",
    airlineName: "荷兰皇家航空",
    airlineFlag: "🇳🇱",
    wordCount: 8700,
    readTime: 30,
    excerpt: "史基浦机场转机问题？KLM 航班延误？了解您的赔偿权利。",
    publishDate: "2026-01-31",
    featured: false,
    color: "bg-sky-50 dark:bg-sky-950"
  },
  {
    id: "finnair-compensation-guide",
    title: "芬兰航空延误/取消赔偿指南 2026",
    slug: "/zh/blog/finnair-compensation-guide",
    category: "airline",
    airlineCode: "AY",
    airlineName: "芬兰航空",
    airlineFlag: "🇫🇮",
    wordCount: 7800,
    readTime: 27,
    excerpt: "赫尔辛基转机延误？芬航航班取消？EU261 赔偿完整攻略。",
    publishDate: "2026-02-01",
    featured: false,
    color: "bg-blue-50 dark:bg-blue-950"
  },
  {
    id: "lot-polish-airlines-compensation-guide",
    title: "LOT 波兰航空延误/取消赔偿指南 2026",
    slug: "/zh/blog/lot-polish-airlines-compensation-guide",
    category: "airline",
    airlineCode: "LO",
    airlineName: "LOT 波兰航空",
    airlineFlag: "🇵🇱",
    wordCount: 8400,
    readTime: 29,
    excerpt: "华沙转机延误？LOT 航班取消？了解 EU261 赔偿权利。",
    publishDate: "2026-01-27",
    featured: false,
    color: "bg-red-50 dark:bg-red-950"
  },
  {
    id: "beijing-capital-delayed-flight-compensation",
    title: "北京首都机场延误航班赔偿指南 2026",
    slug: "/zh/blog/beijing-capital-delayed-flight-compensation",
    category: "airport",
    wordCount: 7200,
    readTime: 25,
    excerpt: "从北京首都机场出发的欧洲航班延误？了解您的 EU261 赔偿权利。",
    publishDate: "2026-01-25",
    featured: false,
    color: "bg-emerald-50 dark:bg-emerald-950"
  },
  {
    id: "beijing-capital-cancelled-flight-compensation",
    title: "北京首都机场取消航班赔偿指南 2026",
    slug: "/zh/blog/beijing-capital-cancelled-flight-compensation",
    category: "airport",
    wordCount: 7500,
    readTime: 26,
    excerpt: "北京首都机场航班取消？详解 EU261 赔偿申请流程。",
    publishDate: "2026-01-26",
    featured: false,
    color: "bg-emerald-50 dark:bg-emerald-950"
  },
  {
    id: "eu261-uk261-passenger-rights",
    title: "EU261/UK261 航空乘客权利完整指南 2026",
    slug: "/zh/blog/eu261-uk261-passenger-rights",
    category: "foundation",
    wordCount: 6800,
    readTime: 24,
    excerpt: "详解欧盟/英国航空乘客权利法规。延误、取消、拒绝登机赔偿全攻略。",
    publishDate: "2026-01-20",
    featured: false,
    color: "bg-indigo-50 dark:bg-indigo-950"
  },
  {
    id: "chinese-citizens-eu261-compensation-guide",
    title: "中国公民 EU261 赔偿完整指南 2026",
    slug: "/zh/blog/chinese-citizens-eu261-compensation-guide",
    category: "foundation",
    wordCount: 8200,
    readTime: 29,
    excerpt: "中国公民如何申请欧盟航班赔偿？资格、流程、案例全解析。",
    publishDate: "2026-01-24",
    featured: false,
    color: "bg-purple-50 dark:bg-purple-950"
  }
];

export const getCategoryLabel = (category: BlogArticle["category"]): string => {
  const labels = {
    airline: "航空公司指南",
    airport: "机场指南",
    foundation: "基础知识"
  };
  return labels[category];
};

export const getArticlesByCategory = (category: BlogArticle["category"] | "all"): BlogArticle[] => {
  if (category === "all") return blogArticles;
  return blogArticles.filter(article => article.category === category);
};

export const getFeaturedArticles = (): BlogArticle[] => {
  return blogArticles.filter(article => article.featured);
};

export const getTotalWordCount = (): number => {
  return blogArticles.reduce((total, article) => total + article.wordCount, 0);
};