<template>
    <div class="min-h-screen flex">
        <div class="hidden lg:flex w-full items-center justify-center bg-gray-50 bg-cover bg-center" 
            style="background-image: url('https://images.pexels.com/photos/1181248/pexels-photo-1181248.jpeg');"
        />

        <div class="flex w-full lg:w-1/2 flex-col justify-center px-8 lg:px-10 py-8 bg-white">
            <div class="mx-auto">
                <slot name="logo" />
            </div>
            <div class="mt-6 bg-white">
                <slot />
            </div>
        </div>
    </div>
</template>
