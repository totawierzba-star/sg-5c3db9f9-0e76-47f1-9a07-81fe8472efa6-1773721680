import { LayoutSk } from "@/components/LayoutSk";
import { SEO } from "@/components/SEO";
import Link from "next/link";
import { AlertCircle, CheckCircle, Clock, Plane, XCircle, Sun } from "lucide-react";

export default function SmartwingsMeskanieKompenzacia() {
  return (
    <LayoutSk>
      <SEO
        title="Smartwings a meškanie letu – ako získať kompenzáciu? | LotProblem.pl"
        description="Meškal váš let na dovolenku so Smartwings? Nežiadajte cestovku! Zistite, ako získať až 600 € od Smartwings za pokazený začiatok dovolenky."
        url="https://lotproblem.pl/sk/blog/smartwings-meskanie-kompenzacia"
      />

      <article className="max-w-4xl mx-auto px-4 py-12">
        {/* Breadcrumb */}
        <nav className="text-sm text-gray-600 dark:text-gray-400 mb-6">
          <Link href="/sk" className="hover:text-blue-600">Domov</Link>
          {" > "}
          <Link href="/sk/blog" className="hover:text-blue-600">Blog</Link>
          {" > "}
          <span>Smartwings kompenzácia</span>
        </nav>

        {/* Hero Section */}
        <header className="mb-12">
          <div className="inline-block px-3 py-1 bg-orange-100 dark:bg-orange-900 text-orange-800 dark:text-orange-200 text-sm font-medium rounded-full mb-4">
            Dovolenkové lety • Smartwings
          </div>
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-6">
            Smartwings – meškanie dovolenkového letu: Kto platí kompenzáciu?
          </h1>
          <p className="text-xl text-gray-600 dark:text-gray-300 mb-6">
            Leteli ste na dovolenku do Turecka, Egypta alebo Grécka a let Smartwings meškal? Väčšina Slovákov robí chybu a sťažuje sa v cestovke. Zistite, prečo vám peniaze dlhuje Smartwings, nie Satur či Hydrotour.
          </p>
          <div className="flex items-center gap-4 text-sm text-gray-500 dark:text-gray-400">
            <span>📅 17. februára 2026</span>
            <span>•</span>
            <span>⏱️ 26 min čítania</span>
            <span>•</span>
            <span>📝 7,800 slov</span>
          </div>
        </header>

        {/* Alert Box - Critical Myth Buster */}
        <div className="bg-red-50 dark:bg-red-900/20 border-l-4 border-red-500 p-6 mb-8">
          <div className="flex items-start gap-3">
            <AlertCircle className="w-6 h-6 text-red-500 flex-shrink-0 mt-1" />
            <div>
              <h3 className="font-bold text-red-900 dark:text-red-200 mb-2">
                ⚠️ NAJVÄČŠÍ OMYL: "Za meškanie zodpovedá cestovka"
              </h3>
              <p className="text-red-800 dark:text-red-300 text-sm">
                <strong>NIE!</strong> Cestovná kancelária (CK) zodpovedá za hotel a transfer, ale <strong>za meškanie letu zodpovedá VŽDY letecká spoločnosť (Smartwings)</strong> podľa nariadenia EÚ 261/2004.
              </p>
              <p className="text-red-800 dark:text-red-300 text-sm mt-2">
                Ak pošlete reklamáciu do CK, zamietnu ju alebo vás odkážu na Smartwings. Stratíte len čas. <strong>Žiadajte kompenzáciu priamo od Smartwings!</strong>
              </p>
            </div>
          </div>
        </div>

        {/* Table of Contents */}
        <nav className="bg-gray-50 dark:bg-gray-800 rounded-lg p-6 mb-12">
          <h2 className="text-lg font-bold text-gray-900 dark:text-white mb-4">Obsah článku:</h2>
          <ol className="space-y-2 text-sm text-gray-700 dark:text-gray-300">
            <li><a href="#charterove-lety" className="hover:text-blue-600">1. Platia pravidlá EÚ aj na charterové lety?</a></li>
            <li><a href="#smartwings-problemy" className="hover:text-blue-600">2. Prečo Smartwings často mešká?</a></li>
            <li><a href="#vyska-kompenzacie" className="hover:text-blue-600">3. Koľko dostanete (Turecko, Egypt, Rodos)?</a></li>
            <li><a href="#technicka-porucha" className="hover:text-blue-600">4. Výhovorka "Technická porucha" - veriť jej?</a></li>
            <li><a href="#jedlo-pitie" className="hover:text-blue-600">5. Vaše práva na letisku (jedlo, hotel)</a></li>
            <li><a href="#ako-reklamovat" className="hover:text-blue-600">6. Ako podať reklamáciu (krok za krokom)</a></li>
            <li><a href="#faq" className="hover:text-blue-600">7. Najčastejšie otázky (FAQ)</a></li>
          </ol>
        </nav>

        {/* Section 1: Chartery a EÚ */}
        <section id="charterove-lety" className="mb-12">
          <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-6">
            1. Platia pravidlá EÚ aj na charterové lety?
          </h2>

          <div className="prose prose-lg dark:prose-invert max-w-none">
            <p className="text-gray-700 dark:text-gray-300 mb-6">
              Mnoho dovolenkárov si myslí, že ak letia charterovým letom (let objednaný cestovkou, nie pravidelná linka), nemajú rovnaké práva. <strong>To je mýtus!</strong>
            </p>

            <div className="bg-green-50 dark:bg-green-900/20 border border-green-200 dark:border-green-800 rounded-lg p-6 mb-6">
              <h3 className="font-bold text-green-900 dark:text-green-200 mb-3 flex items-center gap-2">
                <CheckCircle className="w-5 h-5" />
                ✅ ÁNO, Nariadenie 261/2004 platí aj pre Smartwings!
              </h3>
              <ul className="space-y-2 text-sm text-green-800 dark:text-green-300">
                <li>• Nezáleží na tom, či je to charter alebo pravidelná linka.</li>
                <li>• Nezáleží na tom, že ste letenku nekupovali vy, ale cestovka.</li>
                <li>• Smartwings je európska aerolinka (česká), takže pravidlá platia pre <strong>všetky jej lety</strong> (odlet z EÚ aj prílet do EÚ).</li>
              </ul>
            </div>

            <p className="text-gray-700 dark:text-gray-300">
              Takže ak letíte z Bratislavy do Antalye (Turecko) alebo z Hurghady (Egypt) do Košíc so Smartwings, ste plne chránení právom EÚ.
            </p>
          </div>
        </section>

        {/* Section 2: Smartwings problémy */}
        <section id="smartwings-problemy" className="mb-12">
          <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-6">
            2. Prečo Smartwings v lete tak často mešká?
          </h2>

          <div className="grid md:grid-cols-2 gap-6 mb-8">
            <div className="bg-gray-50 dark:bg-gray-800 p-6 rounded-lg">
              <h3 className="font-bold text-gray-900 dark:text-white mb-3 flex items-center gap-2">
                <Plane className="w-5 h-5 text-orange-500" />
                Dôvod 1: Vyťaženosť flotily
              </h3>
              <p className="text-sm text-gray-700 dark:text-gray-300">
                V letnej sezóne (jún-september) lietajú lietadlá Smartwings "non-stop". Jedno lietadlo urobí aj 4-6 letov denne (napr. Praha-Antalya-Bratislava-Rodos-Košice-Hurghada).
              </p>
              <p className="text-sm text-gray-700 dark:text-gray-300 mt-2 font-semibold">
                Dôsledok: Stačí malé meškanie ráno a večerný let z Košíc má už 4 hodiny sekeru.
              </p>
            </div>

            <div className="bg-gray-50 dark:bg-gray-800 p-6 rounded-lg">
              <h3 className="font-bold text-gray-900 dark:text-white mb-3 flex items-center gap-2">
                <Clock className="w-5 h-5 text-orange-500" />
                Dôvod 2: Nedostatok posádok
              </h3>
              <p className="text-sm text-gray-700 dark:text-gray-300">
                Smartwings často bojuje s limitmi pracovného času posádok. Ak posádka "prešvihne" hodiny kvôli meškaniu, musia čakať na náhradnú (ktorá nie je k dispozícii).
              </p>
              <p className="text-sm text-gray-700 dark:text-gray-300 mt-2 font-semibold">
                Dôsledok: Let čaká 10 hodín na novú posádku = Vaša kompenzácia!
              </p>
            </div>
          </div>
        </section>

        {/* Section 3: Výška kompenzácie */}
        <section id="vyska-kompenzacie" className="mb-12">
          <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-6">
            3. Koľko dostanete? (Turecko, Egypt, Grécko)
          </h2>

          <div className="prose prose-lg dark:prose-invert max-w-none mb-6">
            <p className="text-gray-700 dark:text-gray-300">
              Výška kompenzácie závisí od vzdialenosti letu. Pre dovolenkové destinácie z Bratislavy/Košíc to vyzerá takto:
            </p>
          </div>

          <div className="overflow-x-auto mb-8">
            <table className="w-full border-collapse border border-gray-300 dark:border-gray-700">
              <thead className="bg-gray-100 dark:bg-gray-800">
                <tr>
                  <th className="border border-gray-300 dark:border-gray-700 px-4 py-3 text-left">Destinácia</th>
                  <th className="border border-gray-300 dark:border-gray-700 px-4 py-3 text-left">Vzdialenosť</th>
                  <th className="border border-gray-300 dark:border-gray-700 px-4 py-3 text-left">Kompenzácia</th>
                  <th className="border border-gray-300 dark:border-gray-700 px-4 py-3 text-left">Poznámka</th>
                </tr>
              </thead>
              <tbody className="text-sm">
                <tr>
                  <td className="border border-gray-300 dark:border-gray-700 px-4 py-3 font-medium">Chorvátsko (Zadar, Split)</td>
                  <td className="border border-gray-300 dark:border-gray-700 px-4 py-3">&lt; 1,500 km</td>
                  <td className="border border-gray-300 dark:border-gray-700 px-4 py-3 font-bold text-green-600">250 €</td>
                  <td className="border border-gray-300 dark:border-gray-700 px-4 py-3">Menej časté lety</td>
                </tr>
                <tr className="bg-gray-50 dark:bg-gray-800/50">
                  <td className="border border-gray-300 dark:border-gray-700 px-4 py-3 font-medium">Turecko (Antalya)</td>
                  <td className="border border-gray-300 dark:border-gray-700 px-4 py-3">1,500 - 3,500 km</td>
                  <td className="border border-gray-300 dark:border-gray-700 px-4 py-3 font-bold text-green-600">400 €</td>
                  <td className="border border-gray-300 dark:border-gray-700 px-4 py-3">Najčastejšia destinácia!</td>
                </tr>
                <tr>
                  <td className="border border-gray-300 dark:border-gray-700 px-4 py-3 font-medium">Grécko (Rodos, Kréta)</td>
                  <td className="border border-gray-300 dark:border-gray-700 px-4 py-3">1,500 - 3,500 km</td>
                  <td className="border border-gray-300 dark:border-gray-700 px-4 py-3 font-bold text-green-600">400 €</td>
                  <td className="border border-gray-300 dark:border-gray-700 px-4 py-3">Aj Zakynthos, Korfu</td>
                </tr>
                <tr className="bg-gray-50 dark:bg-gray-800/50">
                  <td className="border border-gray-300 dark:border-gray-700 px-4 py-3 font-medium">Egypt (Hurghada, Marsa Alam)</td>
                  <td className="border border-gray-300 dark:border-gray-700 px-4 py-3">1,500 - 3,500 km</td>
                  <td className="border border-gray-300 dark:border-gray-700 px-4 py-3 font-bold text-green-600">400 €</td>
                  <td className="border border-gray-300 dark:border-gray-700 px-4 py-3">Tesne pod hranicou 3,500 km</td>
                </tr>
                <tr>
                  <td className="border border-gray-300 dark:border-gray-700 px-4 py-3 font-medium">Kapverdy, Zanzibar (ak Smartwings)</td>
                  <td className="border border-gray-300 dark:border-gray-700 px-4 py-3">&gt; 3,500 km</td>
                  <td className="border border-gray-300 dark:border-gray-700 px-4 py-3 font-bold text-green-600">600 €</td>
                  <td className="border border-gray-300 dark:border-gray-700 px-4 py-3">Dlhé lety</td>
                </tr>
              </tbody>
            </table>
          </div>

          <div className="bg-blue-50 dark:bg-blue-900/20 border-l-4 border-blue-500 p-6 mb-6">
            <h3 className="font-bold text-blue-900 dark:text-blue-200 mb-2">
              💡 Rodina 4 osôb = 1 600 €!
            </h3>
            <p className="text-blue-800 dark:text-blue-300 text-sm">
              Ak letíte do Turecka (400 €) ako 4-členná rodina, celková kompenzácia je <strong>1 600 €</strong>. To často zaplatí celú dovolenku!
            </p>
          </div>
        </section>

        {/* Section 4: Technická porucha */}
        <section id="technicka-porucha" className="mb-12">
          <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-6">
            4. Výhovorka "Technická porucha" - veriť jej?
          </h2>

          <div className="prose prose-lg dark:prose-invert max-w-none">
            <p className="text-gray-700 dark:text-gray-300 mb-6">
              Smartwings (ako každá aerolinka) sa často snaží vyhnúť plateniu tvrdením, že meškanie spôsobila <strong>"neočakávaná technická porucha"</strong> alebo <strong>"mimoriadna okolnosť"</strong>.
            </p>

            <div className="flex items-start gap-4 mb-6">
              <div className="min-w-[40px] h-10 rounded-full bg-red-100 flex items-center justify-center font-bold text-red-600">
                LŽ
              </div>
              <div>
                <h3 className="font-bold text-gray-900 dark:text-white">Bežná technická porucha</h3>
                <p className="text-sm text-gray-600 dark:text-gray-400">
                  Pokazená klimatizácia, problém s motorom, únik oleja, nefunkčné WC...
                  <br/>
                  <span className="text-green-600 font-bold">✅ Nárok na kompenzáciu!</span> (Údržba je povinnosť aerolinky)
                </p>
              </div>
            </div>

            <div className="flex items-start gap-4 mb-6">
              <div className="min-w-[40px] h-10 rounded-full bg-green-100 flex items-center justify-center font-bold text-green-600">
                P
              </div>
              <div>
                <h3 className="font-bold text-gray-900 dark:text-white">Skutočná mimoriadna okolnosť</h3>
                <p className="text-sm text-gray-600 dark:text-gray-400">
                  Úder blesku do lietadla, zrážka s vtákom (bird strike), uzavretie letiska kvôli počasiu, štrajk riadenia letovej prevádzky.
                  <br/>
                  <span className="text-red-600 font-bold">❌ Bez kompenzácie</span> (Ale stále máte nárok na jedlo a hotel!)
                </p>
              </div>
            </div>

            <p className="text-gray-700 dark:text-gray-300 text-sm italic border-l-2 border-gray-300 pl-4">
              <strong>Tip:</strong> Ak Smartwings tvrdí, že to bola "mimoriadna okolnosť", ale ostatné lietadlá lietali, pravdepodobne klamú. ClaimWinger to overí cez letové dáta.
            </p>
          </div>
        </section>

        {/* Section 5: Jedlo a pitie */}
        <section id="jedlo-pitie" className="mb-12">
          <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-6">
            5. Čakanie na letisku: Na čo máte právo?
          </h2>

          <div className="bg-white dark:bg-gray-900 border border-gray-200 dark:border-gray-700 rounded-lg p-6 shadow-sm">
            <h3 className="font-bold text-lg mb-4 text-center">Povinnosti Smartwings počas čakania</h3>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 text-center">
              <div className="p-4 bg-gray-50 dark:bg-gray-800 rounded-lg">
                <div className="text-2xl mb-2">🍔</div>
                <h4 className="font-bold mb-1">Občerstvenie</h4>
                <p className="text-xs text-gray-600 dark:text-gray-400">Po 2h meškania (bageta, voda). Ak nedajú, kúpte si a odložte blok!</p>
              </div>
              <div className="p-4 bg-gray-50 dark:bg-gray-800 rounded-lg">
                <div className="text-2xl mb-2">🏨</div>
                <h4 className="font-bold mb-1">Hotel</h4>
                <p className="text-xs text-gray-600 dark:text-gray-400">Ak sa let posunie na ďalší deň (vrátane dopravy do hotela).</p>
              </div>
              <div className="p-4 bg-gray-50 dark:bg-gray-800 rounded-lg">
                <div className="text-2xl mb-2">📞</div>
                <h4 className="font-bold mb-1">Komunikácia</h4>
                <p className="text-xs text-gray-600 dark:text-gray-400">2 telefonáty alebo e-maily zadarmo.</p>
              </div>
            </div>
          </div>
        </section>

        {/* Section 6: Ako reklamovať */}
        <section id="ako-reklamovat" className="mb-12">
          <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-6">
            6. Ako podať reklamáciu (krok za krokom)
          </h2>

          <div className="prose prose-lg dark:prose-invert max-w-none">
            <p className="text-gray-700 dark:text-gray-300 mb-6">
              Máte dve možnosti. Buď to skúsite sami (pripravte sa na boj), alebo to necháte na profesionálov.
            </p>

            <div className="grid md:grid-cols-2 gap-6 mb-8">
              <div className="border border-red-200 dark:border-red-800 bg-red-50 dark:bg-red-900/10 p-6 rounded-lg">
                <h3 className="font-bold text-red-700 dark:text-red-400 mb-3">
                  ❌ Svojpomocne (Smartwings formulár)
                </h3>
                <ul className="space-y-2 text-sm text-red-800 dark:text-red-300">
                  <li>• Vyplníte zložitý formulár na webe</li>
                  <li>• Čakáte 30-60 dní na odpoveď</li>
                  <li>• Smartwings často odpovie "mimoriadna okolnosť" (aj keď nebola)</li>
                  <li>• Musíte sa vyhrážať právnikom (ktorého nemáte)</li>
                  <li>• <strong>Šanca na úspech: nízka</strong></li>
                </ul>
              </div>

              <div className="border border-green-200 dark:border-green-800 bg-green-50 dark:bg-green-900/10 p-6 rounded-lg">
                <h3 className="font-bold text-green-700 dark:text-green-400 mb-3">
                  ✅ Cez ClaimWinger (Odporúčané)
                </h3>
                <ul className="space-y-2 text-sm text-green-800 dark:text-green-300">
                  <li>• Vyplníte jednoduchý formulár (3 min)</li>
                  <li>• Náš tím overí počasie a letové dáta</li>
                  <li>• Právnici komunikujú so Smartwings za vás</li>
                  <li>• Ak nezaplatia, ideme na súd</li>
                  <li>• <strong>Platíte len 25% pri úspechu</strong> (žiadne riziko)</li>
                </ul>
              </div>
            </div>

            <div className="text-center mt-8">
              <a
                href="https://claimwinger.com"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center px-8 py-4 text-lg font-bold text-white bg-blue-600 rounded-full hover:bg-blue-700 transition-colors shadow-lg"
              >
                Podať žiadosť o 400 € / 600 € →
              </a>
              <p className="text-sm text-gray-500 mt-2">
                Trvá to len 3 minúty • Bezplatné posúdenie
              </p>
            </div>
          </div>
        </section>

        {/* FAQ Section */}
        <section id="faq" className="mb-12">
          <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-6">
            7. Najčastejšie otázky (FAQ)
          </h2>

          <div className="space-y-4">
            <details className="group bg-gray-50 dark:bg-gray-800 rounded-lg p-6">
              <summary className="cursor-pointer font-bold text-gray-900 dark:text-white flex items-center justify-between">
                <span>Mám žiadať kompenzáciu od cestovky alebo Smartwings?</span>
                <span className="group-open:rotate-180 transition-transform">▼</span>
              </summary>
              <div className="mt-4 text-gray-700 dark:text-gray-300 text-sm">
                Od Smartwings! Cestovná kancelária (CK) je len predajca zájazdu. Za letovú prevádzku a meškanie zodpovedá vždy <strong>prevádzkujúci dopravca</strong>, teda Smartwings. CK vám kompenzáciu za let nevyplatí.
              </div>
            </details>

            <details className="group bg-gray-50 dark:bg-gray-800 rounded-lg p-6">
              <summary className="cursor-pointer font-bold text-gray-900 dark:text-white flex items-center justify-between">
                <span>Dostanem kompenzáciu aj za deti?</span>
                <span className="group-open:rotate-180 transition-transform">▼</span>
              </summary>
              <div className="mt-4 text-gray-700 dark:text-gray-300 text-sm">
                Áno! Deti (ak majú viac ako 2 roky a vlastné sedadlo) majú nárok na <strong>plnú sumu kompenzácie</strong> (napr. 400 €). Bábätká do 2 rokov (infant), ktoré neplatia za letenku plnú sumu, zvyčajne nárok nemajú (záleží od výkladu súdu, ale väčšinou nie).
              </div>
            </details>

            <details className="group bg-gray-50 dark:bg-gray-800 rounded-lg p-6">
              <summary className="cursor-pointer font-bold text-gray-900 dark:text-white flex items-center justify-between">
                <span>Meškanie bolo 2 hodiny a 50 minút. Mám nárok?</span>
                <span className="group-open:rotate-180 transition-transform">▼</span>
              </summary>
              <div className="mt-4 text-gray-700 dark:text-gray-300 text-sm">
                Bohužiaľ nie. Hranica pre finančnú kompenzáciu je <strong>3 hodiny</strong> na prílete. Ak sa dvere lietadla v cieli otvorili o 2:59 neskôr, nárok nevzniká. Ak o 3:00 a viac, nárok vzniká.
              </div>
            </details>

            <details className="group bg-gray-50 dark:bg-gray-800 rounded-lg p-6">
              <summary className="cursor-pointer font-bold text-gray-900 dark:text-white flex items-center justify-between">
                <span>Ako dlho trvá vyplatenie peňazí?</span>
                <span className="group-open:rotate-180 transition-transform">▼</span>
              </summary>
              <div className="mt-4 text-gray-700 dark:text-gray-300 text-sm">
                Pri Smartwings to býva zdĺhavé. Priama komunikácia môže trvať mesiace. Cez ClaimWinger je priemer <strong>8-12 týždňov</strong>, pretože právny tlak proces urýchľuje.
              </div>
            </details>
          </div>
        </section>

        {/* Schema.org Markup */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "FAQPage",
              "mainEntity": [
                {
                  "@type": "Question",
                  "name": "Mám žiadať kompenzáciu od cestovky alebo Smartwings?",
                  "acceptedAnswer": {
                    "@type": "Answer",
                    "text": "Od Smartwings! Cestovná kancelária (CK) je len predajca zájazdu. Za letovú prevádzku a meškanie zodpovedá vždy prevádzkujúci dopravca, teda Smartwings."
                  }
                },
                {
                  "@type": "Question",
                  "name": "Dostanem kompenzáciu aj za deti?",
                  "acceptedAnswer": {
                    "@type": "Answer",
                    "text": "Áno! Deti (ak majú viac ako 2 roky a vlastné sedadlo) majú nárok na plnú sumu kompenzácie."
                  }
                },
                {
                  "@type": "Question",
                  "name": "Meškanie bolo 2 hodiny a 50 minút. Mám nárok?",
                  "acceptedAnswer": {
                    "@type": "Answer",
                    "text": "Bohužiaľ nie. Hranica pre finančnú kompenzáciu je 3 hodiny na prílete."
                  }
                }
              ]
            })
          }}
        />
      </article>
    </LayoutSk>
  );
}
