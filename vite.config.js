import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  server: {
    proxy: {
      // connection to server / database / backend
      // Using the proxy instance
      "/api": {
        target: "http://localhost:3000",
        // target: "https://be-ecommerce-one.vercel.app",
        changeOrigin: true,
      },
    },
  },
});
