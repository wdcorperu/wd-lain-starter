<script setup>
defineProps({
    type: {
        type: String,
        default: 'submit',
    },
});
</script>

<template>
    <button :type="type" class="inline-flex items-center px-4 py-2 bg-wd-d-7 border border-transparent rounded-md font-semibold text-xs text-white uppercase tracking-widest hover:bg-wd-d-7 focus:bg-wd-d-7 active:bg-wd-d-7 focus:outline-none focus:ring-2 focus:ring-wd-1 focus:ring-offset-2 disabled:opacity-50 transition ease-in-out duration-150">
        <slot />
    </button>
</template>
