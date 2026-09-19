import Link from "next/link";
import { NewsItem } from "@/types";

export default function NewsCard({ item }: { item: NewsItem }) {
  return <article className="panel overflow-hidden">
    <div className={`h-28 bg-gradient-to-br ${item.accent} p-4`}><span className="chip bg-black/20">{item.category}</span><div className="mt-5 flex gap-2 opacity-30">{[1,2,3,4,5].map(i => <span key={i} className="h-7 w-7 rounded-lg border border-white/40" />)}</div></div>
    <div className="p-5"><p className="text-xs text-slate-500">{item.date}</p><h3 className="mt-2 font-semibold leading-snug">{item.title}</h3><p className="mt-2 text-sm leading-relaxed text-slate-400">{item.summary}</p>
      <Link href={`/create?topic=${encodeURIComponent(`${item.title} — ${item.summary}`)}`} className="secondary mt-4 inline-flex">Create Shorts →</Link>
    </div>
  </article>;
}
