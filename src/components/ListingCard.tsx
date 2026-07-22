import Link from "next/link";
import type { Listing } from "@/lib/data";
import { formatFcfa } from "@/lib/format";
import { photoBg } from "@/lib/photo";

export function ListingCard({ listing }: { listing: Listing }) {
  return (
    <Link
      href={`/annonces/${listing.id}`}
      className="flex flex-col overflow-hidden rounded-card-sm border border-black/8 bg-white transition-colors hover:border-indigo/40"
    >
      <div className="relative h-[110px]" style={photoBg(listing.img)}>
        {listing.imei && (
          <div className="absolute left-[7px] top-[7px] rounded-pill bg-trust/95 px-[7px] py-[3px] font-sans text-[9px] font-bold text-white">
            ✓ vérifié
          </div>
        )}
      </div>
      <div className="flex flex-col gap-1 px-3 pb-3 pt-2.5">
        <div className="font-sans text-[12.5px] font-semibold leading-tight text-ink">
          {listing.title}
        </div>
        <div className="font-sans text-[10.5px] font-medium text-ink/50">
          {listing.sub}
        </div>
        <div className="mt-0.5 flex items-baseline justify-between">
          <div className="font-display text-[14px] font-bold text-indigo">
            {formatFcfa(listing.price)}
          </div>
          <div className="font-sans text-[10px] font-medium text-ink/45">
            {listing.area}
          </div>
        </div>
      </div>
    </Link>
  );
}
