import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

export default defineConfig({
  base: "/r/",

  build: {
    outDir: "../public-react",
    emptyOutDir: true,
  },

  plugins: [react()],
});