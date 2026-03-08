import { LayoutNo } from "@/components/LayoutNo";
import { SEO } from "@/components/SEO";
import Link from "next/link";

export default function SASMistetTilkoblingsflyHvemBetaler() {
  return (
    <LayoutNo>
      <SEO
        title="Mistet tilkoblingsflyg på grunn av SAS — hvem betaler erstatningen?"
        description="Mistet du tilkoblingsflyget på grunn av SAS-forsinkelse? Lær om ansvar, erstatning og hvordan ClaimWinger kan hjelpe deg få 250-600 €."
        canonical="https://problemlot.pl/no/blog/sas-mistet-tilkoblingsflyg-hvem-betaler"
      />
      <article className="max-w-4xl mx-auto px-4 py-12">
        <header className="mb-8">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">
            Mistet tilkoblingsflyg på grunn av SAS — hvem betaler erstatningen?
          </h1>
          <div className="flex items-center gap-4 text-sm text-gray-600">
            <time dateTime="2026-03-08">8. mars 2026</time>
            <span>•</span>
            <span>8 min lesing</span>
            <span>•</span>
            <span className="text-purple-600 font-medium">SAS</span>
          </div>
        </header>

        <div className="prose prose-lg max-w-none">
          <p className="text-xl text-gray-700 leading-relaxed mb-6">
            Mistet du tilkoblingsflyet ditt fordi <strong>første SAS-fly var forsinket</strong>? Dette er en av de mest frustrerende situasjonene for reisende — du blir stående på flyplassen mens flyet du skulle ta drar uten deg. Men du har <strong>rett til opptil 600 € i erstatning</strong> hvis du ankom sluttdestinasjonen 3+ timer forsinket.
          </p>

          <p className="text-lg text-gray-700 leading-relaxed">
            Denne guiden forklarer når SAS er ansvarlig for mistet tilkobling, hvordan du beregner erstatningen, og hva du gjør hvis SAS nekter å betale.
          </p>

          <div className="bg-blue-50 border-l-4 border-blue-600 p-6 my-8">
            <h3 className="text-lg font-semibold text-gray-900 mb-2">💡 Rask sjekk: Har du rett til erstatning?</h3>
            <ul className="space-y-2 text-gray-700">
              <li>✅ Du booket hele reisen på én booking (samme PNR-nummer)</li>
              <li>✅ Første fly var forsinket og du mistet tilkoblingen</li>
              <li>✅ Du ankom sluttdestinasjonen 3+ timer forsinket</li>
              <li>✅ SAS opererte begge fly (eller codeshare-partner)</li>
            </ul>
            <p className="mt-4 text-sm text-gray-600">
              Oppfyller du kravene? <Link href="https://claimwinger.com/no/forsinket-fly" className="text-blue-600 hover:text-blue-700 font-semibold underline">La ClaimWinger sjekke kravet ditt gratis →</Link>
            </p>
          </div>

          <h2 className="text-3xl font-bold text-gray-900 mt-12 mb-6">
            Når er SAS ansvarlig for mistet tilkobling?
          </h2>

          <p className="text-gray-700 mb-4">
            SAS er ansvarlig hvis <strong>hele reisen ble booket som én gjennomgående billett</strong>. Dette gjelder uavhengig av om du booket direkte hos SAS eller via et reisebyrå.
          </p>

          <h3 className="text-2xl font-semibold text-gray-800 mt-8 mb-4">
            Scenario 1: Samme booking (SAS ansvarlig)
          </h3>

          <div className="bg-green-50 p-6 rounded-lg my-6">
            <p className="text-gray-700 mb-3">
              <strong>Eksempel:</strong> Oslo → København (SAS) → New York (SAS)<br/>
              <strong>Booking:</strong> Ett PNR-nummer (f.eks. ABC123)
            </p>
            <p className="text-gray-700">
              <strong>✅ SAS er ansvarlig</strong> for hele reisen. Hvis første fly er forsinket og du mister tilkoblingen, har du rett til erstatning basert på total forsinkelse ved ankomst New York.
            </p>
          </div>

          <h3 className="text-2xl font-semibold text-gray-800 mt-8 mb-4">
            Scenario 2: Separate bookinger (ingen erstatning)
          </h3>

          <div className="bg-red-50 p-6 rounded-lg my-6">
            <p className="text-gray-700 mb-3">
              <strong>Eksempel:</strong> Oslo → København (SAS, booking 1) → New York (United, booking 2)<br/>
              <strong>Bookinger:</strong> To separate PNR-numre
            </p>
            <p className="text-gray-700">
              <strong>❌ Ingen erstatning</strong> fra SAS hvis du mister tilkoblingen. Du tok risikoen selv ved å booke separate billetter.
            </p>
          </div>

          <h2 className="text-3xl font-bold text-gray-900 mt-12 mb-6">
            Hvor mye erstatning har du rett til?
          </h2>

          <p className="text-gray-700 mb-6">
            Erstatningen beregnes basert på <strong>total distanse fra første avreise til sluttdestinasjon</strong>, ikke per flysegment:
          </p>

          <div className="overflow-x-auto my-8">
            <table className="min-w-full border-collapse border border-gray-300">
              <thead className="bg-gray-100">
                <tr>
                  <th className="border border-gray-300 px-4 py-3 text-left font-semibold">Total distanse</th>
                  <th className="border border-gray-300 px-4 py-3 text-left font-semibold">Erstatning</th>
                  <th className="border border-gray-300 px-4 py-3 text-left font-semibold">Eksempel rute</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td className="border border-gray-300 px-4 py-3">Opptil 1500 km</td>
                  <td className="border border-gray-300 px-4 py-3 font-bold text-green-600">250 €</td>
                  <td className="border border-gray-300 px-4 py-3">Oslo–Stockholm–Helsinki</td>
                </tr>
                <tr className="bg-gray-50">
                  <td className="border border-gray-300 px-4 py-3">1500–3500 km</td>
                  <td className="border border-gray-300 px-4 py-3 font-bold text-green-600">400 €</td>
                  <td className="border border-gray-300 px-4 py-3">Oslo–København–London</td>
                </tr>
                <tr>
                  <td className="border border-gray-300 px-4 py-3">Over 3500 km</td>
                  <td className="border border-gray-300 px-4 py-3 font-bold text-green-600">600 €</td>
                  <td className="border border-gray-300 px-4 py-3">Oslo–København–New York</td>
                </tr>
              </tbody>
            </table>
          </div>

          <div className="bg-yellow-50 border-l-4 border-yellow-600 p-6 my-8">
            <h3 className="text-lg font-semibold text-gray-900 mb-2">⚠️ Viktig: 3-timersregelen gjelder sluttdestinasjonen</h3>
            <p className="text-gray-700">
              Selv om du mistet tilkoblingen, får du kun erstatning hvis du ankom <strong>sluttdestinasjonen 3+ timer forsinket</strong>. Hvis SAS fikk deg dit på et senere fly med bare 2 timer forsinkelse, har du ikke rett til kompensasjon (men fortsatt rett på omsorg).
            </p>
          </div>

          <h2 className="text-3xl font-bold text-gray-900 mt-12 mb-6">
            Hva hvis SAS nekter ansvar?
          </h2>

          <p className="text-gray-700 mb-4">
            SAS prøver ofte å unngå erstatning for mistet tilkobling med disse unnskyldningene:
          </p>

          <h3 className="text-2xl font-semibold text-gray-800 mt-8 mb-4">
            Unnskyldning 1: «Du hadde for kort overgangstid»
          </h3>

          <p className="text-gray-700 mb-6">
            <strong>Motargument:</strong> Hvis SAS solgte deg billetten med den overgangstiden, godkjente de den som tilstrekkelig. Det er deres problem hvis flyet var forsinket.
          </p>

          <h3 className="text-2xl font-semibold text-gray-800 mt-8 mb-4">
            Unnskyldning 2: «Andre fly var også forsinket»
          </h3>

          <p className="text-gray-700 mb-6">
            <strong>Motargument:</strong> Irrelevant. Du har rett til erstatning hvis DU ankom 3+ timer forsinket, uavhengig av hva som skjedde med andre fly.
          </p>

          <h3 className="text-2xl font-semibold text-gray-800 mt-8 mb-4">
            Unnskyldning 3: «Vi fikk deg på et senere fly, så ingen erstatning»
          </h3>

          <p className="text-gray-700 mb-6">
            <strong>Motargument:</strong> Du har fortsatt rett til erstatning hvis du ankom sluttdestinasjonen 3+ timer forsinket, selv om SAS fikk deg på et annet fly.
          </p>

          <div className="bg-green-50 border-l-4 border-green-600 p-6 my-8">
            <h3 className="text-lg font-semibold text-gray-900 mb-2">✅ Hvordan ClaimWinger vinner disse sakene</h3>
            <p className="text-gray-700 mb-3">
              ClaimWinger har tilgang til flydata som beviser nøyaktig når du ankom sluttdestinasjonen. De kan motbevise SAS sine unnskyldninger med objektive fakta og tvinge frem betaling.
            </p>
            <p className="text-sm text-gray-600">
              <Link href="https://claimwinger.com/no/forsinket-fly" className="text-blue-600 hover:text-blue-700 font-semibold underline">Start ditt krav gratis her →</Link>
            </p>
          </div>

          <h2 className="text-3xl font-bold text-gray-900 mt-12 mb-6">
            Hvilke dokumenter trenger du?
          </h2>

          <p className="text-gray-700 mb-4">
            For å bevise mistet tilkobling må du ha:
          </p>

          <ul className="list-disc list-inside space-y-2 text-gray-700 mb-6">
            <li><strong>Boardingkort for begge fly</strong> (hvis du fikk nytt fly)</li>
            <li><strong>Bookingbekreftelse</strong> som viser samme PNR-nummer</li>
            <li><strong>Bekreftelse på ankomsttid</strong> til sluttdestinasjonen (fra flightaware.com eller SAS)</li>
            <li><strong>Kvitteringer</strong> for utgifter hvis SAS ikke ga omsorg (mat, hotell)</li>
          </ul>

          <h2 className="text-3xl font-bold text-gray-900 mt-12 mb-6">
            Ofte stilte spørsmål (FAQ)
          </h2>

          <div className="space-y-6">
            <div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">
                Hva hvis andre flysegment var operert av et annet flyselskap (codeshare)?
              </h3>
              <p className="text-gray-700">
                Hvis du booket gjennom SAS og andre flysegment var operert av en partner (f.eks. Lufthansa), er <strong>SAS fortsatt ansvarlig</strong> for hele reisen. Du krever erstatning fra SAS, ikke partnerselskapet.
              </p>
            </div>

            <div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">
                Må jeg vente til SAS får meg på et nytt fly før jeg kan kreve erstatning?
              </h3>
              <p className="text-gray-700">
                Nei! Du kan kreve erstatning umiddelbart etter at du ankom sluttdestinasjonen, selv om SAS fikk deg på et senere fly samme dag.
              </p>
            </div>

            <div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">
                Hva hvis jeg valgte å ikke ta det senere flyet SAS tilbød?
              </h3>
              <p className="text-gray-700">
                Hvis du avviste SAS sitt tilbud om alternativ transport, mister du retten til erstatning. Du må akseptere det første rimelige alternativet SAS tilbyr.
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
                Ja! Over <strong>80% av ClaimWingers saker</strong> er avslåtte krav som de vinner på nytt. <Link href="https://claimwinger.com/no/forsinket-fly" className="text-blue-600 hover:text-blue-700 underline">Start ditt krav her →</Link>
              </p>
            </div>
          </div>

          <h2 className="text-3xl font-bold text-gray-900 mt-12 mb-6">
            Konklusjon: SAS må betale for mistet tilkobling
          </h2>

          <p className="text-gray-700 mb-6">
            Hvis du booket hele reisen på én billett og mistet tilkoblingen på grunn av SAS-forsinkelse, har du <strong>rett til 250-600 € i erstatning</strong> hvis du ankom 3+ timer forsinket.
          </p>

          <p className="text-gray-700 mb-6">
            <strong>Vårt råd:</strong> Ikke aksepter SAS sine unnskyldninger. La ClaimWinger håndtere kravet juridisk og få pengene du har krav på. <Link href="https://claimwinger.com/no/forsinket-fly" className="text-blue-600 hover:text-blue-700 font-medium underline">Start ditt krav gratis her →</Link>
          </p>

          <p className="text-gray-600 text-sm mt-8">
            <strong>Relaterte guider:</strong> <Link href="/no/blog/norwegian-forsinkelse-erstatning-guide" className="text-blue-600 hover:text-blue-700 underline">Norwegian forsinkelseerstatning — komplett guide</Link>, <Link href="/no/blog/sas-forsinket-fly-norge-erstatning" className="text-blue-600 hover:text-blue-700 underline">Erstatning for forsinket SAS-fly</Link>
          </p>
        </div>
      </article>
    </LayoutNo>
  );
}