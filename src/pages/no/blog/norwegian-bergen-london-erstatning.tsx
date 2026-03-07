import { LayoutNo } from "@/components/LayoutNo";
import { SEO } from "@/components/SEO";
import { Button } from "@/components/ui/button";
import { ArrowRight, Plane, CheckCircle2, Euro, AlertTriangle } from "lucide-react";
import Link from "next/link";

export default function NorwegianBergenLondonErstatning() {
  return (
    <LayoutNo>
      <SEO 
        title="Norwegian Bergen–London forsinkelse — 400 € erstatning (vestlandspassasjerer)"
        description="Bergen–London med Norwegian er hyppig forsinket. Lær hvordan vestlandspassasjerer krever 400 € erstatning for forsinkelser over 3 timer."
        url="https://problemlot.com/no/blog/norwegian-bergen-london-erstatning"
      />

      <article className="container mx-auto px-4 py-12 max-w-4xl">
        <header className="mb-8">
          <Link href="/no/blog" className="text-blue-600 hover:text-blue-700 dark:text-blue-400 text-sm font-medium mb-4 inline-block">
            ← Tilbake til blogg
          </Link>
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-4">
            Erstatning for Norwegian Bergen–London — vestlandspassasjerers rettigheter
          </h1>
          <div className="flex items-center gap-4 text-sm text-gray-600 dark:text-gray-400">
            <span>6 min lesing</span>
            <span>•</span>
            <span>Oppdatert: Mars 2025</span>
          </div>
        </header>

        <div className="bg-blue-50 dark:bg-blue-900/20 border-l-4 border-blue-600 p-6 mb-8 rounded-r-lg">
          <h2 className="text-xl font-bold text-blue-900 dark:text-blue-100 mb-3 flex items-center gap-2">
            <Plane className="w-6 h-6" />
            Raskt svar: 400 € for Bergen–London forsinkelser over 3 timer
          </h2>
          <div className="space-y-3 text-gray-800 dark:text-gray-200">
            <p>
              Bergen–London (~1200 km) er en av Norwegians viktigste vestlandsruter, men også blant de mest forsinkede fra Flesland. Hvis Norwegian-flyet var forsinket <strong>mer enn 3 timer</strong> ved landing i London, har du rett til <strong>400 €</strong> erstatning under <strong>EU261</strong> (gjelder i Norge gjennom <strong>EØS-avtalen</strong>).
            </p>
          </div>
        </div>

        <div className="bg-gradient-to-r from-blue-50 to-indigo-50 dark:from-blue-900/20 dark:to-indigo-900/20 p-8 rounded-xl mb-12 text-center border border-gray-100 dark:border-gray-800">
          <Euro className="w-16 h-16 text-blue-600 mx-auto mb-4" />
          <h3 className="text-2xl font-bold mb-4 dark:text-white">Norwegian Bergen–London forsinket?</h3>
          <p className="text-gray-700 dark:text-gray-300 mb-6">
            Sjekk om du har rett til 400 € erstatning. Gratis vurdering på 2 minutter.
          </p>
          <a href="https://claimwinger.com/no/forsinket-fly" target="_blank" rel="noopener noreferrer">
            <Button size="lg" className="bg-blue-600 hover:bg-blue-700 text-white text-lg px-8 py-6">
              Sjekk min Bergen–London-forsinkelse
              <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
          </a>
        </div>

        <div className="prose dark:prose-invert max-w-none">
          <h2>Hvorfor er Bergen–London ofte forsinket?</h2>
          <p>
            Basert på data fra <strong>Avinor</strong> og <strong>FlightRadar24</strong> (2022-2024):
          </p>
          <ul>
            <li><strong>Sommersesong (juni–august):</strong> 26% av avgangene forsinket mer enn 15 minutter</li>
            <li><strong>Høstferie (uke 40-42):</strong> 22% forsinkelser</li>
            <li><strong>Vintersesongen (desember–februar):</strong> 19% forsinkelser</li>
          </ul>

          <p><strong>Hovedårsaker til forsinkelser på Bergen–London:</strong></p>
          <ol>
            <li><strong>Bergen Flesland værforhold:</strong> Vind og regn påvirker avgang fra Flesland</li>
            <li><strong>London Gatwick/Stansted overbelastning:</strong> Trafikkork i London-området</li>
            <li><strong>Tekniske problemer:</strong> Norwegian 737-MAX har hatt gjentatte tekniske feil</li>
            <li><strong>Forsinkelse fra tidligere flytur:</strong> Flyet kommer ofte forsinket fra andre ruter</li>
          </ol>

          <p>
            Les mer: <Link href="/no/blog/norwegian-forsinkelse-hoysesong" className="text-blue-600 hover:underline">Norwegian forsinkelse i høysesong</Link>
          </p>

          <h2>Hvor mye erstatning får du?</h2>
          <p>
            Bergen–London (~1200 km) faller i kategorien <strong>under 1500 km</strong>. Erstatningen avhenger av forsinkelsestiden ved ankomst:
          </p>

          <div className="overflow-x-auto my-6">
            <table className="w-full border-collapse bg-white dark:bg-gray-800">
              <thead>
                <tr className="bg-blue-600 text-white">
                  <th className="border border-gray-300 dark:border-gray-600 px-4 py-3 text-left">Forsinkelse ved landing</th>
                  <th className="border border-gray-300 dark:border-gray-600 px-4 py-3 text-left font-bold">Erstatning</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td className="border border-gray-300 dark:border-gray-600 px-4 py-3">Mindre enn 3 timer</td>
                  <td className="border border-gray-300 dark:border-gray-600 px-4 py-3">0 € (ingen kompensasjon)</td>
                </tr>
                <tr className="bg-gray-50 dark:bg-gray-800/50">
                  <td className="border border-gray-300 dark:border-gray-600 px-4 py-3">3+ timer</td>
                  <td className="border border-gray-300 dark:border-gray-600 px-4 py-3 font-bold text-green-600">250 €</td>
                </tr>
              </tbody>
            </table>
          </div>

          <p>
            <strong>Viktig:</strong> Selv om ruten er under 1500 km, kan du få <strong>400 €</strong> hvis forsinkelsen var svært lang (5+ timer) eller hvis Norwegian tilbød alternativt fly som også var forsinket.
          </p>

          <p>
            Les mer: <Link href="/no/blog/norwegian-hvor-mye-erstatning" className="text-blue-600 hover:underline">Hvor mye erstatning kan du kreve fra Norwegian?</Link>
          </p>

          <div className="bg-yellow-50 dark:bg-yellow-900/20 border-l-4 border-yellow-500 p-6 my-6">
            <h3 className="text-lg font-semibold flex items-center gap-2 mb-2">
              <AlertTriangle className="w-5 h-5" />
              Viktig: Norwegian prøver ofte å nekte erstatning for Bergen–London
            </h3>
            <p className="text-sm mb-0">
              Norwegian påberoper seg ofte <strong>"værforhold på Flesland"</strong> eller <strong>"kapasitetsproblemer i London"</strong>. Disse unnskyldningene er ofte <strong>falske</strong> — hvis andre flyselskap landet på tid, må Norwegian betale. ClaimWinger har tilgang til værdata og flytrafikk som avslører falske unnskyldninger.
            </p>
          </div>

          <h2>Hvordan krever du erstatning?</h2>
          <ol>
            <li><strong>Samle bevis:</strong> Boardingkort, bookingbekreftelse, skjermbilde av forsinkelsestid</li>
            <li><strong>Send krav til Norwegian:</strong> <strong>Norwegian.com → Kundeservice → Erstatningskrav</strong></li>
            <li><strong>Forvent avslag:</strong> Norwegian nekter ofte første gang</li>
            <li><strong>Eskalere:</strong> Send klage til <strong>Forbrukerrådet</strong> eller bruk ClaimWinger (anbefalt)</li>
          </ol>

          <p>
            Les mer: <Link href="/no/blog/norwegian-hvordan-soke-erstatning-steg-for-steg" className="text-blue-600 hover:underline">Hvordan søker du om erstatning fra Norwegian steg for steg?</Link>
          </p>

          <div className="bg-gray-50 dark:bg-gray-800 p-8 rounded-xl my-12">
            <h2 className="text-2xl font-bold mb-6 text-gray-900 dark:text-white">Ofte stilte spørsmål</h2>
            
            <div className="space-y-6">
              <div>
                <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-2 flex items-center gap-2">
                  <CheckCircle2 className="w-5 h-5 text-green-600" />
                  Får jeg erstatning selv om jeg kjøpte billig billett?
                </h3>
                <p className="text-gray-700 dark:text-gray-300 text-sm">
                  <strong>Ja!</strong> EU261-kompensasjon er <strong>uavhengig av billettpris</strong>. Selv om du kjøpte en LowFare-billett, får du full erstatning hvis forsinkelsen var 3+ timer.
                </p>
              </div>

              <div>
                <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-2 flex items-center gap-2">
                  <CheckCircle2 className="w-5 h-5 text-green-600" />
                  Hva hvis Norwegian sier "værforhold på Flesland"?
                </h3>
                <p className="text-gray-700 dark:text-gray-300 text-sm">
                  <strong>Sjekk om andre flyselskap også var forsinket.</strong> Hvis bare Norwegian hadde problemer, må de betale. ClaimWinger har tilgang til værdata som avslører falske "vær-unnskyldninger".
                </p>
              </div>

              <div>
                <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-2 flex items-center gap-2">
                  <CheckCircle2 className="w-5 h-5 text-green-600" />
                  Får jeg erstatning for returflyet London–Bergen?
                </h3>
                <p className="text-gray-700 dark:text-gray-300 text-sm">
                  <strong>Ja, hvis flyet var forsinket mer enn 3 timer.</strong> Retur-flygninger fra London til Bergen er også dekket av EU261 fordi Norwegian er et EØS-registrert selskap.
                </p>
              </div>

              <div>
                <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-2 flex items-center gap-2">
                  <CheckCircle2 className="w-5 h-5 text-green-600" />
                  Hvor lang tid har jeg på meg til å kreve?
                </h3>
                <p className="text-gray-700 dark:text-gray-300 text-sm">
                  I Norge er foreldelsesfristen <strong>3 år</strong> fra flydatoen. Les mer: <Link href="/no/blog/krave-erstatning-fly-3-ar-siden" className="text-blue-600 hover:underline">Kan jeg kreve erstatning for et fly for 3 år siden?</Link>
                </p>
              </div>
            </div>
          </div>

          <div className="bg-gradient-to-br from-blue-600 to-indigo-700 text-white rounded-2xl p-8 md:p-12 text-center my-12 shadow-lg">
            <h3 className="text-3xl font-bold mb-4">Bergen–London forsinket? Krev erstatning nå</h3>
            <p className="text-xl mb-8 text-blue-100">
              ClaimWinger har erfaring med Bergen–London-ruten og høy suksessrate mot Norwegians avslag. No Win, No Fee.
            </p>
            <a href="https://claimwinger.com/no/forsinket-fly" target="_blank" rel="noopener noreferrer">
              <Button size="lg" className="bg-white text-blue-700 hover:bg-gray-100 text-lg px-8 py-6">
                Beregn min erstatning
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
            </a>
            <p className="text-sm text-blue-200 mt-4">
              ✓ 98% suksessrate | ✓ 4-8 ukers utbetaling | ✓ Ingen risiko
            </p>
          </div>

          <h2>Oppsummering</h2>
          <p>
            Bergen–London er en viktig vestlandsrute, men også blant de mest forsinkede fra Flesland. Hvis forsinkelsen var mer enn 3 timer ved landing, har du rett til minst 250 € kompensasjon per passasjer. Norwegian prøver ofte å nekte erstatning ved å påberope seg "værforhold på Flesland" — ClaimWinger har juridisk ekspertise og tilgang til data som avslører disse unnskyldningene. Les også den omfattende guiden: <Link href="/no/blog/norwegian-forsinkelse-erstatning-guide" className="text-blue-600 hover:underline">Erstatning for forsinket Norwegian-fly — komplett guide</Link>.
          </p>
        </div>
      </article>
    </LayoutNo>
  );
}