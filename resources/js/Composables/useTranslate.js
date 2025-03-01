import { computed } from "vue";
import { useI18n } from "vue-i18n";

export function useTranslations() {
    const { locale, d, n, t } = useI18n({ useScope: 'global' });

    function changeLanguage(newLang) {
        locale.value = newLang;
        localStorage.setItem('setLanguage', newLang);
    }
    
    function tr(key, params = {}) {
      return computed(() => t(key, params));
    }
    return {
        locale,             // Idioma actual (reactivo)
        d,                  // Formateo de fechas
        n,                  // Formateo de número
        t,                  // Traducción de texto
        tr,                 // Traducción de texto Reactivo
        changeLanguage,     // Cambio de idioma   
    }
}