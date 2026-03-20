import { LayoutNo } from "@/components/LayoutNo";
import { SEO } from "@/components/SEO";
import { Button } from "@/components/ui/button";
import { ArrowRight, Clock, AlertTriangle, CheckCircle2, Shield } from "lucide-react";
import Link from "next/link";

export default function NorwegianForsinketMerEnn3Timer() {
  return (
    <LayoutNo>
      <SEO 
        title="Norwegian forsinket mer enn 3 timer – dine rettigheter steg for steg"
        description="Komplett guide til hva du skal gjøre når Norwegian-flyet er mer enn 3 timer forsinket. Få opptil 600 € i erstatning + omsorg på flyplassen."
        url="https://problemlot.com/no/blog/norwegian-forsinket-mer-enn-3-timer"
      />

      <article className="container mx-auto px-4 py-12 max-w-4xl">
        <header className="mb-8">
          <Link href="/no/blog" className="text-blue-600 hover:text-blue-700 dark:text-blue-400 text-sm font-medium mb-4 inline-block">
            ← Tilbake til blogg
          </Link>
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-4">
            Norwegian forsinket mer enn 3 timer – dine rettigheter steg for steg
          </h1>
          <div className="flex items-center gap-4 text-sm text-gray-600 dark:text-gray-400">
            <span>9 min lesing</span>
            <span>•</span>
            <span>Oppdatert: Mars 2025</span>
          </div>
        </header>

        {/* Quick Answer */}
        <div className="bg-red-50 dark:bg-red-900/20 border-l-4 border-red-600 p-6 mb-8 rounded-r-lg">
          <h2 className="text-xl font-bold text-red-900 dark:text-red-100 mb-3 flex items-center gap-2">
            <Clock className="w-6 h-6" />
            Raskt svar: Du har rett til opptil 600 € + omsorg
          </h2>
          <div className="space-y-3 text-gray-800 dark:text-gray-200">
            <p>
              Når ditt Norwegian-fly er forsinket <strong>mer enn 3 timer ved ankomst</strong>, har du automatisk rett til:
            </p>
            <ul className="ml-4 space-y-1">
              <li>💰 <strong>250-600 € kontanterstatning</strong> (basert på flydistanse)</li>
              <li>🍽️ <strong>Gratis mat og drikke</strong> på flyplassen</li>
              <li>🏨 <strong>Hotell og transport</strong> hvis du må overnatte</li>
              <li>📞 <strong>2 telefonsamtaler eller e-poster</strong></li>
            </ul>
            <p className="text-sm border-t border-red-200 dark:border-red-800 pt-3 mt-3">
              Dette er beskyttet av <strong>EU-forordning 261/2004</strong> som gjelder i Norge gjennom <strong>EØS-avtalen</strong>.
            </p>
          </div>
        </div>

        {/* CTA 1 */}
        <div className="bg-gradient-to-r from-red-50 to-orange-50 dark:from-red-900/20 dark:to-orange-900/20 p-8 rounded-xl mb-12 text-center border border-gray-100 dark:border-gray-800">
          <Shield className="w-16 h-16 text-red-600 mx-auto mb-4" />
          <h3 className="text-2xl font-bold mb-4 dark:text-white">Er ditt Norwegian-fly forsinket?</h3>
          <p className="text-gray-700 dark:text-gray-300 mb-6">
            Sjekk om du har rett til opptil 600 € erstatning. Gratis vurdering, ingen risiko.
          </p>
          <a href="https://claimwinger.com/no/forsinket-fly" target="_blank" rel="noopener noreferrer">
            <Button size="lg" className="bg-red-600 hover:bg-red-700 text-white text-lg px-8 py-6">
              Sjekk min forsinkelse
              <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
          </a>
        </div>

        <div className="prose dark:prose-invert max-w-none">
          <h2>Hva er "3-timersregelen" under EU261?</h2>
          <p>
            EU-forordning 261/2004 (som gjelder i Norge gjennom EØS-avtalen) setter en klar grense: Hvis flyet ditt lander <strong>3 timer eller mer forsinket</strong> på destinasjonen, har du rett til økonomisk kompensasjon — uansett hva Norwegian sier var årsaken (med noen få unntak for ekstreme værhendelser).
          </p>
          <p>
            <strong>Viktig:</strong> Forsinkelsen måles ved <strong>landing</strong> (når flydørene åpnes), ikke når flyet lettet. Hvis Norwegian startet 2 timer forsinket men hentet inn tid underveis og landet kun 2t 45min sent, får du <strong>ingen erstatning</strong>.
          </p>
          <p>
            Les mer om grunnlaget: <Link href="/no/blog/norwegian-forsinkelse-erstatning-guide" className="text-blue-600 hover:underline">Erstatning for forsinket Norwegian-fly — komplett guide 2025</Link>
          </p>

          <h2>Steg-for-steg: Hva skal du gjøre på flyplassen?</h2>

          <h3>Steg 1: Dokumenter forsinkelsen (mens du er på flyplassen)</h3>
          <ul>
            <li><strong>Ta bilde</strong> av informasjonstavlene som viser "Delayed"</li>
            <li><strong>Ta skjermbilde</strong> av Norwegian-appen som viser forsinkelsen</li>
            <li><strong>Behold boardingkortet</strong> (fysisk eller digitalt)</li>
            <li><strong>Lagre alle SMS/e-poster</strong> fra Norwegian om forsinkelsen</li>
          </ul>

          <h3>Steg 2: Krev "right to care" umiddelbart</h3>
          <p>
            Hvis forsinkelsen er <strong>mer enn 2 timer</strong> (korte ruter) eller <strong>3+ timer</strong> (langdistanse), må Norwegian tilby deg:
          </p>
          <ul>
            <li>Gratis mat og drikke (rimelige mengder)</li>
            <li>2 telefonsamtaler, e-poster eller fax</li>
            <li>Hvis overnatting er nødvendig: Hotellrom + transport til/fra flyplassen</li>
          </ul>
          <p>
            Gå til Norwegian-skranken eller bakkepersonalet og <strong>krev dette eksplisitt</strong>. Hvis de ikke tilbyr noe, kjøp det selv (hold kvitteringer!) og krev refusjon senere.
          </p>

          <h3>Steg 3: Spør om årsaken</h3>
          <p>
            Be Norwegian-personalet om en <strong>skriftlig forklaring</strong> på hvorfor flyet er forsinket. Dette er viktig fordi:
          </p>
          <ul>
            <li>Teknisk feil = Norwegian må betale</li>
            <li>Syk besetning = Norwegian må betale</li>
            <li>Flyselskapets streik = Norwegian må betale</li>
            <li>Flygelederstreik = Ekstraordinært (lovlig å nekte)</li>
            <li>Ekstremvær = Ekstraordinært (lovlig å nekte)</li>
          </ul>

          <h3>Steg 4: Ikke aksepter voucher på flyplassen</h3>
          <p>
            Norwegian-personalet vil ofte tilby deg et gavekort (voucher) som "erstatning". <strong>Ikke aksepter dette!</strong> Du har lovfestet rett til kontant utbetaling under EU261. Takk høflig nei og si at du vil kreve pengene formelt senere.
          </p>
          <p>
            Les mer: <Link href="/no/blog/norwegian-voucher-i-stedet-for-penger" className="text-blue-600 hover:underline">Norwegian tilbyr voucher i stedet for penger — må du akseptere det?</Link>
          </p>

          <h2>Hvor mye får du for 3+ timers forsinkelse?</h2>

          <div className="overflow-x-auto my-6">
            <table className="w-full border-collapse bg-white dark:bg-gray-800">
              <thead>
                <tr className="bg-red-600 text-white">
                  <th className="border border-gray-300 dark:border-gray-600 px-4 py-3 text-left">Distanse</th>
                  <th className="border border-gray-300 dark:border-gray-600 px-4 py-3 text-left">Eksempel Norwegian-rute</th>
                  <th className="border border-gray-300 dark:border-gray-600 px-4 py-3 text-left font-bold">Erstatning</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td className="border border-gray-300 dark:border-gray-600 px-4 py-3">Opp til 1500 km</td>
                  <td className="border border-gray-300 dark:border-gray-600 px-4 py-3">Oslo–London (1200 km)</td>
                  <td className="border border-gray-300 dark:border-gray-600 px-4 py-3 font-bold text-green-600 text-xl">250 €</td>
                </tr>
                <tr className="bg-gray-50 dark:bg-gray-800/50">
                  <td className="border border-gray-300 dark:border-gray-600 px-4 py-3">1500–3500 km</td>
                  <td className="border border-gray-300 dark:border-gray-600 px-4 py-3">Oslo–Barcelona (2300 km)</td>
                  <td className="border border-gray-300 dark:border-gray-600 px-4 py-3 font-bold text-green-600 text-xl">400 €</td>
                </tr>
                <tr>
                  <td className="border border-gray-300 dark:border-gray-600 px-4 py-3">Over 3500 km</td>
                  <td className="border border-gray-300 dark:border-gray-600 px-4 py-3">Oslo–New York (5900 km)</td>
                  <td className="border border-gray-300 dark:border-gray-600 px-4 py-3 font-bold text-green-600 text-xl">600 €</td>
                </tr>
              </tbody>
            </table>
          </div>

          <p>
            Les mer: <Link href="/no/blog/norwegian-hvor-mye-erstatning" className="text-blue-600 hover:underline">Hvor mye erstatning kan du kreve fra Norwegian?</Link>
          </p>

          <h2>Hvordan krever du erstatningen etter flyvningen?</h2>
          <p>Du har to hovedalternativer:</p>

          <h3>Alternativ 1: Direkte til Norwegian (gratis, men tidkrevende)</h3>
          <ol>
            <li>Gå til <strong>Norwegian.com → Kundeservice</strong></li>
            <li>Fyll ut klageskjemaet</li>
            <li>Last opp dokumenter (boardingkort, bookingbekreftelse)</li>
            <li>Vent på svar (ofte 30-90 dager)</li>
            <li>Ved avslag: Klage til Forbrukerrådet (6-12 mnd)</li>
          </ol>

          <h3>Alternativ 2: Bruk ClaimWinger (25-30% provisjon, men 98% suksessrate)</h3>
          <ol>
            <li>Legg inn flynummer på <a href="https://claimwinger.com/no/forsinket-fly" target="_blank" rel="noopener" className="text-blue-600 hover:underline">claimwinger.com/no/forsinket-fly</a></li>
            <li>ClaimWinger sjekker automatisk om kravet er gyldig</li>
            <li>De tar all kommunikasjon med Norwegian</li>
            <li>Ved avslag: Advokater tar saken til retten</li>
            <li>Du betaler ingenting hvis kravet tapes</li>
            <li>Gjennomsnittlig tid: 4-8 uker</li>
          </ol>

          <div className="bg-yellow-50 dark:bg-yellow-900/20 border-l-4 border-yellow-500 p-6 my-6">
            <h3 className="text-lg font-semibold flex items-center gap-2 mb-2">
              <AlertTriangle className="w-5 h-5" />
              Hvorfor Norwegian ofte nekter private krav
            </h3>
            <p className="text-sm mb-0">
              Norwegian avviser systematisk private krav ved å påberope seg "ekstraordinære omstendigheter" — selv når den egentlige årsaken var teknisk feil. ClaimWinger har tilgang til Flightradar-data og værlogger som beviser at Norwegian lyver. Statistikk fra Transportklagenemnda viser at Norwegian tapte over 60% av sakene som gikk til nemnda i 2024.
            </p>
          </div>

          <h2>Hva hvis forsinkelsen var mindre enn 3 timer?</h2>
          <p>
            Hvis flyet landet <strong>2 timer og 59 minutter forsinket</strong>, har du dessverre <strong>ikke rett til EU261-kompensasjon</strong>. Grensen er streng på 3 timer.
          </p>
          <p>
            Men du har fortsatt rett til:
          </p>
          <ul>
            <li>Mat og drikke hvis forsinkelsen var 2+ timer</li>
            <li>Refusjon av utlegg du hadde (hotell, taxi) hvis Norwegian ikke tilbød dette</li>
          </ul>

          {/* FAQ */}
          <div className="bg-gray-50 dark:bg-gray-800 p-8 rounded-xl my-12">
            <h2 className="text-2xl font-bold mb-6 text-gray-900 dark:text-white">Ofte stilte spørsmål</h2>
            
            <div className="space-y-6">
              <div>
                <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-2 flex items-center gap-2">
                  <CheckCircle2 className="w-5 h-5 text-green-600" />
                  Hvordan beviser jeg at flyet var 3+ timer forsinket?
                </h3>
                <p className="text-gray-700 dark:text-gray-300 text-sm">
                  ClaimWinger har tilgang til globale flydatabaser (FlightRadar24, FlightStats) som logger eksakt ankomsttid. Du trenger kun PNR-koden din — de finner resten.
                </p>
              </div>

              <div>
                <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-2 flex items-center gap-2">
                  <CheckCircle2 className="w-5 h-5 text-green-600" />
                  Hva hvis Norwegian sa det var "dårlig vær"?
                </h3>
                <p className="text-gray-700 dark:text-gray-300 text-sm">
                  Norwegian bruker ofte denne unnskyldningen ulovlig. Hvis andre flyselskap landet på samme flyplass til samme tid, var det IKKE ekstremvær. ClaimWinger sjekker dette automatisk.
                </p>
              </div>

              <div>
                <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-2 flex items-center gap-2">
                  <CheckCircle2 className="w-5 h-5 text-green-600" />
                  Får jeg erstatning hvis jeg hadde LowFare-billett?
                </h3>
                <p className="text-gray-700 dark:text-gray-300 text-sm">
                  Ja! EU261 gjelder for <strong>alle billetttyper</strong> — det spiller ingen rolle om du betalte 199 NOK eller 5000 NOK. Erstatningen er fast basert på distanse.
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
          <div className="bg-gradient-to-br from-red-600 to-orange-600 text-white rounded-2xl p-8 md:p-12 text-center my-12 shadow-lg">
            <h3 className="text-3xl font-bold mb-4">Norwegian mer enn 3 timer forsinket? Få pengene dine</h3>
            <p className="text-xl mb-8 text-red-100">
              Sjekk om du har rett til opptil 600 €. Gratis vurdering, ingen risiko.
            </p>
            <a href="https://claimwinger.com/no/forsinket-fly" target="_blank" rel="noopener noreferrer">
              <Button size="lg" className="bg-white text-red-700 hover:bg-gray-100 text-lg px-8 py-6">
                Beregn min erstatning
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
            </a>
            <p className="text-sm text-red-200 mt-4">
              ✓ No Win, No Fee | ✓ 98% suksessrate | ✓ 4-8 ukers utbetaling
            </p>
          </div>

          <h2>Oppsummering</h2>
          <p>
            Hvis ditt Norwegian-fly er forsinket mer enn 3 timer ved ankomst, har du rett til økonomisk kompensasjon (250-600 €) pluss omsorg på flyplassen (mat, hotell). Norwegian nekter ofte gyldige krav — derfor anbefaler vi å bruke ClaimWinger som har juridisk ekspertise og høy suksessrate.
          </p>
        </div>
      </article>
    </LayoutNo>
  );
}
