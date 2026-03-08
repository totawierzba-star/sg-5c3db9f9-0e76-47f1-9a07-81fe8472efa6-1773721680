import { LayoutNo } from "@/components/LayoutNo";
import { SEO } from "@/components/SEO";
import Link from "next/link";

export default function AllInclusiveKansellertFlyErstatning() {
  return (
    <LayoutNo>
      <SEO
        title="All-inclusive-ferie med kansellert fly — hvem krever du erstatning fra?"
        description="All-inclusive pakkereise med kansellert fly? Finn ut hvordan du krever både EU261-erstatning fra flyselskap og prisavslag fra reisearrangør."
        canonical="https://problemlot.pl/no/blog/all-inclusive-kansellert-fly-erstatning"
      />
      <article className="max-w-4xl mx-auto px-4 py-12">
        <header className="mb-8">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">
            All-inclusive-ferie med kansellert fly — hvem krever du erstatning fra?
          </h1>
          <div className="flex items-center gap-4 text-sm text-gray-600">
            <time dateTime="2026-03-08">8. mars 2026</time>
            <span>•</span>
            <span>7 min lesing</span>
            <span>•</span>
            <span className="text-purple-600 font-medium">Pakkereise</span>
          </div>
        </header>

        <div className="prose prose-lg max-w-none">
          <p className="text-xl text-gray-700 leading-relaxed mb-6">
            Du booket en all-inclusive pakkereise til Hellas eller Spania, men flyet ble kansellert. <strong>Hvem skal du kreve erstatning fra?</strong> Mange norske turister tror at reisearrangøren (TUI, Ving, Apollo) håndterer alt — men dette er feil. Du har rett til <strong>to separate erstatninger</strong>: 250-600 € fra flyselskapet under EU261, pluss prisavslag på pakkereisen fra reisearrangøren.
          </p>

          <p className="text-lg text-gray-700 leading-relaxed">
            Denne guiden forklarer nøyaktig hvordan du krever begge erstatninger, hvilke dokumenter du trenger, og hvorfor mange mister pengene sine ved å kun kontakte reisearrangøren.
          </p>

          <div className="bg-blue-50 border-l-4 border-blue-600 p-6 my-8">
            <h3 className="text-lg font-semibold text-gray-900 mb-2">💡 Rask sjekk: Har du rett til dobbel erstatning?</h3>
            <ul className="space-y-2 text-gray-700">
              <li>✅ Pakkereise med all-inclusive (hotell + fly + mat)</li>
              <li>✅ Flyet ble kansellert mindre enn 14 dager før avgang</li>
              <li>✅ Du mistet deler av ferien (tapte hotellnetter)</li>
              <li>✅ Forsinkelsen skyldtes IKKE ekstraordinære omstendigheter</li>
            </ul>
            <p className="mt-4 text-sm text-gray-600">
              Oppfyller du kravene? <Link href="https://claimwinger.com/no/kansellert-fly" className="text-blue-600 hover:text-blue-700 font-semibold underline">La ClaimWinger kreve begge erstatninger →</Link>
            </p>
          </div>

          <h2 className="text-3xl font-bold text-gray-900 mt-12 mb-6">
            To separate erstatninger — ikke bland dem sammen
          </h2>

          <div className="overflow-x-auto my-8">
            <table className="min-w-full border-collapse border border-gray-300">
              <thead className="bg-gray-100">
                <tr>
                  <th className="border border-gray-300 px-4 py-3 text-left font-semibold">Erstatning</th>
                  <th className="border border-gray-300 px-4 py-3 text-left font-semibold">Hvem betaler</th>
                  <th className="border border-gray-300 px-4 py-3 text-left font-semibold">Beløp</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td className="border border-gray-300 px-4 py-3">EU261-erstatning</td>
                  <td className="border border-gray-300 px-4 py-3 font-bold text-green-600">Flyselskapet</td>
                  <td className="border border-gray-300 px-4 py-3">250-600 €</td>
                </tr>
                <tr className="bg-gray-50">
                  <td className="border border-gray-300 px-4 py-3">Prisavslag på pakkereise</td>
                  <td className="border border-gray-300 px-4 py-3 font-bold text-blue-600">Reisearrangør (TUI/Ving)</td>
                  <td className="border border-gray-300 px-4 py-3">5-25% av pakkepris</td>
                </tr>
              </tbody>
            </table>
          </div>

          <h2 className="text-3xl font-bold text-gray-900 mt-12 mb-6">
            Hvordan krever du EU261-erstatning fra flyselskapet?
          </h2>

          <p className="text-gray-700 mb-4">
            <strong>Steg 1:</strong> Identifiser hvilket flyselskap som opererte flyet (står på boardingkortet eller bookingbekreftelsen)
          </p>

          <p className="text-gray-700 mb-4">
            <strong>Steg 2:</strong> Send krav direkte til flyselskapet — IKKE til TUI/Ving/Apollo
          </p>

          <p className="text-gray-700 mb-6">
            <strong>Steg 3:</strong> Hvis flyselskapet ikke svarer innen 30 dager, bruk <Link href="https://claimwinger.com/no/kansellert-fly" className="text-blue-600 hover:text-blue-700 font-semibold underline">ClaimWinger</Link> for juridisk press
          </p>

          <div className="bg-blue-50 border-l-4 border-blue-600 p-6 my-8">
            <h3 className="text-lg font-semibold text-gray-900 mb-2">💡 Sjekk kravet ditt gratis før FAQ</h3>
            <p className="text-gray-700 mb-3">
              Trenger du hjelp til å identifisere flyselskapet? <Link href="https://claimwinger.com/no/kansellert-fly" className="text-blue-600 hover:text-blue-700 font-semibold underline">La ClaimWinger analysere bookingen din gratis</Link> — de krever automatisk fra riktig aktør.
            </p>
          </div>

          <h2 className="text-3xl font-bold text-gray-900 mt-12 mb-6">
            Ofte stilte spørsmål (FAQ)
          </h2>

          <div className="space-y-6">
            <div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">
                Kan jeg kreve både EU261 og prisavslag samtidig?
              </h3>
              <p className="text-gray-700">
                Ja! Dette er to separate krav under ulike lover. EU261-erstatningen fra flyselskapet påvirker ikke retten til prisavslag fra reisearrangøren.
              </p>
            </div>

            <div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">
                Hva hvis TUI/Ving tilbyr voucher i stedet for penger?
              </h3>
              <p className="text-gray-700">
                Du har rett til kontanter. Aldri aksepter voucher som erstatning for EU261-krav. Reisearrangøren kan tilby voucher for prisavslag, men du kan kreve penger i stedet.
              </p>
            </div>

            <div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">
                Hvor mye prisavslag kan jeg kreve fra reisearrangøren?
              </h3>
              <p className="text-gray-700">
                Avhenger av hvor mye av ferien du mistet. Typisk 5-25% av totalpris for tapte hotellnetter og redusert reiseopplevelse. Les mer: <Link href="/no/blog/charterfly-norge-erstatning-flyselskap-reisearrangor" className="text-blue-600 hover:text-blue-700 underline">Charter erstatning</Link>.
              </p>
            </div>

            <div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">
                Hvor lang tid har jeg på meg til å kreve?
              </h3>
              <p className="text-gray-700">
                EU261: 3 år fra flydato. Prisavslag fra reisearrangør: Vanligvis 1-2 år avhengig av vilkår. Les mer: <Link href="/no/blog/hvor-lang-tid-har-jeg-pa-meg-til-a-soke-om-flyerstatning-norge" className="text-blue-600 hover:text-blue-700 underline">Foreldelsesfrist</Link>.
              </p>
            </div>
          </div>

          <h2 className="text-3xl font-bold text-gray-900 mt-12 mb-6">
            Konklusjon
          </h2>

          <p className="text-gray-700 mb-6">
            All-inclusive pakkereiser gir rett til dobbel erstatning: EU261 fra flyselskap + prisavslag fra reisearrangør. Ikke la deg lure til å kun kreve fra én aktør.
          </p>

          <p className="text-gray-700 mb-6">
            <strong>Vårt råd:</strong> La ClaimWinger håndtere begge krav samtidig. <Link href="https://claimwinger.com/no/kansellert-fly" className="text-blue-600 hover:text-blue-700 font-medium underline">Start ditt krav gratis her →</Link>
          </p>

          <p className="text-gray-600 text-sm mt-8">
            <strong>Relaterte guider:</strong> <Link href="/no/blog/norwegian-forsinkelse-erstatning-guide" className="text-blue-600 hover:text-blue-700 underline">Norwegian forsinkelseerstatning</Link>, <Link href="/no/blog/hvor-mye-erstatning-kansellert-fly-norge" className="text-blue-600 hover:text-blue-700 underline">Hvor mye erstatning?</Link>
          </p>
        </div>
      </article>
    </LayoutNo>
  );
}