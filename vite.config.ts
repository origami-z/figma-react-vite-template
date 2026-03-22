import { defineConfig } from "vite-plus";
import react from "@vitejs/plugin-react";
import { viteSingleFile } from "vite-plugin-singlefile";

// https://vitejs.dev/config/
export default defineConfig({
  fmt: {
    printWidth: 80,
    tabWidth: 2,
    sortPackageJson: false,
    ignorePatterns: [],
  },
  staged: {
    "*": "vp check --fix",
  },
  lint: { options: { typeAware: true, typeCheck: true } },
  root: "./ui-src",
  plugins: [react(), viteSingleFile()],
  build: {
    target: "esnext",
    assetsInlineLimit: 100000000,
    chunkSizeWarningLimit: 100000000,
    cssCodeSplit: false,
    outDir: "../dist",
  },
});
