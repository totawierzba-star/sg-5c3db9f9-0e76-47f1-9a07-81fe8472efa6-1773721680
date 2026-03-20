import { GetServerSideProps } from 'next';

const EXTERNAL_DATA_URL = 'https://bizneslot.info';

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
    { url: '/en/business-flight-compensation', priority: '0.9', changefreq: 'weekly' },
    { url: '/en/cancelled-business-trip', priority: '0.9', changefreq: 'weekly' },
    { url: '/en/delayed-business-trip', priority: '0.9', changefreq: 'weekly' },
    { url: '/en/articles', priority: '0.8', changefreq: 'weekly' },

    // --- ENGLISH ARTICLES ---
    { url: '/en/articles/flight-delay-compensation-business-travel-employee-or-employer', priority: '0.7', changefreq: 'monthly' },
    { url: '/en/articles/eu261-compensation-business-flights-guide', priority: '0.7', changefreq: 'monthly' },
    { url: '/en/articles/can-employer-keep-flight-compensation', priority: '0.7', changefreq: 'monthly' },
    { url: '/en/articles/how-to-claim-flight-compensation-business-travel', priority: '0.7', changefreq: 'monthly' },
    { url: '/en/articles/lufthansa-flight-delay-compensation-business', priority: '0.7', changefreq: 'monthly' },
    { url: '/en/articles/ryanair-flight-delay-compensation-business', priority: '0.7', changefreq: 'monthly' },
    { url: '/en/articles/british-airways-flight-delay-compensation-business', priority: '0.7', changefreq: 'monthly' },
    { url: '/en/articles/frankfurt-hub-flight-delays-business', priority: '0.7', changefreq: 'monthly' },
    { url: '/en/articles/heathrow-hub-flight-delays-business', priority: '0.7', changefreq: 'monthly' },
    { url: '/en/articles/amsterdam-schiphol-hub-flight-delays-business', priority: '0.7', changefreq: 'monthly' },
    { url: '/en/articles/air-france-flight-delay-compensation-business', priority: '0.7', changefreq: 'monthly' },
    { url: '/en/articles/can-employer-require-claim-service', priority: '0.7', changefreq: 'monthly' },
    { url: '/en/articles/tax-treatment-flight-compensation-business', priority: '0.7', changefreq: 'monthly' }
  ];

  const sitemap = generateSiteMap(pages);

  res.setHeader('Content-Type', 'text/xml');
  res.write(sitemap);
  res.end();

  return {
    props: {},
  };
};

export default SiteMap;