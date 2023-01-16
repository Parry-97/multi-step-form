import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  assetsInclude: ["/multi-step-form/assets/images/**"],
  base: "/multi-step-form/",
});
