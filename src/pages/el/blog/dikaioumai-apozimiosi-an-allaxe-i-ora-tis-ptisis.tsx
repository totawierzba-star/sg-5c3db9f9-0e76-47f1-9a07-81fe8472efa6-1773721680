import Link from "next/link";
import {
  AlertCircle,
  ArrowRight,
  CheckCircle2,
  Clock,
  FileText,
  PlaneTakeoff,
  RefreshCcw,
} from "lucide-react";

import { ClaimWingerElSection } from "@/components/ClaimWingerElSection";
import { LayoutEl } from "@/components/LayoutEl";
import { SEO } from "@/components/SEO";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { pushClaimWingerEvent } from "@/lib/claimwingerTracking";

const articleUrl =
  "https://problemlot.com/el/blog/dikaioumai-apozimiosi-an-allaxe-i-ora-tis-ptisis";
const claimWingerHomeHref =
  "https://claimwinger.com/el?utm_source=problemlot-el&utm_medium=article_link&utm_campaign=flight_time_change";
const delayedFlightHref =
  "https://claimwinger.com/el/kathysterimeni-ptisi?utm_source=problemlot-el&utm_medium=article_link&utm_campaign=flight_time_change";
const cancelledFlightHref =
  "https://claimwinger.com/el/akyromeni-ptisi?utm_source=problemlot-el&utm_medium=article_link&utm_campaign=flight_time_change";

const faqItems = [
  {
    question: "Δικαιούμαι αποζημίωση αν άλλαξε η ώρα της πτήσης;",
    answer:
      "Μερικές φορές ναι, αλλά όχι σε κάθε αλλαγή ώρας αυτόματα. Το κλειδί είναι αν η πτήση μεταφέρθηκε σημαντικά νωρίτερα, αν η υπόθεση διαβάζεται νομικά ως ακύρωση ή αν η αλλαγή οδήγησε σε μεγάλη καθυστέρηση στην τελική άφιξη.",
  },
  {
    question: "Τι γίνεται αν η πτήση φεύγει νωρίτερα από πριν;",
    answer:
      "Αν η αεροπορική μετακινήσει την αναχώρηση πάνω από 1 ώρα νωρίτερα, οι κανόνες της ΕΕ το αντιμετωπίζουν ως ακυρωμένη πτήση. Τότε ενεργοποιούνται τα δικαιώματα ακύρωσης, μαζί με πιθανή αποζημίωση όταν η ενημέρωση έγινε αργά.",
  },
  {
    question: "Τι γίνεται αν η πτήση μεταφέρθηκε απλώς αργότερα;",
    answer:
      "Τότε δεν μιλάμε αυτόματα για ακύρωση. Πρέπει να εξεταστεί πώς επηρέασε η αλλαγή την πραγματική αναχώρηση και κυρίως την άφιξη στον τελικό προορισμό. Αν προκύψει μεγάλη καθυστέρηση στην άφιξη, μπορεί να υπάρχει δικαίωμα αποζημίωσης.",
  },
  {
    question: "Παίζει ρόλο πότε με ενημέρωσε η αεροπορική;",
    answer:
      "Ναι. Όταν η αλλαγή ώρας διαβάζεται νομικά ως ακύρωση, είναι πολύ σημαντικό αν η ενημέρωση έγινε πάνω από 14 ημέρες πριν ή αργότερα.",
  },
];

function trackClaimClick(placement: string, destination: string) {
  pushClaimWingerEvent("claimwinger_cta_click", {
    locale: "el",
    placement,
    destination,
  });
}

export default function FlightTimeChangeCompensationElPage() {
  return (
    <LayoutEl>
      <SEO
        title="Δικαιούμαι αποζημίωση αν άλλαξε η ώρα της πτήσης;"
        description="Μάθετε πότε η αλλαγή ώρας πτήσης μπορεί να οδηγεί σε αποζημίωση, γιατί η αναχώρηση πάνω από 1 ώρα νωρίτερα μπορεί να θεωρείται ακύρωση και πότε μετρά κυρίως η τελική άφιξη."
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
            headline: "Δικαιούμαι αποζημίωση αν άλλαξε η ώρα της πτήσης;",
            description:
              "Πρακτικός οδηγός για το πότε μια αλλαγή ώρας πτήσης μπορεί να οδηγήσει σε αποζημίωση και πότε η υπόθεση κρίνεται περισσότερο ως καθυστέρηση ή ως ακύρωση.",
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
                name: "Δικαιούμαι αποζημίωση αν άλλαξε η ώρα της πτήσης;",
                item: articleUrl,
              },
            ],
          }),
        }}
      />

      <article className="min-h-screen bg-gradient-to-br from-slate-50 via-white to-cyan-50 dark:from-gray-950 dark:via-gray-900 dark:to-slate-900">
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
            <span>Δικαιούμαι αποζημίωση αν άλλαξε η ώρα της πτήσης;</span>
          </div>

          <header className="mb-10">
            <div className="mb-4 inline-flex items-center gap-2 rounded-full bg-cyan-100 px-4 py-2 text-sm font-medium text-cyan-700 dark:bg-cyan-900/30 dark:text-cyan-300">
              Πρακτικός οδηγός για αλλαγή ώρας πτήσης
            </div>
            <h1 className="mb-5 text-4xl font-bold tracking-tight text-slate-900 dark:text-white md:text-5xl">
              Δικαιούμαι αποζημίωση αν άλλαξε η ώρα της πτήσης;
            </h1>
            <p className="max-w-3xl text-xl leading-8 text-slate-600 dark:text-slate-300">
              Η σύντομη απάντηση είναι <strong>μερικές φορές ναι</strong>, αλλά όχι σε κάθε αλλαγή
              ώρας αυτόματα. Το κρίσιμο σημείο είναι αν η πτήση μετακινήθηκε τόσο νωρίς ώστε να
              αντιμετωπίζεται νομικά ως ακύρωση ή αν η αλλαγή δημιούργησε μεγάλη καθυστέρηση στην
              άφιξη στον τελικό προορισμό.
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
            <Card className="border-cyan-200 bg-gradient-to-br from-cyan-600 to-sky-700 p-8 text-white shadow-xl dark:border-cyan-800">
              <h2 className="mb-4 text-2xl font-bold">Σύντομη απάντηση</h2>
              <div className="space-y-3 text-base leading-7 text-cyan-50">
                <p>
                  Αν η αεροπορική μεταφέρει την αναχώρηση <strong>πάνω από 1 ώρα νωρίτερα</strong>,
                  οι κανόνες της ΕΕ το αντιμετωπίζουν ως <strong>ακύρωση πτήσης</strong>.
                </p>
                <p>
                  Αν η πτήση μετακινηθεί αργότερα, δεν μιλάμε αυτόματα για ακύρωση. Εκεί μετρά
                  κυρίως η <strong>καθυστέρηση στην τελική άφιξη</strong>.
                </p>
                <p>
                  Όταν η αλλαγή λειτουργεί νομικά ως ακύρωση, παίζει σημαντικό ρόλο και το
                  <strong> πότε ενημερωθήκατε</strong>, ειδικά σε σχέση με το όριο των 14 ημερών.
                </p>
              </div>
            </Card>
          </section>

          <ClaimWingerElSection
            className="mb-12"
            title="Άλλαξε η ώρα της πτήσης σας και θέλετε να ξέρετε αν υπάρχει αξίωση;"
            description="Το ClaimWinger Ελλάδα μπορεί να βοηθήσει να ξεχωρίσετε αν πρόκειται απλώς για μικρή αλλαγή προγράμματος ή για περίπτωση που διαβάζεται ως ακύρωση ή μεγάλη καθυστέρηση με δικαίωμα αποζημίωσης."
            ctaHref="https://claimwinger.com/el?utm_source=problemlot-el&utm_medium=embedded_cta&utm_campaign=flight_time_change"
            ctaLabel="Έλεγχος με το ClaimWinger"
            loadingLabel="Φορτώνεται η φόρμα ClaimWinger..."
            loadingDescription="Σε λίγο θα εμφανιστεί η ελληνική φόρμα για έλεγχο της περίπτωσής σας."
            placement="el_blog_flight_time_change_embed"
          />

          <section className="mb-12">
            <h2 className="mb-6 text-3xl font-bold text-slate-900 dark:text-white">
              Πότε η αλλαγή ώρας αντιμετωπίζεται σαν ακύρωση
            </h2>
            <div className="space-y-4 text-base leading-7 text-slate-700 dark:text-slate-300">
              <p>
                Το πιο σημαντικό σημείο εδώ είναι ότι δεν εξετάζουμε μόνο αν άλλαξε το πρόγραμμα,
                αλλά <strong>πόσο</strong> άλλαξε. Αν η αεροπορική σας ενημερώσει ότι η πτήση πλέον
                αναχωρεί πάνω από μία ώρα νωρίτερα από την αρχική ώρα, η υπόθεση δεν διαβάζεται
                απλώς ως «διόρθωση ωραρίου».
              </p>
              <p>
                Σύμφωνα με τη γραμμή των ευρωπαϊκών κανόνων και της σχετικής νομολογίας, μια τέτοια
                μεταφορά προς τα νωρίτερα μπορεί να θεωρηθεί <strong>ουσιαστικά ακύρωση</strong>.
                Αυτό έχει μεγάλη σημασία, γιατί τότε ενεργοποιούνται τα δικαιώματα που έχουμε στις
                ακυρωμένες πτήσεις: επιλογή μεταξύ επιστροφής χρημάτων και εναλλακτικής μεταφοράς,
                καθώς και πιθανή αποζημίωση όταν η ενημέρωση έγινε αργά.
              </p>
              <p>
                Με απλά λόγια: αν ξυπνήσετε και δείτε ότι η πτήση σας δεν φεύγει λίγο διαφορετική
                ώρα, αλλά τόσο νωρίτερα ώστε αλλάζει ουσιαστικά όλο το ταξίδι σας, η υπόθεση μπορεί
                να είναι πολύ πιο ισχυρή από όσο νομίζετε.
              </p>
            </div>
          </section>

          <section className="mb-12">
            <div className="grid gap-4 md:grid-cols-3">
              <Card className="border-slate-200 p-6 dark:border-slate-700">
                <div className="mb-3 flex items-center gap-2 text-slate-900 dark:text-white">
                  <PlaneTakeoff className="h-5 w-5 text-cyan-600" />
                  <h3 className="text-lg font-semibold">Πάνω από 1 ώρα νωρίτερα</h3>
                </div>
                <p className="text-sm leading-6 text-slate-600 dark:text-slate-300">
                  Η υπόθεση μπορεί να διαβαστεί ως ακύρωση και όχι ως απλή αλλαγή προγράμματος.
                </p>
              </Card>
              <Card className="border-slate-200 p-6 dark:border-slate-700">
                <div className="mb-3 flex items-center gap-2 text-slate-900 dark:text-white">
                  <RefreshCcw className="h-5 w-5 text-cyan-600" />
                  <h3 className="text-lg font-semibold">Μεταφορά αργότερα</h3>
                </div>
                <p className="text-sm leading-6 text-slate-600 dark:text-slate-300">
                  Εκεί εξετάζουμε κυρίως πόσο αργά φτάσατε τελικά και όχι μόνο τη νέα ώρα αναχώρησης.
                </p>
              </Card>
              <Card className="border-slate-200 p-6 dark:border-slate-700">
                <div className="mb-3 flex items-center gap-2 text-slate-900 dark:text-white">
                  <AlertCircle className="h-5 w-5 text-cyan-600" />
                  <h3 className="text-lg font-semibold">Χρόνος ενημέρωσης</h3>
                </div>
                <p className="text-sm leading-6 text-slate-600 dark:text-slate-300">
                  Αν η αλλαγή λειτουργεί ως ακύρωση, μετρά πολύ αν ενημερωθήκατε πάνω ή κάτω από 14
                  ημέρες πριν.
                </p>
              </Card>
            </div>
          </section>

          <section className="mb-12">
            <h2 className="mb-6 text-3xl font-bold text-slate-900 dark:text-white">
              Τι γίνεται όταν η πτήση μεταφέρθηκε αργότερα
            </h2>
            <div className="space-y-4 text-base leading-7 text-slate-700 dark:text-slate-300">
              <p>
                Αν η πτήση δεν μεταφέρθηκε προς τα νωρίτερα αλλά προς τα αργότερα, το πρώτο ένστικτο
                πολλών επιβατών είναι να το πουν «ακύρωση». Στην πράξη όμως συχνά πρόκειται για
                υπόθεση που πρέπει να διαβαστεί πιο κοντά σε <strong>καθυστέρηση</strong>.
              </p>
              <p>
                Εδώ δεν αρκεί να πείτε ότι «η ώρα άλλαξε». Πρέπει να δούμε ποια ήταν η
                <strong> πραγματική επίπτωση στην άφιξή σας</strong>. Αν το αποτέλεσμα ήταν να
                φτάσετε στον τελικό προορισμό με σημαντική καθυστέρηση, τότε μπορεί να μπαίνει στο
                τραπέζι αποζημίωση όπως και στις κλασικές καθυστερήσεις πτήσης.
              </p>
              <p>
                Αυτό είναι ακόμη πιο σημαντικό όταν υπάρχουν ανταποκρίσεις. Μια μικρή αλλαγή στην
                πρώτη πτήση ίσως να μην φαίνεται μεγάλη, αλλά αν σας σπάσει όλη τη διαδρομή και
                καταλήξετε να φτάσετε πολύ αργότερα, η υπόθεση δεν κρίνεται από το πρώτο σκέλος
                μόνο, αλλά από τον <strong>τελικό προορισμό</strong>.
              </p>
            </div>
          </section>

          <section className="mb-12">
            <h2 className="mb-6 text-3xl font-bold text-slate-900 dark:text-white">
              Γιατί οι 14 ημέρες έχουν τόσο μεγάλη σημασία
            </h2>
            <div className="grid gap-4 md:grid-cols-2">
              <Card className="p-6">
                <div className="mb-3 flex items-center gap-2 text-slate-900 dark:text-white">
                  <CheckCircle2 className="h-5 w-5 text-green-600" />
                  <h3 className="text-xl font-semibold">Ενημέρωση έγκαιρα</h3>
                </div>
                <p className="text-sm leading-6 text-slate-600 dark:text-slate-300">
                  Αν η αεροπορική ενημερώσει αρκετά νωρίς, η υπόθεση μπορεί να παραμείνει χωρίς
                  αποζημίωση, ακόμη κι αν ο επιβάτης ταλαιπωρήθηκε οργανωτικά.
                </p>
              </Card>
              <Card className="p-6">
                <div className="mb-3 flex items-center gap-2 text-slate-900 dark:text-white">
                  <AlertCircle className="h-5 w-5 text-amber-600" />
                  <h3 className="text-xl font-semibold">Ενημέρωση αργά</h3>
                </div>
                <p className="text-sm leading-6 text-slate-600 dark:text-slate-300">
                  Όταν η ενημέρωση έρχεται αργά και η αλλαγή ισοδυναμεί νομικά με ακύρωση, η θέση του
                  επιβάτη γίνεται συνήθως πολύ ισχυρότερη.
                </p>
              </Card>
            </div>
            <div className="mt-5 text-base leading-7 text-slate-700 dark:text-slate-300">
              <p>
                Γι' αυτό δεν αρκεί να κρατήσετε μόνο το νέο πρόγραμμα πτήσης. Κρατήστε και το μήνυμα ή το
                email με την ημερομηνία και ώρα της ενημέρωσης. Σε πολλές υποθέσεις, αυτό το σημείο
                είναι εξίσου κρίσιμο με την ίδια την αλλαγή.
              </p>
            </div>
          </section>

          <section className="mb-12">
            <h2 className="mb-6 text-3xl font-bold text-slate-900 dark:text-white">
              Refund, νέα πτήση και αποζημίωση: τρία διαφορετικά πράγματα
            </h2>
            <div className="space-y-4 text-base leading-7 text-slate-700 dark:text-slate-300">
              <p>
                Ένα από τα πιο συχνά λάθη είναι ότι οι επιβάτες βάζουν στο ίδιο καλάθι την επιστροφή
                χρημάτων, τη μεταφορά σε άλλη πτήση και την αποζημίωση. Αυτά όμως είναι
                <strong> διαφορετικά δικαιώματα</strong>.
              </p>
              <p>
                Αν η αλλαγή ώρας καταλήγει να διαβάζεται ως ακύρωση, μπορεί να έχετε δικαίωμα να
                διαλέξετε ανάμεσα σε <strong>επιστροφή χρημάτων</strong> και <strong>εναλλακτική μεταφορά</strong>.
                Ξεχωριστά από αυτό, μπορεί να υπάρχει ή να μην υπάρχει και <strong>αποζημίωση</strong>,
                ανάλογα με το πότε ειδοποιηθήκατε και αν η αεροπορική μπορεί να επικαλεστεί έγκυρα
                έκτακτες περιστάσεις.
              </p>
              <p>
                Αυτό σημαίνει ότι δεν πρέπει να θεωρήσετε πως επειδή σας έβαλαν σε άλλη πτήση, η
                υπόθεση έκλεισε. Ούτε όμως ότι κάθε αλλαγή ώρας δίνει αυτόματα χρήματα. Η σωστή
                αξιολόγηση χρειάζεται να δει όλη την εικόνα.
              </p>
            </div>
          </section>

          <section className="mb-12">
            <Card className="border-sky-200 bg-sky-50 p-6 dark:border-sky-900/50 dark:bg-sky-950/20">
              <h2 className="mb-4 text-2xl font-bold text-slate-900 dark:text-white">
                Πότε το ClaimWinger έχει περισσότερο νόημα
              </h2>
              <div className="space-y-3 text-base leading-7 text-slate-700 dark:text-slate-300">
                <p>
                  Αν έχετε αλλαγή ώρας και δεν είστε σίγουροι αν μιλάμε για καθυστέρηση, ακύρωση ή
                  απλώς τροποποίηση δρομολογίου, το πρακτικό πρόβλημα είναι ότι μια λανθασμένη
                  ανάγνωση μπορεί να σας οδηγήσει σε λάθος αίτημα προς την αεροπορική.
                </p>
                <p>
                  Σε αυτό το σημείο το <strong>ClaimWinger</strong> μπορεί να βοηθήσει να
                  ταξινομηθεί σωστά η υπόθεση. Η προμήθεια του ClaimWinger είναι <strong>30%</strong>,
                  ανεξάρτητα από το αν η υπόθεση λυθεί εξωδικαστικά ή χρειαστεί δικαστική πορεία.
                </p>
              </div>
              <div className="mt-6 flex flex-wrap gap-3">
                <Button asChild className="bg-sky-600 hover:bg-sky-700">
                  <Link
                    href={claimWingerHomeHref}
                    onClick={() =>
                      trackClaimClick("el_blog_flight_time_change_inline", claimWingerHomeHref)
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
                      trackClaimClick("el_blog_flight_time_change_cancelled", cancelledFlightHref)
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
              Τι να κρατήσετε ως αποδεικτικά
            </h2>
            <div className="space-y-4 text-base leading-7 text-slate-700 dark:text-slate-300">
              <p>
                Σε υποθέσεις αλλαγής ώρας, τρία πράγματα βοηθούν περισσότερο από όλα:
              </p>
              <ul className="list-disc space-y-2 pl-6 marker:text-cyan-600">
                <li>το αρχικό πρόγραμμα πτήσης με την αρχική ώρα αναχώρησης,</li>
                <li>το μήνυμα ή email που δείχνει πότε ανακοινώθηκε η αλλαγή,</li>
                <li>τα τελικά στοιχεία άφιξης, ειδικά όταν υπάρχουν ανταποκρίσεις.</li>
              </ul>
              <p>
                Αν η υπόθεση αφορά μεταφορά προς τα νωρίτερα, κρατήστε το αρχικό και το νέο πρόγραμμα
                δίπλα δίπλα. Αν αφορά μεταφορά προς τα αργότερα, κρατήστε αποδείξεις που δείχνουν
                πόσο αργά φτάσατε πραγματικά.
              </p>
            </div>
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
                  Δείτε πότε η καθυστέρηση στην άφιξη ανοίγει τον δρόμο για αποζημίωση.
                </p>
                <Link
                  href="/el/blog/posa-chrimata-pairno-gia-kathysterisi-3-oron"
                  className="text-sm font-medium text-sky-600 hover:text-sky-700"
                >
                  Διαβάστε τον οδηγό
                </Link>
              </Card>
              <Card className="p-6">
                <h3 className="mb-3 text-lg font-semibold text-slate-900 dark:text-white">
                  Ακυρωμένη πτήση
                </h3>
                <p className="mb-4 text-sm leading-6 text-slate-600 dark:text-slate-300">
                  Δείτε πώς λειτουργούν οι αποζημιώσεις όταν η υπόθεση κρίνεται ως ακύρωση.
                </p>
                <Link
                  href="/el/blog/posa-chrimata-pairno-gia-akyromeni-ptisi"
                  className="text-sm font-medium text-sky-600 hover:text-sky-700"
                >
                  Δείτε τα ποσά
                </Link>
              </Card>
              <Card className="p-6">
                <h3 className="mb-3 text-lg font-semibold text-slate-900 dark:text-white">
                  Πτήσεις με ανταπόκριση
                </h3>
                <p className="mb-4 text-sm leading-6 text-slate-600 dark:text-slate-300">
                  Πολύ χρήσιμο όταν η αλλαγή ώρας επηρεάζει ολόκληρη τη διαδρομή και όχι μόνο ένα
                  σκέλος.
                </p>
                <Link
                  href="/el/blog/ischyei-apozimiosi-se-ptisi-me-antapokrisi"
                  className="text-sm font-medium text-sky-600 hover:text-sky-700"
                >
                  Δείτε πώς κρίνεται
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
                  Η αλλαγή ώρας πτήσης δεν σημαίνει αυτόματα αποζημίωση, αλλά δεν είναι και κάτι που
                  πρέπει να προσπερνάτε ως ασήμαντο. Αν η αναχώρηση μεταφέρθηκε πάνω από μία ώρα
                  νωρίτερα, η υπόθεση μπορεί να διαβαστεί ως ακύρωση. Αν μεταφέρθηκε αργότερα,
                  μετρά κυρίως το αποτέλεσμα στην τελική άφιξη.
                </p>
                <p>
                  Το πιο ασφαλές είναι να κοιτάτε πάντα τρία στοιχεία μαζί: το μέγεθος της αλλαγής,
                  το πότε ενημερωθήκατε και το τι συνέβη τελικά στην άφιξή σας. Εκεί συνήθως κρίνεται
                  αν υπάρχει πραγματικός δρόμος για αποζημίωση.
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
                Θέλετε να δείτε γρήγορα αν αυτή η αλλαγή ώρας δίνει αξίωση;
              </h2>
              <p className="mb-6 text-base leading-7 text-slate-700 dark:text-slate-300">
                Μπορείτε να ξεκινήσετε από το <strong>ClaimWinger</strong> στα ελληνικά ή να δείτε
                ξεχωριστά τις σελίδες για <strong>καθυστερημένη πτήση</strong> και
                <strong> ακυρωμένη πτήση</strong>, ανάλογα με το πώς ταιριάζει καλύτερα η περίπτωσή
                σας.
              </p>
              <div className="flex flex-wrap gap-3">
                <Button asChild className="bg-sky-600 hover:bg-sky-700">
                  <Link
                    href={claimWingerHomeHref}
                    onClick={() =>
                      trackClaimClick("el_blog_flight_time_change_footer_home", claimWingerHomeHref)
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
                      trackClaimClick("el_blog_flight_time_change_footer_delayed", delayedFlightHref)
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
                        "el_blog_flight_time_change_footer_cancelled",
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
