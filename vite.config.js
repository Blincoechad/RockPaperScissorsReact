import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// Vite build config. The React plugin is what lets Vite understand
// JSX syntax and gives us instant reload while developing.
export default defineConfig({
  plugins: [react()],
});
