import React from "react";
import { LayoutSv } from "@/components/LayoutSv";
import { SEO } from "@/components/SEO";
import Link from "next/link";
import { FileText, XCircle, CheckCircle, ArrowRight, Banknote, AlertTriangle } from "lucide-react";
import { Button } from "@/components/ui/button";

export default function SasVoucherPage() {
  return (
    <LayoutSv>
      <SEO
        title="SAS Voucher eller Pengar? Du måste inte acceptera tillgodokvitto"
        description="Erbjuder SAS en voucher istället för kontant ersättning? Läs varför du bör tacka nej och kräva riktiga pengar enligt EU-lag. Guide 2025."
        url="https://lotproblem.pl/sv/blog/sas-voucher-eller-pengar"
      />

      <article className="max-w-4xl mx-auto px-4 py-12">
        <div className="mb-8">
          <Link href="/sv/blog" className="text-blue-600 hover:text-blue-700 dark:text-blue-400 dark:hover:text-blue-300 flex items-center mb-4 transition-colors">
            <ArrowRight className="w-4 h-4 mr-2 rotate-180" />
            Tillbaka till bloggen
          </Link>
          
          <div className="flex items-center gap-3 mb-6">
            <span className="bg-blue-100 text-blue-800 text-xs font-semibold px-2.5 py-0.5 rounded dark:bg-blue-900 dark:text-blue-300">
              SAS Guide
            </span>
            <span className="text-gray-500 text-sm">6 mars 2025</span>
            <span className="text-gray-500 text-sm">• 6 min läsning</span>
          </div>

          <h1 className="text-4xl md:text-5xl font-bold mb-6 text-gray-900 dark:text-white leading-tight">
            SAS erbjuder voucher istället för pengar — måste du acceptera det?
          </h1>

          <p className="text-xl text-gray-600 dark:text-gray-300 leading-relaxed mb-8">
            Det är en klassisk situation: ditt SAS-flyg blir försenat eller inställt, och kort därefter får du ett mejl med erbjudande om en "värdecheck" eller poäng. Många resenärer accepterar detta i tron att det är deras enda alternativ. Men sanningen är att du nästan alltid har rätt till riktiga pengar.
          </p>
        </div>

        {/* CTA 1 */}
        <div className="bg-blue-50 dark:bg-blue-900/20 border-l-4 border-blue-600 p-6 mb-12 rounded-r-lg">
          <h3 className="text-lg font-bold text-blue-900 dark:text-blue-100 mb-2">
            Har du redan fått ett erbjudande om voucher?
          </h3>
          <p className="text-blue-800 dark:text-blue-200 mb-4">
            Acceptera inte vouchern innan du kollat om du har rätt till kontanter. En voucher kan ofta inte bytas mot pengar senare.
          </p>
          <Button size="lg" className="bg-blue-600 hover:bg-blue-700 text-white w-full sm:w-auto" asChild>
            <a href="https://claimwinger.com/sv/forsenat-flyg?utm_source=lotproblem-sv&utm_medium=blog-cta-top&utm_campaign=sas-voucher" target="_blank" rel="nofollow noreferrer noopener">
              Kontrollera din ersättning gratis
            </a>
          </Button>
        </div>

        <div className="prose prose-lg max-w-none dark:prose-invert">
          <h2>Varför erbjuder SAS vouchers?</h2>
          <p>
            För flygbolag som SAS är kassaflödet kritiskt. Att betala ut miljoner i kontant ersättning påverkar deras likviditet direkt. Att utfärda en voucher kostar dem däremot nästan ingenting i stunden och garanterar att du spenderar pengarna hos dem igen i framtiden.
          </p>
          <p>
            Därför är deras första svar på ett ersättningskrav ofta ett erbjudande om en voucher, ibland till och med med ett något högre värde än den lagstadgade ersättningen för att locka dig.
          </p>

          <h2>Vad säger lagen (EU 261/2004)?</h2>
          <p>
            Enligt EU-förordning 261/2004, artikel 7.3, ska ersättningen betalas ut kontant, med elektronisk banköverföring, bankgiroutbetalning eller check.
          </p>
          <div className="bg-yellow-50 dark:bg-yellow-900/20 p-4 border-l-4 border-yellow-500 my-6">
            <p className="font-semibold text-yellow-800 dark:text-yellow-200 m-0">
              "Ersättning i form av resecheckar eller andra tjänster får endast ske med passagerarens skriftliga samtycke."
            </p>
          </div>
          <p>
            Detta betyder: <strong>SAS får inte tvinga på dig en voucher.</strong> Du har absolut rätt att kräva pengarna insatta på ditt bankkonto.
          </p>

          <h2>Voucher vs. Kontanter: Jämförelse</h2>
          <p>
            Här är varför kontanter nästan alltid är det bättre valet:
          </p>

          <div className="overflow-x-auto my-8">
            <table className="w-full text-left border-collapse">
              <thead>
                <tr className="bg-gray-100 dark:bg-gray-800">
                  <th className="p-4 border border-gray-200 dark:border-gray-700">Egenskap</th>
                  <th className="p-4 border border-gray-200 dark:border-gray-700 text-green-600">Kontanter (Banköverföring)</th>
                  <th className="p-4 border border-gray-200 dark:border-gray-700 text-red-600">Voucher / Tillgodokvitto</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td className="p-4 border border-gray-200 dark:border-gray-700 font-semibold">Giltighetstid</td>
                  <td className="p-4 border border-gray-200 dark:border-gray-700">Obegränsad</td>
                  <td className="p-4 border border-gray-200 dark:border-gray-700">Ofta begränsad (t.ex. 12 månader)</td>
                </tr>
                <tr>
                  <td className="p-4 border border-gray-200 dark:border-gray-700 font-semibold">Användning</td>
                  <td className="p-4 border border-gray-200 dark:border-gray-700">Allt (hyra, mat, andra flygbolag)</td>
                  <td className="p-4 border border-gray-200 dark:border-gray-700">Endast SAS-flyg</td>
                </tr>
                <tr>
                  <td className="p-4 border border-gray-200 dark:border-gray-700 font-semibold">Konkursrisk</td>
                  <td className="p-4 border border-gray-200 dark:border-gray-700">Ingen (när pengarna är på kontot)</td>
                  <td className="p-4 border border-gray-200 dark:border-gray-700">Värdelös vid konkurs</td>
                </tr>
                <tr>
                  <td className="p-4 border border-gray-200 dark:border-gray-700 font-semibold">Flexibilitet</td>
                  <td className="p-4 border border-gray-200 dark:border-gray-700">Total</td>
                  <td className="p-4 border border-gray-200 dark:border-gray-700">Låg (begränsade datum/rutter)</td>
                </tr>
              </tbody>
            </table>
          </div>

          <h2>När kan en voucher vara bra?</h2>
          <p>
            Det finns ett undantag: Om SAS erbjuder en voucher som är värd <strong>betydligt mer</strong> än den kontanta ersättningen, och du vet säkert att du ska flyga med SAS snart igen.
          </p>
          <p>
            Till exempel: Om du har rätt till 250 € i kontanter, men SAS erbjuder en voucher på 500 €, kan det vara värt att överväga om du flyger ofta. Men kom ihåg risken – om SAS går i konkurs eller du inte hinner resa, förlorar du allt.
          </p>

          <h2>Jag har redan råkat acceptera en voucher — är det kört?</h2>
          <p>
            Om du klickade på "Acceptera" i ett mejl eller på SAS hemsida har du tyvärr oftast ingått ett bindande avtal där du avsäger dig rätten till kontanter. 
          </p>
          <p>
            Men det finns undantag:
          </p>
          <ul className="list-disc pl-6 mb-6">
            <li>Om informationen var vilseledande (t.ex. om SAS inte informerade om att du hade rätt till kontanter).</li>
            <li>Om du inte uttryckligen godkände villkoren.</li>
          </ul>
          <p>
            I dessa fall kan det fortfarande vara värt att försöka driva ärendet.
          </p>
        </div>

        {/* CTA 2 */}
        <div className="my-12 p-8 bg-gray-50 dark:bg-gray-800 rounded-xl text-center border border-gray-200 dark:border-gray-700 shadow-sm">
          <Banknote className="w-12 h-12 mx-auto text-green-600 mb-4" />
          <h3 className="text-2xl font-bold mb-4 text-gray-900 dark:text-white">Vill du hellre ha pengar på kontot?</h3>
          <p className="text-gray-600 dark:text-gray-300 mb-6 max-w-lg mx-auto">
            Vi hjälper dig att konvertera ditt krav till riktiga pengar. Vi tar bara betalt om vi lyckas få ut din ersättning från SAS.
          </p>
          <Button size="lg" className="bg-green-600 hover:bg-green-700 text-white px-8" asChild>
            <a href="https://claimwinger.com/sv?utm_source=lotproblem-sv&utm_medium=blog-cta-mid&utm_campaign=sas-voucher" target="_blank" rel="nofollow noreferrer noopener">
              Få dina pengar nu
            </a>
          </Button>
        </div>

        <div className="prose prose-lg max-w-none dark:prose-invert">
          <h2>Hur tackar jag nej till en voucher korrekt?</h2>
          <ol>
            <li><strong>Klicka inte på länkar</strong> i mejl från SAS som heter "Hämta din voucher" eller liknande.</li>
            <li><strong>Svara skriftligt</strong> att du nekar erbjudandet om voucher och istället kräver kontant ersättning enligt artikel 7 i EU 261/2004.</li>
            <li><strong>Ange dina bankuppgifter</strong> (IBAN och BIC/SWIFT) direkt i svaret för att snabba på processen.</li>
          </ol>
          
          <h2>Sammanfattning</h2>
          <p>
            SAS har ingen rätt att tvinga dig att ta emot en voucher. Kontanter är alltid det säkraste och mest flexibla alternativet. Om SAS insisterar eller gör det svårt att välja kontanter, är det ofta enklast att ta hjälp av experter som kan lagen utan och innan.
          </p>
        </div>
      </article>
    </LayoutSv>
  );
}
