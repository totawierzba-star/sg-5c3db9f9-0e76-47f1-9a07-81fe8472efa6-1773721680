import { LayoutNo } from "@/components/LayoutNo";
import { SEO } from "@/components/SEO";
import { Button } from "@/components/ui/button";
import { ArrowRight, Scale, Clock, ShieldCheck, UserX } from "lucide-react";
import Link from "next/link";

export default function NeedRepresentativeNo() {
  return (
    <LayoutNo>
      <SEO 
        title="Trenger jeg å ansette et ombud for å få flyerstatning? [2025]"
        description="Må du bruke advokat for å få penger fra flyselskapet? Vi sammenligner å gjøre det selv vs. å bruke ClaimWinger (No win, no fee)."
        url="https://problemlot.com/no/blog/trenger-jeg-a-ansette-et-ombud-for-a-fa-flyerstatning"
      />

      <article className="container mx-auto px-4 py-12 max-w-4xl">
        <header className="mb-8">
          <Link href="/no/blog" className="text-blue-600 hover:text-blue-700 dark:text-blue-400 text-sm font-medium mb-4 inline-block">
            ← Tilbake til blogg
          </Link>
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-4">
            Trenger jeg å ansette et ombud for å få flyerstatning?
          </h1>
          <div className="flex items-center gap-4 text-sm text-gray-600 dark:text-gray-400">
            <span>3 min lesing</span>
            <span>•</span>
            <span>Oppdatert: Mars 2025</span>
          </div>
        </header>

        {/* Direct Answer Box */}
        <div className="bg-purple-50 dark:bg-purple-900/20 border-l-4 border-purple-600 p-6 mb-8 rounded-r-lg">
          <h2 className="text-xl font-bold text-purple-900 dark:text-purple-100 mb-3">
            Raskt svar: Nei, men det øker sjansene betraktelig
          </h2>
          <div className="space-y-3 text-gray-800 dark:text-gray-200">
            <p>
              Juridisk sett står du helt fritt til å kreve inn erstatningen din (opptil 600 €) direkte fra flyselskapet på egen hånd, gratis.
            </p>
            <p>
              <strong>Utfordringen:</strong> Nesten 50% av alle legitime private krav avvises i første runde med unnskyldningen "ekstraordinære omstendigheter". 
              Flyselskapene vet at forbrukere sjelden tar saken til retten. Ved å bruke et spesialisert ombud eller erstatningsselskap tvinger du dem til å forholde seg til loven.
            </p>
          </div>
        </div>

        <div className="prose dark:prose-invert max-w-none">
          <h2>Gjør-det-selv vs. bruke profesjonelle (Sammenligning)</h2>
          
          <div className="grid md:grid-cols-2 gap-6 my-8">
            <div className="bg-gray-50 dark:bg-gray-800 p-6 rounded-lg border border-gray-200">
              <h3 className="flex items-center text-lg font-bold mb-4 mt-0"><UserX className="w-5 h-5 mr-2" /> Gjør det selv</h3>
              <ul className="space-y-2 mb-0">
                <li className="text-green-600">✅ Du beholder 100% av beløpet (f.eks. 600 €)</li>
                <li className="text-red-600">❌ Mye papirarbeid og skjemaer</li>
                <li className="text-red-600">❌ Høy risiko for avslag (spesielt tekniske feil)</li>
                <li className="text-red-600">❌ Må selv forhandle på engelsk/norsk</li>
                <li className="text-red-600">❌ Saksbehandling tar ofte 3-6 måneder</li>
              </ul>
            </div>

            <div className="bg-blue-50 dark:bg-blue-900/20 p-6 rounded-lg border border-blue-200">
              <h3 className="flex items-center text-lg font-bold mb-4 mt-0"><ShieldCheck className="w-5 h-5 mr-2 text-blue-600" /> Bruke ClaimWinger</h3>
              <ul className="space-y-2 mb-0">
                <li className="text-green-600">✅ Tar bare 2 minutter å sende inn</li>
                <li className="text-green-600">✅ 98% suksessrate i retten</li>
                <li className="text-green-600">✅ Raskere svar fra flyselskapet</li>
                <li className="text-green-600">✅ Zero risiko (ingen regning hvis tap)</li>
                <li className="text-red-600">❌ De trekker provisjon (ca 25-30%) fra utbetalingen</li>
              </ul>
            </div>
          </div>

          <h2>Når bør du ABSOLUTT bruke et ombud?</h2>
          <p>Selv om du prøver selv først, er det noen tilfeller hvor du umiddelbart bør hente inn advokathjelp / et erstatningsselskap:</p>
          <ol>
            <li><strong>Selskapet skylder på "Ekstraordinære omstendigheter"</strong>: Spesielt hvis de hevder teknisk feil. Tekniske feil er nesten aldri ekstraordinære (ihht. EU-domstolen), men flyselskapet håper du ikke vet det.</li>
            <li><strong>Manglende svar etter 6 uker</strong>: Har de ignorert deg? Det krever et advokatbrev for å vekke dem.</li>
            <li><strong>Tilknytningsfly og Codeshare</strong>: Kjøpte billett av KLM, men fløy med Cityhopper? Slike saker har komplekse ansvarsforhold.</li>
            <li><strong>Saken er gammel</strong>: Hvis det gjelder et fly for 1-3 år siden, kreves det spesielle datauttrekk (som værrapporter og flightradar-logg) for å bevise at flyet var forsinket.</li>
          </ol>

          <h2>Rollen til Forbrukerrådet</h2>
          <p>
            I Norge (EØS) kan du også sende saken til Transportklagenemnda (via Forbrukerrådet) helt gratis. Dette er et utmerket alternativ til betalte tjenester. 
            Det eneste problemet er tiden: Nemnda har ofte lang behandlingstid (opptil et år), og avgjørelsene deres er teknisk sett rådgivende (selv om flyselskapene stort sett følger dem).
          </p>

          {/* CTA */}
          <div className="bg-gradient-to-r from-blue-600 to-indigo-700 text-white p-8 rounded-xl my-10 text-center shadow-lg">
            <h3 className="text-2xl font-bold mb-4">La ekspertene ta støyten</h3>
            <p className="mb-6 text-blue-100 text-lg">
              Send inn saken din gratis. Hvis ClaimWinger ikke klarer å skaffe pengene dine, koster det deg ingenting. Helt uten risiko.
            </p>
            <a href="https://claimwinger.com/no" target="_blank" rel="noopener noreferrer">
              <Button size="lg" className="bg-white text-blue-700 hover:bg-gray-100 text-lg px-8 py-6">
                Sjekk saken din gratis her
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
            </a>
          </div>

        </div>
      </article>
    </LayoutNo>
  );
}