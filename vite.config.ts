import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import { resolve } from "path";
// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: {
      // Псевдоним для корневой папки src
      "@": resolve(__dirname, "src"),
      // // Псевдоним для папки с компонентами
      // '~components': resolve(__dirname, 'src/components'),
      // // Псевдоним для файла
      // '~config': resolve(__dirname, 'src/config.js'),
    },
  },
});
