export default function ErrorPage({ statusCode }: { statusCode: number }) {
  return (
    <div className="w-full text-center text-transparent">
      <span>{statusCode}: Error</span>
    </div>
  );
}
