"use client";

import { useState } from "react";
import PageHeader from "@/components/PageHeader";
import NewsCard from "@/components/NewsCard";
import { news } from "@/data/mock";

const categories = ["All", "Image AI", "Video AI", "LLM", "Development"];

export default function NewsPage() {
  const [category, setCategory] = useState("All");
  const filtered = category === "All" ? news : news.filter(item => item.category === category);
  return <><PageHeader eyebrow="Trend radar" title="AI News" description="최신 AI 흐름을 발견하고 바로 Shorts 아이디어로 전환하세요." />
    <div className="mb-6 flex gap-2">{categories.map(item => <button key={item} onClick={() => setCategory(item)} className={`rounded-xl px-4 py-2 text-sm transition ${category === item ? "bg-violet text-white" : "border border-line text-slate-400 hover:text-white"}`}>{item}</button>)}</div>
    <section className="grid grid-cols-2 gap-5">{filtered.map(item => <NewsCard key={item.id} item={item} />)}</section>
  </>;
}
