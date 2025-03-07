import type { Metadata } from "next";
import { Inter as FontSans } from "next/font/google"
import "./globals.css";
import { SpeedInsights } from "@vercel/speed-insights/next"
import { cn } from "@/utils/cn";
import { ThemeProvider } from "@/components/theme-provider"
import { Analytics } from "@vercel/analytics/react"

export const metadata: Metadata = {
  title: "Mihir Sahu | Dev",
  description: "Mihir Sahu's Portfolio - A Developer specializing in Web3.",
  keywords: [
    "Mihir Sahu", "Blockchain Developer", "Web3", "Engineer", "StarkSwirl", "FundMate", "Hacker", "Aptos", "Code Collision Finalist" ,"Starknet" , "Cairo", "Hackathon winner",
    "Zero-Knowledge Proofs", "AI", "Crypto", "Rust" , "Solidity", "ETHGlobal Finalist", "Founder", "Mihir" , "Sahu" , "backend", "fullstack", "frontend", "Web3", "Ethereum", "Move", "ZK", "Starkhack" , "Developer"
  ],
  authors: [{ name: "Mihir Sahu", url: "https://mihirsahu.xyz" }],
  metadataBase: new URL("https://mihirsahu.xyz"),
  alternates: {
    canonical: "https://mihirsahu.xyz",
  },
};

const fontSans = FontSans({
  subsets: ["latin"],
  variable: "--font-sans",
})

// Pre-stringify the JSON-LD to ensure consistent output
const jsonLd = `{
  "@context": "https://schema.org",
  "@type": "Person",
  "name": "Mihir Sahu",
  "alternateName": "0xmihirsahu",
  "skills": "JavaScript TypeScript Rust Solidity Developer",
  "url": "https://mihirsahu.xyz",
  "sameAs": [
    "https://twitter.com/0xmihirsahu",
    "https://github.com/0xmihirsahu",
    "https://linkedin.com/in/0xmihirsahu",
    "https://instagram.com/0xmihrsahu"
  ],
  "description": " A developer specializing in Web3, Smart Contracts, and DeFi."
}`;

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <meta name="viewport" content="width=device-width, initial-scale=1, maximum-scale=5" />
        <meta name="robots" content="index, follow" />
        <meta name="author" content="Mihir Sahu" />
        <meta name="theme-color" content="#000000" />
        <link rel="canonical" href="https://mihirsahu.xyz" />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: jsonLd }}
        />
      </head>
      <body className={cn(
          "min-h-screen bg-background font-sans antialiased",fontSans.variable)}>
            <ThemeProvider
            attribute="class"
            defaultTheme="dark"
            enableSystem
            disableTransitionOnChange
          >
            {children}
          </ThemeProvider>
        <SpeedInsights />
        <Analytics/>
      </body>
    </html>
  );
}
