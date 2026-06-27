"use client";

import Image from "next/image";
import { useState } from "react";
import SectionHeader from "@modules/homev2/components/section-header";

type ProductWorkflow = {
  id: string;
  label: string;
  title: string;
  description: string;
  bullets: string[];
  imageSrc: string;
  imageAlt: string;
};

const productWorkflows: ProductWorkflow[] = [
  {
    id: "dashboard",
    label: "Dashboard",
    title: "Start every shift with a clear view of today.",
    description:
      "See occupancy, arrivals, departures, available rooms and pending actions together, so managers and reception know what needs attention first.",
    bullets: [
      "Live occupancy overview",
      "Today's arrivals and departures",
      "Available rooms at a glance",
    ],
    imageSrc: "",
    imageAlt: "Airveek dashboard showing today's hotel operations",
  },
  {
    id: "calendar",
    label: "Calendar",
    title: "See every room and stay on one visual calendar.",
    description:
      "Track confirmed stays, room holds, arrivals, departures and availability by date without rebuilding the plan in spreadsheets.",
    bullets: [
      "Room-wise stay timeline",
      "Booking and hold visibility",
      "Clear arrival and departure dates",
    ],
    imageSrc: "",
    imageAlt: "Airveek room booking calendar",
  },
  {
    id: "reservations",
    label: "Reservations",
    title: "Keep the complete guest stay in one place.",
    description:
      "Manage booking details, guest information, room allocation, payment balance and stay status from one connected reservation workflow.",
    bullets: [
      "Guest and booking details",
      "Multi-room stay visibility",
      "Check-in and check-out actions",
    ],
    imageSrc: "",
    imageAlt: "Airveek hotel reservations workspace",
  },
  {
    id: "payments",
    label: "Payments",
    title: "Know what is paid, pending or unmatched.",
    description:
      "Record cash and UPI payments, follow outstanding balances and attach transactions to the right booking with clearer payment visibility.",
    bullets: [
      "Cash and UPI workflows",
      "Paid and pending balances",
      "Payment attachment flow",
    ],
    imageSrc: "",
    imageAlt: "Airveek hotel payment tracking workspace",
  },
  {
    id: "housekeeping",
    label: "Housekeeping",
    title: "Keep every room ready for the next arrival.",
    description:
      "Share clean, dirty, inspected and maintenance room status between reception and housekeeping, so check-ins are not delayed by missing updates.",
    bullets: [
      "Live room readiness",
      "Clear cleaning status",
      "Front desk visibility",
    ],
    imageSrc: "",
    imageAlt: "Airveek housekeeping and room readiness view",
  },
  {
    id: "reports",
    label: "Reports",
    title: "Give owners answers without rebuilding reports.",
    description:
      "Review bookings, occupancy, revenue, collections and pending balances from the same operational data your hotel team uses every day.",
    bullets: [
      "Booking performance",
      "Occupancy and revenue",
      "Collections and pending dues",
    ],
    imageSrc: "",
    imageAlt: "Airveek hotel performance reports",
  },
];

export default function ProductProofSection() {
  const [activeId, setActiveId] = useState(productWorkflows[0].id);
  const active =
    productWorkflows.find((workflow) => workflow.id === activeId) ??
    productWorkflows[0];

  return (
    <section
      id="product"
      aria-label="Airveek product workflows"
      className="scroll-mt-28 bg-bg py-20 sm:py-24"
    >
      <div className="container">
        <SectionHeader
          eyebrow="Inside Airveek"
          title="Everything your team needs to run the day, connected."
          description="Move from today's overview to rooms, reservations, payments, housekeeping and reports without piecing updates together across spreadsheets and messages."
          align="center"
        />

        <div className="mt-10 overflow-x-auto py-2">
          <div className="mx-auto flex w-max min-w-full gap-3 sm:justify-center lg:min-w-0">
            {productWorkflows.map((workflow) => {
              const isActive = active.id === workflow.id;

              return (
                <button
                  key={workflow.id}
                  type="button"
                  aria-pressed={isActive}
                  aria-controls="product-workflow-detail"
                  className={`h-11 shrink-0 rounded-full px-5 font-medium transition-colors duration-200 focus-visible:outline-none cursor-pointer ${
                    isActive
                      ? "bg-primary text-white"
                      : "border border-border bg-bg-soft text-text hover:border-primary hover:text-primary"
                  }`}
                  onClick={() => setActiveId(workflow.id)}
                >
                  {workflow.label}
                </button>
              );
            })}
          </div>
        </div>

        <article
          id="product-workflow-detail"
          aria-live="polite"
          aria-atomic="true"
          className="mx-auto mt-8 max-w-7xl rounded-3xl bg-bg-soft p-5 shadow-sm sm:p-8 lg:p-10"
        >
          <div className="flex flex-col items-center gap-6 lg:flex-row lg:gap-8">
            <div className="w-full lg:w-1/2">
              <p className="text-xs font-extrabold uppercase tracking-widest text-primary">
                {active.label}
              </p>

              <h3 className="mt-5 text-2xl font-semibold text-text lg:text-4xl">
                {active.title}
              </h3>
              <p className="mt-5 text-base leading-7 text-text-muted sm:text-lg sm:leading-8">
                {active.description}
              </p>
              <div className="mt-9 flex flex-wrap gap-3">
                {active.bullets.map((bullet) => (
                  <div
                    key={bullet}
                    className="flex items-start gap-3 rounded-full border border-primary bg-primary-soft px-2.5 py-2"
                  >
                    <span className="text-sm font-medium leading-6 text-primary">
                      {bullet}
                    </span>
                  </div>
                ))}
              </div>
            </div>

            <div className="w-full lg:w-1/2">
              <div className="relative h-[240px] overflow-hidden rounded-2xl bg-bg sm:h-[320px] lg:h-[360px] xl:h-[420px]">
                {active.imageSrc ? (
                  <Image
                    src={active.imageSrc}
                    alt={active.imageAlt}
                    fill
                    sizes="(min-width: 1024px) 48vw, calc(100vw - 3rem)"
                    className="object-cover"
                  />
                ) : null}
              </div>
            </div>
          </div>
        </article>
      </div>
    </section>
  );
}
