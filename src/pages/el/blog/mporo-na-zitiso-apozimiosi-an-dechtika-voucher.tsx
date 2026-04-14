import Link from "next/link";
import {
  AlertCircle,
  ArrowRight,
  CheckCircle2,
  Clock,
  FileText,
  Gift,
  Receipt,
  Wallet,
} from "lucide-react";

import { ClaimWingerElSection } from "@/components/ClaimWingerElSection";
import { LayoutEl } from "@/components/LayoutEl";
import { SEO } from "@/components/SEO";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { pushClaimWingerEvent } from "@/lib/claimwingerTracking";

const articleUrl =
  "https://problemlot.com/el/blog/mporo-na-zitiso-apozimiosi-an-dechtika-voucher";
const claimWingerHomeHref =
  "https://claimwinger.com/el?utm_source=problemlot-el&utm_medium=article_link&utm_campaign=voucher_compensation";
const delayedFlightHref =
  "https://claimwinger.com/el/kathysterimeni-ptisi?utm_source=problemlot-el&utm_medium=article_link&utm_campaign=voucher_compensation";
const cancelledFlightHref =
  "https://claimwinger.com/el/akyromeni-ptisi?utm_source=problemlot-el&utm_medium=article_link&utm_campaign=voucher_compensation";

const faqItems = [
  {
    question: "Μπορώ να ζητήσω αποζημίωση αν δέχτηκα voucher;",
    answer:
      "Συχνά ναι, αλλά εξαρτάται από το τι ακριβώς ήταν το voucher. Άλλο voucher ως επιστροφή της τιμής του εισιτηρίου, άλλο voucher ως μορφή πληρωμής της ίδιας της αποζημίωσης και άλλο voucher ως απλή παροχή βοήθειας ή goodwill από την αεροπορική.",
  },
  {
    question: "Αν πήρα voucher αντί για refund, χάνω την αποζημίωση;",
    answer:
      "Όχι απαραίτητα. Το ότι αποδεχτήκατε voucher για την τιμή του εισιτηρίου δεν σημαίνει από μόνο του ότι παραιτηθήκατε από κάθε πιθανή αποζημίωση, εκτός αν η συμφωνία ήταν πολύ πιο ευρεία και σαφής.",
  },
  {
    question: "Μπορεί η αεροπορική να με υποχρεώσει να πάρω voucher;",
    answer:
      "Όχι. Η ευρωπαϊκή προσέγγιση είναι ότι voucher μπορεί να δοθεί όταν ο επιβάτης το επιλέξει ρητά. Η αεροπορική πρέπει να ξεχωρίζει καθαρά τις επιλογές μεταξύ refund σε χρήμα, rerouting και voucher αν το προσφέρει.",
  },
  {
    question: "Αν η αποζημίωση πληρώθηκε ήδη σε voucher, μπορώ να ζητήσω χρήματα;",
    answer:
      "Εξαρτάται από τη συμφωνία που έγινε. Για τη χρηματική αποζημίωση του EU261, η καταβολή σε voucher συνδέεται με τη ρητή συναίνεση του επιβάτη. Γι’ αυτό το περιεχόμενο της αποδοχής έχει μεγάλη σημασία.",
  },
];

function trackClaimClick(placement: string, destination: string) {
  pushClaimWingerEvent("claimwinger_cta_click", {
    locale: "el",
    placement,
    destination,
  });
}

export default function VoucherCompensationElPage() {
  return (
    <LayoutEl>
      <SEO
        title="Μπορώ να ζητήσω αποζημίωση αν δέχτηκα voucher;"
        description="Δείτε αν η αποδοχή voucher κλείνει ή όχι το θέμα της αποζημίωσης, πότε μιλάμε για refund σε voucher, πότε για compensation σε voucher και πότε η αεροπορική δεν μπορεί να επιβάλει voucher."
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
            headline: "Μπορώ να ζητήσω αποζημίωση αν δέχτηκα voucher;",
            description:
              "Εξηγούμε τι αλλάζει όταν ο επιβάτης δέχεται voucher και γιατί πρέπει να ξεχωρίσουμε το refund, την αποζημίωση και τις πρόσθετες παροχές της αεροπορικής.",
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
                name: "Μπορώ να ζητήσω αποζημίωση αν δέχτηκα voucher;",
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
            <span>Μπορώ να ζητήσω αποζημίωση αν δέχτηκα voucher;</span>
          </div>

          <header className="mb-10">
            <div className="mb-4 inline-flex items-center gap-2 rounded-full bg-sky-100 px-4 py-2 text-sm font-medium text-sky-700 dark:bg-sky-900/30 dark:text-sky-300">
              Οδηγός για voucher και δικαιώματα επιβάτη
            </div>
            <h1 className="mb-5 text-4xl font-bold tracking-tight text-slate-900 dark:text-white md:text-5xl">
              Μπορώ να ζητήσω αποζημίωση αν δέχτηκα voucher;
            </h1>
            <p className="max-w-3xl text-xl leading-8 text-slate-600 dark:text-slate-300">
              Συχνά <strong>ναι</strong>, αλλά η σωστή απάντηση εξαρτάται από ένα πιο ουσιαστικό
              ερώτημα: <strong>τι ακριβώς ήταν το voucher που δεχτήκατε;</strong> Αν δεν ξεχωρίσουμε
              το refund, τη χρηματική αποζημίωση και τις γενικές παροχές της αεροπορικής, είναι πολύ
              εύκολο να βγάλουμε λάθος συμπέρασμα.
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
                  Η αποδοχή <strong>voucher</strong> δεν σημαίνει αυτόματα ότι χάνετε κάθε δικαίωμα
                  αποζημίωσης.
                </p>
                <p>
                  Αν άλλο πράγμα ήταν η <strong>επιστροφή της αξίας του εισιτηρίου</strong> και άλλο
                  η <strong>χρηματική αποζημίωση</strong>, πρέπει να τα εξετάσετε χωριστά.
                </p>
                <p>
                  Κρίσιμο είναι να δούμε αν το voucher ήταν επιλογή για <strong>refund</strong>, αν
                  δόθηκε ως μορφή πληρωμής της <strong>compensation</strong> ή αν ήταν απλώς μια
                  επιπλέον παροχή από την αεροπορική.
                </p>
              </div>
            </Card>
          </section>

          <ClaimWingerElSection
            className="mb-12"
            title="Ελέγξτε την υπόθεσή σας με το ClaimWinger, ακόμη κι αν δεχτήκατε voucher"
            description="Αν έχετε ήδη δεχτεί voucher και δεν είστε βέβαιοι αν έκλεισε ή όχι το θέμα της αποζημίωσης, το ClaimWinger Ελλάδα μπορεί να βοηθήσει σε μια πρώτη πρακτική αξιολόγηση της υπόθεσής σας."
            ctaHref="https://claimwinger.com/el?utm_source=problemlot-el&utm_medium=embedded_cta&utm_campaign=voucher_compensation"
            ctaLabel="Έλεγχος με το ClaimWinger"
            loadingLabel="Φορτώνεται η φόρμα ClaimWinger..."
            loadingDescription="Σε λίγο θα εμφανιστεί η ελληνική φόρμα για έλεγχο της υπόθεσής σας."
            placement="el_blog_voucher_compensation_embed"
          />

          <section className="mb-12">
            <h2 className="mb-6 text-3xl font-bold text-slate-900 dark:text-white">
              1. Πρώτα ξεχωρίστε τι ακριβώς ήταν το voucher
            </h2>
            <div className="grid gap-4 md:grid-cols-3">
              <Card className="p-6">
                <div className="mb-3 flex items-center gap-2 text-slate-900 dark:text-white">
                  <Wallet className="h-5 w-5 text-sky-600" />
                  <h3 className="text-lg font-semibold">Voucher αντί για refund</h3>
                </div>
                <p className="text-sm leading-6 text-slate-600 dark:text-slate-300">
                  Εδώ το ερώτημα είναι αν το voucher αντικατέστησε την επιστροφή χρημάτων για το
                  εισιτήριο. Αυτό δεν σημαίνει αυτόματα ότι χάθηκε κάθε ξεχωριστή συζήτηση για
                  αποζημίωση.
                </p>
              </Card>
              <Card className="p-6">
                <div className="mb-3 flex items-center gap-2 text-slate-900 dark:text-white">
                  <Gift className="h-5 w-5 text-sky-600" />
                  <h3 className="text-lg font-semibold">Voucher ως compensation</h3>
                </div>
                <p className="text-sm leading-6 text-slate-600 dark:text-slate-300">
                  Αν το voucher δόθηκε ως ίδια η μορφή πληρωμής της αποζημίωσης, τότε πρέπει να
                  κοιτάξουμε προσεκτικά τι συμφωνήθηκε και αν υπήρξε ρητή συναίνεση.
                </p>
              </Card>
              <Card className="p-6">
                <div className="mb-3 flex items-center gap-2 text-slate-900 dark:text-white">
                  <Receipt className="h-5 w-5 text-sky-600" />
                  <h3 className="text-lg font-semibold">Voucher goodwill ή βοήθειας</h3>
                </div>
                <p className="text-sm leading-6 text-slate-600 dark:text-slate-300">
                  Κάποιες φορές το voucher είναι απλώς μια πρόσθετη παροχή ή μια εμπορική κίνηση της
                  αεροπορικής. Αυτό συνήθως δεν λύνει από μόνο του το νομικό ζήτημα της αποζημίωσης.
                </p>
              </Card>
            </div>
          </section>

          <section className="mb-12">
            <h2 className="mb-6 text-3xl font-bold text-slate-900 dark:text-white">
              2. Voucher για το εισιτήριο δεν σημαίνει πάντα τέλος της αποζημίωσης
            </h2>
            <div className="space-y-4 text-base leading-7 text-slate-700 dark:text-slate-300">
              <p>
                Αν η αεροπορική σάς έδωσε voucher ως <strong>επιστροφή της αξίας του εισιτηρίου</strong>,
                το βασικό ερώτημα είναι αν αυτή η αποδοχή αφορούσε μόνο το refund ή αν η συμφωνία
                έλεγε καθαρά και κάτι πολύ ευρύτερο.
              </p>
              <p>
                Στις περισσότερες πρακτικές περιπτώσεις, δεν είναι σωστό να θεωρούμε αυτόματα ότι ο
                επιβάτης παραιτήθηκε από κάθε δυνατή αποζημίωση μόνο και μόνο επειδή αποδέχτηκε
                voucher για την αξία του ταξιδιού.
              </p>
            </div>
          </section>

          <section className="mb-12">
            <h2 className="mb-6 text-3xl font-bold text-slate-900 dark:text-white">
              3. Η αποζημίωση του EU261 σε voucher θέλει ρητή επιλογή
            </h2>
            <div className="space-y-4 text-base leading-7 text-slate-700 dark:text-slate-300">
              <p>
                Για τη χρηματική αποζημίωση του EU261, η πληρωμή σε voucher δεν είναι κάτι που η
                αεροπορική μπορεί απλώς να επιβάλει αθόρυβα. Η λογική των επίσημων ευρωπαϊκών πηγών
                είναι ότι ο επιβάτης πρέπει να το επιλέξει ή να συμφωνήσει ρητά.
              </p>
              <p>
                Γι’ αυτό έχει μεγάλη σημασία τι ακριβώς πατήσατε, τι αποδεχτήκατε και ποιο ήταν το
                κείμενο της προσφοράς. Εδώ η λεπτομέρεια κάνει τεράστια διαφορά.
              </p>
            </div>
          </section>

          <section className="mb-12">
            <h2 className="mb-6 text-3xl font-bold text-slate-900 dark:text-white">
              4. Πότε το voucher δεν κλείνει καθόλου την υπόθεση
            </h2>
            <div className="grid gap-4 md:grid-cols-2">
              {[
                "όταν αφορούσε μόνο refund του εισιτηρίου",
                "όταν ήταν μια εμπορική παροχή ή goodwill gesture",
                "όταν η αεροπορική δεν ξεχώρισε καθαρά τις διαθέσιμες επιλογές",
                "όταν δεν υπάρχει σαφές ίχνος ότι παραιτηθήκατε από κάθε άλλη αξίωση",
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
              5. Τι πρέπει να κρατήσετε ως αποδεικτικά
            </h2>
            <div className="space-y-4 text-base leading-7 text-slate-700 dark:text-slate-300">
              <p>
                Αν η υπόθεσή σας περιλαμβάνει voucher, κρατήστε το <strong>email προσφοράς</strong>,
                το κείμενο της αποδοχής, οποιοδήποτε screenshot από το flow της αεροπορικής, την
                κράτηση της πτήσης και όποια επικοινωνία εξηγεί γιατί δόθηκε το voucher.
              </p>
              <p>
                Το πιο σημαντικό είναι να μπορούμε να απαντήσουμε καθαρά στο ερώτημα:
                <strong> voucher για ποιο πράγμα;</strong> Χωρίς αυτή τη διάκριση, είναι εύκολο να
                χαθεί η ουσία της υπόθεσης.
              </p>
            </div>
          </section>

          <section className="mb-12">
            <Card className="border-sky-200 bg-sky-50 p-8 dark:border-sky-900 dark:bg-sky-950/20">
              <h2 className="mb-4 text-2xl font-bold text-slate-900 dark:text-white">
                Δεν είστε σίγουροι αν το voucher έκλεισε την υπόθεση ή όχι;
              </h2>
              <p className="mb-6 text-base leading-7 text-slate-700 dark:text-slate-300">
                Αν έχετε ήδη αποδεχτεί voucher αλλά δεν είναι σαφές αν αφορούσε refund, compensation
                ή απλή παροχή βοήθειας, αξίζει πρώτα μια καθαρή πρακτική εκτίμηση πριν θεωρήσετε ότι
                η υπόθεση τελείωσε.
              </p>
              <div className="flex flex-wrap gap-3">
                <Button asChild size="lg" className="bg-sky-600 hover:bg-sky-700">
                  <a
                    href={claimWingerHomeHref}
                    target="_blank"
                    rel="noopener noreferrer"
                    onClick={() =>
                      trackClaimClick(
                        "el_blog_voucher_compensation_home_button",
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
                        "el_blog_voucher_compensation_cancelled_button",
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
                    Ο βασικός οδηγός για ποσά, 14 ημέρες, rerouting και refund.
                  </p>
                </Link>
                <a
                  href={cancelledFlightHref}
                  target="_blank"
                  rel="noopener noreferrer"
                  onClick={() =>
                    trackClaimClick(
                      "el_blog_voucher_compensation_inline_cancelled_link",
                      cancelledFlightHref,
                    )
                  }
                  className="rounded-2xl border border-slate-200 p-5 transition-colors hover:border-sky-400 hover:bg-sky-50 dark:border-slate-700 dark:hover:border-sky-700 dark:hover:bg-sky-950/20"
                >
                  <h3 className="mb-2 font-semibold text-slate-900 dark:text-white">
                    Φόρμα ClaimWinger για ακυρωμένη πτήση
                  </h3>
                  <p className="text-sm text-slate-600 dark:text-slate-300">
                    Γρήγορος έλεγχος αν το περιστατικό δείχνει ακόμη προς αποζημίωση.
                  </p>
                </a>
                <a
                  href={delayedFlightHref}
                  target="_blank"
                  rel="noopener noreferrer"
                  onClick={() =>
                    trackClaimClick(
                      "el_blog_voucher_compensation_inline_delayed_link",
                      delayedFlightHref,
                    )
                  }
                  className="rounded-2xl border border-slate-200 p-5 transition-colors hover:border-sky-400 hover:bg-sky-50 dark:border-slate-700 dark:hover:border-sky-700 dark:hover:bg-sky-950/20"
                >
                  <h3 className="mb-2 font-semibold text-slate-900 dark:text-white">
                    Φόρμα ClaimWinger για καθυστερημένη πτήση
                  </h3>
                  <p className="text-sm text-slate-600 dark:text-slate-300">
                    Αν η υπόθεση αφορά μεγάλη καθυστέρηση, εδώ είναι το σωστό επόμενο βήμα.
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
