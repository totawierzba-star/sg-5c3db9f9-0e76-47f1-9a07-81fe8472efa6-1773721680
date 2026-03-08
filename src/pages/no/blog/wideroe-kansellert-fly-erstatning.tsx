import { LayoutNo } from "@/components/LayoutNo";
import { SEO } from "@/components/SEO";
import Link from "next/link";

export default function WideRoeKansellertFlyErstatning() {
  return (
    <LayoutNo>
      <SEO
        title="Widerøe kansellerte flyet — hvordan krever du erstatning?"
        description="Widerøe kansellerte flyet ditt? Få 250-600 € erstatning + full refusjon under EU261/EØS-avtalen. Lær hvordan du krever pengene når Widerøe kansellerer."
        canonical="https://problemlot.pl/no/blog/wideroe-kansellert-fly-erstatning"
      />
      <article className="max-w-4xl mx-auto px-4 py-12">
        <header className="mb-8">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">
            Widerøe kansellerte flyet — hvordan krever du erstatning?
          </h1>
          <div className="flex items-center gap-4 text-sm text-gray-600">
            <time dateTime="2026-03-08">8. mars 2026</time>
            <span>•</span>
            <span>8 min lesing</span>
            <span>•</span>
            <span className="text-red-600 font-medium">Widerøe</span>
          </div>
        </header>

        <div className="prose prose-lg max-w-none">
          <p className="text-xl text-gray-700 leading-relaxed mb-6">
            Widerøe kansellerer oftere enn andre norske flyselskaper på grunn av <strong>værfølsomme små lufthavner</strong> og <strong>sårbar flåte av Dash 8-fly</strong>. Men selv om kanselleringen var på en kortruteavgang som Bodø–Leknes, har du fortsatt <strong>rett til 250-600 € erstatning</strong> hvis Widerøe varslet deg mindre enn 14 dager før avgang.
          </p>

          <p className="text-lg text-gray-700 leading-relaxed">
            Denne guiden forklarer nøyaktig når du har rett til erstatning ved Widerøe-kansellering, hvordan du krever pengene, og hvorfor Widerøe ofte prøver å nekte med «ekstraordinære omstendigheter».
          </p>

          <div className="bg-blue-50 border-l-4 border-blue-600 p-6 my-8">
            <h3 className="text-lg font-semibold text-gray-900 mb-2">💡 Rask sjekk: Har du rett til erstatning?</h3>
            <ul className="space-y-2 text-gray-700">
              <li>✅ Widerøe kansellerte flyet ditt</li>
              <li>✅ Du ble varslet mindre enn 14 dager før avgang</li>
              <li>✅ Kanselleringen skyldtes IKKE ekstraordinære omstendigheter (ekstremvær, ATC-streik)</li>
              <li>✅ Flyet var mindre enn 3 år siden</li>
            </ul>
            <p className="mt-4 text-sm text-gray-600">
              Oppfyller du kravene? <Link href="https://claimwinger.com/no/kansellert-fly" className="text-blue-600 hover:text-blue-700 font-semibold underline">La ClaimWinger sjekke kravet ditt gratis →</Link>
            </p>
          </div>

          <h2 className="text-3xl font-bold text-gray-900 mt-12 mb-6">
            Når har du rett til erstatning ved Widerøe-kansellering?
          </h2>

          <p className="text-gray-700 mb-4">
            Under EU261/EØS-avtalen har du rett til erstatning hvis:
          </p>

          <ol className="list-decimal list-inside space-y-3 text-gray-700 mb-6">
            <li><strong>Widerøe varslet deg mindre enn 14 dager før avgang</strong></li>
            <li><strong>Kanselleringen skyldtes Widerøe sin skyld</strong> (teknisk feil, mannskaps-problemer, driftsforstyrrelser)</li>
            <li><strong>IKKE ekstraordinært:</strong> Ikke ekstremvær som stengte lufthavnen, ATC-streik, sikkerhetstrusler</li>
          </ol>

          <h3 className="text-2xl font-semibold text-gray-800 mt-8 mb-4">
            Hva hvis Widerøe tilbød alternativt fly?
          </h3>

          <p className="text-gray-700 mb-6">
            Hvis Widerøe tilbød deg et alternativt fly som kom frem <strong>mindre enn 2-4 timer senere</strong> enn opprinnelig planlagt, kan erstatningen reduseres eller bortfalle helt. Men hvis det alternative flyet kom frem <strong>4+ timer senere</strong>, har du fortsatt rett til full erstatning.
          </p>

          <div className="overflow-x-auto my-8">
            <table className="min-w-full border-collapse border border-gray-300">
              <thead className="bg-gray-100">
                <tr>
                  <th className="border border-gray-300 px-4 py-3 text-left font-semibold">Varslingstidspunkt</th>
                  <th className="border border-gray-300 px-4 py-3 text-left font-semibold">Alternativt fly ankomst</th>
                  <th className="border border-gray-300 px-4 py-3 text-left font-semibold">Erstatning?</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td className="border border-gray-300 px-4 py-3">14+ dager før</td>
                  <td className="border border-gray-300 px-4 py-3">Når som helst</td>
                  <td className="border border-gray-300 px-4 py-3 text-red-600">❌ Nei</td>
                </tr>
                <tr className="bg-gray-50">
                  <td className="border border-gray-300 px-4 py-3">7-14 dager før</td>
                  <td className="border border-gray-300 px-4 py-3">&lt; 2 timer senere</td>
                  <td className="border border-gray-300 px-4 py-3 text-red-600">❌ Nei</td>
                </tr>
                <tr>
                  <td className="border border-gray-300 px-4 py-3">7-14 dager før</td>
                  <td className="border border-gray-300 px-4 py-3">2-4 timer senere</td>
                  <td className="border border-gray-300 px-4 py-3 text-yellow-600">⚠️ Mulig reduksjon</td>
                </tr>
                <tr className="bg-gray-50">
                  <td className="border border-gray-300 px-4 py-3">7-14 dager før</td>
                  <td className="border border-gray-300 px-4 py-3">4+ timer senere</td>
                  <td className="border border-gray-300 px-4 py-3 text-green-600">✅ Ja (250-600 €)</td>
                </tr>
                <tr>
                  <td className="border border-gray-300 px-4 py-3">&lt; 7 dager før</td>
                  <td className="border border-gray-300 px-4 py-3">Når som helst</td>
                  <td className="border border-gray-300 px-4 py-3 text-green-600">✅ Ja (250-600 €)</td>
                </tr>
              </tbody>
            </table>
          </div>

          <h2 className="text-3xl font-bold text-gray-900 mt-12 mb-6">
            Hvor mye erstatning kan du kreve fra Widerøe?
          </h2>

          <p className="text-gray-700 mb-6">
            Erstatningsbeløpet er basert på flydistanse:
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
              </tbody>
            </table>
          </div>

          <p className="text-gray-700 mb-6">
            <strong>Viktig:</strong> Du har rett til erstatning <strong>I TILLEGG TIL</strong> full refusjon av billettpris hvis du velger å ikke fly med det alternative flyet.
          </p>

          <h2 className="text-3xl font-bold text-gray-900 mt-12 mb-6">
            Widerøe sin vanligste unnskyldning: «Værforhold»
          </h2>

          <p className="text-gray-700 mb-4">
            Widerøe opererer mange <strong>værfølsomme små lufthavner</strong> (Leknes, Svolvær, Røst, Rørvik) og hevder ofte at kanselleringer skyldes <strong>«ekstraordinære værforhold»</strong>. Men dette er sjelden juridisk sant.
          </p>

          <div className="bg-yellow-50 border-l-4 border-yellow-600 p-6 my-8">
            <h3 className="text-lg font-semibold text-gray-900 mb-2">⚠️ Når er vær IKKE ekstraordinært?</h3>
            <p className="text-gray-700 mb-3">
              Hvis <strong>andre fly landet/startet</strong> på samme lufthavn rundt samme tid, var været IKKE ekstraordinært — og du har rett til erstatning.
            </p>
            <p className="text-gray-700">
              Eksempel: Widerøe kansellerte Bodø–Leknes kl. 14:00 «på grunn av vind», men et annet Widerøe-fly landet på Leknes kl. 15:30 samme dag → været var IKKE ekstraordinært → du får 250 €.
            </p>
          </div>

          <h2 className="text-3xl font-bold text-gray-900 mt-12 mb-6">
            Hvordan krever du erstatning fra Widerøe?
          </h2>

          <h3 className="text-2xl font-semibold text-gray-800 mt-8 mb-4">
            Alternativ 1: Send krav direkte til Widerøe
          </h3>

          <ol className="list-decimal list-inside space-y-3 text-gray-700 mb-6">
            <li>Samle dokumentasjon: Kansellerings-e-post, bookingbekreftelse, boardingkort (hvis du fikk det)</li>
            <li>Send e-post til: kundeservice@wideroe.no</li>
            <li>Skriv: «Jeg krever 250 € erstatning i henhold til EU261/EØS-avtalen for kansellering [dato] på fly [flynummer]»</li>
            <li>Vent 30 dager på svar</li>
          </ol>

          <p className="text-gray-700 mb-6">
            <strong>Problem:</strong> Widerøe svarer sjelden innen 30 dager, og avviser ofte krav med standardfraser om «ekstraordinære omstendigheter».
          </p>

          <h3 className="text-2xl font-semibold text-gray-800 mt-8 mb-4">
            Alternativ 2: Bruk ClaimWinger (anbefalt)
          </h3>

          <p className="text-gray-700 mb-4">
            <Link href="https://claimwinger.com/no/kansellert-fly" className="text-blue-600 hover:text-blue-700 font-semibold underline">ClaimWinger</Link> håndterer Widerøe-krav juridisk og har <strong>98% suksessrate</strong> ved å:
          </p>

          <ul className="list-disc list-inside space-y-2 text-gray-700 mb-6">
            <li>Motbevise Widerøes påstand om «ekstraordinært vær» med METAR-data</li>
            <li>Eskalere til Forbrukerrådet når Widerøe ikke svarer</li>
            <li>Tvinge frem betaling gjennom juridiske krav</li>
          </ul>

          <div className="bg-blue-50 border-l-4 border-blue-600 p-6 my-8">
            <h3 className="text-lg font-semibold text-gray-900 mb-2">💡 Sjekk kravet ditt gratis før FAQ</h3>
            <p className="text-gray-700 mb-3">
              Vet du ikke om du har rett til erstatning? <Link href="https://claimwinger.com/no/kansellert-fly" className="text-blue-600 hover:text-blue-700 font-semibold underline">La ClaimWinger sjekke kravet ditt gratis</Link> — du betaler kun hvis de vinner saken (25% provisjon).
            </p>
          </div>

          <h2 className="text-3xl font-bold text-gray-900 mt-12 mb-6">
            Ofte stilte spørsmål (FAQ)
          </h2>

          <div className="space-y-6">
            <div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">
                Får jeg refusjon OG erstatning ved Widerøe-kansellering?
              </h3>
              <p className="text-gray-700">
                Ja! Du har rett til <strong>full refusjon av billettpris</strong> (hvis du velger å ikke fly) <strong>PLUSS 250-600 € erstatning</strong> hvis Widerøe varslet deg mindre enn 14 dager før avgang. Dette er to separate rettigheter.
              </p>
            </div>

            <div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">
                Hva hvis Widerøe tilbød meg et annet fly dagen etter?
              </h3>
              <p className="text-gray-700">
                Hvis det alternative flyet kom frem <strong>4+ timer senere</strong> enn opprinnelig planlagt, har du fortsatt rett til full erstatning (250-600 €) — selv om du aksepterte det alternative flyet.
              </p>
            </div>

            <div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">
                Kan Widerøe nekte erstatning ved «teknisk feil»?
              </h3>
              <p className="text-gray-700">
                Nei! Teknisk feil er <strong>IKKE ekstraordinært</strong> ifølge EU-domstolen. Widerøe må betale full erstatning ved kanselleringer på grunn av teknisk feil — dette er deres ansvar som flyselskap. Les mer: <Link href="/no/blog/wideroe-teknisk-feil-eu261-innenriks" className="text-blue-600 hover:text-blue-700 underline">Widerøe teknisk feil og EU261</Link>.
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
                Gjelder EU261 for Widerøe innenriksflyvninger?
              </h3>
              <p className="text-gray-700">
                Ja! EU261 gjelder i Norge gjennom EØS-avtalen og dekker alle kommersielle flyvninger, inkludert innenriks. Du har samme rettigheter på Bergen–Bodø som på Oslo–London.
              </p>
            </div>
          </div>

          <h2 className="text-3xl font-bold text-gray-900 mt-12 mb-6">
            Konklusjon: Krev pengene dine fra Widerøe
          </h2>

          <p className="text-gray-700 mb-6">
            Widerøe er underlagt <strong>nøyaktig samme EU261/EØS-regler</strong> som alle andre europeiske flyselskaper. Hvis de kansellerte flyet ditt mindre enn 14 dager før avgang, har du rett til 250-600 € erstatning — selv om kanselleringen var på en kortruteavgang.
          </p>

          <p className="text-gray-700 mb-6">
            <strong>Vårt råd:</strong> Ikke la Widerøe lure deg med «værforhold»-unnskyldninger. La ClaimWinger håndtere kravet juridisk og få pengene du har krav på. <Link href="https://claimwinger.com/no/kansellert-fly" className="text-blue-600 hover:text-blue-700 font-medium underline">Start ditt krav gratis her →</Link>
          </p>

          <p className="text-gray-600 text-sm mt-8">
            <strong>Relaterte guider:</strong> <Link href="/no/blog/wideroe-forsinket-fly-erstatning" className="text-blue-600 hover:text-blue-700 underline">Erstatning for forsinket Widerøe-fly</Link>, <Link href="/no/blog/norwegian-forsinkelse-erstatning-guide" className="text-blue-600 hover:text-blue-700 underline">Norwegian forsinkelseerstatning</Link>, <Link href="/no/blog/hvor-mye-erstatning-kansellert-fly-norge" className="text-blue-600 hover:text-blue-700 underline">Hvor mye erstatning får jeg for et kansellert fly?</Link>
          </p>
        </div>
      </article>
    </LayoutNo>
  );
}