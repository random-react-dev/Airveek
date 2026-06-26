import SectionHeader from "@modules/home/components/section-header";
import { outcomes } from "@modules/home/config/landing-page";

export default function PainPointsSection() {
  return (
    <section className="bg-bg py-20 sm:py-24">
      <div className="container">
        <div className="grid gap-12 lg:grid-cols-[0.82fr_1.18fr] lg:items-start">
          <div className="lg:sticky lg:top-28">
            <SectionHeader
              eyebrow="Why hotels switch"
              title="Less manual work. Fewer booking mistakes. Better daily control."
              description="The landing page now leads with outcomes instead of a long list of small feature cards. That matches how hotel PMS buyers compare products."
            />
          </div>

          <div className="grid gap-8">
            {outcomes.map((item, index) => (
              <article key={item.title} className="grid gap-5 border-b border-border pb-8 sm:grid-cols-[96px_1fr]">
                <div className="flex size-20 items-center justify-center rounded-full bg-primary-soft text-2xl font-extrabold text-primary">
                  0{index + 1}
                </div>
                <div>
                  <h3 className="text-3xl font-extrabold leading-tight text-text">
                    {item.title}
                  </h3>
                  <p className="mt-3 max-w-2xl text-base leading-7 text-text-muted">
                    {item.description}
                  </p>
                </div>
              </article>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
