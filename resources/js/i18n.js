import { createI18n } from "vue-i18n";
import axios from "axios";

const messages = {};

// Función para cargar traducciones dinámicamente
async function loadLocalMessages() {
    const locales = ["en", "es"];
    for (const lang of locales) {
        try {
            const response = await axios.get(`/translates/${lang}`);
            messages[lang] = response.data;
            console.log(`📌 Traducción cargada para ${lang}:`, response.data); // Debug
        } catch (error) {
            console.error(`❌ Error al cargar traducción de ${lang}:`, error);
        }
    }
}

// Crear instancia de i18n
export const i18n = createI18n({
    legacy: false,
    locale: localStorage.getItem("setLanguage") || "es",
    fallbackLocale: "es",
    messages, // Se llenará dinámicamente
});

// Función para inicializar i18n
export async function setupI18n() {
    await loadLocalMessages();
    Object.assign(i18n.global.messages, messages); // Agregar traducciones cargadas
    console.log("📌 Mensajes cargados en i18n:", i18n.global.messages); // Debug
    return i18n;
}