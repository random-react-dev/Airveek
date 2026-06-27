const securityItems = [
  "Role-based access",
  "Activity logs",
  "Private document roadmap",
  "Property-level isolation roadmap",
] as const;

export default function SecurityCaseStudySection() {
  return (
    <section id="security" className="scroll-mt-28 bg-bg py-20 sm:py-24">
      <div className="container grid gap-8 lg:grid-cols-[0.95fr_1.05fr]">
        <div className="rounded-[32px] border border-border bg-bg-soft p-8 sm:p-10">
          <p className="text-sm font-extrabold uppercase text-primary">
            Security and control
          </p>
          <h2 className="mt-4 text-4xl font-extrabold leading-tight text-text">
            Staff access, activity logs and data control belong in the sales story.
          </h2>
          <div className="mt-8 grid gap-4">
            {securityItems.map((item) => (
              <div
                key={item}
                className="rounded-2xl bg-bg p-4 text-sm font-extrabold text-text"
              >
                {item}
              </div>
            ))}
          </div>
        </div>
        <div className="rounded-[32px] border border-border bg-text p-8 text-white sm:p-10">
          <p className="text-sm font-extrabold uppercase text-primary">
            Pilot proof
          </p>
          <h2 className="mt-4 text-4xl font-extrabold leading-tight">
            Built from a real hotel and wellness-stay workflow.
          </h2>
          <p className="mt-5 text-base leading-7 text-white/70">
            Sahajanand Wellness shaped the first booking, payment, room,
            housekeeping, reporting and admin workflows. Airveek now uses that
            foundation to become a multi-client Hotel PMS.
          </p>
        </div>
      </div>
    </section>
  );
}
