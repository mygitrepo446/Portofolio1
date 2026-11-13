import react from "@vitejs/plugin-react";
import { defineConfig } from "vite";

export default defineConfig({
  base: "/Portofolio1/",
  plugins: [react()],
  preview: {
    host: "127.0.0.1",
    port: 4173,
    allowedHosts: true,
  },
  server: {
    host: "127.0.0.1",
    port: 5173,
    allowedHosts: true,
  },
});
