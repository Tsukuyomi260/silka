import Link from "next/link";
import { notFound } from "next/navigation";
import { Avatar } from "@/components/Avatar";
import { BackButton } from "@/components/BackButton";
import { TrustBadge } from "@/components/TrustBadge";
import { getListing, getSeller } from "@/lib/data";
import { formatFcfa } from "@/lib/format";
import { photoBg } from "@/lib/photo";

export default async function FichePage({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const { id } = await params;
  const listing = getListing(id);
  if (!listing) notFound();
  const seller = getSeller(listing.sellerId);

  const attributes: { label: string; value: string; green?: boolean }[] = [
    { label: "Marque", value: listing.brand },
    { label: "Modèle", value: listing.model },
    { label: "Stockage", value: listing.storage },
    { label: "État", value: listing.cond },
    {
      label: "IMEI",
      value: listing.imei ? "Fourni ✓" : "Non fourni",
      green: listing.imei,
    },
    { label: "Batterie", value: listing.batt },
  ];

  return (
    <>
      <div className="flex min-h-0 flex-1 flex-col overflow-y-auto">
        <div
          className="relative h-[280px] flex-none"
          style={photoBg(listing.img, 10)}
        >
          <div className="absolute left-4 top-4">
            <BackButton href="/" floating />
          </div>
          <div className="absolute bottom-3 left-0 right-0 flex justify-center gap-[5px]">
            <div className="h-[5px] w-4 rounded-pill bg-indigo" />
            <div className="h-[5px] w-[5px] rounded-full bg-indigo/30" />
            <div className="h-[5px] w-[5px] rounded-full bg-indigo/30" />
            <div className="h-[5px] w-[5px] rounded-full bg-indigo/30" />
          </div>
        </div>

        <div className="flex flex-col gap-4 px-5 pb-[120px] pt-[18px]">
          <div className="flex flex-col gap-1.5">
            <div className="font-display text-[24px] font-bold text-indigo">
              {formatFcfa(listing.price)}
            </div>
            <div className="font-sans text-[17px] font-bold leading-tight text-ink">
              {listing.title} · {listing.sub}
            </div>
            <div className="font-sans text-[12px] font-medium text-ink/50">
              {listing.area} · publié {listing.publishedAgo}
            </div>
          </div>

          <div className="flex flex-wrap gap-[7px]">
            <TrustBadge kind="verified" />
            {listing.imei && <TrustBadge kind="imei" />}
            <TrustBadge kind="battery" />
          </div>

          <div className="grid grid-cols-2 gap-x-4 gap-y-3 rounded-card bg-cream p-4">
            {attributes.map((attr) => (
              <div key={attr.label} className="flex flex-col gap-0.5">
                <div className="font-mono-label text-[10px] font-medium uppercase tracking-[0.06em] text-black/40">
                  {attr.label}
                </div>
                <div
                  className={`font-sans text-[13px] font-semibold ${
                    attr.green ? "text-trust" : "text-ink"
                  }`}
                >
                  {attr.value}
                </div>
              </div>
            ))}
          </div>

          {seller && (
            <Link
              href={`/vendeurs/${seller.id}`}
              className="flex items-center gap-3 rounded-card border border-black/8 p-3.5 transition-colors hover:border-indigo/40"
            >
              <Avatar initials={seller.initials} />
              <div className="flex flex-1 flex-col gap-0.5">
                <div className="flex items-center gap-1.5">
                  <div className="font-sans text-[13.5px] font-bold text-ink">
                    {seller.name}
                  </div>
                  <div className="rounded-pill bg-trust px-1.5 py-0.5 font-sans text-[9px] font-bold text-white">
                    ✓
                  </div>
                </div>
                <div className="font-sans text-[11.5px] font-medium text-ink/55">
                  <span className="text-sand">★</span> {seller.rating} ·{" "}
                  {seller.reviews} avis · répond vite
                </div>
              </div>
              <div className="font-display text-[16px] font-semibold text-indigo/40">
                ›
              </div>
            </Link>
          )}

          <div className="flex items-start gap-3 rounded-card bg-trust/8 px-4 py-3.5">
            <div className="mt-px flex h-[22px] w-[22px] shrink-0 items-center justify-center rounded-full bg-trust text-[11px] font-bold text-white">
              ✓
            </div>
            <div className="font-sans text-[12px] font-medium leading-relaxed text-trust-darker">
              Ton argent est <strong>bloqué chez Silka</strong> jusqu&apos;à ce
              que tu vérifies le téléphone. Pas de mauvaise surprise.
            </div>
          </div>
        </div>
      </div>

      <div className="absolute bottom-0 left-0 right-0 flex gap-2.5 border-t border-black/8 bg-white px-5 pb-[22px] pt-3.5">
        <Link
          href={`/annonces/${listing.id}/chat`}
          className="flex-none rounded-btn border-[1.5px] border-indigo/35 px-[18px] py-3.5 text-center font-sans text-[14px] font-semibold text-indigo"
        >
          Discuter
        </Link>
        <Link
          href={`/annonces/${listing.id}/achat`}
          className="flex-1 rounded-btn bg-indigo px-[18px] py-[15px] text-center font-sans text-[14px] font-semibold text-cream transition-colors hover:bg-indigo-hover"
        >
          Acheter en sécurité
        </Link>
      </div>
    </>
  );
}
