import type { Metadata } from "next";
import { Inter as FontSans } from "next/font/google"
import "./globals.css";
import { SpeedInsights } from "@vercel/speed-insights/next"
import { cn } from "@/utils/cn";
import { ThemeProvider } from "@/components/theme-provider"

export const metadata: Metadata = {
  title: "Mihir's Portfolio",
  description: "Mihir's Portfolio",
};
const fontSans = FontSans({
  subsets: ["latin"],
  variable: "--font-sans",
})

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
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
      </body>
    </html>
  );
}
