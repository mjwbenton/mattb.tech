import { IconProps } from "react-feather";

const SIZES = {
  base: {
    size: 18,
    additionalInlineClasses: "mr-2 -top-0.5",
  },
  lg: {
    size: 24,
    additionalInlineClasses: "mr-4 -top-1",
  },
  "2xl": {
    size: 48,
    additionalInlineClasses: "mr-8 -top-2",
  },
} as const;

const INLINE_CLASSES = "inline relative";

export default function Icon({
  component,
  size = "base",
  inline = false,
  color = "start",
}: {
  component: React.FC<IconProps>;
  size?: keyof typeof SIZES;
  inline?: boolean;
  color?: "start" | "end";
}) {
  const Component = component;
  return (
    <Component
      size={SIZES[size].size}
      className={`${
        color === "start" ? "svg-stroke-start-color" : "svg-stroke-end-color"
      } ${
        inline ? `${INLINE_CLASSES} ${SIZES[size].additionalInlineClasses}` : ""
      }`}
    />
  );
}
