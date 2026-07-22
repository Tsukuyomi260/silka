import { BottomNav } from "@/components/BottomNav";
import { ListingCard } from "@/components/ListingCard";
import { LISTINGS, FILTER_CHIPS } from "@/lib/data";

export default function HomePage() {
  return (
    <>
      <div className="flex min-h-0 flex-1 flex-col overflow-y-auto">
        <div className="flex flex-none flex-col gap-3.5 bg-indigo px-5 pb-[18px] pt-[22px]">
          <div className="flex items-center justify-between">
            <div className="font-display text-[26px] font-extrabold leading-none tracking-[-0.03em] text-cream">
              silka<span className="text-sand">.</span>
            </div>
            <div className="rounded-pill bg-white/10 px-3 py-1.5 font-sans text-[11.5px] font-semibold text-cream/80">
              Cotonou · Calavi
            </div>
          </div>
          <div className="font-sans text-[15px] font-semibold text-cream/90">
            Achète sans te faire avoir.
          </div>
          <div className="flex items-center gap-2.5 rounded-card-sm bg-cream px-3.5 py-3.5">
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="rgba(31,42,99,0.5)" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <circle cx="11" cy="11" r="7" />
              <path d="M21 21l-4-4" />
            </svg>
            <span className="truncate font-sans text-[13.5px] font-medium text-ink/45">
              Cherche un modèle, une marque…
            </span>
          </div>
        </div>

        <div className="flex flex-none gap-2 overflow-x-auto px-5 pb-1 pt-3.5 [scrollbar-width:none]">
          {FILTER_CHIPS.map((chip, i) => (
            <div
              key={chip}
              className={
                i === 0
                  ? "flex-none rounded-pill bg-indigo px-3.5 py-2 font-sans text-[12px] font-semibold text-cream"
                  : "flex-none rounded-pill border-[1.5px] border-indigo/25 px-3.5 py-[7px] font-sans text-[12px] font-semibold text-indigo"
              }
            >
              {chip}
              {i !== 0 && " ⌄"}
            </div>
          ))}
        </div>

        <div className="flex items-baseline justify-between px-5 pb-2.5 pt-3.5">
          <div className="font-display text-[16px] font-bold text-ink">
            Près de chez toi
          </div>
          <div className="font-sans text-[12px] font-semibold text-indigo">
            124 annonces
          </div>
        </div>

        <div className="grid grid-cols-2 gap-3 px-5 pb-[110px]">
          {LISTINGS.map((listing) => (
            <ListingCard key={listing.id} listing={listing} />
          ))}
        </div>
      </div>

      <BottomNav />
    </>
  );
}
