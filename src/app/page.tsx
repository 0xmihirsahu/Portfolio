import MatrixBackground from "@/components/matrix-background";
import AnimatedText from "@/components/AnimatedText";
import TextScramble from "@/components/TextScramble";
import ScrambleLink from "@/components/ScrambleLink";
import Achievements from "@/components/Achievements";
import { Suspense } from "react";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24" role="main" aria-label="Portfolio content">
      <MatrixBackground />
      <header className="z-10 w-full max-w-5xl items-center justify-between font-mono text-sm lg:flex">
        <p className="fixed left-0 top-0 flex w-full justify-center border-b border-gray-300 bg-gradient-to-b from-zinc-200 pb-6 pt-8 backdrop-blur-2xl dark:border-neutral-800 dark:bg-zinc-800/30 dark:from-inherit lg:static lg:w-auto lg:border lg:bg-gray-200 lg:p-4 lg:dark:bg-zinc-800/30">
          wip: portfolio website
        </p>
      </header>

      <section 
        className="relative z-[-1] font-mono flex place-items-center before:absolute before:h-[300px] before:w-full before:-translate-x-1/2 before:rounded-full before:bg-gradient-radial before:from-white before:to-transparent before:blur-2xl before:content-[''] after:absolute after:-z-20 after:h-[180px] after:w-full after:translate-x-1/3 after:bg-gradient-conic after:blur-2xl after:content-[''] before:dark:bg-gradient-to-br before:dark:from-transparent before:dark:opacity-10 after:dark:opacity-40 sm:before:w-[480px] sm:after:w-[240px] before:lg:h-[360px]"
        aria-label="Introduction"
      >
        <Suspense fallback={<div aria-label="Loading introduction">Loading...</div>}>
          <AnimatedText />
        </Suspense>
      </section>

      <section aria-label="Achievements section">
        <Suspense fallback={<div aria-label="Loading achievements">Loading achievements...</div>}>
          <Achievements />
        </Suspense>
      </section>

      <nav 
        className="grid gap-5 text-center font-mono lg:w-full lg:max-w-5xl lg:grid-cols-3 lg:text-left"
        aria-label="Social links"
      >
        {[
          { name: "github", url: "https://github.com/0xmihirsahu/", desc: "the code place", ariaLabel: "Visit my GitHub profile" },
          { name: "linkedin", url: "https://linkedin.com/in/0xmihirsahu/", desc: "the brag place", ariaLabel: "Connect with me on LinkedIn" },
          { name: "x", url: "https://x.com/0xmihirsahu", desc: "the rant place", ariaLabel: "Follow me on X (Twitter)" },
        ].map((link) => (
          <ScrambleLink key={link.name} {...link} />
        ))}
      </nav>

      <footer className="fixed bottom-8 left-1/2 -translate-x-1/2 font-mono text-sm text-zinc-500/90 hover:text-zinc-500 transition-colors duration-300">
        <span className="select-none" role="note" aria-label="Resume download hint">Want my resume? Just type it...</span>
      </footer>
    </main>
  );
}

// Add static metadata for this page specifically
export const metadata = {
  alternates: {
    canonical: 'https://mihirsahu.xyz',
  },
};
