import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  base: "/exercises/",
  // server: {
  //   historyApiFallback: true, // щоб Vite не давав 404 при перезавантаженні сторінки
  // },
});
// export default defineConfig(({ mode }) => ({
//   plugins: [react()],
//   base: mode === "production" ? "/exercises/" : "/",
// }));
