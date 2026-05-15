import { Stethoscope } from "lucide-react";
import { site } from "@/lib/site";

export function Logo({ href = "#" }: { href?: string }) {
  return (
    <a href={href} className="flex items-center gap-2 font-semibold text-lg">
      <span className="grid h-8 w-8 place-items-center rounded-lg bg-(--color-brand-500) text-white">
        <Stethoscope className="h-4 w-4" />
      </span>
      {site.name}
    </a>
  );
}
