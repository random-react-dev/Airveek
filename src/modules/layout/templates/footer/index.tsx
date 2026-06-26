import Image from "next/image";
import Link from "next/link";

const footerGroups = [
  {
    title: "Product",
    links: [
      ["Front Desk PMS", "/#front-desk-pms"],
      ["Booking Calendar", "/#booking-calendar"],
      ["Channel Manager", "/#channel-manager"],
      ["Reports", "/#reports"],
    ],
  },
  {
    title: "Solutions",
    links: [
      ["Small Hotels", "/#small-hotels"],
      ["Boutique Hotels", "/#boutique-hotels"],
      ["Guest Houses", "/#guest-houses"],
      ["Service Apartments", "/#service-apartments"],
    ],
  },
  {
    title: "Company",
    links: [
      ["Integrations", "/#integrations"],
      ["Pricing", "/#pricing"],
      ["Support", "/#support"],
      ["Login", "/#login"],
    ],
  },
] as const;

export default function Footer() {
  return (
    <footer className="border-t border-border bg-bg py-12">
      <div className="container">
        <div className="grid gap-10 lg:grid-cols-[1fr_1.4fr]">
          <div>
            <Link
              href="/#top"
              className="flex shrink-0 items-center focus-visible:outline-none"
              aria-label="Airvik home"
            >
              <Image
                src="/assets/images/airveek-logo.png"
                alt="Airveek"
                width={434}
                height={154}
                className="h-auto w-44 max-w-full lg:w-56"
              />
            </Link>
            <p className="mt-4 max-w-sm text-sm leading-6 text-text-muted">
              Simple PMS software for small and medium hotels.
            </p>
          </div>

          <div className="grid gap-8 sm:grid-cols-3">
            {footerGroups.map((group) => (
              <div key={group.title}>
                <h3 className="text-sm font-extrabold uppercase text-text">
                  {group.title}
                </h3>
                <ul className="mt-4 grid gap-3">
                  {group.links.map(([label, href]) => (
                    <li key={href}>
                      <Link
                        href={href}
                        className="text-sm font-semibold text-text-muted transition-colors duration-200 hover:text-primary focus-visible:outline-none"
                      >
                        {label}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>

        <div className="mt-10 flex flex-col gap-3 border-t border-border pt-6 text-sm text-text-muted sm:flex-row sm:items-center sm:justify-between">
          <p>(c) 2026 Airvik. All rights reserved.</p>
          <p>Privacy Policy | Terms of Service</p>
        </div>
      </div>
    </footer>
  );
}
