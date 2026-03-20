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
import { AlertCircle, Clock, Euro, ArrowRight, Plane, Info } from 'lucide-react';

export default function EurowingsCompensation() {
  return (
    <LayoutSk>
      <Head>
        <title>Eurowings odškodnenie: Meškanie a zrušenie letu | Problemlot.com</title>
        <meta name="description" content="Máte problém s letom Eurowings? Zistite, kedy vám patrí kompenzácia až 600 € za meškanie alebo zrušenie letu. Sprievodca pre Slovákov." />
        <meta property="og:title" content="Eurowings odškodnenie: Všetko čo musíte vedieť" />
        <meta property="og:description" content="Meškal váš let Eurowings? Prečítajte si, ako získať svoje peniaze späť." />
      </Head>

      <section className="bg-purple-50 py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <span className="text-purple-600 font-semibold tracking-wider text-sm uppercase mb-2 block">Letecké spoločnosti</span>
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              Eurowings: Meškanie a zrušenie letu. <br />
              <span className="text-purple-700">Vaše práva na odškodnenie</span>
            </h1>
            <p className="text-xl text-gray-700 mb-8">
              Eurowings je populárna nízkonákladová spoločnosť skupiny Lufthansa, často využívaná Slovákmi z Viedne a Prahy. 
              Aj pri nízkonákladovkách však máte plné právo na starostlivosť a kompenzáciu.
            </p>
            <Button size="lg" className="bg-purple-700 hover:bg-purple-800 text-white text-lg px-8 py-6 h-auto" asChild>
              <a href="https://claimwinger.com/sk" target="_blank" rel="nofollow noreferrer">
                Skontrolovať môj let Eurowings
                <ArrowRight className="ml-2 h-5 w-5" />
              </a>
            </Button>
          </div>
        </div>
      </section>

      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto space-y-12">
            
            <div className="prose prose-lg text-gray-700">
              <p>
                Eurowings ako nemecká letecká spoločnosť podlieha európskej legislatíve. To znamená, že ak váš let mešká viac ako 3 hodiny 
                alebo bol zrušený bez dostatočného upozornenia, môžete mať nárok na odškodnenie až do výšky 600 €.
              </p>
              <p>
                Veľa cestujúcich si myslí, že pri "lacných letenkách" nemajú na nič nárok. <strong>To je omyl!</strong> 
                Výška odškodného nezávisí od ceny letenky, ale od vzdialenosti letu a dĺžky meškania.
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-6">
              <Card className="bg-purple-50 border-purple-100">
                <CardHeader>
                  <CardTitle className="text-purple-800 flex items-center gap-2">
                    <Clock className="h-5 w-5" />
                    Meškanie nad 3 hodiny
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  Ak dorazíte do cieľa o 3 a viac hodín neskôr, ako bolo plánované. Dôležitý je čas otvorenia dverí lietadla v cieli, nie čas odletu!
                </CardContent>
              </Card>

              <Card className="bg-purple-50 border-purple-100">
                <CardHeader>
                  <CardTitle className="text-purple-800 flex items-center gap-2">
                    <AlertCircle className="h-5 w-5" />
                    Zrušenie letu
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  Ak vás informovali menej ako 14 dní pred odletom. Máte právo na vrátenie peňazí ALEBO náhradný let + kompenzáciu (ak náhradný let nespĺňa podmienky).
                </CardContent>
              </Card>
            </div>

            <div className="bg-white border rounded-xl p-8 shadow-sm">
              <h3 className="text-2xl font-bold mb-6">Výška kompenzácie Eurowings</h3>
              <ul className="space-y-4">
                <li className="flex justify-between items-center border-b pb-4">
                  <span>Lety do 1 500 km (napr. Viedeň - Mallorca)</span>
                  <span className="font-bold text-purple-700 text-xl">250 €</span>
                </li>
                <li className="flex justify-between items-center border-b pb-4">
                  <span>Lety 1 500 - 3 500 km (napr. Viedeň - Kanárske ostrovy)</span>
                  <span className="font-bold text-purple-700 text-xl">400 €</span>
                </li>
                <li className="flex justify-between items-center">
                  <span>Lety nad 3 500 km (mimo EÚ)</span>
                  <span className="font-bold text-purple-700 text-xl">600 €</span>
                </li>
              </ul>
              <p className="text-sm text-gray-500 mt-4">* Kompenzácia je na každého cestujúceho zvlášť.</p>
            </div>

            <div className="space-y-6">
              <h3 className="text-2xl font-bold">Časté výhovorky Eurowings</h3>
              <p className="text-gray-700">
                Eurowings často argumentuje "mimoriadnymi okolnosťami". Buďte opatrní, ak počujete tieto dôvody - často sú neoprávnené:
              </p>
              <ul className="grid gap-3">
                <li className="flex items-start gap-3 bg-gray-50 p-4 rounded-lg">
                  <Info className="h-5 w-5 text-blue-500 mt-1" />
                  <div>
                    <strong>"Technická porucha"</strong> - Nie je mimoriadna okolnosť! Údržba lietadla je zodpovednosťou aerolinky.
                  </div>
                </li>
                <li className="flex items-start gap-3 bg-gray-50 p-4 rounded-lg">
                  <Info className="h-5 w-5 text-blue-500 mt-1" />
                  <div>
                    <strong>"Choroba posádky"</strong> - Nie je mimoriadna okolnosť! Aerolinka musí mať zálohy.
                  </div>
                </li>
                <li className="flex items-start gap-3 bg-gray-50 p-4 rounded-lg">
                  <Info className="h-5 w-5 text-blue-500 mt-1" />
                  <div>
                    <strong>"Štrajk zamestnancov Eurowings"</strong> - Máte nárok na odškodnenie! (Iné je to pri štrajku riadenia letovej prevádzky).
                  </div>
                </li>
              </ul>
            </div>

            {/* Voucher vs Cash Section */}
            <div className="border-l-4 border-yellow-400 bg-yellow-50 p-6 rounded-r-lg">
              <h3 className="text-xl font-bold text-gray-900 mb-3">Pozor na vouchery!</h3>
              <p className="text-gray-700 mb-4">
                Eurowings vám môže po zrušení letu ponúknuť voucher na budúci let. 
                <strong>Nemusíte ho prijať!</strong> Podľa nariadenia EÚ 261/2004 máte právo na vrátenie peňazí na účet do 7 dní.
              </p>
              <p className="text-gray-700">
                Prečo odmietnuť voucher?
              </p>
              <ul className="list-disc list-inside mt-2 text-gray-700 ml-4">
                <li>Má obmedzenú platnosť (zvyčajne 1 rok).</li>
                <li>Môže byť viazaný na konkrétne meno.</li>
                <li>V prípade krachu aerolinky je bezcenný.</li>
                <li><strong>Hotovosť môžete minúť kdekoľvek.</strong></li>
              </ul>
            </div>

            {/* FAQ Section */}
            <div>
              <h2 className="text-2xl font-bold text-gray-900 mb-6">Časté otázky o Eurowings</h2>
              <Accordion type="single" collapsible className="w-full">
                <AccordionItem value="item-1">
                  <AccordionTrigger>Ako dlho trvá vyplatenie kompenzácie?</AccordionTrigger>
                  <AccordionContent>
                    Eurowings patrí k lepšie platiacim aerolinkám, proces zvyčajne trvá 4-8 týždňov. Ak však odmietnu platiť dobrovoľne, súdne vymáhanie môže trvať dlhšie.
                  </AccordionContent>
                </AccordionItem>
                <AccordionItem value="item-2">
                  <AccordionTrigger>Kúpil som si najlacnejšiu letenku (Basic). Mám nárok?</AccordionTrigger>
                  <AccordionContent>
                    ÁNO. Práva pasażera EÚ platia rovnako pre všetkých, bez ohľadu na cenu letenky alebo triedu. Aj keď stála letenka 29 €, odškodné môže byť 250 €.
                  </AccordionContent>
                </AccordionItem>
              </Accordion>
            </div>

            <div className="bg-purple-900 text-white rounded-2xl p-8 text-center">
              <h3 className="text-2xl font-bold mb-4">Neistí, či máte nárok?</h3>
              <p className="mb-8 text-purple-100">
                Overenie trvá len 2 minúty. Zadajte číslo letu a dátum - systém automaticky skontroluje počasie, letové záznamy a právnu situáciu.
              </p>
              <Button size="lg" variant="secondary" className="w-full sm:w-auto" asChild>
                <a href="https://claimwinger.com/sk" target="_blank" rel="nofollow noreferrer">
                  Overiť nárok zadarmo
                </a>
              </Button>
            </div>

          </div>
        </div>
      </section>
    </LayoutSk>
  );
}
