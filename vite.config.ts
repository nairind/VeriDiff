import path from "path"
import react from "@vitejs/plugin-react"
import { defineConfig } from "vite"

export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
    },
  },
  preview: {
    allowedHosts: [
      "4173-i3secn8n75lwz0wf5laie-9f85afeb.manusvm.computer",
      "i3secn8n75lwz0wf5laie-9f85afeb.manusvm.computer",
      ".manusvm.computer"
    ],
  },
})
