import Link from "next/link";
import { ArrowRight, CheckCircle2, Clock, Euro, FileText, RefreshCcw } from "lucide-react";

import { ClaimWingerElSection } from "@/components/ClaimWingerElSection";
import { LayoutEl } from "@/components/LayoutEl";
import { SEO } from "@/components/SEO";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { pushClaimWingerEvent } from "@/lib/claimwingerTracking";

const articleUrl =
  "https://problemlot.com/el/blog/akyromeni-ptisi-athina-parisi-ti-dikaioumai";
const claimWingerHomeHref =
  "https://claimwinger.com/el?utm_source=problemlot-el&utm_medium=article_link&utm_campaign=athens_paris_cancelled";
const delayedFlightHref =
  "https://claimwinger.com/el/kathysterimeni-ptisi?utm_source=problemlot-el&utm_medium=article_link&utm_campaign=athens_paris_cancelled";
const cancelledFlightHref =
  "https://claimwinger.com/el/akyromeni-ptisi?utm_source=problemlot-el&utm_medium=article_link&utm_campaign=athens_paris_cancelled";

const faqItems = [
  {
    question: "Τι δικαιούμαι αν ακυρώθηκε η πτήση Αθήνα–Παρίσι;",
    answer:
      "Συχνά μπορεί να έχετε δικαίωμα σε επιστροφή χρημάτων ή εναλλακτική μεταφορά και, αν πληρούνται οι όροι του EU261, και σε ξεχωριστή αποζημίωση. Για μια τυπική διαδρομή Αθήνα–Παρίσι, η αποζημίωση είναι συχνά 250 € όταν η ενημέρωση έγινε αργά και δεν υπάρχουν έγκυρες έκτακτες περιστάσεις.",
  },
  {
    question: "Αν μου δώσουν άλλη πτήση, χάνω την αποζημίωση;",
    answer:
      "Όχι πάντα. Η νέα πτήση μπορεί να επηρεάσει το δικαίωμα ή το ύψος της αποζημίωσης, αλλά δεν σημαίνει αυτόματα ότι η υπόθεση κλείνει μόνο με εναλλακτική μεταφορά.",
  },
  {
    question: "Η επιστροφή χρημάτων είναι το ίδιο με την αποζημίωση;",
    answer:
      "Όχι. Η επιστροφή χρημάτων αφορά το εισιτήριο όταν δεν θέλετε ή δεν μπορείτε να ταξιδέψετε, ενώ η αποζημίωση είναι ξεχωριστή χρηματική αξίωση όταν η ακύρωση πληροί τις προϋποθέσεις του EU261.",
  },
  {
    question: "Πόσο παίζει ρόλο το όριο των 14 ημερών;",
    answer:
      "Παίζει πολύ μεγάλο ρόλο. Όταν η ενημέρωση για την ακύρωση έρχεται λιγότερο από 14 ημέρες πριν, η θέση του επιβάτη ως προς την αποζημίωση γίνεται συνήθως σημαντικά ισχυρότερη.",
  },
];

function trackClaimClick(placement: string, destination: string) {
  pushClaimWingerEvent("claimwinger_cta_click", {
    locale: "el",
    placement,
    destination,
  });
}

export default function AthensParisCancelledFlightElPage() {
  return (
    <LayoutEl>
      <SEO
        title="Ακυρωμένη πτήση Αθήνα–Παρίσι: τι δικαιούμαι;"
        description="Ακυρώθηκε η πτήση σας από Αθήνα προς Παρίσι; Δείτε πότε υπάρχει επιστροφή χρημάτων, εναλλακτική μεταφορά και πιθανή αποζημίωση 250 € σύμφωνα με το EU261."
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
            headline: "Ακυρωμένη πτήση Αθήνα–Παρίσι: τι δικαιούμαι;",
            description:
              "Πρακτικός οδηγός για τα δικαιώματα του επιβάτη όταν ακυρώνεται πτήση Αθήνα–Παρίσι, με έμφαση σε επιστροφή χρημάτων, εναλλακτική μεταφορά και αποζημίωση.",
            mainEntityOfPage: articleUrl,
            datePublished: "2026-04-14",
            dateModified: "2026-04-14",
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
                name: "Ακυρωμένη πτήση Αθήνα–Παρίσι: τι δικαιούμαι;",
                item: articleUrl,
              },
            ],
          }),
        }}
      />

      <article className="min-h-screen bg-gradient-to-br from-slate-50 via-white to-emerald-50 dark:from-gray-950 dark:via-gray-900 dark:to-slate-900">
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
            <span>Ακυρωμένη πτήση Αθήνα–Παρίσι: τι δικαιούμαι;</span>
          </div>

          <header className="mb-10">
            <div className="mb-4 inline-flex items-center gap-2 rounded-full bg-emerald-100 px-4 py-2 text-sm font-medium text-emerald-700 dark:bg-emerald-900/30 dark:text-emerald-300">
              Οδηγός διαδρομής για Αθήνα και Παρίσι
            </div>
            <h1 className="mb-5 text-4xl font-bold tracking-tight text-slate-900 dark:text-white md:text-5xl">
              Ακυρωμένη πτήση Αθήνα–Παρίσι: τι δικαιούμαι;
            </h1>
            <p className="max-w-3xl text-xl leading-8 text-slate-600 dark:text-slate-300">
              Αν ακυρώθηκε η πτήση σας από <strong>Αθήνα προς Παρίσι</strong>, το πρώτο που πρέπει να
              ξεκαθαρίσετε είναι ότι η <strong>επιστροφή χρημάτων</strong>, η
              <strong> εναλλακτική μεταφορά</strong> και η <strong>αποζημίωση</strong> δεν είναι το
              ίδιο πράγμα. Σε μια τυπική διαδρομή Αθήνα–Παρίσι, όταν πληρούνται οι προϋποθέσεις του
              EU261, η αποζημίωση είναι συχνά <strong>250 €</strong>.
            </p>

            <div className="mt-6 flex flex-wrap gap-4 text-sm text-slate-600 dark:text-slate-400">
              <div className="flex items-center gap-2">
                <Clock className="h-4 w-4" />
                <span>Ενημέρωση: 14 Απριλίου 2026</span>
              </div>
              <div className="flex items-center gap-2">
                <FileText className="h-4 w-4" />
                <span>Χρόνος ανάγνωσης: 8 λεπτά</span>
              </div>
            </div>
          </header>

          <section className="mb-10">
            <Card className="border-emerald-200 bg-gradient-to-br from-emerald-600 to-teal-700 p-8 text-white shadow-xl dark:border-emerald-800">
              <h2 className="mb-4 text-2xl font-bold">Σύντομη απάντηση</h2>
              <div className="space-y-3 text-base leading-7 text-emerald-50">
                <p>
                  <strong>Ναι, συχνά υπάρχουν περισσότερα από ένα δικαιώματα.</strong> Μπορεί να
                  έχετε δικαίωμα σε επιστροφή χρημάτων ή σε άλλη πτήση και, ξεχωριστά, σε
                  αποζημίωση.
                </p>
                <p>
                  Για μια απευθείας διαδρομή Αθήνα–Παρίσι, η αποζημίωση είναι συνήθως
                  <strong> 250 €</strong>, όταν η ενημέρωση για την ακύρωση έγινε αργά και η
                  αεροπορική δεν αποδείξει έγκυρες έκτακτες περιστάσεις.
                </p>
                <p>
                  Το πιο κρίσιμο σημείο είναι συχνά το <strong>πότε ενημερωθήκατε</strong> και το
                  πόσο κοντά στο αρχικό πρόγραμμα ήταν η νέα πτήση που σας προσφέρθηκε.
                </p>
              </div>
            </Card>
          </section>

          <ClaimWingerElSection
            className="mb-12"
            title="Ακυρώθηκε η πτήση σας Αθήνα–Παρίσι;"
            description="Το ClaimWinger Ελλάδα μπορεί να βοηθήσει να ξεχωρίσετε γρήγορα αν μιλάμε μόνο για επιστροφή χρημάτων ή και για ισχυρή αξίωση αποζημίωσης σύμφωνα με το EU261."
            ctaHref="https://claimwinger.com/el/akyromeni-ptisi?utm_source=problemlot-el&utm_medium=embedded_cta&utm_campaign=athens_paris_cancelled"
            ctaLabel="Έλεγχος με το ClaimWinger"
            loadingLabel="Φορτώνεται η φόρμα ClaimWinger..."
            loadingDescription="Σε λίγο θα εμφανιστεί η ελληνική φόρμα για έλεγχο της ακυρωμένης πτήσης σας."
            placement="el_blog_athens_paris_cancelled_embed"
          />

          <section className="mb-12">
            <h2 className="mb-6 text-3xl font-bold text-slate-900 dark:text-white">
              Επιστροφή χρημάτων, νέα πτήση και αποζημίωση: τρία διαφορετικά πράγματα
            </h2>
            <div className="grid gap-4 md:grid-cols-3">
              <Card className="border-blue-200 p-6 dark:border-blue-800">
                <h3 className="mb-2 text-lg font-semibold text-slate-900 dark:text-white">
                  Επιστροφή χρημάτων
                </h3>
                <p className="text-sm leading-6 text-slate-600 dark:text-slate-300">
                  Αν αποφασίσετε να μην ταξιδέψετε, μπορεί να έχετε δικαίωμα επιστροφής της τιμής του
                  εισιτηρίου για το ακυρωμένο σκέλος.
                </p>
              </Card>
              <Card className="border-amber-200 p-6 dark:border-amber-800">
                <h3 className="mb-2 text-lg font-semibold text-slate-900 dark:text-white">
                  Εναλλακτική μεταφορά
                </h3>
                <p className="text-sm leading-6 text-slate-600 dark:text-slate-300">
                  Η αεροπορική μπορεί να σας βάλει σε άλλη πτήση. Αυτό όμως δεν σημαίνει από μόνο
                  του ότι εξαφανίζεται και η πιθανή αξίωση αποζημίωσης.
                </p>
              </Card>
              <Card className="border-green-200 p-6 dark:border-green-800">
                <h3 className="mb-2 text-lg font-semibold text-slate-900 dark:text-white">
                  Αποζημίωση
                </h3>
                <p className="text-sm leading-6 text-slate-600 dark:text-slate-300">
                  Πρόκειται για ξεχωριστή χρηματική αξίωση. Σε αυτή τη διαδρομή η πιο συχνή αναφορά
                  είναι τα <strong>250 €</strong>, εφόσον πληρούνται οι όροι του EU261.
                </p>
              </Card>
            </div>
          </section>

          <section className="mb-12">
            <h2 className="mb-6 text-3xl font-bold text-slate-900 dark:text-white">
              Το όριο των 14 ημερών αλλάζει πολύ την εικόνα
            </h2>
            <div className="space-y-4 text-base leading-7 text-slate-700 dark:text-slate-300">
              <p>
                Σε ακυρωμένες πτήσεις, το πότε ενημερωθήκατε είναι από τα σημαντικότερα σημεία.
                Όταν η ενημέρωση έρχεται <strong>λιγότερο από 14 ημέρες</strong> πριν από την
                αναχώρηση, η θέση του επιβάτη ως προς την αποζημίωση γίνεται συνήθως πολύ πιο ισχυρή.
              </p>
              <p>
                Αυτό δεν σημαίνει ότι κάθε ακύρωση κάτω από 14 ημέρες πληρώνεται αυτόματα. Πρέπει
                να εξεταστεί και το τι ακριβώς πρόσφερε η αεροπορική ως νέα πτήση, καθώς και αν
                πράγματι υπήρχαν έκτακτες περιστάσεις που μπορούν να σταθούν νομικά.
              </p>
            </div>
          </section>

          <section className="mb-12">
            <h2 className="mb-6 text-3xl font-bold text-slate-900 dark:text-white">
              Πότε η νέα πτήση μπορεί να αλλάξει το αποτέλεσμα
            </h2>
            <div className="grid gap-4">
              <Card className="border-slate-200 p-6 dark:border-slate-700">
                <div className="mb-3 flex items-center gap-2 text-slate-900 dark:text-white">
                  <RefreshCcw className="h-5 w-5 text-emerald-600" />
                  <h3 className="text-lg font-semibold">Η ποιότητα της εναλλακτικής πτήσης</h3>
                </div>
                <p className="text-sm leading-6 text-slate-600 dark:text-slate-300">
                  Δεν αρκεί να πει η αεροπορική ότι «σας έβαλε σε άλλη πτήση». Πρέπει να κοιτάμε πόσο
                  κοντά έμειναν η νέα ώρα αναχώρησης και η νέα ώρα άφιξης σε σχέση με το αρχικό
                  πλάνο.
                </p>
              </Card>
              <Card className="border-slate-200 p-6 dark:border-slate-700">
                <div className="mb-3 flex items-center gap-2 text-slate-900 dark:text-white">
                  <Euro className="h-5 w-5 text-emerald-600" />
                  <h3 className="text-lg font-semibold">Η αποζημίωση δεν χάνεται αυτόματα</h3>
                </div>
                <p className="text-sm leading-6 text-slate-600 dark:text-slate-300">
                  Η εναλλακτική μεταφορά μπορεί να επηρεάσει το δικαίωμα ή και το ύψος της
                  αποζημίωσης, αλλά δεν σημαίνει αυτόματα ότι μένετε μόνο με μια νέα πτήση και τίποτα
                  παραπάνω.
                </p>
              </Card>
            </div>
          </section>

          <section className="mb-12">
            <Card className="border-sky-200 bg-sky-50 p-6 dark:border-sky-900/50 dark:bg-sky-950/20">
              <h2 className="mb-4 text-2xl font-bold text-slate-900 dark:text-white">
                Πότε το ClaimWinger έχει περισσότερο νόημα
              </h2>
              <div className="space-y-3 text-base leading-7 text-slate-700 dark:text-slate-300">
                <p>
                  Στη διαδρομή Αθήνα–Παρίσι το μεγαλύτερο μπέρδεμα είναι ότι πολλοί επιβάτες
                  σταματούν στην επιστροφή χρημάτων και δεν ελέγχουν ποτέ αν υπήρχε και ξεχωριστή
                  αξίωση αποζημίωσης.
                </p>
                <p>
                  Σε αυτό το σημείο το <strong>ClaimWinger</strong> μπορεί να βοηθήσει να ξεχωρίσει
                  σωστά η υπόθεση. Η προμήθεια του ClaimWinger είναι <strong>30%</strong>,
                  ανεξάρτητα από το αν η πορεία της υπόθεσης είναι εξωδικαστική ή δικαστική.
                </p>
              </div>
              <div className="mt-6 flex flex-wrap gap-3">
                <Button asChild className="bg-sky-600 hover:bg-sky-700">
                  <Link
                    href={claimWingerHomeHref}
                    onClick={() =>
                      trackClaimClick("el_blog_athens_paris_cancelled_inline", claimWingerHomeHref)
                    }
                  >
                    Έλεγχος υπόθεσης με ClaimWinger
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </Link>
                </Button>
                <Button asChild variant="outline">
                  <Link
                    href={cancelledFlightHref}
                    onClick={() =>
                      trackClaimClick(
                        "el_blog_athens_paris_cancelled_cancelled",
                        cancelledFlightHref,
                      )
                    }
                  >
                    Δείτε και τα δικαιώματα σε ακυρωμένη πτήση
                  </Link>
                </Button>
              </div>
            </Card>
          </section>

          <section className="mb-12">
            <h2 className="mb-6 text-3xl font-bold text-slate-900 dark:text-white">
              Σχετικοί οδηγοί
            </h2>
            <div className="grid gap-4 md:grid-cols-3">
              <Card className="p-6">
                <h3 className="mb-3 text-lg font-semibold text-slate-900 dark:text-white">
                  Ακυρωμένη πτήση
                </h3>
                <p className="mb-4 text-sm leading-6 text-slate-600 dark:text-slate-300">
                  Ο βασικός οδηγός για τα ποσά και τη λογική των ακυρώσεων στο EU261.
                </p>
                <Link
                  href="/el/blog/posa-chrimata-pairno-gia-akyromeni-ptisi"
                  className="text-sm font-medium text-sky-600 hover:text-sky-700"
                >
                  Δείτε τη βάση
                </Link>
              </Card>
              <Card className="p-6">
                <h3 className="mb-3 text-lg font-semibold text-slate-900 dark:text-white">
                  Αλλαγή ώρας πτήσης
                </h3>
                <p className="mb-4 text-sm leading-6 text-slate-600 dark:text-slate-300">
                  Χρήσιμο όταν η ακύρωση συνοδεύτηκε από νέα πρόταση πτήσης με διαφορετικό πρόγραμμα.
                </p>
                <Link
                  href="/el/blog/dikaioumai-apozimiosi-an-allaxe-i-ora-tis-ptisis"
                  className="text-sm font-medium text-sky-600 hover:text-sky-700"
                >
                  Δείτε τι αλλάζει
                </Link>
              </Card>
              <Card className="p-6">
                <h3 className="mb-3 text-lg font-semibold text-slate-900 dark:text-white">
                  Καθυστερημένη πτήση
                </h3>
                <p className="mb-4 text-sm leading-6 text-slate-600 dark:text-slate-300">
                  Χρήσιμο αν η υπόθεση εξελίχθηκε τελικά περισσότερο σαν μεγάλη καθυστέρηση μετά από
                  αναδρομολόγηση.
                </p>
                <Link
                  href="/el/blog/poses-ores-kathysterisis-chreiazontai-gia-apozimiosi"
                  className="text-sm font-medium text-sky-600 hover:text-sky-700"
                >
                  Δείτε το όριο των 3 ωρών
                </Link>
              </Card>
            </div>
          </section>

          <section className="mb-12">
            <Card className="border-slate-200 p-8 dark:border-slate-700">
              <h2 className="mb-4 text-3xl font-bold text-slate-900 dark:text-white">
                Συμπέρασμα
              </h2>
              <div className="space-y-4 text-base leading-7 text-slate-700 dark:text-slate-300">
                <p>
                  Σε μια ακυρωμένη πτήση Αθήνα–Παρίσι, το μεγάλο λάθος είναι να πιστέψετε ότι η
                  υπόθεση κλείνει μόλις σας επιστρέψουν το εισιτήριο ή μόλις σας βάλουν σε άλλη πτήση.
                  Στην πράξη, αυτά είναι μόνο μέρος της εικόνας.
                </p>
                <p>
                  Αν η ενημέρωση ήρθε αργά και δεν υπάρχουν έγκυρες έκτακτες περιστάσεις, μπορεί να
                  υπάρχει και ξεχωριστή αποζημίωση, η οποία σε αυτή τη διαδρομή είναι συχνά
                  <strong> 250 €</strong>.
                </p>
              </div>
            </Card>
          </section>

          <section className="mb-12">
            <h2 className="mb-6 text-3xl font-bold text-slate-900 dark:text-white">Συχνές ερωτήσεις</h2>
            <div className="space-y-4">
              {faqItems.map((item) => (
                <Card key={item.question} className="p-6">
                  <h3 className="mb-3 text-lg font-semibold text-slate-900 dark:text-white">
                    {item.question}
                  </h3>
                  <p className="text-base leading-7 text-slate-700 dark:text-slate-300">
                    {item.answer}
                  </p>
                </Card>
              ))}
            </div>
          </section>

          <section className="mb-6">
            <Card className="border-sky-200 bg-white p-8 shadow-sm dark:border-sky-900/40 dark:bg-slate-950/60">
              <h2 className="mb-3 text-2xl font-bold text-slate-900 dark:text-white">
                Θέλετε να δείτε γρήγορα αν η ακύρωση Αθήνα–Παρίσι έχει βάση για αποζημίωση;
              </h2>
              <p className="mb-6 text-base leading-7 text-slate-700 dark:text-slate-300">
                Μπορείτε να ξεκινήσετε από το <strong>ClaimWinger</strong> στα ελληνικά ή να δείτε
                και τις ξεχωριστές σελίδες για <strong>ακυρωμένη πτήση</strong> και
                <strong> καθυστερημένη πτήση</strong>, ανάλογα με το πώς περιγράφηκε τελικά η
                διαταραχή του ταξιδιού σας.
              </p>
              <div className="flex flex-wrap gap-3">
                <Button asChild className="bg-sky-600 hover:bg-sky-700">
                  <Link
                    href={claimWingerHomeHref}
                    onClick={() =>
                      trackClaimClick(
                        "el_blog_athens_paris_cancelled_footer_home",
                        claimWingerHomeHref,
                      )
                    }
                  >
                    ClaimWinger Ελλάδα
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </Link>
                </Button>
                <Button asChild variant="outline">
                  <Link
                    href={delayedFlightHref}
                    onClick={() =>
                      trackClaimClick(
                        "el_blog_athens_paris_cancelled_footer_delayed",
                        delayedFlightHref,
                      )
                    }
                  >
                    Καθυστερημένη πτήση
                  </Link>
                </Button>
                <Button asChild variant="outline">
                  <Link
                    href={cancelledFlightHref}
                    onClick={() =>
                      trackClaimClick(
                        "el_blog_athens_paris_cancelled_footer_cancelled",
                        cancelledFlightHref,
                      )
                    }
                  >
                    Ακυρωμένη πτήση
                  </Link>
                </Button>
              </div>
            </Card>
          </section>
        </div>
      </article>
    </LayoutEl>
  );
}
