import Link from "next/link";
import {
  AlertCircle,
  ArrowRight,
  CalendarClock,
  Clock,
  Euro,
  FileText,
  RefreshCw,
} from "lucide-react";

import { ClaimWingerElSection } from "@/components/ClaimWingerElSection";
import { LayoutEl } from "@/components/LayoutEl";
import { SEO } from "@/components/SEO";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { pushClaimWingerEvent } from "@/lib/claimwingerTracking";

const articleUrl =
  "https://problemlot.com/el/blog/posa-chrimata-pairno-gia-akyromeni-ptisi";
const claimWingerHomeHref =
  "https://claimwinger.com/el?utm_source=problemlot-el&utm_medium=article_link&utm_campaign=cancelled_flight_amount";
const delayedFlightHref =
  "https://claimwinger.com/el/kathysterimeni-ptisi?utm_source=problemlot-el&utm_medium=article_link&utm_campaign=cancelled_flight_amount";
const cancelledFlightHref =
  "https://claimwinger.com/el/akyromeni-ptisi?utm_source=problemlot-el&utm_medium=article_link&utm_campaign=cancelled_flight_amount";

const faqItems = [
  {
    question: "Πόσα χρήματα παίρνω για ακυρωμένη πτήση;",
    answer:
      "Συνήθως 250 €, 400 € ή 600 €, ανάλογα με την απόσταση της πτήσης, εφόσον η ακύρωση εμπίπτει στο EU261, ενημερωθήκατε λιγότερο από 14 ημέρες πριν και η αεροπορική δεν αποδείξει έκτακτες περιστάσεις.",
  },
  {
    question: "Αν με έβαλαν σε άλλη πτήση, χάνω την αποζημίωση;",
    answer:
      "Όχι απαραίτητα. Ανάλογα με το πότε ενημερωθήκατε και πόσο κοντά φτάσατε στην αρχική ώρα άφιξης, μπορεί να παραμένει δικαίωμα αποζημίωσης, να μειωθεί το ποσό κατά 50% ή να μην οφείλεται αποζημίωση.",
  },
  {
    question: "Ο κανόνας των 14 ημερών σημαίνει ότι πάντα πληρώνομαι;",
    answer:
      "Όχι. Το ότι ενημερωθήκατε λιγότερο από 14 ημέρες πριν είναι σημαντικό, αλλά πρέπει επίσης να εξεταστεί το rerouting που προσφέρθηκε και το αν η αεροπορική αποδεικνύει πραγματικές έκτακτες περιστάσεις.",
  },
  {
    question: "Εκτός από αποζημίωση, μπορώ να ζητήσω και refund;",
    answer:
      "Ναι, σε ορισμένες περιπτώσεις μπορείτε να επιλέξετε επιστροφή χρημάτων αντί για μεταφορά με άλλη πτήση. Το refund όμως δεν είναι το ίδιο με τη χρηματική αποζημίωση και τα δύο θέματα πρέπει να διαβάζονται χωριστά.",
  },
];

function trackClaimClick(placement: string, destination: string) {
  pushClaimWingerEvent("claimwinger_cta_click", {
    locale: "el",
    placement,
    destination,
  });
}

export default function CancelledFlightAmountElPage() {
  return (
    <LayoutEl>
      <SEO
        title="Πόσα χρήματα παίρνω για ακυρωμένη πτήση;"
        description="Δείτε πότε μια ακυρωμένη πτήση μπορεί να οδηγεί σε 250 €, 400 € ή 600 €, πότε ισχύει ο κανόνας των 14 ημερών και πώς το rerouting μπορεί να αλλάξει το αποτέλεσμα."
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
            headline: "Πόσα χρήματα παίρνω για ακυρωμένη πτήση;",
            description:
              "Εξηγούμε πότε μια ακυρωμένη πτήση οδηγεί σε 250 €, 400 € ή 600 €, πώς λειτουργεί ο κανόνας των 14 ημερών και τι αλλάζει με το rerouting.",
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
                name: "Πόσα χρήματα παίρνω για ακυρωμένη πτήση;",
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
            <span>Πόσα χρήματα παίρνω για ακυρωμένη πτήση;</span>
          </div>

          <header className="mb-10">
            <div className="mb-4 inline-flex items-center gap-2 rounded-full bg-sky-100 px-4 py-2 text-sm font-medium text-sky-700 dark:bg-sky-900/30 dark:text-sky-300">
              Βασικός οδηγός για ακυρωμένες πτήσεις
            </div>
            <h1 className="mb-5 text-4xl font-bold tracking-tight text-slate-900 dark:text-white md:text-5xl">
              Πόσα χρήματα παίρνω για ακυρωμένη πτήση;
            </h1>
            <p className="max-w-3xl text-xl leading-8 text-slate-600 dark:text-slate-300">
              Η σύντομη απάντηση είναι ότι μπορεί να μιλάμε για <strong>250 €</strong>,
              <strong> 400 €</strong> ή <strong>600 €</strong>. Στις ακυρωμένες πτήσεις όμως δεν
              αρκεί να ξέρουμε μόνο την απόσταση. Παίζουν σημαντικό ρόλο ο κανόνας των
              <strong> 14 ημερών</strong>, το αν σας προσφέρθηκε <strong>άλλη πτήση</strong> και το
              πόσο κοντά φτάσατε τελικά στην αρχικά προγραμματισμένη άφιξη.
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
                  Αν η πτήση σας ακυρώθηκε, η αποζημίωση μπορεί να είναι <strong>250 €</strong>,
                  <strong> 400 €</strong> ή <strong>600 €</strong>.
                </p>
                <p>
                  Το αποτέλεσμα εξαρτάται από την <strong>απόσταση της διαδρομής</strong>, το
                  <strong> πότε ενημερωθήκατε</strong> και το αν η αεροπορική σάς προσέφερε
                  <strong> κατάλληλο rerouting</strong>.
                </p>
                <p>
                  Η ακυρωμένη πτήση μπορεί να δίνει και <strong>επιστροφή χρημάτων</strong> ή
                  <strong> μεταφορά με άλλη πτήση</strong>, αλλά αυτά δεν είναι το ίδιο πράγμα με τη
                  χρηματική αποζημίωση.
                </p>
              </div>
            </Card>
          </section>

          <ClaimWingerElSection
            className="mb-12"
            title="Ελέγξτε την ακυρωμένη πτήση σας με το ClaimWinger"
            description="Αν η πτήση ακυρώθηκε και θέλετε να δείτε γρήγορα αν φαίνεται να υπάρχει βάση για 250 €, 400 € ή 600 €, το ClaimWinger Ελλάδα μπορεί να βοηθήσει με μια πρώτη πρακτική εκτίμηση."
            ctaHref="https://claimwinger.com/el?utm_source=problemlot-el&utm_medium=embedded_cta&utm_campaign=cancelled_flight_amount"
            ctaLabel="Έλεγχος με το ClaimWinger"
            loadingLabel="Φορτώνεται η φόρμα ClaimWinger..."
            loadingDescription="Σε λίγο θα εμφανιστεί η ελληνική φόρμα για έλεγχο ακυρωμένης πτήσης."
            placement="el_blog_cancelled_flight_amount_embed"
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
                  Συνήθως για μεγαλύτερες ενδοευρωπαϊκές πτήσεις και άλλες έως 3.500 χλμ.
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
              2. Ο κανόνας των 14 ημερών
            </h2>
            <div className="space-y-4 text-base leading-7 text-slate-700 dark:text-slate-300">
              <p>
                Στις ακυρωμένες πτήσεις, το πρώτο μεγάλο φίλτρο είναι το <strong>πότε</strong>
                ενημερωθήκατε. Αν η αεροπορική σάς ειδοποίησε αρκετά νωρίς, συνήθως η χρηματική
                αποζημίωση δεν ενεργοποιείται.
              </p>
              <p>
                Αντίθετα, όταν η ενημέρωση γίνεται <strong>λιγότερο από 14 ημέρες</strong> πριν από
                την αναχώρηση, η υπόθεση γίνεται πολύ πιο σοβαρή. Αυτό όμως δεν σημαίνει αυτόματα
                πληρωμή, γιατί πρέπει να εξεταστεί και η ποιότητα του rerouting που σας προσφέρθηκε.
              </p>
            </div>
            <div className="mt-6 grid gap-4 md:grid-cols-2">
              <Card className="p-6">
                <div className="mb-3 flex items-center gap-2 text-slate-900 dark:text-white">
                  <CalendarClock className="h-5 w-5 text-sky-600" />
                  <h3 className="text-xl font-semibold">Πάνω από 14 ημέρες</h3>
                </div>
                <p className="text-sm leading-6 text-slate-600 dark:text-slate-300">
                  Συνήθως δεν προκύπτει χρηματική αποζημίωση μόνο και μόνο λόγω ακύρωσης, αν η
                  αεροπορική ενημέρωσε εγκαίρως.
                </p>
              </Card>
              <Card className="p-6">
                <div className="mb-3 flex items-center gap-2 text-slate-900 dark:text-white">
                  <AlertCircle className="h-5 w-5 text-sky-600" />
                  <h3 className="text-xl font-semibold">Λιγότερο από 14 ημέρες</h3>
                </div>
                <p className="text-sm leading-6 text-slate-600 dark:text-slate-300">
                  Η αποζημίωση μπαίνει σοβαρά στο τραπέζι, αλλά πρέπει να δούμε πότε φτάσατε τελικά
                  και πόσο κοντά έμεινε η νέα πτήση στο αρχικό πρόγραμμα.
                </p>
              </Card>
            </div>
          </section>

          <section className="mb-12">
            <h2 className="mb-6 text-3xl font-bold text-slate-900 dark:text-white">
              3. Τι αλλάζει αν σας έβαλαν σε άλλη πτήση
            </h2>
            <div className="grid gap-4 md:grid-cols-2">
              <Card className="p-6">
                <div className="mb-3 flex items-center gap-2 text-slate-900 dark:text-white">
                  <RefreshCw className="h-5 w-5 text-sky-600" />
                  <h3 className="text-xl font-semibold">Rerouting δεν σημαίνει αυτόματα μηδέν</h3>
                </div>
                <p className="text-sm leading-6 text-slate-600 dark:text-slate-300">
                  Αν σας μεταφέρουν σε άλλη πτήση, μπορεί να παραμένει δικαίωμα αποζημίωσης. Το αν
                  χάνεται ή μειώνεται εξαρτάται από την πραγματική ώρα άφιξης σε σχέση με το αρχικό
                  πρόγραμμα.
                </p>
              </Card>
              <Card className="p-6">
                <div className="mb-3 flex items-center gap-2 text-slate-900 dark:text-white">
                  <Euro className="h-5 w-5 text-sky-600" />
                  <h3 className="text-xl font-semibold">Μείωση έως 50%</h3>
                </div>
                <p className="text-sm leading-6 text-slate-600 dark:text-slate-300">
                  Σε ορισμένες περιπτώσεις, αν η νέα πτήση σας φέρνει αρκετά κοντά στην αρχική ώρα
                  άφιξης, το ποσό αποζημίωσης μπορεί να μειωθεί κατά 50%.
                </p>
              </Card>
            </div>
          </section>

          <section className="mb-12">
            <h2 className="mb-6 text-3xl font-bold text-slate-900 dark:text-white">
              4. Refund, rerouting και compensation δεν είναι το ίδιο
            </h2>
            <div className="space-y-4 text-base leading-7 text-slate-700 dark:text-slate-300">
              <p>
                Στις ακυρωμένες πτήσεις οι επιβάτες συχνά μπερδεύουν τρία διαφορετικά πράγματα:
                <strong> επιστροφή χρημάτων</strong>, <strong>μεταφορά με άλλη πτήση</strong> και
                <strong> χρηματική αποζημίωση</strong>.
              </p>
              <p>
                Μπορεί να έχετε δικαίωμα να ζητήσετε refund αντί να ταξιδέψετε. Μπορεί επίσης να
                δεχτείτε άλλη πτήση. Αυτά όμως δεν καταργούν αυτόματα τη συζήτηση για αποζημίωση,
                η οποία πρέπει να εξεταστεί ξεχωριστά με βάση τους κανόνες του EU261.
              </p>
            </div>
          </section>

          <section className="mb-12">
            <h2 className="mb-6 text-3xl font-bold text-slate-900 dark:text-white">
              5. Πότε μπορεί η αεροπορική να αρνηθεί πληρωμή
            </h2>
            <div className="grid gap-4 md:grid-cols-2">
              {[
                "όταν αποδείξει πραγματικές έκτακτες περιστάσεις",
                "όταν η ενημέρωση έγινε αρκετά νωρίς",
                "όταν το rerouting πληρούσε τα σχετικά χρονικά όρια του κανονισμού",
                "όταν η πτήση δεν εμπίπτει στο πεδίο εφαρμογής του EU261",
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
                Η πιο πρακτική επόμενη κίνηση
              </h2>
              <p className="mb-6 text-base leading-7 text-slate-700 dark:text-slate-300">
                Αν η πτήση σας ακυρώθηκε, το βασικό ερώτημα είναι αν μιλάμε για απλό refund ή αν η
                υπόθεση δείχνει προς αποζημίωση 250 €, 400 € ή 600 €. Το γρήγορο screening βοηθά να
                ξεχωρίσετε αυτές τις δύο γραμμές χωρίς να χαθείτε σε γενικούς κανόνες.
              </p>
              <div className="flex flex-wrap gap-3">
                <Button asChild size="lg" className="bg-sky-600 hover:bg-sky-700">
                  <a
                    href={cancelledFlightHref}
                    target="_blank"
                    rel="noopener noreferrer"
                    onClick={() =>
                      trackClaimClick(
                        "el_blog_cancelled_flight_amount_cancelled_button",
                        cancelledFlightHref,
                      )
                    }
                  >
                    Έλεγχος ακυρωμένης πτήσης
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </a>
                </Button>
                <Button asChild size="lg" variant="outline">
                  <a
                    href={claimWingerHomeHref}
                    target="_blank"
                    rel="noopener noreferrer"
                    onClick={() =>
                      trackClaimClick(
                        "el_blog_cancelled_flight_amount_home_button",
                        claimWingerHomeHref,
                      )
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
                Σχετικά επόμενα βήματα
              </h2>
              <div className="grid gap-4 md:grid-cols-3">
                <Link
                  href="/el/blog/posa-chrimata-pairno-gia-kathysterisi-3-oron"
                  className="rounded-2xl border border-slate-200 p-5 transition-colors hover:border-sky-400 hover:bg-sky-50 dark:border-slate-700 dark:hover:border-sky-700 dark:hover:bg-sky-950/20"
                >
                  <h3 className="mb-2 font-semibold text-slate-900 dark:text-white">
                    Πόσα χρήματα παίρνω για καθυστέρηση 3 ωρών;
                  </h3>
                  <p className="text-sm text-slate-600 dark:text-slate-300">
                    Ξεχωριστός οδηγός για τα ποσά αποζημίωσης στις μεγάλες καθυστερήσεις.
                  </p>
                </Link>
                <a
                  href={cancelledFlightHref}
                  target="_blank"
                  rel="noopener noreferrer"
                  onClick={() =>
                    trackClaimClick(
                      "el_blog_cancelled_flight_amount_inline_cancelled_link",
                      cancelledFlightHref,
                    )
                  }
                  className="rounded-2xl border border-slate-200 p-5 transition-colors hover:border-sky-400 hover:bg-sky-50 dark:border-slate-700 dark:hover:border-sky-700 dark:hover:bg-sky-950/20"
                >
                  <h3 className="mb-2 font-semibold text-slate-900 dark:text-white">
                    Φόρμα ClaimWinger για ακυρωμένη πτήση
                  </h3>
                  <p className="text-sm text-slate-600 dark:text-slate-300">
                    Γρήγορος έλεγχος αν η ακύρωση της δικής σας πτήσης δείχνει προς αποζημίωση.
                  </p>
                </a>
                <a
                  href={delayedFlightHref}
                  target="_blank"
                  rel="noopener noreferrer"
                  onClick={() =>
                    trackClaimClick(
                      "el_blog_cancelled_flight_amount_inline_delayed_link",
                      delayedFlightHref,
                    )
                  }
                  className="rounded-2xl border border-slate-200 p-5 transition-colors hover:border-sky-400 hover:bg-sky-50 dark:border-slate-700 dark:hover:border-sky-700 dark:hover:bg-sky-950/20"
                >
                  <h3 className="mb-2 font-semibold text-slate-900 dark:text-white">
                    Τι ισχύει στις καθυστερημένες πτήσεις
                  </h3>
                  <p className="text-sm text-slate-600 dark:text-slate-300">
                    Αν η υπόθεσή σας τελικά δεν ήταν καθαρή ακύρωση αλλά μεγάλη καθυστέρηση, αυτός
                    είναι ο σωστός επόμενος οδηγός.
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
