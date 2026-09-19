export interface ImageProvider {
  name: string;
  generate(prompt: string): Promise<{ mockUrl: string }>;
}
