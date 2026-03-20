import { LayoutNo } from "@/components/LayoutNo";
import { SEO } from "@/components/SEO";
import { Button } from "@/components/ui/button";
import { ArrowRight, Gift, Euro, AlertTriangle, CheckCircle2 } from "lucide-react";
import Link from "next/link";

export default function NorwegianVoucherIstedetForPenger() {
  return (
    <LayoutNo>
      <SEO 
        title="Norwegian tilbyr voucher i stedet for penger – må du akseptere? [2025]"
        description="Norwegian tilbyr gavekort i stedet for kontanter? Du har rett til å nekte og kreve pengene på konto. Slik gjør du det."
        url="https://problemlot.com/no/blog/norwegian-voucher-i-stedet-for-penger"
      />

      <article className="container mx-auto px-4 py-12 max-w-4xl">
        <header className="mb-8">
          <Link href="/no/blog" className="text-blue-600 hover:text-blue-700 dark:text-blue-400 text-sm font-medium mb-4 inline-block">
            ← Tilbake til blogg
          </Link>
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-4">
            Norwegian tilbyr voucher i stedet for penger – må du akseptere det?
          </h1>
          <div className="flex items-center gap-4 text-sm text-gray-600 dark:text-gray-400">
            <span>6 min lesing</span>
            <span>•</span>
            <span>Oppdatert: Mars 2025</span>
          </div>
        </header>

        {/* Quick Answer */}
        <div className="bg-blue-50 dark:bg-blue-900/20 border-l-4 border-blue-600 p-6 mb-8 rounded-r-lg">
          <h2 className="text-xl font-bold text-blue-900 dark:text-blue-100 mb-3 flex items-center gap-2">
            <Euro className="w-6 h-6" />
            Raskt svar: NEI, du trenger ikke akseptere voucher
          </h2>
          <div className="space-y-3 text-gray-800 dark:text-gray-200">
            <p>
              Hvis Norwegian tilbyr deg en voucher (gavekort) i stedet for kontanter, har du <strong>full rett til å nekte</strong> og kreve pengene utbetalt på bankkonto. <strong>EU-forordning 261/2004</strong> (som gjelder i Norge gjennom <strong>EØS-avtalen</strong>) krever kontantutbetaling – ikke gavekort.
            </p>
            <p className="text-sm border-t border-blue-200 dark:border-blue-800 pt-3 mt-3">
              💡 <strong>Viktig:</strong> Du trenger ikke forklare hvorfor du vil ha penger. Det er din lovfestede rett.
            </p>
          </div>
        </div>

        {/* CTA 1 */}
        <div className="bg-gradient-to-r from-blue-50 to-green-50 dark:from-blue-900/20 dark:to-green-900/20 p-8 rounded-xl mb-12 text-center border border-gray-100 dark:border-gray-800">
          <Gift className="w-16 h-16 text-blue-600 mx-auto mb-4" />
          <h3 className="text-2xl font-bold mb-4 dark:text-white">Norwegian tilbyr voucher?</h3>
          <p className="text-gray-700 dark:text-gray-300 mb-6">
            ClaimWinger krever alltid kontanter på dine vegne. Ingen gavekort, bare penger på konto.
          </p>
          <a href="https://claimwinger.com/no" target="_blank" rel="noopener noreferrer">
            <Button size="lg" className="bg-blue-600 hover:bg-blue-700 text-white text-lg px-8 py-6">
              Få pengene mine nå
              <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
          </a>
        </div>

        <div className="prose dark:prose-invert max-w-none">
          <h2>Hvorfor tilbyr Norwegian voucher i stedet for penger?</h2>
          <p>
            Norwegian (som de fleste lavprisflyselskap) bruker voucher-strategien for å redusere faktiske utbetalinger. Her er hvorfor:
          </p>
          <ul>
            <li><strong>Mange glemmer å bruke dem:</strong> ~30% av vouchers utløper ubrukt</li>
            <li><strong>Du bruker dem på Norwegian:</strong> Pengene går tilbake til flyselskapet</li>
            <li><strong>Høyere verdi lokker deg:</strong> "400 € voucher" høres bedre ut enn "250 € kontanter"</li>
            <li><strong>Utsatt utbetaling:</strong> Norwegian får rentefri kreditt</li>
          </ul>
          <p>
            Dette er en <strong>markedsføringsstrategi</strong> – ikke en juridisk forpliktelse. Du har full rett til å nekte.
          </p>
          <p>
            Les mer om grunnlaget: <Link href="/no/blog/norwegian-forsinkelse-erstatning-guide" className="text-blue-600 hover:underline">Erstatning for forsinket Norwegian-fly – komplett guide 2025</Link>
          </p>

          <h2>Hva sier loven om voucher vs. kontanter?</h2>
          <p>
            <strong>EU-forordning 261/2004</strong>, artikkel 7 (1), slår fast:
          </p>
          <blockquote className="border-l-4 border-blue-500 pl-4 italic my-6">
            "Kompensasjonen skal betales kontant, ved elektronisk bankoverføring, bankordre eller banksjekk, eller med passasjerens signerte samtykke, i reisekuponger og/eller andre tjenester."
          </blockquote>
          <p>
            Nøkkelordet er: <strong>"med passasjerens signerte samtykke"</strong>. Dette betyr at Norwegian kan tilby voucher, men du må <strong>aktivt godta</strong> det. Hvis du sier nei, må de betale kontant.
          </p>

          <div className="bg-yellow-50 dark:bg-yellow-900/20 border-l-4 border-yellow-500 p-6 my-6">
            <h3 className="text-lg font-semibold flex items-center gap-2 mb-2">
              <AlertTriangle className="w-5 h-5" />
              Felle: "Samtykke" ved å akseptere voucher
            </h3>
            <p className="text-sm mb-0">
              Hvis du klikker "Aksepter voucher" i Norwegians system eller signerer et voucherbevis, har du <strong>gitt samtykke</strong>. Da blir det vanskeligere å kreve kontanter etterpå. <strong>Ikke aksepter voucher hvis du vil ha penger.</strong>
            </p>
          </div>

          <h2>Hvordan krever du kontanter i stedet for voucher?</h2>

          <h3>Steg 1: Svar på Norwegians tilbud</h3>
          <p>
            Når Norwegian sender deg e-post med vouchertilbud, svar:
          </p>
          <div className="bg-gray-100 dark:bg-gray-800 p-4 rounded-lg my-4">
            <p className="text-sm mb-0 font-mono">
              "Takk for tilbudet, men jeg ønsker kontant utbetaling av erstatningen på [beløp] € i henhold til EU-forordning 261/2004. Vennligst utbetal beløpet til bankkonto:<br/>
              IBAN: [ditt kontonummer]<br/>
              BIC: [din bankens BIC]<br/>
              <br/>
              Jeg godtar ikke voucher eller gavekort."
            </p>
          </div>

          <h3>Steg 2: Hvis Norwegian fortsetter å presse på voucher</h3>
          <p>
            Hvis Norwegian svarer med "Vi kan bare tilby voucher", send følgende:
          </p>
          <div className="bg-gray-100 dark:bg-gray-800 p-4 rounded-lg my-4">
            <p className="text-sm mb-0 font-mono">
              "EU-forordning 261/2004, artikkel 7 (1), krever at kompensasjon betales kontant med mindre passasjeren aktivt godtar voucher. Jeg har ikke gitt slikt samtykke.<br/>
              <br/>
              Hvis Norwegian nekter kontantutbetaling, vil jeg eskalere saken til Forbrukerrådet (Transportklagenemnda).<br/>
              <br/>
              Jeg forventer utbetaling innen 14 dager."
            </p>
          </div>

          <h3>Steg 3: Bruk ClaimWinger (enkleste løsning)</h3>
          <p>
            Hvis du vil unngå konfrontasjon, la ClaimWinger håndtere det. De krever <strong>alltid kontanter</strong> og aksepterer aldri voucher på dine vegne.
          </p>
          <ol>
            <li>Legg inn flynummer på <a href="https://claimwinger.com/no" target="_blank" rel="noopener" className="text-blue-600 hover:underline">claimwinger.com/no</a></li>
            <li>ClaimWinger sender juridisk fundert krav til Norwegian</li>
            <li>Norwegian vet at ClaimWinger tar saken til retten hvis de nekter</li>
            <li>Utbetaling direkte til din bankkonto (4-8 uker gjennomsnitt)</li>
          </ol>

          <h2>Hva hvis du allerede aksepterte voucher?</h2>
          <p>
            Hvis du allerede klikket "Aksepter voucher" i Norwegians system, er situasjonen vanskeligere – men ikke umulig:
          </p>
          <ul>
            <li><strong>Hvis voucher fortsatt er ubrukt:</strong> Kontakt Norwegian og forklar at du aksepterte under press eller misforståelse. Be om kontantutbetaling i stedet.</li>
            <li><strong>Hvis Norwegian nekter:</strong> Klage til Forbrukerrådet. Argumenter at Norwegian ikke opplyste deg ordentlig om dine rettigheter.</li>
            <li><strong>Hvis voucher er delvis brukt:</strong> Dessverre har du gitt implisitt samtykke. Du kan kreve kontanter for gjenværende beløp.</li>
          </ul>

          <h2>Sammenligning: Voucher vs. kontanter</h2>

          <div className="overflow-x-auto my-6">
            <table className="w-full border-collapse bg-white dark:bg-gray-800">
              <thead>
                <tr className="bg-blue-600 text-white">
                  <th className="border border-gray-300 dark:border-gray-600 px-4 py-3 text-left">Faktor</th>
                  <th className="border border-gray-300 dark:border-gray-600 px-4 py-3 text-left">Voucher (gavekort)</th>
                  <th className="border border-gray-300 dark:border-gray-600 px-4 py-3 text-left">Kontanter</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td className="border border-gray-300 dark:border-gray-600 px-4 py-3 font-semibold">Fleksibilitet</td>
                  <td className="border border-gray-300 dark:border-gray-600 px-4 py-3">❌ Kun Norwegian-fly</td>
                  <td className="border border-gray-300 dark:border-gray-600 px-4 py-3">✅ Bruk på hva du vil</td>
                </tr>
                <tr className="bg-gray-50 dark:bg-gray-800/50">
                  <td className="border border-gray-300 dark:border-gray-600 px-4 py-3 font-semibold">Utløpsdato</td>
                  <td className="border border-gray-300 dark:border-gray-600 px-4 py-3">❌ 1 år (vanligvis)</td>
                  <td className="border border-gray-300 dark:border-gray-600 px-4 py-3">✅ Ingen utløp</td>
                </tr>
                <tr>
                  <td className="border border-gray-300 dark:border-gray-600 px-4 py-3 font-semibold">Verdi</td>
                  <td className="border border-gray-300 dark:border-gray-600 px-4 py-3">❌ Ofte høyere enn kontanter (lokker deg)</td>
                  <td className="border border-gray-300 dark:border-gray-600 px-4 py-3">✅ Faktisk kompensasjonsbeløp</td>
                </tr>
                <tr className="bg-gray-50 dark:bg-gray-800/50">
                  <td className="border border-gray-300 dark:border-gray-600 px-4 py-3 font-semibold">Overførbarhet</td>
                  <td className="border border-gray-300 dark:border-gray-600 px-4 py-3">❌ Personlig (ikke salgbar)</td>
                  <td className="border border-gray-300 dark:border-gray-600 px-4 py-3">✅ Dine penger</td>
                </tr>
                <tr>
                  <td className="border border-gray-300 dark:border-gray-600 px-4 py-3 font-semibold">Juridisk rett</td>
                  <td className="border border-gray-300 dark:border-gray-600 px-4 py-3">❌ Kun med samtykke</td>
                  <td className="border border-gray-300 dark:border-gray-600 px-4 py-3">✅ Lovfestet rett (EU261)</td>
                </tr>
              </tbody>
            </table>
          </div>

          {/* FAQ */}
          <div className="bg-gray-50 dark:bg-gray-800 p-8 rounded-xl my-12">
            <h2 className="text-2xl font-bold mb-6 text-gray-900 dark:text-white">Ofte stilte spørsmål</h2>
            
            <div className="space-y-6">
              <div>
                <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-2 flex items-center gap-2">
                  <CheckCircle2 className="w-5 h-5 text-green-600" />
                  Kan Norwegian tvinge meg til å akseptere voucher?
                </h3>
                <p className="text-gray-700 dark:text-gray-300 text-sm">
                  <strong>Nei.</strong> EU261 krever kontantutbetaling med mindre du aktivt godtar voucher. Norwegian kan tilby det, men ikke tvinge deg.
                </p>
              </div>

              <div>
                <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-2 flex items-center gap-2">
                  <CheckCircle2 className="w-5 h-5 text-green-600" />
                  Hva hvis voucherverdien er høyere enn kontanterstatningen?
                </h3>
                <p className="text-gray-700 dark:text-gray-300 text-sm">
                  Dette er en vanlig taktikk ("Vi tilbyr 400 € voucher i stedet for 250 € kontant"). Du har fortsatt rett til å nekte og kreve kontanter. Ikke la deg lure av høyere beløp – vouchers utløper ofte ubrukt.
                </p>
              </div>

              <div>
                <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-2 flex items-center gap-2">
                  <CheckCircle2 className="w-5 h-5 text-green-600" />
                  Kan jeg bruke voucher for å kjøpe billetter til andre?
                </h3>
                <p className="text-gray-700 dark:text-gray-300 text-sm">
                  Avhenger av vouchervilkårene. Mange Norwegian-vouchers er personlige og kan ikke overføres. Kontanter har ingen slike begrensninger.
                </p>
              </div>

              <div>
                <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-2 flex items-center gap-2">
                  <CheckCircle2 className="w-5 h-5 text-green-600" />
                  Hva hvis jeg faktisk vil ha voucher?
                </h3>
                <p className="text-gray-700 dark:text-gray-300 text-sm">
                  Det er helt greit! Hvis du planlegger å fly Norwegian igjen og voucheren har god verdi, kan du akseptere den. Men sørg for å bruke den før utløpsdato (vanligvis 1 år).
                </p>
              </div>

              <div>
                <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-2 flex items-center gap-2">
                  <CheckCircle2 className="w-5 h-5 text-green-600" />
                  Hvordan vet jeg at ClaimWinger krever kontanter?
                </h3>
                <p className="text-gray-700 dark:text-gray-300 text-sm">
                  ClaimWinger <strong>aldri</strong> aksepterer vouchers på vegne av kunder. De krever alltid kontant utbetaling til din bankkonto. Dette er en av deres standardprosedyrer.
                </p>
              </div>
            </div>
          </div>

          {/* CTA 2 */}
          <div className="bg-gradient-to-br from-blue-600 to-green-600 text-white rounded-2xl p-8 md:p-12 text-center my-12 shadow-lg">
            <h3 className="text-3xl font-bold mb-4">Nei til voucher – ja til kontanter</h3>
            <p className="text-xl mb-8 text-blue-100">
              ClaimWinger krever alltid penger på konto. Ingen gavekort, ingen kompromiss.
            </p>
            <a href="https://claimwinger.com/no" target="_blank" rel="noopener noreferrer">
              <Button size="lg" className="bg-white text-blue-700 hover:bg-gray-100 text-lg px-8 py-6">
                Få pengene mine nå
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
            </a>
            <p className="text-sm text-blue-200 mt-4">
              ✓ No Win, No Fee | ✓ Alltid kontanter | ✓ 4-8 ukers utbetaling
            </p>
          </div>

          <h2>Oppsummering</h2>
          <p>
            Når Norwegian tilbyr voucher i stedet for kontanter, har du full rett til å nekte og kreve pengene utbetalt på bankkonto. EU-forordning 261/2004 krever kontantutbetaling med mindre du aktivt godtar voucher. Ikke la deg presse til å akseptere gavekort – hold fast ved dine rettigheter eller la ClaimWinger kreve kontanter på dine vegne.
          </p>
        </div>
      </article>
    </LayoutNo>
  );
}
