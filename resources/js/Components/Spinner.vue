<script setup>
defineProps({
    color: {
        type: String,
        default: 'bg-white',
    },
    model: {
        type: String,
        default: 'solid',
    }
})
const baseClasses = 'absolute bg-transparent w-full h-full top-0 left-0 flex items-center justify-center backdrop-blur-sm'
const getDotStyle = (index) => {
    const angle = (index - 1) * 30; // Posicionar los puntos en círculo
    const delay = (index - 1) * 0.1; // Retraso secuencial para el efecto fade

    return {
        transform: `rotate(${angle}deg) translate(10px)`,
        animation: `fadeAnimation 1.2s linear infinite`,
        animationDelay: `${delay}s`,
        opacity: `${1 - (index * 0.08)}`, // Gradiente de opacidad
    };
}
</script>

<template>
    <div v-if="model === 'solid'" :class="baseClasses">
        <div class="w-5 h-5 border-[3px] border-solid border-t-transparent rounded-full animate-spin" />
    </div>
    <div v-else-if="model === 'dashed'" :class="baseClasses">
        <span v-for="i in 12" :key="i" :class="[
            color,
            'absolute w-1 h-1 rounded-full'
        ]" :style="getDotStyle(i)" />
    </div>
    <div v-else :class="baseClasses">
        loading...
    </div>
</template>

<style>
@keyframes fadeAnimation {
    0% {
        opacity: 1;
    }

    100% {
        opacity: 0.2;
    }
}
</style>