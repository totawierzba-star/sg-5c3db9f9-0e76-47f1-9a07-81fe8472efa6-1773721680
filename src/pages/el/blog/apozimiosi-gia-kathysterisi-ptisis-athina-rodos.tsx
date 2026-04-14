import Link from "next/link";
import { ArrowRight, CheckCircle2, Clock, Euro, FileText, PlaneLanding } from "lucide-react";

import { ClaimWingerElSection } from "@/components/ClaimWingerElSection";
import { LayoutEl } from "@/components/LayoutEl";
import { SEO } from "@/components/SEO";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { pushClaimWingerEvent } from "@/lib/claimwingerTracking";

const articleUrl =
  "https://problemlot.com/el/blog/apozimiosi-gia-kathysterisi-ptisis-athina-rodos";
const claimWingerHomeHref =
  "https://claimwinger.com/el?utm_source=problemlot-el&utm_medium=article_link&utm_campaign=athens_rhodes_delay";
const delayedFlightHref =
  "https://claimwinger.com/el/kathysterimeni-ptisi?utm_source=problemlot-el&utm_medium=article_link&utm_campaign=athens_rhodes_delay";
const cancelledFlightHref =
  "https://claimwinger.com/el/akyromeni-ptisi?utm_source=problemlot-el&utm_medium=article_link&utm_campaign=athens_rhodes_delay";

const faqItems = [
  {
    question: "Δικαιούμαι αποζημίωση για καθυστέρηση πτήσης Αθήνα–Ρόδος;",
    answer:
      "Συχνά ναι, αν φτάσατε στη Ρόδο με καθυστέρηση 3 ωρών ή περισσότερο, η πτήση εμπίπτει στο EU261 και η αεροπορική δεν αποδείξει έγκυρες έκτακτες περιστάσεις. Για μια τυπική απευθείας πτήση Αθήνα–Ρόδος, η αποζημίωση είναι συχνά 250 €.",
  },
  {
    question: "Πόσα χρήματα μπορεί να δίνει αυτή η διαδρομή;",
    answer:
      "Για μια τυπική απευθείας πτήση Αθήνα–Ρόδος, η πιο συνηθισμένη αναφορά είναι τα 250 €, γιατί πρόκειται συνήθως για εσωτερική διαδρομή έως 1.500 χλμ.",
  },
  {
    question: "Μετράει η καθυστέρηση στην αναχώρηση ή στην άφιξη;",
    answer:
      "Για τη χρηματική αποζημίωση μετρά κυρίως η καθυστέρηση στην τελική άφιξη. Μια πτήση μπορεί να φύγει αργά αλλά να ανακτήσει μέρος του χρόνου στη διαδρομή.",
  },
  {
    question: "Ισχύει αυτό και για εσωτερικές πτήσεις προς νησιά;",
    answer:
      "Ναι. Το EU261 εφαρμόζεται και στις εσωτερικές πτήσεις εντός Ελλάδας, άρα μια πτήση Αθήνα–Ρόδος μπορεί επίσης να εμπίπτει στο ίδιο πλαίσιο προστασίας.",
  },
];

function trackClaimClick(placement: string, destination: string) {
  pushClaimWingerEvent("claimwinger_cta_click", {
    locale: "el",
    placement,
    destination,
  });
}

export default function AthensRhodesDelayCompensationElPage() {
  return (
    <LayoutEl>
      <SEO
        title="Αποζημίωση για καθυστέρηση πτήσης Αθήνα–Ρόδος"
        description="Καθυστέρησε η πτήση σας από Αθήνα προς Ρόδο; Δείτε πότε μπορεί να υπάρχει αποζημίωση 250 €, τι μετρά πραγματικά στο EU261 και γιατί η τελική άφιξη είναι το βασικό κριτήριο."
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
            headline: "Αποζημίωση για καθυστέρηση πτήσης Αθήνα–Ρόδος",
            description:
              "Πρακτικός οδηγός για το πότε μια καθυστέρηση πτήσης Αθήνα–Ρόδος μπορεί να οδηγεί σε αποζημίωση και γιατί το ποσό συνδέεται συχνά με τα 250 €.",
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
                name: "Αποζημίωση για καθυστέρηση πτήσης Αθήνα–Ρόδος",
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
            <span>Αποζημίωση για καθυστέρηση πτήσης Αθήνα–Ρόδος</span>
          </div>

          <header className="mb-10">
            <div className="mb-4 inline-flex items-center gap-2 rounded-full bg-sky-100 px-4 py-2 text-sm font-medium text-sky-700 dark:bg-sky-900/30 dark:text-sky-300">
              Οδηγός εσωτερικής διαδρομής στην Ελλάδα
            </div>
            <h1 className="mb-5 text-4xl font-bold tracking-tight text-slate-900 dark:text-white md:text-5xl">
              Αποζημίωση για καθυστέρηση πτήσης Αθήνα–Ρόδος
            </h1>
            <p className="max-w-3xl text-xl leading-8 text-slate-600 dark:text-slate-300">
              Αν η πτήση σας από <strong>Αθήνα προς Ρόδο</strong> έφτασε με καθυστέρηση
              τουλάχιστον <strong>3 ωρών</strong>, η υπόθεση μπορεί να οδηγεί σε αποζημίωση
              σύμφωνα με το <strong>EU261</strong>, εφόσον η αεροπορική δεν αποδείξει έγκυρες
              έκτακτες περιστάσεις. Για την τυπική απευθείας διαδρομή Αθήνα–Ρόδος, η πιο
              συνηθισμένη αναφορά είναι τα <strong>250 €</strong>.
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
                  <strong>Ναι, συχνά ναι.</strong> Πρόκειται για πτήση που εμπίπτει καθαρά στην
                  ευρωπαϊκή προστασία, άρα όταν η τελική άφιξη καθυστερήσει αρκετά, η βάση της
                  αξίωσης μπορεί να είναι ισχυρή.
                </p>
                <p>
                  Για το κλασικό σκέλος Αθήνα–Ρόδος, η αποζημίωση συνδέεται συνήθως με τα
                  <strong> 250 €</strong>.
                </p>
                <p>
                  Το πιο σημαντικό είναι να μην κοιτάτε μόνο την ώρα αναχώρησης, αλλά την
                  <strong> τελική άφιξη</strong> στον πραγματικό προορισμό.
                </p>
              </div>
            </Card>
          </section>

          <ClaimWingerElSection
            className="mb-12"
            title="Καθυστέρησε η πτήση σας Αθήνα–Ρόδος;"
            description="Το ClaimWinger Ελλάδα μπορεί να βοηθήσει να ξεχωρίσετε αν έχετε μια καθαρή υπόθεση με 250 € ή αν η εικόνα αλλάζει λόγω μεταγενέστερης ανταπόκρισης, αλλαγής πτήσης ή του τρόπου που περιγράφει το πρόβλημα η αεροπορική."
            ctaHref="https://claimwinger.com/el/kathysterimeni-ptisi?utm_source=problemlot-el&utm_medium=embedded_cta&utm_campaign=athens_rhodes_delay"
            ctaLabel="Έλεγχος με το ClaimWinger"
            loadingLabel="Φορτώνεται η φόρμα ClaimWinger..."
            loadingDescription="Σε λίγο θα εμφανιστεί η ελληνική φόρμα για έλεγχο της καθυστερημένης πτήσης σας."
            placement="el_blog_athens_rhodes_delay_embed"
          />

          <section className="mb-12">
            <h2 className="mb-6 text-3xl font-bold text-slate-900 dark:text-white">
              Γιατί αυτή η διαδρομή συνδέεται συνήθως με 250 €
            </h2>
            <div className="grid gap-4 md:grid-cols-2">
              <Card className="border-slate-200 p-6 dark:border-slate-700">
                <h3 className="mb-2 text-lg font-semibold text-slate-900 dark:text-white">
                  Τυπική απόσταση διαδρομής
                </h3>
                <p className="text-sm leading-6 text-slate-600 dark:text-slate-300">
                  Για μια τυπική απευθείας πτήση Αθήνα–Ρόδος, η διαδρομή παραμένει στο επίπεδο έως
                  1.500 χλμ., που είναι και ο λόγος για τον οποίο η πιο συνηθισμένη αναφορά είναι
                  τα 250 €.
                </p>
              </Card>
              <Card className="border-slate-200 p-6 dark:border-slate-700">
                <h3 className="mb-2 text-lg font-semibold text-slate-900 dark:text-white">
                  Πτήση προς νησί, ίδια προστασία
                </h3>
                <p className="text-sm leading-6 text-slate-600 dark:text-slate-300">
                  Το γεγονός ότι μιλάμε για εσωτερική διαδρομή προς νησί δεν μειώνει από μόνο του
                  τα δικαιώματά σας. Το EU261 εφαρμόζεται και εδώ, όπως και σε άλλες πτήσεις
                  εντός ΕΕ.
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
                  κυρίως πόσο αργά φτάσατε τελικά στη Ρόδο.
                </p>
              </Card>
              <Card className="border-slate-200 p-6 dark:border-slate-700">
                <div className="mb-3 flex items-center gap-2 text-slate-900 dark:text-white">
                  <CheckCircle2 className="h-5 w-5 text-sky-600" />
                  <h3 className="text-lg font-semibold">Οι έκτακτες περιστάσεις</h3>
                </div>
                <p className="text-sm leading-6 text-slate-600 dark:text-slate-300">
                  Η αεροπορική δεν αρκεί να επικαλεστεί γενικά επιχειρησιακή πίεση ή ασαφή
                  προβλήματα ημέρας. Αν θέλει να αρνηθεί πληρωμή, πρέπει να δείξει ότι πράγματι
                  υπήρχε έγκυρος λόγος που δεν μπορούσε να αποφευχθεί.
                </p>
              </Card>
              <Card className="border-slate-200 p-6 dark:border-slate-700">
                <div className="mb-3 flex items-center gap-2 text-slate-900 dark:text-white">
                  <Euro className="h-5 w-5 text-sky-600" />
                  <h3 className="text-lg font-semibold">Η σωστή κατηγορία ποσού</h3>
                </div>
                <p className="text-sm leading-6 text-slate-600 dark:text-slate-300">
                  Για αυτή τη διαδρομή η σωστή αναφορά είναι συνήθως τα <strong>250 €</strong>,
                  όχι τα 400 € που βλέπουμε σε μεγαλύτερες ευρωπαϊκές διαδρομές.
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
                  Στη διαδρομή Αθήνα–Ρόδος το βασικό πλαίσιο είναι αρκετά καθαρό, αλλά στην πράξη
                  συχνά προκύπτουν ερωτήματα για το αν η αεροπορική μιλά για απλή καθυστέρηση,
                  αλλαγή πτήσης ή πρόβλημα που επηρέασε ολόκληρη την ημέρα ταξιδιού.
                </p>
                <p>
                  Σε αυτό το σημείο το <strong>ClaimWinger</strong> μπορεί να βοηθήσει να φανεί αν
                  μιλάμε για καθαρή υπόθεση με 250 € ή για πιο σύνθετο σενάριο. Η προμήθεια του
                  ClaimWinger είναι <strong>30%</strong>, ανεξάρτητα από το αν η υπόθεση κλείσει
                  εξωδικαστικά ή δικαστικά.
                </p>
              </div>
              <div className="mt-6 flex flex-wrap gap-3">
                <Button asChild className="bg-sky-600 hover:bg-sky-700">
                  <Link
                    href={claimWingerHomeHref}
                    onClick={() =>
                      trackClaimClick("el_blog_athens_rhodes_delay_inline", claimWingerHomeHref)
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
                      trackClaimClick("el_blog_athens_rhodes_delay_delayed", delayedFlightHref)
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
                  Ποια έγγραφα χρειάζονται;
                </h3>
                <p className="mb-4 text-sm leading-6 text-slate-600 dark:text-slate-300">
                  Χρήσιμο αν θέλετε να δείτε ποια στοιχεία κρατάτε για να τεκμηριώσετε την
                  καθυστέρηση.
                </p>
                <Link
                  href="/el/blog/poia-engrafa-chreiazomai-gia-tin-apozimiosi"
                  className="text-sm font-medium text-sky-600 hover:text-sky-700"
                >
                  Δείτε τη λίστα
                </Link>
              </Card>
              <Card className="p-6">
                <h3 className="mb-3 text-lg font-semibold text-slate-900 dark:text-white">
                  Αθήνα–Θεσσαλονίκη
                </h3>
                <p className="mb-4 text-sm leading-6 text-slate-600 dark:text-slate-300">
                  Χρήσιμο αν θέλετε να συγκρίνετε άλλη εσωτερική διαδρομή στην Ελλάδα που επίσης
                  συνδέεται συνήθως με 250 €.
                </p>
                <Link
                  href="/el/blog/apozimiosi-gia-kathysterisi-ptisis-athina-thessaloniki"
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
                  Η διαδρομή Αθήνα–Ρόδος είναι από τις πιο καθαρές περιπτώσεις για να καταλάβει
                  κανείς πώς λειτουργεί το EU261 και στις εσωτερικές πτήσεις προς νησιά. Αν η
                  καθυστέρηση στην άφιξη περάσει το σχετικό όριο και δεν υπάρχουν έγκυρες έκτακτες
                  περιστάσεις, η πιο συνηθισμένη αναφορά είναι τα 250 €.
                </p>
                <p>
                  Η μεγαλύτερη προσοχή χρειάζεται στο πώς τεκμηριώνεται ο λόγος της καθυστέρησης
                  και στο ότι μετρά η τελική άφιξη, όχι μόνο το πότε έφυγε το αεροσκάφος από την
                  Αθήνα.
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
                Θέλετε να δείτε γρήγορα αν η καθυστέρηση Αθήνα–Ρόδος έχει βάση για αποζημίωση;
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
                      trackClaimClick("el_blog_athens_rhodes_delay_footer_home", claimWingerHomeHref)
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
                        "el_blog_athens_rhodes_delay_footer_delayed",
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
                        "el_blog_athens_rhodes_delay_footer_cancelled",
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
