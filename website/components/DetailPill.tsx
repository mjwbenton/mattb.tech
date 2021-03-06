export default function DetailPill({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      {" "}
      <span className="align-middle text-xs px-1 py-0.5 border border-gray-300 rounded-lg break whitespace-nowrap print:text-black">
        {children}
      </span>
    </>
  );
}
