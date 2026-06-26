import Image from "next/image";
import SectionHeader from "@modules/home/components/section-header";
import { housekeepingImage, operations } from "@modules/home/config/landing-page";

export default function MobileHousekeepingSection() {
  return (
    <section className="bg-bg py-20 sm:py-24">
      <div className="container">
        <div className="grid gap-12 lg:grid-cols-[0.95fr_1.05fr] lg:items-center">
          <div className="relative">
            <Image
              src={housekeepingImage.src}
              alt={housekeepingImage.alt}
              width={1200}
              height={900}
              className="h-[520px] w-full rounded-[34px] object-cover"
            />
            <div className="absolute -bottom-6 left-6 right-6 rounded-[28px] border border-border bg-bg p-5 shadow-[0_22px_70px_rgba(0,0,0,0.16)] sm:left-auto sm:w-80">
              <p className="text-sm font-extrabold text-text">Mobile room status</p>
              <div className="mt-4 grid gap-3">
                {["101 Ready", "102 Cleaning", "201 Check-out", "204 Stayover"].map((item, index) => (
                  <div key={item} className="flex items-center justify-between rounded-2xl bg-bg-soft p-3">
                    <span className="text-sm font-bold text-text">{item}</span>
                    <span className={`size-3 rounded-full ${index === 0 ? "bg-primary" : "bg-border"}`} />
                  </div>
                ))}
              </div>
            </div>
          </div>

          <div id="mobile-access" className="scroll-mt-28">
            <SectionHeader
              eyebrow="Operations"
              title="Front desk, housekeeping and local billing in one rhythm."
              description="This section replaces multiple small cards with a clearer operational story and a real hotel-room visual."
            />
            <div className="mt-8 grid gap-6">
              {operations.map((operation) => (
                <article key={operation.title} className="border-l-4 border-primary pl-5">
                  <h3 className="text-2xl font-extrabold text-text">{operation.title}</h3>
                  <p className="mt-2 max-w-xl text-base leading-7 text-text-muted">
                    {operation.description}
                  </p>
                </article>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
