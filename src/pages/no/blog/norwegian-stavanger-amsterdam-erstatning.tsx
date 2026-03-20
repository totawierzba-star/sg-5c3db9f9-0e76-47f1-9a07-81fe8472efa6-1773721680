import { LayoutNo } from "@/components/LayoutNo";
import { SEO } from "@/components/SEO";
import { Button } from "@/components/ui/button";
import { ArrowRight, Briefcase, CheckCircle2, Euro, AlertTriangle } from "lucide-react";
import Link from "next/link";

export default function NorwegianStavangerAmsterdamErstatning() {
  return (
    <LayoutNo>
      <SEO 
        title="Norwegian Stavanger–Amsterdam forsinkelse — 400 € erstatning (oljearbeidere)"
        description="Stavanger–Amsterdam med Norwegian er populær blant oljearbeidere. Lær hvordan du krever 400 € erstatning for forsinkelser over 3 timer."
        url="https://problemlot.com/no/blog/norwegian-stavanger-amsterdam-erstatning"
      />

      <article className="container mx-auto px-4 py-12 max-w-4xl">
        <header className="mb-8">
          <Link href="/no/blog" className="text-blue-600 hover:text-blue-700 dark:text-blue-400 text-sm font-medium mb-4 inline-block">
            ← Tilbake til blogg
          </Link>
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-4">
            Erstatning for Norwegian Stavanger–Amsterdam — oljearbeideres rettigheter
          </h1>
          <div className="flex items-center gap-4 text-sm text-gray-600 dark:text-gray-400">
            <span>6 min lesing</span>
            <span>•</span>
            <span>Oppdatert: Mars 2025</span>
          </div>
        </header>

        <div className="bg-orange-50 dark:bg-orange-900/20 border-l-4 border-orange-600 p-6 mb-8 rounded-r-lg">
          <h2 className="text-xl font-bold text-orange-900 dark:text-orange-100 mb-3 flex items-center gap-2">
            <Briefcase className="w-6 h-6" />
            Raskt svar: 400 € for Stavanger–Amsterdam forsinkelser over 3 timer
          </h2>
          <div className="space-y-3 text-gray-800 dark:text-gray-200">
            <p>
              Stavanger–Amsterdam (~900 km) er en av Norwegians viktigste forretningsruter, spesielt for oljearbeidere. Hvis Norwegian-flyet var forsinket <strong>mer enn 3 timer</strong> ved landing i Amsterdam, har du rett til <strong>400 €</strong> erstatning under <strong>EU261</strong> (gjelder i Norge gjennom <strong>EØS-avtalen</strong>). Dette gjelder også hvis arbeidsgiver betalte billetten.
            </p>
          </div>
        </div>

        <div className="bg-gradient-to-r from-orange-50 to-amber-50 dark:from-orange-900/20 dark:to-amber-900/20 p-8 rounded-xl mb-12 text-center border border-gray-100 dark:border-gray-800">
          <Euro className="w-16 h-16 text-orange-600 mx-auto mb-4" />
          <h3 className="text-2xl font-bold mb-4 dark:text-white">Norwegian Stavanger–Amsterdam forsinket?</h3>
          <p className="text-gray-700 dark:text-gray-300 mb-6">
            Sjekk om du har rett til 400 € erstatning. Gratis vurdering på 2 minutter.
          </p>
          <a href="https://claimwinger.com/no/forsinket-fly" target="_blank" rel="noopener noreferrer">
            <Button size="lg" className="bg-orange-600 hover:bg-orange-700 text-white text-lg px-8 py-6">
              Sjekk min Stavanger–Amsterdam-forsinkelse
              <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
          </a>
        </div>

        <div className="prose dark:prose-invert max-w-none">
          <h2>Hvorfor er Stavanger–Amsterdam ofte forsinket?</h2>
          <p>
            Basert på data fra <strong>Avinor</strong> og <strong>FlightRadar24</strong> (2022-2024):
          </p>
          <ul>
            <li><strong>Sommersesong (juni–august):</strong> 24% av avgangene forsinket mer enn 15 minutter</li>
            <li><strong>Høstferie (uke 40-42):</strong> 21% forsinkelser</li>
            <li><strong>Vintersesongen (desember–februar):</strong> 18% forsinkelser</li>
          </ul>

          <p><strong>Hovedårsaker til forsinkelser på Stavanger–Amsterdam:</strong></p>
          <ol>
            <li><strong>Amsterdam Schiphol overbelastning:</strong> En av Europas mest trafikkerte flyplasser</li>
            <li><strong>Tekniske problemer:</strong> Norwegian 737-MAX har hatt gjentatte tekniske feil</li>
            <li><strong>Forsinkelse fra tidligere flytur:</strong> Flyet kommer ofte forsinket fra andre ruter</li>
            <li><strong>Værforhold i Nederland:</strong> Tåke og vind påvirker landing på Schiphol</li>
          </ol>

          <p>
            Les mer: <Link href="/no/blog/norwegian-forsinkelse-hoysesong" className="text-blue-600 hover:underline">Norwegian forsinkelse i høysesong</Link>
          </p>

          <h2>Hvor mye erstatning får du?</h2>
          <p>
            Stavanger–Amsterdam (~900 km) faller i kategorien <strong>under 1500 km</strong>. Erstatningen avhenger av forsinkelsestiden ved ankomst:
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
                  <td className="border border-gray-300 dark:border-gray-600 px-4 py-3 font-bold text-green-600">250 €</td>
                </tr>
              </tbody>
            </table>
          </div>

          <p>
            <strong>Viktig for oljearbeidere:</strong> Selv om arbeidsgiver betalte billetten, <strong>tilhører erstatningen DEG</strong> — ikke arbeidsgiver. Du har rett til å kreve pengene selv. Les mer: <Link href="/no/blog/hvem-far-erstatningen-reisenden-eller-reisearrangoren" className="text-blue-600 hover:underline">Hvem får erstatningen — reisenden eller reisearrangøren?</Link>
          </p>

          <p>
            Les mer: <Link href="/no/blog/norwegian-hvor-mye-erstatning" className="text-blue-600 hover:underline">Hvor mye erstatning kan du kreve fra Norwegian?</Link>
          </p>

          <div className="bg-yellow-50 dark:bg-yellow-900/20 border-l-4 border-yellow-500 p-6 my-6">
            <h3 className="text-lg font-semibold flex items-center gap-2 mb-2">
              <AlertTriangle className="w-5 h-5" />
              Viktig: Norwegian prøver ofte å nekte erstatning for Stavanger–Amsterdam
            </h3>
            <p className="text-sm mb-0">
              Norwegian påberoper seg ofte <strong>"kapasitetsproblemer på Schiphol"</strong> eller <strong>"værforhold i Nederland"</strong>. Disse unnskyldningene er ofte <strong>falske</strong> — hvis andre flyselskap landet på tid, må Norwegian betale. ClaimWinger har tilgang til data som avslører falske unnskyldninger.
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
                  Får jeg erstatning selv om arbeidsgiver betalte billetten?
                </h3>
                <p className="text-gray-700 dark:text-gray-300 text-sm">
                  <strong>Ja!</strong> Erstatningen tilhører <strong>passasjeren</strong> — ikke den som betalte billetten. Du har rett til å kreve pengene selv, uavhengig av hvem som betalte.
                </p>
              </div>

              <div>
                <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-2 flex items-center gap-2">
                  <CheckCircle2 className="w-5 h-5 text-green-600" />
                  Hva hvis Norwegian sier "kapasitetsproblemer på Schiphol"?
                </h3>
                <p className="text-gray-700 dark:text-gray-300 text-sm">
                  <strong>Sjekk om andre flyselskap også var forsinket.</strong> Hvis bare Norwegian hadde problemer, må de betale. ClaimWinger har tilgang til data som avslører falske unnskyldninger.
                </p>
              </div>

              <div>
                <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-2 flex items-center gap-2">
                  <CheckCircle2 className="w-5 h-5 text-green-600" />
                  Får jeg erstatning for returflyet Amsterdam–Stavanger?
                </h3>
                <p className="text-gray-700 dark:text-gray-300 text-sm">
                  <strong>Ja, hvis flyet var forsinket mer enn 3 timer.</strong> Retur-flygninger fra Amsterdam til Stavanger er også dekket av EU261 fordi Norwegian er et EØS-registrert selskap.
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

          <div className="bg-gradient-to-br from-orange-600 to-amber-600 text-white rounded-2xl p-8 md:p-12 text-center my-12 shadow-lg">
            <h3 className="text-3xl font-bold mb-4">Stavanger–Amsterdam forsinket? Krev erstatning nå</h3>
            <p className="text-xl mb-8 text-orange-100">
              ClaimWinger har erfaring med Stavanger–Amsterdam-ruten og høy suksessrate mot Norwegians avslag. No Win, No Fee.
            </p>
            <a href="https://claimwinger.com/no/forsinket-fly" target="_blank" rel="noopener noreferrer">
              <Button size="lg" className="bg-white text-orange-700 hover:bg-gray-100 text-lg px-8 py-6">
                Beregn min erstatning
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
            </a>
            <p className="text-sm text-orange-200 mt-4">
              ✓ 98% suksessrate | ✓ 4-8 ukers utbetaling | ✓ Ingen risiko
            </p>
          </div>

          <h2>Oppsummering</h2>
          <p>
            Stavanger–Amsterdam er en viktig forretningsrute for oljearbeidere, men også blant de mest forsinkede. Hvis forsinkelsen var mer enn 3 timer ved landing, har du rett til minst 250 € kompensasjon per passasjer — selv om arbeidsgiver betalte billetten. Norwegian prøver ofte å nekte erstatning ved å påberope seg "kapasitetsproblemer på Schiphol" — ClaimWinger har juridisk ekspertise og tilgang til data som avslører disse unnskyldningene. Les også den omfattende guiden: <Link href="/no/blog/norwegian-forsinkelse-erstatning-guide" className="text-blue-600 hover:underline">Erstatning for forsinket Norwegian-fly — komplett guide</Link>.
          </p>
        </div>
      </article>
    </LayoutNo>
  );
}
