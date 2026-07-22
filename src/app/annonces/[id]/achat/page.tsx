import { notFound } from "next/navigation";
import { TunnelFlow } from "@/components/TunnelFlow";
import { getListing } from "@/lib/data";

export default async function AchatPage({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const { id } = await params;
  const listing = getListing(id);
  if (!listing) notFound();

  return <TunnelFlow listing={listing} />;
}
