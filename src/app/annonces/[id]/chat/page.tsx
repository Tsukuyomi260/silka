import { notFound } from "next/navigation";
import { ChatView } from "@/components/ChatView";
import { getListing, getSeller } from "@/lib/data";

export default async function ChatPage({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const { id } = await params;
  const listing = getListing(id);
  if (!listing) notFound();
  const seller = getSeller(listing.sellerId);
  if (!seller) notFound();

  return <ChatView listing={listing} seller={seller} />;
}
