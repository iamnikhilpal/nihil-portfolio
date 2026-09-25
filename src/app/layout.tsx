// src/app/layout.tsx
import type { Metadata } from "next";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
// Next.js handles this side-effect stylesheet import at build time.
import "./globals.css";

export const metadata: Metadata = {
  title: "Nihil Pal | Lead Software Engineer & AI Systems Architect",
  description:
    "Lead Software Engineer specializing in multi-agent AI architectures, distributed orchestration pipelines, and cloud backend engineering.",
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