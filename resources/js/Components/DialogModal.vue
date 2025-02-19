<script setup>
import Modal from './Modal.vue';

const emit = defineEmits(['close']);

defineProps({
    show: {
        type: Boolean,
        default: false,
    },
    maxWidth: {
        type: String,
        default: '2xl',
    },
    closeable: {
        type: Boolean,
        default: true,
    },
});

const close = () => {
    emit('close');
};
</script>

<template>
    <Modal
        :show="show"
        :max-width="maxWidth"
        :closeable="closeable"
        @close="close"
    >
        <div class="px-6 py-4">
            <div class="text-lg font-medium text-wd-l-label dark:text-wd-d-label">
                <slot name="title" />
            </div>

            <div class="mt-4 text-sm text-wd-l-label dark:text-wd-d-label">
                <slot name="content" />
            </div>
        </div>

        <div class="flex flex-row justify-end px-6 py-4 bg-wd-l-5 dark:bg-wd-d-6/70 text-end">
            <slot name="footer" />
        </div>
    </Modal>
</template>
