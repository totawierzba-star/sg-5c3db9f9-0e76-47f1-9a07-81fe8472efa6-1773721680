import React from "react";
import { LayoutSv } from "@/components/LayoutSv";
import { SEO } from "@/components/SEO";
import Link from "next/link";
import { ShieldAlert, FileWarning, Gavel, ArrowRight, CheckCircle } from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

export default function SasDeniedCompensation() {
  return (
    <LayoutSv>
      <SEO
        title="SAS nekade ersättning — vad gör du härnäst? | Guide"
        description="Har SAS nekat din ersättning? Ge inte upp! Många avslag är felaktiga. Läs vår guide om hur du överklagar och vinner mot SAS."
        url="https://problemlot.com/sv/blog/sas-nekade-ersattning"
        image="/images/sas-denied-guide.png"
      />

      <article className="max-w-4xl mx-auto px-4 py-12">
        <div className="mb-8">
          <Link href="/sv/blog" className="text-blue-600 hover:text-blue-700 dark:text-blue-400 dark:hover:text-blue-300 flex items-center mb-4 transition-colors">
            <ArrowRight className="h-4 w-4 mr-2 rotate-180" /> Tillbaka till bloggen
          </Link>
          
          <div className="flex items-center gap-3 mb-4">
            <span className="bg-orange-100 text-orange-800 text-xs px-2 py-1 rounded-full font-medium dark:bg-orange-900 dark:text-orange-100">Överklagan</span>
            <span className="text-gray-500 text-sm dark:text-gray-400">7 min läsning</span>
          </div>

          <h1 className="text-4xl md:text-5xl font-bold mb-6 text-gray-900 dark:text-white leading-tight">
            SAS nekade ersättning — vad gör du härnäst?
          </h1>

          <div className="flex items-center text-gray-500 text-sm mb-8 border-b border-gray-100 dark:border-gray-800 pb-8">
            <span className="mr-4">Av <strong>Anna Lindberg</strong></span>
            <time dateTime="2025-03-06">6 mars 2025</time>
          </div>

          <p className="text-xl text-gray-700 dark:text-gray-300 leading-relaxed mb-8">
            Du skickade in ditt krav till SAS, väntade i veckor, och fick till slut ett kortfattat mejl: "Din ersättning nekas på grund av extraordinära omständigheter". Det känns hopplöst, men sanningen är att flygbolag ofta nekar giltiga krav rutinmässigt. Här är vad du ska göra.
          </p>

          <div className="bg-orange-50 dark:bg-orange-900/20 p-6 rounded-xl border border-orange-100 dark:border-orange-800 mb-10">
            <h3 className="font-bold text-lg mb-4 text-orange-900 dark:text-orange-100">Fick du ett nej från SAS?</h3>
            <p className="mb-4 text-orange-800 dark:text-orange-200">
              Vi kan granska deras beslut juridiskt. Om de har fel (vilket ofta händer), tar vi striden åt dig i domstol om så krävs.
            </p>
            <Button size="lg" className="w-full sm:w-auto bg-orange-600 hover:bg-orange-700 text-white" asChild>
              <a href="https://claimwinger.com/sv?utm_source=problemlot-sv&utm_medium=blog_sas_denied_intro" target="_blank" rel="nofollow noreferrer noopener">
                Överklaga SAS beslut gratis
              </a>
            </Button>
          </div>
        </div>

        <div className="prose prose-lg dark:prose-invert max-w-none text-gray-700 dark:text-gray-300">
          <h2 className="text-3xl font-bold text-gray-900 dark:text-white mt-12 mb-6">Varför nekar SAS ersättning?</h2>
          <p>
            SAS, liksom många andra flygbolag, försöker minimera sina kostnader. Det vanligaste argumentet de använder är <strong>"extraordinära omständigheter"</strong> (artikel 5.3 i förordning 261/2004).
          </p>
          <p>
            Problemet är att SAS definition av "extraordinärt" ofta är mycket bredare än vad lagen faktiskt säger.
          </p>

          <h3 className="text-2xl font-bold text-gray-900 dark:text-white mt-8 mb-4">De vanligaste (ofta felaktiga) ursäkterna:</h3>
          
          <div className="grid md:grid-cols-2 gap-6 mb-8">
            <div className="bg-white dark:bg-gray-800 p-6 rounded-xl border border-gray-200 dark:border-gray-700">
              <h4 className="font-bold text-red-600 mb-2 flex items-center"><FileWarning className="w-5 h-5 mr-2"/> "Tekniskt fel"</h4>
              <p className="text-sm">
                <strong>SAS påstår:</strong> "Ett oförutsett tekniskt fel hindrade flygningen."
                <br/><br/>
                <strong>Verkligheten:</strong> Tekniska problem är nästan aldrig extraordinära. Flygplan går sönder, och det är SAS ansvar att ha reservdelar och personal. Detta ger dig oftast RÄTT till ersättning.
              </p>
            </div>
            <div className="bg-white dark:bg-gray-800 p-6 rounded-xl border border-gray-200 dark:border-gray-700">
              <h4 className="font-bold text-red-600 mb-2 flex items-center"><FileWarning className="w-5 h-5 mr-2"/> "Operativa problem"</h4>
              <p className="text-sm">
                <strong>SAS påstår:</strong> "Operativa skäl" eller "Restriktioner i flygledningen" (utan bevis).
                <br/><br/>
                <strong>Verkligheten:</strong> Vaga begrepp som "operativa skäl" räcker inte. Ofta handlar det om dålig planering, vilket inte befriar dem från ansvar.
              </p>
            </div>
            <div className="bg-white dark:bg-gray-800 p-6 rounded-xl border border-gray-200 dark:border-gray-700">
              <h4 className="font-bold text-red-600 mb-2 flex items-center"><FileWarning className="w-5 h-5 mr-2"/> "Dåligt väder"</h4>
              <p className="text-sm">
                <strong>SAS påstår:</strong> "Väderförhållanden gjorde det omöjligt att flyga."
                <br/><br/>
                <strong>Verkligheten:</strong> Ibland sant, men ofta flög andra bolag samma rutt samtidigt. Om vädret var "dåligt" men inte extremt, kan du ha rätt till ersättning.
              </p>
            </div>
            <div className="bg-white dark:bg-gray-800 p-6 rounded-xl border border-gray-200 dark:border-gray-700">
              <h4 className="font-bold text-red-600 mb-2 flex items-center"><FileWarning className="w-5 h-5 mr-2"/> "Personalbrist"</h4>
              <p className="text-sm">
                <strong>SAS påstår:</strong> "Besättningen blev sjuk" eller "Nådde sin maximala arbetstid."
                <br/><br/>
                <strong>Verkligheten:</strong> Personalplanering är flygbolagets ansvar. Sjukdom bland personalen är inte extraordinärt. Du ska ha ersättning.
              </p>
            </div>
          </div>

          <h2 className="text-3xl font-bold text-gray-900 dark:text-white mt-12 mb-6">Steg för steg: Så överklagar du</h2>
          
          <ol className="relative border-l border-gray-200 dark:border-gray-700 ml-4 space-y-10 my-8">
            <li className="mb-10 ml-6">
              <span className="absolute flex items-center justify-center w-8 h-8 bg-blue-100 rounded-full -left-4 ring-4 ring-white dark:ring-gray-900 dark:bg-blue-900">
                <span className="text-blue-600 dark:text-blue-300 font-bold">1</span>
              </span>
              <h3 className="font-bold text-lg mb-1 text-gray-900 dark:text-white">Begär bevis</h3>
              <p className="text-base text-gray-700 dark:text-gray-400">
                Acceptera inte ett generiskt svar. Skriv tillbaka och kräv att få veta <em>exakt</em> vad som orsakade problemet. Om det var väder, be om METAR-rapporter. Om det var tekniskt, be om loggboksutdrag (de kommer sällan ge detta, men det visar att du menar allvar).
              </p>
            </li>
            <li className="mb-10 ml-6">
              <span className="absolute flex items-center justify-center w-8 h-8 bg-blue-100 rounded-full -left-4 ring-4 ring-white dark:ring-gray-900 dark:bg-blue-900">
                <span className="text-blue-600 dark:text-blue-300 font-bold">2</span>
              </span>
              <h3 className="font-bold text-lg mb-1 text-gray-900 dark:text-white">Anmäl till ARN (Allmänna reklamationsnämnden)</h3>
              <p className="text-base text-gray-700 dark:text-gray-400">
                Om SAS står på sig kan du anmäla ärendet till ARN. Det är gratis, men processen är långsam (6-12 månader) och besluten är bara rekommendationer (även om SAS oftast följer dem).
              </p>
            </li>
            <li className="mb-10 ml-6">
              <span className="absolute flex items-center justify-center w-8 h-8 bg-blue-100 rounded-full -left-4 ring-4 ring-white dark:ring-gray-900 dark:bg-blue-900">
                <span className="text-blue-600 dark:text-blue-300 font-bold">3</span>
              </span>
              <h3 className="font-bold text-lg mb-1 text-gray-900 dark:text-white">Ta hjälp av experter (Rekommenderas)</h3>
              <p className="text-base text-gray-700 dark:text-gray-400">
                SAS har hela avdelningar med jurister. Det är svårt att vinna som privatperson. Tjänster som ClaimWinger har tillgång till flygdatabaser, väderdata och juridisk expertis. Vi vet när SAS bluffar.
              </p>
            </li>
          </ol>

          <h2 className="text-3xl font-bold text-gray-900 dark:text-white mt-12 mb-6">Varför välja ClaimWinger istället för ARN?</h2>
          <div className="overflow-x-auto">
            <table className="min-w-full text-sm text-left text-gray-500 dark:text-gray-400">
              <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
                <tr>
                  <th scope="col" className="px-6 py-3">Funktion</th>
                  <th scope="col" className="px-6 py-3">Göra det själv / ARN</th>
                  <th scope="col" className="px-6 py-3 text-blue-600 dark:text-blue-400">ClaimWinger</th>
                </tr>
              </thead>
              <tbody>
                <tr className="bg-white border-b dark:bg-gray-800 dark:border-gray-700">
                  <td className="px-6 py-4 font-medium text-gray-900 dark:text-white">Kostnad</td>
                  <td className="px-6 py-4">Gratis (men tidskrävande)</td>
                  <td className="px-6 py-4">Ingen vinst = 0 kr (annars provision)</td>
                </tr>
                <tr className="bg-white border-b dark:bg-gray-800 dark:border-gray-700">
                  <td className="px-6 py-4 font-medium text-gray-900 dark:text-white">Tidsåtgång</td>
                  <td className="px-6 py-4">6-12 månader</td>
                  <td className="px-6 py-4">Ofta snabbare (direktkontakt med SAS)</td>
                </tr>
                <tr className="bg-white border-b dark:bg-gray-800 dark:border-gray-700">
                  <td className="px-6 py-4 font-medium text-gray-900 dark:text-white">Juridisk styrka</td>
                  <td className="px-6 py-4">Låg (rekommendation)</td>
                  <td className="px-6 py-4">Hög (kan ta ärendet till domstol)</td>
                </tr>
                <tr className="bg-white dark:bg-gray-800">
                  <td className="px-6 py-4 font-medium text-gray-900 dark:text-white">Stress</td>
                  <td className="px-6 py-4">Hög</td>
                  <td className="px-6 py-4">Ingen (vi gör jobbet)</td>
                </tr>
              </tbody>
            </table>
          </div>

          <div className="bg-gray-100 dark:bg-gray-800 p-8 rounded-2xl mt-12 mb-12">
            <h3 className="text-2xl font-bold mb-4 text-center text-gray-900 dark:text-white">Låt oss granska SAS avslag</h3>
            <p className="text-center mb-6 text-gray-600 dark:text-gray-300">
              Skicka in ditt avslag till oss. Vi analyserar det gratis och berättar om SAS har fel.
            </p>
            <div className="flex justify-center">
              <Button size="lg" className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-6 text-lg" asChild>
                <a href="https://claimwinger.com/sv?utm_source=problemlot-sv&utm_medium=blog_sas_denied_bottom" target="_blank" rel="nofollow noreferrer noopener">
                  Överpröva mitt ärende nu
                </a>
              </Button>
            </div>
          </div>
        </div>
      </article>
    </LayoutSv>
  );
}
