import { LayoutNo } from "@/components/LayoutNo";
import { SEO } from "@/components/SEO";
import { Button } from "@/components/ui/button";
import { ArrowRight, Sun, CheckCircle2, Euro, AlertTriangle } from "lucide-react";
import Link from "next/link";

export default function NorwegianOsloAlicanteErstatning() {
  return (
    <LayoutNo>
      <SEO 
        title="Norwegian Oslo–Alicante forsinkelse — 400 € erstatning for feriereisen"
        description="Var Norwegian-flyet ditt forsinket på den populære Oslo–Alicante-ruten? Lær hvordan du krever opptil 400 € erstatning for ødelagt ferie."
        url="https://problemlot.com/no/blog/norwegian-oslo-alicante-erstatning"
      />

      <article className="container mx-auto px-4 py-12 max-w-4xl">
        <header className="mb-8">
          <Link href="/no/blog" className="text-blue-600 hover:text-blue-700 dark:text-blue-400 text-sm font-medium mb-4 inline-block">
            ← Tilbake til blogg
          </Link>
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-4">
            Erstatning for Norwegian Oslo–Alicante — populær feriereise med hyppige forsinkelser
          </h1>
          <div className="flex items-center gap-4 text-sm text-gray-600 dark:text-gray-400">
            <span>5 min lesing</span>
            <span>•</span>
            <span>Oppdatert: Mars 2025</span>
          </div>
        </header>

        {/* Quick Answer */}
        <div className="bg-orange-50 dark:bg-orange-900/20 border-l-4 border-orange-600 p-6 mb-8 rounded-r-lg">
          <h2 className="text-xl font-bold text-orange-900 dark:text-orange-100 mb-3 flex items-center gap-2">
            <Sun className="w-6 h-6" />
            Raskt svar: 400 € for Oslo–Alicante forsinkelser over 3 timer
          </h2>
          <div className="space-y-3 text-gray-800 dark:text-gray-200">
            <p>
              Oslo–Alicante (~2600 km) er en av Norwegians mest populære ferieruter til Spania, men også blant de mest forsinkede. Hvis Norwegian-flyet var forsinket <strong>mer enn 3 timer</strong> ved landing i Alicante, har du rett til <strong>400 €</strong> erstatning under <strong>EU261</strong> (gjelder i Norge gjennom <strong>EØS-avtalen</strong>).
            </p>
          </div>
        </div>

        {/* CTA 1 */}
        <div className="bg-gradient-to-r from-orange-50 to-amber-50 dark:from-orange-900/20 dark:to-amber-900/20 p-8 rounded-xl mb-12 text-center border border-gray-100 dark:border-gray-800">
          <Euro className="w-16 h-16 text-orange-600 mx-auto mb-4" />
          <h3 className="text-2xl font-bold mb-4 dark:text-white">Norwegian Oslo–Alicante forsinket?</h3>
          <p className="text-gray-700 dark:text-gray-300 mb-6">
            Sjekk om du har rett til 400 € erstatning. Gratis vurdering på 2 minutter.
          </p>
          <a href="https://claimwinger.com/no/forsinket-fly" target="_blank" rel="noopener noreferrer">
            <Button size="lg" className="bg-orange-600 hover:bg-orange-700 text-white text-lg px-8 py-6">
              Sjekk min Alicante-forsinkelse
              <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
          </a>
        </div>

        <div className="prose dark:prose-invert max-w-none">
          <h2>Hvorfor er Oslo–Alicante ofte forsinket?</h2>
          <p>
            Basert på data fra <strong>Avinor</strong> og <strong>FlightRadar24</strong> (2022-2024), er Oslo–Alicante blant de <strong>mest forsinkede Norwegian-rutene</strong>:
          </p>
          <ul>
            <li><strong>Sommersesong (juni–august):</strong> 32% av avgangene forsinket mer enn 15 minutter</li>
            <li><strong>Høstferie (uke 40-42):</strong> 28% forsinkelser</li>
            <li><strong>Vintersesongen (desember–februar):</strong> 22% forsinkelser</li>
          </ul>

          <p><strong>Hovedårsaker til forsinkelser på Oslo–Alicante:</strong></p>
          <ol>
            <li><strong>Alicante-Elche lufthavn overbelastning:</strong> I høysesongen har Alicante-Elche kapasitetsproblemer</li>
            <li><strong>Tekniske problemer:</strong> Norwegian 737-MAX har hatt gjentatte tekniske feil på denne ruten</li>
            <li><strong>Forsinkelse fra tidligere flytur:</strong> Flyet som opererer Oslo–Alicante kommer ofte forsinket fra andre ruter</li>
            <li><strong>Værforhold i Spania:</strong> Tordenvær og sterk vind i sommersesongen</li>
          </ol>

          <p>
            Les mer: <Link href="/no/blog/norwegian-forsinkelse-hoysesong" className="text-blue-600 hover:underline">Norwegian forsinkelse i høysesong</Link>
          </p>

          <h2>Hvor mye erstatning får du?</h2>
          <p>
            Oslo–Alicante (~2600 km) faller i kategorien <strong>1500-3500 km</strong>. Erstatningen avhenger av forsinkelsestiden ved ankomst:
          </p>

          <div className="overflow-x-auto my-6">
            <table className="w-full border-collapse bg-white dark:bg-gray-800">
              <thead>
                <tr className="bg-orange-600 text-white">
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
                  <td className="border border-gray-300 dark:border-gray-600 px-4 py-3 font-bold text-green-600">400 €</td>
                </tr>
              </tbody>
            </table>
          </div>

          <p>
            <strong>Eksempel:</strong> Norwegian DY1397 Oslo–Alicante skulle lande kl. 21:00. Flyet landet kl. 00:30 neste dag (3t 30min forsinket). Du får <strong>400 €</strong> per passasjer.
          </p>

          <p>
            Les mer: <Link href="/no/blog/norwegian-hvor-mye-erstatning" className="text-blue-600 hover:underline">Hvor mye erstatning kan du kreve fra Norwegian?</Link>
          </p>

          <div className="bg-yellow-50 dark:bg-yellow-900/20 border-l-4 border-yellow-500 p-6 my-6">
            <h3 className="text-lg font-semibold flex items-center gap-2 mb-2">
              <AlertTriangle className="w-5 h-5" />
              Viktig: Norwegian prøver ofte å nekte erstatning for Alicante-ruten
            </h3>
            <p className="text-sm mb-0">
              Norwegian påberoper seg ofte <strong>"luftromsrestriksjoner i Spania"</strong> eller <strong>"væravhengige forsinkelser på Alicante-Elche"</strong>. Disse unnskyldningene er ofte <strong>falske</strong> — hvis andre flyselskap landet på tid, må Norwegian betale. ClaimWinger har tilgang til værdata og flytrafikk som avslører falske værunnskyldninger.
            </p>
          </div>

          <h2>Hvordan krever du erstatning?</h2>
          <ol>
            <li><strong>Samle bevis:</strong> Boardingkort, bookingbekreftelse, skjermbilde av forsinkelsestid (fra FlightRadar24 eller lignende)</li>
            <li><strong>Send krav til Norwegian:</strong> Gå til <strong>Norwegian.com → Kundeservice → Erstatningskrav</strong></li>
            <li><strong>Forvent avslag:</strong> Norwegian nekter ofte første gang og påberoper seg "væravhengige forsinkelser"</li>
            <li><strong>Eskalere:</strong> Send klage til <strong>Forbrukerrådet</strong> eller bruk ClaimWinger (anbefalt for rask utbetaling)</li>
          </ol>

          <p>
            <strong>ClaimWinger fordel for Alicante-ruten:</strong> De har historiske data fra Alicante-Elche lufthavn som beviser at Norwegian ofte bruker falske værunnskyldninger. De har også juridisk ekspertise til å bekjempe Norwegians avslag effektivt.
          </p>

          <p>
            Les mer: <Link href="/no/blog/norwegian-hvordan-soke-erstatning-steg-for-steg" className="text-blue-600 hover:underline">Hvordan søker du om erstatning fra Norwegian steg for steg?</Link>
          </p>

          {/* FAQ */}
          <div className="bg-gray-50 dark:bg-gray-800 p-8 rounded-xl my-12">
            <h2 className="text-2xl font-bold mb-6 text-gray-900 dark:text-white">Ofte stilte spørsmål</h2>
            
            <div className="space-y-6">
              <div>
                <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-2 flex items-center gap-2">
                  <CheckCircle2 className="w-5 h-5 text-green-600" />
                  Får jeg 400 € selv om billetten kostet 500 NOK?
                </h3>
                <p className="text-gray-700 dark:text-gray-300 text-sm">
                  <strong>Ja!</strong> EU261-kompensasjon er <strong>uavhengig av billettpris</strong>. Selv om du kjøpte en LowFare-billett på tilbud, får du full 400 € hvis forsinkelsen var 3+ timer.
                </p>
              </div>

              <div>
                <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-2 flex items-center gap-2">
                  <CheckCircle2 className="w-5 h-5 text-green-600" />
                  Hva hvis Norwegian sier "tordenvær i Alicante"?
                </h3>
                <p className="text-gray-700 dark:text-gray-300 text-sm">
                  <strong>Sjekk om andre flyselskap også var forsinket.</strong> Hvis bare Norwegian hadde problemer, må de betale. ClaimWinger har tilgang til værdata og flytrafikk som avslører falske "værunnskyldninger".
                </p>
              </div>

              <div>
                <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-2 flex items-center gap-2">
                  <CheckCircle2 className="w-5 h-5 text-green-600" />
                  Får jeg erstatning for returflyet Alicante–Oslo?
                </h3>
                <p className="text-gray-700 dark:text-gray-300 text-sm">
                  <strong>Ja, hvis flyet var forsinket mer enn 3 timer.</strong> Retur-flygninger fra Alicante til Oslo er også dekket av EU261 fordi Norwegian er et EØS-registrert selskap. Les mer: <Link href="/no/blog/gjelder-eu261-for-fly-utenfor-europa" className="text-blue-600 hover:underline">Gjelder EU261 for fly utenfor Europa?</Link>
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

          {/* CTA 2 */}
          <div className="bg-gradient-to-br from-orange-600 to-amber-600 text-white rounded-2xl p-8 md:p-12 text-center my-12 shadow-lg">
            <h3 className="text-3xl font-bold mb-4">Oslo–Alicante forsinket? Krev 400 € nå</h3>
            <p className="text-xl mb-8 text-orange-100">
              ClaimWinger har erfaring med Oslo–Alicante-ruten og høy suksessrate mot Norwegians avslag. No Win, No Fee.
            </p>
            <a href="https://claimwinger.com/no/forsinket-fly" target="_blank" rel="noopener noreferrer">
              <Button size="lg" className="bg-white text-orange-700 hover:bg-gray-100 text-lg px-8 py-6">
                Beregn min Alicante-erstatning
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
            </a>
            <p className="text-sm text-orange-200 mt-4">
              ✓ 98% suksessrate | ✓ 4-8 ukers utbetaling | ✓ Ingen risiko
            </p>
          </div>

          <h2>Oppsummering</h2>
          <p>
            Oslo–Alicante er en av Norwegians mest populære ferieruter, men også blant de mest forsinkede. Hvis forsinkelsen var mer enn 3 timer ved landing, har du rett til 400 € kompensasjon per passasjer — uansett billettpris. Norwegian prøver ofte å nekte erstatning ved å påberope seg "væravhengige forsinkelser i Spania" — ClaimWinger har juridisk ekspertise og tilgang til værdata som avslører disse unnskyldningene. Les også den omfattende guiden: <Link href="/no/blog/norwegian-forsinkelse-erstatning-guide" className="text-blue-600 hover:underline">Erstatning for forsinket Norwegian-fly — komplett guide</Link>.
          </p>
        </div>
      </article>
    </LayoutNo>
  );
}