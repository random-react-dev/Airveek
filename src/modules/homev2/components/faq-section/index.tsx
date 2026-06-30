"use client";

import SectionHeader from "@modules/homev2/components/section-header";
import { ChevronDown } from "lucide-react";
import { useState } from "react";

type Faq = {
  question: string;
  answer: string;
};

const faqs: Faq[] = [
  {
    question: "What is Airveek built for?",
    answer:
      "Airveek is built for small hotels, guesthouses and boutique properties in India that want to manage bookings, rooms, guests, payments and daily front-desk work from one simple PMS.",
  },
  {
    question: "How does Airveek simplify daily operations?",
    answer:
      "Your team can see reservations, room availability, arrivals, departures, guest details and payment status in one workflow. This reduces dependency on paper registers, WhatsApp notes and separate spreadsheets.",
  },
  {
    question: "Can we manage cash and UPI payments?",
    answer:
      "Yes. Airveek helps you record cash, UPI, advances, partial payments and pending dues against the right booking, so reception and owners can clearly see what is paid and what is still pending.",
  },
  {
    question: "Can owners and staff access it on mobile?",
    answer:
      "Yes. Airveek is mobile-friendly, so authorised owners, managers and staff can check bookings, room status and payment information from their phone without always being at the front desk.",
  },
  {
    question: "Does Airveek support direct bookings and OTAs?",
    answer:
      "Airveek supports a direct booking workflow for your property website. OTA/channel manager integration is on the roadmap, so until live connections are ready, OTA inventory should continue through your current process.",
  },
  {
    question: "How do setup, trial and pricing work?",
    answer:
      "Airveek offers a guided 30-day trial to configure your rooms, rates, booking flow, payment workflow and staff access. Monthly plans start at ₹1,499, while setup, migration or custom work is confirmed separately before you commit.",
  },
];

export default function FaqSection() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  return (
    <section id="faq" className="scroll-mt-28 bg-bg py-20 sm:py-24">
      <div className="container">
        <SectionHeader eyebrow="FAQ" title="Have questions?" align="center" />

        <div className="mx-auto mt-10 grid max-w-4xl">
          {faqs.map((faq, index) => {
            const isOpen = openIndex === index;
            const answerId = `faq-answer-${index}`;

            return (
              <div key={faq.question} className="border-b border-border py-5">
                <button
                  type="button"
                  aria-expanded={isOpen}
                  aria-controls={answerId}
                  className="flex w-full cursor-pointer items-center justify-between gap-4 text-left text-xl font-medium text-black transition-colors duration-200 hover:text-primary focus-visible:outline-none"
                  onClick={() => setOpenIndex(isOpen ? null : index)}
                >
                  <span>{faq.question}</span>
                  <ChevronDown
                    aria-hidden="true"
                    className={`size-5 shrink-0 transition-all duration-300 ${
                      isOpen
                        ? "rotate-180 text-primary"
                        : "rotate-0 text-text-muted"
                    }`}
                    strokeWidth={2}
                  />
                </button>

                <div
                  id={answerId}
                  className={`grid transition-all duration-300 ease-in-out ${
                    isOpen
                      ? "grid-rows-[1fr] opacity-100"
                      : "grid-rows-[0fr] opacity-0"
                  }`}
                >
                  <div className="overflow-hidden">
                    <p className="pt-4 text-base leading-6 text-text-muted">
                      {faq.answer}
                    </p>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
