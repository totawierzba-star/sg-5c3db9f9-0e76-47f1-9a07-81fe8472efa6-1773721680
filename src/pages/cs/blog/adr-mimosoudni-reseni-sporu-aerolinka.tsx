import { Layout } from "@/components/Layout";
import { SEO } from "@/components/SEO";
import { ArrowRight, Scale, FileText, Clock, AlertTriangle, CheckCircle, Users } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { generateFAQSchema, generateArticleSchema, generateBreadcrumbSchema } from "@/lib/schemaGenerator";
import Link from "next/link";

export default function ADRMimosoudniReseniSporuAerolinka() {
  const faqSchema = generateFAQSchema([
    {
      question: "Co je ADR a jak funguje?",
      answer: "ADR (Alternative Dispute Resolution) je mimosoudní řešení sporů — rychlejší a levnější alternativa k soudu. Nezávislý subjekt zprostředkuje dohodu mezi vámi a aerolinkou bez nutnosti advokáta."
    },
    {
      question: "Je ADR závazné pro aerolinie?",
      answer: "Účast v ADR je pro aerolinky dobrovolná, ale výsledek může být závazný podle typu procedury (mediace vs. arbitráž). Některé aerolinie mají povinnost účastnit se certifikovaných ADR subjektů."
    },
    {
      question: "Kolik stojí ADR?",
      answer: "Většina akreditovaných ADR subjektů v ČR je pro spotřebitele bezplatná nebo má symbolický poplatek (€20-50). Náklady hradí aerolinka nebo sdílené mezi stranami."
    },
    {
      question: "Jak dlouho trvá ADR?",
      answer: "Typicky 60-90 dní od podání — výrazně rychleji než soudní řízení (6-12 měsíců). Mediace může být vyřešena i během 30 dní."
    },
    {
      question: "Co když ADR neuspěje?",
      answer: "Pokud ADR nedospěje k dohodě, stále můžete podat žalobu k soudu. ADR nevylučuje další právní kroky — je to pouze předsoudní pokus o vyřešení."
    }
  ]);

  const articleSchema = generateArticleSchema({
    title: "ADR a mimosoudní řešení sporů s aerolinkou v ČR",
    description: "Kompletní průvodce ADR procesem pro spory s aerolinkami v České republice. Rychlejší a levnější než soud — zjistěte jak postupovat.",
    publishDate: "2026-03-12",
    modifiedDate: "2026-03-12",
    url: "https://problemlot.pl/cs/blog/adr-mimosoudni-reseni-sporu-aerolinka"
  });

  const breadcrumbSchema = generateBreadcrumbSchema([
    { name: "Domů", url: "https://problemlot.pl/cs" },
    { name: "Blog", url: "https://problemlot.pl/cs/blog" },
    { name: "ADR mimosoudní řešení sporů", url: "https://problemlot.pl/cs/blog/adr-mimosoudni-reseni-sporu-aerolinka" }
  ]);

  return (
    <Layout>
      <SEO 
        title="ADR a mimosoudní řešení sporů s aerolinkou v ČR | 2026"
        description="Kompletní průvodce ADR procesem pro spory s aerolinkami v České republice. Rychlejší a levnější než soud — zjistěte jak postupovat."
        url="https://problemlot.pl/cs/blog/adr-mimosoudni-reseni-sporu-aerolinka"
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
            <Link href="/cs" className="hover:text-primary">Domů</Link>
            <span className="mx-2">/</span>
            <Link href="/cs/blog" className="hover:text-primary">Blog</Link>
            <span className="mx-2">/</span>
            <span>ADR mimosoudní řešení sporů</span>
          </nav>

          {/* Header */}
          <header>
            <h1 className="text-4xl font-bold mb-4">
              ADR a mimosoudní řešení sporů s aerolinkou v ČR
            </h1>
            <p className="text-xl text-muted-foreground">
              Kompletní průvodce ADR procesem — rychlejší a levnější než soud, bez nutnosti advokáta
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
              Pokud vám aerolinka odmítá kompenzaci za <Link href="/cs/blog/narizeni-es-261-2004" className="text-primary hover:underline">zpoždění nebo zrušení letu</Link> a nechcete se pouštět do zdlouhavého soudního sporu, máte další možnost: <strong>ADR (Alternative Dispute Resolution) — mimosoudní řešení sporů</strong>. Tento proces je rychlejší, levnější a méně formální než klasická žaloba, přičemž stále nabízí nezávislé posouzení vašeho případu.
            </p>
            <p>
              V České republice existuje několik <strong>akreditovaných ADR subjektů</strong>, které se specializují na spotřebitelské spory včetně těch s aerolinkami. ADR může být zejména užitečné, pokud máte jasný nárok podle nařízení ES 261/2004, ale aerolinka tvrdí mimořádné okolnosti nebo prostě ignoruje vaši reklamaci. V tomto článku vysvětlíme, jak ADR funguje, kdy ho využít a jak postupovat krok za krokem.
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
                      <td className="p-3 text-sm">Praha–Amsterdam, Brno–Mnichov</td>
                    </tr>
                    <tr className="border-b border-blue-100">
                      <td className="p-3">1 500–3 500 km</td>
                      <td className="p-3 font-bold text-primary">€400</td>
                      <td className="p-3 text-sm">Praha–Madrid, Praha–Atény</td>
                    </tr>
                    <tr>
                      <td className="p-3">Nad 3 500 km</td>
                      <td className="p-3 font-bold text-primary">€600</td>
                      <td className="p-3 text-sm">Praha–New York, Praha–Dubai</td>
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
            <h2 className="text-3xl font-bold">Co je ADR a jak funguje?</h2>
            <p>
              <strong>ADR (Alternative Dispute Resolution)</strong> je souhrnný termín pro mimosoudní metody řešení sporů. V kontextu letecké dopravy to znamená:
            </p>
            <ul className="list-disc list-inside space-y-2 ml-4">
              <li><strong>Mediace</strong> — nezávislý mediátor pomáhá vám a aerolince najít kompromis (nevydává rozsudek)</li>
              <li><strong>Arbitráž</strong> — nezávislý arbitr posuzuje důkazy a vydává závazné rozhodnutí</li>
              <li><strong>Smírčí řízení</strong> — kombinace mediace a arbitráže, může přejít z jedné do druhé</li>
            </ul>
            <p>
              Klíčová výhoda ADR je <strong>rychlost a nízké náklady</strong>. Zatímco soudní řízení může trvat 6-12 měsíců a vyžadovat advokáta, ADR typicky trvá 60-90 dní a je často bezplatné nebo má symbolický poplatek.
            </p>
          </section>

          <section className="space-y-6">
            <h2 className="text-3xl font-bold">ADR subjekty v České republice</h2>
            <p>
              V ČR existuje několik <strong>notifikovaných ADR subjektů</strong> pro spotřebitelské spory. Pro spory s aerolinkami jsou nejrelevantnější:
            </p>
            
            <div className="space-y-4">
              <Card>
                <CardContent className="p-6">
                  <h3 className="text-xl font-bold mb-3 flex items-center gap-2">
                    <Users className="h-6 w-6 text-primary" />
                    1. Česká obchodní inspekce (ČOI) — ADR oddělení
                  </h3>
                  <p className="mb-2">
                    <strong>Typ:</strong> Mediace<br/>
                    <strong>Poplatek:</strong> Zdarma pro spotřebitele<br/>
                    <strong>Kontakt:</strong> <a href="https://www.coi.cz/informace-o-adr/" target="_blank" rel="noopener noreferrer" className="text-primary hover:underline">coi.cz/informace-o-adr</a>
                  </p>
                  <p className="text-sm text-muted-foreground">
                    ČOI nabízí bezplatnou mediaci spotřebitelských sporů včetně letecké dopravy. Aerolinka nemusí účast akceptovat, ale často souhlasí.
                  </p>
                </CardContent>
              </Card>

              <Card>
                <CardContent className="p-6">
                  <h3 className="text-xl font-bold mb-3 flex items-center gap-2">
                    <Scale className="h-6 w-6 text-primary" />
                    2. Arbitrážní centrum při Hospodářské komoře ČR
                  </h3>
                  <p className="mb-2">
                    <strong>Typ:</strong> Arbitráž (závazné rozhodnutí)<br/>
                    <strong>Poplatek:</strong> €50-200 dle výše nároku<br/>
                    <strong>Kontakt:</strong> <a href="https://www.soud.cz" target="_blank" rel="noopener noreferrer" className="text-primary hover:underline">soud.cz</a>
                  </p>
                  <p className="text-sm text-muted-foreground">
                    Vyžaduje souhlas obou stran. Vydává závazné rozhodnutí podobné rozsudku soudu. Rychlejší než klasický soud.
                  </p>
                </CardContent>
              </Card>

              <Card>
                <CardContent className="p-6">
                  <h3 className="text-xl font-bold mb-3 flex items-center gap-2">
                    <FileText className="h-6 w-6 text-primary" />
                    3. Soukromoprávní rozhodci (ADR operátoři)
                  </h3>
                  <p className="mb-2">
                    <strong>Typ:</strong> Mediace nebo arbitráž<br/>
                    <strong>Poplatek:</strong> Různý (€20-100)<br/>
                    <strong>Příklad:</strong> ADR Centrum, s.r.o.
                  </p>
                  <p className="text-sm text-muted-foreground">
                    Soukromé subjekty akreditované Ministerstvem průmyslu a obchodu. Seznam na <a href="https://www.mpo.cz/cz/ochrana-spotrebitele/mimosoudni-reseni-spotrebitelskych-sporu/" target="_blank" rel="noopener noreferrer" className="text-primary hover:underline">mpo.cz</a>.
                  </p>
                </CardContent>
              </Card>
            </div>

            <Card className="border-l-4 border-l-blue-500 bg-blue-50">
              <CardContent className="p-6">
                <p className="font-semibold mb-2">💡 Tip:</p>
                <p>
                  Začněte s <strong>ČOI ADR oddělením</strong> — je bezplatné a má dobré vztahy s většinou aerolinek. Pokud aerolinka odmítá účast, zkuste <Link href="/cs/blog/evropsky-formular-drobnych-naroku-pouziti" className="text-primary hover:underline">evropský formulář drobných nároků</Link> k soudu.
                </p>
              </CardContent>
            </Card>
          </section>

          <section className="space-y-6">
            <h2 className="text-3xl font-bold">Kdy využít ADR místo soudu?</h2>
            
            <div className="grid md:grid-cols-2 gap-4">
              <Card className="border-l-4 border-l-green-500">
                <CardContent className="p-6">
                  <h3 className="text-lg font-bold mb-3 flex items-center gap-2">
                    <CheckCircle className="h-5 w-5 text-green-600" />
                    ADR je vhodné když:
                  </h3>
                  <ul className="space-y-2 text-sm">
                    <li className="flex items-start gap-2">
                      <ArrowRight className="h-4 w-4 text-green-600 flex-shrink-0 mt-0.5" />
                      <span>Nárok je jasný (€250-600), ale aerolinka odmítá</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <ArrowRight className="h-4 w-4 text-green-600 flex-shrink-0 mt-0.5" />
                      <span>Chcete rychlé řešení (60-90 dní vs. 6-12 měsíců u soudu)</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <ArrowRight className="h-4 w-4 text-green-600 flex-shrink-0 mt-0.5" />
                      <span>Nechcete platit advokáta (ADR je často zdarma)</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <ArrowRight className="h-4 w-4 text-green-600 flex-shrink-0 mt-0.5" />
                      <span>Aerolinka komunikuje, ale nenabízí férovou částku</span>
                    </li>
                  </ul>
                </CardContent>
              </Card>

              <Card className="border-l-4 border-l-orange-500">
                <CardContent className="p-6">
                  <h3 className="text-lg font-bold mb-3 flex items-center gap-2">
                    <AlertTriangle className="h-5 w-5 text-orange-600" />
                    Soud je lepší když:
                  </h3>
                  <ul className="space-y-2 text-sm">
                    <li className="flex items-start gap-2">
                      <ArrowRight className="h-4 w-4 text-orange-600 flex-shrink-0 mt-0.5" />
                      <span>Aerolinka odmítá účast v ADR (není povinná)</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <ArrowRight className="h-4 w-4 text-orange-600 flex-shrink-0 mt-0.5" />
                      <span>Spor je komplikovaný (např. missed connection, codeshare)</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <ArrowRight className="h-4 w-4 text-orange-600 flex-shrink-0 mt-0.5" />
                      <span>Chcete právně závazný rozsudek (arbitráž není vždy uznána)</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <ArrowRight className="h-4 w-4 text-orange-600 flex-shrink-0 mt-0.5" />
                      <span>ADR selhalo a potřebujete eskalovat</span>
                    </li>
                  </ul>
                </CardContent>
              </Card>
            </div>

            <p>
              <strong>Alternativa:</strong> Pokud nechcete řešit ADR ani soud sami, využijte <Link href="/cs/blog/claimwinger-airhelp-flightright-srovnani" className="text-primary hover:underline">claim company jako ClaimWinger</Link> — vyřídí celý proces za vás (včetně ADR nebo soudu) na bázi no-win-no-fee.
            </p>
          </section>

          <section className="space-y-6">
            <h2 className="text-3xl font-bold">Jak podat žádost o ADR — krok za krokem</h2>
            
            <div className="space-y-4">
              <Card>
                <CardContent className="p-6">
                  <h3 className="text-xl font-bold mb-3 flex items-center gap-2">
                    <span className="bg-primary text-primary-foreground rounded-full w-8 h-8 flex items-center justify-center text-sm">1</span>
                    Zkuste nejprve reklamaci u aeroliny
                  </h3>
                  <p>
                    ADR subjekty vyžadují důkaz, že jste se <strong>nejprve pokusili vyřešit spor přímo s aerolinkou</strong>. Pošlete <Link href="/cs/blog/jak-podat-reklamaci-krok-za-krokem" className="text-primary hover:underline">řádnou reklamaci</Link> a počkejte alespoň 6-8 týdnů na odpověď.
                  </p>
                </CardContent>
              </Card>

              <Card>
                <CardContent className="p-6">
                  <h3 className="text-xl font-bold mb-3 flex items-center gap-2">
                    <span className="bg-primary text-primary-foreground rounded-full w-8 h-8 flex items-center justify-center text-sm">2</span>
                    Vyberte ADR subjekt
                  </h3>
                  <p className="mb-3">Doporučujeme začít s <strong>ČOI ADR oddělením</strong> (bezplatné):</p>
                  <ul className="list-disc list-inside space-y-2 ml-4">
                    <li>Online formulář: <a href="https://www.coi.cz/informace-o-adr/" target="_blank" rel="noopener noreferrer" className="text-primary hover:underline">coi.cz/informace-o-adr</a></li>
                    <li>E-mail: adr@coi.cz</li>
                    <li>Telefon: +420 296 366 360</li>
                  </ul>
                </CardContent>
              </Card>

              <Card>
                <CardContent className="p-6">
                  <h3 className="text-xl font-bold mb-3 flex items-center gap-2">
                    <span className="bg-primary text-primary-foreground rounded-full w-8 h-8 flex items-center justify-center text-sm">3</span>
                    Připravte dokumentaci
                  </h3>
                  <p className="mb-3">Budete potřebovat:</p>
                  <ul className="list-disc list-inside space-y-2 ml-4">
                    <li>Potvrzení rezervace (booking confirmation)</li>
                    <li>Palubní vstupenky (boarding passes)</li>
                    <li>Korespondenci s aerolinkou (reklamace + odpověď)</li>
                    <li>Certifikát o zpoždění/zrušení (pokud máte)</li>
                    <li>Důkaz o finančním nároku (kalkulace kompenzace)</li>
                  </ul>
                </CardContent>
              </Card>

              <Card>
                <CardContent className="p-6">
                  <h3 className="text-xl font-bold mb-3 flex items-center gap-2">
                    <span className="bg-primary text-primary-foreground rounded-full w-8 h-8 flex items-center justify-center text-sm">4</span>
                    Odešlete žádost a čekejte na odpověď
                  </h3>
                  <p>
                    ADR subjekt <strong>do 30 dnů</strong> potvrdí přijetí a zkontaktuje aerolinu. Aerolinka má obvykle 30 dní na souhlas s účastí v ADR. Pokud souhlasí, proces pokračuje mediací nebo arbitráží.
                  </p>
                </CardContent>
              </Card>

              <Card>
                <CardContent className="p-6">
                  <h3 className="text-xl font-bold mb-3 flex items-center gap-2">
                    <span className="bg-primary text-primary-foreground rounded-full w-8 h-8 flex items-center justify-center text-sm">5</span>
                    Mediace nebo arbitráž
                  </h3>
                  <p className="mb-3">Podle typu ADR:</p>
                  <ul className="list-disc list-inside space-y-2 ml-4">
                    <li><strong>Mediace:</strong> Nezávislý mediátor navrhne kompromis (např. 80% kompenzace). Obě strany mohou odmítnout.</li>
                    <li><strong>Arbitráž:</strong> Arbitr posoudí důkazy a vydá závazné rozhodnutí (podobné rozsudku soudu).</li>
                  </ul>
                  <p className="mt-3">
                    Typická délka: <strong>60-90 dní</strong> od podání žádosti.
                  </p>
                </CardContent>
              </Card>

              <Card>
                <CardContent className="p-6">
                  <h3 className="text-xl font-bold mb-3 flex items-center gap-2">
                    <span className="bg-primary text-primary-foreground rounded-full w-8 h-8 flex items-center justify-center text-sm">6</span>
                    Co když ADR neuspěje?
                  </h3>
                  <p>
                    Pokud aerolinka odmítne účast v ADR nebo mediace nedospěje k dohodě, stále můžete:
                  </p>
                  <ul className="list-disc list-inside space-y-2 ml-4 mt-2">
                    <li>Podat <Link href="/cs/blog/evropsky-formular-drobnych-naroku-pouziti" className="text-primary hover:underline">evropský formulář drobných nároků</Link> k soudu</li>
                    <li>Využít <Link href="/cs/blog/sami-vs-claim-company-kdy-podat-sam" className="text-primary hover:underline">claim company</Link> (ClaimWinger vyřídí i soudní řízení)</li>
                  </ul>
                </CardContent>
              </Card>
            </div>
          </section>

          <section className="space-y-6">
            <h2 className="text-3xl font-bold">ADR vs. Soud vs. Claim Company — srovnání</h2>
            
            <div className="overflow-x-auto">
              <table className="w-full border-collapse">
                <thead>
                  <tr className="bg-blue-50 border-b-2 border-blue-200">
                    <th className="text-left p-3 font-semibold">Kritérium</th>
                    <th className="text-left p-3 font-semibold">ADR</th>
                    <th className="text-left p-3 font-semibold">Soud</th>
                    <th className="text-left p-3 font-semibold">Claim Company</th>
                  </tr>
                </thead>
                <tbody>
                  <tr className="border-b border-gray-200">
                    <td className="p-3 font-medium">Náklady</td>
                    <td className="p-3">€0-100</td>
                    <td className="p-3">€200-1000 (advokát)</td>
                    <td className="p-3">€0 (jen provize při úspěchu)</td>
                  </tr>
                  <tr className="border-b border-gray-200">
                    <td className="p-3 font-medium">Délka</td>
                    <td className="p-3">60-90 dní</td>
                    <td className="p-3">6-12 měsíců</td>
                    <td className="p-3">30-90 dní</td>
                  </tr>
                  <tr className="border-b border-gray-200">
                    <td className="p-3 font-medium">Účast aeroliny</td>
                    <td className="p-3">❌ Dobrovolná</td>
                    <td className="p-3">✅ Povinná</td>
                    <td className="p-3">✅ Claim company vyřídí</td>
                  </tr>
                  <tr className="border-b border-gray-200">
                    <td className="p-3 font-medium">Závaznost</td>
                    <td className="p-3">⚠️ Závisí na typu</td>
                    <td className="p-3">✅ Plně závazné</td>
                    <td className="p-3">✅ Vymáhají soudně</td>
                  </tr>
                  <tr className="border-b border-gray-200">
                    <td className="p-3 font-medium">Nutnost advokáta</td>
                    <td className="p-3">❌ Ne</td>
                    <td className="p-3">⚠️ Doporučeno</td>
                    <td className="p-3">❌ Ne (claim company řeší)</td>
                  </tr>
                  <tr className="border-b border-gray-200">
                    <td className="p-3 font-medium">Úspěšnost</td>
                    <td className="p-3">~60-70%</td>
                    <td className="p-3">~80-90%</td>
                    <td className="p-3">~85-95%</td>
                  </tr>
                </tbody>
              </table>
            </div>

            <Card className="border-l-4 border-l-blue-500 bg-blue-50 mt-4">
              <CardContent className="p-6">
                <p className="font-semibold mb-2">💡 Doporučení:</p>
                <p>
                  Pro většinu případů doporučujeme <strong>claim company jako ClaimWinger</strong> — kombinuje rychlost ADR s právní silou soudu, bez rizika nákladů. Pokud chcete zkusit sami, začněte ADR a až když selže, jděte k soudu.
                </p>
              </CardContent>
            </Card>
          </section>

          {/* FAQ Section */}
          <section className="space-y-6">
            <h2 className="text-3xl font-bold">Často kladené otázky (FAQ)</h2>
            
            <div className="space-y-4">
              <Card>
                <CardContent className="p-6">
                  <h3 className="text-xl font-bold mb-3">Co je ADR a jak funguje?</h3>
                  <p>
                    ADR (Alternative Dispute Resolution) je mimosoudní řešení sporů — rychlejší a levnější alternativa k soudu. Nezávislý subjekt zprostředkuje dohodu mezi vámi a aerolinkou bez nutnosti advokáta.
                  </p>
                </CardContent>
              </Card>

              <Card>
                <CardContent className="p-6">
                  <h3 className="text-xl font-bold mb-3">Je ADR závazné pro aerolinie?</h3>
                  <p>
                    Účast v ADR je pro aerolinky dobrovolná, ale výsledek může být závazný podle typu procedury (mediace vs. arbitráž). Některé aerolinie mají povinnost účastnit se certifikovaných ADR subjektů.
                  </p>
                </CardContent>
              </Card>

              <Card>
                <CardContent className="p-6">
                  <h3 className="text-xl font-bold mb-3">Kolik stojí ADR?</h3>
                  <p>
                    Většina akreditovaných ADR subjektů v ČR je pro spotřebitele bezplatná nebo má symbolický poplatek (€20-50). Náklady hradí aerolinka nebo sdílené mezi stranami.
                  </p>
                </CardContent>
              </Card>

              <Card>
                <CardContent className="p-6">
                  <h3 className="text-xl font-bold mb-3">Jak dlouho trvá ADR?</h3>
                  <p>
                    Typicky 60-90 dní od podání — výrazně rychleji než soudní řízení (6-12 měsíců). Mediace může být vyřešena i během 30 dní.
                  </p>
                </CardContent>
              </Card>

              <Card>
                <CardContent className="p-6">
                  <h3 className="text-xl font-bold mb-3">Co když ADR neuspěje?</h3>
                  <p>
                    Pokud ADR nedospěje k dohodě, stále můžete podat žalobu k soudu. ADR nevylučuje další právní kroky — je to pouze předsoudní pokus o vyřešení.
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
                Nechcete se trápit s ADR ani soudem?
              </h2>
              <p className="text-muted-foreground">
                ClaimWinger vyřídí celý váš nárok — včetně ADR a soudu pokud je potřeba. Platíte jen při úspěchu, žádné riziko.
              </p>
              <Button 
                size="lg" 
                className="gap-2"
                onClick={() => window.open('https://claimwinger.com/cs/zpozdeny-let?utm_source=problemlot&utm_medium=blog&utm_campaign=cs-adr-reseni', '_blank')}
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
