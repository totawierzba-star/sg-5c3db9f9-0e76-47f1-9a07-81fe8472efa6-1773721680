import { Layout } from "@/components/Layout";
import { SEO } from "@/components/SEO";
import { ArrowRight, Scale, FileText, Clock, AlertTriangle, CheckCircle, Download } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { generateFAQSchema, generateArticleSchema, generateBreadcrumbSchema } from "@/lib/schemaGenerator";
import Link from "next/link";

export default function EvropekyFormularDrobnychNarokoPouziti() {
  const faqSchema = generateFAQSchema([
    {
      question: "Co je evropský formulář drobných nároků?",
      answer: "Evropský formulář A (nařízení WE 861/2007) umožňuje podávat žaloby do €5000 k soudu v jiném státě EU bez nutnosti advokáta. Je to zjednodušené a levnější řízení než klasická žaloba."
    },
    {
      question: "Mohu použít formulář A pro spor s aerolinkou?",
      answer: "Ano, formulář A je ideální pro kompenzace dle ES 261/2004 (€250-600). Můžete žalovat aerolinu u soudu v jejím sídle nebo u soudu v ČR podle místa letů."
    },
    {
      question: "Kolik stojí podání formuláře A?",
      answer: "Soudní poplatek v ČR je obvykle €40-80 pro nárok €250-600. V některých státech EU je nižší (např. Polsko €30) nebo vyšší (např. Německo €100+)."
    },
    {
      question: "Je nutný advokát?",
      answer: "Ne, formulář A je určen pro vlastní zastupování bez advokáta. Je v jednoduchém jazyce a soudy musí poskytnout asistenci spotřebitelům."
    },
    {
      question: "Jak dlouho trvá řízení?",
      answer: "Závisí na soudu — typicky 3-6 měsíců v ČR, ale může být rychlejší (např. Polsko 2-4 měsíce) nebo pomalejší (např. Itálie 8-12 měsíců)."
    }
  ]);

  const articleSchema = generateArticleSchema({
    title: "Evropský formulář drobných nároků — jak ho použít?",
    description: "Kompletní průvodce evropským formulářem A pro žaloby do €5000. Krok za krokem jak podat nárok na kompenzaci bez advokáta.",
    publishDate: "2026-03-12",
    modifiedDate: "2026-03-12",
    url: "https://problemlot.pl/cs/blog/evropsky-formular-drobnych-naroku-pouziti"
  });

  const breadcrumbSchema = generateBreadcrumbSchema([
    { name: "Domů", url: "https://problemlot.pl/cs" },
    { name: "Blog", url: "https://problemlot.pl/cs/blog" },
    { name: "Evropský formulář drobných nároků", url: "https://problemlot.pl/cs/blog/evropsky-formular-drobnych-naroku-pouziti" }
  ]);

  return (
    <Layout>
      <SEO 
        title="Evropský formulář drobných nároků — jak ho použít? | 2026"
        description="Kompletní průvodce evropským formulářem A pro žaloby do €5000. Krok za krokem jak podat nárok na kompenzaci bez advokáta."
        url="https://problemlot.pl/cs/blog/evropsky-formular-drobnych-naroku-pouziti"
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
            <span>Evropský formulář drobných nároků</span>
          </nav>

          {/* Header */}
          <header>
            <h1 className="text-4xl font-bold mb-4">
              Evropský formulář drobných nároků — jak ho použít?
            </h1>
            <p className="text-xl text-muted-foreground">
              Kompletní průvodce formulářem A pro žaloby do €5000 — bez advokáta, rychle a levně
            </p>
            <div className="flex items-center gap-4 mt-4 text-sm text-muted-foreground">
              <time dateTime="2026-03-12">12. března 2026</time>
              <span>•</span>
              <span>14 min čtení</span>
            </div>
          </header>

          {/* Intro */}
          <section className="prose prose-lg max-w-none">
            <p className="lead text-lg">
              Pokud vám aerolinka odmítá kompenzaci za <Link href="/cs/blog/narizeni-es-261-2004" className="text-primary hover:underline">zpoždění nebo zrušení letu</Link> a nechcete platit advokáta, máte k dispozici <strong>evropský formulář drobných nároků (formulář A)</strong>. Tento nástroj byl vytvořen nařízením WE 861/2007 právě proto, aby <strong>spotřebitelé mohli podávat žaloby do €5 000 bez nutnosti právního zastoupení</strong>.
            </p>
            <p>
              Pro kompenzace dle <Link href="/cs/blog/narizeni-es-261-2004" className="text-primary hover:underline">ES 261/2004</Link> (€250-600) je formulář A ideální — je rychlejší a levnější než klasická žaloba, a přesto má plnou právní sílu. V tomto článku vysvětlíme krok za krokem, jak formulář vyplnit, kam ho podat a co očekávat od celého procesu.
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
                      <td className="p-3 text-sm">Praha–Vídeň, Brno–Frankfurt</td>
                    </tr>
                    <tr className="border-b border-blue-100">
                      <td className="p-3">1 500–3 500 km</td>
                      <td className="p-3 font-bold text-primary">€400</td>
                      <td className="p-3 text-sm">Praha–Londýn, Praha–Istanbul</td>
                    </tr>
                    <tr>
                      <td className="p-3">Nad 3 500 km</td>
                      <td className="p-3 font-bold text-primary">€600</td>
                      <td className="p-3 text-sm">Praha–New York, Praha–Tokio</td>
                    </tr>
                  </tbody>
                </table>
              </div>
              <p className="text-sm text-muted-foreground mt-4">
                Všechny tyto nároky jsou pod limitem €5 000 — můžete je vymáhat formulářem A bez advokáta.
              </p>
            </CardContent>
          </Card>

          {/* Main Content Sections */}
          <section className="space-y-6">
            <h2 className="text-3xl font-bold">Co je evropský formulář drobných nároků?</h2>
            <p>
              <strong>Evropský formulář A</strong> (European Small Claims Procedure — ESCP) byl zaveden <strong>nařízením WE 861/2007</strong> a umožňuje:
            </p>
            <ul className="list-disc list-inside space-y-2 ml-4">
              <li><strong>Podávat žaloby do €5 000</strong> k soudu v jiném státě EU</li>
              <li><strong>Bez nutnosti advokáta</strong> — formulář je v jednoduchém jazyce</li>
              <li><strong>Zjednodušené řízení</strong> — rychlejší a levnější než klasická žaloba</li>
              <li><strong>Možnost použít online portál e-Justice</strong> — podání elektronicky z domova</li>
            </ul>
            <p>
              Pro spory s aerolinkami je formulář A ideální, protože kompenzace €250-600 spadají pod limit €5 000 a často jde o přeshraniční spor (aerolinka sídlí v jiném státě EU).
            </p>
          </section>

          <section className="space-y-6">
            <h2 className="text-3xl font-bold">Kdy použít formulář A?</h2>
            
            <Card className="border-l-4 border-l-green-500 bg-green-50">
              <CardContent className="p-6">
                <h3 className="text-lg font-bold mb-3 flex items-center gap-2">
                  <CheckCircle className="h-5 w-5 text-green-600" />
                  Formulář A je vhodný když:
                </h3>
                <ul className="space-y-2">
                  <li className="flex items-start gap-2">
                    <ArrowRight className="h-4 w-4 text-green-600 flex-shrink-0 mt-0.5" />
                    <span>Nárok je do €5 000 (kompenzace €250-600 je perfektní)</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <ArrowRight className="h-4 w-4 text-green-600 flex-shrink-0 mt-0.5" />
                    <span>Aerolinka sídlí v jiném státě EU (přeshraniční spor)</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <ArrowRight className="h-4 w-4 text-green-600 flex-shrink-0 mt-0.5" />
                    <span>Nechcete platit advokáta (€500-2000)</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <ArrowRight className="h-4 w-4 text-green-600 flex-shrink-0 mt-0.5" />
                    <span>Aerolinka ignoruje reklamaci nebo <Link href="/cs/blog/adr-mimosoudni-reseni-sporu-aerolinka" className="text-primary hover:underline">ADR selhalo</Link></span>
                  </li>
                  <li className="flex items-start gap-2">
                    <ArrowRight className="h-4 w-4 text-green-600 flex-shrink-0 mt-0.5" />
                    <span>Případ je relativně jednoduchý (zpoždění 3+ hodin, jasná ES 261/2004)</span>
                  </li>
                </ul>
              </CardContent>
            </Card>

            <Card className="border-l-4 border-l-orange-500 bg-orange-50 mt-4">
              <CardContent className="p-6">
                <h3 className="text-lg font-bold mb-3 flex items-center gap-2">
                  <AlertTriangle className="h-5 w-5 text-orange-600" />
                  Raději využijte claim company když:
                </h3>
                <ul className="space-y-2">
                  <li className="flex items-start gap-2">
                    <ArrowRight className="h-4 w-4 text-orange-600 flex-shrink-0 mt-0.5" />
                    <span>Případ je komplikovaný (missed connection, codeshare, mimořádné okolnosti spor)</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <ArrowRight className="h-4 w-4 text-orange-600 flex-shrink-0 mt-0.5" />
                    <span>Nemáte čas na právní dokumenty a soud</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <ArrowRight className="h-4 w-4 text-orange-600 flex-shrink-0 mt-0.5" />
                    <span>Chcete maximální úspěšnost (claim company má zkušenosti s tisíci případů)</span>
                  </li>
                </ul>
                <p className="mt-3 text-sm">
                  <Link href="/cs/blog/claimwinger-airhelp-flightright-srovnani" className="text-primary hover:underline font-semibold">ClaimWinger</Link> funguje na no-win-no-fee — platíte jen při úspěchu (22-30% provize).
                </p>
              </CardContent>
            </Card>
          </section>

          <section className="space-y-6">
            <h2 className="text-3xl font-bold">Jak vyplnit formulář A — krok za krokem</h2>
            
            <div className="space-y-4">
              <Card>
                <CardContent className="p-6">
                  <h3 className="text-xl font-bold mb-3 flex items-center gap-2">
                    <span className="bg-primary text-primary-foreground rounded-full w-8 h-8 flex items-center justify-center text-sm">1</span>
                    Stáhněte formulář A
                  </h3>
                  <p className="mb-3">
                    Formulář je dostupný na <strong>evropském portálu e-Justice</strong>:
                  </p>
                  <Button 
                    variant="outline" 
                    className="gap-2"
                    onClick={() => window.open('https://e-justice.europa.eu/489/CS/small_claims', '_blank')}
                  >
                    <Download className="h-4 w-4" />
                    Stáhnout formulář A (e-justice.europa.eu)
                  </Button>
                  <p className="mt-3 text-sm text-muted-foreground">
                    Formulář je dostupný ve všech jazycích EU. Pro podání v ČR použijte českou verzi.
                  </p>
                </CardContent>
              </Card>

              <Card>
                <CardContent className="p-6">
                  <h3 className="text-xl font-bold mb-3 flex items-center gap-2">
                    <span className="bg-primary text-primary-foreground rounded-full w-8 h-8 flex items-center justify-center text-sm">2</span>
                    Část 1 — Soud a strany sporu
                  </h3>
                  <p className="mb-3"><strong>Vyplňte:</strong></p>
                  <ul className="list-disc list-inside space-y-2 ml-4">
                    <li><strong>Soud:</strong> Můžete zvolit soud v místě sídla aeroliny NEBO soud v ČR pokud let měl odlet/přílet z/do ČR. Doporučujeme český soud (jednodušší komunikace).</li>
                    <li><strong>Žalobce (vy):</strong> Jméno, adresa, e-mail, telefon</li>
                    <li><strong>Žalovaný (aerolinka):</strong> Název, adresa sídla, IČO (najděte na webu aeroliny)</li>
                  </ul>
                  <p className="mt-3 text-sm text-muted-foreground">
                    <strong>Příklad:</strong> Ryanair DAC, Airside Business Park, Swords, Co. Dublin, Irsko
                  </p>
                </CardContent>
              </Card>

              <Card>
                <CardContent className="p-6">
                  <h3 className="text-xl font-bold mb-3 flex items-center gap-2">
                    <span className="bg-primary text-primary-foreground rounded-full w-8 h-8 flex items-center justify-center text-sm">3</span>
                    Část 2 — Popis nároku
                  </h3>
                  <p className="mb-3">Zde jasně popište:</p>
                  <ul className="list-disc list-inside space-y-2 ml-4">
                    <li><strong>Co se stalo:</strong> "Dne [datum] byl můj let [číslo letu] z [odkud] do [kam] zpožděn o [X] hodin / zrušen."</li>
                    <li><strong>Právní základ:</strong> "Dle nařízení ES 261/2004 mám nárok na kompenzaci €[250/400/600]."</li>
                    <li><strong>Důkazy:</strong> "Přikládám potvrzení rezervace, palubní vstupenky, certifikát o zpoždění, odmítnutí kompenzace aerolinkou."</li>
                    <li><strong>Částka nároku:</strong> €250 / €400 / €600 (podle vzdálenosti letu)</li>
                  </ul>
                  <p className="mt-3 text-sm text-muted-foreground">
                    Můžete přidat i úroky z prodlení (obvykle 8-10% ročně od data letu) a náklady řízení (soudní poplatek).
                  </p>
                </CardContent>
              </Card>

              <Card>
                <CardContent className="p-6">
                  <h3 className="text-xl font-bold mb-3 flex items-center gap-2">
                    <span className="bg-primary text-primary-foreground rounded-full w-8 h-8 flex items-center justify-center text-sm">4</span>
                    Část 3 — Důkazy
                  </h3>
                  <p className="mb-3">Přiložte tyto dokumenty:</p>
                  <ul className="list-disc list-inside space-y-2 ml-4">
                    <li>Potvrzení rezervace (booking confirmation)</li>
                    <li>Palubní vstupenky (boarding passes)</li>
                    <li>Certifikát o zpoždění/zrušení (požádejte aerolinu nebo letiště)</li>
                    <li>Korespondence s aerolinkou (reklamace + odmítnutí)</li>
                    <li>Důkaz o mimořádných nákladech (hotel, taxi) pokud relevantní</li>
                  </ul>
                  <p className="mt-3 text-sm text-muted-foreground">
                    Všechny dokumenty v kopii (ne originály). Pokud jsou v jiném jazyce než češtině, připojte neoficiální překlad.
                  </p>
                </CardContent>
              </Card>

              <Card>
                <CardContent className="p-6">
                  <h3 className="text-xl font-bold mb-3 flex items-center gap-2">
                    <span className="bg-primary text-primary-foreground rounded-full w-8 h-8 flex items-center justify-center text-sm">5</span>
                    Zaplaťte soudní poplatek
                  </h3>
                  <p className="mb-3">
                    <strong>V ČR:</strong> Soudní poplatek za formulář A je <strong>€40-80</strong> (1 000-2 000 Kč) podle výše nároku. Platíte bankovním převodem nebo poštovní poukázkou.
                  </p>
                  <p className="mb-3">
                    <strong>V jiných státech EU:</strong> Poplatek se liší:
                  </p>
                  <ul className="list-disc list-inside space-y-2 ml-4">
                    <li>Polsko: ~€30</li>
                    <li>Německo: €100+</li>
                    <li>Irsko: €25</li>
                  </ul>
                  <p className="mt-3 text-sm text-muted-foreground">
                    Pokud vyhrajete, soud může aerolince nařídit vrátit vám i soudní poplatek.
                  </p>
                </CardContent>
              </Card>

              <Card>
                <CardContent className="p-6">
                  <h3 className="text-xl font-bold mb-3 flex items-center gap-2">
                    <span className="bg-primary text-primary-foreground rounded-full w-8 h-8 flex items-center justify-center text-sm">6</span>
                    Podejte formulář k soudu
                  </h3>
                  <p className="mb-3">
                    <strong>Osobně nebo poštou:</strong> Příslušný okresní soud (např. Obvodní soud pro Prahu 1)
                  </p>
                  <p className="mb-3">
                    <strong>Online:</strong> Některé soudy v EU umožňují podání elektronicky přes portál e-Justice (zatím ne všechny české soudy).
                  </p>
                  <p className="mt-3 text-sm text-muted-foreground">
                    Po podání dostanete potvrzení o zahájení řízení a soud doručí formulář A aerolince.
                  </p>
                </CardContent>
              </Card>

              <Card>
                <CardContent className="p-6">
                  <h3 className="text-xl font-bold mb-3 flex items-center gap-2">
                    <span className="bg-primary text-primary-foreground rounded-full w-8 h-8 flex items-center justify-center text-sm">7</span>
                    Co se stane dál?
                  </h3>
                  <p className="mb-3">
                    Aerolinka má <strong>30 dní</strong> na vyjádření (formulář C). Může:
                  </p>
                  <ul className="list-disc list-inside space-y-2 ml-4">
                    <li><strong>Uznat nárok</strong> — soud vám přizná kompenzaci</li>
                    <li><strong>Popřít nárok</strong> — soud nařídí jednání (ve většině případů písemně, bez osobní účasti)</li>
                    <li><strong>Nereagovat</strong> — soud vydá rozsudek pro zmeškání ve váš prospěch</li>
                  </ul>
                  <p className="mt-3">
                    Typická délka: <strong>3-6 měsíců</strong> od podání do rozsudku.
                  </p>
                </CardContent>
              </Card>

              <Card>
                <CardContent className="p-6">
                  <h3 className="text-xl font-bold mb-3 flex items-center gap-2">
                    <span className="bg-primary text-primary-foreground rounded-full w-8 h-8 flex items-center justify-center text-sm">8</span>
                    Výkon rozhodnutí
                  </h3>
                  <p>
                    Pokud aerolinka nevyplatí kompenzaci dobrovolně, můžete požádat o <strong>exekuci</strong>. Rozsudek z formuláře A je uznáván ve všech státech EU bez dalšího schvalování (na rozdíl od klasických rozsudků).
                  </p>
                </CardContent>
              </Card>
            </div>
          </section>

          <section className="space-y-6">
            <h2 className="text-3xl font-bold">Který soud zvolit?</h2>
            
            <div className="overflow-x-auto">
              <table className="w-full border-collapse">
                <thead>
                  <tr className="bg-blue-50 border-b-2 border-blue-200">
                    <th className="text-left p-3 font-semibold">Možnost</th>
                    <th className="text-left p-3 font-semibold">Výhody</th>
                    <th className="text-left p-3 font-semibold">Nevýhody</th>
                  </tr>
                </thead>
                <tbody>
                  <tr className="border-b border-gray-200">
                    <td className="p-3 font-medium">Soud v ČR (místo odletu/příjezdu)</td>
                    <td className="p-3">
                      ✅ Český jazyk<br/>
                      ✅ Nižší poplatek (~€50)<br/>
                      ✅ Znalost místních pravidel
                    </td>
                    <td className="p-3">
                      ⚠️ Může trvat déle (6-8 měsíců)
                    </td>
                  </tr>
                  <tr className="border-b border-gray-200">
                    <td className="p-3 font-medium">Soud v sídle aeroliny (např. Irsko pro Ryanair)</td>
                    <td className="p-3">
                      ✅ Rychlejší řízení (2-4 měsíce)<br/>
                      ✅ Soud má zkušenosti s ES 261/2004
                    </td>
                    <td className="p-3">
                      ❌ Cizí jazyk (angličtina)<br/>
                      ❌ Neznáte místní praxi
                    </td>
                  </tr>
                  <tr>
                    <td className="p-3 font-medium">Polský soud (pokud let letěl přes Polsko)</td>
                    <td className="p-3">
                      ✅ Velmi rychlý (2-3 měsíce)<br/>
                      ✅ Nízký poplatek (~€30)<br/>
                      ✅ Pro-spotřebitelské soudy
                    </td>
                    <td className="p-3">
                      ⚠️ Polština (ale blízká češtině)<br/>
                      ⚠️ Vyžaduje polskou adresu
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>

            <Card className="border-l-4 border-l-blue-500 bg-blue-50 mt-4">
              <CardContent className="p-6">
                <p className="font-semibold mb-2">💡 Doporučení:</p>
                <p>
                  Pro většinu případů doporučujeme <strong>český soud</strong> — jednodušší komunikace, rozumíte všem dokumentům. Pokud chcete rychlost, zvažte Polsko (pokud máte polský kontakt) nebo <Link href="/cs/blog/claimwinger-airhelp-flightright-srovnani" className="text-primary hover:underline">claim company ClaimWinger</Link> (vyřídí za vás rychleji).
                </p>
              </CardContent>
            </Card>
          </section>

          <section className="space-y-6">
            <h2 className="text-3xl font-bold">Formulář A vs. Claim Company — srovnání</h2>
            
            <div className="overflow-x-auto">
              <table className="w-full border-collapse">
                <thead>
                  <tr className="bg-blue-50 border-b-2 border-blue-200">
                    <th className="text-left p-3 font-semibold">Kritérium</th>
                    <th className="text-left p-3 font-semibold">Formulář A (vlastní)</th>
                    <th className="text-left p-3 font-semibold">Claim Company</th>
                  </tr>
                </thead>
                <tbody>
                  <tr className="border-b border-gray-200">
                    <td className="p-3 font-medium">Náklady předem</td>
                    <td className="p-3">€40-80 (soudní poplatek)</td>
                    <td className="p-3">€0 (platíte jen při úspěchu)</td>
                  </tr>
                  <tr className="border-b border-gray-200">
                    <td className="p-3 font-medium">Provize při úspěchu</td>
                    <td className="p-3">€0</td>
                    <td className="p-3">22-30% z kompenzace</td>
                  </tr>
                  <tr className="border-b border-gray-200">
                    <td className="p-3 font-medium">Čas potřebný</td>
                    <td className="p-3">⏱️ Několik hodin (vyplnění)</td>
                    <td className="p-3">⏱️ 5 minut (podání online)</td>
                  </tr>
                  <tr className="border-b border-gray-200">
                    <td className="p-3 font-medium">Znalosti potřebné</td>
                    <td className="p-3">⚠️ Základní právní povědomí</td>
                    <td className="p-3">✅ Žádné (vše řeší za vás)</td>
                  </tr>
                  <tr className="border-b border-gray-200">
                    <td className="p-3 font-medium">Úspěšnost</td>
                    <td className="p-3">~70-80%</td>
                    <td className="p-3">~85-95%</td>
                  </tr>
                  <tr className="border-b border-gray-200">
                    <td className="p-3 font-medium">Délka procesu</td>
                    <td className="p-3">3-6 měsíců</td>
                    <td className="p-3">1-3 měsíce</td>
                  </tr>
                  <tr>
                    <td className="p-3 font-medium">Výsledná částka (při úspěchu)</td>
                    <td className="p-3">€250-600 + úroky</td>
                    <td className="p-3">€175-480 (po provizi 22-30%)</td>
                  </tr>
                </tbody>
              </table>
            </div>

            <Card className="border-l-4 border-l-blue-500 bg-blue-50 mt-4">
              <CardContent className="p-6">
                <p className="font-semibold mb-2">💡 Kdy se vyplatí formulář A sami:</p>
                <ul className="space-y-2">
                  <li className="flex items-start gap-2">
                    <CheckCircle className="h-5 w-5 text-green-600 flex-shrink-0 mt-0.5" />
                    <span>Máte čas a základní právní znalosti</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="h-5 w-5 text-green-600 flex-shrink-0 mt-0.5" />
                    <span>Případ je jednoduchý (jasné zpoždění 3+ hodin, žádný spor o mimořádné okolnosti)</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="h-5 w-5 text-green-600 flex-shrink-0 mt-0.5" />
                    <span>Chcete ušetřit 22-30% provize (€50-180)</span>
                  </li>
                </ul>
                <p className="font-semibold mb-2 mt-4">💡 Kdy se vyplatí claim company:</p>
                <ul className="space-y-2">
                  <li className="flex items-start gap-2">
                    <CheckCircle className="h-5 w-5 text-green-600 flex-shrink-0 mt-0.5" />
                    <span>Chcete nulové riziko (platíte jen při úspěchu)</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="h-5 w-5 text-green-600 flex-shrink-0 mt-0.5" />
                    <span>Nemáte čas na právní dokumenty a soud</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="h-5 w-5 text-green-600 flex-shrink-0 mt-0.5" />
                    <span>Případ je komplikovaný (missed connection, codeshare, spor o mimořádné okolnosti)</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="h-5 w-5 text-green-600 flex-shrink-0 mt-0.5" />
                    <span>Chcete maximální úspěšnost (zkušení právníci)</span>
                  </li>
                </ul>
              </CardContent>
            </Card>
          </section>

          {/* FAQ Section */}
          <section className="space-y-6">
            <h2 className="text-3xl font-bold">Často kladené otázky (FAQ)</h2>
            
            <div className="space-y-4">
              <Card>
                <CardContent className="p-6">
                  <h3 className="text-xl font-bold mb-3">Co je evropský formulář drobných nároků?</h3>
                  <p>
                    Evropský formulář A (nařízení WE 861/2007) umožňuje podávat žaloby do €5000 k soudu v jiném státě EU bez nutnosti advokáta. Je to zjednodušené a levnější řízení než klasická žaloba.
                  </p>
                </CardContent>
              </Card>

              <Card>
                <CardContent className="p-6">
                  <h3 className="text-xl font-bold mb-3">Mohu použít formulář A pro spor s aerolinkou?</h3>
                  <p>
                    Ano, formulář A je ideální pro kompenzace dle ES 261/2004 (€250-600). Můžete žalovat aerolinu u soudu v jejím sídle nebo u soudu v ČR podle místa letů.
                  </p>
                </CardContent>
              </Card>

              <Card>
                <CardContent className="p-6">
                  <h3 className="text-xl font-bold mb-3">Kolik stojí podání formuláře A?</h3>
                  <p>
                    Soudní poplatek v ČR je obvykle €40-80 pro nárok €250-600. V některých státech EU je nižší (např. Polsko €30) nebo vyšší (např. Německo €100+).
                  </p>
                </CardContent>
              </Card>

              <Card>
                <CardContent className="p-6">
                  <h3 className="text-xl font-bold mb-3">Je nutný advokát?</h3>
                  <p>
                    Ne, formulář A je určen pro vlastní zastupování bez advokáta. Je v jednoduchém jazyce a soudy musí poskytnout asistenci spotřebitelům.
                  </p>
                </CardContent>
              </Card>

              <Card>
                <CardContent className="p-6">
                  <h3 className="text-xl font-bold mb-3">Jak dlouho trvá řízení?</h3>
                  <p>
                    Závisí na soudu — typicky 3-6 měsíců v ČR, ale může být rychlejší (např. Polsko 2-4 měsíce) nebo pomalejší (např. Itálie 8-12 měsíců).
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
                Nechcete se trápit se soudním formulářem?
              </h2>
              <p className="text-muted-foreground">
                ClaimWinger vyřídí celý proces za vás — včetně soudu pokud je potřeba. Platíte jen při úspěchu, žádné riziko.
              </p>
              <Button 
                size="lg" 
                className="gap-2"
                onClick={() => window.open('https://claimwinger.com/cs/zpozdeny-let?utm_source=problemlot&utm_medium=blog&utm_campaign=cs-formular-a', '_blank')}
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
