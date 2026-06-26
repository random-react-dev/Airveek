import Image from "next/image";
import { trustLogos } from "@modules/home/config/landing-page";

export default function TrustStrip() {
  return (
    <section className="bg-bg-muted py-20 sm:py-24">
      <div className="container">
        <div className="flex flex-col items-center gap-10">
          <p className="max-w-3xl text-center text-2xl font-extrabold leading-tight text-text sm:text-3xl">
            Built around the channels and payment workflows hotel teams ask for
            first.
          </p>

          <div className="grid w-full gap-4 grid-cols-2 sm:grid-cols-3 lg:grid-cols-6">
            {trustLogos.map((logo) => (
              <div
                key={logo.label}
                className="flex items-center justify-center"
              >
                <Image
                  src={logo.src}
                  alt={logo.label}
                  width={164}
                  height={40}
                  className="max-h-auto w-full object-contain"
                />
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
