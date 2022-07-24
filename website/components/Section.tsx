export function Section({
  children,
  className = "",
}: {
  children: React.ReactNode;
  className?: string;
}) {
  return <div className={`space-y-6 text-left ${className}`}>{children}</div>;
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
