import SectionHeader from "@modules/home/components/section-header";
import { integrations } from "@modules/home/config/landing-page";

export default function IntegrationsSection() {
  return (
    <section id="integrations" className="scroll-mt-28 bg-bg py-20 sm:py-24">
      <div className="container">
        <div className="grid gap-12 lg:grid-cols-[0.82fr_1.18fr] lg:items-center">
          <SectionHeader
            eyebrow="Integrations"
            title="Your PMS should fit into the hotel tools you already use."
            description="Instead of showing fake partner badges, this prototype groups the integrations hotel owners usually ask about first."
          />

          <div className="rounded-[32px] border border-border bg-bg-soft p-4 sm:p-6">
            <div className="grid gap-4 md:grid-cols-3">
              {integrations.map((column) => (
                <div key={column.title} className="rounded-[24px] bg-bg p-5">
                  <h3 className="text-lg font-extrabold text-text">{column.title}</h3>
                  <div className="mt-5 grid gap-2">
                    {column.items.map((item) => (
                      <div key={item} className="rounded-full border border-border px-3 py-2 text-sm font-bold text-text-muted">
                        {item}
                      </div>
                    ))}
                  </div>
                </div>
              ))}
            </div>
            <div className="mt-5 rounded-[24px] bg-primary-soft p-5 text-sm font-bold leading-6 text-primary">
              Real provider logos and certification badges should be added only after support is confirmed.
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
