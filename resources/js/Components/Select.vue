<script setup>
import { ref } from 'vue';
import InputLabel from '@/Components/InputLabel.vue';

const props = defineProps({
  modelValue: { type: [String, Number], default: '' },
  options: { type: Array, default: () => [] },
  valueField: { type: String, default: 'id' }, // valor por defecto, se puede modificar al usar el componente
  labelField: { type: String, default: 'label' }, // valor por defecto, se puede modificar al usar el componente
  dense: { type: Boolean, default: false },
  name: { type: String, default: '' },
  id: { type: String, default: '' },
  error: { type: String, default: '' },
  icon: { type: [Object, Function], default: null },
  label: { type: String, default: '' },
  placeholder: { type: String, default: '' }
});

const emit = defineEmits(['update:modelValue']);
const selectEl = ref(null);

const updateValue = (event) => {
  emit('update:modelValue', event.target.value);
};

const baseClasses = "block mt-1 w-full border-wd-l-placeholder dark:border-wd-d-placeholder rounded-md shadow-sm focus:border-wd-4 focus:ring-1 focus:ring-wd-4 bg-wd-l-4 dark:bg-wd-d-7 placeholder:text-wd-l-placeholder dark:placeholder:text-wd-d-placeholder text-wd-l-text dark:text-wd-d-text";
</script>

<template>
  <div>
    <InputLabel v-if="label" :for="id" :value="label" />
    <div class="relative">
      <span v-if="icon" class="absolute inset-y-0 left-0 flex items-center pl-3">
          <component :is="icon" class="w-5 h-5 text-wd-l-label dark:text-wd-d-label" />
      </span>
      <select 
        ref="selectEl" 
        :name="name" 
        :id="id" 
        :value="modelValue" 
        @change="updateValue" 
        :class="[
          baseClasses,
          icon ? 'pl-10' : '',
          dense ? 'text-xs py-1 px-2' : 'text-sm py-2 px-3',
          error ? 'focus:ring-1 focus:ring-wd-red border-wd-red dark:border-wd-red': ''
        ]" 
        v-bind="$attrs"
      >
        <option v-if="placeholder" disabled value="">{{ placeholder }}</option>
        <option v-for="option in options" :key="option[valueField]" :value="option[valueField]">
          {{ option[labelField] }}
        </option>
      </select>
    </div>
    <p v-if="error" class="text-wd-red text-[11px] font-bold">{{ error }}</p>
  </div>
</template>
