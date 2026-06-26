import Link from "next/link";

export default function FinalCtaSection() {
  return (
    <section className="bg-text py-16 text-white sm:py-20">
      <div className="container">
        <div className="mx-auto max-w-4xl text-center">
          <p className="text-sm font-bold uppercase text-primary">
            Ready for a better front desk?
          </p>
          <h2 className="mt-3 text-3xl font-extrabold leading-tight sm:text-4xl lg:text-5xl">
            Run bookings, rooms, payments and staff from one PMS.
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-base leading-7 text-white/70 sm:text-lg">
            Book a free demo and see how Airvik can support daily hotel
            operations without adding extra complexity.
          </p>
          <div className="mt-8 flex flex-col justify-center gap-3 sm:flex-row">
            <Link
              href="#demo"
              className="inline-flex h-12 items-center justify-center rounded-full bg-primary px-6 text-sm font-bold text-white transition-colors duration-200 hover:bg-white hover:text-primary focus-visible:outline-none"
            >
              Book Free Demo
            </Link>
            <Link
              href="#support"
              className="inline-flex h-12 items-center justify-center rounded-full border border-white/20 px-6 text-sm font-bold text-white transition-colors duration-200 hover:border-white hover:bg-white hover:text-text focus-visible:outline-none"
            >
              Talk to PMS Expert
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
