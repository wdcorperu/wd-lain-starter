<script setup>
import { computed } from 'vue';
import InputLabel from '@/Components/InputLabel.vue';
import TextInput from '@/Components/TextInput.vue';

const props = defineProps({
    type: { type: String, default: 'text' },
    id: { type: String, default: '' },
    label: { type: String, default: '' },
    error: { type: String, default: '' },
    modelValue: { required: true },
    placeholder: { type: String, default: '' },
    // La prop "icon" espera un componente (por ejemplo, MailIcon, UserIcon, etc.)
    icon: { type: [Object, Function], default: null },
});

const emit = defineEmits(['update:modelValue']);

const internalValue = computed({
    get() {
        return props.modelValue != null ? props.modelValue.toString() : '';
    },
    set(val) {
        emit('update:modelValue', val);
    },
});
</script>

<template>
    <InputLabel v-if="label" :for="id" :value="label" />
    <div class="relative">
        <!-- Renderiza el icono si se pasa; se utiliza el componente dinámico -->
        <span v-if="icon" class="absolute inset-y-0 left-0 flex items-center pl-3">
            <component :is="icon" class="w-5 h-5 text-wd-l-label dark:text-wd-d-label" />
        </span>
        <TextInput 
            :id="id" 
            v-model="internalValue" 
            :placeholder="placeholder" 
            :type="type"
            v-bind="$attrs" 
            :class="[
                'mt-1 block w-full', 
                icon ? 'pl-10' : '',
                error ? 'focus:ring-1 focus:ring-wd-red border-wd-red dark:border-wd-red': ''
            ]" 
        />
    </div>
    <p v-if="error" class="text-wd-red text-[11px] font-bold">{{ error }}</p>
</template>
