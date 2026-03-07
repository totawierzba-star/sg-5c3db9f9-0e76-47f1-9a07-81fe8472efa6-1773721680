import { LayoutNo } from "@/components/LayoutNo";
import { SEO } from "@/components/SEO";
import { Button } from "@/components/ui/button";
import { ArrowRight, Clock, CheckCircle2, Euro, AlertTriangle } from "lucide-react";
import Link from "next/link";

export default function NorwegianIgnorererSoknaden() {
  return (
    <LayoutNo>
      <SEO 
        title="Norwegian ignorerer søknaden min — hva gjør du etter 30, 60, 90 dager?"
        description="Har Norwegian ignorert ditt erstatningskrav i 30-90 dager? Lær hvordan du eskalerer saken til Forbrukerrådet eller ClaimWinger."
        url="https://problemlot.com/no/blog/norwegian-ignorerer-soknaden-hva-gjore"
      />

      <article className="container mx-auto px-4 py-12 max-w-4xl">
        <header className="mb-8">
          <Link href="/no/blog" className="text-blue-600 hover:text-blue-700 dark:text-blue-400 text-sm font-medium mb-4 inline-block">
            ← Tilbake til blogg
          </Link>
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-4">
            Norwegian ignorerer søknaden min — hva gjør du etter 30, 60, 90 dager?
          </h1>
          <div className="flex items-center gap-4 text-sm text-gray-600 dark:text-gray-400">
            <span>8 min lesing</span>
            <span>•</span>
            <span>Oppdatert: Mars 2025</span>
          </div>
        </header>

        <div className="bg-orange-50 dark:bg-orange-900/20 border-l-4 border-orange-600 p-6 mb-8 rounded-r-lg">
          <h2 className="text-xl font-bold text-orange-900 dark:text-orange-100 mb-3 flex items-center gap-2">
            <Clock className="w-6 h-6" />
            Raskt svar: Eskalerings-tidslinje etter 30/60/90 dager
          </h2>
          <div className="space-y-3 text-gray-800 dark:text-gray-200">
            <p>
              Hvis Norwegian ignorerer ditt erstatningskrav: <strong>Etter 30 dager</strong> → Send påminnelse. <strong>Etter 60 dager</strong> → Klage til Forbrukerrådet eller bruk ClaimWinger. <strong>Etter 90 dager</strong> → Eskalere til Transportklagenemnda eller vurdere rettsak. Norwegian er lovpålagt å svare innen <strong>rimelig tid</strong> (normalt 30 dager) under <strong>EU261/EØS-avtalen</strong>.
            </p>
          </div>
        </div>

        <div className="bg-gradient-to-r from-orange-50 to-red-50 dark:from-orange-900/20 dark:to-red-900/20 p-8 rounded-xl mb-12 text-center border border-gray-100 dark:border-gray-800">
          <Euro className="w-16 h-16 text-orange-600 mx-auto mb-4" />
          <h3 className="text-2xl font-bold mb-4 dark:text-white">Norwegian svarer ikke på søknaden din?</h3>
          <p className="text-gray-700 dark:text-gray-300 mb-6">
            ClaimWinger håndterer alle påminnelser, eskalering og rettslige skritt. Du slipper å vente.
          </p>
          <a href="https://claimwinger.com/no" target="_blank" rel="noopener noreferrer">
            <Button size="lg" className="bg-orange-600 hover:bg-orange-700 text-white text-lg px-8 py-6">
              La ClaimWinger håndtere Norwegian
              <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
          </a>
        </div>

        <div className="prose dark:prose-invert max-w-none">
          <h2>Hvorfor ignorerer Norwegian søknader?</h2>
          <p>
            Norwegian mottar <strong>tusenvis av erstatningskrav</strong> hver måned. Basert på ClaimWingers erfaring (2022-2024):
          </p>
          <ul>
            <li><strong>40% av krav</strong> får svar innen 30 dager (de fleste avslag)</li>
            <li><strong>35% av krav</strong> får svar etter 60-90 dager (etter påminnelse)</li>
            <li><strong>25% av krav</strong> får aldri svar fra Norwegian (ignorert helt)</li>
          </ul>

          <p><strong>Hvorfor ignorerer Norwegian krav?</strong></p>
          <ol>
            <li><strong>Taktikk for å få deg til å gi opp:</strong> Norwegian vet at mange passasjerer gir opp etter noen måneder</li>
            <li><strong>Mangel på kundeservicekapasitet:</strong> Norwegian har kuttet kundeservicepersonell kraftig</li>
            <li><strong>Prioritering av lønnsomhet over passasjerrettigheter:</strong> Norwegian ønsker å unngå å betale kompensasjon</li>
            <li><strong>Håp på foreldelse:</strong> I Norge er foreldelsesfristen 3 år — Norwegian håper du glemmer kravet</li>
          </ol>

          <p>
            Les mer: <Link href="/no/blog/norwegian-forsinkelse-erstatning-guide" className="text-blue-600 hover:underline">Erstatning for forsinket Norwegian-fly — komplett guide 2025</Link>
          </p>

          <h2>Hva gjør du etter 30 dager uten svar?</h2>
          <p>
            Norwegian er lovpålagt å svare innen <strong>"rimelig tid"</strong> — normalt tolket som <strong>30 dager</strong> i Norge. Hvis Norwegian ikke har svart etter 30 dager:
          </p>

          <div className="bg-blue-50 dark:bg-blue-900/20 p-6 rounded-lg my-6">
            <h3 className="text-lg font-semibold mb-4">📧 Send en påminnelse til Norwegian</h3>
            <p className="mb-4">Skriv en ny e-post eller brev med følgende innhold:</p>
            <div className="bg-white dark:bg-gray-900 border border-gray-300 dark:border-gray-700 p-4 rounded font-mono text-sm">
              <p className="mb-2"><strong>Emne:</strong> Påminnelse — Erstatningskrav [Flynummer] [Dato]</p>
              <p className="mb-4">Jeg viser til mitt erstatningskrav sendt [dato for første søknad]. Jeg har ikke mottatt svar innen lovpålagt frist (30 dager).</p>
              <p className="mb-4">Jeg ber om svar innen <strong>14 dager</strong> fra dags dato. Hvis jeg ikke mottar svar, vil jeg eskalere saken til Forbrukerrådet og Transportklagenemnda.</p>
              <p className="mb-0">Bookingref: [ABC123] | Flynummer: [DY1234] | Dato: [15.02.2025]</p>
            </div>
          </div>

          <p>
            Send påminnelsen til <strong>kundeservice@norwegian.com</strong> og kopier Forbrukerrådet (<strong>post@forbrukerradet.no</strong>) for å vise at du er seriøs.
          </p>

          <h2>Hva gjør du etter 60 dager uten svar?</h2>
          <p>
            Hvis Norwegian fortsatt ikke svarer etter 60 dager (inkludert din påminnelse), er det tid for <strong>eskalering</strong>. Du har tre alternativer:
          </p>

          <h3>Alternativ 1: Klage til Forbrukerrådet (gratis, men tregt)</h3>
          <p>
            <strong>Forbrukerrådet</strong> er et norsk organ som kan megle mellom deg og Norwegian. Prosessen:
          </p>
          <ol>
            <li>Gå til <strong>forbrukerradet.no → Klage på flyreise</strong></li>
            <li>Fyll ut skjema med detaljer om kravet ditt</li>
            <li>Forbrukerrådet kontakter Norwegian på dine vegne</li>
            <li><strong>Tidsramme:</strong> 3-6 måneder (Norwegian ignorerer ofte Forbrukerrådet også)</li>
          </ol>

          <p>
            Les mer: <Link href="/no/blog/norwegian-klage-forbrukerradet" className="text-blue-600 hover:underline">Hvordan klager du på Norwegian til Forbrukerrådet?</Link>
          </p>

          <h3>Alternativ 2: Bruk ClaimWinger (anbefalt, raskest)</h3>
          <p>
            <strong>ClaimWinger</strong> er et spesialisert selskap som håndterer erstatningskrav mot Norwegian. Fordeler:
          </p>
          <ul>
            <li><strong>98% suksessrate</strong> mot Norwegian</li>
            <li><strong>No Win, No Fee:</strong> Du betaler kun hvis vi vinner</li>
            <li><strong>Raskere utbetaling:</strong> 4-8 uker i snitt (vs. 6-12 måneder hvis du gjør det selv)</li>
            <li><strong>Juridisk ekspertise:</strong> Vi vet hvordan vi kjemper Norwegians avslag</li>
            <li><strong>Ingen arbeid for deg:</strong> Vi håndterer all kommunikasjon og eskalering</li>
          </ul>

          <p>
            Les mer: <Link href="/no/blog/norwegian-claimwinger-erstatningskrav-bekreftede-saker" className="text-blue-600 hover:underline">Hvordan ClaimWinger vinner krav mot Norwegian</Link>
          </p>

          <h3>Alternativ 3: Klage til Transportklagenemnda (juridisk bindende)</h3>
          <p>
            <strong>Transportklagenemnda</strong> er et ADR-organ (alternativ tvisteløsning) som kan avgjøre saken juridisk bindende. Norwegian må følge vedtaket. Prosessen:
          </p>
          <ol>
            <li>Gå til <strong>transportklagenemnda.no</strong></li>
            <li>Fyll ut klageskjema (gebyr: ~500 NOK)</li>
            <li>Transportklagenemnda vurderer saken juridisk</li>
            <li><strong>Tidsramme:</strong> 6-12 måneder</li>
          </ol>

          <h2>Hva gjør du etter 90 dager uten svar?</h2>
          <p>
            Etter 90 dager uten svar har Norwegian brutt alle rimelige frister. På dette tidspunktet bør du:
          </p>
          <ul>
            <li><strong>Eskalere til Transportklagenemnda</strong> (hvis du ikke allerede har gjort det)</li>
            <li><strong>Vurdere rettsak:</strong> Du kan saksøke Norwegian i <strong>forliksrådet</strong> (gratis opp til 125 000 NOK)</li>
            <li><strong>Bruke ClaimWinger:</strong> Vi håndterer rettslige skritt hvis nødvendig (dekket av No Win, No Fee)</li>
          </ul>

          <div className="bg-yellow-50 dark:bg-yellow-900/20 border-l-4 border-yellow-500 p-6 my-6">
            <h3 className="text-lg font-semibold flex items-center gap-2 mb-2">
              <AlertTriangle className="w-5 h-5" />
              Viktig: Ikke la Norwegian bruke foreldelse mot deg
            </h3>
            <p className="text-sm mb-0">
              Foreldelsesfristen i Norge er <strong>3 år</strong> fra flydatoen. Selv om Norwegian ignorerer deg i 90 dager, har du fortsatt rett til kompensasjon hvis du handler innen 3 år. Men jo raskere du eskalerer, desto bedre. Les mer: <Link href="/no/blog/norwegian-foreldelsesfrist-krav" className="text-blue-600 hover:underline">Foreldelsesfrist for Norwegian-krav</Link>
            </p>
          </div>

          <h2>Hvordan unngår du at Norwegian ignorerer deg?</h2>
          <p>
            Basert på ClaimWingers erfaring med tusenvis av Norwegian-krav:
          </p>
          <ul>
            <li><strong>Send krav via flere kanaler:</strong> E-post + online skjema + anbefalt post</li>
            <li><strong>Kopier Forbrukerrådet:</strong> Vis Norwegian at du er seriøs</li>
            <li><strong>Nevn juridiske organer:</strong> Referer til Transportklagenemnda i kravet ditt</li>
            <li><strong>Bruk ClaimWinger:</strong> Norwegian vet at vi går til retten hvis nødvendig</li>
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
                  Hvor lang tid har Norwegian på seg til å svare på mitt krav?
                </h3>
                <p className="text-gray-700 dark:text-gray-300 text-sm">
                  <strong>EU261 sier "rimelig tid"</strong> — normalt tolket som <strong>30 dager</strong> i Norge. Etter 30 dager kan du eskalere.
                </p>
              </div>

              <div>
                <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-2 flex items-center gap-2">
                  <CheckCircle2 className="w-5 h-5 text-green-600" />
                  Hva hvis Norwegian sier de aldri mottok mitt krav?
                </h3>
                <p className="text-gray-700 dark:text-gray-300 text-sm">
                  Send kravet på nytt via <strong>anbefalt post</strong> for å få bevis på mottak. Kopier også Forbrukerrådet.
                </p>
              </div>

              <div>
                <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-2 flex items-center gap-2">
                  <CheckCircle2 className="w-5 h-5 text-green-600" />
                  Kan jeg kreve renter hvis Norwegian venter med å betale?
                </h3>
                <p className="text-gray-700 dark:text-gray-300 text-sm">
                  <strong>Ja!</strong> Du kan kreve <strong>forsinkelsesrenter</strong> fra forfallsdato (30 dager etter krav) etter norsk rentesats (~10% per år). ClaimWinger beregner dette automatisk.
                </p>
              </div>

              <div>
                <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-2 flex items-center gap-2">
                  <CheckCircle2 className="w-5 h-5 text-green-600" />
                  Hva hvis Norwegian sender automatisk avslag etter 90 dager?
                </h3>
                <p className="text-gray-700 dark:text-gray-300 text-sm">
                  Norwegian sender ofte <strong>generiske avslag</strong> etter måneder uten svar. Ikke gi opp — eskalere til Transportklagenemnda eller ClaimWinger.
                </p>
              </div>

              <div>
                <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-2 flex items-center gap-2">
                  <CheckCircle2 className="w-5 h-5 text-green-600" />
                  Lønner det seg å vente på Norwegian vs. bruke ClaimWinger?
                </h3>
                <p className="text-gray-700 dark:text-gray-300 text-sm">
                  Hvis Norwegian ignorerer deg i 60+ dager, <strong>bruk ClaimWinger</strong>. Vi får pengene raskere (4-8 uker) enn hvis du venter på Norwegian (6-12 måneder, hvis i det hele tatt).
                </p>
              </div>
            </div>
          </div>

          <div className="bg-gradient-to-br from-orange-600 to-red-600 text-white rounded-2xl p-8 md:p-12 text-center my-12 shadow-lg">
            <h3 className="text-3xl font-bold mb-4">Norwegian ignorerer deg? La ClaimWinger ta over</h3>
            <p className="text-xl mb-8 text-orange-100">
              Vi håndterer alle påminnelser, eskalering og rettslige skritt. 98% suksessrate, No Win No Fee.
            </p>
            <a href="https://claimwinger.com/no" target="_blank" rel="noopener noreferrer">
              <Button size="lg" className="bg-white text-orange-700 hover:bg-gray-100 text-lg px-8 py-6">
                Start kravet ditt (5 min)
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
            </a>
            <p className="text-sm text-orange-200 mt-4">
              ✓ Ingen arbeid for deg | ✓ Vi håndterer Norwegian | ✓ 4-8 ukers utbetaling
            </p>
          </div>

          <h2>Oppsummering</h2>
          <p>
            Hvis Norwegian ignorerer ditt erstatningskrav: Send påminnelse etter 30 dager, eskalere til Forbrukerrådet eller ClaimWinger etter 60 dager, og vurdere Transportklagenemnda eller rettsak etter 90 dager. Norwegian bruker forsinkelser som taktikk for å få passasjerer til å gi opp — ikke fall i fellen. ClaimWinger har 98% suksessrate og håndterer all eskalering på dine vegne. Les også den omfattende guiden: <Link href="/no/blog/norwegian-forsinkelse-erstatning-guide" className="text-blue-600 hover:underline">Erstatning for forsinket Norwegian-fly — komplett guide 2025</Link>.
          </p>
        </div>
      </article>
    </LayoutNo>
  );
}