import SectionHeader from "@modules/homev2/components/section-header";
import { pricingPlans } from "@modules/homev2/config/landing-page";

export default function PricingSection() {
  return (
    <section id="pricing" className="scroll-mt-28 bg-bg py-20 sm:py-24">
      <div className="container">
        <SectionHeader
          eyebrow="Pricing"
          title="Room-count based plans with a guided trial first."
          description="Until final packages are locked, the page gives pricing direction without fake numbers."
          align="center"
        />
        <div className="mt-10 grid gap-5 lg:grid-cols-3">
          {pricingPlans.map((plan) => (
            <article
              key={plan.name}
              className={`rounded-[30px] border p-6 sm:p-8 ${
                plan.highlighted
                  ? "border-primary bg-text text-white"
                  : "border-border bg-bg-soft text-text"
              }`}
            >
              <p className="text-sm font-extrabold uppercase text-primary">
                {plan.note}
              </p>
              <h3 className="mt-4 text-3xl font-extrabold">{plan.name}</h3>
              <p className="mt-3 text-4xl font-extrabold">{plan.price}</p>
              <p
                className={`mt-4 text-sm leading-6 ${
                  plan.highlighted ? "text-white/70" : "text-text-muted"
                }`}
              >
                {plan.description}
              </p>
              <div className="mt-8 grid gap-3">
                {plan.features.map((feature) => (
                  <div
                    key={feature}
                    className={`rounded-full px-4 py-3 text-sm font-extrabold ${
                      plan.highlighted
                        ? "border border-white/15"
                        : "bg-bg"
                    }`}
                  >
                    {feature}
                  </div>
                ))}
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
