import { SEO } from "@/components/SEO";
import { LayoutCs } from "@/components/LayoutCs";
import Link from "next/link";
import { MapPin, Clock, Euro, CheckCircle2, Calendar, Plane, AlertCircle } from "lucide-react";

export default function LetisteOstravaKompenzace() {
  return (
    <LayoutCs>
      <SEO
        title="Letiště Ostrava (OSR): Zpožděný let a kompenzace 2026"
        description="Měli jste zpoždění z letiště v Ostravě? Zjistěte, jak získat až 600 € odškodnění za zpožděný nebo zrušený let."
        url="https://lotproblem.pl/cs/blog/letiste-ostrava-kompenzace"
        image="https://lotproblem.pl/og-image.png"
      />

      <article className="max-w-4xl mx-auto px-4 py-12">
        <nav className="text-sm text-gray-600 dark:text-gray-400 mb-6">
          <Link href="/cs" className="hover:text-blue-600 dark:hover:text-blue-400">Domů</Link>
          {" / "}
          <Link href="/cs/blog" className="hover:text-blue-600 dark:hover:text-blue-400">Blog</Link>
          {" / "}
          <span className="text-gray-900 dark:text-gray-100">Letiště Ostrava</span>
        </nav>

        <header className="mb-12">
          <div className="flex items-center gap-2 text-blue-600 dark:text-blue-400 mb-4">
            <MapPin className="w-5 h-5" />
            <span className="text-sm font-medium">Průvodce letiště</span>
          </div>
          
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-6">
            Letiště Ostrava (OSR): Kompenzace za zpožděný let
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
                Zpoždění z letiště Ostrava?
              </h2>
              <p className="text-gray-700 dark:text-gray-300 mb-6">
                I z menšího letiště máte plná práva na odškodnění. Zjistěte, zda vám náleží až 600 €.
                <br/>
                <span className="text-sm opacity-75">Provize 30% pouze při úspěchu. Žádné riziko.</span>
              </p>
              <a
                href="https://claimwinger.com?utm_source=blog&utm_medium=cta&utm_campaign=letiste_ostrava_kompenzace"
                className="inline-flex items-center gap-2 bg-blue-600 hover:bg-blue-700 text-white px-8 py-4 rounded-xl font-semibold transition-colors"
              >
                Zkontrolovat let z Ostravy
                <CheckCircle2 className="w-5 h-5" />
              </a>
            </div>
          </div>
        </div>

        <div className="prose prose-lg dark:prose-invert max-w-none mb-12">
          <p className="lead text-xl text-gray-700 dark:text-gray-300">
            Letiště Leoše Janáčka Ostrava (OSR) je třetí největší letiště v České republice. I když je provoz menší než v Praze nebo Brně, vaše práva na kompenzaci jsou stejná.
          </p>

          <h3>Kdo létá z Ostravy?</h3>
          <p>
            Z Ostravy operují především charterové společnosti v letní sezóně:
          </p>
          <ul className="list-none pl-0 space-y-4">
            <li className="flex items-start gap-3">
              <div className="bg-blue-100 dark:bg-blue-900 p-2 rounded-lg">
                <Plane className="w-5 h-5 text-blue-600 dark:text-blue-400" />
              </div>
              <div>
                <strong>Smartwings:</strong> Charterové lety do Řecka, Turecka, Egypta a Bulharska
              </div>
            </li>
            <li className="flex items-start gap-3">
              <div className="bg-orange-100 dark:bg-orange-900 p-2 rounded-lg">
                <Plane className="w-5 h-5 text-orange-600 dark:text-orange-400" />
              </div>
              <div>
                <strong>LOT Polish Airlines:</strong> Pravidelná linka do Varšavy (přestupní bod)
              </div>
            </li>
          </ul>

          <h3>Kompenzace za charterový let z Ostravy</h3>
          <div className="p-4 bg-green-50 dark:bg-green-900/30 border-l-4 border-green-500 rounded-r-lg">
            <p className="m-0 font-medium text-green-800 dark:text-green-200">
              Mnoho cestujících si myslí, že na charterové lety (zájezdy s CK) se kompenzace nevztahuje. <strong>To je mýtus!</strong> Nařízení EU 261/2004 platí pro všechny lety z EU, včetně charterů.
            </p>
          </div>

          <h3>Výše odškodnění z Ostravy</h3>
          <p>
            Většina letů z Ostravy spadá do kategorie střední a dlouhé vzdálenosti:
          </p>
          
          <div className="grid md:grid-cols-2 gap-4 my-6 not-prose">
            <div className="bg-white dark:bg-gray-800 p-6 rounded-xl border border-gray-200 dark:border-gray-700 text-center">
              <div className="text-3xl font-bold text-blue-600 mb-2">400 €</div>
              <div className="text-sm text-gray-600 dark:text-gray-400">Lety v EU nad 1 500 km</div>
              <div className="text-xs text-gray-500 mt-2">např. Ostrava - Kréta, Ostrava - Antalya</div>
            </div>
            <div className="bg-white dark:bg-gray-800 p-6 rounded-xl border border-gray-200 dark:border-gray-700 text-center">
              <div className="text-3xl font-bold text-blue-600 mb-2">600 €</div>
              <div className="text-sm text-gray-600 dark:text-gray-400">Lety mimo EU nad 3 500 km</div>
              <div className="text-xs text-gray-500 mt-2">Dálkové lety (vzácné z OSR)</div>
            </div>
          </div>

          <h3>Specifika letiště Ostrava</h3>
          <p>
            Ostrava je menší letiště s omezenou nabídkou letů. To má důsledky:
          </p>
          <ul>
            <li><strong>Omezené náhradní spojení:</strong> Při zrušení letu může být obtížné najít rychlou alternativu přímo z Ostravy.</li>
            <li><strong>Transfer možný:</strong> Aerolinka vás může přepravit autobusem do Prahy, Brna nebo Katowic a odtud zajistit let.</li>
            <li><strong>Plná kompenzace stále platí:</strong> I když vás převezou přes jiné letiště, kompenzace za původní zpoždění/zrušení zůstává.</li>
          </ul>

          <h3>Co dělat při problému na letišti Ostrava?</h3>
          <ol>
            <li><strong>Vyfoťte důkazy:</strong> Snímek obrazovky odletové tabule se zpožděním.</li>
            <li><strong>Požadujte péči:</strong> Po 2 hodinách čekání máte nárok na občerstvení zdarma.</li>
            <li><strong>Zjistěte důvod:</strong> Zeptejte se personálu na příčinu zpoždění.</li>
            <li><strong>Uschovejte dokumenty:</strong> Palubní vstupenky, potvrzení o rezervaci.</li>
          </ol>

          <div className="my-8 p-6 bg-yellow-50 dark:bg-yellow-900/30 rounded-xl border border-yellow-200 dark:border-yellow-700">
            <h4 className="flex items-center gap-2 text-yellow-800 dark:text-yellow-200 font-bold mb-2">
              <AlertCircle className="w-5 h-5" />
              Ostrava → Praha → svět
            </h4>
            <p className="text-yellow-800 dark:text-yellow-200 m-0">
              Pokud máte přestup přes Prahu a zmeškáte ho kvůli zpoždění z Ostravy, <strong>máte nárok na kompenzaci za celou cestu</strong>, pokud byla rezervována jako jedna letenka.
            </p>
          </div>
        </div>

        <div className="bg-gray-50 dark:bg-gray-800 rounded-2xl p-8 text-center">
          <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">
            Zkontrolujte svůj let z Ostravy
          </h2>
          <p className="text-gray-600 dark:text-gray-400 mb-8 max-w-2xl mx-auto">
            Měli jste zpoždění nebo zrušení letu z letiště Ostrava? Zjistěte, zda máte nárok na odškodnění.
          </p>
          <a
            href="https://claimwinger.com?utm_source=blog&utm_medium=footer&utm_campaign=letiste_ostrava_kompenzace"
            className="inline-flex items-center gap-2 bg-blue-600 hover:bg-blue-700 text-white px-8 py-3 rounded-full font-semibold transition-colors"
          >
            Zkontrolovat nárok zdarma
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
            "headline": "Letiště Ostrava (OSR): Kompenzace za zpožděný let",
            "description": "Průvodce kompenzacemi pro lety z letiště Ostrava. Práva cestujících a postupy.",
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