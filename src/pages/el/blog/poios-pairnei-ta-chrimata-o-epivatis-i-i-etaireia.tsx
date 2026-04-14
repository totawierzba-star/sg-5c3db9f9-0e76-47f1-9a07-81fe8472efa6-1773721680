import Link from "next/link";
import {
  AlertCircle,
  ArrowRight,
  Briefcase,
  CheckCircle2,
  Clock,
  FileText,
  Receipt,
  UserRound,
} from "lucide-react";

import { ClaimWingerElSection } from "@/components/ClaimWingerElSection";
import { LayoutEl } from "@/components/LayoutEl";
import { SEO } from "@/components/SEO";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { pushClaimWingerEvent } from "@/lib/claimwingerTracking";

const articleUrl =
  "https://problemlot.com/el/blog/poios-pairnei-ta-chrimata-o-epivatis-i-i-etaireia";
const claimWingerHomeHref =
  "https://claimwinger.com/el?utm_source=problemlot-el&utm_medium=article_link&utm_campaign=who_gets_the_money";
const delayedFlightHref =
  "https://claimwinger.com/el/kathysterimeni-ptisi?utm_source=problemlot-el&utm_medium=article_link&utm_campaign=who_gets_the_money";
const cancelledFlightHref =
  "https://claimwinger.com/el/akyromeni-ptisi?utm_source=problemlot-el&utm_medium=article_link&utm_campaign=who_gets_the_money";

const faqItems = [
  {
    question: "Ποιος παίρνει τα χρήματα, ο επιβάτης ή η εταιρεία;",
    answer:
      "Στην αποζημίωση του EU261, η βασική λογική είναι ότι το δικαίωμα συνδέεται με τον επιβάτη που υπέστη το πρόβλημα της πτήσης. Όμως το refund της τιμής του εισιτηρίου είναι διαφορετικό ζήτημα και συχνά συνδέεται περισσότερο με το ποιος πλήρωσε το ταξίδι.",
  },
  {
    question: "Αν το εισιτήριο το πλήρωσε ο εργοδότης, χάνω την αποζημίωση;",
    answer:
      "Όχι απαραίτητα. Το ότι η εταιρεία πλήρωσε το εισιτήριο δεν σημαίνει αυτόματα ότι χάνεται το προσωπικό δικαίωμα του επιβάτη στην αποζημίωση, αλλά το θέμα της refund τιμής του εισιτηρίου πρέπει να διαβαστεί ξεχωριστά.",
  },
  {
    question: "Το refund του εισιτηρίου και η αποζημίωση πάνε πάντα στο ίδιο πρόσωπο;",
    answer:
      "Όχι. Η αποζημίωση και το refund είναι δύο διαφορετικά πράγματα. Η αποζημίωση συνδέεται περισσότερο με τον επιβάτη, ενώ το refund μπορεί να ακολουθεί διαφορετική λογική ανάλογα με το ποιος αγόρασε και πλήρωσε το εισιτήριο.",
  },
  {
    question: "Τι γίνεται στα επαγγελματικά ταξίδια;",
    answer:
      "Στα επαγγελματικά ταξίδια συνήθως χρειάζεται να ξεχωρίσετε καθαρά το προσωπικό δικαίωμα αποζημίωσης από τις εσωτερικές σχέσεις σας με τον εργοδότη ή την ταξιδιωτική πολιτική της εταιρείας.",
  },
];

function trackClaimClick(placement: string, destination: string) {
  pushClaimWingerEvent("claimwinger_cta_click", {
    locale: "el",
    placement,
    destination,
  });
}

export default function WhoGetsTheMoneyElPage() {
  return (
    <LayoutEl>
      <SEO
        title="Ποιος παίρνει τα χρήματα, ο επιβάτης ή η εταιρεία;"
        description="Δείτε ποιος παίρνει τα χρήματα σε μια υπόθεση αποζημίωσης πτήσης, γιατί η αποζημίωση και το refund δεν είναι το ίδιο πράγμα και τι αλλάζει όταν το ταξίδι ήταν επαγγελματικό."
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
            headline: "Ποιος παίρνει τα χρήματα, ο επιβάτης ή η εταιρεία;",
            description:
              "Εξηγούμε τη βασική διαφορά ανάμεσα στην αποζημίωση του επιβάτη και στην επιστροφή χρημάτων για το εισιτήριο, ειδικά όταν το ταξίδι ήταν επαγγελματικό.",
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
                name: "Ποιος παίρνει τα χρήματα, ο επιβάτης ή η εταιρεία;",
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
            <span>Ποιος παίρνει τα χρήματα, ο επιβάτης ή η εταιρεία;</span>
          </div>

          <header className="mb-10">
            <div className="mb-4 inline-flex items-center gap-2 rounded-full bg-sky-100 px-4 py-2 text-sm font-medium text-sky-700 dark:bg-sky-900/30 dark:text-sky-300">
              Οδηγός για compensation vs refund
            </div>
            <h1 className="mb-5 text-4xl font-bold tracking-tight text-slate-900 dark:text-white md:text-5xl">
              Ποιος παίρνει τα χρήματα, ο επιβάτης ή η εταιρεία;
            </h1>
            <p className="max-w-3xl text-xl leading-8 text-slate-600 dark:text-slate-300">
              Η πιο σωστή σύντομη απάντηση είναι: <strong>εξαρτάται για ποια χρήματα μιλάμε</strong>.
              Η αποζημίωση του EU261 και η επιστροφή της τιμής του εισιτηρίου δεν είναι το ίδιο
              πράγμα. Αν δεν ξεχωρίσουμε αυτά τα δύο, είναι πολύ εύκολο να φτάσουμε σε λάθος
              συμπέρασμα, ειδικά στα επαγγελματικά ταξίδια.
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
                  Η <strong>αποζημίωση</strong> του EU261 συνδέεται συνήθως με τον επιβάτη που
                  υπέστη το πρόβλημα της πτήσης.
                </p>
                <p>
                  Το <strong>refund</strong> της τιμής του εισιτηρίου είναι άλλο ζήτημα και μπορεί να
                  σχετίζεται περισσότερο με το ποιος πλήρωσε την κράτηση.
                </p>
                <p>
                  Άρα, σε ένα επαγγελματικό ταξίδι δεν είναι σωστό να αντιμετωπίζουμε αυτόματα την
                  αποζημίωση και την αξία του εισιτηρίου σαν το ίδιο οικονομικό δικαίωμα.
                </p>
              </div>
            </Card>
          </section>

          <ClaimWingerElSection
            className="mb-12"
            title="Ελέγξτε την υπόθεσή σας με το ClaimWinger, ακόμη κι αν το ταξίδι ήταν επαγγελματικό"
            description="Αν το εισιτήριο πληρώθηκε από εργοδότη ή εταιρεία και δεν είναι σαφές ποιος δικαιούται τι, το ClaimWinger Ελλάδα μπορεί να βοηθήσει σε μια πρώτη πρακτική εκτίμηση της υπόθεσης."
            ctaHref="https://claimwinger.com/el?utm_source=problemlot-el&utm_medium=embedded_cta&utm_campaign=who_gets_the_money"
            ctaLabel="Έλεγχος με το ClaimWinger"
            loadingLabel="Φορτώνεται η φόρμα ClaimWinger..."
            loadingDescription="Σε λίγο θα εμφανιστεί η ελληνική φόρμα για έλεγχο της υπόθεσής σας."
            placement="el_blog_who_gets_the_money_embed"
          />

          <section className="mb-12">
            <h2 className="mb-6 text-3xl font-bold text-slate-900 dark:text-white">
              1. Η βασική διάκριση: αποζημίωση δεν είναι το ίδιο με refund
            </h2>
            <div className="grid gap-4 md:grid-cols-2">
              <Card className="p-6">
                <div className="mb-3 flex items-center gap-2 text-slate-900 dark:text-white">
                  <UserRound className="h-5 w-5 text-sky-600" />
                  <h3 className="text-xl font-semibold">Αποζημίωση</h3>
                </div>
                <p className="text-sm leading-6 text-slate-600 dark:text-slate-300">
                  Η λογική της αποζημίωσης του EU261 συνδέεται με τον επιβάτη που υπέστη την
                  αναστάτωση της καθυστέρησης, της ακύρωσης ή της άρνησης επιβίβασης.
                </p>
              </Card>
              <Card className="p-6">
                <div className="mb-3 flex items-center gap-2 text-slate-900 dark:text-white">
                  <Receipt className="h-5 w-5 text-sky-600" />
                  <h3 className="text-xl font-semibold">Refund</h3>
                </div>
                <p className="text-sm leading-6 text-slate-600 dark:text-slate-300">
                  Η επιστροφή της τιμής του εισιτηρίου έχει πιο άμεση σχέση με το οικονομικό μέρος
                  της αγοράς και συχνά χρειάζεται να εξεταστεί με βάση το ποιος πλήρωσε πράγματι το
                  ταξίδι.
                </p>
              </Card>
            </div>
          </section>

          <section className="mb-12">
            <h2 className="mb-6 text-3xl font-bold text-slate-900 dark:text-white">
              2. Τι αλλάζει όταν το εισιτήριο το πλήρωσε η εταιρεία
            </h2>
            <div className="space-y-4 text-base leading-7 text-slate-700 dark:text-slate-300">
              <p>
                Σε επαγγελματικά ταξίδια, το συνηθισμένο μπέρδεμα είναι ότι ο εργοδότης ή το
                λογιστήριο πλήρωσε την πτήση, άρα κάποιοι υποθέτουν ότι όλα τα σχετικά ποσά πρέπει
                να πάνε αυτόματα στην εταιρεία. Αυτή η λογική είναι υπερβολικά απλή.
              </p>
              <p>
                Το ότι η εταιρεία κάλυψε το εισιτήριο δεν σημαίνει από μόνο του ότι εξαφανίζεται το
                προσωπικό δικαίωμα του επιβάτη στην αποζημίωση για το disruption της πτήσης. Όμως το
                refund του εισιτηρίου παραμένει ξεχωριστό ερώτημα.
              </p>
            </div>
          </section>

          <section className="mb-12">
            <h2 className="mb-6 text-3xl font-bold text-slate-900 dark:text-white">
              3. Πού μπερδεύονται πιο συχνά οι επιβάτες
            </h2>
            <div className="grid gap-4 md:grid-cols-2">
              {[
                "όταν εξισώνουν το refund με την αποζημίωση",
                "όταν θεωρούν ότι όποιος πλήρωσε το εισιτήριο παίρνει αυτόματα και την αποζημίωση",
                "όταν υπάρχει εταιρική ταξιδιωτική πολιτική αλλά όχι σαφής νομική διάκριση",
                "όταν η πτήση έγινε για δουλειά και μπαίνουν μαζί λογιστικά και νομικά ζητήματα",
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
              4. Η πιο πρακτική προσέγγιση στα επαγγελματικά ταξίδια
            </h2>
            <div className="grid gap-4 md:grid-cols-2">
              <Card className="p-6">
                <div className="mb-3 flex items-center gap-2 text-slate-900 dark:text-white">
                  <Briefcase className="h-5 w-5 text-sky-600" />
                  <h3 className="text-xl font-semibold">Διαχωρισμός ρόλων</h3>
                </div>
                <p className="text-sm leading-6 text-slate-600 dark:text-slate-300">
                  Πρώτα ξεχωρίστε ποιο ζήτημα αφορά τον επιβάτη ως πρόσωπο και ποιο αφορά την εταιρεία
                  ως αγοραστή του εισιτηρίου. Αυτό λύνει μεγάλο μέρος της σύγχυσης.
                </p>
              </Card>
              <Card className="p-6">
                <div className="mb-3 flex items-center gap-2 text-slate-900 dark:text-white">
                  <CheckCircle2 className="h-5 w-5 text-sky-600" />
                  <h3 className="text-xl font-semibold">Έλεγχος εσωτερικής πολιτικής</h3>
                </div>
                <p className="text-sm leading-6 text-slate-600 dark:text-slate-300">
                  Ακόμη κι αν η νομική βάση της αποζημίωσης γέρνει προς τον επιβάτη, μπορεί να
                  υπάρχει εσωτερικός κανόνας του εργοδότη για το πώς χειρίζονται τέτοιες πληρωμές.
                </p>
              </Card>
            </div>
          </section>

          <section className="mb-12">
            <Card className="border-sky-200 bg-sky-50 p-8 dark:border-sky-900 dark:bg-sky-950/20">
              <h2 className="mb-4 text-2xl font-bold text-slate-900 dark:text-white">
                Θέλετε μια πρακτική εκτίμηση για το ποια γραμμή διεκδίκησης έχει νόημα;
              </h2>
              <p className="mb-6 text-base leading-7 text-slate-700 dark:text-slate-300">
                Αν το ταξίδι ήταν επαγγελματικό και δεν είναι σαφές ποιος δικαιούται refund ή
                αποζημίωση, το πιο χρήσιμο πρώτο βήμα είναι να ξεχωρίσετε την υπόθεση του επιβάτη
                από το οικονομικό κομμάτι της κράτησης.
              </p>
              <div className="flex flex-wrap gap-3">
                <Button asChild size="lg" className="bg-sky-600 hover:bg-sky-700">
                  <a
                    href={claimWingerHomeHref}
                    target="_blank"
                    rel="noopener noreferrer"
                    onClick={() =>
                      trackClaimClick(
                        "el_blog_who_gets_the_money_home_button",
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
                        "el_blog_who_gets_the_money_cancelled_button",
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
                  href="/el/blog/posa-chrimata-pairno-gia-akyromeni-ptisi"
                  className="rounded-2xl border border-slate-200 p-5 transition-colors hover:border-sky-400 hover:bg-sky-50 dark:border-slate-700 dark:hover:border-sky-700 dark:hover:bg-sky-950/20"
                >
                  <h3 className="mb-2 font-semibold text-slate-900 dark:text-white">
                    Πόσα χρήματα παίρνω για ακυρωμένη πτήση;
                  </h3>
                  <p className="text-sm text-slate-600 dark:text-slate-300">
                    Ο βασικός οδηγός για αποζημίωση, επιστροφή χρημάτων και rerouting σε ακυρωμένη πτήση.
                  </p>
                </Link>
                <a
                  href={cancelledFlightHref}
                  target="_blank"
                  rel="noopener noreferrer"
                  onClick={() =>
                    trackClaimClick(
                      "el_blog_who_gets_the_money_inline_cancelled_link",
                      cancelledFlightHref,
                    )
                  }
                  className="rounded-2xl border border-slate-200 p-5 transition-colors hover:border-sky-400 hover:bg-sky-50 dark:border-slate-700 dark:hover:border-sky-700 dark:hover:bg-sky-950/20"
                >
                  <h3 className="mb-2 font-semibold text-slate-900 dark:text-white">
                    Φόρμα ClaimWinger για ακυρωμένη πτήση
                  </h3>
                  <p className="text-sm text-slate-600 dark:text-slate-300">
                    Αν η υπόθεση αφορά ακύρωση, εδώ μπορείτε να περάσετε άμεσα στον έλεγχο.
                  </p>
                </a>
                <a
                  href={delayedFlightHref}
                  target="_blank"
                  rel="noopener noreferrer"
                  onClick={() =>
                    trackClaimClick(
                      "el_blog_who_gets_the_money_inline_delayed_link",
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
