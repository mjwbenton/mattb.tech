export function Section({
  children,
  className = "",
}: {
  children: React.ReactNode;
  className?: string;
}) {
  return <div className={`space-y-6 print:space-y-4 text-left ${className}`}>{children}</div>;
}

export function SectionHeading({
  children,
  inline = false,
  bold = false,
  as = "h3",
}: {
  children: string;
  inline?: boolean;
  bold?: boolean;
  as?: "h3" | "h2";
}) {
  const Component = as;
  return (
    <Component
      className={`${inline ? "inline" : ""} ${bold ? "font-bold" : ""} text-lg`}
    >
      <span>{children}</span>
    </Component>
  );
}
