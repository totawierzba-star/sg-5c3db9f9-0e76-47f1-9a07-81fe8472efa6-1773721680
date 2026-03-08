import { LayoutNo } from "@/components/LayoutNo";
import { SEO } from "@/components/SEO";
import Link from "next/link";

export default function GruppebestillingFellesErstatningskrav() {
  return (
    <LayoutNo>
      <SEO
        title="Gruppebestilling og felles erstatningskrav — hvordan går det til?"
        description="Reiste dere som gruppe og flyet ble forsinket? Slik krever alle passasjerer erstatning sammen — komplett guide til gruppekrav under EU261."
        canonical="https://problemlot.pl/no/blog/gruppebestilling-felles-erstatningskrav"
      />
      <article className="max-w-4xl mx-auto px-4 py-12">
        <header className="mb-8">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">
            Gruppebestilling og felles erstatningskrav — hvordan går det til?
          </h1>
          <div className="flex items-center gap-4 text-sm text-gray-600">
            <time dateTime="2026-03-08">8. mars 2026</time>
            <span>•</span>
            <span>7 min lesing</span>
            <span>•</span>
            <span className="text-purple-600 font-medium">Gruppe</span>
          </div>
        </header>

        <div className="prose prose-lg max-w-none">
          <p className="text-xl text-gray-700 leading-relaxed mb-6">
            Dere reiste som gruppe (familie, venner, forening) og flyet var forsinket eller kansellert. <strong>Kan dere kreve erstatning sammen?</strong> Mange norske gruppereisende tror at gruppebookinger har andre regler enn enkeltbilletter — men dette er feil. <strong>Hver passasjer har individuell rett til 250-600 € erstatning</strong> under EU261, uavhengig av om billettene ble kjøpt som én booking eller separat.
          </p>

          <p className="text-lg text-gray-700 leading-relaxed">
            Denne guiden forklarer nøyaktig hvordan grupper kan effektivt kreve erstatning sammen, hvilke dokumenter dere trenger, og hvordan dere maksimerer sjansene for rask utbetaling.
          </p>

          <div className="bg-blue-50 border-l-4 border-blue-600 p-6 my-8">
            <h3 className="text-lg font-semibold text-gray-900 mb-2">💡 Rask sjekk: Har gruppen rett til erstatning?</h3>
            <ul className="space-y-2 text-gray-700">
              <li>✅ Flyet var 3+ timer forsinket eller kansellert</li>
              <li>✅ Avgangen var fra et europeisk flyplass (inkl. Norge)</li>
              <li>✅ Alle passasjerer var på samme fly og booking</li>
              <li>✅ Forsinkelsen skyldtes IKKE ekstraordinære omstendigheter</li>
            </ul>
            <p className="mt-4 text-sm text-gray-600">
              Oppfyller dere kravene? <Link href="https://claimwinger.com/no" className="text-blue-600 hover:text-blue-700 font-semibold underline">La ClaimWinger håndtere gruppekravet for alle →</Link>
            </p>
          </div>

          <h2 className="text-3xl font-bold text-gray-900 mt-12 mb-6">
            Individuell rett vs. felles krav
          </h2>

          <p className="text-gray-700 mb-4">
            <strong>Viktig juridisk faktum:</strong> EU261-retten er <strong>individuell</strong> — hver passasjer har selvstendig krav mot flyselskapet. Men dere kan samordne kravprosessen for å spare tid og styrke forhandlingsposisjonen.
          </p>

          <div className="overflow-x-auto my-8">
            <table className="min-w-full border-collapse border border-gray-300">
              <thead className="bg-gray-100">
                <tr>
                  <th className="border border-gray-300 px-4 py-3 text-left font-semibold">Kravmetode</th>
                  <th className="border border-gray-300 px-4 py-3 text-left font-semibold">Fordeler</th>
                  <th className="border border-gray-300 px-4 py-3 text-left font-semibold">Ulemper</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td className="border border-gray-300 px-4 py-3">Hver person sender separat krav</td>
                  <td className="border border-gray-300 px-4 py-3">Enklest juridisk</td>
                  <td className="border border-gray-300 px-4 py-3">Tidkrevende, duplisering</td>
                </tr>
                <tr className="bg-gray-50">
                  <td className="border border-gray-300 px-4 py-3">Én person sender felles krav på vegne av gruppen</td>
                  <td className="border border-gray-300 px-4 py-3">Raskere prosess</td>
                  <td className="border border-gray-300 px-4 py-3">Krever fullmakt fra alle</td>
                </tr>
                <tr>
                  <td className="border border-gray-300 px-4 py-3">Bruke ClaimWinger for hele gruppen</td>
                  <td className="border border-gray-300 px-4 py-3">Profesjonell håndtering, høyest suksessrate</td>
                  <td className="border border-gray-300 px-4 py-3">25% provisjon (kun ved suksess)</td>
                </tr>
              </tbody>
            </table>
          </div>

          <h2 className="text-3xl font-bold text-gray-900 mt-12 mb-6">
            Hvordan sender dere felles gruppekrav?
          </h2>

          <p className="text-gray-700 mb-4">
            <strong>Steg 1:</strong> Velg én gruppeleder som koordinerer kravprosessen
          </p>

          <p className="text-gray-700 mb-4">
            <strong>Steg 2:</strong> Samle dokumentasjon fra alle passasjerer:
          </p>

          <ul className="list-disc list-inside space-y-2 text-gray-700 mb-6">
            <li>Boardingkort for alle passasjerer</li>
            <li>Bookingbekreftelse med alle navn og PNR-kode</li>
            <li>Dokumentasjon på forsinkelse (gate-display foto, e-post fra flyselskap)</li>
            <li>Fullmakt fra hver passasjer til gruppelederer</li>
          </ul>

          <p className="text-gray-700 mb-4">
            <strong>Steg 3:</strong> Send ett felles brev til flyselskapet med liste over alle passasjerer og deres kontaktinfo
          </p>

          <p className="text-gray-700 mb-6">
            <strong>Steg 4:</strong> Be om separat utbetaling til hver passasjers bankkonto (ikke én felles utbetaling)
          </p>

          <div className="bg-blue-50 border-l-4 border-blue-600 p-6 my-8">
            <h3 className="text-lg font-semibold text-gray-900 mb-2">💡 Sjekk kravet ditt gratis før FAQ</h3>
            <p className="text-gray-700 mb-3">
              Mangler fullmakter eller koordinering? <Link href="https://claimwinger.com/no" className="text-blue-600 hover:text-blue-700 font-semibold underline">ClaimWinger håndterer alt papirarbeid automatisk</Link> — hver passasjer registrerer seg enkelt via lenke, og systemet sender koordinerte krav til flyselskapet.
            </p>
          </div>

          <h2 className="text-3xl font-bold text-gray-900 mt-12 mb-6">
            Spesielle situasjoner for gruppereiser
          </h2>

          <h3 className="text-2xl font-semibold text-gray-800 mt-8 mb-4">
            Firmareiser og forretningsbilletter
          </h3>

          <p className="text-gray-700 mb-6">
            Hvis firmaet betalte billetten, har <strong>passasjeren</strong> fortsatt rett til erstatningen — ikke firmaet. Flyselskapet må betale til passasjerens personlige konto med mindre passasjeren skriftlig har overført retten til firmaet. Les mer: <Link href="/no/blog/vem-far-ersattningen-resenaren-eller-researrangor" className="text-blue-600 hover:text-blue-700 underline">Hvem får erstatningen?</Link>
          </p>

          <h3 className="text-2xl font-semibold text-gray-800 mt-8 mb-4">
            Familier med barn
          </h3>

          <p className="text-gray-700 mb-6">
            Barn under 18 år har samme rett til erstatning som voksne. Foreldrene kan kreve på vegne av barna uten separate fullmakter. Spedbarn (<2 år) uten egen sitteplass har IKKE rett til erstatning.
          </p>

          <h3 className="text-2xl font-semibold text-gray-800 mt-8 mb-4">
            Gruppereiser booket gjennom reisebyrå
          </h3>

          <p className="text-gray-700 mb-6">
            EU261-ansvaret ligger hos flyselskapet, IKKE hos reisebyrået. Dere må kreve direkte fra flyselskapet. Les mer: <Link href="/no/blog/charterfly-norge-erstatning-flyselskap-reisearrangor" className="text-blue-600 hover:text-blue-700 underline">Charter erstatning</Link>.
          </p>

          <h2 className="text-3xl font-bold text-gray-900 mt-12 mb-6">
            Ofte stilte spørsmål (FAQ)
          </h2>

          <div className="space-y-6">
            <div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">
                Må alle passasjerer signere samme krav?
              </h3>
              <p className="text-gray-700">
                Nei. Hver passasjer kan sende separat krav, men koordinert gruppekrav med fullmakter er raskere og mer effektivt.
              </p>
            </div>

            <div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">
                Får vi mer erstatning hvis vi krever som gruppe?
              </h3>
              <p className="text-gray-700">
                Nei. Erstatningsbeløpet (250-600 €) er fastsatt per passasjer uavhengig av gruppestørrelse. Men gruppekrav kan øke presset på flyselskapet til å betale raskere.
              </p>
            </div>

            <div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">
                Hva hvis én passasjer i gruppen allerede har mottatt erstatning?
              </h3>
              <p className="text-gray-700">
                De andre passasjerene kan fortsatt kreve individuelt. Én passasjers utbetaling påvirker ikke de andres rett.
              </p>
            </div>

            <div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">
                Kan vi bruke én felles bankkonto for utbetaling?
              </h3>
              <p className="text-gray-700">
                Teknisk sett ja, men de fleste flyselskaper foretrekker separat utbetaling til hver passasjer for å unngå skattemessige komplikasjoner. Anbefalt: Be om individuell utbetaling.
              </p>
            </div>

            <div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">
                Hvor lang tid har vi på oss til å kreve?
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
            Gruppereiser gir hver passasjer individuell rett til erstatning. Koordinert gruppekrav med fullmakter sparer tid og styrker forhandlingsposisjonen.
          </p>

          <p className="text-gray-700 mb-6">
            <strong>Vårt råd:</strong> La ClaimWinger håndtere hele gruppekravet automatisk — de har spesialløsning for grupper med enkel registrering og koordinert utbetaling. <Link href="https://claimwinger.com/no" className="text-blue-600 hover:text-blue-700 font-medium underline">Start gruppekravet gratis her →</Link>
          </p>

          <p className="text-gray-600 text-sm mt-8">
            <strong>Relaterte guider:</strong> <Link href="/no/blog/norwegian-forsinkelse-erstatning-guide" className="text-blue-600 hover:text-blue-700 underline">Norwegian forsinkelseerstatning</Link>, <Link href="/no/blog/hvilke-dokumenter-trenger-jeg-for-a-soke-om-erstatning-forsinket-fly" className="text-blue-600 hover:text-blue-700 underline">Hvilke dokumenter trenger jeg?</Link>
          </p>
        </div>
      </article>
    </LayoutNo>
  );
}