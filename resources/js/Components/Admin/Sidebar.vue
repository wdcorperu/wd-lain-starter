<script setup>
import { Link } from '@inertiajs/vue3';
import navigation from '@/Utils/navigation';

defineProps({
    open: Boolean
})

const isAnyChildActive = (item) => {
    if (!item.children) return false;
}
</script>

<template>
    <aside :class="[
        'fixed inset-y-0 left-0 z-30 w-64 bg-wd-l-4 dark:bg-wd-d-6 transform transition-transform duration-300 lg:translate-x-0',
        open ? 'translate-x-0' : '-translate-x-full'
    ]">
        <div class="flex flex-col h-full">
            <div class="flex items-center justify-between h-16 px-6 border-b border-wd-l-5 dark:border-wd-d-7">
                <Link :href="route('dashboard')" class="text-xl font-bold text-wd-l-text dark:text-wd-d-text">Mi App</Link>
            </div>

            <nav class="flex-1 px-4 py-6 space-y-2 overflow-y-auto">
                <template v-for="item in navigation" :key="item.name">
                    <div v-if="!item.children">
                        <Link :href="item.href" :class="[
                            route().current(item.route) 
                            ? 'bg-wd-l-5 dark:bg-wd-4 text-wd-l-text dark:text-wd-d-text' 
                            : 'text-wd-l-text dark:text-wd-d-text',
                            'group transition-all flex items-center px-4 py-2.5 text-sm font-normal rounded-md hover:bg-wd-l-5 dark:hover:bg-wd-4 hover:text-wd-l-text dark:hover:text-wd-d-text'
                        ]">
                            <component :is="item.icon" class="w-5 h-5 mr-3" />
                            {{ $t(`admin.nav.${item.name}`) }}
                        </Link>
                    </div>
                    <div v-else>
                        <div :class="[
                            isAnyChildActive(item) ? 'bg-wd-l-5 dark:bg-wd-d-7 text-wd-l-text dark:text-wd-d-text' : 'text-wd-l-label dark:text-wd-d-label',
                            'px-0 pt-5 pb-4 text-xs font-semibold uppercase tracking-wider'
                        ]">
                            {{ $t(`admin.nav.${item.name}`) }}
                        </div>
                        <div class="space-y-2">
                            <Link 
                                v-for="child in item.children" 
                                :key="child.name"
                                :href="child.href" 
                                :class="[
                                    route().current(child.route) 
                                        ? 'bg-wd-l-5 dark:bg-wd-4 text-wd-l-text dark:text-wd-d-text' 
                                        : 'text-wd-l-text dark:text-wd-d-text',
                                    'group transition-all flex items-center px-4 py-2.5 text-sm font-normal rounded-md hover:bg-wd-l-5 dark:hover:bg-wd-4 hover:text-wd-l-text dark:hover:text-wd-d-text'
                                ]"
                            >
                                <component :is="child.icon" class="w-5 h-5 mr-3" />
                                {{ $t(`admin.nav.${child.name}`) }}
                            </Link>
                        </div>
                    </div>
                </template>
            </nav>
        </div>
    </aside>
</template>