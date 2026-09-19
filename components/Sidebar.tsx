"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

const items = [
  { href: "/", icon: "⌂", label: "Dashboard" },
  { href: "/characters", icon: "◇", label: "AI Characters" },
  { href: "/projects", icon: "▱", label: "Shorts Projects" },
  { href: "/create", icon: "+", label: "Create Shorts" },
  { href: "/news", icon: "◉", label: "AI News" },
];

export default function Sidebar() {
  const pathname = usePathname();
  return (
    <aside className="fixed inset-y-0 left-0 z-20 flex w-64 flex-col border-r border-line bg-[#0a0c12]/95 px-4 py-6 backdrop-blur">
      <Link href="/" className="mb-9 flex items-center gap-3 px-2">
        <span className="grid h-10 w-10 place-items-center rounded-xl bg-gradient-to-br from-violet to-[#5e42da] text-lg font-black shadow-glow">S</span>
        <div><p className="font-bold leading-none">AI Shorts</p><p className="mt-1 text-xs text-slate-500">STUDIO</p></div>
      </Link>
      <nav className="space-y-1.5">
        {items.map((item) => {
          const active = item.href === "/" ? pathname === "/" : pathname.startsWith(item.href);
          return <Link key={item.href} href={item.href} className={`flex items-center gap-3 rounded-xl px-3.5 py-3 text-sm transition ${active ? "bg-violet/15 text-white" : "text-slate-400 hover:bg-white/5 hover:text-white"}`}>
            <span className={`grid h-6 w-6 place-items-center text-base ${active ? "text-violet" : ""}`}>{item.icon}</span>{item.label}
          </Link>;
        })}
      </nav>
      <div className="mt-auto space-y-3">
        <Link href="/settings" className={`flex items-center gap-3 rounded-xl px-3.5 py-3 text-sm ${pathname === "/settings" ? "bg-violet/15 text-white" : "text-slate-400 hover:text-white"}`}><span className="grid h-6 w-6 place-items-center">⚙</span>Settings</Link>
        <div className="rounded-xl border border-line bg-white/[.025] p-3">
          <div className="mb-2 flex items-center justify-between text-xs"><span className="text-slate-400">Mock mode</span><span className="text-mint">● Active</span></div>
          <p className="text-[11px] leading-relaxed text-slate-600">AI와 데이터베이스가 연결되지 않은 안전한 데모입니다.</p>
        </div>
      </div>
    </aside>
  );
}
