import { LayoutNo } from "@/components/LayoutNo";
import { SEO } from "@/components/SEO";
import { Button } from "@/components/ui/button";
import { ArrowRight, Clock, CheckCircle2, Euro, AlertTriangle } from "lucide-react";
import Link from "next/link";

export default function NorwegianForeldelsesfristKrav() {
  return (
    <LayoutNo>
      <SEO 
        title="Foreldelsesfrist for Norwegian-krav — hvor lenge har du på deg?"
        description="Lær om foreldelsesfristen for Norwegian erstatningskrav i Norge. 3 års frist, unntak, og hvordan du sikrer kravet ditt."
        url="https://problemlot.com/no/blog/norwegian-foreldelsesfrist-krav"
      />

      <article className="container mx-auto px-4 py-12 max-w-4xl">
        <header className="mb-8">
          <Link href="/no/blog" className="text-blue-600 hover:text-blue-700 dark:text-blue-400 text-sm font-medium mb-4 inline-block">
            ← Tilbake til blogg
          </Link>
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-4">
            Foreldelsesfrist for Norwegian-krav — hvor lenge har du på deg?
          </h1>
          <div className="flex items-center gap-4 text-sm text-gray-600 dark:text-gray-400">
            <span>7 min lesing</span>
            <span>•</span>
            <span>Oppdatert: Mars 2025</span>
          </div>
        </header>

        <div className="bg-blue-50 dark:bg-blue-900/20 border-l-4 border-blue-600 p-6 mb-8 rounded-r-lg">
          <h2 className="text-xl font-bold text-blue-900 dark:text-blue-100 mb-3 flex items-center gap-2">
            <Clock className="w-6 h-6" />
            Raskt svar: 3 års foreldelsesfrist i Norge
          </h2>
          <div className="space-y-3 text-gray-800 dark:text-gray-200">
            <p>
              I Norge har du <strong>3 år</strong> fra flydatoen til å kreve erstatning fra Norwegian under <strong>EU261/EØS-avtalen</strong>. Dette følger <strong>norsk foreldelseslov § 2</strong>. Fristen starter dagen etter den planlagte ankomsten. Hvis du sender krav innen 3 år, avbrytes foreldelsen, og Norwegian må behandle kravet. <strong>Viktig:</strong> Hvis Norwegian nekter eller ignorerer kravet, må du eskalere til Transportklagenemnda eller rettsak innen 3 år fra flydat
...
inget etter at vi starter.
          </p>
        </div>
      </article>
    </LayoutNo>
  );
}