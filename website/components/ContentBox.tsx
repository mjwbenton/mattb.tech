import { motion } from "framer-motion";

export default function ContentBox({
  children,
  border = false,
  className = "",
}: {
  children: React.ReactNode;
  border?: boolean;
  className?: string;
}) {
  return (
    <motion.div
      initial={{ scale: 0.8, y: -50 }}
      animate={{ scale: 1, y: 0 }}
      exit={{ scale: 0.8, y: 50 }}
      transition={{ duration: 0.15 }}
      className={`max-w-3xl mx-auto overflow-hidden px-16 pb-16 pt-10 space-y-6
        ${border ? "border-t-2 border-brandPurple print:border-black" : ""}
        ${className}`}
    >
      {children}
    </motion.div>
  );
}

export function Content({
  children,
  className = "",
}: {
  children: React.ReactNode;
  className?: string;
}) {
  return (
    <p className={`print:max-w-80ch ${className}`}>
      <span>{children}</span>
    </p>
  );
}

export function ContentBoxHeading({ children }: { children: React.ReactNode }) {
  return (
    <h2 className="text-xl font-semibold">
      <span>{children}</span>
    </h2>
  );
}
