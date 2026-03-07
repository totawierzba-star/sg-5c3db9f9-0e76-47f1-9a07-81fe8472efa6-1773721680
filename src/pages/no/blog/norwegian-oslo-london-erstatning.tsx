import { LayoutNo } from "@/components/LayoutNo";
import { SEO } from "@/components/SEO";
import { Button } from "@/components/ui/button";
import { ArrowRight, Plane, Clock, AlertTriangle, CheckCircle2, TrendingUp } from "lucide-react";
import Link from "next/link";

export default function NorwegianOsloLondonErstatning() {
  return (
    <LayoutNo>
      <SEO 
        title="Norwegian Oslo–London erstatning – mest trafikkerte rute, flest problemer"
        description="Oslo–London er Norwegians mest trafikkerte rute og har høyest forsinkelsesrate. Få opptil 250 € erstatning for forsinkede eller kansellerte fly."
        url="https://problemlot.com/no/blog/norwegian-oslo-london-erstatning"
      />

      <article className="container mx-auto px-4 py-12 max-w-4xl">
        <header className="mb-8">
          <Link href="/no/blog" className="text-blue-600 hover:text-blue-700 dark:text-blue-400 text-sm font-medium mb-4 inline-block">
            ← Tilbake til blogg
          </Link>
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-4">
            Norwegian Oslo–London erstatning – mest trafikkerte rute, flest problemer
          </h1>
          <div className="flex items-center gap-4 text-sm text-gray-600 dark:text-gray-400">
            <span>7 min lesing</span>
            <span>•</span>
            <span>Oppdatert: Mars 2025</span>
          </div>
        </header>

        {/* Quick Answer */}
        <div className="bg-blue-50 dark:bg-blue-900/20 border-l-4 border-blue-600 p-6 mb-8 rounded-r-lg">
          <h2 className="text-xl font-bold text-blue-900 dark:text-blue-100 mb-3 flex items-center gap-2">
            <Plane className="w-6 h-6" />
            Raskt svar: Oslo–London kvalifiserer for 250 € erstatning
          </h2>
          <div className="space-y-3 text-gray-800 dark:text-gray-200">
            <p>
              Oslo–London er <strong>~1200 km</strong> (kortere enn 1500 km-grensen), så du har rett til <strong>250 €</strong> kompensasjon hvis Norwegian-flyet ditt er forsinket mer enn 3 timer ved ankomst eller kansellert mindre enn 14 dager før avgang.
            </p>
            <p className="text-sm border-t border-blue-200 dark:border-blue-800 pt-3 mt-3">
              💡 Denne ruten har den høyeste forsinkelsesraten blant Norwegians europeiske destinasjoner — sjekk om du har et gyldig krav.
            </p>
          </div>
        </div>

        {/* CTA 1 */}
        <div className="bg-gradient-to-r from-blue-50 to-indigo-50 dark:from-blue-900/20 dark:to-indigo-900/20 p-8 rounded-xl mb-12 text-center border border-gray-100 dark:border-gray-800">
          <Plane className="w-16 h-16 text-blue-600 mx-auto mb-4" />
          <h3 className="text-2xl font-bold mb-4 dark:text-white">Ble ditt Norwegian Oslo–London-fly forsinket?</h3>
          <p className="text-gray-700 dark:text-gray-300 mb-6">
            Sjekk om du har rett til 250 € erstatning. Gratis vurdering på 2 minutter.
          </p>
          <a href="https://claimwinger.com/no/forsinket-fly" target="_blank" rel="noopener noreferrer">
            <Button size="lg" className="bg-blue-600 hover:bg-blue-700 text-white text-lg px-8 py-6">
              Sjekk min Oslo–London-forsinkelse
              <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
          </a>
        </div>

        <div className="prose dark:prose-invert max-w-none">
          <h2>Hvorfor er Oslo–London så problematisk?</h2>
          <p>
            Oslo–London er Norwegians mest trafikkerte rute med over <strong>1,2 millioner passasjerer årlig</strong>. Det betyr også flere forsinkelser, kanselleringer og overbooked-situasjoner enn noen annen Norwegian-rute.
          </p>
          <p>
            Ifølge statistikk fra <strong>Luftfartstilsynet</strong> (Norges luftfartsregulator) hadde Oslo–London-ruten i 2024:
          </p>
          <ul>
            <li><strong>18% forsinkelsesrate</strong> (nesten hver femte avgang)</li>
            <li><strong>3,2% kanselleringsrate</strong></li>
            <li><strong>Gjennomsnittlig forsinkelse:</strong> 47 minutter</li>
          </ul>
          <p>
            Det er høyere enn gjennomsnittet for Norwegians europeiske nettverk (14% forsinkelsesrate).
          </p>

          <h2>Hvor mye erstatning får du?</h2>
          <p>
            Oslo–London er <strong>~1200 km</strong> i direkte avstand (Great Circle-distanse), noe som plasserer ruten i den laveste kompensasjonskategorien under <strong>EU-forordning 261/2004</strong> (som gjelder i Norge gjennom <strong>EØS-avtalen</strong>).
          </p>

          <div className="overflow-x-auto my-6">
            <table className="w-full border-collapse bg-white dark:bg-gray-800">
              <thead>
                <tr className="bg-blue-600 text-white">
                  <th className="border border-gray-300 dark:border-gray-600 px-4 py-3 text-left">Situasjon</th>
                  <th className="border border-gray-300 dark:border-gray-600 px-4 py-3 text-left">Vilkår</th>
                  <th className="border border-gray-300 dark:border-gray-600 px-4 py-3 text-left font-bold">Erstatning</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td className="border border-gray-300 dark:border-gray-600 px-4 py-3">Forsinkelse</td>
                  <td className="border border-gray-300 dark:border-gray-600 px-4 py-3">3+ timer ved ankomst</td>
                  <td className="border border-gray-300 dark:border-gray-600 px-4 py-3 font-bold text-green-600 text-xl">250 €</td>
                </tr>
                <tr className="bg-gray-50 dark:bg-gray-800/50">
                  <td className="border border-gray-300 dark:border-gray-600 px-4 py-3">Kansellering</td>
                  <td className="border border-gray-300 dark:border-gray-600 px-4 py-3">Mindre enn 14 dager før avgang</td>
                  <td className="border border-gray-300 dark:border-gray-600 px-4 py-3 font-bold text-green-600 text-xl">250 €</td>
                </tr>
                <tr>
                  <td className="border border-gray-300 dark:border-gray-600 px-4 py-3">Nektet ombordstigning</td>
                  <td className="border border-gray-300 dark:border-gray-600 px-4 py-3">Overbooking</td>
                  <td className="border border-gray-300 dark:border-gray-600 px-4 py-3 font-bold text-green-600 text-xl">250 €</td>
                </tr>
              </tbody>
            </table>
          </div>

          <p>
            Les mer om grunnlaget: <Link href="/no/blog/norwegian-forsinkelse-erstatning-guide" className="text-blue-600 hover:underline">Erstatning for forsinket Norwegian-fly – komplett guide 2025</Link>
          </p>

          <h2>Vanligste årsaker til Oslo–London-forsinkelser</h2>
          <p>
            Basert på data fra <strong>Forbrukerrådet</strong> (norsk forbrukervernorganisasjon) er de vanligste årsakene til Norwegian-forsinkelser på Oslo–London-ruten:
          </p>

          <div className="grid sm:grid-cols-2 gap-4 my-6">
            <div className="border-2 border-red-300 bg-red-50 dark:bg-red-900/20 p-5 rounded-lg">
              <h4 className="font-bold text-red-700 dark:text-red-400 mb-3 flex items-center gap-2">
                ❌ Norwegian MÅ betale erstatning
              </h4>
              <ul className="text-sm space-y-1">
                <li>✓ Teknisk feil på flyet</li>
                <li>✓ Syk besetning / mannskapsplanlegging</li>
                <li>✓ Operasjonelle forsinkelser (bakkehåndtering)</li>
                <li>✓ Overbooking</li>
                <li>✓ Norwegian-streik</li>
              </ul>
            </div>

            <div className="border-2 border-green-300 bg-green-50 dark:bg-green-900/20 p-5 rounded-lg">
              <h4 className="font-bold text-green-700 dark:text-green-400 mb-3 flex items-center gap-2">
                ✅ Ekstraordinært (lovlig å nekte)
              </h4>
              <ul className="text-sm space-y-1">
                <li>✓ Flygelederstreik</li>
                <li>✓ Ekstremvær (storm, kraftig snø)</li>
                <li>✓ Sikkerhetstrussel</li>
                <li>✓ Politisk uro</li>
              </ul>
            </div>
          </div>

          <div className="bg-yellow-50 dark:bg-yellow-900/20 border-l-4 border-yellow-500 p-6 my-6">
            <h3 className="text-lg font-semibold flex items-center gap-2 mb-2">
              <AlertTriangle className="w-5 h-5" />
              Gatwick vs. Heathrow – samme erstatningsbeløp
            </h3>
            <p className="text-sm mb-0">
              Norwegian flyr til både <strong>London Gatwick</strong> og (historisk) <strong>Heathrow</strong>. Uansett hvilken flyplass du landet på, gjelder samme kompensasjonsregler og beløp (250 €) siden distansen er nesten identisk.
            </p>
          </div>

          <h2>Hvordan krever du erstatning for Oslo–London-forsinkelsen?</h2>
          <p>Du har to hovedalternativer:</p>

          <h3>Alternativ 1: Direkte til Norwegian</h3>
          <ol>
            <li>Gå til <strong>Norwegian.com → Kundeservice</strong></li>
            <li>Fyll ut klageskjemaet</li>
            <li>Last opp dokumenter (boardingkort, bookingbekreftelse)</li>
            <li>Vent på svar (ofte 30-90 dager)</li>
            <li>Ved avslag: Klage til <strong>Forbrukerrådet</strong> (6-12 mnd)</li>
          </ol>

          <h3>Alternativ 2: Bruk ClaimWinger</h3>
          <ol>
            <li>Legg inn flynummer på <a href="https://claimwinger.com/no/forsinket-fly" target="_blank" rel="noopener" className="text-blue-600 hover:underline">claimwinger.com/no/forsinket-fly</a></li>
            <li>ClaimWinger sjekker automatisk om kravet er gyldig</li>
            <li>De tar all kommunikasjon med Norwegian</li>
            <li>Ved avslag: Advokater tar saken til retten</li>
            <li>Du betaler ingenting hvis kravet tapes</li>
            <li>Gjennomsnittlig tid: 4-8 uker</li>
          </ol>

          <p>
            Les mer: <Link href="/no/blog/hvor-lang-tid-flyerstatning-utbetalt" className="text-blue-600 hover:underline">Hvor lang tid tar det å få flyerstatning utbetalt?</Link>
          </p>

          {/* FAQ */}
          <div className="bg-gray-50 dark:bg-gray-800 p-8 rounded-xl my-12">
            <h2 className="text-2xl font-bold mb-6 text-gray-900 dark:text-white">Ofte stilte spørsmål</h2>
            
            <div className="space-y-6">
              <div>
                <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-2 flex items-center gap-2">
                  <CheckCircle2 className="w-5 h-5 text-green-600" />
                  Får jeg mer hvis flyet var ekstra forsinket (5+ timer)?
                </h3>
                <p className="text-gray-700 dark:text-gray-300 text-sm">
                  Nei. EU261-kompensasjonen er <strong>fast</strong> basert på distanse. Enten flyet er 3 timer eller 8 timer forsinket, får du 250 € for Oslo–London.
                </p>
              </div>

              <div>
                <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-2 flex items-center gap-2">
                  <CheckCircle2 className="w-5 h-5 text-green-600" />
                  Hva hvis Norwegian booket meg om via København?
                </h3>
                <p className="text-gray-700 dark:text-gray-300 text-sm">
                  Hvis du ble booket om til en lengre rute (for eksempel Oslo–København–London) på grunn av kansellering, får du fortsatt kun 250 € for original Oslo–London-rute. Total distanse endrer ikke kompensasjonen.
                </p>
              </div>

              <div>
                <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-2 flex items-center gap-2">
                  <CheckCircle2 className="w-5 h-5 text-green-600" />
                  Kan jeg kreve erstatning hvis jeg kjøpte billetten via booking.com?
                </h3>
                <p className="text-gray-700 dark:text-gray-300 text-sm">
                  Ja! Det spiller ingen rolle hvor du kjøpte billetten. Kravet skal rettes mot <strong>flyselskapet</strong> (Norwegian), ikke bookingsiden.
                </p>
              </div>

              <div>
                <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-2 flex items-center gap-2">
                  <CheckCircle2 className="w-5 h-5 text-green-600" />
                  Hva hvis jeg hadde LowFare-billett?
                </h3>
                <p className="text-gray-700 dark:text-gray-300 text-sm">
                  EU261 gjelder for <strong>alle billetttyper</strong>. Selv om du betalte 299 NOK for en LowFare-billett, har du rett til full 250 € kompensasjon.
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
            <TrendingUp className="w-20 h-20 mx-auto mb-4 opacity-90" />
            <h3 className="text-3xl font-bold mb-4">Oslo–London forsinket? Få dine 250 €</h3>
            <p className="text-xl mb-8 text-blue-100">
              Mest trafikkerte rute = flest forsinkelser. Sjekk om du har et gyldig krav nå.
            </p>
            <a href="https://claimwinger.com/no/forsinket-fly" target="_blank" rel="noopener noreferrer">
              <Button size="lg" className="bg-white text-blue-700 hover:bg-gray-100 text-lg px-8 py-6">
                Sjekk min erstatning
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
            </a>
            <p className="text-sm text-blue-200 mt-4">
              ✓ No Win, No Fee | ✓ 98% suksessrate | ✓ 4-8 ukers utbetaling
            </p>
          </div>

          <h2>Oppsummering</h2>
          <p>
            Oslo–London er Norwegians mest trafikkerte og mest problemfylte rute. Hvis flyet ditt var forsinket mer enn 3 timer ved ankomst eller kansellert mindre enn 14 dager før avgang, har du rett til <strong>250 €</strong> kompensasjon. Norwegian avviser ofte gyldige krav — derfor anbefaler vi å bruke ClaimWinger som har høy suksessrate mot Norwegian.
          </p>
        </div>
      </article>
    </LayoutNo>
  );
}