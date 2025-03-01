<script setup>
import { ref, computed, onMounted } from 'vue';
import {
  XMarkIcon,
  XCircleIcon,
  ExclamationTriangleIcon,
  CheckCircleIcon,
  InformationCircleIcon,
  ChatBubbleOvalLeftEllipsisIcon
} from '@heroicons/vue/24/outline';

// Configuración para cada tipo de alerta
const ALERT_TYPES = {
  error: {
    icon: XCircleIcon,
    class: 'bg-wd-red dark:bg-wd-red/60 dark:text-red-300 border-wd-red'
  },
  warning: {
    icon: ExclamationTriangleIcon,
    class: 'bg-wd-yellow dark:bg-wd-yellow/60 dark:text-yellow-300 border-wd-yellow'
  },
  success: {
    icon: CheckCircleIcon,
    class: 'bg-green-500 dark:bg-green-500/60 dark:text-green-300 border-green-500'
  },
  info: {
    icon: InformationCircleIcon,
    class: 'bg-blue-500 dark:bg-blue-500/60 dark:text-blue-300 border-blue-500'
  },
  default: {
    icon: ChatBubbleOvalLeftEllipsisIcon,
    class: 'bg-wd-3 dark:bg-wd-3/60 dark:text-wd-3 border-wd-3'
  }
};

const props = defineProps({
  message: {
    type: String,
    required: true
  },
  type: {
    type: String,
    default: 'default',
    validator: (value) => ['success', 'error', 'warning', 'info', 'default'].includes(value)
  },
  duration: {
    type: Number,
    default: 0
  },
  dismissible: {
    type: Boolean,
    default: true
  }
});

const emit = defineEmits(['close']);
const visible = ref(true);

// Usar la configuración del tipo de alerta seleccionado o el predeterminado
const alertConfig = computed(() => 
  ALERT_TYPES[props.type] || ALERT_TYPES.default
);

// Obtener el icono del tipo de alerta
const alertIcon = computed(() => alertConfig.value.icon);

// Construir las clases de estilo
const alertClass = computed(() => {
  const baseClasses = 'flex items-center justify-between px-3 py-2 rounded-md my-2 shadow-sm border text-white ';
  return baseClasses + alertConfig.value.class;
});

// Cerrar la alerta
const handleClose = () => {
  visible.value = false;
  emit('close');
};

// Auto-cierre si se especifica duration
onMounted(() => {
  if (props.duration > 0) {
    setTimeout(handleClose, props.duration);
  }
});
</script>

<template>
  <transition name="fade">
    <div v-if="visible" :class="alertClass" role="alert" aria-live="assertive">
      <div class="flex items-center">
        <component :is="alertIcon" class="h-6 w-6 mr-2" aria-hidden="true" />
        <span class="text-[13px]">{{ message }}</span>
      </div>
      <button 
        v-if="dismissible" 
        @click="handleClose"
        class="h-6 w-6 flex items-center justify-center rounded-full hover:bg-black/10 transition-all"
        aria-label="Cerrar alerta">
        <XMarkIcon class="h-4 w-4" />
      </button>
    </div>
  </transition>
</template>

<style scoped>
.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.3s ease, transform 0.3s ease;
}

.fade-enter-from {
  opacity: 0;
  transform: translateY(-10px);
}

.fade-leave-to {
  opacity: 0;
  transform: translateY(-10px);
}
</style>