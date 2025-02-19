<script setup>
import { ref } from 'vue'
import { BellAlertIcon } from '@heroicons/vue/24/outline';
const open = ref(false)

const notifications = ref([
  { id: 1, name:'Helen Marial', message: 'Left a comment', time: '1 hour ago', read: true },
  { id: 2, name:'Clarissa Perez', message: 'uploaded a file', time: '2 hour ago', read: true },
  { id: 3, name:'Mike Miller', message: 'sent you a message', time: '3 hour ago', read: false },
  { id: 4, name:'Lana Henriks', message: 'Left a comment', time: 'Yesterday', read: false },
  { id: 5, name:'Dan Walker', message: 'uploaded a file', time: 'Yesterday', read: true },
  { id: 6, name:'Lana Henriks', message: 'sent you a message', time: 'Yesterday', read: false },
  { id: 7, name:'Helen Marial', message: 'Left a comment', time: 'Yesterday', read: false },
  { id: 8, name:'Mike Miller', message: 'uploaded a file', time: 'Yesterday', read: true },
  { id: 9, name:'Helen Marial', message: 'sent you a message', time: 'Yesterday', read: false },
])
</script>

<template>
    <div class="relative inline-block text-left">
        <button @click="open = !open" class="flex items-center focus:outline-none">
            <BellAlertIcon class="w-7 h-7 text-wd-l-label" />
        </button>

        <div v-if="open" class="absolute right-0 mt-2 w-80 bg-wd-l-4 dark:bg-wd-d-6 rounded shadow-lg z-10">
            <div class="p-4 border-b dark:border-wd-d-7 flex items-center justify-between">
                <h3 class="text-xs uppercase font-semibold text-wd-l-label dark:text-wd-d-label">{{ $t('admin.topbar.notifications') }}</h3>
                <button class="text-xs text-wd-1 hover:text-wd-2 transition-all font-medium">{{ $t('admin.topbar.view_all') }}</button>
            </div>
            <ul class="max-h-80 overflow-y-auto p-2 space-y-1">
                <li v-for="nt in notifications" :key="nt.id" 
                    :class="[
                        !nt.read ? 'bg-transparent' : 'bg-wd-l-5 dark:bg-wd-d-7',
                        'px-4 py-2 hover:bg-wd-l-5 dark:hover:bg-wd-d-7 rounded-md text-xs cursor-pointer'
                    ]">
                    <div class="flex items-center">
                        <img class="size-9 rounded-full object-cover" src="/images/wd.svg">
                        <div class="ml-2">
                            <div class="space-x-1">
                                <span class="font-semibold text-wd-l-text dark:text-wd-d-text">{{ nt.name }}</span>
                                <span class="text-wd-l-label dark:text-wd-d-label">{{ nt.message }}</span>
                            </div>
                            <span class="text-xs text-wd-l-label">{{ nt.time }}</span>
                        </div>
                    </div>
                </li>
            </ul>
        </div>
    </div>
</template>
