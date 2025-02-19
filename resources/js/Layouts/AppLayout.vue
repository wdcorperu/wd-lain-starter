<script setup>
import { ref } from 'vue'
import { Head } from '@inertiajs/vue3';
import Sidebar from '@/Components/Admin/Sidebar.vue'
import Topbar from '@/Components/Admin/Topbar.vue'
import { inject } from 'vue'

defineProps({
    title: String,
});

const isSidebarOpen = ref(false)

const toggleSidebar = () => isSidebarOpen.value = !isSidebarOpen.value

const isDark = inject('isDark')
</script>

<template>
    <div :class="{ 'dark': isDark }">
        <div class="min-h-screen bg-wd-l-5 dark:bg-wd-d-7">
            <Head :title="title" />
    
            <div v-show="isSidebarOpen" class="fixed inset-0 z-20 bg-black/50 lg:hidden" @click="toggleSidebar" />
            <!-- =========== Sidebar =========== -->
            <Sidebar :open="isSidebarOpen" />
            
            <div :class="[
                'lg:pl-64 flex flex-col min-h-screen',
                isSidebarOpen ? 'lg:pl-64' : 'lg:pl-0'
            ]">
                <!-- =========== Topbar =========== -->
                <Topbar @toggle-sidebar="toggleSidebar" :title="title"/>
                <!-- =========== Header =========== -->
                <!-- <header v-if="$slots.header" class="bg-white/60 shadow backdrop-blur-lg">
                    <div class="max-w-7xl mx-auto py-4 px-4 sm:px-6 lg:px-8">
                        <slot name="header" />
                    </div>
                </header> -->
                <!-- =========== Main =========== -->
                <main class="flex-1 p-4">
                    <slot />
                </main>
            </div>
    
        </div>
    </div>
</template>
