import { Layout } from "@/components/Layout";
import { SEO } from "@/components/SEO";
import Link from "next/link";
import { Users, AlertTriangle, FileText, CheckCircle, Scale, Clock, ArrowRight } from "lucide-react";
import { generateFAQSchema, generateArticleSchema, generateBreadcrumbSchema } from "@/lib/schemaGenerator";

export default function SkupinovaRezervaceHromadnyNarok() {
  const faqSchema = generateFAQSchema([
    {
      question: "Může celá skupina uplatnit společný nárok na kompenzaci?",
      answer: "Ano! Pokud celá skupina cestovala na stejném letu a všichni měli zpoždění 3+ hodiny, každý člen má nárok na kompenzaci 250–600 €. Můžete podat jednu společnou reklamaci s pověřením jednoho člena skupiny jako zástupce."
    },
    {
      question: "Musí každý člen skupiny podat samostatnou reklamaci?",
      answer: "Ne, můžete podat jednu hromadnou reklamaci s plnými mocemi od všech členů skupiny. To urychlí proces a snižuje administrativní zátěž pro aerolinie — často vede k rychlejšímu vyřízení."
    },
    {
      question: "Kolik peněz může dostat skupina za zpoždění letu?",
      answer: "Kompenzace se počítá per osobu: 250–600 € podle vzdálenosti letu. Skupina 10 osob na letu Praha–Barcelona (1 300 km) = 10 × 250 € = 2 500 € celkem. Skupina 20 osob na letu Praha–New York (6 500 km) = 20 × 600 € = 12 000 € celkem."
    },
    {
      question: "Co když aerolinka odmítá vyplatit kompenzaci celé skupině?",
      answer: "Pokud odmítne, můžete podat kolektivní žalobu k soudu nebo využít služby ClaimWinger — vyřídíme hromadný nárok za celou skupinu (platíte až po výhře, provize 25 % z úspěšně vymožené částky)."
    },
    {
      question: "Platí skupinová kompenzace i pro firemní lety?",
      answer: "Ano! ES 261/2004 platí i pro služební cesty — nárok má zaměstnanec (cestující), nikoli zaměstnavatel. Pokud firma zaplatila letenku, zaměstnanec může převést kompenzaci na zaměstnavatele (ale není to povinnost)."
    }
  ]);

  const articleSchema = generateArticleSchema({
    title: "Skupinová rezervace — jak uplatnit hromadný nárok?",
    description: "Zjistěte, jak podat společnou reklamaci za celou skupinu a získat kompenzaci až 600 € per osobu za zpoždění nebo zrušení letu podle ES 261/2004.",
    url: "https://problemlot.pl/cs/blog/skupinova-rezervace-hromadny-narok",
    publishDate: "2025-01-13",
    modifiedDate: "2025-01-13",
    author: "ClaimWinger Legal Team",
    imageUrl: "https://problemlot.pl/og-image.png"
  });

  const breadcrumbSchema = generateBreadcrumbSchema([
    { name: "Domů", url: "https://problemlot.pl/cs" },
    { name: "Blog", url: "https://problemlot.pl/cs/blog" },
    { name: "Skupinová rezervace", url: "https://problemlot.pl/cs/blog/skupinova-rezervace-hromadny-narok" }
  ]);

  return (
    <Layout>
      <SEO
        title="Skupinová rezervace — hromadný nárok na kompenzaci | ProblemLot.pl"
        description="Zjistěte, jak podat společnou reklamaci za celou skupinu a získat kompenzaci až 600 € per osobu za zpoždění nebo zrušení letu podle ES 261/2004."
        url="https://problemlot.pl/cs/blog/skupinova-rezervace-hromadny-narok"
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
                Skupinová rezervace
              </li>
            </ol>
          </div>
        </nav>

        {/* Hero Section */}
        <header className="bg-gradient-to-r from-blue-600 to-blue-700 text-white py-16 sm:py-20">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex items-center gap-3 mb-6">
              <div className="p-3 bg-white/10 backdrop-blur-sm rounded-xl">
                <Users className="w-8 h-8" />
              </div>
              <span className="px-4 py-1.5 bg-white/20 backdrop-blur-sm rounded-full text-sm font-medium">
                Hromadný nárok
              </span>
            </div>
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold mb-6 leading-tight">
              Skupinová rezervace — jak uplatnit hromadný nárok?
            </h1>
            <p className="text-xl sm:text-2xl text-blue-100 leading-relaxed font-light">
              Zjistěte, jak podat společnou reklamaci za celou skupinu a získat kompenzaci až 600 € per osobu
            </p>
          </div>
        </header>

        {/* Main Content */}
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-16">
          
          {/* Introduction */}
          <div className="prose prose-lg max-w-none mb-12">
            <div className="bg-white rounded-2xl shadow-sm border border-slate-200 p-8 mb-8">
              <p className="text-lg leading-relaxed text-slate-700 mb-4">
                Pokud cestujete ve skupině (rodinná dovolená, firemní výlet, svatební hosté) a váš let má zpoždění nebo je zrušen, <strong>každý člen skupiny</strong> má nárok na <strong>kompenzaci až 600 €</strong> podle <Link href="/cs/blog/narizeni-es-261-2004" className="text-blue-600 hover:text-blue-700 font-medium">nařízení ES 261/2004</Link>. To znamená, že celková kompenzace může dosáhnout <strong>desítek tisíc korun</strong> — například skupina 20 osob na dlouhé trase může dostat až <strong>12 000 €</strong> (300 000 Kč).
              </p>
              <p className="text-lg leading-relaxed text-slate-700 mb-4">
                Klíčová výhoda skupinových rezervací: Můžete podat <strong>jednu společnou reklamaci</strong> za celou skupinu, což zrychluje proces a zvyšuje tlak na aerolinie. Většina leteckých společností raději vyplatí kompenzaci rychle, než aby riskovaly soudní spor s desítkami cestujících.
              </p>
              <p className="text-lg leading-relaxed text-slate-700">
                Tento článek vysvětluje, <strong>jak správně podat hromadný nárok</strong>, jaké dokumenty jsou potřeba a jak se vyhnout běžným chybám, které mohou vést k odmítnutí kompenzace. Strategie je založena na právní praxi ClaimWinger — agentury s <strong>98% úspěšností</strong> při vymáhání skupinových nároků.
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
                <strong>Příklad:</strong> Skupina 10 osob — let Praha–Barcelona (1 300 km) → kompenzace <strong className="text-blue-600">10 × 250 € = 2 500 €</strong> (62 500 Kč).
              </p>
            </div>
          </div>

          {/* Section 1 */}
          <section className="mb-12">
            <div className="bg-white rounded-2xl shadow-sm border border-slate-200 p-8">
              <div className="flex items-start gap-4 mb-6">
                <div className="p-3 bg-blue-50 rounded-xl">
                  <FileText className="w-6 h-6 text-blue-600" />
                </div>
                <div className="flex-1">
                  <h2 className="text-3xl font-bold text-slate-900 mb-4">
                    Jak podat hromadný nárok — krok za krokem
                  </h2>
                </div>
              </div>
              
              <div className="prose prose-lg max-w-none text-slate-700">
                <p className="mb-4">
                  Podle <strong>článku 16 odst. 1 ES 261/2004</strong> můžete uplatnit nárok <strong>sami</strong> nebo prostřednictvím <strong>zástupce</strong> (např. jeden člen skupiny s plnou mocí od ostatních). To výrazně zjednodušuje proces.
                </p>

                <div className="bg-slate-50 rounded-xl p-6 mb-6">
                  <h3 className="text-xl font-bold text-slate-900 mb-3 mt-0">📋 Postup podání hromadného nároku:</h3>
                  <ul className="space-y-3 mb-0">
                    <li className="flex items-start gap-3">
                      <div className="w-6 h-6 bg-blue-600 text-white rounded-full flex items-center justify-center flex-shrink-0 mt-1 text-sm font-bold">1</div>
                      <div>
                        <strong className="text-slate-900">Vytvořte seznam cestujících:</strong> Jméno, příjmení, číslo rezervace (booking reference) a číslo letenky každého člena skupiny
                      </div>
                    </li>
                    <li className="flex items-start gap-3">
                      <div className="w-6 h-6 bg-blue-600 text-white rounded-full flex items-center justify-center flex-shrink-0 mt-1 text-sm font-bold">2</div>
                      <div>
                        <strong className="text-slate-900">Zvolte zástupce skupiny:</strong> Jeden člén podepíše reklamaci — ostatní udělí plnou moc (vzor níže)
                      </div>
                    </li>
                    <li className="flex items-start gap-3">
                      <div className="w-6 h-6 bg-blue-600 text-white rounded-full flex items-center justify-center flex-shrink-0 mt-1 text-sm font-bold">3</div>
                      <div>
                        <strong className="text-slate-900">Připojte dokumenty:</strong> Palubní vstupenky VŠECH členů skupiny + potvrzení o zpoždění (letištní razítko nebo e-mail od aerolinky)
                      </div>
                    </li>
                    <li className="flex items-start gap-3">
                      <div className="w-6 h-6 bg-blue-600 text-white rounded-full flex items-center justify-center flex-shrink-0 mt-1 text-sm font-bold">4</div>
                      <div>
                        <strong className="text-slate-900">Vypočítejte celkovou částku:</strong> Počet osob × kompenzace (250/400/600 €) = celková částka
                      </div>
                    </li>
                    <li className="flex items-start gap-3">
                      <div className="w-6 h-6 bg-blue-600 text-white rounded-full flex items-center justify-center flex-shrink-0 mt-1 text-sm font-bold">5</div>
                      <div>
                        <strong className="text-slate-900">Pošlete reklamaci:</strong> E-mail s předmětem "Hromadný nárok na kompenzaci — [číslo letu] — [počet osob] cestujících"
                      </div>
                    </li>
                  </ul>
                </div>

                <p className="mb-4">
                  <strong>Vzor plné moci pro zástupce skupiny:</strong>
                </p>

                <div className="bg-blue-50 rounded-xl p-6 mb-6">
                  <h3 className="text-lg font-bold text-slate-900 mb-3 mt-0">📄 Vzor plné moci (Power of Attorney):</h3>
                  <div className="bg-white rounded-lg p-4 font-mono text-sm text-slate-700">
                    <p className="mb-2">
                      <strong>Plná moc k zastupování v řízení o kompenzaci podle ES 261/2004</strong>
                    </p>
                    <p className="mb-2">
                      Já, níže podepsaný/á <strong>[Jméno Příjmení]</strong>, nar. <strong>[datum]</strong>, bytem <strong>[adresa]</strong>, <strong>zmocňuji</strong> pana/paní <strong>[Jméno Příjmení zástupce]</strong>, bytem <strong>[adresa zástupce]</strong>, k uplatnění nároku na kompenzaci podle nařízení ES 261/2004 za zpoždění/zrušení letu <strong>[číslo letu]</strong> dne <strong>[datum]</strong>.
                    </p>
                    <p className="mb-2">
                      Zmocněnec je oprávněn jednat mým jménem ve všech jednáních s leteckou společností <strong>[název aerolinky]</strong>, přijímat za mě peněžitou kompenzaci a podávat případné žaloby k soudu.
                    </p>
                    <p className="mb-0">
                      V <strong>[město]</strong>, dne <strong>[datum]</strong><br/>
                      <strong>Podpis: _________________</strong>
                    </p>
                  </div>
                  <p className="text-sm text-slate-600 mt-3 mb-0">
                    <strong>Tip:</strong> Plná moc může být naskenovaná nebo digitálně podepsaná — aerolinka nemůže odmítnout elektronický podpis (podle eIDAS Regulation).
                  </p>
                </div>

                <p className="mb-0">
                  <strong>Klíčová výhoda:</strong> Podání jedné hromadné reklamace místo 10–20 individuálních reklamací snižuje administrativní zátěž pro aerolinie — často vede k rychlejšímu vyřízení (obvykle do 14–30 dnů).
                </p>
              </div>
            </div>
          </section>

          {/* Section 2 */}
          <section className="mb-12">
            <div className="bg-white rounded-2xl shadow-sm border border-slate-200 p-8">
              <div className="flex items-start gap-4 mb-6">
                <div className="p-3 bg-blue-50 rounded-xl">
                  <Clock className="w-6 h-6 text-blue-600" />
                </div>
                <div className="flex-1">
                  <h2 className="text-3xl font-bold text-slate-900 mb-4">
                    Kolik peněz může dostat celá skupina?
                  </h2>
                </div>
              </div>
              
              <div className="prose prose-lg max-w-none text-slate-700">
                <p className="mb-4">
                  Kompenzace se počítá <strong>per osobu</strong> — to znamená, že celková částka roste exponenciálně s počtem členů skupiny. Zde jsou reálné příklady z praxe ClaimWinger:
                </p>

                <div className="space-y-4 mb-6">
                  <div className="bg-green-50 border-l-4 border-green-600 rounded-r-xl p-6">
                    <h3 className="text-lg font-bold text-slate-900 mb-2 mt-0">✅ Příklad 1: Rodinná dovolená (4 osoby)</h3>
                    <p className="text-slate-700 mb-2">
                      <strong>Trasa:</strong> Praha–Kréta (Řecko) — 1 700 km<br/>
                      <strong>Zpoždění:</strong> 4 hodiny<br/>
                      <strong>Kompenzace per osobu:</strong> 400 €<br/>
                      <strong>Celková kompenzace:</strong> <span className="text-green-600 font-bold">4 × 400 € = 1 600 €</span> (40 000 Kč)
                    </p>
                    <p className="text-sm text-slate-600 mb-0">
                      <em>Výsledek: Aerolinka (Wizz Air) vyplatila kompenzaci do 21 dnů po podání reklamace.</em>
                    </p>
                  </div>

                  <div className="bg-blue-50 border-l-4 border-blue-600 rounded-r-xl p-6">
                    <h3 className="text-lg font-bold text-slate-900 mb-2 mt-0">💼 Příklad 2: Firemní delegace (12 osob)</h3>
                    <p className="text-slate-700 mb-2">
                      <strong>Trasa:</strong> Vídeň–Londýn — 1 250 km<br/>
                      <strong>Zrušení:</strong> 6 hodin před odletem<br/>
                      <strong>Kompenzace per osobu:</strong> 250 €<br/>
                      <strong>Celková kompenzace:</strong> <span className="text-blue-600 font-bold">12 × 250 € = 3 000 €</span> (75 000 Kč)
                    </p>
                    <p className="text-sm text-slate-600 mb-0">
                      <em>Výsledek: Firma podala hromadnou reklamaci — Ryanair vyplatil kompenzaci do 14 dnů.</em>
                    </p>
                  </div>

                  <div className="bg-amber-50 border-l-4 border-amber-600 rounded-r-xl p-6">
                    <h3 className="text-lg font-bold text-slate-900 mb-2 mt-0">🎉 Příklad 3: Svatební skupina (25 osob)</h3>
                    <p className="text-slate-700 mb-2">
                      <strong>Trasa:</strong> Praha–New York — 6 600 km<br/>
                      <strong>Zpoždění:</strong> 5 hodin<br/>
                      <strong>Kompenzace per osobu:</strong> 600 €<br/>
                      <strong>Celková kompenzace:</strong> <span className="text-amber-600 font-bold">25 × 600 € = 15 000 €</span> (375 000 Kč!)
                    </p>
                    <p className="text-sm text-slate-600 mb-0">
                      <em>Výsledek: Soudní spor trval 4 měsíce — soud přiznal plnou kompenzaci + úroky z prodlení.</em>
                    </p>
                  </div>
                </div>

                <p className="mb-4">
                  <strong>Kalkulačka skupinové kompenzace:</strong>
                </p>

                <div className="bg-slate-50 rounded-xl p-6 mb-6">
                  <table className="w-full text-sm">
                    <thead>
                      <tr className="border-b-2 border-slate-300">
                        <th className="text-left py-2 px-3 font-semibold text-slate-700">Počet osob</th>
                        <th className="text-left py-2 px-3 font-semibold text-slate-700">Krátký let (250 €)</th>
                        <th className="text-left py-2 px-3 font-semibold text-slate-700">Střední let (400 €)</th>
                        <th className="text-left py-2 px-3 font-semibold text-slate-700">Dlouhý let (600 €)</th>
                      </tr>
                    </thead>
                    <tbody className="text-slate-600">
                      <tr className="border-b border-slate-200">
                        <td className="py-2 px-3">5</td>
                        <td className="py-2 px-3 font-bold text-blue-600">1 250 €</td>
                        <td className="py-2 px-3 font-bold text-blue-600">2 000 €</td>
                        <td className="py-2 px-3 font-bold text-blue-600">3 000 €</td>
                      </tr>
                      <tr className="border-b border-slate-200">
                        <td className="py-2 px-3">10</td>
                        <td className="py-2 px-3 font-bold text-blue-600">2 500 €</td>
                        <td className="py-2 px-3 font-bold text-blue-600">4 000 €</td>
                        <td className="py-2 px-3 font-bold text-blue-600">6 000 €</td>
                      </tr>
                      <tr className="border-b border-slate-200">
                        <td className="py-2 px-3">20</td>
                        <td className="py-2 px-3 font-bold text-blue-600">5 000 €</td>
                        <td className="py-2 px-3 font-bold text-blue-600">8 000 €</td>
                        <td className="py-2 px-3 font-bold text-blue-600">12 000 €</td>
                      </tr>
                      <tr>
                        <td className="py-2 px-3">50</td>
                        <td className="py-2 px-3 font-bold text-blue-600">12 500 €</td>
                        <td className="py-2 px-3 font-bold text-blue-600">20 000 €</td>
                        <td className="py-2 px-3 font-bold text-blue-600">30 000 €</td>
                      </tr>
                    </tbody>
                  </table>
                </div>

                <p className="mb-0">
                  <strong>Praktický tip:</strong> Pokud je celková částka vysoká (nad 10 000 €), aerolinka pravděpodobně bude odmítat vyplatit dobrovolně → doporučujeme využít ClaimWinger, který má zkušenosti s kolektivními žalobami a dosahuje <strong>98% úspěšnosti</strong>.
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
                    Časté chyby při hromadných nárocích
                  </h2>
                </div>
              </div>
              
              <div className="prose prose-lg max-w-none text-slate-700">
                <p className="mb-4">
                  Skupinové nároky mají specifické nároky — pokud uděláte chybu, aerolinka může odmítat celý nárok. Zde jsou nejčastější chyby a jak se jim vyhnout:
                </p>

                <div className="space-y-4">
                  <div className="bg-red-50 border-l-4 border-red-600 rounded-r-xl p-6">
                    <h3 className="text-lg font-bold text-slate-900 mb-2 mt-0">❌ Chyba 1: Neúplný seznam cestujících</h3>
                    <p className="text-slate-700 mb-2">
                      <strong>Problém:</strong> Zapomenete na jedno jméno nebo číslo rezervace → aerolinka odmítne celý nárok s argumentem "neúplné podklady".
                    </p>
                    <p className="text-green-700 font-semibold mb-0">
                      ✅ <strong>Řešení:</strong> Vytvořte Excel tabulku s ALL členové skupiny — Name, Surname, Booking Reference, Ticket Number. Třikrát zkontrolujte před odesláním.
                    </p>
                  </div>

                  <div className="bg-red-50 border-l-4 border-red-600 rounded-r-xl p-6">
                    <h3 className="text-lg font-bold text-slate-900 mb-2 mt-0">❌ Chyba 2: Chybějící plné moci</h3>
                    <p className="text-slate-700 mb-2">
                      <strong>Problém:</strong> Podáte reklamaci za celou skupinu, ale nepřipojíte plné moci od ostatních členů → aerolinka odmítne s odůvodněním "nemáte právo zastupovat ostatní".
                    </p>
                    <p className="text-green-700 font-semibold mb-0">
                      ✅ <strong>Řešení:</strong> KAŽDÝ člen skupiny (kromě zástupce) musí podepsat plnou moc. Připojte všechny plné moci jako jeden PDF soubor.
                    </p>
                  </div>

                  <div className="bg-red-50 border-l-4 border-red-600 rounded-r-xl p-6">
                    <h3 className="text-lg font-bold text-slate-900 mb-2 mt-0">❌ Chyba 3: Různé bankovní účty</h3>
                    <p className="text-slate-700 mb-2">
                      <strong>Problém:</strong> Požadujete kompenzaci na různé bankovní účty (každý člen skupiny dává svůj účet) → aerolinka odmítá s argumentem "administrativní náročnost".
                    </p>
                    <p className="text-green-700 font-semibold mb-0">
                      ✅ <strong>Řešení:</strong> Uveďte JEDEN bankovní účet zástupce skupiny — poté rozdělte peníze mezi členy skupiny interně. To urychlí vyplacení.
                    </p>
                  </div>

                  <div className="bg-red-50 border-l-4 border-red-600 rounded-r-xl p-6">
                    <h3 className="text-lg font-bold text-slate-900 mb-2 mt-0">❌ Chyba 4: Podání více samostatných reklamací</h3>
                    <p className="text-slate-700 mb-2">
                      <strong>Problém:</strong> Každý člen skupiny podá samostatnou reklamaci → aerolinka zpracovává každou zvlášť (trvá měsíce) nebo je částečně odmítá s různými důvody.
                    </p>
                    <p className="text-green-700 font-semibold mb-0">
                      ✅ <strong>Řešení:</strong> Podejte JEDNU hromadnou reklamaci se seznamem všech cestujících. To zvyšuje tlak na aerolinie a zrychluje proces.
                    </p>
                  </div>
                </div>

                <p className="mt-6 mb-0">
                  <strong>Doporučení:</strong> Pokud máte skupinu 10+ osob, zvažte využití ClaimWinger — vyřídíme celý proces včetně plných mocí, komunikace s aerolinkou a případné žaloby. Platíte až po výhře (provize 25 % z úspěšně vymožené částky).
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
                    Může celá skupina uplatnit společný nárok na kompenzaci?
                  </h3>
                  <p className="text-slate-700 leading-relaxed mb-0">
                    Ano! Pokud celá skupina cestovala na stejném letu a všichni měli zpoždění 3+ hodiny, každý člen má nárok na kompenzaci 250–600 €. Můžete podat jednu společnou reklamaci s pověřením jednoho člena skupiny jako zástupce.
                  </p>
                </div>

                <div className="bg-white rounded-xl p-6 shadow-sm border border-slate-100">
                  <h3 className="text-xl font-bold text-slate-900 mb-3">
                    Musí každý člen skupiny podat samostatnou reklamaci?
                  </h3>
                  <p className="text-slate-700 leading-relaxed mb-0">
                    Ne, můžete podat jednu hromadnou reklamaci s plnými mocemi od všech členů skupiny. To urychlí proces a snižuje administrativní zátěž pro aerolinie — často vede k rychlejšímu vyřízení.
                  </p>
                </div>

                <div className="bg-white rounded-xl p-6 shadow-sm border border-slate-100">
                  <h3 className="text-xl font-bold text-slate-900 mb-3">
                    Kolik peněz může dostat skupina za zpoždění letu?
                  </h3>
                  <p className="text-slate-700 leading-relaxed mb-0">
                    Kompenzace se počítá per osobu: 250–600 € podle vzdálenosti letu. Skupina 10 osob na letu Praha–Barcelona (1 300 km) = 10 × 250 € = 2 500 € celkem. Skupina 20 osob na letu Praha–New York (6 500 km) = 20 × 600 € = 12 000 € celkem.
                  </p>
                </div>

                <div className="bg-white rounded-xl p-6 shadow-sm border border-slate-100">
                  <h3 className="text-xl font-bold text-slate-900 mb-3">
                    Co když aerolinka odmítá vyplatit kompenzaci celé skupině?
                  </h3>
                  <p className="text-slate-700 leading-relaxed mb-0">
                    Pokud odmítne, můžete podat kolektivní žalobu k soudu nebo využít služby ClaimWinger — vyřídíme hromadný nárok za celou skupinu (platíte až po výhře, provize 25 % z úspěšně vymožené částky).
                  </p>
                </div>

                <div className="bg-white rounded-xl p-6 shadow-sm border border-slate-100">
                  <h3 className="text-xl font-bold text-slate-900 mb-3">
                    Platí skupinová kompenzace i pro firemní lety?
                  </h3>
                  <p className="text-slate-700 leading-relaxed mb-0">
                    Ano! ES 261/2004 platí i pro služební cesty — nárok má zaměstnanec (cestující), nikoli zaměstnavatel. Pokud firma zaplatila letenku, zaměstnanec může převést kompenzaci na zaměstnavatele (ale není to povinnost).
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
                  Měla vaše skupina zpoždění nebo zrušení letu?
                </h2>
                <p className="text-xl text-blue-100 mb-8">
                  Získejte až <strong className="text-white">600 € per osobu</strong> — vyřídíme hromadný nárok za celou skupinu
                </p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
                  <a
                    href="https://claimwinger.com/cs/zpozdeny-let?utm_source=problemlot&utm_medium=blog&utm_campaign=cs-skupina"
                    className="inline-flex items-center gap-2 bg-white text-blue-600 px-8 py-4 rounded-xl font-bold text-lg hover:bg-blue-50 transition-all shadow-lg hover:shadow-xl hover:scale-105"
                  >
                    Zkontrolovat nárok zdarma
                    <ArrowRight className="w-5 h-5" />
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
                  href="/cs/blog/charterovy-let-kompenzace-prava"
                  className="group p-4 rounded-xl border-2 border-slate-200 hover:border-blue-600 transition-colors"
                >
                  <h3 className="font-bold text-slate-900 group-hover:text-blue-600 mb-2">
                    Charterový let a kompenzace — stejná práva?
                  </h3>
                  <p className="text-sm text-slate-600">
                    Zjistěte, zda máte nárok na kompenzaci za zpoždění nebo zrušení charterového letu
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
