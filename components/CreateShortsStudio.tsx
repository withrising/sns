"use client";

import { useMemo, useState } from "react";
import { useSearchParams } from "next/navigation";
import PageHeader from "./PageHeader";
import SceneCard from "./SceneCard";
import { characters, scenes as initialScenes } from "@/data/mock";
import { Scene } from "@/types";

const steps = ["Project Setup", "AI Planning", "Scene List", "Images", "Video"];

export default function CreateShortsStudio() {
  const params = useSearchParams();
  const newsTopic = params.get("topic") || "AI 영상 기술이 앞으로 5년 동안 콘텐츠 제작을 어떻게 바꿀까?";
  const [activeStep, setActiveStep] = useState(params.get("project") ? 2 : 0);
  const [characterId, setCharacterId] = useState("luna");
  const [topic, setTopic] = useState(newsTopic);
  const [sceneList, setSceneList] = useState<Scene[]>(initialScenes);
  const [prompt, setPrompt] = useState<string | null>(null);
  const character = useMemo(() => characters.find(item => item.id === characterId) || characters[0], [characterId]);

  const updateScene = (number: number, change: Partial<Scene>) => setSceneList(list => list.map(scene => scene.number === number ? { ...scene, ...change } : scene));
  return <>
    <PageHeader eyebrow="New production" title="Create Shorts" description="주제 입력부터 장면 이미지 승인과 영상 생성까지 순서대로 진행하세요." />
    <div className="panel mb-7 flex items-center px-6 py-4">{steps.map((step, index) => <button key={step} onClick={() => setActiveStep(index)} className="flex flex-1 items-center text-left"><span className={`grid h-8 w-8 shrink-0 place-items-center rounded-full text-xs font-bold ${index <= activeStep ? "bg-violet text-white" : "border border-line text-slate-600"}`}>{index < activeStep ? "✓" : index + 1}</span><span className={`ml-2 text-xs ${index === activeStep ? "text-white" : "text-slate-500"}`}>{step}</span>{index < steps.length - 1 && <span className={`mx-3 h-px flex-1 ${index < activeStep ? "bg-violet" : "bg-line"}`} />}</button>)}</div>

    {activeStep === 0 && <section className="grid grid-cols-[1fr_340px] gap-6"><div className="panel p-6"><h2 className="text-lg font-semibold">Project details</h2><div className="mt-5 grid grid-cols-2 gap-4"><Field label="Project title" defaultValue={params.get("topic") ? "AI 뉴스 쇼츠" : "AI 영상의 다음 5년"} /><Select label="Platform" options={["Instagram Reels", "TikTok", "YouTube Shorts"]} /><Select label="Target duration" options={["30 seconds", "45 seconds", "60 seconds"]} /><Select label="Aspect ratio" options={["9:16", "1:1", "16:9"]} /><label className="col-span-2"><span className="label">AI character</span><select className="input" value={characterId} onChange={event => setCharacterId(event.target.value)}>{characters.map(item => <option value={item.id} key={item.id}>{item.name} — {item.description}</option>)}</select></label><label className="col-span-2"><span className="label">Topic</span><textarea className="input min-h-24 resize-none" value={topic} onChange={event => setTopic(event.target.value)} /></label><Select label="Tone" options={["Clear & inspiring", "Friendly & playful", "Bold & dramatic", "Educational"]} /></div><button className="primary mt-6" onClick={() => setActiveStep(1)}>Create AI Plan →</button></div><Summary characterId={characterId} /></section>}

    {activeStep === 1 && <section className="grid grid-cols-[1fr_340px] gap-6"><div className="panel p-6"><div className="flex items-center justify-between"><div><p className="text-xs uppercase tracking-widest text-mint">Mock AI result</p><h2 className="mt-2 text-xl font-semibold">AI 영상의 미래, 지금 시작됩니다</h2></div><button className="secondary">Regenerate</button></div><Plan label="Hook" text="AI 영상, 앞으로 5년 뒤엔 어떻게 달라질까요? 단 30초 안에 미래를 보여드릴게요." /><Plan label="Description" text="생성형 영상 기술의 발전과 개인화 콘텐츠의 미래를 쉽고 빠르게 설명하는 교육형 Shorts입니다." /><Plan label="Full script" text="AI 영상 기술은 놀라운 속도로 발전하고 있습니다. 제작 시간은 줄어들고, 누구나 자신만의 세계를 만들 수 있게 되죠. 머지않아 콘텐츠는 시청자마다 실시간으로 달라질 겁니다. 중요한 건 기술보다 지금 시작하는 것입니다." /><button className="primary mt-6" onClick={() => setActiveStep(2)}>Use Plan & View Scenes →</button></div><Summary characterId={characterId} /></section>}

    {activeStep >= 2 && <section><div className="mb-5 flex items-center justify-between"><div><h2 className="text-lg font-semibold">Scene list</h2><p className="mt-1 text-xs text-slate-500">각 이미지가 마음에 들면 승인하세요. 승인된 장면만 영상 생성이 가능합니다.</p></div><div className="flex gap-2"><span className="chip">{sceneList.filter(s => s.imageStatus === "Approved").length}/{sceneList.length} approved</span><button className="secondary">+ Add Scene</button></div></div><div className="space-y-5">{sceneList.map(scene => <SceneCard key={scene.number} scene={scene} character={character} onPrompt={setPrompt} onGenerate={() => updateScene(scene.number, { imageStatus: "Generated", videoStatus: "Locked" })} onApprove={() => updateScene(scene.number, { imageStatus: "Approved", videoStatus: "Ready" })} onVideo={() => updateScene(scene.number, { videoStatus: "Generated" })} />)}</div></section>}
    {prompt && <div className="fixed inset-0 z-50 grid place-items-center bg-black/75 p-8 backdrop-blur-sm" onClick={() => setPrompt(null)}><div className="panel max-h-[80vh] w-full max-w-2xl overflow-auto p-6 shadow-glow" onClick={event => event.stopPropagation()}><div className="flex items-center justify-between"><div><p className="text-xs uppercase tracking-widest text-violet">Prompt Builder</p><h2 className="mt-1 text-xl font-semibold">Final image prompt</h2></div><button className="secondary" onClick={() => setPrompt(null)}>Close</button></div><p className="mt-5 whitespace-pre-wrap rounded-xl border border-line bg-[#090b11] p-5 font-mono text-xs leading-6 text-slate-300">{prompt}</p><p className="mt-3 text-xs text-slate-500">캐릭터 프로필 + 잠금 규칙 + 프로젝트 스타일 + 장면 + 카메라 + 네거티브 프롬프트가 자동으로 합쳐졌습니다.</p></div></div>}
  </>;
}

function Field({ label, defaultValue }: { label: string; defaultValue: string }) { return <label><span className="label">{label}</span><input className="input" defaultValue={defaultValue} /></label>; }
function Select({ label, options }: { label: string; options: string[] }) { return <label><span className="label">{label}</span><select className="input">{options.map(option => <option key={option}>{option}</option>)}</select></label>; }
function Plan({ label, text }: { label: string; text: string }) { return <div className="mt-5 rounded-xl border border-line bg-[#0b0e15] p-4"><p className="text-xs font-semibold uppercase tracking-wider text-slate-600">{label}</p><p className="mt-2 text-sm leading-7 text-slate-300">{text}</p></div>; }
function Summary({ characterId }: { characterId: string }) { const character = characters.find(item => item.id === characterId) || characters[0]; return <aside className="panel h-fit p-5"><p className="text-xs uppercase tracking-widest text-violet">Character active</p><div className="mt-4 flex items-center gap-3"><div className={`h-14 w-14 rounded-xl bg-gradient-to-br ${character.accent}`} /><div><p className="font-semibold">{character.name}</p><p className="mt-1 text-xs text-slate-500">Identity profile attached</p></div></div><div className="mt-5 space-y-2">{Object.entries(character.locks).map(([key, value]) => <div key={key} className="flex justify-between text-xs"><span className="capitalize text-slate-500">{key} lock</span><span className={value ? "text-mint" : "text-slate-600"}>{value ? "● On" : "Off"}</span></div>)}</div><div className="mt-5 rounded-xl bg-violet/5 p-3 text-xs leading-relaxed text-slate-400">이 캐릭터 정보는 모든 이미지 생성 요청에 자동으로 포함됩니다.</div></aside>; }
