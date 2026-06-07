import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

export default defineConfig({
  // Served from https://<user>.github.io/HelloGithub/ on GitHub Pages.
  base: "/HelloGithub/",
  plugins: [react()],
});
