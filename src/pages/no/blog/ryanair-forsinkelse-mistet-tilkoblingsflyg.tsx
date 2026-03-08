import { LayoutNo } from "@/components/LayoutNo";
import { SEO } from "@/components/SEO";
import Link from "next/link";

export default function RyanairForsinkelseMistetTilkoblingsflyg() {
  return (
    <LayoutNo>
      <SEO
        title="Ryanair forsinkelse og mistet tilkoblingsflyg — hvem er ansvarlig?"
        description="Mistet du tilkoblingsflyg på grunn av Ryanair-forsinkelse? Lær når Ryanair må betale 250-600 € erstatning for hele reisen."
        canonical="https://problemlot.pl/no/blog/ryanair-forsinkelse-mistet-tilkoblingsflyg"
      />
      <article className="max-w-4xl mx-auto px-4 py-12">
        <header className="mb-8">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">
            Ryanair forsinkelse og mistet tilkoblingsflyg — hvem er ansvarlig?
          </h1>
          <div className="flex items-center gap-4 text-sm text-gray-600">
            <time dateTime="2026-03-08">8. mars 2026</time>
            <span>•</span>
            <span>7 min lesing</span>
            <span>•</span>
            <span className="text-purple-600 font-medium">Ryanair</span>
          </div>
        </header>

        <div className="prose prose-lg max-w-none">
          <p className="text-xl text-gray-700 leading-relaxed mb-6">
            Du booket en reise fra Torp til Barcelona med Ryanair, med overgang i London Stansted. Første etappe til London er forsinket med 2 timer, og du mister tilkoblingen til Barcelona. Når du ankommer Barcelona 5 timer forsinket, starter spørsmålet: <strong>Hvem er ansvarlig — og hvor mye erstatning kan du kreve?</strong>
          </p>

          <p className="text-lg text-gray-700 leading-relaxed">
            Denne guiden forklarer nøyaktig når Ryanair må betale erstatning ved mistede tilkoblingsflyg, og hvordan du maksimerer erstatningen din.
          </p>

          <div className="bg-blue-50 border-l-4 border-blue-600 p-6 my-8">
            <h3 className="text-lg font-semibold text-gray-900 mb-2">💡 Rask sjekk: Har du rett til erstatning?</h3>
            <ul className="space-y-2 text-gray-700">
              <li>✅ Du booket begge fly på samme billett (gjennomgående billett)</li>
              <li>✅ Første fly var forsinket og du mistet tilkoblingen</li>
              <li>✅ Du ankom sluttdestinasjonen 3+ timer forsinket</li>
              <li>✅ Forsinkelsen skyldtes IKKE ekstraordinære omstendigheter</li>
            </ul>
            <p className="mt-4 text-sm text-gray-600">
              Oppfyller du kravene? <Link href="https://claimwinger.com/no/forsinket-fly" className="text-blue-600 hover:text-blue-700 font-semibold underline">La ClaimWinger sjekke kravet ditt gratis →</Link>
            </p>
          </div>

          <h2 className="text-3xl font-bold text-gray-900 mt-12 mb-6">
            Når er Ryanair ansvarlig for mistede tilkoblingsflyg?
          </h2>

          <p className="text-gray-700 mb-4">
            Ryanair er ansvarlig hvis <strong>alle</strong> disse kriteriene er oppfylt:
          </p>

          <ol className="list-decimal list-inside space-y-3 text-gray-700 mb-6">
            <li><strong>Gjennomgående billett:</strong> Du booket begge fly på samme bestilling (felles PNR-nummer)</li>
            <li><strong>Samme flyselskap:</strong> Begge fly ble operert av Ryanair (eller Ryanair-partnere)</li>
            <li><strong>Forsinkelse på første etappe:</strong> Første fly var forsinket, noe som forårsaket at du mistet tilkoblingen</li>
            <li><strong>3+ timer forsinket ved ankomst:</strong> Du ankom sluttdestinasjonen 3+ timer senere enn opprinnelig planlagt</li>
          </ol>

          <div className="bg-yellow-50 border-l-4 border-yellow-600 p-6 my-8">
            <h3 className="text-lg font-semibold text-gray-900 mb-2">⚠️ Hva hvis du booket flyene separat?</h3>
            <p className="text-gray-700">
              Hvis du booket to separate billetter (to ulike PNR-numre), er Ryanair IKKE ansvarlig for mistede tilkoblingsflyg. Du må da kreve erstatning kun for det forsinkede første flyet (hvis det var 3+ timer forsinket).
            </p>
          </div>

          <h2 className="text-3xl font-bold text-gray-900 mt-12 mb-6">
            Hvor mye erstatning kan du kreve?
          </h2>

          <p className="text-gray-700 mb-6">
            Erstatningsbeløpet er basert på <strong>total distanse fra startpunkt til sluttdestinasjon</strong>:
          </p>

          <div className="overflow-x-auto my-8">
            <table className="min-w-full border-collapse border border-gray-300">
              <thead className="bg-gray-100">
                <tr>
                  <th className="border border-gray-300 px-4 py-3 text-left font-semibold">Total distanse</th>
                  <th className="border border-gray-300 px-4 py-3 text-left font-semibold">Erstatning</th>
                  <th className="border border-gray-300 px-4 py-3 text-left font-semibold">Eksempel Ryanair-rute</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td className="border border-gray-300 px-4 py-3">Opptil 1500 km</td>
                  <td className="border border-gray-300 px-4 py-3 font-bold text-green-600">250 €</td>
                  <td className="border border-gray-300 px-4 py-3">Torp-London-Dublin (total &lt; 1500 km)</td>
                </tr>
                <tr className="bg-gray-50">
                  <td className="border border-gray-300 px-4 py-3">1500–3500 km</td>
                  <td className="border border-gray-300 px-4 py-3 font-bold text-green-600">400 €</td>
                  <td className="border border-gray-300 px-4 py-3">Torp-London-Barcelona (total 1500-3500 km)</td>
                </tr>
                <tr>
                  <td className="border border-gray-300 px-4 py-3">Over 3500 km</td>
                  <td className="border border-gray-300 px-4 py-3 font-bold text-green-600">600 €</td>
                  <td className="border border-gray-300 px-4 py-3">Oslo-London-Dubai (total &gt; 3500 km)</td>
                </tr>
              </tbody>
            </table>
          </div>

          <h2 className="text-3xl font-bold text-gray-900 mt-12 mb-6">
            Hvordan krever du erstatning fra Ryanair?
          </h2>

          <h3 className="text-2xl font-semibold text-gray-800 mt-8 mb-4">
            Dokumentasjon du trenger
          </h3>

          <ul className="list-disc list-inside space-y-2 text-gray-700 mb-6">
            <li><strong>Bookingbekreftelse</strong> for begge fly (samme PNR-nummer)</li>
            <li><strong>Boardingkort</strong> for begge fly (hvis tilgjengelig)</li>
            <li><strong>Bevis på forsinkelse</strong> (forsinkelsesbekreftelse fra Ryanair, flightradar-screenshot)</li>
            <li><strong>Kvitteringer</strong> for utgifter (mat, hotell, transport) hvis Ryanair ikke dekket dem</li>
          </ul>

          <h3 className="text-2xl font-semibold text-gray-800 mt-8 mb-4">
            Alternativ 1: Send krav direkte til Ryanair
          </h3>

          <ol className="list-decimal list-inside space-y-3 text-gray-700 mb-6">
            <li>Gå til Ryanair.com → «Help Center» → «EU261 Claim»</li>
            <li>Fyll ut skjemaet med: PNR-nummer, begge flynumre, forsinkelsestid</li>
            <li>Krev: «400 € erstatning for mistet tilkoblingsflyg i henhold til EU261»</li>
            <li>Vent 30 dager på svar</li>
          </ol>

          <p className="text-gray-700 mb-6">
            <strong>Problem:</strong> Ryanair avviser ofte krav om mistede tilkoblingsflyg ved å påstå at du booket flyene separat (selv om du har samme PNR-nummer).
          </p>

          <h3 className="text-2xl font-semibold text-gray-800 mt-8 mb-4">
            Alternativ 2: Bruk ClaimWinger (anbefalt)
          </h3>

          <p className="text-gray-700 mb-4">
            <Link href="https://claimwinger.com/no/forsinket-fly" className="text-blue-600 hover:text-blue-700 font-semibold underline">ClaimWinger</Link> håndterer komplekse tilkoblingsflyg-krav ved å:
          </p>

          <ul className="list-disc list-inside space-y-2 text-gray-700 mb-6">
            <li>Bevise at begge fly var på samme billett (PNR-nummer)</li>
            <li>Motbevise Ryanairs påstand om «separate billetter»</li>
            <li>Eskalere til Forbrukerrådet hvis Ryanair nekter</li>
            <li>Tvinge frem betaling gjennom juridiske krav</li>
          </ul>

          <div className="bg-blue-50 border-l-4 border-blue-600 p-6 my-8">
            <h3 className="text-lg font-semibold text-gray-900 mb-2">💡 Sjekk kravet ditt gratis før FAQ</h3>
            <p className="text-gray-700 mb-3">
              Vet du ikke om du har rett til erstatning? <Link href="https://claimwinger.com/no/forsinket-fly" className="text-blue-600 hover:text-blue-700 font-semibold underline">La ClaimWinger sjekke kravet ditt gratis</Link> — du betaler kun hvis de vinner saken (25% provisjon).
            </p>
          </div>

          <h2 className="text-3xl font-bold text-gray-900 mt-12 mb-6">
            Ofte stilte spørsmål (FAQ)
          </h2>

          <div className="space-y-6">
            <div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">
                Hva hvis jeg booket flyene gjennom Google Flights eller Kiwi?
              </h3>
              <p className="text-gray-700">
                Hvis du fikk samme PNR-nummer for begge fly, er det en gjennomgående billett — og Ryanair er ansvarlig. Sjekk bookingbekreftelsen din for å se om begge fly har samme PNR.
              </p>
            </div>

            <div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">
                Hva hvis andre fly var involvert (f.eks. Ryanair + Norwegian)?
              </h3>
              <p className="text-gray-700">
                Hvis begge fly var på samme billett (samme PNR), er det <strong>opererende flyselskap på første etappe</strong> som er ansvarlig. Hvis Ryanair opererte første fly, krev fra Ryanair.
              </p>
            </div>

            <div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">
                Må Ryanair dekke hotell og mat når jeg mister tilkoblingen?
              </h3>
              <p className="text-gray-700">
                Ja! Ryanair må dekke hotell, måltider og transport mellom flyplass og hotell hvis du må vente til neste dag. Ta vare på alle kvitteringer og krev refusjon i tillegg til erstatningen.
              </p>
            </div>

            <div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">
                Hva hvis jeg ankom bare 2 timer forsinket?
              </h3>
              <p className="text-gray-700">
                Du må ankomme sluttdestinasjonen <strong>3+ timer forsinket</strong> for å ha rett til erstatning. Ved 2 timers forsinkelse har du kun rett til omsorg (mat, drikke), ikke kontanterstatning.
              </p>
            </div>

            <div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">
                Hvor lang tid tar det å få pengene fra Ryanair?
              </h3>
              <p className="text-gray-700">
                Direkte til Ryanair: 2-6 måneder (de svarer sjelden raskt). Med ClaimWinger: 4-8 uker takket være juridisk press og Forbrukerrådet-eskalering.
              </p>
            </div>
          </div>

          <h2 className="text-3xl font-bold text-gray-900 mt-12 mb-6">
            Konklusjon: Krev full erstatning for mistede tilkoblingsflyg
          </h2>

          <p className="text-gray-700 mb-6">
            Mistede tilkoblingsflyg er frustrerende, men du har <strong>lovfestede rettigheter under EU261/EØS-avtalen</strong>. Ryanair må betale erstatning hvis forsinkelsen på første etappe forårsaket at du ankom sluttdestinasjonen 3+ timer forsinket.
          </p>

          <p className="text-gray-700 mb-6">
            <strong>Vårt råd:</strong> Ikke la Ryanair avvise kravet ditt med «separate billetter»-unnskyldningen. La ClaimWinger håndtere kravet juridisk. <Link href="https://claimwinger.com/no/forsinket-fly" className="text-blue-600 hover:text-blue-700 font-medium underline">Start ditt krav gratis her →</Link>
          </p>

          <p className="text-gray-600 text-sm mt-8">
            <strong>Relaterte guider:</strong> <Link href="/no/blog/ryanair-forsinket-fly-norge-erstatning" className="text-blue-600 hover:text-blue-700 underline">Erstatning for forsinket Ryanair-fly</Link>, <Link href="/no/blog/norwegian-forsinkelse-erstatning-guide" className="text-blue-600 hover:text-blue-700 underline">Norwegian forsinkelseerstatning</Link>, <Link href="/no/blog/norwegian-misset-tilkoblingsflyg" className="text-blue-600 hover:text-blue-700 underline">Norwegian mistet tilkoblingsflyg</Link>
          </p>
        </div>
      </article>
    </LayoutNo>
  );
}