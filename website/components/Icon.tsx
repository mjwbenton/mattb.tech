import { IconProps } from "react-feather";

const SIZES = {
  base: {
    size: 18,
    additionalInlineClasses: "mx-2 -top-0.5",
  },
  "2xl": {
    size: 48,
    additionalInlineClasses: "mx-8 -top-2",
  },
} as const;

const INLINE_CLASSES = "inline relative";

export default function Icon({
  component,
  size = "base",
  inline = false,
}: {
  component: React.FC<IconProps>;
  size?: keyof typeof SIZES;
  inline?: boolean;
}) {
  const Component = component;
  return (
    <Component
      size={SIZES[size].size}
      className={`svg-stroke-end-color ${
        inline ? `${INLINE_CLASSES} ${SIZES[size].additionalInlineClasses}` : ""
      }`}
    />
  );
}
