import React from 'react';
import Head from 'next/head';

const OdwolanyLotSluzbowyKoszty = () => {
  const articleData = {
    title: "Odwołany lot służbowy — jak odzyskać koszty",
    description: "Odwołany lot służbowy uprawnia do odszkodowania do 600 EUR oraz zwrotu kosztów hotelu i przesiadek. Sprawdź jak krok po kroku odzyskać wszystkie należności.",
    slug: "odwolany-lot-sluzbowy-koszty-hotel-przesiadki",
    cluster: "K1",
    keyword_primary: "odwołany lot służbowy koszty",
    keywords_secondary: "zwrot kosztów hotelu odwołany lot, odszkodowanie przesiadki służbowe, EC 261 odwołanie delegacja",
    reading_time: "9 min",
    internal_links: ["Overbooking na locie służbowym — prawa pracownika i pracodawcy", "EC 261/2004 a loty służbowe — co obejmuje rozporządzenie"],
    cta_url: "https://claimwinger.com/pl/odwolany-lot"
  };

  const structuredData = {
    "@context": "https://schema.org",
    "@type": "Article",
    "headline": articleData.title,
    "description": articleData.description,
    "author": {"@type": "Organization", "name": "bizneslot.info"},
    "publisher": {"@type": "Organization", "name": "bizneslot.info"},
    "datePublished": "2025-03-20",
    "inLanguage": "pl-PL"
  };

  const faqData = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": [
      {
        "@type": "Question",
        "name": "Czy przysługuje mi hotel za odwołany lot służbowy?",
        "acceptedAnswer": {"@type": "Answer", "text": "Tak, za odwołany lot służbowy przysługuje hotel jeśli oczekiwanie na kolejny lot wymaga noclegu. Linia lotnicza musi zapewnić zakwaterowanie i transport z lotniska do hotelu."}
      },
      {
        "@type": "Question",
        "name": "Ile wynosi odszkodowanie za odwołany lot służbowy?",
        "acceptedAnswer": {"@type": "Answer", "text": "Odszkodowanie za odwołany lot służbowy wynosi do 600 EUR: 250 EUR do 1500 km, 400 EUR do 3500 km, 600 EUR powyżej 3500 km dystansu."}
      },
      {
        "@type": "Question",
        "name": "Kto płaci za hotel przy odwołanym locie służbowym?",
        "acceptedAnswer": {"@type": "Answer", "text": "Za hotel przy odwołanym locie służbowym płaci linia lotnicza, która odwołała lot. Pasażer ma prawo do bezpłatnego zakwaterowania jeśli oczekiwanie wymaga noclegu."}
      },
      {
        "@type": "Question",
        "name": "Jak udokumentować koszty po odwołaniu lotu służbowego?",
        "acceptedAnswer": {"@type": "Answer", "text": "Koszty po odwołaniu lotu służbowego dokumentujesz rachunkami za hotel, posiłki, transport oraz komunikatem od linii lotniczej o odwołaniu lotu z przyczynami."}
      },
      {
        "@type": "Question",
        "name": "Czy pracodawca może odmówić zwrotu kosztów za odwołany lot?",
        "acceptedAnswer": {"@type": "Answer", "text": "Nie, pracodawca nie może odmówić zwrotu kosztów za odwołany lot służbowy jeśli są one niezbędne do realizacji delegacji i odpowiednio udokumentowane."}
      }
    ]
  };

  return (
    <>
      <Head>
        <title>{articleData.title}</title>
        <meta name="description" content={articleData.description} />
        <meta name="keywords" content={`${articleData.keyword_primary}, ${articleData.keywords_secondary}`} />
        <script 
          type="application/ld+json" 
          dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
        />
        <script 
          type="application/ld+json" 
          dangerouslySetInnerHTML={{ __html: JSON.stringify(faqData) }}
        />
      </Head>

      <article className="article">
        <header className="article-header">
          <div className="article-meta">
            <span className="category">Prawa pasażera w podróży służbowej</span>
            <span className="reading-time">{articleData.reading_time} czytania</span>
          </div>
          <h1>{articleData.title}</h1>
          <p className="lead">
            Odwołany lot służbowy to koszmar dla każdego podróżnika biznesowego. 
            Masz jednak pełne prawo do odszkodowania do 600 EUR oraz zwrotu wszystkich kosztów związanych z przesiadką. 
            W tym przewodniku krok po kroku wyjaśnimy jak odzyskać hotel, wyżywienie i transport.
          </p>
          <div className="article-highlights">
            <div className="highlight-item">✓ Odszkodowanie do 600 EUR + zwrot wszystkich kosztów</div>
            <div className="highlight-item">✓ Hotel i posiłki zapewnia linia lotnicza</div>
            <div className="highlight-item">✓ Termin roszczeń: 2 lata od daty lotu</div>
          </div>
        </header>

        <div className="key-takeaways">
          <h3>Najważniejsze informacje</h3>
          <ul>
            <li>Odwołany lot służbowy uprawnia do odszkodowania do 600 EUR zgodnie z EC 261/2004</li>
            <li>Linia lotnicza musi zapewnić hotel, posiłki i transport w razie noclegu</li>
            <li>Koszty przesiadek i alternatywnego transportu również podlegają zwrotowi</li>
            <li>Pracodawca musi zwrócić koszty delegacji poniesione przez pracownika</li>
          </ul>
        </div>

        <section className="article-section">
          <h2>Odwołany lot służbowy — podstawowe prawa pasażera</h2>
          <p>
            Odwołany lot służbowy to sytuacja gdy linia lotnicza uniemożliwia realizację zaplanowanego połączenia lotniczego. 
            Zgodnie z rozporządzeniem WE 261/2004 pasażerowie mają prawo do pomocy natychmiastowej oraz odszkodowania finansowego. 
            Prawa te przysługują niezależnie od celu podróży, ceny biletu czy tego kto finansował lot. 
            W podróży służbowej pracownik zachowuje wszystkie prawa pasażera, a dodatkowo może rozliczyć koszty z pracodawcą w ramach delegacji.
          </p>
          
          <div className="callout callout--info">
            <span className="callout__icon">ℹ</span>
            <div className="callout__content">
              <strong>Ważne:</strong> Prawa pasażera przy odwołanym locie są identyczne jak przy opóźnieniu powyżej 5 godzin lub odmowie przyjęcia na pokład.
            </div>
          </div>
        </section>

        <section className="article-section">
          <h2>Pomoc natychmiastowa — co musi zapewnić linia lotnicza</h2>
          <p>
            Linia lotnicza odwołująca lot ma obowiązek zapewnić pasażerom pomoc natychmiastową bez żadnych dodatkowych opłat. 
            Obejmuje to posiłki i napoje odpowiednie do czasu oczekiwania, zakwaterowanie w hotelu gdy konieczny jest nocleg, 
            transport z lotniska do hotelu i z powrotem oraz możliwość wysłania dwóch wiadomości fax lub e-mail. 
            Pomoc przysługuje niezależnie od przyczyny odwołania lotu, nawet w przypadku nadzwyczajnych okoliczności.
          </p>
          
          <div className="callout callout--warning">
            <span className="callout__icon">⚠</span>
            <div className="callout__content">
              <strong>Uwaga:</strong> Jeśli linia lotnicza nie zapewnia pomocy, zachowaj rachunki za posiłki i hotel — masz prawo do ich zwrotu.
            </div>
          </div>
        </section>

        <section className="article-section">
          <h2>Odszkodowanie finansowe — tabela kwot</h2>
          
          <div className="table-wrapper">
            <table className="comparison-table">
              <thead>
                <tr>
                  <th>Dystans lotu</th>
                  <th>Kwota odszkodowania</th>
                  <th>Przykładowe trasy biznesowe</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>Do 1500 km</td>
                  <td>250 EUR</td>
                  <td>Warszawa-Berlin, Praga-Wiedeń</td>
                </tr>
                <tr>
                  <td>1501-3500 km</td>
                  <td>400 EUR</td>
                  <td>Warszawa-Londyn, Mediolan-Paryż</td>
                </tr>
                <tr>
                  <td>Powyżej 3500 km</td>
                  <td>600 EUR</td>
                  <td>Warszawa-Nowy Jork, Frankfurt-Dubaj</td>
                </tr>
              </tbody>
            </table>
          </div>
          
          <div className="stat-card">
            <span className="stat-card__number">600 EUR</span>
            <span className="stat-card__label">Maksymalne odszkodowanie</span>
            <span className="stat-card__source">Źródło: Rozporządzenie WE 261/2004</span>
          </div>
        </section>

        <section className="article-section">
          <h2>Koszty hotelu — kiedy przysługuje i jak go uzyskać</h2>
          <p>
            Hotel przysługuje gdy oczekiwanie na alternatywny lot wymaga noclegu lub gdy lot został odwołany bez możliwości 
            natychmiastowej przesiadki. Linia lotnicza musi zapewnić zakwaterowanie w hotelu o standardzie co najmniej 3 gwiazdek 
            oraz transport z lotniska do hotelu i z powrotem. Jeśli linia nie zapewnia hotelu, pasażer ma prawo zorganizować 
            zakwaterowanie we własnym zakresie i dochodzić zwrotu kosztów. Koszty hotelu obejmują nocleg oraz śniadanie.
          </p>
        </section>

        <section className="article-section">
          <h2>Zwrot kosztów przesiadek i alternatywnego transportu</h2>
          <p>
            W przypadku odwołanego lotu pasażer ma prawo wyboru między pełnym zwrotem kosztów biletu a przewozem do miejsca 
            docelowego najwcześniejszym możliwym połączeniem. Jeśli linia lotnicza nie może zapewnić alternatywnego lotu, 
            pasażer może zorganizować transport we własnym zakresie (inna linia, pociąg, autobus, taksówka) i dochodzić zwrotu 
            różnicy w cenie lub pełnych kosztów transportu. Koszty te muszą być rozsądne i konieczne do dotarcia do celu podróży.
          </p>
        </section>

        <section className="article-section">
          <h2>Procedura odzyskiwania kosztów krok po kroku</h2>
          
          <ol className="steps-list">
            <li className="step">
              <span className="step__number">1</span>
              <div className="step__content">
                <strong>Zdobądź potwierdzenie odwołania</strong>
                <p>Natychmiast poproś o pisemne potwierdzenie odwołania lotu z podaniem przyczyny. Zrób zdjęcie tablicy odlotów 
                i zachowaj wszystkie komunikaty od linii lotniczej.</p>
              </div>
            </li>
            <li className="step">
              <span className="step__number">2</span>
              <div className="step__content">
                <strong>Dokumentuj wszystkie koszty</strong>
                <p>Zbieraj rachunki za hotel, posiłki, transport i inne niezbędne wydatki. Upewnij się że rachunki zawierają 
                dane firmy, datę i szczegółowy opis usług.</p>
              </div>
            </li>
            <li className="step">
              <span className="step__number">3</span>
              <div className="step__content">
                <strong>Złóż reklamację do linii lotniczej</strong>
                <p>W ciągu 2 lat od daty lotu złóż oficjalną reklamację zawierającą żądanie odszkodowania i zwrotu kosztów. 
                Dołącz kopię biletu, potwierdzenie odwołania i wszystkie rachunki.</p>
              </div>
            </li>
            <li className="step">
              <span className="step__number">4</span>
              <div className="step__content">
                <strong>Rozlicz koszty z pracodawcą</strong>
                <p>Przedstaw pracodawcy dokumentację kosztów delegacji wraz z potwierdzeniem odwołania lotu. 
                Koszty powinny być zwrócone zgodnie z polityką podróży służbowych firmy.</p>
              </div>
            </li>
          </ol>
        </section>

        <section className="article-section">
          <h2>Wyjątki od odszkodowania — nadzwyczajne okoliczności</h2>
          <p>
            Linia lotnicza może odmówić wypłaty odszkodowania finansowego tylko w przypadku nadzwyczajnych okoliczności których 
            nie można było uniknąć. Do takich sytuacji należą: niestabilność sytuacji politycznej, warunki meteorologiczne 
            uniemożliwiające bezpieczny lot, ryzyko bezpieczeństwa, nagłe strajki personelu lotniskowego czy ukryte wady 
            konstrukcyjne samolotu. Ważne: nawet w nadzwyczajnych okolicznościach linia lotnicza wciąż musi zapewnić 
            pomoc natychmiastową (hotel, posiłki, transport).
          </p>
        </section>

        <section className="article-section">
          <h2>Pracodawca a koszty odwołanego lotu służbowego</h2>
          <p>
            Pracodawca ma obowiązek zwrócić wszystkie koszty delegacji poniesione przez pracownika w wyniku odwołania lotu. 
            Obejmuje to koszty hotelu, wyżywienia, transportu oraz ewentualne koszty zmiany biletów na alternatywne połączenia. 
            Koszty te powinny być udokumentowane rachunkami i fakturami. Pracodawca nie może potrącać sobie odszkodowania 
            od linii lotniczej — należy ono wyłącznie pracownikowi jako osoba fizyczna która poniosła niedogodności.
          </p>
        </section>

        <section className="article-section">
          <h2>Ubezpieczenie podróży służbowych a odwołane loty</h2>
          <p>
            Dodatkowe ubezpieczenie podróży służbowych może pokryć koszty które nie zostały zwrócone przez linię lotniczą, 
            takie jak straty biznesowe z powodu odwołanego spotkania czy koszty przedłużenia delegacji. 
            Polisy ubezpieczeniowe często obejmują również assistance w rezerwacji alternatywnego transportu 
            i zakwaterowania. Warto sprawdzić czy polita firmy obejmuje ryzyko odwołania lotu i jakie są procedury zgłaszania szkód.
          </p>
        </section>

        <section className="article-section">
          <h2>Umowy z agencjami travel a ochrona przy odwołanych lotach</h2>
          <p>
            Jeśli bilety służbowe są rezerwowane przez agencję travel, warto sprawdzić czy umowa obejmuje dodatkową ochronę 
            przy odwołanych lotach. Niektóre agencje oferują gwarancje przewozu, assistance 24/7 oraz pomoc w rezerwacji 
            alternatywnych połączeń. Agencja może również pośredniczyć w procesie reklamacji i dochodzenia odszkodowania. 
            Koszty usług agencji nie mogą być przerzucane na pracownika — ponosi je pracodawca.
          </p>
        </section>

        <section className="faq-section" id="faq">
          <h2>Najczęstsze pytania</h2>

          <div className="faq-item" itemScope itemType="https://schema.org/Question">
            <h3 itemProp="name">Czy przysługuje mi hotel za odwołany lot służbowy?</h3>
            <div className="faq-answer" itemScope itemType="https://schema.org/Answer">
              <div itemProp="text">
                <p>
                  Tak, za odwołany lot służbowy przysługuje hotel jeśli oczekiwanie na kolejny lot wymaga noclegu. 
                  Linia lotnicza musi zapewnić zakwaterowanie i transport z lotniska do hotelu bez dodatkowych opłat.
                </p>
              </div>
            </div>
          </div>

          <div className="faq-item" itemScope itemType="https://schema.org/Question">
            <h3 itemProp="name">Ile wynosi odszkodowanie za odwołany lot służbowy?</h3>
            <div className="faq-answer" itemScope itemType="https://schema.org/Answer">
              <div itemProp="text">
                <p>
                  Odszkodowanie za odwołany lot służbowy wynosi do 600 EUR: 250 EUR do 1500 km, 400 EUR do 3500 km, 
                  600 EUR powyżej 3500 km dystansu. Kwota jest niezależna od ceny biletu i przyczyny odwołania.
                </p>
              </div>
            </div>
          </div>

          <div className="faq-item" itemScope itemType="https://schema.org/Question">
            <h3 itemProp="name">Kto płaci za hotel przy odwołanym locie służbowym?</h3>
            <div className="faq-answer" itemScope itemType="https://schema.org/Answer">
              <div itemProp="text">
                <p>
                  Za hotel przy odwołanym locie służbowym płaci linia lotnicza, która odwołała lot. 
                  Pasażer ma prawo do bezpłatnego zakwaterowania jeśli oczekiwanie wymaga noclegu lub gdy nie ma alternatywnego połączenia.
                </p>
              </div>
            </div>
          </div>

          <div className="faq-item" itemScope itemType="https://schema.org/Question">
            <h3 itemProp="name">Jak udokumentować koszty po odwołaniu lotu służbowego?</h3>
            <div className="faq-answer" itemScope itemType="https://schema.org/Answer">
              <div itemProp="text">
                <p>
                  Koszty po odwołaniu lotu służbowego dokumentujesz rachunkami za hotel, posiłki, transport oraz 
                  komunikatem od linii lotniczej o odwołaniu lotu z przyczynami. Rachunki muszą zawierać datę i szczegółowy opis usług.
                </p>
              </div>
            </div>
          </div>

          <div className="faq-item" itemScope itemType="https://schema.org/Question">
            <h3 itemProp="name">Czy pracodawca może odmówić zwrotu kosztów za odwołany lot?</h3>
            <div className="faq-answer" itemScope itemType="https://schema.org/Answer">
              <div itemProp="text">
                <p>
                  Nie, pracodawca nie może odmówić zwrotu kosztów za odwołany lot służbowy jeśli są one niezbędne 
                  do realizacji delegacji i odpowiednio udokumentowane. Koszty delegacji są obowiązkiem pracodawcy.
                </p>
              </div>
            </div>
          </div>
        </section>

        <div className="article-cta">
          <h3>Twój lot służbowy został odwołany?</h3>
          <p>
            Sprawdź bezpłatnie, czy należy Ci się odszkodowanie do 600 EUR. ClaimWinger działa na zasadzie no win, no fee — 
            płacisz tylko gdy wygrasz sprawę o odszkodowanie.
          </p>
          <a href="https://claimwinger.com/pl/odwolany-lot" className="cta-button">
            Sprawdź odszkodowanie za odwołany lot →
          </a>
          <a href="https://claimwinger.com/pl/opozniony-lot" className="cta-button cta-button--secondary">
            Sprawdź odszkodowanie za opóźniony lot →
          </a>
        </div>
      </article>
    </>
  );
};

export default OdwolanyLotSluzbowyKoszty;
