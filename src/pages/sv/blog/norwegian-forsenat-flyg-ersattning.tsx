import React from "react";
import { LayoutSv } from "@/components/LayoutSv";
import { SEO } from "@/components/SEO";
import Link from "next/link";
import { ArrowRight, Clock, AlertCircle, Coins } from "lucide-react";
import { Button } from "@/components/ui/button";

export default function NorwegianDelayPage() {
  return (
    <LayoutSv>
      <SEO
        title="Norwegian försenat flyg — ersättning och dina rättigheter (2025)"
        description="Var ditt Norwegian-flyg försenat? Du kan ha rätt till 600 € i ersättning. Läs vår guide om hur du kräver pengar från Norwegian Air."
        url="https://problemlot.com/sv/blog/norwegian-forsenat-flyg-ersattning"
      />

      <article className="max-w-4xl mx-auto px-4 py-12">
        <div className="mb-8">
          <Link href="/sv/blog" className="text-blue-600 hover:text-blue-700 dark:text-blue-400 dark:hover:text-blue-300 flex items-center mb-4 transition-colors">
            <ArrowRight className="w-4 h-4 mr-2 rotate-180" />
            Tillbaka till bloggen
          </Link>
          
          <div className="flex items-center gap-3 mb-6">
            <span className="bg-red-100 text-red-800 text-xs font-semibold px-2.5 py-0.5 rounded dark:bg-red-900 dark:text-red-300">
              Norwegian Guide
            </span>
            <span className="text-gray-500 text-sm">6 mars 2025</span>
            <span className="text-gray-500 text-sm">• 6 min läsning</span>
          </div>

          <h1 className="text-4xl md:text-5xl font-bold mb-6 text-gray-900 dark:text-white leading-tight">
            Norwegian försenat flyg — så får du 600 € (inte CashPoints!)
          </h1>

          <p className="text-xl text-gray-600 dark:text-gray-300 leading-relaxed mb-8">
            Norwegian är kända för låga priser och... CashPoints. Men när flyget är försenat gäller EU-lagar, inte lojalitetsprogram. Se till att du får riktiga pengar.
          </p>
        </div>

        {/* CTA 1 */}
        <div className="bg-red-50 dark:bg-red-900/20 border-l-4 border-red-600 p-6 mb-12 rounded-r-lg">
          <h3 className="text-lg font-bold text-red-900 dark:text-red-100 mb-2">
            Erbjöd de dig CashPoints?
          </h3>
          <p className="text-red-800 dark:text-red-200 mb-4">
            Tacka NEJ. Du har rätt till kontanter. Vi hjälper dig att konvertera ditt krav till riktiga pengar på kontot.
          </p>
          <Button size="lg" className="bg-red-600 hover:bg-red-700 text-white w-full sm:w-auto" asChild>
            <a href="https://claimwinger.com/sv?utm_source=lotproblem-sv&utm_medium=blog-cta-top&utm_campaign=norwegian-delay" target="_blank" rel="nofollow noreferrer noopener">
              Kräv kontanter från Norwegian
            </a>
          </Button>
        </div>

        <div className="prose prose-lg max-w-none dark:prose-invert">
          <h2>När måste Norwegian betala?</h2>
          <p>
            Som ett norskt flygbolag (även om de har dotterbolag i EU) lyder Norwegian Air Shuttle under EU-förordning 261/2004 fullt ut.
          </p>
          <ul className="space-y-4 my-6">
            <li className="flex items-start gap-3">
              <Clock className="w-6 h-6 text-red-500 flex-shrink-0 mt-1" />
              <div>
                <strong>Mer än 3 timmar sent</strong>
                <p className="text-sm text-gray-600 dark:text-gray-400">Du anländer till slutdestinationen 3h+ senare än tidtabell.</p>
              </div>
            </li>
            <li className="flex items-start gap-3">
              <AlertCircle className="w-6 h-6 text-red-500 flex-shrink-0 mt-1" />
              <div>
                <strong>Deras fel</strong>
                <p className="text-sm text-gray-600 dark:text-gray-400">Tekniska fel, personalbrist, schemaläggningsproblem = Ersättning. Dåligt väder = Ingen ersättning.</p>
              </div>
            </li>
          </ul>

          <h2>Hur mycket får du?</h2>
          <div className="overflow-x-auto">
            <table className="w-full text-left border-collapse my-6">
              <thead>
                <tr className="bg-gray-100 dark:bg-gray-800">
                  <th className="p-4 border border-gray-200 dark:border-gray-700">Flygsträcka</th>
                  <th className="p-4 border border-gray-200 dark:border-gray-700">Ersättning</th>
                  <th className="p-4 border border-gray-200 dark:border-gray-700">Exempelrutter</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td className="p-4 border border-gray-200 dark:border-gray-700">Upp till 1500 km</td>
                  <td className="p-4 border border-gray-200 dark:border-gray-700 font-bold text-green-600">250 € (ca 2 800 kr)</td>
                  <td className="p-4 border border-gray-200 dark:border-gray-700">Stockholm–Oslo, Göteborg–London</td>
                </tr>
                <tr>
                  <td className="p-4 border border-gray-200 dark:border-gray-700">1500 – 3500 km</td>
                  <td className="p-4 border border-gray-200 dark:border-gray-700 font-bold text-green-600">400 € (ca 4 500 kr)</td>
                  <td className="p-4 border border-gray-200 dark:border-gray-700">Stockholm–Malaga, Köpenhamn–Gran Canaria</td>
                </tr>
                <tr>
                  <td className="p-4 border border-gray-200 dark:border-gray-700">Över 3500 km</td>
                  <td className="p-4 border border-gray-200 dark:border-gray-700 font-bold text-green-600">600 € (ca 6 800 kr)</td>
                  <td className="p-4 border border-gray-200 dark:border-gray-700">Stockholm–Dubai (om Norwegian flyger dit igen)</td>
                </tr>
              </tbody>
            </table>
          </div>

          <h2>Varning för "Norwegian Reward" fällan</h2>
          <p>
            När du klagar direkt till Norwegian, får du ofta ett snabbt svar: <em>"Vi är ledsna. Här är 1000 CashPoints som plåster på såren."</em>
          </p>
          <p>
            <strong>Acceptera INTE detta!</strong>
          </p>
          <ul className="list-disc pl-6 mb-6">
            <li>1000 CashPoints är värt ca 1000 NOK (ca 100 €).</li>
            <li>Din lagliga rätt är ofta 250 € - 400 € i <strong>kontanter</strong>.</li>
            <li>Genom att ta emot poängen kan du avsäga dig rätten till resten.</li>
          </ul>

          <h2>Mat och dryck på flygplatsen</h2>
          <p>
            Om väntan blir lång (2+ timmar) ska Norwegian ge dig "care". Det betyder oftast en voucher på 10-15 € för mat. Får du ingen? Köp mat, spara kvittot, kräv pengarna tillbaka. (Obs: Ingen alkohol).
          </p>
        </div>

        {/* CTA 2 */}
        <div className="my-12 p-8 bg-gray-50 dark:bg-gray-800 rounded-xl text-center border border-gray-200 dark:border-gray-700 shadow-sm">
          <Coins className="w-12 h-12 mx-auto text-red-600 mb-4" />
          <h3 className="text-2xl font-bold mb-4 text-gray-900 dark:text-white">Vill du ha pengar, inte poäng?</h3>
          <p className="text-gray-600 dark:text-gray-300 mb-6 max-w-lg mx-auto">
            Vi förhandlar inte om CashPoints. Vi kräver hårda valuta enligt lag. Ingen vinst, ingen avgift.
          </p>
          <Button size="lg" className="bg-red-600 hover:bg-red-700 text-white px-8" asChild>
            <a href="https://claimwinger.com/sv?utm_source=lotproblem-sv&utm_medium=blog-cta-mid&utm_campaign=norwegian-delay" target="_blank" rel="nofollow noreferrer noopener">
              Starta ditt ärende nu
            </a>
          </Button>
        </div>
      </article>
    </LayoutSv>
  );
}
