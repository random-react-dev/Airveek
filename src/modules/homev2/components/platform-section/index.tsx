"use client";

import { Check, ImageIcon } from "lucide-react";
import Image from "next/image";
import { useState, type KeyboardEvent } from "react";
import SectionHeader from "@modules/homev2/components/section-header";

type PlatformFeature = {
  id: string;
  label: string;
  title: string;
  description: string;
  bullets: string[];
  imageSrc?: string;
  imageAlt: string;
  status?: "coming-soon";
};

const platformFeatures: PlatformFeature[] = [
  {
    id: "front-desk-calendar",
    label: "Front Desk & Calendar",
    title: "Front Desk & Calendar",
    description:
      "See bookings, arrivals, departures and room status in one calendar.",
    bullets: [
      "Room-wise booking view",
      "Arrivals and departures",
      "Guest details and dues",
    ],
    imageAlt:
      "Airveek room calendar showing booking blocks, room status, arrivals and departures",
    imageSrc: "/assets/images/frontdesk.png",
  },
  {
    id: "direct-bookings",
    label: "Direct Bookings",
    title: "Direct Bookings",
    description: "Let guests check availability and book from your website.",
    bullets: [
      "Mobile-friendly booking flow",
      "Live room availability",
      "Less OTA dependency",
    ],
    imageAlt:
      "Airveek direct booking flow showing dates, rooms, rates and confirmation",
    imageSrc: "/assets/images/direct-booking.png",
  },
  {
    id: "website-builder",
    label: "Website Builder",
    title: "Website Builder",
    description: "Create a hotel website connected to your booking flow.",
    bullets: [
      "Room and property pages",
      "Photos, amenities and policies",
      "Direct booking ready",
    ],
    imageAlt:
      "Desktop and mobile preview of an Airveek-powered hotel website",
    imageSrc: "/assets/images/website-builder.png",
  },
  {
    id: "payments",
    label: "Payments",
    title: "Payments",
    description:
      "Track paid, pending and refunded amounts against each booking.",
    bullets: [
      "Stripe, Razorpay and Cashfree Payments",
      "PhonePe and Easebuzz support",
      "Advances, balances and payment history",
    ],
    imageAlt:
      "Airveek payment gateways panel showing Stripe, Razorpay, Cashfree Payments, PhonePe and Easebuzz",
    imageSrc: "/assets/images/payment.png",
  },
  {
    id: "mobile-access",
    label: "Mobile Access",
    title: "Mobile Access",
    description: "Check bookings, rooms and payments from your phone.",
    bullets: ["View reservations", "Check room status", "Role-based access"],
    imageAlt:
      "Airveek mobile interface showing arrivals, booking details and room status",
  },
  {
    id: "channel-manager",
    label: "Channel Manager",
    title: "Channel Manager",
    description: "OTA rate and availability control is planned for Airveek.",
    bullets: [
      "Connected OTA controls",
      "Planned inventory sync",
      "Booking source visibility",
    ],
    imageAlt:
      "Preview of the upcoming Airveek channel management workspace",
    status: "coming-soon",
  },
];

function ProductMedia({ feature }: { feature: PlatformFeature }) {
  const isComingSoon = feature.status === "coming-soon";

  return (
    <div className="w-full lg:w-3/5">
      <div className="relative aspect-16/10 overflow-hidden rounded-2xl bg-white shadow">
        {feature.imageSrc ? (
          <Image
            src={feature.imageSrc}
            alt={feature.imageAlt}
            fill
            sizes="(min-width: 1024px) 58vw, calc(100vw - 3rem)"
            className="object-cover"
          />
        ) : (
          <div className="flex h-full flex-col items-center justify-center bg-[radial-gradient(circle_at_top_right,_var(--color-primary-soft),_transparent_42%)] px-6 text-center sm:px-8">
            <span className="flex size-14 items-center justify-center rounded-2xl border border-primary/15 bg-primary-soft text-primary">
              <ImageIcon aria-hidden="true" className="size-6" strokeWidth={1.75} />
            </span>
            <p className="mt-5 text-sm font-semibold text-text">
              {isComingSoon
                ? "Channel Manager preview"
                : `${feature.label} product screenshot`}
            </p>
            <p className="mt-2 max-w-xs text-sm leading-6 text-text-muted">
              {isComingSoon
                ? "This feature is currently being built."
                : "Approved Airveek product media will appear here."}
            </p>
          </div>
        )}
      </div>
    </div>
  );
}

function FeatureContent({ feature }: { feature: PlatformFeature }) {
  return (
    <div className="w-full lg:w-2/5">
      <div className="flex flex-wrap items-center gap-2">
        {feature.status === "coming-soon" ? (
          <span className="mb-4 rounded-full bg-primary-soft px-2.5 py-1 text-[0.65rem] font-extrabold uppercase tracking-wider text-primary">
            Coming soon
          </span>
        ) : null}
      </div>
      <h3 className="max-w-xl text-2xl font-bold leading-tight text-text sm:text-4xl">
        {feature.title}
      </h3>
      <p className="mt-5 max-w-xl text-base leading-7 text-text-muted sm:text-lg sm:leading-8">
        {feature.description}
      </p>
      <ul className="mt-7 space-y-3">
        {feature.bullets.map((bullet) => (
          <li
            key={bullet}
            className="flex items-start gap-3 text-sm font-medium leading-6 text-text sm:text-base"
          >
            <span className="mt-0.5 flex size-5 shrink-0 items-center justify-center rounded-full bg-primary-soft text-primary">
              <Check aria-hidden="true" className="size-3.5" strokeWidth={2.5} />
            </span>
            {bullet}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default function PlatformSection() {
  const [activeId, setActiveId] = useState(platformFeatures[0].id);
  const active =
    platformFeatures.find((feature) => feature.id === activeId) ??
    platformFeatures[0];

  const handleTabKeyDown = (
    event: KeyboardEvent<HTMLButtonElement>,
    currentIndex: number,
  ) => {
    let nextIndex = currentIndex;

    if (event.key === "ArrowRight") {
      nextIndex = (currentIndex + 1) % platformFeatures.length;
    } else if (event.key === "ArrowLeft") {
      nextIndex =
        (currentIndex - 1 + platformFeatures.length) % platformFeatures.length;
    } else if (event.key === "Home") {
      nextIndex = 0;
    } else if (event.key === "End") {
      nextIndex = platformFeatures.length - 1;
    } else {
      return;
    }

    event.preventDefault();
    const nextFeature = platformFeatures[nextIndex];
    setActiveId(nextFeature.id);
    document.getElementById(`platform-tab-${nextFeature.id}`)?.focus();
  };

  return (
    <section
      id="product"
      aria-labelledby="platform-title"
      className="scroll-mt-28 bg-bg py-20 sm:py-24"
    >
      <div className="container">
        <div id="platform-title">
          <SectionHeader
            eyebrow="The Airveek Platform"
            title="Everything Your Hotel Needs"
            description="Manage bookings, rooms, payments and direct bookings without switching tools."
            align="center"
          />
        </div>

        <div className="mt-10">
          <div className="overflow-x-auto py-2">
            <div
              role="tablist"
              aria-label="Airveek platform features"
              className="mx-auto flex w-max min-w-full gap-3 sm:justify-center"
            >
              {platformFeatures.map((feature, index) => {
                const isActive = feature.id === active.id;

                return (
                  <button
                    key={feature.id}
                    id={`platform-tab-${feature.id}`}
                    type="button"
                    role="tab"
                    aria-selected={isActive}
                    aria-controls="platform-tab-panel"
                    tabIndex={isActive ? 0 : -1}
                    className={`mt-8 inline-flex h-11 items-center justify-center rounded-full border px-5 text-base font-medium transition-all duration-200 ease-out focus-visible:outline-none ${isActive
                        ? "bg-primary text-white"
                        : "border border-border bg-bg-soft text-text hover:border-primary hover:text-primary"
                      }`}
                    onClick={() => setActiveId(feature.id)}
                    onKeyDown={(event) => handleTabKeyDown(event, index)}
                  >
                    {feature.label}
                    {feature.status === "coming-soon" ? (
                      <span
                        className={`rounded-full px-2 py-0.5 text-[0.6rem] font-extrabold uppercase tracking-wider ${isActive
                            ? "bg-white/20 text-white"
                            : "bg-primary-soft text-primary"
                          }`}
                      >
                        Soon
                      </span>
                    ) : null}
                  </button>
                );
              })}
            </div>
          </div>

          <div
            id="platform-tab-panel"
            role="tabpanel"
            aria-labelledby={`platform-tab-${active.id}`}
            className="mt-6 rounded-3xl bg-bg-soft p-5 sm:p-8 xl:p-10"
          >
            <div className="flex flex-col items-center gap-8 lg:flex-row lg:gap-10 xl:gap-14">
              <FeatureContent feature={active} />
              <ProductMedia feature={active} />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
