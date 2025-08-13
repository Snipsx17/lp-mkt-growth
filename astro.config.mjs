// astro.config.mjs
import { defineConfig } from "astro/config";
import react from "@astrojs/react";
import tailwindcss from "@tailwindcss/vite";

export default defineConfig({
  integrations: [],
  output: "static",
  build: {
    inlineStylesheets: "never",
    assets: "assets",
    assetsPrefix: "./",
  },
  vite: {
    plugins: [tailwindcss()],
    build: {
      cssCodeSplit: false,
      rollupOptions: {
        output: {
          entryFileNames: "assets/main.js",
          chunkFileNames: "assets/main.js",
          assetFileNames: (assetInfo) => {
            if (assetInfo.name && assetInfo.name.endsWith(".css")) {
              return "assets/styles.css";
            }
            return "assets/[name].[ext]";
          },
          manualChunks: () => "main",
        },
        // Configuraciones clave para evitar re-exportaciones
        preserveEntrySignatures: "allow-extension",
        treeshake: {
          moduleSideEffects: false,
          propertyReadSideEffects: false,
        },
        external: [], // No externalizar nada
      },
      // Configuración adicional
      target: "es2018",
      // Importante: deshabilitar code splitting
      chunkSizeWarningLimit: 10000,
    },
  },
});
