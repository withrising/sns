import { Suspense } from "react";
import CreateShortsStudio from "@/components/CreateShortsStudio";

export default function CreatePage() {
  return <Suspense fallback={<div className="text-sm text-slate-500">Loading studio...</div>}><CreateShortsStudio /></Suspense>;
}
