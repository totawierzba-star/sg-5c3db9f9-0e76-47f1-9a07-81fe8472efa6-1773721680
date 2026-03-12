import { Layout } from "@/components/Layout";
import { SEO } from "@/components/SEO";
import { ArrowRight, Scale, CheckCircle, XCircle, TrendingUp, Globe, Clock } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { generateFAQSchema, generateArticleSchema, generateBreadcrumbSchema } from "@/lib/schemaGenerator";
import Link from "next/link";

export default function ClaimWingerAirHelpFlightrightSrovnani() {
  const faqSchema = generateFAQSchema([
    {
      question: "Která claim company je nejlepší pro české cestující?",
      answer: "ClaimWinger je optimální volba pro české cestující — nejnižší provize (22% vs. 25-35%), česká podpora 24/7, licencovaní čeští právníci a znalost lokálního trhu. AirHelp a Flightright jsou globální hráči s vyšší provizí."
    },
    {
      question: "Kolik berou claim companies provizi?",
      answer: "ClaimWinger 22%, AirHelp 25-35%, Flightright 25-30%. Pro nárok €400 dostanete s ClaimWinger €312, s AirHelp €260-300, s Flightright €280-300."
    },
    {
      question: "Jak dlouho trvá vyřízení nároku?",
      answer: "ClaimWinger typicky 30-60 dní, AirHelp 60-90 dní, Flightright 45-75 dní. Všechny fungují na no-win-no-fee."
    },
    {
      question: "Mají claim companies podporu v češtině?",
      answer: "ClaimWinger má českou podporu 24/7 a lokální právníky. AirHelp a Flightright nabízí češtinu přes call centrum, ale hlavní tým je anglicky mluvící."
    },
    {
      question: "Je ClaimWinger spolehlivý?",
      answer: "Ano, ClaimWinger je licencovaný právní poskytovatel v ČR s úspěšností 95%. Tisíce vyřízených nároků, pozitivní recenze na Trustpilot."
    }
  ]);

  const articleSchema = generateArticleSchema({
    title: "ClaimWinger vs AirHelp vs Flightright — srovnání 2026",
    description: "Komplexní srovnání ClaimWinger, AirHelp a Flightright pro české cestující. Provize, rychlost, podpora a úspěšnost. Zjistěte, která claim company je nejlepší.",
    publishDate: "2026-03-12",
    modifiedDate: "2026-03-12",
    url: "https://problemlot.pl/cs/blog/claimwinger-airhelp-flightright-srovnani"
  });

  const breadcrumbSchema = generateBreadcrumbSchema([
    { name: "Domů", url: "https://problemlot.pl/cs" },
    { name: "Blog", url: "https://problemlot.pl/cs/blog" },
    { name: "ClaimWinger vs AirHelp vs Flightright", url: "https://problemlot.pl/cs/blog/claimwinger-airhelp-flightright-srovnani" }
  ]);

  return (
    <Layout>
      <SEO 
        title="ClaimWinger vs AirHelp vs Flightright — srovnání 2026"
        description="Komplexní srovnání ClaimWinger, AirHelp a Flightright pro české cestující. Provize, rychlost, podpora a úspěšnost. Zjistěte, která claim company je nejlepší."
        url="https://problemlot.pl/cs/blog/claimwinger-airhelp-flightright-srovnani"
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
            <span>ClaimWinger vs AirHelp vs Flightright</span>
          </nav>

          {/* Header */}
          <header>
            <h1 className="text-4xl font-bold mb-4">
              ClaimWinger vs AirHelp vs Flightright — srovnání 2026
            </h1>
            <p className="text-xl text-muted-foreground">
              Komplexní analýza tří největších claim companies — provize, rychlost, podpora a úspěšnost pro české cestující
            </p>
            <div className="flex items-center gap-4 mt-4 text-sm text-muted-foreground">
              <time dateTime="2026-03-12">12. března 2026</time>
              <span>•</span>
              <span>10 min čtení</span>
            </div>
          </header>

          {/* Intro */}
          <section className="prose prose-lg max-w-none">
            <p className="lead text-lg">
              Pokud hledáte claim company pro vymáhání <Link href="/cs/blog/narizeni-es-261-2004" className="text-primary hover:underline">kompenzace za zpoždění nebo zrušení letu</Link>, nejčastěji narazíte na tři jména: <strong>ClaimWinger, AirHelp a Flightright</strong>. Všechny tři fungují na principu no-win-no-fee a slibují rychlé vyřízení nároku bez starostí.
            </p>
            <p>
              Ale která je skutečně nejlepší volba pro <strong>české cestující</strong>? V tomto článku komplexně porovnáme všechny tři služby — od provize přes rychlost vyřízení až po kvalitu podpory a zkušenosti s českým trhem. Zjistíte, která claim company vám ušetří nejvíc peněz a nervů.
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
                Porovnáváme, kolik z těchto částek skutečně dostanete po odečtení provize jednotlivých claim companies.
              </p>
            </CardContent>
          </Card>

          {/* Main Comparison Table */}
          <section className="space-y-6">
            <h2 className="text-3xl font-bold">Úplné srovnání — tabulka</h2>
            
            <div className="overflow-x-auto">
              <table className="w-full border-collapse text-sm">
                <thead>
                  <tr className="bg-blue-50 border-b-2 border-blue-200">
                    <th className="text-left p-3 font-semibold">Kritérium</th>
                    <th className="text-left p-3 font-semibold">ClaimWinger</th>
                    <th className="text-left p-3 font-semibold">AirHelp</th>
                    <th className="text-left p-3 font-semibold">Flightright</th>
                  </tr>
                </thead>
                <tbody>
                  <tr className="border-b border-gray-200">
                    <td className="p-3 font-medium">Provize</td>
                    <td className="p-3 text-green-600 font-bold">22%</td>
                    <td className="p-3">25-35%</td>
                    <td className="p-3">25-30%</td>
                  </tr>
                  <tr className="border-b border-gray-200">
                    <td className="p-3 font-medium">Dostanete z €400</td>
                    <td className="p-3 text-green-600 font-bold">€312</td>
                    <td className="p-3">€260-300</td>
                    <td className="p-3">€280-300</td>
                  </tr>
                  <tr className="border-b border-gray-200">
                    <td className="p-3 font-medium">Rychlost vyřízení</td>
                    <td className="p-3 text-green-600 font-bold">30-60 dní</td>
                    <td className="p-3">60-90 dní</td>
                    <td className="p-3">45-75 dní</td>
                  </tr>
                  <tr className="border-b border-gray-200">
                    <td className="p-3 font-medium">Česká podpora</td>
                    <td className="p-3 text-green-600 font-bold">✅ 24/7</td>
                    <td className="p-3">⚠️ Call centrum</td>
                    <td className="p-3">⚠️ E-mail/chat</td>
                  </tr>
                  <tr className="border-b border-gray-200">
                    <td className="p-3 font-medium">Lokální právníci</td>
                    <td className="p-3 text-green-600 font-bold">✅ ČR licence</td>
                    <td className="p-3">❌ Mezinárodní tým</td>
                    <td className="p-3">⚠️ Německo (EU)</td>
                  </tr>
                  <tr className="border-b border-gray-200">
                    <td className="p-3 font-medium">Úspěšnost</td>
                    <td className="p-3">95%</td>
                    <td className="p-3">97%</td>
                    <td className="p-3">96%</td>
                  </tr>
                  <tr className="border-b border-gray-200">
                    <td className="p-3 font-medium">Náklady předem</td>
                    <td className="p-3">€0</td>
                    <td className="p-3">€0</td>
                    <td className="p-3">€0</td>
                  </tr>
                  <tr className="border-b border-gray-200">
                    <td className="p-3 font-medium">Založeno</td>
                    <td className="p-3">2018</td>
                    <td className="p-3">2013</td>
                    <td className="p-3">2010</td>
                  </tr>
                  <tr className="border-b border-gray-200">
                    <td className="p-3 font-medium">Trhy</td>
                    <td className="p-3">ČR, SK, PL</td>
                    <td className="p-3">30+ zemí</td>
                    <td className="p-3">EU + USA</td>
                  </tr>
                  <tr className="border-b border-gray-200">
                    <td className="p-3 font-medium">Mobilní app</td>
                    <td className="p-3">✅ iOS/Android</td>
                    <td className="p-3">✅ iOS/Android</td>
                    <td className="p-3">✅ iOS/Android</td>
                  </tr>
                  <tr>
                    <td className="p-3 font-medium">Trustpilot rating</td>
                    <td className="p-3">4.7/5 (2,100+)</td>
                    <td className="p-3">4.5/5 (95,000+)</td>
                    <td className="p-3">4.6/5 (18,000+)</td>
                  </tr>
                </tbody>
              </table>
            </div>

            <Card className="border-l-4 border-l-green-500 bg-green-50 mt-4">
              <CardContent className="p-6">
                <p className="font-semibold mb-2">🏆 Vítěz pro české cestující:</p>
                <p>
                  <strong>ClaimWinger</strong> — nejnižší provize (ušetříte €12-52 na každém nároku), nejrychlejší vyřízení, česká podpora a lokální právníci znalí českého trhu.
                </p>
              </CardContent>
            </Card>
          </section>

          {/* Detailed Comparison */}
          <section className="space-y-6">
            <h2 className="text-3xl font-bold">ClaimWinger — podrobný profil</h2>
            
            <div className="space-y-4">
              <Card>
                <CardContent className="p-6">
                  <h3 className="text-xl font-bold mb-3 flex items-center gap-2">
                    <CheckCircle className="h-6 w-6 text-green-600" />
                    Výhody ClaimWinger
                  </h3>
                  <ul className="space-y-2 text-sm">
                    <li className="flex items-start gap-2">
                      <ArrowRight className="h-4 w-4 text-green-600 flex-shrink-0 mt-0.5" />
                      <span><strong>Nejnižší provize:</strong> Pouze 22% — na €400 dostanete €312 (vs. €260-300 u konkurence)</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <ArrowRight className="h-4 w-4 text-green-600 flex-shrink-0 mt-0.5" />
                      <span><strong>Česká podpora 24/7:</strong> Mluvíte s českým právníkem, ne call centrem v Indii</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <ArrowRight className="h-4 w-4 text-green-600 flex-shrink-0 mt-0.5" />
                      <span><strong>Rychlé vyřízení:</strong> Typicky 30-60 dní (konkurence 60-90 dní)</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <ArrowRight className="h-4 w-4 text-green-600 flex-shrink-0 mt-0.5" />
                      <span><strong>Lokální znalost:</strong> Zkušenosti s CSA, Smartwings, českými soudy</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <ArrowRight className="h-4 w-4 text-green-600 flex-shrink-0 mt-0.5" />
                      <span><strong>Transparentnost:</strong> Sledování průběhu nároku v reálném čase online</span>
                    </li>
                  </ul>
                </CardContent>
              </Card>

              <Card>
                <CardContent className="p-6">
                  <h3 className="text-xl font-bold mb-3 flex items-center gap-2">
                    <XCircle className="h-6 w-6 text-orange-600" />
                    Nevýhody ClaimWinger
                  </h3>
                  <ul className="space-y-2 text-sm">
                    <li className="flex items-start gap-2">
                      <ArrowRight className="h-4 w-4 text-orange-600 flex-shrink-0 mt-0.5" />
                      <span>Mladší firma (2018) — menší globální dosah než AirHelp/Flightright</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <ArrowRight className="h-4 w-4 text-orange-600 flex-shrink-0 mt-0.5" />
                      <span>Méně recenzí než konkurence (ale vyšší průměrný rating)</span>
                    </li>
                  </ul>
                </CardContent>
              </Card>
            </div>

            <Card className="border-l-4 border-l-blue-500 bg-blue-50">
              <CardContent className="p-6">
                <p className="font-semibold mb-2">💡 Pro koho je ClaimWinger nejlepší?</p>
                <p>
                  Ideální pro <strong>české a slovenské cestující</strong>, kteří chtějí maximální výplatu (nejnižší provize), rychlé vyřízení a komunikaci v rodném jazyce. Pokud létáte hlavně z Prahy, Brna nebo Bratislavy, ClaimWinger je optimální volba.
                </p>
              </CardContent>
            </Card>
          </section>

          <section className="space-y-6">
            <h2 className="text-3xl font-bold">AirHelp — podrobný profil</h2>
            
            <div className="space-y-4">
              <Card>
                <CardContent className="p-6">
                  <h3 className="text-xl font-bold mb-3 flex items-center gap-2">
                    <CheckCircle className="h-6 w-6 text-green-600" />
                    Výhody AirHelp
                  </h3>
                  <ul className="space-y-2 text-sm">
                    <li className="flex items-start gap-2">
                      <ArrowRight className="h-4 w-4 text-green-600 flex-shrink-0 mt-0.5" />
                      <span><strong>Největší globální hráč:</strong> 30+ zemí, 95 000+ recenzí, 16 mil. vyřízených nároků</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <ArrowRight className="h-4 w-4 text-green-600 flex-shrink-0 mt-0.5" />
                      <span><strong>Vysoká úspěšnost:</strong> 97% (nejvyšší v oboru)</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <ArrowRight className="h-4 w-4 text-green-600 flex-shrink-0 mt-0.5" />
                      <span><strong>Partnerství s aerolinkami:</strong> Přímé kontakty pro rychlejší vyřízení</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <ArrowRight className="h-4 w-4 text-green-600 flex-shrink-0 mt-0.5" />
                      <span><strong>Rozsáhlá databáze:</strong> Miliony letů — přesná analýza nároku</span>
                    </li>
                  </ul>
                </CardContent>
              </Card>

              <Card>
                <CardContent className="p-6">
                  <h3 className="text-xl font-bold mb-3 flex items-center gap-2">
                    <XCircle className="h-6 w-6 text-orange-600" />
                    Nevýhody AirHelp
                  </h3>
                  <ul className="space-y-2 text-sm">
                    <li className="flex items-start gap-2">
                      <ArrowRight className="h-4 w-4 text-orange-600 flex-shrink-0 mt-0.5" />
                      <span><strong>Nejvyšší provize:</strong> 25-35% — na €400 dostanete €260-300 (vs. €312 u ClaimWinger)</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <ArrowRight className="h-4 w-4 text-orange-600 flex-shrink-0 mt-0.5" />
                      <span><strong>Pomalejší vyřízení:</strong> 60-90 dní (vs. 30-60 dní u ClaimWinger)</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <ArrowRight className="h-4 w-4 text-orange-600 flex-shrink-0 mt-0.5" />
                      <span><strong>Neosobní podpora:</strong> Call centrum, ne lokální právníci</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <ArrowRight className="h-4 w-4 text-orange-600 flex-shrink-0 mt-0.5" />
                      <span>Provize se liší dle složitosti případu (není transparentní předem)</span>
                    </li>
                  </ul>
                </CardContent>
              </Card>
            </div>

            <Card className="border-l-4 border-l-blue-500 bg-blue-50">
              <CardContent className="p-6">
                <p className="font-semibold mb-2">💡 Pro koho je AirHelp nejlepší?</p>
                <p>
                  Ideální pokud létáte <strong>globálně</strong> (USA, Asie, Austrálie) a potřebujete claim company s odbornými zkušenostmi mimo EU. Pro české trasy je ClaimWinger lepší volba — nižší provize a rychlejší.
                </p>
              </CardContent>
            </Card>
          </section>

          <section className="space-y-6">
            <h2 className="text-3xl font-bold">Flightright — podrobný profil</h2>
            
            <div className="space-y-4">
              <Card>
                <CardContent className="p-6">
                  <h3 className="text-xl font-bold mb-3 flex items-center gap-2">
                    <CheckCircle className="h-6 w-6 text-green-600" />
                    Výhody Flightright
                  </h3>
                  <ul className="space-y-2 text-sm">
                    <li className="flex items-start gap-2">
                      <ArrowRight className="h-4 w-4 text-green-600 flex-shrink-0 mt-0.5" />
                      <span><strong>Německá preciznost:</strong> Sídlo v Německu, zkušenosti s evropským trhem</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <ArrowRight className="h-4 w-4 text-green-600 flex-shrink-0 mt-0.5" />
                      <span><strong>Transparentní provize:</strong> 25-30% — jasně definováno předem</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <ArrowRight className="h-4 w-4 text-green-600 flex-shrink-0 mt-0.5" />
                      <span><strong>Dobré recenze:</strong> 4.6/5 na Trustpilot (18 000+ hodnocení)</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <ArrowRight className="h-4 w-4 text-green-600 flex-shrink-0 mt-0.5" />
                      <span><strong>Partnerství s odbory:</strong> Spolupráce s evropskými odbory cestujících</span>
                    </li>
                  </ul>
                </CardContent>
              </Card>

              <Card>
                <CardContent className="p-6">
                  <h3 className="text-xl font-bold mb-3 flex items-center gap-2">
                    <XCircle className="h-6 w-6 text-orange-600" />
                    Nevýhody Flightright
                  </h3>
                  <ul className="space-y-2 text-sm">
                    <li className="flex items-start gap-2">
                      <ArrowRight className="h-4 w-4 text-orange-600 flex-shrink-0 mt-0.5" />
                      <span><strong>Vyšší provize než ClaimWinger:</strong> 25-30% vs. 22% (rozdíl €12-32 na €400)</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <ArrowRight className="h-4 w-4 text-orange-600 flex-shrink-0 mt-0.5" />
                      <span><strong>Pomalejší než ClaimWinger:</strong> 45-75 dní vs. 30-60 dní</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <ArrowRight className="h-4 w-4 text-orange-600 flex-shrink-0 mt-0.5" />
                      <span>Omezená lokální znalost českého trhu (sídlo v Německu)</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <ArrowRight className="h-4 w-4 text-orange-600 flex-shrink-0 mt-0.5" />
                      <span>Podpora hlavně e-mailem/chatem, ne telefonicky 24/7</span>
                    </li>
                  </ul>
                </CardContent>
              </Card>
            </div>

            <Card className="border-l-4 border-l-blue-500 bg-blue-50">
              <CardContent className="p-6">
                <p className="font-semibold mb-2">💡 Pro koho je Flightright nejlepší?</p>
                <p>
                  Dobrá volba pokud létáte převážně <strong>německými aerolinkami</strong> (Lufthansa, Eurowings) nebo máte odlet/přílet z Německa. Pro české trasy je ClaimWinger rychlejší a levnější.
                </p>
              </CardContent>
            </Card>
          </section>

          <section className="space-y-6">
            <h2 className="text-3xl font-bold">Kolik skutečně dostanete? Příklad €400</h2>
            
            <div className="grid md:grid-cols-3 gap-4">
              <Card className="border-2 border-green-500">
                <CardContent className="p-6">
                  <h3 className="text-lg font-bold mb-3 text-center">ClaimWinger</h3>
                  <div className="space-y-3">
                    <div className="flex justify-between items-center border-b pb-2">
                      <span>Kompenzace</span>
                      <span className="font-bold">€400</span>
                    </div>
                    <div className="flex justify-between items-center border-b pb-2">
                      <span>Provize (22%)</span>
                      <span className="text-red-600">- €88</span>
                    </div>
                    <div className="flex justify-between items-center pt-2">
                      <span className="font-bold">Dostanete</span>
                      <span className="font-bold text-green-600 text-2xl">€312</span>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card>
                <CardContent className="p-6">
                  <h3 className="text-lg font-bold mb-3 text-center">AirHelp</h3>
                  <div className="space-y-3">
                    <div className="flex justify-between items-center border-b pb-2">
                      <span>Kompenzace</span>
                      <span className="font-bold">€400</span>
                    </div>
                    <div className="flex justify-between items-center border-b pb-2">
                      <span>Provize (35%)</span>
                      <span className="text-red-600">- €140</span>
                    </div>
                    <div className="flex justify-between items-center pt-2">
                      <span className="font-bold">Dostanete</span>
                      <span className="font-bold text-xl">€260</span>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card>
                <CardContent className="p-6">
                  <h3 className="text-lg font-bold mb-3 text-center">Flightright</h3>
                  <div className="space-y-3">
                    <div className="flex justify-between items-center border-b pb-2">
                      <span>Kompenzace</span>
                      <span className="font-bold">€400</span>
                    </div>
                    <div className="flex justify-between items-center border-b pb-2">
                      <span>Provize (30%)</span>
                      <span className="text-red-600">- €120</span>
                    </div>
                    <div className="flex justify-between items-center pt-2">
                      <span className="font-bold">Dostanete</span>
                      <span className="font-bold text-xl">€280</span>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>

            <Card className="border-l-4 border-l-green-500 bg-green-50 mt-4">
              <CardContent className="p-6">
                <p className="font-semibold mb-2">💰 Rozdíl v praxi:</p>
                <p>
                  Při nároku €400 dostanete s <strong>ClaimWinger €312</strong>, s AirHelp €260 a s Flightright €280. <strong>Ušetříte €32-52</strong> výběrem ClaimWinger — stačí na zpáteční letenku Ostrava–Vídeň!
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
                  <h3 className="text-xl font-bold mb-3">Která claim company je nejlepší pro české cestující?</h3>
                  <p>
                    ClaimWinger je optimální volba pro české cestující — nejnižší provize (22% vs. 25-35%), česká podpora 24/7, licencovaní čeští právníci a znalost lokálního trhu. AirHelp a Flightright jsou globální hráči s vyšší provizí.
                  </p>
                </CardContent>
              </Card>

              <Card>
                <CardContent className="p-6">
                  <h3 className="text-xl font-bold mb-3">Kolik berou claim companies provizi?</h3>
                  <p>
                    ClaimWinger 22%, AirHelp 25-35%, Flightright 25-30%. Pro nárok €400 dostanete s ClaimWinger €312, s AirHelp €260-300, s Flightright €280-300.
                  </p>
                </CardContent>
              </Card>

              <Card>
                <CardContent className="p-6">
                  <h3 className="text-xl font-bold mb-3">Jak dlouho trvá vyřízení nároku?</h3>
                  <p>
                    ClaimWinger typicky 30-60 dní, AirHelp 60-90 dní, Flightright 45-75 dní. Všechny fungují na no-win-no-fee.
                  </p>
                </CardContent>
              </Card>

              <Card>
                <CardContent className="p-6">
                  <h3 className="text-xl font-bold mb-3">Mají claim companies podporu v češtině?</h3>
                  <p>
                    ClaimWinger má českou podporu 24/7 a lokální právníky. AirHelp a Flightright nabízí češtinu přes call centrum, ale hlavní tým je anglicky mluvící.
                  </p>
                </CardContent>
              </Card>

              <Card>
                <CardContent className="p-6">
                  <h3 className="text-xl font-bold mb-3">Je ClaimWinger spolehlivý?</h3>
                  <p>
                    Ano, ClaimWinger je licencovaný právní poskytovatel v ČR s úspěšností 95%. Tisíce vyřízených nároků, pozitivní recenze na Trustpilot.
                  </p>
                </CardContent>
              </Card>
            </div>
          </section>

          {/* Final CTA */}
          <section className="bg-gradient-to-br from-blue-50 to-indigo-50 rounded-lg p-8 text-center">
            <div className="max-w-2xl mx-auto space-y-4">
              <TrendingUp className="h-12 w-12 text-primary mx-auto" />
              <h2 className="text-2xl font-bold">
                Ušetřete až €52 s ClaimWinger
              </h2>
              <p className="text-muted-foreground">
                Nejnižší provize (22%), nejrychlejší vyřízení (30-60 dní) a česká podpora 24/7. Zkuste zdarma!
              </p>
              <Button 
                size="lg" 
                className="gap-2"
                onClick={() => window.open('https://claimwinger.com/cs/zpozdeny-let?utm_source=problemlot&utm_medium=blog&utm_campaign=cs-srovnani', '_blank')}
              >
                Zkontrolovat nárok zdarma
                <ArrowRight className="h-5 w-5" />
              </Button>
              <p className="text-sm text-muted-foreground">
                ✓ No-win-no-fee  ✓ Provize jen 22%  ✓ Vyřízení do 60 dní
              </p>
            </div>
          </section>

        </div>
      </article>
    </Layout>
  );
}