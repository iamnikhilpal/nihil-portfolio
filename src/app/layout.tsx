// src/app/layout.tsx
import type { Metadata } from "next";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
// Next.js handles this side-effect stylesheet import at build time.
import "./globals.css";

export const metadata: Metadata = {
  metadataBase: new URL("https://nihilpal.in"),
  title: {
    default: "Nihil Pal | Lead Software Engineer & AI Systems Architect",
    template: "%s | Nihil Pal",
  },
  description:
    "Engineering portfolio and technical publications by Nihil Pal. Specializing in autonomous multi-agent AI systems, distributed architectures, and cloud-scale infrastructure.",
  openGraph: {
    title: "Nihil Pal | Lead Software Engineer & AI Systems Architect",
    description:
      "Engineering portfolio and technical publications by Nihil Pal. Specializing in autonomous multi-agent AI systems, distributed architectures, and cloud-scale infrastructure.",
    url: "https://nihilpal.in",
    siteName: "Nihil Pal",
    locale: "en_US",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className="bg-[#FAFAFA] text-zinc-900 antialiased font-sans">
        <Header />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}