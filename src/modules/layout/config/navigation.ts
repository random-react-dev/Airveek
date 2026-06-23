export type HeaderLink = {
  label: string;
  href: `/${"" | `#${string}`}`;
};

export type DropdownName = "features" | "solutions";

export type HeaderDropdown = {
  name: DropdownName;
  label: string;
  heading?: string;
  links: HeaderLink[];
};

export const primaryLinks: HeaderLink[] = [
  { label: "Integrations", href: "/#integrations" },
  { label: "Pricing", href: "/#pricing" },
  { label: "Support", href: "/#support" },
];

export const featureLinks: HeaderLink[] = [
  { label: "Front Desk PMS", href: "/#front-desk-pms" },
  { label: "Booking Calendar", href: "/#booking-calendar" },
  { label: "Channel Manager", href: "/#channel-manager" },
  { label: "Reports", href: "/#reports" },
  { label: "Mobile Access", href: "/#mobile-access" },
];

export const solutionLinks: HeaderLink[] = [
  { label: "Small Hotels", href: "/#small-hotels" },
  { label: "Boutique Hotels", href: "/#boutique-hotels" },
  { label: "Guest Houses", href: "/#guest-houses" },
  { label: "Resorts", href: "/#resorts" },
  { label: "Homestays", href: "/#homestays" },
  { label: "Service Apartments", href: "/#service-apartments" },
];

export const navigationDropdowns: HeaderDropdown[] = [
  {
    name: "features",
    label: "Features",
    heading: "Features",
    links: featureLinks,
  },
  {
    name: "solutions",
    label: "Solutions",
    heading: "Property type",
    links: solutionLinks,
  },
];

export const actionLinks = {
  login: "/#login",
  demo: "/#demo",
} as const;

