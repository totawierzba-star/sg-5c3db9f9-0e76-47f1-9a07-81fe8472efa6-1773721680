import React from 'react';
import Head from 'next/head';
import Link from 'next/link';
import { LayoutSk } from '@/components/LayoutSk';
import { Button } from '@/components/ui/button';
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from '@/components/ui/card';
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '@/components/ui/accordion';
import { CheckCircle2, AlertTriangle, Clock, Euro, XCircle, HelpCircle, ArrowRight, Plane } from 'lucide-react';

export default function AustrianAirlinesCompensation() {
  return (
    <LayoutSk>
      <Head>
        <title>Austrian Airlines odškodnenie: Meškanie a zrušenie letu | Problemlot.com</title>
        <meta name="description" content="Meškal váš let Austrian Airlines? Zistite, ako získať až 600 € odškodnenie. Návod pre slovenských cestujúcich (najmä z Viedne)." />
        <meta property="og:title" content="Austrian Airlines odškodnenie: Meškanie a zrušenie letu" />
        <meta property="og:description" content="Kompletný sprievodca kompenzáciami za lety Austrian Airlines. Zistite svoje práva podľa EÚ 261/2004." />
      </Head>

      {/* Hero Section */}
      <section className="bg-red-50 py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="flex items-center gap-2 text-sm text-red-600 font-medium mb-4">
              <span className="bg-white px-2 py-1 rounded shadow-sm">🇦🇹 Austrian Airlines</span>
              <span>•</span>
              <span>Sprievodca odškodnením</span>
            </div>
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6 leading-tight">
              Austrian Airlines: Meškanie alebo zrušenie letu. <br />
              <span className="text-red-600">Ako získať až 600 €?</span>
            </h1>
            <p className="text-xl text-gray-700 mb-8 leading-relaxed">
              Austrian Airlines je pre mnohých Slovákov "domácou" aerolinkou vďaka blízkosti letiska Viedeň-Schwechat. 
              Aj rakúskemu národnému dopravcovi sa však stávajú meškania. Zistite, kedy vám patrí finančná kompenzácia.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4">
              <Button size="lg" className="bg-red-600 hover:bg-red-700 text-white text-lg px-8 py-6 h-auto w-full sm:w-auto" asChild>
                <a href="https://claimwinger.com/sk" target="_blank" rel="nofollow noreferrer">
                  Skontrolovať môj let zadarmo
                  <ArrowRight className="ml-2 h-5 w-5" />
                </a>
              </Button>
              <Button variant="outline" size="lg" className="text-lg px-8 py-6 h-auto w-full sm:w-auto bg-white" asChild>
                <Link href="#kedy-narok">
                  Kedy mám nárok?
                </Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
            
            {/* Left Column - Article */}
            <div className="lg:col-span-2 space-y-12">
              
              {/* Introduction */}
              <div className="prose prose-lg max-w-none text-gray-700">
                <p>
                  Letisko Viedeň (Schwechat) je hlavným hubom pre Austrian Airlines a kľúčovým bodom pre tisíce slovenských cestujúcich. 
                  Či už letíte na dovolenku, za prácou alebo na prestup do zámoria, problémy s letmi sa nevyhýbajú ani tejto prémiovej aerolinke. 
                  Dobrou správou je, že ako európsky dopravca podlieha Austrian Airlines prísnym pravidlám EÚ.
                </p>
              </div>

              {/* Conditions Card */}
              <Card className="border-red-100 shadow-md">
                <CardHeader className="bg-red-50 border-b border-red-100">
                  <CardTitle className="flex items-center gap-2 text-red-800">
                    <CheckCircle2 className="h-6 w-6" />
                    Kedy vám Austrian Airlines musí zaplatiť?
                  </CardTitle>
                </CardHeader>
                <CardContent className="pt-6 space-y-4">
                  <div className="flex items-start gap-3">
                    <Clock className="h-5 w-5 text-red-600 mt-1 shrink-0" />
                    <div>
                      <h4 className="font-bold text-gray-900">Meškanie 3+ hodiny</h4>
                      <p className="text-gray-600">Ak priletíte do cieľovej destinácie s meškaním viac ako 3 hodiny oproti plánu.</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <XCircle className="h-5 w-5 text-red-600 mt-1 shrink-0" />
                    <div>
                      <h4 className="font-bold text-gray-900">Zrušenie letu</h4>
                      <p className="text-gray-600">Ak bol váš let zrušený menej ako 14 dní pred odletom a nebol ponúknutý vhodný alternatívny let.</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <AlertTriangle className="h-5 w-5 text-red-600 mt-1 shrink-0" />
                    <div>
                      <h4 className="font-bold text-gray-900">Zavinenie aerolinky</h4>
                      <p className="text-gray-600">Príčina musí byť na strane Austrian Airlines (napr. technická porucha, štrajk posádky, zlé plánovanie). Nie počasie alebo štrajk letiska.</p>
                    </div>
                  </div>
                </CardContent>
              </Card>

              {/* Care Section */}
              <div className="bg-blue-50 p-6 rounded-xl border border-blue-100">
                <h3 className="text-xl font-bold text-gray-900 mb-3 flex items-center gap-2">
                  <CheckCircle2 className="h-5 w-5 text-blue-600" />
                  Právo na starostlivosť (jedlo a hotel)
                </h3>
                <p className="text-gray-700 mb-4">
                  Bez ohľadu na dôvod meškania (aj pri zlom počasí!), ak čakáte na letisku viac ako 2 hodiny, Austrian Airlines vám musí poskytnúť:
                </p>
                <ul className="list-disc list-inside space-y-2 text-gray-700 ml-4">
                  <li><strong>Občerstvenie a nápoje</strong> (zvyčajne formou voucheru).</li>
                  <li><strong>Dva telefonáty</strong> alebo e-maily.</li>
                  <li><strong>Hotelové ubytovanie</strong>, ak sa let presunie na druhý deň (+ doprava do hotela).</li>
                </ul>
                <p className="text-sm text-gray-500 mt-4 italic">
                  Tip: Ak vám nič nedali, kúpte si jedlo sami a odložte si bločky. Aerolinka ich musí preplatiť (bez alkoholu).
                </p>
              </div>

              {/* Compensation Amounts */}
              <div>
                <h2 className="text-2xl font-bold text-gray-900 mb-6">Koľko peňazí môžete dostať?</h2>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                  <Card className="bg-white border-gray-200">
                    <CardHeader className="pb-2">
                      <CardTitle className="text-3xl font-bold text-red-600">250 €</CardTitle>
                      <CardDescription>Lety do 1 500 km</CardDescription>
                    </CardHeader>
                    <CardContent className="text-sm text-gray-600">
                      Napr. Viedeň – Londýn, Viedeň – Paríž, Viedeň – Rím
                    </CardContent>
                  </Card>
                  
                  <Card className="bg-white border-gray-200">
                    <CardHeader className="pb-2">
                      <CardTitle className="text-3xl font-bold text-red-600">400 €</CardTitle>
                      <CardDescription>Lety 1 500 – 3 500 km</CardDescription>
                    </CardHeader>
                    <CardContent className="text-sm text-gray-600">
                      Napr. Viedeň – Dubaj, Viedeň – Tenerife, Viedeň – Káhira
                    </CardContent>
                  </Card>

                  <Card className="bg-white border-gray-200">
                    <CardHeader className="pb-2">
                      <CardTitle className="text-3xl font-bold text-red-600">600 €</CardTitle>
                      <CardDescription>Lety nad 3 500 km</CardDescription>
                    </CardHeader>
                    <CardContent className="text-sm text-gray-600">
                      Napr. Viedeň – New York, Viedeň – Bangkok, Viedeň – Tokio
                    </CardContent>
                  </Card>
                </div>
              </div>

              {/* Technical Issues */}
              <div className="bg-gray-50 p-6 rounded-xl border border-gray-200">
                <h3 className="text-xl font-bold text-gray-900 mb-3 flex items-center gap-2">
                  <Plane className="h-5 w-5 text-red-600" />
                  Technická porucha nie je "mimoriadna okolnosť"
                </h3>
                <p className="text-gray-700">
                  Austrian Airlines sa často snaží vyhnúť plateniu tvrdením, že meškanie spôsobila "technická porucha". 
                  Súdny dvor EÚ však jasne rozhodol: <strong>bežné technické poruchy sú súčasťou prevádzky a aerolinka za ne zodpovedá.</strong>
                  Ak vám tvrdia opak, pravdepodobne sa vás snažia zavádzať.
                </p>
              </div>

              {/* How to claim */}
              <div>
                <h2 className="text-2xl font-bold text-gray-900 mb-6">Ako získať odškodnenie od Austrian Airlines?</h2>
                <div className="space-y-6">
                  <div className="flex gap-4">
                    <div className="flex-shrink-0 w-10 h-10 rounded-full bg-red-100 flex items-center justify-center text-red-600 font-bold">1</div>
                    <div>
                      <h3 className="text-lg font-bold mb-2">Nevyhadzujte dokumenty</h3>
                      <p className="text-gray-600">Palubné lístky (aj v mobile), potvrdenia o rezervácii, fotografie tabule odletov.</p>
                    </div>
                  </div>
                  <div className="flex gap-4">
                    <div className="flex-shrink-0 w-10 h-10 rounded-full bg-red-100 flex items-center justify-center text-red-600 font-bold">2</div>
                    <div>
                      <h3 className="text-lg font-bold mb-2">Zistite príčinu meškania</h3>
                      <p className="text-gray-600">Opýtajte sa personálu, prečo let mešká. Ak povedia "prevádzkové dôvody" alebo "rotácia posádky", máte vyhraté.</p>
                    </div>
                  </div>
                  <div className="flex gap-4">
                    <div className="flex-shrink-0 w-10 h-10 rounded-full bg-red-100 flex items-center justify-center text-red-600 font-bold">3</div>
                    <div>
                      <h3 className="text-lg font-bold mb-2">Využite odbornú pomoc</h3>
                      <p className="text-gray-600">
                        Austrian Airlines má silné právne oddelenie. Sám cestujúci často ťahá za kratší koniec. 
                        Služba ako <strong>ClaimWinger</strong> prevezme riziko za vás – ak nevyhrajú, neplatíte nič.
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              {/* FAQ */}
              <div>
                <h2 className="text-2xl font-bold text-gray-900 mb-6">Časté otázky (FAQ)</h2>
                <Accordion type="single" collapsible className="w-full">
                  <AccordionItem value="item-1">
                    <AccordionTrigger>Ako dlho trvá vyplatenie odškodného od Austrian Airlines?</AccordionTrigger>
                    <AccordionContent>
                      Pri priamej žiadosti to môže trvať 2-6 mesiacov, často bez odpovede. Cez špecializované agentúry je proces zvyčajne rýchlejší vďaka hromadnému spracovaniu nárokov.
                    </AccordionContent>
                  </AccordionItem>
                  <AccordionItem value="item-2">
                    <AccordionTrigger>Dostal(a) som voucher na občerstvenie, mám stále nárok na peniaze?</AccordionTrigger>
                    <AccordionContent>
                      Áno! Poukaz na jedlo a nápoje je len "právo na starostlivosť". Finančné odškodnenie (250-600 €) je samostatný nárok, ktorý platí navyše k občerstveniu.
                    </AccordionContent>
                  </AccordionItem>
                  <AccordionItem value="item-3">
                    <AccordionTrigger>Letel som v rámci zájazdu (charter), platí to aj pre mňa?</AccordionTrigger>
                    <AccordionContent>
                      Áno, nariadenie EÚ 261/2004 sa vzťahuje na všetky lety odlietajúce z EÚ, vrátane charterových letov a dovolenkových balíčkov. Zodpovedná je letecká spoločnosť, nie cestovná kancelária.
                    </AccordionContent>
                  </AccordionItem>
                </Accordion>
              </div>

              {/* Final CTA */}
              <div className="bg-red-900 text-white p-8 rounded-2xl text-center">
                <h2 className="text-3xl font-bold mb-4">Nenechajte si ujsť svoje peniaze</h2>
                <p className="text-red-100 mb-8 max-w-2xl mx-auto">
                  Máte až 3 roky na spätné uplatnenie nároku. Skontrolujte si svoj let Austrian Airlines ešte dnes a zistite, či vám dlhujú peniaze.
                </p>
                <Button size="lg" className="bg-white text-red-900 hover:bg-red-50 text-lg px-8 py-6 h-auto" asChild>
                  <a href="https://claimwinger.com/sk" target="_blank" rel="nofollow noreferrer">
                    Vypočítať odškodnenie online
                  </a>
                </Button>
                <p className="text-sm text-red-300 mt-4">
                  Overenie je zadarmo a nezáväzné.
                </p>
              </div>

            </div>

            {/* Right Column - Sidebar */}
            <div className="space-y-8">
              {/* Sticky Summary Card */}
              <Card className="sticky top-8 border-2 border-red-600 shadow-xl">
                <CardHeader className="bg-red-600 text-white">
                  <CardTitle>Rýchly súhrn</CardTitle>
                </CardHeader>
                <CardContent className="pt-6 space-y-4">
                  <div>
                    <span className="text-xs font-bold uppercase text-gray-500">Letecká spoločnosť</span>
                    <p className="font-bold text-lg">Austrian Airlines</p>
                  </div>
                  <div>
                    <span className="text-xs font-bold uppercase text-gray-500">Minimálne meškanie</span>
                    <p className="font-bold text-lg">3 hodiny (na prílete)</p>
                  </div>
                  <div>
                    <span className="text-xs font-bold uppercase text-gray-500">Výška odškodného</span>
                    <p className="font-bold text-lg text-red-600">250 € - 600 €</p>
                  </div>
                  <div>
                    <span className="text-xs font-bold uppercase text-gray-500">Čas na reklamáciu</span>
                    <p className="font-bold text-lg">Až 3 roky dozadu</p>
                  </div>
                  
                  <div className="pt-4 border-t border-gray-100">
                    <Button className="w-full bg-red-600 hover:bg-red-700" asChild>
                      <a href="https://claimwinger.com/sk" target="_blank" rel="nofollow noreferrer">
                        Získať odškodnenie
                      </a>
                    </Button>
                  </div>
                </CardContent>
              </Card>

              {/* Popular Links */}
              <div className="bg-gray-50 p-6 rounded-xl">
                <h3 className="font-bold text-gray-900 mb-4">Súvisiace články</h3>
                <ul className="space-y-3">
                  <li>
                    <Link href="/sk/blog/lotnisko-wieden-opoznienie" className="text-blue-600 hover:underline flex items-center gap-2">
                      <ArrowRight className="h-4 w-4" />
                      Meškanie na letisku Viedeň
                    </Link>
                  </li>
                  <li>
                    <Link href="/sk/blog/zmeskany-prestup-kompenzacia" className="text-blue-600 hover:underline flex items-center gap-2">
                      <ArrowRight className="h-4 w-4" />
                      Zmeškaný prestup - čo robiť?
                    </Link>
                  </li>
                  <li>
                    <Link href="/sk/blog/strajk-lini-lotniczych-odszkodowanie" className="text-blue-600 hover:underline flex items-center gap-2">
                      <ArrowRight className="h-4 w-4" />
                      Štrajk letiska vs. aerolinky
                    </Link>
                  </li>
                </ul>
              </div>
            </div>

          </div>
        </div>
      </section>
    </LayoutSk>
  );
}