<script setup>
defineProps({
    type: {
        type: String,
        default: 'button',
    },
});
</script>

<template>
    <button :type="type" class="inline-flex items-center px-4 py-2 bg-wd-l-4 dark:bg-transparent border border-wd-l-5 dark:border-transparent rounded-md font-semibold text-xs text-wd-l-text dark:text-wd-l-4 uppercase tracking-widest shadow-sm hover:bg-wd-l-5 dark:hover:bg-wd-d-7 focus:outline-none focus:ring-2 focus:ring-wd-1 focus:ring-offset-2 disabled:opacity-25 transition ease-in-out duration-150">
        <slot />
    </button>
</template>
