import { LayoutNo } from "@/components/LayoutNo";
import { SEO } from "@/components/SEO";
import { Button } from "@/components/ui/button";
import { ArrowRight, XCircle, CheckCircle2, AlertTriangle, Calendar } from "lucide-react";
import Link from "next/link";

export default function NorwegianCancelledFlightCompensation() {
  return (
    <LayoutNo>
      <SEO 
        title="Norwegian kansellerte flyet – få opptil 600 € i erstatning [2025]"
        description="Komplett guide til erstatning når Norwegian kansellerer flyet ditt. Lær om 250-600 € kompensasjon, dine rettigheter, og hvordan ClaimWinger kan hjelpe deg."
        url="https://problemlot.com/no/blog/norwegian-kansellert-fly-erstatning"
      />

      <article className="container mx-auto px-4 py-12 max-w-4xl">
        <header className="mb-8">
          <Link href="/no/blog" className="text-blue-600 hover:text-blue-700 dark:text-blue-400 text-sm font-medium mb-4 inline-block">
            ← Tilbake til blogg
          </Link>
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-4">
            Norwegian kansellerte flyet – hvordan får du opptil 600 € i erstatning?
          </h1>
          <div className="flex items-center gap-4 text-sm text-gray-600 dark:text-gray-400">
            <span>10 min lesing</span>
            <span>•</span>
            <span>Oppdatert: Mars 2025</span>
          </div>
        </header>

        {/* Quick Answer */}
        <div className="bg-red-50 dark:bg-red-900/20 border-l-4 border-red-600 p-6 mb-8 rounded-r-lg">
          <h2 className="text-xl font-bold text-red-900 dark:text-red-100 mb-3 flex items-center gap-2">
            <XCircle className="w-6 h-6" />
            Raskt svar: Du har rett til både refusjon OG erstatning
          </h2>
          <div className="space-y-3 text-gray-800 dark:text-gray-200">
            <p>
              Hvis Norwegian kansellerer flyet ditt, har du krav på:
            </p>
            <ul className="ml-4 space-y-1">
              <li><strong>1. Full refusjon av billettprisen</strong> (hvis du ikke vil fly)</li>
              <li><strong>2. Alternativ flyvning</strong> til destinasjonen (hvis du vil komme frem)</li>
              <li><strong>3. Økonomisk kompensasjon 250–600 €</strong> (hvis kanselleringen skjedde mindre enn 14 dager før avgang)</li>
            </ul>
            <p className="text-sm border-t border-red-200 dark:border-red-800 pt-3 mt-3">
              💡 <strong>Viktig:</strong> Disse rettighetene er kumulative – du får både penger tilbake for billetten <em>og</em> erstatning under EU261.
            </p>
          </div>
        </div>

        {/* CTA 1 */}
        <div className="bg-gradient-to-r from-red-50 to-orange-50 dark:from-red-900/20 dark:to-orange-900/20 p-8 rounded-xl mb-12 text-center border border-gray-100 dark:border-gray-800">
          <XCircle className="w-16 h-16 text-red-600 mx-auto mb-4" />
          <h3 className="text-2xl font-bold mb-4 dark:text-white">Ble ditt Norwegian-fly kansellert?</h3>
          <p className="text-gray-700 dark:text-gray-300 mb-6">
            Sjekk om du har rett til opptil 600 € erstatning + full refusjon. Gratis vurdering på 2 minutter.
          </p>
          <a href="https://claimwinger.com/no/kansellert-fly" target="_blank" rel="noopener noreferrer">
            <Button size="lg" className="bg-red-600 hover:bg-red-700 text-white text-lg px-8 py-6">
              Sjekk min kansellering
              <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
          </a>
        </div>

        <div className="prose dark:prose-invert max-w-none">
          <h2>Hvorfor gjelder EU261 i Norge ved kansellering?</h2>
          <p>
            Norge er medlem av <strong>Det europeiske økonomiske samarbeidsområdet (EØS)</strong>. Gjennom <strong>EØS-avtalen</strong> gjelder <strong>EU-forordning 261/2004</strong> fullt ut i Norge, akkurat som i Sverige, Danmark og resten av Europa.
          </p>
          <p>
            Dette betyr at når Norwegian kansellerer flyet ditt, har du de samme rettighetene som passasjerer i EU-land. Regelverket håndheves i Norge av <strong>Luftfartstilsynet</strong>, og klager behandles av <strong>Transportklagenemnda</strong> (gjennom Forbrukerrådet).
          </p>
          <p>
            Les mer om grunnlaget: <Link href="/no/blog/norwegian-forsinkelse-erstatning-guide" className="text-blue-600 hover:underline">Erstatning for forsinket Norwegian-fly – komplett guide 2025</Link>
          </p>

          <h2>Hvor mye kompensasjon får du?</h2>
          <p>
            Erstatningsbeløpet avhenger av to faktorer:
          </p>
          <ol>
            <li><strong>Flydistansen</strong> (ikke prisen på billetten)</li>
            <li><strong>Hvor lang tid før avgang Norwegian varslet deg</strong></li>
          </ol>

          <div className="overflow-x-auto my-6">
            <table className="w-full border-collapse bg-white dark:bg-gray-800">
              <thead>
                <tr className="bg-red-600 text-white">
                  <th className="border border-gray-300 dark:border-gray-600 px-4 py-3 text-left">Distanse</th>
                  <th className="border border-gray-300 dark:border-gray-600 px-4 py-3 text-left">Kansellert mindre enn 14 dager før</th>
                  <th className="border border-gray-300 dark:border-gray-600 px-4 py-3 text-left font-bold">Erstatning</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td className="border border-gray-300 dark:border-gray-600 px-4 py-3">Opp til 1500 km</td>
                  <td className="border border-gray-300 dark:border-gray-600 px-4 py-3">Ja</td>
                  <td className="border border-gray-300 dark:border-gray-600 px-4 py-3 font-bold text-green-600">250 €</td>
                </tr>
                <tr className="bg-gray-50 dark:bg-gray-800/50">
                  <td className="border border-gray-300 dark:border-gray-600 px-4 py-3">1500–3500 km</td>
                  <td className="border border-gray-300 dark:border-gray-600 px-4 py-3">Ja</td>
                  <td className="border border-gray-300 dark:border-gray-600 px-4 py-3 font-bold text-green-600">400 €</td>
                </tr>
                <tr>
                  <td className="border border-gray-300 dark:border-gray-600 px-4 py-3">Over 3500 km</td>
                  <td className="border border-gray-300 dark:border-gray-600 px-4 py-3">Ja</td>
                  <td className="border border-gray-300 dark:border-gray-600 px-4 py-3 font-bold text-green-600">600 €</td>
                </tr>
              </tbody>
            </table>
          </div>

          <div className="bg-yellow-50 dark:bg-yellow-900/20 border-l-4 border-yellow-500 p-6 my-6">
            <h3 className="text-lg font-semibold flex items-center gap-2 mb-2">
              <Calendar className="w-5 h-5" />
              Kritisk 14-dagersregel
            </h3>
            <p className="text-sm mb-0">
              Hvis Norwegian varslet deg om kanselleringen <strong>mer enn 14 dager før avgang</strong>, får du <strong>kun refusjon av billetten</strong> – ikke EU261-kompensasjon. Hvis de varslet deg <strong>7–14 dager før</strong> og tilbød alternativ rute som kom frem mindre enn 2 timer senere, kan erstatningen reduseres eller falle bort. Hvis de varslet deg <strong>mindre enn 7 dager før</strong>, har du nesten alltid full rett til maksimal erstatning.
            </p>
          </div>

          <h2>Hva er forskjellen på refusjon og kompensasjon?</h2>
          <p>Mange blander sammen disse to – men de er <strong>helt separate rettigheter:</strong></p>
          <ul>
            <li><strong>Refusjon:</strong> Du får pengene for billetten tilbake (det du betalte Norwegian)</li>
            <li><strong>Kompensasjon (EU261):</strong> Du får opptil 600 € i tillegg, uavhengig av billettpris</li>
          </ul>
          <p><strong>Eksempel:</strong></p>
          <p>
            Du kjøpte en LowFare-billett Oslo–New York for 1200 NOK. Norwegian kansellerer flyet 5 dager før avgang. Du har rett til:
          </p>
          <ul>
            <li>1200 NOK refusjon (billettpris)</li>
            <li>600 € kompensasjon (~7000 NOK) under EU261</li>
            <li><strong>Totalt: ~8200 NOK</strong></li>
          </ul>
          <p>
            Les mer: <Link href="/no/blog/norwegian-erstatning-vs-refusjon" className="text-blue-600 hover:underline">Erstatning vs. refusjon av billett hos Norwegian</Link>
          </p>

          <h2>Når kan Norwegian lovlig nekte erstatning?</h2>
          <p>
            Norwegian slipper å betale EU261-kompensasjon hvis kanselleringen skyldtes <strong>"ekstraordinære omstendigheter"</strong> utenfor deres kontroll, og de tok alle rimelige forholdsregler.
          </p>

          <div className="grid sm:grid-cols-2 gap-4 my-6">
            <div className="border-2 border-red-300 bg-red-50 dark:bg-red-900/20 p-5 rounded-lg">
              <h4 className="font-bold text-red-700 dark:text-red-400 mb-3">❌ IKKE ekstraordinært</h4>
              <ul className="text-sm space-y-1">
                <li>✓ Teknisk feil</li>
                <li>✓ Manglende reservedeler</li>
                <li>✓ Syk besetning (Norwegian må ha reserver)</li>
                <li>✓ Operasjonelle årsaker (overbooking)</li>
                <li>✓ Norwegian-streik</li>
              </ul>
            </div>

            <div className="border-2 border-green-300 bg-green-50 dark:bg-green-900/20 p-5 rounded-lg">
              <h4 className="font-bold text-green-700 dark:text-green-400 mb-3">✅ Ekstraordinært</h4>
              <ul className="text-sm space-y-1">
                <li>✓ Flygelederstreik</li>
                <li>✓ Ekstremvær (tyfon, snøstorm)</li>
                <li>✓ Sikkerhetstrussel</li>
                <li>✓ Politisk uro</li>
              </ul>
            </div>
          </div>

          <h2>Hvordan krever du erstatning fra Norwegian?</h2>
          <p>Du har to hovedalternativer:</p>

          <h3>Alternativ 1: Direkte til Norwegian</h3>
          <ol>
            <li>Gå til <strong>Norwegian.com → Kundeservice</strong></li>
            <li>Fyll ut klageskjemaet med flynummer, PNR, dato</li>
            <li>Last opp dokumenter (bookingbekreftelse, kansellerings-e-post)</li>
            <li>Vent på svar (ofte 30-60 dager)</li>
            <li>Hvis avslag: Send klage til <strong>Forbrukerrådet</strong> (gratis, men 6-12 mnd behandlingstid)</li>
          </ol>

          <h3>Alternativ 2: Bruk ClaimWinger</h3>
          <ol>
            <li>Legg inn detaljer på <a href="https://claimwinger.com/no/kansellert-fly" target="_blank" rel="noopener" className="text-blue-600 hover:underline">claimwinger.com/no/kansellert-fly</a></li>
            <li>ClaimWinger sjekker automatisk om kravet er gyldig</li>
            <li>De tar all kommunikasjon med Norwegian</li>
            <li>Ved avslag: ClaimWingers advokater tar saken til retten</li>
            <li>Du betaler <strong>ingenting</strong> hvis kravet tapes ("No Win, No Fee")</li>
            <li>Gjennomsnittlig tid: <strong>4-8 uker</strong></li>
          </ol>

          <h2>Hva med voucher i stedet for refusjon?</h2>
          <p>
            Norwegian tilbyr ofte voucher (gavekort) i stedet for kontant refusjon. Du har <strong>full rett til å nekte</strong> og kreve pengene tilbake på konto. EU261 krever kontantutbetaling.
          </p>
          <p>
            Les mer: <Link href="/no/blog/norwegian-voucher-i-stedet-for-penger" className="text-blue-600 hover:underline">Norwegian tilbyr voucher – må du akseptere det?</Link>
          </p>

          {/* FAQ */}
          <div className="bg-gray-50 dark:bg-gray-800 p-8 rounded-xl my-12">
            <h2 className="text-2xl font-bold mb-6 text-gray-900 dark:text-white">Ofte stilte spørsmål</h2>
            
            <div className="space-y-6">
              <div>
                <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-2 flex items-center gap-2">
                  <CheckCircle2 className="w-5 h-5 text-green-600" />
                  Får jeg erstatning hvis Norwegian booket meg om til et annet fly?
                </h3>
                <p className="text-gray-700 dark:text-gray-300 text-sm">
                  <strong>Avhenger av timingen.</strong> Hvis det alternative flyet kom frem mindre enn 2 timer senere enn opprinnelig ankomst, kan erstatningen falle bort. Hvis det kom mer enn 2 timer senere, har du rett til kompensasjon.
                </p>
              </div>

              <div>
                <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-2 flex items-center gap-2">
                  <CheckCircle2 className="w-5 h-5 text-green-600" />
                  Hva hvis jeg ble varslet 13 dager før avgang?
                </h3>
                <p className="text-gray-700 dark:text-gray-300 text-sm">
                  Da har du fortsatt rett til kompensasjon (innenfor 14-dagersfristen). Norwegian må bevise at de varslet deg mer enn 14 dager før for å slippe å betale.
                </p>
              </div>

              <div>
                <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-2 flex items-center gap-2">
                  <CheckCircle2 className="w-5 h-5 text-green-600" />
                  Kan jeg kreve både refusjon og kompensasjon?
                </h3>
                <p className="text-gray-700 dark:text-gray-300 text-sm">
                  <strong>Ja!</strong> Disse er separate rettigheter. Refusjon gir deg billettprisen tilbake, mens EU261-kompensasjon er en straff til flyselskapet for å ha kansellert.
                </p>
              </div>

              <div>
                <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-2 flex items-center gap-2">
                  <CheckCircle2 className="w-5 h-5 text-green-600" />
                  Hva hvis Norwegian kansellerte på grunn av streik?
                </h3>
                <p className="text-gray-700 dark:text-gray-300 text-sm">
                  <strong>Norwegian-streik:</strong> Flyselskapet MÅ betale. <strong>Flygelederstreik:</strong> Ekstraordinært – lovlig å nekte. Les mer: <Link href="/no/blog/norwegian-streik-forsinkelse-erstatning" className="text-blue-600 hover:underline">Norwegian streik og flyforsinkelse</Link>
                </p>
              </div>

              <div>
                <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-2 flex items-center gap-2">
                  <CheckCircle2 className="w-5 h-5 text-green-600" />
                  Hvor lang tid har jeg på meg til å kreve?
                </h3>
                <p className="text-gray-700 dark:text-gray-300 text-sm">
                  I Norge er foreldelsesfristen <strong>3 år</strong> fra datoen flyflyet ble kansellert. Les mer: <Link href="/no/blog/krave-erstatning-fly-3-ar-siden" className="text-blue-600 hover:underline">Kan jeg kreve erstatning for et fly for 3 år siden?</Link>
                </p>
              </div>
            </div>
          </div>

          {/* CTA 2 */}
          <div className="bg-gradient-to-br from-red-600 to-orange-600 text-white rounded-2xl p-8 md:p-12 text-center my-12 shadow-lg">
            <h3 className="text-3xl font-bold mb-4">Kansellert Norwegian-fly? Få pengene dine nå</h3>
            <p className="text-xl mb-8 text-red-100">
              Sjekk om du har rett til opptil 600 € + full refusjon. Gratis vurdering, ingen risiko.
            </p>
            <a href="https://claimwinger.com/no/kansellert-fly" target="_blank" rel="noopener noreferrer">
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
            Når Norwegian kansellerer flyet ditt, har du rett til både refusjon av billetten <em>og</em> opptil 600 € i kompensasjon (hvis kanselleringen skjedde mindre enn 14 dager før avgang). Norwegian prøver ofte å nekte gyldige krav ved å påberope seg "ekstraordinære omstendigheter" – derfor anbefaler vi å bruke ClaimWinger, som har juridisk ekspertise og høy suksessrate.
          </p>
          <p>
            Lykke til med kravet ditt!
          </p>
        </div>
      </article>
    </LayoutNo>
  );
}
