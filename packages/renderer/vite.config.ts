import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import { builtinModules } from "module";

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  build: {
    sourcemap: true,
    target: "modules",
    outDir: "dist",
    assetsDir: ".",
    rollupOptions: {
      external: [
        ...builtinModules.filter((m) => m !== "process" && m !== "assert"),
      ],
    },
    emptyOutDir: true,
  },
});
