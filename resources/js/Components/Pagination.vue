<script setup>
import { Link } from '@inertiajs/vue3';
import { ChevronLeftIcon, ChevronRightIcon } from '@heroicons/vue/24/outline';

defineProps({
    links: {
        type: Array,
        required: true
    }
})
</script>
<template>
    <div v-if="links.length > 3" class="flex items-center justify-end mt-4">
        <div class="flex items-center space-x-2">
            <div v-for="(link, i) in links" :key="i" class="w-10 h-10">
                <component 
                    :is="link.url && !link.active ? Link : 'span'"
                    :href="link.url && !link.active ? link.url : null"
                    :class="[
                        link.active ? 'bg-wd-d-6 text-white' : 'bg-wd-l-4 dark:bg-wd-d-6/40 text-wd-l-label dark:text-wd-d-label hover:bg-gray-50',
                        'w-full h-full flex items-center justify-center rounded-md shadow-sm'
                    ]"
                >
                    <ChevronLeftIcon v-if="link.label.includes('Previous')" class="h-5 w-5" />
                    <ChevronRightIcon v-else-if="link.label.includes('Next')" class="h-5 w-5" />
                    <span v-else v-html="link.label"></span>
                </component>
            </div>
        </div>
    </div>
</template>