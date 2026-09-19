import Link from "next/link";
import { Character } from "@/types";
import CharacterVisual from "./CharacterVisual";

export default function CharacterCard({ character }: { character: Character }) {
  const lockCount = Object.values(character.locks).filter(Boolean).length;
  return <article className="panel overflow-hidden transition hover:-translate-y-0.5 hover:border-slate-600">
    <CharacterVisual name={character.name} accent={character.accent} />
    <div className="p-4"><div className="flex items-center justify-between"><div><h3 className="font-semibold">{character.name}</h3><p className="mt-1 text-xs text-slate-500">{character.age} · {character.gender} · {character.height}</p></div><span className="chip">🔒 {lockCount}/4</span></div>
      <p className="mt-3 line-clamp-2 text-sm leading-relaxed text-slate-400">{character.description}</p>
      <Link href={`/characters?selected=${character.id}`} className="mt-4 block text-sm font-medium text-violet">View profile →</Link>
    </div>
  </article>;
}
