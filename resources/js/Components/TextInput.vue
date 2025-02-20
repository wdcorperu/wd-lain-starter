<script setup>
import { onMounted, ref } from 'vue';

defineProps({
    modelValue: String,
});

defineEmits(['update:modelValue']);

const input = ref(null);

onMounted(() => {
    if (input.value.hasAttribute('autofocus')) {
        input.value.focus();
    }
});

defineExpose({ focus: () => input.value.focus() });
</script>

<template>
    <input
        ref="input"
        class="border-wd-l-placeholder dark:border-wd-d-placeholder focus:border-wd-4 focus:ring-wd-4 rounded-md shadow-sm bg-wd-l-4 dark:bg-wd-d-7 placeholder:text-wd-l-placeholder dark:placeholder:text-wd-d-placeholder text-wd-l-text dark:text-wd-d-text"
        :value="modelValue"
        @input="$emit('update:modelValue', $event.target.value)"
    >
</template>