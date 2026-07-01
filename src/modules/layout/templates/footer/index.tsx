import Image from "next/image";
import Link from "next/link";

type FooterItem = {
  label: string;
  href?: string;
};

type FooterGroup = {
  title: string;
  links: ReadonlyArray<FooterItem>;
};

const footerGroups: ReadonlyArray<FooterGroup> = [
  {
    title: "Platform",
    links: [
      { label: "PMS" },
      { label: "Payments" },
      { label: "Booking Engine" },
      { label: "Channel manager" },
    ],
  },
  {
    title: "Company",
    links: [
      { label: "About Us" },
      { label: "Contact Us" },
      { label: "Customer story", href: "/#customer-story" },
      { label: "Frequently asked questions", href: "/#faq" },
    ],
  },
  {
    title: "Built for",
    links: [
      { label: "Small hotels" },
      { label: "Boutique stays" },
      { label: "Guest houses" },
      { label: "Homestays" },
    ],
  },
];

const footerNotes = [
  "30-day guided trial",
  "Practical setup support",
  "Made for Indian properties",
] as const;

export default function Footer() {
  return (
    <footer className="overflow-hidden bg-primary py-16">
      <div className="container">
        <div className="grid gap-12 lg:grid-cols-[1.35fr_2fr] lg:gap-16">
          <div className="max-w-sm">
            <Link
              href="/#top"
              className="inline-flex rounded-xl border border-border bg-white px-4 py-3 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-4 focus-visible:ring-offset-bg-soft"
              aria-label="Airveek home"
            >
              <Image
                src="/assets/images/airveek-logo.png"
                alt="Airveek"
                width={434}
                height={154}
                className="h-auto w-56"
              />
            </Link>
            <p className="mt-6 text-base leading-7 text-white">
              Powering independent properties with simpler, smarter hotel
              management.
            </p>
            <Link
              href="/#cta"
              className="mt-6 inline-flex h-12 items-center justify-center rounded-full bg-bg-soft px-4 py-2 text-sm font-medium text-text transition-all duration-200 ease-out hover:bg-white hover:text-primary focus-visible:outline-none"
            >
              Start 30 days free trial
            </Link>
          </div>

          <div className="grid gap-10 sm:grid-cols-3 sm:gap-8">
            {footerGroups.map((group) => (
              <FooterLinkGroup
                key={group.title}
                title={group.title}
                links={group.links}
              />
            ))}
          </div>
        </div>

        <div className="mt-12 border-t border-border pt-6 text-sm text-white lg:mt-14">
          <div className="flex flex-col justify-between gap-3 sm:flex-row sm:flex-wrap sm:items-center sm:gap-x-6">
            <p>&copy; {new Date().getFullYear()} Airveek. All rights reserved.</p>
            <ul
              className="flex flex-wrap gap-x-5 gap-y-2"
              aria-label="Airveek service details"
            >
              {footerNotes.map((note) => (
                <li key={note} className="flex items-center gap-2">
                  <span
                    aria-hidden="true"
                    className="size-1 rounded-full bg-white"
                  />
                  {note}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </footer>
  );
}

function FooterLinkGroup({ title, links }: FooterGroup) {
  return (
    <div>
      <h2 className="text-base font-semibold text-white">{title}</h2>
      <ul className="mt-5 grid gap-3.5">
        {links.map((item) => (
          <li key={item.label}>
            {item.href ? (
              <Link
                href={item.href}
                className="inline-flex text-sm leading-6 text-white/85 transition-colors duration-200 hover:underline focus-visible:outline-none focus-visible:text-primary"
              >
                {item.label}
              </Link>
            ) : (
              <span className="inline-flex text-sm leading-6 text-white/85">
                {item.label}
              </span>
            )}
          </li>
        ))}
      </ul>
    </div>
  );
}
