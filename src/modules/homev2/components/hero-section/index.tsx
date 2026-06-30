import Image from "next/image";
import Link from "next/link";

const proofPoints = [
  {
    title: "Built for small properties",
    description: "Practical tools for small hotels, guesthouses and boutique stays without unnecessary complexity.",
  },
  {
    title: "Guided property setup",
    description: "We help configure your rooms, rates, staff roles and daily workflows.",
  },
  {
    title: "30-day free trial",
    description: "Explore Airveek with full access before choosing a paid plan.",
  },
] as const;

export default function HeroSection() {
  return (
    <section
      id="top"
      aria-labelledby="hero-title"
      className="relative isolate overflow-hidden bg-bg-soft py-14 sm:py-16 lg:py-20"
    >
      <div className="container">
        <div className="flex items-center gap-8 flex-col lg:flex-row lg:gap-10">
          <div className="w-full lg:w-1/2">
            <p className="inline-flex rounded-full border border-primary/20 bg-bg px-4 py-2 text-xs font-extrabold uppercase tracking-widest text-primary">
              Hotel PMS build for small properties
            </p>

            <h1
              id="hero-title"
              className="mt-6 text-5xl font-bold text-text sm:text-5xl lg:text-6xl leading-tight"
            >
              One simple PMS built for small properties.
            </h1>

            <p className="mt-6 max-w-2xl text-lg leading-8 text-text-muted sm:text-xl sm:leading-9">
              Grow direct bookings, simplify daily operations and keep every stay organised - all from one easy PMS.
            </p>

            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              <Link
                href="#cta"
                className="inline-flex h-12 items-center justify-center rounded-full bg-primary px-4 py-2 font-medium text-white hover:bg-bg border hover:text-primary hover:border-primary transition-all duration-200 ease-out focus-visible:outline-none"
              >
                Start Your 30-Day Free Trial
              </Link>
            </div>
          </div>

          <div className="lg:w-1/2 w-full">
            <div className="relative aspect-16/10 overflow-hidden rounded-2xl border border-border shadow">
              <Image
                src="/assets/images/frontdesk.png"
                alt="Airveek front desk calendar showing rooms, bookings, arrivals and guest details"
                fill
                priority
                sizes="(min-width: 1024px) 50vw, calc(100vw - 2rem)"
                className="object-contain"
              />
            </div>
          </div>
        </div>

        <div className="mt-12 grid border-y border-border sm:grid-cols-3 lg:mt-16">
          {proofPoints.map((proof, index) => (
            <article
              key={proof.title}
              className={`py-5 sm:px-6 ${index > 0
                ? "border-t border-border sm:border-l sm:border-t-0"
                : ""
                }`}
            >
              <h2 className="font-semibold text-text">
                {proof.title}
              </h2>
              <p className="mt-2 text-sm leading-6 text-text-muted">
                {proof.description}
              </p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
