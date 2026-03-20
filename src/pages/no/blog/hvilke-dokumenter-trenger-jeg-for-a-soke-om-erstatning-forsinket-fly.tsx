import { LayoutNo } from "@/components/LayoutNo";
import { SEO } from "@/components/SEO";
import { Button } from "@/components/ui/button";
import { ArrowRight, FileText, Check, AlertTriangle } from "lucide-react";
import Link from "next/link";

export default function DocumentsNeededForCompensationNo() {
  return (
    <LayoutNo>
      <SEO 
        title="Hvilke dokumenter trenger jeg for flyerstatning? [Guide 2025]"
        description="Boardingkort, PNR-nummer og kvitteringer. Sjekk den komplette sjekklisten over dokumenter du må ha for å kreve erstatning for forsinket fly."
        url="https://problemlot.com/no/blog/hvilke-dokumenter-trenger-jeg-for-a-soke-om-erstatning-forsinket-fly"
      />

      <article className="container mx-auto px-4 py-12 max-w-4xl">
        <header className="mb-8">
          <Link href="/no/blog" className="text-blue-600 hover:text-blue-700 dark:text-blue-400 text-sm font-medium mb-4 inline-block">
            ← Tilbake til blogg
          </Link>
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-4">
            Hvilke dokumenter trenger jeg for å søke om erstatning for forsinket fly?
          </h1>
          <div className="flex items-center gap-4 text-sm text-gray-600 dark:text-gray-400">
            <span>3 min lesing</span>
            <span>•</span>
            <span>Oppdatert: Mars 2025</span>
          </div>
        </header>

        {/* Direct Answer Box */}
        <div className="bg-blue-50 dark:bg-blue-900/20 border-l-4 border-blue-600 p-6 mb-8 rounded-r-lg">
          <h2 className="text-xl font-bold text-blue-900 dark:text-blue-100 mb-3 flex items-center gap-2">
            <FileText className="w-6 h-6" />
            Rask sjekkliste
          </h2>
          <div className="space-y-2 text-gray-800 dark:text-gray-200">
            <p className="font-semibold">Du trenger i utgangspunktet bare to ting for å starte prosessen:</p>
            <ul className="space-y-2 ml-2">
              <li className="flex gap-2"><Check className="w-5 h-5 text-green-600 flex-shrink-0" /> <strong>Bookingreferanse (PNR)</strong> - En 6-sifret kode (f.eks. X7B9K2).</li>
              <li className="flex gap-2"><Check className="w-5 h-5 text-green-600 flex-shrink-0" /> <strong>Boardingkort</strong> - Enten fysisk papir eller digitalt skjermbilde fra appen.</li>
            </ul>
          </div>
        </div>

        {/* CTA 1 */}
        <div className="bg-gradient-to-r from-green-50 to-blue-50 dark:from-green-900/20 dark:to-blue-900/20 p-8 rounded-xl mb-12 text-center border border-gray-100 dark:border-gray-800">
          <h3 className="text-2xl font-bold mb-4 dark:text-white">Har du PNR-nummeret klart?</h3>
          <p className="text-gray-700 dark:text-gray-300 mb-6">
            Det er alt du trenger for å sjekke om flyet ditt kvalifiserer for opptil 600 € i kompensasjon i databasen til ClaimWinger.
          </p>
          <a href="https://claimwinger.com/no" target="_blank" rel="noopener noreferrer">
            <Button size="lg" className="bg-blue-600 hover:bg-blue-700 text-white text-lg px-8 py-6">
              Sjekk kravet mitt gratis
              <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
          </a>
        </div>

        <div className="prose dark:prose-invert max-w-none">
          <h2>1. De essensielle dokumentene (Må ha)</h2>
          
          <h3>Bookingbekreftelsen (E-billett)</h3>
          <p>
            Dette er e-posten du mottok da du kjøpte billetten. Den beviser at du hadde en gyldig billett til den aktuelle flyvningen. Denne inneholder det viktigste nummeret av alle: <strong>PNR-koden</strong> (Booking Reference).
          </p>
          
          <h3>Boardingkort (Ombordstigningskort)</h3>
          <p>
            Dette er ditt bevis på at du faktisk <em>møtte opp</em> på flyplassen i tide til tross for at flyet ble forsinket. 
            Mange flyselskaper (spesielt Ryanair og Wizz Air) er notorisk strenge på at du må legge ved kopi av boardingkort for å få EU261 erstatning.
          </p>
          <div className="bg-yellow-50 dark:bg-yellow-900/20 p-4 rounded-lg my-4 text-sm">
            💡 <strong>Tips:</strong> Hvis du bruker mobil boardingkort, ta et skjermbilde (screenshot) av det før avreise! De forsvinner ofte fra appen når flyvningen er overstått.
          </div>

          <h2>2. Nyttige dokumenter (Kjekt å ha)</h2>
          <p>Disse dokumentene kan styrke saken din, spesielt hvis flyselskapet prøver å unngå å betale:</p>
          <ul>
            <li><strong>SMS eller e-poster om forsinkelsen:</strong> Varsler fra flyselskapet som viser når de informerte deg om kanselleringen eller forsinkelsen.</li>
            <li><strong>Bilder av informasjonstavler:</strong> Ta bilde av skjermene på flyplassen som viser at flyet er "Delayed" eller "Cancelled".</li>
            <li><strong>Bekreftelse fra flyplasspersonalet:</strong> Noen ganger kan du få en utskrift ved gaten som bekrefter årsaken (teknisk feil, forsinket mannskap).</li>
          </ul>

          <h2>3. Dokumenter for utlegg (Mat og Hotell)</h2>
          <p>
            Hvis forsinkelsen var så lang (over 2-4 timer avhengig av distanse) at du måtte kjøpe mat, eller du måtte overnatte på hotell, skal flyselskapet dekke dette under "retten til omsorg". For å få disse pengene tilbake <strong>MÅ DU HA:</strong>
          </p>
          <ul>
            <li>Originale kvitteringer (itemized receipts). En bankutskrift er som regel ikke nok.</li>
            <li>Kvitteringen må vise hva som ble kjøpt (alkohol dekkes sjelden).</li>
          </ul>

          <div className="bg-red-50 dark:bg-red-900/20 border-l-4 border-red-500 p-6 my-6">
            <h3 className="text-lg font-semibold flex items-center gap-2 mb-2">
              <AlertTriangle className="w-5 h-5 text-red-600" />
              Mangler du dokumenter?
            </h3>
            <p className="text-sm mb-0">
              Har du mistet boardingkortet? Du kan fortsatt søke! Profesjonelle byråer som ClaimWinger har tilgang til globale flydatabaser (som FlightRadar loggføring) og kan ofte vinne saken kun ved hjelp av din PNR-kode.
            </p>
          </div>

          <h2>Oppsummering før du klager til Forbrukerrådet eller ClaimWinger</h2>
          <p>Sørg for å ha dette klart som PDF eller JPG på maskinen din:</p>
          <ol>
            <li>Bilde/PDF av boardingkort.</li>
            <li>Bookingbekreftelse (E-post PDF).</li>
            <li>Kopi av ID/Pass (Ofte påkrevd ved pengeoverføringer pga hvitvaskingsregler).</li>
            <li>Din bankkontoinformasjon (IBAN/BIC).</li>
          </ol>
        </div>
      </article>
    </LayoutNo>
  );
}
