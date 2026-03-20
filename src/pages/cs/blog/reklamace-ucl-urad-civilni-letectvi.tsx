import { Layout } from "@/components/Layout";
import { SEO } from "@/components/SEO";
import { ArrowRight, Plane, Scale, FileText, Clock, AlertTriangle } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { generateFAQSchema, generateArticleSchema, generateBreadcrumbSchema } from "@/lib/schemaGenerator";

export default function ReklamaceUCLUradCivilniLetectvi() {
  const faqSchema = generateFAQSchema([
    {
      question: "Co je ÚCL a jakou má pravomoc?",
      answer: "Úřad pro civilní letectví (ÚCL) je český státní úřad dohlížející na dodržování předpisů v civilním letectví. ÚCL může vyšetřovat stížnosti a ukládat sankce aerolinám, ale přímo nevypláce kompenzace cestujícím."
    },
    {
      question: "Kdy se má smysl obrátit na ÚCL?",
      answer: "Na ÚCL se obraťte, pokud aerolinka ignoruje vaši reklamaci déle než 6-8 týdnů nebo odmítá kompenzaci bez řádného zdůvodnění. ÚCL může vyvolat tlak na aerolinu, ale samotné vypořádání pohledávky pak běží přes aerolinu nebo soud."
    },
    {
      question: "Jak dlouho trvá vyřízení stížnosti u ÚCL?",
      answer: "ÚCL obvykle odpovídá do 30-60 dnů od doručení kompletní dokumentace. Samotné vyšetřování může trvat i několik měsíců podle složitosti případu."
    },
    {
      question: "Může ÚCL přinutit aerolinu zaplatit?",
      answer: "ÚCL může aerolinu upozornit na porušení nařízení ES 261/2004 a uložit sankci, ale nemá pravomoc nařídit výplatu kompenzace konkrétnímu cestujícímu. Pro vymožení peněz je nutné řešení přes claim company nebo soud."
    },
    {
      question: "Je potřeba platit za podání stížnosti na ÚCL?",
      answer: "Ne, podání stížnosti u ÚCL je bezplatné. Úřad však nevypláce kompenzace — pro získání peněz je třeba dál komunikovat s aerolinkou nebo využít claim company."
    }
  ]);

  const articleSchema = generateArticleSchema({
    title: "Jak podat reklamaci u ÚCL (Úřad pro civilní letectví)?",
    description: "Kompletní průvodce podáním stížnosti u Úřadu pro civilní letectví. Kdy se obrátit na ÚCL, jak správně vyplnit formulář a co očekávat.",
    publishDate: "2026-03-12",
    modifiedDate: "2026-03-12",
    url: "https://problemlot.pl/cs/blog/reklamace-ucl-urad-civilni-letectvi"
  });

  const breadcrumbSchema = generateBreadcrumbSchema([
    { name: "Domů", url: "https://problemlot.pl/cs" },
    { name: "Blog", url: "https://problemlot.pl/cs/blog" },
    { name: "Reklamace u ÚCL", url: "https://problemlot.pl/cs/blog/reklamace-ucl-urad-civilni-letectvi" }
  ]);

  return (
    <Layout>
      <SEO 
        title="Jak podat reklamaci u ÚCL (Úřad pro civilní letectví)? | 2026"
        description="Kompletní průvodce podáním stížnosti u Úřadu pro civilní letectví. Kdy se obrátit na ÚCL, jak správně vyplnit formulář a co očekávat."
        url="https://problemlot.pl/cs/blog/reklamace-ucl-urad-civilni-letectvi"
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
            <span>Reklamace u ÚCL</span>
          </nav>

          {/* Header */}
          <header>
            <h1 className="text-4xl font-bold mb-4">
              Jak podat reklamaci u ÚCL (Úřad pro civilní letectví)?
            </h1>
            <p className="text-xl text-muted-foreground">
              Kompletní průvodce podáním stížnosti u Úřadu pro civilní letectví — kdy se obrátit, jak vyplnit formulář a co očekávat
            </p>
            <div className="flex items-center gap-4 mt-4 text-sm text-muted-foreground">
              <time dateTime="2026-03-12">12. března 2026</time>
              <span>•</span>
              <span>13 min čtení</span>
            </div>
          </header>

          {/* Intro */}
          <section className="prose prose-lg max-w-none">
            <p className="lead text-lg">
              Pokud vám aerolinka po několika týdnech stále neodpovídá na reklamaci nebo bez rozumného vysvětlení odmítá kompenzaci za zpoždění či zrušení letu, může být na místě obrátit se na <strong>Úřad pro civilní letectví (ÚCL)</strong>. ÚCL je český státní úřad, který dohlíží na dodržování předpisů v civilním letectví a vyšetřuje případy porušení práv cestujících podle <a href="/cs/blog/narizeni-es-261-2004" className="text-primary hover:underline">nařízení ES 261/2004</a>.
            </p>
            <p>
              Je ale důležité vědět, že <strong>ÚCL kompenzace sám nevypláce</strong> — jeho rolí je kontrolovat chování aerolinek a v případě zjištěného pochybení uložit pokutu nebo doporučit nápravu. Pro samotné získání peněz je stále nutné komunikovat s aerolinkou nebo využít služby claim company. V tomto článku vysvětlíme, kdy a jak se na ÚCL obrátit, jaké dokumenty připravit a co od celého procesu čekat.
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
                      <td className="p-3 text-sm">Praha–Řím, Brno–Paříž</td>
                    </tr>
                    <tr className="border-b border-blue-100">
                      <td className="p-3">1 500–3 500 km</td>
                      <td className="p-3 font-bold text-primary">€400</td>
                      <td className="p-3 text-sm">Praha–Madrid, Praha–Tel Aviv</td>
                    </tr>
                    <tr>
                      <td className="p-3">Nad 3 500 km</td>
                      <td className="p-3 font-bold text-primary">€600</td>
                      <td className="p-3 text-sm">Praha–New York, Praha–Bangkok</td>
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
            <h2 className="text-3xl font-bold">Co je Úřad pro civilní letectví (ÚCL)?</h2>
            <p>
              <strong>Úřad pro civilní letectví České republiky (ÚCL)</strong> je státní organizace zřízená podle zákona č. 49/1997 Sb. Jeho hlavní úlohou je:
            </p>
            <ul className="list-disc list-inside space-y-2 ml-4">
              <li><strong>Dozor nad bezpečností letového provozu</strong> — certifikace letišť, licencování personálu atd.</li>
              <li><strong>Kontrola dodržování práv cestujících</strong> — vyšetřování stížností na aerolinky podle nařízení ES 261/2004</li>
              <li><strong>Ukládání sankcí aerolinám</strong> — pokud ÚCL zjistí porušení předpisů, může uložit pokutu až několik milionů Kč</li>
            </ul>
            <p>
              ÚCL tedy <strong>nevystupuje jako soud</strong> a nemá pravomoc nařídit aerolince, aby cestujícímu vyplatila konkrétní částku. Nicméně jeho vyšetřování a případná pokuta nebo veřejné upozornění mohou vytvořit tlak na aerolinu, aby s vámi jednala korektněji.
            </p>
          </section>

          <section className="space-y-6">
            <h2 className="text-3xl font-bold">Kdy se vyplatí obrátit na ÚCL?</h2>
            <p>
              Podání stížnosti na ÚCL dává smysl v těchto situacích:
            </p>
            <Card className="border-l-4 border-l-blue-500 bg-blue-50">
              <CardContent className="p-6">
                <ul className="space-y-3">
                  <li className="flex items-start gap-2">
                    <ArrowRight className="h-5 w-5 text-primary flex-shrink-0 mt-0.5" />
                    <span><strong>Aerolinka neodpovídá</strong> — Po 6-8 týdnech od podání reklamace stále nemáte žádnou odpověď nebo dostáváte pouze automatické e-maily.</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <ArrowRight className="h-5 w-5 text-primary flex-shrink-0 mt-0.5" />
                    <span><strong>Neopodstatněná odmítnutí</strong> — Aerolinka tvrdí mimořádné okolnosti (např. počasí), ale vy máte důkazy, že šlo o technickou závadu nebo operativní problém.</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <ArrowRight className="h-5 w-5 text-primary flex-shrink-0 mt-0.5" />
                    <span><strong>Systematické porušování práv</strong> — Aerolinka dlouhodobě nebo opakovaně odmítá kompenzace bez řádného vysvětlení.</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <ArrowRight className="h-5 w-5 text-primary flex-shrink-0 mt-0.5" />
                    <span><strong>Chcete tlak na aerolinu</strong> — I když ÚCL přímo nic nevyplatí, jeho oficiální vyšetřování může aerolinu motivovat k dialogu.</span>
                  </li>
                </ul>
              </CardContent>
            </Card>
            <p>
              <strong>Nevyplatí se</strong> obracet na ÚCL, pokud aerolinka odpověděla rychle a její zdůvodnění je technicky v pořádku (např. opravdu šlo o potvrzenou mimořádnou okolnost). V takovém případě je lepší konzultovat případ s <a href="/cs/blog/advokat-vs-claim-company-co-se-vyplati" className="text-primary hover:underline">claim company</a> nebo přímo zvážit podání <a href="/cs/blog/evropsky-formular-drobnych-naroku-pouziti" className="text-primary hover:underline">evropského formuláře drobných nároků</a>.
            </p>
          </section>

          <section className="space-y-6">
            <h2 className="text-3xl font-bold">Jak podat stížnost u ÚCL — krok za krokem</h2>
            
            <div className="space-y-4">
              <Card>
                <CardContent className="p-6">
                  <h3 className="text-xl font-bold mb-3 flex items-center gap-2">
                    <span className="bg-primary text-primary-foreground rounded-full w-8 h-8 flex items-center justify-center text-sm">1</span>
                    Zkuste nejprve reklamaci přímo u aeroliny
                  </h3>
                  <p>
                    Před obrácením na ÚCL je nutné <strong>nejprve kontaktovat aerolinu</strong> a dát jí čas na odpověď (obvykle 6-8 týdnů). ÚCL vyžaduje, abyste měli důkaz o podání reklamace a odpovědi (nebo neodpovědi) aeroliny.
                  </p>
                </CardContent>
              </Card>

              <Card>
                <CardContent className="p-6">
                  <h3 className="text-xl font-bold mb-3 flex items-center gap-2">
                    <span className="bg-primary text-primary-foreground rounded-full w-8 h-8 flex items-center justify-center text-sm">2</span>
                    Připravte kompletní dokumentaci
                  </h3>
                  <p className="mb-3">Pro podání stížnosti budete potřebovat:</p>
                  <ul className="list-disc list-inside space-y-2 ml-4">
                    <li>Potvrzení rezervace (booking confirmation)</li>
                    <li>Palubní vstupenky (boarding passes)</li>
                    <li>Korespondenci s aerolinkou (reklamační e-mail + odpověď nebo důkaz, že neodpověděla)</li>
                    <li>Certifikát o zpoždění/zrušení (pokud ho máte)</li>
                    <li>Další důkazy (fotky z letiště, SMS notifikace od aeroliny apod.)</li>
                  </ul>
                </CardContent>
              </Card>

              <Card>
                <CardContent className="p-6">
                  <h3 className="text-xl font-bold mb-3 flex items-center gap-2">
                    <span className="bg-primary text-primary-foreground rounded-full w-8 h-8 flex items-center justify-center text-sm">3</span>
                    Vyplňte formulář ÚCL
                  </h3>
                  <p className="mb-3">
                    ÚCL má online <strong>„Podněty a stížnosti"</strong> systém na svých webových stránkách <a href="https://www.caa.cz" target="_blank" rel="noopener noreferrer" className="text-primary hover:underline">caa.cz</a>. Formulář zahrnuje:
                  </p>
                  <ul className="list-disc list-inside space-y-2 ml-4">
                    <li>Vaše kontaktní údaje</li>
                    <li>Detaily letu (datum, číslo letu, trasa, čas zpoždění)</li>
                    <li>Popis problému a kroků, které jste již podnikli</li>
                    <li>Přílohy (naskenované dokumenty)</li>
                  </ul>
                </CardContent>
              </Card>

              <Card>
                <CardContent className="p-6">
                  <h3 className="text-xl font-bold mb-3 flex items-center gap-2">
                    <span className="bg-primary text-primary-foreground rounded-full w-8 h-8 flex items-center justify-center text-sm">4</span>
                    Odešlete a čekejte na odpověď
                  </h3>
                  <p>
                    Po odeslání dostanete potvrzovací e-mail s číslem jednacím. ÚCL obvykle <strong>do 30-60 dnů</strong> potvrdí přijetí a informuje vás o dalších krocích. Samotné vyšetřování může trvat i několik měsíců.
                  </p>
                </CardContent>
              </Card>

              <Card>
                <CardContent className="p-6">
                  <h3 className="text-xl font-bold mb-3 flex items-center gap-2">
                    <span className="bg-primary text-primary-foreground rounded-full w-8 h-8 flex items-center justify-center text-sm">5</span>
                    Co se stane po vyšetřování?
                  </h3>
                  <p className="mb-3">
                    ÚCL může:
                  </p>
                  <ul className="list-disc list-inside space-y-2 ml-4">
                    <li><strong>Upozornit aerolinu</strong> na porušení předpisů a požádat o nápravu</li>
                    <li><strong>Uložit pokutu</strong> (ta však nejde cestujícímu, ale do státního rozpočtu)</li>
                    <li><strong>Uzavřít případ bez sankce</strong>, pokud nenajde dostatek důkazů</li>
                  </ul>
                  <p className="mt-3">
                    <strong>Kompenzaci</strong> vám ÚCL nevyplatí — pro získání peněz musíte dál komunikovat s aerolinkou nebo využít <a href="/cs/blog/sami-vs-claim-company-kdy-podat-sam" className="text-primary hover:underline">claim company</a>.
                  </p>
                </CardContent>
              </Card>
            </div>
          </section>

          <section className="space-y-6">
            <h2 className="text-3xl font-bold">Alternativy k ÚCL</h2>
            <p>
              Pokud vám proces přes ÚCL připadá zdlouhavý nebo si nejste jistí výsledkem, zvažte tyto možnosti:
            </p>
            <div className="grid md:grid-cols-2 gap-4">
              <Card>
                <CardContent className="p-6">
                  <h3 className="text-lg font-bold mb-2">
                    <a href="/cs/blog/coi-stiznosti-aerolinky-kdy-jak" className="text-primary hover:underline">
                      Česká obchodní inspekce (ČOI)
                    </a>
                  </h3>
                  <p className="text-sm">
                    ČOI řeší spory spotřebitelů s obchodníky. Má širší mandát než ÚCL, ale kompenzace také nevypláce přímo.
                  </p>
                </CardContent>
              </Card>
              <Card>
                <CardContent className="p-6">
                  <h3 className="text-lg font-bold mb-2">
                    <a href="/cs/blog/adr-mimosoudni-reseni-sporu-aerolinka" className="text-primary hover:underline">
                      ADR (mimosoudní řešení sporů)
                    </a>
                  </h3>
                  <p className="text-sm">
                    Akreditované subjekty ADR mohou zprostředkovat dohodu mezi vámi a aerolinkou rychleji než soud.
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
                    Pro nároky do €5 000 můžete využít zjednodušené řízení v civilním soudu.
                  </p>
                </CardContent>
              </Card>
              <Card>
                <CardContent className="p-6">
                  <h3 className="text-lg font-bold mb-2">
                    <a href="/cs/blog/claimwinger-airhelp-flightright-srovnani" className="text-primary hover:underline">
                      Claim company (no-win-no-fee)
                    </a>
                  </h3>
                  <p className="text-sm">
                    ClaimWinger, AirHelp nebo Flightright vyřídí celý případ za vás — platíte jen v případě úspěchu (22-30 % provize).
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
                  <h3 className="text-xl font-bold mb-3">Co je ÚCL a jakou má pravomoc?</h3>
                  <p>
                    Úřad pro civilní letectví (ÚCL) je český státní úřad dohlížející na dodržování předpisů v civilním letectví. ÚCL může vyšetřovat stížnosti a ukládat sankce aerolinám, ale přímo nevypláce kompenzace cestujícím.
                  </p>
                </CardContent>
              </Card>

              <Card>
                <CardContent className="p-6">
                  <h3 className="text-xl font-bold mb-3">Kdy se má smysl obrátit na ÚCL?</h3>
                  <p>
                    Na ÚCL se obraťte, pokud aerolinka ignoruje vaši reklamaci déle než 6-8 týdnů nebo odmítá kompenzaci bez řádného zdůvodnění. ÚCL může vyvolat tlak na aerolinu, ale samotné vypořádání pohledávky pak běží přes aerolinu nebo soud.
                  </p>
                </CardContent>
              </Card>

              <Card>
                <CardContent className="p-6">
                  <h3 className="text-xl font-bold mb-3">Jak dlouho trvá vyřízení stížnosti u ÚCL?</h3>
                  <p>
                    ÚCL obvykle odpovídá do 30-60 dnů od doručení kompletní dokumentace. Samotné vyšetřování může trvat i několik měsíců podle složitosti případu.
                  </p>
                </CardContent>
              </Card>

              <Card>
                <CardContent className="p-6">
                  <h3 className="text-xl font-bold mb-3">Může ÚCL přinutit aerolinu zaplatit?</h3>
                  <p>
                    ÚCL může aerolinu upozornit na porušení nařízení ES 261/2004 a uložit sankci, ale nemá pravomoc nařídit výplatu kompenzace konkrétnímu cestujícímu. Pro vymožení peněz je nutné řešení přes claim company nebo soud.
                  </p>
                </CardContent>
              </Card>

              <Card>
                <CardContent className="p-6">
                  <h3 className="text-xl font-bold mb-3">Je potřeba platit za podání stížnosti na ÚCL?</h3>
                  <p>
                    Ne, podání stížnosti u ÚCL je bezplatné. Úřad však nevypláce kompenzace — pro získání peněz je třeba dál komunikovat s aerolinkou nebo využít claim company.
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
                Nechcete čekat měsíce na vyřízení u ÚCL?
              </h2>
              <p className="text-muted-foreground">
                ClaimWinger vyřídí celý váš nárok na kompenzaci rychle a efektivně. Platíte jen v případě úspěchu — žádné skryté poplatky.
              </p>
              <Button 
                size="lg" 
                className="gap-2"
                onClick={() => window.open('https://claimwinger.com/cs/zpozdeny-let?utm_source=problemlot&utm_medium=blog&utm_campaign=cs-ucl-reklamace', '_blank')}
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
