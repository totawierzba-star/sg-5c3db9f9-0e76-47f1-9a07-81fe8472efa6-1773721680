import { LayoutNo } from "@/components/LayoutNo";
import { SEO } from "@/components/SEO";
import Link from "next/link";

export default function SASEuroBonusBillettForsinkelseErstatning() {
  return (
    <LayoutNo>
      <SEO
        title="SAS EuroBonus-billett og forsinkelse — kan du fortsatt kreve erstatning?"
        description="Fikk du gratis SAS-fly med EuroBonus-poeng? Du har fortsatt rett til 250-600 € erstatning ved forsinkelse eller kansellering. Lær hvordan du krever pengene."
        canonicalUrl="https://problemlot.pl/no/blog/sas-eurobonus-billett-forsinkelse-erstatning"
      />
      <article className="max-w-4xl mx-auto px-4 py-12">
        <header className="mb-8">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">
            SAS EuroBonus-billett og forsinkelse — kan du fortsatt kreve erstatning?
          </h1>
          <div className="flex items-center gap-4 text-sm text-gray-600">
            <time dateTime="2026-03-08">8. mars 2026</time>
            <span>•</span>
            <span>7 min lesing</span>
            <span>•</span>
            <span className="text-purple-600 font-medium">SAS</span>
          </div>
        </header>

        <div className="prose prose-lg max-w-none">
          <p className="text-xl text-gray-700 leading-relaxed mb-6">
            Løste du inn EuroBonus-poeng for en «gratis» SAS-billett og flyet ble forsinket eller kansellert? Mange tror at <strong>gratisbilletter ikke har rett til erstatning</strong> — men dette er juridisk feil. Under EU261 og EØS-avtalen har du <strong>full rett til 250-600 € i kompensasjon</strong>, selv om du ikke betalte med penger.
          </p>

          <p className="text-lg text-gray-700 leading-relaxed">
            Denne guiden forklarer hvorfor EuroBonus-billetter er fullt beskyttet under EU261, hvordan du krever erstatning, og hva du gjør hvis SAS prøver å nekte.
          </p>

          <div className="bg-blue-50 border-l-4 border-blue-600 p-6 my-8">
            <h3 className="text-lg font-semibold text-gray-900 mb-2">💡 Rask sjekk: Har du rett til erstatning?</h3>
            <ul className="space-y-2 text-gray-700">
              <li>✅ Du løste inn EuroBonus-poeng for SAS-billetten</li>
              <li>✅ Flyet var 3+ timer forsinket eller ble kansellert</li>
              <li>✅ Avgangen var fra et norsk/europeisk flyplass</li>
              <li>✅ Forsinkelsen var ikke ekstraordinær (ATC-streik, ekstremvær)</li>
            </ul>
            <p className="mt-4 text-sm text-gray-600">
              Oppfyller du kravene? <Link href="https://claimwinger.com/no" className="text-blue-600 hover:text-blue-700 font-semibold underline">La ClaimWinger sjekke kravet ditt gratis →</Link>
            </p>
          </div>

          <h2 className="text-3xl font-bold text-gray-900 mt-12 mb-6">
            Hvorfor gjelder EU261 for EuroBonus-billetter?
          </h2>

          <p className="text-gray-700 mb-4">
            EU261/EØS-avtalen definerer «passasjer» som <strong>enhver person som transporteres eller skal transporteres av et flyselskap</strong>. Det finnes ingen unntaksregel for gratisbilletter, bonusbilletter eller ansattebilletter.
          </p>

          <h3 className="text-2xl font-semibold text-gray-800 mt-8 mb-4">
            EU-domstolens klargjøring (sak C-22/11, Finnair)
          </h3>

          <div className="bg-gray-50 p-6 rounded-lg my-6">
            <p className="text-gray-700 mb-3">
              <strong>«Kompensasjon under EU261 gjelder alle passasjerer med bekreftet reservasjon, uavhengig av betalingsmetode.»</strong>
            </p>
            <p className="text-gray-700">
              Selv om du brukte poeng i stedet for penger, har du en <strong>bekreftet bookingbekreftelse og boardingkort</strong> — det er alt som kreves for å være beskyttet under EU261.
            </p>
          </div>

          <p className="text-gray-700 mb-6">
            <strong>Konklusjon:</strong> EuroBonus-billetter er <strong>IKKE gratisbilletter</strong> — du betalte med lojalitetspoeng som du tjente gjennom tidligere kjøp. SAS kan ikke nekte erstatning basert på betalingsmetode.
          </p>

          <h2 className="text-3xl font-bold text-gray-900 mt-12 mb-6">
            Hvor mye erstatning har du rett til?
          </h2>

          <p className="text-gray-700 mb-6">
            Erstatningsbeløpet er det samme som for betalte billetter — basert på flydistanse:
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

          <div className="bg-yellow-50 border-l-4 border-yellow-600 p-6 my-8">
            <h3 className="text-lg font-semibold text-gray-900 mb-2">⚠️ SAS sin vanlige unnskyldning</h3>
            <p className="text-gray-700">
              SAS prøver ofte å hevde at EuroBonus-billetter ikke har rett til erstatning fordi «du ikke betalte for billetten». Dette er <strong>juridisk feil</strong> og direkte motstrid med EU261. Ikke la deg lure!
            </p>
          </div>

          <h2 className="text-3xl font-bold text-gray-900 mt-12 mb-6">
            Hvordan krever du erstatning med EuroBonus-billett?
          </h2>

          <p className="text-gray-700 mb-4">
            Prosessen er identisk med betalte billetter:
          </p>

          <ol className="list-decimal list-inside space-y-3 text-gray-700 mb-6">
            <li><strong>Samle dokumentasjon:</strong>
              <ul className="list-disc list-inside ml-6 mt-2 space-y-1">
                <li>Bookingbekreftelse (viser EuroBonus-innløsning)</li>
                <li>Boardingkort (hvis du hadde det)</li>
                <li>Bevis på forsinkelse (skjermbilde, SAS-e-post)</li>
              </ul>
            </li>
            <li><strong>Send krav til SAS:</strong> Bruk SAS sitt offisielle klagesystem eller send e-post til customer.relations@sas.se</li>
            <li><strong>Hvis SAS nekter:</strong> Eskalér til Forbrukerrådet eller bruk ClaimWinger til å tvinge frem betaling</li>
          </ol>

          <div className="bg-green-50 border-l-4 border-green-600 p-6 my-8">
            <h3 className="text-lg font-semibold text-gray-900 mb-2">✅ Hvorfor ClaimWinger vinner disse sakene</h3>
            <p className="text-gray-700 mb-3">
              ClaimWinger vet nøyaktig hvordan de juridisk motbeviser SAS sin påstand om at EuroBonus-billetter ikke er beskyttet. De henviser til EU-domstolens avgjørelser og tvinger SAS til å betale.
            </p>
            <p className="text-sm text-gray-600">
              <Link href="https://claimwinger.com/no" className="text-blue-600 hover:text-blue-700 font-semibold underline">Start ditt krav gratis her →</Link>
            </p>
          </div>

          <h2 className="text-3xl font-bold text-gray-900 mt-12 mb-6">
            Hva hvis SAS tilbyr tilbake EuroBonus-poengene i stedet for penger?
          </h2>

          <p className="text-gray-700 mb-6">
            SAS prøver ofte å «refundere» forsinkelsen ved å gi deg tilbake EuroBonus-poengene. Men dette er <strong>IKKE det samme som EU261-erstatning</strong>:
          </p>

          <div className="overflow-x-auto my-8">
            <table className="min-w-full border-collapse border border-gray-300">
              <thead className="bg-gray-100">
                <tr>
                  <th className="border border-gray-300 px-4 py-3 text-left font-semibold">Type</th>
                  <th className="border border-gray-300 px-4 py-3 text-left font-semibold">Hva det er</th>
                  <th className="border border-gray-300 px-4 py-3 text-left font-semibold">Må du akseptere?</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td className="border border-gray-300 px-4 py-3 font-semibold">EuroBonus-poeng tilbake</td>
                  <td className="border border-gray-300 px-4 py-3">Refusjon av billetten din</td>
                  <td className="border border-gray-300 px-4 py-3 text-green-600">✅ Kan akseptere hvis du vil</td>
                </tr>
                <tr className="bg-gray-50">
                  <td className="border border-gray-300 px-4 py-3 font-semibold">250-600 € kontanter</td>
                  <td className="border border-gray-300 px-4 py-3">EU261-erstatning</td>
                  <td className="border border-gray-300 px-4 py-3 text-blue-600">✅ Du har rett til BEGGE</td>
                </tr>
              </tbody>
            </table>
          </div>

          <p className="text-gray-700 mb-6">
            <strong>Viktig:</strong> Å få tilbake EuroBonus-poengene betyr IKKE at du gir avkall på erstatningskravet ditt. Du kan få begge.
          </p>

          <h2 className="text-3xl font-bold text-gray-900 mt-12 mb-6">
            Ofte stilte spørsmål (FAQ)
          </h2>

          <div className="space-y-6">
            <div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">
                Hva hvis jeg kombinerte EuroBonus-poeng + penger for billetten?
              </h3>
              <p className="text-gray-700">
                Dette gjør ingen forskjell. Du har fortsatt full rett til 250-600 € erstatning, uavhengig av betalingsmetode.
              </p>
            </div>

            <div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">
                Kan SAS trekke EuroBonus-poengene mine hvis jeg krever erstatning?
              </h3>
              <p className="text-gray-700">
                Nei! Dette ville være gjengjeldelse og er ulovlig. SAS kan ikke straffe deg for å utøve dine juridiske rettigheter under EU261.
              </p>
            </div>

            <div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">
                Hva hvis jeg booket billetten til noen andre med mine EuroBonus-poeng?
              </h3>
              <p className="text-gray-700">
                <strong>Passasjeren</strong> (personen som fløy) har rett til erstatningen, ikke personen som løste inn poengene. Erstatningen betales alltid til den som var ombord på flyet.
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
                Ja! Over <strong>80% av ClaimWingers saker</strong> er avslåtte krav som de vinner på nytt. <Link href="https://claimwinger.com/no" className="text-blue-600 hover:text-blue-700 underline">Start ditt krav her →</Link>
              </p>
            </div>
          </div>

          <h2 className="text-3xl font-bold text-gray-900 mt-12 mb-6">
            Konklusjon: EuroBonus-billetter har full beskyttelse under EU261
          </h2>

          <p className="text-gray-700 mb-6">
            Hvis du løste inn EuroBonus-poeng for en SAS-billett og flyet var forsinket eller kansellert, har du <strong>rett til 250-600 € i erstatning</strong> — akkurat som alle andre passasjerer.
          </p>

          <p className="text-gray-700 mb-6">
            <strong>Vårt råd:</strong> Ikke aksepter SAS sine unnskyldninger om at gratisbilletter ikke er beskyttet. La ClaimWinger håndtere kravet juridisk og få pengene du har krav på. <Link href="https://claimwinger.com/no" className="text-blue-600 hover:text-blue-700 font-medium underline">Start ditt krav gratis her →</Link>
          </p>

          <p className="text-gray-600 text-sm mt-8">
            <strong>Relaterte guider:</strong> <Link href="/no/blog/norwegian-forsinkelse-erstatning-guide" className="text-blue-600 hover:text-blue-700 underline">Norwegian forsinkelseerstatning — komplett guide</Link>, <Link href="/no/blog/sas-forsinket-fly-norge-erstatning" className="text-blue-600 hover:text-blue-700 underline">Erstatning for forsinket SAS-fly</Link>
          </p>
        </div>
      </article>
    </LayoutNo>
  );
}
