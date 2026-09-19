import PageHeader from "@/components/PageHeader";
import ProjectCard from "@/components/ProjectCard";
import { projects } from "@/data/mock";

export default function ProjectsPage() {
  return <><PageHeader eyebrow="Production" title="Shorts Projects" description="기획부터 영상 생성까지 모든 Shorts 작업을 관리합니다." action={{ label: "+ New Project", href: "/create" }} />
    <div className="panel mb-6 flex items-center gap-3 p-3"><input className="input max-w-sm" placeholder="Search projects..." /><button className="secondary">All status</button><button className="secondary">All platforms</button><span className="ml-auto pr-2 text-xs text-slate-500">3 projects</span></div>
    <section className="grid grid-cols-3 gap-5">{projects.map(project => <ProjectCard key={project.id} project={project} />)}</section>
  </>;
}
