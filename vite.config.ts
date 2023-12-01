/// <reference types="vitest" />

import { defineConfig } from "vite";
import { viteCrossPlatform } from "@cross-platform-tools/vite-plugin";
import react from '@vitejs/plugin-react';

export default defineConfig({
  plugins: [
    react(),
    viteCrossPlatform({
      platform: process.env.PLATFORM!,
      supportedPlatforms: ["desktop", "mobile"],
      entryDir: 'src', // only used for tests
      outDir: 'dist', // not used in library false mode
      outputTypes: false,
      isLibrary: false,
    }),
  ],
  build: {
    outDir: `dist/${process.env.PLATFORM}`
  }
});
