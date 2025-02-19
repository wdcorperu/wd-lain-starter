<script setup>
import { Bars3Icon } from '@heroicons/vue/24/outline'
import { router } from '@inertiajs/vue3';
import Dropdown from '@/Components/Dropdown.vue';
import DropdownLink from '@/Components/DropdownLink.vue';
import Translate from '@/Components/Admin/Translate.vue';
import DarkMode from '@/Components/Admin/DarkMode.vue';
import Notifications from '@/Components/Admin/Notifications.vue';

defineProps({
    title: String,
})

const logout = () => {
    router.post(route('logout'));
}
</script>

<template>
    <header class="sticky top-0 z-10 flex items-center h-16 bg-wd-l-4/80 dark:bg-wd-d-6/80 backdrop-blur-md">
        <div class="flex items-center justify-between flex-1 px-2 lg:px-8">
            <button class="p-2 rounded-md lg:hidden hover:bg-wd-l-5 dark:hover:bg-wd-d-7" @click="$emit('toggle-sidebar')">
                <Bars3Icon class="w-6 h-6 text-wd-l-text dark:text-wd-d-text"/>
            </button>
            <!-- Title View -->
            <h2 class="hidden lg:block font-semibold text-xl text-wd-l-text dark:text-wd-d-text">
                {{ title }}
            </h2>
            <div class="flex-1"/>
            <div class="flex items-center space-x-4 lg:space-x-6 mr-2 lg:mr-0">
                <!-- Button Mode -->
                <DarkMode />
                <!-- Button Translate -->
                <Translate />
                <!-- Button Notifications -->
                <Notifications />
                <!-- Button Settings -->
                <Dropdown align="right" width="48">
                    <template #trigger>
                        <button v-if="$page.props.jetstream.managesProfilePhotos" class="flex text-sm border-2 border-transparent rounded-full focus:outline-none focus:border-gray-300 transition">
                            <img class="size-8 rounded-full object-cover" :src="$page.props.auth.user.profile_photo_url" :alt="$page.props.auth.user.name">
                        </button>
                        <span v-else class="inline-flex rounded-md">
                             <button type="button" class="inline-flex items-center px-3 py-2 border border-transparent text-sm leading-4 font-medium rounded-md text-gray-500 bg-white hover:text-gray-700 focus:outline-none focus:bg-gray-50 active:bg-gray-50 transition ease-in-out duration-150">
                                 {{ $page.props.auth.user.name }}
                                <svg class="ms-2 -me-0.5 size-4" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor">
                                    <path stroke-linecap="round" stroke-linejoin="round" d="M19.5 8.25l-7.5 7.5-7.5-7.5" />
                                </svg>
                            </button>
                        </span>
                    </template>
                    <template #content>
                        <!-- Account Management -->
                        <div class="block px-4 py-2 text-xs text-gray-400">
                            Manage Account
                        </div>
                        <DropdownLink :href="route('profile.show')">
                            Profile
                        </DropdownLink>
                        <DropdownLink v-if="$page.props.jetstream.hasApiFeatures" :href="route('api-tokens.index')">
                            API Tokens
                        </DropdownLink>
                        <div class="border-t border-gray-200" />
                        <!-- Authentication -->
                        <form @submit.prevent="logout">
                            <DropdownLink as="button">
                                Log Out
                            </DropdownLink>
                        </form>
                    </template>
                </Dropdown>
            </div>
        </div>
    </header>
</template>
