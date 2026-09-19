export interface VideoProvider {
  name: string;
  generate(imageUrl: string, prompt: string): Promise<{ mockUrl: string }>;
}
