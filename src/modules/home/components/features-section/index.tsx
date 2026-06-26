"use client";

import { useState } from "react";
import DashboardPreview from "@modules/home/components/dashboard-preview";
import SectionHeader from "@modules/home/components/section-header";
import { productTabs, type ProductTab } from "@modules/home/config/landing-page";

export default function FeaturesSection() {
  const [activeTabId, setActiveTabId] = useState<ProductTab["id"]>(
    productTabs[0].id,
  );

  const activeTab =
    productTabs.find((tab) => tab.id === activeTabId) ?? productTabs[0];

  return (
    <section id="product-tour" className="bg-bg-muted py-16 sm:py-20 lg:py-24">
      <div className="container">
        <SectionHeader
          eyebrow="Product tour"
          title="One system. One login. The workflows your hotel uses every day."
          description="Choose a workflow to see how the content and PMS preview changes for each core module."
          align="center"
        />

        <div className="mt-10 overflow-x-auto pb-2">
          <div
            role="tablist"
            aria-label="Product tour modules"
            className="mx-auto flex w-max min-w-full justify-start gap-4 px-1 sm:justify-center lg:min-w-0"
          >
            {productTabs.map((tab) => {
              const isActive = activeTab.id === tab.id;

              return (
                <button
                  id={tab.id}
                  key={tab.id}
                  type="button"
                  role="tab"
                  aria-selected={isActive}
                  aria-controls={`${tab.id}-panel`}
                  className={`scroll-mt-28 inline-flex h-12 shrink-0 cursor-pointer items-center gap-2.5 rounded-full px-6 py-2 text-base font-medium transition-all duration-200 focus-visible:outline-none ${
                    isActive
                      ? "bg-primary text-white"
                      : "bg-bg text-text hover:text-primary"
                  }`}
                  onClick={() => setActiveTabId(tab.id)}
                >
                  {tab.label}
                </button>
              );
            })}
          </div>
        </div>

        <div
          id={`${activeTab.id}-panel`}
          role="tabpanel"
          aria-labelledby={activeTab.id}
          className="mt-8 overflow-hidden rounded-[28px] border border-border bg-bg shadow-[0_24px_90px_rgba(0,0,0,0.08)]"
        >
          <div className="grid gap-8 p-5 sm:p-8 lg:p-10 xl:grid-cols-[0.82fr_1.18fr] xl:items-center">
            <div>
              <p className="text-sm font-extrabold uppercase text-primary">
                {activeTab.label}
              </p>
              <h3 className="mt-3 text-3xl font-extrabold leading-tight text-text sm:text-4xl">
                {activeTab.title}
              </h3>
              <p className="mt-4 max-w-2xl text-base leading-7 text-text-muted">
                {activeTab.description}
              </p>
              <ul className="mt-8 grid gap-3">
                {activeTab.points.map((point) => (
                  <li
                    key={point}
                    className="flex items-center gap-3 text-sm font-bold text-text"
                  >
                    <span className="size-2.5 rounded-full bg-primary" />
                    {point}
                  </li>
                ))}
              </ul>
            </div>

            <DashboardPreview preview={activeTab.preview} />
          </div>
        </div>
      </div>
    </section>
  );
}