export type VisualAsset = {
  src: string;
  alt: string;
};

export type StatItem = {
  value: string;
  label: string;
};

export type OutcomeItem = {
  title: string;
  description: string;
};

export type ProductPreview = {
  title: string;
  subtitle: string;
  badge: string;
  calendarLabel: string;
  calendarStatus: string;
  rooms: {
    room: string;
    guest: string;
    status: string;
    tone: string;
  }[];
  palette: string[];
};

export type ProductTab = {
  id: string;
  label: string;
  title: string;
  description: string;
  points: string[];
  preview: ProductPreview;
};

export type OperationItem = {
  title: string;
  description: string;
};

export type PropertyType = {
  id: string;
  title: string;
  description: string;
};

export type IntegrationColumn = {
  title: string;
  items: string[];
};

export type SupportStep = {
  title: string;
  description: string;
};

export type FaqItem = {
  question: string;
  answer: string;
};

export const heroStats: StatItem[] = [
  { value: "One", label: "calendar for bookings, rooms and payments" },
  { value: "Real-time", label: "room status for front desk and housekeeping" },
  { value: "Mobile", label: "access for owners and hotel teams" },
];

export const trustLogos = [
  {
    label: "Booking.com",
    src: "/assets/images/booking-com.svg",
  },
  {
    label: "Google",
    src: "/assets/images/google.svg",
  },
  {
    label: "Expedia",
    src: "/assets/images/expedia.svg",
  },
  {
    label: "Airbnb",
    src: "/assets/images/airbnb.svg",
  },
  {
    label: "Agoda",
    src: "/assets/images/agoda.svg",
  },
  {
    label: "Tripadvisor",
    src: "/assets/images/tripadvisor.svg",
  },
] as const;

export const outcomes: OutcomeItem[] = [
  {
    title: "Replace manual reservation work",
    description:
      "Move arrivals, stays, payments and room status into one front-desk workspace instead of scattered spreadsheets.",
  },
  {
    title: "Reduce overbooking risk",
    description:
      "Keep OTA availability, direct bookings and room holds visible before your team confirms the next booking.",
  },
  {
    title: "Keep staff moving",
    description:
      "Give owners, front desk and housekeeping a shared view of what needs attention today.",
  },
];

export const productTabs: ProductTab[] = [
  {
    id: "front-desk-pms",
    label: "Front Desk PMS",
    title: "Run daily check-ins without switching tools.",
    description:
      "See guest details, booking source, room allocation, payment status and checkout notes in one clear workspace.",
    points: ["Guest profile", "Room allocation", "Check-in and checkout"],
    preview: {
      title: "Airvik live desk",
      subtitle: "Today, 18 June",
      badge: "72% occupied",
      calendarLabel: "Room calendar",
      calendarStatus: "Synced",
      rooms: [
        { room: "101", guest: "Patel", status: "Booked", tone: "bg-primary text-white" },
        { room: "102", guest: "Walk-in", status: "Hold", tone: "bg-primary-soft text-primary" },
        { room: "201", guest: "Clean", status: "Ready", tone: "bg-bg-muted text-text" },
        { room: "202", guest: "Due", status: "Payment", tone: "bg-text text-white" },
      ],
      palette: ["bg-primary", "bg-bg-muted", "bg-bg-muted", "bg-primary-soft"],
    },
  },
  {
    id: "booking-calendar",
    label: "Booking Calendar",
    title: "Plan every room from a visual booking calendar.",
    description:
      "Track arrivals, departures, holds and stayovers from a room-wise calendar your team can scan quickly.",
    points: ["Room-wise timeline", "Booking holds", "Daily arrivals"],
    preview: {
      title: "Booking calendar",
      subtitle: "5-day room plan",
      badge: "18 arrivals",
      calendarLabel: "Availability grid",
      calendarStatus: "Live rooms",
      rooms: [
        { room: "103", guest: "Arrival", status: "Today", tone: "bg-primary text-white" },
        { room: "108", guest: "Online", status: "Reserved", tone: "bg-primary-soft text-primary" },
        { room: "205", guest: "Stayover", status: "In house", tone: "bg-text text-white" },
        { room: "301", guest: "Open", status: "Available", tone: "bg-bg-muted text-text" },
      ],
      palette: ["bg-primary-soft", "bg-primary", "bg-bg-muted", "bg-text"],
    },
  },
  {
    id: "channel-manager",
    label: "Channel Manager",
    title: "Sell on OTAs without updating each channel manually.",
    description:
      "Keep availability and rate workflows organized for OTA listings, website bookings and walk-ins.",
    points: ["OTA sync", "Rate updates", "Overbooking control"],
    preview: {
      title: "Channel manager",
      subtitle: "OTA inventory sync",
      badge: "5 channels",
      calendarLabel: "Channel status",
      calendarStatus: "No conflicts",
      rooms: [
        { room: "OTA", guest: "Booking.com", status: "Synced", tone: "bg-primary text-white" },
        { room: "WEB", guest: "Direct", status: "Open", tone: "bg-primary-soft text-primary" },
        { room: "EXP", guest: "Expedia", status: "Live", tone: "bg-bg-muted text-text" },
        { room: "MMT", guest: "MakeMyTrip", status: "Rate set", tone: "bg-text text-white" },
      ],
      palette: ["bg-primary", "bg-primary", "bg-primary-soft", "bg-bg-muted"],
    },
  },
  {
    id: "reports",
    label: "Reports",
    title: "Know what is happening before the day ends.",
    description:
      "Follow occupancy, payments, pending dues and booking sources so owners can make faster decisions.",
    points: ["Occupancy", "Payments", "Booking sources"],
    preview: {
      title: "Reports snapshot",
      subtitle: "Owner dashboard",
      badge: "Revenue view",
      calendarLabel: "Daily trends",
      calendarStatus: "Updated",
      rooms: [
        { room: "OCC", guest: "Occupancy", status: "72%", tone: "bg-primary text-white" },
        { room: "REV", guest: "Revenue", status: "Up", tone: "bg-primary-soft text-primary" },
        { room: "DUE", guest: "Pending dues", status: "6", tone: "bg-text text-white" },
        { room: "SRC", guest: "Top source", status: "OTA", tone: "bg-bg-muted text-text" },
      ],
      palette: ["bg-primary", "bg-text", "bg-primary-soft", "bg-bg-muted"],
    },
  },
  {
    id: "mobile-access",
    label: "Mobile Access",
    title: "Manage work from the desk, lobby or phone.",
    description:
      "Give owners and staff the updates they need without being tied to a single front-desk computer.",
    points: ["Owner view", "Staff tasks", "Room readiness"],
    preview: {
      title: "Mobile operations",
      subtitle: "Housekeeping status",
      badge: "9 tasks",
      calendarLabel: "Room readiness",
      calendarStatus: "Staff live",
      rooms: [
        { room: "101", guest: "Clean", status: "Ready", tone: "bg-primary text-white" },
        { room: "102", guest: "Cleaning", status: "Doing", tone: "bg-primary-soft text-primary" },
        { room: "201", guest: "Checkout", status: "Pending", tone: "bg-text text-white" },
        { room: "204", guest: "Stayover", status: "Note", tone: "bg-bg-muted text-text" },
      ],
      palette: ["bg-primary-soft", "bg-bg-muted", "bg-primary", "bg-text"],
    },
  },
];

export const operations: OperationItem[] = [
  {
    title: "Front desk",
    description:
      "Handle walk-ins, room moves, deposits, checkouts and payment follow-ups from one workflow.",
  },
  {
    title: "Housekeeping",
    description:
      "Track clean, dirty, occupied and ready rooms so staff know what to clean next.",
  },
  {
    title: "Local billing",
    description:
      "Support cash, UPI, advance payment notes and GST-ready billing flows as the product matures.",
  },
];

export const propertyTypes: PropertyType[] = [
  {
    id: "small-hotels",
    title: "Small Hotels",
    description: "Simple operations for independent hotels with lean teams.",
  },
  {
    id: "boutique-hotels",
    title: "Boutique Hotels",
    description: "Guest context, room planning and direct booking workflows.",
  },
  {
    id: "guest-houses",
    title: "Guest Houses",
    description: "Easy booking, advance payment and mobile-friendly room tracking.",
  },
  {
    id: "resorts",
    title: "Resorts",
    description: "Room readiness, packages and team coordination in one system.",
  },
  {
    id: "homestays",
    title: "Homestays",
    description: "A clean system for owner-managed properties and small teams.",
  },
  {
    id: "service-apartments",
    title: "Service Apartments",
    description: "Long stays, dues, occupancy and housekeeping visibility.",
  },
];

export const integrations: IntegrationColumn[] = [
  {
    title: "Distribution",
    items: ["Booking.com", "Agoda", "Expedia", "Airbnb", "MakeMyTrip"],
  },
  {
    title: "Payments",
    items: ["UPI", "Razorpay", "Cash", "Bank transfer", "Payment links"],
  },
  {
    title: "Operations",
    items: ["WhatsApp", "Email", "POS", "Tally", "Zoho Books"],
  },
];

export const supportSteps: SupportStep[] = [
  {
    title: "Setup",
    description: "Rooms, rates, staff roles and booking sources are mapped first.",
  },
  {
    title: "Training",
    description: "Front desk and housekeeping teams learn the daily workflows.",
  },
  {
    title: "Go live",
    description: "The team starts with bookings, room status, payments and support access.",
  },
];

export const faqs: FaqItem[] = [
  {
    question: "Is Airvik only for large hotels?",
    answer:
      "No. The landing page is focused on small and medium hotels, guest houses, boutique hotels, resorts, homestays and service apartments.",
  },
  {
    question: "Can it support OTA and direct bookings?",
    answer:
      "Yes. The core PMS story includes channel manager and booking engine workflows so teams can reduce manual channel updates.",
  },
  {
    question: "Can hotel staff use it on mobile?",
    answer:
      "Yes. Mobile access is part of the product story for owners, front desk users and housekeeping teams.",
  },
  {
    question: "Do you show pricing?",
    answer:
      "The prototype explains room-count based plans and uses a free demo flow until final pricing is confirmed.",
  },
];

export const hotelLobbyImage: VisualAsset = {
  src: "https://images.unsplash.com/photo-1551882547-ff40c63fe5fa?auto=format&fit=crop&w=1400&q=80",
  alt: "Modern hotel lobby reception desk",
};

export const hotelRoomImage: VisualAsset = {
  src: "https://images.unsplash.com/photo-1566073771259-6a8506099945?auto=format&fit=crop&w=1400&q=80",
  alt: "Small hotel property with pool and rooms",
};

export const housekeepingImage: VisualAsset = {
  src: "https://images.unsplash.com/photo-1582719508461-905c673771fd?auto=format&fit=crop&w=1200&q=80",
  alt: "Hotel room prepared for guests",
};

