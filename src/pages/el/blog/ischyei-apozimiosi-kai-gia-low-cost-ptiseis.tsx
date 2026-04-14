import Link from "next/link";
import {
  AlertCircle,
  ArrowRight,
  CheckCircle2,
  Clock,
  Euro,
  FileText,
  Plane,
  Wallet,
} from "lucide-react";

import { ClaimWingerElSection } from "@/components/ClaimWingerElSection";
import { LayoutEl } from "@/components/LayoutEl";
import { SEO } from "@/components/SEO";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { pushClaimWingerEvent } from "@/lib/claimwingerTracking";

const articleUrl =
  "https://problemlot.com/el/blog/ischyei-apozimiosi-kai-gia-low-cost-ptiseis";
const claimWingerHomeHref =
  "https://claimwinger.com/el?utm_source=problemlot-el&utm_medium=article_link&utm_campaign=low_cost_compensation";
const delayedFlightHref =
  "https://claimwinger.com/el/kathysterimeni-ptisi?utm_source=problemlot-el&utm_medium=article_link&utm_campaign=low_cost_compensation";
const cancelledFlightHref =
  "https://claimwinger.com/el/akyromeni-ptisi?utm_source=problemlot-el&utm_medium=article_link&utm_campaign=low_cost_compensation";

const faqItems = [
  {
    question: "Ισχύει αποζημίωση και για low-cost πτήσεις;",
    answer:
      "Ναι. Το EU261 δεν αποκλείει τις low-cost αεροπορικές. Αν η πτήση εμπίπτει στο πεδίο εφαρμογής του κανονισμού και πληρούνται οι σχετικές προϋποθέσεις, το ότι το εισιτήριο ήταν φθηνό δεν αφαιρεί τα δικαιώματα του επιβάτη.",
  },
  {
    question: "Η χαμηλή τιμή του εισιτηρίου μειώνει το ποσό αποζημίωσης;",
    answer:
      "Όχι. Το ποσό αποζημίωσης δεν εξαρτάται από την τιμή του εισιτηρίου αλλά από την απόσταση της πτήσης, το είδος του προβλήματος και τις προϋποθέσεις του EU261.",
  },
  {
    question: "Οι low-cost έχουν διαφορετικούς κανόνες;",
    answer:
      "Μπορεί να έχουν διαφορετικές εμπορικές πρακτικές, αλλά τα βασικά δικαιώματα επιβάτη του EU261 δεν αλλάζουν μόνο και μόνο επειδή πρόκειται για low-cost αεροπορική.",
  },
  {
    question: "Τι μετράει πραγματικά σε μια low-cost υπόθεση;",
    answer:
      "Μετράει αν η πτήση εμπίπτει στο EU261, αν η καθυστέρηση ή η ακύρωση φτάνει στα σχετικά όρια, ποια ήταν η τελική άφιξη και αν η αεροπορική αποδεικνύει πραγματικές έκτακτες περιστάσεις.",
  },
];

function trackClaimClick(placement: string, destination: string) {
  pushClaimWingerEvent("claimwinger_cta_click", {
    locale: "el",
    placement,
    destination,
  });
}

export default function LowCostCompensationElPage() {
  return (
    <LayoutEl>
      <SEO
        title="Ισχύει αποζημίωση και για low-cost πτήσεις;"
        description="Μάθετε αν οι low-cost πτήσεις καλύπτονται από αποζημίωση, γιατί η τιμή του εισιτηρίου δεν αλλάζει τα δικαιώματα του επιβάτη και ποια στοιχεία μετρούν πραγματικά στο EU261."
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
            headline: "Ισχύει αποζημίωση και για low-cost πτήσεις;",
            description:
              "Εξηγούμε γιατί οι low-cost πτήσεις δεν εξαιρούνται από τον κανονισμό EU261 και ποια στοιχεία καθορίζουν πραγματικά αν υπάρχει δικαίωμα αποζημίωσης.",
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
                name: "Ισχύει αποζημίωση και για low-cost πτήσεις;",
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
            <span>Ισχύει αποζημίωση και για low-cost πτήσεις;</span>
          </div>

          <header className="mb-10">
            <div className="mb-4 inline-flex items-center gap-2 rounded-full bg-sky-100 px-4 py-2 text-sm font-medium text-sky-700 dark:bg-sky-900/30 dark:text-sky-300">
              Οδηγός για low-cost και δικαιώματα επιβατών
            </div>
            <h1 className="mb-5 text-4xl font-bold tracking-tight text-slate-900 dark:text-white md:text-5xl">
              Ισχύει αποζημίωση και για low-cost πτήσεις;
            </h1>
            <p className="max-w-3xl text-xl leading-8 text-slate-600 dark:text-slate-300">
              Η σύντομη απάντηση είναι <strong>ναι</strong>. Η χαμηλή τιμή του εισιτηρίου δεν
              σημαίνει χαμηλότερα δικαιώματα. Το αν υπάρχει αποζημίωση δεν εξαρτάται από το αν η
              αεροπορική είναι low-cost, αλλά από το αν η πτήση εμπίπτει στο
              <strong> EU261</strong> και από το τι ακριβώς συνέβη.
            </p>

            <div className="mt-6 flex flex-wrap gap-4 text-sm text-slate-600 dark:text-slate-400">
              <div className="flex items-center gap-2">
                <Clock className="h-4 w-4" />
                <span>Ενημέρωση: 13 Απριλίου 2026</span>
              </div>
              <div className="flex items-center gap-2">
                <FileText className="h-4 w-4" />
                <span>Χρόνος ανάγνωσης: 7 λεπτά</span>
              </div>
            </div>
          </header>

          <section className="mb-10">
            <Card className="border-sky-200 bg-gradient-to-br from-sky-600 to-indigo-700 p-8 text-white shadow-xl dark:border-sky-800">
              <h2 className="mb-4 text-2xl font-bold">Σύντομη απάντηση</h2>
              <div className="space-y-3 text-base leading-7 text-sky-50">
                <p>
                  Το ότι μια πτήση είναι <strong>low-cost</strong> δεν αφαιρεί από μόνο του κανένα
                  βασικό δικαίωμα αποζημίωσης.
                </p>
                <p>
                  Η τιμή του εισιτηρίου δεν αλλάζει το αν η υπόθεση μπαίνει στο EU261 ούτε το ποσό
                  των <strong>250 €</strong>, <strong>400 €</strong> ή <strong>600 €</strong> όταν
                  πληρούνται οι προϋποθέσεις.
                </p>
                <p>
                  Αυτό που μετρά πραγματικά είναι η διαδρομή, ο αερομεταφορέας, η τελική άφιξη και
                  το αν η αεροπορική μπορεί να αποδείξει πραγματικές έκτακτες περιστάσεις.
                </p>
              </div>
            </Card>
          </section>

          <ClaimWingerElSection
            className="mb-12"
            title="Ελέγξτε τη low-cost πτήση σας με το ClaimWinger"
            description="Αν η πτήση σας ήταν με low-cost αεροπορική και θέλετε να δείτε αν υπάρχει ρεαλιστική βάση για αποζημίωση, το ClaimWinger Ελλάδα μπορεί να βοηθήσει με μια πρώτη πρακτική εκτίμηση."
            ctaHref="https://claimwinger.com/el?utm_source=problemlot-el&utm_medium=embedded_cta&utm_campaign=low_cost_compensation"
            ctaLabel="Έλεγχος με το ClaimWinger"
            loadingLabel="Φορτώνεται η φόρμα ClaimWinger..."
            loadingDescription="Σε λίγο θα εμφανιστεί η ελληνική φόρμα για έλεγχο της πτήσης σας."
            placement="el_blog_low_cost_compensation_embed"
          />

          <section className="mb-12">
            <h2 className="mb-6 text-3xl font-bold text-slate-900 dark:text-white">
              1. Το EU261 δεν κάνει εξαίρεση για low-cost
            </h2>
            <div className="space-y-4 text-base leading-7 text-slate-700 dark:text-slate-300">
              <p>
                Ο κανονισμός δεν λέει ότι μια low-cost αεροπορική μπορεί να λειτουργεί με χαμηλότερα
                δικαιώματα για τον επιβάτη. Το βασικό ερώτημα είναι αν η πτήση εμπίπτει στο πεδίο
                εφαρμογής του EU261 και αν το συγκεκριμένο περιστατικό περνά τα σχετικά όρια.
              </p>
              <p>
                Άρα, το επιχείρημα «ήταν φθηνό εισιτήριο, οπότε δεν έχεις δικαιώματα» δεν είναι
                σωστό. Η τιμή του εισιτηρίου είναι εμπορικό θέμα, όχι κριτήριο για το αν υπάρχει
                αποζημίωση.
              </p>
            </div>
          </section>

          <section className="mb-12">
            <h2 className="mb-6 text-3xl font-bold text-slate-900 dark:text-white">
              2. Τι μετράει πραγματικά σε μια low-cost υπόθεση
            </h2>
            <div className="grid gap-4 md:grid-cols-2">
              <Card className="p-6">
                <div className="mb-3 flex items-center gap-2 text-slate-900 dark:text-white">
                  <Plane className="h-5 w-5 text-sky-600" />
                  <h3 className="text-xl font-semibold">Η διαδρομή και ο αερομεταφορέας</h3>
                </div>
                <p className="text-sm leading-6 text-slate-600 dark:text-slate-300">
                  Η βασική ερώτηση είναι αν η πτήση ξεκίνησε από ΕΕ ή αν εμπλέκεται ευρωπαϊκός
                  αερομεταφορέας σε σχετική διαδρομή. Αυτά καθορίζουν τη νομική βάση, όχι η χαμηλή
                  τιμή.
                </p>
              </Card>
              <Card className="p-6">
                <div className="mb-3 flex items-center gap-2 text-slate-900 dark:text-white">
                  <Clock className="h-5 w-5 text-sky-600" />
                  <h3 className="text-xl font-semibold">Η τελική άφιξη</h3>
                </div>
                <p className="text-sm leading-6 text-slate-600 dark:text-slate-300">
                  Στις καθυστερήσεις, κρίσιμο είναι το πότε φτάσατε στον τελικό προορισμό, όχι αν η
                  low-cost πτήση έφυγε απλώς αργότερα από το πρόγραμμα.
                </p>
              </Card>
              <Card className="p-6">
                <div className="mb-3 flex items-center gap-2 text-slate-900 dark:text-white">
                  <AlertCircle className="h-5 w-5 text-sky-600" />
                  <h3 className="text-xl font-semibold">Οι έκτακτες περιστάσεις</h3>
                </div>
                <p className="text-sm leading-6 text-slate-600 dark:text-slate-300">
                  Η low-cost αεροπορική δεν έχει αυτόματα ειδική ασυλία. Αν επικαλείται έκτακτες
                  περιστάσεις, πρέπει να μπορεί να τις στηρίξει επαρκώς.
                </p>
              </Card>
              <Card className="p-6">
                <div className="mb-3 flex items-center gap-2 text-slate-900 dark:text-white">
                  <Euro className="h-5 w-5 text-sky-600" />
                  <h3 className="text-xl font-semibold">Το ποσό δεν εξαρτάται από την τιμή</h3>
                </div>
                <p className="text-sm leading-6 text-slate-600 dark:text-slate-300">
                  Εφόσον η υπόθεση περνά στο EU261, τα ποσά βασίζονται στην κατηγορία της διαδρομής
                  και όχι στο αν πληρώσατε 30 ή 300 ευρώ.
                </p>
              </Card>
            </div>
          </section>

          <section className="mb-12">
            <h2 className="mb-6 text-3xl font-bold text-slate-900 dark:text-white">
              3. Το πιο συχνό μπέρδεμα: low-cost δεν σημαίνει weaker claim
            </h2>
            <div className="space-y-4 text-base leading-7 text-slate-700 dark:text-slate-300">
              <p>
                Εκεί που δημιουργείται συχνά η σύγχυση είναι ότι οι low-cost αεροπορικές λειτουργούν
                με διαφορετικά εμπορικά μοντέλα, επιπλέον χρεώσεις και πιο αυστηρά flows αλλαγών ή
                επανεκδόσεων. Όμως αυτά δεν είναι το ίδιο με τα βασικά δικαιώματα του επιβάτη όταν
                η πτήση καθυστερεί ή ακυρώνεται.
              </p>
              <p>
                Μπορεί μια low-cost υπόθεση να είναι δύσκολη στην πράξη, αλλά όχι επειδή το δίκαιο
                δίνει λιγότερη προστασία. Δύσκολη μπορεί να γίνει λόγω τεκμηρίωσης, επικοινωνίας ή
                δομής της διαδρομής, όχι λόγω της ετικέτας “low-cost”.
              </p>
            </div>
          </section>

          <section className="mb-12">
            <h2 className="mb-6 text-3xl font-bold text-slate-900 dark:text-white">
              4. Πότε μια low-cost υπόθεση μπορεί να είναι πιο αδύναμη
            </h2>
            <div className="grid gap-4 md:grid-cols-2">
              {[
                "όταν η πτήση δεν εμπίπτει τελικά στο EU261",
                "όταν η τελική άφιξη δεν φτάνει το σχετικό όριο",
                "όταν υπάρχουν ξεχωριστές κρατήσεις και όχι μία ενιαία διαδρομή",
                "όταν η αεροπορική αποδεικνύει πραγματικές έκτακτες περιστάσεις",
              ].map((item) => (
                <Card key={item} className="p-5">
                  <div className="flex items-start gap-3">
                    <AlertCircle className="mt-1 h-5 w-5 text-amber-600" />
                    <p className="text-sm leading-6 text-slate-700 dark:text-slate-300">{item}</p>
                  </div>
                </Card>
              ))}
            </div>
          </section>

          <section className="mb-12">
            <Card className="border-sky-200 bg-sky-50 p-8 dark:border-sky-900 dark:bg-sky-950/20">
              <h2 className="mb-4 text-2xl font-bold text-slate-900 dark:text-white">
                Θέλετε μια πρακτική εκτίμηση για τη low-cost πτήση σας;
              </h2>
              <p className="mb-6 text-base leading-7 text-slate-700 dark:text-slate-300">
                Αν η πτήση σας ήταν με low-cost αεροπορική και θέλετε να ξέρετε αν το περιστατικό
                φαίνεται να μπαίνει σε αποζημίωση, το πιο σωστό είναι να ελεγχθούν η διαδρομή, το
                είδος του προβλήματος και η τελική άφιξη, όχι η τιμή του εισιτηρίου.
              </p>
              <div className="flex flex-wrap gap-3">
                <Button asChild size="lg" className="bg-sky-600 hover:bg-sky-700">
                  <a
                    href={claimWingerHomeHref}
                    target="_blank"
                    rel="noopener noreferrer"
                    onClick={() =>
                      trackClaimClick(
                        "el_blog_low_cost_compensation_home_button",
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
                        "el_blog_low_cost_compensation_delayed_button",
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
                    Βασικός οδηγός για το πότε μια καθυστέρηση αρχίζει να δείχνει προς αποζημίωση.
                  </p>
                </Link>
                <a
                  href={cancelledFlightHref}
                  target="_blank"
                  rel="noopener noreferrer"
                  onClick={() =>
                    trackClaimClick(
                      "el_blog_low_cost_compensation_inline_cancelled_link",
                      cancelledFlightHref,
                    )
                  }
                  className="rounded-2xl border border-slate-200 p-5 transition-colors hover:border-sky-400 hover:bg-sky-50 dark:border-slate-700 dark:hover:border-sky-700 dark:hover:bg-sky-950/20"
                >
                  <h3 className="mb-2 font-semibold text-slate-900 dark:text-white">
                    Φόρμα ClaimWinger για ακυρωμένη πτήση
                  </h3>
                  <p className="text-sm text-slate-600 dark:text-slate-300">
                    Αν η low-cost υπόθεσή σας αφορά ακύρωση, εδώ είναι η σωστή είσοδος.
                  </p>
                </a>
                <a
                  href={delayedFlightHref}
                  target="_blank"
                  rel="noopener noreferrer"
                  onClick={() =>
                    trackClaimClick(
                      "el_blog_low_cost_compensation_inline_delayed_link",
                      delayedFlightHref,
                    )
                  }
                  className="rounded-2xl border border-slate-200 p-5 transition-colors hover:border-sky-400 hover:bg-sky-50 dark:border-slate-700 dark:hover:border-sky-700 dark:hover:bg-sky-950/20"
                >
                  <h3 className="mb-2 font-semibold text-slate-900 dark:text-white">
                    Φόρμα ClaimWinger για καθυστερημένη πτήση
                  </h3>
                  <p className="text-sm text-slate-600 dark:text-slate-300">
                    Αν το περιστατικό αφορά μεγάλη καθυστέρηση, μπορείτε να ξεκινήσετε από εδώ.
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
