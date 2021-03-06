export function ExternalLink({
  href,
  children,
}: {
  href: string;
  children: React.ReactNode;
}) {
  return (
    <a
      href={href}
      className="text-blue-700 text-opacity-40 print:text-black print:text-opacity-100"
    >
      {children}
    </a>
  );
}
