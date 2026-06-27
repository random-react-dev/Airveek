"use client";

import { useState } from "react";
import Image from "next/image";
import SectionHeader from "@modules/homev2/components/section-header";
import { productTours } from "@modules/homev2/config/landing-page";

export default function ProductProofSection() {
  const [activeId, setActiveId] = useState(productTours[0].id);
  const active = productTours.find((tour) => tour.id === activeId) ?? productTours[0];

  return (
    <section id="product" className="scroll-mt-28 bg-bg py-20 sm:py-24">
      <div className="container">
        <SectionHeader
          eyebrow="Product proof"
          title="Show buyers the actual workflows they will use every day."
          description="Explore how Airveek keeps daily hotel workflows clear, connected and easy for every team."
          align="center"
        />

        <div className="mt-10 overflow-x-auto pb-2">
          <div className="mx-auto flex w-max min-w-full gap-3 px-1 sm:justify-center lg:min-w-0">
            {productTours.map((tour) => {
              const isActive = active.id === tour.id;

              return (
                <button
                  key={tour.id}
                  type="button"
                  className={`h-11 shrink-0 rounded-full px-5 text-sm font-extrabold transition-colors duration-200 focus-visible:outline-none ${
                    isActive
                      ? "bg-primary text-white"
                      : "border border-border bg-bg-soft text-text hover:border-primary hover:text-primary"
                  }`}
                  onClick={() => setActiveId(tour.id)}
                >
                  {tour.label}
                </button>
              );
            })}
          </div>
        </div>

        <div className="mt-8 grid gap-8 rounded-[34px] border border-border bg-bg-soft p-5 shadow-[0_24px_90px_rgba(0,0,0,0.07)] sm:p-8 lg:grid-cols-[0.9fr_1.1fr] lg:items-center lg:p-10">
          <div>
            <p className="text-sm font-extrabold uppercase text-primary">
              {active.label}
            </p>
            <h3 className="mt-3 text-3xl font-extrabold leading-tight text-text sm:text-4xl">
              {active.title}
            </h3>
            <p className="mt-4 text-base leading-7 text-text-muted">
              {active.description}
            </p>
            <div className="mt-8 grid gap-3">
              {active.bullets.map((bullet) => (
                <div
                  key={bullet}
                  className="flex items-center gap-3 text-sm font-bold text-text"
                >
                  <span className="size-2.5 rounded-full bg-primary" />
                  {bullet}
                </div>
              ))}
            </div>
          </div>

          <div className="relative aspect-[16/10] w-full overflow-hidden rounded-[8px] border border-border bg-bg">
            {active.imageSrc ? (
              <Image
                src={active.imageSrc}
                alt={`Airveek ${active.label} interface`}
                fill
                sizes="(min-width: 1024px) 52vw, (min-width: 640px) calc(100vw - 8rem), calc(100vw - 3rem)"
                className="object-contain object-top"
              />
            ) : null}
          </div>
        </div>
      </div>
    </section>
  );
}
