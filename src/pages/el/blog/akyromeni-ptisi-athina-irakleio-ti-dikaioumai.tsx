import Link from "next/link";
import { ArrowRight, CheckCircle2, Clock, Euro, FileText, RefreshCcw } from "lucide-react";

import { ClaimWingerElSection } from "@/components/ClaimWingerElSection";
import { LayoutEl } from "@/components/LayoutEl";
import { SEO } from "@/components/SEO";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { pushClaimWingerEvent } from "@/lib/claimwingerTracking";

const articleUrl =
  "https://problemlot.com/el/blog/akyromeni-ptisi-athina-irakleio-ti-dikaioumai";
const claimWingerHomeHref =
  "https://claimwinger.com/el?utm_source=problemlot-el&utm_medium=article_link&utm_campaign=athens_heraklion_cancelled";
const delayedFlightHref =
  "https://claimwinger.com/el/kathysterimeni-ptisi?utm_source=problemlot-el&utm_medium=article_link&utm_campaign=athens_heraklion_cancelled";
const cancelledFlightHref =
  "https://claimwinger.com/el/akyromeni-ptisi?utm_source=problemlot-el&utm_medium=article_link&utm_campaign=athens_heraklion_cancelled";

const faqItems = [
  {
    question: "Τι δικαιούμαι αν ακυρώθηκε η πτήση Αθήνα–Ηράκλειο;",
    answer:
      "Συχνά μπορεί να έχετε δικαίωμα σε επιστροφή χρημάτων ή εναλλακτική μεταφορά και, αν πληρούνται οι όροι του EU261, και σε ξεχωριστή αποζημίωση. Για μια τυπική διαδρομή Αθήνα–Ηράκλειο, η αποζημίωση είναι συχνά 250 € όταν η ενημέρωση έγινε αργά και δεν υπάρχουν έγκυρες έκτακτες περιστάσεις.",
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
    question: "Γιατί εδώ μιλάμε συνήθως για 250 €;",
    answer:
      "Γιατί η τυπική διαδρομή Αθήνα–Ηράκλειο είναι εσωτερική πτήση μικρότερης απόστασης, οπότε το πιο συνηθισμένο επίπεδο αποζημίωσης είναι τα 250 €.",
  },
];

function trackClaimClick(placement: string, destination: string) {
  pushClaimWingerEvent("claimwinger_cta_click", {
    locale: "el",
    placement,
    destination,
  });
}

export default function AthensHeraklionCancelledFlightElPage() {
  return (
    <LayoutEl>
      <SEO
        title="Ακυρωμένη πτήση Αθήνα–Ηράκλειο: τι δικαιούμαι;"
        description="Ακυρώθηκε η πτήση σας από Αθήνα προς Ηράκλειο; Δείτε πότε υπάρχει επιστροφή χρημάτων, εναλλακτική μεταφορά και πιθανή αποζημίωση 250 € σύμφωνα με το EU261."
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
            headline: "Ακυρωμένη πτήση Αθήνα–Ηράκλειο: τι δικαιούμαι;",
            description:
              "Πρακτικός οδηγός για τα δικαιώματα του επιβάτη όταν ακυρώνεται πτήση Αθήνα–Ηράκλειο, με έμφαση σε επιστροφή χρημάτων, εναλλακτική μεταφορά και αποζημίωση.",
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
                name: "Ακυρωμένη πτήση Αθήνα–Ηράκλειο: τι δικαιούμαι;",
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
            <span>Ακυρωμένη πτήση Αθήνα–Ηράκλειο: τι δικαιούμαι;</span>
          </div>

          <header className="mb-10">
            <div className="mb-4 inline-flex items-center gap-2 rounded-full bg-emerald-100 px-4 py-2 text-sm font-medium text-emerald-700 dark:bg-emerald-900/30 dark:text-emerald-300">
              Οδηγός διαδρομής για Αθήνα και Ηράκλειο
            </div>
            <h1 className="mb-5 text-4xl font-bold tracking-tight text-slate-900 dark:text-white md:text-5xl">
              Ακυρωμένη πτήση Αθήνα–Ηράκλειο: τι δικαιούμαι;
            </h1>
            <p className="max-w-3xl text-xl leading-8 text-slate-600 dark:text-slate-300">
              Αν ακυρώθηκε η πτήση σας από <strong>Αθήνα προς Ηράκλειο</strong>, είναι σημαντικό
              να ξεχωρίσετε την <strong>επιστροφή χρημάτων</strong>, την
              <strong> εναλλακτική μεταφορά</strong> και την <strong>αποζημίωση</strong>. Δεν
              είναι το ίδιο και, για την τυπική διαδρομή Αθήνα–Ηράκλειο, η πιο συνηθισμένη
              αναφορά για την αποζημίωση είναι τα <strong>250 €</strong>.
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
                  Για τη διαδρομή Αθήνα–Ηράκλειο η πιο συνηθισμένη αναφορά για την αποζημίωση είναι
                  τα <strong>250 €</strong>, όταν η ενημέρωση για την ακύρωση έγινε αργά και δεν
                  υπάρχουν έγκυρες έκτακτες περιστάσεις.
                </p>
                <p>
                  Η νέα πτήση που προτείνει η αεροπορική μπορεί να αλλάξει την εικόνα, αλλά δεν
                  σημαίνει αυτόματα ότι η υπόθεση κλείνει χωρίς να εξεταστεί αποζημίωση.
                </p>
              </div>
            </Card>
          </section>

          <ClaimWingerElSection
            className="mb-12"
            title="Ακυρώθηκε η πτήση σας Αθήνα–Ηράκλειο;"
            description="Το ClaimWinger Ελλάδα μπορεί να βοηθήσει να ξεχωρίσετε γρήγορα αν μιλάμε μόνο για επιστροφή χρημάτων ή και για ισχυρή αξίωση αποζημίωσης 250 € σύμφωνα με το EU261."
            ctaHref="https://claimwinger.com/el/akyromeni-ptisi?utm_source=problemlot-el&utm_medium=embedded_cta&utm_campaign=athens_heraklion_cancelled"
            ctaLabel="Έλεγχος με το ClaimWinger"
            loadingLabel="Φορτώνεται η φόρμα ClaimWinger..."
            loadingDescription="Σε λίγο θα εμφανιστεί η ελληνική φόρμα για έλεγχο της ακυρωμένης πτήσης σας."
            placement="el_blog_athens_heraklion_cancelled_embed"
          />

          <section className="mb-12">
            <h2 className="mb-6 text-3xl font-bold text-slate-900 dark:text-white">
              Γιατί εδώ μιλάμε συνήθως για 250 €
            </h2>
            <div className="grid gap-4 md:grid-cols-2">
              <Card className="border-slate-200 p-6 dark:border-slate-700">
                <h3 className="mb-2 text-lg font-semibold text-slate-900 dark:text-white">
                  Κατηγορία απόστασης
                </h3>
                <p className="text-sm leading-6 text-slate-600 dark:text-slate-300">
                  Η τυπική διαδρομή Αθήνα–Ηράκλειο είναι εσωτερική πτήση μικρότερης απόστασης, όπου
                  το πιο συνηθισμένο επίπεδο αποζημίωσης είναι 250 €.
                </p>
              </Card>
              <Card className="border-slate-200 p-6 dark:border-slate-700">
                <h3 className="mb-2 text-lg font-semibold text-slate-900 dark:text-white">
                  Όχι αυτόματα σε κάθε ακύρωση
                </h3>
                <p className="text-sm leading-6 text-slate-600 dark:text-slate-300">
                  Το ότι η διαδρομή συνδέεται με 250 € δεν σημαίνει αυτόματα ότι κάθε ακύρωση
                  πληρώνεται. Πρέπει να εξεταστούν ο χρόνος ενημέρωσης, η νέα πτήση και οι τυχόν
                  έκτακτες περιστάσεις.
                </p>
              </Card>
            </div>
          </section>

          <section className="mb-12">
            <h2 className="mb-6 text-3xl font-bold text-slate-900 dark:text-white">
              Επιστροφή χρημάτων, νέα πτήση και αποζημίωση
            </h2>
            <div className="grid gap-4 md:grid-cols-3">
              <Card className="border-blue-200 p-6 dark:border-blue-800">
                <h3 className="mb-2 text-lg font-semibold text-slate-900 dark:text-white">
                  Επιστροφή χρημάτων
                </h3>
                <p className="text-sm leading-6 text-slate-600 dark:text-slate-300">
                  Αν επιλέξετε να μην ταξιδέψετε, μπορεί να υπάρχει δικαίωμα επιστροφής της τιμής
                  του εισιτηρίου για το ακυρωμένο σκέλος.
                </p>
              </Card>
              <Card className="border-amber-200 p-6 dark:border-amber-800">
                <h3 className="mb-2 text-lg font-semibold text-slate-900 dark:text-white">
                  Εναλλακτική μεταφορά
                </h3>
                <p className="text-sm leading-6 text-slate-600 dark:text-slate-300">
                  Η αεροπορική μπορεί να σας μεταφέρει με άλλη πτήση, αλλά αυτό δεν κλείνει από
                  μόνο του την εξέταση της αποζημίωσης.
                </p>
              </Card>
              <Card className="border-green-200 p-6 dark:border-green-800">
                <h3 className="mb-2 text-lg font-semibold text-slate-900 dark:text-white">
                  Αποζημίωση
                </h3>
                <p className="text-sm leading-6 text-slate-600 dark:text-slate-300">
                  Αν η ακύρωση πληροί τους όρους του EU261, η αποζημίωση είναι ξεχωριστή αξίωση και
                  δεν ταυτίζεται με το εισιτήριο ή την επόμενη πτήση.
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
                  Στη διαδρομή Αθήνα–Ηράκλειο ο βασικός νομικός κορμός είναι σχετικά καθαρός, αλλά
                  στην πράξη πολλοί επιβάτες μπερδεύουν το αν πρέπει να ζητήσουν μόνο επιστροφή
                  χρημάτων ή και αποζημίωση.
                </p>
                <p>
                  Σε αυτό το σημείο το <strong>ClaimWinger</strong> μπορεί να βοηθήσει να φανεί αν
                  μιλάμε για καθαρή υπόθεση με 250 € ή για σενάριο όπου η αεροπορική επιχειρεί να
                  περιορίσει το δικαίωμα λόγω επαναδρομολόγησης. Η προμήθεια του ClaimWinger είναι
                  <strong> 30%</strong>, ανεξάρτητα από το αν η υπόθεση κλείσει εξωδικαστικά ή
                  δικαστικά.
                </p>
              </div>
              <div className="mt-6 flex flex-wrap gap-3">
                <Button asChild className="bg-sky-600 hover:bg-sky-700">
                  <Link
                    href={claimWingerHomeHref}
                    onClick={() =>
                      trackClaimClick(
                        "el_blog_athens_heraklion_cancelled_inline",
                        claimWingerHomeHref,
                      )
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
                        "el_blog_athens_heraklion_cancelled_cancelled",
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
                  Ακυρωμένη πτήση Αθήνα–Βιέννη
                </h3>
                <p className="mb-4 text-sm leading-6 text-slate-600 dark:text-slate-300">
                  Χρήσιμο αν θέλετε να συγκρίνετε παρόμοια περίπτωση ακυρωμένης πτήσης σε μια άλλη
                  σχετικά σύντομη διαδρομή.
                </p>
                <Link
                  href="/el/blog/akyromeni-ptisi-athina-vienni-ti-dikaioumai"
                  className="text-sm font-medium text-sky-600 hover:text-sky-700"
                >
                  Δείτε τον οδηγό
                </Link>
              </Card>
              <Card className="p-6">
                <h3 className="mb-3 text-lg font-semibold text-slate-900 dark:text-white">
                  Αλλαγή ώρας πτήσης
                </h3>
                <p className="mb-4 text-sm leading-6 text-slate-600 dark:text-slate-300">
                  Χρήσιμο αν η υπόθεση ξεκίνησε ως αλλαγή ώρας και μετά εξελίχθηκε σε πλήρη
                  ακύρωση.
                </p>
                <Link
                  href="/el/blog/dikaioumai-apozimiosi-an-allaxe-i-ora-tis-ptisis"
                  className="text-sm font-medium text-sky-600 hover:text-sky-700"
                >
                  Δείτε πότε αλλάζει το καθεστώς
                </Link>
              </Card>
              <Card className="p-6">
                <h3 className="mb-3 text-lg font-semibold text-slate-900 dark:text-white">
                  Καθυστερημένη πτήση
                </h3>
                <p className="mb-4 text-sm leading-6 text-slate-600 dark:text-slate-300">
                  Χρήσιμο αν τελικά το πρόβλημα καταγράφηκε όχι ως ακύρωση αλλά ως μεγάλη
                  καθυστέρηση.
                </p>
                <Link
                  href="/el/blog/poses-ores-kathysterisis-chreiazontai-gia-apozimiosi"
                  className="text-sm font-medium text-sky-600 hover:text-sky-700"
                >
                  Δείτε το βασικό πλαίσιο
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
                  Η ακυρωμένη πτήση Αθήνα–Ηράκλειο είναι μια καλή περίπτωση για να δει κανείς
                  ξεκάθαρα ότι η επιστροφή χρημάτων, η νέα πτήση και η αποζημίωση δεν είναι το ίδιο
                  πράγμα. Για την τυπική διαδρομή, η πιο συνηθισμένη αναφορά για αποζημίωση είναι
                  τα 250 €, αλλά μόνο όταν η υπόθεση πληροί πραγματικά τους όρους του EU261.
                </p>
                <p>
                  Η μεγαλύτερη προσοχή χρειάζεται στο πότε ενημερωθήκατε, στο τι εναλλακτική λύση
                  δόθηκε και στο αν η αεροπορική μπορεί πράγματι να αποδείξει έγκυρες έκτακτες
                  περιστάσεις.
                </p>
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
                Θέλετε να δείτε γρήγορα αν η ακύρωση Αθήνα–Ηράκλειο δίνει βάση για αποζημίωση;
              </h2>
              <p className="mb-6 text-base leading-7 text-slate-700 dark:text-slate-300">
                Μπορείτε να ξεκινήσετε από το <strong>ClaimWinger</strong> στα ελληνικά ή να δείτε
                και τις ξεχωριστές σελίδες για <strong>ακυρωμένη πτήση</strong> και
                <strong> καθυστερημένη πτήση</strong>, ανάλογα με το πώς περιγράφηκε τελικά το
                πρόβλημα.
              </p>
              <div className="flex flex-wrap gap-3">
                <Button asChild className="bg-sky-600 hover:bg-sky-700">
                  <Link
                    href={claimWingerHomeHref}
                    onClick={() =>
                      trackClaimClick(
                        "el_blog_athens_heraklion_cancelled_footer_home",
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
                    href={cancelledFlightHref}
                    onClick={() =>
                      trackClaimClick(
                        "el_blog_athens_heraklion_cancelled_footer_cancelled",
                        cancelledFlightHref,
                      )
                    }
                  >
                    Ακυρωμένη πτήση
                  </Link>
                </Button>
                <Button asChild variant="outline">
                  <Link
                    href={delayedFlightHref}
                    onClick={() =>
                      trackClaimClick(
                        "el_blog_athens_heraklion_cancelled_footer_delayed",
                        delayedFlightHref,
                      )
                    }
                  >
                    Καθυστερημένη πτήση
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
