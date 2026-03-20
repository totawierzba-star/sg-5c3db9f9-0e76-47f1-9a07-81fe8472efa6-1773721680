import { Layout } from "@/components/Layout";
import { SEO } from "@/components/SEO";
import { ArrowRight, Scale, Coins, Clock, CheckCircle, AlertTriangle, TrendingUp } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { generateFAQSchema, generateArticleSchema, generateBreadcrumbSchema } from "@/lib/schemaGenerator";
import Link from "next/link";

export default function AdvokatVsClaimCompanyCoSeVyplati() {
  const faqSchema = generateFAQSchema([
    {
      question: "Kolik stojí advokát na letecké kompenzace?",
      answer: "Advokát obvykle účtuje hodinovou sazbu €100-200 nebo provizi 30-40% z kompenzace. U nároku €400 zaplatíte €120-160 advokátovi, zatímco claim company bere 22-30%."
    },
    {
      question: "Co je lepší — advokát nebo claim company?",
      answer: "Pro většinu případů je claim company lepší volba — funguje na no-win-no-fee, má nižší provizi (22-30% vs. 30-40%), rychlejší vyřízení (30-90 dní vs. 6-12 měsíců) a žádné riziko předem."
    },
    {
      question: "Kdy se vyplatí najmout advokáta?",
      answer: "Advokát se vyplatí jen pokud máte komplikovaný případ (např. zranění, ztráta zavazadel nad €1500) nebo potřebujete zastoupení v trestním řízení. Pro běžné kompenzace €250-600 je claim company rychlejší a levnější."
    },
    {
      question: "Funguje claim company na no-win-no-fee?",
      answer: "Ano, všechny seriózní claim companies (ClaimWinger, AirHelp, Flightright) fungují na no-win-no-fee — platíte jen provizi při úspěchu. Pokud nárok neuspěje, neplatíte nic."
    },
    {
      question: "Jak dlouho trvá vymáhání přes claim company?",
      answer: "Typicky 30-90 dní od podání nároku. Claim company komunikuje s aerolinkou, eskaluje k soudu pokud je potřeba, a vy jen čekáte na výplatu. Advokát obvykle trvá 6-12 měsíců."
    }
  ]);

  const articleSchema = generateArticleSchema({
    title: "Advokát nebo claim company — co se vyplatí?",
    description: "Srovnání advokáta vs. claim company pro letecké kompenzace. Cena, rychlost, úspěšnost a rizika. Zjistěte, která varianta je pro vás nejlepší.",
    publishDate: "2026-03-12",
    modifiedDate: "2026-03-12",
    url: "https://problemlot.pl/cs/blog/advokat-vs-claim-company-co-se-vyplati"
  });

  const breadcrumbSchema = generateBreadcrumbSchema([
    { name: "Domů", url: "https://problemlot.pl/cs" },
    { name: "Blog", url: "https://problemlot.pl/cs/blog" },
    { name: "Advokát vs. claim company", url: "https://problemlot.pl/cs/blog/advokat-vs-claim-company-co-se-vyplati" }
  ]);

  return (
    <Layout>
      <SEO 
        title="Advokát nebo claim company — co se vyplatí? | Srovnání 2026"
        description="Srovnání advokáta vs. claim company pro letecké kompenzace. Cena, rychlost, úspěšnost a rizika. Zjistěte, která varianta je pro vás nejlepší."
        url="https://problemlot.pl/cs/blog/advokat-vs-claim-company-co-se-vyplati"
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
            <span>Advokát vs. claim company</span>
          </nav>

          {/* Header */}
          <header>
            <h1 className="text-4xl font-bold mb-4">
              Advokát nebo claim company — co se vyplatí?
            </h1>
            <p className="text-xl text-muted-foreground">
              Komplexní srovnání nákladů, rychlosti a úspěšnosti — zjistěte, která varianta je pro váš případ nejlepší
            </p>
            <div className="flex items-center gap-4 mt-4 text-sm text-muted-foreground">
              <time dateTime="2026-03-12">12. března 2026</time>
              <span>•</span>
              <span>11 min čtení</span>
            </div>
          </header>

          {/* Intro */}
          <section className="prose prose-lg max-w-none">
            <p className="lead text-lg">
              Pokud vám aerolinka odmítá kompenzaci za <Link href="/cs/blog/narizeni-es-261-2004" className="text-primary hover:underline">zpoždění nebo zrušení letu</Link>, máte v podstatě tři možnosti: <strong>vyřídit nárok sami, najmout advokáta, nebo využít claim company</strong>. Každá varianta má své výhody a nevýhody — od nulových nákladů až po plnou právní ochranu.
            </p>
            <p>
              V tomto článku komplexně porovnáme <strong>advokáta vs. claim company</strong> z pohledu českého cestujícího: kolik stojí, jak dlouho to trvá, jaká je úspěšnost a kdy se která varianta vyplatí. Spoiler: pro většinu případů kompenzací €250-600 je <strong>claim company jako ClaimWinger nejlepší volbou</strong> — funguje na no-win-no-fee, má nižší provizi než advokát a vyřídí nárok rychleji.
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
                      <td className="p-3 text-sm">Praha–Paříž, Brno–Amsterdam</td>
                    </tr>
                    <tr className="border-b border-blue-100">
                      <td className="p-3">1 500–3 500 km</td>
                      <td className="p-3 font-bold text-primary">€400</td>
                      <td className="p-3 text-sm">Praha–Madrid, Praha–Egypt</td>
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
                Pro tyto částky se rozhodujete mezi advokátem (provize 30-40%) a claim company (provize 22-30%).
              </p>
            </CardContent>
          </Card>

          {/* Main Content Sections */}
          <section className="space-y-6">
            <h2 className="text-3xl font-bold">Advokát vs. Claim Company — úplné srovnání</h2>
            
            <div className="overflow-x-auto">
              <table className="w-full border-collapse">
                <thead>
                  <tr className="bg-blue-50 border-b-2 border-blue-200">
                    <th className="text-left p-3 font-semibold">Kritérium</th>
                    <th className="text-left p-3 font-semibold">Advokát</th>
                    <th className="text-left p-3 font-semibold">Claim Company</th>
                    <th className="text-left p-3 font-semibold">Vítěz</th>
                  </tr>
                </thead>
                <tbody>
                  <tr className="border-b border-gray-200">
                    <td className="p-3 font-medium">Náklady předem</td>
                    <td className="p-3">❌ €500-2000 (retainer)</td>
                    <td className="p-3">✅ €0 (no-win-no-fee)</td>
                    <td className="p-3 text-green-600 font-bold">Claim Company</td>
                  </tr>
                  <tr className="border-b border-gray-200">
                    <td className="p-3 font-medium">Provize při úspěchu</td>
                    <td className="p-3">30-40%</td>
                    <td className="p-3">22-30%</td>
                    <td className="p-3 text-green-600 font-bold">Claim Company</td>
                  </tr>
                  <tr className="border-b border-gray-200">
                    <td className="p-3 font-medium">Délka procesu</td>
                    <td className="p-3">6-12 měsíců</td>
                    <td className="p-3">30-90 dní</td>
                    <td className="p-3 text-green-600 font-bold">Claim Company</td>
                  </tr>
                  <tr className="border-b border-gray-200">
                    <td className="p-3 font-medium">Úspěšnost</td>
                    <td className="p-3">80-90%</td>
                    <td className="p-3">85-95%</td>
                    <td className="p-3 text-green-600 font-bold">Claim Company</td>
                  </tr>
                  <tr className="border-b border-gray-200">
                    <td className="p-3 font-medium">Komunikace</td>
                    <td className="p-3">⚠️ Formální, časté schůzky</td>
                    <td className="p-3">✅ Online, minimální účast</td>
                    <td className="p-3 text-green-600 font-bold">Claim Company</td>
                  </tr>
                  <tr className="border-b border-gray-200">
                    <td className="p-3 font-medium">Expertise ES 261/2004</td>
                    <td className="p-3">⚠️ Závisí na advokátovi</td>
                    <td className="p-3">✅ Specializace</td>
                    <td className="p-3 text-green-600 font-bold">Claim Company</td>
                  </tr>
                  <tr className="border-b border-gray-200">
                    <td className="p-3 font-medium">Riziko nákladů</td>
                    <td className="p-3">❌ Vysoké (i při neúspěchu)</td>
                    <td className="p-3">✅ Nulové</td>
                    <td className="p-3 text-green-600 font-bold">Claim Company</td>
                  </tr>
                  <tr className="border-b border-gray-200">
                    <td className="p-3 font-medium">Vhodné pro</td>
                    <td className="p-3">Komplikované případy (zranění, velké ztráty)</td>
                    <td className="p-3">Běžné kompenzace €250-600</td>
                    <td className="p-3 text-blue-600 font-bold">Záleží na případu</td>
                  </tr>
                </tbody>
              </table>
            </div>

            <Card className="border-l-4 border-l-green-500 bg-green-50 mt-4">
              <CardContent className="p-6">
                <p className="font-semibold mb-2">💡 Závěr:</p>
                <p>
                  Pro <strong>běžné kompenzace €250-600</strong> (zpoždění 3+ hodin, zrušení letu) je <strong>claim company jasně lepší volba</strong> — nulové riziko, nižší provize, rychlejší vyřízení. Advokát se vyplatí jen pro komplikované případy nad €1000.
                </p>
              </CardContent>
            </Card>
          </section>

          <section className="space-y-6">
            <h2 className="text-3xl font-bold">Kolik stojí advokát na letecké kompenzace?</h2>
            <p>
              Advokáti v Česku účtují za vymáhání leteckých kompenzací dvěma způsoby:
            </p>
            
            <div className="space-y-4">
              <Card>
                <CardContent className="p-6">
                  <h3 className="text-xl font-bold mb-3 flex items-center gap-2">
                    <Coins className="h-6 w-6 text-primary" />
                    1. Hodinová sazba (retainer)
                  </h3>
                  <p className="mb-3">
                    <strong>Cena:</strong> €100-200/hodina (2 500-5 000 Kč)<br/>
                    <strong>Typický nárok €400:</strong> 5-10 hodin práce = €500-2000 nákladů
                  </p>
                  <p className="text-sm text-muted-foreground">
                    <strong>Riziko:</strong> Platíte i pokud nárok neuspěje. Pokud aerolinka odmítne a jde se k soudu, náklady rostou.
                  </p>
                </CardContent>
              </Card>

              <Card>
                <CardContent className="p-6">
                  <h3 className="text-xl font-bold mb-3 flex items-center gap-2">
                    <TrendingUp className="h-6 w-6 text-primary" />
                    2. Provize z úspěchu (success fee)
                  </h3>
                  <p className="mb-3">
                    <strong>Cena:</strong> 30-40% z kompenzace<br/>
                    <strong>Typický nárok €400:</strong> Advokát dostane €120-160, vám zůstane €240-280
                  </p>
                  <p className="text-sm text-muted-foreground">
                    <strong>Výhoda:</strong> Neplatíte předem. <strong>Nevýhoda:</strong> Vyšší provize než claim company (22-30%).
                  </p>
                </CardContent>
              </Card>
            </div>

            <Card className="border-l-4 border-l-orange-500 bg-orange-50">
              <CardContent className="p-6">
                <p className="font-semibold mb-2">⚠️ Skrytá rizika advokáta:</p>
                <ul className="space-y-2 text-sm">
                  <li className="flex items-start gap-2">
                    <ArrowRight className="h-4 w-4 text-orange-600 flex-shrink-0 mt-0.5" />
                    <span><strong>Soudní poplatky:</strong> Pokud jde případ k soudu, platíte soudní poplatek €50-200 (často není v provizi)</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <ArrowRight className="h-4 w-4 text-orange-600 flex-shrink-0 mt-0.5" />
                    <span><strong>Náklady komunikace:</strong> E-maily, schůzky, telefony — někteří advokáti účtují extra</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <ArrowRight className="h-4 w-4 text-orange-600 flex-shrink-0 mt-0.5" />
                    <span><strong>Delší doba:</strong> 6-12 měsíců znamená delší čekání na peníze</span>
                  </li>
                </ul>
              </CardContent>
            </Card>
          </section>

          <section className="space-y-6">
            <h2 className="text-3xl font-bold">Kolik stojí claim company?</h2>
            <p>
              Claim companies jako <strong>ClaimWinger, AirHelp, Flightright</strong> fungují výhradně na <strong>no-win-no-fee</strong>:
            </p>
            
            <div className="space-y-4">
              <Card className="border-l-4 border-l-green-500 bg-green-50">
                <CardContent className="p-6">
                  <h3 className="text-xl font-bold mb-3 flex items-center gap-2">
                    <CheckCircle className="h-6 w-6 text-green-600" />
                    Jak funguje no-win-no-fee?
                  </h3>
                  <ul className="space-y-2">
                    <li className="flex items-start gap-2">
                      <ArrowRight className="h-4 w-4 text-green-600 flex-shrink-0 mt-0.5" />
                      <span><strong>€0 předem</strong> — žádné poplatky, retainery, zálohy</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <ArrowRight className="h-4 w-4 text-green-600 flex-shrink-0 mt-0.5" />
                      <span><strong>Provize jen při úspěchu</strong> — typicky 22-30% z kompenzace</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <ArrowRight className="h-4 w-4 text-green-600 flex-shrink-0 mt-0.5" />
                      <span><strong>Pokud neuspějete, neplatíte nic</strong> — nulové riziko</span>
                    </li>
                  </ul>
                </CardContent>
              </Card>

              <Card>
                <CardContent className="p-6">
                  <h3 className="text-xl font-bold mb-3">Příklad: Nárok €400</h3>
                  <div className="space-y-3">
                    <div className="flex justify-between items-center border-b pb-2">
                      <span>Kompenzace od aerolinie</span>
                      <span className="font-bold">€400</span>
                    </div>
                    <div className="flex justify-between items-center border-b pb-2">
                      <span>Provize ClaimWinger (22%)</span>
                      <span className="text-red-600">- €88</span>
                    </div>
                    <div className="flex justify-between items-center pt-2">
                      <span className="font-bold">Dostanete na účet</span>
                      <span className="font-bold text-green-600 text-xl">€312</span>
                    </div>
                  </div>
                  <p className="text-sm text-muted-foreground mt-3">
                    <strong>Srovnání:</strong> Advokát s provizí 35% = €260 vám, €140 advokátovi. <strong>ClaimWinger ušetříte €52.</strong>
                  </p>
                </CardContent>
              </Card>
            </div>

            <Card className="border-l-4 border-l-blue-500 bg-blue-50">
              <CardContent className="p-6">
                <p className="font-semibold mb-2">💡 Proč je claim company levnější než advokát?</p>
                <p>
                  Claim companies mají <strong>automatizovaný proces</strong> — software generuje reklamace, AI kontroluje nárok, právníci řeší jen komplikované případy. To snižuje náklady, které se promítají do nižší provize. Advokát dělá vše manuálně → vyšší náklady → vyšší provize.
                </p>
              </CardContent>
            </Card>
          </section>

          <section className="space-y-6">
            <h2 className="text-3xl font-bold">Rychlost vyřízení — advokát vs. claim company</h2>
            
            <div className="grid md:grid-cols-2 gap-4">
              <Card>
                <CardContent className="p-6">
                  <h3 className="text-xl font-bold mb-3 flex items-center gap-2">
                    <Clock className="h-6 w-6 text-orange-600" />
                    Advokát: 6-12 měsíců
                  </h3>
                  <ul className="space-y-2 text-sm">
                    <li className="flex items-start gap-2">
                      <span className="font-bold">1-2 týdny:</span> První konzultace, analýza případu
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="font-bold">2-4 týdny:</span> Příprava reklamace, dokumentace
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="font-bold">6-8 týdnů:</span> Čekání na odpověď aerolinie
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="font-bold">3-6 měsíců:</span> Soudní řízení (pokud aerolinka odmítne)
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="font-bold">2-4 týdny:</span> Výplata po rozsudku
                    </li>
                  </ul>
                  <p className="mt-3 text-sm text-muted-foreground">
                    <strong>Celkem:</strong> 6-12 měsíců od zahájení do výplaty
                  </p>
                </CardContent>
              </Card>

              <Card className="border-2 border-green-500">
                <CardContent className="p-6">
                  <h3 className="text-xl font-bold mb-3 flex items-center gap-2">
                    <Clock className="h-6 w-6 text-green-600" />
                    Claim Company: 30-90 dní
                  </h3>
                  <ul className="space-y-2 text-sm">
                    <li className="flex items-start gap-2">
                      <span className="font-bold">24 hodin:</span> Online podání, AI analýza nároku
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="font-bold">1-2 týdny:</span> Automatická reklamace k aerolince
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="font-bold">4-6 týdnů:</span> Čekání na odpověď + případná eskalace
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="font-bold">2-4 týdny:</span> Soud/ADR (jen pokud aerolinka odmítne)
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="font-bold">1-2 týdny:</span> Výplata na váš účet
                    </li>
                  </ul>
                  <p className="mt-3 text-sm font-bold text-green-600">
                    <strong>Celkem:</strong> 30-90 dní — 3-6× rychleji než advokát
                  </p>
                </CardContent>
              </Card>
            </div>

            <Card className="border-l-4 border-l-blue-500 bg-blue-50">
              <CardContent className="p-6">
                <p className="font-semibold mb-2">💡 Proč je claim company rychlejší?</p>
                <p>
                  Claim companies mají <strong>přímé kontakty s aerolinkami</strong> a vymáhají tisíce nároků ročně. Aerolinie vědí, že ClaimWinger půjde k soudu pokud odmítnou, takže často platí dobrovolně. Advokát musí vše řešit individuálně → delší komunikace, častěji soud.
                </p>
              </CardContent>
            </Card>
          </section>

          <section className="space-y-6">
            <h2 className="text-3xl font-bold">Kdy se vyplatí advokát vs. kdy claim company?</h2>
            
            <div className="grid md:grid-cols-2 gap-4">
              <Card className="border-l-4 border-l-blue-500">
                <CardContent className="p-6">
                  <h3 className="text-lg font-bold mb-3 flex items-center gap-2">
                    <Scale className="h-5 w-5 text-blue-600" />
                    Advokát je lepší když:
                  </h3>
                  <ul className="space-y-2 text-sm">
                    <li className="flex items-start gap-2">
                      <ArrowRight className="h-4 w-4 text-blue-600 flex-shrink-0 mt-0.5" />
                      <span>Nárok přesahuje €1 000 (např. ztráta zavazadel, zpoždění vlaku)</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <ArrowRight className="h-4 w-4 text-blue-600 flex-shrink-0 mt-0.5" />
                      <span>Máte zranění nebo zdravotní následky z letu</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <ArrowRight className="h-4 w-4 text-blue-600 flex-shrink-0 mt-0.5" />
                      <span>Potřebujete právní zastoupení v trestním řízení</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <ArrowRight className="h-4 w-4 text-blue-600 flex-shrink-0 mt-0.5" />
                      <span>Případ je velmi komplikovaný (multiple claims, codeshare spor)</span>
                    </li>
                  </ul>
                </CardContent>
              </Card>

              <Card className="border-l-4 border-l-green-500 bg-green-50">
                <CardContent className="p-6">
                  <h3 className="text-lg font-bold mb-3 flex items-center gap-2">
                    <CheckCircle className="h-5 w-5 text-green-600" />
                    Claim Company je lepší když:
                  </h3>
                  <ul className="space-y-2 text-sm">
                    <li className="flex items-start gap-2">
                      <ArrowRight className="h-4 w-4 text-green-600 flex-shrink-0 mt-0.5" />
                      <span>Nárok je €250-600 (standardní kompenzace ES 261/2004)</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <ArrowRight className="h-4 w-4 text-green-600 flex-shrink-0 mt-0.5" />
                      <span>Chcete nulové riziko nákladů (no-win-no-fee)</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <ArrowRight className="h-4 w-4 text-green-600 flex-shrink-0 mt-0.5" />
                      <span>Nemáte čas na schůzky s advokátem a soudy</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <ArrowRight className="h-4 w-4 text-green-600 flex-shrink-0 mt-0.5" />
                      <span>Chcete rychlou výplatu (30-90 dní)</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <ArrowRight className="h-4 w-4 text-green-600 flex-shrink-0 mt-0.5" />
                      <span>Aerolinka ignoruje reklamaci nebo tvrdí mimořádné okolnosti</span>
                    </li>
                  </ul>
                </CardContent>
              </Card>
            </div>

            <Card className="border-l-4 border-l-blue-500 bg-blue-50 mt-4">
              <CardContent className="p-6">
                <p className="font-semibold mb-2">📊 Statistika:</p>
                <p>
                  <strong>98% leteckých kompenzací</strong> spadá do kategorie €250-600 (běžné zpoždění/zrušení). Pro tyto případy je <strong>claim company optimální volba</strong> — ušetříte čas, peníze a nervy.
                </p>
              </CardContent>
            </Card>
          </section>

          <section className="space-y-6">
            <h2 className="text-3xl font-bold">ClaimWinger — česká alternativa k advokátovi</h2>
            <p>
              <strong>ClaimWinger</strong> je claim company specializovaná na český trh s těmito výhodami:
            </p>
            
            <div className="space-y-4">
              <Card>
                <CardContent className="p-6">
                  <ul className="space-y-3">
                    <li className="flex items-start gap-2">
                      <CheckCircle className="h-5 w-5 text-green-600 flex-shrink-0 mt-0.5" />
                      <span><strong>Česká podpora:</strong> Komunikace v češtině, licencovaní čeští právníci</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle className="h-5 w-5 text-green-600 flex-shrink-0 mt-0.5" />
                      <span><strong>Nejnižší provize:</strong> 22% (vs. 30-40% u advokátů, 25-35% u konkurence)</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle className="h-5 w-5 text-green-600 flex-shrink-0 mt-0.5" />
                      <span><strong>Rychlé vyřízení:</strong> Typicky 30-60 dní, AI analýza do 24 hodin</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle className="h-5 w-5 text-green-600 flex-shrink-0 mt-0.5" />
                      <span><strong>No-win-no-fee:</strong> €0 předem, platíte jen při úspěchu</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle className="h-5 w-5 text-green-600 flex-shrink-0 mt-0.5" />
                      <span><strong>Úspěšnost 95%:</strong> Tisíce vyřízených nároků, zkušenosti s českými aerolinkami</span>
                    </li>
                  </ul>
                </CardContent>
              </Card>
            </div>

            <Card className="border-l-4 border-l-blue-500 bg-blue-50">
              <CardContent className="p-6">
                <p className="font-semibold mb-2">💡 Proč ClaimWinger místo advokáta?</p>
                <p>
                  ClaimWinger kombinuje <strong>automatizaci pro rychlost</strong> s <strong>lidskými právníky pro komplikované případy</strong>. Dostanete výhody advokáta (expertiza, soudní zastoupení) bez nevýhod (vysoké náklady, dlouhé čekání).
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
                  <h3 className="text-xl font-bold mb-3">Kolik stojí advokát na letecké kompenzace?</h3>
                  <p>
                    Advokát obvykle účtuje hodinovou sazbu €100-200 nebo provizi 30-40% z kompenzace. U nároku €400 zaplatíte €120-160 advokátovi, zatímco claim company bere 22-30%.
                  </p>
                </CardContent>
              </Card>

              <Card>
                <CardContent className="p-6">
                  <h3 className="text-xl font-bold mb-3">Co je lepší — advokát nebo claim company?</h3>
                  <p>
                    Pro většinu případů je claim company lepší volba — funguje na no-win-no-fee, má nižší provizi (22-30% vs. 30-40%), rychlejší vyřízení (30-90 dní vs. 6-12 měsíců) a žádné riziko předem.
                  </p>
                </CardContent>
              </Card>

              <Card>
                <CardContent className="p-6">
                  <h3 className="text-xl font-bold mb-3">Kdy se vyplatí najmout advokáta?</h3>
                  <p>
                    Advokát se vyplatí jen pokud máte komplikovaný případ (např. zranění, ztráta zavazadel nad €1500) nebo potřebujete zastoupení v trestním řízení. Pro běžné kompenzace €250-600 je claim company rychlejší a levnější.
                  </p>
                </CardContent>
              </Card>

              <Card>
                <CardContent className="p-6">
                  <h3 className="text-xl font-bold mb-3">Funguje claim company na no-win-no-fee?</h3>
                  <p>
                    Ano, všechny seriózní claim companies (ClaimWinger, AirHelp, Flightright) fungují na no-win-no-fee — platíte jen provizi při úspěchu. Pokud nárok neuspěje, neplatíte nic.
                  </p>
                </CardContent>
              </Card>

              <Card>
                <CardContent className="p-6">
                  <h3 className="text-xl font-bold mb-3">Jak dlouho trvá vymáhání přes claim company?</h3>
                  <p>
                    Typicky 30-90 dní od podání nároku. Claim company komunikuje s aerolinkou, eskaluje k soudu pokud je potřeba, a vy jen čekáte na výplatu. Advokát obvykle trvá 6-12 měsíců.
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
                Nechcete platit advokáta? Zkuste ClaimWinger zdarma
              </h2>
              <p className="text-muted-foreground">
                Žádné náklady předem, provize jen 22% při úspěchu. Tisíce spokojených českých cestujících.
              </p>
              <Button 
                size="lg" 
                className="gap-2"
                onClick={() => window.open('https://claimwinger.com/cs/zpozdeny-let?utm_source=problemlot&utm_medium=blog&utm_campaign=cs-advokat-vs-claim', '_blank')}
              >
                Zkontrolovat nárok zdarma
                <ArrowRight className="h-5 w-5" />
              </Button>
              <p className="text-sm text-muted-foreground">
                ✓ No-win-no-fee  ✓ Vyřízení do 60 dní  ✓ Česká podpora 24/7
              </p>
            </div>
          </section>

        </div>
      </article>
    </Layout>
  );
}
