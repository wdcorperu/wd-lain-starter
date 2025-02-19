import defaultTheme from 'tailwindcss/defaultTheme';
import forms from '@tailwindcss/forms';
import typography from '@tailwindcss/typography';

/** @type {import('tailwindcss').Config} */
export default {
    darkMode: 'class',
    content: [
        './vendor/laravel/framework/src/Illuminate/Pagination/resources/views/*.blade.php',
        './vendor/laravel/jetstream/**/*.blade.php',
        './storage/framework/views/*.php',
        './resources/views/**/*.blade.php',
        './resources/js/**/*.vue',
    ],

    theme: {
        extend: {
            fontFamily: {
                sans: ['Figtree', ...defaultTheme.fontFamily.sans],
            },
            colors: {
                'wd-1': '#0289ff',
                'wd-2': '#00b3ff',
                'wd-3': '#02deff',

                'wd-l-4': '#FFFFFF',
                'wd-l-5': '#F1F5F9',

                'wd-d-6': '#1E293C',
                'wd-d-7': '#0F172B',

                'wd-l-placeholder': '#CCD5E2',
                'wd-l-label': '#95A4B8',
                'wd-l-text': '#000000',

                'wd-d-placeholder': '#334255',
                'wd-d-label': '#7D8BA0',
                'wd-d-text': '#FFFFFF',

                'wd-yellow': '#FACC14',
                'wd-red': '#F53F5E',
            }
        },
    },

    plugins: [forms, typography],
};
