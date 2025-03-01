import { ref, reactive } from "vue";
import i18n from "@/i18n";

export default function useValidation() {
  const errors = reactive({});
  const hasErrors = ref(false);

  /**
   * 
   * Validar un objeto de formulario basado en reglas definidas
   * @param {Object} form - El objeto del formulario a validar 
   * @param {Object} rules - Las reglas de validación
   * @returns {Boolean} - True si la validación pasa, false si falla
   */
  const validate = (form, rules) => {
    clearErrors();

    for (const field in rules) {
      const value = form[field];
      const fieldRules = rules[field];
      validateField(field, value, fieldRules, form);
    }

    hasErrors.value = Object.keys(errors).length > 0;
    return hasErrors.value;
  }

  /**
   * Validar un campo especifico
   * @param {String} field - Nombre del campo
   * @param {*} value - Valor del campo
   * @param {Array} fieldRules - Reglas para el campo
   * @param {Object} form - Campos del formulario
   */
  const validateField = (field, value, fieldRules, form) => {
    for (const rule of fieldRules) {
      // Required
      if (rule === 'required' && (value === undefined || value === null || value === '')) {
        addError(field, i18n.global.t('global.rules.required'));
        break;
      }
      // Validacion con parametros (min, max, etc..)
      if (typeof rule === 'object') {
        // Longitud minima
        if (rule.min !== undefined && value && value.length < rule.min) {
          addError(field, i18n.global.t('global.rules.min', { min: rule.min }));
          break;
        }
        // Logintud maxima
        if (rule.max !== undefined && value && value.length > rule.max) {
          addError(field, i18n.global.t('global.rules.max', { max: rule.max }));
          break;
        }
        // Numerico
        if (rule.type === 'number' && isNaN(Number(value))) {
          addError(field, i18n.global.t('global.rules.number'));
          break;
        }
        // Email
        if (rule.type === 'email' && !validateEmail(value)) {
          addError(field, i18n.global.t('global.rules.email'));
          break;
        }
        // Personalizado
        if (rule.custom && typeof rule.custom === 'function') {
          const customResult = rule.custom(value, form);
          if (customResult !== true) {
            addError(field, customResult || i18n.global.t('global.rules.custom'));
            break;
          }
        }
      }
    }
  };

  /**
   * Validar un formato email
   * @param {String} email - Email a validar
   * @return {Boolean} -True ssi es válido
   */
  const validateEmail = (email) => {
    if (!email) return false;
    const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return re.test(email);
  };

  /**
   * Agregar un error al objeto de errores
   * @param {String} field - Nombre del campo
   * @param {String} message - Mensaje de error
   */
  const addError = (field, message) => {
    errors[field] = message;
  };

  /**
   * Limpiar todos los errores
   */
  const clearErrors = () => {
    for (const key in errors) {
      delete errors[key];
    }
    hasErrors.value = false;
  };

  /**
   * Establecer errores manualmente (errores del servidor)
   * @param {Object} serverErrors - Objecto de errores del servidor
   */
  const setErrors = (serverErrors) => {
    clearErrors();

    for (const field in serverErrors) {
      errors[field] = Array.isArray(serverErrors[field])
        ? serverErrors[field][0]
        : serverErrors[field];
    }

    hasErrors.value = true;
  }

  return {
    errors,
    hasErrors,
    validate,
    clearErrors,
    setErrors
  };
}