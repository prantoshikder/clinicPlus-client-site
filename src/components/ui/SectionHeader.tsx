import { cn } from "@/lib/cn";

export function SectionHeader({
  eyebrow,
  title,
  description,
  align = "left",
  className,
}: {
  eyebrow?: string;
  title: string;
  description?: string;
  align?: "left" | "center";
  className?: string;
}) {
  return (
    <div
      className={cn(
        "max-w-2xl",
        align === "center" && "mx-auto text-center",
        className,
      )}
    >
      {eyebrow && (
        <span className="text-xs font-semibold tracking-widest uppercase text-(--color-brand-600)">
          {eyebrow}
        </span>
      )}
      <h2 className="mt-3 text-2xl sm:text-3xl md:text-4xl font-semibold tracking-tight">
        {title}
      </h2>
      {description && (
        <p className="mt-4 text-base sm:text-lg text-(--color-muted)">
          {description}
        </p>
      )}
    </div>
  );
}
