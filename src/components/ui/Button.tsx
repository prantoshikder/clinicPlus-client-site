import { cn } from "@/lib/cn";

type Variant = "primary" | "secondary" | "ghost" | "invert";
type Size = "sm" | "md" | "lg";

const base =
  "inline-flex items-center justify-center gap-2 rounded-lg font-medium transition focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-(--color-brand-500) focus-visible:ring-offset-2";

const variants: Record<Variant, string> = {
  primary:
    "bg-(--color-brand-500) text-white shadow-sm hover:bg-(--color-brand-600)",
  secondary:
    "border border-(--color-border) bg-white text-(--color-foreground) hover:bg-(--color-surface)",
  ghost:
    "text-(--color-foreground) hover:bg-(--color-surface)",
  invert:
    "bg-white text-(--color-brand-700) hover:bg-(--color-brand-50)",
};

const sizes: Record<Size, string> = {
  sm: "h-9 px-3 text-sm",
  md: "h-10 px-4 text-sm",
  lg: "h-12 px-5 text-sm",
};

type ButtonProps = React.AnchorHTMLAttributes<HTMLAnchorElement> & {
  variant?: Variant;
  size?: Size;
};

export function Button({
  variant = "primary",
  size = "md",
  className,
  children,
  ...rest
}: ButtonProps) {
  return (
    <a
      className={cn(base, variants[variant], sizes[size], className)}
      {...rest}
    >
      {children}
    </a>
  );
}
