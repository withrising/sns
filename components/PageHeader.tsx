import Link from "next/link";

export default function PageHeader({ eyebrow, title, description, action }: { eyebrow?: string; title: string; description: string; action?: { label: string; href: string } }) {
  return <header className="mb-7 flex items-end justify-between gap-4">
    <div>{eyebrow && <p className="mb-2 text-xs font-semibold uppercase tracking-[.22em] text-violet">{eyebrow}</p>}<h1 className="text-3xl font-bold tracking-tight">{title}</h1><p className="mt-2 text-sm text-slate-400">{description}</p></div>
    {action && <Link href={action.href} className="primary">{action.label}</Link>}
  </header>;
}
