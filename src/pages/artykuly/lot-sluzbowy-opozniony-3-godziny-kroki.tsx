import React from 'react';
import Head from 'next/head';

const LotSluzbowyOpozniony = () => {
  const articleData = {
    title: "Lot służbowy opóźniony o ponad 3 godziny — krok po kroku",
    description: "Lot służbowy opóźniony o ponad 3 godziny uprawnia do odszkodowania do 600 EUR. Sprawdź jak krok po kroku dochodzić swoich praw i odzyskać koszty.",
    slug: "lot-sluzbowy-opozniony-3-godziny-kroki",
    cluster: "K1",
    keyword_primary: "lot służbowy opóźniony 3 godziny",
    keywords_secondary: "odszkodowanie opóźniony lot delegacja, EC 261 opóźnienie 3h biznes, prawa pasażera opóźniony lot służbowy",
    reading_time: "8 min",
    internal_links: ["EC 261/2004 a loty służbowe — co obejmuje rozporządzenie", "Odwołany lot służbowy — jak odzyskać koszty hotelu i przesiadki"],
    cta_url: "https://claimwinger.com/pl/opozniony-lot"
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
        "name": "Czy przysługuje mi odszkodowanie za opóźniony lot służbowy?",
        "acceptedAnswer": {"@type": "Answer", "text": "Tak, za opóźniony lot służbowy powyżej 3 godzin przysługuje odszkodowanie do 600 EUR zgodnie z EC 261/2004, niezależnie od celu podróży."}
      },
      {
        "@type": "Question",
        "name": "Ile wynosi odszkodowanie za opóźnienie lotu o 3 godziny?",
        "acceptedAnswer": {"@type": "Answer", "text": "Odszkodowanie za opóźnienie lotu o 3 godziny wynosi 250-600 EUR w zależności od dystansu: 250 EUR do 1500 km, 400 EUR do 3500 km, 600 EUR powyżej 3500 km."}
      },
      {
        "@type": "Question",
        "name": "Jak udokumentować opóźnienie lotu służbowego?",
        "acceptedAnswer": {"@type": "Answer", "text": "Opóźnienie lotu służbowego dokumentujesz kartą pokładową, zdjęciem tablicy odlotów, komunikatem linii lotniczej oraz rachunkami za dodatkowe wydatki."}
      },
      {
        "@type": "Question",
        "name": "Czy pracodawca może odmówić zwrotu kosztów za opóźnienie?",
        "acceptedAnswer": {"@type": "Answer", "text": "Nie, pracodawca nie może odmówić zwrotu kosztów za opóźnienie lotu służbowego jeśli są one niezbędne do realizacji delegacji i odpowiednio udokumentowane."}
      },
      {
        "@type": "Question",
        "name": "Kiedy kończy się prawo do odszkodowania za opóźniony lot?",
        "acceptedAnswer": {"@type": "Answer", "text": "Prawo do odszkodowania za opóźniony lot wygasa po 2 latach od daty planowanego lotu. Po tym terminie roszczenie przedawnia się."}
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
            Opóźniony lot służbowy o ponad 3 godziny to nie tylko strata czasu, ale także prawo do odszkodowania 
            do 600 EUR. Zgodnie z rozporządzeniem EC 261/2004 pracownik zachowuje pełne prawa pasażera 
            niezależnie od celu podróży. W tym przewodniku krok po kroku wyjaśniamy jak skutecznie dochodzić swoich praw.
          </p>
          <div className="article-highlights">
            <div className="highlight-item">✓ Odszkodowanie do 600 EUR za opóźnienie powyżej 3 godzin</div>
            <div className="highlight-item">✓ Pomoc natychmiastowa: posiłki, napoje, hotel</div>
            <div className="highlight-item">✓ Termin roszczeń: 2 lata od daty lotu</div>
          </div>
        </header>

        <div className="key-takeaways">
          <h3>Najważniejsze informacje</h3>
          <ul>
            <li>Opóźnienie lotu służbowego powyżej 3 godzin uprawnia do odszkodowania 250-600 EUR</li>
            <li>Pomoc natychmiastowa przysługuje już od 2 godzin opóźnienia</li>
            <li>Odszkodowanie należy się pracownikowi, nie pracodawcy</li>
            <li>Procedura roszczeń trwa zazwyczaj 6-8 tygodni</li>
          </ul>
        </div>

        <section className="article-section">
          <h2>Kiedy lot jest uznawany za opóźniony?</h2>
          <p>
            Lot jest uznawany za opóźniony gdy samolot wyląduuje w docelowym lotnisku z opóźnieniem 
            wynoszącym co najmniej 3 godziny w stosunku do planowanego czasu przylotu. 
            Opóźnienie liczy się od momentu otwarcia drzwi samolotu przy bramce. 
            W podróży służbowej te same zasady mają zastosowanie jak w podróży prywatnej — 
            pracownik ma pełne prawa pasażera niezależnie od tego kto finansował bilet.
          </p>
          
          <div className="callout callout--info">
            <span className="callout__icon">ℹ</span>
            <div className="callout__content">
              <strong>Ważne:</strong> Opóźnienie poniżej 3 godzin nie uprawnia do odszkodowania finansowego, 
              ale pasażer wciąż ma prawo do pomocy natychmiastowej.
            </div>
          </div>
        </section>

        <section className="article-section">
          <h2>Podstawa prawna odszkodowania za opóźnienia</h2>
          <p>
            Podstawą prawną odszkodowania za opóźnione loty służbowe jest rozporządzenie Parlamentu 
            Europejskiego i Rady (WE) nr 261/2004. Zgodnie z art. 7 rozporządzenia, pasażerowie 
            mają prawo do odszkodowania finansowego gdy lot docelowy zostanie opóźniony o co najmniej 3 godziny. 
            Rozporządzenie ma zastosowanie do wszystkich lotów wylatujących z UE oraz lotów przylatujących 
            do UE wykonywanych przez linie lotnicze z UE. Prawa te przysługują wszystkim pasażerom, 
            w tym pracownikom w podróży służbowej.
          </p>
        </section>

        <section className="article-section">
          <h2>Wysokość odszkodowania — tabela kwot</h2>
          
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
                  <td>Warszawa-Berlin, Kraków-Wiedeń</td>
                </tr>
                <tr>
                  <td>1501-3500 km</td>
                  <td>400 EUR</td>
                  <td>Warszawa-Mediolan, Wrocław-Barcelona</td>
                </tr>
                <tr>
                  <td>Powyżej 3500 km</td>
                  <td>600 EUR</td>
                  <td>Warszawa-Dubaj, Kraków-Doha</td>
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
          <h2>Pomoc natychmiastowa — co przysługuje już teraz</h2>
          <p>
            Pomoc natychmiastowa przysługuje już przy opóźnieniu powyżej 2 godzin i obejmuje 
            posiłki i napoje odpowiednie do czasu oczekiwania. Przy opóźnieniu powyżej 5 godzin 
            lub gdy lot jest opóźniony do następnego dnia, linia lotnicza musi zapewnić 
            zakwaterowanie w hotelu oraz transport z lotniska do hotelu i z powrotem. 
            Pomoc ta przysługuje zawsze, nawet w przypadku nadzwyczajnych okoliczności.
          </p>
        </section>

        <section className="article-section">
          <h2>Procedura odzyskiwania odszkodowania krok po kroku</h2>
          
          <ol className="steps-list">
            <li className="step">
              <span className="step__number">1</span>
              <div className="step__content">
                <strong>Zbierz dokumentację na lotnisku</strong>
                <p>Zrób zdjęcie tablicy odlotów z opóźnieniem, zachowaj kartę pokładową z adnotacją o opóźnieniu, 
                poproś o pisemne potwierdzenie opóźnienia od linii lotniczej.</p>
              </div>
            </li>
            <li className="step">
              <span className="step__number">2</span>
              <div className="step__content">
                <strong>Wypełnij formularz reklamacji</strong>
                <p>Pobierz formularz reklamacji ze strony linii lotniczej lub użyj standardowego formularza UE. 
                Podaj dane lotu, przyczynę opóźnienia i kwotę żądanego odszkodowania.</p>
              </div>
            </li>
            <li className="step">
              <span className="step__number">3</span>
              <div className="step__content">
                <strong>Wyślij reklamację do linii lotniczej</strong>
                <p>Wyślij reklamację listem poleconym lub przez formularz online. Dołącz kopie biletu, 
                karty pokładowej i dokumentacji potwierdzającej opóźnienie.</p>
              </div>
            </li>
            <li className="step">
              <span className="step__number">4</span>
              <div className="step__content">
                <strong>Czekaj na odpowiedź i podejmij działania</strong>
                <p>Linia ma 6 tygodni na odpowiedź. Jeśli odmawia, skieruj sprawę do ULC lub skorzystaj 
                z firmy odszkodowawczej działającej na zasadzie no win no fee.</p>
              </div>
            </li>
          </ol>
        </section>

        <section className="article-section">
          <h2>Dokumentacja niezbędna do reklamacji</h2>
          <p>
            Skuteczna reklamacja wymaga odpowiedniej dokumentacji. Niezbędne dokumenty to: 
            kopia biletu lotniczego z numerem rezerwacji, karta pokładowa potwierdzająca opóźnienie, 
            dokument tożsamości, zdjęcie tablicy odlotów z lotniska, korespondencja z linią lotniczą 
            oraz rachunki za dodatkowe wydatki (posiłki, transport, hotel). 
            Im lepsza dokumentacja, tym większa szansa na pozytywne rozstrzygnięcie.
          </p>
        </section>

        <section className="article-section">
          <h2>Wyjątki — kiedy odszkodowanie nie przysługuje</h2>
          <p>
            Linia lotnicza może odmówić wypłaty odszkodowania tylko w przypadku nadzwyczajnych okoliczności 
            których nie można było uniknąć. Do takich sytuacji należą: ekstremalne warunki pogodowe, 
            niestabilność sytuacji politycznej, ryzyko bezpieczeństwa lotu, nagłe strajki personelu 
            lotniskowego oraz ukryte wady konstrukcyjne samolotu ujawnione przez producenta. 
            Ważne: nawet w tych przypadkach pomoc natychmiastowa wciąż przysługuje.
          </p>
        </section>

        <section className="article-section">
          <h2>Pracodawca a koszty opóźnienia lotu służbowego</h2>
          <p>
            Pracodawca ma obowiązek zwrócić pracownikowi wszystkie koszty delegacji poniesione 
            w wyniku opóźnienia lotu. Obejmuje to koszty posiłków, napojów, transportu oraz ewentualnego 
            noclegu jeśli opóźnienie wymagało pozostania na lotnisku. Koszty te powinny być udokumentowane 
            rachunkami i fakturami. Pracodawca nie może potrącić sobie odszkodowania od linii lotniczej — 
            należy ono wyłącznie pracownikowi jako osoba fizyczna.
          </p>
        </section>

        <section className="article-section">
          <h2>Opóźnienie a spotkania biznesowe — straty konsekwencje</h2>
          <p>
            Opóźnienie lotu służbowego może prowadzić do strat biznesowych w postaci odwołanych spotkań, 
            utraconych kontraktów czy uszkodzenia relacji z klientami. Te straty nie są pokryte przez 
            odszkodowanie z EC 261/2004, ale mogą być ubezpieczone w polisie podróży służbowych. 
            Warto również negocjować z klientami elastyczne terminy spotkań w przypadku podróży lotniczych 
            oraz mieć plan awaryjny komunikacji w razie opóźnień.
          </p>
        </section>

        <section className="article-section">
          <h2>Alternatywne drogi dochodzenia praw</h2>
          <p>
            Jeśli linia lotnicza odmawia wypłaty odszkodowania, istnieją alternatywne drogi dochodzenia praw. 
            Można skorzystać z pomocy Urzędu Lotnictwa Cywilnego który może mediatować w sporze, 
            złożyć pozew do sądu rejonowego właściwego dla siedziby linii lotniczej w Polsce, 
            lub skorzystać z firm specjalizujących się w odzyskiwaniu odszkodowań lotniczych. 
            Firmy te działają zazwyczaj na zasadzie no win no fee i pobierają prowizję tylko od sukcesu.
          </p>
        </section>

        <section className="faq-section" id="faq">
          <h2>Najczęstsze pytania</h2>

          <div className="faq-item" itemScope itemType="https://schema.org/Question">
            <h3 itemProp="name">Czy przysługuje mi odszkodowanie za opóźniony lot służbowy?</h3>
            <div className="faq-answer" itemScope itemType="https://schema.org/Answer">
              <div itemProp="text">
                <p>
                  Tak, za opóźniony lot służbowy powyżej 3 godzin przysługuje odszkodowanie do 600 EUR zgodnie z EC 261/2004, 
                  niezależnie od celu podróży i tego kto finansował bilet.
                </p>
              </div>
            </div>
          </div>

          <div className="faq-item" itemScope itemType="https://schema.org/Question">
            <h3 itemProp="name">Ile wynosi odszkodowanie za opóźnienie lotu o 3 godziny?</h3>
            <div className="faq-answer" itemScope itemType="https://schema.org/Answer">
              <div itemProp="text">
                <p>
                  Odszkodowanie za opóźnienie lotu o 3 godziny wynosi 250-600 EUR w zależności od dystansu: 
                  250 EUR do 1500 km, 400 EUR do 3500 km, 600 EUR powyżej 3500 km.
                </p>
              </div>
            </div>
          </div>

          <div className="faq-item" itemScope itemType="https://schema.org/Question">
            <h3 itemProp="name">Jak udokumentować opóźnienie lotu służbowego?</h3>
            <div className="faq-answer" itemScope itemType="https://schema.org/Answer">
              <div itemProp="text">
                <p>
                  Opóźnienie lotu służbowego dokumentujesz kartą pokładową, zdjęciem tablicy odlotów, 
                  komunikatem linii lotniczej oraz rachunkami za dodatkowe wydatki poniesione w wyniku opóźnienia.
                </p>
              </div>
            </div>
          </div>

          <div className="faq-item" itemScope itemType="https://schema.org/Question">
            <h3 itemProp="name">Czy pracodawca może odmówić zwrotu kosztów za opóźnienie?</h3>
            <div className="faq-answer" itemScope itemType="https://schema.org/Answer">
              <div itemProp="text">
                <p>
                  Nie, pracodawca nie może odmówić zwrotu kosztów za opóźnienie lotu służbowego jeśli są one 
                  niezbędne do realizacji delegacji i odpowiednio udokumentowane rachunkami.
                </p>
              </div>
            </div>
          </div>

          <div className="faq-item" itemScope itemType="https://schema.org/Question">
            <h3 itemProp="name">Kiedy kończy się prawo do odszkodowania za opóźniony lot?</h3>
            <div className="faq-answer" itemScope itemType="https://schema.org/Answer">
              <div itemProp="text">
                <p>
                  Prawo do odszkodowania za opóźniony lot wygasa po 2 latach od daty planowanego lotu. 
                  Po tym terminie roszczenie przedawnia się i nie można dochodzić odszkodowania.
                </p>
              </div>
            </div>
          </div>
        </section>

        <div className="article-cta">
          <h3>Twój lot służbowy był opóźniony o ponad 3 godziny?</h3>
          <p>
            Sprawdź bezpłatnie, czy należy Ci się odszkodowanie do 600 EUR. ClaimWinger działa na zasadzie no win, no fee — 
            płacisz tylko gdy wygrasz sprawę o odszkodowanie za opóźniony lot.
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

export default LotSluzbowyOpozniony;
