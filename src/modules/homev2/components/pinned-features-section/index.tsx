import {
  BedDouble,
  ChartNoAxesCombined,
  ConciergeBell,
  UserRoundKey,
  Sparkles,
  Wallet,
  type LucideIcon,
} from "lucide-react";

type WorkflowPillar = {
  title: string;
  description: string;
  icon: LucideIcon;
};

const workflowPillars: WorkflowPillar[] = [
  {
    title: "Front Desk & Reservations",
    description:
      "Create and update bookings, keep guest details close, assign rooms, and move smoothly through check-in and check-out.",
    icon: ConciergeBell,
  },
  {
    title: "Rooms & Rates",
    description:
      "Manage room types, physical rooms, availability, rates and closures from one operational setup.",
    icon: BedDouble,
  },
  {
    title: "Payments",
    description:
      "Record cash and UPI payments, follow outstanding balances and keep invoice workflows tied to the stay.",
    icon: Wallet,
  },
  {
    title: "Housekeeping",
    description:
      "Share clean, dirty, inspected and maintenance status so reception knows which rooms are ready.",
    icon: Sparkles,
  },
  {
    title: "Reports & Owner View",
    description:
      "Monitor bookings, occupancy, revenue, collections and pending dues from the same daily data.",
    icon: ChartNoAxesCombined,
  },
  {
    title: "Roles & Accountability",
    description:
      "Give each team the right access and keep important operational actions visible in activity history.",
    icon: UserRoundKey,
  },
];

export default function PinnedFeaturesSection() {
  return (
    <section
      id="features"
      aria-labelledby="core-workflows-title"
      className="scroll-mt-28 bg-black py-20 sm:py-24"
    >
      <div className="container">
        <div className="flex flex-col justify-between gap-4 lg:flex-row lg:items-center lg:gap-10">
          <div className="w-full lg:w-3/5">
            <p className="text-sm font-bold uppercase text-primary">
              Core PMS workflows
            </p>
            <h2
              id="core-workflows-title"
              className="mt-4 max-w-lg text-3xl font-bold leading-tight text-white sm:text-4xl lg:text-5xl"
            >
              Six core workflows. One clear PMS.
            </h2>
          </div>

          <div className="w-full lg:w-2/5">
            <p className=" text-base leading-7 text-white sm:text-lg">
              Airveek connects the daily work that keeps an independent hotel
              moving, without the weight and complexity of an enterprise system.
            </p>
          </div>
        </div>

        <div className="mt-12 grid gap-8 sm:grid-cols-2 lg:mt-16 lg:grid-cols-3 lg:gap-12">
          {workflowPillars.map((pillar) => {
            const Icon = pillar.icon;

            return (
              <article
                key={pillar.title}
                className="flex flex-col rounded-lg border border-black/5 bg-bg p-4"
              >
                <span className="flex size-11 items-center justify-center text-text">
                  <Icon aria-hidden="true" className="size-7" strokeWidth={1.5} />
                </span>

                <h3 className="mt-4 text-xl font-semibold text-text">
                  {pillar.title}
                </h3>
                <p className="mt-4 text-sm leading-6 text-text-muted sm:text-base sm:leading-7">
                  {pillar.description}
                </p>
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
}
