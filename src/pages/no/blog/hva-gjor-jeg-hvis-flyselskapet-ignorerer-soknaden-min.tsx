import { LayoutNo } from "@/components/LayoutNo";
import { SEO } from "@/components/SEO";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { ArrowRight, AlertCircle, MessageSquare, Scale } from "lucide-react";
import Link from "next/link";

export default function AirlineIgnoresClaimNo() {
  return (
    <LayoutNo>
      <SEO 
        title="Hva gjør jeg hvis flyselskapet ignorerer søknaden min? [2025]"
        description="Får du ikke svar fra flyselskapet? Lær om 6-ukersfristen, dine rettigheter via Forbrukerrådet, og hvordan du tvinger frem utbetaling."
        url="https://problemlot.com/no/blog/hva-gjor-jeg-hvis-flyselskapet-ignorerer-soknaden-min"
      />

      <article className="container mx-auto px-4 py-12 max-w-4xl">
        <header className="mb-8">
          <Link href="/no/blog" className="text-blue-600 hover:text-blue-700 dark:text-blue-400 text-sm font-medium mb-4 inline-block">
            ← Tilbake til blogg
          </Link>
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-4">
            Hva gjør jeg hvis flyselskapet ignorerer søknaden min?
          </h1>
          <div className="flex items-center gap-4 text-sm text-gray-600 dark:text-gray-400">
            <span>4 min lesing</span>
            <span>•</span>
            <span>Oppdatert: Mars 2025</span>
          </div>
        </header>

        {/* Direct Answer Box */}
        <div className="bg-orange-50 dark:bg-orange-900/20 border-l-4 border-orange-500 p-6 mb-8 rounded-r-lg">
          <h2 className="text-xl font-bold text-orange-900 dark:text-orange-100 mb-3 flex items-center gap-2">
            <AlertCircle className="w-6 h-6" />
            Raskt svar: Når flyselskapet er tause
          </h2>
          <div className="space-y-3 text-gray-800 dark:text-gray-200">
            <p className="font-semibold">Hvis det har gått mer enn 6 uker uten svar, har du tre hovedalternativer:</p>
            <ul className="space-y-2 ml-4">
              <li><strong>1. Send en formell purring</strong> med en endelig svarfrist (f.eks. 7 dager).</li>
              <li><strong>2. Eskaler saken</strong> til Transportklagenemnda via Forbrukerrådet.</li>
              <li><strong>3. Bruk profesjonell hjelp (ClaimWinger)</strong> — De tar saken til retten hvis nødvendig ("No win, no fee").</li>
            </ul>
            <p className="text-sm mt-3 pt-3 border-t border-orange-200 dark:border-orange-800">
              <strong>Tips:</strong> Ignorering er en vanlig taktikk for å få passasjerer til å gi opp. Ikke la dem vinne!
            </p>
          </div>
        </div>

        {/* CTA 1 */}
        <div className="bg-gradient-to-r from-blue-50 to-blue-100 dark:from-blue-900/20 dark:to-blue-800/20 p-8 rounded-xl mb-12 text-center">
          <Scale className="w-16 h-16 text-blue-600 mx-auto mb-4" />
          <h3 className="text-2xl font-bold mb-4 dark:text-white">Lei av å vente på svar?</h3>
          <p className="text-gray-700 dark:text-gray-300 mb-6">
            La advokatene hos ClaimWinger ta over saken din. Flyselskaper svarer mye raskere når et advokatfirma er involvert.
          </p>
          <a href="https://claimwinger.com/no" target="_blank" rel="noopener noreferrer">
            <Button size="lg" className="bg-blue-600 hover:bg-blue-700 text-white text-lg px-8 py-6">
              Overlat saken til ClaimWinger
              <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
          </a>
        </div>

        <div className="prose dark:prose-invert max-w-none">
          <h2>Hvorfor ignorerer de deg? (Den skjulte taktikken)</h2>
          <p>
            Det er sjelden en feil at du ikke får svar. Mange flyselskaper (spesielt lavprisselskaper) bruker aktivt en uthalingstaktikk. 
            Statistikken viser at over <strong>60% av passasjerer gir opp</strong> hvis de ikke får svar innen to måneder. Ved å ignorere 
            søknaden din, sparer flyselskapet millioner av euro hvert år.
          </p>

          <h2>Reglene: Hvor lang tid har de egentlig?</h2>
          <p>
            EU-forordning 261/2004 gjelder i Norge gjennom <strong>EØS-avtalen</strong>. Denne gir Luftfartstilsynet 
            og nasjonale klageorganer myndighet. Regelen sier at flyselskapet skal bekrefte mottak av klagen og gi et offisielt svar 
            innen <strong>6 uker</strong>.
          </p>
          <p>
            Går det lenger enn 6 uker uten et substansielt svar, regnes dette juridisk som at de "bestrider kravet", 
            noe som gir deg rett til å eskalere saken videre.
          </p>

          <h2>Steg-for-steg: Slik tvinger du frem et svar</h2>
          
          <h3>Steg 1: Send en formell siste advarsel</h3>
          <p>
            Hvis det har gått 6 uker, send en e-post eller bruk klageskjemaet deres igjen. Vær presis:
          </p>
          <div className="bg-gray-100 dark:bg-gray-800 p-4 rounded border-l-4 border-gray-400 italic">
            "Jeg viser til mitt krav [Saksnummer] sendt [Dato]. I henhold til EU-forordning 261/2004 (EØS-avtalen) har dere hatt 6 uker på å svare. 
            Hvis jeg ikke mottar kompensasjonen min innen 7 dager, vil saken eskaleres juridisk og via nasjonale luftfartsmyndigheter, 
            noe som kan medføre ekstra saksomkostninger for dere."
          </div>

          <h3>Steg 2: Bruk de norske forbrukermyndighetene</h3>
          <p>
            I Norge har du sterke rettigheter. Du kan klage inn flyselskapet til:
          </p>
          <ul>
            <li><strong>Forbrukerrådet / Transportklagenemnda:</strong> Dette er et offisielt organ som mekler. Deres vedtak er rådgivende, men de fleste flyselskaper følger dem. Ulempen? <em>Det kan ta 6-12 måneder å få saken behandlet.</em></li>
            <li><strong>Luftfartstilsynet:</strong> De overvåker flyselskapene i Norge. De behandler ikke individuelle økonomiske krav direkte, men loggfører brudd på EU261.</li>
          </ul>

          <h3>Steg 3: Send saken til ClaimWinger (Den raskeste løsningen)</h3>
          <p>
            Det flyselskapet frykter mest, er rettslige skritt. Ved å overføre saken til et inkasso/erstatningsfirma som <strong>ClaimWinger</strong>, endres dynamikken helt:
          </p>
          <ul>
            <li>ClaimWinger har et eget team av advokater som flyselskapene kjenner til.</li>
            <li>De sender et formelt brev, og flyselskapet vet at de vil bli dratt for retten hvis de ikke betaler (noe som koster flyselskapet mye mer i advokatutgifter).</li>
            <li><strong>Pris:</strong> Det er gratis å bruke dem. De tar kun et kutt (typisk 25-30%) HVIS de vinner pengene for deg ("No cure, no pay").</li>
          </ul>

          <h2>Pass på "falske svar" og uthalinger</h2>
          <p>
            Noen ganger får du et svar, men det er bare for å hale ut tiden:
          </p>
          <ul>
            <li><em>"Vi trenger mer informasjon"</em> (Selv om du har sendt alt). Svar umiddelbart med dokumentene.</li>
            <li><em>"Saken er under behandling av en annen avdeling."</em> Ikke aksepter dette som en gyldig utsettelse av 6-ukersfristen.</li>
            <li><em>"Det var ekstraordinære omstendigheter"</em> (Uten bevis). Be om offisiell logg og dokumentasjon på hvorfor hendelsen ikke kunne vært unngått.</li>
          </ul>
        </div>
      </article>
    </LayoutNo>
  );
}