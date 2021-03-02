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
      exit={{ opacity: 0 }}
      transition={{ duration: 0.15 }}
      className={`max-w-full overflow-hidden md:w-6/12 p-16 text-justify md:text-left space-y-8
        ${border ? "border-t-2 border-gradient" : ""}
        ${float === "left" ? "md:float-left md:clear-left" : ""}
        ${float === "right" ? "md:float-right md:clear-right" : ""}
        ${className}`}
    >
      {children}
    </motion.div>
  );
}
