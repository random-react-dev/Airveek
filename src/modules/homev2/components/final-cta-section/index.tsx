import Link from "next/link";

export default function FinalCtaSection() {
  return (
    <section id="cta" className="scroll-mt-28 py-20 sm:py-24">
      <div className="container">
        <div className="mx-auto max-w-6xl rounded-4xl bg-black p-10 sm:p-14 lg:p-20">
          <div className="mx-auto max-w-4xl text-center">
            <p className="text-sm font-extrabold uppercase text-primary">
              Ready To Try Airveek?
            </p>
            <h2 className="mx-auto mt-4 max-w-2xl text-3xl font-bold leading-tight text-white sm:text-4xl lg:text-5xl">
              Start With Your Real Property Workflow.
            </h2>
            <p className="mx-auto mt-4 max-w-2xl text-base leading-7 text-white/70 sm:text-lg sm:leading-8">
              Start with a free trial. Add your rooms, set up your rates, and run your actual daily operations for 30 days.
            </p>
          </div>

          <div className="mt-8 flex flex-col justify-center gap-3 sm:flex-row">
            <Link
              href="#pricing"
              className="inline-flex h-12 items-center justify-center rounded-full bg-primary px-4 py-2 font-medium text-white hover:bg-bg border border-primary hover:text-primary hover:border-primary transition-all duration-200 ease-out focus-visible:outline-none"
            >
              Start 30-Day Trial
            </Link>
            <Link
              href="#product"
              className="inline-flex h-12 items-center justify-center rounded-full bg-green-400 px-4 py-2 font-medium text-black hover:bg-bg border border-none hover:text-green-400 transition-all duration-200 ease-out focus-visible:outline-none"
            >
              Talk on WhatsApp
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
