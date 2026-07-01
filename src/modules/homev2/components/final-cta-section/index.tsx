import Link from "next/link";

export default function FinalCtaSection() {
  return (
    <section id="cta" className="scroll-mt-28 py-20 sm:py-24">
      <div className="container">
        <div className="relative mx-auto max-w-6xl overflow-hidden rounded-4xl  bg-[radial-gradient(circle_at_0%_0%,_rgba(241,95,34,0.24),_transparent_36%),radial-gradient(circle_at_100%_100%,_rgba(255,184,148,0.3),_transparent_40%),linear-gradient(135deg,_#fff9f5_0%,_#ffece2_48%,_#f5eee7_100%)] p-10 sm:p-14 lg:p-20">
          
          <div className="relative mx-auto max-w-4xl text-center">
            <p className="text-sm font-extrabold uppercase text-primary">
              Ready To Try Airveek?
            </p>
            <h2 className="mx-auto mt-4 max-w-2xl text-3xl font-bold leading-tight text-text sm:text-4xl lg:text-5xl">
              Start With Your Real Property Workflow.
            </h2>
            <p className="mx-auto mt-4 max-w-2xl text-base leading-7 text-text-muted sm:text-lg sm:leading-8">
              Start with a free trial. Add your rooms, set up your rates, and run
              your actual daily operations for 30 days.
            </p>
          </div>

          <div className="relative mt-8 flex flex-col justify-center gap-3 sm:flex-row">
            <Link
              href="#pricing"
              className="inline-flex h-12 items-center justify-center rounded-full border border-primary bg-primary px-5 py-2 font-medium text-white transition-all duration-200 ease-out hover:bg-bg hover:text-primary focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2 focus-visible:ring-offset-primary-soft"
            >
              Start 30-Day Trial
            </Link>
            <Link
              href="#product"
              className="inline-flex h-12 items-center justify-center rounded-full border border-green-400 bg-green-400 px-5 py-2 font-medium text-black transition-all duration-200 ease-out hover:bg-bg hover:text-green-600 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-green-500 focus-visible:ring-offset-2 focus-visible:ring-offset-primary-soft"
            >
              Talk on WhatsApp
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
