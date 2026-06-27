import { coreFeatures } from "@modules/homev2/config/landing-page";

export default function PinnedFeaturesSection() {
  return (
    <section
      id="features"
      aria-labelledby="pinned-features-title"
      className="scroll-mt-28 bg-bg py-20 sm:py-24"
    >
      <div className="container">
        <div className="max-w-3xl">
          <p className="text-sm font-bold uppercase text-primary">
            Pinned features
          </p>
          <h2
            id="pinned-features-title"
            className="mt-3 text-3xl font-extrabold leading-tight text-text sm:text-4xl lg:text-5xl"
          >
            Built for every workflow in your hotel.
          </h2>
          <p className="mt-4 max-w-2xl text-base leading-7 text-text-muted sm:text-lg">
            From front desk to owners, Airveek keeps the most important hotel
            operations visible, simple and ready for the 30-day trial.
          </p>
        </div>

        <div className="mt-10 grid grid-cols-1 gap-4 sm:mt-12 sm:grid-cols-2 sm:gap-5 lg:mt-16 lg:grid-cols-3 lg:gap-6 xl:grid-cols-4">
          {coreFeatures.map((feature) => (
            <article
              key={feature.title}
              className="flex min-h-[230px] flex-col rounded-[8px] bg-bg-soft p-6 transition-colors duration-200 hover:bg-primary-soft sm:min-h-[250px] sm:p-8 lg:min-h-[270px]"
            >
              <h3 className="text-2xl font-extrabold leading-tight text-text">
                {feature.title}
              </h3>
              <p className="mt-5 text-base leading-7 text-text-muted">
                {feature.description}
              </p>
              <div className="mt-auto pt-8">
                <button
                  type="button"
                  className="inline-flex h-11 items-center justify-center rounded-full border border-primary bg-transparent px-5 text-xs font-extrabold uppercase text-primary transition-colors duration-200 focus-visible:outline-none"
                >
                  Learn more
                </button>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
