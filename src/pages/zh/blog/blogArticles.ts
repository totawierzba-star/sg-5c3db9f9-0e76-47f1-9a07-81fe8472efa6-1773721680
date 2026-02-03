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
  featured?: boolean;
  color?: string;
}

export const blogArticles: BlogArticle[] = [
  {
    id: "finnair-compensation-guide",
    title: "芬兰航空延误/取消赔偿指南 2026",
    slug: "/zh/blog/finnair-compensation-guide",
    category: "airline",
    airlineCode: "AY",
    airlineName: "芬兰航空",
    airlineFlag: "🇫🇮",
    wordCount: 8000,
    readTime: 28,
    excerpt: "赫尔辛基转机延误？了解芬兰航空二三线城市航线（重庆/西安/南京）+ 冬季运营完整赔偿指南。",
    publishDate: "2026-02-03",
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
    wordCount: 7500,
    readTime: 26,
    excerpt: "史基浦机场转机问题？了解荷航赔偿权利，包括阿姆斯特丹转机失败特别指南。",
    publishDate: "2026-02-01",
    featured: true,
    color: "bg-sky-50 dark:bg-sky-950"
  },
  {
    id: "british-airways-compensation-guide",
    title: "英国航空延误/取消赔偿指南 2026",
    slug: "/zh/blog/british-airways-compensation-guide",
    category: "airline",
    airlineCode: "BA",
    airlineName: "英国航空",
    airlineFlag: "🇬🇧",
    wordCount: 7200,
    readTime: 25,
    excerpt: "希思罗机场延误？了解英航T5航站楼特殊情况 + 罢工、IT故障赔偿权利完整指南。",
    publishDate: "2026-02-01",
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
    wordCount: 7000,
    readTime: 24,
    excerpt: "戴高乐机场转机延误？了解法航赔偿权利，包括巴黎转机失败索赔策略。",
    publishDate: "2026-01-28",
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
    wordCount: 6800,
    readTime: 23,
    excerpt: "华沙肖邦机场转机问题？了解LOT航空赔偿权利 + 波兰市场特殊情况完整指南。",
    publishDate: "2026-01-27",
    color: "bg-red-50 dark:bg-red-950"
  },
  {
    id: "lufthansa-delay-cancellation-compensation",
    title: "汉莎航空延误/取消赔偿指南 2026",
    slug: "/zh/blog/lufthansa-delay-cancellation-compensation",
    category: "airline",
    airlineCode: "LH",
    airlineName: "汉莎航空",
    airlineFlag: "🇩🇪",
    wordCount: 6400,
    readTime: 22,
    excerpt: "法兰克福或慕尼黑枢纽延误？了解汉莎航空赔偿权利 + 德国市场索赔策略完整指南。",
    publishDate: "2026-01-25",
    color: "bg-yellow-50 dark:bg-yellow-950"
  },
  {
    id: "beijing-capital-delayed-flight-compensation",
    title: "北京首都机场延误航班赔偿指南 2026",
    slug: "/zh/blog/beijing-capital-delayed-flight-compensation",
    category: "airport",
    wordCount: 6100,
    readTime: 21,
    excerpt: "从北京首都机场（PEK）出发的欧盟航班延误？了解中国乘客如何获得 €250-€600 赔偿。",
    publishDate: "2026-01-20",
    color: "bg-emerald-50 dark:bg-emerald-950"
  },
  {
    id: "beijing-capital-cancelled-flight-compensation",
    title: "北京首都机场取消航班赔偿指南 2026",
    slug: "/zh/blog/beijing-capital-cancelled-flight-compensation",
    category: "airport",
    wordCount: 6400,
    readTime: 22,
    excerpt: "从北京首都机场出发的欧盟航班取消？了解改签、退款、赔偿权利完整指南。",
    publishDate: "2026-01-20",
    color: "bg-emerald-50 dark:bg-emerald-950"
  },
  {
    id: "chinese-citizens-eu261-compensation-guide",
    title: "中国公民欧盟航班赔偿完整指南 2026",
    slug: "/zh/blog/chinese-citizens-eu261-compensation-guide",
    category: "foundation",
    wordCount: 5800,
    readTime: 20,
    excerpt: "中国护照持有者完整EU261权利指南：谁符合条件、如何索赔、常见误区、成功案例。",
    publishDate: "2026-01-18",
    featured: true,
    color: "bg-purple-50 dark:bg-purple-950"
  },
  {
    id: "eu261-uk261-passenger-rights",
    title: "EU261/UK261 乘客权利完整指南 2026",
    slug: "/zh/blog/eu261-uk261-passenger-rights",
    category: "foundation",
    wordCount: 5200,
    readTime: 18,
    excerpt: "欧盟航班延误或取消？了解 EU261/UK261 法规、赔偿金额、申请条件、时效期限。",
    publishDate: "2026-01-15",
    color: "bg-indigo-50 dark:bg-indigo-950"
  }
];

export const getCategoryLabel = (category: BlogArticle["category"]): string => {
  const labels: Record<BlogArticle["category"], string> = {
    airline: "航空公司指南",
    airport: "机场指南",
    foundation: "基础知识"
  };
  return labels[category];
};

export const getArticlesByCategory = (category: BlogArticle["category"]): BlogArticle[] => {
  return blogArticles.filter(article => article.category === category);
};

export const getFeaturedArticles = (): BlogArticle[] => {
  return blogArticles.filter(article => article.featured === true);
};

export const getTotalWordCount = (): number => {
  return blogArticles.reduce((total, article) => total + article.wordCount, 0);
};