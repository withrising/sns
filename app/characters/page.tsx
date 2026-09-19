"use client";

import { useState } from "react";
import PageHeader from "@/components/PageHeader";
import CharacterCard from "@/components/CharacterCard";
import CharacterVisual from "@/components/CharacterVisual";
import { characters } from "@/data/mock";

const refs = ["Front face", "45° face", "Full body", "Side"];

export default function CharactersPage() {
  const [showForm, setShowForm] = useState(false);
  const [locks, setLocks] = useState({ face: true, hairstyle: true, body: true, outfit: false });
  return <>
    <PageHeader eyebrow="Identity library" title="AI Characters" description="반복해서 사용할 AI 캐릭터의 외모와 정체성을 관리합니다." />
    <div className="mb-6 flex items-center justify-between"><p className="text-sm text-slate-500">3 saved characters</p><button className="primary" onClick={() => setShowForm(!showForm)}>{showForm ? "Close editor" : "+ New Character"}</button></div>
    {showForm && <section className="panel mb-7 overflow-hidden"><div className="border-b border-line px-6 py-4"><h2 className="font-semibold">Create a character</h2><p className="mt-1 text-xs text-slate-500">나중에 실제 저장 기능을 Supabase와 연결할 수 있습니다.</p></div>
      <div className="grid grid-cols-[1fr_300px] gap-8 p-6"><div className="grid grid-cols-2 gap-4">
        <Field label="Name" placeholder="e.g. Luna" /><Field label="Age" placeholder="24" /><Field label="Gender" placeholder="Female" /><Field label="Height" placeholder="168 cm" />
        <div className="col-span-2"><Field label="Description" placeholder="Character personality and role" area /></div><Field label="Face description" placeholder="Face shape, eyes, details" /><Field label="Hairstyle" placeholder="Hair color, length, style" /><Field label="Body proportions" placeholder="Build and proportions" /><Field label="Outfit" placeholder="Default outfit" />
        <div className="col-span-2"><Field label="Character prompt" placeholder="Base visual prompt for this character" area /></div><div className="col-span-2"><Field label="Negative prompt" placeholder="Things that must not appear" area /></div>
      </div><aside><p className="label">Character locks</p><div className="space-y-2 rounded-xl border border-line p-3">{Object.entries(locks).map(([key, value]) => <label key={key} className="flex cursor-pointer items-center justify-between rounded-lg px-2 py-2 text-sm capitalize hover:bg-white/[.03]"><span>Lock {key === "body" ? "body proportions" : key}</span><input type="checkbox" checked={value} onChange={() => setLocks({ ...locks, [key]: !value })} className="h-4 w-4 accent-[#876cff]" /></label>)}</div>
        <p className="label mt-5">Reference images</p><div className="grid grid-cols-2 gap-2">{refs.map(ref => <button key={ref} className="grid h-24 place-items-center rounded-xl border border-dashed border-line bg-[#0b0e15] text-center text-xs text-slate-500 hover:border-violet"><span><b className="mb-1 block text-lg text-slate-400">+</b>{ref}</span></button>)}</div>
        <button onClick={() => setShowForm(false)} className="primary mt-5 w-full">Save mock character</button></aside></div>
    </section>}
    <section className="grid grid-cols-3 gap-5">{characters.map(character => <CharacterCard key={character.id} character={character} />)}</section>
    <section className="panel mt-8 grid grid-cols-[220px_1fr] overflow-hidden"><CharacterVisual name="Luna" accent={characters[0].accent} large /><div className="p-6"><div className="flex items-center justify-between"><div><p className="text-xs uppercase tracking-widest text-violet">Selected profile</p><h2 className="mt-2 text-xl font-semibold">Luna identity details</h2></div><span className="chip text-mint">● 3 locks active</span></div><div className="mt-5 grid grid-cols-2 gap-x-8 gap-y-4 text-sm"><Info label="Face" value={characters[0].face} /><Info label="Hairstyle" value={characters[0].hairstyle} /><Info label="Body" value={characters[0].body} /><Info label="Outfit" value={characters[0].outfit} /></div><div className="mt-5 rounded-xl border border-violet/20 bg-violet/5 p-3 text-xs leading-relaxed text-slate-400"><b className="text-violet">Character Lock</b>은 이미지 프롬프트마다 잠긴 외모 정보를 자동으로 추가해 같은 캐릭터가 유지되도록 돕습니다.</div></div></section>
  </>;
}

function Field({ label, placeholder, area }: { label: string; placeholder: string; area?: boolean }) { return <label><span className="label">{label}</span>{area ? <textarea className="input min-h-20 resize-none" placeholder={placeholder} /> : <input className="input" placeholder={placeholder} />}</label>; }
function Info({ label, value }: { label: string; value: string }) { return <div><p className="text-xs text-slate-600">{label}</p><p className="mt-1 text-slate-300">{value}</p></div>; }
