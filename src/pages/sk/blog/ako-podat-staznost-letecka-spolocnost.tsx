import React from 'react';
import Head from 'next/head';
import Link from 'next/link';
import { LayoutSk } from '@/components/LayoutSk';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { FileText, Send, Clock, ArrowRight } from 'lucide-react';

export default function HowToComplain() {
  return (
    <LayoutSk>
      <Head>
        <title>Ako podať sťažnosť leteckej spoločnosti? Vzor a postup | Problemlot.com</title>
        <meta name="description" content="Chcete žiadať o odškodnenie sami? Pozrite si náš návod krok za krokom, ako napísať efektívnu sťažnosť leteckej spoločnosti." />
      </Head>

      <section className="bg-white py-12 border-b">
        <div className="container mx-auto px-4 max-w-4xl">
          <h1 className="text-4xl font-bold text-gray-900 mb-6">Ako podať sťažnosť leteckej spoločnosti? <br/>Krok za krokom</h1>
          <p className="text-xl text-gray-600">
            Rozhodli ste sa bojovať o svoje práva na vlastnú päsť? Pripravili sme pre vás sprievodcu, ako správne formulovať nárok na odškodnenie podľa nariadenia EC 261/2004.
          </p>
        </div>
      </section>

      <section className="py-12 bg-gray-50">
        <div className="container mx-auto px-4 max-w-3xl">
          
          <div className="space-y-8">
            {/* Step 1 */}
            <div className="bg-white p-8 rounded-xl shadow-sm border">
              <div className="flex items-center gap-4 mb-4">
                <div className="w-10 h-10 rounded-full bg-blue-100 flex items-center justify-center text-blue-600 font-bold">1</div>
                <h2 className="text-2xl font-bold">Zhromaždite dôkazy</h2>
              </div>
              <p className="text-gray-700 mb-4">Bez dôkazov vašu žiadosť zamietnu. Potrebujete:</p>
              <ul className="list-disc pl-6 space-y-2 text-gray-600">
                <li>Rezervačné číslo (PNR kód - 6 miestny kód)</li>
                <li>Palubné lístky (stačí screenshot alebo PDF)</li>
                <li>Foto tabule s odletmi (ak máte)</li>
                <li>Potvrdenie o meškaní (ak vám ho dali na letisku)</li>
              </ul>
            </div>

            {/* Step 2 */}
            <div className="bg-white p-8 rounded-xl shadow-sm border">
              <div className="flex items-center gap-4 mb-4">
                <div className="w-10 h-10 rounded-full bg-blue-100 flex items-center justify-center text-blue-600 font-bold">2</div>
                <h2 className="text-2xl font-bold">Nájdite správny formulár</h2>
              </div>
              <p className="text-gray-700">
                Letecké spoločnosti schovávajú reklamačné formuláre hlboko na webe. Nehľadajte emailovú adresu (často nefunguje), použite oficiálny webový formulár.
              </p>
              <div className="mt-4 p-4 bg-gray-100 rounded text-sm">
                <strong>Tip:</strong> Hľadajte v Google frázu: "[Názov aerolinky] EU261 compensation form" alebo "[Názov aerolinky] passenger rights claim form".
              </div>
            </div>

            {/* Step 3 */}
            <div className="bg-white p-8 rounded-xl shadow-sm border">
              <div className="flex items-center gap-4 mb-4">
                <div className="w-10 h-10 rounded-full bg-blue-100 flex items-center justify-center text-blue-600 font-bold">3</div>
                <h2 className="text-2xl font-bold">Čo napísať do sťažnosti?</h2>
              </div>
              <p className="text-gray-700 mb-4">Buďte struční a vecní. Odvolajte sa na nariadenie EÚ.</p>
              
              <div className="bg-gray-50 border p-6 rounded-lg font-mono text-sm text-gray-700 overflow-x-auto">
                <p className="font-bold mb-2">VZOR TEXTU (EN)</p>
                <p>Dear Sir/Madam,</p>
                <p className="mt-2">I am writing regarding flight [Číslo letu] on [Dátum] from [Odkiaľ] to [Kam], which was [delayed/cancelled].</p>
                <p className="mt-2">My booking reference is [PNR Kód].</p>
                <p className="mt-2">Since the delay at the final destination exceeded 3 hours and was not caused by extraordinary circumstances, I am claiming compensation under Regulation (EC) No 261/2004.</p>
                <p className="mt-2">The flight distance was [X] km, therefore I claim [250/400/600] EUR per passenger.</p>
                <p className="mt-2">Passengers included in this claim:<br/>- [Meno 1]<br/>- [Meno 2]</p>
                <p className="mt-2">Please transfer the compensation to the following bank account:<br/>IBAN: [Váš IBAN]<br/>SWIFT/BIC: [Váš BIC]</p>
                <p className="mt-2">I look forward to your reply within 14 days.</p>
              </div>
            </div>

            {/* Step 4 */}
            <div className="bg-white p-8 rounded-xl shadow-sm border">
              <div className="flex items-center gap-4 mb-4">
                <div className="w-10 h-10 rounded-full bg-blue-100 flex items-center justify-center text-blue-600 font-bold">4</div>
                <h2 className="text-2xl font-bold">Čakanie a urgencia</h2>
              </div>
              <p className="text-gray-700">
                Aerolinky majú na odpoveď zvyčajne 30 dní (aj keď zákon lehotu priamo nestanovuje, je to bežná prax). 
                Reálne to často trvá 2-3 mesiace. Ak neodpovedajú, pošlite urgenciu.
              </p>
            </div>
          </div>

          <div className="mb-12">
            <h2 className="text-2xl font-bold mb-6">Zoznam potrebných dokumentov</h2>
            <div className="grid md:grid-cols-2 gap-6">
              <div className="bg-white p-6 rounded-xl shadow-sm border">
                <div className="text-green-500 text-2xl mb-2">✓</div>
                <h3 className="font-bold mb-2">Palubná vstupenka (Boarding Pass)</h3>
                <p className="text-sm text-gray-600">Originál alebo screenshot z aplikácie. Toto je kľúčový dôkaz, že ste boli na letisku.</p>
              </div>
              <div className="bg-white p-6 rounded-xl shadow-sm border">
                <div className="text-green-500 text-2xl mb-2">✓</div>
                <h3 className="font-bold mb-2">Rezervácia letu (E-ticket)</h3>
                <p className="text-sm text-gray-600">Email s potvrdením rezervácie obsahujúci číslo rezervácie (PNR).</p>
              </div>
              <div className="bg-white p-6 rounded-xl shadow-sm border">
                <div className="text-green-500 text-2xl mb-2">✓</div>
                <h3 className="font-bold mb-2">Potvrdenie o meškaní</h3>
                <p className="text-sm text-gray-600">SMS alebo email od aerolinky o zrušení/meškaní letu. Nikdy ich nemažte!</p>
              </div>
              <div className="bg-white p-6 rounded-xl shadow-sm border">
                <div className="text-green-500 text-2xl mb-2">✓</div>
                <h3 className="font-bold mb-2">Účtenky za výdavky</h3>
                <p className="text-sm text-gray-600">Jedlo, pitie, hotel, taxi - ak vám ich nezabezpečila aerolinka, musia vám ich preplatiť.</p>
              </div>
            </div>
          </div>

          <div className="bg-red-50 p-8 rounded-2xl mb-12">
            <h2 className="text-2xl font-bold text-red-800 mb-4">Pozor na triky leteckých spoločností!</h2>
            <p className="mb-4 text-red-900">Pri podávaní sťažnosti na vlastnú päsť sa môžete stretnúť s týmito taktikami:</p>
            <ul className="list-disc pl-5 space-y-2 text-red-800">
              <li><strong>Ponuka voucheru:</strong> Často ponúkajú voucher na 200 €, hoci máte nárok na 600 € v hotovosti. Ak prijmete voucher, strácate právo na peniaze!</li>
              <li><strong>"Mimoriadne okolnosti":</strong> Automatická odpoveď, že za meškanie môže počasie alebo ATC, aj keď to nie je pravda.</li>
              <li><strong>Mlčanie:</strong> Zákonné lehoty sú dlhé, aerolinky často dúfajú, že to vzdáte.</li>
            </ul>
          </div>

          <div className="mt-12 bg-blue-900 text-white p-8 rounded-2xl text-center">
            <h3 className="text-2xl font-bold mb-4">Zdá sa vám to komplikované?</h3>
            <p className="mb-8 text-blue-100">
              Väčšina individuálnych žiadostí je zamietnutá alebo ignorovaná. Ušetrite si čas a stres. 
              ClaimWinger vybaví celú byrokraciu za vás. Ak nevyhráme, neplatíte nič.
            </p>
            <Button size="lg" className="bg-white text-blue-900 hover:bg-blue-50" asChild>
              <a href="https://claimwinger.com/sk" target="_blank" rel="nofollow noreferrer">
                Nechám to na odborníkov
                <ArrowRight className="ml-2 h-4 w-4" />
              </a>
            </Button>
          </div>

        </div>
      </section>
    </LayoutSk>
  );
}
