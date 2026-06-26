import Link from "next/link";

const fields = ["Name", "Phone / WhatsApp", "Hotel name", "Number of rooms"] as const;

export default function DemoPricingSection() {
  return (
    <section id="pricing" className="scroll-mt-28 bg-bg-muted py-20 sm:py-24">
      <div className="container">
        <div className="grid overflow-hidden rounded-[34px] border border-border bg-bg lg:grid-cols-[0.95fr_1.05fr]">
          <div className="bg-text p-8 text-white sm:p-10 lg:p-12">
            <p className="text-sm font-extrabold uppercase text-primary">Pricing + demo</p>
            <h2 className="mt-4 text-4xl font-extrabold leading-tight sm:text-5xl">
              Get a PMS walkthrough matched to your room count.
            </h2>
            <p className="mt-5 text-lg leading-8 text-white/70">
              Keep pricing honest in the prototype: explain that plans depend on
              property size and send serious buyers to a focused demo.
            </p>
            <div className="mt-8 grid gap-4 sm:grid-cols-3 lg:grid-cols-1 xl:grid-cols-3">
              {["Room-count based", "Setup guidance", "No fake pricing"].map((item) => (
                <div key={item} className="rounded-2xl border border-white/15 p-4 text-sm font-extrabold">
                  {item}
                </div>
              ))}
            </div>
          </div>

          <div id="demo" className="scroll-mt-28 p-6 sm:p-8 lg:p-10">
            <div className="flex items-start justify-between gap-4">
              <div>
                <h3 className="text-3xl font-extrabold text-text">Book Free Demo</h3>
                <p className="mt-2 text-sm leading-6 text-text-muted">
                  Share the basics and we will prepare a practical PMS walkthrough.
                </p>
              </div>
              <Link
                id="login"
                href="#top"
                className="shrink-0 text-sm font-extrabold text-primary transition-colors duration-200 hover:text-text focus-visible:outline-none"
              >
                Login
              </Link>
            </div>

            <form className="mt-8 grid gap-4 sm:grid-cols-2">
              {fields.map((field) => (
                <label key={field} className="grid gap-2">
                  <span className="text-sm font-extrabold text-text">{field}</span>
                  <input
                    type="text"
                    placeholder={field}
                    className="h-12 rounded-2xl border border-border bg-bg-soft px-4 text-sm text-text outline-none transition-colors duration-200 placeholder:text-text-muted focus:border-primary"
                  />
                </label>
              ))}
              <label className="grid gap-2 sm:col-span-2">
                <span className="text-sm font-extrabold text-text">Main problem</span>
                <textarea
                  placeholder="Double bookings, OTA updates, housekeeping, payments..."
                  className="min-h-28 resize-none rounded-2xl border border-border bg-bg-soft px-4 py-3 text-sm text-text outline-none transition-colors duration-200 placeholder:text-text-muted focus:border-primary"
                />
              </label>
              <button
                type="button"
                className="h-12 rounded-full bg-primary px-6 text-sm font-extrabold text-white transition-colors duration-200 hover:bg-black focus-visible:outline-none sm:col-span-2"
              >
                Request Demo
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}
