export interface BlogArticle {
  id: string;
  title: string;
  slug: string;
  category: "airline" | "airport" | "regulation" | "guide" | "situation";
  wordCount: number;
  readTime: string;
  excerpt: string;
  publishDate: string;
  featured: boolean;
  color?: "blue" | "green" | "purple" | "orange" | "red" | "amber";
}

export const blogArticlesEn: BlogArticle[] = [
  {
    id: "1",
    title: "LOT Polish Airlines Flight Delay Compensation: Complete Guide for International Passengers",
    slug: "lot-polish-airlines-delay-compensation-guide",
    category: "airline",
    wordCount: 3200,
    readTime: "12 min read",
    excerpt: "Comprehensive guide to claiming up to €600 compensation for LOT Polish Airlines delayed flights. Learn your rights under EU261/2004 and how to file a successful claim.",
    publishDate: "2025-03-05",
    featured: true,
    color: "blue",
  },
  {
    id: "2",
    title: "LOT Polish Airlines Cancelled Flight: How to Claim Up to €600 Compensation",
    slug: "lot-polish-airlines-cancelled-flight-compensation",
    category: "airline",
    wordCount: 3100,
    readTime: "11 min read",
    excerpt: "Step-by-step guide to claiming compensation when LOT Polish Airlines cancels your flight. Understand your passenger rights and maximize your claim.",
    publishDate: "2025-03-05",
    featured: true,
    color: "blue",
  },
  {
    id: "3",
    title: "LOT Polish Airlines Denied Boarding Compensation: Your Rights When They Overbook",
    slug: "lot-polish-airlines-denied-boarding-compensation",
    category: "airline",
    wordCount: 2900,
    readTime: "10 min read",
    excerpt: "What to do when LOT Polish Airlines denies you boarding due to overbooking. Learn about your compensation rights and how to claim up to €600.",
    publishDate: "2025-03-05",
    featured: true,
    color: "blue",
  },
  {
    id: "4",
    title: "How Much Compensation Can You Claim from LOT Polish Airlines? €250, €400, or €600",
    slug: "lot-polish-airlines-compensation-amounts",
    category: "guide",
    wordCount: 2700,
    readTime: "9 min read",
    excerpt: "Complete breakdown of LOT Polish Airlines compensation amounts. Understand how distance and delay length determine your €250, €400, or €600 payout.",
    publishDate: "2025-03-05",
    featured: true,
    color: "green",
  },
  {
    id: "5",
    title: "LOT Polish Airlines Rejected My Compensation Claim: What to Do Next",
    slug: "lot-polish-airlines-rejected-compensation-claim",
    category: "guide",
    wordCount: 2800,
    readTime: "10 min read",
    excerpt: "LOT denied your compensation claim? Learn why airlines reject claims, how to appeal, and when to escalate to national enforcement bodies.",
    publishDate: "2025-03-05",
    featured: true,
    color: "orange",
  },
  {
    id: "6",
    title: "LOT Polish Airlines Voucher Instead of Cash: Do You Have to Accept It?",
    slug: "lot-polish-airlines-voucher-vs-cash",
    category: "guide",
    wordCount: 2400,
    readTime: "8 min read",
    excerpt: "LOT offering a voucher instead of cash compensation? Understand your legal right to monetary payment and how to demand what you're owed.",
    publishDate: "2025-03-05",
    featured: false,
    color: "purple",
  },
  {
    id: "7",
    title: "How Long Does LOT Polish Airlines Take to Pay Compensation?",
    slug: "lot-polish-airlines-compensation-payment-timeline",
    category: "guide",
    wordCount: 2600,
    readTime: "9 min read",
    excerpt: "Expected timelines for LOT Polish Airlines compensation payments, what causes delays, and legal steps if they refuse or ignore your claim.",
    publishDate: "2025-03-05",
    featured: false,
    color: "blue",
  },
];