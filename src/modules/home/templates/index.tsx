import Link from "next/link";

export default function HomePage() {
  return (
    <section id="top" className="min-h-screen bg-bg-soft font-sans">
      <div className="container flex flex-1 flex-col py-20">
        <div className="max-w-3xl">
          <p className="text-sm font-bold uppercase text-primary">
            PMS for small and medium hotels
          </p>
          <h1 className="mt-5 text-4xl font-extrabold leading-tight text-text sm:text-5xl">
            Simple PMS software for small and medium hotels.
          </h1>
          <p className="mt-6 max-w-2xl text-lg leading-8 text-text-muted">
            Manage reservations, rooms, OTA availability, payments,
            housekeeping and guest communication from one easy dashboard.
          </p>
          <div className="mt-8 flex flex-col gap-3 sm:flex-row">
            <Link
              href="#demo"
              className="inline-flex h-12 items-center justify-center rounded-lg bg-primary px-5 text-sm font-bold text-white shadow-sm transition-colors hover:bg-black focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary"
            >
              Book Free Demo
            </Link>
            <Link
              href="#pricing"
              className="inline-flex h-12 items-center justify-center rounded-lg border border-border bg-bg px-5 text-sm font-bold text-text transition-colors hover:bg-primary-soft focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary"
            >
              View Pricing
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
