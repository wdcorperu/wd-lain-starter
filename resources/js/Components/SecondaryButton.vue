<script setup>
import Spinner from '@/Components/Spinner.vue';
defineProps({
    type: {
        type: String,
        default: 'button',
    },
    loading: {
        type: Boolean,
        default: false,
    }
});
</script>

<template>
    <button :type="type" class="relative inline-flex items-center px-4 py-2 bg-wd-l-4 dark:bg-transparent border border-wd-l-5 dark:border-transparent rounded-md font-semibold text-xs text-wd-l-text dark:text-wd-l-4 uppercase tracking-widest shadow-sm hover:bg-wd-l-5 dark:hover:bg-wd-d-7 focus:outline-none focus:ring-4 focus:ring-wd-4 focus:ring-offset-2 disabled:opacity-25 transition ease-in-out duration-150">
        <Spinner v-if="loading" color="bg-wd-4 dark:bg-white" model="dashed"/>
        <slot />
    </button>
</template>
