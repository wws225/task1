import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import env from "vite-plugin-env-compatible";

export default defineConfig({
    plugins: [react(), env({ prefix: "VITE", mountedPath: "process.env" })],
    build: {
        outDir: 'dist', // 出力ディレクトリが 'dist' になっていることを確認
      },
      define: {
        'process.env.VITE_SUPABASE_URL': JSON.stringify(process.env.VITE_SUPABASE_URL),
        'process.env.VITE_SUPABASE_ANON_KEY': JSON.stringify(process.env.VITE_SUPABASE_ANON_KEY),
      },
});