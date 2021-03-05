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
      initial={{ scale: 0.8, y: -50, color: "rgba(0, 0, 0, 0)" }}
      animate={{ scale: 1, y: 0, color: "rgba(0, 0, 0, 0.1)" }}
      exit={{ scale: 0.8, y: 50 }}
      transition={{ duration: 0.15 }}
      className={`max-w-full overflow-hidden lg:w-6/12 p-16 space-y-16 text-transparent
        ${border ? "border-t-2 border-gradient" : ""}
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
  important = false,
}: {
  children: React.ReactNode;
  important?: boolean;
}) {
  return (
    <p
      className={`text-white ${
        important ? "text-opacity-0 text-lg" : "text-opacity-10 text-base"
      }`}
    >
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
