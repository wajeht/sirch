import { defineConfig } from "vite";
import vue from "@vitejs/plugin-vue";

export default defineConfig({
  plugins: [vue()],
  root: "./src/app/ui",
  resolve: {
    alias: {
      "@": "./src/app/ui",
    },
  },
  build: {
    outDir: "../../public",
    emptyOutDir: false,
  },
});
