import { Toaster } from "@/components/ui/toaster";
import { ClaimWingerBlogEmbedInjector } from "@/components/ClaimWingerBlogEmbedInjector";
import "@/styles/globals.css";
import type { AppProps } from "next/app";

export default function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <Component {...pageProps} />
      <ClaimWingerBlogEmbedInjector />
      <Toaster />
    </>
  );
}
