import { Layout } from "@/components/Layout";
import { SEO } from "@/components/SEO";
import Link from "next/link";
import { MoveDown, AlertTriangle, FileText, CheckCircle, Scale, DollarSign } from "lucide-react";
import { generateFAQSchema, generateArticleSchema, generateBreadcrumbSchema } from "@/lib/schemaGenerator";

export default function DowngradePrerazeniNizsiTridaNahrada() {
  const faqSchema = generateFAQSchema([
    {
      question: "Co je to downgrade letenky a mám na něco nárok?",
      answer: "Downgrade znamená, že jste byli přeřazeni do nižší třídy, než jakou jste si zaplatili (např. z Business do Economy). Podle ES 261/2004 máte nárok na vrácení 30 až 75 % ceny letenky podle vzdálenosti letu."
    },
    {
      question: "Kolik peněz mi aerolinka musí vrátit za downgrade?",
      answer: "Náhrada činí: 30 % ceny letenky pro lety do 1 500 km, 50 % pro lety mezi 1 500 a 3 500 km a 75 % ceny pro lety nad 3 500 km."
    },
    {
      question: "Počítá se náhrada z celé ceny letenky včetně tax?",
      answer: "Ne, podle judikatury EU se náhrada počítá pouze z ceny samotné letenky, s vyloučením daní a letištních poplatků."
    },
    {
      question: "Do kdy musí aerolinka peníze za přeřazení vrátit?",
      answer: "Letecká společnost má povinnost vyplatit náhradu za přeřazení do nižší třídy do 7 dnů od data letu."
    }
  ]);

  const articleSchema = generateArticleSchema({
    title: "Downgrade — přeřazení do nižší třídy a náhrada škody",
    description: "Zjistěte, jaká máte práva při přeřazení do nižší třídy (downgrade) podle ES 261/2004. Získejte zpět až 75 % z ceny vaší letenky.",
    url: "https://problemlot.pl/cs/blog/downgrade-prerazeni-nizsi-trida-nahrada",
    publishDate: "2025-01-14",
    author: "ClaimWinger Legal Team",
    imageUrl: "https://problemlot.pl/og-image.png"
  });

  const breadcrumbSchema = generateBreadcrumbSchema([
    { name: "Domů", url: "https://problemlot.pl/cs" },
    { name: "Blog", url: "https://problemlot.pl/cs/blog" },
    { name: "Downgrade letenky", url: "https://problemlot.pl/cs/blog/downgrade-prerazeni-nizsi-trida-nahrada" }
  ]);

  return (
    <Layout>
      <SEO
        title="Downgrade letu: Přeřazení do nižší třídy a náhrady | ProblemLot"
        description="Zjistěte, jaká máte práva při přeřazení do nižší třídy (downgrade) podle ES 261/2004. Získejte zpět až 75 % z ceny vaší letenky."
        url="https://problemlot.pl/cs/blog/downgrade-prerazeni-nizsi-trida-nahrada"
      />

      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(articleSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />

      <article className="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50 to-slate-50">
        {/* Breadcrumb Navigation */}
        <nav className="bg-white border-b border-slate-200">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
            <ol className="flex items-center space-x-2 text-sm text-slate-600">
              <li><Link href="/cs" className="hover:text-blue-600 transition-colors">Domů</Link></li>
              <li className="before:content-['/'] before:mx-2">
                <Link href="/cs/blog" className="hover:text-blue-600 transition-colors">Blog</Link>
              </li>
              <li className="before:content-['/'] before:mx-2 text-slate-900 font-medium">
                Downgrade letenky
              </li>
            </ol>
          </div>
        </nav>

        {/* Hero Section */}
        <header className="bg-gradient-to-r from-blue-600 to-blue-700 text-white py-16 sm:py-20">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex items-center gap-3 mb-6">
              <div className="p-3 bg-white/10 backdrop-blur-sm rounded-xl">
                <MoveDown className="w-8 h-8" />
              </div>
              <span className="px-4 py-1.5 bg-white/20 backdrop-blur-sm rounded-full text-sm font-medium">
                Přeřazení třídy
              </span>
            </div>
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold mb-6 leading-tight">
              Downgrade — přeřazení do nižší třídy a náhrada škody
            </h1>
            <p className="text-xl sm:text-2xl text-blue-100 leading-relaxed font-light">
              Zaplatili jste Business Class a letěli v Economy? Zjistěte, jak získat zpět až 75 % ceny letenky.
            </p>
          </div>
        </header>

        {/* Main Content */}
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-16">
          
          {/* Introduction */}
          <div className="prose prose-lg max-w-none mb-12">
            <div className="bg-white rounded-2xl shadow-sm border border-slate-200 p-8 mb-8">
              <p className="text-lg leading-relaxed text-slate-700 mb-4">
                Představte si, že si zaplatíte komfortní let v Business nebo First Class, přijdete na letiště a personál vám oznámí, že vaše třída je přeplněná (overbooking) nebo že došlo k výměně letadla a musíte letět v Economy. Tato situace se nazývá <strong>downgrade</strong>.
              </p>
              <p className="text-lg leading-relaxed text-slate-700 mb-4">
                Nařízení <Link href="/cs/blog/narizeni-es-261-2004" className="text-blue-600 hover:text-blue-700 font-medium">ES 261/2004</Link> myslí i na tyto případy. Na rozdíl od zpoždění nebo zrušení letu se v případě downgradu nevyplácí fixní paušální částka (např. 600 €), ale <strong>procentuální vrácení peněz z ceny vaší letenky</strong> — a to až do výše 75 %.
              </p>
              <p className="text-lg leading-relaxed text-slate-700">
                Aerolinie se často snaží vykompenzovat přeřazení voucherem na drink nebo mílemi do věrnostního programu. Vy však máte nárok na finanční hotovost na váš bankovní účet, a to do 7 dnů od letu.
              </p>
            </div>

            {/* Compensation Table */}
            <div className="bg-gradient-to-br from-blue-50 to-indigo-50 rounded-2xl shadow-sm border-2 border-blue-200 p-8 mb-12">
              <div className="flex items-center gap-3 mb-6">
                <DollarSign className="w-6 h-6 text-blue-600" />
                <h2 className="text-2xl font-bold text-slate-900 m-0">Náhrada za přeřazení (Downgrade)</h2>
              </div>
              <div className="overflow-x-auto">
                <table className="w-full">
                  <thead>
                    <tr className="border-b-2 border-blue-200">
                      <th className="text-left py-3 px-4 font-semibold text-slate-700">Vzdálenost letu</th>
                      <th className="text-left py-3 px-4 font-semibold text-slate-700">Vrácení ceny letenky</th>
                    </tr>
                  </thead>
                  <tbody className="text-slate-600">
                    <tr className="border-b border-blue-100">
                      <td className="py-3 px-4">Lety do 1 500 km</td>
                      <td className="py-3 px-4 font-bold text-blue-600">30 %</td>
                    </tr>
                    <tr className="border-b border-blue-100">
                      <td className="py-3 px-4">Lety od 1 500 do 3 500 km (a lety v rámci EU)</td>
                      <td className="py-3 px-4 font-bold text-blue-600">50 %</td>
                    </tr>
                    <tr>
                      <td className="py-3 px-4">Lety nad 3 500 km</td>
                      <td className="py-3 px-4 font-bold text-blue-600">75 %</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
          </div>

          {/* Section 1 */}
          <section className="mb-12">
            <div className="bg-white rounded-2xl shadow-sm border border-slate-200 p-8">
              <div className="flex items-start gap-4 mb-6">
                <div className="p-3 bg-blue-50 rounded-xl">
                  <Scale className="w-6 h-6 text-blue-600" />
                </div>
                <div className="flex-1">
                  <h2 className="text-3xl font-bold text-slate-900 mb-4">
                    Jak se počítá procento z letenky?
                  </h2>
                </div>
              </div>
              
              <div className="prose prose-lg max-w-none text-slate-700">
                <p className="mb-4">
                  Náhrada škody za downgrade se počítá pouze z <strong>čisté ceny letenky</strong> za ten úsek, ve kterém jste byli přeřazeni. Do částky, ze které se procento počítá, se <strong>nezahrnují letištní taxy ani bezpečnostní poplatky</strong>.
                </p>

                <div className="bg-slate-50 rounded-xl p-6 my-6">
                  <h3 className="text-xl font-bold text-slate-900 mb-3 mt-0">Příklad:</h3>
                  <p className="mb-0">
                    Letíte z Prahy do New Yorku s přestupem ve Frankfurtu. Celá letenka v Business class stála 2 000 €. Na dlouhém letu z Frankfurtu do NY (více než 3 500 km) vás přeřadili do Economy. Máte nárok na <strong>75 % vrácení peněz</strong> z čisté ceny letenky připadající na tento úsek.
                  </p>
                </div>
              </div>
            </div>
          </section>

          {/* Section 2 */}
          <section className="mb-12">
            <div className="bg-white rounded-2xl shadow-sm border border-slate-200 p-8">
              <div className="flex items-start gap-4 mb-6">
                <div className="p-3 bg-blue-50 rounded-xl">
                  <AlertTriangle className="w-6 h-6 text-blue-600" />
                </div>
                <div className="flex-1">
                  <h2 className="text-3xl font-bold text-slate-900 mb-4">
                    Upgrade — co když mě přesunou do vyšší třídy?
                  </h2>
                </div>
              </div>
              
              <div className="prose prose-lg max-w-none text-slate-700">
                <p className="mb-4">
                  Pokud je overbooking v Economy třídě a aerolinka vás přesune do Business (tzv. <strong>upgrade</strong>), nesmí od vás požadovat žádný doplatek. Toto nařízení výslovně zakazuje aeroliniím účtovat jakýkoli příplatek za přeřazení do vyšší třídy.
                </p>
              </div>
            </div>
          </section>

          {/* FAQ Section */}
          <section className="mb-12">
            <div className="bg-gradient-to-br from-slate-50 to-blue-50 rounded-2xl shadow-sm border border-slate-200 p-8">
              <h2 className="text-3xl font-bold text-slate-900 mb-8 flex items-center gap-3">
                <FileText className="w-8 h-8 text-blue-600" />
                Často kladené otázky
              </h2>
              
              <div className="space-y-6">
                <div className="bg-white rounded-xl p-6 shadow-sm border border-slate-100">
                  <h3 className="text-xl font-bold text-slate-900 mb-3">
                    Co je to downgrade letenky a mám na něco nárok?
                  </h3>
                  <p className="text-slate-700 leading-relaxed mb-0">
                    Downgrade znamená, že jste byli přeřazeni do nižší třídy, než jakou jste si zaplatili (např. z Business do Economy). Podle ES 261/2004 máte nárok na vrácení 30 až 75 % ceny letenky podle vzdálenosti letu.
                  </p>
                </div>

                <div className="bg-white rounded-xl p-6 shadow-sm border border-slate-100">
                  <h3 className="text-xl font-bold text-slate-900 mb-3">
                    Kolik peněz mi aerolinka musí vrátit za downgrade?
                  </h3>
                  <p className="text-slate-700 leading-relaxed mb-0">
                    Náhrada činí: 30 % ceny letenky pro lety do 1 500 km, 50 % pro lety mezi 1 500 a 3 500 km a 75 % ceny pro lety nad 3 500 km.
                  </p>
                </div>

                <div className="bg-white rounded-xl p-6 shadow-sm border border-slate-100">
                  <h3 className="text-xl font-bold text-slate-900 mb-3">
                    Počítá se náhrada z celé ceny letenky včetně tax?
                  </h3>
                  <p className="text-slate-700 leading-relaxed mb-0">
                    Ne, podle judikatury EU se náhrada počítá pouze z ceny samotné letenky, s vyloučením daní a letištních poplatků.
                  </p>
                </div>
              </div>
            </div>
          </section>

          {/* CTA Section */}
          <section className="mb-12">
            <div className="bg-gradient-to-r from-blue-600 to-blue-700 rounded-2xl shadow-xl p-8 sm:p-12 text-center text-white">
              <div className="max-w-3xl mx-auto">
                <h2 className="text-3xl sm:text-4xl font-bold mb-4">
                  Byli jste přeřazeni nebo měl váš let problém?
                </h2>
                <p className="text-xl text-blue-100 mb-8">
                  Nechte nás prověřit váš nárok u letecké společnosti.
                </p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
                  <a
                    href="https://claimwinger.com/cs/zpozdeny-let?utm_source=problemlot&utm_medium=blog&utm_campaign=cs-downgrade"
                    className="inline-flex items-center gap-2 bg-white text-blue-600 px-8 py-4 rounded-xl font-bold text-lg hover:bg-blue-50 transition-all shadow-lg hover:shadow-xl hover:scale-105"
                  >
                    Zkontrolovat nárok zdarma
                    <CheckCircle className="w-5 h-5" />
                  </a>
                  <span className="text-blue-100 text-sm">
                    ✓ Bez rizika • ✓ Platíte až po úspěchu
                  </span>
                </div>
              </div>
            </div>
          </section>

          {/* Related Articles */}
          <section>
            <div className="bg-white rounded-2xl shadow-sm border border-slate-200 p-8">
              <h2 className="text-2xl font-bold text-slate-900 mb-6">Související články</h2>
              <div className="grid sm:grid-cols-2 gap-4">
                <Link 
                  href="/cs/blog/narizeni-es-261-2004"
                  className="group p-4 rounded-xl border-2 border-slate-200 hover:border-blue-600 transition-colors"
                >
                  <h3 className="font-bold text-slate-900 group-hover:text-blue-600 mb-2">
                    Nařízení ES 261/2004
                  </h3>
                  <p className="text-sm text-slate-600">
                    Základní práva pasažérů.
                  </p>
                </Link>
              </div>
            </div>
          </section>

        </div>
      </article>
    </Layout>
  );
}