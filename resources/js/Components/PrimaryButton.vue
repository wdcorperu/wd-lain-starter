<script setup>
import Spinner from '@/Components/Spinner.vue';
defineProps({
    type: {
        type: String,
        default: 'submit',
    },
    loading: {
        type: Boolean,
        default: false,
    }
});
</script>

<template>
    <button :type="type" class="relative inline-flex items-center px-4 py-2 bg-wd-d-7 dark:bg-wd-4 border border-transparent rounded-md font-semibold text-xs text-white uppercase tracking-widest hover:bg-wd-d-7 focus:bg-wd-d-7 active:bg-wd-d-7 focus:outline-none focus:ring-4 focus:ring-wd-4 focus:ring-offset-2 disabled:opacity-50 transition ease-in-out duration-150">
        <Spinner v-if="loading" color="bg-wd-3 dark:bg-white" model="dashed"/>
        <slot />
    </button>
</template>
