import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import tailwindcss from "@tailwindcss/vite";
import path from "path";

// https://vite.dev/config/
export default defineConfig({
    plugins: [react(), tailwindcss()],
    resolve: {
        alias: {
            "@": path.resolve(__dirname, "./src"),
            "@components": path.resolve(__dirname, "./src/components"),
            "@hooks": path.resolve(__dirname, "./src/hooks"),
            "@pages": path.resolve(__dirname, "./src/pages"),
            "@stores": path.resolve(__dirname, "./src/stores"),
            "@types": path.resolve(__dirname, "./src/types"),
            "@utils": path.resolve(__dirname, "./src/utils"),
            "@services": path.resolve(__dirname, "./src/services"),
            "@configs": path.resolve(__dirname, "./src/configs"),
            "@routes": path.resolve(__dirname, "./src/routes"),
            "@lib": path.resolve(__dirname, "./src/lib"),
        },
    },
});
