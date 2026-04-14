import Link from "next/link";
import {
  AlertCircle,
  ArrowRight,
  CheckCircle2,
  Clock,
  FileText,
  GitBranch,
  PlaneLanding,
  Ticket,
} from "lucide-react";

import { ClaimWingerElSection } from "@/components/ClaimWingerElSection";
import { LayoutEl } from "@/components/LayoutEl";
import { SEO } from "@/components/SEO";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { pushClaimWingerEvent } from "@/lib/claimwingerTracking";

const articleUrl =
  "https://problemlot.com/el/blog/ischyei-apozimiosi-se-ptisi-me-antapokrisi";
const claimWingerHomeHref =
  "https://claimwinger.com/el?utm_source=problemlot-el&utm_medium=article_link&utm_campaign=connecting_flight_compensation";
const delayedFlightHref =
  "https://claimwinger.com/el/kathysterimeni-ptisi?utm_source=problemlot-el&utm_medium=article_link&utm_campaign=connecting_flight_compensation";
const cancelledFlightHref =
  "https://claimwinger.com/el/akyromeni-ptisi?utm_source=problemlot-el&utm_medium=article_link&utm_campaign=connecting_flight_compensation";

const faqItems = [
  {
    question: "Ισχύει αποζημίωση σε πτήση με ανταπόκριση;",
    answer:
      "Ναι, συχνά ισχύει, αρκεί οι πτήσεις να ήταν μέρος μίας ενιαίας κράτησης, να εφαρμόζεται το EU261 και να φτάσατε στον τελικό προορισμό με καθυστέρηση 3 ωρών ή περισσότερο χωρίς να υπάρχουν έκτακτες περιστάσεις.",
  },
  {
    question: "Μετράει η καθυστέρηση του πρώτου σκέλους ή του τελικού προορισμού;",
    answer:
      "Για την αποζημίωση μετράει συνήθως η καθυστέρηση στην τελική άφιξη στον προορισμό της ίδιας κράτησης και όχι απλώς η καθυστέρηση στο πρώτο σκέλος.",
  },
  {
    question: "Τι γίνεται αν είχα δύο ξεχωριστά εισιτήρια;",
    answer:
      "Τότε η υπόθεση είναι συνήθως πολύ πιο αδύναμη, γιατί το χαμένο connection δεν αντιμετωπίζεται το ίδιο όπως σε μια ενιαία κράτηση. Η κάθε πτήση μπορεί να διαβαστεί ξεχωριστά.",
  },
  {
    question: "Αν χάσω την ανταπόκριση αλλά φτάσω σχετικά κοντά στην ώρα μου, υπάρχει αποζημίωση;",
    answer:
      "Όχι πάντα. Το κρίσιμο ερώτημα είναι πόσο αργότερα φτάσατε στον τελικό προορισμό. Αν η τελική άφιξη δεν περνά το σχετικό όριο, η χρηματική αποζημίωση μπορεί να μην οφείλεται.",
  },
];

function trackClaimClick(placement: string, destination: string) {
  pushClaimWingerEvent("claimwinger_cta_click", {
    locale: "el",
    placement,
    destination,
  });
}

export default function ConnectingFlightCompensationElPage() {
  return (
    <LayoutEl>
      <SEO
        title="Ισχύει αποζημίωση σε πτήση με ανταπόκριση;"
        description="Μάθετε πότε μια πτήση με ανταπόκριση οδηγεί σε αποζημίωση, γιατί μετράει η μία κράτηση και ο τελικός προορισμός, και γιατί τα ξεχωριστά εισιτήρια αλλάζουν ουσιαστικά την εικόνα της υπόθεσης."
        url={articleUrl}
        canonicalUrl={articleUrl}
        locale="el_GR"
        language="Greek"
      />

      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Article",
            headline: "Ισχύει αποζημίωση σε πτήση με ανταπόκριση;",
            description:
              "Εξηγούμε πότε οι πτήσεις με ανταπόκριση οδηγούν σε αποζημίωση, γιατί μετράει ο τελικός προορισμός και ποια είναι η κρίσιμη διαφορά ανάμεσα σε μία κράτηση και σε ξεχωριστά εισιτήρια.",
            mainEntityOfPage: articleUrl,
            datePublished: "2026-04-13",
            dateModified: "2026-04-13",
            author: {
              "@type": "Organization",
              name: "problemlot.com",
            },
            publisher: {
              "@type": "Organization",
              name: "problemlot.com",
              logo: {
                "@type": "ImageObject",
                url: "https://problemlot.com/og-image.png",
              },
            },
            image: "https://problemlot.com/og-image.png",
            inLanguage: "el-GR",
          }),
        }}
      />

      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "FAQPage",
            mainEntity: faqItems.map((item) => ({
              "@type": "Question",
              name: item.question,
              acceptedAnswer: {
                "@type": "Answer",
                text: item.answer,
              },
            })),
          }),
        }}
      />

      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "BreadcrumbList",
            itemListElement: [
              {
                "@type": "ListItem",
                position: 1,
                name: "Αρχική",
                item: "https://problemlot.com/el",
              },
              {
                "@type": "ListItem",
                position: 2,
                name: "Blog",
                item: "https://problemlot.com/el/blog",
              },
              {
                "@type": "ListItem",
                position: 3,
                name: "Ισχύει αποζημίωση σε πτήση με ανταπόκριση;",
                item: articleUrl,
              },
            ],
          }),
        }}
      />

      <article className="min-h-screen bg-gradient-to-br from-slate-50 via-white to-sky-50 dark:from-gray-950 dark:via-gray-900 dark:to-slate-900">
        <div className="mx-auto max-w-4xl px-4 py-12">
          <div className="mb-6 flex items-center gap-2 text-sm text-slate-600 dark:text-slate-400">
            <Link href="/el" className="hover:text-sky-600">
              Αρχική
            </Link>
            <span>/</span>
            <Link href="/el/blog" className="hover:text-sky-600">
              Blog
            </Link>
            <span>/</span>
            <span>Ισχύει αποζημίωση σε πτήση με ανταπόκριση;</span>
          </div>

          <header className="mb-10">
            <div className="mb-4 inline-flex items-center gap-2 rounded-full bg-sky-100 px-4 py-2 text-sm font-medium text-sky-700 dark:bg-sky-900/30 dark:text-sky-300">
              Οδηγός για connecting flights
            </div>
            <h1 className="mb-5 text-4xl font-bold tracking-tight text-slate-900 dark:text-white md:text-5xl">
              Ισχύει αποζημίωση σε πτήση με ανταπόκριση;
            </h1>
            <p className="max-w-3xl text-xl leading-8 text-slate-600 dark:text-slate-300">
              Η σύντομη απάντηση είναι <strong>ναι, συχνά ισχύει</strong>, αλλά το αποτέλεσμα
              εξαρτάται από δύο κρίσιμα σημεία: αν οι πτήσεις ήταν σε
              <strong> μία ενιαία κράτηση</strong> και αν φτάσατε στον
              <strong> τελικό προορισμό</strong> με αρκετά μεγάλη καθυστέρηση.
            </p>

            <div className="mt-6 flex flex-wrap gap-4 text-sm text-slate-600 dark:text-slate-400">
              <div className="flex items-center gap-2">
                <Clock className="h-4 w-4" />
                <span>Ενημέρωση: 13 Απριλίου 2026</span>
              </div>
              <div className="flex items-center gap-2">
                <FileText className="h-4 w-4" />
                <span>Χρόνος ανάγνωσης: 8 λεπτά</span>
              </div>
            </div>
          </header>

          <section className="mb-10">
            <Card className="border-sky-200 bg-gradient-to-br from-sky-600 to-indigo-700 p-8 text-white shadow-xl dark:border-sky-800">
              <h2 className="mb-4 text-2xl font-bold">Σύντομη απάντηση</h2>
              <div className="space-y-3 text-base leading-7 text-sky-50">
                <p>
                  Μια πτήση με ανταπόκριση μπορεί να δίνει αποζημίωση όταν όλο το ταξίδι ήταν σε
                  <strong> μία κράτηση</strong> και η τελική άφιξη καθυστέρησε αρκετά.
                </p>
                <p>
                  Το βασικό λάθος είναι να κοιτάμε μόνο πόσο άργησε το πρώτο σκέλος ή μόνο αν
                  χάθηκε η ανταπόκριση. Για την αποζημίωση, μετράει συνήθως ο
                  <strong> τελικός προορισμός</strong>.
                </p>
                <p>
                  Αν όμως είχατε <strong>ξεχωριστά εισιτήρια</strong>, η υπόθεση αλλάζει πολύ και
                  συνήθως γίνεται σημαντικά πιο αδύναμη.
                </p>
              </div>
            </Card>
          </section>

          <ClaimWingerElSection
            className="mb-12"
            title="Ελέγξτε την πτήση με ανταπόκριση στο ClaimWinger"
            description="Αν χάσατε connection ή φτάσατε αργά στον τελικό προορισμό, το ClaimWinger Ελλάδα μπορεί να βοηθήσει να φανεί γρήγορα αν η υπόθεση μοιάζει να στηρίζεται σε μία ενιαία κράτηση και σε καθυστέρηση που έχει πραγματικό βάρος στο EU261."
            ctaHref="https://claimwinger.com/el?utm_source=problemlot-el&utm_medium=embedded_cta&utm_campaign=connecting_flight_compensation"
            ctaLabel="Έλεγχος με το ClaimWinger"
            loadingLabel="Φορτώνεται η φόρμα ClaimWinger..."
            loadingDescription="Σε λίγο θα εμφανιστεί η ελληνική φόρμα για έλεγχο της πτήσης σας."
            placement="el_blog_connecting_flight_compensation_embed"
          />

          <section className="mb-12">
            <h2 className="mb-6 text-3xl font-bold text-slate-900 dark:text-white">
              1. Μία κράτηση αλλάζει όλη την εικόνα
            </h2>
            <div className="space-y-4 text-base leading-7 text-slate-700 dark:text-slate-300">
              <p>
                Όταν τα σκέλη του ταξιδιού βρίσκονται σε <strong>μία ενιαία κράτηση</strong>, η
                υπόθεση διαβάζεται σαν μια συνολική διαδρομή. Αυτό είναι το πιο δυνατό θεμέλιο για
                claim σε περίπτωση χαμένης ανταπόκρισης ή μεγάλης τελικής καθυστέρησης.
              </p>
              <p>
                Αντίθετα, όταν αγοράζετε δύο πτήσεις χωριστά, η κάθε αεροπορική μπορεί να δει το
                δικό της σκέλος αποκομμένο από το επόμενο. Εκεί η προστασία γίνεται πολύ πιο
                περιορισμένη.
              </p>
            </div>
          </section>

          <section className="mb-12">
            <h2 className="mb-6 text-3xl font-bold text-slate-900 dark:text-white">
              2. Μετράει ο τελικός προορισμός, όχι μόνο το πρώτο σκέλος
            </h2>
            <div className="grid gap-4 md:grid-cols-2">
              <Card className="p-6">
                <div className="mb-3 flex items-center gap-2 text-slate-900 dark:text-white">
                  <PlaneLanding className="h-5 w-5 text-sky-600" />
                  <h3 className="text-xl font-semibold">Τελική άφιξη</h3>
                </div>
                <p className="text-sm leading-6 text-slate-600 dark:text-slate-300">
                  Για την αποζημίωση έχει σημασία κυρίως το πόσο αργά φτάσατε στον τελικό
                  προορισμό της ίδιας κράτησης, όχι μόνο αν το πρώτο σκέλος έφυγε με καθυστέρηση.
                </p>
              </Card>
              <Card className="p-6">
                <div className="mb-3 flex items-center gap-2 text-slate-900 dark:text-white">
                  <GitBranch className="h-5 w-5 text-sky-600" />
                  <h3 className="text-xl font-semibold">Χαμένη ανταπόκριση</h3>
                </div>
                <p className="text-sm leading-6 text-slate-600 dark:text-slate-300">
                  Το ότι χάσατε το connecting flight είναι σημαντικό, αλλά το καθοριστικό νομικά
                  σημείο είναι το αποτέλεσμα στο τέλος της συνολικής διαδρομής.
                </p>
              </Card>
            </div>
          </section>

          <section className="mb-12">
            <h2 className="mb-6 text-3xl font-bold text-slate-900 dark:text-white">
              3. Τι αλλάζει με τα ξεχωριστά εισιτήρια
            </h2>
            <div className="grid gap-4 md:grid-cols-2">
              <Card className="p-6">
                <div className="mb-3 flex items-center gap-2 text-slate-900 dark:text-white">
                  <Ticket className="h-5 w-5 text-sky-600" />
                  <h3 className="text-xl font-semibold">Πιο αδύναμη θέση</h3>
                </div>
                <p className="text-sm leading-6 text-slate-600 dark:text-slate-300">
                  Με δύο ξεχωριστές κρατήσεις, το missed connection δεν διαβάζεται συνήθως όπως σε
                  μια ενιαία διαδρομή. Αυτό σημαίνει ότι η προστασία του επιβάτη είναι πιο στενή.
                </p>
              </Card>
              <Card className="p-6">
                <div className="mb-3 flex items-center gap-2 text-slate-900 dark:text-white">
                  <AlertCircle className="h-5 w-5 text-sky-600" />
                  <h3 className="text-xl font-semibold">Δεν σημαίνει πάντα μηδέν</h3>
                </div>
                <p className="text-sm leading-6 text-slate-600 dark:text-slate-300">
                  Ακόμη και τότε μπορεί να υπάρχει claim για το προβληματικό σκέλος χωριστά, αλλά
                  όχι με την ίδια λογική μιας ενιαίας, προστατευμένης ανταπόκρισης.
                </p>
              </Card>
            </div>
          </section>

          <section className="mb-12">
            <h2 className="mb-6 text-3xl font-bold text-slate-900 dark:text-white">
              4. Πότε η υπόθεση δείχνει πιο καθαρή
            </h2>
            <div className="grid gap-4 md:grid-cols-2">
              {[
                "όταν όλα τα σκέλη είναι σε μία κράτηση",
                "όταν η τελική άφιξη καθυστερεί 3 ώρες ή περισσότερο",
                "όταν το ταξίδι εμπίπτει στο πεδίο εφαρμογής του EU261",
                "όταν η αεροπορική δεν μπορεί να αποδείξει πραγματικές έκτακτες περιστάσεις",
              ].map((item) => (
                <Card key={item} className="p-5">
                  <div className="flex items-start gap-3">
                    <CheckCircle2 className="mt-1 h-5 w-5 text-green-600" />
                    <p className="text-sm leading-6 text-slate-700 dark:text-slate-300">{item}</p>
                  </div>
                </Card>
              ))}
            </div>
          </section>

          <section className="mb-12">
            <Card className="border-sky-200 bg-sky-50 p-8 dark:border-sky-900 dark:bg-sky-950/20">
              <h2 className="mb-4 text-2xl font-bold text-slate-900 dark:text-white">
                Θέλετε μια πρακτική εκτίμηση για την ανταπόκρισή σας;
              </h2>
              <p className="mb-6 text-base leading-7 text-slate-700 dark:text-slate-300">
                Αν χάσατε connection ή φτάσατε αργά στον τελικό προορισμό, το βασικό είναι να
                ελεγχθεί αν υπήρχε μία κράτηση και ποια ήταν η τελική καθυστέρηση, όχι μόνο το
                πόσα λεπτά άργησε το πρώτο σκέλος.
              </p>
              <div className="flex flex-wrap gap-3">
                <Button asChild size="lg" className="bg-sky-600 hover:bg-sky-700">
                  <a
                    href={claimWingerHomeHref}
                    target="_blank"
                    rel="noopener noreferrer"
                    onClick={() =>
                      trackClaimClick(
                        "el_blog_connecting_flight_compensation_home_button",
                        claimWingerHomeHref,
                      )
                    }
                  >
                    Άνοιγμα ClaimWinger
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </a>
                </Button>
                <Button asChild size="lg" variant="outline">
                  <a
                    href={delayedFlightHref}
                    target="_blank"
                    rel="noopener noreferrer"
                    onClick={() =>
                      trackClaimClick(
                        "el_blog_connecting_flight_compensation_delayed_button",
                        delayedFlightHref,
                      )
                    }
                  >
                    Έλεγχος καθυστερημένης πτήσης
                  </a>
                </Button>
              </div>
            </Card>
          </section>

          <section className="mb-12">
            <h2 className="mb-6 text-3xl font-bold text-slate-900 dark:text-white">
              Συχνές ερωτήσεις
            </h2>
            <div className="space-y-4">
              {faqItems.map((item) => (
                <Card key={item.question} className="p-6">
                  <h3 className="mb-2 text-lg font-semibold text-slate-900 dark:text-white">
                    {item.question}
                  </h3>
                  <p className="text-sm leading-6 text-slate-600 dark:text-slate-300">
                    {item.answer}
                  </p>
                </Card>
              ))}
            </div>
          </section>

          <section className="mb-6">
            <Card className="p-8">
              <h2 className="mb-4 text-2xl font-bold text-slate-900 dark:text-white">
                Σχετικά επόμενα βήματα
              </h2>
              <div className="grid gap-4 md:grid-cols-3">
                <Link
                  href="/el/blog/poses-ores-kathysterisis-chreiazontai-gia-apozimiosi"
                  className="rounded-2xl border border-slate-200 p-5 transition-colors hover:border-sky-400 hover:bg-sky-50 dark:border-slate-700 dark:hover:border-sky-700 dark:hover:bg-sky-950/20"
                >
                  <h3 className="mb-2 font-semibold text-slate-900 dark:text-white">
                    Πόσες ώρες καθυστέρησης χρειάζονται;
                  </h3>
                  <p className="text-sm text-slate-600 dark:text-slate-300">
                    Ο βασικός οδηγός για το όριο των 3 ωρών και τη λογική της τελικής άφιξης.
                  </p>
                </Link>
                <a
                  href={cancelledFlightHref}
                  target="_blank"
                  rel="noopener noreferrer"
                  onClick={() =>
                    trackClaimClick(
                      "el_blog_connecting_flight_compensation_inline_cancelled_link",
                      cancelledFlightHref,
                    )
                  }
                  className="rounded-2xl border border-slate-200 p-5 transition-colors hover:border-sky-400 hover:bg-sky-50 dark:border-slate-700 dark:hover:border-sky-700 dark:hover:bg-sky-950/20"
                >
                  <h3 className="mb-2 font-semibold text-slate-900 dark:text-white">
                    Φόρμα ClaimWinger για ακυρωμένη πτήση
                  </h3>
                  <p className="text-sm text-slate-600 dark:text-slate-300">
                    Αν η ανταπόκριση χάθηκε επειδή ακυρώθηκε σκέλος της διαδρομής, εδώ είναι η σωστή είσοδος.
                  </p>
                </a>
                <a
                  href={delayedFlightHref}
                  target="_blank"
                  rel="noopener noreferrer"
                  onClick={() =>
                    trackClaimClick(
                      "el_blog_connecting_flight_compensation_inline_delayed_link",
                      delayedFlightHref,
                    )
                  }
                  className="rounded-2xl border border-slate-200 p-5 transition-colors hover:border-sky-400 hover:bg-sky-50 dark:border-slate-700 dark:hover:border-sky-700 dark:hover:bg-sky-950/20"
                >
                  <h3 className="mb-2 font-semibold text-slate-900 dark:text-white">
                    Φόρμα ClaimWinger για καθυστερημένη πτήση
                  </h3>
                  <p className="text-sm text-slate-600 dark:text-slate-300">
                    Αν το πρόβλημα ξεκίνησε από μεγάλη καθυστέρηση, μπορείτε να περάσετε από εδώ στον έλεγχο.
                  </p>
                </a>
              </div>
            </Card>
          </section>
        </div>
      </article>
    </LayoutEl>
  );
}
