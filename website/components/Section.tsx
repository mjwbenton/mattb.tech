export function Section({ children }: { children: React.ReactNode }) {
  return <div className="space-y-8 text-left">{children}</div>;
}

export function SectionHeading({
  children,
  inline = false,
}: {
  children: string;
  inline?: boolean;
}) {
  return (
    <h3 className={`${inline ? "inline" : ""} text-lg print:text-black`}>
      <span>{children}</span>
    </h3>
  );
}
