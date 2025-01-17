import "@testing-library/jest-dom";

// dotenvの設定
require("dotenv").config({ path: ".env.test" });

process.env.VITE_SUPABASE_URL = "http://localhost";
process.env.VITE_SUPABASE_ANON_KEY = "dummy-key";