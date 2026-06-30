import {
  Headset,
  Clock3,
  ShieldCheck,
  TrendingUp,
  type LucideIcon,
} from "lucide-react";
import SectionHeader from "../section-header";

type BusinessOutcome = {
  title: string;
  description: string;
  icon: LucideIcon;
};

const businessOutcomes: BusinessOutcome[] = [
  {
    title: "Grow Direct Bookings",
    description: "Let guests book from your website and reduce OTA dependency.",
    icon: TrendingUp,
  },
  {
    title: "Simplify Daily Operations",
    description:
      "Manage bookings, rooms, guests and payments from one clear workspace.",
    icon: Clock3,
  },
  {
    title: "Secure As You Grow",
    description: "Give staff the right access and keep guest data protected.",
    icon: ShieldCheck,
  },
  {
    title: "Support You Can Trust",
    description:
      "Get setup help, staff training and support when your team needs it.",
    icon: Headset,
  },
];

export default function BusinessOutcomesSection() {
  return (
    <section
      id="features"
      aria-labelledby="business-outcomes-title"
      className="scroll-mt-28 bg-bg-soft py-20 sm:py-24"
    >
      <div className="container">
        <SectionHeader
          eyebrow="The Airveek advantage"
          title="Better bookings. Less work"
          description="Airveek helps small properties improve bookings, simplify daily work and support teams from setup to everyday use."
          align="center"
        />

        <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:mt-16 lg:grid-cols-4">
          {businessOutcomes.map((outcome) => {
            const Icon = outcome.icon;

            return (
              <article
                key={outcome.title}
                className="flex flex-col rounded-2xl bg-primary-soft p-4 sm:p-8"
              >
                <span className="flex size-12 items-center rounded-lg justify-center bg-white text-primary">
                  <Icon
                    aria-hidden="true"
                    className="size-7"
                    strokeWidth={1.5}
                  />
                </span>

                <h3 className="mt-4 text-xl font-medium text-text">
                  {outcome.title}
                </h3>
                <p className="mt-4 text-sm leading-7 text-text-muted sm:text-base">
                  {outcome.description}
                </p>
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
}
