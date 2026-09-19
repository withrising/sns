"use client";

import { Character, Scene } from "@/types";
import { buildImagePrompt } from "@/lib/promptBuilder";

export default function SceneCard({ scene, character, onGenerate, onApprove, onVideo, onPrompt }: { scene: Scene; character: Character; onGenerate: () => void; onApprove: () => void; onVideo: () => void; onPrompt: (prompt: string) => void }) {
  const generated = scene.imageStatus !== "Ready";
  const approved = scene.imageStatus === "Approved";
  const finalPrompt = buildImagePrompt(character, scene, "clean futuristic editorial, purple and cyan accents");
  return <article className="panel overflow-hidden">
    <div className="grid grid-cols-[260px_1fr]">
      <div className={`relative min-h-64 border-r border-line ${generated ? "bg-gradient-to-br from-[#4a3f81] via-[#20243d] to-[#102d35]" : "bg-[#0b0e15]"}`}>
        {generated ? <><div className="absolute left-1/2 top-10 h-20 w-20 -translate-x-1/2 rounded-full bg-[#d2a38f] shadow-[0_0_60px_rgba(135,108,255,.4)]" /><div className="absolute bottom-0 left-1/2 h-36 w-32 -translate-x-1/2 rounded-t-[48%] bg-[#151824]" /><div className="absolute left-5 top-5 text-5xl font-black text-white/10">{String(scene.number).padStart(2, "0")}</div></> : <div className="grid h-full min-h-64 place-items-center text-center"><div><span className="text-2xl text-slate-700">◇</span><p className="mt-2 text-xs text-slate-600">Image not generated</p></div></div>}
        <span className={`absolute bottom-3 left-3 rounded-lg px-2 py-1 text-[11px] font-medium backdrop-blur ${approved ? "bg-mint/20 text-mint" : generated ? "bg-amber-400/20 text-amber-300" : "bg-black/30 text-slate-500"}`}>{scene.imageStatus}</span>
      </div>
      <div className="p-5"><div className="flex items-start justify-between"><div><p className="text-xs font-semibold uppercase tracking-widest text-violet">Scene {scene.number} · {scene.duration}</p><h3 className="mt-2 font-medium">{scene.description}</h3></div><span className="chip">{scene.camera}</span></div>
        <div className="mt-4 rounded-xl bg-[#0b0e15] p-3"><p className="text-[10px] uppercase tracking-wider text-slate-600">Dialogue</p><p className="mt-1 text-sm text-slate-300">“{scene.dialogue}”</p></div>
        <div className="mt-4 grid grid-cols-2 gap-3 text-xs"><div><p className="text-slate-600">Image prompt</p><p className="mt-1 line-clamp-2 leading-relaxed text-slate-400">{scene.imagePrompt}</p></div><div><p className="text-slate-600">Video prompt</p><p className="mt-1 line-clamp-2 leading-relaxed text-slate-400">{scene.videoPrompt}</p></div></div>
        <div className="mt-5 flex flex-wrap gap-2"><button className="secondary" onClick={() => onPrompt(finalPrompt)}>View Final Prompt</button><button className="secondary" onClick={onGenerate}>{generated ? "Regenerate Image" : "Generate Image"}</button>{generated && !approved && <button className="primary" onClick={onApprove}>✓ Approve Image</button>}<button className={approved ? "primary" : "secondary cursor-not-allowed opacity-40"} disabled={!approved} onClick={onVideo}>{scene.videoStatus === "Generated" ? "Video Generated ✓" : "Generate Video Clip"}</button></div>
      </div>
    </div>
  </article>;
}
