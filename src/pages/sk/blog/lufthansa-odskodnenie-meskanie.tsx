import React from 'react';
import Head from 'next/head';
import Link from 'next/link';
import { LayoutSk } from '@/components/LayoutSk';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Check, X, HelpCircle, ArrowRight, Plane } from 'lucide-react';

export default function LufthansaCompensation() {
  return (
    <LayoutSk>
      <Head>
        <title>Lufthansa odškodnenie: Meškanie, zrušenie a štrajky | Problemlot.com</title>
        <meta name="description" content="Mali ste problémy s letom Lufthansa? Zistite, ako získať kompenzáciu za meškanie, zrušenie letu alebo zmeškaný prestup v Mníchove/Frankfurte." />
        <meta property="og:title" content="Lufthansa odškodnenie: Sprievodca pre cestujúcich" />
      </Head>

      <div className="bg-yellow-50 py-12 border-b border-yellow-100">
        <div className="container mx-auto px-4 text-center">
          <span className="inline-block py-1 px-3 rounded-full bg-yellow-100 text-yellow-800 text-sm font-bold mb-4">
            🇩🇪 Lufthansa Group
          </span>
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Lufthansa: Problémy s letom a odškodnenie
          </h1>
          <p className="text-xl text-gray-700 max-w-2xl mx-auto mb-8">
            Frankfurt a Mníchov sú najčastejšie prestupné body pre Slovákov. Čo robiť, ak Lufthansa mešká a vy nestihnete prípoj?
          </p>
          <Button size="lg" className="bg-yellow-500 hover:bg-yellow-600 text-black font-bold text-lg px-8 py-6 h-auto" asChild>
            <a href="https://claimwinger.com/sk" target="_blank" rel="nofollow noreferrer">
              Skontrolovať odškodnenie Lufthansa
            </a>
          </Button>
        </div>
      </div>

      <div className="container mx-auto px-4 py-16">
        <div className="grid md:grid-cols-3 gap-12">
          
          <div className="md:col-span-2 space-y-10">
            
            <section>
              <h2 className="text-3xl font-bold text-gray-900 mb-4">Zmeškaný prestup s Lufthansou</h2>
              <p className="text-lg text-gray-700 mb-4">
                Lufthansa je typická "sieťová" aerolinka. Väčšina problémov vzniká pri prestupoch. 
                Ak letíte napr. <strong>Viedeň &rarr; Frankfurt &rarr; New York</strong> a prvý let z Viedne má len 45 minút meškanie, 
                môže to stačiť na to, aby ste nestihli let do New Yorku.
              </p>
              <div className="bg-blue-50 border-l-4 border-blue-500 p-6 rounded-r-lg">
                <h3 className="font-bold text-blue-900 mb-2">Zlaté pravidlo prestupov</h3>
                <p className="text-blue-800">
                  Ak sú oba lety na jednej rezervácii (jedno číslo rezervácie) a kvôli meškaniu prvého letu nestihnete druhý, 
                  počíta sa meškanie v CIEĽOVEJ destinácii. Ak do New Yorku priletíte náhradným letom o 4 hodiny neskôr, 
                  máte nárok na <strong>600 €</strong>!
                </p>
              </div>
            </section>

            <div className="bg-blue-50 border-l-4 border-blue-600 p-6 mb-8">
              <h3 className="text-xl font-bold text-blue-900 mb-2">Prečo Lufthansa mešká?</h3>
              <p className="text-blue-800">
                Lufthansa je známa svojou spoľahlivosťou, ale ako veľký sieťový dopravca (hub carrier) často čelí reťazovým meškaniam.
                Ak letíte z Viedne, Budapešti alebo Krakova cez <strong>Frankfurt (FRA)</strong> alebo <strong>Mníchov (MUC)</strong>,
                aj malé meškanie prvého letu môže spôsobiť zmeškanie prípoja. V takom prípade máte nárok na plnú kompenzáciu za cieľovú destináciu!
              </p>
            </div>

            <section>
              <h2 className="text-3xl font-bold text-gray-900 mb-6">Štrajky Lufthansy</h2>
              <p className="text-gray-700 mb-4">
                V posledných rokoch sú štrajky v Nemecku časté. Rozlišujeme dva typy:
              </p>
              <div className="grid sm:grid-cols-2 gap-6">
                <Card>
                  <CardHeader>
                    <CardTitle className="text-green-600 flex items-center gap-2">
                      <Check className="h-5 w-5" />
                      Nárok na odškodnenie
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <strong>Štrajk zamestnancov Lufthansy</strong> (piloti, palubný personál). Toto je v rámci kontroly aerolinky, preto musia platiť.
                  </CardContent>
                </Card>
                <Card>
                  <CardHeader>
                    <CardTitle className="text-red-600 flex items-center gap-2">
                      <X className="h-5 w-5" />
                      Bez nároku (zvyčajne)
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <strong>Štrajk letiska / Bezpečnostnej kontroly</strong> (napr. ver.di štrajk security). Toto je "mimoriadna okolnosť".
                  </CardContent>
                </Card>
              </div>
            </section>

            <section>
              <h2 className="text-3xl font-bold text-gray-900 mb-4">Lufthansa vám ponúkla voucher?</h2>
              <p className="text-gray-700 mb-4">
                Často sa stáva, že Lufthansa proaktívne pošle email s ospravedlnením a voucherom na 50 € alebo míle Miles & More.
                <strong> Pozor!</strong> Prijatím tohto vouchera sa môžete vzdať práva na skutočné odškodnenie, ktoré môže byť až 600 €.
              </p>
              <p className="text-gray-700 font-bold">
                Vždy si skontrolujte, či podpisom alebo kliknutím na "Accept" nepodpisujete dohodu o urovnaní nároku.
              </p>
            </section>

          </div>

          <div className="md:col-span-1 space-y-6">
            <div className="bg-gray-50 p-6 rounded-xl border border-gray-200 sticky top-4">
              <h3 className="font-bold text-xl mb-4">Suma odškodnenia</h3>
              <ul className="space-y-4">
                <li className="flex justify-between">
                  <span>Viedeň - Frankfurt</span>
                  <span className="font-bold">250 €</span>
                </li>
                <li className="flex justify-between">
                  <span>Viedeň - Madrid</span>
                  <span className="font-bold">400 €</span>
                </li>
                <li className="flex justify-between">
                  <span>Viedeň - New York</span>
                  <span className="font-bold">600 €</span>
                </li>
              </ul>
              <div className="mt-8 pt-6 border-t border-gray-200">
                <p className="text-sm text-gray-500 mb-4 text-center">Overte si svoj let nezáväzne</p>
                <Button className="w-full bg-yellow-500 hover:bg-yellow-600 text-black" asChild>
                  <a href="https://claimwinger.com/sk" target="_blank" rel="nofollow noreferrer">
                    Mám nárok?
                  </a>
                </Button>
              </div>
            </div>
          </div>

        </div>
      </div>
    </LayoutSk>
  );
}
