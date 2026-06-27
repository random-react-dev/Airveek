import SectionHeader from "@modules/homev2/components/section-header";
import { comparisonRows } from "@modules/homev2/config/landing-page";

export default function ComparisonSection() {
  return (
    <section id="comparison" className="scroll-mt-28 bg-bg py-20 sm:py-24">
      <div className="container">
        <SectionHeader
          eyebrow="Comparison"
          title="Why hotels choose Airveek instead of spreadsheets or a generic PMS."
          description="Keep this comparison practical and respectful. The Airveek advantage is guided setup, local payment workflows and scoped customization."
          align="center"
        />
        <div className="mt-10 overflow-hidden rounded-[30px] border border-border bg-bg">
          <div className="overflow-x-auto">
            <div className="min-w-[860px]">
              <div className="grid grid-cols-4 bg-text text-sm font-extrabold text-white">
                {["Need", "Generic PMS", "Spreadsheets", "Airveek"].map((head) => (
                  <div key={head} className="p-4">
                    {head}
                  </div>
                ))}
              </div>
              {comparisonRows.map((row) => (
                <div
                  key={row[0]}
                  className="grid grid-cols-4 border-t border-border bg-bg text-sm"
                >
                  {row.map((cell, index) => (
                    <div
                      key={cell}
                      className={`p-4 leading-6 ${
                        index === 3
                          ? "bg-primary-soft font-bold text-text"
                          : "text-text-muted"
                      }`}
                    >
                      {cell}
                    </div>
                  ))}
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
