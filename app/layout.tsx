import type { Metadata } from "next";
import "./globals.css";
import Link from "next/link";

export const metadata: Metadata = {
  title: "awarm.space",
  authors: { name: "Jared Pereira" },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="p-2">
        <div className="flex flex-row gap-4 pb-4">
          <Link href="/">awarm.space</Link>
          <Link href="/shelf">shelf</Link>
          <Link href="/interests">interests</Link>
        </div>
        {children}
      </body>
    </html>
  );
}
