import Link from "next/link";
import {
  AlertCircle,
  ArrowRight,
  Clock,
  FileText,
  MailWarning,
  MessageSquareMore,
  ShieldAlert,
  TimerReset,
} from "lucide-react";

import { ClaimWingerElSection } from "@/components/ClaimWingerElSection";
import { LayoutEl } from "@/components/LayoutEl";
import { SEO } from "@/components/SEO";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { pushClaimWingerEvent } from "@/lib/claimwingerTracking";

const articleUrl =
  "https://problemlot.com/el/blog/ti-na-kano-an-i-aeroporiki-den-apanta";
const claimWingerHomeHref =
  "https://claimwinger.com/el?utm_source=problemlot-el&utm_medium=article_link&utm_campaign=airline_not_replying";
const delayedFlightHref =
  "https://claimwinger.com/el/kathysterimeni-ptisi?utm_source=problemlot-el&utm_medium=article_link&utm_campaign=airline_not_replying";
const cancelledFlightHref =
  "https://claimwinger.com/el/akyromeni-ptisi?utm_source=problemlot-el&utm_medium=article_link&utm_campaign=airline_not_replying";

const faqItems = [
  {
    question: "Τι να κάνω αν η αεροπορική δεν απαντά;",
    answer:
      "Πρώτα βεβαιωθείτε ότι η καταγγελία στάλθηκε σωστά στον πραγματικό αερομεταφορέα και κρατήστε αποδεικτικό υποβολής. Αν δεν λάβετε απάντηση μέσα σε 2 μήνες, οι επίσημες ευρωπαϊκές πληροφορίες επιτρέπουν να προχωρήσετε σε καταγγελία προς την αρμόδια εθνική αρχή.",
  },
  {
    question: "Η σιωπή της αεροπορικής σημαίνει ότι κέρδισα αυτόματα;",
    answer:
      "Όχι. Η μη απάντηση δεν σημαίνει αυτόματη πληρωμή. Συνήθως χρειάζεται υπενθύμιση, καταγγελία στην αρμόδια αρχή ή άλλη κίνηση κλιμάκωσης.",
  },
  {
    question: "Πότε σταματά να έχει νόημα να περιμένω;",
    answer:
      "Όταν έχετε ήδη καθαρό αποδεικτικό ότι η καταγγελία υποβλήθηκε σωστά και έχουν περάσει περίπου 2 μήνες χωρίς ουσιαστική απάντηση, συνήθως δεν έχει νόημα να συνεχίζετε απλώς να περιμένετε παθητικά.",
  },
  {
    question: "Ποια είναι η πρώτη πρακτική κίνηση πριν από την κλιμάκωση;",
    answer:
      "Το πρώτο βήμα είναι να βεβαιωθείτε ότι μιλάτε με τη σωστή αεροπορική, ότι το αίτημα υποβλήθηκε σωστά και ότι κρατήσατε αριθμό υπόθεσης, screenshot ή email επιβεβαίωσης της υποβολής.",
  },
];

function trackClaimClick(placement: string, destination: string) {
  pushClaimWingerEvent("claimwinger_cta_click", {
    locale: "el",
    placement,
    destination,
  });
}

export default function AirlineNotReplyingElPage() {
  return (
    <LayoutEl>
      <SEO
        title="Τι να κάνω αν η αεροπορική δεν απαντά;"
        description="Δείτε τι να κάνετε αν η αεροπορική δεν απαντά σε αίτημα αποζημίωσης, πότε έχει νόημα η υπενθύμιση, τι σημαίνει το όριο των 2 μηνών και πότε να περάσετε σε κλιμάκωση."
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
            headline: "Τι να κάνω αν η αεροπορική δεν απαντά;",
            description:
              "Εξηγούμε ποια είναι τα σωστά επόμενα βήματα όταν η αεροπορική δεν απαντά, πότε η αναμονή παύει να έχει νόημα και πότε μπαίνει η αρμόδια εθνική αρχή.",
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
                name: "Τι να κάνω αν η αεροπορική δεν απαντά;",
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
            <span>Τι να κάνω αν η αεροπορική δεν απαντά;</span>
          </div>

          <header className="mb-10">
            <div className="mb-4 inline-flex items-center gap-2 rounded-full bg-sky-100 px-4 py-2 text-sm font-medium text-sky-700 dark:bg-sky-900/30 dark:text-sky-300">
              Οδηγός για σιωπή και κλιμάκωση
            </div>
            <h1 className="mb-5 text-4xl font-bold tracking-tight text-slate-900 dark:text-white md:text-5xl">
              Τι να κάνω αν η αεροπορική δεν απαντά;
            </h1>
            <p className="max-w-3xl text-xl leading-8 text-slate-600 dark:text-slate-300">
              Η πιο συνηθισμένη παγίδα είναι να περιμένει κανείς παθητικά χωρίς να ξέρει αν η
              υπόθεση προχωρά ή αν έχει απλώς χαθεί σε κάποιο form. Η σωστή σειρά κινήσεων είναι να
              επιβεβαιώσετε πρώτα ότι η καταγγελία στάλθηκε σωστά και μετά να ξέρετε πότε έχει νόημα
              η <strong>υπενθύμιση</strong> και πότε πρέπει να μπείτε σε
              <strong> κλιμάκωση</strong>.
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
                  Αν η αεροπορική δεν απαντά, πρώτα βεβαιωθείτε ότι το αίτημα στάλθηκε
                  <strong> σωστά</strong> και ότι κρατήσατε αποδεικτικό υποβολής.
                </p>
                <p>
                  Αν περάσουν περίπου <strong>2 μήνες</strong> χωρίς ουσιαστική απάντηση, οι
                  επίσημες ευρωπαϊκές πληροφορίες επιτρέπουν να προχωρήσετε στην αρμόδια εθνική
                  αρχή.
                </p>
                <p>
                  Η σιωπή της αεροπορικής δεν σημαίνει αυτόματη νίκη. Σημαίνει ότι η υπόθεση
                  χρειάζεται <strong>σωστή κλιμάκωση</strong>.
                </p>
              </div>
            </Card>
          </section>

          <ClaimWingerElSection
            className="mb-12"
            title="Μην αφήνετε τη σιωπή της αεροπορικής να παγώσει την υπόθεσή σας"
            description="Αν έχετε ήδη στείλει claim και η αεροπορική δεν απαντά, το ClaimWinger Ελλάδα μπορεί να βοηθήσει να εκτιμήσετε αν η υπόθεση μοιάζει ώριμη για υπενθύμιση ή για επόμενο βήμα κλιμάκωσης."
            ctaHref="https://claimwinger.com/el?utm_source=problemlot-el&utm_medium=embedded_cta&utm_campaign=airline_not_replying"
            ctaLabel="Έλεγχος με το ClaimWinger"
            loadingLabel="Φορτώνεται η φόρμα ClaimWinger..."
            loadingDescription="Σε λίγο θα εμφανιστεί η ελληνική φόρμα για έλεγχο της υπόθεσής σας."
            placement="el_blog_airline_not_replying_embed"
          />

          <section className="mb-12">
            <h2 className="mb-6 text-3xl font-bold text-slate-900 dark:text-white">
              1. Πρώτα ελέγξτε αν η καταγγελία στάλθηκε σωστά
            </h2>
            <div className="grid gap-4 md:grid-cols-2">
              <Card className="p-6">
                <div className="mb-3 flex items-center gap-2 text-slate-900 dark:text-white">
                  <MessageSquareMore className="h-5 w-5 text-sky-600" />
                  <h3 className="text-xl font-semibold">Σωστός παραλήπτης</h3>
                </div>
                <p className="text-sm leading-6 text-slate-600 dark:text-slate-300">
                  Βεβαιωθείτε ότι το αίτημα πήγε στον σωστό operating carrier και όχι μόνο σε
                  reseller, OTA ή άλλο ενδιάμεσο.
                </p>
              </Card>
              <Card className="p-6">
                <div className="mb-3 flex items-center gap-2 text-slate-900 dark:text-white">
                  <MailWarning className="h-5 w-5 text-sky-600" />
                  <h3 className="text-xl font-semibold">Απόδειξη υποβολής</h3>
                </div>
                <p className="text-sm leading-6 text-slate-600 dark:text-slate-300">
                  Κρατήστε email επιβεβαίωσης, screenshot, αριθμό υπόθεσης ή οτιδήποτε δείχνει ότι
                  το αίτημα καταχωρήθηκε πραγματικά.
                </p>
              </Card>
            </div>
          </section>

          <section className="mb-12">
            <h2 className="mb-6 text-3xl font-bold text-slate-900 dark:text-white">
              2. Πότε η απλή αναμονή παύει να έχει νόημα
            </h2>
            <div className="space-y-4 text-base leading-7 text-slate-700 dark:text-slate-300">
              <p>
                Αν μόλις στείλατε το αίτημα, ένα μικρό διάστημα αναμονής είναι λογικό. Αν όμως
                έχετε ήδη καθαρό αποδεικτικό υποβολής και περνούν εβδομάδες χωρίς ουσιαστική
                πρόοδο, η υπόθεση δεν βελτιώνεται απλώς επειδή περιμένετε.
              </p>
              <p>
                Η επίσημη ευρωπαϊκή πληροφόρηση δείχνει σαφώς το σημείο καμπής: όταν δεν υπάρχει
                απάντηση μέσα σε <strong>2 μήνες</strong>, μπαίνει ρεαλιστικά το επόμενο επίπεδο.
              </p>
            </div>
          </section>

          <section className="mb-12">
            <h2 className="mb-6 text-3xl font-bold text-slate-900 dark:text-white">
              3. Το επόμενο βήμα μετά τους 2 μήνες
            </h2>
            <div className="grid gap-4 md:grid-cols-2">
              <Card className="p-6">
                <div className="mb-3 flex items-center gap-2 text-slate-900 dark:text-white">
                  <ShieldAlert className="h-5 w-5 text-sky-600" />
                  <h3 className="text-xl font-semibold">Εθνική αρχή</h3>
                </div>
                <p className="text-sm leading-6 text-slate-600 dark:text-slate-300">
                  Αν δεν υπάρχει απάντηση, μπορείτε να περάσετε στην αρμόδια εθνική αρχή, σύμφωνα
                  με τη λογική των επίσημων ευρωπαϊκών οδηγιών για τα δικαιώματα επιβατών.
                </p>
              </Card>
              <Card className="p-6">
                <div className="mb-3 flex items-center gap-2 text-slate-900 dark:text-white">
                  <TimerReset className="h-5 w-5 text-sky-600" />
                  <h3 className="text-xl font-semibold">Σωστή υπενθύμιση</h3>
                </div>
                <p className="text-sm leading-6 text-slate-600 dark:text-slate-300">
                  Πριν ή παράλληλα με την κλιμάκωση, βοηθά μια σύντομη, καθαρή υπενθύμιση που
                  αναφέρει την ημερομηνία του αρχικού αιτήματος και επισυνάπτει ξανά τα βασικά στοιχεία.
                </p>
              </Card>
            </div>
          </section>

          <section className="mb-12">
            <h2 className="mb-6 text-3xl font-bold text-slate-900 dark:text-white">
              4. Τι δεν σημαίνει η σιωπή της αεροπορικής
            </h2>
            <div className="grid gap-4 md:grid-cols-2">
              {[
                "δεν σημαίνει αυτόματη αποδοχή του αιτήματος",
                "δεν σημαίνει ότι θα πληρωθείτε αργότερα χωρίς άλλη κίνηση",
                "δεν σημαίνει πάντα ότι η υπόθεση είναι αδύναμη",
                "δεν σημαίνει ότι πρέπει να ξεκινήσετε από την αρχή χωρίς λόγο",
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
                Η υπόθεση έχει κολλήσει χωρίς απάντηση;
              </h2>
              <p className="mb-6 text-base leading-7 text-slate-700 dark:text-slate-300">
                Αν η αεροπορική σιωπά και δεν ξέρετε αν έχει νόημα να περιμένετε ή να περάσετε σε
                κλιμάκωση, το πιο χρήσιμο είναι να γίνει ένας γρήγορος έλεγχος για το αν η υπόθεση
                μοιάζει ώριμη για επόμενο βήμα.
              </p>
              <div className="flex flex-wrap gap-3">
                <Button asChild size="lg" className="bg-sky-600 hover:bg-sky-700">
                  <a
                    href={claimWingerHomeHref}
                    target="_blank"
                    rel="noopener noreferrer"
                    onClick={() =>
                      trackClaimClick(
                        "el_blog_airline_not_replying_home_button",
                        claimWingerHomeHref,
                      )
                    }
                  >
                    Άνοιγμα ClaimWinger
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </a>
                </Button>
                <Button asChild size="lg" variant="outline">
                  <a
                    href={cancelledFlightHref}
                    target="_blank"
                    rel="noopener noreferrer"
                    onClick={() =>
                      trackClaimClick(
                        "el_blog_airline_not_replying_cancelled_button",
                        cancelledFlightHref,
                      )
                    }
                  >
                    Έλεγχος ακυρωμένης πτήσης
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
                  href="/el/blog/posos-chronos-chreiazetai-gia-na-plirothei-i-apozimiosi"
                  className="rounded-2xl border border-slate-200 p-5 transition-colors hover:border-sky-400 hover:bg-sky-50 dark:border-slate-700 dark:hover:border-sky-700 dark:hover:bg-sky-950/20"
                >
                  <h3 className="mb-2 font-semibold text-slate-900 dark:text-white">
                    Πόσος χρόνος χρειάζεται για πληρωμή;
                  </h3>
                  <p className="text-sm text-slate-600 dark:text-slate-300">
                    Ο οδηγός για χρόνο αναμονής, επιστροφή χρημάτων και αποζημίωση.
                  </p>
                </Link>
                <a
                  href={cancelledFlightHref}
                  target="_blank"
                  rel="noopener noreferrer"
                  onClick={() =>
                    trackClaimClick(
                      "el_blog_airline_not_replying_inline_cancelled_link",
                      cancelledFlightHref,
                    )
                  }
                  className="rounded-2xl border border-slate-200 p-5 transition-colors hover:border-sky-400 hover:bg-sky-50 dark:border-slate-700 dark:hover:border-sky-700 dark:hover:bg-sky-950/20"
                >
                  <h3 className="mb-2 font-semibold text-slate-900 dark:text-white">
                    Φόρμα ClaimWinger για ακυρωμένη πτήση
                  </h3>
                  <p className="text-sm text-slate-600 dark:text-slate-300">
                    Αν η υπόθεση αφορά ακύρωση, εδώ μπορείτε να ξεκινήσετε άμεσα τον έλεγχο.
                  </p>
                </a>
                <a
                  href={delayedFlightHref}
                  target="_blank"
                  rel="noopener noreferrer"
                  onClick={() =>
                    trackClaimClick(
                      "el_blog_airline_not_replying_inline_delayed_link",
                      delayedFlightHref,
                    )
                  }
                  className="rounded-2xl border border-slate-200 p-5 transition-colors hover:border-sky-400 hover:bg-sky-50 dark:border-slate-700 dark:hover:border-sky-700 dark:hover:bg-sky-950/20"
                >
                  <h3 className="mb-2 font-semibold text-slate-900 dark:text-white">
                    Φόρμα ClaimWinger για καθυστερημένη πτήση
                  </h3>
                  <p className="text-sm text-slate-600 dark:text-slate-300">
                    Αν το πρόβλημα ήταν μεγάλη καθυστέρηση, μπορείτε να περάσετε από εδώ στον έλεγχο.
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
