import { LayoutNo } from "@/components/LayoutNo";
import { SEO } from "@/components/SEO";
import { Button } from "@/components/ui/button";
import { ArrowRight, Calculator, CheckCircle2, AlertTriangle } from "lucide-react";
import Link from "next/link";

export default function WorthUsingCompensationCompanyNo() {
  return (
    <LayoutNo>
      <SEO 
        title="Lønner det seg å bruke et erstatningsselskap for flykrav? [2025]"
        description="Få 100% selv eller bruke ClaimWinger mot 25-30% provisjon? Vi ser på matematikken, suksessraten og tidsbruken for flykompensasjon i Norge."
        url="https://problemlot.com/no/blog/lonner-det-seg-a-bruke-et-erstatningsselskap-for-flykrav"
      />

      <article className="container mx-auto px-4 py-12 max-w-4xl">
        <header className="mb-8">
          <Link href="/no/blog" className="text-blue-600 hover:text-blue-700 dark:text-blue-400 text-sm font-medium mb-4 inline-block">
            ← Tilbake til blogg
          </Link>
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-4">
            Lønner det seg å bruke et erstatningsselskap for flykrav?
          </h1>
          <div className="flex items-center gap-4 text-sm text-gray-600 dark:text-gray-400">
            <span>4 min lesing</span>
            <span>•</span>
            <span>Oppdatert: Mars 2025</span>
          </div>
        </header>

        {/* Direct Answer Box */}
        <div className="bg-blue-50 dark:bg-blue-900/20 border-l-4 border-blue-600 p-6 mb-8 rounded-r-lg">
          <h2 className="text-xl font-bold text-blue-900 dark:text-blue-100 mb-3 flex items-center gap-2">
            <Calculator className="w-6 h-6" />
            Raskt svar: For de fleste er svaret JA
          </h2>
          <div className="space-y-3 text-gray-800 dark:text-gray-200">
            <p>
              Å bruke et selskap som <strong>ClaimWinger</strong> koster deg 25-30% av erstatningen, MEN:
            </p>
            <ul className="space-y-1 ml-4">
              <li>✅ Suksessraten er over <strong>98%</strong> (mot ca. 45% for privatpersoner).</li>
              <li>✅ Du sparer timesvis med byråkrati, telefonkøer og purringer.</li>
              <li>✅ Flyselskap som Norwegian og SAS prøver ofte å avslå gyldige private krav med unnskyldningen "ekstraordinære omstendigheter".</li>
              <li>✅ Du har "No Win, No Fee" garanti. Får du ingen erstatning, betaler du null.</li>
            </ul>
          </div>
        </div>

        <div className="prose dark:prose-invert max-w-none">
          <h2>Matematikken: Hva får du faktisk utbetalt?</h2>
          <p>
            Mange tenker: "Hvorfor skal jeg gi bort 30% av pengene mine når jeg kan gjøre det gratis selv?" 
            La oss se på regnestykket for en standard langdistanseforsinkelse hvor du har rett på <strong>600 €</strong> (ca. 7000 NOK).
          </p>

          <div className="grid md:grid-cols-2 gap-6 my-6">
            <div className="bg-gray-50 dark:bg-gray-800 p-6 rounded-lg border border-gray-200 dark:border-gray-700">
              <h3 className="font-bold text-lg mb-2">Alternativ 1: Gjør det selv</h3>
              <p className="mb-2"><strong>Potensiell utbetaling:</strong> 600 €</p>
              <p className="mb-2"><strong>Arbeidstid:</strong> 3-10 timer (skjemaer, purringer, klage til Forbrukerrådet)</p>
              <p className="mb-2"><strong>Sjanse for utbetaling:</strong> Middels (Flyselskapet vil ofte teste om du gir opp)</p>
              <p className="text-red-600 dark:text-red-400 font-semibold mt-4">Risiko: Du gir opp og ender med 0 €</p>
            </div>

            <div className="bg-green-50 dark:bg-green-900/20 p-6 rounded-lg border border-green-200 dark:border-green-800">
              <h3 className="font-bold text-lg mb-2">Alternativ 2: ClaimWinger</h3>
              <p className="mb-2"><strong>Brutto erstatning:</strong> 600 €</p>
              <p className="mb-2 text-red-600 dark:text-red-400"><strong>- Provisjon (ca 30%):</strong> - 180 €</p>
              <p className="mb-2 text-green-700 dark:text-green-300 font-bold text-xl"><strong>Du får utbetalt:</strong> 420 €</p>
              <p className="mb-2 mt-4"><strong>Arbeidstid:</strong> 2 minutter</p>
            </div>
          </div>

          <h2>Når bør du prøve selv først?</h2>
          <p>
            Det finnes situasjoner hvor det er fornuftig å sende en klage direkte til flyselskapet først:
          </p>
          <ul>
            <li>Hvis saken er 100% åpenbar (for eksempel hvis flyselskapet selv bekreftet på SMS at feilen var deres).</li>
            <li>Du har mye tid, liker juridiske prosesser og har is i magen til å vente 6 måneder.</li>
            <li>Kravet gjelder kun utlegg (mat/hotell) og ikke selve EU261-kompensasjonen.</li>
          </ul>

          <div className="bg-yellow-50 dark:bg-yellow-900/20 border-l-4 border-yellow-500 p-6 my-6">
            <h3 className="text-lg font-semibold flex items-center gap-2 mb-2">
              <AlertTriangle className="w-5 h-5" />
              Advarsel om "Ekstraordinære omstendigheter"
            </h3>
            <p className="text-sm mb-0">
              Flyselskaper avviser ofte private krav systematisk ved å skylde på vær, trafikkontroll eller "tekniske feil". 
              De vet at du som privatperson sjelden har tilgang til radarlogger eller værhistorikk for å motbevise dem. 
              Erstatningsselskaper sjekker denne dataen automatisk og kan tvinge selskapet til å betale.
            </p>
          </div>

          <h2>EU-forordning 261 og Norsk lov</h2>
          <p>
            I Norge (gjennom EØS-avtalen) er flyselskapene pålagt å svare innen 6 uker, men sanksjonene er milde. 
            Hvis de ignorerer deg, må du gå til Transportklagenemnda (via Forbrukerrådet). Dette er gratis, men <strong>saksbehandlingstiden der er ofte 6-12 måneder</strong>.
            I kontrast kan et selskap som ClaimWinger sende et advokatvarsel som ofte får flyselskapet til å betale innen noen uker for å unngå rettssak.
          </p>

          <h2>Hvordan ClaimWinger fungerer ("No Win, No Fee")</h2>
          <ol>
            <li><strong>Gratis sjekk:</strong> Du legger inn flynummer og dato i kalkulatoren deres. Systemet sjekker umiddelbart mot globale flydatabaser om du har et gyldig krav.</li>
            <li><strong>Innsending:</strong> Du signerer digitalt (tar 2 minutter).</li>
            <li><strong>Forhandling:</strong> ClaimWinger tar all kommunikasjon med flyselskapet.</li>
            <li><strong>Rettslig skritt:</strong> Hvis selskapet nekter, tar ClaimWingers advokater dem til retten (uten kostnad for deg).</li>
            <li><strong>Utbetaling:</strong> Pengene kommer inn på konto, minus provisjon. Hvis saken tapes, betaler du ingenting.</li>
          </ol>

          {/* CTA */}
          <div className="bg-gradient-to-br from-blue-600 to-indigo-700 text-white rounded-2xl p-8 md:p-12 text-center mt-12 shadow-lg">
            <h3 className="text-3xl font-bold mb-4">Slipp stresset — få pengene</h3>
            <p className="text-xl mb-8 text-blue-100">
              Sjekk om du har rett på erstatning gratis. Du betaler kun hvis vi skaffer pengene dine.
            </p>
            <a href="https://claimwinger.com/no" target="_blank" rel="noopener noreferrer">
              <Button size="lg" className="bg-white text-blue-700 hover:bg-gray-100 text-lg px-8 py-6">
                Beregn min erstatning nå
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
            </a>
          </div>
        </div>
      </article>
    </LayoutNo>
  );
}