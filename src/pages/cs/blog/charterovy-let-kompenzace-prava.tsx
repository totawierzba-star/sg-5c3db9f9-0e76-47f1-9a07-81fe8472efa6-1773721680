import { Layout } from "@/components/Layout";
import { SEO } from "@/components/SEO";
import Link from "next/link";
import { Plane, AlertTriangle, FileText, CheckCircle, XCircle, Scale, Users, Shield } from "lucide-react";
import { generateFAQSchema, generateArticleSchema, generateBreadcrumbSchema } from "@/lib/schemaGenerator";

export default function CharterovyLetKompenzacePrava() {
  const faqSchema = generateFAQSchema([
    {
      question: "Mají cestující na charterovém letu stejná práva jako na pravidelné lince?",
      answer: "Ano! Nařízení ES 261/2004 platí pro VŠECHNY komerční lety z EU — bez ohledu na to, zda jde o charterový let nebo pravidelnou linku. Práva na kompenzaci až 600 € jsou identická."
    },
    {
      question: "Kdo je odpovědný za kompenzaci na charterovém letu — aerolinka nebo cestovní kancelář?",
      answer: "Vždy provozující letecká společnost. Cestovní kancelář je zprostředkovatel — odpovědnost za let nese aerolinka. Reklamaci podáváte u letecké společnosti (např. Smartwings, Travel Service), nikoli u CK."
    },
    {
      question: "Co když charterový let byl součástí balíčku all-inclusive?",
      answer: "Máte nárok na kompenzaci od letecké společnosti + případný nárok na slevu z celkového balíčku od CK (podle § 2534 občanského zákoníku). Jsou to dva nezávislé nároky — kompenzace za let + sleva za zkažený zájezd."
    },
    {
      question: "Platí ES 261/2004 pro charterové lety do Egypta, Tuniska nebo Turecka?",
      answer: "Ano, pokud let vychází z letiště v EU (Praha, Brno, Katowice atd.). ES 261/2004 chrání všechny lety odlétající z EU — bez ohledu na cílovou destinaci. Let Praha–Hurghada je chráněn stejně jako Praha–Vídeň."
    },
    {
      question: "Jak dlouho trvá vyplacení kompenzace na charterovém letu?",
      answer: "Podle ES 261/2004 musí aerolinka vyplatit kompenzaci do 7 dnů od podání reklamace. V praxi charterové společnosti (Smartwings, Travel Service) platí obvykle do 14–30 dnů. Pokud odmítají — právní vymáhání trvá 3–6 měsíců."
    }
  ]);

  const articleSchema = generateArticleSchema({
    headline: "Charterový let a kompenzace — stejná práva jako u linek?",
    description: "Zjistěte, zda máte nárok na kompenzaci za zpoždění nebo zrušení charterového letu. Práva cestujících podle ES 261/2004 platí i pro chartry.",
    author: "ClaimWinger Legal Team",
    datePublished: "2025-01-13",
    dateModified: "2025-01-13",
    image: "https://problemlot.pl/og-image.png"
  });

  const breadcrumbSchema = generateBreadcrumbSchema([
    { name: "Domů", url: "https://problemlot.pl/cs" },
    { name: "Blog", url: "https://problemlot.pl/cs/blog" },
    { name: "Charterový let a kompenzace" }
  ]);

  return (
    <Layout>
      <SEO
        title="Charterový let a kompenzace — stejná práva? | ProblemLot.pl"
        description="Zjistěte, zda máte nárok na kompenzaci za zpoždění nebo zrušení charterového letu. Práva cestujících podle ES 261/2004 platí i pro chartry."
        url="https://problemlot.pl/cs/blog/charterovy-let-kompenzace-prava"
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
                Charterový let a kompenzace
              </li>
            </ol>
          </div>
        </nav>

        {/* Hero Section */}
        <header className="bg-gradient-to-r from-blue-600 to-blue-700 text-white py-16 sm:py-20">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex items-center gap-3 mb-6">
              <div className="p-3 bg-white/10 backdrop-blur-sm rounded-xl">
                <Plane className="w-8 h-8" />
              </div>
              <span className="px-4 py-1.5 bg-white/20 backdrop-blur-sm rounded-full text-sm font-medium">
                Charterové lety
              </span>
            </div>
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold mb-6 leading-tight">
              Charterový let a kompenzace — stejná práva jako u linek?
            </h1>
            <p className="text-xl sm:text-2xl text-blue-100 leading-relaxed font-light">
              Zjistěte, zda máte nárok na kompenzaci za zpoždění nebo zrušení charterového letu podle ES 261/2004
            </p>
          </div>
        </header>

        {/* Main Content */}
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-16">
          
          {/* Introduction */}
          <div className="prose prose-lg max-w-none mb-12">
            <div className="bg-white rounded-2xl shadow-sm border border-slate-200 p-8 mb-8">
              <p className="text-lg leading-relaxed text-slate-700 mb-4">
                Mnoho cestujících si myslí, že <strong>charterové lety</strong> (typicky all-inclusive zájezdy do Egypta, Tuniska, Turecka nebo Řecka) mají <strong>odlišná práva</strong> než pravidelné linky. To je však <strong>mýtus</strong>. Podle <Link href="/cs/blog/narizeni-es-261-2004" className="text-blue-600 hover:text-blue-700 font-medium">nařízení ES 261/2004</Link> platí <strong>stejná pravidla</strong> pro všechny komerční lety — bez ohledu na to, zda kupujete letenku samostatně nebo jako součást balíčku od cestovní kanceláře.
              </p>
              <p className="text-lg leading-relaxed text-slate-700 mb-4">
                Pokud váš charterový let má zpoždění <strong>3+ hodiny</strong> nebo je zrušen bez předchozího upozornění (méně než 14 dní před odletem), máte nárok na <strong>kompenzaci až 600 €</strong> — a to <strong>i v případě</strong>, že cestovní kancelář nabízí náhradní let nebo slevu z balíčku. Jsou to dva <strong>nezávislé nároky</strong>: kompenzace od letecké společnosti + sleva od CK.
              </p>
              <p className="text-lg leading-relaxed text-slate-700">
                <strong>Problém:</strong> Charterové společnosti (Smartwings, Travel Service, Enter Air) často <strong>odmítají</strong> vyplatit kompenzaci s argumenty: "to byla mimořádná okolnost", "technická závada byla nepředvídatelná" nebo "reklamujte u cestovní kanceláře". V 90 % případů jde o <strong>neplatné výmluvy</strong> — tento článek vysvětluje, jak na takové situace reagovat a jak si vynutit vyplacení kompenzace.
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
                <strong>Příklad:</strong> Charterový let Praha–Hurghada (Egypt) = ~2 900 km → kompenzace <strong className="text-blue-600">400 €</strong> při zpoždění 3+ hodiny.
              </p>
            </div>
          </div>

          {/* Section 1 */}
          <section className="mb-12">
            <div className="bg-white rounded-2xl shadow-sm border border-slate-200 p-8">
              <div className="flex items-start gap-4 mb-6">
                <div className="p-3 bg-blue-50 rounded-xl">
                  <Shield className="w-6 h-6 text-blue-600" />
                </div>
                <div className="flex-1">
                  <h2 className="text-3xl font-bold text-slate-900 mb-4">
                    Charterový let = stejná práva jako pravidelná linka
                  </h2>
                </div>
              </div>
              
              <div className="prose prose-lg max-w-none text-slate-700">
                <p className="mb-4">
                  <strong>Nařízení ES 261/2004</strong> rozlišuje pouze <strong>komerční</strong> a <strong>nekomerční</strong> lety. Charterový let je plně komerční — proto má <strong>stejná práva</strong> jako pravidelná linka.
                </p>

                <div className="bg-green-50 border-l-4 border-green-600 rounded-r-xl p-6 my-6">
                  <h3 className="text-xl font-bold text-slate-900 mb-3 mt-0">✅ ES 261/2004 platí pro:</h3>
                  <ul className="space-y-2 mb-0">
                    <li className="flex items-start gap-3">
                      <CheckCircle className="w-5 h-5 text-green-600 mt-1 flex-shrink-0" />
                      <span><strong>Charterové lety all-inclusive:</strong> Praha–Hurghada (Smartwings), Brno–Antalya (Travel Service)</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <CheckCircle className="w-5 h-5 text-green-600 mt-1 flex-shrink-0" />
                      <span><strong>Pravidelné linky:</strong> Praha–Londýn (Ryanair), Vídeň–Barcelona (Wizz Air)</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <CheckCircle className="w-5 h-5 text-green-600 mt-1 flex-shrink-0" />
                      <span><strong>Low-cost lety:</strong> EasyJet, Ryanair, Wizz Air, Eurowings</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <CheckCircle className="w-5 h-5 text-green-600 mt-1 flex-shrink-0" />
                      <span><strong>Prémiové lety:</strong> Lufthansa Business Class, Emirates First Class</span>
                    </li>
                  </ul>
                </div>

                <p className="mb-4">
                  <strong>Klíčový princip:</strong> Pokud let <strong>vychází z letiště v EU</strong> (Praha, Brno, Vídeň, Katowice atd.), ES 261/2004 platí <strong>bez ohledu na cílovou destinaci</strong>. To znamená, že charterový let Praha–Tunisko je chráněn stejně jako pravidelná linka Praha–Paříž.
                </p>

                <div className="bg-red-50 border-l-4 border-red-600 rounded-r-xl p-6 my-6">
                  <h3 className="text-lg font-bold text-slate-900 mb-2 mt-0">❌ ES 261/2004 NEPLATÍ pro:</h3>
                  <ul className="space-y-2 mb-0">
                    <li className="flex items-start gap-3">
                      <XCircle className="w-5 h-5 text-red-600 mt-1 flex-shrink-0" />
                      <span><strong>Soukromé lety:</strong> Business jet, air taxi (nekomerční provoz)</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <XCircle className="w-5 h-5 text-red-600 mt-1 flex-shrink-0" />
                      <span><strong>Vojenské lety:</strong> Přeprava vojáků, humanitární mise</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <XCircle className="w-5 h-5 text-red-600 mt-1 flex-shrink-0" />
                      <span><strong>Lety zdarma:</strong> Zaměstnanecké benefity, promo akce s nulovou cenou letenky</span>
                    </li>
                  </ul>
                </div>

                <p className="mb-0">
                  <strong>Závěr:</strong> Pokud jste zaplatili za charterový let (i jako součást balíčku od CK), máte <strong>plná práva</strong> podle ES 261/2004. Argumenty typu "to byl charter, ne pravidelná linka" jsou <strong>neplatné</strong>.
                </p>
              </div>
            </div>
          </section>

          {/* Section 2 */}
          <section className="mb-12">
            <div className="bg-white rounded-2xl shadow-sm border border-slate-200 p-8">
              <div className="flex items-start gap-4 mb-6">
                <div className="p-3 bg-blue-50 rounded-xl">
                  <Users className="w-6 h-6 text-blue-600" />
                </div>
                <div className="flex-1">
                  <h2 className="text-3xl font-bold text-slate-900 mb-4">
                    Kdo je odpovědný — aerolinka nebo cestovní kancelář?
                  </h2>
                </div>
              </div>
              
              <div className="prose prose-lg max-w-none text-slate-700">
                <p className="mb-4">
                  Podle <strong>článku 3 odst. 5 ES 261/2004</strong> je odpovědná za kompenzaci vždy <strong>provozující letecká společnost</strong> (operating air carrier). Cestovní kancelář je pouze <strong>zprostředkovatel</strong> — nemá žádnou odpovědnost za zpoždění nebo zrušení letu.
                </p>

                <div className="bg-slate-50 rounded-xl p-6 mb-6">
                  <h3 className="text-xl font-bold text-slate-900 mb-3 mt-0">📋 Krok za krokem: Kdo je odpovědný?</h3>
                  <ul className="space-y-3 mb-0">
                    <li className="flex items-start gap-3">
                      <div className="w-6 h-6 bg-blue-600 text-white rounded-full flex items-center justify-center flex-shrink-0 mt-1 text-sm font-bold">1</div>
                      <div>
                        <strong className="text-slate-900">Zjistěte provozující společnost:</strong> Zkontrolujte palubní vstupenku — IATA kód (např. QS = Smartwings, TVS = Travel Service)
                      </div>
                    </li>
                    <li className="flex items-start gap-3">
                      <div className="w-6 h-6 bg-blue-600 text-white rounded-full flex items-center justify-center flex-shrink-0 mt-1 text-sm font-bold">2</div>
                      <div>
                        <strong className="text-slate-900">Podejte reklamaci u aerolinie:</strong> NIKDY u cestovní kanceláře (CK nemá právo vyplácet kompenzace)
                      </div>
                    </li>
                    <li className="flex items-start gap-3">
                      <div className="w-6 h-6 bg-blue-600 text-white rounded-full flex items-center justify-center flex-shrink-0 mt-1 text-sm font-bold">3</div>
                      <div>
                        <strong className="text-slate-900">Argumentujte ES 261/2004:</strong> Odkažte na konkrétní články nařízení (viz. vzor reklamace níže)
                      </div>
                    </li>
                  </ul>
                </div>

                <p className="mb-4">
                  <strong>Dvě nezávislá práva:</strong>
                </p>

                <div className="bg-blue-50 rounded-xl p-6 mb-6">
                  <h3 className="text-lg font-bold text-slate-900 mb-3 mt-0">💰 Dvojí nárok při charterovém letu:</h3>
                  <div className="space-y-4">
                    <div className="flex items-start gap-4">
                      <div className="w-8 h-8 bg-blue-600 text-white rounded-full flex items-center justify-center flex-shrink-0 font-bold">1</div>
                      <div>
                        <strong className="text-slate-900 block mb-1">Kompenzace od letecké společnosti (ES 261/2004):</strong>
                        <p className="text-slate-700 mb-0">250–600 € za zpoždění/zrušení letu — bez ohledu na to, zda kupujete letenku samostatně nebo jako součást balíčku</p>
                      </div>
                    </div>
                    <div className="flex items-start gap-4">
                      <div className="w-8 h-8 bg-blue-600 text-white rounded-full flex items-center justify-center flex-shrink-0 font-bold">2</div>
                      <div>
                        <strong className="text-slate-900 block mb-1">Sleva z balíčku od CK (§ 2534 občanského zákoníku):</strong>
                        <p className="text-slate-700 mb-0">Pokud se zkrátí dovolená (pozdní přílet = méně dní na pláži), můžete požadovat slevu z celkového balíčku (obvykle 5–20 %)</p>
                      </div>
                    </div>
                  </div>
                  <p className="text-sm text-slate-600 mt-4 mb-0 font-semibold">
                    ✅ Jsou to <strong>dva nezávislé nároky</strong> — můžete uplatnit oba současně!
                  </p>
                </div>

                <p className="mb-0">
                  <strong>Praktický tip:</strong> Pokud CK tvrdí "reklamujte u nás, my to vyřešíme s aerolinkou", <strong>NEsouhlaste</strong>. CK nemá právní postavení k vyjednávání kompenzace — pouze vy jako cestující máte nárok podle ES 261/2004. Podejte reklamaci přímo u letecké společnosti.
                </p>
              </div>
            </div>
          </section>

          {/* Section 3 */}
          <section className="mb-12">
            <div className="bg-white rounded-2xl shadow-sm border border-slate-200 p-8">
              <div className="flex items-start gap-4 mb-6">
                <div className="p-3 bg-blue-50 rounded-xl">
                  <AlertTriangle className="w-6 h-6 text-blue-600" />
                </div>
                <div className="flex-1">
                  <h2 className="text-3xl font-bold text-slate-900 mb-4">
                    Časté triky charterových společností
                  </h2>
                </div>
              </div>
              
              <div className="prose prose-lg max-w-none text-slate-700">
                <p className="mb-4">
                  Charterové společnosti (Smartwings, Travel Service, Enter Air) často používají stejné <strong>výmluvy</strong> jako běžné aerolinie — ale s větší frekvencí, protože cestující si myslí, že "chartery mají jiná pravidla".
                </p>

                <div className="bg-amber-50 border-l-4 border-amber-600 rounded-r-xl p-6 my-6">
                  <h3 className="text-xl font-bold text-slate-900 mb-3 mt-0">⚠️ TOP 5 triků a jak na ně reagovat:</h3>
                  <div className="space-y-4">
                    <div>
                      <strong className="text-slate-900 block mb-1">1. "Technická závada byla mimořádná okolnost"</strong>
                      <p className="text-slate-700 mb-0">
                        ❌ <strong>Neplatné:</strong> Podle rozsudku <em>C-549/07 Wallentin-Hermann</em> technické závady NEJSOU mimořádnou okolností, pokud aerolinka měla možnost je předvídat preventivní údržbou. → Argumentujte: "Podle judikatury EU technické závady nezbavují povinnosti vyplatit kompenzaci."
                      </p>
                    </div>
                    <div>
                      <strong className="text-slate-900 block mb-1">2. "To byla součást balíčku, reklamujte u CK"</strong>
                      <p className="text-slate-700 mb-0">
                        ❌ <strong>Neplatné:</strong> ES 261/2004 článek 3 odst. 5 jasně říká, že odpovědná je provozující aerolinka, nikoli zprostředkovatel. → Odpovězte: "Podle ES 261/2004 je odpovědná letecká společnost, CK nemá právní postavení k vyplacení kompenzace."
                      </p>
                    </div>
                    <div>
                      <strong className="text-slate-900 block mb-1">3. "Špatné počasí na letišti v Egyptě/Turecku/Řecku"</strong>
                      <p className="text-slate-700 mb-0">
                        ❌ <strong>Ověřte:</strong> Zkontrolujte METAR zprávy z letiště (OGIMET.com). Pokud jiné lety létaly normálně, počasí nebylo mimořádnou okolností. → Argument: "FlightRadar24 ukazuje, že konkurenční lety operovaly bez problémů — důvodem zpoždění bylo pravděpodobně organizační selhání."
                      </p>
                    </div>
                    <div>
                      <strong className="text-slate-900 block mb-1">4. "Řetězový efekt z předchozího letu"</strong>
                      <p className="text-slate-700 mb-0">
                        ❌ <strong>Neplatné:</strong> Podle ES 261/2004 aerolinka musí mít rezervní letadlo/posádku pro zabránění řetězového zpoždění. → Argument: "Aerolinka má povinnost zajistit kontinuitu provozu — řetězové zpoždění není mimořádnou okolností."
                      </p>
                    </div>
                    <div>
                      <strong className="text-slate-900 block mb-1">5. "Nabízíme voucher místo kompenzace"</strong>
                      <p className="text-slate-700 mb-0">
                        ❌ <strong>NEpřijímejte:</strong> Máte právo na <strong>finanční kompenzaci</strong> podle ES 261/2004. Voucher je pouze nabídka, nikoli povinnost. → Odpovězte: "Požaduji kompenzaci v hotovosti podle ES 261/2004 — voucher odmítám."
                      </p>
                    </div>
                  </div>
                </div>

                <p className="mb-0">
                  <strong>Klíčové pravidlo:</strong> Nikdy nepřijímejte první odmítnutí od charterové společnosti. V 90 % případů jde o <strong>standardní výmluvy</strong> bez právního základu. Pokud aerolinka odmítá vyplatit kompenzaci, kontaktujte <Link href="https://claimwinger.com/cs/zpozdeny-let?utm_source=problemlot&utm_medium=blog&utm_campaign=cs-charter" className="text-blue-600 hover:text-blue-700 font-medium">ClaimWinger</Link> — vyřešíme to za vás (platíte až po výhře).
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
                    Mají cestující na charterovém letu stejná práva jako na pravidelné lince?
                  </h3>
                  <p className="text-slate-700 leading-relaxed mb-0">
                    Ano! Nařízení ES 261/2004 platí pro VŠECHNY komerční lety z EU — bez ohledu na to, zda jde o charterový let nebo pravidelnou linku. Práva na kompenzaci až 600 € jsou identická.
                  </p>
                </div>

                <div className="bg-white rounded-xl p-6 shadow-sm border border-slate-100">
                  <h3 className="text-xl font-bold text-slate-900 mb-3">
                    Kdo je odpovědný za kompenzaci na charterovém letu — aerolinka nebo cestovní kancelář?
                  </h3>
                  <p className="text-slate-700 leading-relaxed mb-0">
                    Vždy provozující letecká společnost. Cestovní kancelář je zprostředkovatel — odpovědnost za let nese aerolinka. Reklamaci podáváte u letecké společnosti (např. Smartwings, Travel Service), nikoli u CK.
                  </p>
                </div>

                <div className="bg-white rounded-xl p-6 shadow-sm border border-slate-100">
                  <h3 className="text-xl font-bold text-slate-900 mb-3">
                    Co když charterový let byl součástí balíčku all-inclusive?
                  </h3>
                  <p className="text-slate-700 leading-relaxed mb-0">
                    Máte nárok na kompenzaci od letecké společnosti + případný nárok na slevu z celkového balíčku od CK (podle § 2534 občanského zákoníku). Jsou to dva nezávislé nároky — kompenzace za let + sleva za zkažený zájezd.
                  </p>
                </div>

                <div className="bg-white rounded-xl p-6 shadow-sm border border-slate-100">
                  <h3 className="text-xl font-bold text-slate-900 mb-3">
                    Platí ES 261/2004 pro charterové lety do Egypta, Tuniska nebo Turecka?
                  </h3>
                  <p className="text-slate-700 leading-relaxed mb-0">
                    Ano, pokud let vychází z letiště v EU (Praha, Brno, Katowice atd.). ES 261/2004 chrání všechny lety odlétající z EU — bez ohledu na cílovou destinaci. Let Praha–Hurghada je chráněn stejně jako Praha–Vídeň.
                  </p>
                </div>

                <div className="bg-white rounded-xl p-6 shadow-sm border border-slate-100">
                  <h3 className="text-xl font-bold text-slate-900 mb-3">
                    Jak dlouho trvá vyplacení kompenzace na charterovém letu?
                  </h3>
                  <p className="text-slate-700 leading-relaxed mb-0">
                    Podle ES 261/2004 musí aerolinka vyplatit kompenzaci do 7 dnů od podání reklamace. V praxi charterové společnosti (Smartwings, Travel Service) platí obvykle do 14–30 dnů. Pokud odmítají — právní vymáhání trvá 3–6 měsíců.
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
                  Byl váš charterový let zpožděn nebo zrušen?
                </h2>
                <p className="text-xl text-blue-100 mb-8">
                  Získejte až <strong className="text-white">600 €</strong> kompenzace — platíte až po výhře
                </p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
                  <a
                    href="https://claimwinger.com/cs/zpozdeny-let?utm_source=problemlot&utm_medium=blog&utm_campaign=cs-charter"
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
                  href="/cs/blog/smartwings-prava-cestujicich"
                  className="group p-4 rounded-xl border-2 border-slate-200 hover:border-blue-600 transition-colors"
                >
                  <h3 className="font-bold text-slate-900 group-hover:text-blue-600 mb-2">
                    Smartwings — práva cestujících a kompenzace
                  </h3>
                  <p className="text-sm text-slate-600">
                    Jak uplatnit nárok u Smartwings — největší charterové společnosti v ČR
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
              </div>
            </div>
          </section>

        </div>
      </article>
    </Layout>
  );
}