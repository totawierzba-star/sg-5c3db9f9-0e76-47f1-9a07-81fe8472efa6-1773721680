import React from 'react';
import Head from 'next/head';

const OverbookingLotSluzbowyPracy = () => {
  const articleData = {
    title: "Overbooking lot służbowy — prawa pracownika i pracodawcy",
    description: "Overbooking na locie służbowym uprawnia do odszkodowania do 600 EUR. Sprawdź komu przysługuje rekompensata i jak ją odzyskać krok po kroku.",
    slug: "overbooking-lot-sluzbowy-prawa",
    cluster: "K1",
    keyword_primary: "overbooking lot służbowy",
    keywords_secondary: "odmowa przyjęcia na pokład delegacja, bumping lot biznesowy, EC 261 overbooking firmowy",
    reading_time: "8 min",
    internal_links: ["Bilet służbowy kupiony przez firmę — kto składa reklamację", "Lot służbowy odwołany w ostatniej chwili — co zrobić"],
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
        "name": "Czy overbooking na locie służbowym uprawnia do odszkodowania?",
        "acceptedAnswer": {"@type": "Answer", "text": "Tak, overbooking na locie służbowym uprawnia do odszkodowania do 600 EUR zgodnie z rozporządzeniem EC 261/2004, niezależnie od tego kto kupił bilet."}
      },
      {
        "@type": "Question",
        "name": "Kto składa reklamację za overbooking — pracownik czy pracodawca?",
        "acceptedAnswer": {"@type": "Answer", "text": "Reklamację za overbooking składa pracownik jako pasażer, ponieważ odszkodowanie przysługuje osobie która nie została wpuszczona na pokład samolotu."}
      },
      {
        "@type": "Question",
        "name": "Ile wynosi odszkodowanie za overbooking na locie służbowym?",
        "acceptedAnswer": {"@type": "Answer", "text": "Odszkodowanie za overbooking wynosi do 600 EUR w zależności od dystansu: 250 EUR do 1500 km, 400 EUR do 3500 km, 600 EUR powyżej 3500 km."}
      },
      {
        "@type": "Question",
        "name": "Czy pracodawca może zająć odszkodowanie za overbooking?",
        "acceptedAnswer": {"@type": "Answer", "text": "Nie, pracodawca nie może zająć odszkodowania za overbooking, ponieważ należy ono pracownikowi jako osoba fizyczna która poniosła niedogodności podróży."}
      },
      {
        "@type": "Question",
        "name": "Jakie dokumenty potrzebne są do reklamacji overbookingu?",
        "acceptedAnswer": {"@type": "Answer", "text": "Do reklamacji overbookingu potrzebne są: karta pokładowa z informacją o odmowie przyjęcia, dokument tożsamości, bilet lotniczy oraz ewentualne potwierdzenia kosztów."}
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
            Overbooking na locie służbowym to częsty problem który może zniszczyć plany biznesowe. 
            Pracownik ma prawo do odszkodowania do 600 EUR, ale kto je otrzyma i jak je odzyskać? 
            W tym artykule wyjaśnimy prawa pracownika i pracodawcy w przypadku odmowy przyjęcia na pokład.
          </p>
          <div className="article-highlights">
            <div className="highlight-item">✓ Odszkodowanie do 600 EUR niezależnie od tego kto kupił bilet</div>
            <div className="highlight-item">✓ Reklamację składa pracownik jako pasażer</div>
            <div className="highlight-item">✓ Termin reklamacji wynosi 2 lata od daty lotu</div>
          </div>
        </header>

        <div className="key-takeaways">
          <h3>Najważniejsze informacje</h3>
          <ul>
            <li>Overbooking lot służbowy uprawnia do odszkodowania do 600 EUR zgodnie z EC 261/2004</li>
            <li>Odszkodowanie należy się pracownikowi niezależnie od formy zatrudnienia</li>
            <li>Pracodawca nie może zająć odszkodowania za overbooking</li>
            <li>Termin składania reklamacji wynosi 2 lata od daty lotu</li>
          </ul>
        </div>

        <section className="article-section">
          <h2>Overbooking lot służbowy to co dokładnie?</h2>
          <p>
            Overbooking lot służbowy to sytuacja gdy linia lotnicza sprzedaje więcej biletów niż dostępnych miejsc na samolocie, 
            w wyniku czego pracownik podróżujący służbowo nie zostaje wpuszczony na pokład mimo posiadania ważnego biletu i rezerwacji. 
            Zgodnie z rozporządzeniem WE 261/2004 pasażerowie mają prawo do odszkodowania finansowego w takiej sytuacji, 
            niezależnie od celu podróży czy tego kto opłacił bilet. Overbooking stanowi naruszenie umowy przewozu i 
            uprawnia do rekompensaty finansowej oraz pomocy ze strony linii lotniczej.
          </p>
          
          <div className="callout callout--info">
            <span className="callout__icon">ℹ</span>
            <div className="callout__content">
              <strong>Ważne:</strong> Overbooking dotyczy sytuacji gdy pasażer nie zostaje wpuszczony na pokład samolotu, 
              a nie gdy lot jest odwołany lub opóźniony.
            </div>
          </div>
        </section>

        <section className="article-section">
          <h2>Podstawa prawna odszkodowania za overbooking</h2>
          <p>
            Podstawą prawną odszkodowania za overbooking na locie służbowym jest rozporządzenie Parlamentu Europejskiego i Rady 
            (WE) nr 261/2004 z dnia 11 lutego 2004 roku ustanawiające wspólne zasady odszkodowania i pomocy dla pasażerów 
            w przypadku odmowy przyjęcia na pokład albo odwołania lub dużego opóźnienia lotów. Rozporządzenie ma zastosowanie 
            do wszystkich lotów wylatujących z lotnisk Unii Europejskiej oraz do lotów przylatujących do UE z linii lotniczych z UE. 
            Odszkodowanie przysługuje niezależnie od obywatelstwa pasażera i celu podróży, w tym podróży służbowych finansowanych przez pracodawcę.
          </p>
          
          <div className="callout callout--warning">
            <span className="callout__icon">⚠</span>
            <div className="callout__content">
              <strong>Uwaga:</strong> Rozporządzenie EC 261/2004 nie ma zastosowania do lotów spoza UE wykonywanych przez linie lotnicze spoza Unii Europejskiej.
            </div>
          </div>
        </section>

        <section className="article-section">
          <h2>Komu przysługuje odszkodowanie — pracownik czy pracodawca?</h2>
          <p>
            Odszkodowanie za overbooking na locie służbowym przysługuje wyłącznie pracownikowi jako pasażerowi który 
            poniósł niedogodności związane z odmową przyjęcia na pokład. Pracodawca, mimo że finansował podróż służbową, 
            nie ma prawa do otrzymania tego odszkodowania. Zgodnie z prawem UE, odszkodowanie z tytułu naruszenia umowy przewozu 
            należy się osobie fizycznej która była pasażerem i której prawa zostały naruszone. Pracownik zachowuje pełne prawo 
            do odszkodowania niezależnie od formy zatrudnienia, rodzaju umowy o pracę czy sposobu rozliczania kosztów podróży służbowych.
          </p>
        </section>

        <section className="article-section">
          <h2>Procedura odzyskiwania odszkodowania krok po kroku</h2>
          
          <ol className="steps-list">
            <li className="step">
              <span className="step__number">1</span>
              <div className="step__content">
                <strong>Zdobądź dokumentację</strong>
                <p>Natychmiast po odmowie przyjęcia na pokład poproś o pisemne potwierdzenie sytuacji z podaniem przyczyny oraz 
                informacje o prawach pasażera. Zrób zdjęcie karty pokładowej z adnotacją "denied boarding".</p>
              </div>
            </li>
            <li className="step">
              <span className="step__number">2</span>
              <div className="step__content">
                <strong>Zgłoś roszczenie do linii lotniczej</strong>
                <p>W ciągu 2 lat od daty lotu złóż oficjalną reklamację do linii lotniczej. Dołącz kopię biletu, karty pokładowej, 
                dokumentu tożsamości oraz potwierdzenie odmowy przyjęcia na pokład.</p>
              </div>
            </li>
            <li className="step">
              <span className="step__number">3</span>
              <div className="step__content">
                <strong>Czekaj na odpowiedź linii lotniczej</strong>
                <p>Linia lotnicza ma 6 tygodni na odpowiedź na reklamację. Jeśli odmówi wypłaty lub nie odpowie, 
                możesz skierować sprawę do organu nadzoru lotniczego lub sądu.</p>
              </div>
            </li>
            <li className="step">
              <span className="step__number">4</span>
              <div className="step__content">
                <strong>Skorzystaj z pomocy prawnej</strong>
                <p>Jeśli linia lotnicza odmawia wypłaty, możesz skorzystać z firm specjalizujących się w odzyskiwaniu 
                odszkodowań lotniczych, które działają na zasadzie no win no fee.</p>
              </div>
            </li>
          </ol>
        </section>

        <section className="article-section">
          <h2>Wysokość odszkodowania — tabela kwot</h2>
          
          <div className="table-wrapper">
            <table className="comparison-table">
              <thead>
                <tr>
                  <th>Dystans lotu</th>
                  <th>Kwota odszkodowania</th>
                  <th>Przykładowe trasy</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>Do 1500 km</td>
                  <td>250 EUR</td>
                  <td>Warszawa-Berlin, Kraków-Paryż</td>
                </tr>
                <tr>
                  <td>1501-3500 km</td>
                  <td>400 EUR</td>
                  <td>Warszawa-Londyn, Wrocław-Madryt</td>
                </tr>
                <tr>
                  <td>Powyżej 3500 km</td>
                  <td>600 EUR</td>
                  <td>Warszawa-Nowy Jork, Kraków-Dubaj</td>
                </tr>
              </tbody>
            </table>
          </div>
          
          <div className="stat-card">
            <span className="stat-card__number">600 EUR</span>
            <span className="stat-card__label">Maksymalne odszkodowanie</span>
            <span className="stat-card__source">Źródło: Rozporządzenie EC 261/2004</span>
          </div>
        </section>

        <section className="article-section">
          <h2>Wyjątki i nadzwyczajne okoliczności</h2>
          <p>
            Linia lotnicza może odmówić wypłaty odszkodowania tylko w przypadku nadzwyczajnych okoliczności których 
            nie można było uniknąć nawet przy zachowaniu wszelkich racjonalnych środków ostrożności. Do takich okoliczności 
            zalicza się: niestabilność sytuacji politycznej, warunki meteorologiczne niekompatybilne z bezpieczeństwem lotu, 
            ryzyko bezpieczeństwa, nagłe strike pracowników lotniska czy ukryte wady konstrukcyjne samolotu ujawnione 
            przez producenta. Przeciążenie siły roboczej linii lotniczej czy problemy techniczne które linia mogła wykryć 
            podczas regularnych przeglądów nie są uznawane za nadzwyczajne okoliczności.
          </p>
        </section>

        <section className="article-section">
          <h2>Obowiązki linii lotniczej przy overbookingu</h2>
          <p>
            W przypadku overbookingu linia lotnicza ma obowiązek najpierw prosić o ochotników którzy dobrowolnie zrezygnują 
            z lotu w zamian za korzyści oferowane przez linię. Dopiero gdy nie znajdzie się wystarczająca liczba ochotników, 
            linia może odmówić przyjęcia na pokład pozostałym pasażerom. Linia musi zapewnić pasażerom whom odmówiono 
            przyjęcia na pokład: posiłek i napoje odpowiednie do czasu oczekiwania, zakwaterowanie w hotelu gdy konieczny 
            jest nocleg, transport między lotniskiem a hotelem oraz możliwość wysłania dwóch wiadomości fax lub e-mail. 
            Pasażer ma prawo wyboru między zwrotem kosztów biletu a przewozem do miejsca docelowego najwcześniejszym możliwym połączeniem.
          </p>
        </section>

        <section className="article-section">
          <h2>Pracodawca a koszty overbookingu</h2>
          <p>
            Pracodawca nie może zająć odszkodowania za overbooking, ale może rozliczyć dodatkowe koszty poniesione przez 
            pracownika w ramach delegacji. Jeśli pracownik musiał czekać na następny lot i ponosił koszty wyżywienia, 
            noclegu czy transportu, pracodawca powinien zwrócić te wydatki zgodnie z polityką podróży służbowych firmy. 
            Koszty te należy udokumentować rachunkami i fakturami. Pracodawca może również rozważyć ubezpieczenie podróży 
            służbowych które pokrywa takie sytuacje.
          </p>
        </section>

        <section className="article-section">
          <h2>Overbooking a umowy z agencjami travel</h2>
          <p>
            Jeśli bilety służbowe są rezerwowane przez agencję travel, w razie overbookingu pracownik nadal ma bezpośrednie 
            prawo do odszkodowania od linii lotniczej. Agencja może pomóc w procedurze reklamacji, ale odszkodowanie zawsze 
            należy się pracownikowi jako pasażerowi. Warto sprawdzić czy umowa z agencją travel obejmuje assistance w takich 
            sytuacjach. Niektóre agencje oferują dodatkowe ubezpieczenie lub gwarancje przewozu które minimalizują ryzyko overbookingu.
          </p>
        </section>

        <section className="faq-section" id="faq">
          <h2>Najczęstsze pytania</h2>

          <div className="faq-item" itemScope itemType="https://schema.org/Question">
            <h3 itemProp="name">Czy overbooking na locie służbowym uprawnia do odszkodowania?</h3>
            <div className="faq-answer" itemScope itemType="https://schema.org/Answer">
              <div itemProp="text">
                <p>
                  Tak, overbooking na locie służbowym uprawnia do odszkodowania do 600 EUR zgodnie z rozporządzeniem EC 261/2004, 
                  niezależnie od tego kto kupił bilet. Odszkodowanie należy się pracownikowi jako pasażerowi który poniósł niedogodności.
                </p>
              </div>
            </div>
          </div>

          <div className="faq-item" itemScope itemType="https://schema.org/Question">
            <h3 itemProp="name">Kto składa reklamację za overbooking — pracownik czy pracodawca?</h3>
            <div className="faq-answer" itemScope itemType="https://schema.org/Answer">
              <div itemProp="text">
                <p>
                  Reklamację za overbooking składa pracownik jako pasażer, ponieważ odszkodowanie przysługuje osobie która 
                  nie została wpuszczona na pokład samolotu. Pracodawca może jedynie pomóc w procedurze lub zwrócić dodatkowe koszty delegacji.
                </p>
              </div>
            </div>
          </div>

          <div className="faq-item" itemScope itemType="https://schema.org/Question">
            <h3 itemProp="name">Ile wynosi odszkodowanie za overbooking na locie służbowym?</h3>
            <div className="faq-answer" itemScope itemType="https://schema.org/Answer">
              <div itemProp="text">
                <p>
                  Odszkodowanie za overbooking wynosi do 600 EUR w zależności od dystansu: 250 EUR do 1500 km, 400 EUR do 3500 km, 
                  600 EUR powyżej 3500 km. Kwoty te są stałe i nie zależą od ceny biletu ani strat poniesionych przez pracownika.
                </p>
              </div>
            </div>
          </div>

          <div className="faq-item" itemScope itemType="https://schema.org/Question">
            <h3 itemProp="name">Czy pracodawca może zająć odszkodowanie za overbooking?</h3>
            <div className="faq-answer" itemScope itemType="https://schema.org/Answer">
              <div itemProp="text">
                <p>
                  Nie, pracodawca nie może zająć odszkodowania za overbooking, ponieważ należy ono pracownikowi jako osoba fizyczna 
                  która poniosła niedogodności podróży. Odszkodowanie jest osobistym prawem pasażera niezależnym od stosunku pracy.
                </p>
              </div>
            </div>
          </div>

          <div className="faq-item" itemScope itemType="https://schema.org/Question">
            <h3 itemProp="name">Jakie dokumenty potrzebne są do reklamacji overbookingu?</h3>
            <div className="faq-answer" itemScope itemType="https://schema.org/Answer">
              <div itemProp="text">
                <p>
                  Do reklamacji overbookingu potrzebne są: karta pokładowa z informacją o odmowie przyjęcia na pokład, 
                  dokument tożsamości, bilet lotniczy oraz ewentualne potwierdzenia dodatkowych kosztów poniesionych w wyniku opóźnienia podróży.
                </p>
              </div>
            </div>
          </div>
        </section>

        <div className="article-cta">
          <h3>Twój lot służbowy był opóźniony lub odwołany?</h3>
          <p>
            Sprawdź bezpłatnie, czy należy Ci się odszkodowanie do 600 EUR. ClaimWinger działa na zasadzie no win, no fee — 
            płacisz tylko gdy wygrasz.
          </p>
          <a href="https://claimwinger.com/pl/opozniony-lot" className="cta-button">
            Sprawdź odszkodowanie za opóźniony lot →
          </a>
          <a href="https://claimwinger.com/pl/odwolany-lot" className="cta-button cta-button--secondary">
            Sprawdź odszkodowanie za odwołany lot →
          </a>
        </div>
      </article>
    </>
  );
};

export default OverbookingLotSluzbowyPracy;
