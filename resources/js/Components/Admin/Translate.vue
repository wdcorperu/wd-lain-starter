<script setup>
import { ref, computed } from 'vue'
import { useI18n } from 'vue-i18n'

const menu = ref(false)
const { locale } = useI18n()

const languages = {
    en: { label: 'English', icon: '/images/flags/united-states-of-america.svg' },
    es: { label: 'Español', icon: '/images/flags/spain.svg' },
    // Add more languages
}

const currentLanguage = computed(() => {
    return languages[locale.value] || languages.en
})

function changeLanguage(lang) {
    locale.value = lang
    localStorage.setItem('setLanguage', lang)
    menu.value = false
}
</script>

<template>
    <div class="relative inline-block text-left">
        <!-- Botón activador del dropdown -->
        <button @click="menu = !menu" class="flex items-center focus:outline-none">
            <img :src="currentLanguage.icon" :alt="currentLanguage.label" class="w-6 h-6 rounded-full" />
        </button>

        <div v-if="menu" class="absolute right-0 mt-2 min-w-max bg-wd-l-4 dark:bg-wd-d-6 rounded-md shadow-lg z-10 overflow-hidden">
            <ul>
                <li v-for="(lang, code) in languages" :key="code">
                    <button @click="changeLanguage(code)" class="w-full flex items-center px-4 py-2 hover:bg-wd-l-5 dark:hover:bg-wd-4 transition-all">
                        <img :src="lang.icon" :alt="lang.label" class="w-5 h-5 rounded-full mr-3 border" />
                        <span class="text-sm text-wd-l-text dark:text-wd-d-text">{{ lang.label }}</span>
                    </button>
                </li>
            </ul>
        </div>
    </div>
</template>