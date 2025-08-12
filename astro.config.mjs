// @ts-check
import { defineConfig } from 'astro/config';
import react from '@astrojs/react';
import tailwindcss from "@tailwindcss/vite";

// https://astro.build/config
export default defineConfig({
  output: "static",
  integrations: [react()],
  build: {
    inlineStylesheets: "always", // Inline todos los CSS
    assets: "assets",
    assetsPrefix: "./", // Rutas relativas
  },
  vite: {
    plugins: [tailwindcss()],
    build: {
      assetsInlineLimit: 100000, // Inline assets pequeños
      rollupOptions: {
        output: {
          entryFileNames: "assets/bundle.js",
          chunkFileNames: "assets/bundle.js",
          assetFileNames: "assets/[name].[ext]",
          manualChunks: () => "bundle",
        },
        // Remover opciones problemáticas
        preserveEntrySignatures: false,
      },
      // Configuración de build
      target: "es2020",
      lib: false,
    },
  },
});