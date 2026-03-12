import { Layout } from "@/components/Layout";
import { SEO } from "@/components/SEO";
import Link from "next/link";
import { Cloud, AlertTriangle, FileText, CheckCircle, XCircle, Scale, Users } from "lucide-react";
import { generateFAQSchema, generateArticleSchema, generateBreadcrumbSchema } from "@/lib/schemaGenerator";

export default function ZpozdeniPocasiNarokKompenzace() {
  const faqSchema = generateFAQSchema([
    {
      question: "Mám nárok na kompenzaci, pokud je zpoždění způsobeno špatným počasím?",
      answer: "Ne vždy. Pokud je špatné počasí extrémní a nepředvídatelné (bouřka, hurikán, hustá mlha), jedná se o mimořádnou okolnost a nárok na kompenzaci nevzniká. Pokud je však počasí předvídatelné (např. zimní sníh, běžný déšť) a aerolinka měla možnost na situaci reagovat předem, kompenzace může být přiznána."
    },
    {
      question: "Co je považováno za mimořádnou okolnost v případě počasí?",
      answer: "Mimořádnou okolností je extrémní a nepředvídatelné počasí, které letecká společnost nemohla kontrolovat ani mu zabránit: silné bouřky, hurikány, vulkanická činnost, hustá mlha bránící vzletu/přistání. Běžné zimní podmínky (sníh, led) nebo sezónní deště obvykle mimořádnou okolností nejsou."
    },
    {
      question: "Jak aerolinka prokazuje, že zpoždění bylo způsobeno počasím?",
      answer: "Aerolinka musí předložit důkaz o mimořádné okolnosti: meteorologické zprávy z letiště, hlášení řízení letového provozu (ATC), protokoly o uzavření letiště nebo dráhy. Pokud tyto důkazy nejsou dostatečné nebo prokazují, že počasí bylo předvídatelné, máte nárok na kompenzaci."
    },
    {
      question: "Co když má zpoždění více příčin (počasí + technická závada)?",
      answer: "Pokud zpoždění má více příčin, klíčové je určit hlavní důvod. Pokud technická závada způsobila primární zpoždění a špatné počasí bylo pouze sekundární faktor, nárok na kompenzaci obvykle vzniká. Důkazní břemeno leží na letecké společnosti."
    },
    {
      question: "Mohu žádat kompenzaci, pokud aerolinka tvrdí 'špatné počasí', ale jiné lety létaly normálně?",
      answer: "Ano, to je silný indikátor, že počasí nebylo mimořádnou okolností. Pokud konkurenční aerolinka nebo jiné lety z téhož letiště operovaly bez problémů, důvod zpoždění byl pravděpodobně interní (organizační selhání, nedostatek posádky, údržba). V takovém případě máte nárok na kompenzaci a měli byste argument použít v reklamaci."
    }
  ]);

  const articleSchema = generateArticleSchema({
    headline: "Zpoždění kvůli počasí — kdy máte nárok na kompenzaci?",
    description: "Zjistěte, kdy špatné počasí osvobozuje aerolinie od povinnosti vyplatit kompenzaci a kdy ne. Právní analýza mimořádných okolností podle ES 261/2004.",
    author: "ClaimWinger Legal Team",
    datePublished: "2025-01-12",
    dateModified: "2025-01-12",
    image: "https://problemlot.pl/og-image.png"
  });

  const breadcrumbSchema = generateBreadcrumbSchema([
    { name: "Domů", url: "https://problemlot.pl/cs" },
    { name: "Blog", url: "https://problemlot.pl/cs/blog" },
    { name: "Zpoždění kvůli počasí" }
  ]);

  return (
    <Layout>
      <SEO
        title="Zpoždění kvůli počasí — nárok na kompenzaci? | ProblemLot.pl"
        description="Zjistěte, kdy špatné počasí osvobozuje aerolinie od povinnosti vyplatit kompenzaci a kdy ne. Právní analýza mimořádných okolností podle ES 261/2004."
        url="https://problemlot.pl/cs/blog/zpozdeni-pocasi-narok-kompenzace"
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
                Zpoždění kvůli počasí
              </li>
            </ol>
          </div>
        </nav>

        {/* Hero Section */}
        <header className="bg-gradient-to-r from-blue-600 to-blue-700 text-white py-16 sm:py-20">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex items-center gap-3 mb-6">
              <div className="p-3 bg-white/10 backdrop-blur-sm rounded-xl">
                <Cloud className="w-8 h-8" />
              </div>
              <span className="px-4 py-1.5 bg-white/20 backdrop-blur-sm rounded-full text-sm font-medium">
                Mimořádné okolnosti
              </span>
            </div>
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold mb-6 leading-tight">
              Zpoždění kvůli počasí — kdy máte nárok na kompenzaci?
            </h1>
            <p className="text-xl sm:text-2xl text-blue-100 leading-relaxed font-light">
              Právní analýza: Kdy špatné počasí osvobozuje aerolinie od povinnosti vyplatit kompenzaci a kdy ne
            </p>
          </div>
        </header>

        {/* Main Content */}
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-16">
          
          {/* Introduction */}
          <div className="prose prose-lg max-w-none mb-12">
            <div className="bg-white rounded-2xl shadow-sm border border-slate-200 p-8 mb-8">
              <p className="text-lg leading-relaxed text-slate-700 mb-4">
                <strong>Špatné počasí</strong> je nejčastější důvod, kterým aerolinie odmítají vyplatit kompenzaci za zpoždění nebo zrušení letu. Podle <Link href="/cs/blog/narizeni-es-261-2004" className="text-blue-600 hover:text-blue-700 font-medium">nařízení ES 261/2004</Link> je špatné počasí považováno za <strong>mimořádnou okolnost</strong>, která osvobozuje leteckou společnost od povinnosti vyplatit kompenzaci — ale pouze pokud splňuje přísná kritéria.
              </p>
              <p className="text-lg leading-relaxed text-slate-700 mb-4">
                Klíčové otázky: <strong>Bylo počasí skutečně nepředvídatelné a extrémní?</strong> Přijala aerolinka všechna přiměřená opatření, aby zabránila zpoždění? Pokud jiné lety z téhož letiště létaly normálně, důvod zpoždění pravděpodobně nebyl v počasí. V praxi řada aerolinek <strong>zneužívá</strong> argument "špatné počasí" k odmítnutí oprávněných nároků — proto je důležité znát svá práva a umět argumentovat.
              </p>
              <p className="text-lg leading-relaxed text-slate-700">
                Tento článek vysvětluje, <strong>kdy je počasí skutečně mimořádnou okolností</strong> a kdy máte právo na kompenzaci až do <strong className="text-blue-600">600 €</strong>. Analýza je založena na judikatuře Soudního dvora EU, zejména případu <em>C-549/07 Wallentin-Hermann</em>, který stanovil přísné limity pro aplikaci mimořádných okolností.
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
                      <th className="text-left py-3 px-4 font-semibold text-slate-700">Kompenzace</th>
                      <th className="text-left py-3 px-4 font-semibold text-slate-700">Podmínka</th>
                    </tr>
                  </thead>
                  <tbody className="text-slate-600">
                    <tr className="border-b border-blue-100">
                      <td className="py-3 px-4">Do 1 500 km</td>
                      <td className="py-3 px-4 font-bold text-blue-600">250 €</td>
                      <td className="py-3 px-4">Zpoždění 3+ hodiny</td>
                    </tr>
                    <tr className="border-b border-blue-100">
                      <td className="py-3 px-4">1 500 – 3 500 km</td>
                      <td className="py-3 px-4 font-bold text-blue-600">400 €</td>
                      <td className="py-3 px-4">Zpoždění 3+ hodiny</td>
                    </tr>
                    <tr>
                      <td className="py-3 px-4">Nad 3 500 km</td>
                      <td className="py-3 px-4 font-bold text-blue-600">600 €</td>
                      <td className="py-3 px-4">Zpoždění 4+ hodiny</td>
                    </tr>
                  </tbody>
                </table>
              </div>
              <p className="text-sm text-slate-600 mt-4 mb-0">
                <strong>Důležité:</strong> Kompenzace je vyplácena na cestující, ne na rezervaci. Při cestování s rodinou (4 osoby) na dlouhou trasu může celková kompenzace dosáhnout <strong className="text-blue-600">2 400 €</strong>.
              </p>
            </div>
          </div>

          {/* Section 1 */}
          <section className="mb-12">
            <div className="bg-white rounded-2xl shadow-sm border border-slate-200 p-8">
              <div className="flex items-start gap-4 mb-6">
                <div className="p-3 bg-blue-50 rounded-xl">
                  <AlertTriangle className="w-6 h-6 text-blue-600" />
                </div>
                <div className="flex-1">
                  <h2 className="text-3xl font-bold text-slate-900 mb-4">
                    Co je mimořádná okolnost v případě počasí?
                  </h2>
                </div>
              </div>
              
              <div className="prose prose-lg max-w-none text-slate-700">
                <p className="mb-4">
                  Podle <strong>článku 5 odst. 3 nařízení ES 261/2004</strong> je aerolinka osvobozena od povinnosti vyplatit kompenzaci, pokud prokáže, že zrušení nebo zpoždění bylo způsobeno <strong>mimořádnými okolnostmi</strong>, kterým nemohla zabránit, i kdyby přijala všechna přiměřená opatření.
                </p>

                <p className="mb-4">
                  <strong>Soudní dvůr EU</strong> v případu <em>C-549/07 Wallentin-Hermann v. Alitalia</em> stanovil přísná kritéria:
                </p>

                <div className="bg-blue-50 border-l-4 border-blue-600 rounded-r-xl p-6 my-6">
                  <h3 className="text-xl font-bold text-slate-900 mb-3 mt-0">Mimořádnou okolností je pouze:</h3>
                  <ul className="space-y-2 mb-0">
                    <li className="flex items-start gap-3">
                      <CheckCircle className="w-5 h-5 text-blue-600 mt-1 flex-shrink-0" />
                      <span><strong>Extrémní počasí:</strong> Hurikány, bouřky, tornáda, vulkanická činnost, hustá mlha bránící vzletu/přistání</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <CheckCircle className="w-5 h-5 text-blue-600 mt-1 flex-shrink-0" />
                      <span><strong>Nepředvídatelnost:</strong> Počasí, které nebylo prognózováno meteorologickými službami a nastalo náhle</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <CheckCircle className="w-5 h-5 text-blue-600 mt-1 flex-shrink-0" />
                      <span><strong>Nevyhnutelnost:</strong> Aerolinka nemohla na situaci reagovat předem (např. přesunout let dříve, použít jiné letadlo)</span>
                    </li>
                  </ul>
                </div>

                <p className="mb-4">
                  <strong>NENÍ mimořádnou okolností:</strong>
                </p>

                <div className="bg-red-50 border-l-4 border-red-600 rounded-r-xl p-6 my-6">
                  <ul className="space-y-2 mb-0">
                    <li className="flex items-start gap-3">
                      <XCircle className="w-5 h-5 text-red-600 mt-1 flex-shrink-0" />
                      <span><strong>Běžné zimní podmínky:</strong> Sníh, led, mráz v zimním období (prosinec–březen) na letištích ve střední/severní Evropě</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <XCircle className="w-5 h-5 text-red-600 mt-1 flex-shrink-0" />
                      <span><strong>Sezónní počasí:</strong> Letní bouřky v tropických oblastech, podzimní mlha v kontinentální Evropě</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <XCircle className="w-5 h-5 text-red-600 mt-1 flex-shrink-0" />
                      <span><strong>Prognózované počasí:</strong> Pokud meteorologická služba varovala před špatným počasím 24–48 hodin předem</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <XCircle className="w-5 h-5 text-red-600 mt-1 flex-shrink-0" />
                      <span><strong>Organizační selhání:</strong> Nedostatek posádky, technická údržba, nedostatek odmrazovacího prostředku</span>
                    </li>
                  </ul>
                </div>

                <p className="mb-0">
                  <strong>Klíčový princip:</strong> Pokud aerolinka <strong>mohla předpokládat</strong> špatné počasí a měla možnost na něj reagovat předem (např. preventivní údržba, zajištění rezervní posádky, změna rozvrhu letů), kompenzace musí být vyplacena.
                </p>
              </div>
            </div>
          </section>

          {/* Section 2 */}
          <section className="mb-12">
            <div className="bg-white rounded-2xl shadow-sm border border-slate-200 p-8">
              <div className="flex items-start gap-4 mb-6">
                <div className="p-3 bg-blue-50 rounded-xl">
                  <FileText className="w-6 h-6 text-blue-600" />
                </div>
                <div className="flex-1">
                  <h2 className="text-3xl font-bold text-slate-900 mb-4">
                    Jak aerolinka prokazuje mimořádnou okolnost?
                  </h2>
                </div>
              </div>
              
              <div className="prose prose-lg max-w-none text-slate-700">
                <p className="mb-4">
                  <strong>Důkazní břemeno</strong> leží na letecké společnosti — to znamená, že <strong>aerolinka musí prokázat</strong>, že počasí skutečně bylo mimořádnou okolností a že přijala všechna přiměřená opatření.
                </p>

                <p className="mb-4">
                  <strong>Povinné důkazy:</strong>
                </p>

                <div className="bg-slate-50 rounded-xl p-6 mb-6">
                  <ul className="space-y-3 mb-0">
                    <li className="flex items-start gap-3">
                      <div className="w-6 h-6 bg-blue-600 text-white rounded-full flex items-center justify-center flex-shrink-0 mt-1 text-sm font-bold">1</div>
                      <div>
                        <strong className="text-slate-900">Meteorologické zprávy (METAR/TAF):</strong> Oficiální hlášení počasí z letiště v době odletu/příletu
                      </div>
                    </li>
                    <li className="flex items-start gap-3">
                      <div className="w-6 h-6 bg-blue-600 text-white rounded-full flex items-center justify-center flex-shrink-0 mt-1 text-sm font-bold">2</div>
                      <div>
                        <strong className="text-slate-900">ATC protokoly:</strong> Potvrzení od řízení letového provozu o uzavření letiště nebo dráhy
                      </div>
                    </li>
                    <li className="flex items-start gap-3">
                      <div className="w-6 h-6 bg-blue-600 text-white rounded-full flex items-center justify-center flex-shrink-0 mt-1 text-sm font-bold">3</div>
                      <div>
                        <strong className="text-slate-900">NOTAMs (Notice to Airmen):</strong> Oficiální oznámení o uzavření letiště nebo omezení provozu
                      </div>
                    </li>
                    <li className="flex items-start gap-3">
                      <div className="w-6 h-6 bg-blue-600 text-white rounded-full flex items-center justify-center flex-shrink-0 mt-1 text-sm font-bold">4</div>
                      <div>
                        <strong className="text-slate-900">Letový plán:</strong> Důkaz, že let musel být přesměrován nebo zrušen kvůli počasí
                      </div>
                    </li>
                    <li className="flex items-start gap-3">
                      <div className="w-6 h-6 bg-blue-600 text-white rounded-full flex items-center justify-center flex-shrink-0 mt-1 text-sm font-bold">5</div>
                      <div>
                        <strong className="text-slate-900">Důkaz o opatřeních:</strong> Co konkrétně aerolinka podnikla, aby zabránila zpoždění (přesun letadla, zajištění rezervní posádky, odmrazování)
                      </div>
                    </li>
                  </ul>
                </div>

                <p className="mb-4">
                  <strong>Pokud aerolinka nepředloží tyto důkazy</strong> nebo pokud důkazy prokazují, že počasí bylo předvídatelné (např. zimní sníh v prosinci v Praze), máte <strong>nárok na kompenzaci</strong>.
                </p>

                <div className="bg-amber-50 border-l-4 border-amber-600 rounded-r-xl p-6 my-6">
                  <h3 className="text-lg font-bold text-slate-900 mb-2 mt-0">⚠️ Časté triky aerolinií:</h3>
                  <ul className="space-y-2 mb-0">
                    <li><strong>"Špatné počasí na jiném letišti":</strong> Pokud zpoždění vzniklo na jiném letišti (ne na vašem), aerolinka musí prokázat, že špatné počasí ovlivnilo konkrétně vaše letadlo</li>
                    <li><strong>"Technická závada způsobená ledem":</strong> Zimní podmínky nejsou mimořádnou okolností — aerolinka měla zajistit odmrazování a preventivní údržbu</li>
                    <li><strong>"Řetězový efekt zpoždění":</strong> Pokud počasí způsobilo zpoždění předchozího letu, ale váš let mohl odletět s jiným letadlem/posádkou, kompenzace musí být vyplacena</li>
                  </ul>
                </div>

                <p className="mb-0">
                  <strong>Praktický tip:</strong> Žádejte aerolinie o <strong>písemné zdůvodnění</strong> odmítnutí kompenzace včetně konkrétních důkazů (čísla METAR zpráv, protokoly ATC). Pokud důkazy nejsou dostatečné, máte silný argument pro <Link href="/cs/blog/jak-podat-reklamaci-krok-za-krokem" className="text-blue-600 hover:text-blue-700 font-medium">reklamaci</Link> nebo soudní spor.
                </p>
              </div>
            </div>
          </section>

          {/* Section 3 */}
          <section className="mb-12">
            <div className="bg-white rounded-2xl shadow-sm border border-slate-200 p-8">
              <div className="flex items-start gap-4 mb-6">
                <div className="p-3 bg-blue-50 rounded-xl">
                  <Users className="w-6 h-6 text-blue-600" />
                </div>
                <div className="flex-1">
                  <h2 className="text-3xl font-bold text-slate-900 mb-4">
                    Jiné loty létaly — co to znamená pro váš nárok?
                  </h2>
                </div>
              </div>
              
              <div className="prose prose-lg max-w-none text-slate-700">
                <p className="mb-4">
                  <strong>Klíčový indikátor</strong> při posuzování, zda počasí bylo skutečně mimořádnou okolností: <strong>Létaly jiné lety z téhož letiště?</strong>
                </p>

                <p className="mb-4">
                  <strong>Pravidlo konkurenčních letů:</strong>
                </p>

                <div className="bg-green-50 border-l-4 border-green-600 rounded-r-xl p-6 my-6">
                  <h3 className="text-xl font-bold text-slate-900 mb-3 mt-0">✅ Máte nárok na kompenzaci, pokud:</h3>
                  <ul className="space-y-2 mb-0">
                    <li><strong>Konkurenční aerolinka</strong> létala z téhož letiště ve stejnou dobu (např. váš Ryanair byl zrušen, ale Wizz Air nebo Lufthansa odletěly)</li>
                    <li><strong>Jiné lety téže aerolinie</strong> odletěly s minimálním zpožděním (vaše letadlo mělo 4hodinové zpoždění, ale jiný let téže společnosti měl pouze 30 minut)</li>
                    <li><strong>Letiště bylo otevřené</strong> a provoz nebyl oficiálně zastaven (ověřitelné na stránkách letiště nebo v NOTAM zprávách)</li>
                    <li><strong>Počasí bylo lokální</strong> a ovlivnilo pouze část letiště (např. jedna dráha byla uzavřena, ale druhá byla v provozu)</li>
                  </ul>
                </div>

                <p className="mb-4">
                  <strong>Jak ověřit, zda jiné loty létaly?</strong>
                </p>

                <div className="bg-slate-50 rounded-xl p-6 mb-6">
                  <ul className="space-y-3 mb-0">
                    <li className="flex items-start gap-3">
                      <div className="w-6 h-6 bg-blue-600 text-white rounded-full flex items-center justify-center flex-shrink-0 mt-1 text-sm font-bold">1</div>
                      <div>
                        <strong className="text-slate-900">FlightRadar24.com:</strong> Historická data letů z daného letiště v konkrétní čas (zdarma pro základní vyhledávání)
                      </div>
                    </li>
                    <li className="flex items-start gap-3">
                      <div className="w-6 h-6 bg-blue-600 text-white rounded-full flex items-center justify-center flex-shrink-0 mt-1 text-sm font-bold">2</div>
                      <div>
                        <strong className="text-slate-900">Webové stránky letiště:</strong> Archiv odletů a příletů (většina letišť ukládá data po dobu 30–90 dnů)
                      </div>
                    </li>
                    <li className="flex items-start gap-3">
                      <div className="w-6 h-6 bg-blue-600 text-white rounded-full flex items-center justify-center flex-shrink-0 mt-1 text-sm font-bold">3</div>
                      <div>
                        <strong className="text-slate-900">METAR zprávy:</strong> Oficiální meteorologické hlášení z letiště (dostupné na OGIMET.com nebo Aviation Weather Center)
                      </div>
                    </li>
                    <li className="flex items-start gap-3">
                      <div className="w-6 h-6 bg-blue-600 text-white rounded-full flex items-center justify-center flex-shrink-0 mt-1 text-sm font-bold">4</div>
                      <div>
                        <strong className="text-slate-900">Sociální sítě:</strong> Cestující často zveřejňují fotografie/videa ze stejného letiště v tentýž čas
                      </div>
                    </li>
                  </ul>
                </div>

                <p className="mb-4">
                  <strong>Příklad z praxe:</strong>
                </p>

                <div className="bg-blue-50 rounded-xl p-6 mb-6">
                  <p className="mb-3">
                    <em>Pasažér cestoval z Prahy do Londýna s Ryanair 15. ledna 2024. Let byl zrušen kvůli "špatnému počasí" (sníh). FlightRadar24 ukázal, že Wizz Air, EasyJet a British Airways létaly z Prahy do Londýna v tentýž den s minimálním zpožděním. Pasažér podal reklamaci s odkazem na tyto údaje. Ryanair vyplatil kompenzaci 250 € do 14 dnů.</em>
                  </p>
                  <p className="mb-0 font-semibold text-slate-900">
                    ✅ Důkaz konkurenčních letů je <strong>nejsilnější argument</strong> proti odmítnutí kompenzace.
                  </p>
                </div>

                <p className="mb-0">
                  <strong>Závěr:</strong> Pokud aerolinka tvrdí "špatné počasí", ale jiné loty létaly, jedná se pravděpodobně o <strong>organizační selhání</strong> (nedostatek posádky, technická údržba, plánování). Máte právo na kompenzaci.
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
                    Mám nárok na kompenzaci, pokud je zpoždění způsobeno špatným počasím?
                  </h3>
                  <p className="text-slate-700 leading-relaxed mb-0">
                    Ne vždy. Pokud je špatné počasí extrémní a nepředvídatelné (bouřka, hurikán, hustá mlha), jedná se o mimořádnou okolnost a nárok na kompenzaci nevzniká. Pokud je však počasí předvídatelné (např. zimní sníh, běžný déšť) a aerolinka měla možnost na situaci reagovat předem, kompenzace může být přiznána.
                  </p>
                </div>

                <div className="bg-white rounded-xl p-6 shadow-sm border border-slate-100">
                  <h3 className="text-xl font-bold text-slate-900 mb-3">
                    Co je považováno za mimořádnou okolnost v případě počasí?
                  </h3>
                  <p className="text-slate-700 leading-relaxed mb-0">
                    Mimořádnou okolností je extrémní a nepředvídatelné počasí, které letecká společnost nemohla kontrolovat ani mu zabránit: silné bouřky, hurikány, vulkanická činnost, hustá mlha bránící vzletu/přistání. Běžné zimní podmínky (sníh, led) nebo sezónní deště obvykle mimořádnou okolností nejsou.
                  </p>
                </div>

                <div className="bg-white rounded-xl p-6 shadow-sm border border-slate-100">
                  <h3 className="text-xl font-bold text-slate-900 mb-3">
                    Jak aerolinka prokazuje, že zpoždění bylo způsobeno počasím?
                  </h3>
                  <p className="text-slate-700 leading-relaxed mb-0">
                    Aerolinka musí předložit důkaz o mimořádné okolnosti: meteorologické zprávy z letiště, hlášení řízení letového provozu (ATC), protokoly o uzavření letiště nebo dráhy. Pokud tyto důkazy nejsou dostatečné nebo prokazují, že počasí bylo předvídatelné, máte nárok na kompenzaci.
                  </p>
                </div>

                <div className="bg-white rounded-xl p-6 shadow-sm border border-slate-100">
                  <h3 className="text-xl font-bold text-slate-900 mb-3">
                    Co když má zpoždění více příčin (počasí + technická závada)?
                  </h3>
                  <p className="text-slate-700 leading-relaxed mb-0">
                    Pokud zpoždění má více příčin, klíčové je určit hlavní důvod. Pokud technická závada způsobila primární zpoždění a špatné počasí bylo pouze sekundární faktor, nárok na kompenzaci obvykle vzniká. Důkazní břemeno leží na letecké společnosti.
                  </p>
                </div>

                <div className="bg-white rounded-xl p-6 shadow-sm border border-slate-100">
                  <h3 className="text-xl font-bold text-slate-900 mb-3">
                    Mohu žádat kompenzaci, pokud aerolinka tvrdí "špatné počasí", ale jiné loty létaly normálně?
                  </h3>
                  <p className="text-slate-700 leading-relaxed mb-0">
                    Ano, to je silný indikátor, že počasí nebylo mimořádnou okolností. Pokud konkurenční aerolinka nebo jiné lety z téhož letiště operovaly bez problémů, důvod zpoždění byl pravděpodobně interní (organizační selhání, nedostatek posádky, údržba). V takovém případě máte nárok na kompenzaci a měli byste argument použít v reklamaci.
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
                  Zjistěte, zda máte nárok na kompenzaci
                </h2>
                <p className="text-xl text-blue-100 mb-8">
                  Získejte až <strong className="text-white">600 €</strong> za zpoždění kvůli počasí — i když aerolinka odmítla
                </p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
                  <a
                    href="https://claimwinger.com/cs/zpozdeny-let?utm_source=problemlot&utm_medium=blog&utm_campaign=cs-pocasi"
                    className="inline-flex items-center gap-2 bg-white text-blue-600 px-8 py-4 rounded-xl font-bold text-lg hover:bg-blue-50 transition-all shadow-lg hover:shadow-xl hover:scale-105"
                  >
                    Zkontrolovat nárok zdarma
                    <CheckCircle className="w-5 h-5" />
                  </a>
                  <span className="text-blue-100 text-sm">
                    ✓ Bez rizika • ✓ Platíte až po výhře • ✓ 98% úspěšnost
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
                    Nařízení ES 261/2004 — kompletní průvodce
                  </h3>
                  <p className="text-sm text-slate-600">
                    Základní práva cestujících při zpoždění, zrušení nebo odmítnutí nástupu na palubu
                  </p>
                </Link>
                <Link 
                  href="/cs/blog/jak-podat-reklamaci-krok-za-krokem"
                  className="group p-4 rounded-xl border-2 border-slate-200 hover:border-blue-600 transition-colors"
                >
                  <h3 className="font-bold text-slate-900 group-hover:text-blue-600 mb-2">
                    Jak podat reklamaci — krok za krokem
                  </h3>
                  <p className="text-sm text-slate-600">
                    Praktický návod na podání reklamace u letecké společnosti včetně vzorů
                  </p>
                </Link>
                <Link 
                  href="/cs/blog/mimoradne-okolnosti-vysvetleny"
                  className="group p-4 rounded-xl border-2 border-slate-200 hover:border-blue-600 transition-colors"
                >
                  <h3 className="font-bold text-slate-900 group-hover:text-blue-600 mb-2">
                    Mimořádné okolnosti — kdy osvobozují od kompenzace?
                  </h3>
                  <p className="text-sm text-slate-600">
                    Kompletní přehled mimořádných okolností podle judikatury EU
                  </p>
                </Link>
                <Link 
                  href="/cs/blog/3hodinove-pravidlo-zpozdeni"
                  className="group p-4 rounded-xl border-2 border-slate-200 hover:border-blue-600 transition-colors"
                >
                  <h3 className="font-bold text-slate-900 group-hover:text-blue-600 mb-2">
                    3hodinové pravidlo — kdy vzniká nárok?
                  </h3>
                  <p className="text-sm text-slate-600">
                    Vysvětlení pravidla 3 hodin zpoždění a výpočet doby příjezdu
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