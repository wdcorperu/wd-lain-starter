<script setup>
import { ref } from 'vue'
import { Head } from '@inertiajs/vue3';
import Sidebar from '@/Components/Admin/Sidebar.vue'
import Topbar from '@/Components/Admin/Topbar.vue'
defineProps({
    title: String,
});

const isSidebarOpen = ref(false)

const toggleSidebar = () => isSidebarOpen.value = !isSidebarOpen.value
</script>

<template>
    <div class="min-h-screen bg-gray-100">
        <Head :title="title" />

        <div v-show="isSidebarOpen" class="fixed inset-0 z-20 bg-black/50 lg:hidden" @click="toggleSidebar" />
        <!-- =========== Sidebar =========== -->
        <Sidebar :open="isSidebarOpen" />
        
        <div :class="[
            'lg:pl-64 flex flex-col min-h-screen',
            isSidebarOpen ? 'lg:pl-64' : 'lg:pl-0'
        ]">
            <!-- =========== Topbar =========== -->
            <Topbar @toggle-sidebar="toggleSidebar" />
            <!-- =========== Header =========== -->
            <header v-if="$slots.header" class="bg-white shadow">
                <div class="max-w-7xl mx-auto py-6 px-4 sm:px-6 lg:px-8">
                    <slot name="header" />
                </div>
            </header>
            <!-- =========== Main =========== -->
            <main class="flex-1 p-4">
                <slot />
            </main>
        </div>

    </div>
</template>
