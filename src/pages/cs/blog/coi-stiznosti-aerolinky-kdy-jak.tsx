import { Layout } from "@/components/Layout";
import { SEO } from "@/components/SEO";
import { ArrowRight, Plane, Scale, FileText, Clock, AlertTriangle, CheckCircle } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { generateFAQSchema, generateArticleSchema, generateBreadcrumbSchema } from "@/lib/schemaGenerator";

export default function COIStiznostiAerolinkKdyJak() {
  const faqSchema = generateFAQSchema([
    {
      question: "Co je Česká obchodní inspekce (ČOI)?",
      answer: "ČOI je státní orgán dozorující dodržování právních předpisů v oblasti ochrany spotřebitele. Vyřizuje stížnosti na podnikatele včetně aerolinek a může uložit pokutu za porušení zákonů."
    },
    {
      question: "V čem se ČOI liší od ÚCL?",
      answer: "ÚCL (Úřad pro civilní letectví) se specializuje na bezpečnost letového provozu a nařízení ES 261/2004. ČOI má širší mandát — řeší i nekalé obchodní praktiky, ale má menší leteckou specializaci než ÚCL."
    },
    {
      question: "Kdy se obrátit na ČOI místo ÚCL?",
      answer: "Na ČOI se obraťte, pokud jde o obecný spotřebitelský spor (např. nepřehledné poplatky, klamavá reklama) nebo pokud chcete alternativu k ÚCL. Pro specializované otázky ES 261/2004 je však ÚCL vhodnější volbou."
    },
    {
      question: "Může ČOI přinutit aerolinu vyplatit kompenzaci?",
      answer: "Ne, ČOI nemá pravomoc nařídit výplatu konkrétní částky cestujícímu. Může ale uložit pokutu aerolince nebo doporučit nápravu, což vytváří tlak na vyřešení sporu."
    }
  ]);

  const articleSchema = generateArticleSchema({
    title: "ČOI a stížnosti na aerolinky — kdy a jak se obrátit?",
    description: "Jak podat stížnost na aerolinu u České obchodní inspekce. Kdy je ČOI vhodnější než ÚCL, postup podání a co očekávat.",
    publishDate: "2026-03-12",
    modifiedDate: "2026-03-12",
    url: "https://problemlot.pl/cs/blog/coi-stiznosti-aerolinky-kdy-jak"
  });

  const breadcrumbSchema = generateBreadcrumbSchema([
    { name: "Domů", url: "https://problemlot.pl/cs" },
    { name: "Blog", url: "https://problemlot.pl/cs/blog" },
    { name: "ČOI a stížnosti na aerolinky", url: "https://problemlot.pl/cs/blog/coi-stiznosti-aerolinky-kdy-jak" }
  ]);

  return (
    <Layout>
      <SEO 
        title="ČOI a stížnosti na aerolinky — kdy a jak se obrátit? | 2026"
        description="Jak podat stížnost na aerolinu u České obchodní inspekce. Kdy je ČOI vhodnější než ÚCL, postup podání a co očekávat."
        url="https://problemlot.pl/cs/blog/coi-stiznosti-aerolinky-kdy-jak"
      />
      
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(articleSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
      />

      <article className="container mx-auto px-4 py-8 max-w-4xl">
        <div className="space-y-8">
          
          {/* Breadcrumb */}
          <nav className="text-sm text-muted-foreground">
            <a href="/cs" className="hover:text-primary">Domů</a>
            <span className="mx-2">/</span>
            <a href="/cs/blog" className="hover:text-primary">Blog</a>
            <span className="mx-2">/</span>
            <span>ČOI a stížnosti na aerolinky</span>
          </nav>

          {/* Header */}
          <header>
            <h1 className="text-4xl font-bold mb-4">
              ČOI a stížnosti na aerolinky — kdy a jak se obrátit?
            </h1>
            <p className="text-xl text-muted-foreground">
              Kompletní průvodce podáním stížnosti u České obchodní inspekce — kdy je ČOI vhodnější než ÚCL a jak postupovat
            </p>
            <div className="flex items-center gap-4 mt-4 text-sm text-muted-foreground">
              <time dateTime="2026-03-12">12. března 2026</time>
              <span>•</span>
              <span>12 min čtení</span>
            </div>
          </header>

          {/* Intro */}
          <section className="prose prose-lg max-w-none">
            <p className="lead text-lg">
              Pokud máte problém s aerolinkou a nevíte, zda se obrátit na <a href="/cs/blog/reklamace-ucl-urad-civilni-letectvi" className="text-primary hover:underline">Úřad pro civilní letectví (ÚCL)</a> nebo na <strong>Českou obchodní inspekci (ČOI)</strong>, nejste sami. Oba úřady mají pravomoc vyšetřovat stížnosti spotřebitelů, ale každý z nich má trochu jiné zaměření a kompetence. <strong>ČOI</strong> je obecný orgán ochrany spotřebitele s širokým mandátem — kromě aerolinek dozoruje i e-shopy, cestovní kanceláře, restaurace atd.
            </p>
            <p>
              V kontextu letecké dopravy je ČOI užitečná zejména při sporech o <strong>nekalé obchodní praktiky, klamavou reklamu nebo nepřehledné poplatky</strong>. Pro specializované otázky týkající se <a href="/cs/blog/narizeni-es-261-2004" className="text-primary hover:underline">nařízení ES 261/2004</a> (kompenzace za zpoždění/zrušení) je však často vhodnější ÚCL. V tomto článku vysvětlíme, kdy a jak se na ČOI obrátit, jaké dokumenty připravit a co od celého procesu čekat.
            </p>
          </section>

          {/* Compensation Table */}
          <Card className="bg-gradient-to-br from-blue-50 to-indigo-50 border-blue-200">
            <CardContent className="p-6">
              <h2 className="text-2xl font-bold mb-4 flex items-center gap-2">
                <Scale className="h-6 w-6 text-primary" />
                Přehled kompenzací dle ES 261/2004
              </h2>
              <div className="overflow-x-auto">
                <table className="w-full">
                  <thead>
                    <tr className="border-b-2 border-blue-200">
                      <th className="text-left p-3 font-semibold">Vzdálenost letu</th>
                      <th className="text-left p-3 font-semibold">Výše kompenzace</th>
                      <th className="text-left p-3 font-semibold">Příklad tras</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr className="border-b border-blue-100">
                      <td className="p-3">Do 1 500 km</td>
                      <td className="p-3 font-bold text-primary">€250</td>
                      <td className="p-3 text-sm">Praha–Vídeň, Brno–Londýn</td>
                    </tr>
                    <tr className="border-b border-blue-100">
                      <td className="p-3">1 500–3 500 km</td>
                      <td className="p-3 font-bold text-primary">€400</td>
                      <td className="p-3 text-sm">Praha–Barcelona, Praha–Dubaj</td>
                    </tr>
                    <tr>
                      <td className="p-3">Nad 3 500 km</td>
                      <td className="p-3 font-bold text-primary">€600</td>
                      <td className="p-3 text-sm">Praha–New York, Praha–Singapur</td>
                    </tr>
                  </tbody>
                </table>
              </div>
              <p className="text-sm text-muted-foreground mt-4">
                Kompenzace náleží při zpoždění 3+ hodin nebo zrušení letu, pokud aerolinka nezajistila alternativu nebo nezrušila let kvůli mimořádným okolnostem.
              </p>
            </CardContent>
          </Card>

          {/* Main Content Sections */}
          <section className="space-y-6">
            <h2 className="text-3xl font-bold">Co je Česká obchodní inspekce (ČOI)?</h2>
            <p>
              <strong>Česká obchodní inspekce (ČOI)</strong> je správní úřad založený zákonem č. 64/1986 Sb. Jejím hlavním úkolem je <strong>ochrana spotřebitelů</strong> před nekalými praktikami podnikatelů. ČOI dozoruje:
            </p>
            <ul className="list-disc list-inside space-y-2 ml-4">
              <li><strong>Dodržování zákonů o ochraně spotřebitele</strong> — klamavá reklama, nepřehledné smlouvy, skryté poplatky</li>
              <li><strong>Kontrolu kvality a bezpečnosti výrobků a služeb</strong></li>
              <li><strong>Vyřizování stížností spotřebitelů</strong> na různé podnikatele včetně aerolinek</li>
            </ul>
            <p>
              ČOI má pravomoc <strong>uložit pokutu</strong> podnikateli, který poruší zákon (až miliony Kč), <strong>zakázat nekalou praxi</strong> nebo <strong>doporučit nápravu</strong>. Podobně jako ÚCL však <strong>ČOI přímo nevypláce kompenzace</strong> — její role je kontrolní a sankční.
            </p>
          </section>

          <section className="space-y-6">
            <h2 className="text-3xl font-bold">ČOI vs. ÚCL — jaký je rozdíl?</h2>
            
            <div className="overflow-x-auto">
              <table className="w-full border-collapse">
                <thead>
                  <tr className="bg-blue-50 border-b-2 border-blue-200">
                    <th className="text-left p-3 font-semibold">Kritérium</th>
                    <th className="text-left p-3 font-semibold">ČOI</th>
                    <th className="text-left p-3 font-semibold">ÚCL</th>
                  </tr>
                </thead>
                <tbody>
                  <tr className="border-b border-gray-200">
                    <td className="p-3 font-medium">Zaměření</td>
                    <td className="p-3">Ochrana spotřebitele (všechny odvětví)</td>
                    <td className="p-3">Bezpečnost a práva v letectví</td>
                  </tr>
                  <tr className="border-b border-gray-200">
                    <td className="p-3 font-medium">ES 261/2004</td>
                    <td className="p-3">Částečně (obecná ochrana)</td>
                    <td className="p-3">Hlavní specializace</td>
                  </tr>
                  <tr className="border-b border-gray-200">
                    <td className="p-3 font-medium">Typické případy</td>
                    <td className="p-3">Klamavá reklama, skryté poplatky</td>
                    <td className="p-3">Zpoždění, zrušení, odmítnutí nástupu</td>
                  </tr>
                  <tr className="border-b border-gray-200">
                    <td className="p-3 font-medium">Kompenzace</td>
                    <td className="p-3">❌ Nevypláce (jen sankce)</td>
                    <td className="p-3">❌ Nevypláce (jen sankce)</td>
                  </tr>
                  <tr className="border-b border-gray-200">
                    <td className="p-3 font-medium">Dostupnost</td>
                    <td className="p-3">✅ Online formulář + regionální pobočky</td>
                    <td className="p-3">✅ Online formulář + ústředí Praha</td>
                  </tr>
                </tbody>
              </table>
            </div>

            <Card className="border-l-4 border-l-blue-500 bg-blue-50 mt-4">
              <CardContent className="p-6">
                <p className="font-semibold mb-2">👉 Kdy zvolit ČOI:</p>
                <ul className="space-y-2">
                  <li className="flex items-start gap-2">
                    <CheckCircle className="h-5 w-5 text-green-600 flex-shrink-0 mt-0.5" />
                    <span>Problém není primárně o ES 261/2004 (např. nepřehledné poplatky za zavazadlo)</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="h-5 w-5 text-green-600 flex-shrink-0 mt-0.5" />
                    <span>Podezření na klamavou reklamu nebo nekalé obchodní praktiky</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="h-5 w-5 text-green-600 flex-shrink-0 mt-0.5" />
                    <span>Chcete alternativu k ÚCL nebo druhý názor</span>
                  </li>
                </ul>

                <p className="font-semibold mb-2 mt-4">👉 Kdy zvolit ÚCL:</p>
                <ul className="space-y-2">
                  <li className="flex items-start gap-2">
                    <CheckCircle className="h-5 w-5 text-green-600 flex-shrink-0 mt-0.5" />
                    <span>Zpoždění, zrušení nebo odmítnutí nástupu (ES 261/2004)</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="h-5 w-5 text-green-600 flex-shrink-0 mt-0.5" />
                    <span>Spor o mimořádné okolnosti nebo výši kompenzace</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="h-5 w-5 text-green-600 flex-shrink-0 mt-0.5" />
                    <span>Chcete maximální leteckou specializaci</span>
                  </li>
                </ul>
              </CardContent>
            </Card>
          </section>

          <section className="space-y-6">
            <h2 className="text-3xl font-bold">Jak podat stížnost u ČOI — krok za krokem</h2>
            
            <div className="space-y-4">
              <Card>
                <CardContent className="p-6">
                  <h3 className="text-xl font-bold mb-3 flex items-center gap-2">
                    <span className="bg-primary text-primary-foreground rounded-full w-8 h-8 flex items-center justify-center text-sm">1</span>
                    Zkuste nejprve reklamaci přímo u aeroliny
                  </h3>
                  <p>
                    ČOI vyžaduje, abyste <strong>nejprve kontaktovali aerolinu</strong> a pokusili se o řešení. Připravte si důkaz o podání reklamace a odpovědi (nebo neodpovědi) aeroliny.
                  </p>
                </CardContent>
              </Card>

              <Card>
                <CardContent className="p-6">
                  <h3 className="text-xl font-bold mb-3 flex items-center gap-2">
                    <span className="bg-primary text-primary-foreground rounded-full w-8 h-8 flex items-center justify-center text-sm">2</span>
                    Připravte dokumentaci
                  </h3>
                  <p className="mb-3">Pro podání stížnosti budete potřebovat:</p>
                  <ul className="list-disc list-inside space-y-2 ml-4">
                    <li>Potvrzení rezervace (booking confirmation)</li>
                    <li>Palubní vstupenky (boarding passes)</li>
                    <li>Korespondenci s aerolinkou (e-maily, odpovědi, důkazy o neodpovědi)</li>
                    <li>Doklady o dalších nákladech (hotel, jídlo, taxi — pokud relevantní)</li>
                    <li>Důkazy o klamavé reklamě nebo nepřehledných podmínkách (screenshoty webu, smlouva apod.)</li>
                  </ul>
                </CardContent>
              </Card>

              <Card>
                <CardContent className="p-6">
                  <h3 className="text-xl font-bold mb-3 flex items-center gap-2">
                    <span className="bg-primary text-primary-foreground rounded-full w-8 h-8 flex items-center justify-center text-sm">3</span>
                    Vyplňte online formulář ČOI
                  </h3>
                  <p className="mb-3">
                    ČOI nabízí <strong>online systém podávání podnětů</strong> na <a href="https://www.coi.cz" target="_blank" rel="noopener noreferrer" className="text-primary hover:underline">coi.cz</a>. Formulář obsahuje:
                  </p>
                  <ul className="list-disc list-inside space-y-2 ml-4">
                    <li>Vaše kontaktní údaje</li>
                    <li>Identifikaci podnikatele (název aeroliny, IČO pokud znáte)</li>
                    <li>Popis problému a kroků, které jste již podnikli</li>
                    <li>Přílohy (dokumenty, screenshoty)</li>
                  </ul>
                  <p className="mt-3">
                    Můžete také <strong>podat stížnost osobně</strong> na některé z regionálních inspektorátů ČOI.
                  </p>
                </CardContent>
              </Card>

              <Card>
                <CardContent className="p-6">
                  <h3 className="text-xl font-bold mb-3 flex items-center gap-2">
                    <span className="bg-primary text-primary-foreground rounded-full w-8 h-8 flex items-center justify-center text-sm">4</span>
                    Čekejte na odpověď a vyšetřování
                  </h3>
                  <p>
                    ČOI potvrdí přijetí podnětu a zařadí ho do evidence. Standardní lhůta pro vyřízení je <strong>30-60 dnů</strong>, ale složitější případy mohou trvat déle. ČOI může:
                  </p>
                  <ul className="list-disc list-inside space-y-2 ml-4 mt-2">
                    <li>Provést kontrolu u aeroliny</li>
                    <li>Uložit pokutu za porušení zákona</li>
                    <li>Doporučit nápravu nebo uzavřít případ bez sankce</li>
                  </ul>
                </CardContent>
              </Card>

              <Card>
                <CardContent className="p-6">
                  <h3 className="text-xl font-bold mb-3 flex items-center gap-2">
                    <span className="bg-primary text-primary-foreground rounded-full w-8 h-8 flex items-center justify-center text-sm">5</span>
                    Co se stane po vyšetřování?
                  </h3>
                  <p>
                    ČOI vám sdělí výsledek vyšetřování. Pokud zjistí porušení zákona, může aerolině uložit pokutu (která však nejde vám, ale do státního rozpočtu). Pro <strong>samotné vymožení kompenzace</strong> budete muset:
                  </p>
                  <ul className="list-disc list-inside space-y-2 ml-4 mt-2">
                    <li>Pokračovat v komunikaci s aerolinkou (nyní s podporou závěru ČOI)</li>
                    <li>Využít služeb <a href="/cs/blog/claimwinger-airhelp-flightright-srovnani" className="text-primary hover:underline">claim company</a> (např. ClaimWinger)</li>
                    <li>Podat <a href="/cs/blog/evropsky-formular-drobnych-naroku-pouziti" className="text-primary hover:underline">evropský formulář drobných nároků</a> k soudu</li>
                  </ul>
                </CardContent>
              </Card>
            </div>
          </section>

          <section className="space-y-6">
            <h2 className="text-3xl font-bold">Další možnosti vedle ČOI</h2>
            <p>
              Pokud vám proces přes ČOI nebo ÚCL připadá zdlouhavý nebo nejste si jistí výsledkem, zvažte tyto alternativy:
            </p>
            <div className="grid md:grid-cols-2 gap-4">
              <Card>
                <CardContent className="p-6">
                  <h3 className="text-lg font-bold mb-2">
                    <a href="/cs/blog/adr-mimosoudni-reseni-sporu-aerolinka" className="text-primary hover:underline">
                      ADR (mimosoudní řešení sporů)
                    </a>
                  </h3>
                  <p className="text-sm">
                    Rychlejší a levnější než soud — akreditované subjekty ADR mohou zprostředkovat dohodu mezi vámi a aerolinkou.
                  </p>
                </CardContent>
              </Card>
              <Card>
                <CardContent className="p-6">
                  <h3 className="text-lg font-bold mb-2">
                    <a href="/cs/blog/evropsky-formular-drobnych-naroku-pouziti" className="text-primary hover:underline">
                      Evropský formulář drobných nároků
                    </a>
                  </h3>
                  <p className="text-sm">
                    Pro nároky do €5 000 můžete využít zjednodušené soudní řízení bez nutnosti advokáta.
                  </p>
                </CardContent>
              </Card>
              <Card>
                <CardContent className="p-6">
                  <h3 className="text-lg font-bold mb-2">
                    <a href="/cs/blog/sami-vs-claim-company-kdy-podat-sam" className="text-primary hover:underline">
                      Claim company (no-win-no-fee)
                    </a>
                  </h3>
                  <p className="text-sm">
                    ClaimWinger, AirHelp nebo Flightright vyřídí celý případ za vás — platíte jen v případě úspěchu (obvykle 22-30 % provize).
                  </p>
                </CardContent>
              </Card>
              <Card>
                <CardContent className="p-6">
                  <h3 className="text-lg font-bold mb-2">
                    <a href="/cs/blog/advokat-vs-claim-company-co-se-vyplati" className="text-primary hover:underline">
                      Advokát
                    </a>
                  </h3>
                  <p className="text-sm">
                    Pro složitější případy nebo spory o vyšší částky může být advokát nejlepší volbou — obvykle dražší než claim company, ale maximální právní zástupnost.
                  </p>
                </CardContent>
              </Card>
            </div>
          </section>

          {/* FAQ Section */}
          <section className="space-y-6">
            <h2 className="text-3xl font-bold">Často kladené otázky (FAQ)</h2>
            
            <div className="space-y-4">
              <Card>
                <CardContent className="p-6">
                  <h3 className="text-xl font-bold mb-3">Co je Česká obchodní inspekce (ČOI)?</h3>
                  <p>
                    ČOI je státní orgán dozorující dodržování právních předpisů v oblasti ochrany spotřebitele. Vyřizuje stížnosti na podnikatele včetně aerolinek a může uložit pokutu za porušení zákonů.
                  </p>
                </CardContent>
              </Card>

              <Card>
                <CardContent className="p-6">
                  <h3 className="text-xl font-bold mb-3">V čem se ČOI liší od ÚCL?</h3>
                  <p>
                    ÚCL (Úřad pro civilní letectví) se specializuje na bezpečnost letového provozu a nařízení ES 261/2004. ČOI má širší mandát — řeší i nekalé obchodní praktiky, ale má menší leteckou specializaci než ÚCL.
                  </p>
                </CardContent>
              </Card>

              <Card>
                <CardContent className="p-6">
                  <h3 className="text-xl font-bold mb-3">Kdy se obrátit na ČOI místo ÚCL?</h3>
                  <p>
                    Na ČOI se obraťte, pokud jde o obecný spotřebitelský spor (např. nepřehledné poplatky, klamavá reklama) nebo pokud chcete alternativu k ÚCL. Pro specializované otázky ES 261/2004 je však ÚCL vhodnější volbou.
                  </p>
                </CardContent>
              </Card>

              <Card>
                <CardContent className="p-6">
                  <h3 className="text-xl font-bold mb-3">Může ČOI přinutit aerolinu vyplatit kompenzaci?</h3>
                  <p>
                    Ne, ČOI nemá pravomoc nařídit výplatu konkrétní částky cestujícímu. Může ale uložit pokutu aerolince nebo doporučit nápravu, což vytváří tlak na vyřešení sporu.
                  </p>
                </CardContent>
              </Card>
            </div>
          </section>

          {/* Final CTA */}
          <section className="bg-gradient-to-br from-blue-50 to-indigo-50 rounded-lg p-8 text-center">
            <div className="max-w-2xl mx-auto space-y-4">
              <AlertTriangle className="h-12 w-12 text-primary mx-auto" />
              <h2 className="text-2xl font-bold">
                Nechcete čekat měsíce na vyřízení u ČOI nebo ÚCL?
              </h2>
              <p className="text-muted-foreground">
                ClaimWinger vyřídí celý váš nárok na kompenzaci rychle a efektivně. Platíte jen v případě úspěchu — žádné skryté poplatky.
              </p>
              <Button 
                size="lg" 
                className="gap-2"
                onClick={() => window.open('https://claimwinger.com/cs/zpozdeny-let?utm_source=problemlot&utm_medium=blog&utm_campaign=cs-coi-stiznosti', '_blank')}
              >
                Zkontrolovat nárok zdarma
                <ArrowRight className="h-5 w-5" />
              </Button>
              <p className="text-sm text-muted-foreground">
                ✓ Žádné poplatky předem  ✓ Vyřízení do 24 hodin  ✓ Provize až 22 %
              </p>
            </div>
          </section>

        </div>
      </article>
    </Layout>
  );
}
