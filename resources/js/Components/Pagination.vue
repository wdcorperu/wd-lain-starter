<script setup>
import { Link } from '@inertiajs/vue3';
defineProps({
    links: {
        type: Array,
        required: true
    }
})

const makeLabel = (label) => {
    if (label.includes("Previous")) {
        return '<'
    } else if (label.includes("Next")) {
        return '>'
    } else {
        return label
    }
}
</script>
<template>
    <div v-if="links.length > 3" class="flex items-center justify-end mt-4">
        <div class="flex items-center space-x-1">
            <div v-for="(link, i) in links" :key="i">
                <component 
                    :is="link.url && !link.active ? Link : 'span'"
                    :href="link.url && !link.active ? link.url : null"
                    class="px-4 py-2 rounded-md shadow-sm"
                    :class="{
                        'bg-gray-800 text-white': link.active,
                        'bg-white text-gray-700 hover:bg-gray-50': !link.active
                    }"
                    v-html="makeLabel(link.label)"
                />
            </div>
        </div>
    </div>
</template>