import Link from "next/link";
import { ArrowRight, CheckCircle2, Clock, Euro, FileText, PlaneLanding } from "lucide-react";

import { ClaimWingerElSection } from "@/components/ClaimWingerElSection";
import { LayoutEl } from "@/components/LayoutEl";
import { SEO } from "@/components/SEO";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { pushClaimWingerEvent } from "@/lib/claimwingerTracking";

const articleUrl =
  "https://problemlot.com/el/blog/apozimiosi-gia-kathysterisi-ptisis-athina-nea-yorki";
const claimWingerHomeHref =
  "https://claimwinger.com/el?utm_source=problemlot-el&utm_medium=article_link&utm_campaign=athens_newyork_delay";
const delayedFlightHref =
  "https://claimwinger.com/el/kathysterimeni-ptisi?utm_source=problemlot-el&utm_medium=article_link&utm_campaign=athens_newyork_delay";
const cancelledFlightHref =
  "https://claimwinger.com/el/akyromeni-ptisi?utm_source=problemlot-el&utm_medium=article_link&utm_campaign=athens_newyork_delay";

const faqItems = [
  {
    question: "Δικαιούμαι αποζημίωση για καθυστέρηση πτήσης Αθήνα–Νέα Υόρκη;",
    answer:
      "Συχνά ναι, αν φτάσατε στον τελικό προορισμό με καθυστέρηση 3 ωρών ή περισσότερο, η πτήση εμπίπτει στο EU261 και η αεροπορική δεν αποδείξει έγκυρες έκτακτες περιστάσεις. Για μια απευθείας πτήση Αθήνα–Νέα Υόρκη, η αποζημίωση είναι συχνά 600 €.",
  },
  {
    question: "Πόσα χρήματα μπορεί να δίνει αυτή η διαδρομή;",
    answer:
      "Για μια τυπική απευθείας πτήση Αθήνα–Νέα Υόρκη, η αποζημίωση συνδέεται συνήθως με το επίπεδο των 600 €, γιατί μιλάμε για μεγάλη πτήση άνω των 3.500 χλμ.",
  },
  {
    question: "Μετράει η καθυστέρηση στην αναχώρηση ή στην άφιξη;",
    answer:
      "Για τη χρηματική αποζημίωση μετρά κυρίως η καθυστέρηση στην τελική άφιξη. Μια πτήση μπορεί να φύγει αργά αλλά να ανακτήσει μέρος του χρόνου στη διαδρομή ή να χάσει περισσότερο χρόνο μετά την απογείωση.",
  },
  {
    question: "Τι γίνεται αν η Νέα Υόρκη δεν ήταν ο τελικός προορισμός;",
    answer:
      "Αν η Νέα Υόρκη ήταν μόνο ενδιάμεσος σταθμός σε μία ενιαία κράτηση, τότε μπορεί να μετρά περισσότερο η τελική άφιξη ολόκληρου του ταξιδιού και όχι μόνο το σκέλος Αθήνα–Νέα Υόρκη.",
  },
];

function trackClaimClick(placement: string, destination: string) {
  pushClaimWingerEvent("claimwinger_cta_click", {
    locale: "el",
    placement,
    destination,
  });
}

export default function AthensNewYorkDelayCompensationElPage() {
  return (
    <LayoutEl>
      <SEO
        title="Αποζημίωση για καθυστέρηση πτήσης Αθήνα–Νέα Υόρκη"
        description="Καθυστέρησε η πτήση σας από Αθήνα προς Νέα Υόρκη; Δείτε πότε μπορεί να υπάρχει αποζημίωση 600 €, τι σημαίνει το EU261 και γιατί μετρά η τελική άφιξη."
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
            headline: "Αποζημίωση για καθυστέρηση πτήσης Αθήνα–Νέα Υόρκη",
            description:
              "Πρακτικός οδηγός για το πότε μια καθυστέρηση πτήσης Αθήνα–Νέα Υόρκη μπορεί να οδηγεί σε αποζημίωση και γιατί η διαδρομή αυτή συνδέεται συχνά με ποσό 600 €.",
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
                name: "Αποζημίωση για καθυστέρηση πτήσης Αθήνα–Νέα Υόρκη",
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
            <span>Αποζημίωση για καθυστέρηση πτήσης Αθήνα–Νέα Υόρκη</span>
          </div>

          <header className="mb-10">
            <div className="mb-4 inline-flex items-center gap-2 rounded-full bg-sky-100 px-4 py-2 text-sm font-medium text-sky-700 dark:bg-sky-900/30 dark:text-sky-300">
              Οδηγός long-haul διαδρομής για Αθήνα και Νέα Υόρκη
            </div>
            <h1 className="mb-5 text-4xl font-bold tracking-tight text-slate-900 dark:text-white md:text-5xl">
              Αποζημίωση για καθυστέρηση πτήσης Αθήνα–Νέα Υόρκη
            </h1>
            <p className="max-w-3xl text-xl leading-8 text-slate-600 dark:text-slate-300">
              Σε μια τυπική πτήση <strong>Αθήνα–Νέα Υόρκη</strong>, η απάντηση είναι συχνά
              θετική: αν φτάσατε με καθυστέρηση τουλάχιστον <strong>3 ωρών</strong>, η διαδρομή
              εμπίπτει στο <strong>EU261</strong> και η αεροπορική δεν αποδείξει έγκυρες έκτακτες
              περιστάσεις, μπορεί να υπάρχει αποζημίωση. Για αυτή τη διαδρομή, η πιο τυπική
              κατηγορία είναι <strong>600 €</strong>.
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
            <Card className="border-sky-200 bg-gradient-to-br from-sky-600 to-blue-700 p-8 text-white shadow-xl dark:border-sky-800">
              <h2 className="mb-4 text-2xl font-bold">Σύντομη απάντηση</h2>
              <div className="space-y-3 text-base leading-7 text-sky-50">
                <p>
                  <strong>Ναι, συχνά ναι.</strong> Η πτήση αναχωρεί από αεροδρόμιο της ΕΕ, άρα το
                  EU261 εφαρμόζεται κανονικά και στη διαδρομή προς τις Ηνωμένες Πολιτείες.
                </p>
                <p>
                  Για μια απευθείας πτήση Αθήνα–Νέα Υόρκη, η αποζημίωση συνήθως συνδέεται με το
                  επίπεδο των <strong>600 €</strong>, όχι με τα χαμηλότερα επίπεδα που βλέπουμε σε
                  μικρότερες ευρωπαϊκές διαδρομές.
                </p>
                <p>
                  Αν όμως η Νέα Υόρκη ήταν μόνο ενδιάμεσος σταθμός σε μία ενιαία κράτηση, μπορεί να
                  μετρά περισσότερο η <strong>τελική άφιξη</strong> ολόκληρου του ταξιδιού.
                </p>
              </div>
            </Card>
          </section>

          <ClaimWingerElSection
            className="mb-12"
            title="Καθυστέρησε η πτήση σας Αθήνα–Νέα Υόρκη;"
            description="Το ClaimWinger Ελλάδα μπορεί να βοηθήσει να φανεί γρήγορα αν πρόκειται για καθαρή long-haul υπόθεση EU261 ή για πιο σύνθετη περίπτωση όπου μετρά ο τελικός προορισμός, οι ανταποκρίσεις και ο λόγος της καθυστέρησης."
            ctaHref="https://claimwinger.com/el/kathysterimeni-ptisi?utm_source=problemlot-el&utm_medium=embedded_cta&utm_campaign=athens_newyork_delay"
            ctaLabel="Έλεγχος με το ClaimWinger"
            loadingLabel="Φορτώνεται η φόρμα ClaimWinger..."
            loadingDescription="Σε λίγο θα εμφανιστεί η ελληνική φόρμα για έλεγχο της καθυστερημένης πτήσης σας."
            placement="el_blog_athens_newyork_delay_embed"
          />

          <section className="mb-12">
            <h2 className="mb-6 text-3xl font-bold text-slate-900 dark:text-white">
              Γιατί αυτή η διαδρομή συνδέεται συνήθως με 600 €
            </h2>
            <div className="grid gap-4 md:grid-cols-2">
              <Card className="border-slate-200 p-6 dark:border-slate-700">
                <h3 className="mb-2 text-lg font-semibold text-slate-900 dark:text-white">
                  Long-haul απόσταση
                </h3>
                <p className="text-sm leading-6 text-slate-600 dark:text-slate-300">
                  Η τυπική διαδρομή Αθήνα–Νέα Υόρκη είναι μεγάλη πτήση άνω των 3.500 χλμ., οπότε
                  η πιο συνηθισμένη αναφορά αποζημίωσης στο EU261 είναι τα 600 €.
                </p>
              </Card>
              <Card className="border-slate-200 p-6 dark:border-slate-700">
                <h3 className="mb-2 text-lg font-semibold text-slate-900 dark:text-white">
                  Όχι αυτόματα σε κάθε καθυστέρηση
                </h3>
                <p className="text-sm leading-6 text-slate-600 dark:text-slate-300">
                  Το ότι η διαδρομή συνδέεται με 600 € δεν σημαίνει αυτόματα ότι κάθε καθυστέρηση
                  πληρώνεται. Πρέπει να εξεταστούν η τελική άφιξη και οι τυχόν έκτακτες
                  περιστάσεις που επικαλείται η αεροπορική.
                </p>
              </Card>
            </div>
          </section>

          <section className="mb-12">
            <h2 className="mb-6 text-3xl font-bold text-slate-900 dark:text-white">
              Τι είναι αυτό που κρίνει πραγματικά την υπόθεση
            </h2>
            <div className="grid gap-4">
              <Card className="border-slate-200 p-6 dark:border-slate-700">
                <div className="mb-3 flex items-center gap-2 text-slate-900 dark:text-white">
                  <PlaneLanding className="h-5 w-5 text-sky-600" />
                  <h3 className="text-lg font-semibold">Η τελική άφιξη</h3>
                </div>
                <p className="text-sm leading-6 text-slate-600 dark:text-slate-300">
                  Για τη χρηματική αποζημίωση δεν μετρά μόνο το πόσο καθυστέρησε η αναχώρηση, αλλά
                  κυρίως πόσο αργά φτάσατε τελικά στον προορισμό σας.
                </p>
              </Card>
              <Card className="border-slate-200 p-6 dark:border-slate-700">
                <div className="mb-3 flex items-center gap-2 text-slate-900 dark:text-white">
                  <CheckCircle2 className="h-5 w-5 text-sky-600" />
                  <h3 className="text-lg font-semibold">Οι έκτακτες περιστάσεις</h3>
                </div>
                <p className="text-sm leading-6 text-slate-600 dark:text-slate-300">
                  Η αεροπορική δεν αρκεί να πει γενικά ότι υπήρξε λειτουργικό πρόβλημα. Αν θέλει να
                  αρνηθεί πληρωμή, πρέπει να αποδείξει πραγματικά έγκυρες έκτακτες περιστάσεις.
                </p>
              </Card>
              <Card className="border-slate-200 p-6 dark:border-slate-700">
                <div className="mb-3 flex items-center gap-2 text-slate-900 dark:text-white">
                  <Euro className="h-5 w-5 text-sky-600" />
                  <h3 className="text-lg font-semibold">Η σωστή κατηγορία ποσού</h3>
                </div>
                <p className="text-sm leading-6 text-slate-600 dark:text-slate-300">
                  Για αυτή τη διαδρομή χρειάζεται προσοχή, γιατί μερικοί επιβάτες υποθέτουν από
                  συνήθεια τα 400 €. Στην πράξη, για το κλασικό Αθήνα–Νέα Υόρκη η σωστή αναφορά
                  είναι συνήθως τα <strong>600 €</strong>.
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
                  Στη διαδρομή Αθήνα–Νέα Υόρκη το πιο συχνό λάθος δεν είναι τόσο η ύπαρξη του
                  δικαιώματος, όσο η λανθασμένη κατηγορία του ποσού ή η λανθασμένη ανάγνωση όταν η
                  Νέα Υόρκη ήταν μόνο στάση σε μεγαλύτερη διαδρομή.
                </p>
                <p>
                  Σε αυτό το σημείο το <strong>ClaimWinger</strong> μπορεί να βοηθήσει να
                  ξεχωρίσετε αν μιλάμε για καθαρή long-haul υπόθεση ή για πιο σύνθετη υπόθεση με
                  τελικό προορισμό αλλού. Η προμήθεια του ClaimWinger είναι <strong>30%</strong>,
                  ανεξάρτητα από το αν η υπόθεση κλείσει εξωδικαστικά ή δικαστικά.
                </p>
              </div>
              <div className="mt-6 flex flex-wrap gap-3">
                <Button asChild className="bg-sky-600 hover:bg-sky-700">
                  <Link
                    href={claimWingerHomeHref}
                    onClick={() =>
                      trackClaimClick("el_blog_athens_newyork_delay_inline", claimWingerHomeHref)
                    }
                  >
                    Έλεγχος υπόθεσης με ClaimWinger
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </Link>
                </Button>
                <Button asChild variant="outline">
                  <Link
                    href={delayedFlightHref}
                    onClick={() =>
                      trackClaimClick("el_blog_athens_newyork_delay_delayed", delayedFlightHref)
                    }
                  >
                    Δείτε και τα δικαιώματα σε καθυστερημένη πτήση
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
                  Καθυστέρηση 3 ωρών
                </h3>
                <p className="mb-4 text-sm leading-6 text-slate-600 dark:text-slate-300">
                  Ο οδηγός για το όριο που ανοίγει συνήθως τον δρόμο για πραγματική αποζημίωση.
                </p>
                <Link
                  href="/el/blog/posa-chrimata-pairno-gia-kathysterisi-3-oron"
                  className="text-sm font-medium text-sky-600 hover:text-sky-700"
                >
                  Δείτε τα ποσά
                </Link>
              </Card>
              <Card className="p-6">
                <h3 className="mb-3 text-lg font-semibold text-slate-900 dark:text-white">
                  Πτήση με ανταπόκριση
                </h3>
                <p className="mb-4 text-sm leading-6 text-slate-600 dark:text-slate-300">
                  Χρήσιμο όταν η Νέα Υόρκη ήταν μέρος μεγαλύτερου ταξιδιού με ενιαία κράτηση.
                </p>
                <Link
                  href="/el/blog/ischyei-apozimiosi-se-ptisi-me-antapokrisi"
                  className="text-sm font-medium text-sky-600 hover:text-sky-700"
                >
                  Δείτε πώς κρίνεται
                </Link>
              </Card>
              <Card className="p-6">
                <h3 className="mb-3 text-lg font-semibold text-slate-900 dark:text-white">
                  Ηράκλειο–Λονδίνο
                </h3>
                <p className="mb-4 text-sm leading-6 text-slate-600 dark:text-slate-300">
                  Χρήσιμο αν θέλετε να συγκρίνετε μεγάλη διεθνή διαδρομή από ελληνική αφετηρία με
                  άλλο βασικό long-haul ή UK-directed intent.
                </p>
                <Link
                  href="/el/blog/apozimiosi-gia-kathysterisi-ptisis-irakleio-londino"
                  className="text-sm font-medium text-sky-600 hover:text-sky-700"
                >
                  Δείτε τον οδηγό
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
                  Η διαδρομή Αθήνα–Νέα Υόρκη είναι από εκείνες όπου το βασικό νομικό πλαίσιο είναι
                  αρκετά καθαρό: αναχώρηση από ΕΕ, προστασία EU261 και συχνά αποζημίωση στο επίπεδο
                  των 600 € όταν η καθυστέρηση στην άφιξη περάσει το σχετικό όριο.
                </p>
                <p>
                  Η μεγαλύτερη προσοχή χρειάζεται όχι τόσο στο αν υπάρχει θεωρητικά προστασία, αλλά
                  στο αν η Νέα Υόρκη ήταν ο τελικός προορισμός και στο αν η αεροπορική επικαλείται
                  λόγους που πράγματι μπορούν να μειώσουν ή να αποκλείσουν την πληρωμή.
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
                Θέλετε να δείτε γρήγορα αν η καθυστέρηση Αθήνα–Νέα Υόρκη έχει βάση για αποζημίωση;
              </h2>
              <p className="mb-6 text-base leading-7 text-slate-700 dark:text-slate-300">
                Μπορείτε να ξεκινήσετε από το <strong>ClaimWinger</strong> στα ελληνικά ή να δείτε
                και τις ξεχωριστές σελίδες για <strong>καθυστερημένη πτήση</strong> και
                <strong> ακυρωμένη πτήση</strong>, ανάλογα με το πώς περιγράφηκε τελικά το
                πρόβλημα.
              </p>
              <div className="flex flex-wrap gap-3">
                <Button asChild className="bg-sky-600 hover:bg-sky-700">
                  <Link
                    href={claimWingerHomeHref}
                    onClick={() =>
                      trackClaimClick(
                        "el_blog_athens_newyork_delay_footer_home",
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
                        "el_blog_athens_newyork_delay_footer_delayed",
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
                        "el_blog_athens_newyork_delay_footer_cancelled",
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
