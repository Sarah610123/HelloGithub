import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

export default defineConfig({
  // Relative asset paths so it works on GitHub Pages under /HelloGithub/
  // regardless of trailing slash or path casing.
  base: "./",
  plugins: [react()],
});
