import { Layout } from "@/components/Layout";
import { SEO } from "@/components/SEO";
import Link from "next/link";
import { Plane, AlertTriangle, FileText, CheckCircle, Clock, Scale, CalendarX } from "lucide-react";
import { generateFAQSchema, generateArticleSchema, generateBreadcrumbSchema } from "@/lib/schemaGenerator";

export default function LetZrusenDenPredOdletemMoznosti() {
  const faqSchema = generateFAQSchema([
    {
      question: "Zrušili mi let den před odletem, mám nárok na kompenzaci?",
      answer: "Ano. Pokud vás letecká společnost informovala o zrušení méně než 14 dní před odletem a důvodem nebyla mimořádná okolnost, máte nárok na kompenzaci 250 až 600 €."
    },
    {
      question: "Mám nárok na hotel, když je náhradní let až další den?",
      answer: "Ano, letecká společnost má povinnost zajistit vám hotelové ubytování a transfer mezi letištěm a hotelem zdarma."
    },
    {
      question: "Co dělat, když mi aerolinka nenabídne náhradní let?",
      answer: "Máte právo požádat o plnou refundaci ceny letenky. Nárok na kompenzaci (až 600 €) tím nezaniká."
    },
    {
      question: "Může mi aerolinka místo peněz vnutit voucher?",
      answer: "Ne, podle ES 261/2004 máte právo na finanční kompenzaci (na bankovní účet). Voucher můžete přijmout, pouze pokud s ním písemně souhlasíte."
    }
  ]);

  const articleSchema = generateArticleSchema({
    title: "Let zrušen den před odletem — jaké jsou vaše možnosti?",
    description: "Zjistěte, jaká máte práva, když vám zruší let méně než 14 dní před odletem. Návod, jak získat kompenzaci až 600 € a náhradní let.",
    url: "https://problemlot.pl/cs/blog/let-zrusen-den-pred-odletem-moznosti",
    publishDate: "2025-01-13",
    modifiedDate: "2025-01-13",
    author: "ClaimWinger Legal Team",
    imageUrl: "https://problemlot.pl/og-image.png"
  });

  const breadcrumbSchema = generateBreadcrumbSchema([
    { name: "Domů", url: "https://problemlot.pl/cs" },
    { name: "Blog", url: "https://problemlot.pl/cs/blog" },
    { name: "Let zrušen den před odletem", url: "https://problemlot.pl/cs/blog/let-zrusen-den-pred-odletem-moznosti" }
  ]);

  return (
    <Layout>
      <SEO
        title="Let zrušen den před odletem — jaké jsou možnosti? | ProblemLot"
        description="Zjistěte, jaká máte práva, když vám zruší let méně než 14 dní před odletem. Návod, jak získat kompenzaci až 600 € a náhradní let."
        url="https://problemlot.pl/cs/blog/let-zrusen-den-pred-odletem-moznosti"
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
                Let zrušen den před odletem
              </li>
            </ol>
          </div>
        </nav>

        {/* Hero Section */}
        <header className="bg-gradient-to-r from-blue-600 to-blue-700 text-white py-16 sm:py-20">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex items-center gap-3 mb-6">
              <div className="p-3 bg-white/10 backdrop-blur-sm rounded-xl">
                <CalendarX className="w-8 h-8" />
              </div>
              <span className="px-4 py-1.5 bg-white/20 backdrop-blur-sm rounded-full text-sm font-medium">
                Zrušený let
              </span>
            </div>
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold mb-6 leading-tight">
              Let zrušen den před odletem — jaké jsou vaše možnosti?
            </h1>
            <p className="text-xl sm:text-2xl text-blue-100 leading-relaxed font-light">
              Dozvěděli jste se o zrušení letu na poslední chvíli? Zjistěte svá práva na náhradní let, hotel a kompenzaci.
            </p>
          </div>
        </header>

        {/* Main Content */}
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-16">
          
          {/* Introduction */}
          <div className="prose prose-lg max-w-none mb-12">
            <div className="bg-white rounded-2xl shadow-sm border border-slate-200 p-8 mb-8">
              <p className="text-lg leading-relaxed text-slate-700 mb-4">
                Dostat zprávu o zrušení letu jen 24 hodin před plánovaným odletem je obrovský stres. Ať už jedete na důležitou obchodní schůzku nebo na vytouženou dovolenou, taková zpráva naruší všechny vaše plány. Dobrou zprávou je, že evropské <Link href="/cs/blog/narizeni-es-261-2004" className="text-blue-600 hover:text-blue-700 font-medium">nařízení ES 261/2004</Link> stojí pevně na straně pasažérů.
              </p>
              <p className="text-lg leading-relaxed text-slate-700 mb-4">
                Pravidla jsou jasná: Pokud vás letecká společnost informuje o zrušení letu méně než 14 dní před odletem, vzniká vám nárok nejen na <strong>náhradní let</strong> nebo <strong>vrácení peněz</strong>, ale také na finanční <strong>kompenzaci od 250 € do 600 €</strong> (pokud nešlo o mimořádné okolnosti typu nepříznivého počasí).
              </p>
              <p className="text-lg leading-relaxed text-slate-700">
                Aerolinky se bohužel často snaží z těchto povinností vyvléct nabídkou nevýhodných voucherů nebo mlčením ohledně nároku na odškodnění. V tomto článku vám ukážeme, jak nepřijít o své peníze a jaké konkrétní kroky musíte na letišti nebo online podniknout.
              </p>
            </div>

            {/* Compensation Table */}
            <div className="bg-gradient-to-br from-blue-50 to-indigo-50 rounded-2xl shadow-sm border-2 border-blue-200 p-8 mb-12">
              <div className="flex items-center gap-3 mb-6">
                <Scale className="w-6 h-6 text-blue-600" />
                <h2 className="text-2xl font-bold text-slate-900 m-0">Výše kompenzace při zrušení letu na poslední chvíli</h2>
              </div>
              <div className="overflow-x-auto">
                <table className="w-full">
                  <thead>
                    <tr className="border-b-2 border-blue-200">
                      <th className="text-left py-3 px-4 font-semibold text-slate-700">Vzdálenost letu</th>
                      <th className="text-left py-3 px-4 font-semibold text-slate-700">Kompenzace na osobu</th>
                    </tr>
                  </thead>
                  <tbody className="text-slate-600">
                    <tr className="border-b border-blue-100">
                      <td className="py-3 px-4">Lety do 1 500 km</td>
                      <td className="py-3 px-4 font-bold text-blue-600">250 €</td>
                    </tr>
                    <tr className="border-b border-blue-100">
                      <td className="py-3 px-4">Lety od 1 500 km do 3 500 km</td>
                      <td className="py-3 px-4 font-bold text-blue-600">400 €</td>
                    </tr>
                    <tr>
                      <td className="py-3 px-4">Lety nad 3 500 km</td>
                      <td className="py-3 px-4 font-bold text-blue-600">600 €</td>
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
                  <Clock className="w-6 h-6 text-blue-600" />
                </div>
                <div className="flex-1">
                  <h2 className="text-3xl font-bold text-slate-900 mb-4">
                    1. Pravidlo 14 dnů a nárok na finanční kompenzaci
                  </h2>
                </div>
              </div>
              
              <div className="prose prose-lg max-w-none text-slate-700">
                <p className="mb-4">
                  Základním kamenem evropského práva pro cestující je tzv. <strong>pravidlo 14 dnů</strong>. Aerolinka má povinnost vás o zrušení informovat včas. 
                </p>

                <div className="bg-green-50 border-l-4 border-green-600 rounded-r-xl p-6 my-6">
                  <ul className="space-y-2 mb-0">
                    <li><strong>Méně než 7 dní před odletem:</strong> Nárok na kompenzaci vzniká, pokud náhradní let neodlétá nanejvýš o 1 hodinu dříve a nepřilétá o více než 2 hodiny později než původní let. (Zrušení den předem spadá právě sem).</li>
                    <li><strong>7 až 14 dní před odletem:</strong> Nárok vzniká, pokud náhradní let neodlétá nanejvýš o 2 hodiny dříve a nepřilétá o více než 4 hodiny později.</li>
                    <li><strong>Více než 14 dní před odletem:</strong> Na finanční kompenzaci nárok nemáte (máte však právo na náhradní let nebo vrácení peněz).</li>
                  </ul>
                </div>

                <p className="mb-0">
                  Pokud vám tedy zrušili let jeden den před odletem, kompenzace se vás na 99 % týká, pokud důvodem nebylo například extrémní počasí nebo nečekaný globální výpadek (mimořádné okolnosti). Technické závady nebo nedostatek personálu <strong>mimořádnou okolností nejsou</strong>.
                </p>
              </div>
            </div>
          </section>

          {/* Section 2 */}
          <section className="mb-12">
            <div className="bg-white rounded-2xl shadow-sm border border-slate-200 p-8">
              <div className="flex items-start gap-4 mb-6">
                <div className="p-3 bg-blue-50 rounded-xl">
                  <Plane className="w-6 h-6 text-blue-600" />
                </div>
                <div className="flex-1">
                  <h2 className="text-3xl font-bold text-slate-900 mb-4">
                    2. Volba mezi náhradním letem a vrácením peněz
                  </h2>
                </div>
              </div>
              
              <div className="prose prose-lg max-w-none text-slate-700">
                <p className="mb-4">
                  Zrušení letu není jen o odškodném, vy se přece potřebujete dostat do cíle. Letecká společnost vám <strong>musí</strong> dát na výběr ze dvou možností:
                </p>

                <div className="space-y-4 mb-6">
                  <div className="bg-slate-50 p-6 rounded-xl border border-slate-200">
                    <strong className="text-slate-900 block mb-2">Možnost A: Náhradní let (Re-routing)</strong>
                    <p className="mb-0">Doprava do vaší cílové destinace při nejbližší možné příležitosti. Pokud aerolinka nemá vlastní volné kapacity, <strong>je povinna vám zakoupit letenku u konkurence</strong>.</p>
                  </div>
                  <div className="bg-slate-50 p-6 rounded-xl border border-slate-200">
                    <strong className="text-slate-900 block mb-2">Možnost B: Vrácení peněz (Refundace)</strong>
                    <p className="mb-0">Pokud se rozhodnete necestovat (zrušený let zmařil účel vaší cesty), aerolinka vám musí do 7 dnů vrátit plnou cenu letenky.</p>
                  </div>
                </div>

                <div className="bg-amber-50 border-l-4 border-amber-600 rounded-r-xl p-6 my-6">
                  <h3 className="text-lg font-bold text-slate-900 mb-2 mt-0">Důležité upozornění:</h3>
                  <p className="mb-0">
                    Výběr jedné z těchto možností <strong>neruší váš nárok na paušální kompenzaci 250–600 €</strong>! Tedy můžete letět náhradním letem (např. další den) a k tomu inkasovat 400 € odškodné za komplikace.
                  </p>
                </div>
              </div>
            </div>
          </section>

          {/* Section 3 */}
          <section className="mb-12">
            <div className="bg-white rounded-2xl shadow-sm border border-slate-200 p-8">
              <div className="flex items-start gap-4 mb-6">
                <div className="p-3 bg-blue-50 rounded-xl">
                  <FileText className="w-6 h-6 text-blue-600" />
                </div>
                <div className="flex-1">
                  <h2 className="text-3xl font-bold text-slate-900 mb-4">
                    3. Právo na péči: Hotel a občerstvení
                  </h2>
                </div>
              </div>
              
              <div className="prose prose-lg max-w-none text-slate-700">
                <p className="mb-4">
                  Pokud jste přijali náhradní let a ten odlétá až následující den, vzniká vám nárok na tzv. <strong>právo na péči</strong>.
                </p>

                <ul className="space-y-3 mb-6 list-disc pl-5">
                  <li><strong>Hotelové ubytování:</strong> Aerolinka musí zařídit hotel po dobu čekání.</li>
                  <li><strong>Transfer:</strong> Musí zajistit dopravu mezi letištěm a hotelem (a zpět).</li>
                  <li><strong>Strava a nápoje:</strong> V množství úměrném době čekání.</li>
                  <li><strong>Komunikace:</strong> Dva bezplatné telefonní hovory nebo e-maily.</li>
                </ul>

                <p className="mb-0">
                  Pokud vám aerolinka na letišti pomoc neposkytne (z důvodu chaosu na přepážce apod.), můžete si hotel a jídlo <strong>zaplatit sami a nechat si je proplatit zpětně</strong>. Vždy si proto uschovejte všechny účtenky! Výdaje však musí být přiměřené (5hvězdičkový luxusní hotel vám s velkou pravděpodobností nezaplatí).
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
                    Zrušili mi let den před odletem, mám nárok na kompenzaci?
                  </h3>
                  <p className="text-slate-700 leading-relaxed mb-0">
                    Ano. Pokud vás letecká společnost informovala o zrušení méně než 14 dní před odletem a důvodem nebyla mimořádná okolnost, máte nárok na kompenzaci 250 až 600 €.
                  </p>
                </div>

                <div className="bg-white rounded-xl p-6 shadow-sm border border-slate-100">
                  <h3 className="text-xl font-bold text-slate-900 mb-3">
                    Mám nárok na hotel, když je náhradní let až další den?
                  </h3>
                  <p className="text-slate-700 leading-relaxed mb-0">
                    Ano, letecká společnost má povinnost zajistit vám hotelové ubytování a transfer mezi letištěm a hotelem zdarma.
                  </p>
                </div>

                <div className="bg-white rounded-xl p-6 shadow-sm border border-slate-100">
                  <h3 className="text-xl font-bold text-slate-900 mb-3">
                    Co dělat, když mi aerolinka nenabídne náhradní let?
                  </h3>
                  <p className="text-slate-700 leading-relaxed mb-0">
                    Máte právo požádat o plnou refundaci ceny letenky. Nárok na kompenzaci (až 600 €) tím nezaniká.
                  </p>
                </div>

                <div className="bg-white rounded-xl p-6 shadow-sm border border-slate-100">
                  <h3 className="text-xl font-bold text-slate-900 mb-3">
                    Může mi aerolinka místo peněz vnutit voucher?
                  </h3>
                  <p className="text-slate-700 leading-relaxed mb-0">
                    Ne, podle ES 261/2004 máte právo na finanční kompenzaci (na bankovní účet). Voucher můžete přijmout, pouze pokud s ním písemně souhlasíte.
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
                  Byl váš let zrušen na poslední chvíli?
                </h2>
                <p className="text-xl text-blue-100 mb-8">
                  Nenechte propadnout svých 600 €. Odborníci z ClaimWinger získají vaše peníze od letecké společnosti.
                </p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
                  <a
                    href="https://claimwinger.com/cs/zruseny-let?utm_source=problemlot&utm_medium=blog&utm_campaign=cs-zruseno-den-predem"
                    className="inline-flex items-center gap-2 bg-white text-blue-600 px-8 py-4 rounded-xl font-bold text-lg hover:bg-blue-50 transition-all shadow-lg hover:shadow-xl hover:scale-105"
                  >
                    Zkontrolovat nárok zdarma
                    <CheckCircle className="w-5 h-5" />
                  </a>
                  <span className="text-blue-100 text-sm">
                    ✓ Bez rizika • ✓ Platíte až po úspěšném vyřízení • ✓ 98% úspěšnost
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
                    Detailní přehled evropských práv cestujících v letecké dopravě.
                  </p>
                </Link>
                <Link 
                  href="/cs/blog/nocni-zpozdeni-hotel-co-uhradi-aerolinka"
                  className="group p-4 rounded-xl border-2 border-slate-200 hover:border-blue-600 transition-colors"
                >
                  <h3 className="font-bold text-slate-900 group-hover:text-blue-600 mb-2">
                    Náklady na hotel a zpoždění
                  </h3>
                  <p className="text-sm text-slate-600">
                    Zjistěte, jak postupovat, když musíte čekat na letišti přes noc.
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
