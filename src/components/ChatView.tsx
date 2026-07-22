"use client";

import { useState } from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { ChevronLeft, Send, ShieldCheck } from "lucide-react";
import { Avatar } from "@/components/Avatar";
import { VerifiedBadge } from "@/components/VerifiedBadge";
import { BASE_CHAT, type ChatMessage, type Listing, type Seller } from "@/lib/data";
import { formatFcfa } from "@/lib/format";
import { photoBg } from "@/lib/photo";

export function ChatView({
  listing,
  seller,
}: {
  listing: Listing;
  seller: Seller;
}) {
  const router = useRouter();
  const [messages, setMessages] = useState<ChatMessage[]>(BASE_CHAT);
  const [draft, setDraft] = useState("");
  const profilPath = `/vendeurs/${seller.id}`;

  function send() {
    const text = draft.trim();
    if (!text) return;
    setMessages((prev) => [...prev, { fromMe: true, text }]);
    setDraft("");
  }

  return (
    <div className="flex min-h-0 flex-1 flex-col overflow-hidden">
      <div className="flex flex-none items-center gap-2.5 border-b border-black/8 px-5 py-4">
        <button
          type="button"
          onClick={() => router.back()}
          aria-label="Retour"
          className="flex h-[38px] w-[38px] shrink-0 cursor-pointer items-center justify-center rounded-full bg-cream text-indigo"
        >
          <ChevronLeft size={20} strokeWidth={2.2} />
        </button>
        <Link href={profilPath} className="shrink-0">
          <Avatar initials={seller.initials} size="sm" />
        </Link>
        <div className="flex flex-1 flex-col gap-px">
          <div className="flex items-center gap-1.5">
            <div className="font-sans text-[14px] font-bold text-ink">
              {seller.name}
            </div>
            <VerifiedBadge />
          </div>
          <div className="font-sans text-[11px] font-medium text-trust">
            En ligne
          </div>
        </div>
      </div>

      <div className="flex flex-none items-center gap-2.5 border-b border-black/6 bg-cream px-5 py-2.5">
        <div
          className="h-[34px] w-[34px] shrink-0 rounded-lg"
          style={photoBg(listing.img, 5)}
        />
        <div className="flex flex-1 flex-col">
          <div className="font-sans text-[12px] font-semibold text-ink">
            {listing.title} · {listing.sub}
          </div>
          <div className="font-display text-[12px] font-bold text-indigo">
            {formatFcfa(listing.price)}
          </div>
        </div>
        <Link
          href={`/annonces/${listing.id}/achat`}
          className="shrink-0 rounded-pill bg-indigo px-3 py-2 font-sans text-[11px] font-bold text-cream transition-colors hover:bg-indigo-hover"
        >
          Acheter
        </Link>
      </div>

      <div className="flex min-h-0 flex-1 flex-col gap-2.5 overflow-y-auto px-5 py-4">
        <div className="self-center rounded-pill bg-black/4 px-2.5 py-1 font-sans text-[10.5px] font-medium text-ink/40">
          Aujourd&apos;hui
        </div>

        {messages.map((m, i) => (
          <div
            key={i}
            className={`max-w-[75%] px-3.5 py-2.5 font-sans text-[13.5px] font-medium leading-snug ${
              m.fromMe
                ? "self-end rounded-[16px_16px_4px_16px] bg-indigo text-cream"
                : "self-start rounded-[16px_16px_16px_4px] bg-[#f1efe8] text-ink"
            }`}
          >
            {m.text}
          </div>
        ))}

        <div className="mt-1 flex max-w-[88%] items-start gap-2.5 self-center rounded-xl bg-trust/9 px-3.5 py-3">
          <ShieldCheck
            size={16}
            strokeWidth={2}
            className="mt-px shrink-0 text-trust"
          />
          <div className="font-sans text-[10.5px] font-medium leading-relaxed text-trust-darker">
            Ne paie jamais en dehors de Silka. Utilise « Acheter en sécurité »
            pour être protégé.
          </div>
        </div>
      </div>

      <div className="flex flex-none items-center gap-2.5 border-t border-black/8 px-5 pb-[22px] pt-3">
        <input
          value={draft}
          onChange={(e) => setDraft(e.target.value)}
          onKeyDown={(e) => {
            if (e.key === "Enter") send();
          }}
          placeholder="Écris ton message…"
          className="flex-1 rounded-pill border-[1.5px] border-indigo/25 px-4 py-3 text-[13.5px] text-ink focus:outline-2 focus:outline-indigo/35"
        />
        <button
          type="button"
          onClick={send}
          aria-label="Envoyer"
          className="flex h-11 w-11 shrink-0 cursor-pointer items-center justify-center rounded-full bg-indigo text-cream transition-colors hover:bg-indigo-hover"
        >
          <Send size={18} strokeWidth={2} />
        </button>
      </div>
    </div>
  );
}
