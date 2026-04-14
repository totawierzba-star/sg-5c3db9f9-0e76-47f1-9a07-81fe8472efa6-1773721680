import Link from "next/link";
import {
  AlertCircle,
  ArrowRight,
  CheckCircle2,
  Clock,
  FileText,
  Hourglass,
  Receipt,
  TimerReset,
} from "lucide-react";

import { ClaimWingerElSection } from "@/components/ClaimWingerElSection";
import { LayoutEl } from "@/components/LayoutEl";
import { SEO } from "@/components/SEO";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { pushClaimWingerEvent } from "@/lib/claimwingerTracking";

const articleUrl =
  "https://problemlot.com/el/blog/posos-chronos-chreiazetai-gia-na-plirothei-i-apozimiosi";
const claimWingerHomeHref =
  "https://claimwinger.com/el?utm_source=problemlot-el&utm_medium=article_link&utm_campaign=compensation_timing";
const delayedFlightHref =
  "https://claimwinger.com/el/kathysterimeni-ptisi?utm_source=problemlot-el&utm_medium=article_link&utm_campaign=compensation_timing";
const cancelledFlightHref =
  "https://claimwinger.com/el/akyromeni-ptisi?utm_source=problemlot-el&utm_medium=article_link&utm_campaign=compensation_timing";

const faqItems = [
  {
    question: "Πόσος χρόνος χρειάζεται για να πληρωθεί η αποζημίωση;",
    answer:
      "Δεν υπάρχει ένα ενιαίο ευρωπαϊκό deadline για την πληρωμή της αποζημίωσης. Σε απλές υποθέσεις μπορεί να προχωρήσει σχετικά γρήγορα, αλλά σε πιο αμφισβητούμενες περιπτώσεις μπορεί να χρειαστούν εβδομάδες ή και περισσότερο.",
  },
  {
    question: "Υπάρχει προθεσμία 7 ημερών;",
    answer:
      "Η προθεσμία των 7 ημερών αφορά κυρίως το refund της τιμής του εισιτηρίου σε σχετικές περιπτώσεις. Η ίδια η αποζημίωση δεν έχει ενιαία αντίστοιχη προθεσμία πληρωμής στο επίπεδο των κανόνων της ΕΕ.",
  },
  {
    question: "Γιατί κάποιες υποθέσεις πληρώνονται γρήγορα και άλλες όχι;",
    answer:
      "Αυτό εξαρτάται από το πόσο καθαρή είναι η υπόθεση, αν η αεροπορική αμφισβητεί την ευθύνη της, αν επικαλείται έκτακτες περιστάσεις και αν υπάρχουν πλήρη αποδεικτικά στοιχεία.",
  },
  {
    question: "Αν η αεροπορική δεν απαντά, σημαίνει ότι θα πληρωθώ αργότερα αυτόματα;",
    answer:
      "Όχι. Η σιωπή της αεροπορικής δεν σημαίνει αυτόματη πληρωμή. Συνήθως χρειάζεται follow-up, escalation ή άλλη επόμενη ενέργεια.",
  },
];

function trackClaimClick(placement: string, destination: string) {
  pushClaimWingerEvent("claimwinger_cta_click", {
    locale: "el",
    placement,
    destination,
  });
}

export default function CompensationTimingElPage() {
  return (
    <LayoutEl>
      <SEO
        title="Πόσος χρόνος χρειάζεται για να πληρωθεί η αποζημίωση;"
        description="Μάθετε πόσο χρόνο χρειάζεται συνήθως η πληρωμή της αποζημίωσης, γιατί η προθεσμία 7 ημερών αφορά refund και όχι πάντα compensation, και από τι εξαρτάται η ταχύτητα μιας υπόθεσης."
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
            headline: "Πόσος χρόνος χρειάζεται για να πληρωθεί η αποζημίωση;",
            description:
              "Εξηγούμε γιατί η αποζημίωση δεν έχει ένα ενιαίο deadline πληρωμής στην ΕΕ, ενώ το refund της τιμής του εισιτηρίου ακολουθεί διαφορετική λογική και προθεσμία.",
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
                name: "Πόσος χρόνος χρειάζεται για να πληρωθεί η αποζημίωση;",
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
            <span>Πόσος χρόνος χρειάζεται για να πληρωθεί η αποζημίωση;</span>
          </div>

          <header className="mb-10">
            <div className="mb-4 inline-flex items-center gap-2 rounded-full bg-sky-100 px-4 py-2 text-sm font-medium text-sky-700 dark:bg-sky-900/30 dark:text-sky-300">
              Οδηγός για timing και πληρωμές
            </div>
            <h1 className="mb-5 text-4xl font-bold tracking-tight text-slate-900 dark:text-white md:text-5xl">
              Πόσος χρόνος χρειάζεται για να πληρωθεί η αποζημίωση;
            </h1>
            <p className="max-w-3xl text-xl leading-8 text-slate-600 dark:text-slate-300">
              Η πιο τίμια απάντηση είναι ότι <strong>δεν υπάρχει ένας κοινός σταθερός χρόνος</strong>.
              Κάποιες υποθέσεις κλείνουν σχετικά γρήγορα, άλλες τραβούν περισσότερο. Το βασικό λάθος
              είναι να μπερδεύουμε το <strong>refund</strong> με την ίδια τη
              <strong> compensation</strong>, γιατί οι δύο αυτές γραμμές δεν κινούνται με την ίδια
              λογική.
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
                  Η <strong>αποζημίωση</strong> δεν έχει ένα ενιαίο ευρωπαϊκό deadline πληρωμής που
                  να ισχύει πάντα με τον ίδιο τρόπο.
                </p>
                <p>
                  Το γνωστό όριο των <strong>7 ημερών</strong> σχετίζεται κυρίως με το
                  <strong> refund της τιμής του εισιτηρίου</strong>, όχι με κάθε compensation case.
                </p>
                <p>
                  Η ταχύτητα εξαρτάται από το αν η υπόθεση είναι καθαρή, από το πόσο γρήγορα
                  απαντά η αεροπορική και από το αν αμφισβητεί την ευθύνη της.
                </p>
              </div>
            </Card>
          </section>

          <ClaimWingerElSection
            className="mb-12"
            title="Ελέγξτε την υπόθεσή σας με το ClaimWinger πριν χαθείτε στους χρόνους αναμονής"
            description="Αν προσπαθείτε να καταλάβετε αν η υπόθεσή σας φαίνεται απλή ή αν μοιάζει να πάει προς πιο αργή και δύσκολη πορεία, το ClaimWinger Ελλάδα μπορεί να βοηθήσει με μια πρώτη πρακτική εκτίμηση."
            ctaHref="https://claimwinger.com/el?utm_source=problemlot-el&utm_medium=embedded_cta&utm_campaign=compensation_timing"
            ctaLabel="Έλεγχος με το ClaimWinger"
            loadingLabel="Φορτώνεται η φόρμα ClaimWinger..."
            loadingDescription="Σε λίγο θα εμφανιστεί η ελληνική φόρμα για έλεγχο της υπόθεσής σας."
            placement="el_blog_compensation_timing_embed"
          />

          <section className="mb-12">
            <h2 className="mb-6 text-3xl font-bold text-slate-900 dark:text-white">
              1. Refund και compensation δεν κινούνται με τον ίδιο χρόνο
            </h2>
            <div className="grid gap-4 md:grid-cols-2">
              <Card className="p-6">
                <div className="mb-3 flex items-center gap-2 text-slate-900 dark:text-white">
                  <Receipt className="h-5 w-5 text-sky-600" />
                  <h3 className="text-xl font-semibold">Refund</h3>
                </div>
                <p className="text-sm leading-6 text-slate-600 dark:text-slate-300">
                  Η επιστροφή της τιμής του εισιτηρίου έχει πιο καθαρό χρονικό πλαίσιο στο σχετικό
                  κομμάτι των ευρωπαϊκών κανόνων. Εκεί εμφανίζεται η γνωστή αναφορά στις 7 ημέρες.
                </p>
              </Card>
              <Card className="p-6">
                <div className="mb-3 flex items-center gap-2 text-slate-900 dark:text-white">
                  <Hourglass className="h-5 w-5 text-sky-600" />
                  <h3 className="text-xl font-semibold">Compensation</h3>
                </div>
                <p className="text-sm leading-6 text-slate-600 dark:text-slate-300">
                  Η ίδια η αποζημίωση δεν ακολουθεί έναν ενιαίο, τόσο σαφή χρόνο πληρωμής για κάθε
                  περίπτωση. Εδώ η πρακτική ταχύτητα εξαρτάται περισσότερο από τη συμπεριφορά της
                  αεροπορικής και την καθαρότητα της υπόθεσης.
                </p>
              </Card>
            </div>
          </section>

          <section className="mb-12">
            <h2 className="mb-6 text-3xl font-bold text-slate-900 dark:text-white">
              2. Γιατί κάποιες υποθέσεις κινούνται πιο γρήγορα
            </h2>
            <div className="grid gap-4 md:grid-cols-2">
              {[
                "όταν το περιστατικό είναι καθαρό και εύκολα αποδείξιμο",
                "όταν η αεροπορική δεν αμφισβητεί την εφαρμογή του EU261",
                "όταν υπάρχουν πλήρη στοιχεία κράτησης και καλό evidence trail",
                "όταν δεν υπάρχει διαφωνία για extraordinary circumstances",
              ].map((item) => (
                <Card key={item} className="p-5">
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
              3. Γιατί άλλες υποθέσεις τραβούν περισσότερο
            </h2>
            <div className="grid gap-4 md:grid-cols-2">
              {[
                "όταν η αεροπορική επικαλείται έκτακτες περιστάσεις",
                "όταν λείπουν βασικά αποδεικτικά στοιχεία",
                "όταν η υπόθεση έχει ανταπόκριση, rerouting ή άλλο πιο σύνθετο σχήμα",
                "όταν η αεροπορική καθυστερεί ή δεν απαντά καθαρά",
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
            <h2 className="mb-6 text-3xl font-bold text-slate-900 dark:text-white">
              4. Τι σημαίνει πρακτικά για τον επιβάτη
            </h2>
            <div className="space-y-4 text-base leading-7 text-slate-700 dark:text-slate-300">
              <p>
                Αν η υπόθεσή σας μοιάζει πολύ απλή, μπορεί να κινηθεί πιο γρήγορα. Αν όμως υπάρχει
                άρνηση, σιωπή ή διαφωνία ως προς την ευθύνη της αεροπορικής, είναι πιο ρεαλιστικό να
                περιμένετε ότι η υπόθεση θα πάρει περισσότερο χρόνο.
              </p>
              <p>
                Το σημαντικό είναι να μη στηρίζεστε σε ένα υπεραπλουστευμένο «σε τόσες μέρες θα
                πληρωθώ». Η σωστή προσέγγιση είναι να ξεχωρίσετε τι περιμένετε: refund ή
                compensation, και πόσο καθαρό φαίνεται το claim σας.
              </p>
            </div>
          </section>

          <section className="mb-12">
            <Card className="border-sky-200 bg-sky-50 p-8 dark:border-sky-900 dark:bg-sky-950/20">
              <h2 className="mb-4 text-2xl font-bold text-slate-900 dark:text-white">
                Θέλετε να δείτε αν η υπόθεσή σας μοιάζει απλή ή πιο αργή;
              </h2>
              <p className="mb-6 text-base leading-7 text-slate-700 dark:text-slate-300">
                Αν προσπαθείτε να καταλάβετε αν ο φάκελός σας φαίνεται καθαρός ή αν πάει προς πιο
                αργή, αμφισβητούμενη πορεία, ένας γρήγορος πρακτικός έλεγχος βοηθά περισσότερο από
                έναν θεωρητικό αριθμό ημερών.
              </p>
              <div className="flex flex-wrap gap-3">
                <Button asChild size="lg" className="bg-sky-600 hover:bg-sky-700">
                  <a
                    href={claimWingerHomeHref}
                    target="_blank"
                    rel="noopener noreferrer"
                    onClick={() =>
                      trackClaimClick(
                        "el_blog_compensation_timing_home_button",
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
                    href={delayedFlightHref}
                    target="_blank"
                    rel="noopener noreferrer"
                    onClick={() =>
                      trackClaimClick(
                        "el_blog_compensation_timing_delayed_button",
                        delayedFlightHref,
                      )
                    }
                  >
                    Έλεγχος καθυστερημένης πτήσης
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
                  href="/el/blog/poios-pairnei-ta-chrimata-o-epivatis-i-i-etaireia"
                  className="rounded-2xl border border-slate-200 p-5 transition-colors hover:border-sky-400 hover:bg-sky-50 dark:border-slate-700 dark:hover:border-sky-700 dark:hover:bg-sky-950/20"
                >
                  <h3 className="mb-2 font-semibold text-slate-900 dark:text-white">
                    Ποιος παίρνει τα χρήματα;
                  </h3>
                  <p className="text-sm text-slate-600 dark:text-slate-300">
                    Ο οδηγός για τη διάκριση ανάμεσα σε αποζημίωση και refund.
                  </p>
                </Link>
                <a
                  href={cancelledFlightHref}
                  target="_blank"
                  rel="noopener noreferrer"
                  onClick={() =>
                    trackClaimClick(
                      "el_blog_compensation_timing_inline_cancelled_link",
                      cancelledFlightHref,
                    )
                  }
                  className="rounded-2xl border border-slate-200 p-5 transition-colors hover:border-sky-400 hover:bg-sky-50 dark:border-slate-700 dark:hover:border-sky-700 dark:hover:bg-sky-950/20"
                >
                  <h3 className="mb-2 font-semibold text-slate-900 dark:text-white">
                    Φόρμα ClaimWinger για ακυρωμένη πτήση
                  </h3>
                  <p className="text-sm text-slate-600 dark:text-slate-300">
                    Αν η υπόθεση αφορά ακύρωση, εδώ μπορείτε να ξεκινήσετε τον έλεγχο.
                  </p>
                </a>
                <a
                  href={delayedFlightHref}
                  target="_blank"
                  rel="noopener noreferrer"
                  onClick={() =>
                    trackClaimClick(
                      "el_blog_compensation_timing_inline_delayed_link",
                      delayedFlightHref,
                    )
                  }
                  className="rounded-2xl border border-slate-200 p-5 transition-colors hover:border-sky-400 hover:bg-sky-50 dark:border-slate-700 dark:hover:border-sky-700 dark:hover:bg-sky-950/20"
                >
                  <h3 className="mb-2 font-semibold text-slate-900 dark:text-white">
                    Φόρμα ClaimWinger για καθυστερημένη πτήση
                  </h3>
                  <p className="text-sm text-slate-600 dark:text-slate-300">
                    Αν το πρόβλημα ήταν μεγάλη καθυστέρηση, μπορείτε να ξεκινήσετε από εδώ.
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
