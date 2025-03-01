<script setup>
import { ref } from 'vue';

const props = defineProps({
    tabs: Array,
    value: String
});

const emit = defineEmits(['update:value']);
const activeTab = ref(props.value);

const setActiveTab = (tab) => {
    activeTab.value = tab;
    emit('update:value', tab);
}
</script>
<template>
    <div>
        <div class="flex space-x-4 mb-4">
            <button
                v-for="tab in tabs"
                :key="tab.value"
                @click="setActiveTab(tab.value)"
                :class="[
                    'pb-2 px-4 flex items-center',
                    activeTab === tab.value ? 'border-b-2 border-wd-2' : 'text-wd-l-label dark:text-wd-d-label'
                ]"
            >
                <component v-if="tab.icon" :is="tab.icon" class="w-5 h-5 text-wd-l-label dark:text-wd-d-label mr-2" />
                {{ tab.label }}
            </button>
        </div>
        <slot :name="activeTab" />
    </div>
</template>