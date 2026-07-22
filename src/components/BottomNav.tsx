import Link from "next/link";

export function BottomNav() {
  return (
    <div className="pointer-events-none absolute bottom-[18px] left-0 right-0 flex items-center justify-center gap-2.5">
      <div className="pointer-events-auto flex items-center gap-1.5 rounded-pill bg-white/97 p-2 px-3 shadow-[0_8px_28px_rgba(31,42,99,0.22),0_1px_3px_rgba(0,0,0,0.08)]">
        <Link
          href="/"
          aria-label="Accueil"
          className="flex h-11 w-11 items-center justify-center rounded-full bg-indigo/8"
        >
          <svg width="21" height="21" viewBox="0 0 24 24" fill="none" stroke="#1f2a63" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <path d="M3 11l9-8 9 8" />
            <path d="M5 9.5V21h5v-6h4v6h5V9.5" />
          </svg>
        </Link>
        <Link
          href="/messages"
          aria-label="Messages"
          className="flex h-11 w-11 items-center justify-center rounded-full hover:bg-indigo/6"
        >
          <svg width="21" height="21" viewBox="0 0 24 24" fill="none" stroke="#1a1a2e" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <path d="M3 13l3-8h12l3 8" />
            <path d="M3 13v6h18v-6" />
            <path d="M3 13h5a4 4 0 0 0 8 0h5" />
          </svg>
        </Link>
        <Link
          href="/notifications"
          aria-label="Notifications"
          className="relative flex h-11 w-11 items-center justify-center rounded-full hover:bg-indigo/6"
        >
          <svg width="21" height="21" viewBox="0 0 24 24" fill="none" stroke="#1a1a2e" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <path d="M6 9a6 6 0 0 1 12 0c0 5 2 6 2 6H4s2-1 2-6" />
            <path d="M10 19a2 2 0 0 0 4 0" />
          </svg>
          <span className="absolute right-[11px] top-[9px] h-2 w-2 rounded-full border-2 border-white bg-sand" />
        </Link>
        <Link
          href="/annonces/moi"
          aria-label="Mes annonces"
          className="flex h-11 w-11 items-center justify-center rounded-full hover:bg-indigo/6"
        >
          <svg width="21" height="21" viewBox="0 0 24 24" fill="none" stroke="#1a1a2e" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <path d="M12 3l9 5-9 5-9-5 9-5" />
            <path d="M3 13l9 5 9-5" />
            <path d="M3 17l9 5 9-5" />
          </svg>
        </Link>
      </div>
      <Link
        href="/vendre"
        aria-label="Publier une annonce"
        className="pointer-events-auto flex h-14 w-14 items-center justify-center rounded-full bg-white/97 shadow-[0_8px_28px_rgba(31,42,99,0.22),0_1px_3px_rgba(0,0,0,0.08)] hover:bg-white"
      >
        <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="#1a1a2e" strokeWidth="2.2" strokeLinecap="round">
          <path d="M12 5v14" />
          <path d="M5 12h14" />
        </svg>
      </Link>
    </div>
  );
}
