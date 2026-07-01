import Link from "next/link";
import { Check, CircleCheckBig } from "lucide-react";
import SectionHeader from "../section-header";

type PricingPlan = {
  name: string;
  price: string;
  description: string;
  features: string[];
  cta: string;
  popular?: boolean;
};

const pricingPlans: PricingPlan[] = [
  {
    name: "Starter",
    price: "₹1,499",
    description:
      "For small properties that need a simple way to manage reservations, rooms and payments.",
    features: [
      "Reservation management",
      "Visual booking calendar",
      "Rooms, rates and guest profiles",
      "Cash and UPI payment tracking",
      "Guided property setup",
      "Standard support",
    ],
    cta: "Get Starter Pricing",
  },
  {
    name: "Growth",
    price: "₹2,999",
    description:
      "For hotel teams that need housekeeping, reports, staff access and better daily visibility.",
    features: [
      "Everything in Starter",
      "Housekeeping room readiness",
      "Occupancy, revenue and collection reports",
      "Roles and permissions",
      "Activity visibility",
      "Team training and go-live assistance",
    ],
    cta: "Get Growth Pricing",
    popular: true,
  },
  {
    name: "Custom",
    price: "₹5,999",
    description:
      "For properties that need custom workflows, integrations, migration or multi-property rollout.",
    features: [
      "Everything in Growth",
      "Property workflow review",
      "Approved custom workflows",
      "Integration scoping",
      "Data migration assessment",
      "Dedicated rollout planning",
    ],
    cta: "Discuss Your Requirements",
  },
];

export default function PricingSection() {
  return (
    <section
      id="pricing"
      aria-labelledby="pricing-title"
      className="scroll-mt-28 bg-bg-soft py-20 sm:py-24"
    >
      <div className="container">
        <SectionHeader
          eyebrow="Pricing"
          title="Airveek pricing plans"
          description="Simple monthly plans with clear options for setup, support and property-specific requirements."
          align="center"
        />

        <div className="mt-12 grid items-stretch gap-5 lg:mt-16 lg:grid-cols-3">
          {pricingPlans.map((plan) => (
            <article
              key={plan.name}
              className={`relative flex h-full flex-col overflow-hidden rounded-[28px] border p-6 pt-10 sm:p-8 sm:pt-10 ${plan.popular
                ? "border-none bg-primary text-white shadow-[0_24px_70px_rgba(0,0,0,0.16)]"
                : "border-border bg-bg text-text"
                }`}
            >
              {plan.popular ? (
                <p className="absolute left-1/2 top-0 -translate-x-1/2 rounded-b-xl bg-white px-4 py-2 text-xs font-bold uppercase tracking-[0.08em] text-black">
                  Most Popular
                </p>
              ) : null}

              <h3 className="text-2xl font-medium">{plan.name}</h3>

              <div
                className={`mt-2 border-b pb-6 ${plan.popular ? "border-white/40" : "border-border"
                  }`}
              >
                <div className="flex items-end gap-2">
                  <p className="text-4xl font-bold sm:text-4xl">{plan.price}</p>
                  <p
                    className={`pb-1 text-sm font-medium ${plan.popular ? "text-white/80" : "text-text-muted"
                      }`}
                  >
                    /month
                  </p>
                </div>
              </div>

              <p
                className={`mt-6 text-sm leading-6 sm:text-base sm:leading-7 ${plan.popular ? "text-white/85" : "text-text-muted"
                  }`}
              >
                {plan.description}
              </p>

              <ul
                className="mt-7 grid gap-4"
                aria-label={`${plan.name} plan includes`}
              >
                {plan.features.map((feature) => (
                  <li key={feature} className="flex items-start gap-3">
                    <span
                      className={`mt-0.5 flex size-5 shrink-0 items-center justify-center rounded-full ${plan.popular
                        ? "bg-white text-primary"
                        : "bg-primary-soft text-primary"
                        }`}
                    >
                      <Check
                        aria-hidden="true"
                        className="size-3"
                        strokeWidth={2.5}
                      />
                    </span>
                    <span
                      className={`text-sm leading-6 ${plan.popular ? "text-white" : "text-text"
                        }`}
                    >
                      {feature}
                    </span>
                  </li>
                ))}
              </ul>

              <Link
                href="#cta"
                className={`mt-8 inline-flex h-12 items-center justify-center rounded-full border px-5 text-sm font-medium transition-all duration-200 ease-out focus-visible:outline-none ${plan.popular
                  ? "border-white bg-white text-text hover:border-white hover:bg-primary-soft hover:text-primary"
                  : "border-border bg-bg-soft text-text hover:border-primary hover:bg-white hover:text-primary"
                  }`}
              >
                {plan.cta}
              </Link>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
