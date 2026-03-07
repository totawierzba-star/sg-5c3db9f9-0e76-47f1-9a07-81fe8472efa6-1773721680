import { LayoutNo } from "@/components/LayoutNo";
import { SEO } from "@/components/SEO";
import { Button } from "@/components/ui/button";
import { ArrowRight, Wrench, CheckCircle2, AlertTriangle, XCircle } from "lucide-react";
import Link from "next/link";

export default function NorwegianTekniskFeilEkstraordinaerOmstendighet() {
  return (
    <LayoutNo>
      <SEO 
        title="Norwegian teknisk feil og forsinkelse – er det en ekstraordinær omstendighet?"
        description="Norwegian hevder teknisk feil er ekstraordinært? Nei! EU-domstolen har avgjort at tekniske feil IKKE er ekstraordinære. Få din erstatning."
        url="https://problemlot.com/no/blog/norwegian-teknisk-feil-ekstraordinaer-omstendighet"
      />

      <article className="container mx-auto px-4 py-12 max-w-4xl">
        <header className="mb-8">
          <Link href="/no/blog" className="text-blue-600 hover:text-blue-700 dark:text-blue-400 text-sm font-medium mb-4 inline-block">
            ← Tilbake til blogg
          </Link>
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-4">
            Norwegian teknisk feil og forsinkelse – er det en ekstraordinær omstendighet?
          </h1>
          <div className="flex items-center gap-4 text-sm text-gray-600 dark:text-gray-400">
            <span>6 min lesing</span>
            <span>•</span>
            <span>Oppdatert: Mars 2025</span>
          </div>
        </header>

        {/* Quick Answer */}
        <div className="bg-red-50 dark:bg-red-900/20 border-l-4 border-red-600 p-6 mb-8 rounded-r-lg">
          <h2 className="text-xl font-bold text-red-900 dark:text-red-100 mb-3 flex items-center gap-2">
            <XCircle className="w-6 h-6" />
            Raskt svar: NEI – teknisk feil er ALDRI ekstraordinært
          </h2>
          <div className="space-y-3 text-gray-800 dark:text-gray-200">
            <p>
              Hvis Norwegian nekter erstatning med begrunnelsen <strong>"teknisk feil var uforutsigbar"</strong>, lyver de. <strong>EU-domstolen</strong> har avgjort i flere saker (bl.a. C-549/07 Wallentin-Hermann) at:
            </p>
            <ul className="ml-4 space-y-1">
              <li>⚠️ <strong>Alle tekniske feil</strong> faller inn under flyselskapets vedlikeholdsansvar</li>
              <li>⚠️ <strong>Uforutsigbarhet</strong> er IKKE relevant – Norwegian har plikt til å vedlikeholde flyparken</li>
              <li>⚠️ <strong>Reservedelmangel</strong> er heller ikke ekstraordinært</li>
              <li>✅ <strong>Du har full rett til erstatning</strong> hvis flyet var forsinket 3+ timer på grunn av teknisk feil</li>
            </ul>
            <p className="text-sm border-t border-red-200 dark:border-red-800 pt-3 mt-3">
              💡 <strong>Viktig:</strong> Norwegian bruker dette argumentet systematisk for å slippe å betale. Ikke la deg lure – krever pengene dine!
            </p>
          </div>
        </div>

        {/* CTA 1 */}
        <div className="bg-gradient-to-r from-red-50 to-orange-50 dark:from-red-900/20 dark:to-orange-900/20 p-8 rounded-xl mb-12 text-center border border-gray-100 dark:border-gray-800">
          <Wrench className="w-16 h-16 text-red-600 mx-auto mb-4" />
          <h3 className="text-2xl font-bold mb-4 dark:text-white">Fikk du avslag på grunn av "teknisk feil"?</h3>
          <p className="text-gray-700 dark:text-gray-300 mb-6">
            Norwegian lyver. ClaimWinger har juridisk ekspertise til å bekjempe denne unnskyldningen og tvinge Norwegian til å betale.
          </p>
          <a href="https://claimwinger.com/no/forsinket-fly" target="_blank" rel="noopener noreferrer">
            <Button size="lg" className="bg-red-600 hover:bg-red-700 text-white text-lg px-8 py-6">
              Krev erstatning nå
              <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
          </a>
        </div>

        <div className="prose dark:prose-invert max-w-none">
          <h2>Hva sier EU-domstolen om tekniske feil?</h2>
          <p>
            <strong>EU-forordning 261/2004</strong> (som gjelder i Norge gjennom <strong>EØS-avtalen</strong>) definerer <strong>"ekstraordinære omstendigheter"</strong> som hendelser utenfor flyselskapets kontroll. Norwegian prøver ofte å klassifisere tekniske feil som ekstraordinære – men dette er <strong>ulovlig</strong> ifølge EU-domstolen.
          </p>
          <p>
            I saken <strong>C-549/07 Wallentin-Hermann</strong> (2008) avgjorde EU-domstolen:
          </p>
          <ul>
            <li>Flyselskapet har ansvar for å vedlikeholde flyparken</li>
            <li>Alle tekniske feil faller inn under vedlikeholdsplikten</li>
            <li>Det spiller ingen rolle om feilen var "uforutsigbar" eller "plutselig"</li>
            <li>Kun hvis teknisk feil skyldes en <strong>ekstern sabotasje eller terrorhandling</strong>, kan det regnes som ekstraordinært</li>
          </ul>
          <p>
            <strong>Konklusjon:</strong> Teknisk feil = Norwegian må betale. Punkt.
          </p>
          <p>
            Les mer om grunnlaget: <Link href="/no/blog/norwegian-forsinkelse-erstatning-guide" className="text-blue-600 hover:underline">Erstatning for forsinket Norwegian-fly – komplett guide 2025</Link>
          </p>

          <h2>Hvilke tekniske feil prøver Norwegian å bruke som unnskyldning?</h2>
          <p>
            Norwegian bruker ofte disse argumentene for å nekte erstatning:
          </p>

          <div className="grid sm:grid-cols-2 gap-4 my-6">
            <div className="border-2 border-red-300 bg-red-50 dark:bg-red-900/20 p-5 rounded-lg">
              <h4 className="font-bold text-red-700 dark:text-red-400 mb-3">❌ Vanlige Norwegian-unnskyldninger</h4>
              <ul className="text-sm space-y-1">
                <li>✓ "Uforutsigbar teknisk feil"</li>
                <li>✓ "Plutselig motorstopp"</li>
                <li>✓ "Reservedelmangel"</li>
                <li>✓ "IT-systemfeil"</li>
                <li>✓ "Uventet slitasje"</li>
                <li>✓ "Fabrikkfeil fra produsent"</li>
              </ul>
            </div>

            <div className="border-2 border-green-300 bg-green-50 dark:bg-green-900/20 p-5 rounded-lg">
              <h4 className="font-bold text-green-700 dark:text-green-400 mb-3">✅ Sannheten (Norwegian MÅ betale)</h4>
              <ul className="text-sm space-y-1">
                <li>✓ Alle disse faller inn under vedlikeholdsansvar</li>
                <li>✓ Norwegian har plikt til å ha reservedeler</li>
                <li>✓ IT-systemfeil er operasjonelt ansvar</li>
                <li>✓ Fabrikkfeil burde vært oppdaget under service</li>
              </ul>
            </div>
          </div>

          <h2>Eneste unntak: Sabotasje eller terrorhandling</h2>
          <p>
            Den <strong>eneste</strong> måten en teknisk feil kan regnes som ekstraordinær er hvis:
          </p>
          <ul>
            <li>En ekstern part saboterte flyet (f.eks. terrorhandling)</li>
            <li>Flyet ble skadet av en tredjepartshendelse (f.eks. fuglepåkjørsel som forårsaket alvorlig skade)</li>
          </ul>
          <p>
            <strong>Men:</strong> Selv i disse tilfellene må Norwegian bevise at de tok alle rimelige forholdsregler for å unngå forsinkelsen (f.eks. at de hadde reservefly klart).
          </p>

          <div className="bg-yellow-50 dark:bg-yellow-900/20 border-l-4 border-yellow-500 p-6 my-6">
            <h3 className="text-lg font-semibold flex items-center gap-2 mb-2">
              <AlertTriangle className="w-5 h-5" />
              Hvordan avslører du Norwegians løgn?
            </h3>
            <p className="text-sm mb-2">
              Hvis Norwegian hevder "ekstraordinær omstendighet" på grunn av teknisk feil, krev følgende bevis:
            </p>
            <ol className="text-sm space-y-1 ml-4">
              <li>1. Teknisk rapport som forklarer feilen</li>
              <li>2. Bevis på at feilen var forårsaket av en ekstern hendelse (sabotasje, etc.)</li>
              <li>3. Dokumentasjon på hvilke forholdsregler de tok</li>
            </ol>
            <p className="text-sm mt-2">
              <strong>I 99% av tilfellene</strong> kan Norwegian ikke levere dette – fordi feilen var en ordinær vedlikeholdsfeil.
            </p>
          </div>

          <h2>Hvor mye erstatning får du for teknisk feil?</h2>
          <div className="overflow-x-auto my-6">
            <table className="w-full border-collapse bg-white dark:bg-gray-800">
              <thead>
                <tr className="bg-blue-600 text-white">
                  <th className="border border-gray-300 dark:border-gray-600 px-4 py-3 text-left">Distanse</th>
                  <th className="border border-gray-300 dark:border-gray-600 px-4 py-3 text-left">Forsinkelse ved ankomst</th>
                  <th className="border border-gray-300 dark:border-gray-600 px-4 py-3 text-left font-bold">Erstatning</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td className="border border-gray-300 dark:border-gray-600 px-4 py-3">Opp til 1500 km</td>
                  <td className="border border-gray-300 dark:border-gray-600 px-4 py-3">3+ timer</td>
                  <td className="border border-gray-300 dark:border-gray-600 px-4 py-3 font-bold text-green-600">250 €</td>
                </tr>
                <tr className="bg-gray-50 dark:bg-gray-800/50">
                  <td className="border border-gray-300 dark:border-gray-600 px-4 py-3">1500–3500 km</td>
                  <td className="border border-gray-300 dark:border-gray-600 px-4 py-3">3+ timer</td>
                  <td className="border border-gray-300 dark:border-gray-600 px-4 py-3 font-bold text-green-600">400 €</td>
                </tr>
                <tr>
                  <td className="border border-gray-300 dark:border-gray-600 px-4 py-3">Over 3500 km</td>
                  <td className="border border-gray-300 dark:border-gray-600 px-4 py-3">4+ timer</td>
                  <td className="border border-gray-300 dark:border-gray-600 px-4 py-3 font-bold text-green-600">600 €</td>
                </tr>
              </tbody>
            </table>
          </div>

          <h2>Hvordan krever du erstatning når Norwegian nekter?</h2>
          <ol>
            <li><strong>Sjekk avslaget:</strong> Hvis Norwegian skriver "teknisk feil" som begrunnelse, er det ulovlig</li>
            <li><strong>Krev bevis:</strong> Be om teknisk rapport og dokumentasjon på ekstraordinær årsak</li>
            <li><strong>Klage til Forbrukerrådet:</strong> Send avslaget videre til <strong>Transportklagenemnda</strong> (gratis, men 6-12 mnd behandlingstid)</li>
            <li><strong>Bruk ClaimWinger:</strong> De har juridisk ekspertise og kan ta saken til retten hvis nødvendig</li>
          </ol>
          <p>
            Les mer: <Link href="/no/blog/norwegian-nektet-erstatning-hva-gjore" className="text-blue-600 hover:underline">Norwegian nektet erstatning – hva gjør du videre?</Link>
          </p>

          {/* FAQ */}
          <div className="bg-gray-50 dark:bg-gray-800 p-8 rounded-xl my-12">
            <h2 className="text-2xl font-bold mb-6 text-gray-900 dark:text-white">Ofte stilte spørsmål</h2>
            
            <div className="space-y-6">
              <div>
                <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-2 flex items-center gap-2">
                  <CheckCircle2 className="w-5 h-5 text-green-600" />
                  Hva hvis Norwegian sier feilen var "uforutsigbar"?
                </h3>
                <p className="text-gray-700 dark:text-gray-300 text-sm">
                  Det spiller ingen rolle. EU-domstolen har avgjort at alle tekniske feil faller inn under vedlikeholdsansvar – uansett om de var "plutselige" eller "uforutsigbare". Norwegian må betale.
                </p>
              </div>

              <div>
                <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-2 flex items-center gap-2">
                  <CheckCircle2 className="w-5 h-5 text-green-600" />
                  Hva hvis Norwegian ikke hadde reservedeler?
                </h3>
                <p className="text-gray-700 dark:text-gray-300 text-sm">
                  Reservedelmangel er <strong>ikke ekstraordinært</strong>. Norwegian har ansvar for å ha tilstrekkelig lager av kritiske reservedeler. Hvis de ikke har det, er det deres feil.
                </p>
              </div>

              <div>
                <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-2 flex items-center gap-2">
                  <CheckCircle2 className="w-5 h-5 text-green-600" />
                  Hva hvis feilen ble forårsaket av flyprodusenten (Boeing/Airbus)?
                </h3>
                <p className="text-gray-700 dark:text-gray-300 text-sm">
                  Norwegian har fortsatt ansvar overfor deg som passasjer. De kan senere kreve erstatning fra produsenten, men de må betale deg først under EU261.
                </p>
              </div>

              <div>
                <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-2 flex items-center gap-2">
                  <CheckCircle2 className="w-5 h-5 text-green-600" />
                  Hva hvis flyet ble truffet av lynnedslag?
                </h3>
                <p className="text-gray-700 dark:text-gray-300 text-sm">
                  Lynnedslag <strong>kan</strong> være ekstraordinært hvis det forårsaket alvorlig skade og Norwegian tok alle rimelige forholdsregler. Men de må bevise dette. Hvis de hadde reservefly tilgjengelig, må de fortsatt betale.
                </p>
              </div>

              <div>
                <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-2 flex items-center gap-2">
                  <CheckCircle2 className="w-5 h-5 text-green-600" />
                  Hvor lang tid har jeg på meg til å kreve?
                </h3>
                <p className="text-gray-700 dark:text-gray-300 text-sm">
                  I Norge er foreldelsesfristen <strong>3 år</strong> fra flydatoen. Les mer: <Link href="/no/blog/krave-erstatning-fly-3-ar-siden" className="text-blue-600 hover:underline">Kan jeg kreve erstatning for et fly for 3 år siden?</Link>
                </p>
              </div>
            </div>
          </div>

          {/* CTA 2 */}
          <div className="bg-gradient-to-br from-red-600 to-orange-600 text-white rounded-2xl p-8 md:p-12 text-center my-12 shadow-lg">
            <h3 className="text-3xl font-bold mb-4">Fikk du avslag på grunn av "teknisk feil"?</h3>
            <p className="text-xl mb-8 text-red-100">
              Norwegian lyver. ClaimWinger har juridisk ekspertise til å bekjempe denne unnskyldningen og tvinge Norwegian til å betale.
            </p>
            <a href="https://claimwinger.com/no/forsinket-fly" target="_blank" rel="noopener noreferrer">
              <Button size="lg" className="bg-white text-red-700 hover:bg-gray-100 text-lg px-8 py-6">
                Krev erstatning nå
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
            </a>
            <p className="text-sm text-red-200 mt-4">
              ✓ No Win, No Fee | ✓ 98% suksessrate | ✓ 4-8 ukers utbetaling
            </p>
          </div>

          <h2>Oppsummering</h2>
          <p>
            Teknisk feil er <strong>aldri ekstraordinært</strong> ifølge EU-domstolen. Norwegian har fullt ansvar for å vedlikeholde flyparken, og alle tekniske feil faller inn under dette ansvaret. Hvis Norwegian nekter erstatning med begrunnelsen "uforutsigbar teknisk feil", lyver de. ClaimWinger har juridisk ekspertise til å bekjempe denne unnskyldningen og tvinge Norwegian til å betale opptil 600 € i kompensasjon.
          </p>
        </div>
      </article>
    </LayoutNo>
  );
}