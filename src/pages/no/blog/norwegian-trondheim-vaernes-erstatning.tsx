import { LayoutNo } from "@/components/LayoutNo";
import { SEO } from "@/components/SEO";
import { Button } from "@/components/ui/button";
import { ArrowRight, MapPin, CheckCircle2, Euro, AlertTriangle } from "lucide-react";
import Link from "next/link";

export default function NorwegianTrondheimVaernesErstatning() {
  return (
    <LayoutNo>
      <SEO 
        title="Norwegian Trondheim Værnes forsinkelse — 250-600 € erstatning (Midt-Norge)"
        description="Fly fra Trondheim Værnes med Norwegian ofte forsinket? Lær hvordan du krever 250-600 € erstatning for forsinkelser over 3 timer fra Midt-Norge."
        url="https://problemlot.com/no/blog/norwegian-trondheim-vaernes-erstatning"
      />

      <article className="container mx-auto px-4 py-12 max-w-4xl">
        <header className="mb-8">
          <Link href="/no/blog" className="text-blue-600 hover:text-blue-700 dark:text-blue-400 text-sm font-medium mb-4 inline-block">
            ← Tilbake til blogg
          </Link>
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-4">
            Erstatning for Norwegian Trondheim Værnes — rettigheter fra Midt-Norge
          </h1>
          <div className="flex items-center gap-4 text-sm text-gray-600 dark:text-gray-400">
            <span>6 min lesing</span>
            <span>•</span>
            <span>Oppdatert: Mars 2025</span>
          </div>
        </header>

        <div className="bg-indigo-50 dark:bg-indigo-900/20 border-l-4 border-indigo-600 p-6 mb-8 rounded-r-lg">
          <h2 className="text-xl font-bold text-indigo-900 dark:text-indigo-100 mb-3 flex items-center gap-2">
            <MapPin className="w-6 h-6" />
            Raskt svar: 250-600 € for Trondheim Værnes forsinkelser over 3 timer
          </h2>
          <div className="space-y-3 text-gray-800 dark:text-gray-200">
            <p>
              Trondheim Værnes (TRD) er Midt-Norges viktigste flyplass og Norwegian opererer flere ruter derfra. Hvis Norwegian-flyet var forsinket <strong>mer enn 3 timer</strong> ved landing på destinasjonen, har du rett til <strong>250-600 €</strong> erstatning under <strong>EU261</strong> (gjelder i Norge gjennom <strong>EØS-avtalen</strong>). Erstatningsbeløpet avhenger av flyavstand og forsinkelsestid.
            </p>
          </div>
        </div>

        <div className="bg-gradient-to-r from-indigo-50 to-purple-50 dark:from-indigo-900/20 dark:to-purple-900/20 p-8 rounded-xl mb-12 text-center border border-gray-100 dark:border-gray-800">
          <Euro className="w-16 h-16 text-indigo-600 mx-auto mb-4" />
          <h3 className="text-2xl font-bold mb-4 dark:text-white">Norwegian Trondheim forsinket?</h3>
          <p className="text-gray-700 dark:text-gray-300 mb-6">
            Sjekk om du har rett til 250-600 € erstatning. Gratis vurdering på 2 minutter.
          </p>
          <a href="https://claimwinger.com/no/forsinket-fly" target="_blank" rel="noopener noreferrer">
            <Button size="lg" className="bg-indigo-600 hover:bg-indigo-700 text-white text-lg px-8 py-6">
              Sjekk min Trondheim-forsinkelse
              <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
          </a>
        </div>

        <div className="prose dark:prose-invert max-w-none">
          <h2>Populære Norwegian-ruter fra Trondheim Værnes</h2>
          <p>
            Norwegian opererer flere innenriks- og utenriksruter fra Trondheim Værnes:
          </p>
          <ul>
            <li><strong>Trondheim–Oslo:</strong> ~400 km (250 € erstatning ved 3+ timer forsinkelse)</li>
            <li><strong>Trondheim–Bergen:</strong> ~400 km (250 € erstatning ved 3+ timer forsinkelse)</li>
            <li><strong>Trondheim–Alicante:</strong> ~2800 km (400 € erstatning ved 3+ timer forsinkelse)</li>
            <li><strong>Trondheim–Gran Canaria:</strong> ~3800 km (600 € erstatning ved 3+ timer forsinkelse)</li>
            <li><strong>Trondheim–København:</strong> ~700 km (250 € erstatning ved 3+ timer forsinkelse)</li>
          </ul>

          <p>
            Les mer: <Link href="/no/blog/norwegian-forsinkelse-erstatning-guide" className="text-blue-600 hover:underline">Erstatning for forsinket Norwegian-fly — komplett guide</Link>
          </p>

          <h2>Hvor mye erstatning får du fra Trondheim?</h2>
          <p>
            Erstatningen avhenger av flyavstand og forsinkelsestid ved ankomst:
          </p>

          <div className="overflow-x-auto my-6">
            <table className="w-full border-collapse bg-white dark:bg-gray-800">
              <thead>
                <tr className="bg-indigo-600 text-white">
                  <th className="border border-gray-300 dark:border-gray-600 px-4 py-3 text-left">Flyavstand</th>
                  <th className="border border-gray-300 dark:border-gray-600 px-4 py-3 text-left">Forsinkelse ved landing</th>
                  <th className="border border-gray-300 dark:border-gray-600 px-4 py-3 text-left font-bold">Erstatning</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td className="border border-gray-300 dark:border-gray-600 px-4 py-3">Under 1500 km</td>
                  <td className="border border-gray-300 dark:border-gray-600 px-4 py-3">3+ timer</td>
                  <td className="border border-gray-300 dark:border-gray-600 px-4 py-3 font-bold text-green-600">250 €</td>
                </tr>
                <tr className="bg-gray-50 dark:bg-gray-800/50">
                  <td className="border border-gray-300 dark:border-gray-600 px-4 py-3">1500–3500 km</td>
                  <td className="border border-gray-300 dark:border-gray-600 px-4 py-3">3+ timer</td>
                  <td className="border border-gray-300 dark:border-gray-600 px-4 py-3 font-bold text-green-600">400 €</td>
                </tr>
                <tr>
                  <td className="border border-gray-300 dark:border-gray-600 px-4 py-3">Over 3500 km</td>
                  <td className="border border-gray-300 dark:border-gray-600 px-4 py-3">3+ timer</td>
                  <td className="border border-gray-300 dark:border-gray-600 px-4 py-3 font-bold text-green-600">600 €</td>
                </tr>
              </tbody>
            </table>
          </div>

          <p>
            Les mer: <Link href="/no/blog/norwegian-hvor-mye-erstatning" className="text-blue-600 hover:underline">Hvor mye erstatning kan du kreve fra Norwegian?</Link>
          </p>

          <div className="bg-yellow-50 dark:bg-yellow-900/20 border-l-4 border-yellow-500 p-6 my-6">
            <h3 className="text-lg font-semibold flex items-center gap-2 mb-2">
              <AlertTriangle className="w-5 h-5" />
              Viktig: Norwegian prøver ofte å nekte erstatning fra Trondheim
            </h3>
            <p className="text-sm mb-0">
              Norwegian påberoper seg ofte <strong>"værforhold på Værnes"</strong> eller <strong>"tekniske problemer"</strong>. Disse unnskyldningene er ofte <strong>falske</strong> — hvis andre flyselskap landet på tid, må Norwegian betale. ClaimWinger har tilgang til værdata og flytrafikk som avslører falske unnskyldninger.
            </p>
          </div>

          <h2>Hvordan krever du erstatning fra Trondheim?</h2>
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
                  Får jeg erstatning for innenriksruter fra Trondheim?
                </h3>
                <p className="text-gray-700 dark:text-gray-300 text-sm">
                  <strong>Ja!</strong> EU261 gjelder også for innenriksruter i Norge (gjennom EØS-avtalen). Hvis flyet var forsinket mer enn 3 timer, har du rett til minst 250 € kompensasjon.
                </p>
              </div>

              <div>
                <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-2 flex items-center gap-2">
                  <CheckCircle2 className="w-5 h-5 text-green-600" />
                  Hva hvis Norwegian sier "værforhold på Værnes"?
                </h3>
                <p className="text-gray-700 dark:text-gray-300 text-sm">
                  <strong>Sjekk om andre flyselskap også var forsinket.</strong> Hvis bare Norwegian hadde problemer, må de betale. ClaimWinger har tilgang til værdata som avslører falske "vær-unnskyldninger".
                </p>
              </div>

              <div>
                <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-2 flex items-center gap-2">
                  <CheckCircle2 className="w-5 h-5 text-green-600" />
                  Får jeg erstatning for returflyet til Trondheim?
                </h3>
                <p className="text-gray-700 dark:text-gray-300 text-sm">
                  <strong>Ja, hvis flyet var forsinket mer enn 3 timer.</strong> Retur-flygninger til Trondheim er også dekket av EU261 fordi Norwegian er et EØS-registrert selskap.
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

          <div className="bg-gradient-to-br from-indigo-600 to-purple-700 text-white rounded-2xl p-8 md:p-12 text-center my-12 shadow-lg">
            <h3 className="text-3xl font-bold mb-4">Trondheim Værnes forsinket? Krev erstatning nå</h3>
            <p className="text-xl mb-8 text-indigo-100">
              ClaimWinger har erfaring med ruter fra Trondheim og høy suksessrate mot Norwegians avslag. No Win, No Fee.
            </p>
            <a href="https://claimwinger.com/no/forsinket-fly" target="_blank" rel="noopener noreferrer">
              <Button size="lg" className="bg-white text-indigo-700 hover:bg-gray-100 text-lg px-8 py-6">
                Beregn min erstatning
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
            </a>
            <p className="text-sm text-indigo-200 mt-4">
              ✓ 98% suksessrate | ✓ 4-8 ukers utbetaling | ✓ Ingen risiko
            </p>
          </div>

          <h2>Oppsummering</h2>
          <p>
            Trondheim Værnes er en viktig regional flyplass, og Norwegian opererer flere ruter derfra. Hvis forsinkelsen var mer enn 3 timer ved landing, har du rett til 250-600 € kompensasjon per passasjer (avhengig av flyavstand). Norwegian prøver ofte å nekte erstatning ved å påberope seg "værforhold på Værnes" — ClaimWinger har juridisk ekspertise og tilgang til data som avslører disse unnskyldningene. Les også den omfattende guiden: <Link href="/no/blog/norwegian-forsinkelse-erstatning-guide" className="text-blue-600 hover:underline">Erstatning for forsinket Norwegian-fly — komplett guide</Link>.
          </p>
        </div>
      </article>
    </LayoutNo>
  );
}