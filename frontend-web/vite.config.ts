import { defineConfig } from "vite";
import react from "@vitejs/plugin-react-swc";
import path from "path";

export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
      // Force Vite to find next-themes in the local node_modules
      "next-themes": path.resolve(__dirname, "node_modules/next-themes"),
    },
  },
  build: {
    rollupOptions: {
      // If the error persists, this tells Rollup to treat it as a runtime dependency
      external: [], 
    },
    commonjsOptions: {
      include: [/next-themes/, /node_modules/],
    },
  },
});