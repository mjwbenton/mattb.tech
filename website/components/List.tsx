export default function List({ children }: { children: React.ReactNode }) {
  return <ul className="space-y-4">{children}</ul>;
}

export function Item({ children }: { children: React.ReactNode }) {
  return (
    <li className="text-base bullet print:max-w-80ch">
      <span>{children}</span>
    </li>
  );
}
