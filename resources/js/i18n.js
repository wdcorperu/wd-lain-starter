import { createI18n } from "vue-i18n";
import axios from "axios";

async function loadLocalMessages(locale)
{
    const messages = {};
    const locales = ['en','es'];

    for (const locale of locales) {
        try {
            const response = await axios.get(`/translates/${locale}`);
            messages[locale] = response.data
        } catch (error) {
            console.error(`Error loading ${locale} translate`, error);
        }
    }
    return messages;
}

async function setupI18n()
{
    const savedLocale = localStorage.getItem('setLanguage') || 'es';
    const messages = await loadLocalMessages(savedLocale);

    return createI18n({
        legacy: false,
        locale: savedLocale,
        fallbackLocale: 'es',
        messages,
    });
}

export default setupI18n;