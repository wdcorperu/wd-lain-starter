<script setup>
import { Link } from '@inertiajs/vue3';
import navigation from '@/Config/navigation';

defineProps({
    open: Boolean
})

const isAnyChildActive = (item) => {
    if (!item.children) return false;
}
</script>

<template>
    <aside :class="[
        'fixed inset-y-0 left-0 z-30 w-64 bg-white border-r transform transition-transform duration-300 lg:translate-x-0',
        open ? 'translate-x-0' : '-translate-x-full'
    ]">
        <div class="flex flex-col h-full">
            <div class="flex items-center justify-between h-16 px-4 border-b">
                <Link :href="route('dashboard')" class="text-xl font-bold">Mi App</Link>
            </div>

            <nav class="flex-1 px-4 py-6 space-y-2 overflow-y-auto">
                <template v-for="item in navigation" :key="item.name">
                    <div v-if="!item.children">
                        <Link :href="item.href" :class="[
                            route().current(item.route) ? 'bg-gray-100 text-gray-900' : 'text-gray-600 hover:bg-gray-50 hover:text-gray-900',
                            'group flex items-center px-2 py-2 text-sm font-medium rounded-md'
                        ]">
                            <component :is="item.icon" class="w-5 h-5 mr-3" />
                            {{ item.name }}
                        </Link>
                    </div>
                    <div v-else>
                        <div :class="[
                            isAnyChildActive(item) ? 'bg-gray-900' : 'text-gray-400',
                            'px-0 pt-5 pb-4 text-xs font-semibold uppercase tracking-wider'
                        ]">
                            {{ item.name }}
                        </div>
                        <div class="space-y-2">
                            <Link 
                                v-for="child in item.children" 
                                :key="child.name"
                                :href="child.href" 
                                :class="[
                                    route().current(child.route) 
                                        ? 'bg-gray-100 text-gray-900' 
                                        : 'text-gray-600 hover:bg-gray-50 hover:text-gray-900',
                                    'group flex items-center px-2 py-2 text-sm font-medium rounded-md'
                                ]"
                            >
                                <component :is="child.icon" class="w-6 h-6 mr-3" />
                                {{ child.name }}
                            </Link>
                        </div>
                    </div>
                </template>
            </nav>
        </div>
    </aside>
</template>
