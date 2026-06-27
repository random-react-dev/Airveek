import Link from "next/link";
import {
  History,
  Settings2,
  ShieldCheck,
  UserRoundKey,
  type LucideIcon,
} from "lucide-react";

type SecurityControl = {
  title: string;
  description: string;
  icon: LucideIcon;
};

const securityControls: SecurityControl[] = [
  {
    title: "Role-based access",
    description:
      "Give owners, managers, reception and housekeeping access based on their responsibilities.",
    icon: UserRoundKey,
  },
  {
    title: "Activity history",
    description:
      "Review important operational actions when a booking, payment, room or admin record needs follow-up.",
    icon: History,
  },
  {
    title: "Guided role setup",
    description:
      "Map staff responsibilities during onboarding so each team starts with the access it needs.",
    icon: Settings2,
  },
];

const hotelRoles = ["Owners", "Managers", "Reception", "Housekeeping"] as const;

export default function SecurityDataControlSection() {
  return (
    <section
      id="security"
      aria-labelledby="security-title"
      className="scroll-mt-28 bg-bg py-20 sm:py-24"
    >
      <div className="container">
        <div className="overflow-hidden rounded-[32px] bg-black text-white">
          <div className="grid gap-10 px-6 py-10 sm:px-10 sm:py-12 lg:grid-cols-[1.05fr_0.95fr] lg:items-center lg:gap-16 lg:px-14 lg:py-16">
            <div className="max-w-2xl">
              <p className="text-sm font-bold uppercase text-primary">
                Security and data control
              </p>
              <h2
                id="security-title"
                className="mt-4 text-3xl font-bold leading-tight sm:text-4xl lg:text-5xl"
              >
                Control who can see and change what.
              </h2>
              <p className="mt-5 max-w-xl text-base leading-7 text-white/70 sm:text-lg sm:leading-8">
                Airveek helps hotel owners assign the right access to each team
                and keep important operational actions visible without relying
                on shared responsibility.
              </p>
            </div>

            <div className="rounded-[24px] border border-white/10 bg-white/[0.06] p-6 sm:p-8">
              <span className="flex size-12 items-center justify-center rounded-2xl bg-primary text-white">
                <ShieldCheck
                  aria-hidden="true"
                  className="size-6"
                  strokeWidth={1.8}
                />
              </span>
              <h3 className="mt-6 text-2xl font-bold">
                Clear access. Clear responsibility.
              </h3>
              <p className="mt-3 text-sm leading-6 text-white/65 sm:text-base sm:leading-7">
                Configure practical access around the people who run your
                property every day.
              </p>
              <ul className="mt-6 flex flex-wrap gap-2" aria-label="Hotel team roles">
                {hotelRoles.map((role) => (
                  <li
                    key={role}
                    className="rounded-full border border-white/15 bg-black/20 px-4 py-2 text-sm font-medium text-white/85"
                  >
                    {role}
                  </li>
                ))}
              </ul>
            </div>
          </div>

          <div className="grid divide-y divide-white/10 border-t border-white/10 md:grid-cols-3 md:divide-x md:divide-y-0">
            {securityControls.map((control) => {
              const Icon = control.icon;

              return (
                <article key={control.title} className="p-6 sm:p-8 lg:p-10">
                  <span className="flex size-11 items-center justify-center rounded-2xl bg-white/10 text-primary">
                    <Icon
                      aria-hidden="true"
                      className="size-5"
                      strokeWidth={1.8}
                    />
                  </span>
                  <h3 className="mt-5 text-xl font-bold">{control.title}</h3>
                  <p className="mt-3 text-sm leading-6 text-white/65 sm:text-base sm:leading-7">
                    {control.description}
                  </p>
                </article>
              );
            })}
          </div>

          <div className="flex flex-col gap-5 border-t border-white/10 bg-white/[0.04] px-6 py-7 sm:px-10 lg:flex-row lg:items-center lg:justify-between lg:px-14">
            <div>
              <p className="text-lg font-bold">Review access in your demo.</p>
              <p className="mt-1 text-sm leading-6 text-white/60">
                We&apos;ll map Airveek roles to the way your hotel team actually
                works.
              </p>
            </div>
            <Link
              href="#cta"
              className="inline-flex h-12 items-center justify-center rounded-full bg-primary px-7 font-medium text-white transition-colors duration-200 hover:bg-white hover:text-black focus-visible:outline-none"
            >
              Book a Demo
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
