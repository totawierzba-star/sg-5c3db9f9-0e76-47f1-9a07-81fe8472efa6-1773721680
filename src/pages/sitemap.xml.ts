import { GetServerSideProps } from 'next';
import { blogArticlesHi } from '@/lib/blogArticlesHi';
import { blogArticlesEnIrelandSorted } from '@/lib/blogArticlesEnIreland';
import { blogArticlesBgSorted } from '@/lib/blogArticlesBg';
import { blogArticlesHuSorted } from '@/lib/blogArticlesHu';
import { blogArticlesLtSorted } from '@/lib/blogArticlesLt';
import { blogArticlesLvSorted } from '@/lib/blogArticlesLv';
import { blogArticlesTrSorted } from '@/lib/blogArticlesTr';
import { blogArticlesViSorted } from '@/lib/blogArticlesVi';
import { blogArticlesZhSorted } from '@/lib/blogArticlesZh';

const EXTERNAL_DATA_URL = 'https://problemlot.com';

function generateSiteMap(pages: { url: string; priority: string; changefreq: string }[]) {
  return `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
  ${pages
    .map(({ url, priority, changefreq }) => {
      return `
       <url>
           <loc>${`${EXTERNAL_DATA_URL}${url}`}</loc>
           <lastmod>${new Date().toISOString().split('T')[0]}</lastmod>
           <changefreq>${changefreq}</changefreq>
           <priority>${priority}</priority>
       </url>
     `;
    })
    .join('')}
</urlset>
`;
}

function SiteMap() {
  // getServerSideProps will do the heavy lifting
}

export const getServerSideProps: GetServerSideProps = async ({ res }) => {
  // Manual list of all pages to ensure perfect control
  // This replaces the manual editing of public/sitemap.xml
  const pages = [
    // --- POLISH MAIN ---
    { url: '', priority: '1.0', changefreq: 'daily' },
    { url: '/o-autorze', priority: '0.8', changefreq: 'monthly' },
    { url: '/polityka-prywatnosci', priority: '0.3', changefreq: 'yearly' },
    { url: '/anulowany-lot-delegacja', priority: '0.9', changefreq: 'weekly' },
    { url: '/bilet-firmowy-prawa', priority: '0.9', changefreq: 'weekly' },
    { url: '/odszkodowanie-lot-sluzbowy', priority: '0.9', changefreq: 'weekly' },
    { url: '/opozniony-lot-delegacja', priority: '0.9', changefreq: 'weekly' },
    { url: '/pracodawca-a-odszkodowanie', priority: '0.9', changefreq: 'weekly' },
    
    // --- POLISH ARTICLES ---
    { url: '/artykuly', priority: '0.8', changefreq: 'weekly' },
    { url: '/artykuly/bleisure-polityka-podrozy-sluzbowych', priority: '0.7', changefreq: 'monthly' },
    { url: '/artykuly/business-class-vs-premium-economy', priority: '0.7', changefreq: 'monthly' },
    { url: '/artykuly/dlaczego-stworzylem-claimwinger', priority: '0.7', changefreq: 'monthly' },
    { url: '/artykuly/karta-statusowa-lounge', priority: '0.7', changefreq: 'monthly' },
    { url: '/artykuly/miles-and-more-dla-firm', priority: '0.7', changefreq: 'monthly' },
    { url: '/artykuly/private-jet-vs-business-class', priority: '0.7', changefreq: 'monthly' },
    { url: '/artykuly/programy-lojalnosciowe-dla-firm', priority: '0.7', changefreq: 'monthly' },
    { url: '/artykuly/ranking-linii-lotniczych-business-class', priority: '0.7', changefreq: 'monthly' },
    { url: '/artykuly/odszkodowanie-lot-sluzbowy-pracownik-czy-pracodawca', priority: '0.7', changefreq: 'monthly' },
    { url: '/artykuly/prawa-pasazera-podroz-sluzbowa', priority: '0.7', changefreq: 'monthly' },

    // --- ENGLISH MAIN ---
    { url: '/en', priority: '1.0', changefreq: 'daily' },
    { url: '/en/about', priority: '0.8', changefreq: 'monthly' },
    { url: '/en/delayed-flight', priority: '0.9', changefreq: 'weekly' },
    { url: '/en/cancelled-flight', priority: '0.9', changefreq: 'weekly' },
    { url: '/en/compensation-calculator', priority: '0.9', changefreq: 'weekly' },
    { url: '/en/blog', priority: '0.8', changefreq: 'weekly' },

    // --- ENGLISH ARTICLES ---
    { url: '/en/blog/air-france-compensation-guide', priority: '0.7', changefreq: 'monthly' },
    { url: '/en/blog/airline-bankrupt-eu261-compensation', priority: '0.7', changefreq: 'monthly' },
    { url: '/en/blog/british-airways-compensation-guide', priority: '0.7', changefreq: 'monthly' },
    { url: '/en/blog/compensation-2-hour-delay-eu261', priority: '0.7', changefreq: 'monthly' },
    { url: '/en/blog/easyjet-compensation-guide', priority: '0.7', changefreq: 'monthly' },
    { url: '/en/blog/eu261-charter-flights-apply', priority: '0.7', changefreq: 'monthly' },
    { url: '/en/blog/eu261-claim-flight-3-years-ago', priority: '0.7', changefreq: 'monthly' },
    { url: '/en/blog/eu261-complete-guide-passenger-rights', priority: '0.8', changefreq: 'monthly' },
    { url: '/en/blog/eu261-flights-outside-eu-apply', priority: '0.7', changefreq: 'monthly' },
    { url: '/en/blog/eu261-non-eu-airlines-does-it-apply', priority: '0.7', changefreq: 'monthly' },
    { url: '/en/blog/extraordinary-circumstances-eu261-definition', priority: '0.7', changefreq: 'monthly' },
    { url: '/en/blog/how-much-compensation-delayed-flight', priority: '0.8', changefreq: 'monthly' },
    { url: '/en/blog/klm-compensation-guide', priority: '0.7', changefreq: 'monthly' },
    { url: '/en/blog/lot-polish-airlines-cancelled-flight-compensation', priority: '0.7', changefreq: 'monthly' },
    { url: '/en/blog/lot-polish-airlines-compensation-amounts', priority: '0.7', changefreq: 'monthly' },
    { url: '/en/blog/lot-polish-airlines-compensation-payment-timeline', priority: '0.7', changefreq: 'monthly' },
    { url: '/en/blog/lot-polish-airlines-delay-compensation-guide', priority: '0.7', changefreq: 'monthly' },
    { url: '/en/blog/lot-polish-airlines-denied-boarding-compensation', priority: '0.7', changefreq: 'monthly' },
    { url: '/en/blog/lot-polish-airlines-rejected-compensation-claim', priority: '0.7', changefreq: 'monthly' },
    { url: '/en/blog/lot-polish-airlines-voucher-vs-cash', priority: '0.7', changefreq: 'monthly' },
    { url: '/en/blog/lufthansa-compensation-guide', priority: '0.7', changefreq: 'monthly' },
    { url: '/en/blog/ryanair-compensation-guide', priority: '0.7', changefreq: 'monthly' },
    { url: '/en/blog/swiss-compensation-guide', priority: '0.7', changefreq: 'monthly' },
    { url: '/en/blog/voucher-instead-cash-eu261-rights', priority: '0.7', changefreq: 'monthly' },
    { url: '/en/blog/what-counts-flight-delay-eu261', priority: '0.8', changefreq: 'monthly' },
    { url: '/en/blog/wizz-air-compensation-guide', priority: '0.7', changefreq: 'monthly' },

    // --- CHINESE MAIN ---
    { url: '/zh', priority: '1.0', changefreq: 'daily' },
    { url: '/zh/delayed-flight', priority: '0.9', changefreq: 'weekly' },
    { url: '/zh/cancelled-flight', priority: '0.9', changefreq: 'weekly' },
    { url: '/zh/compensation-calculator', priority: '0.9', changefreq: 'weekly' },
    { url: '/zh/blog', priority: '0.8', changefreq: 'weekly' },

    // --- HUNGARIAN MAIN ---
    { url: '/hu', priority: '1.0', changefreq: 'daily' },
    { url: '/hu/kesett-jarat', priority: '0.9', changefreq: 'weekly' },
    { url: '/hu/torolt-jarat', priority: '0.9', changefreq: 'weekly' },
    { url: '/hu/karteritesi-kalkulator', priority: '0.9', changefreq: 'weekly' },
    { url: '/hu/blog', priority: '0.8', changefreq: 'weekly' },

    // --- TURKISH MAIN ---
    { url: '/tr', priority: '1.0', changefreq: 'daily' },
    { url: '/tr/gecikmis-ucus', priority: '0.9', changefreq: 'weekly' },
    { url: '/tr/iptal-edilen-ucus', priority: '0.9', changefreq: 'weekly' },
    { url: '/tr/tazminat-hesaplayici', priority: '0.9', changefreq: 'weekly' },
    { url: '/tr/blog', priority: '0.8', changefreq: 'weekly' },

    // --- VIETNAMESE MAIN ---
    { url: '/vi', priority: '1.0', changefreq: 'daily' },
    { url: '/vi/chuyen-bay-bi-hoan', priority: '0.9', changefreq: 'weekly' },
    { url: '/vi/chuyen-bay-bi-huy', priority: '0.9', changefreq: 'weekly' },
    { url: '/vi/kiem-tra-boi-thuong', priority: '0.9', changefreq: 'weekly' },
    { url: '/vi/blog', priority: '0.8', changefreq: 'weekly' },

    // --- HINDI MAIN ---
    { url: '/hi', priority: '1.0', changefreq: 'daily' },
    { url: '/hi/der-se-flight', priority: '0.9', changefreq: 'weekly' },
    { url: '/hi/cancel-flight', priority: '0.9', changefreq: 'weekly' },
    { url: '/hi/muavza-calculator', priority: '0.9', changefreq: 'weekly' },
    { url: '/hi/blog', priority: '0.8', changefreq: 'weekly' },

    // --- BULGARIAN MAIN ---
    { url: '/bg', priority: '1.0', changefreq: 'daily' },
    { url: '/bg/zabaven-polet', priority: '0.9', changefreq: 'weekly' },
    { url: '/bg/otmenen-polet', priority: '0.9', changefreq: 'weekly' },
    { url: '/bg/kalkulator', priority: '0.9', changefreq: 'weekly' },
    { url: '/bg/blog', priority: '0.8', changefreq: 'weekly' },

    // --- LITHUANIAN MAIN ---
    { url: '/lt', priority: '1.0', changefreq: 'daily' },
    { url: '/lt/veluojantis-skrydis', priority: '0.9', changefreq: 'weekly' },
    { url: '/lt/atsauktas-skrydis', priority: '0.9', changefreq: 'weekly' },
    { url: '/lt/kompensacijos-skaiciuokle', priority: '0.9', changefreq: 'weekly' },
    { url: '/lt/blog', priority: '0.8', changefreq: 'weekly' },

    // --- LATVIAN MAIN ---
    { url: '/lv', priority: '1.0', changefreq: 'daily' },
    { url: '/lv/kavejies-lidojums', priority: '0.9', changefreq: 'weekly' },
    { url: '/lv/atcelts-lidojums', priority: '0.9', changefreq: 'weekly' },
    { url: '/lv/kompensacijas-kalkulators', priority: '0.9', changefreq: 'weekly' },
    { url: '/lv/blog', priority: '0.8', changefreq: 'weekly' },
  ];

  const huBlogPages = blogArticlesHuSorted.map((article) => ({
    url: `/hu/blog/${article.slug}`,
    priority: '0.7',
    changefreq: 'monthly',
  }));

  const zhBlogPages = blogArticlesZhSorted.map((article) => ({
    url: `/zh/blog/${article.slug}`,
    priority: '0.7',
    changefreq: 'monthly',
  }));

  const trBlogPages = blogArticlesTrSorted.map((article) => ({
    url: `/tr/blog/${article.slug}`,
    priority: '0.7',
    changefreq: 'monthly',
  }));

  const viBlogPages = blogArticlesViSorted.map((article) => ({
    url: `/vi/blog/${article.slug}`,
    priority: '0.7',
    changefreq: 'monthly',
  }));

  const hiBlogPages = blogArticlesHi.map((article) => ({
    url: `/hi/blog/${article.slug}`,
    priority: article.featured ? '0.8' : '0.7',
    changefreq: 'monthly',
  }));

  const bgBlogPages = blogArticlesBgSorted.map((article) => ({
    url: `/bg/blog/${article.slug}`,
    priority: article.featured ? '0.8' : '0.7',
    changefreq: 'monthly',
  }));

  const ltBlogPages = blogArticlesLtSorted.map((article) => ({
    url: `/lt/blog/${article.slug}`,
    priority: article.featured ? '0.8' : '0.7',
    changefreq: 'monthly',
  }));

  const lvBlogPages = blogArticlesLvSorted.map((article) => ({
    url: `/lv/blog/${article.slug}`,
    priority: article.featured ? '0.8' : '0.7',
    changefreq: 'monthly',
  }));

  const enIrelandBlogPages = blogArticlesEnIrelandSorted.map((article) => ({
    url: `/en/blog/${article.slug}`,
    priority: article.featured ? '0.8' : '0.7',
    changefreq: 'monthly',
  }));

  const sitemap = generateSiteMap([
    ...pages,
    ...enIrelandBlogPages,
    ...hiBlogPages,
    ...huBlogPages,
    ...zhBlogPages,
    ...trBlogPages,
    ...viBlogPages,
    ...bgBlogPages,
    ...ltBlogPages,
    ...lvBlogPages,
  ]);

  res.setHeader('Content-Type', 'text/xml');
  res.write(sitemap);
  res.end();

  return {
    props: {},
  };
};

export default SiteMap;
