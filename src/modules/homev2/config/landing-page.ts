export type Metric = {
  value: string;
  label: string;
};

export type Feature = {
  title: string;
  description: string;
};

export type ProductTour = {
  id: string;
  imageSrc?: string;
  label: string;
  title: string;
  description: string;
  bullets: string[];
};

export type PricingPlan = {
  name: string;
  note: string;
  price: string;
  description: string;
  features: string[];
  highlighted?: boolean;
};

export type Faq = {
  question: string;
  answer: string;
};

export const heroMetrics: Metric[] = [
  { value: "30 days", label: "guided trial for real hotel workflows" },
  { value: "One view", label: "bookings, rooms, payments and staff work" },
  { value: "Custom", label: "workflow support after trial review" },
];

export const productTours: ProductTour[] = [
  {
    id: "dashboard",
    imageSrc: "",
    label: "Dashboard",
    title: "Know today's operation before the front desk gets busy.",
    description:
      "See occupancy, arrivals, departures, available rooms and urgent notes from a clean owner and manager view.",
    bullets: ["Occupancy snapshot", "Today arrivals", "Available rooms"],
  },
  {
    id: "calendar",
    imageSrc: "",
    label: "Calendar",
    title: "Plan every room from a visual booking calendar.",
    description:
      "Track room holds, confirmed stays, arrivals, departures and room availability without jumping between spreadsheets.",
    bullets: ["Room-wise dates", "Booking holds", "Stayover visibility"],
  },
  {
    id: "reservations",
    imageSrc: "",
    label: "Reservations",
    title: "Manage bookings, guests, balances and stay status together.",
    description:
      "Search bookings, filter by status, handle multi-room stays and keep check-in or check-out actions close to the reservation.",
    bullets: ["Guest profile", "Payment balance", "Check-in actions"],
  },
  {
    id: "payments",
    imageSrc: "",
    label: "Payments",
    title: "Track paid, pending and unmatched payments clearly.",
    description:
      "Support UPI, QR, cash and bank-style transaction workflows so reception and owners can see where money is stuck.",
    bullets: ["UPI and cash", "Payment attach", "Daily collection"],
  },
  {
    id: "housekeeping",
    imageSrc: "",
    label: "Housekeeping",
    title: "Keep room readiness visible for front desk and staff.",
    description:
      "Mark rooms clean, dirty, inspected or in maintenance so the next check-in does not wait on hidden staff updates.",
    bullets: ["Room status", "Staff work", "Ready rooms"],
  },
  {
    id: "reports",
    imageSrc: "",
    label: "Reports",
    title: "Give owners useful reports without manual work.",
    description:
      "Follow bookings, occupancy, revenue, payment collections and pending balances from the same PMS data.",
    bullets: ["Bookings report", "Occupancy", "Revenue"],
  },
];

export const coreFeatures: Feature[] = [
  { title: "Front desk PMS", description: "Create, search, update and manage bookings from one daily workspace." },
  { title: "Booking calendar", description: "Scan rooms, dates, holds, arrivals and stayovers in a visual calendar." },
  { title: "Guest profiles", description: "Keep guest details, booking context and follow-up notes attached to the stay." },
  { title: "Room and rate setup", description: "Manage room types, physical rooms, amenities, rates and closures." },
  { title: "Payments and dues", description: "Record cash, UPI, payment requests, attached transactions and balances." },
  { title: "Housekeeping", description: "Track clean, dirty, inspected and maintenance room status for staff work." },
  { title: "Reports", description: "View booking, occupancy, revenue and owner-facing operational summaries." },
  { title: "Roles and permissions", description: "Give owners, managers, reception and housekeeping the right access." },
  { title: "Activity logs", description: "Keep important operational actions visible for accountability." },
  { title: "Custom workflows", description: "Use the trial to identify what should be adapted for your property." },
  { title: "Direct booking ready", description: "Prepare hotel website booking flows around PMS availability." },
  { title: "Channel roadmap", description: "Build toward OTA mapping and sync after core inventory is stable." },
];

export const comparisonRows = [
  ["Setup", "Self-managed and slow", "Flexible but manual", "Guided setup with rooms, rates and staff roles"],
  ["Daily use", "Can feel heavy for small teams", "Easy until bookings grow", "Focused on front desk, payments and rooms"],
  ["Payments", "Often generic", "Hard to match", "UPI, cash and attach workflows"],
  ["Customization", "Usually expensive or rigid", "Anything is possible but fragile", "Scoped custom features after trial"],
  ["Owner visibility", "Available but complex", "Manual reports", "Dashboard, reports and pending dues"],
] as const;

export const pricingPlans: PricingPlan[] = [
  {
    name: "Starter",
    note: "Small hotel trial",
    price: "Talk to us",
    description: "For independent hotels that need booking, room and payment basics.",
    features: ["30-day guided trial", "Core PMS workflows", "Room-count based pricing", "Setup support"],
  },
  {
    name: "Growth",
    note: "Recommended",
    price: "Room based",
    description: "For properties that need staff workflows, reports and payment visibility.",
    features: ["Everything in Starter", "Housekeeping status", "Reports and owner view", "Priority workflow review"],
    highlighted: true,
  },
  {
    name: "Custom",
    note: "Multi-property",
    price: "Custom quote",
    description: "For hotels that need integrations, custom screens or multi-property rollout.",
    features: ["Custom feature scope", "Integration planning", "Advanced roles", "Dedicated onboarding"],
  },
];

export const faqs: Faq[] = [
  {
    question: "What happens in the 30-day trial?",
    answer:
      "We map your rooms, booking sources, staff roles and payment process, then help your team test Airveek with a real daily workflow.",
  },
  {
    question: "Is Airveek only for Sahajanand Wellness?",
    answer:
      "No. Sahajanand Wellness is the first workflow foundation. Airveek is being shaped as a multi-client PMS for many hotel types.",
  },
  {
    question: "Can we request custom features?",
    answer:
      "Yes. Trial feedback is used to scope property-specific features such as reports, invoice formats, approval flows or booking rules.",
  },
  {
    question: "Does it support OTA channel manager sync?",
    answer:
      "The landing should position OTA sync as a roadmap and connection-ready architecture until live OTA approvals and integrations are complete.",
  },
  {
    question: "Is pricing fixed?",
    answer:
      "Pricing should be room-count and scope based until final packages are confirmed. The trial gives enough context for a fair quote.",
  },
];




