import SectionHeader from "@modules/homev2/components/section-header";
import { faqs } from "@modules/homev2/config/landing-page";

export default function FaqSection() {
  return (
    <section id="faq" className="scroll-mt-28 bg-bg py-20 sm:py-24">
      <div className="container">
        <SectionHeader
          eyebrow="FAQ"
          title="Have questions?"
          align="center"
        />
        <div className="mx-auto mt-10 grid max-w-4xl">
          {faqs.map((faq) => (
            <details key={faq.question} className="group py-5 border-b border-border">
              <summary className="cursor-pointer list-none text-xl font-medium text-black focus-visible:outline-none hover:text-primary transition-colors duration-200">
                <span className="flex items-center justify-between gap-4">
                  {faq.question}
                </span>
              </summary>
              <p className="mt-4 text-base leading-6 text-text-muted">
                {faq.answer}
              </p>
            </details>
          ))}
        </div>
      </div>
    </section>
  );
}
