<script setup>
import { ref, watch } from 'vue';
import { router } from '@inertiajs/vue3';
import { MagnifyingGlassIcon } from '@heroicons/vue/24/outline';
import debounce from 'debounce';
import Pagination from '@/Components/Pagination.vue';

const props = defineProps({
    searchPlaceholder: {
        type: String,
        default: 'Buscar...',
    },
    columns: {
        type: Array,
        required: true,
    },
    data: {
        type: Object,
        required: true,
    },
    routeName: {
        type: String,
        required: true,
    },
});

const searchQuery = ref('');

const debounceSearch = debounce((value) => {
    router.get(route(props.routeName), { search: value }, { preserveState: true, preserveScroll: true })
}, 300);

watch(searchQuery, (value) => {
    debounceSearch(value)
});
</script>
<template>
    <div>
        <!-- Header con título y búsqueda -->
        <div class="flex items-center justify-end">
            <!-- Búsqueda -->
            <div class="relative">
                <input type="search" v-model="searchQuery" :placeholder="searchPlaceholder"
                    class="w-64 pl-10 pr-4 py-2 border rounded-md focus:ring-2 focus:ring-blue-500" />
                <MagnifyingGlassIcon class="absolute w-5 h-5 text-gray-400 left-3 top-2.5" />
            </div>
        </div>

        <!-- Tabla -->
        <div class="bg-white shadow-sm rounded-lg overflow-hidden">
            <div class="overflow-x-auto">
                <table class="min-w-full divide-y divide-gray-200">
                    <thead class="bg-gray-50">
                        <tr>
                            <th v-for="column in columns" :key="column.key" :class="[
                                'px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider',
                                column.class
                            ]">
                                {{ column.label }}
                            </th>
                            <th v-if="$slots.actions"
                                class="px-6 py-3 text-right text-xs font-medium text-gray-500 uppercase tracking-wider">
                                Acciones
                            </th>
                        </tr>
                    </thead>
                    <tbody class="bg-white divide-y divide-gray-200">
                        <tr v-for="item in data.data" :key="item.id">
                            <td v-for="column in columns" :key="column.key" class="px-6 py-4 whitespace-nowrap">
                                <!-- Slot personalizado para la columna -->
                                <slot :name="column.key" :item="item" :value="item[column.key]">
                                    {{ item[column.key] }}
                                </slot>
                            </td>
                            <!-- Slot para acciones -->
                            <td v-if="$slots.actions"
                                class="px-6 py-4 whitespace-nowrap text-right text-sm font-medium">
                                <slot name="actions" :item="item"></slot>
                            </td>
                        </tr>
                        <!-- Estado vacío -->
                        <tr v-if="data.data.length === 0">
                            <td :colspan="columns.length + ($slots.actions ? 1 : 0)"
                                class="px-6 py-4 text-center text-gray-500">
                                No se encontraron resultados
                            </td>
                        </tr>
                    </tbody>
                </table>
            </div>
        </div>

        <!-- Paginación -->
        <Pagination v-if="data.links" :links="data.links" class="mt-6"/>
    </div>
</template>