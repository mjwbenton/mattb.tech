export function Section({ children }: { children: React.ReactNode }) {
  return <div className="space-y-6 text-left">{children}</div>;
}

export function SectionHeading({
  children,
  inline = false,
  bold = false,
}: {
  children: string;
  inline?: boolean;
  bold?: boolean;
}) {
  return (
    <h3
      className={`${inline ? "inline" : ""} ${bold ? "font-bold" : ""} text-lg`}
    >
      <span>{children}</span>
    </h3>
  );
}
