import React from 'react';
import Head from 'next/head';
import { LayoutSk } from '@/components/LayoutSk';
import { Button } from '@/components/ui/button';
import { AlertTriangle, ShieldCheck, ArrowRight } from 'lucide-react';

export default function RejectedClaim() {
  return (
    <LayoutSk>
      <Head>
        <title>Letecká spoločnosť zamietla reklamáciu? Čo robiť ďalej | Problemlot.com</title>
        <meta name="description" content="Odmietli vám vyplatiť odškodnenie pre 'mimoriadne okolnosti'? Nevzdávajte sa. Až 40% zamietnutí je neoprávnených. Zistite, ako postupovať." />
      </Head>

      <section className="bg-red-50 py-16">
        <div className="container mx-auto px-4 max-w-4xl text-center">
          <div className="inline-flex items-center justify-center p-3 bg-red-100 rounded-full mb-6">
            <AlertTriangle className="h-8 w-8 text-red-600" />
          </div>
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Aerolinka zamietla vašu žiadosť?<br />
            <span className="text-red-600">To ešte neznamená koniec!</span>
          </h1>
          <p className="text-xl text-gray-700 mb-8 max-w-2xl mx-auto">
            Štatistiky ukazujú, že letecké spoločnosti neoprávnene zamietajú až 40 % individuálnych žiadostí cestujúcich. Dúfajú, že to vzdáte.
          </p>
          <Button size="lg" className="bg-red-600 hover:bg-red-700 text-white text-lg px-8 py-6 h-auto" asChild>
            <a href="https://claimwinger.com/sk" target="_blank" rel="nofollow noreferrer">
              Overiť zamietnutú žiadosť
            </a>
          </Button>
        </div>
      </section>

      <section className="py-16">
        <div className="container mx-auto px-4 max-w-3xl">
          <div className="prose prose-lg text-gray-700 mb-12">
            <h3>Prečo aerolinky zamietajú žiadosti?</h3>
            <p>
              Najčastejším dôvodom je tvrdenie o <strong>"mimoriadnych okolnostiach"</strong> (extraordinary circumstances). 
              Ide o situácie, ktoré aerolinka nemohla ovplyvniť (napr. búrka, uzavretie letiska, politická nestabilita).
            </p>
            <p>
              Problém je, že aerolinky často označujú za mimoriadne okolnosti aj veci, ktoré nimi <strong>nie sú</strong>:
            </p>
            <ul>
              <li><strong>Technická porucha lietadla</strong> - Toto je bežná prevádzka, nie mimoriadna okolnosť (rozsudok Súdneho dvora EÚ).</li>
              <li><strong>Choroba pilota/posádky</strong> - Aerolinka musí plánovať zmeny.</li>
              <li><strong>Oneskorenie predchádzajúceho letu</strong> - Toto je problém plánovania aerolinky.</li>
            </ul>
          </div>

          <div className="space-y-8 mb-12">
            <h2 className="text-2xl font-bold text-gray-900">Ako čítať "medzi riadkami" v zamietavom e-maile?</h2>
            <div className="grid md:grid-cols-2 gap-6">
              <div className="bg-gray-50 p-5 rounded-lg border">
                <h4 className="font-bold text-red-600 mb-2">Čo napíšu:</h4>
                <p className="italic text-gray-600 text-sm">"Váš let bol opozdený z dôvodu obmedzení riadenia letovej prevádzky (ATC)."</p>
              </div>
              <div className="bg-green-50 p-5 rounded-lg border border-green-100">
                <h4 className="font-bold text-green-700 mb-2">Čo to môže znamenať:</h4>
                <p className="text-gray-700 text-sm">Možno naozaj ATC nedalo povolenie. ALE často aerolinka zmeškala svoj slot vlastnou vinou (neskorý nástup, pomalé nakladanie) a potom sa vyhovára na ATC.</p>
              </div>
              
              <div className="bg-gray-50 p-5 rounded-lg border">
                <h4 className="font-bold text-red-600 mb-2">Čo napíšu:</h4>
                <p className="italic text-gray-600 text-sm">"Bezpečnosť je našou prioritou, technická porucha bola neočakávaná."</p>
              </div>
              <div className="bg-green-50 p-5 rounded-lg border border-green-100">
                <h4 className="font-bold text-green-700 mb-2">Čo to môže znamenať:</h4>
                <p className="text-gray-700 text-sm">Prípad Wallentin-Hermann vs. Alitalia: Technické poruchy sú súčasťou rizika podnikania. Ak nešlo o výrobnú vadu celej flotily alebo sabotáž, <strong>musia platiť</strong>.</p>
              </div>
            </div>
          </div>

          <div className="bg-white border-2 border-blue-100 rounded-2xl p-8 mb-12">
            <h3 className="text-2xl font-bold text-blue-900 mb-4">Príklad z praxe</h3>
            <p className="italic text-gray-600 mb-4">
              "Letecká spoločnosť mi napísala, že let meškal kvôli zlému počasiu. Pritom svietilo slnko a iné lietadlá lietali."
            </p>
            <p className="text-gray-800">
              <strong>Realita:</strong> Možno bolo zlé počasie na trase, alebo na letisku, odkiaľ lietadlo prilietalo. 
              ALEBO to aerolinka len skúša. Bez prístupu k letovým dátam a meteorologickým správam (METAR) to sami ťažko overíte.
            </p>
          </div>

          <div className="space-y-8">
            <h2 className="text-3xl font-bold text-gray-900">Aké máte možnosti?</h2>
            
            <div className="flex gap-4">
              <div className="flex-shrink-0 w-12 h-12 rounded-full bg-gray-200 flex items-center justify-center font-bold text-gray-600">A</div>
              <div>
                <h3 className="text-xl font-bold mb-2">Obrátiť sa na úrad (SOI / Národný dozorný orgán)</h3>
                <p className="text-gray-600">
                  Môžete podať podnet na národný dozorný orgán v krajine odletu. Proces je však dlhý (6-12 mesiacov) a úrad často len udelí pokutu aerolinke, ale nezabezpečí vaše odškodnenie priamo.
                </p>
              </div>
            </div>

            <div className="flex gap-4">
              <div className="flex-shrink-0 w-12 h-12 rounded-full bg-gray-200 flex items-center justify-center font-bold text-gray-600">B</div>
              <div>
                <h3 className="text-xl font-bold mb-2">Súdna cesta</h3>
                <p className="text-gray-600">
                  Môžete si najať právnika. Je to však drahé a riziko nákladov pri prehre je na vás. Pri odškodnení 250 € sa to neoplatí.
                </p>
              </div>
            </div>

            <div className="flex gap-4">
              <div className="flex-shrink-0 w-12 h-12 rounded-full bg-green-100 flex items-center justify-center font-bold text-green-600">C</div>
              <div>
                <h3 className="text-xl font-bold mb-2">ClaimWinger (Bez rizika)</h3>
                <p className="text-gray-600">
                  Postúpte prípad nám. Máme prístup k databázam počasia a letov. Vieme overiť, či aerolinka klame. 
                  Ak zistíme, že nárok je oprávnený, pôjdeme za vás aj na súd. 
                  <strong>Dôležité:</strong> Ak už máte zamietnutie, nič to nemení. Často preberáme zamietnuté prípady a úspešne ich vymáhame.
                </p>
                <Button className="mt-4 bg-green-600 hover:bg-green-700" asChild>
                  <a href="https://claimwinger.com/sk" target="_blank" rel="nofollow noreferrer">
                    Oživiť zamietnutú žiadosť
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </a>
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>
    </LayoutSk>
  );
}
