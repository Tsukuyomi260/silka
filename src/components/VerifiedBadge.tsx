import { BadgeCheck } from "lucide-react";

export function VerifiedBadge({
  label,
  size = 13,
}: {
  label?: string;
  size?: number;
}) {
  return (
    <span className="inline-flex items-center gap-1 rounded-pill bg-trust px-1.5 py-0.5 font-sans text-[9.5px] font-bold text-white">
      <BadgeCheck size={size} strokeWidth={2.4} />
      {label}
    </span>
  );
}
