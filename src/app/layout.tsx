import type { Metadata } from "next";
import type { ReactNode } from "react";
import { inter } from "@lib/fonts";
import "@styles/globals.css";

export const metadata: Metadata = {
  title: "Airvik | Hotel PMS Software",
  description: "Simple PMS software for small and medium hotels to manage bookings, rooms, payments and staff workflows.",
};

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html
      lang="en"
      className={`${inter.variable} h-full scroll-smooth antialiased`}
    >
      <body className="flex min-h-full flex-col font-sans">{children}</body>
    </html>
  );
}
