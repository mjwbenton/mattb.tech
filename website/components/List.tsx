export default function List({ children }: { children: React.ReactNode }) {
  return <ul className="space-y-8">{children}</ul>;
}

export function Item({ children }: { children: React.ReactNode }) {
  return (
    <li className="text-base bullet">
      <span>{children}</span>
    </li>
  );
}
