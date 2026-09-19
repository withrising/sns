export default function StatCard({ label, value, detail, color = "text-white" }: { label: string; value: string; detail: string; color?: string }) {
  return <div className="panel p-5"><p className="text-sm text-slate-400">{label}</p><p className={`mt-3 text-3xl font-bold ${color}`}>{value}</p><p className="mt-2 text-xs text-slate-600">{detail}</p></div>;
}
