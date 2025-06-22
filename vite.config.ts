import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import tailwindcss from "@tailwindcss/vite";

export default defineConfig({
  plugins: [react(), tailwindcss()],
  base: "/Portfolio-Website",
  build: {
    outDir: "dist", // ✅ makes sure output is in 'dist'
    emptyOutDir: true,
    rollupOptions: {
      treeshake: true,
      external: [
        "./node-modules/*", // ⛔ local file to exclude
      ],
      output: {
        manualChunks: undefined,
      }
    }, 
  },
});
