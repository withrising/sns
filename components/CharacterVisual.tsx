export default function CharacterVisual({ name, accent, large = false }: { name: string; accent: string; large?: boolean }) {
  return <div className={`relative overflow-hidden bg-gradient-to-br ${accent} ${large ? "h-64" : "h-44"}`}>
    <div className="absolute -right-8 -top-8 h-32 w-32 rounded-full bg-white/10 blur-2xl" />
    <div className="absolute inset-x-0 bottom-0 mx-auto h-[78%] w-[62%] rounded-t-[48%] bg-black/25" />
    <div className="absolute left-1/2 top-[18%] h-[42%] w-[38%] -translate-x-1/2 rounded-[46%] bg-gradient-to-b from-[#e5bca7]/90 to-[#b98272]/90 shadow-2xl" />
    <div className="absolute left-1/2 top-[13%] h-[25%] w-[42%] -translate-x-1/2 rounded-t-full rounded-b-[40%] bg-[#181621]" />
    <div className="absolute bottom-3 left-3 rounded-lg bg-black/30 px-2 py-1 text-xs font-semibold backdrop-blur">{name}</div>
  </div>;
}
