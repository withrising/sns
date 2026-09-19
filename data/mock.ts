import { Character, NewsItem, Project, Scene } from "@/types";

export const characters: Character[] = [
  { id: "luna", name: "Luna", age: 24, gender: "Female", height: "168 cm", description: "Tech-savvy digital creator with a calm, confident presence.", face: "oval face, warm brown eyes, subtle freckles", hairstyle: "long silver-lavender hair, soft waves", body: "slender athletic build, balanced proportions", outfit: "minimal black techwear jacket", prompt: "cinematic portrait of Luna, soft lavender rim light, realistic editorial style", negativePrompt: "different person, facial distortion, extra fingers, low quality, text, watermark", locks: { face: true, hairstyle: true, body: true, outfit: false }, accent: "from-[#8067d9] to-[#302655]" },
  { id: "kai", name: "Kai", age: 28, gender: "Male", height: "181 cm", description: "Friendly AI educator who explains difficult ideas simply.", face: "angular face, dark eyes, gentle smile", hairstyle: "short textured black hair", body: "lean build, broad shoulders", outfit: "charcoal crewneck and utility overshirt", prompt: "cinematic portrait of Kai, modern studio, realistic editorial style", negativePrompt: "different person, distorted face, extra limbs, low quality, watermark", locks: { face: true, hairstyle: true, body: true, outfit: true }, accent: "from-[#23687a] to-[#102f3b]" },
  { id: "mira", name: "Mira", age: 26, gender: "Female", height: "165 cm", description: "Bright trend reporter with playful, energetic expressions.", face: "heart-shaped face, hazel eyes, bright smile", hairstyle: "copper bob with straight bangs", body: "petite balanced proportions", outfit: "cream bomber jacket with orange details", prompt: "vibrant portrait of Mira, warm studio lighting, highly detailed", negativePrompt: "different identity, asymmetrical eyes, blur, text, logo", locks: { face: true, hairstyle: true, body: false, outfit: true }, accent: "from-[#b85a3d] to-[#51291e]" },
];

export const projects: Project[] = [
  { id: "p1", title: "AI 영상의 다음 5년", platform: "YouTube Shorts", duration: "45 sec", characterId: "luna", status: "Image Review", progress: 72, updatedAt: "Today, 10:24", accent: "from-[#5242a0] to-[#1c2039]" },
  { id: "p2", title: "3가지 프롬프트 습관", platform: "Instagram Reels", duration: "30 sec", characterId: "kai", status: "Planning", progress: 35, updatedAt: "Yesterday", accent: "from-[#17677a] to-[#172936]" },
  { id: "p3", title: "생성형 AI 주간 뉴스", platform: "TikTok", duration: "60 sec", characterId: "mira", status: "Complete", progress: 100, updatedAt: "Sep 16", accent: "from-[#a14b35] to-[#35211f]" },
];

export const scenes: Scene[] = [
  { number: 1, description: "Luna steps into a futuristic studio as floating screens appear.", dialogue: "AI 영상, 앞으로 5년 뒤엔 어떻게 달라질까요?", duration: "0–5s", camera: "Medium shot, slow push-in", imagePrompt: "futuristic studio entrance, floating translucent displays, lavender lighting", videoPrompt: "slow camera push-in, hair moves naturally, screens gently animate", imageStatus: "Approved", videoStatus: "Ready" },
  { number: 2, description: "A timeline expands beside Luna with three turning points.", dialogue: "제작 시간은 줄고, 누구나 자신만의 세계를 만들게 됩니다.", duration: "5–14s", camera: "Waist shot, slight orbit right", imagePrompt: "holographic timeline with three bright nodes, cinematic tech studio", videoPrompt: "camera orbits right, timeline unfolds, natural hand gesture", imageStatus: "Generated", videoStatus: "Locked" },
  { number: 3, description: "Luna points to a wall of personalized vertical videos.", dialogue: "그리고 콘텐츠는 시청자마다 실시간으로 달라질 거예요.", duration: "14–24s", camera: "Wide shot, rack focus to screens", imagePrompt: "wall of vertical personalized video panels, purple and cyan glow", videoPrompt: "rack focus from presenter to screen wall, subtle parallax", imageStatus: "Ready", videoStatus: "Locked" },
];

export const news: NewsItem[] = [
  { id: "n1", title: "영상 생성 모델, 더 긴 장면의 일관성에 집중", summary: "최신 영상 생성 기술이 캐릭터와 배경을 여러 장면에 걸쳐 일관되게 유지하는 방향으로 발전하고 있습니다.", category: "Video AI", date: "Sep 19, 2026", accent: "from-[#5d48bc] to-[#161c35]" },
  { id: "n2", title: "작은 언어 모델이 온디바이스 AI를 바꾼다", summary: "가벼운 모델이 스마트폰과 노트북에서 빠르게 작동하며 개인 정보 보호와 반응 속도를 개선합니다.", category: "LLM", date: "Sep 18, 2026", accent: "from-[#21677a] to-[#142932]" },
  { id: "n3", title: "이미지 편집 AI, 자연어 제어 정확도 향상", summary: "대화하듯 수정 사항을 말하면 인물의 정체성과 구도를 유지한 채 이미지를 정교하게 바꿀 수 있습니다.", category: "Image AI", date: "Sep 17, 2026", accent: "from-[#98512f] to-[#31211a]" },
  { id: "n4", title: "AI 코딩 도구의 새 흐름: 계획부터 테스트까지", summary: "개발 도구가 단순 코드 완성을 넘어 계획, 구현, 테스트를 연결하는 작업 흐름으로 확장되고 있습니다.", category: "Development", date: "Sep 16, 2026", accent: "from-[#34704f] to-[#172c23]" },
];
