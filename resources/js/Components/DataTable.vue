<script setup>
import { ref, watch } from 'vue';
import { router } from '@inertiajs/vue3';
import { MagnifyingGlassIcon } from '@heroicons/vue/24/outline';
import debounce from 'debounce';
import Pagination from '@/Components/Pagination.vue';
import PrimaryButton from '@/Components/PrimaryButton.vue';
import { PlusIcon } from '@heroicons/vue/24/outline';

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
    btnCreate: {
        type: Boolean,
        default: false,
    }
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
        <div class="bg-wd-l-4 dark:bg-wd-d-6 shadow rounded-lg overflow-hidden p-4">
            <!-- Search - Create -->
            <div class="flex items-center justify-between mb-4">
                <div class="relative">
                    <input type="search" v-model="searchQuery" :placeholder="searchPlaceholder"
                        class="w-64 pl-10 py-2 bg-wd-l-4 dark:bg-wd-d-7 border-wd-l-placeholder dark:border-wd-d-placeholder placeholder:text-wd-l-placeholder dark:placeholder:text-wd-d-placeholder text-wd-l-text dark:text-wd-d-text rounded-md focus:ring-1 focus:ring-wd-1" />
                    <MagnifyingGlassIcon class="absolute w-5 h-5 text-wd-l-placeholder dark:text-wd-d-placeholder left-3 top-2.5" />
                </div>

                <PrimaryButton v-if="btnCreate" type="button" class="bg-nc-primary" @click="$emit('open-modal', 'create')">
                    {{ $t('admin.datatable.create') }}
                    <PlusIcon class="w-4 h-4 ml-3" />
                </PrimaryButton>
            </div>
            <!-- Table -->
            <div class="overflow-x-auto">
                <table class="min-w-full">
                    <thead class="bg-wd-l-5 dark:bg-wd-d-7">
                        <tr>
                            <th v-for="column in columns" :key="column.key" :class="[
                                'px-6 py-3 text-left text-xs font-bold text-wd-l-text dark:text-wd-d-text uppercase tracking-wider',
                                column.class
                            ]">
                                {{ column.label }}
                            </th>
                            <th v-if="$slots.actions"
                                class="px-6 py-3 text-right text-xs font-bold text-wd-l-text dark:text-wd-d-text uppercase tracking-wider">
                                {{ $t('admin.datatable.actions') }}
                            </th>
                        </tr>
                    </thead>
                    <tbody class="bg-wd-l-4 dark:bg-wd-d-6 divide-y divide-wd-l-5 dark:divide-wd-d-7">
                        <tr v-for="item in data.data" :key="item.id">
                            <td v-for="column in columns" :key="column.key" class="px-6 py-3 whitespace-nowrap text-sm font-extralight text-wd-l-text dark:text-wd-d-text">
                                <!-- Slot personalizado para la columna -->
                                <slot :name="column.key" :item="item" :value="item[column.key]">
                                    {{ item[column.key] }}
                                </slot>
                            </td>
                            <!-- Slot para acciones -->
                            <td v-if="$slots.actions"
                                class="px-6 py-3 whitespace-nowrap text-right text-sm font-medium">
                                <slot name="actions" :item="item"></slot>
                            </td>
                        </tr>
                        <!-- Estado vacío -->
                        <tr v-if="data.data.length === 0">
                            <td :colspan="columns.length + ($slots.actions ? 1 : 0)"
                                class="px-6 py-4 text-center text-gray-500">
                                {{ $t('admin.datatable.not_results') }}
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