import { Check, X } from "lucide-react";
import SectionHeader from "../section-header";

type ComparisonValue = boolean | string;

type ComparisonRow = {
  factor: string;
  littleHotelier: ComparisonValue;
  preno: ComparisonValue;
  sirvoy: ComparisonValue;
  airveek: ComparisonValue;
};

const comparisonRows: ComparisonRow[] = [
  {
    factor: "Starting price*",
    littleHotelier: "Room-based pricing",
    preno: "$39/mo + 1% fee",
    sirvoy: "Free for 1 unit",
    airveek: "Starts at ₹1,499/mo",
  },
  {
    factor: "Free trial",
    littleHotelier: true,
    preno: true,
    sirvoy: true,
    airveek: true,
  },
  {
    factor: "Front desk & booking calendar",
    littleHotelier: true,
    preno: true,
    sirvoy: true,
    airveek: true,
  },
  {
    factor: "Direct booking engine",
    littleHotelier: true,
    preno: true,
    sirvoy: true,
    airveek: true,
  },
  {
    factor: "Website builder",
    littleHotelier: true,
    preno: false,
    sirvoy: true,
    airveek: true,
  },
  {
    factor: "OTA channel manager",
    littleHotelier: true,
    preno: true,
    sirvoy: true,
    airveek: false,
  },
  {
    factor: "Housekeeping management",
    littleHotelier: true,
    preno: true,
    sirvoy: true,
    airveek: true,
  },
  {
    factor: "Payment tracking",
    littleHotelier: true,
    preno: true,
    sirvoy: true,
    airveek: true,
  },
  {
    factor: "India-focused cash & UPI workflow",
    littleHotelier: false,
    preno: false,
    sirvoy: false,
    airveek: true,
  },
  {
    factor: "Reports & analytics",
    littleHotelier: true,
    preno: true,
    sirvoy: true,
    airveek: true,
  },
  {
    factor: "Staff roles & permissions",
    littleHotelier: true,
    preno: true,
    sirvoy: true,
    airveek: true,
  },
  {
    factor: "Mobile-friendly access",
    littleHotelier: true,
    preno: true,
    sirvoy: true,
    airveek: true,
  },
  {
    factor: "Native mobile app",
    littleHotelier: true,
    preno: false,
    sirvoy: false,
    airveek: true,
  },
  {
    factor: "Guided onboarding",
    littleHotelier: true,
    preno: true,
    sirvoy: false,
    airveek: true,
  },
  {
    factor: "Dynamic pricing",
    littleHotelier: true,
    preno: true,
    sirvoy: false,
    airveek: true,
  },
];

function ComparisonCell({ value }: { value: ComparisonValue }) {
  if (typeof value === "string") {
    return <p className="text-sm font-medium leading-6 text-text">{value}</p>;
  }

  const Icon = value ? Check : X;

  return (
    <div className="flex items-center gap-2.5">
      <span
        className={`flex size-5 shrink-0 items-center justify-center rounded-full text-white ${
          value ? "bg-emerald-500" : "bg-red-500"
        }`}
      >
        <Icon aria-hidden="true" className="size-3" strokeWidth={3} />
      </span>
      <p className="text-sm font-medium leading-6 text-text">
        {value ? "Yes" : "No"}
      </p>
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
            aria-label="Airveek and small-property PMS comparison"
            tabIndex={0}
          >
            <table className="w-full min-w-[1180px] table-fixed border-collapse text-left">
              <caption className="sr-only">
                Comparison of Airveek, Little Hotelier, Preno and Sirvoy
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
                    Little Hotelier
                  </th>
                  <th scope="col" className="bg-text px-6 py-5 text-white">
                    Preno
                  </th>
                  <th scope="col" className="bg-text px-6 py-5 text-white">
                    Sirvoy
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
                      <ComparisonCell value={row.littleHotelier} />
                    </td>
                    <td className="px-6 py-5 align-top">
                      <ComparisonCell value={row.preno} />
                    </td>
                    <td className="px-6 py-5 align-top">
                      <ComparisonCell value={row.sirvoy} />
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
