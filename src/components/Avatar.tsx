type AvatarVariant = "indigo" | "sand";

const SIZES: Record<string, string> = {
  sm: "h-[38px] w-[38px] text-[14px]",
  md: "h-11 w-11 text-[16px]",
  lg: "h-16 w-16 text-[24px]",
};

export function Avatar({
  initials,
  size = "md",
  variant = "indigo",
}: {
  initials: string;
  size?: "sm" | "md" | "lg";
  variant?: AvatarVariant;
}) {
  return (
    <div
      className={`flex shrink-0 items-center justify-center rounded-full font-display font-bold ${
        SIZES[size]
      } ${
        variant === "indigo"
          ? "bg-indigo text-cream"
          : "bg-sand text-indigo font-extrabold"
      }`}
    >
      {initials}
    </div>
  );
}
