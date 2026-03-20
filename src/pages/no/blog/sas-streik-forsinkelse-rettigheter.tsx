import { LayoutNo } from "@/components/LayoutNo";
import { SEO } from "@/components/SEO";
import Link from "next/link";

export default function SASStreikForsinkelseRettigheter() {
  return (
    <LayoutNo>
      <SEO
        title="SAS streik og forsinkelse — dine rettigheter i henhold til EU261"
        description="SAS hevder streik er ekstraordinært? Lær forskjellen mellom SAS-streik (du får erstatning) og ATC-streik (ekstraordinært). Komplett guide."
        canonicalUrl="https://problemlot.pl/no/blog/sas-streik-forsinkelse-rettigheter"
      />
      <article className="max-w-4xl mx-auto px-4 py-12">
        <header className="mb-8">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">
            SAS streik og forsinkelse — dine rettigheter i henhold til EU261
          </h1>
          <div className="flex items-center gap-4 text-sm text-gray-600">
            <time dateTime="2026-03-08">8. mars 2026</time>
            <span>•</span>
            <span>9 min lesing</span>
            <span>•</span>
            <span className="text-yellow-600 font-medium">SAS</span>
          </div>
        </header>

        <div className="prose prose-lg max-w-none">
          <p className="text-xl text-gray-700 leading-relaxed mb-6">
            Fikk flyet ditt forsinkelse eller ble kansellert på grunn av SAS-streik? SAS hevder ofte at <strong>alle streiker er ekstraordinære omstendigheter</strong> som fritar dem fra å betale 250-600 € i kompensasjon. Men dette er <strong>juridisk feil</strong> — EU261 og EØS-avtalen skiller mellom interne streiker (flyselskapets ansvar) og eksterne streiker (som flygelederstreik).
          </p>

          <p className="text-lg text-gray-700 leading-relaxed">
            Denne guiden forklarer når SAS <strong>MÅ betale</strong> erstatning under streik, og hvordan du unngår å bli lurt av deres unnskyldninger.
          </p>

          <div className="bg-blue-50 border-l-4 border-blue-600 p-6 my-8">
            <h3 className="text-lg font-semibold text-gray-900 mb-2">💡 Rask sjekk: Har du rett til erstatning?</h3>
            <p className="text-gray-700 mb-4">
              Hvis SAS-ansatte (piloter, kabinpersonell, bakkemannskap) streiket → <strong>JA, du har rett til 250-600 €</strong><br/>
              Hvis flyvekontrollører eller sikkerhetspersonell (utenfor SAS) streiket → <strong>NEI, ekstraordinært</strong>
            </p>
            <p className="text-sm text-gray-600">
              Usikker på hvilken type streik det var? <Link href="https://claimwinger.com/no/forsinket-fly" className="text-blue-600 hover:text-blue-700 font-semibold underline">La ClaimWinger sjekke kravet ditt gratis →</Link>
            </p>
          </div>

          <h2 className="text-3xl font-bold text-gray-900 mt-12 mb-6">
            Forskjellen mellom interne og eksterne streiker
          </h2>

          <p className="text-gray-700 mb-4">
            EU261/EØS-avtalen gir ikke automatisk fritak for erstatning ved streik. Det avhenger av <strong>hvem som streiker</strong>:
          </p>

          <h3 className="text-2xl font-semibold text-gray-800 mt-8 mb-4">
            Interne streiker (SAS sitt ansvar)
          </h3>

          <p className="text-gray-700 mb-4">
            Hvis <strong>SAS sine egne ansatte</strong> streiker, er dette flyselskapets problem og de må betale erstatning:
          </p>

          <ul className="list-disc list-inside space-y-2 text-gray-700 mb-6">
            <li>✅ Pilotstreik (SAS piloter)</li>
            <li>✅ Kabinpersonellstreik (SAS flyvertinner/stewarder)</li>
            <li>✅ Bakkemannskap streik (SAS ground crew)</li>
            <li>✅ Vedlikeholdstekniker streik (SAS mechanics)</li>
          </ul>

          <p className="text-gray-700 mb-6">
            <strong>Juridisk begrunnelse:</strong> Arbeidsforhold er en <strong>normal driftsrisiko</strong> som flyselskaper må håndtere gjennom gode lønnsavtaler og reserveløsninger.
          </p>

          <h3 className="text-2xl font-semibold text-gray-800 mt-8 mb-4">
            Eksterne streiker (ekstraordinære omstendigheter)
          </h3>

          <p className="text-gray-700 mb-4">
            Hvis personer <strong>utenfor SAS sin kontroll</strong> streiker, kan dette være ekstraordinært:
          </p>

          <ul className="list-disc list-inside space-y-2 text-gray-700 mb-6">
            <li>❌ Flygelederstreik (ATC — Avinor eller Eurocontrol)</li>
            <li>❌ Sikkerhetspersonellstreik (utenfor SAS)</li>
            <li>❌ Havnarbeiderstreik (påvirker bagasje/drivstoff)</li>
            <li>❌ Toll- eller grensekontrollstreik</li>
          </ul>

          <div className="bg-yellow-50 border-l-4 border-yellow-600 p-6 my-8">
            <h3 className="text-lg font-semibold text-gray-900 mb-2">⚠️ SAS sin vanlige løgn</h3>
            <p className="text-gray-700">
              SAS sender ofte avslag som bare sier «streik» uten å spesifisere hvem som streiket. Dette er <strong>bevisst vagt</strong> for å få deg til å tro det var ekstraordinært. <strong>Krev dokumentasjon</strong> på hvilken type streik det var!
            </p>
          </div>

          <h2 className="text-3xl font-bold text-gray-900 mt-12 mb-6">
            EU-domstolens avgjørelser om streik
          </h2>

          <p className="text-gray-700 mb-4">
            EU-domstolen har vært klar på at <strong>interne streiker ikke fritar flyselskaper fra kompensasjon</strong>:
          </p>

          <div className="bg-gray-50 p-6 rounded-lg my-6">
            <h3 className="text-xl font-semibold text-gray-900 mb-3">⚖️ EU-domstolen sak C-195/17 (Krüsemann)</h3>
            <p className="text-gray-700 mb-3">
              <strong>«Streik blant kabinpersonell er IKKE en ekstraordinær omstendighet.»</strong>
            </p>
            <p className="text-gray-700">
              Flyselskaper må håndtere arbeidsforhold som en del av normal drift. De kan ikke unngå kompensasjon ved å hevde at egne ansatte streiket.
            </p>
          </div>

          <h2 className="text-3xl font-bold text-gray-900 mt-12 mb-6">
            Hvor mye erstatning har du rett til?
          </h2>

          <p className="text-gray-700 mb-6">
            Hvis SAS-ansatte streiket og du ankom <strong>3+ timer forsinket</strong> eller flyet ble kansellert, har du rett til:
          </p>

          <div className="overflow-x-auto my-8">
            <table className="min-w-full border-collapse border border-gray-300">
              <thead className="bg-gray-100">
                <tr>
                  <th className="border border-gray-300 px-4 py-3 text-left font-semibold">Flydistanse</th>
                  <th className="border border-gray-300 px-4 py-3 text-left font-semibold">Erstatning</th>
                  <th className="border border-gray-300 px-4 py-3 text-left font-semibold">Eksempel rute</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td className="border border-gray-300 px-4 py-3">Opptil 1500 km</td>
                  <td className="border border-gray-300 px-4 py-3 font-bold text-green-600">250 €</td>
                  <td className="border border-gray-300 px-4 py-3">Oslo–København, Oslo–Stockholm</td>
                </tr>
                <tr className="bg-gray-50">
                  <td className="border border-gray-300 px-4 py-3">1500–3500 km</td>
                  <td className="border border-gray-300 px-4 py-3 font-bold text-green-600">400 €</td>
                  <td className="border border-gray-300 px-4 py-3">Oslo–London, Oslo–Paris</td>
                </tr>
                <tr>
                  <td className="border border-gray-300 px-4 py-3">Over 3500 km</td>
                  <td className="border border-gray-300 px-4 py-3 font-bold text-green-600">600 €</td>
                  <td className="border border-gray-300 px-4 py-3">Oslo–New York, Oslo–Bangkok</td>
                </tr>
              </tbody>
            </table>
          </div>

          <p className="text-gray-700 mb-6">
            <strong>PLUSS:</strong> Hvis SAS ikke tilbød omsorg (mat, hotell, transport), kan du kreve refusjon av utgifter i tillegg til erstatningen.
          </p>

          <h2 className="text-3xl font-bold text-gray-900 mt-12 mb-6">
            Hvordan beviser du at det var en intern streik?
          </h2>

          <p className="text-gray-700 mb-4">
            Når SAS sender deg avslag som sier «streik», må du kreve detaljer:
          </p>

          <ol className="list-decimal list-inside space-y-3 text-gray-700 mb-6">
            <li><strong>Be om skriftlig dokumentasjon</strong> på hvilken type streik det var</li>
            <li><strong>Sjekk nyhetsmeldinger</strong> — SAS-piloter og kabinpersonell streiker er offentlige</li>
            <li><strong>Bruk Flightradar24</strong> — hvis bare SAS-fly var rammet, var det intern streik</li>
            <li><strong>Sammenlign med andre flyselskaper</strong> — hvis Norwegian og Ryanair fløy normalt, var det SAS-spesifikt</li>
          </ol>

          <div className="bg-green-50 border-l-4 border-green-600 p-6 my-8">
            <h3 className="text-lg font-semibold text-gray-900 mb-2">✅ ClaimWinger gjør dette automatisk</h3>
            <p className="text-gray-700 mb-3">
              ClaimWinger har tilgang til historiske flydata og nyhetsmeldinger. De kan bevise om streiken var intern eller ekstern, og tvinge SAS til å betale hvis de lyver om årsaken.
            </p>
            <p className="text-sm text-gray-600">
              <Link href="https://claimwinger.com/no/forsinket-fly" className="text-blue-600 hover:text-blue-700 font-semibold underline">Start ditt krav gratis her →</Link>
            </p>
          </div>

          <h2 className="text-3xl font-bold text-gray-900 mt-12 mb-6">
            Hva hvis SAS nekter å dokumentere streiken?
          </h2>

          <p className="text-gray-700 mb-4">
            Hvis SAS ignorerer din forespørsel om dokumentasjon, er dette et <strong>rødt flagg</strong> som indikerer at de prøver å skjule at det var en intern streik.
          </p>

          <h3 className="text-2xl font-semibold text-gray-800 mt-8 mb-4">
            Steg du kan ta:
          </h3>

          <ol className="list-decimal list-inside space-y-3 text-gray-700 mb-6">
            <li><strong>Send oppfølgingsmail</strong> med spesifikk forespørsel: «Jeg krever skriftlig dokumentasjon på hvilken organisasjon som streiket og hvorfor dette kvalifiserer som ekstraordinær omstendighet.»</li>
            <li><strong>Sett 14-dagers frist</strong> for svar</li>
            <li><strong>Klage til Forbrukerrådet</strong> hvis de fortsatt nekter</li>
            <li><strong>Bruk ClaimWinger</strong> som tar juridisk ansvar og presser SAS</li>
          </ol>

          <h2 className="text-3xl font-bold text-gray-900 mt-12 mb-6">
            Ofte stilte spørsmål (FAQ)
          </h2>

          <div className="space-y-6">
            <div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">
                Hva hvis SAS sier «villige streik» i stedet for «våre ansatte»?
              </h3>
              <p className="text-gray-700">
                «Villige streik» betyr at ansatte nekter å jobbe (wildcat strike). Dette er fortsatt en <strong>intern streik</strong> som SAS er ansvarlig for. De må betale erstatning.
              </p>
            </div>

            <div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">
                Kan SAS unngå erstatning hvis de varslet om streiken på forhånd?
              </h3>
              <p className="text-gray-700">
                Nei! Selv om SAS varslet deg 14+ dager før, må de fortsatt betale hvis det var en <strong>intern streik</strong>. Varslingstid gjelder bare for ekstraordinære omstendigheter.
              </p>
            </div>

            <div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">
                Hva hvis streiken påvirket andre flyselskaper også?
              </h3>
              <p className="text-gray-700">
                Hvis både SAS, Norwegian og Ryanair måtte kansellere fly samtidig, var det sannsynligvis en <strong>ekstern streik</strong> (ATC, sikkerhet). Dette er ekstraordinært. Men hvis <strong>bare SAS</strong> var rammet, var det intern.
              </p>
            </div>

            <div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">
                Hvor lang tid har jeg på meg til å kreve erstatning?
              </h3>
              <p className="text-gray-700">
                I Norge har du <strong>3 års foreldelsesfrist</strong> fra flydato. SAS sitt avslag påvirker ikke denne fristen.
              </p>
            </div>

            <div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">
                Kan ClaimWinger hjelpe meg hvis SAS allerede avviste kravet mitt?
              </h3>
              <p className="text-gray-700">
                Ja! Over <strong>80% av ClaimWingers saker</strong> er avslåtte krav som de vinner på nytt. De vet nøyaktig hvordan de juridisk presser SAS til å betale. <Link href="https://claimwinger.com/no/forsinket-fly" className="text-blue-600 hover:text-blue-700 underline">Start ditt krav her →</Link>
              </p>
            </div>
          </div>

          <h2 className="text-3xl font-bold text-gray-900 mt-12 mb-6">
            Konklusjon: Intern streik = du får erstatning
          </h2>

          <p className="text-gray-700 mb-6">
            SAS prøver systematisk å unngå kompensasjon ved å hevde at alle streiker er ekstraordinære. Men <strong>EU261 og EØS-avtalen</strong> er krystallklar: Hvis SAS sine egne ansatte streiket, er dette flyselskapets problem og de MÅ betale 250-600 €.
          </p>

          <p className="text-gray-700 mb-6">
            <strong>Vårt råd:</strong> Ikke aksepter vage avslag. Krev dokumentasjon eller la ClaimWinger håndtere det juridisk. Du har rett til pengene dine. <Link href="https://claimwinger.com/no/forsinket-fly" className="text-blue-600 hover:text-blue-700 font-medium underline">Start ditt krav gratis her →</Link>
          </p>

          <p className="text-gray-600 text-sm mt-8">
            <strong>Relaterte guider:</strong> <Link href="/no/blog/norwegian-forsinkelse-erstatning-guide" className="text-blue-600 hover:text-blue-700 underline">Norwegian forsinkelseerstatning — komplett guide</Link>, <Link href="/no/blog/sas-teknisk-feil-ekstraordinaer-omstendighet" className="text-blue-600 hover:text-blue-700 underline">SAS teknisk feil og forsinkelse</Link>
          </p>
        </div>
      </article>
    </LayoutNo>
  );
}
