import Image from "next/image";
import Link from "next/link";
import { hotelRoomImage } from "@modules/home/config/landing-page";

const channelMetrics = [
  ["OTA sync", "Availability and rates stay aligned"],
  ["Direct booking", "Guests can book from your website"],
  ["Payments", "Deposits, dues and follow-ups stay visible"],
] as const;

export default function ChannelBookingSection() {
  return (
    <section id="channel-manager" className="scroll-mt-28 bg-text py-20 text-white sm:py-24">
      <div className="container">
        <div className="grid gap-10 lg:grid-cols-[1.05fr_0.95fr] lg:items-center">
          <div>
            <p className="text-sm font-extrabold uppercase text-primary">
              Channel manager + booking engine
            </p>
            <h2 className="mt-4 max-w-4xl text-4xl font-extrabold leading-tight sm:text-5xl lg:text-6xl">
              Sell rooms everywhere without updating every channel manually.
            </h2>
            <p className="mt-5 max-w-2xl text-lg leading-8 text-white/70">
              A strong PMS landing page needs one clear revenue story: more direct
              bookings, fewer manual OTA updates and better payment visibility.
            </p>
            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              <Link
                href="#demo"
                className="inline-flex h-12 items-center justify-center rounded-full bg-primary px-6 text-sm font-extrabold text-white transition-colors duration-200 hover:bg-white hover:text-primary focus-visible:outline-none"
              >
                Book Free Demo
              </Link>
              <Link
                href="#integrations"
                className="inline-flex h-12 items-center justify-center rounded-full border border-white/20 px-6 text-sm font-extrabold text-white transition-colors duration-200 hover:border-white hover:bg-white hover:text-text focus-visible:outline-none"
              >
                View Integrations
              </Link>
            </div>
          </div>

          <div className="relative overflow-hidden rounded-[32px] bg-white/10 p-3">
            <Image
              src={hotelRoomImage.src}
              alt={hotelRoomImage.alt}
              width={1400}
              height={900}
              className="h-[430px] w-full rounded-[26px] object-cover opacity-90"
            />
            <div className="absolute inset-x-6 bottom-6 grid gap-3">
              {channelMetrics.map(([title, label]) => (
                <div key={title} className="rounded-2xl bg-white/90 p-4 text-text shadow-lg backdrop-blur">
                  <p className="text-sm font-extrabold text-primary">{title}</p>
                  <p className="mt-1 text-sm font-semibold text-text-muted">{label}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

