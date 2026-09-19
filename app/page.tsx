import Link from "next/link";
import PageHeader from "@/components/PageHeader";
import ProjectCard from "@/components/ProjectCard";
import NewsCard from "@/components/NewsCard";
import StatCard from "@/components/StatCard";
import { news, projects } from "@/data/mock";

const workflow = ["Character", "Project", "AI Planning", "Scenes", "Images", "Approval", "Video"];

export default function Dashboard() {
  return <>
    <PageHeader eyebrow="Workspace overview" title="Good morning, Creator" description="오늘의 Shorts 제작 현황을 한눈에 확인하세요." action={{ label: "+ Create Shorts", href: "/create" }} />
    <section className="mb-7 grid grid-cols-4 gap-4"><StatCard label="Active projects" value="6" detail="2 need your review" color="text-violet" /><StatCard label="Characters" value="3" detail="All identities locked" /><StatCard label="Scenes generated" value="28" detail="+8 this week" /><StatCard label="Completed shorts" value="12" detail="3 platforms" color="text-mint" /></section>
    <section className="panel mb-7 p-5"><div className="mb-5 flex items-center justify-between"><div><h2 className="font-semibold">Production workflow</h2><p className="mt-1 text-xs text-slate-500">현재 프로젝트의 전체 제작 단계</p></div><Link href="/create?project=p1" className="text-sm text-violet">Continue project →</Link></div>
      <div className="flex items-center">{workflow.map((step, index) => <div key={step} className="flex flex-1 items-center last:flex-none"><div className="flex flex-col items-center gap-2"><span className={`grid h-9 w-9 place-items-center rounded-full border text-xs font-semibold ${index < 4 ? "border-violet bg-violet text-white" : index === 4 ? "border-violet bg-violet/15 text-violet" : "border-line bg-[#0b0e15] text-slate-600"}`}>{index < 4 ? "✓" : index + 1}</span><span className={`whitespace-nowrap text-[11px] ${index <= 4 ? "text-slate-300" : "text-slate-600"}`}>{step}</span></div>{index < workflow.length - 1 && <div className={`mx-2 mb-5 h-px flex-1 ${index < 4 ? "bg-violet" : "bg-line"}`} />}</div>)}</div>
    </section>
    <div className="mb-7 flex items-center justify-between"><h2 className="text-lg font-semibold">Recent projects</h2><Link href="/projects" className="text-sm text-slate-400">View all →</Link></div>
    <section className="mb-9 grid grid-cols-3 gap-5">{projects.map(project => <ProjectCard key={project.id} project={project} />)}</section>
    <div className="mb-5 flex items-center justify-between"><h2 className="text-lg font-semibold">Latest AI news</h2><Link href="/news" className="text-sm text-slate-400">Explore news →</Link></div>
    <section className="grid grid-cols-2 gap-5">{news.slice(0, 2).map(item => <NewsCard key={item.id} item={item} />)}</section>
  </>;
}
