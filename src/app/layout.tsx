import type { Metadata } from "next";
import { ABeeZee } from "next/font/google";
import "./globals.css";
import { cn } from "@/lib/utils";

const inter = ABeeZee({ subsets: ["latin"], weight:'400'});

export const metadata: Metadata = {
  title: "Pixelize",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="h-full">
      <body
        className={cn("relative h-full font-sans antialiased", inter.className)}
      >
        <main className="relative flex flex-col min-h-screen">
          <div className="flex-grow flex-1">{children}</div>
        </main>
      </body>
    </html>
  );
}
