import Link from "next/link";
import {
  AlertCircle,
  ArrowRight,
  CheckCircle2,
  Clock,
  FileText,
  GitBranch,
  PlaneLanding,
  Ticket,
} from "lucide-react";

import { ClaimWingerElSection } from "@/components/ClaimWingerElSection";
import { LayoutEl } from "@/components/LayoutEl";
import { SEO } from "@/components/SEO";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { pushClaimWingerEvent } from "@/lib/claimwingerTracking";

const articleUrl =
  "https://problemlot.com/el/blog/dikaioumai-apozimiosi-gia-chameni-antapokrisi";
const claimWingerHomeHref =
  "https://claimwinger.com/el?utm_source=problemlot-el&utm_medium=article_link&utm_campaign=missed_connection";
const delayedFlightHref =
  "https://claimwinger.com/el/kathysterimeni-ptisi?utm_source=problemlot-el&utm_medium=article_link&utm_campaign=missed_connection";
const cancelledFlightHref =
  "https://claimwinger.com/el/akyromeni-ptisi?utm_source=problemlot-el&utm_medium=article_link&utm_campaign=missed_connection";

const faqItems = [
  {
    question: "Δικαιούμαι αποζημίωση για χαμένη ανταπόκριση;",
    answer:
      "Συχνά ναι, αν οι πτήσεις ήταν σε μία ενιαία κράτηση, το ταξίδι καλύπτεται από το EU261 και φτάσατε στον τελικό προορισμό με καθυστέρηση 3 ωρών ή περισσότερο, χωρίς να υπάρχουν έγκυρες έκτακτες περιστάσεις.",
  },
  {
    question: "Αρκεί ότι έχασα το δεύτερο αεροπλάνο;",
    answer:
      "Όχι. Το κρίσιμο δεν είναι μόνο ότι χάθηκε η ανταπόκριση, αλλά πόση ήταν τελικά η καθυστέρηση στην άφιξη και αν όλο το ταξίδι ήταν στην ίδια κράτηση.",
  },
  {
    question: "Τι γίνεται αν είχα δύο ξεχωριστά εισιτήρια;",
    answer:
      "Τότε η υπόθεση συνήθως είναι πολύ πιο αδύναμη. Οι αεροπορικές συνήθως δεν αντιμετωπίζουν με τον ίδιο τρόπο μια χαμένη ανταπόκριση όταν το επόμενο σκέλος αγοράστηκε χωριστά.",
  },
  {
    question: "Πόσα χρήματα μπορεί να δίνει μια χαμένη ανταπόκριση;",
    answer:
      "Αν υπάρχει δικαίωμα, το ποσό συνήθως ακολουθεί τις κλίμακες του EU261, δηλαδή 250 €, 400 € ή 600 €, ανάλογα με την απόσταση και τη δομή της διαδρομής.",
  },
];

function trackClaimClick(placement: string, destination: string) {
  pushClaimWingerEvent("claimwinger_cta_click", {
    locale: "el",
    placement,
    destination,
  });
}

export default function MissedConnectionCompensationElPage() {
  return (
    <LayoutEl>
      <SEO
        title="Δικαιούμαι αποζημίωση για χαμένη ανταπόκριση;"
        description="Χάσατε την ανταπόκριση λόγω καθυστέρησης; Δείτε πότε υπάρχει αποζημίωση, γιατί η μία κράτηση είναι καθοριστική και γιατί μετρά η άφιξη στον τελικό προορισμό."
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
            headline: "Δικαιούμαι αποζημίωση για χαμένη ανταπόκριση;",
            description:
              "Πρακτικός οδηγός για το πότε μια χαμένη ανταπόκριση μπορεί να οδηγεί σε αποζημίωση και γιατί η μία κράτηση και η τελική άφιξη είναι τα δύο πιο κρίσιμα σημεία.",
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
                name: "Δικαιούμαι αποζημίωση για χαμένη ανταπόκριση;",
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
            <span>Δικαιούμαι αποζημίωση για χαμένη ανταπόκριση;</span>
          </div>

          <header className="mb-10">
            <div className="mb-4 inline-flex items-center gap-2 rounded-full bg-sky-100 px-4 py-2 text-sm font-medium text-sky-700 dark:bg-sky-900/30 dark:text-sky-300">
              Οδηγός για χαμένη ανταπόκριση
            </div>
            <h1 className="mb-5 text-4xl font-bold tracking-tight text-slate-900 dark:text-white md:text-5xl">
              Δικαιούμαι αποζημίωση για χαμένη ανταπόκριση;
            </h1>
            <p className="max-w-3xl text-xl leading-8 text-slate-600 dark:text-slate-300">
              Η σύντομη απάντηση είναι <strong>συχνά ναι</strong>, αλλά όχι απλώς επειδή χάσατε το
              δεύτερο αεροπλάνο. Τα δύο πιο σημαντικά σημεία είναι αν το ταξίδι ήταν σε
              <strong> μία ενιαία κράτηση</strong> και πόσο αργά φτάσατε στον
              <strong> τελικό προορισμό</strong>.
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
                  Αν όλες οι πτήσεις ήταν στην <strong>ίδια κράτηση</strong> και φτάσατε στον τελικό
                  προορισμό με καθυστέρηση τουλάχιστον <strong>3 ωρών</strong>, μπορεί να υπάρχει
                  αποζημίωση.
                </p>
                <p>
                  Το ότι χάσατε το δεύτερο σκέλος δεν αρκεί μόνο του. Για το EU261 μετρά κυρίως η
                  <strong>τελική άφιξη</strong> και όχι μόνο η στιγμή που χάθηκε η ανταπόκριση.
                </p>
                <p>
                  Αν όμως είχατε <strong>ξεχωριστά εισιτήρια</strong>, η υπόθεση γίνεται συνήθως πολύ
                  πιο αδύναμη.
                </p>
              </div>
            </Card>
          </section>

          <ClaimWingerElSection
            className="mb-12"
            title="Χάσατε ανταπόκριση και θέλετε να δείτε αν υπάρχει αξίωση;"
            description="Το ClaimWinger Ελλάδα μπορεί να βοηθήσει να ξεχωρίσετε γρήγορα αν πρόκειται για υπόθεση με μία ενιαία κράτηση και αν η καθυστέρηση στην τελική άφιξη έχει πραγματικό βάρος για αποζημίωση."
            ctaHref="https://claimwinger.com/el?utm_source=problemlot-el&utm_medium=embedded_cta&utm_campaign=missed_connection"
            ctaLabel="Έλεγχος με το ClaimWinger"
            loadingLabel="Φορτώνεται η φόρμα ClaimWinger..."
            loadingDescription="Σε λίγο θα εμφανιστεί η ελληνική φόρμα για έλεγχο της περίπτωσής σας."
            placement="el_blog_missed_connection_embed"
          />

          <section className="mb-12">
            <h2 className="mb-6 text-3xl font-bold text-slate-900 dark:text-white">
              Πότε μια χαμένη ανταπόκριση έχει σοβαρές βάσεις
            </h2>
            <div className="grid gap-4 md:grid-cols-2">
              {[
                "όλα τα σκέλη ήταν σε μία ενιαία κράτηση",
                "η διαδρομή καλύπτεται από το EU261",
                "η άφιξη στον τελικό προορισμό καθυστέρησε τουλάχιστον 3 ώρες",
                "η αεροπορική δεν μπορεί να αποδείξει έγκυρες έκτακτες περιστάσεις",
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
              Γιατί δεν αρκεί να πείτε απλώς «έχασα το δεύτερο αεροπλάνο»
            </h2>
            <div className="space-y-4 text-base leading-7 text-slate-700 dark:text-slate-300">
              <p>
                Πολλοί επιβάτες θεωρούν ότι μόλις χαθεί η ανταπόκριση, η υπόθεση είναι αυτόματα
                κερδισμένη. Στην πραγματικότητα, η ευρωπαϊκή λογική είναι πιο συγκεκριμένη. Το
                κεντρικό ερώτημα δεν είναι μόνο αν δεν προλάβατε το επόμενο σκέλος, αλλά
                <strong> πότε φτάσατε τελικά στον προορισμό σας</strong>.
              </p>
              <p>
                Αν χάσατε την ανταπόκριση αλλά η αεροπορική σας έβαλε σε άλλη πτήση και η τελική άφιξη
                δεν βγήκε πολύ αργότερα, το αποτέλεσμα μπορεί να μην είναι αρκετό για χρηματική
                αποζημίωση. Αντίθετα, αν η χαμένη ανταπόκριση κατέληξε σε μεγάλη καθυστέρηση στην
                άφιξη, τότε η θέση σας μπορεί να είναι ουσιαστικά ισχυρότερη.
              </p>
            </div>
          </section>

          <section className="mb-12">
            <h2 className="mb-6 text-3xl font-bold text-slate-900 dark:text-white">
              Μία κράτηση αλλάζει όλη την εικόνα
            </h2>
            <div className="grid gap-4">
              <Card className="border-slate-200 p-6 dark:border-slate-700">
                <div className="mb-3 flex items-center gap-2 text-slate-900 dark:text-white">
                  <Ticket className="h-5 w-5 text-sky-600" />
                  <h3 className="text-lg font-semibold">Ενιαία κράτηση</h3>
                </div>
                <p className="text-sm leading-6 text-slate-600 dark:text-slate-300">
                  Όταν όλη η διαδρομή είναι στην ίδια κράτηση, το ταξίδι εξετάζεται ως ενιαίο σύνολο.
                  Αυτό είναι το πιο δυνατό θεμέλιο για διεκδίκηση σε περίπτωση χαμένης ανταπόκρισης.
                </p>
              </Card>
              <Card className="border-slate-200 p-6 dark:border-slate-700">
                <div className="mb-3 flex items-center gap-2 text-slate-900 dark:text-white">
                  <GitBranch className="h-5 w-5 text-sky-600" />
                  <h3 className="text-lg font-semibold">Ξεχωριστά εισιτήρια</h3>
                </div>
                <p className="text-sm leading-6 text-slate-600 dark:text-slate-300">
                  Αν αγοράσατε χωριστά το επόμενο σκέλος, η κάθε αεροπορική συνήθως βλέπει τη δική της
                  πτήση αποκομμένα. Εκεί η υπόθεση γίνεται αισθητά πιο αδύναμη.
                </p>
              </Card>
              <Card className="border-slate-200 p-6 dark:border-slate-700">
                <div className="mb-3 flex items-center gap-2 text-slate-900 dark:text-white">
                  <PlaneLanding className="h-5 w-5 text-sky-600" />
                  <h3 className="text-lg font-semibold">Τελικός προορισμός</h3>
                </div>
                <p className="text-sm leading-6 text-slate-600 dark:text-slate-300">
                  Η αξιολόγηση γίνεται συνήθως με βάση την καθυστέρηση στην τελική άφιξη της ίδιας
                  κράτησης και όχι μόνο με βάση την πρώτη χαμένη ανταπόκριση.
                </p>
              </Card>
            </div>
          </section>

          <section className="mb-12">
            <h2 className="mb-6 text-3xl font-bold text-slate-900 dark:text-white">
              Τι ποσά μπορεί να μπαίνουν στο τραπέζι
            </h2>
            <div className="space-y-4 text-base leading-7 text-slate-700 dark:text-slate-300">
              <p>
                Αν υπάρχει δικαίωμα, τα ποσά συνήθως ακολουθούν τα γνωστά επίπεδα του EU261:
                <strong> 250 €, 400 € ή 600 €</strong>. Το ακριβές ύψος εξαρτάται από τη συνολική
                διαδρομή και από το πώς κατηγοριοποιείται η πτήση ως προς την απόσταση και τη δομή
                της.
              </p>
              <p>
                Αυτό σημαίνει ότι δύο περιπτώσεις χαμένης ανταπόκρισης δεν καταλήγουν πάντα στο ίδιο
                ποσό. Άλλη εικόνα έχει ένα πιο σύντομο ευρωπαϊκό ταξίδι και άλλη μια μακρύτερη
                διαδρομή με τελικό προορισμό εκτός Ευρώπης.
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
                  Στις χαμένες ανταποκρίσεις το συχνότερο μπέρδεμα δεν είναι μόνο το νομικό κομμάτι,
                  αλλά και η ταξινόμηση της υπόθεσης: μία κράτηση ή όχι, τελικός προορισμός, νέα
                  πτήση, τελική ώρα άφιξης και ενδεχόμενες έκτακτες περιστάσεις.
                </p>
                <p>
                  Σε αυτό το σημείο το <strong>ClaimWinger</strong> μπορεί να βοηθήσει να διαβαστεί
                  σωστά η υπόθεση. Η προμήθεια του ClaimWinger είναι <strong>30%</strong>,
                  ανεξάρτητα από το αν η υπόθεση κλείσει εξωδικαστικά ή μέσω δικαστικής πορείας.
                </p>
              </div>
              <div className="mt-6 flex flex-wrap gap-3">
                <Button asChild className="bg-sky-600 hover:bg-sky-700">
                  <Link
                    href={claimWingerHomeHref}
                    onClick={() =>
                      trackClaimClick("el_blog_missed_connection_inline", claimWingerHomeHref)
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
                      trackClaimClick("el_blog_missed_connection_delayed", delayedFlightHref)
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
              Τι να κρατήσετε ως αποδεικτικά
            </h2>
            <div className="space-y-4 text-base leading-7 text-slate-700 dark:text-slate-300">
              <p>
                Σε μια υπόθεση χαμένης ανταπόκρισης, τέσσερα στοιχεία έχουν συνήθως το μεγαλύτερο
                βάρος:
              </p>
              <ul className="list-disc space-y-2 pl-6 marker:text-sky-600">
                <li>το επιβεβαιωτικό της ενιαίας κράτησης,</li>
                <li>τα στοιχεία όλων των σκελών της διαδρομής,</li>
                <li>την ώρα που φτάσατε τελικά στον τελικό προορισμό,</li>
                <li>τα μηνύματα της αεροπορικής για νέα κράτηση ή αλλαγές στην πορεία.</li>
              </ul>
              <p>
                Αν η υπόθεση περιλαμβάνει διαφορετικούς αερομεταφορείς στην ίδια κράτηση, τόσο
                περισσότερο αξίζει να κρατήσετε καθαρά όλα τα μηνύματα και τα boarding documents που
                συνδέουν τα σκέλη μεταξύ τους.
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
                  Πτήση με ανταπόκριση
                </h3>
                <p className="mb-4 text-sm leading-6 text-slate-600 dark:text-slate-300">
                  Ο ευρύτερος οδηγός για το πώς κρίνεται αποζημίωση σε itineraries με περισσότερα
                  σκέλη.
                </p>
                <Link
                  href="/el/blog/ischyei-apozimiosi-se-ptisi-me-antapokrisi"
                  className="text-sm font-medium text-sky-600 hover:text-sky-700"
                >
                  Διαβάστε τον οδηγό
                </Link>
              </Card>
              <Card className="p-6">
                <h3 className="mb-3 text-lg font-semibold text-slate-900 dark:text-white">
                  Αλλαγή ώρας πτήσης
                </h3>
                <p className="mb-4 text-sm leading-6 text-slate-600 dark:text-slate-300">
                  Χρήσιμο όταν η ανταπόκριση χάθηκε επειδή προηγουμένως άλλαξε το πρόγραμμα της
                  πρώτης πτήσης.
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
                  Καθυστέρηση 3 ωρών
                </h3>
                <p className="mb-4 text-sm leading-6 text-slate-600 dark:text-slate-300">
                  Ο πιο σύντομος οδηγός για το όριο που συχνά ανοίγει τον δρόμο προς την αποζημίωση.
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
                  Η χαμένη ανταπόκριση μπορεί πράγματι να δίνει αποζημίωση, αλλά η υπόθεση δεν
                  κρίνεται μόνο από το αν δεν προλάβατε το επόμενο σκέλος. Το βάρος πέφτει κυρίως σε
                  δύο ερωτήματα: ήταν όλα στην ίδια κράτηση και πόσο αργά φτάσατε τελικά;
                </p>
                <p>
                  Αν αυτά τα δύο σημεία βγαίνουν υπέρ σας, η περίπτωση μπορεί να είναι ισχυρή. Αν
                  όμως μιλάμε για ξεχωριστά εισιτήρια ή για μικρή τελική καθυστέρηση, η εικόνα
                  αλλάζει αισθητά.
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
                Θέλετε να δείτε αν η χαμένη ανταπόκρισή σας έχει πιθανότητες;
              </h2>
              <p className="mb-6 text-base leading-7 text-slate-700 dark:text-slate-300">
                Μπορείτε να ξεκινήσετε από το <strong>ClaimWinger</strong> στα ελληνικά ή να δείτε
                ξεχωριστά και τους οδηγούς για <strong>καθυστερημένη πτήση</strong> και
                <strong> ακυρωμένη πτήση</strong>, αν το θέμα προέκυψε από μεγαλύτερο disruption.
              </p>
              <div className="flex flex-wrap gap-3">
                <Button asChild className="bg-sky-600 hover:bg-sky-700">
                  <Link
                    href={claimWingerHomeHref}
                    onClick={() =>
                      trackClaimClick("el_blog_missed_connection_footer_home", claimWingerHomeHref)
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
                      trackClaimClick("el_blog_missed_connection_footer_delayed", delayedFlightHref)
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
                        "el_blog_missed_connection_footer_cancelled",
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
