<template>
    <div class="min-h-screen flex">
      <!-- Lado izquierdo: Imagen de fondo -->
      <div
        class="hidden lg:flex w-full items-center justify-center bg-gray-50 bg-cover bg-center"
        style="background-image: url('https://images.pexels.com/photos/1181248/pexels-photo-1181248.jpeg');"
      />
  
      <!-- Lado derecho: Contenedor de logo y formulario -->
      <div class="flex w-full lg:w-1/2 flex-col justify-center px-8 py-8 bg-white">
        <!-- Contenedor del logo con ancho máximo -->
        <div class="max-w-xs w-full mx-auto flex justify-center">
          <slot name="logo" />
        </div>
        <!-- Contenedor del formulario con ancho máximo -->
        <div class="mt-6 mx-auto max-w-xs w-full bg-white">
          <slot />
        </div>
      </div>
    </div>
  </template>
  