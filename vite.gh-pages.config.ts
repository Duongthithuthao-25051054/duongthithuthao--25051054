import tailwindcss from "@tailwindcss/vite";
import react from "@vitejs/plugin-react";
import { defineConfig } from "vite";
import tsconfigPaths from "vite-tsconfig-paths";

const basePath = process.env.BASE_PATH || "/";

export default defineConfig({
  base: basePath,
  plugins: [react(), tailwindcss(), tsconfigPaths()],
  build: {
    outDir: "dist-gh-pages",
    emptyOutDir: true,
    rollupOptions: {
      input: "index.gh-pages.html",
    },
  },
});