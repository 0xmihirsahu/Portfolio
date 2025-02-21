import MatrixBackground from "@/components/matrix-background";
import AnimatedText from "@/components/AnimatedText";
import TextScramble from "@/components/TextScramble";
import ScrambleLink from "@/components/ScrambleLink";

export default function Home() {
  return (
    <TextScramble>
      <main className="flex min-h-screen flex-col items-center justify-between p-24">
        <MatrixBackground />
        <div className="z-10 w-full max-w-5xl items-center justify-between font-mono text-sm lg:flex">
          <p className="fixed left-0 top-0 flex w-full justify-center border-b border-gray-300 bg-gradient-to-b from-zinc-200 pb-6 pt-8 backdrop-blur-2xl dark:border-neutral-800 dark:bg-zinc-800/30 dark:from-inherit lg:static lg:w-auto lg:border lg:bg-gray-200 lg:p-4 lg:dark:bg-zinc-800/30">
            wip: portfolio website
          </p>
        </div>

        <div className="relative z-[-1] font-mono flex place-items-center before:absolute before:h-[300px] before:w-full before:-translate-x-1/2 before:rounded-full before:bg-gradient-radial before:from-white before:to-transparent before:blur-2xl before:content-[''] after:absolute after:-z-20 after:h-[180px] after:w-full after:translate-x-1/3 after:bg-gradient-conic after:blur-2xl after:content-[''] before:dark:bg-gradient-to-br before:dark:from-transparent  before:dark:opacity-10  after:dark:opacity-40 sm:before:w-[480px] sm:after:w-[240px] before:lg:h-[360px]">
          <AnimatedText />
        </div>

        <div className="grid gap-5 text-center font-mono lg:w-full lg:max-w-5xl lg:grid-cols-3 lg:text-left">
          {[
            { name: "github", url: "https://github.com/0xmihirsahu/", desc: "the code place" },
            { name: "linkedin", url: "https://linkedin.com/in/0xmihirsahu/", desc: "the brag place" },
            { name: "x", url: "https://x.com/0xmihirsahu", desc: "the rant place" },
          ].map((link) => (
            <ScrambleLink key={link.name} {...link} />
          ))}
        </div>
      </main>
    </TextScramble>
  );
}
