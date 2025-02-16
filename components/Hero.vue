<template>
  <div class="h-[90vh] flex items-center justify-center relative bg-gray-50 overflow-hidden">
    <div class="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
      <div class="relative">
        <div class="text-center">
          <h1 class="text-4xl tracking-tight font-extrabold text-gray-900 sm:text-5xl md:text-6xl">
            <span class="block fade-blur-up animation-delay-100 initial-state">{{ $t('hero.greeting') }}</span>
            <span class="block text-blue-600 md:mt-3 fade-blur-up animation-delay-200 initial-state">{{ name }} {{ emoji }}</span>
          </h1>
          <p class="mt-3 max-w-md mx-auto text-base text-gray-500 sm:text-lg md:mt-5 md:text-xl md:max-w-3xl fade-blur-up animation-delay-300 initial-state">
            {{ role }}
          </p>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
  interface HeroProps {
    name: string
    role: string
    emoji?: string
  }

  withDefaults(defineProps<HeroProps>(), {
    emoji: '👋'
  })
</script>

<style scoped>
.initial-state {
    opacity: 0;
    transform: translateY(20px);
    filter: blur(10px);
}

@keyframes fadeBlurUp {
  0% {
    opacity: 0;
    transform: translateY(20px);
    filter: blur(10px);
  }
  100% {
    opacity: 1;
    transform: translateY(0);
    filter: blur(0);
  }
}

.fade-blur-up {
    animation: fadeBlurUp 0.5s ease-out forwards;
}

.animation-delay-100 {
    animation-delay: 100ms;
}

.animation-delay-200 {
    animation-delay: 200ms;
}

.animation-delay-300 {
    animation-delay: 300ms;
}
</style> 