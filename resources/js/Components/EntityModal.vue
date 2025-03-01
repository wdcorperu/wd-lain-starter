<script setup>
import DialogModal from '@/Components/DialogModal.vue';
import PrimaryButton from '@/Components/PrimaryButton.vue';
import SecondaryButton from '@/Components/SecondaryButton.vue';
import DangerButton from '@/Components/DangerButton.vue';

const props = defineProps({
    isOpen: Boolean,
    modalType: {
        type: String,
        default: 'create' // Puede ser 'create', 'edit' o 'delete'
    },
    title: String,
    form: Object,
    errors: Object,
    isSubmitting: {
        type: Boolean,
        default: false
    },
    isDeleting: {
        type: Boolean,
        default: false
    },
    sizeModal: {
        type: String,
        default: 'md'
    }
});

const emit = defineEmits(['close', 'submit', 'delete']);

// Evita cerrar el modal si se está realizando una acción
const closeModal = () => {
    if (!props.isSubmitting && !props.isDeleting) {
        emit('close');
    }
};

const submitForm = () => {
    emit('submit');
};

const deleteForm = () => {
    emit('delete');
};
</script>

<template>
    <DialogModal :show="isOpen" :maxWidth="sizeModal" @close="closeModal">
        <!-- Título dinámico según el tipo de modal -->
        <template #title>
            <span v-if="modalType === 'delete'">
                {{ $t('global.modal.title.delete') }}
            </span>
            <span v-else-if="modalType === 'edit'">
                {{ $t('global.modal.title.edit', { title: title }) }}
            </span>
            <span v-else>
                {{ $t('global.modal.title.create', { title: title }) }}
            </span>
        </template>

        <!-- Contenido: si es delete muestra mensaje, sino slot para el formulario -->
        <template #content>
            <div v-if="modalType === 'delete'">
                <p>{{ $t('global.modal.message.delete') }}</p>
            </div>
            <div v-else>
                <slot name="form" :form="form" :errors="errors"></slot>
            </div>
        </template>

        <!-- Footer con botones según acción -->
        <template #footer>
            <div v-if="modalType === 'delete'" class="space-x-2">
                <SecondaryButton @click="closeModal" :disabled="isDeleting">
                    {{ $t('global.buttons.cancel') }}
                </SecondaryButton>
                <DangerButton @click="deleteForm" :disabled="isDeleting" :loading="isDeleting"
                    :class="{ 'opacity-75 cursor-not-allowed': isDeleting }">
                    {{ $t('global.buttons.delete') }}
                </DangerButton>
            </div>
            <div v-else class="space-x-2">
                <SecondaryButton @click="closeModal" :disabled="isSubmitting">
                    {{ $t('global.buttons.cancel') }}
                </SecondaryButton>
                <PrimaryButton @click="submitForm" :disabled="isSubmitting" :loading="isSubmitting"
                    :class="{ 'opacity-75 cursor-not-allowed relative': isSubmitting }">
                    <!-- <Spinner /> -->
                    {{ modalType === 'edit' ? $t('global.buttons.update') : $t('global.buttons.create') }}
                </PrimaryButton>
            </div>
        </template>
    </DialogModal>
</template>
