import { logs } from "@/data/logs";
import { notFound } from "next/navigation";
import LogDetailPageClient from "./page.client";
import type { Metadata } from "next";

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const resolvedParams = await params;
  const log = logs.find((l) => l.id === resolvedParams.slug);

  return {
    title: log?.title || "Research Log",
    description: log?.summary || "Strategic research and intelligence by Kenn Davis.",
    openGraph: {
      title: log?.title,
      description: log?.summary,
      images: log?.images ? [log.images[0]] : [],
    },
  };
}

export default async function LogDetailPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const resolvedParams = await params;
  const log = logs.find((l) => l.id === resolvedParams.slug);

  if (!log) {
    notFound();
  }

  return <LogDetailPageClient log={log} />;
}
