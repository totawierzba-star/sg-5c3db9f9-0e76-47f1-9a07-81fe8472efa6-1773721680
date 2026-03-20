import { Layout } from "@/components/Layout";
import { SEO } from "@/components/SEO";
import { ArrowRight, Scale, CheckCircle, XCircle, Clock, TrendingUp, AlertTriangle } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { generateFAQSchema, generateArticleSchema, generateBreadcrumbSchema } from "@/lib/schemaGenerator";
import Link from "next/link";

export default function SamiVsClaimCompanyKdyPodatSam() {
  const faqSchema = generateFAQSchema([
    {
      question: "Kdy se vyplatí podat reklamaci sám?",
      answer: "Samotné podání se vyplatí pokud aerolinka reaguje, částka je nižší (€250), máte čas a trpělivost na komunikaci, a případ je jednoduchý (jasné zpoždění 3+ hodin bez sporů)."
    },
    {
      question: "Proč je claim company lepší pro komplikované případy?",
      answer: "Claim company má právní expertizu, přímé kontakty s aerolinkami, zkušenosti s odmítnutými nároky a funguje na no-win-no-fee — neplatíte nic pokud nevymůže peníze."
    },
    {
      question: "Kolik bere claim company provizi?",
      answer: "ClaimWinger bere 22% provizi při úspěchu, AirHelp 25-35%, Flightright 25-30%. Platíte pouze pokud vymůžou kompenzaci — při neúspěchu neplatíte nic."
    },
    {
      question: "Jak dlouho trvá vyřízení přes claim company?",
      answer: "ClaimWinger typicky 30-60 dní, konkurence 60-90 dní. Pokud podáváte sami a aerolinka odmítne, může to trvat 6-12 měsíců včetně soudu."
    },
    {
      question: "Můžu nejdříve zkusit sám a pak předat claim company?",
      answer: "Ano! Pokud aerolinka ignoruje nebo odmítá vaši reklamaci, můžete kdykoli předat případ ClaimWinger. Oni převezmou komunikaci a eskalují k soudu pokud je potřeba."
    }
  ]);

  const articleSchema = generateArticleSchema({
    title: "Sami vs. claim company — kdy se vyplatí podat sám?",
    description: "Zjistěte, kdy podat reklamaci sami a kdy využít claim company. Srovnání nákladů, času a úspěšnosti — najděte nejlepší strategii pro váš případ.",
    publishDate: "2026-03-12",
    modifiedDate: "2026-03-12",
    url: "https://problemlot.pl/cs/blog/sami-vs-claim-company-kdy-podat-sam"
  });

  const breadcrumbSchema = generateBreadcrumbSchema([
    { name: "Domů", url: "https://problemlot.pl/cs" },
    { name: "Blog", url: "https://problemlot.pl/cs/blog" },
    { name: "Sami vs. claim company", url: "https://problemlot.pl/cs/blog/sami-vs-claim-company-kdy-podat-sam" }
  ]);

  return (
    <Layout>
      <SEO 
        title="Sami vs. claim company — kdy se vyplatí podat sám? | Srovnání 2026"
        description="Zjistěte, kdy podat reklamaci sami a kdy využít claim company. Srovnání nákladů, času a úspěšnosti — najděte nejlepší strategii pro váš případ."
        url="https://problemlot.pl/cs/blog/sami-vs-claim-company-kdy-podat-sam"
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
            <span>Sami vs. claim company</span>
          </nav>

          {/* Header */}
          <header>
            <h1 className="text-4xl font-bold mb-4">
              Sami vs. claim company — kdy se vyplatí podat sám?
            </h1>
            <p className="text-xl text-muted-foreground">
              Komplexní srovnání samostatného podání vs. využití claim company — náklady, čas, úspěšnost a praktické tipy pro rozhodování
            </p>
            <div className="flex items-center gap-4 mt-4 text-sm text-muted-foreground">
              <time dateTime="2026-03-12">12. března 2026</time>
              <span>•</span>
              <span>9 min čtení</span>
            </div>
          </header>

          {/* Intro */}
          <section className="prose prose-lg max-w-none">
            <p className="lead text-lg">
              Když vám aerolinka <Link href="/cs/blog/narizeni-es-261-2004" className="text-primary hover:underline">dluží kompenzaci za zpoždění nebo zrušení letu</Link>, máte v podstatě dvě možnosti: <strong>podat reklamaci sami</strong> nebo <strong>využít claim company</strong>. Každá varianta má své výhody a nevýhody — od nulových nákladů až po profesionální právní zastoupení.
            </p>
            <p>
              V tomto článku vám pomůžeme rozhodnout se, která cesta je pro vás <strong>nejlepší</strong>. Porovnáme <strong>náklady, čas, úspěšnost a úsilí</strong> potřebné pro oba přístupy. Spoiler: pro většinu lidí je claim company jako <strong>ClaimWinger rychlejší, pohodlnější a často i výhodnější</strong> — díky principu no-win-no-fee nenesete žádné riziko.
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
                      <td className="p-3 text-sm">Praha–Berlín, Brno–Vídeň</td>
                    </tr>
                    <tr className="border-b border-blue-100">
                      <td className="p-3">1 500–3 500 km</td>
                      <td className="p-3 font-bold text-primary">€400</td>
                      <td className="p-3 text-sm">Praha–Madrid, Praha–Řecko</td>
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
                Pro tyto částky se rozhodujete: podat sami (0% provize, plné riziko času) vs. claim company (22-35% provize, žádné riziko).
              </p>
            </CardContent>
          </Card>

          {/* Main Comparison Table */}
          <section className="space-y-6">
            <h2 className="text-3xl font-bold">Sami vs. Claim Company — úplné srovnání</h2>
            
            <div className="overflow-x-auto">
              <table className="w-full border-collapse">
                <thead>
                  <tr className="bg-blue-50 border-b-2 border-blue-200">
                    <th className="text-left p-3 font-semibold">Kritérium</th>
                    <th className="text-left p-3 font-semibold">Sami</th>
                    <th className="text-left p-3 font-semibold">Claim Company</th>
                    <th className="text-left p-3 font-semibold">Vítěz</th>
                  </tr>
                </thead>
                <tbody>
                  <tr className="border-b border-gray-200">
                    <td className="p-3 font-medium">Náklady předem</td>
                    <td className="p-3 text-green-600 font-bold">€0</td>
                    <td className="p-3 text-green-600 font-bold">€0 (no-win-no-fee)</td>
                    <td className="p-3 text-blue-600 font-bold">Remíza</td>
                  </tr>
                  <tr className="border-b border-gray-200">
                    <td className="p-3 font-medium">Provize při úspěchu</td>
                    <td className="p-3 text-green-600 font-bold">0%</td>
                    <td className="p-3">22-35%</td>
                    <td className="p-3 text-green-600 font-bold">Sami</td>
                  </tr>
                  <tr className="border-b border-gray-200">
                    <td className="p-3 font-medium">Čas potřebný</td>
                    <td className="p-3">5-15 hodin (příprava, komunikace, soud)</td>
                    <td className="p-3 text-green-600 font-bold">0 hodin (vše dělají oni)</td>
                    <td className="p-3 text-green-600 font-bold">Claim Company</td>
                  </tr>
                  <tr className="border-b border-gray-200">
                    <td className="p-3 font-medium">Délka procesu</td>
                    <td className="p-3">6-12 měsíců (pokud odmítnou)</td>
                    <td className="p-3 text-green-600 font-bold">30-90 dní</td>
                    <td className="p-3 text-green-600 font-bold">Claim Company</td>
                  </tr>
                  <tr className="border-b border-gray-200">
                    <td className="p-3 font-medium">Úspěšnost (pokud odmítnou)</td>
                    <td className="p-3">40-60% (bez právní pomoci)</td>
                    <td className="p-3 text-green-600 font-bold">85-95%</td>
                    <td className="p-3 text-green-600 font-bold">Claim Company</td>
                  </tr>
                  <tr className="border-b border-gray-200">
                    <td className="p-3 font-medium">Riziko neúspěchu</td>
                    <td className="p-3">❌ Ztráta času (5-15 hodin)</td>
                    <td className="p-3 text-green-600 font-bold">✅ Nulové (no-win-no-fee)</td>
                    <td className="p-3 text-green-600 font-bold">Claim Company</td>
                  </tr>
                  <tr className="border-b border-gray-200">
                    <td className="p-3 font-medium">Schopnost eskalovat k soudu</td>
                    <td className="p-3">⚠️ Nutný právník (€500-2000)</td>
                    <td className="p-3 text-green-600 font-bold">✅ Zahrnuto v provizi</td>
                    <td className="p-3 text-green-600 font-bold">Claim Company</td>
                  </tr>
                  <tr className="border-b border-gray-200">
                    <td className="p-3 font-medium">Znalost ES 261/2004</td>
                    <td className="p-3">⚠️ Musíte se naučit</td>
                    <td className="p-3 text-green-600 font-bold">✅ Experti</td>
                    <td className="p-3 text-green-600 font-bold">Claim Company</td>
                  </tr>
                  <tr>
                    <td className="p-3 font-medium">Vhodné pro</td>
                    <td className="p-3">Jednoduché případy, aerolinka platí dobrovolně</td>
                    <td className="p-3">Všechny případy — zejména pokud aerolinka odmítá</td>
                    <td className="p-3 text-blue-600 font-bold">Záleží na případu</td>
                  </tr>
                </tbody>
              </table>
            </div>

            <Card className="border-l-4 border-l-blue-500 bg-blue-50 mt-4">
              <CardContent className="p-6">
                <p className="font-semibold mb-2">💡 Závěr:</p>
                <p>
                  <strong>Sami se vyplatí jen pokud</strong>: aerolinka platí dobrovolně (bez sporů), máte čas a trpělivost, a částka je nižší (€250). <strong>Claim company je lepší pokud</strong>: aerolinka odmítá, případ je komplikovaný, nebo nemáte čas na měsíce komunikace a potenciální soud.
                </p>
              </CardContent>
            </Card>
          </section>

          <section className="space-y-6">
            <h2 className="text-3xl font-bold">Kdy se vyplatí podat reklamaci sami?</h2>
            
            <Card className="border-l-4 border-l-green-500">
              <CardContent className="p-6">
                <h3 className="text-xl font-bold mb-3 flex items-center gap-2">
                  <CheckCircle className="h-6 w-6 text-green-600" />
                  Situace vhodné pro samostatné podání
                </h3>
                <ul className="space-y-3">
                  <li className="flex items-start gap-2">
                    <ArrowRight className="h-4 w-4 text-green-600 flex-shrink-0 mt-0.5" />
                    <div>
                      <strong>1. Aerolinka reaguje pozitivně</strong>
                      <p className="text-sm text-muted-foreground">Pokud aerolinka odpovídá na e-maily a neuznává mimořádné okolnosti — šance na úspěch je vysoká i bez právní pomoci.</p>
                    </div>
                  </li>
                  <li className="flex items-start gap-2">
                    <ArrowRight className="h-4 w-4 text-green-600 flex-shrink-0 mt-0.5" />
                    <div>
                      <strong>2. Jednoduchý případ</strong>
                      <p className="text-sm text-muted-foreground">Jasné zpoždění 3+ hodin, žádné spory o mimořádné okolnosti, máte všechny doklady (palubní vstupenku, potvrzení zpoždění).</p>
                    </div>
                  </li>
                  <li className="flex items-start gap-2">
                    <ArrowRight className="h-4 w-4 text-green-600 flex-shrink-0 mt-0.5" />
                    <div>
                      <strong>3. Máte čas a trpělivost</strong>
                      <p className="text-sm text-muted-foreground">Komunikace může trvat 2-6 měsíců, budete psát e-maily, telefonovat, případně chodit na úřady. Pokud máte čas, můžete ušetřit 22-35% provizi.</p>
                    </div>
                  </li>
                  <li className="flex items-start gap-2">
                    <ArrowRight className="h-4 w-4 text-green-600 flex-shrink-0 mt-0.5" />
                    <div>
                      <strong>4. Nižší částka (€250)</strong>
                      <p className="text-sm text-muted-foreground">Pokud je nárok €250, provize claim company je €55-88. Pokud máte čas, můžete si těch €55 ušetřit a vyřídit si to sami.</p>
                    </div>
                  </li>
                </ul>
              </CardContent>
            </Card>

            <Card className="border-l-4 border-l-orange-500 bg-orange-50">
              <CardContent className="p-6">
                <p className="font-semibold mb-2">⚠️ Rizika samostatného podání:</p>
                <ul className="space-y-2 text-sm">
                  <li className="flex items-start gap-2">
                    <ArrowRight className="h-4 w-4 text-orange-600 flex-shrink-0 mt-0.5" />
                    <span><strong>Odmítnutí nároku:</strong> Pokud aerolinka odmítne, budete potřebovat právníka (€500-2000) nebo vzdát nárok</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <ArrowRight className="h-4 w-4 text-orange-600 flex-shrink-0 mt-0.5" />
                    <span><strong>Ztráta času:</strong> 5-15 hodin na přípravu, komunikaci, potenciální soud</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <ArrowRight className="h-4 w-4 text-orange-600 flex-shrink-0 mt-0.5" />
                    <span><strong>Stres:</strong> Neustálé sledování e-mailů, telefonáty, formuláře</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <ArrowRight className="h-4 w-4 text-orange-600 flex-shrink-0 mt-0.5" />
                    <span><strong>Promlčení:</strong> Pokud jednáte pomalu, nárok může promlčet (3 roky od letu)</span>
                  </li>
                </ul>
              </CardContent>
            </Card>
          </section>

          <section className="space-y-6">
            <h2 className="text-3xl font-bold">Kdy využít claim company?</h2>
            
            <Card className="border-l-4 border-l-green-500 bg-green-50">
              <CardContent className="p-6">
                <h3 className="text-xl font-bold mb-3 flex items-center gap-2">
                  <CheckCircle className="h-6 w-6 text-green-600" />
                  Situace vhodné pro claim company
                </h3>
                <ul className="space-y-3">
                  <li className="flex items-start gap-2">
                    <ArrowRight className="h-4 w-4 text-green-600 flex-shrink-0 mt-0.5" />
                    <div>
                      <strong>1. Aerolinka ignoruje nebo odmítá</strong>
                      <p className="text-sm text-muted-foreground">Pokud aerolinka neodpovídá, tvrdí mimořádné okolnosti nebo nabízí voucher místo peněz — claim company má větší pravomoc a zkušenosti s těmito taktikami.</p>
                    </div>
                  </li>
                  <li className="flex items-start gap-2">
                    <ArrowRight className="h-4 w-4 text-green-600 flex-shrink-0 mt-0.5" />
                    <div>
                      <strong>2. Komplikovaný případ</strong>
                      <p className="text-sm text-muted-foreground">Zmeškané přestup, sporné mimořádné okolnosti, technická závada — claim company má právníky specializované na ES 261/2004.</p>
                    </div>
                  </li>
                  <li className="flex items-start gap-2">
                    <ArrowRight className="h-4 w-4 text-green-600 flex-shrink-0 mt-0.5" />
                    <div>
                      <strong>3. Nemáte čas</strong>
                      <p className="text-sm text-muted-foreground">Claim company vyřídí vše za vás — podání, komunikace, eskalace k soudu. Vy jen čekáte na výplatu.</p>
                    </div>
                  </li>
                  <li className="flex items-start gap-2">
                    <ArrowRight className="h-4 w-4 text-green-600 flex-shrink-0 mt-0.5" />
                    <div>
                      <strong>4. Vyšší částka (€400-600)</strong>
                      <p className="text-sm text-muted-foreground">Provize €88-210 (22-35%) se vyplatí za profesionální vyřízení bez stresu a s vysokou úspěšností.</p>
                    </div>
                  </li>
                  <li className="flex items-start gap-2">
                    <ArrowRight className="h-4 w-4 text-green-600 flex-shrink-0 mt-0.5" />
                    <div>
                      <strong>5. Chcete jistotu</strong>
                      <p className="text-sm text-muted-foreground">No-win-no-fee znamená nulové riziko — pokud claim company nevymůže peníze, neplatíte nic. Pokud podáváte sami a selžete, ztratíte čas.</p>
                    </div>
                  </li>
                </ul>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="p-6">
                <h3 className="text-xl font-bold mb-3 flex items-center gap-2">
                  <TrendingUp className="h-6 w-6 text-primary" />
                  Příklad: Nárok €400 — srovnání
                </h3>
                <div className="grid md:grid-cols-2 gap-4">
                  <div>
                    <h4 className="font-bold mb-2">Podání sami:</h4>
                    <ul className="space-y-1 text-sm">
                      <li>✅ Dostanete: €400 (100%)</li>
                      <li>❌ Čas: 5-15 hodin</li>
                      <li>❌ Riziko odmítnutí: vysoké</li>
                      <li>❌ Soud: €500-2000 extra</li>
                    </ul>
                  </div>
                  <div>
                    <h4 className="font-bold mb-2">Přes ClaimWinger:</h4>
                    <ul className="space-y-1 text-sm">
                      <li>✅ Dostanete: €312 (78%)</li>
                      <li>✅ Čas: 0 hodin</li>
                      <li>✅ Riziko: nulové (no-win-no-fee)</li>
                      <li>✅ Soud: zahrnuto v provizi</li>
                    </ul>
                  </div>
                </div>
                <p className="mt-3 text-sm text-muted-foreground">
                  <strong>Verdikt:</strong> Ušetříte €88 (22%) pokud podáte sami, ale riskujete 5-15 hodin času + vysoké riziko odmítnutí. ClaimWinger vám garantuje €312 bez práce a rizika.
                </p>
              </CardContent>
            </Card>
          </section>

          <section className="space-y-6">
            <h2 className="text-3xl font-bold">Hybridní strategie — nejlepší z obou světů</h2>
            
            <Card className="border-l-4 border-l-blue-500 bg-blue-50">
              <CardContent className="p-6">
                <h3 className="text-xl font-bold mb-3 flex items-center gap-2">
                  <Clock className="h-6 w-6 text-primary" />
                  Doporučený postup krok za krokem
                </h3>
                <ol className="space-y-3">
                  <li className="flex items-start gap-3">
                    <span className="flex-shrink-0 flex items-center justify-center w-8 h-8 rounded-full bg-blue-500 text-white font-bold text-sm">1</span>
                    <div>
                      <strong>Zkuste nejdříve sami (2 týdny)</strong>
                      <p className="text-sm text-muted-foreground mt-1">Pošlete jednoduchou reklamaci aerolinii. Použijte e-mailový formulář nebo kontaktní adresu. Vyčkejte 14 dní.</p>
                    </div>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="flex-shrink-0 flex items-center justify-center w-8 h-8 rounded-full bg-blue-500 text-white font-bold text-sm">2</span>
                    <div>
                      <strong>Pokud aerolinka platí — výhra!</strong>
                      <p className="text-sm text-muted-foreground mt-1">Dostanete plnou částku €250-600 bez provize. Vyřízeno za 2-4 týdny.</p>
                    </div>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="flex-shrink-0 flex items-center justify-center w-8 h-8 rounded-full bg-orange-500 text-white font-bold text-sm">3</span>
                    <div>
                      <strong>Pokud ignorují nebo odmítají — předejte ClaimWinger</strong>
                      <p className="text-sm text-muted-foreground mt-1">Registrujte nárok online, ClaimWinger převezme komunikaci. Oni mají větší pravomoc a zkušenosti s odmítnutými nároky.</p>
                    </div>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="flex-shrink-0 flex items-center justify-center w-8 h-8 rounded-full bg-green-500 text-white font-bold text-sm">4</span>
                    <div>
                      <strong>ClaimWinger eskaluje k soudu pokud potřeba</strong>
                      <p className="text-sm text-muted-foreground mt-1">Pokud aerolinka nadále odmítá, ClaimWinger podá žalobu k soudu. Vy neplatíte nic extra — soud je zahrnut v 22% provizi.</p>
                    </div>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="flex-shrink-0 flex items-center justify-center w-8 h-8 rounded-full bg-green-500 text-white font-bold text-sm">5</span>
                    <div>
                      <strong>Dostanete peníze na účet</strong>
                      <p className="text-sm text-muted-foreground mt-1">Po úspěšném vyřízení dostanete €195-468 (78% z kompenzace) na váš bankovní účet. Typicky 30-90 dní od předání ClaimWinger.</p>
                    </div>
                  </li>
                </ol>
              </CardContent>
            </Card>

            <Card className="border-l-4 border-l-green-500 bg-green-50">
              <CardContent className="p-6">
                <p className="font-semibold mb-2">✅ Výhody hybridní strategie:</p>
                <ul className="space-y-2 text-sm">
                  <li className="flex items-start gap-2">
                    <ArrowRight className="h-4 w-4 text-green-600 flex-shrink-0 mt-0.5" />
                    <span>Pokud aerolinka platí dobrovolně, dostanete plnou částku (0% provize)</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <ArrowRight className="h-4 w-4 text-green-600 flex-shrink-0 mt-0.5" />
                    <span>Pokud odmítají, máte záchrannou síť (ClaimWinger převezme)</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <ArrowRight className="h-4 w-4 text-green-600 flex-shrink-0 mt-0.5" />
                    <span>Minimální ztráta času (jen 1 e-mail, pak předáte)</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <ArrowRight className="h-4 w-4 text-green-600 flex-shrink-0 mt-0.5" />
                    <span>Nulové riziko nákladů (no-win-no-fee u ClaimWinger)</span>
                  </li>
                </ul>
              </CardContent>
            </Card>
          </section>

          <section className="space-y-6">
            <h2 className="text-3xl font-bold">ClaimWinger — když aerolinka odmítá</h2>
            
            <Card>
              <CardContent className="p-6">
                <h3 className="text-xl font-bold mb-3">Proč ClaimWinger funguje lépe než samostatné podání?</h3>
                <ul className="space-y-3">
                  <li className="flex items-start gap-2">
                    <CheckCircle className="h-5 w-5 text-green-600 flex-shrink-0 mt-0.5" />
                    <span><strong>Přímé kontakty s aerolinkami:</strong> ClaimWinger vymáhá tisíce nároků ročně — aerolinie vědí, že půjdou k soudu pokud odmítnou</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="h-5 w-5 text-green-600 flex-shrink-0 mt-0.5" />
                    <span><strong>Právní expertise ES 261/2004:</strong> Specialisté znají všechny triky aerolinií — mimořádné okolnosti, technické závady, změny rozvrhu</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="h-5 w-5 text-green-600 flex-shrink-0 mt-0.5" />
                    <span><strong>Soudní zastoupení:</strong> Pokud aerolinka odmítá, ClaimWinger podá žalobu k soudu — zahrnuto v 22% provizi</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="h-5 w-5 text-green-600 flex-shrink-0 mt-0.5" />
                    <span><strong>No-win-no-fee:</strong> Platíte jen při úspěchu. Pokud nevymůžou peníze, neplatíte nic</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="h-5 w-5 text-green-600 flex-shrink-0 mt-0.5" />
                    <span><strong>Česká podpora:</strong> Komunikace v češtině, licencovaní čeští právníci, znalost českého trhu</span>
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
                  <h3 className="text-xl font-bold mb-3">Kdy se vyplatí podat reklamaci sám?</h3>
                  <p>
                    Samotné podání se vyplatí pokud aerolinka reaguje, částka je nižší (€250), máte čas a trpělivost na komunikaci, a případ je jednoduchý (jasné zpoždění 3+ hodin bez sporů).
                  </p>
                </CardContent>
              </Card>

              <Card>
                <CardContent className="p-6">
                  <h3 className="text-xl font-bold mb-3">Proč je claim company lepší pro komplikované případy?</h3>
                  <p>
                    Claim company má právní expertizu, přímé kontakty s aerolinkami, zkušenosti s odmítnutými nároky a funguje na no-win-no-fee — neplatíte nic pokud nevymůže peníze.
                  </p>
                </CardContent>
              </Card>

              <Card>
                <CardContent className="p-6">
                  <h3 className="text-xl font-bold mb-3">Kolik bere claim company provizi?</h3>
                  <p>
                    ClaimWinger bere 22% provizi při úspěchu, AirHelp 25-35%, Flightright 25-30%. Platíte pouze pokud vymůžou kompenzaci — při neúspěchu neplatíte nic.
                  </p>
                </CardContent>
              </Card>

              <Card>
                <CardContent className="p-6">
                  <h3 className="text-xl font-bold mb-3">Jak dlouho trvá vyřízení přes claim company?</h3>
                  <p>
                    ClaimWinger typicky 30-60 dní, konkurence 60-90 dní. Pokud podáváte sami a aerolinka odmítne, může to trvat 6-12 měsíců včetně soudu.
                  </p>
                </CardContent>
              </Card>

              <Card>
                <CardContent className="p-6">
                  <h3 className="text-xl font-bold mb-3">Můžu nejdříve zkusit sám a pak předat claim company?</h3>
                  <p>
                    Ano! Pokud aerolinka ignoruje nebo odmítá vaši reklamaci, můžete kdykoli předat případ ClaimWinger. Oni převezmou komunikaci a eskalují k soudu pokud je potřeba.
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
                Aerolinka ignoruje nebo odmítá? Předejte ClaimWinger
              </h2>
              <p className="text-muted-foreground">
                No-win-no-fee, provize jen 22%, vyřízení do 60 dní. Tisíce spokojených českých cestujících.
              </p>
              <Button 
                size="lg" 
                className="gap-2"
                onClick={() => window.open('https://claimwinger.com/cs/zpozdeny-let?utm_source=problemlot&utm_medium=blog&utm_campaign=cs-sami-vs-claim', '_blank')}
              >
                Zkontrolovat nárok zdarma
                <ArrowRight className="h-5 w-5" />
              </Button>
              <p className="text-sm text-muted-foreground">
                ✓ Žádné náklady předem  ✓ Platíte jen při úspěchu  ✓ Česká podpora 24/7
              </p>
            </div>
          </section>

        </div>
      </article>
    </Layout>
  );
}
