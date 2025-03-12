import tailwindcss from "@tailwindcss/vite";
import react from "@vitejs/plugin-react";
import { defineConfig } from "vite";

// https://vite.dev/config/
export default defineConfig({
  plugins: [react(), tailwindcss()],
  // @ts-expect-error - getting an error here because the test property is not recognized, but it is valid
  test: {
    // 👋 add the line below to add jsdom to vite
    environment: "jsdom",
    globals: true,
  },
});
