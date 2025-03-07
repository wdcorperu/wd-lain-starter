<template>
    <div class="min-h-screen flex p-6 bg-wd-l-6 dark:bg-wd-d-7">
      <!-- Lado izquierdo: Imagen de fondo -->
      <div
        class="hidden lg:flex w-full items-center justify-center bg-cover bg-center rounded-md"
        style="background-image: url('https://images.pexels.com/photos/1181248/pexels-photo-1181248.jpeg');"
      />
  
      <!-- Lado derecho: Contenedor de logo y formulario -->
      <div class="flex w-full lg:w-1/2 flex-col justify-center px-8 py-8 bg-wd-l-4 dark:bg-wd-d-7">
        <!-- Contenedor del logo con ancho máximo -->
        <div class="max-w-xs w-full mx-auto flex justify-center">
          <slot name="logo" />
        </div>
        <!-- Contenedor del formulario con ancho máximo -->
        <div class="mt-6 mx-auto max-w-xs w-full bg-wd-l-4 dark:bg-wd-d-7">
          <slot />
        </div>
      </div>
    </div>
  </template>
  