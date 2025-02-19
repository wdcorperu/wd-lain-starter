<script setup>
import SectionTitle from './SectionTitle.vue';
</script>

<template>
    <div class="md:grid md:grid-cols-3 md:gap-6">
        <SectionTitle>
            <template #title>
                <span class="text-wd-l-label dark:text-wd-d-label">
                    <slot name="title"/>
                </span>
            </template>
            <template #description>
                <span class="text-wd-l-label dark:text-wd-d-label">
                    <slot name="description" />
                </span>
            </template>
        </SectionTitle>

        <div class="mt-5 md:mt-0 md:col-span-2">
            <div class="px-4 py-5 sm:p-6 bg-wd-l-4 dark:bg-wd-d-6 shadow sm:rounded-lg">
                <slot name="content" />
            </div>
        </div>
    </div>
</template>
