import React from 'react';
import Head from 'next/head';

const ZgubionyBagazPodrozSluzbowa = () => {
  const articleData = {
    title: "Zgubiony bagaż w podróży służbowej — odszkodowanie i procedura",
    description: "Zgubiony bagaż w podróży służbowej uprawnia do odszkodowania do 1400 EUR. Sprawdź jak krok po kroku odzyskać bagaż i dochodzić swoich praw.",
    slug: "zgubiony-bagaz-podroz-sluzbowa-odszkodowanie-procedura",
    cluster: "K1",
    keyword_primary: "zgubiony bagaż podróż służbowa",
    keywords_secondary: "odszkodowanie zagubiony bagaż delegacja, Konwencja Montreal bagaż służbowy, PIR zgubiony bagaż biznes",
    reading_time: "9 min",
    internal_links: ["Overbooking na locie służbowym — prawa pracownika i pracodawcy", "Lot służbowy opóźniony o ponad 3 godziny — krok po kroku"],
    cta_url: "https://claimwinger.com/pl/zgubiony-bagaz"
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
        "name": "Ile wynosi odszkodowanie za zgubiony bagaż w podróży służbowej?",
        "acceptedAnswer": {"@type": "Answer", "text": "Odszkodowanie za zgubiony bagaż w podróży służbowej wynosi do 1400 EUR zgodnie z Konwencją Montreal, niezależnie od wartości bagażu i celu podróży."}
      },
      {
        "@type": "Question",
        "name": "Kto składa reklamację za zgubiony bagaż służbowy?",
        "acceptedAnswer": {"@type": "Answer", "text": "Reklamację za zgubiony bagaż służbowy składa pracownik jako właściciel bagażu, ponieważ odszkodowanie należy się osobie fizycznej która poniosła stratę."}
      },
      {
        "@type": "Question",
        "name": "Jakie dokumenty potrzebne są do zgłoszenia zagubionego bagażu?",
        "acceptedAnswer": {"@type": "Answer", "text": "Do zgłoszenia zagubionego bagażu potrzebny jest numer PIR z lotniska, dowód nadania bagażu, kopia biletu oraz dokument tożsamości."}
      },
      {
        "@type": "Question",
        "name": "Czy pracodawca może zająć odszkodowanie za bagaż?",
        "acceptedAnswer": {"@type": "Answer", "text": "Nie, pracodawca nie może zająć odszkodowania za zgubiony bagaż ponieważ należy ono pracownikowi jako osoba fizyczna która poniosła stratę."}
      },
      {
        "@type": "Question",
        "name": "Jak długo czeka się na odnalezienie zagubionego bagażu?",
        "acceptedAnswer": {"@type": "Answer", "text": "Standardowo czeka się 21 dni na odnalezienie zagubionego bagażu. Po tym czasie można uznać bagaż za zagubiony i dochodzić odszkodowania."}
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
            Zgubiony bagaż w podróży służbowej to poważny problem który może zniszczyć plany biznesowe. 
            Zgodnie z Konwencją Montreal pracownik ma prawo do odszkodowania do 1400 EUR niezależnie 
            od wartości bagażu. W tym przewodniku krok po kroku wyjaśniamy jak skutecznie odzyskać bagaż i dochodzić swoich praw.
          </p>
          <div className="article-highlights">
            <div className="highlight-item">✓ Odszkodowanie do 1400 EUR za zgubiony bagaż</div>
            <div className="highlight-item">✓ 21 dni na odnalezienie bagażu przez linię lotniczą</div>
            <div className="highlight-item">✓ Termin roszczeń: 2 lata od daty lotu</div>
          </div>
        </header>

        <div className="key-takeaways">
          <h3>Najważniejsze informacje</h3>
          <ul>
            <li>Zgubiony bagaż w podróży służbowej uprawnia do odszkodowania do 1400 EUR z Konwencji Montreal</li>
            <li>Odszkodowanie należy się pracownikowi, nie pracodawcy</li>
            <li>Natychmiastowe zgłoszenie na lotnisku jest kluczowe dla sukcesu roszczenia</li>
            <li>Pracodawca musi zwrócić koszty niezbędnych zakupów w delegacji</li>
          </ul>
        </div>

        <section className="article-section">
          <h2>Zgubiony bagaż — definicja i podstawowe prawa</h2>
          <p>
            Zgubiony bagaż to sytuacja gdy linia lotnicza nie dostarcza bagażu rejestrowanego do miejsca docelowego 
            w rozsądnym czasie. Zgodnie z Konwencją Montreal z 1999 roku, pasażerowie mają prawo do odszkodowania 
            do 1400 EUR za zagubiony, uszkodzony lub opóźniony bagaż. Prawa te przysługują wszystkim pasażerom, 
            w tym pracownikom w podróży służbowej, niezależnie od celu podróży czy tego kto finansował bilet.
          </p>
          
          <div className="callout callout--info">
            <span className="callout__icon">ℹ</span>
            <div className="callout__content">
              <strong>Ważne:</strong> Konwencja Montreal ma zastosowanie do wszystkich lotów międzynarodowych, 
              w tym lotów z Polski do krajów UE i spoza UE.
            </div>
          </div>
        </section>

        <section className="article-section">
          <h2>Podstawa prawna — Konwencja Montreal</h2>
          <p>
            Podstawą prawną odszkodowania za zgubiony bagaż jest Konwencja o ujednoliceniu niektórych 
            zasad międzynarodowego przewozu lotniczego (Konwencja Montreal) z 1999 roku. Polska ratyfikowała 
            tę konwencję w 2007 roku, dlatego ma ona bezpośrednie zastosowanie. Zgodnie z art. 19 i 22 Konwencji, 
            odpowiedzialność przewoźnika za zagubienie bagażu jest ograniczona do 1400 EUR za pasażera. 
            Limit ten dotyczy wartości bagażu i nie obejmuje strat konsekwencyjnych.
          </p>
        </section>

        <section className="article-section">
          <h2>Co zrobić natychmiast po stwierdzeniu braku bagażu</h2>
          <p>
            Po stwierdzeniu braku bagażu na taśmie należy natychmiast udać się do punktu obsługi bagażu 
            (Lost and Found) linii lotniczej i zgłosić zagubienie. Niezwłoczne zgłoszenie jest kluczowe 
            ponieważ linia lotnicza może odmówić odpowiedzialności jeśli zgłoszenie zostało złożone z opóźnieniem. 
            Przy zgłoszeniu należy okazać dowód nadania bagażu (nalepka bagażowa), bilet lotniczy oraz dokument tożsamości.
          </p>
        </section>

        <section className="article-section">
          <h2>Property Irregularity Report (PIR) — kluczowy dokument</h2>
          <p>
            Property Irregularity Report (PIR) to oficjalny raport o nieregularności bagażu wystawiony 
            przez linię lotniczą na lotnisku. Jest to podstawowy dokument niezbędny do dochodzenia praw. 
            PIR zawiera numer referencyjny sprawy, opis bagażu, dane kontaktowe pasażera oraz informacje 
            o locie. Należy dokładnie sprawdzić poprawność wszystkich danych w PIR i zachować kopię. 
            Bez PIR dochodzenie odszkodowania jest znacznie utrudnione.
          </p>
        </section>

        <section className="article-section">
          <h2>Procedura odzyskiwania bagażu krok po kroku</h2>
          
          <ol className="steps-list">
            <li className="step">
              <span className="step__number">1</span>
              <div className="step__content">
                <strong>Zgłoś brak bagażu na lotnisku</strong>
                <p>Udaj się do punktu Lost and Found linii lotniczej i zgłoś zagubienie. Otrzymaj numer PIR 
                i sprawdź czy wszystkie dane są poprawne. Zrób zdjęcie dokumentu.</p>
              </div>
            </li>
            <li className="step">
              <span className="step__number">2</span>
              <div className="step__content">
                <strong>Monitoruj status bagażu online</strong>
                <p>Użyj numeru PIR do śledzenia statusu bagażu na stronie linii lotniczej. Standardowo linia ma 21 dni 
                na odnalezienie i dostarczenie bagażu.</p>
              </div>
            </li>
            <li className="step">
              <span className="step__number">3</span>
              <div className="step__content">
                <strong>Dokumentuj niezbędne zakupy</strong>
                <p>Kup niezbędne rzeczy (ubrania, kosmetyki, sprzęt pracy) i zachowaj rachunki. 
                Pracodawca powinien zwrócić te koszty w ramach delegacji.</p>
              </div>
            </li>
            <li className="step">
              <span className="step__number">4</span>
              <div className="step__content">
                <strong>Złóż roszczenie o odszkodowanie</strong>
                <p>Po 21 dniach złoży oficjalne roszczenie o odszkodowanie do linii lotniczej. 
                Dołącz PIR, listę zawartości bagażu i dowody wartości.</p>
              </div>
            </li>
          </ol>
        </section>

        <section className="article-section">
          <h2>Odszkodowanie — wysokość i limit</h2>
          
          <div className="table-wrapper">
            <table className="comparison-table">
              <thead>
                <tr>
                  <th>Rodzaj szkody</th>
                  <th>Maksymalne odszkodowanie</th>
                  <th>Podstawa prawna</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>Zagubienie bagażu</td>
                  <td>1400 EUR</td>
                  <td>Konwencja Montreal art. 22</td>
                </tr>
                <tr>
                  <td>Uszkodzenie bagażu</td>
                  <td>1400 EUR</td>
                  <td>Konwencja Montreal art. 22</td>
                </tr>
                <tr>
                  <td>Opóźnienie bagażu</td>
                  <td>1400 EUR</td>
                  <td>Konwencja Montreal art. 19</td>
                </tr>
              </tbody>
            </table>
          </div>
          
          <div className="stat-card">
            <span className="stat-card__number">1400 EUR</span>
            <span className="stat-card__label">Maksymalne odszkodowanie za bagaż</span>
            <span className="stat-card__source">Źródło: Konwencja Montreal 1999</span>
          </div>
        </section>

        <section className="article-section">
          <h2>Dokumentowanie wartości bagażu i zawartości</h2>
          <p>
            Skuteczne dochodzenie odszkodowania wymaga udokumentowania wartości zagubionego bagażu i jego zawartości. 
            Niezbędne dokumenty to: paragony i faktury za wartościowe przedmioty, zdjęcia bagażu i zawartości, 
            lista szczegółowa wszystkich rzeczy w bagażu z oszacowaniem wartości, karty gwarancyjne, 
            dowody zakupu sprzętu elektronicznego oraz ewentualna polisa ubezpieczeniowa bagażu. 
            Im lepsza dokumentacja, tym większa szansa na pełne odszkodowanie.
          </p>
        </section>

        <section className="article-section">
          <h2>Pracodawca a koszty zagubionego bagażu służbowego</h2>
          <p>
            Pracodawca ma obowiązek zwrócić pracownikowi koszty niezbędnych zakupów poniesionych w wyniku 
            zagubienia bagażu służbowego. Obejmuje to ubrania, kosmetyki, artykuły higieniczne oraz niezbędny 
            sprzęt pracy. Koszty te powinny być rozsądne i odpowiednio udokumentowane rachunkami. 
            Pracodawca nie może jednak zająć sobie odszkodowania od linii lotniczej — należy ono wyłącznie 
            pracownikowi jako osoba fizyczna która poniosła stratę.
          </p>
        </section>

        <section className="article-section">
          <h2>Ubezpieczenie bagażu w podróży służbowej</h2>
          <p>
            Dodatkowe ubezpieczenie bagażu może pokryć straty przekraczające limit 1400 EUR z Konwencji Montreal 
            oraz straty konsekwencyjne. Polisy ubezpieczeniowe często obejmują również szybsze procedury 
            odszkodowawcze i assistance w zakupie niezbędnych rzeczy. Warto sprawdzić czy polisa firmy 
            obejmuje ryzyko zagubienia bagażu i jakie są procedury zgłaszania szkód. Niektóre polisy oferują 
            również odszkodowanie za utracone opportunities biznesowe.
          </p>
        </section>

        <section className="article-section">
          <h2>Alternatywne drogi dochodzenia praw</h2>
          <p>
            Jeśli linia lotnicza odmawia wypłaty odszkodowania lub oferuje zaniżoną kwotę, istnieją alternatywne drogi 
            dochodzenia praw. Można skorzystać z pomocy Rzecznika Praw Pasażerów, złożyć skargę do Urzędu Lotnictwa 
            Cywilnego, wnieść pozew do sądu rejonowego lub skorzystać z firm specjalizujących się w odzyskiwaniu 
            odszkodowań lotniczych. Firmy te działają na zasadzie no win no fee i często mają większe doświadczenie 
            w negocjacjach z liniami lotniczymi.
          </p>
        </section>

        <section className="faq-section" id="faq">
          <h2>Najczęstsze pytania</h2>

          <div className="faq-item" itemScope itemType="https://schema.org/Question">
            <h3 itemProp="name">Ile wynosi odszkodowanie za zgubiony bagaż w podróży służbowej?</h3>
            <div className="faq-answer" itemScope itemType="https://schema.org/Answer">
              <div itemProp="text">
                <p>
                  Odszkodowanie za zgubiony bagaż w podróży służbowej wynosi do 1400 EUR zgodnie z Konwencją Montreal, 
                  niezależnie od wartości bagażu i celu podróży. Kwota jest niezależna od ceny biletu.
                </p>
              </div>
            </div>
          </div>

          <div className="faq-item" itemScope itemType="https://schema.org/Question">
            <h3 itemProp="name">Kto składa reklamację za zgubiony bagaż służbowy?</h3>
            <div className="faq-answer" itemScope itemType="https://schema.org/Answer">
              <div itemProp="text">
                <p>
                  Reklamację za zgubiony bagaż służbowy składa pracownik jako właściciel bagażu, ponieważ odszkodowanie 
                  należy się osobie fizycznej która poniosła stratę. Pracodawca może jedynie pomóc w procedurze.
                </p>
              </div>
            </div>
          </div>

          <div className="faq-item" itemScope itemType="https://schema.org/Question">
            <h3 itemProp="name">Jakie dokumenty potrzebne są do zgłoszenia zagubionego bagażu?</h3>
            <div className="faq-answer" itemScope itemType="https://schema.org/Answer">
              <div itemProp="text">
                <p>
                  Do zgłoszenia zagubionego bagażu potrzebny jest numer PIR z lotniska, dowód nadania bagażu, 
                  kopia biletu oraz dokument tożsamości. Dodatkowo warto przygotować listę zawartości i dowody wartości.
                </p>
              </div>
            </div>
          </div>

          <div className="faq-item" itemScope itemType="https://schema.org/Question">
            <h3 itemProp="name">Czy pracodawca może zająć odszkodowanie za bagaż?</h3>
            <div className="faq-answer" itemScope itemType="https://schema.org/Answer">
              <div itemProp="text">
                <p>
                  Nie, pracodawca nie może zająć odszkodowania za zgubiony bagaż ponieważ należy ono pracownikowi 
                  jako osoba fizyczna która poniosła stratę. Odszkodowanie jest osobistym prawem pasażera.
                </p>
              </div>
            </div>
          </div>

          <div className="faq-item" itemScope itemType="https://schema.org/Question">
            <h3 itemProp="name">Jak długo czeka się na odnalezienie zagubionego bagażu?</h3>
            <div className="faq-answer" itemScope itemType="https://schema.org/Answer">
              <div itemProp="text">
                <p>
                  Standardowo czeka się 21 dni na odnalezienie zagubionego bagażu. Po tym czasie można uznać bagaż 
                  za zagubiony i dochodzić odszkodowania od linii lotniczej zgodnie z Konwencją Montreal.
                </p>
              </div>
            </div>
          </div>
        </section>

        <div className="article-cta">
          <h3>Zgubiono Twój bagaż w podróży służbowej?</h3>
          <p>
            Sprawdź bezpłatnie, czy należy Ci się odszkodowanie do 1400 EUR. ClaimWinger działa na zasadzie no win, no fee — 
            płacisz tylko gdy wygrasz sprawę o zagubiony bagaż.
          </p>
          <a href="https://claimwinger.com/pl/zgubiony-bagaz" className="cta-button">
            Sprawdź odszkodowanie za zgubiony bagaż →
          </a>
          <a href="https://claimwinger.com/pl/uszkodzony-bagaz" className="cta-button cta-button--secondary">
            Sprawdź odszkodowanie za uszkodzony bagaż →
          </a>
        </div>
      </article>
    </>
  );
};

export default ZgubionyBagazPodrozSluzbowa;
