import { LayoutNo } from "@/components/LayoutNo";
import { SEO } from "@/components/SEO";
import Link from "next/link";

export default function OTABillettBookingKiwiErstatningRettigheter() {
  return (
    <LayoutNo>
      <SEO
        title="Billett kjøpt via OTA (Booking, Kiwi, Expedia) — påvirker det retten til erstatning?"
        description="Kjøpte billetten gjennom Booking.com, Kiwi.com eller Expedia? EU261-retten gjelder fortsatt — slik krever du erstatning direkte fra flyselskapet."
        canonicalUrl="https://problemlot.pl/no/blog/ota-billett-booking-kiwi-erstatning-rettigheter"
      />
      <article className="max-w-4xl mx-auto px-4 py-12">
        <header className="mb-8">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">
            Billett kjøpt via OTA (Booking, Kiwi, Expedia) — påvirker det retten til erstatning?
          </h1>
          <div className="flex items-center gap-4 text-sm text-gray-600">
            <time dateTime="2026-03-08">8. mars 2026</time>
            <span>•</span>
            <span>8 min lesing</span>
            <span>•</span>
            <span className="text-purple-600 font-medium">OTA/Booking</span>
          </div>
        </header>

        <div className="prose prose-lg max-w-none">
          <p className="text-xl text-gray-700 leading-relaxed mb-6">
            Du kjøpte flybilletten via Booking.com, Kiwi.com, Expedia eller eDreams, men flyet ble forsinket eller kansellert. <strong>Hvem er ansvarlig for erstatningen?</strong> Mange norske passasjerer tror at de må kreve fra OTA-plattformen (Online Travel Agency) — men dette er feil. EU261-ansvaret ligger <strong>alltid hos flyselskapet</strong>, uavhengig av hvor du kjøpte billetten.
          </p>

          <p className="text-lg text-gray-700 leading-relaxed">
            Denne guiden forklarer nøyaktig hvordan du krever 250-600 € erstatning når billetten er kjøpt gjennom tredjepartsplattformer, og hvorfor OTA-er ofte gjør det vanskeligere å få pengene dine.
          </p>

          <div className="bg-blue-50 border-l-4 border-blue-600 p-6 my-8">
            <h3 className="text-lg font-semibold text-gray-900 mb-2">💡 Rask sjekk: Har du rett til erstatning?</h3>
            <ul className="space-y-2 text-gray-700">
              <li>✅ Flyet var 3+ timer forsinket eller kansellert</li>
              <li>✅ Avgangen var fra et europeisk flyplass (inkl. Norge)</li>
              <li>✅ Billetten er kjøpt via OTA (Booking, Kiwi, Expedia, eDreams)</li>
              <li>✅ Forsinkelsen skyldtes IKKE ekstraordinære omstendigheter</li>
            </ul>
            <p className="mt-4 text-sm text-gray-600">
              Oppfyller du kravene? <Link href="https://claimwinger.com/no" className="text-blue-600 hover:text-blue-700 font-semibold underline">La ClaimWinger kreve direkte fra flyselskapet →</Link>
            </p>
          </div>

          <h2 className="text-3xl font-bold text-gray-900 mt-12 mb-6">
            OTA vs. flyselskap — hvem er ansvarlig?
          </h2>

          <div className="overflow-x-auto my-8">
            <table className="min-w-full border-collapse border border-gray-300">
              <thead className="bg-gray-100">
                <tr>
                  <th className="border border-gray-300 px-4 py-3 text-left font-semibold">Ansvar</th>
                  <th className="border border-gray-300 px-4 py-3 text-left font-semibold">OTA (Booking/Kiwi)</th>
                  <th className="border border-gray-300 px-4 py-3 text-left font-semibold">Flyselskapet</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td className="border border-gray-300 px-4 py-3">EU261-erstatning (250-600 €)</td>
                  <td className="border border-gray-300 px-4 py-3 text-red-600 font-bold">❌ Ikke ansvarlig</td>
                  <td className="border border-gray-300 px-4 py-3 text-green-600 font-bold">✅ Ansvarlig</td>
                </tr>
                <tr className="bg-gray-50">
                  <td className="border border-gray-300 px-4 py-3">Billettrefusjon ved kansellering</td>
                  <td className="border border-gray-300 px-4 py-3 text-orange-600 font-semibold">⚠️ Kan hjelpe til</td>
                  <td className="border border-gray-300 px-4 py-3 text-green-600 font-bold">✅ Ansvarlig</td>
                </tr>
                <tr>
                  <td className="border border-gray-300 px-4 py-3">Omsorg på flyplassen (mat/hotell)</td>
                  <td className="border border-gray-300 px-4 py-3 text-red-600 font-bold">❌ Ikke ansvarlig</td>
                  <td className="border border-gray-300 px-4 py-3 text-green-600 font-bold">✅ Ansvarlig</td>
                </tr>
                <tr className="bg-gray-50">
                  <td className="border border-gray-300 px-4 py-3">Bookinggebyrer/kanselleringsgebyr</td>
                  <td className="border border-gray-300 px-4 py-3 text-green-600 font-bold">✅ Ansvarlig</td>
                  <td className="border border-gray-300 px-4 py-3 text-red-600 font-bold">❌ Ikke ansvarlig</td>
                </tr>
              </tbody>
            </table>
          </div>

          <h2 className="text-3xl font-bold text-gray-900 mt-12 mb-6">
            Hvordan krever du erstatning når billetten er kjøpt via OTA?
          </h2>

          <p className="text-gray-700 mb-4">
            <strong>Steg 1:</strong> Identifiser det opererende flyselskapet (står på boardingkortet eller e-billetten)
          </p>

          <p className="text-gray-700 mb-4">
            <strong>Steg 2:</strong> Send krav direkte til flyselskapet — IKKE til Booking/Kiwi/Expedia
          </p>

          <p className="text-gray-700 mb-4">
            <strong>Steg 3:</strong> Hvis flyselskapet avviser kravet med «kjøp gjennom tredjepart», vis til EU261 § 3(2) som sier at passasjerrettigheter gjelder uavhengig av billettkanal
          </p>

          <p className="text-gray-700 mb-6">
            <strong>Problem:</strong> Mange OTA-er gir ikke fullstendig flynummer, PNR-kode eller kontaktinfo til flyselskapet, noe som gjør kravprosessen vanskeligere.
          </p>

          <div className="bg-blue-50 border-l-4 border-blue-600 p-6 my-8">
            <h3 className="text-lg font-semibold text-gray-900 mb-2">💡 Sjekk kravet ditt gratis før FAQ</h3>
            <p className="text-gray-700 mb-3">
              Mangler du flynummer eller PNR-kode? <Link href="https://claimwinger.com/no" className="text-blue-600 hover:text-blue-700 font-semibold underline">ClaimWinger identifiserer automatisk flyselskapet basert på booking-e-post</Link> — du trenger bare forwarde bookingbekreftelsen.
            </p>
          </div>

          <h2 className="text-3xl font-bold text-gray-900 mt-12 mb-6">
            Spesifikke problemer med ulike OTA-plattformer
          </h2>

          <h3 className="text-2xl font-semibold text-gray-800 mt-8 mb-4">
            Kiwi.com — «Virtual Interlining» og ansvar
          </h3>

          <p className="text-gray-700 mb-6">
            Kiwi.com selger ofte separate billetter som «én booking» (virtual interlining). Hvis du mister tilkoblingsflyg fordi første fly var forsinket, har du <strong>IKKE</strong> automatisk rett til erstatning fra andre flyselskap — fordi det teknisk sett er to separate bookinger. EU261 gjelder kun hvis begge flyene var booket som én billett hos samme flyselskap.
          </p>

          <h3 className="text-2xl font-semibold text-gray-800 mt-8 mb-4">
            Booking.com — begrenset kundeservice for flykrav
          </h3>

          <p className="text-gray-700 mb-6">
            Booking.com fokuserer primært på hoteller og er kjent for å henvise passasjerer til flyselskapet uten å hjelpe aktivt med EU261-krav. Deres kundeservice kan gi feil informasjon om erstatningsrett.
          </p>

          <h3 className="text-2xl font-semibold text-gray-800 mt-8 mb-4">
            eDreams og Opodo — forsikringspakker som ikke dekker EU261
          </h3>

          <p className="text-gray-700 mb-6">
            Disse OTA-ene selger ofte «Prime» eller «FlexiPay» forsikringspakker som lover «full refusjon» — men disse dekker IKKE EU261-erstatning. Du må fortsatt kreve direkte fra flyselskapet.
          </p>

          <h2 className="text-3xl font-bold text-gray-900 mt-12 mb-6">
            Ofte stilte spørsmål (FAQ)
          </h2>

          <div className="space-y-6">
            <div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">
                Kan jeg kreve fra Booking.com i stedet for flyselskapet?
              </h3>
              <p className="text-gray-700">
                Nei. EU261-ansvaret ligger alltid hos flyselskapet, uavhengig av hvor du kjøpte billetten. Booking.com er kun en billettagent uten juridisk ansvar for flyoperasjoner.
              </p>
            </div>

            <div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">
                Hva hvis jeg ikke finner flynummeret i bookingbekreftelsen?
              </h3>
              <p className="text-gray-700">
                Sjekk e-billetten (e-ticket) som OTA-en sendte deg — flynummer står alltid der. Hvis du fortsatt ikke finner det, kan <Link href="https://claimwinger.com/no" className="text-blue-600 hover:text-blue-700 underline">ClaimWinger identifisere flyselskapet automatisk</Link> basert på booking-e-post.
              </p>
            </div>

            <div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">
                Påvirker OTA-bookinggebyrer EU261-erstatningen?
              </h3>
              <p className="text-gray-700">
                Nei. EU261-erstatningen (250-600 €) er standardisert og uavhengig av billettprisen eller bookinggebyrer. Du har rett til full erstatning selv om billetten kostet mindre.
              </p>
            </div>

            <div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">
                Kan flyselskapet nekte erstatning fordi billetten er kjøpt via OTA?
              </h3>
              <p className="text-gray-700">
                Nei! EU261 § 3(2) sier eksplisitt at passasjerrettigheter gjelder uavhengig av billettkanal. Hvis flyselskapet bruker dette som unnskyldning, eskalerer <Link href="https://claimwinger.com/no" className="text-blue-600 hover:text-blue-700 underline">ClaimWinger automatisk til Forbrukerrådet</Link>.
              </p>
            </div>

            <div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">
                Hvor lang tid har jeg på meg til å kreve?
              </h3>
              <p className="text-gray-700">
                3 år fra flydato i Norge. Les mer: <Link href="/no/blog/hvor-lang-tid-har-jeg-pa-meg-til-a-soke-om-flyerstatning-norge" className="text-blue-600 hover:text-blue-700 underline">Foreldelsesfrist flyerstatning</Link>.
              </p>
            </div>
          </div>

          <h2 className="text-3xl font-bold text-gray-900 mt-12 mb-6">
            Konklusjon
          </h2>

          <p className="text-gray-700 mb-6">
            Billetter kjøpt via OTA-plattformer gir full rett til EU261-erstatning fra flyselskapet. Ikke la OTA-en eller flyselskapet lure deg til å tro noe annet.
          </p>

          <p className="text-gray-700 mb-6">
            <strong>Vårt råd:</strong> La ClaimWinger håndtere kravet automatisk — de identifiserer flyselskapet og tvinger frem betaling uavhengig av booking-kanal. <Link href="https://claimwinger.com/no" className="text-blue-600 hover:text-blue-700 font-medium underline">Start ditt krav gratis her →</Link>
          </p>

          <p className="text-gray-600 text-sm mt-8">
            <strong>Relaterte guider:</strong> <Link href="/no/blog/norwegian-forsinkelse-erstatning-guide" className="text-blue-600 hover:text-blue-700 underline">Norwegian forsinkelseerstatning</Link>, <Link href="/no/blog/hvor-mye-erstatning-forsinket-norwegian-fly" className="text-blue-600 hover:text-blue-700 underline">Hvor mye erstatning for forsinket fly?</Link>, <Link href="/no/blog/hvilke-dokumenter-trenger-jeg-for-a-soke-om-erstatning-forsinket-fly" className="text-blue-600 hover:text-blue-700 underline">Hvilke dokumenter trenger jeg?</Link>
          </p>
        </div>
      </article>
    </LayoutNo>
  );
}
