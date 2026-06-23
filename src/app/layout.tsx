import type { Metadata } from "next";
import type { ReactNode } from "react";
import { hostGrotesk } from "@lib/fonts";
import "@styles/globals.css";

export const metadata: Metadata = {
  title: "Airvik",
  description: "Simple PMS software for small and medium hotels.",
};

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html
      lang="en"
      className={`${hostGrotesk.variable} h-full scroll-smooth antialiased`}
    >
      <body className="flex min-h-full flex-col">{children}</body>
    </html>
  );
}
