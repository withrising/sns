export type CharacterLocks = { face: boolean; hairstyle: boolean; body: boolean; outfit: boolean };

export type Character = {
  id: string; name: string; age: number; gender: string; height: string; description: string;
  face: string; hairstyle: string; body: string; outfit: string; prompt: string; negativePrompt: string;
  locks: CharacterLocks; accent: string;
};

export type Scene = {
  number: number; description: string; dialogue: string; duration: string; camera: string;
  imagePrompt: string; videoPrompt: string; imageStatus: "Ready" | "Generated" | "Approved";
  videoStatus: "Locked" | "Ready" | "Generated";
};

export type Project = {
  id: string; title: string; platform: string; duration: string; characterId: string;
  status: string; progress: number; updatedAt: string; accent: string;
};

export type NewsItem = { id: string; title: string; summary: string; category: string; date: string; accent: string };
