import Link from "next/link";
import {
  AlertCircle,
  ArrowRight,
  Clock,
  Euro,
  FileText,
  PlaneTakeoff,
} from "lucide-react";

import { ClaimWingerElSection } from "@/components/ClaimWingerElSection";
import { LayoutEl } from "@/components/LayoutEl";
import { SEO } from "@/components/SEO";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { pushClaimWingerEvent } from "@/lib/claimwingerTracking";

const articleUrl =
  "https://problemlot.com/el/blog/posa-chrimata-pairno-gia-kathysterisi-3-oron";
const claimWingerHomeHref =
  "https://claimwinger.com/el?utm_source=problemlot-el&utm_medium=article_link&utm_campaign=3_hour_delay_amount";
const delayedFlightHref =
  "https://claimwinger.com/el/kathysterimeni-ptisi?utm_source=problemlot-el&utm_medium=article_link&utm_campaign=3_hour_delay_amount";
const cancelledFlightHref =
  "https://claimwinger.com/el/akyromeni-ptisi?utm_source=problemlot-el&utm_medium=article_link&utm_campaign=3_hour_delay_amount";

const faqItems = [
  {
    question: "Πόσα χρήματα παίρνω για καθυστέρηση 3 ωρών;",
    answer:
      "Συνήθως 250 €, 400 € ή 600 €, ανάλογα με την απόσταση της πτήσης και εφόσον ισχύει το EU261, η καθυστέρηση στην τελική άφιξη είναι τουλάχιστον 3 ώρες και η αεροπορική δεν αποδείξει έκτακτες περιστάσεις.",
  },
  {
    question: "Είναι πάντα 250 € όταν η πτήση καθυστερεί 3 ώρες;",
    answer:
      "Όχι. Τα 250 € είναι το πιο συχνό ποσό για μικρότερες πτήσεις έως 1.500 χλμ. Σε μεγαλύτερες αποστάσεις το ποσό μπορεί να είναι 400 € ή 600 €.",
  },
  {
    question: "Μετράει η ώρα αναχώρησης ή η ώρα άφιξης;",
    answer:
      "Για τη χρηματική αποζημίωση μετράει κυρίως η καθυστέρηση στην τελική άφιξη στον προορισμό σας. Η καθυστέρηση στην απογείωση από μόνη της δεν αρκεί πάντα.",
  },
  {
    question: "Υπάρχουν περιπτώσεις όπου δεν πληρώνεται αποζημίωση;",
    answer:
      "Ναι. Αν η αεροπορική αποδείξει πραγματικές έκτακτες περιστάσεις ή αν η πτήση δεν εμπίπτει στο πεδίο εφαρμογής του EU261, μπορεί να μην προκύπτει δικαίωμα αποζημίωσης.",
  },
];

function trackClaimClick(placement: string, destination: string) {
  pushClaimWingerEvent("claimwinger_cta_click", {
    locale: "el",
    placement,
    destination,
  });
}

export default function ThreeHourDelayAmountElPage() {
  return (
    <LayoutEl>
      <SEO
        title="Πόσα χρήματα παίρνω για καθυστέρηση 3 ωρών;"
        description="Δείτε πότε μια καθυστέρηση 3 ωρών οδηγεί σε αποζημίωση 250 €, 400 € ή 600 €, πότε μετράει η τελική άφιξη και πότε η αεροπορική μπορεί να αρνηθεί πληρωμή."
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
            headline: "Πόσα χρήματα παίρνω για καθυστέρηση 3 ωρών;",
            description:
              "Εξηγούμε πότε η καθυστέρηση 3 ωρών οδηγεί σε 250 €, 400 € ή 600 € και γιατί μετράει η τελική άφιξη στον προορισμό.",
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
                name: "Πόσα χρήματα παίρνω για καθυστέρηση 3 ωρών;",
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
            <span>Πόσα χρήματα παίρνω για καθυστέρηση 3 ωρών;</span>
          </div>

          <header className="mb-10">
            <div className="mb-4 inline-flex items-center gap-2 rounded-full bg-sky-100 px-4 py-2 text-sm font-medium text-sky-700 dark:bg-sky-900/30 dark:text-sky-300">
              Πρακτικός οδηγός αποζημίωσης πτήσης
            </div>
            <h1 className="mb-5 text-4xl font-bold tracking-tight text-slate-900 dark:text-white md:text-5xl">
              Πόσα χρήματα παίρνω για καθυστέρηση 3 ωρών;
            </h1>
            <p className="max-w-3xl text-xl leading-8 text-slate-600 dark:text-slate-300">
              Η σύντομη απάντηση είναι ότι μπορεί να μιλάμε για <strong>250 €</strong>,
              <strong> 400 €</strong> ή <strong>600 €</strong>. Η σωστή απάντηση όμως δεν εξαρτάται
              μόνο από το ότι η καθυστέρηση έφτασε τις 3 ώρες, αλλά και από την απόσταση της
              διαδρομής, τον τελικό προορισμό και το αν η υπόθεση καλύπτεται πραγματικά από το
              EU261.
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
                  Αν φτάσατε στον τελικό προορισμό με <strong>3 ώρες ή περισσότερο</strong>
                  καθυστέρηση, η αποζημίωση μπορεί να είναι <strong>250 €</strong>,
                  <strong> 400 €</strong> ή <strong>600 €</strong>.
                </p>
                <p>
                  Το ποσό εξαρτάται κυρίως από την <strong>απόσταση της πτήσης</strong> και από το
                  αν η πτήση εμπίπτει στο <strong>EU261</strong>.
                </p>
                <p>
                  Η καθυστέρηση των 3 ωρών από μόνη της δεν αρκεί αν η αεροπορική αποδείξει
                  πραγματικές <strong>έκτακτες περιστάσεις</strong>.
                </p>
              </div>
            </Card>
          </section>

          <ClaimWingerElSection
            className="mb-12"
            title="Μάθετε γρήγορα αν η καθυστέρηση των 3 ωρών δίνει βάση για αποζημίωση"
            description="Αν θέλετε να περάσετε αμέσως από τη θεωρία στον έλεγχο της υπόθεσης, το ClaimWinger Ελλάδα μπορεί να σας βοηθήσει να δείτε αν η πτήση σας δείχνει προς αποζημίωση και ποιο ποσό έχει νόημα να εξετάσετε."
            ctaHref="https://claimwinger.com/el?utm_source=problemlot-el&utm_medium=embedded_cta&utm_campaign=3_hour_delay_amount"
            ctaLabel="Έλεγχος με το ClaimWinger"
            loadingLabel="Φορτώνεται η φόρμα ClaimWinger..."
            loadingDescription="Σε λίγο θα εμφανιστεί η ελληνική φόρμα για έλεγχο της καθυστέρησης."
            placement="el_blog_3_hour_delay_amount_embed"
          />

          <section className="mb-12">
            <h2 className="mb-6 text-3xl font-bold text-slate-900 dark:text-white">
              1. Τα βασικά ποσά: 250 €, 400 € ή 600 €
            </h2>
            <div className="grid gap-4 md:grid-cols-3">
              <Card className="p-6 text-center">
                <Euro className="mx-auto mb-3 h-8 w-8 text-sky-600" />
                <div className="mb-1 text-4xl font-extrabold text-slate-900 dark:text-white">
                  250 €
                </div>
                <p className="text-sm text-slate-600 dark:text-slate-300">
                  Συνήθως για πτήσεις έως 1.500 χλμ.
                </p>
              </Card>
              <Card className="p-6 text-center">
                <Euro className="mx-auto mb-3 h-8 w-8 text-sky-600" />
                <div className="mb-1 text-4xl font-extrabold text-slate-900 dark:text-white">
                  400 €
                </div>
                <p className="text-sm text-slate-600 dark:text-slate-300">
                  Συνήθως για μεγαλύτερες ενδοευρωπαϊκές πτήσεις και άλλες διαδρομές έως 3.500 χλμ.
                </p>
              </Card>
              <Card className="p-6 text-center">
                <Euro className="mx-auto mb-3 h-8 w-8 text-sky-600" />
                <div className="mb-1 text-4xl font-extrabold text-slate-900 dark:text-white">
                  600 €
                </div>
                <p className="text-sm text-slate-600 dark:text-slate-300">
                  Συνήθως για μεγάλες πτήσεις άνω των 3.500 χλμ.
                </p>
              </Card>
            </div>
          </section>

          <section className="mb-12">
            <h2 className="mb-6 text-3xl font-bold text-slate-900 dark:text-white">
              2. Γιατί δεν είναι πάντα το ίδιο ποσό;
            </h2>
            <div className="space-y-4 text-base leading-7 text-slate-700 dark:text-slate-300">
              <p>
                Η πιο συνηθισμένη παρανόηση είναι ότι οι 3 ώρες σημαίνουν αυτόματα ένα σταθερό
                ποσό. Στην πράξη, το EU261 δεν πληρώνει με βάση μόνο τη διάρκεια της καθυστέρησης,
                αλλά και με βάση την κατηγορία της διαδρομής.
              </p>
              <p>
                Έτσι, δύο επιβάτες με ίδια τελική καθυστέρηση μπορούν να δικαιούνται διαφορετικό
                ποσό. Ένας επιβάτης σε σύντομη ευρωπαϊκή πτήση μπορεί να πέφτει στη ζώνη των
                <strong> 250 €</strong>, ενώ ένας επιβάτης σε μεγάλη διηπειρωτική διαδρομή μπορεί να
                φτάνει στα <strong>600 €</strong>.
              </p>
              <p>
                Γι’ αυτό είναι σημαντικό να μη βασίζεστε σε γενικά posts ή σε υπεραπλουστευμένες
                απαντήσεις. Το σωστό ποσό εξαρτάται από τη συγκεκριμένη διαδρομή και από το πώς
                διαβάζεται η υπόθεση σύμφωνα με το EU261.
              </p>
            </div>
          </section>

          <section className="mb-12">
            <h2 className="mb-6 text-3xl font-bold text-slate-900 dark:text-white">
              3. Το κρίσιμο σημείο είναι η τελική άφιξη
            </h2>
            <div className="grid gap-4 md:grid-cols-2">
              <Card className="p-6">
                <div className="mb-3 flex items-center gap-2 text-slate-900 dark:text-white">
                  <PlaneTakeoff className="h-5 w-5 text-sky-600" />
                  <h3 className="text-xl font-semibold">Όχι μόνο η απογείωση</h3>
                </div>
                <p className="text-sm leading-6 text-slate-600 dark:text-slate-300">
                  Μια πτήση μπορεί να απογειωθεί με σημαντική καθυστέρηση αλλά να κερδίσει χρόνο
                  στη διαδρομή. Σε αυτή την περίπτωση, η τελική άφιξη μπορεί να πέσει κάτω από το
                  όριο που απαιτείται για αποζημίωση.
                </p>
              </Card>
              <Card className="p-6">
                <div className="mb-3 flex items-center gap-2 text-slate-900 dark:text-white">
                  <Clock className="h-5 w-5 text-sky-600" />
                  <h3 className="text-xl font-semibold">Ιδίως στις ανταποκρίσεις</h3>
                </div>
                <p className="text-sm leading-6 text-slate-600 dark:text-slate-300">
                  Αν η καθυστέρηση σε ένα σκέλος σάς έκανε να χάσετε ανταπόκριση, συνήθως μετράει η
                  ώρα άφιξης στον τελικό προορισμό της ίδιας κράτησης, όχι μόνο το πρώτο segment.
                </p>
              </Card>
            </div>
          </section>

          <section className="mb-12">
            <h2 className="mb-6 text-3xl font-bold text-slate-900 dark:text-white">
              4. Πότε οι 3 ώρες δεν οδηγούν τελικά σε πληρωμή
            </h2>
            <div className="grid gap-4 md:grid-cols-2">
              {[
                "όταν η πτήση δεν εμπίπτει στο πεδίο εφαρμογής του EU261",
                "όταν η αεροπορική αποδείξει πραγματικές έκτακτες περιστάσεις",
                "όταν η τελική άφιξη δεν ξεπερνά τελικά το όριο που απαιτείται",
                "όταν ο επιβάτης διαβάζει λάθος την υπόθεση με βάση ξεχωριστές κρατήσεις",
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
            <h2 className="mb-6 text-3xl font-bold text-slate-900 dark:text-white">
              5. Τι γίνεται με low-cost, charter και οικογενειακές κρατήσεις;
            </h2>
            <div className="space-y-4 text-base leading-7 text-slate-700 dark:text-slate-300">
              <p>
                Το ποσό αποζημίωσης δεν εξαρτάται από το αν πετάξατε με low-cost ή με ακριβότερη
                αεροπορική. Το EU261 δεν κάνει τέτοια διάκριση. Αυτό που αλλάζει είναι η διαδρομή,
                ο αερομεταφορέας, το αν πρόκειται για μία ενιαία κράτηση και το αν η αεροπορική
                αποδεικνύει νόμιμη εξαίρεση.
              </p>
              <p>
                Το ίδιο ισχύει και για οικογενειακές κρατήσεις. Αν πληρούνται οι προϋποθέσεις, το
                δικαίωμα συνήθως εξετάζεται <strong>ανά επιβάτη</strong>, όχι ανά κράτηση.
              </p>
            </div>
          </section>

          <section className="mb-12">
            <Card className="border-sky-200 bg-sky-50 p-8 dark:border-sky-900 dark:bg-sky-950/20">
              <h2 className="mb-4 text-2xl font-bold text-slate-900 dark:text-white">
                Θέλετε μια γρήγορη πρακτική εκτίμηση;
              </h2>
              <p className="mb-6 text-base leading-7 text-slate-700 dark:text-slate-300">
                Αν γνωρίζετε ήδη ότι η τελική καθυστέρηση πλησίασε ή ξεπέρασε τις 3 ώρες, το επόμενο
                βήμα είναι να ελέγξετε αν η πτήση σας φαίνεται να μπαίνει στο σωστό ποσό και αν η
                υπόθεση δείχνει καθαρή ή πιο αμφισβητήσιμη.
              </p>
              <div className="flex flex-wrap gap-3">
                <Button asChild size="lg" className="bg-sky-600 hover:bg-sky-700">
                  <a
                    href={delayedFlightHref}
                    target="_blank"
                    rel="noopener noreferrer"
                    onClick={() =>
                      trackClaimClick("el_blog_3_hour_delay_amount_delayed_button", delayedFlightHref)
                    }
                  >
                    Έλεγχος καθυστερημένης πτήσης
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </a>
                </Button>
                <Button asChild size="lg" variant="outline">
                  <a
                    href={claimWingerHomeHref}
                    target="_blank"
                    rel="noopener noreferrer"
                    onClick={() =>
                      trackClaimClick("el_blog_3_hour_delay_amount_home_button", claimWingerHomeHref)
                    }
                  >
                    Άνοιγμα ClaimWinger
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
                Δείτε και τα επόμενα βήματα
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
                    Η γενική βάση για το όριο των 3 ωρών και τη λογική της τελικής άφιξης.
                  </p>
                </Link>
                <a
                  href={delayedFlightHref}
                  target="_blank"
                  rel="noopener noreferrer"
                  onClick={() =>
                    trackClaimClick("el_blog_3_hour_delay_amount_inline_delayed_link", delayedFlightHref)
                  }
                  className="rounded-2xl border border-slate-200 p-5 transition-colors hover:border-sky-400 hover:bg-sky-50 dark:border-slate-700 dark:hover:border-sky-700 dark:hover:bg-sky-950/20"
                >
                  <h3 className="mb-2 font-semibold text-slate-900 dark:text-white">
                    Φόρμα ClaimWinger για καθυστερημένη πτήση
                  </h3>
                  <p className="text-sm text-slate-600 dark:text-slate-300">
                    Γρήγορος έλεγχος αν η δική σας υπόθεση φαίνεται να οδηγεί σε αποζημίωση.
                  </p>
                </a>
                <a
                  href={cancelledFlightHref}
                  target="_blank"
                  rel="noopener noreferrer"
                  onClick={() =>
                    trackClaimClick(
                      "el_blog_3_hour_delay_amount_inline_cancelled_link",
                      cancelledFlightHref,
                    )
                  }
                  className="rounded-2xl border border-slate-200 p-5 transition-colors hover:border-sky-400 hover:bg-sky-50 dark:border-slate-700 dark:hover:border-sky-700 dark:hover:bg-sky-950/20"
                >
                  <h3 className="mb-2 font-semibold text-slate-900 dark:text-white">
                    Τι ισχύει στις ακυρωμένες πτήσεις
                  </h3>
                  <p className="text-sm text-slate-600 dark:text-slate-300">
                    Ξεχωριστός οδηγός για refund, rerouting και αποζημίωση όταν η πτήση ακυρώνεται.
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
