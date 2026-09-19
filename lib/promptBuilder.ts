import { Character, Scene } from "@/types";

export function buildImagePrompt(character: Character, scene: Scene, projectStyle: string) {
  const lockRules = [
    character.locks.face && `Keep the exact same face: ${character.face}`,
    character.locks.hairstyle && `Keep the exact same hairstyle: ${character.hairstyle}`,
    character.locks.body && `Keep the same body proportions: ${character.body}`,
    character.locks.outfit && `Keep the same outfit: ${character.outfit}`,
  ].filter(Boolean).join(". ");

  return [
    `[CHARACTER PROFILE]\n${character.prompt}. ${character.description}`,
    `[CHARACTER LOCK RULES]\n${lockRules || "No identity locks enabled."}`,
    `[PROJECT STYLE]\n${projectStyle}, vertical 9:16 composition, cinematic social media short`,
    `[SCENE]\n${scene.description}. ${scene.imagePrompt}`,
    `[CAMERA]\n${scene.camera}`,
    `[NEGATIVE PROMPT]\n${character.negativePrompt}`,
  ].join("\n\n");
}
