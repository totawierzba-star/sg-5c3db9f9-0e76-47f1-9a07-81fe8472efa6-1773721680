import { LayoutNo } from "@/components/LayoutNo";
import { SEO } from "@/components/SEO";
import { Button } from "@/components/ui/button";
import { ArrowRight, XCircle, CheckCircle2, AlertTriangle, Scale } from "lucide-react";
import Link from "next/link";

export default function NorwegianNektetErstatningHvaGjore() {
  return (
    <LayoutNo>
      <SEO 
        title="Norwegian nektet erstatning – hva gjør du videre? [Juridisk guide 2025]"
        description="Norwegian avviste kravet ditt? Finn ut hvorfor flyselskap nekter gyldige krav og hvordan du kan vinne likevel gjennom Forbrukerrådet eller ClaimWinger."
        url="https://problemlot.com/no/blog/norwegian-nektet-erstatning-hva-gjore"
      />

      <article className="container mx-auto px-4 py-12 max-w-4xl">
        <header className="mb-8">
          <Link href="/no/blog" className="text-blue-600 hover:text-blue-700 dark:text-blue-400 text-sm font-medium mb-4 inline-block">
            ← Tilbake til blogg
          </Link>
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-4">
            Norwegian nektet erstatning – hva gjør du videre?
          </h1>
          <div className="flex items-center gap-4 text-sm text-gray-600 dark:text-gray-400">
            <span>8 min lesing</span>
            <span>•</span>
            <span>Oppdatert: Mars 2025</span>
          </div>
        </header>

        {/* Quick Answer */}
        <div className="bg-red-50 dark:bg-red-900/20 border-l-4 border-red-600 p-6 mb-8 rounded-r-lg">
          <h2 className="text-xl font-bold text-red-900 dark:text-red-100 mb-3 flex items-center gap-2">
            <XCircle className="w-6 h-6" />
            Norwegian nektet – ikke gi opp, du har flere muligheter
          </h2>
          <div className="space-y-3 text-gray-800 dark:text-gray-200">
            <p>
              Hvis Norwegian avviser kravet ditt, betyr det <strong>IKKE</strong> at du ikke har rett til erstatning. Flyselskap nekter systematisk gyldige krav i håp om at passasjerer gir opp. Du har tre muligheter:
            </p>
            <ul className="ml-4 space-y-1">
              <li>1. <strong>Klage til Forbrukerrådet</strong> (gratis, men tar 6-12 måneder)</li>
              <li>2. <strong>Bruk ClaimWinger</strong> (advokater tar saken, ingen risiko)</li>
              <li>3. <strong>Ta Norwegian til småkravsretten</strong> (kostbart, tidkrevende)</li>
            </ul>
          </div>
        </div>

        {/* CTA 1 */}
        <div className="bg-gradient-to-r from-red-50 to-orange-50 dark:from-red-900/20 dark:to-orange-900/20 p-8 rounded-xl mb-12 text-center border border-gray-100 dark:border-gray-800">
          <Scale className="w-16 h-16 text-red-600 mx-auto mb-4" />
          <h3 className="text-2xl font-bold mb-4 dark:text-white">Norwegian avviste kravet ditt?</h3>
          <p className="text-gray-700 dark:text-gray-300 mb-6">
            La ClaimWinger ta kampen for deg. Advokater med 98% suksessrate mot Norwegian. Ingen risiko.
          </p>
          <a href="https://claimwinger.com/no" target="_blank" rel="noopener noreferrer">
            <Button size="lg" className="bg-red-600 hover:bg-red-700 text-white text-lg px-8 py-6">
              Få juridisk hjelp nå
              <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
          </a>
        </div>

        <div className="prose dark:prose-invert max-w-none">
          <h2>Hvorfor nekter Norwegian gyldige krav?</h2>
          <p>
            Norwegian (som de fleste lavprisflyselskap) har en systematisk strategi for å avvise erstatningskrav – selv når de er 100% gyldige under <strong>EU-forordning 261/2004</strong> (som gjelder i Norge gjennom <strong>EØS-avtalen</strong>).
          </p>
          <p>
            Ifølge statistikk fra <strong>Transportklagenemnda</strong> (norsk ADR-organ under Forbrukerrådet) tapte Norwegian over <strong>60% av sakene</strong> som gikk til nemndabehandling i 2024. Det betyr at de opprinnelig nektet krav som senere ble godkjent av nemnda.
          </p>
          <p><strong>Hvorfor gjør de dette?</strong></p>
          <ul>
            <li>De håper passasjerer gir opp (mange gjør det)</li>
            <li>De utsetter utbetaling og sparer penger på rentefri kreditt</li>
            <li>De tester om du virkelig kjenner dine rettigheter</li>
          </ul>
          <p>
            Les mer om grunnlaget: <Link href="/no/blog/norwegian-forsinkelse-erstatning-guide" className="text-blue-600 hover:underline">Erstatning for forsinket Norwegian-fly – komplett guide 2025</Link>
          </p>

          <h2>Vanligste årsaker til avslag (og hvorfor de er ulovlige)</h2>

          <div className="grid sm:grid-cols-2 gap-4 my-6">
            <div className="border-2 border-red-300 bg-red-50 dark:bg-red-900/20 p-5 rounded-lg">
              <h4 className="font-bold text-red-700 dark:text-red-400 mb-3">❌ Norwegians falske begrunnelser</h4>
              <ul className="text-sm space-y-1">
                <li>✓ "Teknisk feil var uforutsigbar"</li>
                <li>✓ "Været var dårlig"</li>
                <li>✓ "Vi tok alle rimelige forholdsregler"</li>
                <li>✓ "Forsinkelsen var under 3 timer"</li>
                <li>✓ "Du har ikke rett til erstatning"</li>
              </ul>
            </div>

            <div className="border-2 border-green-300 bg-green-50 dark:bg-green-900/20 p-5 rounded-lg">
              <h4 className="font-bold text-green-700 dark:text-green-400 mb-3">✅ Sannheten ifølge EU-domstolen</h4>
              <ul className="text-sm space-y-1">
                <li>✓ Teknisk feil = flyselskapets ansvar (C-549/07)</li>
                <li>✓ "Dårlig vær" = må bevises med værdata</li>
                <li>✓ Forsinkelse måles ved landing, ikke avgang</li>
                <li>✓ EU261 gjelder for alle billetttyper</li>
              </ul>
            </div>
          </div>

          <h2>Trinn-for-trinn: Hva gjør du etter avslag?</h2>

          <h3>Steg 1: Analyser avslagsbrevet</h3>
          <p>
            Når Norwegian sender avslag, må de oppgi en <strong>spesifikk begrunnelse</strong>. Les den nøye og still følgende spørsmål:
          </p>
          <ul>
            <li>Hevder de "ekstraordinære omstendigheter"? Hvilke?</li>
            <li>Er begrunnelsen vag eller generell? ("operative årsaker", "tekniske problemer")</li>
            <li>Har de oppgitt konkrete bevis? (værrapporter, streikvarsel, etc.)</li>
          </ul>

          <h3>Steg 2: Samle bevis</h3>
          <p>
            Før du eskalerer saken, skaff dokumentasjon:
          </p>
          <ul>
            <li><strong>Flydatahistorikk:</strong> FlightRadar24 viser nøyaktig avgangstid og ankomsttid</li>
            <li><strong>Værdata:</strong> Hvis Norwegian hevder "dårlig vær", sjekk om andre flyselskap landet samtidig</li>
            <li><strong>Norwegians egen kommunikasjon:</strong> E-poster, SMS, boardingkort</li>
          </ul>

          <h3>Steg 3: Velg eskaleringsrute</h3>

          <h4>Alternativ A: Klage til Forbrukerrådet (gratis)</h4>
          <ol>
            <li>Gå til <a href="https://www.forbrukerradet.no" target="_blank" rel="noopener" className="text-blue-600 hover:underline">forbrukerradet.no</a></li>
            <li>Velg "Fly og reise" → "Forsinkelse/kansellering"</li>
            <li>Fyll ut skjemaet med:
              <ul>
                <li>Flynummer og dato</li>
                <li>Norwegians avslagsbrev</li>
                <li>Din begrunnelse for hvorfor avslaget er feil</li>
                <li>Dokumentasjon (boardingkort, bevis for forsinkelse)</li>
              </ul>
            </li>
            <li>Transportklagenemnda behandler saken (6-12 måneder)</li>
            <li>Avgjørelsen er ikke rettslig bindende, men Norwegian følger den i 95% av tilfellene</li>
          </ol>

          <div className="bg-yellow-50 dark:bg-yellow-900/20 border-l-4 border-yellow-500 p-6 my-6">
            <h3 className="text-lg font-semibold flex items-center gap-2 mb-2">
              <AlertTriangle className="w-5 h-5" />
              Forbrukerrådet tar lang tid
            </h3>
            <p className="text-sm mb-0">
              Transportklagenemnda har for tiden <strong>6-12 måneders saksbehandlingstid</strong>. Hvis du trenger pengene raskt, er ClaimWinger et bedre alternativ (4-8 uker gjennomsnittlig utbetaling).
            </p>
          </div>

          <h4>Alternativ B: Bruk ClaimWinger (anbefalt)</h4>
          <ol>
            <li>Legg inn flynummer på <a href="https://claimwinger.com/no" target="_blank" rel="noopener" className="text-blue-600 hover:underline">claimwinger.com/no</a></li>
            <li>ClaimWingers advokater analyserer Norwegians avslag</li>
            <li>De sender juridisk fundert krav med bevis (Norwegian tar dette mer alvorlig)</li>
            <li>Hvis Norwegian fortsatt nekter: ClaimWinger tar saken til retten</li>
            <li>Du betaler <strong>ingenting</strong> hvis kravet tapes ("No Win, No Fee")</li>
            <li>Provisjon: 25% av utbetalingen (kun ved suksess)</li>
          </ol>

          <h4>Alternativ C: Småkravsretten (ikke anbefalt)</h4>
          <p>
            Du kan ta Norwegian til <strong>Forliksrådet</strong> (småkravsretten), men dette krever:
          </p>
          <ul>
            <li>Gebyr: ~1200 NOK</li>
            <li>Juridisk kompetanse (må skrive stevning)</li>
            <li>Møte i retten (tidkrevende)</li>
            <li>Risiko: Hvis du taper, kan du måtte betale Norwegians advokatkostnader</li>
          </ul>
          <p>
            <strong>Anbefaling:</strong> Ikke velg denne ruten med mindre du har juridisk bakgrunn. ClaimWinger tar all risiko for deg.
          </p>

          <h2>Eksempler på saker ClaimWinger vant mot Norwegian</h2>

          <div className="bg-green-50 dark:bg-green-900/20 p-6 rounded-lg my-6">
            <h4 className="font-semibold mb-2">📌 Sak 1: "Teknisk feil var uforutsigbar"</h4>
            <p className="text-sm mb-4">
              <strong>Norwegians påstand:</strong> "Teknisk feil på flyet var uforutsigbar og ekstraordinær."<br/>
              <strong>ClaimWingers bevis:</strong> EU-domstolen (C-549/07) slår fast at alle tekniske feil faller inn under flyselskapets vedlikeholdsansvar. Norwegian MÅ betale.<br/>
              <strong>Resultat:</strong> Passasjeren fikk 250 € + rentekompensasjon.
            </p>

            <h4 className="font-semibold mb-2">📌 Sak 2: "Været var dårlig"</h4>
            <p className="text-sm mb-4">
              <strong>Norwegians påstand:</strong> "Ekstremvær på Oslo Gardermoen gjorde landing umulig."<br/>
              <strong>ClaimWingers bevis:</strong> FlightRadar24-data viste at SAS, Wizzair og Lufthansa landet til samme tid. Været var derfor ikke ekstraordinært.<br/>
              <strong>Resultat:</strong> Passasjeren fikk 400 €.
            </p>

            <h4 className="font-semibold mb-2">📌 Sak 3: "Forsinkelsen var under 3 timer"</h4>
            <p className="text-sm mb-0">
              <strong>Norwegians påstand:</strong> "Flyet landet bare 2t 50min forsinket."<br/>
              <strong>ClaimWingers bevis:</strong> Flydatahistorikk viste at dørene åpnet 3t 10min etter planlagt ankomst. EU261 måler forsinkelse ved landing.<br/>
              <strong>Resultat:</strong> Passasjeren fikk 250 €.
            </p>
          </div>

          <h2>Hvor lang tid tar det å vinne etter avslag?</h2>
          <ul>
            <li><strong>Forbrukerrådet:</strong> 6-12 måneder fra du sender inn klage til avgjørelse</li>
            <li><strong>ClaimWinger:</strong> 4-8 uker (de presser Norwegian juridisk)</li>
            <li><strong>Småkravsretten:</strong> 3-6 måneder + gebyrer</li>
          </ul>

          {/* FAQ */}
          <div className="bg-gray-50 dark:bg-gray-800 p-8 rounded-xl my-12">
            <h2 className="text-2xl font-bold mb-6 text-gray-900 dark:text-white">Ofte stilte spørsmål</h2>
            
            <div className="space-y-6">
              <div>
                <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-2 flex items-center gap-2">
                  <CheckCircle2 className="w-5 h-5 text-green-600" />
                  Kan Norwegian nekte selv om jeg har rett?
                </h3>
                <p className="text-gray-700 dark:text-gray-300 text-sm">
                  Ja, dessverre. Norwegian avviser systematisk krav i håp om at passasjerer gir opp. Men hvis du eskalerer til Forbrukerrådet eller ClaimWinger, vinner du i de fleste tilfeller.
                </p>
              </div>

              <div>
                <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-2 flex items-center gap-2">
                  <CheckCircle2 className="w-5 h-5 text-green-600" />
                  Hva hvis Norwegian ignorerer Forbrukerrådet?
                </h3>
                <p className="text-gray-700 dark:text-gray-300 text-sm">
                  Transportklagenemnda er ikke rettslig bindende, men Norwegian følger avgjørelsene i 95% av tilfellene. Hvis de nekter, må du ta saken til retten (ClaimWinger gjør dette for deg).
                </p>
              </div>

              <div>
                <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-2 flex items-center gap-2">
                  <CheckCircle2 className="w-5 h-5 text-green-600" />
                  Kan jeg bruke ClaimWinger etter at Norwegian nektet?
                </h3>
                <p className="text-gray-700 dark:text-gray-300 text-sm">
                  Ja! Det er faktisk det ideelle tidspunktet. ClaimWingers advokater analyserer Norwegians avslagsbrev og bygger en sterkere juridisk sak.
                </p>
              </div>

              <div>
                <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-2 flex items-center gap-2">
                  <CheckCircle2 className="w-5 h-5 text-green-600" />
                  Hvor lang tid har jeg på meg etter avslag?
                </h3>
                <p className="text-gray-700 dark:text-gray-300 text-sm">
                  Foreldelsesfristen er <strong>3 år</strong> fra flydatoen (ikke fra avslagsdatoen). Så selv om Norwegian nektet for 1 år siden, kan du fortsatt kreve. Les mer: <Link href="/no/blog/krave-erstatning-fly-3-ar-siden" className="text-blue-600 hover:underline">Kan jeg kreve erstatning for et fly for 3 år siden?</Link>
                </p>
              </div>

              <div>
                <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-2 flex items-center gap-2">
                  <CheckCircle2 className="w-5 h-5 text-green-600" />
                  Betaler Norwegian renter hvis de nektet feilaktig?
                </h3>
                <p className="text-gray-700 dark:text-gray-300 text-sm">
                  Hvis saken går til retten og du vinner, kan du kreve forsinkelsesrenter (morarenter) fra tidspunktet du opprinnelig ba om utbetaling. ClaimWinger inkluderer dette automatisk i kravet.
                </p>
              </div>
            </div>
          </div>

          {/* CTA 2 */}
          <div className="bg-gradient-to-br from-red-600 to-orange-600 text-white rounded-2xl p-8 md:p-12 text-center my-12 shadow-lg">
            <h3 className="text-3xl font-bold mb-4">Norwegian nektet ulovlig? La oss vinne for deg</h3>
            <p className="text-xl mb-8 text-red-100">
              98% suksessrate mot Norwegian. Advokater tar alle kamper. Ingen risiko for deg.
            </p>
            <a href="https://claimwinger.com/no" target="_blank" rel="noopener noreferrer">
              <Button size="lg" className="bg-white text-red-700 hover:bg-gray-100 text-lg px-8 py-6">
                Få juridisk hjelp nå
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
            </a>
            <p className="text-sm text-red-200 mt-4">
              ✓ No Win, No Fee | ✓ 98% suksessrate | ✓ 4-8 ukers utbetaling
            </p>
          </div>

          <h2>Oppsummering</h2>
          <p>
            Hvis Norwegian nekter kravet ditt, gi ikke opp. Flyselskap avviser systematisk gyldige krav i håp om at passasjerer gir opp. Du har tre muligheter: Forbrukerrådet (gratis, men tar 6-12 mnd), ClaimWinger (98% suksessrate, 4-8 uker), eller småkravsretten (kostbart, ikke anbefalt). ClaimWinger er den mest effektive løsningen – deres advokater presser Norwegian juridisk og tar saken til retten hvis nødvendig.
          </p>
        </div>
      </article>
    </LayoutNo>
  );
}