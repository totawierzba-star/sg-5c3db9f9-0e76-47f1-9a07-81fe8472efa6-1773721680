import { LayoutNo } from "@/components/LayoutNo";
import { SEO } from "@/components/SEO";
import Link from "next/link";

export default function WideRoeForsinketFlyErstatning() {
  return (
    <LayoutNo>
      <SEO
        title="Erstatning for forsinket Widerøe-fly — komplett guide for norske reisende"
        description="Widerøe-flyet ditt er forsinket? Få 250-600 € i erstatning under EU261/EØS-avtalen. Komplett guide til dine rettigheter på innenriks- og utenriksflyvninger."
        canonical="https://problemlot.pl/no/blog/wideroe-forsinket-fly-erstatning"
      />
      <article className="max-w-4xl mx-auto px-4 py-12">
        <header className="mb-8">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">
            Erstatning for forsinket Widerøe-fly — komplett guide for norske reisende
          </h1>
          <div className="flex items-center gap-4 text-sm text-gray-600">
            <time dateTime="2026-03-08">8. mars 2026</time>
            <span>•</span>
            <span>9 min lesing</span>
            <span>•</span>
            <span className="text-blue-600 font-medium">Widerøe</span>
          </div>
        </header>

        <div className="prose prose-lg max-w-none">
          <p className="text-xl text-gray-700 leading-relaxed mb-6">
            Widerøe er Norges største regionale flyselskap og opererer over 400 daglige avganger til små og mellomstore lufthavner. Men <strong>hva skjer når Widerøe-flyet ditt er forsinket?</strong> Mange norske passasjerer tror at <strong>innenriksflyvninger ikke er beskyttet av EU261</strong> — men dette er feil. Selv på ruter som Bodø–Leknes eller Bergen–Florø har du <strong>full rett til 250-600 € i erstatning</strong> ved forsinkelse over 3 timer.
          </p>

          <p className="text-lg text-gray-700 leading-relaxed">
            Denne guiden forklarer nøyaktig når Widerøe må betale erstatning, hvordan du krever pengene, og hvorfor de ofte prøver å nekte ved å påstå «teknisk feil» eller «værforhold».
          </p>

          <div className="bg-blue-50 border-l-4 border-blue-600 p-6 my-8">
            <h3 className="text-lg font-semibold text-gray-900 mb-2">💡 Rask sjekk: Har du rett til erstatning fra Widerøe?</h3>
            <ul className="space-y-2 text-gray-700">
              <li>✅ Widerøe-flyet var 3+ timer forsinket ved ankomst</li>
              <li>✅ Avgangen var fra et norsk eller europeisk flyplass</li>
              <li>✅ Forsinkelsen skyldtes IKKE ekstraordinære omstendigheter (ekstremvær, ATC-streik)</li>
              <li>✅ Flyet var mindre enn 3 år siden</li>
            </ul>
            <p className="mt-4 text-sm text-gray-600">
              Oppfyller du kravene? <Link href="https://claimwinger.com/no/forsinket-fly" className="text-blue-600 hover:text-blue-700 font-semibold underline">La ClaimWinger sjekke kravet ditt gratis →</Link>
            </p>
          </div>

          <h2 className="text-3xl font-bold text-gray-900 mt-12 mb-6">
            Gjelder EU261 for Widerøe innenriksflyvninger?
          </h2>

          <p className="text-gray-700 mb-4">
            <strong>Ja — 100%.</strong> EU261 gjelder i Norge gjennom <strong>EØS-avtalen</strong>, og dekker:
          </p>

          <ul className="list-disc list-inside space-y-2 text-gray-700 mb-6">
            <li><strong>Innenriksflyvninger</strong> (Bergen–Trondheim, Bodø–Tromsø, Oslo–Kristiansand)</li>
            <li><strong>Utenriksflyvninger fra Norge</strong> (Bergen–København, Tromsø–Stockholm)</li>
            <li><strong>Alle Widerøe-ruter</strong> — uavhengig av distanse eller destinasjon</li>
          </ul>

          <div className="bg-yellow-50 border-l-4 border-yellow-600 p-6 my-8">
            <h3 className="text-lg font-semibold text-gray-900 mb-2">⚠️ Widerøe sin vanlige unnskyldning</h3>
            <p className="text-gray-700">
              Widerøe hevder ofte at <strong>«innenriksflyvninger ikke er beskyttet av EU261»</strong> eller at <strong>«værforhold på små lufthavner»</strong> er ekstraordinære. Dette er <strong>juridisk feil</strong>. EU261 gjelder alle kommersielle flyvninger i EØS-området, inkludert innenriks.
            </p>
          </div>

          <h2 className="text-3xl font-bold text-gray-900 mt-12 mb-6">
            Hvor mye erstatning har du rett til fra Widerøe?
          </h2>

          <p className="text-gray-700 mb-6">
            Erstatningsbeløpet er det samme som for alle andre europeiske flyselskaper — basert på flydistanse:
          </p>

          <div className="overflow-x-auto my-8">
            <table className="min-w-full border-collapse border border-gray-300">
              <thead className="bg-gray-100">
                <tr>
                  <th className="border border-gray-300 px-4 py-3 text-left font-semibold">Flydistanse</th>
                  <th className="border border-gray-300 px-4 py-3 text-left font-semibold">Erstatning</th>
                  <th className="border border-gray-300 px-4 py-3 text-left font-semibold">Eksempel Widerøe-rute</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td className="border border-gray-300 px-4 py-3">Opptil 1500 km</td>
                  <td className="border border-gray-300 px-4 py-3 font-bold text-green-600">250 €</td>
                  <td className="border border-gray-300 px-4 py-3">Bergen–Bodø, Oslo–Trondheim, Tromsø–Kirkenes</td>
                </tr>
                <tr className="bg-gray-50">
                  <td className="border border-gray-300 px-4 py-3">1500–3500 km</td>
                  <td className="border border-gray-300 px-4 py-3 font-bold text-green-600">400 €</td>
                  <td className="border border-gray-300 px-4 py-3">Bergen–København, Tromsø–Stockholm</td>
                </tr>
                <tr>
                  <td className="border border-gray-300 px-4 py-3">Over 3500 km</td>
                  <td className="border border-gray-300 px-4 py-3 font-bold text-green-600">600 €</td>
                  <td className="border border-gray-300 px-4 py-3">Ikke relevant for Widerøe (opererer ikke langdistanse)</td>
                </tr>
              </tbody>
            </table>
          </div>

          <p className="text-gray-700 mb-6">
            <strong>De fleste Widerøe-ruter gir 250 € erstatning</strong> fordi de er kortere enn 1500 km. Men 250 € er fortsatt betydelig kompensasjon for en 45-minutters forsinkelse på Bodø–Leknes.
          </p>

          <h2 className="text-3xl font-bold text-gray-900 mt-12 mb-6">
            Når må Widerøe betale erstatning?
          </h2>

          <p className="text-gray-700 mb-4">
            Du har rett til erstatning når <strong>alle</strong> disse kriteriene er oppfylt:
          </p>

          <ol className="list-decimal list-inside space-y-3 text-gray-700 mb-6">
            <li><strong>Forsinkelse ved ankomst:</strong> 3+ timer senere enn planlagt ankomsttid</li>
            <li><strong>Widerøe sin skyld:</strong> Teknisk feil, mannskaps-problemer, overbokning, driftsforstyrrelser</li>
            <li><strong>IKKE ekstraordinært:</strong> Ikke ekstremvær, ATC-streik, sikkerhetstrusler</li>
            <li><strong>Innen foreldelsesfrist:</strong> Mindre enn 3 år siden flydato (Norge)</li>
          </ol>

          <div className="bg-green-50 border-l-4 border-green-600 p-6 my-8">
            <h3 className="text-lg font-semibold text-gray-900 mb-2">✅ Vanlige Widerøe-forsinkelser som GIR erstatning</h3>
            <ul className="space-y-2 text-gray-700">
              <li>✅ <strong>Teknisk feil på Dash 8-fly</strong> (vanligste årsak)</li>
              <li>✅ <strong>Manglende mannskap</strong> (pilot/kabinansatte syk eller forsinket)</li>
              <li>✅ <strong>Driftsforstyrrelser</strong> (forsinkelseskjede fra tidligere fly)</li>
              <li>✅ <strong>Overbooking</strong> (du ble nektet ombordstigning)</li>
              <li>✅ <strong>Bakkeutstyr feil</strong> (issuing, avinig, etc.)</li>
            </ul>
          </div>

          <h2 className="text-3xl font-bold text-gray-900 mt-12 mb-6">
            Widerøe sin vanligste unnskyldning: «Værforhold»
          </h2>

          <p className="text-gray-700 mb-4">
            Widerøe opererer mange små lufthavner med <strong>værfølsomme rullebaner</strong> (Leknes, Svolvær, Røst, Rørvik). De hevder ofte at forsinkelser skyldes <strong>«ekstraordinære værforhold»</strong> — men dette er sjelden sant.
          </p>

          <h3 className="text-2xl font-semibold text-gray-800 mt-8 mb-4">
            Hvordan skille mellom ekstraordinært vær og normal drift?
          </h3>

          <div className="overflow-x-auto my-8">
            <table className="min-w-full border-collapse border border-gray-300">
              <thead className="bg-gray-100">
                <tr>
                  <th className="border border-gray-300 px-4 py-3 text-left font-semibold">Situasjon</th>
                  <th className="border border-gray-300 px-4 py-3 text-left font-semibold">Ekstraordinært?</th>
                  <th className="border border-gray-300 px-4 py-3 text-left font-semibold">Rett til erstatning?</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td className="border border-gray-300 px-4 py-3">Orkan stengte lufthavnen</td>
                  <td className="border border-gray-300 px-4 py-3 text-green-600">✅ Ja</td>
                  <td className="border border-gray-300 px-4 py-3 text-red-600">❌ Nei</td>
                </tr>
                <tr className="bg-gray-50">
                  <td className="border border-gray-300 px-4 py-3">Kraftig vind (men andre fly landet)</td>
                  <td className="border border-gray-300 px-4 py-3 text-red-600">❌ Nei</td>
                  <td className="border border-gray-300 px-4 py-3 text-green-600">✅ Ja (250 €)</td>
                </tr>
                <tr>
                  <td className="border border-gray-300 px-4 py-3">Tåke (men andre fly landet)</td>
                  <td className="border border-gray-300 px-4 py-3 text-red-600">❌ Nei</td>
                  <td className="border border-gray-300 px-4 py-3 text-green-600">✅ Ja (250 €)</td>
                </tr>
                <tr className="bg-gray-50">
                  <td className="border border-gray-300 px-4 py-3">Ising på rullebanen (men andre fly startet)</td>
                  <td className="border border-gray-300 px-4 py-3 text-red-600">❌ Nei</td>
                  <td className="border border-gray-300 px-4 py-3 text-green-600">✅ Ja (250 €)</td>
                </tr>
                <tr>
                  <td className="border border-gray-300 px-4 py-3">Vulkanutbrudd stengte luftrommet</td>
                  <td className="border border-gray-300 px-4 py-3 text-green-600">✅ Ja</td>
                  <td className="border border-gray-300 px-4 py-3 text-red-600">❌ Nei</td>
                </tr>
              </tbody>
            </table>
          </div>

          <p className="text-gray-700 mb-6">
            <strong>Nøkkelspørsmål:</strong> Landet andre fly på samme lufthavn rundt samme tid? Hvis ja, var været IKKE ekstraordinært, og du har rett til erstatning.
          </p>

          <h2 className="text-3xl font-bold text-gray-900 mt-12 mb-6">
            Hvordan krever du erstatning fra Widerøe?
          </h2>

          <p className="text-gray-700 mb-4">
            Du har to alternativer:
          </p>

          <h3 className="text-2xl font-semibold text-gray-800 mt-8 mb-4">
            1. Send krav direkte til Widerøe (gjør-det-selv)
          </h3>

          <ol className="list-decimal list-inside space-y-3 text-gray-700 mb-6">
            <li><strong>Samle dokumentasjon:</strong> Boardingkort, bookingbekreftelse, bevis på forsinkelse</li>
            <li><strong>Send e-post til:</strong> kundeservice@wideroe.no</li>
            <li><strong>Skriv klart:</strong> «Jeg krever 250 € erstatning i henhold til EU261/EØS-avtalen for forsinkelse [dato] på fly [flynummer]»</li>
            <li><strong>Vent 30 dager</strong> på svar</li>
          </ol>

          <p className="text-gray-700 mb-6">
            <strong>Problem:</strong> Widerøe svarer sjelden innen 30 dager, og avviser ofte krav med standardfraser om «ekstraordinære omstendigheter».
          </p>

          <h3 className="text-2xl font-semibold text-gray-800 mt-8 mb-4">
            2. Bruk ClaimWinger (anbefalt for Widerøe-saker)
          </h3>

          <p className="text-gray-700 mb-4">
            <Link href="https://claimwinger.com/no/forsinket-fly" className="text-blue-600 hover:text-blue-700 font-semibold underline">ClaimWinger</Link> håndterer Widerøe-krav juridisk og har <strong>98% suksessrate</strong> ved å:
          </p>

          <ul className="list-disc list-inside space-y-2 text-gray-700 mb-6">
            <li>Motbevise Widerøes påstand om «ekstraordinært vær» med METAR-data</li>
            <li>Eskalere til Forbrukerrådet når Widerøe ikke svarer</li>
            <li>Tvinge frem betaling gjennom juridiske krav</li>
          </ul>

          <div className="bg-blue-50 border-l-4 border-blue-600 p-6 my-8">
            <h3 className="text-lg font-semibold text-gray-900 mb-2">💡 Før FAQ-seksjonen: Sjekk kravet ditt gratis</h3>
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
                Gjelder EU261 på Widerøe innenriksflyvninger?
              </h3>
              <p className="text-gray-700">
                Ja! EU261 gjelder i Norge gjennom EØS-avtalen og dekker alle kommersielle flyvninger, inkludert innenriks (Bergen–Bodø, Tromsø–Oslo, etc.). Du har full rett til 250 € erstatning ved 3+ timers forsinkelse.
              </p>
            </div>

            <div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">
                Hva hvis Widerøe hevder at «værforhold» var ekstraordinært?
              </h3>
              <p className="text-gray-700">
                ClaimWinger sjekker METAR-data (offisielle værrapporter) for å bevise at været IKKE var ekstraordinært hvis andre fly landet rundt samme tid. Widerøe kan ikke nekte erstatning basert på været alene.
              </p>
            </div>

            <div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">
                Hvor lang tid tar det å få pengene fra Widerøe?
              </h3>
              <p className="text-gray-700">
                Direkte til Widerøe: 2-6 måneder (de svarer sjelden raskt). Med ClaimWinger: 4-8 uker takket være juridisk press og Forbrukerrådet-eskalering.
              </p>
            </div>

            <div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">
                Kan jeg kreve erstatning for gamle Widerøe-forsinkelser?
              </h3>
              <p className="text-gray-700">
                Ja! I Norge har du <strong>3 års foreldelsesfrist</strong> fra flydato. Du kan kreve erstatning for forsinkelser opptil 3 år tilbake i tid.
              </p>
            </div>

            <div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">
                Hva hvis Widerøe-flyet mitt var i codeshare med Norwegian?
              </h3>
              <p className="text-gray-700">
                Du krever fra det <strong>opererende flyselskapet</strong> (den som faktisk fløy flyet). Hvis Widerøe opererte flyet, krev fra Widerøe — selv om du booket gjennom Norwegian. Les mer i vår guide: <Link href="/no/blog/wideroe-norwegian-codeshare-ansvar" className="text-blue-600 hover:text-blue-700 underline">Widerøe og Norwegian codeshare</Link>.
              </p>
            </div>
          </div>

          <h2 className="text-3xl font-bold text-gray-900 mt-12 mb-6">
            Konklusjon: Widerøe må betale erstatning som alle andre
          </h2>

          <p className="text-gray-700 mb-6">
            Widerøe er underlagt <strong>nøyaktig samme EU261/EØS-regler</strong> som SAS, Norwegian og alle andre europeiske flyselskaper. Innenriksflyvninger er beskyttet, og du har rett til 250 € erstatning ved 3+ timers forsinkelse.
          </p>

          <p className="text-gray-700 mb-6">
            <strong>Vårt råd:</strong> Ikke la Widerøe lure deg med «værforhold»-unnskyldninger. La ClaimWinger håndtere kravet juridisk og få pengene du har krav på. <Link href="https://claimwinger.com/no/forsinket-fly" className="text-blue-600 hover:text-blue-700 font-medium underline">Start ditt krav gratis her →</Link>
          </p>

          <p className="text-gray-600 text-sm mt-8">
            <strong>Relaterte guider:</strong> <Link href="/no/blog/norwegian-forsinkelse-erstatning-guide" className="text-blue-600 hover:text-blue-700 underline">Norwegian forsinkelseerstatning — komplett guide</Link>, <Link href="/no/blog/wideroe-norwegian-codeshare-ansvar" className="text-blue-600 hover:text-blue-700 underline">Widerøe og Norwegian codeshare</Link>, <Link href="/no/blog/hvilke-dokumenter-trenger-jeg-for-a-soke-om-erstatning-forsinket-fly" className="text-blue-600 hover:text-blue-700 underline">Hvilke dokumenter trenger jeg?</Link>
          </p>
        </div>
      </article>
    </LayoutNo>
  );
}