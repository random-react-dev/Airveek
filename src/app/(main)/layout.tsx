import type { ReactNode } from "react";
import Footer from "@modules/layout/templates/footer";
import Header from "@modules/layout/templates/nav";

export default function MainLayout({ children }: { children: ReactNode }) {
  return (
    <>
      <Header />
      <main className="flex-1">{children}</main>
      <Footer />
    </>
  );
}
