/// <reference types="vite/client" />

interface ImportMetaEnv {
    readonly VITE_SUPABASE_URL: string;
    readonly VITE_SUPABASE_KEY: string;
    // 必要な環境変数を追加してください
  }
  
  interface ImportMeta {
    readonly env: ImportMetaEnv;
  }
  