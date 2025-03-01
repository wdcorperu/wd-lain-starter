import { createI18n } from "vue-i18n";
import axios from "axios";

function loadLocalMessages()
{
    const messages = {};
    const locales = ['en','es'];

    for (const lang  of locales) {
        try {
            const response = axios.get(`/translates/${lang}`);
            messages[lang] = response.data
        } catch (error) {
            console.error(`Error loading ${lang} translate`, error);
        }
    }
    return messages;
}

export default new createI18n({
    legacy: false,
    locale: localStorage.getItem('setLanguage') || 'en',
    fallbackLocale: 'en',
    messages: loadLocalMessages(localStorage.getItem('setLanguage') || 'en')
});