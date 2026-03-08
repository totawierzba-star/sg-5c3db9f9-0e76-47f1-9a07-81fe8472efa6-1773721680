import { LayoutNo } from "@/components/LayoutNo";
import { SEO } from "@/components/SEO";
import Link from "next/link";

export default function MistetTilkoblingsflygFrankfurtWien() {
  return (
    <LayoutNo>
      <SEO
        title="Mistet tilkoblingsflyg i Frankfurt eller Wien — hvem betaler erstatningen?"
        description="Mistet tilkoblingsflyg i Frankfurt, München eller Wien? Få 250-600 € erstatning når første fly er forsinket. Komplett guide for norske passasjerer."
        canonical="https://problemlot.pl/no/blog/mistet-tilkoblingsflyg-frankfurt-wien"
      />
      <article className="max-w-4xl mx-auto px-4 py-12">
        <header className="mb-8">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">
            Mistet tilkoblingsflyg i Frankfurt eller Wien — hvem betaler erstatningen?
          </h1>
          <div className="flex items-center gap-4 text-sm text-gray-600">
            <time dateTime="2026-03-08">8. mars 2026</time>
            <span>•</span>
            <span>8 min lesing</span>
            <span>•</span>
            <span className="text-purple-600 font-medium">Tilkoblingsflyg</span>
          </div>
        </header>

        <div className="prose prose-lg max-w-none">
          <p className="text-xl text-gray-700 leading-relaxed mb-6">
            Du flyr Oslo–Frankfurt–New York, men første fly er forsinket og du mister tilkoblingsflyg i Frankfurt. <strong>Hvem er ansvarlig?</strong> Mange norske passasjerer tror at de kun har rett til omsorg på flyplassen — men dette er feil. Hvis du bestilte begge flyene som én booking, har du <strong>full rett til 250-600 € erstatning</strong> fra det første flyselskapet hvis total forsinkelse ved endelig destinasjon er 3+ timer.
          </p>

          <p className="text-lg text-gray-700 leading-relaxed">
            Denne guiden forklarer nøyaktig når du har rett til erstatning ved mistede tilkoblingsflyg i Frankfurt, München, Wien og andre europeiske hub-er.
          </p>

          <div className="bg-blue-50 border-l-4 border-blue-600 p-6 my-8">
            <h3 className="text-lg font-semibold text-gray-900 mb-2">💡 Rask sjekk: Har du rett til erstatning?</h3>
            <ul className="space-y-2 text-gray-700">
              <li>✅ Begge flyene var booket som én booking (samme PNR-nummer)</li>
              <li>✅ Første fly var forsinket → mistet tilkoblingsflyg</li>
              <li>✅ Total forsinkelse ved endelig destinasjon: 3+ timer</li>
              <li>✅ Forsinkelsen skyldtes IKKE ekstraordinære omstendigheter</li>
            </ul>
            <p className="mt-4 text-sm text-gray-600">
              Oppfyller du kravene? <Link href="https://claimwinger.com/no/forsinket-fly" className="text-blue-600 hover:text-blue-700 font-semibold underline">La ClaimWinger kreve erstatning for deg →</Link>
            </p>
          </div>

          <h2 className="text-3xl font-bold text-gray-900 mt-12 mb-6">
            Hvordan beregnes erstatning ved mistede tilkoblingsflyg?
          </h2>

          <p className="text-gray-700 mb-4">
            Erstatningen beregnes basert på <strong>total flydistanse</strong> fra opprinnelig avgang til endelig destinasjon, IKKE bare første flystrekning.
          </p>

          <div className="overflow-x-auto my-8">
            <table className="min-w-full border-collapse border border-gray-300">
              <thead className="bg-gray-100">
                <tr>
                  <th className="border border-gray-300 px-4 py-3 text-left font-semibold">Total distanse</th>
                  <th className="border border-gray-300 px-4 py-3 text-left font-semibold">Erstatning</th>
                  <th className="border border-gray-300 px-4 py-3 text-left font-semibold">Eksempel</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td className="border border-gray-300 px-4 py-3">Opptil 1500 km</td>
                  <td className="border border-gray-300 px-4 py-3 font-bold text-green-600">250 €</td>
                  <td className="border border-gray-300 px-4 py-3">Oslo–Frankfurt–Zürich</td>
                </tr>
                <tr className="bg-gray-50">
                  <td className="border border-gray-300 px-4 py-3">1500–3500 km</td>
                  <td className="border border-gray-300 px-4 py-3 font-bold text-green-600">400 €</td>
                  <td className="border border-gray-300 px-4 py-3">Oslo–Frankfurt–Istanbul</td>
                </tr>
                <tr>
                  <td className="border border-gray-300 px-4 py-3">Over 3500 km</td>
                  <td className="border border-gray-300 px-4 py-3 font-bold text-green-600">600 €</td>
                  <td className="border border-gray-300 px-4 py-3">Oslo–Frankfurt–New York</td>
                </tr>
              </tbody>
            </table>
          </div>

          <h2 className="text-3xl font-bold text-gray-900 mt-12 mb-6">
            Når har du IKKE rett til erstatning?
          </h2>

          <ul className="list-disc list-inside space-y-2 text-gray-700 mb-6">
            <li><strong>Separate bookinger:</strong> Hvis du kjøpte Oslo–Frankfurt og Frankfurt–New York som to separate billetter</li>
            <li><strong>Ekstraordinære omstendigheter:</strong> Ekstremvær, ATC-streik, sikkerhetstrusler</li>
            <li><strong>For kort mellomlandingstid:</strong> Hvis du booket tilkoblingsflyg med mindre enn anbefalt minimum mellomlandingstid</li>
          </ul>

          <h2 className="text-3xl font-bold text-gray-900 mt-12 mb-6">
            Hvordan krever du erstatning?
          </h2>

          <p className="text-gray-700 mb-4">
            Du krever erstatning fra <strong>det opererende flyselskapet på første fly</strong> (det som var forsinket), ikke fra flyselskapet på tilkoblingsflyet.
          </p>

          <h3 className="text-2xl font-semibold text-gray-800 mt-8 mb-4">
            Eksempel: Oslo–Frankfurt (Lufthansa) → Frankfurt–New York (United)
          </h3>

          <p className="text-gray-700 mb-6">
            Hvis Lufthansa-flyet Oslo–Frankfurt var forsinket og du mistet United-flyet til New York, krever du erstatning fra <strong>Lufthansa</strong>, ikke United.
          </p>

          <div className="bg-blue-50 border-l-4 border-blue-600 p-6 my-8">
            <h3 className="text-lg font-semibold text-gray-900 mb-2">💡 Sjekk kravet ditt gratis før FAQ</h3>
            <p className="text-gray-700 mb-3">
              Vet du ikke hvem du skal kreve fra? <Link href="https://claimwinger.com/no/forsinket-fly" className="text-blue-600 hover:text-blue-700 font-semibold underline">La ClaimWinger analysere kravet ditt gratis</Link> — de identifiserer automatisk riktig flyselskap.
            </p>
          </div>

          <h2 className="text-3xl font-bold text-gray-900 mt-12 mb-6">
            Ofte stilte spørsmål (FAQ)
          </h2>

          <div className="space-y-6">
            <div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">
                Hvem er ansvarlig hvis jeg mistet tilkoblingsflyg?
              </h3>
              <p className="text-gray-700">
                Det opererende flyselskapet på første fly (det som var forsinket). Hvis begge flyene var booket som én booking, er første flyselskap ansvarlig for hele reisen.
              </p>
            </div>

            <div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">
                Hva hvis jeg kjøpte separate billetter?
              </h3>
              <p className="text-gray-700">
                Da har du IKKE rett til erstatning for mistet tilkoblingsflyg. Du må kreve refusjon av ubrukt billett fra andre flyselskap separat.
              </p>
            </div>

            <div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">
                Dekker flyselskapet hotell ved mistet tilkoblingsflyg?
              </h3>
              <p className="text-gray-700">
                Ja! Første flyselskap må dekke hotell, transport og måltider hvis du må overnatte. Dette kommer i tillegg til 250-600 € erstatning.
              </p>
            </div>

            <div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">
                Hvor lang tid har jeg på meg til å kreve?
              </h3>
              <p className="text-gray-700">
                I Norge har du 3 års foreldelsesfrist fra flydato. Les mer: <Link href="/no/blog/hvor-lang-tid-har-jeg-pa-meg-til-a-soke-om-flyerstatning-norge" className="text-blue-600 hover:text-blue-700 underline">Foreldelsesfrist flyerstatning</Link>.
              </p>
            </div>
          </div>

          <h2 className="text-3xl font-bold text-gray-900 mt-12 mb-6">
            Konklusjon
          </h2>

          <p className="text-gray-700 mb-6">
            Mistede tilkoblingsflyg er dekket av EU261 hvis begge flyene var booket som én booking. Du har rett til 250-600 € erstatning basert på total distanse.
          </p>

          <p className="text-gray-700 mb-6">
            <strong>Vårt råd:</strong> La ClaimWinger analysere kravet ditt og identifisere riktig flyselskap automatisk. <Link href="https://claimwinger.com/no/forsinket-fly" className="text-blue-600 hover:text-blue-700 font-medium underline">Start ditt krav gratis her →</Link>
          </p>

          <p className="text-gray-600 text-sm mt-8">
            <strong>Relaterte guider:</strong> <Link href="/no/blog/norwegian-forsinkelse-erstatning-guide" className="text-blue-600 hover:text-blue-700 underline">Norwegian forsinkelseerstatning</Link>, <Link href="/no/blog/sas-mistet-tilkoblingsflyg-hvem-betaler" className="text-blue-600 hover:text-blue-700 underline">SAS mistet tilkoblingsflyg</Link>, <Link href="/no/blog/lufthansa-forsinkelse-norge-eu261" className="text-blue-600 hover:text-blue-700 underline">Lufthansa forsinkelse fra Norge</Link>
          </p>
        </div>
      </article>
    </LayoutNo>
  );
}