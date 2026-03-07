import { LayoutNo } from "@/components/LayoutNo";
import { SEO } from "@/components/SEO";
import { Button } from "@/components/ui/button";
import { ArrowRight, Clock, CheckCircle2, AlertTriangle, Euro } from "lucide-react";
import Link from "next/link";

export default function NorwegianHvorLangTidBetaleErstatning() {
  return (
    <LayoutNo>
      <SEO 
        title="Hvor lang tid tar det for Norwegian å betale erstatning? [2025]"
        description="Norwegian tar for lang tid? Finn ut hva som er normal behandlingstid, hva du gjør hvis de venter, og hvordan ClaimWinger kan hjelpe deg få pengene raskere."
        url="https://problemlot.com/no/blog/norwegian-hvor-lang-tid-betale-erstatning"
      />

      <article className="container mx-auto px-4 py-12 max-w-4xl">
        <header className="mb-8">
          <Link href="/no/blog" className="text-blue-600 hover:text-blue-700 dark:text-blue-400 text-sm font-medium mb-4 inline-block">
            ← Tilbake til blogg
          </Link>
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-4">
            Hvor lang tid tar det for Norwegian å betale erstatning?
          </h1>
          <div className="flex items-center gap-4 text-sm text-gray-600 dark:text-gray-400">
            <span>6 min lesing</span>
            <span>•</span>
            <span>Oppdatert: Mars 2025</span>
          </div>
        </header>

        {/* Quick Answer */}
        <div className="bg-blue-50 dark:bg-blue-900/20 border-l-4 border-blue-600 p-6 mb-8 rounded-r-lg">
          <h2 className="text-xl font-bold text-blue-900 dark:text-blue-100 mb-3 flex items-center gap-2">
            <Clock className="w-6 h-6" />
            Raskt svar: 30-90 dager (eller aldri hvis du ikke følger opp)
          </h2>
          <div className="space-y-3 text-gray-800 dark:text-gray-200">
            <p>
              Ifølge <strong>EU-forordning 261/2004</strong> (som gjelder i Norge gjennom <strong>EØS-avtalen</strong>) har Norwegian <strong>ingen fast frist</strong> for å betale erstatning, men praksis viser:
            </p>
            <ul className="ml-4 space-y-1">
              <li>✅ <strong>Direkte søknad til Norwegian:</strong> 30-60 dager (hvis de svarer)</li>
              <li>⚠️ <strong>Avslag/ingen respons:</strong> 6-12 måneder gjennom Forbrukerrådet</li>
              <li>⚡ <strong>Med ClaimWinger:</strong> 4-8 uker gjennomsnittlig</li>
            </ul>
          </div>
        </div>

        {/* CTA 1 */}
        <div className="bg-gradient-to-r from-blue-50 to-green-50 dark:from-blue-900/20 dark:to-green-900/20 p-8 rounded-xl mb-12 text-center border border-gray-100 dark:border-gray-800">
          <Euro className="w-16 h-16 text-blue-600 mx-auto mb-4" />
          <h3 className="text-2xl font-bold mb-4 dark:text-white">Venter du fortsatt på Norwegian?</h3>
          <p className="text-gray-700 dark:text-gray-300 mb-6">
            ClaimWinger får pengene utbetalt 3-5x raskere enn private krav. Ingen risiko, ingen forhåndsbetaling.
          </p>
          <a href="https://claimwinger.com/no" target="_blank" rel="noopener noreferrer">
            <Button size="lg" className="bg-blue-600 hover:bg-blue-700 text-white text-lg px-8 py-6">
              Få pengene mine nå
              <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
          </a>
        </div>

        <div className="prose dark:prose-invert max-w-none">
          <h2>Hva sier loven om utbetalingstid?</h2>
          <p>
            <strong>EU-forordning 261/2004</strong> (implementert i Norge gjennom <strong>EØS-avtalen</strong>) krever at flyselskap betaler erstatning, men setter ingen spesifikk frist. Artikkel 7 sier kun at kompensasjonen skal betales "uten ugrunnet opphold".
          </p>
          <p>
            I praksis tolkes dette som:
          </p>
          <ul>
            <li><strong>Rimelig tid:</strong> 30-60 dager fra Norwegian mottar kravet</li>
            <li><strong>Komplekse saker:</strong> Opptil 90 dager hvis Norwegian må undersøke årsaken</li>
            <li><strong>Avslag:</strong> Norwegian må svare innen 30 dager, men gjør det sjelden</li>
          </ul>
          <p>
            <strong>Realiteten:</strong> Norwegian utsetter systematisk utbetalinger i håp om at passasjerer gir opp. Derfor ender de fleste private krav hos <strong>Forbrukerrådet</strong> (6-12 måneders saksbehandlingstid).
          </p>
          <p>
            Les mer om grunnlaget: <Link href="/no/blog/norwegian-forsinkelse-erstatning-guide" className="text-blue-600 hover:underline">Erstatning for forsinket Norwegian-fly – komplett guide 2025</Link>
          </p>

          <h2>Typisk tidslinje for Norwegian-krav</h2>

          <div className="overflow-x-auto my-6">
            <table className="w-full border-collapse bg-white dark:bg-gray-800">
              <thead>
                <tr className="bg-blue-600 text-white">
                  <th className="border border-gray-300 dark:border-gray-600 px-4 py-3 text-left">Tidspunkt</th>
                  <th className="border border-gray-300 dark:border-gray-600 px-4 py-3 text-left">Hva skjer</th>
                  <th className="border border-gray-300 dark:border-gray-600 px-4 py-3 text-left">Handling</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td className="border border-gray-300 dark:border-gray-600 px-4 py-3 font-semibold">Dag 0</td>
                  <td className="border border-gray-300 dark:border-gray-600 px-4 py-3">Du sender krav til Norwegian</td>
                  <td className="border border-gray-300 dark:border-gray-600 px-4 py-3">Noter datoen, lagre bevis</td>
                </tr>
                <tr className="bg-gray-50 dark:bg-gray-800/50">
                  <td className="border border-gray-300 dark:border-gray-600 px-4 py-3 font-semibold">Dag 1-7</td>
                  <td className="border border-gray-300 dark:border-gray-600 px-4 py-3">Norwegian sender autorespons</td>
                  <td className="border border-gray-300 dark:border-gray-600 px-4 py-3">Vent</td>
                </tr>
                <tr>
                  <td className="border border-gray-300 dark:border-gray-600 px-4 py-3 font-semibold">Dag 30</td>
                  <td className="border border-gray-300 dark:border-gray-600 px-4 py-3">Forventet svar fra Norwegian</td>
                  <td className="border border-gray-300 dark:border-gray-600 px-4 py-3">Hvis ingen respons: send påminnelse</td>
                </tr>
                <tr className="bg-gray-50 dark:bg-gray-800/50">
                  <td className="border border-gray-300 dark:border-gray-600 px-4 py-3 font-semibold">Dag 60</td>
                  <td className="border border-gray-300 dark:border-gray-600 px-4 py-3">Fortsatt ingen svar</td>
                  <td className="border border-gray-300 dark:border-gray-600 px-4 py-3">Klage til Forbrukerrådet eller bruk ClaimWinger</td>
                </tr>
                <tr>
                  <td className="border border-gray-300 dark:border-gray-600 px-4 py-3 font-semibold">Dag 90+</td>
                  <td className="border border-gray-300 dark:border-gray-600 px-4 py-3">Norwegian ignorerer kravet</td>
                  <td className="border border-gray-300 dark:border-gray-600 px-4 py-3">Juridisk eskalering nødvendig</td>
                </tr>
              </tbody>
            </table>
          </div>

          <h2>Hva gjør du hvis Norwegian venter for lenge?</h2>

          <h3>Alternativ 1: Send påminnelse (dag 30-45)</h3>
          <p>
            Hvis Norwegian ikke har svart innen 30 dager, send en høflig men bestemt påminnelse:
          </p>
          <div className="bg-gray-100 dark:bg-gray-800 p-4 rounded-lg my-4">
            <p className="text-sm mb-0 font-mono">
              "Jeg sendte krav om erstatning [dato]. Jeg har ikke mottatt svar innen rimelig tid (30 dager). Vennligst behandle kravet mitt umiddelbart eller oppgi en forventet behandlingstid.<br/>
              <br/>
              Hvis jeg ikke mottar svar innen 14 dager, vil jeg eskalere saken til Forbrukerrådet."
            </p>
          </div>

          <h3>Alternativ 2: Klage til Forbrukerrådet (dag 60+)</h3>
          <ol>
            <li>Gå til <a href="https://www.forbrukerradet.no" target="_blank" rel="noopener" className="text-blue-600 hover:underline">forbrukerradet.no</a></li>
            <li>Velg "Fly og reise" → "Forsinkelse/kansellering"</li>
            <li>Last opp all dokumentasjon (inkludert Norwegians manglende respons)</li>
            <li>Transportklagenemnda behandler saken (6-12 måneder)</li>
          </ol>

          <h3>Alternativ 3: Bruk ClaimWinger (raskeste løsning)</h3>
          <ol>
            <li>Legg inn flynummer på <a href="https://claimwinger.com/no" target="_blank" rel="noopener" className="text-blue-600 hover:underline">claimwinger.com/no</a></li>
            <li>ClaimWinger presser Norwegian juridisk</li>
            <li>Hvis Norwegian fortsatt nekter: ClaimWingers advokater tar saken til retten</li>
            <li>Gjennomsnittlig utbetaling: <strong>4-8 uker</strong></li>
          </ol>

          <div className="bg-green-50 dark:bg-green-900/20 p-6 rounded-lg my-6">
            <h4 className="font-semibold mb-2">💡 Hvorfor ClaimWinger får pengene raskere</h4>
            <p className="text-sm mb-0">
              Norwegian vet at ClaimWinger har juridisk kompetanse og går til retten hvis nødvendig. De prioriterer derfor ClaimWingers krav over private søknader. I tillegg har ClaimWinger tilgang til radardata og værlogger som beviser forsinkelsesårsaken – Norwegian kan ikke "snakke seg unna".
            </p>
          </div>

          <h2>Kan du kreve forsinkelsesrenter?</h2>
          <p>
            Ja! Hvis Norwegian tar urimelig lang tid (90+ dager uten god grunn), kan du kreve <strong>forsinkelsesrenter (morarenter)</strong> fra tidspunktet du opprinnelig ba om utbetaling.
          </p>
          <p>
            I Norge er forsinkelsesrenten <strong>9,5% per år</strong> (2025). Eksempel:
          </p>
          <ul>
            <li>Du krevde 400 € (ca. 4600 NOK) for 150 dager siden</li>
            <li>Norwegian betaler nå</li>
            <li>Du kan kreve: 4600 NOK × 9,5% × (150/365) = ~179 NOK ekstra</li>
          </ul>
          <p>
            ClaimWinger inkluderer automatisk forsinkelsesrenter i alle krav som tar lengre tid enn 60 dager.
          </p>

          {/* FAQ */}
          <div className="bg-gray-50 dark:bg-gray-800 p-8 rounded-xl my-12">
            <h2 className="text-2xl font-bold mb-6 text-gray-900 dark:text-white">Ofte stilte spørsmål</h2>
            
            <div className="space-y-6">
              <div>
                <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-2 flex items-center gap-2">
                  <CheckCircle2 className="w-5 h-5 text-green-600" />
                  Hvor lang tid har Norwegian på seg å svare?
                </h3>
                <p className="text-gray-700 dark:text-gray-300 text-sm">
                  Loven setter ingen fast frist, men <strong>30 dager</strong> regnes som rimelig tid. Etter 60 dager uten respons kan du klage til Forbrukerrådet.
                </p>
              </div>

              <div>
                <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-2 flex items-center gap-2">
                  <CheckCircle2 className="w-5 h-5 text-green-600" />
                  Hva hvis Norwegian sier "vi undersøker saken"?
                </h3>
                <p className="text-gray-700 dark:text-gray-300 text-sm">
                  Dette er ofte en taktikk for å utsette utbetaling. Hvis de ikke kommer med konkret svar innen 60 dager, eskalér til Forbrukerrådet eller ClaimWinger.
                </p>
              </div>

              <div>
                <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-2 flex items-center gap-2">
                  <CheckCircle2 className="w-5 h-5 text-green-600" />
                  Kan jeg tvinge Norwegian til å betale raskere?
                </h3>
                <p className="text-gray-700 dark:text-gray-300 text-sm">
                  Ikke direkte, men med ClaimWinger får du juridisk press som Norwegian tar seriøst. ClaimWingers gjennomsnittlige utbetalingstid er <strong>4-8 uker</strong> – 3-5x raskere enn private krav.
                </p>
              </div>

              <div>
                <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-2 flex items-center gap-2">
                  <CheckCircle2 className="w-5 h-5 text-green-600" />
                  Hva skjer hvis jeg venter for lenge med å kreve?
                </h3>
                <p className="text-gray-700 dark:text-gray-300 text-sm">
                  Foreldelsesfristen er <strong>3 år</strong> fra flydatoen. Men jo lenger du venter, desto vanskeligere blir det å finne dokumentasjon. Les mer: <Link href="/no/blog/krave-erstatning-fly-3-ar-siden" className="text-blue-600 hover:underline">Kan jeg kreve erstatning for et fly for 3 år siden?</Link>
                </p>
              </div>

              <div>
                <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-2 flex items-center gap-2">
                  <CheckCircle2 className="w-5 h-5 text-green-600" />
                  Betaler Norwegian erstatning på forhånd mens de "undersøker"?
                </h3>
                <p className="text-gray-700 dark:text-gray-300 text-sm">
                  <strong>Nei.</strong> Norwegian betaler aldri før de har avgjort kravet. Dette er en av grunnene til at private krav tar så lang tid.
                </p>
              </div>
            </div>
          </div>

          {/* CTA 2 */}
          <div className="bg-gradient-to-br from-blue-600 to-green-600 text-white rounded-2xl p-8 md:p-12 text-center my-12 shadow-lg">
            <h3 className="text-3xl font-bold mb-4">Lei av å vente på Norwegian?</h3>
            <p className="text-xl mb-8 text-blue-100">
              ClaimWinger får pengene dine utbetalt 3-5x raskere. Ingen risiko, ingen forhåndsbetaling.
            </p>
            <a href="https://claimwinger.com/no" target="_blank" rel="noopener noreferrer">
              <Button size="lg" className="bg-white text-blue-700 hover:bg-gray-100 text-lg px-8 py-6">
                Få pengene mine nå
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
            </a>
            <p className="text-sm text-blue-200 mt-4">
              ✓ No Win, No Fee | ✓ 4-8 ukers utbetaling | ✓ 98% suksessrate
            </p>
          </div>

          <h2>Oppsummering</h2>
          <p>
            Norwegian har ingen fast frist for å betale erstatning, men 30-60 dager regnes som rimelig tid. I praksis ignorerer Norwegian mange private krav, noe som fører til 6-12 måneders saksbehandlingstid hos Forbrukerrådet. ClaimWinger får pengene utbetalt på gjennomsnittlig 4-8 uker ved å presse Norwegian juridisk og true med rettsak hvis nødvendig.
          </p>
        </div>
      </article>
    </LayoutNo>
  );
}