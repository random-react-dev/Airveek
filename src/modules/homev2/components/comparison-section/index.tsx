import { Check, Info, X } from "lucide-react";
import SectionHeader from "../section-header";

type StatusValue = {
  included: boolean;
  detail?: string;
};

type ComparisonValue = StatusValue | string;

type ComparisonRow = {
  factor: string;
  hotelogix: ComparisonValue;
  ezeeAbsolute: ComparisonValue;
  stayflexi: ComparisonValue;
  airveek: ComparisonValue;
};

const status = (included: boolean, detail?: string): StatusValue => ({
  included,
  detail,
});

const comparisonRows: ComparisonRow[] = [
  // {
  //   factor: "Property focus",
  //   hotelogix: "Independent hotels to groups",
  //   ezeeAbsolute: "Hotels, resorts & chains",
  //   stayflexi: "Hotels & vacation rentals",
  //   airveek: "Small Indian properties",
  // },
  {
    factor: "Pricing model",
    hotelogix: "Per room + minimum billing",
    ezeeAbsolute: "Rooms + selected modules",
    stayflexi: "Properties + rooms + package",
    airveek: "Fixed monthly plans",
  },
  {
    factor: "Starting price*",
    hotelogix: "From $3.99/room/mo",
    ezeeAbsolute: "Custom quote",
    stayflexi: "From $99/mo",
    airveek: "From ₹1,499/mo",
  },
  {
    factor: "30-day trial",
    hotelogix: status(false, "Hotelogix offers a 15-day trial."),
    ezeeAbsolute: status(false, "eZee Absolute offers a 14-day trial."),
    stayflexi: status(false, "A free trial is offered, but a 30-day duration is not published."),
    airveek: status(true, "Airveek offers a 30-day guided trial."),
  },
  {
    factor: "Guided onboarding",
    hotelogix: status(true, "A representative helps set up the property."),
    ezeeAbsolute: status(true, "Free onboarding and product training are available."),
    stayflexi: status(true, "Free onboarding, training and channel mapping are advertised."),
    airveek: status(true, "Setup is guided around the property's rooms, rates and workflow."),
  },
  {
    factor: "Front desk & booking calendar",
    hotelogix: status(true),
    ezeeAbsolute: status(true),
    stayflexi: status(true),
    airveek: status(true),
  },
  {
    factor: "Direct booking engine",
    hotelogix: status(true),
    ezeeAbsolute: status(true),
    stayflexi: status(true),
    airveek: status(true),
  },
  {
    factor: "Housekeeping management",
    hotelogix: status(true),
    ezeeAbsolute: status(true),
    stayflexi: status(true),
    airveek: status(true),
  },
  {
    factor: "Booking payment tracking",
    hotelogix: status(true),
    ezeeAbsolute: status(true),
    stayflexi: status(true),
    airveek: status(true),
  },
  {
    factor: "Website builder",
    hotelogix: status(false, "Hotelogix lists a booking engine for an existing hotel website."),
    ezeeAbsolute: status(true, "eZee Panorama is available as a separate website-builder product."),
    stayflexi: status(false, "A website builder is not listed in the current core pricing packages."),
    airveek: status(true, "A hotel website builder is available in the Airveek platform."),
  },
  {
    factor: "UPI & cash support",
    hotelogix: status(false, "Payment gateway support is listed, but a combined UPI and cash workflow is not publicly detailed."),
    ezeeAbsolute: status(false, "Cash and multiple gateways are documented; UPI is not explicitly stated."),
    stayflexi: status(true, "UPI, card and cash settlement are documented."),
    airveek: status(true, "UPI, cash, advances, balances and pending dues are tracked against bookings."),
  },
  {
    factor: "Reports & analytics",
    hotelogix: status(true),
    ezeeAbsolute: status(true),
    stayflexi: status(true),
    airveek: status(true),
  },
  {
    factor: "Staff roles & permissions",
    hotelogix: status(true),
    ezeeAbsolute: status(true),
    stayflexi: status(true),
    airveek: status(true),
  },
  {
    factor: "Mobile management",
    hotelogix: status(true, "Native mobile app."),
    ezeeAbsolute: status(true, "Native mobile app."),
    stayflexi: status(true, "Native mobile app."),
    airveek: status(true, "Mobile-friendly web access without a native app."),
  },
  {
    factor: "OTA channel manager",
    hotelogix: status(true, "Connects with 50+ OTA channels."),
    ezeeAbsolute: status(true, "Connects with 100+ OTA channels."),
    stayflexi: status(true, "Connects with 100+ OTA channels."),
    airveek: status(false, "Airveek's OTA channel manager is currently on the roadmap."),
  },
  {
    factor: "Support included",
    hotelogix: status(true, "24/7 support is advertised."),
    ezeeAbsolute: status(true, "24/7/365 support is advertised."),
    stayflexi: status(true, "24/7 premium support is advertised."),
    airveek: status(true, "Standard support and guided setup are included based on plan."),
  },
];

function ComparisonCell({ value }: { value: ComparisonValue }) {
  if (typeof value === "string") {
    return <p className="text-sm font-medium leading-6 text-text">{value}</p>;
  }

  const Icon = value.included ? Check : X;

  return (
    <div className="flex items-center gap-2.5">
      <span
        className={`flex size-5 shrink-0 items-center justify-center rounded-full text-white ${
          value.included ? "bg-emerald-500" : "bg-red-500"
        }`}
      >
        <Icon aria-hidden="true" className="size-3" strokeWidth={3} />
      </span>
      <p className="text-sm font-medium leading-6 text-text">
        {value.included ? "Yes" : "No"}
      </p>

      {value.detail ? (
        <span className="group/tooltip relative inline-flex">
          <button
            type="button"
            aria-label={value.detail}
            className="inline-flex size-6 cursor-help items-center justify-center rounded-full text-text-muted transition-colors duration-200 hover:bg-bg-muted hover:text-primary focus-visible:bg-bg-muted focus-visible:text-primary focus-visible:outline-none"
          >
            <Info aria-hidden="true" className="size-4" strokeWidth={2} />
          </button>
          <span
            role="tooltip"
            className="pointer-events-none invisible absolute bottom-full left-1/2 z-30 mb-2 w-60 -translate-x-1/2 rounded-xl bg-text px-3.5 py-3 text-left text-xs font-normal leading-5 text-white opacity-0 transition-all duration-200 group-hover/tooltip:visible group-hover/tooltip:opacity-100 group-focus-within/tooltip:visible group-focus-within/tooltip:opacity-100"
          >
            {value.detail}
            <span
              aria-hidden="true"
              className="absolute left-1/2 top-full -translate-x-1/2 border-x-4 border-t-4 border-x-transparent border-t-text"
            />
          </span>
        </span>
      ) : null}
    </div>
  );
}

export default function ComparisonSection() {
  return (
    <section
      id="comparison"
      aria-labelledby="comparison-title"
      className="scroll-mt-28 bg-white py-20 sm:py-24"
    >
      <div className="container">
        <SectionHeader
          eyebrow="Built Different For India"
          title="Compare Beyond The Checklist."
          description="Compare the features, then look at the fit. Airveek is built for small Indian properties with practical setup, clearer collections, staff access and day-today visibility."
          align="center"
        />

        <p className="mt-8 text-sm font-semibold text-text-muted sm:hidden">
          Swipe horizontally to compare all columns.
        </p>

        <div className="mt-4 overflow-hidden rounded-[28px] border border-border shadow sm:mt-12 lg:mt-16">
          <div
            className="overflow-x-auto overscroll-x-contain"
            role="region"
            aria-label="Airveek and Indian-market hotel PMS comparison"
            tabIndex={0}
          >
            <table className="w-full min-w-[1180px] table-fixed border-collapse text-left">
              <caption className="sr-only">
                Comparison of Airveek, Hotelogix, eZee Absolute and Stayflexi
              </caption>
              <colgroup>
                <col className="w-[20%]" />
                <col className="w-[20%]" />
                <col className="w-[20%]" />
                <col className="w-[20%]" />
                <col className="w-[20%]" />
              </colgroup>
              <thead className="text-sm font-bold">
                <tr>
                  <th scope="col" className="bg-text px-6 py-5 text-white">
                    What matters
                  </th>
                  <th scope="col" className="bg-text px-6 py-5 text-white">
                    Hotelogix
                  </th>
                  <th scope="col" className="bg-text px-6 py-5 text-white">
                    eZee Absolute
                  </th>
                  <th scope="col" className="bg-text px-6 py-5 text-white">
                    Stayflexi
                  </th>
                  <th scope="col" className="bg-primary px-6 py-5 text-white">
                    Airveek
                  </th>
                </tr>
              </thead>

              <tbody>
                {comparisonRows.map((row) => (
                  <tr key={row.factor} className="border-t border-border">
                    <th
                      scope="row"
                      className="bg-bg-soft px-6 py-5 align-top text-base font-semibold text-text"
                    >
                      {row.factor}
                    </th>
                    <td className="px-6 py-5 align-top">
                      <ComparisonCell value={row.hotelogix} />
                    </td>
                    <td className="px-6 py-5 align-top">
                      <ComparisonCell value={row.ezeeAbsolute} />
                    </td>
                    <td className="px-6 py-5 align-top">
                      <ComparisonCell value={row.stayflexi} />
                    </td>
                    <td className="bg-primary-soft px-6 py-5 align-top">
                      <ComparisonCell value={row.airveek} />
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </section>
  );
}
