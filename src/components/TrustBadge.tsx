type BadgeKind = "verified" | "imei" | "battery";

const BADGE_STYLES: Record<
  BadgeKind,
  { label: string; bg: string; fg: string; dot: string }
> = {
  verified: {
    label: "Vendeur vérifié",
    bg: "bg-trust/12",
    fg: "text-trust-dark",
    dot: "bg-trust",
  },
  imei: {
    label: "IMEI fourni",
    bg: "bg-indigo/8",
    fg: "text-indigo",
    dot: "bg-indigo",
  },
  battery: {
    label: "Batterie testée",
    bg: "bg-sand/15",
    fg: "text-[#9a6316]",
    dot: "bg-sand",
  },
};

export function TrustBadge({ kind }: { kind: BadgeKind }) {
  const s = BADGE_STYLES[kind];
  return (
    <div
      className={`inline-flex items-center gap-1.5 rounded-pill px-3 py-1.5 font-sans text-[11.5px] font-semibold ${s.bg} ${s.fg}`}
    >
      <span className={`h-1.5 w-1.5 rounded-full ${s.dot}`} />
      {s.label}
    </div>
  );
}
