import Link from "next/link";
import { Project } from "@/types";
import { characters } from "@/data/mock";

export default function ProjectCard({ project }: { project: Project }) {
  const character = characters.find((item) => item.id === project.characterId);
  return <article className="panel overflow-hidden">
    <div className={`relative h-32 bg-gradient-to-br ${project.accent} p-4`}><span className="chip bg-black/25">{project.platform}</span><span className="absolute bottom-3 right-3 text-4xl font-black text-white/10">9:16</span></div>
    <div className="p-4"><div className="flex items-start justify-between gap-3"><div><h3 className="font-semibold">{project.title}</h3><p className="mt-1 text-xs text-slate-500">with {character?.name} · {project.duration}</p></div><span className={`chip ${project.status === "Complete" ? "text-mint" : "text-violet"}`}>{project.status}</span></div>
      <div className="mt-4"><div className="mb-2 flex justify-between text-[11px] text-slate-500"><span>Progress</span><span>{project.progress}%</span></div><div className="h-1.5 overflow-hidden rounded-full bg-white/5"><div className="h-full rounded-full bg-violet" style={{ width: `${project.progress}%` }} /></div></div>
      <div className="mt-4 flex items-center justify-between"><span className="text-xs text-slate-600">{project.updatedAt}</span><Link href="/create?project=p1" className="text-sm font-medium text-violet">Open →</Link></div>
    </div>
  </article>;
}
