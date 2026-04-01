import { useEffect, useState } from "react";
import { createPortal } from "react-dom";
import { useRouter } from "next/router";

import { ClaimWingerHeroEmbed } from "@/components/ClaimWingerHeroEmbed";

const EMBED_ATTR = "data-claimwinger-blog-embed";
const HIDDEN_ATTR = "data-claimwinger-blog-embed-hidden";

function isPolishBlogArticle(path: string) {
  return /^\/blog\/[^/?#]+$/.test(path);
}

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
  if (textLength === 0 || textLength > 1600) {
    return -1;
  }

  const linkCount = element.querySelectorAll("a[href]").length;
  if (linkCount === 0 || linkCount > 6) {
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

  if (textLength < 900) {
    score += 2;
  }

  if (linkCount <= 3) {
    score += 2;
  }

  if (element.parentElement === article) {
    score += 1;
  }

  return score;
}

function findFirstCtaContainer(article: HTMLElement) {
  const claimLinks = Array.from(
    article.querySelectorAll<HTMLAnchorElement>(
      'a[href^="https://claimwinger.com/pl"]',
    ),
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

function restoreHiddenBlocks() {
  document.querySelectorAll<HTMLElement>(`[${HIDDEN_ATTR}="true"]`).forEach((el) => {
    el.hidden = false;
    el.removeAttribute(HIDDEN_ATTR);
  });
}

export function ClaimWingerBlogEmbedInjector() {
  const router = useRouter();
  const [mountPoint, setMountPoint] = useState<HTMLElement | null>(null);

  useEffect(() => {
    const cleanup = () => {
      setMountPoint(null);

      document
        .querySelectorAll<HTMLElement>(`[${EMBED_ATTR}="true"]`)
        .forEach((el) => el.remove());

      restoreHiddenBlocks();
    };

    cleanup();

    const path = router.asPath.split(/[?#]/)[0];
    if (!isPolishBlogArticle(path)) {
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

      const container = findFirstCtaContainer(article);
      if (!container) {
        if (attempts < 20) {
          attempts += 1;
          frameId = window.requestAnimationFrame(tryAttachEmbed);
        }
        return;
      }

      const nextSibling = container.previousElementSibling;
      const existingMountPoint =
        nextSibling instanceof HTMLElement &&
        nextSibling.getAttribute(EMBED_ATTR) === "true"
          ? nextSibling
          : null;

      const nextMountPoint = existingMountPoint ?? document.createElement("div");
      nextMountPoint.setAttribute(EMBED_ATTR, "true");

      if (!existingMountPoint) {
        container.before(nextMountPoint);
      }

      container.hidden = true;
      container.setAttribute(HIDDEN_ATTR, "true");
      setMountPoint(nextMountPoint);
    };

    frameId = window.requestAnimationFrame(tryAttachEmbed);

    return () => {
      cancelled = true;
      window.cancelAnimationFrame(frameId);
      cleanup();
    };
  }, [router.asPath]);

  if (!mountPoint) {
    return null;
  }

  return createPortal(
    <ClaimWingerHeroEmbed className="mb-8" />,
    mountPoint,
  );
}
