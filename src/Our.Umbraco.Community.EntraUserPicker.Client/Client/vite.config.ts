import { defineConfig } from "vite";

export default defineConfig({
    build: {
        lib: {
            entry: "src/manifests.ts", 
            formats: ["es"],
        },
        outDir: "../../Our.Umbraco.Community.EntraUserPicker.Assets/wwwroot/App_Plugins/Client",
        emptyOutDir: true,
        sourcemap: true,
        rollupOptions: {
            external: [/^@umbraco/],
        },
    },
    base: "/App_Plugins/Client/",
});