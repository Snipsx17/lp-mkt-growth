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
          entryFileNames: 'assets/[name].js',
          chunkFileNames: 'assets/[name].js',
          assetFileNames: 'assets/[name].[ext]',
          manualChunks: () => "everything.js",
        },
      },
    },
  },
});