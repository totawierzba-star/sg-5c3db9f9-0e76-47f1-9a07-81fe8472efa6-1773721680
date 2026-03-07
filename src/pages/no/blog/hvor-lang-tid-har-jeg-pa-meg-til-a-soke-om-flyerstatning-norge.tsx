import { LayoutNo } from "@/components/LayoutNo";
import { SEO } from "@/components/SEO";
import { Button } from "@/components/ui/button";
import { ArrowRight, CalendarDays, AlertCircle } from "lucide-react";
import Link from "next/link";

export default function TimeLimitCompensationNo() {
  return (
    <LayoutNo>
      <SEO 
        title="Hvor lang tid har jeg på meg til å søke om flyerstatning i Norge?"
        description="I Norge har du 3 års frist til å kreve opptil 600 € i erstatning for forsinkede og innstilte fly. Sjekk detaljene og landsoversikten."
        url="https://problemlot.com/no/blog/hvor-lang-tid-har-jeg-pa-meg-til-a-soke-om-flyerstatning-norge"
      />

      <article className="container mx-auto px-4 py-12 max-w-4xl">
        <header className="mb-8">
          <Link href="/no/blog" className="text-blue-600 hover:text-blue-700 dark:text-blue-400 text-sm font-medium mb-4 inline-block">
            ← Tilbake til blogg
          </Link>
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-4">
            Hvor lang tid har jeg på meg til å søke om flyerstatning i Norge?
          </h1>
          <div className="flex items-center gap-4 text-sm text-gray-600 dark:text-gray-400">
            <span>3 min lesing</span>
            <span>•</span>
            <span>Oppdatert: Mars 2025</span>
          </div>
        </header>

        {/* Direct Answer */}
        <div className="bg-green-50 dark:bg-green-900/20 border-l-4 border-green-600 p-6 mb-8 rounded-r-lg">
          <h2 className="text-xl font-bold text-green-900 dark:text-green-100 mb-3 flex items-center gap-2">
            <CalendarDays className="w-6 h-6" />
            Raskt svar: Du har 3 år i Norge
          </h2>
          <div className="space-y-3 text-gray-800 dark:text-gray-200">
            <p>
              I henhold til den norske foreldelsesloven har du nøyaktig <strong>3 år</strong> på deg til å kreve erstatning for en flyforsinkelse eller kansellering under EU-forordning 261/2004.
            </p>
            <p className="text-sm border-t border-green-200 dark:border-green-800 pt-3 mt-3">
              Fristen starter å løpe fra den opprinnelige flydatoen. Gjelder flyet ditt f.eks. en reise 15. juli 2023, har du frem til 15. juli 2026.
            </p>
          </div>
        </div>

        {/* CTA 1 */}
        <div className="bg-gradient-to-r from-blue-50 to-blue-100 dark:from-blue-900/20 dark:to-blue-800/20 p-8 rounded-xl mb-12 text-center">
          <h3 className="text-2xl font-bold mb-4 dark:text-white">Sjekk historiske flyvninger gratis</h3>
          <p className="text-gray-700 dark:text-gray-300 mb-6">
            Lurer du på om det forsinkede flyet fra i fjor fortsatt er gyldig? Legg inn detaljene hos ClaimWinger og sjekk på 2 minutter.
          </p>
          <a href="https://claimwinger.com/no" target="_blank" rel="noopener noreferrer">
            <Button size="lg" className="bg-blue-600 hover:bg-blue-700 text-white text-lg px-8 py-6">
              Sjekk mitt gamle fly
              <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
          </a>
        </div>

        <div className="prose dark:prose-invert max-w-none">
          <h2>Hvorfor akkurat 3 år i Norge?</h2>
          <p>
            EU-forordning 261/2004 (som beskytter norske passasjerer via EØS-avtalen) setter de felles europeiske reglene for passasjerrettigheter, som f.eks. retten til opptil 600 € i kompensasjon. 
            Men, forordningen sier <em>ingenting</em> om hvor lenge passasjerer har på seg til å fremme kravet. 
          </p>
          <p>
            Derfor har EU-domstolen bestemt at det er de nasjonale foreldelsesreglene i hvert enkelt land som gjelder. I Norge er den alminnelige foreldelsesfristen 3 år, regulert av Foreldelsesloven § 2.
          </p>

          <h2>Hva hvis jeg fløy fra et annet land?</h2>
          <p>
            Foreldelsesfristen styres i hovedsak av landet der flyselskapet har sitt hovedkvarter, ELLER landet du fløy fra/til. Det betyr at fristen kan variere sterkt hvis du fløy utenfor Norge:
          </p>
          
          <div className="overflow-x-auto my-6">
            <table className="w-full border-collapse">
              <thead>
                <tr className="bg-gray-100 dark:bg-gray-800">
                  <th className="border px-4 py-3 text-left">Land / Jurisdiksjon</th>
                  <th className="border px-4 py-3 text-left">Frist for å kreve erstatning</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td className="border px-4 py-3 font-semibold text-blue-600 dark:text-blue-400">Norge 🇳🇴</td>
                  <td className="border px-4 py-3 font-bold">3 år</td>
                </tr>
                <tr className="bg-gray-50 dark:bg-gray-800/50">
                  <td className="border px-4 py-3">Sverige 🇸🇪</td>
                  <td className="border px-4 py-3">3 år</td>
                </tr>
                <tr>
                  <td className="border px-4 py-3">Danmark 🇩🇰</td>
                  <td className="border px-4 py-3">3 år</td>
                </tr>
                <tr className="bg-gray-50 dark:bg-gray-800/50">
                  <td className="border px-4 py-3">Tyskland 🇩🇪</td>
                  <td className="border px-4 py-3">3 år (regnes fra slutten av kalenderåret)</td>
                </tr>
                <tr>
                  <td className="border px-4 py-3">Storbritannia 🇬🇧</td>
                  <td className="border px-4 py-3 text-green-600 font-bold">6 år (UK261)</td>
                </tr>
                <tr className="bg-gray-50 dark:bg-gray-800/50">
                  <td className="border px-4 py-3">Polen 🇵🇱</td>
                  <td className="border px-4 py-3 text-red-600 font-bold">1 år (svært kort)</td>
                </tr>
              </tbody>
            </table>
          </div>

          <div className="bg-yellow-50 dark:bg-yellow-900/20 border-l-4 border-yellow-500 p-6 my-6">
            <h3 className="text-lg font-semibold flex items-center gap-2 mb-2">
              <AlertCircle className="w-5 h-5" />
              Ikke vent til siste minutt!
            </h3>
            <p className="text-sm mb-0">
              Selv om fristen er 3 år, blir saken vanskeligere å bevise jo lengre tid som går. Flyselskap sletter interne logger, og du kan miste bookingkvitteringer og e-poster. Send kravet så raskt som mulig!
            </p>
          </div>

          <h2>Hva gjør jeg hvis kravet mitt snart foreldes?</h2>
          <p>
            For å avbryte foreldelsesfristen holder det ikke bare å sende en klage-e-post til flyselskapet (med mindre de faktisk utbetaler). 
            I Norge må du formelt bringe saken inn for et organ som Forbrukerrådet (Transportklagenemnda), 
            eller ta ut rettslige skritt (forliksråd) for at fristen skal pauses.
          </p>
          <p>
            Har du det travelt? <strong>ClaimWinger</strong> kan iverksette raske juridiske tiltak som beskytter kravet ditt mot å bli foreldet, selv om det bare er dager igjen.
          </p>

        </div>
      </article>
    </LayoutNo>
  );
}