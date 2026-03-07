import { LayoutNo } from "@/components/LayoutNo";
import { SEO } from "@/components/SEO";
import { Button } from "@/components/ui/button";
import { ArrowRight, MapPin, CheckCircle2, Euro, AlertTriangle } from "lucide-react";
import Link from "next/link";

export default function NorwegianOsloBarcelonaErstatning() {
  return (
    <LayoutNo>
      <SEO 
        title="Norwegian Oslo–Barcelona forsinkelse — 400 € erstatning (hyppig forsinket)"
        description="Oslo–Barcelona med Norwegian er hyppig forsinket. Lær hvordan du krever 400 € erstatning for forsinkelser over 3 timer."
        url="https://problemlot.com/no/blog/norwegian-oslo-barcelona-erstatning"
      />

      <article className="container mx-auto px-4 py-12 max-w-4xl">
        <header className="mb-8">
          <Link href="/no/blog" className="text-blue-600 hover:text-blue-700 dark:text-blue-400 text-sm font-medium mb-4 inline-block">
            ← Tilbake til blogg
          </Link>
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-4">
            Erstatning for Norwegian Oslo–Barcelona — hyppig forsinket rute (400 €)
          </h1>
          <div className="flex items-center gap-4 text-sm text-gray-600 dark:text-gray-400">
            <span>5 min lesing</span>
            <span>•</span>
            <span>Oppdatert: Mars 2025</span>
          </div>
        </header>

        {/* Quick Answer */}
        <div className="bg-blue-50 dark:bg-blue-900/20 border-l-4 border-blue-600 p-6 mb-8 rounded-r-lg">
          <h2 className="text-xl font-bold text-blue-900 dark:text-blue-100 mb-3 flex items-center gap-2">
            <MapPin className="w-6 h-6" />
            Raskt svar: 400 € for Oslo–Barcelona forsinkelser over 3 timer
          </h2>
          <div className="space-y-3 text-gray-800 dark:text-gray-200">
            <p>
              Oslo–Barcelona (~2300 km) er en av Norwegians mest populære Spania-ruter, men også blant de mest forsinkede. Hvis Norwegian-flyet var forsinket <strong>mer enn 3 timer</strong> ved landing i Barcelona, har du rett til <strong>400 €</strong> erstatning under <strong>EU261</strong> (gjelder i Norge gjennom <strong>EØS-avtalen</strong>). Barcelona-El Prat er kjent for kapasitetsproblemer, men det er <strong>IKKE</strong> en gyldig unnskyldning for å nekte erstatning.
            </p>
          </div>
        </div>

        {/* CTA 1 */}
        <div className="bg-gradient-to-r from-blue-50 to-indigo-50 dark:from-blue-900/20 dark:to-indigo-900/20 p-8 rounded-xl mb-12 text-center border border-gray-100 dark:border-gray-800">
          <Euro className="w-16 h-16 text-blue-600 mx-auto mb-4" />
          <h3 className="text-2xl font-bold mb-4 dark:text-white">Norwegian Oslo–Barcelona forsinket?</h3>
          <p className="text-gray-700 dark:text-gray-300 mb-6">
            Sjekk om du har rett til 400 € erstatning. Gratis vurdering på 2 minutter.
          </p>
          <a href="https://claimwinger.com/no/forsinket-fly" target="_blank" rel="noopener noreferrer">
            <Button size="lg" className="bg-blue-600 hover:bg-blue-700 text-white text-lg px-8 py-6">
              Sjekk min Barcelona-forsinkelse
              <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
          </a>
        </div>

        <div className="prose dark:prose-invert max-w-none">
          <h2>Hvorfor er Oslo–Barcelona så ofte forsinket?</h2>
          <p>
            Basert på data fra <strong>Avinor</strong> og <strong>FlightRadar24</strong> (2022-2024):
          </p>
          <ul>
            <li><strong>Sommersesong (juni–august):</strong> 28% av avgangene forsinket mer enn 15 minutter</li>
            <li><strong>Høstferie (uke 40-42):</strong> 24% forsinkelser</li>
            <li><strong>Vintersesongen (desember–februar):</strong> 20% forsinkelser</li>
          </ul>

          <p><strong>Hovedårsaker til forsinkelser på Oslo–Barcelona:</strong></p>
          <ol>
            <li><strong>Barcelona-El Prat overbelastning:</strong> En av Europas mest trafikkerte flyplasser — lengre ventetider på rullebane</li>
            <li><strong>Norwegian 737-MAX tekniske problemer:</strong> Hyppige tekniske feil på denne ruten</li>
            <li><strong>Forsinkelse fra tidligere flytur:</strong> Flyet som opererer Oslo–Barcelona kommer ofte forsinket fra andre ruter (kjedeeffekt)</li>
            <li><strong>Luftromsrestriksjoner i Spania:</strong> Streiker i spansk flytrafikkkontroll (men IKKE ekstraordinært hvis andre selskaper fløy normalt)</li>
          </ol>

          <p>
            Les mer: <Link href="/no/blog/norwegian-forsinkelse-hoysesong" className="text-blue-600 hover:underline">Norwegian forsinkelse i høysesong</Link>
          </p>

          <div className="bg-yellow-50 dark:bg-yellow-900/20 border-l-4 border-yellow-500 p-6 my-6">
            <h3 className="text-lg font-semibold flex items-center gap-2 mb-2">
              <AlertTriangle className="w-5 h-5" />
              Viktig: "Overbelastet Barcelona-lufthavn" er IKKE en ekstraordinær omstendighet
            </h3>
            <p className="text-sm mb-0">
              Norwegian prøver ofte å nekte erstatning ved å påberope seg <strong>"kapasitetsproblemer på Barcelona-El Prat"</strong> eller <strong>"luftromsrestriksjoner i Spania"</strong>. Dette er <strong>ulovlig</strong> under EU261 — flyselskapet må planlegge for høy trafikk og ha tilstrekkelige reserver. Hvis andre flyselskap landet på tid, må Norwegian betale.
            </p>
          </div>

          <h2>Hvor mye erstatning får du?</h2>
          <p>
            Oslo–Barcelona (~2300 km) faller i kategorien <strong>1500-3500 km</strong>. Erstatningen avhenger av forsinkelsestiden ved ankomst:
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
                  <td className="border border-gray-300 dark:border-gray-600 px-4 py-3 font-bold text-green-600">400 €</td>
                </tr>
              </tbody>
            </table>
          </div>

          <p>
            <strong>Eksempel:</strong> Norwegian DY1393 Oslo–Barcelona skulle lande kl. 23:30. Flyet landet kl. 03:00 neste dag (3t 30min forsinket). Du får <strong>400 €</strong> per passasjer.
          </p>

          <p>
            Les mer: <Link href="/no/blog/norwegian-hvor-mye-erstatning" className="text-blue-600 hover:underline">Hvor mye erstatning kan du kreve fra Norwegian?</Link>
          </p>

          <h2>Hvordan krever du erstatning?</h2>
          <ol>
            <li><strong>Samle bevis:</strong> Boardingkort, bookingbekreftelse, skjermbilde av forsinkelsestid</li>
            <li><strong>Send krav til Norwegian:</strong> <strong>Norwegian.com → Kundeservice → Erstatningskrav</strong></li>
            <li><strong>Forvent avslag:</strong> Norwegian nekter ofte første gang og påberoper seg "kapasitetsproblemer på Barcelona-El Prat"</li>
            <li><strong>Eskalere:</strong> Send klage til <strong>Forbrukerrådet</strong> eller bruk ClaimWinger (anbefalt for rask utbetaling)</li>
          </ol>

          <p>
            <strong>ClaimWinger fordel for Barcelona-ruten:</strong> De har historiske data fra Barcelona-El Prat som beviser at Norwegian ofte bruker falske "kapasitetsproblemer"-unnskyldninger. De har også juridisk ekspertise til å bekjempe Norwegians avslag effektivt.
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
                  Får jeg 400 € selv om jeg kjøpte billetten på salg?
                </h3>
                <p className="text-gray-700 dark:text-gray-300 text-sm">
                  <strong>Ja!</strong> EU261-kompensasjon er <strong>uavhengig av billettpris</strong>. Selv om du kjøpte en LowFare-billett på tilbud for 300 NOK, får du full 400 € hvis forsinkelsen var 3+ timer.
                </p>
              </div>

              <div>
                <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-2 flex items-center gap-2">
                  <CheckCircle2 className="w-5 h-5 text-green-600" />
                  Hva hvis Norwegian sier "streik i spansk flytrafikkkontroll"?
                </h3>
                <p className="text-gray-700 dark:text-gray-300 text-sm">
                  <strong>Sjekk om andre flyselskap også var forsinket.</strong> Hvis bare Norwegian hadde problemer, må de betale. ClaimWinger har tilgang til flytrafikk-data som avslører falske "streik-unnskyldninger".
                </p>
              </div>

              <div>
                <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-2 flex items-center gap-2">
                  <CheckCircle2 className="w-5 h-5 text-green-600" />
                  Får jeg erstatning for returflyet Barcelona–Oslo?
                </h3>
                <p className="text-gray-700 dark:text-gray-300 text-sm">
                  <strong>Ja, hvis flyet var forsinket mer enn 3 timer.</strong> Retur-flygninger fra Barcelona til Oslo er også dekket av EU261 fordi Norwegian er et EØS-registrert selskap. Les mer: <Link href="/no/blog/gjelder-eu261-for-fly-utenfor-europa" className="text-blue-600 hover:underline">Gjelder EU261 for fly utenfor Europa?</Link>
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
          <div className="bg-gradient-to-br from-blue-600 to-indigo-700 text-white rounded-2xl p-8 md:p-12 text-center my-12 shadow-lg">
            <h3 className="text-3xl font-bold mb-4">Oslo–Barcelona forsinket? Krev 400 € nå</h3>
            <p className="text-xl mb-8 text-blue-100">
              ClaimWinger har erfaring med Oslo–Barcelona-ruten og høy suksessrate mot Norwegians avslag. No Win, No Fee.
            </p>
            <a href="https://claimwinger.com/no/forsinket-fly" target="_blank" rel="noopener noreferrer">
              <Button size="lg" className="bg-white text-blue-700 hover:bg-gray-100 text-lg px-8 py-6">
                Beregn min Barcelona-erstatning
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
            </a>
            <p className="text-sm text-blue-200 mt-4">
              ✓ 98% suksessrate | ✓ 4-8 ukers utbetaling | ✓ Ingen risiko
            </p>
          </div>

          <h2>Oppsummering</h2>
          <p>
            Oslo–Barcelona er en av Norwegians mest populære ruter, men også blant de mest forsinkede. Hvis forsinkelsen var mer enn 3 timer ved landing, har du rett til 400 € kompensasjon per passasjer. Norwegian prøver ofte å nekte erstatning ved å påberope seg "kapasitetsproblemer på Barcelona-El Prat" — ClaimWinger har juridisk ekspertise og tilgang til data som avslører disse unnskyldningene. Les også den omfattende guiden: <Link href="/no/blog/norwegian-forsinkelse-erstatning-guide" className="text-blue-600 hover:underline">Erstatning for forsinket Norwegian-fly — komplett guide</Link>.
          </p>
        </div>
      </article>
    </LayoutNo>
  );
}