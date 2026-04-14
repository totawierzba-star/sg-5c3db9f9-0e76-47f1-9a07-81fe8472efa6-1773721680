import Link from "next/link";
import { ArrowRight, CheckCircle2, Clock, Euro, FileText, PlaneLanding } from "lucide-react";

import { ClaimWingerElSection } from "@/components/ClaimWingerElSection";
import { LayoutEl } from "@/components/LayoutEl";
import { SEO } from "@/components/SEO";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { pushClaimWingerEvent } from "@/lib/claimwingerTracking";

const articleUrl =
  "https://problemlot.com/el/blog/apozimiosi-gia-kathysterisi-ptisis-athina-frankfourti";
const claimWingerHomeHref =
  "https://claimwinger.com/el?utm_source=problemlot-el&utm_medium=article_link&utm_campaign=athens_frankfurt_delay";
const delayedFlightHref =
  "https://claimwinger.com/el/kathysterimeni-ptisi?utm_source=problemlot-el&utm_medium=article_link&utm_campaign=athens_frankfurt_delay";
const cancelledFlightHref =
  "https://claimwinger.com/el/akyromeni-ptisi?utm_source=problemlot-el&utm_medium=article_link&utm_campaign=athens_frankfurt_delay";

const faqItems = [
  {
    question: "Δικαιούμαι αποζημίωση για καθυστέρηση πτήσης Αθήνα–Φρανκφούρτη;",
    answer:
      "Συχνά ναι, αν φτάσατε στον τελικό προορισμό με καθυστέρηση 3 ωρών ή περισσότερο, η πτήση εμπίπτει στο EU261 και η αεροπορική δεν αποδείξει έγκυρες έκτακτες περιστάσεις. Για μια απευθείας πτήση Αθήνα–Φρανκφούρτη, η αποζημίωση είναι συχνά 400 €.",
  },
  {
    question: "Γιατί εδώ μιλάμε συχνά για 400 €;",
    answer:
      "Γιατί η τυπική διαδρομή Αθήνα–Φρανκφούρτη συνδέεται συνήθως με το επίπεδο άνω των 1.500 χλμ. αλλά κάτω από 3.500 χλμ., όπου η συνηθισμένη αποζημίωση είναι 400 €.",
  },
  {
    question: "Τι αλλάζει αν η Φρανκφούρτη ήταν μόνο σταθμός ανταπόκρισης;",
    answer:
      "Αν η Φρανκφούρτη ήταν μέρος μιας ενιαίας κράτησης με τελικό προορισμό αλλού, τότε μπορεί να μετρά περισσότερο η τελική άφιξη ολόκληρου του ταξιδιού και όχι μόνο το σκέλος Αθήνα–Φρανκφούρτη.",
  },
  {
    question: "Μετράει η καθυστέρηση στην αναχώρηση ή στην άφιξη;",
    answer:
      "Για τη χρηματική αποζημίωση μετρά κυρίως η καθυστέρηση στην τελική άφιξη. Σε σελίδες διαδρομών σαν αυτή, αυτό είναι πιο σημαντικό από την εικόνα του πίνακα αναχωρήσεων.",
  },
];

function trackClaimClick(placement: string, destination: string) {
  pushClaimWingerEvent("claimwinger_cta_click", {
    locale: "el",
    placement,
    destination,
  });
}

export default function AthensFrankfurtDelayCompensationElPage() {
  return (
    <LayoutEl>
      <SEO
        title="Αποζημίωση για καθυστέρηση πτήσης Αθήνα–Φρανκφούρτη"
        description="Καθυστέρησε η πτήση σας από Αθήνα προς Φρανκφούρτη; Δείτε πότε υπάρχει αποζημίωση, γιατί η διαδρομή συνδέεται συχνά με 400 € και τι αλλάζει όταν η Φρανκφούρτη είναι μόνο κόμβος ανταπόκρισης."
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
            headline: "Αποζημίωση για καθυστέρηση πτήσης Αθήνα–Φρανκφούρτη",
            description:
              "Πρακτικός οδηγός για το πότε μια καθυστέρηση πτήσης Αθήνα–Φρανκφούρτη μπορεί να οδηγεί σε αποζημίωση και γιατί, όταν η Φρανκφούρτη είναι μέρος μεγαλύτερης διαδρομής, ίσως μετρά περισσότερο ο τελικός προορισμός.",
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
                name: "Αποζημίωση για καθυστέρηση πτήσης Αθήνα–Φρανκφούρτη",
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
            <span>Αποζημίωση για καθυστέρηση πτήσης Αθήνα–Φρανκφούρτη</span>
          </div>

          <header className="mb-10">
            <div className="mb-4 inline-flex items-center gap-2 rounded-full bg-sky-100 px-4 py-2 text-sm font-medium text-sky-700 dark:bg-sky-900/30 dark:text-sky-300">
              Οδηγός διαδρομής για Αθήνα και Φρανκφούρτη
            </div>
            <h1 className="mb-5 text-4xl font-bold tracking-tight text-slate-900 dark:text-white md:text-5xl">
              Αποζημίωση για καθυστέρηση πτήσης Αθήνα–Φρανκφούρτη
            </h1>
            <p className="max-w-3xl text-xl leading-8 text-slate-600 dark:text-slate-300">
              Αν η πτήση σας από <strong>Αθήνα προς Φρανκφούρτη</strong> έφτασε με καθυστέρηση
              τουλάχιστον <strong>3 ωρών</strong>, μπορεί να υπάρχει αποζημίωση σύμφωνα με το
              <strong> EU261</strong>, εφόσον η αεροπορική δεν αποδείξει έγκυρες έκτακτες
              περιστάσεις. Για το κλασικό απευθείας case Αθήνα–Φρανκφούρτη, η πιο συνηθισμένη
              αναφορά είναι τα <strong>400 €</strong>.
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
                  <strong>Ναι, συχνά ναι.</strong> Για μια απευθείας πτήση Αθήνα–Φρανκφούρτη, η
                  συνηθισμένη αποζημίωση είναι <strong>400 €</strong>, όταν η τελική άφιξη
                  καθυστερήσει αρκετά και δεν υπάρχουν έγκυρες έκτακτες περιστάσεις.
                </p>
                <p>
                  Η Φρανκφούρτη όμως είναι και μεγάλος <strong>κόμβος</strong>, οπότε αν ήταν μόνο
                  σταθμός ανταπόκρισης σε μία ενιαία κράτηση, μπορεί να μετρά περισσότερο η τελική
                  άφιξη όλου του ταξιδιού.
                </p>
                <p>
                  Γι' αυτό σε αυτή τη διαδρομή είναι πολύ σημαντικό να ξεκαθαριστεί αν μιλάμε για
                  απευθείας πτήση ή για μέρος μεγαλύτερης ενιαίας διαδρομής.
                </p>
              </div>
            </Card>
          </section>

          <ClaimWingerElSection
            className="mb-12"
            title="Καθυστέρησε η πτήση σας Αθήνα–Φρανκφούρτη;"
            description="Το ClaimWinger Ελλάδα μπορεί να βοηθήσει να ξεχωρίσετε αν μιλάμε για μια καθαρή υπόθεση διαδρομής με 400 € ή για πιο σύνθετη περίπτωση όπου η Φρανκφούρτη ήταν μόνο κόμβος ανταπόκρισης."
            ctaHref="https://claimwinger.com/el/kathysterimeni-ptisi?utm_source=problemlot-el&utm_medium=embedded_cta&utm_campaign=athens_frankfurt_delay"
            ctaLabel="Έλεγχος με το ClaimWinger"
            loadingLabel="Φορτώνεται η φόρμα ClaimWinger..."
            loadingDescription="Σε λίγο θα εμφανιστεί η ελληνική φόρμα για έλεγχο της καθυστερημένης πτήσης σας."
            placement="el_blog_athens_frankfurt_delay_embed"
          />

          <section className="mb-12">
            <h2 className="mb-6 text-3xl font-bold text-slate-900 dark:text-white">
              Γιατί εδώ μιλάμε συνήθως για 400 €
            </h2>
            <div className="grid gap-4 md:grid-cols-2">
              <Card className="border-slate-200 p-6 dark:border-slate-700">
                <h3 className="mb-2 text-lg font-semibold text-slate-900 dark:text-white">
                  Κατηγορία απόστασης
                </h3>
                <p className="text-sm leading-6 text-slate-600 dark:text-slate-300">
                  Η τυπική διαδρομή Αθήνα–Φρανκφούρτη συνδέεται συνήθως με το επίπεδο άνω των 1.500
                  χλμ. αλλά κάτω από 3.500 χλμ., όπου η συνηθισμένη αποζημίωση είναι 400 €.
                </p>
              </Card>
              <Card className="border-slate-200 p-6 dark:border-slate-700">
                <h3 className="mb-2 text-lg font-semibold text-slate-900 dark:text-white">
                  Όχι αυτόματα σε κάθε κατάσταση
                </h3>
                <p className="text-sm leading-6 text-slate-600 dark:text-slate-300">
                  Το ότι η διαδρομή συνδέεται με 400 € δεν σημαίνει ότι κάθε καθυστέρηση πληρώνεται.
                  Πρέπει να εξεταστούν η τελική άφιξη και οι λόγοι που επικαλείται η αεροπορική.
                </p>
              </Card>
            </div>
          </section>

          <section className="mb-12">
            <h2 className="mb-6 text-3xl font-bold text-slate-900 dark:text-white">
              Τι αλλάζει επειδή η Φρανκφούρτη είναι κόμβος ανταπόκρισης
            </h2>
            <div className="space-y-4 text-base leading-7 text-slate-700 dark:text-slate-300">
              <p>
                Σε πολλές υποθέσεις η Φρανκφούρτη δεν είναι ο τελικός προορισμός αλλά μεγάλος
                κόμβος ανταπόκρισης. Αυτό αλλάζει την πρακτική ανάγνωση της υπόθεσης, γιατί μπορεί να
                μην αρκεί να κοιτάμε μόνο το σκέλος Αθήνα–Φρανκφούρτη.
              </p>
              <p>
                Αν όλο το ταξίδι ήταν σε <strong>μία ενιαία κράτηση</strong>, τότε για την
                αποζημίωση μπορεί να μετρά περισσότερο η ώρα άφιξης στον τελικό προορισμό του
                ολόκληρου ταξιδιού. Γι' αυτό τέτοιες σελίδες για αεροδρόμια-κόμβους χρειάζονται
                πάντα λίγο μεγαλύτερη προσοχή από ένα απλό απευθείας case.
              </p>
            </div>
          </section>

          <section className="mb-12">
            <h2 className="mb-6 text-3xl font-bold text-slate-900 dark:text-white">
              Τι μετρά πραγματικά για την αποζημίωση
            </h2>
            <div className="grid gap-4">
              <Card className="border-slate-200 p-6 dark:border-slate-700">
                <div className="mb-3 flex items-center gap-2 text-slate-900 dark:text-white">
                  <PlaneLanding className="h-5 w-5 text-sky-600" />
                  <h3 className="text-lg font-semibold">Η τελική άφιξη</h3>
                </div>
                <p className="text-sm leading-6 text-slate-600 dark:text-slate-300">
                  Για τη χρηματική αποζημίωση μετρά κυρίως η καθυστέρηση στην τελική άφιξη και όχι
                  απλώς η ώρα που καθυστέρησε το αεροπλάνο να φύγει από την Αθήνα.
                </p>
              </Card>
              <Card className="border-slate-200 p-6 dark:border-slate-700">
                <div className="mb-3 flex items-center gap-2 text-slate-900 dark:text-white">
                  <CheckCircle2 className="h-5 w-5 text-sky-600" />
                  <h3 className="text-lg font-semibold">Οι έκτακτες περιστάσεις</h3>
                </div>
                <p className="text-sm leading-6 text-slate-600 dark:text-slate-300">
                  Η αεροπορική πρέπει να μπορεί να στηρίξει σοβαρά τον λόγο για τον οποίο αρνείται
                  την πληρωμή. Οι γενικές λειτουργικές αναφορές δεν αρκούν αυτόματα.
                </p>
              </Card>
              <Card className="border-slate-200 p-6 dark:border-slate-700">
                <div className="mb-3 flex items-center gap-2 text-slate-900 dark:text-white">
                  <Euro className="h-5 w-5 text-sky-600" />
                  <h3 className="text-lg font-semibold">Το σωστό ύψος ποσού</h3>
                </div>
                <p className="text-sm leading-6 text-slate-600 dark:text-slate-300">
                  Για το απευθείας case η πιο σωστή αναφορά είναι συνήθως τα <strong>400 €</strong>,
                  όχι τα 250 € που βλέπουμε σε σαφώς κοντύτερες ευρωπαϊκές διαδρομές.
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
                  Στη διαδρομή Αθήνα–Φρανκφούρτη το πιο συχνό μπέρδεμα είναι η μετάβαση από ένα απλό
                  ερώτημα διαδρομής σε μια πιο σύνθετη υπόθεση ταξιδιού, όπου η Φρανκφούρτη ήταν μόνο
                  σταθμός πριν από άλλο τελικό προορισμό.
                </p>
                <p>
                  Σε αυτό το σημείο το <strong>ClaimWinger</strong> μπορεί να βοηθήσει να
                  ταξινομηθεί σωστά η υπόθεση. Η προμήθεια του ClaimWinger είναι <strong>30%</strong>,
                  ανεξάρτητα από το αν η πορεία είναι εξωδικαστική ή δικαστική.
                </p>
              </div>
              <div className="mt-6 flex flex-wrap gap-3">
                <Button asChild className="bg-sky-600 hover:bg-sky-700">
                  <Link
                    href={claimWingerHomeHref}
                    onClick={() =>
                      trackClaimClick("el_blog_athens_frankfurt_delay_inline", claimWingerHomeHref)
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
                      trackClaimClick("el_blog_athens_frankfurt_delay_delayed", delayedFlightHref)
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
                  Πτήση με ανταπόκριση
                </h3>
                <p className="mb-4 text-sm leading-6 text-slate-600 dark:text-slate-300">
                  Χρήσιμο όταν η Φρανκφούρτη ήταν ενδιάμεσος σταθμός σε μεγαλύτερο ταξίδι με κοινή
                  κράτηση.
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
                  Καθυστέρηση 3 ωρών
                </h3>
                <p className="mb-4 text-sm leading-6 text-slate-600 dark:text-slate-300">
                  Ο οδηγός για το βασικό όριο που ανοίγει συχνά τον δρόμο για πραγματική αποζημίωση.
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
                  Ακυρωμένη πτήση
                </h3>
                <p className="mb-4 text-sm leading-6 text-slate-600 dark:text-slate-300">
                  Χρήσιμο αν το πρόβλημα δεν έμεινε μόνο σε καθυστέρηση αλλά εξελίχθηκε αλλιώς.
                </p>
                <Link
                  href="/el/blog/posa-chrimata-pairno-gia-akyromeni-ptisi"
                  className="text-sm font-medium text-sky-600 hover:text-sky-700"
                >
                  Δείτε τα δικαιώματα
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
                  Για το κλασικό απευθείας case Αθήνα–Φρανκφούρτη, η εικόνα είναι συνήθως καθαρή:
                  όταν η τελική άφιξη καθυστερεί αρκετά και δεν υπάρχουν έγκυρες έκτακτες
                  περιστάσεις, η πιο συνηθισμένη αναφορά είναι τα <strong>400 €</strong>.
                </p>
                <p>
                  Η μεγαλύτερη προσοχή χρειάζεται όταν η Φρανκφούρτη ήταν μόνο κόμβος ανταπόκρισης,
                  γιατί τότε ίσως να πρέπει να διαβάσουμε την καθυστέρηση μέσα στο πλαίσιο ολόκληρου
                  του ταξιδιού και όχι μόνο του πρώτου σκέλους.
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
                Θέλετε να δείτε γρήγορα αν η καθυστέρηση Αθήνα–Φρανκφούρτη έχει βάση για αποζημίωση;
              </h2>
              <p className="mb-6 text-base leading-7 text-slate-700 dark:text-slate-300">
                Μπορείτε να ξεκινήσετε από το <strong>ClaimWinger</strong> στα ελληνικά ή να δείτε
                και τις ξεχωριστές σελίδες για <strong>καθυστερημένη πτήση</strong> και
                <strong> ακυρωμένη πτήση</strong>, αν το περιστατικό εξελίχθηκε διαφορετικά από το
                αρχικό status.
              </p>
              <div className="flex flex-wrap gap-3">
                <Button asChild className="bg-sky-600 hover:bg-sky-700">
                  <Link
                    href={claimWingerHomeHref}
                    onClick={() =>
                      trackClaimClick(
                        "el_blog_athens_frankfurt_delay_footer_home",
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
                        "el_blog_athens_frankfurt_delay_footer_delayed",
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
                        "el_blog_athens_frankfurt_delay_footer_cancelled",
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
