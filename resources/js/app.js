import "./bootstrap";
import "../css/app.css";
import { createApp, h } from "vue";
import { createInertiaApp } from "@inertiajs/vue3";
import { resolvePageComponent } from "laravel-vite-plugin/inertia-helpers";
import { ZiggyVue } from "../../vendor/tightenco/ziggy";
import { useDark, useToggle } from "@vueuse/core";
// === Traducción === //
import { setupI18n } from "@/i18n";

const isDark = useDark();
const toggleDark = useToggle(isDark);
const appName = import.meta.env.VITE_APP_NAME || "Laravel";

// Asegurar que las traducciones se cargan antes de montar Vue
createInertiaApp({
    title: (title) => `${title} - ${appName}`,
    resolve: (name) =>
        resolvePageComponent(`./Pages/${name}.vue`, import.meta.glob("./Pages/**/*.vue")),
    setup({ el, App, props, plugin }) {
        setupI18n().then((i18n) => {
            console.log("📌 Traducciones cargadas en i18n:", i18n.global.messages); // Debug
            createApp({ render: () => h(App, props) })
                .use(plugin)
                .use(i18n) // Se usa i18n después de que esté listo
                .use(ZiggyVue)
                .provide("isDark", isDark)
                .provide("toggleDark", toggleDark)
                .mount(el);
        }).catch((error) => {
            console.error("❌ Error al inicializar i18n:", error);
        });
    },
    progress: {
        color: "#00b3ff",
    },
});