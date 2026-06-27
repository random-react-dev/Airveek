import SectionHeader from "@modules/homev2/components/section-header";
import { faqs } from "@modules/homev2/config/landing-page";

export default function FaqSection() {
  return (
    <section id="faq" className="scroll-mt-28 bg-bg-muted py-20 sm:py-24">
      <div className="container">
        <SectionHeader
          eyebrow="FAQ"
          title="Answer the questions buyers ask before starting a PMS trial."
          align="center"
        />
        <div className="mx-auto mt-10 grid max-w-4xl gap-3">
          {faqs.map((faq) => (
            <details key={faq.question} className="group rounded-[22px] bg-bg p-5">
              <summary className="cursor-pointer list-none text-base font-extrabold text-text focus-visible:outline-none">
                <span className="flex items-center justify-between gap-4">
                  {faq.question}
                  <span className="text-xl text-primary transition-transform duration-200 group-open:rotate-45">
                    +
                  </span>
                </span>
              </summary>
              <p className="mt-4 text-sm leading-6 text-text-muted">
                {faq.answer}
              </p>
            </details>
          ))}
        </div>
      </div>
    </section>
  );
}
