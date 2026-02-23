import { SEO } from "@/components/SEO";
import { LayoutCs } from "@/components/LayoutCs";
import Link from "next/link";
import { Plane, Clock, Euro, FileText, CheckCircle2, AlertCircle, Calendar, Users, Info } from "lucide-react";

export default function CsaCzechAirlinesKompenzace() {
  return (
    <LayoutCs>
      <SEO
        title="ČSA (Czech Airlines) kompenzace za zpoždění a zrušení letu 2026"
        description="Máte zpožděný nebo zrušený let s ČSA? Zjistěte, jak získat kompenzaci až 600 € podle nařízení EU 261/2004. Návod krok za krokem."
        url="https://lotproblem.pl/cs/blog/csa-czech-airlines-kompenzace"
        image="https://lotproblem.pl/og-image.png"
      />

      <article className="max-w-4xl mx-auto px-4 py-12">
        <nav className="text-sm text-gray-600 dark:text-gray-400 mb-6">
          <Link href="/cs" className="hover:text-blue-600 dark:hover:text-blue-400">Domů</Link>
          {" / "}
          <Link href="/cs/blog" className="hover:text-blue-600 dark:hover:text-blue-400">Blog</Link>
          {" / "}
          <span className="text-gray-900 dark:text-gray-100">ČSA kompenzace</span>
        </nav>

        <header className="mb-12">
          <div className="flex items-center gap-2 text-blue-600 dark:text-blue-400 mb-4">
            <Plane className="w-5 h-5" />
            <span className="text-sm font-medium">Průvodce aerolinek</span>
          </div>
          
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-6">
            ČSA (Czech Airlines): Kompenzace za zpoždění a zrušení letu
          </h1>

          <div className="flex flex-wrap gap-4 text-sm text-gray-600 dark:text-gray-400">
            <div className="flex items-center gap-2">
              <Calendar className="w-4 h-4" />
              <span>23. února 2026</span>
            </div>
            <div className="flex items-center gap-2">
              <Clock className="w-4 h-4" />
              <span>6 min čtení</span>
            </div>
          </div>
        </header>

        <div className="bg-gradient-to-br from-blue-50 to-white dark:from-blue-950 dark:to-gray-900 rounded-2xl p-8 mb-12 border border-blue-100 dark:border-blue-900">
          <div className="flex items-start gap-4">
            <div className="bg-blue-600 rounded-full p-3 flex-shrink-0">
              <Euro className="w-6 h-6 text-white" />
            </div>
            <div className="flex-1">
              <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-3">
                Letěli jste s ČSA a měli zpoždění?
              </h2>
              <p className="text-gray-700 dark:text-gray-300 mb-6">
                Získejte až 600 € odškodnění. Ověřte si nárok zdarma během 2 minut.
                <br/>
                <span className="text-sm opacity-75">Provize 30% pouze při úspěchu. Žádné riziko.</span>
              </p>
              <a
                href="https://claimwinger.com?utm_source=blog&utm_medium=cta&utm_campaign=csa_czech_airlines_kompenzace"
                className="inline-flex items-center gap-2 bg-blue-600 hover:bg-blue-700 text-white px-8 py-4 rounded-xl font-semibold transition-colors"
              >
                Ověřit nárok na kompenzaci
                <CheckCircle2 className="w-5 h-5" />
              </a>
            </div>
          </div>
        </div>

        <div className="prose prose-lg dark:prose-invert max-w-none mb-12">
          <p className="lead text-xl text-gray-700 dark:text-gray-300">
            České aerolinie (ČSA), jedna z pěti nejstarších leteckých společností na světě, je součástí skupiny Smartwings. I když se jejich síť linek zmenšila, stále platí: pokud letíte s ČSA, chrání vás evropské nařízení 261/2004.
          </p>

          <h3>Kdy máte nárok na kompenzaci od ČSA?</h3>
          <p>
            Protože je ČSA dopravce z EU (Česká republika), nařízení EU 261/2004 se vztahuje na <strong>všechny jejich lety</strong>, bez ohledu na to, zda odlétají z EU nebo přilétají do EU.
          </p>
          <ul className="list-none pl-0 space-y-4">
            <li className="flex items-start gap-3">
              <CheckCircle2 className="w-6 h-6 text-green-500 flex-shrink-0 mt-1" />
              <span><strong>Zpoždění 3+ hodin:</strong> Pokud přiletíte do cíle o 3 hodiny později oproti plánu.</span>
            </li>
            <li className="flex items-start gap-3">
              <CheckCircle2 className="w-6 h-6 text-green-500 flex-shrink-0 mt-1" />
              <span><strong>Zrušení letu:</strong> Oznámené méně než 14 dní před odletem.</span>
            </li>
            <li className="flex items-start gap-3">
              <CheckCircle2 className="w-6 h-6 text-green-500 flex-shrink-0 mt-1" />
              <span><strong>Odmítnutí nástupu:</strong> Z důvodu přeobsazení letu (overbooking).</span>
            </li>
          </ul>

          <div className="my-8 p-6 bg-yellow-50 dark:bg-yellow-900/30 rounded-xl border border-yellow-200 dark:border-yellow-700">
            <h4 className="flex items-center gap-2 text-yellow-800 dark:text-yellow-200 font-bold mb-2">
              <Info className="w-5 h-5" />
              ČSA a Smartwings - je to jedno?
            </h4>
            <p className="text-yellow-800 dark:text-yellow-200 m-0">
              ČSA je nyní součástí skupiny Smartwings. Často můžete mít letenku koupenou u ČSA (číslo letu OK), ale let operuje Smartwings (QS), nebo naopak. Pro kompenzaci je klíčové, <strong>kdo let operoval</strong>. V případě této skupiny se však reklamace často řeší centrálně.
            </p>
          </div>

          <h3>Výše kompenzace u ČSA</h3>
          <p>Částka závisí na délce letu, ne na ceně letenky:</p>
          
          <div className="grid md:grid-cols-3 gap-4 my-6 not-prose">
            <div className="bg-white dark:bg-gray-800 p-6 rounded-xl border border-gray-200 dark:border-gray-700 text-center">
              <div className="text-3xl font-bold text-blue-600 mb-2">250 €</div>
              <div className="text-sm text-gray-600 dark:text-gray-400">Lety do 1 500 km</div>
              <div className="text-xs text-gray-500 mt-2">např. Praha - Paříž</div>
            </div>
            <div className="bg-white dark:bg-gray-800 p-6 rounded-xl border border-gray-200 dark:border-gray-700 text-center">
              <div className="text-3xl font-bold text-blue-600 mb-2">400 €</div>
              <div className="text-sm text-gray-600 dark:text-gray-400">Lety v EU nad 1 500 km</div>
              <div className="text-xs text-gray-500 mt-2">např. Praha - Madrid</div>
            </div>
            <div className="bg-white dark:bg-gray-800 p-6 rounded-xl border border-gray-200 dark:border-gray-700 text-center">
              <div className="text-3xl font-bold text-blue-600 mb-2">600 €</div>
              <div className="text-sm text-gray-600 dark:text-gray-400">Lety mimo EU nad 3 500 km</div>
              <div className="text-xs text-gray-500 mt-2">Dálkové lety</div>
            </div>
          </div>

          <h3>Jak podat reklamaci u ČSA?</h3>
          <p>
            Můžete zkusit kontaktovat ČSA přímo přes jejich webové formuláře. Připravte se však na to, že komunikace může být pomalá a aerolinky často zkoušejí různé výmluvy na "mimořádné okolnosti".
          </p>
          <p>
            <strong>Nejčastější výmluvy aerolinek:</strong>
          </p>
          <ul>
            <li>"Technická závada" (ve skutečnosti běžná porucha = nárok trvá)</li>
            <li>"Špatné počasí" (i když jiná letadla létala)</li>
            <li>"Stávka letištního personálu" (toto může být mimořádná okolnost, ale musí se prověřit)</li>
          </ul>

          <h3>Proč využít ClaimWinger?</h3>
          <p>
            Pokud nechcete trávit hodiny dopisováním s aerolinkou a riskovat zamítnutí, nechte to na nás.
          </p>
          <ul>
            <li><strong>Známe triky aerolinek:</strong> Víme, kdy mají povinnost platit.</li>
            <li><strong>Žádné poplatky předem:</strong> Nic neplatíte, dokud nevyhrajeme.</li>
            <li><strong>Právní síla:</strong> Máme tým právníků specializovaných na letecké právo.</li>
          </ul>
        </div>

        <div className="bg-gray-50 dark:bg-gray-800 rounded-2xl p-8 text-center">
          <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">
            Zkontrolujte svůj let s ČSA
          </h2>
          <p className="text-gray-600 dark:text-gray-400 mb-8 max-w-2xl mx-auto">
            Stačí zadat číslo letu a datum. Zjistíme, zda máte nárok na odškodnění a postaráme se o zbytek.
          </p>
          <a
            href="https://claimwinger.com?utm_source=blog&utm_medium=footer&utm_campaign=csa_czech_airlines_kompenzace"
            className="inline-flex items-center gap-2 bg-blue-600 hover:bg-blue-700 text-white px-8 py-3 rounded-full font-semibold transition-colors"
          >
            Zkontrolovat let zdarma
            <CheckCircle2 className="w-5 h-5" />
          </a>
        </div>
      </article>

      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Article",
            "headline": "ČSA (Czech Airlines) kompenzace za zpoždění a zrušení letu",
            "description": "Návod jak získat kompenzaci od ČSA za zpožděný let. Práva cestujících a postupy.",
            "author": { "@type": "Organization", "name": "LotProblem.pl" },
            "datePublished": "2026-02-23",
            "dateModified": "2026-02-23",
            "image": "https://lotproblem.pl/og-image.png",
            "publisher": {
              "@type": "Organization",
              "name": "LotProblem.pl",
              "logo": { "@type": "ImageObject", "url": "https://lotproblem.pl/og-image.png" }
            }
          })
        }}
      />
    </LayoutCs>
  );
}