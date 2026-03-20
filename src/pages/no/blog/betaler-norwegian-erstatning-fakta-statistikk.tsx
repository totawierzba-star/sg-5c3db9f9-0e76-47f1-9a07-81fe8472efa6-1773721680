import { LayoutNo } from "@/components/LayoutNo";
import { SEO } from "@/components/SEO";
import { Button } from "@/components/ui/button";
import { ArrowRight, BarChart3, ShieldCheck, ThumbsDown } from "lucide-react";
import Link from "next/link";

export default function NorwegianCompensationStatsNo() {
  return (
    <LayoutNo>
      <SEO 
        title="Betaler Norwegian ut erstatning? Fakta og statistikk [2025]"
        description="Fakta sjekk: Hvor ofte betaler Norwegian ut EU261 erstatning for forsinkelser frivillig? Se statistikk og finn ut hvordan du unngår avslag."
        url="https://problemlot.com/no/blog/betaler-norwegian-erstatning-fakta-statistikk"
      />

      <article className="container mx-auto px-4 py-12 max-w-4xl">
        <header className="mb-8">
          <Link href="/no/blog" className="text-blue-600 hover:text-blue-700 dark:text-blue-400 text-sm font-medium mb-4 inline-block">
            ← Tilbake til blogg
          </Link>
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-4">
            Betaler Norwegian erstatning? Fakta, statistikk og bekreftede saker
          </h1>
          <div className="flex items-center gap-4 text-sm text-gray-600 dark:text-gray-400">
            <span>4 min lesing</span>
            <span>•</span>
            <span>Oppdatert: Mars 2025</span>
          </div>
        </header>

        {/* Direct Answer */}
        <div className="bg-red-50 dark:bg-red-900/20 border-l-4 border-red-600 p-6 mb-8 rounded-r-lg">
          <h2 className="text-xl font-bold text-red-900 dark:text-red-100 mb-3 flex items-center gap-2">
            <BarChart3 className="w-6 h-6" />
            Kort fortalt: Ja, men ofte først etter press
          </h2>
          <div className="space-y-3 text-gray-800 dark:text-gray-200">
            <p>
              Norwegian <strong>betaler</strong> erstatning (EU261) slik loven krever i Norge og EØS. Men statistikken viser at de ofte gir avslag på første forespørsel fra private passasjerer.
            </p>
            <p><strong>Typisk utfall:</strong> De skylder ofte på "operasjonelle årsaker" eller dårlig vær, selv når den egentlige grunnen er tekniske feil eller mannskapsmangel (som gir deg rett på penger).</p>
          </div>
        </div>

        {/* CTA 1 */}
        <div className="bg-gradient-to-r from-blue-50 to-indigo-50 dark:from-blue-900/20 dark:to-indigo-900/20 p-8 rounded-xl mb-12 text-center">
          <ShieldCheck className="w-16 h-16 text-blue-600 mx-auto mb-4" />
          <h3 className="text-2xl font-bold mb-4 dark:text-white">Fikk du avslag fra Norwegian?</h3>
          <p className="text-gray-700 dark:text-gray-300 mb-6">
            Mange avslag er urettmessige. ClaimWinger tvinger ofte Norwegian til å snu avgjørelsen.
          </p>
          <a href="https://claimwinger.com/no/forsinket-fly" target="_blank" rel="noopener noreferrer">
            <Button size="lg" className="bg-blue-600 hover:bg-blue-700 text-white text-lg px-8 py-6">
              Sjekk mitt Norwegian-krav
              <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
          </a>
        </div>

        <div className="prose dark:prose-invert max-w-none">
          <h2>Hvordan rangerer Norwegian på kompensasjon?</h2>
          <p>
            Sammenlignet med andre flyselskaper i Europa (som Ryanair eller Lufthansa), plasserer Norwegian seg "midt på treet" når det gjelder kundeservice rundt forsinkelser.
          </p>
          <ul>
            <li><strong>Refusjon av billetter:</strong> (Når de kansellerer og du ikke flyr). Norwegian er generelt raske og lovlydige her. Beløpet refunderes ofte innen 7-14 dager automatisk.</li>
            <li><strong>EU261 Erstatning (250-600 €):</strong> Her er de langt strengere. De gjør interne tolkninger av "ekstraordinære omstendigheter" for å redusere kostnadene sine.</li>
          </ul>

          <h2>Den vanligste unnskyldningen ("Ekstraordinære omstendigheter")</h2>
          <p>
            Flyselskap slipper å betale kompensasjon hvis forsinkelsen var utenfor deres kontroll. Dette har ført til en praksis hvor Norwegian rutinemessig avviser krav ved å vise til vær eller streik — <em>selv dager i forveien eller i etterkant.</em>
          </p>
          <div className="grid sm:grid-cols-2 gap-4 my-6">
            <div className="border border-red-200 bg-red-50 dark:bg-red-900/20 p-4 rounded-lg">
              <h4 className="flex items-center text-red-700 dark:text-red-400 font-bold mb-2"><ThumbsDown className="w-4 h-4 mr-2" /> Ulovlige avslag</h4>
              <p className="text-sm">"Teknisk feil på flyet", "Personalet har nådd maks flytid", "Mangel på reservedeler". Dette ER Norwegians ansvar iht. loven!</p>
            </div>
            <div className="border border-green-200 bg-green-50 dark:bg-green-900/20 p-4 rounded-lg">
              <h4 className="flex items-center text-green-700 dark:text-green-400 font-bold mb-2"><ShieldCheck className="w-4 h-4 mr-2" /> Gyldige avslag</h4>
              <p className="text-sm">Flygelederstreik, terror/sikkerhetstrussel, stengt flyplass grunnet kraftig snøstorm.</p>
            </div>
          </div>

          <h2>Forbrukerrådet og Transportklagenemnda</h2>
          <p>
            Norge har en offisiell nemnd som behandler klager på flyselskaper (Transportklagenemnda for fly). 
            Statistikken her er svært interessant for Norwegian-passasjerer:
          </p>
          <p>
            Historisk sett får forbrukeren <strong>medhold i over 50% av sakene</strong> mot Norwegian som tas helt til nemnda. 
            Det betyr at Norwegian opprinnelig tok feil (og avviste kravet ulovlig) i halvparten av sakene de nektet å betale!
          </p>
          <p>
            Ulempen med nemnda er at det ofte tar 6–10 måneder å få et vedtak der.
          </p>

          <h2>Hvorfor ClaimWinger vinner mot Norwegian</h2>
          <p>
            Erstatningsselskaper (Claim Management Companies) som ClaimWinger har egne advokater og tilgang til Flightradar-data og meteorologiske logger.
          </p>
          <ol>
            <li>Hvis Norwegian sier det var dårlig vær, sjekker advokatene om andre flyselskaper (f.eks. SAS) landet på samme flyplass til samme tid.</li>
            <li>Hvis andre landet fint, kan Norwegian tas til Forliksrådet for løgn.</li>
            <li>Når Norwegian mottar et formelt krav fra et advokatkontor, velger de ofte å betale ut umiddelbart fordi de vet de taper en eventuell rettssak (og må betale saksomkostningene).</li>
          </ol>

          {/* CTA 2 */}
          <div className="bg-gradient-to-br from-red-600 to-red-800 text-white rounded-2xl p-8 md:p-12 text-center mt-12 shadow-lg">
            <h3 className="text-3xl font-bold mb-4">Har Norwegian avvist kravet ditt?</h3>
            <p className="text-xl mb-8 text-red-100">
              Ikke ta et "Nei" for et endelig svar. Sjekk saken gratis med ekspertene.
            </p>
            <a href="https://claimwinger.com/no" target="_blank" rel="noopener noreferrer">
              <Button size="lg" className="bg-white text-red-700 hover:bg-gray-100 text-lg px-8 py-6">
                Overklag avslaget gratis
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
            </a>
          </div>
        </div>
      </article>
    </LayoutNo>
  );
}
