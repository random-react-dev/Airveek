import Image from "next/image";
import SectionHeader from "@modules/home/components/section-header";
import { hotelRoomImage, propertyTypes } from "@modules/home/config/landing-page";

export default function PropertyTypesSection() {
  return (
    <section className="bg-bg-soft py-20 sm:py-24">
      <div className="container">
        <div className="grid gap-10 lg:grid-cols-[0.9fr_1.1fr] lg:items-end">
          <SectionHeader
            eyebrow="Solutions"
            title="A PMS built for smaller properties, not only hotel chains."
            description="Property-fit sections work well on PMS sites because visitors quickly decide whether the software is made for their business type."
          />
          <Image
            src={hotelRoomImage.src}
            alt={hotelRoomImage.alt}
            width={1400}
            height={900}
            className="h-72 w-full rounded-[30px] object-cover lg:h-96"
          />
        </div>

        <div className="mt-8 grid gap-3 md:grid-cols-2 xl:grid-cols-6">
          {propertyTypes.map((property, index) => {
            const isDark = index === 0 || index === 3;

            return (
              <article
                id={property.id}
                key={property.id}
                className={`scroll-mt-28 rounded-[24px] border border-border p-5 xl:col-span-2 ${
                  isDark ? "bg-text text-white" : "bg-bg text-text"
                }`}
              >
                <p className={`text-xs font-extrabold uppercase ${isDark ? "text-primary" : "text-text-muted"}`}>
                  Property type
                </p>
                <h3 className="mt-3 text-2xl font-extrabold">{property.title}</h3>
                <p className={`mt-3 text-sm leading-6 ${isDark ? "text-white/70" : "text-text-muted"}`}>
                  {property.description}
                </p>
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
}
