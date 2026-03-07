import { LayoutNo } from "@/components/LayoutNo";
import { SEO } from "@/components/SEO";
import { Button } from "@/components/ui/button";
import { ArrowRight, Euro, Plane, CheckCircle2, Calculator } from "lucide-react";
import Link from "next/link";

export default function NorwegianHvorMyeErstatning() {
  return (
    <LayoutNo>
      <SEO 
        title="Hvor mye erstatning kan du kreve fra Norwegian? [2025 Guide]"
        description="Få 250 €, 400 € eller 600 € fra Norwegian avhengig av flydistanse. Komplett guide til Norwegian-erstatning i Norge under EU261 og EØS-avtalen."
        url="https://problemlot.com/no/blog/norwegian-hvor-mye-erstatning"
      />

      <article className="container mx-auto px-4 py-12 max-w-4xl">
        <header className="mb-8">
          <Link href="/no/blog" className="text-blue-600 hover:text-blue-700 dark:text-blue-400 text-sm font-medium mb-4 inline-block">
            ← Tilbake til blogg
          </Link>
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-4">
            Hvor mye erstatning kan du kreve fra Norwegian? (250 € / 400 € / 600 €)
          </h1>
          <div className="flex items-center gap-4 text-sm text-gray-600 dark:text-gray-400">
            <span>8 min lesing</span>
            <span>•</span>
            <span>Oppdatert: Mars 2025</span>
          </div>
        </header>

        {/* Quick Answer */}
        <div className="bg-green-50 dark:bg-green-900/20 border-l-4 border-green-600 p-6 mb-8 rounded-r-lg">
          <h2 className="text-xl font-bold text-green-900 dark:text-green-100 mb-3 flex items-center gap-2">
            <Euro className="w-6 h-6" />
            Raskt svar: 250 €, 400 € eller 600 € basert på distanse
          </h2>
          <div className="space-y-3 text-gray-800 dark:text-gray-200">
            <p>
              Erstatningsbeløpet fra Norwegian avhenger <strong>kun av flydistansen</strong> — ikke prisen du betalte for billetten. Under <strong>EU-forordning 261/2004</strong> (som gjelder i Norge gjennom <strong>EØS-avtalen</strong>) har du rett til:
            </p>
            <ul className="ml-4 space-y-1">
              <li>✈️ <strong>250 €</strong> for fly under 1500 km</li>
              <li>✈️ <strong>400 €</strong> for fly mellom 1500-3500 km</li>
              <li>✈️ <strong>600 €</strong> for fly over 3500 km</li>
            </ul>
          </div>
        </div>

        {/* CTA 1 */}
        <div className="bg-gradient-to-r from-blue-50 to-indigo-50 dark:from-blue-900/20 dark:to-indigo-900/20 p-8 rounded-xl mb-12 text-center border border-gray-100 dark:border-gray-800">
          <Calculator className="w-16 h-16 text-blue-600 mx-auto mb-4" />
          <h3 className="text-2xl font-bold mb-4 dark:text-white">Beregn din Norwegian-erstatning nå</h3>
          <p className="text-gray-700 dark:text-gray-300 mb-6">
            Legg inn flynummer og dato for å se nøyaktig hvor mye du kan få. Tar 2 minutter.
          </p>
          <a href="https://claimwinger.com/no/forsinket-fly" target="_blank" rel="noopener noreferrer">
            <Button size="lg" className="bg-blue-600 hover:bg-blue-700 text-white text-lg px-8 py-6">
              Sjekk mitt Norwegian-krav
              <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
          </a>
        </div>

        <div className="prose dark:prose-invert max-w-none">
          <h2>Kompensasjonstabellen for Norwegian-fly (2025)</h2>
          <p>
            Her er den offisielle tabellen som gjelder for alle Norwegian-flygninger til, fra eller innenfor Norge og EØS-området:
          </p>

          <div className="overflow-x-auto my-6">
            <table className="w-full border-collapse bg-white dark:bg-gray-800">
              <thead>
                <tr className="bg-blue-600 text-white">
                  <th className="border border-gray-300 dark:border-gray-600 px-4 py-3 text-left">Distanse</th>
                  <th className="border border-gray-300 dark:border-gray-600 px-4 py-3 text-left">Eksempel Norwegian-rute</th>
                  <th className="border border-gray-300 dark:border-gray-600 px-4 py-3 text-left font-bold">Erstatning</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td className="border border-gray-300 dark:border-gray-600 px-4 py-3">Opp til 1500 km</td>
                  <td className="border border-gray-300 dark:border-gray-600 px-4 py-3">Oslo–København (600 km)<br/>Oslo–Stockholm (420 km)</td>
                  <td className="border border-gray-300 dark:border-gray-600 px-4 py-3 font-bold text-green-600 text-xl">250 €</td>
                </tr>
                <tr className="bg-gray-50 dark:bg-gray-800/50">
                  <td className="border border-gray-300 dark:border-gray-600 px-4 py-3">1500–3500 km</td>
                  <td className="border border-gray-300 dark:border-gray-600 px-4 py-3">Oslo–Barcelona (2300 km)<br/>Oslo–Roma (2100 km)</td>
                  <td className="border border-gray-300 dark:border-gray-600 px-4 py-3 font-bold text-green-600 text-xl">400 €</td>
                </tr>
                <tr>
                  <td className="border border-gray-300 dark:border-gray-600 px-4 py-3">Over 3500 km</td>
                  <td className="border border-gray-300 dark:border-gray-600 px-4 py-3">Oslo–New York (5900 km)<br/>Oslo–Bangkok (8600 km)</td>
                  <td className="border border-gray-300 dark:border-gray-600 px-4 py-3 font-bold text-green-600 text-xl">600 €</td>
                </tr>
              </tbody>
            </table>
          </div>

          <h2>Hvorfor avhenger beløpet av distanse, ikke billettpris?</h2>
          <p>
            Mange norske passasjerer spør: "Jeg kjøpte en LowFare-billett for 299 NOK — hvordan kan jeg få 250 €?"
          </p>
          <p>
            Svaret er at <strong>EU-forordning 261/2004</strong> (som gjelder i Norge gjennom EØS-avtalen) behandler kompensasjon som en <strong>straff til flyselskapet</strong> for å ha sviktet deg — ikke som refusjon av billettprisen. Det betyr at selv om du fløy på en kampanjebillett, har du krav på full kompensasjon basert på distansen.
          </p>
          <p>
            Les mer om grunnlaget: <Link href="/no/blog/norwegian-forsinkelse-erstatning-guide" className="text-blue-600 hover:underline">Erstatning for forsinket Norwegian-fly — komplett guide 2025</Link>
          </p>

          <h2>Eksempler: Norwegian-ruter og kompensasjon</h2>

          <h3>Korte ruter (250 €)</h3>
          <ul>
            <li><strong>Oslo–København:</strong> ~600 km → 250 €</li>
            <li><strong>Oslo–Stockholm:</strong> ~420 km → 250 €</li>
            <li><strong>Bergen–London:</strong> ~1200 km → 250 €</li>
            <li><strong>Stavanger–Amsterdam:</strong> ~850 km → 250 €</li>
          </ul>

          <h3>Mellomruter (400 €)</h3>
          <ul>
            <li><strong>Oslo–Barcelona:</strong> ~2300 km → 400 €</li>
            <li><strong>Oslo–Alicante:</strong> ~2700 km → 400 €</li>
            <li><strong>Oslo–Roma:</strong> ~2100 km → 400 €</li>
            <li><strong>Oslo–Gran Canaria:</strong> ~3900 km → 400 € (på grensen, men under 3500 km)</li>
          </ul>

          <h3>Langdistanse (600 €)</h3>
          <ul>
            <li><strong>Oslo–New York:</strong> ~5900 km → 600 €</li>
            <li><strong>Oslo–Los Angeles:</strong> ~8900 km → 600 €</li>
            <li><strong>Oslo–Bangkok:</strong> ~8600 km → 600 €</li>
            <li><strong>Oslo–Miami:</strong> ~7400 km → 600 €</li>
          </ul>

          <h2>Hva om Norwegian booket meg om til et kortere alternativt fly?</h2>
          <p>
            Det finnes en regel i EU261 som sier at hvis Norwegian booker deg om til et alternativt fly som kommer frem mindre enn 2-4 timer senere enn opprinnelig ankomst (avhengig av distanse), kan erstatningen reduseres med 50%.
          </p>
          <p><strong>Eksempel:</strong></p>
          <p>
            Ditt Oslo–New York fly (600 €) ble kansellert, men Norwegian satte deg på et SAS-fly som kom frem 3 timer og 30 minutter senere. Da kan Norwegian redusere erstatningen til <strong>300 €</strong> i stedet for 600 €.
          </p>
          <p>
            Men hvis det alternative flyet kom mer enn 4 timer senere, må Norwegian betale <strong>full 600 €</strong>.
          </p>

          <h2>Betaler Norwegian automatisk, eller må jeg kreve?</h2>
          <p>
            Dessverre betaler ikke Norwegian automatisk. Du må aktivt <strong>kreve erstatningen</strong>, enten ved å:
          </p>
          <ol>
            <li>Sende klagebrev direkte til Norwegian (kan ta 6-12 måneder)</li>
            <li>Bruke ClaimWinger (gjennomsnittlig 4-8 uker, 98% suksessrate)</li>
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
                  Hvordan måles distansen — luftlinje eller faktisk flyrute?
                </h3>
                <p className="text-gray-700 dark:text-gray-300 text-sm">
                  EU261 bruker <strong>Great Circle-distansen</strong> (korteste avstand mellom flyplassene). Du kan sjekke dette på nettsteder som <em>greatcirclemapper.net</em> eller la ClaimWinger gjøre det for deg.
                </p>
              </div>

              <div>
                <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-2 flex items-center gap-2">
                  <CheckCircle2 className="w-5 h-5 text-green-600" />
                  Hva hvis jeg hadde mellomlanding — teller total distanse?
                </h3>
                <p className="text-gray-700 dark:text-gray-300 text-sm">
                  Ja! Hvis du fløy Oslo–København–Barcelona på én booking, er den totale distansen Oslo–Barcelona (~2300 km), og du får <strong>400 €</strong> hvis forsinkelsen ved endelig ankomst var 3+ timer.
                </p>
              </div>

              <div>
                <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-2 flex items-center gap-2">
                  <CheckCircle2 className="w-5 h-5 text-green-600" />
                  Får jeg mer hvis jeg betalte for Flex-billett?
                </h3>
                <p className="text-gray-700 dark:text-gray-300 text-sm">
                  Nei. EU261-erstatningen er <strong>fast</strong> basert på distanse. Det spiller ingen rolle om du betalte 199 NOK eller 5000 NOK for billetten.
                </p>
              </div>

              <div>
                <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-2 flex items-center gap-2">
                  <CheckCircle2 className="w-5 h-5 text-green-600" />
                  Kan jeg kreve ekstra for hotell og mat?
                </h3>
                <p className="text-gray-700 dark:text-gray-300 text-sm">
                  Ja! EU261-kompensasjonen (250-600 €) er <strong>i tillegg til</strong> refusjon av utgifter til mat, hotell og transport hvis Norwegian ikke tilbød dette. Ta vare på alle kvitteringer.
                </p>
              </div>

              <div>
                <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-2 flex items-center gap-2">
                  <CheckCircle2 className="w-5 h-5 text-green-600" />
                  Gjelder beløpene også for barn?
                </h3>
                <p className="text-gray-700 dark:text-gray-300 text-sm">
                  Ja — <strong>hvis barnet hadde en egen billett med sete</strong>. Spedbarn på fanget (infant ticket) har dessverre ikke rett til EU261-erstatning.
                </p>
              </div>
            </div>
          </div>

          {/* CTA 2 */}
          <div className="bg-gradient-to-br from-green-600 to-teal-700 text-white rounded-2xl p-8 md:p-12 text-center my-12 shadow-lg">
            <Euro className="w-20 h-20 mx-auto mb-4 opacity-90" />
            <h3 className="text-3xl font-bold mb-4">Klar til å kreve din Norwegian-erstatning?</h3>
            <p className="text-xl mb-8 text-green-100">
              Sjekk gratis hvor mye du kan få — 250 €, 400 € eller 600 €. ClaimWinger håndterer alt.
            </p>
            <a href="https://claimwinger.com/no/forsinket-fly" target="_blank" rel="noopener noreferrer">
              <Button size="lg" className="bg-white text-green-700 hover:bg-gray-100 text-lg px-8 py-6">
                Beregn min erstatning nå
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
            </a>
            <p className="text-sm text-green-200 mt-4">
              ✓ No Win, No Fee | ✓ 98% suksessrate | ✓ Gjennomsnittstid: 4-8 uker
            </p>
          </div>

          <h2>Oppsummering</h2>
          <p>
            Erstatningsbeløpet fra Norwegian er fast og avhenger kun av flydistansen: <strong>250 €</strong> for korte ruter, <strong>400 €</strong> for mellomruter og <strong>600 €</strong> for langdistanse. Dette gjelder uansett billettpris, og beløpene er beskyttet av EU-forordning 261/2004 som gjelder i Norge gjennom EØS-avtalen.
          </p>
          <p>
            For raskest mulig utbetaling anbefaler vi å bruke <strong>ClaimWinger</strong>, som har juridisk ekspertise og høy suksessrate mot Norwegian.
          </p>
        </div>
      </article>
    </LayoutNo>
  );
}