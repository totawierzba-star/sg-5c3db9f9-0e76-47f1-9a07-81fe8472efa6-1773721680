import { useEffect, useState } from "react";
import { createPortal } from "react-dom";
import { useRouter } from "next/router";

import { ClaimWingerHeroEmbed } from "@/components/ClaimWingerHeroEmbed";
import { ClaimWingerElSection } from "@/components/ClaimWingerElSection";
import { ClaimWingerHuSection } from "@/components/ClaimWingerHuSection";
import { ClaimWingerTrSection } from "@/components/ClaimWingerTrSection";
import { ClaimWingerZhSection } from "@/components/ClaimWingerZhSection";

const EMBED_ATTR = "data-claimwinger-blog-embed";
const HIDDEN_ATTR = "data-claimwinger-blog-embed-hidden";
const EXISTING_EMBED_SELECTOR = '[data-claimwinger-embed="true"]';

type BlogEmbedConfig = {
  isMatch: (path: string) => boolean;
  claimLinkSelector: string;
  fallbackMode?: "after-header";
  render: () => JSX.Element;
};

const BLOG_EMBED_CONFIGS: BlogEmbedConfig[] = [
  {
    isMatch: (path) => /^\/blog\/[^/?#]+$/.test(path),
    claimLinkSelector: 'a[href*="claimwinger.com"]',
    render: () => <ClaimWingerHeroEmbed className="mb-8" />,
  },
  {
    isMatch: (path) => /^\/zh\/blog\/[^/?#]+$/.test(path),
    claimLinkSelector: 'a[href*="claimwinger.com"]',
    fallbackMode: "after-header",
    render: () => (
      <ClaimWingerZhSection
        className="mb-8"
        title="立即开始中文索赔检查"
        description="如果您已经读到这里，通常已经具备初步判断条件。直接填写 ClaimWinger 表单，比手动整理材料和反复联系航空公司更快。"
      />
    ),
  },
  {
    isMatch: (path) => /^\/el\/blog\/[^/?#]+$/.test(path),
    claimLinkSelector: 'a[href*="claimwinger.com"]',
    fallbackMode: "after-header",
    render: () => (
      <ClaimWingerElSection
        className="mb-8"
        title="Ελέγξτε άμεσα αν η πτήση σας μπορεί να οδηγήσει σε αποζημίωση"
        description="Αν διαβάζετε ήδη αυτό το σημείο, συνήθως έχετε το βασικό πλαίσιο της υπόθεσης. Η ελληνική φόρμα του ClaimWinger βοηθά να δείτε γρήγορα αν αξίζει να προχωρήσετε."
        ctaHref="https://claimwinger.com/el?utm_source=problemlot-el&utm_medium=embedded_cta&utm_campaign=blog_entry"
        ctaLabel="Άνοιγμα ελέγχου ClaimWinger"
        placement="el_blog_embed"
      />
    ),
  },
  {
    isMatch: (path) => /^\/hu\/blog\/[^/?#]+$/.test(path),
    claimLinkSelector: 'a[href*="claimwinger.com"]',
    fallbackMode: "after-header",
    render: () => (
      <ClaimWingerHuSection
        className="mb-8"
        title="Ellenorizze most, hogy a jarata belefer-e az EU261 szabalyokba"
        description="Ha a jarat kesett, toroltek vagy atfoglaltak, a ClaimWinger magyar folyamata gyorsan segit eldonteni, hogy jarhat-e karterites vagy visszaterites."
        ctaHref="https://claimwinger.com/hu"
        ctaLabel="Magyar igenyellenorzes inditasa"
      />
    ),
  },
  {
    isMatch: (path) => /^\/tr\/blog\/[^/?#]+$/.test(path),
    claimLinkSelector: 'a[href*="claimwinger.com"]',
    fallbackMode: "after-header",
    render: () => (
      <ClaimWingerTrSection
        className="mb-8"
        title="ClaimWinger ile Turkce uygunluk kontrolune hemen baslayin"
        description="Bu noktaya kadar geldiyseniz, genelde dosyanin temel sorununu anlamissinizdir. ClaimWinger formu ile dosyanin EU261 acisindan gucunu hizlica kontrol edebilirsiniz."
        ctaHref="https://claimwinger.com/tr?utm_source=problemlot-tr&utm_medium=embedded_cta&utm_campaign=blog_entry"
        ctaLabel="ClaimWinger TR kontrolunu ac"
        placement="tr_blog_embed"
      />
    ),
  },
];

function scoreCandidate(element: HTMLElement, article: HTMLElement) {
  if (!["DIV", "SECTION"].includes(element.tagName)) {
    return -1;
  }

  if (element === article) {
    return -1;
  }

  const className =
    typeof element.className === "string" ? element.className : "";

  if (/\bprose\b/.test(className)) {
    return -1;
  }

  const textLength = (element.textContent || "").trim().length;
  if (textLength === 0 || textLength > 2400) {
    return -1;
  }

  const linkCount = element.querySelectorAll("a[href]").length;
  if (linkCount === 0 || linkCount > 8) {
    return -1;
  }

  let score = 0;

  if (/bg-|from-|to-/.test(className)) {
    score += 5;
  }

  if (/rounded|shadow|border/.test(className)) {
    score += 3;
  }

  if (/p-|px-|py-|pt-|pb-|pl-|pr-/.test(className)) {
    score += 1;
  }

  if (textLength < 1200) {
    score += 2;
  }

  if (linkCount <= 4) {
    score += 2;
  }

  if (element.parentElement === article) {
    score += 1;
  }

  return score;
}

function findFirstCtaContainer(article: HTMLElement, claimLinkSelector: string) {
  const claimLinks = Array.from(
    article.querySelectorAll<HTMLAnchorElement>(claimLinkSelector),
  );

  for (const link of claimLinks) {
    const candidates: Array<{ element: HTMLElement; score: number }> = [];
    let current = link.parentElement;

    while (current && current !== article) {
      const score = scoreCandidate(current, article);

      if (score > 0) {
        candidates.push({ element: current, score });
      }

      current = current.parentElement;
    }

    candidates.sort((left, right) => right.score - left.score);

    if ((candidates[0]?.score ?? 0) >= 6) {
      return candidates[0].element;
    }
  }

  return null;
}

function findFallbackMountPoint(article: HTMLElement, fallbackMode?: "after-header") {
  if (fallbackMode !== "after-header") {
    return null;
  }

  const header = article.querySelector("header");
  if (header?.parentElement instanceof HTMLElement) {
    return header.nextElementSibling instanceof HTMLElement
      ? header.nextElementSibling
      : null;
  }

  const firstSection = article.querySelector("section");
  if (firstSection instanceof HTMLElement) {
    return firstSection;
  }

  return null;
}

function restoreHiddenBlocks() {
  document.querySelectorAll<HTMLElement>(`[${HIDDEN_ATTR}="true"]`).forEach((el) => {
    el.hidden = false;
    el.removeAttribute(HIDDEN_ATTR);
  });
}

export function ClaimWingerBlogEmbedInjector() {
  const router = useRouter();
  const [mountPoint, setMountPoint] = useState<HTMLElement | null>(null);
  const [config, setConfig] = useState<BlogEmbedConfig | null>(null);

  useEffect(() => {
    const cleanup = () => {
      setMountPoint(null);
      setConfig(null);

      document
        .querySelectorAll<HTMLElement>(`[${EMBED_ATTR}="true"]`)
        .forEach((el) => el.remove());

      restoreHiddenBlocks();
    };

    cleanup();

    const path = router.asPath.split(/[?#]/)[0];
    const matchedConfig = BLOG_EMBED_CONFIGS.find((entry) => entry.isMatch(path));
    if (!matchedConfig) {
      return cleanup;
    }

    let cancelled = false;
    let frameId = 0;
    let attempts = 0;

    const tryAttachEmbed = () => {
      if (cancelled) {
        return;
      }

      const article = document.querySelector<HTMLElement>("article");
      if (!article) {
        if (attempts < 20) {
          attempts += 1;
          frameId = window.requestAnimationFrame(tryAttachEmbed);
        }
        return;
      }

      if (article.querySelector(EXISTING_EMBED_SELECTOR)) {
        return;
      }

      const container = findFirstCtaContainer(article, matchedConfig.claimLinkSelector);
      const fallbackMountTarget = container
        ? null
        : findFallbackMountPoint(article, matchedConfig.fallbackMode);

      if (!container && !fallbackMountTarget) {
        if (attempts < 20) {
          attempts += 1;
          frameId = window.requestAnimationFrame(tryAttachEmbed);
        }
        return;
      }

      const insertionTarget = container ?? fallbackMountTarget;
      if (!insertionTarget) {
        return;
      }

      const previousSibling = insertionTarget.previousElementSibling;
      const existingMountPoint =
        previousSibling instanceof HTMLElement &&
        previousSibling.getAttribute(EMBED_ATTR) === "true"
          ? previousSibling
          : null;

      const nextMountPoint = existingMountPoint ?? document.createElement("div");
      nextMountPoint.setAttribute(EMBED_ATTR, "true");

      if (!existingMountPoint) {
        insertionTarget.before(nextMountPoint);
      }

      if (container) {
        container.hidden = true;
        container.setAttribute(HIDDEN_ATTR, "true");
      }

      setConfig(matchedConfig);
      setMountPoint(nextMountPoint);
    };

    frameId = window.requestAnimationFrame(tryAttachEmbed);

    return () => {
      cancelled = true;
      window.cancelAnimationFrame(frameId);
      cleanup();
    };
  }, [router.asPath]);

  if (!mountPoint || !config) {
    return null;
  }

  return createPortal(config.render(), mountPoint);
}
