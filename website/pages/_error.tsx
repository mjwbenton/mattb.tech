export default function ErrorPage({ statusCode }: { statusCode: number }) {
  return (
    <div className="w-full text-center text-brandPurple">
      <span>{statusCode}: Error</span>
    </div>
  );
}
