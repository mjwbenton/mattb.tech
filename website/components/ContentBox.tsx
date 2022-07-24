import { motion } from "framer-motion";

export default function ContentBox({
  children,
  float,
  border = false,
  className = "",
}: {
  children: React.ReactNode;
  float: "left" | "right";
  border?: boolean;
  className?: string;
}) {
  return (
    <motion.div
      initial={{ scale: 0.8, y: -50 }}
      animate={{ scale: 1, y: 0 }}
      exit={{ scale: 0.8, y: 50 }}
      transition={{ duration: 0.15 }}
      className={`max-w-full overflow-hidden lg:w-6/12 px-16 pb-16 pt-10 space-y-10
        ${border ? "border-t-2 border-brandPurple print:border-black" : ""}
        ${float === "left" ? "lg:float-left lg:clear-left" : ""}
        ${float === "right" ? "lg:float-right lg:clear-right" : ""}
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
