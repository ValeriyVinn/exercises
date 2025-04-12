import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

export default defineConfig(({ mode }) => ({
  plugins: [react()],
  base: mode === "production" ? "/exercises/" : "/",
  // Додаємо обробку змінних середовища
  define: {
    "process.env": process.env,
  },
}));
