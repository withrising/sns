import { ImageProvider } from "./types";

export const mockImageProvider: ImageProvider = {
  name: "Mock Image Provider",
  async generate(prompt) {
    await new Promise(resolve => setTimeout(resolve, 350));
    return { mockUrl: `mock://image/${prompt.length}` };
  },
};
