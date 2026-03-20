import { LayoutCs } from "@/components/LayoutCs";
import { SEO } from "@/components/SEO";
import Link from "next/link";
import { Plane, AlertTriangle, Euro, FileText, CheckCircle, ArrowRight, Users } from "lucide-react";

export default function CodeshareZodpovednost() {
  return (
    <LayoutCs>
      <SEO 
        title="Codeshare let — kdo zodpovídá za kompenzaci při zpoždění?"
        description="Zjistěte, která aerolinka platí kompenzaci €250-600 při codeshare letu (sdílený letový kód). Průvodce pro české cestující 2026."
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
                "name": "Kdo platí kompenzaci při codeshare letu?",
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": "Podle EU261 platí kompenzaci aerolinka, která SKUTEČNĚ PROVOZOVALA let (operating carrier), NIKOLI ta, u které jste si koupili letenku (marketing carrier). Například: koupili jste u Lufthansa, ale letěl Austrian Airlines → Austrian platí kompenzaci."
                }
              },
              {
                "@type": "Question",
                "name": "Jak poznat, která aerolinka skutečně provozuje codeshare let?",
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": "Na palubní vstupence (boarding pass) je uvedeno: 'Operated by [název aerolinie]'. Také při check-inu nebo na letišti se dozvíte, která aerolinka skutečně létá. Pokud nejste jistí, kontaktujte obě aerolinie."
                }
              },
              {
                "@type": "Question",
                "name": "Mohu požadovat kompenzaci od obou aerolinií (marketing + operating)?",
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": "NE. Kompenzaci můžete získat pouze JEDNOU a POUZE od operating carrier. Ale můžete kontaktovat nejdřív marketing carrier (u kterého jste koupili letenku) — ta má povinnost vás přesměrovat na operating carrier."
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
            <Users className="w-10 h-10 text-blue-600" />
            <span className="bg-blue-100 text-blue-800 px-3 py-1 rounded-full text-sm font-semibold">
              Codeshare lety
            </span>
          </div>
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Codeshare let — kdo zodpovídá za kompenzaci?
          </h1>
          <div className="flex items-center text-gray-600 text-sm gap-4">
            <time dateTime="2026-03-08">8. března 2026</time>
            <span>•</span>
            <span>12 min čtení</span>
          </div>
        </header>

        <div className="prose prose-lg max-w-none">
          <p className="text-xl text-gray-700 leading-relaxed mb-6">
            <strong>Codeshare let je zpožděný — koho máte žalovat?</strong> Kompenzaci <strong>€250-600</strong> podle EU261 platí aerolinka, která <strong>skutečně provozovala let</strong> (operating carrier), NIKOLI ta, u které jste si koupili letenku (marketing carrier). Zjistěte, jak identifikovat správnou aerolínku a jak vymáhat kompenzaci efektivně.
          </p>

          <div className="bg-blue-50 border-l-4 border-blue-600 p-6 my-8 rounded-r-lg">
            <div className="flex items-start gap-4">
              <Euro className="w-6 h-6 text-blue-600 flex-shrink-0 mt-1" />
              <div>
                <p className="text-lg font-semibold text-gray-900 mb-3">
                  💡 Codeshare let zpožděný? Nevíte, koho žalovat?
                </p>
                <p className="text-gray-700 mb-4">
                  ClaimWinger automaticky identifikuje správnou aerolínku (operating carrier) a vymáhá kompenzaci přímo od ní. Nemusíte řešit složité codeshare dohody — vyřídíme vše za vás. Platíte jen při úspěchu.
                </p>
                <Link 
                  href="https://claimwinger.com/cs/zpozdeny-let"
                  className="inline-flex items-center gap-2 bg-blue-600 text-white px-6 py-3 rounded-lg font-semibold hover:bg-blue-700 transition-colors"
                >
                  Vymáhat kompenzaci za codeshare let
                  <ArrowRight className="w-5 h-5" />
                </Link>
              </div>
            </div>
          </div>

          <h2 className="text-3xl font-bold text-gray-900 mt-12 mb-6 flex items-center gap-3">
            <CheckCircle className="w-8 h-8 text-blue-600" />
            Co je codeshare let a jak funguje?
          </h2>

          <div className="bg-gray-50 p-6 rounded-lg my-6">
            <h3 className="text-xl font-bold text-gray-900 mb-4">🔑 Definice:</h3>
            <p className="text-gray-700 mb-4">
              <strong>Codeshare</strong> znamená, že dvě nebo více aerolinií sdílí stejný let, ale každá ho prodává pod svým kódem. Například:
            </p>
            
            <div className="bg-white border border-gray-200 rounded-lg p-4 mb-4">
              <p className="font-semibold text-gray-900 mb-2">Příklad 1: Praha → New York</p>
              <ul className="text-sm text-gray-700 space-y-2">
                <li>• <strong>Marketing carrier:</strong> ČSA (OK123) — prodal letenku</li>
                <li>• <strong>Operating carrier:</strong> United Airlines (UA456) — skutečně létá</li>
                <li>• <strong>Vaše letenka:</strong> OK123, ale v letadle United Airlines</li>
              </ul>
            </div>

            <div className="bg-blue-100 border-l-4 border-blue-600 p-4 rounded-r mt-4">
              <p className="text-sm text-gray-700">
                <strong>⚠️ Klíčové:</strong> Kompenzaci platí <strong>United Airlines</strong> (operating carrier), NIKOLI ČSA (i když jste letenku koupili u ČSA).
              </p>
            </div>
          </div>

          <h2 className="text-3xl font-bold text-gray-900 mt-12 mb-6">
            Jak identifikovat operating carrier?
          </h2>

          <div className="overflow-x-auto my-6 rounded-lg border border-gray-200">
            <table className="min-w-full bg-white">
              <thead className="bg-gray-100">
                <tr>
                  <th className="px-6 py-4 border-b text-left font-semibold text-gray-900">Kde hledat</th>
                  <th className="px-6 py-4 border-b text-left font-semibold text-gray-900">Informace</th>
                  <th className="px-6 py-4 border-b text-left font-semibold text-gray-900">Spolehlivost</th>
                </tr>
              </thead>
              <tbody>
                <tr className="border-b hover:bg-gray-50">
                  <td className="px-6 py-4">
                    <strong>Boarding pass</strong> (palubní vstupence)
                  </td>
                  <td className="px-6 py-4">
                    "Operated by [název aerolinie]"
                  </td>
                  <td className="px-6 py-4">
                    <span className="text-green-600 font-semibold">100% spolehlivé</span>
                  </td>
                </tr>
                <tr className="border-b hover:bg-gray-50">
                  <td className="px-6 py-4">
                    <strong>Check-in</strong> (online nebo letiště)
                  </td>
                  <td className="px-6 py-4">
                    Při check-inu se dozvíte skutečnou aerolínku
                  </td>
                  <td className="px-6 py-4">
                    <span className="text-green-600 font-semibold">100% spolehlivé</span>
                  </td>
                </tr>
                <tr className="border-b hover:bg-gray-50">
                  <td className="px-6 py-4">
                    <strong>Rezervační systém</strong> (e-letenka)
                  </td>
                  <td className="px-6 py-4">
                    "Operated by" nebo "Marketed by" pole
                  </td>
                  <td className="px-6 py-4">
                    <span className="text-blue-600 font-semibold">95% spolehlivé</span>
                  </td>
                </tr>
                <tr className="hover:bg-gray-50">
                  <td className="px-6 py-4">
                    <strong>Letiště</strong> (info desk)
                  </td>
                  <td className="px-6 py-4">
                    Zeptejte se zaměstnanců aerolinie
                  </td>
                  <td className="px-6 py-4">
                    <span className="text-green-600 font-semibold">100% spolehlivé</span>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>

          <h2 className="text-3xl font-bold text-gray-900 mt-12 mb-6 flex items-center gap-3">
            <FileText className="w-8 h-8 text-blue-600" />
            Právní odpovědnost podle EU261
          </h2>

          <div className="bg-gray-50 p-6 rounded-lg my-6">
            <h3 className="text-xl font-bold text-gray-900 mb-4">📜 Článek 3(5) EU 261/2004:</h3>
            <blockquote className="border-l-4 border-blue-600 pl-6 py-2 italic text-gray-700 mb-4">
              "Odpovědnost za kompenzaci nese <strong>provozní letecký dopravce</strong> (operating air carrier), který skutečně provozoval let."
            </blockquote>
            
            <p className="text-gray-700 mb-4">
              Marketing carrier (prodávající aerolinka) má pouze povinnost:
            </p>
            <ul className="list-disc ml-6 space-y-2 text-gray-700">
              <li>Informovat pasažéra o tom, která aerolinka skutečně létá</li>
              <li>Přesměrovat reklamaci na operating carrier</li>
              <li>Poskytnout kontaktní údaje na operating carrier</li>
            </ul>

            <div className="bg-blue-100 border-l-4 border-blue-600 p-4 rounded-r mt-4">
              <p className="text-sm text-gray-700">
                <strong>💡 Tip:</strong> I když marketing carrier NEMUSÍ platit, můžete ji kontaktovat jako první krok — často vám usnadní komunikaci s operating carrier.
              </p>
            </div>
          </div>

          <h2 className="text-3xl font-bold text-gray-900 mt-12 mb-6">
            Praktické příklady codeshare kompenzací
          </h2>

          <div className="space-y-4 my-6">
            <div className="bg-white border border-gray-200 rounded-lg p-6">
              <h3 className="text-xl font-bold text-gray-900 mb-3">
                Příklad 1: Praha → Los Angeles (ČSA codeshare s Lufthansa)
              </h3>
              <ul className="text-gray-700 space-y-2">
                <li><strong>Letenka:</strong> ČSA OK456</li>
                <li><strong>Skutečný let:</strong> Lufthansa LH123</li>
                <li><strong>Zpoždění:</strong> 5 hodin (Frankfurt → Los Angeles)</li>
                <li><strong>Kdo platí?</strong> <span className="text-green-600 font-bold">Lufthansa</span> (operating carrier)</li>
                <li><strong>Kompenzace:</strong> €600 (vzdálenost &gt;3500 km, zpoždění &gt;4h)</li>
              </ul>
            </div>

            <div className="bg-white border border-gray-200 rounded-lg p-6">
              <h3 className="text-xl font-bold text-gray-900 mb-3">
                Příklad 2: Londýn → Praha (British Airways codeshare s ČSA)
              </h3>
              <ul className="text-gray-700 space-y-2">
                <li><strong>Letenka:</strong> British Airways BA789</li>
                <li><strong>Skutečný let:</strong> ČSA OK321</li>
                <li><strong>Zrušení:</strong> Let zrušen 1 den před odletem</li>
                <li><strong>Kdo platí?</strong> <span className="text-green-600 font-bold">ČSA</span> (operating carrier)</li>
                <li><strong>Kompenzace:</strong> €250 (vzdálenost &lt;1500 km)</li>
              </ul>
            </div>

            <div className="bg-white border border-gray-200 rounded-lg p-6">
              <h3 className="text-xl font-bold text-gray-900 mb-3">
                Příklad 3: Vídeň → Bangkok (Austrian codeshare s Thai Airways)
              </h3>
              <ul className="text-gray-700 space-y-2">
                <li><strong>Letenka:</strong> Austrian Airlines OS234</li>
                <li><strong>Skutečný let:</strong> Thai Airways TG456 (Bangkok → Vídeň)</li>
                <li><strong>Zpoždění:</strong> 6 hodin na zpáteční cestě</li>
                <li><strong>Kdo platí?</strong> <span className="text-red-600 font-bold">NIKDO</span> (let ODLÉTAL z Bangkoku mimo EU, Thai není EU aerolinka → EU261 NEPLATÍ)</li>
              </ul>
            </div>
          </div>

          <div className="bg-blue-50 border-l-4 border-blue-600 p-6 my-8 rounded-r-lg">
            <div className="flex items-start gap-4">
              <AlertTriangle className="w-6 h-6 text-blue-600 flex-shrink-0 mt-1" />
              <div>
                <p className="text-lg font-semibold text-gray-900 mb-3">
                  🚀 Nevíte, kdo platí kompenzaci za váš codeshare let?
                </p>
                <p className="text-gray-700 mb-4">
                  ClaimWinger má databázi všech codeshare dohod a automaticky identifikuje správnou operating aerolínku. Vymáháme kompenzaci přímo od ní a vyřídíme celý proces za vás. Platíte jen při úspěchu.
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
            Jak vymáhat kompenzaci při codeshare letu?
          </h2>

          <div className="bg-gray-50 p-6 rounded-lg my-6">
            <ol className="space-y-6">
              <li className="flex items-start gap-3">
                <span className="flex-shrink-0 w-8 h-8 bg-blue-600 text-white rounded-full flex items-center justify-center font-bold">1</span>
                <div>
                  <strong className="text-gray-900">Identifikujte operating carrier</strong>
                  <p className="text-gray-700 mt-2">
                    Zkontrolujte boarding pass nebo kontaktujte marketing carrier a zeptejte se: "Která aerolinka skutečně provozovala let XY123?"
                  </p>
                </div>
              </li>
              <li className="flex items-start gap-3">
                <span className="flex-shrink-0 w-8 h-8 bg-blue-600 text-white rounded-full flex items-center justify-center font-bold">2</span>
                <div>
                  <strong className="text-gray-900">Podejte reklamaci u operating carrier</strong>
                  <p className="text-gray-700 mt-2">
                    Kontaktujte přímo operating aerolínku (ta, která skutečně létala). Uveďte letový kód OBOU aerolinií (marketing i operating).
                  </p>
                </div>
              </li>
              <li className="flex items-start gap-3">
                <span className="flex-shrink-0 w-8 h-8 bg-blue-600 text-white rounded-full flex items-center justify-center font-bold">3</span>
                <div>
                  <strong className="text-gray-900">Pokud operating carrier odmítne, kontaktujte marketing carrier</strong>
                  <p className="text-gray-700 mt-2">
                    Marketing carrier má povinnost vás přesměrovat a poskytnout podporu. Pokud odmítne pomoci, můžete podat stížnost na ÚCL.
                  </p>
                </div>
              </li>
              <li className="flex items-start gap-3">
                <span className="flex-shrink-0 w-8 h-8 bg-blue-600 text-white rounded-full flex items-center justify-center font-bold">4</span>
                <div>
                  <strong className="text-gray-900">Eskalujte přes ÚCL nebo soud</strong>
                  <p className="text-gray-700 mt-2">
                    Pokud operating carrier neodpoví do 6 týdnů, podejte stížnost na Úřad pro civilní letectví (ÚCL) nebo použijte ClaimWinger k soudní vymáhání.
                  </p>
                </div>
              </li>
            </ol>
          </div>

          <h2 className="text-3xl font-bold text-gray-900 mt-12 mb-6">
            Časté chyby při codeshare reklamacích
          </h2>

          <div className="space-y-4 my-6">
            <div className="bg-red-50 border-l-4 border-red-600 p-6 rounded-r">
              <h3 className="text-lg font-bold text-red-900 mb-2">
                ❌ Chyba 1: Žádáte kompenzaci od marketing carrier
              </h3>
              <p className="text-gray-700">
                Nejčastější chyba! Marketing carrier (kde jste koupili letenku) NEMUSÍ platit kompenzaci. Musíte kontaktovat operating carrier (která skutečně létala).
              </p>
            </div>

            <div className="bg-red-50 border-l-4 border-red-600 p-6 rounded-r">
              <h3 className="text-lg font-bold text-red-900 mb-2">
                ❌ Chyba 2: Nevíte, která aerolinka skutečně létala
              </h3>
              <p className="text-gray-700">
                Zkontrolujte boarding pass nebo e-letenku. Pole "Operated by" vám řekne, kdo skutečně provozoval let. Pokud to nevíte, kontaktujte marketing carrier a zeptejte se.
              </p>
            </div>

            <div className="bg-red-50 border-l-4 border-red-600 p-6 rounded-r">
              <h3 className="text-lg font-bold text-red-900 mb-2">
                ❌ Chyba 3: Posíláte reklamaci pouze jedné aerolince
              </h3>
              <p className="text-gray-700">
                Pro jistotu pošlete kopii reklamace OBĚMA aerolinkám (marketing + operating). Tím zajistíte, že správná aerolinka obdrží reklamaci včas.
              </p>
            </div>
          </div>

          <h2 className="text-3xl font-bold text-gray-900 mt-12 mb-6">
            Časté dotazy (FAQ)
          </h2>

          <div className="space-y-6">
            <div className="border-l-4 border-blue-600 pl-6 py-2">
              <h3 className="text-xl font-bold text-gray-900 mb-2">
                Mohu požadovat kompenzaci od obou aerolinií?
              </h3>
              <p className="text-gray-700">
                NE. Kompenzaci můžete získat pouze JEDNOU a POUZE od operating carrier. Ale můžete kontaktovat obě aerolinie — marketing carrier má povinnost vás přesměrovat na operating carrier.
              </p>
            </div>

            <div className="border-l-4 border-blue-600 pl-6 py-2">
              <h3 className="text-xl font-bold text-gray-900 mb-2">
                Co když marketing carrier odmítne poskytnout kontakt na operating carrier?
              </h3>
              <p className="text-gray-700">
                To je porušení EU261. Podejte stížnost na ÚCL (Úřad pro civilní letectví). Marketing carrier má povinnost poskytovat základní informace o operating carrier.
              </p>
            </div>

            <div className="border-l-4 border-blue-600 pl-6 py-2">
              <h3 className="text-xl font-bold text-gray-900 mb-2">
                Jak poznám codeshare let při rezervaci?
              </h3>
              <p className="text-gray-700">
                Při rezervaci online se obvykle zobrazí poznámka: "Operated by [název aerolinie]". Také můžete zavolat na zákaznickou linku aerolinie a zeptat se přímo.
              </p>
            </div>

            <div className="border-l-4 border-blue-600 pl-6 py-2">
              <h3 className="text-xl font-bold text-gray-900 mb-2">
                Platí EU261 pro codeshare lety mimo EU?
              </h3>
              <p className="text-gray-700">
                EU261 platí POUZE pro lety ODLÉTAJÍCÍ z území EU, nebo lety DO EU provozované EU aerolínkou. Codeshare s non-EU aerolínkou odlétající mimo EU → EU261 NEPLATÍ.
              </p>
            </div>

            <div className="border-l-4 border-blue-600 pl-6 py-2">
              <h3 className="text-xl font-bold text-gray-900 mb-2">
                Co když operating carrier zkrachovala?
              </h3>
              <p className="text-gray-700">
                Marketing carrier NEMUSÍ převzít odpovědnost za kompenzaci. Musíte se přihlásit do insolvenčního řízení operating carrier jako věřitel. Více v článku: <Link href="/cs/blog/zanikla-aerolinka-co-se-stane-s-narokem" className="text-blue-600 hover:underline">Zaniklá aerolinka — co se stane s nárokem?</Link>
              </p>
            </div>
          </div>

          <h2 className="text-3xl font-bold text-gray-900 mt-12 mb-6">
            Závěr
          </h2>

          <p>
            Codeshare lety komplikují vymáhání kompenzace, ale základní pravidlo je jednoduché: platí <strong>operating carrier</strong> (aerolinka, která skutečně létala).
          </p>

          <ul className="list-disc ml-6 space-y-2 mt-4 text-gray-700">
            <li>Identifikujte operating carrier z boarding pass ("Operated by")</li>
            <li>Kontaktujte přímo operating aerolínku s reklamací</li>
            <li>Marketing carrier má povinnost vás přesměrovat a pomoci</li>
            <li>Pro jistotu pošlete kopii reklamace OBĚMA aerolinkám</li>
            <li>Pokud operating carrier neodpoví, eskalujte přes ÚCL nebo soud</li>
          </ul>

          <div className="bg-blue-50 border-l-4 border-blue-600 p-6 my-8 rounded-r-lg">
            <div className="flex items-start gap-4">
              <Euro className="w-6 h-6 text-blue-600 flex-shrink-0 mt-1" />
              <div>
                <p className="text-lg font-semibold text-gray-900 mb-3">
                  💪 Codeshare kompenzace jsou složité — nechte to na odborníky!
                </p>
                <p className="text-gray-700 mb-4">
                  ClaimWinger má zkušenost s vymáháním kompenzací u codeshare letů. Automaticky identifikujeme správnou operating aerolínku a vyřídíme celý proces za vás. Bez rizika, platíte jen při úspěchu.
                </p>
                <Link 
                  href="https://claimwinger.com/cs/zpozdeny-let"
                  className="inline-flex items-center gap-2 bg-blue-600 text-white px-6 py-3 rounded-lg font-semibold hover:bg-blue-700 transition-colors"
                >
                  Vymáhat kompenzaci za codeshare let →
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
