import Link from "next/link";
import SectionHeader from "../section-header";

export default function FinalCtaSection() {
  return (
    <section id="cta" className="scroll-mt-28 py-20 sm:py-24">
      <div className="container">
        <div className="mx-auto max-w-6xl rounded-4xl bg-black p-10 sm:p-14 lg:p-20">
        <div className="max-w-4xl mx-auto text-center">

          <p className="text-sm font-extrabold uppercase text-primary">
            Start Airveek
          </p>
          <h2 className="mx-auto mt-4 max-w-2xl text-3xl font-bold leading-tight text-white sm:text-4xl lg:text-5xl">
            See how Airveek fits your hotel workflow.
          </h2>
          <p className="mt-4 mx-auto max-w-2xl text-base leading-7 sm:text-lg sm:leading-8 text-white/70">
            Tell us about your rooms, booking process, payments and staff operations. We'll show you how Airveek can bring them into one clear system.
          </p>
        </div>

          <div className="mt-8 flex flex-col justify-center gap-3 sm:flex-row">
            <Link
              href="#pricing"
              className="inline-flex h-12 items-center justify-center rounded-full bg-primary px-7 font-medium text-white transition-colors duration-200 focus-visible:outline-none"
            >
              Start 30-Day Trial
            </Link>
            <Link
              href="#product"
              className="inline-flex h-12 items-center justify-center  rounded-full bg-green-400 px-7 font-medium text-black transition-colors duration-200 focus-visible:outline-none"
            >
              Talk on WhatsApp
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
