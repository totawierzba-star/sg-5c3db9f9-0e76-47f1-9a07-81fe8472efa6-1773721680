import Link from "next/link";
import { ArrowRight, CheckCircle2, Clock, Euro, FileText, ShieldCheck } from "lucide-react";

import { ClaimWingerElSection } from "@/components/ClaimWingerElSection";
import { LayoutEl } from "@/components/LayoutEl";
import { SEO } from "@/components/SEO";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { pushClaimWingerEvent } from "@/lib/claimwingerTracking";

const articleUrl =
  "https://problemlot.com/el/blog/poses-ores-kathysterisis-chreiazontai-gia-apozimiosi";
const delayedFlightHref =
  "https://claimwinger.com/el/kathysterimeni-ptisi?utm_source=problemlot-el&utm_medium=article_link&utm_campaign=hours_delay_threshold";
const cancelledFlightHref =
  "https://claimwinger.com/el/akyromeni-ptisi?utm_source=problemlot-el&utm_medium=article_link&utm_campaign=hours_delay_threshold";
const claimWingerHomeHref =
  "https://claimwinger.com/el?utm_source=problemlot-el&utm_medium=article_link&utm_campaign=hours_delay_threshold";

const faqItems = [
  {
    question: "Πόσες ώρες καθυστέρησης χρειάζονται για αποζημίωση;",
    answer:
      "Στις περισσότερες περιπτώσεις, η χρηματική αποζημίωση εξετάζεται όταν φτάνετε στον τελικό προορισμό με καθυστέρηση 3 ωρών ή περισσότερο, εφόσον η πτήση εμπίπτει στο EU261 και δεν πρόκειται για έκτακτες περιστάσεις.",
  },
  {
    question: "Μετράει η καθυστέρηση στην αναχώρηση ή στην άφιξη;",
    answer:
      "Για την αποζημίωση μετράει κυρίως η καθυστέρηση στην τελική άφιξη. Μια πτήση μπορεί να φύγει αργότερα αλλά να ανακτήσει χρόνο, οπότε δεν δημιουργείται απαραίτητα δικαίωμα αποζημίωσης.",
  },
  {
    question: "Υπάρχει δικαίωμα και κάτω από 3 ώρες;",
    answer:
      "Κάτω από 3 ώρες συνήθως δεν υπάρχει χρηματική αποζημίωση, αλλά μπορεί να υπάρχει δικαίωμα φροντίδας. Σε μεγαλύτερη αναμονή μπορεί να προκύπτουν γεύματα, επικοινωνία, ξενοδοχείο ή ακόμη και επιστροφή χρημάτων σε πολύ μεγάλη καθυστέρηση.",
  },
  {
    question: "Ισχύει το ίδιο και για low-cost πτήσεις;",
    answer:
      "Ναι. Το EU261 δεν κάνει εξαίρεση για low-cost αεροπορικές. Αυτό που μετράει είναι η διαδρομή, ο αερομεταφορέας, η τελική άφιξη και το αν υπάρχουν πραγματικά έκτακτες περιστάσεις.",
  },
];

function trackClaimClick(placement: string, destination: string) {
  pushClaimWingerEvent("claimwinger_cta_click", {
    locale: "el",
    placement,
    destination,
  });
}

export default function DelayHoursCompensationElPage() {
  return (
    <LayoutEl>
      <SEO
        title="Πόσες ώρες καθυστέρησης χρειάζονται για αποζημίωση;"
        description="Μάθετε πότε μια καθυστέρηση πτήσης οδηγεί σε αποζημίωση, γιατί μετράει η τελική άφιξη, τι ισχύει στις ανταποκρίσεις και πότε έχετε μόνο δικαίωμα φροντίδας ή επιστροφής χρημάτων."
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
            headline: "Πόσες ώρες καθυστέρησης χρειάζονται για αποζημίωση;",
            description:
              "Εξήγηση του κανόνα των 3 ωρών, της τελικής άφιξης και των βασικών δικαιωμάτων επιβατών σε καθυστερημένες πτήσεις βάσει EU261.",
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
                name: "Πόσες ώρες καθυστέρησης χρειάζονται για αποζημίωση;",
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
            <span>Πόσες ώρες καθυστέρησης χρειάζονται για αποζημίωση;</span>
          </div>

          <header className="mb-10">
            <div className="mb-4 inline-flex items-center gap-2 rounded-full bg-sky-100 px-4 py-2 text-sm font-medium text-sky-700 dark:bg-sky-900/30 dark:text-sky-300">
              Ο πρώτος βασικός οδηγός στα ελληνικά
            </div>
            <h1 className="mb-5 text-4xl font-bold tracking-tight text-slate-900 dark:text-white md:text-5xl">
              Πόσες ώρες καθυστέρησης χρειάζονται για αποζημίωση;
            </h1>
            <p className="max-w-3xl text-xl leading-8 text-slate-600 dark:text-slate-300">
              Η πιο συνηθισμένη ερώτηση των επιβατών ακούγεται απλή, αλλά έχει μία βασική παγίδα:
              για την αποζημίωση δεν κοιτάμε μόνο πόσο άργησε να φύγει το αεροπλάνο, αλλά κυρίως
              πόσο αργότερα φτάσατε στον τελικό προορισμό.
            </p>

            <div className="mt-6 flex flex-wrap gap-4 text-sm text-slate-600 dark:text-slate-400">
              <div className="flex items-center gap-2">
                <Clock className="h-4 w-4" />
                <span>Ενημέρωση: 13 Απριλίου 2026</span>
              </div>
              <div className="flex items-center gap-2">
                <FileText className="h-4 w-4" />
                <span>Χρόνος ανάγνωσης: 9 λεπτά</span>
              </div>
            </div>
          </header>

          <section className="mb-10">
            <Card className="border-sky-200 bg-gradient-to-br from-sky-600 to-indigo-700 p-8 text-white shadow-xl dark:border-sky-800">
              <h2 className="mb-4 text-2xl font-bold">Σύντομη απάντηση</h2>
              <div className="space-y-3 text-base leading-7 text-sky-50">
                <p>
                  Στις περισσότερες περιπτώσεις, η χρηματική αποζημίωση εξετάζεται όταν η
                  <strong> τελική άφιξη</strong> καθυστερεί <strong>3 ώρες ή περισσότερο</strong>.
                </p>
                <p>
                  Το βασικό λάθος είναι να κοιτάμε μόνο τον πίνακα αναχωρήσεων. Αν η πτήση φύγει
                  αργά αλλά ανακτήσει χρόνο, δεν προκύπτει αυτόματα αποζημίωση.
                </p>
                <p>
                  Κάτω από 3 ώρες μπορεί να μην υπάρχει χρηματική αποζημίωση, αλλά μπορεί να υπάρχει
                  <strong> δικαίωμα φροντίδας</strong> και, σε ορισμένες περιπτώσεις, επιστροφής
                  χρημάτων.
                </p>
              </div>
            </Card>
          </section>

          <ClaimWingerElSection
            className="mb-12"
            title="Ελέγξτε την καθυστέρηση της πτήσης σας με το ClaimWinger"
            description="Αν θέλετε να περάσετε αμέσως από τη θεωρία στον έλεγχο της υπόθεσης, το ClaimWinger Ελλάδα μπορεί να σας βοηθήσει να δείτε γρήγορα αν η καθυστέρηση φαίνεται να μπαίνει στο πλαίσιο του EU261."
            ctaHref="https://claimwinger.com/el?utm_source=problemlot-el&utm_medium=embedded_cta&utm_campaign=hours_delay_threshold"
            ctaLabel="Έλεγχος με το ClaimWinger"
            loadingLabel="Φορτώνεται η φόρμα ClaimWinger..."
            loadingDescription="Σε λίγο θα εμφανιστεί η ελληνική φόρμα για τον έλεγχο της πτήσης σας."
            placement="el_blog_hours_delay_threshold_embed"
          />

          <section className="mb-12">
            <h2 className="mb-6 text-3xl font-bold text-slate-900 dark:text-white">
              1. Ο βασικός κανόνας των 3 ωρών
            </h2>
            <div className="space-y-4 text-base leading-7 text-slate-700 dark:text-slate-300">
              <p>
                Σύμφωνα με τις επίσημες οδηγίες της ΕΕ για τα δικαιώματα επιβατών αεροπορικών
                μεταφορών, το πιο συνηθισμένο όριο για χρηματική αποζημίωση σε μεγάλη καθυστέρηση
                είναι η άφιξη με <strong>3 ώρες ή περισσότερο</strong> αργότερα στον τελικό προορισμό.
              </p>
              <p>
                Αυτό είναι ιδιαίτερα σημαντικό όταν η πτήση περιλαμβάνει ανταπόκριση. Δεν εξετάζεται
                μόνο το πρώτο σκέλος, αλλά ο χρόνος που φτάσατε στον τελικό προορισμό της ίδιας
                κράτησης.
              </p>
            </div>
          </section>

          <section className="mb-12">
            <h2 className="mb-6 text-3xl font-bold text-slate-900 dark:text-white">
              2. Μετράει η τελική άφιξη, όχι μόνο η αναχώρηση
            </h2>
            <div className="grid gap-4 md:grid-cols-2">
              <Card className="p-6">
                <h3 className="mb-2 text-xl font-semibold text-slate-900 dark:text-white">Τι σημαίνει στην πράξη</h3>
                <p className="text-sm leading-6 text-slate-600 dark:text-slate-300">
                  Αν φύγατε αργά αλλά φτάσατε με μικρότερη τελική καθυστέρηση, το δικαίωμα για αποζημίωση
                  μπορεί να μη δημιουργείται.
                </p>
              </Card>
              <Card className="p-6">
                <h3 className="mb-2 text-xl font-semibold text-slate-900 dark:text-white">Στις ανταποκρίσεις</h3>
                <p className="text-sm leading-6 text-slate-600 dark:text-slate-300">
                  Αν χάσατε επόμενη πτήση και φτάσατε στον τελικό προορισμό με πάνω από 3 ώρες καθυστέρηση,
                  τότε συνήθως αυτή η τελική άφιξη είναι που μετράει.
                </p>
              </Card>
            </div>
          </section>

          <section className="mb-12">
            <h2 className="mb-6 text-3xl font-bold text-slate-900 dark:text-white">
              3. Τι ισχύει όταν η καθυστέρηση είναι μικρότερη
            </h2>
            <div className="space-y-4 text-base leading-7 text-slate-700 dark:text-slate-300">
              <p>
                Κάτω από το όριο των 3 ωρών συνήθως δεν υπάρχει χρηματική αποζημίωση, αλλά αυτό δεν
                σημαίνει ότι δεν υπάρχουν καθόλου δικαιώματα. Η ΕΕ προβλέπει δικαίωμα φροντίδας,
                ανάλογα με τη διάρκεια της αναμονής και την απόσταση της πτήσης.
              </p>
              <p>
                Σε πολύ μεγάλη καθυστέρηση, ειδικά όταν ξεπερνά τις 5 ώρες, μπορεί να προκύπτει και
                δικαίωμα επιστροφής χρημάτων αν επιλέξετε να μην ταξιδέψετε.
              </p>
            </div>
          </section>

          <section className="mb-12">
            <h2 className="mb-6 text-3xl font-bold text-slate-900 dark:text-white">
              4. Τα ποσά της αποζημίωσης
            </h2>
            <div className="grid gap-4 md:grid-cols-3">
              <Card className="p-6 text-center">
                <Euro className="mx-auto mb-3 h-8 w-8 text-sky-600" />
                <div className="mb-1 text-4xl font-extrabold text-slate-900 dark:text-white">250 €</div>
                <p className="text-sm text-slate-600 dark:text-slate-300">πτήσεις έως 1.500 χλμ.</p>
              </Card>
              <Card className="p-6 text-center">
                <Euro className="mx-auto mb-3 h-8 w-8 text-sky-600" />
                <div className="mb-1 text-4xl font-extrabold text-slate-900 dark:text-white">400 €</div>
                <p className="text-sm text-slate-600 dark:text-slate-300">
                  πάνω από 1.500 χλμ. εντός ΕΕ και άλλες έως 3.500 χλμ.
                </p>
              </Card>
              <Card className="p-6 text-center">
                <Euro className="mx-auto mb-3 h-8 w-8 text-sky-600" />
                <div className="mb-1 text-4xl font-extrabold text-slate-900 dark:text-white">600 €</div>
                <p className="text-sm text-slate-600 dark:text-slate-300">πάνω από 3.500 χλμ.</p>
              </Card>
            </div>
          </section>

          <section className="mb-12">
            <h2 className="mb-6 text-3xl font-bold text-slate-900 dark:text-white">
              5. Πότε το όριο των 3 ωρών δεν αρκεί από μόνο του
            </h2>
            <div className="grid gap-4 md:grid-cols-2">
              {[
                "όταν η αεροπορική αποδείξει πραγματικές έκτακτες περιστάσεις",
                "όταν η πτήση δεν εμπίπτει στο πεδίο εφαρμογής του EU261",
                "όταν το πρόβλημα αφορά ξεχωριστές κρατήσεις και όχι ενιαία διαδρομή",
                "όταν η τελική άφιξη δεν ξεπερνά τελικά το όριο που απαιτείται",
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
                Η πιο πρακτική επόμενη κίνηση
              </h2>
              <p className="mb-6 text-base leading-7 text-slate-700 dark:text-slate-300">
                Αν ξέρετε ήδη ότι η καθυστέρηση ξεπέρασε τις 3 ώρες στην τελική άφιξη, το επόμενο
                βήμα δεν είναι να μαντέψετε μόνοι σας αν η αεροπορική θα επικαλεστεί σωστά έκτακτες
                περιστάσεις. Είναι να ελέγξετε γρήγορα την υπόθεση με πραγματικά στοιχεία πτήσης.
              </p>
              <div className="flex flex-wrap gap-3">
                <Button asChild size="lg" className="bg-sky-600 hover:bg-sky-700">
                  <a
                    href={claimWingerHomeHref}
                    target="_blank"
                    rel="noopener noreferrer"
                    onClick={() =>
                      trackClaimClick("el_hours_delay_final_cta_home", claimWingerHomeHref)
                    }
                  >
                    Έλεγχος υπόθεσης με ClaimWinger
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </a>
                </Button>
                <Button asChild size="lg" variant="outline">
                  <a
                    href={delayedFlightHref}
                    target="_blank"
                    rel="noopener noreferrer"
                    onClick={() =>
                      trackClaimClick("el_hours_delay_final_cta_delay", delayedFlightHref)
                    }
                  >
                    Φόρμα για καθυστέρηση
                  </a>
                </Button>
                <Button asChild size="lg" variant="outline">
                  <a
                    href={cancelledFlightHref}
                    target="_blank"
                    rel="noopener noreferrer"
                    onClick={() =>
                      trackClaimClick("el_hours_delay_final_cta_cancel", cancelledFlightHref)
                    }
                  >
                    Αν τελικά ήταν ακύρωση
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
                <details
                  key={item.question}
                  className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm dark:border-slate-700 dark:bg-slate-900"
                >
                  <summary className="cursor-pointer text-lg font-semibold text-slate-900 dark:text-white">
                    {item.question}
                  </summary>
                  <p className="mt-3 text-sm leading-6 text-slate-600 dark:text-slate-300">
                    {item.answer}
                  </p>
                </details>
              ))}
            </div>
          </section>
        </div>
      </article>
    </LayoutEl>
  );
}
