import { reactRouter } from "@react-router/dev/vite";
 
import { defineConfig } from "vite";
import tsconfigPaths from "vite-tsconfig-paths";
import { viteCommonjs } from "@originjs/vite-plugin-commonjs";
export default defineConfig({
  plugins: [   viteCommonjs(),  reactRouter(), tsconfigPaths()],
    ssr: {
    noExternal: [
      '@jetbrains/kotlin-web-site-ui',
      /^@rescui\/.*/,
    ],
  },
  resolve: {
    mainFields: ["module", "main"],  
  },  
});
