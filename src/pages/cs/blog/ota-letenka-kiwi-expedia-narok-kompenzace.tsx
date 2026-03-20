import { Layout } from "@/components/Layout";
import { SEO } from "@/components/SEO";
import Link from "next/link";
import { ShoppingCart, AlertTriangle, FileText, CheckCircle, Scale, Users } from "lucide-react";
import { generateFAQSchema, generateArticleSchema, generateBreadcrumbSchema } from "@/lib/schemaGenerator";

export default function OtaLetenkaKiwiExpediaNarokKompenzace() {
  const faqSchema = generateFAQSchema([
    {
      question: "Mám nárok na kompenzaci, pokud jsem letenku koupil přes Kiwi.com nebo Booking.com?",
      answer: "Ano! Podle ES 261/2004 máte nárok na kompenzaci bez ohledu na to, kde jste letenku zakoupili. OTA (online cestovní agentura) je pouze zprostředkovatel — odpovědnost za zpoždění nebo zrušení letu nese vždy provozní letecká společnost (operating carrier)."
    },
    {
      question: "Kdo mi vyplatí kompenzaci — Kiwi.com nebo letecká společnost?",
      answer: "Kompenzaci vyplácí provozní letecká společnost (např. Ryanair, Wizz Air, Lufthansa), nikoliv OTA. Kiwi.com, Booking.com nebo Expedia pouze zprostředkovaly prodej letenky a nemají povinnost vyplatit kompenzaci podle ES 261/2004."
    },
    {
      question: "Musím kontaktovat Kiwi.com před podáním reklamace u aerolinie?",
      answer: "Ne, můžete podat reklamaci přímo u provozní letecké společnosti. OTA nemá žádnou roli v procesu vyřizování kompenzací podle ES 261/2004. Doporučujeme však mít k dispozici booking confirmation a e-ticket number z Kiwi.com."
    },
    {
      question: "Co když Kiwi.com/Booking odmítl refundaci letenky — mám ještě nárok na kompenzaci?",
      answer: "Ano, refundace letenky (vrácení ceny) a kompenzace podle ES 261/2004 jsou dvě různé věci. I když OTA odmítl vrátit peníze za letenku, stále máte nárok na kompenzaci od letecké společnosti, pokud došlo k zpoždění 3+ hodiny nebo zrušení letu."
    },
    {
      question: "Platí ES 261/2004 i pro letenky zakoupené mimo EU (např. na americkém Expedia.com)?",
      answer: "Ano, pokud let odlétal z EU nebo přilétal do EU provozní leteckou společností se sídlem v EU. Místo nákupu letenky (OTA, země) není relevantní — rozhodující je místo odletu/příletu a identita provozní letecké společnosti."
    }
  ]);

  const articleSchema = generateArticleSchema({
    title: "Letenka přes OTA (Booking, Kiwi, Expedia) — ovlivní to nárok na kompenzaci?",
    description: "Zjistěte, zda máte nárok na kompenzaci podle ES 261/2004, pokud jste letenku zakoupili přes OTA (Kiwi.com, Booking, Expedia). Kdo vyplácí kompenzaci a jak podat reklamaci.",
    url: "https://problemlot.pl/cs/blog/ota-letenka-kiwi-expedia-narok-kompenzace",
    publishDate: "2025-01-14",
    author: "ClaimWinger Legal Team",
    imageUrl: "https://problemlot.pl/og-image.png"
  });

  const breadcrumbSchema = generateBreadcrumbSchema([
    { name: "Domů", url: "https://problemlot.pl/cs" },
    { name: "Blog", url: "https://problemlot.pl/cs/blog" },
    { name: "Letenka přes OTA", url: "https://problemlot.pl/cs/blog/ota-letenka-kiwi-expedia-narok-kompenzace" }
  ]);

  return (
    <Layout>
      <SEO
        title="OTA letenka (Kiwi, Booking) — nárok na kompenzaci? | ProblemLot"
        description="Zjistěte, zda máte nárok na kompenzaci podle ES 261/2004, pokud jste letenku zakoupili přes OTA (Kiwi.com, Booking). Kdo vyplácí kompenzaci a jak na to."
        url="https://problemlot.pl/cs/blog/ota-letenka-kiwi-expedia-narok-kompenzace"
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
                Letenka přes OTA
              </li>
            </ol>
          </div>
        </nav>

        {/* Hero Section */}
        <header className="bg-gradient-to-r from-blue-600 to-blue-700 text-white py-16 sm:py-20">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex items-center gap-3 mb-6">
              <div className="p-3 bg-white/10 backdrop-blur-sm rounded-xl">
                <ShoppingCart className="w-8 h-8" />
              </div>
              <span className="px-4 py-1.5 bg-white/20 backdrop-blur-sm rounded-full text-sm font-medium">
                Práva pasažerů OTA
              </span>
            </div>
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold mb-6 leading-tight">
              Letenka přes OTA (Booking, Kiwi, Expedia) — ovlivní to nárok na kompenzaci?
            </h1>
            <p className="text-xl sm:text-2xl text-blue-100 leading-relaxed font-light">
              Právní analýza: Kdo odpovídá za kompenzaci, pokud jste letenku zakoupili přes online cestovní agenturu
            </p>
          </div>
        </header>

        {/* Main Content */}
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-16">
          
          {/* Introduction */}
          <div className="prose prose-lg max-w-none mb-12">
            <div className="bg-white rounded-2xl shadow-sm border border-slate-200 p-8 mb-8">
              <p className="text-lg leading-relaxed text-slate-700 mb-4">
                Miliony cestujících každoročně kupují letenky přes <strong>online cestovní agentury (OTA)</strong> jako Kiwi.com, Booking.com, Expedia, eDreams nebo Skyscanner. Tyto platformy nabízejí pohodlné srovnání cen a často levnější letenky než přímý nákup u letecké společnosti. Ale co se stane, když dojde k <strong>zpoždění nebo zrušení letu</strong>? Kdo odpovídá za kompenzaci?
              </p>
              <p className="text-lg leading-relaxed text-slate-700 mb-4">
                <strong>Dobrá zpráva:</strong> Podle <Link href="/cs/blog/narizeni-es-261-2004" className="text-blue-600 hover:text-blue-700 font-medium">nařízení ES 261/2004</Link> máte <strong>plný nárok na kompenzaci</strong> bez ohledu na to, kde jste letenku zakoupili. OTA je pouze zprostředkovatel — odpovědnost za zpoždění nebo zrušení letu nese vždy <strong>provozní letecká společnost</strong> (operating carrier), která let fyzicky provozovala.
              </p>
              <p className="text-lg leading-relaxed text-slate-700">
                Tento článek vysvětluje, <strong>kdo vyplácí kompenzaci</strong>, jak podat reklamaci, co dělat, pokud OTA odmítl refundaci letenky, a jaké jsou časté problémy při nákupu přes zprostředkovatele.
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
                    </tr>
                  </thead>
                  <tbody className="text-slate-600">
                    <tr className="border-b border-blue-100">
                      <td className="py-3 px-4">Do 1 500 km</td>
                      <td className="py-3 px-4 font-bold text-blue-600">250 €</td>
                    </tr>
                    <tr className="border-b border-blue-100">
                      <td className="py-3 px-4">1 500 – 3 500 km</td>
                      <td className="py-3 px-4 font-bold text-blue-600">400 €</td>
                    </tr>
                    <tr>
                      <td className="py-3 px-4">Nad 3 500 km</td>
                      <td className="py-3 px-4 font-bold text-blue-600">600 €</td>
                    </tr>
                  </tbody>
                </table>
              </div>
              <p className="text-sm text-slate-600 mt-4 mb-0">
                <strong>Platí pro všechny letenky:</strong> Přímý nákup u aerolinie, OTA (Kiwi, Booking), cestovní kancelář, business travel agentura — všechny mají stejný nárok na kompenzaci.
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
                    Kdo odpovídá za kompenzaci — OTA nebo aerolinka?
                  </h2>
                </div>
              </div>
              
              <div className="prose prose-lg max-w-none text-slate-700">
                <p className="mb-4">
                  <strong>Klíčový princip ES 261/2004:</strong> Kompenzaci vyplácí <strong>provozní letecká společnost</strong> (operating carrier), která fyzicky provozovala let. OTA (Kiwi.com, Booking.com, Expedia) je pouze <strong>zprostředkovatel prodeje</strong> a nemá žádnou právní povinnost vyplatit kompenzaci za zpoždění nebo zrušení.
                </p>

                <div className="bg-green-50 border-l-4 border-green-600 rounded-r-xl p-6 my-6">
                  <h3 className="text-xl font-bold text-slate-900 mb-3 mt-0">Od koho žádat peníze?</h3>
                  <ul className="space-y-2 mb-0">
                    <li>✅ <strong>Kompenzace 250–600 €:</strong> Vždy žádejte u letecké společnosti (Ryanair, Lufthansa atd.).</li>
                    <li>✅ <strong>Refundace zrušené letenky:</strong> Letecká společnost vám často doporučí řešit refundaci přes OTA, u kterého jste platili. Nicméně kompenzace se řeší přímo s aerolinkou.</li>
                  </ul>
                </div>

                <p className="mb-0">
                  Pokud si nejste jisti, kdo je provozní letecká společnost, podívejte se na <strong>palubní lístek</strong> (boarding pass) — tam je vždy uvedeno "Operated by [název aerolinie]".
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
                    OTA odmítl refundaci — mám ještě nárok na kompenzaci?
                  </h2>
                </div>
              </div>
              
              <div className="prose prose-lg max-w-none text-slate-700">
                <p className="mb-4">
                  <strong>Důležité rozlišení:</strong> Refundace letenky (vrácení zaplacené částky) a kompenzace za zpoždění/zrušení jsou <strong>dvě různé věci</strong>. 
                </p>
                <p className="mb-4">
                  I když OTA (např. Kiwi.com) odmítne vrátit peníze s odvoláním na "nevratný tarif", vaše právo na kompenzaci (250–600 €) od aerolinie <strong>stále trvá</strong>. 
                </p>

                <div className="bg-amber-50 border-l-4 border-amber-600 rounded-r-xl p-6 my-6">
                  <p className="mb-3 font-bold">⚠️ Pozor na fiktivní e-maily od OTA:</p>
                  <p className="mb-0">
                    Při nákupu přes některé OTA agentury je k rezervaci přiřazen fiktivní e-mail (např. jmeno@123.kiwi.com). Kvůli tomu nemusíte dostat od aerolinie upozornění o zrušení letu včas. Pro účely kompenzace je však podstatné, kdy jste o změně byli informováni vy.
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
                    Mám nárok na kompenzaci, pokud jsem letenku koupil přes Kiwi.com nebo Booking.com?
                  </h3>
                  <p className="text-slate-700 leading-relaxed mb-0">
                    Ano! Podle ES 261/2004 máte nárok na kompenzaci bez ohledu na to, kde jste letenku zakoupili. Odpovědnost za let nese vždy letecká společnost.
                  </p>
                </div>

                <div className="bg-white rounded-xl p-6 shadow-sm border border-slate-100">
                  <h3 className="text-xl font-bold text-slate-900 mb-3">
                    Kdo mi vyplatí kompenzaci — Kiwi.com nebo letecká společnost?
                  </h3>
                  <p className="text-slate-700 leading-relaxed mb-0">
                    Kompenzaci vyplácí provozní letecká společnost. OTA (cestovní agentura) nemá povinnost kompenzaci řešit ani platit.
                  </p>
                </div>

                <div className="bg-white rounded-xl p-6 shadow-sm border border-slate-100">
                  <h3 className="text-xl font-bold text-slate-900 mb-3">
                    Musím kontaktovat OTA před podáním reklamace u aerolinie?
                  </h3>
                  <p className="text-slate-700 leading-relaxed mb-0">
                    Ne, můžete podat reklamaci přímo u aerolinie. Potřebujete pouze číslo letenky (PNR) a údaje o letu, které naleznete v potvrzení od OTA.
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
                  Měl váš let zpoždění?
                </h2>
                <p className="text-xl text-blue-100 mb-8">
                  Získejte až <strong className="text-white">600 €</strong> kompenzace i z letenek od OTA
                </p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
                  <a
                    href="https://claimwinger.com/cs/zpozdeny-let?utm_source=problemlot&utm_medium=blog&utm_campaign=cs-ota"
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
                    Nařízení ES 261/2004
                  </h3>
                  <p className="text-sm text-slate-600">
                    Základní práva cestujících v EU.
                  </p>
                </Link>
                <Link 
                  href="/cs/blog/jak-podat-reklamaci-krok-za-krokem"
                  className="group p-4 rounded-xl border-2 border-slate-200 hover:border-blue-600 transition-colors"
                >
                  <h3 className="font-bold text-slate-900 group-hover:text-blue-600 mb-2">
                    Jak podat reklamaci
                  </h3>
                  <p className="text-sm text-slate-600">
                    Praktický návod na uplatnění nároku.
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
