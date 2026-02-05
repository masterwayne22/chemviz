import { defineConfig } from "vite";
import react from "@vitejs/plugin-react-swc";
import path from "path";

export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
      // This forces the builder to look exactly in the local node_modules
      "next-themes": path.resolve(__dirname, "node_modules/next-themes"),
    },
  },
  build: {
    rollupOptions: {
      // This ensures Rollup doesn't try to find it elsewhere
      external: [],
    },
    commonjsOptions: {
      include: [/next-themes/, /node_modules/],
    },
  },
});