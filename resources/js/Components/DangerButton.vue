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
    <button :type="type" class="relative inline-flex items-center justify-center px-4 py-2 bg-wd-red border border-transparent rounded-md font-semibold text-xs text-wd-l-4 uppercase tracking-widest hover:bg-wd-red active:bg-wd-red focus:outline-none focus:ring-4 focus:ring-wd-red focus:ring-offset-2 transition ease-in-out duration-150">
        <Spinner v-if="loading" color="bg-white" model="dashed"/>
        <slot />
    </button>
</template>
