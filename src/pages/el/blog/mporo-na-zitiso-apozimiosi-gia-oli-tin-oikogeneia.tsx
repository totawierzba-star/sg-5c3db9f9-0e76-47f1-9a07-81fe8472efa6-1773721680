import Link from "next/link";
import {
  ArrowRight,
  Baby,
  CheckCircle2,
  Clock,
  FileText,
  ShieldCheck,
  Users,
} from "lucide-react";

import { ClaimWingerElSection } from "@/components/ClaimWingerElSection";
import { LayoutEl } from "@/components/LayoutEl";
import { SEO } from "@/components/SEO";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { pushClaimWingerEvent } from "@/lib/claimwingerTracking";

const articleUrl =
  "https://problemlot.com/el/blog/mporo-na-zitiso-apozimiosi-gia-oli-tin-oikogeneia";
const claimWingerHomeHref =
  "https://claimwinger.com/el?utm_source=problemlot-el&utm_medium=article_link&utm_campaign=family_claim";
const delayedFlightHref =
  "https://claimwinger.com/el/kathysterimeni-ptisi?utm_source=problemlot-el&utm_medium=article_link&utm_campaign=family_claim";
const cancelledFlightHref =
  "https://claimwinger.com/el/akyromeni-ptisi?utm_source=problemlot-el&utm_medium=article_link&utm_campaign=family_claim";

const faqItems = [
  {
    question: "Μπορώ να ζητήσω αποζημίωση για όλη την οικογένεια;",
    answer:
      "Συχνά ναι. Στις περισσότερες υποθέσεις το δικαίωμα εξετάζεται για κάθε επιβάτη χωριστά και όχι μόνο για μία κοινή κράτηση ως σύνολο. Έτσι μπορεί να υπάρχει αξίωση για περισσότερα μέλη της ίδιας οικογένειας.",
  },
  {
    question: "Παίρνουν αποζημίωση και τα παιδιά;",
    answer:
      "Συχνά ναι, ιδίως όταν ταξίδευαν ως κανονικοί επιβάτες μέσα στην κράτηση. Στα πολύ μικρά παιδιά και στα βρέφη χωρίς ξεχωριστή θέση, αξίζει να κοιτάμε πιο προσεκτικά πώς είχαν καταχωρηθεί και υπό ποιους όρους ταξίδευαν.",
  },
  {
    question: "Υπολογίζεται αποζημίωση για κάθε μέλος χωριστά;",
    answer:
      "Στις περισσότερες συνηθισμένες περιπτώσεις ναι. Αν περισσότερα μέλη της οικογένειας πληρούν τις προϋποθέσεις του EU261, το ποσό συνήθως εξετάζεται ανά επιβάτη.",
  },
  {
    question: "Μπορεί ένας γονέας να κάνει το αίτημα για όλους;",
    answer:
      "Στην πράξη συχνά ναι, αλλά μπορεί να χρειαστούν επιπλέον στοιχεία ή επιβεβαίωση για το ποιον εκπροσωπείτε, ειδικά όταν η υπόθεση αφορά περισσότερους επιβάτες μαζί.",
  },
];

function trackClaimClick(placement: string, destination: string) {
  pushClaimWingerEvent("claimwinger_cta_click", {
    locale: "el",
    placement,
    destination,
  });
}

export default function FamilyCompensationElPage() {
  return (
    <LayoutEl>
      <SEO
        title="Μπορώ να ζητήσω αποζημίωση για όλη την οικογένεια;"
        description="Δείτε πότε η αποζημίωση μπορεί να υπολογίζεται για κάθε μέλος της οικογένειας, τι ισχύει συνήθως για τα παιδιά και γιατί στα βρέφη μετρά ο τρόπος καταχώρησης στην κράτηση."
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
            headline: "Μπορώ να ζητήσω αποζημίωση για όλη την οικογένεια;",
            description:
              "Πρακτικός οδηγός για το πώς διαβάζεται η αποζημίωση πτήσης όταν ταξιδεύει ολόκληρη η οικογένεια, τι ισχύει για τα παιδιά και γιατί τα βρέφη θέλουν πιο προσεκτικό έλεγχο.",
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
                name: "Μπορώ να ζητήσω αποζημίωση για όλη την οικογένεια;",
                item: articleUrl,
              },
            ],
          }),
        }}
      />

      <article className="min-h-screen bg-gradient-to-br from-slate-50 via-white to-green-50 dark:from-gray-950 dark:via-gray-900 dark:to-slate-900">
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
            <span>Μπορώ να ζητήσω αποζημίωση για όλη την οικογένεια;</span>
          </div>

          <header className="mb-10">
            <div className="mb-4 inline-flex items-center gap-2 rounded-full bg-green-100 px-4 py-2 text-sm font-medium text-green-700 dark:bg-green-900/30 dark:text-green-300">
              Οδηγός για οικογένειες και κοινές κρατήσεις
            </div>
            <h1 className="mb-5 text-4xl font-bold tracking-tight text-slate-900 dark:text-white md:text-5xl">
              Μπορώ να ζητήσω αποζημίωση για όλη την οικογένεια;
            </h1>
            <p className="max-w-3xl text-xl leading-8 text-slate-600 dark:text-slate-300">
              Η σύντομη απάντηση είναι <strong>συχνά ναι</strong>. Στις περισσότερες υποθέσεις του
              EU261 δεν κοιτάμε μόνο μία κοινή κράτηση σαν ένα ενιαίο πρόσωπο, αλλά
              <strong> κάθε επιβάτη χωριστά</strong>. Αυτό σημαίνει ότι σε ένα πρόβλημα πτήσης μπορεί
              να προκύπτει αξίωση για περισσότερα μέλη της ίδιας οικογένειας.
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
            <Card className="border-green-200 bg-gradient-to-br from-green-600 to-emerald-700 p-8 text-white shadow-xl dark:border-green-800">
              <h2 className="mb-4 text-2xl font-bold">Σύντομη απάντηση</h2>
              <div className="space-y-3 text-base leading-7 text-green-50">
                <p>
                  Το δικαίωμα αποζημίωσης συνήθως εξετάζεται <strong>ανά επιβάτη</strong>.
                </p>
                <p>
                  Αν δύο γονείς και δύο παιδιά πληρούν τις προϋποθέσεις, η υπόθεση δεν χρειάζεται να
                  διαβαστεί ως μία μόνο αξίωση.
                </p>
                <p>
                  Στα πολύ μικρά παιδιά και στα βρέφη, αξίζει να κοιτάμε πιο προσεκτικά
                  <strong> πώς είχαν καταχωρηθεί στην κράτηση</strong> και με ποιους όρους
                  ταξίδευαν.
                </p>
              </div>
            </Card>
          </section>

          <ClaimWingerElSection
            className="mb-12"
            title="Ταξίδεψε όλη η οικογένεια και θέλετε να δείτε πόσοι μετράνε στην αξίωση;"
            description="Το ClaimWinger Ελλάδα μπορεί να βοηθήσει να φανεί αν η υπόθεση αφορά έναν μόνο επιβάτη ή αν υπάρχει πραγματική βάση για αποζημίωση για περισσότερα μέλη της οικογένειας μαζί."
            ctaHref="https://claimwinger.com/el?utm_source=problemlot-el&utm_medium=embedded_cta&utm_campaign=family_claim"
            ctaLabel="Έλεγχος με το ClaimWinger"
            loadingLabel="Φορτώνεται η φόρμα ClaimWinger..."
            loadingDescription="Σε λίγο θα εμφανιστεί η ελληνική φόρμα για έλεγχο της οικογενειακής περίπτωσής σας."
            placement="el_blog_family_claim_embed"
          />

          <section className="mb-12">
            <h2 className="mb-6 text-3xl font-bold text-slate-900 dark:text-white">
              Πώς να το διαβάζετε πρακτικά
            </h2>
            <div className="grid gap-4 md:grid-cols-2">
              {[
                "κάθε επιβάτης έχει συνήθως δική του θέση στην αξιολόγηση της υπόθεσης",
                "μία κοινή κράτηση δεν σημαίνει αυτόματα ένα μόνο δικαίωμα",
                "αν πληρούνται οι προϋποθέσεις για περισσότερα μέλη, το ποσό συχνά εξετάζεται ανά άτομο",
                "στα βρέφη και στις ειδικές παιδικές κατηγορίες μετρά περισσότερο η δομή της κράτησης",
              ].map((item) => (
                <Card key={item} className="border-slate-200 p-4 dark:border-slate-700">
                  <div className="flex items-start gap-3">
                    <CheckCircle2 className="mt-1 h-5 w-5 text-green-600" />
                    <p className="text-sm leading-6 text-slate-700 dark:text-slate-300">{item}</p>
                  </div>
                </Card>
              ))}
            </div>
          </section>

          <section className="mb-12">
            <h2 className="mb-6 text-3xl font-bold text-slate-900 dark:text-white">
              Παιδιά, βρέφη και κατηγορίες βρεφικού ναύλου
            </h2>
            <div className="space-y-4 text-base leading-7 text-slate-700 dark:text-slate-300">
              <p>
                Για τα παιδιά η απάντηση είναι συχνά θετική, ειδικά όταν ταξιδεύουν ως κανονικοί
                επιβάτες μέσα στην κράτηση. Εκεί η λογική συνήθως είναι αρκετά καθαρή: αν το παιδί
                είναι επιβάτης της πτήσης και η υπόθεση πληροί τις προϋποθέσεις, μπορεί να υπάρχει
                και για αυτό σχετική αξίωση.
              </p>
              <p>
                Στα βρέφη όμως χρειάζεται μεγαλύτερη προσοχή. Όταν ένα βρέφος ταξιδεύει χωρίς
                ξεχωριστή θέση ή με διαφορετική τιμολογιακή κατηγορία, είναι καλύτερο να μην
                παρουσιάζεται το θέμα σαν απόλυτα αυτόματο. Εκεί έχει σημασία πώς ακριβώς είχε
                καταχωρηθεί στην κράτηση και υπό ποιους όρους ταξίδευε.
              </p>
              <p>
                Αυτή είναι η πιο τίμια διατύπωση και για SEO και για πραγματική χρησιμότητα: στις
                οικογενειακές υποθέσεις συχνά υπάρχει περιθώριο για περισσότερους επιβάτες, αλλά τα
                βρέφη θέλουν λίγο πιο προσεκτικό έλεγχο από μια απλή γενική απάντηση.
              </p>
            </div>
          </section>

          <section className="mb-12">
            <div className="grid gap-4 md:grid-cols-3">
              <Card className="border-slate-200 p-6 dark:border-slate-700">
                <div className="mb-3 flex items-center gap-2 text-slate-900 dark:text-white">
                  <Users className="h-5 w-5 text-green-600" />
                  <h3 className="text-lg font-semibold">Οικογένεια</h3>
                </div>
                <p className="text-sm leading-6 text-slate-600 dark:text-slate-300">
                  Μια κοινή κράτηση δεν κλείνει το ζήτημα σε ένα μόνο ποσό. Το κάθε μέλος μπορεί να
                  έχει τη δική του θέση στην υπόθεση.
                </p>
              </Card>
              <Card className="border-slate-200 p-6 dark:border-slate-700">
                <div className="mb-3 flex items-center gap-2 text-slate-900 dark:text-white">
                  <Baby className="h-5 w-5 text-green-600" />
                  <h3 className="text-lg font-semibold">Βρέφη</h3>
                </div>
                <p className="text-sm leading-6 text-slate-600 dark:text-slate-300">
                  Στα βρέφη θέλουμε πιο προσεκτικό έλεγχο, γιατί η δομή της κράτησης και η κατηγορία
                  ταξιδιού επηρεάζουν τη δύναμη της περίπτωσης.
                </p>
              </Card>
              <Card className="border-slate-200 p-6 dark:border-slate-700">
                <div className="mb-3 flex items-center gap-2 text-slate-900 dark:text-white">
                  <ShieldCheck className="h-5 w-5 text-green-600" />
                  <h3 className="text-lg font-semibold">Εκπροσώπηση</h3>
                </div>
                <p className="text-sm leading-6 text-slate-600 dark:text-slate-300">
                  Ένας γονέας συχνά μπορεί να κινήσει τη διαδικασία, αλλά μπορεί να ζητηθούν στοιχεία
                  για το ποιον ακριβώς εκπροσωπεί.
                </p>
              </Card>
            </div>
          </section>

          <section className="mb-12">
            <h2 className="mb-6 text-3xl font-bold text-slate-900 dark:text-white">
              Μπορεί ένας γονέας να κάνει το αίτημα για όλους;
            </h2>
            <div className="space-y-4 text-base leading-7 text-slate-700 dark:text-slate-300">
              <p>
                Στην πράξη αυτό γίνεται συχνά, ειδικά όταν όλη η οικογένεια βρισκόταν στην ίδια
                κράτηση και το ιστορικό της υπόθεσης είναι κοινό. Όμως σε ορισμένα στάδια η
                αεροπορική ή ο πάροχος που διαχειρίζεται τη διεκδίκηση μπορεί να ζητήσει διευκρινίσεις ή
                αποδείξεις για το ποια πρόσωπα περιλαμβάνονται στην αξίωση.
              </p>
              <p>
                Γι' αυτό είναι χρήσιμο να κρατάτε καθαρά όλα τα ονόματα, τα στοιχεία της κράτησης,
                τα έγγραφα επιβίβασης και ό,τι δείχνει ότι τα μέλη της οικογένειας συνδέονται με το
                ίδιο πρόβλημα πτήσης.
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
                  Οι οικογενειακές υποθέσεις γίνονται πιο δύσκολες όταν υπάρχουν παιδιά διαφορετικών
                  ηλικιών, βρέφη χωρίς ξεχωριστή θέση ή ερωτήματα για το ποιος εκπροσωπεί ποιον.
                </p>
                <p>
                  Σε αυτό το σημείο το <strong>ClaimWinger</strong> μπορεί να βοηθήσει να
                  οργανωθεί σωστά η υπόθεση. Η προμήθεια του ClaimWinger είναι <strong>30%</strong>,
                  ανεξάρτητα από το αν η διαδρομή είναι εξωδικαστική ή δικαστική.
                </p>
              </div>
              <div className="mt-6 flex flex-wrap gap-3">
                <Button asChild className="bg-sky-600 hover:bg-sky-700">
                  <Link
                    href={claimWingerHomeHref}
                    onClick={() =>
                      trackClaimClick("el_blog_family_claim_inline", claimWingerHomeHref)
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
                      trackClaimClick("el_blog_family_claim_delayed", delayedFlightHref)
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
                  Χωρίς boarding pass
                </h3>
                <p className="mb-4 text-sm leading-6 text-slate-600 dark:text-slate-300">
                  Χρήσιμο όταν δεν έχετε όλα τα αποδεικτικά εξίσου καθαρά για κάθε μέλος της
                  οικογένειας.
                </p>
                <Link
                  href="/el/blog/mporo-na-zitiso-apozimiosi-choris-boarding-pass"
                  className="text-sm font-medium text-sky-600 hover:text-sky-700"
                >
                  Δείτε τι άλλο βοηθά
                </Link>
              </Card>
              <Card className="p-6">
                <h3 className="mb-3 text-lg font-semibold text-slate-900 dark:text-white">
                  Έγγραφα για την αποζημίωση
                </h3>
                <p className="mb-4 text-sm leading-6 text-slate-600 dark:text-slate-300">
                  Χρήσιμο όταν θέλετε να οργανώσετε κοινή υπόθεση με πολλά ονόματα και αποδεικτικά.
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
                  Καθυστερημένη πτήση 3 ωρών
                </h3>
                <p className="mb-4 text-sm leading-6 text-slate-600 dark:text-slate-300">
                  Ο οδηγός για το πότε ανοίγει η συζήτηση για πραγματική χρηματική αποζημίωση.
                </p>
                <Link
                  href="/el/blog/posa-chrimata-pairno-gia-kathysterisi-3-oron"
                  className="text-sm font-medium text-sky-600 hover:text-sky-700"
                >
                  Δείτε τα ποσά
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
                  Όταν ταξιδεύει όλη η οικογένεια, η υπόθεση δεν χρειάζεται να αντιμετωπίζεται σαν
                  μία μόνο αξίωση. Στις περισσότερες περιπτώσεις το δικαίωμα εξετάζεται ανά επιβάτη,
                  κάτι που μπορεί να αλλάξει ουσιαστικά το συνολικό αποτέλεσμα.
                </p>
                <p>
                  Για τα παιδιά η εικόνα είναι συχνά θετική, αλλά στα βρέφη θέλει λίγο μεγαλύτερη
                  προσοχή. Εκεί η σωστή ανάγνωση της κράτησης κάνει τη διαφορά ανάμεσα σε ένα
                  υπεραπλουστευμένο συμπέρασμα και σε μια πραγματικά αξιόπιστη εκτίμηση.
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
                Θέλετε να δείτε αν η οικογενειακή σας υπόθεση έχει πραγματική βάση;
              </h2>
              <p className="mb-6 text-base leading-7 text-slate-700 dark:text-slate-300">
                Μπορείτε να ξεκινήσετε από το <strong>ClaimWinger</strong> στα ελληνικά ή να δείτε
                και τις ξεχωριστές σελίδες για <strong>καθυστερημένη πτήση</strong> και
                <strong> ακυρωμένη πτήση</strong>, αν θέλετε να καταλάβετε πρώτα τη βάση του
                προβλήματος.
              </p>
              <div className="flex flex-wrap gap-3">
                <Button asChild className="bg-sky-600 hover:bg-sky-700">
                  <Link
                    href={claimWingerHomeHref}
                    onClick={() =>
                      trackClaimClick("el_blog_family_claim_footer_home", claimWingerHomeHref)
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
                      trackClaimClick("el_blog_family_claim_footer_delayed", delayedFlightHref)
                    }
                  >
                    Καθυστερημένη πτήση
                  </Link>
                </Button>
                <Button asChild variant="outline">
                  <Link
                    href={cancelledFlightHref}
                    onClick={() =>
                      trackClaimClick("el_blog_family_claim_footer_cancelled", cancelledFlightHref)
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
