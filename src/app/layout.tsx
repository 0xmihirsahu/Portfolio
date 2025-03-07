import type { Metadata } from "next";
import { Inter as FontSans } from "next/font/google"
import "./globals.css";
import { SpeedInsights } from "@vercel/speed-insights/next"
import { cn } from "@/utils/cn";
import { ThemeProvider } from "@/components/theme-provider"
import { Analytics } from "@vercel/analytics/react"

export const metadata: Metadata = {
  title: "Mihir | Dev",
  description: "Mihir Sahu is a Developer specializing in Web3, DeFi, Smart Contracts, and Zero-Knowledge Proofs. ETHGlobal Finalist, Aptos Finalist and Chainlink Hackathon Winner.",
  keywords: [
    "Mihir Sahu", "Blockchain Developer", "Web3", "Engineer", "StarkSwirl", "FundMate", 
    "Hacker", "Aptos", "Code Collision Finalist", "Starknet", "Cairo", "Hackathon winner",
    "Zero-Knowledge Proofs", "AI", "Crypto", "Rust", "Solidity", "ETHGlobal Finalist", 
    "Founder", "Mihir", "Sahu", "backend", "fullstack", "frontend", "Web3", "Ethereum", 
    "Move", "ZK", "Starkhack", "Developer", "DeFi", "Smart Contracts", "Blockchain"
  ],
  authors: [{ name: "Mihir Sahu", url: "https://mihirsahu.xyz" }],
  creator: "Mihir Sahu",
  publisher: "Mihir Sahu",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  metadataBase: new URL("https://mihirsahu.xyz"),
  alternates: {
    canonical: "https://mihirsahu.xyz",
  },
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://mihirsahu.xyz",
    title: "Mihir Sahu | Web3 Developer & Blockchain Engineer",
    description: "Web3 Developer specializing in DeFi, Smart Contracts, and Zero-Knowledge Proofs. ETHGlobal Finalist and Chainlink Hackathon Winner.",
    siteName: "Mihir Sahu Portfolio",
  },
  twitter: {
    card: "summary_large_image",
    title: "Mihir Sahu | Web3 Developer",
    description: "Web3 Developer specializing in DeFi and Smart Contracts. ETHGlobal Finalist.",
    creator: "@0xmihirsahu",
    site: "@0xmihirsahu",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
};

const fontSans = FontSans({
  subsets: ["latin"],
  variable: "--font-sans",
})

// Enhanced JSON-LD with more detailed information
const jsonLd = `{
  "@context": "https://schema.org",
  "@type": "Person",
  "name": "Mihir Sahu",
  "alternateName": "0xmihirsahu",
  "description": "A Developer specializing in Web3, Smart Contracts and DeFi",
  "url": "https://mihirsahu.xyz",
  "sameAs": [
    "https://twitter.com/0xmihirsahu",
    "https://github.com/0xmihirsahu",
    "https://linkedin.com/in/0xmihirsahu"
  ],
  "knowsAbout": [
    "Blockchain Development",
    "Smart Contracts",
    "DeFi",
    "Zero-Knowledge Proofs",
    "Web3",
    "Ethereum",
    "Rust",
    "Solidity",
    "Cairo",
    "Move"
  ],
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
        <meta name="google-site-verification" content="your-verification-code" />
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
