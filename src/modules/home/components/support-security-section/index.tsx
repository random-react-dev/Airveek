import SectionHeader from "@modules/home/components/section-header";
import { faqs, supportSteps } from "@modules/home/config/landing-page";

export default function SupportSecuritySection() {
  return (
    <section id="support" className="scroll-mt-28 bg-bg py-20 sm:py-24">
      <div className="container">
        <div className="grid gap-12 lg:grid-cols-[0.9fr_1.1fr] lg:items-start">
          <div>
            <SectionHeader
              eyebrow="Switching support"
              title="A PMS rollout should feel clear before your team starts."
              description="Professional PMS pages answer migration and support concerns before the final CTA. This section keeps onboarding, training and FAQ together."
            />

            <div className="mt-10 grid gap-6">
              {supportSteps.map((step, index) => (
                <article key={step.title} className="grid gap-4 sm:grid-cols-[72px_1fr]">
                  <div className="flex size-14 items-center justify-center rounded-full bg-primary text-sm font-extrabold text-white">
                    0{index + 1}
                  </div>
                  <div>
                    <h3 className="text-2xl font-extrabold text-text">{step.title}</h3>
                    <p className="mt-2 text-base leading-7 text-text-muted">
                      {step.description}
                    </p>
                  </div>
                </article>
              ))}
            </div>
          </div>

          <div className="rounded-[32px] border border-border bg-bg-soft p-4 sm:p-6">
            <p className="px-2 pb-4 text-sm font-extrabold uppercase text-primary">
              Common questions
            </p>
            <div className="grid gap-3">
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
                  <p className="mt-4 text-sm leading-6 text-text-muted">{faq.answer}</p>
                </details>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
