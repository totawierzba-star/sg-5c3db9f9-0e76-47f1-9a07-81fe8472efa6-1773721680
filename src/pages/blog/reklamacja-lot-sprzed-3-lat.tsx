import { Layout } from "@/components/Layout";
import { SEO } from "@/components/SEO";
import Link from "next/link";
import { ArrowRight, CalendarDays, CheckCircle, XCircle, Clock } from "lucide-react";

export default function ReklamacjaLotSprzed3Lat() {
  return (
    <Layout>
      <SEO
        title="Czy mogę reklamować lot sprzed 3 lat? (Featured Snippet)"
        description="Termin przedawnienia roszczeń za opóźniony lot w Polsce. Dowiedz się czy możesz ubiegać się o odszkodowanie za stary lot."
      />

      <article className="min-h-screen bg-gradient-to-b from-blue-50 to-white py-12">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <nav className="mb-8 text-sm">
            <ol className="flex items-center space-x-2 text-gray-600">
              <li><Link href="/" className="hover:text-blue-600">Strona główna</Link></li>
              <li><ArrowRight className="h-4 w-4" /></li>
              <li><Link href="/blog" className="hover:text-blue-600">Blog</Link></li>
              <li><ArrowRight className="h-4 w-4" /></li>
              <li className="text-blue-600 font-medium">Reklamacja sprzed lat</li>
            </ol>
          </nav>

          <header className="mb-12 text-center">
            <div className="inline-flex items-center gap-2 bg-blue-100 text-blue-700 px-4 py-2 rounded-full text-sm font-medium mb-6">
              <CalendarDays className="h-4 w-4" />
              Terminy i przedawnienie
            </div>
            <h1 className="text-4xl sm:text-5xl font-bold text-gray-900 mb-6">
              Czy mogę reklamować lot sprzed 3 lat?
            </h1>
            <p className="text-xl text-gray-600 mb-4">
              Zasady dotyczące przedawnienia i starych biletów
            </p>
          </header>

          <div className="bg-gradient-to-r from-blue-600 to-blue-700 text-white rounded-2xl p-8 mb-12 shadow-xl">
            <h2 className="text-2xl font-bold mb-4 flex items-center gap-2">
              <CheckCircle className="h-6 w-6" />
              Szybka odpowiedź
            </h2>
            <p className="text-lg leading-relaxed mb-6">
              <strong>Tak, ale to ostateczny termin.</strong> Zgodnie z wyrokiem Sądu Najwyższego (2017), termin 
              przedawnienia roszczeń z tytułu opóźnionego lub odwołanego lotu <strong>w Polsce wynosi dokładnie 3 lata</strong>.
            </p>
            <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20">
              <p className="mb-2">Czas liczymy od dnia incydentu do dnia <strong>złożenia powództwa w sądzie</strong> (nie samej reklamacji w linii!).</p>
              <div className="flex flex-col gap-2 mt-4 text-sm font-mono opacity-90">
                <div className="flex gap-2"><CheckCircle className="h-5 w-5 text-green-400" /> Lot był 2 lata i 11 miesięcy temu → Składaj wniosek szybko!</div>
                <div className="flex gap-2"><XCircle className="h-5 w-5 text-red-400" /> Lot był 3 lata i 1 dzień temu → Roszczenie definitywnie przedawnione.</div>
              </div>
            </div>
          </div>

          <section className="prose prose-lg max-w-none mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-6">Pułapka: "Złożenie reklamacji do linii"</h2>
            <p className="text-gray-700 mb-6">
              Wielu pasażerów myśli, że jeśli wyśle reklamację np. w ostatnim miesiącu przed upływem 3 lat, 
              to czas się zatrzymuje. <strong>To błąd!</strong> Wysłanie reklamacji do przewoźnika nie przerywa biegu przedawnienia. 
              Bieg przedawnienia przerywa tylko złożenie pozwu w sądzie powszechnym lub wniosek o mediację do ULC.
            </p>
            <p className="text-gray-700 mb-6">
              Dlatego jeśli Twoja sprawa zbliża się do granicy 3 lat, lepiej od razu oddać ją do ClaimWinger, 
              który szybko zabezpieczy Twoje roszczenie prawne.
            </p>
          </section>

          <section className="bg-gradient-to-r from-blue-600 to-blue-700 text-white rounded-2xl p-8 sm:p-12 text-center mb-12">
            <h2 className="text-3xl sm:text-4xl font-bold mb-4">
              Zostało mało czasu?
            </h2>
            <p className="text-xl mb-8 opacity-90">
              Nasz zespół prawny natychmiast przerwie bieg przedawnienia i ochroni Twoje 600 €.
            </p>
            <a
              href="https://claimwinger.com/pl/opozniony-lot"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 bg-white text-blue-600 px-8 py-4 rounded-xl font-bold text-lg hover:bg-blue-50 transition-all shadow-lg hover:shadow-xl"
            >
              Uratuj swoje odszkodowanie
              <ArrowRight className="h-5 w-5" />
            </a>
          </section>
        </div>
      </article>
    </Layout>
  );
}
