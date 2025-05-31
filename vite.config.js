import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

export default defineConfig({
  plugins: [react()],
  build: {
    lib: {
      outDir: "dist/unminified",
      entry: "src/core/generateRecurringDates.js",
      name: "TheRecurringDates",
      fileName: () => "index.js",
      formats: ["umd"],
    },
    //  minify: false, // no minify
  },
  server: {
    fs: {
      allow: ["."],
    },
  },
});
