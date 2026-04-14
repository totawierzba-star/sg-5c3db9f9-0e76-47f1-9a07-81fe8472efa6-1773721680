import Link from "next/link";
import { ArrowRight, CheckCircle2, Clock, Euro, FileText, PlaneLanding } from "lucide-react";

import { ClaimWingerElSection } from "@/components/ClaimWingerElSection";
import { LayoutEl } from "@/components/LayoutEl";
import { SEO } from "@/components/SEO";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { pushClaimWingerEvent } from "@/lib/claimwingerTracking";

const articleUrl =
  "https://problemlot.com/el/blog/apozimiosi-gia-kathysterisi-ptisis-thessaloniki-londino";
const claimWingerHomeHref =
  "https://claimwinger.com/el?utm_source=problemlot-el&utm_medium=article_link&utm_campaign=thessaloniki_london_delay";
const delayedFlightHref =
  "https://claimwinger.com/el/kathysterimeni-ptisi?utm_source=problemlot-el&utm_medium=article_link&utm_campaign=thessaloniki_london_delay";
const cancelledFlightHref =
  "https://claimwinger.com/el/akyromeni-ptisi?utm_source=problemlot-el&utm_medium=article_link&utm_campaign=thessaloniki_london_delay";

const faqItems = [
  {
    question: "Δικαιούμαι αποζημίωση για καθυστέρηση πτήσης Θεσσαλονίκη–Λονδίνο;",
    answer:
      "Συχνά ναι, αν φτάσατε στον τελικό προορισμό με καθυστέρηση 3 ωρών ή περισσότερο, η πτήση εμπίπτει στο EU261 και η αεροπορική δεν αποδείξει έγκυρες έκτακτες περιστάσεις. Για μια απευθείας πτήση Θεσσαλονίκη–Λονδίνο, η αποζημίωση είναι συχνά 400 €.",
  },
  {
    question: "Πόσα χρήματα μπορεί να δίνει αυτή η διαδρομή;",
    answer:
      "Για μια τυπική απευθείας πτήση Θεσσαλονίκη–Λονδίνο, η αποζημίωση συνδέεται συνήθως με το επίπεδο των 400 €, γιατί μιλάμε συνήθως για πτήση άνω των 1.500 χλμ. αλλά κάτω από 3.500 χλμ.",
  },
  {
    question: "Ισχύει αυτό και μετά το Brexit;",
    answer:
      "Ναι. Εφόσον η πτήση αναχωρεί από τη Θεσσαλονίκη, δηλαδή από αεροδρόμιο της ΕΕ, το EU261 εξακολουθεί να εφαρμόζεται και στη διαδρομή προς το Ηνωμένο Βασίλειο.",
  },
  {
    question: "Τι γίνεται αν το Λονδίνο δεν ήταν ο τελικός προορισμός;",
    answer:
      "Αν το Λονδίνο ήταν μόνο ενδιάμεσος σταθμός σε μία ενιαία κράτηση, τότε μπορεί να μετρά περισσότερο η τελική άφιξη ολόκληρου του ταξιδιού και όχι μόνο το σκέλος Θεσσαλονίκη–Λονδίνο.",
  },
];

function trackClaimClick(placement: string, destination: string) {
  pushClaimWingerEvent("claimwinger_cta_click", {
    locale: "el",
    placement,
    destination,
  });
}

export default function ThessalonikiLondonDelayCompensationElPage() {
  return (
    <LayoutEl>
      <SEO
        title="Αποζημίωση για καθυστέρηση πτήσης Θεσσαλονίκη–Λονδίνο"
        description="Καθυστέρησε η πτήση σας από Θεσσαλονίκη προς Λονδίνο; Δείτε πότε μπορεί να υπάρχει αποζημίωση 400 €, τι σημαίνει το EU261 και γιατί μετρά η τελική άφιξη."
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
            headline: "Αποζημίωση για καθυστέρηση πτήσης Θεσσαλονίκη–Λονδίνο",
            description:
              "Πρακτικός οδηγός για το πότε μια καθυστέρηση πτήσης Θεσσαλονίκη–Λονδίνο μπορεί να οδηγεί σε αποζημίωση και γιατί η διαδρομή αυτή συνδέεται συχνά με ποσό 400 €.",
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
                name: "Αποζημίωση για καθυστέρηση πτήσης Θεσσαλονίκη–Λονδίνο",
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
            <span>Αποζημίωση για καθυστέρηση πτήσης Θεσσαλονίκη–Λονδίνο</span>
          </div>

          <header className="mb-10">
            <div className="mb-4 inline-flex items-center gap-2 rounded-full bg-sky-100 px-4 py-2 text-sm font-medium text-sky-700 dark:bg-sky-900/30 dark:text-sky-300">
              Οδηγός διαδρομής για Θεσσαλονίκη και Λονδίνο
            </div>
            <h1 className="mb-5 text-4xl font-bold tracking-tight text-slate-900 dark:text-white md:text-5xl">
              Αποζημίωση για καθυστέρηση πτήσης Θεσσαλονίκη–Λονδίνο
            </h1>
            <p className="max-w-3xl text-xl leading-8 text-slate-600 dark:text-slate-300">
              Σε μια τυπική πτήση <strong>Θεσσαλονίκη–Λονδίνο</strong>, η απάντηση είναι συχνά
              θετική: αν φτάσατε με καθυστέρηση τουλάχιστον <strong>3 ωρών</strong>, η διαδρομή
              εμπίπτει στο <strong>EU261</strong> και η αεροπορική δεν αποδείξει έγκυρες έκτακτες
              περιστάσεις, μπορεί να υπάρχει αποζημίωση. Για αυτή τη διαδρομή, η πιο τυπική
              κατηγορία είναι <strong>400 €</strong>.
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
                  EU261 εφαρμόζεται κανονικά και στη διαδρομή προς το Ηνωμένο Βασίλειο.
                </p>
                <p>
                  Για μια απευθείας πτήση Θεσσαλονίκη–Λονδίνο, η αποζημίωση συνήθως συνδέεται με το
                  επίπεδο των <strong>400 €</strong>, όχι με τα 250 € που βλέπουμε σε σημαντικά
                  κοντύτερες διαδρομές.
                </p>
                <p>
                  Αν όμως το Λονδίνο ήταν μόνο ενδιάμεσος σταθμός σε μία ενιαία κράτηση, μπορεί να
                  μετρά περισσότερο η <strong>τελική άφιξη</strong> ολόκληρου του ταξιδιού.
                </p>
              </div>
            </Card>
          </section>

          <ClaimWingerElSection
            className="mb-12"
            title="Καθυστέρησε η πτήση σας Θεσσαλονίκη–Λονδίνο;"
            description="Το ClaimWinger Ελλάδα μπορεί να βοηθήσει να φανεί γρήγορα αν πρόκειται για καθαρή υπόθεση EU261 ή για πιο σύνθετη περίπτωση όπου μετρά ο τελικός προορισμός, οι ανταποκρίσεις και ο λόγος της καθυστέρησης."
            ctaHref="https://claimwinger.com/el/kathysterimeni-ptisi?utm_source=problemlot-el&utm_medium=embedded_cta&utm_campaign=thessaloniki_london_delay"
            ctaLabel="Έλεγχος με το ClaimWinger"
            loadingLabel="Φορτώνεται η φόρμα ClaimWinger..."
            loadingDescription="Σε λίγο θα εμφανιστεί η ελληνική φόρμα για έλεγχο της καθυστερημένης πτήσης σας."
            placement="el_blog_thessaloniki_london_delay_embed"
          />

          <section className="mb-12">
            <h2 className="mb-6 text-3xl font-bold text-slate-900 dark:text-white">
              Γιατί αυτή η διαδρομή είναι αρκετά καθαρή από πλευράς EU261
            </h2>
            <div className="grid gap-4 md:grid-cols-2">
              <Card className="border-slate-200 p-6 dark:border-slate-700">
                <h3 className="mb-2 text-lg font-semibold text-slate-900 dark:text-white">
                  Αναχώρηση από ΕΕ
                </h3>
                <p className="text-sm leading-6 text-slate-600 dark:text-slate-300">
                  Επειδή η πτήση ξεκινά από τη Θεσσαλονίκη, δηλαδή από αεροδρόμιο της Ευρωπαϊκής
                  Ένωσης, το EU261 εφαρμόζεται κανονικά και στη διαδρομή προς το Λονδίνο.
                </p>
              </Card>
              <Card className="border-slate-200 p-6 dark:border-slate-700">
                <h3 className="mb-2 text-lg font-semibold text-slate-900 dark:text-white">
                  Μετά το Brexit
                </h3>
                <p className="text-sm leading-6 text-slate-600 dark:text-slate-300">
                  Το Brexit αλλάζει κυρίως την ανάγνωση ορισμένων πτήσεων από το Ηνωμένο Βασίλειο
                  προς την ΕΕ. Για το σκέλος Θεσσαλονίκη–Λονδίνο, η ευρωπαϊκή προστασία παραμένει
                  ισχυρή επειδή η αναχώρηση γίνεται από κράτος μέλος.
                </p>
              </Card>
            </div>
          </section>

          <section className="mb-12">
            <h2 className="mb-6 flex items-center gap-3 text-3xl font-bold text-slate-900 dark:text-white">
              <Euro className="h-8 w-8 text-sky-600" />
              Πόσα χρήματα μπορεί να δίνει
            </h2>
            <div className="grid gap-4 md:grid-cols-2">
              <Card className="border-green-200 p-6 dark:border-green-800">
                <h3 className="mb-2 text-xl font-semibold text-slate-900 dark:text-white">
                  Απευθείας Θεσσαλονίκη–Λονδίνο
                </h3>
                <p className="text-sm leading-6 text-slate-600 dark:text-slate-300">
                  Αν πετούσατε απευθείας και φτάσατε στο Λονδίνο με καθυστέρηση τουλάχιστον 3 ωρών,
                  η πιο συχνή αποζημίωση για αυτή τη διαδρομή είναι <strong>400 €</strong>.
                </p>
              </Card>
              <Card className="border-amber-200 p-6 dark:border-amber-800">
                <h3 className="mb-2 text-xl font-semibold text-slate-900 dark:text-white">
                  Λονδίνο ως ενδιάμεσος σταθμός
                </h3>
                <p className="text-sm leading-6 text-slate-600 dark:text-slate-300">
                  Αν το Λονδίνο δεν ήταν ο τελικός προορισμός αλλά μέρος μιας ενιαίας κράτησης,
                  τότε μπορεί να μετρά η συνολική απόσταση και η καθυστέρηση στην άφιξη ολόκληρου
                  του ταξιδιού.
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
                  Για αυτή τη διαδρομή χρειάζεται προσοχή, γιατί αρκετοί επιβάτες υποθέτουν από
                  συνήθεια τα 250 €. Στην πράξη, για το κλασικό Θεσσαλονίκη–Λονδίνο η σωστή
                  αναφορά είναι συνήθως τα <strong>400 €</strong>.
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
                  Στη διαδρομή Θεσσαλονίκη–Λονδίνο το πιο συχνό λάθος δεν είναι τόσο η ύπαρξη του
                  δικαιώματος, όσο η λανθασμένη κατηγορία του ποσού ή η λανθασμένη ανάγνωση όταν το
                  Λονδίνο ήταν μόνο στάση σε μεγαλύτερη διαδρομή.
                </p>
                <p>
                  Σε αυτό το σημείο το <strong>ClaimWinger</strong> μπορεί να βοηθήσει να
                  ξεχωρίσετε αν μιλάμε για καθαρή υπόθεση διαδρομής ή για πιο σύνθετη υπόθεση με
                  τελικό προορισμό αλλού. Η προμήθεια του ClaimWinger είναι <strong>30%</strong>,
                  ανεξάρτητα από το αν η υπόθεση κλείσει εξωδικαστικά ή δικαστικά.
                </p>
              </div>
              <div className="mt-6 flex flex-wrap gap-3">
                <Button asChild className="bg-sky-600 hover:bg-sky-700">
                  <Link
                    href={claimWingerHomeHref}
                    onClick={() =>
                      trackClaimClick(
                        "el_blog_thessaloniki_london_delay_inline",
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
                    href={delayedFlightHref}
                    onClick={() =>
                      trackClaimClick(
                        "el_blog_thessaloniki_london_delay_delayed",
                        delayedFlightHref,
                      )
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
                  Χρήσιμο όταν το Λονδίνο ήταν μέρος μεγαλύτερου ταξιδιού με ενιαία κράτηση.
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
                  Καθυστέρηση Αθήνα–Λονδίνο
                </h3>
                <p className="mb-4 text-sm leading-6 text-slate-600 dark:text-slate-300">
                  Χρήσιμο αν θέλετε να συγκρίνετε μια παρόμοια διαδρομή από άλλο ελληνικό
                  αεροδρόμιο με τον ίδιο προορισμό.
                </p>
                <Link
                  href="/el/blog/apozimiosi-gia-kathysterisi-ptisis-athina-londino"
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
                  Η διαδρομή Θεσσαλονίκη–Λονδίνο είναι από εκείνες όπου το βασικό νομικό πλαίσιο
                  είναι αρκετά καθαρό: αναχώρηση από ΕΕ, προστασία EU261 και συχνά αποζημίωση στο
                  επίπεδο των 400 € όταν η καθυστέρηση στην άφιξη περάσει το σχετικό όριο.
                </p>
                <p>
                  Η μεγαλύτερη προσοχή χρειάζεται όχι τόσο στο αν υπάρχει θεωρητικά προστασία, αλλά
                  στο αν το Λονδίνο ήταν ο τελικός προορισμός και στο αν η αεροπορική επικαλείται
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
                Θέλετε να δείτε γρήγορα αν η καθυστέρηση Θεσσαλονίκη–Λονδίνο έχει βάση για
                αποζημίωση;
              </h2>
              <p className="mb-6 text-base leading-7 text-slate-700 dark:text-slate-300">
                Μπορείτε να ξεκινήσετε από το <strong>ClaimWinger</strong> στα ελληνικά ή να δείτε
                και τις ξεχωριστές σελίδες για <strong>καθυστερημένη πτήση</strong> και
                <strong> ακυρωμένη πτήση</strong>, ανάλογα με το πώς περιγράφηκε τελικά το πρόβλημα.
              </p>
              <div className="flex flex-wrap gap-3">
                <Button asChild className="bg-sky-600 hover:bg-sky-700">
                  <Link
                    href={claimWingerHomeHref}
                    onClick={() =>
                      trackClaimClick(
                        "el_blog_thessaloniki_london_delay_footer_home",
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
                        "el_blog_thessaloniki_london_delay_footer_delayed",
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
                        "el_blog_thessaloniki_london_delay_footer_cancelled",
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
