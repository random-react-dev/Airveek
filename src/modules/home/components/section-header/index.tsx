type SectionHeaderProps = {
  eyebrow?: string;
  title: string;
  description?: string;
  align?: "left" | "center";
};

export default function SectionHeader({
  eyebrow,
  title,
  description,
  align = "left",
}: SectionHeaderProps) {
  const alignment =
    align === "center" ? "mx-auto text-center items-center" : "items-start";

  return (
    <div className={`flex max-w-3xl flex-col ${alignment}`}>
      {eyebrow ? (
        <p className="text-sm font-bold uppercase text-primary">{eyebrow}</p>
      ) : null}
      <h2 className="mt-3 text-3xl font-extrabold leading-tight text-text sm:text-4xl lg:text-5xl">
        {title}
      </h2>
      {description ? (
        <p className="mt-4 text-base leading-7 text-text-muted sm:text-lg">
          {description}
        </p>
      ) : null}
    </div>
  );
}
