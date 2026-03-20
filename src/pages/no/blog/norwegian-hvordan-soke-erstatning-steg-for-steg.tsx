import { LayoutNo } from "@/components/LayoutNo";
import { SEO } from "@/components/SEO";
import { Button } from "@/components/ui/button";
import { ArrowRight, ListChecks, CheckCircle2, Euro, AlertTriangle } from "lucide-react";
import Link from "next/link";

export default function NorwegianHvordanSokeErstatningStegForSteg() {
  return (
    <LayoutNo>
      <SEO 
        title="Hvordan søker du om erstatning fra Norwegian steg for steg?"
        description="Komplett guide til å søke om erstatning fra Norwegian. Lær hvilke dokumenter du trenger, hvordan du sender kravet, og hva du gjør hvis de nekter."
        url="https://problemlot.com/no/blog/norwegian-hvordan-soke-erstatning-steg-for-steg"
      />

      <article className="container mx-auto px-4 py-12 max-w-4xl">
        <header className="mb-8">
          <Link href="/no/blog" className="text-blue-600 hover:text-blue-700 dark:text-blue-400 text-sm font-medium mb-4 inline-block">
            ← Tilbake til blogg
          </Link>
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-4">
            Hvordan søker du om erstatning fra Norwegian steg for steg?
          </h1>
          <div className="flex items-center gap-4 text-sm text-gray-600 dark:text-gray-400">
            <span>7 min lesing</span>
            <span>•</span>
            <span>Oppdatert: Mars 2025</span>
          </div>
        </header>

        <div className="bg-indigo-50 dark:bg-indigo-900/20 border-l-4 border-indigo-600 p-6 mb-8 rounded-r-lg">
          <h2 className="text-xl font-bold text-indigo-900 dark:text-indigo-100 mb-3 flex items-center gap-2">
            <ListChecks className="w-6 h-6" />
            Raskt svar: 5 steg til å søke om erstatning fra Norwegian
          </h2>
          <div className="space-y-3 text-gray-800 dark:text-gray-200">
            <p>
              For å søke om erstatning fra Norwegian (250-600 € under <strong>EU261/EØS-avtalen</strong>) må du: (1) Samle bevis, (2) Send krav til Norwegian, (3) Forvent avslag, (4) Eskalere til Forbrukerrådet eller ClaimWinger, (5) Vær tålmodig og vedvarende. Prosessen tar normalt 4-12 uker hvis Norwegian godkjenner, men kan ta måneder hvis de nekter.
            </p>
          </div>
        </div>

        <div className="bg-gradient-to-r from-indigo-50 to-purple-50 dark:from-indigo-900/20 dark:to-purple-900/20 p-8 rounded-xl mb-12 text-center border border-gray-100 dark:border-gray-800">
          <Euro className="w-16 h-16 text-indigo-600 mx-auto mb-4" />
          <h3 className="text-2xl font-bold mb-4 dark:text-white">Norwegian forsinket eller kansellert?</h3>
          <p className="text-gray-700 dark:text-gray-300 mb-6">
            Hopp over den kompliserte prosessen — la ClaimWinger håndtere alt for deg.
          </p>
          <a href="https://claimwinger.com/no" target="_blank" rel="noopener noreferrer">
            <Button size="lg" className="bg-indigo-600 hover:bg-indigo-700 text-white text-lg px-8 py-6">
              Søk om erstatning nå (5 min)
              <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
          </a>
        </div>

        <div className="prose dark:prose-invert max-w-none">
          <h2>Steg 1: Samle dokumentasjon og bevis</h2>
          <p>
            Før du sender kravet til Norwegian, samle følgende dokumenter:
          </p>
          
          <div className="bg-gray-50 dark:bg-gray-800 p-6 rounded-lg my-6">
            <h3 className="text-lg font-semibold mb-4">📋 Obligatoriske dokumenter:</h3>
            <ul className="space-y-2">
              <li>✅ <strong>Boardingkort</strong> (papir eller digitalt skjermbilde)</li>
              <li>✅ <strong>Bookingbekreftelse</strong> med flynummer og bookingref</li>
              <li>✅ <strong>Bevis på forsinkelse/kansellering:</strong> Skjermbilde fra flyplassmonitor, Norwegian-app, eller FlightRadar24</li>
              <li>✅ <strong>Kvitteringer</strong> (hvis du hadde utgifter: hotell, måltider, transport)</li>
            </ul>
          </div>

          <p>
            <strong>Tips:</strong> Hvis du ikke har boardingkortet lenger, kan du be Norwegian om kopi av passasjerlisten (PNR-utskrift). De er lovpålagt å gi deg dette.
          </p>

          <p>
            Les mer: <Link href="/no/blog/norwegian-dokumenter-kreve-erstatning" className="text-blue-600 hover:underline">Hvilke dokumenter trenger du for å kreve erstatning fra Norwegian?</Link>
          </p>

          <h2>Steg 2: Send krav til Norwegian</h2>
          <p>
            Du kan sende kravet til Norwegian på tre måter:
          </p>

          <div className="bg-blue-50 dark:bg-blue-900/20 p-6 rounded-lg my-6">
            <h3 className="text-lg font-semibold mb-4">📧 Metode 1: Online skjema (anbefalt)</h3>
            <ol>
              <li>Gå til <strong>Norwegian.com → Kundeservice → Erstatningskrav</strong></li>
              <li>Fyll ut skjemaet med flynummer, dato, årsak</li>
              <li>Last opp dokumenter (boardingkort, bookingbekreftelse)</li>
              <li>Motta bekreftelse på e-post</li>
            </ol>
          </div>

          <div className="bg-blue-50 dark:bg-blue-900/20 p-6 rounded-lg my-6">
            <h3 className="text-lg font-semibold mb-4">✉️ Metode 2: E-post til kundeservice</h3>
            <p>Send e-post til <strong>kundeservice@norwegian.com</strong> med:</p>
            <ul>
              <li>Flynummer og dato</li>
              <li>Årsak (forsinkelse/kansellering)</li>
              <li>Beløp du krever (250/400/600 €)</li>
              <li>Vedlegg: Boardingkort, bookingbekreftelse</li>
            </ul>
          </div>

          <div className="bg-blue-50 dark:bg-blue-900/20 p-6 rounded-lg my-6">
            <h3 className="text-lg font-semibold mb-4">📝 Metode 3: Brev til Norwegian hovedkontor</h3>
            <p>Send brev til:</p>
            <p className="font-mono text-sm bg-white dark:bg-gray-900 p-4 rounded">
              Norwegian Air Shuttle ASA<br/>
              Kundeservice<br/>
              Postboks 115<br/>
              1330 Fornebu<br/>
              Norge
            </p>
          </div>

          <p>
            Les mer: <Link href="/no/blog/norwegian-klagebrev-mal" className="text-blue-600 hover:underline">Hvordan skriver du et effektivt klagebrev til Norwegian?</Link>
          </p>

          <h2>Steg 3: Forvent avslag (dessverre vanlig)</h2>
          <p>
            <strong>Statistikk:</strong> Norwegian avslår omtrent <strong>70% av krav</strong> første gang, ofte med falske unnskyldninger som:
          </p>
          <ul>
            <li><strong>"Ekstraordinære omstendigheter"</strong> (vær, teknisk feil, ATC-strike)</li>
            <li><strong>"Du fikk alternativt fly"</strong> (selv om det også var forsinket)</li>
            <li><strong>"Flyet var mindre enn 3 timer forsinket"</strong> (feil beregning)</li>
            <li><strong>"LowFare inkluderer ikke erstatning"</strong> (feil — EU261 gjelder alle billetter)</li>
          </ul>

          <div className="bg-yellow-50 dark:bg-yellow-900/20 border-l-4 border-yellow-500 p-6 my-6">
            <h3 className="text-lg font-semibold flex items-center gap-2 mb-2">
              <AlertTriangle className="w-5 h-5" />
              Ikke godta avslag uten å sjekke fakta
            </h3>
            <p className="text-sm mb-0">
              Norwegian bruker ofte <strong>generiske avslag</strong> som ikke stemmer med virkelige forhold. Sjekk værdata (yr.no), flytrafikk (FlightRadar24), og andre flyselskap samme dag. Hvis andre fly landet på tid, må Norwegian betale.
            </p>
          </div>

          <p>
            Les mer: <Link href="/no/blog/norwegian-nektet-erstatning-hva-gjore" className="text-blue-600 hover:underline">Norwegian nektet erstatning — hva gjør du videre?</Link>
          </p>

          <h2>Steg 4: Eskalere kravet</h2>
          <p>
            Hvis Norwegian nekter erstatning, har du tre alternativer:
          </p>

          <div className="bg-indigo-50 dark:bg-indigo-900/20 p-6 rounded-lg my-6">
            <h3 className="text-lg font-semibold mb-4">🏛️ Alternativ 1: Klage til Forbrukerrådet</h3>
            <p>
              <strong>Forbrukerrådet</strong> er et gratis norsk organ som kan hjelpe deg med å megle kravet mot Norwegian:
            </p>
            <ul>
              <li>Gå til <strong>forbrukerradet.no/klageskjema</strong></li>
              <li>Fyll ut skjema med flynummer, dato, Norwegians avslag</li>
              <li>Forbrukerrådet kontakter Norwegian på dine vegne</li>
              <li>Prosess tar vanligvis 2-6 måneder</li>
            </ul>
            <p>
              Les mer: <Link href="/no/blog/norwegian-klage-forbrukerradet" className="text-blue-600 hover:underline">Hvordan klager du på Norwegian til Forbrukerrådet?</Link>
            </p>
          </div>

          <div className="bg-indigo-50 dark:bg-indigo-900/20 p-6 rounded-lg my-6">
            <h3 className="text-lg font-semibold mb-4">⚖️ Alternativ 2: Klage til Transportklagenemnda</h3>
            <p>
              <strong>Transportklagenemnda</strong> er et ADR-organ (Alternative Dispute Resolution) som kan avgjøre saken juridisk bindende:
            </p>
            <ul>
              <li>Gå til <strong>transportklagenemnda.no</strong></li>
              <li>Send klage med dokumentasjon</li>
              <li>Nemnda avgjør saken innen 90 dager</li>
              <li>Avgjørelsen er bindende for Norwegian</li>
            </ul>
          </div>

          <div className="bg-green-50 dark:bg-green-900/20 p-6 rounded-lg my-6">
            <h3 className="text-lg font-semibold mb-4">✈️ Alternativ 3: Bruk ClaimWinger (anbefalt)</h3>
            <p>
              <strong>ClaimWinger</strong> er et spesialisert erstatningsselskap som håndterer alt for deg:
            </p>
            <ul>
              <li><strong>No Win, No Fee:</strong> Du betaler kun hvis du vinner (typisk 25-30% av erstatningen)</li>
              <li><strong>Rask prosess:</strong> ClaimWinger har direkte kontakt med Norwegian og juridisk ekspertise</li>
              <li><strong>Høy suksessrate:</strong> 98% mot Norwegian</li>
              <li><strong>Ingen arbeid for deg:</strong> ClaimWinger håndterer all kommunikasjon og rettsak hvis nødvendig</li>
            </ul>
            <p className="mt-4">
              <a href="https://claimwinger.com/no" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline">
                → Start kravet ditt med ClaimWinger (5 minutter)
              </a>
            </p>
          </div>

          <h2>Steg 5: Vær tålmodig og vedvarende</h2>
          <p>
            Erstatningsprosessen kan ta tid, spesielt hvis Norwegian nekter første gang:
          </p>
          <ul>
            <li><strong>Første krav:</strong> 4-8 uker (hvis godkjent)</li>
            <li><strong>Avslag + Forbrukerrådet:</strong> 3-6 måneder</li>
            <li><strong>Transportklagenemnda:</strong> 90 dager</li>
            <li><strong>Rettsak:</strong> 6-12 måneder</li>
          </ul>

          <p>
            Les mer: <Link href="/no/blog/norwegian-hvor-lang-tid-betale-erstatning" className="text-blue-600 hover:underline">Hvor lang tid tar det for Norwegian å betale erstatning?</Link>
          </p>

          <div className="bg-gray-50 dark:bg-gray-800 p-8 rounded-xl my-12">
            <h2 className="text-2xl font-bold mb-6 text-gray-900 dark:text-white">Ofte stilte spørsmål</h2>
            
            <div className="space-y-6">
              <div>
                <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-2 flex items-center gap-2">
                  <CheckCircle2 className="w-5 h-5 text-green-600" />
                  Må jeg betale for å søke om erstatning?
                </h3>
                <p className="text-gray-700 dark:text-gray-300 text-sm">
                  <strong>Nei!</strong> Du kan søke gratis direkte til Norwegian eller via Forbrukerrådet. Hvis du bruker ClaimWinger, betaler du kun hvis du vinner (No Win, No Fee).
                </p>
              </div>

              <div>
                <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-2 flex items-center gap-2">
                  <CheckCircle2 className="w-5 h-5 text-green-600" />
                  Hvor lang tid har jeg på meg til å søke?
                </h3>
                <p className="text-gray-700 dark:text-gray-300 text-sm">
                  I Norge er foreldelsesfristen <strong>3 år</strong> fra flydatoen. Du kan søke om erstatning når som helst innen denne fristen.
                </p>
              </div>

              <div>
                <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-2 flex items-center gap-2">
                  <CheckCircle2 className="w-5 h-5 text-green-600" />
                  Hva hvis Norwegian ikke svarer på kravet mitt?
                </h3>
                <p className="text-gray-700 dark:text-gray-300 text-sm">
                  Send en påminnelse etter 30 dager. Hvis Norwegian fortsatt ikke svarer etter 60 dager, eskalere til Forbrukerrådet eller ClaimWinger. Les mer: <Link href="/no/blog/norwegian-ignorerer-soknaden-hva-gjore" className="text-blue-600 hover:underline">Norwegian ignorerer søknaden min</Link>
                </p>
              </div>

              <div>
                <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-2 flex items-center gap-2">
                  <CheckCircle2 className="w-5 h-5 text-green-600" />
                  Kan jeg kreve erstatning hvis jeg kjøpte billetten via tredjepart?
                </h3>
                <p className="text-gray-700 dark:text-gray-300 text-sm">
                  <strong>Ja!</strong> Erstatningsretten er uavhengig av hvor du kjøpte billetten. Du sender kravet direkte til Norwegian, ikke booking-siden.
                </p>
              </div>

              <div>
                <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-2 flex items-center gap-2">
                  <CheckCircle2 className="w-5 h-5 text-green-600" />
                  Lønner det seg å bruke ClaimWinger vs. gjøre det selv?
                </h3>
                <p className="text-gray-700 dark:text-gray-300 text-sm">
                  Hvis Norwegian godkjenner første gang, får du 100% ved å gjøre det selv. Men hvis de nekter (70% av tilfellene), sparer ClaimWinger deg for måneder med jobb og stress. Les mer: <Link href="/no/blog/lonner-det-seg-a-bruke-et-erstatningsselskap-for-flykrav" className="text-blue-600 hover:underline">Lønner det seg å bruke et erstatningsselskap?</Link>
                </p>
              </div>
            </div>
          </div>

          <div className="bg-gradient-to-br from-indigo-600 to-purple-700 text-white rounded-2xl p-8 md:p-12 text-center my-12 shadow-lg">
            <h3 className="text-3xl font-bold mb-4">Hopp over stresset — la ClaimWinger håndtere det</h3>
            <p className="text-xl mb-8 text-indigo-100">
              ClaimWinger har 98% suksessrate mot Norwegian. No Win, No Fee. Få pengene dine på 4-8 uker.
            </p>
            <a href="https://claimwinger.com/no" target="_blank" rel="noopener noreferrer">
              <Button size="lg" className="bg-white text-indigo-700 hover:bg-gray-100 text-lg px-8 py-6">
                Start kravet ditt nå (5 min)
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
            </a>
            <p className="text-sm text-indigo-200 mt-4">
              ✓ Ingen risiko | ✓ Juridisk ekspertise | ✓ Rask utbetaling
            </p>
          </div>

          <h2>Oppsummering</h2>
          <p>
            Å søke om erstatning fra Norwegian krever fem steg: (1) Samle dokumentasjon, (2) Send krav til Norwegian, (3) Forvent avslag, (4) Eskalere til Forbrukerrådet/ClaimWinger, (5) Vær tålmodig. Norwegian nekter omtrent 70% av krav første gang, så vær forberedt på å kjempe for dine rettigheter. ClaimWinger kan håndtere hele prosessen for deg med høy suksessrate. Les også den omfattende guiden: <Link href="/no/blog/norwegian-forsinkelse-erstatning-guide" className="text-blue-600 hover:underline">Erstatning for forsinket Norwegian-fly — komplett guide 2025</Link>.
          </p>
        </div>
      </article>
    </LayoutNo>
  );
}
