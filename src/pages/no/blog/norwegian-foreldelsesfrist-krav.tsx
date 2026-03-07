import { LayoutNo } from "@/components/LayoutNo";
import { SEO } from "@/components/SEO";
import { Button } from "@/components/ui/button";
import { ArrowRight, Clock, CheckCircle2, Euro, AlertTriangle } from "lucide-react";
import Link from "next/link";

export default function NorwegianForeldelsesfristKrav() {
  return (
    <LayoutNo>
      <SEO 
        title="Foreldelsesfrist for Norwegian-krav — hvor lenge har du på deg?"
        description="Lær om foreldelsesfristen for Norwegian erstatningskrav i Norge. 3 års frist, unntak, og hvordan du sikrer kravet ditt."
        url="https://problemlot.com/no/blog/norwegian-foreldelsesfrist-krav"
      />

      <article className="container mx-auto px-4 py-12 max-w-4xl">
        <header className="mb-8">
          <Link href="/no/blog" className="text-blue-600 hover:text-blue-700 dark:text-blue-400 text-sm font-medium mb-4 inline-block">
            ← Tilbake til blogg
          </Link>
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-4">
            Foreldelsesfrist for Norwegian-krav — hvor lenge har du på deg?
          </h1>
          <div className="flex items-center gap-4 text-sm text-gray-600 dark:text-gray-400">
            <span>7 min lesing</span>
            <span>•</span>
            <span>Oppdatert: Mars 2025</span>
          </div>
        </header>

        <div className="bg-blue-50 dark:bg-blue-900/20 border-l-4 border-blue-600 p-6 mb-8 rounded-r-lg">
          <h2 className="text-xl font-bold text-blue-900 dark:text-blue-100 mb-3 flex items-center gap-2">
            <Clock className="w-6 h-6" />
            Raskt svar: 3 års foreldelsesfrist i Norge
          </h2>
          <div className="space-y-3 text-gray-800 dark:text-gray-200">
            <p>
              I Norge har du <strong>3 år</strong> fra flydatoen til å kreve erstatning fra Norwegian under <strong>EU261/EØS-avtalen</strong>. Dette følger <strong>norsk foreldelseslov § 2</strong>. Fristen starter dagen etter den planlagte ankomsten. Hvis du sender krav innen 3 år, avbrytes foreldelsen, og Norwegian må behandle kravet. <strong>Viktig:</strong> Hvis Norwegian nekter eller ignorerer kravet, må du eskalere til Transportklagenemnda eller rettsak innen 3 år fra flydatoen — å bare sende e-poster avbryter ikke foreldelsesfristen.
            </p>
          </div>
        </div>

        <div className="bg-gradient-to-r from-blue-50 to-indigo-50 dark:from-blue-900/20 dark:to-indigo-900/20 p-8 rounded-xl mb-12 text-center border border-gray-100 dark:border-gray-800">
          <Euro className="w-16 h-16 text-blue-600 mx-auto mb-4" />
          <h3 className="text-2xl font-bold mb-4 dark:text-white">Flydd med Norwegian de siste 3 årene?</h3>
          <p className="text-gray-700 dark:text-gray-300 mb-6">
            Sjekk om du har rett til opptil 600 € i erstatning. Det tar kun 2 minutter.
          </p>
          <a href="https://claimwinger.com/no" target="_blank" rel="noopener noreferrer">
            <Button size="lg" className="bg-blue-600 hover:bg-blue-700 text-white text-lg px-8 py-6">
              Sjekk gamle flyvninger gratis
              <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
          </a>
        </div>

        <div className="prose dark:prose-invert max-w-none">
          <h2>Hva er foreldelsesfristen for Norwegian-krav?</h2>
          <p>
            <strong>EU261</strong> (lovverket som gir deg rett til kompensasjon) har ingen egen foreldelsesfrist. I stedet overlater de dette til hvert enkelt lands nasjonale lover. Siden Norwegian er et norsk selskap med hovedkvarter i Fornebu, gjelder <strong>norsk lov</strong> for krav sendt direkte til dem i Norge.
          </p>
          <p>
            Ifølge <strong>Lov om foreldelse av fordringer (foreldelsesloven) § 2</strong>, er den generelle foreldelsesfristen i Norge <strong>3 år</strong>. 
          </p>
          <ul>
            <li><strong>Startdato:</strong> Dagen etter at flyet skulle ha landet.</li>
            <li><strong>Sluttdato:</strong> Nøyaktig 3 år senere. Etter dette tidspunktet er kravet juridisk dødt, og Norwegian har ingen plikt til å betale, uansett hvor rett du opprinnelig hadde.</li>
          </ul>

          <p>
            Les mer: <Link href="/no/blog/krave-erstatning-fly-3-ar-siden" className="text-blue-600 hover:underline">Kan jeg kreve erstatning for et fly for 3 år siden?</Link>
          </p>

          <h2>Gjelder 3-årsfristen for alle Norwegian-flyvninger?</h2>
          <p>
            Som hovedregel <strong>ja</strong>, hvis du krever Norwegian i Norge (som er det vanligste). Men foreldelsesfristen kan variere hvis du tar rettslige skritt i et <strong>annet land</strong>:
          </p>

          <div className="overflow-x-auto my-6">
            <table className="w-full border-collapse bg-white dark:bg-gray-800">
              <thead>
                <tr className="bg-blue-600 text-white">
                  <th className="border border-gray-300 dark:border-gray-600 px-4 py-3 text-left">Land (Domstolens jurisdiksjon)</th>
                  <th className="border border-gray-300 dark:border-gray-600 px-4 py-3 text-left font-bold">Foreldelsesfrist</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td className="border border-gray-300 dark:border-gray-600 px-4 py-3"><strong>Norge (Norwegians hjemland)</strong></td>
                  <td className="border border-gray-300 dark:border-gray-600 px-4 py-3 font-bold text-green-600">3 år</td>
                </tr>
                <tr className="bg-gray-50 dark:bg-gray-800/50">
                  <td className="border border-gray-300 dark:border-gray-600 px-4 py-3">Sverige (avgangs-/ankomstland)</td>
                  <td className="border border-gray-300 dark:border-gray-600 px-4 py-3">10 år (3 år via ARN)</td>
                </tr>
                <tr>
                  <td className="border border-gray-300 dark:border-gray-600 px-4 py-3">Danmark</td>
                  <td className="border border-gray-300 dark:border-gray-600 px-4 py-3">3 år</td>
                </tr>
                <tr className="bg-gray-50 dark:bg-gray-800/50">
                  <td className="border border-gray-300 dark:border-gray-600 px-4 py-3">Storbritannia (UK261)</td>
                  <td className="border border-gray-300 dark:border-gray-600 px-4 py-3">6 år (5 år i Skottland)</td>
                </tr>
                <tr>
                  <td className="border border-gray-300 dark:border-gray-600 px-4 py-3">Spania</td>
                  <td className="border border-gray-300 dark:border-gray-600 px-4 py-3">5 år</td>
                </tr>
                <tr className="bg-gray-50 dark:bg-gray-800/50">
                  <td className="border border-gray-300 dark:border-gray-600 px-4 py-3">Tyskland</td>
                  <td className="border border-gray-300 dark:border-gray-600 px-4 py-3">3 år</td>
                </tr>
              </tbody>
            </table>
          </div>

          <p>
            <strong>Eksempel:</strong> Hvis du fløy Norwegian fra London til Oslo, kan du potensielt saksøke i Storbritannia og ha inntil <strong>6 års</strong> frist. ClaimWinger vet hvilket lands lover som gir deg best beskyttelse.
          </p>

          <div className="bg-yellow-50 dark:bg-yellow-900/20 border-l-4 border-yellow-500 p-6 my-6">
            <h3 className="text-lg font-semibold flex items-center gap-2 mb-2">
              <AlertTriangle className="w-5 h-5" />
              Kritisk feil: Å tro at en klage til kundeservice stopper fristen
            </h3>
            <p className="text-sm mb-0">
              Mange tror at ved å sende en e-post til Norwegian, så "fryses" 3-årsfristen. <strong>Dette stemmer IKKE juridisk.</strong> Hvis Norwegian ignorerer e-postene dine i 3 år, er kravet tapt. For å offisielt avbryte fristen i Norge, må du enten sende saken til <strong>Transportklagenemnda</strong> eller ta ut <strong>forliksklage (søksmål)</strong> innen 3 år.
            </p>
          </div>

          <h2>Hvordan unngår du foreldelse?</h2>
          
          <p>For å sikre at Norwegian ikke bare "venter ut" kravet ditt, bør du følge denne tidslinjen:</p>
          <ol>
            <li><strong>Send kravet raskt:</strong> Ideelt sett innen få uker etter flyturen.</li>
            <li><strong>Purring (etter 30 dager):</strong> Hvis Norwegian ikke svarer, send en påminnelse.</li>
            <li><strong>Eskalering (etter 60 dager):</strong> Kontakt Forbrukerrådet eller ClaimWinger.</li>
            <li><strong>Juridiske skritt:</strong> Før 3-årsdagen MÅ saken sendes til Transportklagenemnda eller forliksrådet.</li>
          </ol>

          <p>
            Les mer: <Link href="/no/blog/norwegian-ignorerer-soknaden-hva-gjore" className="text-blue-600 hover:underline">Norwegian ignorerer søknaden min — hva gjør du?</Link>
          </p>

          <h2>Hva gjør du hvis fristen nærmer seg?</h2>
          <p>
            Hvis det bare er noen få uker igjen til det har gått 3 år siden flyturen:
          </p>
          <ul>
            <li><strong>Ikke bruk vanlig kundeservice:</strong> De rekker neppe å svare.</li>
            <li><strong>Send saken rett til Transportklagenemnda:</strong> Da avbrytes foreldelsesfristen mens de behandler saken.</li>
            <li><strong>Kontakt ClaimWinger UMIDDELBART:</strong> Vi kan ta ut rettslige skritt for å avbryte foreldelsen på dine vegne.</li>
          </ul>

          <p>
            Les mer: <Link href="/no/blog/norwegian-hvordan-soke-erstatning-steg-for-steg" className="text-blue-600 hover:underline">Hvordan søker du om erstatning fra Norwegian steg for steg?</Link>
          </p>

          <div className="bg-gray-50 dark:bg-gray-800 p-8 rounded-xl my-12">
            <h2 className="text-2xl font-bold mb-6 text-gray-900 dark:text-white">Ofte stilte spørsmål</h2>
            
            <div className="space-y-6">
              <div>
                <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-2 flex items-center gap-2">
                  <CheckCircle2 className="w-5 h-5 text-green-600" />
                  Må jeg reise sak innen 3 år, eller holder det å kontakte Norwegian?
                </h3>
                <p className="text-gray-700 dark:text-gray-300 text-sm">
                  Å kontakte Norwegian er første steg, men det avbryter <strong>ikke</strong> den juridiske foreldelsesfristen hvis de nekter å betale. For å avbryte fristen må saken bringes inn for et offisielt tvisteløsningsorgan (som Transportklagenemnda) eller en domstol innen 3 år.
                </p>
              </div>

              <div>
                <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-2 flex items-center gap-2">
                  <CheckCircle2 className="w-5 h-5 text-green-600" />
                  Starter 3-årsfristen fra billettbestilling eller flydato?
                </h3>
                <p className="text-gray-700 dark:text-gray-300 text-sm">
                  Fristen starter fra <strong>den datoen flyet opprinnelig skulle ha landet</strong> (flydatoen).
                </p>
              </div>

              <div>
                <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-2 flex items-center gap-2">
                  <CheckCircle2 className="w-5 h-5 text-green-600" />
                  Hva hvis Norwegian først anerkjenner kravet, men ikke betaler?
                </h3>
                <p className="text-gray-700 dark:text-gray-300 text-sm">
                  Hvis Norwegian skriftlig anerkjenner kravet ditt (f.eks. "vi vil betale deg"), <strong>avbrytes foreldelsen</strong> i henhold til foreldelsesloven § 14, og en ny frist begynner å løpe.
                </p>
              </div>

              <div>
                <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-2 flex items-center gap-2">
                  <CheckCircle2 className="w-5 h-5 text-green-600" />
                  Er fristen ulik for refusjon av billett vs kompensasjon?
                </h3>
                <p className="text-gray-700 dark:text-gray-300 text-sm">
                  Nei, den samme generelle 3-årsfristen i Norge gjelder for både krav om refusjon av billett og EU261-kompensasjon (erstatning).
                </p>
              </div>
            </div>
          </div>

          <div className="bg-gradient-to-br from-blue-600 to-indigo-700 text-white rounded-2xl p-8 md:p-12 text-center my-12 shadow-lg">
            <h3 className="text-3xl font-bold mb-4">Går tiden fra deg? Sikre kravet ditt i dag</h3>
            <p className="text-xl mb-8 text-blue-100">
              ClaimWinger avbryter foreldelsesfristen raskt og profesjonelt. Vi vinner 98% av sakene mot Norwegian.
            </p>
            <a href="https://claimwinger.com/no" target="_blank" rel="noopener noreferrer">
              <Button size="lg" className="bg-white text-blue-700 hover:bg-gray-100 text-lg px-8 py-6">
                Redd kravet ditt nå (5 min)
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
            </a>
            <p className="text-sm text-blue-200 mt-4">
              ✓ Juridisk ekspertise | ✓ No Win, No Fee | ✓ Rask avklaring
            </p>
          </div>

          <h2>Oppsummering</h2>
          <p>
            Foreldelsesfristen for å kreve erstatning fra Norwegian i Norge er 3 år fra flydatoen. Å sende e-poster frem og tilbake avbryter ikke denne fristen juridisk — for å sikre kravet ditt må saken eskaleres til Transportklagenemnda eller domstolene før fristen utløper. Ikke la Norwegian hale ut tiden. Bruk ClaimWinger for å få en profesjonell, rask prosess der vi sørger for at fristene overholdes og at du får pengene dine. Les også vår omfattende guide: <Link href="/no/blog/norwegian-forsinkelse-erstatning-guide" className="text-blue-600 hover:underline">Erstatning for forsinket Norwegian-fly — komplett guide 2025</Link>.
          </p>
        </div>
      </article>
    </LayoutNo>
  );
}