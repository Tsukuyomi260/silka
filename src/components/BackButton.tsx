"use client";

import { useRouter } from "next/navigation";

export function BackButton({
  href,
  floating = false,
  light = false,
}: {
  href?: string;
  floating?: boolean;
  light?: boolean;
}) {
  const router = useRouter();

  return (
    <button
      type="button"
      onClick={() => (href ? router.push(href) : router.back())}
      aria-label="Retour"
      className={`flex h-[38px] w-[38px] shrink-0 cursor-pointer items-center justify-center rounded-full font-display text-lg font-semibold ${
        light
          ? "bg-white/12 text-cream"
          : floating
            ? "bg-white/92 text-indigo shadow-[0_2px_8px_rgba(0,0,0,0.12)]"
            : "bg-cream text-indigo"
      }`}
    >
      ‹
    </button>
  );
}
