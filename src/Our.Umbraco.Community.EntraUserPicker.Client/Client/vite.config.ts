import { defineConfig } from "vite";

export default defineConfig({
    build: {
        lib: {
            entry: "src/property-editor-ui-entra-user-picker.element.ts", 
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