import { Check } from "lucide-react";
import SectionHeader from "../section-header";

type ComparisonRow = {
  factor: string;
  globalPms: string;
  airveek: string;
};

const comparisonRows: ComparisonRow[] = [
  {
    factor: "Primary focus",
    globalPms:
      "Broad hospitality platforms covering distribution, revenue tools, integrations and multiple property segments.",
    airveek:
      "Practical daily operations for independent Indian hotels and lean property teams.",
  },
  {
    factor: "Daily payment workflow",
    globalPms:
      "Online card processing and global payment-provider ecosystems are often central to the product.",
    airveek:
      "Cash, UPI, QR references, pending dues and booking-linked collections stay visible to the team.",
  },
  {
    factor: "Implementation",
    globalPms:
      "Setup, migration and training scope can vary by provider, selected plan or implementation partner.",
    airveek:
      "Guided property review, room and rate setup, staff roles, team onboarding and go-live assistance.",
  },
  {
    factor: "Product experience",
    globalPms:
      "Large module ecosystems are designed to support a wide range of hospitality use cases.",
    airveek:
      "A focused workspace for front desk, housekeeping, payments and owner visibility without enterprise complexity.",
  },
  {
    factor: "Workflow flexibility",
    globalPms:
      "Additional requirements are commonly handled through settings, paid modules or third-party integrations.",
    airveek:
      "Approved property-specific workflows can be reviewed and scoped directly with the Airveek team.",
  },
  {
    factor: "Support relationship",
    globalPms:
      "Support is commonly delivered through global chat, ticketing, help centres or partner networks.",
    airveek:
      "Guided support from a team that understands your configured property workflows and operating context.",
  },
  {
    factor: "Best fit",
    globalPms:
      "Hotels prioritising advanced distribution, large integration marketplaces and broad automation.",
    airveek:
      "Independent hotels prioritising operational clarity, local payment handling and guided adoption.",
  },
];

export default function ComparisonSection() {
  return (
    <section
      id="comparison"
      aria-labelledby="comparison-title"
      className="scroll-mt-28 bg-bg py-20 sm:py-24"
    >
      <div className="container">
        <SectionHeader
          eyebrow="Why Airveek"
          title="Operational clarity without enterprise complexity."
          description="Global PMS platforms offer broad distribution and revenue ecosystems. Airveek focuses on practical daily operations, Indian payment workflows and guided implementation for independent hotel teams."
          align="center"
        />

        <p className="mt-8 text-sm font-semibold text-text-muted sm:hidden">
          Swipe horizontally to compare all columns.
        </p>

        <div className="mt-4 overflow-hidden rounded-[28px] border border-border bg-bg shadow-[0_18px_60px_rgba(0,0,0,0.06)] sm:mt-12 lg:mt-16">
          <div
            className="overflow-x-auto overscroll-x-contain"
            role="region"
            aria-label="Airveek and broad global PMS comparison"
            tabIndex={0}
          >
            <table className="w-full min-w-[920px] table-fixed border-collapse text-left">
              <caption className="sr-only">
                Comparison between broad global PMS platforms and Airveek
              </caption>
              <colgroup>
                <col className="w-[22%]" />
                <col className="w-[38%]" />
                <col className="w-[40%]" />
              </colgroup>
              <thead className="text-sm font-extrabold">
                <tr>
                  <th scope="col" className="bg-text px-6 py-5 text-white">
                    What matters
                  </th>
                  <th
                    scope="col"
                    className="bg-text px-6 py-5 text-white/70"
                  >
                    Broad global PMS platforms
                  </th>
                  <th
                    scope="col"
                    className="bg-primary px-6 py-5 text-white"
                  >
                    Airveek
                  </th>
                </tr>
              </thead>

              <tbody>
                {comparisonRows.map((row) => (
                  <tr key={row.factor} className="border-t border-border">
                    <th
                      scope="row"
                      className="bg-bg-soft px-6 py-5 align-top text-base font-bold text-text"
                    >
                      {row.factor}
                    </th>
                    <td className="px-6 py-5 align-top">
                      <p className="text-sm leading-6 text-text-muted">
                        {row.globalPms}
                      </p>
                    </td>
                    <td className="bg-primary-soft px-6 py-5 align-top">
                      <div className="flex items-start gap-3">
                        <span className="mt-0.5 flex size-6 shrink-0 items-center justify-center rounded-full bg-primary text-white">
                          <Check
                            aria-hidden="true"
                            className="size-3.5"
                            strokeWidth={2.5}
                          />
                        </span>
                        <p className="text-sm font-medium leading-6 text-text">
                          {row.airveek}
                        </p>
                      </div>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>

        <p className="mx-auto mt-6 max-w-3xl text-center text-sm leading-6 text-text-muted">
          Capabilities vary by provider and selected plan. Airveek
          recommendations are based on each property&apos;s operational
          requirements.
        </p>
      </div>
    </section>
  );
}
