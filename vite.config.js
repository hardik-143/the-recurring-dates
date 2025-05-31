import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

export default defineConfig({
  plugins: [react()],
  build: {
    lib: {
      entry: "src/index.js",
      name: "TheRecurringDates",
      fileName: (format) => {
        if (format === "es") return "index.esm.js";
        if (format === "cjs") return "index.js";
        return `index.${format}.js`;
      },
      formats: ["es", "cjs", "umd"],
    },
    rollupOptions: {
      external: ["react", "react-dom"],
      output: {
        globals: {
          react: "React",
          "react-dom": "ReactDOM",
        },
      },
    },
  },
  server: {
    fs: {
      allow: ["."],
    },
  },
});
