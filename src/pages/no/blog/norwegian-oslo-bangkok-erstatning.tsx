import { LayoutNo } from "@/components/LayoutNo";
import { SEO } from "@/components/SEO";
import { Button } from "@/components/ui/button";
import { ArrowRight, Plane, CheckCircle2, Euro } from "lucide-react";
import Link from "next/link";

export default function NorwegianOsloBangkokErstatning() {
  return (
    <LayoutNo>
      <SEO 
        title="Norwegian Oslo–Bangkok forsinkelse – hvordan få 600 € erstatning"
        description="Var Norwegian-flyet ditt forsinket på ruten Oslo–Bangkok? Lær hvordan du krever maksimal erstatning (600 €) for langdistanseflygninger."
        url="https://problemlot.com/no/blog/norwegian-oslo-bangkok-erstatning"
      />

      <article className="container mx-auto px-4 py-12 max-w-4xl">
        <header className="mb-8">
          <Link href="/no/blog" className="text-blue-600 hover:text-blue-700 dark:text-blue-400 text-sm font-medium mb-4 inline-block">
            ← Tilbake til blogg
          </Link>
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-4">
            Erstatning for Norwegian Oslo–Bangkok — langdistanse og maksimal kompensasjon
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
            <Plane className="w-6 h-6" />
            Raskt svar: 600 € for Oslo–Bangkok forsinkelser over 4 timer
          </h2>
          <div className="space-y-3 text-gray-800 dark:text-gray-200">
            <p>
              Oslo–Bangkok (~8600 km) kvalifiserer til <strong>maksimal kompensasjon</strong> under EU261 (gjelder i Norge gjennom EØS-avtalen). Hvis Norwegian-flyet var forsinket <strong>mer enn 4 timer</strong> ved landing i Bangkok, har du rett til <strong>600 €</strong> erstatning – uansett billettpris.
            </p>
            <p className="text-sm border-t border-blue-200 dark:border-blue-800 pt-3 mt-3">
              💡 <strong>Viktig:</strong> Langdistanseflygninger har en spesiell regel – forsinkelsen må være 4+ timer (ikke 3) for full kompensasjon.
            </p>
          </div>
        </div>

        {/* CTA 1 */}
        <div className="bg-gradient-to-r from-blue-50 to-indigo-50 dark:from-blue-900/20 dark:to-indigo-900/20 p-8 rounded-xl mb-12 text-center border border-gray-100 dark:border-gray-800">
          <Euro className="w-16 h-16 text-blue-600 mx-auto mb-4" />
          <h3 className="text-2xl font-bold mb-4 dark:text-white">Norwegian Oslo–Bangkok forsinket?</h3>
          <p className="text-gray-700 dark:text-gray-300 mb-6">
            Sjekk om du har rett til 600 € erstatning. Gratis vurdering på 2 minutter.
          </p>
          <a href="https://claimwinger.com/no/forsinket-fly" target="_blank" rel="noopener noreferrer">
            <Button size="lg" className="bg-blue-600 hover:bg-blue-700 text-white text-lg px-8 py-6">
              Sjekk min Bangkok-forsinkelse
              <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
          </a>
        </div>

        <div className="prose dark:prose-invert max-w-none">
          <h2>Hvorfor gjelder EU261 for Oslo–Bangkok?</h2>
          <p>
            Mange passasjerer tror at EU261 kun gjelder flygninger innenfor Europa. Dette er <strong>feil</strong>. Fordi flyet:
          </p>
          <ul>
            <li>Avgår fra <strong>Norge</strong> (EØS-land)</li>
            <li>Opereres av <strong>Norwegian</strong> (EØS-registrert flyselskap)</li>
          </ul>
          <p>
            ...er du beskyttet av <strong>EU-forordning 261/2004</strong> (gjelder i Norge gjennom <strong>EØS-avtalen</strong>) uansett destinasjon. Det betyr at selv om du lander i Thailand, har du rett til norsk/europeisk forbrukerbeskyttelse.
          </p>

          <p>
            Les mer: <Link href="/no/blog/gjelder-eu261-for-fly-utenfor-europa" className="text-blue-600 hover:underline">Gjelder EU261 for fly utenfor Europa?</Link>
          </p>

          <h2>Hvor mye erstatning får du?</h2>
          <p>
            Oslo–Bangkok er en <strong>langdistanseflyvning (over 3500 km)</strong>. Erstatningen avhenger av forsinkelsestiden ved ankomst:
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
                  <td className="border border-gray-300 dark:border-gray-600 px-4 py-3">3–4 timer</td>
                  <td className="border border-gray-300 dark:border-gray-600 px-4 py-3 font-bold text-yellow-600">300 € (halvering)</td>
                </tr>
                <tr>
                  <td className="border border-gray-300 dark:border-gray-600 px-4 py-3">4+ timer</td>
                  <td className="border border-gray-300 dark:border-gray-600 px-4 py-3 font-bold text-green-600">600 €</td>
                </tr>
              </tbody>
            </table>
          </div>

          <p>
            <strong>Eksempel:</strong> Norwegian DY051 Oslo–Bangkok skulle lande kl. 06:00. Flyet landet kl. 10:30 (4t 30min forsinket). Du får <strong>600 €</strong>.
          </p>

          <h2>Vanlige årsaker til forsinkelser på Oslo–Bangkok</h2>
          <p>
            Basert på historiske data (2022-2024):
          </p>
          <ul>
            <li><strong>Teknisk feil:</strong> 35% av forsinkelsene (Norwegian MÅ betale)</li>
            <li><strong>Manglende besetning:</strong> 20% (Norwegian MÅ betale)</li>
            <li><strong>Forsinkelse fra tidligere flytur:</strong> 25% (Norwegian MÅ betale)</li>
            <li><strong>Ekstremvær (monsun, tyfon):</strong> 15% (Ekstraordinært – lovlig å nekte)</li>
            <li><strong>Luftromsstenging:</strong> 5% (Ekstraordinært)</li>
          </ul>

          <p>
            Les mer: <Link href="/no/blog/norwegian-teknisk-feil-ekstraordinaer-omstendighet" className="text-blue-600 hover:underline">Norwegian teknisk feil – er det en ekstraordinær omstendighet?</Link>
          </p>

          <h2>Hva med tilbakeflyet Bangkok–Oslo?</h2>
          <p>
            Hvis du hadde <strong>returflyet Bangkok–Oslo</strong> og det var forsinket, gjelder <strong>IKKE</strong> EU261 (fordi flyet avgår fra land utenfor EØS). Du har kun rett til erstatning hvis:
          </p>
          <ul>
            <li>Flyet opereres av et <strong>EØS-registrert selskap</strong> (Norwegian kvalifiserer)</li>
            <li><strong>OG</strong> billetten ble kjøpt som én samlet booking med utgående flytur (tur-retur-pakke)</li>
          </ul>

          <p>
            <strong>Praktisk:</strong> ClaimWinger har ekspertise til å vurdere om Bangkok–Oslo-returen kvalifiserer under EU261. De vil automatisk sjekke bookingstrukturen.
          </p>

          <h2>Hvordan krever du erstatning?</h2>
          <ol>
            <li>Samle bevis: Boardingkort (både Oslo→Bangkok og eventuelt Bangkok→Oslo), bookingbekreftelse</li>
            <li>Sjekk forsinkelsestid: Bruk FlightRadar24 eller lignende for å dokumentere nøyaktig landingstid</li>
            <li>Send krav til <strong>Norwegian.com → Kundeservice</strong></li>
            <li>Hvis Norwegian nekter: Eskalere til <strong>Forbrukerrådet</strong> eller bruk ClaimWinger</li>
          </ol>

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
                  Får jeg 600 € selv om billetten kostet 3000 NOK?
                </h3>
                <p className="text-gray-700 dark:text-gray-300 text-sm">
                  <strong>Ja!</strong> EU261-kompensasjon er <strong>uavhengig av billettpris</strong>. Selv om du kjøpte en LowFare-billett på tilbud, får du full 600 € hvis forsinkelsen var 4+ timer.
                </p>
              </div>

              <div>
                <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-2 flex items-center gap-2">
                  <CheckCircle2 className="w-5 h-5 text-green-600" />
                  Hva hvis Norwegian sier "monsun i Thailand"?
                </h3>
                <p className="text-gray-700 dark:text-gray-300 text-sm">
                  <strong>Sjekk om andre flyselskap også var forsinket.</strong> Hvis bare Norwegian hadde problemer, må de betale. ClaimWinger har tilgang til værdata og flytrafikk som avslører falske "værunnskyldninger".
                </p>
              </div>

              <div>
                <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-2 flex items-center gap-2">
                  <CheckCircle2 className="w-5 h-5 text-green-600" />
                  Får jeg erstatning for mellomlandingen i Stockholm?
                </h3>
                <p className="text-gray-700 dark:text-gray-300 text-sm">
                  Nei – Norwegian fløy Oslo–Bangkok direkte frem til 2023. Hvis du hadde en indirekte rute (f.eks. via Stockholm), gjelder spesielle regler for tilkoblingsfly. Kontakt ClaimWinger for vurdering.
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
            <h3 className="text-3xl font-bold mb-4">Oslo–Bangkok forsinket? Krev 600 € nå</h3>
            <p className="text-xl mb-8 text-blue-100">
              ClaimWinger har erfaring med langdistansekrav og høy suksessrate mot Norwegian. No Win, No Fee.
            </p>
            <a href="https://claimwinger.com/no/forsinket-fly" target="_blank" rel="noopener noreferrer">
              <Button size="lg" className="bg-white text-blue-700 hover:bg-gray-100 text-lg px-8 py-6">
                Beregn min Bangkok-erstatning
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
            </a>
            <p className="text-sm text-blue-200 mt-4">
              ✓ 98% suksessrate | ✓ 4-8 ukers utbetaling | ✓ Ingen risiko
            </p>
          </div>

          <h2>Oppsummering</h2>
          <p>
            Oslo–Bangkok kvalifiserer til maksimal EU261-kompensasjon (600 €) hvis forsinkelsen var 4+ timer ved landing. Norwegian prøver ofte å nekte langdistansekrav ved å påberope seg "monsun" eller "tekniske problemer i Asia" – ClaimWinger har juridisk ekspertise og tilgang til internasjonale databaser som avslører disse unnskyldningene.
          </p>
        </div>
      </article>
    </LayoutNo>
  );
}