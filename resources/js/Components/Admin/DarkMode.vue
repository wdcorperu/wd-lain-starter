<script setup>
import { inject } from 'vue';
import { SunIcon, MoonIcon } from '@heroicons/vue/24/solid';

const isDark = inject('isDark')
const toggleDark = inject('toggleDark')

</script>
<template>
    <button @click="toggleDark()">
        <div class="w-7 h-7 flex items-center justify-center rounded-full bg-transparent">
            <MoonIcon v-if="isDark" class="text-wd-yellow w-6 h-6"/>
            <SunIcon v-else class="text-wd-yellow w-7 h-7"/>
        </div>
    </button>
</template>