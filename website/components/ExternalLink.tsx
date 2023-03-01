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
      className="text-blue-600 print:text-black underline print:no-underline"
    >
      {children}
    </a>
  );
}
