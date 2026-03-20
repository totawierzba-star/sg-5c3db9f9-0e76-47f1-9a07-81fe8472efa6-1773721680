import { LayoutNo } from "@/components/LayoutNo";
import { SEO } from "@/components/SEO";
import { Button } from "@/components/ui/button";
import { ArrowRight, Calendar, CheckCircle2, XCircle } from "lucide-react";
import Link from "next/link";

export default function ThreeYearClaimNo() {
  return (
    <LayoutNo>
      <SEO 
        title="Kan jeg kreve erstatning for et fly for 3 år siden? [Norge 2025]"
        description="Ja! I Norge har du 3 års foreldelsesf

rist for flykrav. Lær hvordan du kan kreve erstatning for gamle forsinkelser og kanselleringer."
        url="https://problemlot.com/no/blog/krave-erstatning-fly-3-ar-siden"
      />

      <article className="container mx-auto px-4 py-12 max-w-4xl">
        <header className="mb-8">
          <Link href="/no/blog" className="text-blue-600 hover:text-blue-700 text-sm font-medium mb-4 inline-block">
            ← Tilbake til blogg
          </Link>
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-4">
            Kan jeg kreve erstatning for et fly for 3 år siden?
          </h1>
          <div className="flex items-center gap-4 text-sm text-gray-600 dark:text-gray-400">
            <span>4 min lesing</span>
            <span>•</span>
            <span>Oppdatert: Mars 2025</span>
          </div>
        </header>

        {/* Direct Answer */}
        <div className="bg-green-50 dark:bg-green-900/20 border-l-4 border-green-600 p-6 mb-8 rounded-r-lg">
          <h2 className="text-xl font-bold text-green-900 dark:text-green-100 mb-3 flex items-center gap-2">
            <CheckCircle2 className="w-6 h-6" />
            Ja, du kan fortsatt kreve erstatning!
          </h2>
          <div className="space-y-3 text-gray-800 dark:text-gray-200">
            <p className="font-semibold">I Norge har du <span className="text-green-600 dark:text-green-400 text-xl">3 års</span> foreldelsefrist for flykrav.</p>
            <ul className="space-y-2 ml-4">
              <li>✅ Krav for fly i 2022, 2023, 2024 og frem til i dag er gyldige</li>
              <li>✅ Du kan kreve erstatning for flere fly samtidig</li>
              <li>✅ Fristen gjelder fra flydatoen (ikke når du oppdaget problemet)</li>
            </ul>
            <p className="text-sm pt-3 border-t border-green-200 dark:border-green-800">
              <strong>Juridisk grunnlag:</strong> Norsk foreldelseslov + EU-forordning 261/2004 (via EØS).
            </p>
          </div>
        </div>

        {/* CTA 1 */}
        <div className="bg-gradient-to-r from-purple-50 to-blue-50 dark:from-purple-900/20 dark:to-blue-900/20 p-8 rounded-xl mb-12 text-center">
          <Calendar className="w-16 h-16 text-purple-600 mx-auto mb-4" />
          <h3 className="text-2xl font-bold mb-4 dark:text-white">Har du gamle flyforsinkelser?</h3>
          <p className="text-gray-700 dark:text-gray-300 mb-6">
            Sjekk om dine gamle fly kvalifiserer for erstatning. ClaimWinger håndterer saker tilbake til 2022.
          </p>
          <a href="https://claimwinger.com/no" target="_blank" rel="noopener noreferrer">
            <Button size="lg" className="bg-purple-600 hover:bg-purple-700 text-white text-lg px-8 py-6">
              Sjekk mine gamle fly
              <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
          </a>
        </div>

        <div className="prose dark:prose-invert max-w-none">
          <h2>Foreldelsesfristen i Norge: 3 år</h2>
          <p>
            I Norge reguleres foreldelsesfristen for flykrav av <strong>foreldelsesloven</strong>. 
            For passasjerrettigheter under EU-forordning 261/2004 er fristen:
          </p>
          <div className="bg-blue-50 dark:bg-blue-900/20 p-6 rounded-lg my-6">
            <p className="text-2xl font-bold text-blue-600 mb-2">3 år fra hendelsen</p>
            <p className="text-sm mb-0">
              Det betyr at hvis flyet ditt var forsinket eller kansellert den <strong>7. mars 2022</strong>, 
              har du frem til <strong>7. mars 2025</strong> på deg å sende inn kravet.
            </p>
          </div>

          <h2>Hvordan beregne din frist</h2>
          <p>Foreldelses fristen starter å løpe fra:</p>
          <ol>
            <li><strong>Den opprinnelige flydatoen</strong> — Ikke datoen du oppdaget at du hadde rett til erstatning</li>
            <li><strong>Kl. 00:00 dagen etter</strong> — Fristen regnes fra midnatt etter hendelsen</li>
            <li><strong>Samme dato 3 år senere</strong> — F.eks. 15. juni 2023 → 15. juni 2026</li>
          </ol>

          <div className="bg-yellow-50 dark:bg-yellow-900/20 border-l-4 border-yellow-500 p-6 my-6">
            <h3 className="text-lg font-semibold mb-2">⚠️ Viktig: Send kravet i god tid</h3>
            <p>
              Selv om du teknisk sett har tid frem til den siste dagen, anbefaler vi å sende kravet 
              minst <strong>2-3 måneder før</strong> fristen utløper. Dette gir deg rom for å håndtere 
              eventuelle komplikasjoner eller manglende dokumentasjon.
            </p>
          </div>

          <h2>Varierer fristen mellom land?</h2>
          <p>Ja, foreldelsesfristen varierer betydelig mellom europeiske land:</p>
          <div className="overflow-x-auto my-8">
            <table className="w-full border-collapse">
              <thead>
                <tr className="bg-gray-100 dark:bg-gray-800">
                  <th className="border px-4 py-3 text-left">Land</th>
                  <th className="border px-4 py-3 text-left">Foreldelsesfristen</th>
                  <th className="border px-4 py-3 text-left">Kommentar</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td className="border px-4 py-3 font-semibold">Norge 🇳🇴</td>
                  <td className="border px-4 py-3 text-green-600 font-bold">3 år</td>
                  <td className="border px-4 py-3">God tid til å kreve</td>
                </tr>
                <tr className="bg-gray-50 dark:bg-gray-800/50">
                  <td className="border px-4 py-3">Sverige 🇸🇪</td>
                  <td className="border px-4 py-3">3 år</td>
                  <td className="border px-4 py-3">Samme som Norge</td>
                </tr>
                <tr>
                  <td className="border px-4 py-3">Danmark 🇩🇰</td>
                  <td className="border px-4 py-3">3 år</td>
                  <td className="border px-4 py-3">Samme som Norge</td>
                </tr>
                <tr className="bg-gray-50 dark:bg-gray-800/50">
                  <td className="border px-4 py-3">UK 🇬🇧</td>
                  <td className="border px-4 py-3 text-orange-600">6 år</td>
                  <td className="border px-4 py-3">Lengre enn Norge</td>
                </tr>
                <tr>
                  <td className="border px-4 py-3">Tyskland 🇩🇪</td>
                  <td className="border px-4 py-3">3 år</td>
                  <td className="border px-4 py-3">Standard i Europa</td>
                </tr>
                <tr className="bg-gray-50 dark:bg-gray-800/50">
                  <td className="border px-4 py-3">Polen 🇵🇱</td>
                  <td className="border px-4 py-3 text-red-600">2 år</td>
                  <td className="border px-4 py-3">Kortere frist</td>
                </tr>
              </tbody>
            </table>
          </div>

          <h2>Hva hvis flyet ditt var for mer enn 3 år siden?</h2>
          <p>
            Dessverre, hvis hendelsen skjedde for mer enn 3 år siden, har kravet ditt foreldet i Norge. 
            Du kan ikke lenger kreve erstatning under EU261.
          </p>
          <div className="bg-red-50 dark:bg-red-900/20 border-l-4 border-red-600 p-6 my-6">
            <h3 className="flex items-center gap-2 text-lg font-semibold mb-2">
              <XCircle className="w-5 h-5 text-red-600" />
              Når kravet er foreldet
            </h3>
            <p className="mb-3">Hvis flyet ditt var:</p>
            <ul className="space-y-1">
              <li>• <strong>Før mars 2022</strong> → Foreldet (per mars 2025)</li>
              <li>• <strong>Mars 2022 eller senere</strong> → Fortsatt gyldige</li>
            </ul>
            <p className="mt-3 text-sm">
              Det er <strong>ingen unntaksregler</strong> — fristen er absolutt. Send inn kravet så snart som mulig.
            </p>
          </div>

          <h2>Dokumenter du trenger for gamle fly</h2>
          <p>For fly som var for flere år siden, er det ekstra viktig å ha god dokumentasjon:</p>
          <ul>
            <li>✅ <strong>Boardingkort</strong> — Digital eller papir (sjekk e-post)</li>
            <li>✅ <strong>Bookingbekreftelse</strong> — Fra flyselskapet eller reisebyråer</li>
            <li>✅ <strong>E-post om forsinkelse/kansellering</strong> — Bevis på hendelsen</li>
            <li>✅ <strong>Kredittkortkvittering</strong> — Hvis du ikke finner bookingbekreftelse</li>
            <li>✅ <strong>Flightradar24 data</strong> — ClaimWinger kan hente dette for deg</li>
          </ul>

          <div className="bg-blue-50 dark:bg-blue-900/20 p-6 rounded-lg my-6">
            <h3 className="font-semibold text-lg mb-2">💡 Tips: Ikke finn dokumenter alene</h3>
            <p className="text-sm mb-0">
              Hvis du mangler dokumentasjon, kan ClaimWinger hjelpe deg med å hente historisk flightdata, 
              kontakte flyselskapet for gamle bookinger, og bygge en sterk sak selv uten komplette dokumenter.
            </p>
          </div>

          <h2>Hvorfor vente? Send kravet nå</h2>
          <p>Selv om du har 3 år på deg, er det flere grunner til å handle raskt:</p>
          <ol>
            <li><strong>Dokumenter forsvinner</strong> — E-poster slettes, old bookinger blir fjernet fra systemer</li>
            <li><strong>Flyselskaper fusjonerer/konkurs</strong> — Som Wow Air, Primera Air (umulig å kreve etter konkurs)</li>
            <li><strong>Minnene blekner</strong> — Detaljer om hendelsen blir vanskeligere å huske</li>
            <li><strong>Jo raskere, jo raskere utbetaling</strong> — Saksbehandlingstid regnes fra innsending</li>
          </ol>
        </div>

        {/* FAQ */}
        <section className="mt-16 mb-12" itemScope itemType="https://schema.org/FAQPage">
          <h2 className="text-3xl font-bold mb-8 dark:text-white">Ofte stilte spørsmål</h2>
          
          <div className="space-y-6">
            <div itemScope itemProp="mainEntity" itemType="https://schema.org/Question" className="bg-white dark:bg-gray-800 rounded-lg p-6 shadow-sm">
              <h3 itemProp="name" className="text-xl font-semibold mb-3">
                Kan jeg kreve for flere gamle fly samtidig?
              </h3>
              <div itemScope itemProp="acceptedAnswer" itemType="https://schema.org/Answer">
                <p itemProp="text" className="text-gray-700 dark:text-gray-300">
                  Ja, absolutt! Hvis du har hatt flere forsinkede eller kansellerte fly innenfor de siste 3 årene, kan du sende inn krav for alle samtidig. ClaimWinger håndterer flere krav parallelt uten ekstra kostnad.
                </p>
              </div>
            </div>

            <div itemScope itemProp="mainEntity" itemType="https://schema.org/Question" className="bg-white dark:bg-gray-800 rounded-lg p-6 shadow-sm">
              <h3 itemProp="name" className="text-xl font-semibold mb-3">
                Hva hvis jeg allerede kontaktet flyselskapet for lenge siden?
              </h3>
              <div itemScope itemProp="acceptedAnswer" itemType="https://schema.org/Answer">
                <p itemProp="text" className="text-gray-700 dark:text-gray-300">
                  Selv om du fikk avslag tidligere, kan du fortsatt kreve igjen hvis det ikke har gått 3 år. Mange flyselskaper avslår automatisk og håper folk gir opp. Med ClaimWingers hjelp kan du gjenåpne saken med profesjonell juridisk støtte.
                </p>
              </div>
            </div>

            <div itemScope itemProp="mainEntity" itemType="https://schema.org/Question" className="bg-white dark:bg-gray-800 rounded-lg p-6 shadow-sm">
              <h3 itemProp="name" className="text-xl font-semibold mb-3">
                Gjelder 3-årsfristen også for reiser booket via reisebyrå?
              </h3>
              <div itemScope itemProp="acceptedAnswer" itemType="https://schema.org/Answer">
                <p itemProp="text" className="text-gray-700 dark:text-gray-300">
                  Ja, fristen er den samme uansett hvor du kjøpte billetten. Enten du booket direkte hos flyselskapet, via Expedia, momondo eller et reisebyrå, har du 3 år til å kreve erstatning fra flyselskapet (ikke reisebyrået).
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* CTA 2 */}
        <section className="bg-gradient-to-br from-purple-600 to-indigo-600 text-white rounded-2xl p-8 md:p-12 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Ikke la pengene dine gå til spille
          </h2>
          <p className="text-xl mb-8 text-purple-100">
            Sjekk om dine gamle fly kvalifiserer. Gratis og uforpliktende.
          </p>
          <a href="https://claimwinger.com/no" target="_blank" rel="noopener noreferrer">
            <Button size="lg" className="bg-white text-purple-600 hover:bg-gray-100 text-lg px-8 py-6">
              Start mitt krav i dag
              <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
          </a>
          <p className="text-sm text-purple-100 mt-6">
            ⏰ 3 års frist | 💼 Ingen risiko | 💰 98% suksessrate
          </p>
        </section>
      </article>
    </LayoutNo>
  );
}
