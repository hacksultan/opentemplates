import react from "@vitejs/plugin-react";
import { defineConfig } from "vite";

const BASE_URL = "/material-tailwind-dashboard-react/";


function rewritePublicPaths() {
  return {
    name: "rewrite-public-paths",
    transform(code, id) {
      if (id.includes("node_modules")) return null;
      if (!/\.(jsx?|tsx?)$/.test(id)) return null;
      const rewritten = code.replace(
        /(=\s*|:\s*)["'](\/img\/)([^"']*)["']/g,
        (_, prefix, _slashImg, rest) =>
          `${prefix}(import.meta.env.BASE_URL + 'img/${rest.replace(/'/g, "\\'")}')`
      );
      return rewritten !== code ? { code: rewritten } : null;
    },
  };
}

export default defineConfig({
  base: BASE_URL,
  plugins: [react(), rewritePublicPaths()],
  resolve: {
    alias: [{ find: "@", replacement: "/src" }],
  },
});
