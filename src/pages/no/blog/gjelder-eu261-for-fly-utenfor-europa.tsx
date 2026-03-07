import { LayoutNo } from "@/components/LayoutNo";
import { SEO } from "@/components/SEO";
import { Button } from "@/components/ui/button";
import { ArrowRight, Globe, CheckCircle2, XCircle } from "lucide-react";
import Link from "next/link";

export default function EU261OutsideEuropeNo() {
  return (
    <LayoutNo>
      <SEO 
        title="Gjelder EU261 for fly utenfor Europa? [Regler 2025]"
        description="Skal du reise til USA, Asia eller Dubai? Finn ut nøyaktig når EU261 gjelder for interkontinentale flyvninger og når du kan få erstatning."
        url="https://problemlot.com/no/blog/gjelder-eu261-for-fly-utenfor-europa"
      />

      <article className="container mx-auto px-4 py-12 max-w-4xl">
        <header className="mb-8">
          <Link href="/no/blog" className="text-blue-600 hover:text-blue-700 dark:text-blue-400 text-sm font-medium mb-4 inline-block">
            ← Tilbake til blogg
          </Link>
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-4">
            Gjelder EU261 for fly utenfor Europa?
          </h1>
          <div className="flex items-center gap-4 text-sm text-gray-600 dark:text-gray-400">
            <span>4 min lesing</span>
            <span>•</span>
            <span>Oppdatert: Mars 2025</span>
          </div>
        </header>

        {/* Direct Answer Box */}
        <div className="bg-blue-50 dark:bg-blue-900/20 border-l-4 border-blue-600 p-6 mb-8 rounded-r-lg">
          <h2 className="text-xl font-bold text-blue-900 dark:text-blue-100 mb-3 flex items-center gap-2">
            <Globe className="w-6 h-6" />
            Raskt svar: "Det avhenger av retningen og flyselskapet"
          </h2>
          <div className="space-y-4 text-gray-800 dark:text-gray-200">
            <p>EU-forordning 261/2004 (som inkluderer Norge via EØS) gjelder i to hovedtilfeller:</p>
            <div className="grid sm:grid-cols-2 gap-4 mt-2">
              <div className="bg-white dark:bg-gray-800 p-4 rounded border border-green-200">
                <h3 className="font-bold text-green-600 flex items-center gap-2"><CheckCircle2 className="w-4 h-4"/> Ut av Europa</h3>
                <p className="text-sm mt-1">Gjelder <strong>ALLTID</strong>. Uansett om du flyr med SAS (EU) eller Emirates (Ikke-EU). Flyr du fra Norge til Dubai, er du beskyttet.</p>
              </div>
              <div className="bg-white dark:bg-gray-800 p-4 rounded border border-orange-200">
                <h3 className="font-bold text-orange-600 flex items-center gap-2"><CheckCircle2 className="w-4 h-4"/> Inn til Europa</h3>
                <p className="text-sm mt-1">Gjelder <strong>BARE</strong> hvis flyselskapet er registrert i EU/EØS. F.eks. beskyttet med Norwegian (EU), men ikke med Delta Airlines (USA).</p>
              </div>
            </div>
          </div>
        </div>

        <div className="prose dark:prose-invert max-w-none">
          <h2>Hvorfor er Norge regnet som Europa/EU i denne sammenhengen?</h2>
          <p>
            Selv om Norge ikke er medlem av EU, er vi en fullverdig del av det europeiske indre markedet gjennom <strong>EØS-avtalen</strong>. 
            Det betyr at alle flyvninger som starter eller slutter i Norge, Island, Liechtenstein eller Sveits behandles nøyaktig likt 
            som flyvninger i EU-land som Tyskland eller Spania.
          </p>

          <h2>Eksempler: Når får du 600 €?</h2>
          <p>
            Siden interkontinentale flyvninger nesten alltid er over 3500 kilometer, vil standardkompensasjonen være <strong>600 €</strong> (ca. 7000 NOK). 
            La oss se på praktiske eksempler:
          </p>

          <table className="w-full border-collapse my-6">
            <thead>
              <tr className="bg-gray-100 dark:bg-gray-800">
                <th className="border px-4 py-2 text-left">Rute</th>
                <th className="border px-4 py-2 text-left">Flyselskap</th>
                <th className="border px-4 py-2 text-center">Gjelder EU261?</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td className="border px-4 py-2">Oslo → New York</td>
                <td className="border px-4 py-2">SAS (EØS)</td>
                <td className="border px-4 py-2 text-center text-green-600 font-bold">JA ✅</td>
              </tr>
              <tr className="bg-gray-50 dark:bg-gray-800/50">
                <td className="border px-4 py-2">New York → Oslo</td>
                <td className="border px-4 py-2">SAS (EØS)</td>
                <td className="border px-4 py-2 text-center text-green-600 font-bold">JA ✅</td>
              </tr>
              <tr>
                <td className="border px-4 py-2">Oslo → Doha</td>
                <td className="border px-4 py-2">Qatar Airways (Ikke-EU)</td>
                <td className="border px-4 py-2 text-center text-green-600 font-bold">JA ✅</td>
              </tr>
              <tr className="bg-gray-50 dark:bg-gray-800/50">
                <td className="border px-4 py-2">Doha → Oslo</td>
                <td className="border px-4 py-2">Qatar Airways (Ikke-EU)</td>
                <td className="border px-4 py-2 text-center text-red-600 font-bold">NEI ❌</td>
              </tr>
              <tr>
                <td className="border px-4 py-2">Bangkok → Sydney</td>
                <td className="border px-4 py-2">Thai Airways</td>
                <td className="border px-4 py-2 text-center text-red-600 font-bold">NEI ❌</td>
              </tr>
            </tbody>
          </table>

          <h2>Det farlige smutthullet: "Codeshare" flyvninger</h2>
          <p>
            Mange kjøper billetter der flere selskaper samarbeider (codeshare). Kanskje du kjøpte billetten din av Lufthansa (EU), 
            men selve flyet drives av United Airlines (USA). 
          </p>
          <p>
            Regelen sier: Det er det <strong>opererende flyselskapet</strong> som er ansvarlig. Hvis du flyr fra USA til Norge, 
            og det er United Airlines-flyet som er forsinket, får du IKKE EU261-kompensasjon (siden United ikke er et EU/EØS-selskap 
            og flyet starter utenfor Europa). Dette gjelder selv om billetten har et Lufthansa-rutenummer.
          </p>

          <h2>Storbritannia etter Brexit (UK261)</h2>
          <p>
            Etter Brexit har Storbritannia innført sin egen lovgivning, ofte kalt <strong>UK261</strong>. Den er nesten en 
            direkte kopi av EU261. Det betyr at om du flyr fra London Heathrow til New York med British Airways og blir forsinket, 
            beskyttes du av den britiske loven (med kompensasjon i Pund, ca. £520), selv om du er norsk statsborger.
          </p>

          {/* CTA 2 */}
          <div className="bg-blue-600 text-white rounded-xl p-8 my-10 text-center">
            <h3 className="text-2xl font-bold mb-4">Er du usikker på om flyet ditt er dekket?</h3>
            <p className="mb-6 text-blue-100">
              Internasjonale regelverk er kompliserte. Legg inn flynummeret ditt hos vår partner ClaimWinger, 
              så sjekker databasen automatisk om du har krav på opptil 600 € – helt gratis!
            </p>
            <a href="https://claimwinger.com/no" target="_blank" rel="noopener noreferrer">
              <Button size="lg" variant="secondary" className="text-blue-700 font-bold text-lg px-8">
                Sjekk min internasjonale flyvning
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
            </a>
          </div>

        </div>
      </article>
    </LayoutNo>
  );
}