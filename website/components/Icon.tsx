import { IconBaseProps } from "react-icons";

type IconComponent =
  | React.FC<IconBaseProps>
  | React.FC<{ size: number; className: string }>;

const SIZES = {
  base: {
    size: 20,
    additionalInlineClasses: "mr-1 -top-0.5",
  },
  lg: {
    size: 24,
    additionalInlineClasses: "mr-2 -top-0.5",
  },
  "2xl": {
    size: 48,
    additionalInlineClasses: "mr-4 -top-1",
  },
} as const;

const INLINE_CLASSES = "inline relative";

export default function Icon({
  component,
  size = "base",
  inline = false,
}: {
  component: IconComponent;
  size?: keyof typeof SIZES;
  inline?: boolean;
}) {
  const Component = component;
  return (
    <Component
      size={SIZES[size].size}
      className={
        inline ? `${INLINE_CLASSES} ${SIZES[size].additionalInlineClasses}` : ""
      }
    />
  );
}
