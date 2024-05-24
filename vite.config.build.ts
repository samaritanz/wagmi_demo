import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// Production config

export default defineConfig({
  plugins: [react()],
  build: {
    outDir: "dist",
  },
});
