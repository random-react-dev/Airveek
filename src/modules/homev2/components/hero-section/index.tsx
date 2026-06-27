import Link from "next/link";

const capabilities = [
  "Reservations",
  "Room calendar",
  "Guest profiles",
  "Payments and dues",
  "Housekeeping",
  "Reports",
] as const;

const proofPoints = [
  {
    title: "Built from real hotel operations",
    description: "Daily workflows shaped with an active hospitality property.",
  },
  {
    title: "Guided property setup",
    description: "Rooms, rates, booking sources and staff roles mapped with you.",
  },
  {
    title: "Access for every team",
    description: "Clear roles for owners, managers, reception and housekeeping.",
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
        <div className="flex items-center gap-8 flex-col lg:flex-row lg:gap-12">
          <div className="w-full lg:w-1/2">
            <p className="inline-flex rounded-full border border-primary/20 bg-bg px-4 py-2 text-xs font-extrabold uppercase tracking-widest text-primary">
              Hotel PMS for independent properties
            </p>

            <h1
              id="hero-title"
              className="mt-6 text-5xl font-bold text-text sm:text-5xl lg:text-6xl"
            >
              Run your hotel from one clear system.
            </h1>

            <p className="mt-6 max-w-2xl text-lg leading-8 text-text-muted sm:text-xl sm:leading-9">
              Airveek brings reservations, rooms, guests, payments,
              housekeeping and reports into one practical workspace—so your
              team always knows what needs attention next.
            </p>

            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              <Link
                href="#cta"
                className="inline-flex h-12 items-center justify-center rounded-full bg-primary px-7 font-medium text-white transition-colors duration-200 hover:bg-text focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary"
              >
                Book a Free Demo
              </Link>
              <Link
                href="#product"
                className="inline-flex h-12 items-center justify-center rounded-full border border-border bg-bg px-7 font-medium text-text transition-colors duration-200 hover:border-primary hover:text-primary focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary"
              >
                Explore the Product
              </Link>
            </div>

            <p className="mt-5 text-sm font-semibold text-text-muted">
              Guided setup for rooms, rates, staff roles and daily workflows.
            </p>
          </div>

          {/* Replace this capability panel with approved product media later. */}
          <div className="lg:w-1/2 w-full">
            <div className="rounded-2xl border border-border bg-bg p-5 shadow-[0_24px_90px_rgba(0,0,0,0.1)] sm:p-8">
              <p className="text-xs font-extrabold uppercase tracking-[0.14em] text-primary">
                One operational workspace
              </p>
              <h2 className="mt-3 max-w-lg text-3xl font-extrabold leading-tight tracking-[-0.02em] text-text sm:text-4xl">
                Everything your team needs to run today.
              </h2>

              <div className="mt-8 grid gap-3 sm:grid-cols-2">
                {capabilities.map((capability) => (
                  <div
                    key={capability}
                    className="flex min-h-16 items-center gap-3 rounded-2xl bg-bg-soft px-4 py-3 text-sm font-extrabold text-text"
                  >
                    <span className="flex size-7 shrink-0 items-center justify-center rounded-full bg-primary-soft text-primary">
                      <svg
                        aria-hidden="true"
                        viewBox="0 0 20 20"
                        className="size-4 fill-none stroke-current"
                      >
                        <path
                          d="m5 10 3 3 7-7"
                          strokeWidth="2"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        />
                      </svg>
                    </span>
                    {capability}
                  </div>
                ))}
              </div>

              <div className="mt-5 rounded-2xl bg-text px-5 py-4 text-sm font-bold leading-6 text-white">
                Built for owners, managers, reception and housekeeping teams.
              </div>
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
