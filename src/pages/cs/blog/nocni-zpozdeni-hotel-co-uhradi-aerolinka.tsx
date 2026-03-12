import { Layout } from "@/components/Layout";
import { SEO } from "@/components/SEO";
import Link from "next/link";
import { Moon, AlertTriangle, FileText, CheckCircle, Coffee, Scale, Receipt } from "lucide-react";
import { generateFAQSchema, generateArticleSchema, generateBreadcrumbSchema } from "@/lib/schemaGenerator";

export default function NocniZpozdeniHotelCoUhradiAerolinka() {
  const faqSchema = generateFAQSchema([
    {
      question: "Musí mi aerolinka zaplatit hotel při nočním zpoždění?",
      answer: "Ano, pokud je očekávaný čas odletu alespoň den po původním termínu, aerolinka musí poskytnout hotel a transfer zdarma."
    },
    {
      question: "Co dělat, když na letišti není nikdo od aerolinky, kdo by zajistil hotel?",
      answer: "Můžete si zarezervovat hotel sami (přiměřené ceny). Nezapomeňte si uschovat všechny účtenky pro pozdější proplacení."
    },
    {
      question: "Dostanu kromě zaplaceného hotelu i kompenzaci 600 €?",
      answer: "Ano, proplacení nákladů na hotel a kompenzace za zpoždění podle ES 261/2004 jsou dva nezávislé nároky. Máte právo na obojí."
    },
    {
      question: "Proplatí mi aerolinka luxusní 5hvězdičkový hotel?",
      answer: "Většinou ne. Náklady musí být přiměřené dané situaci (obvykle se uznávají hotely střední třídy cca do 100-150 € za noc)."
    }
  ]);

  const articleSchema = generateArticleSchema({
    title: "Noční zpoždění a náklady na hotel — co uhradí aerolinka?",
    description: "Zpožděný let přes noc? Zjistěte, kdy vám musí aerolinka zaplatit hotel, transfer a stravu, a jak k tomu získat ještě kompenzaci až 600 €.",
    url: "https://problemlot.pl/cs/blog/nocni-zpozdeni-hotel-co-uhradi-aerolinka",
    publishDate: "2025-01-13",
    modifiedDate: "2025-01-13",
    author: "ClaimWinger Legal Team",
    imageUrl: "https://problemlot.pl/og-image.png"
  });

  const breadcrumbSchema = generateBreadcrumbSchema([
    { name: "Domů", url: "https://problemlot.pl/cs" },
    { name: "Blog", url: "https://problemlot.pl/cs/blog" },
    { name: "Noční zpoždění a hotel", url: "https://problemlot.pl/cs/blog/nocni-zpozdeni-hotel-co-uhradi-aerolinka" }
  ]);

  return (
    <Layout>
      <SEO
        title="Noční zpoždění a náklady na hotel — co uhradí aerolinka? | ProblemLot"
        description="Zpožděný let přes noc? Zjistěte, kdy vám musí aerolinka zaplatit hotel, transfer a stravu, a jak k tomu získat ještě kompenzaci až 600 €."
        url="https://problemlot.pl/cs/blog/nocni-zpozdeni-hotel-co-uhradi-aerolinka"
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
                Noční zpoždění a hotel
              </li>
            </ol>
          </div>
        </nav>

        {/* Hero Section */}
        <header className="bg-gradient-to-r from-blue-600 to-blue-700 text-white py-16 sm:py-20">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex items-center gap-3 mb-6">
              <div className="p-3 bg-white/10 backdrop-blur-sm rounded-xl">
                <Moon className="w-8 h-8" />
              </div>
              <span className="px-4 py-1.5 bg-white/20 backdrop-blur-sm rounded-full text-sm font-medium">
                Péče o cestující
              </span>
            </div>
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold mb-6 leading-tight">
              Noční zpoždění a náklady na hotel — co uhradí aerolinka?
            </h1>
            <p className="text-xl sm:text-2xl text-blue-100 leading-relaxed font-light">
              Zrušený nebo silně zpožděný let s přenocováním: Máte nárok na hotel, stravu a finanční kompenzaci.
            </p>
          </div>
        </header>

        {/* Main Content */}
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-16">
          
          {/* Introduction */}
          <div className="prose prose-lg max-w-none mb-12">
            <div className="bg-white rounded-2xl shadow-sm border border-slate-200 p-8 mb-8">
              <p className="text-lg leading-relaxed text-slate-700 mb-4">
                Představte si tu situaci: sedíte na letišti a neustále sledujete tabuli odletů. Zpoždění se prodlužuje z hodin na desítky hodin a najednou je jasné, že dnes už nikam nepoletíte. Co teď? Musíte spát na studené zemi v letištní hale? <strong>Rozhodně ne.</strong>
              </p>
              <p className="text-lg leading-relaxed text-slate-700 mb-4">
                Podle evropského <Link href="/cs/blog/narizeni-es-261-2004" className="text-blue-600 hover:text-blue-700 font-medium">nařízení ES 261/2004</Link> nesmí letecká společnost nechat své cestující na holičkách. Pokud je váš let přeložen na další den, <strong>aerolinka má zákonnou povinnost zajistit a zaplatit vám ubytování v hotelu</strong>. A nejen to, je povinna se postarat o vaši stravu i transport.
              </p>
              <p className="text-lg leading-relaxed text-slate-700">
                To nejlepší nakonec? Tyto služby jsou zcela nezávislé na vašem právu na <strong>finanční kompenzaci za zpoždění</strong>. V tomto článku vám vysvětlíme, co přesně aerolinka hradí a jak docílit vrácení peněz, pokud na letišti panoval chaos a vy jste si hotel museli zaplatit ze svého.
              </p>
            </div>

            {/* Compensation Table */}
            <div className="bg-gradient-to-br from-blue-50 to-indigo-50 rounded-2xl shadow-sm border-2 border-blue-200 p-8 mb-12">
              <div className="flex items-center gap-3 mb-6">
                <Scale className="w-6 h-6 text-blue-600" />
                <h2 className="text-2xl font-bold text-slate-900 m-0">Výše kompenzace podle ES 261/2004</h2>
              </div>
              <div className="overflow-x-auto">
                <table className="w-full">
                  <thead>
                    <tr className="border-b-2 border-blue-200">
                      <th className="text-left py-3 px-4 font-semibold text-slate-700">Vzdálenost letu</th>
                      <th className="text-left py-3 px-4 font-semibold text-slate-700">Pevná kompenzace</th>
                    </tr>
                  </thead>
                  <tbody className="text-slate-600">
                    <tr className="border-b border-blue-100">
                      <td className="py-3 px-4">Lety do 1 500 km</td>
                      <td className="py-3 px-4 font-bold text-blue-600">250 €</td>
                    </tr>
                    <tr className="border-b border-blue-100">
                      <td className="py-3 px-4">Lety od 1 500 do 3 500 km</td>
                      <td className="py-3 px-4 font-bold text-blue-600">400 €</td>
                    </tr>
                    <tr>
                      <td className="py-3 px-4">Lety nad 3 500 km</td>
                      <td className="py-3 px-4 font-bold text-blue-600">600 €</td>
                    </tr>
                  </tbody>
                </table>
              </div>
              <p className="text-sm text-slate-600 mt-4 mb-0">
                <strong>Pamatujte:</strong> Náklady na hotel, jídlo a transport dostáváte zaplacené (nebo proplacené) navíc k těmto částkám!
              </p>
            </div>
          </div>

          {/* Section 1 */}
          <section className="mb-12">
            <div className="bg-white rounded-2xl shadow-sm border border-slate-200 p-8">
              <div className="flex items-start gap-4 mb-6">
                <div className="p-3 bg-blue-50 rounded-xl">
                  <Moon className="w-6 h-6 text-blue-600" />
                </div>
                <div className="flex-1">
                  <h2 className="text-3xl font-bold text-slate-900 mb-4">
                    Kdy vzniká právo na ubytování v hotelu?
                  </h2>
                </div>
              </div>
              
              <div className="prose prose-lg max-w-none text-slate-700">
                <p className="mb-4">
                  Nárok na hotelové ubytování máte ve chvíli, kdy <strong>předpokládaný čas odletu nového letu je alespoň jeden den (tj. přes noc) po původním datu odletu</strong>. Není důležité, zda se jedná o zpoždění nebo přerezervování po zrušení letu.
                </p>

                <div className="bg-green-50 border-l-4 border-green-600 rounded-r-xl p-6 my-6">
                  <h3 className="text-xl font-bold text-slate-900 mb-3 mt-0">Dvě povinnosti dopravce:</h3>
                  <ul className="space-y-2 mb-0">
                    <li><strong>Zajistit ubytování v hotelu:</strong> Pokud to situace vyžaduje, musí aerolinka nabídnout vhodné ubytování.</li>
                    <li><strong>Transfer:</strong> Musí zajistit dopravu z letiště do hotelu a zpět na letiště.</li>
                  </ul>
                </div>

                <p className="mb-0">
                  Tyto povinnosti platí bez ohledu na příčinu zpoždění. A to i v případě, že jde o mimořádné okolnosti, např. špatné počasí (kvůli kterým vám sice nenáleží finanční kompenzace, ale právo na péči ano!).
                </p>
              </div>
            </div>
          </section>

          {/* Section 2 */}
          <section className="mb-12">
            <div className="bg-white rounded-2xl shadow-sm border border-slate-200 p-8">
              <div className="flex items-start gap-4 mb-6">
                <div className="p-3 bg-blue-50 rounded-xl">
                  <Receipt className="w-6 h-6 text-blue-600" />
                </div>
                <div className="flex-1">
                  <h2 className="text-3xl font-bold text-slate-900 mb-4">
                    Co dělat, když aerolinka hotel nezajistí sama?
                  </h2>
                </div>
              </div>
              
              <div className="prose prose-lg max-w-none text-slate-700">
                <p className="mb-4">
                  V praxi se často stává, že u přepážek je obrovská fronta, chybí personál nebo call centrum nereaguje. V takovém případě nesmíte zoufat:
                </p>

                <ol className="space-y-3 mb-6">
                  <li><strong>Zařiďte si hotel sami:</strong> Vyberte si ubytování střední třídy (kolem 3 hvězdiček).</li>
                  <li><strong>Zachovejte si účtenky:</strong> Faktury z hotelu, účtenky za jídlo i za taxi z letiště a zpět. Účtenky si vyfoťte!</li>
                  <li><strong>Náklady musí být přiměřené:</strong> Aerolinka vám neproplatí pobyt v Prezidentském apartmá v Ritzu ani alkohol z minibaru. Pokud ale běžné hotely byly plné a vy museli vzít dražší pokoj, uschovejte i screenshot z bookingu dokazující tuto skutečnost.</li>
                </ol>

                <div className="bg-amber-50 border-l-4 border-amber-600 rounded-r-xl p-6 my-6">
                  <h3 className="text-lg font-bold text-slate-900 mb-2 mt-0">Výdaje za stravu</h3>
                  <p className="mb-0">
                    Máte nárok i na proplacení občerstvení po dobu čekání. Zde platí to samé: uschovejte si paragony (kavárny, fast food na letišti). Letecká společnost vám zpětně uhradí účelně vynaložené náklady (opět – ne luxusní večeře ani alkohol).
                  </p>
                </div>
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
                    Musí mi aerolinka zaplatit hotel při nočním zpoždění?
                  </h3>
                  <p className="text-slate-700 leading-relaxed mb-0">
                    Ano, pokud je očekávaný čas odletu alespoň den po původním termínu, aerolinka musí poskytnout hotel a transfer zdarma.
                  </p>
                </div>

                <div className="bg-white rounded-xl p-6 shadow-sm border border-slate-100">
                  <h3 className="text-xl font-bold text-slate-900 mb-3">
                    Co dělat, když na letišti není nikdo od aerolinky, kdo by zajistil hotel?
                  </h3>
                  <p className="text-slate-700 leading-relaxed mb-0">
                    Můžete si zarezervovat hotel sami (přiměřené ceny). Nezapomeňte si uschovat všechny účtenky pro pozdější proplacení.
                  </p>
                </div>

                <div className="bg-white rounded-xl p-6 shadow-sm border border-slate-100">
                  <h3 className="text-xl font-bold text-slate-900 mb-3">
                    Dostanu kromě zaplaceného hotelu i kompenzaci 600 €?
                  </h3>
                  <p className="text-slate-700 leading-relaxed mb-0">
                    Ano, proplacení nákladů na hotel a kompenzace za zpoždění podle ES 261/2004 jsou dva nezávislé nároky. Máte právo na obojí.
                  </p>
                </div>

                <div className="bg-white rounded-xl p-6 shadow-sm border border-slate-100">
                  <h3 className="text-xl font-bold text-slate-900 mb-3">
                    Proplatí mi aerolinka luxusní 5hvězdičkový hotel?
                  </h3>
                  <p className="text-slate-700 leading-relaxed mb-0">
                    Většinou ne. Náklady musí být přiměřené dané situaci (obvykle se uznávají hotely střední třídy cca do 100-150 € za noc).
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
                  Zpozdili vám let přes noc?
                </h2>
                <p className="text-xl text-blue-100 mb-8">
                  Máte nárok nejen na vrácení nákladů za hotel, ale také na kompenzaci až 600 €. Odborníci z ClaimWinger vám s tím pomohou.
                </p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
                  <a
                    href="https://claimwinger.com/cs/zpozdeny-let?utm_source=problemlot&utm_medium=blog&utm_campaign=cs-nocni-zpozdeni"
                    className="inline-flex items-center gap-2 bg-white text-blue-600 px-8 py-4 rounded-xl font-bold text-lg hover:bg-blue-50 transition-all shadow-lg hover:shadow-xl hover:scale-105"
                  >
                    Zkontrolovat nárok zdarma
                    <CheckCircle className="w-5 h-5" />
                  </a>
                  <span className="text-blue-100 text-sm">
                    ✓ Bez rizika • ✓ Platíte až po úspěchu • ✓ Pomoc s účtenkami
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
                    Zjistěte svá kompletní práva pasažéra v Evropské unii.
                  </p>
                </Link>
                <Link 
                  href="/cs/blog/let-zrusen-den-pred-odletem-moznosti"
                  className="group p-4 rounded-xl border-2 border-slate-200 hover:border-blue-600 transition-colors"
                >
                  <h3 className="font-bold text-slate-900 group-hover:text-blue-600 mb-2">
                    Let zrušen den před odletem
                  </h3>
                  <p className="text-sm text-slate-600">
                    Co dělat, pokud k narušení letu dojde na poslední chvíli.
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