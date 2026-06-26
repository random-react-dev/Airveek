import Image from "next/image";
import Link from "next/link";
import DashboardPreview from "@modules/home/components/dashboard-preview";
import { heroStats, hotelLobbyImage } from "@modules/home/config/landing-page";

export default function HeroSection() {
  return (
    <section id="top" className="overflow-hidden bg-bg-soft font-sans">
      <div className="container grid min-h-[calc(100vh-73px)] items-center gap-12 py-14 lg:grid-cols-[0.88fr_1.12fr] lg:py-20">
        <div className="max-w-3xl">
          <p className="text-sm font-extrabold uppercase text-primary">
            PMS for small and medium hotels
          </p>
          <h1 className="mt-5 text-5xl font-extrabold leading-[1.02] text-text sm:text-6xl lg:text-7xl">
            Run your hotel from one simple PMS.
          </h1>
          <p className="mt-6 max-w-2xl text-lg leading-8 text-text-muted">
            Manage bookings, rooms, OTA availability, payments and housekeeping
            from a clean dashboard your front desk can use from day one.
          </p>
          <div className="mt-8 flex flex-col gap-3 sm:flex-row">
            <Link
              href="#demo"
              className="inline-flex h-12 items-center justify-center rounded-full bg-primary px-6 text-sm font-extrabold text-white transition-colors duration-200 hover:bg-black focus-visible:outline-none"
            >
              Book Free Demo
            </Link>
            <Link
              href="#product-tour"
              className="inline-flex h-12 items-center justify-center rounded-full border border-border bg-bg px-6 text-sm font-extrabold text-text transition-colors duration-200 hover:border-primary hover:text-primary focus-visible:outline-none"
            >
              See Product Tour
            </Link>
          </div>

          <div className="mt-10 grid gap-4 border-t border-border pt-6 sm:grid-cols-3">
            {heroStats.map((stat) => (
              <div key={stat.label}>
                <p className="text-xl font-extrabold text-text">{stat.value}</p>
                <p className="mt-1 text-sm leading-5 text-text-muted">{stat.label}</p>
              </div>
            ))}
          </div>
        </div>

        <div className="relative min-h-[520px]">
          <Image
            src={hotelLobbyImage.src}
            alt={hotelLobbyImage.alt}
            width={1400}
            height={900}
            priority
            className="absolute right-0 top-0 h-[440px] w-full rounded-[34px] object-cover shadow-[0_28px_100px_rgba(0,0,0,0.18)] lg:h-[520px]"
          />
          {/* <div className="absolute inset-0 rounded-[34px] bg-gradient-to-t from-black/35 via-black/5 to-transparent" /> */}
          <div className="absolute bottom-0 left-0 right-0 mx-auto max-w-[92%] translate-y-8 lg:-left-10 lg:right-auto lg:max-w-[620px] lg:block hidden">
            <DashboardPreview />
          </div>
        </div>
      </div>
    </section>
  );
}
