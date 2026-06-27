import Link from "next/link";

export default function FinalCtaSection() {
  return (
    <section id="cta" className="scroll-mt-28 bg-text py-20 text-white sm:py-24">
      <div className="container text-center">
        <p className="text-sm font-extrabold uppercase text-primary">
          Start Airveek
        </p>
        <h2 className="mx-auto mt-4 max-w-4xl text-4xl font-extrabold leading-tight sm:text-5xl">
          Start your 30-day Airveek PMS trial with guided setup.
        </h2>
        <p className="mx-auto mt-5 max-w-2xl text-base leading-7 text-white/70">
          We will help map your rooms, booking sources, payment process and staff
          workflow so your team can test Airveek with real operations.
        </p>
        <div className="mt-8 flex flex-col justify-center gap-3 sm:flex-row">
          <Link
            href="#pricing"
            className="inline-flex h-12 items-center justify-center rounded-full bg-primary px-6 text-sm font-extrabold text-white transition-colors duration-200 hover:bg-white hover:text-text focus-visible:outline-none"
          >
            Start 30-Day Trial
          </Link>
          <Link
            href="#product"
            className="inline-flex h-12 items-center justify-center rounded-full border border-white/20 px-6 text-sm font-extrabold text-white transition-colors duration-200 hover:border-primary hover:text-primary focus-visible:outline-none"
          >
            See Product Tour
          </Link>
        </div>
      </div>
    </section>
  );
}
