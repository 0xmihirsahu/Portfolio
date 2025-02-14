import MatrixBackground from "@/components/matrix-background";
export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <MatrixBackground />
      <div className="z-10 w-full max-w-5xl items-center justify-between font-mono text-sm lg:flex">
        <p className="fixed left-0 top-0 flex w-full justify-center border-b border-gray-300 bg-gradient-to-b from-zinc-200 pb-6 pt-8 backdrop-blur-2xl dark:border-neutral-800 dark:bg-zinc-800/30 dark:from-inherit lg:static lg:w-auto lg:border lg:bg-gray-200 lg:p-4 lg:dark:bg-zinc-800/30">
          WIP: Portfolio Website
        </p>
      </div>

      <div className="relative z-[-1] font-mono flex place-items-center before:absolute before:h-[300px] before:w-full before:-translate-x-1/2 before:rounded-full before:bg-gradient-radial before:from-white before:to-transparent before:blur-2xl before:content-[''] after:absolute after:-z-20 after:h-[180px] after:w-full after:translate-x-1/3 after:bg-gradient-conic after:blur-2xl after:content-[''] before:dark:bg-gradient-to-br before:dark:from-transparent  before:dark:opacity-10  after:dark:opacity-40 sm:before:w-[480px] sm:after:w-[240px] before:lg:h-[360px]">
        <h1 className="font-semibold text-3xl">Hi, I&apos;m Mihir, a Web3 developer.</h1>
      </div>

      <div className="grid gap-5 text-center font-mono lg:w-full lg:max-w-5xl lg:grid-cols-3 lg:text-left">
        {[
          { name: "Github", url: "https://github.com/0xmihirsahu/", desc: "The Code Place" },
          { name: "LinkedIn", url: "https://linkedin.com/in/0xmihirsahu/", desc: "The Brag Place" },
          { name: "X.com", url: "https://x.com/0xmihirsahu", desc: "The Rant Place" },
        ].map(({ name, url, desc }) => (
          <a
            key={name}
            href={url}
            className="group border-2 p-4 transition-colors bg-neutral-800/30 border-neutral-800 hover:border-gray-200 hover:bg-gray-100 hover:dark:border-neutral-700 hover:dark:bg-neutral-800/50"
            target="_blank"
            rel="noopener noreferrer"
          >
            <h2 className="mb-3 text-2xl font-semibold">
              {name}
              <span className="inline-block transition-transform group-hover:translate-x-1">
                -&gt;
              </span>
            </h2>
            <p className="font-mono text-sm opacity-50">{desc}</p>
          </a>
        ))}
      </div>
    </main>
  );
}
