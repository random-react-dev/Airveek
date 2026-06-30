import Image from "next/image";
import SectionHeader from "../section-header";
import Link from "next/link";

export default function CustomerStorySection() {
  return (
    <section
      id="customer-story"
      aria-labelledby="customer-story-title"
      className="scroll-mt-28 bg-bg py-20 sm:py-24"
    >
      <div className="container">
        <SectionHeader
          eyebrow="Customer Story"
          title="Airveek Review"
          description="Discover how independent hotel teams use Airveek to bring clarity to their work, reduce manual follow-ups and create smoother guest experiences."
          align='center'
        />
        <div className="mt-12 flex items-center gap-10 flex-col lg:flex-row lg:gap-16 lg:mt-16">
          <div className="w-full lg:w-1/2 order-2">
            <p className="text-base leading-7 text-text-muted sm:text-lg sm:leading-8">
              For Sahajanand Wellness, Airveek makes daily property work easier to
              manage and faster to access. The team can check bookings, room
              availability, guest details and payment status from one clear
              workflow instead of moving between registers, calls and separate
              payment notes.
            </p>

            <p className="mt-4 text-base leading-7 text-text-muted sm:text-lg sm:leading-8">
              The experience is built for real front-desk use: quick booking
              updates, simple room tracking, clear cash and UPI visibility, and
              mobile-friendly access for owners or staff when they are away from
              the reception desk.
            </p>

            <div className="mt-4 flex flex-col items-start gap-4">
              <div className="flex items-center gap-4">
                <div className="relative overflow-hidden">
                  <Image
                    src="/assets/images/sahajanand-logo.png"
                    alt="Sahajanand logo"
                    width={250}
                    height={250}
                    className="h-auto w-52 xl:w-56 max-w-full"
                  />
                </div>
                <div>
                  <p className="font-bold text-text">Sahajanand Wellness</p>
                  <p className="text-sm leading-6 text-text-muted">
                    Airveek customer
                  </p>
                </div>
              </div>

              <Link href={'https://www.swaminarayan.yoga/'} target='_blank'
                className="inline-flex h-12 items-center justify-center rounded-full bg-primary px-4 py-2 font-medium text-white hover:bg-bg border hover:text-primary hover:border-primary transition-all duration-200 ease-out focus-visible:outline-none">
                Visit Website
              </Link>
            </div>
          </div>

          <div className="w-full lg:w-1/2 order-1">
            <div className="relative aspect-3/2 overflow-hidden rounded-3xl">
              <Image
                src="/assets/images/sahajanand-hotel.jpeg"
                alt="Sahajanand Hotel property using Airveek PMS"
                fill
                sizes="(min-width: 1024px) 52vw, calc(100vw - 3rem)"
                className="object-cover"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
