import './bootstrap';
import '../css/app.css';

import { createApp, h } from 'vue';
import { createInertiaApp } from '@inertiajs/vue3';
import { resolvePageComponent } from 'laravel-vite-plugin/inertia-helpers';
import { ZiggyVue } from '../../vendor/tightenco/ziggy';
import { useDark, useToggle } from '@vueuse/core';
// === Translate === //
import setupI18n from '@/i18n';
// === Config mode dark === //
const isDark = useDark();
const toggleDark = useToggle(isDark);

const appName = import.meta.env.VITE_APP_NAME || 'Laravel';

createInertiaApp({
    title: (title) => `${title} - ${appName}`,
    resolve: (name) => resolvePageComponent(`./Pages/${name}.vue`, import.meta.glob('./Pages/**/*.vue')),
    setup({ el, App, props, plugin }) {
        setupI18n().then(i18n => {
            createApp({ render: () => h(App, props) })
                .use(plugin)
                .use(i18n)
                .use(ZiggyVue)
                .provide('isDark', isDark)
                .provide('toggleDark', toggleDark)
                .mount(el);
        }).catch(error => {
            console.error('Error setting up i18n', error);
        });
    },
    progress: {
        color: '#4B5563',
    },
});
