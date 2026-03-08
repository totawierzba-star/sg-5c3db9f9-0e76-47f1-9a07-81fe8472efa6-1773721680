import { LayoutCs } from "@/components/LayoutCs";
import { SEO } from "@/components/SEO";
import Link from "next/link";
import { Plane, AlertTriangle, Euro, FileText, CheckCircle, ArrowRight, Briefcase } from "lucide-react";

export default function WetLeaseKompenzace() {
  return (
    <LayoutCs>
      <SEO 
        title="Wet Lease (ACMI) — kdo platí kompenzaci při pronajatém letadle?"
        description="Zjistěte, kdo nese odpovědnost za kompenzaci €250-600 při wet lease (ACMI) letu. Průvodce pro české cestující 2026."
      />
      
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "FAQPage",
            "mainEntity": [
              {
                "@type": "Question",
                "name": "Co je wet lease (ACMI) v letectví?",
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": "Wet lease (ACMI) znamená, že aerolinka si pronajímá celé letadlo VČETNĚ posádky, údržby a pojištění od jiné aerolinie. Pasažér často neví, že létá v pronajatém letadle. Příklad: Ryanair si pronajme letadlo od Smartwings včetně pilotů."
                }
              },
              {
                "@type": "Question",
                "name": "Kdo platí kompenzaci při wet lease letu?",
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": "Kompenzaci platí aerolinka, která PRODALA letenku a kterou jste si vybrali (contracting carrier), NIKOLI vlastník letadla (lessor). Například: koupili jste u Ryanair, létáte v letadle Smartwings → Ryanair platí kompenzaci."
                }
              },
              {
                "@type": "Question",
                "name": "Jak poznat, že létám v wet lease letadle?",
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": "Často se to nedozvíte! Wet lease je neviditelný pro pasažéry. Ale pokud vidíte: jiné logo na letadle, jiné uniformy posádky, nebo poznámku 'operated by' s jinou aerolínkou — může jít o wet lease."
                }
              }
            ]
          })
        }}
      />

      <article className="max-w-4xl mx-auto px-4 py-8">
        <div className="mb-8">
          <Link href="/cs/blog" className="text-blue-600 hover:text-blue-800 text-sm font-medium inline-flex items-center gap-2">
            ← Zpět na blog
          </Link>
        </div>

        <header className="mb-8">
          <div className="flex items-center gap-3 mb-4">
            <Briefcase className="w-10 h-10 text-purple-600" />
            <span className="bg-purple-100 text-purple-800 px-3 py-1 rounded-full text-sm font-semibold">
              Wet Lease / ACMI
            </span>
          </div>
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Wet Lease (ACMI) — kdo platí kompenzaci při pronajatém letadle?
          </h1>
          <div className="flex items-center text-gray-600 text-sm gap-4">
            <time dateTime="2026-03-08">8. března 2026</time>
            <span>•</span>
            <span>13 min čtení</span>
          </div>
        </header>

        <div className="prose prose-lg max-w-none">
          <p className="text-xl text-gray-700 leading-relaxed mb-6">
            <strong>Létali jste v pronajatém letadle (wet lease/ACMI)?</strong> Kompenzaci <strong>€250-600</strong> podle EU261 platí aerolinka, u které jste si <strong>koupili letenku</strong>, NIKOLI vlastník letadla. Zjistěte, jak funguje wet lease, kdo nese odpovědnost a jak efektivně vymáhat kompenzaci.
          </p>

          <div className="bg-blue-50 border-l-4 border-blue-600 p-6 my-8 rounded-r-lg">
            <div className="flex items-start gap-4">
              <Euro className="w-6 h-6 text-blue-600 flex-shrink-0 mt-1" />
              <div>
                <p className="text-lg font-semibold text-gray-900 mb-3">
                  💡 Wet lease let zpožděný? Nevíte, kdo zodpovídá?
                </p>
                <p className="text-gray-700 mb-4">
                  ClaimWinger automaticky identifikuje správnou odpovědnou aerolínku (contracting carrier) a vymáhá kompenzaci přímo od ní. Nemusíte řešit složité lease dohody — vyřídíme vše za vás. Platíte jen při úspěchu.
                </p>
                <Link 
                  href="https://claimwinger.com/cs/zpozdeny-let"
                  className="inline-flex items-center gap-2 bg-blue-600 text-white px-6 py-3 rounded-lg font-semibold hover:bg-blue-700 transition-colors"
                >
                  Vymáhat kompenzaci za wet lease let
                  <ArrowRight className="w-5 h-5" />
                </Link>
              </div>
            </div>
          </div>

          <h2 className="text-3xl font-bold text-gray-900 mt-12 mb-6 flex items-center gap-3">
            <CheckCircle className="w-8 h-8 text-blue-600" />
            Co je wet lease (ACMI) a jak funguje?
          </h2>

          <div className="bg-gray-50 p-6 rounded-lg my-6">
            <h3 className="text-xl font-bold text-gray-900 mb-4">🔑 Definice:</h3>
            <p className="text-gray-700 mb-4">
              <strong>Wet lease (ACMI)</strong> je dohoda, kdy aerolinka si pronajímá od jiné aerolinie:
            </p>
            
            <div className="grid md:grid-cols-2 gap-4 mb-4">
              <div className="bg-white border border-gray-200 rounded-lg p-4">
                <p className="font-semibold text-gray-900 mb-2">✅ ACMI znamená:</p>
                <ul className="text-sm text-gray-700 space-y-1">
                  <li>• <strong>A</strong>ircraft (letadlo)</li>
                  <li>• <strong>C</strong>rew (posádka)</li>
                  <li>• <strong>M</strong>aintenance (údržba)</li>
                  <li>• <strong>I</strong>nsurance (pojištění)</li>
                </ul>
              </div>
              <div className="bg-white border border-gray-200 rounded-lg p-4">
                <p className="font-semibold text-gray-900 mb-2">🔄 Oproti codeshare:</p>
                <ul className="text-sm text-gray-700 space-y-1">
                  <li>• Wet lease: pronájem FYZICKÉHO letadla</li>
                  <li>• Codeshare: sdílení KÓDU letu</li>
                  <li>• Wet lease: neviditelný pro pasažéry</li>
                  <li>• Codeshare: viditelný (2 kódy letu)</li>
                </ul>
              </div>
            </div>

            <div className="bg-blue-100 border-l-4 border-blue-600 p-4 rounded-r mt-4">
              <p className="text-sm text-gray-700">
                <strong>⚠️ Klíčové:</strong> Pasažér OBVYKLE NEVÍ, že létá v wet lease letadle. Letenka ukazuje pouze aerolínku, u které jste koupili (contracting carrier).
              </p>
            </div>
          </div>

          <h2 className="text-3xl font-bold text-gray-900 mt-12 mb-6">
            Kdo platí kompenzaci při wet lease?
          </h2>

          <div className="overflow-x-auto my-6 rounded-lg border border-gray-200">
            <table className="min-w-full bg-white">
              <thead className="bg-gray-100">
                <tr>
                  <th className="px-6 py-4 border-b text-left font-semibold text-gray-900">Aerolinka</th>
                  <th className="px-6 py-4 border-b text-left font-semibold text-gray-900">Role</th>
                  <th className="px-6 py-4 border-b text-left font-semibold text-gray-900">Zodpovědnost za kompenzaci</th>
                </tr>
              </thead>
              <tbody>
                <tr className="border-b hover:bg-gray-50">
                  <td className="px-6 py-4">
                    <strong>Contracting carrier</strong>
                  </td>
                  <td className="px-6 py-4">
                    Prodala letenku, máte s ní smlouvu
                  </td>
                  <td className="px-6 py-4">
                    <span className="text-green-600 font-semibold">✅ PLATÍ kompenzaci</span>
                  </td>
                </tr>
                <tr className="hover:bg-gray-50">
                  <td className="px-6 py-4">
                    <strong>Lessor (vlastník letadla)</strong>
                  </td>
                  <td className="px-6 py-4">
                    Pronajala letadlo + posádku + údržbu
                  </td>
                  <td className="px-6 py-4">
                    <span className="text-red-600 font-semibold">❌ NEPLATÍ kompenzaci</span>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>

          <p className="text-sm text-gray-600 italic">
            *Podle EU261 Článek 3(5): Contracting carrier (prodávající aerolinka) nese plnou odpovědnost za kompenzaci, i když skutečně provozovala let jiná aerolinka (lessor).
          </p>

          <h2 className="text-3xl font-bold text-gray-900 mt-12 mb-6 flex items-center gap-3">
            <FileText className="w-8 h-8 text-blue-600" />
            Právní odpovědnost podle EU261
          </h2>

          <div className="bg-gray-50 p-6 rounded-lg my-6">
            <h3 className="text-xl font-bold text-gray-900 mb-4">📜 Článek 3(5) EU 261/2004:</h3>
            <blockquote className="border-l-4 border-blue-600 pl-6 py-2 italic text-gray-700 mb-4">
              "Pokud contracting carrier (prodávající aerolinka) uzavřela wet lease dohodu s lessor (vlastník letadla), <strong>contracting carrier nese plnou odpovědnost</strong> za kompenzaci vůči pasažérům."
            </blockquote>
            
            <div className="bg-white border border-gray-200 rounded-lg p-4 mt-4">
              <p className="font-semibold text-gray-900 mb-2">🔍 Důvod:</p>
              <p className="text-gray-700">
                Pasažér má smlouvu s contracting carrier (kde koupil letenku). Wet lease dohoda je <strong>interne mezi aeroliniemi</strong> a pasažér ji nevidí → nemůže nést následky této dohody.
              </p>
            </div>
          </div>

          <h2 className="text-3xl font-bold text-gray-900 mt-12 mb-6">
            Praktické příklady wet lease kompenzací
          </h2>

          <div className="space-y-4 my-6">
            <div className="bg-white border border-gray-200 rounded-lg p-6">
              <h3 className="text-xl font-bold text-gray-900 mb-3">
                Příklad 1: Ryanair pronajímá letadlo od Smartwings
              </h3>
              <ul className="text-gray-700 space-y-2">
                <li><strong>Letenka:</strong> Ryanair FR123 (Praha → Alicante)</li>
                <li><strong>Skutečné letadlo:</strong> Smartwings Boeing 737 (wet lease)</li>
                <li><strong>Zpoždění:</strong> 4 hodiny</li>
                <li><strong>Kdo platí?</strong> <span className="text-green-600 font-bold">Ryanair</span> (contracting carrier, prodala letenku)</li>
                <li><strong>Kompenzace:</strong> €400 (vzdálenost 1500-3500 km)</li>
              </ul>
            </div>

            <div className="bg-white border border-gray-200 rounded-lg p-6">
              <h3 className="text-xl font-bold text-gray-900 mb-3">
                Příklad 2: Wizz Air pronajímá letadlo od Maleth Aero
              </h3>
              <ul className="text-gray-700 space-y-2">
                <li><strong>Letenka:</strong> Wizz Air W6456 (Budapešť → Londýn)</li>
                <li><strong>Skutečné letadlo:</strong> Maleth Aero Airbus A320 (wet lease)</li>
                <li><strong>Zrušení:</strong> Let zrušen 2 dny před odletem</li>
                <li><strong>Kdo platí?</strong> <span className="text-green-600 font-bold">Wizz Air</span> (contracting carrier)</li>
                <li><strong>Kompenzace:</strong> €250 (vzdálenost &lt;1500 km)</li>
              </ul>
            </div>

            <div className="bg-white border border-gray-200 rounded-lg p-6">
              <h3 className="text-xl font-bold text-gray-900 mb-3">
                Příklad 3: ČSA pronajímá letadlo od SmartWings (sezónní provoz)
              </h3>
              <ul className="text-gray-700 space-y-2">
                <li><strong>Letenka:</strong> ČSA OK789 (Praha → New York)</li>
                <li><strong>Skutečné letadlo:</strong> SmartWings Boeing 737 MAX (wet lease)</li>
                <li><strong>Zpoždění:</strong> 6 hodin</li>
                <li><strong>Kdo platí?</strong> <span className="text-green-600 font-bold">ČSA</span> (contracting carrier)</li>
                <li><strong>Kompenzace:</strong> €600 (vzdálenost &gt;3500 km, zpoždění &gt;4h)</li>
              </ul>
            </div>
          </div>

          <h2 className="text-3xl font-bold text-gray-900 mt-12 mb-6">
            Jak poznat wet lease let?
          </h2>

          <div className="bg-gray-50 p-6 rounded-lg my-6">
            <h3 className="text-xl font-bold text-gray-900 mb-4">🔍 Indikátory wet lease:</h3>
            <ol className="space-y-4">
              <li className="flex items-start gap-3">
                <span className="flex-shrink-0 w-8 h-8 bg-purple-600 text-white rounded-full flex items-center justify-center font-bold">1</span>
                <div>
                  <strong className="text-gray-900">Jiné logo na letadle</strong>
                  <p className="text-gray-700 mt-2">
                    Pokud vidíte na letadle logo JINÉ aerolinie než na vaší letence, jde pravděpodobně o wet lease.
                  </p>
                </div>
              </li>
              <li className="flex items-start gap-3">
                <span className="flex-shrink-0 w-8 h-8 bg-purple-600 text-white rounded-full flex items-center justify-center font-bold">2</span>
                <div>
                  <strong className="text-gray-900">Jiné uniformy posádky</strong>
                  <p className="text-gray-700 mt-2">
                    Pokud posádka nosí uniformy JINÉ aerolinie, jde o wet lease. Například: koupili jste u Ryanair, ale posádka má uniformy Smartwings.
                  </p>
                </div>
              </li>
              <li className="flex items-start gap-3">
                <span className="flex-shrink-0 w-8 h-8 bg-purple-600 text-white rounded-full flex items-center justify-center font-bold">3</span>
                <div>
                  <strong className="text-gray-900">Poznámka "operated by" s jinou aerolínkou</strong>
                  <p className="text-gray-700 mt-2">
                    Při check-inu nebo na boarding pass se může objevit poznámka: "Operated by [jiná aerolinka]" → wet lease nebo codeshare.
                  </p>
                </div>
              </li>
              <li className="flex items-start gap-3">
                <span className="flex-shrink-0 w-8 h-8 bg-purple-600 text-white rounded-full flex items-center justify-center font-bold">4</span>
                <div>
                  <strong className="text-gray-900">Registrační značka letadla (pokročilé)</strong>
                  <p className="text-gray-700 mt-2">
                    Pokud znáte registrační značku letadla (např. OK-ABC), můžete ji vyhledat online a zjistit vlastníka. Pokud vlastník ≠ aerolinka na letence → wet lease.
                  </p>
                </div>
              </li>
            </ol>

            <div className="bg-blue-100 border-l-4 border-blue-600 p-4 rounded-r mt-4">
              <p className="text-sm text-gray-700">
                <strong>💡 Praktický tip:</strong> Wet lease obvykle NEOVLIVŇUJE váš nárok na kompenzaci. Vždy žádejte kompenzaci od aerolinie, u které jste koupili letenku.
              </p>
            </div>
          </div>

          <div className="bg-blue-50 border-l-4 border-blue-600 p-6 my-8 rounded-r-lg">
            <div className="flex items-start gap-4">
              <AlertTriangle className="w-6 h-6 text-blue-600 flex-shrink-0 mt-1" />
              <div>
                <p className="text-lg font-semibold text-gray-900 mb-3">
                  🚀 Wet lease let zpožděný? Nevíte, kdo zodpovídá?
                </p>
                <p className="text-gray-700 mb-4">
                  ClaimWinger má databázi wet lease dohod a automaticky identifikuje správnou odpovědnou aerolínku. Vymáháme kompenzaci přímo od ní a vyřídíme celý proces za vás. Platíte jen při úspěchu.
                </p>
                <Link 
                  href="https://claimwinger.com/cs"
                  className="inline-flex items-center gap-2 bg-blue-600 text-white px-6 py-3 rounded-lg font-semibold hover:bg-blue-700 transition-colors"
                >
                  Začít vymáhat kompenzaci hned
                  <ArrowRight className="w-5 h-5" />
                </Link>
              </div>
            </div>
          </div>

          <h2 className="text-3xl font-bold text-gray-900 mt-12 mb-6">
            Jak vymáhat kompenzaci při wet lease letu?
          </h2>

          <div className="bg-gray-50 p-6 rounded-lg my-6">
            <ol className="space-y-6">
              <li className="flex items-start gap-3">
                <span className="flex-shrink-0 w-8 h-8 bg-blue-600 text-white rounded-full flex items-center justify-center font-bold">1</span>
                <div>
                  <strong className="text-gray-900">Identifikujte contracting carrier (prodávající aerolínku)</strong>
                  <p className="text-gray-700 mt-2">
                    To je aerolinka, u které jste si KOUPILI letenku. Zkontrolujte e-letenku nebo rezervaci.
                  </p>
                </div>
              </li>
              <li className="flex items-start gap-3">
                <span className="flex-shrink-0 w-8 h-8 bg-blue-600 text-white rounded-full flex items-center justify-center font-bold">2</span>
                <div>
                  <strong className="text-gray-900">Podejte reklamaci u contracting carrier</strong>
                  <p className="text-gray-700 mt-2">
                    Kontaktujte přímo aerolínku, kde jste koupili letenku. Wet lease dohoda je jejich interní záležitost — vy máte nárok vůči nim.
                  </p>
                </div>
              </li>
              <li className="flex items-start gap-3">
                <span className="flex-shrink-0 w-8 h-8 bg-blue-600 text-white rounded-full flex items-center justify-center font-bold">3</span>
                <div>
                  <strong className="text-gray-900">Pokud odmítnou s odvoláním na wet lease, citujte EU261 Článek 3(5)</strong>
                  <p className="text-gray-700 mt-2">
                    Contracting carrier NEMŮŽE odmítnout kompenzaci s odůvodněním "let provozovala jiná aerolinka". To je porušení EU261.
                  </p>
                </div>
              </li>
              <li className="flex items-start gap-3">
                <span className="flex-shrink-0 w-8 h-8 bg-blue-600 text-white rounded-full flex items-center justify-center font-bold">4</span>
                <div>
                  <strong className="text-gray-900">Eskalujte přes ÚCL nebo soud</strong>
                  <p className="text-gray-700 mt-2">
                    Pokud contracting carrier neodpoví do 6 týdnů, podejte stížnost na Úřad pro civilní letectví (ÚCL) nebo použijte ClaimWinger k soudní vymáhání.
                  </p>
                </div>
              </li>
            </ol>
          </div>

          <h2 className="text-3xl font-bold text-gray-900 mt-12 mb-6">
            Časté chyby při wet lease reklamacích
          </h2>

          <div className="space-y-4 my-6">
            <div className="bg-red-50 border-l-4 border-red-600 p-6 rounded-r">
              <h3 className="text-lg font-bold text-red-900 mb-2">
                ❌ Chyba 1: Kontaktujete lessor (vlastníka letadla)
              </h3>
              <p className="text-gray-700">
                Lessor NEMUSÍ platit kompenzaci! Vždy kontaktujte contracting carrier (kde jste koupili letenku).
              </p>
            </div>

            <div className="bg-red-50 border-l-4 border-red-600 p-6 rounded-r">
              <h3 className="text-lg font-bold text-red-900 mb-2">
                ❌ Chyba 2: Přijmete odmítnutí s odůvodněním "wet lease"
              </h3>
              <p className="text-gray-700">
                Contracting carrier NEMŮŽE odmítnout kompenzaci s odvoláním na wet lease dohodu. To je jejich interní záležitost. Citujte EU261 Článek 3(5) a trvejte na kompenzaci.
              </p>
            </div>

            <div className="bg-red-50 border-l-4 border-red-600 p-6 rounded-r">
              <h3 className="text-lg font-bold text-red-900 mb-2">
                ❌ Chyba 3: Nevíte, u které aerolinie jste koupili letenku
              </h3>
              <p className="text-gray-700">
                Zkontrolujte e-letenku nebo platební potvrzení. Aerolinka, která vám vystavila e-letenku a přijala platbu, je contracting carrier.
              </p>
            </div>
          </div>

          <h2 className="text-3xl font-bold text-gray-900 mt-12 mb-6">
            Časté dotazy (FAQ)
          </h2>

          <div className="space-y-6">
            <div className="border-l-4 border-blue-600 pl-6 py-2">
              <h3 className="text-xl font-bold text-gray-900 mb-2">
                Ovlivňuje wet lease výši kompenzace?
              </h3>
              <p className="text-gray-700">
                NE. Kompenzace se počítá podle vzdálenosti letu a délky zpoždění, NIKOLI podle toho, kdo skutečně provozoval let.
              </p>
            </div>

            <div className="border-l-4 border-blue-600 pl-6 py-2">
              <h3 className="text-xl font-bold text-gray-900 mb-2">
                Co když contracting carrier zkrachovala?
              </h3>
              <p className="text-gray-700">
                V tomto případě můžete zkusit kontaktovat lessor (vlastníka letadla), ale nemá právní povinnost platit kompenzaci. Více v článku: <Link href="/cs/blog/zanikla-aerolinka-co-se-stane-s-narokem" className="text-blue-600 hover:underline">Zaniklá aerolinka — co se stane s nárokem?</Link>
              </p>
            </div>

            <div className="border-l-4 border-blue-600 pl-6 py-2">
              <h3 className="text-xl font-bold text-gray-900 mb-2">
                Jak rozlišit wet lease od codeshare?
              </h3>
              <p className="text-gray-700">
                Codeshare: vidíte 2 kódy letu (např. OK123 a LH456). Wet lease: vidíte pouze 1 kód letu, ale jiné logo na letadle nebo jiné uniformy posádky. Více v článku: <Link href="/cs/blog/codeshare-let-zodpovednost-kompenzace" className="text-blue-600 hover:underline">Codeshare let — kdo zodpovídá?</Link>
              </p>
            </div>

            <div className="border-l-4 border-blue-600 pl-6 py-2">
              <h3 className="text-xl font-bold text-gray-900 mb-2">
                Mohu požadovat kompenzaci od obou aerolinií (contracting + lessor)?
              </h3>
              <p className="text-gray-700">
                NE. Kompenzaci můžete získat pouze JEDNOU a POUZE od contracting carrier. Lessor nemá právní povinnost platit kompenzaci.
              </p>
            </div>

            <div className="border-l-4 border-blue-600 pl-6 py-2">
              <h3 className="text-xl font-bold text-gray-900 mb-2">
                Platí EU261 pro wet lease lety mimo EU?
              </h3>
              <p className="text-gray-700">
                EU261 platí POUZE pro lety ODLÉTAJÍCÍ z území EU, nebo lety DO EU provozované EU aerolínkou. Wet lease dohoda NEZMĚNÍ teritoriální rozsah EU261.
              </p>
            </div>
          </div>

          <h2 className="text-3xl font-bold text-gray-900 mt-12 mb-6">
            Závěr
          </h2>

          <p>
            Wet lease (ACMI) komplikuje identifikaci odpovědné aerolinie, ale základní pravidlo je jednoduché: platí <strong>contracting carrier</strong> (aerolinka, u které jste koupili letenku).
          </p>

          <ul className="list-disc ml-6 space-y-2 mt-4 text-gray-700">
            <li>Wet lease = pronájem letadla + posádky + údržby + pojištění</li>
            <li>Kompenzaci platí contracting carrier (prodávající aerolinka)</li>
            <li>Lessor (vlastník letadla) NEMUSÍ platit kompenzaci</li>
            <li>Wet lease je obvykle neviditelný pro pasažéry</li>
            <li>Indikátory: jiné logo, jiné uniformy, poznámka "operated by"</li>
          </ul>

          <div className="bg-blue-50 border-l-4 border-blue-600 p-6 my-8 rounded-r-lg">
            <div className="flex items-start gap-4">
              <Euro className="w-6 h-6 text-blue-600 flex-shrink-0 mt-1" />
              <div>
                <p className="text-lg font-semibold text-gray-900 mb-3">
                  💪 Wet lease kompenzace jsou složité — nechte to na odborníky!
                </p>
                <p className="text-gray-700 mb-4">
                  ClaimWinger má zkušenost s vymáháním kompenzací u wet lease letů. Automaticky identifikujeme správnou contracting aerolínku a vyřídíme celý proces za vás. Bez rizika, platíte jen při úspěchu.
                </p>
                <Link 
                  href="https://claimwinger.com/cs/zpozdeny-let"
                  className="inline-flex items-center gap-2 bg-blue-600 text-white px-6 py-3 rounded-lg font-semibold hover:bg-blue-700 transition-colors"
                >
                  Vymáhat kompenzaci za wet lease let →
                  <ArrowRight className="w-5 h-5" />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </article>
    </LayoutCs>
  );
}