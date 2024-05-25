import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import babel from "@rollup/plugin-babel";

// Production config

export default defineConfig({
  plugins: [
    react(),
    babel({
      babelHelpers: "bundled",
      extensions: [".js", ".jsx", ".ts", ".tsx"],
      include: ["src/**/*"],
    }),
  ],
  build: {
    outDir: "dist",
  },
});
