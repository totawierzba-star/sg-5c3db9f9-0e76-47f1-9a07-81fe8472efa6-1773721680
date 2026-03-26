import { SEO } from "@/components/SEO";
import { LayoutCs } from "@/components/LayoutCs";
import Link from "next/link";
import { Plane, Clock, Euro, CheckCircle2, AlertCircle, Calendar, Users, MapPin } from "lucide-react";

export default function LetisteBrnoZpozdeni() {
  return (
    <LayoutCs>
      <SEO
        title="Letiště Brno-Tuřany (BRQ): Zpožděný let a kompenzace 2026"
        description="Měli jste zpoždění z letiště Brno (BRQ)? Zjistěte, jak získat až 600 € odškodnění. Smartwings, Ryanair a další lety z Brna."
        url="https://problemlot.com/cs/blog/letiste-brno-zpozdeni"
        image="https://problemlot.com/og-image.png"
      />

      <article className="max-w-4xl mx-auto px-4 py-12">
        <nav className="text-sm text-gray-600 dark:text-gray-400 mb-6">
          <Link href="/cs" className="hover:text-blue-600 dark:hover:text-blue-400">Domů</Link>
          {" / "}
          <Link href="/cs/blog" className="hover:text-blue-600 dark:hover:text-blue-400">Blog</Link>
          {" / "}
          <span className="text-gray-900 dark:text-gray-100">Letiště Brno</span>
        </nav>

        <header className="mb-12">
          <div className="flex items-center gap-2 text-blue-600 dark:text-blue-400 mb-4">
            <MapPin className="w-5 h-5" />
            <span className="text-sm font-medium">Průvodce letiště</span>
          </div>
          
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-6">
            Letiště Brno-Tuřany (BRQ): Zpožděný let a práva cestujících
          </h1>

          <div className="flex flex-wrap gap-4 text-sm text-gray-600 dark:text-gray-400">
            <div className="flex items-center gap-2">
              <Calendar className="w-4 h-4" />
              <span>23. února 2026</span>
            </div>
            <div className="flex items-center gap-2">
              <Clock className="w-4 h-4" />
              <span>7 min čtení</span>
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
                Zpoždění na letišti v Brně?
              </h2>
              <p className="text-gray-700 dark:text-gray-300 mb-6">
                Ať už letíte se Smartwings na dovolenou nebo Ryanairem do Londýna, při zpoždění nad 3 hodiny máte nárok na odškodnění.
                <br/>
                <span className="text-sm opacity-75">Provize 30% pouze při úspěchu.</span>
              </p>
              <a
                href="https://claimwinger.com?utm_source=blog&utm_medium=cta&utm_campaign=letiste_brno_zpozdeni"
                className="inline-flex items-center gap-2 bg-blue-600 hover:bg-blue-700 text-white px-8 py-4 rounded-xl font-semibold transition-colors"
              >
                Zkontrolovat let z Brna zdarma
                <CheckCircle2 className="w-5 h-5" />
              </a>
            </div>
          </div>
        </div>

        <div className="prose prose-lg dark:prose-invert max-w-none mb-12">
          <p className="lead text-xl text-gray-700 dark:text-gray-300">
            Letiště Brno-Tuřany (BRQ) je druhé největší letiště v Česku, oblíbené zejména pro charterové lety v letní sezóně. I zde se však stávají zpoždění. Zjistěte, jaká jsou vaše práva.
          </p>

          <h3>Lety z Brna: Kdo nejčastěji létá?</h3>
          <p>
            Z Brna operují především dvě hlavní společnosti:
          </p>
          <ul className="list-none pl-0 space-y-4">
            <li className="flex items-start gap-3">
              <div className="bg-blue-100 dark:bg-blue-900 p-2 rounded-lg">
                <Plane className="w-5 h-5 text-blue-600 dark:text-blue-400" />
              </div>
              <div>
                <strong>Ryanair:</strong> Pravidelná linka do Londýna (Stansted) a sezónní lety do Itálie či Španělska.
              </div>
            </li>
            <li className="flex items-start gap-3">
              <div className="bg-orange-100 dark:bg-orange-900 p-2 rounded-lg">
                <Plane className="w-5 h-5 text-orange-600 dark:text-orange-400" />
              </div>
              <div>
                <strong>Smartwings:</strong> Množství charterových letů do dovolenkových destinací (Řecko, Turecko, Egypt, Bulharsko).
              </div>
            </li>
          </ul>

          <h3>Kompenzace za zpožděný charterový let</h3>
          <p>
            Mnoho cestujících z Brna si myslí, že na <strong>charterové lety</strong> (lety s cestovní kanceláří) se kompenzace nevztahuje. <strong>To je omyl!</strong>
          </p>
          <div className="p-4 bg-green-50 dark:bg-green-900/30 border-l-4 border-green-500 rounded-r-lg">
            <p className="m-0 font-medium text-green-800 dark:text-green-200">
              Nařízení EU 261/2004 platí pro všechny lety z EU, včetně charterů s CK (Čedok, Exim Tours, Fischer atd.). Odpovědnost za kompenzaci nese <strong>letecká společnost</strong> (např. Smartwings), nikoliv cestovní kancelář.
            </p>
          </div>

          <h3>Kolik dostanete za zpoždění z Brna?</h3>
          <p>
            Většina letů z Brna spadá do dvou kategorií:
          </p>
          <ul>
            <li><strong>250 € (cca 6 000 Kč):</strong> Kratší lety do 1 500 km (např. Brno – Londýn, Brno – Bergamo).</li>
            <li><strong>400 € (cca 10 000 Kč):</strong> Delší lety v EU nebo do 3 500 km (např. Brno – Hurghada, Brno – Antalya, Brno – Kanárské ostrovy).</li>
          </ul>
          <p>
            Pro nárok na kompenzaci musí být zpoždění v cíli <strong>3 hodiny a více</strong>.
          </p>

          <h3>Co dělat přímo na letišti v Brně?</h3>
          <ol>
            <li><strong>Vyfoťte tabuli:</strong> Udělejte si fotku odletové tabule se zpožděním.</li>
            <li><strong>Zeptejte se na důvod:</strong> Personál letiště nebo aerolinky vám musí sdělit důvod. Pokud řeknou "provozní důvody", je to pro vás dobré znamení.</li>
            <li><strong>Žádejte občerstvení:</strong> Po 2 hodinách čekání máte nárok na jídlo a pití zdarma.</li>
            <li><strong>Uschovejte dokumenty:</strong> Palubní vstupenky a potvrzení o rezervaci nevyhazujte.</li>
          </ol>

          <h3>Specifika letiště Brno</h3>
          <p>
            Brno-Tuřany je menší letiště, což má své výhody (rychlé odbavení) i nevýhody. Při velkém zpoždění nebo zrušení letu může být obtížnější najít náhradní spojení než například v Praze. Aerolinka má však povinnost vás dopravit do cíle co nejdříve, i kdyby to znamenalo zajistit autobus do Vídně nebo Prahy a let odtud.
          </p>
        </div>

        <div className="bg-gray-50 dark:bg-gray-800 rounded-2xl p-8 text-center">
          <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">
            Zkontrolujte svůj let z Brna
          </h2>
          <p className="text-gray-600 dark:text-gray-400 mb-8 max-w-2xl mx-auto">
            Měli jste zpoždění při odletu z Brna nebo příletu? Zjistěte, zda máte nárok na kompenzaci.
          </p>
          <a
            href="https://claimwinger.com?utm_source=blog&utm_medium=footer&utm_campaign=letiste_brno_zpozdeni"
            className="inline-flex items-center gap-2 bg-blue-600 hover:bg-blue-700 text-white px-8 py-3 rounded-full font-semibold transition-colors"
          >
            Zkontrolovat nárok
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
            "headline": "Letiště Brno-Tuřany (BRQ): Zpožděný let a práva cestujících",
            "description": "Průvodce kompenzacemi pro lety z letiště Brno. Smartwings, Ryanair a chartery.",
            "author": { "@type": "Organization", "name": "LotProblem.pl" },
            "datePublished": "2026-02-23",
            "dateModified": "2026-02-23",
            "image": "https://problemlot.com/og-image.png",
            "publisher": {
              "@type": "Organization",
              "name": "LotProblem.pl",
              "logo": { "@type": "ImageObject", "url": "https://problemlot.com/og-image.png" }
            }
          })
        }}
      />
    </LayoutCs>
  );
}
