import { VideoProvider } from "./types";

export const mockVideoProvider: VideoProvider = {
  name: "Mock Video Provider",
  async generate(imageUrl, prompt) {
    await new Promise(resolve => setTimeout(resolve, 350));
    return { mockUrl: `mock://video/${imageUrl.length + prompt.length}` };
  },
};
