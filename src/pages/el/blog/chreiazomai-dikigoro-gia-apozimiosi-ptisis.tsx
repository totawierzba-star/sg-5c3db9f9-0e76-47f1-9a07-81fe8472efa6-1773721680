import Link from "next/link";
import {
  AlertCircle,
  ArrowRight,
  Briefcase,
  CheckCircle2,
  Clock,
  FileText,
  Scale,
  ShieldCheck,
} from "lucide-react";

import { ClaimWingerElSection } from "@/components/ClaimWingerElSection";
import { LayoutEl } from "@/components/LayoutEl";
import { SEO } from "@/components/SEO";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { pushClaimWingerEvent } from "@/lib/claimwingerTracking";

const articleUrl =
  "https://problemlot.com/el/blog/chreiazomai-dikigoro-gia-apozimiosi-ptisis";
const claimWingerHomeHref =
  "https://claimwinger.com/el?utm_source=problemlot-el&utm_medium=article_link&utm_campaign=need_lawyer";
const delayedFlightHref =
  "https://claimwinger.com/el/kathysterimeni-ptisi?utm_source=problemlot-el&utm_medium=article_link&utm_campaign=need_lawyer";
const cancelledFlightHref =
  "https://claimwinger.com/el/akyromeni-ptisi?utm_source=problemlot-el&utm_medium=article_link&utm_campaign=need_lawyer";

const faqItems = [
  {
    question: "Χρειάζομαι δικηγόρο για αποζημίωση πτήσης;",
    answer:
      "Συνήθως όχι στην αρχή. Σε πολλές υποθέσεις αρκεί μια σωστή αρχική καταγγελία προς την αεροπορική. Νομική ή εξειδικευμένη υποστήριξη αρχίζει να έχει περισσότερο νόημα όταν η υπόθεση απορριφθεί, κολλήσει ή γίνει πιο σύνθετη.",
  },
  {
    question: "Πότε αρχίζει να έχει νόημα η εξωτερική υποστήριξη;",
    answer:
      "Όταν η αεροπορική αρνείται την ευθύνη, δεν απαντά, επικαλείται αμφισβητούμενες έκτακτες περιστάσεις ή όταν η υπόθεση έχει πιο περίπλοκη δομή, όπως ανταποκρίσεις, rerouting ή μακρά κλιμάκωση.",
  },
  {
    question: "Μπορώ να ξεκινήσω μόνος μου και μετά να ζητήσω βοήθεια;",
    answer:
      "Ναι, συχνά αυτή είναι μια λογική προσέγγιση. Πολλοί επιβάτες ξεκινούν με απευθείας αίτημα και εξετάζουν εξωτερική βοήθεια μόνο αν η υπόθεση αρχίσει να μπλέκει.",
  },
  {
    question: "Τι πρέπει να ξέρω για το ClaimWinger;",
    answer:
      "Το ClaimWinger λειτουργεί με προμήθεια 30% ανεξάρτητα από το αν η υπόθεση λυθεί εξωδικαστικά ή χρειαστεί πιο βαριά νομική πορεία. Αυτό είναι σημαντικό να το γνωρίζετε από την αρχή για να αξιολογήσετε αν σας συμφέρει σε σχέση με μια αυτοτελή διεκδίκηση.",
  },
];

function trackClaimClick(placement: string, destination: string) {
  pushClaimWingerEvent("claimwinger_cta_click", {
    locale: "el",
    placement,
    destination,
  });
}

export default function NeedLawyerElPage() {
  return (
    <LayoutEl>
      <SEO
        title="Χρειάζομαι δικηγόρο για αποζημίωση πτήσης;"
        description="Μάθετε αν χρειάζεστε δικηγόρο για αποζημίωση πτήσης, πότε αρκεί μια απλή καταγγελία και πότε η υπόθεση γίνεται αρκετά δύσκολη ώστε να αξίζει εξειδικευμένη υποστήριξη."
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
            headline: "Χρειάζομαι δικηγόρο για αποζημίωση πτήσης;",
            description:
              "Εξηγούμε πότε ένας επιβάτης μπορεί να κινηθεί μόνος του και πότε αρχίζει να έχει νόημα η εξωτερική ή νομική υποστήριξη σε μια υπόθεση αποζημίωσης πτήσης.",
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
                name: "Χρειάζομαι δικηγόρο για αποζημίωση πτήσης;",
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
            <span>Χρειάζομαι δικηγόρο για αποζημίωση πτήσης;</span>
          </div>

          <header className="mb-10">
            <div className="mb-4 inline-flex items-center gap-2 rounded-full bg-sky-100 px-4 py-2 text-sm font-medium text-sky-700 dark:bg-sky-900/30 dark:text-sky-300">
              Οδηγός για προσωπική διεκδίκηση και εξωτερική υποστήριξη
            </div>
            <h1 className="mb-5 text-4xl font-bold tracking-tight text-slate-900 dark:text-white md:text-5xl">
              Χρειάζομαι δικηγόρο για αποζημίωση πτήσης;
            </h1>
            <p className="max-w-3xl text-xl leading-8 text-slate-600 dark:text-slate-300">
              Η σύντομη απάντηση είναι ότι <strong>συνήθως όχι στην αρχή</strong>. Σε πολλές
              υποθέσεις αρκεί μια σωστή αρχική καταγγελία προς την αεροπορική. Το ερώτημα για
              δικηγόρο ή άλλη εξειδικευμένη βοήθεια γίνεται πιο σοβαρό όταν η υπόθεση αρχίζει να
              κολλά, να απορρίπτεται ή να αποκτά πιο σύνθετη δομή.
            </p>

            <div className="mt-6 flex flex-wrap gap-4 text-sm text-slate-600 dark:text-slate-400">
              <div className="flex items-center gap-2">
                <Clock className="h-4 w-4" />
                <span>Ενημέρωση: 13 Απριλίου 2026</span>
              </div>
              <div className="flex items-center gap-2">
                <FileText className="h-4 w-4" />
                <span>Χρόνος ανάγνωσης: 7 λεπτά</span>
              </div>
            </div>
          </header>

          <section className="mb-10">
            <Card className="border-sky-200 bg-gradient-to-br from-sky-600 to-indigo-700 p-8 text-white shadow-xl dark:border-sky-800">
              <h2 className="mb-4 text-2xl font-bold">Σύντομη απάντηση</h2>
              <div className="space-y-3 text-base leading-7 text-sky-50">
                <p>
                  Σε πολλές υποθέσεις δεν χρειάζεστε <strong>δικηγόρο από την πρώτη μέρα</strong>.
                </p>
                <p>
                  Το σωστό πρώτο βήμα είναι συνήθως μια απευθείας, καλά στημένη καταγγελία προς την
                  αεροπορική.
                </p>
                <p>
                  Εξωτερική ή νομική υποστήριξη αρχίζει να έχει περισσότερο νόημα όταν η αεροπορική
                  αρνείται την ευθύνη, δεν απαντά ή όταν η υπόθεση γίνεται πιο δύσκολη.
                </p>
              </div>
            </Card>
          </section>

          <ClaimWingerElSection
            className="mb-12"
            title="Δείτε αν η υπόθεσή σας μοιάζει απλή ή αν χρειάζεται πιο δυνατή υποστήριξη"
            description="Αν δεν είστε σίγουροι αν αρκεί μια απλή προσωπική διεκδίκηση ή αν η υπόθεσή σας δείχνει ήδη πιο δύσκολη, το ClaimWinger Ελλάδα μπορεί να βοηθήσει σε μια πρώτη πρακτική εκτίμηση."
            ctaHref="https://claimwinger.com/el?utm_source=problemlot-el&utm_medium=embedded_cta&utm_campaign=need_lawyer"
            ctaLabel="Έλεγχος με το ClaimWinger"
            loadingLabel="Φορτώνεται η φόρμα ClaimWinger..."
            loadingDescription="Σε λίγο θα εμφανιστεί η ελληνική φόρμα για έλεγχο της υπόθεσής σας."
            placement="el_blog_need_lawyer_embed"
          />

          <section className="mb-12">
            <h2 className="mb-6 text-3xl font-bold text-slate-900 dark:text-white">
              1. Πότε δεν χρειάζεστε συνήθως δικηγόρο
            </h2>
            <div className="grid gap-4 md:grid-cols-2">
              {[
                "όταν η υπόθεση είναι απλή και καλά τεκμηριωμένη",
                "όταν η αεροπορική δεν αμφισβητεί σοβαρά το περιστατικό",
                "όταν μπορείτε να στείλετε μόνοι σας ένα καθαρό αρχικό αίτημα",
                "όταν δεν υπάρχει ακόμη απόρριψη ή παρατεταμένη σιωπή",
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
              2. Πότε η υπόθεση αρχίζει να γίνεται πιο δύσκολη
            </h2>
            <div className="grid gap-4 md:grid-cols-2">
              <Card className="p-6">
                <div className="mb-3 flex items-center gap-2 text-slate-900 dark:text-white">
                  <AlertCircle className="h-5 w-5 text-sky-600" />
                  <h3 className="text-xl font-semibold">Απόρριψη ή σιωπή</h3>
                </div>
                <p className="text-sm leading-6 text-slate-600 dark:text-slate-300">
                  Αν η αεροπορική απορρίψει το αίτημα ή δεν απαντά, η υπόθεση παύει να είναι απλό
                  form submission και αρχίζει να ζητά πιο στρατηγική κίνηση.
                </p>
              </Card>
              <Card className="p-6">
                <div className="mb-3 flex items-center gap-2 text-slate-900 dark:text-white">
                  <Scale className="h-5 w-5 text-sky-600" />
                  <h3 className="text-xl font-semibold">Αμφισβητούμενη ευθύνη</h3>
                </div>
                <p className="text-sm leading-6 text-slate-600 dark:text-slate-300">
                  Όταν η αεροπορική επικαλείται έκτακτες περιστάσεις, μπλοκάρει το αίτημα ή η υπόθεση
                  έχει πιο σύνθετη δομή, η εξωτερική βοήθεια αρχίζει να έχει περισσότερο νόημα.
                </p>
              </Card>
            </div>
          </section>

          <section className="mb-12">
            <h2 className="mb-6 text-3xl font-bold text-slate-900 dark:text-white">
              3. Τι είδους υποστήριξη μπορεί να έχει νόημα
            </h2>
            <div className="grid gap-4 md:grid-cols-2">
              <Card className="p-6">
                <div className="mb-3 flex items-center gap-2 text-slate-900 dark:text-white">
                  <Briefcase className="h-5 w-5 text-sky-600" />
                  <h3 className="text-xl font-semibold">Εξειδικευμένη υπηρεσία</h3>
                </div>
                <p className="text-sm leading-6 text-slate-600 dark:text-slate-300">
                  Σε πολλές περιπτώσεις δεν χρειάζεστε προσωπικό δικηγόρο από την πρώτη στιγμή, αλλά
                  μια υπηρεσία που ξέρει να οδηγήσει την υπόθεση στην επόμενη φάση.
                </p>
              </Card>
              <Card className="p-6">
                <div className="mb-3 flex items-center gap-2 text-slate-900 dark:text-white">
                  <ShieldCheck className="h-5 w-5 text-sky-600" />
                  <h3 className="text-xl font-semibold">Σαφές κόστος</h3>
                </div>
                <p className="text-sm leading-6 text-slate-600 dark:text-slate-300">
                  Το βασικό είναι να ξέρετε από πριν το μοντέλο αμοιβής και τι καλύπτει. Στο
                  ClaimWinger η προμήθεια είναι 30% είτε η υπόθεση λυθεί εξωδικαστικά είτε περάσει
                  σε πιο βαριά νομική πορεία.
                </p>
              </Card>
            </div>
          </section>

          <section className="mb-12">
            <Card className="border-sky-200 bg-sky-50 p-8 dark:border-sky-900 dark:bg-sky-950/20">
              <h2 className="mb-4 text-2xl font-bold text-slate-900 dark:text-white">
                Δεν είστε σίγουροι αν αξίζει να κινηθείτε μόνοι σας ή με βοήθεια;
              </h2>
              <p className="mb-6 text-base leading-7 text-slate-700 dark:text-slate-300">
                Αν η υπόθεσή σας έχει ήδη δείξει σημάδια δυσκολίας, η πιο χρήσιμη κίνηση είναι να
                αξιολογήσετε αν παραμένει απλή ή αν έχει περάσει σε σημείο όπου η εξωτερική
                υποστήριξη μπορεί να εξοικονομήσει χρόνο και να βελτιώσει τη θέση σας.
              </p>
              <div className="flex flex-wrap gap-3">
                <Button asChild size="lg" className="bg-sky-600 hover:bg-sky-700">
                  <a
                    href={claimWingerHomeHref}
                    target="_blank"
                    rel="noopener noreferrer"
                    onClick={() =>
                      trackClaimClick("el_blog_need_lawyer_home_button", claimWingerHomeHref)
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
                        "el_blog_need_lawyer_cancelled_button",
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
                  href="/el/blog/ti-na-kano-an-i-aeroporiki-aporripsei-to-aitima"
                  className="rounded-2xl border border-slate-200 p-5 transition-colors hover:border-sky-400 hover:bg-sky-50 dark:border-slate-700 dark:hover:border-sky-700 dark:hover:bg-sky-950/20"
                >
                  <h3 className="mb-2 font-semibold text-slate-900 dark:text-white">
                    Αν η αεροπορική απορρίψει το αίτημα
                  </h3>
                  <p className="text-sm text-slate-600 dark:text-slate-300">
                    Ο οδηγός για το πώς να διαβάζετε σωστά μια απόρριψη.
                  </p>
                </Link>
                <a
                  href={cancelledFlightHref}
                  target="_blank"
                  rel="noopener noreferrer"
                  onClick={() =>
                    trackClaimClick(
                      "el_blog_need_lawyer_inline_cancelled_link",
                      cancelledFlightHref,
                    )
                  }
                  className="rounded-2xl border border-slate-200 p-5 transition-colors hover:border-sky-400 hover:bg-sky-50 dark:border-slate-700 dark:hover:border-sky-700 dark:hover:bg-sky-950/20"
                >
                  <h3 className="mb-2 font-semibold text-slate-900 dark:text-white">
                    Φόρμα ClaimWinger για ακυρωμένη πτήση
                  </h3>
                  <p className="text-sm text-slate-600 dark:text-slate-300">
                    Αν η υπόθεση αφορά ακύρωση, μπορείτε να περάσετε εδώ στον έλεγχο.
                  </p>
                </a>
                <a
                  href={delayedFlightHref}
                  target="_blank"
                  rel="noopener noreferrer"
                  onClick={() =>
                    trackClaimClick(
                      "el_blog_need_lawyer_inline_delayed_link",
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
