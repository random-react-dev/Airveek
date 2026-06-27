import Link from "next/link";
import { heroMetrics } from "@modules/homev2/config/landing-page";

export default function HeroSection() {
  return (
    <section id="top" className="overflow-hidden bg-bg-soft font-sans">
      <div className="container grid min-h-[calc(100vh-73px)] items-center gap-12 py-14 lg:grid-cols-[0.88fr_1.12fr] lg:py-20">
        <div className="max-w-3xl">
          <p className="text-sm font-extrabold uppercase text-primary">
            Hotel PMS software by Airveek
          </p>
          <h1 className="mt-5 text-5xl font-extrabold leading-[1.02] text-text sm:text-6xl lg:text-7xl">
            Run bookings, rooms and payments from one calm PMS.
          </h1>
          <p className="mt-6 max-w-2xl text-lg leading-8 text-text-muted">
            Airveek brings reservations, room calendar, guests, payments,
            housekeeping, reports and staff roles into one practical workspace.
            Start with a guided 30-day trial and shape the workflow around your
            property.
          </p>
          <div className="mt-8 flex flex-col gap-3 sm:flex-row">
            <Link
              href="#pricing"
              className="inline-flex h-12 items-center justify-center rounded-full bg-primary px-6 text-sm font-extrabold text-white transition-colors duration-200 hover:bg-black focus-visible:outline-none"
            >
              Start 30-Day Trial
            </Link>
            <Link
              href="#product"
              className="inline-flex h-12 items-center justify-center rounded-full border border-border bg-bg px-6 text-sm font-extrabold text-text transition-colors duration-200 hover:border-primary hover:text-primary focus-visible:outline-none"
            >
              See Product Tour
            </Link>
          </div>

          <div className="mt-10 grid gap-4 border-t border-border pt-6 sm:grid-cols-3">
            {heroMetrics.map((metric) => (
              <div key={metric.label}>
                <p className="text-xl font-extrabold text-text">{metric.value}</p>
                <p className="mt-1 text-sm leading-5 text-text-muted">
                  {metric.label}
                </p>
              </div>
            ))}
          </div>
        </div>

        <div className="relative">
          <div className="overflow-hidden rounded-[28px] border border-border bg-bg p-3 shadow-[0_24px_90px_rgba(0,0,0,0.12)]">
            <video
              className="aspect-video w-full rounded-[22px] bg-bg-muted object-cover"
              controls
              muted
              playsInline
              preload="metadata"
            >
              <source
                src="/assets/videos/airveek-product-tour.mp4"
                type="video/mp4"
              />
              Your browser does not support the video tag.
            </video>
          </div>
        </div>
      </div>
    </section>
  );
}
