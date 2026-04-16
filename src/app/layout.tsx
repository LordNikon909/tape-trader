import type { Metadata } from "next";
import { Lexend } from "next/font/google"; // Import Lexend
import "./globals.css";
import Navbar from "@/components/Navbar";
import { auth } from "@/auth";

// Configure Lexend
const lexend = Lexend({
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "Tape Trader",
  description: "One New Mixtape. Every Month.",
};

export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {

  const session = await auth();

  return (
    <html lang="en" className={lexend.className}>
      <head>
        <link rel="stylesheet" href="https://use.typekit.net/ejo4wgl.css" />
      </head>
      <body style={{ fontFamily: 'inherit' }}>
        <header>
          <Navbar session={session} />
          {children}
        </header>
        <footer className="py-12 text-center w-fit mx-auto text-md font-light text-brand-400">
          <p>&#169; Tape Trader 2026</p>
        </footer>
      </body>
    </html>
  );
}
